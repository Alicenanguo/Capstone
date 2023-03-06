from .db import db, environment, SCHEMA, add_prefix_for_prod


class Product(db.Model):
    __tablename__ = "products"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    seller_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('categories.id')),nullable=False)
    name = db.Column(db.String(255), nullable=False)
    price = db.Column(db.Numeric(scale=2), nullable=False)
    description = db.Column(db.String(2000), nullable=False)
    preview_image = db.Column(db.String(255),nullable=False)



    user = db.relationship("User", back_populates="products")

    category = db.relationship('Category', back_populates='products')
    product_images = db.relationship("ProductImage", back_populates='product', cascade="all, delete")
    reviews = db.relationship('Review', back_populates='product',cascade="all, delete")
    carts = db.relationship('Cart', back_populates='product', cascade="all, delete")

    def average_rating(self):
        if len(self.reviews) == 0:
            return 0
        else:
            average = sum(review.stars for review in self.reviews) / len(self.reviews)
            return round(average,1)



    def to_dict(self):
        return {
            'id': self.id,
            'seller_id': self.seller_id,
            'category_id':self.category_id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            # 'product_image': [image.to_dict() for image in self.product_images]
            'preview_image':self.preview_image,
            'review_nums':len(self.reviews),
            'average_rating':self.average_rating(),
            # 'images':[image.to_dict() for image in self.product_images]
        }

    def to_dict_detail(self):
        return {
            'id': self.id,
            'seller_id': self.seller_id,
            'category_id':self.category_id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'preview_image':self.preview_image,
            # 'product_image': [image.to_dict() for image in self.product_images],
            'review_nums':len(self.reviews),
            'average_rating':self.average_rating(),
            'reviews':[review.to_dict() for review in self.reviews],
            'user':{
                "first_name": self.user.first_name,
                "last_name": self.user.last_name
            },

        }
