import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import LoginForm from './LoginForm';
import './LoginForm.css'

function LoginFormModal() {
    const [showModal, setShowModal] = useState(false);
    console.log("_____________",showModal)

  return (
    <>
      <button id='log_in' className='login_signup_button' onClick={() => setShowModal(true)}>Sign in</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
