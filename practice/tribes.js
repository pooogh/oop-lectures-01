// import setTribe from './utility.js';

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
    console.log(`${this.name} в возрасте ${this.age} лет имеет ${this.health} здоровья и наносит ${this.damage} урона. IQ ${this.iq}`);
  }

  takeDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      console.log(`${this.name} умерли;(`);
      return true;
    }
    console.log(`${this.name} получил ${damage}, осталось ${this.health}`);
    return false;
  }
}

// Denis.attack(Artem)

// самостоятельно добавьте класс Тумба Юмба

// класс оружия

// класс инструментов

export default TribeMember;
// const Artem = new SigmaBoss('Artem');
// const Ivan = new TumbaUmba('Ivan');
// const Axe = new Weapon('BattleAxe');
// const Sword = new Weapon('Sword');
// const Motiga = new Tools('Motiga');

// // setTribe(new TribeMember('Ivan'));
// Ivan.getInfo();
// Ivan.getInfoTools();
// Ivan.getInfoDogs();
// Ivan.addTools(Motiga);
// Ivan.getInfoTools();

// Artem.getInfo();
// Artem.getInfoWeapon();
// Artem.addWeapon(Sword);
// Artem.addWeapon(Axe);
// Artem.getInfoWeapon();

// const Sasha = new BattleDogs('Sasha');
// const Anna = new BattleDogs('Anna');
// Ivan.addDog(Sasha);
// Ivan.getInfoDogs();
// console.log(Ivan);
// Ivan.dogTraining(Sasha);
// console.log(Ivan);
// Sasha.attack(Artem);
