//Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter. 


class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    areaOfRectangle() {
        let areaRectangle = this.width * this.height;
        console.log(`Area of Rectangle is : ${areaRectangle}`);
    }

    perimeterOfRectangle() {
        let perimeterRectangle = 2 * (this.width + this.height);
        console.log(`Perimeter of Rectangle is : ${perimeterRectangle}`);
    }
}

const rectangle1 = new Rectangle(2, 4);

rectangle1.areaOfRectangle();
rectangle1.perimeterOfRectangle();
