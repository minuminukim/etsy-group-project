from flask_wtf import FlaskForm
from wtforms.validators import DataRequired, NumberRange, Length, ValidationError
from wtforms import StringField, IntegerField, SubmitField


class ReviewForm(FlaskForm):
    rating = IntegerField("Rating", validators=[DataRequired("Please provide a rating."), NumberRange(min=0, max=10, message="Rating must be between 0 and 10")])
    body = StringField("Review", validators=[DataRequired("Review is empty!"), Length(min=1, max=2000, message="Your review cannot be empty and cannot be more than 2000 characters long.")])
