import React from "react";

import './Header.css';

const Header = ( { quoteGenerator }) => {

  
  return (
    <div 
      className="app_header_wrapper" 
      onClick = {quoteGenerator}
      >
    <div className="random-button">
      <span>random</span>
      <span className="material-icons renew">autorenew</span>
    </div>
  </div>
  )
}

export default Header;