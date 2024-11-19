'use string';

// task 1 (part 1):

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log('Лол')
    } else if (i % 5 == 0) {
        console.log('Кек')
    } else {
        console.log(i);
    }
}

// task 1 (part 2):

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        console.log('ЛолКек')
    } else {
        console.log(i);
    }
}

// task 2 (part 1):

for (value = 1; value < 10; value++) {
    if (value % 2 == 0) {
        console.log(value);
    }
}

// task 2 (part 2):

let value = 1;

while(value < 10) {
    if(value % 2 == 0) {
        console.log(value);
    }
    value++
}

// task 2 (part 3):

let value = '1';

if(typeof value !== "number") {
    console.log('Таке чуство шо Бог десь наказує нас за шось');
} else {
    while (value < 10) {
        if (value % 2 == 0) {
            console.log(value);
        }
        value++
    }
}