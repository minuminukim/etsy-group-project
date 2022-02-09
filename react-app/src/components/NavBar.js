
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import './NavBar.css';
import SearchBar from './SearchBar';
import { BsCart4 } from "react-icons/bs"


const NavBar = () => {
  return (
    <header className="navigation-header">
      <div className="global-navigation">
        <div className="left-container">
          <NavLink id="logo-font" exact to="/">Qwerty</NavLink>
        </div>
        <div className="search-container">
          <SearchBar />
        </div>
        <div className="right-container">
          <NavLink to='/login' id="signIn" exact={true}><button id="sign-in">Sign in</button></NavLink>
          <NavLink id="cart-logo" to='/cart'><BsCart4 className='cartIcon' /></NavLink>
        </div>
      </div>
      <div className="secondary-navigation"></div>
    </header>
  )
}

export default NavBar;
