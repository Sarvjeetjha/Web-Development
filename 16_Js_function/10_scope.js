//scope in js
//function scope
// function calSum(num1,num2){
//     let sum =num1+num2
//     console.log(sum);
   
// }
// // console.log(sum);//we cant access sum variable outside function
// calSum(2,3);



//global scope
//  let sum=50 //global scope
//  function calSum(a,b){
    
//     console.log(sum); //it is accessing outisde sum in case of function scope is not present


//  }
//  calSum(2,5)



let sum=50 //global scope
 function calSum(a,b){
    let sum=a+b  //function scope
    console.log(sum); 

 }
 calSum(2,5)
