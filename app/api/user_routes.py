from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Purchase, Product

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
# @login_required
def user(id):
    purchases = Purchase.query.filter(Purchase.user_id == id).all()
    products = Product.query.filter(Product.user_id == id).all()
    print("-======-=-=-=-=-=-=-=-=-purchases")
    return {"products": [product.to_dict() for product in products],
            "purchases": [purchase.to_dict for purchase in purchases]
            }
