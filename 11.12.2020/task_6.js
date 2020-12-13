/*
Task 6

Создайте объект user с полем name. Создайте функцию format с параметрами start и end:


function format(start, end) {
    console.log(start + this.name + end);
}

Привяжите функцию format() к объекту user таким образом, чтобы ее вызов возвращал отформатированное имя пользователя


userFormat('<<<', '>>>'); // <<<John>>>

Реализуйте 2 версии текущего задания, используя:
1. Анонимную функцию;
2. Метод bind().

*/

const user = {
    name: 'John'
};

function format(start, end) {
    console.log(start + this.name + end);
}

// Анонимная функция
/*
function userFormat(x, y) {
    user.func = format;
 	return format(x, y);
}
*/

// Метод bind()
let userFormat = format.bind(user);



userFormat('<<<', '>>>');
