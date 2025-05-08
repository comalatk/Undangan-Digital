window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const to = params.get('to');
  if (to) {
    document.getElementById('nama-tamu').textContent = decodeURIComponent(to.replace(/\+/g, ' '));
  }
};
