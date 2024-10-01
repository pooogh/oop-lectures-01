

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
      console.log(`${this.name} имеет оружие: ${this.weapons.map(({ name }) => `${name}`).join(', ')}`);
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
        if (mainWeapon.use()) {
          target.takeDamage(resultDamage);
        } else {
          this.weapons.shift();
          this.attack(target);
        }
      }
    }
  }