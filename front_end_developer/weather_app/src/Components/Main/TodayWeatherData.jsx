import React from 'react';

const TodayWeatherData = ( {contentTitle, contentData, contentUnit,footerData, contentBar}) => {

  const humidityValue = document.querySelector('.humidity_bar::before');
  console.log(humidityValue)

  return (

    <div className= "weatherdata_card flex_">
      
      <p className="weatherdata_title">{contentTitle}</p>
      <p className="weatherdata_content">{contentData} <span className="content_small">{contentUnit}</span></p>
      {footerData && 
        <div className="weatherdata_footer">
          <span className="material-icons compass_icon">near_me</span>
        <small>{footerData}</small>
        </div> }
      {contentBar && 
      <div className="humidity_bar">
        <div className="bar_fill" style ={{width : `${contentData}%`}}></div>
        <small className="rangeItem rangeStart">0</small>
        <small className="rangeItem rangeMiddle">50</small>
        <small className="rangeItem rangeEnd">100</small>
        <small className="rangeItem rangeUnit">%</small>
      </div> }
      
    </div>

  )
}

export default TodayWeatherData;