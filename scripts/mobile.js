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
    let controleAtivo = false;

const nomesDosBotoes = {
  0: "A / X",
  1: "B / O",
  2: "X / Quadrado",
  3: "Y / Triângulo",
  4: "L1",
  5: "R1",
  6: "L2 (analógico)",
  7: "R2 (analógico)",
  8: "Select / Back",
  9: "Start",
  10: "L3",
  11: "R3",
  12: "D-Pad ↑",
  13: "D-Pad ↓",
  14: "D-Pad ←",
  15: "D-Pad →",
  16: "Botão central",
};

    window.addEventListener("gamepadconnected", () => {
      console.log("Controle conectado!");
      controleConectado = true;
controlgamepad()
    });
      window.addEventListener("gamepaddisconnected", () => {
    console.log("Controle desconectado.");
    controleAtivo = false;
  });

  function controlgamepad() {
                const gamepad = navigator.getGamepads()[0];
      if (gamepad && gamepad.buttons[0].pressed || gamepad && gamepad.buttons[1].pressed || gamepad && gamepad.buttons[2].pressed || gamepad && gamepad.buttons[3].pressed ) {
      if (powerr=== false) {
        power()
      }
      }
      const gpy = gamepad.axes[1];
      if (gamepad && Math.abs(gpy) > 0.1) {
       if (catstats === 1) {
        cat.style.height = '10%'
            if (y<=6.8 || gravity === false ) {
                squatt =false
              requestAnimationFrame(jump)  
        }
       }
      }
            if (gamepad && Math.abs(gpy) < -0.1) {
        squatt= true;
            requestAnimationFrame(squat)
            requestAnimationFrame(squattanimation)
      }else{
                    cat.style.height= '10%';
            squatt= false;
      }
      if (controleConectado === true) {
        requestAnimationFrame(controlgamepad)
      }
  }