import { packd_export_0 } from 'https://srv.divriots.com/packd/lit,lit/directives/class-map.js';const { css } = packd_export_0;;
export const sharedStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  a {
    color: var(--text-color);
    text-decoration: none;
  }

  summary {
    border: 2px solid transparent;
  }
  summary:focus {
    outline: none;
    border-color: var(--accent-color);
  }
  summary:focus:not(:focus-visible) {
    border-color: transparent;
  }

  summary {
    margin-bottom: 0.25rem;
  }

  button,
  .button {
    border: 2px solid var(--text-color);
    border-radius: 4px;
    padding: 0 0.5rem;
    width: auto;
    height: 40px;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-appearance: none;
    cursor: pointer;
  }
  button:disabled {
    border-color: var(--disabled-text-color);
    color: var(--disabled-text-color);
    opacity: 0.6;
    cursor: not-allowed;
  }
  button:focus {
    outline: none;
    border-color: var(--accent-color);
  }
  button:focus:not(:focus-visible) {
    border-color: var(--text-color);
  }
  button:hover:enabled,
  .button:hover {
    opacity: 0.9;
  }
  button:active:enabled,
  .button:active {
    opacity: 0.8;
  }
`;