const gameoverscreen = document.querySelector('#gameoverscreen');
const frase =document.querySelector('#frase');
let gameoverchoice = 1;
const nomegato = cats
.filter(cat => cat.id === catskin)
.map(cat => cat.name);
const memegato = cats
.filter(cat => cat.id === catskin)
.map(cat => cat.meme);

const frases= [
{id:1,frase:'A curiosidade matou o gato!!! :O'},
{id:2,frase: `CatSpirit tem ${cats.length} gatos, você consegue pegar todos??`},
{id:3,frase: 'Caso esteja com problemas para entender o jogo, recomendo que clique em "tutorial".'},
{id:4,frase: 'Funfact: caso queira jogar a inspiração de CatSpirit, basta desligar sua internet :D'},
{id:5,frase: `Seja gentil com os gatos...<br><br>A Criação consegue ver você.`},
{id:6,frase: `Experimente apertar as teclas R G B simultaneamente no menu principal.<br><br>(recurso temporariamente indisponivel)`},
{id:7,frase: `CatSpirit foi desenvolvido em JS(javascript)<br><br>seria isso alguma dica secreta?<br><br>(recurso temporariamente indisponivel)`},
{id:8, frase:`Atiraram o pau no gato-to mas o gato-to não morreu...<br><br> mentira morreu sim.<br><br><h6>não seja igual dona chica, atirar coisas em animais não é admiravel!!!!</h6><br>`},
{id:9, frase: `Se você clicar varias vezes pra agachar, seu gato vai andar rapidinho<br><br><h5>definitivamente isso não é um bug que eu achei engraçado..</h5>`},
{id:10, frase: `Aperte Enter para pausar!!!<br><br><h5>enquanto o gato estiver vivo é claro.</h5>`},
{id:11, frase: `Não tenha medo de usar os seus poderes felinos, eles tão no jogo pra te ajudar<br><br><h5>aperte Z.</h5>`},
{id:12, frase: `${nomegato}?? você perdeu? não desista agora!!! apenas você ${nomegato} pode trazer a paz ao nosso universo. <br><br> <h5 style ="color:red;">derrote catus paragon corrompido.</h5>`},
{id:13, frase: `Se você ver um carro virando uma nave alienigena, ou algo parecido, fuja!<br><br> a corrupção está atrás de ti.`},
{id:14, frase: `O fogo verde que sai dos foguetes do jogo possuem essa coloração pois esses misseis usam hidretos de boro!! esse metal quando em combustão tem uma coloração verde ao invés de laranja.`},
{id:15, frase: `${memegato}`},
{id:16, frase: `um passarinho roxo me disse q as pedras celestiais nada mais são do que bolas de pelo dos 3 gatos celestes.`},
{id:17, frase: `para evitar que você morra eu recomendo que:<br><br> miau miau miau!!!`}

];
const frasechoice =  parseInt(Math.random() * frases.length) + 1;


function gameovermenuanimation(){
gameoverscreen.style.display ='flex'
gameoverscreen.style.width= '0.1%'
setTimeout(()=>{
gameoverscreen.style.transition ='200ms'
gameoverscreen.style.background = 'rgba(0, 0, 0, 0.7)'
gameoverscreen.style.height= '100%'
setTimeout(() => {
    gameoverscreen.style.width= '100%'
    setTimeout(()=>{
    frase.style.opacity = '100%'
    },100)

}, 200);
},100)
const selectedfrase = frases
.filter(frasee => frasee.id === frasechoice)
.map(frasee => `${frasee.frase}`)

frase.innerHTML = selectedfrase
gameovermenucolor()
}
document.addEventListener('keydown', (event) => {
    if (lifestats <= 0) {
        if (event.code === 'ArrowUp') {
            gameoverchoice -= 1; // Subir no menu
            if (gameoverchoice < 1) {
                gameoverchoice = 3; // Volta para a última opção
            }
        }
        if (event.code === 'ArrowDown') {
            gameoverchoice += 1; // Descer no menu
            if (gameoverchoice > 3) {
                gameoverchoice = 1; // Volta para a primeira opção
            }
        }
        if (event.code === 'Enter') {
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
        // Atualiza as cores do menu
        gameovermenucolor();
    }
});

a2h2.addEventListener('mouseenter',(()=>{
    gameoverchoice = 1
   gameovermenucolor()
}))
b2h2.addEventListener('mouseenter',(()=>{ 
   gameoverchoice = 2 
   gameovermenucolor()
}))
c2h2.addEventListener('mouseenter',(()=>{
    gameoverchoice = 3
   gameovermenucolor()
}))
a2h2.addEventListener('click',(()=>{
    startgame()
}))
b2h2.addEventListener('click',(()=>{
    tutorialanimation()
}))
c2h2.addEventListener('click',(()=>{
    window.location.href = `index.html`;
}))


function gameovermenucolor() {
    const options = [a2h2, b2h2, c2h2];

    options.forEach((el, index) => {
        el.style.color = (index + 1 === gameoverchoice) ? 'rgb(31, 121, 255)' : 'rgb(255, 255, 255)'
        el.style.background = (index + 1 === gameoverchoice) ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0)';

    });
}

