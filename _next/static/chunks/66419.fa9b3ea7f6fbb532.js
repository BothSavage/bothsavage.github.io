"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[66419],{66419:function(e,i,a){a.r(i);var l=a(85893),u=a(67294);let c="canvasNestCreated";i.default=()=>{let destroyNest=()=>{let e=document.getElementById(c);e&&e.parentNode&&e.parentNode.removeChild(e)};return(0,u.useEffect)(()=>((function(){let e,i;let a=document.getElementById("__next");if(!a)return;function n(e,i,a){return e.getAttribute(i)||a}function t(){e=l.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,i=l.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}var l=document.createElement("canvas");l.id=c;var u={z:n(a,"zIndex",0),o:n(a,"opacity",.7),c:n(a,"color","0,0,0"),n:n(a,"count",99)},d=l.getContext("2d"),m=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/45)};let r=Math.random;var s={x:null,y:null,max:2e4};l.style.cssText="position:fixed;top:0;left:0;pointer-events:none;z-index:"+u.z+";opacity:"+u.o,a.appendChild(l),t(),window.onresize=t,window.onmousemove=function(e){e=e||window.event,s.x=e.clientX,s.y=e.clientY},window.onmouseout=function(){s.x=null,s.y=null};for(var x=[],w=0;u.n>w;w++){let a=r()*e,l=r()*i,u=2*r()-1,c=2*r()-1;x.push({x:a,y:l,xa:u,ya:c,max:6e3})}setTimeout(function(){!function o(){let a,l,c,r,w,y;d.clearRect(0,0,e,i);let f=[s].concat(x);x.forEach(function(m){for(m.x+=m.xa,m.y+=m.ya,m.xa*=m.x>e||m.x<0?-1:1,m.ya*=m.y>i||m.y<0?-1:1,d.fillRect(m.x-.5,m.y-.5,1,1),l=0;l<f.length;l++)m!==(a=f[l])&&null!==a.x&&null!==a.y&&(y=(r=m.x-a.x)*r+(w=m.y-a.y)*w)<a.max&&(a===s&&y>=a.max/2&&(m.x-=.03*r,m.y-=.03*w),c=(a.max-y)/a.max,d.beginPath(),d.lineWidth=c/2,d.strokeStyle="rgba("+u.c+","+(c+.2)+")",d.moveTo(m.x,m.y),d.lineTo(a.x,a.y),d.stroke());f.splice(f.indexOf(m),1)}),m(o)}()},100)})(),()=>destroyNest()),[]),(0,l.jsx)(l.Fragment,{})}}}]);