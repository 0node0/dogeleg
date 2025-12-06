(function () {
  const pupils = document.querySelectorAll(".pupil");
  const eyes = document.querySelectorAll(".eye");

  if (!pupils.length || !eyes.length) return;

  const maxOffset = 10; // max movement in px from center

  function updateEyes(clientX, clientY) {
    eyes.forEach((eye, index) => {
      const rect = eye.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = clientX - centerX;
      const dy = clientY - centerY;

      const angle = Math.atan2(dy, dx);
      const distance = Math.min(maxOffset, Math.hypot(dx, dy));

      const offsetX = Math.cos(angle) * distance;
      const offsetY = Math.sin(angle) * distance;

      const pupil = pupils[index];
      if (!pupil) return;

      pupil.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`;
    });
  }

  function resetEyes() {
    pupils.forEach((pupil) => {
      pupil.style.transform = "translate(-50%, -50%)";
    });
  }

  // Follow mouse
  window.addEventListener("mousemove", (e) => {
    updateEyes(e.clientX, e.clientY);
  });

  // Optional: center them again if cursor leaves window
  window.addEventListener("mouseleave", () => {
    resetEyes();
  });
})();
