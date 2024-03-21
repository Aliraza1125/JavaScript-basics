// Write a JavaScript program to rotate the elements left in a given array of integers of length 3

function rotateArray(arr)
{
    let newArray= [arr[1] , arr[2] , arr[0]];
    return newArray
}

let array =[2,3,4];

console.log(`New Array is : ${rotateArray(array)}`)