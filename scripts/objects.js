const cat = document.querySelector('#cat');
const obs1 = document.querySelector('#obs1')
const obs2 = document.querySelector('#obs2')

let catskin =localStorage.getItem("catskin") ? parseInt(localStorage.getItem("catskin")) : 1;
let catstats = 1;
let time = 20;
let timer = 15;

if (catskin === NaN||catskin === 0|| catskin === null) {
    catskin = 1
}
    let ox = 100;
    let ox2 = 100;

let lifestats = 1;
let powerstats = 1;
let powerr = false;

let multperm = 1;
let multtemp = 1;
let gravity = true
let imortality = false;
let moving = 0.9;
let vgravity = moving*0.8;
let bossstats = false;
let bosslifestats = 10

let obschoice = parseInt(Math.random() * 20) + 1; 
if (obschoice < 10 ) {
    obschoice = 7
 }
let pause = false
let tutorial = false
document.addEventListener('keydown', (event)=>{
    if (event.code === 'Enter'&& lifestats>0) {
        pause = true
        pauseanimationON()
    }
    if (event.code === 'Escape'|| event.code === 'Backspace') {
        if (tutorial=== false) {
            pauseanimationOFF()     
        }else if(tutorial === true){
            exittuto()
        }
        tutorial = false
    }
})


let score = 0;
let bestscore = localStorage.getItem("bestscore") ? parseInt(localStorage.getItem("bestscore")) : 0;

function startgame(){
    window.location.href = `teste.html`;
    }
