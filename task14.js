// Write a JavaScript function to convert an amount into coins.
//Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
//Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
//Output : 25, 10, 10, 1


function convertAmount(amm,coins)
{
    let newArr=[]
    for(let i=0;i<coins.length;i++)
    {
        while(amm>=coins[i])
        {
            newArr.push(coins[i])
            amm-= coins[i]
        }
    }
    return newArr;

}


let ammount = 46;
let coins=[25,10,5,2,1]

console.log(convertAmount(ammount,coins))