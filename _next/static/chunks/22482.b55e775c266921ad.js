"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[22482],{22482:function(e,t,a){a.r(t);var r=a(85893),n=a(11163),l=a(67294),c=a(54110);let s=!1;t.default=e=>{let{currentSearch:t,cRef:a,className:o}=e,[u,i]=(0,l.useState)(!1),h=(0,n.useRouter)(),d=(0,l.useRef)(),{locale:p}=(0,c.O)();(0,l.useImperativeHandle)(a,()=>({focus:()=>{var e;null==d||null===(e=d.current)||void 0===e||e.focus()}}));let handleSearch=()=>{let e=d.current.value;e&&""!==e?(i(!0),h.push({pathname:"/search/"+e}).then(e=>{i(!1)})):h.push({pathname:"/"}).then(e=>{})},cleanSearch=()=>{d.current.value=""},[f,m]=(0,l.useState)(!1),updateSearchKey=e=>{s||(d.current.value=e,e?m(!0):m(!1))};function lockSearchInput(){s=!0}return(0,r.jsxs)("div",{className:"flex w-full rounded-lg "+o,children:[(0,r.jsx)("input",{ref:d,type:"text",className:"outline-none w-full text-sm pl-5 rounded-lg transition focus:shadow-lg dark:text-gray-300 font-light leading-10 text-black bg-white dark:bg-gray-500",onKeyUp:e=>{13===e.keyCode?handleSearch(d.current.value):27===e.keyCode&&cleanSearch()},onCompositionStart:lockSearchInput,onCompositionUpdate:lockSearchInput,onCompositionEnd:function(){s=!1},placeholder:p.SEARCH.ARTICLES,onChange:e=>updateSearchKey(e.target.value),defaultValue:t||""}),(0,r.jsx)("div",{className:"-ml-8 cursor-pointer  float-right items-center justify-center py-2",onClick:handleSearch,children:(0,r.jsx)("i",{className:"hover:text-black transform duration-200 text-gray-500 dark:text-gray-200 cursor-pointer fas ".concat(u?"fa-spinner animate-spin":"fa-search")})}),f&&(0,r.jsx)("div",{className:"-ml-12 cursor-pointer float-right items-center justify-center py-2",children:(0,r.jsx)("i",{className:"hover:text-black transform duration-200 text-gray-400 dark:text-gray-300 cursor-pointer fas fa-times",onClick:cleanSearch})})]})}}}]);