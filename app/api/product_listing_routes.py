from flask import Blueprint
from app.models import Product, ProductImage, db
from flask_login import login_required

product_listing_routes = Blueprint("product_listing", __name__)


@product_listing_routes.route("/")
def get_products():
    """
    Returns all product listings.
    """
    products = Product.query.all()
    # print('product@@@@@@@@@@@@@@@@@@', products[1])
    # return "Hello World"
    return {"products": [product.to_dict() for product in products]}


@product_listing_routes.route("/<int:id>")
def get_product_by_id(id):
    product = Product.query.get(id)
    return product.to_dict()


@product_listing_routes.route("/<int:id>/reviews")
def get_product_reviews(id):
    pass


@product_listing_routes.route("/", methods=["POST"])
def add_product():
    pass

