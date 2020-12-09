/*
Level Up

Дан массив, элементами которого могут быть любые значения, включая другие массивы. 
Напишите функцию flat, которая рекурсивно “разворачивает” переданный массив на глубину depth, указанную в параметре функции. 
По умолчанию flat поднимает элементы на одну глубину (то есть если depth не указан).

var data1 = [1, 2, [3, 4, [5, 6]]];
flat(data1); // [1, 2, 3, 4, [5, 6]]

var data2 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log( flat(data2, 1) ); // [1, 2, 3, 4, [5, 6, [7, 8, [9, 10]]]]
console.log( flat(data2, 2) ); // [1, 2, 3, 4, 5, 6, [7, 8, [9, 10]]]
console.log( flat(data2, 3) ); // [1, 2, 3, 4, 5, 6, 7, 8, [9, 10]]
console.log( flat(data2, 4) ); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log( flat(data2, 0) ); // [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
console.log( flat(data2, 5) ); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

*/

function flat(arr, depth = 1) {
    let new_arr = [];
    if(depth > 0) {
        for (let key of arr) {
            if(typeof(key) === 'object') { arr = new_arr.concat(flat(key, depth-1));}
            else{ new_arr.push(key); }
        }
    }
    return arr;
}

var data1 = [1, 2, [3, 4, [5, 6]]];
console.log( flat(data1) );

var data2 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log( flat(data2, 1) );
console.log( flat(data2, 2) );
console.log( flat(data2, 3) );
console.log( flat(data2, 4) );

console.log( flat(data2, 0) );
console.log( flat(data2, 5) );