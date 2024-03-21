//Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.  

function findlargest(num1,num2)
{
    if (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60)
    {
        if(num1>num2)
        {
            console.log(`${num1} is greater than ${num2}`);
        }
        else{
            console.log(`${num2} is greater than ${num1}`);
        }
    }
    else{
        console.log("Numbers are not in range of 40..60")
    }
}

findlargest(5,56);