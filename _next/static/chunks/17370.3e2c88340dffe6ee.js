"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[17370,93554],{93554:function(e,t,s){s.r(t);var r=s(85893);let a=e=>{let{children:t,headerSlot:s,className:a}=e;return(0,r.jsxs)("div",{className:a,children:[(0,r.jsx)(r.Fragment,{children:s}),(0,r.jsx)("section",{className:"card shadow-md hover:shadow-md dark:text-gray-300 border dark:border-black rounded-xl lg:p-6 p-4 bg-white dark:bg-hexo-black-gray lg:duration-100",children:t})]})};t.default=a},17370:function(e,t,s){s.r(t);var r=s(85893),a=s(67294),n=s(74925),l=s(93554),d=s(39323),c=s(41664),i=s.n(c),h=s(82477);let m=e=>{let[t,s]=(0,a.useState)([]),{locale:c}=(0,d.O)(),[m,o]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{(0,h.Pq)({serverURL:(0,n.J)("COMMENT_WALINE_SERVER_URL"),count:5}).then(e=>{let{comments:t}=e;o(!1),s(t)})},[]),(0,r.jsxs)(l.default,{children:[(0,r.jsxs)("div",{className:" mb-2 px-1 justify-between",children:[(0,r.jsx)("i",{className:"mr-2 fas fas fa-comment"}),c.COMMON.RECENT_COMMENTS]}),m&&(0,r.jsxs)("div",{children:["Loading...",(0,r.jsx)("i",{className:"ml-2 fas fa-spinner animate-spin"})]}),!m&&t&&0===t.length&&(0,r.jsx)("div",{children:"No Comments"}),!m&&t&&t.length>0&&t.map(e=>(0,r.jsxs)("div",{className:"pb-2 pl-1",children:[(0,r.jsx)("div",{className:"dark:text-gray-200 text-sm waline-recent-content wl-content",dangerouslySetInnerHTML:{__html:e.comment}}),(0,r.jsx)("div",{className:"dark:text-gray-400 text-gray-400  text-sm text-right cursor-pointer hover:text-red-500 hover:underline pt-1 pr-2",children:(0,r.jsxs)(i(),{href:{pathname:e.url,hash:e.objectId,query:{target:"comment"}},children:["--",e.nick]})})]},e.objectId))]})};t.default=m}}]);