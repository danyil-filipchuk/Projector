'use strict';

const taskInput = document.querySelector('.task-input');
const tasksList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const form = document.querySelector('.create-task-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (taskInput.value.trim() === '') {
        return;
    }

    const task = {
        id: generateId(),
        text: taskInput.value.trim(),
    }

    createSingleTaskElement(task);
    storeTaskInLocalStorage(task);
    taskInput.value = '';
})

function generateId() {
    return Date.now();
}

function createSingleTaskElement(taskInput) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(taskInput.text));
    li.classList.add('item-task');
    li.setAttribute('data-id', taskInput.id);

    const doneTask = document.createElement('button');
    doneTask.textContent = 'Виконано';
    doneTask.classList.add('done-task');

    const editTask = document.createElement('i');
    editTask.classList.add('fa', 'fa-edit', 'edit-task', 'fa-lg');

    li.appendChild(doneTask);
    li.appendChild(editTask);
    tasksList.appendChild(li);

    doneTask.addEventListener('click', () => {
        removeFromLocalStorage(taskInput.id);
        li.remove();
    })

    editTask.addEventListener('click', () => {
        const newText = prompt('Виправіть текст завдання', taskInput.text);
        if (newText && newText.trim() !== '') {
            taskInput.text = newText.trim();
            li.firstChild.textContent = taskInput.text;
        }
    })
}

function storeTaskInLocalStorage(task) {
    const tasks = localStorage.getItem('tasks') !== null
        ? JSON.parse(localStorage.getItem('tasks')) : [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeFromLocalStorage(taskId) {
    const tasks = localStorage.getItem('tasks') !== null
    ? JSON.parse(localStorage.getItem('tasks')) : [];

    const filterTasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(filterTasks));
}

clearBtn.addEventListener('click', () => {
    tasksList.innerHTML = '';
    localStorage.removeItem('tasks');
});

document.addEventListener('DOMContentLoaded', () => {
    const tasks = localStorage.getItem('tasks') !== null
        ? JSON.parse(localStorage.getItem('tasks')) : [];

    tasks.forEach((task) => {
        createSingleTaskElement(task);
    })
});