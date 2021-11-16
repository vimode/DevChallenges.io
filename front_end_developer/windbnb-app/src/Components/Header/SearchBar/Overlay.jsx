import React from "react";
import SearchBar from './SearchBar';
import "./SearchBar.css"


function Overlay ( {onClick , location , handleClick , overlay , buttonClick}) { 
  return (
    <div>
      <div className="overlaybg"
      onClick ={() => {onClick(false)}} />
      <div className="overlay">
        <button
        className="btn close"
        onClick = {() => {onClick(false)}}> X </button>

        <SearchBar
          location = {location}
          handleClick = {handleClick}
          overlay = {overlay}
          buttonClick={buttonClick}
        />
      </div>


    </div>
  )
}

export default Overlay;