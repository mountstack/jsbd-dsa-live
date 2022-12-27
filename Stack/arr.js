

// [] 
// push [10, 20, 30]
// pop 30
// [10, 20, undefined]

// push [10, 20, 100]
// top stk[stk.length-1]
// empty length === 0  


let myStack = []; 

function push(value) {
    myStack.push(value)
}

function pop() {
    let index = myStack.length-1; 
    let output = myStack[index];  
    myStack.length = myStack.length-1; 
    return output; 
}

function top() {
    let index = myStack.length-1; 
    return myStack[index];  
} 

function empty() {
    return myStack.length === 0; 
}


console.log(myStack); 
push(10); 
push(20); 
push(30); 
console.log(myStack); 

pop(); 

console.log(myStack); 
push(100); 

console.log(myStack); 

console.log(top());
console.log(empty());

pop(); 
pop(); 
pop(); 

console.log(empty());