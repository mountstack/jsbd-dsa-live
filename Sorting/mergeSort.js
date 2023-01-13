
let arr = [20, 10, 30, 50, 40, 30]; 
let newArr = []; 


function mergeSort(arr, l, r) {
    if(l < r) { 
        let mid = Math.floor((l+r) / 2); 
        mergeSort(arr, l, mid); // left
        mergeSort(arr, mid+1, r); // right

        // here sub-array is already sorted

        mergeSubArr(arr, l, mid, r); 
    } 
} 

function mergeSubArr(arr, l, mid, r) { 
    let i = l; 
    let j = mid+1; 
    let k = i; 

    while(i <= mid && j <= r) {
        if(arr[i] <= arr[j]) { 
            newArr[k] = arr[i]; 
            i++; 
        } 
        else {
            newArr[k] = arr[j]; 
            j++; 
        } 
        k++; 
    } 

    // copy rest values
    if(i > mid) {
        while(j <= r) {
            newArr[k] = arr[j]; 
            j++; 
            k++; 
        } 
    } 
    else { 
        while(i <= mid) { 
            newArr[k] = arr[i]; 
            i++; 
            k++; 
        } 
    } 

    // copy to original arr
    for(let z = l; z <= r; z++) {
        arr[z] = newArr[z]; 
    }
} 


mergeSort(arr, 0, arr.length-1); 
console.log(arr);


