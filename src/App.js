import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherContainer from './WeatherContainer';
import { DefaultStyle } from './styledComponents';

let App = () => {
  let [weather, setWeather] = useState({});

  useEffect(() => {
    async function setup() {
      await window.navigator.geolocation.getCurrentPosition(location => {
        const { latitude, longitude } = location.coords;
        getWeather(latitude, longitude);
      });
    }
    setup();
  }, []);

  const getWeather = (latitude, longitude) => {
    axios(
      `https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`
    ).then(res => {
      console.log(res.data);
      const { main, name, wind, weather } = res.data;
      setWeather({
        currentTemp: main.temp.toFixed(1),
        high: main.temp_max.toFixed(1),
        low: main.temp_min.toFixed(1),
        name,
        wind,
        weather
      });
    });
  };


  return (
    <DefaultStyle>
      {
        !weather.currentTemp ?
          <h1>Loading...</h1> :
          weather.name !== 'Shuzenji' ?
            <WeatherContainer {...weather} /> :
            <h1>Something went wrong</h1>
      }
      <p>Made by Kaemon Lovendahl</p>
    </DefaultStyle>
  );
};

export default App;
