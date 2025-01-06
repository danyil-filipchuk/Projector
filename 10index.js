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

    const deleteTask = document.createElement('button');
    deleteTask.textContent = 'Видалити';
    deleteTask.classList.add('delete-task');

    const editTask = document.createElement('button');
    editTask.textContent = 'Змінити';
    editTask.classList.add('edit-task');

    li.appendChild(deleteTask);
    li.appendChild(editTask);
    tasksList.appendChild(li);

    deleteTask.addEventListener('click', () => {
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