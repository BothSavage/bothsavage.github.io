"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[71467],{82638:function(e,t,l){var i=l(85893),n=l(67294);let s=e=>{let{collapseRef:t}=e,l=n.useRef(null),s=e.type||"vertical";(0,n.useImperativeHandle)(t,()=>({updateCollapseHeight:e=>{let{height:t,increase:i}=e;l.current.style.height=l.current.scrollHeight,l.current.style.height="auto"}}));let r=e=>{let t=e.scrollHeight,l=e.scrollWidth;requestAnimationFrame(function(){switch(s){case"horizontal":e.style.width=l+"px",requestAnimationFrame(function(){e.style.width="0px"});break;case"vertical":e.style.height=t+"px",requestAnimationFrame(function(){e.style.height="0px"})}})},a=e=>{let t=e.scrollHeight,l=e.scrollWidth,i=0;switch(s){case"horizontal":e.style.width=l+"px",i=setTimeout(()=>{e.style.width="auto"},400);break;case"vertical":e.style.height=t+"px",i=setTimeout(()=>{e.style.height="auto"},400)}clearTimeout(i)};return(0,n.useEffect)(()=>{e.isOpen?a(l.current):r(l.current),(null==e?void 0:e.onHeightChange)&&e.onHeightChange({height:l.current.scrollHeight,increase:e.isOpen})},[e.isOpen]),(0,i.jsx)("div",{ref:l,style:"vertical"===s?{height:"0px",willChange:"height"}:{width:"0px",willChange:"width"},className:"".concat(e.className||""," overflow-hidden duration-200 "),children:e.children})};s.defaultProps={isOpen:!1},t.Z=s},71467:function(e,t,l){l.r(t),l.d(t,{MenuItemCollapse:function(){return o}});var i=l(85893),n=l(82638),s=l(41664),r=l.n(s),a=l(67294);let o=e=>{var t,l;let{link:s}=e,[o,c]=(0,a.useState)(!1),h=(null==s?void 0:null===(t=s.subMenus)||void 0===t?void 0:t.length)>0,[d,u]=(0,a.useState)(!1),x=()=>{c(!o)},g=()=>{u(!d)};return s&&s.show?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"w-full px-8 py-3 text-left border-b dark:bg-hexo-black-gray dark:border-black",onClick:x,children:[!h&&(0,i.jsx)(r(),{href:null==s?void 0:s.to,target:(null==s?void 0:null===(l=s.to)||void 0===l?void 0:l.indexOf("http"))===0?"_blank":"_self",className:"font-extralight items-center flex justify-between pl-2 pr-4 dark:text-gray-200 no-underline tracking-widest pb-1",children:(0,i.jsxs)("span",{className:"text-blue-400 hover:text-red-400 transition-all items-center duration-200",children:[(null==s?void 0:s.icon)&&(0,i.jsx)("span",{className:"mr-2",children:(0,i.jsx)("i",{className:s.icon})}),null==s?void 0:s.name]})}),h&&(0,i.jsxs)("div",{onClick:h?g:null,className:"font-extralight items-center flex justify-between pl-2 pr-4 cursor-pointer  dark:text-gray-200 no-underline tracking-widest pb-1",children:[(0,i.jsxs)("span",{className:"text-blue-400 hover:text-red-400 transition-all items-center duration-200",children:[(null==s?void 0:s.icon)&&(0,i.jsx)("span",{className:"mr-2",children:(0,i.jsx)("i",{className:s.icon})}),null==s?void 0:s.name]}),(0,i.jsx)("i",{className:"px-2 fa fa-plus transition-all duration-200 ".concat(d&&"rotate-45"," text-gray-400")})]})]}),h&&(0,i.jsx)(n.Z,{isOpen:d,onHeightChange:e.onHeightChange,children:s.subMenus.map((e,t)=>{var l;return(0,i.jsx)("div",{className:"font-extralight dark:bg-black text-left px-10 justify-start text-blue-400 bg-gray-50 hover:bg-gray-50 dark:hover:bg-gray-900 tracking-widest transition-all duration-200 border-b dark:border-gray-800 py-3 pr-6",children:(0,i.jsx)(r(),{href:e.to,target:(null==s?void 0:null===(l=s.to)||void 0===l?void 0:l.indexOf("http"))===0?"_blank":"_self",children:(0,i.jsxs)("span",{className:"ml-4 text-xs",children:[(null==e?void 0:e.icon)&&(0,i.jsx)("span",{className:"mr-2 w-4",children:(0,i.jsx)("i",{className:e.icon})}),e.title]})})},t)})})]}):null}}}]);