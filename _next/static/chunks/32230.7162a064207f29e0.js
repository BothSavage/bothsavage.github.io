"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32230],{32230:function(e,t,a){a.r(t);var r=a(85893),n=a(11163),s=a(67294),l=a(39323);let o=!1,u=e=>{let{currentSearch:t,cRef:a,className:u}=e,[i,c]=(0,s.useState)(!1),d=(0,n.useRouter)(),f=(0,s.useRef)(),{locale:p}=(0,l.O)();(0,s.useImperativeHandle)(a,()=>({focus:()=>{var e;null==f||null===(e=f.current)||void 0===e||e.focus()}}));let h=()=>{let e=f.current.value;e&&""!==e?(c(!0),d.push({pathname:"/search/"+e}).then(e=>{c(!1)})):d.push({pathname:"/"}).then(e=>{})},m=e=>{13===e.keyCode?h(f.current.value):27===e.keyCode&&g()},g=()=>{f.current.value=""},[x,k]=(0,s.useState)(!1),y=e=>{o||(f.current.value=e,e?k(!0):k(!1))};function v(){o=!0}return(0,r.jsxs)("div",{className:"flex w-full rounded-lg "+u,children:[(0,r.jsx)("input",{ref:f,type:"text",className:"outline-none w-full text-sm pl-5 rounded-lg transition focus:shadow-lg dark:text-gray-300 font-light leading-10 text-black bg-gray-100 dark:bg-gray-500",onKeyUp:m,onCompositionStart:v,onCompositionUpdate:v,onCompositionEnd:function(){o=!1},placeholder:p.SEARCH.ARTICLES,onChange:e=>y(e.target.value),defaultValue:t||""}),(0,r.jsx)("div",{className:"-ml-8 cursor-pointer  float-right items-center justify-center py-2",onClick:h,children:(0,r.jsx)("i",{className:"hover:text-black transform duration-200 text-gray-500 dark:text-gray-200 cursor-pointer fas ".concat(i?"fa-spinner animate-spin":"fa-search")})}),x&&(0,r.jsx)("div",{className:"-ml-12 cursor-pointer float-right items-center justify-center py-2",children:(0,r.jsx)("i",{className:"hover:text-black transform duration-200 text-gray-400 dark:text-gray-300 cursor-pointer fas fa-times",onClick:g})})]})};t.default=u}}]);