function filteredArray(arr, element) {
  let newArr = [];
  //   console.log("arr.length is ", arr.length);
  // change code below this line
  for (let i = 0; i < arr.length; i++) {
    console.log("arr is ", arr);
    console.log("arr[i] is ", arr[i]);
    for (let j = 0; j < arr[i].length; j++) {
      console.log("arr[i][j] is ", arr[i][j]);
      if (arr[i][j] != element) {
        console.log("element, arr[i][j] is ", element, arr[i][j]);
        console.log("arr[i] != element");

        // push arr[i] to newArr
      }
      newArr.push(arr[i]);
    }

    //  for (let j = 0; j < arr[i].length; j++) {
    //    console.log("arr[i] is ", arr[i]);
    //  }
  }
  // change code above this line
  return newArr;
}

// change code here to test different cases:
// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
console.log(
  filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter")
);
// console.log(
//   filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2)
// );
// console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));
//  return a filtered version of the passed array such that any array nested within arr containing element has been removed.
