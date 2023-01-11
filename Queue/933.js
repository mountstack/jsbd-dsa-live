
class Node {
    constructor(value, next = null) {
        this.value = value; 
        this.next = next; 
    }
} 

class RecentCounter { 
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
        // this.length++; 
    } 

    dequeue() { 
        this.head = this.head.next; 
        // this.length--; 
        // return removableNode.value; 
    } 

    ping(t) { 
        this.enqueue(t); 
        let range = [t-3000, t]; 
        let counter = 0; 

        let data = this.head; 
        while(data) {
            if(data.value >= range[0] && data.value <= range[1]) {
                counter++; 
            }
            data = data.next; 
        } 

        this.removeUnnessasaryValue(range); 
        return counter; 
    } 

    removeUnnessasaryValue(range) { 
        let data = this.head; 
        while(data) { 
            if(data.value < range[0] ) { 
                this.dequeue(); 
            } 
            data = data.next; 
        } 
    } 
} 

let recCount = new RecentCounter(); 

console.log(recCount.ping(1)); 
console.log(recCount.ping(100)); 
console.log(recCount.ping(3001)); 
console.log(recCount.ping(3002)); 


