/*
Task 2

Напишите функцию ask с тремя параметрами: question, defaultValue, callback. 
Функция ask запрашивает с помощью prompt вопрос question, ответ по умолчанию - defaultValue. 
Что делать с полученным значением - определяет callback

ask('How old are you?', '10', function(response) {
	console.log(response);
});

*/

function ask(question, defaultValue, callback) {
    let answer = prompt(question, defaultValue);
    callback(answer);
}
ask('How old are you?', '10', function(response) {
    console.log(response);
});