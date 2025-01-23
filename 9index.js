'use strict';

// Функція, яка відповідає за збереження станів змінних в localStorage
function saveState(status, lastActionTime) {
    localStorage.setItem('Status', status);
    localStorage.setItem('lastActionTime', lastActionTime);
}

// Функція, яка завантажує стани змінних із localStorage, якщо вони там присутні.
// Якщо localStorage пустий, то змінні isOn та lastActionTime залишаються без змін.
function loadState() {
    let savedIsOn = localStorage.getItem('Status') || 'isOn';
    let savedLastActionTime = localStorage.getItem('lastActionTime') || '';

    return {
        status: savedIsOn,
        lastActionTime: savedLastActionTime
    };
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

    const buttonInfo = loadState();

    // При завантаженні сторінки, змінюємо колір та текст залежно від значення змінної isOn
    if (buttonInfo.status === 'isOn') {
        bodyElement.style.backgroundColor = 'orange';
        button.textContent = 'Turn Off';
        notification.textContent = `Last turn on: ${buttonInfo.lastActionTime}`;
    } else if (buttonInfo.status === 'isOff') {
        bodyElement.style.backgroundColor = 'gray';
        button.textContent = 'Turn On';
        notification.textContent = `Last turn off: ${buttonInfo.lastActionTime}`;
    }
    // При завантаженні сторінки, відображаємо повідомлення, якщо lastActionTime має не пустий рядок в середині
    if (buttonInfo.lastActionTime) {
        displayNotification(notification);
    }
    // КОД ЗВЕРХУ ВИКОНУЄТЬСЯ ПРИ ЗАВАНТАЖЕННІ СТОРІНКИ


    // Під час кліку на кнопку виконується наступний код
    button.addEventListener('click', function () {
        const currentTime = new Date().toLocaleString('uk');

        if (buttonInfo.status === 'isOn') {
            buttonInfo.status = 'isOff';
            bodyElement.style.backgroundColor = 'gray';
            button.textContent = 'Turn On';
            notification.textContent = `Last turn off: ${currentTime}`;
        } else if (buttonInfo.status === 'isOff') {
            buttonInfo.status = 'isOn';
            bodyElement.style.backgroundColor = 'orange';
            button.textContent = 'Turn Off';
            notification.textContent = `Last turn on: ${currentTime}`;
        }
        // В кінці коду який виконується під час кліку, відображаємо повідомлення і зберігаємо стан змінних в localStorage
        displayNotification(notification);
        saveState(buttonInfo.status, currentTime);
    });

})