from flask_wtf imort FlaskForm
from wtforms.validators import DataRequired, NumberRange, Length
from wtforms.fields import StringField, IntegerField, SubmitField


class ReviewForm(FlaskForm):
    rating = IntegerField("Rating", validators=[DataRequired(), NumberRange(min=0, max=10, message="Rating must be between 0 and 10")])
    body = StringField("Review", validators=[DataRequired(), Length(min=1, max=2000, message="Your review cannot be empty and cannot be more than 2000 characters long.")])

    submit = SubmitField("Submit")
