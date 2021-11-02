import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css'

import './Components/Main/Main.css'
import './Components/Header/Header.css'

// import Header from './Components/Header/Header';
// import Main from './Components/Main/Main';
// import Footer from './Components/Footer/Footer'

import brandLogo from './assets/logo.svg'

import stays from './assets/stays.json'


const Header = ({}) => {
  
  return (

    <nav>
      {/* <Overlay /> */}
      <figure>
        <img src={brandLogo} alt="logo" className="brand_logo" />
      </figure>
      <SearchBar />
    </nav>
  )
}

const  SearchBar = ( handleSearch ) => {

  // const [hiddenList, setHiddenList] = useState(false);

  // function toggle() {
  //   setHiddenList(opened => !opened);
  // }

  return (
    <div className="SearchBox" id="search_box">
      <span className="search_loc" >
        <input type="text" 
          className=""
          placeholder="Helsinki, Finland"
          onClick={handleSearch}
          />
      </span>

      <span className="search_guest" >
        <input type="text" 
          className=""
          placeholder="Add guests"
          onClick={handleSearch}
          />
      </span>

      <span className="search_icon_input" onClick={handleSearch}>
      <input type="text" 
          className=""
          onClick={handleSearch}
          />
      <span class="material-icons icon_search">search</span>
      </span>
    </div>
  )
}

const Overlay = () => {
  
  return(
    <div className="overlay" onClick="">
      <SearchOverlay />
    </div>

  )
}

const SearchOverlay = ( {overlayClass, city, country, counter} ) => {

  const [showList, setShowList] = useState(false);

  const locationLists = new Map();
  stays.forEach(item => {
    if(!locationLists.has(item.city)) {
      locationLists.set(item.city, item.country)
    } 
  })

  let locals = Array.from(locationLists);
 

  return (
    <div className={overlayClass}>
    <div className="overlaySearch_wrapper">
      <div className="overlayInput_wrapper">
      
      <div className="searchInput_wrapper">
      <span className="oSearch_loc" >
        <input 
          type="text" 
          className=""
          id="oSearchLoc"
          value={`${city}, ${country}`}
          />
          <label for="oSearchLoc">Location</label>
      </span>

      <span className="oSearch_guest" >
        <input 
          type="text" 
          className=""
          id="oSearchGuest"
          placeholder={counter !==0 ? counter: ""}
          />
          <label for="oSearchGuest">Add guest</label>
      </span>

      </div>    

      <div className="options_list">
      {!showList && (
        <div className="locals_list">
          {locals.map(item => {
            console.log(item)
            return (
              <p className="locals_item">
                <span class="material-icons icon_location">location_on</span>
                 {item[0]}, {item[1]}
              </p>
              )
            })}
        </div>
      )}

      {showList && (

        <div className="guests_list">
          <GuestOptions 
            type={'Adults'}
            helperText= {'Ages 13 or Above'}
            showCounter={!showList}
            // count={count}
            // counter={counter}
            // adultCount={adultCount}
            // childCount={childCount}
            // city={city}
          />
          <GuestOptions 
            type={'Children'}
            helperText= {'Ages 2 - 12'}
            showCounter={!showList}
            // count={count}
            // counter={counter}
            // adultCount={adultCount}
            // childCount={childCount}
            // city={city}
          />
        </div>
      )}

      
      </div>



      </div>

      <div className="buttonWrapper">
        <button class="overlaySearchbtn">
        <span class="material-icons button_icon_search">search</span> Search
        </button>
      </div>
      

    </div>
  </div>
  )
}

const GuestOptions = ({type, helperText, showCounter, count, counter, adultCount, childCount, city, sign}) => {
  return (
    <>
    <div className="guest_layout">
    <p className="guest_counter_title">{type}</p>
    <p className="guest_helper_text">{helperText}</p>
    <div className="guest_counter_btn">
      <button
      className="btn_count"
      onClick={()=>{
        count(sign, type)
      }}
      >+</button>
        {/* <p>{type==='Adults'? adultCount:childCount}</p> */}
        <p>0</p>
    
      <button
      className="btn_count"
      onClick={()=>{
        count(sign, type)
      }}
      >-</button>

    </div>

    </div>
    </>

  )
}

const Main = ({countryName, stayCounts}) => {
  return (
    <div className="inner_wrapper">
      <div className="">
      <h2>{` Stays in ${countryName}`}</h2>
      <p>{` ${stayCounts}+ stays`}</p>
      </div>
      <ListingItem />
    </div>
  )
}

const ListingItem = () => {

  return (
    <ul className="listing_wrapper">
      {stays.map((place,index)=> {
        return (
          <li className="listing_item">
            <img 
            src={place.photo}
            class="place_img"
            />
            <div className="listing_details">
              { place.superHost ? (
                <div className="details_rest">
                  <span className="place_superhost">Super Host</span> 
                  <span className="details_type">{ place.type }. { place.beds } beds</span>
                  <span className="details_ratings"><span class="material-icons icon_star">star_rate</span>{ place.rating }</span>
                </div>
                ) : (
                  <div className="details_rest">
                    <span className="details_type">{ place.type }</span>
                    <span className="details_ratings"><span class="material-icons icon_star">star_rate</span>{ place.rating }</span>
                  </div>
                ) }
                <div className="details_title">
                  {place.title}
                </div>
            </div>
          </li>
        )
      }) }

    </ul>
  )
}



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