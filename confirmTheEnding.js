function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  console.log("target ", target.length);
  let str2;
  str2 = str.slice(str.length - target.length);
  console.log("sliced ", str2);

  var result = str.localeCompare(str2);
  console.log("result ", result);

  //   if (str2 === str.slice(str.length - target.length));
  //   {
  //     console.log("str2 and target", str2 + " " + target);
  //     return true;
  //   } else if {
  //      return false;
  //   }

  return str;
}

// need to return true and false

confirmEnding("Open sesame", "same");

/*
'abc'.length

var str = "unbelievable";
//  pass zero-based index location 2 to slice
var str2 = str.slice(2);
console.log(str2); // believable
*/
