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

mainscreen.style.top = `${calcheight}svh`;
mainscreen.style.left = `${calcwidth}svw`;
stripe1.style.height = `${calcheight}svh`;
stripe2.style.height = `${calcheight}svh`;

stripe3.style.width = `${calcwidth}svw`
stripe4.style.width = `${calcwidth}svw`

if (height > winHeight) {
    height = winHeight;
    width = height * BASE_RATIO;

frase.style.fontSize = '5.07svh';
frase.style.lineHeight = '6.75svh';

a2h2.style.fontSize = '2.64svh';
b2h2.style.fontSize = '2.64svh';
c2h2.style.fontSize = '2.64svh';

ah2.style.fontSize = '3.38svh';
bh2.style.fontSize = '3.38svh';
ch2.style.fontSize = '3.38svh';
dh2.style.fontSize = '3.38svh';

a2h2.style.bottom = '21.1svh';
b2h2.style.bottom = '14.8svh';
c2h2.style.bottom = '8.4svh';

a2h2.style.height = '6.3svh';
b2h2.style.height = '6.3svh';
c2h2.style.height= '6.3svh';

ah2.style.top = '21.1svh';
bh2.style.top = '31.6svh';
ch2.style.top = '42.2svh';
dh2.style.top = '52.7svh';

fishcounter.style.fontSize = `6.33svh`;
heartcounter.style.fontSize = `6.33svh`;

sc1.style.fontSize = `2.64svh`;
sc2.style.fontSize = `2.64svh`;


}else{
   width = winWidth;
   height = width / BASE_RATIO;

    frase.style.fontSize = '2.4svw';
frase.style.lineHeight = '3.2svw';

a2h2.style.fontSize = '1.2svw';
b2h2.style.fontSize = '1.2svw';
c2h2.style.fontSize = '1.2svw';

ah2.style.fontSize = '1.6svw';
bh2.style.fontSize = '1.6svw';
ch2.style.fontSize = '1.6svw';
dh2.style.fontSize = '1.6svw';

a2h2.style.bottom = '10svw';
b2h2.style.bottom = '7svw';
c2h2.style.bottom = '4svw';

a2h2.style.height = '3svw';
b2h2.style.height = '3svw';
c2h2.style.height= '3svw';

ah2.style.top = '10svw';
bh2.style.top = '15svw';
ch2.style.top = '20svw';
dh2.style.top = '25svw';

fishcounter.style.fontSize = `3svw`;
heartcounter.style.fontSize = `3svw`;

sc1.style.fontSize = `1.2svw`;
sc2.style.fontSize = `1.2svw`;


  }

  mainscreen.style.width = `${width}px`;
  mainscreen.style.height = `${height}px`;

  requestAnimationFrame(scaleadjust);
}
scaleadjust();
