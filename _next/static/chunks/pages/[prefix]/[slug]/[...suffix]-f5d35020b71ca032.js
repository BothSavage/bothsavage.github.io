(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[78885],{99095:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[prefix]/[slug]/[...suffix]",function(){return n(58049)}])},58049:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return i}});var l=n(85893),o=n(71450),i=!0;t.default=e=>(0,l.jsx)(o.default,{...e})},71450:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return p},default:function(){return _prefix_},getRecommendPost:function(){return getRecommendPost}});var l=n(85893),o=n(72924),i=n.n(o),u=n(67294),r=n(11163),d=n(58622);let a={header:0,sub_header:1,sub_sub_header:2},getPageTableOfContents=(e,t)=>{var n;let l=null!==(n=e.content)&&void 0!==n?n:[],o=function getBlockHeader(e,t,n){if(n||(n=[]),!e)return n;for(let u of e){var l,o,i;let e=null===(l=t.block[u])||void 0===l?void 0:l.value;if(!e)continue;let{type:r}=e;if(r.indexOf("header")>=0){let t=n.find(e=>e.id===u);t||n.push({id:u,type:r,text:(0,d.FB)(null===(i=e.properties)||void 0===i?void 0:i.title),indentLevel:a[r]})}(null===(o=e.content)||void 0===o?void 0:o.length)>0&&getBlockHeader(e.content,t,n)}return n}(l,t),i=[{actual:-1,effective:-1}];for(let e of o){let{indentLevel:t}=e;for(;;){let n=i[i.length-1],{actual:l,effective:o}=n;if(t>l)e.indentLevel=o+1,i.push({actual:t,effective:e.indentLevel});else if(t===l){e.indentLevel=o;break}else i.pop()}}return o};var s=n(90054),c=n(88495),f=n.n(c),v=n(22006),g=n(66043),p=!0;function getRecommendPost(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:6,l=[],o=[],i=(null==e?void 0:e.tags)||[];for(let n=0;n<t.length;n++){let u=t[n];if(!(u.id===e.id||0>u.type.indexOf("Post")))for(let e=0;e<i.length;e++){let t=i[e];!(o.indexOf(u.id)>-1)&&u.tags&&u.tags.indexOf(t)>-1&&(l.push(u),o.push(u.id))}}return l.length>n&&(l=l.slice(0,n)),l}var _prefix_=e=>{var t;let{post:n,siteInfo:o}=e,d=(0,r.useRouter)(),[a,c]=(0,u.useState)((null==n?void 0:n.password)&&(null==n?void 0:n.password)!=="");(0,u.useEffect)(()=>{if(n||setTimeout(()=>{if(v.jU){let e=document.getElementById("notion-article");e||d.push("/404").then(()=>{console.warn("找不到页面",d.asPath)})}},8e3),(null==n?void 0:n.password)&&(null==n?void 0:n.password)!=="")c(!0);else{var e;c(!1),!a&&(null==n?void 0:null===(e=n.blockMap)||void 0===e?void 0:e.block)&&(n.content=Object.keys(n.blockMap.block).filter(e=>{var t,l;return(null===(l=n.blockMap.block[e])||void 0===l?void 0:null===(t=l.value)||void 0===t?void 0:t.parent_id)===n.id}),n.toc=getPageTableOfContents(n,n.blockMap))}},[n]);let p={title:n?"".concat(null==n?void 0:n.title," | ").concat((0,g.J)("TITLE")):"".concat((0,g.J)("TITLE")," | loading"),description:null==n?void 0:n.summary,type:null==n?void 0:n.type,slug:null==n?void 0:n.slug,image:(null==n?void 0:n.pageCoverThumbnail)||(null==o?void 0:o.pageCover)||i().HOME_BANNER_IMAGE,category:null==n?void 0:null===(t=n.category)||void 0===t?void 0:t[0],tags:null==n?void 0:n.tags};e={...e,lock:a,meta:p,setLock:c,validPassword:e=>{let t=f()(n.slug+e);return!!e&&t===n.password&&(c(!1),!0)}};let _=(0,s.getLayoutByTheme)({theme:(0,g.J)("THEME"),router:(0,r.useRouter)()});return(0,l.jsx)(_,{...e})}}},function(e){e.O(0,[88495,49774,92888,40179],function(){return e(e.s=99095)}),_N_E=e.O()}]);