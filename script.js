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

  if (game && diamond && userId && email && payment) {
    document.getElementById('successMsg').classList.remove('hidden');
    document.getElementById('successMsg').textContent = "✅ Pesanan berhasil dikirim!";
  } else {
    alert("❌ Gagal mengirim data. Pastikan semua data terisi dengan benar.");
  }
});
