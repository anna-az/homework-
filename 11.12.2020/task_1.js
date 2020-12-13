/*
Task 1

Создайте объект calculator с методами:
read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
sum() возвращает сумму этих двух значений
multi() возвращает произведение этих двух значений
diff() возвращает разницу
div() возвращает частное

calculator.read();
alert( calculator.sum() );
alert( calculator.multi() );

*/

const calculator = {
    x: 0,
    y: 0,
    read() {
        this.x = prompt('Enter your first value', '');
        this.y = prompt('Enter your second value', '');
        return this;
    },
    sum() {
        return +this.x + +this.y;
    },
    multi() {
        return +this.x * +this.y;
    },
    diff() {
        return +this.x - +this.y;
    },
    div() {
        return +this.x / +this.y;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.multi() );
alert( calculator.diff() );
alert( calculator.div() );