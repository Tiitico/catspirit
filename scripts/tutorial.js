const tutos = [
    {id:1, name: 'controles',
        description:`
        <h3 style = 'text-align:center'>Pulo:</h3><Br>
        <div class="tutodiv">
        <img style="transform: rotate(-15deg)" src='./public/sources/cats/blackcatrun1.png' class='tutoimg'> <p>Para pular aperte W ou Espaço ou Seta para Cima.</p></div><br>
 <h3 style = 'text-align:center'>Derrape:</h3><br>
        <div class="tutodiv">
        <img  src='./public/sources/cats/whitecatsquat.png' class='tutoimg'> <p>Para derrapar aperte S ou Seta para Baixo.<br><br> O derrape serve para passar por baixo de obstaculos com mais facilidade, ou cair mais rapidamente.</p></div><br><br>
 <h3 style = 'text-align:center'>Corte do Vazio:</h3><Br>
        <div class="tutodiv">
        <img id="powertuto" src='./public/sources/objects/power5.png' class='tutoimg'> <p>Para usar o corte do vazio aperte Z.<br><br>Para usar o corte você precisa ter no minimo 1 peixe. <br><img style=" width: 10%;" src="./public/sources/objects/fishpower.png"><br>Ao soltar o corte, os obstaculos serão destruidos, e após 2s os obstaculos voltarão a aparecer, então o gato poderá usar novamente seu poder.<br><br>Após 15s com o contador de peixes zerado, o gato recebera 1 peixe extra. </p></div><br><br><br>
        <h3 style = 'text-align:center'>menu de pausa:</h3><Br>
        <div class="tutodiv">
        </div> <p style="text-align: center;">Para pausar o jogo aperte Enter.<br>Isso abrirá um menu com 4 opçôes:<br><br>·Continue -para despausar.<br>·Tutorial -para ir ao tutorial.<br>·Resetar -para reiniciar o jogo.<br>·Inicio -para ir ao menu.<br><br>Para despausar, clique em Continue, ou aperte em Esc ou Backspace. Então o jogo voltará a correr normalmente.</p></div><br></br>`
        },
    {id:2, name: 'coletaveis',
        description:`        
        <h3 style = 'text-align:center'>Peixes:</h3><Br>
        <div class="tutodiv">
        <img src='./public/sources/objects/fishpower.png' class='tutoimg'> <p>Os peixes servem como recarga de poderes, ao coletar um peixe, o contador em cima da tela aumentará de acordo a quantia q o gato coletar,  caso o contador seja maior ou igual a 1, o gato sera capaz de usar seus poderes.</p></div><br>
        <h3 style = 'text-align:center'>Coração:</h3><Br>
        <div class="tutodiv">
        <img src='./public/sources/objects/heart.png' class='tutoimg'> <p>O coração serve como uma vida extra para o gato, inicialmente o jogador iniciará com apenas um coração, mas durante a corrida, ao coletar uma vida extra, o gato poderá levar 1 de dano sem encerrar a corrida, quando coletado aumentará o contador de vidas em 1.</p></div><br>
        <h3 style = 'text-align:center'>Veneno:</h3><Br>
        <div class="tutodiv">
        <img src='./public/sources/objects/poison.png' class='tutoimg'> <p>CUIDADO!! apesar de parecer uma bebida apetitosa, o veneno pode causar danos fatais a quem bebe, evite este coletavel a todo custo, caso o gato não esteja em efeito de imortalidade ou não tenha imunidade a veneno, ele levará 1 de dano ao pegar esta poção.</p></div><br>
        <h3 style = 'text-align:center'>Leite:</h3><Br>
        <div class="tutodiv">
        <img src='./public/sources/objects/milk.png' class='tutoimg'> <p>Uma saborosa refeição, nossos leites de nome impronunciavel são 0 lactose, então tome sem medo, ao beber o leite seu contador de Score duplicará por 10s.</p></div><br>
        <h3 style = 'text-align:center'>3 Leites:</h3><Br>
        <div class="tutodiv">
        <img src='./public/sources/objects/3milks.png' class='tutoimg'> <p>Se um é bom três é melhor, por que duplicar sua pontuação se você pode TRIPLICAR ela? <br>Otima refeição para gatos em bulking visando triplicar seu Score por 10s.</p></div><br>
        <h3 style = 'text-align:center'>Biscoitos:</h3><Br>
        <div class="tutodiv">
        <img src='./public/sources/objects/sachet.png' class='tutoimg'> <p>Para gatos gulosos que amam petiscos, os biscoitos foram desenvolvidos para saciar suas vontades, não serve de refeição completa, mas que tal 150 de Score a mais a cada biscoito que comer?</p></div><br>
        <h3 style = 'text-align:center'>Cogumelo:</h3><Br>
        <div class="tutodiv">
        <img src='./public/sources/objects/mushroom.png' class='tutoimg'> <p>Um cogumelo magico!! sem duvidas este item possui uma explosão de sabores, e uma pitada de duvida, ja que ao comer esse cogumelo encantado, o gato estará sujeito a qualquer efeito de qualquer outro coletavel, incluindo os efeitos negativos.<br>Será se vale mesmo a pena?</p></div><br>
        <h3 style = 'text-align:center'>pena de fênix roxa:</h3><Br>
        <div class="tutodiv">
        <img src='./public/sources/objects/feather.png' class='tutoimg'> <p>E quem disse que gato não voa? de onde essa pena surgiu certamente você não vai querer saber, o que importa, é que ao coleta-la, o gato terá sua queda automatica cancelada por 10s, possibilitando ao nosso felino um livre arbitrio aos céus, podendo descer para o chão apenas usando o derrape.<br> Cuidado, caso o gato sofra algum dano, o gato tera suas "asinhas" cortadas.</p></div><br>
        <h3 style = 'text-align:center'>Relógio de Aion:</h3><Br>
        <div class="tutodiv">
        <img src='./public/sources/objects/clock.png' class='tutoimg'> <p>Um valioso, belo e antigo relógio de ouro, é sem duvidas uma pena que gatos não saibam ver as horas! porém esse relógio não mostra as horas, melhor que isso, ele desacelera sutilmente o tempo, facilitando ao gato de esquivar de obstaculos.</p></div><br>
        <h3 style = 'text-align:center'>Pedras Celestiais:</h3><Br>
        <div class="tutodiv">
    <p>Pedras coloridas vindas do espaço? muito generico ou muito viajado?<br> As pedras celestiais são itens dificeis de se encontrar e só aparecem após determinado tempo durante a corrida, aqueles que as comem recebem poderes inimaginaveis!!!<br> seguimos agora com alguem que experimentou alguma dessas pedras:<br><br>-meow meow, miau mew miau maow awawawa.</p></div><br>
    <div class="tutodiv"><h6 style="font-size: 0.6em">(tradução: "tem um gosto amargo e acido, eu sinto que essa pedra tem o mesmo gosto das minhas bolas de pelo, porém, com poderes e coloridas.")</h6><br> </div><br><br>
    <p class="tutodiv">Fascinante depoimento, seguiremos agora com o tutorial!!!</p><br><br>
        <h3 style = 'text-align:center'>Pedra Celestial:</h3><Br>
        <div class="tutodiv">
        <img src='./public/sources/objects/bluecelestialstone.png' class='tutocelestial'> <p>Quer se sentir imbativel? com essa pedrinha, seu gato será imortal, mas somente por 5s.</p></div><br><br>
        <h3 style = 'text-align:center'>Pedra de Bastet:</h3><Br>
        <div class="tutodiv">
        <img src='./public/sources/objects/pinkcelestialstone.png' class='tutocelestial'> <p>Por quê só ser imbativel se você pode ter um boost de Score tambem? Ao coletar a pedra de Bastet, seu gato receberá o dobro de Score por 10s além de receber uma proteção divina e se tornar imortal por 5s.</p></div><br><br>
        <h3 style = 'text-align:center'>Pedra anti-Newton:</h3><Br>
        <div class="tutodiv">
        <img src='./public/sources/objects/purplecelestialstone.png' class='tutocelestial'> <p>Um passaro? um avião? que nada, é apenas você.<br>com o poder de mil asas, o gato poderá voar infinitamente, até que ele leve qualquer tipo de dano, ou se coletar uma pena, o efeito da pena se sobresairá fazendo com que a anti-gravidade tenha tempo limite normal.</p></div><br><br>
        <h3 style = 'text-align:center'>Pedra de Osiris:</h3><Br>
        <div class="tutodiv">
        <img src='./public/sources/objects/redcelestialstone.png' class='tutocelestial'> <p>"Um gato tem 7 vidas".<br>essa pedra não te da 7 mas sim 3 vidas extras, encontre 2 pedras dessas e ai sim você terá 7 (ou mais) vidas, isso se seu gato não tomar dano, é claro.</p></div><br><br>
        <h3 style = 'text-align:center'>Pedra de Prometeu:</h3><Br>
        <div class="tutodiv">
        <img src='./public/sources/objects/goldencelestialstone.png' class='tutocelestial'> <p>Para os gatos ousados que não tem medo de perder vidas, essa lendaria pedra concede inumeros poderes, mas claro, tudo por um preço.<br>Em troca de 1 vida, seu gato ganhará:<br><br> ·4 vezes mais Score até o fim da corrida.<br><br> ·A corrida entrará no modo de ultra acelerção, aonde o gato ficará com uma velocidade muito alta.<br><br> ·+250 pontos de Score.<br><br> ·Imortalidade por 5s.<br><br> ·Imunidade a veneno até o fim da corrida, possibilitando que o gato colete veneno sem tomar dano.</p></div><br><br>
        <h3 style = 'text-align:center'>Pedra de Eir:</h3><Br>
        <div class="tutodiv">
        <img src='./public/sources/objects/greencelestialstone.png' class='tutocelestial'> <p>Veneno tem sido um impecilio durante sua corrida? Temos a solução, uma mistica pedra que abençoará seu felino com a imunidade a veneno, podendo agora tomar qualquer tipo de bebida durante a corrida sem preocupações (não remove danos de obstaculos ou pedras celestiais).</p></div><br><br>
        <h3 style = 'text-align:center'>Pedra de Isis:</h3><Br>
        <div class="tutodiv">
        <img src='./public/sources/objects/ciancelestialstone.png' class='tutocelestial'> <p>por que só imunidade? você merece mais!!! Mas cuidado com a velocidade, além de imunidade a veneno durante o fim da corrida, essa pedra lhe oferece 5s de imortalidade e torna o jogo muito mais rapido.</p></div><br><br>
        <h3 style = 'text-align:center'>Pedra corrompida:</h3><Br>
        <div class="tutodiv">
        <img src='./public/sources/objects/tutoblackstone.png' class='tutocelestial'> <p>MUITO CUIDADO!!! as pedras negras são embuidas de energia de outros universos, não se sabe ao certo oque ela é capaz de fazer em outras realidades, mas uma coisa é certa, no nosso mundo ela é fatal.<br>Caso o gato colete a pedra corrompida ele sofrerá de uma morte instantanea e indolor, quase como se a pedra apagasse qualquer rastro de consciencia.</p></div><br><br>
        <h3 style = 'text-align:center'>Pedra da ganância:</h3><Br>
        <div class="tutodiv">
        <img src='./public/sources/objects/whitecelestialstone.png' class='tutocelestial'> <p>Quanto você se dispõe por pontos extras? essa pedra te dará 3 vezes mais Score até o fim da corrida, porem tirará qualquer bonus coletado durante sua corrida.<br>Ao coletar essa pedra, o gato perderá seus peixes, sua imunidade a veneno, sua anti-gravidade e sua imortalidade, além de que a corrida começará a fluir muito mais rapidamente, dificultando o jogo.<br>A ganância é dolorosa. Você está a disposição? <br><br> (todos os bonus e peixes perdidos ainda podem ser recuperados)</p></div><br>

        `
    },
     {id:3, name: 'bosses',
        description:''
    },
    {id:4, name: 'extras',
        description:''
    }
]

