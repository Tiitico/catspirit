const mainscreen = document.querySelector('#mainscreen');
const upbt = document.querySelector('#upbt')
const downbt = document.querySelector('#downbt')
const powerbt = document.querySelector('#powerbt')
const fundo = document.querySelector('.fundo')
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

controlls.style.fontSize = '12.7svh';

lifehud.style.height = '67.5svh'
lifeblur.style.filter = 'blur(2.1svh)'

upbt.style.left = '16.9svh';
upbt.style.bottom = '33.8svh';
downbt.style.left = '16.9svh';
downbt.style.bottom = '8.4svh';
powerbt.style.right = '16.9svh';
powerbt.style.bottom = '25.3svh';

fundo.style.left = '4.2svh'
fundo.style.height = '4.2svh'
fundo.style.width = '44.3svh'
fundo.style.bottom = '9.7svh'

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

controlls.style.fontSize = '6svw';

lifehud.style.height = '32svw'
lifeblur.style.filter = 'blur(1svw)'

upbt.style.left = '8svw';
upbt.style.bottom = '16svw';
downbt.style.left = '8svw';
downbt.style.bottom = '4svw';
powerbt.style.right = '8svw';
powerbt.style.bottom = '12svw';

fundo.style.left = '2svw'
fundo.style.height = '2svw'
fundo.style.width = '21svw'
fundo.style.bottom = '4.6svw'


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
/*
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
  16: "Botão central"
*/
 let controleConectado = false;
  let pulando = false;
  let fazendoSquat = false;
  let ladoesq = false
  let ladodir = false
  const touchdetect = navigator.maxTouchPoints;
    let touch = false


  window.addEventListener("gamepadconnected", () => {
    console.log("Controle conectado!");
    controleConectado = true;
    touch = false
    touchactive()
    controlgamepad();
  });

  window.addEventListener("gamepaddisconnected", () => {
    console.log("Controle desconectado.");
    controleConectado = false;
    if (touchdetect > 0) {
      touch === true
      touchactive()
    }
  });

  function controlgamepad() {
    const gamepad = navigator.getGamepads()[0];
    if (!gamepad) return;

    if (gamepad.buttons[0].pressed) {
      if (lifestats>0) {
       if (!powerr) power(); // ativa se ainda não ativou
      }else{
                  switch (gameoverchoice) {
                case 1:
                    startgame()
                    break;
                    case 2:
                    tutorialanimation()
                    break;
                    case 3:
                        window.location.href = `index.html`;
                    break;
            }
      }
    }

    const gpye = gamepad.axes[1]; // analógico esquerdo vertical
    const gpxe = gamepad.axes[0];// analogico horizontal esquerdo
    const gpyd = gamepad.axes[3]; // analógico direito vertical
    const gpxd = gamepad.axes[2];// analogico horizontal esquerdo


    // PULAR
    if (gpye < -0.2 || gpyd < -0.2||gamepad.buttons[12].pressed) {
     if (lifestats>0) {
            if (catstats === 1 &&(y <= 6.8 || gravity === false)) {
        
      
      if (!pulando) {
        pulando = true;
        squatt = false;
        cat.style.height = '10%';
        requestAnimationFrame(jump);
      }
    }
     }else{
            if (!pulando) {
              pulando = true;
            gameoverchoice -= 1; // Subir no menu
            if (gameoverchoice < 1) {
                gameoverchoice = 3; // Volta para a última opção
            }
             gameovermenucolor();
          }
     }

    } else {
      pulando = false; // libera o pulo quando analógico volta
    }


    // AGACHAR
    if (gpye > 0.2 || gpyd > 0.2||gamepad.buttons[13].pressed) {
      if (lifestats>0) {
      if (!fazendoSquat) {
        fazendoSquat = true;
        squatt = true;
        requestAnimationFrame(squat);
        requestAnimationFrame(squattanimation);
      }
    }else{
      if (!fazendoSquat) {
        fazendoSquat = true
              gameoverchoice += 1; // Descer no menu
            if (gameoverchoice > 3) {
                gameoverchoice = 1; // Volta para a primeira opção
            }
            gameovermenucolor()
      }
    }
    } else {
      if (fazendoSquat) {
        fazendoSquat = false;
        squatt = false;
        cat.style.height = '10%';
      }
    }

    if (tutorial === true) {
       if (gpxe < -0.2 || gpxd < -0.2||gamepad.buttons[14].pressed){
        if (!ladoesq) {
          ladoesq = true
           tutorialchoice -= 1; // esquerda no menu
        if (tutorialchoice < 1) {
            tutorialchoice = tutos.length; // Volta para a última opção
        }
        tutochoice()
        }

       }else{
          ladoesq = false
        }
       if (gpxe > 0.2 || gpxd > 0.2||gamepad.buttons[15].pressed){
 if (!ladodir) {
          ladodir = true
           tutorialchoice += 1; // direita no menu
        if (tutorialchoice > tutos.length) {
            tutorialchoice = 1; // Volta para a primeira opção
        }
        tutochoice()
        }

       }else{
          ladodir = false
        }

    }

    if (gamepad.buttons[9].pressed) {
      if (lifestats>0) {
                 pause = true
        pauseanimationON()
      }else{
          switch (gameoverchoice) {
                case 1:
                    startgame()
                    break;
                    case 2:
                    tutorialanimation()
                    break;
                    case 3:
                        window.location.href = `index.html`;
                    break;
            }
      }
    }
        if (gamepad.buttons[1].pressed) {
          if (tutorial === true) {
            exittuto()
          }
          if (pause === true && tutorial === false) {
            pauseanimationOFF()
          }
        }
    if (controleConectado) {
      requestAnimationFrame(controlgamepad);
    }
  }

  document.addEventListener('touchstart',()=>{
    touch = true
    touchactive()
  });
  document.addEventListener('keydown',()=>{
    touch = false
    touchactive()
  })
  if(touchdetect > 0) {
    touch = true
  }

function touchactive(){
      switch (touch) {
        case true:
          controlls.style.display = 'flex'
          break;      
        default:
          controlls.style.display = 'none'
          break;
      }
    }
    touchactive()
    
    upbt.addEventListener('touchstart',()=>{
      upbt.style.color = ' rgb(0, 157, 255)'
      if (lifestats>0 && pause === false) {
       if (catstats === 1) {
        cat.style.height = '10%'
            if (y<=6.8 || gravity === false ) {
                squatt =false
              requestAnimationFrame(jump)  
        }
       }
      }
    });
    upbt.addEventListener('touchend', ()=>{
      upbt.style.color =' #ffffffb7';
    })
    downbt.addEventListener('touchstart',()=>{
      downbt.style.color = ' rgb(0, 157, 255)'
      if (lifestats>0&& pause===false) {
           squatt= true;
            requestAnimationFrame(squat)
            requestAnimationFrame(squattanimation)
      }
    })
        downbt.addEventListener('touchend',()=>{
             downbt.style.color =' #ffffffb7';
 cat.style.height= '10%';
            squatt= false;
        })
        powerbt.addEventListener('touchstart',()=>{
          powerbt.style.color = ' rgb(0, 157, 255)'
           if (powerr === false) {
        power()
    }
        })
        powerbt.addEventListener('touchend',()=>{
          powerbt.style.color =' #ffffffb7';
        })
