"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[83922],{83922:function(e,t,r){r.r(t),r.d(t,{default:function(){return QrCode}});var o=r(85893),n=r(66043),c=r(22006),d=r(67294);function QrCode(e){let{value:t}=e,r=(0,n.J)("QR_CODE_CDN");return(0,d.useEffect)(()=>{let e;if(t)return(0,c.TY)(r,"js").then(r=>{var o;let n=null===(o=window)||void 0===o?void 0:o.QRCode;void 0!==n&&(e=new n(document.getElementById("qrcode"),{text:t,width:256,height:256,colorDark:"#000000",colorLight:"#ffffff",correctLevel:n.CorrectLevel.H}))}),()=>{e&&e.clear()}},[]),(0,o.jsx)("div",{id:"qrcode"})}}}]);