var inquirer=require("inquirer"); 
var zombieHeart=15;
var youHeart=70;

async function MakeSync(){
while(zombieHeart>0 && youHeart>0){
var damage=Math.ceil(Math.random() * 9);   
var ZombieNum=Math.ceil(Math.random() * 4);
var answers=await inquirer
  .prompt([
    {
        type:"list",
        name:"choice",
        message:"Your guess?",
        choices:["1","2","3","4","5"]
    }
  ]);
  
 
    if(answers.choice ==ZombieNum){
        zombieHeart=zombieHeart-damage;
        if(zombieHeart<0){
            zombieHeart=0;
        }
        console.log("Your choice was correct and Zombie's  heart is"+zombieHeart);
        if(zombieHeart<=0){
           console.log("You won!!!");
        }

    }
    else{
        youHeart=youHeart-damage;
        if(youHeart<0){
            youHeart=0;
        }
        console.log("Your choice was wrong. Correct answer was"+ZombieNum+". Your heart is"+youHeart);
        if(youHeart<=0){
            console.log("You lost!!!");
         
        }
    }
 

}}
MakeSync();