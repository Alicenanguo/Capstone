import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LoginFormModal from "../auth/LoginFormModal";
import LogoutButton from "../auth/LogoutButton";
import ProfileButton from "./ProfileButton";
import CartNav from "./Cart";
import SearchBar from './SearchBar'

import "./NavBar.css";

const NavBar = () => {
  const user = useSelector((state) => state.session.user);

  return (
    <nav>
      <div className="header_container">
        <div className="header_left">
          <NavLink
            to="/"
            exact={true}
            className="navLink"
            activeClassName="active"
          >
            <div className="home_button">Nansty</div>
          </NavLink>
        </div>

        <div className='header_middle'>
          <SearchBar />
        </div>

        <div className="header_right">
          {user ? (
            <>
              <div className='shop_manager'>
                <NavLink to="/shop-manager" exact >
                  <div>
                  <i className="fa-solid fa-shop" />


                  </div>
                </NavLink>
              </div>
              <div>
                <ProfileButton user={user} />
              </div>
              <div className='navbar_shooping_cart'>
                <CartNav />

              </div>
            </>
          ) : (
            <>
              <div>
                  <LoginFormModal />
                  <div className='navbar_shooping_cart'>
                  <i class="fa-solid fa-cart-shopping"></i>

                    </div>

              </div>
            </>
          )}
        </div>

      </div>
    </nav>
  );
};

export default NavBar;
