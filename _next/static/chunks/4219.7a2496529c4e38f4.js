(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4219,67661,40340,40214],{99219:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var r=a(85893),s=a(74925),n=a(9008),l=a.n(n),o=a(67294);function c(e){let{priority:t,id:a,src:n,alt:c,placeholderSrc:i,className:d,width:u,height:h,title:x,onLoad:m,style:f}=e,g=(0,o.useRef)(null),[_,T]=(0,o.useState)(!1);i||(i=(0,s.J)("IMG_LAZY_LOAD_PLACEHOLDER"));let E=()=>{T(!0),"function"==typeof m&&m()};(0,o.useEffect)(()=>{let e=new IntersectionObserver(t=>{t.forEach(t=>{if(t.isIntersecting){let a=t.target;a.src=n,e.unobserve(a)}})},{rootMargin:"50px 0px"});return g.current&&e.observe(g.current),()=>{g.current&&e.unobserve(g.current)}},[n]);let N={ref:g,src:_?n:i,alt:c,onLoad:E};return a&&(N.id=a),x&&(N.title=x),u&&"auto"!==u&&(N.width=u),h&&"auto"!==h&&(N.height=h),d&&(N.className=d),f&&(N.style=f),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("img",{...N}),t&&(0,r.jsx)(l(),{children:(0,r.jsx)("link",{rel:"preload",as:"image",src:n})})]})}},50044:function(e,t,a){"use strict";var r=a(85893),s=a(99219);let n=e=>{let{icon:t}=e;return t?t.startsWith("http")||t.startsWith("data:")?(0,r.jsx)(s.Z,{src:t,className:"w-8 h-8 my-auto inline mr-1"}):(0,r.jsx)("span",{className:"mr-1",children:t}):(0,r.jsx)(r.Fragment,{})};t.Z=n},52236:function(e,t,a){"use strict";var r=a(85893),s=a(74925);let n=e=>{let{post:t,className:a}=e;return JSON.parse((0,s.J)("COMMENT_TWIKOO_COUNT_ENABLE"))?(0,r.jsxs)("a",{href:"".concat(t.slug,"?target=comment"),className:"mx-1 hidden comment-count-wrapper-".concat(t.id," ").concat(a||""),children:[(0,r.jsx)("i",{className:"far fa-comment mr-1"}),(0,r.jsx)("span",{className:"comment-count-text-".concat(t.id)})]}):null};t.Z=n},47670:function(e,t,a){"use strict";function r(e,t){let a=new Date(e),r={"M+":a.getMonth()+1,"d+":a.getDate(),"h+":a.getHours(),"m+":a.getMinutes(),"s+":a.getSeconds(),"q+":Math.floor((a.getMonth()+3)/3),S:a.getMilliseconds()};for(let e in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(a.getFullYear()+"").substr(4-RegExp.$1.length))),r)RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?r[e]:("00"+r[e]).substr((""+r[e]).length)));return t.trim()}a.d(t,{x:function(){return r}})},4219:function(e,t,a){"use strict";a.r(t);var r=a(85893),s=a(39323),n=a(25675),l=a.n(n),o=a(41664),c=a.n(o),i=a(67661),d=a(40340),u=a(40214),h=a(88841),x=a(50044),m=a(52236),f=a(47670),g=a(74925);let _=e=>{var t,a;let{post:n,showSummary:o}=e,{locale:_}=(0,s.O)(),T=(0,g.J)("NEXT_POST_LIST_PREVIEW",null,u.default)&&n.blockMap;return(0,r.jsx)(i.default,{className:"w-full",children:(0,r.jsxs)("div",{className:"flex flex-col-reverse justify-between duration-300",children:[(0,r.jsxs)("div",{className:"lg:p-8 p-4 flex flex-col w-full",children:[(0,r.jsxs)(c(),{href:"".concat((0,g.J)("SUB_PATH",""),"/").concat(n.slug),passHref:!0,"data-aos":"fade-down","data-aos-duration":"500","data-aos-once":"true","data-aos-anchor-placement":"top-bottom",className:"cursor-pointer text-3xl ".concat(T?"text-center":""," leading-tight text-gray-700 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400"),children:[(0,r.jsx)(x.Z,{icon:n.pageIcon})," ",(0,r.jsx)("span",{className:"menu-link",children:n.title})]}),(0,r.jsxs)("div",{"data-aos":"fade-down","data-aos-duration":"500","data-aos-delay":"100","data-aos-once":"true","data-aos-anchor-placement":"top-bottom",className:"flex mt-2 items-center ".concat(T?"justify-center":"justify-start"," flex-wrap dark:text-gray-500 text-gray-400 "),children:[(0,r.jsxs)("div",{children:[n.category&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c(),{href:"/category/".concat(n.category),passHref:!0,className:"hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer font-light text-sm transform",children:[(0,r.jsx)("i",{className:"mr-1 fas fa-folder"}),(0,r.jsx)("span",{className:"menu-link",children:n.category})]}),(0,r.jsx)("span",{className:"mx-2",children:"|"})]}),(0,r.jsx)(c(),{href:"/archive#".concat((0,f.x)(null==n?void 0:n.publishDate,"yyyy-MM")),passHref:!0,className:"hover:text-blue-500 dark:hover:text-blue-400 font-light cursor-pointer text-sm leading-4 mr-3",children:(0,r.jsx)("span",{className:"menu-link",children:null===(t=n.date)||void 0===t?void 0:t.start_date})})]}),(0,r.jsx)(m.Z,{post:n,className:"hover:text-blue-500 dark:hover:text-blue-400 hover:underline text-sm"}),(0,r.jsx)("div",{className:"hover:text-blue-500 dark:hover:text-blue-400  md:flex-nowrap flex-wrap md:justify-start inline-block",children:null===(a=n.tagItems)||void 0===a?void 0:a.map(e=>(0,r.jsx)(d.default,{tag:e},e.name))})]}),(!T||o)&&!n.results&&(0,r.jsx)("p",{"data-aos":"fade-down","data-aos-duration":"500","data-aos-delay":"100","data-aos-once":"true","data-aos-anchor-placement":"top-bottom",className:"mt-4 mb-12 text-gray-700 dark:text-gray-300 text-sm font-light leading-7",children:n.summary}),n.results&&(0,r.jsx)("p",{className:"line-clamp-4 mt-4 text-gray-700 dark:text-gray-300 text-sm font-light leading-7",children:n.results.map((e,t)=>(0,r.jsx)("span",{children:e},t))}),T&&(null==n?void 0:n.blockMap)&&(0,r.jsx)("div",{"data-aos":"fade-down","data-aos-duration":"500","data-aos-delay":"100","data-aos-once":"true","data-aos-anchor-placement":"top-bottom",className:"overflow-ellipsis truncate",children:(0,r.jsx)(h.default,{post:n})}),(0,r.jsx)("div",{className:"text-right border-t pt-8 border-dashed",children:(0,r.jsxs)(c(),{href:"".concat((0,g.J)("SUB_PATH",""),"/").concat(n.slug),className:"hover:bg-opacity-100 hover:underline transform duration-300 p-3 text-white bg-gray-800 cursor-pointer",children:[_.COMMON.ARTICLE_DETAIL,(0,r.jsx)("i",{className:"ml-1 fas fa-angle-right"})]})})]}),(0,g.J)("NEXT_POST_LIST_COVER",null,u.default)&&(null==n?void 0:n.pageCoverThumbnail)&&(0,r.jsx)(c(),{href:"".concat((0,g.J)("SUB_PATH",""),"/").concat(n.slug),passHref:!0,legacyBehavior:!0,children:(0,r.jsx)("div",{className:"h-72 w-full relative duration-200 cursor-pointer transform overflow-hidden",children:(0,r.jsx)(l(),{className:"hover:scale-105 transform duration-500",src:null==n?void 0:n.pageCoverThumbnail,alt:n.title,layout:"fill",objectFit:"cover",loading:"lazy"})})})]},n.id)})};t.default=_},67661:function(e,t,a){"use strict";a.r(t);var r=a(85893);let s=e=>{let{children:t,headerSlot:a}=e;return(0,r.jsxs)("div",{...e,children:[(0,r.jsx)(r.Fragment,{children:a}),(0,r.jsx)("section",{className:"shadow px-2 py-4 bg-white dark:bg-hexo-black-gray hover:shadow-xl duration-200",children:t})]})};t.default=s},40340:function(e,t,a){"use strict";a.r(t);var r=a(85893),s=a(41664),n=a.n(s);let l=e=>{let{tag:t,selected:a=!1}=e;return(0,r.jsx)(n(),{href:a?"/":"/tag/".concat(encodeURIComponent(t.name)),passHref:!0,className:"cursor-pointer inline-block rounded hover:bg-gray-500 hover:text-white duration-200\n        mr-2 py-0.5 px-1 text-xs whitespace-nowrap dark:hover:text-white\n         ".concat(a?"text-white dark:text-gray-300 bg-black dark:bg-black dark:hover:bg-gray-900":"text-gray-600 hover:shadow-xl dark:border-gray-400 notion-".concat(t.color,"_background dark:bg-gray-800")),children:(0,r.jsxs)("div",{className:"font-light dark:text-gray-400",children:[a&&(0,r.jsx)("i",{className:"fas fa-tag mr-1"})," ",t.name+(t.count?"(".concat(t.count,")"):"")," "]})},t)};t.default=l},40214:function(e,t,a){"use strict";a.r(t),t.default={NEXT_HOME_BANNER:!0,NEXT_HOME_BANNER_STRINGS:["Hi，我是一个程序员","Hi，我是一个打工人","Hi，我是一个干饭人","欢迎来到我的博客\uD83C\uDF89"],NEXT_NAV_TYPE:"normal",NEXT_POST_LIST_COVER:!1,NEXT_POST_LIST_PREVIEW:!0,NEXT_POST_LIST_SUMMARY:!1,NEXT_POST_HEADER_IMAGE_VISIBLE:!1,NEXT_RIGHT_BAR:!0,NEXT_RIGHT_LATEST_POSTS:!0,NEXT_RIGHT_CATEGORY_LIST:!0,NEXT_RIGHT_TAG_LIST:!0,NEXT_RIGHT_AD:!1,NEXT_MENU_HOME:!0,NEXT_MENU_CATEGORY:!0,NEXT_MENU_TAG:!0,NEXT_MENU_ARCHIVE:!0,NEXT_MENU_SEARCH:!0,NEXT_WIDGET_TO_TOP:!0,NEXT_WIDGET_TO_BOTTOM:!1,NEXT_WIDGET_DARK_MODE:!1,NEXT_WIDGET_TOC:!0,NEXT_ARTICLE_RELATE_POSTS:!0,NEXT_ARTICLE_COPYRIGHT:!0,NEXT_ARTICLE_INFO:!0}},9008:function(e,t,a){e.exports=a(42636)}}]);