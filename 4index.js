'use strict';

// task 2 (first option):

const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];

let filteredNames = userNames.filter( item => {
    if(['А','Е','И','І','Ї','О','У','Ю','Я','Є'].includes(item[0])) {
        return true;
    }
})

console.log(filteredNames);

// task 2 (second option):

const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
const filteredNames = [];

for(let i = 0; i < userNames.length; i++) {
    let arr = userNames[i];
    if(['А','Е','И','І','Ї','О','У','Ю','Я'].includes(arr[0])) {
        filteredNames.push(arr);
    }
}
console.log(filteredNames);

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

// or: let productOfArray = resultsArray2.reduce(function(accum, item) {
//     return accum * item
// })