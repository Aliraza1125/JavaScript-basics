//Write a JavaScript program to compute the exponent of a number.  
//Note : The exponent of a number says how many times the base number is used as a factor.
//82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.


function computeExponent(base, exponent) {  
    if (exponent === 0) {
        return 1;
    }
    else {
        return base * computeExponent(base, exponent - 1);
    }
}

const base = 8;
const exponent = 2;
const result = computeExponent(base, exponent);
console.log(`${base} raised to the power of ${exponent} is: ${result}`);
