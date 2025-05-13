const pausedetail = document.querySelector('#pause');
const pausemenu = document.querySelector('#pausemenu')
const ah2 = document.querySelector('#ah2')
const bh2 = document.querySelector('#bh2')
const ch2 = document.querySelector('#ch2')
const dh2 = document.querySelector('#dh2')

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
