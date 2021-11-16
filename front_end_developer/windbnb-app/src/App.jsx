import React, { useState } from 'react';

import './App.css';


import Overlay from './Components/Header/SearchBar/Overlay';
import Header from './Components/Header/Header';
import SearchBar from './Components/Header/SearchBar/SearchBar';
import CardList from './Components/Main/CardList';

function App () {
  
  const [ overlayActive, setOverlayActive ] = useState(false);
  const [ location, setLocation ] = useState("Helsinki, Finland");
  const [ searchClick, setSearchClick ] = useState(false)


  const handleButtonClick = () => {
    setSearchClick(true);
    setOverlayActive(false);
  }

  const handleClick = (option) => {
    setLocation(option)
  }

  const handleSearchClick = () => {
    setOverlayActive(true);
    setSearchClick(false);
  }

  return (
  <div className ="app">
  
    {overlayActive && (
      <Overlay 
        overlay = {overlayActive}
        onClick = {setOverlayActive}
        handleClick = {handleClick}
        location = {location}
        buttonClick = {handleButtonClick}
      />
    )}

    <div className="outer_wrapper">
      <div className="header_wrapper">
        <Header />
        <div onClick={handleSearchClick}>
          <SearchBar 
            location = {location}
          />
        </div>
      </div>

      <main>
        <div className="main_title">
          <h1>Stays in {location}</h1>
          <p>12+ stays</p>
        </div>
        <CardList
          searchClick={searchClick}
          location={location}
         />
      </main>
    </div>

  </div>
  );
}

export default App;