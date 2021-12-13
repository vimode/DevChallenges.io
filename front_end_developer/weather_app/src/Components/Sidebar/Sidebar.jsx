import React, { useState } from 'react';

import Button from '../Utility/Button'
import SearchOverlay from './SearchOverlay';

import './Sidebar.css';

import Snow from '../../assets/Snow.png';
import Sleet from '../../assets/Sleet.png';
import Hail from '../../assets/Hail.png';
import Thunderstorm from '../../assets/Thunderstorm.png';
import HeavyRain from '../../assets/HeavyRain.png';
import LightRain from '../../assets/LightRain.png';
import Showers from '../../assets/Shower.png';
import HeavyCloud from '../../assets/HeavyCloud.png';
import LightCloud from '../../assets/LightCloud.png';
import Clear from '../../assets/Clear.png';

const Sidebar = ({weatherCondition, weatherTemp,  weatherMetric, weatherDay, weatherDate, weatherLocation, todayWeatherData,sidebarSearchQuery, searchHistory, getmyLocation }) => {


  const [overlayActive, setOverlayActive] = useState(false);

  // pass the appropraite props for the images based on weather status
  let sidebarImg; 
  let imgCondition = weatherCondition.replace(/\s/g, '')
  switch(imgCondition) {
    case "Snow" : 
    sidebarImg = Snow
    break;

    case "Sleet" : 
    sidebarImg = Sleet
    break;

    case "Hail" : 
    sidebarImg = Hail
    break;

    case "Thunderstorm" : 
    sidebarImg = Thunderstorm
    break;

    case "HeaveyRain" : 
    sidebarImg = HeavyRain
    break;

    case "LightRain" : 
    sidebarImg = LightRain
    break;

    case "Showers" : 
    sidebarImg = Showers
    break;

    case "HeavyCloud" : 
    sidebarImg = HeavyCloud
    break;

    case "LightCloud" : 
    sidebarImg = LightCloud
    break;

    case "Clear" : 
    sidebarImg = Clear
    break;
    

    default: 
    sidebarImg = null
  }

  // date formatting
  let formattedDate = new Date(weatherDate);
  var formattingOptions = { weekday: 'short', month: 'short', day: 'numeric' }
  let shortDate = new Intl.DateTimeFormat('en-GB',formattingOptions).format(formattedDate)

// open search overlay
  const openSearchOverlay = () => {
    setOverlayActive(true);
  }

  // close search overlay
  const closeSearchOverlay = () => {
    setOverlayActive(false);
  }

  // carried from searchOverlay to pass the searchQuery to grandparent
  const newSearchQuery = (searchQuery) => {
    sidebarSearchQuery(searchQuery)
    setOverlayActive(false)
  }
  
    
  return ( 

    <section className="sidebar_outer_wrapper">

      {overlayActive && 
        <SearchOverlay 
        handleOverlayClose = {closeSearchOverlay}
        newSearchQuery = {newSearchQuery}
        searchHistory = {searchHistory}
        />
      }
    
    {todayWeatherData && 
      <div className="sidebar_inner_wrapper flex_">
        <header className="sidebar_header flex_">

          <Button 
          buttonText="Search for places"
          buttonType="sidebarButton"
          handleButtonClick= {openSearchOverlay}
          />
          
          <Button
          buttonIcon = "my_location"
          buttonType="locationIconButton"
          iconClass = "locationIcon"
          handleButtonClick= {getmyLocation}
          />
        
        </header>

        <main className="sidebar_main grid_">
          <figure className="sidebar_image_wrapper">
            <img src={sidebarImg}
            alt={weatherCondition} 
            className="sidebar_img"/> 
          </figure> 
          <h1 className="sidebar_title">{weatherTemp} 
          <span className="metric_unit">&#176;{weatherMetric}</span>
          </h1>
          <p className="sidebar_text">{weatherCondition}</p>
          <p className="sidebar_date">{weatherDay} &#183; {shortDate}</p>
          <p className="sidebar_location flex_">
          <span className="material-icons">location_on
          </span>
            {weatherLocation}
          </p>
        </main>
      </div>
    }

    {!todayWeatherData &&
    <div className="loading_icon"></div>
    }
    </section>


  )
}

export default Sidebar;