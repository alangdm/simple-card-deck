/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var t;const s=`lit$${(Math.random()+"").slice(9)}$`,i="?"+s,e=`<${i}>`,h=document,o=(t="")=>h.createComment(t),n=t=>null===t||"object"!=typeof t&&"function"!=typeof t,r=Array.isArray,l=t=>r(t)||"function"==typeof t?.[Symbol.iterator],c=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,a=/-->/g,u=/>/g,_=/>|[ 	\n\r](?:([^ -- "'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,d=/'/g,f=/"/g,v=/^(?:script|style|textarea)$/i,m=t=>(s,...i)=>({_$litType$:t,strings:s,values:i}),p=m(1),$=m(2),g=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),x=new Map,b=(t,s,i)=>{const e=i?.renderBefore??s;let h=e.t;if(void 0===h){const t=i?.renderBefore??null;e.t=h=new E(s.insertBefore(o(),t),t,void 0,i);}return h.M(t),h},T=h.createTreeWalker(h,133,null,!1),w=(t,i)=>{const h=t.length-1,o=[];let n,r=2===i?"<svg>":"",l=c;for(let i=0;i<h;i++){const h=t[i];let m,p,$=-1,g=0;for(;g<h.length&&(l.lastIndex=g,p=l.exec(h),null!==p);)g=l.lastIndex,l===c?"!--"===p[1]?l=a:void 0!==p[1]?l=u:void 0!==p[2]?(v.test(p[2])&&(n=RegExp("</"+p[2],"g")),l=_):void 0!==p[3]&&(l=_):l===_?">"===p[0]?(l=n??c,$=-1):void 0===p[1]?$=-2:($=l.lastIndex-p[2].length,m=p[1],l=void 0===p[3]?_:'"'===p[3]?f:d):l===f||l===d?l=_:l===a||l===u?l=c:(l=_,n=void 0);const y=l===_&&t[i+1].startsWith("/>")?" ":"";r+=l===c?h+e:$>=0?(o.push(m),h.slice(0,$)+"$lit$"+h.slice($)+s+y):h+s+(-2===$?(o.push(void 0),i):y);}return [r+(t[h]||"<?>")+(2===i?"</svg>":""),o]};class A{constructor({strings:t,_$litType$:e},h){let n;this.o=[],this.C=h;let r=0,l=0,c=0;const a=t.length-1,[u,_]=w(t,e);if(this.B=this.A(u),T.currentNode=this.B.content,2===e){const t=this.B.content,s=t.firstChild;s.remove(),t.append(...s.childNodes);}for(;null!==(n=T.nextNode())&&l<a;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const i of n.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(s)){const e=_[c++];if(t.push(i),void 0!==e){const t=n.getAttribute(e.toLowerCase()+"$lit$").split(s),i=/([.?@])?(.*)/.exec(e);this.o.push({h:1,l:r,u:i[2],v:t,p:"."===i[1]?I:"?"===i[1]?M:"@"===i[1]?C:S}),l+=t.length-1;}else this.o.push({h:6,l:r});}for(const s of t)n.removeAttribute(s);}if(v.test(n.tagName)){const t=n.textContent.split(s),i=t.length-1;if(i>0){n.textContent="";for(let s=0;s<i;s++)n.append(t[s]||o()),this.o.push({h:2,l:++r}),l++;n.append(t[i]||o());}}}else if(8===n.nodeType)if(n.data===i)l++,this.o.push({h:2,l:r});else {let t=-1;for(;-1!==(t=n.data.indexOf(s,t+1));)this.o.push({h:7,l:r}),l++,t+=s.length-1;}r++;}}A(t){const s=h.createElement("template");return s.innerHTML=t,s}}function P(t,s,i=t,e){var h;if(s===g)return s;let o=void 0!==e?i.Σ_?.[e]:i.Σm;const r=n(s)?void 0:s._$litDirective$;return o?.constructor!==r&&(o?.S?.(!1),o=void 0===r?void 0:new r({...t,$:t,Q:i,g:e}),void 0!==e?((h=i).Σ_??(h.Σ_=[]))[e]=o:i.Σm=o),void 0!==o&&(s=P(t,o.W(t,s.values),o,e)),s}class V{constructor(t,s){this.o=[],this.R=void 0,this.G=t,this.Q=s;}k(t){const{B:{content:s},o:i}=this.G,e=h.importNode(s,!0);T.currentNode=e;let o=T.nextNode(),n=0,r=0,l=i[0];for(;void 0!==l&&null!==o;){if(n===l.l){let s;2===l.h?s=new E(o,o.nextSibling,this,t):1===l.h?s=new l.p(o,l.u,l.v,this,t):6===l.h&&(s=new N(o,this,t)),this.o.push(s),l=i[++r];}void 0!==l&&n!==l.l&&(o=T.nextNode(),n++);}return e}j(t){let s=0;for(const i of this.o)void 0!==i&&(void 0!==i.strings?(i.M(t,i,s),s+=i.strings.length-2):i.M(t[s])),s++;}}class E{constructor(t,s,i,e){this.type=2,this.R=void 0,this.D=t,this.E=s,this.Q=i,this.options=e;}setConnected(t){this.T?.(t);}get parentNode(){return this.D.parentNode}M(t,s=this){t=P(this,t,s),n(t)?t===y||null==t||""===t?(this.L!==y&&this.V(),this.L=y):t!==this.L&&t!==g&&this.Y(t):void 0!==t._$litType$?this.q(t):void 0!==t.nodeType?this.X(t):l(t)?this.tt(t):this.Y(t);}it(t,s=this.E){return this.D.parentNode.insertBefore(t,s)}X(t){this.L!==t&&(this.V(),this.L=this.it(t));}Y(t){const s=this.D.nextSibling;null!==s&&3===s.nodeType&&(null===this.E?null===s.nextSibling:s===this.E.previousSibling)?s.data=t:this.X(h.createTextNode(t)),this.L=t;}q(t){const{values:s,strings:i}=t,e=this.F(i,t);if(this.L?.G===e)this.L.j(s);else {const t=new V(e,this),i=t.k(this.options);t.j(s),this.X(i),this.L=t;}}F(t,s){let i=x.get(t);return void 0===i&&x.set(t,i=new A(s)),i}tt(t){r(this.L)||(this.L=[],this.V());const s=this.L;let i,e=0;for(const h of t)e===s.length?s.push(i=new E(this.it(o()),this.it(o()),this,this.options)):i=s[e],i.M(h),e++;e<s.length&&(this.V(i&&i.E.nextSibling,e),s.length=e);}V(t=this.D.nextSibling,s){for(this.T?.(!1,!0,s);t&&t!==this.E;){const s=t.nextSibling;t.remove(),t=s;}}}class S{constructor(t,s,i,e,h){this.type=1,this.L=y,this.R=void 0,this.st=void 0,this.element=t,this.name=s,this.Q=e,this.options=h,i.length>2||""!==i[0]||""!==i[1]?(this.L=Array(i.length-1).fill(y),this.strings=i):this.L=y;}get tagName(){return this.element.tagName}M(t,s=this,i,e){const h=this.strings;let o=!1;if(void 0===h)t=P(this,t,s,0),o=!n(t)||t!==this.L&&t!==g,o&&(this.L=t);else {const e=t;let r,l;for(t=h[0],r=0;r<h.length-1;r++)l=P(this,e[i+r],s,r),l===g&&(l=this.L[r]),o||(o=!n(l)||l!==this.L[r]),l===y?t=y:t!==y&&(t+=(l??"")+h[r+1]),this.L[r]=l;}o&&!e&&this.nt(t);}nt(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class I extends S{constructor(){super(...arguments),this.type=3;}nt(t){this.element[this.name]=t===y?void 0:t;}}class M extends S{constructor(){super(...arguments),this.type=4;}nt(t){t&&t!==y?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name);}}class C extends S{constructor(){super(...arguments),this.type=5;}M(t,s=this){if((t=P(this,t,s,0)??y)===g)return;const i=this.L,e=t===y&&i!==y||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,h=t!==y&&(i===y||e);e&&this.element.removeEventListener(this.name,this,i),h&&this.element.addEventListener(this.name,this,t),this.L=t;}handleEvent(t){"function"==typeof this.L?this.L.call(this.options?.host??this.element,t):this.L.handleEvent(t);}}class N{constructor(t,s,i){this.element=t,this.type=6,this.R=void 0,this.st=void 0,this.Q=s,this.options=i;}M(t){P(this,t);}}const R={ot:"$lit$",rt:s,ht:i,lt:1,ct:w,dt:V,ut:l,at:P,ft:E,vt:S,wt:M,_t:C,yt:I,$t:N};globalThis.litHtmlPlatformSupport?.(A,E),((t=globalThis).litHtmlVersions??(t.litHtmlVersions=[])).push("2.0.0-pre.6");

/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const t$1=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$1=Symbol();class n$1{constructor(t,n){if(n!==e$1)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t;}get styleSheet(){return t$1&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const s$1=t=>new n$1(t+"",e$1),o$1=new Map,r$1=(t,...s)=>{const r=s.reduce(((e,s,o)=>e+(t=>{if(t instanceof n$1)return t.cssText;if("number"==typeof t)return t;throw Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[o+1]),t[0]);let i=o$1.get(r);return void 0===i&&o$1.set(r,i=new n$1(r,e$1)),i},i$1=(e,n)=>{t$1?e.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const n=document.createElement("style");n.textContent=t.cssText,e.appendChild(n);}));},S$1=t$1?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return s$1(e)})(t):t;

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var i$2;window.JSCompiler_renameProperty=(t,s)=>t;const e$2={toAttribute(t,s){switch(s){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},h$1=(t,s)=>s!==t&&(s==s||t==t),r$2={attribute:!0,type:String,converter:e$2,reflect:!1,hasChanged:h$1};class o$2 extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πh=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πl=null,this.u();}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((s,i)=>{const e=this.Πp(i,s);void 0!==e&&(this.Πm.set(e,i),t.push(e));})),t}static createProperty(t,s=r$2){if(s.state&&(s.attribute=!1),this.finalize(),this.elementProperties.set(t,s),!s.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,i,s);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,s,i){return {get(){return this[s]},set(e){const h=this[t];this[s]=e,this.requestUpdate(t,h,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||r$2}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,s=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of s)this.createProperty(i,t[i]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(S$1(s));}else void 0!==s&&i.push(S$1(s));return i}static Πp(t,s){const i=s.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){this.Πv=new Promise((t=>this.enableUpdating=t)),this.P=new Map,this.Πg(),this.requestUpdate();}addController(t){(this.Π_??(this.Π_=[])).push(t),this.isConnected&&t.hostConnected?.();}removeController(t){this.Π_?.splice(this.Π_.indexOf(t)>>>0,1);}Πg(){this.constructor.elementProperties.forEach(((t,s)=>{this.hasOwnProperty(s)&&(this.Πi.set(s,this[s]),delete this[s]);}));}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return i$1(t,this.constructor.elementStyles),t}connectedCallback(){this.hasUpdated||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this.Π_?.forEach((t=>t.hostConnected?.())),this.Πh&&(this.Πh(),this.Πo=this.Πh=void 0);}enableUpdating(t){}disconnectedCallback(){this.Π_?.forEach((t=>t.hostDisconnected?.())),this.Πo=new Promise((t=>this.Πh=t));}attributeChangedCallback(t,s,i){this.O(t,i);}Πj(t,s,i=r$2){const h=this.constructor.Πp(t,i);if(void 0!==h&&!0===i.reflect){const r=(i.converter?.toAttribute??e$2.toAttribute)(s,i.type);this.Πl=t,null==r?this.removeAttribute(h):this.setAttribute(h,r),this.Πl=null;}}O(t,s){const i=this.constructor,h=i.Πm.get(t);if(void 0!==h&&this.Πl!==h){const t=i.getPropertyOptions(h),r=t.converter,o=r?.fromAttribute??("function"==typeof r?r:null)??e$2.fromAttribute;this.Πl=h,this[h]=o(s,t.type),this.Πl=null;}}requestUpdate(t,s,i){let e=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||h$1)(this[t],s)?(this.P.has(t)||this.P.set(t,s),!0===i.reflect&&this.Πl!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,i))):e=!1),!this.isUpdatePending&&e&&(this.Πv=this.Πq());}async Πq(){this.isUpdatePending=!0;try{for(await this.Πv;this.Πo;)await this.Πo;}catch(t){Promise.reject(t);}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,s)=>this[s]=t)),this.Πi=void 0);let t=!1;const s=this.P;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this.Π_?.forEach((t=>t.hostUpdate?.())),this.update(s)):this.Π$();}catch(s){throw t=!1,this.Π$(),s}t&&this.H(s);}willUpdate(t){}H(t){this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.Π_?.forEach((t=>t.hostUpdated?.())),this.updated(t);}Π$(){this.P=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πv}shouldUpdate(t){return !0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,s)=>this.Πj(s,this[s],t))),this.Πk=void 0),this.Π$();}updated(t){}firstUpdated(t){}}o$2.finalized=!0,o$2.shadowRootOptions={mode:"open"},globalThis.reactiveElementPlatformSupport?.({ReactiveElement:o$2}),((i$2=globalThis).reactiveElementVersions??(i$2.reactiveElementVersions=[])).push("1.0.0-pre.2");

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var s$2;const i$3=o$2;((s$2=globalThis).litElementVersions??(s$2.litElementVersions=[])).push("3.0.0-pre.3");class o$3 extends o$2{constructor(){super(...arguments),this.I={host:this},this.Φo=void 0;}createRenderRoot(){var t;const e=super.createRenderRoot();return (t=this.I).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const r=this.render();super.update(t),this.Φo=b(r,this.renderRoot,this.I);}connectedCallback(){super.connectedCallback(),this.Φo?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this.Φo?.setConnected(!1);}render(){return g}}o$3.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:o$3}),globalThis.litElementPlatformSupport?.({LitElement:o$3});const l$1={O:(t,e,r)=>{t.O(e,r);},P:t=>t.P};

