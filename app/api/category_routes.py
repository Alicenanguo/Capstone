from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Category


category_routes = Blueprint('categories', __name__)

@category_routes.route('')
def get_all_category():
    all_category = Category.query.all()
    print('____________cagegory',all_category)
    return {'categories': [category.to_dict() for category in all_category]}

@category_routes.route('/<int:id>')
def get_one_category(id):

    one_category = Category.query.get(id)

    if one_category:
       return one_category.to_dict()
    return {'errors': 'This category is not found.'}, 404


