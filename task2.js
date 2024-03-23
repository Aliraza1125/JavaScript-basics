// Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.


function checkPalindrome(str)
{
    let str2 = str.split('').reverse().join('');
    if(str === str2)
    {
        console.log("string is palindrome")
    }
    else{
        console.log("Not a palindrome")
    }
  
   
}

checkPalindrome("madam")