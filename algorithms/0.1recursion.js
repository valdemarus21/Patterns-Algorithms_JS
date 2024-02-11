/* 
recursion is a problem solving technique where the solution depends on solutions
to smaller instances of the same problem, is when a function calls itself

every recursive solution needs to have a base case - a condition to terminate
the recursion.

recursion might simplify solving a problem but it does not always translate to
a faster solution.
*/

// recursive fib sequence

// bigO complexity O(2^n)
var fib = (n) => (n < 2 ? n : fib(n - 1) + fib(n - 2));
console.log(fib(0));
console.log(fib(1));
console.log(fib(6));

// bigO = O(n)
var factorial = n => n === 0 ? 1 : n * factorial(n-1)
console.log('--factorial--')
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(5))