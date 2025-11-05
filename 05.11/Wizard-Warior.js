class Character {
    constructor (name, health, attackPower) 
    {
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
    }
    attack(target) 
    {
        console.log(`${this.name} attacks ${target.name}`);
        target.takeDamage(this.attackPower);
    }
    takeDamage(amount) 
    {
        this.health -= amount;
    }
    isAlive()
    {
        return this.health > 0;
    }
    toString() 
    {
        console.log(`${this.name}, : Health :, ${this.health}`);
    }
}
class Wizard extends Character {
    constructor(name, health, attackPower, mana) 
    {
        super(name,health,attackPower);
        this.mana = mana;
    }
    castSpell(target) 
    {
        if(target.mana < 20) 
        {   console.log("Can not use super attack -> no mana.")
           return;
        }
        this.mana -= 20;
        console.log(`${this.name} casts a spell on ${target.name} : Mana : ${this.mana}`);
        target.takeDamage(this.attackPower);
    }
        toString()
        {
            return `${this.name}, ': health :', ${this.health}, ': mana :', ${this.mana}`;
        }
}
class Warrior extends Character {
    constructor(name, health, attackPower, armor) 
    {
        super(name,health,attackPower);
        this.armor = armor;
    }
    takeDamage(amount)
    {
        this.armor -= amount;
        if(this.armor <= 0) 
        {
            console.log("The armor is broken!");
            this.health -= amount;
        }
    }
    toString() 
    {
        return `${this.name}, ': health :', ${this.health}, ': armor :', ${this.armor}`;
    }
}
const mag = new Wizard('Mag', 120, 40, 100);
const knight = new Warrior('Knight', 100, 25, 120);
console.log("=== Battle Start ===");
while(mag.isAlive() && knight.isAlive()) 
{
    mag.castSpell(knight);
    console.log(knight.toString());
    if(!knight.isAlive()) break; 
    console.log("---------------------");
    knight.attack(mag);
    if(!mag.isAlive()) break; 
    console.log(mag.toString());
}    
console.log("=== Battle Over ===");
console.log(`Winner: ${mag.isAlive() ? mag.name : knight.name}`);