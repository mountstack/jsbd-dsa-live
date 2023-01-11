

function selectionSort(arr) { 
    for(let i = 0; i < arr.length; i++) {
        let minIndex = i; 

        // find index of minimum value
        for(let j = i; j < arr.length; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j; 
            }
        } 
        
        // swap
        let temp = arr[i]; 
        arr[i] = arr[minIndex]; 
        arr[minIndex] = temp; 
    }

    return arr; 
}

console.log(selectionSort([2, 5, 9, 3, 5, 5, 5, 1, 6, 0]));


// T.C = O(n^2) 
// S.C = O(1)


