/*
truthy:
    1.true
    2.any positive or negitive number will be truthy but not zero
    3.
 
falsy:
    1. false
    2. 0

*/
const x = 'false';
if(x){
    console.log(`the result is truthy`);
}
else{
    console.log(`the result is falsy`);
}

// optional
// check falsy
const y = '';
if(!y){
    console.log('value is falsy');
}

// check truthy
if(!!x){
    console.log('value is truthy');
}