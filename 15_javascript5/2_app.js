let maximum=prompt("enter  your maximum number");
let number=Math.floor(Math.random()*maximum) + 1;
let choice=prompt("ENTER  your guessing");
while(true){
    
    if(choice=="quit"){
        console.log("you quit");
        alert("you quit");
        break;
    }
    if(choice==number){
        console.log("congratulations your guess is correct");
        alert("your guess is correct");
        break;

    }
    else{
        if(choice<number){
            
            choice=prompt("ENTER  large number");
            
        }
        else{
            
            choice=prompt("ENTER  small number");
        }
    }
    
}