var index = /*#__PURE__*/Object.freeze({
	__proto__: null,
	CSSResult: n$1,
	adoptStyles: i$1,
	css: r$1,
	getCompatibleStyle: S$1,
	supportsAdoptingStyleSheets: t$1,
	unsafeCSS: s$1,
	ReactiveElement: o$2,
	defaultConverter: e$2,
	notEqual: h$1,
	_Σ: R,
	html: p,
	noChange: g,
	nothing: y,
	render: b,
	svg: $,
	LitElement: o$3,
	UpdatingElement: i$3,
	_Φ: l$1
});

const { css } = index;const sharedStyles = css`
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

const { LitElement,html,css: css$1 } = index;class FileInput extends LitElement {
  static get properties() {
    return {
      highlighted: {
        type: Boolean,
        reflect: true
      }
    };
  }

  static get styles() {
    return [sharedStyles, css$1`
        :host {
          display: inline-flex;
          border: 2px dashed var(--text-color);
          padding: 2rem 1rem;
        }
        :host([highlighted]),
        :host(:focus-within) {
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
          display: block;
          cursor: pointer;
        }
      `];
  }

  render() {
    return html`
      <label for="input"><slot></slot></label>
      <input
        id="input"
        type="file"
        multiple
        accept="image/*"
        @change=${({
      target
    }) => this._handleFiles(target.files)}
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
    this.addEventListener('dragenter', this._highlight, {
      capture: false
    });
    this.addEventListener('dragover', this._highlight, {
      capture: false
    });
    this.addEventListener('dragleave', this._unhighlight, {
      capture: false
    });
    this.addEventListener('drop', this._unhighlight, {
      capture: false
    });
    this.addEventListener('drop', this._drop);
  }

  disconnectedCallback() {
    this.removeEventListener('dragenter', this._highlight);
    this.removeEventListener('dragover', this._highlight);
    this.removeEventListener('dragleave', this._unhighlight);
    this.removeEventListener('drop', this._unhighlight);
    this.removeEventListener('drop', this._drop);
  }

}
customElements.define('file-input', FileInput);

