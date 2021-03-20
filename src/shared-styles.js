import { css } from 'lit';

export const sharedStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  summary:focus {
    outline: none;
    border: 1px solid var(--accent-color);
  }
  summary:focus:not(:focus-visible) {
    border: none;
  }

  summary {
    margin-bottom: 0.25rem;
  }

  button {
    border: 1px solid var(--text-color);
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
  button:hover:enabled {
    opacity: 0.9;
  }
  button:active:enabled {
    opacity: 0.8;
  }
`;
