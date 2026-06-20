const asta = document.getElementById("asta");
const enemy = document.getElementById("enemy");
const scoreDisplay = document.getElementById("score");
let score = 0;


function jump() {
    if (!asta.classList.contains("jump")) {
        asta.classList.add("jump");
        
       
        setTimeout(function () {
            asta.classList.remove("jump");
        }, 500);

       
        score = score + 1;
        scoreDisplay.innerText = "Score: " + score;
    }
}


document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
        event.preventDefault(); 
        jump();
    }
});

document.addEventListener("click", jump);


setInterval(function () {
    let astaBottom = parseInt(window.getComputedStyle(asta).getPropertyValue("bottom")) || 0;
    let enemyLeft = parseInt(window.getComputedStyle(enemy).getPropertyValue("left")) || 600;

   
    if (enemyLeft > 50 && enemyLeft < 110 && astaBottom <= 70) {
        alert("GAME OVER, Black Shadow! Your Score: " + score);
        score = 0;
        scoreDisplay.innerText = "Score: " + score;
    }
}, 10);