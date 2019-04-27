import React from 'react';
import toggleDegrees from './toggleDegrees';
import DateTime from './DateTime';
import WeatherIcon from './WeatherIcon';
import { Container, Title, TempMain, Button, TempHi, TempLo } from './styledComponents';



const WeatherContainer = ({
    currentTemp,
    high,
    low,
    name,
    weather,
    degrees,
    convertDegrees
}) => {
  return (
    <Container>
      <Title>Today in {name}</Title>
      <div>
        {
          weather ? (
            <WeatherIcon weather={weather} />
          ) :
            null
        }
      </div>
      <TempMain>{currentTemp} {'\u00b0'}{degrees}</TempMain>
      <DateTime />
      <TempHi>Hi - {high} {'\u00b0'}{degrees}</TempHi>
      <TempLo>Lo - {low} {'\u00b0'}{degrees}</TempLo>
      <Button onClick={convertDegrees}>
        Convert to { degrees === 'C' ? "Fahrenheit" : "Celsius"}
      </Button>
    </Container>
  )
}

export default toggleDegrees(WeatherContainer);