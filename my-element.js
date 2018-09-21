/* my element */

class MyElement extends HTMLElement {

    // This gets called when the HTML parser sees your tag
    constructor() {
        super(); // always call super() first in the ctor.
        this.msg = 'Hello, World!';
    }

    // Called when your element is inserted in the DOM or
    // immediately after the constructor if it’s already in the DOM
    connectedCallback() {
        this.innerHTML = `
            <style>
                :host {
                  display: block;
                  contain: content;
                }
                p { color: red; }
            </style>
            <p>${this.msg}</p>
        `;
    }

}

// This registers your new tag and associates it with your class
window.customElements.define('my-element', MyElement);





(() => {
    const template = document.createElement('template');

    template.innerHTML = `
      <style>
        :host {
          display: block;
          contain: content;
        }

        h1 {
          font-size: 2.5rem;
          color: hotpink;
          font-family: monospace;
          text-align: center;
          text-decoration: pink solid underline;
          text-decoration-skip: ink;
        }
      </style>
      <h1>Hello Alligator!</h1>
  `;

    class MyTitle extends HTMLElement {
        constructor() {
            super();

            this.attachShadow({ mode: 'open' });
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        }
    }

    window.customElements.define('my-title', MyTitle);
})();