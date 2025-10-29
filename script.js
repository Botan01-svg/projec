// --- Ambil elemen
const questionContainer = document.getElementById("questionContainer");
const heartLoader       = document.getElementById("heartLoader");
const resultContainer   = document.getElementById("resultContainer");

const yesBtn            = document.getElementById("yesBtn");
const noBtn             = document.getElementById("noBtn");

// Media hasil (bisa <img> atau <video>)
const resultMedia       = document.getElementById("resultMedia");

// --- Fungsi tombol No kabur
function moveNoButton(){
  // Pastikan absolute & terukur
  noBtn.style.position = "absolute";

  // Ukuran tombol
  const btnW = noBtn.offsetWidth;
  const btnH = noBtn.offsetHeight;

  // Ukuran kontainer (batas gerak)
  const boxW = questionContainer.clientWidth;
  const boxH = questionContainer.clientHeight;

  // Biar gak mentok ke tepi
  const padding = 6;

  // Posisi acak aman
  const maxX = Math.max(0, boxW - btnW - padding);
  const maxY = Math.max(0, boxH - btnH - padding);

  const x = Math.floor(Math.random() * (maxX + 1));
  const y = Math.floor(Math.random() * (maxY + 1));

  noBtn.style.left = `${x}px`;
  noBtn.style.top  = `${y}px`;
}

// Desktop & Mobile
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", (e)=>{ e.preventDefault(); moveNoButton(); }, {passive:false});

// --- Klik Yes -> loading -> hasil
yesBtn.addEventListener("click", () => {
  // Step 1: sembunyikan pertanyaan
  questionContainer.style.display = "none";

  // Step 2: tampilkan loader
  heartLoader.style.display = "block";

  // Step 3: setelah 3 detik, tampilkan hasil
  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "block";

    // Kalau <video>, play. Kalau <img>, aman (nggak ada .play())
    if (resultMedia && typeof resultMedia.play === "function") {
      resultMedia.play();
    }
  }, 3000);
});
