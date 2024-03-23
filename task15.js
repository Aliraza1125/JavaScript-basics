// Write a JavaScript function to compute the value of bn where n is the exponent and b is the base. Accept b and n from the user and display the results.

function computePower(b,n)
{
    let result = Math.pow(b,n)
    console.log(`Result of ${b}^${n} = ${result}`);

}

computePower(2,3);