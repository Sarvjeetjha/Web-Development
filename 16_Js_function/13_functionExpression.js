//function expression is used to store the reference of function definition in a variable

let greet=function(){
    console.log("hello")
}
greet( )


greet=function(){
    console.log("namaste");
}

greet()


const sumNumber=function(a,b){
    return a+b
}
console.log(sumNumber(2,6));