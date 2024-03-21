// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.


const length = 5;
const width = 6;
const height = 7;

const s= (length+width+height)/2;


const areaoftriangle = Math.sqrt(s*(s-length)*(s-width)*(s-height));

console.log(areaoftriangle);