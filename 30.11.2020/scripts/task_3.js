/*
Task 3

Создайте массив со значениями: ‘Angular’, ‘jQuery’
Добавьте в начало массива значение ‘Backbone.js’
Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
Добавьте в массив значение ‘CommonJS’ вторым элементом
Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”
*/

let arr = ['Angular', 'jQuery'];
arr.unshift('Backbone.js');
arr.push('ReactJS', 'Vue.js');
arr.splice(2, 0, 'CommonJS');
alert(arr.splice(arr.indexOf('jQuery'),1) + ' - это здесь лишнее');