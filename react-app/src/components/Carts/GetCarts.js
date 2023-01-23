import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams, useHistory } from "react-router-dom";
import CartProducts from "./CartProducts";
import {
  getCartProductsThunk,
  deleteCartThunk,
  resetCartThunk,
  updateCartThunk,
} from "../../store/cart";

import "./cart.css";

const GetCart = () => {
  const dispatch = useDispatch();
    const history = useHistory();

  let carts = useSelector((state) => Object.values(state.carts.Cart));
  console.log("cart_in_getCart", carts);

  useEffect(() => {
      dispatch(getCartProductsThunk());
    //   dispatch(updateCartThunk(product.id, { quantity }))
  }, [dispatch]);

  if (!carts) {
    return null;
  }
  let countProduct = (carts) => {
    let count = 0;
    for (let i = 0; i < carts.length; i++) {
      count += Number(carts[i].quantity);
    }
    return count;
  };

  let countPrice = (carts) => {
    let price = 0;
      for (let i = 0; i < carts.length; i++) {
        let product=carts[i]
          price += product.quantity * product.Product.price;
          console.log('quantitiy',product.quantity)
    }
    return price.toFixed(2);
  };
  console.log("count-price", countPrice(carts));

  let checkout = () => {
    dispatch(resetCartThunk());
    history.push("/carts/checkout");
  };

  return (
    <div>
      <div>
        <div>
          <h1 className="text_shopping_cart">Shopping Cart</h1>
          <div>
            <i class="fa-solid fa-umbrella"></i>
            <span>
              Nansty Purchase Protection: Shop confidently on Nansty knowing if
              something goes wrong with an order, we've got your back.
            </span>
          </div>

                  <div className="cart-left">

                      {carts.length > 0 ?

                          (

                          carts.map((el) => (
                                          <CartProducts key={el?.id} product={el} />
                                          ))






                              )


                              : (
              <div className="cart-one-middle-title">
                                  Shopping cart is empty.
                                  <div>
                                      <NavLink to={`/`}>
                                      Discover something unique to fill it up!
                                      </NavLink>
                                  </div>
              </div>
            )}
            {/* <div className="cart-right">
              <div>
                <div> Item(s) total </div>
                <div>${countPrice(carts)}</div>
              </div>
              <div>
                {carts.length && (
                  <div>
                    <button onClick={checkout}>Proceed to checkout</button>
                  </div>
                                  )}

              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetCart;
