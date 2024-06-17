//variable declared inside a {} blosk canot be accessed form outside the    block
//it's applicable only for let and const not for var

//********************************* */

// {
//     let a=5
//     console.log(a);
// }
// console.log(a);//cannot accessed outside block
//***************************** */


// { 
//     var a=5
// }
// console.log(a);
//********************************* */


// for(let i=1;i<=5;i++){
//     console.log(i);//block scope
// }
// console.log(i); //cannot accessed outside scope


let age=25
if(age>18){
    let str="adult"
    console.log(str);
}
// console.log(str); //cannot access outside scope

