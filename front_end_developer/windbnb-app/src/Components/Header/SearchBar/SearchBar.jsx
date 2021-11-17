import React, { useState } from 'react';
import "./SearchBar.css"

import SearchSuggestion from './SearchSuggestion'
import GuestCounter from './GuestCounter'

function SearchBar ({overlay, location, buttonClick, handleClick }) {

  const [ suggestion, setSuggestion ] = useState(false);
  const [ guestState, setGuestState ] = useState(false);
  const [ adultCount, setAdultCount] = useState(0);
  const [ childrenCount, setChildrenCount ] = useState(0);

  function locationClickHandler () {
    setSuggestion(true);
    setGuestState(false);
  }

  function guestClickHandler() {
    setGuestState(true);
    setSuggestion(false);
  }

  function sendQuery(event) {
    handleClick(event.target.textContent);
  }

  
  return (

    <div className={`searchBar_wrapper ${overlay ? "overlay_width": ""}`}>
      <div className = {`searchtext_wrapper ${suggestion && overlay ? 'overlay_border' : ""}`}
      onClick= {locationClickHandler}>
        <div className="search_text">
          {overlay && <label htmlFor="location">Location</label>}
          <p>{location}</p>
        </div>

        <div className={`search_overlay ${suggestion && overlay && 'active'}`}>
          <ul>
            <SearchSuggestion query="Helsinki, Finland" sendQuery = {sendQuery} />
            <SearchSuggestion query="Turku, Finland" sendQuery = {sendQuery} />
            <SearchSuggestion query="Vaasa, Finland" sendQuery = {sendQuery} />
            <SearchSuggestion query="Oulu, Finland" sendQuery = {sendQuery} />
          </ul>
        </div>

    </div>

    <div className={`searchtext_wrapper ${guestState && overlay ? "overlay_border" : ""} ${!overlay ? "pos" : ""}`}
    onClick = {guestClickHandler}>
      <div className="search_text">
        {overlay && (
        <div className="guest_text">
          <label htmlFor = "guests">Guests</label>
          <p>{adultCount + childrenCount} guests</p>
        </div>
          )}
      </div>

      <div className={`search_overlay ${guestState && overlay && 'active'}`}>
          <GuestCounter 
            title="Adults"
            subtitle= "Ages 13 or above"
            guests = {adultCount}
            setGuests={setAdultCount}
          />

          <GuestCounter 
            title = "Children"
            subtitle = "Ages 2 - 12"
            guests = {childrenCount}
            setGuests = {setChildrenCount}
          />
      </div>
    </div>

    <button
      onClick = {overlay? () => buttonClick() : null}
      className = {`btn ${overlay? "overlay_button" : "search_button"}`}
    >
      <span className = "material-icons">search</span>
      {overlay && "Search"}
    </button>
    </div>
    

  )

}

export default SearchBar;