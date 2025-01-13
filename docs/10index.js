'use strict';

const taskInput = document.querySelector('.task-input');
const tasksList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const form = document.querySelector('.create-task-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (taskInput.value.trim() === '') {
        return alert('Введіть текст задачі')
    }

    // Створення змінної-об'єкта з двома ключами - айді та самим текстом.
    const task = {
        id: generateId(),
        text: taskInput.value.trim(),
    }

    createSingleTaskElement(task);
    storeTaskInLocalStorage(task);
    taskInput.value = '';
})

// Функція генерації унікального айді нашим елементам.
function generateId() {
    return crypto.randomUUID();
}

function createSingleTaskElement(taskInput) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(taskInput.text));
    li.classList.add('item-task');
    // Створення атрибуту та присвоєння йому значення.
    li.setAttribute('data-id', taskInput.id);


    // Створення кнопки після тексту завдання.
    const doneTask = document.createElement('button');
    doneTask.textContent = 'Виконано';
    doneTask.classList.add('done-task');

    // Створення іконки редагування після кнопки.
    const editTask = document.createElement('i');
    editTask.classList.add('fa', 'fa-edit', 'edit-task', 'fa-lg');

    //Додаю кнопку та іконку до "li".
    li.appendChild(doneTask);
    li.appendChild(editTask);

    //Додаю весь блок "li" разом з текстом завдання, кнопкою та іконкою до нашої колекції.
    tasksList.appendChild(li);

    // Подія видалення завдання разом з викликом функції.
    doneTask.addEventListener('click', () => {
        removeFromLocalStorage(taskInput.id);
        li.remove();
    });

    // Подія редагування тексту завдання разом з викликом функції.
    editTask.addEventListener('click', () => {
        const newText = prompt('Виправіть текст завдання', taskInput.text);
        if (newText && newText.trim() !== '') {
            taskInput.text = newText.trim();
            li.firstChild.textContent = taskInput.text;
            editTaskInLocalStorage(taskInput);
        }
    });
}

// Тут все без змін, не чіпав.
function storeTaskInLocalStorage(task) {
    const tasks = localStorage.getItem('tasks') !== null
        ? JSON.parse(localStorage.getItem('tasks')) : [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Функція видалення завдання з LocalStorage, за допомогою методу filter.
// Тобто в змінній filterTasks залишаються всі завдання крім тих, що нам не потрібні по айді.
function removeFromLocalStorage(taskId) {
    const tasks = localStorage.getItem('tasks') !== null
    ? JSON.parse(localStorage.getItem('tasks')) : [];

    const filterTasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(filterTasks));
}

// Функція зміни тексту завдання. Спробував скористатись тернарним оператором замість логічної конструкції.
function editTaskInLocalStorage(editedTask) {
    const tasks = localStorage.getItem('tasks') !== null
    ? JSON.parse(localStorage.getItem('tasks')) : [];

    const editTask = tasks.map(task =>
        task.id === editedTask.id ? editedTask : task
    );
    localStorage.setItem('tasks', JSON.stringify(editTask));
}

// Видалення всіх елементів. В умовах завдання цього не було, але в шаблоні воркшопу було.
clearBtn.addEventListener('click', () => {
    tasksList.innerHTML = '';
    localStorage.removeItem('tasks');
});

// Тут все без змін, не чіпав.
document.addEventListener('DOMContentLoaded', () => {
    const tasks = localStorage.getItem('tasks') !== null
        ? JSON.parse(localStorage.getItem('tasks')) : [];

    tasks.forEach((task) => {
        createSingleTaskElement(task);
    })
});