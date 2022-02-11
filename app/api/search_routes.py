from flask import Blueprint, request
from app.models import Product
from sqlalchemy import func

search_routes = Blueprint("search", __name__)


@search_routes.route('/<string:query>')
def keyword_search(query):
    modified_query = query.lower()
    products = Product.query.filter(func.lower(Product.title).contains(modified_query)).limit(12) 
    return {"products": [product.to_dict() for product in products]}
