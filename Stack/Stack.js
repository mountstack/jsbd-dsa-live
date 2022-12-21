class Node {
    constructor(value, next = null) {
        this.value = value; 
        this.next = next; 
    }
}

class Stack { 
    constructor(value) {
        let node = new Node(value); 
        this.head = node; 
        this.tail = node; 
        this.length = 1; 
    }

    push(value) { 
        let node = new Node(value); 
        node.visited = true; 
        this.tail.next = node; 
        this.tail = node; 
        this.length++; 
    } 

    pop() {
        let prevNode = this.findNode(this.length - 1);
        let poppableNode = prevNode.next; 
        prevNode.next = null; 
        return poppableNode; 
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

    print() { 
        let data = this.head; 
        while(data) {
            data.visited = true; 
            console.log(data.value);
            data = data.next; 
        }
    } 
} 


let myStack = new Stack('CI-CD Pipeline');

myStack.push('Youtube - Mount Stack')
myStack.push('Google Drive')

console.log(myStack.pop());
myStack.print()

// Push. --> T.C = 0(1)  &  S.C = 0(1)
// POP   --> T.C = 0(n)  &  S.C = O(1)

