"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16973],{46050:function(t,e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});let i=window,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),n=new WeakMap,o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(s&&void 0===t){let i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}},l=t=>new o("string"==typeof t?t:t+"",void 0,r),h=(t,...e)=>{let i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new o(i,t,r)},a=(t,e)=>{s?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{let s=document.createElement("style"),r=i.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=e.cssText,t.appendChild(s)})},d=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return l(e)})(t):t,c=window,u=c.trustedTypes,p=u?u.emptyScript:"",_=c.reactiveElementPolyfillSupport,g={toAttribute(t,e){switch(e){case Boolean:t=t?p:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),$={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:v},f="finalized",m=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,i)=>{let s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){let r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||$}static finalize(){if(this.hasOwnProperty(f))return!1;this[f]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let t of i)e.unshift(d(t))}else void 0!==t&&e.push(d(t));return e}static _$Ep(t,e){let i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return a(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=$){var s;let r=this.constructor._$Ep(t,i);if(void 0!==r&&!0===i.reflect){let n=((null===(s=i.converter)||void 0===s?void 0:s.toAttribute)!==void 0?i.converter:g).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(t,e){var i;let s=this.constructor,r=s._$Ev.get(t);if(void 0!==r&&this._$El!==r){let t=s.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)!==void 0?t.converter:g;this._$El=r,this[r]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1,i=this._$AL;try{(e=this.shouldUpdate(i))?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};m[f]=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==_||_({ReactiveElement:m}),(null!==(tb=c.reactiveElementVersions)&&void 0!==tb?tb:c.reactiveElementVersions=[]).push("1.6.2");let A=window,S=A.trustedTypes,y=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",C=`lit$${(Math.random()+"").slice(9)}$`,b="?"+C,w=`<${b}>`,U=document,O=()=>U.createComment(""),I=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,N=t=>M(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),T=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,G=/>/g,x=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,k=/"/g,L=/^(?:script|style|textarea|title)$/i,W=(t,...e)=>({_$litType$:1,strings:t,values:e}),D=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),z=new WeakMap,B=U.createTreeWalker(U,129,null,!1),J=(t,e)=>{let i=t.length-1,s=[],r,n=2===e?"<svg>":"",o=P;for(let e=0;e<i;e++){let i=t[e],l,h,a=-1,d=0;for(;d<i.length&&(o.lastIndex=d,null!==(h=o.exec(i)));)d=o.lastIndex,o===P?"!--"===h[1]?o=R:void 0!==h[1]?o=G:void 0!==h[2]?(L.test(h[2])&&(r=RegExp("</"+h[2],"g")),o=x):void 0!==h[3]&&(o=x):o===x?">"===h[0]?(o=r??P,a=-1):void 0===h[1]?a=-2:(a=o.lastIndex-h[2].length,l=h[1],o=void 0===h[3]?x:'"'===h[3]?k:H):o===k||o===H?o=x:o===R||o===G?o=P:(o=x,r=void 0);let c=o===x&&t[e+1].startsWith("/>")?" ":"";n+=o===P?i+w:a>=0?(s.push(l),i.slice(0,a)+E+i.slice(a)+C+c):i+C+(-2===a?(s.push(void 0),e):c)}let l=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==y?y.createHTML(l):l,s]};class V{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0,o=t.length-1,l=this.parts,[h,a]=J(t,e);if(this.el=V.createElement(h,i),B.currentNode=this.el.content,2===e){let t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=B.nextNode())&&l.length<o;){if(1===s.nodeType){if(s.hasAttributes()){let t=[];for(let e of s.getAttributeNames())if(e.endsWith(E)||e.startsWith(C)){let i=a[n++];if(t.push(e),void 0!==i){let t=s.getAttribute(i.toLowerCase()+E).split(C),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?Q:"?"===e[1]?X:"@"===e[1]?tt:F})}else l.push({type:6,index:r})}for(let e of t)s.removeAttribute(e)}if(L.test(s.tagName)){let t=s.textContent.split(C),e=t.length-1;if(e>0){s.textContent=S?S.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],O()),B.nextNode(),l.push({type:2,index:++r});s.append(t[e],O())}}}else if(8===s.nodeType){if(s.data===b)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(C,t+1));)l.push({type:7,index:r}),t+=C.length-1}}r++}}static createElement(t,e){let i=U.createElement("template");return i.innerHTML=t,i}}function K(t,e,i=t,s){var r,n,o,l;if(e===D)return e;let h=void 0!==s?null===(r=i._$Co)||void 0===r?void 0:r[s]:i._$Cl,a=I(e)?void 0:e._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(n=null==h?void 0:h._$AO)||void 0===n||n.call(h,!1),void 0===a?h=void 0:(h=new a(t))._$AT(t,i,s),void 0!==s?(null!==(o=(l=i)._$Co)&&void 0!==o?o:l._$Co=[])[s]=h:i._$Cl=h),void 0!==h&&(e=K(t,h._$AS(t,e.values),h,s)),e}let Y=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:i},parts:s}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:U).importNode(i,!0);B.currentNode=r;let n=B.nextNode(),o=0,l=0,h=s[0];for(;void 0!==h;){if(o===h.index){let e;2===h.type?e=new q(n,n.nextSibling,this,t):1===h.type?e=new h.ctor(n,h.name,h.strings,this,t):6===h.type&&(e=new te(n,this,t)),this._$AV.push(e),h=s[++l]}o!==(null==h?void 0:h.index)&&(n=B.nextNode(),o++)}return B.currentNode=U,r}v(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}};class q{constructor(t,e,i,s){var r;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(r=null==s?void 0:s.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&(null==t?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){I(t=K(this,t,e))?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==D&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):N(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==j&&I(this._$AH)?this._$AA.nextSibling.data=t:this.$(U.createTextNode(t)),this._$AH=t}g(t){var e;let{values:i,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.v(i);else{let t=new Y(r,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=z.get(t.strings);return void 0===e&&z.set(t.strings,e=new V(t)),e}T(t){M(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let r of t)s===e.length?e.push(i=new q(this.k(O()),this.k(O()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class F{constructor(t,e,i,s,r){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){let r=this.strings,n=!1;if(void 0===r)(n=!I(t=K(this,t,e,0))||t!==this._$AH&&t!==D)&&(this._$AH=t);else{let s,o;let l=t;for(t=r[0],s=0;s<r.length-1;s++)(o=K(this,l[i+s],e,s))===D&&(o=this._$AH[s]),n||(n=!I(o)||o!==this._$AH[s]),o===j?t=j:t!==j&&(t+=(o??"")+r[s+1]),this._$AH[s]=o}n&&!s&&this.j(t)}j(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Q extends F{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===j?void 0:t}}let Z=S?S.emptyScript:"";class X extends F{constructor(){super(...arguments),this.type=4}j(t){t&&t!==j?this.element.setAttribute(this.name,Z):this.element.removeAttribute(this.name)}}class tt extends F{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=K(this,t,e,0))&&void 0!==i?i:j)===D)return;let s=this._$AH,r=t===j&&s!==j||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==j&&(s===j||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class te{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}let ti=A.litHtmlPolyfillSupport;null==ti||ti(V,q),(null!==(tw=A.litHtmlVersions)&&void 0!==tw?tw:A.litHtmlVersions=[]).push("2.7.4");let ts=(t,e,i)=>{var s,r;let n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e,o=n._$litPart$;if(void 0===o){let t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;n._$litPart$=o=new q(e.insertBefore(O(),t),t,void 0,i??{})}return o._$AI(t),o},tr=class extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ts(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return D}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */tr.finalized=!0,tr._$litElement$=!0,null===(tU=globalThis.litElementHydrateSupport)||void 0===tU||tU.call(globalThis,{LitElement:tr});let tn=globalThis.litElementPolyfillSupport;null==tn||tn({LitElement:tr}),(null!==(tO=globalThis.litElementVersions)&&void 0!==tO?tO:globalThis.litElementVersions=[]).push("3.3.2");let to=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}}:{...e,finisher(i){i.createProperty(e.key,t)}},tl=(t,e,i)=>{e.constructor.createProperty(i,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function th(t){return(e,i)=>void 0!==i?tl(t,e,i):to(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */null===(tI=window.HTMLSlotElement)||void 0===tI||tI.prototype.assignedElements;let ta=t=>void 0===t.strings,td={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},tc=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}},tu=(t,e)=>{var i,s;let r=t._$AN;if(void 0===r)return!1;for(let t of r)null===(s=(i=t)._$AO)||void 0===s||s.call(i,e,!1),tu(t,e);return!0},tp=t=>{let e,i;do{if(void 0===(e=t._$AM))break;(i=e._$AN).delete(t),t=e}while((null==i?void 0:i.size)===0)},t_=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),t$(e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function tg(t){void 0!==this._$AN?(tp(this),this._$AM=t,t_(this)):this._$AM=t}function tv(t,e=!1,i=0){let s=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size){if(e){if(Array.isArray(s))for(let t=i;t<s.length;t++)tu(s[t],!1),tp(s[t]);else null!=s&&(tu(s,!1),tp(s))}else tu(this,t)}}let t$=t=>{var e,i,s,r;t.type==td.CHILD&&(null!==(e=(s=t)._$AP)&&void 0!==e||(s._$AP=tv),null!==(i=(r=t)._$AQ)&&void 0!==i||(r._$AQ=tg))};class tf extends tc{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),t_(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,s;t!==this.isConnected&&(this.isConnected=t,t?null===(i=this.reconnected)||void 0===i||i.call(this):null===(s=this.disconnected)||void 0===s||s.call(this)),e&&(tu(this,t),tp(this))}setValue(t){if(ta(this._$Ct))this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let tm=()=>new tA;class tA{}let tS=new WeakMap,ty=(tC=class extends tf{render(t){return j}update(t,[e]){var i;let s=e!==this.G;return s&&void 0!==this.G&&this.ot(void 0),(s||this.rt!==this.lt)&&(this.G=e,this.ct=null===(i=t.options)||void 0===i?void 0:i.host,this.ot(this.lt=t.element)),j}ot(t){var e;if("function"==typeof this.G){let i=null!==(e=this.ct)&&void 0!==e?e:globalThis,s=tS.get(i);void 0===s&&(s=new WeakMap,tS.set(i,s)),void 0!==s.get(this.G)&&this.G.call(this.ct,void 0),s.set(this.G,t),void 0!==t&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){var t,e,i;return"function"==typeof this.G?null===(e=tS.get(null!==(t=this.ct)&&void 0!==t?t:globalThis))||void 0===e?void 0:e.get(this.G):null===(i=this.G)||void 0===i?void 0:i.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}},(...t)=>({_$litDirective$:tC,values:t}));var tE,tC,tb,tw,tU,tO,tI,tM=Object.defineProperty,tN=Object.getOwnPropertyDescriptor,tT=(t,e,i,s)=>{for(var r,n=s>1?void 0:s?tN(e,i):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(s?r(e,i,n):r(n))||n);return s&&n&&tM(e,i,n),n};e.GiscusWidget=class extends tr{constructor(){super(),this.GISCUS_SESSION_KEY="giscus-session",this.GISCUS_DEFAULT_HOST="https://giscus.app",this.ERROR_SUGGESTION="Please consider reporting this error at https://github.com/giscus/giscus/issues/new.",this.__session="",this._iframeRef=tm(),this.messageEventHandler=this.handleMessageEvent.bind(this),this.hasLoaded=!1,this.host=this.GISCUS_DEFAULT_HOST,this.strict="0",this.reactionsEnabled="1",this.emitMetadata="0",this.inputPosition="bottom",this.theme="light",this.lang="en",this.loading="eager",this.setupSession(),window.addEventListener("message",this.messageEventHandler)}get iframeRef(){var t;return null==(t=this._iframeRef)?void 0:t.value}get _host(){try{return new URL(this.host),this.host}catch{return this.GISCUS_DEFAULT_HOST}}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("message",this.messageEventHandler)}_formatError(t){return`[giscus] An error occurred. Error message: "${t}".`}setupSession(){let t=location.href,e=new URL(t),i=localStorage.getItem(this.GISCUS_SESSION_KEY),s=e.searchParams.get("giscus")||"";if(this.__session="",s){localStorage.setItem(this.GISCUS_SESSION_KEY,JSON.stringify(s)),this.__session=s,e.searchParams.delete("giscus"),e.hash="",history.replaceState(void 0,document.title,e.toString());return}if(i)try{this.__session=JSON.parse(i)}catch(t){localStorage.removeItem(this.GISCUS_SESSION_KEY),console.warn(`${this._formatError(null==t?void 0:t.message)} Session has been cleared.`)}}signOut(){localStorage.removeItem(this.GISCUS_SESSION_KEY),this.__session="",this.update(new Map)}handleMessageEvent(t){if(t.origin!==this._host)return;let{data:e}=t;if(!("object"==typeof e&&e.giscus))return;if(this.iframeRef&&e.giscus.resizeHeight&&(this.iframeRef.style.height=`${e.giscus.resizeHeight}px`),e.giscus.signOut){console.log("[giscus] User has logged out. Session has been cleared."),this.signOut();return}if(!e.giscus.error)return;let i=e.giscus.error;if(i.includes("Bad credentials")||i.includes("Invalid state value")||i.includes("State has expired")){if(null!==localStorage.getItem(this.GISCUS_SESSION_KEY)){console.warn(`${this._formatError(i)} Session has been cleared.`),this.signOut();return}console.error(`${this._formatError(i)} No session is stored initially. ${this.ERROR_SUGGESTION}`)}if(i.includes("Discussion not found")){console.warn(`[giscus] ${i}. A new discussion will be created if a comment/reaction is submitted.`);return}console.error(`${this._formatError(i)} ${this.ERROR_SUGGESTION}`)}sendMessage(t){this.iframeRef&&this.iframeRef.contentWindow&&this.hasLoaded&&(console.log({host:this.host,_host:this._host}),this.iframeRef.contentWindow.postMessage({giscus:t},this._host))}updateConfig(){let t={setConfig:{repo:this.repo,repoId:this.repoId,category:this.category,categoryId:this.categoryId,term:this.getTerm(),number:+this.getNumber(),strict:"1"===this.strict,reactionsEnabled:"1"===this.reactionsEnabled,emitMetadata:"1"===this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,lang:this.lang}};this.sendMessage(t)}firstUpdated(){var t;null==(t=this.iframeRef)||t.addEventListener("load",()=>{var t;null==(t=this.iframeRef)||t.classList.remove("loading"),this.hasLoaded=!0,this.updateConfig()})}requestUpdate(t,e,i){if(!this.hasUpdated||"host"===t){super.requestUpdate(t,e,i);return}this.updateConfig()}getMetaContent(t,e=!1){let i=e?`meta[property='og:${t}'],`:"",s=document.querySelector(i+`meta[name='${t}']`);return s?s.content:""}_getCleanedUrl(){let t=new URL(location.href);return t.searchParams.delete("giscus"),t.hash="",t}getTerm(){switch(this.mapping){case"url":return`${this._getCleanedUrl()}`;case"title":return document.title;case"og:title":return this.getMetaContent("title",!0);case"specific":return this.term||"";case"number":return"";default:return location.pathname.length<2?"index":location.pathname.substring(1).replace(/\.\w+$/,"")}}getNumber(){return"number"===this.mapping&&this.term||""}getIframeSrc(){let t=this._getCleanedUrl().toString(),e=`${t}${this.id?"#"+this.id:""}`,i=this.getMetaContent("description",!0),s=this.getMetaContent("giscus:backlink")||t,r={origin:e,session:this.__session,repo:this.repo,repoId:this.repoId||"",category:this.category||"",categoryId:this.categoryId||"",term:this.getTerm(),number:this.getNumber(),strict:this.strict,reactionsEnabled:this.reactionsEnabled,emitMetadata:this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,description:i,backLink:s},n=this._host,o=this.lang?`/${this.lang}`:"",l=new URLSearchParams(r);return`${n}${o}/widget?${l}`}render(){return W`
      <iframe
        title="Comments"
        scrolling="no"
        class="loading"
        ${ty(this._iframeRef)}
        src=${this.getIframeSrc()}
        loading=${this.loading}
        allow="clipboard-write"
        part="iframe"
      ></iframe>
    `}},e.GiscusWidget.styles=h`
    :host,
    iframe {
      width: 100%;
      border: none;
      min-height: 150px;
      color-scheme: light dark;
    }

    iframe.loading {
      opacity: 0;
    }
  `,tT([th({reflect:!0})],e.GiscusWidget.prototype,"host",2),tT([th({reflect:!0})],e.GiscusWidget.prototype,"repo",2),tT([th({reflect:!0})],e.GiscusWidget.prototype,"repoId",2),tT([th({reflect:!0})],e.GiscusWidget.prototype,"category",2),tT([th({reflect:!0})],e.GiscusWidget.prototype,"categoryId",2),tT([th({reflect:!0})],e.GiscusWidget.prototype,"mapping",2),tT([th({reflect:!0})],e.GiscusWidget.prototype,"term",2),tT([th({reflect:!0})],e.GiscusWidget.prototype,"strict",2),tT([th({reflect:!0})],e.GiscusWidget.prototype,"reactionsEnabled",2),tT([th({reflect:!0})],e.GiscusWidget.prototype,"emitMetadata",2),tT([th({reflect:!0})],e.GiscusWidget.prototype,"inputPosition",2),tT([th({reflect:!0})],e.GiscusWidget.prototype,"theme",2),tT([th({reflect:!0})],e.GiscusWidget.prototype,"lang",2),tT([th({reflect:!0})],e.GiscusWidget.prototype,"loading",2),e.GiscusWidget=tT([(tE="giscus-widget",customElements.get(tE)?t=>t:t=>"function"==typeof t?(customElements.define(tE,t),t):((t,e)=>{let{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(tE,t))],e.GiscusWidget)},58071:function(t,e,i){let s=i(85893),r=i(67294);t.exports=function({id:t,host:e,repo:n,repoId:o,category:l,categoryId:h,mapping:a,term:d,strict:c,reactionsEnabled:u,emitMetadata:p,inputPosition:_,theme:g,lang:v,loading:$}){let[f,m]=r.useState(!1);return r.useEffect(()=>{f||(Promise.resolve().then(()=>i(46050)),m(!0))},[]),f?s.jsx("giscus-widget",{id:t,host:e,repo:n,repoid:o,category:l,categoryid:h,mapping:a,term:d,strict:c,reactionsenabled:u,emitmetadata:p,inputposition:_,theme:g,lang:v,loading:$}):null}},16973:function(t,e,i){i.r(e),i.d(e,{default:function(){return h}});var s=i(85893),r=i(74925),n=i(39323),o=i(58071);let l=()=>{let{isDarkMode:t}=(0,n.O)();return(0,s.jsx)(o,{repo:(0,r.J)("COMMENT_GISCUS_REPO"),repoId:(0,r.J)("COMMENT_GISCUS_REPO_ID"),categoryId:(0,r.J)("COMMENT_GISCUS_CATEGORY_ID"),mapping:(0,r.J)("COMMENT_GISCUS_MAPPING"),reactionsEnabled:(0,r.J)("COMMENT_GISCUS_REACTIONS_ENABLED"),emitMetadata:(0,r.J)("COMMENT_GISCUS_EMIT_METADATA"),theme:t?"dark":"light",inputPosition:(0,r.J)("COMMENT_GISCUS_INPUT_POSITION"),lang:(0,r.J)("COMMENT_GISCUS_LANG"),loading:(0,r.J)("COMMENT_GISCUS_LOADING"),crossorigin:(0,r.J)("COMMENT_GISCUS_CROSSORIGIN")})};var h=l}}]);