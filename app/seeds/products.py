from app.models import db, Product, environment, SCHEMA


def seed_products():

    # Seasonal Decor
    p1 = Product(
        seller_id =1,
        category_id= 1,
        name ='Christmas Gnome for home Christmas Gift Christmas Decor Christmas Decoration Winter Gnome,Nordic Standing Gnome,Farmhouse Decor,Holiday Gift',
        price=16.35,
        description ='Great for gift giving and "Gnome Decor", fun for the kid!A gnome is a mythological creature from Scandinavian folklore. They often bring good luck & reward their household with love and happiness! They are a special addition to any home, decor, or season, and make wonderful gifts to give. The most thoughtful gift!',
        preview_image = 'https://i.etsystatic.com/37514832/r/il/e749ff/4308462898/il_794xN.4308462898_3c5w.jpg'
    )

    p2 = Product(
        seller_id =2,
        category_id= 1,
        name ='Christmas Wreath For Front Door - Winter Wreath - Christmas Holiday Decor - Double Door Christmas Wreath - Christmas Wreath',
        price=45.00,
        description ='Handmade Christmas Wreath make the perfect holiday decorations! Add a refreshing green accent to your winter decorations with this Pine and Berry Wreath from Threshold',
        preview_image ='https://i.etsystatic.com/24087699/r/il/161e04/4443707305/il_794xN.4443707305_7iql.jpg'
    )

    p3 = Product(
        seller_id =3,
        category_id= 1,
        name ='The Catcher in the Rye - J. D. Salinger - Vintage Novel Ornament - Curled Book Pages - Upcycled Books - Christmas Decor - Ivory Holiday Home',
        price=10.60,
        description ='Beautiful clear glass ornament filled with the dainty hand-cut and curled vintage strips of the classic novel by J. D. Salinger, The Catcher in the Rye. Made with the pages of discarded and damaged vintage books no longer suitable for resale.',
        preview_image = 'https://i.etsystatic.com/6634797/r/il/4a1c5d/685930451/il_794xN.685930451_qvnz.jpg'
    )

    p4 = Product(
        seller_id =4,
        category_id= 1,
        name ='12pc Wooden Ornament Set, Christmas Gift, Hanging Ornament, Holiday Decor',
        price=6.49,
        description ="Wooden Ornament Dimensions: Deer Length: 2.3 inches, Width: 2 inches,Circle Length: 2 inches, Width: 2 inches,Horse Length: 2 inches, Width: 2.5 inches,Tree Length: 2.2 inches, Width: 2.2 inches",
        preview_image = 'https://i.etsystatic.com/24964111/r/il/e3e7ab/3536898759/il_794xN.3536898759_cu6b.jpg'
    )

    p5 = Product(
        seller_id =5,
        category_id= 1,
        name ='Christmas Home Decor Wool and Wood Felt Reindeer Elk Tree Decorations',
        price=18.50,
        description ="We are blown away by everyone's love for these cute little Christmas guys! Thanks for the love Etsy Fam!!",
        preview_image = 'https://i.etsystatic.com/20049947/r/il/658f7d/4321993539/il_794xN.4321993539_u57c.jpg'
    )

    p6 = Product(
        seller_id =6,
        category_id= 1,
        name ='Personalized Reindeer Family Christmas Ornaments, Custom Name Christmas Ornaments, Christmas Tree Decor, Christmas Gifts',
        price=12.90,
        description ="Decorate your tree with this Reindeer family Christmas ornament in your choice of 2, 3, 4, 5, 6 member designs. You could also hang the decor on walls, or use it as outdoor decors.",
        preview_image = 'https://i.etsystatic.com/24218949/r/il/ae959c/3484977548/il_794xN.3484977548_lkgs.jpg'
    )

