
class Node {
    constructor(value, left = null, right = null) {
        this.value = value; 
        this.left = left; 
        this.right = right; 
    }
}

class BinarySearchTree {
    constructor(value) {
        this.root = new Node(value)
    } 

    insert(value) {
        let currentNode = this.root
        while(true) { 
            // large --> right 
            if(currentNode.value < value) {
                if(!currentNode.right) {
                    let newNode = new Node(value); 
                    currentNode.right = newNode; 
                    break; 
                } 

                currentNode = currentNode.right; 
            } 
            else {
                // small --> left 
                if(!currentNode.left) {
                    let newNode = new Node(value); 
                    currentNode.left = newNode; 
                    break; 
                } 

                currentNode = currentNode.left; 
            }
        } 
    } 

    search(value) {
        let currentNode = this.root; 
        while(currentNode) {
            if(currentNode.value === value) {
                return 'Data found'
            }
            else if(currentNode.value > value) {
                currentNode = currentNode.left; 
            } 
            else {
                currentNode = currentNode.right; 
            }
        }
        return 'Not found'
    } 

    predecessor() {
        let currentNode = this.root.left; 
        while(true) {
            if(!currentNode.right) {
                return currentNode.value; 
            } 
            currentNode = currentNode.right; 
        }
    }

    successor() {
        let currentNode = this.root.right; 
        while(true) {
            if(!currentNode.left) {
                return currentNode.value; 
            } 
            currentNode = currentNode.left; 
        }
    } 

    BFS() {
        let queue = []; 
        queue.push(this.root) 

        while(queue.length) {
            let current = queue[0]; 
            console.log(current.value);

            if(current.left) {
                queue.push(current.left)
            }
            if(current.right) {
                queue.push(current.right)
            } 

            queue.shift(); 
        } 
    } 
}


let bst = new BinarySearchTree(10); 

bst.insert(20)
bst.insert(8)
bst.insert(9)
bst.insert(90)
bst.insert(15)

console.log(bst.search(900));
console.log(bst.predecessor());
console.log(bst.successor());

bst.BFS()

// Binary Search Tree 
// Balanced BST - Mock test 

