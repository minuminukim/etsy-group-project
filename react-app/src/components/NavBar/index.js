
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css';
import SearchBar from '../Search/SearchBar';
import ProfileButton from './ProfileButton';

const NavBar = () => {

  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <nav className="login-signup">
       <NavLink to='/login' exact={true}><button id="sign-in">Sign in</button></NavLink>
      </nav>
    );
  }

  return (
    <header className="navigation-header">
      <div className="global-navigation">
        <div className="left-container">
          <NavLink id="logo-font" exact to ="/">Qwerty</NavLink>
        </div>
        <div className="search-container">
          <SearchBar />
        </div>
        <div className="right-container">
          {sessionLinks}
          {/* <NavLink to='/login' exact={true}><button id="sign-in">Sign in</button></NavLink> */}
          <NavLink id="cart-logo" to='/cart'>Cart</NavLink>
        </div>
      </div>
      <div className="secondary-navigation"></div>
    </header>
  )
}

export default NavBar;