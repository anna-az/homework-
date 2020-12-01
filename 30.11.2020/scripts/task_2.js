/*
Task 2

Сгенерируйте массив из N случайных чисел с двумя знаками после запятой. 
Затем переберите массив и распечатайте в консоли значения его элементов, возведенные в пятую степень. 
Для возведения в степень используйте вложенный цикл (не метод Math.pow(), не оператор **).
*/

var arrLength = +prompt('Enter array length', '');
var arr = [];
for (let i = 0; i < arrLength; i++) {
    arr.push(Math.random().toFixed(2))
}
console.log(arr);
for (let key of arr) {
    let power = 1;
    for(let j = 0; j < 5; j++) {
        power *= key;
    }
    console.log(power);
}