# Jewelry Gifts
    p7= Product(
        seller_id =1,
        category_id= 2,
        name ='Birth Flower Jewelry Travel Case, Birth Month Flower Gift, Personalized Birthday Gift, Leather Jewelry Travel Case, Custom Jewelry Case',
        price=12.45,
        description ="Personalized Jewelry Boxes, Birth Flower Jewelry Case, Travel Case For Bridesmaids, Minimal Jewelry Box, Jewelry Organizer, Jewelry Box.",
        preview_image = 'https://i.etsystatic.com/23702777/r/il/14c918/4184624086/il_794xN.4184624086_s698.jpg'
    )

    p8= Product(
        seller_id =3,
        category_id= 2,
        name ='Nature Inspired Moissanite Engagement Ring Set Twist Band 1.25ct Pear Moissanite Diamond Wedding Ring Set Leaf Vine Ring Branch Bridal Set',
        price=367.20,
        description ="HEAL GEMSTONE RING : Since gemstones take millions of years to form, it is said that they carry precious energies from centuries ago, They have interesting chemical structures which rub off on you when you adorn them.",
        preview_image = 'https://i.etsystatic.com/18418190/r/il/2d9267/4298822751/il_794xN.4298822751_7jid.jpg'
    )

    p9= Product(
        seller_id =2,
        category_id= 2,
        name ='Rose gold Bridal bracelet, Blush crystal Wedding bracelet, Bridal jewelry, Tennis bracelet, Bridesmaid bracelet, Rose Gold wedding jewelry',
        price=68.50,
        description ="Handmade to order with Premium European Crystals, rose gold, blush rose, antique pink and vintage rose stones, Available in other finishes and crystals upon request.",
        preview_image = 'https://i.etsystatic.com/13462671/r/il/8fa0c7/3777920932/il_794xN.3777920932_cbhy.jpg'
    )

    p10 =Product(
        seller_id =4,
        category_id= 2,
        name ='Gold jade earrings, jade dangling earrings, freshwater pearl jade, green jade earring, drop jade earring, jade hoop earrings, jade studs',
        price=20.23,
        description ="Gold plated Jewelry. Hypoallergenic, Waterproof, Tarnish Resist.",
        preview_image = 'https://i.etsystatic.com/34451314/r/il/1d7289/4164790667/il_794xN.4164790667_omab.jpg'
    )

    p11 =Product(
        seller_id =5,
        category_id= 2,
        name ='Moissanite/Diamond Cogwheel Fidget Ring in 14K/18K Gold, Cubic Zirconia Spinner Ring For Men & Women, Sterling Silver Anxiety Ring',
        price=74.25,
        description ="A stunning, sparkling cogwheel fidget ring for both men and women, featuring premium diamond, moissanite or cubic zirconia. The perfect ladies' ring or men's band promotes a positive lifestyle by reducing stress, racing thoughts, and overthinking.",
        preview_image = 'https://i.etsystatic.com/34382609/r/il/ae6fbb/4350951163/il_794xN.4350951163_3m07.jpg'
    )

    p12 =Product(
        seller_id =6,
        category_id= 2,
        name ='Dainty Jade Beaded Pendant Necklace, 14K Gold Green Jade Freshwater Pearl Choker, Laying Necklaces Chain Anniversary Gifts for Mom Lover',
        price=25.19,
        description ="The circle of Jade is the means of holding back peace and keeping happiness. Round donuts mean to bring fortune and avoid evil spirits.",
        preview_image = 'https://i.etsystatic.com/14125488/r/il/2dceec/4517006609/il_794xN.4517006609_sp9d.jpg'
    )

    # Home Goods
    p13 =Product(
        seller_id =1,
        category_id= 3,
        name ='EasySuger Oil Painting Landscape Wall Art, Cloud Study Nature Framed Large Gallery Art, Minimalist Art Ready to Hang',
        price=59.20,
        description ="Floating frame canvas wall art , a novel look compared to traditional canvas prints without outer frames.",
        preview_image = 'https://i.etsystatic.com/26715779/r/il/57c2e5/3189488879/il_794xN.3189488879_ppuj.jpg'
    )

    p14 =Product(
        seller_id =2,
        category_id= 3,
        name ='Jewelry Drawer Box for Women with Faux Leather Exterior, Storage Organizer for Rings, Bracelets, and Necklaces, Gift for Her',
        price=42.00,
        description ="Organize Jewelry with a Stylish, Versatile, and Luxurious Jewelry Box Designed for Modern Women.",
        preview_image = 'https://i.etsystatic.com/24620229/r/il/31ed03/4107377716/il_794xN.4107377716_9gcu.jpg'
    )

    p15 =Product(
        seller_id =3,
        category_id= 3,
        name ='Clay-light Sconce with touch dimmer Plug In version',
        price=247.50,
        description ="This egg shaped sconce creates a starry night like Lampshade and light textures around it. The stainless steel flexible arm allows the sconce to be aimed to all directions, including downwards where it can be used as a task light / reading light or a work light.",
        preview_image = 'https://i.etsystatic.com/5424402/r/il/e3f259/402135398/il_794xN.402135398_4s88.jpg'
    )

    p16 =Product(
        seller_id =4,
        category_id= 3,
        name ='Glow in the Dark Star Stickers | 3D Glow in Dark Star Ceiling | Super Bright, Realistic Night Sky | Unique Starry Night Home Decor',
        price=21.91,
        description ="The brightest and most realistic glow in the dark star stickers for a complete 3D star ceiling.",
        preview_image = 'https://i.etsystatic.com/7831577/r/il/8d8a9c/2144291611/il_794xN.2144291611_my00.jpg'
    )

    p17 =Product(
        seller_id =5,
        category_id= 3,
        name ='Custom Pet Pillow | Personalized Pillow | Pet Memorial Gift | Custom shaped pillow | Dog Pillow | Cat Pillow | Pet Lover Gift',
        price=14.20,
        description ="Turn your pet into a custom shaped pillow that we hand make! This is the perfect gift for pet lovers. Just upload a photo of your pet to create endless possibilities! We use the highest industrial quality materials and inks.",
        preview_image = 'https://i.etsystatic.com/25155098/r/il/50053d/4045930533/il_794xN.4045930533_m0ga.jpg'
    )

    p18 =Product(
        seller_id =6,
        category_id= 3,
        name ="Wine Lovers Gift Idea, Wine Bar Decor, People Planter Wine Bottle, Boho Decor, Shelf Decor, Succulent Planter, Cute Planter Wine O'clock",
        price=27.99,
        description ="These little planters look so adorable holding a bottle of wine (Label on the bottles will vary, each planter sold separately).",
        preview_image = 'https://i.etsystatic.com/21530912/r/il/2f15a8/3630514386/il_794xN.3630514386_9jh9.jpg'
    )

    #Kids Toy
    p19 =Product(
        seller_id =1,
        category_id= 4,
        name ="Smartwo Early Educational Montessori Sensory Activities Wooden Toy, Rocket Theme for Kid's Imaginative and Joyful Play & Spaceman Game",
        price=33.99,
        description ="🚀 Montessori Activities for Toddlers. This wooden activity cube is designed to build kid's sensory, promote fine motor skills, hand-eye coordination, shape / color recognition and number counting. An intergrated early education toy for 2-5 years old boy girl kids.",
        preview_image = 'https://i.etsystatic.com/26006631/r/il/a14ddf/4454484896/il_794xN.4454484896_9nbi.jpg'
    )

    p20 =Product(
        seller_id =2,
        category_id= 4,
        name ="Kids Thanksgiving Decor, Turkey Toy, Thanksgiving Gift, Turkey Puzzle, Thanksgiving Kids Gift, Thanksgiving Toy",
        price=64.89,
        description ="Just in time for the Thanksgiving holiday, this standing turkey puzzle toy will make the perfect toy. Whether you would like to give your favorite child a cute gift when they visit on Thanksgiving or you just want to inspire their imagination with a fun Thanksgiving themed toy, this guy is right for you.",
        preview_image = 'https://i.etsystatic.com/6110380/r/il/6793cd/487176363/il_794xN.487176363_5f8t.jpg'
    )

    p21 =Product(
        seller_id =3,
        category_id= 4,
        name ="Childrens Teepee, Beige Teepee tent, montessori tent, teepees with pompoms, Kids playhouse, Tipi, wigwam, cream-colored teepee",
        price=94.29,
        description ="Beige teepee tent is a perfect place to play, read or solve jigsaw puzzles. Teepee is a retreat where children are free to build their own little world, protected from sunlight and wind. The entrance of Kids Teepee is made from two layers of cotton and can be closed.",
        preview_image = 'https://i.etsystatic.com/14596500/r/il/47e47b/3562546765/il_794xN.3562546765_3r5y.jpg'
    )

    p22 =Product(
        seller_id =4,
        category_id= 4,
        name ="Perpetual Calendar, Preschool Calendar, Montessori calendar for kids learning Seasons, Monthly calendar, Homeschool calendar, Waldorf Toys",
        price=69.99,
        description ="This beautifully handcrafted Perpetual calendar could be a wonderful educational toy for your child. It will be a great addition to the nursery and will help your baby to learn dates and numbers, days, months, and seasons. Help your child keep track of time, show him how to use a Montessori calendar.",
        preview_image = 'https://i.etsystatic.com/32753543/r/il/a03c0f/4053315436/il_794xN.4053315436_9g6n.jpg'
    )

    p23 =Product(
        seller_id =5,
        category_id= 4,
        name ="Felt weather play set Fridge Magnets for kids Preschool Learning educational game Montessori developing toys 1st Birthday Gift for kids",
        price=8.00,
        description ="This cute felt weather toys are made from eco-friendly felt and is entirely hand cut and sewn. We can make them as simple toys, ornaments(with loop) or with magnets. Magnets are sewn inside and safe for baby. It fits beautifully in the hand and can be hand-washed gently with wool-friendly soap. Makes a great baby shower or christening gift.",
        preview_image = 'https://i.etsystatic.com/13267136/r/il/c1da32/1969717905/il_794xN.1969717905_tomw.jpg'
    )

    p24 =Product(
        seller_id =6,
        category_id= 4,
        name ="Wooden forest with colored trees | Peg dolls set of trees | Wooden toy set | Wooden kids toys | Waldorf toys | Wooden montessori toys set",
        price=23.22,
        description ="This wooden eco toy allows kids to enhance their motor skills, role-playing, logical thinking, and movement patterns.",
        preview_image = 'https://i.etsystatic.com/35057718/r/il/9b2cdc/3814892432/il_794xN.3814892432_a8ar.jpg'
    )

    #Wedding Shop
    p25 =Product(
        seller_id =1,
        category_id= 5,
        name ="50 PCS Wedding Favors for Guests in bulk | Rustic Wedding Favors | Personalized Gifts | Bridal Shower Favors | Thank You Favors",
        price=31.50,
        description ="After received the order, please keep their boxes open. Because these candles have natural dried flowers.",
        preview_image = 'https://i.etsystatic.com/23794722/r/il/6b1869/2491977546/il_794xN.2491977546_j8cg.jpg'
    )

    p26 =Product(
        seller_id =2,
        category_id= 5,
        name ="Women's Ball-Gown 1/2 Sleeves V-Neck Floral Lace Wedding Gown, Court Train Bridal Wedding Dresses",
        price=320.41,
        description ="A definition of traditional and modern style of wedding dress. Made from tulle and lace, this stunning dress has a fit bodice with a delicate neckline and a skirt that billows from the natural waist down to the floor. Pair this lovely dress with stylish jewelries for an elegant look.",
        preview_image = 'https://i.etsystatic.com/21088855/r/il/1fe7fd/3108792782/il_794xN.3108792782_qol2.jpg'
    )

    p27 =Product(
        seller_id =3,
        category_id= 5,
        name ="Open-toe BridalShoes I PearlHeels I Bridesmaid Stiletto Sandals I BridalShoes I Brautschuhe I WeddingPearlShoes I Hochzeitschuhe I Handmade",
        price=172.91,
        description ="Beautiful classy high heels inlaid with rich pearls all around, refined with leather lining and insole, heels are about 10 cm high, quick release buckles, non-slip outer rubber sole provides stability and long-term comfortable walking.Dress up your feet with these completely feminine sandals, enjoy a timeless and legend look at your wedding.",
        preview_image = 'https://i.etsystatic.com/24253130/r/il/a90f10/4525479741/il_794xN.4525479741_eksk.jpg'
    )

    #Craft supplies
    p28 =Product(
        seller_id =1,
        category_id= 6,
        name ="Transparent Embroidery Kits, embroidery starter kit, floral embroidery kits, transparent embroidery pattern, needlepoint kits, diy gift",
        price=10.12,
        description ="This hand embroidery kit will include everything you need to start the project and it is a great Kit for Beginners too! These embroidery kits are the best gifts for mom , sewing lovers and embroidery lovers, a great present for Christmas and the mothers day.",
        preview_image = 'https://i.etsystatic.com/24169104/r/il/f6aef2/3969807618/il_794xN.3969807618_lw9q.jpg'
    )
    p29 =Product(
        seller_id =2,
        category_id= 6,
        name ="Personalized Rainbow Craft Kit - Lasercut Wood - Yarn & Tools included!",
        price=14.50,
        description ="A plastic, kid-friendly yarn-weaving needle is included, making this craft a simple and easy introduction to hand-stitching and sewing.",
        preview_image = 'https://i.etsystatic.com/5767277/r/il/cf7978/2621253599/il_794xN.2621253599_btcy.jpg'
    )














    db.session.add(p1)
    db.session.add(p2)
    db.session.add(p3)
    db.session.add(p4)
    db.session.add(p5)
    db.session.add(p6)
    db.session.add_all([p7, p8, p9, p10, p11, p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,
    p23,p24,p25,p26,p27,p28,p29])


    db.session.commit()




def undo_products():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM products")

    db.session.commit()
