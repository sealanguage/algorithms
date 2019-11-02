function factorialize(num) {
  //   let counter = 1;
  let result = 1;

  for (let i = 1; i <= num; i++) {
    // i is 1, increment up to the number
    // with each loop take i * the next increment
    //  console.log("counter " + counter);
    console.log("my i = ", i);
    result = i * result;
    //  counter++;
    //  console.log("counter++ is " + counter);
    console.log("result, i is " + i, result);
    console.log("num is " + num);

    //  var j = i * i++;
    //  var answer = j;
    //  console.log("j is ", +j);
    var checking = 1 * 2 * 3 * 4 * 5;
    console.log("checking is  ", checking);
  }

  return result;
}

factorialize(5);
