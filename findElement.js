function findElement(arr, func) {
  let num = 3;
  // newBooleanclass Vegetable {
    constructor(name) {
      this.name = name;

      // Put a constructor with a parameter called name, and set it to this.name.
  }
}

/* Alter code above this line */

const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'


  let result = num % 2;
  console.log("result is ", result);

  let arr1 = arr;
  // num is passed to the function. We will need to set it to the elements we want to check with the function.

  console.log("arr is", arr);
  for (var i = 0; i < arr.length; i++) {
    // console.log("arr1-i is ", arr1[i]); //  this gets the data of the array
    num = arr1[i] % 2 === 0;

    // if (num === true) {
    //   return arr1[i] % 2;
    // } else {
    //   return undefined;
    // }
  }

  // console.log("num is", num);

  // return num % 2 === 0;

  // return num;
}

findElement([1, 5, 2, 3, 4], num => num % 2 === 0);
findElement([1, 3, 5, 8, 9, 10], function(num) {
  return num % 2 === 0;
}); //  should return 8.
findElement([1, 3, 5, 9], function(num) {
  return num % 2 === 0;
}); //  should return undefined.

// look through an array (first argument) and returns the first element in the array that passes a truth test (second argument).
