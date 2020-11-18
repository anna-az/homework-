/*
Task 3

Создайте переменные firstName и lastName для хранение имени и фамилии, 
запишите в них значения из модального окна prompt. 
Выведите на экран приветствие (“What’s up John Doe”), используя конкатенацию и экранирование символов. 
Имя и фамилию выводите заглавными буквами независимо от того, как они были введены.
*/

var firstName = prompt('What is your name?');
var lastName = prompt('What is your last name?');
firstName = firstName[0].toUpperCase() + firstName.slice(1);
lastName = lastName[0].toUpperCase() + lastName.slice(1);
alert('What\'s up ' + firstName + ' ' + lastName);