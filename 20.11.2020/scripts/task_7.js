/*
Task 7

Напишите калькулятор обмена валюты USD-UAH. 
Из первого prompt читается тип операции (регистр символов не имеет значения), 
из второго - сумма, подлежащая конвертации. 
Используя switch, рассчитайте результат конвертации. 
Результат выведите его в alert.
*/

let currency = prompt('USD-UAH or UAH-USD?', 'USD-UAH').toUpperCase();
let value = prompt('How much money do you have?');
let result;

switch (currency) {
	case 'USD-UAH': result = (value * 28.4).toFixed(2) + ' UAH'; break;
	case 'UAH-USD': result = (value / 28.5).toFixed(2) + ' USD'; break;
	default: result = 'Undefined currency';
}

alert(result);