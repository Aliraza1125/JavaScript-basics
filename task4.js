//  Write a JavaScript function that returns a string that has letters in alphabetical order.
//  Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.


function  sortString(str)
{
    if(str.length>0)
    {
        let newString = str.split('').sort().join('');
        return newString;
    }
    else{
        return false;
    }
}

console.log(sortString('webmaster'))