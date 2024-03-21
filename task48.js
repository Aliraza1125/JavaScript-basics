// Write a JavaScript program to reverse a given string. 


function reverseString(str)
{
    let reverseString = "";
    for(let i=str.length-1;i>=0 ;i--)
    {
        reverseString= reverseString + str[i];
    }
    console.log(reverseString);
}

reverseString("aliraza");