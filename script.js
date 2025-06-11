// script.js

document.getElementById("topupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Cek semua input terisi
  const inputs = this.querySelectorAll("input, select");
  let valid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) valid = false;
  });

  if (!valid) {
    alert("⚠️ Harap lengkapi semua kolom!");
    return;
  }

  // Tampilkan pesan sukses
  document.getElementById("successMsg").classList.remove("hidden");
  this.reset(); // Kosongkan form
});
