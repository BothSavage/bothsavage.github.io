"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41850],{41850:function(e,s,t){t.r(s),t.d(s,{ArticleLock:function(){return ArticleLock}});var n=t(85893),a=t(54110),i=t(67294);let ArticleLock=e=>{let{validPassword:s}=e,{locale:t}=(0,a.O)(),submitPassword=()=>{let e=document.getElementById("password");if(!s(null==e?void 0:e.value)){let e=document.getElementById("tips");e&&(e.innerHTML="",e.innerHTML="<div class='text-red-500 animate__shakeX animate__animated'>".concat(t.COMMON.PASSWORD_ERROR,"</div>"))}},r=(0,i.useRef)(null);return(0,i.useEffect)(()=>{r.current.focus()},[]),(0,n.jsx)("div",{id:"container",className:"w-full flex justify-center items-center h-96 font-sans",children:(0,n.jsxs)("div",{className:"text-center space-y-3",children:[(0,n.jsx)("div",{className:"font-bold",children:t.COMMON.ARTICLE_LOCK_TIPS}),(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("input",{id:"password",type:"password",onKeyDown:e=>{"Enter"===e.key&&submitPassword()},ref:r,className:"outline-none w-full text-sm pl-5 rounded-l transition focus:shadow-lg font-light leading-10 text-black dark:bg-gray-500 bg-gray-50"}),(0,n.jsx)("div",{onClick:submitPassword,className:"px-3 whitespace-nowrap cursor-pointer items-center justify-center py-2 rounded-r duration-300 bg-gray-300",children:(0,n.jsxs)("i",{className:"duration-200 cursor-pointer fas fa-key dark:text-black",children:["\xa0",t.COMMON.SUBMIT]})})]}),(0,n.jsx)("div",{id:"tips"})]})})}}}]);