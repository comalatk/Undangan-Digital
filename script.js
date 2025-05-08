// Fungsi untuk menutup popup
function tutupPopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}

// Ambil parameter nama dari URL
function getNamaTamu() {
  const params = new URLSearchParams(window.location.search);
  const nama = params.get("nama");

  if (nama) {
    document.getElementById("nama-tamu").textContent = decodeURIComponent(nama);
  }
}

// Jalankan saat halaman selesai dimuat
window.onload = function () {
  getNamaTamu();
  document.getElementById("popup").style.display = "flex";
};
