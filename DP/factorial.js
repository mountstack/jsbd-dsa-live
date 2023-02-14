

let memo = []; 

let count = 0; 
function factorial(n) { 
    count++; 
    if(memo[n]) {
        return memo[n]; 
    }
    else {
        if(n == 0 || n == 1) {
            return n; 
        }
        memo[n] = factorial(n-1) + factorial(n-2); 
        return memo[n]; 
    }

    
}

console.log(factorial(20));
console.log(count);


// 10: 19 (DP)
// 10: 177 


// 20: 39 (DP)
// 20: 21891 



