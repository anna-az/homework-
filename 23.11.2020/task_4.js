/*
Task 4

Напишите бесконечный цикл, который прерывается при помощи команды break, когда Math.random() > 0.99. 
Выведите в окно alert случайное число, прервавшее цикл, и количество итераций цикла.
*/

var count = 0;
while(true) {
    count++;
    var rand = Math.random();
    if (rand > 0.99) break;
}
alert('Количество итераций: ' + count + '\nЧисло: ' + rand);