/*
Task 5

Придумайте алгоритм расчета суммы всех фактических параметров функции с использованием только рекурсии:

console.log( sum(1, 2, 3, 4, 5) ); // 15

*/

function sum(summa, ...rest) {
    if(typeof(rest[0]) === "number") return rest.length ? summa +sum(rest[0], rest.slice(1)) : 0;
    else {return rest[0].length ? (summa +  sum(rest[0][0], rest[0].slice(1))) : summa;}
}
console.log( sum(1, 2, 3, 4, 5) );