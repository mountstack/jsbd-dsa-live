

function isValidPerfectSquare(num) { 
    if(num == 1) return true; 

    let start = 1; 
    let end = num; 
    let mid; 

    while(start <= end) { 
        mid = Math.floor((start + end) / 2); 

        if(mid * mid == num) {
            return true; 
        } 
        else if(mid * mid > num) {
            end = mid - 1; 
        } 
        else { 
            start = mid + 1; 
        } 
    } 

    return false; 
} 


console.log(isValidPerfectSquare(169));
console.log(isValidPerfectSquare(14));
console.log(isValidPerfectSquare(25));
console.log(isValidPerfectSquare(4));
console.log(isValidPerfectSquare(75));
console.log(isValidPerfectSquare(1));

