/*
Task 2

В синтаксисе ES6 напишите класс Warrior для создания игроков “файтинга”. 
Игроки должны иметь свойство health - которое определяет базовые боевые возможности игрока (выносливость), 
и power - сила удара. 
Оба свойства определяются при создании экземпляра класса. 
Также игрок должен иметь метод hit для нанесения удара другому игроку. 
При нанесении удара “жертва” теряет энергии (health) соответственно значению power игрока, который наносит удар. 
Также все игроки имеют возможность лечиться - метод heal.
Добавляйте другие методы и свойства на свое усмотрение - что считаете нужным.
Создайте несколько (минимум два) экземпляров класса Warrior с разными способностями и возможностями. 
И напишите пример боя, используя соответствующие методы и свойства.
*/

class Warrior {
    constructor(name, health, power) {
        this.name = name.trim();
        this.health = Number(health);
        this.power = Number(power);
        this.maxHealth = Number(health);
    }

    hit() {
        this === player1 ? this.rival = player2 : this.rival = player1;
        if(this.health <= 0 || this.rival.health <= 0) return;
        this.rival.health -= this.power;
        this.text = `${this.name} hit ${this.rival.name} with a power of ${this.power} and now ${this.rival.name} has ${this.rival.health < 0 ? 0 : this.rival.health} health`;
        display.addTagP(this.text);
        if(this.rival.health <=0) {
            this.text = `Game over! ${this.name} won!`;
            this.rival.health = 0;
            display.addTagP(this.text);
            display.displayEnd(this.text);
        } else {
            display.displayPlayer(this.name);
        }
        display.displayStatus();
        return this;
    }

    heal() {
        console.log(this.maxHealth - 20, this.health);
        this.health = this.health < (this.maxHealth - 20) ? this.health += 20 :  this.maxHealth;
        this.text = `${this.name} drank a magic potion that added 20 to his health. ${this.name} is now ${this.health} health.\n${this.name} can do one more thing`;
        display.addTagP(this.text);
        this.id = this instanceof FirstPlayer ? 'heal1' : 'heal2';
        display.hideButton(this.id);
        display.displayStatus();
        }
}

class FirstPlayer extends Warrior {
    constructor(name = 'Player 1', health, power, extraPower) {
        super(name, health, power);
        this.extraPower = extraPower;
        if(this.extraPower) {
            this.maxHealth = this.maxHealth - this.power;
            this.health = this.health - this.power;
        }
    }

    extra() {
        console.log(this.extraPower)
        if(this.extraPower) {
            this.text = `${this.name} used his "Double Hit" ability. He hit ${player2.name} 2 times:`;
            display.addTagP(this.text);
            this.hit();
            this.hit(); 
            display.displayPlayer(this.name);
            display.hideButton('extra1');
            display.displayStatus();
        }
    }
    
}

class SecondPlayer extends Warrior {
    constructor(name = 'Player 2', health, power, extraPower) {
        super(name, health, power);
        this.extraPower = extraPower;
        this.power = this.extraPower ? this.power - 5 : this.power;
    }

    extra() {
        if(this.extraPower) {
            this.text = `${this.name} used his "Additional Heal" ability:`;
            display.addTagP(this.text);
            this.heal();
            display.hideButton('extra2');
            display.displayStatus();
        }
    }

}


class Display {
    addTagP(text) {
        let pElement = document.createElement('p');
        pElement.innerText = text;
        document.getElementById('history').append(pElement);
    }

    hideButton(id) {
        document.getElementById(id).style.display = 'none';
        if(id === 'heal2' && player2.extraPower) {
            document.getElementById(id).style.display = 'none';
            document.getElementById('extra2').style.display = 'inline-block'
        }
    }

    displayPlayer(player) {
        if(player === player1.name) {
            console.log('true');
            document.getElementById('player1').style.display = 'none';
            document.getElementById('player2').style.display = 'block';
        } else {
            console.log(player);
            document.getElementById('player2').style.display = 'none';
            document.getElementById('player1').style.display = 'block';
        }
    }

    displayNameInTagP() {
        let p1 = document.getElementsByClassName('name1');
        let p2 = document.getElementsByClassName('name2');
        for(let i of p1) {
            i.innerText = player1.name
        }
        for(let j of p2) {
            j.innerText = player2.name
        }
    }

    displayStatus() {
        document.getElementById('player1_health').innerText = player1.health;
        document.getElementById('player2_health').innerText = player2.health;
        document.getElementById('player1_power').innerText = player1.power;
        document.getElementById('player2_power').innerText = player2.power;
    }
    displayExtra() {
        if(!player1.extraPower) document.getElementById('extra1').style.display = 'none';
        document.getElementById('extra2').style.display = 'none';
    }

    displayEnd(text) {
       document.getElementById('player1').style.display = 'none';
       document.getElementById('player2').style.display = 'none';
       document.getElementById('game_over').style.display = 'block';
       document.getElementById('game_over').innerText = text;
    }
}


let name1 = prompt('First player name:', 'John'),
    health1 = prompt(`${name1}'s health:`, '100'),
    power1 = prompt(`${name1}'s power:`, '20'),
    extra1 = confirm(`Do you want to add a "Double Hit" feature to ${name1}?\nThis will reduce his health by ${power1} (power value)`),
    name2 = prompt('Second player name:', 'Harry'),
    health2 = prompt(`${name2}'s health:`, '90'),
    power2 = prompt(`${name2}'s power:`, '25'),
    extra2 = confirm(`Do you want to add a "Additional Heal" feature to ${name2}?\nThis will reduce his power by 5`);
    
let player1 = new FirstPlayer(name1, health1, power1, extra1);
let player2 = new SecondPlayer(name2, health2, power2, extra2);
let display = new Display();

alert('FIGHT!');
display.displayNameInTagP();
display.displayStatus();
display.displayExtra();

