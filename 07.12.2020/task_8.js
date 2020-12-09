/*
Task 8
Замыкания

Используя замыкание, напишите функцию createTimer, которая использует метод performance.now() для получения текущей временной метки и служит для замера времени выполнения другого кода:

var timer = createTimer();
alert('!');  // код, время выполнения которого нужно измерить
alert( timer() ); // время в мкс от начала выполнения createTimer() до момента вызова timer()

*/

function createTimer() {
    let timeStart = performance.now();
    return function() {
       return performance.now() - timeStart;
    };
}

var timer = createTimer();
alert('!');
alert(timer());