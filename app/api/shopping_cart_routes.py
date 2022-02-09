from flask import Blueprint, jsonify, request
from app.models import db, CartItem 

shopping_cart_routes = Blueprint("shopping_cart", __name__)

# READ in CRUD
# GET shopping cart items by user id
# IMPORTANT: "/<int:id>" is the userID
@shopping_cart_routes.route("/<int:id>")
def get_cart_items_by_userId(id):

    cart_items = CartItem.query.filter(CartItem.user_id == id)

    return {"cart_items": [item.to_dict() for item in cart_items]}



# UPDATE in CRUD
# This route updates the quantity for a cart item. Takes in id of cart item.
# IMPORTANT: "/<int:id>" is the id of the cart item.
@shopping_cart_routes.route("/<int:id>", methods=["PATCH"])
def update_cart_items(id):

    data = request.json

    new_quantity = int(data["quantity"])

    cart_item = CartItem.query.get(id)
    cart_item.quantity = new_quantity

    db.session.commit()

    cart_item = CartItem.query.get(id)

    if (cart_item.quantity == new_quantity):
        return {"message": "updated"}
    else:
        return {"message": "failed update"}


# CREATE in CRUD
# This route adds a product and it's quantity as a cart item
@shopping_cart_routes.route("new", methods=["POST"])
def add_cart_item():

    """
    MAKE SURE TO TAKE IN user_id, product_id, and quantity in
    json body in my reducer
    """ 
    data = request.json

    product_id = int(data["product_id"])

    quantity = int(data["quantity"])

    user_id = int(data["user_id"])


    cart_item = CartItem(user_id = user_id, product_id = product_id, quantity = quantity)

    db.session.add(cart_item)

    db.session.commit()

    cart_item = CartItem.query.filter(CartItem.user_id == user_id, CartItem.product_id == product_id, CartItem.quantity == quantity)

    if(cart_item):
        return {"message": "success"}
    else:
        return {"message": "failure"}
    



# DELETE in CRUD
# This route deletes single cart items or deletes all cart items when user purchases.
@shopping_cart_routes.route("/delete", methods=["DELETE"])
def delete_cart_item():

    data = request.json

    print(data, "111<><><><><><><><><><><><>")

    for id in data["items"]:
        
        cart_item = CartItem.query.get(int(id))

        
        db.session.delete(cart_item)
        db.session.commit()

    return {"message": "deleted"}














