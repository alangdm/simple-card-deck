import { LitElement, html, css } from 'lit';

import { sharedStyles } from './shared-styles.js';

export class FileInput extends LitElement {
  static get properties() {
    return {
      highlighted: { type: Boolean, reflect: true },
    };
  }

  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          display: inline-flex;
        }
        :host([highlighted]) label,
        :host(:focus-within) label {
          border-color: var(--accent-color);
        }
        input {
          position: fixed;
          top: 0px;
          left: 0px;
          width: 4px;
          height: 4px;
          opacity: 0;
          overflow: hidden;
          border: none;
          margin: 0;
          padding: 0;
          display: block;
          visibility: visible;
          pointer-events: none;
        }
        label {
          display: flex;
          align-items: center;
        }
      `,
    ];
  }

  render() {
    return html`
      <label for="input" class="button"><slot></slot></label>
      <input
        id="input"
        type="file"
        multiple
        accept="image/*"
        @change=${({ target }) => this._handleFiles(target.files)}
      />
    `;
  }

  _highlight(e) {
    e.preventDefault();
    e.stopPropagation();
    this.highlighted = true;
  }

  _unhighlight(e) {
    e.preventDefault();
    e.stopPropagation();
    this.highlighted = false;
  }

  _drop(e) {
    this._handleFiles(e.dataTransfer.files);
  }

  _readFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener('loadend', () => resolve(reader.result));
      reader.addEventListener('error', reject);
    });
  }

  async _handleFiles(files) {
    this.dispatchEvent(new CustomEvent('loading'));
    const promises = [...files].map(f => this._readFile(f));
    this.fileUrls = await Promise.all(promises);
    this.dispatchEvent(new Event('change'));
  }

  constructor() {
    super();
    this._highlight = this._highlight.bind(this);
    this._unhighlight = this._unhighlight.bind(this);
    this._drop = this._drop.bind(this);
  }

  firstUpdated() {
    document.addEventListener('dragenter', this._highlight, { capture: false });
    document.addEventListener('dragover', this._highlight, { capture: false });
    document.addEventListener('dragleave', this._unhighlight, {
      capture: false,
    });
    document.addEventListener('drop', this._unhighlight, { capture: false });
    document.addEventListener('drop', this._drop);
  }

  disconnectedCallback() {
    document.removeEventListener('dragenter', this._highlight);
    document.removeEventListener('dragover', this._highlight);
    document.removeEventListener('dragleave', this._unhighlight);
    document.removeEventListener('drop', this._unhighlight);
    document.removeEventListener('drop', this._drop);
  }
}

customElements.define('file-input', FileInput);
