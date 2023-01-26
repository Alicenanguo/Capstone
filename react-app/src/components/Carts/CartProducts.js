import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams, useHistory  } from "react-router-dom";
import { updateCartThunk, deleteCartThunk,resetCartThunk} from "../../store/cart";
import "./cart.css";

const CartProducts = ({ product }) => {
    const history = useHistory()
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(product?.quantity)
    const [productNum, setProductNum] = useState(product?.Product?.quantity)
    const [errors, setErrors] = useState([]);

    let carts = useSelector(state => Object.values(state.carts.Cart))

    const updateCartNum = async (e) => {
        e.preventDefault();

        const update = await dispatch(updateCartThunk(product.id, { quantity }))
            .catch(async (res) => {
                const result = await res.json();
                if (result && result.errors) {
                    setErrors(result.errors)
                }
            })

        if (update) {
            setErrors([])
        }
    }
    //     let countPrice = (carts) => {
    //         let price = 0;
    //         for (let i = 0; i < carts.length; i++) {
    //             price += Number(carts[i].quantity * carts[i].Product.price)
    //         }
    //         return price.toFixed(2)
    //     }
    //     console.log('count-price',countPrice(carts))


    // let checkout =() => {
    //     dispatch(resetCartThunk())
    //     history.push('/carts/checkout')
    // }


    return (
        <div>
            <div>
                <NavLink to={`/products/${product?.product_id}`}>
                <img
                      className="product_img_all"
                      src={product?.Product?.preview_image}
                      alt={product?.Product?.name}
                      onError={e => { e.currentTarget.src = "/default.jpeg" }}

                    />
                    <div>{product?.Product?.name }</div>
                </NavLink>
                <div className='text-free-shipping'>Eligible for Free Shipping!</div>
                <div>
                    <form onSubmit={updateCartNum}>
                        <ul className="error-container">
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                        </ul>
                        <div className="quantity-input">
                            <input
                            id='number'
                            type="number"
                            onChange={(e) => setQuantity(e.target.value)}
                            value={quantity}
                            min="1"
                            max={productNum}
                            step='1'
                                required
                            />
                        </div>
                    </form>
                    <div className='delete-cart'>
                        <button onClick={() => dispatch(deleteCartThunk(product?.id))}>
                            Remove
                        </button>
                    </div>
                </div>
                <div className='cart-one-right-price'>${`${(quantity * (product?.Product?.price)).toFixed(2)}`}</div>
            </div>


        </div>
    )
}

export default CartProducts;
