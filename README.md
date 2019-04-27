# Local Weather

## This is a project made for [freeCodeCamp](https://www.freecodecamp.org/)

Local-weather must meet the following requirements:

1. I can see the weather in my current location.

2. I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather.

3. I can push a button to toggle between Fahrenheit and Celsius.

The API that this app uses is not the most reliable, but is fairly accurate.

The main idea was for me to use React Hooks, and Higher-Order-Components.

My Higher-Order-Component wraps the weather container and provides a few methods that convert the degrees from Celsius to Fahrenheit.

The clock was interesting to create as there isn't an efficient way to use setInterval with React Hooks. I ended locating a solution that uses custom hooks, and within that custom hook useEffect is used twice.

Basically useRef() is used as an instance of the callback function that is normally passed to setInterval. If the callback were to change, useEffect would update itself. The second useEffect sets up a tick() function that sets up the interval. useRef() saves the current instance of setInterval to avoid skips, and resetting the delay from useEffect. The overall use of the function is pretty much the same syntax as setInterval.

Please let me know if you like what I've made and or have any constructive feedback for me!