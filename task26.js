//Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more. 


function takeLast3Char(str)
{
    if(str.length <3)
    {
        return;
    }
    else {
        newString = str.substring(str.length-3,str.length)   +  " "   + str + " " +  str.substring(str.length-3,str.length) ;
        console.log(newString);
    }
}


takeLast3Char("w3resource");