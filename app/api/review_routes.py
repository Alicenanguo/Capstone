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

# get one review:
@review_routes.route('/<int:reviewId>')
@login_required
def one_review(reviewId):

    review = Review.query.get(reviewId)

    if review:
        return review.to_dict()
    return {'errors': 'This review is not found.'}, 404

# edit review:
@review_routes.route("/<int:reviewId>", methods=["PUT"])
@login_required
def edit_review(reviewId):
    print('################')
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    print('reviewId',reviewId)
    review = Review.query.get(reviewId)

    if review.buyer_id == current_user.id:
        if form.validate_on_submit:
            if form.data['review']:
                review.review = form.data['review']
            if form.data['stars']:
                review.stars = form.data['stars']

            db.session.commit()
            return review.to_dict_with_products()

        if form.errors:
            return form.errors
    else:
        return {'error': 'This review is not belong to you'}



# delete review:
@review_routes.route('/<int:reviewId>', methods=["DELETE"])
@login_required
def delete_review(reviewId):

    review = Review.query.get(reviewId)

    if review.buyer_id == current_user.id:
        db.session.delete(review)
        db.session.commit()

        return {"message":"Review successfully deleted"}
    else:
        return {'error': 'You are not the owner of the review.'}
