// closure
function stopwatch(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}


const watch1 = stopwatch();
console.log(watch1());
console.log(watch1());
console.log(watch1());
