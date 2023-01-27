
class Graph {
    constructor() {
        this.graph = {}; 
    } 

    add(a, b) { 
        // 1st part
        if(this.graph[a]) {
            this.graph[a].push(b); 
        }
        else {
            this.graph[a] = [b]; 
        }

        // 2nd part 
        if(this.graph[b]) {
            this.graph[b].push(a); 
        }
        else {
            this.graph[b] = [a]; 
        }
    }
}


let gp = new Graph(); 

gp.add(5, 4); 
gp.add(5, 1); 
gp.add(1, 2); 
gp.add(2, 3); 
gp.add(3, 4); 
gp.add(1, 6); 
gp.add(6, 5); 
gp.add(6, 7); 
gp.add(7, 2); 
gp.add(1, 4); 

console.log(gp.graph);




