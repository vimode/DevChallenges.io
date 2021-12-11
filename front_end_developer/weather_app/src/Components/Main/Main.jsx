import React , { useState } from 'react';

import Button from '../Utility/Button';
import Forecast from './Forecast';
import TodayWeatherData from './TodayWeatherData';
import Footer from './Footer';

import './Main.css';

const Main = ( {weatherForecastData, weatherMetric}) => {

// todo - onclick of future data forecast, update todayweather data and update h1 accordingly.  
  const [weatherDay, setWeatherDay] = useState("Today's");

  return (
    <main className="main_app flex_">
      {/* Buttons for temp converstion -- incomplete */}
      <section className="metric_button_wrapper flex_">
        <Button 
          buttonType="metricBtn metric_selected"
          buttonText="&#176;C"
        />
        <Button 
          buttonType="metricBtn"
          buttonText="&#176;F"
        />
      </section>
      
      {/* Forecast Component displays the future forecasts  */}

      <section className="forecastWrapper flex_">
        {weatherForecastData ? 
          (weatherForecastData.consolidated_weather.slice(1).map((day, index) => 
          <Forecast 
            key = {day.id}
            forecastDataId = {day.id}
            forecastData = {day}
            weatherCondition = {day.weather_state_name}
            forecastCondition= {day.weather_state_name}
            forecastHigh = {Math.round(day.max_temp)}
            forecastLow = {Math.round(day.min_temp)}
            forecastDate = {day.applicable_date}
            forecastIndex = {index}
            weatherMetric={weatherMetric}
            />
            )) : 
            <div className="loading_icon"></div>
          } 
         </section>

        {/* TodayWeatherData component displays the Today's Highlights */}

      <section className="weatherDataToday flex_">
        <h1 className="weatherDataToday_title">{weatherDay} Highlights</h1>
        <div className="weatherDataToday_wrapper grid_">
          { weatherForecastData && 
          <>
          <TodayWeatherData 
            contentTitle = 'Wind Status'
            contentData = {Math.floor(weatherForecastData.consolidated_weather[0].wind_speed)}
            contentUnit = 'mph'
            footerData = {weatherForecastData.consolidated_weather[0].wind_direction_compass}
          />

          <TodayWeatherData 
            contentTitle = 'Humidity'
            contentData = {Math.floor(weatherForecastData.consolidated_weather[0].humidity)}
            contentUnit = '%'
            contentBar = {Math.floor(weatherForecastData.consolidated_weather[0].humidity)}
          />

          <TodayWeatherData 
            contentTitle = 'Visibility'
            contentData = {Math.floor(weatherForecastData.consolidated_weather[0].visibility)}
            contentUnit = 'miles'
          />

          <TodayWeatherData 
            contentTitle = 'Air Pressure'
            contentData = {Math.floor(weatherForecastData.consolidated_weather[0].air_pressure)}
            contentUnit = 'mb'
          />
          </> } 
          {!weatherForecastData && <div className="loading_icon"></div>}
          
        </div>

      </section>
      <Footer />
    </main>

  )
}

export default Main;