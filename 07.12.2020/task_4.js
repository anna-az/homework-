/*
Task 4

Напишите функцию, которая возвращает куб переданного числа, аналог Math.pow(x, 3) – a) используя цикл b) используя рекурсию:

console.log( cube(2) ); // 8
*/


// Способ a)
/*
function cube(number) {
    let result = 1;
    for (let i = 0; i < 3; i++) {
        result *= number;
    }
    return result;
}
console.log( cube(2) );
*/


// Способ b)
function cube(number, poower = 1) {
    return poower <3 ? number * cube(number, poower + 1) : number;
}
console.log( cube(2) );