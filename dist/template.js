import { packd_export_0 } from 'https://srv.divriots.com/packd/lit,lit/directives/class-map.js';const { LitElement,html,css } = packd_export_0;;
import { sharedStyles } from './shared-styles.js';
export class MyCounter extends LitElement {
  static get properties() {
    return {
      count: {
        type: Number
      }
    };
  }

  static get styles() {
    return [sharedStyles, css`
        * {
          box-sizing: border-box;
        }
      `];
  }

  render() {
    return html` <div>Hello World</div> `;
  }

}
customElements.define('my-counter', MyCounter);