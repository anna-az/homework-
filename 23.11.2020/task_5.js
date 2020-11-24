/*
Task 5

Сформируйте строку вида ".#.#.#.#.#." чередованием символов . и # в каждой итерации с помощью цикла for. 
После выхода из цикла распечатайте полученную строку.
*/

while (true) {
    var strLength = prompt('Enter string length', '10');
    if(strLength === null) break;
    strLength = +strLength;
    var string = '';
    for(let i = 0; i < strLength; i++) {
        if(i%2 === 0) {
            string += '.';
        } else {
            string += '#';
        }
    }
    alert(string);
}