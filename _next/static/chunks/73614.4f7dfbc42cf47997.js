(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[73614],{73614:function(e,t,r){"use strict";r.r(t);var n=r(85893),o=r(67294),a=r(15660),i=r.n(a);r(75206),r(25193),r(42695),r(66263),r(98759),r(21311);var l=r(22006),s=r(39332),u=r(54110),c=r(66043);let loadPrismThemeCSS=(e,t,r,n,o)=>{let a,i;if(t){e?(a=r,i=n):(a=n,i=r);let t=document.querySelector('link[href="'.concat(i,'"]'));t&&t.parentNode.removeChild(t),(0,l.TY)(a,"css")}else(0,l.TY)(o,"css")},renderCollapseCode=(e,t)=>{if(!e)return;let r=document.querySelectorAll(".code-toolbar");for(let e of r){if(e.closest(".collapse-wrapper"))continue;let r=e.querySelector("code"),n=r.getAttribute("class").match(/language-(\w+)/)[1],o=document.createElement("div");o.className="collapse-wrapper w-full py-2";let a=document.createElement("div");a.className="border dark:border-gray-600 rounded-md hover:border-indigo-500 duration-200 transition-colors";let i=document.createElement("div");i.className="flex justify-between items-center px-4 py-2 cursor-pointer select-none",i.innerHTML='<h3 class="text-lg font-medium">'.concat(n,'</h3><svg class="transition-all duration-200 w-5 h-5 transform rotate-0" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6.293 6.293a1 1 0 0 1 1.414 0L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z" clip-rule="evenodd"/></svg>');let l=document.createElement("div");function collapseCode(){l.classList.toggle("invisible"),l.classList.toggle("h-0"),l.classList.toggle("h-auto"),i.querySelector("svg").classList.toggle("rotate-180"),a.classList.toggle("border-gray-300")}l.className="invisible h-0 transition-transform duration-200 border-t border-gray-300",a.appendChild(i),a.appendChild(l),o.appendChild(a),e.parentNode.insertBefore(o,e),l.appendChild(e),i.addEventListener("click",collapseCode),t&&i.click()}},renderMermaid=async e=>{let t=new MutationObserver(async t=>{for(let n of t)if("notion-code language-mermaid"===n.target.className){let t=n.target.querySelector("code").textContent;if(t&&!n.target.querySelector(".mermaid")){let e=document.createElement("div");e.className="mermaid",e.innerHTML=t,n.target.appendChild(e)}let o=document.querySelectorAll(".mermaid");if(o){let t=!1;for(let e of o){var r;(null==e?void 0:null===(r=e.firstChild)||void 0===r?void 0:r.nodeName)!=="svg"&&(t=!0)}t&&(0,l.TY)(e,"js").then(e=>{setTimeout(()=>{let e=window.mermaid;null==e||e.contentLoaded()},100)})}}});document.querySelector("#notion-article")&&t.observe(document.querySelector("#notion-article"),{attributes:!0,subtree:!0})},fixCodeLineStyle=()=>{let e=new MutationObserver(e=>{for(let t of e)if("DETAILS"===t.target.nodeName){let e=t.target.querySelectorAll("pre.notion-code");for(let t of e)i().plugins.lineNumbers.resize(t)}});e.observe(document.querySelector("#notion-article"),{attributes:!0,subtree:!0}),setTimeout(()=>{let e=document.querySelectorAll("pre.notion-code");for(let t of e)i().plugins.lineNumbers.resize(t)},10)};t.default=()=>{let e=(0,s.useRouter)(),{isDarkMode:t}=(0,u.O)(),r=(0,c.J)("CODE_MAC_BAR"),a=(0,c.J)("PRISM_JS_AUTO_LOADER"),d=(0,c.J)("PRISM_JS_PATH"),p=(0,c.J)("PRISM_THEME_SWITCH"),f=(0,c.J)("PRISM_THEME_DARK_PATH"),m=(0,c.J)("PRISM_THEME_LIGHT_PATH"),g=(0,c.J)("PRISM_THEME_PREFIX_PATH"),y=(0,c.J)("MERMAID_CDN"),S=(0,c.J)("CODE_LINE_NUMBERS"),b=(0,c.J)("CODE_COLLAPSE"),h=(0,c.J)("CODE_COLLAPSE_EXPAND_DEFAULT");return(0,o.useEffect)(()=>{r&&(0,l.TY)("/css/prism-mac-style.css","css"),loadPrismThemeCSS(t,p,f,m,g),(0,l.TY)(a,"js").then(e=>{var t,r,n;(null===(n=window)||void 0===n?void 0:null===(r=n.Prism)||void 0===r?void 0:null===(t=r.plugins)||void 0===t?void 0:t.autoloader)&&(window.Prism.plugins.autoloader.languages_path=d),function(e){var t;let r=null===(t=document)||void 0===t?void 0:t.getElementById("notion-article");if(e){let e=null==r?void 0:r.getElementsByTagName("pre");e&&Array.from(e).forEach(e=>{e.classList.contains("line-numbers")||(e.classList.add("line-numbers"),e.style.whiteSpace="pre-wrap")})}try{i().highlightAll()}catch(e){console.log("代码渲染",e)}let n=null==r?void 0:r.getElementsByClassName("code-toolbar");n&&Array.from(n).forEach(e=>{let t=e.getElementsByClassName("pre-mac");if(t.length<n.length){let t=document.createElement("div");t.classList.add("pre-mac"),t.innerHTML="<span></span><span></span><span></span>",null==e||e.appendChild(t,e)}}),e&&fixCodeLineStyle()}(S),renderMermaid(y),renderCollapseCode(b,h)})},[e,t]),(0,n.jsx)(n.Fragment,{})}},12422:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createAsyncLocalStorage",{enumerable:!0,get:function(){return createAsyncLocalStorage}});let r=Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");let FakeAsyncLocalStorage=class FakeAsyncLocalStorage{disable(){throw r}getStore(){}run(){throw r}exit(){throw r}enterWith(){throw r}};let n=globalThis.AsyncLocalStorage;function createAsyncLocalStorage(){return n?new n:new FakeAsyncLocalStorage}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},88427:function(e,t,r){"use strict";function clientHookInServerComponentError(e){}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"clientHookInServerComponentError",{enumerable:!0,get:function(){return clientHookInServerComponentError}}),r(38754),r(67294),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30636:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return ReadonlyURLSearchParams},useSearchParams:function(){return useSearchParams},usePathname:function(){return usePathname},ServerInsertedHTMLContext:function(){return s.ServerInsertedHTMLContext},useServerInsertedHTML:function(){return s.useServerInsertedHTML},useRouter:function(){return useRouter},useParams:function(){return useParams},useSelectedLayoutSegments:function(){return useSelectedLayoutSegments},useSelectedLayoutSegment:function(){return useSelectedLayoutSegment},redirect:function(){return u.redirect},permanentRedirect:function(){return u.permanentRedirect},RedirectType:function(){return u.RedirectType},notFound:function(){return c.notFound}});let n=r(67294),o=r(89031),a=r(11593),i=r(88427),l=r(6160),s=r(30252),u=r(37866),c=r(49363),d=Symbol("internal for urlsearchparams readonly");function readonlyURLSearchParamsError(){return Error("ReadonlyURLSearchParams cannot be modified")}let ReadonlyURLSearchParams=class ReadonlyURLSearchParams{[Symbol.iterator](){return this[d][Symbol.iterator]()}append(){throw readonlyURLSearchParamsError()}delete(){throw readonlyURLSearchParamsError()}set(){throw readonlyURLSearchParamsError()}sort(){throw readonlyURLSearchParamsError()}constructor(e){this[d]=e,this.entries=e.entries.bind(e),this.forEach=e.forEach.bind(e),this.get=e.get.bind(e),this.getAll=e.getAll.bind(e),this.has=e.has.bind(e),this.keys=e.keys.bind(e),this.values=e.values.bind(e),this.toString=e.toString.bind(e),this.size=e.size}};function useSearchParams(){(0,i.clientHookInServerComponentError)("useSearchParams");let e=(0,n.useContext)(a.SearchParamsContext),t=(0,n.useMemo)(()=>e?new ReadonlyURLSearchParams(e):null,[e]);return t}function usePathname(){return(0,i.clientHookInServerComponentError)("usePathname"),(0,n.useContext)(a.PathnameContext)}function useRouter(){(0,i.clientHookInServerComponentError)("useRouter");let e=(0,n.useContext)(o.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function useParams(){(0,i.clientHookInServerComponentError)("useParams");let e=(0,n.useContext)(o.GlobalLayoutRouterContext),t=(0,n.useContext)(a.PathParamsContext);return(0,n.useMemo)(()=>(null==e?void 0:e.tree)?function getSelectedParams(e,t){void 0===t&&(t={});let r=e[1];for(let e of Object.values(r)){let r=e[0],n=Array.isArray(r),o=n?r[1]:r;if(!o||o.startsWith("__PAGE__"))continue;let a=n&&("c"===r[2]||"oc"===r[2]);a?t[r[0]]=r[1].split("/"):n&&(t[r[0]]=r[1]),t=getSelectedParams(e,t)}return t}(e.tree):t,[null==e?void 0:e.tree,t])}function useSelectedLayoutSegments(e){void 0===e&&(e="children"),(0,i.clientHookInServerComponentError)("useSelectedLayoutSegments");let{tree:t}=(0,n.useContext)(o.LayoutRouterContext);return function getSelectedLayoutSegmentPath(e,t,r,n){let o;if(void 0===r&&(r=!0),void 0===n&&(n=[]),r)o=e[1][t];else{var a;let t=e[1];o=null!=(a=t.children)?a:Object.values(t)[0]}if(!o)return n;let i=o[0],s=(0,l.getSegmentValue)(i);return!s||s.startsWith("__PAGE__")?n:(n.push(s),getSelectedLayoutSegmentPath(o,t,!1,n))}(t,e)}function useSelectedLayoutSegment(e){void 0===e&&(e="children"),(0,i.clientHookInServerComponentError)("useSelectedLayoutSegment");let t=useSelectedLayoutSegments(e);return 0===t.length?null:t[0]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},49363:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{notFound:function(){return notFound},isNotFoundError:function(){return isNotFoundError}});let r="NEXT_NOT_FOUND";function notFound(){let e=Error(r);throw e.digest=r,e}function isNotFoundError(e){return(null==e?void 0:e.digest)===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},37866:function(e,t,r){"use strict";var n,o;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return n},getRedirectError:function(){return getRedirectError},redirect:function(){return redirect},permanentRedirect:function(){return permanentRedirect},isRedirectError:function(){return isRedirectError},getURLFromRedirectError:function(){return getURLFromRedirectError},getRedirectTypeFromError:function(){return getRedirectTypeFromError}});let a=r(23743),i="NEXT_REDIRECT";function getRedirectError(e,t,r){void 0===r&&(r=!1);let n=Error(i);n.digest=i+";"+t+";"+e+";"+r;let o=a.requestAsyncStorage.getStore();return o&&(n.mutableCookies=o.mutableCookies),n}function redirect(e,t){throw void 0===t&&(t="replace"),getRedirectError(e,t,!1)}function permanentRedirect(e,t){throw void 0===t&&(t="replace"),getRedirectError(e,t,!0)}function isRedirectError(e){if("string"!=typeof(null==e?void 0:e.digest))return!1;let[t,r,n,o]=e.digest.split(";",4);return t===i&&("replace"===r||"push"===r)&&"string"==typeof n&&("true"===o||"false"===o)}function getURLFromRedirectError(e){return isRedirectError(e)?e.digest.split(";",3)[2]:null}function getRedirectTypeFromError(e){if(!isRedirectError(e))throw Error("Not a redirect error");return e.digest.split(";",3)[1]}(o=n||(n={})).push="push",o.replace="replace",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},23743:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"requestAsyncStorage",{enumerable:!0,get:function(){return o}});let n=r(12422),o=(0,n.createAsyncLocalStorage)();("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6160:function(e,t){"use strict";function getSegmentValue(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return getSegmentValue}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30252:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ServerInsertedHTMLContext:function(){return a},useServerInsertedHTML:function(){return useServerInsertedHTML}});let n=r(61757),o=n._(r(67294)),a=o.default.createContext(null);function useServerInsertedHTML(e){let t=(0,o.useContext)(a);t&&t(e)}},21311:function(){},25193:function(){},39332:function(e,t,r){e.exports=r(30636)},66263:function(){!function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document){if(!Prism.plugins.toolbar){console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.");return}Prism.plugins.toolbar.registerButton("copy-to-clipboard",function(e){var t=e.element,r=function(e){var t={copy:"Copy","copy-error":"Press Ctrl+C to copy","copy-success":"Copied!","copy-timeout":5e3};for(var r in t){for(var n="data-prismjs-"+r,o=e;o&&!o.hasAttribute(n);)o=o.parentElement;o&&(t[r]=o.getAttribute(n))}return t}(t),n=document.createElement("button");n.className="copy-to-clipboard-button",n.setAttribute("type","button");var o=document.createElement("span");return n.appendChild(o),setState("copy"),!function(e,t){e.addEventListener("click",function(){navigator.clipboard?navigator.clipboard.writeText(t.getText()).then(t.success,function(){fallbackCopyTextToClipboard(t)}):fallbackCopyTextToClipboard(t)})}(n,{getText:function(){return t.textContent},success:function(){setState("copy-success"),resetText()},error:function(){setState("copy-error"),setTimeout(function(){window.getSelection().selectAllChildren(t)},1),resetText()}}),n;function resetText(){setTimeout(function(){setState("copy")},r["copy-timeout"])}function setState(e){o.textContent=r[e],n.setAttribute("data-copy-state",e)}})}function fallbackCopyTextToClipboard(e){var t=document.createElement("textarea");t.value=e.getText(),t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var r=document.execCommand("copy");setTimeout(function(){r?e.success():e.error()},1)}catch(t){setTimeout(function(){e.error(t)},1)}document.body.removeChild(t)}}()},98759:function(){!function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document){var e="line-numbers",t=/\n(?!$)/g,r=Prism.plugins.lineNumbers={getLine:function(t,r){if("PRE"===t.tagName&&t.classList.contains(e)){var n=t.querySelector(".line-numbers-rows");if(n){var o=parseInt(t.getAttribute("data-start"),10)||1,a=o+(n.children.length-1);r<o&&(r=o),r>a&&(r=a);var i=r-o;return n.children[i]}}},resize:function(e){resizeElements([e])},assumeViewportIndependence:!0},n=void 0;window.addEventListener("resize",function(){r.assumeViewportIndependence&&n===window.innerWidth||(n=window.innerWidth,resizeElements(Array.prototype.slice.call(document.querySelectorAll("pre."+e))))}),Prism.hooks.add("complete",function(r){if(r.code){var n,o=r.element,a=o.parentNode;if(!(!a||!/pre/i.test(a.nodeName)||o.querySelector(".line-numbers-rows"))&&Prism.util.isActive(o,e)){o.classList.remove(e),a.classList.add(e);var i=r.code.match(t),l=Array((i?i.length+1:1)+1).join("<span></span>");(n=document.createElement("span")).setAttribute("aria-hidden","true"),n.className="line-numbers-rows",n.innerHTML=l,a.hasAttribute("data-start")&&(a.style.counterReset="linenumber "+(parseInt(a.getAttribute("data-start"),10)-1)),r.element.appendChild(n),resizeElements([a]),Prism.hooks.run("line-numbers",r)}}}),Prism.hooks.add("line-numbers",function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0})}function resizeElements(e){if(0!=(e=e.filter(function(e){var t=(e?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null)["white-space"];return"pre-wrap"===t||"pre-line"===t})).length){var r=e.map(function(e){var r=e.querySelector("code"),n=e.querySelector(".line-numbers-rows");if(r&&n){var o=e.querySelector(".line-numbers-sizer"),a=r.textContent.split(t);o||((o=document.createElement("span")).className="line-numbers-sizer",r.appendChild(o)),o.innerHTML="0",o.style.display="block";var i=o.getBoundingClientRect().height;return o.innerHTML="",{element:e,lines:a,lineHeights:[],oneLinerHeight:i,sizer:o}}}).filter(Boolean);r.forEach(function(e){var t=e.sizer,r=e.lines,n=e.lineHeights,o=e.oneLinerHeight;n[r.length-1]=void 0,r.forEach(function(e,r){if(e&&e.length>1){var a=t.appendChild(document.createElement("span"));a.style.display="block",a.textContent=e}else n[r]=o})}),r.forEach(function(e){for(var t=e.sizer,r=e.lineHeights,n=0,o=0;o<r.length;o++)void 0===r[o]&&(r[o]=t.children[n++].getBoundingClientRect().height)}),r.forEach(function(e){var t=e.sizer,r=e.element.querySelector(".line-numbers-rows");t.style.display="none",t.innerHTML="",e.lineHeights.forEach(function(e,t){r.children[t].style.height=e+"px"})})}}}()},42695:function(){!function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document){if(!Prism.plugins.toolbar){console.warn("Show Languages plugin loaded before Toolbar plugin.");return}var e={none:"Plain text",plain:"Plain text",plaintext:"Plain text",text:"Plain text",txt:"Plain text",html:"HTML",xml:"XML",svg:"SVG",mathml:"MathML",ssml:"SSML",rss:"RSS",css:"CSS",clike:"C-like",js:"JavaScript",abap:"ABAP",abnf:"ABNF",al:"AL",antlr4:"ANTLR4",g4:"ANTLR4",apacheconf:"Apache Configuration",apl:"APL",aql:"AQL",ino:"Arduino",arff:"ARFF",armasm:"ARM Assembly","arm-asm":"ARM Assembly",art:"Arturo",asciidoc:"AsciiDoc",adoc:"AsciiDoc",aspnet:"ASP.NET (C#)",asm6502:"6502 Assembly",asmatmel:"Atmel AVR Assembly",autohotkey:"AutoHotkey",autoit:"AutoIt",avisynth:"AviSynth",avs:"AviSynth","avro-idl":"Avro IDL",avdl:"Avro IDL",awk:"AWK",gawk:"GAWK",sh:"Shell",basic:"BASIC",bbcode:"BBcode",bbj:"BBj",bnf:"BNF",rbnf:"RBNF",bqn:"BQN",bsl:"BSL (1C:Enterprise)",oscript:"OneScript",csharp:"C#",cs:"C#",dotnet:"C#",cpp:"C++",cfscript:"CFScript",cfc:"CFScript",cil:"CIL",cilkc:"Cilk/C","cilk-c":"Cilk/C",cilkcpp:"Cilk/C++","cilk-cpp":"Cilk/C++",cilk:"Cilk/C++",cmake:"CMake",cobol:"COBOL",coffee:"CoffeeScript",conc:"Concurnas",csp:"Content-Security-Policy","css-extras":"CSS Extras",csv:"CSV",cue:"CUE",dataweave:"DataWeave",dax:"DAX",django:"Django/Jinja2",jinja2:"Django/Jinja2","dns-zone-file":"DNS zone file","dns-zone":"DNS zone file",dockerfile:"Docker",dot:"DOT (Graphviz)",gv:"DOT (Graphviz)",ebnf:"EBNF",editorconfig:"EditorConfig",ejs:"EJS",etlua:"Embedded Lua templating",erb:"ERB","excel-formula":"Excel Formula",xlsx:"Excel Formula",xls:"Excel Formula",fsharp:"F#","firestore-security-rules":"Firestore security rules",ftl:"FreeMarker Template Language",gml:"GameMaker Language",gamemakerlanguage:"GameMaker Language",gap:"GAP (CAS)",gcode:"G-code",gdscript:"GDScript",gedcom:"GEDCOM",gettext:"gettext",po:"gettext",glsl:"GLSL",gn:"GN",gni:"GN","linker-script":"GNU Linker Script",ld:"GNU Linker Script","go-module":"Go module","go-mod":"Go module",graphql:"GraphQL",hbs:"Handlebars",hs:"Haskell",hcl:"HCL",hlsl:"HLSL",http:"HTTP",hpkp:"HTTP Public-Key-Pins",hsts:"HTTP Strict-Transport-Security",ichigojam:"IchigoJam","icu-message-format":"ICU Message Format",idr:"Idris",ignore:".ignore",gitignore:".gitignore",hgignore:".hgignore",npmignore:".npmignore",inform7:"Inform 7",javadoc:"JavaDoc",javadoclike:"JavaDoc-like",javastacktrace:"Java stack trace",jq:"JQ",jsdoc:"JSDoc","js-extras":"JS Extras",json:"JSON",webmanifest:"Web App Manifest",json5:"JSON5",jsonp:"JSONP",jsstacktrace:"JS stack trace","js-templates":"JS Templates",keepalived:"Keepalived Configure",kts:"Kotlin Script",kt:"Kotlin",kumir:"KuMir (КуМир)",kum:"KuMir (КуМир)",latex:"LaTeX",tex:"TeX",context:"ConTeXt",lilypond:"LilyPond",ly:"LilyPond",emacs:"Lisp",elisp:"Lisp","emacs-lisp":"Lisp",llvm:"LLVM IR",log:"Log file",lolcode:"LOLCODE",magma:"Magma (CAS)",md:"Markdown","markup-templating":"Markup templating",matlab:"MATLAB",maxscript:"MAXScript",mel:"MEL",metafont:"METAFONT",mongodb:"MongoDB",moon:"MoonScript",n1ql:"N1QL",n4js:"N4JS",n4jsd:"N4JS","nand2tetris-hdl":"Nand To Tetris HDL",naniscript:"Naninovel Script",nani:"Naninovel Script",nasm:"NASM",neon:"NEON",nginx:"nginx",nsis:"NSIS",objectivec:"Objective-C",objc:"Objective-C",ocaml:"OCaml",opencl:"OpenCL",openqasm:"OpenQasm",qasm:"OpenQasm",parigp:"PARI/GP",objectpascal:"Object Pascal",psl:"PATROL Scripting Language",pcaxis:"PC-Axis",px:"PC-Axis",peoplecode:"PeopleCode",pcode:"PeopleCode",php:"PHP",phpdoc:"PHPDoc","php-extras":"PHP Extras","plant-uml":"PlantUML",plantuml:"PlantUML",plsql:"PL/SQL",powerquery:"PowerQuery",pq:"PowerQuery",mscript:"PowerQuery",powershell:"PowerShell",promql:"PromQL",properties:".properties",protobuf:"Protocol Buffers",purebasic:"PureBasic",pbfasm:"PureBasic",purs:"PureScript",py:"Python",qsharp:"Q#",qs:"Q#",q:"Q (kdb+ database)",qml:"QML",rkt:"Racket",cshtml:"Razor C#",razor:"Razor C#",jsx:"React JSX",tsx:"React TSX",renpy:"Ren'py",rpy:"Ren'py",res:"ReScript",rest:"reST (reStructuredText)",robotframework:"Robot Framework",robot:"Robot Framework",rb:"Ruby",sas:"SAS",sass:"Sass (Sass)",scss:"Sass (SCSS)","shell-session":"Shell session","sh-session":"Shell session",shellsession:"Shell session",sml:"SML",smlnj:"SML/NJ",solidity:"Solidity (Ethereum)",sol:"Solidity (Ethereum)","solution-file":"Solution file",sln:"Solution file",soy:"Soy (Closure Template)",sparql:"SPARQL",rq:"SPARQL","splunk-spl":"Splunk SPL",sqf:"SQF: Status Quo Function (Arma 3)",sql:"SQL",stata:"Stata Ado",iecst:"Structured Text (IEC 61131-3)",supercollider:"SuperCollider",sclang:"SuperCollider",systemd:"Systemd configuration file","t4-templating":"T4 templating","t4-cs":"T4 Text Templates (C#)",t4:"T4 Text Templates (C#)","t4-vb":"T4 Text Templates (VB)",tap:"TAP",tt2:"Template Toolkit 2",toml:"TOML",trickle:"trickle",troy:"troy",trig:"TriG",ts:"TypeScript",tsconfig:"TSConfig",uscript:"UnrealScript",uc:"UnrealScript",uorazor:"UO Razor Script",uri:"URI",url:"URL",vbnet:"VB.Net",vhdl:"VHDL",vim:"vim","visual-basic":"Visual Basic",vba:"VBA",vb:"Visual Basic",wasm:"WebAssembly","web-idl":"Web IDL",webidl:"Web IDL",wgsl:"WGSL",wiki:"Wiki markup",wolfram:"Wolfram language",nb:"Mathematica Notebook",wl:"Wolfram language",xeoracube:"XeoraCube","xml-doc":"XML doc (.net)",xojo:"Xojo (REALbasic)",xquery:"XQuery",yaml:"YAML",yml:"YAML",yang:"YANG"};Prism.plugins.toolbar.registerButton("show-language",function(t){var r,n=t.element.parentNode;if(n&&/pre/i.test(n.nodeName)){var o=n.getAttribute("data-language")||e[t.language]||((r=t.language)?(r.substring(0,1).toUpperCase()+r.substring(1)).replace(/s(?=cript)/,"S"):r);if(o){var a=document.createElement("span");return a.textContent=o,a}}})}}()},75206:function(){!function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document){var e=[],t={},noop=function(){};Prism.plugins.toolbar={};var r=Prism.plugins.toolbar.registerButton=function(r,n){var o;if(o="function"==typeof n?n:function(e){var t;return"function"==typeof n.onClick?((t=document.createElement("button")).type="button",t.addEventListener("click",function(){n.onClick.call(this,e)})):"string"==typeof n.url?(t=document.createElement("a")).href=n.url:t=document.createElement("span"),n.className&&t.classList.add(n.className),t.textContent=n.text,t},r in t){console.warn('There is a button with the key "'+r+'" registered already.');return}e.push(t[r]=o)},n=Prism.plugins.toolbar.hook=function(r){var n=r.element.parentNode;if(!(!n||!/pre/i.test(n.nodeName)||n.parentNode.classList.contains("code-toolbar"))){var o=document.createElement("div");o.classList.add("code-toolbar"),n.parentNode.insertBefore(o,n),o.appendChild(n);var a=document.createElement("div");a.classList.add("toolbar");var i=e,l=function(e){for(;e;){var t=e.getAttribute("data-toolbar-order");if(null!=t){if((t=t.trim()).length)return t.split(/\s*,\s*/g);return[]}e=e.parentElement}}(r.element);l&&(i=l.map(function(e){return t[e]||noop})),i.forEach(function(e){var t=e(r);if(t){var n=document.createElement("div");n.classList.add("toolbar-item"),n.appendChild(t),a.appendChild(n)}}),o.appendChild(a)}};r("label",function(e){var t,r,n=e.element.parentNode;if(n&&/pre/i.test(n.nodeName)&&n.hasAttribute("data-label")){var o=n.getAttribute("data-label");try{r=document.querySelector("template#"+o)}catch(e){}return r?t=r.content:(n.hasAttribute("data-url")?(t=document.createElement("a")).href=n.getAttribute("data-url"):t=document.createElement("span"),t.textContent=o),t}}),Prism.hooks.add("complete",n)}}()}}]);