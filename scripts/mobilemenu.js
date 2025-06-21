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

    description.style.fontSize ='2.96svh';
    left_btn.style.fontSize = '21.1svh';
    right_btn.style.fontSize = '21.1svh';
    tittle.style.fontSize = '4.4svh';
    classcat.style.fontSize = '2.1svh';
    namemenu.style.fontSize='2.96svh';
    ah2.style.fontSize = '2.96svh';
    bh2.style.fontSize = '2.96svh';
    ulmenu.style.fontSize = '2.96svh';
    screendonate.style.fontSize = '4.2svh';

}
  else{
    width = winWidth;
    height = width / BASE_RATIO;
    description.style.fontSize ='1.4svw';
    left_btn.style.fontSize = '10svw';
    right_btn.style.fontSize = '10svw';
    tittle.style.fontSize = '2.1svw';
    classcat.style.fontSize = '1svw';
    namemenu.style.fontSize='1.4svw';
    ah2.style.fontSize = '1.4svw';
    bh2.style.fontSize = '1.4svw';
    ulmenu.style.fontSize = '1.4svw';
    screendonate.style.fontSize = '2svw';
  }
  mainscreen.style.width = `${width}px`;
  mainscreen.style.height = `${height}px`;

  requestAnimationFrame(scaleadjust);
}
scaleadjust();
