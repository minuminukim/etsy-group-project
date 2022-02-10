from flask import Blueprint, request
from app.models import Product, ProductImage, Review, db
from flask_login import login_required, current_user
from app.forms import ProductListingForm
from app.s3_helpers import upload_file_to_s3, allowed_file, get_unique_filename

product_listing_routes = Blueprint("product_listing", __name__)


@product_listing_routes.route("/")
def get_products():
    """
    Returns all product listings.
    """
    products = Product.get_all()
    return {"products": [product.to_dict() for product in products]}


@product_listing_routes.route("/<int:id>")
def get_product_by_id(id):
    """
    Returns a product listing by id.
    """
    product = Product.get_by_id(id)
    return product.to_dict()


@product_listing_routes.route("/<int:id>/reviews")
def get_product_reviews(id):
    """
    Returns a product's reviews.
    """
    reviews = Review.query.filter(Review.product_id == id).all()
    return {"reviews": [review.to_dict() for review in reviews]}


@product_listing_routes.route("/<int:id>/product_images")
def get_product_images(id):
    """
    Returns a product's associated images.
    """
    images = ProductImage.query.filter(ProductImage.product_id == id).all()
    return {"images": [image.image_url for image in images]}


@product_listing_routes.route("/<int:id>/product_images", methods=["POST"])
# @login_required
def upload_product_image(id):
    """
    Creates a new product image.
    """
    image_urls = []

    if "images" not in request.files:
        return {"errors": "Image required."}, 400

    images = request.files.getlist("images")

    if len(images) > 5:
        return {"errors": "Upload cannot exceed five images per listing."}, 400

    for image in images:
        if not allowed_file(image.filename):
            return {"errors": "File type not permitted."}

        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)

        if "image_url" not in upload:
            # if the dictionary doesn't have a url key
            # it means that there was an error when we tried to upload
            # so we send back that error message
            return upload, 400

        image_url = upload["image_url"]
        new_image = ProductImage(product_id=id, image_url=image_url)

        db.session.add(new_image)
        db.session.commit()

        image_urls.append(image_url)

    return {id: {"image_url": image_urls}}


@product_listing_routes.route("/", methods=["POST"])
@login_required
def add_product():
    """
    Creates a new product listing.
    """
    form = ProductListingForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    print("@@@@@@@@@@@@@@@@", form.data)

    if form.validate_on_submit():
        product = Product.create(
            user_id=request.json["user_id"],
            title=form.data["title"],
            description=form.data["description"],
            price=float(form.data["price"]),
            stock=form.data["stock"],
            category=form.data["category"],
        )

        db.session.add(product)
        db.session.commit()

        return product.to_dict()

    return {"errors": form.errors}, 400


@product_listing_routes.route("/<int:id>", methods=["PUT"])
# @login_required
def update_product(id):
    """
    Updates a product listing's information
    """
    form = ProductListingForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    product = Product.get_by_id(id)

    if product and form.validate_on_submit():
        updated_product = Product.update(
            product=product,
            title=form.data["title"],
            description=form.data["description"],
            price=float(form.data["price"]),
            discount=form.data["discount"],
            stock=form.data["stock"],
            category=form.data["category"],
        )

        db.session.add(updated_product)
        db.session.commit()
        return updated_product.to_dict()

    return {"errors": form.errors}, 400


@product_listing_routes.route("/<int:id>", methods=["DELETE"])
# @login_required
def delete_product(id):
    """
    Deletes a product listing
    """
    print("@@@@@@@@@@@@@@@@@@@", id)
    # TODO: currently erroring on delete req because of dependent
    # product images... fix this,,,,
    product = Product.get_by_id(id)
    print("product", product)

    # TODO: implement error handling

    if product:
        db.session.delete(product)
        db.session.commit()

        return {"message": "You have successfully deleted your listing."}, 204
