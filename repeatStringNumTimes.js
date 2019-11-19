function repeatStringNumTimes(str, num) {
  // repeat after me
  console.log("str, " + "num ", str, num);
  let repeatedStr = "";
  if (num > 0) {
    for (var i = 0; i < num; i++) {
      repeatedStr += str;
      console.log(repeatedStr);
    }
  }
  console.log("return repeatedStr", repeatedStr);
  return repeatedStr;
}

repeatStringNumTimes("abc", 3);
repeatStringNumTimes("*", 3);
// repeatStringNumTimes("abc", 0);
repeatStringNumTimes("abc", -2);
repeatStringNumTimes("*", 8);
