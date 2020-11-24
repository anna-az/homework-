/*
Task 3

В окно prompt вводится число. 
Напишите цикл, в котором суммируются все нечетные числа до диапазона, введенного пользователем. 
Результат отобразите в окне alert.

*/


while(true) {
    var number = prompt('Enter max number:', '');
    if (number === null) break;
    number = +number;
    var summ = 0;
    for (var i = 1; i <= number; i++) {
        if (i%2 !== 0) {
            summ += i;
        }
    }
    alert(summ);
}