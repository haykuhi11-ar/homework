//4

// const a = {x: 1};
// const b = {y: 2};
// const c = {z: 3};

// b.__proto__ = a;
// c.__proto__ = b;
// console.log(c.x); // 1
// console.log(c.y); // 2
// console.log(c.z); // 3

// console.log(Object.getPrototypeOf(b) === a); // true
// console.log(Object.getPrototypeOf(c) === b); // true


//5

// function MyCreate(proto) {
//    return (function constructor() {
//         function obj() {};
//         obj.prototype = proto;
//         return new obj();
//     })();
// }
// const obj = MyCreate({ a: 10 });
// console.log(obj.a);     // 10
// console.log(Object.getPrototypeOf(obj)); // a: 10


//6

// const obj = Object.create(Object.prototype);
// obj.name = "Annet";
// Object.defineProperty( obj, "age", {
//     value: 23,
//     writable: true,
//     enumerable: true,
//     configurable: true
// } );

// console.log(Object.keys(obj)); // ['name', 'age']
// console.log(Object.getOwnPropertyNames(obj)); // ['name', 'age']



