from flask import Blueprint, jsonify
from app.models import Review

review_routes = Blueprint('reviews', __name__)


# @review_routes.route('/')
# def reviews():
#     reviews = Review.query.all()
#     return {'reviews': [review.to_dict() for review in reviews]}

@review_routes.route(':/<id>')
def review(id):
    """
    Return all reviews for a listing.
    """

    reviews = Review.query.filter_by(product_id=id).all()
    return {'reviews': [review.to_dict() for review in reviews]}
