//Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.  


function checkRange(num1,num2)
{
    if(num1>=50 && num1 <=99 && num2>=50 && num2<=99)
    {
        console.log("both number are in range of 55 ... 99")
        return false;
    }
    else{
        console.log("both number not are in range of 55 ... 99")

        return true;
    }
}

checkRange(3 ,65);