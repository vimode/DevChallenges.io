import React, { useState, useEffect } from 'react';

import Main from './Components/Main/Main';
import Sidebar from './Components/Sidebar/Sidebar';

import './App.css';

function App() {

  const [userGeoLocation, setUserGeoLocation] = useState(JSON.parse(localStorage.getItem("myLocation")) || {});
  // const [appLocation, setAppLocation] = useState({
  //   name: "London",
  //   woeid: '44418'
  // });
  const [appLocation, setAppLocation] = useState();
  const [citySearchQuery, SetCitySearchQuery] = useState();
  const [weatherData, setWeatherData] = useState();
  const [icon, setIcon] = useState();
  const [isCelcius, setIsCelcius] = useState("C");
  const [searchHistory, setSearchHistory] = useState([]);


  // update favicon based on weather condition of app's  location data
  useEffect(() => {
    const weatherFavicon = document.getElementById('favicon');
    icon ? weatherFavicon.href = `https://www.metaweather.com/static/img/weather/ico/${icon}.ico` : weatherFavicon.href = "./favicon.ico"
  }, [icon]);

  // getWeather function generates the weather forecast with the WOEID argument
  let getWeather = async function (woeid) {
    const url = `https://www.metaweather.com/api/location/${woeid}/`
    const proxyurlOne = `https://cors-anywhere.herokuapp.com/`;
    const proxyurlTwo = `https://secret-ocean-49799.herokuapp.com/`;

    try {
      const response = await fetch(proxyurlTwo + url);
      const fetchedData = await response.json();
      setIcon(fetchedData.consolidated_weather[0].weather_state_abbr);
      setWeatherData(fetchedData)

      let addSearchItem = [...searchHistory, fetchedData.title]
      let uniqueItems = addSearchItem.filter((item, index) => addSearchItem.indexOf(item) === index);
      setSearchHistory(uniqueItems)
    }
    catch (error) {
      console.log(error);
    }
  }

  // getLocation function takes geoLocation() API's lat/long to find the WOEID for getWeather(WOEID)
  let getLocation = async function (firstArg, secondArg) {


    const proxyurlOne = `https://cors-anywhere.herokuapp.com/`;
    const proxyurlTwo = `https://secret-ocean-49799.herokuapp.com/`;

    let fetchLocationData = async function (url) {
      try {
        const response = await fetch(proxyurlTwo + url);
        const fetchedData = await response.json();
        const cities = fetchedData.filter((item) => item.location_type === "City").map((city) => ({
          name: city.title,
          woeid: city.woeid
        }))
        setAppLocation(cities[0])
        getWeather(cities[0].woeid)
      }
      catch (error) {
        console.log(error)
      }
    }

    if (typeof firstArg === "number") {
      let url = `https://www.metaweather.com/api/location/search/?lattlong=${firstArg},${secondArg}`
      fetchLocationData(url)
    } else {
      let url = `https://www.metaweather.com/api/location/search/?query=${firstArg}`
      fetchLocationData(url)
    }
  }

  // seek user permission for location data
  // user permission success! + store in localstorage(buggy)
  const userPermittedLocation = function (position) {
    const latt = position.coords.latitude;
    const long = position.coords.longitude;
    setUserGeoLocation({
      latitude: latt,
      longitude: long
    })
    getLocation(latt, long)
    localStorage.setItem("myLocation", JSON.stringify(userGeoLocation));
  }

  // user permission denied... set location to London
  const userDeniedLocation = function (error) {
    const errorCode = error.code;
    const errorMsg = error.message;

    setAppLocation({
      name: "London",
      woeid: '44418'
    })
    getWeather(44418)
  }


  //run geoLocation() API on first run
  useEffect(() => {
    if (!userGeoLocation.latitude) {
      navigator.geolocation.getCurrentPosition(userPermittedLocation, userDeniedLocation)
    } else {
      getLocation(userGeoLocation.latitude, userGeoLocation.longitude);
    }
  }, []);

  //update on search Query
  useEffect(() => {
    getLocation(citySearchQuery, null)
  }, [citySearchQuery])


  // update search query
  const newSearchQuery = (searchQuery) => {
    SetCitySearchQuery(searchQuery);
  }

  // sidebar location button
  const getmyLocation = () => {
    navigator.geolocation.getCurrentPosition(userPermittedLocation, userDeniedLocation)
  }



  return (
    <div className="App grid_">
      {weatherData &&
        <>
          <Sidebar
            todayWeatherData={weatherData}
            weatherCondition={weatherData.consolidated_weather[0].weather_state_name}
            weatherTemp={Math.round(weatherData.consolidated_weather[0].the_temp)}
            weatherDate={weatherData.consolidated_weather[0].applicable_date}
            weatherDay='Today'
            weatherLocation={weatherData.title}
            weatherMetric={isCelcius}
            sidebarSearchQuery={newSearchQuery}
            searchHistory={searchHistory}
            getmyLocation={getmyLocation}
          />

          <Main
            weatherForecastData={weatherData}
            weatherMetric={isCelcius}
          />
        </>
      }
      {!weatherData && <div className="loading_icon app_loading"></div>}
    </div >
  );
}

export default App;