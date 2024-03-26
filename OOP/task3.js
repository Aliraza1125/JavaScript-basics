//Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.

class Vehicle{
    constructor(make,model,year)
    {
        this.make=make;
        this.model=model;
        this.year=year;
    }

    displayVehicle()
    {
        console.log(`Make: ${this.make}, Model:${this.model} , Year: ${this.year}`)
    }

}
class Car extends Vehicle{
    constructor(make,model,year,noOfDoors)
    {
        super(make,model,year)
        this.noOfDoors=noOfDoors;
    }

    displayVehicle()
    {
        super.displayVehicle();
        console.log(`No of Doors:${this.noOfDoors}`)
    }

}

const vehicle1 = new Vehicle('Toyota','corolla',2019);

vehicle1.displayVehicle();


const car = new Car('honda','city',2020,4);

car.displayVehicle();