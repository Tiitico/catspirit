const mainscreen = document.querySelector('#mainscreen');
const stripe1 = document.querySelector('#stripe1');
const stripe2 = document.querySelector('#stripe2');
const stripe3 = document.querySelector('#stripe3');
const stripe4 = document.querySelector('#stripe4');

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

frase.style.fontSize = '5.07vh';
frase.style.lineHeight = '6.75vh';

a2h2.style.fontSize = '2.64vh';
b2h2.style.fontSize = '2.64vh';
c2h2.style.fontSize = '2.64vh';

ah2.style.fontSize = '3.38vh';
bh2.style.fontSize = '3.38vh';
ch2.style.fontSize = '3.38vh';
dh2.style.fontSize = '3.38vh';

a2h2.style.bottom = '21.1vh';
b2h2.style.bottom = '14.8vh';
c2h2.style.bottom = '8.4vh';

a2h2.style.height = '6.3vh';
b2h2.style.height = '6.3vh';
c2h2.style.height= '6.3vh';

ah2.style.top = '21.1vh';
bh2.style.top = '31.6vh';
ch2.style.top = '42.2vh';
dh2.style.top = '52.7vh';

fishcounter.style.fontSize = `6.33vh`;
heartcounter.style.fontSize = `6.33vh`;

sc1.style.fontSize = `2.64vh`;
sc2.style.fontSize = `2.64vh`;


}else{
   width = winWidth;
   height = width / BASE_RATIO;

    frase.style.fontSize = '2.4vw';
frase.style.lineHeight = '3.2vw';

a2h2.style.fontSize = '1.2vw';
b2h2.style.fontSize = '1.2vw';
c2h2.style.fontSize = '1.2vw';

ah2.style.fontSize = '1.6vw';
bh2.style.fontSize = '1.6vw';
ch2.style.fontSize = '1.6vw';
dh2.style.fontSize = '1.6vw';

a2h2.style.bottom = '10vw';
b2h2.style.bottom = '7vw';
c2h2.style.bottom = '4vw';

a2h2.style.height = '3vw';
b2h2.style.height = '3vw';
c2h2.style.height= '3vw';

ah2.style.top = '10vw';
bh2.style.top = '15vw';
ch2.style.top = '20vw';
dh2.style.top = '25vw';

fishcounter.style.fontSize = `3vw`;
heartcounter.style.fontSize = `3vw`;

sc1.style.fontSize = `1.2vw`;
sc2.style.fontSize = `1.2vw`;


  }

  mainscreen.style.width = `${width}px`;
  mainscreen.style.height = `${height}px`;

  requestAnimationFrame(scaleadjust);
}
scaleadjust();
