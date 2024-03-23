// Write a JavaScript function that generates all combinations of a string.
//Example string : 'dog'
//Expected Output : d,do,dog,o,og,g


function checkAllCombinations(str){
    let conmbination = []
    for(let i=0 ;i<str.length;i++)
    {
        for(let j=i+1;j<=str.length;j++)
        {
            let substring = str.slice(i,j)
            conmbination.push(substring);
        }
    }
    return conmbination;

}
let result = checkAllCombinations('dog')
console.log(result)