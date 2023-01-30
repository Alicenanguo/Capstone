from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Cart, Product
from app.forms import CartForm, ProductForm
from app.api.auth_routes import validation_errors_to_error_messages

cart_routes = Blueprint('carts', __name__)

#get current user's list in cart
@cart_routes.route('')
@login_required
def current_user_cart():
    carts= Cart.query.filter(Cart.user_id == current_user.id).all()
    return {'Carts':[cart.to_dict() for cart in carts]}

#add items to cart
@cart_routes.route('', methods=['POST'])
@login_required
def add_cart():
    form = CartForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_cart = Cart(
            user_id = current_user.id,
            product_id = form.data['product_id'],
            quantity = form.data['quantity'],
        )
        db.session.add(new_cart)
        db.session.commit()

        return new_cart.to_dict()
    if form.errors:
            return form.errors

#edit product in cart
@cart_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_cart(id):
    form = CartForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    cart_product = Cart.query.get(id)

    if not cart_product:
        return {'errors': 'This product is not found in your cart!'}
    # if cart_product.user_id == current_user.id:
        # print('current_user_id++++++++++++++',cart_product.user_id)
    if form.validate_on_submit():
        if form.data['product_id']:
            cart_product.product_id= form.data['product_id']
        if form.data['quantity']:
            cart_product.quantity = form.data['quantity']


        db.session.commit()
        return cart_product.to_dict()
    if form.errors:
        return form.errors
    # else:
    #     return {'error': 'You have no access.'}

#delete product in the cart
@cart_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_cart_product(id):
    cart_product = Cart.query.get(id)
    if cart_product:
        db.session.delete(cart_product)
        db.session.commit()
        return {"message":"Product in cart successfully deleted"}
    else:
        return {'error':'This product is not found in your cart!'}

#delete all products in cart after checkout
@cart_routes.route('', methods=['DELETE'])
@login_required
def delete_cart():
    cart_products = Cart.query.filter(Cart.user_id == current_user.id).all()
    if cart_products:
        for el in cart_products:
            db.session.delete(el)

        db.session.commit()
        return {'message': "Shopping cart is empty now"}
    else:
        return {'message': 'No product in your cart'}
