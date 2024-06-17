//function that return the concatination of all string in array
function concateString(stringArray){
    let result  =""
    for (each of stringArray){
        result+=each+" ";
    }
    return result;
}
let stringArray=['hello','dear','how','are','you','!']
let result=concateString(stringArray);
console.log(result);