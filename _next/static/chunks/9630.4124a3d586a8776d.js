"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9630],{9630:function(e,s,n){n.r(s),n.d(s,{default:function(){return l}});var t=n(85893),i=n(74925),r=n(39323),a=n(94246),o=n(67294);function l(){let{theme:e,switchTheme:s}=(0,r.O)(),n=JSON.parse((0,i.J)("WIDGET_PET")),l=(0,i.J)("WIDGET_PET_LINK");return((0,o.useEffect)(()=>{n&&Promise.all([(0,a.TY)("https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/live2d.min.js","js")]).then(e=>{if(void 0!==(null==window?void 0:window.loadlive2d))try{loadlive2d("live2d",l)}catch(e){console.error("读取PET模型",e)}})},[e]),n)?(0,t.jsx)("canvas",{id:"live2d",width:"280",height:"250",onClick:function(){JSON.parse((0,i.J)("WIDGET_PET_SWITCH_THEME"))&&s()},className:"cursor-grab",onMouseDown:e=>e.target.classList.add("cursor-grabbing"),onMouseUp:e=>e.target.classList.remove("cursor-grabbing")}):(0,t.jsx)(t.Fragment,{})}}}]);