

let arr = [10, 20, 30, 40, 50, 60, 70, 80]
let target = 50; 

function binarySearch(arr, target) {
    let start = 0; 
    let end = arr.length-1; 
    let mid;  

    while(start <= end) {
        mid = Math.floor((start + end) / 2); 

        if(arr[mid] === target) {
            return target + ' found at index ' + mid; 
        } 
        else if(arr[mid] < target) {
            start = mid + 1; 
        } 
        else {
            end = mid - 1; 
        }
    }

    return target + ' not found'
} 

console.log(binarySearch(arr, target));
console.log(binarySearch(arr, 100));


// Time complexity: O(log N) 
// Space complexity: O(1) 
