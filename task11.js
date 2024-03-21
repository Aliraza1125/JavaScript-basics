//Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C


let tempinC = 60;
let tempinF = 45;

if(tempinC){
 let Fahrenheit1 =( tempinC * (9/5)) + 32;
 console.log(tempinC +" is " + Fahrenheit1 );
}

if(tempinF)
{
    let celcius = ((tempinF-32)*5)/9;
    console.log("Temperature in Celcius is " + celcius +"from " + tempinF); 
}