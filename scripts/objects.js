let lastFrameTime = performance.now();
let frameCount = 0;
let fps = 6;
let fpsbase = 6;
let fpsadjust = fpsbase/fps;

let movctrl = 0.9
let moving = fpsadjust*movctrl;

function calculateFPS(now) {
  frameCount++;

  const delta = now - lastFrameTime;

  // Atualiza o FPS a cada segundo
  if (delta >= 100) {
    fps = (frameCount / delta) * 100;
    /*console.log(`FPS: ${Math.round(fps)}`);*/
    fpsadjust = parseFloat((fpsbase/fps).toFixed(3));
    moving = parseFloat((fpsadjust*movctrl).toFixed(3))
    frameCount = 0;
    lastFrameTime = now;
  }
  requestAnimationFrame(calculateFPS);
}
requestAnimationFrame(calculateFPS)

const cat = document.querySelector('#cat');
const obs1 = document.querySelector('#obs1')
const obs2 = document.querySelector('#obs2')
const obss = [obs1,obs2];
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

let vgravity = movctrl*0.8;
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

