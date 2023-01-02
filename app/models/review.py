from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Review(db.Model):
    __tablename__ = 'reviews'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')), nullable=False)
    buyer_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    review = db.Column(db.String(2000),nullable=False)
    stars = db.Column(db.Integer, nullable=False)
    createAt = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updateAt = db.Column(db.DateTime, nullable=False, default=datetime.now())

    user = db.relationship('User', back_populates='reviews')
    product = db.relationship('Product', back_populates='reviews')

    def to_dict(self):
        return {
            'id': self.id,
            'product_id': self.product_id,
            'buyer_id': self.buyer_id,
            'review': self.review,
            'stars': self.stars,
            'createAt': self.createAt,
            'updateAt': self.updateAt,
            'user':{
                "first_name": self.user.first_name,
                "last_name": self.user.last_name
            }

        }

    def to_dict_with_products(self):
        return {
            'id': self.id,
            'product_id': self.product_id,
            'buyer_id': self.buyer_id,
            'review': self.review,
            'stars': self.stars,
            'createAt': self.createAt,
            'updateAt': self.updateAt,
            'user':{
                "first_name": self.user.first_name,
                "last_name": self.user.last_name
            },
            'product':{
            'id': self.product.id,
            'seller_id': self.product.seller_id,
            'category_id':self.product.category_id,
            'name': self.product.name,
            'price': self.product.price,
            'description': self.product.description,
            'preview_image':self.product.preview_image

            }

        }
