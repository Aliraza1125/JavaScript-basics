//Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
//Sample numbers : 3, -7, 2
//Output : The sign is -

function signOfThree(num1,num2,num3)
{
    if(num1<0 || num2<0 || num3<0)
    {
        alert("the sign is -")
    }
    else{
        alert("sign is +")
    }
}