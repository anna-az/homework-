/*
Level Up (method 1)

Создайте структуру(ы) для хранения данных, из которых можно составить таблицу соответствия значениям переменной (value) в логическом контексте (истина, ложь). 
Изобразите на странице.
*/

// В первом способе с нуля создаётся таблица. Стили можно использовать из style.css

const types = [true, false, 1, 0, '', '1', '0', null, undefined, {}, [], NaN];
const typesShow = ['true', 'false', '1', '0', '\"\"', '\"1\"', '\"0\"', 'null', 'undefined', '{}', '[]', 'NaN'];

const tableNode = document.createElement('table');
document.body.appendChild(tableNode);

const trTypes = document.createElement('tr');
tableNode.appendChild(trTypes);
const trColors = document.createElement('tr');
tableNode.appendChild(trColors);

const tdMain = document.createElement('td');
const tdIf = document.createElement('td');
trTypes.appendChild(tdMain).innerText = '';
trColors.appendChild(tdIf).innerText = 'if(value)';

for (let i = 0; i < types.length; i++) {
    
    const tdFirst = document.createElement('td');
    const p = document.createElement('p');
    trTypes.appendChild(tdFirst);
    tdFirst.appendChild(p);
    p.innerText = typesShow[i];
    if(typesShow[i] === 'true' || typesShow[i] === 'false' || typesShow[i] === 'null' || typesShow[i] === 'undefined' || typesShow[i] === 'NaN') 
    {
        p.style.writingMode = 'vertical-lr';
        p.style.margin = 'auto';
    } else {
        p.style.textAlign = 'center';
    } 
    const tdSecond = document.createElement('td');
    trColors.appendChild(tdSecond);

    if(types[i]) {
        tdSecond.style.backgroundColor = '#93c47d';
    } else {
        tdSecond.style.backgroundColor = '#e06666';
    }
}


