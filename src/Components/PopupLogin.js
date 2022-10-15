import React from 'react'
import Login from './Login';

function PopupLogin(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
        <button className='close-btn' onClick={() => props.setTrigger(false)} >x</button>
        <Login></Login>
        {props.children}
      </div>
    </div >
  ) : "";
}

export default PopupLogin