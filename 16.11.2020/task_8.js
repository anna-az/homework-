/*
Task 8

Напишите калькулятор для конвертации единиц измерения количества информации (байт, килобайт, мегабайт, гигабайт). 
Значения считаются из prompt, результаты отображаются в alert. 
Используйте константы там, где это логически оправдано.
*/

var unit = prompt ('Specify your measurement value:\n1 - byte\n2 - kilobyte\n3 - megabyte\n4 - gigabyte', '1');
var value = prompt('Enter value');
unit = (unit - 1)*3;
var byteShow = value * Math.pow(10, (unit));
var kbShow = value * Math.pow(10, (unit-3));
var mbShow = value * Math.pow(10, (unit-6));
var gbShow = value * Math.pow(10, (unit-9));
alert('Byte: ' + byteShow + '\nKilobyte: ' + kbShow + '\nMegabyte: ' + mbShow + '\nGigabyte: ' + gbShow);