"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12138,2577,5111,34075,25706],{2577:function(e,t,l){l.r(t);var a=l(85893),r=l(41664),o=l.n(r),i=l(25706),_=l(34075),c=l(74940),n=l(66043);t.default=e=>{var t;let{index:l,post:r,showSummary:s,siteInfo:d}=e,E=(0,n.J)("HEO_POST_LIST_PREVIEW",null,i.default)&&r.blockMap;r&&!r.pageCoverThumbnail&&(0,n.J)("HEO_POST_LIST_COVER_DEFAULT",null,i.default)&&(r.pageCoverThumbnail=null==d?void 0:d.pageCover);let f=(0,n.J)("HEO_POST_LIST_COVER",null,i.default)&&(null==r?void 0:r.pageCoverThumbnail)&&!E;return(0,a.jsx)("div",{className:" ".concat((0,n.J)("HEO_POST_LIST_COVER_HOVER_ENLARGE",null,i.default)?" hover:scale-110 transition-all duration-150":""),children:(0,a.jsxs)("div",{"data-aos":"fade-up","data-aos-duration":"200","data-aos-once":"false","data-aos-anchor-placement":"top-bottom",className:"border bg-white dark:bg-[#1e1e1e] flex mb-4 flex-col h-[23rem] md:h-52 md:flex-row 2xl:h-96 2xl:flex-col group w-full dark:border-gray-600 hover:border-indigo-600  dark:hover:border-yellow-600 duration-300 transition-colors justify-between overflow-hidden rounded-xl",children:[f&&(0,a.jsx)(o(),{href:"".concat((0,n.J)("SUB_PATH",""),"/").concat(r.slug),passHref:!0,legacyBehavior:!0,children:(0,a.jsx)("div",{className:"w-full md:w-5/12 2xl:w-full overflow-hidden",children:(0,a.jsx)(c.Z,{priority:0===l,src:null==r?void 0:r.pageCoverThumbnail,alt:null==r?void 0:r.title,className:"h-60 w-full object-cover group-hover:scale-105 group-hover:brightness-75 transition-all duration-300"})})}),(0,a.jsxs)("div",{className:"flex p-6 2xl:p-4 flex-col justify-between h-48 md:h-full 2xl:h-48 w-full md:w-7/12 2xl:w-full",children:[(0,a.jsxs)("div",{children:[(null==r?void 0:r.category)&&(0,a.jsx)("div",{className:"flex mb-1 items-center ".concat(E?"justify-center":"justify-start"," hidden md:block flex-wrap dark:text-gray-500 text-gray-600 "),children:(0,a.jsx)(o(),{passHref:!0,href:"/category/".concat(r.category),className:"cursor-pointer text-xs font-normal menu-link hover:text-indigo-700 dark:hover:text-yellow-700  dark:text-gray-600 transform",children:r.category})}),(0,a.jsx)(o(),{href:"".concat((0,n.J)("SUB_PATH",""),"/").concat(r.slug),passHref:!0,className:" group-hover:text-indigo-700 dark:hover:text-yellow-700 dark:group-hover:text-yellow-600 text-black dark:text-gray-100  line-clamp-2 replace cursor-pointer text-xl font-extrabold leading-tight",children:(0,a.jsx)("span",{className:"menu-link ",children:r.title})})]}),(!E||s)&&(0,a.jsx)("p",{className:"line-clamp-2 replace my-3 2xl:my-1 text-gray-700  dark:text-gray-300 text-sm font-light leading-tight",children:r.summary}),(0,a.jsx)("div",{className:"md:flex-nowrap flex-wrap md:justify-start inline-block",children:(0,a.jsxs)("div",{children:[" ",null===(t=r.tagItems)||void 0===t?void 0:t.map(e=>(0,a.jsx)(_.default,{tag:e},e.name))]})})]})]})})}},5111:function(e,t,l){l.r(t);var a=l(85893),r=l(54110);t.default=e=>{let{currentSearch:t}=e,{locale:l}=(0,r.O)();return(0,a.jsx)("div",{className:"flex w-full items-center justify-center min-h-screen mx-auto md:-mt-20",children:(0,a.jsxs)("div",{className:"text-gray-500 dark:text-gray-300",children:[l.COMMON.NO_MORE," ",t&&(0,a.jsx)("div",{children:t})]})})}},12138:function(e,t,l){l.r(t);var a=l(85893),r=l(2577),o=l(5111),i=l(54110),_=l(67294),c=l(25706),n=l(22006),s=l(66043);t.default=e=>{let{posts:t=[],currentSearch:l,showSummary:d=(0,s.J)("HEO_POST_LIST_SUMMARY",null,c.default),siteInfo:E}=e,f=parseInt((0,s.J)("POSTS_PER_PAGE")),[O,u]=(0,_.useState)(1),h=(0,n.mq)(t,O,f),m=!1;if(t){let e=t.length;m=O*f<e}let handleGetMore=()=>{m&&u(O+1)},scrollTrigger=()=>{requestAnimationFrame(()=>{let e=window.scrollY+window.outerHeight,t=g&&g.current?g.current.clientHeight:0;e>t+100&&handleGetMore()})};(0,_.useEffect)(()=>(window.addEventListener("scroll",scrollTrigger),()=>{window.removeEventListener("scroll",scrollTrigger)}));let g=(0,_.useRef)(null),{locale:T}=(0,i.O)();return h&&0!==h.length?(0,a.jsxs)("div",{id:"container",ref:g,className:"w-full",children:[(0,a.jsx)("div",{className:"2xl:grid 2xl:grid-cols-2 grid-cols-1 gap-5",children:h.map(e=>(0,a.jsx)(r.default,{post:e,showSummary:d,siteInfo:E},e.id))}),(0,a.jsx)("div",{children:(0,a.jsxs)("div",{onClick:()=>{handleGetMore()},className:"w-full my-4 py-4 text-center cursor-pointer rounded-xl dark:text-gray-200",children:[" ",m?T.COMMON.MORE:"".concat(T.COMMON.NO_MORE)," "]})})]}):(0,a.jsx)(o.default,{currentSearch:l})}},34075:function(e,t,l){l.r(t);var a=l(85893),r=l(99088),o=l(41664),i=l.n(o);t.default=e=>{let{tag:t,selected:l=!1}=e;return(0,a.jsx)(i(),{href:l?"/":"/tag/".concat(encodeURIComponent(t.name)),passHref:!0,className:"cursor-pointer inline-block hover:text-white hover:bg-indigo-600 dark:hover:bg-yellow-600 px-2 py-1 rounded-2xl dark:text-white duration-200 text-sm whitespace-nowrap ",children:(0,a.jsxs)("div",{className:"font-light flex items-center",children:[(0,a.jsx)(r.VN,{className:"text-gray-500 stroke-2 mr-0.5 w-3 h-3"})," ",t.name+(t.count?"(".concat(t.count,")"):"")," "]})},t)}},25706:function(e,t,l){l.r(t),t.default={HEO_HOME_BANNER_ENABLE:!0,HEO_SITE_CREATE_TIME:"2021-09-21",HEO_NOTICE_BAR:[{title:"欢迎来到我的博客",url:"https://blog.tangly1024.com"},{title:"访问文档中心获取更多帮助",url:"https://docs.tangly1024.com"}],HEO_HERO_TITLE_1:"分享编程",HEO_HERO_TITLE_2:"与思维认知",HEO_HERO_TITLE_3:"TANGLY1024.COM",HEO_HERO_TITLE_4:"新版上线",HEO_HERO_TITLE_5:"NotionNext4.0 轻松定制主题",HEO_HERO_TITLE_LINK:"https://tangly1024.com",HEO_HERO_CATEGORY_1:{title:"必看精选",url:"/tag/必看精选"},HEO_HERO_CATEGORY_2:{title:"热门文章",url:"/tag/热门文章"},HEO_HERO_CATEGORY_3:{title:"实用教程",url:"/tag/实用教程"},HEO_HERO_RECOMMEND_POST_TAG:"推荐",HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME:!1,HEO_INFOCARD_GREETINGS:["你好！我是","\uD83D\uDD0D 分享与热心帮助","\uD83E\uDD1D 专修交互与设计","\uD83C\uDFC3 脚踏实地行动派","\uD83C\uDFE0 智能家居小能手","\uD83E\uDD16️ 数码科技爱好者","\uD83E\uDDF1 团队小组发动机"],HEO_INFO_CARD_URL:"https://github.com/tangly1024/NotionNext",HEO_GROUP_ICONS:[{title_1:"AfterEffect",img_1:"/images/heo/20239df3f66615b532ce571eac6d14ff21cf072602.webp",color_1:"#989bf8",title_2:"Sketch",img_2:"/images/heo/2023e0ded7b724a39f12d59c3dc8fbdc7cbe074202.webp",color_2:"#ffffff"},{title_1:"Docker",img_1:"/images/heo/20231108a540b2862d26f8850172e4ea58ed075102.webp",color_1:"#57b6e6",title_2:"Photoshop",img_2:"/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp",color_2:"#4082c3"},{title_1:"FinalCutPro",img_1:"/images/heo/20233e777652412247dd57fd9b48cf997c01070702.webp",color_1:"#ffffff",title_2:"Python",img_2:"/images/heo/20235c0731cd4c0c95fc136a8db961fdf963071502.webp",color_2:"#ffffff"},{title_1:"Swift",img_1:"/images/heo/202328bbee0b314297917b327df4a704db5c072402.webp",color_1:"#eb6840",title_2:"Principle",img_2:"/images/heo/2023f76570d2770c8e84801f7e107cd911b5073202.webp",color_2:"#8f55ba"},{title_1:"illustrator",img_1:"/images/heo/20237359d71b45ab77829cee5972e36f8c30073902.webp",color_1:"#f29e39",title_2:"CSS3",img_2:"/images/heo/20237c548846044a20dad68a13c0f0e1502f074602.webp",color_2:"#2c51db"},{title_1:"JS",img_1:"/images/heo/2023786e7fc488f453d5fb2be760c96185c0075502.webp",color_1:"#f7cb4f",title_2:"HTML",img_2:"/images/heo/202372b4d760fd8a497d442140c295655426070302.webp",color_2:"#e9572b"},{title_1:"Git",img_1:"/images/heo/2023ffa5707c4e25b6beb3e6a3d286ede4c6071102.webp",color_1:"#df5b40",title_2:"Rhino",img_2:"/images/heo/20231ca53fa0b09a3ff1df89acd7515e9516173302.webp",color_2:"#1f1f1f"}],HEO_SOCIAL_CARD:!0,HEO_SOCIAL_CARD_TITLE_1:"交流频道",HEO_SOCIAL_CARD_TITLE_2:"加入我们的社群讨论分享",HEO_SOCIAL_CARD_TITLE_3:"点击加入社群",HEO_SOCIAL_CARD_URL:"https://docs.tangly1024.com/article/how-to-question",HEO_MENU_INDEX:!0,HEO_MENU_CATEGORY:!0,HEO_MENU_TAG:!0,HEO_MENU_ARCHIVE:!0,HEO_MENU_SEARCH:!0,HEO_POST_LIST_COVER:!0,HEO_POST_LIST_COVER_HOVER_ENLARGE:!1,HEO_POST_LIST_COVER_DEFAULT:!0,HEO_POST_LIST_SUMMARY:!0,HEO_POST_LIST_PREVIEW:!1,HEO_POST_LIST_IMG_CROSSOVER:!0,HEO_ARTICLE_ADJACENT:!0,HEO_ARTICLE_COPYRIGHT:!0,HEO_ARTICLE_RECOMMEND:!0,HEO_WIDGET_LATEST_POSTS:!0,HEO_WIDGET_ANALYTICS:!1,HEO_WIDGET_TO_TOP:!0,HEO_WIDGET_TO_COMMENT:!0,HEO_WIDGET_DARK_MODE:!0,HEO_WIDGET_TOC:!0}}}]);