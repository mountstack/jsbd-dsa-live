

class HashMap {
    constructor() { 
        this.map = {}; 
    } 

    put(key, value) { 
        this.map[key] = value; 
    } 

    get(key) {
        return this.map[key]; 
    } 

    remove(key) { 
        delete this.map[key]; 
    }
} 


let map = new HashMap(); 

map.put("name", "Md. Rijwan Hossain"); 
map.put("age", 30); 
map.put("email", "rh@g.com"); 


console.log(map.get("age"));
console.log(map.get("name"));

console.log(map.map);

map.remove("age")

console.log(map.map);

// Put --> T.C: O(1) 
// Get --> T.C: O(1) 


