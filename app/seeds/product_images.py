from app.models import db, ProductImage, environment, SCHEMA


def seed_product_images():

    # Seasonal Decor:
    # p1:
    I1 = ProductImage (
        product_id = 1,
        url = 'https://i.etsystatic.com/37514832/r/il/e749ff/4308462898/il_794xN.4308462898_3c5w.jpg',
        preview_image = True
    )
    I2 = ProductImage (
        product_id = 1,
        url = 'https://i.etsystatic.com/37514832/r/il/ed2088/4308429838/il_794xN.4308429838_p773.jpg',
        preview_image = False
    )
    I3 = ProductImage (
        product_id = 1,
        url = 'https://i.etsystatic.com/37514832/r/il/89b3d4/4308429850/il_794xN.4308429850_mf7g.jpg',
        preview_image = False
    )
    I4= ProductImage (
        product_id = 1,
        url = 'https://i.etsystatic.com/37514832/r/il/50df75/4355826073/il_794xN.4355826073_aaw4.jpg',
        preview_image = False
    )

    # p2:
    I5 = ProductImage (
        product_id = 2,
        url = 'https://i.etsystatic.com/24087699/r/il/161e04/4443707305/il_794xN.4443707305_7iql.jpg',
        preview_image = True
    )
    I6 = ProductImage (
        product_id = 2,
        url = 'https://i.etsystatic.com/24087699/r/il/051739/4443707379/il_794xN.4443707379_4t1f.jpg',
        preview_image = False
    )
    I7 = ProductImage (
        product_id = 2,
        url = 'https://i.etsystatic.com/24087699/r/il/3b7e6e/4396315042/il_794xN.4396315042_3w19.jpg',
        preview_image = False
    )
    I8 = ProductImage (
        product_id = 2,
        url = 'https://i.etsystatic.com/24087699/r/il/a4883b/4443707603/il_794xN.4443707603_fnd1.jpg',
        preview_image = False
    )

    # p3:
    I9 = ProductImage (
        product_id = 3,
        url = 'https://i.etsystatic.com/6634797/r/il/4a1c5d/685930451/il_794xN.685930451_qvnz.jpg',
        preview_image = True
    )

    I10 = ProductImage (
        product_id = 3,
        url = 'https://i.etsystatic.com/6634797/r/il/585d31/2165832393/il_794xN.2165832393_452q.jpg',
        preview_image = False
    )

    I11 = ProductImage (
        product_id = 3,
        url = 'https://i.etsystatic.com/6634797/r/il/c7d6c0/2589951841/il_794xN.2589951841_5uao.jpg',
        preview_image = False
    )

    I12 = ProductImage (
        product_id = 3,
        url = 'https://i.etsystatic.com/6634797/r/il/3f91cd/1120000100/il_794xN.1120000100_d8wr.jpg',
        preview_image = False
    )

    db.session.add(I1)
    db.session.add(I2)
    db.session.add(I3)
    db.session.add(I4)
    db.session.add(I5)
    db.session.add(I6)
    db.session.add(I7)
    db.session.add(I8)
    db.session.add(I9)
    db.session.add(I10)
    db.session.add(I11)
    db.session.add(I12)


    db.session.commit()

def undo_product_images():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.product_images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM products")

    db.session.commit()
