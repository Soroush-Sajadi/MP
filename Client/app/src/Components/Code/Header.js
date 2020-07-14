import React from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../../Logo/Logo.png'
import '../Style/Header.css';

function Header() {
  return (
    
      <div className="header-wrapper">
        <div className="header-logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="header">
          <ul>
            <NavLink to="/" style={{ textDecoration: 'none'}}>
              <li>
                <p>Home</p>
              </li>
            </NavLink>
            <NavLink to="/my work" style={{ textDecoration: 'none' }}>
              <li>
                <p>My Work</p>
                
              </li>
            </NavLink>
            <NavLink to="/about me" style={{ textDecoration: 'none' }}>
              <li >
                <p>About Me</p>
              </li>
              </NavLink>
            <NavLink to="/contacts" style={{ textDecoration: 'none' }}>
              <li>
                <p>Contacts</p>
              </li>
            </NavLink>
          </ul>
          </nav>
        </div>
  );
}

export default Header;