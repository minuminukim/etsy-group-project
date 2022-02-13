import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './NavBar.css';
import SearchBar from '../Search/SearchBar';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../auth/LoginFormModal';
import { BsCart4 } from 'react-icons/bs';
import AuthModals from '../auth/AuthModals';

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <nav className="login-signup">
        <AuthModals />
      </nav>
    );
  }

  return (
    <header className="navigation-header">
      <div className="global-navigation">
        <div className="left-container">
          <NavLink id="logo-font" exact to="/">
            Qwerty
          </NavLink>
        </div>
        <div className="search-container">
          <SearchBar />
        </div>
        <div className="right-container">
          {sessionLinks}
          <NavLink id="cart-logo" to="/mycart">
            <BsCart4 className="cartIcon" />
          </NavLink>
        </div>
      </div>
      <div className="secondary-navigation"></div>
    </header>
  );
};

export default NavBar;
