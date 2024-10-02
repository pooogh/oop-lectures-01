import TribeMember from '../tribes.js';

class TumbaUmba extends TribeMember {
  constructor(name) {
    super(name);
    this.className = 'TumbaUmba';
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
    console.log(`${this.name} имеет инструмент: ${this.tools.map(({ name }) => `${name}`).join(', ')}`);
  }

  getInfoDogs() {
    console.log(`${this.name} владеет собакой: ${this.dogs.map(({ name }) => `${name}`).join(', ')}`);
  }

  addDog(dog) {
    this.dogs.push(dog);
    console.log(`${this.name} теперь владеет ${dog.name}`);
  }

  dogTraining(dog) {
    // const papa = this.dog.filter(({name}) => name === dog);
    const coffeesgod = this.iq / 10;
    if (coffeesgod > 0.51) {
      dog.tRENEROFCKA();
    }
  }

  addTools(tool) {
    this.tools.push(tool);
    console.log(`Теперь ${this.name} владеет инструментом ${tool.name}`);
  }
}

export default TumbaUmba;
