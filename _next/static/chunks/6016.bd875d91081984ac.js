"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6016,54867,16201,40301,66628,54662,37744,6721],{57404:function(e,a,t){t.d(a,{Z:function(){return AlgoliaSearchModal}});var n=t(85893),r=t(67294),l=t(24955),s=t.n(l),o=t(18065),i=t(41664),d=t.n(i),c=t(54110),u=t(23493),x=t.n(u),m=t(66043);function AlgoliaSearchModal(e){let{cRef:a}=e,[t,l]=(0,r.useState)([]),[i,d]=(0,r.useState)(!1),[c,u]=(0,r.useState)(0),[h,p]=(0,r.useState)(null),[b,f]=(0,r.useState)(0),[g,v]=(0,r.useState)(0),[j,y]=(0,r.useState)(0);(0,r.useImperativeHandle)(a,()=>({openSearch:()=>{d(!0)}}));let k=s()((0,m.J)("ALGOLIA_APP_ID"),(0,m.J)("ALGOLIA_SEARCH_ONLY_APP_KEY")),N=k.initIndex((0,m.J)("ALGOLIA_INDEX")),handleSearch=async(e,a)=>{if(p(e),u(a),l([]),y(0),f(0),v(0),e&&""!==e)try{let t=await N.search(e,{page:a,hitsPerPage:10}),{hits:n,nbHits:r,nbPages:s,processingTimeMS:i}=t;y(i),f(s),v(r),l(n);let d=document.getElementById("search-wrapper").getElementsByClassName("replace");setTimeout(()=>{(0,o.Z)({doms:d,search:e,target:{element:"span",className:"text-blue-600 border-b border-dashed"}})},150)}catch(e){console.error("Algolia search error:",e)}},w=(0,r.useRef)(x()(handleSearch,300)),handleInputChange=e=>{let a=e.target.value;w.current(a,0)},closeModal=()=>{d(!1)};return(0,m.J)("ALGOLIA_APP_ID")?(0,n.jsxs)("div",{id:"search-wrapper",className:"".concat(i?"opacity-100":"invisible opacity-0 pointer-events-none"," z-30 fixed h-screen w-screen left-0 top-0 mt-12 flex items-start justify-center"),children:[(0,n.jsxs)("div",{className:"".concat(i?"opacity-100":"invisible opacity-0 translate-y-10"," flex flex-col justify-between w-full min-h-[10rem] max-w-xl dark:bg-hexo-black-gray dark:border-gray-800 bg-white dark:bg- p-5 rounded-lg z-50 shadow border hover:border-blue-600 duration-300 transition-all "),children:[(0,n.jsxs)("div",{className:"flex justify-between items-center",children:[(0,n.jsx)("div",{className:"text-2xl text-blue-600 font-bold",children:"搜索"}),(0,n.jsx)("div",{children:(0,n.jsx)("i",{className:"text-gray-600 fa-solid fa-xmark p-1 cursor-pointer hover:text-blue-600",onClick:closeModal})})]}),(0,n.jsx)("input",{type:"text",placeholder:"在这里输入搜索关键词...",onChange:e=>handleInputChange(e),className:"text-black dark:text-gray-200 bg-gray-50 dark:bg-gray-600 outline-blue-500 w-full px-4 my-2 py-1 mb-4 border rounded-md"}),(0,n.jsx)("div",{className:"mb-4",children:(0,n.jsx)(TagGroups,{})}),(0,n.jsx)("ul",{children:t.map(e=>(0,n.jsx)("li",{className:"replace my-2",children:(0,n.jsx)("a",{href:"".concat((0,m.J)("SUB_PATH",""),"/").concat(e.slug),className:"font-bold hover:text-blue-600 text-black dark:text-gray-200",children:e.title})},e.objectID))}),(0,n.jsx)(Pagination,{totalPage:b,page:c,switchPage:e=>{w.current(h,e)}}),(0,n.jsx)("div",{children:g>0&&(0,n.jsxs)("div",{children:["共搜索到 ",g," 条结果，用时 ",j," 毫秒"]})}),(0,n.jsxs)("div",{className:"text-gray-600 mt-2",children:[(0,n.jsxs)("span",{children:[(0,n.jsx)("i",{className:"fa-brands fa-algolia"})," Algolia 提供搜索服务"]})," "]})]}),(0,n.jsx)("div",{onClick:closeModal,className:"z-30 fixed top-0 left-0 w-full h-full flex items-center justify-center glassmorphism"})]}):(0,n.jsx)(n.Fragment,{})}function TagGroups(e){let{tagOptions:a}=(0,c.O)(),t=null==a?void 0:a.slice(0,10);return(0,n.jsx)("div",{id:"tags-group",className:"dark:border-gray-700 space-y-2",children:null==t?void 0:t.map((e,a)=>(0,n.jsx)(d(),{passHref:!0,href:"/tag/".concat(encodeURIComponent(e.name)),className:"cursor-pointer inline-block whitespace-nowrap",children:(0,n.jsxs)("div",{className:" flex items-center text-black dark:text-gray-300 hover:bg-blue-600 dark:hover:bg-yellow-600 hover:scale-110 hover:text-white rounded-lg px-2 py-0.5 duration-150 transition-all",children:[(0,n.jsxs)("div",{className:"text-lg",children:[e.name," "]}),e.count?(0,n.jsx)("sup",{className:"relative ml-1",children:e.count}):(0,n.jsx)(n.Fragment,{})]})},a))})}function Pagination(e){let{totalPage:a,page:t,switchPage:r}=e;if(a<=0)return(0,n.jsx)(n.Fragment,{});let l=[];for(let e=0;e<a;e++){let a=t===e;l.push(function(e,a,t){return(0,n.jsx)("div",{onClick:()=>t(e),className:"".concat(a?"font-bold text-white bg-blue-600 rounded":"hover:text-blue-600 hover:font-bold"," text-center cursor-pointer  w-6 h-6 "),children:e+1})}(e,a,r))}return(0,n.jsx)("div",{className:"flex space-x-1 w-full justify-center py-1",children:l.map(e=>e)})}},18065:function(e,a,t){t.d(a,{Z:function(){return replaceSearchResult}});var n=t(22006);async function replaceSearchResult(e){let{doms:a,search:t,target:r}=e;if(a&&t&&r)try{await (0,n.TY)("https://cdnjs.cloudflare.com/ajax/libs/mark.js/8.11.1/mark.min.js","js");let e=window.Mark;if(a instanceof HTMLCollection)for(let n of a){let a=RegExp(t,"gim"),l=new e(n);l.markRegExp(a,r)}else{let n=RegExp(t,"gim"),l=new e(a);l.markRegExp(n,r)}}catch(e){console.error("markjs 加载失败",e)}}},16201:function(e,a,t){t.r(a),t.d(a,{MenuItemCollapse:function(){return MenuItemCollapse}});var n=t(85893),r=t(41766),l=t(41664),s=t.n(l),o=t(67294);let MenuItemCollapse=e=>{var a,t;let{link:l}=e,[i,d]=(0,o.useState)(!1),c=(null==l?void 0:null===(a=l.subMenus)||void 0===a?void 0:a.length)>0,[u,x]=(0,o.useState)(!1);return l&&l.show?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"w-full px-8 py-3 text-left border-b dark:bg-hexo-black-gray dark:border-black",onClick:()=>{d(!i)},children:[!c&&(0,n.jsx)(s(),{href:null==l?void 0:l.to,target:(null==l?void 0:null===(t=l.to)||void 0===t?void 0:t.indexOf("http"))===0?"_blank":"_self",className:"font-extralight items-center flex justify-between pl-2 pr-4 dark:text-gray-200 no-underline tracking-widest pb-1",children:(0,n.jsxs)("span",{className:"text-blue-400 hover:text-red-400 transition-all items-center duration-200",children:[(null==l?void 0:l.icon)&&(0,n.jsx)("span",{className:"mr-2",children:(0,n.jsx)("i",{className:l.icon})}),null==l?void 0:l.name]})}),c&&(0,n.jsxs)("div",{onClick:c?()=>{x(!u)}:null,className:"font-extralight items-center flex justify-between pl-2 pr-4 cursor-pointer  dark:text-gray-200 no-underline tracking-widest pb-1",children:[(0,n.jsxs)("span",{className:"text-blue-400 hover:text-red-400 transition-all items-center duration-200",children:[(null==l?void 0:l.icon)&&(0,n.jsx)("span",{className:"mr-2",children:(0,n.jsx)("i",{className:l.icon})}),null==l?void 0:l.name]}),(0,n.jsx)("i",{className:"px-2 fa fa-plus transition-all duration-200 ".concat(u&&"rotate-45"," text-gray-400")})]})]}),c&&(0,n.jsx)(r.Z,{isOpen:u,onHeightChange:e.onHeightChange,children:l.subMenus.map((e,a)=>{var t;return(0,n.jsx)("div",{className:"font-extralight dark:bg-black text-left px-10 justify-start text-blue-400 bg-gray-50 hover:bg-gray-50 dark:hover:bg-gray-900 tracking-widest transition-all duration-200 border-b dark:border-gray-800 py-3 pr-6",children:(0,n.jsx)(s(),{href:e.to,target:(null==l?void 0:null===(t=l.to)||void 0===t?void 0:t.indexOf("http"))===0?"_blank":"_self",children:(0,n.jsxs)("span",{className:"ml-4 text-xs",children:[(null==e?void 0:e.icon)&&(0,n.jsx)("span",{className:"mr-2 w-4",children:(0,n.jsx)("i",{className:e.icon})}),e.title]})})},a)})})]}):null}},40301:function(e,a,t){t.r(a),t.d(a,{MenuItemDrop:function(){return MenuItemDrop}});var n=t(85893),r=t(41664),l=t.n(r),s=t(67294);let MenuItemDrop=e=>{var a,t;let{link:r}=e,[o,i]=(0,s.useState)(!1),d=(null==r?void 0:null===(a=r.subMenus)||void 0===a?void 0:a.length)>0;return r&&r.show?(0,n.jsxs)("div",{onMouseOver:()=>i(!0),onMouseOut:()=>i(!1),children:[!d&&(0,n.jsxs)(l(),{href:null==r?void 0:r.to,target:(null==r?void 0:null===(t=r.to)||void 0===t?void 0:t.indexOf("http"))===0?"_blank":"_self",className:"font-sans menu-link pl-2 pr-4 text-gray-700 dark:text-gray-200 no-underline tracking-widest pb-1",children:[(null==r?void 0:r.icon)&&(0,n.jsx)("span",{className:"mr-2",children:(0,n.jsx)("i",{className:r.icon})}),null==r?void 0:r.name,d&&(0,n.jsx)("i",{className:"px-2 fa fa-angle-down"})]}),d&&(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"cursor-pointer font-sans menu-link pl-2 pr-4 text-gray-700 dark:text-gray-200 no-underline tracking-widest pb-1",children:[(null==r?void 0:r.icon)&&(0,n.jsx)("span",{className:"mr-2",children:(0,n.jsx)("i",{className:r.icon})})," ",null==r?void 0:r.name,(0,n.jsx)("i",{className:"px-2 fas fa-chevron-down duration-500 transition-all ".concat(o?" rotate-180":"")})]})}),d&&(0,n.jsx)("ul",{className:"".concat(o?"visible opacity-100 top-12":"invisible opacity-0 top-10"," border-gray-100  bg-white  dark:bg-black dark:border-gray-800 transition-all duration-300 z-20 absolute block drop-shadow-lg "),children:r.subMenus.map((e,a)=>{var t;return(0,n.jsx)("li",{className:"not:last-child:border-b-0 border-b text-blue-500 hover:bg-gray-50 dark:hover:bg-gray-900 tracking-widest transition-all duration-200 dark:border-gray-800  py-3 pr-6 pl-2",children:(0,n.jsx)(l(),{href:e.to,target:(null==r?void 0:null===(t=r.to)||void 0===t?void 0:t.indexOf("http"))===0?"_blank":"_self",children:(0,n.jsxs)("span",{className:"text-sm text-nowrap font-extralight",children:[(null==e?void 0:e.icon)&&(0,n.jsx)("i",{className:null==e?void 0:e.icon,children:" \xa0 "}),e.title]})})},a)})})]}):null}},66628:function(e,a,t){t.r(a),t.d(a,{MenuList:function(){return MenuList}});var n=t(85893),r=t(41766),l=t(66043),s=t(54110),o=t(11163),i=t(67294),d=t(54662),c=t(16201),u=t(40301);let MenuList=e=>{let{customNav:a,customMenu:t}=e,{locale:x}=(0,s.O)(),[m,h]=(0,i.useState)(!1),closeMenu=e=>{h(!1)},p=(0,o.useRouter)(),b=(0,i.useRef)(null);(0,i.useEffect)(()=>{p.events.on("routeChangeStart",closeMenu)});let f=[{icon:"fas fa-search",name:x.NAV.SEARCH,to:"/search",show:(0,l.J)("SIMPLE_MENU_SEARCH",null,d.default)},{icon:"fas fa-archive",name:x.NAV.ARCHIVE,to:"/archive",show:(0,l.J)("SIMPLE_MENU_ARCHIVE",null,d.default)},{icon:"fas fa-folder",name:x.COMMON.CATEGORY,to:"/category",show:(0,l.J)("SIMPLE_MENU_CATEGORY",null,d.default)},{icon:"fas fa-tag",name:x.COMMON.TAGS,to:"/tag",show:(0,l.J)("SIMPLE_MENU_TAG",null,d.default)}];return(a&&(f=f.concat(a)),(0,l.J)("CUSTOM_MENU")&&(f=t),f&&0!==f.length)?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{id:"nav-menu-pc",className:"hidden md:flex my-auto",children:null==f?void 0:f.map((e,a)=>(0,n.jsx)(u.MenuItemDrop,{link:e},a))}),(0,n.jsxs)("div",{id:"nav-menu-mobile",className:"flex md:hidden my-auto justify-start",children:[(0,n.jsxs)("div",{onClick:()=>{h(!m)},className:"cursor-pointer hover:text-red-400 transition-all duration-200",children:[(0,n.jsx)("i",{className:"".concat(m&&"rotate-90"," transition-all duration-200 fa fa-bars mr-3")}),(0,n.jsx)("span",{children:m?"CLOSE":"MENU"})]}),(0,n.jsx)(r.Z,{collapseRef:b,className:"absolute w-full top-12 left-0",isOpen:m,children:(0,n.jsx)("div",{id:"menu-wrap",className:"bg-white dark:border-hexo-black-gray border",children:null==f?void 0:f.map((e,a)=>(0,n.jsx)(c.MenuItemCollapse,{link:e,onHeightChange:e=>{var a;return null===(a=b.current)||void 0===a?void 0:a.updateCollapseHeight(e)}},a))})})]})]}):null}},6721:function(e,a,t){t.r(a),t.d(a,{default:function(){return NavBar}});var n=t(85893),r=t(66043),l=t(11163),s=t(67294),o=t(54867),i=t(66628);function NavBar(e){let[a,t]=(0,s.useState)(!1),d=(0,l.useRouter)(),{searchModal:c}=(0,o.useSimpleGlobal)();return(0,n.jsx)("nav",{className:"w-full bg-white md:pt-0  relative z-20 shadow border-t border-gray-100 dark:border-hexo-black-gray dark:bg-black",children:(0,n.jsxs)("div",{id:"nav-bar-inner",className:"h-12 mx-auto max-w-9/10 justify-between items-center text-sm md:text-md md:justify-start",children:[(0,n.jsxs)("div",{className:"h-full w-full float-left text-center md:text-left flex flex-wrap items-stretch md:justify-start md:items-start space-x-4",children:[a&&(0,n.jsx)("input",{autoFocus:!0,id:"theme-simple-search",onKeyUp:e=>{if(13===e.keyCode){let e=document.getElementById("theme-simple-search").value;e&&d.push({pathname:"/search/"+e})}},className:"float-left w-full outline-none h-full px-4","aria-label":"Submit search",type:"search",name:"s",autoComplete:"off",placeholder:"Type then hit enter to search..."}),!a&&(0,n.jsx)(i.MenuList,{...e})]}),(0,n.jsx)("div",{className:"absolute right-12 h-full text-center px-2 flex items-center text-blue-400  cursor-pointer",children:(0,n.jsx)("i",{className:a?"fa-regular fa-circle-xmark":"fa-solid fa-magnifying-glass align-middle",onClick:()=>{(0,r.J)("ALGOLIA_APP_ID")?c.current.openSearch():t(!a)}})})]})})}},54662:function(e,a,t){t.r(a);var n=t(83454);let r={SIMPLE_LOGO_IMG:"/Logo.webp",SIMPLE_TOP_BAR:!0,SIMPLE_TOP_BAR_CONTENT:n.env.NEXT_PUBLIC_THEME_SIMPLE_TOP_TIPS||"",SIMPLE_LOGO_DESCRIPTION:n.env.NEXT_PUBLIC_THEME_SIMPLE_LOGO_DESCRIPTION||"<div>编程爱好者<br/>/互联网从业者<br/>/知识分享博主</div>",SIMPLE_AUTHOR_LINK:n.env.NEXT_PUBLIC_AUTHOR_LINK||"#",SIMPLE_POST_AD_ENABLE:n.env.NEXT_PUBLIC_SIMPLE_POST_AD_ENABLE||!1,SIMPLE_POST_COVER_ENABLE:n.env.NEXT_PUBLIC_SIMPLE_POST_COVER_ENABLE||!1,SIMPLE_MENU_CATEGORY:!0,SIMPLE_MENU_TAG:!0,SIMPLE_MENU_ARCHIVE:!0,SIMPLE_MENU_SEARCH:!0};a.default=r},54867:function(e,a,t){t.r(a),t.d(a,{Layout404:function(){return Layout404},LayoutArchive:function(){return LayoutArchive},LayoutCategoryIndex:function(){return LayoutCategoryIndex},LayoutIndex:function(){return LayoutIndex},LayoutPostList:function(){return LayoutPostList},LayoutSearch:function(){return LayoutSearch},LayoutSlug:function(){return LayoutSlug},LayoutTagIndex:function(){return LayoutTagIndex},THEME_CONFIG:function(){return r.default},useSimpleGlobal:function(){return useSimpleGlobal}});var n=t(85893),r=t(54662),l=t(67294),s=t(22006),o=t(54110),i=t(10912),d=t(66043),c=t(44080),u=t(41664),x=t.n(u),m=t(37744),h=t(18065),p=t(5152),b=t.n(p),f=t(71272),g=t(57404);let v=b()(()=>t.e(15104).then(t.bind(t,19288)),{loadableGenerated:{webpack:()=>[19288]},ssr:!1}),j=b()(()=>t.e(10163).then(t.bind(t,10163)),{loadableGenerated:{webpack:()=>[10163]},ssr:!1}),y=b()(()=>t.e(71385).then(t.bind(t,71385)),{loadableGenerated:{webpack:()=>[71385]},ssr:!1}),k=b()(()=>t.e(73817).then(t.bind(t,76216)),{loadableGenerated:{webpack:()=>[76216]},ssr:!1}),N=b()(()=>Promise.resolve().then(t.bind(t,62850)),{loadableGenerated:{webpack:()=>[62850]},ssr:!1}),w=b()(()=>t.e(21831).then(t.bind(t,21831)),{loadableGenerated:{webpack:()=>[21831]},ssr:!1}),L=b()(()=>Promise.resolve().then(t.bind(t,37610)),{loadableGenerated:{webpack:()=>[37610]},ssr:!1}),_=b()(()=>t.e(17526).then(t.bind(t,96227)),{loadableGenerated:{webpack:()=>[96227]},ssr:!1}),E=b()(()=>t.e(8240).then(t.bind(t,8240)),{loadableGenerated:{webpack:()=>[8240]},ssr:!1}),S=b()(()=>t.e(6721).then(t.bind(t,6721)),{loadableGenerated:{webpack:()=>[6721]},ssr:!1}),I=b()(()=>t.e(84226).then(t.bind(t,84226)),{loadableGenerated:{webpack:()=>[84226]},ssr:!1}),M=b()(()=>t.e(13247).then(t.bind(t,13247)),{loadableGenerated:{webpack:()=>[13247]},ssr:!1}),P=b()(()=>t.e(95958).then(t.bind(t,95958)),{loadableGenerated:{webpack:()=>[95958]},ssr:!1}),C=b()(()=>t.e(47119).then(t.bind(t,47119)),{loadableGenerated:{webpack:()=>[47119]},ssr:!1}),A=b()(()=>Promise.resolve().then(t.bind(t,16446)),{loadableGenerated:{webpack:()=>[16446]},ssr:!1}),O=b()(()=>t.e(7306).then(t.bind(t,7306)),{loadableGenerated:{webpack:()=>[7306]},ssr:!1}),T=b()(()=>t.e(49472).then(t.bind(t,39208)),{loadableGenerated:{webpack:()=>[39208]},ssr:!1}),G=(0,l.createContext)(),useSimpleGlobal=()=>(0,l.useContext)(G),LayoutBase=e=>{let{children:a,slotTop:t,meta:s}=e,{onLoading:u,fullWidth:x}=(0,o.O)(),h=(0,l.useRef)(null);return(0,n.jsx)(G.Provider,{value:{searchModal:h},children:(0,n.jsxs)("div",{id:"theme-simple",className:"min-h-screen flex flex-col dark:text-gray-300  bg-white dark:bg-black",children:[(0,n.jsx)(A,{meta:s}),(0,n.jsx)(m.Style,{}),(0,d.J)("SIMPLE_TOP_BAR",null,r.default)&&(0,n.jsx)(_,{...e}),(0,n.jsx)(E,{...e}),(0,n.jsx)(S,{...e}),(0,n.jsxs)("div",{id:"container-wrapper",className:(JSON.parse((0,d.J)("LAYOUT_SIDEBAR_REVERSE"))?"flex-row-reverse":"")+" w-full flex-1 flex items-start max-w-9/10 mx-auto pt-12",children:[(0,n.jsxs)("div",{id:"container-inner ",className:"w-full flex-grow min-h-fit",children:[(0,n.jsxs)(c.u,{show:!u,appear:!0,enter:"transition ease-in-out duration-700 transform order-first",enterFrom:"opacity-0 translate-y-16",enterTo:"opacity-100",leave:"transition ease-in-out duration-300 transform",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 -translate-y-16",unmount:!1,children:[t,a]}),(0,n.jsx)(i.AdSlot,{type:"native"})]}),x?null:(0,n.jsx)("div",{id:"right-sidebar",className:"hidden xl:block flex-none sticky top-8 w-96 border-l dark:border-gray-800 pl-12 border-gray-100",children:(0,n.jsx)(I,{...e})})]}),(0,n.jsx)("div",{className:"fixed right-4 bottom-4 z-20",children:(0,n.jsx)(M,{})}),(0,n.jsx)(g.Z,{cRef:h,...e}),(0,n.jsx)(P,{...e})]})})},LayoutIndex=e=>(0,n.jsx)(LayoutPostList,{...e}),LayoutPostList=e=>(0,n.jsx)(LayoutBase,{...e,children:"page"===(0,d.J)("POST_LIST_STYLE")?(0,n.jsx)(T,{...e}):(0,n.jsx)(v,{...e})}),LayoutSearch=e=>{let{keyword:a}=e;(0,l.useEffect)(()=>{s.jU&&(0,h.Z)({doms:document.getElementById("posts-wrapper"),search:a,target:{element:"span",className:"text-red-500 border-b border-dashed"}})},[]);let t=(0,d.J)("ALGOLIA_APP_ID")?null:(0,n.jsx)(C,{...e});return(0,n.jsx)(LayoutPostList,{...e,slotTop:t})},LayoutArchive=e=>{let{archivePosts:a}=e;return(0,n.jsx)(LayoutBase,{...e,children:(0,n.jsx)("div",{className:"mb-10 pb-20 md:py-12 p-3  min-h-screen w-full",children:Object.keys(a).map(e=>(0,n.jsx)(j,{archiveTitle:e,archivePosts:a},e))})})},LayoutSlug=e=>{let{post:a,lock:t,validPassword:r,prev:l,next:s}=e,{fullWidth:d}=(0,o.O)();return(0,n.jsxs)(LayoutBase,{...e,children:[t&&(0,n.jsx)(y,{validPassword:r}),(0,n.jsxs)("div",{id:"article-wrapper",className:"px-2  ".concat(d?"":"xl:max-w-4xl 2xl:max-w-6xl"),children:[(0,n.jsx)(k,{post:a}),(0,n.jsx)(O,{orientation:"horizontal",className:"w-full"}),!t&&(0,n.jsx)(f.default,{post:a}),(0,n.jsx)(L,{post:a}),(0,n.jsx)(i.AdSlot,{type:"in-article"}),(null==a?void 0:a.type)==="Post"&&(0,n.jsx)(w,{prev:l,next:s}),(0,n.jsx)(N,{frontMatter:a})]})]})},Layout404=e=>(0,n.jsx)(LayoutBase,{...e,children:"404 Not found."}),LayoutCategoryIndex=e=>{let{categoryOptions:a}=e;return(0,n.jsx)(LayoutBase,{...e,children:(0,n.jsx)("div",{id:"category-list",className:"duration-200 flex flex-wrap",children:null==a?void 0:a.map(e=>(0,n.jsx)(x(),{href:"/category/".concat(e.name),passHref:!0,legacyBehavior:!0,children:(0,n.jsxs)("div",{className:"hover:text-black dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600 px-5 cursor-pointer py-2 hover:bg-gray-100",children:[(0,n.jsx)("i",{className:"mr-4 fas fa-folder"}),e.name,"(",e.count,")"]})},e.name))})})},LayoutTagIndex=e=>{let{tagOptions:a}=e;return(0,n.jsx)(LayoutBase,{...e,children:(0,n.jsx)("div",{id:"tags-list",className:"duration-200 flex flex-wrap",children:a.map(e=>(0,n.jsx)("div",{className:"p-2",children:(0,n.jsx)(x(),{href:"/tag/".concat(encodeURIComponent(e.name)),passHref:!0,className:"cursor-pointer inline-block rounded hover:bg-gray-500 hover:text-white duration-200  mr-2 py-1 px-2 text-xs whitespace-nowrap dark:hover:text-white text-gray-600 hover:shadow-xl dark:border-gray-400 notion-".concat(e.color,"_background dark:bg-gray-800"),children:(0,n.jsxs)("div",{className:"font-light dark:text-gray-400",children:[(0,n.jsx)("i",{className:"mr-1 fas fa-tag"})," ",e.name+(e.count?"(".concat(e.count,")"):"")," "]})},e)},e.name))})})}},37744:function(e,a,t){t.r(a),t.d(a,{Style:function(){return Style}});var n=t(85893),r=t(5379),l=t.n(r);let Style=()=>(0,n.jsx)(l(),{id:"8e0fd1e957ea2f2d",children:".dark body{background-color:black}.forbid-copy{-moz-user-select:none;user-select:none;-webkit-user-select:none;-ms-user-select:none}#theme-simple #announcement-content{}#theme-simple .blog-item-title{color:#276077}.dark #theme-simple .blog-item-title{color:#d1d5db}.notion{margin-top:0!important;margin-bottom:0!important}#theme-simple .menu-link{text-decoration:none;background-image:-webkit-linear-gradient(#d33,#d33);background-image:-moz-linear-gradient(#d33,#d33);background-image:-o-linear-gradient(#d33,#d33);background-image:linear-gradient(#d33,#d33);background-repeat:no-repeat;background-position:bottom center;-webkit-background-size:0 2px;-moz-background-size:0 2px;-o-background-size:0 2px;background-size:0 2px;-webkit-transition:background-size 100ms ease-in-out;-moz-transition:background-size 100ms ease-in-out;-o-transition:background-size 100ms ease-in-out;transition:background-size 100ms ease-in-out}#theme-simple .menu-link:hover{-webkit-background-size:100%2px;-moz-background-size:100%2px;-o-background-size:100%2px;background-size:100%2px;color:#d33;cursor:pointer}"})}}]);