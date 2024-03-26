//Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.

class Employee{
    constructor(name,salary)
    {
        this.name=name;
        this.salary=salary;
    }

    calculateAnnualSalary()
    {
        return 12* this.salary;
    }
}

class Manager extends Employee{
    constructor(name,salary,department)
    {
        super(name,salary)
        this.department=department;
    }
    calculateAnnualSalary()
    {
        let baseSalary=super.calculateAnnualSalary()
            let bonus=0.1;
            return (bonus*baseSalary)+baseSalary;
    }
}


const Manager1 = new Manager('aliraza',10000,"cs");
console.log(Manager1.calculateAnnualSalary())