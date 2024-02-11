/*
---
fibonacci sequence - is a sequence in which each
number is the sum of the two preceding ones
---
factorial of a number - non-negative integer `n`, denoted n!, is the product of all
positive integers less than or equal to `n`;
---
prime number - number greater than 1 that is not a product of two smaller natural numbers
---

power of two - an integer is a poser of two if there exists an integer 'x' such that n === 2x
recursion
fibonacci sequence with recursion
factorial of a number with recursion

----

1) loop - O(n)
2) nested loops - O(n^2)

Input size reduced by half - O(logn)


*/
// Fibonacci Sequence
function fib(n) {
	// linear time complexity O(n)
	var fib = [0, 1];
	for (var i = 2; i < n; i++) {
		fib[i] = fib[i - 1] + fib[i - 2];
	}
	return fib;
}
console.log(fib(2)); //  [0,1]
console.log(fib(3)); //  [0,1,2]
console.log(fib(7)); // [0,1,1,2,3,5,8]

function factorial(n) {
	// linear time complexity O(n)
	var result = 1;
	for (var i = 2; i <= n; i++) {
		result *= i;
	}
	return result;
}
console.log(factorial(4)); // 4*3*2*1 = 24
console.log(factorial(5)); // 5*4*3*2*1 = 120

function checkPrime(n) {
	// Big-O = O(sqrt(n)) or 0
	if (n < 2) return false;
	for (var i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) return false;
	}
	return true;
}

console.log(checkPrime(5)); // true , 1*5 or 5*1
console.log(checkPrime(4)); // false , 1*4 or 2*2 or 4*1

/*
power of two - pseudocode

n = 8
8/2 = 4 (remainder 0)
4/2 = 2 (remainder 0)
2/2 = 1 (remainder 0)

If remainder is not 0 in any step, `n` is not a power of two
If remainder is 0 and `n` comes down to 1 eventually, n is a power of two
*/
function isPowerOfTwo(n) {
	// complexity time is O(logN)
	if (n < 1) return false;
	while (n > 1) {
		if (n % 2 !== 0) return false;
		n = n / 2;
	}
	return true;
}

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(5)); // false

function isPowerOfTwoBitWise(n) { // time complexity is O(1) (constant)
	if (n < 1) return false;
	return (n & (n - 1)) === 0;
}
