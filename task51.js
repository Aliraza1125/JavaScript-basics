//  Write a JavaScript application that transforms a provided numerical value into hours and minutes.  

function convertNumIntoHour(num)
{
    let hours = Math.floor(num / 60);
let minutes = num % 60;

    console.log(`${hours} : ${minutes}`)
}


convertNumIntoHour(230)