from flask import Blueprint, request
from app.models import db, ProductImage
from flask_login import current_user, login_required
from app.s3_helpers import upload_file_to_s3, allowed_file, get_unique_filename

product_image_routes = Blueprint("product_images", __name__)


@product_image_routes("")
