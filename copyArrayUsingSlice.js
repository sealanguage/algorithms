function forecast(arr) {
  // change code below this line
  let todaysWeather = arr.slice(2, 4);
  console.log(todaysWeather);
  return todaysWeather;
}

// do not change code below this line
console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);
