/*
Task 10

Переменная lang может принимать два значения: 'ru' и 'en'. 
Переменная day принимает значение от 0 до 6-ти. 
Если lang имеет значение 'ru', то в переменную result запишите название дня недели на русском языке 
в соответствии со значением переменной day (0 – воскресенье, 1 – понедельник, 2 – вторник и т.д.). 
Если же lang имеет значение 'en' – то аналогично, но день недели будет на английском.
*/

let lang = prompt('Enter language (\'ru\' or \'en\')', 'ru');
let day = +prompt('Enter day (0, 1, 2, 3, 4, 5 or 6)', '0');
let result;

if(lang == 'ru') {
    switch(day) {
        case 0: result = 'Воскресенье'; break;
        case 1: result = 'Понедельник'; break;
        case 2: result = 'Вторник'; break;
        case 3: result = 'Среда'; break;
        case 4: result = 'Четверг'; break;
        case 5: result = 'Пятница'; break;
        case 6: result = 'Суббота'; break;
    }
} else if (lang == 'en') {
    switch(day) {
        case 0: result = 'Sunday'; break;
        case 1: result = 'Monday'; break;
        case 2: result = 'Tuesday'; break;
        case 3: result = 'Wednesday'; break;
        case 4: result = 'Thursday'; break;
        case 5: result = 'Friday'; break;
        case 6: result = 'Saturday'; break;
    }
}

alert(result);
