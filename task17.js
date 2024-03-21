//Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.  


function absdifference(specifiednum,absdiff){

    if(specifiednum>19)
    {
        return absdiff + absdiff + absdiff;
    }
    else{
        return absdiff;
    }

}
let specifiednum = 22;
let absdiff = Math.abs((specifiednum-19));

console.log(absdifference(specifiednum,absdiff));