//Current Date and Time
const Currenttime =new Date();
console.log(Currenttime);

let hours = Currenttime.getHours();   
let minutes = Currenttime.getMinutes();   
let seconds = Currenttime.getSeconds(); 


const month =  Currenttime.getMonth();
const date = Currenttime.getDate();
const Year = Currenttime.getFullYear();

    // Determine AM or PM
    let amOrPm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    if (hours > 12) {
      hours -= 12;
    } else if (hours === 0) {
      hours = 12;
    }



const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][Currenttime.getDay()];

console.log(`Today is:  ${day} `);

console.log(`Current Time is:  ${hours} ${amOrPm} : ${minutes} : ${seconds} `);


//TAsk 3
//mm-dd-yyyy, mm/dd/yyyy 
console.log(`  ${month+1}-${date}-${Year}  ${month+1}/${date}/${Year} `);
//dd-mm-yyyy, dd/mm/yyyy

console.log(` ${date}-${month+1}-${Year}  ${date}/${month+1}/${Year} `);

