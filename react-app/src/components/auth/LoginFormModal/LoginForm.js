import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../../store/session";
import SignUpForm from "../SignupFormModal/SignUpForm";
import "./LoginForm.css";

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSignup, setShowSignup] = useState(false);

  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const DemoUser = async (e) => {
    e.preventDefault();
    const data = await dispatch(login("demo@aa.io", "password"));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  const signupSubmit = (e) => {
    setShowSignup(true);
  };

  return (
    <div className="model_login">
      {showSignup ? (
        <SignUpForm />
      ) : (
        <>
          <div className="title_first_line">
            <div className="title_signin">Sign in</div>
            <div>
              <button className="title_register" onClick={() => signupSubmit()}>
                Register
              </button>
            </div>
          </div>

          <form onSubmit={onLogin}>
            <ul className='errors_info' id='errors_show_above'>
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
              </ul>

              <div className="title_input_box">
                <div className="title_box">
                  <label htmlFor="email">Email address</label>
                  </div>
              <div>
                <input className="input_box"
                  name="email"
                  type="text"
                  // placeholder="Email"
                  value={email}
                  onChange={updateEmail}
                />
              </div>
              </div>

            <div className="title_input_box">
                <div className="title_box">
                  <label htmlFor="password">Password</label>
                  </div>
                  <div>
              <input className="input_box"
                name="password"
                type="password"
                // placeholder="Password"
                value={password}
                onChange={updatePassword}
                    />
                </div>
                </div>

              <div className='submit'>
                <button className='submit_signin' type="submit">Sign in</button>
                <button className="demo_login" onClick={DemoUser}>
                  Demo Login
                </button>
          </div>

          </form>
        </>
      )}
    </div>
  );
};

export default LoginForm;
