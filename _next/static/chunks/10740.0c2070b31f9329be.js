(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[10740,93096,76481,40659,11178,74015,91124,43857,74979,90815,43127],{93096:function(e,t,r){var o="Expected a function",a=0/0,n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,p="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,u="object"==typeof self&&self&&self.Object===Object&&self,f=p||u||Function("return this")(),h=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return f.Date.now()};function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==h.call(t))return a;if(y(e)){var t,r="function"==typeof e.valueOf?e.valueOf():e;e=y(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var o=l.test(e);return o||s.test(e)?c(e.slice(2),o?2:8):i.test(e)?a:+e}e.exports=function(e,t,r){var a=!0,n=!0;if("function"!=typeof e)throw TypeError(o);return y(r)&&(a="leading"in r?!!r.leading:a,n="trailing"in r?!!r.trailing:n),function(e,t,r){var a,n,i,l,s,c,p=0,u=!1,f=!1,h=!0;if("function"!=typeof e)throw TypeError(o);function w(t){var r=a,o=n;return a=n=void 0,p=t,l=e.apply(o,r)}function P(e){var r=e-c,o=e-p;return void 0===c||r>=t||r<0||f&&o>=i}function b(){var e,r,o,a=v();if(P(a))return x(a);s=setTimeout(b,(e=a-c,r=a-p,o=t-e,f?d(o,i-r):o))}function x(e){return(s=void 0,h&&a)?w(e):(a=n=void 0,l)}function $(){var e,r=v(),o=P(r);if(a=arguments,n=this,c=r,o){if(void 0===s)return p=e=c,s=setTimeout(b,t),u?w(e):l;if(f)return s=setTimeout(b,t),w(c)}return void 0===s&&(s=setTimeout(b,t)),l}return t=g(t)||0,y(r)&&(u=!!r.leading,i=(f="maxWait"in r)?m(g(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),$.cancel=function(){void 0!==s&&clearTimeout(s),p=0,a=c=n=s=void 0},$.flush=function(){return void 0===s?l:x(v())},$}(e,t,{leading:a,maxWait:t,trailing:n})}},89163:function(e,t,r){"use strict";r.d(t,{Ho:function(){return l},FB:function(){return i},Gw:function(){return c}}),r(13900);var o=r(55055);let a=(e,t)=>t.some(t=>t instanceof RegExp?t.test(e):t===e),n=(e,{stripHash:t})=>{let r=/^data:(?<type>[^,]*?),(?<data>[^#]*?)(?:#(?<hash>.*))?$/.exec(e);if(!r)throw Error(`Invalid URL: ${e}`);let{type:o,data:a,hash:n}=r.groups,i=o.split(";");n=t?"":n;let l=!1;"base64"===i[i.length-1]&&(i.pop(),l=!0);let s=(i.shift()||"").toLowerCase(),c=i.map(e=>{let[t,r=""]=e.split("=").map(e=>e.trim());return"charset"===t&&"us-ascii"===(r=r.toLowerCase())?"":`${t}${r?`=${r}`:""}`}).filter(Boolean),p=[...c];return l&&p.push("base64"),(p.length>0||s&&"text/plain"!==s)&&p.unshift(s),`data:${p.join(";")},${l?a.trim():a}${n?`#${n}`:""}`};Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var i=e=>{var t;return e?Array.isArray(e)?null!=(t=null==e?void 0:e.reduce((e,t)=>e+("⁍"!==t[0]&&"‣"!==t[0]?t[0]:""),""))?t:"":e:""};function l(e,t){var r,o;if(null!=(r=e.properties)&&r.title)return i(e.properties.title);if("collection_view_page"===e.type||"collection_view"===e.type){let r=function(e,t){var r,o,a,n,i,l,s;let c=e.collection_id||(null==(o=null==(r=e.format)?void 0:r.collection_pointer)?void 0:o.id);if(c)return c;let p=null==(a=null==e?void 0:e.view_ids)?void 0:a[0];if(p){let e=null==(i=null==(n=t.collection_view)?void 0:n[p])?void 0:i.value;if(e)return null==(s=null==(l=e.format)?void 0:l.collection_pointer)?void 0:s.id}return null}(e,t);if(r){let e=null==(o=t.collection[r])?void 0:o.value;if(e)return i(e.name)}}return""}var s=e=>{if(e&&Array.isArray(e)){if("d"===e[0])return e[1];for(let t of e){let e=s(t);if(e)return e}}return null},c=e=>e.replace(/-/g,""),p=(0,o.ZP)(e=>{if(!e)return"";try{if(e.startsWith("https://www.notion.so/image/")){let t=new URL(e),r=decodeURIComponent(t.pathname.substr(7)),o=p(r);t.pathname=`/image/${encodeURIComponent(o)}`,e=t.toString()}return function(e,t){if(t={defaultProtocol:"http:",normalizeProtocol:!0,forceHttp:!1,forceHttps:!1,stripAuthentication:!0,stripHash:!1,stripTextFragment:!0,stripWWW:!0,removeQueryParameters:[/^utm_\w+/i],removeTrailingSlash:!0,removeSingleSlash:!0,removeDirectoryIndex:!1,removeExplicitPort:!1,sortQueryParameters:!0,...t},e=e.trim(),/^data:/i.test(e))return n(e,t);if(/^view-source:/i.test(e))throw Error("`view-source:` is not supported as it is a non-standard protocol");let r=e.startsWith("//"),o=!r&&/^\.*\//.test(e);o||(e=e.replace(/^(?!(?:\w+:)?\/\/)|^\/\//,t.defaultProtocol));let i=new URL(e);if(t.forceHttp&&t.forceHttps)throw Error("The `forceHttp` and `forceHttps` options cannot be used together");if(t.forceHttp&&"https:"===i.protocol&&(i.protocol="http:"),t.forceHttps&&"http:"===i.protocol&&(i.protocol="https:"),t.stripAuthentication&&(i.username="",i.password=""),t.stripHash?i.hash="":t.stripTextFragment&&(i.hash=i.hash.replace(/#?:~:text.*?$/i,"")),i.pathname){let e=/\b[a-z][a-z\d+\-.]{1,50}:\/\//g,t=0,r="";for(;;){let o=e.exec(i.pathname);if(!o)break;let a=o[0],n=o.index,l=i.pathname.slice(t,n);r+=l.replace(/\/{2,}/g,"/")+a,t=n+a.length}let o=i.pathname.slice(t,i.pathname.length);r+=o.replace(/\/{2,}/g,"/"),i.pathname=r}if(i.pathname)try{i.pathname=decodeURI(i.pathname)}catch{}if(!0===t.removeDirectoryIndex&&(t.removeDirectoryIndex=[/^index\.[a-z]+$/]),Array.isArray(t.removeDirectoryIndex)&&t.removeDirectoryIndex.length>0){let e=i.pathname.split("/"),r=e[e.length-1];a(r,t.removeDirectoryIndex)&&(e=e.slice(0,-1),i.pathname=e.slice(1).join("/")+"/")}if(i.hostname&&(i.hostname=i.hostname.replace(/\.$/,""),t.stripWWW&&/^www\.(?!www\.)[a-z\-\d]{1,63}\.[a-z.\-\d]{2,63}$/.test(i.hostname)&&(i.hostname=i.hostname.replace(/^www\./,""))),Array.isArray(t.removeQueryParameters))for(let e of[...i.searchParams.keys()])a(e,t.removeQueryParameters)&&i.searchParams.delete(e);if(Array.isArray(t.keepQueryParameters)||!0!==t.removeQueryParameters||(i.search=""),Array.isArray(t.keepQueryParameters)&&t.keepQueryParameters.length>0)for(let e of[...i.searchParams.keys()])a(e,t.keepQueryParameters)||i.searchParams.delete(e);if(t.sortQueryParameters){i.searchParams.sort();try{i.search=decodeURIComponent(i.search)}catch{}}t.removeTrailingSlash&&(i.pathname=i.pathname.replace(/\/$/,"")),t.removeExplicitPort&&i.port&&(i.port="");let l=e;return e=i.toString(),t.removeSingleSlash||"/"!==i.pathname||l.endsWith("/")||""!==i.hash||(e=e.replace(/\/$/,"")),(t.removeTrailingSlash||"/"===i.pathname)&&""===i.hash&&t.removeSingleSlash&&(e=e.replace(/\/$/,"")),r&&!t.normalizeProtocol&&(e=e.replace(/^http:\/\//,"//")),t.stripProtocol&&(e=e.replace(/^(?:https?:)?\/\//,"")),e}(e,{stripProtocol:!0,stripWWW:!0,stripHash:!0,stripTextFragment:!0,removeQueryParameters:!0})}catch(e){return""}})}}]);