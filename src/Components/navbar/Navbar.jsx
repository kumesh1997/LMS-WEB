import React from 'react';
import './navbar.css';
import PopupLogin from '../PopupLogin';
import { useState } from 'react';

const Navbar = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
    <div>
      <nav id='navbar'>
        <div className='nav-wrapper'>
          <div className='logo'>LMS Web Application</div>
          <ul id='menu'>
            <li>
              <a href='#courses'>Courses</a>
            </li>
            <li>
              <a href='#marks'>Marks</a>
            </li>
            <li>
              {/* <a href='#login'>Login</a> */}
              <button onClick={() => setButtonPopup(true)}>Login</button>
            </li>
            <li>
              <a href='#signUp'>Sign Up</a>
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
        <PopupLogin trigger={buttonPopup} setTrigger={setButtonPopup}></PopupLogin>
      </center>
    </div>
    </>
  );
};

export default Navbar;
