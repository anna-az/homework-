/*
Task 4

Не используя методы массива, напишите функцию аналог метода массива push. 
Функция добавляет в конец переданного в параметре массив произвольное количество элементов.
*/

function addElement(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr[i] = arr[i];
    }
    if (arguments.length > 1) {
        for (let j = 1; j < arguments.length; j++) {
            newArr[newArr.length] = arguments[j];
        }
    }

    return newArr;
}


let result = addElement([1, 2, 3, 4, 5], 6, 7, 8);
console.log(result);