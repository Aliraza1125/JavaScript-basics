//0. Write a JavaScript program to create a new string without the first and last characters of a given string. 


function splitfirstandlast(str)
{
    let newString = str.substring(1,str.length-1);
    return newString;
}

console.log(splitfirstandlast("aliraza"))