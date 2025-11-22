//10 

// class Car {
//     constructor(mark) {
//         this.mark = mark;
//     }
//     drive() {
//         console.log(`Tha car ${this.mark} is driving.`);
//     }
// }
// console.log(Car.prototype); // {}
// console.log(Object.getOwnPropertyNames(Car.prototype)); // ['constructor', 'drive'] 
// console.log(Object.getOwnPropertyDescriptors(Car.__proto__));  // drive: {
//                                                                 //     value: [Function: drive],
//                                                                 //     writable: true,
//                                                                 //     enumerable: false,
//                                                                 //     configurable: true
//                                                                 //   }
                                                                
                                                                
//11

// class Person { 
//     constructor(name) {
//         this.name = name;
//     }
//     walk() {
//         console.log(`${this.name} is walking.`);
//     }
// }
// class Student extends Person {
//     constructor(name) {
//         super(name);
//     }
//     study() {
//         console.log(`${this.name} is studying.`);
//     }
// }
// const s = new Student("Annet");
// s.walk();
// s.study();
// console.log(Object.getPrototypeOf(Student)); /* class Person -->
//     --> */   console.log(Student.__proto__=== Person);     // true                                                    

// console.log(Object.getPrototypeOf(Student.prototype)); // {}
// console.log(Object.getPrototypeOf(Student.prototype)=== Person.prototype); // true
// console.log(Student.prototype.__proto__); // {}


//12

function vehicle_fn (type) {
    return this.type = type;

}
vehicle_fn.prototype.starting = function() {
    console.log(`${this.type} is starting.`);
}
function car_fn (type, mark) {
    vehicle_fn.call(this, type);
    this.mark = mark;
}
//car_fn.__proto__= vehicle_fn.prototype;
car_fn.prototype = Object.create(vehicle_fn.prototype);
car_fn.prototype.constructor = car_fn;

car_fn.prototype.honking = function() {
    console.log(`${this.mark} is honking.`);
}

class Vehicle {
    constructor(type) {
        this.type = type;
    }
   start() {
         console.log(`${this.type} is starting.`);
    }
}
class Car extends Vehicle {
    constructor(type, mark) {
        super(type);
        this.mark = mark;
    }
    honk() {
         console.log(`${this.mark} is honking.`);
    }
}
 console.log(Object.getOwnPropertyDescriptors(car_fn.prototype));
 console.log(Object.getOwnPropertyNames(car_fn.__proto__));

 console.log(Object.getOwnPropertyDescriptors(vehicle_fn.prototype));
 console.log(Object.getOwnPropertyDescriptors(Vehicle.prototype));
 console.log(Object.getOwnPropertyDescriptors(Car.prototype));
 console.log(Car.prototype.__proto__ === Vehicle.prototype);
 console.log(car_fn.prototype !== vehicle_fn.prototype);
 
 const auto = new Car("Auto", "BMW");
 const tractor = new car_fn("Tractor", "GCB");
 auto.start();
 tractor.starting();
 auto.honk();
 tractor.honking();