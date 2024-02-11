/*

climbing staircase

n=1, climbingStaircase(1) = 1 | (1)
n=2, climbingStaircase(2) = 2 | (1,1) and (2)
n=3, climbingStaircase(3) = 3 | (1,1,1) (1,2) and (2,1)

at any given time, you can climb either 1 step or 2 steps
if you have to climb to step `n`, we can only climb from step `n-1` or `n-2`
calculate the ways we can climb to `n-1` and `n-2` steps and add the two

climbingStaircase(n) = climbingStaircase(n-1) + climbingStaircase(n-2)

*/
// bigO time complexity - linear O(n)
var climbingStaircase = n => {
    var nOfWays = [1,2]
    for(var i = 2; i <=n; i++){
        nOfWays[i] = nOfWays[i-1] + nOfWays[i-2]
    }
    return nOfWays[n - 1]
}
console.log(climbingStaircase(1))
console.log(climbingStaircase(2))
console.log(climbingStaircase(3))
console.log(climbingStaircase(4))
console.log(climbingStaircase(5))