from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Product, ProductImage,Review
from app.forms import ReviewForm

review_routes = Blueprint('reviews', __name__)

# get current user's reviews
@review_routes.route('/current')
@login_required
def user_reviews():
    userId = current_user.id
    my_reviews = Review.query.filter_by(buyer_id=userId).all()

    return {'Reviews':[review.to_dict_with_products() for review in my_reviews]}
