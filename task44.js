// Write a JavaScript program that evaluates three given integers to determine if any one of them is greater than or equal to 20 and less than at least one of the other two.  

function evaluateInteger(num1, num2, num3) {
    if ((num1 >= 20 && num1 < num2 && num1 < num3) ||
        (num2 >= 20 && num2 < num1 && num2 < num3) ||
        (num3 >= 20 && num3 < num1 && num3 < num2)) {
        console.log(" True : At least one number is greater than or equal to 20 and less than at least one of the other two.");
    } else {
        console.log("No number meets the condition.");
    }
}


evaluateInteger(25, 35, 35); 

