/*

the Cartesian product of two sets
A and B, denoted AxB, is the set of all
ordered pairs (a,b) where a is in A and b is
in B

var A = [1,2]
var B = [3,4]
AxB = [ [1,3], [1,4],[2,3], [2,4]]

var C = [1,2]
var D = [3,4,5]
CxD = [ [1,3] , [1,4] , [1,5], [2,3], [2,4], [2,5] ]

traverse each array and pair each element in the first array with each element
in the second array

*/


var arr1 = [1,2]
var arr2 = [3,4,5]

var cartesianProduct = (arr1, arr2) =>  {
    var result = [];
    for(var i = 0; i < arr1.length; i++){
        for(var j = 0; j < arr2.length; j++){
            result.push([arr1[i], arr2[j]])
        }
    }
    return result
}
console.log(cartesianProduct(arr1, arr2))
// bigO complexity O(mn)
