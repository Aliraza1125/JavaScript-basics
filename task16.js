//Write a JavaScript function to extract unique characters from a string.
//Example string : "thequickbrownfoxjumpsoverthelazydog"
//Expected Output : "thequickbrownfxjmpsvlazydg"


function uniqueCharacters(str) {
    let uniqueChars = '';
    for (let i = 0; i < str.length; i++) {
        if (uniqueChars.indexOf(str[i]) === -1) {
            uniqueChars += str[i];
        }
    }
    return uniqueChars;
}

let exampleString = "thequickbrownfoxjumpsoverthelazydog";
console.log(uniqueCharacters(exampleString)); 
