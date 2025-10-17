//console.log("Wellcome function")
/*
function sum(a,b){
    y = a + b;
    return y;
}

let sums = sum(4,5)
console.log(sums)
*/
/*
const sum = (a,b) =>{
    console.log(a+b)
}
sum(5,7)
*/
/*
function countvowel(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}
  */

// let name = ["a", "b", "c", "d"];

// name.forEach((val,idx,arr) => {
//   console.log(val.toUpperCase(),idx,arr);
// });

// let nums = [1, 3, 5, 6, 8];
// nums.forEach((num) => {
//   console.log(num ** 2);
// });

// anothermethod
// let nums = [1, 3, 5, 6, 8];

// let find = ((num) => {
//   console.log(num ** 2);
// });
// nums.forEach(find)

// map
// let nums = [1, 3, 5, 6, 8];
// let num = nums.map((number)=>{
//   return number *2
// })
// console.log(num)
//filter
// let nums = [1, 3, 5, 6, 8];
// let num = nums.filter((number)=>{
//   return number % 2 === 0
//   return number > 3
// })
// console.log(num)

// reduce
// let nums = [1, 3, 5, 6, 8];
// let num = nums.reduce((res,curr) => {
//   // return res + curr;
//   return res > curr ? res : curr;
// });
// console.log(num);

// let marks = [33,555,77,65,44]

// let mark = marks.filter((val) =>{
//   return val > 90
// })
// console.log(mark)

let n = prompt("Enter a number");

nums = [];
for (let i = 1; i <= n; i++) {
  nums[i - 1] = i;
}
console.log(nums);

let sum = nums.reduce((pre, curr) => {
  return pre + curr;
});
console.log("sum = " , sum);

let factorial = nums.reduce((pre, curr) => {
  return pre * curr;
});
console.log("factorial = " ,factorial );