const nometela = document.querySelector('#nometela')
const tutodesctext = document.querySelector('.tutodesctext')
const tutoscreen = document.querySelector('#tutoscreen')
const btntt = document.querySelector('#btntt')
const btntt2 = document.querySelector('#btntt2')
const esc = document.querySelector('#esc')
let tutorialchoice = 1;

function powertuto() {
    const powertutos = document.querySelector('#powertuto')
    if (tutorial === true) {
        if (tutorialchoice=== 1) {
            
      
        powertutos.src = './public/sources/objects/power1.png';
        
        setTimeout(() => {
            powertutos.src = './public/sources/objects/power2.png';
        
            setTimeout(() => {
                powertutos.src = './public/sources/objects/power3.png';
        
                setTimeout(() => {
                powertutos.src = './public/sources/objects/power4.png';

                                setTimeout(() => {
                                powertutos.src = './public/sources/objects/power5.png';

                    }, 120);
                }, 120);
            }, 120);
        }, 120);
    }
                                            setTimeout(() => {
requestAnimationFrame(powertuto)
                    }, 820);
}
}

function scaleadtuto() {
if (tutorial === true) {
  

  let winWidth = window.innerWidth;
  let winHeight = window.innerHeight;
  let width = winWidth;
  let height = width / BASE_RATIO;

if (height > winHeight) {
      height = winHeight;
    width = height * BASE_RATIO;
esc.style.fontSize = '8.4vh';
btntt.style.fontSize = '12.7vh';
btntt2.style.fontSize = '12.7vh';
nometela.style.fontSize = '5.06vh';
tutoinfs.style.fontSize = '2.95vh';
tutoinfs.style.lineHeight = '3.2vh';

}else{
      width = winWidth;
    height = width / BASE_RATIO;
esc.style.fontSize = '4vw';
btntt.style.fontSize = '6vw';
btntt2.style.fontSize = '6vw';
nometela.style.fontSize = '2.4vw';
tutoinfs.style.fontSize = '1.4vw';
tutoinfs.style.lineHeight = '1.52vw';


  }
 requestAnimationFrame(scaleadtuto);
}
}
scaleadtuto();


