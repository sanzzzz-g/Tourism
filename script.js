document.addEventListener("DOMContentLoaded", () => {
  const blobs = document.querySelectorAll(".blob");

  if (!blobs.length) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  const positions = Array.from(blobs).map(() => ({
    x: mouseX,
    y: mouseY,
  }));

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  window.addEventListener("touchmove", (e) => {
    if (e.touches.length > 0) {
      mouseX = e.touches[0].clientX;
      mouseY = e.touches[0].clientY;
    }
  });

  function animate() {
    positions.forEach((pos, i) => {
      const speed = 0.2 - i * 0.05;
      pos.x += (mouseX - pos.x) * speed;
      pos.y += (mouseY - pos.y) * speed;

      blobs[i].style.transform = `translate(${pos.x - 50}px, ${pos.y - 50}px)`;
    });

    requestAnimationFrame(animate);
  }

  animate();
});
