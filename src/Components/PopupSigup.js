import React from 'react'
import Signup from './Signup';
import './Popup.css';

function PopupSigup(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className='pad'>
        <div className='popup-inner'>
          <button className='close-btn' onClick={() => props.setTrigger(false)} >X</button>
          <Signup></Signup>
          {props.children}
        </div>
      </div>
    </div >
  ) : "";
}

export default PopupSigup