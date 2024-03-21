//Write a JavaScript program to find the closest value to 100 from two numerical values.  


function closestValue(num1,num2)
{
    diff1 = 100-num1;
    diff2 =100-num2;

    if(diff1 === diff2){
        console.log(" Both Number are closest to 100 as the difference is same");
    }
    else{
        if(diff1>diff2)
        {
            console.log(`${num2} is closest to 100`)
        }
        else{
            console.log(`${num1} is closest to 100`)

        }
    }
}


closestValue(55,55);