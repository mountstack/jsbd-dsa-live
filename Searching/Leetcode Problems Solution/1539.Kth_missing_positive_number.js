
let arr = [2, 3, 4, 7, 11]
let missingArray = []; 
let target = 5 

let n = 1; 
let i = 0; 

while(missingArray.length < target) { 
    if(n == arr[i]) {
        i++; 
        n++; 
    } 
    else {
        missingArray.push(n); 
        n++; 
    }
}

console.log(missingArray[target-1]); 
