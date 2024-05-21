
let todo=[];
while(true){
    let n=prompt("enter your choice");
    if(n.toLowerCase()=='quit' ){
        console.log("-------------------------");
        console.log("You Quit");
        break;
    }
    else if(n.toLowerCase()=='list'){
        console.log("-------------------------");
        for (iteam of todo){
            console.log(iteam);

        

        }
        console.log("-------------------------");
    } 
    else if(n.toLowerCase()=='add'){
        let a=prompt("enter iteam to add");
        console.log("-------------------------");
        todo.push(a);
        console.log("Iteam added");
        console.log("-------------------------");
    }
    else if(n.toLowerCase()=='delete'){
        let b=prompt("enter item to delete");
        console.log("-------------------------");
        let idx=todo.indexOf(b);
        todo.splice(idx,1);
        console.log("Iteam ", b ,"deleted");
        console.log("-------------------------");
    }
    else{
        console.log("-------------------------");
        prompt("invalid input");
        console.log("-------------------------");
    }
   
}