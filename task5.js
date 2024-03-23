// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '


function firstUpperCase(str)
{
    let newString = str.split(' ');
    for(let i=0;i<newString.length;i++)
    {
       newString[i] = newString[i].charAt(0).toUpperCase() + newString[i].slice(1);
    }
    return newString.join(' ');

}

console.log(firstUpperCase('the quick brown fox'))