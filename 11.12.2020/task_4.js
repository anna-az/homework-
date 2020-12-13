/*
Task 4

Создайте объект с данными: x, y и методами: getSum, getDiff, getMulti, getDiv. 
Методы объекта ничего не реализуют, а только выводят в alert сообщения вида ‘1 + 1 = 2’ или ‘1 / 0 = Infinity’. 
Для расчетов все методы используют функционал ранее созданного калькулятора.

alert(me.getSum());
alert(me.getDiv());

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

const me = {
    x: 10,
    y: 2,
    getSum() {
        return `${this.x} + ${this.y} = ${calculator.sum.call(me)}`;
    },
    getDiff() {
        return `${this.x} - ${this.y} = ${calculator.diff.call(me)}`;
    },
    getMulti() {
        return `${this.x} * ${this.y} = ${calculator.multi.call(me)}`;
    },
    getDiv() {
        return `${this.x} / ${this.y} = ${calculator.div.call(me)}`;
    }
};

alert(me.getSum());
alert(me.getDiff());
alert(me.getMulti());
alert(me.getDiv());
