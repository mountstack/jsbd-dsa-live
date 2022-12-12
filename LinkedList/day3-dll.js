
class Node {
    constructor(value, next = null, prev = null) {
        this.value = value; 
        this.next = next; 
        this.prev = prev; 
    } 
} 

class LinkedList {
    constructor(value) {
        let node = new Node(value); // {value: 100, next: null, prev: null}
        this.head = node; 
        this.tail = node; 
        this.length = 1; 
    } 

    append(value) { 
        let node = new Node(value); 
        this.tail.next = node; 
        node.prev = this.tail; 
        this.tail = node; 
        this.length++; 
    } 

    prepend(value) {
        let node = new Node(value, this.head); 
        this.head.prev = node; 
        this.head = node; 
        this.length++; 
    } 

    print() { 
        let data = this.head; 
        while(data) {
            console.log(data.value);
            data = data.next; 
        }
    } 

    appendAt(value, position) {
        if(position === 1) { // first 
            this.prepend(value); 
        } 
        else if(position === this.length + 1) { // last
            this.append(value); 
        } 
        else {
            let newNode = new Node(value); 
            let preNode = this.findNode(position - 1);
            newNode.next = preNode.next; 
            preNode.next = newNode; 

            this.length++; 
        } 
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
} 


let list = new LinkedList(100); 
// list.append(200)
list.prepend(50)

console.log(list.head);




