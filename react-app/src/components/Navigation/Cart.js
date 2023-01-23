import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCartProductsThunk } from '../../store/cart';

import './NavBar.css';

function CartNav() {
    const dispatch = useDispatch();

    let user = useSelector((state) => state.session.user);
    let carts = useSelector((state) => Object.values(state.carts.Cart));

    useEffect(() => {
        if (user) {
            dispatch(getCartProductsThunk())
        }
    }, [dispatch.user])

    let count = (product) => {
        let total = 0;
        for (let i = 0; i < product.length; i++) {
            total += product[i].quantity
        }
        return total
    }
    return (
        <>
        <div>
            {!user &&
            <NavLink to={`/login`}></NavLink>}
        </div>
            <div>
                {user &&
                    <div>
                        <NavLink to={'/carts'}>
                    <i class="fa-solid fa-cart-shopping"></i>

                           
                        </NavLink>
                    </div>
                    }

            </div>
            </>
    )
}

export default CartNav;
