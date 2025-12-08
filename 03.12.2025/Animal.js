const animal = {
    Flyable: {
         fly() {
        console.log(`${this.name} is flying...`);
    }
},
    Swimmable: {
         swimm() {
        console.log(`${this.name} is swimming...`);
    }
}
}
class Duck {
    constructor() {
        this.name = this.constructor.name;
    }
}
Object.assign(Duck.prototype, animal.Flyable, animal.Swimmable);

class Penguin {
    constructor() {
        this.name = this.constructor.name;
    }
}
Object.assign(Penguin.prototype, animal.Swimmable);

class Eagle {
    constructor() {
        this.name = this.constructor.name;
    }
}
Object.assign(Eagle.prototype, animal.Flyable);

const duck = new Duck();
duck.swimm();
duck.fly();

const penguin = new Penguin();
penguin.swimm();

const eagle = new Eagle();
eagle.fly();