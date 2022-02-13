import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/session';
import './auth.css';
import { Modal } from '../../context/Modal';
import SignUpForm from './SignUpForm';

const LoginForm = ({ setShowModal }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [showRegisterModal, setRegisterShowModal] = useState(false);

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
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

  return (
    <form className="login-form" onSubmit={onLogin}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className="signin-register-container">
        <p className="sign-in-font">Sign in</p>
        <div>
          <button
            className="register-button"
            onClick={() => setRegisterShowModal(true)}
          >
            Register
          </button>
          {showRegisterModal && (
            <Modal
              onClose={() => {
                setRegisterShowModal(false);
              }}
            >
              <SignUpForm />
            </Modal>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="email">Email address</label>
      </div>
      <div>
        <input
          name="email"
          type="text"
          d
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
      </div>
      <div>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
      </div>
      <div>
        <button className="login-button" type="submit">
          Sign in
        </button>
      </div>
      <hr></hr>
      <div>
        <p className="signin-policy">
          By clicking Sign in, you agree to Qwerty's Terms of Use and Privacy
          Policy, which does not exist. Qwerty will not send you communications.
          We'll never post without your permission; in fact we'll never post
          anything, ever.
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
