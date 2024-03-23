//Write a JavaScript function to get all possible subsets with a fixed length (for example 2) combinations in an array.
//Sample array : [1, 2, 3] and subset length is 2
//Expected output : [[1,2],[1,3],[2,3]]


function possibleSubset(arr, subsetLength) {
    let combinations = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let subset = [arr[i], arr[j]];
            if (subset.length === subsetLength) {
                combinations.push(subset);
            }
        }
    }
    return combinations;
}

let arr = [1, 2, 3];
let subsetLength = 2;
console.log(possibleSubset(arr, subsetLength));
