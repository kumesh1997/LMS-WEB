import React from 'react'
import Signup from './Signup';

function PopupSigup(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
        <button className='close-btn' onClick={() => props.setTrigger(false)} >x</button>
        <Signup></Signup>
        {props.children}
      </div>
    </div >
  ) : "";
}

export default PopupSigup