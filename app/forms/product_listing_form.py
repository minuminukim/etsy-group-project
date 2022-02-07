from flask_wtf import FlaskForm
from wtforms.validators import DataRequired, Length, NumberRange
from wtforms.fields import (
    StringField,
    SelectField,
    TextAreaField,
    IntegerField,
    DecimalField,
    SubmitField,
)


class ProductListingForm(FlaskForm):
    title = StringField(
        "Title",
        validators=[
            DataRequired(),
            Length(
                min=1,
                max=255,
                message=f"Title must be between {min} and {max} characters long.",
            ),
        ],
    )

    category = SelectField(
        "Category",
        choices=[
            ("keyboards", "Keyboards"),
            ("switches", "Switches"),
            ("keycaps", "Keycaps"),
            ("diy_kits", "DIY Kits"),
        ],
        validators=[DataRequired()],
    )

    description = TextAreaField(
        "Description",
        validators=[
            DataRequired(),
            Length(
                min=1,
                max=4000,
                message=f"Description must be between {min} and {max} characters long.",
            ),
        ],
    )

    price = DecimalField(
        "Price",
        places=2,
        validators=[
            DataRequired(),
            NumberRange(
                min=0.00,
                max=9999.99,
                message=f"Price must be between ${min} and ${max}.",
            ),
        ],
    )

    stock = IntegerField("Stock", validators=[DataRequired()])

    submit = SubmitField("Save")
