(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6770],{99219:function(e,s,a){"use strict";a.d(s,{Z:function(){return i}});var r=a(85893),t=a(74925),n=a(9008),l=a.n(n),c=a(67294);function i(e){let{priority:s,id:a,src:n,alt:i,placeholderSrc:u,className:o,width:d,height:x,title:p,onLoad:f,style:h}=e,m=(0,c.useRef)(null),[j,v]=(0,c.useState)(!1);u||(u=(0,t.J)("IMG_LAZY_LOAD_PLACEHOLDER"));let N=()=>{v(!0),"function"==typeof f&&f()};(0,c.useEffect)(()=>{let e=new IntersectionObserver(s=>{s.forEach(s=>{if(s.isIntersecting){let a=s.target;a.src=n,e.unobserve(a)}})},{rootMargin:"50px 0px"});return m.current&&e.observe(m.current),()=>{m.current&&e.unobserve(m.current)}},[n]);let g={ref:m,src:j?n:u,alt:i,onLoad:N};return a&&(g.id=a),p&&(g.title=p),d&&"auto"!==d&&(g.width=d),x&&"auto"!==x&&(g.height=x),o&&(g.className=o),h&&(g.style=h),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("img",{...g}),s&&(0,r.jsx)(l(),{children:(0,r.jsx)("link",{rel:"preload",as:"image",src:n})})]})}},6770:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return i}});var r=a(85893),t=a(99219),n=a(41664),l=a.n(n),c=a(74925);function i(e){let{post:s,siteInfo:a}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{className:"text-3xl pt-12  dark:text-gray-300",children:null==s?void 0:s.title}),(0,r.jsxs)("section",{className:"py-2 items-center text-sm  px-1",children:[(0,r.jsxs)("div",{className:"flex flex-wrap text-gray-500 py-1 dark:text-gray-600",children:[(0,r.jsxs)("span",{className:"whitespace-nowrap",children:[" ",(0,r.jsx)("i",{className:"far fa-calendar mr-2"}),null==s?void 0:s.publishDay]}),(0,r.jsx)("span",{className:"mx-1",children:"|"}),(0,r.jsxs)("span",{className:"whitespace-nowrap mr-2",children:[(0,r.jsx)("i",{className:"far fa-calendar-check mr-2"}),null==s?void 0:s.lastEditedDay]}),(0,r.jsxs)("div",{className:"hidden busuanzi_container_page_pv font-light mr-2 whitespace-nowrap",children:[(0,r.jsx)("i",{className:"mr-1 fas fa-eye"}),(0,r.jsx)("span",{className:"busuanzi_value_page_pv"})]})]}),(0,r.jsx)(l(),{href:"/about",passHref:!0,legacyBehavior:!0,children:(0,r.jsxs)("div",{className:"flex pt-2",children:[(0,r.jsx)(t.Z,{src:null==a?void 0:a.icon,className:"rounded-full cursor-pointer",width:22,alt:(0,c.J)("AUTHOR")}),(0,r.jsx)("div",{className:"mr-3 ml-2 my-auto text-green-500 cursor-pointer",children:(0,c.J)("AUTHOR")})]})})]})]})}},9008:function(e,s,a){e.exports=a(42636)}}]);