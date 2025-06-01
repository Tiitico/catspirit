const obsskin = [
    {id: 1, name: 'aeronave roxa', 
        sprite1:'./public/sources/obstacles/purplenave.png',
        rotate: true,
        colisionheigth:10,
        colisionwidth:8,
        heigth: 260,
        width: 150,
        bottom: -84
    },
    {id: 2, name: 'aeronave vermelha', 
        sprite1:'./public/sources/obstacles/rednave.png',
        rotate: true,
        colisionheigth:10,
        colisionwidth:8,
        heigth: 260,
        width: 150,
        bottom: -84
    },
    {id: 3, name: 'aeronave verde', 
        sprite1:'./public/sources/obstacles/greennave.png',
        rotate: true,
        colisionheigth:10,
        colisionwidth:8,
        heigth: 260,
        width: 150,
        bottom: -84
    },
    {id: 4, name: 'aeronave ciano', 
        sprite1:'./public/sources/obstacles/cyannave.png',
        rotate: true,
        colisionheigth:10,
        colisionwidth:8,
        heigth: 260,
        width: 150,
        bottom: -84
    },
    {id: 5, name: 'aeronave rosa', 
        sprite1:'./public/sources/obstacles/pinknave.png',
        rotate: true,
        colisionheigth:10,
        colisionwidth:8,
        heigth: 260,
        width: 150,
        bottom: -84
    },
        {id: 6, name: 'missil', 
        sprite1:'./public/sources/obstacles/balistic1.png',
        sprite2:'./public/sources/obstacles/balistic2.png',
        sprite3:'./public/sources/obstacles/balistic3.png',
        sprite4:'./public/sources/obstacles/balistic4.png',
        colisionheigth:8,
        colisionwidth:10.4,
        heigth: 300,
        width: 110,
        bottom: -104
    },
    {id: 7, name: 'aeronave rgb', 
        sprite1:'./public/sources/obstacles/rednave.png',
        sprite2:'./public/sources/obstacles/pinknave.png',
        sprite3:'./public/sources/obstacles/purplenave.png',
        sprite4:'./public/sources/obstacles/greennave.png',
        sprite5:'./public/sources/obstacles/cyannave.png',
        rotate: true,
        colisionheigth:10,
        colisionwidth:8,
        heigth: 260,
        width: 150,
        bottom: -84
    },
    {id: 8, name: 'fusca azul', 
        sprite1:'./public/sources/obstacles/beetleblue1.png',
        sprite2:'./public/sources/obstacles/beetleblue2.png',
        colisionheigth:10,
        colisionwidth:8,
        heigth: 260,
        width: 150,
        bottom: -84
    },
    {id: 9, name: 'fusca amarelo', 
        sprite1:'./public/sources/obstacles/beetleyellow1.png',
        sprite2:'./public/sources/obstacles/beetleyellow2.png',
        colisionheigth:10,
        colisionwidth:8,
        heigth: 260,
        width: 150,
        bottom: -84
    },
    {id: 10, name: 'fusca vermelho', 
        sprite1:'./public/sources/obstacles/beetlered1.png',
        sprite2:'./public/sources/obstacles/beetlered2.png',
        colisionheigth:10,
        colisionwidth:8,
        heigth: 260,
        width: 150,
        bottom: -84
    },
    {id: 11, name: 'fusca verde', 
        sprite1:'./public/sources/obstacles/beetlegreen1.png',
        sprite2:'./public/sources/obstacles/beetlegreen2.png',
        colisionheigth:10,
        colisionwidth:8,
        heigth: 260,
        width: 150,
        bottom: -84
    },
]
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
obskctrl-=1
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
        rotatevalue += menos ? -1 : 1;
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

