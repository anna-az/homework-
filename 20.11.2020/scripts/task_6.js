/*
Task 6

В переменную day записан текущий день недели. 
Если это не суббота и не воскресенье, выведите в alert сентенцию о необходимости идти на работу.
*/

let data = new Date();
let day = data.getDay();

if((day != 0) && (day != 6)) {
    alert('You have to go to work.');
} else {
    alert('Stay at home.');
}