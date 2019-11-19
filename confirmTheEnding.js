function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  console.log("target length ", target.length);
  console.log("target ", target);
  let str2;
  str2 = str.slice(str.length - target.length);
  console.log("str2 sliced ", str2);

  //   var result = str2.localeCompare(target);
  //   console.log("result ", result);

  if (str2 === target) {
    console.log("true equal");
    return true;
  }
  console.log("false not equal");
  return false;

  //   if (str2 === str.slice(str.length - target.length));
  //   {
  //     console.log("str2 and target =", str2 + " + " + target);
  //     return 1;
  //   }
  return 0;
  //   if (str2 != str.slice(str.length - target.length));
  //   {
  //     console.log("str2 not target =", str2 + " + " + target);
  //     return false;
  //   }
  //   return str;
}

// need to return true and false

confirmEnding("Open sesame", "same");
confirmEnding("Open sesame", "pen");

