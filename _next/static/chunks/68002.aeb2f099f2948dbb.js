"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68002,70151,99995],{70151:function(n,e,l){l.r(e),l.d(e,{MenuItemDrop:function(){return MenuItemDrop}});var t=l(85893),a=l(41664),i=l.n(a),o=l(67294);let MenuItemDrop=n=>{var e,l;let{link:a}=n,[s,r]=(0,o.useState)(!1),E=(null==a?void 0:null===(e=a.subMenus)||void 0===e?void 0:e.length)>0;return a&&a.show?(0,t.jsxs)("div",{onMouseOver:()=>r(!0),onMouseOut:()=>r(!1),children:[!E&&(0,t.jsxs)(i(),{href:null==a?void 0:a.to,target:(null==a?void 0:null===(l=a.to)||void 0===l?void 0:l.indexOf("http"))===0?"_blank":"_self",className:"font-sans menu-link pl-2 pr-4  no-underline tracking-widest pb-1",children:[(null==a?void 0:a.icon)&&(0,t.jsx)("i",{className:null==a?void 0:a.icon})," ",null==a?void 0:a.name,E&&(0,t.jsx)("i",{className:"px-2 fa fa-angle-down"})]}),E&&(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"cursor-pointer font-sans menu-link pl-2 pr-4  no-underline tracking-widest pb-1",children:[(null==a?void 0:a.icon)&&(0,t.jsx)("i",{className:null==a?void 0:a.icon})," ",null==a?void 0:a.name,(0,t.jsx)("i",{className:"px-2 fa fa-angle-down duration-300  ".concat(s?"rotate-180":"rotate-0")})]})}),E&&(0,t.jsx)("ul",{style:{backdropFilter:"blur(3px)"},className:"".concat(s?"visible opacity-100 top-12":"invisible opacity-0 top-20"," drop-shadow-md overflow-hidden rounded-md bg-white transition-all duration-300 z-20 absolute block  "),children:a.subMenus.map((n,e)=>{var l;return(0,t.jsx)("li",{className:"cursor-pointer hover:bg-indigo-300 text-gray-900 hover:text-black tracking-widest transition-all duration-200 dark:border-gray-800  py-1 pr-6 pl-3",children:(0,t.jsx)(i(),{href:n.to,target:(null==a?void 0:null===(l=a.to)||void 0===l?void 0:l.indexOf("http"))===0?"_blank":"_self",children:(0,t.jsxs)("span",{className:"text-sm text-nowrap font-extralight",children:[(null==a?void 0:a.icon)&&(0,t.jsx)("i",{className:null==n?void 0:n.icon,children:" \xa0 "}),n.title]})})},e)})})]}):null}},68002:function(n,e,l){l.r(e),l.d(e,{MenuListTop:function(){return MenuListTop}});var t=l(85893),a=l(54110),i=l(99995),o=l(70151),s=l(66043);let MenuListTop=n=>{let{customNav:e,customMenu:l}=n,{locale:r}=(0,a.O)(),E=[{icon:"fas fa-archive",name:r.NAV.ARCHIVE,to:"/archive",show:(0,s.J)("MATERY_MENU_ARCHIVE",null,i.default)},{icon:"fas fa-search",name:r.NAV.SEARCH,to:"/search",show:(0,s.J)("MATERY_MENU_SEARCH",null,i.default)},{icon:"fas fa-folder",name:r.COMMON.CATEGORY,to:"/category",show:(0,s.J)("MATERY_MENU_CATEGORY",null,i.default)},{icon:"fas fa-tag",name:r.COMMON.TAGS,to:"/tag",show:(0,s.J)("MATERY_MENU_TAG",null,i.default)}];return(e&&(E=e.concat(E)),(0,s.J)("CUSTOM_MENU")&&(E=l),E&&0!==E.length)?(0,t.jsx)("nav",{id:"nav",className:"leading-8 flex justify-center  font-light w-full",children:null==E?void 0:E.map((n,e)=>(0,t.jsx)(o.MenuItemDrop,{link:n},e))}):null}},99995:function(n,e,l){l.r(e),e.default={MATERY_HOME_BANNER_ENABLE:!0,MATERY_HOME_BANNER_GREETINGS:["Hi，我是一个程序员","Hi，我是一个打工人","Hi，我是一个干饭人","欢迎来到我的博客\uD83C\uDF89"],MATERY_HOME_NAV_BUTTONS:!0,MATERY_HOME_NAV_BACKGROUND_IMG_FIXED:!1,MATERY_SHOW_START_READING:!0,MATERY_MENU_CATEGORY:!0,MATERY_MENU_TAG:!0,MATERY_MENU_ARCHIVE:!0,MATERY_MENU_SEARCH:!0,MATERY_POST_LIST_COVER:!0,MATERY_POST_LIST_SUMMARY:!0,MATERY_POST_LIST_PREVIEW:!0,MATERY_ARTICLE_ADJACENT:!0,MATERY_ARTICLE_COPYRIGHT:!0,MATERY_ARTICLE_RECOMMEND:!0,MATERY_WIDGET_LATEST_POSTS:!0,MATERY_WIDGET_ANALYTICS:!1,MATERY_WIDGET_TO_TOP:!0,MATERY_WIDGET_TO_COMMENT:!0,WIDGET_DARK_MODE:!0,MATERY_WIDGET_TOC:!0}}}]);