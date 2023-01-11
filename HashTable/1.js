


function twoSum(arr, target) { 
    // map 
    let numbers = {}; 
    for(let i = 0; i < arr.length; i++) { 
        numbers[arr[i]] = arr[i]; 
    } 

    // console.log(numbers);


    for(const key in numbers) {
        let value = target - key; 
        
        if(numbers[value]) { 
            console.log({a: value, b: numbers[key]});
            break; 
        } 
    } 

    // index find 
} 



twoSum([2,8,11, 1, 15], 9); 


