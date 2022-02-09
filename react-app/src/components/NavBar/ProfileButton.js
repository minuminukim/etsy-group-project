import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useHistory, NavLink } from 'react-router-dom';
import LogoutButton from "../auth/LogoutButton";
import { HiUser } from 'react-icons/hi';
import { MdOutlineSell } from 'react-icons/md'
import { RiLogoutBoxLine } from 'react-icons/ri'
import { AiFillCaretDown } from 'react-icons/ai'

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
      <button id="logged-in-menu" onClick={openMenu}><HiUser /><AiFillCaretDown /></button>
      {showMenu && (
        <ul className="profile-dropdown">
          <NavLink to={`/users/${user.id}`}>
              <div>
              <img src={user.profile_pic_url}/>
              </div>
              <div>
                <p>{user.username}</p>
                <p>View your profile</p>
              </div>
          </NavLink>
          <div>
              <div>
                <MdOutlineSell />
              </div>
              <div>
                <p>List an item</p>
              </div>
          </div>
          <div>
              <div>
                <RiLogoutBoxLine />
              </div>
              <div>
                <button id="profile-logout-button" onClick={logout}>Sign out</button>
              </div>
          </div>
        </ul>
      )}
      </div>
    </>
  );
}

export default ProfileButton;