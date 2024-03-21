//Write a JavaScript program to capitalize the first letter of each word in a given string. 


function capitalizeFirst(str) {
    let newString = str.split(" ");
    for (let i = 0; i < newString.length; i++) {
        newString[i] = newString[i].charAt(0).toUpperCase() + newString[i].slice(1);
    }
    return newString.join(" ");
}

console.log(capitalizeFirst("this is a car")); 
