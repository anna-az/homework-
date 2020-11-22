/*
Task 2

По склону Фудзи ползет улитка. Ее скорость определяется в диалоговом окне. 
Проверить и вывести на экран, улитка двигается вперед, назад или остается на месте (скорость (вектор) положительная, отрицательная или ноль).

*/

let speed = prompt('Snail speed', '');

if (speed > 0) {
    alert('Snail is moving forward');
} else if (speed < 0){
    alert('Snail is moving backwards');
} else if (speed == 0){
    alert('Snail stands still');
}
