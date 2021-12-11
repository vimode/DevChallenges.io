import React, { useState } from 'react';
import Button from '../Utility/Button';

import './Sidebar.css'

const SearchOverlay = ({handleOverlayClose,newSearchQuery, searchHistory}) => {

const [searchQuery, setSearchQuery] = useState('');

// pass the search query to parent
const searchLocation = (e) => {
  newSearchQuery(searchQuery)
}

  return (
    <main className="overlay_outer_wrapper flex_">
        <Button
          buttonIcon = "close"
          buttonType="closeBtn"
          handleButtonClick = {handleOverlayClose}
          iconClass = "closeIcon"
          />


      <form action="/" method="get" className="searchForm flex_">
        <div className="searchInput_wrapper flex_">
          <input 
          type="text" 
          onInput = {e => setSearchQuery(e.target.value)}
          value = {searchQuery}
          name="search" 
          id="location_search" 
          placeholder="search location"
          aria-label="search location"
          className="searchInput"
          />
          <span class="material-icons searchInputIcon">search</span>
        </div>
        
        <Button
          buttonType="searchButton"
          handleButtonClick= {(e) => searchLocation(e)}
          buttonText = "Search"
        />
      </form>

      <ul className="searchQueryList">
      {searchHistory &&
            searchHistory.map((item, index) => 
                <li key ={index} className="search_item">
                  <Button
                    buttonType="searchTerm"
                    buttonText = {item}
                  />
                </li>
            )
          }
      </ul>

    </main>

  )
}

export default SearchOverlay;