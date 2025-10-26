class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;  
    }
area() {
    return this.width * this.height;
}
perimeter() {
    return 2 * (this.width + this.height);
}
}
const rectangle = new Rectangle(4,3);
console.log(rectangle.area());
console.log(rectangle.perimeter());