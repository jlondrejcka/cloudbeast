(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{100:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionContext=t.DocsPreferredVersionContextProvider=void 0;const a=i(n(0)),u=n(98),c=n(99),l=n(90),d=s(n(116));function f({pluginIds:e,versionPersistence:t,allDocsData:n}){const r={};return e.forEach((e=>{r[e]=function(e){const r=d.default.read(e,t);return n[e].versions.some((e=>e.name===r))?{preferredVersionName:r}:(d.default.clear(e,t),{preferredVersionName:null})}(e)})),r}function m(){const e=l.useAllDocsData(),t=u.useThemeConfig().docs.versionPersistence,n=a.useMemo((()=>Object.keys(e)),[e]),[r,o]=a.useState((()=>function(e){const t={};return e.forEach((e=>{t[e]={preferredVersionName:null}})),t}(n)));a.useEffect((()=>{o(f({allDocsData:e,versionPersistence:t,pluginIds:n}))}),[e,t,n]);return[r,a.useMemo((()=>({savePreferredVersion:function(e,n){d.default.save(e,t,n),o((t=>Object.assign(Object.assign({},t),{[e]:{preferredVersionName:n}})))}})),[o])]}const g=a.createContext(null);function v({children:e}){const t=m();return a.default.createElement(g.Provider,{value:t},e)}t.DocsPreferredVersionContextProvider=function({children:e}){return c.isDocsPluginEnabled?a.default.createElement(v,null,e):a.default.createElement(a.default.Fragment,null,e)},t.useDocsPreferredVersionContext=function(){const e=a.useContext(g);if(!e)throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");return e}},109:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(98);Object.defineProperty(t,"useThemeConfig",{enumerable:!0,get:function(){return r.useThemeConfig}});var o=n(110);Object.defineProperty(t,"docVersionSearchTag",{enumerable:!0,get:function(){return o.docVersionSearchTag}}),Object.defineProperty(t,"DEFAULT_SEARCH_TAG",{enumerable:!0,get:function(){return o.DEFAULT_SEARCH_TAG}});var i=n(99);Object.defineProperty(t,"isDocsPluginEnabled",{enumerable:!0,get:function(){return i.isDocsPluginEnabled}});var s=n(113);Object.defineProperty(t,"isSamePath",{enumerable:!0,get:function(){return s.isSamePath}});var a=n(114);Object.defineProperty(t,"useTitleFormatter",{enumerable:!0,get:function(){return a.useTitleFormatter}});var u=n(115);Object.defineProperty(t,"useDocsPreferredVersion",{enumerable:!0,get:function(){return u.useDocsPreferredVersion}}),Object.defineProperty(t,"useDocsPreferredVersionByPluginId",{enumerable:!0,get:function(){return u.useDocsPreferredVersionByPluginId}});var c=n(100);Object.defineProperty(t,"DocsPreferredVersionContextProvider",{enumerable:!0,get:function(){return c.DocsPreferredVersionContextProvider}})},110:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.docVersionSearchTag=t.DEFAULT_SEARCH_TAG=void 0,t.DEFAULT_SEARCH_TAG="default",t.docVersionSearchTag=function(e,t){return`docs-${e}-${t}`}},111:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o})),n.d(t,"useAllPluginInstancesData",(function(){return i})),n.d(t,"usePluginData",(function(){return s}));var r=n(20);function o(){const{globalData:e}=Object(r.default)();if(!e)throw new Error("Docusaurus global data not found");return e}function i(e){const t=o()[e];if(!t)throw new Error(`Docusaurus plugin global data not found for pluginName=${e}`);return t}function s(e,t="default"){const n=i(e)[t];if(!n)throw new Error(`Docusaurus plugin global data not found for pluginName=${e} and pluginId=${t}`);return n}},112:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;const r=n(88);t.getActivePlugin=function(e,t,n={}){const o=Object.entries(e).find((([e,n])=>!!r.matchPath(t,{path:n.path,exact:!1,strict:!1}))),i=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!i&&n.failfast)throw new Error(`Can't find active docs plugin for pathname=${t}, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ${Object.values(e).map((e=>e.path)).join(", ")}`);return i},t.getLatestVersion=e=>e.versions.find((e=>e.isLast)),t.getActiveVersion=(e,n)=>{const o=t.getLatestVersion(e);return[...e.versions.filter((e=>e!==o)),o].find((e=>!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})))},t.getActiveDocContext=(e,n)=>{const o=t.getActiveVersion(e,n),i=null==o?void 0:o.docs.find((e=>!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})));return{activeVersion:o,activeDoc:i,alternateDocVersions:i?function(t){const n={};return e.versions.forEach((e=>{e.docs.forEach((r=>{r.id===t&&(n[e.name]=r)}))})),n}(i.id):{}}},t.getDocVersionSuggestions=(e,n)=>{const r=t.getLatestVersion(e),o=t.getActiveDocContext(e,n),i=o.activeVersion!==r;return{latestDocSuggestion:i?null==o?void 0:o.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:i?r:void 0}}},113:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSamePath=void 0,t.isSamePath=(e,t)=>{const n=e=>!e||(null==e?void 0:e.endsWith("/"))?e:`${e}/`;return n(e)===n(t)}},114:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useTitleFormatter=void 0;const o=r(n(20));t.useTitleFormatter=e=>{const{siteConfig:t={}}=o.default(),{title:n,titleDelimiter:r="|"}=t;return e&&e.trim().length?`${e.trim()} ${r} ${n}`:n}},115:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=void 0;const r=n(0),o=n(100),i=n(90),s=n(117);t.useDocsPreferredVersion=function(e=s.DEFAULT_PLUGIN_ID){const t=i.useDocsData(e),[n,a]=o.useDocsPreferredVersionContext(),{preferredVersionName:u}=n[e];return{preferredVersion:u?t.versions.find((e=>e.name===u)):null,savePreferredVersionName:r.useCallback((t=>{a.savePreferredVersion(e,t)}),[a])}},t.useDocsPreferredVersionByPluginId=function(){const e=i.useAllDocsData(),[t]=o.useDocsPreferredVersionContext(),n=Object.keys(e),r={};return n.forEach((n=>{r[n]=function(n){const r=e[n],{preferredVersionName:o}=t[n];return o?r.versions.find((e=>e.name===o)):null}(n)})),r}},116:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=e=>`docs-preferred-version-${e}`,o={save:(e,t,n)=>{"none"===t||window.localStorage.setItem(r(e),n)},read:(e,t)=>"none"===t?null:window.localStorage.getItem(r(e)),clear:(e,t)=>{"none"===t||window.localStorage.removeItem(r(e))}};t.default=o},117:function(e,t,n){"use strict";n.r(t),n.d(t,"DEFAULT_PLUGIN_ID",(function(){return r}));const r="default"},77:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(82),s=n(23),a=n(81);var u=function(e){const{previous:t,next:n}=e.metadata;return o.a.createElement("nav",{"aria-label":"Doc list page navigation",className:"my-5 p-0"},o.a.createElement("ul",{className:"pagination justify-content-between"},o.a.createElement("li",{className:"page-item mr-2"},t&&o.a.createElement(a.a,{className:"page-link",to:t.permalink},"\xab ",t.title)),o.a.createElement("li",{className:"page-item ml-2"},n&&o.a.createElement(a.a,{className:"page-link",to:n.permalink},n.title," \xbb"))))},c=n(109),l=n(20),d=n(83);t.default=function(e){const{siteConfig:t={}}=Object(l.default)(),{url:n}=t,{content:r}=e,{metadata:a}=r,{description:f,title:m,permalink:g}=a,{frontMatter:{image:v,keywords:p}}=r,b=Object(c.useTitleFormatter)(m);let D=n+Object(d.a)(v);return Object(i.a)(v)||(D=v),o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,null,o.a.createElement("title",null,b),o.a.createElement("meta",{property:"og:title",content:b}),f&&o.a.createElement("meta",{name:"description",content:f}),f&&o.a.createElement("meta",{property:"og:description",content:f}),p&&p.length&&o.a.createElement("meta",{name:"keywords",content:p.join(",")}),v&&o.a.createElement("meta",{property:"og:image",content:D}),v&&o.a.createElement("meta",{name:"twitter:image",content:D}),v&&o.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${m}`}),g&&o.a.createElement("meta",{property:"og:url",content:n+g})),o.a.createElement("main",{className:"col col-md-8 p-0"},o.a.createElement(r,null),o.a.createElement(u,{metadata:a})))}},81:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(9),s=n(82),a=n(22);const u=Object(r.createContext)({collectLink:()=>{}});var c=n(83),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,{isNavLink:n,to:d,href:f,activeClassName:m,isActive:g,"data-noBrokenLinkCheck":v,autoAddBaseUrl:p=!0}=e,b=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:D}=Object(c.b)(),h=Object(r.useContext)(u),P=d||f,V=Object(s.a)(P),O=null==P?void 0:P.replace("pathname://",""),E=void 0!==O?(_=O,p&&(e=>e.startsWith("/"))(_)?D(_):_):void 0;var _;const j=Object(r.useRef)(!1),y=n?i.e:i.c,A=a.a.canUseIntersectionObserver;let w;Object(r.useEffect)((()=>(!A&&V&&window.docusaurus.prefetch(E),()=>{A&&w&&w.disconnect()})),[E,A,V]);const C=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,L=!E||!V||C;return E&&V&&!C&&!v&&h.collectLink(E),L?o.a.createElement("a",Object.assign({href:E},P&&!V&&{target:"_blank",rel:"noopener noreferrer"},b)):o.a.createElement(y,Object.assign({},b,{onMouseEnter:()=>{j.current||(window.docusaurus.preload(E),j.current=!0)},innerRef:e=>{var t,n;A&&e&&V&&(t=e,n=()=>{window.docusaurus.prefetch(E)},w=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(w.unobserve(t),w.disconnect(),n())}))})),w.observe(t))},to:E||""},n&&{isActive:g,activeClassName:m}))}},82:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},83:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));var r=n(20),o=n(82);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(r)return t+n;const s=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+s:s}(t,e,n,r)}}function s(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},88:function(e,t,n){"use strict";n.r(t);var r=n(9);n.d(t,"MemoryRouter",(function(){return r.d})),n.d(t,"Prompt",(function(){return r.f})),n.d(t,"Redirect",(function(){return r.g})),n.d(t,"Route",(function(){return r.h})),n.d(t,"Router",(function(){return r.i})),n.d(t,"StaticRouter",(function(){return r.j})),n.d(t,"Switch",(function(){return r.k})),n.d(t,"generatePath",(function(){return r.l})),n.d(t,"matchPath",(function(){return r.m})),n.d(t,"useHistory",(function(){return r.n})),n.d(t,"useLocation",(function(){return r.o})),n.d(t,"useParams",(function(){return r.p})),n.d(t,"useRouteMatch",(function(){return r.q})),n.d(t,"withRouter",(function(){return r.r})),n.d(t,"BrowserRouter",(function(){return r.a})),n.d(t,"HashRouter",(function(){return r.b})),n.d(t,"Link",(function(){return r.c})),n.d(t,"NavLink",(function(){return r.e}))},90:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;const r=n(88),o=n(111),i=n(112);t.useAllDocsData=()=>o.useAllPluginInstancesData("docusaurus-plugin-content-docs"),t.useDocsData=e=>o.usePluginData("docusaurus-plugin-content-docs",e),t.useActivePlugin=(e={})=>{const n=t.useAllDocsData(),{pathname:o}=r.useLocation();return i.getActivePlugin(n,o,e)},t.useActivePluginAndVersion=(e={})=>{const n=t.useActivePlugin(e),{pathname:o}=r.useLocation();if(n){return{activePlugin:n,activeVersion:i.getActiveVersion(n.pluginData,o)}}},t.useVersions=e=>t.useDocsData(e).versions,t.useLatestVersion=e=>{const n=t.useDocsData(e);return i.getLatestVersion(n)},t.useActiveVersion=e=>{const n=t.useDocsData(e),{pathname:o}=r.useLocation();return i.getActiveVersion(n,o)},t.useActiveDocContext=e=>{const n=t.useDocsData(e),{pathname:o}=r.useLocation();return i.getActiveDocContext(n,o)},t.useDocVersionSuggestions=e=>{const n=t.useDocsData(e),{pathname:o}=r.useLocation();return i.getDocVersionSuggestions(n,o)}},98:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useThemeConfig=void 0;const o=r(n(20));t.useThemeConfig=function(){return o.default().siteConfig.themeConfig}},99:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDocsPluginEnabled=void 0;const r=n(90);t.isDocsPluginEnabled=!!r.useAllDocsData}}]);