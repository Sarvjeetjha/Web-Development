/*lexical scope :-A variable defined outside a function can be accessible 
inside another function defined after the varisble declaration

NOte :- reverse iis not true*/
//********************************************************** */
// function outerFunc(){
//     let a=5
//     function innerFunc(){
//         console.log(a);
//     }
//     innerFunc()
// }

// outerFunc()


/************************************************************** */

function outerFunc(){
   
    function innerFunc(){
        console.log(a);
    }
    let a=5 //possible due to Hoisting
    innerFunc()
}

outerFunc()

