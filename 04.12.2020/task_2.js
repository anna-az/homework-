/*
Task 2

Напишите функцию, которая в строке, состоящей из чисел, разделенных пробелом, находит максимальное и минимальное и возвращает их 
var result = highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");
console.log( result ); // "542 -214"

*/

function highAndLow(numbers) {
    let arr = numbers.split(' ');
    let minNumber = arr[0]; 
    let maxNumber = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (+arr[i] < minNumber) minNumber = arr[i];
        if (+arr[i] > maxNumber) maxNumber = arr[i];
    }

    return `${maxNumber} ${minNumber}`;
}

var result = highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");
console.log( result );