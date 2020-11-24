/*
Task 6

Используя вложенные циклы, сформируйте строку чередованием символов . и # таким образом, чтобы получилась шахматный узор. 
Для перевода строки используйте символ \n. Код должен поддерживать легкое изменение размеров доски.
.#.#.#.#.#.#
#.#.#.#.#.#.
.#.#.#.#.#.#
#.#.#.#.#.#.
.#.#.#.#.#.#

*/

while (true) {
    var width = prompt('Width: ', '');
    if (width === null) break;
    var height = prompt('Height: ', '');
    if (height === null) break;
    height = +height;
    width = +width * 2;
    var string = '';
    for (let j = 0; j < height; j++) {
        let row = 0;    
        if (j%2 !== 0) row = 1;
        for(let i = 0; i < width; i++) {
            if((i+row)%2 === 0) {
                string += '.';
            } else {
                string += '#';
            }
        }
        string += '\n';
    }
    alert(string);
}