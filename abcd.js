

let arr = [2, 3, 4, 7, 11]
let target = 5 


let ma = []; 

let n = 1; 
let i = 0; 


while(ma.length < target) { 
    if(n == arr[i]) {
        i++; 
        n++; 
    } 
    else {
        ma.push(n); 
        n++; 

        // if(ma.length > target) break; 
    }
}


ma 

console.log(ma[target-1]); 
