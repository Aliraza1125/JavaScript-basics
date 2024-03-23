// Write a JavaScript function that takes an array as a parameter and throws a custom 'Error' if the array is empty.

function isEmpty(arr)
{
    if(arr.length === 0)
    {
        throw new Error("Error")
    }
    else{
        console.log(arr)
    }
}

try{
    let araay =[];
    isEmpty(araay)

}
catch(err)
{
    console.log('Error',err.message)
}