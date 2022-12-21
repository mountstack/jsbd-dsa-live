
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
        this.length = 1; 
    }

    append(value) { 
        let node = new Node(value); 
        node.visited = true; 
        this.tail.next = node; 
        this.tail = node; 
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
            data.visited = true; 
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


    addSum(head) { 
        let sum = 0; 
        let data = head; 
        while(data) { 
            sum = sum + data.value; 
            data = data.next; 
        } 
        return sum; 
    } 

    searchFirstAndLast(head, value) {
        let index = 0; 
        let positionIndex = []; // 2 
        let data = head; 

        while(data) { 
            if(data.value === value) {
                if(positionIndex.length == 0) {
                    positionIndex.push(index); 
                } 
                else {
                    positionIndex[1] = index; 
                }
            }

            index++; 
            data = data.next; 
        } 

        if(positionIndex.length === 1) {
            positionIndex[1] = positionIndex[0]; 
        }
        return positionIndex; 
    }
} 


let list = new LinkedList(10); 

list.append(20)
list.append(30)
list.append(30)
list.append(20)
list.append(20)
list.append(20)
list.append(30)
list.append(5)


// console.log(list.searchFirstAndLast(list.head, 20));

list.print(); 
console.log(list.head);
