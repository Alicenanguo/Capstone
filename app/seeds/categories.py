from app.models import db, Category,environment, SCHEMA

def seed_categories():
    c1 = Category(
        name = 'Seasonal Decor',
        category_image = 'https://i.etsystatic.com/23506397/r/il/612ced/3516502841/il_794xN.3516502841_72b2.jpg'

    )

    c2 = Category(
        name = 'Jewelry Gifts',
        category_image = 'https://i.etsystatic.com/6401969/r/il/c9f39d/1169416852/il_794xN.1169416852_r2o6.jpg'

    )

    c3 = Category(
        name = 'Home Goods',
        category_image = 'https://i.etsystatic.com/6402063/r/il/2211c6/3956936590/il_794xN.3956936590_p2t4.jpg'
    )

    c4 = Category(
        name = 'Kids Toys',
        category_image = 'https://i.etsystatic.com/38145326/r/il/43d06c/4380917599/il_794xN.4380917599_oqhq.jpg'
    )

    c5 = Category(
        name = 'Wedding Shop',
        category_image = 'https://i.etsystatic.com/5876399/r/il/cce33c/930523985/il_794xN.930523985_3pt1.jpg'
    )

    c6 = Category(
        name = 'Craft Supplies',
        category_image = 'https://i.etsystatic.com/18654642/r/il/8b69ab/4458358212/il_794xN.4458358212_b8g8.jpg'
    )


    db.session.add_all([c1, c2, c3, c4, c5, c6])

    db.session.commit()

 
def undo_categories():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.categories RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM categories")

    db.session.commit()
