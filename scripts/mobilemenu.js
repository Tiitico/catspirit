const mainscreen = document.querySelector('#mainscreen');
const stripe1 = document.querySelector('#stripe1');
const stripe2 = document.querySelector('#stripe2');
const stripe3 = document.querySelector('#stripe3');
const stripe4 = document.querySelector('#stripe4');
const classcat = document.querySelector('#class');
const namemenu = document.querySelector('#name')

const BASE_WIDTH = 1536;
const BASE_HEIGHT = 728;
const BASE_RATIO = BASE_WIDTH / BASE_HEIGHT;

function scaleadjust() {

  let winWidth = window.innerWidth;
  let winHeight = window.innerHeight;
  let width = winWidth;
  let height = width / BASE_RATIO;
let heightpercent = mainscreen.offsetHeight
let widthpercent = mainscreen.offsetWidth
let calcwidth = (((widthpercent / window.innerWidth) * 100)-100)/-2;
let calcheight = (((heightpercent / window.innerHeight) * 100)-100)/-2;

mainscreen.style.top = `${calcheight}%`;
mainscreen.style.left = `${calcwidth}%`;
stripe1.style.height = `${calcheight}%`;
stripe2.style.height = `${calcheight}%`;

stripe3.style.width = `${calcwidth}%`
stripe4.style.width = `${calcwidth}%`

if (height > winHeight) {
    height = winHeight;
    width = height * BASE_RATIO;

    description.style.fontSize ='2.96vh';
    skinleftbtn.style.fontSize = '21.1vh';
    skinrighttbtn.style.fontSize = '21.1vh';
    tittle.style.fontSize = '4.4vh';
    classcat.style.fontSize = '2.1vh';
    namemenu.style.fontSize='2.96vh';
    ah2.style.fontSize = '2.96vh';
    bh2.style.fontSize = '2.96vh';
    ulmenu.style.fontSize = '2.96vh';
  
}
  else{
    width = winWidth;
    height = width / BASE_RATIO;

    description.style.fontSize ='1.4vw';
    skinleftbtn.style.fontSize = '10vw';
    skinrighttbtn.style.fontSize = '10vw';
    tittle.style.fontSize = '2.1vw';
    classcat.style.fontSize = '1vw';
    namemenu.style.fontSize='1.4vw';
    ah2.style.fontSize = '1.4vw';
    bh2.style.fontSize = '1.4vw';
    ulmenu.style.fontSize = '1.4vw';


  }
  mainscreen.style.width = `${width}px`;
  mainscreen.style.height = `${height}px`;

  requestAnimationFrame(scaleadjust);
}
scaleadjust();
