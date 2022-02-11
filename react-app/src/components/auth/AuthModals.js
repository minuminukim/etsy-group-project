import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, signUp } from '../../store/session';
import "./auth.css";
import { Modal } from '../../context/Modal';


const AuthModals = () => {

    const [SigninModal, SetSigninModal] = useState(false)
    const [RegisterModal, SetRegisterModal] = useState(false)

    const SigninForm = () => {
        const [errors, setErrors] = useState([]);
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const dispatch = useDispatch();
      
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
              <button type="button" className="register-button" onClick={() => SetRegisterModal(true)}>Register</button>
              {RegisterModal && (
              <Modal onClose={() => {
                  SetRegisterModal(false)
                  SetSigninModal(false)
                }} >
                <RegisterForm/>
              </Modal>
            )}
              </div>
            </div>
              <div>
                <label htmlFor='email'>Email address</label>
              </div>
              <div>
              <input
                name='email'
                type='text'd
                placeholder='Email'
                value={email}
                onChange={updateEmail}
              />
              </div>
              <div>
              <label htmlFor='password'>Password</label>
              </div>
              <div>
              <input
                name='password'
                type='password'
                placeholder='Password'
                value={password}
                onChange={updatePassword}
              />
              </div>
              <div>
                <button className="login-button" type='submit'>Sign in</button>
              </div>
              <hr></hr>
              <div>
                <p className="signin-policy">By clicking Sign in, you agree to Qwerty's Terms of Use and Privacy Policy, which does not exist. Qwerty will not send you communications. We'll never post without your permission; in fact we'll never post anything, ever.</p>
              </div>
          </form>
        );
      };

    const RegisterForm = () => {
        const [errors, setErrors] = useState([]);
        const [username, setUsername] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [repeatPassword, setRepeatPassword] = useState('');
        const dispatch = useDispatch();
      
        const onSignUp = async (e) => {
          e.preventDefault();
          if (password === repeatPassword) {
            const data = await dispatch(signUp(username, email, password));
            if (data) {
              setErrors(data)
            }
          }
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
      
        return (
          <form className="login-form" onSubmit={onSignUp}>
            <div>
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </div>
            <div>
              <p className="sign-in-font">Create your account</p>
              <p>Registration is easy.</p>
            </div>
            <div>
              <div>
                <label>First name</label>
              </div>
              <input
                type='text'
                name='username'
                onChange={updateUsername}
                value={username}
              ></input>
            </div>
            <div>
              <div>
              <label>Email address</label>
              </div>
              <input
                type='text'
                name='email'
                onChange={updateEmail}
                value={email}
              ></input>
            </div>
            <div>
              <div>
              <label>Password</label>
              </div>
              <input
                type='password'
                name='password'
                onChange={updatePassword}
                value={password}
              ></input>
            </div>
            <div>
              <div>
              <label>Repeat Password</label>
              </div>
              <input
                type='password'
                name='repeat_password'
                onChange={updateRepeatPassword}
                value={repeatPassword}
                required={true}
              ></input>
            </div>
            <div>
              <button className="login-button" type='submit'>Register</button>
            </div>
            <hr></hr>
            <div>
              <p className="signin-policy">By clicking Sign in, you agree to Qwerty's Terms of Use and Privacy Policy, which does not exist. Qwerty will not send you communications. We'll never post without your permission; in fact we'll never post anything, ever.</p>
            </div>
          </form>
        );
      };



      return (
        <div>
          <button id="signIn" id="sign-in" onClick={() => SetSigninModal(true)}>Sign In</button>
          {SigninModal && (
            <Modal onClose={() => SetSigninModal(false)}><SigninForm/></Modal>
          )}
        </div>
      );

}

export default AuthModals;
