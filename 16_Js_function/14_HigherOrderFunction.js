/*a function that does one or  both:
            * takes one or more  function as argument
            *return a function*/


//taking function as argument
function multipleGreet(func,n){
    for(let i=1;i<=n;i++){
        func()
    }
}
function greet(){
    console.log("Hello!");
}
multipleGreet(greet,5)
