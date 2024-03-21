// Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.  
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

function increasingNum(num1,num2,num3)
{

    if(num3>num2 && num2>num1)
    {
        console.log(`Number is icreasing in Strict Mode -> ${num1} , ${num2} , ${num3}`)
    }
    else{
        if(num3>=num1 )
        {
            console.log(`Number is Increasing in Soft Mode -> ${num1} , ${num2} , ${num3} `)
        }
        else{
            console.log("false")
        }
    }
}

increasingNum(22,22,31);
