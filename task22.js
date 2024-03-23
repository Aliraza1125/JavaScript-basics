//Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
//Sample arguments : 'w3resource.com', 'o'
//Expected output : 2

function countOccurence(str,char)
{
    let count=0;
    let newString = str.split('')
    for(let i=0;i<newString.length;i++)
    {
        if(newString[i]=== char)
        {
            count++;
        }
    }
    return count;
}
let char='o'

console.log(`Number of Occurence of ${char} in a string is ${countOccurence('w3resource.com',char)}`)