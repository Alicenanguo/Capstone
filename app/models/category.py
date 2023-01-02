from .db import db, environment, SCHEMA, add_prefix_for_prod

class Category(db.Model):
    __tablename__ = "categories"

    if environment == "production":
       __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    category_image = db.Column(db.String(255), nullable=False)

    products = db.relationship('Product', back_populates='category',cascade="all, delete")

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'category_image':self.category_image,
            'products': [product.to_dict() for product in self.products]
            }
