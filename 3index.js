'use string';

// task 1:

function iterativeOddSumTo(number) {

    let result = 0;

    for (i = 1; i <= number; i++) {
        if (i % 2 !== 0) {
            result +=i;
        }
    }

    return result;
}

console.log(iterativeOddSumTo(1)) // 1
console.log(iterativeOddSumTo(10)) // 25

// task 2:

function recursiveOddSumTo(number) {

if (number === 0) {
    return number;
}
if (number % 2 !== 0) {
        return number + recursiveOddSumTo(number - 1);
    }
return recursiveOddSumTo(number - 1);
}

console.log(recursiveOddSumTo(1))
console.log(recursiveOddSumTo(10))

