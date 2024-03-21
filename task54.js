// Write a JavaScript program to count the number of vowels in a given string.  

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

console.log(countVowels("aliraza","aeiou"))