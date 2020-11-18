/*
Task 1
Найдите и исправьте ошибки в коде:

'use strict';

var x = prompt('Введите Х', '1')
    y = prompt('Введите Y', '1');

alert( 'Сумма: ' + x + y );
*/

'use strict'
var x = prompt('Enter x', '1'),
y = prompt('Enter y', '1');
alert('Сумма: ' + (+x + +y));