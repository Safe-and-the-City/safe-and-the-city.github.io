"use strict";(self.webpackChunki_3_documentation=self.webpackChunki_3_documentation||[]).push([[205],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||l[h]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4127:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2},i="Authorization",u={unversionedId:"authorization",id:"authorization",title:"Authorization",description:"Authorization to the API are accomplished using the x-api-key header. Each request made to the i3 APIs will require the x-api-key header with your unique API key that was issued on sign-up.",source:"@site/docs/authorization.mdx",sourceDirName:".",slug:"/authorization",permalink:"/authorization",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/"},next:{title:"Route Alerts",permalink:"/Geolocation/route-alerts"}},c={},p=[],s={toc:p};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"authorization"},"Authorization"),(0,o.kt)("p",null,"Authorization to the API are accomplished using the ",(0,o.kt)("inlineCode",{parentName:"p"},"x-api-key")," header. Each request made to the i3 APIs will require the ",(0,o.kt)("inlineCode",{parentName:"p"},"x-api-key")," header with your unique API key that was issued on sign-up."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const instance = axios.create({\n    baseURL: 'https://api.i3.safeandthecity.com/api',\n    timeout: 1000,\n    headers: {\n        'Content-Type': 'application/json',\n        'x-api-key': '{YOUR_API_KEY}'\n    }\n});\n\nlet response = instance.post('...');\n")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Your API key should be kept secret at all times, should your key leak in to public it is recommended that you have it replaced with a freshly generated key.")))}l.isMDXComponent=!0}}]);