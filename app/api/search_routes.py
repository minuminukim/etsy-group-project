from flask import Blueprint, request
from app.models import Product

search_routes = Blueprint("search", __name__)


@search_routes.route('/<string:query>')
def keyword_search(query):
       products = Product.query.filter(Product.title.contains(query)).limit(16)
       return {"products": [product.to_dict() for product in products]}

       ## the search is currently case sensitive

@search_routes.route('/<string:category>')
def category_search(category):
      print(category)
      products = Product.get(category)
      return {"products": [product.to_dict() for product in products]}