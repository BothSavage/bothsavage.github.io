"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[33597],{33597:function(e,t,i){i.r(t);var l=i(85893),s=i(67294);let h=e=>{let{collapseRef:t}=e,i=(0,s.useRef)(null),h=e.type||"vertical";(0,s.useImperativeHandle)(t,()=>({updateCollapseHeight:e=>{let{height:t,increase:l}=e;i.current.style.height=i.current.scrollHeight,i.current.style.height="auto"}}));let r=e=>{let t=e.scrollHeight,i=e.scrollWidth;requestAnimationFrame(function(){switch(h){case"horizontal":e.style.width=i+"px",requestAnimationFrame(function(){e.style.width="0px"});break;case"vertical":e.style.height=t+"px",requestAnimationFrame(function(){e.style.height="0px"})}})},n=e=>{let t=e.scrollHeight+8,i=e.scrollWidth,l=0;switch(h){case"horizontal":e.style.width=i+"px",l=setTimeout(()=>{e.style.width="auto"},400);break;case"vertical":e.style.height=t+"px",l=setTimeout(()=>{e.style.height="auto"},400)}clearTimeout(l)};return(0,s.useEffect)(()=>{e.isOpen?n(i.current):r(i.current),(null==e?void 0:e.onHeightChange)&&e.onHeightChange({height:i.current.scrollHeight,increase:e.isOpen})},[e.isOpen]),(0,l.jsx)("div",{ref:i,style:"vertical"===h?{height:"0px",willChange:"height"}:{width:"0px",willChange:"width"},className:"".concat(e.className||""," overflow-hidden duration-200 "),children:e.children})};h.defaultProps={isOpen:!1},t.default=h}}]);