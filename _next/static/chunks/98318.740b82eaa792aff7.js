"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98318,31437],{31437:function(e,t,l){l.r(t);var n=l(85893),a=l(67294),o=l(93096),s=l.n(o),r=l(58622),i=l(54110);t.default=e=>{let{toc:t}=e,{locale:l}=(0,i.O)();(0,a.useEffect)(()=>(window.addEventListener("scroll",h),h(),()=>{window.removeEventListener("scroll",h)}),[]);let o=(0,a.useRef)(null),c=[],[d,u]=(0,a.useState)(null),h=(0,a.useCallback)(s()(()=>{var e;let t=document.getElementsByClassName("notion-h"),l=null,n=d;for(let e=0;e<t.length;++e){let a=t[e];if(!a||!(a instanceof Element))continue;n||(n=a.getAttribute("data-id"));let o=a.getBoundingClientRect(),s=l?o.top-l.bottom:0,r=Math.max(150,s/4);if(o.top-r<0){n=a.getAttribute("data-id"),l=o;continue}break}u(n);let a=c.indexOf(n)||0;null==o||null===(e=o.current)||void 0===e||e.scrollTo({top:28*a,behavior:"smooth"})},200));return!t||t.length<1?(0,n.jsx)(n.Fragment,{}):(0,n.jsxs)("div",{className:"px-3 py-1 dark:text-white text-black",children:[(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsx)("i",{className:"mr-1 fas fa-stream"}),l.COMMON.TABLE_OF_CONTENTS]}),(0,n.jsx)("div",{className:"overflow-y-auto max-h-36 lg:max-h-96 overscroll-none scroll-hidden",ref:o,children:(0,n.jsx)("nav",{className:"h-full",children:t.map(e=>{let t=(0,r.Gw)(e.id);return c.push(t),(0,n.jsx)("a",{href:"#".concat(t),className:"notion-table-of-contents-item duration-300 transform font-light dark:text-gray-200\n            notion-table-of-contents-item-indent-level-".concat(e.indentLevel," "),children:(0,n.jsx)("span",{style:{display:"inline-block",marginLeft:16*e.indentLevel},className:"".concat(d===t&&" font-bold text-indigo-600"),children:e.text})},t)})})})]})}},98318:function(e,t,l){l.r(t),l.d(t,{default:function(){return FloatTocButton}});var n=l(85893),a=l(67294),o=l(31437);function FloatTocButton(e){let[t,l]=(0,a.useState)(!1),{post:s}=e,toggleToc=()=>{l(!t)};return s&&s.toc&&!(s.toc.length<1)?(0,n.jsxs)("div",{className:"fixed lg:hidden right-4 bottom-24",children:[(0,n.jsx)("div",{onClick:toggleToc,className:"w-11 h-11 select-none hover:scale-110 transform duration-200 text-black dark:text-gray-200 rounded-full bg-white drop-shadow-lg flex justify-center items-center dark:bg-hexo-black-gray py-2 px-2",children:(0,n.jsx)("button",{id:"toc-button",className:"fa-list-ol cursor-pointer fas"})}),(0,n.jsx)("div",{className:"fixed top-0 right-0 z-40 ",children:(0,n.jsx)("div",{className:"".concat(t?"shadow-card ":" -mr-72  opacity-0"," dark:bg-black w-60 duration-200 fixed right-4 bottom-12 rounded-xl py-2 bg-white dark:bg-gray-900'"),children:s&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"dark:text-gray-400 text-gray-600",children:(0,n.jsx)(o.default,{toc:s.toc})})})})}),(0,n.jsx)("div",{id:"right-drawer-background",className:(t?"block":"hidden")+" fixed top-0 left-0 z-30 w-full h-full",onClick:toggleToc})]}):(0,n.jsx)(n.Fragment,{})}}}]);