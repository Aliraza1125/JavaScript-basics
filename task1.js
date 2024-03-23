// Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.


function notInteger(num) {
    if (!Number.isInteger(num)) {
        throw new Error("Number is not an integer");
    } else {
        console.log('Number is an Integer');
    }
}

try{
    notInteger(2.12);
}
catch(err){
    console.log('Error',err.message);

}
