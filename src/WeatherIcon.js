import React from 'react';
import { Icon, Weather } from './styledComponents';

const WeatherIcon = ({ weather }) => {
  
  let determineIcon = () => {
    let icon;
    switch (weather[0].main.toLowerCase()) {
      case 'drizzle':
        icon = 'cloud-sun-rain';
        break;
      case 'clouds':
        icon = 'cloud';
        break;
      case 'rain':
        icon = 'cloud-showers-heavy';
        break;
      case 'snow':
        icon = 'snowflake';
        break;
      case 'clear':
        icon = 'sun';
        break;
      case 'thunderstom':
        icon = 'bolt';
        break;
      default:
        icon = 'bug';
        break;
    }

    return icon;
  }

  return (
    <>
      <Icon className={`fas fa-${determineIcon()}`}></Icon>
      <Weather>{weather[0].description}</Weather>
    </>
  )
}

export default WeatherIcon;