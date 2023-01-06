import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
//import Header  from '../Header/Header';

import "./NavBar.css";

function ProfileButton({ isLoaded, setShowLogInModal, setShowSignUpModal }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector((state) => state.session.user);
  const history = useHistory();

  const openMenu = () => {
    //debugger
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      //debugger
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/");
  };

  return (
    <>
      <div className="profilebutton_div">
        <button onClick={openMenu} className="upperRight_button">
          <i className="fas fa-user-circle"></i>
          {/* <i className="fa-solid fa-circle-user"></i> */}
          <i className="fa-solid fa-caret-down"></i>

        </button>

        {showMenu && (
          <div className="main_page_list_container">
            <div className="profile-dropdown">
              <div className="info_navigation"> <i class="fa-solid fa-gift"></i><span className="my_review">{`Hello,${user?.firstName}!`}</span></div>
              {/* <div id='user_email' className="info_navigation">{user.email}</div> */}

              <div className="info_navigation">
                <NavLink id="manage_listings" to="/create">
                <i class="fa-solid fa-cart-shopping"></i><span className="my_sell">Sell Product</span>
                </NavLink>
              </div>
              <div className="info_navigation">
                <NavLink id="manage_listings" to="/reviews/current">
                  <i class="fa-solid fa-book"></i> <span className="my_review">My Reviews</span>
                </NavLink>
              </div>
              <div className="nav_bar_log_out">
                <i class="fa-solid fa-right-from-bracket"></i>
              <button className="logout_button_drop" onClick={logout}>
                <span className="button_logout">Log Out</span>
                </button>
                </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProfileButton;
