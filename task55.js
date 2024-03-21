// Write a JavaScript program to check whether a given string contains an equal number of p's and t's.  

function countpptt(str){
    let first="p";
    let second="t";
    let count1=0;
    let count2=0;

    for(let i = 0;i<str.length;i++)
    {
        if(str[i]===first)
        {
            count1++;
        }
        else if(str[i]===second)
        {
            count2++;
        }
        else{
           
        }
    }
    if(count1===count2)
    {
        console.log(`Number of p's ${count1} is equal to Number of t's ${count2}`)
    }
    else{
        console.log(`Number of p's ${count1} is not equal to Number of t's ${count2}`)
    }


}

countpptt("pt")