const lifeboss= document.querySelector('#lifeboss')
document.addEventListener('keydown', (event)=>{
if(event.code === 'KeyZ'){
    if (powerr === false) {
        power()
    }
}
})
function power() {
    if (powerstats>0 && lifestats>0 && pause === false) {
        powerstats -= 1;
        bosslifestats-=1
        lifeboss.style.width = `${bosslifestats*10}%`
        powerr = true
        poweranimation()
        setTimeout(()=>{
        ox = 101

        obstacle.style.left = `${ox}%`
        obstacle.style.display = 'none'
        obstacle2.style.left = `${ox}%`
        obstacle2.style.display = 'none'
        },400)
        if (bossstats === true) {
            setTimeout(()=>{
                powerr = false
            },400)
        }else{
        setTimeout(()=>{
powerr = false
        obschoice = parseInt(Math.random() * 40) + 1; 
        if (obschoice < 10 ) {
   obschoice = 7
}
requestAnimationFrame(skincontrol)
reload()
        },2000)
    }    
}}
function reload(){
    if (powerstats <= 0 && powerr === false && pause=== false){
        setTimeout( ()=>{if(powerstats<=0){
                powerstats += 1}}, 15000)
    }
}

let bx = 100;
let by = parseInt(Math.random() * 29) + 7;
    let bonuschoce = parseInt(Math.random() * 265) + 1;
    let bonustimer;


//escolha de tempo de aparição e posição y
function bonustime() {
    if (lifestats>0) {
        if (bossstats === true) {
            bonuschoce = 1
            bonustimer = 1;
            }else if(score < 200 ){
                bonustimer = parseInt(Math.random() * 10000) + 1000;
             bonuschoce = parseInt(Math.random() * 265) + 1;
                }else if(score > 200 ){
                    bonustimer = parseInt(Math.random() * 10000) + 1000;
                  bonuschoce = parseInt(Math.random() * 308) + 1;
             }
    by = parseInt(Math.random() * 29) + 7; 
    }
    setTimeout(bonusmoving, bonustimer) 
    
    }

// movimentação dos coletaveis
function bonusmoving() {
    bonus.style.display = 'flex'
        if (bx > 0 && colisionbonus === false && lifestats>0) {
            if (pause === false) {
                    bx -= moving-0.5;
                    bonuscolision();
                    if (bx <= 100 && bx >= 90) {
                        bonusskins()
                    }
            }
            requestAnimationFrame(bonusmoving)
} else {
    bx = 100; 
    bonus.style.display = 'none'
    if (colisionbonus === false) {
      bonustime() 
    }

} 
bonus.style.left = `${bx}%`
  bonus.style.bottom = `${by}%`
} 

