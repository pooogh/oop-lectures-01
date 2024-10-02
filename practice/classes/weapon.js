class Weapon {
  constructor(name) {
    this.name = name;
    this.className = 'Weapon';
    this.durability = 1 + Math.round(Math.random() * 10);
    this.damage = 5 + Math.round(Math.random() * 5);
  }

  use() {
    this.durability -= 1;
    if (this.durability === 0) {
      console.log(`${this.name} сломалось`);
      return false;
    }
    console.log(`${this.name} использовалось, осталось ${this.durability} использований`);
    return true;
  }
}

export default Weapon;
