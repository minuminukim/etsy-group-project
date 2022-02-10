from flask_wtf import FlaskForm
from wtforms.validators import DataRequired, Length, NumberRange
from wtforms.fields import (
    StringField,
    SelectField,
    TextAreaField,
    IntegerField,
    DecimalField,
)


class ProductListingForm(FlaskForm):
    title = StringField(
        "Title",
        validators=[
            DataRequired(),
            Length(
                min=1,
                max=255,
                message="Title must be between %(min)s and %(max)s characters long.",
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
                min=0,
                max=4000,
                message="Description cannot be longer than %(max)s characters.",
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
                message="Price must be between $%(min)s0 and $%(max)s.",
            ),
        ],
    )

    stock = IntegerField(
        "Stock",
        validators=[
            DataRequired(),
            NumberRange(min=1, message="Stock must be at least %(min)s"),
        ],
    )

    discount = IntegerField(
        "Discount", validators=[NumberRange(min=0, max=100)], default=0
    )
