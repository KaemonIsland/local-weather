import React, { useState } from 'react';
import useInterval from './useInterval';
import { DateContainer, Time} from './styledComponents';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const weekDays = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
]

const DateTime = () => {
  let d = new Date();

  let setHour = hour => (hour > 12 ? hour - 12 : hour);

  let setMorning = hour => (hour > 12 ? 'PM' : 'AM');

  let setMin = min => (min < 10 ? `0${min}` : min);

  let setDate = date => {
    switch (date) {
      case 1:
        return `${date}st`;
      case 2:
        return `${date}nd`;
      case 3:
        return `${date}rd`;
      case 4: case 5: case 6:
      case 7: case 8: case 9:
      case 10: case 11: case 12:
      case 13: case 14: case 15:
      case 16: case 17: case 18:
      case 19: case 20:
        return `${date}th`;
      case 21:
        return `${date}st`;
      case 22:
        return `${date}nd`;
      case 23:
        return `${date}rd`;
      case 24: case 25: case 26:
      case 27: case 28: case 29:
      case 30:
        return `${date}th`;
      case 31:
        return `${date}st`;
      default:
        return `Something went wrong!`
    }
  }

  let newState = () => ({
    hour: setHour(d.getHours()),
    minutes: setMin(d.getMinutes()),
    month: months[d.getMonth()],
    week: d.getDay(),
    day: setDate(d.getDate()),
    morning: setMorning(d.getHours()),
  })

  let [time, setTime] = useState(newState());

  // Sets up timer
  useInterval(() => {
    setTime(newState())
  }, 1000)


  return (
    <DateContainer>
      <Time>{time.hour}:{time.minutes} {time.morning}</Time>
      <p>{weekDays[time.week]}, {time.month} {time.day}</p>
    </DateContainer>
  )
}

export default DateTime;