"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[13494,27328],{36457:function(e,t,s){async function l(e,t,s){let l=await fetch("/api/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,first_name:t,last_name:s})}),n=await l.json();return n}s.d(t,{x:function(){return l}}),s(23273)},13494:function(e,t,s){s.r(t),s.d(t,{default:function(){return u}});var l=s(85893),n=s(67294),a=s(36457),r=s(74925),i=s(27328),c=s(39323);function u(){let e=(0,n.useRef)(),[t,s]=(0,n.useState)(!1),{locale:u}=(0,c.O)();return(0,n.useEffect)(()=>{let t=e.current,l=e=>{e.preventDefault();let t=document.querySelector("#newsletter").value;(0,a.x)(t).then(e=>{console.log("Subscription succeeded:",e),s(!0)}).catch(e=>{console.error("Subscription failed:",e)})};return null==t||t.addEventListener("submit",l),()=>{null==t||t.removeEventListener("submit",l)}},[a.x]),(0,l.jsx)(l.Fragment,{children:(0,r.J)("FUKASAWA_MAILCHIMP_FORM",null,i.default)&&(0,l.jsxs)("div",{className:"sm:col-span-6 md:col-span-3 lg:col-span-3",children:[(0,l.jsx)("h6",{className:"text-gray-800 font-medium mb-2",children:u.MAILCHIMP.SUBSCRIBE}),(0,l.jsx)("p",{className:"text-sm text-gray-600 mb-4",children:u.MAILCHIMP.MSG}),(0,l.jsx)("form",{ref:e,children:(0,l.jsx)("div",{className:"flex flex-wrap mb-4",children:(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsx)("label",{className:"block text-sm sr-only",htmlFor:"newsletter",children:u.MAILCHIMP.EMAIL}),(0,l.jsxs)("div",{className:"relative flex items-center max-w-xs",children:[(0,l.jsx)("input",{disabled:t,id:"newsletter",type:"email",className:"form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm",placeholder:u.MAILCHIMP.EMAIL,required:!0}),(0,l.jsxs)("button",{disabled:t,type:"submit",className:"absolute inset-0 left-auto","aria-label":"Subscribe",children:[(0,l.jsx)("span",{className:"absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300","aria-hidden":"true"}),(0,l.jsx)("svg",{className:"w-3 h-3 fill-current text-blue-600 mx-3 shrink-0",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z",fillRule:"nonzero"})})]})]}),t&&(0,l.jsx)("p",{className:"mt-2 text-green-600 text-sm",children:"Thanks for subscribing!"})]})})})]})})}},27328:function(e,t,s){s.r(t),t.default={FUKASAWA_MAILCHIMP_FORM:!1,FUKASAWA_POST_LIST_COVER:!0,FUKASAWA_POST_LIST_COVER_FORCE:!1,FUKASAWA_POST_LIST_PREVIEW:!1,FUKASAWA_MENU_CATEGORY:!0,FUKASAWA_MENU_TAG:!0,FUKASAWA_MENU_ARCHIVE:!0,FUKASAWA_MENU_SEARCH:!1,FUKASAWA_SIDEBAR_COLLAPSE_BUTTON:!0,FUKASAWA_SIDEBAR_COLLAPSE_SATUS_DEFAULT:!1}}}]);