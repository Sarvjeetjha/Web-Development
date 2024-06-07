let a="radhe radhe";


//object literals
let data={name:"ram",age:20}
console.log(data)
console.log(data.name)//get values from object literals
console.log(data["name"])//getting values form object literals


//Note:- JS automatically convert object keys to string 
const obj={1:"hello",null:"NUll",NaN:"hi",true:"True value"};
console.log(obj) ;

console.log(obj.NaN);
console.log(obj[1]);//here  1 is automatically converted into string 
console.log(obj.true);
console.log(obj[true]);
obj[true]="false";
console.log(obj.true);
data={5:"ram"};//possible 
// obj={5:"ram"}//not possible  as it i declared constant

// adding new key value to object literals
obj.gender="Male";
console.log(obj.gender);



//deleting key from object literals
delete obj.gender;
console.log(obj.gender) //it will give undefuned as it is now deleted


//Objects Of object (nexting)

let classinfo={aman:{grade:'A',city:"Delhi"},ram:{grade:'B',city:"Mumbai"},shyam:{grade:'C',city:"Jipur"}};
console.log(classinfo)
console.log(classinfo.aman.grade)
console.log(classinfo.aman)
console.log(classinfo.shyam)
console.log(classinfo.shyam.city)



//Array of Objects
let classinformation=[{name:"aman",grade:'A',city:"jaipur"},{name:"ram",grade:'B',city:"Mumbai"}]
console.log(classinformation)
console.log(classinformation[1]);
console.log(classinformation[1].city);
classinformation[1].city="chennai";
console.log(classinformation[1].city);


//Maths object
console.log(Math.PI);
console.log(Math.E);
console.log(Math.ceil(2.36));
console.log(Math.floor(2.36));
console.log(Math.trunc(2.90));
console.log(Math.abs(2.90));
console.log(Math.pow(2,3));
console.log(Math.random());
console.log(Math.random(200));
console.log(Math)



//Generate number between 1-100
console.log((Math.floor(Math.random()*100))+1);
//Generate number between 1-5
console.log((Math.floor(Math.random()*5))+1);
//Generate number between 21-25
console.log((Math.floor(Math.random()*5))+21);
