let initialValue = 0;
let sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};
console.log(sum(1));
console.log(sum(1, 2));
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5));
