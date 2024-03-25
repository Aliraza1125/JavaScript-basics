//  Write a JavaScript program that displays the largest integer among two integers.


function largestNumber(num1,num2)
{
    if(num1>num2)
    {
        console.log(`${num1} is  greater than ${num2}`)
    }
    else if(num2>num1)
    {
        console.log(`${num2} is  greater than ${num1}`)
    }
    else{
        console.log(`Both Numbers are same`)
    }
}

largestNumber(3,5)