from flask import Blueprint, jsonify
from app.models import Review

review_routes = Blueprint('reviews', __name__)


@review_routes('/')
def reviews():
    reviews = Review.query.all()
    return {'reviews': [review.to_dict() for review in reviews]}
