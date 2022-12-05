
class Node {
    constructor(value, next = null) {
        this.value = value; 
        this.next = next; 
    }
}

class LinkedList {
    constructor(value) {
        let node = new Node(value); 
        this.head = node; 
        this.tail = node; 
    }

    myappend(value) { 
        let node = new Node(value); 
        this.tail.next = node; 
        this.tail = node; 
    } 
} 


let list = new LinkedList(100); 
list.myappend(500); 
list.myappend(600); 
list.myappend(700); 
list.myappend(800); 

console.log(list);
