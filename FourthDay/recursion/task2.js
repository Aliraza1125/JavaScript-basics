//Write a JavaScript program to find the greatest common divisor (GCD) of two positive numbers using recursion.  


function gcd(num1, num2) {
    if (num2 === 0) {
        return num1;
    } else {
        return gcd(num2, num1 % num2);
    }
}

const num1 = 24;
const num2 = 36;
const result = gcd(num1, num2);
console.log(`The GCD of ${num1} and ${num2} is: ${result}`);
