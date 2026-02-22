const holes = document.querySelectorAll(".hole");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("startBtn");

let score = 0;
let time = 30;
let gameInterval;
let timerInterval;
let lastHole = null;

function randomHole(){
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];

    if(hole === lastHole){
        return randomHole();
    }

    lastHole = hole;
    return hole;
}

function showMole(){
    const hole = randomHole();
    hole.classList.add("up");

    setTimeout(()=>{
        hole.classList.remove("up");
    }, 700);
}

function startGame(){
    score = 0;
    time = 30;

    scoreDisplay.textContent = score;
    timeDisplay.textContent = time;

    clearInterval(gameInterval);
    clearInterval(timerInterval);

    gameInterval = setInterval(showMole, 800);

    timerInterval = setInterval(()=>{
        time--;
        timeDisplay.textContent = time;

        if(time <= 0){
            clearInterval(gameInterval);
            clearInterval(timerInterval);
            alert("Game Over! Your Score: " + score);
        }

    },1000);
}

holes.forEach(hole=>{
    hole.addEventListener("click", ()=>{
        if(hole.classList.contains("up")){
            score++;
            scoreDisplay.textContent = score;
            hole.classList.remove("up");
        }
    });
});

startBtn.addEventListener("click", startGame);