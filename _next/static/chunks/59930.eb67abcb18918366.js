"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[59930,34722,4830,55519,67427,13990,98892,78502,59905,59661,61280,89624,38592,78267,19486,67330,72630,19963,48596,97765],{18065:function(e,a,t){t.d(a,{Z:function(){return replaceSearchResult}});var r=t(22006);async function replaceSearchResult(e){let{doms:a,search:t,target:s}=e;if(a&&t&&s)try{await (0,r.TY)("https://cdnjs.cloudflare.com/ajax/libs/mark.js/8.11.1/mark.min.js","js");let e=window.Mark;if(a instanceof HTMLCollection)for(let r of a){let a=RegExp(t,"gim"),n=new e(r);n.markRegExp(a,s)}else{let r=RegExp(t,"gim"),n=new e(a);n.markRegExp(r,s)}}catch(e){console.error("markjs 加载失败",e)}}},6331:function(e,a,t){var r=t(85893),s=t(66043);a.Z=e=>{let{post:a,className:t}=e;return JSON.parse((0,s.J)("COMMENT_TWIKOO_COUNT_ENABLE"))?(0,r.jsxs)("a",{href:"".concat(a.slug,"?target=comment"),className:"mx-1 hidden comment-count-wrapper-".concat(a.id," ").concat(t||""),children:[(0,r.jsx)("i",{className:"far fa-comment mr-1"}),(0,r.jsx)("span",{className:"comment-count-text-".concat(a.id)})]}):null}},90352:function(e,a,t){t.d(a,{x:function(){return formatDateFmt}});function formatDateFmt(e,a){let t=new Date(e),r={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(let e in/(y+)/.test(a)&&(a=a.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),r)RegExp("("+e+")").test(a)&&(a=a.replace(RegExp.$1,1===RegExp.$1.length?r[e]:("00"+r[e]).substr((""+r[e]).length)));return a.trim()}},34722:function(e,a,t){t.r(a);var r=t(85893),s=t(54110),n=t(5152),l=t.n(n);let o=l()(()=>Promise.resolve().then(t.bind(t,71272)),{loadableGenerated:{webpack:()=>[71272]}});a.default=e=>{let{post:a,className:t}=e,{locale:n}=(0,s.O)();return a&&0!==Object.keys(a).length?(0,r.jsxs)("aside",{className:"rounded shadow overflow-hidden mb-6",children:[(0,r.jsxs)("h3",{className:"text-sm bg-gray-100 text-gray-700 dark:bg-hexo-black-gray dark:text-gray-200 py-3 px-4 dark:border-hexo-black-gray border-b",children:[(0,r.jsx)("i",{className:"mr-2 fas fa-bullhorn"}),n.COMMON.ANNOUNCEMENT]}),a&&(0,r.jsx)("div",{id:"announcement-content",children:(0,r.jsx)(o,{post:a,className:"text-center "})})]}):(0,r.jsx)(r.Fragment,{})}},4830:function(e,a,t){t.r(a),t.d(a,{ArticleInfo:function(){return ArticleInfo}});var r=t(85893),s=t(41664),n=t.n(s),l=t(54110),o=t(90352);let ArticleInfo=e=>{let{post:a}=e,{locale:t}=(0,l.O)();return(0,r.jsx)("section",{className:"flex-wrap flex mt-2 text-gray-400 dark:text-gray-400 font-light leading-8",children:(0,r.jsxs)("div",{children:[(null==a?void 0:a.type)!=="Page"&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n(),{href:"/category/".concat(null==a?void 0:a.category),passHref:!0,className:"cursor-pointer text-md mr-2 hover:text-black dark:hover:text-white border-b dark:border-gray-500 border-dashed",children:[(0,r.jsx)("i",{className:"mr-1 fas fa-folder-open"}),null==a?void 0:a.category]}),(0,r.jsx)("span",{className:"mr-2",children:"|"})]}),(null==a?void 0:a.type)!=="Page"&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n(),{href:"/archive#".concat((0,o.x)(null==a?void 0:a.publishDate,"yyyy-MM")),passHref:!0,className:"pl-1 mr-2 cursor-pointer hover:text-gray-700 dark:hover:text-gray-200 border-b dark:border-gray-500 border-dashed",children:null==a?void 0:a.publishDay}),(0,r.jsx)("span",{className:"mr-2",children:"|"}),(0,r.jsxs)("span",{className:"mx-2 text-gray-400 dark:text-gray-500",children:[t.COMMON.LAST_EDITED_TIME,": ",null==a?void 0:a.lastEditedDay]}),(0,r.jsx)("span",{className:"mr-2",children:"|"}),(0,r.jsxs)("span",{className:"hidden busuanzi_container_page_pv font-light mr-2",children:[(0,r.jsx)("i",{className:"mr-1 fas fa-eye"}),"\xa0",(0,r.jsx)("span",{className:"mr-2 busuanzi_value_page_pv"})]})]})]})})}},55519:function(e,a,t){t.r(a),t.d(a,{ArticleLock:function(){return ArticleLock}});var r=t(85893),s=t(54110),n=t(67294);let ArticleLock=e=>{let{validPassword:a}=e,{locale:t}=(0,s.O)(),submitPassword=()=>{let e=document.getElementById("password");if(!a(null==e?void 0:e.value)){let e=document.getElementById("tips");e&&(e.innerHTML="",e.innerHTML="<div class='text-red-500 animate__shakeX animate__animated'>".concat(t.COMMON.PASSWORD_ERROR,"</div>"))}},l=(0,n.useRef)(null);return(0,n.useEffect)(()=>{l.current.focus()},[]),(0,r.jsx)("div",{id:"container",className:"w-full flex justify-center items-center h-96 font-sans",children:(0,r.jsxs)("div",{className:"text-center space-y-3",children:[(0,r.jsx)("div",{className:"font-bold",children:t.COMMON.ARTICLE_LOCK_TIPS}),(0,r.jsxs)("div",{className:"flex mx-4",children:[(0,r.jsx)("input",{id:"password",type:"password",onKeyDown:e=>{"Enter"===e.key&&submitPassword()},ref:l,className:"outline-none w-full text-sm pl-5 rounded-l transition focus:shadow-lg font-light leading-10 text-black dark:bg-gray-500 bg-gray-50"}),(0,r.jsx)("div",{onClick:submitPassword,className:"px-3 whitespace-nowrap cursor-pointer items-center justify-center py-2 rounded-r duration-300 bg-gray-300",children:(0,r.jsxs)("i",{className:"duration-200 cursor-pointer fas fa-key dark:text-black",children:["\xa0",t.COMMON.SUBMIT]})})]}),(0,r.jsx)("div",{id:"tips"})]})})}},67427:function(e,a,t){t.r(a),t.d(a,{default:function(){return BlogListGroupByDate}});var r=t(85893),s=t(66043),n=t(41664),l=t.n(n);function BlogListGroupByDate(e){let{archiveTitle:a,archivePosts:t}=e;return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{id:a,className:"pt-16 pb-4 text-3xl dark:text-gray-300",children:a}),(0,r.jsx)("ul",{children:t[a].map(e=>(0,r.jsx)("li",{className:"border-l-2 p-1 text-xs md:text-base items-center  hover:scale-x-105 hover:border-gray-500 dark:hover:border-gray-300 dark:border-gray-400 transform duration-500",children:(0,r.jsxs)("div",{id:null==e?void 0:e.publishDay,children:[(0,r.jsx)("span",{className:"text-gray-400",children:null==e?void 0:e.publishDay})," ","\xa0",(0,r.jsx)(l(),{href:"".concat((0,s.J)("SUB_PATH",""),"/").concat(e.slug),className:"dark:text-gray-400  dark:hover:text-gray-300 overflow-x-hidden hover:underline cursor-pointer text-gray-600",children:e.title})]})},e.id))})]},a)}},13990:function(e,a,t){t.r(a),t.d(a,{BlogListPage:function(){return BlogListPage}});var r=t(85893),s=t(66043),n=t(54110),l=t(11163),o=t(41664),c=t.n(o),i=t(48596),d=t(78502);let BlogListPage=e=>{let{page:a=1,posts:t,postCount:o}=e,{locale:u}=(0,n.O)(),x=(0,l.useRouter)(),m=Math.ceil(o/parseInt((0,s.J)("POSTS_PER_PAGE"))),h=+a,f=h>1,g=x.asPath.split("?")[0].replace(/\/page\/[1-9]\d*/,"").replace(/\/$/,""),p=(0,s.J)("EXAMPLE_POST_LIST_COVER",null,i.default);return(0,r.jsxs)("div",{className:"w-full ".concat(p?"md:pr-2":"md:pr-12"," mb-12"),children:[(0,r.jsx)("div",{id:"posts-wrapper",children:null==t?void 0:t.map(e=>(0,r.jsx)(d.default,{post:e},e.id))}),(0,r.jsxs)("div",{className:"flex justify-between text-xs",children:[(0,r.jsx)(c(),{href:{pathname:h-1==1?"".concat(g,"/"):"".concat(g,"/page/").concat(h-1),query:x.query.s?{s:x.query.s}:{}},className:"".concat(f?"bg-black ":"bg-gray pointer-events-none "," text-white no-underline py-2 px-3 rounded"),children:u.PAGINATION.PREV}),(0,r.jsx)(c(),{href:{pathname:"".concat(g,"/page/").concat(h+1),query:x.query.s?{s:x.query.s}:{}},className:"".concat(a<m?"bg-black ":"bg-gray pointer-events-none "," text-white no-underline py-2 px-3 rounded"),children:u.PAGINATION.NEXT})]})]})}},98892:function(e,a,t){t.r(a),t.d(a,{BlogListScroll:function(){return BlogListScroll}});var r=t(85893),s=t(66043),n=t(54110),l=t(67294),o=t(93096),c=t.n(o),i=t(78502),d=t(48596);let BlogListScroll=e=>{let{posts:a}=e,{locale:t}=(0,n.O)(),[o,u]=(0,l.useState)(1),x=!1,m=a?Object.assign(a).slice(0,parseInt((0,s.J)("POSTS_PER_PAGE"))*o):[];if(a){let e=a.length;x=o*parseInt((0,s.J)("POSTS_PER_PAGE"))<e}let handleGetMore=()=>{x&&u(o+1)},h=(0,l.useRef)(null),f=(0,l.useCallback)(c()(()=>{let e=window.scrollY+window.outerHeight,a=h&&h.current?h.current.clientHeight:0;e>a+100&&handleGetMore()},500)),g=(0,s.J)("EXAMPLE_POST_LIST_COVER",null,d.default);return(0,l.useEffect)(()=>(window.addEventListener("scroll",f),()=>{window.removeEventListener("scroll",f)})),(0,r.jsxs)("div",{id:"posts-wrapper",className:"w-full ".concat(g?"md:pr-2":"md:pr-12","} mb-12"),ref:h,children:[null==m?void 0:m.map(e=>(0,r.jsx)(i.default,{post:e},e.id)),(0,r.jsxs)("div",{onClick:handleGetMore,className:"w-full my-4 py-4 text-center cursor-pointer ",children:[" ",x?t.COMMON.MORE:"".concat(t.COMMON.NO_MORE," \uD83D\uDE30")," "]})]})}},78502:function(e,a,t){t.r(a);var r=t(85893),s=t(66043),n=t(48596),l=t(41664),o=t.n(l),c=t(6331),i=t(74940);a.default=e=>{var a;let{post:t}=e,l=(0,s.J)("EXAMPLE_POST_LIST_COVER",null,n.default)&&(null==t?void 0:t.pageCoverThumbnail);return(0,r.jsxs)("article",{className:"".concat(l?"flex md:flex-row flex-col-reverse":""," replace mb-12 "),children:[(0,r.jsxs)("div",{className:"".concat(l?"md:w-7/12":""),children:[(0,r.jsx)("h2",{className:"mb-4",children:(0,r.jsx)(o(),{href:"/".concat(t.slug),className:"text-black dark:text-gray-100 text-xl md:text-2xl no-underline hover:underline",children:null==t?void 0:t.title})}),(0,r.jsxs)("div",{className:"mb-4 text-sm text-gray-700 dark:text-gray-300",children:["by ",(0,r.jsx)("a",{href:"#",className:"text-gray-700 dark:text-gray-300",children:(0,s.J)("AUTHOR")})," on ",(null===(a=t.date)||void 0===a?void 0:a.start_date)||t.createdTime,(0,r.jsx)(c.Z,{post:t,className:"pl-1"}),(0,r.jsx)("span",{className:"font-bold mx-1",children:" | "}),(0,r.jsx)("a",{href:"/category".concat(t.category),className:"text-gray-700 dark:text-gray-300 hover:underline",children:t.category})]}),!t.results&&(0,r.jsx)("p",{className:"line-clamp-3 text-gray-700 dark:text-gray-400 leading-normal",children:t.summary}),t.results&&(0,r.jsx)("p",{className:"line-clamp-3 mt-4 text-gray-700 dark:text-gray-300 text-sm font-light leading-7",children:t.results.map((e,a)=>(0,r.jsx)("span",{children:e},a))})]}),l&&(0,r.jsx)("div",{className:"md:w-5/12 w-full h-44 overflow-hidden p-1",children:(0,r.jsx)(o(),{href:"".concat((0,s.J)("SUB_PATH",""),"/").concat(t.slug),passHref:!0,legacyBehavior:!0,children:(0,r.jsx)(i.Z,{src:null==t?void 0:t.pageCoverThumbnail,className:"w-full bg-cover hover:scale-110 duration-200"})})})]})}},59905:function(e,a,t){t.r(a),t.d(a,{default:function(){return CategoryItem}});var r=t(85893),s=t(41664),n=t.n(s);function CategoryItem(e){let{category:a}=e;return(0,r.jsx)(n(),{href:"/category/".concat(a.name),passHref:!0,legacyBehavior:!0,children:(0,r.jsxs)("div",{className:"hover:text-black dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600 px-5 cursor-pointer py-2 hover:bg-gray-100",children:[(0,r.jsx)("i",{className:"mr-4 fas fa-folder"}),a.name,"(",a.count,")"]})},a.name)}},59661:function(e,a,t){t.r(a),t.d(a,{Footer:function(){return Footer}});var r=t(85893),s=t(28574),n=t(66043);let Footer=e=>{let a=new Date,t=a.getFullYear(),l=(0,n.J)("SINCE"),o=parseInt(l)<t?l+"-"+t:t;return(0,r.jsxs)("footer",{className:"z-10 relative w-full bg-white px-6 border-t dark:border-hexo-black-gray dark:bg-hexo-black-gray ",children:[(0,r.jsx)(s.Z,{className:"text-center pt-4"}),(0,r.jsxs)("div",{className:"container mx-auto max-w-4xl py-6 md:flex flex-wrap md:flex-no-wrap md:justify-between items-center text-sm",children:[(0,r.jsxs)("div",{className:"text-center",children:[" \xa9","".concat(o)," ",(0,n.J)("AUTHOR"),". All rights reserved."]}),(0,r.jsxs)("div",{className:"md:p-0 text-center md:text-right text-xs",children:[(0,n.J)("BEI_AN")&&(0,r.jsxs)("a",{href:"https://beian.miit.gov.cn/",className:"text-black dark:text-gray-200 no-underline hover:underline ml-4",children:[(0,n.J)("BEI_AN")," "]}),(0,r.jsxs)("span",{className:"dark:text-gray-200 no-underline ml-4",children:["Powered by",(0,r.jsxs)("a",{href:"https://github.com/tangly1024/NotionNext",className:" hover:underline",children:[" NotionNext ",(0,n.J)("VERSION"),"  "]})]})]})]})]})}},61280:function(e,a,t){t.r(a),t.d(a,{Header:function(){return Header}});var r=t(85893),s=t(41664),n=t.n(s),l=t(66043);let Header=e=>(0,r.jsx)("header",{className:"w-full px-6 bg-white  dark:bg-black relative z-10",children:(0,r.jsxs)("div",{className:"container mx-auto max-w-4xl md:flex justify-between items-center",children:[(0,r.jsx)(n(),{href:"/",className:"py-6 w-full text-center md:text-left md:w-auto text-gray-dark no-underline flex justify-center items-center",children:(0,l.J)("TITLE")}),(0,r.jsx)("div",{className:"w-full md:w-auto text-center md:text-right"})]})})},89624:function(e,a,t){t.r(a);var r=t(85893),s=t(54110);a.default=()=>{let{locale:e}=(0,s.O)();return(0,r.jsx)("div",{title:e.POST.TOP,className:"cursor-pointer p-2 text-center",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:(0,r.jsx)("i",{className:"fas fa-angle-up text-2xl"})})}},38592:function(e,a,t){t.r(a),t.d(a,{MenuItemDrop:function(){return MenuItemDrop}});var r=t(85893),s=t(41664),n=t.n(s),l=t(67294);let MenuItemDrop=e=>{var a,t;let{link:s}=e,[o,c]=(0,l.useState)(!1),i=(null==s?void 0:null===(a=s.subMenus)||void 0===a?void 0:a.length)>0;return(0,r.jsxs)("li",{className:"cursor-pointer",onMouseOver:()=>c(!0),onMouseOut:()=>c(!1),children:[!i&&(0,r.jsx)("div",{className:"rounded px-2 md:pl-0 md:mr-3 my-4 md:pr-3 text-gray-700 dark:text-gray-200 no-underline md:border-r border-gray-light",children:(0,r.jsxs)(n(),{href:null==s?void 0:s.to,target:(null==s?void 0:null===(t=s.to)||void 0===t?void 0:t.indexOf("http"))===0?"_blank":"_self",children:[(null==s?void 0:s.icon)&&(0,r.jsx)("i",{className:null==s?void 0:s.icon})," ",null==s?void 0:s.name,i&&(0,r.jsx)("i",{className:"px-2 fa fa-angle-down"})]})}),i&&(0,r.jsxs)("div",{className:"rounded px-2 md:pl-0 md:mr-3 my-4 md:pr-3 text-gray-700 dark:text-gray-200 no-underline md:border-r border-gray-light",children:[(null==s?void 0:s.icon)&&(0,r.jsx)("i",{className:null==s?void 0:s.icon})," ",null==s?void 0:s.name,(0,r.jsx)("i",{className:"px-2 fas fa-chevron-down duration-500 transition-all ".concat(o?" rotate-180":"")})]}),i&&(0,r.jsx)("ul",{className:"".concat(o?"visible opacity-100  top-12":"invisible opacity-0 top-10"," border-gray-100  bg-white  dark:bg-black dark:border-gray-800 transition-all duration-300 z-20 absolute block drop-shadow-lg "),children:s.subMenus.map((e,a)=>{var t;return(0,r.jsx)("li",{className:"not:last-child:border-b-0 border-b text-gray-700 dark:text-gray-200  hover:bg-gray-50 dark:hover:bg-gray-900 tracking-widest transition-all duration-200  dark:border-gray-800 py-3 pr-6 pl-3",children:(0,r.jsx)(n(),{href:e.to,target:(null==s?void 0:null===(t=s.to)||void 0===t?void 0:t.indexOf("http"))===0?"_blank":"_self",children:(0,r.jsxs)("span",{className:"text-sm text-nowrap font-extralight",children:[(null==s?void 0:s.icon)&&(0,r.jsx)("i",{className:null==e?void 0:e.icon,children:" \xa0 "}),e.title]})})},a)})})]})}},78267:function(e,a,t){t.r(a),t.d(a,{Nav:function(){return Nav}});var r=t(85893),s=t(66043),n=t(54110),l=t(48596),o=t(38592);let Nav=e=>{let{customNav:a,customMenu:t}=e,{locale:c}=(0,n.O)(),i=[{id:1,icon:"fas fa-search",name:c.NAV.SEARCH,to:"/search",show:(0,s.J)("EXAMPLE_MENU_SEARCH",null,l.default)},{id:2,icon:"fas fa-archive",name:c.NAV.ARCHIVE,to:"/archive",show:(0,s.J)("EXAMPLE_MENU_ARCHIVE",null,l.default)},{id:3,icon:"fas fa-folder",name:c.COMMON.CATEGORY,to:"/category",show:(0,s.J)("EXAMPLE_MENU_CATEGORY",null,l.default)},{id:4,icon:"fas fa-tag",name:c.COMMON.TAGS,to:"/tag",show:(0,s.J)("EXAMPLE_MENU_TAG",null,l.default)}];return(a&&(i=i.concat(a)),(0,s.J)("CUSTOM_MENU")&&(i=t),i&&0!==i.length)?(0,r.jsx)("nav",{className:"w-full bg-white md:pt-0 px-6 relative z-20 border-t border-b border-gray-light dark:border-hexo-black-gray dark:bg-black",children:(0,r.jsx)("div",{className:"container mx-auto max-w-4xl md:flex justify-between items-center text-sm md:text-md md:justify-start",children:(0,r.jsx)("ul",{className:"w-full text-center md:text-left flex flex-wrap justify-center items-stretch md:justify-start md:items-start",children:i.map((e,a)=>(0,r.jsx)(o.MenuItemDrop,{link:e},a))})})}):null}},19486:function(e,a,t){t.r(a);var r=t(85893),s=t(11163),n=t(54110),l=t(67294);let o=!1;a.default=e=>{let{currentTag:a,keyword:t,cRef:c}=e,{locale:i}=(0,n.O)(),d=(0,s.useRouter)(),u=(0,l.useRef)(null);(0,l.useImperativeHandle)(c,()=>({focus:()=>{var e;null==u||null===(e=u.current)||void 0===e||e.focus()}}));let handleSearch=()=>{let e=u.current.value;e&&""!==e?d.push({pathname:"/search/"+e}).then(a=>{console.log("搜索",e)}):d.push({pathname:"/"}).then(e=>{})},cleanSearch=()=>{u.current.value="",m(!1)};function lockSearchInput(){o=!0}let[x,m]=(0,l.useState)(!1),updateSearchKey=e=>{o||(u.current.value=e,e?m(!0):m(!1))};return(0,r.jsxs)("section",{className:"flex w-full bg-gray-100",children:[(0,r.jsx)("input",{ref:u,type:"text",placeholder:a?"".concat(i.SEARCH.TAGS," #").concat(a):"".concat(i.SEARCH.ARTICLES),className:"outline-none w-full text-sm pl-4 transition focus:shadow-lg font-light leading-10 text-black bg-gray-100 dark:bg-gray-900 dark:text-white",onKeyUp:e=>{13===e.keyCode?handleSearch(u.current.value):27===e.keyCode&&cleanSearch()},onCompositionStart:lockSearchInput,onCompositionUpdate:lockSearchInput,onCompositionEnd:function(){o=!1},onChange:e=>updateSearchKey(e.target.value),defaultValue:t||""}),(0,r.jsx)("div",{className:"-ml-8 cursor-pointer float-right items-center justify-center py-2",onClick:handleSearch,children:(0,r.jsx)("i",{className:"hover:text-black transform duration-200  text-gray-500 cursor-pointer fas fa-search"})}),x&&(0,r.jsx)("div",{className:"-ml-12 cursor-pointer dark:bg-gray-600 dark:hover:bg-gray-800 float-right items-center justify-center py-2",children:(0,r.jsx)("i",{className:"hover:text-black transform duration-200 text-gray-400 cursor-pointer fas fa-times",onClick:cleanSearch})})]})}},67330:function(e,a,t){t.r(a),t.d(a,{SideBar:function(){return SideBar}});var r=t(85893),s=t(66043),n=t(77621),l=t(54110),o=t(41664),c=t.n(o),i=t(5152),d=t.n(i),u=t(34722);let x=d()(()=>Promise.all([t.e(16688),t.e(917),t.e(82477),t.e(76586)]).then(t.bind(t,76586)),{loadableGenerated:{webpack:()=>[76586]}}),SideBar=e=>{let{locale:a}=(0,l.O)(),{latestPosts:t,categoryOptions:o,notice:i}=e;return(0,r.jsxs)("div",{className:"w-full md:w-64 sticky top-8",children:[(0,r.jsxs)("aside",{className:"rounded shadow overflow-hidden mb-6",children:[(0,r.jsx)("h3",{className:"text-sm bg-gray-100 text-gray-700 dark:bg-hexo-black-gray dark:text-gray-200 py-3 px-4 dark:border-hexo-black-gray border-b",children:a.COMMON.CATEGORY}),(0,r.jsx)("div",{className:"p-4",children:(0,r.jsx)("ul",{className:"list-reset leading-normal",children:null==o?void 0:o.map(e=>(0,r.jsx)(c(),{href:"/category/".concat(e.name),passHref:!0,legacyBehavior:!0,children:(0,r.jsxs)("li",{children:["  ",(0,r.jsxs)("a",{href:"/category/".concat(e.name),className:"text-gray-darkest text-sm",children:[e.name,"(",e.count,")"]})]})},e.name))})})]}),(0,r.jsxs)("aside",{className:"rounded shadow overflow-hidden mb-6",children:[(0,r.jsx)("h3",{className:"text-sm bg-gray-100 text-gray-700 dark:bg-hexo-black-gray dark:text-gray-200 py-3 px-4 dark:border-hexo-black-gray border-b",children:a.COMMON.LATEST_POSTS}),(0,r.jsx)("div",{className:"p-4",children:(0,r.jsx)("ul",{className:"list-reset leading-normal",children:null==t?void 0:t.map(e=>(0,r.jsx)(c(),{href:"/".concat(e.slug),passHref:!0,legacyBehavior:!0,children:(0,r.jsxs)("li",{children:["  ",(0,r.jsx)("a",{href:"/".concat(e.slug),className:"text-gray-darkest text-sm",children:e.title})]})},e.id))})})]}),(0,r.jsx)(u.default,{post:i}),(0,s.J)("COMMENT_WALINE_SERVER_URL")&&(0,s.J)("COMMENT_WALINE_RECENT")&&(0,r.jsxs)("aside",{className:"rounded shadow overflow-hidden mb-6",children:[(0,r.jsx)("h3",{className:"text-sm bg-gray-100 text-gray-700 dark:bg-hexo-black-gray dark:text-gray-200 py-3 px-4 dark:border-hexo-black-gray border-b",children:a.COMMON.RECENT_COMMENTS}),(0,r.jsx)("div",{className:"p-4",children:(0,r.jsx)(x,{})})]}),(0,r.jsx)("aside",{className:"rounded  overflow-hidden mb-6",children:(0,r.jsx)(n.default,{})})]})}},72630:function(e,a,t){t.r(a),t.d(a,{default:function(){return TagItem}});var r=t(85893),s=t(41664),n=t.n(s);function TagItem(e){let{tag:a}=e;return(0,r.jsx)("div",{className:"p-2",children:(0,r.jsx)(n(),{href:"/tag/".concat(encodeURIComponent(a.name)),passHref:!0,className:"cursor-pointer inline-block rounded hover:bg-gray-500 hover:text-white duration-200 mr-2 py-1 px-2 text-xs whitespace-nowrap dark:hover:text-white text-gray-600 hover:shadow-xl dark:border-gray-400 notion-".concat(a.color,"_background dark:bg-gray-800"),children:(0,r.jsxs)("div",{className:"font-light dark:text-gray-400",children:[(0,r.jsx)("i",{className:"mr-1 fas fa-tag"})," ",a.name+(a.count?"(".concat(a.count,")"):"")," "]})},a)},a.name)}},19963:function(e,a,t){t.r(a),t.d(a,{Title:function(){return Title}});var r=t(85893),s=t(66043);let Title=e=>{let{post:a}=e,t=(null==a?void 0:a.title)||(0,s.J)("TITLE"),n=(null==a?void 0:a.description)||(0,s.J)("AUTHOR");return(0,r.jsxs)("div",{className:"text-center px-6 py-12 mb-6 bg-gray-100 dark:bg-hexo-black-gray dark:border-hexo-black-gray border-b",children:[(0,r.jsx)("h1",{className:" text-xl md:text-4xl pb-4",children:t}),(0,r.jsx)("p",{className:"leading-loose text-gray-dark",children:n})]})}},48596:function(e,a,t){t.r(a),a.default={EXAMPLE_MENU_CATEGORY:!0,EXAMPLE_MENU_TAG:!0,EXAMPLE_MENU_ARCHIVE:!0,EXAMPLE_MENU_SEARCH:!0,EXAMPLE_POST_LIST_COVER:!0}},59930:function(e,a,t){t.r(a),t.d(a,{Layout404:function(){return Layout404},LayoutArchive:function(){return LayoutArchive},LayoutCategoryIndex:function(){return LayoutCategoryIndex},LayoutIndex:function(){return LayoutIndex},LayoutPostList:function(){return LayoutPostList},LayoutSearch:function(){return LayoutSearch},LayoutSlug:function(){return LayoutSlug},LayoutTagIndex:function(){return LayoutTagIndex},THEME_CONFIG:function(){return s.default}});var r=t(85893),s=t(48596),n=t(67294),l=t(61280),o=t(78267),c=t(59661),i=t(19963),d=t(67330),u=t(13990),x=t(98892),m=t(54110),h=t(55519),f=t(4830),g=t(89624),p=t(71272),y=t(62850),v=t(37610),j=t(19486),b=t(18065),N=t(22006),k=t(67427),E=t(59905),w=t(72630),L=t(11163),M=t(44080),O=t(97765),S=t(16446),T=t(66043);let LayoutBase=e=>{let{children:a,slotTop:t,meta:s}=e,{onLoading:n,fullWidth:u}=(0,m.O)();return(0,r.jsxs)("div",{id:"theme-example",className:"dark:text-gray-300  bg-white dark:bg-black",children:[(0,r.jsx)(S.default,{meta:s}),(0,r.jsx)(O.Style,{}),(0,r.jsx)(l.Header,{...e}),(0,r.jsx)(o.Nav,{...e}),(0,r.jsxs)("div",{id:"container-inner",className:"w-full relative z-10",children:[u?null:(0,r.jsx)(i.Title,{...e}),(0,r.jsxs)("div",{id:"container-wrapper",className:(JSON.parse((0,T.J)("LAYOUT_SIDEBAR_REVERSE"))?"flex-row-reverse":"")+"relative container mx-auto justify-center md:flex items-start py-8 px-2",children:[(0,r.jsx)("div",{className:"w-full ".concat(u?"":"max-w-3xl"," xl:px-14 lg:px-4"),children:(0,r.jsxs)(M.u,{show:!n,appear:!0,enter:"transition ease-in-out duration-700 transform order-first",enterFrom:"opacity-0 translate-y-16",enterTo:"opacity-100",leave:"transition ease-in-out duration-300 transform",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 -translate-y-16",unmount:!1,children:[t,a]})}),!u&&(0,r.jsx)(d.SideBar,{...e})]})]}),(0,r.jsx)(c.Footer,{...e}),(0,r.jsx)("div",{className:"fixed right-4 bottom-4 z-10",children:(0,r.jsx)(g.default,{})})]})},LayoutIndex=e=>(0,r.jsx)(LayoutPostList,{...e}),LayoutPostList=e=>{let{category:a,tag:t}=e,s=null;return a?s=(0,r.jsxs)("div",{className:"pb-12",children:[(0,r.jsx)("i",{className:"mr-1 fas fa-folder-open"}),a]}):t?s=(0,r.jsxs)("div",{className:"pb-12",children:["#",t]}):e.slotTop&&(s=e.slotTop),(0,r.jsx)(LayoutBase,{...e,slotTop:s,children:"page"===(0,T.J)("POST_LIST_STYLE")?(0,r.jsx)(u.BlogListPage,{...e}):(0,r.jsx)(x.BlogListScroll,{...e})})},LayoutSlug=e=>{let{post:a,lock:t,validPassword:s}=e;return(0,r.jsx)(LayoutBase,{...e,children:t?(0,r.jsx)(h.ArticleLock,{validPassword:s}):(0,r.jsxs)("div",{id:"article-wrapper",className:"px-2",children:[(0,r.jsx)(f.ArticleInfo,{post:a}),(0,r.jsx)(p.default,{post:a}),(0,r.jsx)(v.default,{post:a}),(0,r.jsx)(y.default,{frontMatter:a})]})})},Layout404=e=>(0,r.jsx)(LayoutBase,{...e,children:"404 Not found."}),LayoutSearch=e=>{let{keyword:a}=e,t=(0,r.jsx)("div",{className:"pb-12",children:(0,r.jsx)(j.default,{...e})}),s=(0,L.useRouter)();return(0,n.useEffect)(()=>{if(N.jU){let e=document.getElementById("posts-wrapper");a&&e&&(0,b.Z)({doms:e,search:a,target:{element:"span",className:"text-red-500 border-b border-dashed"}})}},[s]),(0,r.jsx)(LayoutPostList,{slotTop:t,...e})},LayoutArchive=e=>{let{archivePosts:a}=e;return(0,r.jsx)(LayoutBase,{...e,children:(0,r.jsx)("div",{className:"mb-10 pb-20 md:py-12 p-3  min-h-screen w-full",children:Object.keys(a).map(e=>(0,r.jsx)(k.default,{archiveTitle:e,archivePosts:a},e))})})},LayoutCategoryIndex=e=>{let{categoryOptions:a}=e;return(0,r.jsx)(LayoutBase,{...e,children:(0,r.jsx)("div",{id:"category-list",className:"duration-200 flex flex-wrap",children:null==a?void 0:a.map(e=>(0,r.jsx)(E.default,{category:e},e.name))})})},LayoutTagIndex=e=>{let{tagOptions:a}=e;return(0,r.jsx)(LayoutBase,{...e,children:(0,r.jsx)("div",{id:"tags-list",className:"duration-200 flex flex-wrap",children:a.map(e=>(0,r.jsx)(w.default,{tag:e},e.name))})})}},97765:function(e,a,t){t.r(a),t.d(a,{Style:function(){return Style}});var r=t(85893),s=t(5379),n=t.n(s);let Style=()=>(0,r.jsx)(n(),{id:"c42329bc18a58f26",children:".dark body{background-color:black}"})}}]);