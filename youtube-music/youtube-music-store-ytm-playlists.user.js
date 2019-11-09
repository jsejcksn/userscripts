// ==UserScript==
// @name        YouTube Music: Store YTM playlists
// @version     1.0.0
// @description Scrape and store IDs and titles for playlists created by YouTube Music
// @license     MIT
// @author      Jesse Jackson
// @match       https://music.youtube.com
// @namespace   https://github.com/jsejcksn
// @noframes
// @run-at      document-idle
// ==/UserScript==

// https://unpkg.com/browse/preact@10.0.4/dist/preact.umd.js
// eslint-disable-next-line
!function(n,l){"object"==typeof exports&&"undefined"!=typeof module?l(exports):"function"==typeof define&&define.amd?define(["exports"],l):l(n.preact={})}(this,function(n){var l,u,t,i,o,f,e,r={},c=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;function a(n,l){for(var u in l)n[u]=l[u];return n}function h(n){var l=n.parentNode;l&&l.removeChild(n)}function p(n,l,u){var t,i,o,f,e=arguments;if(l=a({},l),arguments.length>3)for(u=[u],t=3;t<arguments.length;t++)u.push(e[t]);if(null!=u&&(l.children=u),null!=n&&null!=n.defaultProps)for(i in n.defaultProps)void 0===l[i]&&(l[i]=n.defaultProps[i]);return f=l.key,null!=(o=l.ref)&&delete l.ref,null!=f&&delete l.key,v(n,l,f,o)}function v(n,u,t,i){var o={type:n,props:u,key:t,ref:i,__k:null,__p:null,__b:0,__e:null,__d:null,__c:null,constructor:void 0};return l.vnode&&l.vnode(o),o}function d(n){return n.children}function y(n,l){this.props=n,this.context=l}function m(n,l){if(null==l)return n.__p?m(n.__p,n.__p.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?m(n):null}function w(n){var l,u;if(null!=(n=n.__p)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return w(n)}}function g(n){(!n.__d&&(n.__d=!0)&&1===t.push(n)||o!==l.debounceRendering)&&(o=l.debounceRendering,(l.debounceRendering||i)(k))}function k(){var n,l,u,i,o,f,e;for(t.sort(function(n,l){return l.__v.__b-n.__v.__b});n=t.pop();)n.__d&&(u=void 0,i=void 0,f=(o=(l=n).__v).__e,(e=l.__P)&&(u=[],i=j(e,o,a({},o),l.__n,void 0!==e.ownerSVGElement,null,u,null==f?m(o):f),T(u,o),i!=f&&w(o)))}function b(n,l,u,t,i,o,f,e,s){var a,p,v,d,y,w,g,k=u&&u.__k||c,b=k.length;if(e==r&&(e=null!=o?o[0]:b?m(u,0):null),a=0,l.__k=_(l.__k,function(u){if(null!=u){if(u.__p=l,u.__b=l.__b+1,null===(v=k[a])||v&&u.key==v.key&&u.type===v.type)k[a]=void 0;else for(p=0;p<b;p++){if((v=k[p])&&u.key==v.key&&u.type===v.type){k[p]=void 0;break}v=null}if(d=j(n,u,v=v||r,t,i,o,f,e,s),(p=u.ref)&&v.ref!=p&&(g||(g=[])).push(p,u.__c||d,u),null!=d){if(null==w&&(w=d),null!=u.__d)d=u.__d,u.__d=null;else if(o==v||d!=e||null==d.parentNode){n:if(null==e||e.parentNode!==n)n.appendChild(d);else{for(y=e,p=0;(y=y.nextSibling)&&p<b;p+=2)if(y==d)break n;n.insertBefore(d,e)}"option"==l.type&&(n.value="")}e=d.nextSibling,"function"==typeof l.type&&(l.__d=d)}}return a++,u}),l.__e=w,null!=o&&"function"!=typeof l.type)for(a=o.length;a--;)null!=o[a]&&h(o[a]);for(a=b;a--;)null!=k[a]&&A(k[a],k[a]);if(g)for(a=0;a<g.length;a++)z(g[a],g[++a],g[++a])}function _(n,l,u){if(null==u&&(u=[]),null==n||"boolean"==typeof n)l&&u.push(l(null));else if(Array.isArray(n))for(var t=0;t<n.length;t++)_(n[t],l,u);else u.push(l?l("string"==typeof n||"number"==typeof n?v(null,n,null,null):null!=n.__e||null!=n.__c?v(n.type,n.props,n.key,null):n):n);return u}function x(n,l,u,t,i){var o;for(o in u)o in l||P(n,o,null,u[o],t);for(o in l)i&&"function"!=typeof l[o]||"value"===o||"checked"===o||u[o]===l[o]||P(n,o,l[o],u[o],t)}function C(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]="number"==typeof u&&!1===s.test(l)?u+"px":null==u?"":u}function P(n,l,u,t,i){var o,f,e,r,c;if("key"===(l=i?"className"===l?"class":l:"class"===l?"className":l)||"children"===l);else if("style"===l)if(o=n.style,"string"==typeof u)o.cssText=u;else{if("string"==typeof t&&(o.cssText="",t=null),t)for(f in t)u&&f in u||C(o,f,"");if(u)for(e in u)t&&u[e]===t[e]||C(o,e,u[e])}else"o"===l[0]&&"n"===l[1]?(r=l!==(l=l.replace(/Capture$/,"")),c=l.toLowerCase(),l=(c in n?c:l).slice(2),u?(t||n.addEventListener(l,N,r),(n.l||(n.l={}))[l]=u):n.removeEventListener(l,N,r)):"list"!==l&&"tagName"!==l&&"form"!==l&&!i&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/^xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u?n.removeAttribute(l):n.setAttribute(l,u))}function N(n){this.l[n.type](l.event?l.event(n):n)}function j(n,u,t,i,o,f,e,r,c){var s,h,p,v,m,w,g,k,x,C,P=u.type;if(void 0!==u.constructor)return null;(s=l.__b)&&s(u);try{n:if("function"==typeof P){if(k=u.props,x=(s=P.contextType)&&i[s.__c],C=s?x?x.props.value:s.__p:i,t.__c?g=(h=u.__c=t.__c).__p=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(k,C):(u.__c=h=new y(k,C),h.constructor=P,h.render=D),x&&x.sub(h),h.props=k,h.state||(h.state={}),h.context=C,h.__n=i,p=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&a(h.__s==h.state?h.__s=a({},h.__s):h.__s,P.getDerivedStateFromProps(k,h.__s)),v=h.props,m=h.state,p)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==P.getDerivedStateFromProps&&null==h.__e&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(k,C),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(k,h.__s,C)){for(h.props=k,h.state=h.__s,h.__d=!1,h.__v=u,u.__e=t.__e,u.__k=t.__k,s=0;s<u.__k.length;s++)u.__k[s]&&(u.__k[s].__p=u);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(k,h.__s,C),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(v,m,w)})}h.context=C,h.props=k,h.state=h.__s,(s=l.__r)&&s(u),h.__d=!1,h.__v=u,h.__P=n,s=h.render(h.props,h.state,h.context),u.__k=_(null!=s&&s.type==d&&null==s.key?s.props.children:s),null!=h.getChildContext&&(i=a(a({},i),h.getChildContext())),p||null==h.getSnapshotBeforeUpdate||(w=h.getSnapshotBeforeUpdate(v,m)),b(n,u,t,i,o,f,e,r,c),h.base=u.__e,h.__h.length&&e.push(h),g&&(h.__E=h.__p=null),h.__e=null}else u.__e=$(t.__e,u,t,i,o,f,e,c);(s=l.diffed)&&s(u)}catch(n){l.__e(n,u,t)}return u.__e}function T(n,u){l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function $(n,l,u,t,i,o,f,e){var s,a,h,p,v,d=u.props,y=l.props;if(i="svg"===l.type||i,null==n&&null!=o)for(s=0;s<o.length;s++)if(null!=(a=o[s])&&(null===l.type?3===a.nodeType:a.localName===l.type)){n=a,o[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(y);n=i?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type),o=null}if(null===l.type)null!=o&&(o[o.indexOf(n)]=null),d!==y&&(n.data=y);else if(l!==u){if(null!=o&&(o=c.slice.call(n.childNodes)),h=(d=u.props||r).dangerouslySetInnerHTML,p=y.dangerouslySetInnerHTML,!e){if(d===r)for(d={},v=0;v<n.attributes.length;v++)d[n.attributes[v].name]=n.attributes[v].value;(p||h)&&(p&&h&&p.__html==h.__html||(n.innerHTML=p&&p.__html||""))}x(n,y,d,i,e),l.__k=l.props.children,p||b(n,l,u,t,"foreignObject"!==l.type&&i,o,f,r,e),e||("value"in y&&void 0!==y.value&&y.value!==n.value&&(n.value=null==y.value?"":y.value),"checked"in y&&void 0!==y.checked&&y.checked!==n.checked&&(n.checked=y.checked))}return n}function z(n,u,t){try{"function"==typeof n?n(u):n.current=u}catch(n){l.__e(n,t)}}function A(n,u,t){var i,o,f;if(l.unmount&&l.unmount(n),(i=n.ref)&&z(i,null,u),t||"function"==typeof n.type||(t=null!=(o=n.__e)),n.__e=n.__d=null,null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(n){l.__e(n,u)}i.base=i.__P=null}if(i=n.__k)for(f=0;f<i.length;f++)i[f]&&A(i[f],u,t);null!=o&&h(o)}function D(n,l,u){return this.constructor(n,u)}function H(n,u,t){var i,o,e;l.__p&&l.__p(n,u),o=(i=t===f)?null:t&&t.__k||u.__k,n=p(d,null,[n]),e=[],j(u,(i?u:t||u).__k=n,o||r,r,void 0!==u.ownerSVGElement,t&&!i?[t]:o?null:c.slice.call(u.childNodes),e,t||r,i),T(e,n)}l={},u=function(n){return null!=n&&void 0===n.constructor},y.prototype.setState=function(n,l){var u=this.__s!==this.state&&this.__s||(this.__s=a({},this.state));("function"!=typeof n||(n=n(u,this.props)))&&a(u,n),null!=n&&this.__v&&(this.__e=!1,l&&this.__h.push(l),g(this))},y.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),g(this))},y.prototype.render=d,t=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,o=l.debounceRendering,l.__e=function(n,l,u){for(var t;l=l.__p;)if((t=l.__c)&&!t.__p)try{if(t.constructor&&null!=t.constructor.getDerivedStateFromError)t.setState(t.constructor.getDerivedStateFromError(n));else{if(null==t.componentDidCatch)continue;t.componentDidCatch(n)}return g(t.__E=t)}catch(l){n=l}throw n},f=r,e=0,n.render=H,n.hydrate=function(n,l){H(n,l,f)},n.createElement=p,n.h=p,n.Fragment=d,n.createRef=function(){return{}},n.isValidElement=u,n.Component=y,n.cloneElement=function(n,l){return l=a(a({},n.props),l),arguments.length>2&&(l.children=c.slice.call(arguments,2)),v(n.type,l,l.key||n.key,l.ref||n.ref)},n.createContext=function(n){var l={},u={__c:"__cC"+e++,__p:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var t,i=this;return this.getChildContext||(t=[],this.getChildContext=function(){return l[u.__c]=i,l},this.shouldComponentUpdate=function(l){n.value!==l.value&&t.some(function(n){n.context=l.value,g(n)})},this.sub=function(n){t.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){t.splice(t.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Consumer.contextType=u,u},n.toChildArray=_,n._e=A,n.options=l});

// https://unpkg.com/browse/preact@10.0.4/hooks/dist/hooks.umd.js
// eslint-disable-next-line
!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("preact")):"function"==typeof define&&define.amd?define(["exports","preact"],t):t(n.preactHooks={},n.preact)}(this,function(n,t){var u,r,i=[],o=t.options.__r;t.options.__r=function(n){o&&o(n),u=0,(r=n.__c).__H&&(r.__H.t.forEach(y),r.__H.t.forEach(x),r.__H.t=[])};var f=t.options.diffed;t.options.diffed=function(n){f&&f(n);var t=n.__c;if(t){var u=t.__H;u&&u.t.length&&s(i.push(t))}};var e=t.options.__c;t.options.__c=function(n,t){t.some(function(n){n.__h.forEach(y),n.__h=n.__h.filter(function(n){return!n.u||x(n)})}),e&&e(n,t)};var c=t.options.unmount;function a(n){t.options.__h&&t.options.__h(r);var u=r.__H||(r.__H={i:[],t:[]});return n>=u.i.length&&u.i.push({}),u.i[n]}function v(n,t,i){var o=a(u++);return o.__c||(o.__c=r,o.u=[i?i(t):q(void 0,t),function(t){var u=n(o.u[0],t);o.u[0]!==u&&(o.u[0]=u,o.__c.setState({}))}]),o.u}function p(n,t){var i=a(u++);T(i.o,t)&&(i.u=n,i.o=t,r.__h.push(i))}function d(n,t){var r=a(u++);return T(r.o,t)?(r.o=t,r.v=n,r.u=n()):r.u}t.options.unmount=function(n){c&&c(n);var t=n.__c;if(t){var u=t.__H;u&&u.i.forEach(function(n){return n.p&&n.p()})}};var s=function(){};function l(){i.some(function(n){n.__P&&(n.__H.t.forEach(y),n.__H.t.forEach(x),n.__H.t=[])}),i=[]}if("undefined"!=typeof window){var m=t.options.requestAnimationFrame;s=function(n){1!==n&&m===t.options.requestAnimationFrame||((m=t.options.requestAnimationFrame)||function(n){var t=function(){clearTimeout(u),cancelAnimationFrame(r),setTimeout(n)},u=setTimeout(t,100),r=requestAnimationFrame(t)})(l)}}function y(n){n.p&&n.p()}function x(n){var t=n.u();"function"==typeof t&&(n.p=t)}function T(n,t){return!n||t.some(function(t,u){return t!==n[u]})}function q(n,t){return"function"==typeof t?t(n):t}n.useState=function(n){return v(q,n)},n.useReducer=v,n.useEffect=function(n,t){var i=a(u++);T(i.o,t)&&(i.u=n,i.o=t,r.__H.t.push(i))},n.useLayoutEffect=p,n.useRef=function(n){return d(function(){return{current:n}},[])},n.useImperativeHandle=function(n,t,u){p(function(){"function"==typeof n?n(t()):n&&(n.current=t())},null==u?u:u.concat(n))},n.useMemo=d,n.useCallback=function(n,t){return d(function(){return n},t)},n.useContext=function(n){var t=r.context[n.__c];if(!t)return n.__p;var i=a(u++);return null==i.u&&(i.u=!0,t.sub(r)),t.props.value},n.useDebugValue=function(n,u){t.options.useDebugValue&&t.options.useDebugValue(u?u(n):n)}});

