class Tool {
  constructor(name) {
    this.name = name;
    this.className = 'Tool';
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

export default Tool;
