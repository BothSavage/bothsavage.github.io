"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[55553],{55553:function(e,n,t){t.r(n),t.d(n,{default:function(){return r}});var s=t(85893),a=t(39323),i=t(67294);function r(e){let{validPassword:n}=e,{locale:t}=(0,a.O)(),r=()=>{let e=document.getElementById("password");if(!n(null==e?void 0:e.value)){let e=document.getElementById("tips");e&&(e.innerHTML="",e.innerHTML="<div class='text-red-500 animate__shakeX animate__animated'>".concat(t.COMMON.PASSWORD_ERROR,"</div>"))}},l=(0,i.useRef)(null);return(0,i.useEffect)(()=>{l.current.focus()},[]),(0,s.jsx)("div",{id:"container",className:"w-full flex justify-center items-center h-96 font-sans",children:(0,s.jsxs)("div",{className:"text-center space-y-3",children:[(0,s.jsx)("div",{className:"font-bold",children:t.COMMON.ARTICLE_LOCK_TIPS}),(0,s.jsxs)("div",{className:"flex mx-4",children:[(0,s.jsx)("input",{id:"password",type:"password",onKeyDown:e=>{"Enter"===e.key&&r()},ref:l,className:"outline-none w-full text-sm pl-5 rounded-l transition focus:shadow-lg font-light leading-10 text-black dark:bg-gray-500 bg-gray-50"}),(0,s.jsx)("div",{onClick:r,className:"px-3 whitespace-nowrap cursor-pointer items-center justify-center py-2 rounded-r duration-300 bg-gray-300",children:(0,s.jsxs)("i",{className:"duration-200 cursor-pointer fas fa-key dark:text-black",children:["\xa0",t.COMMON.SUBMIT]})})]}),(0,s.jsx)("div",{id:"tips"})]})})}}}]);