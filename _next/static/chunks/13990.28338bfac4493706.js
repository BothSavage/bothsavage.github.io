"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[13990,78502,48596],{6331:function(e,a,t){var l=t(85893),s=t(66043);a.Z=e=>{let{post:a,className:t}=e;return JSON.parse((0,s.J)("COMMENT_TWIKOO_COUNT_ENABLE"))?(0,l.jsxs)("a",{href:"".concat(a.slug,"?target=comment"),className:"mx-1 hidden comment-count-wrapper-".concat(a.id," ").concat(t||""),children:[(0,l.jsx)("i",{className:"far fa-comment mr-1"}),(0,l.jsx)("span",{className:"comment-count-text-".concat(a.id)})]}):null}},13990:function(e,a,t){t.r(a),t.d(a,{BlogListPage:function(){return BlogListPage}});var l=t(85893),s=t(66043),r=t(54110),n=t(11163),c=t(41664),d=t.n(c),i=t(48596),o=t(78502);let BlogListPage=e=>{let{page:a=1,posts:t,postCount:c}=e,{locale:u}=(0,r.O)(),m=(0,n.useRouter)(),x=Math.ceil(c/parseInt((0,s.J)("POSTS_PER_PAGE"))),h=+a,p=h>1,g=m.asPath.split("?")[0].replace(/\/page\/[1-9]\d*/,"").replace(/\/$/,""),N=(0,s.J)("EXAMPLE_POST_LIST_COVER",null,i.default);return(0,l.jsxs)("div",{className:"w-full ".concat(N?"md:pr-2":"md:pr-12"," mb-12"),children:[(0,l.jsx)("div",{id:"posts-wrapper",children:null==t?void 0:t.map(e=>(0,l.jsx)(o.default,{post:e},e.id))}),(0,l.jsxs)("div",{className:"flex justify-between text-xs",children:[(0,l.jsx)(d(),{href:{pathname:h-1==1?"".concat(g,"/"):"".concat(g,"/page/").concat(h-1),query:m.query.s?{s:m.query.s}:{}},className:"".concat(p?"bg-black ":"bg-gray pointer-events-none "," text-white no-underline py-2 px-3 rounded"),children:u.PAGINATION.PREV}),(0,l.jsx)(d(),{href:{pathname:"".concat(g,"/page/").concat(h+1),query:m.query.s?{s:m.query.s}:{}},className:"".concat(a<x?"bg-black ":"bg-gray pointer-events-none "," text-white no-underline py-2 px-3 rounded"),children:u.PAGINATION.NEXT})]})]})}},78502:function(e,a,t){t.r(a);var l=t(85893),s=t(66043),r=t(48596),n=t(41664),c=t.n(n),d=t(6331),i=t(74940);a.default=e=>{var a;let{post:t}=e,n=(0,s.J)("EXAMPLE_POST_LIST_COVER",null,r.default)&&(null==t?void 0:t.pageCoverThumbnail);return(0,l.jsxs)("article",{className:"".concat(n?"flex md:flex-row flex-col-reverse":""," replace mb-12 "),children:[(0,l.jsxs)("div",{className:"".concat(n?"md:w-7/12":""),children:[(0,l.jsx)("h2",{className:"mb-4",children:(0,l.jsx)(c(),{href:"/".concat(t.slug),className:"text-black dark:text-gray-100 text-xl md:text-2xl no-underline hover:underline",children:null==t?void 0:t.title})}),(0,l.jsxs)("div",{className:"mb-4 text-sm text-gray-700 dark:text-gray-300",children:["by ",(0,l.jsx)("a",{href:"#",className:"text-gray-700 dark:text-gray-300",children:(0,s.J)("AUTHOR")})," on ",(null===(a=t.date)||void 0===a?void 0:a.start_date)||t.createdTime,(0,l.jsx)(d.Z,{post:t,className:"pl-1"}),(0,l.jsx)("span",{className:"font-bold mx-1",children:" | "}),(0,l.jsx)("a",{href:"/category".concat(t.category),className:"text-gray-700 dark:text-gray-300 hover:underline",children:t.category})]}),!t.results&&(0,l.jsx)("p",{className:"line-clamp-3 text-gray-700 dark:text-gray-400 leading-normal",children:t.summary}),t.results&&(0,l.jsx)("p",{className:"line-clamp-3 mt-4 text-gray-700 dark:text-gray-300 text-sm font-light leading-7",children:t.results.map((e,a)=>(0,l.jsx)("span",{children:e},a))})]}),n&&(0,l.jsx)("div",{className:"md:w-5/12 w-full h-44 overflow-hidden p-1",children:(0,l.jsx)(c(),{href:"".concat((0,s.J)("SUB_PATH",""),"/").concat(t.slug),passHref:!0,legacyBehavior:!0,children:(0,l.jsx)(i.Z,{src:null==t?void 0:t.pageCoverThumbnail,className:"w-full bg-cover hover:scale-110 duration-200"})})})]})}},48596:function(e,a,t){t.r(a),a.default={EXAMPLE_MENU_CATEGORY:!0,EXAMPLE_MENU_TAG:!0,EXAMPLE_MENU_ARCHIVE:!0,EXAMPLE_MENU_SEARCH:!0,EXAMPLE_POST_LIST_COVER:!0}}}]);