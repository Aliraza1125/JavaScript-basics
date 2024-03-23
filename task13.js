// Write a JavaScript function to compute the factors of a positive integer.

function factors(num)
{
    let factorArr=[]

    for (let x=1;x<=num;x++)
    {
        if(num % x === 0)
        {
            factorArr.push(x)
        }
    }
    return factorArr;
 
 

}

console.log(factors(18))