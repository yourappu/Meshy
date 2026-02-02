const container = document.querySelector(".container");
const finalImage = document.querySelector(".final-image");

function showAt(x, y) {
  finalImage.style.setProperty("--x", `${x}px`);
  finalImage.style.setProperty("--y", `${y}px`);
  finalImage.style.clipPath = `circle(120px at ${x}px ${y}px)`;
}

function hide() {
  finalImage.style.clipPath = "circle(0px at 50% 50%)";
}

/* Desktop */
container.addEventListener("mousemove", (e) => {
  const rect = container.getBoundingClientRect();
  showAt(e.clientX - rect.left, e.clientY - rect.top);
});

container.addEventListener("mouseleave", hide);

/* Mobile */
container.addEventListener("touchmove", (e) => {
  e.preventDefault();
  const rect = container.getBoundingClientRect();
  const t = e.touches[0];
  showAt(t.clientX - rect.left, t.clientY - rect.top);
}, { passive: false });

container.addEventListener("touchend", hide);
