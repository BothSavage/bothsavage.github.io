"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68160,80340,44758],{80340:function(e,t,l){l.r(t);var n=l(85893),i=l(67294),a=l(93096),s=l.n(a),r=l(58622),d=l(44758),o=l(54110);t.default=e=>{let{toc:t}=e,{locale:l}=(0,o.O)();(0,i.useEffect)(()=>(window.addEventListener("scroll",m),m(),()=>{window.removeEventListener("scroll",m)}),[]);let a=(0,i.useRef)(null),c=[],[u,h]=(0,i.useState)(null),m=(0,i.useCallback)(s()(()=>{var e;let t=document.getElementsByClassName("notion-h"),l=null,n=u;for(let e=0;e<t.length;++e){let i=t[e];if(!i||!(i instanceof Element))continue;n||(n=i.getAttribute("data-id"));let a=i.getBoundingClientRect(),s=l?a.top-l.bottom:0,r=Math.max(150,s/4);if(a.top-r<0){n=i.getAttribute("data-id"),l=a;continue}break}h(n);let i=c.indexOf(n)||0;null==a||null===(e=a.current)||void 0===e||e.scrollTo({top:28*i,behavior:"smooth"})},200));return!t||t.length<1?(0,n.jsx)(n.Fragment,{}):(0,n.jsxs)("div",{className:"px-3 py-1",children:[(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsx)("i",{className:"mr-1 fas fa-stream"}),l.COMMON.TABLE_OF_CONTENTS]}),(0,n.jsx)("div",{className:"w-full py-3",children:(0,n.jsx)(d.default,{})}),(0,n.jsx)("div",{className:"overflow-y-auto max-h-36 lg:max-h-96 overscroll-none scroll-hidden",ref:a,children:(0,n.jsx)("nav",{className:"h-full  text-black",children:t.map(e=>{let t=(0,r.Gw)(e.id);return c.push(t),(0,n.jsx)("a",{href:"#".concat(t),className:"notion-table-of-contents-item duration-300 transform font-light dark:text-gray-200\n            notion-table-of-contents-item-indent-level-".concat(e.indentLevel," "),children:(0,n.jsx)("span",{style:{display:"inline-block",marginLeft:16*e.indentLevel},className:"".concat(u===t&&" font-bold text-indigo-600"),children:e.text})},t)})})})]})}},44758:function(e,t,l){l.r(t);var n=l(85893),i=l(67294),a=l(22006);t.default=e=>{let{targetRef:t,showPercent:l=!0}=e,s=(null==t?void 0:t.current)||t,[r,d]=(0,i.useState)(0),scrollListener=()=>{let e=s||a.jU&&document.getElementById("article-wrapper");if(e){let t=e.clientHeight,l=window.pageYOffset,n=t-window.outerHeight,i=parseFloat((l/n*100).toFixed(0));i>100&&(i=100),i<0&&(i=0),d(i)}};return(0,i.useEffect)(()=>(document.addEventListener("scroll",scrollListener),()=>document.removeEventListener("scroll",scrollListener)),[]),(0,n.jsx)("div",{className:"h-4 w-full shadow-2xl bg-gray-700 rounded-sm",children:(0,n.jsx)("div",{className:"h-4 bg-indigo-600 duration-200 rounded-sm",style:{width:"".concat(r,"%")},children:l&&(0,n.jsxs)("div",{className:"text-right text-white text-xs",children:[r,"%"]})})})}},68160:function(e,t,l){l.r(t);var n=l(85893),i=l(80340),a=l(67294);t.default=e=>{let{post:t,cRef:l}=e;(0,a.useImperativeHandle)(l,()=>({handleSwitchVisible:()=>switchVisible()}));let[s,r]=(0,a.useState)(!1),switchVisible=()=>{r(!s)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"fixed top-0 right-0 z-40 ",children:(0,n.jsx)("div",{className:(s?"animate__slideInRight ":" -mr-72 animate__slideOutRight")+" shadow-card animate__animated animate__faster w-60 duration-200 fixed right-12 bottom-12 rounded py-2 bg-white dark:bg-gray-900",children:t&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"dark:text-gray-400 text-gray-600",children:(0,n.jsx)(i.default,{toc:t.toc})})})})}),(0,n.jsx)("div",{id:"right-drawer-background",className:(s?"block":"hidden")+" fixed top-0 left-0 z-30 w-full h-full",onClick:switchVisible})]})}}}]);