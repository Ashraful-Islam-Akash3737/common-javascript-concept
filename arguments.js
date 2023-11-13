function add(a, b, c){
    const args = [...arguments];
    console.log(args);
    const result = a + b + c;
    console.log(result);
}
const addIs = add(23, 45, 67, 78, 89);