class Character {
    constructor(name, hp) {
        if (new.target === Character) {
            throw new Error ("Cannot instance class Character directly.");
        } 
        this.name = name;
        this.hp = hp;
    } 
    attack(target) {
        throw new Error("Abstract method attack.");
    } 
    defend(damage) {
        throw new Error("Abstract method defend.");
    } 
    isAlive() { 
        return this.hp > 0;
    }
} 
class Warrior extends Character {

    attack(target) { 
        const damage = 20;
        console.log(`${this.name} attacks ${target.name} for ${damage} damage. \n ${this.name} HP: ${this.hp}`);
        target.defend(damage);
    } 
    defend(damage) { 
        const take_damage = damage - 10;
        this.hp -= take_damage;
        console.log(`${this.name} takes ${take_damage} damage.`);
    }
} 
class Mage extends Character {
   
    attack(target) { 
        const damage = 50;
        console.log(`${this.name} attacks ${target.name} for ${damage} damage. \n ${this.name} HP: ${this.hp}`); 
        target.defend(damage);
    } 
    defend(damage) {
        const take_damage = damage - 20;
        this.hp -= take_damage; 
        console.log(`${this.name} takes ${take_damage} damage after shield.`);
    }
} 
class Archer extends Character {
     
    attack(target) { 
        const damage = 100;
        console.log(`${this.name} attacks ${target.name} for ${damage} damage. \n ${this.name} HP: ${this.hp}`); 
        target.defend(damage);
    } 
    defend(damage) {  
        const take_damage = damage / 2; 
        this.hp -= take_damage; 
        console.log(`${this.name} takes ${take_damage} damage.`);
    }
} 
const warrior = new Warrior("Leon", 150);
const mag = new Mage("Merlin", 80);
const archer = new Archer("Kayl", 100);
console.log("--------START--------");

while(mag.isAlive() && warrior.isAlive() && archer.isAlive()) {
warrior.attack(mag);
mag.attack(warrior);
archer.attack(mag);
mag.attack(archer);
}
console.log("----------END---------");
