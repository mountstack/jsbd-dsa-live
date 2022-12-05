
class PersonForm { 
    constructor(name, age, dob, isMarried) {
        this.name = name; 
        this.age = age; 
        this.dateOfBirth = dob; 
        this.isMarried = isMarried; 
    }

    updateName(name) {
        this.name = name; 
    }
}

let rakibObj = new PersonForm("Rakib", "25", 1995, false); 
let mahmoodObj = new PersonForm("Mahmood", 35, 1985, true); 

console.log(rakibObj);
rakibObj.updateName("Rir Rakib"); 
console.log(rakibObj);


console.log(mahmoodObj);


