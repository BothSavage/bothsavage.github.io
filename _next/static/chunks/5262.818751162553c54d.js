(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5262,71469,86629,51656,27328],{99219:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var a=r(85893),n=r(74925),l=r(9008),s=r.n(l),i=r(67294);function o(e){let{priority:t,id:r,src:l,alt:o,placeholderSrc:c,className:d,width:u,height:f,title:x,onLoad:h,style:m}=e,g=(0,i.useRef)(null),[A,v]=(0,i.useState)(!1);c||(c=(0,n.J)("IMG_LAZY_LOAD_PLACEHOLDER"));let _=()=>{v(!0),"function"==typeof h&&h()};(0,i.useEffect)(()=>{let e=new IntersectionObserver(t=>{t.forEach(t=>{if(t.isIntersecting){let r=t.target;r.src=l,e.unobserve(r)}})},{rootMargin:"50px 0px"});return g.current&&e.observe(g.current),()=>{g.current&&e.unobserve(g.current)}},[l]);let p={ref:g,src:A?l:c,alt:o,onLoad:_};return r&&(p.id=r),x&&(p.title=x),u&&"auto"!==u&&(p.width=u),f&&"auto"!==f&&(p.height=f),d&&(p.className=d),m&&(p.style=m),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("img",{...p}),t&&(0,a.jsx)(s(),{children:(0,a.jsx)("link",{rel:"preload",as:"image",src:l})})]})}},71469:function(e,t,r){"use strict";r.r(t);var a=r(85893),n=r(74925),l=r(41664),s=r.n(l),i=r(51656),o=r(27328),c=r(99219);let d=e=>{var t;let{index:r,post:l,showSummary:d,siteInfo:u}=e,f=(0,n.J)("FUKASAWA_POST_LIST_PREVIEW",null,o.default)&&l.blockMap;(0,n.J)("FUKASAWA_POST_LIST_COVER_FORCE",null,o.default)&&l&&!l.pageCover&&(l.pageCoverThumbnail=null==u?void 0:u.pageCover);let x=(0,n.J)("FUKASAWA_POST_LIST_COVER",null,o.default)&&(null==l?void 0:l.pageCoverThumbnail),h=(0,n.J)("SUB_PATH","");return(0,a.jsx)("div",{"data-aos":"fade-up","data-aos-duration":"600","data-aos-once":"true","data-aos-anchor-placement":"top-bottom",style:{maxHeight:"60rem"},className:"w-full lg:max-w-sm p-3 shadow mb-4 mx-2 bg-white dark:bg-hexo-black-gray hover:shadow-lg duration-200",children:(0,a.jsxs)("div",{className:"flex flex-col justify-between h-full",children:[x&&(0,a.jsx)("div",{className:"flex-grow mb-3 w-full duration-200 cursor-pointer transform overflow-hidden",children:(0,a.jsx)(s(),{href:"".concat(h,"/").concat(l.slug),passHref:!0,legacyBehavior:!0,children:(0,a.jsx)(c.Z,{src:null==l?void 0:l.pageCoverThumbnail,alt:(null==l?void 0:l.title)||(0,n.J)("TITLE"),className:"object-cover w-full h-full hover:scale-125 transform duration-500"})})}),(0,a.jsxs)("div",{className:"flex flex-col w-full",children:[(0,a.jsx)(s(),{passHref:!0,href:"".concat(h,"/").concat(l.slug),className:"break-words cursor-pointer font-bold hover:underline text-xl ".concat(f?"justify-center":"justify-start"," leading-tight text-gray-700 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400"),children:l.title}),(!f||d)&&(0,a.jsx)("p",{className:"my-2 tracking-wide line-clamp-3 text-gray-800 dark:text-gray-300 text-md font-light leading-6",children:l.summary}),(0,a.jsxs)("div",{className:"mt-auto justify-between flex",children:[l.category&&(0,a.jsxs)(s(),{href:"/category/".concat(l.category),passHref:!0,className:"cursor-pointer dark:text-gray-300 font-light text-sm hover:underline hover:text-indigo-700 dark:hover:text-indigo-400 transform",children:[(0,a.jsx)("i",{className:"mr-1 far fa-folder"}),l.category]}),(0,a.jsx)("div",{className:"md:flex-nowrap flex-wrap md:justify-start inline-block",children:(0,a.jsx)("div",{children:null===(t=l.tagItems)||void 0===t?void 0:t.map(e=>(0,a.jsx)(i.default,{tag:e},e.name))})})]})]})]})})};t.default=d},86629:function(e,t,r){"use strict";r.r(t);var a=r(85893),n=r(39323);let l=e=>{let{currentSearch:t}=e,{locale:r}=(0,n.O)();return(0,a.jsx)("div",{className:"flex items-center justify-center min-h-screen mx-auto md:-mt-20",children:(0,a.jsxs)("p",{className:"text-gray-500 dark:text-gray-300",children:[r.COMMON.NO_RESULTS_FOUND," ",t&&(0,a.jsx)("div",{children:t})]})})};t.default=l},5262:function(e,t,r){"use strict";r.r(t);var a=r(85893),n=r(74925),l=r(67294),s=r(71469),i=r(86629),o=r(39323);let c=e=>{let{posts:t=[],siteInfo:r}=e,{locale:c}=(0,o.O)(),d=(0,l.useRef)(null),[u,f]=(0,l.useState)(1),x=!1,h=t?Object.assign(t).slice(0,parseInt((0,n.J)("POSTS_PER_PAGE"))*u):[];if(t){let e=t.length;x=u*parseInt((0,n.J)("POSTS_PER_PAGE"))<e}let m=()=>{x&&f(u+1)},g=()=>{requestAnimationFrame(()=>{let e=window.scrollY+window.outerHeight,t=d&&d.current?d.current.clientHeight:0;e>t+100&&m()})};return((0,l.useEffect)(()=>(window.addEventListener("scroll",g),()=>{window.removeEventListener("scroll",g)}),[]),t&&0!==t.length)?(0,a.jsxs)("div",{id:"posts-wrapper",ref:d,className:"grid-container",children:[null==h?void 0:h.map(e=>(0,a.jsx)("div",{className:"grid-item justify-center flex",style:{breakInside:"avoid"},children:(0,a.jsx)(s.default,{index:t.indexOf(e),post:e,siteInfo:r},e.id)},e.id)),(0,a.jsxs)("div",{className:"w-full my-4 py-4 text-center cursor-pointer ",onClick:m,children:[" ",x?c.COMMON.MORE:"".concat(c.COMMON.NO_MORE," \uD83D\uDE30")," "]})]}):(0,a.jsx)(i.default,{})};t.default=c},51656:function(e,t,r){"use strict";r.r(t);var a=r(85893),n=r(41664),l=r.n(n);let s=e=>{let{tag:t,selected:r=!1}=e;return(0,a.jsx)(l(),{href:r?"/":"/tag/".concat(encodeURIComponent(t.name)),passHref:!0,className:"cursor-pointer inline-block rounded hover:bg-gray-500 hover:text-white duration-200\n        mr-2 py-0.5 px-1 text-xs whitespace-nowrap dark:hover:text-white\n         ".concat(r?"text-white dark:text-gray-300 bg-black dark:bg-black dark:hover:bg-gray-900":"text-gray-600 hover:shadow-xl dark:border-gray-400 notion-".concat(t.color,"_background dark:bg-gray-800")),children:(0,a.jsxs)("div",{className:"font-light dark:text-gray-400",children:[r&&(0,a.jsx)("i",{className:"mr-1 fas fa-tag"})," ",t.name+(t.count?"(".concat(t.count,")"):"")," "]})},t)};t.default=s},27328:function(e,t,r){"use strict";r.r(t),t.default={FUKASAWA_MAILCHIMP_FORM:!1,FUKASAWA_POST_LIST_COVER:!0,FUKASAWA_POST_LIST_COVER_FORCE:!1,FUKASAWA_POST_LIST_PREVIEW:!1,FUKASAWA_MENU_CATEGORY:!0,FUKASAWA_MENU_TAG:!0,FUKASAWA_MENU_ARCHIVE:!0,FUKASAWA_MENU_SEARCH:!1,FUKASAWA_SIDEBAR_COLLAPSE_BUTTON:!0,FUKASAWA_SIDEBAR_COLLAPSE_SATUS_DEFAULT:!1}},9008:function(e,t,r){e.exports=r(42636)}}]);