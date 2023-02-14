
class Graph {
    constructor() {
        this.graph = {}; 
        this.visited = {}; 
        this.parent = {}; 
        this.color = {}; 
    } 

    add(a, b, dir = false) { 
        this.visited[a] = false; 
        this.visited[b] = false; 


        // 1st part
        if(this.graph[a]) {
            this.graph[a].push(b); 
        }
        else {
            this.graph[a] = [b]; 
        }

        // 2nd part 
        if(!dir) {
            if(this.graph[b]) {
                this.graph[b].push(a); 
            }
            else {
                this.graph[b] = [a]; 
            }
        }
        
    } 


    bfs(src) {
        let queue = []; 
        queue.push(src); 
        this.visited[src] = true;  

        while(queue.length) { 
            let data = queue[0]; 
            console.log(data); 

            let arr = this.graph[data]; 
            for(let i = 0; i < arr.length; i++) {
                if(!this.visited[arr[i]]) {
                    queue.push(arr[i]); 
                    this.visited[arr[i]] = true; 
                }
            }

            queue.shift(); 
        }
    } 

    DFS(node) { 
        console.log(node); 
        this.visited[node] = true; 
        let arr = this.graph[node]; 

        for(let i = 0; i < arr.length; i++) { 
            if(!this.visited[arr[i]]) { 
                this.DFS(arr[i]); 
            } 
        } 
    } 


    cycleDetection(src) {
        let queue = []; 
        queue.push(src); 
        this.visited[src] = true;  
        this.parent[src] = null;  

        while(queue.length) { 
            let data = queue[0]; 
            // console.log(data); 

            let arr = this.graph[data]; 
            for(let i = 0; i < arr.length; i++) {
                if(!this.visited[arr[i]]) {
                    queue.push(arr[i]); 
                    this.visited[arr[i]] = true; 
                    this.parent[arr[i]] = data; 
                }
                else if(this.visited[arr[i]] && this.parent[data] === arr[i]) { // visited & parent
                    // nothing to do 
                }
                else if(this.visited[arr[i]] && this.parent[data] !== arr[i]) {
                    return 'Cycle Detected'
                }
            }

            queue.shift(); 
        } 

        return 'Cycle not found'
    } 
}


let gp = new Graph(); 

gp.add(1, 2, true)
gp.add(1, 3)
gp.add(1, 4)
gp.add(2, 6)
gp.add(6, 7)
gp.add(4, 5)

gp.DFS(1); 

// console.log(gp.cycleDetection(6)); 

// console.log(gp.graph);

// let count = 0; 
// for(let abc in gp.visited) { 
//     if(!gp.visited[abc]) {
//         count++; 
//         gp.bfs(abc)
//     }
// }

// console.log({count}); 


