from flask import Blueprint, request
from app.models import Product

category_routes = Blueprint("category", __name__)

@category_routes.route('/<string:category>')
def category_search(category):
      products = Product.query.filter(Product.category == category).limit(12)
      return {"products": [product.to_dict() for product in products]}

@category_routes.route('/sale')
def on_sale():
    products = Product.query.filter(Product.discount > 0)
    return {"products": [product.to_dict() for product in products]}