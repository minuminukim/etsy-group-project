from flask import Blueprint, jsonify, session, request
from app.forms import ReviewForm
from app.models import db, Review

review_routes = Blueprint('reviews', __name__)


# @review_routes.route('/')
# def reviews():
#     """
#     Fetch all reviews in db. Will not be using this route in app, just testing seeds.
#     """

#     reviews = Review.query.all()
#     return {'reviews': [review.to_dict() for review in reviews]}


@review_routes.route('/<int:id>')
def review(id):
    """
    Return all reviews for a listing.
    """
    print('INSIDE API ROUTEXXXXXXXXXXXXXXXXXXX')
    reviews = Review.query.filter_by(product_id=id).all()
    return {'reviews': [review.to_dict() for review in reviews]}


@review_routes.route('/', methods=['POST'])
def create_review():
    """
    Create a review for a listing.
    """
    form = ReviewForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        review = Review(
            user_id=request.json["user_id"],
            product_id=request.json["product_id"],
            rating=form.data["rating"],
            body=form.data["body"]
        )

        db.session.add(review)
        db.session.commit()

        return review.to_dict()


@review_routes.route('/<int:id>', methods=['PATCH'])
def edit_review(id):
    """
    Edit a review for a listing.
    """
    review = Review.query.get(id)
    review.body = request.json["body"]

    db.session.commit()

    return {"hello": f'{id}'}


@review_routes.route('/<int:id>', methods=['DELETE'])
def delete_review(id):
    """
    Delete a review from a listing.
    """
    review = Review.query.get(id)

    db.session.delete(review)
    db.session.commit()

    return {'IN': 'DELETE'}
