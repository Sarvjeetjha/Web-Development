//function
//function to greet


// function great(){
//     console.log("Hello Dear!! Good Morning");
// }
// great();

//to add two number
// function add(a,b){
//     return (a+b);
// }
// console.log(add(25,300));

/****************Function Expression
 * -->>>in Function Expression we do not write the name of function,
 *  we just store the reference of function in a variable
         */



let greet=function(){
    console.log("Hello everyone!!");
}
greet()

greet =function(){ //Updating the function definition to the variable
    console.log("Namaste");
}
greet()

// let variable=function(a,b){ //storing function referece in a variable   
//     return a+b;
// }
// console.log(variable(2,50));


