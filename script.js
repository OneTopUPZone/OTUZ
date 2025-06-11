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
document.getElementById("topupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const game = document.getElementById("gameSelect").value;
  const diamond = document.getElementById("diamondSelect").value;
  const userid = document.querySelector('input[placeholder="Masukkan User ID"]').value;
  const email = document.querySelector('input[placeholder="Masukan Alamat Email Anda"]').value;
  const payment = document.querySelector('select').value;

  fetch("https://script.google.com/macros/s/AKfycbyEQFBp2WFoXzj3Pwul44yz7He2SXJdO-hpP7N6iHM3zFZhJkkMxYxk72rgOXMO7Ag/exec", {
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
  .catch(err => console.error("Error:", err));
});

