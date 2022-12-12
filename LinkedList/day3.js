
class Node {
    constructor(value, next = null) {
        this.value = value; 
        this.next = next; 
    }
}

class LinkedList {
    constructor(value) {
        let node = new Node(value); // {value: 100, next: null, prev: null}
        this.head = node; 
        this.tail = node; 
        this.tail.next = this.head; 
        this.length = 1; 
    } 

    append(value) { 
        let node = new Node(value); 
        this.tail.next = node; 
        this.tail = node; 
        this.tail.next = this.head; 
        this.length++; 
    } 

    prepend(value) {
        let node = new Node(value, this.head); 
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
list.append(200)

console.log(list.head);


// CRUD 




