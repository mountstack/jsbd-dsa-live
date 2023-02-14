
// This is not DP

let memo = []; 

function sum(n, v) { 
    if(memo[n]) {
        console.log({v});
        return memo[n]; 
    }
    else { 
        console.log({v});
        let sum = 0; 
        for(let i = n; i >= 1; i--) {
            sum = sum + i; 
        } 

        memo[n] = sum; 
        return sum; 
    } 
} 


console.log(sum(5, 1)); 
console.log(sum(5, 2)); 


