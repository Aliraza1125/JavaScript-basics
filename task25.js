//Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
//Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
//Expected output : "United States of America"


function Longest_Country_Name(arr) {
    let longestName = '';

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestName.length) {
            longestName = arr[i];
        }
    }

    return longestName;
}


let countries = ["Australia", "Germany", "United States of America"];
console.log(Longest_Country_Name(countries)); 
