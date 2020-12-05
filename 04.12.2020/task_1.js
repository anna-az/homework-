/*
Task 1

Напишите функцию, которая в переданной строке ищет самое длинное слово и возвращает его длину.
console.log( findLongestWordLength('Аргентина манит негра') ); // 9

*/

function findLongestWordLength(str) {
    let arr = str.split(' ');
    let longestWord = arr[0].length;
    for (let i = 1; i < arr.length; i++) {
        if(arr[i].length > longestWord) longestWord = arr[i].length;
    }
    return longestWord;
}

console.log( findLongestWordLength('Аргентина манит негра') );