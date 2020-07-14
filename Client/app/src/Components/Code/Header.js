import React, {useState} from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../../Logo/Logo.png'
import flagBritish from '../../Flag/uk.svg'
import flagSwedish from '../../Flag/sweden.svg'
import '../Style/Header.css';

function Header() {
  const [ language, setLanguage ] = useState('');
  const getLanguage = (e) => {
    setLanguage(e.target.getAttribute('value'));
  }
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
          <div className="header-flag">
            <img src={language === 'Svenska' ? flagSwedish: flagBritish} alt="Language" />
            <div className="languages">
              <p value ="English" onClick={getLanguage}>English</p>
              <p value="Svenska" onClick={getLanguage}>Svenska</p>
            </div>
          </div>
        </div>
  );
}

export default Header;