import React from 'react'
import Login from './Login';
import './Popup.css';

function PopupLogin(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className='pad'>
        <div className='popup-inner'>
          <button className='close-btn' onClick={() => props.setTrigger(false)} >X</button>
          <Login></Login>
          {props.children}
        </div>
      </div>
    </div >
  ) : "";
}

export default PopupLogin