// arrays and objects are the reffercnce type data 
const a = {
    name: "Akash"
}
const b = a;
b.name = "Ashraful";
console.log(typeof a, a);
console.log(typeof b, b);

let p = {age: 39};
let q = p;
q = {age: 28};
console.log(typeof p, p);
console.log(typeof q, q);
