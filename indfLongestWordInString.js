function findLongestWordLength(str) {
  var longestWordLength = 0;
  let wordLength = 0;
  var array = str.split(" ");
  console.log(array);

  for (let words = 0; words < array.length; words++) {
    for (let letter = 0; letter < str.length; letter++) {
      wordLength += 1;
      if (wordLength > str.length) {
        str.length = longestWord;
      }
    }
  }

  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// make a counter to keep track of the largest word length
//  split the string into an array of words
//  iterate each word and count number of characters
//  if statement: if current count is greater than saved highest count, save it as highest count
