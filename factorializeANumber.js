function factorialize(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    // i is 1, increment up to the number
    // with each loop take i * the next increment
    console.log("my i = ", i);
    result = i * result;

    console.log("result, i is " + i, result);
    console.log("num is " + num);
  }

  return result;
}

factorialize(5);
