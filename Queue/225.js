
class Node {
    constructor(value, next = null) {
        this.value = value; 
        this.next = next; 
    }
} 

class MyQueue { 
    constructor() { 
        this.head = null; 
        this.tail = null; 
        this.length = 0; 
    } 

    enqueue(value) { 
        let node = new Node(value); 
        if(!this.head) {
            this.head = node; 
            this.tail = node; 
        } 
        else { 
            this.tail.next = node; 
            this.tail = node; 
        }
        this.length++; 
    } 

    dequeue() { 
        let removableNode = this.head; 
        this.head = this.head.next; 
        this.length--; 
        return removableNode.value; 
    } 
} 


class MyStack { 
    constructor() { 
        this.q1 = new MyQueue(); 
        this.q2 = new MyQueue(); 
    } 
    push(value) {
        this.q1.enqueue(value); 
    }
    pop() { 
        // q1.length-1 - loop on q1 --> q2 enqueue 
        // q2.length - loop on q2 --> q1 enqueue 
    } 
    top() {}
    empty() {}
} 


let myStack = new MyStack(); 
myStack.push(10); 
myStack.push(20); 
myStack.push(30); 
myStack.push(40); 

myStack 