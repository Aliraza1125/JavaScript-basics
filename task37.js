//Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case. 


function convertString(str)
{
    if(str.length<3)
    {
        newString = str.toUpperCase();
        return newString;
    }
    else
    {
        newString = str.substring(0,3).toLowerCase() + str.substring(3);
        return newString;
    }
}

console.log(convertString("ABCDsdsdb"));