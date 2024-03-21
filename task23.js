// Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.  

function changeposition(str)
{
    newstring = str.charAt(str.length - 1) + str.substring(1, str.length - 1) + str.charAt(str[0]);
    console.log(newstring); 

}

changeposition("w3resource")