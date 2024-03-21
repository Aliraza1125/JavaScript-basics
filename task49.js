//Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.  

function replaceChar(str) {
    let strarr = str.split('');

    for (let i = 0; i < strarr.length; i++) {
        if (strarr[i] === 'z') {
            strarr[i] = 'a';
        } else if (strarr[i] === 'Z') {
            strarr[i] = 'A';
        } else {
            strarr[i] = String.fromCharCode(strarr[i].charCodeAt(0) + 1);
        }
    }

    return strarr.join("");
}

console.log(replaceChar("python")); 
