/*

linear search
binary search
recursive binary search

*/

// linear
// linear time complexity O(n)
var linearSearch = (arr, target) => {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === target) return i;
	}
	return -1;
};
console.log(linearSearch([-5, 2, 10, 4, 6], 10)); // 2
console.log(linearSearch([-5, 2, 10, 4, 6], 6)); // 4
console.log(linearSearch([-5, 2, 10, 4, 6], 20)); // -1

// binary
/*
if the array is empty, return -1 as the element cannot be found
if the array has elements, find the middle element in the array.
if target is equal to the middle element, return the middle element index
if target is less than the middle element, binary search left half of the array
if target is greater than middle element, binary search right half of the array
*/

// bigO is O(nlogn)
var binarySearch = (arr, target) => {
	var leftIndex = 0;
	var rightIndex = arr.length - 1;

	while (leftIndex <= rightIndex) {
		var middleIndex = Math.floor((leftIndex + rightIndex) / 2);
		if (target === arr[middleIndex]) return middleIndex;
		else if (target < arr[middleIndex]) rightIndex = middleIndex - 1;
		else leftIndex = middleIndex + 1;
	}
	return -1;
};
console.log('--binarySearch--');
console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // -1

// recursive binary search
// bigO - O(nlogn)
var binaryRecursiveSearch = (arr, target) => search(arr, target, 0, arr.length - 1);
function search(arr, target, leftIndex, rightIndex) {
	if (leftIndex > rightIndex) return -1;
	var middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if(target === arr[middleIndex]) return middleIndex
    else if(target < arr[middleIndex])
    {
        return search(arr, target, leftIndex, rightIndex -1)
    }
    else 
    {
        return search(arr, target, middleIndex + 1, rightIndex)
    }
}
console.log('--recursiveBinarySearch--');
console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // -1
