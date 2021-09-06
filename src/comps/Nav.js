import React from 'react';
import { NavLink } from "react-router-dom";
import logo from '../images/logo.png';


const Nav = () => {

  return (
    <nav className='main-nav'>
      <div className="header">
        <div className="logo">
          <NavLink to='/' exact ><img src={logo} alt='logo' /></NavLink>
        </div>
        <ul>
          <li>
            <NavLink to='/' exact className="home"><span className="sr-only">home</span></NavLink>
          </li>
          <li>
            <NavLink to='/about'className="about"><span className="sr-only">about</span></NavLink>
          </li>
          <li>
            <NavLink to='/favourites'className="favourites"><span className="sr-only">favourites</span></NavLink>
          </li>
          <li>
            <NavLink to='/watchlist'className="watch-list"><span className="sr-only">watch-List</span></NavLink>
          </li>
        </ul>
      </div>
      <div className="footer">
        <p>© 2020 MVDB all rights reserved.<br/>Created by Wynonna Moo & Tiffany Tang</p> 
      </div>
    </nav>
  );
}

export default Nav;
