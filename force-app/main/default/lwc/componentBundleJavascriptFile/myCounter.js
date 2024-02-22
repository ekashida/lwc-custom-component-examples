class MyCounter extends HTMLElement {
  get label() {
    return this.shadowRoot.querySelector("#label").textContent;
  }
  set label(value) {
    this.shadowRoot.querySelector("#label").textContent = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <button>
          <span id="label">My Counter</span>:
          <span id="count">0</span>
      </button>`;
    this.shadowRoot
      .querySelector("button")
      .addEventListener("click", (event) => {
        const button = event.currentTarget;
        const count = button.querySelector("#count");
        count.textContent = Number(count.textContent) + 1;
      });
  }
}

customElements.define("my-counter", MyCounter);
