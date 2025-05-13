// Buka Undangan
document.getElementById("buka-undangan").addEventListener("click", () => {
  document.getElementById("hero").classList.add("hidden");
  document.getElementById("konten-undangan").classList.remove("hidden");
  fadeAudioIn();
});

// Countdown Timer
const targetDate = new Date("2025-08-01T08:00:00").getTime();
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Acara telah dimulai";
    return;
  }

  document.getElementById("days").innerText = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
  document.getElementById("hours").innerText = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
  document.getElementById("minutes").innerText = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
  document.getElementById("seconds").innerText = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');
}, 1000);

// Copy Rekening
function copyRekening() {
  const rekening = document.getElementById("rekening").innerText;
  navigator.clipboard.writeText(rekening).then(() => {
    alert("Nomor rekening berhasil disalin!");
  });
}

// Pemutar Musik dengan Fade
const audio = document.getElementById("wedding-audio");
const toggleBtn = document.getElementById("toggle-audio");
let isPlaying = false;

function fadeAudioIn() {
  audio.volume = 0;
  audio.play();
  isPlaying = true;
  toggleBtn.innerText = "⏸️";
  let vol = 0;
  const fadeIn = setInterval(() => {
    if (vol < 1) {
      vol += 0.05;
      audio.volume = Math.min(vol, 1);
    } else {
      clearInterval(fadeIn);
    }
  }, 200);
}

function fadeAudioOut() {
  let vol = audio.volume;
  const fadeOut = setInterval(() => {
    if (vol > 0) {
      vol -= 0.05;
      audio.volume = Math.max(vol, 0);
    } else {
      clearInterval(fadeOut);
      audio.pause();
    }
  }, 200);
}

toggleBtn.addEventListener("click", () => {
  if (isPlaying) {
    fadeAudioOut();
    toggleBtn.innerText = "🔊";
  } else {
    fadeAudioIn();
    toggleBtn.innerText = "⏸️";
  }
  isPlaying = !isPlaying;
});

// Slider Galeri Otomatis
let currentScroll = 0;
const track = document.querySelector('.gallery-track');

function autoSlideGallery() {
  if (track) {
    currentScroll += 1;
    if (currentScroll >= track.scrollWidth - track.clientWidth) {
      currentScroll = 0;
    }
    track.scrollTo({
      left: currentScroll,
      behavior: 'smooth'
    });
  }
}
setInterval(autoSlideGallery, 50);

// Komentar Real-time Dummy
const form = document.querySelector(".doa-ucapan form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nama = form.querySelector("input").value;
  const ucapan = form.querySelector("textarea").value;

  if (nama && ucapan) {
    const commentSection = document.createElement("div");
    commentSection.innerHTML = `<p><strong>${nama}</strong>: ${ucapan}</p>`;
    form.insertAdjacentElement("beforebegin", commentSection);

    form.reset();
  }
});

// RSVP Tambahan (Optional)
const rsvpForm = document.getElementById("form-rsvp");
if (rsvpForm) {
  rsvpForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const nama = rsvpForm.querySelector("input").value;
    const hadir = rsvpForm.querySelector("select").value;
    alert(`Terima kasih ${nama}, kehadiran Anda: ${hadir}`);
    rsvpForm.reset();
  });
}
