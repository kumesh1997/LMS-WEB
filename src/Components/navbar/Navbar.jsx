import React from 'react';
import './navbar.css';
import PopupLogin from '../PopupLogin';
import PopupSigup from '../PopupSigup';
import { useState } from 'react';

const Navbar = () => {
  const [buttonPopupL, setButtonPopupL] = useState(false);
  const [buttonPopupS, setButtonPopupS] = useState(false);
  return (
    <>
      <div>
        <nav id='navbar'>
          <div className='nav-wrapper'>
            <div className='logo'>LMS Web Application</div>
            <ul id='menu'>
              <li>
                <button><a href="#courses">Courses</a></button>
              </li>
              <li>
                <button><a href="#marks">Marks</a></button>
              </li>
              <li>
                <button onClick={() => setButtonPopupS(true)}><a href="#login">Login</a></button>
              </li>
              <li>
                <button onClick={() => setButtonPopupL(true)}><a href="#signUp">Sign Up</a></button>
              </li>
            </ul>
          </div>
        </nav>
        <div className='menuIcon'>
          <span className='icon icon-bars'></span>
          <span className='icon icon-bars overlay'></span>
        </div>
        <div className='overlay-menu'>
          <ul id='menu'>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#services'>Services</a>
            </li>
            <li>
              {/* <a href='#login'>Login</a> */}
              <button onClick={() => setButtonPopupL(true)}>Login</button>
            </li>
            <li>
              {/* <a href='#signUp'>Sign Up</a> */}
              <button onClick={() => setButtonPopupS(true)}>Sign Up</button>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <center>
          <PopupLogin trigger={buttonPopupS} setTrigger={setButtonPopupL}></PopupLogin>
          <PopupSigup trigger={buttonPopupL} setTrigger={setButtonPopupS}></PopupSigup>
        </center>
      </div>
    </>
  );
};

export default Navbar;
