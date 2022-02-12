from time import clock_getres
from flask import Blueprint, request
from app.models import Product, Purchase, db
from flask_login import login_required

purchase_routes = Blueprint("purchase", __name__)


@purchase_routes.route("/", methods=["POST"])
# @login_required
def add_purchase():
    """
    Creates new purchases.
    """
    items = request.json["purchases"]
    purchases = []

    for item in items:
        user_id = item["user_id"]
        product_id = item["product_id"]
        title = item["product_title"]
        quantity = item["quantity"]
        cart_id = item["id"]

        product = Product.get_by_id(product_id)

        if product.archived:
            return {"errors": [cart_id, "Product is no longer for sale."]}, 400

        if product.stock - quantity >= 0:
            product.purchase(quantity)

            new_purchase = Purchase(
                user_id=user_id, product_id=product_id, quantity=quantity
            )

            db.session.add(new_purchase)
            db.session.commit()
        elif product.stock == 0:
            return {
                "errors": [cart_id, f"Invalid purchase: This item is out of stock. Please remove this item from cart before proceeding"]
   
            }, 400
        else:
            return {
                "errors": [cart_id, f"Invalid purchase: There is only {product.stock} left of this item. Select less than or equal to {product.stock} items "]
            }, 400

        purchases.append(new_purchase)

    return {"purchases": [purchase.to_dict() for purchase in purchases]}
