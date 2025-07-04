const threed_base_styles = `
.threed-wrapper {
  position: relative;
  transform-style: preserve-3d;
  transform: rotateX(var(--threed-rot-x)) rotateY(var(--threed-rot-y));
}
.threed-content {
  background-color: var(--threed-color-content);
}
.threed-viz {
  position: absolute;
  user-select: none;
  transform-origin: 0 0;
}
.threed-right {
  bottom: 0;
  left: 100%;
  width: var(--threed-depth);
  height: 100%;
  background-color: var(--threed-color-right);
  transform: rotateY(90deg);
}
.threed-left {
  bottom: 0;
  left: 0;
  width: var(--threed-depth);
  height: 100%;
  background-color: var(--threed-color-left);
  transform: rotateY(90deg);
}
.threed-bottom {
  top: 100%;
  right: 0;
  height: var(--threed-depth);
  width: 100%;
  background-color: var(--threed-color-bottom);
  transform: rotateX(-90deg);
}
.threed-top {
  top: 0;
  right: 0;
  height: var(--threed-depth);
  width: 100%;
  background-color: var(--threed-color-top);
  transform: rotateX(-90deg);
}
`;

class ThreedElement extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML =
      `<style>${threed_base_styles}</style><div class="threed-wrapper">
      <div class="threed-content"><slot></slot></div>
      <div class="threed-bottom threed-viz"></div>
      <div class="threed-top threed-viz"></div>
      <div class="threed-right threed-viz"></div>
      <div class="threed-left threed-viz"></div>
    </div>`.trim();
  }
}

window.customElements.define("threed-element", ThreedElement);
