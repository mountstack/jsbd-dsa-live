


function bubbleSort(arr) { 
    for(let i = 0; i < arr.length-1; i++) {
        for(let j = 0; j < arr.length-1; j++) { 
            if(arr[j] > arr[j+1]) {
                let temp = arr[j]; 
                arr[j] = arr[j+1]; 
                arr[j+1] = temp; 
            } 
        } 
    } 

    return arr; 
} 


console.log(bubbleSort([2, 0, 5, 13, 9, 3]));

// T.C = O(n^2) 
// S.C = O(1) 


