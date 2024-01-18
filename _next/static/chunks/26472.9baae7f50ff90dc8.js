"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26472,12204],{12204:function(e,r,a){a.r(r);var t=a(85893),l=a(39323);let s=e=>{let{currentSearch:r}=e,{locale:a}=(0,l.O)();return(0,t.jsx)("div",{className:"flex w-full items-center justify-center min-h-screen mx-auto md:-mt-20",children:(0,t.jsxs)("div",{className:"text-gray-500 dark:text-gray-300",children:[a.COMMON.NO_MORE," ",r&&(0,t.jsx)("div",{children:r})]})})};r.default=s},26472:function(e,r,a){a.r(r);var t=a(85893),l=a(9162),s=a(86212),n=a(12204),i=a(74925);let o=e=>{let{page:r=1,posts:a=[],postCount:o,siteInfo:c}=e,d=Math.ceil(o/parseInt((0,i.J)("POSTS_PER_PAGE"))),u=o>=parseInt((0,i.J)("POSTS_PER_PAGE"));return!a||0===a.length||r>d?(0,t.jsx)(n.default,{}):(0,t.jsxs)("div",{id:"container",className:"w-full",children:[(0,t.jsx)("div",{className:"2xl:grid 2xl:grid-cols-2 grid-cols-1 gap-5",children:null==a?void 0:a.map(e=>(0,t.jsx)(l.default,{index:a.indexOf(e),post:e,siteInfo:c},e.id))}),u&&(0,t.jsx)(s.default,{page:r,totalPage:d})]})};r.default=o},86212:function(e,r,a){a.r(r);var t=a(85893),l=a(89120),s=a(39323),n=a(41664),i=a.n(n),o=a(11163),c=a(67294);let d=e=>{let{page:r,totalPage:a}=e,n=(0,o.useRouter)(),{locale:d}=(0,s.O)(),h=+r,x=r<a,p=1!==h,g=n.asPath.split("?")[0].replace(/\/page\/[1-9]\d*/,"").replace(/\/$/,""),f=function(e,r,a,l){let s=[];if(l<=7)for(let a=1;a<=l;a++)s.push(u(a,r,e));else{s.push(u(1,r,e));let n=a-2;n<=1&&(n=2),n+5>l&&(n=l-5),n>2&&s.push((0,t.jsx)("div",{className:"-mt-2 mx-1",children:"... "},-1));for(let a=0;a<5;a++)n+a<l&&s.push(u(n+a,r,e));n+5<l&&s.push((0,t.jsx)("div",{children:"... "},-2)),s.push(u(l,r,e))}return s}(g,r,h,a),[m,v]=(0,c.useState)(""),b=e=>{let r=e.target.value.replace(/[^0-9]/g,"");v(r)},y=()=>{m&&n.push(1===m?"".concat(g,"/"):"".concat(g,"/page/").concat(m))};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"hidden lg:flex justify-between items-end mt-10 mb-5 font-medium text-black duration-500 dark:text-gray-300 py-3 space-x-2 overflow-x-auto",children:[(0,t.jsx)(i(),{href:{pathname:2===h?"".concat(g,"/"):"".concat(g,"/page/").concat(h-1),query:n.query.s?{s:n.query.s}:{}},rel:"prev",className:"".concat(1===h?"invisible":"block"),children:(0,t.jsxs)("div",{className:"relative w-24 h-10 flex items-center transition-all duration-200 justify-center py-2 px-2 bg-white dark:bg-[#1e1e1e] border rounded-lg cursor-pointer group",children:[(0,t.jsx)("i",{className:"fas fa-angle-left mr-2 transition-all duration-200 transform group-hover:-translate-x-4"}),(0,t.jsx)("div",{className:"absolute translate-x-4 ml-2 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0",children:d.PAGINATION.PREV})]})}),(0,t.jsxs)("div",{className:"flex items-center space-x-2",children:[f,(0,t.jsxs)("div",{className:"bg-white hover:bg-gray-100 dark:hover:bg-yellow-600  dark:bg-[#1e1e1e]  h-10 border flex justify-center items-center rounded-lg group hover:border-indigo-600 transition-all duration-200",children:[(0,t.jsx)("input",{value:m,className:"w-0 group-hover:w-20 group-hover:px-3 transition-all duration-200 bg-gray-100 border-none outline-none h-full rounded-lg",onInput:b}),(0,t.jsx)("div",{onClick:y,className:"cursor-pointer hover:bg-indigo-600  dark:bg-[#1e1e1e] dark:hover:bg-yellow-600 hover:text-white px-4 py-2 group-hover:px-2 group-hover:mx-1 group-hover:rounded bg-white",children:(0,t.jsx)(l.Bl,{className:"w-4 h-4"})})]})]}),(0,t.jsx)(i(),{href:{pathname:"".concat(g,"/page/").concat(h+1),query:n.query.s?{s:n.query.s}:{}},rel:"next",className:"".concat(+x?"block":"invisible"," "),children:(0,t.jsxs)("div",{className:"relative w-24 h-10 flex items-center transition-all duration-200 justify-center py-2 px-2 bg-white dark:bg-[#1e1e1e] border rounded-lg cursor-pointer group",children:[(0,t.jsx)("i",{className:"fas fa-angle-right mr-2 transition-all duration-200 transform group-hover:translate-x-6"}),(0,t.jsx)("div",{className:"absolute -translate-x-10 ml-2 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:-translate-x-2",children:d.PAGINATION.NEXT})]})})]}),(0,t.jsxs)("div",{className:"lg:hidden w-full flex flex-row",children:[(0,t.jsx)(i(),{href:{pathname:2===h?"".concat(g,"/"):"".concat(g,"/page/").concat(h-1),query:n.query.s?{s:n.query.s}:{}},rel:"prev",className:"".concat(p?"block":"hidden"," dark:text-white relative w-full flex-1 h-14 flex items-center transition-all duration-200 justify-center py-2 px-2 bg-white dark:bg-[#1e1e1e] border rounded-xl cursor-pointer"),children:d.PAGINATION.PREV}),p&&x&&(0,t.jsx)("div",{className:"w-12"}),(0,t.jsx)(i(),{href:{pathname:"".concat(g,"/page/").concat(h+1),query:n.query.s?{s:n.query.s}:{}},rel:"next",className:"".concat(+x?"block":"hidden"," dark:text-white relative w-full flex-1 h-14 flex items-center transition-all duration-200 justify-center py-2 px-2 bg-white dark:bg-[#1e1e1e] border rounded-xl cursor-pointer"),children:d.PAGINATION.NEXT})]})]})};function u(e,r,a){return(0,t.jsx)(i(),{href:1===e?"".concat(a,"/"):"".concat(a,"/page/").concat(e),passHref:!0,className:(e+""==r+""?"bg-indigo-600 dark:bg-yellow-600 text-white ":"dark:bg-[#1e1e1e] bg-white")+" hover:border-indigo-600 dark:hover:bg-yellow-600 dark:border-gray-600 px-4 border py-2 rounded-lg drop-shadow-sm duration-200 transition-colors",children:e},e)}r.default=d}}]);