import {element} from "./utils/element.js";

function base64UrlEncode(str) {
  return btoa(unescape(encodeURIComponent(str)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

element("sendOptions").addEventListener("click", () => {
  window.location.href = `/firmware/?q=${base64UrlEncode(element("firmwareOptions").value)}`;
});