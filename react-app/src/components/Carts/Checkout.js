import { NavLink } from "react-router-dom";
import "./cart.css";

function Checkout() {
  return (
    <div className="checkout-container">
      <div className='text-404'>
        <i class="fa-solid fa-cart-shopping"></i>
        <span>Thanks for your order!</span>
      </div>
      <div>
        <NavLink className="text-go-back" to={"/"}>
          Go back
        </NavLink>
      </div>
    </div>
  );
}

export default Checkout;
