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
  const user = useSelector((state) => state.session.user);
  console.log("user-in-cart-index", user);

  let priceList = {};
  carts.forEach((el) => {
    priceList[el["id"]] = el?.Product?.price * el?.quantity;
  });
  console.log("cart_in_getCart", carts);
  console.log("priceList-in-getcart", priceList);
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
          {carts.length && (
            <>
              <div className="text-first-line">
                <div className="text_shopping_cart">
                  {carts.length} items in your cart
                </div>
                <div className="text-keep-shopping">
                  <NavLink
                    to={""}
                    activeStyle={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    Keep shopping
                  </NavLink>
                </div>
              </div>
              <div className="text-second">
                <div>
                  <img
                    className="handshake"
                    src="https://static.vecteezy.com/system/resources/previews/003/808/376/original/handshake-heart-symbol-icon-for-web-presentation-logo-infographic-business-idea-inspiration-feed-story-partnership-client-free-vector.jpg"
                    alt={"handshake"}
                    onError={(e) => {
                      e.currentTarget.src = "/default.jpeg";
                    }}
                  />
                </div>
                <div className="text-after-handshake">
                  <span className="text-protect">
                    Nansty Purchase Protection:
                  </span>{" "}
                  Shop confidently on Nansty knowing if something goes wrong
                  with an order, we've got your back.
                </div>
              </div>

              {carts.map((el) => (
                <>
                  <div className="third-part">
                    <div className="store-info">
                      <img
                        className="icon-store"
                        src="https://www.iconpacks.net/icons/2/free-store-icon-2017-thumb.png"
                        alt={"store"}
                        onError={(e) => {
                          e.currentTarget.src = "/default.jpeg";
                        }}
                      />
                      <span className="text-store">
                        {el?.Product?.user?.first_name}'s Store
                      </span>
                    </div>

                    <div className="cart-product-info">
                      <div>
                        <NavLink
                          to={`/products/${el?.product_id}`}
                          activeStyle={{
                            textDecoration: "none",
                            color: "black",
                          }}
                        >
                          <div className="cart-img">
                            <img
                              className="cart-product_img"
                              src={el?.Product?.preview_image}
                              alt={el?.Product?.name}
                              onError={(e) => {
                                e.currentTarget.src = "/default.jpeg";
                              }}
                            />
                          </div>
                        </NavLink>
                      </div>

                      <div className="cart-name">
                        <NavLink
                          to={`/products/${el?.product_id}`}
                          activeStyle={{
                            textDecoration: "none",
                            color: "black",
                          }}
                        >
                          {el?.Product?.name}
                        </NavLink>
                      </div>
                      {/* <ul className="error-container">
                        {errors.map((error, idx) => (
                          <li key={idx}>{error}</li>
                        ))}
                      </ul> */}

                      <div className="quantity-price">
                        <UpdateCart
                          cart={el}
                          total={total}
                          setTotal={setTotal}
                          priceList={priceList}
                          sum={sum}
                        />
                      </div>
                    </div>

                    <div className="delete-cart">
                      <button onClick={() => dispatch(deleteCartThunk(el?.id))}>
                        Remove
                      </button>
                    </div>
                  </div>
                </>
              ))}

              <div className="cart-right">
                <div className="checkout-box">
                  <div className="text-pay">You will pay:</div>
                  <span className="text-final-price">Item(s) total:</span>
                  <span>${sum.toFixed(2)}</span>
                </div>
              </div>
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
      </>
    )
  );
};

export default GetCart;
