const BASE_WIDTH = 1536;
const BASE_HEIGHT = 728;

function escalarContainer() {
  const escalaX = window.innerWidth / BASE_WIDTH;
  const escalaY = window.innerHeight / BASE_HEIGHT;
  const escala = Math.min(escalaX, escalaY);

  const mainscreen = document.getElementById("mainscreen");
  mainscreen.style.transform = `translate(-50%, -50%) scale(${escala})`;

  requestAnimationFrame(escalarContainer);
}

