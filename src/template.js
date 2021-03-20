import { LitElement, html, css } from 'lit';

import { sharedStyles } from './shared-styles.js';

export class MyCounter extends LitElement {
  static get properties() {
    return {
      count: { type: Number },
    };
  }

  static get styles() {
    return [
      sharedStyles,
      css`
        * {
          box-sizing: border-box;
        }
      `,
    ];
  }

  render() {
    return html` <div>Hello World</div> `;
  }
}

customElements.define('my-counter', MyCounter);
