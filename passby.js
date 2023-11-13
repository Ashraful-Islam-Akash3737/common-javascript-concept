// premitive types are pass by value 

// object and array are pass by reference
let student1 = {name: "Akash", pertner: "would be"};
let student2 = {name: "sayem", pertner: "somaia"};

function makeMovie(couple1, couple2){
    couple2.name = "sama";
    couple1.pertner = "......";
}
console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1, student2);