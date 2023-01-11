
let result = 0; 

function sum(n) { 
    if(n > 3) { 
        return; 
    } 

    result = result + n; 
    sum(n+1); 
    return result; 
}


console.log('output: ' + sum(1));

