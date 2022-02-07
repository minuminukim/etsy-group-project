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
