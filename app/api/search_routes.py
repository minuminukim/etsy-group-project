from flask import Blueprint, request
from app.models import Product

search_routes = Blueprint("search", __name__)


@search_routes.route('/<string:query>')
def search(query):
       products = Product.query.filter(Product.title.contains(query))
       return {"products": [product.to_dict() for product in products]}