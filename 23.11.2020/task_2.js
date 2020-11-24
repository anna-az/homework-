/*
Task 2

Напишите цикл с шагом 1, в теле которого распечатываются квадраты каждого четного значения счетчика.
*/

while (true) {
    var number = prompt('Enter max number:', '');
    if (number === null) break;
    number = +number;
    for (let i = 1; i <= number; i++) {
        if (i%2 === 0) {
            console.log(Math.pow(i,2));
        }
    }
}