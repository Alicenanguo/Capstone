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
  const [paymentMethod, setPaymentMethod] = useState('cc')

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
                    style={{
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

              <div className="third-part">
                <div className="cart-left">
              {carts.map((el) => (
                <>
                  <div className="single-cart">

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
                          style={{
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
                          style={{
                            textDecoration: "none",
                            color: "black",
                          }}
                        >
                          {el?.Product?.name}
                        </NavLink>
                        <div className="delete-cart">
                      <button onClick={() => dispatch(deleteCartThunk(el?.id))}>
                        Remove
                      </button>
                    </div>

                      </div>


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
                    </div>

                </>
              ))}
                </div>


                 <div className="cart-right-box">
                  <div className="checkout-box">
                    <div className="credit-card">How you'll pay</div>
                     <ul className='paymentMethod'>
                            <div className='options'>
                                <div className='circle'>
                                    <input
                                        id='cc'
                                        name='payment'
                                        type='radio'
                                        value='cc'
                                        style={{ width: '32px', height: '32px' }}
                                        onChange={e => setPaymentMethod(e.target.value)}
                                        checked={paymentMethod === 'cc'}
                                    />
                        </div>
                        <div className="4-card">
                                <label htmlFor='cc'>
                            <span className='cards'>
                              <i style={{ fontSize: '2rem' }} className="fa-brands fa-cc-visa"></i>
                              {/* <img style={{ fontSize: '2rem' }} src='https://stanfordproofreading.com/wp-content/uploads/2021/02/atm-card-credit-card-debit-card-discover-icon-discover-card-png-512_512.png' /> */}
                            </span>
                                    <span className='cards'><i style={{ fontSize: '2rem' }} className="fa-brands fa-cc-mastercard"></i></span>
                                    <span className='cards'><i style={{ fontSize: '2rem' }} className="fa-brands fa-cc-amex"></i></span>
                                    <span className='cards'><i style={{ fontSize: '2rem' }} className="fa-brands fa-cc-discover"></i></span>
                          </label>
                          </div>
                      </div>
                    </ul>

                    {/* <div className="text-pay">You will pay:</div> */}
                    <div className="text-under-card">
                    <div className="text-total"><span className="text-items">Item(s) total:</span>
                      <span>${sum.toFixed(2)}</span>
                    </div>
                    <div className="text-discount"><span className="text-shop-discount">Shop discount</span><span className="text-0">-$0.00</span></div>
                    <div className="text-subtotal"><span className="text-subtotal-only">Subtotal</span><span className="subtotal-number">${sum.toFixed(2)}</span></div>
                    <div className="text-free-shipping"><span className="text-shipping">Shipping</span><span className="text-0">FREE</span></div>
                      <div><button className='checkout-button' onClick={checkout}>Proceed to checkout</button></div>
                      </div>
                </div>
                  </div>
                  </div>

              <div className="fourth-part">
              <i class="fa-solid fa-leaf"></i>
             <span>Nansty offsets carbon emissions from every delivery</span>

              </div>




            </>
          )}
              <div className="cart-container">
          {!carts.length && (
            <>
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
            <div className="text-empty-cart">
              Your cart is empty.
              <div className="text-discover-empty">
                <NavLink className="text-discover" to={`/`}>
                  Discover something unique to fill it up!
                </NavLink>
              </div>
                </div>
                <div className="fourth-part">
              <i class="fa-solid fa-leaf"></i>
             <span>Nansty offsets carbon emissions from every delivery</span>

              </div>
              </>
          )}
          </div>
        </div>
      </>
    )
  );
};

export default GetCart;
