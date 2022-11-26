
let arr = [1, 2, 3, 4, 500, 6, 7]; 
let target = 500; 

function linearSearch(arr, target) {
    for(let i = 0; i < arr.length; i++) { 
        if(arr[i] === target) {
            return 'Found at index: ' + i;
        }
    } 
    return target + ' Not found';
}

console.log(linearSearch(arr, target));


// Time complexity: O(N) 
// Space complexity: O(1) 

