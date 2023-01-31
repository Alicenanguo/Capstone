import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updateCartThunk } from '../../store/cart';

import './cart.css'

function UpdateCart({ cart }) {
    const dispatch = useDispatch()

    const [quantity, setQuantity] = useState(cart.quantity)
    let price = quantity * cart?.Product?.price

    const update = {
        quantity
    }

    useEffect((quantity) => {
        updateCartThunk(cart.id,update)
    }, [quantity])

    return (
        <div>
         <select
                id="number"
                type="number"
                onChange={(e) => setQuantity(e.target.value)}
                value={quantity}
                min="1"

              >
                {[...Array(11).keys()].slice(1).map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
        <div>
            ${price.toFixed(2)}
        </div>
    </div>

    )

}
export default UpdateCart;
