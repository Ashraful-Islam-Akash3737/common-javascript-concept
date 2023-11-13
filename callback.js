function greetings(greetingHandler,name){
    greetingHandler(name);
}
function greetingHandler(name){
    console.log("good morning", name);
}
function greetingHandlerAnother(name){
    console.log("good evening", name);
}
function greetingHandlerOneAnother(name){
    console.log("good night", name);
}
greetings(greetingHandler, "Akash");
greetings(greetingHandlerAnother, "Akash");
greetings(greetingHandlerOneAnother, "Akash");
