
let arr = [12, 43, 26, 74, 29, 41, 58, 91, 10]; // (0 - 8)
let target = 100; 

function linearSearch(arr, target) {
    for(let i = 0; i < arr.length; i++) { 
        if(arr[i] === target) { 
            return 'Data found at ' + i; 
        } 
    }
    return 'data not found'; 
}

// console.log(linearSearch(arr, target));
// console.log(linearSearch(['red', 'green', 'blue', 'black'], 'Blue'));

// 1 sec --> 10 lakh 

// ----------------------------------

let arr2 = [10, 20, 30, 40, 50, 60, 70, 80]

function binarySearch(arr, target) {
    let start = 0; 
    let end = arr.length-1; 
    let mid;  
    let asc; 
    if(arr[start] < arr[end]) {
        asc = true; 
    } 
    else { 
        asc = false;
    }

    while(start <= end) {
        mid = Math.floor((start + end) / 2); 

        if(arr[mid] === target) {
            return 'Data found at index ' + mid; 
        } 

        if(asc) { 
            if(arr[mid] < target) {
                start = mid + 1; 
            } 
            else {
                end = mid - 1; 
            }
        } 
        else {
            if(arr[mid] > target) {
                start = mid + 1; 
            } 
            else {
                end = mid - 1; 
            } 
            // [50, 40, 30, 20, 10], 50 
        } 
    }

    while(start <= end) {
        // mid 
        // 1. match arr[mid] & target 
        // 2. 
            //  1. ascending 
                // 1. large
                // 2. small 

            //  2. descending 
                // 1. large
                // 2. small 
    }

    return 'Data not found'
} 

// console.log(binarySearch(arr2, 80)); // asc
// console.log(binarySearch([30, 25, 20, 15, 10], 25));  // desce
// console.log(binarysearch(['apple', 'banana', 'mango', 'orange'], 'mango'));



// support: page -> topic 

// assignment: 
    // Blog: 
        // 1. linear search 
        // 2. binary search 
        // 3. Comparison 
        // Hasaner raf khata



// [10, 20, 30, 40, 50, 60], 45
// code 
// {
 // flooring: 40 
 // ceiling: 50 
// } 


// [10, 20, 30, 30, 30, 40, 50, 50, 60, 70], 50 
// Result = 2

