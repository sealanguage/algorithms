function htmlColorNames(arr) {
  // change code below this line
  const startIndex = 0;
  const amountToDelete = 2;

  arr.splice(startIndex, amountToDelete, "DarkSalmon", "BlanchedAlmond");

  // change code above this line
  return arr;
}

// do not change code below this line
console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurqoise",
    "FireBrick"
  ])
);
