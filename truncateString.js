function truncateString(str, num) {
  // Clear out that junk in your trunk
  console.log("str, " + "num ", str, num);

  if (str.length > num) {
    
    let elipsis = "...";
    console.log("str substring is ", str.substring(0, num));
    
    str = str.substring(0, num).concat(elipsis);
    console.log("str is ", str);
  }

  return str;
}

truncateString(
  "A-tisket a-tasket A green and yellow basket",
  "A-tisket a-tasket A green and yellow basket".length
);
truncateString("A-tisket a-tasket A green and yellow basket", 8);
