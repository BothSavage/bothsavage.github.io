"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[42087],{42087:function(e,r,a){a.r(r);var t=a(85893),s=a(41664),c=a.n(s),n=a(11163),l=a(54110);r.default=e=>{let{page:r,totalPage:a}=e,{locale:s}=(0,l.O)(),o=(0,n.useRouter)(),u=+r,p=u<a,b=o.asPath.replace(/\/page\/[1-9]\d*/,"").replace(/\/$/,"");return(0,t.jsxs)("div",{className:"my-10 flex justify-between font-medium text-black dark:text-gray-100 space-x-2",children:[(0,t.jsxs)(c(),{href:{pathname:2===u?"".concat(b,"/"):"".concat(b,"/page/").concat(u-1),query:o.query.s?{s:o.query.s}:{}},passHref:!0,rel:"prev",className:"".concat(1===u?"invisible":"block"," text-center w-full duration-200 px-4 py-2 hover:border-green-500 border-b-2 hover:font-bold"),children:["←",s.PAGINATION.PREV]}),(0,t.jsxs)(c(),{href:{pathname:"".concat(b,"/page/").concat(u+1),query:o.query.s?{s:o.query.s}:{}},passHref:!0,rel:"next",className:"".concat(+p?"block":"invisible"," text-center w-full duration-200 px-4 py-2 hover:border-green-500 border-b-2 hover:font-bold"),children:[s.PAGINATION.NEXT,"→"]})]})}}}]);