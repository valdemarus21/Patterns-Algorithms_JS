/*

bubble sort
insertion sort
quick sort
merge sort

*/

/* 
bubble sort
    compare adjacent elements in the array and
    swap the position if they are not in the intended other

*/

// bigO complexity O(n^2)
var bubbleSort = (array) => {
	var swapped;
	do {
		swapped = false;
		for (var i = 0; i < array.length - 1; i++) {
			if (array[i] > array[i + 1]) {
				var temp = array[i];
				array[i] = array[i + 1];
				array[i + 1] = temp;
				swapped = true;
			}
		}
	} while (swapped);
};
var arr = [8, 29, -2, 4, -6];
bubbleSort(arr);
console.log(arr); // [-6, -2, 4, 8, 20]

/*
insertion sort
virtually split the array into a sorted and an unsorted part
assume that the first element is already sorted and remaining elements are
unsorted . Select an unsorted element and compare with all elements in
the sorted part
If the elements in the sorted part is smaller than the selected element, proceed
to the next element in the unsorted part. Else, shift larger elements in the sorted
part towards the right.
Insert the selected element at the right index
Repeat till all the unsorted elements are placed in the right order
*/

// bigO complexity O(n^2)
var insertionSort = (array) => {
	for (var i = 1; i < array.length; i++) {
		var numberToInsert = array[i];
		var j = i - 1;
		while (j >= 0 && array[j] > numberToInsert) {
			array[j + 1] = array[j];
			j = -1;
		}
		array[j + 1] = numberToInsert;
	}
};
var arr = [8, 29, -2, 4, -6];
insertionSort(arr);
console.log(arr); // [-6, -2, 4, 8, 20]

/*
Quick sort

identify the pivot element in the array

    * pick first element as pivot
    * pick last element as pivot+
    * pick a random element as pivot
    * pick median as pivot

put everything that`s smaller than the pivot into a left array, and everything
than`s greater than the pivot into a right array
repeat the process for the individual left and right arrays till you have an 
array of lenght 1 which is sorted by definition
repeatedly concatenate the left array, pivot and right array till one sorted array
remains
*/

var quickSort = (arr) => {
	if (arr.length < 2) return arr;
	var pivot = arr[arr.length - 1];
	var left = [];
	var right = [];
	for (var i = 0; i < arr.length - 1; i++) {
		if (arr[i] < pivot) left.push(arr[i]);
		else right.push(arr[i]);
	}
	return [...quickSort(left), pivot, ...quickSort(right)];
};
console.log('quickSort algorithm');
var arr = [8, 29, -2, 4, -6];
var sortedArr = quickSort(arr); // Сохраняем отсортированный массив в новую переменную
console.log(sortedArr); // Выводим отсортированный массив

// bigO complexity : worst case O(n^2), average - O(nlogn)

/*
merge sort

    divide the array into sub arrays, each containing only one element
    (an array with one element is considered sorted)
    repeatedly merge the sub arrays to produce new sorted sub arrays until
    there is only one sub array remaining. That will be the sorted array.

*/

var mergeSort = (arr) => {
	if (arr.length < 2) return arr;
	var mid = Math.floor(arr.length / 2);
	var leftArr = arr.slice(0, mid);
	var rightArr = arr.slice(mid);
	return merge(mergeSort(leftArr), mergeSort(rightArr));
};
function merge(leftArr, rightArr) {
	var sortedArr = [];
	while (leftArr.length && rightArr.length) {
		if (leftArr[0] <= rightArr[0]) {
			sortedArr.push(leftArr.shift());
		} else {
			sortedArr.push(rightArr.shift());
		}
	}
	return [...sortedArr, ...leftArr, ...rightArr];
}
// bigO time complexity - O(nlogn)
var arr = [8, 29, -2, 4, -6];
var mergeSortedArray = mergeSort(arr);
console.log('--merge sort method')
console.log(mergeSortedArray); // [-6, -2, 4, 8, 20]
