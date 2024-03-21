//Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.

function divideAndFormat(num1, num2) {
    if (num2 === 0) {
        return "Division by zero is not allowed.";
    }

    let result = (num1 / num2).toLocaleString(); 
    return result;
}

console.log("'" + divideAndFormat(1000000, 3)  +"'"); 
