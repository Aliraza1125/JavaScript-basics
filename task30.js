// Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one. 

function checkString(str){
    if(str.length<6)
    {
        return str;
    }
     else{
        let stringcheck = str.substring(4,10);
        if(stringcheck === "Script")
        {
            newString = str.substring(0,4) + str.substring(10,str.length);
            return newString
        }
        else{
            return str;
        }
     }
}

console.log(checkString("avaScript"))