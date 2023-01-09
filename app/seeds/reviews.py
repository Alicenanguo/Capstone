from app.models import db, Review, environment, SCHEMA
from datetime import datetime

def seed_reviews():
     # Seasonal Decor
     # p1:
     R1= Review(
        product_id = 1,
        buyer_id = 2,
        review ='This is even more cute in person! It reminds me of a little angel I had as a child. Looks brand new and is exactly what I wanted.',
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R2= Review(
        product_id = 1,
        buyer_id = 3,
        review ="Item arrived intact and just as pictured. I would have given 5 stars but the light bulb that came with it was burnt out so couldn't set it up as soon as I got it.",
        stars=4,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )

     #p2:
     R3= Review(
        product_id = 2,
        buyer_id = 1,
        review ="This wreath is so gorgeous and so well made! The craftsmanship is the amazing. And the design coordinates so well with the rest of my rustic decor.",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R4= Review(
        product_id = 2,
        buyer_id = 3,
        review ="Another beautiful wreath by Tamra! I was looking for a wreath that perfectly encompassed the transition from summer to fall and the Country Fall Wreath is it. I love how well made and light-weight these wreaths are.",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R5=Review(
        product_id = 2,
        buyer_id = 4,
        review ="Absolutely gorgeous wreath. When I saw it, I had to have it.",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )

     #p3:
     R6=Review(
        product_id = 3,
        buyer_id = 4,
        review ="This ornament is so perfect!!! Thank you so much. Perfect addition to our tree.",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R7=Review(
        product_id = 3,
        buyer_id = 5,
        review ="The seller was super fast in answering any questions. My ornament came intact and nicely packaged! Would definitely order from again. Thank you!",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R8=Review(
        product_id = 3,
        buyer_id = 6,
        review ="Very well made. Delicate and beautiful. My daughter said it was the most thoughtful ornament she has ever received.",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )

     #p4:
     R9=Review(
        product_id = 4,
        buyer_id = 5,
        review ="The cute gnome ornaments were just what I needed for my small woodlands tree. They were as pictured, finished well. Prompt shipping.",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R10=Review(
        product_id = 4,
        buyer_id = 6,
        review ="These are cute and colorful and there are three of each. They are mass-produced rather than individually painted and I am glad I got them at half price at $15 rather than $30.",
        stars=4,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )

     #p5:
     R11=Review(
        product_id = 5,
        buyer_id = 6,
        review ="So festive and cute! I live in a small apartment and no room for a tree but still like to decorate for the holidays. These were the perfect touch!",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R12=Review(
        product_id = 5,
        buyer_id = 4,
        review ="Sweet wooden deer wearing a bright red sweater. Love it! Shipping box took a beating, but it got here in one piece. Would order from this shop again...",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )

     #p6:
     R13=Review(
        product_id = 6,
        buyer_id = 5,
        review ="Its one of the most perfect gift for my great granddaughter‘s first Christmas… her mother my first granddaughter/child love it as well … I would definitely do business with this shop again A+++.. thank you",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R14=Review(
        product_id = 6,
        buyer_id = 4,
        review ="Very quick shipping for a last minute item that I wanted customized with mine, my husband's and our dog's names. Very cute and my husband was surprised.",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R15=Review(
        product_id = 6,
        buyer_id = 3,
        review ="Decent quality, matched description and meet expectations. Names are hand written.",
        stars=3,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )

     #p7:
     R16=Review(
        product_id = 7,
        buyer_id = 3,
        review ="Such fast shipping I ordered 2 as gifts loved the first one so much I bought another and honestly considering buying myself one.",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R17=Review(
        product_id = 7,
        buyer_id = 4,
        review ="Beautiful travel jewelry box. I wanted a different flower engraved on the front of the box and Joseph was happy to make the change, I just sent in the design.",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )

     #p8:
     R18=Review(
        product_id = 8,
        buyer_id = 1,
        review ="I just presented this ring to my Fiancé and she is absolutely smitten with this ring! The setting is excellent and the stones are gorgeous. We can't be more pleased with how it turned out.",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R19=Review(
        product_id = 8,
        buyer_id = 2,
        review ="Beautiful ring and it arrived so quickly! My wife loves it!",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R20=Review(
        product_id = 8,
        buyer_id = 4,
        review ="Beautifully crafted. She said yes and loved it. Everyone compliments the ring :). Would highly highly recommend.",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )

     #p9:
     R21=Review(
        product_id = 9,
        buyer_id = 6,
        review ="These pieces are all created with Swarovski crystals which are the best on the market and on the more expensive side but worth it!",
        stars=3,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R22=Review(
        product_id = 9,
        buyer_id = 5,
        review ="Sparkly, high-quality, and gorgeous! I tried taking a picture, and it did NO justice to the beauty of the earrings, bracelets, and necklace I bought for my wedding day. I can't wait to wear them all!",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )

     #p10:
     R23=Review(
        product_id = 10,
        buyer_id = 3,
        review ="the earrings themselves are so beautiful and came in such beautiful packaging (a beautiful box and matching gift bag!! perfect for the holidays) amazing quality as well!",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R24=Review(
        product_id = 10,
        buyer_id = 1,
        review ="The pearls were smaller than I expected but overall they are very pretty!!!!!",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R25=Review(
        product_id = 10,
        buyer_id = 5,
        review ="smaller than expected but still very cute!!",
        stars=4,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )

     #p11:
     R26=Review(
        product_id = 11,
        buyer_id = 4,
        review ="Wow, the ring is really as beautiful as in the pictures. Shines wonderfully! I am excited. Thank you very much!",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R27=Review(
        product_id = 11,
        buyer_id = 6,
        review ="Very unique ---- very nice.",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )

     #p12:
     R28=Review(
        product_id = 12,
        buyer_id = 1,
        review ="I bought the Natural Jade Donuts and Pearls Beads necklace and received it the other day. It is very pretty and I like it alot. Thank you!",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R29=Review(
        product_id = 12,
        buyer_id = 2,
        review ="shipping was extremely fast!! granted i live in illinois but it was shipped the day after i ordered! i messaged the seller asking how long the necklace was and they responded quickly. i'll update my review later once i've worn it longer !",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R30=Review(
        product_id = 12,
        buyer_id = 3,
        review ="This is such a pretty necklace! I got it as a gift for my cousin and I just know she is going to LOVE IT. Super excited to give it to her. After looking through more of the inventory I'll definitely be back!",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R31=Review(
        product_id = 12,
        buyer_id = 4,
        review ="Arrived quickly and was exactly as pictured. This is a gift for my daughter and I know she will love it.",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )

    # Home Goods
    #p13:
     R32=Review(
        product_id = 13,
        buyer_id = 2,
        review ="Gorgeous print! Looks amazing in the frame. The hooks are sturdy on the wall. Added so much character so such a boring space before!",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R33=Review(
        product_id = 13,
        buyer_id = 3,
        review ="absolutely love this! I was skeptical because the price is great and assumed it would be just “alright”. It’s actually very beautiful and well done. Definitely will come back for more!",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )

     #p14:
     R34=Review(
        product_id = 14,
        buyer_id = 6,
        review ="This is truly a beautiful jewelry box!!! The soft pink color with the rose gold handles... the pull out necklace drawer... so much space... just beautiful!! ",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R35=Review(
        product_id = 14,
        buyer_id = 5,
        review ="The jewelry box was made well, only thing I was slightly disappointed in was the butterfly decal not as cute as I thought it r wet oils be and it kinda seems like it would be easy to mess it up.",
        stars=4,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R36=Review(
        product_id = 14,
        buyer_id = 4,
        review ="This is a lovely jewelry box! It's got places for every kind of jewelry. The quality is great and I love the pale pink color. Highly recommend.",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )

     #p15
     R37=Review(
        product_id = 15,
        buyer_id = 4,
        review ="Absolutely love it, easy to install, perfectly accents the space, beautifully built. Definitely recommend!",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R38=Review(
        product_id = 15,
        buyer_id = 2,
        review ="Love my lights! Seller was very easy to work with and changed my cord color to black without any issue. Product shipped fast and was packed really well! Love the little twinkle it casts on the wall! So pretty 🥰❤️❤️ Highly recommended!!",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )

     #p16
     R39=Review(
        product_id = 16,
        buyer_id = 3,
        review ="Wow! These glow in the dark stars far exceeded my expectations. They look so pretty and realistic and the varying glow and colours give the glow in the dark sky depth and dimension. Definitely worth the price for me!",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R40=Review(
        product_id = 16,
        buyer_id = 5,
        review ="We couldn’t wait to put the stars on my sons ceiling! They turned out awesome and he loves to turn out the lights at bedtime to see all of the stars glow. Would highly recommend.",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R41=Review(
        product_id = 16,
        buyer_id = 6,
        review ="Nice effect, not as bright as I had hoped. Brought 1400 for a small room (states this is enough for a master bedroom) I think it would have looked even more disappointing if I had got a smaller pack.",
        stars=2,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )

     #p17:
     R42=Review(
        product_id = 17,
        buyer_id = 4,
        review ="The quality of the pillow is phenomenal! It survived a wash and kept its shape perfectly, no stuffing was messed up and the image is still crystal clear and vibrant.",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R42=Review(
        product_id = 17,
        buyer_id = 3,
        review ="Pillows of our pup lost too soon for my kids. A great memory and now they can squeeze him forever!",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R43=Review(
        product_id = 17,
        buyer_id = 2,
        review ="The colour wasnt right, guniea pig is supposed to be ginger/orange but colour looked washed out and looks a bit brown",
        stars=3,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R44=Review(
        product_id = 17,
        buyer_id = 1,
        review ="The pillows were perfect! My daughter loved them!",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )

     #p18:
     R45=Review(
        product_id = 18,
        buyer_id = 1,
        review ="I am delighted with the 2 people planters w/wine bottles that I purchased! They are definitely eye catching conversation pieces! Everyone who sees them comments; 'ADORABLE'!",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R46=Review(
        product_id = 18,
        buyer_id = 2,
        review ="Perfect. My sister who is a wine lover as well as a plant lover absolutely adored this cute mini planter.",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R47=Review(
        product_id = 18,
        buyer_id = 3,
        review ="The quality of the product is excellent. It is exactly what i am looking to decorate in bar area. I ordered two pieces, they are cute.",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )

     #p19:
     R48=Review(
        product_id = 19,
        buyer_id = 5,
        review ="My one-year-old brother loves this board so much. It keeps him busy for at least half an hour. Best decision ever.",
        stars=4,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R49=Review(
        product_id = 19,
        buyer_id = 4,
        review ="Definitely not handmade or local and you can find this on Amazon. In fact my shipping notification from UPS said Amazon and threw me off since I had not ordered anything from there.",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )

     #20
     R50=Review(
        product_id = 20,
        buyer_id = 6,
        review ="I love the idea of this puzzle - but I really wish it was bigger. It's only about 6 inches high and I wish it was closer to 10 inches. I like to have it out in November for the kids to play with and it'd look better on a coffee table if it was bigger.",
        stars=3,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R51=Review(
        product_id = 20,
        buyer_id = 3,
        review ="Challenging puzzle, but worth it. Very clever piecing. Great as a stand-up decoration as well.",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )

     #21
     R52=Review(
        product_id = 21,
        buyer_id = 4,
        review ="Perfect control!!!! The tipi is sublime, refined and perfectly decorates my daughter's room. Small reading corner or cabin is really great!",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R53=Review(
        product_id = 21,
        buyer_id = 3,
        review ="I love this teepee! Beautiful and great quality. My daughter loves it too, so pleased I bought it. The floor cushion is lovely and comfortable.",
        stars=4,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )

     #p22
     R54=Review(
        product_id = 22,
        buyer_id = 2,
        review ="Beautiful!!! It arrive quickly and it is absolutely perfect for our LO to learn from!",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R55=Review(
        product_id = 22,
        buyer_id = 3,
        review ="I ordered this for my grandson’s 3rd birthday. For the price I paid, I thought the quality of the wood was going to be much sturdier. It’s very light weight wood, that had a very small split in the wooden case. I hope that’s not indicative of the rest of the wood splitting.",
        stars=4,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )

      #p23
     R56=Review(
        product_id = 23,
        buyer_id = 1,
        review ="Really cute toys/magnets! My little nephews were so excited. They are well made and arrived packed in cute wrapping paper too! Thank you so much!!!",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )

      #p24
     R57=Review(
        product_id = 24,
        buyer_id = 5,
        review ="Absolutely adorable little trees. I love all the details!",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )

     #p25
     R58=Review(
        product_id = 25,
        buyer_id = 2,
        review ="I'm planning my daughters wedding that's coming up. I'm always super nervous about making online purchases for something that is so special & important. I'm so so glad I did!",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R59=Review(
        product_id = 25,
        buyer_id = 5,
        review ="They are definitely smaller than expected, but very cute and beautiful. The only little thing was that many arrived with the personalized little heart detached, I'm going to need to use my glue gun to fix about 10 out of the 50 I ordered.",
        stars=4,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )

     #p26
     R60=Review(
        product_id = 26,
        buyer_id = 3,
        review ="This scarf is sooo awesome!! I had my doubts today before picking it up at the post office but when I opened it and put it on they all vanished! The color is perfect!",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R61=Review(
        product_id = 26,
        buyer_id = 4,
        review ="It's beautiful. I love it.",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )

      #p27
     R62=Review(
        product_id = 27,
        buyer_id = 6,
        review ="These arrived sooner than I anticipated and were so beautiful. My friends, family and I were so impressed after worrying that they'd look cheap. Amazing craftsmanship! Perfect for my wedding.",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )

     #p28
     R63=Review(
        product_id = 28,
        buyer_id = 3,
        review ="While I can't yet comment on the finished project, these were a gift for my daughter, they came quickly with all materials included. The quality of the materials was excellent, the yarn colors were vibrant and my daughter was super excited to give embroidery a try! Thank you!",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )
     R64=Review(
        product_id = 28,
        buyer_id = 3,
        review ="This kit is really pretty and helpful for beginners, but the needles that come with it are way too small for the floss.",
        stars=2,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )

     #29
     R65=Review(
        product_id = 29,
        buyer_id = 4,
        review ="These are gorgeous and even better than I was expecting! The seller was extremely responsive and even made a very tight delivery window for me when I asked if this was possible. Wonderful experience!",
        stars=5,
        createAt=datetime.now(),
        updateAt=datetime.now()
     )


















     db.session.add_all([R1,R2,R3,R4,R5,R6,R7,R8,R9,R10,R11,R12,R13,R14,R15,R16,R17,R18,R19,R20,R21,R22,R23,R24,R25,
     R26,R27,R28,R29,R30,R31,R32,R33,R34,R35,R36,R37,R38,R39,R40,R41,R42,R43,R44,R45,R46,R47,R48,R49,R50,R51,R52,R53,
     R54,R55,R56,R57,R58,R59,R60,R61,R62,R63,R64,R65])

     db.session.commit()

def undo_reviews():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM reviews")

    db.session.commit()
