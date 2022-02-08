from flask import Blueprint, request
from app.models import Product

category_routes = Blueprint("category", __name__)

@category_routes.route('/<string:category>')
def category_search(category):
      print(category)
      products = Product.query.filter(Product.category == category)
      return {"products": [product.to_dict() for product in products]}