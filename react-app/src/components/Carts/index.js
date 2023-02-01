import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams, useHistory } from "react-router-dom";

import UpdateCart from "./UpdateCart";
import {
  getCartProductsThunk,
  deleteCartThunk,
  resetCartThunk,
  updateCartThunk,
} from "../../store/cart";

import './cart.css'
