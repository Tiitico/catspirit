(function () {
  const originalRAF = window.requestAnimationFrame;
  const FRAME_DURATION = 1000 / 60; 
  const lastTimes = new WeakMap();

  window.requestAnimationFrame = function (callback) {
    function rafHandler(timestamp) {
      const lastTime = lastTimes.get(callback) || 0;
      if (timestamp - lastTime >= FRAME_DURATION) {
        lastTimes.set(callback, timestamp);
        callback(timestamp);
      } else {
        originalRAF(rafHandler);
      }
    }
    return originalRAF(rafHandler);
  };
})();

// ...existing code...
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

