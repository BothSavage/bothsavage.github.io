"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[84460,14410],{84460:function(e,a,t){t.r(a);var n=t(85893),r=t(11163),l=t(67294),s=t(14410);a.default=e=>{let{cRef:a,slot:t}=e,c=(0,l.useRef)(),o=(0,l.useRef)();(0,l.useImperativeHandle)(a,()=>({show:()=>{var e,a,t;null==c||null===(a=c.current)||void 0===a||null===(e=a.classList)||void 0===e||e.remove("hidden"),null==o||null===(t=o.current)||void 0===t||t.focus()}}));let hidden=()=>{var e,a;null==c||null===(a=c.current)||void 0===a||null===(e=a.classList)||void 0===e||e.add("hidden")};return r.Router.events.on("routeChangeComplete",function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];hidden()}),(0,n.jsxs)("div",{id:"search-drawer-wrapper",ref:c,className:"hidden",children:[(0,n.jsx)("div",{className:"flex-col fixed px-5 w-full left-0 top-14 z-40 justify-center",children:(0,n.jsxs)("div",{className:"md:max-w-3xl w-full mx-auto animate__animated animate__faster animate__fadeIn",children:[(0,n.jsx)(s.default,{cRef:o}),t]})}),(0,n.jsx)("div",{id:"search-drawer-background",onClick:hidden,className:"animate__animated animate__faster animate__fadeIn fixed bg-day dark:bg-night top-0 left-0 z-30 w-full h-full"})]})}},14410:function(e,a,t){t.r(a);var n=t(85893),r=t(11163),l=t(54110),s=t(67294);let c=!1;a.default=e=>{let{currentTag:a,keyword:t,cRef:o}=e,{locale:i}=(0,l.O)(),[u,d]=(0,s.useState)(!1),h=(0,r.useRouter)(),f=(0,s.useRef)();(0,s.useImperativeHandle)(o,()=>({focus:()=>{var e;null==f||null===(e=f.current)||void 0===e||e.focus()}}));let handleSearch=()=>{let e=f.current.value;e&&""!==e?(d(!0),h.push({pathname:"/search/"+e}).then(e=>{d(!1)})):h.push({pathname:"/"}).then(e=>{})},cleanSearch=()=>{f.current.value="",p(!1)};function lockSearchInput(){c=!0}let[m,p]=(0,s.useState)(!1),updateSearchKey=e=>{c||(f.current.value=e,e?p(!0):p(!1))};return(0,n.jsxs)("div",{"data-aos":"fade-down","data-aos-duration":"500","data-aos-delay":"200","data-aos-once":"true","data-aos-anchor-placement":"top-bottom",className:"flex w-full bg-gray-100",children:[(0,n.jsx)("input",{ref:f,type:"text",placeholder:a?"".concat(i.SEARCH.TAGS," #").concat(a):"".concat(i.SEARCH.ARTICLES),className:"outline-none w-full text-sm pl-4 transition focus:shadow-lg font-light leading-10 text-black bg-gray-100 dark:bg-gray-800 dark:text-white",onKeyUp:e=>{13===e.keyCode?handleSearch(f.current.value):27===e.keyCode&&cleanSearch()},onCompositionStart:lockSearchInput,onCompositionUpdate:lockSearchInput,onCompositionEnd:function(){c=!1},onChange:e=>updateSearchKey(e.target.value),defaultValue:t||""}),(0,n.jsx)("div",{className:"-ml-8 cursor-pointer float-right items-center justify-center py-2",onClick:handleSearch,children:(0,n.jsx)("i",{className:"hover:text-black transform duration-200  text-gray-500 cursor-pointer fas ".concat(u?"fa-spinner animate-spin":"fa-search")})}),m&&(0,n.jsx)("div",{className:"-ml-12 cursor-pointer dark:bg-gray-600 dark:hover:bg-gray-800 float-right items-center justify-center py-2",children:(0,n.jsx)("i",{className:"hover:text-black transform duration-200 text-gray-400 cursor-pointer fas fa-times",onClick:cleanSearch})})]})}}}]);