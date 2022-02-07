
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import './NavBar.css';
import SearchBar from './SearchBar';

const NavBar = () => {
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
          <NavLink to='/login' exact={true}><button id="sign-in">Sign in</button></NavLink>
          <NavLink id="cart-logo" to='/cart'>Cart</NavLink>
        </div>
      </div>
      <div className="secondary-navigation"></div>
    </header>
  )
}

// const NavBar = () => {
//   return (
//     <header className="navigation-header">
//       <div className="qwerty-logo-container">
//       <NavLink id="logo-font" exact to="/">Qwerty</NavLink>
//       </div>
//       <div className="global-search"></div>
//     </header>
//   )
// }

// const NavBar = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <NavLink to='/' exact={true} activeClassName='active'>
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to='/login' exact={true} activeClassName='active'>
//             Login
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to='/sign-up' exact={true} activeClassName='active'>
//             Sign Up
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to='/users' exact={true} activeClassName='active'>
//             Users
//           </NavLink>
//         </li>
//         <li>
//           <LogoutButton />
//         </li>
//       </ul>
//     </nav>
//   );
// }

export default NavBar;
