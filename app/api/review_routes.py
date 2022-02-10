from flask import Blueprint, jsonify, session, request
from app.forms import ReviewForm
from app.models import db, Review, User

review_routes = Blueprint('reviews', __name__)



def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages
    

@review_routes.route('/<int:id>')
def review(id):
    """
    Return all reviews for a listing.
    """
    reviews = Review.query.order_by(Review.updated_at.desc()).join(User).filter(
        Review.product_id == (id) and Review.user_id == (User.id)
    ).all()

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
    return {'errors': form.errors}, 400



@review_routes.route('/<int:id>', methods=['PATCH'])
def edit_review(id):
    """
    Edit a review for a listing.
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
        review = Review.query.get(int(request.json["review_id"]))

        review.body = request.json["body"]
        review.rating = request.json["rating"]

        db.session.commit()

        return review.to_dict()
    return {'errors': form.errors}, 400


@review_routes.route('/<int:id>', methods=['DELETE'])
def delete_review(id):
    """
    Delete a review from a listing.
    """
    review = Review.query.get(id)

    db.session.delete(review)
    db.session.commit()

    return {'IN': 'DELETE'}
