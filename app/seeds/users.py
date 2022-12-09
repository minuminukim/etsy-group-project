import os
from app.models import db, User

seed_password = "demopassword"
# seed_password = os.environ.get("SEED_PASSWORD")


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(username="Demo", email="demo@aa.io", password=seed_password)
    marnie = User(username="marnie", email="marnie@aa.io", password=seed_password)
    bobbie = User(username="bobbie", email="bobbie@aa.io", password=seed_password)
    cherry = User(username="cherry", email="cherry@aa.io", password=seed_password)
    keys4U = User(username="keys4U", email="keys4U@aa.io", password=seed_password)
    doubleshot = User(
        username="doubleshot", email="dobuleshot@aa.io", password=seed_password
    )

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(cherry)
    db.session.add(keys4U)
    db.session.add(doubleshot)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute("TRUNCATE users RESTART IDENTITY CASCADE;")
    db.session.commit()
