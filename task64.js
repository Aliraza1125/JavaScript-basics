// Write a JavaScript program to concatenate two strings and return the result. If the length of the strings does not match, then remove the characters from the longer string.  

function concatTwoStrings(str1,str2)
{
    let length1= str1.length;
    let length2= str2.length;
    if(length1=== length2)
    {
        return str1 + "  " + str2;
    }
    else{
        if(length1>length2)
        {
            return str1.substring(0,length2) + "  " + str2  
        }
        else{
            return str1 + "  " + str2.substring(0,length1);
        }
    }
}

console.log(`Concatenated Strings are ${concatTwoStrings("aliassas","raza")}`)