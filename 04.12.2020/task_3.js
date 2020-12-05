/*
Task 3

Не используя методы массива, напишите функцию аналог метода shift. 
Функция удаляет из переданного в параметре массива первый элемент и возвращает новый массив.

*/

function deleteFirstElement(arr) {
    let newArr = [];
    for (let i = 1; i < arr.length; i++) {
        newArr[i-1] = arr[i];
    }
    
    return newArr;
}

var result = deleteFirstElement([1, 2, 3, 4, 5, 6, 7]);
console.log(result);