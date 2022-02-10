import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import '../NavBar/NavBar.css';
import './auth.css';
import { NavLink } from 'react-router-dom';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <NavLink to='/login' id="signIn" exact={true}><button id="sign-in" onClick={() => setShowModal(true)}>Sign In</button></NavLink>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </div>
  );
}

export default LoginFormModal;

       {/* <NavLink to='/login' id="signIn" exact={true}><button id="sign-in">Sign in</button></NavLink> */}
