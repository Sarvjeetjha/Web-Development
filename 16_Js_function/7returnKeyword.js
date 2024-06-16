//used to return value from function
//function to return sum of number

function addNumber(num1,num2){
    const sumNumber=num1+num2
    return sumNumber
}
// let ans= addNumber(2,6)
// console.log(ans);


let ans=addNumber(addNumber(1,2),1)
console.log(ans);