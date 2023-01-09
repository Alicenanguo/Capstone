import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../../store/session";
import LoginForm from "../LoginFormModal/LoginForm";
// import * as sessionActions from "../../../store/session";
import "./SignupFrom.css";

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setfirstName] = useState("");
  const [last_name, setlastName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      setErrors([]);
      const data = await dispatch(
        signUp(first_name, last_name, email, username, password)
      );
      // .catch(async (res) => {
      // const data = await res.json();
      // console.log("erro_info_____", data.errors);
      // if (data && typeof data.errors === "object") {
      //   setErrors(Object.values(data.errors));
      // } else

      if (data && data.errors) {
        setErrors(...Object.values(data.errors));
      }
    } else {
      setErrors([
        "Confirm Password field must be the same as the Password field",
      ]);
    }
  };

  //     const data = await dispatch(signUp(firstName, lastName, username, email, password));
  //     if (data) {
  //       setErrors(data)
  //     } else {
  //       setErrors(["Please Confirm Password"])
  //     }
  //   }
  // };

  const updatefirstName = (e) => {
    setfirstName(e.target.value);
  };

  const updatelastName = (e) => {
    setlastName(e.target.value);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const loginSubmit = (e) => {
    setShowLogin(true);
  };
  if (user) {
    return <Redirect to="/" />;
  }

  console.log("errores_in_signup", errors);
  console.log("user_name__________", username);

  return (
    <>
      <div className="model_signup">
        {showLogin ? (
          <LoginForm />
        ) : (
          <form onSubmit={onSignUp} className="signup_form_container">
            <div className="create_accout">Create your account</div>
            <div className="register_is_easy">Registration is easy.</div>
            <ul className='errors_info' id='errors_show_above'>
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </ul>

            <div className="title_input_box">
              <div className="title_box">
                <label>
                  User Name<span>*</span>
                </label>
              </div>
              <div>
                <input
                  className="input_box"
                  type="text"
                  name="username"
                  onChange={updateUsername}
                    value={username}
                    required
                ></input>
              </div>
            </div>

            <div className="title_input_box">
              <div className="title_box">
                <label>
                  First Name<span>*</span>
                </label>
              </div>
              <input
                className="input_box"
                type="text"
                name="firstname"
                onChange={updatefirstName}
                  value={first_name}
                  required
              ></input>
            </div>

            <div className="title_input_box">
              <div className="title_box">
                <label>
                  Last Name<span>*</span>
                </label>
              </div>
              <input
                className="input_box"
                type="text"
                name="lastname"
                onChange={updatelastName}
                  value={last_name}
                  required
              ></input>
            </div>

            <div className="title_input_box">
              <div className="title_box">
                <label>
                  Email address<span>*</span>
                </label>
              </div>
              <input
                className="input_box"
                type="text"
                name="email"
                onChange={updateEmail}
                  value={email}
                  required
              ></input>
            </div>

            <div className="title_input_box">
              <div className="title_box">
                <label>
                  Password<span>*</span>
                </label>
              </div>
              <input
                className="input_box"
                type="password"
                name="password"
                onChange={updatePassword}
                  value={password}
                  required
              ></input>
            </div>

            <div className="title_input_box">
              <div className="title_box">
                <label>
                  Repeat Password<span>*</span>
                </label>
              </div>
              <input
                className="input_box"
                type="password"
                name="repeat_password"
                onChange={updateRepeatPassword}
                  value={repeatPassword}
                  required
                // required={true}
                //   onKeyPress={(e) => {
                //   if (e.key === 'Enter')
                //   console.log("press enter");
                // }}
              ></input>
            </div>

            <div>
              <button className="submit_signin" type="submit">
                Sign Up
              </button>
            </div>

            <div className="link_to_login">
              <div className="already">Already have an account?</div>

              <div className="submit_to_login">
                <button onClick={() => loginSubmit()}>Log In</button>
              </div>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default SignUpForm;
