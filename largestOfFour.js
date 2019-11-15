function largestOfFour(arr) {
  // loop through each of the 4 sub arrays using arr[i];
  //   console.log("arr is ", arr);
  //   console.log("arr[0] is " + arr[0]);
  //   console.log("arr[0][1] is " + arr[0][1]);

  var highestValues = [];
  //   console.log("highestValues are " + "[" + highestValues + "]");

  for (let i = 0; i < arr.length; i++) {
    var x = arr[i][0];
    let value = x;
    //  first loop runs once for each sub array in the array
    //  console.log("arr.length is ", arr.length);
    for (let j = 0; j < arr[i].length; j++) {
      //  second loop runs 4 times over the 4 elements in each sub array
      // console.log("arr[i].length is ", arr[i][j]);

      if (arr[i][j] > value) {
        value = arr[i][j];
        console.log("value is " + value);
      }
    }
    console.log("highest value is " + value);
    //  push value into the new array
    highestValues.push(value);
    console.log("highestValues is " + highestValues);
  }

  //
  return highestValues;
}

largestOfFour([
  [17, 23, 25, 12],
  [25, 7, 34, 48],
  [4, -10, 18, 21],
  [-72, -3, -17, -10]
]);
