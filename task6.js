// Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
//Example string : 'Web Development Tutorial'
//Expected Output : 'Development'

function longestWord(str)
{
    let newString = str.split(' ')
    let longest=""

    for(let i=0 ;i< newString.length;i++)
    {
        if(newString[i].length>longest.length)
        {
            longest = newString[i];
        }
    }
    return longest;
    
}

console.log(longestWord('web development Tutorial'));