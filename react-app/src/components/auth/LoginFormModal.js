import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import '../NavBar/NavBar.css';
import './auth.css';

function LoginFormModal () {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button className="signIn" id="sign-in" onClick={() => setShowModal(true)}>Sign In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </div>
  );
}

export default LoginFormModal;