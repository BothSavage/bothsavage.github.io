"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[65626,54365,48220],{54365:function(n,e,l){l.r(e),l.d(e,{MenuItemDrop:function(){return MenuItemDrop}});var i=l(85893),t=l(41664),a=l.n(t),o=l(67294);let MenuItemDrop=n=>{var e,l;let{link:t}=n,[s,r]=(0,o.useState)(!1),E=(null==t?void 0:null===(e=t.subMenus)||void 0===e?void 0:e.length)>0;return t&&t.show?(0,i.jsxs)("div",{onMouseOver:()=>r(!0),onMouseOut:()=>r(!1),children:[!E&&(0,i.jsxs)(a(),{href:null==t?void 0:t.to,target:(null==t?void 0:null===(l=t.to)||void 0===l?void 0:l.indexOf("http"))===0?"_blank":"_self",className:"font-sans menu-link pl-2 pr-4 text-gray-700 dark:text-gray-200 no-underline tracking-widest pb-1",children:[(null==t?void 0:t.icon)&&(0,i.jsx)("i",{className:null==t?void 0:t.icon})," ",null==t?void 0:t.name,E&&(0,i.jsx)("i",{className:"px-2 fa fa-angle-down"})]}),E&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"cursor-pointer font-sans menu-link pl-2 pr-4 text-gray-700 dark:text-gray-200 no-underline tracking-widest pb-1",children:[(null==t?void 0:t.icon)&&(0,i.jsx)("i",{className:null==t?void 0:t.icon})," ",null==t?void 0:t.name,(0,i.jsx)("i",{className:"px-2 fa fa-angle-down duration-300  ".concat(s?"rotate-180":"rotate-0")})]})}),E&&(0,i.jsx)("ul",{style:{backdropFilter:"blur(3px)"},className:"".concat(s?"visible opacity-100 top-12":"invisible opacity-0 top-20"," drop-shadow-md overflow-hidden rounded-md bg-white transition-all duration-300 z-20 absolute block  "),children:t.subMenus.map((n,e)=>{var l;return(0,i.jsx)("li",{className:"cursor-pointer hover:bg-indigo-300 text-gray-900 hover:text-black tracking-widest transition-all duration-200 dark:border-gray-800  py-1 pr-6 pl-3",children:(0,i.jsx)(a(),{href:n.to,target:(null==t?void 0:null===(l=t.to)||void 0===l?void 0:l.indexOf("http"))===0?"_blank":"_self",children:(0,i.jsxs)("span",{className:"text-sm text-nowrap font-extralight",children:[(null==t?void 0:t.icon)&&(0,i.jsx)("i",{className:null==n?void 0:n.icon,children:" \xa0 "}),n.title]})})},e)})})]}):null}},65626:function(n,e,l){l.r(e),l.d(e,{MenuListTop:function(){return MenuListTop}});var i=l(85893),t=l(54110),a=l(48220),o=l(66043),s=l(54365);let MenuListTop=n=>{let{customNav:e,customMenu:l}=n,{locale:r}=(0,t.O)(),E=[{id:1,icon:"fa-solid fa-house",name:r.NAV.INDEX,to:"/",show:(0,o.J)("HEXO_MENU_INDEX",null,a.default)},{id:2,icon:"fas fa-search",name:r.NAV.SEARCH,to:"/search",show:(0,o.J)("HEXO_MENU_SEARCH",null,a.default)},{id:3,icon:"fas fa-archive",name:r.NAV.ARCHIVE,to:"/archive",show:(0,o.J)("HEXO_MENU_ARCHIVE",null,a.default)}];e&&(E=E.concat(e));for(let n=0;n<E.length;n++)E[n].id!==n&&(E[n].id=n);return((0,o.J)("CUSTOM_MENU")&&(E=l),E&&0!==E.length)?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("nav",{id:"nav-mobile",className:"leading-8 justify-center font-light w-full flex",children:null==E?void 0:E.map((n,e)=>n&&n.show&&(0,i.jsx)(s.MenuItemDrop,{link:n},e))})}):null}},48220:function(n,e,l){l.r(e),e.default={HEXO_HOME_BANNER_ENABLE:!0,HEXO_HOME_BANNER_GREETINGS:["Hi，我是一个程序员","Hi，我是一个打工人","Hi，我是一个干饭人","欢迎来到我的博客\uD83C\uDF89"],HEXO_HOME_NAV_BUTTONS:!0,HEXO_HOME_NAV_BACKGROUND_IMG_FIXED:!1,HEXO_SHOW_START_READING:!0,HEXO_MENU_INDEX:!0,HEXO_MENU_CATEGORY:!0,HEXO_MENU_TAG:!0,HEXO_MENU_ARCHIVE:!0,HEXO_MENU_SEARCH:!0,HEXO_POST_LIST_COVER:!0,HEXO_POST_LIST_COVER_HOVER_ENLARGE:!1,HEXO_POST_LIST_COVER_DEFAULT:!0,HEXO_POST_LIST_SUMMARY:!0,HEXO_POST_LIST_PREVIEW:!1,HEXO_POST_LIST_IMG_CROSSOVER:!0,HEXO_ARTICLE_ADJACENT:!0,HEXO_ARTICLE_COPYRIGHT:!0,HEXO_ARTICLE_RECOMMEND:!0,HEXO_WIDGET_LATEST_POSTS:!0,HEXO_WIDGET_ANALYTICS:!1,HEXO_WIDGET_TO_TOP:!0,HEXO_WIDGET_TO_COMMENT:!0,HEXO_WIDGET_DARK_MODE:!0,HEXO_WIDGET_TOC:!0}}}]);