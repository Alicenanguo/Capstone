import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updateCartThunk } from '../../store/cart';


import './cart.css'

function UpdateCart({ cart, total, setTotal, priceList,sum}) {
    const dispatch = useDispatch()
    console.log("cart-in-updateCart",cart)

    const [quantity, setQuantity] = useState(cart.quantity)
    console.log("quantity-in-updateCart",quantity)

    let price = quantity * cart?.Product?.price
    priceList[cart.id] = price

    let newSum = 0;
    Object.values(priceList).forEach(el =>
        newSum += el

    )
    console.log("newSum",newSum)

    sum = newSum

    console.log("priceList+++++++",priceList)

    const update = {
        quantity
    }

    useEffect(() => {
        console.log("$$$$$$$$$$$$$$$$$")

       dispatch(updateCartThunk(cart.id, update))
    }, [quantity])
console.log('total-in-update',total)
    return (
        <div className='update-container'>
            <div className='update-cart-quantity'>
         <select
                id="number"
                type="number"
                onChange={(e) => {
                    setQuantity(e.target.value)
                    // console.log("setQuantity______",e.target.value * cart?.Product?.price,Number(e.target.value * cart?.Product?.price),typeof Number(total))
                    // setTotal(Number(total) + Number(e.target.value * cart?.Product?.price))
                }
                }

                value={quantity}
                min="1"

              >
                {[...Array(11).keys()].slice(1).map((num) => (
                    <option key={num} value={num}>
                    {num}
                    </option>

                ))}
                    <option selected value={quantity}>
                        {quantity}
                    </option>
                </select>
                </div>
        <div className='update-cart-price'>
                ${price.toFixed(2)}

            </div>
            {/* <div><span>{newSum}</span></div> */}

    </div>

    )

}
export default UpdateCart;
