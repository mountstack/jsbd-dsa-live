
// 1. Traversing array 
// let arr = [10, 20, 30, 40, 50, 60, 70]

// function traverse(arr, i = 0) { 
//     if(arr.length === i) {
//         console.log({i});
//         return; 
//     }
//     console.log(arr[i]);
//     traverse(arr, i+1)
// }

// traverse(arr)


// ////////////
// ////////////
// ////////////

// 2. Sum 
// let arr = [10, 20, 30, -40, 50, -60, 70]; 

// let sum = 0; 
// function summation(arr, i = 0) {
//     if(arr.length == i) {
//         return; 
//     } 
//     sum = sum + arr[i]; 

//     summation(arr, i+1); 
//     return sum; 
// }

// console.log(summation(arr));


// ------------------

// let arr = [70, 60, 50, 40, 30, 20, 10]; 

// function reverseArr(arr, start, end) {
//     if(start >= end) {
//         return; 
//     } 

//     // swap
//     let temp = arr[start]; 
//     arr[start] = arr[end]; 
//     arr[end] = temp; 

//     reverseArr(arr, start+1, end-1)
// }

// reverseArr(arr, 0, arr.length-1)

// arr


// --------------------
// --------------------


// 4. Linear Search 
// let arr = [10, 20, 30, 35, 42, 65, 78]; 

// function linearSearch(arr, key, i = 0) { 
//     if(arr.length == i) return false; 

//     if(arr[i] == key) { 
//         return {status: true, index: i} 
//     } 

//     return linearSearch(arr, key, i+1); 
// } 

// console.log(linearSearch(arr, 30));
// console.log(linearSearch(arr, 70));
// console.log(linearSearch(arr, 65));
// console.log(linearSearch(arr, 33));


// ---------------------------
// ---------------------------


// 5. Binary Search 
// let arr = [10, 20, 30, 35, 42, 65, 78]; 

// function binarySearch(arr, key, l, r) {
//     let mid = Math.floor((l+r) / 2); 

//     if(arr[mid] === key) {
//         return {
//             status: true, 
//             index: mid
//         }
//     } 

//     // if(small) binarySearch(arr, key, l, mid-1)
//     // if(big) binarySearch(arr, key, mid+1, r)
// }


