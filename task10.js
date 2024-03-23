//Write a JavaScript program that demonstrates the use of the 'try-catch-finally' statement to catch and handle an error, and then execute some cleanup code in the 'finally' block.
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error('Division by zero is not allowed');
        }
        return a / b;
    } catch (error) {
        console.log('Error caught:', error.message);
        return null; // Return null to signify failure
    } finally {
        console.log('Cleaning up...');
    }
}


console.log(divide(10, 2)); 