// https://unpkg.com/browse/emotion@10.0.23/dist/emotion.umd.min.js
// eslint-disable-next-line
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e=e||self).emotion={})}(this,function(e){"use strict";var r=function(){function e(e){this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.before=null}var r=e.prototype;return r.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)==0){var r,t=function(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),void 0!==e.nonce&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r}(this);r=0===this.tags.length?this.before:this.tags[this.tags.length-1].nextSibling,this.container.insertBefore(t,r),this.tags.push(t)}var a=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}(a);try{var i=105===e.charCodeAt(1)&&64===e.charCodeAt(0);n.insertRule(e,i?0:n.cssRules.length)}catch(e){}}else a.appendChild(document.createTextNode(e));this.ctr++},r.flush=function(){this.tags.forEach(function(e){return e.parentNode.removeChild(e)}),this.tags=[],this.ctr=0},e}();function t(e){function r(e,r,a){var n=r.trim().split(b);r=n;var i=n.length,s=e.length;switch(s){case 0:case 1:var c=0;for(e=0===s?"":e[0]+" ";c<i;++c)r[c]=t(e,r[c],a).trim();break;default:var o=c=0;for(r=[];c<i;++c)for(var l=0;l<s;++l)r[o++]=t(e[l]+" ",n[c],a).trim()}return r}function t(e,r,t){var a=r.charCodeAt(0);switch(33>a&&(a=(r=r.trim()).charCodeAt(0)),a){case 38:return r.replace(g,"$1"+e.trim());case 58:return e.trim()+r.replace(g,"$1"+e.trim());default:if(0<1*t&&0<r.indexOf("\f"))return r.replace(g,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+r}function a(e,r,t,i){var s=e+";",c=2*r+3*t+4*i;if(944===c){e=s.indexOf(":",9)+1;var o=s.substring(e,s.length-1).trim();return o=s.substring(0,e).trim()+o+";",1===z||2===z&&n(o,1)?"-webkit-"+o+o:o}if(0===z||2===z&&!n(s,1))return s;switch(c){case 1015:return 97===s.charCodeAt(10)?"-webkit-"+s+s:s;case 951:return 116===s.charCodeAt(3)?"-webkit-"+s+s:s;case 963:return 110===s.charCodeAt(5)?"-webkit-"+s+s:s;case 1009:if(100!==s.charCodeAt(4))break;case 969:case 942:return"-webkit-"+s+s;case 978:return"-webkit-"+s+"-moz-"+s+s;case 1019:case 983:return"-webkit-"+s+"-moz-"+s+"-ms-"+s+s;case 883:if(45===s.charCodeAt(8))return"-webkit-"+s+s;if(0<s.indexOf("image-set(",11))return s.replace(S,"$1-webkit-$2")+s;break;case 932:if(45===s.charCodeAt(4))switch(s.charCodeAt(5)){case 103:return"-webkit-box-"+s.replace("-grow","")+"-webkit-"+s+"-ms-"+s.replace("grow","positive")+s;case 115:return"-webkit-"+s+"-ms-"+s.replace("shrink","negative")+s;case 98:return"-webkit-"+s+"-ms-"+s.replace("basis","preferred-size")+s}return"-webkit-"+s+"-ms-"+s+s;case 964:return"-webkit-"+s+"-ms-flex-"+s+s;case 1023:if(99!==s.charCodeAt(8))break;return"-webkit-box-pack"+(o=s.substring(s.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+s+"-ms-flex-pack"+o+s;case 1005:return d.test(s)?s.replace(u,":-webkit-")+s.replace(u,":-moz-")+s:s;case 1e3:switch(r=(o=s.substring(13).trim()).indexOf("-")+1,o.charCodeAt(0)+o.charCodeAt(r)){case 226:o=s.replace(v,"tb");break;case 232:o=s.replace(v,"tb-rl");break;case 220:o=s.replace(v,"lr");break;default:return s}return"-webkit-"+s+"-ms-"+o+s;case 1017:if(-1===s.indexOf("sticky",9))break;case 975:switch(r=(s=e).length-10,c=(o=(33===s.charCodeAt(r)?s.substring(0,r):s).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|o.charCodeAt(7))){case 203:if(111>o.charCodeAt(8))break;case 115:s=s.replace(o,"-webkit-"+o)+";"+s;break;case 207:case 102:s=s.replace(o,"-webkit-"+(102<c?"inline-":"")+"box")+";"+s.replace(o,"-webkit-"+o)+";"+s.replace(o,"-ms-"+o+"box")+";"+s}return s+";";case 938:if(45===s.charCodeAt(5))switch(s.charCodeAt(6)){case 105:return o=s.replace("-items",""),"-webkit-"+s+"-webkit-box-"+o+"-ms-flex-"+o+s;case 115:return"-webkit-"+s+"-ms-flex-item-"+s.replace(A,"")+s;default:return"-webkit-"+s+"-ms-flex-line-pack"+s.replace("align-content","").replace(A,"")+s}break;case 973:case 989:if(45!==s.charCodeAt(3)||122===s.charCodeAt(4))break;case 931:case 953:if(!0===x.test(e))return 115===(o=e.substring(e.indexOf(":")+1)).charCodeAt(0)?a(e.replace("stretch","fill-available"),r,t,i).replace(":fill-available",":stretch"):s.replace(o,"-webkit-"+o)+s.replace(o,"-moz-"+o.replace("fill-",""))+s;break;case 962:if(s="-webkit-"+s+(102===s.charCodeAt(5)?"-ms-"+s:"")+s,211===t+i&&105===s.charCodeAt(13)&&0<s.indexOf("transform",10))return s.substring(0,s.indexOf(";",27)+1).replace(h,"$1-webkit-$2")+s}return s}function n(e,r){var t=e.indexOf(1===r?":":"{"),a=e.substring(0,3!==r?t:10);return t=e.substring(t+1,e.length-1),G(2!==r?a:a.replace(C,"$1"),t,r)}function i(e,r){var t=a(r,r.charCodeAt(0),r.charCodeAt(1),r.charCodeAt(2));return t!==r+";"?t.replace(y," or ($1)").substring(4):"("+r+")"}function s(e,r,t,a,n,i,s,c,l,f){for(var u,d=0,h=r;d<_;++d)switch(u=R[d].call(o,e,h,t,a,n,i,s,c,l,f)){case void 0:case!1:case!0:case null:break;default:h=u}if(h!==r)return h}function c(e){return void 0!==(e=e.prefix)&&(G=null,e?"function"!=typeof e?z=1:(z=2,G=e):z=0),c}function o(e,t){var c=e;if(33>c.charCodeAt(0)&&(c=c.trim()),c=[c],0<_){var o=s(-1,t,c,c,$,O,0,0,0,0);void 0!==o&&"string"==typeof o&&(t=o)}var u=function e(t,c,o,u,d){for(var h,b,g,v,y,A=0,C=0,x=0,S=0,R=0,G=0,I=g=h=0,M=0,W=0,P=0,D=0,F=o.length,L=F-1,T="",q="",B="",H="";M<F;){if(b=o.charCodeAt(M),M===L&&0!==C+S+x+A&&(0!==C&&(b=47===C?10:47),S=x=A=0,F++,L++),0===C+S+x+A){if(M===L&&(0<W&&(T=T.replace(f,"")),0<T.trim().length)){switch(b){case 32:case 9:case 59:case 13:case 10:break;default:T+=o.charAt(M)}b=59}switch(b){case 123:for(h=(T=T.trim()).charCodeAt(0),g=1,D=++M;M<F;){switch(b=o.charCodeAt(M)){case 123:g++;break;case 125:g--;break;case 47:switch(b=o.charCodeAt(M+1)){case 42:case 47:e:{for(I=M+1;I<L;++I)switch(o.charCodeAt(I)){case 47:if(42===b&&42===o.charCodeAt(I-1)&&M+2!==I){M=I+1;break e}break;case 10:if(47===b){M=I+1;break e}}M=I}}break;case 91:b++;case 40:b++;case 34:case 39:for(;M++<L&&o.charCodeAt(M)!==b;);}if(0===g)break;M++}switch(g=o.substring(D,M),0===h&&(h=(T=T.replace(l,"").trim()).charCodeAt(0)),h){case 64:switch(0<W&&(T=T.replace(f,"")),b=T.charCodeAt(1)){case 100:case 109:case 115:case 45:W=c;break;default:W=E}if(D=(g=e(c,W,g,b,d+1)).length,0<_&&(y=s(3,g,W=r(E,T,P),c,$,O,D,b,d,u),T=W.join(""),void 0!==y&&0===(D=(g=y.trim()).length)&&(b=0,g="")),0<D)switch(b){case 115:T=T.replace(w,i);case 100:case 109:case 45:g=T+"{"+g+"}";break;case 107:g=(T=T.replace(p,"$1 $2"))+"{"+g+"}",g=1===z||2===z&&n("@"+g,3)?"@-webkit-"+g+"@"+g:"@"+g;break;default:g=T+g,112===u&&(q+=g,g="")}else g="";break;default:g=e(c,r(c,T,P),g,u,d+1)}B+=g,g=P=W=I=h=0,T="",b=o.charCodeAt(++M);break;case 125:case 59:if(1<(D=(T=(0<W?T.replace(f,""):T).trim()).length))switch(0===I&&(h=T.charCodeAt(0),45===h||96<h&&123>h)&&(D=(T=T.replace(" ",":")).length),0<_&&void 0!==(y=s(1,T,c,t,$,O,q.length,u,d,u))&&0===(D=(T=y.trim()).length)&&(T="\0\0"),h=T.charCodeAt(0),b=T.charCodeAt(1),h){case 0:break;case 64:if(105===b||99===b){H+=T+o.charAt(M);break}default:58!==T.charCodeAt(D-1)&&(q+=a(T,h,b,T.charCodeAt(2)))}P=W=I=h=0,T="",b=o.charCodeAt(++M)}}switch(b){case 13:case 10:47===C?C=0:0===1+h&&107!==u&&0<T.length&&(W=1,T+="\0"),0<_*N&&s(0,T,c,t,$,O,q.length,u,d,u),O=1,$++;break;case 59:case 125:if(0===C+S+x+A){O++;break}default:switch(O++,v=o.charAt(M),b){case 9:case 32:if(0===S+A+C)switch(R){case 44:case 58:case 9:case 32:v="";break;default:32!==b&&(v=" ")}break;case 0:v="\\0";break;case 12:v="\\f";break;case 11:v="\\v";break;case 38:0===S+C+A&&(W=P=1,v="\f"+v);break;case 108:if(0===S+C+A+j&&0<I)switch(M-I){case 2:112===R&&58===o.charCodeAt(M-3)&&(j=R);case 8:111===G&&(j=G)}break;case 58:0===S+C+A&&(I=M);break;case 44:0===C+x+S+A&&(W=1,v+="\r");break;case 34:case 39:0===C&&(S=S===b?0:0===S?b:S);break;case 91:0===S+C+x&&A++;break;case 93:0===S+C+x&&A--;break;case 41:0===S+C+A&&x--;break;case 40:if(0===S+C+A){if(0===h)switch(2*R+3*G){case 533:break;default:h=1}x++}break;case 64:0===C+x+S+A+I+g&&(g=1);break;case 42:case 47:if(!(0<S+A+x))switch(C){case 0:switch(2*b+3*o.charCodeAt(M+1)){case 235:C=47;break;case 220:D=M,C=42}break;case 42:47===b&&42===R&&D+2!==M&&(33===o.charCodeAt(D+2)&&(q+=o.substring(D,M+1)),v="",C=0)}}0===C&&(T+=v)}G=R,R=b,M++}if(0<(D=q.length)){if(W=c,0<_&&void 0!==(y=s(2,q,W,t,$,O,D,u,d,u))&&0===(q=y).length)return H+q+B;if(q=W.join(",")+"{"+q+"}",0!=z*j){switch(2!==z||n(q,2)||(j=0),j){case 111:q=q.replace(k,":-moz-$1")+q;break;case 112:q=q.replace(m,"::-webkit-input-$1")+q.replace(m,"::-moz-$1")+q.replace(m,":-ms-input-$1")+q}j=0}}return H+q+B}(E,c,t,0,0);return 0<_&&(void 0!==(o=s(-2,u,c,c,$,O,u.length,0,0,0))&&(u=o)),"",j=0,O=$=1,u}var l=/^\0+/g,f=/[\0\r\f]/g,u=/: */g,d=/zoo|gra/,h=/([,: ])(transform)/g,b=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,m=/::(place)/g,k=/:(read-only)/g,v=/[svh]\w+-[tblr]{2}/,w=/\(\s*(.*)\s*\)/g,y=/([\s\S]*?);/g,A=/-self|flex-/g,C=/[^]*?(:[rp][el]a[\w-]+)[^]*/,x=/stretch|:\s*\w+\-(?:conte|avail)/,S=/([^-])(image-set\()/,O=1,$=1,j=0,z=1,E=[],R=[],_=0,G=null,N=0;return o.use=function e(r){switch(r){case void 0:case null:_=R.length=0;break;default:if("function"==typeof r)R[_++]=r;else if("object"==typeof r)for(var t=0,a=r.length;t<a;++t)e(r[t]);else N=0|!!r}return e},o.set=c,void 0!==e&&c(e),o}function a(e){e&&n.current.insert(e+"}")}var n={current:null},i=function(e,r,t,i,s,c,o,l,f,u){switch(e){case 1:switch(r.charCodeAt(0)){case 64:return n.current.insert(r+";"),"";case 108:if(98===r.charCodeAt(2))return""}break;case 2:if(0===l)return r+"/*|*/";break;case 3:switch(l){case 102:case 112:return n.current.insert(t[0]+r),"";default:return r+(0===u?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(a)}};var s={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var c=/[A-Z]|^ms/g,o=/_EMO_([^_]+?)_([^]*?)_EMO_/g,l=function(e){return 45===e.charCodeAt(1)},f=function(e){return null!=e&&"boolean"!=typeof e},u=function(e){var r={};return function(t){return void 0===r[t]&&(r[t]=e(t)),r[t]}}(function(e){return l(e)?e:e.replace(c,"-$&").toLowerCase()}),d=function(e,r){switch(e){case"animation":case"animationName":if("string"==typeof r)return r.replace(o,function(e,r,t){return b={name:r,styles:t,next:b},r})}return 1===s[e]||l(e)||"number"!=typeof r||0===r?r:r+"px"};function h(e,r,t,a){if(null==t)return"";if(void 0!==t.__emotion_styles)return t;switch(typeof t){case"boolean":return"";case"object":if(1===t.anim)return b={name:t.name,styles:t.styles,next:b},t.name;if(void 0!==t.styles){var n=t.next;if(void 0!==n)for(;void 0!==n;)b={name:n.name,styles:n.styles,next:b},n=n.next;return t.styles+";"}return function(e,r,t){var a="";if(Array.isArray(t))for(var n=0;n<t.length;n++)a+=h(e,r,t[n],!1);else for(var i in t){var s=t[i];if("object"!=typeof s)null!=r&&void 0!==r[s]?a+=i+"{"+r[s]+"}":f(s)&&(a+=u(i)+":"+d(i,s)+";");else if(!Array.isArray(s)||"string"!=typeof s[0]||null!=r&&void 0!==r[s[0]]){var c=h(e,r,s,!1);switch(i){case"animation":case"animationName":a+=u(i)+":"+c+";";break;default:a+=i+"{"+c+"}"}}else for(var o=0;o<s.length;o++)f(s[o])&&(a+=u(i)+":"+d(i,s[o])+";")}return a}(e,r,t);case"function":if(void 0!==e){var i=b,s=t(e);return b=i,h(e,r,s,a)}}if(null==r)return t;var c=r[t];return void 0===c||a?t:c}var b,g=/label:\s*([^\s;\n{]+)\s*;/g,p=function(e,r,t){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var a=!0,n="";b=void 0;var i=e[0];null==i||void 0===i.raw?(a=!1,n+=h(t,r,i,!1)):n+=i[0];for(var s=1;s<e.length;s++)n+=h(t,r,e[s],46===n.charCodeAt(n.length-1)),a&&(n+=i[s]);g.lastIndex=0;for(var c,o="";null!==(c=g.exec(n));)o+="-"+c[1];return{name:function(e){for(var r,t=e.length,a=t^t,n=0;t>=4;)r=1540483477*(65535&(r=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+((1540483477*(r>>>16)&65535)<<16),a=1540483477*(65535&a)+((1540483477*(a>>>16)&65535)<<16)^(r=1540483477*(65535&(r^=r>>>24))+((1540483477*(r>>>16)&65535)<<16)),t-=4,++n;switch(t){case 3:a^=(255&e.charCodeAt(n+2))<<16;case 2:a^=(255&e.charCodeAt(n+1))<<8;case 1:a=1540483477*(65535&(a^=255&e.charCodeAt(n)))+((1540483477*(a>>>16)&65535)<<16)}return a=1540483477*(65535&(a^=a>>>13))+((1540483477*(a>>>16)&65535)<<16),((a^=a>>>15)>>>0).toString(36)}(n)+o,styles:n,next:b}};function m(e,r,t){var a="";return t.split(" ").forEach(function(t){void 0!==e[t]?r.push(e[t]):a+=t+" "}),a}function k(e,r){if(void 0===e.inserted[r.name])return e.insert("",r,e.sheet,!0)}function v(e,r,t){var a=[],n=m(e,a,t);return a.length<2?t:n+r(a)}var w=function e(r){for(var t="",a=0;a<r.length;a++){var n=r[a];if(null!=n){var i=void 0;switch(typeof n){case"boolean":break;case"object":if(Array.isArray(n))i=e(n);else for(var s in i="",n)n[s]&&s&&(i&&(i+=" "),i+=s);break;default:i=n}i&&(t&&(t+=" "),t+=i)}}return t},y=function(e){var a=function(e){void 0===e&&(e={});var a,s=e.key||"css";void 0!==e.prefix&&(a={prefix:e.prefix});var c,o=new t(a),l={};c=e.container||document.head;var f,u=document.querySelectorAll("style[data-emotion-"+s+"]");Array.prototype.forEach.call(u,function(e){e.getAttribute("data-emotion-"+s).split(" ").forEach(function(e){l[e]=!0}),e.parentNode!==c&&c.appendChild(e)}),o.use(e.stylisPlugins)(i),f=function(e,r,t,a){var i=r.name;n.current=t,o(e,r.styles),a&&(d.inserted[i]=!0)};var d={key:s,sheet:new r({key:s,container:c,nonce:e.nonce,speedy:e.speedy}),nonce:e.nonce,inserted:l,registered:{},insert:f};return d}(e);a.sheet.speedy=function(e){this.isSpeedy=e},a.compat=!0;var s=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var n=p(r,a.registered,void 0);return function(e,r,t){var a=e.key+"-"+r.name;if(!1===t&&void 0===e.registered[a]&&(e.registered[a]=r.styles),void 0===e.inserted[r.name]){var n=r;do{e.insert("."+a,n,e.sheet,!0),n=n.next}while(void 0!==n)}}(a,n,!1),a.key+"-"+n.name};return{css:s,cx:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return v(a.registered,s,w(r))},injectGlobal:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var n=p(r,a.registered);k(a,n)},keyframes:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var n=p(r,a.registered),i="animation-"+n.name;return k(a,{name:n.name,styles:"@keyframes "+i+"{"+n.styles+"}"}),i},hydrate:function(e){e.forEach(function(e){a.inserted[e]=!0})},flush:function(){a.registered={},a.inserted={},a.sheet.flush()},sheet:a.sheet,cache:a,getRegisteredStyles:m.bind(null,a.registered),merge:v.bind(null,a.registered,s)}}(),A=y.flush,C=y.hydrate,x=y.cx,S=y.merge,O=y.getRegisteredStyles,$=y.injectGlobal,j=y.keyframes,z=y.css,E=y.sheet,R=y.cache;e.cache=R,e.css=z,e.cx=x,e.flush=A,e.getRegisteredStyles=O,e.hydrate=C,e.injectGlobal=$,e.keyframes=j,e.merge=S,e.sheet=E,Object.defineProperty(e,"__esModule",{value:!0})});

(() => {
  const config = {
    storageKey: 'playlists-ytm-store',
    version: '1.0.0',
  };

  const {h, render} = window.preact;
  const {useEffect, useState} = window.preactHooks;
  const {css} = window.emotion;

  // const Component = props => {
  //   const styles = {};
  //   styles.component = css``;

  //   return h(
  //     'div',
  //     {
  //       class: [styles.component].join(' '),
  //     },
  //   );
  // };

  const Container = () => {
    const [visible, setVisible] = useState(true);
    const toggleVisibility = () => setVisible(bool => !bool);

    const styles = {};
    styles.component = css`
      --color-red: #ff0000;
      --color-light: #ffffff;
      --color-dark: #282828;
      --transition-long: 800ms;
      --transition-short: 200ms;
      display: ${visible ? 'block' : 'none'};
      font-size: 16px;
      padding-bottom: 1em;
    `;

    return h(
      'div',
      {class: [styles.component].join(' ')},
      h(DownloadButton, {toggleVisibility}),
    );
  };

  const DownloadButton = props => {
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
      exportData();
    };

    const exportData = () => {
      const saveData = (obj, fileName) => {
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.style.setProperty('display', 'none');
        const json = JSON.stringify(obj);
        const blob = new Blob([json], {type: 'application/json'});
        const url = URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      };

      const timestamp = (() => {
        const date = new Date();
        const pad2DigitString = n => {
          const padLength = 2;
          return `${n}`.padStart(padLength, '0');
        };
        return [
          date.getUTCFullYear(),
          pad2DigitString(date.getUTCMonth() + 1),
          pad2DigitString(date.getUTCDate()),
          'T',
          pad2DigitString(date.getUTCHours()),
          pad2DigitString(date.getUTCMinutes()),
          pad2DigitString(date.getUTCSeconds()),
          'Z',
        ].join('');
      })();

      saveData(storageData.export(), `ytm-playlists-export-${timestamp}.json`);
    };

    useEffect(() => {
      setTimeout(() => setVisible(true), 1);
      const exportTimeout = 5000;
      setTimeout(() => {
        setVisible(false);
        const fadeoutTime = 1000;
        setTimeout(props.toggleVisibility, fadeoutTime);
      }, exportTimeout);
    }, []);

    const styles = {};
    styles.component = css`
      background-color: inherit;
      border: 1px solid var(--color-red);
      border-radius: 0.25em;
      color: var(--color-red);
      cursor: pointer;
      font-size: inherit;
      letter-spacing: 0.05em;
      opacity: ${visible ? '1' : '0'};
      padding: 0.5em 1em;
      transition:
        border-color var(--transition-short),
        color var(--transition-short),
        opacity var(--transition-long);
      
      &:hover {
        border-color: var(--color-light);
        color: var(--color-light);
      }
    `;

    return h(
      'button',
      {
        class: [styles.component].join(' '),
        onClick: handleClick,
      },
      'Export YTM playlists',
    );
  };

  const storageData = (() => {
    const storageData = {
      lists: new Map(),
      version: config.version,
    };

    const sortByTitle = ([, a], [, b]) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    };

    storageData.get = () => {
      const item = localStorage.getItem(config.storageKey);
      if (item === null) return;
      try {
        const {lists} = JSON.parse(item);
        for (const [k, v] of lists) storageData.lists.set(k, v);
      }
      catch (err) {
        storageData.string = item;
      }
      return storageData;
    };

    storageData.set = () => {
      const replacer =
        (key, value) => (key === 'lists' ? [...value].sort(sortByTitle) : value);
      const string = JSON.stringify(storageData, replacer);
      localStorage.setItem(config.storageKey, string);
      return string;
    };

    storageData.scrape = () => {
      const isNodeYTMPlaylist = node => {
        const creatorSpanIndex = 2;
        const creatorSpan = [...node.querySelectorAll('div > span > yt-formatted-string > span')][creatorSpanIndex];
        const anchor = node.querySelector('div > yt-formatted-string > a');
        if (
          creatorSpan
          && creatorSpan.textContent === 'YouTube Music'
          && anchor
          && anchor.href
          && anchor.textContent
        ) return true;
        return false;
      };

      const mapListNodeToData = node => {
        const anchor = node.querySelector('div > yt-formatted-string > a');
        try {
          const {href, textContent: title} = anchor;
          const re = (/list=(?<id>[^&]+)/u);
          const {groups: {id}} = re.exec(href);
          return [id, title];
        }
        catch (err) {
          return ['error', 'error'];
        }
      };

      const nodes = [...document.querySelectorAll('ytmusic-two-row-item-renderer')];
      const lists = nodes
        .filter(isNodeYTMPlaylist)
        .map(mapListNodeToData);

      lists.forEach(([id, title]) => storageData.lists.set(id, title));

      return lists;
    };

    storageData.export = () => [...storageData.lists]
      .sort(sortByTitle)
      .map(([id, title]) => ({id, title}));

    return storageData;
  })();

  const init = () => {
    storageData.get();

    // https://github.com/jsejcksn/js-modules/blob/master/dist/modules/html/1.0.0/html.js
    // eslint-disable-next-line
    const html=(e,t,...o)=>{const r=document.createElement(e);if(t)for(const[e,o]of Object.entries(t))if("style"===e&&(Array.isArray(o)||o instanceof Map))for(const e of o)r.style.setProperty(...e);else r.setAttribute(e,o);if(o)for(let e of o)"string"==typeof e&&(e=document.createTextNode(e)),r.appendChild(e);return r};

    document.body.appendChild(html(
      'div',
      {
        id: config.storageKey,
        style: [
          ['position', 'fixed'],
          ['bottom', '0'],
          ['left', '50%'],
          ['transform', 'translateX(-50%)'],
        ],
      },
    ));

    let timerID = 0;
    window.addEventListener('scroll', () => {
      clearTimeout(timerID);
      const scrollDelay = 2000;
      timerID = setTimeout(() => {
        const scrolledToBottom =
          window.innerHeight + window.scrollY >= document.body.scrollHeight;
        if (!scrolledToBottom) return;
        storageData.scrape();
        storageData.set();
        render(h(Container), document.getElementById(config.storageKey));
        console.log('YTM playlists stored');
      }, scrollDelay);
    });
  };

  init();
})();
