const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MapView-iaXZX-ih.js","assets/path-CYOuJs6G.js","assets/path-aq5Hpam3.css","assets/MapView-acdOEaeK.css","assets/MapOutline-D7oehlz7.js"])))=>i.map(i=>d[i]);
(function(){const g=document.createElement("link").relList;if(g&&g.supports&&g.supports("modulepreload"))return;for(const S of document.querySelectorAll('link[rel="modulepreload"]'))d(S);new MutationObserver(S=>{for(const R of S)if(R.type==="childList")for(const k of R.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&d(k)}).observe(document,{childList:!0,subtree:!0});function h(S){const R={};return S.integrity&&(R.integrity=S.integrity),S.referrerPolicy&&(R.referrerPolicy=S.referrerPolicy),S.crossOrigin==="use-credentials"?R.credentials="include":S.crossOrigin==="anonymous"?R.credentials="omit":R.credentials="same-origin",R}function d(S){if(S.ep)return;S.ep=!0;const R=h(S);fetch(S.href,R)}})();function _r(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var qu={exports:{}},_l={};var hp;function ax(){if(hp)return _l;hp=1;var o=Symbol.for("react.transitional.element"),g=Symbol.for("react.fragment");function h(d,S,R){var k=null;if(R!==void 0&&(k=""+R),S.key!==void 0&&(k=""+S.key),"key"in S){R={};for(var L in S)L!=="key"&&(R[L]=S[L])}else R=S;return S=R.ref,{$$typeof:o,type:d,key:k,ref:S!==void 0?S:null,props:R}}return _l.Fragment=g,_l.jsx=h,_l.jsxs=h,_l}var gp;function ix(){return gp||(gp=1,qu.exports=ax()),qu.exports}var r=ix(),Gu={exports:{}},Tl={},Yu={exports:{}},Vu={};var pp;function rx(){return pp||(pp=1,(function(o){function g(Y,cn){var P=Y.length;Y.push(cn);n:for(;0<P;){var kn=P-1>>>1,Sn=Y[kn];if(0<S(Sn,cn))Y[kn]=cn,Y[P]=Sn,P=kn;else break n}}function h(Y){return Y.length===0?null:Y[0]}function d(Y){if(Y.length===0)return null;var cn=Y[0],P=Y.pop();if(P!==cn){Y[0]=P;n:for(var kn=0,Sn=Y.length,oe=Sn>>>1;kn<oe;){var ve=2*(kn+1)-1,ut=Y[ve],y=ve+1,z=Y[y];if(0>S(ut,P))y<Sn&&0>S(z,ut)?(Y[kn]=z,Y[y]=P,kn=y):(Y[kn]=ut,Y[ve]=P,kn=ve);else if(y<Sn&&0>S(z,P))Y[kn]=z,Y[y]=P,kn=y;else break n}}return cn}function S(Y,cn){var P=Y.sortIndex-cn.sortIndex;return P!==0?P:Y.id-cn.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var R=performance;o.unstable_now=function(){return R.now()}}else{var k=Date,L=k.now();o.unstable_now=function(){return k.now()-L}}var H=[],G=[],D=1,b=null,w=3,V=!1,q=!1,J=!1,en=!1,_n=typeof setTimeout=="function"?setTimeout:null,gn=typeof clearTimeout=="function"?clearTimeout:null,hn=typeof setImmediate<"u"?setImmediate:null;function En(Y){for(var cn=h(G);cn!==null;){if(cn.callback===null)d(G);else if(cn.startTime<=Y)d(G),cn.sortIndex=cn.expirationTime,g(H,cn);else break;cn=h(G)}}function Qn(Y){if(J=!1,En(Y),!q)if(h(H)!==null)q=!0,vn||(vn=!0,me());else{var cn=h(G);cn!==null&&ce(Qn,cn.startTime-Y)}}var vn=!1,Z=-1,pn=5,ie=-1;function de(){return en?!0:!(o.unstable_now()-ie<pn)}function se(){if(en=!1,vn){var Y=o.unstable_now();ie=Y;var cn=!0;try{n:{q=!1,J&&(J=!1,gn(Z),Z=-1),V=!0;var P=w;try{e:{for(En(Y),b=h(H);b!==null&&!(b.expirationTime>Y&&de());){var kn=b.callback;if(typeof kn=="function"){b.callback=null,w=b.priorityLevel;var Sn=kn(b.expirationTime<=Y);if(Y=o.unstable_now(),typeof Sn=="function"){b.callback=Sn,En(Y),cn=!0;break e}b===h(H)&&d(H),En(Y)}else d(H);b=h(H)}if(b!==null)cn=!0;else{var oe=h(G);oe!==null&&ce(Qn,oe.startTime-Y),cn=!1}}break n}finally{b=null,w=P,V=!1}cn=void 0}}finally{cn?me():vn=!1}}}var me;if(typeof hn=="function")me=function(){hn(se)};else if(typeof MessageChannel<"u"){var Ke=new MessageChannel,Oe=Ke.port2;Ke.port1.onmessage=se,me=function(){Oe.postMessage(null)}}else me=function(){_n(se,0)};function ce(Y,cn){Z=_n(function(){Y(o.unstable_now())},cn)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(Y){Y.callback=null},o.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):pn=0<Y?Math.floor(1e3/Y):5},o.unstable_getCurrentPriorityLevel=function(){return w},o.unstable_next=function(Y){switch(w){case 1:case 2:case 3:var cn=3;break;default:cn=w}var P=w;w=cn;try{return Y()}finally{w=P}},o.unstable_requestPaint=function(){en=!0},o.unstable_runWithPriority=function(Y,cn){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var P=w;w=Y;try{return cn()}finally{w=P}},o.unstable_scheduleCallback=function(Y,cn,P){var kn=o.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?kn+P:kn):P=kn,Y){case 1:var Sn=-1;break;case 2:Sn=250;break;case 5:Sn=1073741823;break;case 4:Sn=1e4;break;default:Sn=5e3}return Sn=P+Sn,Y={id:D++,callback:cn,priorityLevel:Y,startTime:P,expirationTime:Sn,sortIndex:-1},P>kn?(Y.sortIndex=P,g(G,Y),h(H)===null&&Y===h(G)&&(J?(gn(Z),Z=-1):J=!0,ce(Qn,P-kn))):(Y.sortIndex=Sn,g(H,Y),q||V||(q=!0,vn||(vn=!0,me()))),Y},o.unstable_shouldYield=de,o.unstable_wrapCallback=function(Y){var cn=w;return function(){var P=w;w=cn;try{return Y.apply(this,arguments)}finally{w=P}}}})(Vu)),Vu}var mp;function lx(){return mp||(mp=1,Yu.exports=rx()),Yu.exports}var Iu={exports:{}},yn={};var vp;function sx(){if(vp)return yn;vp=1;var o=Symbol.for("react.transitional.element"),g=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),k=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),G=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),w=Symbol.for("react.view_transition"),V=Symbol.iterator;function q(y){return y===null||typeof y!="object"?null:(y=V&&y[V]||y["@@iterator"],typeof y=="function"?y:null)}var J={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},en=Object.assign,_n={};function gn(y,z,sn){this.props=y,this.context=z,this.refs=_n,this.updater=sn||J}gn.prototype.isReactComponent={},gn.prototype.setState=function(y,z){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,z,"setState")},gn.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function hn(){}hn.prototype=gn.prototype;function En(y,z,sn){this.props=y,this.context=z,this.refs=_n,this.updater=sn||J}var Qn=En.prototype=new hn;Qn.constructor=En,en(Qn,gn.prototype),Qn.isPureReactComponent=!0;var vn=Array.isArray;function Z(){}var pn={H:null,A:null,T:null,S:null},ie=Object.prototype.hasOwnProperty;function de(y,z,sn){var W=sn.ref;return{$$typeof:o,type:y,key:z,ref:W!==void 0?W:null,props:sn}}function se(y,z){return de(y.type,z,y.props)}function me(y){return typeof y=="object"&&y!==null&&y.$$typeof===o}function Ke(y){var z={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(sn){return z[sn]})}var Oe=/\/+/g;function ce(y,z){return typeof y=="object"&&y!==null&&y.key!=null?Ke(""+y.key):z.toString(36)}function Y(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(Z,Z):(y.status="pending",y.then(function(z){y.status==="pending"&&(y.status="fulfilled",y.value=z)},function(z){y.status==="pending"&&(y.status="rejected",y.reason=z)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function cn(y,z,sn,W,un){var Rn=typeof y;(Rn==="undefined"||Rn==="boolean")&&(y=null);var On=!1;if(y===null)On=!0;else switch(Rn){case"bigint":case"string":case"number":On=!0;break;case"object":switch(y.$$typeof){case o:case g:On=!0;break;case D:return On=y._init,cn(On(y._payload),z,sn,W,un)}}if(On)return un=un(y),On=W===""?"."+ce(y,0):W,vn(un)?(sn="",On!=null&&(sn=On.replace(Oe,"$&/")+"/"),cn(un,z,sn,"",function(nt){return nt})):un!=null&&(me(un)&&(un=se(un,sn+(un.key==null||y&&y.key===un.key?"":(""+un.key).replace(Oe,"$&/")+"/")+On)),z.push(un)),1;On=0;var tn=W===""?".":W+":";if(vn(y))for(var dn=0;dn<y.length;dn++)W=y[dn],Rn=tn+ce(W,dn),On+=cn(W,z,sn,Rn,un);else if(dn=q(y),typeof dn=="function")for(y=dn.call(y),dn=0;!(W=y.next()).done;)W=W.value,Rn=tn+ce(W,dn++),On+=cn(W,z,sn,Rn,un);else if(Rn==="object"){if(typeof y.then=="function")return cn(Y(y),z,sn,W,un);throw z=String(y),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return On}function P(y,z,sn){if(y==null)return y;var W=[],un=0;return cn(y,W,"","",function(Rn){return z.call(sn,Rn,un++)}),W}function kn(y){if(y._status===-1){var z=y._result,sn=z();sn.then(function(W){(y._status===0||y._status===-1)&&(y._status=1,y._result=W,sn.status===void 0&&(sn.status="fulfilled",sn.value=W))},function(W){(y._status===0||y._status===-1)&&(y._status=2,y._result=W,sn.status===void 0&&(sn.status="rejected",sn.reason=W))}),y._status===-1&&(y._status=0,y._result=sn)}if(y._status===1)return y._result.default;throw y._result}var Sn=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)};function oe(y){var z=pn.T,sn={};sn.types=z!==null?z.types:null,pn.T=sn;try{var W=y(),un=pn.S;un!==null&&un(sn,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(Z,Sn)}catch(Rn){Sn(Rn)}finally{z!==null&&sn.types!==null&&(z.types=sn.types),pn.T=z}}function ve(y){var z=pn.T;if(z!==null){var sn=z.types;sn===null?z.types=[y]:sn.indexOf(y)===-1&&sn.push(y)}else oe(ve.bind(null,y))}var ut={map:P,forEach:function(y,z,sn){P(y,function(){z.apply(this,arguments)},sn)},count:function(y){var z=0;return P(y,function(){z++}),z},toArray:function(y){return P(y,function(z){return z})||[]},only:function(y){if(!me(y))throw Error("React.Children.only expected to receive a single React element child.");return y}};return yn.Activity=b,yn.Children=ut,yn.Component=gn,yn.Fragment=h,yn.Profiler=S,yn.PureComponent=En,yn.StrictMode=d,yn.Suspense=H,yn.ViewTransition=w,yn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=pn,yn.__COMPILER_RUNTIME={__proto__:null,c:function(y){return pn.H.useMemoCache(y)}},yn.addTransitionType=ve,yn.cache=function(y){return function(){return y.apply(null,arguments)}},yn.cacheSignal=function(){return null},yn.cloneElement=function(y,z,sn){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var W=en({},y.props),un=y.key;if(z!=null)for(Rn in z.key!==void 0&&(un=""+z.key),z)!ie.call(z,Rn)||Rn==="key"||Rn==="__self"||Rn==="__source"||Rn==="ref"&&z.ref===void 0||(W[Rn]=z[Rn]);var Rn=arguments.length-2;if(Rn===1)W.children=sn;else if(1<Rn){for(var On=Array(Rn),tn=0;tn<Rn;tn++)On[tn]=arguments[tn+2];W.children=On}return de(y.type,un,W)},yn.createContext=function(y){return y={$$typeof:k,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:R,_context:y},y},yn.createElement=function(y,z,sn){var W,un={},Rn=null;if(z!=null)for(W in z.key!==void 0&&(Rn=""+z.key),z)ie.call(z,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(un[W]=z[W]);var On=arguments.length-2;if(On===1)un.children=sn;else if(1<On){for(var tn=Array(On),dn=0;dn<On;dn++)tn[dn]=arguments[dn+2];un.children=tn}if(y&&y.defaultProps)for(W in On=y.defaultProps,On)un[W]===void 0&&(un[W]=On[W]);return de(y,Rn,un)},yn.createRef=function(){return{current:null}},yn.forwardRef=function(y){return{$$typeof:L,render:y}},yn.isValidElement=me,yn.lazy=function(y){return{$$typeof:D,_payload:{_status:-1,_result:y},_init:kn}},yn.memo=function(y,z){return{$$typeof:G,type:y,compare:z===void 0?null:z}},yn.startTransition=oe,yn.unstable_useCacheRefresh=function(){return pn.H.useCacheRefresh()},yn.use=function(y){return pn.H.use(y)},yn.useActionState=function(y,z,sn){return pn.H.useActionState(y,z,sn)},yn.useCallback=function(y,z){return pn.H.useCallback(y,z)},yn.useContext=function(y){return pn.H.useContext(y)},yn.useDebugValue=function(){},yn.useDeferredValue=function(y,z){return pn.H.useDeferredValue(y,z)},yn.useEffect=function(y,z){return pn.H.useEffect(y,z)},yn.useEffectEvent=function(y){return pn.H.useEffectEvent(y)},yn.useId=function(){return pn.H.useId()},yn.useImperativeHandle=function(y,z,sn){return pn.H.useImperativeHandle(y,z,sn)},yn.useInsertionEffect=function(y,z){return pn.H.useInsertionEffect(y,z)},yn.useLayoutEffect=function(y,z){return pn.H.useLayoutEffect(y,z)},yn.useMemo=function(y,z){return pn.H.useMemo(y,z)},yn.useOptimistic=function(y,z){return pn.H.useOptimistic(y,z)},yn.useReducer=function(y,z,sn){return pn.H.useReducer(y,z,sn)},yn.useRef=function(y){return pn.H.useRef(y)},yn.useState=function(y){return pn.H.useState(y)},yn.useSyncExternalStore=function(y,z,sn){return pn.H.useSyncExternalStore(y,z,sn)},yn.useTransition=function(){return pn.H.useTransition()},yn.version="19.3.1",yn}var bp;function rd(){return bp||(bp=1,Iu.exports=sx()),Iu.exports}var Ku={exports:{}},Ie={};var yp;function ox(){if(yp)return Ie;yp=1;var o=rd();function g(D){var b="https://react.dev/errors/"+D;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)b+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+D+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(){}var d={d:{f:h,r:function(){throw Error(g(522))},D:h,C:h,L:h,m:h,X:h,S:h,M:h},p:0,findDOMNode:null},S=Symbol.for("react.portal"),R=Symbol.for("react.recoverable"),k=Symbol.for("react.optimistic_key");function L(D,b,w){var V=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:S,key:V==null?null:V===k?k:""+V,children:D,containerInfo:b,implementation:w}}var H=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function G(D,b){if(D==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return Ie.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Ie.browser=function(D){return{$$typeof:R,_reason:D}},Ie.createPortal=function(D,b){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(g(299));return L(D,b,null,w)},Ie.flushSync=function(D){var b=H.T,w=d.p;try{if(H.T=null,d.p=2,D)return D()}finally{H.T=b,d.p=w,d.d.f()}},Ie.preconnect=function(D,b){typeof D=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,d.d.C(D,b))},Ie.prefetchDNS=function(D){typeof D=="string"&&d.d.D(D)},Ie.preinit=function(D,b){if(typeof D=="string"&&b&&typeof b.as=="string"){var w=b.as,V=G(w,b.crossOrigin),q=typeof b.integrity=="string"?b.integrity:void 0,J=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;w==="style"?d.d.S(D,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:V,integrity:q,fetchPriority:J}):w==="script"&&d.d.X(D,{crossOrigin:V,integrity:q,fetchPriority:J,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},Ie.preinitModule=function(D,b){if(typeof D=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var w=G(b.as,b.crossOrigin);d.d.M(D,{crossOrigin:w,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0})}}else b==null&&d.d.M(D)},Ie.preload=function(D,b){if(typeof D=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var w=b.as,V=G(w,b.crossOrigin);d.d.L(D,w,{crossOrigin:V,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},Ie.preloadModule=function(D,b){if(typeof D=="string")if(b){var w=G(b.as,b.crossOrigin);d.d.m(D,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:w,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0})}else d.d.m(D)},Ie.requestFormReset=function(D){d.d.r(D)},Ie.unstable_batchedUpdates=function(D,b){return D(b)},Ie.useFormState=function(D,b,w){return H.H.useFormState(D,b,w)},Ie.useFormStatus=function(){return H.H.useHostTransitionStatus()},Ie.version="19.3.1",Ie}var xp;function Gp(){if(xp)return Ku.exports;xp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(g){console.error(g)}}return o(),Ku.exports=ox(),Ku.exports}var _p;function cx(){if(_p)return Tl;_p=1;var o=lx(),g=rd(),h=Gp();function d(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function S(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function R(n){for(var e=n,t=e;t&&!t.alternate;)e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;for(;e.return;)e=e.return;return e.tag===3?n:null}function k(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function L(n){if(n.tag===31){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function H(n){if(R(n)!==n)throw Error(d(188))}function G(n){var e=n.alternate;if(!e){if(e=R(n),e===null)throw Error(d(188));return e!==n?null:n}for(var t=n,a=e;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(a=i.return,a!==null){t=a;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return H(i),n;if(l===a)return H(i),e;l=l.sibling}throw Error(d(188))}if(t.return!==a.return)t=i,a=l;else{for(var s=!1,c=i.child;c;){if(c===t){s=!0,t=i,a=l;break}if(c===a){s=!0,a=i,t=l;break}c=c.sibling}if(!s){for(c=l.child;c;){if(c===t){s=!0,t=l,a=i;break}if(c===a){s=!0,a=l,t=i;break}c=c.sibling}if(!s)throw Error(d(189))}}if(t.alternate!==a)throw Error(d(190))}if(t.tag!==3)throw Error(d(188));return t.stateNode.current===t?n:e}function D(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n;for(n=n.child;n!==null;){if(e=D(n),e!==null)return e;n=n.sibling}return null}function b(n,e,t,a,i,l){for(;n!==null;){if((n.tag===5||n.tag===27||n.tag===6)&&t(n,a,i,l)||(n.tag!==22||n.memoizedState===null)&&(e||n.tag!==5&&n.tag!==27)&&b(n.child,e,t,a,i,l))return!0;n=n.sibling}return!1}function w(n){for(n=n.return;n!==null;){if(n.tag===3||n.tag===5||n.tag===27)return n;n=n.return}return null}function V(n){var e=!1;for(n=n.return;n!==null&&(n.tag===4&&(e=!0),!(n.tag===3||n.tag===5||n.tag===27));)n=n.return;return e}function q(n){var e=[null,null],t=w(n);return t===null||J(e,n,t.child,{foundSelf:!1}),e}function J(n,e,t,a){for(;t!==null;){if(t===e)a.foundSelf=!0;else if(t.tag===5||t.tag===27||t.tag===6){if(a.foundSelf)return n[1]=t,!0;n[0]=t}else if((t.tag!==22||t.memoizedState===null)&&J(n,e,t.child,a))return!0;t=t.sibling}return!1}function en(n){switch(n.tag){case 5:case 27:case 6:return n.stateNode;case 3:return n.stateNode.containerInfo;default:throw Error(d(559))}}var _n=null,gn=null;function hn(n,e,t){return n===t?!0:n===e?(_n=n,!0):!1}function En(n,e,t){return n===t?(gn=n,!1):n===e?(gn!==null&&(_n=n),!0):!1}function Qn(n){if(n===null)return null;do n=n===null?null:n.return;while(n&&n.tag!==5&&n.tag!==27&&n.tag!==3);return n||null}function vn(n,e,t){for(var a=0,i=n;i;i=t(i))a++;i=0;for(var l=e;l;l=t(l))i++;for(;0<a-i;)n=t(n),a--;for(;0<i-a;)e=t(e),i--;for(;a--;){if(n===e||e!==null&&n===e.alternate)return n;n=t(n),e=t(e)}return null}var Z=Object.assign,pn=Symbol.for("react.element"),ie=Symbol.for("react.transitional.element"),de=Symbol.for("react.portal"),se=Symbol.for("react.fragment"),me=Symbol.for("react.strict_mode"),Ke=Symbol.for("react.profiler"),Oe=Symbol.for("react.consumer"),ce=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),cn=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),kn=Symbol.for("react.memo"),Sn=Symbol.for("react.lazy"),oe=Symbol.for("react.activity"),ve=Symbol.for("react.legacy_hidden"),ut=Symbol.for("react.memo_cache_sentinel"),y=Symbol.for("react.view_transition"),z=Symbol.for("react.recoverable"),sn=Symbol.iterator;function W(n){return n===null||typeof n!="object"?null:(n=sn&&n[sn]||n["@@iterator"],typeof n=="function"?n:null)}var un=Symbol.for("react.client.reference");function Rn(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===un?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case se:return"Fragment";case Ke:return"Profiler";case me:return"StrictMode";case cn:return"Suspense";case P:return"SuspenseList";case oe:return"Activity";case y:return"ViewTransition"}if(typeof n=="object")switch(n.$$typeof){case de:return"Portal";case ce:return n.displayName||"Context";case Oe:return(n._context.displayName||"Context")+".Consumer";case Y:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case kn:return e=n.displayName||null,e!==null?e:Rn(n.type)||"Memo";case Sn:e=n._payload,n=n._init;try{return Rn(n(e))}catch{}}return null}var On=Array.isArray,tn=g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,dn=h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nt={pending:!1,data:null,method:null,action:null},ei=[],_a=-1;function yt(n){return{current:n}}function Ae(n){0>_a||(n.current=ei[_a],ei[_a]=null,_a--)}function $n(n,e){_a++,ei[_a]=n.current,n.current=e}var xt=yt(null),Ta=yt(null),qt=yt(null),Ei=yt(null);function ti(n,e){switch($n(qt,e),$n(Ta,n),$n(xt,null),e.nodeType){case 9:case 11:n=(n=e.documentElement)&&(n=n.namespaceURI)?Tg(n):0;break;default:if(n=e.tagName,e=e.namespaceURI)e=Tg(e),n=Sg(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Ae(xt),$n(xt,n)}function et(){Ae(xt),Ae(Ta),Ae(qt)}function Oi(n){var e=n.memoizedState;e!==null&&(pr._currentValue=e.memoizedState,$n(Ei,n)),e=xt.current;var t=Sg(e,n.type);e!==t&&($n(Ta,n),$n(xt,t))}function Mt(n){Ta.current===n&&(Ae(xt),Ae(Ta)),Ei.current===n&&(Ae(Ei),pr._currentValue=nt)}var Sa,Tr;function Gt(n){if(Sa===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Sa=e&&e[1]||"",Tr=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Sa+n+Tr}var Sr=!1;function jr(n,e){if(!n||Sr)return"";Sr=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(K){var x=K}Reflect.construct(n,[],M)}else{try{M.call()}catch(K){x=K}M=!1;try{var N=Object.getOwnPropertyDescriptor(n.prototype,"props");Object.defineProperty(n.prototype,"props",{configurable:!0,set:function(){throw Error()}}),M=!0,new n}finally{M&&(N!==void 0?Object.defineProperty(n.prototype,"props",N):delete n.prototype.props)}}}else{try{throw Error()}catch(K){x=K}(M=n())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(K){if(K&&x&&typeof K.stack=="string")return[K.stack,x.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=a.DetermineComponentFrameRoot(),s=l[0],c=l[1];if(s&&c){var f=s.split(`
`),T=c.split(`
`);for(i=a=0;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;for(;i<T.length&&!T[i].includes("DetermineComponentFrameRoot");)i++;if(a===f.length||i===T.length)for(a=f.length-1,i=T.length-1;1<=a&&0<=i&&f[a]!==T[i];)i--;for(;1<=a&&0<=i;a--,i--)if(f[a]!==T[i]){if(a!==1||i!==1)do if(a--,i--,0>i||f[a]!==T[i]){var E=`
`+f[a].replace(" at new "," at ");return n.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",n.displayName)),E}while(1<=a&&0<=i);break}}}finally{Sr=!1,Error.prepareStackTrace=t}return(t=n?n.displayName||n.name:"")?Gt(t):""}function po(n,e){switch(n.tag){case 26:case 27:case 5:return Gt(n.type);case 16:return Gt("Lazy");case 13:return n.child!==e&&e!==null?Gt("Suspense Fallback"):Gt("Suspense");case 19:return Gt("SuspenseList");case 0:case 15:return jr(n.type,!1);case 11:return jr(n.type.render,!1);case 1:return jr(n.type,!0);case 31:return Gt("Activity");case 30:return Gt("ViewTransition");default:return""}}function El(n){try{var e="",t=null;do e+=po(n,t),t=n,n=n.return;while(n);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Ai=Object.prototype.hasOwnProperty,Nr=o.unstable_scheduleCallback,wr=o.unstable_cancelCallback,mo=o.unstable_shouldYield,Er=o.unstable_requestPaint,Qe=o.unstable_now,Ol=o.unstable_getCurrentPriorityLevel,Al=o.unstable_ImmediatePriority,Or=o.unstable_UserBlockingPriority,Rt=o.unstable_NormalPriority,p=o.unstable_LowPriority,C=o.unstable_IdlePriority,Q=o.log,bn=o.unstable_setDisableYieldValue,te=null,Bn=null;function $(n){if(typeof Q=="function"&&bn(n),Bn&&typeof Bn.setStrictMode=="function")try{Bn.setStrictMode(te,n)}catch{}}var I=Math.clz32?Math.clz32:he,mn=Math.log,_e=Math.LN2;function he(n){return n>>>=0,n===0?32:31-(mn(n)/_e|0)|0}var Yt=256,ja=262144,Na=4194304;function ea(n){var e=n&42;if(e!==0)return e;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&-n;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function wa(n,e,t){var a=n.pendingLanes;if(a===0)return 0;var i=0,l=n.suspendedLanes,s=n.pingedLanes;n=n.warmLanes;var c=a&134217727;return c!==0?(a=c&~l,a!==0?i=ea(a):(s&=c,s!==0?i=ea(s):t||(t=c&~n,t!==0&&(i=ea(t))))):(c=a&~l,c!==0?i=ea(c):s!==0?i=ea(s):t||(t=a&~n,t!==0&&(i=ea(t)))),i===0?0:e!==0&&e!==i&&(e&l)===0&&(l=i&-i,t=e&-e,l>=t||l===32&&(t&4194048)!==0)?e:i}function ai(n,e){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&e)===0}function kl(n,e){(e&8)!==0&&(e|=e&32);var t=n.entangledLanes;if(t!==0)for(n=n.entanglements,t&=e;0<t;){var a=31-I(t),i=1<<a;e|=n[a],t&=~i}return e}function vo(n,e){switch(n){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ar(){var n=Na;return Na<<=1,(Na&62914560)===0&&(Na=4194304),n}function Ea(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ii(n,e){n.pendingLanes|=e,e!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function bo(n,e,t,a,i,l){var s=n.pendingLanes;n.pendingLanes=t,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=t,n.entangledLanes&=t,n.errorRecoveryDisabledLanes&=t,n.shellSuspendCounter=0;var c=n.entanglements,f=n.expirationTimes,T=n.hiddenUpdates;for(t=s&~t;0<t;){var E=31-I(t),M=1<<E;c[E]=0,f[E]=-1;var x=T[E];if(x!==null)for(T[E]=null,E=0;E<x.length;E++){var N=x[E];N!==null&&(N.lane&=-536870913)}t&=~M}a!==0&&Ml(n,a,0),l!==0&&i===0&&n.tag!==0&&(n.suspendedLanes|=l&~(s&~e))}function Ml(n,e,t){n.pendingLanes|=e,n.suspendedLanes&=~e;var a=31-I(e);n.entangledLanes|=e,n.entanglements[a]=n.entanglements[a]|1073741824|t&261930}function Ct(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var a=31-I(t),i=1<<a;i&e|n[a]&e&&(n[a]|=e),t&=~i}}function kr(n,e){var t=e&-e;return t=(t&42)!==0?1:ki(t),(t&(n.suspendedLanes|e))!==0?0:t}function ki(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Mr(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Rl(){var n=dn.p;return n!==0?n:(n=window.event,n===void 0?32:lp(n.type))}function Cl(n,e){var t=dn.p;try{return dn.p=n,e()}finally{dn.p=t}}var tt=Math.random().toString(36).slice(2),ke="__reactFiber$"+tt,B="__reactProps$"+tt,rn="__reactContainer$"+tt,Mn="__reactEvents$"+tt,ne="__reactListeners$"+tt,be="__reactHandles$"+tt,at="__reactResources$"+tt,it="__reactMarker$"+tt,ta="__reactLoad$"+tt;function Re(n){delete n[ke],delete n[B],delete n[ne],delete n[be]}function Ce(n){var e;if(e=n[ke])return e;for(var t=n.parentNode;t;){if(e=t[rn]||t[ke]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=qg(n);n!==null;){if(t=n[ke])return t;n=qg(n)}return e}n=t,t=n.parentNode}return null}function aa(n){if(n=n[ke]||n[rn]){var e=n.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return n}return null}function Oa(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n.stateNode;throw Error(d(33))}function ia(n){var e=n[at];return e||(e=n[at]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Te(n){n[it]=!0}function Ll(n){n[ta]=void 0}var Dl=new Set,zl={};function _t(n,e){ra(n,e),ra(n+"Capture",e)}function ra(n,e){for(zl[n]=e,n=0;n<e.length;n++)Dl.add(e[n])}var Tt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bl={},Mi={};function Tn(n){return Ai.call(Mi,n)?!0:Ai.call(Bl,n)?!1:Tt.test(n)?Mi[n]=!0:(Bl[n]=!0,!1)}var Un=!1;function Se(){var n=Un;return Un=!1,n}function Gn(n,e,t){if(Tn(e))if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":n.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){n.removeAttribute(e);return}}n.setAttribute(e,t)}}function la(n,e,t){if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttribute(e,t)}}function Be(n,e,t,a){if(a===null)n.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttributeNS(e,t,a)}}function Ue(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ri(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function X(n,e,t){var a=Object.getOwnPropertyDescriptor(n.constructor.prototype,e);if(!n.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,l=a.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){t=""+s,l.call(this,s)}}),Object.defineProperty(n,e,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(s){t=""+s},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ln(n){if(!n._valueTracker){var e=Ri(n)?"checked":"value";n._valueTracker=X(n,e,""+n[e])}}function jn(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),a="";return n&&(a=Ri(n)?n.checked?"true":"false":n.value),n=a,n!==t?(e.setValue(n),!0):!1}var Yn=/[\n"\\]/g;function Zn(n){return n.replace(Yn,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function dt(n,e,t,a,i,l,s,c){n.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?n.type=s:n.removeAttribute("type"),e!=null?s==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+Ue(e)):n.value!==""+Ue(e)&&(n.value=""+Ue(e)):s!=="submit"&&s!=="reset"||n.removeAttribute("value"),e!=null?s==="number"&&n.value==e?Rr(n,Ue(n.value)):Rr(n,Ue(e)):t!=null?Rr(n,Ue(t)):a!=null&&n.removeAttribute("value"),i==null&&l!=null&&(n.defaultChecked=!!l),i!=null&&(n.checked=i&&typeof i!="function"&&typeof i!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?n.name=""+Ue(c):n.removeAttribute("name")}function Ul(n,e,t,a,i,l,s,c){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(n.type=l),e!=null||t!=null){if(!(l!=="submit"&&l!=="reset"||e!=null)){ln(n);return}t=t!=null?""+Ue(t):"",e=e!=null?""+Ue(e):t,c||e===n.value||(n.value=e),n.defaultValue=e}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,n.checked=c?n.checked:!!a,n.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(n.name=s),ln(n)}function Rr(n,e){n.defaultValue!==""+e&&(n.defaultValue=""+e)}function Ci(n,e,t,a){if(n=n.options,e){e={};for(var i=0;i<t.length;i++)e["$"+t[i]]=!0;for(t=0;t<n.length;t++)i=e.hasOwnProperty("$"+n[t].value),n[t].selected!==i&&(n[t].selected=i),i&&a&&(n[t].defaultSelected=!0)}else{for(t=""+Ue(t),e=null,i=0;i<n.length;i++){if(n[i].value===t){n[i].selected=!0,a&&(n[i].defaultSelected=!0);return}e!==null||n[i].disabled||(e=n[i])}e!==null&&(e.selected=!0)}}function dd(n,e,t){if(e!=null&&(e=""+Ue(e),e!==n.value&&(n.value=e),t==null)){n.defaultValue!==e&&(n.defaultValue=e);return}n.defaultValue=t!=null?""+Ue(t):""}function fd(n,e,t,a){if(e==null){if(a!=null){if(t!=null)throw Error(d(92));if(On(a)){if(1<a.length)throw Error(d(93));a=a[0]}t=a}t==null&&(t=""),e=t}t=Ue(e),n.defaultValue=t,a=n.textContent,a===t&&a!==""&&a!==null&&(n.value=a),ln(n)}function Li(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Nb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hd(n,e,t){var a=e.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?n.setProperty(e,""):e==="float"?n.cssFloat="":n[e]="":a?n.setProperty(e,t):typeof t!="number"||t===0||Nb.has(e)?e==="float"?n.cssFloat=t:n[e]=(""+t).trim():n[e]=t+"px"}function gd(n,e,t){if(e!=null&&typeof e!="object")throw Error(d(62));if(n=n.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="",Un=!0);for(var i in e)a=e[i],e.hasOwnProperty(i)&&t[i]!==a&&(hd(n,i,a),Un=!0)}else for(var l in e)e.hasOwnProperty(l)&&hd(n,l,e[l])}function yo(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Eb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Hl(n){return Eb.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function Vt(){}var xo=null;function _o(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Di=null,zi=null;function pd(n){var e=aa(n);if(e&&(n=e.stateNode)){var t=n[B]||null;n:switch(n=e.stateNode,e.type){case"input":if(dt(n,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Zn(""+e)+'"][type="radio"]'),e=0;e<t.length;e++){var a=t[e];if(a!==n&&a.form===n.form){var i=a[B]||null;if(!i)throw Error(d(90));dt(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<t.length;e++)a=t[e],a.form===n.form&&jn(a)}break n;case"textarea":dd(n,t.value,t.defaultValue);break n;case"select":e=t.value,e!=null&&Ci(n,!!t.multiple,e,!1)}}}var To=!1;function md(n,e,t){if(To)return n(e,t);To=!0;try{var a=n(e);return a}finally{if(To=!1,(Di!==null||zi!==null)&&(Hs(),Di&&(e=Di,n=zi,zi=Di=null,pd(e),n)))for(e=0;e<n.length;e++)pd(n[e])}}function Cr(n,e){var t=n.stateNode;if(t===null)return null;var a=t[B]||null;if(a===null)return null;t=a[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(n=n.type,a=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!a;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(d(231,e,typeof t));return t}var sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),So=!1;if(sa)try{var Lr={};Object.defineProperty(Lr,"passive",{get:function(){So=!0}}),window.addEventListener("test",Lr,Lr),window.removeEventListener("test",Lr,Lr)}catch{So=!1}var Aa=null,jo=null,ql=null;function vd(){if(ql)return ql;var n,e=jo,t=e.length,a,i="value"in Aa?Aa.value:Aa.textContent,l=i.length;for(n=0;n<t&&e[n]===i[n];n++);var s=t-n;for(a=1;a<=s&&e[t-a]===i[l-a];a++);return ql=i.slice(n,1<a?1-a:void 0)}function Gl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Yl(){return!0}function bd(){return!1}function Je(n){function e(t,a,i,l,s){this._reactName=t,this._targetInst=i,this.type=a,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var c in n)n.hasOwnProperty(c)&&(t=n[c],this[c]=t?t(l):l[c]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Yl:bd,this.isPropagationStopped=bd,this}return Z(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Yl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Yl)},persist:function(){},isPersistent:Yl}),e}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vl=Je(ka),Dr=Z({},ka,{view:0,detail:0}),Ob=Je(Dr),No,wo,zr,Il=Z({},Dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oo,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==zr&&(zr&&n.type==="mousemove"?(No=n.screenX-zr.screenX,wo=n.screenY-zr.screenY):wo=No=0,zr=n),No)},movementY:function(n){return"movementY"in n?n.movementY:wo}}),yd=Je(Il),Ab=Z({},Il,{dataTransfer:0}),kb=Je(Ab),Mb=Z({},Dr,{relatedTarget:0}),Eo=Je(Mb),Rb=Z({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),Cb=Je(Rb),Lb=Z({},ka,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Db=Je(Lb),zb=Z({},ka,{data:0}),xd=Je(zb),Bb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ub={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qb(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Hb[n])?!!e[n]:!1}function Oo(){return qb}var Gb=Z({},Dr,{key:function(n){if(n.key){var e=Bb[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Gl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ub[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oo,charCode:function(n){return n.type==="keypress"?Gl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Gl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Yb=Je(Gb),Vb=Z({},Il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_d=Je(Vb),Ib=Z({},ka,{submitter:0}),Kb=Je(Ib),Qb=Z({},Dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oo}),Xb=Je(Qb),Jb=Z({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zb=Je(Jb),Fb=Z({},Il,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Pb=Je(Fb),Wb=Z({},ka,{newState:0,oldState:0,source:0}),$b=Je(Wb),n0=[9,13,27,32],Ao=sa&&"CompositionEvent"in window,Br=null;sa&&"documentMode"in document&&(Br=document.documentMode);var e0=sa&&"TextEvent"in window&&!Br,Td=sa&&(!Ao||Br&&8<Br&&11>=Br),Sd=" ",jd=!1;function Nd(n,e){switch(n){case"keyup":return n0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Bi=!1;function t0(n,e){switch(n){case"compositionend":return wd(e);case"keypress":return e.which!==32?null:(jd=!0,Sd);case"textInput":return n=e.data,n===Sd&&jd?null:n;default:return null}}function a0(n,e){if(Bi)return n==="compositionend"||!Ao&&Nd(n,e)?(n=vd(),ql=jo=Aa=null,Bi=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Td&&e.locale!=="ko"?null:e.data;default:return null}}var i0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ed(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!i0[n.type]:e==="textarea"}function Od(n,e,t,a){Di?zi?zi.push(a):zi=[a]:Di=a,e=Ks(e,"onChange"),0<e.length&&(t=new Vl("onChange","change",null,t,a),n.push({event:t,listeners:e}))}var Ur=null,Hr=null;function r0(n){mg(n,0)}function Kl(n){var e=Oa(n);if(jn(e))return n}function Ad(n,e){if(n==="change")return e}var kd=!1;if(sa){var ko;if(sa){var Mo="oninput"in document;if(!Mo){var Md=document.createElement("div");Md.setAttribute("oninput","return;"),Mo=typeof Md.oninput=="function"}ko=Mo}else ko=!1;kd=ko&&(!document.documentMode||9<document.documentMode)}function Rd(){Ur&&(Ur.detachEvent("onpropertychange",Cd),Hr=Ur=null)}function Cd(n){if(n.propertyName==="value"&&Kl(Hr)){var e=[];Od(e,Hr,n,_o(n)),md(r0,e)}}function l0(n,e,t){n==="focusin"?(Rd(),Ur=e,Hr=t,Ur.attachEvent("onpropertychange",Cd)):n==="focusout"&&Rd()}function s0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Kl(Hr)}function o0(n,e){if(n==="click")return Kl(e)}function c0(n,e){if(n==="input"||n==="change")return Kl(e)}function u0(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ft=typeof Object.is=="function"?Object.is:u0;function qr(n,e){if(ft(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),a=Object.keys(e);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var i=t[a];if(!Ai.call(e,i)||!ft(n[i],e[i]))return!1}return!0}function Ro(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ld(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Dd(n,e){var t=Ld(n);n=0;for(var a;t;){if(t.nodeType===3){if(a=n+t.textContent.length,n<=e&&a>=e)return{node:t,offset:e-n};n=a}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=Ld(t)}}function zd(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?zd(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Bd(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var e=Ro(n.document);e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Ro(n.document)}return e}function Co(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}var d0=sa&&"documentMode"in document&&11>=document.documentMode,Ui=null,Lo=null,Gr=null,Do=!1;function Ud(n,e,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Do||Ui==null||Ui!==Ro(a)||(a=Ui,"selectionStart"in a&&Co(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Gr&&qr(Gr,a)||(Gr=a,a=Ks(Lo,"onSelect"),0<a.length&&(e=new Vl("onSelect","select",null,e,t),n.push({event:e,listeners:a}),e.target=Ui)))}function ri(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Hi={animationend:ri("Animation","AnimationEnd"),animationiteration:ri("Animation","AnimationIteration"),animationstart:ri("Animation","AnimationStart"),transitionrun:ri("Transition","TransitionRun"),transitionstart:ri("Transition","TransitionStart"),transitioncancel:ri("Transition","TransitionCancel"),transitionend:ri("Transition","TransitionEnd")},zo={},Hd={};sa&&(Hd=document.createElement("div").style,"AnimationEvent"in window||(delete Hi.animationend.animation,delete Hi.animationiteration.animation,delete Hi.animationstart.animation),"TransitionEvent"in window||delete Hi.transitionend.transition);function li(n){if(zo[n])return zo[n];if(!Hi[n])return n;var e=Hi[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Hd)return zo[n]=e[t];return n}var qd=li("animationend"),Gd=li("animationiteration"),Yd=li("animationstart"),f0=li("transitionrun"),h0=li("transitionstart"),g0=li("transitioncancel"),Vd=li("transitionend"),Id=new Map,Bo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Bo.push("scrollEnd");function Lt(n,e){Id.set(n,e),_t(e,[n])}var p0=0;function oa(n,e){if(n.name!=null&&n.name!=="auto")return n.name;if(e.autoName!==null)return e.autoName;n=Ut.identifierPrefix;var t=p0++;return n="_"+n+"t_"+t.toString(32)+"_",e.autoName=n}function Kd(n){if(n==null||typeof n=="string")return n;var e=null,t=rr;if(t!==null)for(var a=0;a<t.length;a++){var i=n[t[a]];if(i!=null){if(i==="none")return"none";e=e==null?i:e+(" "+i)}}return e??n.default}function ca(n,e){return n=Kd(n),e=Kd(e),e==null?n==="auto"?null:n:e==="auto"?null:e}var Ql=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},St=[],qi=0,Uo=0;function Xl(){for(var n=qi,e=Uo=qi=0;e<n;){var t=St[e];St[e++]=null;var a=St[e];St[e++]=null;var i=St[e];St[e++]=null;var l=St[e];if(St[e++]=null,a!==null&&i!==null){var s=a.pending;s===null?i.next=i:(i.next=s.next,s.next=i),a.pending=i}l!==0&&Qd(t,i,l)}}function Jl(n,e,t,a){St[qi++]=n,St[qi++]=e,St[qi++]=t,St[qi++]=a,Uo|=a,n.lanes|=a,n=n.alternate,n!==null&&(n.lanes|=a)}function Ho(n,e,t,a){return Jl(n,e,t,a),Zl(n)}function si(n,e){return Jl(n,null,null,e),Zl(n)}function Qd(n,e,t){n.lanes|=t;var a=n.alternate;a!==null&&(a.lanes|=t);for(var i=!1,l=n.return;l!==null;)l.childLanes|=t,a=l.alternate,a!==null&&(a.childLanes|=t),l.tag===22&&(n=l.stateNode,n===null||n._visibility&1||(i=!0)),n=l,l=l.return;return n.tag===3?(l=n.stateNode,i&&e!==null&&(i=31-I(t),n=l.hiddenUpdates,a=n[i],a===null?n[i]=[e]:a.push(e),e.lane=t|536870912),l):null}function Zl(n){if(50<cl)throw cl=0,Us=null,Error(d(185));for(var e=n.return;e!==null;)n=e,e=n.return;return n.tag===3?n.stateNode:null}var Gi={};function m0(n,e,t,a){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(n,e,t,a){return new m0(n,e,t,a)}function qo(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ua(n,e){var t=n.alternate;return t===null?(t=rt(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&1206910976,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t.refCleanup=n.refCleanup,t}function Xd(n,e){n.flags&=1206910978;var t=n.alternate;return t===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,n.type=t.type,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n}function Fl(n,e,t,a,i,l){var s=0;if(a=n,typeof a=="function")qo(a)&&(s=1);else if(typeof a=="string")s=Iy(n,t,xt.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(a){case oe:return n=rt(31,t,e,i),n.elementType=oe,n.lanes=l,n;case se:return oi(t.children,i,l,e);case me:s=8,i|=24;break;case Ke:return n=rt(12,t,e,i|2),n.elementType=Ke,n.lanes=l,n;case cn:return n=rt(13,t,e,i),n.elementType=cn,n.lanes=l,n;case P:return n=rt(19,t,e,i),n.elementType=P,n.lanes=l,n;case ve:case y:return n=i|32,n=rt(30,t,e,n),n.elementType=y,n.lanes=l,n.stateNode={autoName:null,paired:null,clones:null,ref:null},n;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case ce:s=10;break n;case Oe:s=9;break n;case Y:s=11;break n;case kn:s=14;break n;case Sn:s=16,a=null;break n}s=29,t=Error(d(130,n===null?"null":typeof n,"")),a=null}return e=rt(s,t,e,i),e.elementType=n,e.type=a,e.lanes=l,e}function oi(n,e,t,a){return n=rt(7,n,a,e),n.lanes=t,n}function Go(n,e,t){return n=rt(6,n,null,e),n.lanes=t,n}function Jd(n){var e=rt(18,null,null,0);return e.stateNode=n,e}function Yo(n,e,t){return e=rt(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}var Zd=new WeakMap;function jt(n,e){if(typeof n=="object"&&n!==null){var t=Zd.get(n);return t!==void 0?t:(e={value:n,source:e,stack:El(e)},Zd.set(n,e),e)}return{value:n,source:e,stack:El(e)}}var Yi=[],Vi=0,Pl=null,Yr=0,Nt=[],wt=0,Ma=null,It=1,Kt="";function da(n,e){Yi[Vi++]=Yr,Yi[Vi++]=Pl,Pl=n,Yr=e}function Fd(n,e,t){Nt[wt++]=It,Nt[wt++]=Kt,Nt[wt++]=Ma,Ma=n;var a=It;n=Kt;var i=32-I(a)-1;a&=~(1<<i),t+=1;var l=32-I(e)+i;if(30<l){var s=i-i%5;l=(a&(1<<s)-1).toString(32),a>>=s,i-=s,It=1<<32-I(e)+i|t<<i|a,Kt=l+n}else It=1<<l|t<<i|a,Kt=n}function Wl(n){n.return!==null&&(da(n,1),Fd(n,1,0))}function Vo(n){for(;n===Pl;)Pl=Yi[--Vi],Yi[Vi]=null,Yr=Yi[--Vi],Yi[Vi]=null;for(;n===Ma;)Ma=Nt[--wt],Nt[wt]=null,Kt=Nt[--wt],Nt[wt]=null,It=Nt[--wt],Nt[wt]=null}function Pd(n,e){Nt[wt++]=It,Nt[wt++]=Kt,Nt[wt++]=Ma,It=e.id,Kt=e.overflow,Ma=n}var Le=null,re=null,An=!1,Ra=null,Et=!1,Io=Error(d(519));function Ca(n){var e=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Vr(jt(e,n)),Io}function Wd(n){var e=n.stateNode,t=n.type,a=n.memoizedProps;switch(e[ke]=n,e[B]=a,t){case"dialog":Ln("cancel",e),Ln("close",e);break;case"iframe":case"object":case"embed":Ln("load",e);break;case"video":case"audio":for(t=0;t<dl.length;t++)Ln(dl[t],e);break;case"source":Ln("error",e);break;case"img":case"image":case"link":Ln("error",e),Ln("load",e);break;case"details":Ln("toggle",e);break;case"input":Ln("invalid",e),Ul(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Ln("invalid",e);break;case"textarea":Ln("invalid",e),fd(e,a.value,a.defaultValue,a.children)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||e.textContent===""+t||a.suppressHydrationWarning===!0||xg(e.textContent,t)?(a.popover!=null&&(Ln("beforetoggle",e),Ln("toggle",e)),a.onScroll!=null&&Ln("scroll",e),a.onScrollEnd!=null&&Ln("scrollend",e),a.onClick!=null&&(e.onclick=Vt),e=!0):e=!1,e||Ca(n,!0)}function $l(n){for(Le=n.return;Le;)switch(Le.tag){case 5:case 31:case 13:Et=!1;return;case 27:case 3:Et=!0;return;default:Le=Le.return}}function Ii(n){if(n!==Le)return!1;if(!An)return $l(n),An=!0,!1;var e=n.tag,t;if((t=e!==3&&e!==27)&&((t=e===5)&&(t=n.type,t=!(t!=="form"&&t!=="button")||xu(n.type,n.memoizedProps)),t=!t),t&&re&&Ca(n),$l(n),e===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));re=Hg(n)}else if(e===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));re=Hg(n)}else e===27?(e=re,Za(n.type)?(n=Au,Au=null,re=n):re=e):re=Le?At(n.stateNode.nextSibling):null;return!0}function ci(){re=Le=null,An=!1}function Ko(){var n=Ra;return n!==null&&(ot===null?ot=n:ot.push.apply(ot,n),Ra=null),n}function Vr(n){Ra===null?Ra=[n]:Ra.push(n)}var Qo=yt(null),ui=null,fa=null;function La(n,e,t){$n(Qo,e._currentValue),e._currentValue=t}function ha(n){n._currentValue=Qo.current,Ae(Qo)}function ns(n,e,t){for(;n!==null;){var a=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),n===t)break;n=n.return}}function Xo(n,e,t,a){var i=n.child;for(i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){var s=i.child;l=l.firstContext;n:for(;l!==null;){var c=l;l=i;for(var f=0;f<e.length;f++)if(c.context===e[f]){l.lanes|=t,c=l.alternate,c!==null&&(c.lanes|=t),ns(l.return,t,n),a||(s=null);break n}l=c.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(d(341));s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),ns(s,t,n),s=null}else i.tag===13&&i.memoizedState!==null&&i.memoizedState.dehydrated===null?(i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),ns(i.return,t,n),s=i.child,s=s!==null?s.sibling:null):s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===n){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function di(n,e,t,a){n=null;for(var i=e,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(d(387));if(s=s.memoizedProps,s!==null){var c=i.type;ft(i.pendingProps.value,s.value)||(n!==null?n.push(c):n=[c])}}else if(i===Ei.current){if(s=i.alternate,s===null)throw Error(d(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(n!==null?n.push(pr):n=[pr])}i=i.return}return n!==null&&Xo(e,n,t,a),e.flags|=262144,n!==null}function es(n){for(n=n.firstContext;n!==null;){if(!ft(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function fi(n){ui=n,fa=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function He(n){return $d(ui,n)}function ts(n,e){return ui===null&&fi(n),$d(n,e)}function $d(n,e){var t=e._currentValue;if(e={context:e,memoizedValue:t,next:null},fa===null){if(n===null)throw Error(d(308));fa=e,n.dependencies={lanes:0,firstContext:e},n.flags|=524288}else fa=fa.next=e;return t}var v0=typeof AbortController<"u"?AbortController:function(){var n=[],e=this.signal={aborted:!1,addEventListener:function(t,a){n.push(a)}};this.abort=function(){e.aborted=!0,n.forEach(function(t){return t()})}},b0=o.unstable_scheduleCallback,y0=o.unstable_NormalPriority,je={$$typeof:ce,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Jo(){return{controller:new v0,data:new Map,refCount:0}}function Ir(n){n.refCount--,n.refCount===0&&b0(y0,function(){n.controller.abort()})}function nf(n,e){if((n.pendingLanes&4194048)!==0){var t=n.transitionTypes;for(t===null&&(t=n.transitionTypes=[]),n=0;n<e.length;n++){var a=e[n];t.indexOf(a)===-1&&t.push(a)}}}var Kr=null;function x0(n){var e=n.transitionTypes;return n.transitionTypes=null,e}var Qr=null,Zo=0,hi=0,Ki=null;function _0(n,e){if(Qr===null){var t=Qr=[];Zo=0,hi=du(),Ki={status:"pending",value:void 0,then:function(a){t.push(a)}}}return Zo++,e.then(ef,ef),e}function ef(){if(--Zo===0&&(Kr=null,Qr!==null)){Ki!==null&&(Ki.status="fulfilled");var n=Qr;Qr=null,hi=0,Ki=null;for(var e=0;e<n.length;e++)(0,n[e])()}}function T0(n,e){var t=[],a={status:"pending",value:null,reason:null,then:function(i){t.push(i)}};return n.then(function(){a.status="fulfilled",a.value=e;for(var i=0;i<t.length;i++)(0,t[i])(e)},function(i){for(a.status="rejected",a.reason=i,i=0;i<t.length;i++)(0,t[i])(void 0)}),a}var tf=tn.S;tn.S=function(n,e){if(Zh=Qe(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&_0(n,e),Kr!==null)for(var t=cr;t!==null;)nf(t,Kr),t=t.next;if(t=n.types,t!==null){for(var a=cr;a!==null;)nf(a,t),a=a.next;if(hi!==0){a=Kr,a===null&&(a=Kr=[]);for(var i=0;i<t.length;i++){var l=t[i];a.indexOf(l)===-1&&a.push(l)}}}tf!==null&&tf(n,e)};var gi=yt(null);function Fo(){var n=gi.current;return n!==null?n:ae.pooledCache}function as(n,e){e===null?$n(gi,gi.current):$n(gi,e.pool)}function af(){var n=Fo();return n===null?null:{parent:je._currentValue,pool:n}}var Qi=Error(d(460)),Po=Error(d(474)),is=Error(d(542)),rs={then:function(){}};function rf(n){return n=n.status,n==="fulfilled"||n==="rejected"}function lf(n,e,t){switch(t=n[t],t===void 0?n.push(e):t!==e&&(e.then(Vt,Vt),e=t),e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,of(n),n===void 0&&!("reason"in e)?Error(d(600)):n;default:if(typeof e.status=="string")e.then(Vt,Vt);else{if(n=ae,n!==null&&100<n.shellSuspendCounter)throw Error(d(482));n=e,n.status="pending",n.then(function(a){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=a}},function(a){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,of(n),n}throw mi=e,Qi}}function pi(n){try{var e=n._init;return e(n._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(mi=t,Qi):t}}var mi=null;function sf(){if(mi===null)throw Error(d(459));var n=mi;return mi=null,n}function of(n){if(n===Qi||n===is)throw Error(d(483))}var Xi=null,Xr=0;function ls(n){var e=Xr;return Xr+=1,Xi===null&&(Xi=[]),lf(Xi,n,e)}function Da(n,e){e=e.props.ref,n.ref=e!==void 0?e:null}function ss(n,e){throw e.$$typeof===pn?Error(d(525)):(n=Object.prototype.toString.call(e),Error(d(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)))}function cf(n){function e(_,v){if(n){var j=_.deletions;j===null?(_.deletions=[v],_.flags|=16):j.push(v)}}function t(_,v){if(!n)return null;for(;v!==null;)e(_,v),v=v.sibling;return null}function a(_){for(var v=new Map;_!==null;)_.key===null?v.set(_.index,_):v.set(_.key,_),_=_.sibling;return v}function i(_,v){return _=ua(_,v),_.index=0,_.sibling=null,_}function l(_,v,j){return _.index=j,n?(j=_.alternate,j!==null?(j=j.index,j<v?(_.flags|=2,v):j):(_.flags|=134217730,v)):(_.flags|=1048576,v)}function s(_){return n&&_.alternate===null&&(_.flags|=134217730),_}function c(_,v,j,A){return v===null||v.tag!==6?(v=Go(j,_.mode,A),v.return=_,v):(v=i(v,j),v.return=_,v)}function f(_,v,j,A){var nn=j.type;return nn===se?(_=E(_,v,j.props.children,A,j.key),Da(_,j),_):v!==null&&(v.elementType===nn||typeof nn=="object"&&nn!==null&&nn.$$typeof===Sn&&pi(nn)===v.type)?(v=i(v,j.props),Da(v,j),v.return=_,v):(v=Fl(j.type,j.key,j.props,null,_.mode,A),Da(v,j),v.return=_,v)}function T(_,v,j,A){return v===null||v.tag!==4||v.stateNode.containerInfo!==j.containerInfo||v.stateNode.implementation!==j.implementation?(v=Yo(j,_.mode,A),v.return=_,v):(v=i(v,j.children||[]),v.return=_,v)}function E(_,v,j,A,nn){return v===null||v.tag!==7?(v=oi(j,_.mode,A,nn),v.return=_,v):(v=i(v,j),v.return=_,v)}function M(_,v,j){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Go(""+v,_.mode,j),v.return=_,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ie:return j=Fl(v.type,v.key,v.props,null,_.mode,j),Da(j,v),j.return=_,j;case de:return v=Yo(v,_.mode,j),v.return=_,v;case Sn:return v=pi(v),M(_,v,j)}if(On(v)||W(v))return v=oi(v,_.mode,j,null),v.return=_,v;if(typeof v.then=="function")return M(_,ls(v),j);if(v.$$typeof===ce)return M(_,ts(_,v),j);ss(_,v)}return null}function x(_,v,j,A){var nn=v!==null?v.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return nn!==null?null:c(_,v,""+j,A);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case ie:return j.key===nn?f(_,v,j,A):null;case de:return j.key===nn?T(_,v,j,A):null;case Sn:return j=pi(j),x(_,v,j,A)}if(On(j)||W(j))return nn!==null?null:E(_,v,j,A,null);if(typeof j.then=="function")return x(_,v,ls(j),A);if(j.$$typeof===ce)return x(_,v,ts(_,j),A);ss(_,j)}return null}function N(_,v,j,A,nn){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return _=_.get(j)||null,c(v,_,""+A,nn);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case ie:return _=_.get(A.key===null?j:A.key)||null,f(v,_,A,nn);case de:return _=_.get(A.key===null?j:A.key)||null,T(v,_,A,nn);case Sn:return A=pi(A),N(_,v,j,A,nn)}if(On(A)||W(A))return _=_.get(j)||null,E(v,_,A,nn,null);if(typeof A.then=="function")return N(_,v,j,ls(A),nn);if(A.$$typeof===ce)return N(_,v,j,ts(v,A),nn);ss(v,A)}return null}function K(_,v,j,A){for(var nn=null,zn=null,on=v,fn=v=0,Ee=null;on!==null&&fn<j.length;fn++){on.index>fn?(Ee=on,on=null):Ee=on.sibling;var Hn=x(_,on,j[fn],A);if(Hn===null){on===null&&(on=Ee);break}n&&on&&Hn.alternate===null&&e(_,on),v=l(Hn,v,fn),zn===null?nn=Hn:zn.sibling=Hn,zn=Hn,on=Ee}if(fn===j.length)return t(_,on),An&&da(_,fn),nn;if(on===null){for(;fn<j.length;fn++)on=M(_,j[fn],A),on!==null&&(v=l(on,v,fn),zn===null?nn=on:zn.sibling=on,zn=on);return An&&da(_,fn),nn}for(on=a(on);fn<j.length;fn++)Ee=N(on,_,fn,j[fn],A),Ee!==null&&(n&&(Hn=Ee.alternate,Hn!==null&&on.delete(Hn.key===null?fn:Hn.key)),v=l(Ee,v,fn),zn===null?nn=Ee:zn.sibling=Ee,zn=Ee);return n&&on.forEach(function(ni){return e(_,ni)}),An&&da(_,fn),nn}function an(_,v,j,A){if(j==null)throw Error(d(151));for(var nn=null,zn=null,on=v,fn=v=0,Ee=null,Hn=j.next();on!==null&&!Hn.done;fn++,Hn=j.next()){on.index>fn?(Ee=on,on=null):Ee=on.sibling;var ni=x(_,on,Hn.value,A);if(ni===null){on===null&&(on=Ee);break}n&&on&&ni.alternate===null&&e(_,on),v=l(ni,v,fn),zn===null?nn=ni:zn.sibling=ni,zn=ni,on=Ee}if(Hn.done)return t(_,on),An&&da(_,fn),nn;if(on===null){for(;!Hn.done;fn++,Hn=j.next())Hn=M(_,Hn.value,A),Hn!==null&&(v=l(Hn,v,fn),zn===null?nn=Hn:zn.sibling=Hn,zn=Hn);return An&&da(_,fn),nn}for(on=a(on);!Hn.done;fn++,Hn=j.next())Hn=N(on,_,fn,Hn.value,A),Hn!==null&&(n&&(Ee=Hn.alternate,Ee!==null&&on.delete(Ee.key===null?fn:Ee.key)),v=l(Hn,v,fn),zn===null?nn=Hn:zn.sibling=Hn,zn=Hn);return n&&on.forEach(function(tx){return e(_,tx)}),An&&da(_,fn),nn}function wn(_,v,j,A){if(typeof j=="object"&&j!==null&&j.type===se&&j.key===null&&j.props.ref===void 0&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case ie:n:{for(var nn=j.key;v!==null;){if(v.key===nn){if(nn=j.type,nn===se){if(v.tag===7){t(_,v.sibling),A=i(v,j.props.children),Da(A,j),A.return=_,_=A;break n}}else if(v.elementType===nn||typeof nn=="object"&&nn!==null&&nn.$$typeof===Sn&&pi(nn)===v.type){t(_,v.sibling),A=i(v,j.props),Da(A,j),A.return=_,_=A;break n}t(_,v);break}else e(_,v);v=v.sibling}j.type===se?(A=oi(j.props.children,_.mode,A,j.key),Da(A,j),A.return=_,_=A):(A=Fl(j.type,j.key,j.props,null,_.mode,A),Da(A,j),A.return=_,_=A)}return s(_);case de:n:{for(nn=j.key;v!==null;){if(v.key===nn)if(v.tag===4&&v.stateNode.containerInfo===j.containerInfo&&v.stateNode.implementation===j.implementation){t(_,v.sibling),A=i(v,j.children||[]),A.return=_,_=A;break n}else{t(_,v);break}else e(_,v);v=v.sibling}A=Yo(j,_.mode,A),A.return=_,_=A}return s(_);case Sn:return j=pi(j),wn(_,v,j,A)}if(On(j))return K(_,v,j,A);if(W(j)){if(nn=W(j),typeof nn!="function")throw Error(d(150));return j=nn.call(j),an(_,v,j,A)}if(typeof j.then=="function")return wn(_,v,ls(j),A);if(j.$$typeof===ce)return wn(_,v,ts(_,j),A);ss(_,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,v!==null&&v.tag===6?(t(_,v.sibling),A=i(v,j),A.return=_,_=A):(t(_,v),A=Go(j,_.mode,A),A.return=_,_=A),s(_)):t(_,v)}return function(_,v,j,A){try{Xr=0;var nn=wn(_,v,j,A);return Xi=null,nn}catch(on){if(on===Qi||on===is)throw on;var zn=rt(29,on,null,_.mode);return zn.lanes=A,zn.return=_,zn}}}var vi=cf(!0),uf=cf(!1),za=!1;function Wo(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $o(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Ba(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Ua(n,e,t){var a=n.updateQueue;if(a===null)return null;if(a=a.shared,(Vn&2)!==0){var i=a.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),a.pending=e,e=Zl(n),Qd(n,null,t),e}return Jl(n,a,e,t),Zl(n)}function Jr(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194048)!==0)){var a=e.lanes;a&=n.pendingLanes,t|=a,e.lanes=t,Ct(n,t)}}function nc(n,e){var t=n.updateQueue,a=n.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var s={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};l===null?i=l=s:l=l.next=s,t=t.next}while(t!==null);l===null?i=l=e:l=l.next=e}else i=l=e;t={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:a.shared,callbacks:a.callbacks},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}var ec=!1;function Zr(){if(ec){var n=Ki;if(n!==null)throw n}}function Fr(n,e,t,a){ec=!1;var i=n.updateQueue;za=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var f=c,T=f.next;f.next=null,s===null?l=T:s.next=T,s=f;var E=n.alternate;E!==null&&(E=E.updateQueue,c=E.lastBaseUpdate,c!==s&&(c===null?E.firstBaseUpdate=T:c.next=T,E.lastBaseUpdate=f))}if(l!==null){var M=i.baseState;s=0,E=T=f=null,c=l;do{var x=c.lane&-536870913,N=x!==c.lane;if(N?(Dn&x)===x:(a&x)===x){x!==0&&x===hi&&(ec=!0),E!==null&&(E=E.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});n:{var K=n,an=c;x=e;var wn=t;switch(an.tag){case 1:if(K=an.payload,typeof K=="function"){M=K.call(wn,M,x);break n}M=K;break n;case 3:K.flags=K.flags&-65537|128;case 0:if(K=an.payload,x=typeof K=="function"?K.call(wn,M,x):K,x==null)break n;M=Z({},M,x);break n;case 2:za=!0}}x=c.callback,x!==null&&(n.flags|=64,N&&(n.flags|=8192),N=i.callbacks,N===null?i.callbacks=[x]:N.push(x))}else N={lane:x,tag:c.tag,payload:c.payload,callback:c.callback,next:null},E===null?(T=E=N,f=M):E=E.next=N,s|=x;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;N=c,c=N.next,N.next=null,i.lastBaseUpdate=N,i.shared.pending=null}}while(!0);E===null&&(f=M),i.baseState=f,i.firstBaseUpdate=T,i.lastBaseUpdate=E,l===null&&(i.shared.lanes=0),Ka|=s,n.lanes=s,n.memoizedState=M}}function df(n,e){if(typeof n!="function")throw Error(d(191,n));n.call(e)}function ff(n,e){var t=n.callbacks;if(t!==null)for(n.callbacks=null,n=0;n<t.length;n++)df(t[n],e)}var Ha=yt(null),os=yt(0);function hf(n,e){n=ba,$n(os,n),$n(Ha,e),ba=n|e.baseLanes}function tc(){$n(os,ba),$n(Ha,Ha.current)}function ac(){ba=os.current,Ae(Ha),Ae(os)}var qe=yt(null),Xe=null;function qa(n){var e=n.alternate;$n(Ge,Ge.current&1),$n(qe,n),Xe===null&&(e===null||Ha.current!==null||e.memoizedState!==null)&&(Xe=n)}function ic(n){$n(Ge,Ge.current),$n(qe,n),Xe===null&&(Xe=n)}function gf(n){n.tag===22?($n(Ge,Ge.current),$n(qe,n),Xe===null&&(Xe=n)):Ga()}function Ga(){$n(Ge,Ge.current),$n(qe,qe.current)}function ht(n){Ae(qe),Xe===n&&(Xe=null),Ae(Ge)}var Ge=yt(0);function Pr(n,e){$n(qe,qe.current),$n(Ge,e)}function rc(n){Ae(Ge),Ae(qe),Xe===n&&(Xe=null)}function cs(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Eu(t)||Ou(t)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ga=0,Nn=null,ee=null,Ne=null,us=!1,Ji=!1,bi=!1,ds=0,Wr=0,Zi=null,S0=0;function ge(){throw Error(d(321))}function lc(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ft(n[t],e[t]))return!1;return!0}function sc(n,e,t,a,i,l){return ga=l,Nn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tn.H=n===null||n.memoizedState===null?Pf:Wf,bi=!1,l=t(a,i),bi=!1,Ji&&(l=mf(e,t,a,i)),pf(n),l}function pf(n){tn.H=bs;var e=ee!==null&&ee.next!==null;if(ga=0,Ne=ee=Nn=null,us=!1,Wr=0,Zi=null,e)throw Error(d(300));n===null||we||(n=n.dependencies,n!==null&&es(n)&&(we=!0))}function mf(n,e,t,a){Nn=n;var i=0;do{if(Ji&&(Zi=null),Wr=0,Ji=!1,25<=i)throw Error(d(301));if(i+=1,Ne=ee=null,n.updateQueue!=null){var l=n.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}tn.H=M0,l=e(t,a)}while(Ji);return l}function j0(){var n=tn.H,e=n.useState()[0];return e=typeof e.then=="function"?$r(e):e,n=n.useState()[0],(ee!==null?ee.memoizedState:null)!==n&&(Nn.flags|=1024),e}function oc(){var n=ds!==0;return ds=0,n}function cc(n,e,t){e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~t}function uc(n){if(us){for(n=n.memoizedState;n!==null;){var e=n.queue;e!==null&&(e.pending=null),n=n.next}us=!1}ga=0,Ne=ee=Nn=null,Ji=!1,Wr=ds=0,Zi=null}function Ze(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?Nn.memoizedState=Ne=n:Ne=Ne.next=n,Ne}function ye(){if(ee===null){var n=Nn.alternate;n=n!==null?n.memoizedState:null}else n=ee.next;var e=Ne===null?Nn.memoizedState:Ne.next;if(e!==null)Ne=e,ee=n;else{if(n===null)throw Nn.alternate===null?Error(d(467)):Error(d(310));ee=n,n={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},Ne===null?Nn.memoizedState=Ne=n:Ne=Ne.next=n}return Ne}function fs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $r(n){var e=Wr;return Wr+=1,Zi===null&&(Zi=[]),n=lf(Zi,n,e),e=Nn,(Ne===null?e.memoizedState:Ne.next)===null&&(e=e.alternate,tn.H=e===null||e.memoizedState===null?Pf:Wf),n}function hs(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return $r(n);if(n.$$typeof===z)return;if(n.$$typeof===ce)return He(n)}throw Error(d(438,String(n)))}function dc(n){var e=null,t=Nn.updateQueue;if(t!==null&&(e=t.memoCache),e==null){var a=Nn.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),t===null&&(t=fs(),Nn.updateQueue=t),t.memoCache=e,t=e.data[e.index],t===void 0)for(t=e.data[e.index]=Array(n),a=0;a<n;a++)t[a]=ut;return e.index++,t}function pa(n,e){return typeof e=="function"?e(n):e}function gs(n){var e=ye();return fc(e,ee,n)}function fc(n,e,t){var a=n.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=t;var i=n.baseQueue,l=a.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}e.baseQueue=i=l,a.pending=null}if(l=n.baseState,i===null)n.memoizedState=l;else{e=i.next;var c=s=null,f=null,T=e,E=!1;do{var M=T.lane&-536870913;if(M!==T.lane?(Dn&M)===M:(ga&M)===M){var x=T.revertLane;if(x===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),M===hi&&(E=!0);else if((ga&x)===x){T=T.next,x===hi&&(E=!0);continue}else M={lane:0,revertLane:T.revertLane,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},f===null?(c=f=M,s=l):f=f.next=M,Nn.lanes|=x,Ka|=x;M=T.action,bi&&t(l,M),l=T.hasEagerState?T.eagerState:t(l,M)}else x={lane:M,revertLane:T.revertLane,gesture:T.gesture,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},f===null?(c=f=x,s=l):f=f.next=x,Nn.lanes|=M,Ka|=M;T=T.next}while(T!==null&&T!==e);if(f===null?s=l:f.next=c,!ft(l,n.memoizedState)&&(we=!0,E&&(t=Ki,t!==null)))throw t;n.memoizedState=l,n.baseState=s,n.baseQueue=f,a.lastRenderedState=l}return i===null&&(a.lanes=0),[n.memoizedState,a.dispatch]}function hc(n){var e=ye(),t=e.queue;if(t===null)throw Error(d(311));t.lastRenderedReducer=n;var a=t.dispatch,i=t.pending,l=e.memoizedState;if(i!==null){t.pending=null;var s=i=i.next;do l=n(l,s.action),s=s.next;while(s!==i);ft(l,e.memoizedState)||(we=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),t.lastRenderedState=l}return[l,a]}function vf(n,e,t){var a=Nn,i=ye(),l=An;if(l){if(t===void 0)throw Error(d(407));t=t()}else t=e();var s=!ft((ee||i).memoizedState,t);if(s&&(i.memoizedState=t,we=!0),i=i.queue,mc(xf.bind(null,a,i,n),[n]),n=i.getSnapshot!==e||s||Ne!==null&&(Ne.memoizedState.tag&1)!==0,Fi(n?9:8,{destroy:void 0},yf.bind(null,a,i,t,e),null),n){if(a.flags|=2048,ae===null)throw Error(d(349));l||(ga&127)!==0||bf(a,e,t)}return t}function bf(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Nn.updateQueue,e===null?(e=fs(),Nn.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function yf(n,e,t,a){e.value=t,e.getSnapshot=a,_f(e)&&Tf(n)}function xf(n,e,t){return t(function(){_f(e)&&Tf(n)})}function _f(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ft(n,t)}catch{return!0}}function Tf(n){var e=si(n,2);e!==null&&ct(e,n,2)}function gc(n){var e=Ze();if(typeof n=="function"){var t=n;if(n=t(),bi){$(!0);try{t()}finally{$(!1)}}}return e.memoizedState=e.baseState=n,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:n},e}function Sf(n,e,t,a){return n.baseState=t,fc(n,ee,typeof a=="function"?a:pa)}function N0(n,e,t,a,i){if(vs(n))throw Error(d(485));if(n=e.action,n!==null){var l={payload:i,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){l.listeners.push(s)}};tn.T!==null?t(!0):l.isTransition=!1,a(l),t=e.pending,t===null?(l.next=e.pending=l,jf(e,l)):(l.next=t.next,e.pending=t.next=l)}}function jf(n,e){var t=e.action,a=e.payload,i=n.state;if(e.isTransition){var l=tn.T,s={};s.types=l!==null?l.types:null,tn.T=s;try{var c=t(i,a),f=tn.S;f!==null&&f(s,c),Nf(n,e,c)}catch(T){pc(n,e,T)}finally{l!==null&&s.types!==null&&(l.types=s.types),tn.T=l}}else try{l=t(i,a),Nf(n,e,l)}catch(T){pc(n,e,T)}}function Nf(n,e,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){wf(n,e,a)},function(a){return pc(n,e,a)}):wf(n,e,t)}function wf(n,e,t){e.status="fulfilled",e.value=t,Ef(e),n.state=t,e=n.pending,e!==null&&(t=e.next,t===e?n.pending=null:(t=t.next,e.next=t,jf(n,t)))}function pc(n,e,t){var a=n.pending;if(n.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=t,Ef(e),e=e.next;while(e!==a)}n.action=null}function Ef(n){n=n.listeners;for(var e=0;e<n.length;e++)(0,n[e])()}function Of(n,e){return e}function Af(n,e){if(An){var t=ae.formState;if(t!==null){n:{var a=Nn;if(An){if(re){e:{for(var i=re,l=Et;i.nodeType!==8;){if(!l){i=null;break e}if(i=At(i.nextSibling),i===null){i=null;break e}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){re=At(i.nextSibling),a=i.data==="F!";break n}}Ca(a)}a=!1}a&&(e=t[0])}}return t=Ze(),t.memoizedState=t.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Of,lastRenderedState:e},t.queue=a,t=Jf.bind(null,Nn,a),a.dispatch=t,a=gc(!1),l=_c.bind(null,Nn,!1,a.queue),a=Ze(),i={state:e,dispatch:null,action:n,pending:null},a.queue=i,t=N0.bind(null,Nn,i,l,t),i.dispatch=t,a.memoizedState=n,[e,t,!1]}function kf(n){var e=ye();return Mf(e,ee,n)}function Mf(n,e,t){if(e=fc(n,e,Of)[0],n=gs(pa)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=$r(e)}catch(s){throw s===Qi?is:s}else a=e;e=ye();var i=e.queue,l=i.dispatch;return t!==e.memoizedState&&(Nn.flags|=2048,Fi(9,{destroy:void 0},w0.bind(null,i,t),null)),[a,l,n]}function w0(n,e){n.action=e}function Rf(n){var e=ye(),t=ee;if(t!==null)return Mf(e,t,n);ye(),e=e.memoizedState,t=ye();var a=t.queue.dispatch;return t.memoizedState=n,[e,a,!1]}function Fi(n,e,t,a){return n={tag:n,create:t,deps:a,inst:e,next:null},e=Nn.updateQueue,e===null&&(e=fs(),Nn.updateQueue=e),t=e.lastEffect,t===null?e.lastEffect=n.next=n:(a=t.next,t.next=n,n.next=a,e.lastEffect=n),n}function Cf(){return ye().memoizedState}function ps(n,e,t,a){var i=Ze();Nn.flags|=n,i.memoizedState=Fi(1|e,{destroy:void 0},t,a===void 0?null:a)}function ms(n,e,t,a){var i=ye();a=a===void 0?null:a;var l=i.memoizedState.inst;ee!==null&&a!==null&&lc(a,ee.memoizedState.deps)?i.memoizedState=Fi(e,l,t,a):(Nn.flags|=n,i.memoizedState=Fi(1|e,l,t,a))}function Lf(n,e){ps(8390656,8,n,e)}function mc(n,e){ms(2048,8,n,e)}function E0(n){Nn.flags|=4;var e=Nn.updateQueue;if(e===null)e=fs(),Nn.updateQueue=e,e.events=[n];else{var t=e.events;t===null?e.events=[n]:t.push(n)}}function Df(n){var e=ye().memoizedState;return E0({ref:e,nextImpl:n}),function(){if((Vn&2)!==0)throw Error(d(440));return e.impl.apply(void 0,arguments)}}function zf(n,e){return ms(4,2,n,e)}function Bf(n,e){return ms(4,4,n,e)}function Uf(n,e){if(typeof e=="function"){n=n();var t=e(n);return function(){typeof t=="function"?t():e(null)}}if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Hf(n,e,t){t=t!=null?t.concat([n]):null,ms(4,4,Uf.bind(null,e,n),t)}function vc(){}function qf(n,e){var t=ye();e=e===void 0?null:e;var a=t.memoizedState;return e!==null&&lc(e,a[1])?a[0]:(t.memoizedState=[n,e],n)}function Gf(n,e){var t=ye();e=e===void 0?null:e;var a=t.memoizedState;if(e!==null&&lc(e,a[1]))return a[0];if(a=n(),bi){$(!0);try{n()}finally{$(!1)}}return t.memoizedState=[a,e],a}function bc(n,e,t){return t===void 0||(ga&1073741824)!==0&&(Dn&261930)===0?n.memoizedState=e:(n.memoizedState=t,n=Ph(),Nn.lanes|=n,Ka|=n,t)}function Yf(n,e,t,a){return ft(t,e)?t:Ha.current!==null?(n=bc(n,t,a),ft(n,e)||(we=!0),n):(ga&106)===0||(ga&1073741824)!==0&&(Dn&261930)===0?(we=!0,n.memoizedState=t):(n=Ph(),Nn.lanes|=n,Ka|=n,e)}function Vf(n,e,t,a,i){var l=dn.p;dn.p=l!==0&&8>l?l:8;var s=tn.T,c={};c.types=s!==null?s.types:null,tn.T=c,_c(n,!1,e,t);try{var f=i(),T=tn.S;if(T!==null&&T(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var E=T0(f,a);nl(n,e,E,vt(n))}else nl(n,e,a,vt(n))}catch(M){nl(n,e,{then:function(){},status:"rejected",reason:M},vt())}finally{dn.p=l,s!==null&&c.types!==null&&(s.types=c.types),tn.T=s}}function O0(){}function yc(n,e,t,a){if(n.tag!==5)throw Error(d(476));var i=If(n).queue;Vf(n,i,e,nt,t===null?O0:function(){return Kf(n),t(a)})}function If(n){var e=n.memoizedState;if(e!==null)return e;e={memoizedState:nt,baseState:nt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:nt},next:null};var t={};return e.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:t},next:null},n.memoizedState=e,n=n.alternate,n!==null&&(n.memoizedState=e),e}function Kf(n){var e=If(n);e.next===null&&(e=n.alternate.memoizedState),nl(n,e.next.queue,{},vt())}function xc(){return He(pr)}function Qf(){return ye().memoizedState}function Xf(){return ye().memoizedState}function A0(n){for(var e=n.return;e!==null;){switch(e.tag){case 24:case 3:var t=vt();n=Ba(t);var a=Ua(e,n,t);a!==null&&(ct(a,e,t),Jr(a,e,t)),e={cache:Jo()},n.payload=e;return}e=e.return}}function k0(n,e,t){var a=vt();t={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},vs(n)?Zf(e,t):(t=Ho(n,e,t,a),t!==null&&(ct(t,n,a),Ff(t,e,a)))}function Jf(n,e,t){var a=vt();nl(n,e,t,a)}function nl(n,e,t,a){var i={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(vs(n))Zf(e,i);else{var l=n.alternate;if(n.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var s=e.lastRenderedState,c=l(s,t);if(i.hasEagerState=!0,i.eagerState=c,ft(c,s))return Jl(n,e,i,0),ae===null&&Xl(),!1}catch{}if(t=Ho(n,e,i,a),t!==null)return ct(t,n,a),Ff(t,e,a),!0}return!1}function _c(n,e,t,a){if(a={lane:2,revertLane:du(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},vs(n)){if(e)throw Error(d(479))}else e=Ho(n,t,a,2),e!==null&&ct(e,n,2)}function vs(n){var e=n.alternate;return n===Nn||e!==null&&e===Nn}function Zf(n,e){Ji=us=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Ff(n,e,t){if((t&4194048)!==0){var a=e.lanes;a&=n.pendingLanes,t|=a,e.lanes=t,Ct(n,t)}}var bs={readContext:He,use:hs,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useLayoutEffect:ge,useInsertionEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useSyncExternalStore:ge,useId:ge,useHostTransitionStatus:ge,useFormState:ge,useActionState:ge,useOptimistic:ge,useMemoCache:ge,useCacheRefresh:ge,useEffectEvent:ge},Pf={readContext:He,use:hs,useCallback:function(n,e){return Ze().memoizedState=[n,e===void 0?null:e],n},useContext:He,useEffect:Lf,useImperativeHandle:function(n,e,t){t=t!=null?t.concat([n]):null,ps(4194308,4,Uf.bind(null,e,n),t)},useLayoutEffect:function(n,e){return ps(4194308,4,n,e)},useInsertionEffect:function(n,e){ps(4,2,n,e)},useMemo:function(n,e){var t=Ze();e=e===void 0?null:e;var a=n();if(bi){$(!0);try{n()}finally{$(!1)}}return t.memoizedState=[a,e],a},useReducer:function(n,e,t){var a=Ze();if(t!==void 0){var i=t(e);if(bi){$(!0);try{t(e)}finally{$(!1)}}}else i=e;return a.memoizedState=a.baseState=i,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},a.queue=n,n=n.dispatch=k0.bind(null,Nn,n),[a.memoizedState,n]},useRef:function(n){var e=Ze();return n={current:n},e.memoizedState=n},useState:function(n){n=gc(n);var e=n.queue,t=Jf.bind(null,Nn,e);return e.dispatch=t,[n.memoizedState,t]},useDebugValue:vc,useDeferredValue:function(n,e){var t=Ze();return bc(t,n,e)},useTransition:function(){var n=gc(!1);return n=Vf.bind(null,Nn,n.queue,!0,!1),Ze().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,e,t){var a=Nn,i=Ze();if(An){if(t===void 0)throw Error(d(407));t=t()}else{if(t=e(),ae===null)throw Error(d(349));(Dn&127)!==0||bf(a,e,t)}i.memoizedState=t;var l={value:t,getSnapshot:e};return i.queue=l,Lf(xf.bind(null,a,l,n),[n]),a.flags|=2048,Fi(9,{destroy:void 0},yf.bind(null,a,l,t,e),null),t},useId:function(){var n=Ze(),e=ae.identifierPrefix;if(An){var t=Kt,a=It;t=(a&~(1<<32-I(a)-1)).toString(32)+t,e="_"+e+"R_"+t,t=ds++,0<t&&(e+="H"+t.toString(32)),e+="_"}else t=S0++,e="_"+e+"r_"+t.toString(32)+"_";return n.memoizedState=e},useHostTransitionStatus:xc,useFormState:Af,useActionState:Af,useOptimistic:function(n){var e=Ze();e.memoizedState=e.baseState=n;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=t,e=_c.bind(null,Nn,!0,t),t.dispatch=e,[n,e]},useMemoCache:dc,useCacheRefresh:function(){return Ze().memoizedState=A0.bind(null,Nn)},useEffectEvent:function(n){var e=Ze(),t={impl:n};return e.memoizedState=t,function(){if((Vn&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}},Wf={readContext:He,use:hs,useCallback:qf,useContext:He,useEffect:mc,useImperativeHandle:Hf,useInsertionEffect:zf,useLayoutEffect:Bf,useMemo:Gf,useReducer:gs,useRef:Cf,useState:function(){return gs(pa)},useDebugValue:vc,useDeferredValue:function(n,e){var t=ye();return Yf(t,ee.memoizedState,n,e)},useTransition:function(){var n=gs(pa)[0],e=ye().memoizedState;return[typeof n=="boolean"?n:$r(n),e]},useSyncExternalStore:vf,useId:Qf,useHostTransitionStatus:xc,useFormState:kf,useActionState:kf,useOptimistic:function(n,e){var t=ye();return Sf(t,ee,n,e)},useMemoCache:dc,useCacheRefresh:Xf,useEffectEvent:Df},M0={readContext:He,use:hs,useCallback:qf,useContext:He,useEffect:mc,useImperativeHandle:Hf,useInsertionEffect:zf,useLayoutEffect:Bf,useMemo:Gf,useReducer:hc,useRef:Cf,useState:function(){return hc(pa)},useDebugValue:vc,useDeferredValue:function(n,e){var t=ye();return ee===null?bc(t,n,e):Yf(t,ee.memoizedState,n,e)},useTransition:function(){var n=hc(pa)[0],e=ye().memoizedState;return[typeof n=="boolean"?n:$r(n),e]},useSyncExternalStore:vf,useId:Qf,useHostTransitionStatus:xc,useFormState:Rf,useActionState:Rf,useOptimistic:function(n,e){var t=ye();return ee!==null?Sf(t,ee,n,e):(t.baseState=n,[n,t.queue.dispatch])},useMemoCache:dc,useCacheRefresh:Xf,useEffectEvent:Df};function Tc(n,e,t,a){e=n.memoizedState,t=t(a,e),t=t==null?e:Z({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Sc={enqueueSetState:function(n,e,t){n=n._reactInternals;var a=vt(),i=Ba(a);i.payload=e,t!=null&&(i.callback=t),e=Ua(n,i,a),e!==null&&(ct(e,n,a),Jr(e,n,a))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var a=vt(),i=Ba(a);i.tag=1,i.payload=e,t!=null&&(i.callback=t),e=Ua(n,i,a),e!==null&&(ct(e,n,a),Jr(e,n,a))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=vt(),a=Ba(t);a.tag=2,e!=null&&(a.callback=e),e=Ua(n,a,t),e!==null&&(ct(e,n,t),Jr(e,n,t))}};function $f(n,e,t,a,i,l,s){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(a,l,s):e.prototype&&e.prototype.isPureReactComponent?!qr(t,a)||!qr(i,l):!0}function nh(n,e,t,a){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,a),e.state!==n&&Sc.enqueueReplaceState(e,e.state,null)}function yi(n,e){var t=e;if("ref"in e){t={};for(var a in e)a!=="ref"&&(t[a]=e[a])}if(n=n.defaultProps){t===e&&(t=Z({},t));for(var i in n)t[i]===void 0&&(t[i]=n[i])}return t}function eh(n){Ql(n)}function th(n){console.error(n)}function ah(n){Ql(n)}function ys(n,e){try{var t=n.onUncaughtError;t(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function ih(n,e,t){try{var a=n.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function jc(n,e,t){return t=Ba(t),t.tag=3,t.payload={element:null},t.callback=function(){ys(n,e)},t}function rh(n){return n=Ba(n),n.tag=3,n}function lh(n,e,t,a){var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var l=a.value;n.payload=function(){return i(l)},n.callback=function(){ih(e,t,a)}}var s=t.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ih(e,t,a),typeof i!="function"&&(Qa===null?Qa=new Set([this]):Qa.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function R0(n,e,t,a,i){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=t.alternate,e!==null&&di(e,t,i,!0),t=qe.current,t!==null){switch(t.tag){case 31:case 13:case 19:return Xe===null?qs():t.alternate===null&&pe===0&&(pe=3),t.flags&=-257,t.flags|=65536,t.lanes=i,a===rs?t.flags|=16384:(e=t.updateQueue,e===null?t.updateQueue=new Set([a]):e.add(a),ou(n,a,i)),!1;case 22:return t.flags|=65536,a===rs?t.flags|=16384:(e=t.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=e):(t=e.retryQueue,t===null?e.retryQueue=new Set([a]):t.add(a)),ou(n,a,i)),!1}throw Error(d(435,t.tag))}return ou(n,a,i),qs(),!1}if(An)return e=qe.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,a!==Io&&(n=Error(d(422),{cause:a}),Vr(jt(n,t)))):(a!==Io&&(e=Error(d(423),{cause:a}),Vr(jt(e,t))),n=n.current.alternate,n.flags|=65536,i&=-i,n.lanes|=i,a=jt(a,t),i=jc(n.stateNode,a,i),nc(n,i),pe!==4&&(pe=2)),!1;var l=Error(d(520),{cause:a});if(l=jt(l,t),ol===null?ol=[l]:ol.push(l),pe!==4&&(pe=2),e===null)return!0;a=jt(a,t),t=e;do{switch(t.tag){case 3:return t.flags|=65536,n=i&-i,t.lanes|=n,n=jc(t.stateNode,a,n),nc(t,n),!1;case 1:if(e=t.type,l=t.stateNode,(t.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(Qa===null||!Qa.has(l))))return t.flags|=65536,i&=-i,t.lanes|=i,i=rh(i),lh(i,n,t,a),nc(t,i),!1;break;case 22:if(t.memoizedState!==null)return t.flags|=65536,!1}t=t.return}while(t!==null);return!1}var Nc=Error(d(461)),we=!1;function Me(n,e,t,a){e.child=n===null?uf(e,null,t,a):vi(e,n.child,t,a)}function sh(n,e,t,a,i){t=t.render;var l=e.ref;if("ref"in a){var s={};for(var c in a)c!=="ref"&&(s[c]=a[c])}else s=a;return fi(e),a=sc(n,e,t,s,l,i),c=oc(),n!==null&&!we?(cc(n,e,i),ma(n,e,i)):(An&&c&&Wl(e),e.flags|=1,Me(n,e,a,i),e.child)}function oh(n,e,t,a,i){if(n===null){var l=t.type;return typeof l=="function"&&!qo(l)&&l.defaultProps===void 0&&t.compare===null?(e.tag=15,e.type=l,ch(n,e,l,a,i)):(n=Fl(t.type,null,a,e,e.mode,i),n.ref=e.ref,n.return=e,e.child=n)}if(l=n.child,!Cc(n,i)){var s=l.memoizedProps;if(t=t.compare,t=t!==null?t:qr,t(s,a)&&n.ref===e.ref)return ma(n,e,i)}return e.flags|=1,n=ua(l,a),n.ref=e.ref,n.return=e,e.child=n}function ch(n,e,t,a,i){if(n!==null){var l=n.memoizedProps;if(qr(l,a)&&n.ref===e.ref)if(we=!1,e.pendingProps=a=l,Cc(n,i))(n.flags&131072)!==0&&(we=!0);else return e.lanes=n.lanes,ma(n,e,i)}return wc(n,e,t,a,i)}function uh(n,e,t,a){var i=a.children,l=n!==null?n.memoizedState:null;if(n===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(l=l!==null?l.baseLanes|t:t,n!==null){for(a=e.child=n.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;a=i&~l}else a=0,e.child=null;return dh(n,e,l,t,a)}if((t&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},n!==null&&as(e,l!==null?l.cachePool:null),l!==null?hf(e,l):tc(),gf(e);else return a=e.lanes=536870912,dh(n,e,l!==null?l.baseLanes|t:t,t,a)}else l!==null?(as(e,l.cachePool),hf(e,l),Ga(),e.memoizedState=null):(n!==null&&as(e,null),tc(),Ga());return Me(n,e,i,t),e.child}function el(n,e){return n!==null&&n.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function dh(n,e,t,a,i){var l=Fo();return l=l===null?null:{parent:je._currentValue,pool:l},e.memoizedState={baseLanes:t,cachePool:l},n!==null&&as(e,null),tc(),gf(e),n!==null&&di(n,e,a,!0),e.childLanes=i,null}function xs(n,e){return e=_s({mode:e.mode,children:e.children},n.mode),e.ref=n.ref,n.child=e,e.return=n,e}function fh(n,e,t){return vi(e,n.child,null,t),n=xs(e,e.pendingProps),n.flags|=2,ht(e),e.memoizedState=null,n}function C0(n,e,t){var a=e.pendingProps,i=(e.flags&128)!==0;if(e.flags&=-129,n===null){if(An){if(a.mode==="hidden")return n=xs(e,a),e.lanes=536870912,n.memoizedState={baseLanes:0,cachePool:null},el(null,n);if(ic(e),(n=re)?(n=Ug(n,Et),n=n!==null&&n.data==="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:Ma!==null?{id:It,overflow:Kt}:null,retryLane:536870912,hydrationErrors:null},t=Jd(n),t.return=e,e.child=t,Le=e,re=null)):n=null,n===null)throw Ca(e);return e.lanes=536870912,null}return xs(e,a)}var l=n.memoizedState;if(l!==null){var s=l.dehydrated;if(ic(e),i)if(e.flags&256)e.flags&=-257,e=fh(n,e,t);else if(e.memoizedState!==null)e.child=n.child,e.flags|=128,e=null;else throw Error(d(558));else if(we||di(n,e,t,!1),i=(t&n.childLanes)!==0,we||i){if(Ha.current===null){if(a=ae,a!==null&&(s=kr(a,t),s!==0&&s!==l.retryLane))throw l.retryLane=s,si(n,s),ct(a,n,s),Nc;qs()}e=fh(n,e,t)}else n=l.treeContext,re=At(s.nextSibling),Le=e,An=!0,Ra=null,Et=!1,n!==null&&Pd(e,n),e=xs(e,a),e.flags|=134221824;return e}return n=ua(n.child,{mode:a.mode,children:a.children}),n.ref=e.ref,e.child=n,n.return=e,n}function Pi(n,e){var t=e.ref;if(t===null)n!==null&&n.ref!==null&&(e.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(d(284));(n===null||n.ref!==t)&&(e.flags|=4194816)}}function wc(n,e,t,a,i){return fi(e),t=sc(n,e,t,a,void 0,i),a=oc(),n!==null&&!we?(cc(n,e,i),ma(n,e,i)):(An&&a&&Wl(e),e.flags|=1,Me(n,e,t,i),e.child)}function hh(n,e,t,a,i,l){return fi(e),e.updateQueue=null,t=mf(e,a,t,i),pf(n),a=oc(),n!==null&&!we?(cc(n,e,l),ma(n,e,l)):(An&&a&&Wl(e),e.flags|=1,Me(n,e,t,l),e.child)}function gh(n,e,t,a,i){if(fi(e),e.stateNode===null){var l=Gi,s=t.contextType;typeof s=="object"&&s!==null&&(l=He(s)),l=new t(a,l),e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Sc,e.stateNode=l,l._reactInternals=e,l=e.stateNode,l.props=a,l.state=e.memoizedState,l.refs={},Wo(e),s=t.contextType,l.context=typeof s=="object"&&s!==null?He(s):Gi,l.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Tc(e,t,s,a),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(s=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),s!==l.state&&Sc.enqueueReplaceState(l,l.state,null),Fr(e,a,l,i),Zr(),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(n===null){l=e.stateNode;var c=e.memoizedProps,f=yi(t,c);l.props=f;var T=l.context,E=t.contextType;s=Gi,typeof E=="object"&&E!==null&&(s=He(E));var M=t.getDerivedStateFromProps;E=typeof M=="function"||typeof l.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,E||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c||T!==s)&&nh(e,l,a,s),za=!1;var x=e.memoizedState;l.state=x,Fr(e,a,l,i),Zr(),T=e.memoizedState,c||x!==T||za?(typeof M=="function"&&(Tc(e,t,M,a),T=e.memoizedState),(f=za||$f(e,t,f,a,x,T,s))?(E||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=T),l.props=a,l.state=T,l.context=s,a=f):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{l=e.stateNode,$o(n,e),s=e.memoizedProps,E=yi(t,s),l.props=E,M=e.pendingProps,x=l.context,T=t.contextType,f=Gi,typeof T=="object"&&T!==null&&(f=He(T)),c=t.getDerivedStateFromProps,(T=typeof c=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==M||x!==f)&&nh(e,l,a,f),za=!1,x=e.memoizedState,l.state=x,Fr(e,a,l,i),Zr();var N=e.memoizedState;s!==M||x!==N||za||n!==null&&n.dependencies!==null&&es(n.dependencies)?(typeof c=="function"&&(Tc(e,t,c,a),N=e.memoizedState),(E=za||$f(e,t,E,a,x,N,f)||n!==null&&n.dependencies!==null&&es(n.dependencies))?(T||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,N,f),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,N,f)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===n.memoizedProps&&x===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===n.memoizedProps&&x===n.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=N),l.props=a,l.state=N,l.context=f,a=E):(typeof l.componentDidUpdate!="function"||s===n.memoizedProps&&x===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===n.memoizedProps&&x===n.memoizedState||(e.flags|=1024),a=!1)}return l=a,Pi(n,e),a=(e.flags&128)!==0,l||a?(l=e.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:l.render(),e.flags|=1,n!==null&&a?(e.child=vi(e,n.child,null,i),e.child=vi(e,null,t,i)):Me(n,e,t,i),e.memoizedState=l.state,n=e.child):n=ma(n,e,i),n}function ph(n,e,t,a){return ci(),e.flags|=256,Me(n,e,t,a),e.child}var Ec={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Oc(n){return{baseLanes:n,cachePool:af()}}function Ac(n,e,t){return n=n!==null?n.childLanes&~t:0,e&&(n|=mt),n}function mh(n,e,t){var a=e.pendingProps,i=!1,l=(e.flags&128)!==0,s;if((s=l)||(s=n!==null&&n.memoizedState===null?!1:(Ge.current&2)!==0),s&&(i=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,n===null){if(An){if(i?qa(e):Ga(),(n=re)?(n=Ug(n,Et),n=n!==null&&n.data!=="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:Ma!==null?{id:It,overflow:Kt}:null,retryLane:536870912,hydrationErrors:null},t=Jd(n),t.return=e,e.child=t,Le=e,re=null)):n=null,n===null)throw Ca(e);return Ou(n)?e.lanes=32:e.lanes=536870912,null}return l=a.children,a=a.fallback,i?(Ga(),i=e.mode,l=_s({mode:"hidden",children:l},i),a=oi(a,i,t,null),l.return=e,a.return=e,l.sibling=a,e.child=l,a=e.child,a.memoizedState=Oc(t),a.childLanes=Ac(n,s,t),e.memoizedState=Ec,el(null,a)):(qa(e),kc(e,l))}var c=n.memoizedState;if(c!==null){var f=c.dehydrated;if(f!==null)return L0(n,e,l,s,a,f,c,t)}return i?(Ga(),i=a.fallback,l=e.mode,c=n.child,f=c.sibling,a=ua(c,{mode:"hidden",children:a.children}),a.subtreeFlags=c.subtreeFlags&1206910976,f!==null?i=ua(f,i):(i=oi(i,l,t,null),i.flags|=2),i.return=e,a.return=e,a.sibling=i,e.child=a,el(null,a),a=e.child,i=n.child.memoizedState,i===null?i=Oc(t):(l=i.cachePool,l!==null?(c=je._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=af(),i={baseLanes:i.baseLanes|t,cachePool:l}),a.memoizedState=i,a.childLanes=Ac(n,s,t),e.memoizedState=Ec,el(n.child,a)):(qa(e),t=n.child,n=t.sibling,t=ua(t,{mode:"visible",children:a.children}),t.return=e,t.sibling=null,n!==null&&(s=e.deletions,s===null?(e.deletions=[n],e.flags|=16):s.push(n)),e.child=t,e.memoizedState=null,t)}function kc(n,e){return e=_s({mode:"visible",children:e},n.mode),e.return=n,n.child=e}function _s(n,e){return n=rt(22,n,null,e),n.lanes=0,n}function Ts(n,e,t){return vi(e,n.child,null,t),n=kc(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function L0(n,e,t,a,i,l,s,c){if(t)return e.flags&256?(qa(e),e.flags&=-257,Ts(n,e,c)):e.memoizedState!==null?(Ga(),e.child=n.child,e.flags|=128,null):(Ga(),l=i.fallback,s=e.mode,i=_s({mode:"visible",children:i.children},s),l=oi(l,s,c,null),l.flags|=2,i.return=e,l.return=e,i.sibling=l,e.child=i,vi(e,n.child,null,c),i=e.child,i.memoizedState=Oc(c),i.childLanes=Ac(n,a,c),e.memoizedState=Ec,el(null,i));if(qa(e),Ou(l)){if(a=l.nextSibling&&l.nextSibling.dataset,a)var f=a.dgst;return a=f,a!==""&&(i=Error(d(419)),i.stack="",i.digest=a,Vr({value:i,source:null,stack:null})),Ts(n,e,c)}if(we||di(n,e,c,!1),a=(c&n.childLanes)!==0,we||a){if(Ha.current!==null)return Ts(n,e,c);if(a=ae,a!==null&&(i=kr(a,c),i!==0&&i!==s.retryLane))throw s.retryLane=i,si(n,i),ct(a,n,i),Nc;return Eu(l)||qs(),Ts(n,e,c)}return Eu(l)?(e.flags|=192,e.child=n.child,null):(n=s.treeContext,re=At(l.nextSibling),Le=e,An=!0,Ra=null,Et=!1,n!==null&&Pd(e,n),e=kc(e,i.children),e.flags|=134221824,e)}function vh(n,e,t){n.lanes|=e;var a=n.alternate;a!==null&&(a.lanes|=e),ns(n.return,e,t)}function bh(n){for(var e=null;n!==null;){var t=n.alternate;t!==null&&cs(t)===null&&(e=n),n=n.sibling}return e}function Ss(n,e,t,a,i,l){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:i,treeForkCount:l}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=t,s.tailMode=i,s.treeForkCount=l)}function Mc(n){var e=n.child;for(n.child=null;e!==null;){var t=e.sibling;e.sibling=n.child,n.child=e,e=t}}function Rc(n,e,t){var a=e.pendingProps,i=a.revealOrder,l=a.tail;a=a.children;var s=Ge.current;if(e.flags&128)return Pr(e,s),null;var c=(s&2)!==0;if(c?(s=s&1|2,e.flags|=128):s&=1,Pr(e,s),i==="backwards"&&n!==null?(Mc(n),Me(n,e,a,t),Mc(n)):Me(n,e,a,t),a=An?Yr:0,!c&&n!==null&&(n.flags&128)!==0)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&vh(n,t,e);else if(n.tag===19)vh(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(i){case"backwards":t=bh(e.child),t===null?(i=e.child,e.child=null):(i=t.sibling,t.sibling=null,Mc(e)),Ss(e,!0,i,null,l,a);break;case"unstable_legacy-backwards":for(t=null,i=e.child,e.child=null;i!==null;){if(n=i.alternate,n!==null&&cs(n)===null){e.child=i;break}n=i.sibling,i.sibling=t,t=i,i=n}Ss(e,!0,t,null,l,a);break;case"together":Ss(e,!1,null,null,void 0,a);break;case"independent":e.memoizedState=null;break;default:t=bh(e.child),t===null?(i=e.child,e.child=null):(i=t.sibling,t.sibling=null),Ss(e,!1,i,t,l,a)}return e.child}function yh(n,e,t){var a=e.pendingProps;return La(e,e.type,a.value),Me(n,e,a.children,t),e.child}function ma(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Ka|=e.lanes,(t&e.childLanes)===0)if(n!==null){if(di(n,e,t,!1),(t&e.childLanes)===0)return null}else return null;if(n!==null&&e.child!==n.child)throw Error(d(153));if(e.child!==null){for(n=e.child,t=ua(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=ua(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Cc(n,e){return(n.lanes&e)!==0?!0:(n=n.dependencies,!!(n!==null&&es(n)))}function D0(n,e,t){switch(e.tag){case 3:ti(e,e.stateNode.containerInfo),La(e,je,n.memoizedState.cache),ci();break;case 27:case 5:Oi(e);break;case 4:ti(e,e.stateNode.containerInfo);break;case 10:La(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,ic(e),null;break;case 13:var a=e.memoizedState;if(a!==null){if(a.dehydrated!==null)return qa(e),e.flags|=128,null;a=di(n,e,t,!1);var i=e.child.childLanes;return a||(t&i)!==0?mh(n,e,t):(qa(e),n=ma(n,e,t),n!==null?n.sibling:null)}qa(e);break;case 19:if(e.flags&128)return Rc(n,e,t);if(i=(n.flags&128)!==0,a=(t&e.childLanes)!==0,a||(di(n,e,t,!1),a=(t&e.childLanes)!==0),i){if(a)return Rc(n,e,t);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Pr(e,Ge.current),a)break;return null;case 22:return e.lanes=0,uh(n,e,t,e.pendingProps);case 24:La(e,je,n.memoizedState.cache)}return ma(n,e,t)}function xh(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps)we=!0;else{if(!Cc(n,t)&&(e.flags&128)===0)return we=!1,D0(n,e,t);we=(n.flags&131072)!==0}else we=!1,An&&(e.flags&1048576)!==0&&Fd(e,Yr,e.index);switch(e.lanes=0,e.tag){case 16:n:{var a=e.pendingProps;if(n=pi(e.elementType),e.type=n,typeof n=="function")qo(n)?(a=yi(n,a),e.tag=1,e=gh(null,e,n,a,t)):(e.tag=0,e=wc(null,e,n,a,t));else{if(n!=null){var i=n.$$typeof;if(i===Y){e.tag=11,e=sh(null,e,n,a,t);break n}else if(i===kn){e.tag=14,e=oh(null,e,n,a,t);break n}else if(i===ce){e.tag=10,e.type=n,e=yh(null,e,t);break n}}throw e=Rn(n)||n,Error(d(306,e,""))}}return e;case 0:return wc(n,e,e.type,e.pendingProps,t);case 1:return a=e.type,i=yi(a,e.pendingProps),gh(n,e,a,i,t);case 3:n:{if(ti(e,e.stateNode.containerInfo),n===null)throw Error(d(387));a=e.pendingProps;var l=e.memoizedState;i=l.element,$o(n,e),Fr(e,a,null,t);var s=e.memoizedState;if(a=s.cache,La(e,je,a),a!==l.cache&&Xo(e,[je],t,!0),Zr(),a=s.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){e=ph(n,e,a,t);break n}else if(a!==i){i=jt(Error(d(424)),e),Vr(i),e=ph(n,e,a,t);break n}else for(n=e.stateNode.containerInfo,n.nodeType===9?n=n.body:n=n.nodeName==="HTML"?n.ownerDocument.body:n,re=At(n.firstChild),Le=e,An=!0,Ra=null,Et=!0,t=uf(e,null,a,t),e.child=t;t;)t.flags=t.flags&-3|134221824,t=t.sibling;else{if(ci(),a===i){e=ma(n,e,t);break n}Me(n,e,a,t)}e=e.child}return e;case 26:return Pi(n,e),n===null?(t=Kg(e.type,null,e.pendingProps,null))?e.memoizedState=t:An||(e.stateNode=jg(e.type,e.pendingProps,qt.current,e)):e.memoizedState=Kg(e.type,n.memoizedProps,e.pendingProps,n.memoizedState),null;case 27:return Oi(e),n===null&&An&&(a=e.stateNode=Gg(e.type,e.pendingProps,qt.current),Le=e,Et=!0,i=re,Za(e.type)?(Au=i,re=At(a.firstChild)):re=i),Me(n,e,e.pendingProps.children,t),Pi(n,e),n===null&&(e.flags|=4194304),e.child;case 5:return n===null&&An&&((i=a=re)&&(a=Ay(a,e.type,e.pendingProps,Et),a!==null?(e.stateNode=a,Le=e,re=At(a.firstChild),Et=!1,i=!0):i=!1),i||Ca(e)),Oi(e),i=e.type,l=e.pendingProps,s=n!==null?n.memoizedProps:null,a=l.children,xu(i,l)?a=null:s!==null&&xu(i,s)&&(e.flags|=32),e.memoizedState!==null&&(i=sc(n,e,j0,null,null,t),pr._currentValue=i),Pi(n,e),Me(n,e,a,t),e.child;case 6:return n===null&&An&&((n=t=re)&&(t=ky(t,e.pendingProps,Et),t!==null?(e.stateNode=t,Le=e,re=null,n=!0):n=!1),n||Ca(e)),null;case 13:return mh(n,e,t);case 4:return ti(e,e.stateNode.containerInfo),a=e.pendingProps,n===null?e.child=vi(e,null,a,t):Me(n,e,a,t),e.child;case 11:return sh(n,e,e.type,e.pendingProps,t);case 7:return a=e.pendingProps,Pi(n,e),Me(n,e,a,t),e.child;case 8:return Me(n,e,e.pendingProps.children,t),e.child;case 12:return Me(n,e,e.pendingProps.children,t),e.child;case 10:return yh(n,e,t);case 9:return i=e.type._context,a=e.pendingProps.children,fi(e),i=He(i),a=a(i),e.flags|=1,Me(n,e,a,t),e.child;case 14:return oh(n,e,e.type,e.pendingProps,t);case 15:return ch(n,e,e.type,e.pendingProps,t);case 19:return Rc(n,e,t);case 31:return C0(n,e,t);case 22:return uh(n,e,t,e.pendingProps);case 24:return fi(e),a=He(je),n===null?(i=Fo(),i===null&&(i=ae,l=Jo(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=t),i=l),e.memoizedState={parent:a,cache:i},Wo(e),La(e,je,i)):((n.lanes&t)!==0&&($o(n,e),Fr(e,null,null,t),Zr()),i=n.memoizedState,l=e.memoizedState,i.parent!==a?(i={parent:a,cache:a},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),La(e,je,a)):(a=l.cache,La(e,je,a),a!==i.cache&&Xo(e,[je],t,!0))),Me(n,e,e.pendingProps.children,t),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),a=e.pendingProps,a.name!=null&&a.name!=="auto"?e.flags|=n===null?18882560:18874368:An&&Wl(e),n!==null&&n.memoizedProps.name!==a.name?e.flags|=4194816:Pi(n,e),Me(n,e,a.children,t),e.child;case 29:throw e.pendingProps}throw Error(d(156,e.tag))}function va(n){n.flags|=4}function Lc(n,e,t,a,i){var l;if((l=(n.mode&32)!==0)&&(l=t===null?Zg(e,a):Zg(e,a)&&(a.src!==t.src||a.srcSet!==t.srcSet)),l){if(n.flags|=16777216,(i&335544128)===i)if(n.stateNode.complete)n.flags|=8192;else if(eg())n.flags|=8192;else throw mi=rs,Po}else n.flags&=-16777217}function _h(n,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Fg(e))if(eg())n.flags|=8192;else throw mi=rs,Po}function js(n,e){e!==null&&(n.flags|=4),n.flags&16384&&(e=n.tag!==22?Ar():536870912,n.lanes|=e,tr|=e)}function tl(n,e){if(!An)switch(n.tailMode){case"visible":break;case"collapsed":for(var t=n.tail,a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:a.sibling=null;break;default:for(e=n.tail,t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null}}function le(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,a=0;if(e)for(var i=n.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags&1206910976,a|=i.flags&1206910976,i.return=n,i=i.sibling;else for(i=n.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=n,i=i.sibling;return n.subtreeFlags|=a,n.childLanes=t,e}function z0(n,e,t){var a=e.pendingProps;switch(Vo(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(e),null;case 1:return le(e),null;case 3:return t=e.stateNode,a=null,n!==null&&(a=n.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),ha(je),et(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(n===null||n.child===null)&&(Ii(e)?va(e):n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ko())),le(e),null;case 26:var i=e.type,l=e.memoizedState;return n===null?(va(e),l!==null?(le(e),_h(e,l)):(le(e),Lc(e,i,null,a,t))):l?l!==n.memoizedState?(va(e),le(e),_h(e,l)):(le(e),e.flags&=-16777217):(n=n.memoizedProps,n!==a&&va(e),le(e),Lc(e,i,n,a,t)),null;case 27:if(Mt(e),t=qt.current,i=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==a&&va(e);else{if(!a){if(e.stateNode===null)throw Error(d(166));return le(e),e.subtreeFlags&=-33554433,null}n=xt.current,Ii(e)?Wd(e):(n=Gg(i,a,t),e.stateNode=n,va(e))}return le(e),e.subtreeFlags&=-33554433,null;case 5:if(Mt(e),i=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==a&&va(e);else{if(!a){if(e.stateNode===null)throw Error(d(166));return le(e),e.subtreeFlags&=-33554433,null}if(l=xt.current,Ii(e))Wd(e);else{var s=hl(qt.current);switch(l){case 1:l=s.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:l=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":l=s.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":l=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":l=s.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof a.is=="string"?s.createElement("select",{is:a.is}):s.createElement("select"),a.multiple?l.multiple=!0:a.size&&(l.size=a.size);break;default:l=typeof a.is=="string"?s.createElement(i,{is:a.is}):s.createElement(i)}}l[ke]=e,l[B]=a;n:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)l.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break n;for(;s.sibling===null;){if(s.return===null||s.return===e)break n;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=l;n:switch(Ve(l,i,a),i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break n;case"img":a=!0;break n;default:a=!1}a&&va(e)}}return le(e),e.subtreeFlags&=-33554433,Lc(e,e.type,n===null?null:n.memoizedProps,e.pendingProps,t),null;case 6:if(n&&e.stateNode!=null)n.memoizedProps!==a&&va(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(d(166));if(n=qt.current,Ii(e)){if(n=e.stateNode,t=e.memoizedProps,a=null,i=Le,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}n[ke]=e,n=!!(n.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||xg(n.nodeValue,t)),n||Ca(e,!0)}else n=hl(n).createTextNode(a),n[ke]=e,e.stateNode=n}return le(e),null;case 31:if(t=e.memoizedState,n===null||n.memoizedState!==null){if(a=Ii(e),t!==null){if(n===null){if(!a)throw Error(d(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(557));n[ke]=e}else ci(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;le(e),n=!1}else t=Ko(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=t),n=!0;if(!n)return e.flags&256?(ht(e),e):(ht(e),null);if((e.flags&128)!==0)throw Error(d(558))}return le(e),null;case 13:if(a=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(i=Ii(e),a!==null&&a.dehydrated!==null){if(n===null){if(!i)throw Error(d(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(d(317));i[ke]=e}else ci(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;le(e),i=!1}else i=Ko(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(ht(e),e):(ht(e),null)}return ht(e),(e.flags&128)!==0?(e.lanes=t,e):(t=a!==null,n=n!==null&&n.memoizedState!==null,t&&(a=e.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==i&&(a.flags|=2048)),t!==n&&t&&(e.child.flags|=8192),js(e,e.updateQueue),le(e),null);case 4:return et(),n===null&&pu(e.stateNode.containerInfo),e.flags|=67108864,le(e),null;case 10:return ha(e.type),le(e),null;case 19:if(rc(e),a=e.memoizedState,a===null)return le(e),null;if(i=(e.flags&128)!==0,l=a.rendering,l===null)if(i)tl(a,!1);else{if(pe!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(l=cs(n),l!==null){for(e.flags|=128,tl(a,!1),n=l.updateQueue,e.updateQueue=n,js(e,n),e.subtreeFlags=0,n=t,t=e.child;t!==null;)Xd(t,n),t=t.sibling;return Pr(e,Ge.current&1|2),An&&da(e,a.treeForkCount),e.child}n=n.sibling}a.tail!==null&&Qe()>zs&&(e.flags|=128,i=!0,tl(a,!1),e.lanes=4194304)}else{if(!i)if(n=cs(l),n!==null){if(e.flags|=128,i=!0,n=n.updateQueue,e.updateQueue=n,js(e,n),tl(a,!0),a.tail===null&&a.tailMode!=="collapsed"&&a.tailMode!=="visible"&&!l.alternate&&!An)return le(e),null}else 2*Qe()-a.renderingStartTime>zs&&t!==536870912&&(e.flags|=128,i=!0,tl(a,!1),e.lanes=4194304);a.isBackwards?(l.sibling=e.child,e.child=l):(n=a.last,n!==null?n.sibling=l:e.child=l,a.last=l)}if(a.tail!==null){n=a.tail;n:{for(t=n;t!==null;){if(t.alternate!==null){t=!1;break n}t=t.sibling}t=!0}return a.rendering=n,a.tail=n.sibling,a.renderingStartTime=Qe(),n.sibling=null,l=Ge.current,l=i?l&1|2:l&1,a.tailMode==="visible"||a.tailMode==="collapsed"||!t||An?Pr(e,l):(t=l,$n(qe,e),$n(Ge,t),Xe===null&&(Xe=e)),An&&da(e,a.treeForkCount),n}return le(e),null;case 22:case 23:return ht(e),ac(),a=e.memoizedState!==null,n!==null?n.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(t&536870912)!==0&&(e.flags&128)===0&&(le(e),e.subtreeFlags&6&&(e.flags|=8192)):le(e),t=e.updateQueue,t!==null&&js(e,t.retryQueue),t=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==t&&(e.flags|=2048),n!==null&&Ae(gi),null;case 24:return t=null,n!==null&&(t=n.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),ha(je),le(e),null;case 25:return null;case 30:return e.flags|=33554432,le(e),null}throw Error(d(156,e.tag))}function B0(n,e){switch(Vo(e),e.tag){case 1:return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return ha(je),et(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 26:case 27:case 5:return Mt(e),null;case 31:if(e.memoizedState!==null){if(ht(e),e.alternate===null)throw Error(d(340));ci()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 13:if(ht(e),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(d(340));ci()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return rc(e),n=e.flags,n&65536?(e.flags=n&-65537|128,n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null),e.flags|=4,e):null;case 4:return et(),null;case 10:return ha(e.type),null;case 22:case 23:return ht(e),ac(),n!==null&&Ae(gi),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 24:return ha(je),null;case 25:return null;default:return null}}function Th(n,e){switch(Vo(e),e.tag){case 3:ha(je),et();break;case 26:case 27:case 5:Mt(e);break;case 4:et();break;case 31:e.memoizedState!==null&&ht(e);break;case 13:ht(e);break;case 19:rc(e);break;case 10:ha(e.type);break;case 22:case 23:ht(e),ac(),n!==null&&Ae(gi);break;case 24:ha(je)}}function al(n,e){try{var t=e.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var i=a.next;t=i;do{if((t.tag&n)===n){a=void 0;var l=t.create,s=t.inst;a=l(),s.destroy=a}t=t.next}while(t!==i)}}catch(c){Pn(e,e.return,c)}}function Ya(n,e,t){try{var a=e.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&n)===n){var s=a.inst,c=s.destroy;if(c!==void 0){s.destroy=void 0,i=e;var f=t,T=c;try{T()}catch(E){Pn(i,f,E)}}}a=a.next}while(a!==l)}}catch(E){Pn(e,e.return,E)}}function Sh(n){var e=n.updateQueue;if(e!==null){var t=n.stateNode;try{ff(e,t)}catch(a){Pn(n,n.return,a)}}}function jh(n,e,t){t.props=yi(n.type,n.memoizedProps),t.state=n.memoizedState;try{t.componentWillUnmount()}catch(a){Pn(n,e,a)}}function Qt(n,e){try{var t=n.ref;if(t!==null){switch(n.tag){case 26:case 27:case 5:var a=n.stateNode;break;case 30:var i=n.stateNode,l=oa(n.memoizedProps,i);(i.ref===null||i.ref.name!==l)&&(i.ref=Mg(l)),a=i.ref;break;case 7:if(n.stateNode===null){var s=new bt(n);b(n.child,!1,Ey,s,void 0,void 0),n.stateNode=s}a=n.stateNode;break;default:a=n.stateNode}typeof t=="function"?n.refCleanup=t(a):t.current=a}}catch(c){Pn(n,e,c)}}function Ye(n,e){var t=n.ref,a=n.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(i){Pn(n,e,i)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(i){Pn(n,e,i)}else t.current=null}function Ns(n,e){if((n.tag===5||n.tag===27||n.tag===6)&&n.alternate===null&&e!==null)for(var t=0;t<e.length;t++)Bg(n.stateNode,e[t])}function Nh(n){for(var e=n.return;e!==null&&(zc(e)&&Bg(n.stateNode,e.stateNode),!Dc(e));)e=e.return}function il(n){for(var e=n.return;e!==null&&(zc(e)&&Oy(n.stateNode,e.stateNode),!Dc(e));)e=e.return}function Dc(n){return n.tag===5||n.tag===3||n.tag===27}function zc(n){return n&&n.tag===7&&n.stateNode!==null}function Bc(n){var e=n.type,t=n.memoizedProps,a=n.stateNode;try{n:switch(e){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break n;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(i){Pn(n,n.return,i)}}function Uc(n,e,t){try{var a=n.stateNode;cy(a,n.type,t,e),a[B]=e}catch(i){Pn(n,n.return,i)}}function wh(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Za(n.type)||n.tag===4}function Hc(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||wh(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Za(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function qc(n,e,t,a){var i=n.tag;if(i===5||i===6)i=n.stateNode,e?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(i,e):(e=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.appendChild(i),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Vt)),Ns(n,a),Un=!0;else if(i!==4&&(i===27&&(Ns(n,a),a=null,Za(n.type)&&(t=n.stateNode,e=null)),n=n.child,n!==null))for(qc(n,e,t,a),n=n.sibling;n!==null;)qc(n,e,t,a),n=n.sibling}function ws(n,e,t,a){var i=n.tag;if(i===5||i===6)i=n.stateNode,e?t.insertBefore(i,e):t.appendChild(i),Ns(n,a),Un=!0;else if(i!==4&&(i===27&&(Ns(n,a),a=null,Za(n.type)&&(t=n.stateNode)),n=n.child,n!==null))for(ws(n,e,t,a),n=n.sibling;n!==null;)ws(n,e,t,a),n=n.sibling}function Eh(n){var e=n.stateNode,t=n.memoizedProps;try{for(var a=n.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Ve(e,a,t),e[ke]=n,e[B]=t}catch(l){Pn(n,n.return,l)}}var Es=!1,gt=null;function Oh(n){(n.tag===30||(n.subtreeFlags&33554432)!==0)&&(Es=!0)}var Xt=null;function Ah(){var n=Xt;return Xt=null,n}var lt=0;function Wi(n,e,t,a,i){return lt=0,kh(n.child,e,t,a,i)}function kh(n,e,t,a,i){for(var l=!1;n!==null;){if(n.tag===5){var s=n.stateNode;if(a!==null){var c=Su(s);a.push(c),c.view&&(l=!0)}else l||Su(s).view&&(l=!0);Es=!0,Ag(s,lt===0?e:e+"_"+lt,t),lt++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&i||kh(n.child,e,t,a,i)&&(l=!0));n=n.sibling}return l}function Jt(n,e){for(;n!==null;)n.tag===5?kg(n.stateNode,n.memoizedProps):(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&e||Jt(n.child,e)),n=n.sibling}function Os(n){if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if((n.tag!==22||n.memoizedState===null)&&(Os(n),n.tag===30&&(n.flags&18874368)!==0&&n.stateNode.paired)){var e=n.memoizedProps;if(e.name==null||e.name==="auto")throw Error(d(544));var t=e.name;e=ca(e.default,e.share),e!=="none"&&(Wi(n,t,e,null,!1)||Jt(n.child,!1))}n=n.sibling}}function Gc(n,e){if(n.tag===30){var t=n.stateNode,a=n.memoizedProps,i=oa(a,t),l=ca(a.default,t.paired?a.share:a.enter);l!=="none"?Wi(n,i,l,null,!1)?(Os(n),t.paired||e||lr(n,a.onEnter)):Jt(n.child,!1):Os(n)}else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)Gc(n,e),n=n.sibling;else Os(n)}function Yc(n){if(gt!==null&&gt.size!==0){var e=gt;if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if(n.tag!==22||n.memoizedState===null){if(n.tag===30&&(n.flags&18874368)!==0){var t=n.memoizedProps,a=t.name;if(a!=null&&a!=="auto"){var i=e.get(a);if(i!==void 0){var l=ca(t.default,t.share);if(l!=="none"&&(Wi(n,a,l,null,!1)?(l=n.stateNode,i.paired=l,l.paired=i,lr(n,t.onShare)):Jt(n.child,!1)),e.delete(a),e.size===0)break}}}Yc(n)}n=n.sibling}}}function Vc(n){if(n.tag===30){var e=n.memoizedProps,t=oa(e,n.stateNode),a=gt!==null?gt.get(t):void 0,i=ca(e.default,a!==void 0?e.share:e.exit);i!=="none"&&(Wi(n,t,i,null,!1)?a!==void 0?(i=n.stateNode,a.paired=i,i.paired=a,gt.delete(t),lr(n,e.onShare)):lr(n,e.onExit):Jt(n.child,!1)),gt!==null&&Yc(n)}else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)Vc(n),n=n.sibling;else gt!==null&&Yc(n)}function Mh(n){for(n=n.child;n!==null;){if(n.tag===30){var e=n.memoizedProps,t=oa(e,n.stateNode);e=ca(e.default,e.update),n.flags&=-5,e!=="none"&&Wi(n,t,e,n.memoizedState=[],!1)}else(n.subtreeFlags&33554432)!==0&&Mh(n);n=n.sibling}}function Ic(n){if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if(n.tag!==22||n.memoizedState===null){if(n.tag===30&&(n.flags&18874368)!==0){var e=n.stateNode;e.paired!==null&&(e.paired=null,Jt(n.child,!1))}Ic(n)}n=n.sibling}}function As(n){if(n.tag===30)n.stateNode.paired=null,Jt(n.child,!1),Ic(n);else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)As(n),n=n.sibling;else Ic(n)}function Rh(n){for(n=n.child;n!==null;)n.tag===30?Jt(n.child,!1):(n.subtreeFlags&33554432)!==0&&Rh(n),n=n.sibling}function Kc(n,e,t,a,i,l,s){for(var c=!1;e!==null;){if(e.tag===5){var f=e.stateNode;if(l!==null&&lt<l.length){var T=l[lt],E=Su(f);(T.view||E.view)&&(c=!0);var M;if(M=(n.flags&4)===0)if(E.clip)M=!0;else{M=T.rect;var x=E.rect;M=M.y!==x.y||M.x!==x.x||M.height!==x.height||M.width!==x.width}M&&(n.flags|=4),E.abs?E=!T.abs:(T=T.rect,E=E.rect,E=T.height!==E.height||T.width!==E.width),E&&(n.flags|=32)}else n.flags|=32;(n.flags&4)!==0&&Ag(f,lt===0?t:t+"_"+lt,i),c&&(n.flags&4)!==0||(Xt===null&&(Xt=[]),Xt.push(f,lt===0?a:a+"_"+lt,e.memoizedProps)),lt++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s?n.flags|=e.flags&32:Kc(n,e.child,t,a,i,l,s)&&(c=!0));e=e.sibling}return c}function Ch(n,e){for(n=n.child;n!==null;){if(n.tag===30){var t=n.memoizedProps,a=n.stateNode,i=oa(t,a),l=ca(t.default,t.update),s;s=n.memoizedState,n.memoizedState=null,a=n;var c=n.child;lt=0,i=Kc(a,c,i,i,l,s,!1),(n.flags&4)!==0&&i&&lr(n,t.onUpdate)}else(n.subtreeFlags&33554432)!==0&&Ch(n);n=n.sibling}}var De=!1,Xn=!1,Zt=!1,Qc=!1,Lh=typeof WeakSet=="function"?WeakSet:Set,ze=null,Ft=!1,rl=!1,ks=!1,Xc=!1;function U0(n,e,t){if(n=n.containerInfo,bu=mr,n=Bd(n),Co(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else n:{a=(a=n.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var l=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break n}var c=0,f=-1,T=-1,E=0,M=0,x=n,N=null;e:for(;;){for(var K;x!==a||l!==0&&x.nodeType!==3||(f=c+l),x!==s||i!==0&&x.nodeType!==3||(T=c+i),x.nodeType===3&&(c+=x.nodeValue.length),(K=x.firstChild)!==null;)N=x,x=K;for(;;){if(x===n)break e;if(N===a&&++E===l&&(f=c),N===s&&++M===i&&(T=c),(K=x.nextSibling)!==null)break;x=N,N=x.parentNode}x=K}a=f===-1||T===-1?null:{start:f,end:T}}else a=null}a=a||{start:0,end:0}}else a=null;for(yu={focusedElem:n,selectionRange:a},mr=!1,t=(t&335544064)===t,ze=e,e=t?9270:1024;ze!==null;){if(n=ze,t&&(a=n.deletions,a!==null))for(l=0;l<a.length;l++)t&&Vc(a[l]);if(n.alternate===null&&(n.flags&2)!==0)t&&Oh(n),Ms(t);else{if(n.tag===22){if(a=n.alternate,n.memoizedState!==null){a!==null&&a.memoizedState===null&&t&&Vc(a),Ms(t);continue}else if(a!==null&&a.memoizedState!==null){t&&Oh(n),Ms(t);continue}}a=n.child,(n.subtreeFlags&e)!==0&&a!==null?(a.return=n,ze=a):(t&&Mh(n),Ms(t))}}gt=null}function Ms(n){for(;ze!==null;){var e=ze,t=n,a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((i&1024)!==0&&a!==null){t=void 0,i=a.memoizedProps,a=a.memoizedState;var l=e.stateNode;try{var s=yi(e.type,i);t=l.getSnapshotBeforeUpdate(s,a),l.__reactInternalSnapshotBeforeUpdate=t}catch(c){Pn(e,e.return,c)}}break;case 3:if((i&1024)!==0){if(a=e.stateNode.containerInfo,t=a.nodeType,t===9)wu(a);else if(t===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":wu(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:t&&a!==null&&(t=oa(a.memoizedProps,a.stateNode),i=e.memoizedProps,i=ca(i.default,i.update),i!=="none"&&Wi(a,t,i,a.memoizedState=[],!0));break;default:if((i&1024)!==0)throw Error(d(163))}if(a=e.sibling,a!==null){a.return=e.return,ze=a;break}ze=e.return}}function Dh(n,e,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Pt(n,t),a&4&&al(5,t);break;case 1:if(Pt(n,t),a&4)if(n=t.stateNode,e===null)try{n.componentDidMount()}catch(s){Pn(t,t.return,s)}else{var i=yi(t.type,e.memoizedProps);e=e.memoizedState;try{n.componentDidUpdate(i,e,n.__reactInternalSnapshotBeforeUpdate)}catch(s){Pn(t,t.return,s)}}a&64&&Sh(t),a&512&&Qt(t,t.return);break;case 3:if(Pt(n,t),a&64&&(n=t.updateQueue,n!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{ff(n,e)}catch(s){Pn(t,t.return,s)}}break;case 27:e===null&&a&4&&Eh(t);case 26:case 5:Pt(n,t),e===null&&a&4&&Bc(t),a&512&&Qt(t,t.return);break;case 12:Pt(n,t);break;case 31:Pt(n,t),a&4&&Hh(n,t);break;case 13:Pt(n,t),a&4&&qh(n,t),a&64&&(n=t.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(t=F0.bind(null,t),My(n,t))));break;case 22:if(a=t.memoizedState!==null||De,!a){var l=e!==null&&e.memoizedState!==null||Xn;e=De,i=Xn,De=a,(Xn=l)&&!i?(a=2,(t.subtreeFlags&8772)!==0&&(a|=1),Bt(n,t,a)):Pt(n,t),De=e,Xn=i}break;case 30:Pt(n,t),a&512&&Qt(t,t.return);break;case 7:a&512&&Qt(t,t.return);default:Pt(n,t)}}function Jc(n,e){for(n=n.child;n!==null;)zh(n,e),n=n.sibling}function zh(n,e){switch(n.tag){case 5:case 26:try{var t=n.stateNode;if(e){var a=t.style;typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"}else{var i=n.stateNode,l=n.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null;i.style.display=s==null||typeof s=="boolean"?"":(""+s).trim()}}catch(f){Pn(n,n.return,f)}Zc(n,e);break;case 6:try{n.stateNode.nodeValue=e?"":n.memoizedProps,Un=!0}catch(f){Pn(n,n.return,f)}break;case 18:try{var c=n.stateNode;e?Og(c,!0):Og(n.stateNode,!1)}catch(f){Pn(n,n.return,f)}break;case 22:case 23:n.memoizedState===null&&Jc(n,e);break;default:Jc(n,e)}}function Zc(n,e){if(n.subtreeFlags&67108864)for(n=n.child;n!==null;){n:{var t=n,a=e;switch(t.tag){case 4:zh(t,a);break n;case 22:t.memoizedState===null&&Zc(t,a);break n;default:Zc(t,a)}}n=n.sibling}}function Bh(n){var e=n.alternate;e!==null&&(n.alternate=null,Bh(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&Re(e)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var ue=null,st=!1;function Dt(n,e,t){for(t=t.child;t!==null;)Uh(n,e,t),t=t.sibling}function Uh(n,e,t){if(Bn&&typeof Bn.onCommitFiberUnmount=="function")try{Bn.onCommitFiberUnmount(te,t)}catch{}switch(t.tag){case 26:Xn||Ye(t,e),Dt(n,e,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&!Xn&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Xn||Ye(t,e),il(t);var a=ue,i=st;Za(t.type)&&(ue=t.stateNode,st=!1),Dt(n,e,t),Yg(t.stateNode,t.type,t.memoizedProps),ue=a,st=i;break;case 5:Xn||Ye(t,e),il(t);case 6:if(t.tag===6&&il(t),a=ue,i=st,ue=null,Dt(n,e,t),ue=a,st=i,ue!==null)if(st)try{(ue.nodeType===9?ue.body:ue.nodeName==="HTML"?ue.ownerDocument.body:ue).removeChild(t.stateNode),Un=!0}catch(l){Pn(t,e,l)}else try{ue.removeChild(t.stateNode),Un=!0}catch(l){Pn(t,e,l)}break;case 18:ue!==null&&(st?(n=ue,Eg(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.stateNode),vr(n)):Eg(ue,t.stateNode));break;case 4:a=ue,i=st,ue=t.stateNode.containerInfo,st=!0,Dt(n,e,t),ue=a,st=i;break;case 0:case 11:case 14:case 15:Ya(2,t,e),Xn||Ya(4,t,e),Dt(n,e,t);break;case 1:Xn||(Ye(t,e),a=t.stateNode,typeof a.componentWillUnmount=="function"&&jh(t,e,a)),Dt(n,e,t);break;case 21:Dt(n,e,t);break;case 22:Xn=(a=Xn)||t.memoizedState!==null,Dt(n,e,t),Xn=a;break;case 30:Ye(t,e),Dt(n,e,t);break;case 7:Xn||Ye(t,e),Dt(n,e,t);break;default:Dt(n,e,t)}}function Hh(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{vr(n)}catch(t){Pn(e,e.return,t)}}}function qh(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{vr(n)}catch(t){Pn(e,e.return,t)}}function H0(n){switch(n.tag){case 31:case 13:case 19:var e=n.stateNode;return e===null&&(e=n.stateNode=new Lh),e;case 22:return n=n.stateNode,e=n._retryCache,e===null&&(e=n._retryCache=new Lh),e;default:throw Error(d(435,n.tag))}}function Rs(n,e){var t=H0(n);e.forEach(function(a){if(!t.has(a)){t.add(a);var i=P0.bind(null,n,a);a.then(i,i)}})}function Fe(n,e,t){var a=e.deletions;if(a!==null)for(var i=0;i<a.length;i++){var l=a[i],s=n,c=e,f=c;n:for(;f!==null;){switch(f.tag){case 27:if(Za(f.type)){ue=f.stateNode,st=!1;break n}break;case 5:ue=f.stateNode,st=!1;break n;case 3:case 4:ue=f.stateNode.containerInfo,st=!0;break n}f=f.return}if(ue===null)throw Error(d(160));Uh(s,c,l),ue=null,st=!1,s=l.alternate,s!==null&&(s.return=null),l.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Gh(e,n,t),e=e.sibling}var zt=null;function Gh(n,e,t){var a=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(i&4&&(a=n.updateQueue,a=a!==null?a.events:null,a!==null))for(var l=0;l<a.length;l++){var s=a[l];s.ref.impl=s.nextImpl}Fe(e,n,t),Pe(n),i&4&&(Ya(3,n,n.return),al(3,n),Ya(5,n,n.return));break;case 1:Fe(e,n,t),Pe(n),i&512&&(Xn||a===null||Ye(a,a.return)),i&64&&De&&(n=n.updateQueue,n!==null&&(e=n.callbacks,e!==null&&(t=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=t===null?e:t.concat(e))));break;case 26:if(l=zt,Fe(e,n,t),Pe(n),i&512&&(Xn||a===null||Ye(a,a.return)),i&4)if(i=a!==null?a.memoizedState:null,t=n.memoizedState,a===null)if(t===null)if(n.stateNode===null)if(De)n.stateNode=jg(n.type,n.memoizedProps,e.containerInfo,n);else{n:{e=n.type,t=n.memoizedProps,i=l.ownerDocument||l;e:switch(e){case"title":a=i.getElementsByTagName("title")[0],(!a||a[it]||a[ke]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=i.createElement(e),i.head.insertBefore(a,i.querySelector("head > title"))),Ve(a,e,t),a[ke]=n,Te(a),e=a;break n;case"link":if(l=Jg("link","href",i).get(e+(t.href||""))){for(s=0;s<l.length;s++)if(a=l[s],a.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&a.getAttribute("rel")===(t.rel==null?null:t.rel)&&a.getAttribute("title")===(t.title==null?null:t.title)&&a.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){l.splice(s,1);break e}}a=i.createElement(e),Ve(a,e,t),i.head.appendChild(a);break;case"meta":if(l=Jg("meta","content",i).get(e+(t.content||""))){for(s=0;s<l.length;s++)if(a=l[s],a.getAttribute("content")===(t.content==null?null:""+t.content)&&a.getAttribute("name")===(t.name==null?null:t.name)&&a.getAttribute("property")===(t.property==null?null:t.property)&&a.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&a.getAttribute("charset")===(t.charSet==null?null:t.charSet)){l.splice(s,1);break e}}a=i.createElement(e),Ve(a,e,t),i.head.appendChild(a);break;default:throw Error(d(468,e))}a[ke]=n,Te(a),e=a}n.stateNode=e}else De||Cu(l,n.type,n.stateNode);else n.stateNode=Xg(l,t,n.memoizedProps);else i!==t?(i===null?(e=a.stateNode,e===null||Xn||e.parentNode.removeChild(e)):i.count--,t===null?De||Cu(l,n.type,n.stateNode):Xg(l,t,n.memoizedProps)):t===null&&n.stateNode!==null&&Uc(n,n.memoizedProps,a.memoizedProps);break;case 27:Fe(e,n,t),Pe(n),i&512&&(Xn||a===null||Ye(a,a.return)),a!==null&&i&4&&Uc(n,n.memoizedProps,a.memoizedProps);break;case 5:if(l=Zt,Zt=!1,Fe(e,n,t),Zt=l,Pe(n),i&512&&(Xn||a===null||Ye(a,a.return)),n.flags&32){e=n.stateNode;try{Li(e,""),Un=!0}catch(E){Pn(n,n.return,E)}}i&4&&n.stateNode!=null&&(e=n.memoizedProps,Uc(n,e,a!==null?a.memoizedProps:e)),i&1024&&(Qc=!0);break;case 6:if(Fe(e,n,t),Pe(n),i&4){if(n.stateNode===null)throw Error(d(162));e=n.memoizedProps,t=n.stateNode;try{t.nodeValue=e,Un=!0}catch(E){Pn(n,n.return,E)}}break;case 3:if(Un=!1,Xs=null,l=zt,zt=gl(e.containerInfo),Fe(e,n,t),zt=l,Pe(n),i&4&&a!==null&&a.memoizedState.isDehydrated)try{vr(e.containerInfo)}catch(E){Pn(n,n.return,E)}Qc&&(Qc=!1,Yh(n)),Un=!1;break;case 4:i=Zt,Zt=De,a=Se(),l=zt,zt=gl(n.stateNode.containerInfo),Fe(e,n,t),Pe(n),zt=l,Un&&rl&&(ks=!0),Un=a,Zt=i;break;case 12:Fe(e,n,t),Pe(n);break;case 31:Fe(e,n,t),Pe(n),i&4&&(e=n.updateQueue,e!==null&&(n.updateQueue=null,Rs(n,e)));break;case 13:Fe(e,n,t),Pe(n),n.child.flags&8192&&n.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ds=Qe()),i&4&&(e=n.updateQueue,e!==null&&(n.updateQueue=null,Rs(n,e)));break;case 22:l=n.memoizedState!==null,s=a!==null&&a.memoizedState!==null;var c=De,f=Xn,T=Zt;De=c||l,Zt=T||l,Xn=f||s,Fe(e,n,t),Xn=f,Zt=T,De=c,Pe(n),i&8192&&(e=n.stateNode,e._visibility=l?e._visibility&-2:e._visibility|1,!l||a===null||s||De||Xn||(e=s||Xn,t=De,a=Xn,De=l||De,Xn=e,Va(n,2),De=t,Xn=a),!l&&Zt||Jc(n,l)),i&4&&(e=n.updateQueue,e!==null&&(t=e.retryQueue,t!==null&&(e.retryQueue=null,Rs(n,t))));break;case 19:Fe(e,n,t),Pe(n),i&4&&(e=n.updateQueue,e!==null&&(n.updateQueue=null,Rs(n,e)));break;case 30:i&512&&(Xn||a===null||Ye(a,a.return)),i=Se(),l=rl,s=(t&335544064)===t,c=n.memoizedProps,rl=s&&ca(c.default,c.update)!=="none",Fe(e,n,t),Pe(n),s&&a!==null&&Un&&(n.flags|=4),rl=l,Un=i;break;case 21:break;case 7:i&512&&(Xn||a===null||Ye(a,a.return)),a&&a.stateNode!==null&&(a.stateNode._fragmentFiber=n);default:Fe(e,n,t),Pe(n)}}function Pe(n){var e=n.flags;if(e&2){try{for(var t,a=n.return;a!==null;){if(wh(a)){t=a;break}a=a.return}a=null;for(var i=n.return;i!==null;){if(zc(i)){var l=i.stateNode;a===null?a=[l]:a.push(l)}if(Dc(i))break;i=i.return}var s=a;if(t==null)throw Error(d(160));switch(t.tag){case 27:var c=t.stateNode,f=Hc(n);ws(n,f,c,s);break;case 5:var T=t.stateNode;t.flags&32&&(Li(T,""),t.flags&=-33);var E=Hc(n);ws(n,E,T,s);break;case 3:case 4:var M=t.stateNode.containerInfo,x=Hc(n);qc(n,x,M,s);break;default:throw Error(d(161))}}catch(N){Pn(n,n.return,N)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Yh(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var e=n;Yh(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,mr=!0,e.reset(),mr=!1),n=n.sibling}}function $i(n,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)Vh(e,n),e=e.sibling;else Ch(e)}function Vh(n,e){var t=n.alternate;if(t===null)Gc(n,!1);else switch(n.tag){case 3:if(Xc=Ft=!1,Ah(),$i(e,n),!Ft&&!ks){if(n=Xt,n!==null)for(var a=0;a<n.length;a+=3){t=n[a];var i=n[a+1];kg(t,n[a+2]),t=t.ownerDocument.documentElement,t!==null&&t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+i+")"})}n=e.containerInfo,n=n.nodeType===9?n.documentElement:n.ownerDocument.documentElement,n!==null&&n.style.viewTransitionName===""&&(n.style.viewTransitionName="none",n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),n.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Xc=!0}Xt=null;break;case 5:$i(e,n);break;case 4:a=Ft,Ft=!1,$i(e,n),Ft&&(ks=!0),Ft=a;break;case 22:n.memoizedState===null&&(t.memoizedState!==null?Gc(n,!1):$i(e,n));break;case 30:a=Ft,i=Ah(),Ft=!1,$i(e,n),Ft&&(n.flags|=4);var l=n.memoizedProps,s=n.stateNode;e=oa(l,s),s=oa(t.memoizedProps,s);var c=ca(l.default,l.update);c==="none"?e=!1:(l=t.memoizedState,t.memoizedState=null,t=n.child,lt=0,e=Kc(n,t,e,s,c,l,!0),lt!==(l===null?0:l.length)&&(n.flags|=32)),(n.flags&4)!==0&&e?(lr(n,n.memoizedProps.onUpdate),Xt=i):i!==null&&(i.push.apply(i,Xt),Xt=i),Ft=(n.flags&32)!==0?!0:a;break;default:$i(e,n)}}function Pt(n,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Dh(n,e.alternate,e),e=e.sibling}function Va(n,e){for(n=n.child;n!==null;){var t=n,a=e;switch(t.tag){case 0:case 11:case 14:case 15:Ya(4,t,t.return),Va(t,a);break;case 1:Ye(t,t.return);var i=t.stateNode;typeof i.componentWillUnmount=="function"&&jh(t,t.return,i),Va(t,a);break;case 27:(a&2)!==0&&Yg(t.stateNode,t.type,t.memoizedProps);case 5:Ye(t,t.return),t.tag!==5&&t.tag!==27||il(t),Va(t,a);break;case 6:il(t);break;case 26:Ye(t,t.return),i=t.stateNode,t.memoizedState!==null||i===null||Xn||i.parentNode.removeChild(i),Va(t,a);break;case 22:t.memoizedState===null&&Va(t,a);break;case 30:Ye(t,t.return),Va(t,a);break;case 7:Ye(t,t.return);default:Va(t,a)}n=n.sibling}}function Bt(n,e,t){for(t=(e.subtreeFlags&8772)!==0?t:t&-2,e=e.child;e!==null;){var a=e.alternate,i=n,l=e,s=l.flags,c=(t&1)!==0;switch(l.tag){case 0:case 11:case 15:Bt(i,l,t),al(4,l);break;case 1:if(Bt(i,l,t),a=l,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(E){Pn(a,a.return,E)}if(a=l,i=a.updateQueue,i!==null){var f=a.stateNode;try{var T=i.shared.hiddenCallbacks;if(T!==null)for(i.shared.hiddenCallbacks=null,i=0;i<T.length;i++)df(T[i],f)}catch(E){Pn(a,a.return,E)}}c&&s&64&&Sh(l),Qt(l,l.return);break;case 27:(t&2)!==0&&Eh(l);case 5:l.tag!==5&&l.tag!==27||Nh(l),Bt(i,l,t),c&&a===null&&s&4&&Bc(l),Qt(l,l.return);break;case 6:Nh(l);break;case 26:f=l.stateNode,l.memoizedState!==null||f===null||De||Cu(gl(f.ownerDocument),l.type,f),Bt(i,l,t),c&&a===null&&s&4&&Bc(l),Qt(l,l.return);break;case 12:Bt(i,l,t);break;case 31:Bt(i,l,t),c&&s&4&&Hh(i,l);break;case 13:Bt(i,l,t),c&&s&4&&qh(i,l);break;case 22:l.memoizedState===null&&Bt(i,l,t),Qt(l,l.return);break;case 30:Bt(i,l,t),Qt(l,l.return);break;case 7:Qt(l,l.return);default:Bt(i,l,t)}e=e.sibling}}function Fc(n,e){var t=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==t&&(n!=null&&n.refCount++,t!=null&&Ir(t))}function Pc(n,e){n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&Ir(n))}function Ot(n,e,t,a){var i=(t&335544064)===t;if(e.subtreeFlags&(i?10262:10256))for(e=e.child;e!==null;)Ih(n,e,t,a),e=e.sibling;else i&&Rh(e)}function Ih(n,e,t,a){var i=(t&335544064)===t;i&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&As(e);var l=e.flags;switch(e.tag){case 0:case 11:case 15:Ot(n,e,t,a),l&2048&&al(9,e);break;case 1:Ot(n,e,t,a);break;case 3:Ot(n,e,t,a),i&&Xc&&(n=n.containerInfo,n=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,n.style.viewTransitionName==="root"&&(n.style.viewTransitionName=""),n=n.ownerDocument.documentElement,n!==null&&n.style.viewTransitionName==="none"&&(n.style.viewTransitionName="")),l&2048&&(l=null,e.alternate!==null&&(l=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==l&&(e.refCount++,l!=null&&Ir(l)));break;case 12:if(l&2048){Ot(n,e,t,a),l=e.stateNode;try{var s=e.memoizedProps,c=s.id,f=s.onPostCommit;typeof f=="function"&&f(c,e.alternate===null?"mount":"update",l.passiveEffectDuration,-0)}catch(T){Pn(e,e.return,T)}}else Ot(n,e,t,a);break;case 31:Ot(n,e,t,a);break;case 13:Ot(n,e,t,a);break;case 23:break;case 22:s=e.stateNode,c=e.alternate,e.memoizedState!==null?(i&&c!==null&&c.memoizedState===null&&As(c),s._visibility&2?Ot(n,e,t,a):ll(n,e)):(i&&c!==null&&c.memoizedState!==null&&As(e),s._visibility&2?Ot(n,e,t,a):(s._visibility|=2,nr(n,e,t,a,(e.subtreeFlags&10256)!==0||!1))),l&2048&&Fc(c,e);break;case 24:Ot(n,e,t,a),l&2048&&Pc(e.alternate,e);break;case 30:i&&(l=e.alternate,l!==null&&(Jt(l.child,!0),Jt(e.child,!0))),Ot(n,e,t,a);break;default:Ot(n,e,t,a)}}function nr(n,e,t,a,i){for(i=i&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var l=n,s=e,c=t,f=a,T=s.flags;switch(s.tag){case 0:case 11:case 15:nr(l,s,c,f,i),al(8,s);break;case 23:break;case 22:var E=s.stateNode;s.memoizedState!==null?E._visibility&2?nr(l,s,c,f,i):ll(l,s):(E._visibility|=2,nr(l,s,c,f,i)),i&&T&2048&&Fc(s.alternate,s);break;case 24:nr(l,s,c,f,i),i&&T&2048&&Pc(s.alternate,s);break;default:nr(l,s,c,f,i)}e=e.sibling}}function ll(n,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var t=n,a=e,i=a.flags;switch(a.tag){case 22:ll(t,a),i&2048&&Fc(a.alternate,a);break;case 24:ll(t,a),i&2048&&Pc(a.alternate,a);break;default:ll(t,a)}e=e.sibling}}var xi=8192;function _i(n,e,t){if(n.subtreeFlags&xi)for(n=n.child;n!==null;)Kh(n,e,t),n=n.sibling}function Kh(n,e,t){switch(n.tag){case 26:_i(n,e,t),n.flags&xi&&(n.memoizedState!==null?Ky(t,zt,n.memoizedState,n.memoizedProps):(n=n.stateNode,(e&335544128)===e&&Wg(t,n)));break;case 5:_i(n,e,t),n.flags&xi&&(n=n.stateNode,(e&335544128)===e&&Wg(t,n));break;case 3:case 4:var a=zt;zt=gl(n.stateNode.containerInfo),_i(n,e,t),zt=a;break;case 22:n.memoizedState===null&&(a=n.alternate,a!==null&&a.memoizedState!==null?(a=xi,xi=16777216,_i(n,e,t),xi=a):_i(n,e,t));break;case 30:if((n.flags&xi)!==0&&(a=n.memoizedProps.name,a!=null&&a!=="auto")){var i=n.stateNode;i.paired=null,gt===null&&(gt=new Map),gt.set(a,i)}_i(n,e,t);break;default:_i(n,e,t)}}function Qh(n){var e=n.alternate;if(e!==null&&(n=e.child,n!==null)){e.child=null;do e=n.sibling,n.sibling=null,n=e;while(n!==null)}}function sl(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var a=e[t];ze=a,Jh(a,n)}Qh(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Xh(n),n=n.sibling}function Xh(n){switch(n.tag){case 0:case 11:case 15:sl(n),n.flags&2048&&Ya(9,n,n.return);break;case 3:sl(n);break;case 12:sl(n);break;case 22:var e=n.stateNode;n.memoizedState!==null&&e._visibility&2&&(n.return===null||n.return.tag!==13)?(e._visibility&=-3,Cs(n)):sl(n);break;default:sl(n)}}function Cs(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var a=e[t];ze=a,Jh(a,n)}Qh(n)}for(n=n.child;n!==null;){switch(e=n,e.tag){case 0:case 11:case 15:Ya(8,e,e.return),Cs(e);break;case 22:t=e.stateNode,t._visibility&2&&(t._visibility&=-3,Cs(e));break;default:Cs(e)}n=n.sibling}}function Jh(n,e){for(;ze!==null;){var t=ze;switch(t.tag){case 0:case 11:case 15:Ya(8,t,e);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ir(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,ze=a;else n:for(t=n;ze!==null;){a=ze;var i=a.sibling,l=a.return;if(Bh(a),a===t){ze=null;break n}if(i!==null){i.return=l,ze=i;break n}ze=l}}}var q0={getCacheForType:function(n){var e=He(je),t=e.data.get(n);return t===void 0&&(t=n(),e.data.set(n,t)),t},cacheSignal:function(){return He(je).controller.signal}},G0=typeof WeakMap=="function"?WeakMap:Map,Vn=0,ae=null,Cn=null,Dn=0,Fn=0,pt=null,Ia=!1,er=!1,Wc=!1,ba=0,pe=0,Ka=0,Ti=0,Ls=0,mt=0,tr=0,ol=null,ot=null,$c=!1,Ds=0,Zh=0,zs=1/0,Bs=null,Qa=null,fe=0,Ut=null,Si=null,Wt=0,nu=0,eu=null,Fh=null,ar=null,ir=null,rr=null,cl=0,Us=null;function vt(){return(Vn&2)!==0&&Dn!==0?Dn&-Dn:tn.T!==null?du():Rl()}function Ph(){if(mt===0)if((Dn&536870912)===0||An){var n=ja;ja<<=1,(ja&3932160)===0&&(ja=262144),mt=n}else mt=536870912;return n=qe.current,n!==null&&(n.flags|=32),mt}function lr(n,e){if(e!=null){var t=n.stateNode,a=t.ref;a===null&&(a=t.ref=Mg(oa(n.memoizedProps,t))),ir===null&&(ir=[]),ir.push(e.bind(null,a))}}function ct(n,e,t){(n===ae&&(Fn===2||Fn===9)||n.cancelPendingCommit!==null)&&(sr(n,0),Xa(n,Dn,mt,!1)),ii(n,t),((Vn&2)===0||n!==ae)&&(n===ae&&((Vn&2)===0&&(Ti|=t),pe===4&&Xa(n,Dn,mt,!1)),$t(n))}function Wh(n,e,t){if((Vn&6)!==0)throw Error(d(327));var a=!t&&(e&127)===0&&(e&n.expiredLanes)===0||ai(n,e),i=a?I0(n,e):au(n,e,!0),l=a;do{if(i===0){er&&!a&&Xa(n,e,0,!1);break}else{if(t=n.current.alternate,l&&!Y0(t)){i=au(n,e,!1),l=!1;continue}if(i===2){if(l=e,n.errorRecoveryDisabledLanes&l)var s=0;else s=n.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;n:{var c=n;i=ol;var f=c.current.memoizedState.isDehydrated;if(f&&(sr(c,s).flags|=256),s=au(c,s,!1),s!==2&&s!==6){if(Wc&&!f){c.errorRecoveryDisabledLanes|=l,Ti|=l,i=4;break n}l=ot,ot=i,l!==null&&(ot===null?ot=l:ot.push.apply(ot,l))}i=s}if(l=!1,i!==2)continue}}if(i===1){sr(n,0),Xa(n,e,0,!0);break}n:{switch(a=n,l=i,l){case 0:case 1:throw Error(d(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:Xa(a,e,mt,!Ia);break n;case 2:ot=null;break;case 3:case 5:break;default:throw Error(d(329))}if((e&62914560)===e&&(i=Ds+300-Qe(),10<i)){if(Xa(a,e,mt,!Ia),wa(a,0,!0)!==0)break n;Wt=e,a.timeoutHandle=Tu($h.bind(null,a,t,ot,Bs,$c,e,mt,Ti,tr,Ia,l,"Throttled",-0,0),i);break n}$h(a,t,ot,Bs,$c,e,mt,Ti,tr,Ia,l,null,-0,0)}}break}while(!0);$t(n)}function $h(n,e,t,a,i,l,s,c,f,T,E,M,x,N){n.timeoutHandle=-1;var K=e.subtreeFlags,an=(l&335544064)===l;if(M=null,(an||K&8192||(K&16785408)===16785408)&&(M={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Vt},gt=null,Kh(e,l,M),an&&(K=M,an=n.containerInfo,an=(an.nodeType===9?an:an.ownerDocument).__reactViewTransition,an!=null&&(K.count++,K.waitingForViewTransition=!0,K=vl.bind(K),an.finished.then(K,K))),K=(l&62914560)===l?Ds-Qe():(l&4194048)===l?Zh-Qe():0,K=Qy(M,K),K!==null)){Wt=l,n.cancelPendingCommit=K(sg.bind(null,n,e,l,t,a,i,s,c,f,T,E,M,null,x,N)),Xa(n,l,s,!T);return}sg(n,e,l,t,a,i,s,c,f,T,E,M)}function Y0(n){for(var e=n;;){var t=e.tag;if((t===0||t===11||t===15)&&e.flags&16384&&(t=e.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var i=t[a],l=i.getSnapshot;i=i.value;try{if(!ft(l(),i))return!1}catch{return!1}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xa(n,e,t,a){e=kl(n,e),e&=~Ls,e&=~Ti,n.suspendedLanes|=e,n.pingedLanes&=~e,a&&(n.warmLanes|=e),a=n.expirationTimes;for(var i=e;0<i;){var l=31-I(i),s=1<<l;a[l]=-1,i&=~s}t!==0&&Ml(n,t,e)}function Hs(){return(Vn&6)===0?(ul(0),!1):!0}function tu(){if(Cn!==null){if(Fn===0)var n=Cn.return;else n=Cn,fa=ui=null,uc(n),Xi=null,Xr=0,n=Cn;for(;n!==null;)Th(n.alternate,n),n=n.return;Cn=null}}function sr(n,e){var t=n.timeoutHandle;return t!==-1&&(n.timeoutHandle=-1,fy(t)),t=n.cancelPendingCommit,t!==null&&(n.cancelPendingCommit=null,t()),Wt=0,tu(),ae=n,Cn=t=ua(n.current,null),Dn=e,Fn=0,pt=null,Ia=!1,er=ai(n,e),Wc=!1,tr=mt=Ls=Ti=Ka=pe=0,ot=ol=null,$c=!1,ba=kl(n,e),Xl(),t}function ng(n,e){Nn=null,tn.H=bs,e===Qi||e===is?(e=sf(),Fn=3):e===Po?(e=sf(),Fn=4):Fn=e===Nc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,pt=e,Cn===null&&(pe=1,ys(n,jt(e,n.current)))}function eg(){var n=qe.current;return n===null?!0:(Dn&4194048)===Dn?Xe===null:(Dn&62914560)===Dn||(Dn&536870912)!==0?n===Xe:!1}function tg(){var n=tn.H;return tn.H=bs,n===null?bs:n}function ag(){var n=tn.A;return tn.A=q0,n}function qs(){pe=4,Ia||(Dn&4194048)!==Dn&&qe.current!==null||(er=!0),(Ka&134217727)===0&&(Ti&134217727)===0||ae===null||Xa(ae,Dn,mt,!1)}function au(n,e,t){var a=Vn;Vn|=2;var i=tg(),l=ag();(ae!==n||Dn!==e)&&(Bs=null,sr(n,e)),e=!1;var s=pe;n:do try{if(Fn!==0&&Cn!==null){var c=Cn,f=pt;switch(Fn){case 8:tu(),s=6;break n;case 3:case 2:case 9:case 6:qe.current===null&&(e=!0);var T=Fn;if(Fn=0,pt=null,or(n,c,f,T),t&&er){s=0;break n}break;default:T=Fn,Fn=0,pt=null,or(n,c,f,T)}}V0(),s=pe;break}catch(E){ng(n,E)}while(!0);return e&&n.shellSuspendCounter++,fa=ui=null,Vn=a,tn.H=i,tn.A=l,Cn===null&&(ae=null,Dn=0,Xl()),s}function V0(){for(;Cn!==null;)ig(Cn)}function I0(n,e){var t=Vn;Vn|=2;var a=tg(),i=ag();ae!==n||Dn!==e?(Bs=null,zs=Qe()+500,sr(n,e)):er=ai(n,e);n:do try{if(Fn!==0&&Cn!==null){e=Cn;var l=pt;e:switch(Fn){case 1:Fn=0,pt=null,or(n,e,l,1);break;case 2:case 9:if(rf(l)){Fn=0,pt=null,rg(e);break}e=function(){Fn!==2&&Fn!==9||ae!==n||(Fn=7),$t(n)},l.then(e,e);break n;case 3:Fn=7;break n;case 4:Fn=5;break n;case 7:rf(l)?(Fn=0,pt=null,rg(e)):(Fn=0,pt=null,or(n,e,l,7));break;case 5:var s=null;switch(Cn.tag){case 26:s=Cn.memoizedState;case 5:case 27:var c=Cn;if(s?Fg(s):c.stateNode.complete){Fn=0,pt=null;var f=c.sibling;if(f!==null)Cn=f;else{var T=c.return;T!==null?(Cn=T,Gs(T)):Cn=null}break e}}Fn=0,pt=null,or(n,e,l,5);break;case 6:Fn=0,pt=null,or(n,e,l,6);break;case 8:tu(),pe=6;break n;default:throw Error(d(462))}}K0();break}catch(E){ng(n,E)}while(!0);return fa=ui=null,tn.H=a,tn.A=i,Vn=t,Cn!==null?0:(ae=null,Dn=0,Xl(),pe)}function K0(){for(;Cn!==null&&!mo();)ig(Cn)}function ig(n){var e=xh(n.alternate,n,ba);n.memoizedProps=n.pendingProps,e===null?Gs(n):Cn=e}function rg(n){var e=n,t=e.alternate;switch(e.tag){case 15:case 0:e=hh(t,e,e.pendingProps,e.type,void 0,Dn);break;case 11:e=hh(t,e,e.pendingProps,e.type.render,e.ref,Dn);break;case 5:uc(e);var a=e;a===Le&&(An?($l(a),a.tag===5&&a.stateNode!=null&&(re=a.stateNode)):($l(a),An=!0));default:Th(t,e),e=Cn=Xd(e,ba),e=xh(t,e,ba)}n.memoizedProps=n.pendingProps,e===null?Gs(n):Cn=e}function or(n,e,t,a){fa=ui=null,uc(e),Xi=null,Xr=0;var i=e.return;try{if(R0(n,i,e,t,Dn)){pe=1,ys(n,jt(t,n.current)),Cn=null;return}}catch(l){if(i!==null)throw Cn=i,l;pe=1,ys(n,jt(t,n.current)),Cn=null;return}e.flags&32768?(An||a===1?n=!0:er||(Dn&536870912)!==0?n=!1:(Ia=n=!0,(a===2||a===9||a===3||a===6)&&(a=qe.current,a!==null&&a.tag===13&&(a.flags|=16384))),lg(e,n)):Gs(e)}function Gs(n){var e=n;do{if((e.flags&32768)!==0){lg(e,Ia);return}n=e.return;var t=z0(e.alternate,e,ba);if(t!==null){Cn=t;return}if(e=e.sibling,e!==null){Cn=e;return}Cn=e=n}while(e!==null);pe===0&&(pe=5)}function lg(n,e){do{var t=B0(n.alternate,n);if(t!==null){t.flags&=32767,Cn=t;return}if(t=n.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!e&&(n=n.sibling,n!==null)){Cn=n;return}Cn=n=t}while(n!==null);pe=6,Cn=null}function sg(n,e,t,a,i,l,s,c,f,T,E,M){n.cancelPendingCommit=null;do Ys();while(fe!==0);if((Vn&6)!==0)throw Error(d(327));if(e!==null){if(e===n.current)throw Error(d(177));n===ae&&(Cn=ae=null,Dn=0),Si=e,Ut=n,Wt=t,eu=i,Fh=a,Q0(n,e,t,s,c,f,M)}}function Q0(n,e,t,a,i,l,s){var c=e.lanes|e.childLanes;if(nu=c,c|=Uo,bo(n,t,c,a,i,l),ir=null,(t&335544064)===t?(rr=x0(n),a=10262):(rr=null,a=10256),(e.subtreeFlags&a)!==0||(e.flags&a)!==0?(n.callbackNode=null,n.callbackPriority=0,W0(Rt,function(){return su(),null})):(n.callbackNode=null,n.callbackPriority=0),Es=!1,a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=tn.T,tn.T=null,i=dn.p,dn.p=2,l=Vn,Vn|=4;try{U0(n,e,t)}finally{Vn=l,dn.p=i,tn.T=a}}fe=1,Es?ar=by(s,n.containerInfo,rr,iu,ru,J0,lu,su,X0):(iu(),ru(),lu())}function X0(n){if(fe!==0){var e=Ut.onRecoverableError;e(n,{componentStack:null})}}function J0(){fe===3&&(fe=0,Vh(Si,Ut),fe=4)}function iu(){if(fe===1){fe=0;var n=Ut,e=Si,t=Wt,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=tn.T,tn.T=null;var i=dn.p;dn.p=2;var l=Vn;Vn|=4;try{rl=ks=!1,Gh(e,n,t),t=yu;var s=Bd(n.containerInfo),c=t.focusedElem,f=t.selectionRange;if(s!==c&&c&&c.ownerDocument&&zd(c.ownerDocument.documentElement,c)){if(f!==null&&Co(c)){var T=f.start,E=f.end;if(E===void 0&&(E=T),"selectionStart"in c)c.selectionStart=T,c.selectionEnd=Math.min(E,c.value.length);else{var M=c.ownerDocument||document,x=M&&M.defaultView||window;if(x.getSelection){var N=x.getSelection(),K=c.textContent.length,an=Math.min(f.start,K),wn=f.end===void 0?an:Math.min(f.end,K);!N.extend&&an>wn&&(s=wn,wn=an,an=s);var _=Dd(c,an),v=Dd(c,wn);if(_&&v&&(N.rangeCount!==1||N.anchorNode!==_.node||N.anchorOffset!==_.offset||N.focusNode!==v.node||N.focusOffset!==v.offset)){var j=M.createRange();j.setStart(_.node,_.offset),N.removeAllRanges(),an>wn?(N.addRange(j),N.extend(v.node,v.offset)):(j.setEnd(v.node,v.offset),N.addRange(j))}}}}for(M=[],N=c;N=N.parentNode;)N.nodeType===1&&M.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<M.length;c++){var A=M[c];A.element.scrollLeft=A.left,A.element.scrollTop=A.top}}mr=!!bu,yu=bu=null}finally{Vn=l,dn.p=i,tn.T=a}}n.current=e,fe=2}}function ru(){if(fe===2){fe=0;var n=Ut,e=Si,t=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||t){t=tn.T,tn.T=null;var a=dn.p;dn.p=2;var i=Vn;Vn|=4;try{Dh(n,e.alternate,e)}finally{Vn=i,dn.p=a,tn.T=t}}fe=3}}function lu(){if(fe===4||fe===3){fe=0;var n=ar;ar=null,Er();var e=Ut,t=Si,a=Wt,i=Fh,l=(a&335544064)===a?10262:10256;if((t.subtreeFlags&l)!==0||(t.flags&l)!==0?fe=5:(fe=0,Si=Ut=null,og(e,e.pendingLanes)),l=e.pendingLanes,l===0&&(Qa=null),Mr(a),t=t.stateNode,Bn&&typeof Bn.onCommitFiberRoot=="function")try{Bn.onCommitFiberRoot(te,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=tn.T,l=dn.p,dn.p=2,tn.T=null;try{for(var s=e.onRecoverableError,c=0;c<i.length;c++){var f=i[c];s(f.value,{componentStack:f.stack})}}finally{tn.T=t,dn.p=l}}if(i=ir,s=rr,rr=null,i!==null&&(ir=null,s===null&&(s=[]),n!==null))for(f=0;f<i.length;f++)t=(0,i[f])(s),t!==void 0&&n.finished.finally(t);(Wt&3)!==0&&Ys(),$t(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===Us?cl++:(cl=0,Us=e):(cl=0,Us=null),ul(0)}}function og(n,e){(n.pooledCacheLanes&=e)===0&&(e=n.pooledCache,e!=null&&(n.pooledCache=null,Ir(e)))}function Ys(){return ar!==null&&(ar.skipTransition(),ar=null),iu(),ru(),lu(),su()}function su(){if(fe!==5)return!1;var n=Ut,e=nu;nu=0;var t=Mr(Wt),a=tn.T,i=dn.p;try{dn.p=32>t?32:t,tn.T=null,t=eu,eu=null;var l=Ut,s=Wt;if(fe=0,Si=Ut=null,Wt=0,(Vn&6)!==0)throw Error(d(331));var c=Vn;if(Vn|=4,Xh(l.current),Ih(l,l.current,s,t),Vn=c,ul(0,!1),Bn&&typeof Bn.onPostCommitFiberRoot=="function")try{Bn.onPostCommitFiberRoot(te,l)}catch{}return!0}finally{dn.p=i,tn.T=a,og(n,e)}}function cg(n,e,t){e=jt(t,e),e=jc(n.stateNode,e,2),n=Ua(n,e,2),n!==null&&(ii(n,2),$t(n))}function Pn(n,e,t){if(n.tag===3)cg(n,n,t);else for(;e!==null;){if(e.tag===3){cg(e,n,t);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Qa===null||!Qa.has(a))){n=jt(t,n),t=rh(2),a=Ua(e,t,2),a!==null&&(lh(t,a,e,n),ii(a,2),$t(a));break}}e=e.return}}function ou(n,e,t){var a=n.pingCache;if(a===null){a=n.pingCache=new G0;var i=new Set;a.set(e,i)}else i=a.get(e),i===void 0&&(i=new Set,a.set(e,i));i.has(t)||(Wc=!0,i.add(t),n=Z0.bind(null,n,e,t),e.then(n,n))}function Z0(n,e,t){var a=n.pingCache;a!==null&&a.delete(e),n.pingedLanes|=n.suspendedLanes&t,n.warmLanes&=~t,ae===n&&(Dn&t)===t&&((pe===4||pe===3&&(Dn&62914560)===Dn&&300>Qe()-Ds)&&(Vn&2)===0?sr(n,0):Ls|=t,tr===Dn&&(tr=0)),$t(n)}function ug(n,e){e===0&&(e=Ar()),n=si(n,e),n!==null&&(ii(n,e),$t(n))}function F0(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),ug(n,t)}function P0(n,e){var t=0;switch(n.tag){case 31:case 13:var a=n.stateNode,i=n.memoizedState;i!==null&&(t=i.retryLane);break;case 19:a=n.stateNode;break;case 22:a=n.stateNode._retryCache;break;default:throw Error(d(314))}a!==null&&a.delete(e),ug(n,t)}function W0(n,e){return Nr(n,e)}var cr=null,ur=null,cu=!1,Vs=!1,uu=!1,Ja=0;function $t(n){n!==ur&&n.next===null&&(ur===null?cr=ur=n:ur=ur.next=n),Vs=!0,cu||(cu=!0,ny())}function ul(n,e){if(!uu&&Vs){uu=!0;do for(var t=!1,a=cr;a!==null;){if(n!==0){var i=a.pendingLanes;if(i===0)var l=0;else{var s=a.suspendedLanes,c=a.pingedLanes;l=(1<<31-I(42|n)+1)-1,l&=i&~(s&~c),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(t=!0,gg(a,l))}else l=Dn,l=wa(a,a===ae?l:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(l&3)===0||ai(a,l)||(t=!0,gg(a,l));a=a.next}while(t);uu=!1}}function $0(){dg()}function dg(){Vs=cu=!1;var n=0;Ja!==0&&dy()&&(n=Ja);for(var e=Qe(),t=null,a=cr;a!==null;){var i=a.next,l=fg(a,e);l===0?(a.next=null,t===null?cr=i:t.next=i,i===null&&(ur=t)):(t=a,(n!==0||(l&3)!==0)&&(Vs=!0)),a=i}fe!==0&&fe!==5||ul(n),Ja!==0&&(Ja=0)}function fg(n,e){for(var t=n.suspendedLanes,a=n.pingedLanes,i=n.expirationTimes,l=n.pendingLanes&-62914561;0<l;){var s=31-I(l),c=1<<s,f=i[s];f===-1?((c&t)===0||(c&a)!==0)&&(i[s]=vo(c,e)):f<=e&&(n.expiredLanes|=c),l&=~c}if(e=ae,t=Dn,t=wa(n,n===e?t:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),a=n.callbackNode,t===0||n===e&&(Fn===2||Fn===9)||n.cancelPendingCommit!==null)return a!==null&&a!==null&&wr(a),n.callbackNode=null,n.callbackPriority=0;if((t&3)===0||ai(n,t)){if(e=t&-t,e===n.callbackPriority)return e;switch(a!==null&&wr(a),Mr(t)){case 2:case 8:t=Or;break;case 32:t=Rt;break;case 268435456:t=C;break;default:t=Rt}return a=hg.bind(null,n),t=Nr(t,a),n.callbackPriority=e,n.callbackNode=t,e}return a!==null&&a!==null&&wr(a),n.callbackPriority=2,n.callbackNode=null,2}function hg(n,e){if(fe!==0&&fe!==5)return n.callbackNode=null,n.callbackPriority=0,null;var t=n.callbackNode;if(Ys()&&n.callbackNode!==t)return null;var a=Dn;return a=wa(n,n===ae?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),a===0?null:(Wh(n,a,e),fg(n,Qe()),n.callbackNode!=null&&n.callbackNode===t?hg.bind(null,n):null)}function gg(n,e){if(Ys())return null;Wh(n,e,!0)}function ny(){hy(function(){(Vn&6)!==0?Nr(Al,$0):dg()})}function du(){if(Ja===0){var n=hi;n===0&&(n=Yt,Yt<<=1,(Yt&261888)===0&&(Yt=256)),Ja=n}return Ja}function pg(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Hl(n)}function ey(n,e,t,a,i){if(e==="submit"&&t&&t.stateNode===i){var l=pg((i[B]||null).action),s=a.submitter;s&&(e=(e=s[B]||null)?pg(e.formAction):s.getAttribute("formAction"),e!==null&&(l=e,s=null));var c=new Vl("action","action",null,a,i);n.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Ja!==0){var f=new FormData(i,s);yc(t,{pending:!0,data:f,method:i.method,action:l},null,f)}}else typeof l=="function"&&(c.preventDefault(),f=new FormData(i,s),yc(t,{pending:!0,data:f,method:i.method,action:l},l,f))},currentTarget:i}]})}}for(var fu=0;fu<Bo.length;fu++){var hu=Bo[fu],ty=hu.toLowerCase(),ay=hu[0].toUpperCase()+hu.slice(1);Lt(ty,"on"+ay)}Lt(qd,"onAnimationEnd"),Lt(Gd,"onAnimationIteration"),Lt(Yd,"onAnimationStart"),Lt("dblclick","onDoubleClick"),Lt("focusin","onFocus"),Lt("focusout","onBlur"),Lt(f0,"onTransitionRun"),Lt(h0,"onTransitionStart"),Lt(g0,"onTransitionCancel"),Lt(Vd,"onTransitionEnd"),ra("onMouseEnter",["mouseout","mouseover"]),ra("onMouseLeave",["mouseout","mouseover"]),ra("onPointerEnter",["pointerout","pointerover"]),ra("onPointerLeave",["pointerout","pointerover"]),_t("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),_t("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),_t("onBeforeInput",["compositionend","keypress","textInput","paste"]),_t("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),_t("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),_t("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(dl));function mg(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var a=n[t],i=a.event;a=a.listeners;n:{var l=void 0;if(e)for(var s=a.length-1;0<=s;s--){var c=a[s],f=c.instance,T=c.currentTarget;if(c=c.listener,f!==l&&i.isPropagationStopped())break n;l=c,i.currentTarget=T;try{l(i)}catch(E){Ql(E)}i.currentTarget=null,l=f}else for(s=0;s<a.length;s++){if(c=a[s],f=c.instance,T=c.currentTarget,c=c.listener,f!==l&&i.isPropagationStopped())break n;l=c,i.currentTarget=T;try{l(i)}catch(E){Ql(E)}i.currentTarget=null,l=f}}}}function Ln(n,e){var t=e[Mn];t===void 0&&(t=e[Mn]=new Set);var a=n+"__bubble";t.has(a)||(vg(e,n,2,!1),t.add(a))}function gu(n,e,t){var a=0;e&&(a|=4),vg(t,n,a,e)}var Is="_reactListening"+Math.random().toString(36).slice(2);function pu(n){if(!n[Is]){n[Is]=!0,Dl.forEach(function(t){t!=="selectionchange"&&(iy.has(t)||gu(t,!1,n),gu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Is]||(e[Is]=!0,gu("selectionchange",!1,e))}}function vg(n,e,t,a){switch(lp(e)){case 2:var i=Fy;break;case 8:i=Py;break;default:i=Du}t=i.bind(null,e,t,n),i=void 0,!So||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),a?i!==void 0?n.addEventListener(e,t,{capture:!0,passive:i}):n.addEventListener(e,t,!0):i!==void 0?n.addEventListener(e,t,{passive:i}):n.addEventListener(e,t,!1)}function mu(n,e,t,a,i){var l=a;if((e&1)===0&&(e&2)===0&&a!==null)n:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var c=a.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=a.return;s!==null;){var f=s.tag;if((f===3||f===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Ce(c),s===null)return;if(f=s.tag,f===5||f===6||f===26||f===27){a=l=s;continue n}c=c.parentNode}}a=a.return}md(function(){var T=l,E=_o(t),M=[];n:{var x=Id.get(n);if(x!==void 0){var N=Vl,K=n;switch(n){case"keypress":if(Gl(t)===0)break n;case"keydown":case"keyup":N=Yb;break;case"focusin":K="focus",N=Eo;break;case"focusout":K="blur",N=Eo;break;case"beforeblur":case"afterblur":N=Eo;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=kb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=Xb;break;case qd:case Gd:case Yd:N=Cb;break;case Vd:N=Zb;break;case"scroll":case"scrollend":N=Ob;break;case"wheel":N=Pb;break;case"copy":case"cut":case"paste":N=Db;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=_d;break;case"submit":N=Kb;break;case"toggle":case"beforetoggle":N=$b}var an=(e&4)!==0,wn=!an&&(n==="scroll"||n==="scrollend"),_=an?x!==null?x+"Capture":null:x;an=[];for(var v=T,j;v!==null;){var A=v;if(j=A.stateNode,A=A.tag,A!==5&&A!==26&&A!==27||j===null||_===null||(A=Cr(v,_),A!=null&&an.push(fl(v,A,j))),wn)break;v=v.return}0<an.length&&(x=new N(x,K,null,t,E),M.push({event:x,listeners:an}))}}if((e&7)===0){n:{if(N=n==="mouseover"||n==="pointerover",x=n==="mouseout"||n==="pointerout",N&&t!==xo&&(K=t.relatedTarget||t.fromElement)&&(Ce(K)||K[rn]))break n;(x||N)&&(K=E.window===E?E:(N=E.ownerDocument)?N.defaultView||N.parentWindow:window,x?(N=t.relatedTarget||t.toElement,x=T,N=N?Ce(N):null,N!==null&&(wn=R(N),an=N.tag,N!==wn||an!==5&&an!==27&&an!==6)&&(N=null)):(x=null,N=T),x!==N&&(an=yd,A="onMouseLeave",_="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(an=_d,A="onPointerLeave",_="onPointerEnter",v="pointer"),wn=x==null?K:Oa(x),j=N==null?K:Oa(N),K=new an(A,v+"leave",x,t,E),K.target=wn,K.relatedTarget=j,A=null,Ce(E)===T&&(an=new an(_,v+"enter",N,t,E),an.target=j,an.relatedTarget=wn,A=an),wn=A,an=x&&N?vn(x,N,ry):null,x!==null&&bg(M,K,x,an,!1),N!==null&&wn!==null&&bg(M,wn,N,an,!0)))}n:{if(x=T?Oa(T):window,N=x.nodeName&&x.nodeName.toLowerCase(),N==="select"||N==="input"&&x.type==="file")var nn=Ad;else if(Ed(x))if(kd)nn=c0;else{nn=s0;var zn=l0}else N=x.nodeName,!N||N.toLowerCase()!=="input"||x.type!=="checkbox"&&x.type!=="radio"?T&&yo(T.elementType)&&(nn=Ad):nn=o0;if(nn&&(nn=nn(n,T))){Od(M,nn,t,E);break n}zn&&zn(n,x,T)}switch(zn=T?Oa(T):window,n){case"focusin":(Ed(zn)||zn.contentEditable==="true")&&(Ui=zn,Lo=T,Gr=null);break;case"focusout":Gr=Lo=Ui=null;break;case"mousedown":Do=!0;break;case"contextmenu":case"mouseup":case"dragend":Do=!1,Ud(M,t,E);break;case"selectionchange":if(d0)break;case"keydown":case"keyup":Ud(M,t,E)}var on;if(Ao)n:{switch(n){case"compositionstart":var fn="onCompositionStart";break n;case"compositionend":fn="onCompositionEnd";break n;case"compositionupdate":fn="onCompositionUpdate";break n}fn=void 0}else Bi?Nd(n,t)&&(fn="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(fn="onCompositionStart");fn&&(Td&&t.locale!=="ko"&&(Bi||fn!=="onCompositionStart"?fn==="onCompositionEnd"&&Bi&&(on=vd()):(Aa=E,jo="value"in Aa?Aa.value:Aa.textContent,Bi=!0)),zn=Ks(T,fn),0<zn.length&&(fn=new xd(fn,n,null,t,E),M.push({event:fn,listeners:zn}),on?fn.data=on:(on=wd(t),on!==null&&(fn.data=on)))),(on=e0?t0(n,t):a0(n,t))&&(fn=Ks(T,"onBeforeInput"),0<fn.length&&(zn=new xd("onBeforeInput","beforeinput",null,t,E),M.push({event:zn,listeners:fn}),zn.data=on)),ey(M,n,T,t,E)}mg(M,e)})}function fl(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Ks(n,e){for(var t=e+"Capture",a=[];n!==null;){var i=n,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=Cr(n,t),i!=null&&a.unshift(fl(n,i,l)),i=Cr(n,e),i!=null&&a.push(fl(n,i,l))),n.tag===3)return a;n=n.return}return[]}function ry(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function bg(n,e,t,a,i){for(var l=e._reactName,s=[];t!==null&&t!==a;){var c=t,f=c.alternate,T=c.stateNode;if(c=c.tag,f!==null&&f===a)break;c!==5&&c!==26&&c!==27||T===null||(f=T,i?(T=Cr(t,l),T!=null&&s.unshift(fl(t,T,f))):i||(T=Cr(t,l),T!=null&&s.push(fl(t,T,f)))),t=t.return}s.length!==0&&n.push({event:e,listeners:s})}var ly=/\r\n?/g,sy=/\u0000|\uFFFD/g;function yg(n){return(typeof n=="string"?n:""+n).replace(ly,`
`).replace(sy,"")}function xg(n,e){return e=yg(e),yg(n)===e}function Wn(n,e,t,a,i,l){switch(t){case"children":if(typeof a=="string")e==="body"||e==="textarea"&&a===""||Li(n,a);else if(typeof a=="number"||typeof a=="bigint")e!=="body"&&Li(n,""+a);else return;break;case"className":la(n,"class",a);break;case"tabIndex":la(n,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":la(n,t,a);break;case"style":gd(n,a,l);return;case"data":if(e!=="object"){la(n,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||t!=="href")){n.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){n.removeAttribute(t);break}a=Hl(a),n.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){n.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(t==="formAction"?(e!=="input"&&Wn(n,e,"name",i.name,i,null),Wn(n,e,"formEncType",i.formEncType,i,null),Wn(n,e,"formMethod",i.formMethod,i,null),Wn(n,e,"formTarget",i.formTarget,i,null)):(Wn(n,e,"encType",i.encType,i,null),Wn(n,e,"method",i.method,i,null),Wn(n,e,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){n.removeAttribute(t);break}a=Hl(a),n.setAttribute(t,a);break;case"onClick":a!=null&&(n.onclick=Vt);return;case"onScroll":a!=null&&Ln("scroll",n);return;case"onScrollEnd":a!=null&&Ln("scrollend",n);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(t=a.__html,t!=null){if(i.children!=null)throw Error(d(60));l?.__html!==t&&(n.innerHTML=t)}}break;case"multiple":n.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":n.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){n.removeAttribute("xlink:href");break}t=Hl(a),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(t,a):n.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(t,""):n.removeAttribute(t);break;case"capture":case"download":a===!0?n.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(t,a):n.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?n.setAttribute(t,a):n.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?n.removeAttribute(t):n.setAttribute(t,a);break;case"popover":Ln("beforetoggle",n),Ln("toggle",n),Gn(n,"popover",a);break;case"xlinkActuate":Be(n,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Be(n,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Be(n,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Be(n,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Be(n,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Be(n,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Be(n,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Be(n,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Be(n,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Gn(n,"is",a);break;case"innerText":case"textContent":return;default:if(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")t=wb.get(t)||t,Gn(n,t,a);else return}Un=!0}function vu(n,e,t,a,i,l){switch(t){case"style":gd(n,a,l);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(t=a.__html,t!=null){if(i.children!=null)throw Error(d(60));l?.__html!==t&&(n.innerHTML=t)}}break;case"children":if(typeof a=="string")Li(n,a);else if(typeof a=="number"||typeof a=="bigint")Li(n,""+a);else return;break;case"onScroll":a!=null&&Ln("scroll",n);return;case"onScrollEnd":a!=null&&Ln("scrollend",n);return;case"onClick":a!=null&&(n.onclick=Vt);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!zl.hasOwnProperty(t))n:{if(t[0]==="o"&&t[1]==="n"&&(i=t.endsWith("Capture"),l=t.slice(2,i?t.length-7:void 0),e=n[B]||null,e=e!=null?e[t]:null,typeof e=="function"&&n.removeEventListener(l,e,i),typeof a=="function")){typeof e!="function"&&e!==null&&(t in n?n[t]=null:n.hasAttribute(t)&&n.removeAttribute(t)),n.addEventListener(l,a,i);break n}Un=!0,t in n?n[t]=a:a===!0?n.setAttribute(t,""):Gn(n,t,a)}return}Un=!0}function Ve(n,e,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ln("error",n),Ln("load",n);var a=!1,i=!1,l;for(l in t)if(t.hasOwnProperty(l)){var s=t[l];if(s!=null)switch(l){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,e));default:Wn(n,e,l,s,t,null)}}i&&Wn(n,e,"srcSet",t.srcSet,t,null),a&&Wn(n,e,"src",t.src,t,null);return;case"input":Ln("invalid",n);var c=l=s=i=null,f=null,T=null;for(a in t)if(t.hasOwnProperty(a)){var E=t[a];if(E!=null)switch(a){case"name":i=E;break;case"type":s=E;break;case"checked":f=E;break;case"defaultChecked":T=E;break;case"value":l=E;break;case"defaultValue":c=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(d(137,e));break;default:Wn(n,e,a,E,t,null)}}Ul(n,l,c,f,T,s,i,!1);return;case"select":Ln("invalid",n),a=s=l=null;for(i in t)if(t.hasOwnProperty(i)&&(c=t[i],c!=null))switch(i){case"value":l=c;break;case"defaultValue":s=c;break;case"multiple":a=c;default:Wn(n,e,i,c,t,null)}e=l,t=s,n.multiple=!!a,e!=null?Ci(n,!!a,e,!1):t!=null&&Ci(n,!!a,t,!0);return;case"textarea":Ln("invalid",n),l=i=a=null;for(s in t)if(t.hasOwnProperty(s)&&(c=t[s],c!=null))switch(s){case"value":a=c;break;case"defaultValue":i=c;break;case"children":l=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(d(91));break;default:Wn(n,e,s,c,t,null)}fd(n,a,i,l);return;case"option":for(f in t)t.hasOwnProperty(f)&&(a=t[f],a!=null)&&(f==="selected"?n.selected=a&&typeof a!="function"&&typeof a!="symbol":Wn(n,e,f,a,t,null));return;case"dialog":Ln("beforetoggle",n),Ln("toggle",n),Ln("cancel",n),Ln("close",n);break;case"iframe":case"object":Ln("load",n);break;case"video":case"audio":for(a=0;a<dl.length;a++)Ln(dl[a],n);break;case"image":Ln("error",n),Ln("load",n);break;case"details":Ln("toggle",n);break;case"embed":case"source":case"link":Ln("error",n),Ln("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in t)if(t.hasOwnProperty(T)&&(a=t[T],a!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,e));default:Wn(n,e,T,a,t,null)}return;default:if(yo(e)){for(E in t)t.hasOwnProperty(E)&&(a=t[E],a!==void 0&&vu(n,e,E,a,t,void 0));return}}for(c in t)t.hasOwnProperty(c)&&(a=t[c],a!=null&&Wn(n,e,c,a,t,null))}var oy={};function cy(n,e,t,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,s=null,c=null,f=null,T=null,E=null;for(N in t){var M=t[N];if(t.hasOwnProperty(N)&&M!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":f=M;default:a.hasOwnProperty(N)||Wn(n,e,N,null,a,M)}}for(var x in a){var N=a[x];if(M=t[x],a.hasOwnProperty(x)&&(N!=null||M!=null))switch(x){case"type":N!==M&&(Un=!0),l=N;break;case"name":N!==M&&(Un=!0),i=N;break;case"checked":N!==M&&(Un=!0),T=N;break;case"defaultChecked":N!==M&&(Un=!0),E=N;break;case"value":N!==M&&(Un=!0),s=N;break;case"defaultValue":N!==M&&(Un=!0),c=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(d(137,e));break;default:N!==M&&Wn(n,e,x,N,a,M)}}dt(n,s,c,f,T,E,l,i);return;case"select":N=s=c=x=null;for(l in t)if(f=t[l],t.hasOwnProperty(l)&&f!=null)switch(l){case"value":break;case"multiple":N=f;default:a.hasOwnProperty(l)||Wn(n,e,l,null,a,f)}for(i in a)if(l=a[i],f=t[i],a.hasOwnProperty(i)&&(l!=null||f!=null))switch(i){case"value":l!==f&&(Un=!0),x=l;break;case"defaultValue":l!==f&&(Un=!0),c=l;break;case"multiple":l!==f&&(Un=!0),s=l;default:l!==f&&Wn(n,e,i,l,a,f)}e=c,t=s,a=N,x!=null?Ci(n,!!t,x,!1):!!a!=!!t&&(e!=null?Ci(n,!!t,e,!0):Ci(n,!!t,t?[]:"",!1));return;case"textarea":N=x=null;for(c in t)if(i=t[c],t.hasOwnProperty(c)&&i!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:Wn(n,e,c,null,a,i)}for(s in a)if(i=a[s],l=t[s],a.hasOwnProperty(s)&&(i!=null||l!=null))switch(s){case"value":i!==l&&(Un=!0),x=i;break;case"defaultValue":i!==l&&(Un=!0),N=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(d(91));break;default:i!==l&&Wn(n,e,s,i,a,l)}dd(n,x,N);return;case"option":for(var K in t)x=t[K],t.hasOwnProperty(K)&&x!=null&&!a.hasOwnProperty(K)&&(K==="selected"?n.selected=!1:Wn(n,e,K,null,a,x));for(f in a)x=a[f],N=t[f],a.hasOwnProperty(f)&&x!==N&&(x!=null||N!=null)&&(f==="selected"?(x!==N&&(Un=!0),n.selected=x&&typeof x!="function"&&typeof x!="symbol"):Wn(n,e,f,x,a,N));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var an in t)x=t[an],t.hasOwnProperty(an)&&x!=null&&!a.hasOwnProperty(an)&&Wn(n,e,an,null,a,x);for(T in a)if(x=a[T],N=t[T],a.hasOwnProperty(T)&&x!==N&&(x!=null||N!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(d(137,e));break;default:Wn(n,e,T,x,a,N)}return;default:if(yo(e)){for(var wn in t)x=t[wn],t.hasOwnProperty(wn)&&x!==void 0&&!a.hasOwnProperty(wn)&&vu(n,e,wn,void 0,a,x);for(E in a)x=a[E],N=t[E],!a.hasOwnProperty(E)||x===N||x===void 0&&N===void 0||vu(n,e,E,x,a,N);return}}for(var _ in t)x=t[_],t.hasOwnProperty(_)&&x!=null&&!a.hasOwnProperty(_)&&Wn(n,e,_,null,a,x);for(M in a)x=a[M],N=t[M],!a.hasOwnProperty(M)||x===N||x==null&&N==null||Wn(n,e,M,x,a,N)}function _g(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function uy(){if(typeof performance.getEntriesByType=="function"){for(var n=0,e=0,t=performance.getEntriesByType("resource"),a=0;a<t.length;a++){var i=t[a],l=i.transferSize,s=i.initiatorType,c=i.duration;if(l&&c&&_g(s)){for(s=0,c=i.responseEnd,a+=1;a<t.length;a++){var f=t[a],T=f.startTime;if(T>c)break;var E=f.transferSize,M=f.initiatorType;E&&_g(M)&&(f=f.responseEnd,s+=E*(f<c?1:(c-T)/(f-T)))}if(--a,e+=8*(l+s)/(i.duration/1e3),n++,10<n)break}}if(0<n)return e/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var bu=null,yu=null;function hl(n){return n.nodeType===9?n:n.ownerDocument}function Tg(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Sg(n,e){if(n===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&e==="foreignObject"?0:n}function jg(n,e,t,a){return t=hl(t).createElement(n),t[ke]=a,t[B]=e,Ve(t,n,e),Te(t),t}function xu(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _u=null;function dy(){var n=window.event;return n&&n.type==="popstate"?n===_u?!1:(_u=n,!0):(_u=null,!1)}var Tu=typeof setTimeout=="function"?setTimeout:void 0,fy=typeof clearTimeout=="function"?clearTimeout:void 0,Ng=typeof Promise=="function"?Promise:void 0,wg=typeof requestAnimationFrame=="function"?requestAnimationFrame:Tu,hy=typeof queueMicrotask=="function"?queueMicrotask:typeof Ng<"u"?function(n){return Ng.resolve(null).then(n).catch(gy)}:Tu;function gy(n){setTimeout(function(){throw n})}function Za(n){return n==="head"}function Eg(n,e){var t=e,a=0;do{var i=t.nextSibling;if(n.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"||t==="/&"){if(a===0){n.removeChild(i),vr(e);return}a--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")a++;else if(t==="html")ku(n.ownerDocument.documentElement);else if(t==="head"){t=n.ownerDocument.head,ku(t);for(var l=t.firstChild;l;){var s=l.nextSibling,c=l.nodeName;l[it]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&l.rel.toLowerCase()==="stylesheet"||t.removeChild(l),l=s}}else t==="body"&&ku(n.ownerDocument.body);t=i}while(t);vr(e)}function Og(n,e){var t=n;n=0;do{var a=t.nextSibling;if(t.nodeType===1?e?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(e?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(n===0)break;n--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||n++;t=a}while(t)}function Ag(n,e,t){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,n.style.viewTransitionName=e,t!=null&&(n.style.viewTransitionClass=t),t=getComputedStyle(n),t.display==="inline"){if(e=n.getClientRects(),e.length===1)var a=1;else for(var i=a=0;i<e.length;i++){var l=e[i];0<l.width&&0<l.height&&a++}a===1&&(n=n.style,n.display=e.length===1?"inline-block":"block",n.marginTop="-"+t.paddingTop,n.marginBottom="-"+t.paddingBottom)}}function kg(n,e){n=n.style,e=e.style;var t=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;n.viewTransitionName=t==null||typeof t=="boolean"?"":(""+t).trim(),t=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,n.viewTransitionClass=t==null||typeof t=="boolean"?"":(""+t).trim(),n.display==="inline-block"&&(e==null?n.display=n.margin="":(t=e.display,n.display=t==null||typeof t=="boolean"?"":t,t=e.margin,t!=null?n.margin=t:(t=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],n.marginTop=t==null||typeof t=="boolean"?"":t,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],n.marginBottom=e==null||typeof e=="boolean"?"":e)))}function py(n,e,t){return t=t.ownerDocument.defaultView,{rect:n,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=n.bottom&&0<=n.right&&n.top<=t.innerHeight&&n.left<=t.innerWidth}}function Su(n){var e=n.getBoundingClientRect(),t=getComputedStyle(n);return py(e,t,n)}function my(n){return n.documentElement.clientHeight}function vy(n){this.addEventListener("load",n),this.addEventListener("error",n)}function by(n,e,t,a,i,l,s,c,f){var T=e.nodeType===9?e:e.ownerDocument;try{var E=T.startViewTransition({update:function(){var x=T.defaultView,N=x.navigation&&x.navigation.transition,K=T.fonts.status;a();var an=[];if(K==="loaded"&&(my(T),T.fonts.status==="loading"&&an.push(T.fonts.ready)),K=an.length,n!==null)for(var wn=n.suspenseyImages,_=0,v=0;v<wn.length;v++){var j=wn[v];if(!j.complete){var A=j.getBoundingClientRect();if(0<A.bottom&&0<A.right&&A.top<x.innerHeight&&A.left<x.innerWidth){if(_+=Pg(j),_>Js){an.length=K;break}j=new Promise(vy.bind(j)),an.push(j)}}}if(0<an.length)return x=Promise.race([Promise.all(an),new Promise(function(nn){return setTimeout(nn,500)})]).then(i,i),(N?Promise.allSettled([N.finished,x]):x).then(l,l);if(i(),N)return N.finished.then(l,l);l()},types:t});T.__reactViewTransition=E;var M=[];return E.ready.then(function(){for(var x=T.documentElement.getAnimations({subtree:!0}),N=0;N<x.length;N++){var K=x[N],an=K.effect,wn=an.pseudoElement;if(wn!=null&&wn.startsWith("::view-transition")){M.push(K),K=an.getKeyframes();for(var _=wn=void 0,v=!0,j=0;j<K.length;j++){var A=K[j],nn=A.width;if(wn===void 0)wn=nn;else if(wn!==nn){v=!1;break}if(nn=A.height,_===void 0)_=nn;else if(_!==nn){v=!1;break}delete A.width,delete A.height,A.transform==="none"&&delete A.transform}v&&wn!==void 0&&_!==void 0&&(an.setKeyframes(K),v=getComputedStyle(an.target,an.pseudoElement),v.width!==wn||v.height!==_)&&(v=K[0],v.width=wn,v.height=_,v=K[K.length-1],v.width=wn,v.height=_,an.setKeyframes(K))}}s()},function(x){T.__reactViewTransition===E&&(T.__reactViewTransition=null);try{typeof x=="object"&&x!==null&&x.name==="InvalidStateError"&&(x.message==="View transition was skipped because document visibility state is hidden."||x.message==="Skipping view transition because document visibility state has become hidden."||x.message==="Skipping view transition because viewport size changed."||x.message==="Transition was aborted because of invalid state")&&(x=null),x!==null&&f(x)}finally{a(),i(),s()}}),E.finished.finally(function(){for(var x=0;x<M.length;x++)M[x].cancel();T.__reactViewTransition===E&&(T.__reactViewTransition=null),c()}),E}catch{return a(),i(),s(),null}}function ji(n,e){this._scope=document.documentElement,this._selector="::view-transition-"+n+"("+e+")"}ji.prototype.animate=function(n,e){return e=typeof e=="number"?{duration:e}:Z({},e),e.pseudoElement=this._selector,this._scope.animate(n,e)},ji.prototype.getAnimations=function(){for(var n=this._scope,e=this._selector,t=n.getAnimations({subtree:!0}),a=[],i=0;i<t.length;i++){var l=t[i].effect;l!==null&&l.target===n&&l.pseudoElement===e&&a.push(t[i])}return a},ji.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Mg(n){return{name:n,group:new ji("group",n),imagePair:new ji("image-pair",n),old:new ji("old",n),new:new ji("new",n)}}function bt(n){this._fragmentFiber=n,this._observers=this._eventListeners=null}bt.prototype.addEventListener=function(n,e,t){var a=null,i=null;if(!(t!=null&&typeof t!="boolean"&&(a=t.signal||null,a!==null&&a.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var l=this._eventListeners;if(Cg(l,n,e,t)===-1){var s=this,c=e;t!=null&&typeof t!="boolean"&&t.once===!0&&(c=function(f){s.removeEventListener(n,e,t),typeof e=="function"?e.call(this,f):e.handleEvent(f)}),a!==null&&(i=s.removeEventListener.bind(s,n,e,t),a.addEventListener("abort",i,{once:!0}),i=a.removeEventListener.bind(a,"abort",i)),a=dr(t),l.push({type:n,listener:e,optionsOrUseCapture:t,attachedListener:c,cleanup:i}),b(this._fragmentFiber.child,!1,yy,n,c,a)}this._eventListeners=l}};function yy(n,e,t,a){return en(n).addEventListener(e,t,a),!1}bt.prototype.removeEventListener=function(n,e,t){var a=this._eventListeners;if(a!==null&&(e=Cg(a,n,e,t),e!==-1)){var i=a[e];t=i.attachedListener;var l=i.cleanup;i=dr(i.optionsOrUseCapture),b(this._fragmentFiber.child,!1,xy,n,t,i),a.splice(e,1),l!==null&&l()}};function xy(n,e,t,a){return en(n).removeEventListener(e,t,a),!1}function dr(n){return n!=null&&typeof n!="boolean"&&(n.once===!0||n.signal instanceof AbortSignal)?{capture:n.capture,passive:n.passive}:n}function Rg(n){return n==null?"c=0":typeof n=="boolean"?"c="+(n?"1":"0"):"c="+(n.capture?"1":"0")}function Cg(n,e,t,a){if(n.length===0)return-1;a=Rg(a);for(var i=0;i<n.length;i++){var l=n[i];if(l.type===e&&l.listener===t&&Rg(l.optionsOrUseCapture)===a)return i}return-1}bt.prototype.dispatchEvent=function(n){var e=w(this._fragmentFiber);if(e===null)return!0;e=en(e);var t=this._eventListeners;if(t!==null&&0<t.length||!n.bubbles){var a=e.nodeType===9?e.createComment(""):document.createTextNode("");if(t)for(var i=0;i<t.length;i++){var l=t[i];a.addEventListener(l.type,l.attachedListener,dr(l.optionsOrUseCapture))}if(e.appendChild(a),n=a.dispatchEvent(n),t)for(i=0;i<t.length;i++)l=t[i],a.removeEventListener(l.type,l.attachedListener,dr(l.optionsOrUseCapture));return e.removeChild(a),n}return e.dispatchEvent(n)},bt.prototype.focus=function(n){b(this._fragmentFiber.child,!0,Lg,n,void 0,void 0)};function Lg(n,e){return n.tag===6?!1:(n=en(n),Ry(n,e))}bt.prototype.focusLast=function(n){var e=[];b(this._fragmentFiber.child,!0,ju,e,void 0,void 0);for(var t=e.length-1;0<=t&&!Lg(e[t],n);t--);};function ju(n,e){return e.push(n),!1}bt.prototype.blur=function(){var n=w(this._fragmentFiber);n!==null&&(n=en(n),n=hl(n).activeElement,n!==null&&b(this._fragmentFiber.child,!1,_y,n,void 0,void 0))};function _y(n,e){return n.tag===6?!1:(n=en(n),n===e||n.contains(e)?(e.blur(),!0):!1)}bt.prototype.observeUsing=function(n){this._observers===null&&(this._observers=new Set),this._observers.add(n),b(this._fragmentFiber.child,!1,Ty,n,void 0,void 0)};function Ty(n,e){return n.tag===6||(n=en(n),e.observe(n)),!1}bt.prototype.unobserveUsing=function(n){var e=this._observers;if(e!==null&&e.has(n)){e.delete(n),b(this._fragmentFiber.child,!1,Sy,n,void 0,void 0);for(var t=e=0;t<Ht.length;t++){var a=Ht[t];a.fragmentInstance===this&&a.observer===n?n.unobserve(a.instance):Ht[e++]=a}Ht.length=e}};function Sy(n,e){return n.tag===6||(n=en(n),e.unobserve(n)),!1}var Ht=[],Nu=!1;function jy(n,e,t){Ht.push({fragmentInstance:n,observer:e,instance:t}),Nu||(Nu=!0,Cy(function(){Nu=!1;var a=Ht;Ht=[];for(var i=0;i<a.length;i++){var l=a[i];l.observer.unobserve(l.instance)}}))}bt.prototype.getClientRects=function(){var n=[];return b(this._fragmentFiber.child,!1,Ny,n,void 0,void 0),n};function Ny(n,e){if(n.tag===6){n=n.stateNode;var t=n.ownerDocument.createRange();t.selectNodeContents(n),e.push.apply(e,t.getClientRects())}else n=en(n),e.push.apply(e,n.getClientRects());return!1}bt.prototype.getRootNode=function(n){var e=w(this._fragmentFiber);return e===null?this:en(e).getRootNode(n)},bt.prototype.compareDocumentPosition=function(n){var e=w(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var t=[];b(this._fragmentFiber.child,!1,ju,t,void 0,void 0);var a=en(e);if(t.length===0){if(t=a,V(this._fragmentFiber)){n:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break n}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(t=e)}e=this._fragmentFiber;var i=a=t.compareDocumentPosition(n);return t===n?i=Node.DOCUMENT_POSITION_CONTAINS:a&Node.DOCUMENT_POSITION_CONTAINED_BY&&(t=q(e)[1],t===null?i=Node.DOCUMENT_POSITION_PRECEDING:(n=en(t).compareDocumentPosition(n),i=n===0||n&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=en(t[0]),i=en(t[t.length-1]);var l=V(this._fragmentFiber)?e.parentElement:a;if(l==null)return Node.DOCUMENT_POSITION_DISCONNECTED;a=l.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,l=l.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var s=e.compareDocumentPosition(n),c=i.compareDocumentPosition(n),f=s&Node.DOCUMENT_POSITION_CONTAINED_BY||c&Node.DOCUMENT_POSITION_CONTAINED_BY;return c=a&&l&&s&Node.DOCUMENT_POSITION_FOLLOWING&&c&Node.DOCUMENT_POSITION_PRECEDING,e=a&&e===n||l&&i===n||f||c?Node.DOCUMENT_POSITION_CONTAINED_BY:!a&&e===n||!l&&i===n?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:s,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||wy(e,this._fragmentFiber,t[0],t[t.length-1],n)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function wy(n,e,t,a,i){var l=Ce(i);if(n&Node.DOCUMENT_POSITION_CONTAINED_BY){if(t=!!l)n:{for(;l!==null;){if(l.tag===7&&(l===e||l.alternate===e)){t=!0;break n}l=l.return}t=!1}return t}if(n&Node.DOCUMENT_POSITION_CONTAINS){if(l===null)return l=i.ownerDocument,i===l||i===l.documentElement||i===l.body;n:{for(l=e,e=w(e);l!==null;){if(!(l.tag!==5&&l.tag!==3&&l.tag!==27||l!==e&&l.alternate!==e)){l=!0;break n}l=l.return}l=!1}return l}return n&Node.DOCUMENT_POSITION_PRECEDING?((e=!!l)&&!(e=l===t)&&(e=vn(t,l,Qn),e===null?e=!1:(b(e,!0,hn,l,t),l=_n,_n=null,e=l!==null)),e):n&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!l)&&!(e=l===a)&&(e=vn(a,l,Qn),e===null?e=!1:(b(e,!0,En,l,a),l=_n,gn=_n=null,e=l!==null)),e):!1}function Dg(n,e){var t=n.ownerDocument.createRange();t.selectNodeContents(n),n=t.getBoundingClientRect(),window.scrollTo(window.scrollX+n.left,e?window.scrollY+n.top:window.scrollY+n.bottom-window.innerHeight)}bt.prototype.scrollIntoView=function(n){if(typeof n=="object")throw Error(d(566));var e=[];b(this._fragmentFiber.child,!1,ju,e,void 0,void 0);var t=n!==!1;if(e.length===0){var a=q(this._fragmentFiber);if(a=t?a[1]||a[0]||w(this._fragmentFiber):a[0]||a[1],a===null)return;if(a.tag===6){n=en(a),Dg(n,t);return}if(a=en(a),a.nodeType!==9){if(a.nodeType===11){t="host"in a?a.host:null,t!==null&&t.scrollIntoView(n);return}a.scrollIntoView(n)}}for(a=t?e.length-1:0;a!==(t?-1:e.length);){var i=e[a];i.tag===6?(i=en(i),Dg(i,t)):en(i).scrollIntoView(n),a+=t?-1:1}};function Ey(n,e){return n=en(n),zg(n,e),!1}function zg(n,e){n.reactFragments==null&&(n.reactFragments=new Set),n.reactFragments.add(e)}function Bg(n,e){var t=e._eventListeners;if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];n.addEventListener(i.type,i.attachedListener,dr(i.optionsOrUseCapture))}n.nodeType!==3&&(t=e._observers,t!==null&&t.forEach(function(l){for(var s=0,c=0;c<Ht.length;c++){var f=Ht[c];(f.fragmentInstance!==e||f.observer!==l||f.instance!==n)&&(Ht[s++]=f)}Ht.length=s,l.observe(n)}),zg(n,e))}function Oy(n,e){var t=e._eventListeners;if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];n.removeEventListener(i.type,i.attachedListener,dr(i.optionsOrUseCapture))}n.nodeType!==3&&(t=e._observers,t!==null&&t.forEach(function(l){typeof l.rootMargin=="string"?jy(e,l,n):l.unobserve(n)}),n.reactFragments!=null&&n.reactFragments.delete(e))}function wu(n){var e=n.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var t=e;switch(e=e.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":wu(t),Re(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}n.removeChild(t)}}function Ay(n,e,t,a){for(;n.nodeType===1;){var i=t;if(n.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(a){if(!n[it])switch(e){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(l=n.getAttribute("rel"),l==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(l!==i.rel||n.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||n.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||n.getAttribute("title")!==(i.title==null?null:i.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(l=n.getAttribute("src"),(l!==(i.src==null?null:i.src)||n.getAttribute("type")!==(i.type==null?null:i.type)||n.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(e==="input"&&n.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&n.getAttribute("name")===l)return n}else return n;if(n=At(n.nextSibling),n===null)break}return null}function ky(n,e,t){if(e==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!t||(n=At(n.nextSibling),n===null))return null;return n}function Ug(n,e){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=At(n.nextSibling),n===null))return null;return n}function Eu(n){return n.data==="$?"||n.data==="$~"}function Ou(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function My(n,e){var t=n.ownerDocument;if(n.data==="$~")n._reactRetry=e;else if(n.data!=="$?"||t.readyState!=="loading")e();else{var a=function(){e(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),n._reactRetry=a}}function At(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return n}var Au=null;function Hg(n){n=n.nextSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"||t==="/&"){if(e===0)return At(n.nextSibling);e--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||e++}n=n.nextSibling}return null}function qg(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(e===0)return n;e--}else t!=="/$"&&t!=="/&"||e++}n=n.previousSibling}return null}function Ry(n,e){function t(){a=!0}if(n.ownerDocument.activeElement===n)return!0;var a=!1;try{n.ownerDocument.addEventListener("focus",t,!0),(n.focus||HTMLElement.prototype.focus).call(n,e)}finally{n.ownerDocument.removeEventListener("focus",t,!0)}return a}function Cy(n){wg(function(){wg(function(e){return n(e)})})}function Gg(n,e,t){switch(e=hl(t),n){case"html":if(n=e.documentElement,!n)throw Error(d(452));return n;case"head":if(n=e.head,!n)throw Error(d(453));return n;case"body":if(n=e.body,!n)throw Error(d(454));return n;default:throw Error(d(451))}}function Yg(n,e,t){for(var a in t){var i=t[a];t.hasOwnProperty(a)&&i!=null&&Wn(n,e,a,null,oy,i)}t.dangerouslySetInnerHTML!=null&&(n.textContent=""),n.onclick===Vt&&(n.onclick=null),Re(n)}function ku(n){for(var e=n.attributes;e.length;)n.removeAttributeNode(e[0]);Re(n)}var kt=new Map,Vg=new Set;function gl(n){if(typeof n.getRootNode=="function"){var e=n.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return n.nodeType===9?n:n.ownerDocument}var ya=dn.d;dn.d={f:Ly,r:Dy,D:zy,C:By,L:Uy,m:Hy,X:Gy,S:qy,M:Yy};function Ly(){var n=ya.f(),e=Hs();return n||e}function Dy(n){var e=aa(n);e!==null&&e.tag===5&&e.type==="form"?Kf(e):ya.r(n)}var fr=typeof document>"u"?null:document;function Ig(n,e,t){var a=fr;if(a&&typeof e=="string"&&e){var i=Zn(e);i='link[rel="'+n+'"][href="'+i+'"]',typeof t=="string"&&(i+='[crossorigin="'+t+'"]'),Vg.has(i)||(Vg.add(i),n={rel:n,crossOrigin:t,href:e},a.querySelector(i)===null&&(e=a.createElement("link"),Ve(e,"link",n),Te(e),a.head.appendChild(e)))}}function zy(n){ya.D(n),Ig("dns-prefetch",n,null)}function By(n,e){ya.C(n,e),Ig("preconnect",n,e)}function Uy(n,e,t){ya.L(n,e,t);var a=fr;if(a&&n&&e){var i='link[rel="preload"][as="'+Zn(e)+'"]';e==="image"&&t&&t.imageSrcSet?(i+='[imagesrcset="'+Zn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(i+='[imagesizes="'+Zn(t.imageSizes)+'"]')):i+='[href="'+Zn(n)+'"]';var l=i;switch(e){case"style":l=hr(n);break;case"script":l=gr(n)}if(!(kt.has(l)||(n=Z({rel:"preload",href:e==="image"&&t&&t.imageSrcSet?void 0:n,as:e},t),kt.set(l,n),a.querySelector(i)!==null||e==="style"&&a.querySelector(pl(l))||e==="script"&&a.querySelector(ml(l))))){var s=a.createElement("link");Ve(s,"link",n),e==="style"&&(s[ta]=!0,s.onload=s.onerror=function(){Ll(s)}),Te(s),a.head.appendChild(s)}}}function Hy(n,e){ya.m(n,e);var t=fr;if(t&&n){var a=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+Zn(a)+'"][href="'+Zn(n)+'"]',l=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=gr(n)}if(!kt.has(l)&&(n=Z({rel:"modulepreload",href:n},e),kt.set(l,n),t.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(ml(l)))return}a=t.createElement("link"),Ve(a,"link",n),Te(a),t.head.appendChild(a)}}}function qy(n,e,t){ya.S(n,e,t);var a=fr;if(a&&n){var i=ia(a).hoistableStyles,l=hr(n);e=e||"default";var s=i.get(l);if(!s){var c={loading:0,preload:null};if(s=a.querySelector(pl(l)))c.loading=5;else{n=Z({rel:"stylesheet",href:n,"data-precedence":e},t),(t=kt.get(l))&&Mu(n,t);var f=s=a.createElement("link");Te(f),Ve(f,"link",n),f._p=new Promise(function(T,E){f.onload=T,f.onerror=E}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Qs(s,e,a)}s={type:"stylesheet",instance:s,count:1,state:c},i.set(l,s)}}}function Gy(n,e){ya.X(n,e);var t=fr;if(t&&n){var a=ia(t).hoistableScripts,i=gr(n),l=a.get(i);l||(l=t.querySelector(ml(i)),l||(n=Z({src:n,async:!0},e),(e=kt.get(i))&&Ru(n,e),l=t.createElement("script"),Te(l),Ve(l,"link",n),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function Yy(n,e){ya.M(n,e);var t=fr;if(t&&n){var a=ia(t).hoistableScripts,i=gr(n),l=a.get(i);l||(l=t.querySelector(ml(i)),l||(n=Z({src:n,async:!0,type:"module"},e),(e=kt.get(i))&&Ru(n,e),l=t.createElement("script"),Te(l),Ve(l,"link",n),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function Kg(n,e,t,a){var i=(i=qt.current)?gl(i):null;if(!i)throw Error(d(446));switch(n){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(t=hr(t.href),e=ia(i).hoistableStyles,a=e.get(t),a||(a={type:"style",instance:null,count:0,state:null},e.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){n=hr(t.href);var l=ia(i).hoistableStyles,s=l.get(n);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(n,s),(l=i.querySelector(pl(n)))?l._p||(s.instance=l,s.state.loading=5):(l=kt.get(n),l||(l={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},kt.set(n,l)),Vy(i,n,l,s.state))),e&&a===null)throw Error(d(528,""));return s}if(e&&a!==null)throw Error(d(529,""));return null;case"script":return e=t.async,t=t.src,typeof t=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(t=gr(t),e=ia(i).hoistableScripts,a=e.get(t),a||(a={type:"script",instance:null,count:0,state:null},e.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,n))}}function hr(n){return'href="'+Zn(n)+'"'}function pl(n){return'link[rel="stylesheet"]['+n+"]"}function Qg(n){return Z({},n,{"data-precedence":n.precedence,precedence:null})}function Vy(n,e,t,a){if(e=n.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[ta]!==!0){a.loading=1;return}}else e=n.createElement("link"),e[ta]=!0,e.onload=e.onerror=Ll.bind(null,e),Ve(e,"link",t),Te(e),n.head.appendChild(e);a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2})}function gr(n){return'[src="'+Zn(n)+'"]'}function ml(n){return"script[async]"+n}function Xg(n,e,t){if(e.count++,e.instance===null)switch(e.type){case"style":var a=n.querySelector('style[data-href~="'+Zn(t.href)+'"]');if(a)return e.instance=a,Te(a),a;var i=Z({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(n.ownerDocument||n).createElement("style"),Te(a),Ve(a,"style",i),Qs(a,t.precedence,n),e.instance=a;case"stylesheet":i=hr(t.href);var l=n.querySelector(pl(i));if(l)return e.state.loading|=4,e.instance=l,Te(l),l;a=Qg(t),(i=kt.get(i))&&Mu(a,i),l=(n.ownerDocument||n).createElement("link"),Te(l);var s=l;return s._p=new Promise(function(c,f){s.onload=c,s.onerror=f}),Ve(l,"link",a),e.state.loading|=4,Qs(l,t.precedence,n),e.instance=l;case"script":return l=gr(t.src),(i=n.querySelector(ml(l)))?(e.instance=i,Te(i),i):(a=t,(i=kt.get(l))&&(a=Z({},t),Ru(a,i)),n=n.ownerDocument||n,i=n.createElement("script"),Te(i),Ve(i,"link",a),n.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(d(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Qs(a,t.precedence,n));return e.instance}function Qs(n,e,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,l=i,s=0;s<a.length;s++){var c=a[s];if(c.dataset.precedence===e)l=c;else if(l!==i)break}l?l.parentNode.insertBefore(n,l.nextSibling):(e=t.nodeType===9?t.head:t,e.insertBefore(n,e.firstChild))}function Mu(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.title==null&&(n.title=e.title)}function Ru(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.integrity==null&&(n.integrity=e.integrity)}var Xs=null;function Jg(n,e,t){if(Xs===null){var a=new Map,i=Xs=new Map;i.set(t,a)}else i=Xs,a=i.get(t),a||(a=new Map,i.set(t,a));if(a.has(n))return a;for(a.set(n,null),t=t.getElementsByTagName(n),i=0;i<t.length;i++){var l=t[i];if(!(l[it]||l[ke]||n==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var s=l.getAttribute(e)||"";s=n+s;var c=a.get(s);c?c.push(l):a.set(s,[l])}}return a}function Cu(n,e,t){n=n.ownerDocument||n,n.head.insertBefore(t,e==="title"?n.querySelector("head > title"):null)}function Iy(n,e,t){if(t===1||e.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(n=e.disabled,typeof e.precedence=="string"&&n==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Zg(n,e){return n==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function Fg(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function Pg(n){return(n.width||100)*(n.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Wg(n,e){typeof e.decode=="function"&&(n.imgCount++,e.complete||(n.imgBytes+=Pg(e),n.suspenseyImages.push(e)),n=Xy.bind(n),e.decode().then(n,n))}function Ky(n,e,t,a){if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=hr(a.href),l=e.querySelector(pl(i));if(l){e=l._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=vl.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=l,Te(l);return}l=e.ownerDocument||e,a=Qg(a),(i=kt.get(i))&&Mu(a,i),l=l.createElement("link"),Te(l);var s=l;s._p=new Promise(function(c,f){s.onload=c,s.onerror=f}),Ve(l,"link",a),t.instance=l}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=vl.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}var Js=0;function Qy(n,e){return n.stylesheets&&n.count===0&&Fs(n,n.stylesheets),0<n.count||0<n.imgCount?function(t){var a=setTimeout(function(){if(n.stylesheets&&Fs(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4+e);0<n.imgBytes&&Js===0&&(Js=62500*uy());var i=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&Fs(n,n.stylesheets),n.unsuspend)){var l=n.unsuspend;n.unsuspend=null,l()}},(n.imgBytes>Js?50:800)+e);return n.unsuspend=t,function(){n.unsuspend=null,clearTimeout(a),clearTimeout(i)}}:null}function $g(n){if(n.count===0&&(n.imgCount===0||!n.waitingForImages)){if(n.stylesheets)Fs(n,n.stylesheets);else if(n.unsuspend){var e=n.unsuspend;n.unsuspend=null,e()}}}function vl(){this.count--,$g(this)}function Xy(){this.imgCount--,$g(this)}var Zs=null;function Fs(n,e){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Zs=new Map,e.forEach(Jy,n),Zs=null,vl.call(n))}function Jy(n,e){if(!(e.state.loading&4)){var t=Zs.get(n);if(t)var a=t.get(null);else{t=new Map,Zs.set(n,t);for(var i=n.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var s=i[l];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(t.set(s.dataset.precedence,s),a=s)}a&&t.set(null,a)}i=e.instance,s=i.getAttribute("data-precedence"),l=t.get(s)||a,l===a&&t.set(null,i),t.set(s,i),this.count++,a=vl.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),l?l.parentNode.insertBefore(i,l.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(i,n.firstChild)),e.state.loading|=4}}var pr={$$typeof:ce,Provider:null,Consumer:null,_currentValue:nt,_currentValue2:nt,_threadCount:0};function Zy(n,e,t,a,i,l,s,c,f){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ea(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ea(0),this.hiddenUpdates=Ea(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.transitionTypes=null,this.incompleteTransitions=new Map}function np(n,e,t,a,i,l,s,c,f,T,E,M){return n=new Zy(n,e,t,s,f,T,E,M,c),e=1,l===!0&&(e|=24),l=rt(3,null,null,e),n.current=l,l.stateNode=n,e=Jo(),e.refCount++,n.pooledCache=e,e.refCount++,l.memoizedState={element:a,isDehydrated:t,cache:e},Wo(l),n}function ep(n){return n?(n=Gi,n):Gi}function tp(n,e,t,a,i,l){i=ep(i),a.context===null?a.context=i:a.pendingContext=i,a=Ba(e),a.payload={element:t},l=l===void 0?null:l,l!==null&&(a.callback=l),t=Ua(n,a,e),t!==null&&(ct(t,n,e),Jr(t,n,e))}function ap(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Lu(n,e){ap(n,e),(n=n.alternate)&&ap(n,e)}function ip(n){if(n.tag===13||n.tag===31){var e=si(n,67108864);e!==null&&ct(e,n,67108864),Lu(n,67108864)}}function rp(n){if(n.tag===13||n.tag===31){var e=vt();e=ki(e);var t=si(n,e);t!==null&&ct(t,n,e),Lu(n,e)}}var mr=!0;function Fy(n,e,t,a){var i=tn.T;tn.T=null;var l=dn.p;try{dn.p=2,Du(n,e,t,a)}finally{dn.p=l,tn.T=i}}function Py(n,e,t,a){var i=tn.T;tn.T=null;var l=dn.p;try{dn.p=8,Du(n,e,t,a)}finally{dn.p=l,tn.T=i}}function Du(n,e,t,a){if(mr){var i=zu(a);if(i===null)mu(n,e,a,Ps,t),sp(n,a);else if($y(i,n,e,t,a))a.stopPropagation();else if(sp(n,a),e&4&&-1<Wy.indexOf(n)){for(;i!==null;){var l=aa(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var s=ea(l.pendingLanes);if(s!==0){var c=l;for(c.pendingLanes|=2,c.entangledLanes|=2;s;){var f=1<<31-I(s);c.entanglements[1]|=f,s&=~f}$t(l),(Vn&6)===0&&(zs=Qe()+500,ul(0))}}break;case 31:case 13:c=si(l,2),c!==null&&ct(c,l,2),Hs(),Lu(l,2)}if(l=zu(a),l===null&&mu(n,e,a,Ps,t),l===i)break;i=l}i!==null&&a.stopPropagation()}else mu(n,e,a,null,t)}}function zu(n){return n=_o(n),Bu(n)}var Ps=null;function Bu(n){if(Ps=null,n=Ce(n),n!==null){var e=R(n);if(e===null)n=null;else{var t=e.tag;if(t===13){if(n=k(e),n!==null)return n;n=null}else if(t===31){if(n=L(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null)}}return Ps=n,null}function lp(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ol()){case Al:return 2;case Or:return 8;case Rt:case p:return 32;case C:return 268435456;default:return 32}default:return 32}}var Uu=!1,Fa=null,Pa=null,Wa=null,bl=new Map,yl=new Map,$a=[],Wy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sp(n,e){switch(n){case"focusin":case"focusout":Fa=null;break;case"dragenter":case"dragleave":Pa=null;break;case"mouseover":case"mouseout":Wa=null;break;case"pointerover":case"pointerout":bl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":yl.delete(e.pointerId)}}function xl(n,e,t,a,i,l){return n===null||n.nativeEvent!==l?(n={blockedOn:e,domEventName:t,eventSystemFlags:a,nativeEvent:l,targetContainers:[i]},e!==null&&(e=aa(e),e!==null&&ip(e)),n):(n.eventSystemFlags|=a,e=n.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),n)}function $y(n,e,t,a,i){switch(e){case"focusin":return Fa=xl(Fa,n,e,t,a,i),!0;case"dragenter":return Pa=xl(Pa,n,e,t,a,i),!0;case"mouseover":return Wa=xl(Wa,n,e,t,a,i),!0;case"pointerover":var l=i.pointerId;return bl.set(l,xl(bl.get(l)||null,n,e,t,a,i)),!0;case"gotpointercapture":return l=i.pointerId,yl.set(l,xl(yl.get(l)||null,n,e,t,a,i)),!0}return!1}function op(n){var e=Ce(n.target);if(e!==null){var t=R(e);if(t!==null){if(e=t.tag,e===13){if(e=k(t),e!==null){n.blockedOn=e,Cl(n.priority,function(){rp(t)});return}}else if(e===31){if(e=L(t),e!==null){n.blockedOn=e,Cl(n.priority,function(){rp(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ws(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=zu(n.nativeEvent);if(t===null){t=n.nativeEvent;var a=new t.constructor(t.type,t);xo=a,t.target.dispatchEvent(a),xo=null}else return e=aa(t),e!==null&&ip(e),n.blockedOn=t,!1;e.shift()}return!0}function cp(n,e,t){Ws(n)&&t.delete(e)}function nx(){Uu=!1,Fa!==null&&Ws(Fa)&&(Fa=null),Pa!==null&&Ws(Pa)&&(Pa=null),Wa!==null&&Ws(Wa)&&(Wa=null),bl.forEach(cp),yl.forEach(cp)}function $s(n,e){n.blockedOn===e&&(n.blockedOn=null,Uu||(Uu=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,nx)))}var no=null;function up(n){no!==n&&(no=n,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){no===n&&(no=null);for(var e=0;e<n.length;e+=3){var t=n[e],a=n[e+1],i=n[e+2];if(typeof a!="function"){if(Bu(a||t)===null)continue;break}var l=aa(t);l!==null&&(n.splice(e,3),e-=3,yc(l,{pending:!0,data:i,method:t.method,action:a},a,i))}}))}function vr(n){function e(f){return $s(f,n)}Fa!==null&&$s(Fa,n),Pa!==null&&$s(Pa,n),Wa!==null&&$s(Wa,n),bl.forEach(e),yl.forEach(e);for(var t=0;t<$a.length;t++){var a=$a[t];a.blockedOn===n&&(a.blockedOn=null)}for(;0<$a.length&&(t=$a[0],t.blockedOn===null);)op(t),t.blockedOn===null&&$a.shift();if(t=(n.ownerDocument||n).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var i=t[a],l=t[a+1],s=i[B]||null;if(typeof l=="function")s||up(t);else if(s){var c=null;if(l&&l.hasAttribute("formAction")){if(i=l,s=l[B]||null)c=s.formAction;else if(Bu(i)!==null)continue}else c=s.action;typeof c=="function"?t[a+1]=c:(t.splice(a,3),a-=3),up(t)}}}function dp(){function n(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(s){return i=s})},focusReset:"manual",scroll:"manual"})}function e(){i!==null&&(i(),i=null),a||setTimeout(t,20)}function t(){if(!a&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,i=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(t,100),function(){a=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),i!==null&&(i(),i=null)}}}function Hu(n){this._internalRoot=n}eo.prototype.render=Hu.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(d(409));var t=e.current,a=vt();tp(t,a,n,e,null,null)},eo.prototype.unmount=Hu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;tp(n.current,2,null,n,null,null),Hs(),e[rn]=null}};function eo(n){this._internalRoot=n}eo.prototype.unstable_scheduleHydration=function(n){if(n){var e=Rl();n={blockedOn:null,target:n,priority:e};for(var t=0;t<$a.length&&e!==0&&e<$a[t].priority;t++);$a.splice(t,0,n),t===0&&op(n)}};var fp=g.version;if(fp!=="19.3.1")throw Error(d(527,fp,"19.3.1"));dn.findDOMNode=function(n){var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(d(188)):(n=Object.keys(n).join(","),Error(d(268,n)));return n=G(e),n=n!==null?D(n):null,n=n===null?null:n.stateNode,n};var ex={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:tn,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var to=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!to.isDisabled&&to.supportsFiber)try{te=to.inject(ex),Bn=to}catch{}}return Tl.createRoot=function(n,e){if(!S(n))throw Error(d(299));var t=!1,a="",i=eh,l=th,s=ah;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(l=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=np(n,1,!1,null,null,t,a,null,i,l,s,dp),n[rn]=e.current,pu(n),new Hu(e)},Tl.hydrateRoot=function(n,e,t){if(!S(n))throw Error(d(299));var a=!1,i="",l=eh,s=th,c=ah,f=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.formState!==void 0&&(f=t.formState)),e=np(n,1,!0,e,t??null,a,i,f,l,s,c,dp),e.context=ep(null),t=e.current,a=vt(),a=ki(a),i=Ba(a),i.callback=null,Ua(t,i,a),t=a,e.current.lanes=t,ii(e,t),$t(e),n[rn]=e.current,pu(n),new eo(e)},Tl.version="19.3.1",Tl}var Tp;function ux(){if(Tp)return Gu.exports;Tp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(g){console.error(g)}}return o(),Gu.exports=cx(),Gu.exports}var dx=ux();const fx=_r(dx);var U=rd();const ho=_r(U),ld=["python","javascript","java","cpp"];function hx(){try{const o=localStorage.getItem("selectedLanguage");return o&&ld.includes(o)?o:"python"}catch{return"python"}}const Yp=U.createContext(void 0),gx=({children:o})=>{const[g,h]=U.useState(hx);return U.useEffect(()=>{try{localStorage.setItem("selectedLanguage",g)}catch{}},[g]),r.jsx(Yp.Provider,{value:{selectedLanguage:g,setSelectedLanguage:h},children:o})};function Vp(){const o=U.useContext(Yp);if(o===void 0)throw new Error("useLanguage must be used within a LanguageProvider");return o}const Ip=U.createContext(void 0);function px({children:o}){const[g,h]=U.useState(!1),d=()=>h(!0),S=()=>h(!1),R=()=>h(!g);return r.jsx(Ip.Provider,{value:{isSidebarOpen:g,showSidebar:d,hideSidebar:S,toggleSidebar:R},children:o})}function sd(){const o=U.useContext(Ip);if(o===void 0)throw new Error("useSidebar must be used within SidebarProvider");return o}const Kp=U.createContext(void 0);function mx({children:o}){const[g,h]=U.useState("finder");return r.jsx(Kp.Provider,{value:{view:g,setView:h},children:o})}function go(){const o=U.useContext(Kp);if(o===void 0)throw new Error("useView must be used within ViewProvider");return o}const vx="_topbar_1nd3w_1",bx="_container_1nd3w_17",yx="_visuallyHidden_1nd3w_43",xx="_wordmark_1nd3w_55",_x="_title_1nd3w_68",Tx="_segmented_1nd3w_85",Sx="_segment_1nd3w_85",jx="_tools_1nd3w_159",Nx="_select_1nd3w_171",wx="_selectChevron_1nd3w_210",Ex="_iconLink_1nd3w_226",Ox="_hamburger_1nd3w_255",Ax="_hamburgerIcon_1nd3w_272",kx="_hamburgerTop_1nd3w_282",Mx="_open_1nd3w_285",Rx="_hamburgerMiddle_1nd3w_289",Cx="_hamburgerBottom_1nd3w_296",xe={topbar:vx,container:bx,visuallyHidden:yx,wordmark:xx,title:_x,segmented:Tx,segment:Sx,tools:jx,select:Nx,selectChevron:wx,iconLink:Ex,hamburger:Ox,hamburgerIcon:Ax,hamburgerTop:kx,open:Mx,hamburgerMiddle:Rx,hamburgerBottom:Cx};function Kn(...o){let g="";for(const h of o)if(h){if(typeof h=="string"||typeof h=="number")g+=(g&&" ")+h;else if(Array.isArray(h)){const d=Kn(...h);d&&(g+=(g&&" ")+d)}else if(typeof h=="object")for(const d in h)h[d]&&(g+=(g&&" ")+d)}return g}function Qp(){const o=document.documentElement,g=getComputedStyle(o).getPropertyValue("--navbar-height");return parseFloat(g)||76}function od(o,g=0){const h=document.querySelector(o);if(!h)return;const d=h.getBoundingClientRect().top+window.scrollY,S=window.matchMedia("(prefers-reduced-motion: reduce)").matches;window.scrollTo({top:Math.max(0,d-g),behavior:S?"auto":"smooth"})}const Lx=2,Dx=2e3;let id=0;function cd(){cancelAnimationFrame(id)}function zx(o,g){cd();const h=performance.now();let d=-1,S=0;const R=()=>{const k=document.querySelector(o);if(k){const H=k.getBoundingClientRect().top+window.scrollY;S=H===d?S+1:0,d=H}const L=performance.now()-h>Dx;if(S>=Lx||L){od(o,g);return}id=requestAnimationFrame(R)};id=requestAnimationFrame(R)}const Bx="_container_125w8_1",Ux="_input_125w8_7",Hx="_label_125w8_18",qx="_indicator_125w8_34",Gx="_sun_125w8_58",Yx="_moon_125w8_65",br={container:Bx,input:Ux,label:Hx,indicator:qx,sun:Gx,moon:Yx},Vx="theme";function Sp(){document.documentElement.dispatchEvent(new Event("themeChange"))}function Ix(){const[o,g]=U.useState("dark");U.useEffect(()=>{const d=document.documentElement.getAttribute("data-theme")==="light"?"light":"dark";g(d),Sp()},[]);const h=()=>{const d=o==="light"?"dark":"light";g(d),document.documentElement.setAttribute("data-theme",d);try{localStorage.setItem(Vx,d)}catch{}Sp()};return r.jsxs("div",{className:br.container,children:[r.jsx("input",{className:br.input,"aria-label":"Light theme",role:"switch",id:"theme-switch",type:"checkbox",checked:o==="light",onChange:h}),r.jsx("label",{className:br.label,htmlFor:"theme-switch",title:"Toggle light theme",children:r.jsxs("span",{className:br.indicator,children:[r.jsx("svg",{className:br.moon,viewBox:"0 0 16 16","aria-hidden":"true",children:r.jsx("path",{d:"M13 9.5A5.5 5.5 0 0 1 6.5 3a5.5 5.5 0 1 0 6.5 6.5Z"})}),r.jsxs("svg",{className:br.sun,viewBox:"0 0 16 16","aria-hidden":"true",children:[r.jsx("circle",{cx:"8",cy:"8",r:"2.75"}),r.jsx("path",{d:"M8 1.5v1.75M8 12.75v1.75M1.5 8h1.75M12.75 8h1.75M3.4 3.4l1.25 1.25M11.35 11.35l1.25 1.25M3.4 12.6l1.25-1.25M11.35 4.65l1.25-1.25"})]})]})})]})}function Kx(){return r.jsx("svg",{viewBox:"0 0 128 128",children:r.jsxs("g",{fill:"var(--svg-github-fill)",children:[r.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"}),r.jsx("path",{d:"M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm2.382 3.477c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237m4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"})]})})}const Qx=[{id:"finder",label:"Pattern Finder"},{id:"pareto",label:"Pareto Set"},{id:"cheatsheet",label:"Reference"}],Xx={python:"Python",javascript:"JavaScript",java:"Java",cpp:"C++"};function Jx({forwardedRef:o}){const g=U.useRef(null),{isSidebarOpen:h,showSidebar:d,hideSidebar:S,toggleSidebar:R}=sd(),{view:k,setView:L}=go(),{selectedLanguage:H,setSelectedLanguage:G}=Vp();U.useLayoutEffect(()=>{if(!g.current)return;const q=new ResizeObserver(J=>{for(const en of J){const _n=en.borderBoxSize[0].blockSize;document.documentElement.style.setProperty("--topbar-height",`${_n}px`)}});return q.observe(g.current),()=>q.disconnect()},[]);const D=q=>{q.preventDefault(),window.history.replaceState({},"",window.location.pathname),od("main",Qp()-2)},b=()=>R(),w=q=>{q!==k&&(cd(),L(q),q!=="cheatsheet"?S():window.matchMedia("(max-width: 768px)").matches||d(),window.scrollTo({top:0}))},V=q=>{G(q.target.value)};return r.jsx("header",{ref:g,className:xe.topbar,children:r.jsxs("div",{className:xe.container,children:[k==="cheatsheet"&&r.jsxs("button",{ref:o,type:"button",className:xe.hamburger,onClick:b,"aria-label":h?"Hide reference sections":"Show reference sections","aria-expanded":h,"aria-controls":"reference-sections",children:[r.jsx("span",{className:Kn(xe.hamburgerIcon,xe.hamburgerTop,h&&xe.open)}),r.jsx("span",{className:Kn(xe.hamburgerIcon,xe.hamburgerMiddle,h&&xe.open)}),r.jsx("span",{className:Kn(xe.hamburgerIcon,xe.hamburgerBottom,h&&xe.open)})]}),r.jsx("a",{href:"/leetcode-pattern-drill/",className:xe.wordmark,onClick:D,children:r.jsx("h1",{className:xe.title,children:"Pattern Drill"})}),r.jsx("div",{className:xe.segmented,role:"group","aria-label":"View",children:Qx.map(({id:q,label:J})=>r.jsx("button",{type:"button",className:xe.segment,"aria-pressed":k===q,onClick:()=>w(q),children:J},q))}),r.jsxs("div",{className:xe.tools,children:[r.jsxs("label",{className:xe.select,children:[r.jsx("span",{className:xe.visuallyHidden,children:"Template language"}),r.jsx("select",{value:H,onChange:V,children:ld.map(q=>r.jsx("option",{value:q,children:Xx[q]},q))}),r.jsx("svg",{className:xe.selectChevron,viewBox:"0 0 12 12","aria-hidden":"true",children:r.jsx("path",{d:"M2.5 4.5 6 8l3.5-3.5"})})]}),r.jsx(Ix,{}),r.jsx("a",{href:"https://github.com/Tyler-Reagan/leetcode-pattern-drill","aria-label":"GitHub source",className:xe.iconLink,target:"_blank",rel:"noopener noreferrer",children:r.jsx(Kx,{})})]})]})})}const Zx="_sidebar_u19dm_1",Fx="_exit_u19dm_17",Px="_hide_u19dm_20",Wx="_heading_u19dm_29",$x="_scrollContainer_u19dm_41",Sl={sidebar:Zx,exit:Fx,hide:Px,heading:Wx,scrollContainer:$x};var ao={},jp;function n_(){if(jp)return ao;jp=1,ao.match=R,ao.parse=k;var o=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,g=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,h=/^(?:(min|max)-)?(.+)/,d=/(em|rem|px|cm|mm|in|pt|pc)?$/,S=/(dpi|dpcm|dppx)?$/;function R(D,b){return k(D).some(function(w){var V=w.inverse,q=w.type==="all"||b.type===w.type;if(q&&V||!(q||V))return!1;var J=w.expressions.every(function(en){var _n=en.feature,gn=en.modifier,hn=en.value,En=b[_n];if(!En)return!1;switch(_n){case"orientation":case"scan":return En.toLowerCase()===hn.toLowerCase();case"width":case"height":case"device-width":case"device-height":hn=G(hn),En=G(En);break;case"resolution":hn=H(hn),En=H(En);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":hn=L(hn),En=L(En);break;case"grid":case"color":case"color-index":case"monochrome":hn=parseInt(hn,10)||1,En=parseInt(En,10)||0;break}switch(gn){case"min":return En>=hn;case"max":return En<=hn;default:return En===hn}});return J&&!V||!J&&V})}function k(D){return D.split(",").map(function(b){b=b.trim();var w=b.match(o),V=w[1],q=w[2],J=w[3]||"",en={};return en.inverse=!!V&&V.toLowerCase()==="not",en.type=q?q.toLowerCase():"all",J=J.match(/\([^\)]+\)/g)||[],en.expressions=J.map(function(_n){var gn=_n.match(g),hn=gn[1].toLowerCase().match(h);return{modifier:hn[1],feature:hn[2],value:gn[2]}}),en})}function L(D){var b=Number(D),w;return b||(w=D.match(/^(\d+)\s*\/\s*(\d+)$/),b=w[1]/w[2]),b}function H(D){var b=parseFloat(D),w=String(D).match(S)[1];switch(w){case"dpcm":return b/2.54;case"dppx":return b*96;default:return b}}function G(D){var b=parseFloat(D),w=String(D).match(d)[1];switch(w){case"em":return b*16;case"rem":return b*16;case"cm":return b*96/2.54;case"mm":return b*96/2.54/10;case"in":return b*96;case"pt":return b*72;case"pc":return b*72/12;default:return b}}return ao}var Qu,Np;function e_(){if(Np)return Qu;Np=1;var o=n_().match,g=typeof window<"u"?window.matchMedia:null;function h(S,R,k){var L=this,H;g&&!k&&(H=g.call(window,S)),H?(this.matches=H.matches,this.media=H.media,H.addListener(b)):(this.matches=o(S,R),this.media=S),this.addListener=G,this.removeListener=D,this.dispose=w;function G(V){H&&H.addListener(V)}function D(V){H&&H.removeListener(V)}function b(V){L.matches=V.matches,L.media=V.media}function w(){H&&H.removeListener(b)}}function d(S,R,k){return new h(S,R,k)}return Qu=d,Qu}var t_=e_();const a_=_r(t_);var i_=/[A-Z]/g,r_=/^ms-/,Xu={};function l_(o){return"-"+o.toLowerCase()}function Xp(o){if(Xu.hasOwnProperty(o))return Xu[o];var g=o.replace(i_,l_);return Xu[o]=r_.test(g)?"-"+g:g}function s_(o,g){if(o===g)return!0;if(!o||!g)return!1;const h=Object.keys(o),d=Object.keys(g),S=h.length;if(d.length!==S)return!1;for(let R=0;R<S;R++){const k=h[R];if(o[k]!==g[k]||!Object.prototype.hasOwnProperty.call(g,k))return!1}return!0}var Ju={exports:{}},Zu,wp;function o_(){if(wp)return Zu;wp=1;var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Zu=o,Zu}var Fu,Ep;function c_(){if(Ep)return Fu;Ep=1;var o=o_();function g(){}function h(){}return h.resetWarningCache=g,Fu=function(){function d(k,L,H,G,D,b){if(b!==o){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}d.isRequired=d;function S(){return d}var R={array:d,bigint:d,bool:d,func:d,number:d,object:d,string:d,symbol:d,any:d,arrayOf:S,element:d,elementType:d,instanceOf:S,node:d,objectOf:S,oneOf:S,oneOfType:S,shape:S,exact:S,checkPropTypes:h,resetWarningCache:g};return R.PropTypes=R,R},Fu}var Op;function u_(){return Op||(Op=1,Ju.exports=c_()()),Ju.exports}var d_=u_();const In=_r(d_),$e=In.oneOfType([In.string,In.number]),Jp={all:In.bool,grid:In.bool,aural:In.bool,braille:In.bool,handheld:In.bool,print:In.bool,projection:In.bool,screen:In.bool,tty:In.bool,tv:In.bool,embossed:In.bool},f_={orientation:In.oneOf(["portrait","landscape"]),scan:In.oneOf(["progressive","interlace"]),aspectRatio:In.string,deviceAspectRatio:In.string,height:$e,deviceHeight:$e,width:$e,deviceWidth:$e,color:In.bool,colorIndex:In.bool,monochrome:In.bool,resolution:$e,type:Object.keys(Jp)},{type:ww,...h_}=f_,g_={minAspectRatio:In.string,maxAspectRatio:In.string,minDeviceAspectRatio:In.string,maxDeviceAspectRatio:In.string,minHeight:$e,maxHeight:$e,minDeviceHeight:$e,maxDeviceHeight:$e,minWidth:$e,maxWidth:$e,minDeviceWidth:$e,maxDeviceWidth:$e,minColor:In.number,maxColor:In.number,minColorIndex:In.number,maxColorIndex:In.number,minMonochrome:In.number,maxMonochrome:In.number,minResolution:$e,maxResolution:$e,...h_},p_={...Jp,...g_};var m_={all:p_};const v_=o=>`not ${o}`,b_=(o,g)=>{const h=Xp(o);return typeof g=="number"&&(g=`${g}px`),g===!0?h:g===!1?v_(h):`(${h}: ${g})`},y_=o=>o.join(" and "),x_=o=>{const g=[];return Object.keys(m_.all).forEach(h=>{const d=o[h];d!=null&&g.push(b_(h,d))}),y_(g)},__=U.createContext(void 0),T_=o=>o.query||x_(o),Ap=o=>o?Object.keys(o).reduce((h,d)=>(h[Xp(d)]=o[d],h),{}):void 0,Zp=()=>{const o=U.useRef(!1);return U.useEffect(()=>{o.current=!0},[]),o.current},S_=o=>{const g=U.useContext(__),h=()=>Ap(o)||Ap(g),[d,S]=U.useState(h);return U.useEffect(()=>{const R=h();s_(d,R)||S(R)},[o,g]),d},j_=o=>{const g=()=>T_(o),[h,d]=U.useState(g);return U.useEffect(()=>{const S=g();h!==S&&d(S)},[o]),h},N_=(o,g)=>{const h=()=>a_(o,g||{},!!g),[d,S]=U.useState(h),R=Zp();return U.useEffect(()=>{if(R){const k=h();return S(k),()=>{k&&k.dispose()}}},[o,g]),d},w_=o=>{const[g,h]=U.useState(o.matches);return U.useEffect(()=>{const d=S=>{h(S.matches)};return o.addListener(d),h(o.matches),()=>{o.removeListener(d)}},[o]),g},Fp=(o,g,h)=>{const d=S_(g),S=j_(o);if(!S)throw new Error("Invalid or missing MediaQuery!");const R=N_(S,d),k=w_(R),L=Zp();return U.useEffect(()=>{L&&h&&h(k)},[k]),U.useEffect(()=>()=>{R&&R.dispose()},[]),k};function Pp(o,g){U.useEffect(()=>{const h=d=>{const S=d.target;(Array.isArray(o)?o:[o]).every(L=>L.current&&!L.current.contains(S))&&g()};return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)},[o,g])}const E_="_accordion_hdwo0_1",O_="_button_hdwo0_7",A_="_open_hdwo0_42",k_="_content_hdwo0_46",io={accordion:E_,button:O_,open:A_,content:k_};function M_(o){const g=parseFloat(o);return!isNaN(g)&&isFinite(g)}function kp(o){return typeof o=="string"&&o[o.length-1]==="%"&&M_(o.substring(0,o.length-1))}function Pu(o,g,h){g===0&&!h&&o?.style&&o?.children.length>0&&(o.style.display="none")}function R_(o,g){g===0&&o?.style&&(o.style.display="")}const C_={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"};function Mp(o,g){return[o.static,g===0&&o.staticHeightZero,typeof g=="number"&&g>0?o.staticHeightSpecific:null,g==="auto"&&o.staticHeightAuto].filter(h=>h).join(" ")}const L_=["animateOpacity","animationStateClasses","applyInlineTransitions","children","className","contentClassName","contentRef","delay","duration","easing","height","onHeightAnimationEnd","onHeightAnimationStart","style","disableDisplayNone"],D_=ho.forwardRef((o,g)=>{const{animateOpacity:h=!1,animationStateClasses:d={},applyInlineTransitions:S=!0,children:R,className:k="",contentClassName:L,delay:H=0,disableDisplayNone:G=!1,duration:D=500,easing:b="ease",height:w,onHeightAnimationEnd:V,onHeightAnimationStart:q,style:J,contentRef:en}=o,_n={...o};L_.forEach(z=>{delete _n[z]});const gn=U.useRef(w),hn=U.useRef(null),En=U.useRef(void 0),Qn=U.useRef(void 0),vn=U.useRef({...C_,...d}),Z=typeof window<"u",pn=U.useRef(Z&&window.matchMedia?window.matchMedia("(prefers-reduced-motion)").matches:!1),ie=pn.current?0:H,de=pn.current?0:D;let se=w,me="visible";typeof w=="number"?(se=w<0?0:w,me="hidden"):kp(se)&&(se=w==="0%"?0:w,me="hidden");const[Ke,Oe]=U.useState(se),[ce,Y]=U.useState(me),[cn,P]=U.useState(!1),[kn,Sn]=U.useState(Mp(vn.current,w));U.useEffect(()=>{Pu(hn.current,Ke,G)},[]),U.useEffect(()=>{if(w!==gn.current&&hn.current){R_(hn.current,gn.current),hn.current.style.overflow="hidden";const z=hn.current.offsetHeight;hn.current.style.overflow="";const sn=de+ie;let W,un,Rn="hidden",On;const tn=gn.current==="auto";typeof w=="number"?(W=w<0?0:w,un=W):kp(w)?(W=w==="0%"?0:w,un=W):(W=z,un="auto",Rn=void 0),tn&&(un=W,W=z);const dn=[vn.current.animating,(gn.current==="auto"||w<gn.current)&&vn.current.animatingUp,(w==="auto"||w>gn.current)&&vn.current.animatingDown,un===0&&vn.current.animatingToHeightZero,un==="auto"&&vn.current.animatingToHeightAuto,typeof un=="number"&&un>0?vn.current.animatingToHeightSpecific:null].filter(ei=>ei).join(" "),nt=Mp(vn.current,un);Oe(W),Y("hidden"),P(!tn),Sn(dn),clearTimeout(Qn.current),clearTimeout(En.current),tn?(On=!0,Qn.current=setTimeout(()=>{Oe(un),Y(Rn),P(On),q?.(un),En.current=setTimeout(()=>{P(!1),Sn(nt),Pu(hn.current,un,G),V?.(un)},sn)},50)):(q?.(W),Qn.current=setTimeout(()=>{Oe(un),Y(Rn),P(!1),Sn(nt),w!=="auto"&&Pu(hn.current,W,G),V?.(W)},sn))}return gn.current=se,()=>{clearTimeout(Qn.current),clearTimeout(En.current)}},[w]);const oe={...J,height:Ke,overflow:ce||J?.overflow};cn&&S&&(oe.transition=`height ${de}ms ${b} ${ie}ms`,J?.transition&&(oe.transition=`${J.transition}, ${oe.transition}`),oe.WebkitTransition=oe.transition);const ve={};h&&(ve.transition=`opacity ${de}ms ${b} ${ie}ms`,ve.WebkitTransition=ve.transition,Ke===0&&(ve.opacity=0));const y=typeof _n["aria-hidden"]<"u"?_n["aria-hidden"]:w===0;return ho.createElement("div",{..._n,"aria-hidden":y,className:`${kn} ${k}`,style:oe,ref:g},ho.createElement("div",{className:L,style:ve,ref:z=>{hn.current=z,en&&(en.current=z)}},R))});function z_(){return r.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("polyline",{points:"6 9 12 15 18 9"})})}function We({title:o,children:g}){const[h,d]=U.useState(!1),S=h?"auto":0,R=Kn(io.button,h&&io.open),k=()=>d(!h);return r.jsxs("div",{className:io.accordion,children:[r.jsxs("button",{type:"button",className:R,onClick:k,"aria-expanded":h,children:[r.jsx("span",{children:o}),r.jsx(z_,{})]}),r.jsx(D_,{animateOpacity:!0,height:S,duration:400,children:r.jsx("div",{className:io.content,children:g})})]})}const B_="_linkWrapper_1p79w_1",U_="_link_1p79w_1",Rp={linkWrapper:B_,link:U_},H_="_tooltip_cgi4r_1",q_="_exit_cgi4r_15",G_="_text_cgi4r_28",Wu={tooltip:H_,exit:q_,text:G_};var Y_=Gp();const V_=_r(Y_);function I_({anchorRef:o,content:g,showTooltip:h}){const d=U.useRef(null),[S,R]=U.useState(null),[k,L]=U.useState(!1),H=Kn(Wu.tooltip,!h&&Wu.exit),G=()=>L(!1),D=()=>{h||L(!0)};return U.useEffect(()=>{if(!h||!o.current)return;const b=o.current.getBoundingClientRect(),w=d.current?.offsetHeight??0,V=b.left+window.scrollX,q=b.top+window.scrollY-w-4;R({top:q,left:V})},[h]),(h||!k)&&o.current&&V_.createPortal(r.jsx("div",{ref:d,className:H,style:S??{},onAnimationStart:G,onAnimationEnd:D,children:r.jsx("span",{className:Wu.text,children:g})}),document.body)}const $u="pd-nav-link";function F({href:o,description:g}){const h=U.useRef(null),{view:d,setView:S}=go(),[R,k]=U.useState(!1),[L,H]=U.useState(()=>window.location.hash);let G;U.useEffect(()=>{const q=()=>H(window.location.hash);return window.addEventListener($u,q),window.addEventListener("hashchange",q),()=>{window.removeEventListener($u,q),window.removeEventListener("hashchange",q)}},[]);const D=d==="cheatsheet"&&L===o,b=q=>{q.preventDefault(),window.history.replaceState({},"",o),window.dispatchEvent(new Event($u)),clearTimeout(G),k(!1),cd();const J=Qp()-2;d==="finder"?(S("cheatsheet"),zx(o,J)):od(o,J)},w=()=>{G=setTimeout(()=>{k(!0)},700)},V=()=>{clearTimeout(G),k(!1)};return r.jsxs("div",{className:Rp.linkWrapper,children:[r.jsx("a",{ref:h,href:o,className:Rp.link,onClick:b,role:"button","aria-current":D?"location":void 0,"aria-description":g,onMouseEnter:w,onMouseLeave:V,children:g}),r.jsx(I_,{anchorRef:h,content:g,showTooltip:R})]})}function K_(){return r.jsxs(r.Fragment,{children:[r.jsxs(We,{title:"Big O",children:[r.jsx(F,{href:"#bigo-chart",description:"Time/Space Complexities"}),r.jsx(F,{href:"#bigo-data-structure-operations-table",description:"Data Structure Operations"}),r.jsx(F,{href:"#bigo-sorting-algorithms-table",description:"Sorting Algorithms"})]}),r.jsxs(We,{title:"Array",children:[r.jsx(F,{href:"#array-two-pointers-one-input",description:"two pointers: one input, opposite ends"}),r.jsx(F,{href:"#array-two-pointers-two-inputs",description:"two pointers: two inputs, exhaust both"}),r.jsx(F,{href:"#array-sliding-window",description:"sliding window"}),r.jsx(F,{href:"#array-prefix-sum",description:"prefix sum"}),r.jsx(F,{href:"#array-string-building",description:"efficient string building"})]}),r.jsxs(We,{title:"Hash Map",children:[r.jsx(F,{href:"#hashmap-find-number-of-subarrays",description:"find number of subarrays that fit an exact criteria"}),r.jsx(F,{href:"#hashmap-sliding-window",description:"sliding window"})]}),r.jsxs(We,{title:"Linked List",children:[r.jsx(F,{href:"#linkedlist-fast-and-slow-pointer",description:"fast and slow pointer"}),r.jsx(F,{href:"#linkedlist-reverse",description:"reverse linked list"})]}),r.jsxs(We,{title:"Stack",children:[r.jsx(F,{href:"#stack-monotonic-increasing",description:"monotonic increasing stack"}),r.jsx(F,{href:"#stack-monotonic-decreasing",description:"monotonic decreasing stack"})]}),r.jsxs(We,{title:"Binary Tree",children:[r.jsx(F,{href:"#tree-dfs-recursive",description:"DFS (recursive)"}),r.jsx(F,{href:"#tree-dfs-iterative",description:"DFS (iterative)"}),r.jsx(F,{href:"#tree-bfs",description:"BFS"})]}),r.jsxs(We,{title:"Graph",children:[r.jsx(F,{href:"#graph-dfs-recursive",description:"DFS (recursive)"}),r.jsx(F,{href:"#graph-dfs-iterative",description:"DFS (iterative)"}),r.jsx(F,{href:"#graph-bfs",description:"BFS"}),r.jsx(F,{href:"#graph-dijkstra",description:"Dijkstra (shortest path)"}),r.jsx(F,{href:"#graph-bellman-ford",description:"Bellman-Ford (shortest path)"}),r.jsx(F,{href:"#graph-kahn",description:"Kahn (topological sort)"}),r.jsx(F,{href:"#graph-kruskal",description:"Kruskal (mst)"}),r.jsx(F,{href:"#graph-prim",description:"Prim (mst)"})]}),r.jsx(We,{title:"Heap",children:r.jsx(F,{href:"#heap-find-top-k-elements",description:"find top k elements with heap"})}),r.jsxs(We,{title:"Binary Search",children:[r.jsx(F,{href:"#binarysearch-binary-search",description:"binary search"}),r.jsx(F,{href:"#binarysearch-duplicate-elements-left-insertion",description:"duplicate elements, left-most insertion point"}),r.jsx(F,{href:"#binarysearch-duplicate-elements-right-insertion",description:"duplicate elements, right-most insertion point"}),r.jsx(F,{href:"#binarysearch-greedy-minimum",description:"greedy (minimum)"}),r.jsx(F,{href:"#binarysearch-greedy-maximum",description:"greedy (maximum)"})]}),r.jsx(We,{title:"Backtracking",children:r.jsx(F,{href:"#backtracking-backtracking",description:"backtracking"})}),r.jsxs(We,{title:"Dynamic Programming",children:[r.jsx(F,{href:"#dp-top-down",description:"top-down DP"}),r.jsx(F,{href:"#dp-bottom-up",description:"bottom-up DP"}),r.jsx(F,{href:"#dp-kadane",description:"Kadane (max-sum subarray)"})]}),r.jsxs(We,{title:"Bit Manipulation",children:[r.jsx(F,{href:"#bitmanipulation-test-kth-bit",description:"test kth bit"}),r.jsx(F,{href:"#bitmanipulation-set-kth-bit",description:"set kth bit"}),r.jsx(F,{href:"#bitmanipulation-clear-kth-bit",description:"clear kth bit"}),r.jsx(F,{href:"#bitmanipulation-get-rightmost-bit",description:"get rightmost bit"}),r.jsx(F,{href:"#bitmanipulation-count-set-bits",description:"count set bits"}),r.jsx(F,{href:"#bitmanipulation-multiply-power-of-two",description:"multiply by 2^k"}),r.jsx(F,{href:"#bitmanipulation-divide-power-of-two",description:"divide by 2^k"}),r.jsx(F,{href:"#bitmanipulation-check-power-of-two",description:"check if number is power of 2"}),r.jsx(F,{href:"#bitmanipulation-swap-variables",description:"swap two variables"})]}),r.jsxs(We,{title:"Matrix",children:[r.jsx(F,{href:"#matrix-create-copy",description:"create / copy"}),r.jsx(F,{href:"#matrix-diagonals",description:"main / anti diagonals"}),r.jsx(F,{href:"#matrix-rotate-transpose",description:"rotate / transpose"})]}),r.jsxs(We,{title:"Data Structures",children:[r.jsx(F,{href:"#ds-array",description:"array"}),r.jsx(F,{href:"#ds-hash-map",description:"hashmap"}),r.jsx(F,{href:"#ds-linked-list",description:"linked list"}),r.jsx(F,{href:"#ds-doubly-linked-list",description:"doubly linked list"}),r.jsx(F,{href:"#ds-binary-tree",description:"binary tree"}),r.jsx(F,{href:"#ds-binary-search-tree",description:"binary search tree"}),r.jsx(F,{href:"#ds-graph",description:"graph"}),r.jsx(F,{href:"#ds-union-find",description:"union find"}),r.jsx(F,{href:"#ds-union-find-optimized",description:"union find optimized"}),r.jsx(F,{href:"#ds-trie",description:"trie"})]}),r.jsxs(We,{title:"Sorting Algorithms",children:[r.jsx(F,{href:"#sort-bubble",description:"bubble sort"}),r.jsx(F,{href:"#sort-selection",description:"selection sort"}),r.jsx(F,{href:"#sort-insertion",description:"insertion sort"}),r.jsx(F,{href:"#sort-shell",description:"shell sort"}),r.jsx(F,{href:"#sort-merge",description:"mergesort"}),r.jsx(F,{href:"#sort-quick",description:"quicksort"}),r.jsx(F,{href:"#sort-tim",description:"timsort"}),r.jsx(F,{href:"#sort-heap",description:"heapsort"}),r.jsx(F,{href:"#sort-counting",description:"counting sort"}),r.jsx(F,{href:"#sort-bucket",description:"bucket sort"}),r.jsx(F,{href:"#sort-radix",description:"radix sort"}),r.jsx(F,{href:"#sort-cube",description:"cubesort"}),r.jsx(F,{href:"#sort-bogo",description:"bogo sort"}),r.jsx(F,{href:"#sort-pancake",description:"pancake sort"}),r.jsx(F,{href:"#sort-sleep",description:"sleep sort"})]})]})}function Q_({hamburgerButtonRef:o}){const g=U.useRef(null),{isSidebarOpen:h,showSidebar:d,hideSidebar:S}=sd(),{view:R}=go(),[k,L]=U.useState(()=>!h),H=Kn(Sl.sidebar,!h&&Sl.exit,!h&&k&&Sl.hide),G=q=>{q&&h?S():!q&&!h&&R==="cheatsheet"&&d()};U.useEffect(()=>{R!=="cheatsheet"&&h&&S()},[R,h,S]);const D=Fp({maxWidth:768},void 0,G),b=()=>{D&&h&&S()},w=()=>L(!1),V=()=>{h||L(!0)};return Pp([g,o],b),r.jsxs("nav",{ref:g,id:"reference-sections","aria-label":"Reference sections",className:H,onAnimationStart:w,onAnimationEndCapture:V,children:[r.jsx("h2",{className:Sl.heading,children:"Reference"}),r.jsx("div",{className:Sl.scrollContainer,children:r.jsx(K_,{})})]})}function X_(){const o=U.useRef(null);return r.jsxs("div",{id:"AppBar",children:[r.jsx(Jx,{forwardedRef:o}),r.jsx(Q_,{hamburgerButtonRef:o})]})}const J_="_main_bsmjw_1",Z_="_sidebarHidden_bsmjw_12",Cp={main:J_,sidebarHidden:Z_},F_="modulepreload",P_=function(o){return"/leetcode-pattern-drill/"+o},Lp={},Wp=function(g,h,d){let S=Promise.resolve();if(h&&h.length>0){let H=function(G){return Promise.all(G.map(D=>Promise.resolve(D).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const k=document.querySelector("meta[property=csp-nonce]"),L=k?.nonce||k?.getAttribute("nonce");S=H(h.map(G=>{if(G=P_(G),G in Lp)return;Lp[G]=!0;const D=G.endsWith(".css"),b=D?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${G}"]${b}`))return;const w=document.createElement("link");if(w.rel=D?"stylesheet":F_,D||(w.as="script"),w.crossOrigin="",w.href=G,L&&w.setAttribute("nonce",L),document.head.appendChild(w),D)return new Promise((V,q)=>{w.addEventListener("load",V),w.addEventListener("error",()=>q(new Error(`Unable to preload CSS for ${G}`)))})}))}function R(k){const L=new Event("vite:preloadError",{cancelable:!0});if(L.payload=k,window.dispatchEvent(L),!L.defaultPrevented)throw k}return S.then(k=>{for(const L of k||[])L.status==="rejected"&&R(L.reason);return g().catch(R)})},W_="_finder_19j5l_1",$_="_mapMode_19j5l_15",nT="_log_19j5l_42",eT="_logHead_19j5l_51",tT="_logHint_19j5l_61",aT="_logRows_19j5l_67",iT="_row_19j5l_79",rT="_rowNum_19j5l_93",lT="_rowBack_19j5l_97",sT="_rowNumDashed_19j5l_119",oT="_rowText_19j5l_123",cT="_rowQuestion_19j5l_130",uT="_rowCue_19j5l_140",dT="_rowLive_19j5l_157",fT="_rowReady_19j5l_167",hT="_rowCurrent_19j5l_171",gT="_rowResult_19j5l_172",pT="_rowFault_19j5l_187",mT="_nextWrap_19j5l_195",vT="_nextCheck_19j5l_199",bT="_nextLabel_19j5l_210",yT="_line_19j5l_218",xT="_stops_19j5l_222",_T="_stop_19j5l_222",TT="_dashedNext_19j5l_251",ST="_dot_19j5l_255",jT="_answered_19j5l_265",NT="_current_19j5l_269",wT="_reached_19j5l_270",ET="_end_19j5l_274",OT="_fault_19j5l_279",AT="_stopInner_19j5l_284",kT="_stopButton_19j5l_285",MT="_cue_19j5l_303",RT="_card_19j5l_313",CT="_strip_19j5l_328",LT="_stripEnd_19j5l_348",DT="_mapStatus_19j5l_359",zT="_seg_19j5l_372",BT="_segButton_19j5l_381",UT="_segOn_19j5l_404",HT="_mapFallback_19j5l_410",qT="_stripTitle_19j5l_414",GT="_stripValue_19j5l_424",YT="_timer_19j5l_430",VT="_cells_19j5l_437",IT="_cell_19j5l_437",KT="_colon_19j5l_443",QT="_signCell_19j5l_468",XT="_timerCaption_19j5l_489",JT="_idle_19j5l_499",ZT="_ok_19j5l_503",FT="_warn_19j5l_507",PT="_over_19j5l_514",WT="_body_19j5l_526",$T="_question_19j5l_540",nS="_resultName_19j5l_541",eS="_lead_19j5l_557",tS="_actions_19j5l_569",aS="_primary_19j5l_575",iS="_kbd_19j5l_602",rS="_options_19j5l_607",lS="_option_19j5l_607",sS="_optionCue_19j5l_653",oS="_footer_19j5l_676",cS="_plain_19j5l_688",uS="_fields_19j5l_728",dS="_field_19j5l_728",fS="_figure_19j5l_759",hS="_okNote_19j5l_767",gS="_overNote_19j5l_771",pS="_summary_19j5l_776",mS="_templates_19j5l_787",vS="_note_19j5l_796",bS="_docsLink_19j5l_801",yS="_srOnly_19j5l_812",xS="_turn_19j5l_1",O={finder:W_,mapMode:$_,log:nT,logHead:eT,logHint:tT,logRows:aT,row:iT,rowNum:rT,rowBack:lT,rowNumDashed:sT,rowText:oT,rowQuestion:cT,rowCue:uT,rowLive:dT,rowReady:fT,rowCurrent:hT,rowResult:gT,rowFault:pT,nextWrap:mT,nextCheck:vT,nextLabel:bT,line:yT,stops:xT,stop:_T,dashedNext:TT,dot:ST,answered:jT,current:NT,reached:wT,end:ET,fault:OT,stopInner:AT,stopButton:kT,cue:MT,card:RT,strip:CT,stripEnd:LT,mapStatus:DT,seg:zT,segButton:BT,segOn:UT,mapFallback:HT,stripTitle:qT,stripValue:GT,timer:YT,cells:VT,cell:IT,colon:KT,signCell:QT,timerCaption:XT,idle:JT,ok:ZT,warn:FT,over:PT,body:WT,question:$T,resultName:nS,lead:eS,actions:tS,primary:aS,kbd:iS,options:rS,option:lS,optionCue:sS,footer:oS,plain:cS,fields:uS,field:dS,figure:fS,okNote:hS,overNote:gS,summary:pS,templates:mS,note:vS,docsLink:bS,srOnly:yS,turn:xS},wi={rootId:"q-input",nodes:{"q-input":{id:"q-input",question:"What does the problem give you?",options:[{cue:"an array or a string",next:"q-array"},{cue:"a linked list",next:"q-list"},{cue:"a binary tree or BST",next:"q-tree"},{cue:"a graph, grid, edges, or prerequisites",next:"q-graph"},{cue:"a data stream, or a design-a-class prompt",next:"q-design"},{cue:"an integer n, or bit tricks (single number, XOR)",next:"q-number"}]},"q-array":{id:"q-array",question:"What does it ask about the array or string?",options:[{cue:"a contiguous subarray or substring (window, sum)",next:"q-subarray"},{cue:"a pair or triplet, a palindrome, or an in-place edit",next:"q-pointers"},{cue:"searching a sorted array, or the min/max value that works",next:"q-search"},{cue:"the next greater or smaller element of each item",next:"q-mono"},{cue:"counts, duplicates, top K, brackets, words",next:"q-lookup"},{cue:"choices over elements (all combos, best or count of ways)",next:"q-choices"},{cue:"intervals (merge, overlaps, meeting rooms)",next:"sort-first"}]},"q-subarray":{id:"q-subarray",question:"What does it want from the subarray or substring?",options:[{cue:"sum or average of each size-K window",next:"sliding-window-fixed"},{cue:"longest or shortest window that meets a rule",next:"q-window-variable"},{cue:"count subarrays with exactly K distinct or odd",next:"sliding-window-exactly-k"},{cue:"a subarray sum equal to K, or range-sum queries",next:"q-prefix"},{cue:"maximum sum subarray of any length",next:"dp-kadane"},{cue:"max or min inside each size-K window",next:"monotonic-deque"}]},"q-window-variable":{id:"q-window-variable",question:"What does the window rule check?",options:[{cue:"sum or product vs a target (non-negative numbers)",next:"sliding-window-variable"},{cue:"characters (no repeats, at most K distinct, contains all of T)",next:"hashmap-sliding-window"}]},"q-prefix":{id:"q-prefix",question:"What kind of subarray-sum question?",options:[{cue:"many queries for the sum between index i and j",next:"prefix-sum-range"},{cue:"count or longest subarrays with sum K (negatives allowed)",next:"prefix-sum-hashmap"}]},"q-pointers":{id:"q-pointers",question:"What are the pointers doing?",options:[{cue:"ends moving inward (3Sum, palindrome, reverse, container with most water)",next:"two-pointers-converging"},{cue:"two arrays or strings (merge sorted, is subsequence)",next:"two-pointers-two-inputs"},{cue:"in-place rewrite (remove duplicates, move zeroes, partition)",next:"two-pointers-fast-slow-inplace"},{cue:"two numbers in an unsorted array (sum to X, return indices)",next:"hashmap-frequency"}]},"q-search":{id:"q-search",question:"What are you searching for?",options:[{cue:"find X, or its index, in a sorted or rotated array",next:"binary-search-classic"},{cue:"first position of X, or where to insert X",next:"binary-search-left-bound"},{cue:"last position of X, or count of elements <= X",next:"binary-search-right-bound"},{cue:"smallest capacity or speed that works (minimize the max)",next:"binary-search-answer-minimize"},{cue:"largest distance or size that works (maximize the min)",next:"binary-search-answer-maximize"}]},"q-mono":{id:"q-mono",question:"What do you need for each element?",options:[{cue:"next greater element (days until warmer, stock span)",next:"monotonic-stack-decreasing"},{cue:"next smaller element (largest rectangle in histogram)",next:"monotonic-stack-increasing"},{cue:"max or min inside each size-K window",next:"monotonic-deque"}]},"q-lookup":{id:"q-lookup",question:"What do you need to do with the data?",options:[{cue:"counting or grouping (occurrences, duplicates, anagrams)",next:"hashmap-frequency"},{cue:"top K (K largest, K most frequent, Kth smallest)",next:"heap-top-k"},{cue:"matching or nesting (parentheses, expressions, simplify path)",next:"stack-matching"},{cue:"prefix lookups over a word list (autocomplete)",next:"trie"},{cue:"building an output string (reverse words, compress, join)",next:"string-building"},{cue:"bit tricks (single number among pairs, XOR)",next:"bit-manipulation"}]},"q-choices":{id:"q-choices",question:"What are you trying to do with the choices?",options:[{cue:"generate every subset, permutation, or combination",next:"q-backtrack"},{cue:"best cost, or number of ways, over the choices",next:"q-dp"},{cue:"locally best move each step (jump game, gas station)",next:"greedy"}]},"q-backtrack":{id:"q-backtrack",question:"Can a partial choice be rejected early?",options:[{cue:"no, enumerate everything (subsets, permutations, combination sum)",next:"backtracking"},{cue:"yes, a rule prunes branches (N-Queens, Sudoku, word search)",next:"backtracking-pruning"}]},"q-dp":{id:"q-dp",question:"What do the choices look like?",options:[{cue:"reusable items (min coins, ways to make X)",next:"dp-unbounded-knapsack"},{cue:"each item used once (partition equal subset, target sum)",next:"dp-01-knapsack"},{cue:"one or two sequences (LIS, LCS, edit distance)",next:"dp-sequences"},{cue:"something else (house robber, unique paths, word break)",next:"q-dp-style"}]},"q-dp-style":{id:"q-dp-style",question:"Which way is the recurrence easier to write?",options:[{cue:"recurse from a state and cache (word break, decode ways)",next:"dp-top-down"},{cue:"fill dp[i] or dp[r][c] from earlier cells (house robber, unique paths)",next:"dp-bottom-up"}]},"q-list":{id:"q-list",question:"What do you do with the list?",options:[{cue:"cycle, middle node, or Nth node from the end",next:"linked-list-fast-slow"},{cue:"reverse the list, a sublist, or k-groups",next:"linked-list-reverse"},{cue:"merge two sorted lists",next:"linked-list-merge-sorted"},{cue:"merge K sorted lists",next:"heap-merge-k"}]},"q-tree":{id:"q-tree",question:"What does it ask about the tree?",options:[{cue:"level-by-level view (level order, right side view)",next:"tree-bfs"},{cue:"combine subtree answers (depth, path sum, LCA, validate BST, serialize)",next:"tree-dfs-recursive"},{cue:"paused or non-recursive traversal (BST iterator, kth smallest)",next:"tree-dfs-iterative"}]},"q-graph":{id:"q-graph",question:"What does it ask about the graph or grid?",options:[{cue:"explore everything (islands, components, all paths)",next:"graph-dfs"},{cue:"shortest path or minimum steps",next:"q-shortest"},{cue:"ordering with prerequisites (course schedule, directed cycle)",next:"topological-sort"},{cue:"same-group checks (redundant connection, undirected cycle)",next:"union-find"},{cue:"minimum cost to connect all points",next:"mst"},{cue:"grid moving right or down (count paths, min path sum)",next:"q-dp"}]},"q-shortest":{id:"q-shortest",question:"What kind of shortest path?",options:[{cue:"unweighted, from one start (word ladder, maze)",next:"graph-bfs-shortest-path"},{cue:"spreads from many sources at once (rotting oranges, 01 matrix)",next:"multi-source-bfs"},{cue:"weighted edges (network delay, cheapest flights)",next:"shortest-path-weighted"}]},"q-design":{id:"q-design",question:"What must the structure support?",options:[{cue:"median of a data stream",next:"two-heaps"},{cue:"Kth largest element in a stream",next:"heap-top-k"},{cue:"moving average, recent calls, circular queue",next:"queue-design"},{cue:"implement Trie, add and search words",next:"trie"},{cue:"min stack, undo, browser history",next:"stack-matching"}]},"q-number":{id:"q-number",question:"What does it ask about n?",options:[{cue:"bit tricks (power of two, set bits, single number, XOR)",next:"bit-manipulation"},{cue:"nth term from earlier terms (climb n stairs)",next:"q-dp"},{cue:"integer square root (largest x with x*x <= n)",next:"binary-search-answer-maximize"},{cue:"guess the number in 1..n",next:"binary-search-classic"}]}},leaves:{"two-pointers-converging":{id:"two-pointers-converging",name:"Two pointers, converging",pattern:"Two Pointers",summary:"Sorted array pairs/triplets, palindromes, in-place reversal. Start at both ends and move the pointer whose side cannot be part of the answer.",docsUrl:"https://resources.devweekends.com/dsa-patterns/two-pointers",templateIds:["two-pointers-one-input"]},"two-pointers-two-inputs":{id:"two-pointers-two-inputs",name:"Two pointers, two inputs",pattern:"Two Pointers",summary:"Merge sorted arrays, subsequence checks. One pointer per input; advance the one whose element is consumed.",docsUrl:"https://resources.devweekends.com/dsa-patterns/two-pointers",templateIds:["two-pointers-two-inputs"]},"two-pointers-fast-slow-inplace":{id:"two-pointers-fast-slow-inplace",name:"Two pointers, read/write in place",pattern:"Two Pointers",summary:"Remove duplicates, move zeroes, partition in O(1) space. A fast pointer reads every element; a slow pointer marks where the next kept element is written.",docsUrl:"https://resources.devweekends.com/dsa-patterns/two-pointers",templateIds:[]},"sliding-window-fixed":{id:"sliding-window-fixed",name:"Sliding window, fixed size",pattern:"Sliding Window",summary:"Every window of exactly K elements. Add the entering element and remove the leaving one so each step is O(1).",docsUrl:"https://resources.devweekends.com/dsa-patterns/sliding-window",templateIds:["sliding-window"]},"sliding-window-variable":{id:"sliding-window-variable",name:"Sliding window, variable size",pattern:"Sliding Window",summary:"Longest/shortest subarray meeting a sum-style rule with non-negative values. Expand right, shrink left while the window is invalid (or while valid, for shortest).",docsUrl:"https://resources.devweekends.com/dsa-patterns/sliding-window",templateIds:["sliding-window"]},"sliding-window-exactly-k":{id:"sliding-window-exactly-k",name:"Sliding window, exactly K",pattern:"Sliding Window",summary:'"Exactly K" is not monotonic, so count it as atMost(K) - atMost(K-1), each a standard variable window.',docsUrl:"https://resources.devweekends.com/dsa-patterns/sliding-window",templateIds:[]},"prefix-sum-range":{id:"prefix-sum-range",name:"Prefix sum, range queries",pattern:"Prefix Sum",summary:"Many sum-between-i-and-j queries on a fixed array. Precompute prefix[i]; each query is prefix[j+1] - prefix[i] in O(1).",docsUrl:"https://resources.devweekends.com/dsa-patterns/prefix-sum",templateIds:["prefix-sum"]},"prefix-sum-hashmap":{id:"prefix-sum-hashmap",name:"Prefix sum, hash map",pattern:"Prefix Sum",summary:"Count or find subarrays with sum K when negatives break sliding window. Store prefix-sum counts (seeded with {0: 1}) and look up prefix - K.",docsUrl:"https://resources.devweekends.com/dsa-patterns/prefix-sum",templateIds:["hashmap-find-number-of-subarrays"]},"string-building":{id:"string-building",name:"String building",pattern:"String",summary:"Producing a new string piece by piece. Append to a list or builder and join once at the end; repeated concatenation is O(n^2).",docsUrl:"https://resources.devweekends.com/dsa-patterns/stack",templateIds:["string-building"]},"binary-search-classic":{id:"binary-search-classic",name:"Binary search, find target",pattern:"Binary Search",summary:"Find an exact value in a sorted (or rotated) space. Halve the range each step by comparing the middle with the target.",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",templateIds:["binary-search"]},"binary-search-left-bound":{id:"binary-search-left-bound",name:"Binary search, left bound",pattern:"Binary Search",summary:"First position of X or its insertion point. Keep searching left when nums[mid] >= X to land on the leftmost index.",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",templateIds:["binary-search-left-insertion"]},"binary-search-right-bound":{id:"binary-search-right-bound",name:"Binary search, right bound",pattern:"Binary Search",summary:"Last position of X, or count of elements <= X. Search for the insertion point after every copy of X (go right when nums[mid] <= X).",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",templateIds:["binary-search-right-insertion"]},"binary-search-answer-minimize":{id:"binary-search-answer-minimize",name:"Binary search on answer, minimum",pattern:"Binary Search",summary:"Smallest value that still works (min capacity, min speed, minimize the max). Binary search the answer range with a greedy feasibility check.",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",templateIds:["binary-search-greedy-minimum"]},"binary-search-answer-maximize":{id:"binary-search-answer-maximize",name:"Binary search on answer, maximum",pattern:"Binary Search",summary:"Largest value that still works (maximize the minimum distance). Binary search the answer range, keeping the best feasible value.",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",templateIds:["binary-search-greedy-maximum"]},"sort-first":{id:"sort-first",name:"Sort first, then scan",pattern:"Sorting",summary:"Intervals, meetings, or anything easier in order. Sort (often by start or end), then apply a linear scan, greedy, heap, or two pointers.",docsUrl:"https://resources.devweekends.com/dsa-patterns/sorting",templateIds:[]},"hashmap-frequency":{id:"hashmap-frequency",name:"Hash map, lookup and frequency",pattern:"Hash Map",summary:"Counting, duplicates, anagrams, grouping, or unsorted two-sum. Store counts or complements so each lookup is O(1).",docsUrl:"https://resources.devweekends.com/dsa-patterns/hashmap",templateIds:[]},"hashmap-sliding-window":{id:"hashmap-sliding-window",name:"Sliding window, hash map",pattern:"Sliding Window",summary:"Substring with no repeats, at most K distinct, or containing all of T. A frequency map tracks the window so you know when to shrink.",docsUrl:"https://resources.devweekends.com/dsa-patterns/sliding-window",templateIds:["hashmap-sliding-window"]},"stack-matching":{id:"stack-matching",name:"Stack, matching and undo",pattern:"Stack",summary:"Brackets, expression evaluation, path simplification, undo. Push openings or state; pop when the matching close or reversal arrives.",docsUrl:"https://resources.devweekends.com/dsa-patterns/stack",templateIds:[]},"monotonic-stack-increasing":{id:"monotonic-stack-increasing",name:"Monotonic stack, increasing",pattern:"Monotonic Stack",summary:"Next/previous smaller element, largest rectangle in histogram. Keep the stack increasing; a smaller arrival pops and resolves the taller entries.",docsUrl:"https://resources.devweekends.com/dsa-patterns/monotonic-stack",templateIds:["stack-monotonic-increasing"]},"monotonic-stack-decreasing":{id:"monotonic-stack-decreasing",name:"Monotonic stack, decreasing",pattern:"Monotonic Stack",summary:"Next/previous greater element, daily temperatures, stock span. Keep the stack decreasing; a larger arrival pops and resolves the smaller entries.",docsUrl:"https://resources.devweekends.com/dsa-patterns/monotonic-stack",templateIds:["stack-monotonic-decreasing"]},"monotonic-deque":{id:"monotonic-deque",name:"Monotonic deque",pattern:"Monotonic Deque",summary:"Max or min of every window of size K. Keep a deque of indices in monotonic order; drop expired indices from the front.",docsUrl:"https://resources.devweekends.com/dsa-patterns/queue",templateIds:[]},"queue-design":{id:"queue-design",name:"Queue design",pattern:"Queue",summary:"Moving average, recent calls, rate limiting, circular queue. FIFO of values or timestamps, evicting from the front as they expire.",docsUrl:"https://resources.devweekends.com/dsa-patterns/queue",templateIds:[]},"heap-top-k":{id:"heap-top-k",name:"Heap, top K",pattern:"Heap",summary:"K largest, K most frequent, Kth element (also in a stream). Keep a min-heap of size K, popping the smallest when it overflows.",docsUrl:"https://resources.devweekends.com/dsa-patterns/heap",templateIds:["heap-find-top-k-elements"]},"heap-merge-k":{id:"heap-merge-k",name:"Heap, merge K sorted",pattern:"Heap",summary:"Merge K sorted lists or streams. Push each head into a min-heap; pop the smallest and push its successor.",docsUrl:"https://resources.devweekends.com/dsa-patterns/heap",templateIds:[]},"two-heaps":{id:"two-heaps",name:"Two heaps",pattern:"Heap",summary:"Running median of a stream. A max-heap holds the lower half and a min-heap the upper half, rebalanced so sizes differ by at most one.",docsUrl:"https://resources.devweekends.com/dsa-patterns/heap",templateIds:[]},trie:{id:"trie",name:"Trie",pattern:"Trie",summary:"Prefix matching, autocomplete, word dictionaries. Store words character by character in a tree so prefix lookups cost O(length).",docsUrl:"https://resources.devweekends.com/dsa-patterns/trie",templateIds:["ds-trie"]},"linked-list-fast-slow":{id:"linked-list-fast-slow",name:"Linked list, fast and slow pointers",pattern:"Linked List",summary:"Cycle detection, middle node, Nth from end. Move one pointer twice as fast (Floyd's) or give one a head start.",docsUrl:"https://resources.devweekends.com/dsa-patterns/linked-list",templateIds:["linkedlist-fast-and-slow-pointer"]},"linked-list-reverse":{id:"linked-list-reverse",name:"Linked list, reverse",pattern:"Linked List",summary:"Reverse a whole list, a sublist, or k-groups. Walk with prev/curr/next and flip each pointer.",docsUrl:"https://resources.devweekends.com/dsa-patterns/linked-list",templateIds:["linkedlist-reverse"]},"linked-list-merge-sorted":{id:"linked-list-merge-sorted",name:"Linked list, merge sorted",pattern:"Linked List",summary:"Merge two sorted lists. Use a dummy head and always attach the smaller of the two current nodes.",docsUrl:"https://resources.devweekends.com/dsa-patterns/linked-list",templateIds:[]},"tree-dfs-recursive":{id:"tree-dfs-recursive",name:"Tree DFS, recursive",pattern:"DFS",summary:"Depth, path sum, LCA, validate BST, serialize. Recurse into children and combine their answers (pre-, in-, or post-order).",docsUrl:"https://resources.devweekends.com/dsa-patterns/dfs",templateIds:["tree-dfs-recursive"]},"tree-dfs-iterative":{id:"tree-dfs-iterative",name:"Tree DFS, iterative",pattern:"DFS",summary:"BST iterator, kth smallest, or deep trees. Replace recursion with an explicit stack, often for an in-order walk you can pause.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dfs",templateIds:["tree-dfs-iterative"]},"tree-bfs":{id:"tree-bfs",name:"Tree BFS, level order",pattern:"BFS",summary:"Level order, right side view, per-level values. Process the queue one level at a time using its size as a snapshot.",docsUrl:"https://resources.devweekends.com/dsa-patterns/bfs",templateIds:["tree-bfs"]},"graph-dfs":{id:"graph-dfs",name:"Graph DFS",pattern:"DFS",summary:"Islands, connected components, all paths, clone graph. Explore fully from each unvisited node, marking visited.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dfs",templateIds:["graph-dfs-recursive","graph-dfs-iterative"]},"graph-bfs-shortest-path":{id:"graph-bfs-shortest-path",name:"Graph BFS, shortest path",pattern:"BFS",summary:"Fewest steps in an unweighted graph or grid. BFS from the start; the level at which you reach the target is the distance.",docsUrl:"https://resources.devweekends.com/dsa-patterns/bfs",templateIds:["graph-bfs"]},"multi-source-bfs":{id:"multi-source-bfs",name:"Multi-source BFS",pattern:"BFS",summary:"Something spreads from many cells at once (rotting oranges, 01 matrix). Enqueue every source first, then run one BFS.",docsUrl:"https://resources.devweekends.com/dsa-patterns/bfs",templateIds:[]},"shortest-path-weighted":{id:"shortest-path-weighted",name:"Shortest path, weighted",pattern:"Graph Algorithms",summary:"Shortest path with edge weights. Dijkstra (min-heap) for non-negative weights; Bellman-Ford for negatives or at most K edges.",docsUrl:"https://resources.devweekends.com/dsa-patterns/graph-algorithms",templateIds:["graph-dijkstra","graph-bellman-ford"]},"topological-sort":{id:"topological-sort",name:"Topological sort",pattern:"Graph Algorithms",summary:"Ordering with dependencies, or detecting that none exists. Kahn's algorithm: repeatedly take nodes with in-degree 0.",docsUrl:"https://resources.devweekends.com/dsa-patterns/graph-algorithms",templateIds:["graph-kahn"]},"union-find":{id:"union-find",name:"Union-find",pattern:"Union Find",summary:"Are two items in the same group, merging groups, redundant edges (undirected cycles). Keep a parent array with path compression and union by rank.",docsUrl:"https://resources.devweekends.com/dsa-patterns/union-find",templateIds:["ds-union-find","ds-union-find-optimized"]},mst:{id:"mst",name:"Minimum spanning tree",pattern:"Graph Algorithms",summary:"Minimum cost to connect all points. Kruskal (sort edges + Union Find) or Prim (grow from a node with a min-heap).",docsUrl:"https://resources.devweekends.com/dsa-patterns/graph-algorithms",templateIds:["graph-kruskal","graph-prim"]},backtracking:{id:"backtracking",name:"Backtracking",pattern:"Backtracking",summary:"Generate all subsets, permutations, or combinations. Choose, recurse, un-choose, recording each complete candidate.",docsUrl:"https://resources.devweekends.com/dsa-patterns/backtracking",templateIds:["backtracking"]},"backtracking-pruning":{id:"backtracking-pruning",name:"Backtracking, pruning",pattern:"Backtracking",summary:"Constraint puzzles like N-Queens, Sudoku, word search. Backtrack, but reject a partial choice as soon as it breaks a constraint.",docsUrl:"https://resources.devweekends.com/dsa-patterns/backtracking",templateIds:[]},"dp-top-down":{id:"dp-top-down",name:"DP, top-down",pattern:"Dynamic Programming",summary:"Overlapping subproblems where the recursion is the natural statement. Write the recursive choice, then cache results by state.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",templateIds:["dp-top-down"]},"dp-bottom-up":{id:"dp-bottom-up",name:"DP, bottom-up",pattern:"Dynamic Programming",summary:"Each state depends on earlier indices or neighbor cells. Fill a dp table from the base cases forward.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",templateIds:["dp-bottom-up"]},"dp-kadane":{id:"dp-kadane",name:"Kadane's algorithm",pattern:"Dynamic Programming",summary:"Maximum sum subarray. At each element, either extend the running sum or restart from it; track the best seen.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",templateIds:["dp-kadane"]},"dp-unbounded-knapsack":{id:"dp-unbounded-knapsack",name:"Unbounded knapsack",pattern:"Dynamic Programming",summary:"Items reusable: min coins, ways to make change, climb stairs. 1D dp over the target, looping capacity forward.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",templateIds:[]},"dp-01-knapsack":{id:"dp-01-knapsack",name:"0/1 knapsack",pattern:"Dynamic Programming",summary:"Each item used at most once: partition equal subset, target sum. dp over capacity, looping capacity backwards per item.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",templateIds:[]},"dp-sequences":{id:"dp-sequences",name:"DP, sequences",pattern:"Dynamic Programming",summary:"Longest increasing or common subsequence, edit distance. dp[i] over one sequence or dp[i][j] over prefixes of two.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",templateIds:[]},greedy:{id:"greedy",name:"Greedy",pattern:"Greedy",summary:"Jump game, gas station, partition labels. Take the locally best move in one pass when an exchange argument shows it is never worse.",docsUrl:"https://resources.devweekends.com/dsa-patterns/greedy",templateIds:[]},"bit-manipulation":{id:"bit-manipulation",name:"Bit manipulation",pattern:"Bit Manipulation",summary:"Single number among pairs, set bits, powers of two. Use XOR, masks, and shifts to work on bits directly in O(1) space.",docsUrl:"https://resources.devweekends.com/dsa-patterns/bit-manipulation",templateIds:["bitmanipulation-test-kth-bit","bitmanipulation-set-kth-bit","bitmanipulation-clear-kth-bit","bitmanipulation-toggle-kth-bit","bitmanipulation-get-rightmost-bit","bitmanipulation-count-set-bits","bitmanipulation-multiply-power-of-two","bitmanipulation-divide-power-of-two","bitmanipulation-check-power-of-two","bitmanipulation-swap-variables"]}}},nd=o=>String(o).padStart(2,"0");function _S({run:o}){const{started:g,steps:h,leaf:d,node:S}=o,R=h.length+1,k=g&&!d&&!S;return r.jsxs("nav",{className:O.log,"aria-label":"Your path so far",children:[r.jsxs("header",{className:O.logHead,children:[r.jsxs("p",{className:O.stripTitle,children:["Path log",r.jsxs("span",{className:O.stripValue,children:[h.length," answered"]})]}),r.jsx("p",{className:O.logHint,children:h.length>0?"Click a step to go back to that check.":"Each answer is written here as you go."})]}),r.jsxs("ol",{className:O.logRows,children:[h.map((L,H)=>r.jsx("li",{children:r.jsxs("button",{type:"button",className:O.row,"aria-label":`Back to question ${H+1}: ${L.question} You picked: ${L.option.cue}`,onClick:()=>o.backtrackTo(H),children:[r.jsx("span",{className:O.rowNum,"aria-hidden":"true",children:nd(H+1)}),r.jsxs("span",{className:O.rowText,children:[r.jsx("span",{className:O.rowQuestion,children:L.question}),r.jsx("span",{className:O.rowCue,children:L.option.cue})]}),r.jsx("span",{className:O.rowBack,"aria-hidden":"true",children:"Back"})]})},H)),!g&&r.jsx("li",{children:r.jsxs("div",{className:Kn(O.row,O.rowReady),children:[r.jsx("span",{className:O.rowNum,"aria-hidden":"true",children:"01"}),r.jsxs("span",{className:O.rowText,children:[r.jsx("span",{className:O.rowQuestion,children:"Ready"}),r.jsx("span",{className:O.rowLive,children:wi.nodes[wi.rootId].question})]})]})}),g&&S&&r.jsx("li",{"aria-current":"step",children:r.jsxs("div",{className:Kn(O.row,O.rowCurrent),children:[r.jsx("span",{className:O.rowNum,"aria-hidden":"true",children:nd(R)}),r.jsxs("span",{className:O.rowText,children:[r.jsxs("span",{className:O.rowQuestion,children:["Now, check ",R]}),r.jsx("span",{className:O.rowLive,children:S.question})]})]})}),d&&r.jsx("li",{"aria-current":"step",children:r.jsxs("div",{className:Kn(O.row,O.rowResult),children:[r.jsx("span",{className:O.rowNum,"aria-hidden":"true",children:"="}),r.jsxs("span",{className:O.rowText,children:[r.jsxs("span",{className:O.rowQuestion,children:["Result, ",d.pattern]}),r.jsx("span",{className:O.rowLive,children:d.name})]})]})}),k&&r.jsx("li",{"aria-current":"step",children:r.jsxs("div",{className:Kn(O.row,O.rowFault),children:[r.jsx("span",{className:O.rowNum,"aria-hidden":"true",children:"!"}),r.jsxs("span",{className:O.rowText,children:[r.jsx("span",{className:O.rowQuestion,children:"Fault"}),r.jsx("span",{className:O.rowLive,children:"This path leads nowhere"})]})]})}),!d&&!k&&r.jsx("li",{className:O.nextWrap,"aria-hidden":"true",children:r.jsxs("div",{className:O.nextCheck,children:[r.jsx("span",{className:Kn(O.rowNum,O.rowNumDashed),children:nd(R+1)}),r.jsx("span",{className:O.nextLabel,children:"Next check appears here"})]})})]})]})}const $p=`def backtrack(curr, OTHER_ARGUMENTS...):
    if (BASE_CASE):
        # TODO: modify answer
        return

    ans = 0

    for (ITERATE_OVER_INPUT):
        # TODO: modify current state
        ans += backtrack(curr, OTHER_ARGUMENTS...)
        # TODO: undo modification of current state

    return ans
`,nm=`const backtrack = (curr, OTHER_ARGUMENTS...) => {
    if (BASE_CASE) {
        // TODO: modify answer
        return
    }

    let ans = 0

    for (ITERATE_OVER_INPUT) {
        // TODO: modify current state
        ans += backtrack(curr, OTHER_ARGUMENTS...)
        // TODO: undo modification of current state
    }

    return ans
}
`,em=`public int backtrack(STATE curr, OTHER_ARGUMENTS...) {
    if (BASE_CASE) {
        // TODO: modify answer
        return 0;
    }

    int ans = 0;

    for (ITERATE_OVER_INPUT) {
        // TODO: modify current state
        ans += backtrack(curr, OTHER_ARGUMENTS...);
        // TODO: undo modification of current state
    }

    return ans;
}
`,tm=`int backtrack(STATE curr, OTHER_ARGUMENTS...) {
    if (BASE_CASE) {
        // TODO: modify answer
        return 0;
    }

    int ans = 0;

    for (ITERATE_OVER_INPUT) {
        // TODO: modify current state
        ans += backtrack(curr, OTHER_ARGUMENTS...);
        // TODO: undo modification of current state
    }

    return ans;
}
`,am=`def fn(arr, target):
    left = 0
    right = len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] == target:
            # TODO: logic
            return
        if arr[mid] > target:
            right = mid - 1
        else:
            left = mid + 1

    return left
`,im=`const fn = (arr, target) => {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (arr[mid] == target) {
            // TODO: logic
            return
        }

        if (arr[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return left
}
`,rm=`public int fn(int[] arr, int target) {
    int left = 0;
    int right = arr.length - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) {
            // TODO: logic
            return mid;
        }
        if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
`,lm=`#include <vector>

using namespace std;


int fn(vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size() - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) {
            // TODO: logic
            return mid;
        }
        if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
`,sm=`def fn(arr):
    def check(x):
        return BOOLEAN

    left = MINIMUM_POSSIBLE_ANSWER
    right = MAXIMUM_POSSIBLE_ANSWER

    while left <= right:
        mid = (left + right) // 2

        if check(mid):
            left = mid + 1
        else:
            right = mid - 1

    return right
`,om=`const fn = (arr) => {
    const check = (x) => {
        return BOOLEAN
    }

    let left = MINIMUM_POSSIBLE_ANSWER
    let right = MAXMIMUM_POSSIBLE_ANSWER

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (check(mid)) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return right
}
`,cm=`public int fn(int[] arr) {
    int left = MINIMUM_POSSIBLE_ANSWER;
    int right = MAXIMUM_POSSIBLE_ANSWER;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (check(mid)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return right;
}

public boolean check(int x) {
    return BOOLEAN
}
`,um=`#include <vector>

using namespace std;


bool check(int x) {
    return BOOLEAN;
}

int fn(vector<int>& arr) {
    int left = MINIMUM_POSSIBLE_ANSWER;
    int right = MAXIMUM_POSSIBLE_ANSWER;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (check(mid)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return right;
}
`,dm=`def fn(arr):
    def check(x):
        return BOOLEAN

    left = MINIMUM_POSSIBLE_ANSWER
    right = MAXIMUM_POSSIBLE_ANSWER

    while left <= right:
        mid = (left + right) // 2

        if check(mid):
            right = mid - 1
        else:
            left = mid + 1

    return left
`,fm=`const fn = (arr) => {
    const check = (x) => {
        return BOOLEAN
    }

    let left = MINIMUM_POSSIBLE_ANSWER
    let right = MAXMIMUM_POSSIBLE_ANSWER

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (check(mid)) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return left
}
`,hm=`public int fn(int[] arr) {
    int left = MINIMUM_POSSIBLE_ANSWER;
    int right = MAXIMUM_POSSIBLE_ANSWER;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (check(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

public boolean check(int x) {
    return BOOLEAN
}
`,gm=`#include <vector>

using namespace std;


bool check(int x) {
    return BOOLEAN;
}

int fn(vector<int>& arr) {
    int left = MINIMUM_POSSIBLE_ANSWER;
    int right = MAXIMUM_POSSIBLE_ANSWER;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (check(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
`,pm=`def fn(arr, target):
    left = 0
    right = len(arr)

    while left < right:
        mid = (left + right) // 2

        if arr[mid] >= target:
            right = mid
        else:
            left = mid + 1

    return left
`,mm=`const fn = (arr, target) => {
    let left = 0
    let right = arr.length

    while (left < right) {
        let mid = Math.floor((left + right) / 2)

        if (arr[mid] >= target) {
            right = mid
        } else {
            left = mid + 1
        }
    }

    return left
}
`,vm=`public int fn(int[] arr, int target) {
    int left = 0;
    int right = arr.length;

    while (left < right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
`,bm=`#include <vector>

using namespace std;


int fn(vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size();

    while (left < right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
`,ym=`def fn(arr, target):
    left = 0
    right = len(arr)

    while left < right:
        mid = (left + right) // 2

        if arr[mid] > target:
            right = mid
        else:
            left = mid + 1

    return left
`,xm=`const fn = (arr, target) => {
    let left = 0
    let right = arr.length

    while (left < right) {
        let mid = Math.floor((left + right) / 2)

        if (arr[mid] > target) {
            right = mid
        } else {
            left = mid + 1
        }
    }

    return left
}
`,_m=`public int fn(int[] arr, int target) {
    int left = 0;
    int right = arr.length;

    while (left < right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] > target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
`,Tm=`#include <vector>

using namespace std;


int fn(vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size();

    while (left < right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] > target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
`,Sm=`def is_power_of_two(num: int) -> bool:
    return (num & (num - 1)) == 0
`,jm=`const isPowerOfTwo = (num) => {
    return (num & (num - 1)) === 0
}
`,Nm=`public boolean isPowerOfTwo(int num) {
    return (num & (num - 1)) == 0;
}
`,wm=`bool is_power_of_two(int num) {
    return (num & (num - 1)) == 0;
}
`,Em=`def clear_kth_bit(num: int, k: int) -> int:
    return num & ~(1 << k)
`,Om=`const clearKthBit = (num, k) => {
    return num & ~(1 << k)
}
`,Am=`public int clearKthBit(int num, int k) {
    return num & ~(1 << k);
}
`,km=`int clear_kth_bit(int num, int k) {
    return num & ~(1 << k);
}
`,Mm=`def count_set_bits(num: int) -> int:
    return bin(num).count('1')
`,Rm=`const countSetBits = (num) => {
    return num.toString(2).split('1').length - 1
}
`,Cm=`public int countSetBits(int num) {
    int count = 0;

    while (num > 0) {
        count += num & 1;
        num >>= 1;
    }

    return count;
}
`,Lm=`int count_set_bits(int num) {
    int count = 0;

    while (num) {
        count += num & 1;
        num >>= 1;
    }

    return count;
}
`,Dm=`def divide_by_power_of_two(num: int, k: int) -> int:
    return num >> k
`,zm=`const divideByPowerOfTwo = (num, k) => {
    return num >> k;
}
`,Bm=`public int divideByPowerOfTwo(int num, int k) {
    return num >> k;
}
`,Um=`int divide_by_power_of_two(int num, int k) {
    return num >> k;
}
`,Hm=`def get_rightmost_set_bit(num: int) -> int:
    return num & -num
`,qm=`const getRightmostSetBit = (num) => {
    return num & -num
}
`,Gm=`public int getRightmostSetBit(int num) {
    return num & -num;
}
`,Ym=`int get_rightmost_set_bit(int num) {
    return num & -num;
}
`,Vm=`def multiply_by_power_of_two(num: int, k: int) -> int:
    return num << k
`,Im=`const multiplyByPowerOfTwo = (num, k) => {
    return num << k
}
`,Km=`public int multiplyByPowerOfTwo(int num, int k) {
    return num << k;
}
`,Qm=`int multiply_by_power_of_two(int num, int k) {
    return num << k;
}
`,Xm=`def set_kth_bit(num: int, k: int) -> int:
    return num | (1 << k)
`,Jm=`const setKthBit = (num, k) => {
    return num | (1 << k)
}
`,Zm=`public int setKthBit(int num, int k) {
    return num | (1 << k);
}
`,Fm=`int set_kth_bit(int num, int k) {
    return num | (1 << k);
}
`,Pm=`def swap_variables(num1: int, num2: int) -> tuple:
    num1 ^= num2
    num2 ^= num1
    num1 ^= num2
    return num1, num2
`,Wm=`const swapVariables = (num1, num2) => {
    num1 ^= num2
    num2 ^= num1
    num1 ^= num2
    return [num1, num2]
}
`,$m=`public int[] swapVariables(int num1, int num2) {
    num1 ^= num2;
    num2 ^= num1;
    num1 ^= num2;
    return new int[] { num1, num2 };
}
`,nv=`#include <tuple>

using namespace std;


tuple<int, int> swap_variables(int num1, int num2) {
    num1 ^= num2;
    num2 ^= num1;
    num1 ^= num2;
    return std::make_tuple(num1, num2);
}
`,ev=`def test_kth_bit(num: int, k: int) -> bool:
    return num & (1 << k) != 0
`,tv=`const testKthBit = (num, k) => {
    return num & (1 << k) !== 0
}
`,av=`public boolean testKthBit(int num, int k) {
    return (num & (1 << k)) != 0;
}
`,iv=`bool test_kth_bit(int num, int k) {
    return (num & (1 << k)) != 0;
}
`,rv=`def toggle_kth_bit(num: int, k: int) -> int:
    return num ^ (1 << k)
`,lv=`const toggleKthBit = (num, k) => {
    return num ^ (1 << k)
}
`,sv=`public int toggleKthBit(int num, int k) {
    return num ^ (1 << k);
}
`,ov=`int toggle_kth_bit(int num, int k) {
    return num ^ (1 << k);
}
`,cv=`def fn(arr):
    if BASE_CASE:
        return 0

    dp = [BASE_CASE] * (STATE_FOR_WHOLE_INPUT + 1)

    for STATE in range(SMALLEST_SUBPROBLEM, STATE_FOR_WHOLE_INPUT + 1):
        if BASE_CASE:
            dp[STATE] = BASE_CASE
        else:
            dp[STATE] = RECURRENCE_RELATION(STATE)

    return dp[STATE_FOR_WHOLE_INPUT]
`,uv=`const fn = (arr) => {
    const dp = new Array(STATE_FOR_WHOLE_INPUT + 1).fill(BASE_CASE)

    for (let state = SMALLEST_SUBPROBLEM; state <= STATE_FOR_WHOLE_INPUT; state++) {
        if (BASE_CASE) {
            dp[state] = BASE_CASE
        } else {
            dp[state] = RECURRENCE_RELATION(state)
        }
    }

    return dp[STATE_FOR_WHOLE_INPUT]
}
`,dv=`import java.util.Arrays;


public int fn(int[] arr) {
    if (BASE_CASE) {
        return 0;
    }

    int[] dp = new int[STATE_FOR_WHOLE_INPUT + 1];
    Arrays.fill(dp, BASE_CASE);

    for (int STATE = SMALLEST_SUBPROBLEM; STATE <= STATE_FOR_WHOLE_INPUT; STATE++) {
        if (BASE_CASE) {
            dp[STATE] = BASE_CASE;
        } else {
            dp[STATE] = RECURRENCE_RELATION(STATE);
        }
    }

    return dp[STATE_FOR_WHOLE_INPUT];
}
`,fv=`#include <vector>
#include <algorithm>

using namespace std;


int fn(int arr[], int size) {
    if (BASE_CASE) {
        return 0;
    }

    vector<int> dp(STATE_FOR_WHOLE_INPUT + 1, BASE_CASE);

    for (int state = SMALLEST_SUBPROBLEM; state <= STATE_FOR_WHOLE_INPUT; ++state) {
        if (BASE_CASE) {
            dp[state] = BASE_CASE;
        } else {
            dp[state] = RECURRENCE_RELATION(state);
        }
    }

    return dp[STATE_FOR_WHOLE_INPUT];
}
`,hv=`def kadane(arr: list[int]) -> int:
    curr_sub = max_sub = arr[0]

    for num in arr[1:]:
        curr_sub = max(curr_sub + num, num)
        max_sub = max(max_sub, curr_sub)

    return max_sub
`,gv=`const kadane = (arr) => {
    let currSub = arr[0]
    let maxSub = arr[0]

    for (let i = 1; i < arr.length; i++) {
        currSub = Math.max(currSub + arr[i], arr[i])
        maxSub = Math.max(maxSub, currSub)
    }

    return maxSub
}
`,pv=`public int kadane(int[] arr) {
    int currSub = arr[0];
    int maxSub = arr[0];

    for (int i = 1; i < arr.length; i++) {
        currSub = Math.max(currSub + arr[i], arr[i]);
        maxSub = Math.max(maxSub, currSub);
    }

    return maxSub;
}
`,mv=`#include <vector>
#include <algorithm>

using namespace std;


int kadane(vector<int>& arr) {
    int curr_sub = arr[0];
    int max_sub = arr[0];

    for (size_t i = 1; i < arr.size(); ++i) {
        curr_sub = max(curr_sub + arr[i], arr[i]);
        max_sub = max(max_sub, curr_sub);
    }

    return max_sub;
}
`,vv=`def fn(arr):
    @cache
    def dp(STATE):
        if BASE_CASE:
            return 0
        return RECURRENCE_RELATION(STATE)

    return dp(STATE_FOR_WHOLE_INPUT)
`,bv=`const fn = (arr) => {
    const dp = (STATE) => {
        if (BASE_CASE) {
            return 0
        }

        if (memo[STATE] != -1) {
            return memo[STATE]
        }

        let ans = RECURRENCE_RELATION(STATE)
        memo[STATE] = ans

        return ans
    }

    let memo = ARRAY_SIZED_ACCORDING_TO_STATE

    return dp(STATE_FOR_WHOLE_INPUT)
}
`,yv=`import java.util.HashMap;
import java.util.Map;


Map<STATE, Integer> memo = new HashMap<>();

public int fn(int[] arr) {
    return dp(STATE_FOR_WHOLE_INPUT, arr);
}

public int dp(STATE, int[] arr) {
    if (BASE_CASE) {
        return 0;
    }

    if (memo.contains(STATE)) {
        return memo.get(STATE);
    }

    int ans = RECURRENCE_RELATION(STATE);
    memo.put(STATE, ans);
    return ans;
}
`,xv=`#include <unordered_map>

using namespace std;


unordered_map<STATE, int> memo;

int fn(vector<int>& arr) {
    return dp(STATE_FOR_WHOLE_INPUT, arr);
}

int dp(STATE, vector<int>& arr) {
    if (BASE_CASE) {
        return 0;
    }

    if (memo.find(STATE) != memo.end()) {
        return memo[STATE];
    }

    int ans = RECURRENCE_RELATION(STATE);
    memo[STATE] = ans;
    return ans;
}
`,_v=`from typing import Any


class HashMap:
    def __init__(self) -> None:
        self.size = 100000
        self.bucket = [None] * self.size

    def _hash(self, key: int) -> int:
        return hash(key) % self.size

    def __setitem__(self, key: int, value: Any) -> None:
        self.bucket[self._hash(key)] = value

    def __getitem__(self, key: int) -> Any:
        return self.bucket[self._hash(key)]

    def __delitem__(self, key: int) -> None:
        self.bucket[self._hash(key)] = None
`,Tv=`class HashMap {
    constructor() {
        this.size = 100000
        this.bucket = new Array(this.size).fill(null)
    }

    _hash(key) {
        return key % this.size
    }

    setItem(key, value) {
        this.bucket[this._hash(key)] = value
    }

    getItem(key) {
        return this.bucket[this._hash(key)]
    }

    deleteItem(key) {
        this.bucket[this._hash(key)] = null
    }
}
`,Sv=`public class HashMap {
    private int size;
    private Object[] bucket;

    public HashMap() {
        size = 100000;
        bucket = new Object[size];
    }

    private int hash(int key) {
        return key % size;
    }

    public void put(int key, Object value) {
        bucket[hash(key)] = value;
    }

    public Object get(int key) {
        return bucket[hash(key)];
    }

    public void remove(int key) {
        bucket[hash(key)] = null;
    }
}
`,jv=`#include <iostream>
#include <vector>

using namespace std;


template<typename KeyType, typename ValueType>
class HashMap {
private:
    const size_t size = 100000;
    vector<pair<KeyType, ValueType>> buckets[size];

    size_t hash(const KeyType& key) {
        return hash<KeyType>{}(key) % size;
    }

public:
    HashMap() {}

    void setItem(const KeyType& key, const ValueType& value) {
        size_t index = hash(key);

        for (auto& pair : buckets[index]) {
            if (pair.first == key) {
                pair.second = value;
                return;
            }
        }

        buckets[index].emplace_back(key, value);
    }

    ValueType& getItem(const KeyType& key) {
        size_t index = hash(key);

        for (auto& pair : buckets[index]) {
            if (pair.first == key) {
                return pair.second;
            }
        }

        throw out_of_range("Key not found");
    }

    void delItem(const KeyType& key) {
        size_t index = hash(key);

        for (auto it = buckets[index].begin(); it != buckets[index].end(); ++it) {
            if (it->first == key) {
                buckets[index].erase(it);
                return;
            }
        }
    }
};
`,Nv=`class TrieNode:
    def __init__(self) -> None:
        self.children = {}
        self.is_word = False


class Trie:
    def __init__(self) -> None:
        self.root = TrieNode()

    def build(self, words: list[str]) -> None:
        for word in words:
            self.insert(word)

    def insert(self, word: str) -> None:
        node = self.root

        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]

        node.is_word = True

    def search(self, word: str) -> bool:
        node = self.root

        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]

        return node.is_word

    def starts_with(self, prefix: str) -> bool:
        node = self.root

        for char in prefix:
            if char not in node.children:
                return False
            node = node.children[char]

        return True

    def collect_words(self, node: TrieNode, prefix: str) -> list[str]:
        words = []

        if node.is_word:
            words.append(prefix)

        for char, child_node in node.children.items():
            words.extend(self.collect_words(child_node, prefix + char))

        return words

    def __repr__(self) -> str:
        return 'Trie:\\n' + self._print_trie(self.root)

    def _print_trie(self, node: TrieNode | None, level: int = 0, prefix: str = '') -> str:
        output = ''
        prefix_str = '    ' * level + prefix

        if not node:
            return output

        if node.is_word:
            output += prefix_str + ' ├─ ' + '(*)' + '\\n'

        for i, (char, child_node) in enumerate(node.children.items()):
            is_last = i == len(node.children) - 1
            marker = '└─ ' if is_last else '├─ '
            output += prefix_str + marker + char + '\\n'
            output += self._print_trie(child_node, level + 1, '    │' if not is_last else '     ')

        return output
`,wv=`class TrieNode {
    constructor() {
        this.children = {}
        this.isWord = false
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    build(words) {
        for (const word of words) {
            this.insert(word)
        }
    }

    insert(word) {
        let node = this.root

        for (const char of word) {
            if (!(char in node.children)) {
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }

        node.isWord = true
    }

    search(word) {
        let node = this.root

        for (const char of word) {
            if (!(char in node.children)) {
                return false
            }
            node = node.children[char]
        }

        return node.isWord
    }

    startsWith(prefix) {
        let node = this.root

        for (const char of prefix) {
            if (!(char in node.children)) {
                return false
            }
            node = node.children[char]
        }

        return true
    }

    collectWords(node, prefix) {
        const words = []

        if (node.isWord) {
            words.push(prefix)
        }

        for (const [char, childNode] of Object.entries(node.children)) {
            words.push(...this.collectWords(childNode, prefix + char))
        }

        return words
    }

    toString() {
        return 'Trie:\\n' + this._printTrie(this.root)
    }

    _printTrie(node, level = 0, prefix = '') {
        let output = ''
        const prefixStr = '    '.repeat(level) + prefix

        if (!node) {
            return output
        }

        if (node.isWord) {
            output += prefixStr + ' ├─ ' + '(*)' + '\\n'
        }

        const children = Object.entries(node.children)
        children.forEach(([char, childNode], i) => {
            const isLast = i === children.length - 1
            const marker = isLast ? '└─ ' : '├─ '
            output += prefixStr + marker + char + '\\n'
            output += this._printTrie(childNode, level + 1, isLast ? '     ' : '    │')
        })

        return output
    }
}
`,Ev=`import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


class TrieNode {
    Map<Character, TrieNode> children;
    boolean isWord;

    public TrieNode() {
        this.children = new HashMap<>();
        this.isWord = false;
    }
}

class Trie {
    TrieNode root;

    public Trie() {
        this.root = new TrieNode();
    }

    public void build(String[] words) {
        for (String word : words) {
            insert(word);
        }
    }

    public void insert(String word) {
        TrieNode node = root;

        for (char ch : word.toCharArray()) {
            if (!node.children.containsKey(ch)) {
                node.children.put(ch, new TrieNode());
            }
            node = node.children.get(ch);
        }

        node.isWord = true;
    }

    public boolean search(String word) {
        TrieNode node = root;

        for (char ch : word.toCharArray()) {
            if (!node.children.containsKey(ch)) {
                return false;
            }
            node = node.children.get(ch);
        }

        return node.isWord;
    }

    public boolean startsWith(String prefix) {
        TrieNode node = root;

        for (char ch : prefix.toCharArray()) {
            if (!node.children.containsKey(ch)) {
                return false;
            }
            node = node.children.get(ch);
        }

        return true;
    }

    public List<String> collectWords(TrieNode node, String prefix) {
        List<String> words = new ArrayList<>();

        if (node.isWord) {
            words.add(prefix);
        }

        for (Map.Entry<Character, TrieNode> entry : node.children.entrySet()) {
            words.addAll(collectWords(entry.getValue(), prefix + entry.getKey()));
        }

        return words;
    }

    @Override
    public String toString() {
        return "Trie:\\n" + printTrie(root, 0, null);
    }

    private String printTrie(TrieNode node, int level, String prefix) {
        StringBuilder output = new StringBuilder();
        String prefixStr = "\\t".repeat(level) + prefix;

        if (node == null) {
            return output.toString();
        }

        if (node.isWord) {
            output.append(prefixStr).append(" ├─ ").append("(*)").append("\\n");
        }

        int i = 0;

        for (Map.Entry<Character, TrieNode> entry : node.children.entrySet()) {
            boolean isLast = i == node.children.size() - 1;
            String marker = isLast ? "└─ " : "├─ ";
            output.append(prefixStr).append(marker).append(entry.getKey()).append("\\n");
            output.append(printTrie(entry.getValue(), level + 1, isLast ? "    │" : "     "));
            i++;
        }

        return output.toString();
    }
}
`,Ov=`#include <iostream>
#include <unordered_map>
#include <vector>
#include <memory>

using namespace std;


class TrieNode {
public:
    unordered_map<char, shared_ptr<TrieNode>> children;
    bool is_word;

    TrieNode() : is_word(false) {}
};

class Trie {
private:
    shared_ptr<TrieNode> root;

public:
    Trie() : root(make_shared<TrieNode>()) {}

    void build(const vector<string>& words) {
        for (const auto& word : words) {
            insert(word);
        }
    }

    void insert(const string& word) {
        shared_ptr<TrieNode> node = root;

        for (char ch : word) {
            if (node->children.find(ch) == node->children.end()) {
                node->children[ch] = make_shared<TrieNode>();
            }
            node = node->children[ch];
        }

        node->is_word = true;
    }

    bool search(const string& word) {
        shared_ptr<TrieNode> node = root;

        for (char ch : word) {
            if (node->children.find(ch) == node->children.end()) {
                return false;
            }
            node = node->children[ch];
        }

        return node->is_word;
    }

    bool startsWith(const string& prefix) {
        shared_ptr<TrieNode> node = root;

        for (char ch : prefix) {
            if (node->children.find(ch) == node->children.end()) {
                return false;
            }
            node = node->children[ch];
        }

        return true;
    }

    vector<string> collectWords(shared_ptr<TrieNode> node, const string& prefix) {
        vector<string> words;

        if (node->is_word) {
            words.push_back(prefix);
        }

        for (const auto& [ch, childNode] : node->children) {
            auto childWords = collectWords(childNode, prefix + ch);
            words.insert(words.end(), childWords.begin(), childWords.end());
        }

        return words;
    }

    vector<string> collectWords() {
        return collectWords(root, "");
    }
};
`,Av=`class UnionFind:
    def __init__(self, n: int) -> None:
        self.root = list(range(n))

    def find(self, a: int) -> int:
        return a if a == self.root[a] else self.find(self.root[a])

    def union(self, a: int, b: int) -> None:
        self.root[self.find(a)] = self.find(b)

    def connected(self, a: int, b: int) -> bool:
        return self.find(a) == self.find(b)

    def __repr__(self) -> str:
        n = len(self.root)
        lines = []
        components = {}

        for i in range(n):
            root = self.find(i)

            if root not in components:
                components[root] = []

            components[root].append(i)

        for component in components.values():
            lines.append(' - '.join(f'({node})' for node in component))

        return '\\n'.join(lines)
`,kv=`class UnionFind {
    constructor(n) {
        this.root = [...Array(n).keys()]
    }

    find(a) {
        return a === this.root[a] ? a : this.find(this.root[a])
    }

    union(a, b) {
        this.root[this.find(a)] = this.find(b)
    }

    connected(a, b) {
        return this.find(a) === this.find(b)
    }

    toString() {
        const n = this.root.length
        const lines = []
        const components = {}

        for (let i = 0; i < n; i++) {
            const root = this.find(i)

            if (!(root in components)) {
                components[root] = []
            }

            components[root].push(i)
        }

        for (const component of Object.values(components)) {
            lines.push(\`(\${component.join(' - ')})\`)
        }

        return lines.join('\\n')
    }
}
`,Mv=`import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


public class UnionFind {
    private int[] root;

    public UnionFind(int n) {
        this.root = new int[n];
        for (int i = 0; i < n; i++) {
            this.root[i] = i;
        }
    }

    public int find(int a) {
        if (a == root[a]) {
            return a;
        }
        return root[a] = find(root[a]);
    }

    public void union(int a, int b) {
        root[find(a)] = find(b);
    }

    public boolean connected(int a, int b) {
        return find(a) == find(b);
    }

    @Override
    public String toString() {
        int n = root.length;
        List<List<Integer>> components = new ArrayList<>();
        Map<Integer, List<Integer>> componentMap = new HashMap<>();

        for (int i = 0; i < n; i++) {
            int root = find(i);

            if (!componentMap.containsKey(root)) {
                componentMap.put(root, new ArrayList<>());
            }

            componentMap.get(root).add(i);
        }

        StringBuilder sb = new StringBuilder();

        for (List<Integer> component : componentMap.values()) {
            sb.append(" - ").append(component);
        }

        return sb.toString();
    }
}
`,Rv=`#include <iostream>
#include <string>
#include <vector>

using namespace std;


class UnionFind {
private:
    vector<int> root;

public:
    UnionFind(int n) : root(n) {
        for (int i = 0; i < n; ++i) {
            root[i] = i;
        }
    }

    int find(int a) {
        return a == root[a] ? a : root[a] = find(root[a]);
    }

    void unionSets(int a, int b) {
        root[find(a)] = find(b);
    }

    bool connected(int a, int b) {
        return find(a) == find(b);
    }

    string toString() {
        int n = root.size();
        vector<vector<int>> components(n);

        for (int i = 0; i < n; ++i) {
            components[find(i)].push_back(i);
        }

        string result;

        for (const auto& component : components) {
            if (!component.empty()) {
                for (int node : component) {
                    result += "(" + to_string(node) + ") - ";
                }
                result.pop_back();
                result.pop_back();
                result += "\\n";
            }
        }

        return result;
    }
};
`,Cv=`class UnionFind:
    def __init__(self, n: int) -> None:
        self.root = list(range(n))
        self.rank = [1] * n

    def find(self, a: int) -> int:
        return a if a == self.root[a] else self.find(self.root[a])

    def union(self, a: int, b: int) -> None:
        root_a = self.find(a)
        root_b = self.find(b)

        if root_a != root_b:
            if self.rank[root_a] < self.rank[root_b]:
                self.root[root_a] = root_b
            elif self.rank[root_a] > self.rank[root_b]:
                self.root[root_b] = root_a
            else:
                self.root[root_b] = root_a
                self.rank[root_a] += 1

    def connected(self, a: int, b: int) -> bool:
        return self.find(a) == self.find(b)

    def __repr__(self) -> str:
        n = len(self.root)
        lines = []
        components = {}

        for i in range(n):
            root = self.find(i)

            if root not in components:
                components[root] = []

            components[root].append(i)

        for component in components.values():
            lines.append(' - '.join(f'({node})' for node in component))

        return '\\n'.join(lines)
`,Lv=`class UnionFind {
    constructor(n) {
        this.root = [...Array(n).keys()]
        this.rank = Array(n).fill(1)
    }

    find(a) {
        return a === this.root[a] ? a : this.find(this.root[a])
    }

    union(a, b) {
        const rootA = this.find(a)
        const rootB = this.find(b)

        if (rootA !== rootB) {
            if (this.rank[rootA] < this.rank[rootB]) {
                this.root[rootA] = rootB
            } else if (this.rank[rootA] > this.rank[rootB]) {
                this.root[rootB] = rootA
            } else {
                this.root[rootB] = rootA
                this.rank[rootA]++
            }
        }
    }

    connected(a, b) {
        return this.find(a) === this.find(b)
    }

    toString() {
        const n = this.root.length
        const lines = []
        const components = {}

        for (let i = 0; i < n; i++) {
            const root = this.find(i)

            if (!(root in components)) {
                components[root] = []
            }

            components[root].push(i)
        }

        for (const component of Object.values(components)) {
            lines.push(component.map(node => \`(\${node})\`).join(' - '))
        }

        return lines.join('\\n')
    }
}
`,Dv=`import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


class UnionFind {
    int[] root;
    int[] rank;

    public UnionFind(int n) {
        this.root = new int[n];
        this.rank = new int[n];

        for (int i = 0; i < n; i++) {
            this.root[i] = i;
            this.rank[i] = 1;
        }
    }

    public int find(int a) {
        if (a == root[a]) {
            return a;
        }
        return root[a] = find(root[a]);
    }

    public void union(int a, int b) {
        int rootA = find(a);
        int rootB = find(b);

        if (rootA != rootB) {
            if (rank[rootA] < rank[rootB]) {
                root[rootA] = rootB;
            } else if (rank[rootA] > rank[rootB]) {
                root[rootB] = rootA;
            } else {
                root[rootB] = rootA;
                rank[rootA]++;
            }
        }
    }

    public boolean connected(int a, int b) {
        return find(a) == find(b);
    }

    @Override
    public String toString() {
        int n = root.length;
        Map<Integer, List<Integer>> componentMap = new HashMap<>();

        for (int i = 0; i < n; i++) {
            int root = find(i);

            if (!componentMap.containsKey(root)) {
                componentMap.put(root, new ArrayList<>());
            }

            componentMap.get(root).add(i);
        }

        StringBuilder sb = new StringBuilder();

        for (List<Integer> component : componentMap.values()) {
            sb.append(" - ").append(component);
        }

        return sb.toString();
    }
}
`,zv=`#include <iostream>
#include <string>
#include <vector>

using namespace std;


class UnionFind {
private:
    vector<int> root;
    vector<int> rank;

public:
    UnionFind(int n) : root(n), rank(n, 1) {
        for (int i = 0; i < n; ++i) {
            root[i] = i;
        }
    }

    int find(int a) {
        return a == root[a] ? a : root[a] = find(root[a]);
    }

    void unionSets(int a, int b) {
        int rootA = find(a);
        int rootB = find(b);

        if (rootA != rootB) {
            if (rank[rootA] < rank[rootB]) {
                root[rootA] = rootB;
            } else if (rank[rootA] > rank[rootB]) {
                root[rootB] = rootA;
            } else {
                root[rootB] = rootA;
                rank[rootA]++;
            }
        }
    }

    bool connected(int a, int b) {
        return find(a) == find(b);
    }

    string toString() {
        int n = root.size();
        vector<vector<int>> components(n);

        for (int i = 0; i < n; ++i) {
            components[find(i)].push_back(i);
        }

        string result;

        for (const auto& component : components) {
            if (!component.empty()) {
                for (int node : component) {
                    result += "(" + to_string(node) + ") - ";
                }
                result.pop_back();
                result.pop_back();
                result += "\\n";
            }
        }

        return result;
    }
};
`,Bv=`def bellman_ford(n: int, edges: list[tuple[int, int, int]], source: int) -> list[int]:
    distances = [float('inf')] * n
    distances[source] = 0

    for _ in range(n - 1):
        for u, v, w in edges:
            if distances[u] != float('inf') and distances[u] + w < distances[v]:
                distances[v] = distances[u] + w

    for u, v, w in edges:
        if distances[u] != float('inf') and distances[u] + w < distances[v]:
            return []

    return distances
`,Uv=`const bellmanFord = (n, edges, source) => {
    let distances = new Array(n).fill(Infinity)
    distances[source] = 0

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < edges.length; j++) {
            let [u, v, w] = edges[j]

            if (distances[u] !== Infinity && distances[u] + w < distances[v]) {
                distances[v] = distances[u] + w
            }
        }
    }

    for (let i = 0; i < edges.length; i++) {
        let [u, v, w] = edges[i]

        if (distances[u] !== Infinity && distances[u] + w < distances[v]) {
            return []
        }
    }

    return distances
}
`,Hv=`import java.util.Arrays;
import java.util.List;


public int[] bellmanFord(int n, List<int[]> edges, int source) {
    int[] distances = new int[n];
    Arrays.fill(distances, Integer.MAX_VALUE);
    distances[source] = 0;

    for (int i = 0; i < n - 1; i++) {
        for (int[] edge : edges) {
            int u = edge[0];
            int v = edge[1];
            int w = edge[2];

            if (distances[u] != Integer.MAX_VALUE && distances[u] + w < distances[v]) {
                distances[v] = distances[u] + w;
            }
        }
    }

    for (int[] edge : edges) {
        int u = edge[0];
        int v = edge[1];
        int w = edge[2];

        if (distances[u] != Integer.MAX_VALUE && distances[u] + w < distances[v]) {
            return new int[]{};
        }
    }

    return distances;
}
`,qv=`#include <vector>
#include <utility>
#include <limits>

using namespace std;


vector<int> bellman_ford(int n, vector<pair<pair<int, int>, int>>& edges, int source) {
    vector<int> distances(n, numeric_limits<int>::max());
    distances[source] = 0;

    for (int i = 0; i < n - 1; ++i) {
        for (const auto& edge : edges) {
            int u = edge.first.first;
            int v = edge.first.second;
            int w = edge.second;

            if (distances[u] != numeric_limits<int>::max() && distances[u] + w < distances[v]) {
                distances[v] = distances[u] + w;
            }
        }
    }

    for (const auto& edge : edges) {
        int u = edge.first.first;
        int v = edge.first.second;
        int w = edge.second;

        if (distances[u] != numeric_limits<int>::max() && distances[u] + w < distances[v]) {
            return vector<int>();
        }
    }

    return distances;
}
`,Gv=`from collections import deque


def fn(graph):
    que = deque([START_NODE])
    seen = {START_NODE}
    ans = 0

    while que:
        node = que.popleft()
        # TODO: logic
        for neighbor in graph[node]:
            if neighbor not in seen:
                seen.add(neighbor)
                que.append(neighbor)

    return ans
`,Yv=`const fn = (graph) => {
    let que = [START_NODE]
    let seen = new Set([START_NODE])
    let ans = 0

    while (que.length) {
        let currentLength = que.length
        let nextQue = []

        for (let i = 0; i < currentLength; i++) {
            let node = que[i]
            // TODO: logic
            for (const neighbor of graph[node]) {
                if (!seen.has(neighbor)) {
                    seen.add(neighbor)
                    nextQue.push(neighbor)
                }
            }
        }

        que = nextQue
    }

    return ans
}
`,Vv=`import java.util.ArrayList;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Queue;
import java.util.Set;


public int fn(int[][] graph) {
    Queue<Integer> que = new LinkedList<>();
    Set<Integer> seen = new HashSet<>();
    que.offer(START_NODE);
    seen.add(START_NODE);
    int ans = 0;

    while (!que.isEmpty()) {
        int node = que.remove();
        // TODO: Logic
        for (int neighbor: graph[node]) {
            if (!seen.contains(neighbor)) {
                seen.add(neighbor);
                que.add(neighbor);
            }
        }
    }

    return ans;
}
`,Iv=`#include <queue>
#include <unordered_set>
#include <vector>

using namespace std;


int fn(vector<vector<int>>& graph) {
    queue<int> que;
    unordered_set<int> seen;
    que.push(START_NODE);
    seen.insert(START_NODE);
    int ans = 0;

    while (!que.empty()) {
        int node = que.front();
        que.pop();
        // TODO: logic
        for (int neighbor: graph[node]) {
            if (seen.find(neighbor) == seen.end()) {
                seen.insert(neighbor);
                que.push(neighbor);
            }
        }
    }
}
`,Kv=`def fn(graph):
    stack = [START_NODE]
    seen = {START_NODE}
    ans = 0

    while stack:
        node = stack.pop()
        # TODO: logic
        for neighbor in graph[node]:
            if neighbor not in seen:
                seen.add(neighbor)
                stack.append(neighbor)

    return ans
`,Qv=`const fn = (graph) => {
    let stack = [START_NODE]
    let seen = new Set([START_NODE])
    let ans = 0

    while (stack.length) {
        let node = stack.pop()
        // TODO: logic
        for (const neighbor of graph[node]) {
            if (!seen.has(neighbor)) {
                seen.add(neighbor)
                stack.push(neighbor)
            }
        }
    }

    return ans
}
`,Xv=`import java.util.Stack;
import java.util.HashSet;
import java.util.Set;


public int fn(int[][] graph) {
    Stack<Integer> stack = new Stack<>();
    Set<Integer> seen = new HashSet<>();
    stack.push(START_NODE);
    seen.add(START_NODE);
    int ans = 0;

    while (!stack.empty()) {
        int node = stack.pop();
        // TODO: logic
        for (int neighbor: graph[node]) {
            if (!seen.contains(neighbor)) {
                seen.add(neighbor);
                stack.push(neighbor);
            }
        }
    }

    return ans;
}
`,Jv=`#include <stack>
#include <unordered_set>
#include <vector>

using namespace std;


int fn(vector<vector<int>>& graph) {
    stack<int> stack;
    unordered_set<int> seen;
    stack.push(START_NODE);
    seen.insert(START_NODE);
    int ans = 0;

    while (!stack.empty()) {
        int node = stack.top();
        stack.pop();
        // TODO: logic
        for (int neighbor: graph[node]) {
            if (seen.find(neighbor) == seen.end()) {
                seen.insert(neighbor);
                stack.push(neighbor);
            }
        }
    }
}
`,Zv=`def fn(graph):
    def dfs(node):
        ans = 0
        # TODO: logic
        for neighbor in graph[node]:
            if neighbor not in seen:
                seen.add(neighbor)
                ans += dfs(neighbor)

        return ans

    seen = {START_NODE}

    return dfs(START_NODE)
`,Fv=`const fn = (graph) => {
    const dfs = (node) => {
        let ans = 0
        // TODO: logic
        for (const neighbor of graph[node]) {
            if (!seen.has(neighbor)) {
                seen.add(neighbor)
                ans += dfs(neighbor)
            }
        }

        return ans
    }

    let seen = new Set([START_NODE])

    return dfs(START_NODE)
}
`,Pv=`import java.util.HashSet;
import java.util.Set;


Set<Integer> seen = new HashSet<>();

public int fn(int[][] graph) {
    seen.add(START_NODE);
    return dfs(START_NODE, graph);
}

public int dfs(int node, int[][] graph) {
    int ans = 0;
    // TODO: logic
    for (int neighbor: graph[node]) {
        if (!seen.contains(neighbor)) {
            seen.add(neighbor);
            ans += dfs(neighbor, graph);
        }
    }

    return ans;
}
`,Wv=`#include <unordered_set>
#include <vector>

using namespace std;


unordered_set<int> seen;

int fn(vector<vector<int>>& graph) {
    seen.insert(START_NODE);
    return dfs(START_NODE, graph);
}

int dfs(int node, vector<vector<int>>& graph) {
    int ans = 0;
    // TODO: logic
    for (int neighbor: graph[node]) {
        if (seen.find(neighbor) == seen.end()) {
            seen.insert(neighbor);
            ans += dfs(neighbor, graph);
        }
    }

    return ans;
}
`,$v=`from heapq import heappop, heappush


def dijkstras(graph: list[list[tuple[int, int]]], source: int) -> list[int]:
    n = len(graph)
    distances = [float('inf')] * n
    distances[source] = 0
    heap = [(0, source)]

    while heap:
        curr_dist, node = heappop(heap)

        if curr_dist > distances[node]:
            continue

        for neighbor, weight in graph[node]:
            dist = curr_dist + weight

            if dist < distances[neighbor]:
                distances[neighbor] = dist
                heappush(heap, (dist, neighbor))

    return distances
`,n1=`/*
    JavaScript lacks built-in support for heaps.
    Try using a language that doesn't hate you, like Python.
*/
`,e1=`import java.util.Arrays;
import java.util.Comparator;
import java.util.PriorityQueue;
import java.util.Queue;
import java.util.List;


public int[] dijkstras(List<List<int[]>> graph, int source) {
    int n = graph.size();
    int[] distances = new int[n];
    Arrays.fill(distances, Integer.MAX_VALUE);
    distances[source] = 0;

    PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[1]));
    pq.offer(new int[]{source, 0});

    while (!pq.isEmpty()) {
        int[] curr = pq.poll();
        int node = curr[0];
        int dist = curr[1];

        if (dist > distances[node]) {
            continue;
        }

        for (int[] edge : graph.get(node)) {
            int neighbor = edge[0];
            int weight = edge[1];
            int newDist = dist + weight;

            if (newDist < distances[neighbor]) {
                distances[neighbor] = newDist;
                pq.offer(new int[]{neighbor, newDist});
            }
        }
    }

    return distances;
}
`,t1=`#include <limits>
#include <queue>
#include <utility>
#include <vector>

using namespace std;


vector<int> dijkstra(vector<vector<pair<int, int>>>& graph, int source) {
    int n = graph.size();
    vector<int> distances(n, INT_MAX);
    distances[source] = 0;

    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> heap;
    heap.push({0, source});

    while (!heap.empty()) {
        int currDist = heap.top().first;
        int node = heap.top().second;
        heap.pop();

        if (currDist > distances[node]) {
            continue;
        }

        for (pair<int, int> edge : graph[node]) {
            int neighbor = edge.first;
            int weight = edge.second;
            int dist = currDist + weight;

            if (dist < distances[neighbor]) {
                distances[neighbor] = dist;
                heap.push({dist, neighbor});
            }
        }
    }

    return distances;
}
`,a1=`from collections import defaultdict, deque


def kahn_topological_sort(graph: dict[int, list[int]]) -> list[int]:
    result = []
    indegree = defaultdict(int)

    for vertices in graph.values():
        for v in vertices:
            indegree[v] += 1

    que = deque([node for node in graph if not indegree[node]])

    while que:
        node = que.popleft()
        result.append(node)

        for neighbor in graph[node]:
            indegree[neighbor] -= 1

            if not indegree[neighbor]:
                que.append(neighbor)

    return result if len(result) == len(graph) else []
`,i1=`const kahnTopologicalSort = (graph) => {
    const result = []
    const queue = []
    const indegree = new Map()

    for (let nodes of Object.values(graph)) {
        for (let node of nodes) {
            if (indegree.has(node)) {
                indegree.set(node, indegree.get(node) + 1)
            } else {
                indegree.set(node, 1)
            }
        }
    }

    for (let node of Object.keys(graph)) {
        if (!indegree.has(node)) {
            queue.push(node)
        }
    }

    while (queue.length > 0) {
        const node = queue.shift()
        result.push(node)

        if (graph[node]) {
            for (let neighbor of graph[node]) {
                indegree.set(neighbor, indegree.get(neighbor) - 1)

                if (indegree.get(neighbor) === 0) {
                    queue.push(neighbor)
                }
            }
        }
    }

    return result.length === Object.keys(graph).length ? result : []
}
`,r1=`import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Queue;


public static List<Integer> kahnTopologicalSort(Map<Integer, List<Integer>> graph) {
    List<Integer> result = new ArrayList<>();
    Map<Integer, Integer> indegree = new HashMap<>();
    Queue<Integer> que = new LinkedList<>();

    for (List<Integer> vertices : graph.values()) {
        for (int v : vertices) {
            indegree.put(v, indegree.getOrDefault(v, 0) + 1);
        }
    }

    for (Integer node : graph.keySet()) {
        if (!indegree.containsKey(node)) {
            que.offer(node);
        }
    }

    while (!que.isEmpty()) {
        int node = que.poll();
        result.add(node);

        if (graph.containsKey(node)) {
            for (int neighbor : graph.get(node)) {
                indegree.put(neighbor, indegree.get(neighbor) - 1);

                if (indegree.get(neighbor) == 0) {
                    que.offer(neighbor);
                }
            }
        }
    }

    if (result.size() != graph.size()) {
        return new ArrayList<>();
    }

    return result;
}
`,l1=`#include <vector>
#include <unordered_map>
#include <queue>

using namespace std;


vector<int> kahn_topological_sort(unordered_map<int, vector<int>>& graph) {
    vector<int> result;
    unordered_map<int, int> indegree;

    for (auto& [node, neighbors] : graph) {
        for (int neighbor : neighbors) {
            indegree[neighbor]++;
        }
    }

    queue<int> que;

    for (auto& [node, _] : graph) {
        if (indegree[node] == 0) {
            que.push(node);
        }
    }

    while (!que.empty()) {
        int node = que.front();
        que.pop();
        result.push_back(node);

        for (int neighbor : graph[node]) {
            indegree[neighbor]--;
            if (indegree[neighbor] == 0) {
                que.push(neighbor);
            }
        }
    }

    return (result.size() == graph.size()) ? result : vector<int>();
}
`,s1=`def kruskal_mst(n: int, edges: list[tuple[int, int, int]]) -> list[tuple[int, int, int]]:
    mst = []
    uf = UnionFind(n)
    edges.sort()

    for w, u, v in edges:
        if not uf.connected(u, v):
            uf.union(u, v)
            mst.append((w, u, v))

    return mst
`,o1=`const kruskalMst = (n, edges) => {
    let mst = []
    let uf = new UnionFind(n)

    edges.sort((a, b) => a[0] - b[0])

    for (let i = 0; i < edges.length; i++) {
        let [w, u, v] = edges[i]

        if (!uf.connected(u, v)) {
            uf.union(u, v)
            mst.push([w, u, v])
        }
    }

    return mst
}
`,c1=`import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


public List<int[]> kruskalMST(int n, List<int[]> edges) {
    List<int[]> mst = new ArrayList<>();
    UnionFind uf = new UnionFind(n);
    Collections.sort(edges, (a, b) -> Integer.compare(a[0], b[0]));

    for (int[] edge : edges) {
        int weight = edge[0];
        int u = edge[1];
        int v = edge[2];

        if (!uf.connected(u, v)) {
            uf.union(u, v);
            mst.add(edge);
        }
    }

    return mst;
}
`,u1=`#include <vector>
#include <algorithm>

using namespace std;


vector<tuple<int, int, int>> kruskal_mst(int n, vector<tuple<int, int, int>>& edges) {
    vector<tuple<int, int, int>> mst;
    UnionFind uf(n);
    sort(edges.begin(), edges.end());

    for (auto& [w, u, v] : edges) {
        if (!uf.connected(u, v)) {
            uf.unionNodes(u, v);
            mst.emplace_back(w, u, v);
        }
    }

    return mst;
}
`,d1=`from heapq import heappop


def prim_mst(n: int, edges: list[tuple[int, int, int]]) -> list[tuple[int, int, int]]:
    mst = []
    uf = UnionFind(n)
    edges.sort()

    while edges:
        w, u, v = heappop(edges)

        if not uf.connected(u, v):
            uf.union(u, v)
            mst.append((w, u, v))

    return mst
`,f1=`/*
    JavaScript lacks built-in support for heaps.
    Try using a language that doesn't hate you, like Python.
*/
`,h1=`import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.PriorityQueue;


public List<int[]> primMST(int n, List<int[]> edges) {
    List<int[]> mst = new ArrayList<>();
    UnionFind uf = new UnionFind(n);
    PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(edge -> edge[0]));

    for (int[] edge : edges) {
        pq.offer(edge);
    }

    while (!pq.isEmpty()) {
        int[] edge = pq.poll();
        int w = edge[0];
        int u = edge[1];
        int v = edge[2];

        if (!uf.connected(u, v)) {
            uf.union(u, v);
            mst.add(edge);
        }
    }

    return mst;
}
`,g1=`#include <vector>
#include <queue>
#include <algorithm>

using namespace std;


vector<tuple<int, int, int>> prim_mst(int n, vector<tuple<int, int, int>>& edges) {
    vector<tuple<int, int, int>> mst;
    UnionFind uf(n);
    make_heap(edges.begin(), edges.end());

    while (!edges.empty()) {
        auto [w, u, v] = edges.front();
        pop_heap(edges.begin(), edges.end());
        edges.pop_back();

        if (!uf.connected(u, v)) {
            uf.unionNodes(u, v);
            mst.emplace_back(w, u, v);
        }
    }

    return mst;
}
`,p1=`from collections import defaultdict


def fn(arr, k):
    counts = defaultdict(int)
    counts[0] = 1
    ans = curr = 0

    for num in arr:
        # TODO: logic to change curr
        ans += counts[curr - k]
        counts[curr] += 1

    return ans
`,m1=`const fn = (arr, k) => {
    let counts = new Map()
    counts.set(0, 1)
    let ans = 0
    let curr = 0

    for (const num of arr) {
        // TODO: logic to change curr
        ans += counts.get(curr - k) || 0
        counts.set(curr, (counts.get(curr) || 0) + 1)
    }

    return ans
}
`,v1=`import java.util.HashMap;
import java.util.Map;


public int fn(int[] arr, int k) {
    Map<Integer, Integer> counts = new HashMap<>();
    counts.put(0, 1);
    int ans = 0;
    int curr = 0;

    for (int num: arr) {
        // TODO: logic to change curr
        ans += counts.getOrDefault(curr - k, 0);
        counts.put(curr, counts.getOrDefault(curr, 0) + 1);
    }

    return ans;
}
`,b1=`#include <vector>
#include <unordered_map>

using namespace std;


int fn(vector<int>& arr, int k) {
    unordered_map<int, int> counts;
    counts[0] = 1;
    int ans = 0;
    int curr = 0;

    for (int num : arr) {
        // TODO: logic to change curr
        ans += counts[curr - k];
        counts[curr]++;
    }

    return ans;
}
`,y1=`def fn(arr):
    window = set()
    ans = 0
    left = 0

    for right, ELEMENT in enumerate(arr):
        # TODO: add arr[right] to window

        while WINDOW_CONDITION_BROKEN:
            # TODO: remove arr[left] from window
            left += 1

        # TODO: update ans

    return ans
`,x1=`function fn(arr) {
    let window = new Set()
    let ans = 0
    let left = 0

    for (let right = 0; right < arr.length; right++) {
        // TODO: add arr[right] to window

        while (WINDOW_CONDITION_BROKEN) {
            // TODO: remove arr[left] from window
            left += 1
        }

        // TODO: update ans
    }

    return ans
}
`,_1=`import java.util.HashSet;
import java.util.Set;


public int fn(int[] arr) {
    Set<Integer> window = new HashSet<>();
    int ans = 0;
    int left = 0;

    for (int right = 0; right < arr.length; right++) {
        // TODO: add arr[right] to window

        while (WINDOW_CONDITION_BROKEN) {
            // TODO: remove arr[left] from window
            left++;
        }

        // TODO: update ans
    }

    return ans;
}
`,T1=`#include <vector>
#include <unordered_set>

using namespace std;


int fn(vector<int>& arr) {
    unordered_set<int> window;
    int ans = 0;
    int left = 0;

    for (int right = 0; right < arr.size(); right++) {
        // TODO: add arr[right] to window

        while (WINDOW_CONDITION_BROKEN) {
            // TODO: remove arr[left] from window
            left++;
        }

        // TODO: update ans
    }

    return ans;
}
`,S1=`from heapq import heappop, heappush


def fn(arr, k):
    heap = []

    for num in arr:
        # TODO: logic to push onto heap according to problem's criteria
        heappush(heap, (CRITERIA, num))

        if len(heap) > k:
            heappop(heap)

    return [num for num in heap]
`,j1=`/*
    JavaScript lacks built-in support for heaps.
    Try using a language that doesn't hate you, like Python.
*/
`,N1=`import java.util.PriorityQueue;


public int[] fn(int[] arr, int k) {
    PriorityQueue<Integer> heap = new PriorityQueue<>(CRITERIA);

    for (int num: arr) {
        // TODO: logic to push onto heap according to problem's criteria
        heap.add(num);

        if (heap.size() > k) {
            heap.remove();
        }
    }

    int[] ans = new int[k];

    for (int i = 0; i < k; i++) {
        ans[i] = heap.remove();
    }

    return ans;
}
`,w1=`#include <vector>
#include <queue>

using namespace std;


vector<int> fn(vector<int>& arr, int k) {
    priority_queue<int, vector<int>, greater<int>> min_heap;
    vector<int> result;

    for (int num : arr) {
        // TODO: logic to push onto heap according to problem's criteria
        min_heap.push(num);

        if (min_heap.size() > k) {
            min_heap.pop();
        }
    }

    while (!min_heap.empty()) {
        result.push_back(min_heap.top());
        min_heap.pop();
    }

    return result;
}
`,E1=`def fn(head):
    slow = head
    fast = head
    ans = 0

    while fast and fast.next:
        # TODO: logic
        slow = slow.next
        fast = fast.next.next

    return ans
`,O1=`const fn = (head) => {
    let ans = 0
    let slow = head
    let fast = head

    while (fast && fast.next) {
        // TODO: logic
        slow = slow.next
        fast = fast.next.next
    }

    return ans
}
`,A1=`public int fn(ListNode head) {
    ListNode slow = head;
    ListNode fast = head;
    int ans = 0;

    while (fast != null && fast.next != null) {
        // TODO: logic
        slow = slow.next;
        fast = fast.next.next;
    }

    return ans;
}
`,k1=`int fn(ListNode* head) {
    ListNode* slow = head;
    ListNode* fast = head;
    int ans = 0;

    while (fast && fast->next) {
        // TODO: logic
        slow = slow->next;
        fast = fast->next->next;
    }

    return ans;
}
`,M1=`def fn(head):
    prev = None
    curr = head

    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt

    return prev
`,R1=`const fn = (head) => {
    let prev = null
    let curr = head

    while (curr) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    return prev
}
`,C1=`public ListNode fn(ListNode head) {
    ListNode curr = head;
    ListNode prev = null;

    while (curr != null) {
        ListNode nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    return prev;
}
`,L1=`ListNode* fn(ListNode* head) {
    ListNode* prev = nullptr;
    ListNode* curr = head;

    while (curr) {
        ListNode* nxt = curr->next;
        curr->next = prev;
        prev = curr;
        curr = nxt;
    }

    return prev;
}
`,D1=`def fn(arr):
    n = len(arr)
    prefix = [arr[0]]

    for i in range(1, n):
        prefix.append(prefix[-1] + arr[i])

    return prefix
`,z1=`const fn = (arr) => {
    let prefix = [arr[0]]

    for (let i = 1; i < arr.length; i++) {
        prefix.push(prefix[prefix.length - 1] + arr[i])
    }

    return prefix
}
`,B1=`import java.util.ArrayList;
import java.util.List;


public int[] fn(int[] arr) {
    int n = arr.length;
    int[] prefix = new int[n];
    prefix[0] = arr[0];

    for (int i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] + arr[i];
    }

    return prefix;
}
`,U1=`#include <iostream>
#include <vector>

using namespace std;


vector<int> fn(vector<int>& arr) {
    int n = arr.size();
    vector<int> prefix;
    prefix.push_back(arr[0]);

    for (int i = 1; i < n; ++i) {
        prefix.push_back(prefix.back() + arr[i]);
    }

    return prefix;
}
`,H1=`def fn(arr):
    n = len(arr)
    window = 0
    left = 0
    ans = 0

    for right in range(n):
        # TODO: add arr[right] to window

        while WINDOW_CONDITION_BROKEN:
            # TODO: remove arr[left] from window
            left += 1

        # TODO: update ans

    return ans
`,q1=`const fn = (arr) => {
    let window = 0
    let ans = 0
    let left = 0

    for (let right = 0; right < arr.length; right++) {
        // TODO: add arr[right] to window

        while (WINDOW_CONDITION_BROKEN) {
            // TODO: remove arr[left] from window
            left++
        }

        // TODO: update ans
    }

    return ans
}
`,G1=`public int fn(int[] arr) {
    int n = arr.length;
    int window = 0;
    int left = 0;
    int ans = 0;

    for (int right = 0; right < arr.length; right++) {
        // TODO: add arr[right] to window

        while (WINDOW_CONDITION_BROKEN) {
            // TODO: remove arr[left] from window
            left++;
        }

        // TODO: update ans
    }

    return ans;
}
`,Y1=`#include <vector>

using namespace std;


int fn(vector<int>& arr) {
    int n = arr.size();
    int window = 0;
    int left = 0;
    int ans = 0;

    for (int right = 0; right < n; right++) {
        // TODO: add arr[right] to window

        while (WINDOW_CONDITION_BROKEN) {
            // TODO: remove arr[left] from window
            left++;
        }

        // TODO: update ans
    }

    return ans;
}
`,V1=`def fn(arr):
    stack = []
    ans = 0

    for num in arr:
        while stack and stack[-1] < num:
            # TODO: logic
            stack.pop()
        stack.append(num)

    return ans
`,I1=`const fn = (arr) => {
    let stack = []
    let ans = 0

    for (const num of arr) {
        while (stack.length && stack[stack.length - 1] < num) {
            // TODO: logic
            stack.pop()
        }

        stack.push(num)
    }

    return ans
}
`,K1=`import java.util.Stack;


public int fn(int[] arr) {
    Stack<Integer> stack = new Stack<>();
    int ans = 0;

    for (int num : arr) {
        while (!stack.isEmpty() && stack.peek() < num) {
            // TODO: logic
            stack.pop();
        }
        stack.push(num);
    }

    return ans;
}
`,Q1=`#include <stack>
#include <vector>

using namespace std;


int fn(vector<int>& arr) {
    stack<int> stack;
    int ans = 0;

    for (int num : arr) {
        while (!stack.empty() && stack.top() < num) {
            // TODO: logic
            stack.pop();
        }
        stack.push(num);
    }

    return ans;
}
`,X1=`def fn(arr):
    stack = []
    ans = 0

    for num in arr:
        while stack and stack[-1] > num:
            # TODO: logic
            stack.pop()
        stack.append(num)

    return ans
`,J1=`const fn = (arr) => {
    let stack = []
    let ans = 0

    for (const num of arr) {
        while (stack.length && stack[stack.length - 1] > num) {
            // TODO: logic
            stack.pop()
        }

        stack.push(num)
    }

    return ans
}
`,Z1=`import java.util.Stack;


public int fn(int[] arr) {
    Stack<Integer> stack = new Stack<>();
    int ans = 0;

    for (int num : arr) {
        while (!stack.isEmpty() && stack.peek() > num) {
            // TODO: logic
            stack.pop();
        }
        stack.push(num);
    }

    return ans;
}
`,F1=`#include <stack>
#include <vector>

using namespace std;


int fn(vector<int>& arr) {
    stack<int> stack;
    int ans = 0;

    for (int num : arr) {
        while (!stack.empty() && stack.top() > num) {
            // TODO: logic
            stack.pop();
        }
        stack.push(num);
    }

    return ans;
}
`,P1=`def fn(strs: list[str]):
    ans = []

    for char in strs:
        ans.append(char)

    return ''.join(ans)
`,W1=`const fn = (arr) => {
    let ans = []

    for (const c of arr) {
        ans.push(c)
    }

    return ans.join('')
}

const fn = (arr) => {
    let ans = ''

    for (const c of arr) {
        ans += c
    }

    return ans
}
`,$1=`public String fn(char[] strs) {
    StringBuilder sb = new StringBuilder();

    for (char c: strs) {
        sb.append(c);
    }

    return sb.toString();
}
`,nb=`string fn(vector<char>& arr) {
    return string(arr.begin(), arr.end())
}
`,eb=`from collections import deque


def fn(root):
    que = deque([root])
    ans = 0

    while que:
        current_length = len(que)
        # TODO: logic for current level
        for _ in range(current_length):
            node = que.popleft()
            # TODO: logic
            if node.left:
                que.append(node.left)
            if node.right:
                que.append(node.right)

    return ans
`,tb=`const fn = (root) => {
    let que = [root]
    let ans = 0

    while (que.length) {
        let currentLength = que.length
        let nextQue = []
        // TODO: logic for current level

        for (let i = 0; i < currentLength; i++) {
            let node = que[i]
            // TODO: logic
            if (node.left) {
                nextQue.push(node.left)
            }
            if (node.right) {
                nextQue.push(node.right)
            }
        }

        que = nextQue
    }

    return ans
}
`,ab=`import java.util.LinkedList;
import java.util.Queue;


public int fn(TreeNode root) {
    Queue<TreeNode> que = new LinkedList<>();
    que.add(root);
    int ans = 0;

    while (!que.isEmpty()) {
        int currentLength = que.size();
        // TODO: logic for current level
        for (int i = 0; i < currentLength; i++) {
            TreeNode node = que.remove();
            // TODO: logic
            if (node.left != null) {
                que.add(node.left);
            }
            if (node.right != null) {
                que.add(node.right);
            }
        }
    }

    return ans;
}
`,ib=`#include <queue>

using namespace std;


int fn(TreeNode* root) {
    queue<TreeNode*> que;
    que.push(root);
    int ans = 0;

    while (!que.empty()) {
        int currentLength = que.size();
        // TODO: logic for current level

        for (int i = 0; i < currentLength; i++) {
            TreeNode* node = que.front();
            que.pop();
            // TODO: logic
            if (node->left != nullptr) {
                que.push(node->left);
            }
            if (node->right != nullptr) {
                que.push(node->right);
            }
        }
    }

    return ans;
}
`,rb=`def dfs(root):
    stack = [root]
    ans = 0

    while stack:
        node = stack.pop()
        # TODO: logic
        if node.left:
            stack.append(node.left)
        if node.right:
            stack.append(node.right)

    return ans
`,lb=`const dfs = (root) => {
    let stack = [root]
    let ans = 0

    while (stack.length) {
        let node = stack.pop()
        // TODO: logic
        if (node.left) {
            stack.push(node.left)
        }
        if (node.right) {
            stack.push(node.right)
        }
    }

    return ans
}
`,sb=`import java.util.Stack;


public int dfs(TreeNode root) {
    Stack<TreeNode> stack = new Stack<>();
    stack.push(root);
    int ans = 0;

    while (!stack.isEmpty()) {
        TreeNode node = stack.pop();
        // TODO: logic
        if (node.left != null) {
            stack.push(node.left);
        }
        if (node.right != null) {
            stack.push(node.right);
        }
    }

    return ans;
}
`,ob=`#include <stack>

using namespace std;


int dfs(TreeNode* root) {
    stack<TreeNode*> stack;
    stack.push(root);
    int ans = 0;

    while (!stack.empty()) {
        TreeNode* node = stack.top();
        stack.pop();
        // TODO: logic
        if (node->left) {
            stack.push(node->left);
        }
        if (node->right) {
            stack.push(node->right);
        }
    }

    return ans;
}
`,cb=`def dfs(root):
    if not root:
        return

    ans = 0

    # TODO: logic
    dfs(root.left)
    dfs(root.right)

    return ans
`,ub=`const dfs = (root) => {
    if (!root) {
        return
    }

    let ans = 0

    // TODO: logic
    dfs(root.left)
    dfs(root.right)

    return ans
}
`,db=`public int dfs(TreeNode root) {
    if (root == null) {
        return 0;
    }

    int ans = 0;

    // TODO: logic
    ans += dfs(root.left);
    ans += dfs(root.right);

    return ans;
}
`,fb=`int dfs(TreeNode* root) {
    if (root == nullptr) {
        return 0;
    }

    int ans = 0;

    // TODO: logic
    dfs(root.left);
    dfs(root.right);

    return ans;
}
`,hb=`def fn(arr):
    ans = 0
    left = 0
    right = len(arr) - 1

    while left < right:
        # TODO: logic with left and right
        if CONDITION:
            left += 1
        else:
            right -= 1

    return ans
`,gb=`const fn = (arr) => {
    let ans = 0
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        // TODO: logic with left and right
        if (CONDITION) {
            left++
        } else {
            right--
        }
    }

    return ans
}
`,pb=`public int fn(int[] arr) {
    int ans = 0;
    int left = 0;
    int right = arr.length - 1;

    while (left < right) {
        // TODO: logic with left and right
        if (CONDITION) {
            left++;
        } else {
            right--;
        }
    }

    return ans;
}
`,mb=`#include <vector>

using namespace std;


int fn(vector<int>& arr) {
    int ans = 0;
    int left = 0;
    int right = arr.size() - 1;

    while (left < right) {
        // TODO: logic with left and right
        if (CONDITION) {
            left++;
        } else {
            right--;
        }
    }

    return ans;
}
`,vb=`def fn(arr1, arr2):
    i = 0
    j = 0
    ans = 0

    while i < len(arr1) and j < len(arr2):
        # TODO: logic
        if CONDITION:
            i += 1
        else:
            j += 1

    while i < len(arr1):
        # TODO: logic
        i += 1

    while j < len(arr2):
        # TODO: logic
        j += 1

    return ans
`,bb=`let fn = (arr1, arr2) => {
    let ans = 0
    let i = 0
    let j = 0

    while (i < arr1.length && j < arr2.length) {
        // TODO: logic
        if (CONDITION) {
            i++
        } else {
            j++
        }
    }

    while (i < arr1.length) {
        // TODO: logic
        i++
    }

    while (j < arr2.length) {
        // TODO: logic
        j++
    }

    return ans
}
`,yb=`public int fn(int[] arr1, int[] arr2) {
    int i = 0;
    int j = 0;
    int ans = 0;

    while (i < arr1.length && j < arr2.length) {
        // TODO: logic
        if (CONDITION) {
            i++;
        } else {
            j++;
        }
    }

    while (i < arr1.length) {
        // TODO: logic
        i++;
    }

    while (j < arr2.length) {
        // TODO: logic
        j++;
    }

    return ans;
}
`,xb=`#include <vector>

using namespace std;


int fn(vector<int>& arr1, vector<int>& arr2) {
    int i = 0;
    int j = 0;
    int ans = 0;

    while (i < arr1.size() && j < arr2.size()) {
        // TODO: logic
        if (CONDITION) {
            i++;
        } else {
            j++;
        }
    }

    while (i < arr1.size()) {
        // TODO: logic
        i++;
    }

    while (j < arr2.size()) {
        // TODO: logic
        j++;
    }

    return ans;
}
`,xn=(o,g,h,d,S)=>({title:o,code:{python:g,javascript:h,java:d,cpp:S}}),TS={backtracking:xn("backtracking",$p,nm,em,tm),"binary-search":xn("binary search",am,im,rm,lm),"binary-search-greedy-maximum":xn("greedy (maximum)",sm,om,cm,um),"binary-search-greedy-minimum":xn("greedy (minimum)",dm,fm,hm,gm),"binary-search-left-insertion":xn("duplicate elements, left-most insertion point",pm,mm,vm,bm),"binary-search-right-insertion":xn("duplicate elements, right-most insertion point",ym,xm,_m,Tm),"bitmanipulation-check-power-of-two":xn("check if number is power of 2",Sm,jm,Nm,wm),"bitmanipulation-clear-kth-bit":xn("clear kth bit",Em,Om,Am,km),"bitmanipulation-count-set-bits":xn("count set bits",Mm,Rm,Cm,Lm),"bitmanipulation-divide-power-of-two":xn("divide by 2^k",Dm,zm,Bm,Um),"bitmanipulation-get-rightmost-bit":xn("get rightmost bit",Hm,qm,Gm,Ym),"bitmanipulation-multiply-power-of-two":xn("multiply by 2^k",Vm,Im,Km,Qm),"bitmanipulation-set-kth-bit":xn("set kth bit",Xm,Jm,Zm,Fm),"bitmanipulation-swap-variables":xn("swap two variables",Pm,Wm,$m,nv),"bitmanipulation-test-kth-bit":xn("test kth-bit",ev,tv,av,iv),"bitmanipulation-toggle-kth-bit":xn("toggle kth bit",rv,lv,sv,ov),"dp-bottom-up":xn("DP bottom-up",cv,uv,dv,fv),"dp-kadane":xn("Kadane (max-sum subarray)",hv,gv,pv,mv),"dp-top-down":xn("DP top-down",vv,bv,yv,xv),"ds-hash-map":xn("hash map",_v,Tv,Sv,jv),"ds-trie":xn("trie",Nv,wv,Ev,Ov),"ds-union-find":xn("union find",Av,kv,Mv,Rv),"ds-union-find-optimized":xn("union find optimized",Cv,Lv,Dv,zv),"graph-bellman-ford":xn("Bellman-Ford (shortest path)",Bv,Uv,Hv,qv),"graph-bfs":xn("BFS",Gv,Yv,Vv,Iv),"graph-dfs-iterative":xn("DFS (iterative)",Kv,Qv,Xv,Jv),"graph-dfs-recursive":xn("DFS (recursive)",Zv,Fv,Pv,Wv),"graph-dijkstra":xn("Dijkstra (shortest path)",$v,n1,e1,t1),"graph-kahn":xn("Kahn (topological sort)",a1,i1,r1,l1),"graph-kruskal":xn("Kruskal (mst)",s1,o1,c1,u1),"graph-prim":xn("Prim (mst)",d1,f1,h1,g1),"hashmap-find-number-of-subarrays":xn("find number of subarrays that fit an exact criteria",p1,m1,v1,b1),"hashmap-sliding-window":xn("sliding window",y1,x1,_1,T1),"heap-find-top-k-elements":xn("find top k elements",S1,j1,N1,w1),"linkedlist-fast-and-slow-pointer":xn("fast and slow pointer",E1,O1,A1,k1),"linkedlist-reverse":xn("reverse linked list",M1,R1,C1,L1),"prefix-sum":xn("prefix sum",D1,z1,B1,U1),"sliding-window":xn("sliding window",H1,q1,G1,Y1),"stack-monotonic-decreasing":xn("monotonic decreasing stack",V1,I1,K1,Q1),"stack-monotonic-increasing":xn("monotonic increasing stack",X1,J1,Z1,F1),"string-building":xn("efficient string building",P1,W1,$1,nb),"tree-bfs":xn("BFS",eb,tb,ab,ib),"tree-dfs-iterative":xn("DFS (iterative)",rb,lb,sb,ob),"tree-dfs-recursive":xn("DFS (recursive)",cb,ub,db,fb),"two-pointers-one-input":xn("two pointers: one input, opposite ends",hb,gb,pb,mb),"two-pointers-two-inputs":xn("two pointers: two inputs, exhaust both",vb,bb,yb,xb)};function SS(o){const g=wi.leaves[o];return g?g.templateIds.map(h=>TS[h]).filter(h=>!!h):[]}const jS="_container_g6uc3_1",NS="_buttonContainer_g6uc3_15",wS="_tabButtonContainer_g6uc3_24",ES="_tabButton_g6uc3_24",ro={container:jS,buttonContainer:NS,tabButtonContainer:wS,tabButton:ES},OS="_code_10mye_1",AS="_line_10mye_14",Dp={code:OS,line:AS};var ed,zp;function kS(){if(zp)return ed;zp=1;function o(p){return p instanceof Map?p.clear=p.delete=p.set=function(){throw new Error("map is read-only")}:p instanceof Set&&(p.add=p.clear=p.delete=function(){throw new Error("set is read-only")}),Object.freeze(p),Object.getOwnPropertyNames(p).forEach(C=>{const Q=p[C],bn=typeof Q;(bn==="object"||bn==="function")&&!Object.isFrozen(Q)&&o(Q)}),p}class g{constructor(C){C.data===void 0&&(C.data={}),this.data=C.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function h(p){return p.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function d(p,...C){const Q=Object.create(null);for(const bn in p)Q[bn]=p[bn];return C.forEach(function(bn){for(const te in bn)Q[te]=bn[te]}),Q}const S="</span>",R=p=>!!p.scope,k=(p,{prefix:C})=>{if(p.startsWith("language:"))return p.replace("language:","language-");if(p.includes(".")){const Q=p.split(".");return[`${C}${Q.shift()}`,...Q.map((bn,te)=>`${bn}${"_".repeat(te+1)}`)].join(" ")}return`${C}${p}`};class L{constructor(C,Q){this.buffer="",this.classPrefix=Q.classPrefix,C.walk(this)}addText(C){this.buffer+=h(C)}openNode(C){if(!R(C))return;const Q=k(C.scope,{prefix:this.classPrefix});this.span(Q)}closeNode(C){R(C)&&(this.buffer+=S)}value(){return this.buffer}span(C){this.buffer+=`<span class="${C}">`}}const H=(p={})=>{const C={children:[]};return Object.assign(C,p),C};class G{constructor(){this.rootNode=H(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(C){this.top.children.push(C)}openNode(C){const Q=H({scope:C});this.add(Q),this.stack.push(Q)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(C){return this.constructor._walk(C,this.rootNode)}static _walk(C,Q){return typeof Q=="string"?C.addText(Q):Q.children&&(C.openNode(Q),Q.children.forEach(bn=>this._walk(C,bn)),C.closeNode(Q)),C}static _collapse(C){typeof C!="string"&&C.children&&(C.children.every(Q=>typeof Q=="string")?C.children=[C.children.join("")]:C.children.forEach(Q=>{G._collapse(Q)}))}}class D extends G{constructor(C){super(),this.options=C}addText(C){C!==""&&this.add(C)}startScope(C){this.openNode(C)}endScope(){this.closeNode()}__addSublanguage(C,Q){const bn=C.root;Q&&(bn.scope=`language:${Q}`),this.add(bn)}toHTML(){return new L(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function b(p){return p?typeof p=="string"?p:p.source:null}function w(p){return J("(?=",p,")")}function V(p){return J("(?:",p,")*")}function q(p){return J("(?:",p,")?")}function J(...p){return p.map(Q=>b(Q)).join("")}function en(p){const C=p[p.length-1];return typeof C=="object"&&C.constructor===Object?(p.splice(p.length-1,1),C):{}}function _n(...p){return"("+(en(p).capture?"":"?:")+p.map(bn=>b(bn)).join("|")+")"}function gn(p){return new RegExp(p.toString()+"|").exec("").length-1}function hn(p,C){const Q=p&&p.exec(C);return Q&&Q.index===0}const En=new RegExp(_n(/\[(?:[^\\\]]|\\.)*\]/,/\(\?<(?![=!])[^>]+>/,/\(\?'[^']+'/,/\(\??/,/\\([1-9][0-9]*)/,/\\./));function Qn(p,{joinWith:C}){let Q=0;return p.map(bn=>{Q+=1;const te=Q;let Bn=b(bn),$="";for(;Bn.length>0;){const I=En.exec(Bn);if(!I){$+=Bn;break}$+=Bn.substring(0,I.index),Bn=Bn.substring(I.index+I[0].length),I[0][0]==="\\"&&I[1]?$+="\\"+String(Number(I[1])+te):($+=I[0],(I[0]==="("||/^\(\?[<']/.test(I[0]))&&Q++)}return $}).map(bn=>`(${bn})`).join(C)}const vn=/\b\B/,Z="[a-zA-Z]\\w*",pn="[a-zA-Z_]\\w*",ie="\\b\\d+(\\.\\d+)?",de="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",se="\\b(0b[01]+)",me="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Ke=(p={})=>{const C=/^#![ ]*\//;return p.binary&&(p.begin=J(C,/.*\b/,p.binary,/\b.*/)),d({scope:"meta",begin:C,end:/$/,relevance:0,"on:begin":(Q,bn)=>{Q.index!==0&&bn.ignoreMatch()}},p)},Oe={begin:"\\\\[\\s\\S]",relevance:0},ce={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Oe]},Y={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Oe]},cn={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},P=function(p,C,Q={}){const bn=d({scope:"comment",begin:p,end:C,contains:[]},Q);bn.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const te=_n("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return bn.contains.push({begin:J(/[ ]+/,"(",te,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),bn},kn=P("//","$"),Sn=P("/\\*","\\*/"),oe=P("#","$"),ve={scope:"number",begin:ie,relevance:0},ut={scope:"number",begin:de,relevance:0},y={scope:"number",begin:se,relevance:0},z={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[Oe,{begin:/\[/,end:/\]/,relevance:0,contains:[Oe]}]},sn={scope:"title",begin:Z,relevance:0},W={scope:"title",begin:pn,relevance:0},un={begin:"\\.\\s*"+pn,relevance:0};var On=Object.freeze({__proto__:null,APOS_STRING_MODE:ce,BACKSLASH_ESCAPE:Oe,BINARY_NUMBER_MODE:y,BINARY_NUMBER_RE:se,COMMENT:P,C_BLOCK_COMMENT_MODE:Sn,C_LINE_COMMENT_MODE:kn,C_NUMBER_MODE:ut,C_NUMBER_RE:de,END_SAME_AS_BEGIN:function(p){return Object.assign(p,{"on:begin":(C,Q)=>{Q.data._beginMatch=C[1]},"on:end":(C,Q)=>{Q.data._beginMatch!==C[1]&&Q.ignoreMatch()}})},HASH_COMMENT_MODE:oe,IDENT_RE:Z,MATCH_NOTHING_RE:vn,METHOD_GUARD:un,NUMBER_MODE:ve,NUMBER_RE:ie,PHRASAL_WORDS_MODE:cn,QUOTE_STRING_MODE:Y,REGEXP_MODE:z,RE_STARTERS_RE:me,SHEBANG:Ke,TITLE_MODE:sn,UNDERSCORE_IDENT_RE:pn,UNDERSCORE_TITLE_MODE:W});function tn(p,C){p.input[p.index-1]==="."&&C.ignoreMatch()}function dn(p,C){p.className!==void 0&&(p.scope=p.className,delete p.className)}function nt(p,C){C&&p.beginKeywords&&(p.begin="\\b("+p.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",p.__beforeBegin=tn,p.keywords=p.keywords||p.beginKeywords,delete p.beginKeywords,p.relevance===void 0&&(p.relevance=0))}function ei(p,C){Array.isArray(p.illegal)&&(p.illegal=_n(...p.illegal))}function _a(p,C){if(p.match){if(p.begin||p.end)throw new Error("begin & end are not supported with match");p.begin=p.match,delete p.match}}function yt(p,C){p.relevance===void 0&&(p.relevance=1)}const Ae=(p,C)=>{if(!p.beforeMatch)return;if(p.starts)throw new Error("beforeMatch cannot be used with starts");const Q=Object.assign({},p);Object.keys(p).forEach(bn=>{delete p[bn]}),p.keywords=Q.keywords,p.begin=J(Q.beforeMatch,w(Q.begin)),p.starts={relevance:0,contains:[Object.assign(Q,{endsParent:!0})]},p.relevance=0,delete Q.beforeMatch},$n=["of","and","for","in","not","or","if","then","parent","list","value"],xt="keyword";function Ta(p,C,Q=xt){const bn=Object.create(null);return typeof p=="string"?te(Q,p.split(" ")):Array.isArray(p)?te(Q,p):Object.keys(p).forEach(function(Bn){Object.assign(bn,Ta(p[Bn],C,Bn))}),bn;function te(Bn,$){C&&($=$.map(I=>I.toLowerCase())),$.forEach(function(I){const mn=I.split("|");bn[mn[0]]=[Bn,qt(mn[0],mn[1])]})}}function qt(p,C){return C?Number(C):Ei(p)?0:1}function Ei(p){return $n.includes(p.toLowerCase())}const ti={},et=p=>{console.error(p)},Oi=(p,...C)=>{console.log(`WARN: ${p}`,...C)},Mt=(p,C)=>{ti[`${p}/${C}`]||(console.log(`Deprecated as of ${p}. ${C}`),ti[`${p}/${C}`]=!0)},Sa=new Error;function Tr(p,C,{key:Q}){let bn=0;const te=p[Q],Bn={},$={};for(let I=1;I<=C.length;I++)$[I+bn]=te[I],Bn[I+bn]=!0,bn+=gn(C[I-1]);p[Q]=$,p[Q]._emit=Bn,p[Q]._multi=!0}function Gt(p){if(Array.isArray(p.begin)){if(p.skip||p.excludeBegin||p.returnBegin)throw et("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Sa;if(typeof p.beginScope!="object"||p.beginScope===null)throw et("beginScope must be object"),Sa;Tr(p,p.begin,{key:"beginScope"}),p.begin=Qn(p.begin,{joinWith:""})}}function Sr(p){if(Array.isArray(p.end)){if(p.skip||p.excludeEnd||p.returnEnd)throw et("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Sa;if(typeof p.endScope!="object"||p.endScope===null)throw et("endScope must be object"),Sa;Tr(p,p.end,{key:"endScope"}),p.end=Qn(p.end,{joinWith:""})}}function jr(p){p.scope&&typeof p.scope=="object"&&p.scope!==null&&(p.beginScope=p.scope,delete p.scope)}function po(p){jr(p),typeof p.beginScope=="string"&&(p.beginScope={_wrap:p.beginScope}),typeof p.endScope=="string"&&(p.endScope={_wrap:p.endScope}),Gt(p),Sr(p)}function El(p){function C($,I){return new RegExp(b($),"m"+(p.case_insensitive?"i":"")+(p.unicodeRegex?"u":"")+(I?"g":""))}class Q{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(I,mn){mn.position=this.position++,this.matchIndexes[this.matchAt]=mn,this.regexes.push([mn,I]),this.matchAt+=gn(I)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const I=this.regexes.map(mn=>mn[1]);this.matcherRe=C(Qn(I,{joinWith:"|"}),!0),this.lastIndex=0}exec(I){this.matcherRe.lastIndex=this.lastIndex;const mn=this.matcherRe.exec(I);if(!mn)return null;const _e=mn.findIndex((Yt,ja)=>ja>0&&Yt!==void 0),he=this.matchIndexes[_e];return mn.splice(0,_e),Object.assign(mn,he)}}class bn{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(I){if(this.multiRegexes[I])return this.multiRegexes[I];const mn=new Q;return this.rules.slice(I).forEach(([_e,he])=>mn.addRule(_e,he)),mn.compile(),this.multiRegexes[I]=mn,mn}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(I,mn){this.rules.push([I,mn]),mn.type==="begin"&&this.count++}exec(I){const mn=this.getMatcher(this.regexIndex);mn.lastIndex=this.lastIndex;let _e=mn.exec(I);if(this.resumingScanAtSamePosition()&&!(_e&&_e.index===this.lastIndex)){const he=this.getMatcher(0);he.lastIndex=this.lastIndex+1,_e=he.exec(I)}return _e&&(this.regexIndex+=_e.position+1,this.regexIndex===this.count&&this.considerAll()),_e}}function te($){const I=new bn;return $.contains.forEach(mn=>I.addRule(mn.begin,{rule:mn,type:"begin"})),$.terminatorEnd&&I.addRule($.terminatorEnd,{type:"end"}),$.illegal&&I.addRule($.illegal,{type:"illegal"}),I}function Bn($,I){const mn=$;if($.isCompiled)return mn;[dn,_a,po,Ae].forEach(he=>he($,I)),p.compilerExtensions.forEach(he=>he($,I)),$.__beforeBegin=null,[nt,ei,yt].forEach(he=>he($,I)),$.isCompiled=!0;let _e=null;return typeof $.keywords=="object"&&$.keywords.$pattern&&($.keywords=Object.assign({},$.keywords),_e=$.keywords.$pattern,delete $.keywords.$pattern),_e=_e||/\w+/,$.keywords&&($.keywords=Ta($.keywords,p.case_insensitive)),mn.keywordPatternRe=C(_e,!0),I&&($.begin||($.begin=/\B|\b/),mn.beginRe=C(mn.begin),!$.end&&!$.endsWithParent&&($.end=/\B|\b/),$.end&&(mn.endRe=C(mn.end)),mn.terminatorEnd=b(mn.end)||"",$.endsWithParent&&I.terminatorEnd&&(mn.terminatorEnd+=($.end?"|":"")+I.terminatorEnd)),$.illegal&&(mn.illegalRe=C($.illegal)),$.contains||($.contains=[]),$.contains=[].concat(...$.contains.map(function(he){return Nr(he==="self"?$:he)})),$.contains.forEach(function(he){Bn(he,mn)}),$.starts&&Bn($.starts,I),mn.matcher=te(mn),mn}if(p.compilerExtensions||(p.compilerExtensions=[]),p.contains&&p.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return p.classNameAliases=d(p.classNameAliases||{}),Bn(p)}function Ai(p){return p?p.endsWithParent||Ai(p.starts):!1}function Nr(p){return p.variants&&!p.cachedVariants&&(p.cachedVariants=p.variants.map(function(C){return d(p,{variants:null},C)})),p.cachedVariants?p.cachedVariants:Ai(p)?d(p,{starts:p.starts?d(p.starts):null}):Object.isFrozen(p)?d(p):p}var wr="11.12.0";class mo extends Error{constructor(C,Q){super(C),this.name="HTMLInjectionError",this.html=Q}}const Er=h,Qe=d,Ol=Symbol("nomatch"),Al=7,Or=function(p){const C=Object.create(null),Q=Object.create(null),bn=[];let te=!0;const Bn="Could not find the language '{}', did you forget to load/include a language module?",$={disableAutodetect:!0,name:"Plain text",contains:[]};let I={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:D};function mn(B){return I.noHighlightRe.test(B)}function _e(B){let rn=B.className+" ";rn+=B.parentNode?B.parentNode.className:"";const Mn=I.languageDetectRe.exec(rn);if(Mn){const ne=Ct(Mn[1]);return ne||(Oi(Bn.replace("{}",Mn[1])),Oi("Falling back to no-highlight mode for this block.",B)),ne?Mn[1]:"no-highlight"}return rn.split(/\s+/).find(ne=>mn(ne)||Ct(ne))}function he(B,rn,Mn){let ne="",be="";typeof rn=="object"?(ne=B,Mn=rn.ignoreIllegals,be=rn.language):(Mt("10.7.0","highlight(lang, code, ...args) has been deprecated."),Mt("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),be=B,ne=rn),Mn===void 0&&(Mn=!0);const at={code:ne,language:be};tt("before:highlight",at);const it=at.result?at.result:Yt(at.language,at.code,Mn);return it.code=at.code,tt("after:highlight",it),it}function Yt(B,rn,Mn,ne){const be=Object.create(null);function at(X,ln){return X.keywords[ln]}function it(){if(!Tn.keywords){Se.addText(Gn);return}let X=0;Tn.keywordPatternRe.lastIndex=0;let ln=Tn.keywordPatternRe.exec(Gn),jn="";for(;ln;){jn+=Gn.substring(X,ln.index);const Yn=Tt.case_insensitive?ln[0].toLowerCase():ln[0],Zn=at(Tn,Yn);if(Zn){const[dt,Ul]=Zn;if(Se.addText(jn),jn="",be[Yn]=(be[Yn]||0)+1,be[Yn]<=Al&&(la+=Ul),dt.startsWith("_"))jn+=ln[0];else{const Rr=Tt.classNameAliases[dt]||dt;Ce(ln[0],Rr)}}else jn+=ln[0];X=Tn.keywordPatternRe.lastIndex,ln=Tn.keywordPatternRe.exec(Gn)}jn+=Gn.substring(X),Se.addText(jn)}function ta(){if(Gn==="")return;let X=null;if(typeof Tn.subLanguage=="string"){if(!C[Tn.subLanguage]){Se.addText(Gn);return}X=Yt(Tn.subLanguage,Gn,!0,Un[Tn.subLanguage]),Un[Tn.subLanguage]=X._top}else X=Na(Gn,Tn.subLanguage.length?Tn.subLanguage:null);Tn.relevance>0&&(la+=X.relevance),Se.__addSublanguage(X._emitter,X.language)}function Re(){Tn.subLanguage!=null?ta():it(),Gn=""}function Ce(X,ln){X!==""&&(Se.startScope(ln),Se.addText(X),Se.endScope())}function aa(X,ln){let jn=1;const Yn=ln.length-1;for(;jn<=Yn;){if(!X._emit[jn]){jn++;continue}const Zn=Tt.classNameAliases[X[jn]]||X[jn],dt=ln[jn];Zn?Ce(dt,Zn):(Gn=dt,it(),Gn=""),jn++}}function Oa(X,ln){return X.scope&&typeof X.scope=="string"&&Se.openNode(Tt.classNameAliases[X.scope]||X.scope),X.beginScope&&(X.beginScope._wrap?(Ce(Gn,Tt.classNameAliases[X.beginScope._wrap]||X.beginScope._wrap),Gn=""):X.beginScope._multi&&(aa(X.beginScope,ln),Gn="")),Tn=Object.create(X,{parent:{value:Tn}}),Tn}function ia(X,ln,jn){let Yn=hn(X.endRe,jn);if(Yn){if(X["on:end"]){const Zn=new g(X);X["on:end"](ln,Zn),Zn.isMatchIgnored&&(Yn=!1)}if(Yn){for(;X.endsParent&&X.parent;)X=X.parent;return X}}if(X.endsWithParent)return ia(X.parent,ln,jn)}function Te(X){return Tn.matcher.regexIndex===0?(Gn+=X[0],1):(Ri=!0,0)}function Ll(X){const ln=X[0],jn=X.rule,Yn=new g(jn),Zn=[jn.__beforeBegin,jn["on:begin"]];for(const dt of Zn)if(dt&&(dt(X,Yn),Yn.isMatchIgnored))return Te(ln);return jn.skip?Gn+=ln:(jn.excludeBegin&&(Gn+=ln),Re(),!jn.returnBegin&&!jn.excludeBegin&&(Gn=ln)),Oa(jn,X),jn.returnBegin?0:ln.length}function Dl(X){const ln=X[0],jn=rn.substring(X.index),Yn=ia(Tn,X,jn);if(!Yn)return Ol;const Zn=Tn;Tn.endScope&&Tn.endScope._wrap?(Re(),Ce(ln,Tn.endScope._wrap)):Tn.endScope&&Tn.endScope._multi?(Re(),aa(Tn.endScope,X)):Zn.skip?Gn+=ln:(Zn.returnEnd||Zn.excludeEnd||(Gn+=ln),Re(),Zn.excludeEnd&&(Gn=ln));do Tn.scope&&Se.closeNode(),!Tn.skip&&!Tn.subLanguage&&(la+=Tn.relevance),Tn=Tn.parent;while(Tn!==Yn.parent);return Yn.starts&&Oa(Yn.starts,X),Zn.returnEnd?0:ln.length}function zl(){const X=[];for(let ln=Tn;ln!==Tt;ln=ln.parent)ln.scope&&X.unshift(ln.scope);X.forEach(ln=>Se.openNode(ln))}let _t={};function ra(X,ln){const jn=ln&&ln[0];if(Gn+=X,jn==null)return Re(),0;if(_t.type==="begin"&&ln.type==="end"&&_t.index===ln.index&&jn===""){if(Gn+=rn.slice(ln.index,ln.index+1),!te){const Yn=new Error(`0 width match regex (${B})`);throw Yn.languageName=B,Yn.badRule=_t.rule,Yn}return 1}if(_t=ln,ln.type==="begin")return Ll(ln);if(ln.type==="illegal"&&!Mn){const Yn=new Error('Illegal lexeme "'+jn+'" for mode "'+(Tn.scope||"<unnamed>")+'"');throw Yn.mode=Tn,Yn}else if(ln.type==="end"){const Yn=Dl(ln);if(Yn!==Ol)return Yn}if(ln.type==="illegal"&&jn==="")return ln.index===rn.length||(Gn+=`
`),1;if(Ue>1e5&&Ue>ln.index*3)throw new Error("potential infinite loop, way more iterations than matches");return Gn+=jn,jn.length}const Tt=Ct(B);if(!Tt)throw et(Bn.replace("{}",B)),new Error('Unknown language: "'+B+'"');const Bl=El(Tt);let Mi="",Tn=ne||Bl;const Un={},Se=new I.__emitter(I);zl();let Gn="",la=0,Be=0,Ue=0,Ri=!1;try{if(Tt.__emitTokens)Tt.__emitTokens(rn,Se);else{for(Tn.matcher.considerAll();;){Ue++,Ri?Ri=!1:Tn.matcher.considerAll(),Tn.matcher.lastIndex=Be;const X=Tn.matcher.exec(rn);if(!X)break;const ln=rn.substring(Be,X.index),jn=ra(ln,X);Be=X.index+jn}ra(rn.substring(Be))}return Se.finalize(),Mi=Se.toHTML(),{language:B,value:Mi,relevance:la,illegal:!1,_emitter:Se,_top:Tn}}catch(X){if(X.message&&X.message.includes("Illegal"))return{language:B,value:Er(rn),illegal:!0,relevance:0,_illegalBy:{message:X.message,index:Be,context:rn.slice(Be-100,Be+100),mode:X.mode,resultSoFar:Mi},_emitter:Se};if(te)return{language:B,value:Er(rn),illegal:!1,relevance:0,errorRaised:X,_emitter:Se,_top:Tn};throw X}}function ja(B){const rn={value:Er(B),illegal:!1,relevance:0,_top:$,_emitter:new I.__emitter(I)};return rn._emitter.addText(B),rn}function Na(B,rn){rn=rn||I.languages||Object.keys(C);const Mn=ja(B),ne=rn.filter(Ct).filter(ki).map(Re=>Yt(Re,B,!1));ne.unshift(Mn);const be=ne.sort((Re,Ce)=>{if(Re.relevance!==Ce.relevance)return Ce.relevance-Re.relevance;if(Re.language&&Ce.language){if(Ct(Re.language).supersetOf===Ce.language)return 1;if(Ct(Ce.language).supersetOf===Re.language)return-1}return 0}),[at,it]=be,ta=at;return ta.secondBest=it,ta}function ea(B,rn,Mn){const ne=rn&&Q[rn]||Mn;B.classList.add("hljs"),B.classList.add(`language-${ne}`)}function wa(B){let rn=null;const Mn=_e(B);if(mn(Mn))return;if(tt("before:highlightElement",{el:B,language:Mn}),B.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",B);return}if(B.children.length>0&&(I.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(B)),I.throwUnescapedHTML))throw new mo("One of your code blocks includes unescaped HTML.",B.innerHTML);rn=B;const ne=rn.textContent,be=Mn?he(ne,{language:Mn,ignoreIllegals:!0}):Na(ne);B.innerHTML=be.value,B.dataset.highlighted="yes",ea(B,Mn,be.language),B.result={language:be.language,re:be.relevance,relevance:be.relevance},be.secondBest&&(B.secondBest={language:be.secondBest.language,relevance:be.secondBest.relevance}),tt("after:highlightElement",{el:B,result:be,text:ne})}function ai(B){I=Qe(I,B)}const kl=()=>{Ea(),Mt("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function vo(){Ea(),Mt("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Ar=!1;function Ea(){function B(){Ea()}if(document.readyState==="loading"){Ar||window.addEventListener("DOMContentLoaded",B,!1),Ar=!0;return}document.querySelectorAll(I.cssSelector).forEach(wa)}function ii(B,rn){let Mn=null;try{Mn=rn(p)}catch(ne){if(et("Language definition for '{}' could not be registered.".replace("{}",B)),te)et(ne);else throw ne;Mn=$}Mn.name||(Mn.name=B),C[B]=Mn,Mn.rawDefinition=rn.bind(null,p),Mn.aliases&&kr(Mn.aliases,{languageName:B})}function bo(B){delete C[B];for(const rn of Object.keys(Q))Q[rn]===B&&delete Q[rn]}function Ml(){return Object.keys(C)}function Ct(B){return B=(B||"").toLowerCase(),C[B]||C[Q[B]]}function kr(B,{languageName:rn}){typeof B=="string"&&(B=[B]),B.forEach(Mn=>{Q[Mn.toLowerCase()]=rn})}function ki(B){const rn=Ct(B);return rn&&!rn.disableAutodetect}function Mr(B){B["before:highlightBlock"]&&!B["before:highlightElement"]&&(B["before:highlightElement"]=rn=>{B["before:highlightBlock"](Object.assign({block:rn.el},rn))}),B["after:highlightBlock"]&&!B["after:highlightElement"]&&(B["after:highlightElement"]=rn=>{B["after:highlightBlock"](Object.assign({block:rn.el},rn))})}function Rl(B){Mr(B),bn.push(B)}function Cl(B){const rn=bn.indexOf(B);rn!==-1&&bn.splice(rn,1)}function tt(B,rn){const Mn=B;bn.forEach(function(ne){ne[Mn]&&ne[Mn](rn)})}function ke(B){return Mt("10.7.0","highlightBlock will be removed entirely in v12.0"),Mt("10.7.0","Please use highlightElement now."),wa(B)}Object.assign(p,{highlight:he,highlightAuto:Na,highlightAll:Ea,highlightElement:wa,highlightBlock:ke,configure:ai,initHighlighting:kl,initHighlightingOnLoad:vo,registerLanguage:ii,unregisterLanguage:bo,listLanguages:Ml,getLanguage:Ct,registerAliases:kr,autoDetection:ki,inherit:Qe,addPlugin:Rl,removePlugin:Cl}),p.debugMode=function(){te=!1},p.safeMode=function(){te=!0},p.versionString=wr,p.regex={concat:J,lookahead:w,either:_n,optional:q,anyNumberOfTimes:V};for(const B in On)typeof On[B]=="object"&&o(On[B]);return Object.assign(p,On),p},Rt=Or({});return Rt.newInstance=()=>Or({}),ed=Rt,Rt.HighlightJS=Rt,Rt.default=Rt,ed}var MS=kS();const wl=_r(MS),Bp="[A-Za-z$_][0-9A-Za-z$_]*",RS=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],CS=["true","false","null","undefined","NaN","Infinity"],_b=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Tb=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Sb=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],LS=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","self","global"],DS=[].concat(Sb,_b,Tb);function zS(o){const g=o.regex,h=(P,{after:kn})=>{const Sn="</"+P[0].slice(1);return P.input.indexOf(Sn,kn)!==-1},d=Bp,S={begin:"<>",end:"</>"},R=/<[A-Za-z0-9\\._:-]+\s*\/>/,k={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(P,kn)=>{const Sn=P[0].length+P.index,oe=P.input[Sn];if(oe==="<"||oe===","){kn.ignoreMatch();return}oe===">"&&(h(P,{after:Sn})||kn.ignoreMatch());let ve;const ut=P.input.substring(Sn);if(ve=ut.match(/^\s*=/)){kn.ignoreMatch();return}if((ve=ut.match(/^\s+extends\s+/))&&ve.index===0){kn.ignoreMatch();return}}},L={$pattern:Bp,keyword:RS,literal:CS,built_in:DS,"variable.language":LS},H="[0-9](_?[0-9])*",G=`\\.(${H})`,D="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",b={className:"number",variants:[{begin:`(\\b(${D})((${G})|\\.)?|(${G}))[eE][+-]?(${H})\\b`},{begin:`\\b(${D})\\b((${G})\\b|\\.)?|(${G})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},w={className:"subst",begin:"\\$\\{",end:"\\}",keywords:L,contains:[]},V={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,w],subLanguage:"xml"}},q={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,w],subLanguage:"css"}},J={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,w],subLanguage:"graphql"}},en={className:"string",begin:"`",end:"`",contains:[o.BACKSLASH_ESCAPE,w]},gn={className:"comment",variants:[o.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:d+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),o.C_BLOCK_COMMENT_MODE,o.C_LINE_COMMENT_MODE]},hn=[o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,V,q,J,en,{match:/\$\d+/},b];w.contains=hn.concat({begin:/\{/,end:/\}/,keywords:L,contains:["self"].concat(hn)});const En=[].concat(gn,w.contains),Qn=En.concat([{begin:/(\s*)\(/,end:/\)/,keywords:L,contains:["self"].concat(En)}]),vn={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:L,contains:Qn},Z={variants:[{match:[/class/,/\s+/,d,/\s+/,/extends/,/\s+/,g.concat(d,"(",g.concat(/\./,d),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,d],scope:{1:"keyword",3:"title.class"}}]},pn={relevance:0,match:g.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[..._b,...Tb]}},ie={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},de={variants:[{match:[/function/,/\s+/,d,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[vn],illegal:/%/},se={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function me(P){return g.concat("(?!",P.join("|"),")")}const Ke={match:g.concat(/\b/,me([...Sb,"super","import","await"].map(P=>`${P}\\s*\\(`)),d,g.lookahead(/\s*\(/)),className:"title.function",relevance:0},Oe={begin:g.concat(/\./,g.lookahead(g.concat(d,/(?![0-9A-Za-z$_(])/))),end:d,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},ce={match:[/get|set/,/\s+/,d,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},vn]},Y="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+o.UNDERSCORE_IDENT_RE+")\\s*=>",cn={match:[/const|var|let/,/\s+/,d,/\s*/,/=\s*/,/(async\s*)?/,g.lookahead(Y)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[vn]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:L,exports:{PARAMS_CONTAINS:Qn,CLASS_REFERENCE:pn},illegal:/#(?![$_A-Za-z])/,contains:[o.SHEBANG({label:"shebang",binary:"node",relevance:5}),ie,o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,V,q,J,en,gn,{match:/\$\d+/},b,pn,{scope:"attr",match:d+g.lookahead(":"),relevance:0},cn,{begin:"("+o.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[gn,o.REGEXP_MODE,{className:"function",begin:Y,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:o.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:L,contains:Qn}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:S.begin,end:S.end},{match:R},{begin:k.begin,"on:begin":k.isTrulyOpeningTag,end:k.end}],subLanguage:"xml",contains:[{begin:k.begin,end:k.end,skip:!0,contains:["self"]}]}]},de,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+o.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[vn,o.inherit(o.TITLE_MODE,{begin:d,className:"title.function"})]},{match:/\.\.\./,relevance:0},Oe,{match:"\\$"+d,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[vn]},Ke,se,Z,ce,{match:/\$[(.]/}]}}var yr="[0-9](_*[0-9])*",lo=`\\.(${yr})`,so="[0-9a-fA-F](_*[0-9a-fA-F])*",Up={className:"number",variants:[{begin:`(\\b(${yr})((${lo})|\\.)?|(${lo}))[eE][+-]?(${yr})[fFdD]?\\b`},{begin:`\\b(${yr})((${lo})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${lo})[fFdD]?\\b`},{begin:`\\b(${yr})[fFdD]\\b`},{begin:`\\b0[xX]((${so})\\.?|(${so})?\\.(${so}))[pP][+-]?(${yr})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${so})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};function jb(o,g,h){return h===-1?"":o.replace(g,d=>jb(o,g,h-1))}function BS(o){const g=o.regex,h="[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",d="(?:(?:\\s*\\[\\s*])+)?",S=h+"<@@@>"+d,k="(?:"+("\\?(?:\\s+(?:extends|super)\\s+"+S+")?")+"|"+S+")",L=jb("(?:\\s*<\\s*"+k+"(?:\\s*,\\s*"+k+")*\\s*>)?",/<@@@>/g,2),w={keyword:["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do","sealed","yield","permits","goto","when"],literal:["false","true","null"],type:["char","boolean","long","float","int","byte","short","double"],built_in:["super","this"]},V={className:"meta",begin:"@"+h,contains:[{begin:/\(/,end:/\)/,contains:["self"]}]},q={className:"params",begin:/\(/,end:/\)/,keywords:w,relevance:0,contains:[o.C_BLOCK_COMMENT_MODE],endsParent:!0};return{name:"Java",aliases:["jsp"],keywords:w,illegal:/<\/|#/,contains:[o.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{begin:/import java\.[a-z]+\./,keywords:"import",relevance:2},o.C_LINE_COMMENT_MODE,o.C_BLOCK_COMMENT_MODE,{begin:/"""/,end:/"""/,className:"string",contains:[o.BACKSLASH_ESCAPE]},o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,{match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,h],className:{1:"keyword",3:"title.class"}},{match:/non-sealed/,scope:"keyword"},{beginKeywords:"new throw return else yield assert",relevance:0},{begin:[h,g.concat(L,d,/\s+/),h,d,/\s*/,/=(?!=)/],className:{1:"type",3:"variable",6:"operator"}},{begin:[/record/,/\s+/,h],className:{1:"keyword",3:"title.class"},contains:[q,o.C_LINE_COMMENT_MODE,o.C_BLOCK_COMMENT_MODE]},{begin:[h,g.concat(L,d,/\s+/),h,/\s*(?=\()/],className:{1:"type",3:"title.function"},keywords:w,contains:[{className:"params",begin:/\(/,end:/\)/,keywords:w,relevance:0,contains:[V,o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,Up,o.C_BLOCK_COMMENT_MODE]},o.C_LINE_COMMENT_MODE,o.C_BLOCK_COMMENT_MODE]},Up,V]}}function US(o){const g=o.regex,h=o.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),d="decltype\\(auto\\)",S="[a-zA-Z_]\\w*::",k="(?!struct)("+d+"|"+g.optional(S)+"[a-zA-Z_]\\w*"+g.optional("<[^<>]+>")+")",L={className:"type",begin:"\\b[a-z\\d_]*_t\\b"},G={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[o.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'("+"\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)"+"|.)",end:"'",illegal:"."},o.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\\s"]{0,16})\(/,end:/\)([^()\\\s"]{0,16})"/})]},D={className:"number",variants:[{begin:"[+-]?(?:(?:\\b[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|\\b[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|\\b0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)"},{begin:"[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)"}],relevance:0},b={scope:"meta",begin:/#\s*include\b/,end:/$/,keywords:{keyword:"include"},contains:[{begin:/\\\n/},G,{scope:"string",begin:/<.*?>/},h,o.C_BLOCK_COMMENT_MODE]},w={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},o.inherit(G,{className:"string"}),h,o.C_BLOCK_COMMENT_MODE]},V=[b,w],q={className:"title",begin:g.optional(S)+o.IDENT_RE,relevance:0},J=g.optional(S)+o.IDENT_RE+"\\s*\\(",en=12,_n=["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],gn=["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],hn=["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","flat_map","flat_set","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"],En=["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"],Z={type:gn,keyword:_n,literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],_type_hints:hn},pn={className:"function.dispatch",relevance:0,keywords:{_hint:En},begin:g.concat(/\b/,`(?!${_n.join("|")})`,o.IDENT_RE,g.lookahead(/(<[^<>]+>|)\s*\(/))},ie=[pn,...V,L,h,o.C_BLOCK_COMMENT_MODE,D,G],de={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:Z,contains:ie.concat([{begin:/\(/,end:/\)/,keywords:Z,contains:ie.concat(["self"]),relevance:0}]),relevance:0},se={className:"function",begin:"("+k+"[\\*&\\s]+){1,"+en+"}"+J,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:Z,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:d,keywords:Z,relevance:0},{begin:J,returnBegin:!0,contains:[q],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[G,D]},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:Z,relevance:0,contains:[h,o.C_BLOCK_COMMENT_MODE,G,D,L,{begin:/\(/,end:/\)/,keywords:Z,relevance:0,contains:["self",h,o.C_BLOCK_COMMENT_MODE,G,D,L]}]},L,h,o.C_BLOCK_COMMENT_MODE,...V]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:Z,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat(de,se,pn,ie,[...V,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function|flat_map|flat_set)\\s*<(?!<)",end:">",keywords:Z,contains:["self",L]},{begin:o.IDENT_RE+"::",keywords:Z},{match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],className:{1:"keyword",3:"title.class"}}])}}function HS(o){const g=o.regex,h=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),d=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],S=/[-+*\/%=<>&|^~]|\*\*?|\/\/?|<<=?|>>=?|\+=|-=|\*=|\/=|%=|@|<|>/,R=["bool","complex","dict","float","frozenset","int","list","set","str","tuple"],k=["add_vertex","add","append","backtrack","bit_length","clear","collect_words","connected","counting_sort","defaultdict","deque","dfs","dp","extend","find_max_index","find","heapify","heappop","heappush","insert","insertion_sort","join","ListNode","merge_sort","pop","popleft","print_trie","quick_sort","RECURRENCE_RELATION","remove","shuffle","sort","TreeNode","TrieNode","union","UnionFind","update"],L=["BASE_CASE","BOOLEAN","CONDITION","CRITERIA","ITERATE_OVER_INPUT","MAXIMUM_POSSIBLE_ANSWER","MINIMUM_POSSIBLE_ANSWER","OTHER_ARGUMENTS","SMALLEST_SUBPROBLEM","START_NODE","STATE_FOR_WHOLE_INPUT","STATE","WINDOW_CONDITION_BROKEN"],H=["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip",...k],G=["__debug__","Ellipsis","False","None","NotImplemented","True",...L],D=["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union",...R],b={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:d,built_in:H,literal:G,type:D},w={className:"meta",begin:/^(>>>|\.\.\.) /},V={className:"subst",begin:/\{/,end:/\}/,keywords:b,illegal:/#/},q={begin:/\{\{/,relevance:0},J={className:"string",contains:[o.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[o.BACKSLASH_ESCAPE,w],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[o.BACKSLASH_ESCAPE,w],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[o.BACKSLASH_ESCAPE,w,q,V]},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[o.BACKSLASH_ESCAPE,w,q,V]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[o.BACKSLASH_ESCAPE,q,V]},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[o.BACKSLASH_ESCAPE,q,V]},o.APOS_STRING_MODE,o.QUOTE_STRING_MODE]},en="[0-9](_?[0-9])*",_n=`(\\b(${en}))?\\.(${en})|\\b(${en})\\.`,gn=`\\b|${d.join("|")}`,hn={className:"number",relevance:0,variants:[{begin:`(\\b(${en})|(${_n}))[eE][+-]?(${en})[jJ]?(?=${gn})`},{begin:`(${_n})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${gn})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${gn})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${gn})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${gn})`},{begin:`\\b(${en})[jJ](?=${gn})`}]},En={className:"comment",begin:g.lookahead(/# type:/),end:/$/,keywords:b,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},Qn={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:b,contains:["self",w,hn,J,o.HASH_COMMENT_MODE,{scope:"params.operator",match:S},{scope:"params.comma",match:","},{scope:"params.self",match:/self/}]}]};return V.contains=[J,hn,w],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:b,illegal:/(<\/|\?)|=>/,contains:[w,hn,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},J,En,o.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,h],scope:{1:"keyword.def",3:"title.function"},contains:[Qn]},{variants:[{match:[/\bclass/,/\s+/,h,/\s*/,/\(\s*/,h,/\s*\)/]},{match:[/\bclass/,/\s+/,h]}],scope:{1:"keyword.class",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[hn,Qn,J]},{scope:"operator",match:S}]}}wl.registerLanguage("python",HS);wl.registerLanguage("javascript",zS);wl.registerLanguage("java",BS);wl.registerLanguage("cpp",US);function qS({code:o,language:g}){const h=U.useRef(null),[d,S]=U.useState(""),[R,k]=U.useState(""),L=Kn("hljs",g,Dp.code),H=()=>{if(h.current){const J=o.split(`
`).map((en,_n)=>{const gn=wl.highlight(en,{language:g}).value;return`<span class=${Dp.line} data-line-number=${_n+1}>${gn}</span>`}).join("");k(J)}},G=()=>{h.current?.querySelectorAll("span[data-line-number]")?.forEach(J=>J.addEventListener("click",w))},D=()=>{h.current?.querySelectorAll("span[data-line-number]")?.forEach(J=>J.removeEventListener("click",w))},b=()=>{h.current?.querySelector(`span[data-line-number="${d}"]`)?.removeAttribute("focused")},w=V=>{const q=V.currentTarget,J=q.getAttribute("data-line-number")??"";b(),J===d?S(""):(q.setAttribute("focused",""),S(J))};return Pp(h,b),U.useEffect(()=>(H(),G(),()=>D()),[o,R,d]),r.jsx("pre",{ref:h,children:r.jsx("code",{className:L,dangerouslySetInnerHTML:{__html:R}})})}const GS="_copyButton_fst3f_1",YS="_copySvg_fst3f_23",VS="_checkSvg_fst3f_30",IS="_checkSvgPath_fst3f_35",KS="_enter_fst3f_46",QS="_exit_fst3f_50",Ni={copyButton:GS,copySvg:YS,checkSvg:VS,checkSvgPath:IS,enter:KS,exit:QS};function XS({onClick:o}){const[g,h]=U.useState("show"),[d,S]=U.useState("hide"),R=Kn(Ni.copySvg,g==="enter"&&Ni.enter,g==="exit"&&Ni.exit),k=Kn(Ni.checkSvg,d==="exit"&&Ni.exit),L=Kn(Ni.checkSvgPath),H=()=>{g==="show"&&d==="hide"&&(h("exit"),o())},G=()=>{g==="enter"&&h("show"),g==="exit"&&(h("hide"),S("show"))},D=()=>{d==="show"&&setTimeout(()=>{S("exit")},500),d==="exit"&&(S("hide"),h("enter"))},b=()=>g!=="hide"&&r.jsx("svg",{className:R,viewBox:"0 0 512 512",onAnimationEnd:G,children:r.jsx("path",{d:"M64 464H288c8.8 0 16-7.2 16-16V384h48v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h64v48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM224 304H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16V288c0 8.8 7.2 16 16 16zm-64-16V64c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64z"})}),w=()=>d!=="hide"&&r.jsx("svg",{className:k,viewBox:"0 0 16 16",onAnimationEnd:D,children:r.jsx("path",{className:L,d:"M3.428571,9.14285714 L6.85714286,12.57142857 L12.5714286,3.42857143"})});return r.jsxs("button",{type:"button","aria-label":d==="hide"?"Copy code":"Copied",title:"Copy code",className:Ni.copyButton,onClick:H,children:[b(),w()]})}function JS(){return r.jsxs("svg",{viewBox:"0 0 128 128",children:[r.jsxs("linearGradient",{id:"python_svg__a",x1:70.252,x2:170.659,y1:1237.476,y2:1151.089,gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",gradientUnits:"userSpaceOnUse",children:[r.jsx("stop",{offset:0,stopColor:"#5A9FD4"}),r.jsx("stop",{offset:1,stopColor:"#306998"})]}),r.jsxs("linearGradient",{id:"python_svg__b",x1:209.474,x2:173.62,y1:1098.811,y2:1149.537,gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",gradientUnits:"userSpaceOnUse",children:[r.jsx("stop",{offset:0,stopColor:"#FFD43B"}),r.jsx("stop",{offset:1,stopColor:"#FFE873"})]}),r.jsx("path",{fill:"url(#python_svg__a)",d:"M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008M50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721",transform:"translate(0 10.26)"}),r.jsx("path",{fill:"url(#python_svg__b)",d:"M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692",transform:"translate(0 10.26)"}),r.jsxs("radialGradient",{id:"python_svg__c",cx:1825.678,cy:444.45,r:26.743,gradientTransform:"matrix(0 -.24 -1.055 0 532.979 557.576)",gradientUnits:"userSpaceOnUse",children:[r.jsx("stop",{offset:0,stopColor:"#B8B8B8",stopOpacity:.498}),r.jsx("stop",{offset:1,stopColor:"#7F7F7F",stopOpacity:0})]}),r.jsx("path",{fill:"url(#python_svg__c)",d:"M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416s14.815-6.417 33.092-6.417c18.275 0 33.091 2.872 33.091 6.417",opacity:.444})]})}function ZS(){return r.jsxs("svg",{viewBox:"0 0 128 128",children:[r.jsx("path",{fill:"#F0DB4F",d:"M1.408 1.408h125.184v125.185H1.408z"}),r.jsx("path",{fill:"#323330",d:"M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237"})]})}function FS(){return r.jsxs("svg",{id:"Layer_1",x:"0px",y:"0px",width:"306px",height:"344.35px",viewBox:"0 0 306 344.35",enableBackground:"new 0 0 306 344.35",children:[r.jsx("path",{fill:"#00599C",d:"M302.107,258.262c2.401-4.159,3.893-8.845,3.893-13.053V99.14c0-4.208-1.49-8.893-3.892-13.052L153,172.175L302.107,258.262z"}),r.jsx("path",{fill:"#004482",d:"M166.25,341.193l126.5-73.034c3.644-2.104,6.956-5.737,9.357-9.897L153,172.175L3.893,258.263c2.401,4.159,5.714,7.793,9.357,9.896l126.5,73.034C147.037,345.401,158.963,345.401,166.25,341.193z"}),r.jsx("path",{fill:"#659AD2",d:"M302.108,86.087c-2.402-4.16-5.715-7.793-9.358-9.897L166.25,3.156c-7.287-4.208-19.213-4.208-26.5,0L13.25,76.19C5.962,80.397,0,90.725,0,99.14v146.069c0,4.208,1.491,8.894,3.893,13.053L153,172.175L302.108,86.087z"}),r.jsx("g",{children:r.jsx("path",{fill:"#FFFFFF",d:"M153,274.175c-56.243,0-102-45.757-102-102s45.757-102,102-102c36.292,0,70.139,19.53,88.331,50.968l-44.143,25.544c-9.105-15.736-26.038-25.512-44.188-25.512c-28.122,0-51,22.878-51,51c0,28.121,22.878,51,51,51c18.152,0,35.085-9.776,44.191-25.515l44.143,25.543C223.142,254.644,189.294,274.175,153,274.175z"})}),r.jsx("g",{children:r.jsx("polygon",{fill:"#FFFFFF",points:"255,166.508 243.666,166.508 243.666,155.175 232.334,155.175 232.334,166.508 221,166.508221,177.841 232.334,177.841 232.334,189.175 243.666,189.175 243.666,177.841 255,177.841 	"})}),r.jsx("g",{children:r.jsx("polygon",{fill:"#FFFFFF",points:"297.5,166.508 286.166,166.508 286.166,155.175 274.834,155.175 274.834,166.508 263.5,166.508263.5,177.841 274.834,177.841 274.834,189.175 286.166,189.175 286.166,177.841 297.5,177.841 	"})})]})}function PS(){return r.jsxs("svg",{height:"800px",width:"800px",id:"Layer_1",viewBox:"0 0 511.998 511.998",children:[r.jsxs("g",{children:[r.jsx("path",{fill:"#DB380E",d:"M253.464,94.869c-23.658,16.639-50.471,35.498-64.838,66.699c-24.954,54.435,51.062,113.812,54.311,116.313c0.755,0.581,1.659,0.871,2.56,0.871c0.957,0,1.915-0.327,2.693-0.979c1.509-1.262,1.937-3.406,1.031-5.152c-0.275-0.53-27.561-53.53-26.547-91.552c0.359-13.243,18.892-28.266,38.512-44.171c17.97-14.568,38.34-31.079,50.258-50.394c26.164-42.516-2.916-84.322-3.213-84.74c-1.155-1.622-3.287-2.209-5.11-1.41c-1.821,0.804-2.83,2.773-2.414,4.72c0.059,0.277,5.714,27.923-10.022,56.406C284.203,73.25,269.959,83.268,253.464,94.869z"}),r.jsx("path",{fill:"#DB380E",d:"M353.137,113.617c1.669-1.257,2.159-3.55,1.15-5.38c-1.011-1.83-3.211-2.637-5.165-1.895c-4.019,1.528-98.416,37.915-98.416,81.88c0,30.307,12.946,46.317,22.399,58.009c3.708,4.586,6.909,8.546,7.964,11.927c2.97,9.743-4.066,27.353-7.025,33.317c-0.853,1.714-0.435,3.792,1.016,5.044c0.784,0.677,1.763,1.021,2.743,1.021c0.834,0,1.672-0.248,2.396-0.752c1.623-1.128,39.667-28.026,32.844-60.433c-2.542-12.318-8.595-21.318-13.936-29.26c-8.274-12.305-14.25-21.193-5.184-37.609C304.545,150.338,352.65,113.981,353.137,113.617z"})]}),r.jsxs("g",{children:[r.jsx("path",{fill:"#73A1FB",d:"M107.418,298.236c-1.618,4.845-0.854,9.651,2.207,13.903c10.233,14.207,46.48,22.029,102.068,22.029c0.003,0,0.005,0,0.007,0c7.532,0,15.484-0.148,23.629-0.44c88.875-3.181,121.839-30.869,123.199-32.046c1.482-1.283,1.878-3.419,0.957-5.147c-0.922-1.727-2.909-2.595-4.808-2.072c-31.301,8.546-89.748,11.58-130.288,11.58c-45.363,0-68.465-3.268-74.121-5.681c2.902-3.985,20.802-11.101,42.983-15.464c2.12-0.416,3.577-2.374,3.367-4.524s-2.016-3.79-4.177-3.79C179.439,276.584,114.234,277.628,107.418,298.236z"}),r.jsx("path",{fill:"#73A1FB",d:"M404.812,269.718c-18.331,0-35.714,9.188-36.446,9.577c-1.695,0.908-2.555,2.852-2.09,4.72c0.467,1.865,2.144,3.176,4.067,3.178c0.389,0,39.102,0.317,42.608,22.436c3.106,19.082-36.629,50-52.202,60.304c-1.682,1.113-2.335,3.263-1.554,5.123c0.665,1.583,2.206,2.573,3.868,2.573c0.29,0,0.584-0.03,0.876-0.092c3.696-0.791,90.406-19.899,81.238-70.384C439.584,276.213,420.138,269.718,404.812,269.718z"}),r.jsx("path",{fill:"#73A1FB",d:"M345.347,363.755c0.302-1.617-0.371-3.262-1.717-4.207l-20.791-14.563c-1.014-0.71-2.295-0.933-3.485-0.618c-0.217,0.055-21.959,5.771-53.525,9.276c-12.528,1.405-26.56,2.147-40.582,2.147c-31.558,0-52.192-3.708-55.197-6.428c-0.398-0.764-0.272-1.111-0.201-1.304c0.546-1.518,3.472-3.322,5.358-4.036c2.083-0.771,3.206-3.033,2.558-5.157c-0.646-2.127-2.837-3.378-4.999-2.859c-20.856,5.033-31.054,12.071-30.312,20.918c1.318,15.686,37.65,23.737,68.365,25.865c4.417,0.302,9.194,0.455,14.195,0.455c0.003,0,0.005,0,0.008,0c51.074,0,116.55-16.025,117.204-16.188C343.825,366.666,345.044,365.375,345.347,363.755z"}),r.jsx("path",{fill:"#73A1FB",d:"M188.602,397.419c1.575-1.024,2.273-2.971,1.714-4.764c-0.557-1.793-2.234-2.971-4.118-2.946c-2.795,0.074-27.349,1.182-29.068,16.815c-0.52,4.672,0.818,8.941,3.979,12.686c8.816,10.448,32.614,16.658,72.741,18.984c4.747,0.285,9.569,0.428,14.334,0.428c51.015,0,85.373-15.973,86.812-16.653c1.395-0.66,2.315-2.031,2.397-3.571s-0.687-3.001-2.003-3.806l-26.275-16.04c-0.912-0.556-2.003-0.74-3.043-0.527c-0.166,0.035-16.849,3.495-42.026,6.913c-4.764,0.648-10.73,0.977-17.73,0.977c-25.15,0-53.124-4.109-58.489-6.8C187.749,398.613,187.848,397.975,188.602,397.419z"}),r.jsx("path",{fill:"#73A1FB",d:"M224.408,486.85c116.854-0.099,179.571-20.88,191.653-33.957c4.277-4.626,4.739-9.006,4.376-11.867c-0.898-7.04-7.311-11.35-8.038-11.818c-1.754-1.128-4.108-0.833-5.476,0.745c-1.365,1.578-1.397,3.884-0.027,5.461c0.737,0.948,1.163,2.535-0.992,4.692c-4.83,4.511-53.545,18.204-134.656,22.318c-11.111,0.577-22.765,0.871-34.636,0.873c-72.623,0-125.772-9.948-132.749-15.744c2.689-3.864,21.489-10.037,41.482-13.529c2.253-0.393,3.775-2.516,3.426-4.776c-0.349-2.259-2.432-3.814-4.709-3.519c-0.564,0.077-2.478,0.191-4.694,0.327c-32.988,2.014-71.109,6.503-73.098,23.5c-0.604,5.179,0.935,9.881,4.576,13.973c8.909,10.01,34.516,23.319,153.558,23.319C224.406,486.85,224.406,486.85,224.408,486.85z"}),r.jsx("path",{fill:"#73A1FB",d:"M439.013,456.578c-1.652-0.764-3.604-0.378-4.836,0.952c-0.171,0.185-17.74,18.556-70.564,29.344c-20.223,4.052-58.183,6.107-112.826,6.107c-54.745,0-106.838-2.154-107.357-2.176c-2.176-0.106-4.037,1.476-4.333,3.618c-0.297,2.14,1.083,4.158,3.184,4.658c0.542,0.128,55.135,12.918,129.779,12.918c35.801,0,70.639-2.907,103.548-8.645c61.361-10.757,65.657-41.183,65.81-42.473C441.632,459.078,440.662,457.342,439.013,456.578z"})]})]})}const WS={python:JS,javascript:ZS,java:PS,cpp:FS},$S={python:{short:"Py",full:"Python"},javascript:{short:"JS",full:"JavaScript"},java:{short:"Java",full:"Java"},cpp:{short:"C++",full:"C++"}};function u({title:o,children:g}){const{selectedLanguage:h,setSelectedLanguage:d}=Vp(),S=U.Children.toArray(g),R=S.findIndex(w=>w.props.language===h),k=R===-1?0:R,L=S[k]?.props.code??"",H=S[k]?.props.language,G=w=>{d(S[w].props.language)},D=()=>navigator.clipboard.writeText(L),b=()=>S.map((w,V)=>{const q=WS[w.props.language],{short:J,full:en}=$S[w.props.language];return r.jsxs("button",{type:"button",role:"tab","aria-label":`${en} code`,"aria-selected":V===k,className:ro.tabButton,onClick:()=>G(V),children:[r.jsx(q,{}),r.jsx("span",{children:J})]},V)});return r.jsxs("div",{className:ro.container,children:[r.jsx("h3",{children:o}),r.jsxs("div",{className:ro.buttonContainer,children:[r.jsx("div",{role:"tablist",className:ro.tabButtonContainer,children:b()}),r.jsx(XS,{onClick:D})]}),r.jsx("div",{role:"tabpanel",className:"tabs-content",children:r.jsx(qS,{code:L,language:H})})]})}u.Tab=o=>r.jsx(r.Fragment,{children:o});function Nl({children:o}){return r.jsx("kbd",{className:O.kbd,"aria-hidden":"true",children:o})}function ud({mode:o,onMode:g}){return r.jsx("div",{className:O.seg,role:"group","aria-label":"View","aria-keyshortcuts":"M",children:["flow","map"].map(h=>r.jsx("button",{type:"button",className:Kn(O.segButton,o===h&&O.segOn),"aria-pressed":o===h,onClick:()=>g(h),children:h==="flow"?"Flow":"Map"},h))})}function Hp({leaf:o}){return r.jsx("a",{className:O.docsLink,href:o.docsUrl,target:"_blank",rel:"noreferrer",children:"Read the docs for this pattern"})}function nj({leaf:o}){const g=SS(o.id);return g.length===0?r.jsxs("div",{className:Kn(O.templates,O.note),children:[r.jsxs("p",{children:[r.jsx("strong",{children:"No template yet"})," for this pattern variant."]}),r.jsx("p",{children:o.summary}),r.jsx(Hp,{leaf:o})]}):r.jsxs("div",{className:O.templates,children:[g.map((h,d)=>r.jsx(u,{title:h.title,children:ld.map(S=>r.jsx(u.Tab,{language:S,code:h.code[S]},S))},`${o.id}-${d}`)),r.jsx(Hp,{leaf:o})]})}function ej(o){return o.started?o.leaf?r.jsxs(r.Fragment,{children:["Run complete, ",r.jsx("b",{children:o.leaf.name})]}):r.jsxs(r.Fragment,{children:["Run paused, ",r.jsxs("b",{children:["check ",o.steps.length+1]})]}):r.jsxs(r.Fragment,{children:["No run, ",r.jsx("b",{children:"clock not started"})]})}function Ew({run:o,detail:g}){return r.jsxs("header",{className:O.strip,children:[r.jsxs("p",{className:O.stripTitle,children:["Map",r.jsx("span",{className:O.stripValue,children:g})]}),r.jsxs("div",{className:O.stripEnd,children:[r.jsx("span",{className:O.mapStatus,role:"status",children:ej(o)}),r.jsx(ud,{mode:o.mode,onMode:o.setMode})]})]})}const tj=100;function aj(o){const g=U.useRef(0),h=U.useRef(null),[d,S]=U.useState(0),[R,k]=U.useState(!1),L=()=>{const J=h.current===null?0:performance.now()-h.current;return g.current+J},H=J=>Math.floor(J/1e3)*1e3;U.useEffect(()=>{if(!R)return;const J=setInterval(()=>{const en=H(L());S(_n=>_n===en?_n:en)},tj);return()=>clearInterval(J)},[R]);const G=U.useCallback(()=>{g.current=0,h.current=performance.now(),S(0),k(!0)},[]),D=U.useCallback(()=>{h.current!==null&&(g.current=L(),h.current=null),S(g.current),k(!1)},[]),b=U.useCallback(()=>{h.current===null&&(h.current=performance.now()),S(H(L())),k(!0)},[]),w=U.useCallback(()=>{g.current=0,h.current=null,S(0),k(!1)},[]),V=o-d,q=d>=o;return{elapsedMs:d,remainingMs:V,overtimeMs:q?d-o:0,isOvertime:q,isRunning:R,start:G,stop:D,resume:b,reset:w}}const qp=30,ij=10;function rj(o){return o.isContentEditable||["INPUT","TEXTAREA","SELECT","OPTION"].includes(o.tagName)?!0:o.closest('input, textarea, select, [role="listbox"], [role="combobox"]')!==null}const lj=o=>String(o).padStart(2,"0");function xr(o){const g=Math.max(0,o);return`${Math.floor(g/60)}:${lj(g%60)}`}function sj(){const o=aj(qp*1e3),[g,h]=U.useState(!1),[d,S]=U.useState([]),[R,k]=U.useState(!1),[L,H]=U.useState("flow"),G=U.useRef(null),D=d.length>0?d[d.length-1].option.next:wi.rootId,b=g?wi.leaves[D]:void 0,w=g?wi.nodes[D]:void 0;U.useEffect(()=>{G.current?.focus()},[g,D,L]);const V=U.useCallback(()=>{h(!0),o.start()},[o]),q=U.useCallback(vn=>{w&&(S(Z=>[...Z,{question:w.question,option:vn}]),wi.leaves[vn.next]&&o.stop())},[w,o]),J=U.useCallback(vn=>{vn<0||vn>=d.length||(S(d.slice(0,vn)),k(!1),b&&o.resume())},[d,b,o]),en=U.useCallback(()=>J(d.length-1),[J,d.length]),_n=U.useCallback(()=>k(vn=>!vn),[]),gn=U.useCallback(vn=>{vn!==L&&(H(vn),!(!g||b)&&(vn==="map"?o.stop():o.resume()))},[L,g,b,o]),hn=U.useCallback(()=>gn(L==="flow"?"map":"flow"),[gn,L]),En=U.useCallback(()=>{o.reset(),h(!1),S([]),k(!1)},[o]);U.useEffect(()=>{const vn=Z=>{if(Z.metaKey||Z.ctrlKey||Z.altKey)return;const pn=Z.target;if(!(pn&&rj(pn))){if(Z.key==="m"||Z.key==="M")return Z.repeat?void 0:hn();if(L==="flow"){if(Z.key==="Escape")return En();if(Z.key==="Backspace"&&g&&d.length>0)return Z.preventDefault(),en();if(Z.key==="Enter"&&!g&&pn?.tagName!=="BUTTON")return V();if((Z.key==="t"||Z.key==="T")&&b)return _n();if(/^[1-9]$/.test(Z.key)&&w){const ie=w.options[Number(Z.key)-1];ie&&q(ie)}}}};return window.addEventListener("keydown",vn),()=>window.removeEventListener("keydown",vn)},[L,g,d.length,w,b,q,en,En,V,_n,hn]);const Qn=Math.max(0,Math.ceil(o.remainingMs/1e3));return{budget:qp,mode:L,setMode:gn,toggleMode:hn,started:g,steps:d,currentId:D,node:w,leaf:b,isOvertime:o.isOvertime,isWarn:!o.isOvertime&&Qn<=ij,elapsedSeconds:Math.floor(o.elapsedMs/1e3),remainingSeconds:Qn,overSeconds:Math.floor(o.overtimeMs/1e3),showTemplate:R,toggleTemplate:_n,stageRef:G,start:V,pick:q,backtrack:en,backtrackTo:J,reset:En}}const oj=U.lazy(()=>Wp(()=>import("./MapView-iaXZX-ih.js"),__vite__mapDeps([0,1,2,3]))),cj=U.lazy(()=>Wp(()=>import("./MapOutline-D7oehlz7.js"),__vite__mapDeps([4,1,2]))),uj={maxWidth:760};function oo({text:o,sign:g,tone:h,caption:d,label:S}){return r.jsxs("div",{className:Kn(O.timer,O[h]),role:"timer","aria-live":"off","aria-label":S,children:[r.jsxs("span",{className:O.cells,"aria-hidden":"true",children:[r.jsx("span",{className:Kn(O.cell,O.signCell),children:g?"+":""}),o.split("").map((R,k)=>R===":"?r.jsx("span",{className:O.colon,children:":"},k):r.jsx("span",{className:O.cell,children:R},k))]}),r.jsx("span",{className:O.timerCaption,"aria-hidden":"true",children:d})]})}function dj({run:o}){if(!o.started){const h=xr(o.budget);return r.jsx(oo,{text:h,sign:!1,tone:"idle",caption:"budget",label:`Budget ${h}`})}if(o.leaf){const h=xr(o.elapsedSeconds);return r.jsx(oo,{text:h,sign:!1,tone:o.isOvertime?"over":"ok",caption:"taken",label:`Time taken ${h}`})}if(o.isOvertime){const h=xr(o.overSeconds);return r.jsx(oo,{text:h,sign:!0,tone:"over",caption:"over budget",label:`${h} over budget`})}const g=xr(o.remainingSeconds);return r.jsx(oo,{text:g,sign:!1,tone:o.isWarn?"warn":"ok",caption:"left",label:`${g} left`})}function fj({run:o}){const{started:g,steps:h,leaf:d,node:S}=o,R=g&&!d&&!S,k=!d&&!R;return r.jsx("nav",{className:O.line,"aria-label":"Your path so far",children:r.jsxs("ol",{className:O.stops,children:[h.map((L,H)=>r.jsx("li",{className:Kn(O.stop,O.answered),children:r.jsxs("button",{type:"button",className:O.stopButton,title:`${L.question} ${L.option.cue}`,"aria-label":`Back to question ${H+1}: ${L.question} You picked: ${L.option.cue}`,onClick:()=>o.backtrackTo(H),children:[r.jsx("span",{className:O.dot,"aria-hidden":"true"}),r.jsx("span",{className:O.cue,children:L.option.cue})]})},H)),k&&r.jsx("li",{className:Kn(O.stop,O.current,O.dashedNext),"aria-current":"step",children:r.jsxs("span",{className:O.stopInner,children:[r.jsx("span",{className:O.dot,"aria-hidden":"true"}),r.jsx("span",{className:O.srOnly,children:g?`Question ${h.length+1}, current`:"Ready to start"})]})}),d&&r.jsx("li",{className:Kn(O.stop,O.reached),"aria-current":"step",children:r.jsxs("span",{className:O.stopInner,children:[r.jsx("span",{className:O.dot,"aria-hidden":"true"}),r.jsxs("span",{className:O.srOnly,children:["Result: ",d.name]})]})}),k&&r.jsx("li",{className:Kn(O.stop,O.end),"aria-hidden":"true",children:r.jsx("span",{className:O.stopInner,children:r.jsx("span",{className:O.dot})})}),R&&r.jsx("li",{className:Kn(O.stop,O.fault),"aria-current":"step",children:r.jsxs("span",{className:O.stopInner,children:[r.jsx("span",{className:O.dot,"aria-hidden":"true"}),r.jsx("span",{className:O.srOnly,children:"This path leads nowhere"})]})})]})})}function co({label:o,value:g,run:h}){return r.jsxs("header",{className:O.strip,children:[r.jsxs("p",{className:O.stripTitle,children:[o,r.jsx("span",{className:O.stripValue,children:g})]}),r.jsxs("div",{className:O.stripEnd,children:[r.jsx(ud,{mode:h.mode,onMode:h.setMode}),r.jsx(dj,{run:h})]})]})}function td({run:o}){return r.jsxs("footer",{className:O.footer,children:[o.started&&(o.node||o.leaf)&&r.jsxs("button",{type:"button",className:O.plain,onClick:o.backtrack,disabled:o.steps.length===0,"aria-keyshortcuts":"Backspace",children:["Backtrack ",r.jsx(Nl,{children:"Bksp"})]}),r.jsxs("button",{type:"button",className:O.plain,onClick:o.reset,"aria-keyshortcuts":"Escape",children:["Reset ",r.jsx(Nl,{children:"Esc"})]})]})}function hj({run:o}){return r.jsx("section",{className:Kn(O.card,O.mapFallback),"aria-label":"Map","aria-busy":"true",children:r.jsxs("header",{className:O.strip,children:[r.jsxs("p",{className:O.stripTitle,children:["Map",r.jsx("span",{className:O.stripValue,children:"Loading"})]}),r.jsx("div",{className:O.stripEnd,children:r.jsx(ud,{mode:o.mode,onMode:o.setMode})})]})})}function gj(){const o=sj(),g=Fp(uj),h=()=>r.jsxs(r.Fragment,{children:[r.jsx(co,{run:o,label:"Procedure",value:"Ready"}),r.jsxs("div",{className:O.body,children:[r.jsxs("h2",{ref:o.stageRef,tabIndex:-1,className:O.question,children:["Name the pattern in ",o.budget," seconds"]}),r.jsx("p",{className:O.lead,children:"Open the problem, then pick the cue that sounds most like it. Overtime is shown, not enforced."}),r.jsx("div",{className:O.actions,children:r.jsxs("button",{type:"button",className:O.primary,onClick:o.start,"aria-keyshortcuts":"Enter",children:["Start ",r.jsx(Nl,{children:"Enter"})]})})]},"idle")]}),d=L=>r.jsxs(r.Fragment,{children:[r.jsx(co,{run:o,label:"Procedure",value:`Q${o.steps.length+1}`}),r.jsxs("div",{className:O.body,children:[r.jsx("h2",{ref:o.stageRef,tabIndex:-1,className:O.question,children:L.question}),r.jsx("ol",{className:O.options,children:L.options.map((H,G)=>r.jsx("li",{children:r.jsxs("button",{type:"button",className:O.option,onClick:()=>o.pick(H),"aria-keyshortcuts":G<9?String(G+1):void 0,children:[G<9&&r.jsx(Nl,{children:G+1}),r.jsx("span",{className:O.optionCue,children:H.cue})]})},H.cue))})]},L.id),r.jsx(td,{run:o})]}),S=L=>{const H=xr(o.elapsedSeconds);return r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:O.srOnly,role:"status","aria-live":"polite",children:["Pattern found: ",L.name,", ",L.pattern,". Time taken ",H,"."]}),r.jsx(co,{run:o,label:"Memory item",value:"Result"}),r.jsxs("div",{className:O.body,children:[r.jsx("h2",{ref:o.stageRef,tabIndex:-1,className:O.resultName,children:L.name}),r.jsxs("dl",{className:O.fields,children:[r.jsxs("div",{className:O.field,children:[r.jsx("dt",{children:"Pattern"}),r.jsx("dd",{children:L.pattern})]}),r.jsxs("div",{className:O.field,children:[r.jsx("dt",{children:"Time taken"}),r.jsxs("dd",{children:[r.jsx("span",{className:O.figure,children:H}),o.isOvertime?r.jsxs("span",{className:O.overNote,children:["+",xr(o.overSeconds)," over the ",o.budget,"s budget"]}):r.jsxs("span",{className:O.okNote,children:["within the ",o.budget,"s budget"]})]})]})]}),r.jsx("p",{className:O.summary,children:L.summary}),r.jsx("div",{className:O.actions,children:r.jsxs("button",{type:"button",className:O.primary,"aria-expanded":o.showTemplate,"aria-keyshortcuts":"T",onClick:o.toggleTemplate,children:[o.showTemplate?"Hide template":"View template"," ",r.jsx(Nl,{children:"T"})]})}),o.showTemplate&&r.jsx(nj,{leaf:L})]},L.id),r.jsx(td,{run:o})]})},R=()=>r.jsxs(r.Fragment,{children:[r.jsx(co,{run:o,label:"Procedure",value:"Fault"}),r.jsxs("div",{className:O.body,children:[r.jsx("h2",{ref:o.stageRef,tabIndex:-1,className:O.question,children:"This path leads nowhere"}),r.jsx("p",{className:O.lead,children:"The cue you picked has no next check. Reset and run the procedure again."})]},"broken"),r.jsx(td,{run:o})]});let k;return o.started?o.leaf?k=S(o.leaf):o.node?k=d(o.node):k=R():k=h(),o.mode==="map"?r.jsx("div",{className:Kn(O.finder,O.mapMode),children:r.jsx(U.Suspense,{fallback:r.jsx(hj,{run:o}),children:g?r.jsx(cj,{run:o}):r.jsx(oj,{run:o})})}):r.jsxs("div",{className:O.finder,children:[g?r.jsx(fj,{run:o}):r.jsx(_S,{run:o}),r.jsx("section",{className:O.card,"aria-label":"Procedure",children:k})]})}const pj="_root_3jvua_1",mj="_h2_3jvua_25",vj="_h3_3jvua_35",bj="_lede_3jvua_45",yj="_origin_3jvua_52",xj="_srOnly_3jvua_59",_j="_ext_3jvua_71",Tj="_diff_3jvua_83",Sj="_pips_3jvua_96",jj="_pip_3jvua_96",Nj="_pipOn_3jvua_108",wj="_easy_3jvua_112",Ej="_medium_3jvua_116",Oj="_hard_3jvua_120",Aj="_primary_3jvua_124",kj="_ghost_3jvua_148",Mj="_a_3jvua_167",Rj="_aHead_3jvua_176",Cj="_aStats_3jvua_181",Lj="_aIndex_3jvua_223",Dj="_aSection_3jvua_249",zj="_aStrip_3jvua_255",Bj="_aCount_3jvua_280",Uj="_aRows_3jvua_289",Hj="_aRow_3jvua_289",qj="_aNum_3jvua_312",Gj="_aLc_3jvua_325",Yj="_aText_3jvua_349",Vj="_aLink_3jvua_355",Ij="_aMove_3jvua_366",Kj="_band_3jvua_381",Qj="_bandList_3jvua_395",Xj="_bandItem_3jvua_412",Jj="_bandKey_3jvua_434",Zj="_bandName_3jvua_448",Fj="_bandOn_3jvua_457",qn={root:pj,h2:mj,h3:vj,lede:bj,origin:yj,srOnly:xj,ext:_j,diff:Tj,pips:Sj,pip:jj,pipOn:Nj,easy:wj,medium:Ej,hard:Oj,primary:Aj,ghost:kj,a:Mj,aHead:Rj,aStats:Cj,aIndex:Lj,aSection:Dj,aStrip:zj,aCount:Bj,aRows:Uj,aRow:Hj,aNum:qj,aLc:Gj,aText:Yj,aLink:Vj,aMove:Ij,band:Kj,bandList:Qj,bandItem:Xj,bandKey:Jj,bandName:Zj,bandOn:Fj},Pj={E:"Easy",M:"Medium",H:"Hard"},na=([o,g,h,d,S,R])=>({n:o,lc:g,name:h,slug:d,difficulty:Pj[S],ask:R}),xa=[{id:"arrays-hashing",name:"Arrays & Hashing",why:"Trade memory for lookups. The first move on most problems.",problems:[[1,217,"Contains Duplicate","contains-duplicate","E","Does any value appear at least twice in the array?"],[2,242,"Valid Anagram","valid-anagram","E","Are two strings made of exactly the same letters?"],[3,1,"Two Sum","two-sum","E","Find the two numbers in an array that add up to a target."],[4,49,"Group Anagrams","group-anagrams","M","Group the strings that are anagrams of each other."],[5,347,"Top K Frequent Elements","top-k-frequent-elements","M","Return the k values that appear most often."],[6,36,"Valid Sudoku","valid-sudoku","M","Is a partly filled 9×9 board free of repeats in every row, column and box?"],[7,238,"Product of Array Except Self","product-of-array-except-self","M","For each index, the product of every other element, without division."],[8,128,"Longest Consecutive Sequence","longest-consecutive-sequence","M","Length of the longest run of consecutive integers, in O(n)."]].map(o=>na(o))},{id:"two-pointers",name:"Two Pointers",why:"Turn a nested loop into one pass from both ends.",problems:[[9,125,"Valid Palindrome","valid-palindrome","E","Is the string a palindrome, ignoring case and non-alphanumerics?"],[10,167,"Two Sum II - Input Array Is Sorted","two-sum-ii-input-array-is-sorted","M","Two Sum on a sorted array, using constant extra space."],[11,15,"3Sum","3sum","M","Find all unique triplets that sum to zero."],[12,11,"Container With Most Water","container-with-most-water","M","Pick two lines that, with the x-axis, hold the most water."]].map(o=>na(o))},{id:"sliding-window",name:"Sliding Window",why:"Grow right, shrink left, keep the window valid.",problems:[[13,121,"Best Time to Buy and Sell Stock","best-time-to-buy-and-sell-stock","E","Maximum profit from one buy followed by one sell."],[14,3,"Longest Substring Without Repeating Characters","longest-substring-without-repeating-characters","M","Length of the longest substring with no repeated characters."],[15,424,"Longest Repeating Character Replacement","longest-repeating-character-replacement","M","Longest substring that can become one repeated letter with at most k changes."]].map(o=>na(o))},{id:"stack",name:"Stack",why:"The most recent unresolved thing is the next one to resolve.",problems:[[16,20,"Valid Parentheses","valid-parentheses","E","Are all brackets closed in the right order?"],[17,155,"Min Stack","min-stack","M","Design a stack that returns its minimum in constant time."],[18,739,"Daily Temperatures","daily-temperatures","M","For each day, how many days until a warmer one?"]].map(o=>na(o))},{id:"binary-search",name:"Binary Search",why:"Discard half the space per step, even when the array is rotated.",problems:[[19,704,"Binary Search","binary-search","E","Find a target in a sorted array in O(log n)."],[20,153,"Find Minimum in Rotated Sorted Array","find-minimum-in-rotated-sorted-array","M","Find the smallest value in a sorted array rotated at an unknown point."],[21,33,"Search in Rotated Sorted Array","search-in-rotated-sorted-array","M","Find a target in a rotated sorted array in O(log n)."]].map(o=>na(o))},{id:"linked-list",name:"Linked List",why:"Pointer surgery: dummy heads, fast and slow, reversal.",problems:[[22,206,"Reverse Linked List","reverse-linked-list","E","Reverse a singly linked list."],[23,21,"Merge Two Sorted Lists","merge-two-sorted-lists","E","Merge two sorted lists into one sorted list."],[24,143,"Reorder List","reorder-list","M","Reorder L0 → L1 → … → Ln into L0 → Ln → L1 → Ln-1 → …, in place."],[25,19,"Remove Nth Node From End of List","remove-nth-node-from-end-of-list","M","Remove the nth node from the end of a list in one pass."],[26,141,"Linked List Cycle","linked-list-cycle","E","Does a linked list contain a cycle?"],[27,146,"LRU Cache","lru-cache","M","Design a cache that evicts the least recently used key, with O(1) operations."]].map(o=>na(o))},{id:"tree-recursion",name:"Tree Recursion",why:"Solve the subtree, then combine at the node.",problems:[[28,226,"Invert Binary Tree","invert-binary-tree","E","Mirror a binary tree left to right."],[29,104,"Maximum Depth of Binary Tree","maximum-depth-of-binary-tree","E","How many levels deep is a binary tree?"],[30,543,"Diameter of Binary Tree","diameter-of-binary-tree","E","Length of the longest path between any two nodes in a tree."],[31,110,"Balanced Binary Tree","balanced-binary-tree","E","Do all nodes have left and right subtree heights that differ by at most one?"],[32,100,"Same Tree","same-tree","E","Are two binary trees identical in shape and values?"],[33,572,"Subtree of Another Tree","subtree-of-another-tree","E","Does one tree appear as a subtree of another?"]].map(o=>na(o))},{id:"tree-traversal-bst",name:"Traversal & BST",why:"Pick the traversal that carries the state you need.",problems:[[34,235,"Lowest Common Ancestor of a Binary Search Tree","lowest-common-ancestor-of-a-binary-search-tree","M","Find the lowest common ancestor of two nodes in a binary search tree."],[35,102,"Binary Tree Level Order Traversal","binary-tree-level-order-traversal","M","Return the node values level by level."],[36,199,"Binary Tree Right Side View","binary-tree-right-side-view","M","Which nodes are visible when looking at a tree from the right?"],[37,1448,"Count Good Nodes in Binary Tree","count-good-nodes-in-binary-tree","M","Count the nodes that are no smaller than any ancestor on their path from the root."],[38,98,"Validate Binary Search Tree","validate-binary-search-tree","M","Is a binary tree a valid binary search tree?"],[39,230,"Kth Smallest Element in a BST","kth-smallest-element-in-a-bst","M","Return the kth smallest value in a binary search tree."]].map(o=>na(o))},{id:"heap",name:"Heap",why:"Keep only the k best, or always the next best.",problems:[[40,703,"Kth Largest Element in a Stream","kth-largest-element-in-a-stream","E","Return the kth largest value each time a new number arrives."],[41,1046,"Last Stone Weight","last-stone-weight","E","Repeatedly smash the two heaviest stones together; what weight is left?"],[42,215,"Kth Largest Element in an Array","kth-largest-element-in-an-array","M","Return the kth largest element of an unsorted array."]].map(o=>na(o))},{id:"graphs",name:"Graphs",why:"Flood fill the grid, clone with a map, order with indegrees.",problems:[[43,200,"Number of Islands","number-of-islands","M","Count the islands in a grid of land and water."],[44,695,"Max Area of Island","max-area-of-island","M","Find the area of the largest island in a grid."],[45,133,"Clone Graph","clone-graph","M","Make a deep copy of a connected undirected graph."],[46,417,"Pacific Atlantic Water Flow","pacific-atlantic-water-flow","M","Which cells can send water to both the Pacific and the Atlantic?"],[47,130,"Surrounded Regions","surrounded-regions","M","Capture every region of O's completely surrounded by X's."],[48,207,"Course Schedule","course-schedule","M","Can all courses be finished, given their prerequisites?"],[49,210,"Course Schedule II","course-schedule-ii","M","Return a valid order to take all courses, if one exists."]].map(o=>na(o))}],uo=xa.flatMap(o=>o.problems),Wj=o=>`https://leetcode.com/problems/${o}/`,fo={total:uo.length,patterns:xa.length,easy:uo.filter(o=>o.difficulty==="Easy").length,medium:uo.filter(o=>o.difficulty==="Medium").length,hard:uo.filter(o=>o.difficulty==="Hard").length},$j="A curated list of LeetCode and data structure/algorithm problems designed around the 80/20 rule, focusing on high-impact topics that deliver 90–95% of the results needed for software engineering coding interviews.",n2="Credit to Aman Manazir for coming up with this list.";function e2(){return r.jsx("svg",{className:qn.ext,viewBox:"0 0 12 12","aria-hidden":"true",children:r.jsx("path",{d:"M4.5 2.5h5v5M9.5 2.5 3 9"})})}const t2={Easy:1,Medium:2,Hard:3};function a2({d:o,label:g=!0}){return r.jsxs("span",{className:Kn(qn.diff,qn[o.toLowerCase()]),children:[r.jsx("span",{className:qn.pips,"aria-hidden":"true",children:[1,2,3].map(h=>r.jsx("span",{className:Kn(qn.pip,h<=t2[o]&&qn.pipOn)},h))}),r.jsx("span",{className:g?qn.diffLabel:qn.srOnly,children:o})]})}const ad="1234567890",jl=o=>`pareto-${o}`;function i2(){const[o,g]=U.useState(xa[0].id),h=d=>{const S=window.matchMedia("(prefers-reduced-motion: reduce)").matches;document.getElementById(jl(d))?.scrollIntoView({block:"start",behavior:S?"auto":"smooth"}),g(d)};return U.useEffect(()=>{const d=new Set,S=new IntersectionObserver(R=>{for(const L of R){const H=L.target.id.replace("pareto-","");L.isIntersecting?d.add(H):d.delete(H)}const k=xa.find(L=>d.has(L.id));k&&g(k.id)},{rootMargin:"-25% 0px -65% 0px"});return xa.forEach(R=>{const k=document.getElementById(jl(R.id));k&&S.observe(k)}),()=>S.disconnect()},[]),U.useEffect(()=>{const d=S=>{if(S.target.closest("input, textarea, select, [contenteditable]")||S.metaKey||S.ctrlKey||S.altKey)return;const k=ad.indexOf(S.key);k>=0&&k<xa.length&&h(xa[k].id)};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[]),r.jsx("div",{className:qn.root,children:r.jsxs("div",{className:qn.a,children:[r.jsxs("header",{className:qn.aHead,children:[r.jsx("h2",{className:qn.h2,children:"The Pareto Set"}),r.jsx("p",{className:qn.lede,children:$j}),r.jsx("p",{className:qn.origin,children:n2}),r.jsxs("dl",{className:qn.aStats,children:[r.jsxs("div",{children:[r.jsx("dt",{children:"Problems"}),r.jsx("dd",{children:fo.total})]}),r.jsxs("div",{children:[r.jsx("dt",{children:"Patterns"}),r.jsx("dd",{children:fo.patterns})]}),r.jsxs("div",{children:[r.jsx("dt",{children:"Easy"}),r.jsx("dd",{children:fo.easy})]}),r.jsxs("div",{children:[r.jsx("dt",{children:"Medium"}),r.jsx("dd",{children:fo.medium})]})]})]}),r.jsx("nav",{className:qn.band,"aria-label":"Patterns",children:r.jsx("ol",{className:qn.bandList,children:xa.map((d,S)=>r.jsx("li",{children:r.jsxs("button",{type:"button",className:Kn(qn.bandItem,d.id===o&&qn.bandOn),"aria-current":d.id===o?"true":void 0,"aria-keyshortcuts":ad[S],onClick:()=>h(d.id),children:[r.jsx("span",{className:qn.bandKey,children:ad[S]}),r.jsx("span",{className:qn.bandName,children:d.name})]})},d.id))})}),xa.map(d=>r.jsxs("section",{id:jl(d.id),className:qn.aSection,"aria-labelledby":`${jl(d.id)}-h`,children:[r.jsxs("div",{className:qn.aStrip,children:[r.jsx("h3",{id:`${jl(d.id)}-h`,className:qn.h3,children:d.name}),r.jsx("p",{children:d.why}),r.jsxs("span",{className:qn.aCount,children:[d.problems.length," problems"]})]}),r.jsx("ol",{className:qn.aRows,children:d.problems.map(S=>r.jsxs("li",{className:qn.aRow,children:[r.jsx("span",{className:qn.aNum,children:S.n}),r.jsxs("span",{className:qn.aText,children:[r.jsxs("a",{href:Wj(S.slug),target:"_blank",rel:"noopener noreferrer",className:qn.aLink,children:[S.name,r.jsx("span",{className:qn.srOnly,children:" on LeetCode (opens in a new tab)"})]}),r.jsx("span",{className:qn.aMove,children:S.ask})]}),r.jsxs("span",{className:qn.aLc,children:["LC ",S.lc]}),r.jsx(a2,{d:S.difficulty}),r.jsx(e2,{})]},S.slug))})]},d.id))]})})}const r2="_container_1htmy_1",l2="_sectionHeader_1htmy_7",Jn={container:r2,sectionHeader:l2},s2="_container_13ll4_1",o2="_label_13ll4_13",c2="_tableWrapper_13ll4_21",u2="_dataRow_13ll4_30",d2="_red_13ll4_51",f2="_oliveGreen_13ll4_55",h2="_green_13ll4_59",g2="_orange_13ll4_63",p2="_yellow_13ll4_67",m2="_gray_13ll4_71",m={container:s2,label:o2,tableWrapper:c2,dataRow:u2,red:d2,oliveGreen:f2,green:h2,orange:g2,yellow:p2,gray:m2};function v2(){const o={red:"var(--color-red-alpha)",orange:"var(--color-orange-alpha)",yellow:"var(--color-yellow-alpha)",oliveGreen:"var(--color-olive-green-alpha)",green:"var(--color-green-alpha)"};return r.jsx("section",{id:"bigo-chart",children:r.jsxs("div",{className:m.container,children:[r.jsx("h3",{children:"Big-O Complexity Chart"}),r.jsxs("svg",{id:"chart",viewBox:"0 0 800 500",style:{color:"var(--pd-text)"},children:[r.jsx("path",{d:"M50 450 L 50 0 L 800 0 L 800 450 Z",fill:o.red}),r.jsx("path",{d:"M50 450 L 800 0 L 800 450 Z",fill:o.orange}),r.jsx("path",{d:"M50 450 L 800 450 L 800 330 Z",fill:o.yellow}),r.jsx("path",{d:"M50 450 L 800 450 L 800 410 Z",fill:o.oliveGreen}),r.jsx("path",{d:"M50 450 L 800 450 L 800 440 Z",fill:o.green}),r.jsx("path",{d:"M50 0 L 50 450 L 800 450",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),r.jsx("path",{d:"M50 448 L 800 448",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),r.jsx("text",{x:"700",y:"438",fill:"currentColor",children:"O(log n), O(1)"}),r.jsx("path",{d:"M50 450 L 800 400",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),r.jsx("text",{x:"760",y:"390",fill:"currentColor",children:"O(n)"}),r.jsx("path",{d:"M50 450 Q 400 350, 800 150",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),r.jsx("text",{x:"630",y:"190",fill:"currentColor",children:"O(n log n)"}),r.jsx("path",{d:"M50 450 Q 180 380, 250 0",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),r.jsx("text",{x:"260",y:"30",fill:"currentColor",children:"O(n^2)"}),r.jsx("path",{d:"M50 450 C 100 430, 120 350, 120 0",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),r.jsx("text",{x:"125",y:"20",fill:"currentColor",children:"O(2^n)"}),r.jsx("path",{d:"M50 450 C 80 450, 80 350, 80 0",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),r.jsx("text",{x:"80",y:"20",fill:"currentColor",children:"O(n!)"}),r.jsx("text",{className:m.label,x:"0",y:"0",transform:"translate(30 230) rotate(-90)",fill:"currentColor",children:"Operations"}),r.jsx("text",{className:m.label,x:"0",y:"0",transform:"translate(420 470)",fill:"currentColor",children:"Elements"})]})]})})}function b2(){return r.jsx("section",{id:"bigo-data-structure-operations-table",children:r.jsxs("div",{className:m.container,children:[r.jsx("h3",{children:"Data Structure Operations"}),r.jsx("div",{className:m.tableWrapper,children:r.jsx("table",{className:m.table,children:r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("th",{children:"Data Structure"}),r.jsx("th",{colSpan:8,children:"Time Complexity"}),r.jsx("th",{children:"Space Complexity"})]}),r.jsxs("tr",{children:[r.jsx("th",{}),r.jsx("th",{colSpan:4,children:"Average"}),r.jsx("th",{colSpan:4,children:"Worst"}),r.jsx("th",{children:"Worst"})]}),r.jsxs("tr",{children:[r.jsx("th",{}),r.jsx("th",{children:"Access"}),r.jsx("th",{children:"Search"}),r.jsx("th",{children:"Insertion"}),r.jsx("th",{children:"Deletion"}),r.jsx("th",{children:"Access"}),r.jsx("th",{children:"Search"}),r.jsx("th",{children:"Insertion"}),r.jsx("th",{children:"Deletion"}),r.jsx("th",{})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Array_data_structure",target:"_blank",children:"Array"})}),r.jsx("td",{className:m.green,children:"Θ(1)"}),r.jsx("td",{className:m.yellow,children:"Θ(n)"}),r.jsx("td",{className:m.yellow,children:"Θ(n)"}),r.jsx("td",{className:m.yellow,children:"Θ(n)"}),r.jsx("td",{className:m.green,children:"O(1)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Stack_(abstract_data_type)",target:"_blank",children:"Stack"})}),r.jsx("td",{className:m.yellow,children:"Θ(n)"}),r.jsx("td",{className:m.yellow,children:"Θ(n)"}),r.jsx("td",{className:m.green,children:"Θ(1)"}),r.jsx("td",{className:m.green,children:"Θ(1)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.green,children:"O(1)"}),r.jsx("td",{className:m.green,children:"O(1)"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Queue_(abstract_data_type)",target:"_blank",children:"Queue"})}),r.jsx("td",{className:m.yellow,children:"Θ(n)"}),r.jsx("td",{className:m.yellow,children:"Θ(n)"}),r.jsx("td",{className:m.green,children:"Θ(1)"}),r.jsx("td",{className:m.green,children:"Θ(1)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.green,children:"O(1)"}),r.jsx("td",{className:m.green,children:"O(1)"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Singly_linked_list#Singly_linked_lists",target:"_blank",children:"Singly-Linked List"})}),r.jsx("td",{className:m.yellow,children:"Θ(n)"}),r.jsx("td",{className:m.yellow,children:"Θ(n)"}),r.jsx("td",{className:m.green,children:"Θ(1)"}),r.jsx("td",{className:m.green,children:"Θ(1)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.green,children:"O(1)"}),r.jsx("td",{className:m.green,children:"O(1)"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Doubly_linked_list",target:"_blank",children:"Doubly-Linked List"})}),r.jsx("td",{className:m.yellow,children:"Θ(n)"}),r.jsx("td",{className:m.yellow,children:"Θ(n)"}),r.jsx("td",{className:m.green,children:"Θ(1)"}),r.jsx("td",{className:m.green,children:"Θ(1)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.green,children:"O(1)"}),r.jsx("td",{className:m.green,children:"O(1)"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Skip_list",target:"_blank",children:"Skip List"})}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.orange,children:"O(n log(n))"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Hash_table",target:"_blank",children:"Hash Table"})}),r.jsx("td",{className:m.gray,children:"N/A"}),r.jsx("td",{className:m.green,children:"Θ(1)"}),r.jsx("td",{className:m.green,children:"Θ(1)"}),r.jsx("td",{className:m.green,children:"Θ(1)"}),r.jsx("td",{className:m.gray,children:"N/A"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Binary_search_tree",target:"_blank",children:"Binary Search Tree"})}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"https://en.wikipedia.org/wiki/Cartesian_tree",target:"_blank",children:"Cartesian Tree"})}),r.jsx("td",{className:m.gray,children:"N/A"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.gray,children:"N/A"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/B_tree",target:"_blank",children:"B-Tree"})}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Red-black_tree",target:"_blank",children:"Red-Black Tree"})}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"https://en.wikipedia.org/wiki/Splay_tree",target:"_blank",children:"Splay Tree"})}),r.jsx("td",{className:m.gray,children:"N/A"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.gray,children:"N/A"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/AVL_tree",target:"_blank",children:"AVL Tree"})}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/K-d_tree",target:"_blank",children:"KD Tree"})}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]})]})})})]})})}function y2(){return r.jsx("section",{id:"bigo-sorting-algorithms-table",children:r.jsxs("div",{className:m.container,children:[r.jsx("h3",{children:"Array Sorting Algorithms"}),r.jsx("div",{className:m.tableWrapper,children:r.jsx("table",{children:r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("th",{children:"Algorithm"}),r.jsx("th",{colSpan:3,children:"Time Complexity"}),r.jsx("th",{children:"Space Complexity"})]}),r.jsxs("tr",{children:[r.jsx("th",{}),r.jsx("th",{children:"Best"}),r.jsx("th",{children:"Average"}),r.jsx("th",{children:"Worst"}),r.jsx("th",{children:"Worst"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Quicksort",target:"_blank",children:"Quicksort"})}),r.jsx("td",{className:m.orange,children:"Ω(n log(n))"}),r.jsx("td",{className:m.orange,children:"Θ(n log(n))"}),r.jsx("td",{className:m.red,children:"O(n^2)"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Merge_sort",target:"_blank",children:"Mergesort"})}),r.jsx("td",{className:m.orange,children:"Ω(n log(n))"}),r.jsx("td",{className:m.orange,children:"Θ(n log(n))"}),r.jsx("td",{className:m.orange,children:"O(n log(n))"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Timsort",target:"_blank",children:"Timsort"})}),r.jsx("td",{className:m.yellow,children:"Ω(n)"}),r.jsx("td",{className:m.orange,children:"Θ(n log(n))"}),r.jsx("td",{className:m.orange,children:"O(n log(n))"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Heapsort",target:"_blank",children:"Heapsort"})}),r.jsx("td",{className:m.orange,children:"Ω(n log(n))"}),r.jsx("td",{className:m.orange,children:"Θ(n log(n))"}),r.jsx("td",{className:m.orange,children:"O(n log(n))"}),r.jsx("td",{className:m.green,children:"O(1)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Bubble_sort",target:"_blank",children:"Bubble Sort"})}),r.jsx("td",{className:m.yellow,children:"Ω(n)"}),r.jsx("td",{className:m.red,children:"Θ(n^2)"}),r.jsx("td",{className:m.red,children:"O(n^2)"}),r.jsx("td",{className:m.green,children:"O(1)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Insertion_sort",target:"_blank",children:"Insertion Sort"})}),r.jsx("td",{className:m.yellow,children:"Ω(n)"}),r.jsx("td",{className:m.red,children:"Θ(n^2)"}),r.jsx("td",{className:m.red,children:"O(n^2)"}),r.jsx("td",{className:m.green,children:"O(1)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Selection_sort",target:"_blank",children:"Selection Sort"})}),r.jsx("td",{className:m.red,children:"Ω(n^2)"}),r.jsx("td",{className:m.red,children:"Θ(n^2)"}),r.jsx("td",{className:m.red,children:"O(n^2)"}),r.jsx("td",{className:m.green,children:"O(1)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"https://en.wikipedia.org/wiki/Tree_sort",target:"_blank",children:"Tree Sort"})}),r.jsx("td",{className:m.orange,children:"Ω(n log(n))"}),r.jsx("td",{className:m.orange,children:"Θ(n log(n))"}),r.jsx("td",{className:m.red,children:"O(n^2)"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Shellsort",target:"_blank",children:"Shell Sort"})}),r.jsx("td",{className:m.orange,children:"Ω(n log(n))"}),r.jsx("td",{className:m.red,children:"Θ(n(log(n))^2)"}),r.jsx("td",{className:m.red,children:"O(n(log(n))^2)"}),r.jsx("td",{className:m.green,children:"O(1)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Bucket_sort",target:"_blank",children:"Bucket Sort"})}),r.jsx("td",{className:m.green,children:"Ω(n+k)"}),r.jsx("td",{className:m.green,children:"Θ(n+k)"}),r.jsx("td",{className:m.red,children:"O(n^2)"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Radix_sort",target:"_blank",children:"Radix Sort"})}),r.jsx("td",{className:m.green,children:"Ω(nk)"}),r.jsx("td",{className:m.green,children:"Θ(nk)"}),r.jsx("td",{className:m.green,children:"O(nk)"}),r.jsx("td",{className:m.yellow,children:"O(n+k)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"https://en.wikipedia.org/wiki/Counting_sort",children:"Counting Sort"})}),r.jsx("td",{className:m.green,children:"Ω(n+k)"}),r.jsx("td",{className:m.green,children:"Θ(n+k)"}),r.jsx("td",{className:m.green,children:"O(n+k)"}),r.jsx("td",{className:m.yellow,children:"O(k)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"https://en.wikipedia.org/wiki/Cubesort",target:"_blank",children:"Cubesort"})}),r.jsx("td",{className:m.yellow,children:"Ω(n)"}),r.jsx("td",{className:m.orange,children:"Θ(n log(n))"}),r.jsx("td",{className:m.orange,children:"O(n log(n))"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]})]})})})]})})}function x2(){return r.jsxs("div",{className:Jn.container,children:[r.jsx("h2",{className:Jn.sectionHeader,children:"Big O"}),r.jsx(v2,{}),r.jsx(b2,{}),r.jsx(y2,{})]})}function _2(){return r.jsxs("div",{className:Jn.container,children:[r.jsx("h2",{className:Jn.sectionHeader,children:"Array"}),r.jsx("section",{id:"array-two-pointers-one-input",children:r.jsxs(u,{title:"two pointers: one input, opposite ends",children:[r.jsx(u.Tab,{code:hb,language:"python"}),r.jsx(u.Tab,{code:gb,language:"javascript"}),r.jsx(u.Tab,{code:pb,language:"java"}),r.jsx(u.Tab,{code:mb,language:"cpp"})]})}),r.jsx("section",{id:"array-two-pointers-two-inputs",children:r.jsxs(u,{title:"two pointers: two inputs, exhaust both",children:[r.jsx(u.Tab,{code:vb,language:"python"}),r.jsx(u.Tab,{code:bb,language:"javascript"}),r.jsx(u.Tab,{code:yb,language:"java"}),r.jsx(u.Tab,{code:xb,language:"cpp"})]})}),r.jsx("section",{id:"array-sliding-window",children:r.jsxs(u,{title:"sliding window",children:[r.jsx(u.Tab,{code:H1,language:"python"}),r.jsx(u.Tab,{code:q1,language:"javascript"}),r.jsx(u.Tab,{code:G1,language:"java"}),r.jsx(u.Tab,{code:Y1,language:"cpp"})]})}),r.jsx("section",{id:"array-prefix-sum",children:r.jsxs(u,{title:"prefix sum",children:[r.jsx(u.Tab,{code:D1,language:"python"}),r.jsx(u.Tab,{code:z1,language:"javascript"}),r.jsx(u.Tab,{code:B1,language:"java"}),r.jsx(u.Tab,{code:U1,language:"cpp"})]})}),r.jsx("section",{id:"array-string-building",children:r.jsxs(u,{title:"efficient string building",children:[r.jsx(u.Tab,{code:P1,language:"python"}),r.jsx(u.Tab,{code:W1,language:"javascript"}),r.jsx(u.Tab,{code:$1,language:"java"}),r.jsx(u.Tab,{code:nb,language:"cpp"})]})})]})}function T2(){return r.jsxs("div",{className:Jn.container,children:[r.jsx("h2",{className:Jn.sectionHeader,children:"Hash Map"}),r.jsx("section",{id:"hashmap-find-number-of-subarrays",children:r.jsxs(u,{title:"find number of subarrays that fit an exact criteria",children:[r.jsx(u.Tab,{code:p1,language:"python"}),r.jsx(u.Tab,{code:m1,language:"javascript"}),r.jsx(u.Tab,{code:v1,language:"java"}),r.jsx(u.Tab,{code:b1,language:"cpp"})]})}),r.jsx("section",{id:"hashmap-sliding-window",children:r.jsxs(u,{title:"sliding window",children:[r.jsx(u.Tab,{code:y1,language:"python"}),r.jsx(u.Tab,{code:x1,language:"javascript"}),r.jsx(u.Tab,{code:_1,language:"java"}),r.jsx(u.Tab,{code:T1,language:"cpp"})]})})]})}function S2(){return r.jsxs("div",{className:Jn.container,children:[r.jsx("h2",{className:Jn.sectionHeader,children:"Linked List"}),r.jsx("section",{id:"linkedlist-fast-and-slow-pointer",children:r.jsxs(u,{title:"fast and slow pointer",children:[r.jsx(u.Tab,{code:E1,language:"python"}),r.jsx(u.Tab,{code:O1,language:"javascript"}),r.jsx(u.Tab,{code:A1,language:"java"}),r.jsx(u.Tab,{code:k1,language:"cpp"})]})}),r.jsx("section",{id:"linkedlist-reverse",children:r.jsxs(u,{title:"reverse linked list",children:[r.jsx(u.Tab,{code:M1,language:"python"}),r.jsx(u.Tab,{code:R1,language:"javascript"}),r.jsx(u.Tab,{code:C1,language:"java"}),r.jsx(u.Tab,{code:L1,language:"cpp"})]})})]})}function j2(){return r.jsxs("div",{className:Jn.container,children:[r.jsx("h2",{className:Jn.sectionHeader,children:"Stack"}),r.jsx("section",{id:"stack-monotonic-increasing",children:r.jsxs(u,{title:"monotonic increasing stack",children:[r.jsx(u.Tab,{code:X1,language:"python"}),r.jsx(u.Tab,{code:J1,language:"javascript"}),r.jsx(u.Tab,{code:Z1,language:"java"}),r.jsx(u.Tab,{code:F1,language:"cpp"})]})}),r.jsx("section",{id:"stack-monotonic-decreasing",children:r.jsxs(u,{title:"monotonic decreasing stack",children:[r.jsx(u.Tab,{code:V1,language:"python"}),r.jsx(u.Tab,{code:I1,language:"javascript"}),r.jsx(u.Tab,{code:K1,language:"java"}),r.jsx(u.Tab,{code:Q1,language:"cpp"})]})})]})}function N2(){return r.jsxs("div",{className:Jn.container,children:[r.jsx("h2",{className:Jn.sectionHeader,children:"Binary Tree"}),r.jsx("section",{id:"tree-dfs-recursive",children:r.jsxs(u,{title:"DFS (recursive)",children:[r.jsx(u.Tab,{code:cb,language:"python"}),r.jsx(u.Tab,{code:ub,language:"javascript"}),r.jsx(u.Tab,{code:db,language:"java"}),r.jsx(u.Tab,{code:fb,language:"cpp"})]})}),r.jsx("section",{id:"tree-dfs-iterative",children:r.jsxs(u,{title:"DFS (iterative)",children:[r.jsx(u.Tab,{code:rb,language:"python"}),r.jsx(u.Tab,{code:lb,language:"javascript"}),r.jsx(u.Tab,{code:sb,language:"java"}),r.jsx(u.Tab,{code:ob,language:"cpp"})]})}),r.jsx("section",{id:"tree-bfs",children:r.jsxs(u,{title:"BFS",children:[r.jsx(u.Tab,{code:eb,language:"python"}),r.jsx(u.Tab,{code:tb,language:"javascript"}),r.jsx(u.Tab,{code:ab,language:"java"}),r.jsx(u.Tab,{code:ib,language:"cpp"})]})})]})}function w2(){return r.jsxs("div",{className:Jn.container,children:[r.jsx("h2",{className:Jn.sectionHeader,children:"Graph"}),r.jsx("section",{id:"graph-dfs-recursive",children:r.jsxs(u,{title:"DFS (recursive)",children:[r.jsx(u.Tab,{code:Zv,language:"python"}),r.jsx(u.Tab,{code:Fv,language:"javascript"}),r.jsx(u.Tab,{code:Pv,language:"java"}),r.jsx(u.Tab,{code:Wv,language:"cpp"})]})}),r.jsx("section",{id:"graph-dfs-iterative",children:r.jsxs(u,{title:"DFS (iterative)",children:[r.jsx(u.Tab,{code:Kv,language:"python"}),r.jsx(u.Tab,{code:Qv,language:"javascript"}),r.jsx(u.Tab,{code:Xv,language:"java"}),r.jsx(u.Tab,{code:Jv,language:"cpp"})]})}),r.jsx("section",{id:"graph-bfs",children:r.jsxs(u,{title:"BFS",children:[r.jsx(u.Tab,{code:Gv,language:"python"}),r.jsx(u.Tab,{code:Yv,language:"javascript"}),r.jsx(u.Tab,{code:Vv,language:"java"}),r.jsx(u.Tab,{code:Iv,language:"cpp"})]})}),r.jsx("section",{id:"graph-dijkstra",children:r.jsxs(u,{title:"Dijkstra (shortest path)",children:[r.jsx(u.Tab,{code:$v,language:"python"}),r.jsx(u.Tab,{code:n1,language:"javascript"}),r.jsx(u.Tab,{code:e1,language:"java"}),r.jsx(u.Tab,{code:t1,language:"cpp"})]})}),r.jsx("section",{id:"graph-bellman-ford",children:r.jsxs(u,{title:"Bellman-Ford (shortest path)",children:[r.jsx(u.Tab,{code:Bv,language:"python"}),r.jsx(u.Tab,{code:Uv,language:"javascript"}),r.jsx(u.Tab,{code:Hv,language:"java"}),r.jsx(u.Tab,{code:qv,language:"cpp"})]})}),r.jsx("section",{id:"graph-kahn",children:r.jsxs(u,{title:"Kahn (topological sort)",children:[r.jsx(u.Tab,{code:a1,language:"python"}),r.jsx(u.Tab,{code:i1,language:"javascript"}),r.jsx(u.Tab,{code:r1,language:"java"}),r.jsx(u.Tab,{code:l1,language:"cpp"})]})}),r.jsx("section",{id:"graph-kruskal",children:r.jsxs(u,{title:"Kruskal (mst)",children:[r.jsx(u.Tab,{code:s1,language:"python"}),r.jsx(u.Tab,{code:o1,language:"javascript"}),r.jsx(u.Tab,{code:c1,language:"java"}),r.jsx(u.Tab,{code:u1,language:"cpp"})]})}),r.jsx("section",{id:"graph-prim",children:r.jsxs(u,{title:"Prim (mst)",children:[r.jsx(u.Tab,{code:d1,language:"python"}),r.jsx(u.Tab,{code:f1,language:"javascript"}),r.jsx(u.Tab,{code:h1,language:"java"}),r.jsx(u.Tab,{code:g1,language:"cpp"})]})})]})}function E2(){return r.jsxs("div",{className:Jn.container,children:[r.jsx("h2",{className:Jn.sectionHeader,children:"Heap"}),r.jsx("section",{id:"heap-find-top-k-elements",children:r.jsxs(u,{title:"find top k elements",children:[r.jsx(u.Tab,{code:S1,language:"python"}),r.jsx(u.Tab,{code:j1,language:"javascript"}),r.jsx(u.Tab,{code:N1,language:"java"}),r.jsx(u.Tab,{code:w1,language:"cpp"})]})})]})}function O2(){return r.jsxs("div",{className:Jn.container,children:[r.jsx("h2",{className:Jn.sectionHeader,children:"Binary Search"}),r.jsx("section",{id:"binarysearch-binary-search",children:r.jsxs(u,{title:"binary search",children:[r.jsx(u.Tab,{code:am,language:"python"}),r.jsx(u.Tab,{code:im,language:"javascript"}),r.jsx(u.Tab,{code:rm,language:"java"}),r.jsx(u.Tab,{code:lm,language:"cpp"})]})}),r.jsx("section",{id:"binarysearch-duplicate-elements-left-insertion",children:r.jsxs(u,{title:"duplicate elements, left-most insertion point",children:[r.jsx(u.Tab,{code:pm,language:"python"}),r.jsx(u.Tab,{code:mm,language:"javascript"}),r.jsx(u.Tab,{code:vm,language:"java"}),r.jsx(u.Tab,{code:bm,language:"cpp"})]})}),r.jsx("section",{id:"binarysearch-duplicate-elements-right-insertion",children:r.jsxs(u,{title:"duplicate elements, right-most insertion point",children:[r.jsx(u.Tab,{code:ym,language:"python"}),r.jsx(u.Tab,{code:xm,language:"javascript"}),r.jsx(u.Tab,{code:_m,language:"java"}),r.jsx(u.Tab,{code:Tm,language:"cpp"})]})}),r.jsx("section",{id:"binarysearch-greedy-minimum",children:r.jsxs(u,{title:"greedy (minimum)",children:[r.jsx(u.Tab,{code:dm,language:"python"}),r.jsx(u.Tab,{code:fm,language:"javascript"}),r.jsx(u.Tab,{code:hm,language:"java"}),r.jsx(u.Tab,{code:gm,language:"cpp"})]})}),r.jsx("section",{id:"binarysearch-greedy-maximum",children:r.jsxs(u,{title:"greedy (maximum)",children:[r.jsx(u.Tab,{code:sm,language:"python"}),r.jsx(u.Tab,{code:om,language:"javascript"}),r.jsx(u.Tab,{code:cm,language:"java"}),r.jsx(u.Tab,{code:um,language:"cpp"})]})})]})}function A2(){return r.jsxs("div",{className:Jn.container,children:[r.jsx("h2",{className:Jn.sectionHeader,children:"Backtracking"}),r.jsx("section",{id:"backtracking-backtracking",children:r.jsxs(u,{title:"backtracking",children:[r.jsx(u.Tab,{code:$p,language:"python"}),r.jsx(u.Tab,{code:nm,language:"javascript"}),r.jsx(u.Tab,{code:em,language:"java"}),r.jsx(u.Tab,{code:tm,language:"cpp"})]})})]})}function k2(){return r.jsxs("div",{className:Jn.container,children:[r.jsx("h2",{className:Jn.sectionHeader,children:"Dynamic Programming"}),r.jsx("section",{id:"dp-top-down",children:r.jsxs(u,{title:"DP top-down",children:[r.jsx(u.Tab,{code:vv,language:"python"}),r.jsx(u.Tab,{code:bv,language:"javascript"}),r.jsx(u.Tab,{code:yv,language:"java"}),r.jsx(u.Tab,{code:xv,language:"cpp"})]})}),r.jsx("section",{id:"dp-bottom-up",children:r.jsxs(u,{title:"DP bottom-up",children:[r.jsx(u.Tab,{code:cv,language:"python"}),r.jsx(u.Tab,{code:uv,language:"javascript"}),r.jsx(u.Tab,{code:dv,language:"java"}),r.jsx(u.Tab,{code:fv,language:"cpp"})]})}),r.jsx("section",{id:"dp-kadane",children:r.jsxs(u,{title:"Kadane (max-sum subarray)",children:[r.jsx(u.Tab,{code:hv,language:"python"}),r.jsx(u.Tab,{code:gv,language:"javascript"}),r.jsx(u.Tab,{code:pv,language:"java"}),r.jsx(u.Tab,{code:mv,language:"cpp"})]})})]})}function M2(){return r.jsxs("div",{className:Jn.container,children:[r.jsx("h2",{className:Jn.sectionHeader,children:"Bit Manipulation"}),r.jsx("section",{id:"bitmanipulation-test-kth-bit",children:r.jsxs(u,{title:"test kth-bit",children:[r.jsx(u.Tab,{code:ev,language:"python"}),r.jsx(u.Tab,{code:tv,language:"javascript"}),r.jsx(u.Tab,{code:av,language:"java"}),r.jsx(u.Tab,{code:iv,language:"cpp"})]})}),r.jsx("section",{id:"bitmanipulation-set-kth-bit",children:r.jsxs(u,{title:"set kth bit",children:[r.jsx(u.Tab,{code:Xm,language:"python"}),r.jsx(u.Tab,{code:Jm,language:"javascript"}),r.jsx(u.Tab,{code:Zm,language:"java"}),r.jsx(u.Tab,{code:Fm,language:"cpp"})]})}),r.jsx("section",{id:"bitmanipulation-clear-kth-bit",children:r.jsxs(u,{title:"clear kth bit",children:[r.jsx(u.Tab,{code:Em,language:"python"}),r.jsx(u.Tab,{code:Om,language:"javascript"}),r.jsx(u.Tab,{code:Am,language:"java"}),r.jsx(u.Tab,{code:km,language:"cpp"})]})}),r.jsx("section",{id:"bitmanipulation-toggle-kth-bit",children:r.jsxs(u,{title:"toggle kth bit",children:[r.jsx(u.Tab,{code:rv,language:"python"}),r.jsx(u.Tab,{code:lv,language:"javascript"}),r.jsx(u.Tab,{code:sv,language:"java"}),r.jsx(u.Tab,{code:ov,language:"cpp"})]})}),r.jsx("section",{id:"bitmanipulation-get-rightmost-bit",children:r.jsxs(u,{title:"get rightmost bit",children:[r.jsx(u.Tab,{code:Hm,language:"python"}),r.jsx(u.Tab,{code:qm,language:"javascript"}),r.jsx(u.Tab,{code:Gm,language:"java"}),r.jsx(u.Tab,{code:Ym,language:"cpp"})]})}),r.jsx("section",{id:"bitmanipulation-count-set-bits",children:r.jsxs(u,{title:"count set bits",children:[r.jsx(u.Tab,{code:Mm,language:"python"}),r.jsx(u.Tab,{code:Rm,language:"javascript"}),r.jsx(u.Tab,{code:Cm,language:"java"}),r.jsx(u.Tab,{code:Lm,language:"cpp"})]})}),r.jsx("section",{id:"bitmanipulation-multiply-power-of-two",children:r.jsxs(u,{title:"multiply by 2^k",children:[r.jsx(u.Tab,{code:Vm,language:"python"}),r.jsx(u.Tab,{code:Im,language:"javascript"}),r.jsx(u.Tab,{code:Km,language:"java"}),r.jsx(u.Tab,{code:Qm,language:"cpp"})]})}),r.jsx("section",{id:"bitmanipulation-divide-power-of-two",children:r.jsxs(u,{title:"divide by 2^k",children:[r.jsx(u.Tab,{code:Dm,language:"python"}),r.jsx(u.Tab,{code:zm,language:"javascript"}),r.jsx(u.Tab,{code:Bm,language:"java"}),r.jsx(u.Tab,{code:Um,language:"cpp"})]})}),r.jsx("section",{id:"bitmanipulation-check-power-of-two",children:r.jsxs(u,{title:"check if number is power of 2",children:[r.jsx(u.Tab,{code:Sm,language:"python"}),r.jsx(u.Tab,{code:jm,language:"javascript"}),r.jsx(u.Tab,{code:Nm,language:"java"}),r.jsx(u.Tab,{code:wm,language:"cpp"})]})}),r.jsx("section",{id:"bitmanipulation-swap-variables",children:r.jsxs(u,{title:"swap two variables",children:[r.jsx(u.Tab,{code:Pm,language:"python"}),r.jsx(u.Tab,{code:Wm,language:"javascript"}),r.jsx(u.Tab,{code:$m,language:"java"}),r.jsx(u.Tab,{code:nv,language:"cpp"})]})})]})}const R2=`def fn(matrix: list[list[int]]):
    r = len(matrix)
    c = len(matrix[0])

    create_matrix = [[0 for _ in range(c)] for _ in range(r)]
    copy_matrix = [row[:] for row in matrix]
`,C2=`def fn(matrix: list[list[int]]):
    r = len(matrix)
    c = len(matrix[0])

    main_diagonal = [matrix[i][i] for i in range(min(r, c))]
    anti_diagonal = [matrix[i][~i] for i in range(min(r, c))]
`,L2=`def fn(matrix: list[list[int]]):
    r = len(matrix)
    c = len(matrix[0])

    transpose_tuple = zip(*matrix)
    transpose = [list(row) for row in transpose_tuple]
    rotate_left = transpose[::-1]
    rotate_right = [row[::-1] for row in transpose]
`,D2=`const fn = (matrix) => {
    const r = matrix.length;
    const c = matrix[0].length;

    const createMatrix = Array.from({ length: r }, () => Array(c).fill(0))
    const copyMatrix = matrix.map(row => [...row])
}
`,z2=`const fn = (matrix) => {
    const r = matrix.length
    const c = matrix[0].length

    const mainDiagonal = Array.from({ length: Math.min(r, c) }, (_, i) => matrix[i][i])
    const antiDiagonal = Array.from({ length: Math.min(r, c) }, (_, i) => matrix[i][~i])
}
`,B2=`const fn = (matrix) => {
    const r = matrix.length
    const c = matrix[0].length

    const transposeTuple = matrix[0].map((_, i) => matrix.map(row => row[i]))
    const transpose = transposeTuple.map(row => [...row])
    const rotateLeft = transpose.reverse()
    const rotateRight = transpose.map(row => row.reverse())
}
`,U2=`import java.util.ArrayList;
import java.util.List;


public void fn(List<List<Integer>> matrix) {
    List<List<Integer>> createMatrix = new ArrayList<>();
    List<List<Integer>> copyMatrix = new ArrayList<>();
    int r = matrix.size();
    int c = matrix.get(0).size();

    for (int i = 0; i < r; i++) {
        List<Integer> row = new ArrayList<>();

        for (int j = 0; j < c; j++) {
            row.add(0);
        }

        createMatrix.add(row);
    }

    for (List<Integer> row : matrix) {
        copyMatrix.add(new ArrayList<>(row));
    }
}
`,H2=`import java.util.ArrayList;
import java.util.List;


public void fn(List<List<Integer>> matrix) {
    List<Integer> mainDiagonal = new ArrayList<>();
    List<Integer> antiDiagonal = new ArrayList<>();
    int r = matrix.size();
    int c = matrix.get(0).size();

    for (int i = 0; i < Math.min(r, c); i++) {
        mainDiagonal.add(matrix.get(i).get(i));
    }

    for (int i = 0; i < Math.min(r, c); i++) {
        antiDiagonal.add(matrix.get(i).get(c - 1 - i));
    }
}
`,q2=`import java.util.ArrayList;
import java.util.List;


public static void fn(List<List<Integer>> matrix) {
    List<List<Integer>> transpose = new ArrayList<>();
    List<List<Integer>> rotateLeft = new ArrayList<>();
    List<List<Integer>> rotateRight = new ArrayList<>();
    int r = matrix.size();
    int c = matrix.get(0).size();

    for (int j = 0; j < c; j++) {
        List<Integer> newRow = new ArrayList<>();

        for (int i = 0; i < r; i++) {
            newRow.add(matrix.get(i).get(j));
        }

        transpose.add(newRow);
    }

    for (int i = transpose.size() - 1; i >= 0; i--) {
        rotateLeft.add(transpose.get(i));
    }

    for (List<Integer> row : transpose) {
        List<Integer> newRow = new ArrayList<>();

        for (int i = row.size() - 1; i >= 0; i--) {
            newRow.add(row.get(i));
        }

        rotateRight.add(newRow);
    }
}
`,G2=`#include <vector>

using namespace std;


void fn(vector<vector<int>>& matrix) {
    int r = matrix.size();
    int c = matrix[0].size();

    vector<vector<int>> create_matrix(r, vector<int>(c, 0));
    vector<vector<int>> copy_matrix(matrix);
}
`,Y2=`#include <vector>

using namespace std;


void fn(vector<vector<int>>& matrix) {
    int r = matrix.size();
    int c = matrix[0].size();

    vector<int> main_diagonal;
    vector<int> anti_diagonal;

    for (int i = 0; i < min(r, c); ++i) {
        main_diagonal.push_back(matrix[i][i]);
        anti_diagonal.push_back(matrix[i][c - i - 1]);
    }
}
`,V2=`#include <vector>

using namespace std;


void fn(vector<vector<int>>& matrix) {
    int r = matrix.size();
    int c = matrix[0].size();
    vector<vector<int>> transpose(c, vector<int>(r));
    vector<vector<int>> rotate_left(c, vector<int>(r));
    vector<vector<int>> rotate_right(c, vector<int>(r));

    for (int i = 0; i < r; ++i) {
        for (int j = 0; j < c; ++j) {
            transpose[j][i] = matrix[i][j];
        }
    }

    for (int i = 0; i < c; ++i) {
        for (int j = 0; j < r; ++j) {
            rotate_left[i][j] = transpose[c - i - 1][j];
        }
    }

    for (int i = 0; i < c; ++i) {
        for (int j = 0; j < r; ++j) {
            rotate_right[i][j] = transpose[i][r - j - 1];
        }
    }
}
`;function I2(){return r.jsxs("div",{className:Jn.container,children:[r.jsx("h2",{className:Jn.sectionHeader,children:"Matrix"}),r.jsx("section",{id:"matrix-create-copy",children:r.jsxs(u,{title:"create / copy",children:[r.jsx(u.Tab,{code:R2,language:"python"}),r.jsx(u.Tab,{code:D2,language:"javascript"}),r.jsx(u.Tab,{code:U2,language:"java"}),r.jsx(u.Tab,{code:G2,language:"cpp"})]})}),r.jsx("section",{id:"matrix-diagonals",children:r.jsxs(u,{title:"diagonals / anti-diagonals",children:[r.jsx(u.Tab,{code:C2,language:"python"}),r.jsx(u.Tab,{code:z2,language:"javascript"}),r.jsx(u.Tab,{code:H2,language:"java"}),r.jsx(u.Tab,{code:Y2,language:"cpp"})]})}),r.jsx("section",{id:"matrix-rotate-transpose",children:r.jsxs(u,{title:"rotate / transpose",children:[r.jsx(u.Tab,{code:L2,language:"python"}),r.jsx(u.Tab,{code:B2,language:"javascript"}),r.jsx(u.Tab,{code:q2,language:"java"}),r.jsx(u.Tab,{code:V2,language:"cpp"})]})})]})}const K2=`from typing import Any


class Array:
    def __init__(self, size: int) -> None:
        self.size = size
        self.data = [None] * size

    def __getitem__(self, index: int) -> Any:
        return self.data[index]

    def __setitem__(self, index: int, value: Any) -> None:
        self.data[index] = value

    def __len__(self) -> int:
        return len(self.data)

    def __repr__(self) -> str:
        return repr(self.data)
`,Q2=`from typing import Any


class TreeNode:
    def __init__(self, data: Any) -> None:
        self.data = data
        self.left = None
        self.right = None


class BinaryTree:
    def __init__(self) -> None:
        self.root = None

    def insert(self, data: Any) -> None:
        if not self.root:
            self.root = TreeNode(data)
        else:
            self.insert_node(self.root, data)

    def insert_node(self, node: TreeNode | None, data: Any) -> TreeNode:
        if not node:
            return TreeNode(data)

        if not node.left:
            node.left = TreeNode(data)
        elif not node.right:
            node.right = TreeNode(data)
        else:
            node.left = self.insert_node(node.left, data)

        return node

    def __repr__(self) -> str:
        return 'Empty tree' if not self.root else self._print_tree(self.root, '', True)

    def _print_tree(self, node: TreeNode | None, prefix: str, is_left: bool) -> str:
        if node is None:
            return ''

        result = ''
        result += self._print_tree(node.right, prefix + ('│   ' if is_left else '    '), False)
        result += prefix + ('└── ' if is_left else '┌── ') + str(node.data) + '\\n'
        result += self._print_tree(node.left, prefix + ('    ' if is_left else '│   '), True)

        return result
`,X2=`from typing import Any


class TreeNode:
    def __init__(self, data: Any) -> None:
        self.data = data
        self.left = None
        self.right = None


class BinarySearchTree:
    def __init__(self) -> None:
        self.root = None

    def insert(self, data: Any) -> None:
        if not self.root:
            self.root = TreeNode(data)
        else:
            self.insert_node(self.root, data)

    def insert_node(self, node: TreeNode | None, data: Any) -> None:
        if data < node.data:
            if not node.left:
                node.left = TreeNode(data)
            else:
                self.insert_node(node.left, data)
        else:
            if not node.right:
                node.right = TreeNode(data)
            else:
                self.insert_node(node.right, data)

    def __repr__(self) -> str:
        return 'Empty tree' if not self.root else self._print_tree(self.root, '', True)

    def _print_tree(self, node: TreeNode | None, prefix: str, is_left: bool) -> str:
        if node is None:
            return ''

        result = ''
        result += self._print_tree(node.right, prefix + ('│   ' if is_left else '    '), False)
        result += prefix + ('└── ' if is_left else '┌── ') + str(node.data) + '\\n'
        result += self._print_tree(node.left, prefix + ('    ' if is_left else '│   '), True)

        return result
`,J2=`from typing import Any


class ListNode:
    def __init__(self, data: Any) -> None:
        self.data = data
        self.next = None

    def __repr__(self) -> str:
        return f'[{self.data}]'


class LinkedList:
    def __init__(self) -> None:
        self.head = None

    def append(self, data: Any) -> None:
        if not self.head:
            self.head = ListNode(data)
            return

        curr = self.head

        while curr.next:
            curr = curr.next

        curr.next = ListNode(data)

    def delete(self, data: Any) -> None:
        if not self.head:
            return

        if self.head.data == data:
            self.head = self.head.next
            return

        prev = None
        curr = self.head

        while curr:
            if curr.data == data:
                prev.next = curr.next
                return

            prev = curr
            curr = curr.next

    def reverse(self) -> None:
        prev = None
        curr = self.head

        while curr:
            nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt

        self.head = prev

    def __repr__(self) -> str:
        if not self.head:
            return 'None'

        nodes = []
        node = self.head

        while node:
            nodes.append(repr(node))
            node = node.next

        return ' -> '.join(nodes) + ' -> None'
`,Z2=`from typing import Any


class ListNode:
    def __init__(self, data: Any) -> None:
        self.data = data
        self.prev = None
        self.next = None

    def __repr__(self) -> str:
        return f'[{self.data}]'


class DoublyLinkedList:
    def __init__(self) -> None:
        self.head = None

    def append(self, data: Any) -> None:
        if not self.head:
            self.head = ListNode(data)
            return

        curr = self.head

        while curr.next:
            curr = curr.next

        new_node = ListNode(data)
        curr.next = new_node
        new_node.prev = curr

    def delete(self, data: Any) -> None:
        if not self.head:
            return

        if self.head.data == data:
            self.head = self.head.next
            if self.head:
                self.head.prev = None
            return

        curr = self.head
        while curr:
            if curr.data == data:
                prev_node = curr.prev
                prev_node.next = curr.next
                if curr.next:
                    curr.next.prev = prev_node
                return
            curr = curr.next

    def reverse(self) -> None:
        curr = self.head
        prev = None

        while curr:
            nxt = curr.next
            curr.next = prev
            curr.prev = nxt
            prev = curr
            curr = nxt

        self.head = prev

    def __repr__(self) -> str:
        if not self.head:
            return 'None'

        nodes = []
        curr = self.head

        while curr:
            nodes.append(repr(curr))
            curr = curr.next

        return ' <-> '.join(nodes) + ' <-> None'
`,F2=`class Graph:
    def __init__(self) -> None:
        self.graph = {}

    def add_vertex(self, vertex: str) -> None:
        if vertex not in self.graph:
            self.graph[vertex] = []

    def add_edge(self, a: str, b: str) -> None:
        self.add_vertex(a)
        self.add_vertex(b)
        self.graph[a].append(b)
        self.graph[b].append(a)

    def get_neighbors(self, vertex: str) -> list[str]:
        return self.graph.get(vertex, [])

    def __repr__(self) -> str:
        output = ''

        for vertex, neighbors in self.graph.items():
            output += f'{vertex} - {' - '.join(neighbors)}\\n'

        return output
`,P2=`class Array {
    constructor(size) {
        this.size = size
        this.data = new Array(size).fill(null)
    }

    getItem(index) {
        return this.data[index]
    }

    setItem(index, value) {
        this.data[index] = value
    }

    get length() {
        return this.data.length
    }

    toString() {
        return this.data.toString()
    }
}
`,W2=`class TreeNode {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }

    insert(data) {
        if (!this.root) {
            this.root = new TreeNode(data)
        } else {
            this.insertNode(this.root, data)
        }
    }

    insertNode(node, data) {
        if (!node) {
            return new TreeNode(data)
        }

        if (!node.left) {
            node.left = new TreeNode(data)
        } else if (!node.right) {
            node.right = new TreeNode(data)
        } else {
            node.left = this.insertNode(node.left, data)
        }

        return node
    }

    toString() {
        return this.root ? this.printTree(this.root, '', true) : 'Empty tree'
    }

    printTree(node, prefix, isLeft) {
        if (!node) {
            return ''
        }

        let result = ''
        result += this.printTree(node.right, prefix + (isLeft ? '│   ' : '    '), false)
        result += prefix + (isLeft ? '└── ' : '┌── ') + node.data + '\\n'
        result += this.printTree(node.left, prefix + (isLeft ? '    ' : '│   '), true)

        return result
    }
}
`,$2=`class TreeNode {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(data) {
        if (!this.root) {
            this.root = new TreeNode(data)
        } else {
            this._insertNode(this.root, data)
        }
    }

    _insertNode(node, data) {
        if (data < node.data) {
            if (!node.left) {
                node.left = new TreeNode(data)
            } else {
                this._insertNode(node.left, data)
            }
        } else {
            if (!node.right) {
                node.right = new TreeNode(data)
            } else {
                this._insertNode(node.right, data)
            }
        }
    }

    toString() {
        return this.root ? this._printTree(this.root, '', true) : 'Empty tree'
    }

    _printTree(node, prefix, isLeft) {
        if (!node) {
            return ''
        }

        let result = ''
        result += this._printTree(node.right, prefix + (isLeft ? '│   ' : '    '), false)
        result += prefix + (isLeft ? '└── ' : '┌── ') + node.data + '\\n'
        result += this._printTree(node.left, prefix + (isLeft ? '    ' : '│   '), true)

        return result
    }
}
`,nN=`class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }

    toString() {
        return \`[\${this.data}]\`
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    append(data) {
        if (!this.head) {
            this.head = new ListNode(data)
            return
        }

        let curr = this.head
        while (curr.next) {
            curr = curr.next
        }

        curr.next = new ListNode(data)
    }

    delete(data) {
        if (!this.head) {
            return
        }

        if (this.head.data === data) {
            this.head = this.head.next
            return
        }

        let prev = null
        let curr = this.head

        while (curr) {
            if (curr.data === data) {
                prev.next = curr.next
                return
            }

            prev = curr
            curr = curr.next
        }
    }

    reverse() {
        let prev = null
        let curr = this.head

        while (curr) {
            let nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt
        }

        this.head = prev
    }

    toString() {
        if (!this.head) {
            return 'None'
        }

        let nodes = []
        let node = this.head

        while (node) {
            nodes.push(node.toString())
            node = node.next
        }

        return nodes.join(' -> ') + ' -> None'
    }
}
`,eN=`class ListNode {
    constructor(data) {
        this.data = data
        this.prev = null
        this.next = null
    }

    toString() {
        return \`[\${this.data}]\`
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
    }

    append(data) {
        if (!this.head) {
            this.head = new ListNode(data)
            return
        }

        let curr = this.head
        while (curr.next) {
            curr = curr.next
        }

        const new_node = new ListNode(data)
        curr.next = new_node
        new_node.prev = curr
    }

    delete(data) {
        if (!this.head) {
            return
        }

        if (this.head.data === data) {
            this.head = this.head.next
            if (this.head) {
                this.head.prev = null
            }
            return
        }

        let curr = this.head
        while (curr) {
            if (curr.data === data) {
                const prev_node = curr.prev
                prev_node.next = curr.next
                if (curr.next) {
                    curr.next.prev = prev_node
                }
                return
            }
            curr = curr.next
        }
    }

    reverse() {
        let curr = this.head
        let prev = null

        while (curr) {
            const nxt = curr.next
            curr.next = prev
            curr.prev = nxt
            prev = curr
            curr = nxt
        }

        this.head = prev
    }

    toString() {
        if (!this.head) {
            return 'None'
        }

        const nodes = []
        let curr = this.head

        while (curr) {
            nodes.push(curr.toString())
            curr = curr.next
        }

        return nodes.join(' <-> ') + ' <-> None'
    }
}
`,tN=`class Graph {
    constructor() {
        this.graph = {}
    }

    addVertex(vertex) {
        if (!(vertex in this.graph)) {
            this.graph[vertex] = []
        }
    }

    addEdge(a, b) {
        this.addVertex(a)
        this.addVertex(b)
        this.graph[a].push(b)
        this.graph[b].push(a)
    }

    getNeighbors(vertex) {
        return this.graph[vertex] || []
    }

    toString() {
        let output = ''

        for (const [vertex, neighbors] of Object.entries(this.graph)) {
            output += \`\${vertex} - \${neighbors.join(' - ')}\\n\`
        }

        return output
    }
}
`,aN=`public class Array<T> {
    private int size;
    private T[] data;

    @SuppressWarnings("unchecked")
    public Array(int size) {
        this.size = size;
        this.data = (T[]) new Object[size];
    }

    public T get(int index) {
        if (index < 0 || index >= size) {
            throw new IndexOutOfBoundsException("Index: " + index + ", Size: " + size);
        }
        return data[index];
    }

    public void set(int index, T value) {
        if (index < 0 || index >= size) {
            throw new IndexOutOfBoundsException("Index: " + index + ", Size: " + size);
        }
        data[index] = value;
    }

    public int size() {
        return size;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder("[");

        for (int i = 0; i < size; i++) {
            sb.append(data[i]);
            if (i < size - 1) {
                sb.append(", ");
            }
        }

        sb.append("]");
        return sb.toString();
    }
}
`,iN=`public class TreeNode<T> {
    T data;
    TreeNode<T> left;
    TreeNode<T> right;

    public TreeNode(T data) {
        this.data = data;
        left = null;
        right = null;
    }
}

public class BinaryTree<T> {
    TreeNode<T> root;

    public BinaryTree() {
        root = null;
    }

    public void insert(T data) {
        root = insertNode(root, data);
    }

    private TreeNode<T> insertNode(TreeNode<T> node, T data) {
        if (node == null) {
            return new TreeNode<>(data);
        }

        if (node.left == null) {
            node.left = new TreeNode<>(data);
        } else if (node.right == null) {
            node.right = new TreeNode<>(data);
        } else {
            node.left = insertNode(node.left, data);
        }

        return node;
    }

    @Override
    public String toString() {
        return root == null ? "Empty tree" : printTree(root, "", true);
    }

    private String printTree(TreeNode<T> node, String prefix, boolean isLeft) {
        if (node == null) {
            return "";
        }

        StringBuilder sb = new StringBuilder();
        sb.append(printTree(node.right, prefix + (isLeft ? "│   " : "    "), false));
        sb.append(prefix).append(isLeft ? "└── " : "┌── ").append(node.data).append("\\n");
        sb.append(printTree(node.left, prefix + (isLeft ? "    " : "│   "), true));

        return sb.toString();
    }
}
`,rN=`public class TreeNode<T extends Comparable<T>> {
    T data;
    TreeNode<T> left;
    TreeNode<T> right;

    public TreeNode(T data) {
        this.data = data;
        left = null;
        right = null;
    }
}

public class BinarySearchTree<T extends Comparable<T>> {
    TreeNode<T> root;

    public BinarySearchTree() {
        root = null;
    }

    public void insert(T data) {
        root = insertNode(root, data);
    }

    private TreeNode<T> insertNode(TreeNode<T> node, T data) {
        if (node == null) {
            return new TreeNode<>(data);
        }

        if (data.compareTo(node.data) < 0) {
            node.left = insertNode(node.left, data);
        } else if (data.compareTo(node.data) > 0) {
            node.right = insertNode(node.right, data);
        }

        return node;
    }

    @Override
    public String toString() {
        return root == null ? "Empty tree" : printTree(root, "", true);
    }

    private String printTree(TreeNode<T> node, String prefix, boolean isLeft) {
        if (node == null) {
            return "";
        }

        StringBuilder sb = new StringBuilder();
        sb.append(printTree(node.right, prefix + (isLeft ? "│   " : "    "), false));
        sb.append(prefix).append(isLeft ? "└── " : "┌── ").append(node.data).append("\\n");
        sb.append(printTree(node.left, prefix + (isLeft ? "    " : "│   "), true));

        return sb.toString();
    }
}
`,lN=`class ListNode {
    public int data;
    public ListNode next;

    public ListNode(int data) {
        this.data = data;
        this.next = null;
    }

    @Override
    public String toString() {
        return "[" + data + "]";
    }
}

class LinkedList {
    private ListNode head;

    public LinkedList() {
        this.head = null;
    }

    public void append(int data) {
        if (head == null) {
            head = new ListNode(data);
            return;
        }

        ListNode current = head;

        while (current.next != null) {
            current = current.next;
        }

        current.next = new ListNode(data);
    }

    public void delete(int data) {
        if (head == null) {
            return;
        }

        if (head.data == data) {
            head = head.next;
            return;
        }

        ListNode prev = null;
        ListNode current = head;

        while (current != null) {
            if (current.data == data) {
                prev.next = current.next;
                return;
            }
            prev = current;
            current = current.next;
        }
    }

    public void reverse() {
        ListNode prev = null;
        ListNode current = head;

        while (current != null) {
            ListNode next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        head = prev;
    }

    @Override
    public String toString() {
        if (head == null) {
            return "None";
        }

        StringBuilder result = new StringBuilder();
        ListNode current = head;

        while (current != null) {
            result.append(current.toString()).append(" -> ");
            current = current.next;
        }

        result.append("None");
        return result.toString();
    }
}
`,sN=`public class ListNode<T> {
    T data;
    ListNode<T> prev;
    ListNode<T> next;

    public ListNode(T data) {
        this.data = data;
        prev = null;
        next = null;
    }

    @Override
    public String toString() {
        return "[" + data + "]";
    }
}

public class DoublyLinkedList<T> {
    ListNode<T> head;

    public DoublyLinkedList() {
        head = null;
    }

    public void append(T data) {
        if (head == null) {
            head = new ListNode<>(data);
            return;
        }

        ListNode<T> curr = head;

        while (curr.next != null) {
            curr = curr.next;
        }

        ListNode<T> newNode = new ListNode<>(data);
        curr.next = newNode;
        newNode.prev = curr;
    }

    public void delete(T data) {
        if (head == null) {
            return;
        }

        if (head.data.equals(data)) {
            head = head.next;
            if (head != null) {
                head.prev = null;
            }
            return;
        }

        ListNode<T> curr = head;

        while (curr != null) {
            if (curr.data.equals(data)) {
                ListNode<T> prevNode = curr.prev;
                prevNode.next = curr.next;
                if (curr.next != null) {
                    curr.next.prev = prevNode;
                }
                return;
            }
            curr = curr.next;
        }
    }

    public void reverse() {
        ListNode<T> curr = head;
        ListNode<T> prev = null;

        while (curr != null) {
            ListNode<T> nextNode = curr.next;
            curr.next = prev;
            curr.prev = nextNode;
            prev = curr;
            curr = nextNode;
        }

        head = prev;
    }

    @Override
    public String toString() {
        if (head == null) {
            return "None";
        }

        StringBuilder sb = new StringBuilder();
        ListNode<T> curr = head;

        while (curr != null) {
            sb.append(curr.toString()).append(" <-> ");
            curr = curr.next;
        }

        sb.append("None");
        return sb.toString();
    }
}
`,oN=`import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


public class Graph {
    Map<String, List<String>> graph;

    public Graph() {
        graph = new HashMap<>();
    }

    public void addVertex(String vertex) {
        if (!graph.containsKey(vertex)) {
            graph.put(vertex, new ArrayList<>());
        }
    }

    public void addEdge(String a, String b) {
        addVertex(a);
        addVertex(b);
        graph.get(a).add(b);
        graph.get(b).add(a);
    }

    public List<String> getNeighbors(String vertex) {
        return graph.getOrDefault(vertex, new ArrayList<>());
    }

    @Override
    public String toString() {
        StringBuilder output = new StringBuilder();

        for (Map.Entry<String, List<String>> entry : graph.entrySet()) {
            output.append(entry.getKey()).append(" - ").append(String.join(" - ", entry.getValue())).append("\\n");
        }

        return output.toString();
    }
}
`,cN=`#include <iostream>
#include <stdexcept>

using namespace std;


template<typename T>
class Array {
private:
    T* data;
    size_t size;

public:
    Array(size_t size) : size(size) {
        data = new T[size];
    }

    ~Array() {
        delete[] data;
    }

    T& operator[](size_t index) {
        if (index >= size) {
            throw std::out_of_range("Index out of range");
        }
        return data[index];
    }

    const T& operator[](size_t index) const {
        if (index >= size) {
            throw out_of_range("Index out of range");
        }
        return data[index];
    }

    size_t len() const {
        return size;
    }

    friend ostream& operator<<(ostream& os, const Array<T>& arr) {
        os << "[";
        for (size_t i = 0; i < arr.size; ++i) {
            os << arr.data[i];
            if (i < arr.size - 1) {
                os << ", ";
            }
        }
        os << "]";
        return os;
    }
};
`,uN=`#include <iostream>
#include <memory>
#include <string>

using namespace std;


template<typename T>
class BinaryTree {
private:
    shared_ptr<TreeNode<T>> root;

public:
    BinaryTree() : root(nullptr) {}

    void insert(const T& data) {
        root = insertNode(root, data);
    }

    shared_ptr<TreeNode<T>> insertNode(shared_ptr<TreeNode<T>> node, const T& data) {
        if (!node) {
            return make_shared<TreeNode<T>>(data);
        }

        if (!node->left) {
            node->left = make_shared<TreeNode<T>>(data);
        } else if (!node->right) {
            node->right = make_shared<TreeNode<T>>(data);
        } else {
            node->left = insertNode(node->left, data);
        }

        return node;
    }

    string printTree() const {
        return root ? printNode(root, "", true) : "Empty tree";
    }

    string printNode(const shared_ptr<TreeNode<T>>& node, const string& prefix, bool isLeft) const {
        string result;
        if (node) {
            result += printNode(node->right, prefix + (isLeft ? "│   " : "    "), false);
            result += prefix + (isLeft ? "└── " : "┌── ") + to_string(node->data) + "\\n";
            result += printNode(node->left, prefix + (isLeft ? "    " : "│   "), true);
        }
        return result;
    }
};
`,dN=`#include <iostream>
#include <memory>
#include <string>

using namespace std;


template<typename T>
class BinarySearchTree {
private:
    shared_ptr<TreeNode<T>> root;

public:
    BinarySearchTree() : root(nullptr) {}

    void insert(const T& data) {
        if (!root) {
            root = make_shared<TreeNode<T>>(data);
        } else {
            insertNode(root, data);
        }
    }

    void insertNode(shared_ptr<TreeNode<T>>& node, const T& data) {
        if (data < node->data) {
            if (!node->left) {
                node->left = make_shared<TreeNode<T>>(data);
            } else {
                insertNode(node->left, data);
            }
        } else {
            if (!node->right) {
                node->right = make_shared<TreeNode<T>>(data);
            } else {
                insertNode(node->right, data);
            }
        }
    }

    string printTree() const {
        return root ? printNode(root, "", true) : "Empty tree";
    }

    string printNode(const shared_ptr<TreeNode<T>>& node, const string& prefix, bool isLeft) const {
        string result;
        if (node) {
            result += printNode(node->right, prefix + (isLeft ? "│   " : "    "), false);
            result += prefix + (isLeft ? "└── " : "┌── ") + to_string(node->data) + "\\n";
            result += printNode(node->left, prefix + (isLeft ? "    " : "│   "), true);
        }
        return result;
    }
};
`,fN=`#include <iostream>

using namespace std;


template<typename T>
class ListNode {
public:
    T data;
    ListNode* next;

    ListNode(const T& data) : data(data), next(nullptr) {}
};

template<typename T>
class LinkedList {
private:
    ListNode<T>* head;

public:
    LinkedList() : head(nullptr) {}

    void append(const T& data) {
        if (!head) {
            head = new ListNode<T>(data);
            return;
        }

        ListNode<T>* curr = head;

        while (curr->next) {
            curr = curr->next;
        }

        curr->next = new ListNode<T>(data);
    }

    void deleteNode(const T& data) {
        if (!head) {
            return;
        }

        if (head->data == data) {
            ListNode<T>* temp = head;
            head = head->next;
            delete temp;
            return;
        }

        ListNode<T>* prev = nullptr;
        ListNode<T>* curr = head;

        while (curr) {
            if (curr->data == data) {
                prev->next = curr->next;
                delete curr;
                return;
            }

            prev = curr;
            curr = curr->next;
        }
    }

    void reverse() {
        ListNode<T>* prev = nullptr;
        ListNode<T>* curr = head;

        while (curr) {
            ListNode<T>* nextNode = curr->next;
            curr->next = prev;
            prev = curr;
            curr = nextNode;
        }

        head = prev;
    }

    ~LinkedList() {
        ListNode<T>* curr = head;

        while (curr) {
            ListNode<T>* temp = curr;
            curr = curr->next;
            delete temp;
        }
    }

    void display() {
        ListNode<T>* curr = head;

        while (curr) {
            cout << "[" << curr->data << "]";
            if (curr->next) {
                cout << " -> ";
            }
            curr = curr->next;
        }

        cout << " -> None" << endl;
    }
};
`,hN=`#include <iostream>
#include <memory>
#include <string>

using namespace std;


template<typename T>
class ListNode {
public:
    T data;
    shared_ptr<ListNode<T>> prev;
    shared_ptr<ListNode<T>> next;

    ListNode(const T& data) : data(data), prev(nullptr), next(nullptr) {}
};

template<typename T>
class DoublyLinkedList {
private:
    shared_ptr<ListNode<T>> head;

public:
    DoublyLinkedList() : head(nullptr) {}

    void append(const T& data) {
        if (!head) {
            head = make_shared<ListNode<T>>(data);
            return;
        }

        auto curr = head;

        while (curr->next) {
            curr = curr->next;
        }

        auto new_node = make_shared<ListNode<T>>(data);
        curr->next = new_node;
        new_node->prev = curr;
    }

    void deleteNode(const T& data) {
        if (!head) {
            return;
        }

        if (head->data == data) {
            head = head->next;
            if (head) {
                head->prev = nullptr;
            }
            return;
        }

        auto curr = head;

        while (curr) {
            if (curr->data == data) {
                auto prev_node = curr->prev;
                prev_node->next = curr->next;

                if (curr->next) {
                    curr->next->prev = prev_node;
                }

                return;
            }
            curr = curr->next;
        }
    }

    void reverse() {
        auto curr = head;
        shared_ptr<ListNode<T>> prev = nullptr;

        while (curr) {
            auto next_node = curr->next;
            curr->next = prev;
            curr->prev = next_node;
            prev = curr;
            curr = next_node;
        }

        head = prev;
    }

    string toString() const {
        if (!head) {
            return "None";
        }

        string result;
        auto curr = head;

        while (curr) {
            result += "[" + to_string(curr->data) + "]";

            if (curr->next) {
                result += " <-> ";
            }

            curr = curr->next;
        }

        result += " <-> None";
        return result;
    }
};
`,gN=`#include <iostream>
#include <unordered_map>
#include <vector>
#include <string>

using namespace std;


class Graph {
private:
    unordered_map<string, vector<string>> graph;

public:
    Graph() {}

    void addVertex(const string& vertex) {
        if (graph.find(vertex) == graph.end()) {
            graph[vertex] = {};
        }
    }

    void addEdge(const string& a, const string& b) {
        addVertex(a);
        addVertex(b);
        graph[a].push_back(b);
        graph[b].push_back(a);
    }

    vector<string> getNeighbors(const string& vertex) {
        return graph[vertex];
    }

    string toString() {
        string output;

        for (const auto& [vertex, neighbors] : graph) {
            output += vertex + " - ";

            for (const auto& neighbor : neighbors) {
                output += neighbor + " - ";
            }

            output.pop_back();
            output.pop_back();
            output += "\\n";
        }

        return output;
    }
};
`;function pN(){return r.jsxs("div",{className:Jn.container,children:[r.jsx("h2",{className:Jn.sectionHeader,children:"Data Structures"}),r.jsx("section",{id:"ds-array",children:r.jsxs(u,{title:"array",children:[r.jsx(u.Tab,{code:K2,language:"python"}),r.jsx(u.Tab,{code:P2,language:"javascript"}),r.jsx(u.Tab,{code:aN,language:"java"}),r.jsx(u.Tab,{code:cN,language:"cpp"})]})}),r.jsx("section",{id:"ds-hash-map",children:r.jsxs(u,{title:"hash map",children:[r.jsx(u.Tab,{code:_v,language:"python"}),r.jsx(u.Tab,{code:Tv,language:"javascript"}),r.jsx(u.Tab,{code:Sv,language:"java"}),r.jsx(u.Tab,{code:jv,language:"cpp"})]})}),r.jsx("section",{id:"ds-linked-list",children:r.jsxs(u,{title:"linked list",children:[r.jsx(u.Tab,{code:J2,language:"python"}),r.jsx(u.Tab,{code:nN,language:"javascript"}),r.jsx(u.Tab,{code:lN,language:"java"}),r.jsx(u.Tab,{code:fN,language:"cpp"})]})}),r.jsx("section",{id:"ds-doubly-linked-list",children:r.jsxs(u,{title:"doubly linked list",children:[r.jsx(u.Tab,{code:Z2,language:"python"}),r.jsx(u.Tab,{code:eN,language:"javascript"}),r.jsx(u.Tab,{code:sN,language:"java"}),r.jsx(u.Tab,{code:hN,language:"cpp"})]})}),r.jsx("section",{id:"ds-binary-tree",children:r.jsxs(u,{title:"binary tree",children:[r.jsx(u.Tab,{code:Q2,language:"python"}),r.jsx(u.Tab,{code:W2,language:"javascript"}),r.jsx(u.Tab,{code:iN,language:"java"}),r.jsx(u.Tab,{code:uN,language:"cpp"})]})}),r.jsx("section",{id:"ds-binary-search-tree",children:r.jsxs(u,{title:"binary search tree",children:[r.jsx(u.Tab,{code:X2,language:"python"}),r.jsx(u.Tab,{code:$2,language:"javascript"}),r.jsx(u.Tab,{code:rN,language:"java"}),r.jsx(u.Tab,{code:dN,language:"cpp"})]})}),r.jsx("section",{id:"ds-graph",children:r.jsxs(u,{title:"graph",children:[r.jsx(u.Tab,{code:F2,language:"python"}),r.jsx(u.Tab,{code:tN,language:"javascript"}),r.jsx(u.Tab,{code:oN,language:"java"}),r.jsx(u.Tab,{code:gN,language:"cpp"})]})}),r.jsx("section",{id:"ds-union-find",children:r.jsxs(u,{title:"union find",children:[r.jsx(u.Tab,{code:Av,language:"python"}),r.jsx(u.Tab,{code:kv,language:"javascript"}),r.jsx(u.Tab,{code:Mv,language:"java"}),r.jsx(u.Tab,{code:Rv,language:"cpp"})]})}),r.jsx("section",{id:"ds-union-find-optimized",children:r.jsxs(u,{title:"union find optimized",children:[r.jsx(u.Tab,{code:Cv,language:"python"}),r.jsx(u.Tab,{code:Lv,language:"javascript"}),r.jsx(u.Tab,{code:Dv,language:"java"}),r.jsx(u.Tab,{code:zv,language:"cpp"})]})}),r.jsx("section",{id:"ds-trie",children:r.jsxs(u,{title:"trie",children:[r.jsx(u.Tab,{code:Nv,language:"python"}),r.jsx(u.Tab,{code:wv,language:"javascript"}),r.jsx(u.Tab,{code:Ev,language:"java"}),r.jsx(u.Tab,{code:Ov,language:"cpp"})]})})]})}const mN=`import random


def bogo_sort(arr: list) -> None:
    target = sorted(arr)

    while arr != target:
        random.shuffle(arr)
`,vN=`def bubble_sort(arr: list) -> None:
    n = len(arr)

    for i in range(n):
        swapped = False

        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True

        if not swapped:
            break
`,bN=`def bucket_sort(arr: list) -> list:
    num_buckets = 10
    min_num = min(arr)
    max_num = max(arr)
    bucket_size = (max_num - min_num) / num_buckets
    buckets = [[] for _ in range(num_buckets)]

    for num in arr:
        index = min(int((num - min_num) / bucket_size), num_buckets - 1)
        buckets[index].append(num)

    return [num for bucket in buckets for num in sorted(bucket)]
`,yN=`def counting_sort(arr: list) -> list:
    max_num = max(arr)
    min_num = min(arr)
    count_range = max_num - min_num + 1
    count = [0] * count_range
    output = [0] * len(arr)

    for num in arr:
        count[num - min_num] += 1

    for i in range(1, count_range):
        count[i] += count[i - 1]

    for num in arr[::-1]:
        output[count[num - min_num] - 1] = num
        count[num - min_num] -= 1

    return output
`,xN=`def cube_sort(arr: list, processors: int) -> None:
    n = len(arr)
    subarrays = []
    subarray_size = n // processors

    for i in range(processors):
        subarray = arr[i * subarray_size : (i + 1) * subarray_size]
        subarrays.append(subarray)

    for subarray in subarrays:
        subarray.sort()

    for dimension in range(processors.bit_length() - 1):
        for i in range(processors):
            partner = i ^ (1 << dimension)
            if i < partner:
                merged = subarrays[i] + subarrays[partner]
            else:
                merged = subarrays[partner] + subarrays[i]
            merged.sort()
            subarrays[i] = merged[:subarray_size]
            subarrays[partner] = merged[subarray_size:]

    arr[:] = [num for subarray in subarrays for num in subarray]
`,_N=`def heap_sort(arr: list) -> list:
    n = len(arr)

    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)
    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        heapify(arr, i, 0)

    return arr

def heapify(arr: list, n: int, i: int) -> None:
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2

    if left < n and arr[left] > arr[largest]:
        largest = left
    if right < n and arr[right] > arr[largest]:
        largest = right
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)
`,TN=`def insertion_sort(arr: list) -> None:
    n = len(arr)

    for i in range(1, n):
        key = arr[i]

        while i > 0 and key < arr[i - 1]:
            arr[i] = arr[i - 1]
            i -= 1

        arr[i] = key
`,SN=`def merge_sort(arr: list) -> list:
    n = len(arr)

    if n <= 1:
        return arr

    mid = n // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    return merge(left, right)

def merge(left: list, right: list) -> list:
    output = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            output.append(left[i])
            i += 1
        else:
            output.append(right[j])
            j += 1

    output.extend(left[i:])
    output.extend(right[j:])

    return output
`,jN=`def pancake_sort(arr: list) -> None:
    n = len(arr)

    for size in reversed(range(2, n + 1)):
        max_idx = find_max_index(arr, size)

        if max_idx != size - 1:
            flip(arr, max_idx)
            flip(arr, size - 1)

def flip(arr: list, i: int) -> None:
    left = 0

    while left < i:
        arr[left], arr[i] = arr[i], arr[left]
        left += 1
        i -= 1

def find_max_index(arr: list, n: int) -> int:
    max_idx = 0

    for i in range(n):
        if arr[i] > arr[max_idx]:
            max_idx = i

    return max_idx
`,NN=`def quick_sort(arr: list) -> list:
    n = len(arr)

    if n <= 1:
        return arr

    pivot = arr[n // 2]
    left = [x for x in arr if x < pivot]
    right = [x for x in arr if x > pivot]

    return quick_sort(left) + [pivot] + quick_sort(right)
`,wN=`def radix_sort(arr: list) -> None:
    max_val = max(arr)
    exp = 1

    while max_val // exp > 0:
        counting_sort(arr, exp)
        exp *= 10

def counting_sort(arr: list, exp: int) -> None:
    n = len(arr)
    output = [0] * n
    count = [0] * 10

    for i in range(n):
        idx = arr[i] // exp
        count[idx % 10] += 1

    for i in range(1, 10):
        count[i] += count[i - 1]

    i = n - 1

    while i >= 0:
        idx = arr[i] // exp
        output[count[idx % 10] - 1] = arr[i]
        count[idx % 10] -= 1
        i -= 1

    for i in range(n):
        arr[i] = output[i]
`,EN=`def selection_sort(arr: list) -> None:
    n = len(arr)

    for i in range(n):
        min_i = i

        for j in range(i + 1, n):
            if arr[j] < arr[min_i]:
                min_i = j

        if min_i != i:
            arr[i], arr[min_i] = arr[min_i], arr[i]
`,ON=`def shell_sort(arr: list) -> None:
    n = len(arr)
    gaps = [701, 301, 132, 57, 23, 10, 4, 1]

    for gap in gaps:
        for i in range(gap, n):
            tmp = arr[i]
            j = i

            while j >= gap and arr[j - gap] > tmp:
                arr[j] = arr[j - gap]
                j -= gap

            if j != i:
                arr[j] = tmp
`,AN=`from threading import Thread
from time import sleep


def sleep_sort(arr: list ) -> list:
    sorted_arr = []
    threads = []

    for num in arr:
        thread = Thread(target=snorlax, args=(num, sorted_arr))
        threads.append(thread)

    for thread in threads:
        thread.start( )

    for thread in threads:
        thread.join()

    return sorted_arr

def snorlax(num: float, arr: list) -> None:
    sleep(num / 1000.0)
    arr.append(num)
`,kN=`def tim_sort(arr: list) -> list:
    n = len(arr)
    min_run = 32

    for start in range(0, n, min_run):
        end = min(start + min_run - 1, n - 1)
        insertion_sort(arr, start, end)

    size = min_run

    while size < n:
        for left in range(0, n, 2 * size):
            mid = min(n - 1, left + size - 1)
            right = min((left + 2 * size - 1), (n - 1))
            arr[left : right + 1] = merge(arr[left : mid + 1], arr[mid + 1 : right + 1])
        size *= 2

    return arr

def insertion_sort(arr: list, left: int, right: int) -> None:
    for i in range(left + 1, right + 1):
        key = arr[i]

        while i > 0 and key < arr[i - 1]:
            arr[i] = arr[i - 1]
            i -= 1

        arr[i] = key

def merge_sort(arr: list) -> list:
    n = len(arr)

    if n <= 1:
        return arr

    mid = n // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    return merge(left, right)

def merge(left: list, right: list) -> list:
    output = []

    while left and right:
        min_num = left.pop(0) if left[0] <= right[0] else right.pop(0)
        output.append(min_num)

    output.extend(left)
    output.extend(right)

    return output
`,MN=`const bogoSort = (arr) => {
    const isSorted = (arr) => {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                return false
            }
        }

        return true
    }

    const shuffleArray = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }

        return arr
    }

    while (!isSorted(arr)) {
        arr = shuffleArray(arr)
    }
}
`,RN=`const bubbleSort = (arr) => {
    const n = arr.length

    for (let i = 0; i < n; i++) {
        let swapped = false

        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                swapped = true
            }
        }

        if (!swapped) {
            break
        }
    }
}
`,CN=`const bucketSort = (arr) => {
    const num_buckets = 10
    const min_num = Math.min(...arr)
    const max_num = Math.max(...arr)
    const bucket_size = (max_num - min_num) / num_buckets
    const buckets = Array.from({ length: num_buckets }, () => [])

    for (const num of arr) {
        const index = Math.min(Math.floor((num - min_num) / bucket_size), num_buckets - 1)
        buckets[index].push(num)
    }

    return buckets.flatMap(bucket => bucket.sort((a, b) => a - b))
}
`,LN=`const countingSort = (arr) => {
    const max_num = Math.max(...arr)
    const min_num = Math.min(...arr)
    const count_range = max_num - min_num + 1
    const count = Array(count_range).fill(0)
    const output = Array(arr.length)

    for (const num of arr) {
        count[num - min_num]++
    }

    for (let i = 1; i < count_range; i++) {
        count[i] += count[i - 1]
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i] - min_num] - 1] = arr[i]
        count[arr[i] - min_num]--
    }

    return output
}
`,DN=`const cubeSort = (arr, processors) => {
    const n = arr.length
    const subarrays = []
    const subarraySize = Math.floor(n / processors)

    for (let i = 0; i < processors; i++) {
        const subarray = arr.slice(i * subarraySize, (i + 1) * subarraySize)
        subarray.sort((a, b) => a - b)
        subarrays.push(subarray)
    }

    for (let dimension = 0; dimension < Math.floor(Math.log2(processors)); dimension++) {
        for (let i = 0; i < processors; i++) {
            const partner = i ^ (1 << dimension)
            if (i < partner) {
                const merged = subarrays[i].concat(subarrays[partner])
                merged.sort((a, b) => a - b)
                subarrays[i] = merged.slice(0, subarraySize)
                subarrays[partner] = merged.slice(subarraySize)
            }
        }
    }

    arr.splice(0, arr.length, ...subarrays.flat())
}
`,zN=`const heapSort = (arr) => {
    const n = arr.length

    const heapify = (arr, n, i) => {
        let largest = i
        const left = 2 * i + 1
        const right = 2 * i + 2

        if (left < n && arr[left] > arr[largest]) {
            largest = left
        }
        if (right < n && arr[right] > arr[largest]) {
            largest = right
        }
        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]]
            heapify(arr, n, largest)
        }
    }

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i)
    }
    for (let i = n - 1; i > 0; i--) {
        [arr[i], arr[0]] = [arr[0], arr[i]]
        heapify(arr, i, 0)
    }

    return arr
}
`,BN=`const insertionSort = (arr) => {
    const n = arr.length

    for (let i = 1; i < n; i++) {
        let key = arr[i]
        let j = i - 1

        while (j >= 0 && key < arr[j]) {
            arr[j + 1] = arr[j]
            j--
        }

        arr[j + 1] = key
    }
}
`,UN=`const mergeSort = (arr) => {
    const n = arr.length

    if (n <= 1) {
        return arr
    }

    const mid = Math.floor(n / 2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))

    return merge(left, right)
}

const merge = (left, right) => {
    const output = []
    let i = 0
    let j = 0

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            output.push(left[i])
            i += 1
        } else {
            output.push(right[j])
            j += 1
        }
    }

    output.push(...left.slice(i))
    output.push(...right.slice(j))

    return output
}
`,HN=`const pancakeSort = (arr) => {
    const n = arr.length

    for (let size = n; size > 1; size--) {
        const maxIdx = findMaxIndex(arr, size)

        if (maxIdx !== size - 1) {
            flip(arr, maxIdx)
            flip(arr, size - 1)
        }
    }
}

const flip = (arr, i) => {
    let left = 0

    while (left < i) {
        [arr[left], arr[i]] = [arr[i], arr[left]]
        left++
        i--
    }
}

const findMaxIndex = (arr, n) => {
    let maxIdx = 0

    for (let i = 0; i < n; i++) {
        if (arr[i] > arr[maxIdx]) {
            maxIdx = i
        }
    }

    return maxIdx
}
`,qN=`const quickSort = (arr) => {
    const n = arr.length

    if (n <= 1) {
        return arr
    }

    const pivot = arr[Math.floor(n / 2)]
    const left = arr.filter(x => x < pivot)
    const right = arr.filter(x => x > pivot)

    return [...quickSort(left), pivot, ...quickSort(right)]
}
`,GN=`const radixSort = (arr) => {
    const maxVal = Math.max(...arr)
    let exp = 1

    while (maxVal / exp > 0) {
        countingSort(arr, exp)
        exp *= 10
    }
}

const countingSort = (arr, exp) => {
    const n = arr.length
    const output = new Array(n).fill(0)
    const count = new Array(10).fill(0)

    for (let i = 0; i < n; i++) {
        const idx = Math.floor(arr[i] / exp)
        count[idx % 10] += 1
    }

    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1]
    }

    let i = n - 1

    while (i >= 0) {
        const idx = Math.floor(arr[i] / exp)
        output[count[idx % 10] - 1] = arr[i]
        count[idx % 10] -= 1
        i -= 1
    }

    for (let i = 0; i < n; i++) {
        arr[i] = output[i]
    }
}
`,YN=`const selectionSort = (arr) => {
    const n = arr.length

    for (let i = 0; i < n; i++) {
        let minIndex = i

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
}
`,VN=`const shellSort = (arr) => {
    const n = arr.length
    const gaps = [701, 301, 132, 57, 23, 10, 4, 1]

    for (const gap of gaps) {
        for (let i = gap; i < n; i++) {
            const tmp = arr[i]
            let j = i

            while (j >= gap && arr[j - gap] > tmp) {
                arr[j] = arr[j - gap]
                j -= gap
            }

            if (j !== i) {
                arr[j] = tmp
            }
        }
    }
}
`,IN=`const sleepSort = (arr) => {
    const sortedArr = []
    const promises = []

    for (const num of arr) {
        promises.push(new Promise((resolve) => setTimeout(() => {
            sortedArr.push(num)
            resolve()
        }, num)))
    }

    return Promise.all(promises).then(() => sortedArr)
}
`,KN=`const timSort = (arr) => {
    const n = arr.length
    const minRun = 32

    for (let start = 0; start < n; start += minRun) {
        const end = Math.min(start + minRun - 1, n - 1)
        insertionSort(arr, start, end)
    }

    let size = minRun

    while (size < n) {
        for (let left = 0; left < n; left += 2 * size) {
            const mid = Math.min(n - 1, left + size - 1)
            const right = Math.min((left + 2 * size - 1), (n - 1))
            const merged = merge(arr.slice(left, mid + 1), arr.slice(mid + 1, right + 1))
            arr.splice(left, right - left + 1, ...merged)
        }
        size *= 2
    }

    return arr
}

const insertionSort = (arr, left, right) => {
    for (let i = left + 1; i <= right; i++) {
        const key = arr[i]
        let j = i

        while (j > left && key < arr[j - 1]) {
            arr[j] = arr[j - 1]
            j--
        }

        arr[j] = key
    }
}

const mergeSort = (arr) => {
    const n = arr.length

    if (n <= 1) {
        return arr
    }

    const mid = Math.floor(n / 2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))

    return merge(left, right)
}

const merge = (left, right) => {
    const output = []

    while (left.length && right.length) {
        const minNum = left[0] <= right[0] ? left.shift() : right.shift()
        output.push(minNum)
    }

    return output.concat(left).concat(right)
}
`,QN=`import java.util.Arrays;
import java.util.Random;


public static void bogoSort(int[] arr) {
    int[] target = Arrays.copyOf(arr, arr.length);
    Arrays.sort(target);

    while (!Arrays.equals(arr, target)) {
        shuffleArray(arr);
    }
}

public static void shuffleArray(int[] arr) {
    Random rnd = new Random();

    for (int i = arr.length - 1; i > 0; i--) {
        int index = rnd.nextInt(i + 1);
        int temp = arr[index];
        arr[index] = arr[i];
        arr[i] = temp;
    }
}
`,XN=`public static void bubbleSort(int[] arr) {
    int n = arr.length;

    for (int i = 0; i < n; i++) {
        boolean swapped = false;

        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }
}
`,JN=`import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;


public static int[] bucketSort(int[] arr) {
    int numBuckets = 10;
    int index;
    int[] result = new int[arr.length];
    int minNum = Arrays.stream(arr).min().getAsInt();
    int maxNum = Arrays.stream(arr).max().getAsInt();
    double bucketSize = (double) (maxNum - minNum) / numBuckets;
    List<List<Integer>> buckets = new ArrayList<>(numBuckets);

    for (int i = 0; i < numBuckets; i++) {
        buckets.add(new ArrayList<>());
    }

    for (int num : arr) {
        index = Math.min((int) ((num - minNum) / bucketSize), numBuckets - 1);
        buckets.get(index).add(num);
    }

    index = 0;

    for (List<Integer> bucket : buckets) {
        Collections.sort(bucket);

        for (int num : bucket) {
            result[index++] = num;
        }
    }

    return result;
}
`,ZN=`import java.util.Arrays;


public static int[] countingSort(int[] arr) {
    int maxNum = Arrays.stream(arr).max().orElse(Integer.MIN_VALUE);
    int minNum = Arrays.stream(arr).min().orElse(Integer.MAX_VALUE);
    int countRange = maxNum - minNum + 1;
    int[] count = new int[countRange];
    int[] output = new int[arr.length];

    for (int num : arr) {
        count[num - minNum]++;
    }

    for (int i = 1; i < countRange; i++) {
        count[i] += count[i - 1];
    }

    for (int i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i] - minNum] - 1] = arr[i];
        count[arr[i] - minNum]--;
    }

    return output;
}
`,FN=`import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


public static void cubeSort(int[] arr, int processors) {
    int n = arr.length;
    List<int[]> subarrays = new ArrayList<>();
    int subarraySize = (n + processors - 1) / processors;

    for (int i = 0; i < processors; i++) {
        int[] subarray = new int[Math.min(subarraySize, n - i * subarraySize)];
        System.arraycopy(arr, i * subarraySize, subarray, 0, subarray.length);
        Arrays.sort(subarray);
        subarrays.add(subarray);
    }

    for (int dimension = 0; dimension < Integer.SIZE - 1; dimension++) {
        for (int i = 0; i < processors; i++) {
            int partner = i ^ (1 << dimension);

            if (i < partner && partner < processors) {
                int[] merged = merge(subarrays.get(i), subarrays.get(partner));
                System.arraycopy(merged, 0, subarrays.get(i), 0, subarraySize);
                System.arraycopy(merged, subarraySize, subarrays.get(partner), 0, subarraySize);
            }
        }
    }

    int index = 0;

    for (int[] subarray : subarrays) {
        for (int num : subarray) {
            arr[index++] = num;
        }
    }
}

public static int[] merge(int[] arr1, int[] arr2) {
    int[] merged = new int[arr1.length + arr2.length];
    int i = 0, j = 0, k = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged[k++] = arr1[i++];
        } else {
            merged[k++] = arr2[j++];
        }
    }

    while (i < arr1.length) {
        merged[k++] = arr1[i++];
    }

    while (j < arr2.length) {
        merged[k++] = arr2[j++];
    }

    return merged;
}
`,PN=`public static int[] heapSort(int[] arr) {
    int n = arr.length;

    for (int i = n / 2 - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    for (int i = n - 1; i > 0; i--) {
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        heapify(arr, i, 0);
    }

    return arr;
}

public static void heapify(int[] arr, int n, int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest != i) {
        int temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;

        heapify(arr, n, largest);
    }
}
`,WN=`public static void insertionSort(int[] arr) {
    int n = arr.length;

    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;

        while (j >= 0 && key < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }
}
`,$N=`import java.util.Arrays;


public static int[] mergeSort(int[] arr) {
    int n = arr.length;

    if (n <= 1) {
        return arr;
    }

    int mid = n / 2;
    int[] left = Arrays.copyOfRange(arr, 0, mid);
    int[] right = Arrays.copyOfRange(arr, mid, n);

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
}

public static int[] merge(int[] left, int[] right) {
    int[] output = new int[left.length + right.length];
    int i = 0, j = 0, k = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            output[k++] = left[i++];
        } else {
            output[k++] = right[j++];
        }
    }

    while (i < left.length) {
        output[k++] = left[i++];
    }

    while (j < right.length) {
        output[k++] = right[j++];
    }

    return output;
}
`,nw=`public static void pancakeSort(int[] arr) {
    int n = arr.length;

    for (int size = n; size >= 2; size--) {
        int maxIdx = findMaxIndex(arr, size);

        if (maxIdx != size - 1) {
            flip(arr, maxIdx);
            flip(arr, size - 1);
        }
    }
}

public static void flip(int[] arr, int i) {
    int left = 0;

    while (left < i) {
        int temp = arr[left];
        arr[left] = arr[i];
        arr[i] = temp;
        left++;
        i--;
    }
}

public static int findMaxIndex(int[] arr, int n) {
    int maxIdx = 0;

    for (int i = 0; i < n; i++) {
        if (arr[i] > arr[maxIdx]) {
            maxIdx = i;
        }
    }

    return maxIdx;
}
`,ew=`import java.util.ArrayList;
import java.util.List;


public static int[] quickSort(int[] arr) {
    int n = arr.length;

    if (n <= 1) {
        return arr;
    }

    int pivot = arr[n / 2];
    List<Integer> left = new ArrayList<>();
    List<Integer> right = new ArrayList<>();

    for (int x : arr) {
        if (x < pivot) {
            left.add(x);
        } else if (x > pivot) {
            right.add(x);
        }
    }

    int[] sortedLeft = quickSort(left.stream().mapToInt(i -> i).toArray());
    int[] sortedRight = quickSort(right.stream().mapToInt(i -> i).toArray());
    int[] result = new int[n];

    System.arraycopy(sortedLeft, 0, result, 0, sortedLeft.length);
    result[sortedLeft.length] = pivot;
    System.arraycopy(sortedRight, 0, result, sortedLeft.length + 1, sortedRight.length);

    return result;
}
`,tw=`import java.util.Arrays;


public static void radixSort(int[] arr) {
    int maxVal = Arrays.stream(arr).max().getAsInt();
    int exp = 1;

    while (maxVal / exp > 0) {
        countingSort(arr, exp);
        exp *= 10;
    }
}

public static void countingSort(int[] arr, int exp) {
    int n = arr.length;
    int[] output = new int[n];
    int[] count = new int[10];

    for (int i = 0; i < n; i++) {
        int idx = arr[i] / exp;
        count[idx % 10]++;
    }

    for (int i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    for (int i = n - 1; i >= 0; i--) {
        int idx = arr[i] / exp;
        output[count[idx % 10] - 1] = arr[i];
        count[idx % 10]--;
    }

    System.arraycopy(output, 0, arr, 0, n);
}
`,aw=`public static void selectionSort(int[] arr) {
    int n = arr.length;

    for (int i = 0; i < n; i++) {
        int minIdx = i;

        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }

        if (minIdx != i) {
            int temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
    }
}
`,iw=`public static void shellSort(int[] arr) {
    int n = arr.length;
    int[] gaps = {701, 301, 132, 57, 23, 10, 4, 1};

    for (int gap : gaps) {
        for (int i = gap; i < n; i++) {
            int tmp = arr[i];
            int j = i;

            while (j >= gap && arr[j - gap] > tmp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }

            if (j != i) {
                arr[j] = tmp;
            }
        }
    }
}
`,rw=`import java.util.ArrayList;
import java.util.List;


public static int[] sleepSort(int[] arr) {
    List<Integer> sortedArr = new ArrayList<>();
    List<Thread> threads = new ArrayList<>();

    for (int num : arr) {
        Thread thread = new Thread(() -> snorlax(num, sortedArr));
        threads.add(thread);
    }

    for (Thread thread : threads) {
        thread.start();
    }

    for (Thread thread : threads) {
        try {
            thread.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    return sortedArr.stream().mapToInt(i -> i).toArray();
}

public static void snorlax(int num, List<Integer> arr) {
    try {
        Thread.sleep(num);
    } catch (InterruptedException e) {
        e.printStackTrace();
    }
    arr.add(num);
}
`,lw=`public static int[] timSort(int[] arr) {
    int n = arr.length;
    int minRun = 32;

    for (int start = 0; start < n; start += minRun) {
        int end = Math.min(start + minRun - 1, n - 1);
        insertionSort(arr, start, end);
    }

    int size = minRun;

    while (size < n) {
        for (int left = 0; left < n; left += 2 * size) {
            int mid = Math.min(n - 1, left + size - 1);
            int right = Math.min(left + 2 * size - 1, n - 1);
            arr = merge(arr, left, mid, right);
        }
        size *= 2;
    }

    return arr;
}

public static void insertionSort(int[] arr, int left, int right) {
    for (int i = left + 1; i <= right; i++) {
        int key = arr[i];
        int j = i - 1;

        while (j >= left && key < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }
}

public static int[] merge(int[] arr, int left, int mid, int right) {
    int[] output = new int[right - left + 1];
    int i = left, j = mid + 1, k = 0;

    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            output[k++] = arr[i++];
        } else {
            output[k++] = arr[j++];
        }
    }

    while (i <= mid) {
        output[k++] = arr[i++];
    }

    while (j <= right) {
        output[k++] = arr[j++];
    }

    System.arraycopy(output, 0, arr, left, output.length);
    return arr;
}
`,sw=`#include <algorithm>
#include <random>
#include <vector>

using namespace std;


void BogoSort(vector<int>& arr) {
    vector<int> target = arr;
    sort(target.begin(), target.end());

    random_device rd;
    mt19937 g(rd());

    while (!is_sorted(arr.begin(), arr.end())) {
        shuffle(arr.begin(), arr.end(), g);
    }
}
`,ow=`#include <vector>

using namespace std;


void BubbleSort(vector<int>& arr) {
    int n = arr.size();

    for (int i = 0; i < n; ++i) {
        bool swapped = false;

        for (int j = 0; j < n - i - 1; ++j) {
            if (arr[j] > arr[j + 1]) {
                std::swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }
}
`,cw=`#include <vector>
#include <algorithm>

using namespace std;


vector<int> BucketSort(vector<int>& arr) {
    int num_buckets = 10;
    int min_num = *min_element(arr.begin(), arr.end());
    int max_num = *max_element(arr.begin(), arr.end());
    double bucket_size = static_cast<double>(max_num - min_num) / num_buckets;
    vector<vector<int>> buckets(num_buckets);
    vector<int> result;

    for (int num : arr) {
        int index = min(static_cast<int>((num - min_num) / bucket_size), num_buckets - 1);
        buckets[index].push_back(num);
    }

    for (auto& bucket : buckets) {
        sort(bucket.begin(), bucket.end());
        result.insert(result.end(), bucket.begin(), bucket.end());
    }

    return result;
}
`,uw=`#include <vector>
#include <algorithm>

using namespace std;


vector<int> CountingSort(vector<int>& arr) {
    int max_num = *max_element(arr.begin(), arr.end());
    int min_num = *min_element(arr.begin(), arr.end());
    int count_range = max_num - min_num + 1;
    vector<int> count(count_range, 0);
    vector<int> output(arr.size(), 0);

    for (int num : arr) {
        count[num - min_num]++;
    }

    for (int i = 1; i < count_range; ++i) {
        count[i] += count[i - 1];
    }

    for (int i = arr.size() - 1; i >= 0; --i) {
        output[count[arr[i] - min_num] - 1] = arr[i];
        count[arr[i] - min_num]--;
    }

    return output;
}
`,dw=`#include <vector>
#include <algorithm>
#include <cmath>

using namespace std;


void CubeSort(vector<int>& arr, int processors) {
    int n = arr.size();
    vector<vector<int>> subarrays;
    int subarray_size = n / processors;

    for (int i = 0; i < processors; ++i) {
        vector<int> subarray(arr.begin() + i * subarray_size, arr.begin() + (i + 1) * subarray_size);
        sort(subarray.begin(), subarray.end());
        subarrays.push_back(subarray);
    }

    for (int dimension = 0; dimension < log2(processors); ++dimension) {
        for (int i = 0; i < processors; ++i) {
            int partner = i ^ (1 << dimension);
            vector<int> merged;
            if (i < partner) {
                merged = subarrays[i];
                merged.insert(merged.end(), subarrays[partner].begin(), subarrays[partner].end());
            } else {
                merged = subarrays[partner];
                merged.insert(merged.end(), subarrays[i].begin(), subarrays[i].end());
            }
            sort(merged.begin(), merged.end());
            subarrays[i].assign(merged.begin(), merged.begin() + subarray_size);
            subarrays[partner].assign(merged.begin() + subarray_size, merged.end());
        }
    }

    arr.clear();
    for (auto& subarray : subarrays) {
        arr.insert(arr.end(), subarray.begin(), subarray.end());
    }
}
`,fw=`#include <vector>

using namespace std;


void Heapify(vector<int>& arr, int n, int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest != i) {
        swap(arr[i], arr[largest]);
        Heapify(arr, n, largest);
    }
}

void HeapSort(vector<int>& arr) {
    int n = arr.size();

    for (int i = n / 2 - 1; i >= 0; --i) {
        Heapify(arr, n, i);
    }
    for (int i = n - 1; i > 0; --i) {
        swap(arr[0], arr[i]);
        Heapify(arr, i, 0);
    }
}
`,hw=`#include <vector>

using namespace std;


void InsertionSort(vector<int>& arr) {
    int n = arr.size();

    for (int i = 1; i < n; ++i) {
        int key = arr[i];
        int j = i - 1;

        while (j >= 0 && key < arr[j]) {
            arr[j + 1] = arr[j];
            --j;
        }

        arr[j + 1] = key;
    }
}
`,gw=`#include <vector>

using namespace std;


vector<int> Merge(vector<int>& left, vector<int>& right) {
    vector<int> output;
    size_t i = 0;
    size_t j = 0;

    while (i < left.size() && j < right.size()) {
        if (left[i] <= right[j]) {
            output.push_back(left[i]);
            i++;
        } else {
            output.push_back(right[j]);
            j++;
        }
    }

    output.insert(output.end(), left.begin() + i, left.end());
    output.insert(output.end(), right.begin() + j, right.end());

    return output;
}

vector<int> MergeSort(vector<int>& arr) {
    int n = arr.size();

    if (n <= 1) {
        return arr;
    }

    int mid = n / 2;
    vector<int> left(arr.begin(), arr.begin() + mid);
    vector<int> right(arr.begin() + mid, arr.end());

    left = MergeSort(left);
    right = MergeSort(right);

    return Merge(left, right);
}
`,pw=`#include <vector>

using namespace std;


int FindMaxIndex(vector<int>& arr, int n) {
    int max_idx = 0;

    for (int i = 0; i < n; ++i) {
        if (arr[i] > arr[max_idx]) {
            max_idx = i;
        }
    }

    return max_idx;
}

void Flip(vector<int>& arr, int i) {
    int left = 0;

    while (left < i) {
        swap(arr[left], arr[i]);
        left++;
        i--;
    }
}

void PancakeSort(vector<int>& arr) {
    int n = arr.size();

    for (int size = n; size >= 2; --size) {
        int max_idx = FindMaxIndex(arr, size);

        if (max_idx != size - 1) {
            Flip(arr, max_idx);
            Flip(arr, size - 1);
        }
    }
}
`,mw=`#include <vector>

using namespace std;


vector<int> QuickSort(vector<int>& arr) {
    int n = arr.size();

    if (n <= 1) {
        return arr;
    }

    int pivot = arr[n / 2];
    vector<int> left, right;

    for (int x : arr) {
        if (x < pivot) {
            left.push_back(x);
        } else if (x > pivot) {
            right.push_back(x);
        }
    }

    left = QuickSort(left);
    right = QuickSort(right);

    left.push_back(pivot);
    left.insert(left.end(), right.begin(), right.end());

    return left;
}
`,vw=`#include <vector>

using namespace std;


void CountingSort(vector<int>& arr, int exp) {
    int n = arr.size();
    vector<int> output(n, 0);
    vector<int> count(10, 0);

    for (int i = 0; i < n; ++i) {
        int idx = arr[i] / exp % 10;
        count[idx]++;
    }

    for (int i = 1; i < 10; ++i) {
        count[i] += count[i - 1];
    }

    for (int i = n - 1; i >= 0; --i) {
        int idx = arr[i] / exp % 10;
        output[count[idx] - 1] = arr[i];
        count[idx]--;
    }

    for (int i = 0; i < n; ++i) {
        arr[i] = output[i];
    }
}

void RadixSort(vector<int>& arr) {
    int max_val = *max_element(arr.begin(), arr.end());
    int exp = 1;

    while (max_val / exp > 0) {
        CountingSort(arr, exp);
        exp *= 10;
    }
}
`,bw=`#include <vector>

using namespace std;


void SelectionSort(vector<int>& arr) {
    int n = arr.size();

    for (int i = 0; i < n; ++i) {
        int min_i = i;

        for (int j = i + 1; j < n; ++j) {
            if (arr[j] < arr[min_i]) {
                min_i = j;
            }
        }

        if (min_i != i) {
            swap(arr[i], arr[min_i]);
        }
    }
}
`,yw=`#include <vector>

using namespace std;


void ShellSort(vector<int>& arr) {
    int n = arr.size();
    vector<int> gaps = {701, 301, 132, 57, 23, 10, 4, 1};

    for (int gap : gaps) {
        for (int i = gap; i < n; ++i) {
            int tmp = arr[i];
            int j = i;

            while (j >= gap && arr[j - gap] > tmp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }

            if (j != i) {
                arr[j] = tmp;
            }
        }
    }
}
`,xw=`#include <chrono>
#include <thread>
#include <vector>

using namespace std;


void Snorlax(double num, vector<double>& arr) {
    this_thread::sleep_for(chrono::milliseconds(static_cast<int>(num)));
    arr.push_back(num);
}

vector<double> SleepSort(vector<double>& arr) {
    vector<double> sorted_arr;
    vector<thread> threads;

    for (double num : arr) {
        threads.emplace_back(Snorlax, num, ref(sorted_arr));
    }

    for (thread& t : threads) {
        t.join();
    }

    return sorted_arr;
}
`,_w=`#include <vector>
#include <algorithm>

using namespace std;


void InsertionSort(vector<double>& arr, int left, int right) {
    for (int i = left + 1; i <= right; ++i) {
        double key = arr[i];
        int j = i - 1;

        while (j >= left && arr[j] > key) {
            arr[j + 1] = arr[j];
            --j;
        }

        arr[j + 1] = key;
    }
}

vector<double> Merge(const vector<double>& left, const vector<double>& right) {
    vector<double> output;

    int left_index = 0;
    int right_index = 0;

    while (left_index < left.size() && right_index < right.size()) {
        if (left[left_index] <= right[right_index]) {
            output.push_back(left[left_index++]);
        } else {
            output.push_back(right[right_index++]);
        }
    }

    while (left_index < left.size()) {
        output.push_back(left[left_index++]);
    }

    while (right_index < right.size()) {
        output.push_back(right[right_index++]);
    }

    return output;
}

vector<double> TimSort(vector<double>& arr) {
    int n = arr.size();
    int min_run = 32;

    for (int start = 0; start < n; start += min_run) {
        int end = min(start + min_run - 1, n - 1);
        InsertionSort(arr, start, end);
    }

    int size = min_run;

    while (size < n) {
        for (int left = 0; left < n; left += 2 * size) {
            int mid = min(n - 1, left + size - 1);
            int right = min((left + 2 * size - 1), (n - 1));
            vector<double> merged = Merge(
                vector<double>(arr.begin() + left, arr.begin() + mid + 1),
                vector<double>(arr.begin() + mid + 1, arr.begin() + right + 1)
            );
            copy(merged.begin(), merged.end(), arr.begin() + left);
        }
        size *= 2;
    }

    return arr;
}
`;function Tw(){return r.jsxs("div",{className:Jn.container,children:[r.jsx("h2",{className:Jn.sectionHeader,children:"Sorting Algorithms"}),r.jsx("section",{id:"sort-bubble",children:r.jsxs(u,{title:"bubble sort",children:[r.jsx(u.Tab,{code:vN,language:"python"}),r.jsx(u.Tab,{code:RN,language:"javascript"}),r.jsx(u.Tab,{code:XN,language:"java"}),r.jsx(u.Tab,{code:ow,language:"cpp"})]})}),r.jsx("section",{id:"sort-selection",children:r.jsxs(u,{title:"selection sort",children:[r.jsx(u.Tab,{code:EN,language:"python"}),r.jsx(u.Tab,{code:YN,language:"javascript"}),r.jsx(u.Tab,{code:aw,language:"java"}),r.jsx(u.Tab,{code:bw,language:"cpp"})]})}),r.jsx("section",{id:"sort-insertion",children:r.jsxs(u,{title:"insertion sort",children:[r.jsx(u.Tab,{code:TN,language:"python"}),r.jsx(u.Tab,{code:BN,language:"javascript"}),r.jsx(u.Tab,{code:WN,language:"java"}),r.jsx(u.Tab,{code:hw,language:"cpp"})]})}),r.jsx("section",{id:"sort-shell",children:r.jsxs(u,{title:"shell sort",children:[r.jsx(u.Tab,{code:ON,language:"python"}),r.jsx(u.Tab,{code:VN,language:"javascript"}),r.jsx(u.Tab,{code:iw,language:"java"}),r.jsx(u.Tab,{code:yw,language:"cpp"})]})}),r.jsx("section",{id:"sort-merge",children:r.jsxs(u,{title:"merge sort",children:[r.jsx(u.Tab,{code:SN,language:"python"}),r.jsx(u.Tab,{code:UN,language:"javascript"}),r.jsx(u.Tab,{code:$N,language:"java"}),r.jsx(u.Tab,{code:gw,language:"cpp"})]})}),r.jsx("section",{id:"sort-quick",children:r.jsxs(u,{title:"quick sort",children:[r.jsx(u.Tab,{code:NN,language:"python"}),r.jsx(u.Tab,{code:qN,language:"javascript"}),r.jsx(u.Tab,{code:ew,language:"java"}),r.jsx(u.Tab,{code:mw,language:"cpp"})]})}),r.jsx("section",{id:"sort-tim",children:r.jsxs(u,{title:"timsort",children:[r.jsx(u.Tab,{code:kN,language:"python"}),r.jsx(u.Tab,{code:KN,language:"javascript"}),r.jsx(u.Tab,{code:lw,language:"java"}),r.jsx(u.Tab,{code:_w,language:"cpp"})]})}),r.jsx("section",{id:"sort-heap",children:r.jsxs(u,{title:"heap sort",children:[r.jsx(u.Tab,{code:_N,language:"python"}),r.jsx(u.Tab,{code:zN,language:"javascript"}),r.jsx(u.Tab,{code:PN,language:"java"}),r.jsx(u.Tab,{code:fw,language:"cpp"})]})}),r.jsx("section",{id:"sort-counting",children:r.jsxs(u,{title:"counting sort",children:[r.jsx(u.Tab,{code:yN,language:"python"}),r.jsx(u.Tab,{code:LN,language:"javascript"}),r.jsx(u.Tab,{code:ZN,language:"java"}),r.jsx(u.Tab,{code:uw,language:"cpp"})]})}),r.jsx("section",{id:"sort-bucket",children:r.jsxs(u,{title:"bucket sort",children:[r.jsx(u.Tab,{code:bN,language:"python"}),r.jsx(u.Tab,{code:CN,language:"javascript"}),r.jsx(u.Tab,{code:JN,language:"java"}),r.jsx(u.Tab,{code:cw,language:"cpp"})]})}),r.jsx("section",{id:"sort-radix",children:r.jsxs(u,{title:"radix sort",children:[r.jsx(u.Tab,{code:wN,language:"python"}),r.jsx(u.Tab,{code:GN,language:"javascript"}),r.jsx(u.Tab,{code:tw,language:"java"}),r.jsx(u.Tab,{code:vw,language:"cpp"})]})}),r.jsx("section",{id:"sort-cube",children:r.jsxs(u,{title:"cubesort",children:[r.jsx(u.Tab,{code:xN,language:"python"}),r.jsx(u.Tab,{code:DN,language:"javascript"}),r.jsx(u.Tab,{code:FN,language:"java"}),r.jsx(u.Tab,{code:dw,language:"cpp"})]})}),r.jsx("section",{id:"sort-bogo",children:r.jsxs(u,{title:"bogo sort",children:[r.jsx(u.Tab,{code:mN,language:"python"}),r.jsx(u.Tab,{code:MN,language:"javascript"}),r.jsx(u.Tab,{code:QN,language:"java"}),r.jsx(u.Tab,{code:sw,language:"cpp"})]})}),r.jsx("section",{id:"sort-pancake",children:r.jsxs(u,{title:"pancake sort",children:[r.jsx(u.Tab,{code:jN,language:"python"}),r.jsx(u.Tab,{code:HN,language:"javascript"}),r.jsx(u.Tab,{code:nw,language:"java"}),r.jsx(u.Tab,{code:pw,language:"cpp"})]})}),r.jsx("section",{id:"sort-sleep",children:r.jsxs(u,{title:"sleep sort",children:[r.jsx(u.Tab,{code:AN,language:"python"}),r.jsx(u.Tab,{code:IN,language:"javascript"}),r.jsx(u.Tab,{code:rw,language:"java"}),r.jsx(u.Tab,{code:xw,language:"cpp"})]})})]})}function Sw(){const{isSidebarOpen:o}=sd(),{view:g}=go(),h=Kn(Cp.main,(!o||g!=="cheatsheet")&&Cp.sidebarHidden);return r.jsx("main",{className:h,children:g==="finder"?r.jsx(gj,{}):g==="pareto"?r.jsx(i2,{}):jw()})}function jw(){return r.jsxs(r.Fragment,{children:[r.jsx(x2,{}),r.jsx(_2,{}),r.jsx(T2,{}),r.jsx(S2,{}),r.jsx(j2,{}),r.jsx(N2,{}),r.jsx(w2,{}),r.jsx(E2,{}),r.jsx(O2,{}),r.jsx(A2,{}),r.jsx(k2,{}),r.jsx(M2,{}),r.jsx(I2,{}),r.jsx(pN,{}),r.jsx(Tw,{})]})}function Nw(){return r.jsx(ho.StrictMode,{children:r.jsx(px,{children:r.jsx(gx,{children:r.jsx(mx,{children:r.jsxs("div",{className:"App",children:[r.jsx(X_,{}),r.jsx(Sw,{})]})})})})})}fx.createRoot(document.getElementById("root")).render(r.jsx(Nw,{}));export{Nl as K,Ew as M,ho as R,nj as T,U as a,Kn as c,SS as g,r as j,rd as r,wi as t};
