/*
Task 1

Создайте функцию p и a, которые будут служить короткими именами для prompt и alert соответственно, то есть запрашивать окно с полем ввода и выводить любое пользовательское сообщение в стандартном модальном окне. 
Напишите функцию d, которая будет служить коротким именем для debugger, то есть запускать процесс отладки. 
Используя эти псевдонимы получите значение из prompt и отобразите в alert. 
А процесс работы скрипта проконтролируйте с помощью функции, которая служит для дебага.

d();
let name = p( 'Enter your name', '');
a(name);

a( 'Hello World' );

*/

let p = prompt;
let a = alert;
let d = function () {debugger;}; // let d = () => {debugger;};

d();
let name = p('Enter your name', '');
a(name);
a('Hello word');