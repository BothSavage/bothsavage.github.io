"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[20057,44127,8417,78,5033,58654,47701,96272,20493],{44127:function(e,a,t){t.r(a);var r=t(85893),s=t(54110),l=t(5152),n=t.n(l);let d=n()(()=>Promise.resolve().then(t.bind(t,71272)),{loadableGenerated:{webpack:()=>[71272]}});a.default=e=>{let{post:a,className:t}=e,{locale:l}=(0,s.O)();return a?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"text-sm pb-1 px-2 flex flex-nowrap justify-between",children:(0,r.jsxs)("div",{className:"font-light text-gray-600  dark:text-gray-200",children:[(0,r.jsx)("i",{className:"mr-2 fas fa-bullhorn"}),l.COMMON.ANNOUNCEMENT]})}),a&&(0,r.jsx)("div",{id:"announcement-content","data-aos":"fade-down","data-aos-duration":"500","data-aos-delay":"200","data-aos-once":"true","data-aos-anchor-placement":"top-bottom",children:(0,r.jsx)(d,{post:a,className:"text-center "})})]}):(0,r.jsx)(r.Fragment,{})}},78:function(e,a,t){t.r(a);var r=t(85893);a.default=e=>{let{children:a,headerSlot:t}=e;return(0,r.jsxs)("div",{...e,children:[(0,r.jsx)(r.Fragment,{children:t}),(0,r.jsx)("section",{className:"shadow px-2 py-4 bg-white dark:bg-hexo-black-gray hover:shadow-xl duration-200",children:a})]})}},5033:function(e,a,t){t.r(a);var r=t(85893),s=t(41664),l=t.n(s);a.default=e=>{let{currentCategory:a,categories:t}=e;return t?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{id:"category-list",className:"dark:border-gray-600 flex flex-wrap",children:t.map(e=>{let t=a===e.name;return(0,r.jsxs)(l(),{href:"/category/".concat(e.name),passHref:!0,className:(t?"hover:text-white dark:hover:text-white bg-gray-600 text-white ":"dark:text-gray-400 text-gray-500 hover:text-white hover:bg-gray-500 dark:hover:text-white")+"  text-sm w-full items-center duration-300 px-2  cursor-pointer py-1 font-light",children:[(0,r.jsx)("i",{className:"".concat(t?"text-white fa-folder-open ":"text-gray-400 fa-folder "," mr-2 fas")}),e.name,"(",e.count,")"]},e.name)})})}):(0,r.jsx)(r.Fragment,{})}},58654:function(e,a,t){t.r(a);var r=t(85893),s=t(66043),l=t(54110),n=t(41664),d=t.n(n),i=t(11163);a.default=e=>{let{latestPosts:a}=e,t=(0,i.useRouter)().asPath,{locale:n}=(0,l.O)();return a?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"text-sm pb-1 px-2 flex flex-nowrap justify-between",children:(0,r.jsxs)("div",{className:"font-light text-gray-600  dark:text-gray-200",children:[(0,r.jsx)("i",{className:"mr-2 fas fa-history"}),n.COMMON.LATEST_POSTS]})}),a.map(e=>{let a=t==="".concat((0,s.J)("SUB_PATH",""),"/").concat(e.slug);return(0,r.jsx)(d(),{title:e.title,href:"".concat((0,s.J)("SUB_PATH",""),"/").concat(e.slug),passHref:!0,className:"my-1 flex font-light",children:(0,r.jsx)("div",{className:(a?"text-white  bg-gray-600 ":"text-gray-500 dark:text-gray-400 ")+" text-xs py-1.5 flex hover:bg-gray-500 px-2 duration-200 w-full hover:text-white dark:hover:text-white cursor-pointer",children:(0,r.jsx)("li",{className:"line-clamp-2",children:e.title})})},e.id)})]}):(0,r.jsx)(r.Fragment,{})}},20057:function(e,a,t){t.r(a);var r=t(85893),s=t(54110),l=t(41664),n=t.n(l),d=t(78),i=t(5033),c=t(47701),x=t(8417),o=t(11163),h=t(5152),f=t.n(h),N=t(44127),u=t(58654),T=t(66043);let g=f()(()=>Promise.all([t.e(16688),t.e(917),t.e(82477),t.e(699)]).then(t.bind(t,699)),{loadableGenerated:{webpack:()=>[699]}});a.default=e=>{let{tagOptions:a,currentTag:t,slot:l,categoryOptions:h,currentCategory:f,notice:_,latestPosts:E}=e,{locale:m}=(0,s.O)(),j=(0,o.useRouter)(),p=_&&Object.keys(_).length>0;return(0,r.jsxs)("aside",{id:"right",className:(JSON.parse((0,T.J)("LAYOUT_SIDEBAR_REVERSE"))?"mr-4":"ml-4")+" space-y-4 hidden xl:block flex-col w-60 relative z-10",children:[(0,T.J)("NEXT_RIGHT_AD",null,x.default)&&(0,r.jsx)(d.default,{className:"mb-2",children:(0,r.jsx)("ins",{className:"adsbygoogle",style:{display:"block"},"data-adtest":"on","data-ad-client":"ca-pub-2708419466378217","data-ad-slot":"8807314373","data-ad-format":"auto","data-full-width-responsive":"true"})}),(0,r.jsxs)("div",{className:"sticky top-0 space-y-4 w-full",children:[p&&(0,r.jsx)(d.default,{children:(0,r.jsx)(N.default,{post:_})}),(0,T.J)("NEXT_RIGHT_LATEST_POSTS",null,x.default)&&(0,r.jsx)(d.default,{children:(0,r.jsx)(u.default,{latestPosts:E})}),l,(0,T.J)("NEXT_RIGHT_CATEGORY_LIST",null,x.default)&&"/category"!==j.asPath&&h&&(0,r.jsxs)(d.default,{children:[(0,r.jsxs)("div",{className:"text-sm px-2 flex flex-nowrap justify-between font-light",children:[(0,r.jsxs)("div",{className:"pb-2 text-gray-600 dark:text-gray-300",children:[(0,r.jsx)("i",{className:"mr-2 fas fa-th-list"}),m.COMMON.CATEGORY]}),(0,r.jsxs)(n(),{href:"/category",passHref:!0,className:"text-gray-400 hover:text-black dark:text-gray-400 dark:hover:text-white hover:underline cursor-pointer",children:[m.COMMON.MORE," ",(0,r.jsx)("i",{className:"fas fa-angle-double-right"})]})]}),(0,r.jsx)(i.default,{currentCategory:f,categories:h})]}),(0,T.J)("NEXT_RIGHT_TAG_LIST",null,x.default)&&"/tag"!==j.asPath&&a&&(0,r.jsxs)(d.default,{children:[(0,r.jsxs)("div",{className:"text-sm pb-1 px-2 flex flex-nowrap justify-between font-light dark:text-gray-200",children:[(0,r.jsxs)("div",{className:"text-gray-600 dark:text-gray-200",children:[(0,r.jsx)("i",{className:"mr-2 fas fa-tag"}),m.COMMON.TAGS]}),(0,r.jsxs)(n(),{href:"/tag",passHref:!0,className:"text-gray-400 hover:text-black  dark:hover:text-white hover:underline cursor-pointer",children:[m.COMMON.MORE," ",(0,r.jsx)("i",{className:"fas fa-angle-double-right"})]})]}),(0,r.jsx)("div",{className:"px-2 pt-2",children:(0,r.jsx)(c.default,{tags:a,currentTag:t})})]}),(0,T.J)("COMMENT_WALINE_SERVER_URL")&&(0,T.J)("COMMENT_WALINE_RECENT")&&(0,r.jsxs)(d.default,{children:[(0,r.jsx)("div",{className:"text-sm pb-1 px-2 flex flex-nowrap justify-between font-light dark:text-gray-200",children:(0,r.jsxs)("div",{className:"text-gray-600 dark:text-gray-200",children:[(0,r.jsx)("i",{className:"mr-2 fas fa-tag"}),m.COMMON.RECENT_COMMENTS]})}),(0,r.jsx)("div",{className:"px-2 pt-2",children:(0,r.jsx)(g,{})})]})]})]})}},47701:function(e,a,t){t.r(a);var r=t(85893),s=t(96272);a.default=e=>{let{tags:a,currentTag:t}=e;return a?(0,r.jsx)("div",{id:"tags-group",className:"dark:border-gray-600 w-66 space-y-2",children:a.map(e=>{let a=e.name===t;return(0,r.jsx)(s.default,{tag:e,selected:a},e.name)})}):(0,r.jsx)(r.Fragment,{})}},96272:function(e,a,t){t.r(a);var r=t(85893),s=t(41664),l=t.n(s);a.default=e=>{let{tag:a,selected:t=!1}=e;return(0,r.jsx)(l(),{href:t?"/":"/tag/".concat(encodeURIComponent(a.name)),passHref:!0,className:"cursor-pointer inline-block rounded hover:bg-gray-500 hover:text-white duration-200\n        mr-2 py-0.5 px-1 text-xs whitespace-nowrap dark:hover:text-white\n         ".concat(t?"text-white dark:text-gray-300 bg-black dark:bg-black dark:hover:bg-gray-900":"text-gray-600 hover:shadow-xl dark:border-gray-400 notion-".concat(a.color,"_background dark:bg-gray-800")),children:(0,r.jsxs)("div",{className:"font-light dark:text-gray-400",children:[t&&(0,r.jsx)("i",{className:"fas fa-tag mr-1"})," ",a.name+(a.count?"(".concat(a.count,")"):"")," "]})},a)}},8417:function(e,a,t){t.r(a),a.default={NEXT_HOME_BANNER:!0,NEXT_HOME_BANNER_STRINGS:["Hi，我是一个程序员","Hi，我是一个打工人","Hi，我是一个干饭人","欢迎来到我的博客\uD83C\uDF89"],NEXT_NAV_TYPE:"normal",NEXT_POST_LIST_COVER:!1,NEXT_POST_LIST_PREVIEW:!0,NEXT_POST_LIST_SUMMARY:!1,NEXT_POST_HEADER_IMAGE_VISIBLE:!1,NEXT_RIGHT_BAR:!0,NEXT_RIGHT_LATEST_POSTS:!0,NEXT_RIGHT_CATEGORY_LIST:!0,NEXT_RIGHT_TAG_LIST:!0,NEXT_RIGHT_AD:!1,NEXT_MENU_HOME:!0,NEXT_MENU_CATEGORY:!0,NEXT_MENU_TAG:!0,NEXT_MENU_ARCHIVE:!0,NEXT_MENU_SEARCH:!0,NEXT_WIDGET_TO_TOP:!0,NEXT_WIDGET_TO_BOTTOM:!1,NEXT_WIDGET_DARK_MODE:!1,NEXT_WIDGET_TOC:!0,NEXT_ARTICLE_RELATE_POSTS:!0,NEXT_ARTICLE_COPYRIGHT:!0,NEXT_ARTICLE_INFO:!0}}}]);