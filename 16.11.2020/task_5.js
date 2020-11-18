/* 
Task 5

Космический корабль летит с Земли на Луну. Расстояние равно 384,400 км. 
Скорость полета корабля определяется в prompt. 
Рассчитайте, за какое время ваш космический корабль доберется до Луны.
*/

var speed = +prompt('Spacecraft speed (km/h): ', '29000');
var mins = (384400 / speed).toFixed(2);
mins -= Math.floor(mins);
mins *= 60;
mins = Math.round(mins);
var hours = 384400 / speed;
hours = Math.floor(hours);
alert('It will take ' + hours + ' hours ' + mins + ' mins to get to the moon');