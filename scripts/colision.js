const obstacle = document.querySelector('#obstacle');
const obstacle2 = document.querySelector('#obstacle2');
const bonus = document.querySelector('#bonus');
const boss = document.querySelector('#boss')
const balist1 = document.querySelector('#balist1')
const balist2 = document.querySelector('#balist2')

let colision = false;
let colisionbonus = false;

function isColliding(rect1, rect2) {
    return (
        rect1.left < rect2.right &&
        rect1.right > rect2.left &&
        rect1.top < rect2.bottom &&
        rect1.bottom > rect2.top
    );
}

function bonuscolision(){
    const catrect = cat.getBoundingClientRect();
    const bonusrect = bonus.getBoundingClientRect();
    
    if (isColliding(catrect,bonusrect)){
        bx = 100
        bonus.style.left = `${bx}%`
        colisionbonus = true
        bonuschoice()
        if (lifestats> 0 ) {
            setTimeout(()=>{
            colisionbonus = false
            bonustime()
            },320)
        }  
    }
}

function obstaclecolision() {

    const catrect = cat.getBoundingClientRect();
    const obstaclerect = obstacle.getBoundingClientRect();
    const obstaclerect2 = obstacle2.getBoundingClientRect();
    const balist1rect = balist1.getBoundingClientRect()
    const balist2rect = balist2.getBoundingClientRect()

if (imortality === false) {
        if (isColliding(catrect,obstaclerect)||isColliding(catrect,obstaclerect2)||isColliding(catrect,balist1rect)||isColliding(catrect,balist2rect)){
if (colision === false) {
    lifestats -=1
    statsupdate()
    deathanimation()

        setTimeout(()=>{
            if (lifestats>0) {
                requestAnimationFrame(skincontrol)
                ox = 0
            ox2 = 0
            balist1.style.left = `${ox}%`
            balist2.style.left = `${ox}%`
        obstacle.style.left = `${ox}%`
        obstacle2.style.left = `${ox}%`
            }
        },250)
        gravity = true
}
colision = true
setTimeout(()=>{
        if (lifestats > 0) {
            colision = false
        }
},250)
    }
}

}
function addScore() {
    let multp = multtemp*multperm
     if (pause === false) {
            score +=multp;
     }
       if (score >= bestscore) {
    bestscore = score;
    localStorage.setItem("bestscore", bestscore);
}
     
   if (lifestats> 0) {

    setTimeout(addScore,100)
statsupdate()
    }
}

function statsupdate() {
    const statusbar = document.querySelector('#statusbar')
    statusbar.innerHTML = `
    <div class="fish" id="fish">
    <img src="./public/sources/objects/fishpower.png" id="fishimage" class="statsitens" alt="">
                       <h1 class="stats" id="fishcounter">×${powerstats}</h1>
    </div>
    <div class="heart" id="heart">
             <img src="./public/sources/objects/heart.png" id="heartimage" class="statsitens" alt="">               
                 <h1 class="stats" id="heartcounter">×${lifestats}</h1> 
    </div>
    <div class='score'>
    <p id="sc1">score: ${score}</p>
    <p id="sc2">best score: ${bestscore}</p>
    </div>
    `
    }
    
    

