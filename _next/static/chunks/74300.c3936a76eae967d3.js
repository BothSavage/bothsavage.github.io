"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[74300],{74300:function(e,t,s){s.r(t);var n=s(85893),a=s(67294),r=s(74925),l=s(93554),c=s(39323),i=s(41664),d=s.n(i),m=s(82477);let h=e=>{let[t,s]=(0,a.useState)([]),{locale:i}=(0,c.O)(),[h,u]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{(0,m.Pq)({serverURL:(0,r.J)("COMMENT_WALINE_SERVER_URL"),count:5}).then(e=>{let{comments:t}=e;u(!1),s(t)})},[]),(0,n.jsxs)(l.default,{children:[(0,n.jsxs)("div",{className:" mb-2 px-1 justify-between",children:[(0,n.jsx)("i",{className:"mr-2 fas fas fa-comment"}),i.COMMON.RECENT_COMMENTS]}),h&&(0,n.jsxs)("div",{children:["Loading...",(0,n.jsx)("i",{className:"ml-2 fas fa-spinner animate-spin"})]}),!h&&t&&0===t.length&&(0,n.jsx)("div",{children:"No Comments"}),!h&&t&&t.length>0&&t.map(e=>(0,n.jsxs)("div",{className:"pb-2 pl-1",children:[(0,n.jsx)("div",{className:"dark:text-gray-200 text-sm waline-recent-content wl-content",dangerouslySetInnerHTML:{__html:e.comment}}),(0,n.jsx)("div",{className:"dark:text-gray-400 text-gray-400  text-sm text-right cursor-pointer hover:text-red-500 hover:underline pt-1 pr-2",children:(0,n.jsxs)(d(),{href:{pathname:e.url,hash:e.objectId,query:{target:"comment"}},children:["--",e.nick]})})]},e.objectId))]})};t.default=h}}]);