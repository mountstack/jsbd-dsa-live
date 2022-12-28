

class HashTable { 
    constructor(size) { 
        // this.arr = new Array(size).fill([]); 
        this.arr = new Array(size); 
        this.size = size; 
    } 

    hashFunction(str) { 
        str = str + ''; 
        let sum = 0; 
        for(let i = 0; i < str.length; i++) { 
            sum = sum + str.charCodeAt(i); 
        }
        let index = sum % this.size; 
        return index; 
    } 

    set(value) { 
        let index = this.hashFunction(value); 
        let indexArr = this.arr[index]; 

        if(!indexArr) { 
            indexArr = [value]; 
        }
        else { 
            indexArr.push(value); 
        }
        this.arr[index] = indexArr; 
    } 

    get(value) {
        let index = this.hashFunction(value); 
        let resultArr = this.arr[index]; 
        
        // Linear search 
        for(let i = 0; i < resultArr.length; i++) {
            if(resultArr[i] === value) {
                return true; 
            }
        } 
        return false; 
    } 
}

let hash = new HashTable(5); 

hash.set('apple');
hash.set('banana');
hash.set('mango');
hash.set('Rafsan');
hash.set('Rijwan');
hash.set('Jakariya');
hash.set('e');

console.log(hash.arr);
console.log(hash.get('jack fruit'));
console.log(hash.get('Rijwan'));
console.log(hash.get('rijwan'));

