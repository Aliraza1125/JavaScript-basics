// Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range.  


function checkRange(num1,num2,num3)
{
    if(num1>=50 && num1 <=99 || num2>=50 && num2<=99  || num3>=50 && num3<=99  )
    {
        console.log(" numbers are in range of 55 ... 99")
        return true;;
    }
    else{
        console.log(" number not are in range of 55 ... 99")

        return false;
    }
}

checkRange(75 ,73,3);