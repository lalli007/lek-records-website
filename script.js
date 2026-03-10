const logoCanvas = document.querySelector(".logo-canvas");

if (logoCanvas) {
  const ctx = logoCanvas.getContext("2d");
  const src = logoCanvas.dataset.src;
  const img = new Image();
  let width = 0;
  let height = 0;
  let particles = [];
  let rafId = null;
  let mode = "idle";
  let dpr = 1;
  const offscreen = document.createElement("canvas");
  const offCtx = offscreen.getContext("2d");

  const grid = 6;

  const resizeCanvas = () => {
    const maxWidth = Math.min(window.innerWidth * 0.6, 360);
    const scale = maxWidth / img.width;
    width = Math.round(img.width * scale);
    height = Math.round(img.height * scale);
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    logoCanvas.width = Math.round(width * dpr);
    logoCanvas.height = Math.round(height * dpr);
    logoCanvas.style.width = `${width}px`;
    logoCanvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.imageSmoothingEnabled = true;
    offscreen.width = width;
    offscreen.height = height;
    offCtx.imageSmoothingEnabled = true;
  };

  const drawOriginal = () => {
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, 0, 0, width, height);
  };

  const buildParticles = () => {
    particles = [];
    offCtx.clearRect(0, 0, width, height);
    offCtx.drawImage(img, 0, 0, width, height);
    const imageData = offCtx.getImageData(0, 0, width, height).data;
    for (let y = 0; y < height; y += grid) {
      for (let x = 0; x < width; x += grid) {
        const idx = (y * width + x) * 4;
        const alpha = imageData[idx + 3];
        if (alpha > 10) {
          particles.push({
            x,
            y,
            ox: x,
            oy: y,
            vx: (Math.random() - 0.5) * 0.8,
            vy: -0.6 - Math.random() * 1.2,
            alpha: 1,
            color: `rgba(${imageData[idx]}, ${imageData[idx + 1]}, ${imageData[idx + 2]}, 1)`,
          });
        }
      }
    }
  };

  const renderParticles = () => {
    ctx.clearRect(0, 0, width, height);
    for (const p of particles) {
      if (p.alpha <= 0) continue;
      ctx.fillStyle = p.color.replace(", 1)", `, ${p.alpha})`);
      ctx.fillRect(p.x, p.y, grid, grid);
    }
  };

  const step = () => {
    if (mode === "evaporate") {
      let alive = 0;
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.02;
        if (p.alpha > 0) alive += 1;
      }
      renderParticles();
      if (alive === 0) {
        mode = "idle";
        cancelAnimationFrame(rafId);
        rafId = null;
        return;
      }
    } else if (mode === "restore") {
      let settled = 0;
      for (const p of particles) {
        p.x += (p.ox - p.x) * 0.08;
        p.y += (p.oy - p.y) * 0.08;
        p.alpha += 0.04;
        if (p.alpha > 1) p.alpha = 1;
        if (Math.abs(p.ox - p.x) < 0.4 && Math.abs(p.oy - p.y) < 0.4) {
          settled += 1;
        }
      }
      renderParticles();
      if (settled === particles.length) {
        mode = "idle";
        drawOriginal();
        cancelAnimationFrame(rafId);
        rafId = null;
        return;
      }
    }
    rafId = requestAnimationFrame(step);
  };

  const startAnimation = (nextMode) => {
    mode = nextMode;
    if (!rafId) {
      rafId = requestAnimationFrame(step);
    }
  };

  img.onload = () => {
    resizeCanvas();
    drawOriginal();
    buildParticles();
  };

  img.src = src;

  window.addEventListener("resize", () => {
    if (!img.complete) return;
    resizeCanvas();
    drawOriginal();
    buildParticles();
  });

  logoCanvas.addEventListener("mouseenter", () => {
    buildParticles();
    startAnimation("evaporate");
  });

  logoCanvas.addEventListener("mouseleave", () => {
    startAnimation("restore");
  });
}
