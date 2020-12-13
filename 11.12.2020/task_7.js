/*
Task 7

Напишите функцию concat, которая соединяет две строки, разделенные каким-то символом: 
разделитель и строки передаются в параметрах функции. 
Используя карринг, создайте новую функцию hello, которая которая выводит приветствие тому, кто передан в ее параметре:

hello('World'); // Hello World
hello('John'); // Hello John

*/

function concat(string_one, separator, string_two) {
    let result = string_one + separator + string_two;
    alert(result);
}

hello = concat.bind(null, 'Hello', ' ');

hello('World'); 
hello('John'); 