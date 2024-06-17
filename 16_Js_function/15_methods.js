/*Methods:- action that can be performed on an object */

// const calculator = {
//   sum: function (a, b) {
//     return a + b;
//   },
//   sub: function (a, b) {
//     return a - b;
//   },
//   mul: function (a, b) {
//     return a * b;
//   },
// };

// console.log(calculator.sum(2, 3));
// console.log(calculator.sub(2, 3));
// console.log(calculator.mul(2, 3));

//Methods shorthand()
const calculator = {
  sum(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  mul(a, b) {
    return a * b;
  },
};
console.log(calculator.sum(2, 3));
console.log(calculator.sub(2, 3));
console.log(calculator.mul(2, 3));
