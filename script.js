// script.js

document.getElementById("topupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Validasi input
  const inputs = this.querySelectorAll("input, select");
  let valid = true;
  inputs.forEach((input) => {
    if (!input.value.trim()) valid = false;
  });

  if (!valid) {
    alert("⚠️ Harap lengkapi semua kolom!");
    return;
  }

  // Ambil nilai form
  const game = document.getElementById("gameSelect").value;
  const diamond = document.getElementById("diamondSelect").value;
  const userid = document.querySelector('input[placeholder="Masukkan User ID"]').value;
  const email = document.querySelector('input[placeholder="Masukan Alamat Email Anda"]').value;
  const payment = document.querySelector('select').value;

  // Kirim data ke Google Sheets
  fetch("https://script.google.com/macros/s/AKfycbwC2IwJEP0u0fTKYHJ4h6bcN99OjBX3HGMjLyaKCvlqvi1tzzxteGwKxFHFb7uG9xUK/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ game, diamond, userid, email, payment })
  })
  .then(res => res.text())
  .then(data => {
    document.getElementById("successMsg").classList.remove("hidden");
    document.getElementById("topupForm").reset();
  })
  .catch(err => {
    console.error("Error:", err);
    alert("❌ Gagal mengirim data. Coba lagi nanti.");
  });
});
