//Write a JavaScript program to get the first n Fibonacci numbers.  
//Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.

function fibonacciSeries(n) {
    if (n <= 1) {
        return [0, 1].slice(0, n + 1);
    } else {
        const fib = fibonacciSeries(n - 1);
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
        return fib;
    }
}
const n = 10;
const result = fibonacciSeries(n);
console.log(`The first ${n} Fibonacci numbers are: ${result}`);
