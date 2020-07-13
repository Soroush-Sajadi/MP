import React from 'react';
import { NavLink } from 'react-router-dom'
import '../Style/Header.css';

function Header() {
  return (
    
      <nav className="header">
        <ul>
          <NavLink to="/" style={{ textDecoration: 'none' }}>
            <li>
              Home
            </li>  
          </NavLink>
          <NavLink to="/my work" style={{ textDecoration: 'none' }}>
            <li>
              My Work
            </li>
          </NavLink>
          <NavLink to="/about me" style={{ textDecoration: 'none' }}>
            <li >
              About Me
            </li>
            </NavLink>
          <NavLink to="/contacts" style={{ textDecoration: 'none' }}>
            <li >
              Contacts
            </li>
          </NavLink>
          </ul>
        </nav>
  );
}

export default Header;