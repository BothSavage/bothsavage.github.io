(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[43531,83],{99219:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var s=r(85893),l=r(74925),n=r(9008),a=r.n(n),i=r(67294);function c(e){let{priority:t,id:r,src:n,alt:c,placeholderSrc:E,className:_,width:u,height:T,title:o,onLoad:A,style:d}=e,R=(0,i.useRef)(null),[M,f]=(0,i.useState)(!1);E||(E=(0,l.J)("IMG_LAZY_LOAD_PLACEHOLDER"));let N=()=>{f(!0),"function"==typeof A&&A()};(0,i.useEffect)(()=>{let e=new IntersectionObserver(t=>{t.forEach(t=>{if(t.isIntersecting){let r=t.target;r.src=n,e.unobserve(r)}})},{rootMargin:"50px 0px"});return R.current&&e.observe(R.current),()=>{R.current&&e.unobserve(R.current)}},[n]);let h={ref:R,src:M?n:E,alt:c,onLoad:N};return r&&(h.id=r),o&&(h.title=o),u&&"auto"!==u&&(h.width=u),T&&"auto"!==T&&(h.height=T),_&&(h.className=_),d&&(h.style=d),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{...h}),t&&(0,s.jsx)(a(),{children:(0,s.jsx)("link",{rel:"preload",as:"image",src:n})})]})}},43531:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return _}});var s=r(85893),l=r(41664),n=r.n(l),a=r(83),i=r(74925),c=r(39323),E=r(99219);function _(e){let{recommendPosts:t,siteInfo:r}=e,{locale:l}=(0,c.O)();return(0,i.J)("MATERY_ARTICLE_RECOMMEND",null,a.default)&&t&&0!==t.length?(0,s.jsxs)("div",{className:"p-2",children:[(0,s.jsx)("div",{className:"mb-2 px-1 flex flex-nowrap justify-between",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("i",{className:"mr-2 fas fa-thumbs-up"}),l.COMMON.RELATE_POSTS]})}),(0,s.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4",children:t.map(e=>{var t;let l=(null==e?void 0:e.pageCoverThumbnail)?e.pageCoverThumbnail:null==r?void 0:r.pageCover;return(0,s.jsx)(n(),{title:e.title,href:"".concat((0,i.J)("SUB_PATH",""),"/").concat(e.slug),passHref:!0,className:"flex h-40 cursor-pointer overflow-hidden",children:(0,s.jsxs)("div",{className:"h-full w-full group",children:[(0,s.jsx)(E.Z,{src:l,className:"h-full w-full object-cover object-center group-hover:scale-110 transform duration-200"}),(0,s.jsx)("div",{className:"flex items-center justify-center bg-black bg-opacity-60 hover:bg-opacity-10 w-full h-full duration-300 ",children:(0,s.jsxs)("div",{className:"text-sm text-white text-center shadow-text",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("i",{className:"fas fa-calendar-alt mr-1"}),null===(t=e.date)||void 0===t?void 0:t.start_date]}),(0,s.jsx)("div",{className:"hover:underline",children:e.title})]})})]})},e.id)})})]}):(0,s.jsx)(s.Fragment,{})}},83:function(e,t,r){"use strict";r.r(t),t.default={MATERY_HOME_BANNER_ENABLE:!0,MATERY_HOME_BANNER_GREETINGS:["Hi，我是一个程序员","Hi，我是一个打工人","Hi，我是一个干饭人","欢迎来到我的博客\uD83C\uDF89"],MATERY_HOME_NAV_BUTTONS:!0,MATERY_HOME_NAV_BACKGROUND_IMG_FIXED:!1,MATERY_SHOW_START_READING:!0,MATERY_MENU_CATEGORY:!0,MATERY_MENU_TAG:!0,MATERY_MENU_ARCHIVE:!0,MATERY_MENU_SEARCH:!0,MATERY_POST_LIST_COVER:!0,MATERY_POST_LIST_SUMMARY:!0,MATERY_POST_LIST_PREVIEW:!0,MATERY_ARTICLE_ADJACENT:!0,MATERY_ARTICLE_COPYRIGHT:!0,MATERY_ARTICLE_RECOMMEND:!0,MATERY_WIDGET_LATEST_POSTS:!0,MATERY_WIDGET_ANALYTICS:!1,MATERY_WIDGET_TO_TOP:!0,MATERY_WIDGET_TO_COMMENT:!0,WIDGET_DARK_MODE:!0,MATERY_WIDGET_TOC:!0}},9008:function(e,t,r){e.exports=r(42636)}}]);