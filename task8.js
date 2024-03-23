//  Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not using recursion.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function checkPrime(n)
{
    if(n===0)
    {
        return false;
    }
    else if(n===1)
    {
        return false;
    }
    else{
        for(let x=2;x<n;x++)
        {
            if(n%x === 0)
            {
                return false;
            }
            
        }
        console.log(`${n} is a prime number`)
        return true;
    }
}


console.log(checkPrime(10))