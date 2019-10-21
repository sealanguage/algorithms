function sumAll(arr) {
  if (arr[0] > arr[1]) {
    arr.reverse();
  }

  var min = arr[0];
  var max = arr[arr.length - 1];
  console.log("min value is " + min + 1);
  var currentValue = 0;
  var levels = max - min;
  console.log(levels);
  for (var i = min + 1; i < max; i++) {
    console.log("currentValue is " + currentValue);
    console.log("i is " + i);
    currentValue += i;
    console.log("currentValue is " + currentValue);
  }
  var sum = arr[0] + arr[1] + currentValue;
  console.log("sum is " + sum);
  return sum;
}

sumAll([1, 4]);
