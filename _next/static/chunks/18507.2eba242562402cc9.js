"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[18507],{82638:function(e,t,i){var l=i(85893),n=i(67294);let s=e=>{let{collapseRef:t}=e,i=n.useRef(null),s=e.type||"vertical";(0,n.useImperativeHandle)(t,()=>({updateCollapseHeight:e=>{let{height:t,increase:l}=e;i.current.style.height=i.current.scrollHeight,i.current.style.height="auto"}}));let r=e=>{let t=e.scrollHeight,i=e.scrollWidth;requestAnimationFrame(function(){switch(s){case"horizontal":e.style.width=i+"px",requestAnimationFrame(function(){e.style.width="0px"});break;case"vertical":e.style.height=t+"px",requestAnimationFrame(function(){e.style.height="0px"})}})},a=e=>{let t=e.scrollHeight,i=e.scrollWidth,l=0;switch(s){case"horizontal":e.style.width=i+"px",l=setTimeout(()=>{e.style.width="auto"},400);break;case"vertical":e.style.height=t+"px",l=setTimeout(()=>{e.style.height="auto"},400)}clearTimeout(l)};return(0,n.useEffect)(()=>{e.isOpen?a(i.current):r(i.current),(null==e?void 0:e.onHeightChange)&&e.onHeightChange({height:i.current.scrollHeight,increase:e.isOpen})},[e.isOpen]),(0,l.jsx)("div",{ref:i,style:"vertical"===s?{height:"0px",willChange:"height"}:{width:"0px",willChange:"width"},className:"".concat(e.className||""," overflow-hidden duration-200 "),children:e.children})};s.defaultProps={isOpen:!1},t.Z=s},18507:function(e,t,i){i.r(t),i.d(t,{MenuItemCollapse:function(){return c}});var l=i(85893),n=i(82638),s=i(41664),r=i.n(s),a=i(11163),o=i(67294);let c=e=>{var t,i;let{link:s}=e,[c,h]=(0,o.useState)(!1),u=(null==s?void 0:null===(t=s.subMenus)||void 0===t?void 0:t.length)>0,d=(0,a.useRouter)(),[x,g]=(0,o.useState)(!1),p=()=>{h(!c)},f=()=>{g(!x)};if(!s||!s.show)return null;let m=d.pathname===s.to||d.asPath===s.to;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{onClick:p,className:"py-2 px-5 duration-300 text-base justify-between hover:bg-indigo-700 hover:text-white hover:shadow-lg cursor-pointer font-light flex flex-nowrap items-center "+(m?"bg-indigo-500 text-white ":" text-black dark:text-white "),children:[!u&&(0,l.jsxs)(r(),{href:null==s?void 0:s.to,target:(null==s?void 0:null===(i=s.to)||void 0===i?void 0:i.indexOf("http"))===0?"_blank":"_self",children:[(0,l.jsxs)("div",{className:"my-auto items-center justify-between flex ",children:[s.icon&&(0,l.jsx)("i",{className:"".concat(s.icon," w-4 mr-6 text-center")}),(0,l.jsx)("div",{children:s.name})]}),s.slot]}),u&&(0,l.jsxs)("div",{onClick:u?f:null,className:"my-auto items-center w-full justify-between flex ",children:[(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)("i",{className:"".concat(s.icon," w-4 mr-6 text-center")}),null==s?void 0:s.name]}),(0,l.jsx)("i",{className:"px-2 fas fa-chevron-left transition-all duration-200 ".concat(x?"-rotate-90":"")})]})]}),u&&(0,l.jsx)(n.Z,{isOpen:x,children:s.subMenus.map((e,t)=>{var i;return(0,l.jsx)("div",{className:"cursor-pointer whitespace-nowrap dark:text-gray-200  w-full font-extralight dark:bg-black text-left px-5 justify-start bg-gray-100  hover:bg-indigo-700 hover:text-white dark:hover:bg-gray-900 tracking-widest transition-all duration-200 border-b dark:border-gray-800 py-3 pr-6",children:(0,l.jsx)(r(),{href:e.to,target:(null==s?void 0:null===(i=s.to)||void 0===i?void 0:i.indexOf("http"))===0?"_blank":"_self",children:(0,l.jsxs)("span",{className:"text-sm",children:[(0,l.jsx)("i",{className:"".concat(e.icon," w-4 mr-3 text-center")}),e.title]})})},t)})})]})}}}]);