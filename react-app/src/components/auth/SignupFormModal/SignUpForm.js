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
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      setErrors([]);
      return dispatch(
        signUp({
          firstName,
          lastName,
          email,
          username,
          password,
        })
      ).catch(async (res) => {
        const data = await res.json();
        console.log("erro_info_____", data.errors);
        if (data && typeof data.errors === "object") {
          setErrors(Object.values(data.errors));
        } else if (data && data.errors) {
          setErrors(data.errors);
        }
      });
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
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

  return (
    <>
      <div className="model_signup">
        {showLogin ? (
          <LoginForm />
        ) : (
          <form onSubmit={onSignUp} className="signup_form_container">
            <div className="create_accout">Create your account</div>
            <div className="register_is_easy">Registration is easy.</div>
            <div className="error_messasge">
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </div>

            <div className="title_input_box">
            <div className="title_box">
                <label>
                  User Name<span>*</span>
                </label>
              </div>
              <div>
                <input className="input_box"
                  type="text"
                  name="firstname"
                  onChange={updatefirstName}
                  value={firstName}
                ></input>
              </div>
            </div>

            <div className="title_input_box">
            <div className="title_box">
              <label>
                    First Name<span>*</span>
              </label>
                    </div>
              <input className="input_box"
                type="text"
                name="lastname"
                onChange={updatelastName}
                value={lastName}
              ></input>
            </div>

              <div className="title_input_box">
              <div className="title_box">
              <label>
                Last Name<span>*</span>
                  </label>
                  </div>
              <input className="input_box"
                type="text"
                name="username"
                onChange={updateUsername}
                value={username}
              ></input>
            </div>

              <div className="title_input_box">
              <div className="title_box">
              <label>
                Email address<span>*</span>
                  </label>
                  </div>
              <input className="input_box"
                type="text"
                name="email"
                onChange={updateEmail}
                value={email}
              ></input>
            </div>

              <div className="title_input_box">
              <div className="title_box">
              <label>
                Password<span>*</span>
                </label>
                </div>
              <input className="input_box"
                type="password"
                name="password"
                onChange={updatePassword}
                value={password}
              ></input>
            </div>

              <div className="title_input_box">
              <div className="title_box">
              <label>
                Repeat Password<span>*</span>
                  </label>
                  </div>
              <input className="input_box"
                type="password"
                name="repeat_password"
                onChange={updateRepeatPassword}
                value={repeatPassword}
                required={true}
              ></input>
            </div>

            <div className="link_to_login">
              <div className="already">Already have an account?</div>
                <div className="submit_to_login">
                  <button onClick={() => loginSubmit()}>Log In</button>
                  </div>
            </div>
            <div>
              <button className="submit_signin" type="submit">Sign Up</button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default SignUpForm;
