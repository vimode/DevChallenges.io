import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'

import './Header.css'

import SearchBar from './SearchBar';
import Overlay from './Overlay';

import brandLogo from '../../assets/logo.svg'


const Header = () => {

  const [ hiddenList, setHiddenList] = useState(false); 
  const [ overlayStatus, setOverlayStatus ]  = useState(false);

  function handleClick() {
    setHiddenList(opened => !opened);
    console.log(hiddenList)
  }
  

  return (
    <nav>
      {hiddenList && <Overlay/>}
      <figure>
        <img src={brandLogo} alt="logo" className="brand_logo" />
      </figure>
      <div className="SearchBox" id="search_box" onClick={handleClick}>
      <span className="search_loc" >
        <input type="text" 
          className=""
          placeholder="Helsinki, Finland"
          />
      </span>

      <span className="search_guest" >
        <input type="text" 
          className=""
          placeholder="Add guests"
          />
      </span>

      <span className="search_icon_input">
      <input type="text" 
          className=""
          />
      <span class="material-icons icon_search">search</span>
      </span>
    </div>
    </nav>
  )
}

export default Header;