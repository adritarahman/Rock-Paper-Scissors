let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const scoreUser=document.querySelector("#user-score");
const scoreComp=document.querySelector("#comp-score");
const msg=document.querySelector("#msg");
const newgame=document.querySelector("#newgame");


const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randId=Math.floor(Math.random()*3);
     return options[randId];
}

newgame.addEventListener(("click"),()=>{
      userScore=0;
      compScore=0;
      scoreUser.innerText=`${userScore}`;
      scoreComp.innerText=`${compScore}`;
      msg.innerText=`Play Your Move`;
})

const drawgame=()=>{
    //console.log("the game is draw");
    msg.innerText="Game was Draw! Play Again";
    msg.style.backgroundColor="#7068e1";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        //console.log("you win");
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        scoreUser.innerText=`${userScore}`;
    }
    else{
        //console.log("computer win");
        msg.innerText=`You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        scoreComp.innerText=`${compScore}`;
    }
}


const playgame=(userChoice)=>{
    //console.log("user choice-",userChoice);
    const compChoice=genCompChoice();
    //console.log("computer choice-",compChoice);

    if(userChoice===compChoice){
        drawgame();
    }

    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin= compChoice==="paper"? false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"? false:true;
        }
        else{
           userWin= compChoice==="rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}




choices.forEach((choice)=> {
    choice.addEventListener(("click"),()=>{
        // console.log("choice was clicked");
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    })
});