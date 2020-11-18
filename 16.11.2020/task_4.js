/*
Task 4

Создайте переменные x и y для хранения числа. Значения переменные получают из prompt. 
Рассчитайте произведение, частное, разность и сумму этих значений. 
Результат последовательно отобразите в модальном окне. (Процесс вычисления посмотрите в debugger.)
*/

var x = +prompt('First number', '1'),
 y = +prompt('Second number', '1');
var sum = x + y;
debugger;
var diff = x - y;
debugger;
var prod = x * y;
debugger;
var quot = x / y;
debugger;
alert('Сумма: ' + sum);
alert('Разность: ' + diff);
alert('Произведение: ' + prod);
alert('Частное: ' + quot);