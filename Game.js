let userScore=0;
let comScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const comScorePara=document.querySelector("#com-score");

const genComChoice= () =>{
    const options=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}

const drawGame= () =>{
    console.log("Draw Game...");
    msg.innerText="Draw Game... Play Again";
    msg.style.backgroundColor="#081b31";
}

const showWinner= (userWin,userChoice,comChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You Win!");
        msg.innerText=`You Win! Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor="green";
    }else{
        console.log("You Lose...");
        comScore++;
        comScorePara.innerText=comScore;
        msg.innerText=`You Lose. ${comChoice} beats  your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame = (userChoice) =>{
    console.log("userChoice=",userChoice);
    const comChoice=genComChoice();
    console.log("comChoice=",comChoice);

    if(userChoice==comChoice){
        //Draw Game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice=="rock"){
            //scissors,paper
            userWin=comChoice=="paper"?false:true;
        }else if(userChoice=="paper"){
            //scissors,rock
            userWin=comChoice=="scissors"?false:true;
        }else{
            //paper,rock
            userWin=comChoice=="rock"?false:true;
        }
        showWinner(userWin,userChoice,comChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});