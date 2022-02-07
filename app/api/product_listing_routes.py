from flask import Blueprint, request
from app.models import Product, ProductImage, Review, db
from flask_login import login_required
from app.forms import ProductListingForm

product_listing_routes = Blueprint("product_listing", __name__)


@product_listing_routes.route("/")
def get_products():
    """
    Returns all product listings.
    """
    # products = Product.query.all()
    products = Product.get_products()
    return {"products": [product.to_dict() for product in products]}


@product_listing_routes.route("/<int:id>")
def get_product_by_id(id):
    """
    Returns a product listing by id.
    """
    product = Product.get_product_by_id(id)
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
    return {"images": [image.to_dict() for image in images]}


@product_listing_routes.route("/", methods=["POST"])
# @login_required
def add_product():
    """
    Creates a new product listing.
    """
    form = ProductListingForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

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

    return {"errors": form.errors}, 401


@product_listing_routes.route("/<int:id>", methods=["PUT"])
@login_required
def update_product(id):
    """
    Updates a product listing's information
    """
    form = ProductListingForm()
    # product = Product.query.get(id)
    product = Product.get_product_by_id(id)
    # if product and form.validate_on_submit():

    # pass


@product_listing_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_product(id):
    """
    Deletes a product listing
    """
    product = Product.query.filter(Product.id == id).first_or_404()

    if product:
        db.session.delete(product)
        db.session.commit()

        return {"message": "You have successfully deleted your listing."}, 204
