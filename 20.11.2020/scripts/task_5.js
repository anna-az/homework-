/*
Task 5

Чтобы добраться домой, вас устраивают маршрутки номер 7, 225 и 255. 
Какая маршрутка приехала – определяется в prompt. 
Если ваша, то вы едете домой, в противном случае – ожидаете.
*/

let bus = +prompt('Which bus arrived?', '');

if ((bus == 7) || (bus == 225) || (bus == 255)) {
    alert('This is your bus. You can go.');
} else {
    alert('This is not your bus. You still have to wait.');
}