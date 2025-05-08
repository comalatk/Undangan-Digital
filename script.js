// Ambil parameter nama dari URL
function getNamaTamu() {
  const params = new URLSearchParams(window.location.search);
  let nama = params.get("to");

  if (!nama || nama.trim() === "") {
    nama = "Tamu Undangan";
  }

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
