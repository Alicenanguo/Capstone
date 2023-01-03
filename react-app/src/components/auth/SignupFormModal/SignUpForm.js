import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../../store/session';
import LoginForm from '../LoginFormModal/LoginForm';
// import * as sessionActions from "../../../store/session";

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [showLogin, setShowLogin] = useState(false);

  const user = useSelector(state => state.session.user);
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
        console.log('erro_info_____',data.errors)
        if (data && typeof data.errors === 'object') {
          setErrors(Object.values(data.errors));
        }
        else if (data && data.errors) {
          setErrors(data.errors)
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
    setShowLogin(true)
  }
  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
      {
        showLogin ? <LoginForm />
        :
          <form onSubmit={onSignUp} className='signup_form_container'>
            <div className='create_accout'>Create your account</div>
            <div className='register_is_easy'>Registration is easy.</div>
        <div className='error_messasge'>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
            </div>

          <div className='input_content'>
          <label>User Name</label>
          <input
            type='text'
            name='firstname'
            onChange={updatefirstName}
            value={firstName}
          ></input>
        </div>

        <div className='input_content'>
          <label>First Name</label>
          <input
            type='text'
            name='lastname'
            onChange={updatelastName}
            value={lastName}
          ></input>
            </div>

          <div className='input_content'>
          <label>Last Name</label>
          <input
            type='text'
            name='username'
            onChange={updateUsername}
            value={username}
          ></input>
            </div>

        <div className='input_content'>
          <label>Email</label>
          <input
            type='text'
            name='email'
            onChange={updateEmail}
            value={email}
          ></input>
            </div>

        <div className='input_content'>
          <label>Password</label>
          <input
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
          ></input>
            </div>

        <div className='input_content'>
          <label>Repeat Password</label>
          <input
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
            </div>

            <div>
              Already have an account?
              <button onClick={() => loginSubmit()}>Log In</button>
            </div>
            <div>
              <button type='submit'>Sign Up</button>
            </div>


      </form>
        }
    </>
  );
};

export default SignUpForm;
