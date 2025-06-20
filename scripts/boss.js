let bossx = 100
let bosstimer = parseInt(Math.random() * 10000) + 25000;
function bosscontroller(){
    if (bossstats === false&&lifestats>0) {
        if (pause===false) {    
        bosstimer -= 10*fpsadjust
    }
        if (bosstimer<=0&&pause === false) {
            bosslifestats = 10
            lifeboss.style.width = `${bosslifestats*10}%`
            lifeblur.style.width = `${bosslifestats*11.2}%`
            bonuschoce = 1
            bonusmoving()
            bossaparicion()
        }
        else{requestAnimationFrame(bosscontroller)}
    }
}
const bosshud = document.querySelector('#bosshud')
let bhx =-20;
const bossimg = document.querySelector('#bossimg')
function bossaparicion(){
    if (lifestats>0) {
        
    bossimg.src='./public/sources/obstacles/gatobossteste.png'
bossstats = true
bosshud.style.display = 'flex'
boss.style.display = 'flex'
setTimeout(()=>{
bosshud.style.opacity = '100%';
},480)
if (bossx > 76) {
    if (pause === false ) {
        bossx -= moving*0.36;
        boss.style.left =`${bossx}%`
    }
requestAnimationFrame(bossaparicion)
}else{
    bosstimer = 1000;
    bosstimer2 = 10000
    balistmoving1()
    bosslife()
}}
}
let balisticskin = 40
function balistmoving1() {
    if (bossstats === true&& lifestats>0) {
    balist1.style.display = 'flex'
    if (pause === false) {
     bosstimer-=10*fpsadjust
    }
    if (bosstimer>=1) {
        ox2 = 80
        balistimg1.src =  './public/sources/obstacles/alert.png'
        balist1.style.bottom =`${y}%`
        requestAnimationFrame(balistmoving1)
    }else{
            if (ox2 > 0) {
                if (pause === false && colision === false) {
                    balisticskin -= 1
                    let sprite = './public/sources//obstacles/redbalistic1.png';
if (balisticskin > 30) sprite = './public/sources//obstacles/redbalistic4.png';
else if (balisticskin > 20) sprite =  './public/sources//obstacles/redbalistic3.png';
else if (balisticskin > 10)sprite =  './public/sources//obstacles/redbalistic2.png';
else if (balisticskin > 0) sprite =  './public/sources//obstacles/redbalistic1.png';
else {
balisticskin = 40
} 
balistimg1.src =sprite
ox2 -= moving*1.3;
                    obstaclecolision();
                }
requestAnimationFrame(balistmoving1)
    } else {
        balisticskin = 40
        ox2 = 80; 
        balist1.style.display = 'none'
        bosstimer =1000
        balistmoving2()
    }

}
balist1.style.left =`${ox2}%`
}else{
    bosstimer =  parseInt(Math.random() * 10000) + 40000;
    bosscontroller()
}
}
function balistmoving2() {
    if (bossstats===true &&lifestats>0) {
    balist2.style.display = 'flex'
    if (pause === false) {
        bosstimer-=10*fpsadjust
    }
    if (bosstimer>=1) {
        ox2 = 80
        balistimg2.src = './public/sources/obstacles/alert.png'
        balist2.style.bottom =`${y}%`
        requestAnimationFrame(balistmoving2)
    }else{
            if (ox2 > 0) {
                if (pause === false && colision === false) {
                        balisticskin -= 1
                        let sprite = './public/sources//obstacles/redbalistic1.png';
    if (balisticskin > 30) sprite = './public/sources//obstacles/redbalistic4.png';
    else if (balisticskin > 20) sprite =  './public/sources//obstacles/redbalistic3.png';
    else if (balisticskin > 10)sprite =  './public/sources//obstacles/redbalistic2.png';
    else if (balisticskin > 0) sprite =  './public/sources//obstacles/redbalistic1.png';
    else {
    balisticskin = 40
    } 
    balistimg2.src =sprite
                    ox2 -= moving*1.3;
                    obstaclecolision();
                }
requestAnimationFrame(balistmoving2)
    } else {
        balisticskin = 40
        ox2 = 80; 
        balist2.style.display = 'none'
        bosstimer =1000
        balistmoving1()
    }

}
balist2.style.left =`${ox2}%`
}else{
    bosstimer =  parseInt(Math.random() * 10000) + 40000;

    bosscontroller()
}
}
let bosstimer2 =10000
function bosslife() {
    if (bosslifestats > 0&&lifestats>0) {
        if (pause === false)  {
            bosstimer2 -=5*fpsadjust
        }
        if (bosstimer2<=0) {
            lifestats = 0
            statsupdate()
            cat.style.display = 'none'
            gameovermenuanimation()
        }else{
            requestAnimationFrame(bosslife)
        }
    }else if(bosslifestats<=0){
        bossstats = false
        requestAnimationFrame(obchoce)
        ox2 = 100
        bossoff()
    }
}
function bossoff(){
    balist1.style.display = 'none'
    balist2.style.display = 'none'
    balist2.style.left =`${ox2}%`
    balist1.style.left =`${ox2}%`
  
    bosshud.style.opacity = '0%'
    setTimeout(()=>{
            bosshud.style.display='none'
    },480)
    if (bossx < 100) {
        if (pause === false ) {
            bossx += moving*0.36;
            boss.style.left =`${bossx}%`
        }
    requestAnimationFrame(bossoff)
    }else{
        boss.style.display='none'
    }
}