function applyScale() {
  const wrapper = document.getElementById("wrapper");
  const scaleX = window.innerWidth / 1366;
  const scaleY = window.innerHeight / 768;
  const scale = Math.min(scaleX, scaleY, 1);
  wrapper.style.transform = `scale(${scale})`;
}

window.addEventListener("resize", applyScale);
window.addEventListener("load", applyScale);