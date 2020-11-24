/*
Level Up

Сформируйте строку в виде треугольника-елочки:

.....#.....
....###....
...#####...
..#######..
.#########.
###########

*/


var center = 5;
var row = 1;
var string = '';
for (let j = 0; j < 6; j++) {
    for (let i = 0; i < 12; i++) {
        if (i === center) {
            for (let k = 0; k < row; k++) {
                string += '#';
                i++;
            }
            row+=2;
            center--;
        } else {
            string += '.'; 
        }
    }
    string +='\n';
}