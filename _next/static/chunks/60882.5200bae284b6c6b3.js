"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[60882],{60882:function(e,t,l){l.r(t),l.d(t,{MenuItemDrop:function(){return s}});var n=l(85893),r=l(41664),i=l.n(r),o=l(67294),a=l(11163);let s=e=>{var t,l,r;let{link:s}=e,[d,u]=(0,o.useState)(!1),c=(0,a.useRouter)();if(!s||!s.show)return null;let h=(null==s?void 0:null===(t=s.subMenus)||void 0===t?void 0:t.length)>0,x=c.pathname===s.to||c.asPath===s.to;return(0,n.jsxs)("li",{className:"cursor-pointer list-none items-center flex mx-2",onMouseOver:()=>u(!0),onMouseOut:()=>u(!1),children:[h&&(0,n.jsx)("div",{className:"px-2 h-full whitespace-nowrap duration-300 text-sm justify-between dark:text-gray-300 cursor-pointer flex flex-nowrap items-center "+(x?"bg-green-600 text-white hover:text-white":"hover:text-green-600"),children:(0,n.jsxs)("div",{children:[(null==s?void 0:s.icon)&&(0,n.jsx)("i",{className:null==s?void 0:s.icon})," ",null==s?void 0:s.name,h&&(0,n.jsx)("i",{className:"px-2 fas fa-chevron-down duration-500 transition-all ".concat(d?" rotate-180":"")})]})}),!h&&(0,n.jsx)("div",{className:"px-2 h-full whitespace-nowrap duration-300 text-sm justify-between dark:text-gray-300 cursor-pointer flex flex-nowrap items-center "+(x?"bg-green-600 text-white hover:text-white":"hover:text-green-600"),children:(0,n.jsxs)(i(),{href:null==s?void 0:s.to,target:(null==s?void 0:null===(l=s.to)||void 0===l?void 0:l.indexOf("http"))===0?"_blank":"_self",children:[(null==s?void 0:s.icon)&&(0,n.jsx)("i",{className:null==s?void 0:s.icon})," ",null==s?void 0:s.name]})}),h&&(0,n.jsx)("ul",{className:"".concat(d?"visible opacity-100 top-12 ":"invisible opacity-0 top-10 "," border-gray-100  bg-white  dark:bg-black dark:border-gray-800 transition-all duration-300 z-20 absolute block drop-shadow-lg "),children:null==s?void 0:null===(r=s.subMenus)||void 0===r?void 0:r.map((e,t)=>{var l;return(0,n.jsx)("li",{className:"not:last-child:border-b-0 border-b text-gray-700 dark:text-gray-200  hover:bg-gray-50 dark:hover:bg-gray-900 tracking-widest transition-all duration-200  dark:border-gray-800 py-3 pr-6 pl-3",children:(0,n.jsx)(i(),{href:e.to,target:(null==s?void 0:null===(l=s.to)||void 0===l?void 0:l.indexOf("http"))===0?"_blank":"_self",children:(0,n.jsxs)("span",{className:"text-xs font-extralight",children:[(null==s?void 0:s.icon)&&(0,n.jsx)("i",{className:null==e?void 0:e.icon,children:" \xa0 "}),e.title]})})},t)})})]})}}}]);