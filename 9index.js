'use strict';

let isOn = true;
let lastActionTime = '';

// Функція, яка відповідає за збереження станів змінних в localStorage
function saveState(isOn, lastActionTime) {
    localStorage.setItem('isOn', isOn);
    localStorage.setItem('lastActionTime', lastActionTime);
}

// Функція, яка завантажує стани змінних із localStorage, якщо вони там присутні.
// Якщо localStorage пустий, то змінні isOn та lastActionTime залишаються без змін.
function loadState() {

    const savedIsOn = localStorage.getItem('isOn');
    const savedLastActionTime = localStorage.getItem('lastActionTime');

    if (savedIsOn === 'false') {
        isOn = false;
    }
    if (savedLastActionTime) {
        lastActionTime = savedLastActionTime;
    }
}

// Функція яка відображає повідомлення за домопогою додавання та видалення потрібного класу.
// Додавання та видалення классу можливо робити в самій умовній конструкції, але вирішив зробити окремою функцією.
function displayNotification() {
    notification.classList.remove('hidden');
    notification.classList.add('visible');
}

document.addEventListener('DOMContentLoaded', function () {
    // КОД ЗНИЗУ ВИКОНУЄТЬСЯ ПРИ ЗАВАНТАЖЕННІ СТОРІНКИ
    const bodyElement = document.querySelector('body');
    const button = document.getElementById('buttonSwitch');
    const notification = document.getElementById('notification');

    loadState()
    // При завантаженні сторінки, змінюємо колір та текст в залежності від значення змінної isOn
    if (isOn === true) {
        bodyElement.style.backgroundColor = 'orange'
        button.textContent = 'Turn Off'
        notification.textContent = `Last turn on: ${lastActionTime}`
    } else {
        bodyElement.style.backgroundColor = 'gray'
        button.textContent = 'Turn On'
        notification.textContent = `Last turn off: ${lastActionTime}`
    }
    // При завантаженні сторінки, відображаємо повідомлення, якщо lastActionTime має не пусту строку в середині
    if (lastActionTime) {
        displayNotification();
    }
    // КОД ЗВЕРХУ ВИКОНУЄТЬСЯ ПРИ ЗАВАНТАЖЕННІ СТОРІНКИ


    // Під час кліку на кнопку виконується наступний код
    button.addEventListener('click', function () {
        isOn = !isOn;
        const currentTime = new Date().toLocaleString('uk');

        if (isOn === true) {
            bodyElement.style.backgroundColor = 'orange'
            button.textContent = 'Turn Off'
            notification.textContent = `Last turn on: ${currentTime}`
        } else {
            bodyElement.style.backgroundColor = 'gray'
            button.textContent = 'Turn On'
            notification.textContent = `Last turn off: ${currentTime}`
        }
        // В кінці коду який виконується під час кліку, відображаємо повідомлення і зберігаємо стан змінних в localStorage
        displayNotification();
        saveState(isOn, currentTime);
    })

})