function tutorialanimation(){
    if (tutorial===false) {
        tutorial= true
        scaleadtuto()
    tutoscreen.style.display ='flex'
    tutoscreen.style.width= '0.1%'
    setTimeout(()=>{
    tutoscreen.style.transition ='200ms'
    tutoscreen.style.background = 'rgb(0, 0, 0)'
    tutoscreen.style.height= '80%'
    setTimeout(() => {
        tutoscreen.style.width= '70%'
        setTimeout(()=>{
           tutoscreen.style.color = 'rgb(255,255,255'
           tutochoice()
           powertuto()
        },100)
    
    }, 200);
    },100)
}
}

function tutochoice(){
    const tutoname = tutos
    .filter(tt => tt.id === tutorialchoice)
    .map(tt => tt.name);
nometela.innerHTML = tutoname
const tutodesc = tutos
.filter(tt => tt.id === tutorialchoice)
.map(tt => tt.description);
tutodesctext.innerHTML = tutodesc

}
document.addEventListener('keydown', (event) => {
if (tutorial === true) {
    if (event.code === 'ArrowLeft') {
        tutorialchoice -= 1; // esquerda no menu
        if (tutorialchoice < 1) {
            tutorialchoice = tutos.length; // Volta para a última opção
        }
    }
    if (event.code === 'ArrowRight') {
        tutorialchoice += 1; // direita no menu
        if (tutorialchoice > tutos.length) {
            tutorialchoice = 1; // Volta para a primeira opção
        }
    }
    tutochoice()

}
});
esc.addEventListener('click',()=>{
exittuto()
    })
    document.addEventListener('click',(event)=>{
        if (tutorial === true) {
            if (event.target === btntt) {
                tutorialchoice -= 1; // esquerda no menu
                if (tutorialchoice < 1) {
                    tutorialchoice = tutos.length; // Volta para a última opção
                }
            }
            if (event.target === btntt2) {
                tutorialchoice += 1; // direita no menu
                if (tutorialchoice > tutos.length) {
                    tutorialchoice = 1; // Volta para a primeira opção
                }
            }
            tutochoice()
            }})
function exittuto(){
    tutoscreen.style.width= '0.1%'
    tutoscreen.style.color = 'rgba(0,0,0,0)'
    setTimeout(()=>{
    tutoscreen.style.transition ='600ms'
    tutoscreen.style.height= '0%'
    tutoscreen.style.background = 'rgba(0, 0,0,0)'
    setTimeout(() => {
        tutoscreen.style.width= '0%'
        setTimeout(()=>{
tutoscreen.style.display = 'none'
tutorial = false
},100)    
    }, 200);
    },100)
}