let venenoimu = false
function bonuschoice(){
    if (bonuschoce <= 30 ) {
         powerstats+=1 //1peixe

    }else if(bonuschoce>30 && bonuschoce <= 45){
            lifestats+=1 //1vida

         } else if (bonuschoce>45 && bonuschoce <= 75 ) {
                multtemp = 2; // 1leite
                setTimeout( ()=>{multtemp = 1}, 10000)

                } else if (bonuschoce>75 && bonuschoce <= 105 ) {
                    score +=75 //1 raçao
                    if (moving<2.4){
                        moving +=0.1
                        timer -= 0.5
                    }

                } else if (bonuschoce>105 && bonuschoce <= 135 ) {
                    
                      if(score < 200 && bossstats === false){
                          bonuschoce = parseInt(Math.random() * 265) + 1;
                      }else if(score > 200 && bossstats === false){
            bonuschoce = parseInt(Math.random() * 308) + 1;
        }             
               bonuschoice() //cogumelo

                }else if (bonuschoce>135 && bonuschoce <= 160) {
                    powerstats+=3 //3 peixes

                } else if (bonuschoce>160 && bonuschoce <= 180) {
                    multtemp = 3; //3 leites
                    setTimeout( ()=>{multtemp = 1}, 10000)

                } else if (bonuschoce>180 && bonuschoce <= 205) {
                    score +=250 //3 rações
                    if (moving<2.4){
                        moving +=0.1
                        timer -= 0.5
                    }

                }else if (bonuschoce>205 && bonuschoce <= 230) {
                    if (imortality === false && venenoimu === false) {
                        lifestats -=1;  // veneno
                        gravity = true
                    statsupdate()
                    colision = true
                    if (lifestats>0) {
                        colision = false
                    }else{
                        poisonanimation()
                    }
                    }

                }else if (bonuschoce>230 && bonuschoce <= 245) {
                    moving -= 0.5;  //relogio
                    timer += 2.5;

                    if (moving<1.1) {
                        moving = 1.1
                        timer = 11
                    } 

                }else if (bonuschoce>245 && bonuschoce <= 265) {
                    gravity = false; // pena
                    cat.style.transform =' rotate(0deg) ' 
                    setTimeout( ()=>{gravity = true
                        fall()
                    }, 10000)

                }else if (bonuschoce>265 && bonuschoce<= 275) {
                    imortality= true //pedra celestial azul
                    setTimeout( ()=>{imortality = false 
                    }, 5000)
                }else if(bonuschoce> 275 && bonuschoce<=285){
                    imortality = true //pedra celestial rosa
                    multtemp = 2
                    setTimeout(()=>{
                        imortality = false
                        setTimeout(()=>{multtemp = 1},5000)
                    },5000)
                } else if (bonuschoce>285 && bonuschoce<=286) {
                    if (imortality === false) {
                        lifestats =0;  // pedra celestial preta
                        statsupdate()
                        poisonanimation()
                        colision = true
                }
            } else if (bonuschoce>286 && bonuschoce<=291) {
                gravity= false //pedra celestial roxa

            } else if(bonuschoce> 291 && bonuschoce<= 292){
                    lifestats -= 1
                    gravity = true
                    statsupdate()
                    poisonanimation()
                    colision = true

            // pedra celestial dourada
                if (lifestats>0) {
                    colision= false
                multperm = 4
                ultraacelerate()
                vgravity = moving*0.7;
                score+=250
                imortality = true
                venenoimu= true
                setTimeout(()=>{imortality = false},5000)
                }

            }else if (bonuschoce> 292 && bonuschoce<= 297) {
                 venenoimu = true // pedra celestial verde

            } else if(bonuschoce> 297 && bonuschoce<= 302){
                if (multperm<=3) {
                    multperm = 3
                }// pedra celestial branca
                imortality = false
                venenoimu = false
                powerstats = 0
                gravity = true
                statsupdate()
                ultraacelerate()
                vgravity = moving*0.7;
                
            }else if (bonuschoce> 302 && bonuschoce<= 303) {
                lifestats += 3 // pedra celestial vermelha
                
            
            }else if(bonuschoce> 303 && bonuschoce<= 308){
                venenoimu = true
                ultraacelerate()
                vgravity = moving*0.7;
                imortality = true 
                setTimeout(()=>{
                    imortality = false
                },5000)
            }
            console.log(bonuschoce)
        }

