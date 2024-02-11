function summation(n) {
    console.time('complexity')
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
    console.timeEnd('complexity')
	return sum;
}
// average is 0.126~130 ms
console.log('summation(1000) is', summation(1000)); // (O2)
function summationWithVar(n) {
	console.time('complexity');
	var sum = 0;
	for (var i = 1; i <= n; i++) {
		sum += i;
	}
	console.timeEnd('complexity');
	return sum;
}
// console.log('summation(1000) is', summationWithVar(1000)); // O(2)

function simpleSummation(n){
    return (n * (n + 1)) / 2 // O(1)
}

function nestedLoops(){
	for(i = 1; i <= n; i++){
		for(j = 1; j <= i; j++){
		// time complexity will be quadratic O(n**2)
		// 3n**2 + 5n + 1
	}
	}
}