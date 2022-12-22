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

    # p4:
    I13 = ProductImage (
        product_id = 4,
        url = 'https://i.etsystatic.com/24964111/r/il/e3e7ab/3536898759/il_794xN.3536898759_cu6b.jpg',
        preview_image = True
    )
    I14 = ProductImage (
        product_id = 4,
        url = 'https://i.etsystatic.com/24964111/r/il/f09298/3536898765/il_794xN.3536898765_ffv5.jpg',
        preview_image = False
    )
    I15 = ProductImage (
        product_id = 4,
        url = 'https://i.etsystatic.com/24964111/r/il/85bd6b/3489256014/il_794xN.3489256014_6ako.jpg',
        preview_image = False
    )
    I16 = ProductImage (
        product_id = 4,
        url = 'https://i.etsystatic.com/24964111/r/il/7f4403/4368910375/il_794xN.4368910375_msif.jpg',
        preview_image = False
    )

    # p5:
    I17 = ProductImage (
        product_id = 5,
        url = 'https://i.etsystatic.com/20049947/r/il/658f7d/4321993539/il_794xN.4321993539_u57c.jpg',
        preview_image = True
    )
    I18 = ProductImage (
        product_id = 5,
        url = 'https://i.etsystatic.com/20049947/r/il/aeddfe/4274593014/il_794xN.4274593014_59pk.jpg',
        preview_image = False
    )
    I19 = ProductImage (
        product_id = 5,
        url = 'https://i.etsystatic.com/20049947/r/il/8b59d3/4274593010/il_794xN.4274593010_6fps.jpg',
        preview_image = False
    )
    I20 = ProductImage (
        product_id = 5,
        url = 'https://i.etsystatic.com/20049947/r/il/60292c/4321993553/il_794xN.4321993553_ni4n.jpg',
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
    db.session.add(I13)
    db.session.add(I14)
    db.session.add(I15)
    db.session.add(I16)
    db.session.add(I17)
    db.session.add(I18)
    db.session.add(I19)
    db.session.add(I20)




    db.session.commit()

def undo_product_images():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.product_images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM products")

    db.session.commit()
