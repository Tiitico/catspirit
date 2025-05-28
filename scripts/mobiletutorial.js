function scaleadtuto() {

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
scaleadtuto();
