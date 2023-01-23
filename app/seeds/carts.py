from app.models import db, Cart, environment, SCHEMA


def seed_carts():
    # user1
    cart_01= Cart(
        user_id=1,
        product_id=10,
        quantity=1,
    )

    # user1
    cart_02 = Cart(
        user_id=1,
        product_id=2,
        quantity=1,
    )

    # user2
    cart_03 = Cart(
        user_id=2,
        product_id=9,
        quantity=1,
    )

    db.session.add(cart_01)
    db.session.add(cart_02)
    db.session.add(cart_03)

    db.session.commit()


def undo_carts():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.carts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM carts")

    db.session.commit()

