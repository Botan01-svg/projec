// --- BAGIAN PILIH ELEMEN DARI HTML ---
// Pastikan semua id ini ada di file index.html Anda
const questionContainer = document.getElementById("questionContainer");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const heartLoader = document.getElementById("heartLoader");
const resultContainer = document.getElementById("resultContainer");
// Ini akan memilih ID 'gifResult' yang benar (dari resultContainer)
// setelah index.html diperbaiki
const gifResult = document.getElementById("gifResult"); 


// --- INI BAGIAN YANG DIPERBAIKI ---

// 1. Kita buat satu fungsi khusus untuk memindahkan tombol
const moveNoButton = () => {
  noBtn.style.position = 'absolute'; // Ini sudah benar

  // --- TAMBAHKAN DUA BARIS DI BAWAH INI ---
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;
  // ----------------------------------------

  // Ambil ukuran kontainer
  const containerWidth = questionContainer.offsetWidth;
  const containerHeight = questionContainer.offsetHeight;
  
  // Sekarang kode di bawah ini akan berfungsi
  const newX = Math.floor(Math.random() * (containerWidth - btnWidth));
  const newY = Math.floor(Math.random() * (containerHeight - btnHeight));
  
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
};

// 2. Pasang fungsi itu ke KEDUA event:
noBtn.addEventListener("mouseover", moveNoButton); // Untuk desktop (komputer)
noBtn.addEventListener("touchstart", moveNoButton); // Untuk mobile (HP)

// --- BATAS PERBAIKAN ---


// --- KODE ASLI ANDA UNTUK TOMBOL "YES" ---
// (Saya tambahkan sedikit perbaikan untuk menyembunyikan pertanyaan)
yesBtn.addEventListener("click", () => {
  // Sembunyikan kontainer pertanyaan
  questionContainer.style.display = "none";
  // Tampilkan loader
  heartLoader.style.display = "block"; // 'block' lebih baik dari 'inherit'

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "block"; // 'block' lebih baik dari 'inherit'
    
    // Cek jika gifResult ada dan punya fungsi .play() (jika itu <video>)
    // Ini tidak akan error, tapi .play() tidak akan berjalan karena gifResult adalah <img>
    if (gifResult && typeof gifResult.play === 'function') {
      gifResult.play();
    }
  }, 3000);
});