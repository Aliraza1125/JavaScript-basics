// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
//Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
//Example string : 'The quick brown fox'
//Expected Output : 5

function countVowels(str,vowels)
{
   let strarr = str.split("")
    let nvowels = vowels.split("")
    let count=0;

    for(let i=0;i<strarr.length;i++)
    {
        for(let j=0;j<nvowels.length;j++)
        {
            if(strarr[i]===nvowels[j])
            {
                count++;
            }
        }
    }
return count;
}

console.log(countVowels("The quick brown fox","aeiou"))