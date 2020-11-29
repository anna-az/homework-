/*
Task 2

Создайте объект dates для хранения дат. 
Первая дата – позавчера. 
Вторая дата – текущая дата (new Date) минус 365 дней. 
Из prompt читается дата в формате yyyy-MM-dd. 
Проверьте, попадает ли введенная дата в диапазон дат объекта dates.

*/

const dates = {};
let dayAgo = new Date();
let year = new Date();
dayAgo.setDate(dayAgo.getDate() - 2);
year.setDate(year.getDate() - 365);
dates['day ago'] = dayAgo;
dates ['year'] = year;

let userDate = new Date(prompt('Your date', '2020-10-11'));

if (userDate > dates['year'] && userDate < dates['day ago']) {
    alert ('Попадает');
} else {
    alert ('Не попадает');
}

