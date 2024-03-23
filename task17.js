// Write a JavaScript function to get the number of occurrences of each letter in a specified string

function numberOfOccurrences(str) {
    let occurrences = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (occurrences[char]) {
            occurrences[char]++;
        } else {
            occurrences[char] = 1;
        }
    }

    return occurrences;
}


let str = "hello";
console.log(numberOfOccurrences(str));
