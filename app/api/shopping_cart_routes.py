from flask import Blueprint


shopping_cart_routes = Blueprint("shopping_cart", __name__, , url_prefix="/mycart")


@shopping_cart_routes.route("/<int:id>")
def get_cart_items_for_user(id):
    