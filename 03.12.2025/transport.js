class Transport {
    constructor(name) {
        if (new.target === Transport) {
            throw new Error("Cannot instantiate abstract class Transport directly.");
        }
        this.name = name;
    }
    move() {
        throw new Error("Method move() must be implemented.");
    }
    maxSpeed() {
        throw new Error("Method maxSpeed() must be implemented.");
    }
    info() {
        console.log(`this transport is ${this.name} and its max speed is ${this.maxSpeed()}`);
        console.log()
    }
}
const fuelMixin = {
    fuel: 0,
    refuel(amount) {
        if(amount > 0) this.fuel += amount;
        console.log('Current fuel:', this.fuel);
    },
    consume(amount) {
        (amount > 0 && this.fuel >= amount) ? this.fuel -= amount : console.log('Not enough fuel.');
    }
}

class Car extends Transport {
    move() {
        console.log("Tha car drives on the road.");
        this.consume(10);
        this.info();
    }
    maxSpeed() {
        return 200;
    }
}
class Plane extends Transport {
    move() {
        console.log("The plane soars through the sky.");
        this.consume(100);
        this.info();
    }
    maxSpeed() {
        return 900;
    }
}
class Ship extends Transport {

    move() {
        console.log("The ship sails across the sea.");
        this.consume(70);
        this.info();
    }
    maxSpeed() {
        return 80;
    }
}
Object.assign(Car.prototype, fuelMixin);
Object.assign(Plane.prototype, fuelMixin);
Object.assign(Ship.prototype, fuelMixin);

const car = new Car("AUDI");
const plane = new Plane("BOING735");
const ship = new Ship("TITANIC");

car.refuel(20);
car.move();
plane.refuel(500);
plane.move();
ship.refuel(300);
ship.move();
