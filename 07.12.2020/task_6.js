/*
Task 6

Напишите функцию checkNumber, которая получает на вход как параметр массив любых значений и возвращает true, если все элементы - числа, и false - если в массиве хотя бы  одно не число. 
Для проверки массива используйте метод every или some

console.log( checkNumber([1, 2, '3', 'a']) ); // false
console.log( checkNumber([1, 2, '3', '4']) ); // true

*/


function checkNumber(arr) {
    return arr.every(elem => !isNaN(elem));
}
/*
function checkNumber(arr) {
    return arr.some(elem => isNaN(elem)) ? false : true;
}
*/

console.log( checkNumber ([1, 2, '3', 'a']) );
console.log( checkNumber ([1, 2, '3', '4']) );