"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[31437],{31437:function(e,t,n){n.r(t);var l=n(85893),a=n(67294),s=n(93096),o=n.n(s),i=n(58622),r=n(54110);t.default=e=>{let{toc:t}=e,{locale:n}=(0,r.O)();(0,a.useEffect)(()=>(window.addEventListener("scroll",f),f(),()=>{window.removeEventListener("scroll",f)}),[]);let s=(0,a.useRef)(null),c=[],[d,u]=(0,a.useState)(null),f=(0,a.useCallback)(o()(()=>{var e;let t=document.getElementsByClassName("notion-h"),n=null,l=d;for(let e=0;e<t.length;++e){let a=t[e];if(!a||!(a instanceof Element))continue;l||(l=a.getAttribute("data-id"));let s=a.getBoundingClientRect(),o=n?s.top-n.bottom:0,i=Math.max(150,o/4);if(s.top-i<0){l=a.getAttribute("data-id"),n=s;continue}break}u(l);let a=c.indexOf(l)||0;null==s||null===(e=s.current)||void 0===e||e.scrollTo({top:28*a,behavior:"smooth"})},200));return!t||t.length<1?(0,l.jsx)(l.Fragment,{}):(0,l.jsxs)("div",{className:"px-3 py-1 dark:text-white text-black",children:[(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsx)("i",{className:"mr-1 fas fa-stream"}),n.COMMON.TABLE_OF_CONTENTS]}),(0,l.jsx)("div",{className:"overflow-y-auto max-h-36 lg:max-h-96 overscroll-none scroll-hidden",ref:s,children:(0,l.jsx)("nav",{className:"h-full",children:t.map(e=>{let t=(0,i.Gw)(e.id);return c.push(t),(0,l.jsx)("a",{href:"#".concat(t),className:"notion-table-of-contents-item duration-300 transform font-light dark:text-gray-200\n            notion-table-of-contents-item-indent-level-".concat(e.indentLevel," "),children:(0,l.jsx)("span",{style:{display:"inline-block",marginLeft:16*e.indentLevel},className:"".concat(d===t&&" font-bold text-indigo-600"),children:e.text})},t)})})})]})}}}]);