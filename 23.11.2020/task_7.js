/*
Task 7

С помощью цикла for с пустым телом сформируйте строку, представляющую из себя ряд Фибоначчи: 0 1 1 2 3 5 8 13... 

*/

while (true) {
    var number = prompt('Максимальное число в ряду', '144');
    if(number === null) break;
    number = +number;

    for (var i=0,  j = 1,  k = 1,  res = '0 '; k <= number; res += k+' ', k = i+j, i=j, j=k );
    
    alert(res);
}
