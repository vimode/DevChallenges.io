import React, { useState }from 'React'

import './Header.css'
import stays from '../../assets/stays.json'

import GuestOptions from './GuestOptions'

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
      {showList && (
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

      {!showList && (

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

  export default SearchOverlay;