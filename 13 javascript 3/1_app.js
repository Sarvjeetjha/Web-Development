//practice question part 1
// let a=5;
// console.log(a)

// let message="hello!";
// console.log(message.trim().toUpperCase());

// let name="ApnaCollege";
// console.log(name.slice(4,9));
// console.log(name.indexOf("na"));
// console.log(name.replace("Apna","Our"));  
// console.log(name.slice(4).replace('l','t').replace('l','t'))


//practice question part 2

//task to change the start array to final array
//start array ['january',"july","march","August"]
//final array ['july', 'june', 'march', 'August']


//first approach 
// let arr=['january',"july","march","August"];
// console.log(arr);
// arr.splice(0,2,'july', 'june');
// console.log(arr);


//second approach
// let arr=['january',"july","march","August"];
// console.log(arr);
// arr.shift();
// arr.shift();
// console.log(arr);
// arr.unshift('june');
// arr.unshift('july');
// console.log(arr);   


//practice question part 3

let arr=['c','c++','html','javascript','python','java','C#','sql'];     

console.log(arr);
console.log(arr.reverse().indexOf('javascript'));