// Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.  

function checkNum(num1, num2, num3) {
    if (num1 === num2 && num2 === num3) {
        return 30; 
    } else if (num1 === num2 || num1 === num3 || num2 === num3) {
        return 40; 
    } else {
        return 20; 
    }
}


console.log(checkNum(5, 5, 5)); 

