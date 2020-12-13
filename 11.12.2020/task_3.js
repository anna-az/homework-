/*
Task 3

Создайте объект array с методом инициализации начального значения массива, c методами добавления, удаления последнего элемента массива и методом возврата текущего состояния массива. Используйте концепцию chaining для создания цепочки вызовов.

array
.setValue([1])
.push(2)
.push(3)
.push(3)
.pop();

var currentValue = array.getValue();
console.log(currentValue); // [1, 2, 3]

*/

const array = {
    arr: 0,
    setValue(x) {
        this.arr = x;
        return this;
    },
    push(x) {
        this.arr.push(x);
        return this;
    },
    pop(x) {
        this.arr.pop(x);
        return this;
    },
    getValue() {
        return this.arr;
    }
};

array
.setValue([1])
.push(2)
.push(3)
.push(3)
.pop();

var currentValue = array.getValue();
console.log(currentValue); // [1, 2, 3]