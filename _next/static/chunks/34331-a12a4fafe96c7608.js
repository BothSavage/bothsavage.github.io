"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[34331],{34331:function(e,t,r){r.r(t),r.d(t,{__N_SSG:function(){return g},default:function(){return w},getRecommendPost:function(){return y}});var o=r(85893),a=r(23273),l=r.n(a),n=r(67294),i=r(11163),s=r(89163);let u={header:0,sub_header:1,sub_sub_header:2},c=(e,t)=>{var r;let o=null!==(r=e.content)&&void 0!==r?r:[],a=function e(t,r,o){if(o||(o=[]),!t)return o;for(let i of t){var a,l,n;let t=null===(a=r.block[i])||void 0===a?void 0:a.value;if(!t)continue;let{type:c}=t;if(c.indexOf("header")>=0){let e=o.find(e=>e.id===i);e||o.push({id:i,type:c,text:(0,s.FB)(null===(n=t.properties)||void 0===n?void 0:n.title),indentLevel:u[c]})}(null===(l=t.content)||void 0===l?void 0:l.length)>0&&e(t.content,r,o)}return o}(o,t),l=[{actual:-1,effective:-1}];for(let e of a){let{indentLevel:t}=e;for(;;){let r=l[l.length-1],{actual:o,effective:a}=r;if(t>o)e.indentLevel=a+1,l.push({actual:t,effective:e.indentLevel});else if(t===o){e.indentLevel=a;break}else l.pop()}}return a};var p=r(66766),d=r(88495),h=r.n(d),v=r(94246),f=r(74925);let m=e=>{var t;let{post:r,siteInfo:a}=e,s=(0,i.useRouter)(),[u,d]=(0,n.useState)((null==r?void 0:r.password)&&(null==r?void 0:r.password)!==""),m=e=>{let t=h()(r.slug+e);return!!e&&t===r.password&&(d(!1),!0)};(0,n.useEffect)(()=>{if(r||setTimeout(()=>{if(v.jU){let e=document.getElementById("notion-article");e||s.push("/404").then(()=>{console.warn("找不到页面",s.asPath)})}},8e3),(null==r?void 0:r.password)&&(null==r?void 0:r.password)!=="")d(!0);else{var e;d(!1),!u&&(null==r?void 0:null===(e=r.blockMap)||void 0===e?void 0:e.block)&&(r.content=Object.keys(r.blockMap.block).filter(e=>{var t,o;return(null===(t=r.blockMap.block[e])||void 0===t?void 0:null===(o=t.value)||void 0===o?void 0:o.parent_id)===r.id}),r.toc=c(r,r.blockMap))}},[r]);let g={title:r?"".concat(null==r?void 0:r.title," | ").concat((0,f.J)("TITLE")):"".concat((0,f.J)("TITLE")," | loading"),description:null==r?void 0:r.summary,type:null==r?void 0:r.type,slug:null==r?void 0:r.slug,image:(null==r?void 0:r.pageCoverThumbnail)||(null==a?void 0:a.pageCover)||l().HOME_BANNER_IMAGE,category:null==r?void 0:null===(t=r.category)||void 0===t?void 0:t[0],tags:null==r?void 0:r.tags};e={...e,lock:u,meta:g,setLock:d,validPassword:m};let y=(0,p.getLayoutByTheme)({theme:(0,f.J)("THEME"),router:(0,i.useRouter)()});return(0,o.jsx)(y,{...e})};var g=!0;function y(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:6,o=[],a=[],l=(null==e?void 0:e.tags)||[];for(let r=0;r<t.length;r++){let n=t[r];if(!(n.id===e.id||0>n.type.indexOf("Post")))for(let e=0;e<l.length;e++){let t=l[e];!(a.indexOf(n.id)>-1)&&n.tags&&n.tags.indexOf(t)>-1&&(o.push(n),a.push(n.id))}}return o.length>r&&(o=o.slice(0,r)),o}var w=m},89163:function(e,t,r){r.d(t,{Ho:function(){return i},FB:function(){return n},Gw:function(){return u}}),r(13900);var o=r(55055);let a=(e,t)=>t.some(t=>t instanceof RegExp?t.test(e):t===e),l=(e,{stripHash:t})=>{let r=/^data:(?<type>[^,]*?),(?<data>[^#]*?)(?:#(?<hash>.*))?$/.exec(e);if(!r)throw Error(`Invalid URL: ${e}`);let{type:o,data:a,hash:l}=r.groups,n=o.split(";");l=t?"":l;let i=!1;"base64"===n[n.length-1]&&(n.pop(),i=!0);let s=(n.shift()||"").toLowerCase(),u=n.map(e=>{let[t,r=""]=e.split("=").map(e=>e.trim());return"charset"===t&&"us-ascii"===(r=r.toLowerCase())?"":`${t}${r?`=${r}`:""}`}).filter(Boolean),c=[...u];return i&&c.push("base64"),(c.length>0||s&&"text/plain"!==s)&&c.unshift(s),`data:${c.join(";")},${i?a.trim():a}${l?`#${l}`:""}`};Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var n=e=>{var t;return e?Array.isArray(e)?null!=(t=null==e?void 0:e.reduce((e,t)=>e+("⁍"!==t[0]&&"‣"!==t[0]?t[0]:""),""))?t:"":e:""};function i(e,t){var r,o;if(null!=(r=e.properties)&&r.title)return n(e.properties.title);if("collection_view_page"===e.type||"collection_view"===e.type){let r=function(e,t){var r,o,a,l,n,i,s;let u=e.collection_id||(null==(o=null==(r=e.format)?void 0:r.collection_pointer)?void 0:o.id);if(u)return u;let c=null==(a=null==e?void 0:e.view_ids)?void 0:a[0];if(c){let e=null==(n=null==(l=t.collection_view)?void 0:l[c])?void 0:n.value;if(e)return null==(s=null==(i=e.format)?void 0:i.collection_pointer)?void 0:s.id}return null}(e,t);if(r){let e=null==(o=t.collection[r])?void 0:o.value;if(e)return n(e.name)}}return""}var s=e=>{if(e&&Array.isArray(e)){if("d"===e[0])return e[1];for(let t of e){let e=s(t);if(e)return e}}return null},u=e=>e.replace(/-/g,""),c=(0,o.ZP)(e=>{if(!e)return"";try{if(e.startsWith("https://www.notion.so/image/")){let t=new URL(e),r=decodeURIComponent(t.pathname.substr(7)),o=c(r);t.pathname=`/image/${encodeURIComponent(o)}`,e=t.toString()}return function(e,t){if(t={defaultProtocol:"http:",normalizeProtocol:!0,forceHttp:!1,forceHttps:!1,stripAuthentication:!0,stripHash:!1,stripTextFragment:!0,stripWWW:!0,removeQueryParameters:[/^utm_\w+/i],removeTrailingSlash:!0,removeSingleSlash:!0,removeDirectoryIndex:!1,removeExplicitPort:!1,sortQueryParameters:!0,...t},e=e.trim(),/^data:/i.test(e))return l(e,t);if(/^view-source:/i.test(e))throw Error("`view-source:` is not supported as it is a non-standard protocol");let r=e.startsWith("//"),o=!r&&/^\.*\//.test(e);o||(e=e.replace(/^(?!(?:\w+:)?\/\/)|^\/\//,t.defaultProtocol));let n=new URL(e);if(t.forceHttp&&t.forceHttps)throw Error("The `forceHttp` and `forceHttps` options cannot be used together");if(t.forceHttp&&"https:"===n.protocol&&(n.protocol="http:"),t.forceHttps&&"http:"===n.protocol&&(n.protocol="https:"),t.stripAuthentication&&(n.username="",n.password=""),t.stripHash?n.hash="":t.stripTextFragment&&(n.hash=n.hash.replace(/#?:~:text.*?$/i,"")),n.pathname){let e=/\b[a-z][a-z\d+\-.]{1,50}:\/\//g,t=0,r="";for(;;){let o=e.exec(n.pathname);if(!o)break;let a=o[0],l=o.index,i=n.pathname.slice(t,l);r+=i.replace(/\/{2,}/g,"/")+a,t=l+a.length}let o=n.pathname.slice(t,n.pathname.length);r+=o.replace(/\/{2,}/g,"/"),n.pathname=r}if(n.pathname)try{n.pathname=decodeURI(n.pathname)}catch{}if(!0===t.removeDirectoryIndex&&(t.removeDirectoryIndex=[/^index\.[a-z]+$/]),Array.isArray(t.removeDirectoryIndex)&&t.removeDirectoryIndex.length>0){let e=n.pathname.split("/"),r=e[e.length-1];a(r,t.removeDirectoryIndex)&&(e=e.slice(0,-1),n.pathname=e.slice(1).join("/")+"/")}if(n.hostname&&(n.hostname=n.hostname.replace(/\.$/,""),t.stripWWW&&/^www\.(?!www\.)[a-z\-\d]{1,63}\.[a-z.\-\d]{2,63}$/.test(n.hostname)&&(n.hostname=n.hostname.replace(/^www\./,""))),Array.isArray(t.removeQueryParameters))for(let e of[...n.searchParams.keys()])a(e,t.removeQueryParameters)&&n.searchParams.delete(e);if(Array.isArray(t.keepQueryParameters)||!0!==t.removeQueryParameters||(n.search=""),Array.isArray(t.keepQueryParameters)&&t.keepQueryParameters.length>0)for(let e of[...n.searchParams.keys()])a(e,t.keepQueryParameters)||n.searchParams.delete(e);if(t.sortQueryParameters){n.searchParams.sort();try{n.search=decodeURIComponent(n.search)}catch{}}t.removeTrailingSlash&&(n.pathname=n.pathname.replace(/\/$/,"")),t.removeExplicitPort&&n.port&&(n.port="");let i=e;return e=n.toString(),t.removeSingleSlash||"/"!==n.pathname||i.endsWith("/")||""!==n.hash||(e=e.replace(/\/$/,"")),(t.removeTrailingSlash||"/"===n.pathname)&&""===n.hash&&t.removeSingleSlash&&(e=e.replace(/\/$/,"")),r&&!t.normalizeProtocol&&(e=e.replace(/^http:\/\//,"//")),t.stripProtocol&&(e=e.replace(/^(?:https?:)?\/\//,"")),e}(e,{stripProtocol:!0,stripWWW:!0,stripHash:!0,stripTextFragment:!0,removeQueryParameters:!0})}catch(e){return""}})}}]);