
let obsskinchoice= parseInt(Math.random() * obsskin.length) + 1;
let obskctrl= 30;
const noterreocalc = parseInt(obsskin.length-4);


function getSpriteTag(sprite) {
    return `"${sprite}"`;
  }

function skincontrol() {
    if (obschoice<=7) {
        obsskinchoice= parseInt(Math.random() * 4) + noterreocalc;
    }else{
     obsskinchoice= parseInt(Math.random() * noterreocalc) + 1;}
     let obj = obsskin.find(obs => obs.id === obsskinchoice)
    const numSprites = Object.keys(obj).filter(key => key.startsWith('sprite')).length;
    obskctrl= 10*numSprites;
}   

let rotatevalue = 10
let menos = true

function skinselector(){
    if (pause === false&&powerr === false&&colision=== false) {
obskctrl-=1*fpsadjust
let obj = obsskin.find(obs => obs.id === obsskinchoice)

let sprite = obj.sprite1;
if (obskctrl > 40) sprite = obj.sprite5;
else if (obskctrl > 30) sprite = obj.sprite4;
else if (obskctrl > 20) sprite = obj.sprite3;
else if (obskctrl > 10) sprite = obj.sprite2;
else if (obskctrl > 0) sprite = obj.sprite1;
else {
    const numSprites = Object.keys(obj).filter(key => key.startsWith('sprite')).length;
    obskctrl = 10 * numSprites;
    sprite = obj.sprite1;
}

obss.forEach(el=>el.style.height = `${obj.heigth}%`)
obss.forEach(el=>el.style.width = `${obj.width}%`)
obss.forEach(el=>el.style.bottom = `${obj.bottom}%`)
//repetir pra evitar falhas
obss.forEach(el=>el.style.height = `${obj.heigth}%`)
obss.forEach(el=>el.style.width = `${obj.width}%`)
obss.forEach(el=>el.style.bottom = `${obj.bottom}%`)

obstacle.style.height = `${obj.colisionheigth}%`
obstacle.style.width = `${obj.colisionwidth}%`
obstacle2.style.height = `${obj.colisionheigth}%`
obstacle2.style.width = `${obj.colisionwidth}%`

const preloadImg = new Image();
      preloadImg.onload = () => {
obss.forEach(el=>el.src = sprite)
    };
      preloadImg.src = sprite;

}
}

let rotateboss = rotatevalue*1;

function rotations(){

    let obj = obsskin.find(obs => obs.id === obsskinchoice)

    if (pause === false && lifestats>0) {
        rotatevalue += menos ? -1*fpsadjust : 1*fpsadjust;
        if (rotatevalue >= 10) menos = true;
        else if (rotatevalue <= -10) menos = false;
        rotateboss = rotatevalue*0.2;
        boss.style.transform = `rotate(${rotateboss}deg)`
boss.style.top = `${rotatevalue*0.8+30}%`
        if (obj.rotate) {
        obss.forEach(el=>el.style.transform = `rotate(${rotatevalue}deg)`);
    } else {
        obss.forEach(el=>el.style.transform = `rotate(0deg)`);
    }
    }
    requestAnimationFrame(rotations)
}

