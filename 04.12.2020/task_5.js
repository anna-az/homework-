/*
Task 5

Напишите функцию аналог метода ES6 Object.assign(). 
Первый параметр функции - целевой объект, поля которого будут изменены или расширены. 
Остальные параметры - объекты-источники, полями которых будет расширяться целевой объект.

var source = {firstname: 'Tom', age: 10}
var s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
console.log(source); // {firstname: 'John', age: 10, lastname: 'Doe'}
console.log(s); // {firstname: 'John', age: 10, lastname: 'Doe'}

*/

function extend(info) {
    for(var i = 1; i < arguments.length; i++) {
        for (let key in arguments[i]) {
            info[key] = arguments[i][key];
        }
    }
    return info;
}

var source = {firstname: 'Tom', age: 10}
var s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
console.log(source); // {firstname: 'John', age: 10, lastname: 'Doe'}
console.log(s); // {firstname: 'John', age: 10, lastname: 'Doe'}