const TEXTS = {
  beforeLoad: 'Load a deck to start playing!',
  loading: 'Loading...',
  afterLoad: 'Loaded!',
  secondLoad: 'Load a different deck?',
  inputLabel: 'Select the images for the cards',
  nextCard: 'Next Card',
  shuffle: 'Shuffle Deck'
};
const t$2 = key => TEXTS[key] || key;

const { LitElement: LitElement$1,html: html$1,css: css$2 } = index;const STATUS = {
  NEW_GAME: 'newGame',
  LOADING: 'loading',
  LOADED: 'loaded',
  PLAYING: 'playing',
  FINISHED: 'finished',
  REPLAY: 'replay'
};
class SimpleCardDeck extends LitElement$1 {
  static get properties() {
    return {
      fileUrls: {
        attribute: false
      },
      status: {
        attribute: false
      },
      _currentCard: {
        attribute: false
      }
    };
  }

  static get styles() {
    return [sharedStyles, css$2`
        :host {
          block-size: 100%;
          display: grid;
          grid-template-rows: auto 1fr;
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
          display: flex;
          flex-flow: column nowrap;
          align-items: center;
          max-inline-size: 100%;
          block-size: 100%;
          overflow: hidden;
        }
        main > div > .card {
          max-inline-size: 100%;
          max-block-size: 100%;
          aspect-ratio: 3 / 4;
          object-fit: contain;
          border-radius: 10px;
        }
        @media (max-width: 600px) {
          main {
            inline-size: 100%;
          }
        }
      `];
  }

