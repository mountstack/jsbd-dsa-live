
class Node {
    constructor(value, next = null) {
        this.value = value; 
        this.next = next; 
    }
}

class CustomStack { 
    constructor(maxSize) {
        this.head = null; 
        this.tail = null; 
        this.length = 0; 
        this.maxSize = maxSize; 
    }

    push(value) { 
        if(this.length === this.maxSize) return; 

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

    pop() {
        let prevNode = this.findNode(this.length - 1);
        let poppableNode = prevNode.next; 
        prevNode.next = null; 
        this.tail = prevNode; 
        this.length--; 
        return poppableNode.value; 
    } 

    findNode(n) {
        let count = 1; 
        let data = this.head; 
        while(data) {
            if(count == n) break; 
            count++; 
            data = data.next; 
        }

        return data; 
    } 

    increament(k, value) {
        let data = this.head; 
        if(k >= this.length) { 
            while(data) { 
                data.value = data.value + value; 
                data = data.next; 
            } 
        } 
        else {
            while(k--) { 
                data.value = data.value + value; 
                data = data.next; 
            } 
        }
    } 
} 

// let stk = new CustomStack(5); 

// stk.push(10); 
// stk.push(20); 
// stk.push(30); 
// stk.push(40); 
// stk.push(50); 

// stk

// console.log(stk.pop()); 

// stk.increament(2, 100); 

// stk