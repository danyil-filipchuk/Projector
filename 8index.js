'use strict';

// — для елементу з класом 'hatredLevelBlock':

const divWithClass = document.getElementsByClassName('hatredLevelBlock')[0].children;

Array.from(divWithClass).forEach(child => console.log(child));

// — для першого елементу <section>:

const sectionWithClass = document.querySelector('section').firstElementChild;

console.log(sectionWithClass);

// — для елементу з текстом 'Навігація по DOM дереву':

const divWithId = document.getElementById('headerTwo');

console.log(divWithId);

// — для елементу списку з текстом 'Пункт 5':

const ulWithLi = document.querySelector('ul').children

console.log(ulWithLi[4]);

// Другий варіант вирішення попередньої задачі вже з використанням "querySelectorAll", якщо другий раз не можна використовувати "querySelector"

const ulWithLi = document.querySelectorAll('ul > li')

console.log(ulWithLi[4]);
