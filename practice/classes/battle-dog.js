class BattleDog {
  constructor(name) {
    this.name = name;
    this.className = 'BattleDog';
    this.health = 5 + Math.round(Math.random() * 25);
    this.trainingLvl = 0;
    this.damage = 5;
  }

  tRENEROFCKA() {
    this.trainingLvl += 1;
  }

  takeDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      console.log(`${this.name} погиб в бою`);
      return true;
    }
    console.log(`${this.name} получил ${damage} урона, осталось ${this.health} здоровья`);
    return false;
  }

  attack(target) {
    console.log(`${this.name} атакует ${target.name}`);
    if (this.trainingLvl > 0) {
      target.takeDamage(Math.floor(this.damage * (1 + (this.trainingLvl / 10))));
    } else {
      target.takeDamage(this.damage);
    }
  }
}

export default BattleDog;
