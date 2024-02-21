class MyCounter extends HTMLElement {
  get label() {
    return this._shadowRoot.querySelector("#label").textContent;
  }
  set label(value) {
    this._shadowRoot.querySelector("#label").textContent = value;
  }

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.innerHTML = `
            <button>
                <span id="label">My Counter</span>:
                <span id="count">0</span>
            </button>`;
  }

  connectedCallback() {
    this._shadowRoot
      .querySelector("button")
      .addEventListener("click", (event) => {
        const button = event.currentTarget;
        const count = button.querySelector("#count");
        count.textContent = Number(count.textContent) + 1;
      });
  }
}

customElements.define("my-counter", MyCounter);
