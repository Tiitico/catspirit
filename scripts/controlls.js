
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
    if (gpye < -0.3 || gpyd < -0.3||gamepad.buttons[12].pressed) {
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
    if (gpye > 0.3 || gpyd > 0.3||gamepad.buttons[13].pressed) {
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
       if (gpxe < -0.5 || gpxd < -0.5||gamepad.buttons[14].pressed){
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
       if (gpxe > 0.5 || gpxd > 0.5||gamepad.buttons[15].pressed){
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
