"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[45529,99040],{45529:function(e,s,n){n.r(s),n.d(s,{BlogListPage:function(){return BlogListPage}});var t=n(85893),l=n(66043),r=n(54110),a=n(11163),c=n(41664),i=n.n(c),d=n(99040);let BlogListPage=e=>{let{page:s=1,posts:n,postCount:c}=e,{locale:o}=(0,r.O)(),u=(0,a.useRouter)(),x=Math.ceil(c/parseInt((0,l.J)("POSTS_PER_PAGE"))),m=+s,h=m>1,p=m<x&&(null==n?void 0:n.length)>0,f=u.asPath.split("?")[0].replace(/\/page\/[1-9]\d*/,"").replace(/\/$/,"");return(0,t.jsxs)("div",{className:"w-full md:pr-12 my-6",children:[(0,t.jsx)("div",{id:"posts-wrapper",children:null==n?void 0:n.map(e=>(0,t.jsx)(d.default,{post:e},e.id))}),(0,t.jsxs)("div",{className:"flex justify-between text-xs",children:[(0,t.jsx)(i(),{href:{pathname:m-1==1?"".concat(f,"/"):"".concat(f,"/page/").concat(m-1),query:u.query.s?{s:u.query.s}:{}},className:"".concat(h?"  ":" invisible block pointer-events-none ","no-underline py-2 px-3 rounded"),children:(0,t.jsxs)("button",{rel:"prev",className:"block cursor-pointer",children:["← ",o.PAGINATION.PREV]})}),(0,t.jsx)(i(),{href:{pathname:"".concat(f,"/page/").concat(m+1),query:u.query.s?{s:u.query.s}:{}},className:"".concat(p?"  ":"invisible pointer-events-none ","  no-underline py-2 px-3 rounded"),children:(0,t.jsxs)("button",{rel:"next",className:"block cursor-pointer",children:[o.PAGINATION.NEXT," →"]})})]})]})}},99040:function(e,s,n){n.r(s);var t=n(85893),l=n(41664),r=n.n(l),a=n(66043);s.default=e=>{let{post:s}=e;return(0,t.jsx)(r(),{href:"".concat((0,a.J)("SUB_PATH",""),"/").concat(s.slug),children:(0,t.jsxs)("article",{className:"mb-6 md:mb-8",children:[(0,t.jsxs)("header",{className:"flex flex-col justify-between md:flex-row md:items-baseline",children:[(0,t.jsx)("h2",{className:"text-lg md:text-xl font-medium mb-2 cursor-pointer text-black dark:text-gray-100",children:s.title}),(0,t.jsx)("time",{className:"flex-shrink-0 text-gray-600 dark:text-gray-400",children:null==s?void 0:s.publishDay})]}),(0,t.jsx)("main",{children:(0,t.jsx)("p",{className:"hidden md:block leading-8 text-gray-700 dark:text-gray-300",children:s.summary})})]},s.id)})}}}]);