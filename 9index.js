'use strict';

const buttonStatus = {
    isOn: true,
    lastActionTime: ''
}

// Функція, яка відповідає за збереження станів змінних в localStorage
function saveState(isOn, lastActionTime) {
    localStorage.setItem('isOn', isOn);
    localStorage.setItem('lastActionTime', lastActionTime);
}

// Функція, яка завантажує стани змінних із localStorage, якщо вони там присутні.
// Якщо localStorage пустий, то змінні isOn та lastActionTime залишаються без змін.
function loadState(state) {

    const savedIsOn = localStorage.getItem('isOn');
    const savedLastActionTime = localStorage.getItem('lastActionTime');

    if (savedIsOn === 'false') {
        state.isOn = false;
    }
    if (savedLastActionTime) {
        state.lastActionTime = savedLastActionTime;
    }
}

// Функція яка відображає повідомлення за допомогою додавання та видалення потрібного класу.
// Додавання та видалення класу можливо робити в самій умовній конструкції, але вирішив зробити окремою функцією.
function displayNotification(element) {
    element.classList.remove('hidden');
    element.classList.add('visible');
}

document.addEventListener('DOMContentLoaded', function () {
    // КОД ЗНИЗУ ВИКОНУЄТЬСЯ ПРИ ЗАВАНТАЖЕННІ СТОРІНКИ
    const bodyElement = document.querySelector('body');
    const button = document.getElementById('buttonSwitch');
    const notification = document.getElementById('notification');

    loadState(buttonStatus);
    // При завантаженні сторінки, змінюємо колір та текст залежно від значення змінної isOn
    if (buttonStatus.isOn === true) {
        bodyElement.style.backgroundColor = 'orange'
        button.textContent = 'Turn Off'
        notification.textContent = `Last turn on: ${buttonStatus.lastActionTime}`
    } else {
        bodyElement.style.backgroundColor = 'gray'
        button.textContent = 'Turn On'
        notification.textContent = `Last turn off: ${buttonStatus.lastActionTime}`
    }
    // При завантаженні сторінки, відображаємо повідомлення, якщо lastActionTime має не пустий рядок в середині
    if (buttonStatus.lastActionTime) {
        displayNotification(notification);
    }
    // КОД ЗВЕРХУ ВИКОНУЄТЬСЯ ПРИ ЗАВАНТАЖЕННІ СТОРІНКИ


    // Під час кліку на кнопку виконується наступний код
    button.addEventListener('click', function () {
        buttonStatus.isOn = !buttonStatus.isOn;
        const currentTime = new Date().toLocaleString('uk');

        if (buttonStatus.isOn === true) {
            bodyElement.style.backgroundColor = 'orange'
            button.textContent = 'Turn Off'
            notification.textContent = `Last turn on: ${currentTime}`
        } else {
            bodyElement.style.backgroundColor = 'gray'
            button.textContent = 'Turn On'
            notification.textContent = `Last turn off: ${currentTime}`
        }
        // В кінці коду який виконується під час кліку, відображаємо повідомлення і зберігаємо стан змінних в localStorage
        displayNotification(notification);
        saveState(buttonStatus.isOn, currentTime);
    });

})

