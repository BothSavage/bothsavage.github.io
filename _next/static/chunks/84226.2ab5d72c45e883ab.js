"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[84226,55646,97200],{55646:function(e,t,n){n.r(t);var l=n(85893),a=n(5152),i=n.n(a);let s=i()(()=>Promise.resolve().then(n.bind(n,71272)),{loadableGenerated:{webpack:()=>[71272]}});t.default=e=>{let{post:t,className:n}=e;return t?(0,l.jsxs)(l.Fragment,{children:[t&&(0,l.jsx)("div",{id:"announcement-content",className:"px-3",children:(0,l.jsx)(s,{post:t})})," "]}):(0,l.jsx)(l.Fragment,{})}},97200:function(e,t,n){n.r(t);var l=n(85893),a=n(67294),i=n(93096),s=n.n(i),o=n(58622),r=n(54110);t.default=e=>{var t,n;let{post:i}=e,{locale:d}=(0,r.O)(),c=(0,a.useRef)(null),[u,f]=(0,a.useState)(null);return((0,a.useEffect)(()=>{let e=s()(()=>{var e,t;let n=document.getElementsByClassName("notion-h"),l=null,a=u;for(let e=0;e<n.length;++e){let t=n[e];if(!t||!(t instanceof Element))continue;a||(a=t.getAttribute("data-id"));let i=t.getBoundingClientRect(),s=l?i.top-l.bottom:0,o=Math.max(150,s/4);if(i.top-o<0){a=t.getAttribute("data-id"),l=i;continue}break}f(a);let s=null==i?void 0:null===(e=i.toc)||void 0===e?void 0:e.findIndex(e=>(0,o.Gw)(e.id)===a);null==c||null===(t=c.current)||void 0===t||t.scrollTo({top:28*s,behavior:"smooth"})},200);return window.addEventListener("scroll",e),e(),()=>{window.removeEventListener("scroll",e)}},[i]),i&&(null==i?void 0:i.toc)&&!((null==i?void 0:null===(t=i.toc)||void 0===t?void 0:t.length)<1))?(0,l.jsxs)("div",{className:"px-3 ",children:[(0,l.jsxs)("div",{className:"dark:text-white mb-2",children:[(0,l.jsx)("i",{className:"mr-1 fas fa-stream"}),d.COMMON.TABLE_OF_CONTENTS]}),(0,l.jsx)("div",{className:"overflow-y-auto overscroll-none max-h-36 lg:max-h-96 scroll-hidden",ref:c,children:(0,l.jsx)("nav",{className:"h-full  text-black",children:null==i?void 0:null===(n=i.toc)||void 0===n?void 0:n.map(e=>{let t=(0,o.Gw)(e.id);return(0,l.jsx)("a",{href:"#".concat(t),className:"notion-table-of-contents-item duration-300 transform dark:text-gray-200\n            notion-table-of-contents-item-indent-level-".concat(e.indentLevel," "),children:(0,l.jsx)("span",{style:{display:"inline-block",marginLeft:16*e.indentLevel},className:"".concat(u===t&&" font-bold text-red-600 underline overflow-ellipsis truncate"),children:e.text})},t)})})})]}):(0,l.jsx)(l.Fragment,{})}},84226:function(e,t,n){n.r(t),n.d(t,{default:function(){return SideBar}});var l=n(85893),a=n(10912),i=n(77621),s=n(55646),o=n(97200);function SideBar(e){let{notice:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("aside",{children:(0,l.jsx)(o.default,{...e})}),(0,l.jsx)("aside",{children:(0,l.jsx)(i.default,{})}),(0,l.jsx)("aside",{children:(0,l.jsx)(s.default,{post:t})}),(0,l.jsx)("aside",{children:(0,l.jsx)(a.AdSlot,{})})]})}}}]);