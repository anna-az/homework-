/*
Task 3

Изучите перебирающие методы массивов: forEach, filter, map. 
Создайте массив объектов users (~10 объектов), каждый объект имеет поля firstname, lastname, age с разными значениями, у некоторых есть поле middlename. Используя встроенные функции массивов:	
    a) Отфильтруйте пользователей младше 18 лет
    b) Добавьте каждому объекту поле fullName, которое является конкатенацией firstname, middlename и lastname, если есть все три, и только firstname и lastname, если middlename нет
    c) Сформируйте новый массив, который содержит только полное имя пользователей

*/

const users = [
    {
        firstname: 'John',
        lastname: 'Doe',
        age: 17
    },
    {
        firstname: 'Anna',
        lastname: 'Azarova',
        age: 24
    },
    {
        firstname: 'John',
        lastname: 'Smitt',
        age: 42
    },
    {
        firstname: 'Steve',
        lastname: 'Jobs',
        age: 14
    },
    {
        firstname: 'Bill',
        lastname: 'Gates',
        age: 52
    },
    {
        firstname: 'Laurene',
        lastname: 'Jobs',
        middlename: 'Powel',
        age: 57
    },
    {
        firstname: 'Mark',
        lastname: 'Zuckerberg',
        middlename: 'Elliot',
        age: 36
    },
    {
        firstname: 'Edvard',
        lastname: 'Potter',
        age: 7
    },
    {
        firstname: 'Angelina',
        lastname: 'Jolie',
        age: 45
    },
    {
        firstname: 'Klara',
        lastname: 'Bond',
        middlename: 'Voight',
        age: 11
    }
];

let result_filter = users.filter(user => user.age < 18);

console.log(result_filter);

let result_forEach = [];
users.forEach(user => {
    if(user.middlename) {
        user.fullName = user.firstname + ' ' + user.lastname + ' ' +  user.middlename;
    } else {
        user.fullName = user.firstname + ' ' + user.lastname;
    }
    result_forEach.push(user);
});

console.log(result_forEach);

let result_map = result_forEach.map(user => user.fullName);

console.log(result_map);

