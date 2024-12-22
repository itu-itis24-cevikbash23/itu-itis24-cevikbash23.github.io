const userInput=document.getElementById("userInput");
const enterBtn=document.getElementById("enterBtn");
const resetBtn=document.getElementById("resetBtn");
const score=document.getElementById("score");
const unknownU=document.getElementById("unknownU");
const unknownN=document.getElementById("unknownN");
const unkNownI=document.getElementById("unknownI");
const unknownT=document.getElementById("unknownU");
const unknownY=document.getElementById("unknownY");
const heart1=document.getElementById("heart1");
const heart2=document.getElementById("heart2");
const heart3=document.getElementById("heart3");
let health=3
let repeatChecker=[]
let scorePoint=0

function gameRestart(){
    health=3
    repeatChecker=[]
    scorePoint=0
    enterBtn.classList.remove("hidden");
    enterBtn.classList.add("button");
    resetBtn.classList.remove("hidden");
    resetBtn.classList.add("button");
    heart1.src="Health.svg";
    heart2.src="Health.svg";
    heart3.src="Health.svg";
    unknownU.src="QuestionMark.svg"
    unknownN.src="QuestionMark.svg"
    unkNownI.src="QuestionMark.svg"
    unknownT.src="QuestionMark.svg"
    unknownY.src="QuestionMark.svg"
}

function gameEnd(){
    if(health>0){
        window.alert("You win!");
    } else{
        window.alert("You lose!");
    }
    enterBtn.classList.remove("button");
    enterBtn.classList.add("hidden");
    health=3;
    repeatChecker=[];
    scorePoint=0;
}

function heartBreaker(number){
    if(number===0){
        heart1.src="BrokenHealth.svg";  
    } else if(number===1){
        heart2.src="BrokenHealth.svg";
    } else if(number===2){
        heart3.src="BrokenHealth.svg";
    }
}

function wordPrediction(string){
        if(string.toLowerCase()==="unity"){
            score.innerHTML="Score:"+(100+(health*20));
        } else{
            health=0
            heart1.src="BrokenHealth.svg";
            heart2.src="BrokenHealth.svg";
            heart3.src="BrokenHealth.svg";   
        }
        gameEnd();
}


function letterPrediction(letter){
    if(scorePoint===100){
        gameEnd();
    }
    if(letter.toLowerCase()==="u" && !(repeatChecker.includes(letter))){
        unknownU.src="U.svg";
        repeatChecker.push(letter);
        scorePoint+=20;
        score.innerHTML="Score:"+scorePoint;
    } else{
        health=health-1;
        heartBreaker(health);
        if(health===0){
            gameEnd()
        }
    }
}
    
enterBtn.addEventListener("click",() => {
    resetBtn.classList.remove("hidden");
    resetBtn.classList.add("button");
    const guess=userInput.value;
    if(guess.length>1){
        wordPrediction(guess);
        } else{
            letterPrediction(guess);
        }
})

resetBtn.addEventListener("click",() => {
    gameRestart()
})