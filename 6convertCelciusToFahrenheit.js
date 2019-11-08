function convertToF(celsius) {
  let fahrenheit;
  console.log("celsius: ", celsius);
  fahrenheit = celsius * (9 / 5) + 32;
  console.log("fahrenheit: ", fahrenheit);
  return fahrenheit;
}

convertToF(30);
