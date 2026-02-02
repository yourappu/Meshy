const container = document.querySelector(".container");
const finalImage = document.querySelector(".final-image");

function reveal(x, y) {
  finalImage.style.clipPath = `circle(120px at ${x}px ${y}px)`;
}

function hide() {
  finalImage.style.clipPath = "circle(0px at 50% 50%)";
}

/* Desktop */
container.addEventListener("mousemove", (e) => {
  const rect = container.getBoundingClientRect();
  reveal(e.clientX - rect.left, e.clientY - rect.top);
});

container.addEventListener("mouseleave", hide);

/* Mobile */
container.addEventListener("touchmove", (e) => {
  e.preventDefault();
  const rect = container.getBoundingClientRect();
  const t = e.touches[0];
  reveal(t.clientX - rect.left, t.clientY - rect.top);
}, { passive: false });

container.addEventListener("touchend", hide);
