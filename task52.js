// Write a JavaScript program to convert letters of a given string alphabetically.  

function alphaSort(str) {
    let strArray = str.split(""); 
    strArray.sort();
    return strArray.join(""); 
}

console.log(alphaSort("hello")); 
