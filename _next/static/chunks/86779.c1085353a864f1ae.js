"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[86779],{86779:function(e,r,t){t.r(r);var o=t(85893),n=t(41664),a=t.n(n),i=t(11163);function getPageElement(e,r,t){return(0,o.jsx)(a(),{href:1===e?"".concat(t,"/"):"".concat(t,"/page/").concat(e),passHref:!0,className:(e+""==r+""?"font-bold bg-indigo-400 dark:bg-indigo-500 text-white ":"border-b duration-500 border-indigo-300 hover:border-indigo-400 ")+" border-white dark:border-indigo-700 dark:hover:border-indigo-400 cursor-pointer pb-0.5 w-6 text-center font-light hover:font-bold",children:e},e)}r.default=e=>{let{page:r,totalPage:t}=e,n=(0,i.useRouter)(),d=+r,s=r<t,c=n.asPath.split("?")[0].replace(/\/page\/[1-9]\d*/,"").replace(/\/$/,""),l=function(e,r,t,n){let a=[];if(n<=7)for(let t=1;t<=n;t++)a.push(getPageElement(t,r,e));else{a.push(getPageElement(1,r,e));let i=t-2;i<=1&&(i=2),i+5>n&&(i=n-5),i>2&&a.push((0,o.jsx)("div",{children:"... "},-1));for(let t=0;t<5;t++)i+t<n&&a.push(getPageElement(i+t,r,e));i+5<n&&a.push((0,o.jsx)("div",{children:"... "},-2)),a.push(getPageElement(n,r,e))}return a}(c,r,d,t);return(0,o.jsxs)("div",{className:"mt-10 mb-5  flex justify-center items-end font-medium text-black duration-500 dark:text-gray-300 py-3 space-x-2",children:[(0,o.jsx)(a(),{href:{pathname:2===d?"".concat(c,"/"):"".concat(c,"/page/").concat(d-1),query:n.query.s?{s:n.query.s}:{}},rel:"prev",className:"".concat(1===d?"invisible":"block"," pb-0.5 border-white dark:border-indigo-700 hover:border-indigo-400 dark:hover:border-indigo-400 w-6 text-center cursor-pointer duration-200  hover:font-bold"),children:(0,o.jsx)("i",{className:"fas fa-angle-left"})}),l,(0,o.jsx)(a(),{href:{pathname:"".concat(c,"/page/").concat(d+1),query:n.query.s?{s:n.query.s}:{}},rel:"next",className:"".concat(+s?"block":"invisible"," pb-0.5 border-b border-indigo-300 dark:border-indigo-700 hover:border-indigo-400 dark:hover:border-indigo-400 w-6 text-center cursor-pointer duration-500  hover:font-bold"),children:(0,o.jsx)("i",{className:"fas fa-angle-right"})})]})}}}]);