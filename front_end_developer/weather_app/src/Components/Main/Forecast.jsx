import React from 'react';

import Snow from '../../assets/Snow.png'
import Sleet from '../../assets/Sleet.png'
import Hail from '../../assets/Hail.png'
import Thunderstorm from '../../assets/Thunderstorm.png'
import HeavyRain from '../../assets/HeavyRain.png'
import LightRain from '../../assets/LightRain.png'
import Showers from '../../assets/Shower.png'
import HeavyCloud from '../../assets/HeavyCloud.png'
import LightCloud from '../../assets/LightCloud.png'
import Clear from '../../assets/Clear.png'

const Forecast = ( { weatherForecastData, weatherCondition, forecastDataId, forecastCondition, forecastHigh, forecastLow,  forecastIndex, forecastDate,weatherMetric}) => {

  let forecastTitle;

  // date formatting
  let formattedDate = new Date(forecastDate);
  var formattingOptions = { weekday: 'short', month: 'short', day: 'numeric' }
  let shortDate = new Intl.DateTimeFormat('en-GB',formattingOptions).format(formattedDate)

  // index 0 = Tomorrow, otherwise shortDate
  if(forecastIndex === 0) {
    forecastTitle = "Tomorrow"
  } else {
    forecastTitle = shortDate
  }

  //pass the approriaate props for the images based on weather state
  let forecastImg;
  let conditionType = weatherCondition.replace(/\s/g, '')

  switch(conditionType) {
    case "Snow" : 
    forecastImg = Snow
    forecastCondition = conditionType;
    break;

    case "Sleet" : 
    forecastImg = Sleet
    forecastCondition = conditionType;
    break;

    case "Hail" : 
    forecastImg = Hail
    forecastCondition = conditionType;
    break;

    case "Thunderstorm" : 
    forecastImg = Thunderstorm
    forecastCondition = conditionType;
    break;

    case "HeavyRain" : 
    forecastImg = HeavyRain
    forecastCondition = conditionType;
    break;

    case "LightRain" : 
    forecastImg = LightRain
    forecastCondition = conditionType;
    break;

    case "Showers" : 
    forecastImg = Showers
    forecastCondition = conditionType;
    break;

    case "HeavyCloud" : 
    forecastImg = HeavyCloud
    forecastCondition = conditionType;
    break;

    case "LightCloud" : 
    forecastImg = LightCloud
    forecastCondition = conditionType;
    break;

    case "Clear" : 
    forecastImg = Clear
    forecastCondition = conditionType;
    break;
    

    default: 
    forecastImg = null
    forecastCondition = "Loading"
  }

  

  return (
    <div className="forecast_card grid_" key={forecastDataId}>
      <p className="forecast_title">{forecastTitle}</p>
      <img  src= {forecastImg} className="forecast_img" alt={forecastCondition}></img>
      <small className="forecast_high">{forecastHigh}<span className="metric_unit">&#176;{weatherMetric}</span></small>
      <small className="forecast_low">{forecastLow}<span className="metric_unit">&#176;{weatherMetric}</span></small>
    </div>
  )
}

export default Forecast;