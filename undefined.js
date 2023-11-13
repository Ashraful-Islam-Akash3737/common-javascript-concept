// 8 ways to get undefined


// 1: variable with no iniatialization
let count;
console.log(count); //undefined

// 2:function with no return
function section(a, b){
    const total = a + b; 
}
console.log(section()); // undefined

// 3:parameter that is not passed will be undefined
function third(a, b, c, d, e){
    const total = a + b + c + d + e;
    console.log(a, b, c, d, e);
}
third(2, 4, 4); //2 4 4 undefined undefined

// 4: if the property of the object is not exist
const band = {
    name: "band",
    age: 30,
}
console.log(band.price); //undefined


// 5:if the index number you given is not available in the array
const array = [23, 47, 57, 58, 48, 83];
console.log(array[2], array[7], array[30]); //57 undefined undefined


// how to delete an array----------------------
const myArray = [3, 47, 57, 3, 57, 56, 59];
myArray.splice(0, array.length+1);
console.log(myArray);
// ---------------------------------------------------



// 6:deleting an element inside the array
const array2 = [23, 47, 57, 58, 48, 83];
delete array2[3]; // you should not use it but you have to 
console.log(array2);

// 7: if return has nothing on the right will return undefined 


// 8:set a value directly to undefined