  render() {
    return html$1`
      <header>
        <details open>
          <summary>${this._headerText}</summary>
          <file-input @change=${this._deckChange} @input=${this._deckLoading}
            >${t$2('inputLabel')}</file-input
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
          ${this._currentCard ? html$1` <img class="card" src="${this._currentCard}" /> ` : ''}
        </div>
      </main>
    `;
  }

  constructor() {
    super();
    this.fileUrls = [];
    this.status = STATUS.NEW_GAME;
  }

  get _headerText() {
    switch (this.status) {
      case STATUS.NEW_GAME:
        return t$2('beforeLoad');

      case STATUS.LOADING:
        return t$2('loading');

      case STATUS.LOADED:
        return t$2('afterLoad');

      default:
        return t$2('secondLoad');
    }
  }

  get _actionText() {
    return this.status === STATUS.FINISHED ? t$2('shuffle') : t$2('nextCard');
  }

  get _canPlay() {
    return this.status !== STATUS.NEW_GAME && this.status !== STATUS.LOADING;
  }

  _deckAction() {
    if (this.status === STATUS.FINISHED) {
      this._shuffle();

      this.status = STATUS.REPLAY;
    } else if (this.cardQueue.length > 0) {
      this.status = STATUS.PLAYING;
      this._currentCard = this.cardQueue.shift();

      if (this.cardQueue.length === 0) {
        this.status = STATUS.FINISHED;
      }
    }
  }

  _shuffle() {
    this._currentCard = null;
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

export { SimpleCardDeck };
