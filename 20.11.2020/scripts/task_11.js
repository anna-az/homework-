/*
Task 11

Используя поиск по селекторам из раздела “Селекторы” справочника и jQuery-функцию css, 
задайте стили элементам таблицы в блоке #content. Редактировать HTML нельзя, CSS не нужен. 
Последовательность команд:


1. Таблица расположена посредине страницы, расстояния между ее ячейками нет
2. Все ячейки имеют ширину-высоту 10px, цвет фона #eee, границу 1px solid #000
3. Фон в ячейках первых шести строк –#106B63
4. Фон в ячейках строк 7-9 –#E7C610
5. Фон в ячейках строк 10-12 – #C64A08
6. Фон в ячейках строк 13-15 –#B43100
7. Фон в ячейках всех оставшихся строк –#102173
8. У некоторых ячеек есть класс none, задайте на jQuery стиль для этого класса: фона нет, границы нет

*/

$('#root td').css({
    width: '10px',
    height: '10px',   
    background: '#eee',
    border: '1px solid #000'
});


$('#root tr:nth-child(n+1):nth-child(-n+6) td').css('background', '#106B63');

$('#root tr:nth-child(n+7):nth-child(-n+9) td').css('background', '#E7C610');

$('#root tr:nth-child(n+10):nth-child(-n+12) td').css('background', '#C64A08');

$('#root tr:nth-child(n+13):nth-child(-n+15) td').css('background', '#B43100');

$('#root tr:nth-child(15) ~ tr td').css('background', '#102173');

$('#root .none').css({
    background: 'none',
    border: 'none'
});