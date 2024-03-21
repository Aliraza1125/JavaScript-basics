//59. Write a JavaScript program to extract the first half of a even string.  

function firsthalf(str)
{
    if(str.length % 2 === 0 )
    {
        let newString = str.substring(0, str.length/2);
        return newString;
    }
    else{
        return false;
    }
}


console.log('First Half of String is :' + firsthalf("alirazaa"))