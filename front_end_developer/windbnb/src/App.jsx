import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css'

import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
// import Footer from './Components/Footer/Footer'


function App() {
  return (
    <>
      <Header />
      <Main 
        countryName="stateFinland"
        stayCounts="state12"
      />  
      {/* <Footer /> */}
    </>
  )
}

export default App;