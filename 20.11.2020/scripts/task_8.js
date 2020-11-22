/*
Task 8

Создайте две переменные: greeting и lang. Переменная greeting – пустая строка. 
Переменная lang может принимать три значения: 'ru', 'en', 'de' (например, из prompt). 
Если она имеет значение 'ru', то в переменную greeting запишите приветствие на русском языке, 
если имеет значение 'en' – то на английском, если 'de' – на немецком. 
Выведите на экран приветствие в зависимости от значения переменной lang. 
Решите задачу через if-else и через switch-case.
*/


let greeting = '';
let lang = prompt('Enter \'ru\', \'en\' or \'de\'', 'ru');

if (lang == 'ru') {
    greeting = 'Привет!';
} else if (lang == 'en') {
    greeting = 'Hello!';
} else if (lang == 'de') {
    greeting = 'Hallo!';
} 

/*
switch (lang) {
	case 'ru': greeting = 'Привет!'; break;
    case 'en': greeting = 'Hello!'; break;
    case 'de': greeting = 'Hallo!'; break;
}
*/


alert(greeting);