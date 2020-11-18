/*
Task 10

На сайте есть три колонки разной высоты, заданной в единицах измерения веб (значения вводятся в prompt в формате “50px”, “20px”...). 
Используя функцию из библиотеки Math, найдите наибольшее значение из трех и покажите его. 
Учтите, что Math.max не работает со строками.
*/

var firstCol = parseInt(prompt('Height of the first column')),
secondCol = parseInt(prompt('Height of the second column')),
thirdCol = parseInt(prompt('Height of the third column'));
alert('Highest value: ' + Math.max(firstCol, secondCol, thirdCol) + 'px');