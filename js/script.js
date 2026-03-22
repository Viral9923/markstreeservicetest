// Contact form success message
document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("successMSG").classList.remove("d-none");
  this.reset();
});

function showImage(src) {
  document.getElementById("modalImage").src = src;
}