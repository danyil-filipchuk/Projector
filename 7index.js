'use strict';

// task 1:

function detonatorTimer(delay) {

    const interval = setInterval(() => {
        if (delay > 0) {
            console.log(delay--);
        } else {
            console.log('BOOM!');
            clearInterval(interval);
        }
    }, 1000);
}

detonatorTimer(3);
// 3
// 2
// 1
// BOOM!

// task 2:

function detonatorTimer(delay) {

    setTimeout(() => {
        if (delay === 0) {
            console.log('BOOM!');
        } else {
            console.log(delay)
            detonatorTimer(delay - 1)
        }
    }, 1000);
}

detonatorTimer(3);
// 3
// 2
// 1
// BOOM!

// task 3 and 4:

let aboutMe = {
    name: 'Danya',
    city: 'Kyiv',
    gender: 'male',
    age: 24,
    hobby: 'aviation',
    defaultMood: 'hungry',
    currentMood: 'sleepy',
    introduce() {
        console.log(`I am from ${this.city} and my name is ${this.name}`);
    },
    prediction() {
        console.log(`If all goes well, next year I will be ${this.age+1}`);
    },
    describeMyMood(){
        console.log(`I almost always ${this.defaultMood}, but now I'm ${this.currentMood}`);
    }
}

let securedSelfIntroduce = Object.freeze(aboutMe).introduce.bind(aboutMe);
let securedSelfPrediction = Object.freeze(aboutMe).prediction.bind(aboutMe);
let securedSelfDescribeMyMood = Object.freeze(aboutMe).describeMyMood.bind(aboutMe);

setTimeout(securedSelfIntroduce, 1000); // виведе коректний результат
setTimeout(securedSelfPrediction, 2000); // виведе коректний результат
setTimeout(securedSelfDescribeMyMood, 3000); // виведе коректний результат

// task 5:

function someFunction(curator, institute) {
    console.log(`Dear ${curator} from ${institute} please check my homework`)
}

function slower(func, seconds) {

    console.log(`Chill out, you will get your result in ${seconds} seconds`);

    return function(curator, institute) {
        setTimeout(() => {func(curator, institute)},seconds * 1000);
    };
}

let slowedSomeFunction = slower(someFunction, 5);
slowedSomeFunction('Miroslav', 'Projector');
