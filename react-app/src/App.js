import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginFormModal from "./components/auth/LoginFormModal/index";
import SignUpForm from "./components/auth/SignupFormModal/SignUpForm";
import NavBar from "./components/Navigation/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
// import GetProducts from "./components/products/getProducts";
import { authenticate } from "./store/session";
import GetCategories from "./components/Categories";
import HomePage from "./components/HomePage";
import GetOneProduct from "./components/products/OneProduct";
import CreateProduct from "./components/products/CreateProduct";
import GetCurrentProduct from "./components/products/userProduct";
import UserReviews from "./components/Reviews/UserReviews";
import GetCart from "./components/Carts/GetCarts";

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        {/* <Route path='/login' exact={true}>
          <LoginFormModal />
        </Route> */}

        {/* <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>

        <ProtectedRoute path="/users" exact={true}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute> */}
        {/* <Route path='/' exact={true} >
          <h1>My Home Page</h1>
        </Route> */}

        <Route path="/categories/:id" exact={true}>
          <GetCategories />
        </Route>

        <Route exact path="/products/:productId">
          <GetOneProduct />
        </Route>

        <ProtectedRoute path="/create" exact={true}>
          <CreateProduct />
        </ProtectedRoute>

        <ProtectedRoute  exact path="/reviews/current">
            <UserReviews />
          </ProtectedRoute >


        <ProtectedRoute path="/shop-manager" exact={true}>
          <GetCurrentProduct />
        </ProtectedRoute>

        <ProtectedRoute path='/carts' exact={true} >
              <GetCart />
            </ProtectedRoute>

        <Route path="/" exact={true}>
          <HomePage />
        </Route>
        {/* <Route exact path="/">
            <GetProducts />
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
