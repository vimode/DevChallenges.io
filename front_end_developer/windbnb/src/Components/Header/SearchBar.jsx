import React, { useState } from 'react';
import './Header.css'

const  SearchBar = ( onClick ) => {

  const [hiddenList, setHiddenList] = useState(false); 

  function handleClick() {
    setHiddenList(opened => !opened);
    console.log(hiddenList)
  }  

  return (
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
  )
}

export default SearchBar;