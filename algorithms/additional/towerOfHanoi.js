/*
tower of hanoi
the objective of the puzzle is to move the entire
stack to the last rod, obeying the following rules:
    * only one disk may be moved at a time 
    * each move consists of taking the upper disk from one
    of the stacks and placing it on top of another stack or
    on an empty rod;
    * no disk may be placed on top of a disk that is smaller

*/
//  timeComplexity is O(2^n)
var towerOfHanoi = (n, fromRoad, toRoad, usingRoad) => {
	if (n === 1) return console.log(`Move disk 1 from ${fromRoad} to ${toRoad}`);
    towerOfHanoi(n-1, fromRoad, usingRoad, toRoad)
    console.log(`Move disk ${n} from ${fromRoad} to ${toRoad}`)
    towerOfHanoi(n-1, usingRoad, toRoad, fromRoad)
};

towerOfHanoi(3, 'A', 'C', 'B');
