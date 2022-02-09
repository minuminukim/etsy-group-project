import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useHistory, NavLink } from 'react-router-dom';
import LogoutButton from "../auth/LogoutButton";

function ProfileButton({ user }) {

  const history = useHistory();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/")
  };

  return (
    <>
     <div className="logged-in-nav">
      <button id="logged-in-menu" onClick={openMenu}>
        {/* <i className="fas fa-camera-retro" /> */}
        <img className="heart-logo small" src="https://res.cloudinary.com/ddxtopm0l/image/upload/v1642106208/Flimmr/norway-heart-icon_ihdvtj.png" alt="norway-heart"/>
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <p>Hei! Now you know how to </p>
          <p>greet people in Norwegian.</p>
          <li>{user.name}</li>
          <li>{user.email}</li>
          <li>
            <button id="profile-logout-button" onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
      </div>
    </>
  );
}

export default ProfileButton;