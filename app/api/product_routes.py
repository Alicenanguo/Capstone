from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Product, ProductImage,Review,Cart
from app.forms import ProductForm,ReviewForm,CartForm
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)

product_routes = Blueprint('products', __name__)

#reviews:
#get all reviews by product id
@product_routes.route('/<int:id>/reviews')
def product_reviews(id):
    reviews = Review.query.filter_by(product_id=id).all()

    return {'Reviews': [review.to_dict() for review in reviews]}

#create review
@product_routes.route('/<int:id>/reviews',methods=["POST"])
@login_required
def create_review(id):
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    check_product = Product.query.get(id)
    if check_product is None:
        return {'errors': 'This product is not found.'}, 404
    if check_product.seller_id == current_user.id:
        return {'errors': 'you could not leave review to your own product'}, 400

    check_review = Review.query.filter_by(product_id=id).all()
    if check_review:
        for el in check_review:
            if el.buyer_id == current_user.id:
                return {'errors': 'You have a review for this product.'},403

    if form.validate_on_submit():
        review = form.data['review']
        stars = form.data['stars']

        new_review = Review(
            buyer_id=current_user.id,
            product_id=id,
            review=review,
            stars=stars
        )

        db.session.add(new_review)
        db.session.commit()

        return new_review.to_dict()

    if form.errors:
        return form.errors




# get all products
@product_routes.route('')
def all_products():
    all_products = Product.query.all()
    print("+++++++++++++++get all products works")
    # for product in all_products:
    #     id=product.to_dict()['id']
    #     print('id',id)
    #     if ProductImage.product_id == id and ProductImage.preview_image == True:
    #         pre_image= ProductImage.url
    #         print("____img",pre_image)

    return {'products': [product.to_dict() for product in all_products]}


# get one product
@product_routes.route('/<int:id>')
def single_product(id):
    product = Product.query.get(id)
    print('+++++product',product)

    if product:
        return product.to_dict_detail()
    return {'errors': 'This product is not found.'}, 404

# get current user product
@product_routes.route('/current')
@login_required
def current_user_product():
    products = Product.query.filter(Product.seller_id == current_user.id).all()

    return {"products":[product.to_dict() for product in products]}

# get home page products
@product_routes.route('/home')
def home_products():
    products = Product.query.order_by('price').limit(8)
    # print('products in home page********',products)
    return {"products":[product.to_dict() for product in products]}



# create product
@product_routes.route("", methods=["POST"])
@login_required
def create_product():
    form = ProductForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print("++++++++++",form['csrf_token'].data)

    if form.validate_on_submit():

        name = form.data["name"]
        price = form.data["price"]
        description=form.data["description"]
        category_id=form.data["category_id"]
        preview_image = form.data["preview_image"]

        new_product = Product(
            seller_id=current_user.id,
            name=name,
            price=price,
            description=description,
            category_id=category_id,
            preview_image=preview_image

    )

        db.session.add(new_product)
        db.session.commit()

        return new_product.to_dict()
    if form.errors:
            return form.errors

# edit product
@product_routes.route("/<int:id>", methods=["PUT"])
@login_required
def edit_product(id):
    form = ProductForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    product = Product.query.get(id)
    if product.seller_id == current_user.id:
        if form.validate_on_submit():
            if form.data["name"]:
                product.name = form.data["name"]
            if form.data["price"]:
                product.price = form.data["price"]
            if form.data["description"]:
                product.description = form.data["description"]
            if form.data["category_id"]:
                product.category_id = form.data["category_id"]
            if form.data["preview_image"]:
                product.preview_image = form.data["preview_image"]

            db.session.commit()
            return product.to_dict()

        if form.errors:
            return form.errors
    else:
        return {'error': 'You are not the seller of the product.'}

# delete product
@product_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_product(id):
    product = Product.query.get(id)

    if product.seller_id == current_user.id:
        db.session.delete(product)
        db.session.commit()

        return {"message":"Product successfully deleted"}
    else:
        return {'error': 'You are not the seller of the product.'}

#search
@product_routes.route("/search/<keyword>")
def search_product(keyword):

  products = Product.query.filter(Product.name.ilike(f"%{keyword.lower()}%")).all()
  print('++++++++++++++++=product-in-backend-search',products)
  return {
    "Products": [
      product.to_dict_detail() for product in products
    ]
  }


#AWS upload images
@product_routes.route("/<int:id>/images", methods=["POST"])
@login_required
def upload_image(id):
    product = Product.query.get(id)

    if "image" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["image"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]
    preview_image = request.form['preview_image'] == 'true'
    # flask_login allows us to get the current user from the request
    new_image = ProductImage(product_id=id, url=url,preview_image=preview_image)
    product.images.append(new_image)

    db.session.add(new_image)
    db.session.commit()

    return {"new_image": new_image.to_dict()}
