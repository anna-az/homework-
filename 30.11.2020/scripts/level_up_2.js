/*
Level Up (method 2)

Создайте структуру(ы) для хранения данных, из которых можно составить таблицу соответствия значениям переменной (value) в логическом контексте (истина, ложь). 
Изобразите на странице.
*/

// Если таблица уже есть (index.html) + сначала создаю всё в виде массивов

const types = [true, false, 1, 0, '', '1', '0', null, undefined, {}, [], NaN];
const boolean = [];

for (let i = 0; i < types.length; i++) {   
    if(types[i]) {
        boolean.push(true);
    } else {
        boolean.push(false);
    }
}
console.log(boolean);

 for (let j = 0; j < boolean.length; j++) {
    let td = document.querySelector('#second_row td:nth-child('+(j+2)+')');
    if(boolean[j]) {
        td.style.backgroundColor = '#93c47d';
    } else {
        td.style.backgroundColor = '#e06666';
    }
 }