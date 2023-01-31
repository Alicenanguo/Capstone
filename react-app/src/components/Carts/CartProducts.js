import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams, useHistory } from "react-router-dom";
import {
  getCartProductsThunk,
  updateCartThunk,
  deleteCartThunk,
  resetCartThunk,
} from "../../store/cart";
import "./cart.css";

const CartProducts = ({ product }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(product?.quantity);
  const [productNum, setProductNum] = useState(product?.Product?.quantity);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        dispatch(getCartProductsThunk());
    }, [dispatch]);

    let carts = useSelector((state) => Object.values(state.carts.Cart));
    if (!carts) return null;

    let finalPrice = carts.reduce((final,cart) => final + cart.Product.price * cart.quantity,0)

//   const updateCartNum = async (e) => {
//     e.preventDefault();

//     const update = await dispatch(
//       updateCartThunk(product.id, { quantity })
//     ).catch(async (res) => {
//       const result = await res.json();
//       if (result && result.errors) {
//         setErrors(result.errors);
//       }
//     });

//     if (update) {
//       setErrors([]);
//     }
//   };

  return (
    <div>
      <div>
        <NavLink to={`/products/${product?.product_id}`}>
          <img
            className="product_img_all"
            src={product?.Product?.preview_image}
            alt={product?.Product?.name}
            onError={(e) => {
              e.currentTarget.src = "/default.jpeg";
            }}
          />
          <div>{product?.Product?.name}</div>
        </NavLink>
        <div className="text-free-shipping">Eligible for Free Shipping!</div>
        <div>
                  <form
                    //   onSubmit={updateCartNum}
                  >
            <ul className="error-container">
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
            <div className="quantity-input">
              <select
                id="number"
                type="number"
                onChange={(e) => setQuantity(e.target.value)}
                value={quantity}
                min="1"
                max={productNum}
              >
                {[...Array(11).keys()].slice(1).map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
          </form>
          <div className="delete-cart">
            <button onClick={() => dispatch(deleteCartThunk(product?.id))}>
              Remove
            </button>
          </div>
        </div>
              <div className="cart-one-right-price">
                  <span>Item(s) total</span>
                  <span>${finalPrice?.toFixed(2) }</span>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
