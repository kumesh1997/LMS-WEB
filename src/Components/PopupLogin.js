import React from 'react'
import Login from './Login';

function PopupLogin(props) {
  return (props.trigger) ? (
    <div>
      <button className='close-btn' onClick={() => props.setTrigger(false)} >x</button>
      <Login></Login>
      {props.children}
    </div >
  ) : "";
}

export default PopupLogin