//Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

class Shape {
    calculateArea() {
        // This method should be overridden by subclasses
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

class Triangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return 0.5 * this.width * this.height;
    }
}

const circle1 = new Circle(3);
console.log("Area of Circle:", circle1.calculateArea());

const triangle1 = new Triangle(4, 5);
console.log("Area of Triangle:", triangle1.calculateArea());
