/*
Task 6

Напишите программу, которая без использования оператора сравнения определяет, 
является ли целое число, введенное пользователем, нечётным (true/false). 
Результат отобразите в alert.
*/

var number = +prompt('Enter your number', '100');
alert(Boolean(number%2));