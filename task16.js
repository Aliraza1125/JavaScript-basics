// Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.  

function sumoftwo(num1,num2)
{
    if(num1===num2)
    {
        return num1+num1+num1;
    }
    else{
        return num1+num2;
    }
}

console.log(sumoftwo(21,4));