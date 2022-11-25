
let arr = [1, 2, 3, 4, 500, 6, 7]; 
let target = 500; 

function search() {
    for(let i = 0; i < arr.length; i++) { 
        if(arr[i] === target) {
            return 'Found at index: ' + i;
        }
    } 
    return 'Not found';
}


console.log(search());
