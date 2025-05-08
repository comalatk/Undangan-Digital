// Ambil parameter nama dari URL
function getNamaTamu() {
  const params = new URLSearchParams(window.location.search);
  const nama = params.get("to");

  if (nama) {
    document.getElementById("nama-tamu").textContent = decodeURIComponent(nama.replace(/\+/g, ' '));
  }
}

// Tampilkan konten undangan saat tombol diklik
document.getElementById("buka-undangan").addEventListener("click", function() {
  document.getElementById("hero").classList.add("hidden");
  document.getElementById("konten-undangan").classList.remove("hidden");
});

// Inisialisasi
window.onload = function () {
  getNamaTamu();
};
