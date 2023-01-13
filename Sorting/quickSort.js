

function partition(arr, l, r) {
    let pivot = arr[l]; 

    // count small data
    let count = 0; 
    for(let i = l; i <= r; i++) {
        if(arr[i] < pivot) {
            count++; 
        }
    } 

    count = count+l; 

    let temp = arr[l]; 
    arr[l] = arr[count]; 
    arr[count] = temp; 

    // console.log(arr);
    // console.log(count);
    // console.log(pivot); 

    // small datas | pivot | large datas
    let i = l; 
    let j = r; 
    while(i < count || j > count) { 
        if(arr[i] > pivot && arr[j] < pivot) {
            let temp = arr[i]; 
            arr[i] = arr[j]; 
            arr[j] = temp; 

            i++; 
            j--; 
        } 
        else if(arr[i] > pivot && arr[j] > pivot) {
            j--; 
        } 
        else {
            i++; 
        }
    } 


    return count; 
} 


function quickSort(arr, l, r) {
    if(l < r) {
        let p = partition(arr, l, r); 

        quickSort(arr, l, p-1); // left
        quickSort(arr, p+1, r); // right
    }
} 


let arr = [10, 20, 5, 6, 1, 30, 4]
quickSort(arr, 0, arr.length-1); 
arr


