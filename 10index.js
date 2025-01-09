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
    createSingleTaskElement(taskInput.value);
    storeTaskInLocalStorage(taskInput.value);
    taskInput.value = '';
})

function createSingleTaskElement(taskInput) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(taskInput));
    li.classList.add('item-task');

    const doneTask = document.createElement('button');
    doneTask.textContent = 'Виконано';
    doneTask.classList.add('done-task');

    const editTask = document.createElement('i');
    editTask.classList.add('fa', 'fa-edit', 'edit-task', 'fa-lg');

    li.appendChild(doneTask);
    li.appendChild(editTask);
    tasksList.appendChild(li);

    doneTask.addEventListener('click', () => {
        li.remove();
    })
}

function storeTaskInLocalStorage(task) {
    const tasks = localStorage.getItem('tasks') !== null ? JSON.parse(localStorage.getItem('tasks')) : [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


document.addEventListener('DOMContentLoaded', () => {
    const tasks = localStorage.getItem('tasks') !== null
        ? JSON.parse(localStorage.getItem('tasks'))
        : [];

    tasks.forEach((task) => {
        createSingleTaskElement(task);
    })
})