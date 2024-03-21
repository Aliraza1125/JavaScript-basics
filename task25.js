// Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7

function checkmultiple(num)
{
    if(num<0)
    {
        return;
    }
    else{
        if(num%3===0 && num%7===0)
        {
            console.log("number is multiple of 3 and 7");
        }
        else if(num%7===0)
        {
            console.log("Number is multiple of 7")
        } 
         else if(num%3===0)
        {
            console.log("Number is multiple of 7")
        }
        else{
            console.log("Number is not multiple of both")
        }
    }
}


checkmultiple(2);