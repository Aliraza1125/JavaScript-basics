// Write a JavaScript program that checks whether the last digit of three positive integers is the same.  

function checkLastDigit(num1,num2,num3)
{
    ld1 = num1 % 10;
    ld2 = num2 % 10;
    ld3 = num3 % 10;
    console.log(ld1 )
    console.log(ld2 )
    console.log(ld2 )

    if(ld1===ld2 && ld2===ld3)
    {
        console.log(`Last Digit of three positive number ${num1} ${num2} and ${num3} are same`)
    }
    else{
        console.log(`Last Digit of three positive number ${num1} ${num2} and ${num3} are  not same`)

    }
}

checkLastDigit(23,43,53);