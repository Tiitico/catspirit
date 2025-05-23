const mainscreen = document.querySelector('#mainscreen');

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

if (height > winHeight) {
    height = winHeight;
    width = height * BASE_RATIO;
  }

  mainscreen.style.width = `${width}px`;
  mainscreen.style.height = `${height}px`;

  requestAnimationFrame(scaleadjust);
}
scaleadjust();
