(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[978,68773],{99219:function(e,_,t){"use strict";t.d(_,{Z:function(){return r}});var E=t(85893),l=t(74925),c=t(9008),i=t.n(c),o=t(67294);function r(e){let{priority:_,id:t,src:c,alt:r,placeholderSrc:a,className:s,width:O,height:f,title:n,onLoad:u,style:d}=e,T=(0,o.useRef)(null),[b,H]=(0,o.useState)(!1);a||(a=(0,l.J)("IMG_LAZY_LOAD_PLACEHOLDER"));let g=()=>{H(!0),"function"==typeof u&&u()};(0,o.useEffect)(()=>{let e=new IntersectionObserver(_=>{_.forEach(_=>{if(_.isIntersecting){let t=_.target;t.src=c,e.unobserve(t)}})},{rootMargin:"50px 0px"});return T.current&&e.observe(T.current),()=>{T.current&&e.unobserve(T.current)}},[c]);let h={ref:T,src:b?c:a,alt:r,onLoad:g};return t&&(h.id=t),n&&(h.title=n),O&&"auto"!==O&&(h.width=O),f&&"auto"!==f&&(h.height=f),s&&(h.className=s),d&&(h.style=d),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("img",{...h}),_&&(0,E.jsx)(i(),{children:(0,E.jsx)("link",{rel:"preload",as:"image",src:c})})]})}},978:function(e,_,t){"use strict";t.r(_),t.d(_,{default:function(){return s}});var E=t(85893),l=t(41664),c=t.n(l),i=t(68773),o=t(39323),r=t(99219),a=t(74925);function s(e){let{recommendPosts:_,siteInfo:t}=e,{locale:l}=(0,o.O)();return(0,a.J)("HEO_ARTICLE_RECOMMEND",null,i.default)&&_&&0!==_.length?(0,E.jsxs)("div",{className:"pt-8 hidden md:block",children:[(0,E.jsx)("div",{className:" mb-2 px-1 flex flex-nowrap justify-between",children:(0,E.jsxs)("div",{className:"dark:text-gray-300 text-lg font-bold",children:[(0,E.jsx)("i",{className:"mr-2 fas fa-thumbs-up"}),l.COMMON.RELATE_POSTS]})}),(0,E.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4",children:_.map(e=>{let _=(null==e?void 0:e.pageCoverThumbnail)?e.pageCoverThumbnail:null==t?void 0:t.pageCover;return(0,E.jsx)(c(),{title:e.title,href:"".concat((0,a.J)("SUB_PATH",""),"/").concat(e.slug),passHref:!0,className:"flex h-40 cursor-pointer overflow-hidden rounded-2xl",children:(0,E.jsxs)("div",{className:"h-full w-full relative group",children:[(0,E.jsx)("div",{className:"flex items-center justify-center w-full h-full duration-300 ",children:(0,E.jsx)("div",{className:"z-10 text-lg px-4 font-bold text-white text-center shadow-text select-none",children:e.title})}),(0,E.jsx)(r.Z,{src:_,className:"absolute top-0 w-full h-full object-cover object-center group-hover:scale-110 group-hover:brightness-50 transform duration-200"})]})},e.id)})})]}):(0,E.jsx)(E.Fragment,{})}},68773:function(e,_,t){"use strict";t.r(_),_.default={HEO_HOME_BANNER_ENABLE:!0,HEO_SITE_CREATE_TIME:"2021-09-21",HEO_NOTICE_BAR:[{title:"欢迎来到我的博客",url:"https://blog.tangly1024.com"},{title:"访问文档中心获取更多帮助",url:"https://docs.tangly1024.com"}],HEO_HERO_TITLE_1:"分享编程",HEO_HERO_TITLE_2:"与思维认知",HEO_HERO_TITLE_3:"TANGLY1024.COM",HEO_HERO_TITLE_4:"新版上线",HEO_HERO_TITLE_5:"NotionNext4.0 轻松定制主题",HEO_HERO_TITLE_LINK:"https://tangly1024.com",HEO_HERO_CATEGORY_1:{title:"必看精选",url:"/tag/必看精选"},HEO_HERO_CATEGORY_2:{title:"热门文章",url:"/tag/热门文章"},HEO_HERO_CATEGORY_3:{title:"实用教程",url:"/tag/实用教程"},HEO_HERO_RECOMMEND_POST_TAG:"推荐",HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME:!1,HEO_INFOCARD_GREETINGS:["你好！我是","\uD83D\uDD0D 分享与热心帮助","\uD83E\uDD1D 专修交互与设计","\uD83C\uDFC3 脚踏实地行动派","\uD83C\uDFE0 智能家居小能手","\uD83E\uDD16️ 数码科技爱好者","\uD83E\uDDF1 团队小组发动机"],HEO_INFO_CARD_URL:"https://github.com/tangly1024/NotionNext",HEO_GROUP_ICONS:[{title_1:"AfterEffect",img_1:"/images/heo/20239df3f66615b532ce571eac6d14ff21cf072602.webp",color_1:"#989bf8",title_2:"Sketch",img_2:"/images/heo/2023e0ded7b724a39f12d59c3dc8fbdc7cbe074202.webp",color_2:"#ffffff"},{title_1:"Docker",img_1:"/images/heo/20231108a540b2862d26f8850172e4ea58ed075102.webp",color_1:"#57b6e6",title_2:"Photoshop",img_2:"/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp",color_2:"#4082c3"},{title_1:"FinalCutPro",img_1:"/images/heo/20233e777652412247dd57fd9b48cf997c01070702.webp",color_1:"#ffffff",title_2:"Python",img_2:"/images/heo/20235c0731cd4c0c95fc136a8db961fdf963071502.webp",color_2:"#ffffff"},{title_1:"Swift",img_1:"/images/heo/202328bbee0b314297917b327df4a704db5c072402.webp",color_1:"#eb6840",title_2:"Principle",img_2:"/images/heo/2023f76570d2770c8e84801f7e107cd911b5073202.webp",color_2:"#8f55ba"},{title_1:"illustrator",img_1:"/images/heo/20237359d71b45ab77829cee5972e36f8c30073902.webp",color_1:"#f29e39",title_2:"CSS3",img_2:"/images/heo/20237c548846044a20dad68a13c0f0e1502f074602.webp",color_2:"#2c51db"},{title_1:"JS",img_1:"/images/heo/2023786e7fc488f453d5fb2be760c96185c0075502.webp",color_1:"#f7cb4f",title_2:"HTML",img_2:"/images/heo/202372b4d760fd8a497d442140c295655426070302.webp",color_2:"#e9572b"},{title_1:"Git",img_1:"/images/heo/2023ffa5707c4e25b6beb3e6a3d286ede4c6071102.webp",color_1:"#df5b40",title_2:"Rhino",img_2:"/images/heo/20231ca53fa0b09a3ff1df89acd7515e9516173302.webp",color_2:"#1f1f1f"}],HEO_SOCIAL_CARD:!0,HEO_SOCIAL_CARD_TITLE_1:"交流频道",HEO_SOCIAL_CARD_TITLE_2:"加入我们的社群讨论分享",HEO_SOCIAL_CARD_TITLE_3:"点击加入社群",HEO_SOCIAL_CARD_URL:"https://docs.tangly1024.com/article/how-to-question",HEO_MENU_INDEX:!0,HEO_MENU_CATEGORY:!0,HEO_MENU_TAG:!0,HEO_MENU_ARCHIVE:!0,HEO_MENU_SEARCH:!0,HEO_POST_LIST_COVER:!0,HEO_POST_LIST_COVER_HOVER_ENLARGE:!1,HEO_POST_LIST_COVER_DEFAULT:!0,HEO_POST_LIST_SUMMARY:!0,HEO_POST_LIST_PREVIEW:!1,HEO_POST_LIST_IMG_CROSSOVER:!0,HEO_ARTICLE_ADJACENT:!0,HEO_ARTICLE_COPYRIGHT:!0,HEO_ARTICLE_RECOMMEND:!0,HEO_WIDGET_LATEST_POSTS:!0,HEO_WIDGET_ANALYTICS:!1,HEO_WIDGET_TO_TOP:!0,HEO_WIDGET_TO_COMMENT:!0,HEO_WIDGET_DARK_MODE:!0,HEO_WIDGET_TOC:!0}},9008:function(e,_,t){e.exports=t(42636)}}]);