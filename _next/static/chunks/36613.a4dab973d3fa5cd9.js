"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[36613],{36613:function(e,t,n){n.r(t);var l=n(85893),a=n(67294),o=n(93096),s=n.n(o),i=n(89163),r=n(39323);let d=e=>{let{toc:t}=e,{locale:n}=(0,r.O)(),[o,d]=(0,a.useState)(null);(0,a.useEffect)(()=>{let e=s()(()=>{var e;let n=document.getElementsByClassName("notion-h"),l=null,a=o;for(let e=0;e<n.length;++e){let t=n[e];if(!t||!(t instanceof Element))continue;a||(a=t.getAttribute("data-id"));let o=t.getBoundingClientRect(),s=l?o.top-l.bottom:0,i=Math.max(150,s/4);if(o.top-i<0){a=t.getAttribute("data-id"),l=o;continue}break}d(a);let s=null==t?void 0:t.findIndex(e=>(0,i.Gw)(e.id)===a);null==c||null===(e=c.current)||void 0===e||e.scrollTo({top:28*s,behavior:"smooth"})},200);return e(),window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[t]);let c=(0,a.useRef)(null);return!t||(null==t?void 0:t.length)<1?(0,l.jsx)(l.Fragment,{}):(0,l.jsxs)("div",{id:"catalog",children:[(0,l.jsxs)("div",{className:"w-full dark:text-gray-300 mb-2",children:[(0,l.jsx)("i",{className:"mr-1 fas fa-stream"}),n.COMMON.TABLE_OF_CONTENTS]}),(0,l.jsx)("div",{className:"h-96",children:(0,l.jsx)("nav",{ref:c,className:"h-full overflow-y-auto overscroll-none scroll-hidden font-sans text-black",children:t.map(e=>{let t=(0,i.Gw)(e.id);return(0,l.jsx)("a",{href:"#".concat(t),className:"notion-table-of-contents-item duration-300 transform font-light dark:text-gray-300\n              notion-table-of-contents-item-indent-level-".concat(e.indentLevel," "),children:(0,l.jsx)("span",{style:{display:"inline-block",marginLeft:16*e.indentLevel},className:"".concat(o===t&&" font-bold text-red-400 underline"),children:e.text})},t)})})})]})};t.default=d}}]);