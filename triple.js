// double equal
const num1 = 2;
const num2 = 2;
if(num1 == num2){
    console.log('equal');
}
else{
    console.log('not equal');
}
// output: equal
const num3 = 2;
const num4 = '2';
if(num3 == num4){
    console.log('equal');
}
else{
    console.log('not equal');
}
// output: equal




// triple equal
const item1 = 2;
const item2 = 2;
if(item1 === item2){
    console.log('equal');
}
else{
    console.log('not equal');
}
// output: equal
const item3 = 2;
const item4 = '2';
if(item3 === item4){
    console.log('equal');
}
else{
    console.log('not equal');
}
// output: not equal

const first = [];
const second = [];
if(first === second){
    console.log('equal');
}
else{
    console.log('not equal');
}
// output: not equal

const fifth = [];
const forth = fifth;
if(fifth === forth){
    console.log('equal');
}
else{
    console.log('not equal');
}
// output: equal