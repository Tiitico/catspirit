    const squats = cats.filter(cat => cat.id === catskin).map(cat => `${cat.squat}`);
    const run1 = cats.filter(cat => cat.id === catskin).map(cat => `${cat.run1}`);
    const run2 = cats.filter(cat => cat.id === catskin).map(cat => `${cat.run2}`);
    const run3 = cats.filter(cat => cat.id === catskin).map(cat => `${cat.run3}`);
    const cat1 = cats.filter(cat => cat.id === catskin).map(cat => `${cat.image}`);
    catimg.src = cat1

function squattanimation() {
    if (lifestats>0) {
        cat.style.transform =' rotate(0deg) ' 
        if (squatt === true&&lifestats>0) {
         catimg.src = squats
         requestAnimationFrame(squattanimation)
 }else{
                requestAnimationFrame(runanimations)
            }
}
} 

function runanimations(){        
if (catstats===1 && lifestats >0 &&  squatt===false ) {

           cat.style.transform =' rotate(0deg) ' 
           if (catstats === 1) {
            cat.style.height = '10%'
            }
        

    setTimeout(()=>{ 
        if (pause === false) {
                    if (squatt === false &&lifestats>0&& pause === false) {
            catimg.src = run1
        }
            setTimeout(()=>{ 
               if (squatt === false &&lifestats>0&& pause===false) {
                catimg.src = run3
               } 
                setTimeout(()=>{ 
                   if (squatt === false &&lifestats>0&&pause === false) {
                    catimg.src = run2
                   } 
requestAnimationFrame(runanimations)
             },80)
            },80)
        } else{
requestAnimationFrame(runanimations)
        }
        },80) 

    }
        if (catstats === 2 && lifestats>0 && squatt === false) {
            if (rotate=== 2){
                if (gravity=== true) {
                          cat.style.transform =' rotate(-15deg) ' 
                }else{
                    cat.style.transform =' rotate(0deg) ' 
                }
                        catimg.src = run2
requestAnimationFrame(runanimations)
            }else
            if (rotate=== 1 && lifestats>0){
                    if (gravity=== true) {
                       cat.style.transform =' rotate(30deg) ' 
                    } else{
                        cat.style.transform =' rotate(0deg) ' 
                    }
                        catimg.src = run1
requestAnimationFrame(runanimations)
            }
       
        }
    
}

function deathanimation() {
    if (lifestats <= 0) {
        const explosivos = [obstacle, obstacle2, balist1, balist2];

        explosivos.forEach(el => el.innerHTML = '<img src="./public/sources/objects/explosion2.png" class="explosion">');
        
        setTimeout(() => {
            explosivos.forEach(el => el.innerHTML = '<img src="./public/sources/objects/explosion3.png" class="explosion">');
        
            setTimeout(() => {
                explosivos.forEach(el => el.innerHTML = '<img src="./public/sources/objects/explosion4.png" class="explosion">');
        
                setTimeout(() => {
                    ox = 100;
                    ox2 = 100;
        
                    [obstacle, obstacle2, balist1, balist2].forEach(el => {
                        el.style.left = `${ox2}%`;
                        el.style.left = `${ox}%`;
                        el.style.display = 'none';
                    });
                }, 120);
            }, 120);
        }, 120);
        
        
        catimg.src = squats
        if (y < 12) {
            if (ox<24||ox2<24) {
                cat.style.transition = '600ms'
                cat.style.left = '50%'
                cat.style.bottom = '30%'
                cat.style.transform = 'rotate(540deg)'
                setTimeout(()=>{
                    cat.style.transition = '600ms'
                    cat.style.left = '80%'
                    cat.style.bottom = '6.8%'
                    cat.style.transform = 'rotate(1080deg)'
                    setTimeout(()=>[
                        cat.style.left = '90%'
                    ],350)
                },200)
            }else{
            cat.style.transform = 'rotate(-720deg)'
    cat.style.transition = '800ms'
    cat.style.left = '-8%'
    cat.style.bottom = '30%'
            }

        }else{
            if (ox<24||ox2<24) {
                cat.style.transition = '600ms'
                cat.style.transform = 'rotate(540deg)'
                cat.style.left = '50%'
                cat.style.bottom = '60%'
                setTimeout(()=>{
                    cat.style.transition = '600ms'
                    cat.style.left = '80%'
                    cat.style.bottom = '6.8%'
                    cat.style.transform = 'rotate(1080deg)'
                    setTimeout(()=>[
                        cat.style.left = '90%'
                    ],350)
                },200)
                        }else{
                            cat.style.transition = '800ms'
                            cat.style.transform = 'rotate(-720deg)'
                            cat.style.left = '-10%'
                            cat.style.bottom = '60%'
                        }
        }
        setTimeout(()=>{
            gameovermenuanimation()
        },500)
    }
}
function poisonanimation(){
    if (lifestats<=0){
            catimg.src =squats

            cat.style.transition = '600ms'
                cat.style.transform = 'rotate(540deg)'
                cat.style.left = '50%'
                setTimeout(()=>{
                    cat.style.transition = '600ms'
                    cat.style.left = '60%'
                    cat.style.bottom = '6.8%'
                    cat.style.transform = 'rotate(1080deg)'
                    setTimeout(()=>[
                        cat.style.left = '70%'
                    ],350)
                },200)

                setTimeout(()=>{
                    gameovermenuanimation()
                },900)
    }

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function poweranimation() {
    if (powerr === true) {
        const voidcut = [power1, power2, power3];
        const srcs = [
            './public/sources/objects/power1.png',
            './public/sources/objects/power2.png',
            './public/sources/objects/power3.png',
            './public/sources/objects/power4.png',
            './public/sources/objects/power5.png',
            ''
        ];
        const delays = [60, 60, 60, 60, 120];
        for (let i = 0; i < srcs.length; i++) {
            voidcut.forEach(el => el.src = srcs[i]);
            if (i < delays.length) {
                await sleep(delays[i]);
            }
        }
    }
}
