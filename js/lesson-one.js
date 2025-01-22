const number = [1, 2, 3, 4, 5];

function index(arr) {
  arr.forEach((numb, index) => console.log(numb, index));
}
console.log(index(number));
// 1 0
// 2 1
// 3 2
// 4 3
// 5 4
// undefined
function odd(arr) {
  return arr.map((numb) => numb * 2);
}
console.log(odd(number));
// [true, false, true, false, true];
// [2, 4, 6, 8, 10];
const num = number.map((numb) => numb * 2);
console.log(num);
// [ 2, 4, 6, 8, 10 ]
