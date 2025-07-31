
const options = document.querySelectorAll(".option");

options.forEach(option => {
  option.addEventListener("click", () => {
    options.forEach(opt => opt.classList.remove("active"));
    option.classList.add("active");
  });
});

const video = document.getElementById("miVideo");
const btnPlayPause = document.getElementById("btnPlayPause");
const btnMute = document.getElementById("btnMute");

window.addEventListener("click", () => {
  if (video) {
    video.muted = false;
    video.play().catch(err => {
      console.warn("El navegador bloqueó la reproducción automática con sonido.");
    });
  }
}, { once: true }); 

// Botónes ▶️ / ⏸️
btnPlayPause.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    btnPlayPause.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    video.pause();
    btnPlayPause.innerHTML = '<i class="fas fa-play"></i>';
  }
});

// Botónes 🔇 / 🔊
btnMute.addEventListener("click", () => {
  video.muted = !video.muted;
  btnMute.innerHTML = video.muted
    ? '<i class="fas fa-volume-mute"></i>'
    : '<i class="fas fa-volume-up"></i>';
});
