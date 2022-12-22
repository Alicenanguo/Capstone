from app.models import db, Product, environment, SCHEMA


def seed_products():

    # Seasonal Decor
    p1 = Product(
        seller_id =1,
        name ='Christmas Gnome for home Christmas Gift Christmas Decor Christmas Decoration Winter Gnome,Nordic Standing Gnome,Farmhouse Decor,Holiday Gift',
        price=16.35,
        description ='Great for gift giving and "Gnome Decor", fun for the kid!A gnome is a mythological creature from Scandinavian folklore. They often bring good luck & reward their household with love and happiness! They are a special addition to any home, decor, or season, and make wonderful gifts to give. The most thoughtful gift!',
        category='Seasonal Decor',
        preview_image = 'https://i.etsystatic.com/37514832/r/il/e749ff/4308462898/il_794xN.4308462898_3c5w.jpg'
    )

    p2 = Product(
        seller_id =2,
        name ='Christmas Wreath For Front Door - Winter Wreath - Christmas Holiday Decor - Double Door Christmas Wreath - Christmas Wreath',
        price=45.00,
        description ='Handmade Christmas Wreath make the perfect holiday decorations! Add a refreshing green accent to your winter decorations with this Pine and Berry Wreath from Threshold',
        category='Seasonal Decor',
        preview_image ='https://i.etsystatic.com/24087699/r/il/161e04/4443707305/il_794xN.4443707305_7iql.jpg'
    )

    p3 = Product(
        seller_id =3,
        name ='The Catcher in the Rye - J. D. Salinger - Vintage Novel Ornament - Curled Book Pages - Upcycled Books - Christmas Decor - Ivory Holiday Home',
        price=10.00,
        description ='Beautiful clear glass ornament filled with the dainty hand-cut and curled vintage strips of the classic novel by J. D. Salinger, The Catcher in the Rye. Made with the pages of discarded and damaged vintage books no longer suitable for resale.',
        category='Seasonal Decor',
        preview_image = 'https://i.etsystatic.com/6634797/r/il/4a1c5d/685930451/il_794xN.685930451_qvnz.jpg'
    )

    p4 = Product(
        seller_id =4,
        name ='12pc Wooden Ornament Set, Christmas Gift, Hanging Ornament, Holiday Decor',
        price=6.49,
        description ="Wooden Ornament Dimensions: Deer Length: 2.3 inches, Width: 2 inches,Circle Length: 2 inches, Width: 2 inches,Horse Length: 2 inches, Width: 2.5 inches,Tree Length: 2.2 inches, Width: 2.2 inches",
        category='Seasonal Decor',
        preview_image = 'https://i.etsystatic.com/24964111/r/il/e3e7ab/3536898759/il_794xN.3536898759_cu6b.jpg'
    )

    p5 = Product(
        seller_id =5,
        name ='Christmas Home Decor Wool and Wood Felt Reindeer Elk Tree Decorations',
        price=18.00,
        description ="We are blown away by everyone's love for these cute little Christmas guys! Thanks for the love Etsy Fam!!",
        category='Seasonal Decor',
        preview_image = 'https://i.etsystatic.com/20049947/r/il/658f7d/4321993539/il_794xN.4321993539_u57c.jpg'
    )



    db.session.add(p1)
    db.session.add(p2)
    db.session.add(p3)
    db.session.add(p4)
    db.session.add(p5)


    db.session.commit()




def undo_products():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM products")

    db.session.commit()
