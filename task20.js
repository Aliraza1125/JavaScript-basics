// Write a JavaScript program to check two given integers whether one is positive and another one is negative.  

function ispositiveandnegatice(num1,num2)
{
    if(num1 >=0 && num2>=0)
    {
        return "Both are positive number";
    }
    else if(num1>=0 && num2<0)
    {
        return `${num1} is Positive and ${num2} is negative`
    }
    else if(num1<0 && num2>=0)
    {
        return `${num1} is Negative and ${num2} is Posituve`
    }
    else{
        return "Both Numbers are negative"
    }
}

console.log(ispositiveandnegatice(-20,-4))