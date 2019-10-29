function findLongestWordLength(str) {
  var longestWord = 0;
  let countLength = 0;
  var array = str.split(" ");
  // console.log(array);
  // console.log("str" + str);

  for (let words = 0; words < array.length; words++) {
    console.log("array words " + array[words].length);

    if (array[words].length > countLength) {
      countLength = array[words].length;
    }
  }
  console.log("countLength " + countLength);
  return longestWord;
}

findLongestWordLength(
  "What if we try a super-long word such as otorhinolaryngology"
);

// make a counter to keep track of the largest word length
//  split the string into an array of words
//  iterate each word and count number of characters
//  if statement: if current count is greater than saved highest count, save it as highest count
