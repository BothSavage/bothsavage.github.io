"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[37832],{37832:function(e,t,n){n.r(t),n.d(t,{ArticleLock:function(){return a}});var s=n(85893),r=n(39323),i=n(67294);let a=e=>{let{validPassword:t}=e,{locale:n}=(0,r.O)(),a=()=>{let e=document.getElementById("password");if(!t(null==e?void 0:e.value)){let e=document.getElementById("tips");e&&(e.innerHTML="",e.innerHTML="<div class='text-red-500 animate__shakeX animate__animated'>".concat(n.COMMON.PASSWORD_ERROR,"</div>"))}},l=(0,i.useRef)(null);return(0,i.useEffect)(()=>{l.current.focus()},[]),(0,s.jsx)("div",{id:"container",className:"w-full flex justify-center items-center h-96 ",children:(0,s.jsxs)("div",{className:"text-center space-y-3",children:[(0,s.jsx)("div",{className:"font-bold",children:n.COMMON.ARTICLE_LOCK_TIPS}),(0,s.jsxs)("div",{className:"flex mx-4",children:[(0,s.jsx)("input",{id:"password",type:"password",onKeyDown:e=>{"Enter"===e.key&&a()},ref:l,className:"outline-none w-full text-sm pl-5 rounded-l transition focus:shadow-lg dark:text-gray-300 font-light leading-10 text-black bg-gray-100 dark:bg-gray-500"}),(0,s.jsx)("div",{onClick:a,className:"px-3 whitespace-nowrap cursor-pointer items-center justify-center py-2 bg-green-500 hover:bg-green-400 text-white rounded-r duration-300",children:(0,s.jsxs)("i",{className:"duration-200 cursor-pointer fas fa-key",children:["\xa0",n.COMMON.SUBMIT]})})]}),(0,s.jsx)("div",{id:"tips"})]})})}}}]);