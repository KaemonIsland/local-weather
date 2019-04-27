import React from 'react';

const toggleDegrees = (WrappedComponent) => {
  return class extends React.Component {
    state = {
      degrees: 'C',
      currentTemp: this.props.currentTemp,
      high: this.props.high,
      low: this.props.low
    }

    convertDegrees = () => {
      const { degrees } = this.state;
      //Adds state temps to Array
      let tempArr = Object.values(this.state).slice(1, 4);
      //Returns array of converted temps
      let converted = tempArr.map(temp => {
        if (degrees === 'C')
          return this.toFahrenheit(temp)
        else
          return this.toCelsius(temp)
      })
      //Sets state of converted temps
      this.setState( () => ({
        degrees: degrees === 'C' ? 'F' : 'C',
        currentTemp: converted[0],
        high: converted[1],
        low: converted[2]
      }))
    }

    toCelsius = temp => ((temp - 32) * (5 / 9)).toFixed(1);

    toFahrenheit = temp => ((temp * (9 / 5)) + 32).toFixed(1);

    render() {
      const { degrees, currentTemp, high, low } = this.state;
      return (
        <WrappedComponent
          {...this.props}
          degrees={degrees}
          currentTemp={currentTemp}
          high={high}
          low={low}
          convertDegrees={this.convertDegrees}
        />
      )
    }
  }
}

export default toggleDegrees;