import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LoginFormModal from "../auth/LoginFormModal";
import LogoutButton from "../auth/LogoutButton";
import ProfileButton from "./ProfileButton";

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
        <div className="header_right">
          {user ? (
            <>
              <div>
                <NavLink to="/shop-manager" exact activeClassName="active">
                  <i className="fa-solid fa-shop" />
                </NavLink>
              </div>
              <div>
                <ProfileButton user={user} />
              </div>
            </>
          ) : (
            <>
              <div>
                <LoginFormModal />
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
