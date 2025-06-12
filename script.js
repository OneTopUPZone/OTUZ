document.getElementById('topupForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const game = document.getElementById('gameSelect').value;
  const diamond = document.getElementById('diamondSelect').value;
  const userId = document.getElementById('userId').value;
  const email = document.getElementById('email').value;
  const payment = document.getElementById('paymentMethod').value;

  if (game && diamond && userId && email && payment) {
    document.getElementById('successMsg').classList.remove('hidden');
    document.getElementById('successMsg').textContent = "✅ Pesanan berhasil dikirim!";
  } else {
    alert("❌ Gagal mengirim data. Pastikan semua data terisi dengan benar.");
  }
});
