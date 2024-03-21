// Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise

function stringCheck(str)
{
    if(str.length>0)
    {
        stringStart = "Java";
        if(str.substring(0,4) === stringStart)
        {
           
            console.log("String Start from Java");
        }
        else{
            console.log("String not Start from Java");
        }
       
    }
    else{
        return ;
    }
}


stringCheck("vaw3resource");