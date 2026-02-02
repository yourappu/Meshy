const container = document.querySelector(".container");
const finalImage = document.querySelector(".final-image");
const baseImage = document.querySelector(".base-image");

function reveal(x, y) {
  finalImage.style.clipPath = `circle(120px at ${x}px ${y}px)`;

  // NEW: move scribble mask
  baseImage.style.setProperty("--x", `${x}px`);
  baseImage.style.setProperty("--y", `${y}px`);
}

function hide() {
  finalImage.style.clipPath = "circle(0px at 50% 50%)";
}

container.addEventListener("mousemove", (e) => {
  const rect = container.getBoundingClientRect();
  reveal(e.clientX - rect.left, e.clientY - rect.top);
});

container.addEventListener("mouseleave", hide); 
