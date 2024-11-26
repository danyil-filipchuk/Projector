'use string';

// task 3 (first option):

const currentMaxValue = 4589;

const arr = Array.from(String(currentMaxValue), Number);
const rev = arr.reverse();
const str = rev.join('')
let reverseMaxValue = Number(str);

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'

// task 3 (second option):

reverseNumber=n=>(n<0?-1:1)*parseInt(n.toString().split('').reverse().join(''));

console.log(reverseNumber(4589));

// task 4 (first option):

const resultsArray = [1, 2, [3, [4]]];

const resultsArray2 = resultsArray.flat(Infinity);

let productOfArray = resultsArray2.reduce((accum, item) => {
     return accum * item
})

console.log(productOfArray); // 24

// task 4 (second option):

const resultsArray = [1, 2, [3, [4]]];

const resultsArray2 = resultsArray.flat(Infinity);

let productOfArray = resultsArray2.reduce(function(accum, item) {
    return accum * item
})

console.log(productOfArray); // 24




