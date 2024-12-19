const userInput=document.getElementById("userInput");
const enterBtn=document.getElementById("enterBtn");
const score=document.getElementById("score");
let scorePoint=0
function wordPrediction(string){
    if(string.length>1){
        if(string.toLowerCase()==="unity"){
            console.log("you win")
        } else{
            console.log("you lose")
        }
    } else if(string.toLowerCase()==="u"){
        scorePoint+=20
        score.innerHTML="Score:"+scorePoint
    }
}
enterBtn.addEventListener("click",() => {
    const Guess=userInput.value;
    wordPrediction(Guess)
})
