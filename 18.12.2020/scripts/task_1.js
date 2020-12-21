/*
Task 1

Добавьте в прототип конструктора Array метод, позволяющий поменять элементы массива местами по индексам. 
Метод изменяет исходный массив

var data = ['a', 'c', 'b'];
data = data.swap(1, 2);
console.log(data); // ['a', 'b', 'c]

*/

Array.prototype.swap = function(firstElement, secondElement) {
    let first = this[firstElement];
    let second = this[secondElement];

    this.splice(firstElement, 1, second);
    this.splice(secondElement, 1, first);
    
    return this;
}

var data = ['a', 'c', 'b'];
data = data.swap(1, 2);
console.log(data); // ['a', 'b', 'c]