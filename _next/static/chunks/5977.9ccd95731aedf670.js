"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5977,79225],{79225:function(e,t,n){n.r(t);var l=n(85893),a=n(67294),s=n(94246);let i=e=>{let{targetRef:t,showPercent:n=!0}=e,i=(null==t?void 0:t.current)||t,[o,r]=(0,a.useState)(0),c=()=>{let e=i||s.jU&&document.getElementById("article-wrapper");if(e){let t=e.clientHeight,n=window.pageYOffset,l=t-window.outerHeight,a=parseFloat((n/l*100).toFixed(0));a>100&&(a=100),a<0&&(a=0),r(a)}};return(0,a.useEffect)(()=>(document.addEventListener("scroll",c),()=>document.removeEventListener("scroll",c)),[]),(0,l.jsx)("div",{className:"h-4 w-full shadow-2xl bg-gray-400 font-sans",children:(0,l.jsx)("div",{className:"h-4 bg-gray-600 duration-200",style:{width:"".concat(o,"%")},children:n&&(0,l.jsxs)("div",{className:"text-right text-white text-xs",children:[o,"%"]})})})};t.default=i},5977:function(e,t,n){n.r(t);var l=n(85893),a=n(67294),s=n(93096),i=n.n(s),o=n(89163),r=n(79225);let c=e=>{let{toc:t}=e;(0,a.useEffect)(()=>(window.addEventListener("scroll",u),u(),()=>{window.removeEventListener("scroll",u)}),[]);let n=(0,a.useRef)(null),s=[],[c,d]=(0,a.useState)(null),u=(0,a.useCallback)(i()(()=>{var e;let t=document.getElementsByClassName("notion-h"),l=null,a=c;for(let e=0;e<t.length;++e){let n=t[e];if(!n||!(n instanceof Element))continue;a||(a=n.getAttribute("data-id"));let s=n.getBoundingClientRect(),i=l?s.top-l.bottom:0,o=Math.max(150,i/4);if(s.top-o<0){a=n.getAttribute("data-id"),l=s;continue}break}d(a);let i=s.indexOf(a)||0;null==n||null===(e=n.current)||void 0===e||e.scrollTo({top:28*i,behavior:"smooth"})},200));return!t||t.length<1?(0,l.jsx)(l.Fragment,{}):(0,l.jsxs)("div",{className:"px-3",children:[(0,l.jsx)("div",{className:"w-full pb-1",children:(0,l.jsx)(r.default,{})}),(0,l.jsx)("div",{className:"overflow-y-auto max-h-96 overscroll-none scroll-hidden",ref:n,children:(0,l.jsx)("nav",{className:"h-full font-sans text-black dark:text-gray-300",children:t.map(e=>{let t=(0,o.Gw)(e.id);return s.push(t),(0,l.jsx)("a",{href:"#".concat(t),className:"notion-table-of-contents-item duration-300 transform font-light\n              notion-table-of-contents-item-indent-level-".concat(e.indentLevel," "),children:(0,l.jsx)("span",{style:{display:"inline-block",marginLeft:16*e.indentLevel},className:"".concat(c===t&&" font-bold text-red-400 underline"),children:e.text})},t)})})})]})};t.default=c}}]);