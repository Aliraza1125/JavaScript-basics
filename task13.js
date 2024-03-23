// Write a JavaScript program that uses a try-catch block to catch and handle a 'SyntaxError' when parsing an invalid JSON string.

function parseJSON(jsonString) {
    try {
    
        return JSON.parse(jsonString);
    } catch (error) {
        if (error instanceof SyntaxError) {
            console.log('Error caught:', error.message);
            return null; 
        } else {
            throw error; 
        }
    }
}


let invalidJSONString = '{"name": "John", "age": }';
let parsedData = parseJSON(invalidJSONString);
console.log(parsedData); 
