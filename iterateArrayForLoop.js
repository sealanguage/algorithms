//  return a filtered version of the passed array such that any array nested within arr containing element has been removed.

function filteredArray(arr, elem) {
  let newArr = [];
  //   console.log("arr.length is ", arr.length);
  // change code below this line
  // console.log("arr is ", arr);
  // console.log("newArr is ", newArr);

  for (let i = 0; i < arr.length; i++) {
    console.log("arr[i] is ", arr[i]);
    if (arr[i].indexOf(elem) === -1) {
      console.log("arr[i] does not have elem");
      newArr.push(arr[i]);
      console.log("newArr now is ", newArr);
    } else if (arr[i].indexOf(elem) > -1) {
      console.log("eliminate this subarray ", arr[i]);
    }
    // for (let j = 0; j < arr[i].length; j++) {
    //   console.log("arr[i][j] is ", arr[i][j]);
    // }
  }
  

  // change code above this line
  return newArr;
  console.log("newArr final is ", newArr);
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3]
    ],
    6
  )
);

// change code here to test different cases:
// console.log(
//   filteredArray(
//     [
//       [3, 2, 3],
//       [1, 6, 3],
//       [3, 13, 26],
//       [19, 3, 9]
//     ],
//     3
//   )
// );
// console.log(
//   filteredArray(
//     [
//       ["amy", "beth", "sam"],
//       ["dave", "sean", "peter"]
//     ],
//     "peter"
//   )
// );
// console.log(
//   filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2)
// );
// console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));

// for (let i = 0; i < arr.length; i++) {
//   // console.log("arr is ", arr);
//   console.log("arr[i] is ", arr[i]);
//   // for (let j = 0; j < arr[i].length; j++) {
//   // console.log("arr[i][j] is ", arr[i][j]);
//   if (arr[i] === elem) {
//     // console.log("elem, arr[i][j] is ", elem, arr[i][j]);
//     // console.log("arr[i] === elem");
//     // push arr[i] to newArr
//     // newArr.push(arr[i][j]);
//   } else {
//     newArr.push(arr);
//     console.log("newArr is: ", newArr);
//   }
//   // }
//   // newArr.push(arr);
//   // console.log("newArr[i] is: ", newArr[i]);
// }
