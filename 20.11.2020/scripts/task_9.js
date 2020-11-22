/*
Task 9

В переменной month хранится текущий месяц (new Date()). 
Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
*/

let date = new Date();
let month = date.getMonth();

switch(month) {
    case 11: 
    case 0: 
    case 1: alert('It\'s winter now.'); break;
    case 2: 
    case 3:
    case 4: alert('It\'s spring now.'); break;
    case 5: 
    case 6:
    case 7: alert('It\'s summer now.'); break;
    case 8:
    case 9: 
    case 10: alert('It\'s autumn now.'); break;
}