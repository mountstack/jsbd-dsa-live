

let names = [" Rijwan", "Setu"]

function addTeacher(name, fn) {
    setTimeout(function() {
        names.push(name)
        fn()
    }, 200)
}

// AddTeacher is HOF 
// fn is callback function 


function displayTeachers() {
    setTimeout(function() {
        console.log(names);
    }, 100)
}

function displayTeachersInOrder() {
    setTimeout(function() {
        names.sort()
        console.log(names);
    }, 100)
}


addTeacher("Mahir", displayTeachers); 


