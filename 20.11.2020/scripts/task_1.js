/*
Task 1 

Создайте блок-схему, описывающую алгоритм поиска минимального из трех чисел. 
Запишите алгоритм программно: 
создайте три переменные с любыми числовыми значениями; 
используя только вложенные условные операторы if (НЕ логические операторы), 
найдите минимальное число и отобразите на экране его значение. 
*/


let x = +prompt('Enter x', '');
let y = +prompt('Enter y', '');
let z = +prompt('Enter z', '');

if (x < y) {
    if (x < z) {
        alert('x = ' + x + ', y = ' + y + ', z = ' + z +'\nThe smallest number is x = ' + x);
    } else {
        alert('x = ' + x + ', y = ' + y + ', z = ' + z +'\nThe smallest number is z = ' + z);
    }
} else if (y < z) {
    alert('x = ' + x + ', y = ' + y + ', z = ' + z +'\nThe smallest number is y = ' + y);
} else {
    alert('x = ' + x + ', y = ' + y + ', z = ' + z +'\nThe smallest number is z = ' + z);
}
