let y = 6.8;
let squatt = false;
let rotate = 1;

document.addEventListener('keydown', (event) => {
    if (lifestats > 0 && pause === false) {
        // pular
        if (event.code == 'Space' || event.code == 'KeyW' || event.code == 'ArrowUp') {
            if (catstats === 1) {
                cat.style.height = '10%';
                if (y <= 6.8 || gravity === false) {
                    squatt = false;
                    requestAnimationFrame(jump);
                }
            }
        }
        // agachar
        if (event.code == 'ArrowDown' || event.code == 'KeyS') {
            squatt = true;
            requestAnimationFrame(squat);
            requestAnimationFrame(squattanimation);
        }
    }
});

// levantar
document.addEventListener('keyup', (event) => {
    if (event.code == 'ArrowDown' || event.code == 'KeyS') {
        cat.style.height = '10%';
        squatt = false;
    }
});

let fallcontrol = timer * 25;

function squat() {
    fallcontrol = timer * 25;
    if (lifestats > 0 && pause === false) {
        cat.style.height = '7%';
        vgravity = movctrl * 0.8;
        if (y > 6.8) {
            catstats = 2;
            y -= 4 * fpsadjust;
            cat.style.bottom = `${y}%`;
            requestAnimationFrame(squat);
        } else {
            y = 6.8;
            cat.style.bottom = `${y}%`;
            catstats = 1;
        }
    }
}

function jump() {
    if (lifestats > 0 && squatt === false) {
        if (pause === false) {
            fallcontrol -= (timer / 2) * fpsadjust;
            if (y < 36) {
                rotate = 2;
                catstats = 2;
                vgravity *= 0.97; // Diminui gradualmente para simular perda de força ao subir
                y += (2.2 * fpsadjust);
                cat.style.bottom = `${y}%`;
                requestAnimationFrame(jump);
            } else {
                vgravity = movctrl * 0.8; // Reseta a gravidade quando chega ao topo
                if (gravity === true) {
                    if (fallcontrol <= 0) {
                        fall();
                    } else {
                        requestAnimationFrame(jump);
                    }
                }
            }
        } else {
            requestAnimationFrame(jump);
        }
    }
}

function fall() {
    if (lifestats > 0) {
        fallcontrol = timer * 25;
        if (pause === false) {
            if (y > 6.8) {
                rotate = 1;
                vgravity *= 1.02; // Aumenta gradualmente para simular aceleração da queda
                y -= (2 * fpsadjust);
                if (lifestats > 0) {
                    cat.style.bottom = `${y}%`;
                }
                requestAnimationFrame(fall);
            } else {
                y = 6.8;
                if (lifestats > 0) {
                    cat.style.bottom = `${y}%`;
                }
                catstats = 1;
                vgravity = movctrl * 0.8; // Reseta a gravidade ao tocar o chão
            }
        } else {
            requestAnimationFrame(fall);
        }
    }
}