import { element } from "./utils/element.js";

const params = new URLSearchParams(document.location.search);

function base64UrlDecode(base64url) {
  let base64 = base64url.replace(/-/g, '+').replace(/_/g, '/');
  while (base64.length % 4) {
    base64 += '=';
  }
  return decodeURIComponent(escape(atob(base64)));
}

function applyScale() {
  const scaleX = window.innerWidth / 1366;
  const scaleY = window.innerHeight / 768;
  const scale = Math.min(scaleX, scaleY, 1);
  element("wrapper").style.transform = `scale(${scale})`;
}

window.addEventListener("resize", applyScale);
window.addEventListener("load", applyScale);

document.addEventListener("DOMContentLoaded", () => {
  element("firmwareOptions").innerHTML = base64UrlDecode(params.get("q"));
})