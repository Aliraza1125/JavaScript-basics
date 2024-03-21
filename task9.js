//Write a JavaScript program to calculate the days left before Christmas.  

function calchrismisdate()
{

    let today = new Date();
    
    let currentyear = today.getFullYear();
    
    let Christmasdate = new Date(currentyear,11,25);
    
    if(today.getMonth()===11 && today.getDate()>25){
        Christmasdate.setFullYear(currentyear+1);
    }

let timeDifference = Christmasdate.getTime() - today.getTime();

let daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
return daysLeft;

}


console.log("Days Left in chrismis are " + calchrismisdate())




