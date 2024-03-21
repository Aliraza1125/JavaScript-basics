// Write a JavaScript program to create a new string using the first and last n characters from a given string. The string length must be larger than or equal to n.  


function concatString(str,n)
{
    if(str.length < n  || n<0)
    {
        return false;
    }
    else{
        let newString = str.substring(0,n) + str.substring(str.length-n,str.length);
        return newString;
    }
}

console.log(`New String is :  ${concatString("al",3)}`)