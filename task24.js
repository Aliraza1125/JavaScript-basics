//Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.  

function changgePosition(str)
{
    newString =   str.charAt(str[0])  + " " + str  + " " +  str.charAt(str[0]) ;

    console.log(newString);
}

changgePosition("w3resources");