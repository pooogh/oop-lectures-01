import setTribe from "./utility.js";

// абстрактный класс
class TribeMember {
    // конструктор для создания объекта класса
    constructor(name) {
        // this - указатель на конкретный объект класса
        this.name = name;
        this.age = Math.round(Math.random() * 100);
        this.health = Math.round(Math.random() * 100);
        this.damage = 1 + Math.round(Math.random() * 10);
        this.iq = Math.round(Math.random() * 20);
    }

    getInfo() {
        console.log(`${this.name} в возрасте ${this.age} лет имеет ${this.health} здоровья и наносит ${this.damage} урона. IQ ${this.iq}`)
    }

    takeDamage(damage) {
        this.health -= damage;
        if(this.health <= 0) {
            console.log(`${this.name} умерли;(`);
            return true;
        } else {
            console.log(`${this.name} получил ${damage}, осталось ${this.health}`);
            return false;
        }
    }
}

class SigmaBoss extends TribeMember {
    constructor(name) {
        // ф-ция для наследования родителя
        super(name);
        this.weapons = [];
        if (this.iq > 10) {
            this.iq -= 8;
        }
        if (this.health < 60) {
            this.health += 40;
        }
    }

    getInfoWeapon() {
        console.log(`${this.name} имеет оружие: ${this.weapons.map(({name}) => `${name}`).join(', ')}`);
    }

    addWeapon(weapon) {
        this.weapons.push(weapon);
        console.log(`Теперь ${this.name} владеет оружием ${weapon.name}`);
    }

    attack(target) {
        console.log(`${this.name} атакует ${target.name}`);
        if (this.weapons.length === 0) {
            console.log(`${this.name} атакует рукой`);
            target.takeDamage(this.damage);
        } else {
            const mainWeapon = this.weapons.at(0);
            const resultDamage = mainWeapon.damage + this.damage;
            target.takeDamage(resultDamage);
            mainWeapon.use();
            if (mainWeapon.use() ) {
                target.takeDamage(resultDamage);
            } else {
                this.weapons.shift();
                this.attack(target);
            }
        }
    }

}
// Denis.attack(Artem)

// самостоятельно добавьте класс Тумба Юмба
class TumbaUmba extends TribeMember {
    constructor (name) {
        super(name);
        this.tools = [];
        this.dogs = [];
        this.secretPotato = '25 кг картошки';
        if (this.iq < 10) {
            this.iq += 30;
        }
        if (this.health > 40) {
            this.health -= 30;
        }
        if (this.damage > 3) {
            this.damage -= 3;
        }
    }

    getInfoTools() {
        console.log(`${this.name} имеет инструмент: ${this.tools.map(({name}) => `${name}`).join(', ')}`)
    }

    getInfoDogs() {
        console.log(`${this.name} владеет собакой: ${this.dogs.map(({name}) => `${name}`).join(', ')}`)
    }

    addDog(dog) {
        this.dogs.push(dog);
        console.log(`${this.name} теперь владеет ${dog.name}`);
    }

    dogTraining(dog) {
        // const papa = this.dog.filter(({name}) => name === dog);
        const coffeesgod = this.iq / 10;
        if (coffeesgod > 0.51){
            dog.tRENEROFCKA();
        } 
    }

    addTools(tool) {
        this.tools.push(tool);
        console.log(`Теперь ${this.name} владеет инструментом ${tool.name}`);
    }
}

class BattleDogs {
    constructor(name) {
        this.name = name;
        this.health = 5 + Math.round(Math.random() * 25);
        this.trainingLvl = 0;
        this.damage = 5;
    }

    tRENEROFCKA() {
        this.trainingLvl += 1;
    }
}

// класс оружия
class Weapon {
    constructor(name) {
        this.name = name;
        this.durability = 1 + Math.round(Math.random() * 10);
        this.damage = 5 + Math.round(Math.random() * 5);
    }

    use() {
        this.durability -= 1;
        if (this.durability === 0) {
            console.log(`${this.name} сломалось`);
            return false;
        } else {
            console.log(`${this.name} использовалось, осталось ${this.durability} использований`);
            return true;
        }
    }
}
// класс инструментов
class Tools {
    constructor(name) {
        this.name = name;
        this.durability = 1 + Math.round(Math.random() * 20);
        this.damage = 1 + Math.round(Math.random() * 2);
    }

    use() {
        this.durability -= 1;
        if (this.durability === 0) {
            console.log(`${this.name} сломалось`);
        } else {
            console.log(`${this.name} использовалось, осталось ${this.durability} использований`);
        }
    }
}

const Artem = new SigmaBoss('Artem');
const Ivan = new TumbaUmba('Ivan');
const Axe = new Weapon('BattleAxe');
const Sword = new Weapon('Sword');
const Motiga = new Tools('Motiga');

// setTribe(new TribeMember('Ivan'));
Ivan.getInfo();
Ivan.getInfoTools();
Ivan.getInfoDogs();
Ivan.addTools(Motiga);
Ivan.getInfoTools();

Artem.getInfo();
Artem.getInfoWeapon();
Artem.addWeapon(Sword);
Artem.addWeapon(Axe);
Artem.getInfoWeapon();

const Sasha = new BattleDogs('Sasha');
const Anna = new BattleDogs('Anna');
Ivan.addDog(Sasha);
Ivan.getInfoDogs();
console.log(Ivan)
Ivan.dogTraining(Sasha);
console.log(Ivan)