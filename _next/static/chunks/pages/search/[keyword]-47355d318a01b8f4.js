(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41565],{17809:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search/[keyword]",function(){return n(9599)}])},9599:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return l},getPageContentText:function(){return getPageContentText}});var o=n(85893),r=n(54110),i=n(11163),u=n(90054),c=n(66043);function appendText(t,e,n){if(!e)return t;let o=e[n],r=o?function getTextContent(t){if("object"==typeof t&&isIterable(t)){let e="";for(let n of t)e+=getTextContent(n);return e}if("string"==typeof t)return t}(o):"";return r&&"Untitled"!==r?t.concat(r):t}let isIterable=t=>null!=t&&"function"==typeof t[Symbol.iterator];var l=!0;function getPageContentText(t,e){let n=[];if(e&&e.block&&!t.password){let t=Object.keys(e.block);t.forEach(t=>{var o,r;let i=null==e?void 0:null===(r=e.block[t])||void 0===r?void 0:null===(o=r.value)||void 0===o?void 0:o.properties;n=appendText(n,i,"title"),n=appendText(n,i,"caption")})}return n.join("")}e.default=t=>{let{keyword:e,siteInfo:n}=t,{locale:l}=(0,r.O)(),a=(0,u.getLayoutByTheme)({theme:(0,c.J)("THEME"),router:(0,i.useRouter)()}),f={title:"".concat(e||"").concat(e?" | ":"").concat(l.NAV.SEARCH," | ").concat((0,c.J)("TITLE")),description:(0,c.J)("TITLE"),image:null==n?void 0:n.pageCover,slug:"search/"+(e||""),type:"website"};return t={...t,meta:f},(0,o.jsx)(a,{...t})}}},function(t){t.O(0,[49774,92888,40179],function(){return t(t.s=17809)}),_N_E=t.O()}]);