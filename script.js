
window.onload = function () {
  // Ambil nama dari URL
  const params = new URLSearchParams(window.location.search);
  let nama = params.get("to");

  if (!nama || nama.trim() === "") {
    nama = "Tamu Undangan";
  }

  document.getElementById("nama-tamu").textContent = decodeURIComponent(nama.replace(/\+/g, ' '));

  // Tambahkan event listener setelah elemen dimuat
  const btn = document.getElementById("buka-undangan");
  if (btn) {
    btn.addEventListener("click", function () {
      document.getElementById("hero").classList.add("hidden");
      document.getElementById("konten-undangan").classList.remove("hidden");
    });
  }
};
