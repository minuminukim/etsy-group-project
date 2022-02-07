from flask import Blueprint, jsonify
from app.models import db, Review

review_routes = Blueprint('reviews', __name__)


@review_routes.route('/')
def reviews():
    """
    Fetch all reviews in db. Will not be using this route in app, just testing seeds.
    """

    reviews = Review.query.all()
    return {'reviews': [review.to_dict() for review in reviews]}

@review_routes.route('/<id>')
def review(id):
    """
    Return all reviews for a listing.
    """

    reviews = Review.query.filter_by(product_id=id).all()
    return {'reviews': [review.to_dict() for review in reviews]}


@review_routes.route('/', methods=['POST'])
def create_review(userId, reviewId):
    # use userId, reviewId in params
    """
    Create a review for a listing.
    """

    new_review = Review(
        user_id=userId,
        product_id=reviewId,
        rating=7,
        body='MORE TESTING',
    )

    db.session.add(new_review)
    db.session.commit()
    return new_review.to_dict()
