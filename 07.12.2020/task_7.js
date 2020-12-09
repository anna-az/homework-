/*
Task 7

“История в картинках”. 
Создайте массив тематически связанных строковых картинок. 
Перебирая массив в цикле с определенной задержкой (setTimeout) выводите на страницу один из элементов массива (одну из картинок). 
Тема - свободная, ограничена только набором доступных строковых картинок.

*/

let arr = ['😴', '😮', '🌃', '🕐', '😒', '🤔', '😏', '🤫', '🧁', '🍰', '🎂', '🍩', '🤤', '🥱', '😪', '😴'];

let divNode = document.createElement('div');
document.body.appendChild(divNode);
divNode.style.cssText = "font-size: 40px; text-align: center; padding: 20px;"; 

function setDelay(key) {
    if(key<arr.length) {
        divNode.innerText = arr[key];
        console.log(arr[key]);
        setTimeout(setDelay, 1000, key+1);
    }
}
setDelay(0);