function quickCheck(arr, elem) {
  // change code below this line
  //   const array = arr;
  console.log("arr is ", arr);
  console.log("arr.indexOf : ", arr.indexOf(elem));
  const array = arr.indexOf(elem);

  if (arr.indexOf(elem) >= 0) {
    console.log("arr is ", arr);
    return true;
  } else {
    return false;
  }

  // change code above this line
}

// change code here to test different cases:
console.log(
  "1 veggies ",
  quickCheck(["squash", "onions", "shallots"], "mushrooms")
);
console.log("2 numbers ", quickCheck([3, 5, 9, 125, 45, 2], 125));
console.log(
  "3 mo veggies ",
  quickCheck(["onions", "squash", "shallots"], "onions")
);
console.log("4 truFal ", quickCheck([true, false, false], undefined));

// const beasts = ["ant", "bison", "camel", "duck", "bison"];
// console.log("beasts :", beasts.indexOf("bison"));
