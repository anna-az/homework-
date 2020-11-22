/*
Task 3

У вас и у вашего друга в кармане столько денег, сколько было указано в окнах prompt. 
В зависимости от общей суммы ваших сбережений вы можете полететь на Мальту изучать английский язык или выпить пива. 
С помощью условного оператора определите ваши возможности и отобразите на экране в alert.
*/

let yourMoney = +prompt('How much money do you have?', '');
let friendsMoney = +prompt('How much money does your friend have?', '');
const malta = 40000;
let allMoney = yourMoney + friendsMoney;

if (allMoney >= malta) {
    alert('Let\'s go to Malta to learn English!');
} else {
    alert('Don\'t worry, you can have a beer.');
}
