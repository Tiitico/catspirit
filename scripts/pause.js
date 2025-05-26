const pausedetail = document.querySelector('#pause');
const pausemenu = document.querySelector('#pausemenu')

function pauseanimationON() {
    if (pause === true) {
        pausedetail.style.display = 'flex'
        pausemenu.style.display = 'flex'
setTimeout(()=>{
     pausedetail.style.transition ='500ms'
        pausedetail.style.left = '74%'
        setTimeout(()=>{
        pausemenu.style.transition ='500ms'
        pausemenu.style.left = '80%'
        },100)

})
    }
}
ah2.addEventListener('click',()=>{
    pauseanimationOFF()
})
bh2.addEventListener('click',()=>{
    tutorialanimation()
})
ch2.addEventListener('click',()=>{
    startgame()
})
dh2.addEventListener('click',()=>{
    window.location.href = `index.html?catskin=${catskin}`;
})

function pauseanimationOFF() {
    
            pausemenu.style.transition ='500ms'
        pausemenu.style.left = '110%'

setTimeout(()=>{
     pausedetail.style.transition ='500ms'
        pausedetail.style.left = '110%'
        setTimeout(()=>{
        pausedetail.style.display = 'none'
        pausemenu.style.display = 'none'
        },100)
},100)
setTimeout(()=>{
    pause = false
},500)
    }

document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === 'hidden') {
    if(pause === false && lifestats>0){
    pause = true
    pauseanimationON()
}
    console.log("Usuário saiu da aba ou minimizou");
  }
});