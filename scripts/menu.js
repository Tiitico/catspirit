const skinleftbtn =document.querySelector('#left_btn');
const skinrighttbtn =document.querySelector('#right_btn');

skinleftbtn.addEventListener('click',()=> { catskinmore() });
skinrighttbtn.addEventListener('click',()=> { catskinnotmore() });

let menuchoice = 1;
    document.addEventListener('keydown',(event)=> {
        if (event.code === 'Enter') {
                switch (menuchoice) {
                    case 1:
                        startanimation()
                        break;
                        case 2:
                        tutorialanimation()
                        break;
                }
   }
   if (event.code == 'ArrowLeft') {
  catskinmore()
   }
   if (event.code === 'ArrowUp') {
        menuchoice -= 1; // Subir no menu
        if (menuchoice < 1) {
            menuchoice = 2; // Volta para a última opção
        }
        menucolor()
    }
    if (event.code === 'ArrowDown') {
        menuchoice += 1; // Descer no menu
        if (menuchoice > 2) {
            menuchoice = 1; // Volta para a primeira opção
        }
        menucolor()
    }
    if (event.code == 'ArrowRight') {
       catskinnotmore()
        }
})       
ah2.addEventListener('mouseenter',(()=>{
    menuchoice = 1
   menucolor()
}))
bh2.addEventListener('mouseenter',(()=>{ 
   menuchoice = 2 
   menucolor()
}))
ah2.addEventListener('click',(()=>{
startanimation()
}))
bh2.addEventListener('click',(()=>{
    tutorialanimation()
}))

function menucolor() {
        const options = [ah2, bh2];

        options.forEach((el, index) => {
            el.style.color = (index + 1 === menuchoice) ? 'rgb(31, 121, 255)' : 'rgb(255, 255, 255)'    
        });
}
menucolor()
function catskinmore(){
          catskin -= 1;   
          const lastcat= Math.max(...cats.map(cat => cat.id)) 

        if (catskin<1){
         catskin = lastcat
        }  
        const selectedid = cats
        .filter(cat => cat.id === catskin).length 
        if (selectedid<=0) {
            catskinmore()
        }
        localStorage.setItem("catskin", catskin);
        changeskin();
}
function catskinnotmore() {
    catskin += 1;
    const lastcat = Math.max(...cats.map(cat => cat.id));
   
    if (catskin > lastcat) {
        catskin = 1;
    }
    const selectedid = cats
    .filter(cat => cat.id === catskin).length;
    if (selectedid <= 0) {
        catskinnotmore(); 
    }
    localStorage.setItem("catskin", catskin);
    changeskin();
}
      const d1 = document.querySelector('#d1');
const d2 = document.querySelector('#d2');
const d3 = document.querySelector('#d3');
const d4 = document.querySelector('#d4');

      function startanimation() {
        d1.style.transition = '800ms'
        d2.style.transition = '800ms'
        d3.style.transition = '800ms'
        d4.style.transition = '800ms'
    
        d1.style.left = '-8.3%'
        d2.style.left = '25%'
        d3.style.right = '25%'
        d4.style.right = '-8.3%'
    
        d1.style.top = ' -30%'
        d2.style.top = '-29.91%'
        d3.style.bottom = '-29.91%'
        d4.style.bottom = ' -30%' 
    setTimeout(()=>{
    startgame()
    },600)
}
const donates = document.querySelector('#doacoes')
const escdonate = document.querySelector('#escdonate')

function donatescreen(){

    screendonate.style.display ='flex'
    screendonate.style.width= '0.1%'
    setTimeout(()=>{
    screendonate.style.transition ='200ms'
    screendonate.style.background = 'rgb(0, 0, 0)'
    screendonate.style.height= '80%'
    setTimeout(() => {
        screendonate.style.width= '70%'
        setTimeout(()=>{
           screendonate.style.color = 'rgb(255,255,255'
        },100)
    
    }, 200);
    },100)
}
function donateesc(){
     screendonate.style.width= '0.1%'
    screendonate.style.color = 'rgba(0,0,0,0)'
    setTimeout(()=>{
    screendonate.style.transition ='600ms'
    screendonate.style.height= '0%'
    screendonate.style.background = 'rgba(0, 0,0,0)'
    setTimeout(() => {
        screendonate.style.width= '0%'
        setTimeout(()=>{
screendonate.style.display = 'none'
},100)    
    }, 200);
    },100)
}
escdonate.addEventListener('click',()=>{
donateesc()
})
donates.addEventListener('click', ()=>{
donatescreen()
})