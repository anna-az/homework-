/* Task 3

Создайте объект person, описывающий персону, с произвольным количеством произвольных полей. 
Запустите цикл, в котором через prompt запрашивается имя свойства. 
С помощью оператора in или typeof проверьте наличие в объекте этого свойства, и выведите его на экран. 
Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt. 
Выйти из цикла и закончить проверки можно с помощью клавиши Cancel окна prompt.
*/
const person = {};

while(true) {
    let userKey = prompt('Your property', '');
    if(userKey === null) break;

    if(userKey in person) {
        alert(person[userKey]);
    } else {
        let userValue = prompt('Your value property \"'+ userKey +'\"', '');
        person[userKey] = userValue;
    }
}

console.log(person);

/* Task 4

Запустите бесконечный цикл. 
В цикле вызывайте prompt, в котором пишется либо delete, либо update. 
В зависимости от указанного действия, удаляйте или добавляйте (редактируйте) свойство в объекте персоны (которая уже имеет телефон). 
Какое именно свойство удалять или добавлять - также читается из prompt. 
Какое значение будет у добавленного свойства - тоже берется из prompt. 
При нажатии на Отмена при появлении prompt редактирование person заканчивается. 
И обновленные данные распечатываются в консоли.
*/

while(true) {
    let deleteOrUpdate = prompt('Delete or update?', '');
    if (deleteOrUpdate === null)  break;
    let key = prompt('What property do you want to ' + deleteOrUpdate + '?', '');
    if (key === null) break;

    if(deleteOrUpdate === 'delete') {
        if(key in person) {
            delete person[key];
            alert('Property \"' + key + '\" is deleted');
        } else {
            alert('There is no such property');
        }
    } else {
        let changes = prompt('Your new value for property \"' + key + '\"');
        if(changes === null) break;
        if(key in person) {
            person[key] = changes;
            alert('Property \"' + key + '\" is updated');
        } else {
            person[key] = changes;
            alert ('Property \"' + key + '\": \"' +person[key] +'\" is added');
        }
    }

}

console.log(person);

/* Task 5

Динамически (скриптом) создайте HTML элемент <dl>. 
Переберите в цикле (for..in) сгенерированный ранее объект person, добавляя dt - для имени свойства и dd - для значения свойства (работа с DOM - с использованием методов Native JS).
*/

const $dl = $('<dl>').appendTo('body');

for (let key in person) {
	$('<dt>')
		.appendTo($dl)
		.text(key || 'Key');
	$('<dd>')
		.appendTo($dl)
        .text(person[key] || '-');
}


/*
Task 6

Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, прочитанными из prompt (например: brand, model, resolution, color...). 
Добавьте этот гаджет персоне, созданной ранее. 
После этого создайте независимую копию объекта person, не используя встроенный метод Object.assign и JSON.parse, то есть перебором свойств.
*/
const phoneFeatures = {};

while (true) {
    let phoneKey = prompt('Enter phone property', '');
    if(phoneKey === null) break;
    let phoneValue = prompt('Enter value of ' + phoneKey, '');
    if(phoneValue === null) break;
    
    phoneFeatures[phoneKey] = phoneValue;
}

person.phone = phoneFeatures;
console.log(person);


const personCopy = {};

for (let key in person) {
    if(person[key] === 'object') {
        for(let field in person[key]) {
            personCopy[key][field] = person[key][field];
        }
    } else {
        personCopy[key] = person[key];
    }
}
console.log(personCopy);

/*
Task 7

С помощью деструктуризации сохраните свойство phone объекта-копии в переменную с именем gadget. 
Добавьте поля объекта gadget в созданный ранее список <dl>
*/

let {phone:gadget} = personCopy ;

console.log(gadget);

for (let key in gadget) {
	$('<dt>')
		.appendTo($dl)
		.text(key || 'Key');
	$('<dd>')
		.appendTo($dl)
        .text(gadget[key] || '-');
}