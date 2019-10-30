function factorialize(num) {
  num = 5;
   let counter = 0;

  for (i = 1; i <= num; i++) {
    // i is 1, increment up to the number
    // with each loop take i * the next increment
    var j = i * counter;
    var answer = j;

    console.log("done");
    console.log("my i is: ", i);
    console.log("my j is: ", j);
    console.log("my num is: ", num);
    console.log("my ansewer is: ", answer);
    return j;
  }

  console.log("out of function");
  return num;
}

factorialize(5);
