import os
import uuid
import boto3
import botocore

BUCKET_NAME = os.environ.get("S3_BUCKET")
S3_LOCATION = f"http://{BUCKET_NAME}.s3.amazonaws.com/"
ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif"}

# Config s3 client
s3 = boto3.client(
    "s3",
    aws_access_key_id=os.environ.get("S3_KEY"),
    aws_secret_access_key=os.environ.get("S3_SECRET"),
)

# Filenames
def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


def get_unique_filename(filename):
    ext = filename.rsplit(".", 1)[1].lower()
    unique_filename = uuid.uuid4().hex
    return f"{unique_filename}.{ext}"


# Upload Helper
def upload_file_to_s3(file, acl="public-read"):
    try:
        s3.upload_fileobj(
            file,
            BUCKET_NAME,
            file.filename,
            ExtraArgs={"ACL": acl, "ContentType": file.content_type},
        )
    except Exception as e:
        # in case the s3 upload fails
        return {"errors": str(e)}

    # return file url if successful
    return {"image_url": f"{S3_LOCATION}{file.filename}"}

def upload_multiple_files_to_s3(files):
