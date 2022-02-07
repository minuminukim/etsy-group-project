from flask import Blueprint
from app.models import Product, ProductImage, Review, db
from flask_login import login_required
from app.forms import ProductListingForm

product_listing_routes = Blueprint("product_listing", __name__)


@product_listing_routes.route("/")
def get_products():
    """
    Returns all product listings.
    """
    products = Product.query.all()
    return {"products": [product.to_dict() for product in products]}


@product_listing_routes.route("/<int:id>")
def get_product_by_id(id):
    """
    Returns a product listing by id.
    """
    product = Product.query.get(id)
    return product.to_dict()


@product_listing_routes.route("/<int:id>/reviews")
def get_product_reviews(id):
    """
    Returns a product's reviews.
    """
    reviews = Review.query.filter(Review.product_id == id).all()
    return {"reviews": [review.to_dict() for review in reviews]}


@product_listing_routes.route("/", methods=["POST"])
@login_required
def add_product():
    """
    Creates a new product listing.
    """
    form = ProductListingForm()

    if form.validate_on_submit():
        product = Product(
            user_id=form.data["user_id"],
            title=form.data["title"],
            description=form.data["description"],
            price=form.data["price"],
            discount=form.data["discount"],
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
    pass


@product_listing_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_product(id):
    """
    Deletes a product listing
    """
    pass
