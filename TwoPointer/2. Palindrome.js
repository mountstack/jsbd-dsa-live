
function isPalindrome(str) {
    let i = 0; 
    let k = str.length - 1; 

    while(i <= k) {
        if(str[i] != str[k]) {
            return false; 
        }
        i++; 
        k--; 
    }

    return true; 
}

let count = 0; 
function leetcode2108(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(isPalindrome(arr[i])) {
            // return arr[i]; 
            count++; 
        }
    } 
    // return ""; 
} 

leetcode2108(["mom", "dad", "hello"]);
console.log(count);
