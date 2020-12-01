/*
Task 5

Создайте пустой массив. 
В цикле до n на каждой итерации запускайте prompt для ввода любых символов, полученное значение добавляйте в конец созданного массива. 
После выхода из цикла посчитайте сумму всех чисел массива и выведите в alert полученный результат.
*/

const arr = [];
while (true) {
    let item = prompt('Enter your value', '');
    if (item === null) break;
    arr.push(item);
}
let summ = 0;
for (let key of arr) {
    if(!isNaN(+key)) {
        summ += Number(key);
    }
}
alert(summ);