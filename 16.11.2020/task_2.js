/*
Task 3

Создайте три переменные. Присвойте первой переменной случайное целочисленное значение. 
Вторая переменная равна первой переменной, увеличенной в три раза. 
Третья переменная равна сумме двух первых. Распечатайте все три.
*/

var x, y, z;
x = Math.round(Math.random() *10);
y = x * 3;
z = x + y;
alert('x: ' + x + ', y: ' + y + ', z: ' + z);