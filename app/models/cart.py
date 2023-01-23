from .db import db, SCHEMA, environment, add_prefix_for_prod


class Cart(db.Model):
    __tablename__ = 'carts'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')), nullable=False)
    # order_id = db.Column(db.Integer, nullable=False)
    quantity = db.Column(db.Integer, nullable=False)

    user = db.relationship('User', back_populates='carts')
    product = db.relationship('Product', back_populates='carts')


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'product_id': self.product_id,
            # 'order_id': self.order_id,
            'quantity': self.quantity,
             'Product': {
                "id": self.product.id,
                'seller_id': self.product.seller_id,
                'category_id': self.product.category_id,
                'name': self.product.name,
                'description': self.product.description,
                'price': self.product.price,
                'preview_image': self.product.preview_image
            }
        }

    def to_dict_detail(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'product_id': self.product_id,
            # 'order_id': self.order_id,
            'quantity': self.quantity,
            "User": self.user.to_dict(),
            'Product': {
                "id": self.product.id,
                'seller_id': self.product.seller_id,
                'category_id': self.product.category_id,
                'name': self.product.name,
                'description': self.product.description,
                'price': self.product.price,
                'preview_image': self.product.preview_image
            }
        }
