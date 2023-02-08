import React from "react";
import { useHistory, NavLink } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = () => {


  return (
    <div className="404-container">
          <div className="text-404">
          <i class="fa-solid fa-face-sad-cry"></i>
        <span>Sorry! Page Not Found</span>
      </div>
      <div>
        <NavLink className="text-go-back" to={"/"}>Go back</NavLink>
      </div>
    </div>
  );
};

export default PageNotFound;
