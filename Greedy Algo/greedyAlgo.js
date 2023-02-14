
let arr = [1, 5, 6, 9]; 

let note = 11; 
let count = 0; 


for(let i = arr.length-1; i >= 0; i--) { 
    if(note == 0) break; 

    while(arr[i] <= note) { 
        note = note - arr[i]; 
        count++; 
    } 
} 

count 

