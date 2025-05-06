
let timer= 60;
let score = 0;
let hitrn = 0;

function makeBubble() {
    let clutter = "";
    for( let i = 0; i<=131; i++){
    
        let rn = Math.floor(Math.random() * 10);
    
        clutter +=`<div class= "bubble"> ${rn} </div>`;
        
    }
    
    document.querySelector("#pbottom").innerHTML = clutter;
    
}

function startTimer() {
    let timerId = setInterval(function() {
        timer--;
        document.querySelector("#timer").innerHTML = timer;
        if (timer <= 0) {
            clearInterval(timerId);
            document.querySelector("#pbottom").textContent = `Game Over!  Your score is: ${score}`;
            document.querySelector("#pbottom").style.color = "red";
            document.querySelector("#pbottom").style.fontSize = "50px";
            document.querySelector("#pbottom").style.fontWeight = "800";
            document.querySelector("#pbottom").style.textAlign = "center";
            
            document.querySelector("#pbottom").style.backgroundColor = "black";
            document.querySelector("#timer").innerHTML = "Time's up!";
            document.querySelector("#timer").style.color = "red";
            document.querySelector("#timer").style.fontSize = "25px";
            document.querySelector("#timer").style.textAlign = "center";
        }
        if (timer <= 10) {
            document.querySelector("#timer").style.color = "red";
            document.querySelector("#timer").style.fontSize = "25px";
            document.querySelector("#tiimer").style.textAlign = "center";
        }
        
    }, 1000);
}


function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent= hitrn;
}


document.querySelector("#pbottom").addEventListener("click", function(dets) {
    let clicked = dets.target.textContent;
    if (clicked == hitrn) {
        getNewHit();
        NewScore();
        makeBubble();
        
    }

    
})

function NewScore() {
    score+=1;
    document.querySelector("#score").textContent= score;
    document.querySelector("#score").style.color = "green";
}

getNewHit();
startTimer();
makeBubble();