// querySelectorAll function
export function qsAll(selector, parent = document) {
  return [...parent.querySelectorAll(selector)];
}

// querySelector function
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

export function loadScript(URL) {
  const head = document.getElementsByTagName("head")[0];
  const script = document.createElement("script");
  script.src = URL;
  script.type = "module";
  head.appendChild(script);
}
