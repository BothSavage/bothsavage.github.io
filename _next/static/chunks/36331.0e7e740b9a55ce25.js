"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[36331,2031,92620,40457],{2031:function(e,t,n){n.r(t),n.d(t,{MenuItemCollapse:function(){return MenuItemCollapse}});var a=n(85893),l=n(41766),r=n(41664),s=n.n(r),i=n(11163),o=n(67294);let MenuItemCollapse=e=>{var t,n;let{link:r}=e,[c,d]=(0,o.useState)(!1),u=(null==r?void 0:null===(t=r.subMenus)||void 0===t?void 0:t.length)>0,[h,x]=(0,o.useState)(!1),m=(0,i.useRouter)();if(!r||!r.show)return null;let v=m.pathname===r.to||m.asPath===r.to;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:(v?"bg-gray-600 text-white hover:text-white":"hover:text-gray-600")+" px-5 w-full text-left duration-200 dark:bg-hexo-black-gray dark:border-black",onClick:()=>{d(!c)},children:[!u&&(0,a.jsx)(s(),{href:null==r?void 0:r.to,target:(null==r?void 0:null===(n=r.to)||void 0===n?void 0:n.indexOf("http"))===0?"_blank":"_self",className:"dark:text-gray-200 py-2 w-full my-auto items-center justify-between flex  ",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"".concat(r.icon," text-center w-4 mr-4")}),r.name]})}),u&&(0,a.jsxs)("div",{onClick:u?()=>{x(!h)}:null,className:"py-2 font-extralight flex justify-between cursor-pointer  dark:text-gray-200 no-underline tracking-widest",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"".concat(r.icon," text-center w-4 mr-4")}),r.name]}),(0,a.jsx)("div",{className:"inline-flex items-center ",children:(0,a.jsx)("i",{className:"px-2 fas fa-chevron-right transition-all duration-200 ".concat(h?"rotate-90":"")})})]})]}),u&&(0,a.jsx)(l.Z,{isOpen:h,onHeightChange:e.onHeightChange,children:r.subMenus.map((e,t)=>{var n;return(0,a.jsx)("div",{className:"whitespace-nowrap dark:text-gray-200 not:last-child:border-b-0 border-b dark:border-gray-800 py-2 px-14 cursor-pointer hover:bg-gray-100 font-extralight dark:bg-black text-left justify-start text-gray-600 bg-gray-50 dark:hover:bg-gray-900 tracking-widest transition-all duration-200",children:(0,a.jsx)(s(),{href:e.to,target:(null==r?void 0:null===(n=r.to)||void 0===n?void 0:n.indexOf("http"))===0?"_blank":"_self",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"".concat(e.icon," text-center w-3 mr-3 text-xs")}),e.title]})})},t)})})]})}},92620:function(e,t,n){n.r(t),n.d(t,{MenuItemDrop:function(){return MenuItemDrop}});var a=n(85893),l=n(41664),r=n.n(l),s=n(67294);let MenuItemDrop=e=>{var t,n,l;let{link:i}=e,[o,c]=(0,s.useState)(!1),d=(null==i?void 0:null===(t=i.subMenus)||void 0===t?void 0:t.length)>0;return(0,a.jsxs)("li",{onMouseOver:()=>c(!0),onMouseOut:()=>c(!1),className:"relative py-1 duration-500 justify-between text-gray-500 dark:text-gray-300 hover:text-black hover:underline cursor-pointer flex flex-nowrap items-center ",children:[!d&&(0,a.jsxs)(r(),{href:null==i?void 0:i.to,target:(null==i?void 0:null===(n=i.to)||void 0===n?void 0:n.indexOf("http"))===0?"_blank":"_self",className:"w-full my-auto items-center justify-between flex ",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"".concat(i.icon," text-center w-4 mr-2")}),i.name]}),i.slot]}),d&&(0,a.jsxs)("div",{className:"w-full my-auto items-center justify-between flex ",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"".concat(i.icon," text-center w-4 mr-2")}),i.name]}),i.slot,d&&(0,a.jsx)("div",{className:"text-right",children:(0,a.jsx)("i",{className:"px-2 fas fa-chevron-right duration-500 transition-all ".concat(o?" rotate-180":"")})})]}),d&&(0,a.jsx)("ul",{className:"".concat(o?"visible opacity-100 left-52":"invisible opacity-0 left-40"," z-20 py-1 absolute right-0 top-0 w-full border-gray-100  bg-white  dark:bg-black dark:border-gray-800 transition-all duration-300 drop-shadow-lg "),children:null==i?void 0:null===(l=i.subMenus)||void 0===l?void 0:l.map((e,t)=>{var n;return(0,a.jsx)("li",{children:(0,a.jsxs)(r(),{href:e.to,target:(null==i?void 0:null===(n=i.to)||void 0===n?void 0:n.indexOf("http"))===0?"_blank":"_self",className:"my-auto py-1 px-2 items-center justify-start flex text-gray-500 dark:text-gray-300 hover:text-black  hover:bg-gray-50 dark:hover:bg-gray-900 tracking-widest transition-all duration-200 dark:border-gray-800 ",children:[e.icon&&(0,a.jsx)("i",{className:"".concat(e.icon," w-4 text-center ")}),(0,a.jsx)("div",{className:"ml-2 whitespace-nowrap",children:e.name}),e.slot]})},t)})})]})}},36331:function(e,t,n){n.r(t),n.d(t,{MenuList:function(){return MenuList}});var a=n(85893),l=n(54110),r=n(40457),s=n(66043),i=n(92620),o=n(2031);let MenuList=e=>{let{customNav:t,customMenu:n}=e,{locale:c}=(0,l.O)(),d=[{name:c.NAV.INDEX,to:"/",show:!0},{name:c.COMMON.CATEGORY,to:"/category",show:(0,s.J)("FUKASAWA_MENU_CATEGORY",null,r.default)},{name:c.COMMON.TAGS,to:"/tag",show:(0,s.J)("FUKASAWA_MENU_TAG",null,r.default)},{name:c.NAV.ARCHIVE,to:"/archive",show:(0,s.J)("FUKASAWA_MENU_ARCHIVE",null,r.default)},{name:c.NAV.SEARCH,to:"/search",show:(0,s.J)("FUKASAWA_MENU_SEARCH",null,r.default)}];return(t&&(d=d.concat(t)),(0,s.J)("CUSTOM_MENU")&&(d=n),d&&0!==d.length)?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("menu",{id:"nav-pc",className:"hidden md:block font-sans text-sm z-10",children:null==d?void 0:d.map((e,t)=>(0,a.jsx)(i.MenuItemDrop,{link:e},t))}),(0,a.jsx)("menu",{id:"nav-mobile",className:"block md:hidden font-sans text-sm z-10 pb-1",children:null==d?void 0:d.map((t,n)=>(0,a.jsx)(o.MenuItemCollapse,{link:t,onHeightChange:e.onHeightChange},n))})]}):null}},40457:function(e,t,n){n.r(t),t.default={FUKASAWA_MAILCHIMP_FORM:!1,FUKASAWA_POST_LIST_COVER:!0,FUKASAWA_POST_LIST_COVER_FORCE:!1,FUKASAWA_POST_LIST_PREVIEW:!1,FUKASAWA_MENU_CATEGORY:!0,FUKASAWA_MENU_TAG:!0,FUKASAWA_MENU_ARCHIVE:!0,FUKASAWA_MENU_SEARCH:!1,FUKASAWA_SIDEBAR_COLLAPSE_BUTTON:!0,FUKASAWA_SIDEBAR_COLLAPSE_SATUS_DEFAULT:!1}}}]);