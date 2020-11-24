/*
Task 8

Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до тех пор, пока не будет нажата Отмена. 
После выхода из цикла распечатайте количество введенных чисел, их общую сумму и среднее арифметическое.

*/

var count = 0, summ = 0;
while (true) {
    let number = prompt('Enter number', '');
    if (number === null) break;
    number = +number;
    count++;
    summ += number;
}
alert('Numbers count: ' + count + '\nSumm: ' + summ + '\nAverage: ' + (summ/count));