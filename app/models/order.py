from .db import db, SCHEMA, environment, add_prefix_for_prod
import datetime


class Order(db.Model):
    __tablename__ = 'orders'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer,
        db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.datetime.now)

    user = db.relationship('User', back_populates='orders')
