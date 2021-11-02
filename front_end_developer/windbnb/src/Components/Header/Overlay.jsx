import React from 'react';

import './Header.css'

import SearchOverlay from './SearchOverlay';

const Overlay = (onClick) => {
  
  return(
    <div className="overlay" onClick={onClick}>
      <SearchOverlay />
    </div>

  )
}

export default Overlay;