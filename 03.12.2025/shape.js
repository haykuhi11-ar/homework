class Shape {
    constructor(color) {
        if (new.target === Shape) {
            throw new Error ("cannot instantiate abstract class Shape directly.");
        } 
        this.color = color;
    } 
    area() {
        throw new Error("Abstract method area().");
    } 
    perimeter() {
        throw new Error("Abstract method perimeter()");
    } 
    describe() {
       const shape_type = this.constructor.name;
       const color = this.color;
       const  area = this.area();
       const perimeter = this.perimeter();
       console.log(`shape type: ${shape_type}, \n color: ${color}, \n area: ${area}, \n perimeter: ${perimeter} `); 
    }
} 
    class Circle extends Shape {
        constructor(radius, color) {
            super(color);
            this.color = color;
            this.radius = radius;
        }
        area() {
            return Math.PI * this.radius * this.radius;
        } 
        perimeter() {
            return 2 * Math.PI * this.radius;
        }

    } 
    class Rectangle extends Shape {
        constructor( width, height, color) {
            super(color);
            this.color = color;
            this.height = height;
            this.width = width;
        } 
        area() {
            return this.width * this.height;
        } 
        perimeter() {
            return (this.width + this.height) * 2;
        }
    } 
    class Triangle extends Shape {
        constructor(a, b, c, color) {
            super(color);
            this.color = color;
            this.a = a;
            this.b = b;
            this.c = c;
        } 
        area() {
            return (this.a + this.b + this.c) / 2;
        } 
        perimeter() {
            return this.a + this.b + this.c;
        }
    } 
    const circle = new Circle(50, "red");
    const rectangle = new Rectangle(23, 12, "blue");
    const triangle = new Triangle(3, 6, 9, "orange");
    circle.describe();
    rectangle.describe();
    triangle.describe();