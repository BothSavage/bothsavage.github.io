"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4830],{90352:function(e,r,t){t.d(r,{x:function(){return formatDateFmt}});function formatDateFmt(e,r){let t=new Date(e),a={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(let e in/(y+)/.test(r)&&(r=r.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),a)RegExp("("+e+")").test(r)&&(r=r.replace(RegExp.$1,1===RegExp.$1.length?a[e]:("00"+a[e]).substr((""+a[e]).length)));return r.trim()}},4830:function(e,r,t){t.r(r),t.d(r,{ArticleInfo:function(){return ArticleInfo}});var a=t(85893),s=t(41664),n=t.n(s),l=t(54110),c=t(90352);let ArticleInfo=e=>{let{post:r}=e,{locale:t}=(0,l.O)();return(0,a.jsx)("section",{className:"flex-wrap flex mt-2 text-gray-400 dark:text-gray-400 font-light leading-8",children:(0,a.jsxs)("div",{children:[(null==r?void 0:r.type)!=="Page"&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n(),{href:"/category/".concat(null==r?void 0:r.category),passHref:!0,className:"cursor-pointer text-md mr-2 hover:text-black dark:hover:text-white border-b dark:border-gray-500 border-dashed",children:[(0,a.jsx)("i",{className:"mr-1 fas fa-folder-open"}),null==r?void 0:r.category]}),(0,a.jsx)("span",{className:"mr-2",children:"|"})]}),(null==r?void 0:r.type)!=="Page"&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n(),{href:"/archive#".concat((0,c.x)(null==r?void 0:r.publishDate,"yyyy-MM")),passHref:!0,className:"pl-1 mr-2 cursor-pointer hover:text-gray-700 dark:hover:text-gray-200 border-b dark:border-gray-500 border-dashed",children:null==r?void 0:r.publishDay}),(0,a.jsx)("span",{className:"mr-2",children:"|"}),(0,a.jsxs)("span",{className:"mx-2 text-gray-400 dark:text-gray-500",children:[t.COMMON.LAST_EDITED_TIME,": ",null==r?void 0:r.lastEditedDay]}),(0,a.jsx)("span",{className:"mr-2",children:"|"}),(0,a.jsxs)("span",{className:"hidden busuanzi_container_page_pv font-light mr-2",children:[(0,a.jsx)("i",{className:"mr-1 fas fa-eye"}),"\xa0",(0,a.jsx)("span",{className:"mr-2 busuanzi_value_page_pv"})]})]})]})})}}}]);