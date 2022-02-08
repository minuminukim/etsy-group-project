from flask import Blueprint
from app.models import Product
from app.forms.search_form import SearchForm
search_routes = Blueprint("search", __name__)


@search_routes.route('/', methods=["GET", "POST"])
def search():
    form = SearchForm()
    query = form.data
    if form.validate_on_submit():
        products = Product.query.filter(Product.title.ilike(query))
        return {"products": [product.to_dict() for product in products]}
    else:
        return "No products available"