(function() {
  const currentScript = document.currentScript;
  window.addEventListener(
    "load",
    function() {
      const id = `s${Date.now()}`;
      const el = document.body.appendChild(document.createElement("div"));
      el.id = id;
      el.style.position = "fixed";

      el.className = "Screensaver";
      el.innerHTML = `<div><div><img style="width: 100px !important; height:100px !important;"src='system/img/systemlogo.png'></div></div>`;

      const width = el.offsetWidth;
      const height = el.offsetHeight;

      const style = document.body.appendChild(document.createElement("style"));

      style.textContent = `
#${id} {
  left: 0; top: 0; right:0; bottom: 0;
  z-index: 100000;
  color: #eee;
  cursor: none !important;
  background-color: /*#202020*/ transparent;
  backdrop-filter: blur(5px);
	transition: 0.2s;
}
#${id} div {
  width: ${width}px;
  height: ${height}px;
  font-size: 0px;
  font-family: Helvetica, Arial;
  background-size: 100%;
  line-height: 1;
}
#${id} > div {
  animation: bigger${id} 15s linear infinite alternate, x${id} 15s linear infinite alternate;
}
#${id} > div > div {
  animation: smaller${id} 12s linear infinite alternate, y${id} 12s linear infinite alternate;
}
@keyframes x${id} {
  100% {
    transform: translateX(calc(100vw - ${width}px));
  }
}

@keyframes y${id} {
  100% {
    transform: translateY(calc(100vh - ${height}px));
  }
}

@keyframes bigger${id} {
  25% {
    transform: scale(1.15);
  }
  50% {
    transform: scale(1.30);
  }
  75% {
    transform: scale(1.45);
  }
  100% {
    transform: scale(1.60);
  }
}

@keyframes smaller${id} {
  100% {
    transform: scale(1.60);
  }
  75% {
    transform: scale(1.45);
  }
  50% {
    transform: scale(1.30);
  }
  25% {
    transform: scale(1.15);
  }

}
`;
      let timeoutId = null;
      let timeout =
        (currentScript && Number(currentScript.getAttribute("timeout"))) ||
        60000;

      function disable() {
        el.style.display = "none";
        timeoutId && clearTimeout(timeoutId);
        timeoutId = setTimeout(function() {
          el.style.display = "block";
        }, timeout);
      }
      disable();
      document.addEventListener("mousemove", disable);
      document.addEventListener("keydown", disable);
      document.addEventListener("scroll", disable);
    },
    { once: true }
  );
})();