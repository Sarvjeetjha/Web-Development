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




// returning function

function oddEvenRequest(request){
    if(request.toLowerCase()=="odd"){
        return function(n){
            console.log(n%2!=0)
        }
    }
    else if(request.toLowerCase()=="even"){
        return function(n){
            console.log(n%2==0)
        }
    }
    else{
        console.log("invalid request");
    }


}
let oddEvenCheck=oddEvenRequest("odd")
oddEvenCheck(5);