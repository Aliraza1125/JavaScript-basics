//Write a JavaScript program to find the Armstrong numbers of 3 digits.
//Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.

function armstrongNumber(num) {
    const numStr = num.toString();
    const numDigits = numStr.length;
    if (numDigits !== 3) {
        return false;
    }
    
    let sum = 0;
    for (let i = 0; i < numDigits; i++) {
        sum += Math.pow(parseInt(numStr[i]), 3);
    }
    
    return sum === num;
}

// Find and print Armstrong numbers of 3 digits
for (let num = 100; num < 1000; num++) {
    if (armstrongNumber(num)) {
        console.log(num);
    }
}
