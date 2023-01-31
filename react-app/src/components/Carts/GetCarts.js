import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams, useHistory } from "react-router-dom";
// import CartProducts from "./CartProducts";
import UpdateCart from "./UpdateCart";
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
  const [errors, setErrors] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  // const [priceList, setPriceList] = useState({})

  // const [quantity, setQuantity] = useState(cart.quantity)

  let carts = useSelector((state) => Object.values(state.carts.Cart));
  let priceList = {};
  carts.forEach((el) => {
    priceList[el["id"]] = el?.Product?.price * el?.quantity;
  });
  console.log("cart_in_getCart", carts);
  // let finalPrice = carts.reduce((final, cart) => final + cart?.Product?.price * cart?.quantity, 0)
  const finalPrice = (carts) => {
    let price = 0;
    for (let i = 0; i < carts.length; i++) {
      console.log("++++++++++++", carts[i]?.Product?.price * carts[i].quantity);
      price += carts[i]?.Product?.price * carts[i].quantity;
      console.log("price+++++++", price);
    }
    return price.toFixed(2);
  };

  let sum = 0;
  Object.values(priceList).forEach((el) => (sum += el));
  console.log("priceList-in-cart", priceList);
  console.log("sum", sum);

  useEffect(async () => {
    await dispatch(getCartProductsThunk())
      // .then(() => setTotal(finalPrice(carts)))
      .then(() => setIsLoaded(true));
  }, [dispatch, sum]);
  console.log("total-in-cart-check", typeof total);

  if (!carts || !isLoaded) {
    return null;
  }

  // let countPrice = (carts) => {
  //   let price = 0;
  //     for (let i = 0; i < carts.length; i++) {
  //       let product=carts[i]
  //         price += product.quantity * product?.Product?.price;
  //         console.log('quantitiy',product.quantity)
  //   }
  //   return price.toFixed(2);
  // };
  // console.log("count-price", countPrice(carts));

  let checkout = () => {
    dispatch(resetCartThunk());
    history.push("/carts/checkout");
  };

  return (
    isLoaded && (
      <>
        <div className="cart-container">
          <div className="cart-left">
            {carts.length && (
              <>
                <div>
                  <h1 className="text_shopping_cart">Shopping Cart</h1>
                  <i class="fa-solid fa-umbrella"></i>
                  <span>
                    Nansty Purchase Protection: Shop confidently on Nansty
                    knowing if something goes wrong with an order, we've got
                    your back.
                  </span>
                </div>
                {carts.map((el) => (

                  <>
                    <div className="cart-left">
                      <div className="store-info">
                        <img
                          className="flower-store"
                          src="https://cdn-icons-png.flaticon.com/512/2674/2674697.png"
                        />
                        <span>Nina's store</span>
                      </div>
                    </div>
                    <div>
                      <NavLink to={`/products/${el?.product_id}`}>
                        <img
                          className="product_img_all"
                          src={el?.Product?.preview_image}
                          alt={el?.Product?.name}
                          onError={(e) => {
                            e.currentTarget.src = "/default.jpeg";
                          }}
                        />
                        <div>{el?.Product?.name}</div>
                      </NavLink>
                      <div className="text-free-shipping">
                        Eligible for Free Shipping!
                      </div>
                      <ul className="error-container">
                        {errors.map((error, idx) => (
                          <li key={idx}>{error}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <UpdateCart
                        cart={el}
                        total={total}
                        setTotal={setTotal}
                        priceList={priceList}
                        sum={sum}
                      />
                    </div>
                    <div className="delete-cart">
                      <button onClick={() => dispatch(deleteCartThunk(el?.id))}>
                        Remove
                      </button>
                    </div>

                    <div className="cart-right">
                      <div className="checkout-box">
                        <div className="text-pay">You will pay:</div>
                        <span className="text-final-price">Item(s) total:</span>
                        <span>{sum}</span>

                        {/* {Number(total) === 0 ? <span>${finalPrice(carts)}</span> : <span>{total}</span>} */}
                      </div>
                    </div>
                  </>
                ))
                }
              </>
            )}
            {!carts.length && (
              <div className="cart-one-middle-title">
                Shopping cart is empty.
                <div>
                  <NavLink to={`/`}>
                    Discover something unique to fill it up!
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    )
  );
};

export default GetCart;
