(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7634,5890],{99219:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});var n=s(85893),r=s(74925),a=s(9008),l=s.n(a),c=s(67294);function i(e){let{priority:t,id:s,src:a,alt:i,placeholderSrc:u,className:o,width:d,height:f,title:h,onLoad:x,style:m}=e,p=(0,c.useRef)(null),[g,j]=(0,c.useState)(!1);u||(u=(0,r.J)("IMG_LAZY_LOAD_PLACEHOLDER"));let b=()=>{j(!0),"function"==typeof x&&x()};(0,c.useEffect)(()=>{let e=new IntersectionObserver(t=>{t.forEach(t=>{if(t.isIntersecting){let s=t.target;s.src=a,e.unobserve(s)}})},{rootMargin:"50px 0px"});return p.current&&e.observe(p.current),()=>{p.current&&e.unobserve(p.current)}},[a]);let v={ref:p,src:g?a:u,alt:i,onLoad:b};return s&&(v.id=s),h&&(v.title=h),d&&"auto"!==d&&(v.width=d),f&&"auto"!==f&&(v.height=f),o&&(v.className=o),m&&(v.style=m),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{...v}),t&&(0,n.jsx)(l(),{children:(0,n.jsx)("link",{rel:"preload",as:"image",src:a})})]})}},7634:function(e,t,s){"use strict";s.r(t);var n=s(85893),r=s(41664),a=s.n(r),l=s(5890),c=s(11163);let i=e=>{var t;let{post:s,className:r}=e,i=(0,c.useRouter)(),u=i.asPath.split("?")[0]==="/"+s.slug,o=-1!==s.pageIcon.indexOf("amazonaws.com")?s.pageIcon+"&width=88":s.pageIcon;return(0,n.jsx)(a(),{href:"".concat(function(e){if(!e.includes("http"))return e;{let t=e.indexOf("http");return e.slice(t,e.length)}}(s.slug)),target:(t=s.slug).includes("http")&&t.indexOf("http")>-1?"_blank":"_self",passHref:!0,children:(0,n.jsx)("div",{className:"".concat(r," h-full rounded-2xl p-4 dark:bg-neutral-800 cursor-pointer bg-white hover:bg-white dark:hover:bg-gray-800 ").concat(u?"bg-green-50 text-green-500":""),children:(0,n.jsxs)("div",{className:"stack-entry w-full flex space-x-3 select-none dark:text-neutral-200",children:[(0,n.jsx)(l.default,{icon:o,size:"10",className:"text-6xl w-11 h-11 mx-1 my-0 flex-none"}),(0,n.jsxs)("div",{className:"stack-comment flex-auto",children:[(0,n.jsx)("p",{className:"title font-bold",children:s.title}),(0,n.jsx)("p",{className:"description font-normal",children:s.summary?s.summary:"暂无简介"})]})]})},s.id)})};t.default=i},5890:function(e,t,s){"use strict";s.r(t);var n=s(85893),r=s(99219);let a=e=>{let{icon:t}=e;return t?t.startsWith("http")||t.startsWith("data:")?(0,n.jsx)(r.Z,{src:t,className:"w-10 h-10 inline"}):(0,n.jsx)("span",{className:"mr-1 text-4xl",children:t}):(0,n.jsx)(n.Fragment,{})};t.default=a},9008:function(e,t,s){e.exports=s(42636)}}]);