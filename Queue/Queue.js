
class Node {
    constructor(value, next = null) {
        this.value = value; 
        this.next = next; 
    }
} 

class Queue { 
    constructor(value) {
        let node = new Node(value); 
        this.head = node; 
        this.tail = node; 
        this.length = 1; 
    }

    enqueue(value) { 
        let node = new Node(value); 
        node.visited = true; 
        this.tail.next = node; 
        this.tail = node; 
        this.length++; 
    } 

    dequeue() { 
        let removableNode = this.head; 
        this.head = this.head.next; 
        return removableNode.value; 
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

let que = new Queue(10); 

que.enqueue(20)
que.enqueue(30)
que.enqueue(40)
que.enqueue(50)

console.log(que.dequeue());
console.log(que.dequeue());

que.print(); 

// Enqueue = T.C = 0(1)  &&  S.C = 0(1)
// Dequeue = T.C = 0(1)  &&  S.C = 0(1)
