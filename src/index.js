import { LitElement, html, css } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

import { sharedStyles } from './shared-styles.js';
import './file-input.js';
import { t, LANGUAGES } from './texts.js';

const STATUS = {
  NEW_GAME: 'newGame',
  LOADING: 'loading',
  LOADED: 'loaded',
  PLAYING: 'playing',
  ANIMATING: 'animating',
  FINISHED: 'finished',
  REPLAY: 'replay',
};

export class SimpleCardDeck extends LitElement {
  static get properties() {
    return {
      fileUrls: {
        attribute: false,
      },
      status: {
        attribute: false,
      },
      _currentCard: {
        attribute: false,
      },
    };
  }

  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          block-size: 100%;
          display: grid;
          grid-template-rows: auto 1fr auto;
          place-items: center;
          padding: 1rem;
          grid-gap: 1rem;
        }
        main {
          block-size: 100%;
          display: grid;
          grid-template-rows: auto 1fr;
          justify-items: center;
          grid-gap: 0.25rem;
          overflow: hidden;
        }
        main > div {
          display: grid;
          justify-items: center;
          grid-template-areas: 'card';
          max-inline-size: 100%;
          block-size: 100%;
          overflow: hidden;
        }
        .card {
          grid-area: card;
          inline-size: 100%;
          max-block-size: 100%;
          object-fit: contain;
          border-radius: 5%;
        }
        .next.card {
          visibility: hidden;
          transform: translateY(100%);
          transition: transform 0.01s ease-in-out;
        }
        .next.card.animate {
          visibility: visible;
          transform: translateY(0);
          transition-duration: 0.5s;
        }
        @media (max-width: 600px) {
          main {
            inline-size: 100%;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            transition-duration: 0.001s !important;
          }
        }
      `,
    ];
  }

  render() {
    return html`
      <header>
        <details open>
          <summary>${this._headerText}</summary>
          <file-input @change=${this._deckChange} @input=${this._deckLoading}
            >${t('inputLabel')}</file-input
          >
        </details>
      </header>
      <main>
        <button
          type="button"
          ?disabled=${!this._canPlay}
          @click=${this._deckAction}
        >
          ${this._actionText}
        </button>
        <div>
          ${this._currentCard
            ? html` <img class="card" src="${this._currentCard}" /> `
            : ''}
          <img
            class="${classMap({
              card: true,
              next: true,
              animate: this._nextCard,
            })}"
            src="${this._nextCard}"
            @transitionend=${this._transitionEnd}
          />
        </div>
      </main>
      <footer>
        <a href="https://github.com/alangdm/simple-card-deck">Github</a>
      </footer>
    `;
  }

  constructor() {
    super();
    this.fileUrls = [];
    this.status = STATUS.NEW_GAME;

    const lang = navigator.language.substring(0, 2);
    if (LANGUAGES.includes(lang)) {
      document.documentElement.setAttribute('lang', lang);
    }
  }

  get _headerText() {
    switch (this.status) {
      case STATUS.NEW_GAME:
        return t('beforeLoad');
      case STATUS.LOADING:
        return t('loading');
      case STATUS.LOADED:
        return t('afterLoad');
      default:
        return t('secondLoad');
    }
  }

  get _actionText() {
    return this.status === STATUS.FINISHED ? t('shuffle') : t('nextCard');
  }

  get _canPlay() {
    return (
      this.status !== STATUS.NEW_GAME &&
      this.status !== STATUS.LOADING &&
      this.status !== STATUS.ANIMATING
    );
  }

  _transitionEnd() {
    if (this.status === STATUS.ANIMATING) {
      this._currentCard = this._nextCard;
      this._nextCard = null;
      if (this.cardQueue.length === 0) {
        this.status = STATUS.FINISHED;
      } else {
        this.status = STATUS.PLAYING;
      }
    }
    this.shadowRoot.querySelector('button').focus();
  }

  _deckAction() {
    if (this.status === STATUS.FINISHED) {
      this._shuffle();
      this.status = STATUS.REPLAY;
    } else if (this.cardQueue.length > 0) {
      this.status = STATUS.ANIMATING;
      this._nextCard = this.cardQueue.shift();
    }
  }

  _shuffle() {
    this._currentCard = null;
    this._nextCard = null;
    this.cardQueue = this.fileUrls.slice().sort(() => 0.5 - Math.random());
  }

  _deckChange(e) {
    this.status = 'loaded';
    this.fileUrls = e.target.fileUrls;
    this._shuffle();
  }

  _deckLoading() {
    this.status = 'loading';
  }
}

customElements.define('simple-card-deck', SimpleCardDeck);
