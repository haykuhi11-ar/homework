//7

function Animal (name) {
    this.name = name;
    
}
// Animal.prototype.eat = function() {
//     console.log(`${this.name} is eating.`);
// }
// function Dog(name, breed) {
//     this.name = name;
//     this.breed = breed;
// }
// Dog.prototype.__proto__ = Animal.prototype;
// Dog.prototype.bark = function() {
//     console.log(`Dog ${this.name} is barking.`);
// };
// const rex = new Dog("Rex", "Shepherd");
// rex.bark();
// rex.eat();

// //8

// console.log(Dog.prototype.constructor === Dog); // true
// console.log(Animal.prototype.constructor === Animal); //true
// console.log(Dog.__proto__ === Animal); // false, Dog.__proto__ --> Function.prototype
// console.log(Object.getPrototypeOf(Dog)); // [Function (anonimus)] Object
// console.log(Dog.__proto__ === Animal.__proto__); // true

//9

function myNew(Constructor, args) {
        const object = Object.create(Constructor.prototype);
        Constructor.call(object, args);
        return  object;
}
const a = myNew(Animal, 'Bobik');
console.log(a);


