System.register(["./vendor-legacy-a194f484.js","./index-legacy-3a6f8cc6.js"],(function(e,t){"use strict";var r,n,a,o,s,i,c,l,u,p,d,f,g,y,m,h,b,j,k,v,O,x,w;return{setters:[e=>{r=e.bS,n=e.r,a=e.bT,o=e.bU,s=e.k,i=e.j,c=e.B,l=e.bd,u=e.aa,p=e.bV,d=e.F,f=e.aK,g=e.z,y=e.af,m=e.o,h=e.p,b=e.a_,j=e.T,k=e.as},e=>{v=e.m,O=e.l,x=e.M,w=e.b}],execute:function(){var t={},F=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)),N="%[a-f0-9]{2}",S=new RegExp("("+N+")|([^%]+?)","gi"),I=new RegExp("("+N+")+","gi");function C(e,t){try{return[decodeURIComponent(e.join(""))]}catch(a){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],C(r),C(n))}function E(e){try{return decodeURIComponent(e)}catch(n){for(var t=e.match(S)||[],r=1;r<t.length;r++)t=(e=C(t,r).join("")).match(S)||[];return e}}var U=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},n=I.exec(e);n;){try{r[n[0]]=decodeURIComponent(n[0])}catch(t){var a=E(n[0]);a!==n[0]&&(r[n[0]]=a)}n=I.exec(e)}r["%C2"]="�";for(var o=Object.keys(r),s=0;s<o.length;s++){var i=o[s];e=e.replace(new RegExp(i,"g"),r[i])}return e}(e)}},A=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]},$=function(e,t){for(var r={},n=Object.keys(e),a=Array.isArray(t),o=0;o<n.length;o++){var s=n[o],i=e[s];(a?-1!==t.indexOf(s):t(s,i,e))&&(r[s]=i)}return r};!function(e){const t=F,r=U,n=A,a=$;function o(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function s(e,r){return r.encode?r.strict?t(e):encodeURIComponent(e):e}function i(e,t){return t.decode?r(e):e}function c(e){return Array.isArray(e)?e.sort():"object"==typeof e?c(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function l(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function u(e){const t=(e=l(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function p(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function d(e,t){o((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const a="string"==typeof r&&r.includes(e.arrayFormatSeparator),o="string"==typeof r&&!a&&i(r,e).includes(e.arrayFormatSeparator);r=o?i(r,e):r;const s=a||o?r.split(e.arrayFormatSeparator).map((t=>i(t,e))):null===r?r:i(r,e);n[t]=s};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),a=Object.create(null);if("string"!=typeof e)return a;if(!(e=e.trim().replace(/^[?#&]/,"")))return a;for(const o of e.split("&")){if(""===o)continue;let[e,s]=n(t.decode?o.replace(/\+/g," "):o,"=");s=void 0===s?null:["comma","separator"].includes(t.arrayFormat)?s:i(s,t),r(i(e,t),s,a)}for(const n of Object.keys(a)){const e=a[n];if("object"==typeof e&&null!==e)for(const r of Object.keys(e))e[r]=p(e[r],t);else a[n]=p(e,t)}return!1===t.sort?a:(!0===t.sort?Object.keys(a).sort():Object.keys(a).sort(t.sort)).reduce(((e,t)=>{const r=a[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=c(r):e[t]=r,e}),Object.create(null))}e.extract=u,e.parse=d,e.stringify=(e,t)=>{if(!e)return"";o((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const r=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const a=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[s(t,e),"[",a,"]"].join("")]:[...r,[s(t,e),"[",s(a,e),"]=",s(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[s(t,e),"[]"].join("")]:[...r,[s(t,e),"[]=",s(n,e)].join("")];case"comma":case"separator":return t=>(r,n)=>null==n||0===n.length?r:0===r.length?[[s(t,e),"=",s(n,e)].join("")]:[[r,s(n,e)].join(e.arrayFormatSeparator)];default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,s(t,e)]:[...r,[s(t,e),"=",s(n,e)].join("")]}}(t),a={};for(const o of Object.keys(e))r(o)||(a[o]=e[o]);const i=Object.keys(a);return!1!==t.sort&&i.sort(t.sort),i.map((r=>{const a=e[r];return void 0===a?"":null===a?s(r,t):Array.isArray(a)?a.reduce(n(r),[]).join("&"):s(r,t)+"="+s(a,t)})).filter((e=>e.length>0)).join("&")},e.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[r,a]=n(e,"#");return Object.assign({url:r.split("?")[0]||"",query:d(u(e),t)},t&&t.parseFragmentIdentifier&&a?{fragmentIdentifier:i(a,t)}:{})},e.stringifyUrl=(t,r)=>{r=Object.assign({encode:!0,strict:!0},r);const n=l(t.url).split("?")[0]||"",a=e.extract(t.url),o=e.parse(a,{sort:!1}),i=Object.assign(o,t.query);let c=e.stringify(i,r);c&&(c=`?${c}`);let u=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(t.url);return t.fragmentIdentifier&&(u=`#${s(t.fragmentIdentifier,r)}`),`${n}${c}${u}`},e.pick=(t,r,n)=>{n=Object.assign({parseFragmentIdentifier:!0},n);const{url:o,query:s,fragmentIdentifier:i}=e.parseUrl(t,n);return e.stringifyUrl({url:o,query:a(s,r),fragmentIdentifier:i},n)},e.exclude=(t,r,n)=>{const a=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return e.pick(t,a,n)}}(t);const R=o,B={parseNumbers:!1,parseBooleans:!1},M={skipNull:!1,skipEmptyString:!1},D=(e,o)=>{var s,i;const{navigateMode:c="push",parseOptions:l,stringifyOptions:u}=o||{},p=Object.assign(Object.assign({},B),l),d=Object.assign(Object.assign({},M),u),f=R.useLocation(),g=null===(s=R.useHistory)||void 0===s?void 0:s.call(R),y=null===(i=R.useNavigate)||void 0===i?void 0:i.call(R),m=r(),h=n.useRef("function"==typeof e?e():e||{}),b=n.useMemo((()=>t.parse(f.search,p)),[f.search]),j=n.useMemo((()=>Object.assign(Object.assign({},h.current),b)),[b]);return[j,a((e=>{const r="function"==typeof e?e(j):e;m(),g&&g[c]({hash:f.hash,search:t.stringify(Object.assign(Object.assign({},b),r),d)||"?"},f.state),y&&y({hash:f.hash,search:t.stringify(Object.assign(Object.assign({},b),r),d)||"?"},{replace:"replace"===c,state:f.state})}))]},T=v()((e=>({root:{width:"100%"},input:{backgroundColor:e.palette.background.paper}}))),_=()=>{const{t:e}=s(),[t,r]=D({s:""},{navigateMode:"push"}),{classes:n}=T();return i(c,{className:n.root,children:i(l,{id:"search-knowledge",className:n.input,type:"text",value:t.s,onChange:e=>{e.preventDefault(),r({s:e.target.value})},placeholder:e("knowledge.search_placeholder").toString(),"aria-label":e("knowledge.search_placeholder").toString(),autoComplete:"off",fullWidth:!0})})},q=v()((e=>({root:{},listItemButton:{display:"flex",flexDirection:"column",alignItems:"flex-start",padding:e.spacing(1,2.5)}}))),L=()=>{const{t:e,i18n:t}=s(),r=u(),[n]=D({s:""}),a=p(n.s),{data:o}=O({keyword:a||void 0,language:t.language}),{classes:c}=q();return i(d,{children:Object.keys(o||{}).map((t=>i(f,{item:!0,xs:12,children:i(x,{title:t,content:!1,children:i(g,{sx:{p:0},children:(o||{})[t].map((t=>i(y,{disablePadding:!0,divider:!0,children:m(h,{className:c.listItemButton,href:`/knowledge/${t.id}`,onClick:e=>{e.preventDefault(),r(`/knowledge/${t.id}`),b.event("click",{category:"knowledge",label:"knowledge_open",id:t.id,title:t.title})},children:[i(j,{variant:"body1",fontWeight:400,noWrap:!0,mb:.5,children:t.title}),i(j,{variant:"caption",noWrap:!0,children:e("knowledge.post.update",{date:k.unix(t.updated_at).format("DD/MM/YYYY")})})]})},t.id)))})})},t)))})};e("default",(()=>(w("knowledge"),m(f,{container:!0,spacing:3,children:[i(f,{item:!0,xs:12,children:i(_,{})}),i(L,{})]}))))}}}));
