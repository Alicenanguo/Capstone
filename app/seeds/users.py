from app.models import db, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_users():
    # user1
    demo = User(
        first_name="Demo",
        last_name="Lition",
        username='demo',
        email='demo@aa.io',
        password='password'
        )

    # user2
    marnie = User(
        first_name="Marnie",
        last_name="Li",
        username='marnie',
        email='marnie@aa.io',
        password='password'
        )

    # user3
    bobbie = User(
        first_name="Bobbie",
        last_name="Wang",
        username='bobbie',
        email='bobbie@aa.io',
        password='password'
        )

    # user4
    snow = User(
        first_name="Snow",
        last_name="White",
        username='snow',
        email='snow@aa.io',
        password='password'
        )

    # user5
    aria = User(
        first_name="Aria",
        last_name="Ji",
        username='Aria',
        email='aria@aa.io',
        password='password'
    )

     # user6
    aaron = User(
        first_name="Aaron",
        last_name="Ji",
        username='Aaron',
        email='aaron@aa.io',
        password='password'
    )

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(snow)
    db.session.add(aria)
    db.session.add(aaron)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
