'use strict';

// task 1:

const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];

let initials = userNames.sort().map(item => {

    const letter = item.split(' ');

    return letter.map(name => name[0]).join('.') + '.';

})

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]

// task 2 (first option):

const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];

let filteredNames = userNames.filter( item => {
    return ['А','Е','И','І','Ї','О','У','Ю','Я','Є'].includes(item[0]);
})

console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']

// task 2 (second option):

const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
const filteredNames = [];

for(let i = 0; i < userNames.length; i++) {
    let arr = userNames[i];
    if(['А','Е','И','І','Ї','О','У','Ю','Я'].includes(arr[0])) {
        filteredNames.push(arr);
    }
}

console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']

// task 3 (first option):

function currentMaxValue(reverseMaxValue){

    reverseMaxValue = reverseMaxValue + "";
    return reverseMaxValue.split("").reverse().join("");
}

console.log(currentMaxValue(4589)); // 9854
console.log(typeof reverseMaxValue); // 'number'

// task 3 (second option):

reverseNumber=n=>(n<0?-1:1)*parseInt(n.toString().split('').reverse().join(''));

console.log(reverseNumber(4589));

// task 4 (first option):

const resultsArray = [1, 2, [3, [4]]];

let productOfArray = resultsArray.flat(Infinity).reduce((accum, item) => {
    return accum * item
})

console.log(productOfArray); // 24

// or: let productOfArray = resultsArray2.reduce(function(accum, item) {
//     return accum * item
// })
