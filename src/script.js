function Carousel(target) {
  let selectedImgIdx = 0;

  const elementContainer = document.createElement("div");
  elementContainer.style.position = "relative";
  elementContainer.style.height = "310px";

  const elements = Array(3)
    .fill(0)
    .map((_, i) => {
      const div = document.createElement("div");
      div.innerHTML = i + 1;
      div.style.position = "absolute";
      div.style.width = "500px";
      div.style.height = "300px";
      div.style.border = "5px red solid";
      div.style.background = "#ccc";
      div.style.fontSize = "280px";
      div.style.lineHeight = "300px";
      div.style.textAlign = "center";
      if (i === 0) {
        div.style.zIndex = "1";
      }
      return div;
    });
  elementContainer.append(...elements);

  const btnContainer = document.createElement("div");
  btnContainer.style.width = "500px";
  btnContainer.style.padding = "2px";
  btnContainer.style.textAlign = "center";

  const btns = Array(3)
    .fill(0)
    .map((_, i) => {
      const btn = document.createElement("button");
      btn.setAttribute("data-idx", i);
      btn.innerHTML = i + 1;
      btn.style.border = "none";
      btn.style.borderRadius = "50%";
      btn.style.margin = "2px";
      btn.style.color = "#fff";
      btn.style.background = "#aaa";
      if (i == 0) {
        btn.style.background = "#444";
      }
      btn.addEventListener("click", btnClick);
      return btn;
    });
  btnContainer.append(...btns);

  function floatImgToTop() {
    elements[selectedImgIdx].style.zIndex = "1";
    btns[selectedImgIdx].style.background = "#444";
  }

  function removeImgFromTop() {
    elements[selectedImgIdx].style.zIndex = "";
    btns[selectedImgIdx].style.background = "#aaa";
  }

  function btnClick(ev) {
    const selectedBtnIdx = ev.target.getAttribute("data-idx");
    removeImgFromTop();
    selectedImgIdx = +selectedBtnIdx;
    floatImgToTop();
  }

  const carouselContainer = document.createElement("div");
  carouselContainer.style.width = "500px";

  carouselContainer.append(elementContainer, btnContainer);
  target.appendChild(carouselContainer);
}

new Carousel(document.body);
