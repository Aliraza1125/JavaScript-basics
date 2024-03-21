//6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  

let year = 1905;

if(year % 4  === 0 || year % 100 === 0 || year % 400 === 0)
{
    console.log('Leap year')
}
else{
    console.log("not leap year");
}