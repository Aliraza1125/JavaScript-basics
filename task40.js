//Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.  


function checkNum(num1,num2)
{
    sum = num1 + num2;
    diff = num1 - num2;

    if(num1 === 8 || num2 === 8 ||sum === 8 || diff === 8)
    {
        console.log("true")
        return true ;
    }
    else{
        console.log("false")
        return false;
    }
}

checkNum(9,9);