function bonusskins(){
    let bnsskin;
    if (bonuschoce <= 30 ) {
bnsskin = 1
   }else if(bonuschoce>30 && bonuschoce <= 45){
    bnsskin = 2

        } else if (bonuschoce>45 && bonuschoce <= 75 ) {
            bnsskin = 3

               } else if (bonuschoce>75 && bonuschoce <= 105 ) {
                bnsskin = 4

               } else if (bonuschoce>105 && bonuschoce <= 135 ) {
                bnsskin = 5

               }else if (bonuschoce>135 && bonuschoce <= 160) {
                bnsskin = 6

               } else if (bonuschoce>160 && bonuschoce <= 180) {
                bnsskin = 7

               } else if (bonuschoce>180 && bonuschoce <= 205) {
                bnsskin = 8

               }else if (bonuschoce>205 && bonuschoce <= 230) {
                bnsskin = 9

               }else if (bonuschoce>230 && bonuschoce <= 245) {
                bnsskin = 10

               }else if (bonuschoce>245 && bonuschoce <= 265) {
                bnsskin = 11

               }else if (bonuschoce>265 && bonuschoce<= 275) {
                
                bnsskin =12
            }else if(bonuschoce> 275 && bonuschoce<=285){
                bnsskin=13

            } else if (bonuschoce>285 && bonuschoce<=286) {
               bnsskin= 14

        } else if (bonuschoce>286 && bonuschoce<=291) {
            bnsskin =15

        } else if(bonuschoce> 291 && bonuschoce<= 292){
            bnsskin=16

        }else if (bonuschoce> 292 && bonuschoce<= 297) {
             bnsskin = 17

        } else if(bonuschoce> 297 && bonuschoce<= 302){
           bnsskin=19
            
        }else if (bonuschoce> 302 && bonuschoce<= 303) {
            bnsskin=18
        
        }else if(bonuschoce> 303 && bonuschoce<= 308){
            bnsskin=20
            
        }
    const skinsbonus =[
        {id: 1, name: 'fish',
            image:'./public/sources/objects/fishpower.png'
        },
        {id: 2, name: 'heart',
            image:'./public/sources/objects/heart.png'
        },
        {id: 3, name: 'milk',
            image:'./public/sources/objects/milk.png'
        },
        {id: 4, name: 'sachet',
            image:'./public/sources/objects/sachet.png'
        },
        {id: 5, name: 'mushroom',
            image:'./public/sources/objects/mushroom.png'
        },
        {id: 6, name: '3 fishs',
            image:'./public/sources/objects/3fishs.png'
        },
        {id: 7, name: '3 milks',
            image:'./public/sources/objects/3milks.png'
        },
        {id: 8, name: '3 sachets',
            image:'./public/sources/objects/3sachets.png'
        },
        {id: 9, name: 'poison',
            image:'./public/sources/objects/poison.png'
        },
        {id: 10, name: 'clock',
            image:'./public/sources/objects/clock.png'
        },
        {id: 11, name: 'feather',
            image:'./public/sources/objects/feather.png'
        },
        {id: 12, name: 'blue celestial stone',
            image:'./public/sources/objects/bluecelestialstone.png'
        },
        {id: 13, name: 'pink celestial stone',
            image:'./public/sources/objects/pinkcelestialstone.png'
        },
        {id: 14, name: 'black celestial stone',
            image:'./public/sources/objects/blackcelestialstone.png'
        },
        {id: 15, name: 'purple celestial stone',
            image:'./public/sources/objects/purplecelestialstone.png'
        },
        {id: 16, name: 'golden celestial stone',
            image:'./public/sources/objects/goldencelestialstone.png'
        },
        {id: 17, name: 'green celestial stone',
            image:'./public/sources/objects/greencelestialstone.png'
        },
        {id: 18, name: 'red celestial stone',
            image:'./public/sources/objects/redcelestialstone.png'
        },
        {id: 19, name: 'white celestial stone',
            image:'./public/sources/objects/whitecelestialstone.png'
        },
        {id: 20, name: 'cian celestial stone',
            image:'./public/sources/objects/ciancelestialstone.png'
        },
    ];

    if (bnsskin === 2 ){
      const  selectedbonusHTML = skinsbonus
    .filter(bonus => bonus.id === bnsskin)
    .map(bonus => `<img src="${bonus.image}" class="bonusimg" id="heartimage">`)
    bonus.innerHTML = selectedbonusHTML;

    } else{
      const  selectedbonusHTML = skinsbonus
        .filter(bonus => bonus.id === bnsskin)
        .map(bonus => `<img src="${bonus.image}" class="bonusimg">`)
    
        bonus.innerHTML = selectedbonusHTML;

    }

}
const balistimg1 = document.querySelector('#balistimg1');
const balistimg2 = document.querySelector('#balistimg2');
let bossx = 100
let bosstimer = parseInt(Math.random() * 10000) + 25000;
function bosscontroller(){
    if (bossstats === false&&lifestats>0) {
        if (pause===false) {    
        bosstimer -= 10
    }
        if (bosstimer<=0&&pause === false) {
            bosslifestats = 10
            lifeboss.style.width = `${bosslifestats*10}%`
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
if (bhx < 10) {
    if (pause === false ) {
        bhx += moving*0.5;
        bosshud.style.top =`${bhx}%`
    }
    
}
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
     bosstimer-=10
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
        bosstimer-=10
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
            bosstimer2 -=5
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
    if (bhx > -20) {
        if (pause === false ) {
            bhx -= moving*0.7;
            bosshud.style.top =`${bhx}%`
        }
    }else{bosshud.style.display='none'}
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
function ultraacelerate(){
    if (moving<2){
        moving +=0.1
        time -=0.5
        accontroll = 20000
        setTimeout(()=>{
            requestAnimationFrame(ultraacelerate)
        },1000)
    }else{
        moving= 2

    }
}