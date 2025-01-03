const userInput=document.getElementById("userInput");
const enterBtn=document.getElementById("enterBtn");
const resetBtn=document.getElementById("resetBtn");
const score=document.getElementById("score");
const unknownU=document.getElementById("unknownU");
const unknownN=document.getElementById("unknownN");
const unkNownI=document.getElementById("unknownI");
const unknownT=document.getElementById("unknownT");
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
    score.innerHTML="Score:00";
    enterBtn.classList.remove("hidden");
    enterBtn.classList.add("button");
    resetBtn.classList.remove("button");
    resetBtn.classList.add("hidden");
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
    enterBtn.classList.add("hidden"); //To make the player unable to play the game after it ends
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
            unknownU.src="U.svg";
            unknownN.src="N.svg";
            unkNownI.src="I.svg";
            unknownT.src="T.svg";
            unknownY.src="Y.svg";
            score.innerHTML="Score:"+(100+(health*20)); //Each remaining health gives extra points
        } else{
            health=0 //Makes sure wrong word prediction returns a loss
            heart1.src="BrokenHealth.svg";
            heart2.src="BrokenHealth.svg";
            heart3.src="BrokenHealth.svg";   
        }
        gameEnd();
}


function letterPrediction(letter){
    if(letter.toLowerCase()==="u" && !(repeatChecker.includes(letter))){
        unknownU.src="U.svg";
        repeatChecker.push(letter);
        scorePoint+=20;
        score.innerHTML="Score:"+scorePoint;
    } else if(letter.toLowerCase()==="n" && !(repeatChecker.includes(letter))){
        unknownN.src="N.svg";
        repeatChecker.push(letter);
        scorePoint+=20;
        score.innerHTML="Score:"+scorePoint;
    } else if(letter.toLowerCase()==="i" && !(repeatChecker.includes(letter))){
        unkNownI.src="I.svg";
        repeatChecker.push(letter);
        scorePoint+=20;
        score.innerHTML="Score:"+scorePoint;
    } else if(letter.toLowerCase()==="t" && !(repeatChecker.includes(letter))){
        unknownT.src="T.svg";
        repeatChecker.push(letter);
        scorePoint+=20;
        score.innerHTML="Score:"+scorePoint;
    } else if(letter.toLowerCase()==="y" && !(repeatChecker.includes(letter))){
        unknownY.src="Y.svg";
        repeatChecker.push(letter);
        scorePoint+=20;
        score.innerHTML="Score:"+scorePoint;
    }
    else{
        health=health-1;
        heartBreaker(health);
        if(health===0){
            gameEnd()
        }
    }
    if(scorePoint===100){
        score.innerHTML="Score:"+(100+(health*20)); //Each remaining health gives extra points
        gameEnd();
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