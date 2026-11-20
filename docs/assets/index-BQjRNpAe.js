const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/400-B5WfoJxY.css","assets/700-Bwqbt05G.css","assets/MapView-DJ36MGSo.js","assets/path-D0nDuxpZ.js","assets/path-BhwaGE6S.css","assets/MapView-acdOEaeK.css","assets/MapOutline-CxYG6cU3.js"])))=>i.map(i=>d[i]);
(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const T of document.querySelectorAll('link[rel="modulepreload"]'))d(T);new MutationObserver(T=>{for(const R of T)if(R.type==="childList")for(const M of R.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&d(M)}).observe(document,{childList:!0,subtree:!0});function h(T){const R={};return T.integrity&&(R.integrity=T.integrity),T.referrerPolicy&&(R.referrerPolicy=T.referrerPolicy),T.crossOrigin==="use-credentials"?R.credentials="include":T.crossOrigin==="anonymous"?R.credentials="omit":R.credentials="same-origin",R}function d(T){if(T.ep)return;T.ep=!0;const R=h(T);fetch(T.href,R)}})();function Sr(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Yu={exports:{}},Sl={};var gg;function lx(){if(gg)return Sl;gg=1;var o=Symbol.for("react.transitional.element"),m=Symbol.for("react.fragment");function h(d,T,R){var M=null;if(R!==void 0&&(M=""+R),T.key!==void 0&&(M=""+T.key),"key"in T){R={};for(var D in T)D!=="key"&&(R[D]=T[D])}else R=T;return T=R.ref,{$$typeof:o,type:d,key:M,ref:T!==void 0?T:null,props:R}}return Sl.Fragment=m,Sl.jsx=h,Sl.jsxs=h,Sl}var pg;function sx(){return pg||(pg=1,Yu.exports=lx()),Yu.exports}var r=sx(),Iu={exports:{}},Tl={},Vu={exports:{}},Ku={};var bg;function ox(){return bg||(bg=1,(function(o){function m(I,un){var W=I.length;I.push(un);n:for(;0<W;){var Mn=W-1>>>1,jn=I[Mn];if(0<T(jn,un))I[Mn]=un,I[W]=jn,W=Mn;else break n}}function h(I){return I.length===0?null:I[0]}function d(I){if(I.length===0)return null;var un=I[0],W=I.pop();if(W!==un){I[0]=W;n:for(var Mn=0,jn=I.length,ce=jn>>>1;Mn<ce;){var ve=2*(Mn+1)-1,dt=I[ve],y=ve+1,B=I[y];if(0>T(dt,W))y<jn&&0>T(B,dt)?(I[Mn]=B,I[y]=W,Mn=y):(I[Mn]=dt,I[ve]=W,Mn=ve);else if(y<jn&&0>T(B,W))I[Mn]=B,I[y]=W,Mn=y;else break n}}return un}function T(I,un){var W=I.sortIndex-un.sortIndex;return W!==0?W:I.id-un.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var R=performance;o.unstable_now=function(){return R.now()}}else{var M=Date,D=M.now();o.unstable_now=function(){return M.now()-D}}var q=[],Y=[],z=1,v=null,E=3,V=!1,G=!1,Z=!1,tn=!1,Sn=typeof setTimeout=="function"?setTimeout:null,gn=typeof clearTimeout=="function"?clearTimeout:null,mn=typeof setImmediate<"u"?setImmediate:null;function On(I){for(var un=h(Y);un!==null;){if(un.callback===null)d(Y);else if(un.startTime<=I)d(Y),un.sortIndex=un.expirationTime,m(q,un);else break;un=h(Y)}}function Xn(I){if(Z=!1,On(I),!G)if(h(q)!==null)G=!0,vn||(vn=!0,be());else{var un=h(Y);un!==null&&ue(Xn,un.startTime-I)}}var vn=!1,P=-1,pn=5,re=-1;function fe(){return tn?!0:!(o.unstable_now()-re<pn)}function oe(){if(tn=!1,vn){var I=o.unstable_now();re=I;var un=!0;try{n:{G=!1,Z&&(Z=!1,gn(P),P=-1),V=!0;var W=E;try{e:{for(On(I),v=h(q);v!==null&&!(v.expirationTime>I&&fe());){var Mn=v.callback;if(typeof Mn=="function"){v.callback=null,E=v.priorityLevel;var jn=Mn(v.expirationTime<=I);if(I=o.unstable_now(),typeof jn=="function"){v.callback=jn,On(I),un=!0;break e}v===h(q)&&d(q),On(I)}else d(q);v=h(q)}if(v!==null)un=!0;else{var ce=h(Y);ce!==null&&ue(Xn,ce.startTime-I),un=!1}}break n}finally{v=null,E=W,V=!1}un=void 0}}finally{un?be():vn=!1}}}var be;if(typeof mn=="function")be=function(){mn(oe)};else if(typeof MessageChannel<"u"){var Qe=new MessageChannel,Ae=Qe.port2;Qe.port1.onmessage=oe,be=function(){Ae.postMessage(null)}}else be=function(){Sn(oe,0)};function ue(I,un){P=Sn(function(){I(o.unstable_now())},un)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(I){I.callback=null},o.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):pn=0<I?Math.floor(1e3/I):5},o.unstable_getCurrentPriorityLevel=function(){return E},o.unstable_next=function(I){switch(E){case 1:case 2:case 3:var un=3;break;default:un=E}var W=E;E=un;try{return I()}finally{E=W}},o.unstable_requestPaint=function(){tn=!0},o.unstable_runWithPriority=function(I,un){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var W=E;E=I;try{return un()}finally{E=W}},o.unstable_scheduleCallback=function(I,un,W){var Mn=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?Mn+W:Mn):W=Mn,I){case 1:var jn=-1;break;case 2:jn=250;break;case 5:jn=1073741823;break;case 4:jn=1e4;break;default:jn=5e3}return jn=W+jn,I={id:z++,callback:un,priorityLevel:I,startTime:W,expirationTime:jn,sortIndex:-1},W>Mn?(I.sortIndex=W,m(Y,I),h(q)===null&&I===h(Y)&&(Z?(gn(P),P=-1):Z=!0,ue(Xn,W-Mn))):(I.sortIndex=jn,m(q,I),G||V||(G=!0,vn||(vn=!0,be()))),I},o.unstable_shouldYield=fe,o.unstable_wrapCallback=function(I){var un=E;return function(){var W=E;E=un;try{return I.apply(this,arguments)}finally{E=W}}}})(Ku)),Ku}var vg;function cx(){return vg||(vg=1,Vu.exports=ox()),Vu.exports}var Qu={exports:{}},xn={};var yg;function ux(){if(yg)return xn;yg=1;var o=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),M=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),Y=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),E=Symbol.for("react.view_transition"),V=Symbol.iterator;function G(y){return y===null||typeof y!="object"?null:(y=V&&y[V]||y["@@iterator"],typeof y=="function"?y:null)}var Z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tn=Object.assign,Sn={};function gn(y,B,on){this.props=y,this.context=B,this.refs=Sn,this.updater=on||Z}gn.prototype.isReactComponent={},gn.prototype.setState=function(y,B){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,B,"setState")},gn.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function mn(){}mn.prototype=gn.prototype;function On(y,B,on){this.props=y,this.context=B,this.refs=Sn,this.updater=on||Z}var Xn=On.prototype=new mn;Xn.constructor=On,tn(Xn,gn.prototype),Xn.isPureReactComponent=!0;var vn=Array.isArray;function P(){}var pn={H:null,A:null,T:null,S:null},re=Object.prototype.hasOwnProperty;function fe(y,B,on){var $=on.ref;return{$$typeof:o,type:y,key:B,ref:$!==void 0?$:null,props:on}}function oe(y,B){return fe(y.type,B,y.props)}function be(y){return typeof y=="object"&&y!==null&&y.$$typeof===o}function Qe(y){var B={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(on){return B[on]})}var Ae=/\/+/g;function ue(y,B){return typeof y=="object"&&y!==null&&y.key!=null?Qe(""+y.key):B.toString(36)}function I(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(P,P):(y.status="pending",y.then(function(B){y.status==="pending"&&(y.status="fulfilled",y.value=B)},function(B){y.status==="pending"&&(y.status="rejected",y.reason=B)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function un(y,B,on,$,dn){var Rn=typeof y;(Rn==="undefined"||Rn==="boolean")&&(y=null);var An=!1;if(y===null)An=!0;else switch(Rn){case"bigint":case"string":case"number":An=!0;break;case"object":switch(y.$$typeof){case o:case m:An=!0;break;case z:return An=y._init,un(An(y._payload),B,on,$,dn)}}if(An)return dn=dn(y),An=$===""?"."+ue(y,0):$,vn(dn)?(on="",An!=null&&(on=An.replace(Ae,"$&/")+"/"),un(dn,B,on,"",function(et){return et})):dn!=null&&(be(dn)&&(dn=oe(dn,on+(dn.key==null||y&&y.key===dn.key?"":(""+dn.key).replace(Ae,"$&/")+"/")+An)),B.push(dn)),1;An=0;var an=$===""?".":$+":";if(vn(y))for(var fn=0;fn<y.length;fn++)$=y[fn],Rn=an+ue($,fn),An+=un($,B,on,Rn,dn);else if(fn=G(y),typeof fn=="function")for(y=fn.call(y),fn=0;!($=y.next()).done;)$=$.value,Rn=an+ue($,fn++),An+=un($,B,on,Rn,dn);else if(Rn==="object"){if(typeof y.then=="function")return un(I(y),B,on,$,dn);throw B=String(y),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return An}function W(y,B,on){if(y==null)return y;var $=[],dn=0;return un(y,$,"","",function(Rn){return B.call(on,Rn,dn++)}),$}function Mn(y){if(y._status===-1){var B=y._result,on=B();on.then(function($){(y._status===0||y._status===-1)&&(y._status=1,y._result=$,on.status===void 0&&(on.status="fulfilled",on.value=$))},function($){(y._status===0||y._status===-1)&&(y._status=2,y._result=$,on.status===void 0&&(on.status="rejected",on.reason=$))}),y._status===-1&&(y._status=0,y._result=on)}if(y._status===1)return y._result.default;throw y._result}var jn=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)};function ce(y){var B=pn.T,on={};on.types=B!==null?B.types:null,pn.T=on;try{var $=y(),dn=pn.S;dn!==null&&dn(on,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(P,jn)}catch(Rn){jn(Rn)}finally{B!==null&&on.types!==null&&(B.types=on.types),pn.T=B}}function ve(y){var B=pn.T;if(B!==null){var on=B.types;on===null?B.types=[y]:on.indexOf(y)===-1&&on.push(y)}else ce(ve.bind(null,y))}var dt={map:W,forEach:function(y,B,on){W(y,function(){B.apply(this,arguments)},on)},count:function(y){var B=0;return W(y,function(){B++}),B},toArray:function(y){return W(y,function(B){return B})||[]},only:function(y){if(!be(y))throw Error("React.Children.only expected to receive a single React element child.");return y}};return xn.Activity=v,xn.Children=dt,xn.Component=gn,xn.Fragment=h,xn.Profiler=T,xn.PureComponent=On,xn.StrictMode=d,xn.Suspense=q,xn.ViewTransition=E,xn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=pn,xn.__COMPILER_RUNTIME={__proto__:null,c:function(y){return pn.H.useMemoCache(y)}},xn.addTransitionType=ve,xn.cache=function(y){return function(){return y.apply(null,arguments)}},xn.cacheSignal=function(){return null},xn.cloneElement=function(y,B,on){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var $=tn({},y.props),dn=y.key;if(B!=null)for(Rn in B.key!==void 0&&(dn=""+B.key),B)!re.call(B,Rn)||Rn==="key"||Rn==="__self"||Rn==="__source"||Rn==="ref"&&B.ref===void 0||($[Rn]=B[Rn]);var Rn=arguments.length-2;if(Rn===1)$.children=on;else if(1<Rn){for(var An=Array(Rn),an=0;an<Rn;an++)An[an]=arguments[an+2];$.children=An}return fe(y.type,dn,$)},xn.createContext=function(y){return y={$$typeof:M,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:R,_context:y},y},xn.createElement=function(y,B,on){var $,dn={},Rn=null;if(B!=null)for($ in B.key!==void 0&&(Rn=""+B.key),B)re.call(B,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(dn[$]=B[$]);var An=arguments.length-2;if(An===1)dn.children=on;else if(1<An){for(var an=Array(An),fn=0;fn<An;fn++)an[fn]=arguments[fn+2];dn.children=an}if(y&&y.defaultProps)for($ in An=y.defaultProps,An)dn[$]===void 0&&(dn[$]=An[$]);return fe(y,Rn,dn)},xn.createRef=function(){return{current:null}},xn.forwardRef=function(y){return{$$typeof:D,render:y}},xn.isValidElement=be,xn.lazy=function(y){return{$$typeof:z,_payload:{_status:-1,_result:y},_init:Mn}},xn.memo=function(y,B){return{$$typeof:Y,type:y,compare:B===void 0?null:B}},xn.startTransition=ce,xn.unstable_useCacheRefresh=function(){return pn.H.useCacheRefresh()},xn.use=function(y){return pn.H.use(y)},xn.useActionState=function(y,B,on){return pn.H.useActionState(y,B,on)},xn.useCallback=function(y,B){return pn.H.useCallback(y,B)},xn.useContext=function(y){return pn.H.useContext(y)},xn.useDebugValue=function(){},xn.useDeferredValue=function(y,B){return pn.H.useDeferredValue(y,B)},xn.useEffect=function(y,B){return pn.H.useEffect(y,B)},xn.useEffectEvent=function(y){return pn.H.useEffectEvent(y)},xn.useId=function(){return pn.H.useId()},xn.useImperativeHandle=function(y,B,on){return pn.H.useImperativeHandle(y,B,on)},xn.useInsertionEffect=function(y,B){return pn.H.useInsertionEffect(y,B)},xn.useLayoutEffect=function(y,B){return pn.H.useLayoutEffect(y,B)},xn.useMemo=function(y,B){return pn.H.useMemo(y,B)},xn.useOptimistic=function(y,B){return pn.H.useOptimistic(y,B)},xn.useReducer=function(y,B,on){return pn.H.useReducer(y,B,on)},xn.useRef=function(y){return pn.H.useRef(y)},xn.useState=function(y){return pn.H.useState(y)},xn.useSyncExternalStore=function(y,B,on){return pn.H.useSyncExternalStore(y,B,on)},xn.useTransition=function(){return pn.H.useTransition()},xn.version="19.3.1",xn}var xg;function sd(){return xg||(xg=1,Qu.exports=ux()),Qu.exports}var Xu={exports:{}},Ke={};var _g;function dx(){if(_g)return Ke;_g=1;var o=sd();function m(z){var v="https://react.dev/errors/"+z;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)v+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+z+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(){}var d={d:{f:h,r:function(){throw Error(m(522))},D:h,C:h,L:h,m:h,X:h,S:h,M:h},p:0,findDOMNode:null},T=Symbol.for("react.portal"),R=Symbol.for("react.recoverable"),M=Symbol.for("react.optimistic_key");function D(z,v,E){var V=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:T,key:V==null?null:V===M?M:""+V,children:z,containerInfo:v,implementation:E}}var q=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Y(z,v){if(z==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Ke.browser=function(z){return{$$typeof:R,_reason:z}},Ke.createPortal=function(z,v){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(m(299));return D(z,v,null,E)},Ke.flushSync=function(z){var v=q.T,E=d.p;try{if(q.T=null,d.p=2,z)return z()}finally{q.T=v,d.p=E,d.d.f()}},Ke.preconnect=function(z,v){typeof z=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,d.d.C(z,v))},Ke.prefetchDNS=function(z){typeof z=="string"&&d.d.D(z)},Ke.preinit=function(z,v){if(typeof z=="string"&&v&&typeof v.as=="string"){var E=v.as,V=Y(E,v.crossOrigin),G=typeof v.integrity=="string"?v.integrity:void 0,Z=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;E==="style"?d.d.S(z,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:V,integrity:G,fetchPriority:Z}):E==="script"&&d.d.X(z,{crossOrigin:V,integrity:G,fetchPriority:Z,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Ke.preinitModule=function(z,v){if(typeof z=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var E=Y(v.as,v.crossOrigin);d.d.M(z,{crossOrigin:E,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}}else v==null&&d.d.M(z)},Ke.preload=function(z,v){if(typeof z=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var E=v.as,V=Y(E,v.crossOrigin);d.d.L(z,E,{crossOrigin:V,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Ke.preloadModule=function(z,v){if(typeof z=="string")if(v){var E=Y(v.as,v.crossOrigin);d.d.m(z,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:E,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}else d.d.m(z)},Ke.requestFormReset=function(z){d.d.r(z)},Ke.unstable_batchedUpdates=function(z,v){return z(v)},Ke.useFormState=function(z,v,E){return q.H.useFormState(z,v,E)},Ke.useFormStatus=function(){return q.H.useHostTransitionStatus()},Ke.version="19.3.1",Ke}var Sg;function Kg(){if(Sg)return Xu.exports;Sg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(m){console.error(m)}}return o(),Xu.exports=dx(),Xu.exports}var Tg;function fx(){if(Tg)return Tl;Tg=1;var o=cx(),m=sd(),h=Kg();function d(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function T(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function R(n){for(var e=n,t=e;t&&!t.alternate;)e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;for(;e.return;)e=e.return;return e.tag===3?n:null}function M(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function D(n){if(n.tag===31){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function q(n){if(R(n)!==n)throw Error(d(188))}function Y(n){var e=n.alternate;if(!e){if(e=R(n),e===null)throw Error(d(188));return e!==n?null:n}for(var t=n,a=e;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(a=i.return,a!==null){t=a;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return q(i),n;if(l===a)return q(i),e;l=l.sibling}throw Error(d(188))}if(t.return!==a.return)t=i,a=l;else{for(var s=!1,c=i.child;c;){if(c===t){s=!0,t=i,a=l;break}if(c===a){s=!0,a=i,t=l;break}c=c.sibling}if(!s){for(c=l.child;c;){if(c===t){s=!0,t=l,a=i;break}if(c===a){s=!0,a=l,t=i;break}c=c.sibling}if(!s)throw Error(d(189))}}if(t.alternate!==a)throw Error(d(190))}if(t.tag!==3)throw Error(d(188));return t.stateNode.current===t?n:e}function z(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n;for(n=n.child;n!==null;){if(e=z(n),e!==null)return e;n=n.sibling}return null}function v(n,e,t,a,i,l){for(;n!==null;){if((n.tag===5||n.tag===27||n.tag===6)&&t(n,a,i,l)||(n.tag!==22||n.memoizedState===null)&&(e||n.tag!==5&&n.tag!==27)&&v(n.child,e,t,a,i,l))return!0;n=n.sibling}return!1}function E(n){for(n=n.return;n!==null;){if(n.tag===3||n.tag===5||n.tag===27)return n;n=n.return}return null}function V(n){var e=!1;for(n=n.return;n!==null&&(n.tag===4&&(e=!0),!(n.tag===3||n.tag===5||n.tag===27));)n=n.return;return e}function G(n){var e=[null,null],t=E(n);return t===null||Z(e,n,t.child,{foundSelf:!1}),e}function Z(n,e,t,a){for(;t!==null;){if(t===e)a.foundSelf=!0;else if(t.tag===5||t.tag===27||t.tag===6){if(a.foundSelf)return n[1]=t,!0;n[0]=t}else if((t.tag!==22||t.memoizedState===null)&&Z(n,e,t.child,a))return!0;t=t.sibling}return!1}function tn(n){switch(n.tag){case 5:case 27:case 6:return n.stateNode;case 3:return n.stateNode.containerInfo;default:throw Error(d(559))}}var Sn=null,gn=null;function mn(n,e,t){return n===t?!0:n===e?(Sn=n,!0):!1}function On(n,e,t){return n===t?(gn=n,!1):n===e?(gn!==null&&(Sn=n),!0):!1}function Xn(n){if(n===null)return null;do n=n===null?null:n.return;while(n&&n.tag!==5&&n.tag!==27&&n.tag!==3);return n||null}function vn(n,e,t){for(var a=0,i=n;i;i=t(i))a++;i=0;for(var l=e;l;l=t(l))i++;for(;0<a-i;)n=t(n),a--;for(;0<i-a;)e=t(e),i--;for(;a--;){if(n===e||e!==null&&n===e.alternate)return n;n=t(n),e=t(e)}return null}var P=Object.assign,pn=Symbol.for("react.element"),re=Symbol.for("react.transitional.element"),fe=Symbol.for("react.portal"),oe=Symbol.for("react.fragment"),be=Symbol.for("react.strict_mode"),Qe=Symbol.for("react.profiler"),Ae=Symbol.for("react.consumer"),ue=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),un=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),Mn=Symbol.for("react.memo"),jn=Symbol.for("react.lazy"),ce=Symbol.for("react.activity"),ve=Symbol.for("react.legacy_hidden"),dt=Symbol.for("react.memo_cache_sentinel"),y=Symbol.for("react.view_transition"),B=Symbol.for("react.recoverable"),on=Symbol.iterator;function $(n){return n===null||typeof n!="object"?null:(n=on&&n[on]||n["@@iterator"],typeof n=="function"?n:null)}var dn=Symbol.for("react.client.reference");function Rn(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===dn?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case oe:return"Fragment";case Qe:return"Profiler";case be:return"StrictMode";case un:return"Suspense";case W:return"SuspenseList";case ce:return"Activity";case y:return"ViewTransition"}if(typeof n=="object")switch(n.$$typeof){case fe:return"Portal";case ue:return n.displayName||"Context";case Ae:return(n._context.displayName||"Context")+".Consumer";case I:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Mn:return e=n.displayName||null,e!==null?e:Rn(n.type)||"Memo";case jn:e=n._payload,n=n._init;try{return Rn(n(e))}catch{}}return null}var An=Array.isArray,an=m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fn=h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et={pending:!1,data:null,method:null,action:null},ti=[],Sa=-1;function xt(n){return{current:n}}function ke(n){0>Sa||(n.current=ti[Sa],ti[Sa]=null,Sa--)}function ne(n,e){Sa++,ti[Sa]=n.current,n.current=e}var _t=xt(null),Ta=xt(null),Gt=xt(null),Oi=xt(null);function ai(n,e){switch(ne(Gt,e),ne(Ta,n),ne(_t,null),e.nodeType){case 9:case 11:n=(n=e.documentElement)&&(n=n.namespaceURI)?jm(n):0;break;default:if(n=e.tagName,e=e.namespaceURI)e=jm(e),n=wm(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ke(_t),ne(_t,n)}function tt(){ke(_t),ke(Ta),ke(Gt)}function Ai(n){var e=n.memoizedState;e!==null&&(pr._currentValue=e.memoizedState,ne(Oi,n)),e=_t.current;var t=wm(e,n.type);e!==t&&(ne(Ta,n),ne(_t,t))}function Ct(n){Ta.current===n&&(ke(_t),ke(Ta)),Oi.current===n&&(ke(Oi),pr._currentValue=et)}var ja,Tr;function Yt(n){if(ja===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);ja=e&&e[1]||"",Tr=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ja+n+Tr}var jr=!1;function wr(n,e){if(!n||jr)return"";jr=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(Q){var x=Q}Reflect.construct(n,[],C)}else{try{C.call()}catch(Q){x=Q}C=!1;try{var N=Object.getOwnPropertyDescriptor(n.prototype,"props");Object.defineProperty(n.prototype,"props",{configurable:!0,set:function(){throw Error()}}),C=!0,new n}finally{C&&(N!==void 0?Object.defineProperty(n.prototype,"props",N):delete n.prototype.props)}}}else{try{throw Error()}catch(Q){x=Q}(C=n())&&typeof C.catch=="function"&&C.catch(function(){})}}catch(Q){if(Q&&x&&typeof Q.stack=="string")return[Q.stack,x.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=a.DetermineComponentFrameRoot(),s=l[0],c=l[1];if(s&&c){var f=s.split(`
`),S=c.split(`
`);for(i=a=0;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;for(;i<S.length&&!S[i].includes("DetermineComponentFrameRoot");)i++;if(a===f.length||i===S.length)for(a=f.length-1,i=S.length-1;1<=a&&0<=i&&f[a]!==S[i];)i--;for(;1<=a&&0<=i;a--,i--)if(f[a]!==S[i]){if(a!==1||i!==1)do if(a--,i--,0>i||f[a]!==S[i]){var O=`
`+f[a].replace(" at new "," at ");return n.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",n.displayName)),O}while(1<=a&&0<=i);break}}}finally{jr=!1,Error.prepareStackTrace=t}return(t=n?n.displayName||n.name:"")?Yt(t):""}function bo(n,e){switch(n.tag){case 26:case 27:case 5:return Yt(n.type);case 16:return Yt("Lazy");case 13:return n.child!==e&&e!==null?Yt("Suspense Fallback"):Yt("Suspense");case 19:return Yt("SuspenseList");case 0:case 15:return wr(n.type,!1);case 11:return wr(n.type.render,!1);case 1:return wr(n.type,!0);case 31:return Yt("Activity");case 30:return Yt("ViewTransition");default:return""}}function Al(n){try{var e="",t=null;do e+=bo(n,t),t=n,n=n.return;while(n);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var ki=Object.prototype.hasOwnProperty,Nr=o.unstable_scheduleCallback,Er=o.unstable_cancelCallback,vo=o.unstable_shouldYield,Or=o.unstable_requestPaint,Xe=o.unstable_now,kl=o.unstable_getCurrentPriorityLevel,Ml=o.unstable_ImmediatePriority,Ar=o.unstable_UserBlockingPriority,Rt=o.unstable_NormalPriority,g=o.unstable_LowPriority,L=o.unstable_IdlePriority,X=o.log,yn=o.unstable_setDisableYieldValue,ae=null,Un=null;function nn(n){if(typeof X=="function"&&yn(n),Un&&typeof Un.setStrictMode=="function")try{Un.setStrictMode(ae,n)}catch{}}var K=Math.clz32?Math.clz32:me,bn=Math.log,Se=Math.LN2;function me(n){return n>>>=0,n===0?32:31-(bn(n)/Se|0)|0}var It=256,wa=262144,Na=4194304;function ta(n){var e=n&42;if(e!==0)return e;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&-n;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Ea(n,e,t){var a=n.pendingLanes;if(a===0)return 0;var i=0,l=n.suspendedLanes,s=n.pingedLanes;n=n.warmLanes;var c=a&134217727;return c!==0?(a=c&~l,a!==0?i=ta(a):(s&=c,s!==0?i=ta(s):t||(t=c&~n,t!==0&&(i=ta(t))))):(c=a&~l,c!==0?i=ta(c):s!==0?i=ta(s):t||(t=a&~n,t!==0&&(i=ta(t)))),i===0?0:e!==0&&e!==i&&(e&l)===0&&(l=i&-i,t=e&-e,l>=t||l===32&&(t&4194048)!==0)?e:i}function ii(n,e){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&e)===0}function Cl(n,e){(e&8)!==0&&(e|=e&32);var t=n.entangledLanes;if(t!==0)for(n=n.entanglements,t&=e;0<t;){var a=31-K(t),i=1<<a;e|=n[a],t&=~i}return e}function yo(n,e){switch(n){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kr(){var n=Na;return Na<<=1,(Na&62914560)===0&&(Na=4194304),n}function Oa(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ri(n,e){n.pendingLanes|=e,e!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function xo(n,e,t,a,i,l){var s=n.pendingLanes;n.pendingLanes=t,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=t,n.entangledLanes&=t,n.errorRecoveryDisabledLanes&=t,n.shellSuspendCounter=0;var c=n.entanglements,f=n.expirationTimes,S=n.hiddenUpdates;for(t=s&~t;0<t;){var O=31-K(t),C=1<<O;c[O]=0,f[O]=-1;var x=S[O];if(x!==null)for(S[O]=null,O=0;O<x.length;O++){var N=x[O];N!==null&&(N.lane&=-536870913)}t&=~C}a!==0&&Rl(n,a,0),l!==0&&i===0&&n.tag!==0&&(n.suspendedLanes|=l&~(s&~e))}function Rl(n,e,t){n.pendingLanes|=e,n.suspendedLanes&=~e;var a=31-K(e);n.entangledLanes|=e,n.entanglements[a]=n.entanglements[a]|1073741824|t&261930}function Lt(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var a=31-K(t),i=1<<a;i&e|n[a]&e&&(n[a]|=e),t&=~i}}function Mr(n,e){var t=e&-e;return t=(t&42)!==0?1:Mi(t),(t&(n.suspendedLanes|e))!==0?0:t}function Mi(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Cr(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Ll(){var n=fn.p;return n!==0?n:(n=window.event,n===void 0?32:og(n.type))}function Dl(n,e){var t=fn.p;try{return fn.p=n,e()}finally{fn.p=t}}var at=Math.random().toString(36).slice(2),Me="__reactFiber$"+at,U="__reactProps$"+at,ln="__reactContainer$"+at,Cn="__reactEvents$"+at,ee="__reactListeners$"+at,ye="__reactHandles$"+at,it="__reactResources$"+at,rt="__reactMarker$"+at,aa="__reactLoad$"+at;function Re(n){delete n[Me],delete n[U],delete n[ee],delete n[ye]}function Le(n){var e;if(e=n[Me])return e;for(var t=n.parentNode;t;){if(e=t[ln]||t[Me]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Ym(n);n!==null;){if(t=n[Me])return t;n=Ym(n)}return e}n=t,t=n.parentNode}return null}function ia(n){if(n=n[Me]||n[ln]){var e=n.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return n}return null}function Aa(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n.stateNode;throw Error(d(33))}function ra(n){var e=n[it];return e||(e=n[it]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Te(n){n[rt]=!0}function zl(n){n[aa]=void 0}var Bl=new Set,Ul={};function St(n,e){la(n,e),la(n+"Capture",e)}function la(n,e){for(Ul[n]=e,n=0;n<e.length;n++)Bl.add(e[n])}var Tt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hl={},Ci={};function Tn(n){return ki.call(Ci,n)?!0:ki.call(Hl,n)?!1:Tt.test(n)?Ci[n]=!0:(Hl[n]=!0,!1)}var Hn=!1;function je(){var n=Hn;return Hn=!1,n}function Yn(n,e,t){if(Tn(e))if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":n.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){n.removeAttribute(e);return}}n.setAttribute(e,t)}}function sa(n,e,t){if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttribute(e,t)}}function Ue(n,e,t,a){if(a===null)n.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttributeNS(e,t,a)}}function He(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ri(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function J(n,e,t){var a=Object.getOwnPropertyDescriptor(n.constructor.prototype,e);if(!n.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,l=a.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){t=""+s,l.call(this,s)}}),Object.defineProperty(n,e,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(s){t=""+s},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function sn(n){if(!n._valueTracker){var e=Ri(n)?"checked":"value";n._valueTracker=J(n,e,""+n[e])}}function wn(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),a="";return n&&(a=Ri(n)?n.checked?"true":"false":n.value),n=a,n!==t?(e.setValue(n),!0):!1}var In=/[\n"\\]/g;function Pn(n){return n.replace(In,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ft(n,e,t,a,i,l,s,c){n.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?n.type=s:n.removeAttribute("type"),e!=null?s==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+He(e)):n.value!==""+He(e)&&(n.value=""+He(e)):s!=="submit"&&s!=="reset"||n.removeAttribute("value"),e!=null?s==="number"&&n.value==e?Rr(n,He(n.value)):Rr(n,He(e)):t!=null?Rr(n,He(t)):a!=null&&n.removeAttribute("value"),i==null&&l!=null&&(n.defaultChecked=!!l),i!=null&&(n.checked=i&&typeof i!="function"&&typeof i!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?n.name=""+He(c):n.removeAttribute("name")}function ql(n,e,t,a,i,l,s,c){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(n.type=l),e!=null||t!=null){if(!(l!=="submit"&&l!=="reset"||e!=null)){sn(n);return}t=t!=null?""+He(t):"",e=e!=null?""+He(e):t,c||e===n.value||(n.value=e),n.defaultValue=e}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,n.checked=c?n.checked:!!a,n.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(n.name=s),sn(n)}function Rr(n,e){n.defaultValue!==""+e&&(n.defaultValue=""+e)}function Li(n,e,t,a){if(n=n.options,e){e={};for(var i=0;i<t.length;i++)e["$"+t[i]]=!0;for(t=0;t<n.length;t++)i=e.hasOwnProperty("$"+n[t].value),n[t].selected!==i&&(n[t].selected=i),i&&a&&(n[t].defaultSelected=!0)}else{for(t=""+He(t),e=null,i=0;i<n.length;i++){if(n[i].value===t){n[i].selected=!0,a&&(n[i].defaultSelected=!0);return}e!==null||n[i].disabled||(e=n[i])}e!==null&&(e.selected=!0)}}function hd(n,e,t){if(e!=null&&(e=""+He(e),e!==n.value&&(n.value=e),t==null)){n.defaultValue!==e&&(n.defaultValue=e);return}n.defaultValue=t!=null?""+He(t):""}function md(n,e,t,a){if(e==null){if(a!=null){if(t!=null)throw Error(d(92));if(An(a)){if(1<a.length)throw Error(d(93));a=a[0]}t=a}t==null&&(t=""),e=t}t=He(e),n.defaultValue=t,a=n.textContent,a===t&&a!==""&&a!==null&&(n.value=a),sn(n)}function Di(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var O1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gd(n,e,t){var a=e.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?n.setProperty(e,""):e==="float"?n.cssFloat="":n[e]="":a?n.setProperty(e,t):typeof t!="number"||t===0||O1.has(e)?e==="float"?n.cssFloat=t:n[e]=(""+t).trim():n[e]=t+"px"}function pd(n,e,t){if(e!=null&&typeof e!="object")throw Error(d(62));if(n=n.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="",Hn=!0);for(var i in e)a=e[i],e.hasOwnProperty(i)&&t[i]!==a&&(gd(n,i,a),Hn=!0)}else for(var l in e)e.hasOwnProperty(l)&&gd(n,l,e[l])}function _o(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var A1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),k1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Gl(n){return k1.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function Vt(){}var So=null;function To(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var zi=null,Bi=null;function bd(n){var e=ia(n);if(e&&(n=e.stateNode)){var t=n[U]||null;n:switch(n=e.stateNode,e.type){case"input":if(ft(n,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Pn(""+e)+'"][type="radio"]'),e=0;e<t.length;e++){var a=t[e];if(a!==n&&a.form===n.form){var i=a[U]||null;if(!i)throw Error(d(90));ft(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<t.length;e++)a=t[e],a.form===n.form&&wn(a)}break n;case"textarea":hd(n,t.value,t.defaultValue);break n;case"select":e=t.value,e!=null&&Li(n,!!t.multiple,e,!1)}}}var jo=!1;function vd(n,e,t){if(jo)return n(e,t);jo=!0;try{var a=n(e);return a}finally{if(jo=!1,(zi!==null||Bi!==null)&&(Gs(),zi&&(e=zi,n=Bi,Bi=zi=null,bd(e),n)))for(e=0;e<n.length;e++)bd(n[e])}}function Lr(n,e){var t=n.stateNode;if(t===null)return null;var a=t[U]||null;if(a===null)return null;t=a[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(n=n.type,a=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!a;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(d(231,e,typeof t));return t}var oa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wo=!1;if(oa)try{var Dr={};Object.defineProperty(Dr,"passive",{get:function(){wo=!0}}),window.addEventListener("test",Dr,Dr),window.removeEventListener("test",Dr,Dr)}catch{wo=!1}var ka=null,No=null,Yl=null;function yd(){if(Yl)return Yl;var n,e=No,t=e.length,a,i="value"in ka?ka.value:ka.textContent,l=i.length;for(n=0;n<t&&e[n]===i[n];n++);var s=t-n;for(a=1;a<=s&&e[t-a]===i[l-a];a++);return Yl=i.slice(n,1<a?1-a:void 0)}function Il(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Vl(){return!0}function xd(){return!1}function Ze(n){function e(t,a,i,l,s){this._reactName=t,this._targetInst=i,this.type=a,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var c in n)n.hasOwnProperty(c)&&(t=n[c],this[c]=t?t(l):l[c]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Vl:xd,this.isPropagationStopped=xd,this}return P(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Vl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Vl)},persist:function(){},isPersistent:Vl}),e}var Ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kl=Ze(Ma),zr=P({},Ma,{view:0,detail:0}),M1=Ze(zr),Eo,Oo,Br,Ql=P({},zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ko,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Br&&(Br&&n.type==="mousemove"?(Eo=n.screenX-Br.screenX,Oo=n.screenY-Br.screenY):Oo=Eo=0,Br=n),Eo)},movementY:function(n){return"movementY"in n?n.movementY:Oo}}),_d=Ze(Ql),C1=P({},Ql,{dataTransfer:0}),R1=Ze(C1),L1=P({},zr,{relatedTarget:0}),Ao=Ze(L1),D1=P({},Ma,{animationName:0,elapsedTime:0,pseudoElement:0}),z1=Ze(D1),B1=P({},Ma,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),U1=Ze(B1),H1=P({},Ma,{data:0}),Sd=Ze(H1),q1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},G1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function I1(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Y1[n])?!!e[n]:!1}function ko(){return I1}var V1=P({},zr,{key:function(n){if(n.key){var e=q1[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Il(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?G1[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ko,charCode:function(n){return n.type==="keypress"?Il(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Il(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),K1=Ze(V1),Q1=P({},Ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=Ze(Q1),X1=P({},Ma,{submitter:0}),J1=Ze(X1),Z1=P({},zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ko}),P1=Ze(Z1),F1=P({},Ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),W1=Ze(F1),$1=P({},Ql,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),n0=Ze($1),e0=P({},Ma,{newState:0,oldState:0,source:0}),t0=Ze(e0),a0=[9,13,27,32],Mo=oa&&"CompositionEvent"in window,Ur=null;oa&&"documentMode"in document&&(Ur=document.documentMode);var i0=oa&&"TextEvent"in window&&!Ur,jd=oa&&(!Mo||Ur&&8<Ur&&11>=Ur),wd=" ",Nd=!1;function Ed(n,e){switch(n){case"keyup":return a0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Od(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ui=!1;function r0(n,e){switch(n){case"compositionend":return Od(e);case"keypress":return e.which!==32?null:(Nd=!0,wd);case"textInput":return n=e.data,n===wd&&Nd?null:n;default:return null}}function l0(n,e){if(Ui)return n==="compositionend"||!Mo&&Ed(n,e)?(n=yd(),Yl=No=ka=null,Ui=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return jd&&e.locale!=="ko"?null:e.data;default:return null}}var s0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ad(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!s0[n.type]:e==="textarea"}function kd(n,e,t,a){zi?Bi?Bi.push(a):Bi=[a]:zi=a,e=Xs(e,"onChange"),0<e.length&&(t=new Kl("onChange","change",null,t,a),n.push({event:t,listeners:e}))}var Hr=null,qr=null;function o0(n){vm(n,0)}function Xl(n){var e=Aa(n);if(wn(e))return n}function Md(n,e){if(n==="change")return e}var Cd=!1;if(oa){var Co;if(oa){var Ro="oninput"in document;if(!Ro){var Rd=document.createElement("div");Rd.setAttribute("oninput","return;"),Ro=typeof Rd.oninput=="function"}Co=Ro}else Co=!1;Cd=Co&&(!document.documentMode||9<document.documentMode)}function Ld(){Hr&&(Hr.detachEvent("onpropertychange",Dd),qr=Hr=null)}function Dd(n){if(n.propertyName==="value"&&Xl(qr)){var e=[];kd(e,qr,n,To(n)),vd(o0,e)}}function c0(n,e,t){n==="focusin"?(Ld(),Hr=e,qr=t,Hr.attachEvent("onpropertychange",Dd)):n==="focusout"&&Ld()}function u0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Xl(qr)}function d0(n,e){if(n==="click")return Xl(e)}function f0(n,e){if(n==="input"||n==="change")return Xl(e)}function h0(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ht=typeof Object.is=="function"?Object.is:h0;function Gr(n,e){if(ht(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),a=Object.keys(e);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var i=t[a];if(!ki.call(e,i)||!ht(n[i],e[i]))return!1}return!0}function Lo(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function zd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Bd(n,e){var t=zd(n);n=0;for(var a;t;){if(t.nodeType===3){if(a=n+t.textContent.length,n<=e&&a>=e)return{node:t,offset:e-n};n=a}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=zd(t)}}function Ud(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Ud(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Hd(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var e=Lo(n.document);e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Lo(n.document)}return e}function Do(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}var m0=oa&&"documentMode"in document&&11>=document.documentMode,Hi=null,zo=null,Yr=null,Bo=!1;function qd(n,e,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Bo||Hi==null||Hi!==Lo(a)||(a=Hi,"selectionStart"in a&&Do(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Yr&&Gr(Yr,a)||(Yr=a,a=Xs(zo,"onSelect"),0<a.length&&(e=new Kl("onSelect","select",null,e,t),n.push({event:e,listeners:a}),e.target=Hi)))}function li(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var qi={animationend:li("Animation","AnimationEnd"),animationiteration:li("Animation","AnimationIteration"),animationstart:li("Animation","AnimationStart"),transitionrun:li("Transition","TransitionRun"),transitionstart:li("Transition","TransitionStart"),transitioncancel:li("Transition","TransitionCancel"),transitionend:li("Transition","TransitionEnd")},Uo={},Gd={};oa&&(Gd=document.createElement("div").style,"AnimationEvent"in window||(delete qi.animationend.animation,delete qi.animationiteration.animation,delete qi.animationstart.animation),"TransitionEvent"in window||delete qi.transitionend.transition);function si(n){if(Uo[n])return Uo[n];if(!qi[n])return n;var e=qi[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Gd)return Uo[n]=e[t];return n}var Yd=si("animationend"),Id=si("animationiteration"),Vd=si("animationstart"),g0=si("transitionrun"),p0=si("transitionstart"),b0=si("transitioncancel"),Kd=si("transitionend"),Qd=new Map,Ho="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ho.push("scrollEnd");function Dt(n,e){Qd.set(n,e),St(e,[n])}var v0=0;function ca(n,e){if(n.name!=null&&n.name!=="auto")return n.name;if(e.autoName!==null)return e.autoName;n=Ht.identifierPrefix;var t=v0++;return n="_"+n+"t_"+t.toString(32)+"_",e.autoName=n}function Xd(n){if(n==null||typeof n=="string")return n;var e=null,t=lr;if(t!==null)for(var a=0;a<t.length;a++){var i=n[t[a]];if(i!=null){if(i==="none")return"none";e=e==null?i:e+(" "+i)}}return e??n.default}function ua(n,e){return n=Xd(n),e=Xd(e),e==null?n==="auto"?null:n:e==="auto"?null:e}var Jl=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},jt=[],Gi=0,qo=0;function Zl(){for(var n=Gi,e=qo=Gi=0;e<n;){var t=jt[e];jt[e++]=null;var a=jt[e];jt[e++]=null;var i=jt[e];jt[e++]=null;var l=jt[e];if(jt[e++]=null,a!==null&&i!==null){var s=a.pending;s===null?i.next=i:(i.next=s.next,s.next=i),a.pending=i}l!==0&&Jd(t,i,l)}}function Pl(n,e,t,a){jt[Gi++]=n,jt[Gi++]=e,jt[Gi++]=t,jt[Gi++]=a,qo|=a,n.lanes|=a,n=n.alternate,n!==null&&(n.lanes|=a)}function Go(n,e,t,a){return Pl(n,e,t,a),Fl(n)}function oi(n,e){return Pl(n,null,null,e),Fl(n)}function Jd(n,e,t){n.lanes|=t;var a=n.alternate;a!==null&&(a.lanes|=t);for(var i=!1,l=n.return;l!==null;)l.childLanes|=t,a=l.alternate,a!==null&&(a.childLanes|=t),l.tag===22&&(n=l.stateNode,n===null||n._visibility&1||(i=!0)),n=l,l=l.return;return n.tag===3?(l=n.stateNode,i&&e!==null&&(i=31-K(t),n=l.hiddenUpdates,a=n[i],a===null?n[i]=[e]:a.push(e),e.lane=t|536870912),l):null}function Fl(n){if(50<ul)throw ul=0,qs=null,Error(d(185));for(var e=n.return;e!==null;)n=e,e=n.return;return n.tag===3?n.stateNode:null}var Yi={};function y0(n,e,t,a){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(n,e,t,a){return new y0(n,e,t,a)}function Yo(n){return n=n.prototype,!(!n||!n.isReactComponent)}function da(n,e){var t=n.alternate;return t===null?(t=lt(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&1206910976,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t.refCleanup=n.refCleanup,t}function Zd(n,e){n.flags&=1206910978;var t=n.alternate;return t===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,n.type=t.type,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n}function Wl(n,e,t,a,i,l){var s=0;if(a=n,typeof a=="function")Yo(a)&&(s=1);else if(typeof a=="string")s=Xy(n,t,_t.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(a){case ce:return n=lt(31,t,e,i),n.elementType=ce,n.lanes=l,n;case oe:return ci(t.children,i,l,e);case be:s=8,i|=24;break;case Qe:return n=lt(12,t,e,i|2),n.elementType=Qe,n.lanes=l,n;case un:return n=lt(13,t,e,i),n.elementType=un,n.lanes=l,n;case W:return n=lt(19,t,e,i),n.elementType=W,n.lanes=l,n;case ve:case y:return n=i|32,n=lt(30,t,e,n),n.elementType=y,n.lanes=l,n.stateNode={autoName:null,paired:null,clones:null,ref:null},n;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case ue:s=10;break n;case Ae:s=9;break n;case I:s=11;break n;case Mn:s=14;break n;case jn:s=16,a=null;break n}s=29,t=Error(d(130,n===null?"null":typeof n,"")),a=null}return e=lt(s,t,e,i),e.elementType=n,e.type=a,e.lanes=l,e}function ci(n,e,t,a){return n=lt(7,n,a,e),n.lanes=t,n}function Io(n,e,t){return n=lt(6,n,null,e),n.lanes=t,n}function Pd(n){var e=lt(18,null,null,0);return e.stateNode=n,e}function Vo(n,e,t){return e=lt(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}var Fd=new WeakMap;function wt(n,e){if(typeof n=="object"&&n!==null){var t=Fd.get(n);return t!==void 0?t:(e={value:n,source:e,stack:Al(e)},Fd.set(n,e),e)}return{value:n,source:e,stack:Al(e)}}var Ii=[],Vi=0,$l=null,Ir=0,Nt=[],Et=0,Ca=null,Kt=1,Qt="";function fa(n,e){Ii[Vi++]=Ir,Ii[Vi++]=$l,$l=n,Ir=e}function Wd(n,e,t){Nt[Et++]=Kt,Nt[Et++]=Qt,Nt[Et++]=Ca,Ca=n;var a=Kt;n=Qt;var i=32-K(a)-1;a&=~(1<<i),t+=1;var l=32-K(e)+i;if(30<l){var s=i-i%5;l=(a&(1<<s)-1).toString(32),a>>=s,i-=s,Kt=1<<32-K(e)+i|t<<i|a,Qt=l+n}else Kt=1<<l|t<<i|a,Qt=n}function ns(n){n.return!==null&&(fa(n,1),Wd(n,1,0))}function Ko(n){for(;n===$l;)$l=Ii[--Vi],Ii[Vi]=null,Ir=Ii[--Vi],Ii[Vi]=null;for(;n===Ca;)Ca=Nt[--Et],Nt[Et]=null,Qt=Nt[--Et],Nt[Et]=null,Kt=Nt[--Et],Nt[Et]=null}function $d(n,e){Nt[Et++]=Kt,Nt[Et++]=Qt,Nt[Et++]=Ca,Kt=e.id,Qt=e.overflow,Ca=n}var De=null,le=null,kn=!1,Ra=null,Ot=!1,Qo=Error(d(519));function La(n){var e=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Vr(wt(e,n)),Qo}function nf(n){var e=n.stateNode,t=n.type,a=n.memoizedProps;switch(e[Me]=n,e[U]=a,t){case"dialog":Dn("cancel",e),Dn("close",e);break;case"iframe":case"object":case"embed":Dn("load",e);break;case"video":case"audio":for(t=0;t<fl.length;t++)Dn(fl[t],e);break;case"source":Dn("error",e);break;case"img":case"image":case"link":Dn("error",e),Dn("load",e);break;case"details":Dn("toggle",e);break;case"input":Dn("invalid",e),ql(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Dn("invalid",e);break;case"textarea":Dn("invalid",e),md(e,a.value,a.defaultValue,a.children)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||e.textContent===""+t||a.suppressHydrationWarning===!0||Sm(e.textContent,t)?(a.popover!=null&&(Dn("beforetoggle",e),Dn("toggle",e)),a.onScroll!=null&&Dn("scroll",e),a.onScrollEnd!=null&&Dn("scrollend",e),a.onClick!=null&&(e.onclick=Vt),e=!0):e=!1,e||La(n,!0)}function es(n){for(De=n.return;De;)switch(De.tag){case 5:case 31:case 13:Ot=!1;return;case 27:case 3:Ot=!0;return;default:De=De.return}}function Ki(n){if(n!==De)return!1;if(!kn)return es(n),kn=!0,!1;var e=n.tag,t;if((t=e!==3&&e!==27)&&((t=e===5)&&(t=n.type,t=!(t!=="form"&&t!=="button")||Su(n.type,n.memoizedProps)),t=!t),t&&le&&La(n),es(n),e===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));le=Gm(n)}else if(e===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));le=Gm(n)}else e===27?(e=le,Pa(n.type)?(n=Mu,Mu=null,le=n):le=e):le=De?kt(n.stateNode.nextSibling):null;return!0}function ui(){le=De=null,kn=!1}function Xo(){var n=Ra;return n!==null&&(ct===null?ct=n:ct.push.apply(ct,n),Ra=null),n}function Vr(n){Ra===null?Ra=[n]:Ra.push(n)}var Jo=xt(null),di=null,ha=null;function Da(n,e,t){ne(Jo,e._currentValue),e._currentValue=t}function ma(n){n._currentValue=Jo.current,ke(Jo)}function ts(n,e,t){for(;n!==null;){var a=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),n===t)break;n=n.return}}function Zo(n,e,t,a){var i=n.child;for(i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){var s=i.child;l=l.firstContext;n:for(;l!==null;){var c=l;l=i;for(var f=0;f<e.length;f++)if(c.context===e[f]){l.lanes|=t,c=l.alternate,c!==null&&(c.lanes|=t),ts(l.return,t,n),a||(s=null);break n}l=c.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(d(341));s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),ts(s,t,n),s=null}else i.tag===13&&i.memoizedState!==null&&i.memoizedState.dehydrated===null?(i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),ts(i.return,t,n),s=i.child,s=s!==null?s.sibling:null):s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===n){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function fi(n,e,t,a){n=null;for(var i=e,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(d(387));if(s=s.memoizedProps,s!==null){var c=i.type;ht(i.pendingProps.value,s.value)||(n!==null?n.push(c):n=[c])}}else if(i===Oi.current){if(s=i.alternate,s===null)throw Error(d(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(n!==null?n.push(pr):n=[pr])}i=i.return}return n!==null&&Zo(e,n,t,a),e.flags|=262144,n!==null}function as(n){for(n=n.firstContext;n!==null;){if(!ht(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function hi(n){di=n,ha=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function qe(n){return ef(di,n)}function is(n,e){return di===null&&hi(n),ef(n,e)}function ef(n,e){var t=e._currentValue;if(e={context:e,memoizedValue:t,next:null},ha===null){if(n===null)throw Error(d(308));ha=e,n.dependencies={lanes:0,firstContext:e},n.flags|=524288}else ha=ha.next=e;return t}var x0=typeof AbortController<"u"?AbortController:function(){var n=[],e=this.signal={aborted:!1,addEventListener:function(t,a){n.push(a)}};this.abort=function(){e.aborted=!0,n.forEach(function(t){return t()})}},_0=o.unstable_scheduleCallback,S0=o.unstable_NormalPriority,we={$$typeof:ue,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Po(){return{controller:new x0,data:new Map,refCount:0}}function Kr(n){n.refCount--,n.refCount===0&&_0(S0,function(){n.controller.abort()})}function tf(n,e){if((n.pendingLanes&4194048)!==0){var t=n.transitionTypes;for(t===null&&(t=n.transitionTypes=[]),n=0;n<e.length;n++){var a=e[n];t.indexOf(a)===-1&&t.push(a)}}}var Qr=null;function T0(n){var e=n.transitionTypes;return n.transitionTypes=null,e}var Xr=null,Fo=0,mi=0,Qi=null;function j0(n,e){if(Xr===null){var t=Xr=[];Fo=0,mi=hu(),Qi={status:"pending",value:void 0,then:function(a){t.push(a)}}}return Fo++,e.then(af,af),e}function af(){if(--Fo===0&&(Qr=null,Xr!==null)){Qi!==null&&(Qi.status="fulfilled");var n=Xr;Xr=null,mi=0,Qi=null;for(var e=0;e<n.length;e++)(0,n[e])()}}function w0(n,e){var t=[],a={status:"pending",value:null,reason:null,then:function(i){t.push(i)}};return n.then(function(){a.status="fulfilled",a.value=e;for(var i=0;i<t.length;i++)(0,t[i])(e)},function(i){for(a.status="rejected",a.reason=i,i=0;i<t.length;i++)(0,t[i])(void 0)}),a}var rf=an.S;an.S=function(n,e){if(Fh=Xe(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&j0(n,e),Qr!==null)for(var t=ur;t!==null;)tf(t,Qr),t=t.next;if(t=n.types,t!==null){for(var a=ur;a!==null;)tf(a,t),a=a.next;if(mi!==0){a=Qr,a===null&&(a=Qr=[]);for(var i=0;i<t.length;i++){var l=t[i];a.indexOf(l)===-1&&a.push(l)}}}rf!==null&&rf(n,e)};var gi=xt(null);function Wo(){var n=gi.current;return n!==null?n:ie.pooledCache}function rs(n,e){e===null?ne(gi,gi.current):ne(gi,e.pool)}function lf(){var n=Wo();return n===null?null:{parent:we._currentValue,pool:n}}var Xi=Error(d(460)),$o=Error(d(474)),ls=Error(d(542)),ss={then:function(){}};function sf(n){return n=n.status,n==="fulfilled"||n==="rejected"}function of(n,e,t){switch(t=n[t],t===void 0?n.push(e):t!==e&&(e.then(Vt,Vt),e=t),e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,uf(n),n===void 0&&!("reason"in e)?Error(d(600)):n;default:if(typeof e.status=="string")e.then(Vt,Vt);else{if(n=ie,n!==null&&100<n.shellSuspendCounter)throw Error(d(482));n=e,n.status="pending",n.then(function(a){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=a}},function(a){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,uf(n),n}throw bi=e,Xi}}function pi(n){try{var e=n._init;return e(n._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(bi=t,Xi):t}}var bi=null;function cf(){if(bi===null)throw Error(d(459));var n=bi;return bi=null,n}function uf(n){if(n===Xi||n===ls)throw Error(d(483))}var Ji=null,Jr=0;function os(n){var e=Jr;return Jr+=1,Ji===null&&(Ji=[]),of(Ji,n,e)}function za(n,e){e=e.props.ref,n.ref=e!==void 0?e:null}function cs(n,e){throw e.$$typeof===pn?Error(d(525)):(n=Object.prototype.toString.call(e),Error(d(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)))}function df(n){function e(_,b){if(n){var w=_.deletions;w===null?(_.deletions=[b],_.flags|=16):w.push(b)}}function t(_,b){if(!n)return null;for(;b!==null;)e(_,b),b=b.sibling;return null}function a(_){for(var b=new Map;_!==null;)_.key===null?b.set(_.index,_):b.set(_.key,_),_=_.sibling;return b}function i(_,b){return _=da(_,b),_.index=0,_.sibling=null,_}function l(_,b,w){return _.index=w,n?(w=_.alternate,w!==null?(w=w.index,w<b?(_.flags|=2,b):w):(_.flags|=134217730,b)):(_.flags|=1048576,b)}function s(_){return n&&_.alternate===null&&(_.flags|=134217730),_}function c(_,b,w,k){return b===null||b.tag!==6?(b=Io(w,_.mode,k),b.return=_,b):(b=i(b,w),b.return=_,b)}function f(_,b,w,k){var en=w.type;return en===oe?(_=O(_,b,w.props.children,k,w.key),za(_,w),_):b!==null&&(b.elementType===en||typeof en=="object"&&en!==null&&en.$$typeof===jn&&pi(en)===b.type)?(b=i(b,w.props),za(b,w),b.return=_,b):(b=Wl(w.type,w.key,w.props,null,_.mode,k),za(b,w),b.return=_,b)}function S(_,b,w,k){return b===null||b.tag!==4||b.stateNode.containerInfo!==w.containerInfo||b.stateNode.implementation!==w.implementation?(b=Vo(w,_.mode,k),b.return=_,b):(b=i(b,w.children||[]),b.return=_,b)}function O(_,b,w,k,en){return b===null||b.tag!==7?(b=ci(w,_.mode,k,en),b.return=_,b):(b=i(b,w),b.return=_,b)}function C(_,b,w){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=Io(""+b,_.mode,w),b.return=_,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case re:return w=Wl(b.type,b.key,b.props,null,_.mode,w),za(w,b),w.return=_,w;case fe:return b=Vo(b,_.mode,w),b.return=_,b;case jn:return b=pi(b),C(_,b,w)}if(An(b)||$(b))return b=ci(b,_.mode,w,null),b.return=_,b;if(typeof b.then=="function")return C(_,os(b),w);if(b.$$typeof===ue)return C(_,is(_,b),w);cs(_,b)}return null}function x(_,b,w,k){var en=b!==null?b.key:null;if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return en!==null?null:c(_,b,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case re:return w.key===en?f(_,b,w,k):null;case fe:return w.key===en?S(_,b,w,k):null;case jn:return w=pi(w),x(_,b,w,k)}if(An(w)||$(w))return en!==null?null:O(_,b,w,k,null);if(typeof w.then=="function")return x(_,b,os(w),k);if(w.$$typeof===ue)return x(_,b,is(_,w),k);cs(_,w)}return null}function N(_,b,w,k,en){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return _=_.get(w)||null,c(b,_,""+k,en);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case re:return _=_.get(k.key===null?w:k.key)||null,f(b,_,k,en);case fe:return _=_.get(k.key===null?w:k.key)||null,S(b,_,k,en);case jn:return k=pi(k),N(_,b,w,k,en)}if(An(k)||$(k))return _=_.get(w)||null,O(b,_,k,en,null);if(typeof k.then=="function")return N(_,b,w,os(k),en);if(k.$$typeof===ue)return N(_,b,w,is(b,k),en);cs(b,k)}return null}function Q(_,b,w,k){for(var en=null,Bn=null,cn=b,hn=b=0,Oe=null;cn!==null&&hn<w.length;hn++){cn.index>hn?(Oe=cn,cn=null):Oe=cn.sibling;var qn=x(_,cn,w[hn],k);if(qn===null){cn===null&&(cn=Oe);break}n&&cn&&qn.alternate===null&&e(_,cn),b=l(qn,b,hn),Bn===null?en=qn:Bn.sibling=qn,Bn=qn,cn=Oe}if(hn===w.length)return t(_,cn),kn&&fa(_,hn),en;if(cn===null){for(;hn<w.length;hn++)cn=C(_,w[hn],k),cn!==null&&(b=l(cn,b,hn),Bn===null?en=cn:Bn.sibling=cn,Bn=cn);return kn&&fa(_,hn),en}for(cn=a(cn);hn<w.length;hn++)Oe=N(cn,_,hn,w[hn],k),Oe!==null&&(n&&(qn=Oe.alternate,qn!==null&&cn.delete(qn.key===null?hn:qn.key)),b=l(Oe,b,hn),Bn===null?en=Oe:Bn.sibling=Oe,Bn=Oe);return n&&cn.forEach(function(ei){return e(_,ei)}),kn&&fa(_,hn),en}function rn(_,b,w,k){if(w==null)throw Error(d(151));for(var en=null,Bn=null,cn=b,hn=b=0,Oe=null,qn=w.next();cn!==null&&!qn.done;hn++,qn=w.next()){cn.index>hn?(Oe=cn,cn=null):Oe=cn.sibling;var ei=x(_,cn,qn.value,k);if(ei===null){cn===null&&(cn=Oe);break}n&&cn&&ei.alternate===null&&e(_,cn),b=l(ei,b,hn),Bn===null?en=ei:Bn.sibling=ei,Bn=ei,cn=Oe}if(qn.done)return t(_,cn),kn&&fa(_,hn),en;if(cn===null){for(;!qn.done;hn++,qn=w.next())qn=C(_,qn.value,k),qn!==null&&(b=l(qn,b,hn),Bn===null?en=qn:Bn.sibling=qn,Bn=qn);return kn&&fa(_,hn),en}for(cn=a(cn);!qn.done;hn++,qn=w.next())qn=N(cn,_,hn,qn.value,k),qn!==null&&(n&&(Oe=qn.alternate,Oe!==null&&cn.delete(Oe.key===null?hn:Oe.key)),b=l(qn,b,hn),Bn===null?en=qn:Bn.sibling=qn,Bn=qn);return n&&cn.forEach(function(rx){return e(_,rx)}),kn&&fa(_,hn),en}function En(_,b,w,k){if(typeof w=="object"&&w!==null&&w.type===oe&&w.key===null&&w.props.ref===void 0&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case re:n:{for(var en=w.key;b!==null;){if(b.key===en){if(en=w.type,en===oe){if(b.tag===7){t(_,b.sibling),k=i(b,w.props.children),za(k,w),k.return=_,_=k;break n}}else if(b.elementType===en||typeof en=="object"&&en!==null&&en.$$typeof===jn&&pi(en)===b.type){t(_,b.sibling),k=i(b,w.props),za(k,w),k.return=_,_=k;break n}t(_,b);break}else e(_,b);b=b.sibling}w.type===oe?(k=ci(w.props.children,_.mode,k,w.key),za(k,w),k.return=_,_=k):(k=Wl(w.type,w.key,w.props,null,_.mode,k),za(k,w),k.return=_,_=k)}return s(_);case fe:n:{for(en=w.key;b!==null;){if(b.key===en)if(b.tag===4&&b.stateNode.containerInfo===w.containerInfo&&b.stateNode.implementation===w.implementation){t(_,b.sibling),k=i(b,w.children||[]),k.return=_,_=k;break n}else{t(_,b);break}else e(_,b);b=b.sibling}k=Vo(w,_.mode,k),k.return=_,_=k}return s(_);case jn:return w=pi(w),En(_,b,w,k)}if(An(w))return Q(_,b,w,k);if($(w)){if(en=$(w),typeof en!="function")throw Error(d(150));return w=en.call(w),rn(_,b,w,k)}if(typeof w.then=="function")return En(_,b,os(w),k);if(w.$$typeof===ue)return En(_,b,is(_,w),k);cs(_,w)}return typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint"?(w=""+w,b!==null&&b.tag===6?(t(_,b.sibling),k=i(b,w),k.return=_,_=k):(t(_,b),k=Io(w,_.mode,k),k.return=_,_=k),s(_)):t(_,b)}return function(_,b,w,k){try{Jr=0;var en=En(_,b,w,k);return Ji=null,en}catch(cn){if(cn===Xi||cn===ls)throw cn;var Bn=lt(29,cn,null,_.mode);return Bn.lanes=k,Bn.return=_,Bn}}}var vi=df(!0),ff=df(!1),Ba=!1;function nc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ec(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Ua(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Ha(n,e,t){var a=n.updateQueue;if(a===null)return null;if(a=a.shared,(Vn&2)!==0){var i=a.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),a.pending=e,e=Fl(n),Jd(n,null,t),e}return Pl(n,a,e,t),Fl(n)}function Zr(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194048)!==0)){var a=e.lanes;a&=n.pendingLanes,t|=a,e.lanes=t,Lt(n,t)}}function tc(n,e){var t=n.updateQueue,a=n.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var s={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};l===null?i=l=s:l=l.next=s,t=t.next}while(t!==null);l===null?i=l=e:l=l.next=e}else i=l=e;t={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:a.shared,callbacks:a.callbacks},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}var ac=!1;function Pr(){if(ac){var n=Qi;if(n!==null)throw n}}function Fr(n,e,t,a){ac=!1;var i=n.updateQueue;Ba=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var f=c,S=f.next;f.next=null,s===null?l=S:s.next=S,s=f;var O=n.alternate;O!==null&&(O=O.updateQueue,c=O.lastBaseUpdate,c!==s&&(c===null?O.firstBaseUpdate=S:c.next=S,O.lastBaseUpdate=f))}if(l!==null){var C=i.baseState;s=0,O=S=f=null,c=l;do{var x=c.lane&-536870913,N=x!==c.lane;if(N?(zn&x)===x:(a&x)===x){x!==0&&x===mi&&(ac=!0),O!==null&&(O=O.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});n:{var Q=n,rn=c;x=e;var En=t;switch(rn.tag){case 1:if(Q=rn.payload,typeof Q=="function"){C=Q.call(En,C,x);break n}C=Q;break n;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=rn.payload,x=typeof Q=="function"?Q.call(En,C,x):Q,x==null)break n;C=P({},C,x);break n;case 2:Ba=!0}}x=c.callback,x!==null&&(n.flags|=64,N&&(n.flags|=8192),N=i.callbacks,N===null?i.callbacks=[x]:N.push(x))}else N={lane:x,tag:c.tag,payload:c.payload,callback:c.callback,next:null},O===null?(S=O=N,f=C):O=O.next=N,s|=x;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;N=c,c=N.next,N.next=null,i.lastBaseUpdate=N,i.shared.pending=null}}while(!0);O===null&&(f=C),i.baseState=f,i.firstBaseUpdate=S,i.lastBaseUpdate=O,l===null&&(i.shared.lanes=0),Qa|=s,n.lanes=s,n.memoizedState=C}}function hf(n,e){if(typeof n!="function")throw Error(d(191,n));n.call(e)}function mf(n,e){var t=n.callbacks;if(t!==null)for(n.callbacks=null,n=0;n<t.length;n++)hf(t[n],e)}var qa=xt(null),us=xt(0);function gf(n,e){n=ya,ne(us,n),ne(qa,e),ya=n|e.baseLanes}function ic(){ne(us,ya),ne(qa,qa.current)}function rc(){ya=us.current,ke(qa),ke(us)}var Ge=xt(null),Je=null;function Ga(n){var e=n.alternate;ne(Ye,Ye.current&1),ne(Ge,n),Je===null&&(e===null||qa.current!==null||e.memoizedState!==null)&&(Je=n)}function lc(n){ne(Ye,Ye.current),ne(Ge,n),Je===null&&(Je=n)}function pf(n){n.tag===22?(ne(Ye,Ye.current),ne(Ge,n),Je===null&&(Je=n)):Ya()}function Ya(){ne(Ye,Ye.current),ne(Ge,Ge.current)}function mt(n){ke(Ge),Je===n&&(Je=null),ke(Ye)}var Ye=xt(0);function Wr(n,e){ne(Ge,Ge.current),ne(Ye,e)}function sc(n){ke(Ye),ke(Ge),Je===n&&(Je=null)}function ds(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Au(t)||ku(t)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ga=0,Nn=null,te=null,Ne=null,fs=!1,Zi=!1,yi=!1,hs=0,$r=0,Pi=null,N0=0;function ge(){throw Error(d(321))}function oc(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ht(n[t],e[t]))return!1;return!0}function cc(n,e,t,a,i,l){return ga=l,Nn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,an.H=n===null||n.memoizedState===null?$f:nh,yi=!1,l=t(a,i),yi=!1,Zi&&(l=vf(e,t,a,i)),bf(n),l}function bf(n){an.H=xs;var e=te!==null&&te.next!==null;if(ga=0,Ne=te=Nn=null,fs=!1,$r=0,Pi=null,e)throw Error(d(300));n===null||Ee||(n=n.dependencies,n!==null&&as(n)&&(Ee=!0))}function vf(n,e,t,a){Nn=n;var i=0;do{if(Zi&&(Pi=null),$r=0,Zi=!1,25<=i)throw Error(d(301));if(i+=1,Ne=te=null,n.updateQueue!=null){var l=n.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}an.H=L0,l=e(t,a)}while(Zi);return l}function E0(){var n=an.H,e=n.useState()[0];return e=typeof e.then=="function"?nl(e):e,n=n.useState()[0],(te!==null?te.memoizedState:null)!==n&&(Nn.flags|=1024),e}function uc(){var n=hs!==0;return hs=0,n}function dc(n,e,t){e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~t}function fc(n){if(fs){for(n=n.memoizedState;n!==null;){var e=n.queue;e!==null&&(e.pending=null),n=n.next}fs=!1}ga=0,Ne=te=Nn=null,Zi=!1,$r=hs=0,Pi=null}function Pe(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?Nn.memoizedState=Ne=n:Ne=Ne.next=n,Ne}function xe(){if(te===null){var n=Nn.alternate;n=n!==null?n.memoizedState:null}else n=te.next;var e=Ne===null?Nn.memoizedState:Ne.next;if(e!==null)Ne=e,te=n;else{if(n===null)throw Nn.alternate===null?Error(d(467)):Error(d(310));te=n,n={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},Ne===null?Nn.memoizedState=Ne=n:Ne=Ne.next=n}return Ne}function ms(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function nl(n){var e=$r;return $r+=1,Pi===null&&(Pi=[]),n=of(Pi,n,e),e=Nn,(Ne===null?e.memoizedState:Ne.next)===null&&(e=e.alternate,an.H=e===null||e.memoizedState===null?$f:nh),n}function gs(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return nl(n);if(n.$$typeof===B)return;if(n.$$typeof===ue)return qe(n)}throw Error(d(438,String(n)))}function hc(n){var e=null,t=Nn.updateQueue;if(t!==null&&(e=t.memoCache),e==null){var a=Nn.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),t===null&&(t=ms(),Nn.updateQueue=t),t.memoCache=e,t=e.data[e.index],t===void 0)for(t=e.data[e.index]=Array(n),a=0;a<n;a++)t[a]=dt;return e.index++,t}function pa(n,e){return typeof e=="function"?e(n):e}function ps(n){var e=xe();return mc(e,te,n)}function mc(n,e,t){var a=n.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=t;var i=n.baseQueue,l=a.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}e.baseQueue=i=l,a.pending=null}if(l=n.baseState,i===null)n.memoizedState=l;else{e=i.next;var c=s=null,f=null,S=e,O=!1;do{var C=S.lane&-536870913;if(C!==S.lane?(zn&C)===C:(ga&C)===C){var x=S.revertLane;if(x===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),C===mi&&(O=!0);else if((ga&x)===x){S=S.next,x===mi&&(O=!0);continue}else C={lane:0,revertLane:S.revertLane,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},f===null?(c=f=C,s=l):f=f.next=C,Nn.lanes|=x,Qa|=x;C=S.action,yi&&t(l,C),l=S.hasEagerState?S.eagerState:t(l,C)}else x={lane:C,revertLane:S.revertLane,gesture:S.gesture,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},f===null?(c=f=x,s=l):f=f.next=x,Nn.lanes|=C,Qa|=C;S=S.next}while(S!==null&&S!==e);if(f===null?s=l:f.next=c,!ht(l,n.memoizedState)&&(Ee=!0,O&&(t=Qi,t!==null)))throw t;n.memoizedState=l,n.baseState=s,n.baseQueue=f,a.lastRenderedState=l}return i===null&&(a.lanes=0),[n.memoizedState,a.dispatch]}function gc(n){var e=xe(),t=e.queue;if(t===null)throw Error(d(311));t.lastRenderedReducer=n;var a=t.dispatch,i=t.pending,l=e.memoizedState;if(i!==null){t.pending=null;var s=i=i.next;do l=n(l,s.action),s=s.next;while(s!==i);ht(l,e.memoizedState)||(Ee=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),t.lastRenderedState=l}return[l,a]}function yf(n,e,t){var a=Nn,i=xe(),l=kn;if(l){if(t===void 0)throw Error(d(407));t=t()}else t=e();var s=!ht((te||i).memoizedState,t);if(s&&(i.memoizedState=t,Ee=!0),i=i.queue,vc(Sf.bind(null,a,i,n),[n]),n=i.getSnapshot!==e||s||Ne!==null&&(Ne.memoizedState.tag&1)!==0,Fi(n?9:8,{destroy:void 0},_f.bind(null,a,i,t,e),null),n){if(a.flags|=2048,ie===null)throw Error(d(349));l||(ga&127)!==0||xf(a,e,t)}return t}function xf(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Nn.updateQueue,e===null?(e=ms(),Nn.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function _f(n,e,t,a){e.value=t,e.getSnapshot=a,Tf(e)&&jf(n)}function Sf(n,e,t){return t(function(){Tf(e)&&jf(n)})}function Tf(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ht(n,t)}catch{return!0}}function jf(n){var e=oi(n,2);e!==null&&ut(e,n,2)}function pc(n){var e=Pe();if(typeof n=="function"){var t=n;if(n=t(),yi){nn(!0);try{t()}finally{nn(!1)}}}return e.memoizedState=e.baseState=n,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:n},e}function wf(n,e,t,a){return n.baseState=t,mc(n,te,typeof a=="function"?a:pa)}function O0(n,e,t,a,i){if(ys(n))throw Error(d(485));if(n=e.action,n!==null){var l={payload:i,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){l.listeners.push(s)}};an.T!==null?t(!0):l.isTransition=!1,a(l),t=e.pending,t===null?(l.next=e.pending=l,Nf(e,l)):(l.next=t.next,e.pending=t.next=l)}}function Nf(n,e){var t=e.action,a=e.payload,i=n.state;if(e.isTransition){var l=an.T,s={};s.types=l!==null?l.types:null,an.T=s;try{var c=t(i,a),f=an.S;f!==null&&f(s,c),Ef(n,e,c)}catch(S){bc(n,e,S)}finally{l!==null&&s.types!==null&&(l.types=s.types),an.T=l}}else try{l=t(i,a),Ef(n,e,l)}catch(S){bc(n,e,S)}}function Ef(n,e,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){Of(n,e,a)},function(a){return bc(n,e,a)}):Of(n,e,t)}function Of(n,e,t){e.status="fulfilled",e.value=t,Af(e),n.state=t,e=n.pending,e!==null&&(t=e.next,t===e?n.pending=null:(t=t.next,e.next=t,Nf(n,t)))}function bc(n,e,t){var a=n.pending;if(n.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=t,Af(e),e=e.next;while(e!==a)}n.action=null}function Af(n){n=n.listeners;for(var e=0;e<n.length;e++)(0,n[e])()}function kf(n,e){return e}function Mf(n,e){if(kn){var t=ie.formState;if(t!==null){n:{var a=Nn;if(kn){if(le){e:{for(var i=le,l=Ot;i.nodeType!==8;){if(!l){i=null;break e}if(i=kt(i.nextSibling),i===null){i=null;break e}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){le=kt(i.nextSibling),a=i.data==="F!";break n}}La(a)}a=!1}a&&(e=t[0])}}return t=Pe(),t.memoizedState=t.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kf,lastRenderedState:e},t.queue=a,t=Pf.bind(null,Nn,a),a.dispatch=t,a=pc(!1),l=Tc.bind(null,Nn,!1,a.queue),a=Pe(),i={state:e,dispatch:null,action:n,pending:null},a.queue=i,t=O0.bind(null,Nn,i,l,t),i.dispatch=t,a.memoizedState=n,[e,t,!1]}function Cf(n){var e=xe();return Rf(e,te,n)}function Rf(n,e,t){if(e=mc(n,e,kf)[0],n=ps(pa)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=nl(e)}catch(s){throw s===Xi?ls:s}else a=e;e=xe();var i=e.queue,l=i.dispatch;return t!==e.memoizedState&&(Nn.flags|=2048,Fi(9,{destroy:void 0},A0.bind(null,i,t),null)),[a,l,n]}function A0(n,e){n.action=e}function Lf(n){var e=xe(),t=te;if(t!==null)return Rf(e,t,n);xe(),e=e.memoizedState,t=xe();var a=t.queue.dispatch;return t.memoizedState=n,[e,a,!1]}function Fi(n,e,t,a){return n={tag:n,create:t,deps:a,inst:e,next:null},e=Nn.updateQueue,e===null&&(e=ms(),Nn.updateQueue=e),t=e.lastEffect,t===null?e.lastEffect=n.next=n:(a=t.next,t.next=n,n.next=a,e.lastEffect=n),n}function Df(){return xe().memoizedState}function bs(n,e,t,a){var i=Pe();Nn.flags|=n,i.memoizedState=Fi(1|e,{destroy:void 0},t,a===void 0?null:a)}function vs(n,e,t,a){var i=xe();a=a===void 0?null:a;var l=i.memoizedState.inst;te!==null&&a!==null&&oc(a,te.memoizedState.deps)?i.memoizedState=Fi(e,l,t,a):(Nn.flags|=n,i.memoizedState=Fi(1|e,l,t,a))}function zf(n,e){bs(8390656,8,n,e)}function vc(n,e){vs(2048,8,n,e)}function k0(n){Nn.flags|=4;var e=Nn.updateQueue;if(e===null)e=ms(),Nn.updateQueue=e,e.events=[n];else{var t=e.events;t===null?e.events=[n]:t.push(n)}}function Bf(n){var e=xe().memoizedState;return k0({ref:e,nextImpl:n}),function(){if((Vn&2)!==0)throw Error(d(440));return e.impl.apply(void 0,arguments)}}function Uf(n,e){return vs(4,2,n,e)}function Hf(n,e){return vs(4,4,n,e)}function qf(n,e){if(typeof e=="function"){n=n();var t=e(n);return function(){typeof t=="function"?t():e(null)}}if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Gf(n,e,t){t=t!=null?t.concat([n]):null,vs(4,4,qf.bind(null,e,n),t)}function yc(){}function Yf(n,e){var t=xe();e=e===void 0?null:e;var a=t.memoizedState;return e!==null&&oc(e,a[1])?a[0]:(t.memoizedState=[n,e],n)}function If(n,e){var t=xe();e=e===void 0?null:e;var a=t.memoizedState;if(e!==null&&oc(e,a[1]))return a[0];if(a=n(),yi){nn(!0);try{n()}finally{nn(!1)}}return t.memoizedState=[a,e],a}function xc(n,e,t){return t===void 0||(ga&1073741824)!==0&&(zn&261930)===0?n.memoizedState=e:(n.memoizedState=t,n=$h(),Nn.lanes|=n,Qa|=n,t)}function Vf(n,e,t,a){return ht(t,e)?t:qa.current!==null?(n=xc(n,t,a),ht(n,e)||(Ee=!0),n):(ga&106)===0||(ga&1073741824)!==0&&(zn&261930)===0?(Ee=!0,n.memoizedState=t):(n=$h(),Nn.lanes|=n,Qa|=n,e)}function Kf(n,e,t,a,i){var l=fn.p;fn.p=l!==0&&8>l?l:8;var s=an.T,c={};c.types=s!==null?s.types:null,an.T=c,Tc(n,!1,e,t);try{var f=i(),S=an.S;if(S!==null&&S(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var O=w0(f,a);el(n,e,O,vt(n))}else el(n,e,a,vt(n))}catch(C){el(n,e,{then:function(){},status:"rejected",reason:C},vt())}finally{fn.p=l,s!==null&&c.types!==null&&(s.types=c.types),an.T=s}}function M0(){}function _c(n,e,t,a){if(n.tag!==5)throw Error(d(476));var i=Qf(n).queue;Kf(n,i,e,et,t===null?M0:function(){return Xf(n),t(a)})}function Qf(n){var e=n.memoizedState;if(e!==null)return e;e={memoizedState:et,baseState:et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:et},next:null};var t={};return e.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:t},next:null},n.memoizedState=e,n=n.alternate,n!==null&&(n.memoizedState=e),e}function Xf(n){var e=Qf(n);e.next===null&&(e=n.alternate.memoizedState),el(n,e.next.queue,{},vt())}function Sc(){return qe(pr)}function Jf(){return xe().memoizedState}function Zf(){return xe().memoizedState}function C0(n){for(var e=n.return;e!==null;){switch(e.tag){case 24:case 3:var t=vt();n=Ua(t);var a=Ha(e,n,t);a!==null&&(ut(a,e,t),Zr(a,e,t)),e={cache:Po()},n.payload=e;return}e=e.return}}function R0(n,e,t){var a=vt();t={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},ys(n)?Ff(e,t):(t=Go(n,e,t,a),t!==null&&(ut(t,n,a),Wf(t,e,a)))}function Pf(n,e,t){var a=vt();el(n,e,t,a)}function el(n,e,t,a){var i={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(ys(n))Ff(e,i);else{var l=n.alternate;if(n.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var s=e.lastRenderedState,c=l(s,t);if(i.hasEagerState=!0,i.eagerState=c,ht(c,s))return Pl(n,e,i,0),ie===null&&Zl(),!1}catch{}if(t=Go(n,e,i,a),t!==null)return ut(t,n,a),Wf(t,e,a),!0}return!1}function Tc(n,e,t,a){if(a={lane:2,revertLane:hu(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ys(n)){if(e)throw Error(d(479))}else e=Go(n,t,a,2),e!==null&&ut(e,n,2)}function ys(n){var e=n.alternate;return n===Nn||e!==null&&e===Nn}function Ff(n,e){Zi=fs=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Wf(n,e,t){if((t&4194048)!==0){var a=e.lanes;a&=n.pendingLanes,t|=a,e.lanes=t,Lt(n,t)}}var xs={readContext:qe,use:gs,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useLayoutEffect:ge,useInsertionEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useSyncExternalStore:ge,useId:ge,useHostTransitionStatus:ge,useFormState:ge,useActionState:ge,useOptimistic:ge,useMemoCache:ge,useCacheRefresh:ge,useEffectEvent:ge},$f={readContext:qe,use:gs,useCallback:function(n,e){return Pe().memoizedState=[n,e===void 0?null:e],n},useContext:qe,useEffect:zf,useImperativeHandle:function(n,e,t){t=t!=null?t.concat([n]):null,bs(4194308,4,qf.bind(null,e,n),t)},useLayoutEffect:function(n,e){return bs(4194308,4,n,e)},useInsertionEffect:function(n,e){bs(4,2,n,e)},useMemo:function(n,e){var t=Pe();e=e===void 0?null:e;var a=n();if(yi){nn(!0);try{n()}finally{nn(!1)}}return t.memoizedState=[a,e],a},useReducer:function(n,e,t){var a=Pe();if(t!==void 0){var i=t(e);if(yi){nn(!0);try{t(e)}finally{nn(!1)}}}else i=e;return a.memoizedState=a.baseState=i,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},a.queue=n,n=n.dispatch=R0.bind(null,Nn,n),[a.memoizedState,n]},useRef:function(n){var e=Pe();return n={current:n},e.memoizedState=n},useState:function(n){n=pc(n);var e=n.queue,t=Pf.bind(null,Nn,e);return e.dispatch=t,[n.memoizedState,t]},useDebugValue:yc,useDeferredValue:function(n,e){var t=Pe();return xc(t,n,e)},useTransition:function(){var n=pc(!1);return n=Kf.bind(null,Nn,n.queue,!0,!1),Pe().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,e,t){var a=Nn,i=Pe();if(kn){if(t===void 0)throw Error(d(407));t=t()}else{if(t=e(),ie===null)throw Error(d(349));(zn&127)!==0||xf(a,e,t)}i.memoizedState=t;var l={value:t,getSnapshot:e};return i.queue=l,zf(Sf.bind(null,a,l,n),[n]),a.flags|=2048,Fi(9,{destroy:void 0},_f.bind(null,a,l,t,e),null),t},useId:function(){var n=Pe(),e=ie.identifierPrefix;if(kn){var t=Qt,a=Kt;t=(a&~(1<<32-K(a)-1)).toString(32)+t,e="_"+e+"R_"+t,t=hs++,0<t&&(e+="H"+t.toString(32)),e+="_"}else t=N0++,e="_"+e+"r_"+t.toString(32)+"_";return n.memoizedState=e},useHostTransitionStatus:Sc,useFormState:Mf,useActionState:Mf,useOptimistic:function(n){var e=Pe();e.memoizedState=e.baseState=n;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=t,e=Tc.bind(null,Nn,!0,t),t.dispatch=e,[n,e]},useMemoCache:hc,useCacheRefresh:function(){return Pe().memoizedState=C0.bind(null,Nn)},useEffectEvent:function(n){var e=Pe(),t={impl:n};return e.memoizedState=t,function(){if((Vn&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}},nh={readContext:qe,use:gs,useCallback:Yf,useContext:qe,useEffect:vc,useImperativeHandle:Gf,useInsertionEffect:Uf,useLayoutEffect:Hf,useMemo:If,useReducer:ps,useRef:Df,useState:function(){return ps(pa)},useDebugValue:yc,useDeferredValue:function(n,e){var t=xe();return Vf(t,te.memoizedState,n,e)},useTransition:function(){var n=ps(pa)[0],e=xe().memoizedState;return[typeof n=="boolean"?n:nl(n),e]},useSyncExternalStore:yf,useId:Jf,useHostTransitionStatus:Sc,useFormState:Cf,useActionState:Cf,useOptimistic:function(n,e){var t=xe();return wf(t,te,n,e)},useMemoCache:hc,useCacheRefresh:Zf,useEffectEvent:Bf},L0={readContext:qe,use:gs,useCallback:Yf,useContext:qe,useEffect:vc,useImperativeHandle:Gf,useInsertionEffect:Uf,useLayoutEffect:Hf,useMemo:If,useReducer:gc,useRef:Df,useState:function(){return gc(pa)},useDebugValue:yc,useDeferredValue:function(n,e){var t=xe();return te===null?xc(t,n,e):Vf(t,te.memoizedState,n,e)},useTransition:function(){var n=gc(pa)[0],e=xe().memoizedState;return[typeof n=="boolean"?n:nl(n),e]},useSyncExternalStore:yf,useId:Jf,useHostTransitionStatus:Sc,useFormState:Lf,useActionState:Lf,useOptimistic:function(n,e){var t=xe();return te!==null?wf(t,te,n,e):(t.baseState=n,[n,t.queue.dispatch])},useMemoCache:hc,useCacheRefresh:Zf,useEffectEvent:Bf};function jc(n,e,t,a){e=n.memoizedState,t=t(a,e),t=t==null?e:P({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var wc={enqueueSetState:function(n,e,t){n=n._reactInternals;var a=vt(),i=Ua(a);i.payload=e,t!=null&&(i.callback=t),e=Ha(n,i,a),e!==null&&(ut(e,n,a),Zr(e,n,a))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var a=vt(),i=Ua(a);i.tag=1,i.payload=e,t!=null&&(i.callback=t),e=Ha(n,i,a),e!==null&&(ut(e,n,a),Zr(e,n,a))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=vt(),a=Ua(t);a.tag=2,e!=null&&(a.callback=e),e=Ha(n,a,t),e!==null&&(ut(e,n,t),Zr(e,n,t))}};function eh(n,e,t,a,i,l,s){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(a,l,s):e.prototype&&e.prototype.isPureReactComponent?!Gr(t,a)||!Gr(i,l):!0}function th(n,e,t,a){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,a),e.state!==n&&wc.enqueueReplaceState(e,e.state,null)}function xi(n,e){var t=e;if("ref"in e){t={};for(var a in e)a!=="ref"&&(t[a]=e[a])}if(n=n.defaultProps){t===e&&(t=P({},t));for(var i in n)t[i]===void 0&&(t[i]=n[i])}return t}function ah(n){Jl(n)}function ih(n){console.error(n)}function rh(n){Jl(n)}function _s(n,e){try{var t=n.onUncaughtError;t(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function lh(n,e,t){try{var a=n.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Nc(n,e,t){return t=Ua(t),t.tag=3,t.payload={element:null},t.callback=function(){_s(n,e)},t}function sh(n){return n=Ua(n),n.tag=3,n}function oh(n,e,t,a){var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var l=a.value;n.payload=function(){return i(l)},n.callback=function(){lh(e,t,a)}}var s=t.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){lh(e,t,a),typeof i!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function D0(n,e,t,a,i){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=t.alternate,e!==null&&fi(e,t,i,!0),t=Ge.current,t!==null){switch(t.tag){case 31:case 13:case 19:return Je===null?Ys():t.alternate===null&&pe===0&&(pe=3),t.flags&=-257,t.flags|=65536,t.lanes=i,a===ss?t.flags|=16384:(e=t.updateQueue,e===null?t.updateQueue=new Set([a]):e.add(a),uu(n,a,i)),!1;case 22:return t.flags|=65536,a===ss?t.flags|=16384:(e=t.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=e):(t=e.retryQueue,t===null?e.retryQueue=new Set([a]):t.add(a)),uu(n,a,i)),!1}throw Error(d(435,t.tag))}return uu(n,a,i),Ys(),!1}if(kn)return e=Ge.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,a!==Qo&&(n=Error(d(422),{cause:a}),Vr(wt(n,t)))):(a!==Qo&&(e=Error(d(423),{cause:a}),Vr(wt(e,t))),n=n.current.alternate,n.flags|=65536,i&=-i,n.lanes|=i,a=wt(a,t),i=Nc(n.stateNode,a,i),tc(n,i),pe!==4&&(pe=2)),!1;var l=Error(d(520),{cause:a});if(l=wt(l,t),cl===null?cl=[l]:cl.push(l),pe!==4&&(pe=2),e===null)return!0;a=wt(a,t),t=e;do{switch(t.tag){case 3:return t.flags|=65536,n=i&-i,t.lanes|=n,n=Nc(t.stateNode,a,n),tc(t,n),!1;case 1:if(e=t.type,l=t.stateNode,(t.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(Xa===null||!Xa.has(l))))return t.flags|=65536,i&=-i,t.lanes|=i,i=sh(i),oh(i,n,t,a),tc(t,i),!1;break;case 22:if(t.memoizedState!==null)return t.flags|=65536,!1}t=t.return}while(t!==null);return!1}var Ec=Error(d(461)),Ee=!1;function Ce(n,e,t,a){e.child=n===null?ff(e,null,t,a):vi(e,n.child,t,a)}function ch(n,e,t,a,i){t=t.render;var l=e.ref;if("ref"in a){var s={};for(var c in a)c!=="ref"&&(s[c]=a[c])}else s=a;return hi(e),a=cc(n,e,t,s,l,i),c=uc(),n!==null&&!Ee?(dc(n,e,i),ba(n,e,i)):(kn&&c&&ns(e),e.flags|=1,Ce(n,e,a,i),e.child)}function uh(n,e,t,a,i){if(n===null){var l=t.type;return typeof l=="function"&&!Yo(l)&&l.defaultProps===void 0&&t.compare===null?(e.tag=15,e.type=l,dh(n,e,l,a,i)):(n=Wl(t.type,null,a,e,e.mode,i),n.ref=e.ref,n.return=e,e.child=n)}if(l=n.child,!Dc(n,i)){var s=l.memoizedProps;if(t=t.compare,t=t!==null?t:Gr,t(s,a)&&n.ref===e.ref)return ba(n,e,i)}return e.flags|=1,n=da(l,a),n.ref=e.ref,n.return=e,e.child=n}function dh(n,e,t,a,i){if(n!==null){var l=n.memoizedProps;if(Gr(l,a)&&n.ref===e.ref)if(Ee=!1,e.pendingProps=a=l,Dc(n,i))(n.flags&131072)!==0&&(Ee=!0);else return e.lanes=n.lanes,ba(n,e,i)}return Oc(n,e,t,a,i)}function fh(n,e,t,a){var i=a.children,l=n!==null?n.memoizedState:null;if(n===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(l=l!==null?l.baseLanes|t:t,n!==null){for(a=e.child=n.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;a=i&~l}else a=0,e.child=null;return hh(n,e,l,t,a)}if((t&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},n!==null&&rs(e,l!==null?l.cachePool:null),l!==null?gf(e,l):ic(),pf(e);else return a=e.lanes=536870912,hh(n,e,l!==null?l.baseLanes|t:t,t,a)}else l!==null?(rs(e,l.cachePool),gf(e,l),Ya(),e.memoizedState=null):(n!==null&&rs(e,null),ic(),Ya());return Ce(n,e,i,t),e.child}function tl(n,e){return n!==null&&n.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function hh(n,e,t,a,i){var l=Wo();return l=l===null?null:{parent:we._currentValue,pool:l},e.memoizedState={baseLanes:t,cachePool:l},n!==null&&rs(e,null),ic(),pf(e),n!==null&&fi(n,e,a,!0),e.childLanes=i,null}function Ss(n,e){return e=Ts({mode:e.mode,children:e.children},n.mode),e.ref=n.ref,n.child=e,e.return=n,e}function mh(n,e,t){return vi(e,n.child,null,t),n=Ss(e,e.pendingProps),n.flags|=2,mt(e),e.memoizedState=null,n}function z0(n,e,t){var a=e.pendingProps,i=(e.flags&128)!==0;if(e.flags&=-129,n===null){if(kn){if(a.mode==="hidden")return n=Ss(e,a),e.lanes=536870912,n.memoizedState={baseLanes:0,cachePool:null},tl(null,n);if(lc(e),(n=le)?(n=qm(n,Ot),n=n!==null&&n.data==="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:Ca!==null?{id:Kt,overflow:Qt}:null,retryLane:536870912,hydrationErrors:null},t=Pd(n),t.return=e,e.child=t,De=e,le=null)):n=null,n===null)throw La(e);return e.lanes=536870912,null}return Ss(e,a)}var l=n.memoizedState;if(l!==null){var s=l.dehydrated;if(lc(e),i)if(e.flags&256)e.flags&=-257,e=mh(n,e,t);else if(e.memoizedState!==null)e.child=n.child,e.flags|=128,e=null;else throw Error(d(558));else if(Ee||fi(n,e,t,!1),i=(t&n.childLanes)!==0,Ee||i){if(qa.current===null){if(a=ie,a!==null&&(s=Mr(a,t),s!==0&&s!==l.retryLane))throw l.retryLane=s,oi(n,s),ut(a,n,s),Ec;Ys()}e=mh(n,e,t)}else n=l.treeContext,le=kt(s.nextSibling),De=e,kn=!0,Ra=null,Ot=!1,n!==null&&$d(e,n),e=Ss(e,a),e.flags|=134221824;return e}return n=da(n.child,{mode:a.mode,children:a.children}),n.ref=e.ref,e.child=n,n.return=e,n}function Wi(n,e){var t=e.ref;if(t===null)n!==null&&n.ref!==null&&(e.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(d(284));(n===null||n.ref!==t)&&(e.flags|=4194816)}}function Oc(n,e,t,a,i){return hi(e),t=cc(n,e,t,a,void 0,i),a=uc(),n!==null&&!Ee?(dc(n,e,i),ba(n,e,i)):(kn&&a&&ns(e),e.flags|=1,Ce(n,e,t,i),e.child)}function gh(n,e,t,a,i,l){return hi(e),e.updateQueue=null,t=vf(e,a,t,i),bf(n),a=uc(),n!==null&&!Ee?(dc(n,e,l),ba(n,e,l)):(kn&&a&&ns(e),e.flags|=1,Ce(n,e,t,l),e.child)}function ph(n,e,t,a,i){if(hi(e),e.stateNode===null){var l=Yi,s=t.contextType;typeof s=="object"&&s!==null&&(l=qe(s)),l=new t(a,l),e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=wc,e.stateNode=l,l._reactInternals=e,l=e.stateNode,l.props=a,l.state=e.memoizedState,l.refs={},nc(e),s=t.contextType,l.context=typeof s=="object"&&s!==null?qe(s):Yi,l.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(jc(e,t,s,a),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(s=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),s!==l.state&&wc.enqueueReplaceState(l,l.state,null),Fr(e,a,l,i),Pr(),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(n===null){l=e.stateNode;var c=e.memoizedProps,f=xi(t,c);l.props=f;var S=l.context,O=t.contextType;s=Yi,typeof O=="object"&&O!==null&&(s=qe(O));var C=t.getDerivedStateFromProps;O=typeof C=="function"||typeof l.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,O||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c||S!==s)&&th(e,l,a,s),Ba=!1;var x=e.memoizedState;l.state=x,Fr(e,a,l,i),Pr(),S=e.memoizedState,c||x!==S||Ba?(typeof C=="function"&&(jc(e,t,C,a),S=e.memoizedState),(f=Ba||eh(e,t,f,a,x,S,s))?(O||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=S),l.props=a,l.state=S,l.context=s,a=f):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{l=e.stateNode,ec(n,e),s=e.memoizedProps,O=xi(t,s),l.props=O,C=e.pendingProps,x=l.context,S=t.contextType,f=Yi,typeof S=="object"&&S!==null&&(f=qe(S)),c=t.getDerivedStateFromProps,(S=typeof c=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==C||x!==f)&&th(e,l,a,f),Ba=!1,x=e.memoizedState,l.state=x,Fr(e,a,l,i),Pr();var N=e.memoizedState;s!==C||x!==N||Ba||n!==null&&n.dependencies!==null&&as(n.dependencies)?(typeof c=="function"&&(jc(e,t,c,a),N=e.memoizedState),(O=Ba||eh(e,t,O,a,x,N,f)||n!==null&&n.dependencies!==null&&as(n.dependencies))?(S||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,N,f),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,N,f)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===n.memoizedProps&&x===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===n.memoizedProps&&x===n.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=N),l.props=a,l.state=N,l.context=f,a=O):(typeof l.componentDidUpdate!="function"||s===n.memoizedProps&&x===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===n.memoizedProps&&x===n.memoizedState||(e.flags|=1024),a=!1)}return l=a,Wi(n,e),a=(e.flags&128)!==0,l||a?(l=e.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:l.render(),e.flags|=1,n!==null&&a?(e.child=vi(e,n.child,null,i),e.child=vi(e,null,t,i)):Ce(n,e,t,i),e.memoizedState=l.state,n=e.child):n=ba(n,e,i),n}function bh(n,e,t,a){return ui(),e.flags|=256,Ce(n,e,t,a),e.child}var Ac={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function kc(n){return{baseLanes:n,cachePool:lf()}}function Mc(n,e,t){return n=n!==null?n.childLanes&~t:0,e&&(n|=bt),n}function vh(n,e,t){var a=e.pendingProps,i=!1,l=(e.flags&128)!==0,s;if((s=l)||(s=n!==null&&n.memoizedState===null?!1:(Ye.current&2)!==0),s&&(i=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,n===null){if(kn){if(i?Ga(e):Ya(),(n=le)?(n=qm(n,Ot),n=n!==null&&n.data!=="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:Ca!==null?{id:Kt,overflow:Qt}:null,retryLane:536870912,hydrationErrors:null},t=Pd(n),t.return=e,e.child=t,De=e,le=null)):n=null,n===null)throw La(e);return ku(n)?e.lanes=32:e.lanes=536870912,null}return l=a.children,a=a.fallback,i?(Ya(),i=e.mode,l=Ts({mode:"hidden",children:l},i),a=ci(a,i,t,null),l.return=e,a.return=e,l.sibling=a,e.child=l,a=e.child,a.memoizedState=kc(t),a.childLanes=Mc(n,s,t),e.memoizedState=Ac,tl(null,a)):(Ga(e),Cc(e,l))}var c=n.memoizedState;if(c!==null){var f=c.dehydrated;if(f!==null)return B0(n,e,l,s,a,f,c,t)}return i?(Ya(),i=a.fallback,l=e.mode,c=n.child,f=c.sibling,a=da(c,{mode:"hidden",children:a.children}),a.subtreeFlags=c.subtreeFlags&1206910976,f!==null?i=da(f,i):(i=ci(i,l,t,null),i.flags|=2),i.return=e,a.return=e,a.sibling=i,e.child=a,tl(null,a),a=e.child,i=n.child.memoizedState,i===null?i=kc(t):(l=i.cachePool,l!==null?(c=we._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=lf(),i={baseLanes:i.baseLanes|t,cachePool:l}),a.memoizedState=i,a.childLanes=Mc(n,s,t),e.memoizedState=Ac,tl(n.child,a)):(Ga(e),t=n.child,n=t.sibling,t=da(t,{mode:"visible",children:a.children}),t.return=e,t.sibling=null,n!==null&&(s=e.deletions,s===null?(e.deletions=[n],e.flags|=16):s.push(n)),e.child=t,e.memoizedState=null,t)}function Cc(n,e){return e=Ts({mode:"visible",children:e},n.mode),e.return=n,n.child=e}function Ts(n,e){return n=lt(22,n,null,e),n.lanes=0,n}function js(n,e,t){return vi(e,n.child,null,t),n=Cc(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function B0(n,e,t,a,i,l,s,c){if(t)return e.flags&256?(Ga(e),e.flags&=-257,js(n,e,c)):e.memoizedState!==null?(Ya(),e.child=n.child,e.flags|=128,null):(Ya(),l=i.fallback,s=e.mode,i=Ts({mode:"visible",children:i.children},s),l=ci(l,s,c,null),l.flags|=2,i.return=e,l.return=e,i.sibling=l,e.child=i,vi(e,n.child,null,c),i=e.child,i.memoizedState=kc(c),i.childLanes=Mc(n,a,c),e.memoizedState=Ac,tl(null,i));if(Ga(e),ku(l)){if(a=l.nextSibling&&l.nextSibling.dataset,a)var f=a.dgst;return a=f,a!==""&&(i=Error(d(419)),i.stack="",i.digest=a,Vr({value:i,source:null,stack:null})),js(n,e,c)}if(Ee||fi(n,e,c,!1),a=(c&n.childLanes)!==0,Ee||a){if(qa.current!==null)return js(n,e,c);if(a=ie,a!==null&&(i=Mr(a,c),i!==0&&i!==s.retryLane))throw s.retryLane=i,oi(n,i),ut(a,n,i),Ec;return Au(l)||Ys(),js(n,e,c)}return Au(l)?(e.flags|=192,e.child=n.child,null):(n=s.treeContext,le=kt(l.nextSibling),De=e,kn=!0,Ra=null,Ot=!1,n!==null&&$d(e,n),e=Cc(e,i.children),e.flags|=134221824,e)}function yh(n,e,t){n.lanes|=e;var a=n.alternate;a!==null&&(a.lanes|=e),ts(n.return,e,t)}function xh(n){for(var e=null;n!==null;){var t=n.alternate;t!==null&&ds(t)===null&&(e=n),n=n.sibling}return e}function ws(n,e,t,a,i,l){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:i,treeForkCount:l}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=t,s.tailMode=i,s.treeForkCount=l)}function Rc(n){var e=n.child;for(n.child=null;e!==null;){var t=e.sibling;e.sibling=n.child,n.child=e,e=t}}function Lc(n,e,t){var a=e.pendingProps,i=a.revealOrder,l=a.tail;a=a.children;var s=Ye.current;if(e.flags&128)return Wr(e,s),null;var c=(s&2)!==0;if(c?(s=s&1|2,e.flags|=128):s&=1,Wr(e,s),i==="backwards"&&n!==null?(Rc(n),Ce(n,e,a,t),Rc(n)):Ce(n,e,a,t),a=kn?Ir:0,!c&&n!==null&&(n.flags&128)!==0)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&yh(n,t,e);else if(n.tag===19)yh(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(i){case"backwards":t=xh(e.child),t===null?(i=e.child,e.child=null):(i=t.sibling,t.sibling=null,Rc(e)),ws(e,!0,i,null,l,a);break;case"unstable_legacy-backwards":for(t=null,i=e.child,e.child=null;i!==null;){if(n=i.alternate,n!==null&&ds(n)===null){e.child=i;break}n=i.sibling,i.sibling=t,t=i,i=n}ws(e,!0,t,null,l,a);break;case"together":ws(e,!1,null,null,void 0,a);break;case"independent":e.memoizedState=null;break;default:t=xh(e.child),t===null?(i=e.child,e.child=null):(i=t.sibling,t.sibling=null),ws(e,!1,i,t,l,a)}return e.child}function _h(n,e,t){var a=e.pendingProps;return Da(e,e.type,a.value),Ce(n,e,a.children,t),e.child}function ba(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Qa|=e.lanes,(t&e.childLanes)===0)if(n!==null){if(fi(n,e,t,!1),(t&e.childLanes)===0)return null}else return null;if(n!==null&&e.child!==n.child)throw Error(d(153));if(e.child!==null){for(n=e.child,t=da(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=da(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Dc(n,e){return(n.lanes&e)!==0?!0:(n=n.dependencies,!!(n!==null&&as(n)))}function U0(n,e,t){switch(e.tag){case 3:ai(e,e.stateNode.containerInfo),Da(e,we,n.memoizedState.cache),ui();break;case 27:case 5:Ai(e);break;case 4:ai(e,e.stateNode.containerInfo);break;case 10:Da(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,lc(e),null;break;case 13:var a=e.memoizedState;if(a!==null){if(a.dehydrated!==null)return Ga(e),e.flags|=128,null;a=fi(n,e,t,!1);var i=e.child.childLanes;return a||(t&i)!==0?vh(n,e,t):(Ga(e),n=ba(n,e,t),n!==null?n.sibling:null)}Ga(e);break;case 19:if(e.flags&128)return Lc(n,e,t);if(i=(n.flags&128)!==0,a=(t&e.childLanes)!==0,a||(fi(n,e,t,!1),a=(t&e.childLanes)!==0),i){if(a)return Lc(n,e,t);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Wr(e,Ye.current),a)break;return null;case 22:return e.lanes=0,fh(n,e,t,e.pendingProps);case 24:Da(e,we,n.memoizedState.cache)}return ba(n,e,t)}function Sh(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps)Ee=!0;else{if(!Dc(n,t)&&(e.flags&128)===0)return Ee=!1,U0(n,e,t);Ee=(n.flags&131072)!==0}else Ee=!1,kn&&(e.flags&1048576)!==0&&Wd(e,Ir,e.index);switch(e.lanes=0,e.tag){case 16:n:{var a=e.pendingProps;if(n=pi(e.elementType),e.type=n,typeof n=="function")Yo(n)?(a=xi(n,a),e.tag=1,e=ph(null,e,n,a,t)):(e.tag=0,e=Oc(null,e,n,a,t));else{if(n!=null){var i=n.$$typeof;if(i===I){e.tag=11,e=ch(null,e,n,a,t);break n}else if(i===Mn){e.tag=14,e=uh(null,e,n,a,t);break n}else if(i===ue){e.tag=10,e.type=n,e=_h(null,e,t);break n}}throw e=Rn(n)||n,Error(d(306,e,""))}}return e;case 0:return Oc(n,e,e.type,e.pendingProps,t);case 1:return a=e.type,i=xi(a,e.pendingProps),ph(n,e,a,i,t);case 3:n:{if(ai(e,e.stateNode.containerInfo),n===null)throw Error(d(387));a=e.pendingProps;var l=e.memoizedState;i=l.element,ec(n,e),Fr(e,a,null,t);var s=e.memoizedState;if(a=s.cache,Da(e,we,a),a!==l.cache&&Zo(e,[we],t,!0),Pr(),a=s.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){e=bh(n,e,a,t);break n}else if(a!==i){i=wt(Error(d(424)),e),Vr(i),e=bh(n,e,a,t);break n}else for(n=e.stateNode.containerInfo,n.nodeType===9?n=n.body:n=n.nodeName==="HTML"?n.ownerDocument.body:n,le=kt(n.firstChild),De=e,kn=!0,Ra=null,Ot=!0,t=ff(e,null,a,t),e.child=t;t;)t.flags=t.flags&-3|134221824,t=t.sibling;else{if(ui(),a===i){e=ba(n,e,t);break n}Ce(n,e,a,t)}e=e.child}return e;case 26:return Wi(n,e),n===null?(t=Xm(e.type,null,e.pendingProps,null))?e.memoizedState=t:kn||(e.stateNode=Nm(e.type,e.pendingProps,Gt.current,e)):e.memoizedState=Xm(e.type,n.memoizedProps,e.pendingProps,n.memoizedState),null;case 27:return Ai(e),n===null&&kn&&(a=e.stateNode=Im(e.type,e.pendingProps,Gt.current),De=e,Ot=!0,i=le,Pa(e.type)?(Mu=i,le=kt(a.firstChild)):le=i),Ce(n,e,e.pendingProps.children,t),Wi(n,e),n===null&&(e.flags|=4194304),e.child;case 5:return n===null&&kn&&((i=a=le)&&(a=Cy(a,e.type,e.pendingProps,Ot),a!==null?(e.stateNode=a,De=e,le=kt(a.firstChild),Ot=!1,i=!0):i=!1),i||La(e)),Ai(e),i=e.type,l=e.pendingProps,s=n!==null?n.memoizedProps:null,a=l.children,Su(i,l)?a=null:s!==null&&Su(i,s)&&(e.flags|=32),e.memoizedState!==null&&(i=cc(n,e,E0,null,null,t),pr._currentValue=i),Wi(n,e),Ce(n,e,a,t),e.child;case 6:return n===null&&kn&&((n=t=le)&&(t=Ry(t,e.pendingProps,Ot),t!==null?(e.stateNode=t,De=e,le=null,n=!0):n=!1),n||La(e)),null;case 13:return vh(n,e,t);case 4:return ai(e,e.stateNode.containerInfo),a=e.pendingProps,n===null?e.child=vi(e,null,a,t):Ce(n,e,a,t),e.child;case 11:return ch(n,e,e.type,e.pendingProps,t);case 7:return a=e.pendingProps,Wi(n,e),Ce(n,e,a,t),e.child;case 8:return Ce(n,e,e.pendingProps.children,t),e.child;case 12:return Ce(n,e,e.pendingProps.children,t),e.child;case 10:return _h(n,e,t);case 9:return i=e.type._context,a=e.pendingProps.children,hi(e),i=qe(i),a=a(i),e.flags|=1,Ce(n,e,a,t),e.child;case 14:return uh(n,e,e.type,e.pendingProps,t);case 15:return dh(n,e,e.type,e.pendingProps,t);case 19:return Lc(n,e,t);case 31:return z0(n,e,t);case 22:return fh(n,e,t,e.pendingProps);case 24:return hi(e),a=qe(we),n===null?(i=Wo(),i===null&&(i=ie,l=Po(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=t),i=l),e.memoizedState={parent:a,cache:i},nc(e),Da(e,we,i)):((n.lanes&t)!==0&&(ec(n,e),Fr(e,null,null,t),Pr()),i=n.memoizedState,l=e.memoizedState,i.parent!==a?(i={parent:a,cache:a},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),Da(e,we,a)):(a=l.cache,Da(e,we,a),a!==i.cache&&Zo(e,[we],t,!0))),Ce(n,e,e.pendingProps.children,t),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),a=e.pendingProps,a.name!=null&&a.name!=="auto"?e.flags|=n===null?18882560:18874368:kn&&ns(e),n!==null&&n.memoizedProps.name!==a.name?e.flags|=4194816:Wi(n,e),Ce(n,e,a.children,t),e.child;case 29:throw e.pendingProps}throw Error(d(156,e.tag))}function va(n){n.flags|=4}function zc(n,e,t,a,i){var l;if((l=(n.mode&32)!==0)&&(l=t===null?Fm(e,a):Fm(e,a)&&(a.src!==t.src||a.srcSet!==t.srcSet)),l){if(n.flags|=16777216,(i&335544128)===i)if(n.stateNode.complete)n.flags|=8192;else if(am())n.flags|=8192;else throw bi=ss,$o}else n.flags&=-16777217}function Th(n,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Wm(e))if(am())n.flags|=8192;else throw bi=ss,$o}function Ns(n,e){e!==null&&(n.flags|=4),n.flags&16384&&(e=n.tag!==22?kr():536870912,n.lanes|=e,ar|=e)}function al(n,e){if(!kn)switch(n.tailMode){case"visible":break;case"collapsed":for(var t=n.tail,a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:a.sibling=null;break;default:for(e=n.tail,t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null}}function se(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,a=0;if(e)for(var i=n.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags&1206910976,a|=i.flags&1206910976,i.return=n,i=i.sibling;else for(i=n.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=n,i=i.sibling;return n.subtreeFlags|=a,n.childLanes=t,e}function H0(n,e,t){var a=e.pendingProps;switch(Ko(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(e),null;case 1:return se(e),null;case 3:return t=e.stateNode,a=null,n!==null&&(a=n.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),ma(we),tt(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(n===null||n.child===null)&&(Ki(e)?va(e):n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Xo())),se(e),null;case 26:var i=e.type,l=e.memoizedState;return n===null?(va(e),l!==null?(se(e),Th(e,l)):(se(e),zc(e,i,null,a,t))):l?l!==n.memoizedState?(va(e),se(e),Th(e,l)):(se(e),e.flags&=-16777217):(n=n.memoizedProps,n!==a&&va(e),se(e),zc(e,i,n,a,t)),null;case 27:if(Ct(e),t=Gt.current,i=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==a&&va(e);else{if(!a){if(e.stateNode===null)throw Error(d(166));return se(e),e.subtreeFlags&=-33554433,null}n=_t.current,Ki(e)?nf(e):(n=Im(i,a,t),e.stateNode=n,va(e))}return se(e),e.subtreeFlags&=-33554433,null;case 5:if(Ct(e),i=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==a&&va(e);else{if(!a){if(e.stateNode===null)throw Error(d(166));return se(e),e.subtreeFlags&=-33554433,null}if(l=_t.current,Ki(e))nf(e);else{var s=ml(Gt.current);switch(l){case 1:l=s.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:l=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":l=s.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":l=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":l=s.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof a.is=="string"?s.createElement("select",{is:a.is}):s.createElement("select"),a.multiple?l.multiple=!0:a.size&&(l.size=a.size);break;default:l=typeof a.is=="string"?s.createElement(i,{is:a.is}):s.createElement(i)}}l[Me]=e,l[U]=a;n:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)l.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break n;for(;s.sibling===null;){if(s.return===null||s.return===e)break n;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=l;n:switch(Ve(l,i,a),i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break n;case"img":a=!0;break n;default:a=!1}a&&va(e)}}return se(e),e.subtreeFlags&=-33554433,zc(e,e.type,n===null?null:n.memoizedProps,e.pendingProps,t),null;case 6:if(n&&e.stateNode!=null)n.memoizedProps!==a&&va(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(d(166));if(n=Gt.current,Ki(e)){if(n=e.stateNode,t=e.memoizedProps,a=null,i=De,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}n[Me]=e,n=!!(n.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||Sm(n.nodeValue,t)),n||La(e,!0)}else n=ml(n).createTextNode(a),n[Me]=e,e.stateNode=n}return se(e),null;case 31:if(t=e.memoizedState,n===null||n.memoizedState!==null){if(a=Ki(e),t!==null){if(n===null){if(!a)throw Error(d(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(557));n[Me]=e}else ui(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;se(e),n=!1}else t=Xo(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=t),n=!0;if(!n)return e.flags&256?(mt(e),e):(mt(e),null);if((e.flags&128)!==0)throw Error(d(558))}return se(e),null;case 13:if(a=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(i=Ki(e),a!==null&&a.dehydrated!==null){if(n===null){if(!i)throw Error(d(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(d(317));i[Me]=e}else ui(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;se(e),i=!1}else i=Xo(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(mt(e),e):(mt(e),null)}return mt(e),(e.flags&128)!==0?(e.lanes=t,e):(t=a!==null,n=n!==null&&n.memoizedState!==null,t&&(a=e.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==i&&(a.flags|=2048)),t!==n&&t&&(e.child.flags|=8192),Ns(e,e.updateQueue),se(e),null);case 4:return tt(),n===null&&bu(e.stateNode.containerInfo),e.flags|=67108864,se(e),null;case 10:return ma(e.type),se(e),null;case 19:if(sc(e),a=e.memoizedState,a===null)return se(e),null;if(i=(e.flags&128)!==0,l=a.rendering,l===null)if(i)al(a,!1);else{if(pe!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(l=ds(n),l!==null){for(e.flags|=128,al(a,!1),n=l.updateQueue,e.updateQueue=n,Ns(e,n),e.subtreeFlags=0,n=t,t=e.child;t!==null;)Zd(t,n),t=t.sibling;return Wr(e,Ye.current&1|2),kn&&fa(e,a.treeForkCount),e.child}n=n.sibling}a.tail!==null&&Xe()>Us&&(e.flags|=128,i=!0,al(a,!1),e.lanes=4194304)}else{if(!i)if(n=ds(l),n!==null){if(e.flags|=128,i=!0,n=n.updateQueue,e.updateQueue=n,Ns(e,n),al(a,!0),a.tail===null&&a.tailMode!=="collapsed"&&a.tailMode!=="visible"&&!l.alternate&&!kn)return se(e),null}else 2*Xe()-a.renderingStartTime>Us&&t!==536870912&&(e.flags|=128,i=!0,al(a,!1),e.lanes=4194304);a.isBackwards?(l.sibling=e.child,e.child=l):(n=a.last,n!==null?n.sibling=l:e.child=l,a.last=l)}if(a.tail!==null){n=a.tail;n:{for(t=n;t!==null;){if(t.alternate!==null){t=!1;break n}t=t.sibling}t=!0}return a.rendering=n,a.tail=n.sibling,a.renderingStartTime=Xe(),n.sibling=null,l=Ye.current,l=i?l&1|2:l&1,a.tailMode==="visible"||a.tailMode==="collapsed"||!t||kn?Wr(e,l):(t=l,ne(Ge,e),ne(Ye,t),Je===null&&(Je=e)),kn&&fa(e,a.treeForkCount),n}return se(e),null;case 22:case 23:return mt(e),rc(),a=e.memoizedState!==null,n!==null?n.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(t&536870912)!==0&&(e.flags&128)===0&&(se(e),e.subtreeFlags&6&&(e.flags|=8192)):se(e),t=e.updateQueue,t!==null&&Ns(e,t.retryQueue),t=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==t&&(e.flags|=2048),n!==null&&ke(gi),null;case 24:return t=null,n!==null&&(t=n.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),ma(we),se(e),null;case 25:return null;case 30:return e.flags|=33554432,se(e),null}throw Error(d(156,e.tag))}function q0(n,e){switch(Ko(e),e.tag){case 1:return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return ma(we),tt(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 26:case 27:case 5:return Ct(e),null;case 31:if(e.memoizedState!==null){if(mt(e),e.alternate===null)throw Error(d(340));ui()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 13:if(mt(e),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(d(340));ui()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return sc(e),n=e.flags,n&65536?(e.flags=n&-65537|128,n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null),e.flags|=4,e):null;case 4:return tt(),null;case 10:return ma(e.type),null;case 22:case 23:return mt(e),rc(),n!==null&&ke(gi),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 24:return ma(we),null;case 25:return null;default:return null}}function jh(n,e){switch(Ko(e),e.tag){case 3:ma(we),tt();break;case 26:case 27:case 5:Ct(e);break;case 4:tt();break;case 31:e.memoizedState!==null&&mt(e);break;case 13:mt(e);break;case 19:sc(e);break;case 10:ma(e.type);break;case 22:case 23:mt(e),rc(),n!==null&&ke(gi);break;case 24:ma(we)}}function il(n,e){try{var t=e.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var i=a.next;t=i;do{if((t.tag&n)===n){a=void 0;var l=t.create,s=t.inst;a=l(),s.destroy=a}t=t.next}while(t!==i)}}catch(c){Wn(e,e.return,c)}}function Ia(n,e,t){try{var a=e.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&n)===n){var s=a.inst,c=s.destroy;if(c!==void 0){s.destroy=void 0,i=e;var f=t,S=c;try{S()}catch(O){Wn(i,f,O)}}}a=a.next}while(a!==l)}}catch(O){Wn(e,e.return,O)}}function wh(n){var e=n.updateQueue;if(e!==null){var t=n.stateNode;try{mf(e,t)}catch(a){Wn(n,n.return,a)}}}function Nh(n,e,t){t.props=xi(n.type,n.memoizedProps),t.state=n.memoizedState;try{t.componentWillUnmount()}catch(a){Wn(n,e,a)}}function Xt(n,e){try{var t=n.ref;if(t!==null){switch(n.tag){case 26:case 27:case 5:var a=n.stateNode;break;case 30:var i=n.stateNode,l=ca(n.memoizedProps,i);(i.ref===null||i.ref.name!==l)&&(i.ref=Rm(l)),a=i.ref;break;case 7:if(n.stateNode===null){var s=new yt(n);v(n.child,!1,ky,s,void 0,void 0),n.stateNode=s}a=n.stateNode;break;default:a=n.stateNode}typeof t=="function"?n.refCleanup=t(a):t.current=a}}catch(c){Wn(n,e,c)}}function Ie(n,e){var t=n.ref,a=n.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(i){Wn(n,e,i)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(i){Wn(n,e,i)}else t.current=null}function Es(n,e){if((n.tag===5||n.tag===27||n.tag===6)&&n.alternate===null&&e!==null)for(var t=0;t<e.length;t++)Hm(n.stateNode,e[t])}function Eh(n){for(var e=n.return;e!==null&&(Uc(e)&&Hm(n.stateNode,e.stateNode),!Bc(e));)e=e.return}function rl(n){for(var e=n.return;e!==null&&(Uc(e)&&My(n.stateNode,e.stateNode),!Bc(e));)e=e.return}function Bc(n){return n.tag===5||n.tag===3||n.tag===27}function Uc(n){return n&&n.tag===7&&n.stateNode!==null}function Hc(n){var e=n.type,t=n.memoizedProps,a=n.stateNode;try{n:switch(e){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break n;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(i){Wn(n,n.return,i)}}function qc(n,e,t){try{var a=n.stateNode;fy(a,n.type,t,e),a[U]=e}catch(i){Wn(n,n.return,i)}}function Oh(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Pa(n.type)||n.tag===4}function Gc(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Oh(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Pa(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Yc(n,e,t,a){var i=n.tag;if(i===5||i===6)i=n.stateNode,e?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(i,e):(e=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.appendChild(i),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Vt)),Es(n,a),Hn=!0;else if(i!==4&&(i===27&&(Es(n,a),a=null,Pa(n.type)&&(t=n.stateNode,e=null)),n=n.child,n!==null))for(Yc(n,e,t,a),n=n.sibling;n!==null;)Yc(n,e,t,a),n=n.sibling}function Os(n,e,t,a){var i=n.tag;if(i===5||i===6)i=n.stateNode,e?t.insertBefore(i,e):t.appendChild(i),Es(n,a),Hn=!0;else if(i!==4&&(i===27&&(Es(n,a),a=null,Pa(n.type)&&(t=n.stateNode)),n=n.child,n!==null))for(Os(n,e,t,a),n=n.sibling;n!==null;)Os(n,e,t,a),n=n.sibling}function Ah(n){var e=n.stateNode,t=n.memoizedProps;try{for(var a=n.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Ve(e,a,t),e[Me]=n,e[U]=t}catch(l){Wn(n,n.return,l)}}var As=!1,gt=null;function kh(n){(n.tag===30||(n.subtreeFlags&33554432)!==0)&&(As=!0)}var Jt=null;function Mh(){var n=Jt;return Jt=null,n}var st=0;function $i(n,e,t,a,i){return st=0,Ch(n.child,e,t,a,i)}function Ch(n,e,t,a,i){for(var l=!1;n!==null;){if(n.tag===5){var s=n.stateNode;if(a!==null){var c=wu(s);a.push(c),c.view&&(l=!0)}else l||wu(s).view&&(l=!0);As=!0,Mm(s,st===0?e:e+"_"+st,t),st++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&i||Ch(n.child,e,t,a,i)&&(l=!0));n=n.sibling}return l}function Zt(n,e){for(;n!==null;)n.tag===5?Cm(n.stateNode,n.memoizedProps):(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&e||Zt(n.child,e)),n=n.sibling}function ks(n){if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if((n.tag!==22||n.memoizedState===null)&&(ks(n),n.tag===30&&(n.flags&18874368)!==0&&n.stateNode.paired)){var e=n.memoizedProps;if(e.name==null||e.name==="auto")throw Error(d(544));var t=e.name;e=ua(e.default,e.share),e!=="none"&&($i(n,t,e,null,!1)||Zt(n.child,!1))}n=n.sibling}}function Ic(n,e){if(n.tag===30){var t=n.stateNode,a=n.memoizedProps,i=ca(a,t),l=ua(a.default,t.paired?a.share:a.enter);l!=="none"?$i(n,i,l,null,!1)?(ks(n),t.paired||e||sr(n,a.onEnter)):Zt(n.child,!1):ks(n)}else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)Ic(n,e),n=n.sibling;else ks(n)}function Vc(n){if(gt!==null&&gt.size!==0){var e=gt;if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if(n.tag!==22||n.memoizedState===null){if(n.tag===30&&(n.flags&18874368)!==0){var t=n.memoizedProps,a=t.name;if(a!=null&&a!=="auto"){var i=e.get(a);if(i!==void 0){var l=ua(t.default,t.share);if(l!=="none"&&($i(n,a,l,null,!1)?(l=n.stateNode,i.paired=l,l.paired=i,sr(n,t.onShare)):Zt(n.child,!1)),e.delete(a),e.size===0)break}}}Vc(n)}n=n.sibling}}}function Kc(n){if(n.tag===30){var e=n.memoizedProps,t=ca(e,n.stateNode),a=gt!==null?gt.get(t):void 0,i=ua(e.default,a!==void 0?e.share:e.exit);i!=="none"&&($i(n,t,i,null,!1)?a!==void 0?(i=n.stateNode,a.paired=i,i.paired=a,gt.delete(t),sr(n,e.onShare)):sr(n,e.onExit):Zt(n.child,!1)),gt!==null&&Vc(n)}else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)Kc(n),n=n.sibling;else gt!==null&&Vc(n)}function Rh(n){for(n=n.child;n!==null;){if(n.tag===30){var e=n.memoizedProps,t=ca(e,n.stateNode);e=ua(e.default,e.update),n.flags&=-5,e!=="none"&&$i(n,t,e,n.memoizedState=[],!1)}else(n.subtreeFlags&33554432)!==0&&Rh(n);n=n.sibling}}function Qc(n){if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if(n.tag!==22||n.memoizedState===null){if(n.tag===30&&(n.flags&18874368)!==0){var e=n.stateNode;e.paired!==null&&(e.paired=null,Zt(n.child,!1))}Qc(n)}n=n.sibling}}function Ms(n){if(n.tag===30)n.stateNode.paired=null,Zt(n.child,!1),Qc(n);else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)Ms(n),n=n.sibling;else Qc(n)}function Lh(n){for(n=n.child;n!==null;)n.tag===30?Zt(n.child,!1):(n.subtreeFlags&33554432)!==0&&Lh(n),n=n.sibling}function Xc(n,e,t,a,i,l,s){for(var c=!1;e!==null;){if(e.tag===5){var f=e.stateNode;if(l!==null&&st<l.length){var S=l[st],O=wu(f);(S.view||O.view)&&(c=!0);var C;if(C=(n.flags&4)===0)if(O.clip)C=!0;else{C=S.rect;var x=O.rect;C=C.y!==x.y||C.x!==x.x||C.height!==x.height||C.width!==x.width}C&&(n.flags|=4),O.abs?O=!S.abs:(S=S.rect,O=O.rect,O=S.height!==O.height||S.width!==O.width),O&&(n.flags|=32)}else n.flags|=32;(n.flags&4)!==0&&Mm(f,st===0?t:t+"_"+st,i),c&&(n.flags&4)!==0||(Jt===null&&(Jt=[]),Jt.push(f,st===0?a:a+"_"+st,e.memoizedProps)),st++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s?n.flags|=e.flags&32:Xc(n,e.child,t,a,i,l,s)&&(c=!0));e=e.sibling}return c}function Dh(n,e){for(n=n.child;n!==null;){if(n.tag===30){var t=n.memoizedProps,a=n.stateNode,i=ca(t,a),l=ua(t.default,t.update),s;s=n.memoizedState,n.memoizedState=null,a=n;var c=n.child;st=0,i=Xc(a,c,i,i,l,s,!1),(n.flags&4)!==0&&i&&sr(n,t.onUpdate)}else(n.subtreeFlags&33554432)!==0&&Dh(n);n=n.sibling}}var ze=!1,Jn=!1,Pt=!1,Jc=!1,zh=typeof WeakSet=="function"?WeakSet:Set,Be=null,Ft=!1,ll=!1,Cs=!1,Zc=!1;function G0(n,e,t){if(n=n.containerInfo,xu=br,n=Hd(n),Do(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else n:{a=(a=n.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var l=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break n}var c=0,f=-1,S=-1,O=0,C=0,x=n,N=null;e:for(;;){for(var Q;x!==a||l!==0&&x.nodeType!==3||(f=c+l),x!==s||i!==0&&x.nodeType!==3||(S=c+i),x.nodeType===3&&(c+=x.nodeValue.length),(Q=x.firstChild)!==null;)N=x,x=Q;for(;;){if(x===n)break e;if(N===a&&++O===l&&(f=c),N===s&&++C===i&&(S=c),(Q=x.nextSibling)!==null)break;x=N,N=x.parentNode}x=Q}a=f===-1||S===-1?null:{start:f,end:S}}else a=null}a=a||{start:0,end:0}}else a=null;for(_u={focusedElem:n,selectionRange:a},br=!1,t=(t&335544064)===t,Be=e,e=t?9270:1024;Be!==null;){if(n=Be,t&&(a=n.deletions,a!==null))for(l=0;l<a.length;l++)t&&Kc(a[l]);if(n.alternate===null&&(n.flags&2)!==0)t&&kh(n),Rs(t);else{if(n.tag===22){if(a=n.alternate,n.memoizedState!==null){a!==null&&a.memoizedState===null&&t&&Kc(a),Rs(t);continue}else if(a!==null&&a.memoizedState!==null){t&&kh(n),Rs(t);continue}}a=n.child,(n.subtreeFlags&e)!==0&&a!==null?(a.return=n,Be=a):(t&&Rh(n),Rs(t))}}gt=null}function Rs(n){for(;Be!==null;){var e=Be,t=n,a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((i&1024)!==0&&a!==null){t=void 0,i=a.memoizedProps,a=a.memoizedState;var l=e.stateNode;try{var s=xi(e.type,i);t=l.getSnapshotBeforeUpdate(s,a),l.__reactInternalSnapshotBeforeUpdate=t}catch(c){Wn(e,e.return,c)}}break;case 3:if((i&1024)!==0){if(a=e.stateNode.containerInfo,t=a.nodeType,t===9)Ou(a);else if(t===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":Ou(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:t&&a!==null&&(t=ca(a.memoizedProps,a.stateNode),i=e.memoizedProps,i=ua(i.default,i.update),i!=="none"&&$i(a,t,i,a.memoizedState=[],!0));break;default:if((i&1024)!==0)throw Error(d(163))}if(a=e.sibling,a!==null){a.return=e.return,Be=a;break}Be=e.return}}function Bh(n,e,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Wt(n,t),a&4&&il(5,t);break;case 1:if(Wt(n,t),a&4)if(n=t.stateNode,e===null)try{n.componentDidMount()}catch(s){Wn(t,t.return,s)}else{var i=xi(t.type,e.memoizedProps);e=e.memoizedState;try{n.componentDidUpdate(i,e,n.__reactInternalSnapshotBeforeUpdate)}catch(s){Wn(t,t.return,s)}}a&64&&wh(t),a&512&&Xt(t,t.return);break;case 3:if(Wt(n,t),a&64&&(n=t.updateQueue,n!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{mf(n,e)}catch(s){Wn(t,t.return,s)}}break;case 27:e===null&&a&4&&Ah(t);case 26:case 5:Wt(n,t),e===null&&a&4&&Hc(t),a&512&&Xt(t,t.return);break;case 12:Wt(n,t);break;case 31:Wt(n,t),a&4&&Gh(n,t);break;case 13:Wt(n,t),a&4&&Yh(n,t),a&64&&(n=t.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(t=$0.bind(null,t),Ly(n,t))));break;case 22:if(a=t.memoizedState!==null||ze,!a){var l=e!==null&&e.memoizedState!==null||Jn;e=ze,i=Jn,ze=a,(Jn=l)&&!i?(a=2,(t.subtreeFlags&8772)!==0&&(a|=1),Ut(n,t,a)):Wt(n,t),ze=e,Jn=i}break;case 30:Wt(n,t),a&512&&Xt(t,t.return);break;case 7:a&512&&Xt(t,t.return);default:Wt(n,t)}}function Pc(n,e){for(n=n.child;n!==null;)Uh(n,e),n=n.sibling}function Uh(n,e){switch(n.tag){case 5:case 26:try{var t=n.stateNode;if(e){var a=t.style;typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"}else{var i=n.stateNode,l=n.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null;i.style.display=s==null||typeof s=="boolean"?"":(""+s).trim()}}catch(f){Wn(n,n.return,f)}Fc(n,e);break;case 6:try{n.stateNode.nodeValue=e?"":n.memoizedProps,Hn=!0}catch(f){Wn(n,n.return,f)}break;case 18:try{var c=n.stateNode;e?km(c,!0):km(n.stateNode,!1)}catch(f){Wn(n,n.return,f)}break;case 22:case 23:n.memoizedState===null&&Pc(n,e);break;default:Pc(n,e)}}function Fc(n,e){if(n.subtreeFlags&67108864)for(n=n.child;n!==null;){n:{var t=n,a=e;switch(t.tag){case 4:Uh(t,a);break n;case 22:t.memoizedState===null&&Fc(t,a);break n;default:Fc(t,a)}}n=n.sibling}}function Hh(n){var e=n.alternate;e!==null&&(n.alternate=null,Hh(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&Re(e)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var de=null,ot=!1;function zt(n,e,t){for(t=t.child;t!==null;)qh(n,e,t),t=t.sibling}function qh(n,e,t){if(Un&&typeof Un.onCommitFiberUnmount=="function")try{Un.onCommitFiberUnmount(ae,t)}catch{}switch(t.tag){case 26:Jn||Ie(t,e),zt(n,e,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&!Jn&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Jn||Ie(t,e),rl(t);var a=de,i=ot;Pa(t.type)&&(de=t.stateNode,ot=!1),zt(n,e,t),Vm(t.stateNode,t.type,t.memoizedProps),de=a,ot=i;break;case 5:Jn||Ie(t,e),rl(t);case 6:if(t.tag===6&&rl(t),a=de,i=ot,de=null,zt(n,e,t),de=a,ot=i,de!==null)if(ot)try{(de.nodeType===9?de.body:de.nodeName==="HTML"?de.ownerDocument.body:de).removeChild(t.stateNode),Hn=!0}catch(l){Wn(t,e,l)}else try{de.removeChild(t.stateNode),Hn=!0}catch(l){Wn(t,e,l)}break;case 18:de!==null&&(ot?(n=de,Am(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.stateNode),vr(n)):Am(de,t.stateNode));break;case 4:a=de,i=ot,de=t.stateNode.containerInfo,ot=!0,zt(n,e,t),de=a,ot=i;break;case 0:case 11:case 14:case 15:Ia(2,t,e),Jn||Ia(4,t,e),zt(n,e,t);break;case 1:Jn||(Ie(t,e),a=t.stateNode,typeof a.componentWillUnmount=="function"&&Nh(t,e,a)),zt(n,e,t);break;case 21:zt(n,e,t);break;case 22:Jn=(a=Jn)||t.memoizedState!==null,zt(n,e,t),Jn=a;break;case 30:Ie(t,e),zt(n,e,t);break;case 7:Jn||Ie(t,e),zt(n,e,t);break;default:zt(n,e,t)}}function Gh(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{vr(n)}catch(t){Wn(e,e.return,t)}}}function Yh(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{vr(n)}catch(t){Wn(e,e.return,t)}}function Y0(n){switch(n.tag){case 31:case 13:case 19:var e=n.stateNode;return e===null&&(e=n.stateNode=new zh),e;case 22:return n=n.stateNode,e=n._retryCache,e===null&&(e=n._retryCache=new zh),e;default:throw Error(d(435,n.tag))}}function Ls(n,e){var t=Y0(n);e.forEach(function(a){if(!t.has(a)){t.add(a);var i=ny.bind(null,n,a);a.then(i,i)}})}function Fe(n,e,t){var a=e.deletions;if(a!==null)for(var i=0;i<a.length;i++){var l=a[i],s=n,c=e,f=c;n:for(;f!==null;){switch(f.tag){case 27:if(Pa(f.type)){de=f.stateNode,ot=!1;break n}break;case 5:de=f.stateNode,ot=!1;break n;case 3:case 4:de=f.stateNode.containerInfo,ot=!0;break n}f=f.return}if(de===null)throw Error(d(160));qh(s,c,l),de=null,ot=!1,s=l.alternate,s!==null&&(s.return=null),l.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Ih(e,n,t),e=e.sibling}var Bt=null;function Ih(n,e,t){var a=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(i&4&&(a=n.updateQueue,a=a!==null?a.events:null,a!==null))for(var l=0;l<a.length;l++){var s=a[l];s.ref.impl=s.nextImpl}Fe(e,n,t),We(n),i&4&&(Ia(3,n,n.return),il(3,n),Ia(5,n,n.return));break;case 1:Fe(e,n,t),We(n),i&512&&(Jn||a===null||Ie(a,a.return)),i&64&&ze&&(n=n.updateQueue,n!==null&&(e=n.callbacks,e!==null&&(t=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=t===null?e:t.concat(e))));break;case 26:if(l=Bt,Fe(e,n,t),We(n),i&512&&(Jn||a===null||Ie(a,a.return)),i&4)if(i=a!==null?a.memoizedState:null,t=n.memoizedState,a===null)if(t===null)if(n.stateNode===null)if(ze)n.stateNode=Nm(n.type,n.memoizedProps,e.containerInfo,n);else{n:{e=n.type,t=n.memoizedProps,i=l.ownerDocument||l;e:switch(e){case"title":a=i.getElementsByTagName("title")[0],(!a||a[rt]||a[Me]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=i.createElement(e),i.head.insertBefore(a,i.querySelector("head > title"))),Ve(a,e,t),a[Me]=n,Te(a),e=a;break n;case"link":if(l=Pm("link","href",i).get(e+(t.href||""))){for(s=0;s<l.length;s++)if(a=l[s],a.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&a.getAttribute("rel")===(t.rel==null?null:t.rel)&&a.getAttribute("title")===(t.title==null?null:t.title)&&a.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){l.splice(s,1);break e}}a=i.createElement(e),Ve(a,e,t),i.head.appendChild(a);break;case"meta":if(l=Pm("meta","content",i).get(e+(t.content||""))){for(s=0;s<l.length;s++)if(a=l[s],a.getAttribute("content")===(t.content==null?null:""+t.content)&&a.getAttribute("name")===(t.name==null?null:t.name)&&a.getAttribute("property")===(t.property==null?null:t.property)&&a.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&a.getAttribute("charset")===(t.charSet==null?null:t.charSet)){l.splice(s,1);break e}}a=i.createElement(e),Ve(a,e,t),i.head.appendChild(a);break;default:throw Error(d(468,e))}a[Me]=n,Te(a),e=a}n.stateNode=e}else ze||Du(l,n.type,n.stateNode);else n.stateNode=Zm(l,t,n.memoizedProps);else i!==t?(i===null?(e=a.stateNode,e===null||Jn||e.parentNode.removeChild(e)):i.count--,t===null?ze||Du(l,n.type,n.stateNode):Zm(l,t,n.memoizedProps)):t===null&&n.stateNode!==null&&qc(n,n.memoizedProps,a.memoizedProps);break;case 27:Fe(e,n,t),We(n),i&512&&(Jn||a===null||Ie(a,a.return)),a!==null&&i&4&&qc(n,n.memoizedProps,a.memoizedProps);break;case 5:if(l=Pt,Pt=!1,Fe(e,n,t),Pt=l,We(n),i&512&&(Jn||a===null||Ie(a,a.return)),n.flags&32){e=n.stateNode;try{Di(e,""),Hn=!0}catch(O){Wn(n,n.return,O)}}i&4&&n.stateNode!=null&&(e=n.memoizedProps,qc(n,e,a!==null?a.memoizedProps:e)),i&1024&&(Jc=!0);break;case 6:if(Fe(e,n,t),We(n),i&4){if(n.stateNode===null)throw Error(d(162));e=n.memoizedProps,t=n.stateNode;try{t.nodeValue=e,Hn=!0}catch(O){Wn(n,n.return,O)}}break;case 3:if(Hn=!1,Zs=null,l=Bt,Bt=gl(e.containerInfo),Fe(e,n,t),Bt=l,We(n),i&4&&a!==null&&a.memoizedState.isDehydrated)try{vr(e.containerInfo)}catch(O){Wn(n,n.return,O)}Jc&&(Jc=!1,Vh(n)),Hn=!1;break;case 4:i=Pt,Pt=ze,a=je(),l=Bt,Bt=gl(n.stateNode.containerInfo),Fe(e,n,t),We(n),Bt=l,Hn&&ll&&(Cs=!0),Hn=a,Pt=i;break;case 12:Fe(e,n,t),We(n);break;case 31:Fe(e,n,t),We(n),i&4&&(e=n.updateQueue,e!==null&&(n.updateQueue=null,Ls(n,e)));break;case 13:Fe(e,n,t),We(n),n.child.flags&8192&&n.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Bs=Xe()),i&4&&(e=n.updateQueue,e!==null&&(n.updateQueue=null,Ls(n,e)));break;case 22:l=n.memoizedState!==null,s=a!==null&&a.memoizedState!==null;var c=ze,f=Jn,S=Pt;ze=c||l,Pt=S||l,Jn=f||s,Fe(e,n,t),Jn=f,Pt=S,ze=c,We(n),i&8192&&(e=n.stateNode,e._visibility=l?e._visibility&-2:e._visibility|1,!l||a===null||s||ze||Jn||(e=s||Jn,t=ze,a=Jn,ze=l||ze,Jn=e,Va(n,2),ze=t,Jn=a),!l&&Pt||Pc(n,l)),i&4&&(e=n.updateQueue,e!==null&&(t=e.retryQueue,t!==null&&(e.retryQueue=null,Ls(n,t))));break;case 19:Fe(e,n,t),We(n),i&4&&(e=n.updateQueue,e!==null&&(n.updateQueue=null,Ls(n,e)));break;case 30:i&512&&(Jn||a===null||Ie(a,a.return)),i=je(),l=ll,s=(t&335544064)===t,c=n.memoizedProps,ll=s&&ua(c.default,c.update)!=="none",Fe(e,n,t),We(n),s&&a!==null&&Hn&&(n.flags|=4),ll=l,Hn=i;break;case 21:break;case 7:i&512&&(Jn||a===null||Ie(a,a.return)),a&&a.stateNode!==null&&(a.stateNode._fragmentFiber=n);default:Fe(e,n,t),We(n)}}function We(n){var e=n.flags;if(e&2){try{for(var t,a=n.return;a!==null;){if(Oh(a)){t=a;break}a=a.return}a=null;for(var i=n.return;i!==null;){if(Uc(i)){var l=i.stateNode;a===null?a=[l]:a.push(l)}if(Bc(i))break;i=i.return}var s=a;if(t==null)throw Error(d(160));switch(t.tag){case 27:var c=t.stateNode,f=Gc(n);Os(n,f,c,s);break;case 5:var S=t.stateNode;t.flags&32&&(Di(S,""),t.flags&=-33);var O=Gc(n);Os(n,O,S,s);break;case 3:case 4:var C=t.stateNode.containerInfo,x=Gc(n);Yc(n,x,C,s);break;default:throw Error(d(161))}}catch(N){Wn(n,n.return,N)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Vh(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var e=n;Vh(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,br=!0,e.reset(),br=!1),n=n.sibling}}function nr(n,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)Kh(e,n),e=e.sibling;else Dh(e)}function Kh(n,e){var t=n.alternate;if(t===null)Ic(n,!1);else switch(n.tag){case 3:if(Zc=Ft=!1,Mh(),nr(e,n),!Ft&&!Cs){if(n=Jt,n!==null)for(var a=0;a<n.length;a+=3){t=n[a];var i=n[a+1];Cm(t,n[a+2]),t=t.ownerDocument.documentElement,t!==null&&t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+i+")"})}n=e.containerInfo,n=n.nodeType===9?n.documentElement:n.ownerDocument.documentElement,n!==null&&n.style.viewTransitionName===""&&(n.style.viewTransitionName="none",n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),n.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Zc=!0}Jt=null;break;case 5:nr(e,n);break;case 4:a=Ft,Ft=!1,nr(e,n),Ft&&(Cs=!0),Ft=a;break;case 22:n.memoizedState===null&&(t.memoizedState!==null?Ic(n,!1):nr(e,n));break;case 30:a=Ft,i=Mh(),Ft=!1,nr(e,n),Ft&&(n.flags|=4);var l=n.memoizedProps,s=n.stateNode;e=ca(l,s),s=ca(t.memoizedProps,s);var c=ua(l.default,l.update);c==="none"?e=!1:(l=t.memoizedState,t.memoizedState=null,t=n.child,st=0,e=Xc(n,t,e,s,c,l,!0),st!==(l===null?0:l.length)&&(n.flags|=32)),(n.flags&4)!==0&&e?(sr(n,n.memoizedProps.onUpdate),Jt=i):i!==null&&(i.push.apply(i,Jt),Jt=i),Ft=(n.flags&32)!==0?!0:a;break;default:nr(e,n)}}function Wt(n,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Bh(n,e.alternate,e),e=e.sibling}function Va(n,e){for(n=n.child;n!==null;){var t=n,a=e;switch(t.tag){case 0:case 11:case 14:case 15:Ia(4,t,t.return),Va(t,a);break;case 1:Ie(t,t.return);var i=t.stateNode;typeof i.componentWillUnmount=="function"&&Nh(t,t.return,i),Va(t,a);break;case 27:(a&2)!==0&&Vm(t.stateNode,t.type,t.memoizedProps);case 5:Ie(t,t.return),t.tag!==5&&t.tag!==27||rl(t),Va(t,a);break;case 6:rl(t);break;case 26:Ie(t,t.return),i=t.stateNode,t.memoizedState!==null||i===null||Jn||i.parentNode.removeChild(i),Va(t,a);break;case 22:t.memoizedState===null&&Va(t,a);break;case 30:Ie(t,t.return),Va(t,a);break;case 7:Ie(t,t.return);default:Va(t,a)}n=n.sibling}}function Ut(n,e,t){for(t=(e.subtreeFlags&8772)!==0?t:t&-2,e=e.child;e!==null;){var a=e.alternate,i=n,l=e,s=l.flags,c=(t&1)!==0;switch(l.tag){case 0:case 11:case 15:Ut(i,l,t),il(4,l);break;case 1:if(Ut(i,l,t),a=l,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(O){Wn(a,a.return,O)}if(a=l,i=a.updateQueue,i!==null){var f=a.stateNode;try{var S=i.shared.hiddenCallbacks;if(S!==null)for(i.shared.hiddenCallbacks=null,i=0;i<S.length;i++)hf(S[i],f)}catch(O){Wn(a,a.return,O)}}c&&s&64&&wh(l),Xt(l,l.return);break;case 27:(t&2)!==0&&Ah(l);case 5:l.tag!==5&&l.tag!==27||Eh(l),Ut(i,l,t),c&&a===null&&s&4&&Hc(l),Xt(l,l.return);break;case 6:Eh(l);break;case 26:f=l.stateNode,l.memoizedState!==null||f===null||ze||Du(gl(f.ownerDocument),l.type,f),Ut(i,l,t),c&&a===null&&s&4&&Hc(l),Xt(l,l.return);break;case 12:Ut(i,l,t);break;case 31:Ut(i,l,t),c&&s&4&&Gh(i,l);break;case 13:Ut(i,l,t),c&&s&4&&Yh(i,l);break;case 22:l.memoizedState===null&&Ut(i,l,t),Xt(l,l.return);break;case 30:Ut(i,l,t),Xt(l,l.return);break;case 7:Xt(l,l.return);default:Ut(i,l,t)}e=e.sibling}}function Wc(n,e){var t=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==t&&(n!=null&&n.refCount++,t!=null&&Kr(t))}function $c(n,e){n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&Kr(n))}function At(n,e,t,a){var i=(t&335544064)===t;if(e.subtreeFlags&(i?10262:10256))for(e=e.child;e!==null;)Qh(n,e,t,a),e=e.sibling;else i&&Lh(e)}function Qh(n,e,t,a){var i=(t&335544064)===t;i&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&Ms(e);var l=e.flags;switch(e.tag){case 0:case 11:case 15:At(n,e,t,a),l&2048&&il(9,e);break;case 1:At(n,e,t,a);break;case 3:At(n,e,t,a),i&&Zc&&(n=n.containerInfo,n=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,n.style.viewTransitionName==="root"&&(n.style.viewTransitionName=""),n=n.ownerDocument.documentElement,n!==null&&n.style.viewTransitionName==="none"&&(n.style.viewTransitionName="")),l&2048&&(l=null,e.alternate!==null&&(l=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==l&&(e.refCount++,l!=null&&Kr(l)));break;case 12:if(l&2048){At(n,e,t,a),l=e.stateNode;try{var s=e.memoizedProps,c=s.id,f=s.onPostCommit;typeof f=="function"&&f(c,e.alternate===null?"mount":"update",l.passiveEffectDuration,-0)}catch(S){Wn(e,e.return,S)}}else At(n,e,t,a);break;case 31:At(n,e,t,a);break;case 13:At(n,e,t,a);break;case 23:break;case 22:s=e.stateNode,c=e.alternate,e.memoizedState!==null?(i&&c!==null&&c.memoizedState===null&&Ms(c),s._visibility&2?At(n,e,t,a):sl(n,e)):(i&&c!==null&&c.memoizedState!==null&&Ms(e),s._visibility&2?At(n,e,t,a):(s._visibility|=2,er(n,e,t,a,(e.subtreeFlags&10256)!==0||!1))),l&2048&&Wc(c,e);break;case 24:At(n,e,t,a),l&2048&&$c(e.alternate,e);break;case 30:i&&(l=e.alternate,l!==null&&(Zt(l.child,!0),Zt(e.child,!0))),At(n,e,t,a);break;default:At(n,e,t,a)}}function er(n,e,t,a,i){for(i=i&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var l=n,s=e,c=t,f=a,S=s.flags;switch(s.tag){case 0:case 11:case 15:er(l,s,c,f,i),il(8,s);break;case 23:break;case 22:var O=s.stateNode;s.memoizedState!==null?O._visibility&2?er(l,s,c,f,i):sl(l,s):(O._visibility|=2,er(l,s,c,f,i)),i&&S&2048&&Wc(s.alternate,s);break;case 24:er(l,s,c,f,i),i&&S&2048&&$c(s.alternate,s);break;default:er(l,s,c,f,i)}e=e.sibling}}function sl(n,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var t=n,a=e,i=a.flags;switch(a.tag){case 22:sl(t,a),i&2048&&Wc(a.alternate,a);break;case 24:sl(t,a),i&2048&&$c(a.alternate,a);break;default:sl(t,a)}e=e.sibling}}var _i=8192;function Si(n,e,t){if(n.subtreeFlags&_i)for(n=n.child;n!==null;)Xh(n,e,t),n=n.sibling}function Xh(n,e,t){switch(n.tag){case 26:Si(n,e,t),n.flags&_i&&(n.memoizedState!==null?Jy(t,Bt,n.memoizedState,n.memoizedProps):(n=n.stateNode,(e&335544128)===e&&ng(t,n)));break;case 5:Si(n,e,t),n.flags&_i&&(n=n.stateNode,(e&335544128)===e&&ng(t,n));break;case 3:case 4:var a=Bt;Bt=gl(n.stateNode.containerInfo),Si(n,e,t),Bt=a;break;case 22:n.memoizedState===null&&(a=n.alternate,a!==null&&a.memoizedState!==null?(a=_i,_i=16777216,Si(n,e,t),_i=a):Si(n,e,t));break;case 30:if((n.flags&_i)!==0&&(a=n.memoizedProps.name,a!=null&&a!=="auto")){var i=n.stateNode;i.paired=null,gt===null&&(gt=new Map),gt.set(a,i)}Si(n,e,t);break;default:Si(n,e,t)}}function Jh(n){var e=n.alternate;if(e!==null&&(n=e.child,n!==null)){e.child=null;do e=n.sibling,n.sibling=null,n=e;while(n!==null)}}function ol(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var a=e[t];Be=a,Ph(a,n)}Jh(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Zh(n),n=n.sibling}function Zh(n){switch(n.tag){case 0:case 11:case 15:ol(n),n.flags&2048&&Ia(9,n,n.return);break;case 3:ol(n);break;case 12:ol(n);break;case 22:var e=n.stateNode;n.memoizedState!==null&&e._visibility&2&&(n.return===null||n.return.tag!==13)?(e._visibility&=-3,Ds(n)):ol(n);break;default:ol(n)}}function Ds(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var a=e[t];Be=a,Ph(a,n)}Jh(n)}for(n=n.child;n!==null;){switch(e=n,e.tag){case 0:case 11:case 15:Ia(8,e,e.return),Ds(e);break;case 22:t=e.stateNode,t._visibility&2&&(t._visibility&=-3,Ds(e));break;default:Ds(e)}n=n.sibling}}function Ph(n,e){for(;Be!==null;){var t=Be;switch(t.tag){case 0:case 11:case 15:Ia(8,t,e);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Kr(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,Be=a;else n:for(t=n;Be!==null;){a=Be;var i=a.sibling,l=a.return;if(Hh(a),a===t){Be=null;break n}if(i!==null){i.return=l,Be=i;break n}Be=l}}}var I0={getCacheForType:function(n){var e=qe(we),t=e.data.get(n);return t===void 0&&(t=n(),e.data.set(n,t)),t},cacheSignal:function(){return qe(we).controller.signal}},V0=typeof WeakMap=="function"?WeakMap:Map,Vn=0,ie=null,Ln=null,zn=0,Fn=0,pt=null,Ka=!1,tr=!1,nu=!1,ya=0,pe=0,Qa=0,Ti=0,zs=0,bt=0,ar=0,cl=null,ct=null,eu=!1,Bs=0,Fh=0,Us=1/0,Hs=null,Xa=null,he=0,Ht=null,ji=null,$t=0,tu=0,au=null,Wh=null,ir=null,rr=null,lr=null,ul=0,qs=null;function vt(){return(Vn&2)!==0&&zn!==0?zn&-zn:an.T!==null?hu():Ll()}function $h(){if(bt===0)if((zn&536870912)===0||kn){var n=wa;wa<<=1,(wa&3932160)===0&&(wa=262144),bt=n}else bt=536870912;return n=Ge.current,n!==null&&(n.flags|=32),bt}function sr(n,e){if(e!=null){var t=n.stateNode,a=t.ref;a===null&&(a=t.ref=Rm(ca(n.memoizedProps,t))),rr===null&&(rr=[]),rr.push(e.bind(null,a))}}function ut(n,e,t){(n===ie&&(Fn===2||Fn===9)||n.cancelPendingCommit!==null)&&(or(n,0),Ja(n,zn,bt,!1)),ri(n,t),((Vn&2)===0||n!==ie)&&(n===ie&&((Vn&2)===0&&(Ti|=t),pe===4&&Ja(n,zn,bt,!1)),na(n))}function nm(n,e,t){if((Vn&6)!==0)throw Error(d(327));var a=!t&&(e&127)===0&&(e&n.expiredLanes)===0||ii(n,e),i=a?X0(n,e):ru(n,e,!0),l=a;do{if(i===0){tr&&!a&&Ja(n,e,0,!1);break}else{if(t=n.current.alternate,l&&!K0(t)){i=ru(n,e,!1),l=!1;continue}if(i===2){if(l=e,n.errorRecoveryDisabledLanes&l)var s=0;else s=n.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;n:{var c=n;i=cl;var f=c.current.memoizedState.isDehydrated;if(f&&(or(c,s).flags|=256),s=ru(c,s,!1),s!==2&&s!==6){if(nu&&!f){c.errorRecoveryDisabledLanes|=l,Ti|=l,i=4;break n}l=ct,ct=i,l!==null&&(ct===null?ct=l:ct.push.apply(ct,l))}i=s}if(l=!1,i!==2)continue}}if(i===1){or(n,0),Ja(n,e,0,!0);break}n:{switch(a=n,l=i,l){case 0:case 1:throw Error(d(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:Ja(a,e,bt,!Ka);break n;case 2:ct=null;break;case 3:case 5:break;default:throw Error(d(329))}if((e&62914560)===e&&(i=Bs+300-Xe(),10<i)){if(Ja(a,e,bt,!Ka),Ea(a,0,!0)!==0)break n;$t=e,a.timeoutHandle=ju(em.bind(null,a,t,ct,Hs,eu,e,bt,Ti,ar,Ka,l,"Throttled",-0,0),i);break n}em(a,t,ct,Hs,eu,e,bt,Ti,ar,Ka,l,null,-0,0)}}break}while(!0);na(n)}function em(n,e,t,a,i,l,s,c,f,S,O,C,x,N){n.timeoutHandle=-1;var Q=e.subtreeFlags,rn=(l&335544064)===l;if(C=null,(rn||Q&8192||(Q&16785408)===16785408)&&(C={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Vt},gt=null,Xh(e,l,C),rn&&(Q=C,rn=n.containerInfo,rn=(rn.nodeType===9?rn:rn.ownerDocument).__reactViewTransition,rn!=null&&(Q.count++,Q.waitingForViewTransition=!0,Q=vl.bind(Q),rn.finished.then(Q,Q))),Q=(l&62914560)===l?Bs-Xe():(l&4194048)===l?Fh-Xe():0,Q=Zy(C,Q),Q!==null)){$t=l,n.cancelPendingCommit=Q(cm.bind(null,n,e,l,t,a,i,s,c,f,S,O,C,null,x,N)),Ja(n,l,s,!S);return}cm(n,e,l,t,a,i,s,c,f,S,O,C)}function K0(n){for(var e=n;;){var t=e.tag;if((t===0||t===11||t===15)&&e.flags&16384&&(t=e.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var i=t[a],l=i.getSnapshot;i=i.value;try{if(!ht(l(),i))return!1}catch{return!1}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ja(n,e,t,a){e=Cl(n,e),e&=~zs,e&=~Ti,n.suspendedLanes|=e,n.pingedLanes&=~e,a&&(n.warmLanes|=e),a=n.expirationTimes;for(var i=e;0<i;){var l=31-K(i),s=1<<l;a[l]=-1,i&=~s}t!==0&&Rl(n,t,e)}function Gs(){return(Vn&6)===0?(dl(0),!1):!0}function iu(){if(Ln!==null){if(Fn===0)var n=Ln.return;else n=Ln,ha=di=null,fc(n),Ji=null,Jr=0,n=Ln;for(;n!==null;)jh(n.alternate,n),n=n.return;Ln=null}}function or(n,e){var t=n.timeoutHandle;return t!==-1&&(n.timeoutHandle=-1,gy(t)),t=n.cancelPendingCommit,t!==null&&(n.cancelPendingCommit=null,t()),$t=0,iu(),ie=n,Ln=t=da(n.current,null),zn=e,Fn=0,pt=null,Ka=!1,tr=ii(n,e),nu=!1,ar=bt=zs=Ti=Qa=pe=0,ct=cl=null,eu=!1,ya=Cl(n,e),Zl(),t}function tm(n,e){Nn=null,an.H=xs,e===Xi||e===ls?(e=cf(),Fn=3):e===$o?(e=cf(),Fn=4):Fn=e===Ec?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,pt=e,Ln===null&&(pe=1,_s(n,wt(e,n.current)))}function am(){var n=Ge.current;return n===null?!0:(zn&4194048)===zn?Je===null:(zn&62914560)===zn||(zn&536870912)!==0?n===Je:!1}function im(){var n=an.H;return an.H=xs,n===null?xs:n}function rm(){var n=an.A;return an.A=I0,n}function Ys(){pe=4,Ka||(zn&4194048)!==zn&&Ge.current!==null||(tr=!0),(Qa&134217727)===0&&(Ti&134217727)===0||ie===null||Ja(ie,zn,bt,!1)}function ru(n,e,t){var a=Vn;Vn|=2;var i=im(),l=rm();(ie!==n||zn!==e)&&(Hs=null,or(n,e)),e=!1;var s=pe;n:do try{if(Fn!==0&&Ln!==null){var c=Ln,f=pt;switch(Fn){case 8:iu(),s=6;break n;case 3:case 2:case 9:case 6:Ge.current===null&&(e=!0);var S=Fn;if(Fn=0,pt=null,cr(n,c,f,S),t&&tr){s=0;break n}break;default:S=Fn,Fn=0,pt=null,cr(n,c,f,S)}}Q0(),s=pe;break}catch(O){tm(n,O)}while(!0);return e&&n.shellSuspendCounter++,ha=di=null,Vn=a,an.H=i,an.A=l,Ln===null&&(ie=null,zn=0,Zl()),s}function Q0(){for(;Ln!==null;)lm(Ln)}function X0(n,e){var t=Vn;Vn|=2;var a=im(),i=rm();ie!==n||zn!==e?(Hs=null,Us=Xe()+500,or(n,e)):tr=ii(n,e);n:do try{if(Fn!==0&&Ln!==null){e=Ln;var l=pt;e:switch(Fn){case 1:Fn=0,pt=null,cr(n,e,l,1);break;case 2:case 9:if(sf(l)){Fn=0,pt=null,sm(e);break}e=function(){Fn!==2&&Fn!==9||ie!==n||(Fn=7),na(n)},l.then(e,e);break n;case 3:Fn=7;break n;case 4:Fn=5;break n;case 7:sf(l)?(Fn=0,pt=null,sm(e)):(Fn=0,pt=null,cr(n,e,l,7));break;case 5:var s=null;switch(Ln.tag){case 26:s=Ln.memoizedState;case 5:case 27:var c=Ln;if(s?Wm(s):c.stateNode.complete){Fn=0,pt=null;var f=c.sibling;if(f!==null)Ln=f;else{var S=c.return;S!==null?(Ln=S,Is(S)):Ln=null}break e}}Fn=0,pt=null,cr(n,e,l,5);break;case 6:Fn=0,pt=null,cr(n,e,l,6);break;case 8:iu(),pe=6;break n;default:throw Error(d(462))}}J0();break}catch(O){tm(n,O)}while(!0);return ha=di=null,an.H=a,an.A=i,Vn=t,Ln!==null?0:(ie=null,zn=0,Zl(),pe)}function J0(){for(;Ln!==null&&!vo();)lm(Ln)}function lm(n){var e=Sh(n.alternate,n,ya);n.memoizedProps=n.pendingProps,e===null?Is(n):Ln=e}function sm(n){var e=n,t=e.alternate;switch(e.tag){case 15:case 0:e=gh(t,e,e.pendingProps,e.type,void 0,zn);break;case 11:e=gh(t,e,e.pendingProps,e.type.render,e.ref,zn);break;case 5:fc(e);var a=e;a===De&&(kn?(es(a),a.tag===5&&a.stateNode!=null&&(le=a.stateNode)):(es(a),kn=!0));default:jh(t,e),e=Ln=Zd(e,ya),e=Sh(t,e,ya)}n.memoizedProps=n.pendingProps,e===null?Is(n):Ln=e}function cr(n,e,t,a){ha=di=null,fc(e),Ji=null,Jr=0;var i=e.return;try{if(D0(n,i,e,t,zn)){pe=1,_s(n,wt(t,n.current)),Ln=null;return}}catch(l){if(i!==null)throw Ln=i,l;pe=1,_s(n,wt(t,n.current)),Ln=null;return}e.flags&32768?(kn||a===1?n=!0:tr||(zn&536870912)!==0?n=!1:(Ka=n=!0,(a===2||a===9||a===3||a===6)&&(a=Ge.current,a!==null&&a.tag===13&&(a.flags|=16384))),om(e,n)):Is(e)}function Is(n){var e=n;do{if((e.flags&32768)!==0){om(e,Ka);return}n=e.return;var t=H0(e.alternate,e,ya);if(t!==null){Ln=t;return}if(e=e.sibling,e!==null){Ln=e;return}Ln=e=n}while(e!==null);pe===0&&(pe=5)}function om(n,e){do{var t=q0(n.alternate,n);if(t!==null){t.flags&=32767,Ln=t;return}if(t=n.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!e&&(n=n.sibling,n!==null)){Ln=n;return}Ln=n=t}while(n!==null);pe=6,Ln=null}function cm(n,e,t,a,i,l,s,c,f,S,O,C){n.cancelPendingCommit=null;do Vs();while(he!==0);if((Vn&6)!==0)throw Error(d(327));if(e!==null){if(e===n.current)throw Error(d(177));n===ie&&(Ln=ie=null,zn=0),ji=e,Ht=n,$t=t,au=i,Wh=a,Z0(n,e,t,s,c,f,C)}}function Z0(n,e,t,a,i,l,s){var c=e.lanes|e.childLanes;if(tu=c,c|=qo,xo(n,t,c,a,i,l),rr=null,(t&335544064)===t?(lr=T0(n),a=10262):(lr=null,a=10256),(e.subtreeFlags&a)!==0||(e.flags&a)!==0?(n.callbackNode=null,n.callbackPriority=0,ey(Rt,function(){return cu(),null})):(n.callbackNode=null,n.callbackPriority=0),As=!1,a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=an.T,an.T=null,i=fn.p,fn.p=2,l=Vn,Vn|=4;try{G0(n,e,t)}finally{Vn=l,fn.p=i,an.T=a}}he=1,As?ir=_y(s,n.containerInfo,lr,lu,su,F0,ou,cu,P0):(lu(),su(),ou())}function P0(n){if(he!==0){var e=Ht.onRecoverableError;e(n,{componentStack:null})}}function F0(){he===3&&(he=0,Kh(ji,Ht),he=4)}function lu(){if(he===1){he=0;var n=Ht,e=ji,t=$t,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=an.T,an.T=null;var i=fn.p;fn.p=2;var l=Vn;Vn|=4;try{ll=Cs=!1,Ih(e,n,t),t=_u;var s=Hd(n.containerInfo),c=t.focusedElem,f=t.selectionRange;if(s!==c&&c&&c.ownerDocument&&Ud(c.ownerDocument.documentElement,c)){if(f!==null&&Do(c)){var S=f.start,O=f.end;if(O===void 0&&(O=S),"selectionStart"in c)c.selectionStart=S,c.selectionEnd=Math.min(O,c.value.length);else{var C=c.ownerDocument||document,x=C&&C.defaultView||window;if(x.getSelection){var N=x.getSelection(),Q=c.textContent.length,rn=Math.min(f.start,Q),En=f.end===void 0?rn:Math.min(f.end,Q);!N.extend&&rn>En&&(s=En,En=rn,rn=s);var _=Bd(c,rn),b=Bd(c,En);if(_&&b&&(N.rangeCount!==1||N.anchorNode!==_.node||N.anchorOffset!==_.offset||N.focusNode!==b.node||N.focusOffset!==b.offset)){var w=C.createRange();w.setStart(_.node,_.offset),N.removeAllRanges(),rn>En?(N.addRange(w),N.extend(b.node,b.offset)):(w.setEnd(b.node,b.offset),N.addRange(w))}}}}for(C=[],N=c;N=N.parentNode;)N.nodeType===1&&C.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<C.length;c++){var k=C[c];k.element.scrollLeft=k.left,k.element.scrollTop=k.top}}br=!!xu,_u=xu=null}finally{Vn=l,fn.p=i,an.T=a}}n.current=e,he=2}}function su(){if(he===2){he=0;var n=Ht,e=ji,t=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||t){t=an.T,an.T=null;var a=fn.p;fn.p=2;var i=Vn;Vn|=4;try{Bh(n,e.alternate,e)}finally{Vn=i,fn.p=a,an.T=t}}he=3}}function ou(){if(he===4||he===3){he=0;var n=ir;ir=null,Or();var e=Ht,t=ji,a=$t,i=Wh,l=(a&335544064)===a?10262:10256;if((t.subtreeFlags&l)!==0||(t.flags&l)!==0?he=5:(he=0,ji=Ht=null,um(e,e.pendingLanes)),l=e.pendingLanes,l===0&&(Xa=null),Cr(a),t=t.stateNode,Un&&typeof Un.onCommitFiberRoot=="function")try{Un.onCommitFiberRoot(ae,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=an.T,l=fn.p,fn.p=2,an.T=null;try{for(var s=e.onRecoverableError,c=0;c<i.length;c++){var f=i[c];s(f.value,{componentStack:f.stack})}}finally{an.T=t,fn.p=l}}if(i=rr,s=lr,lr=null,i!==null&&(rr=null,s===null&&(s=[]),n!==null))for(f=0;f<i.length;f++)t=(0,i[f])(s),t!==void 0&&n.finished.finally(t);($t&3)!==0&&Vs(),na(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===qs?ul++:(ul=0,qs=e):(ul=0,qs=null),dl(0)}}function um(n,e){(n.pooledCacheLanes&=e)===0&&(e=n.pooledCache,e!=null&&(n.pooledCache=null,Kr(e)))}function Vs(){return ir!==null&&(ir.skipTransition(),ir=null),lu(),su(),ou(),cu()}function cu(){if(he!==5)return!1;var n=Ht,e=tu;tu=0;var t=Cr($t),a=an.T,i=fn.p;try{fn.p=32>t?32:t,an.T=null,t=au,au=null;var l=Ht,s=$t;if(he=0,ji=Ht=null,$t=0,(Vn&6)!==0)throw Error(d(331));var c=Vn;if(Vn|=4,Zh(l.current),Qh(l,l.current,s,t),Vn=c,dl(0,!1),Un&&typeof Un.onPostCommitFiberRoot=="function")try{Un.onPostCommitFiberRoot(ae,l)}catch{}return!0}finally{fn.p=i,an.T=a,um(n,e)}}function dm(n,e,t){e=wt(t,e),e=Nc(n.stateNode,e,2),n=Ha(n,e,2),n!==null&&(ri(n,2),na(n))}function Wn(n,e,t){if(n.tag===3)dm(n,n,t);else for(;e!==null;){if(e.tag===3){dm(e,n,t);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Xa===null||!Xa.has(a))){n=wt(t,n),t=sh(2),a=Ha(e,t,2),a!==null&&(oh(t,a,e,n),ri(a,2),na(a));break}}e=e.return}}function uu(n,e,t){var a=n.pingCache;if(a===null){a=n.pingCache=new V0;var i=new Set;a.set(e,i)}else i=a.get(e),i===void 0&&(i=new Set,a.set(e,i));i.has(t)||(nu=!0,i.add(t),n=W0.bind(null,n,e,t),e.then(n,n))}function W0(n,e,t){var a=n.pingCache;a!==null&&a.delete(e),n.pingedLanes|=n.suspendedLanes&t,n.warmLanes&=~t,ie===n&&(zn&t)===t&&((pe===4||pe===3&&(zn&62914560)===zn&&300>Xe()-Bs)&&(Vn&2)===0?or(n,0):zs|=t,ar===zn&&(ar=0)),na(n)}function fm(n,e){e===0&&(e=kr()),n=oi(n,e),n!==null&&(ri(n,e),na(n))}function $0(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),fm(n,t)}function ny(n,e){var t=0;switch(n.tag){case 31:case 13:var a=n.stateNode,i=n.memoizedState;i!==null&&(t=i.retryLane);break;case 19:a=n.stateNode;break;case 22:a=n.stateNode._retryCache;break;default:throw Error(d(314))}a!==null&&a.delete(e),fm(n,t)}function ey(n,e){return Nr(n,e)}var ur=null,dr=null,du=!1,Ks=!1,fu=!1,Za=0;function na(n){n!==dr&&n.next===null&&(dr===null?ur=dr=n:dr=dr.next=n),Ks=!0,du||(du=!0,ay())}function dl(n,e){if(!fu&&Ks){fu=!0;do for(var t=!1,a=ur;a!==null;){if(n!==0){var i=a.pendingLanes;if(i===0)var l=0;else{var s=a.suspendedLanes,c=a.pingedLanes;l=(1<<31-K(42|n)+1)-1,l&=i&~(s&~c),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(t=!0,pm(a,l))}else l=zn,l=Ea(a,a===ie?l:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(l&3)===0||ii(a,l)||(t=!0,pm(a,l));a=a.next}while(t);fu=!1}}function ty(){hm()}function hm(){Ks=du=!1;var n=0;Za!==0&&my()&&(n=Za);for(var e=Xe(),t=null,a=ur;a!==null;){var i=a.next,l=mm(a,e);l===0?(a.next=null,t===null?ur=i:t.next=i,i===null&&(dr=t)):(t=a,(n!==0||(l&3)!==0)&&(Ks=!0)),a=i}he!==0&&he!==5||dl(n),Za!==0&&(Za=0)}function mm(n,e){for(var t=n.suspendedLanes,a=n.pingedLanes,i=n.expirationTimes,l=n.pendingLanes&-62914561;0<l;){var s=31-K(l),c=1<<s,f=i[s];f===-1?((c&t)===0||(c&a)!==0)&&(i[s]=yo(c,e)):f<=e&&(n.expiredLanes|=c),l&=~c}if(e=ie,t=zn,t=Ea(n,n===e?t:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),a=n.callbackNode,t===0||n===e&&(Fn===2||Fn===9)||n.cancelPendingCommit!==null)return a!==null&&a!==null&&Er(a),n.callbackNode=null,n.callbackPriority=0;if((t&3)===0||ii(n,t)){if(e=t&-t,e===n.callbackPriority)return e;switch(a!==null&&Er(a),Cr(t)){case 2:case 8:t=Ar;break;case 32:t=Rt;break;case 268435456:t=L;break;default:t=Rt}return a=gm.bind(null,n),t=Nr(t,a),n.callbackPriority=e,n.callbackNode=t,e}return a!==null&&a!==null&&Er(a),n.callbackPriority=2,n.callbackNode=null,2}function gm(n,e){if(he!==0&&he!==5)return n.callbackNode=null,n.callbackPriority=0,null;var t=n.callbackNode;if(Vs()&&n.callbackNode!==t)return null;var a=zn;return a=Ea(n,n===ie?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),a===0?null:(nm(n,a,e),mm(n,Xe()),n.callbackNode!=null&&n.callbackNode===t?gm.bind(null,n):null)}function pm(n,e){if(Vs())return null;nm(n,e,!0)}function ay(){py(function(){(Vn&6)!==0?Nr(Ml,ty):hm()})}function hu(){if(Za===0){var n=mi;n===0&&(n=It,It<<=1,(It&261888)===0&&(It=256)),Za=n}return Za}function bm(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Gl(n)}function iy(n,e,t,a,i){if(e==="submit"&&t&&t.stateNode===i){var l=bm((i[U]||null).action),s=a.submitter;s&&(e=(e=s[U]||null)?bm(e.formAction):s.getAttribute("formAction"),e!==null&&(l=e,s=null));var c=new Kl("action","action",null,a,i);n.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Za!==0){var f=new FormData(i,s);_c(t,{pending:!0,data:f,method:i.method,action:l},null,f)}}else typeof l=="function"&&(c.preventDefault(),f=new FormData(i,s),_c(t,{pending:!0,data:f,method:i.method,action:l},l,f))},currentTarget:i}]})}}for(var mu=0;mu<Ho.length;mu++){var gu=Ho[mu],ry=gu.toLowerCase(),ly=gu[0].toUpperCase()+gu.slice(1);Dt(ry,"on"+ly)}Dt(Yd,"onAnimationEnd"),Dt(Id,"onAnimationIteration"),Dt(Vd,"onAnimationStart"),Dt("dblclick","onDoubleClick"),Dt("focusin","onFocus"),Dt("focusout","onBlur"),Dt(g0,"onTransitionRun"),Dt(p0,"onTransitionStart"),Dt(b0,"onTransitionCancel"),Dt(Kd,"onTransitionEnd"),la("onMouseEnter",["mouseout","mouseover"]),la("onMouseLeave",["mouseout","mouseover"]),la("onPointerEnter",["pointerout","pointerover"]),la("onPointerLeave",["pointerout","pointerover"]),St("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),St("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),St("onBeforeInput",["compositionend","keypress","textInput","paste"]),St("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),St("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),St("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fl));function vm(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var a=n[t],i=a.event;a=a.listeners;n:{var l=void 0;if(e)for(var s=a.length-1;0<=s;s--){var c=a[s],f=c.instance,S=c.currentTarget;if(c=c.listener,f!==l&&i.isPropagationStopped())break n;l=c,i.currentTarget=S;try{l(i)}catch(O){Jl(O)}i.currentTarget=null,l=f}else for(s=0;s<a.length;s++){if(c=a[s],f=c.instance,S=c.currentTarget,c=c.listener,f!==l&&i.isPropagationStopped())break n;l=c,i.currentTarget=S;try{l(i)}catch(O){Jl(O)}i.currentTarget=null,l=f}}}}function Dn(n,e){var t=e[Cn];t===void 0&&(t=e[Cn]=new Set);var a=n+"__bubble";t.has(a)||(ym(e,n,2,!1),t.add(a))}function pu(n,e,t){var a=0;e&&(a|=4),ym(t,n,a,e)}var Qs="_reactListening"+Math.random().toString(36).slice(2);function bu(n){if(!n[Qs]){n[Qs]=!0,Bl.forEach(function(t){t!=="selectionchange"&&(sy.has(t)||pu(t,!1,n),pu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Qs]||(e[Qs]=!0,pu("selectionchange",!1,e))}}function ym(n,e,t,a){switch(og(e)){case 2:var i=$y;break;case 8:i=nx;break;default:i=Bu}t=i.bind(null,e,t,n),i=void 0,!wo||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),a?i!==void 0?n.addEventListener(e,t,{capture:!0,passive:i}):n.addEventListener(e,t,!0):i!==void 0?n.addEventListener(e,t,{passive:i}):n.addEventListener(e,t,!1)}function vu(n,e,t,a,i){var l=a;if((e&1)===0&&(e&2)===0&&a!==null)n:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var c=a.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=a.return;s!==null;){var f=s.tag;if((f===3||f===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Le(c),s===null)return;if(f=s.tag,f===5||f===6||f===26||f===27){a=l=s;continue n}c=c.parentNode}}a=a.return}vd(function(){var S=l,O=To(t),C=[];n:{var x=Qd.get(n);if(x!==void 0){var N=Kl,Q=n;switch(n){case"keypress":if(Il(t)===0)break n;case"keydown":case"keyup":N=K1;break;case"focusin":Q="focus",N=Ao;break;case"focusout":Q="blur",N=Ao;break;case"beforeblur":case"afterblur":N=Ao;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=_d;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=R1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=P1;break;case Yd:case Id:case Vd:N=z1;break;case Kd:N=W1;break;case"scroll":case"scrollend":N=M1;break;case"wheel":N=n0;break;case"copy":case"cut":case"paste":N=U1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Td;break;case"submit":N=J1;break;case"toggle":case"beforetoggle":N=t0}var rn=(e&4)!==0,En=!rn&&(n==="scroll"||n==="scrollend"),_=rn?x!==null?x+"Capture":null:x;rn=[];for(var b=S,w;b!==null;){var k=b;if(w=k.stateNode,k=k.tag,k!==5&&k!==26&&k!==27||w===null||_===null||(k=Lr(b,_),k!=null&&rn.push(hl(b,k,w))),En)break;b=b.return}0<rn.length&&(x=new N(x,Q,null,t,O),C.push({event:x,listeners:rn}))}}if((e&7)===0){n:{if(N=n==="mouseover"||n==="pointerover",x=n==="mouseout"||n==="pointerout",N&&t!==So&&(Q=t.relatedTarget||t.fromElement)&&(Le(Q)||Q[ln]))break n;(x||N)&&(Q=O.window===O?O:(N=O.ownerDocument)?N.defaultView||N.parentWindow:window,x?(N=t.relatedTarget||t.toElement,x=S,N=N?Le(N):null,N!==null&&(En=R(N),rn=N.tag,N!==En||rn!==5&&rn!==27&&rn!==6)&&(N=null)):(x=null,N=S),x!==N&&(rn=_d,k="onMouseLeave",_="onMouseEnter",b="mouse",(n==="pointerout"||n==="pointerover")&&(rn=Td,k="onPointerLeave",_="onPointerEnter",b="pointer"),En=x==null?Q:Aa(x),w=N==null?Q:Aa(N),Q=new rn(k,b+"leave",x,t,O),Q.target=En,Q.relatedTarget=w,k=null,Le(O)===S&&(rn=new rn(_,b+"enter",N,t,O),rn.target=w,rn.relatedTarget=En,k=rn),En=k,rn=x&&N?vn(x,N,oy):null,x!==null&&xm(C,Q,x,rn,!1),N!==null&&En!==null&&xm(C,En,N,rn,!0)))}n:{if(x=S?Aa(S):window,N=x.nodeName&&x.nodeName.toLowerCase(),N==="select"||N==="input"&&x.type==="file")var en=Md;else if(Ad(x))if(Cd)en=f0;else{en=u0;var Bn=c0}else N=x.nodeName,!N||N.toLowerCase()!=="input"||x.type!=="checkbox"&&x.type!=="radio"?S&&_o(S.elementType)&&(en=Md):en=d0;if(en&&(en=en(n,S))){kd(C,en,t,O);break n}Bn&&Bn(n,x,S)}switch(Bn=S?Aa(S):window,n){case"focusin":(Ad(Bn)||Bn.contentEditable==="true")&&(Hi=Bn,zo=S,Yr=null);break;case"focusout":Yr=zo=Hi=null;break;case"mousedown":Bo=!0;break;case"contextmenu":case"mouseup":case"dragend":Bo=!1,qd(C,t,O);break;case"selectionchange":if(m0)break;case"keydown":case"keyup":qd(C,t,O)}var cn;if(Mo)n:{switch(n){case"compositionstart":var hn="onCompositionStart";break n;case"compositionend":hn="onCompositionEnd";break n;case"compositionupdate":hn="onCompositionUpdate";break n}hn=void 0}else Ui?Ed(n,t)&&(hn="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(hn="onCompositionStart");hn&&(jd&&t.locale!=="ko"&&(Ui||hn!=="onCompositionStart"?hn==="onCompositionEnd"&&Ui&&(cn=yd()):(ka=O,No="value"in ka?ka.value:ka.textContent,Ui=!0)),Bn=Xs(S,hn),0<Bn.length&&(hn=new Sd(hn,n,null,t,O),C.push({event:hn,listeners:Bn}),cn?hn.data=cn:(cn=Od(t),cn!==null&&(hn.data=cn)))),(cn=i0?r0(n,t):l0(n,t))&&(hn=Xs(S,"onBeforeInput"),0<hn.length&&(Bn=new Sd("onBeforeInput","beforeinput",null,t,O),C.push({event:Bn,listeners:hn}),Bn.data=cn)),iy(C,n,S,t,O)}vm(C,e)})}function hl(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Xs(n,e){for(var t=e+"Capture",a=[];n!==null;){var i=n,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=Lr(n,t),i!=null&&a.unshift(hl(n,i,l)),i=Lr(n,e),i!=null&&a.push(hl(n,i,l))),n.tag===3)return a;n=n.return}return[]}function oy(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function xm(n,e,t,a,i){for(var l=e._reactName,s=[];t!==null&&t!==a;){var c=t,f=c.alternate,S=c.stateNode;if(c=c.tag,f!==null&&f===a)break;c!==5&&c!==26&&c!==27||S===null||(f=S,i?(S=Lr(t,l),S!=null&&s.unshift(hl(t,S,f))):i||(S=Lr(t,l),S!=null&&s.push(hl(t,S,f)))),t=t.return}s.length!==0&&n.push({event:e,listeners:s})}var cy=/\r\n?/g,uy=/\u0000|\uFFFD/g;function _m(n){return(typeof n=="string"?n:""+n).replace(cy,`
`).replace(uy,"")}function Sm(n,e){return e=_m(e),_m(n)===e}function $n(n,e,t,a,i,l){switch(t){case"children":if(typeof a=="string")e==="body"||e==="textarea"&&a===""||Di(n,a);else if(typeof a=="number"||typeof a=="bigint")e!=="body"&&Di(n,""+a);else return;break;case"className":sa(n,"class",a);break;case"tabIndex":sa(n,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":sa(n,t,a);break;case"style":pd(n,a,l);return;case"data":if(e!=="object"){sa(n,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||t!=="href")){n.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){n.removeAttribute(t);break}a=Gl(a),n.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){n.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(t==="formAction"?(e!=="input"&&$n(n,e,"name",i.name,i,null),$n(n,e,"formEncType",i.formEncType,i,null),$n(n,e,"formMethod",i.formMethod,i,null),$n(n,e,"formTarget",i.formTarget,i,null)):($n(n,e,"encType",i.encType,i,null),$n(n,e,"method",i.method,i,null),$n(n,e,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){n.removeAttribute(t);break}a=Gl(a),n.setAttribute(t,a);break;case"onClick":a!=null&&(n.onclick=Vt);return;case"onScroll":a!=null&&Dn("scroll",n);return;case"onScrollEnd":a!=null&&Dn("scrollend",n);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(t=a.__html,t!=null){if(i.children!=null)throw Error(d(60));l?.__html!==t&&(n.innerHTML=t)}}break;case"multiple":n.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":n.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){n.removeAttribute("xlink:href");break}t=Gl(a),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(t,a):n.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(t,""):n.removeAttribute(t);break;case"capture":case"download":a===!0?n.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(t,a):n.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?n.setAttribute(t,a):n.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?n.removeAttribute(t):n.setAttribute(t,a);break;case"popover":Dn("beforetoggle",n),Dn("toggle",n),Yn(n,"popover",a);break;case"xlinkActuate":Ue(n,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Ue(n,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Ue(n,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Ue(n,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Ue(n,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Ue(n,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Ue(n,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Ue(n,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Ue(n,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Yn(n,"is",a);break;case"innerText":case"textContent":return;default:if(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")t=A1.get(t)||t,Yn(n,t,a);else return}Hn=!0}function yu(n,e,t,a,i,l){switch(t){case"style":pd(n,a,l);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(t=a.__html,t!=null){if(i.children!=null)throw Error(d(60));l?.__html!==t&&(n.innerHTML=t)}}break;case"children":if(typeof a=="string")Di(n,a);else if(typeof a=="number"||typeof a=="bigint")Di(n,""+a);else return;break;case"onScroll":a!=null&&Dn("scroll",n);return;case"onScrollEnd":a!=null&&Dn("scrollend",n);return;case"onClick":a!=null&&(n.onclick=Vt);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Ul.hasOwnProperty(t))n:{if(t[0]==="o"&&t[1]==="n"&&(i=t.endsWith("Capture"),l=t.slice(2,i?t.length-7:void 0),e=n[U]||null,e=e!=null?e[t]:null,typeof e=="function"&&n.removeEventListener(l,e,i),typeof a=="function")){typeof e!="function"&&e!==null&&(t in n?n[t]=null:n.hasAttribute(t)&&n.removeAttribute(t)),n.addEventListener(l,a,i);break n}Hn=!0,t in n?n[t]=a:a===!0?n.setAttribute(t,""):Yn(n,t,a)}return}Hn=!0}function Ve(n,e,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Dn("error",n),Dn("load",n);var a=!1,i=!1,l;for(l in t)if(t.hasOwnProperty(l)){var s=t[l];if(s!=null)switch(l){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,e));default:$n(n,e,l,s,t,null)}}i&&$n(n,e,"srcSet",t.srcSet,t,null),a&&$n(n,e,"src",t.src,t,null);return;case"input":Dn("invalid",n);var c=l=s=i=null,f=null,S=null;for(a in t)if(t.hasOwnProperty(a)){var O=t[a];if(O!=null)switch(a){case"name":i=O;break;case"type":s=O;break;case"checked":f=O;break;case"defaultChecked":S=O;break;case"value":l=O;break;case"defaultValue":c=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(d(137,e));break;default:$n(n,e,a,O,t,null)}}ql(n,l,c,f,S,s,i,!1);return;case"select":Dn("invalid",n),a=s=l=null;for(i in t)if(t.hasOwnProperty(i)&&(c=t[i],c!=null))switch(i){case"value":l=c;break;case"defaultValue":s=c;break;case"multiple":a=c;default:$n(n,e,i,c,t,null)}e=l,t=s,n.multiple=!!a,e!=null?Li(n,!!a,e,!1):t!=null&&Li(n,!!a,t,!0);return;case"textarea":Dn("invalid",n),l=i=a=null;for(s in t)if(t.hasOwnProperty(s)&&(c=t[s],c!=null))switch(s){case"value":a=c;break;case"defaultValue":i=c;break;case"children":l=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(d(91));break;default:$n(n,e,s,c,t,null)}md(n,a,i,l);return;case"option":for(f in t)t.hasOwnProperty(f)&&(a=t[f],a!=null)&&(f==="selected"?n.selected=a&&typeof a!="function"&&typeof a!="symbol":$n(n,e,f,a,t,null));return;case"dialog":Dn("beforetoggle",n),Dn("toggle",n),Dn("cancel",n),Dn("close",n);break;case"iframe":case"object":Dn("load",n);break;case"video":case"audio":for(a=0;a<fl.length;a++)Dn(fl[a],n);break;case"image":Dn("error",n),Dn("load",n);break;case"details":Dn("toggle",n);break;case"embed":case"source":case"link":Dn("error",n),Dn("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in t)if(t.hasOwnProperty(S)&&(a=t[S],a!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,e));default:$n(n,e,S,a,t,null)}return;default:if(_o(e)){for(O in t)t.hasOwnProperty(O)&&(a=t[O],a!==void 0&&yu(n,e,O,a,t,void 0));return}}for(c in t)t.hasOwnProperty(c)&&(a=t[c],a!=null&&$n(n,e,c,a,t,null))}var dy={};function fy(n,e,t,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,s=null,c=null,f=null,S=null,O=null;for(N in t){var C=t[N];if(t.hasOwnProperty(N)&&C!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":f=C;default:a.hasOwnProperty(N)||$n(n,e,N,null,a,C)}}for(var x in a){var N=a[x];if(C=t[x],a.hasOwnProperty(x)&&(N!=null||C!=null))switch(x){case"type":N!==C&&(Hn=!0),l=N;break;case"name":N!==C&&(Hn=!0),i=N;break;case"checked":N!==C&&(Hn=!0),S=N;break;case"defaultChecked":N!==C&&(Hn=!0),O=N;break;case"value":N!==C&&(Hn=!0),s=N;break;case"defaultValue":N!==C&&(Hn=!0),c=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(d(137,e));break;default:N!==C&&$n(n,e,x,N,a,C)}}ft(n,s,c,f,S,O,l,i);return;case"select":N=s=c=x=null;for(l in t)if(f=t[l],t.hasOwnProperty(l)&&f!=null)switch(l){case"value":break;case"multiple":N=f;default:a.hasOwnProperty(l)||$n(n,e,l,null,a,f)}for(i in a)if(l=a[i],f=t[i],a.hasOwnProperty(i)&&(l!=null||f!=null))switch(i){case"value":l!==f&&(Hn=!0),x=l;break;case"defaultValue":l!==f&&(Hn=!0),c=l;break;case"multiple":l!==f&&(Hn=!0),s=l;default:l!==f&&$n(n,e,i,l,a,f)}e=c,t=s,a=N,x!=null?Li(n,!!t,x,!1):!!a!=!!t&&(e!=null?Li(n,!!t,e,!0):Li(n,!!t,t?[]:"",!1));return;case"textarea":N=x=null;for(c in t)if(i=t[c],t.hasOwnProperty(c)&&i!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:$n(n,e,c,null,a,i)}for(s in a)if(i=a[s],l=t[s],a.hasOwnProperty(s)&&(i!=null||l!=null))switch(s){case"value":i!==l&&(Hn=!0),x=i;break;case"defaultValue":i!==l&&(Hn=!0),N=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(d(91));break;default:i!==l&&$n(n,e,s,i,a,l)}hd(n,x,N);return;case"option":for(var Q in t)x=t[Q],t.hasOwnProperty(Q)&&x!=null&&!a.hasOwnProperty(Q)&&(Q==="selected"?n.selected=!1:$n(n,e,Q,null,a,x));for(f in a)x=a[f],N=t[f],a.hasOwnProperty(f)&&x!==N&&(x!=null||N!=null)&&(f==="selected"?(x!==N&&(Hn=!0),n.selected=x&&typeof x!="function"&&typeof x!="symbol"):$n(n,e,f,x,a,N));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var rn in t)x=t[rn],t.hasOwnProperty(rn)&&x!=null&&!a.hasOwnProperty(rn)&&$n(n,e,rn,null,a,x);for(S in a)if(x=a[S],N=t[S],a.hasOwnProperty(S)&&x!==N&&(x!=null||N!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(d(137,e));break;default:$n(n,e,S,x,a,N)}return;default:if(_o(e)){for(var En in t)x=t[En],t.hasOwnProperty(En)&&x!==void 0&&!a.hasOwnProperty(En)&&yu(n,e,En,void 0,a,x);for(O in a)x=a[O],N=t[O],!a.hasOwnProperty(O)||x===N||x===void 0&&N===void 0||yu(n,e,O,x,a,N);return}}for(var _ in t)x=t[_],t.hasOwnProperty(_)&&x!=null&&!a.hasOwnProperty(_)&&$n(n,e,_,null,a,x);for(C in a)x=a[C],N=t[C],!a.hasOwnProperty(C)||x===N||x==null&&N==null||$n(n,e,C,x,a,N)}function Tm(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function hy(){if(typeof performance.getEntriesByType=="function"){for(var n=0,e=0,t=performance.getEntriesByType("resource"),a=0;a<t.length;a++){var i=t[a],l=i.transferSize,s=i.initiatorType,c=i.duration;if(l&&c&&Tm(s)){for(s=0,c=i.responseEnd,a+=1;a<t.length;a++){var f=t[a],S=f.startTime;if(S>c)break;var O=f.transferSize,C=f.initiatorType;O&&Tm(C)&&(f=f.responseEnd,s+=O*(f<c?1:(c-S)/(f-S)))}if(--a,e+=8*(l+s)/(i.duration/1e3),n++,10<n)break}}if(0<n)return e/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var xu=null,_u=null;function ml(n){return n.nodeType===9?n:n.ownerDocument}function jm(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wm(n,e){if(n===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&e==="foreignObject"?0:n}function Nm(n,e,t,a){return t=ml(t).createElement(n),t[Me]=a,t[U]=e,Ve(t,n,e),Te(t),t}function Su(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Tu=null;function my(){var n=window.event;return n&&n.type==="popstate"?n===Tu?!1:(Tu=n,!0):(Tu=null,!1)}var ju=typeof setTimeout=="function"?setTimeout:void 0,gy=typeof clearTimeout=="function"?clearTimeout:void 0,Em=typeof Promise=="function"?Promise:void 0,Om=typeof requestAnimationFrame=="function"?requestAnimationFrame:ju,py=typeof queueMicrotask=="function"?queueMicrotask:typeof Em<"u"?function(n){return Em.resolve(null).then(n).catch(by)}:ju;function by(n){setTimeout(function(){throw n})}function Pa(n){return n==="head"}function Am(n,e){var t=e,a=0;do{var i=t.nextSibling;if(n.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"||t==="/&"){if(a===0){n.removeChild(i),vr(e);return}a--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")a++;else if(t==="html")Cu(n.ownerDocument.documentElement);else if(t==="head"){t=n.ownerDocument.head,Cu(t);for(var l=t.firstChild;l;){var s=l.nextSibling,c=l.nodeName;l[rt]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&l.rel.toLowerCase()==="stylesheet"||t.removeChild(l),l=s}}else t==="body"&&Cu(n.ownerDocument.body);t=i}while(t);vr(e)}function km(n,e){var t=n;n=0;do{var a=t.nextSibling;if(t.nodeType===1?e?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(e?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(n===0)break;n--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||n++;t=a}while(t)}function Mm(n,e,t){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,n.style.viewTransitionName=e,t!=null&&(n.style.viewTransitionClass=t),t=getComputedStyle(n),t.display==="inline"){if(e=n.getClientRects(),e.length===1)var a=1;else for(var i=a=0;i<e.length;i++){var l=e[i];0<l.width&&0<l.height&&a++}a===1&&(n=n.style,n.display=e.length===1?"inline-block":"block",n.marginTop="-"+t.paddingTop,n.marginBottom="-"+t.paddingBottom)}}function Cm(n,e){n=n.style,e=e.style;var t=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;n.viewTransitionName=t==null||typeof t=="boolean"?"":(""+t).trim(),t=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,n.viewTransitionClass=t==null||typeof t=="boolean"?"":(""+t).trim(),n.display==="inline-block"&&(e==null?n.display=n.margin="":(t=e.display,n.display=t==null||typeof t=="boolean"?"":t,t=e.margin,t!=null?n.margin=t:(t=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],n.marginTop=t==null||typeof t=="boolean"?"":t,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],n.marginBottom=e==null||typeof e=="boolean"?"":e)))}function vy(n,e,t){return t=t.ownerDocument.defaultView,{rect:n,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=n.bottom&&0<=n.right&&n.top<=t.innerHeight&&n.left<=t.innerWidth}}function wu(n){var e=n.getBoundingClientRect(),t=getComputedStyle(n);return vy(e,t,n)}function yy(n){return n.documentElement.clientHeight}function xy(n){this.addEventListener("load",n),this.addEventListener("error",n)}function _y(n,e,t,a,i,l,s,c,f){var S=e.nodeType===9?e:e.ownerDocument;try{var O=S.startViewTransition({update:function(){var x=S.defaultView,N=x.navigation&&x.navigation.transition,Q=S.fonts.status;a();var rn=[];if(Q==="loaded"&&(yy(S),S.fonts.status==="loading"&&rn.push(S.fonts.ready)),Q=rn.length,n!==null)for(var En=n.suspenseyImages,_=0,b=0;b<En.length;b++){var w=En[b];if(!w.complete){var k=w.getBoundingClientRect();if(0<k.bottom&&0<k.right&&k.top<x.innerHeight&&k.left<x.innerWidth){if(_+=$m(w),_>Ps){rn.length=Q;break}w=new Promise(xy.bind(w)),rn.push(w)}}}if(0<rn.length)return x=Promise.race([Promise.all(rn),new Promise(function(en){return setTimeout(en,500)})]).then(i,i),(N?Promise.allSettled([N.finished,x]):x).then(l,l);if(i(),N)return N.finished.then(l,l);l()},types:t});S.__reactViewTransition=O;var C=[];return O.ready.then(function(){for(var x=S.documentElement.getAnimations({subtree:!0}),N=0;N<x.length;N++){var Q=x[N],rn=Q.effect,En=rn.pseudoElement;if(En!=null&&En.startsWith("::view-transition")){C.push(Q),Q=rn.getKeyframes();for(var _=En=void 0,b=!0,w=0;w<Q.length;w++){var k=Q[w],en=k.width;if(En===void 0)En=en;else if(En!==en){b=!1;break}if(en=k.height,_===void 0)_=en;else if(_!==en){b=!1;break}delete k.width,delete k.height,k.transform==="none"&&delete k.transform}b&&En!==void 0&&_!==void 0&&(rn.setKeyframes(Q),b=getComputedStyle(rn.target,rn.pseudoElement),b.width!==En||b.height!==_)&&(b=Q[0],b.width=En,b.height=_,b=Q[Q.length-1],b.width=En,b.height=_,rn.setKeyframes(Q))}}s()},function(x){S.__reactViewTransition===O&&(S.__reactViewTransition=null);try{typeof x=="object"&&x!==null&&x.name==="InvalidStateError"&&(x.message==="View transition was skipped because document visibility state is hidden."||x.message==="Skipping view transition because document visibility state has become hidden."||x.message==="Skipping view transition because viewport size changed."||x.message==="Transition was aborted because of invalid state")&&(x=null),x!==null&&f(x)}finally{a(),i(),s()}}),O.finished.finally(function(){for(var x=0;x<C.length;x++)C[x].cancel();S.__reactViewTransition===O&&(S.__reactViewTransition=null),c()}),O}catch{return a(),i(),s(),null}}function wi(n,e){this._scope=document.documentElement,this._selector="::view-transition-"+n+"("+e+")"}wi.prototype.animate=function(n,e){return e=typeof e=="number"?{duration:e}:P({},e),e.pseudoElement=this._selector,this._scope.animate(n,e)},wi.prototype.getAnimations=function(){for(var n=this._scope,e=this._selector,t=n.getAnimations({subtree:!0}),a=[],i=0;i<t.length;i++){var l=t[i].effect;l!==null&&l.target===n&&l.pseudoElement===e&&a.push(t[i])}return a},wi.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Rm(n){return{name:n,group:new wi("group",n),imagePair:new wi("image-pair",n),old:new wi("old",n),new:new wi("new",n)}}function yt(n){this._fragmentFiber=n,this._observers=this._eventListeners=null}yt.prototype.addEventListener=function(n,e,t){var a=null,i=null;if(!(t!=null&&typeof t!="boolean"&&(a=t.signal||null,a!==null&&a.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var l=this._eventListeners;if(Dm(l,n,e,t)===-1){var s=this,c=e;t!=null&&typeof t!="boolean"&&t.once===!0&&(c=function(f){s.removeEventListener(n,e,t),typeof e=="function"?e.call(this,f):e.handleEvent(f)}),a!==null&&(i=s.removeEventListener.bind(s,n,e,t),a.addEventListener("abort",i,{once:!0}),i=a.removeEventListener.bind(a,"abort",i)),a=fr(t),l.push({type:n,listener:e,optionsOrUseCapture:t,attachedListener:c,cleanup:i}),v(this._fragmentFiber.child,!1,Sy,n,c,a)}this._eventListeners=l}};function Sy(n,e,t,a){return tn(n).addEventListener(e,t,a),!1}yt.prototype.removeEventListener=function(n,e,t){var a=this._eventListeners;if(a!==null&&(e=Dm(a,n,e,t),e!==-1)){var i=a[e];t=i.attachedListener;var l=i.cleanup;i=fr(i.optionsOrUseCapture),v(this._fragmentFiber.child,!1,Ty,n,t,i),a.splice(e,1),l!==null&&l()}};function Ty(n,e,t,a){return tn(n).removeEventListener(e,t,a),!1}function fr(n){return n!=null&&typeof n!="boolean"&&(n.once===!0||n.signal instanceof AbortSignal)?{capture:n.capture,passive:n.passive}:n}function Lm(n){return n==null?"c=0":typeof n=="boolean"?"c="+(n?"1":"0"):"c="+(n.capture?"1":"0")}function Dm(n,e,t,a){if(n.length===0)return-1;a=Lm(a);for(var i=0;i<n.length;i++){var l=n[i];if(l.type===e&&l.listener===t&&Lm(l.optionsOrUseCapture)===a)return i}return-1}yt.prototype.dispatchEvent=function(n){var e=E(this._fragmentFiber);if(e===null)return!0;e=tn(e);var t=this._eventListeners;if(t!==null&&0<t.length||!n.bubbles){var a=e.nodeType===9?e.createComment(""):document.createTextNode("");if(t)for(var i=0;i<t.length;i++){var l=t[i];a.addEventListener(l.type,l.attachedListener,fr(l.optionsOrUseCapture))}if(e.appendChild(a),n=a.dispatchEvent(n),t)for(i=0;i<t.length;i++)l=t[i],a.removeEventListener(l.type,l.attachedListener,fr(l.optionsOrUseCapture));return e.removeChild(a),n}return e.dispatchEvent(n)},yt.prototype.focus=function(n){v(this._fragmentFiber.child,!0,zm,n,void 0,void 0)};function zm(n,e){return n.tag===6?!1:(n=tn(n),Dy(n,e))}yt.prototype.focusLast=function(n){var e=[];v(this._fragmentFiber.child,!0,Nu,e,void 0,void 0);for(var t=e.length-1;0<=t&&!zm(e[t],n);t--);};function Nu(n,e){return e.push(n),!1}yt.prototype.blur=function(){var n=E(this._fragmentFiber);n!==null&&(n=tn(n),n=ml(n).activeElement,n!==null&&v(this._fragmentFiber.child,!1,jy,n,void 0,void 0))};function jy(n,e){return n.tag===6?!1:(n=tn(n),n===e||n.contains(e)?(e.blur(),!0):!1)}yt.prototype.observeUsing=function(n){this._observers===null&&(this._observers=new Set),this._observers.add(n),v(this._fragmentFiber.child,!1,wy,n,void 0,void 0)};function wy(n,e){return n.tag===6||(n=tn(n),e.observe(n)),!1}yt.prototype.unobserveUsing=function(n){var e=this._observers;if(e!==null&&e.has(n)){e.delete(n),v(this._fragmentFiber.child,!1,Ny,n,void 0,void 0);for(var t=e=0;t<qt.length;t++){var a=qt[t];a.fragmentInstance===this&&a.observer===n?n.unobserve(a.instance):qt[e++]=a}qt.length=e}};function Ny(n,e){return n.tag===6||(n=tn(n),e.unobserve(n)),!1}var qt=[],Eu=!1;function Ey(n,e,t){qt.push({fragmentInstance:n,observer:e,instance:t}),Eu||(Eu=!0,zy(function(){Eu=!1;var a=qt;qt=[];for(var i=0;i<a.length;i++){var l=a[i];l.observer.unobserve(l.instance)}}))}yt.prototype.getClientRects=function(){var n=[];return v(this._fragmentFiber.child,!1,Oy,n,void 0,void 0),n};function Oy(n,e){if(n.tag===6){n=n.stateNode;var t=n.ownerDocument.createRange();t.selectNodeContents(n),e.push.apply(e,t.getClientRects())}else n=tn(n),e.push.apply(e,n.getClientRects());return!1}yt.prototype.getRootNode=function(n){var e=E(this._fragmentFiber);return e===null?this:tn(e).getRootNode(n)},yt.prototype.compareDocumentPosition=function(n){var e=E(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var t=[];v(this._fragmentFiber.child,!1,Nu,t,void 0,void 0);var a=tn(e);if(t.length===0){if(t=a,V(this._fragmentFiber)){n:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break n}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(t=e)}e=this._fragmentFiber;var i=a=t.compareDocumentPosition(n);return t===n?i=Node.DOCUMENT_POSITION_CONTAINS:a&Node.DOCUMENT_POSITION_CONTAINED_BY&&(t=G(e)[1],t===null?i=Node.DOCUMENT_POSITION_PRECEDING:(n=tn(t).compareDocumentPosition(n),i=n===0||n&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=tn(t[0]),i=tn(t[t.length-1]);var l=V(this._fragmentFiber)?e.parentElement:a;if(l==null)return Node.DOCUMENT_POSITION_DISCONNECTED;a=l.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,l=l.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var s=e.compareDocumentPosition(n),c=i.compareDocumentPosition(n),f=s&Node.DOCUMENT_POSITION_CONTAINED_BY||c&Node.DOCUMENT_POSITION_CONTAINED_BY;return c=a&&l&&s&Node.DOCUMENT_POSITION_FOLLOWING&&c&Node.DOCUMENT_POSITION_PRECEDING,e=a&&e===n||l&&i===n||f||c?Node.DOCUMENT_POSITION_CONTAINED_BY:!a&&e===n||!l&&i===n?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:s,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Ay(e,this._fragmentFiber,t[0],t[t.length-1],n)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Ay(n,e,t,a,i){var l=Le(i);if(n&Node.DOCUMENT_POSITION_CONTAINED_BY){if(t=!!l)n:{for(;l!==null;){if(l.tag===7&&(l===e||l.alternate===e)){t=!0;break n}l=l.return}t=!1}return t}if(n&Node.DOCUMENT_POSITION_CONTAINS){if(l===null)return l=i.ownerDocument,i===l||i===l.documentElement||i===l.body;n:{for(l=e,e=E(e);l!==null;){if(!(l.tag!==5&&l.tag!==3&&l.tag!==27||l!==e&&l.alternate!==e)){l=!0;break n}l=l.return}l=!1}return l}return n&Node.DOCUMENT_POSITION_PRECEDING?((e=!!l)&&!(e=l===t)&&(e=vn(t,l,Xn),e===null?e=!1:(v(e,!0,mn,l,t),l=Sn,Sn=null,e=l!==null)),e):n&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!l)&&!(e=l===a)&&(e=vn(a,l,Xn),e===null?e=!1:(v(e,!0,On,l,a),l=Sn,gn=Sn=null,e=l!==null)),e):!1}function Bm(n,e){var t=n.ownerDocument.createRange();t.selectNodeContents(n),n=t.getBoundingClientRect(),window.scrollTo(window.scrollX+n.left,e?window.scrollY+n.top:window.scrollY+n.bottom-window.innerHeight)}yt.prototype.scrollIntoView=function(n){if(typeof n=="object")throw Error(d(566));var e=[];v(this._fragmentFiber.child,!1,Nu,e,void 0,void 0);var t=n!==!1;if(e.length===0){var a=G(this._fragmentFiber);if(a=t?a[1]||a[0]||E(this._fragmentFiber):a[0]||a[1],a===null)return;if(a.tag===6){n=tn(a),Bm(n,t);return}if(a=tn(a),a.nodeType!==9){if(a.nodeType===11){t="host"in a?a.host:null,t!==null&&t.scrollIntoView(n);return}a.scrollIntoView(n)}}for(a=t?e.length-1:0;a!==(t?-1:e.length);){var i=e[a];i.tag===6?(i=tn(i),Bm(i,t)):tn(i).scrollIntoView(n),a+=t?-1:1}};function ky(n,e){return n=tn(n),Um(n,e),!1}function Um(n,e){n.reactFragments==null&&(n.reactFragments=new Set),n.reactFragments.add(e)}function Hm(n,e){var t=e._eventListeners;if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];n.addEventListener(i.type,i.attachedListener,fr(i.optionsOrUseCapture))}n.nodeType!==3&&(t=e._observers,t!==null&&t.forEach(function(l){for(var s=0,c=0;c<qt.length;c++){var f=qt[c];(f.fragmentInstance!==e||f.observer!==l||f.instance!==n)&&(qt[s++]=f)}qt.length=s,l.observe(n)}),Um(n,e))}function My(n,e){var t=e._eventListeners;if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];n.removeEventListener(i.type,i.attachedListener,fr(i.optionsOrUseCapture))}n.nodeType!==3&&(t=e._observers,t!==null&&t.forEach(function(l){typeof l.rootMargin=="string"?Ey(e,l,n):l.unobserve(n)}),n.reactFragments!=null&&n.reactFragments.delete(e))}function Ou(n){var e=n.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var t=e;switch(e=e.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Ou(t),Re(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}n.removeChild(t)}}function Cy(n,e,t,a){for(;n.nodeType===1;){var i=t;if(n.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(a){if(!n[rt])switch(e){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(l=n.getAttribute("rel"),l==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(l!==i.rel||n.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||n.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||n.getAttribute("title")!==(i.title==null?null:i.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(l=n.getAttribute("src"),(l!==(i.src==null?null:i.src)||n.getAttribute("type")!==(i.type==null?null:i.type)||n.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(e==="input"&&n.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&n.getAttribute("name")===l)return n}else return n;if(n=kt(n.nextSibling),n===null)break}return null}function Ry(n,e,t){if(e==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!t||(n=kt(n.nextSibling),n===null))return null;return n}function qm(n,e){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=kt(n.nextSibling),n===null))return null;return n}function Au(n){return n.data==="$?"||n.data==="$~"}function ku(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function Ly(n,e){var t=n.ownerDocument;if(n.data==="$~")n._reactRetry=e;else if(n.data!=="$?"||t.readyState!=="loading")e();else{var a=function(){e(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),n._reactRetry=a}}function kt(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return n}var Mu=null;function Gm(n){n=n.nextSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"||t==="/&"){if(e===0)return kt(n.nextSibling);e--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||e++}n=n.nextSibling}return null}function Ym(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(e===0)return n;e--}else t!=="/$"&&t!=="/&"||e++}n=n.previousSibling}return null}function Dy(n,e){function t(){a=!0}if(n.ownerDocument.activeElement===n)return!0;var a=!1;try{n.ownerDocument.addEventListener("focus",t,!0),(n.focus||HTMLElement.prototype.focus).call(n,e)}finally{n.ownerDocument.removeEventListener("focus",t,!0)}return a}function zy(n){Om(function(){Om(function(e){return n(e)})})}function Im(n,e,t){switch(e=ml(t),n){case"html":if(n=e.documentElement,!n)throw Error(d(452));return n;case"head":if(n=e.head,!n)throw Error(d(453));return n;case"body":if(n=e.body,!n)throw Error(d(454));return n;default:throw Error(d(451))}}function Vm(n,e,t){for(var a in t){var i=t[a];t.hasOwnProperty(a)&&i!=null&&$n(n,e,a,null,dy,i)}t.dangerouslySetInnerHTML!=null&&(n.textContent=""),n.onclick===Vt&&(n.onclick=null),Re(n)}function Cu(n){for(var e=n.attributes;e.length;)n.removeAttributeNode(e[0]);Re(n)}var Mt=new Map,Km=new Set;function gl(n){if(typeof n.getRootNode=="function"){var e=n.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return n.nodeType===9?n:n.ownerDocument}var xa=fn.d;fn.d={f:By,r:Uy,D:Hy,C:qy,L:Gy,m:Yy,X:Vy,S:Iy,M:Ky};function By(){var n=xa.f(),e=Gs();return n||e}function Uy(n){var e=ia(n);e!==null&&e.tag===5&&e.type==="form"?Xf(e):xa.r(n)}var hr=typeof document>"u"?null:document;function Qm(n,e,t){var a=hr;if(a&&typeof e=="string"&&e){var i=Pn(e);i='link[rel="'+n+'"][href="'+i+'"]',typeof t=="string"&&(i+='[crossorigin="'+t+'"]'),Km.has(i)||(Km.add(i),n={rel:n,crossOrigin:t,href:e},a.querySelector(i)===null&&(e=a.createElement("link"),Ve(e,"link",n),Te(e),a.head.appendChild(e)))}}function Hy(n){xa.D(n),Qm("dns-prefetch",n,null)}function qy(n,e){xa.C(n,e),Qm("preconnect",n,e)}function Gy(n,e,t){xa.L(n,e,t);var a=hr;if(a&&n&&e){var i='link[rel="preload"][as="'+Pn(e)+'"]';e==="image"&&t&&t.imageSrcSet?(i+='[imagesrcset="'+Pn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(i+='[imagesizes="'+Pn(t.imageSizes)+'"]')):i+='[href="'+Pn(n)+'"]';var l=i;switch(e){case"style":l=mr(n);break;case"script":l=gr(n)}if(!(Mt.has(l)||(n=P({rel:"preload",href:e==="image"&&t&&t.imageSrcSet?void 0:n,as:e},t),Mt.set(l,n),a.querySelector(i)!==null||e==="style"&&a.querySelector(pl(l))||e==="script"&&a.querySelector(bl(l))))){var s=a.createElement("link");Ve(s,"link",n),e==="style"&&(s[aa]=!0,s.onload=s.onerror=function(){zl(s)}),Te(s),a.head.appendChild(s)}}}function Yy(n,e){xa.m(n,e);var t=hr;if(t&&n){var a=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+Pn(a)+'"][href="'+Pn(n)+'"]',l=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=gr(n)}if(!Mt.has(l)&&(n=P({rel:"modulepreload",href:n},e),Mt.set(l,n),t.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(bl(l)))return}a=t.createElement("link"),Ve(a,"link",n),Te(a),t.head.appendChild(a)}}}function Iy(n,e,t){xa.S(n,e,t);var a=hr;if(a&&n){var i=ra(a).hoistableStyles,l=mr(n);e=e||"default";var s=i.get(l);if(!s){var c={loading:0,preload:null};if(s=a.querySelector(pl(l)))c.loading=5;else{n=P({rel:"stylesheet",href:n,"data-precedence":e},t),(t=Mt.get(l))&&Ru(n,t);var f=s=a.createElement("link");Te(f),Ve(f,"link",n),f._p=new Promise(function(S,O){f.onload=S,f.onerror=O}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Js(s,e,a)}s={type:"stylesheet",instance:s,count:1,state:c},i.set(l,s)}}}function Vy(n,e){xa.X(n,e);var t=hr;if(t&&n){var a=ra(t).hoistableScripts,i=gr(n),l=a.get(i);l||(l=t.querySelector(bl(i)),l||(n=P({src:n,async:!0},e),(e=Mt.get(i))&&Lu(n,e),l=t.createElement("script"),Te(l),Ve(l,"link",n),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function Ky(n,e){xa.M(n,e);var t=hr;if(t&&n){var a=ra(t).hoistableScripts,i=gr(n),l=a.get(i);l||(l=t.querySelector(bl(i)),l||(n=P({src:n,async:!0,type:"module"},e),(e=Mt.get(i))&&Lu(n,e),l=t.createElement("script"),Te(l),Ve(l,"link",n),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function Xm(n,e,t,a){var i=(i=Gt.current)?gl(i):null;if(!i)throw Error(d(446));switch(n){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(t=mr(t.href),e=ra(i).hoistableStyles,a=e.get(t),a||(a={type:"style",instance:null,count:0,state:null},e.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){n=mr(t.href);var l=ra(i).hoistableStyles,s=l.get(n);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(n,s),(l=i.querySelector(pl(n)))?l._p||(s.instance=l,s.state.loading=5):(l=Mt.get(n),l||(l={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Mt.set(n,l)),Qy(i,n,l,s.state))),e&&a===null)throw Error(d(528,""));return s}if(e&&a!==null)throw Error(d(529,""));return null;case"script":return e=t.async,t=t.src,typeof t=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(t=gr(t),e=ra(i).hoistableScripts,a=e.get(t),a||(a={type:"script",instance:null,count:0,state:null},e.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,n))}}function mr(n){return'href="'+Pn(n)+'"'}function pl(n){return'link[rel="stylesheet"]['+n+"]"}function Jm(n){return P({},n,{"data-precedence":n.precedence,precedence:null})}function Qy(n,e,t,a){if(e=n.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[aa]!==!0){a.loading=1;return}}else e=n.createElement("link"),e[aa]=!0,e.onload=e.onerror=zl.bind(null,e),Ve(e,"link",t),Te(e),n.head.appendChild(e);a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2})}function gr(n){return'[src="'+Pn(n)+'"]'}function bl(n){return"script[async]"+n}function Zm(n,e,t){if(e.count++,e.instance===null)switch(e.type){case"style":var a=n.querySelector('style[data-href~="'+Pn(t.href)+'"]');if(a)return e.instance=a,Te(a),a;var i=P({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(n.ownerDocument||n).createElement("style"),Te(a),Ve(a,"style",i),Js(a,t.precedence,n),e.instance=a;case"stylesheet":i=mr(t.href);var l=n.querySelector(pl(i));if(l)return e.state.loading|=4,e.instance=l,Te(l),l;a=Jm(t),(i=Mt.get(i))&&Ru(a,i),l=(n.ownerDocument||n).createElement("link"),Te(l);var s=l;return s._p=new Promise(function(c,f){s.onload=c,s.onerror=f}),Ve(l,"link",a),e.state.loading|=4,Js(l,t.precedence,n),e.instance=l;case"script":return l=gr(t.src),(i=n.querySelector(bl(l)))?(e.instance=i,Te(i),i):(a=t,(i=Mt.get(l))&&(a=P({},t),Lu(a,i)),n=n.ownerDocument||n,i=n.createElement("script"),Te(i),Ve(i,"link",a),n.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(d(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Js(a,t.precedence,n));return e.instance}function Js(n,e,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,l=i,s=0;s<a.length;s++){var c=a[s];if(c.dataset.precedence===e)l=c;else if(l!==i)break}l?l.parentNode.insertBefore(n,l.nextSibling):(e=t.nodeType===9?t.head:t,e.insertBefore(n,e.firstChild))}function Ru(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.title==null&&(n.title=e.title)}function Lu(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.integrity==null&&(n.integrity=e.integrity)}var Zs=null;function Pm(n,e,t){if(Zs===null){var a=new Map,i=Zs=new Map;i.set(t,a)}else i=Zs,a=i.get(t),a||(a=new Map,i.set(t,a));if(a.has(n))return a;for(a.set(n,null),t=t.getElementsByTagName(n),i=0;i<t.length;i++){var l=t[i];if(!(l[rt]||l[Me]||n==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var s=l.getAttribute(e)||"";s=n+s;var c=a.get(s);c?c.push(l):a.set(s,[l])}}return a}function Du(n,e,t){n=n.ownerDocument||n,n.head.insertBefore(t,e==="title"?n.querySelector("head > title"):null)}function Xy(n,e,t){if(t===1||e.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(n=e.disabled,typeof e.precedence=="string"&&n==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Fm(n,e){return n==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function Wm(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function $m(n){return(n.width||100)*(n.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function ng(n,e){typeof e.decode=="function"&&(n.imgCount++,e.complete||(n.imgBytes+=$m(e),n.suspenseyImages.push(e)),n=Py.bind(n),e.decode().then(n,n))}function Jy(n,e,t,a){if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=mr(a.href),l=e.querySelector(pl(i));if(l){e=l._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=vl.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=l,Te(l);return}l=e.ownerDocument||e,a=Jm(a),(i=Mt.get(i))&&Ru(a,i),l=l.createElement("link"),Te(l);var s=l;s._p=new Promise(function(c,f){s.onload=c,s.onerror=f}),Ve(l,"link",a),t.instance=l}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=vl.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}var Ps=0;function Zy(n,e){return n.stylesheets&&n.count===0&&Ws(n,n.stylesheets),0<n.count||0<n.imgCount?function(t){var a=setTimeout(function(){if(n.stylesheets&&Ws(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4+e);0<n.imgBytes&&Ps===0&&(Ps=62500*hy());var i=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&Ws(n,n.stylesheets),n.unsuspend)){var l=n.unsuspend;n.unsuspend=null,l()}},(n.imgBytes>Ps?50:800)+e);return n.unsuspend=t,function(){n.unsuspend=null,clearTimeout(a),clearTimeout(i)}}:null}function eg(n){if(n.count===0&&(n.imgCount===0||!n.waitingForImages)){if(n.stylesheets)Ws(n,n.stylesheets);else if(n.unsuspend){var e=n.unsuspend;n.unsuspend=null,e()}}}function vl(){this.count--,eg(this)}function Py(){this.imgCount--,eg(this)}var Fs=null;function Ws(n,e){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Fs=new Map,e.forEach(Fy,n),Fs=null,vl.call(n))}function Fy(n,e){if(!(e.state.loading&4)){var t=Fs.get(n);if(t)var a=t.get(null);else{t=new Map,Fs.set(n,t);for(var i=n.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var s=i[l];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(t.set(s.dataset.precedence,s),a=s)}a&&t.set(null,a)}i=e.instance,s=i.getAttribute("data-precedence"),l=t.get(s)||a,l===a&&t.set(null,i),t.set(s,i),this.count++,a=vl.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),l?l.parentNode.insertBefore(i,l.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(i,n.firstChild)),e.state.loading|=4}}var pr={$$typeof:ue,Provider:null,Consumer:null,_currentValue:et,_currentValue2:et,_threadCount:0};function Wy(n,e,t,a,i,l,s,c,f){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Oa(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oa(0),this.hiddenUpdates=Oa(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.transitionTypes=null,this.incompleteTransitions=new Map}function tg(n,e,t,a,i,l,s,c,f,S,O,C){return n=new Wy(n,e,t,s,f,S,O,C,c),e=1,l===!0&&(e|=24),l=lt(3,null,null,e),n.current=l,l.stateNode=n,e=Po(),e.refCount++,n.pooledCache=e,e.refCount++,l.memoizedState={element:a,isDehydrated:t,cache:e},nc(l),n}function ag(n){return n?(n=Yi,n):Yi}function ig(n,e,t,a,i,l){i=ag(i),a.context===null?a.context=i:a.pendingContext=i,a=Ua(e),a.payload={element:t},l=l===void 0?null:l,l!==null&&(a.callback=l),t=Ha(n,a,e),t!==null&&(ut(t,n,e),Zr(t,n,e))}function rg(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function zu(n,e){rg(n,e),(n=n.alternate)&&rg(n,e)}function lg(n){if(n.tag===13||n.tag===31){var e=oi(n,67108864);e!==null&&ut(e,n,67108864),zu(n,67108864)}}function sg(n){if(n.tag===13||n.tag===31){var e=vt();e=Mi(e);var t=oi(n,e);t!==null&&ut(t,n,e),zu(n,e)}}var br=!0;function $y(n,e,t,a){var i=an.T;an.T=null;var l=fn.p;try{fn.p=2,Bu(n,e,t,a)}finally{fn.p=l,an.T=i}}function nx(n,e,t,a){var i=an.T;an.T=null;var l=fn.p;try{fn.p=8,Bu(n,e,t,a)}finally{fn.p=l,an.T=i}}function Bu(n,e,t,a){if(br){var i=Uu(a);if(i===null)vu(n,e,a,$s,t),cg(n,a);else if(tx(i,n,e,t,a))a.stopPropagation();else if(cg(n,a),e&4&&-1<ex.indexOf(n)){for(;i!==null;){var l=ia(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var s=ta(l.pendingLanes);if(s!==0){var c=l;for(c.pendingLanes|=2,c.entangledLanes|=2;s;){var f=1<<31-K(s);c.entanglements[1]|=f,s&=~f}na(l),(Vn&6)===0&&(Us=Xe()+500,dl(0))}}break;case 31:case 13:c=oi(l,2),c!==null&&ut(c,l,2),Gs(),zu(l,2)}if(l=Uu(a),l===null&&vu(n,e,a,$s,t),l===i)break;i=l}i!==null&&a.stopPropagation()}else vu(n,e,a,null,t)}}function Uu(n){return n=To(n),Hu(n)}var $s=null;function Hu(n){if($s=null,n=Le(n),n!==null){var e=R(n);if(e===null)n=null;else{var t=e.tag;if(t===13){if(n=M(e),n!==null)return n;n=null}else if(t===31){if(n=D(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null)}}return $s=n,null}function og(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kl()){case Ml:return 2;case Ar:return 8;case Rt:case g:return 32;case L:return 268435456;default:return 32}default:return 32}}var qu=!1,Fa=null,Wa=null,$a=null,yl=new Map,xl=new Map,ni=[],ex="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cg(n,e){switch(n){case"focusin":case"focusout":Fa=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":$a=null;break;case"pointerover":case"pointerout":yl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xl.delete(e.pointerId)}}function _l(n,e,t,a,i,l){return n===null||n.nativeEvent!==l?(n={blockedOn:e,domEventName:t,eventSystemFlags:a,nativeEvent:l,targetContainers:[i]},e!==null&&(e=ia(e),e!==null&&lg(e)),n):(n.eventSystemFlags|=a,e=n.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),n)}function tx(n,e,t,a,i){switch(e){case"focusin":return Fa=_l(Fa,n,e,t,a,i),!0;case"dragenter":return Wa=_l(Wa,n,e,t,a,i),!0;case"mouseover":return $a=_l($a,n,e,t,a,i),!0;case"pointerover":var l=i.pointerId;return yl.set(l,_l(yl.get(l)||null,n,e,t,a,i)),!0;case"gotpointercapture":return l=i.pointerId,xl.set(l,_l(xl.get(l)||null,n,e,t,a,i)),!0}return!1}function ug(n){var e=Le(n.target);if(e!==null){var t=R(e);if(t!==null){if(e=t.tag,e===13){if(e=M(t),e!==null){n.blockedOn=e,Dl(n.priority,function(){sg(t)});return}}else if(e===31){if(e=D(t),e!==null){n.blockedOn=e,Dl(n.priority,function(){sg(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function no(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Uu(n.nativeEvent);if(t===null){t=n.nativeEvent;var a=new t.constructor(t.type,t);So=a,t.target.dispatchEvent(a),So=null}else return e=ia(t),e!==null&&lg(e),n.blockedOn=t,!1;e.shift()}return!0}function dg(n,e,t){no(n)&&t.delete(e)}function ax(){qu=!1,Fa!==null&&no(Fa)&&(Fa=null),Wa!==null&&no(Wa)&&(Wa=null),$a!==null&&no($a)&&($a=null),yl.forEach(dg),xl.forEach(dg)}function eo(n,e){n.blockedOn===e&&(n.blockedOn=null,qu||(qu=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,ax)))}var to=null;function fg(n){to!==n&&(to=n,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){to===n&&(to=null);for(var e=0;e<n.length;e+=3){var t=n[e],a=n[e+1],i=n[e+2];if(typeof a!="function"){if(Hu(a||t)===null)continue;break}var l=ia(t);l!==null&&(n.splice(e,3),e-=3,_c(l,{pending:!0,data:i,method:t.method,action:a},a,i))}}))}function vr(n){function e(f){return eo(f,n)}Fa!==null&&eo(Fa,n),Wa!==null&&eo(Wa,n),$a!==null&&eo($a,n),yl.forEach(e),xl.forEach(e);for(var t=0;t<ni.length;t++){var a=ni[t];a.blockedOn===n&&(a.blockedOn=null)}for(;0<ni.length&&(t=ni[0],t.blockedOn===null);)ug(t),t.blockedOn===null&&ni.shift();if(t=(n.ownerDocument||n).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var i=t[a],l=t[a+1],s=i[U]||null;if(typeof l=="function")s||fg(t);else if(s){var c=null;if(l&&l.hasAttribute("formAction")){if(i=l,s=l[U]||null)c=s.formAction;else if(Hu(i)!==null)continue}else c=s.action;typeof c=="function"?t[a+1]=c:(t.splice(a,3),a-=3),fg(t)}}}function hg(){function n(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(s){return i=s})},focusReset:"manual",scroll:"manual"})}function e(){i!==null&&(i(),i=null),a||setTimeout(t,20)}function t(){if(!a&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,i=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(t,100),function(){a=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),i!==null&&(i(),i=null)}}}function Gu(n){this._internalRoot=n}ao.prototype.render=Gu.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(d(409));var t=e.current,a=vt();ig(t,a,n,e,null,null)},ao.prototype.unmount=Gu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ig(n.current,2,null,n,null,null),Gs(),e[ln]=null}};function ao(n){this._internalRoot=n}ao.prototype.unstable_scheduleHydration=function(n){if(n){var e=Ll();n={blockedOn:null,target:n,priority:e};for(var t=0;t<ni.length&&e!==0&&e<ni[t].priority;t++);ni.splice(t,0,n),t===0&&ug(n)}};var mg=m.version;if(mg!=="19.3.1")throw Error(d(527,mg,"19.3.1"));fn.findDOMNode=function(n){var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(d(188)):(n=Object.keys(n).join(","),Error(d(268,n)));return n=Y(e),n=n!==null?z(n):null,n=n===null?null:n.stateNode,n};var ix={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:an,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!io.isDisabled&&io.supportsFiber)try{ae=io.inject(ix),Un=io}catch{}}return Tl.createRoot=function(n,e){if(!T(n))throw Error(d(299));var t=!1,a="",i=ah,l=ih,s=rh;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(l=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=tg(n,1,!1,null,null,t,a,null,i,l,s,hg),n[ln]=e.current,bu(n),new Gu(e)},Tl.hydrateRoot=function(n,e,t){if(!T(n))throw Error(d(299));var a=!1,i="",l=ah,s=ih,c=rh,f=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.formState!==void 0&&(f=t.formState)),e=tg(n,1,!0,e,t??null,a,i,f,l,s,c,hg),e.context=ag(null),t=e.current,a=vt(),a=Mi(a),i=Ua(a),i.callback=null,Ha(t,i,a),t=a,e.current.lanes=t,ri(e,t),na(e),n[ln]=e.current,bu(n),new ao(e)},Tl.version="19.3.1",Tl}var jg;function hx(){if(jg)return Iu.exports;jg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(m){console.error(m)}}return o(),Iu.exports=fx(),Iu.exports}var mx=hx();const gx=Sr(mx);var H=sd();const mo=Sr(H),od=["python","javascript","java","cpp"];function px(){try{const o=localStorage.getItem("selectedLanguage");return o&&od.includes(o)?o:"python"}catch{return"python"}}const Qg=H.createContext(void 0),bx=({children:o})=>{const[m,h]=H.useState(px);return H.useEffect(()=>{try{localStorage.setItem("selectedLanguage",m)}catch{}},[m]),r.jsx(Qg.Provider,{value:{selectedLanguage:m,setSelectedLanguage:h},children:o})};function Xg(){const o=H.useContext(Qg);if(o===void 0)throw new Error("useLanguage must be used within a LanguageProvider");return o}const Jg=H.createContext(void 0);function vx({children:o}){const[m,h]=H.useState(!1),d=()=>h(!0),T=()=>h(!1),R=()=>h(!m);return r.jsx(Jg.Provider,{value:{isSidebarOpen:m,showSidebar:d,hideSidebar:T,toggleSidebar:R},children:o})}function cd(){const o=H.useContext(Jg);if(o===void 0)throw new Error("useSidebar must be used within SidebarProvider");return o}const Zg=H.createContext(void 0);function yx({children:o}){const[m,h]=H.useState("finder");return r.jsx(Zg.Provider,{value:{view:m,setView:h},children:o})}function po(){const o=H.useContext(Zg);if(o===void 0)throw new Error("useView must be used within ViewProvider");return o}const xx="_topbar_1nd3w_1",_x="_container_1nd3w_17",Sx="_visuallyHidden_1nd3w_43",Tx="_wordmark_1nd3w_55",jx="_title_1nd3w_68",wx="_segmented_1nd3w_85",Nx="_segment_1nd3w_85",Ex="_tools_1nd3w_159",Ox="_select_1nd3w_171",Ax="_selectChevron_1nd3w_210",kx="_iconLink_1nd3w_226",Mx="_hamburger_1nd3w_255",Cx="_hamburgerIcon_1nd3w_272",Rx="_hamburgerTop_1nd3w_282",Lx="_open_1nd3w_285",Dx="_hamburgerMiddle_1nd3w_289",zx="_hamburgerBottom_1nd3w_296",_e={topbar:xx,container:_x,visuallyHidden:Sx,wordmark:Tx,title:jx,segmented:wx,segment:Nx,tools:Ex,select:Ox,selectChevron:Ax,iconLink:kx,hamburger:Mx,hamburgerIcon:Cx,hamburgerTop:Rx,open:Lx,hamburgerMiddle:Dx,hamburgerBottom:zx};function Qn(...o){let m="";for(const h of o)if(h){if(typeof h=="string"||typeof h=="number")m+=(m&&" ")+h;else if(Array.isArray(h)){const d=Qn(...h);d&&(m+=(m&&" ")+d)}else if(typeof h=="object")for(const d in h)h[d]&&(m+=(m&&" ")+d)}return m}function Pg(){const o=document.documentElement,m=getComputedStyle(o).getPropertyValue("--navbar-height");return parseFloat(m)||76}function ud(o,m=0){const h=document.querySelector(o);if(!h)return;const d=h.getBoundingClientRect().top+window.scrollY,T=window.matchMedia("(prefers-reduced-motion: reduce)").matches;window.scrollTo({top:Math.max(0,d-m),behavior:T?"auto":"smooth"})}const Bx=2,Ux=2e3;let ld=0;function dd(){cancelAnimationFrame(ld)}function Hx(o,m){dd();const h=performance.now();let d=-1,T=0;const R=()=>{const M=document.querySelector(o);if(M){const q=M.getBoundingClientRect().top+window.scrollY;T=q===d?T+1:0,d=q}const D=performance.now()-h>Ux;if(T>=Bx||D){ud(o,m);return}ld=requestAnimationFrame(R)};ld=requestAnimationFrame(R)}const qx="modulepreload",Gx=function(o){return"/leetcode-pattern-drill/"+o},wg={},go=function(m,h,d){let T=Promise.resolve();if(h&&h.length>0){let q=function(Y){return Promise.all(Y.map(z=>Promise.resolve(z).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const M=document.querySelector("meta[property=csp-nonce]"),D=M?.nonce||M?.getAttribute("nonce");T=q(h.map(Y=>{if(Y=Gx(Y),Y in wg)return;wg[Y]=!0;const z=Y.endsWith(".css"),v=z?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${Y}"]${v}`))return;const E=document.createElement("link");if(E.rel=z?"stylesheet":qx,z||(E.as="script"),E.crossOrigin="",E.href=Y,D&&E.setAttribute("nonce",D),document.head.appendChild(E),z)return new Promise((V,G)=>{E.addEventListener("load",V),E.addEventListener("error",()=>G(new Error(`Unable to preload CSS for ${Y}`)))})}))}function R(M){const D=new Event("vite:preloadError",{cancelable:!0});if(D.payload=M,window.dispatchEvent(D),!D.defaultPrevented)throw M}return T.then(M=>{for(const D of M||[])D.status==="rejected"&&R(D.reason);return m().catch(R)})},Yx="_button_ef3ud_1",Ix={button:Yx},Vx="dyslexic-font";function Ng(){go(()=>Promise.resolve({}),__vite__mapDeps([0])),go(()=>Promise.resolve({}),__vite__mapDeps([1]))}function Kx(){const[o,m]=H.useState(!1);H.useEffect(()=>{const d=document.documentElement.getAttribute("data-font")==="dyslexic";d&&Ng(),m(d)},[]);const h=()=>{const d=!o;m(d),d?(Ng(),document.documentElement.setAttribute("data-font","dyslexic")):document.documentElement.removeAttribute("data-font"),document.documentElement.dispatchEvent(new Event("fontChange"));try{localStorage.setItem(Vx,d?"1":"0")}catch{}};return r.jsx("button",{type:"button",className:Ix.button,"aria-pressed":o,"aria-label":"OpenDyslexic font",title:"Use the OpenDyslexic font",onClick:h,children:"Aa"})}const Qx="_container_125w8_1",Xx="_input_125w8_7",Jx="_label_125w8_18",Zx="_indicator_125w8_34",Px="_sun_125w8_58",Fx="_moon_125w8_65",yr={container:Qx,input:Xx,label:Jx,indicator:Zx,sun:Px,moon:Fx},Wx="theme";function Eg(){document.documentElement.dispatchEvent(new Event("themeChange"))}function $x(){const[o,m]=H.useState("dark");H.useEffect(()=>{const d=document.documentElement.getAttribute("data-theme")==="light"?"light":"dark";m(d),Eg()},[]);const h=()=>{const d=o==="light"?"dark":"light";m(d),document.documentElement.setAttribute("data-theme",d);try{localStorage.setItem(Wx,d)}catch{}Eg()};return r.jsxs("div",{className:yr.container,children:[r.jsx("input",{className:yr.input,"aria-label":"Light theme",role:"switch",id:"theme-switch",type:"checkbox",checked:o==="light",onChange:h}),r.jsx("label",{className:yr.label,htmlFor:"theme-switch",title:"Toggle light theme",children:r.jsxs("span",{className:yr.indicator,children:[r.jsx("svg",{className:yr.moon,viewBox:"0 0 16 16","aria-hidden":"true",children:r.jsx("path",{d:"M13 9.5A5.5 5.5 0 0 1 6.5 3a5.5 5.5 0 1 0 6.5 6.5Z"})}),r.jsxs("svg",{className:yr.sun,viewBox:"0 0 16 16","aria-hidden":"true",children:[r.jsx("circle",{cx:"8",cy:"8",r:"2.75"}),r.jsx("path",{d:"M8 1.5v1.75M8 12.75v1.75M1.5 8h1.75M12.75 8h1.75M3.4 3.4l1.25 1.25M11.35 11.35l1.25 1.25M3.4 12.6l1.25-1.25M11.35 4.65l1.25-1.25"})]})]})})]})}function n_(){return r.jsx("svg",{viewBox:"0 0 128 128",children:r.jsxs("g",{fill:"var(--svg-github-fill)",children:[r.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"}),r.jsx("path",{d:"M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm2.382 3.477c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237m4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"})]})})}const e_=[{id:"finder",label:"Pattern Finder"},{id:"pareto",label:"Pareto Set"},{id:"cheatsheet",label:"Reference"}],t_={python:"Python",javascript:"JavaScript",java:"Java",cpp:"C++"};function a_({forwardedRef:o}){const m=H.useRef(null),{isSidebarOpen:h,showSidebar:d,hideSidebar:T,toggleSidebar:R}=cd(),{view:M,setView:D}=po(),{selectedLanguage:q,setSelectedLanguage:Y}=Xg();H.useLayoutEffect(()=>{if(!m.current)return;const G=new ResizeObserver(Z=>{for(const tn of Z){const Sn=tn.borderBoxSize[0].blockSize;document.documentElement.style.setProperty("--topbar-height",`${Sn}px`)}});return G.observe(m.current),()=>G.disconnect()},[]);const z=G=>{G.preventDefault(),window.history.replaceState({},"",window.location.pathname),ud("main",Pg()-2)},v=()=>R(),E=G=>{G!==M&&(dd(),D(G),G!=="cheatsheet"?T():window.matchMedia("(max-width: 768px)").matches||d(),window.scrollTo({top:0}))},V=G=>{Y(G.target.value)};return r.jsx("header",{ref:m,className:_e.topbar,children:r.jsxs("div",{className:_e.container,children:[M==="cheatsheet"&&r.jsxs("button",{ref:o,type:"button",className:_e.hamburger,onClick:v,"aria-label":h?"Hide reference sections":"Show reference sections","aria-expanded":h,"aria-controls":"reference-sections",children:[r.jsx("span",{className:Qn(_e.hamburgerIcon,_e.hamburgerTop,h&&_e.open)}),r.jsx("span",{className:Qn(_e.hamburgerIcon,_e.hamburgerMiddle,h&&_e.open)}),r.jsx("span",{className:Qn(_e.hamburgerIcon,_e.hamburgerBottom,h&&_e.open)})]}),r.jsx("a",{href:"/leetcode-pattern-drill/",className:_e.wordmark,onClick:z,children:r.jsx("h1",{className:_e.title,children:"Pattern Drill"})}),r.jsx("div",{className:_e.segmented,role:"group","aria-label":"View",children:e_.map(({id:G,label:Z})=>r.jsx("button",{type:"button",className:_e.segment,"aria-pressed":M===G,onClick:()=>E(G),children:Z},G))}),r.jsxs("div",{className:_e.tools,children:[r.jsxs("label",{className:_e.select,children:[r.jsx("span",{className:_e.visuallyHidden,children:"Template language"}),r.jsx("select",{value:q,onChange:V,children:od.map(G=>r.jsx("option",{value:G,children:t_[G]},G))}),r.jsx("svg",{className:_e.selectChevron,viewBox:"0 0 12 12","aria-hidden":"true",children:r.jsx("path",{d:"M2.5 4.5 6 8l3.5-3.5"})})]}),r.jsx(Kx,{}),r.jsx($x,{}),r.jsx("a",{href:"https://github.com/Tyler-Reagan/leetcode-pattern-drill","aria-label":"GitHub source",className:_e.iconLink,target:"_blank",rel:"noopener noreferrer",children:r.jsx(n_,{})})]})]})})}const i_="_sidebar_u19dm_1",r_="_exit_u19dm_17",l_="_hide_u19dm_20",s_="_heading_u19dm_29",o_="_scrollContainer_u19dm_41",jl={sidebar:i_,exit:r_,hide:l_,heading:s_,scrollContainer:o_};var ro={},Og;function c_(){if(Og)return ro;Og=1,ro.match=R,ro.parse=M;var o=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,m=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,h=/^(?:(min|max)-)?(.+)/,d=/(em|rem|px|cm|mm|in|pt|pc)?$/,T=/(dpi|dpcm|dppx)?$/;function R(z,v){return M(z).some(function(E){var V=E.inverse,G=E.type==="all"||v.type===E.type;if(G&&V||!(G||V))return!1;var Z=E.expressions.every(function(tn){var Sn=tn.feature,gn=tn.modifier,mn=tn.value,On=v[Sn];if(!On)return!1;switch(Sn){case"orientation":case"scan":return On.toLowerCase()===mn.toLowerCase();case"width":case"height":case"device-width":case"device-height":mn=Y(mn),On=Y(On);break;case"resolution":mn=q(mn),On=q(On);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":mn=D(mn),On=D(On);break;case"grid":case"color":case"color-index":case"monochrome":mn=parseInt(mn,10)||1,On=parseInt(On,10)||0;break}switch(gn){case"min":return On>=mn;case"max":return On<=mn;default:return On===mn}});return Z&&!V||!Z&&V})}function M(z){return z.split(",").map(function(v){v=v.trim();var E=v.match(o),V=E[1],G=E[2],Z=E[3]||"",tn={};return tn.inverse=!!V&&V.toLowerCase()==="not",tn.type=G?G.toLowerCase():"all",Z=Z.match(/\([^\)]+\)/g)||[],tn.expressions=Z.map(function(Sn){var gn=Sn.match(m),mn=gn[1].toLowerCase().match(h);return{modifier:mn[1],feature:mn[2],value:gn[2]}}),tn})}function D(z){var v=Number(z),E;return v||(E=z.match(/^(\d+)\s*\/\s*(\d+)$/),v=E[1]/E[2]),v}function q(z){var v=parseFloat(z),E=String(z).match(T)[1];switch(E){case"dpcm":return v/2.54;case"dppx":return v*96;default:return v}}function Y(z){var v=parseFloat(z),E=String(z).match(d)[1];switch(E){case"em":return v*16;case"rem":return v*16;case"cm":return v*96/2.54;case"mm":return v*96/2.54/10;case"in":return v*96;case"pt":return v*72;case"pc":return v*72/12;default:return v}}return ro}var Ju,Ag;function u_(){if(Ag)return Ju;Ag=1;var o=c_().match,m=typeof window<"u"?window.matchMedia:null;function h(T,R,M){var D=this,q;m&&!M&&(q=m.call(window,T)),q?(this.matches=q.matches,this.media=q.media,q.addListener(v)):(this.matches=o(T,R),this.media=T),this.addListener=Y,this.removeListener=z,this.dispose=E;function Y(V){q&&q.addListener(V)}function z(V){q&&q.removeListener(V)}function v(V){D.matches=V.matches,D.media=V.media}function E(){q&&q.removeListener(v)}}function d(T,R,M){return new h(T,R,M)}return Ju=d,Ju}var d_=u_();const f_=Sr(d_);var h_=/[A-Z]/g,m_=/^ms-/,Zu={};function g_(o){return"-"+o.toLowerCase()}function Fg(o){if(Zu.hasOwnProperty(o))return Zu[o];var m=o.replace(h_,g_);return Zu[o]=m_.test(m)?"-"+m:m}function p_(o,m){if(o===m)return!0;if(!o||!m)return!1;const h=Object.keys(o),d=Object.keys(m),T=h.length;if(d.length!==T)return!1;for(let R=0;R<T;R++){const M=h[R];if(o[M]!==m[M]||!Object.prototype.hasOwnProperty.call(m,M))return!1}return!0}var Pu={exports:{}},Fu,kg;function b_(){if(kg)return Fu;kg=1;var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Fu=o,Fu}var Wu,Mg;function v_(){if(Mg)return Wu;Mg=1;var o=b_();function m(){}function h(){}return h.resetWarningCache=m,Wu=function(){function d(M,D,q,Y,z,v){if(v!==o){var E=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw E.name="Invariant Violation",E}}d.isRequired=d;function T(){return d}var R={array:d,bigint:d,bool:d,func:d,number:d,object:d,string:d,symbol:d,any:d,arrayOf:T,element:d,elementType:d,instanceOf:T,node:d,objectOf:T,oneOf:T,oneOfType:T,shape:T,exact:T,checkPropTypes:h,resetWarningCache:m};return R.PropTypes=R,R},Wu}var Cg;function y_(){return Cg||(Cg=1,Pu.exports=v_()()),Pu.exports}var x_=y_();const Kn=Sr(x_),nt=Kn.oneOfType([Kn.string,Kn.number]),Wg={all:Kn.bool,grid:Kn.bool,aural:Kn.bool,braille:Kn.bool,handheld:Kn.bool,print:Kn.bool,projection:Kn.bool,screen:Kn.bool,tty:Kn.bool,tv:Kn.bool,embossed:Kn.bool},__={orientation:Kn.oneOf(["portrait","landscape"]),scan:Kn.oneOf(["progressive","interlace"]),aspectRatio:Kn.string,deviceAspectRatio:Kn.string,height:nt,deviceHeight:nt,width:nt,deviceWidth:nt,color:Kn.bool,colorIndex:Kn.bool,monochrome:Kn.bool,resolution:nt,type:Object.keys(Wg)},{type:UN,...S_}=__,T_={minAspectRatio:Kn.string,maxAspectRatio:Kn.string,minDeviceAspectRatio:Kn.string,maxDeviceAspectRatio:Kn.string,minHeight:nt,maxHeight:nt,minDeviceHeight:nt,maxDeviceHeight:nt,minWidth:nt,maxWidth:nt,minDeviceWidth:nt,maxDeviceWidth:nt,minColor:Kn.number,maxColor:Kn.number,minColorIndex:Kn.number,maxColorIndex:Kn.number,minMonochrome:Kn.number,maxMonochrome:Kn.number,minResolution:nt,maxResolution:nt,...S_},j_={...Wg,...T_};var w_={all:j_};const N_=o=>`not ${o}`,E_=(o,m)=>{const h=Fg(o);return typeof m=="number"&&(m=`${m}px`),m===!0?h:m===!1?N_(h):`(${h}: ${m})`},O_=o=>o.join(" and "),A_=o=>{const m=[];return Object.keys(w_.all).forEach(h=>{const d=o[h];d!=null&&m.push(E_(h,d))}),O_(m)},k_=H.createContext(void 0),M_=o=>o.query||A_(o),Rg=o=>o?Object.keys(o).reduce((h,d)=>(h[Fg(d)]=o[d],h),{}):void 0,$g=()=>{const o=H.useRef(!1);return H.useEffect(()=>{o.current=!0},[]),o.current},C_=o=>{const m=H.useContext(k_),h=()=>Rg(o)||Rg(m),[d,T]=H.useState(h);return H.useEffect(()=>{const R=h();p_(d,R)||T(R)},[o,m]),d},R_=o=>{const m=()=>M_(o),[h,d]=H.useState(m);return H.useEffect(()=>{const T=m();h!==T&&d(T)},[o]),h},L_=(o,m)=>{const h=()=>f_(o,m||{},!!m),[d,T]=H.useState(h),R=$g();return H.useEffect(()=>{if(R){const M=h();return T(M),()=>{M&&M.dispose()}}},[o,m]),d},D_=o=>{const[m,h]=H.useState(o.matches);return H.useEffect(()=>{const d=T=>{h(T.matches)};return o.addListener(d),h(o.matches),()=>{o.removeListener(d)}},[o]),m},np=(o,m,h)=>{const d=C_(m),T=R_(o);if(!T)throw new Error("Invalid or missing MediaQuery!");const R=L_(T,d),M=D_(R),D=$g();return H.useEffect(()=>{D&&h&&h(M)},[M]),H.useEffect(()=>()=>{R&&R.dispose()},[]),M};function ep(o,m){H.useEffect(()=>{const h=d=>{const T=d.target;(Array.isArray(o)?o:[o]).every(D=>D.current&&!D.current.contains(T))&&m()};return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)},[o,m])}const z_="_accordion_hdwo0_1",B_="_button_hdwo0_7",U_="_open_hdwo0_42",H_="_content_hdwo0_46",lo={accordion:z_,button:B_,open:U_,content:H_};function q_(o){const m=parseFloat(o);return!isNaN(m)&&isFinite(m)}function Lg(o){return typeof o=="string"&&o[o.length-1]==="%"&&q_(o.substring(0,o.length-1))}function $u(o,m,h){m===0&&!h&&o?.style&&o?.children.length>0&&(o.style.display="none")}function G_(o,m){m===0&&o?.style&&(o.style.display="")}const Y_={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"};function Dg(o,m){return[o.static,m===0&&o.staticHeightZero,typeof m=="number"&&m>0?o.staticHeightSpecific:null,m==="auto"&&o.staticHeightAuto].filter(h=>h).join(" ")}const I_=["animateOpacity","animationStateClasses","applyInlineTransitions","children","className","contentClassName","contentRef","delay","duration","easing","height","onHeightAnimationEnd","onHeightAnimationStart","style","disableDisplayNone"],V_=mo.forwardRef((o,m)=>{const{animateOpacity:h=!1,animationStateClasses:d={},applyInlineTransitions:T=!0,children:R,className:M="",contentClassName:D,delay:q=0,disableDisplayNone:Y=!1,duration:z=500,easing:v="ease",height:E,onHeightAnimationEnd:V,onHeightAnimationStart:G,style:Z,contentRef:tn}=o,Sn={...o};I_.forEach(B=>{delete Sn[B]});const gn=H.useRef(E),mn=H.useRef(null),On=H.useRef(void 0),Xn=H.useRef(void 0),vn=H.useRef({...Y_,...d}),P=typeof window<"u",pn=H.useRef(P&&window.matchMedia?window.matchMedia("(prefers-reduced-motion)").matches:!1),re=pn.current?0:q,fe=pn.current?0:z;let oe=E,be="visible";typeof E=="number"?(oe=E<0?0:E,be="hidden"):Lg(oe)&&(oe=E==="0%"?0:E,be="hidden");const[Qe,Ae]=H.useState(oe),[ue,I]=H.useState(be),[un,W]=H.useState(!1),[Mn,jn]=H.useState(Dg(vn.current,E));H.useEffect(()=>{$u(mn.current,Qe,Y)},[]),H.useEffect(()=>{if(E!==gn.current&&mn.current){G_(mn.current,gn.current),mn.current.style.overflow="hidden";const B=mn.current.offsetHeight;mn.current.style.overflow="";const on=fe+re;let $,dn,Rn="hidden",An;const an=gn.current==="auto";typeof E=="number"?($=E<0?0:E,dn=$):Lg(E)?($=E==="0%"?0:E,dn=$):($=B,dn="auto",Rn=void 0),an&&(dn=$,$=B);const fn=[vn.current.animating,(gn.current==="auto"||E<gn.current)&&vn.current.animatingUp,(E==="auto"||E>gn.current)&&vn.current.animatingDown,dn===0&&vn.current.animatingToHeightZero,dn==="auto"&&vn.current.animatingToHeightAuto,typeof dn=="number"&&dn>0?vn.current.animatingToHeightSpecific:null].filter(ti=>ti).join(" "),et=Dg(vn.current,dn);Ae($),I("hidden"),W(!an),jn(fn),clearTimeout(Xn.current),clearTimeout(On.current),an?(An=!0,Xn.current=setTimeout(()=>{Ae(dn),I(Rn),W(An),G?.(dn),On.current=setTimeout(()=>{W(!1),jn(et),$u(mn.current,dn,Y),V?.(dn)},on)},50)):(G?.($),Xn.current=setTimeout(()=>{Ae(dn),I(Rn),W(!1),jn(et),E!=="auto"&&$u(mn.current,$,Y),V?.($)},on))}return gn.current=oe,()=>{clearTimeout(Xn.current),clearTimeout(On.current)}},[E]);const ce={...Z,height:Qe,overflow:ue||Z?.overflow};un&&T&&(ce.transition=`height ${fe}ms ${v} ${re}ms`,Z?.transition&&(ce.transition=`${Z.transition}, ${ce.transition}`),ce.WebkitTransition=ce.transition);const ve={};h&&(ve.transition=`opacity ${fe}ms ${v} ${re}ms`,ve.WebkitTransition=ve.transition,Qe===0&&(ve.opacity=0));const y=typeof Sn["aria-hidden"]<"u"?Sn["aria-hidden"]:E===0;return mo.createElement("div",{...Sn,"aria-hidden":y,className:`${Mn} ${M}`,style:ce,ref:m},mo.createElement("div",{className:D,style:ve,ref:B=>{mn.current=B,tn&&(tn.current=B)}},R))});function K_(){return r.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("polyline",{points:"6 9 12 15 18 9"})})}function $e({title:o,children:m}){const[h,d]=H.useState(!1),T=h?"auto":0,R=Qn(lo.button,h&&lo.open),M=()=>d(!h);return r.jsxs("div",{className:lo.accordion,children:[r.jsxs("button",{type:"button",className:R,onClick:M,"aria-expanded":h,children:[r.jsx("span",{children:o}),r.jsx(K_,{})]}),r.jsx(V_,{animateOpacity:!0,height:T,duration:400,children:r.jsx("div",{className:lo.content,children:m})})]})}const Q_="_linkWrapper_1p79w_1",X_="_link_1p79w_1",zg={linkWrapper:Q_,link:X_},J_="_tooltip_cgi4r_1",Z_="_exit_cgi4r_15",P_="_text_cgi4r_28",nd={tooltip:J_,exit:Z_,text:P_};var F_=Kg();const W_=Sr(F_);function $_({anchorRef:o,content:m,showTooltip:h}){const d=H.useRef(null),[T,R]=H.useState(null),[M,D]=H.useState(!1),q=Qn(nd.tooltip,!h&&nd.exit),Y=()=>D(!1),z=()=>{h||D(!0)};return H.useEffect(()=>{if(!h||!o.current)return;const v=o.current.getBoundingClientRect(),E=d.current?.offsetHeight??0,V=v.left+window.scrollX,G=v.top+window.scrollY-E-4;R({top:G,left:V})},[h]),(h||!M)&&o.current&&W_.createPortal(r.jsx("div",{ref:d,className:q,style:T??{},onAnimationStart:Y,onAnimationEnd:z,children:r.jsx("span",{className:nd.text,children:m})}),document.body)}const ed="pd-nav-link";function F({href:o,description:m}){const h=H.useRef(null),{view:d,setView:T}=po(),[R,M]=H.useState(!1),[D,q]=H.useState(()=>window.location.hash);let Y;H.useEffect(()=>{const G=()=>q(window.location.hash);return window.addEventListener(ed,G),window.addEventListener("hashchange",G),()=>{window.removeEventListener(ed,G),window.removeEventListener("hashchange",G)}},[]);const z=d==="cheatsheet"&&D===o,v=G=>{G.preventDefault(),window.history.replaceState({},"",o),window.dispatchEvent(new Event(ed)),clearTimeout(Y),M(!1),dd();const Z=Pg()-2;d==="finder"?(T("cheatsheet"),Hx(o,Z)):ud(o,Z)},E=()=>{Y=setTimeout(()=>{M(!0)},700)},V=()=>{clearTimeout(Y),M(!1)};return r.jsxs("div",{className:zg.linkWrapper,children:[r.jsx("a",{ref:h,href:o,className:zg.link,onClick:v,role:"button","aria-current":z?"location":void 0,"aria-description":m,onMouseEnter:E,onMouseLeave:V,children:m}),r.jsx($_,{anchorRef:h,content:m,showTooltip:R})]})}function nS(){return r.jsxs(r.Fragment,{children:[r.jsxs($e,{title:"Big O",children:[r.jsx(F,{href:"#bigo-chart",description:"Time/Space Complexities"}),r.jsx(F,{href:"#bigo-data-structure-operations-table",description:"Data Structure Operations"}),r.jsx(F,{href:"#bigo-sorting-algorithms-table",description:"Sorting Algorithms"})]}),r.jsxs($e,{title:"Array",children:[r.jsx(F,{href:"#array-two-pointers-one-input",description:"two pointers: one input, opposite ends"}),r.jsx(F,{href:"#array-two-pointers-two-inputs",description:"two pointers: two inputs, exhaust both"}),r.jsx(F,{href:"#array-sliding-window",description:"sliding window"}),r.jsx(F,{href:"#array-prefix-sum",description:"prefix sum"}),r.jsx(F,{href:"#array-string-building",description:"efficient string building"})]}),r.jsxs($e,{title:"Hash Map",children:[r.jsx(F,{href:"#hashmap-find-number-of-subarrays",description:"find number of subarrays that fit an exact criteria"}),r.jsx(F,{href:"#hashmap-sliding-window",description:"sliding window"})]}),r.jsxs($e,{title:"Linked List",children:[r.jsx(F,{href:"#linkedlist-fast-and-slow-pointer",description:"fast and slow pointer"}),r.jsx(F,{href:"#linkedlist-reverse",description:"reverse linked list"})]}),r.jsxs($e,{title:"Stack",children:[r.jsx(F,{href:"#stack-monotonic-increasing",description:"monotonic increasing stack"}),r.jsx(F,{href:"#stack-monotonic-decreasing",description:"monotonic decreasing stack"})]}),r.jsxs($e,{title:"Binary Tree",children:[r.jsx(F,{href:"#tree-dfs-recursive",description:"DFS (recursive)"}),r.jsx(F,{href:"#tree-dfs-iterative",description:"DFS (iterative)"}),r.jsx(F,{href:"#tree-bfs",description:"BFS"})]}),r.jsxs($e,{title:"Graph",children:[r.jsx(F,{href:"#graph-dfs-recursive",description:"DFS (recursive)"}),r.jsx(F,{href:"#graph-dfs-iterative",description:"DFS (iterative)"}),r.jsx(F,{href:"#graph-bfs",description:"BFS"}),r.jsx(F,{href:"#graph-dijkstra",description:"Dijkstra (shortest path)"}),r.jsx(F,{href:"#graph-bellman-ford",description:"Bellman-Ford (shortest path)"}),r.jsx(F,{href:"#graph-kahn",description:"Kahn (topological sort)"}),r.jsx(F,{href:"#graph-kruskal",description:"Kruskal (mst)"}),r.jsx(F,{href:"#graph-prim",description:"Prim (mst)"})]}),r.jsx($e,{title:"Heap",children:r.jsx(F,{href:"#heap-find-top-k-elements",description:"find top k elements with heap"})}),r.jsxs($e,{title:"Binary Search",children:[r.jsx(F,{href:"#binarysearch-binary-search",description:"binary search"}),r.jsx(F,{href:"#binarysearch-duplicate-elements-left-insertion",description:"duplicate elements, left-most insertion point"}),r.jsx(F,{href:"#binarysearch-duplicate-elements-right-insertion",description:"duplicate elements, right-most insertion point"}),r.jsx(F,{href:"#binarysearch-greedy-minimum",description:"greedy (minimum)"}),r.jsx(F,{href:"#binarysearch-greedy-maximum",description:"greedy (maximum)"})]}),r.jsx($e,{title:"Backtracking",children:r.jsx(F,{href:"#backtracking-backtracking",description:"backtracking"})}),r.jsxs($e,{title:"Dynamic Programming",children:[r.jsx(F,{href:"#dp-top-down",description:"top-down DP"}),r.jsx(F,{href:"#dp-bottom-up",description:"bottom-up DP"}),r.jsx(F,{href:"#dp-kadane",description:"Kadane (max-sum subarray)"})]}),r.jsxs($e,{title:"Bit Manipulation",children:[r.jsx(F,{href:"#bitmanipulation-test-kth-bit",description:"test kth bit"}),r.jsx(F,{href:"#bitmanipulation-set-kth-bit",description:"set kth bit"}),r.jsx(F,{href:"#bitmanipulation-clear-kth-bit",description:"clear kth bit"}),r.jsx(F,{href:"#bitmanipulation-get-rightmost-bit",description:"get rightmost bit"}),r.jsx(F,{href:"#bitmanipulation-count-set-bits",description:"count set bits"}),r.jsx(F,{href:"#bitmanipulation-multiply-power-of-two",description:"multiply by 2^k"}),r.jsx(F,{href:"#bitmanipulation-divide-power-of-two",description:"divide by 2^k"}),r.jsx(F,{href:"#bitmanipulation-check-power-of-two",description:"check if number is power of 2"}),r.jsx(F,{href:"#bitmanipulation-swap-variables",description:"swap two variables"})]}),r.jsxs($e,{title:"Matrix",children:[r.jsx(F,{href:"#matrix-create-copy",description:"create / copy"}),r.jsx(F,{href:"#matrix-diagonals",description:"main / anti diagonals"}),r.jsx(F,{href:"#matrix-rotate-transpose",description:"rotate / transpose"})]}),r.jsxs($e,{title:"Data Structures",children:[r.jsx(F,{href:"#ds-array",description:"array"}),r.jsx(F,{href:"#ds-hash-map",description:"hashmap"}),r.jsx(F,{href:"#ds-linked-list",description:"linked list"}),r.jsx(F,{href:"#ds-doubly-linked-list",description:"doubly linked list"}),r.jsx(F,{href:"#ds-binary-tree",description:"binary tree"}),r.jsx(F,{href:"#ds-binary-search-tree",description:"binary search tree"}),r.jsx(F,{href:"#ds-graph",description:"graph"}),r.jsx(F,{href:"#ds-union-find",description:"union find"}),r.jsx(F,{href:"#ds-union-find-optimized",description:"union find optimized"}),r.jsx(F,{href:"#ds-trie",description:"trie"})]}),r.jsxs($e,{title:"Sorting Algorithms",children:[r.jsx(F,{href:"#sort-bubble",description:"bubble sort"}),r.jsx(F,{href:"#sort-selection",description:"selection sort"}),r.jsx(F,{href:"#sort-insertion",description:"insertion sort"}),r.jsx(F,{href:"#sort-shell",description:"shell sort"}),r.jsx(F,{href:"#sort-merge",description:"mergesort"}),r.jsx(F,{href:"#sort-quick",description:"quicksort"}),r.jsx(F,{href:"#sort-tim",description:"timsort"}),r.jsx(F,{href:"#sort-heap",description:"heapsort"}),r.jsx(F,{href:"#sort-counting",description:"counting sort"}),r.jsx(F,{href:"#sort-bucket",description:"bucket sort"}),r.jsx(F,{href:"#sort-radix",description:"radix sort"}),r.jsx(F,{href:"#sort-cube",description:"cubesort"}),r.jsx(F,{href:"#sort-bogo",description:"bogo sort"}),r.jsx(F,{href:"#sort-pancake",description:"pancake sort"}),r.jsx(F,{href:"#sort-sleep",description:"sleep sort"})]})]})}function eS({hamburgerButtonRef:o}){const m=H.useRef(null),{isSidebarOpen:h,showSidebar:d,hideSidebar:T}=cd(),{view:R}=po(),[M,D]=H.useState(()=>!h),q=Qn(jl.sidebar,!h&&jl.exit,!h&&M&&jl.hide),Y=G=>{G&&h?T():!G&&!h&&R==="cheatsheet"&&d()};H.useEffect(()=>{R!=="cheatsheet"&&h&&T()},[R,h,T]);const z=np({maxWidth:768},void 0,Y),v=()=>{z&&h&&T()},E=()=>D(!1),V=()=>{h||D(!0)};return ep([m,o],v),r.jsxs("nav",{ref:m,id:"reference-sections","aria-label":"Reference sections",className:q,onAnimationStart:E,onAnimationEndCapture:V,children:[r.jsx("h2",{className:jl.heading,children:"Reference"}),r.jsx("div",{className:jl.scrollContainer,children:r.jsx(nS,{})})]})}function tS(){const o=H.useRef(null);return r.jsxs("div",{id:"AppBar",children:[r.jsx(a_,{forwardedRef:o}),r.jsx(eS,{hamburgerButtonRef:o})]})}const aS="_main_bsmjw_1",iS="_sidebarHidden_bsmjw_12",Bg={main:aS,sidebarHidden:iS},rS="_finder_1rje5_1",lS="_mapMode_1rje5_15",sS="_log_1rje5_42",oS="_logHead_1rje5_51",cS="_logHint_1rje5_61",uS="_logRows_1rje5_67",dS="_row_1rje5_79",fS="_rowNum_1rje5_93",hS="_rowBack_1rje5_97",mS="_rowNumDashed_1rje5_119",gS="_rowText_1rje5_123",pS="_rowQuestion_1rje5_130",bS="_rowCue_1rje5_140",vS="_rowLive_1rje5_157",yS="_rowReady_1rje5_167",xS="_rowCurrent_1rje5_171",_S="_rowResult_1rje5_172",SS="_rowFault_1rje5_187",TS="_nextWrap_1rje5_195",jS="_nextCheck_1rje5_199",wS="_nextLabel_1rje5_210",NS="_line_1rje5_218",ES="_stops_1rje5_222",OS="_stop_1rje5_222",AS="_dashedNext_1rje5_251",kS="_dot_1rje5_255",MS="_answered_1rje5_265",CS="_current_1rje5_269",RS="_reached_1rje5_270",LS="_end_1rje5_274",DS="_fault_1rje5_279",zS="_stopInner_1rje5_284",BS="_stopButton_1rje5_285",US="_cue_1rje5_303",HS="_card_1rje5_313",qS="_strip_1rje5_328",GS="_stripEnd_1rje5_348",YS="_mapStatus_1rje5_359",IS="_seg_1rje5_372",VS="_segButton_1rje5_381",KS="_segOn_1rje5_404",QS="_mapFallback_1rje5_410",XS="_stripTitle_1rje5_414",JS="_stripValue_1rje5_424",ZS="_timer_1rje5_430",PS="_cells_1rje5_437",FS="_cell_1rje5_437",WS="_colon_1rje5_443",$S="_signCell_1rje5_468",nT="_timerCaption_1rje5_489",eT="_idle_1rje5_499",tT="_ok_1rje5_503",aT="_warn_1rje5_507",iT="_over_1rje5_514",rT="_body_1rje5_526",lT="_question_1rje5_540",sT="_resultName_1rje5_541",oT="_lead_1rje5_557",cT="_actions_1rje5_569",uT="_primary_1rje5_575",dT="_kbd_1rje5_602",fT="_options_1rje5_607",hT="_option_1rje5_607",mT="_optionCue_1rje5_653",gT="_footer_1rje5_676",pT="_plain_1rje5_688",bT="_fields_1rje5_728",vT="_field_1rje5_728",yT="_figure_1rje5_759",xT="_okNote_1rje5_767",_T="_overNote_1rje5_771",ST="_summary_1rje5_776",TT="_templates_1rje5_787",jT="_note_1rje5_796",wT="_commonProblems_1rje5_801",NT="_commonProblemsLoose_1rje5_835",ET="_commonProblemsNote_1rje5_840",OT="_commonProblemsNum_1rje5_846",AT="_docsLink_1rje5_852",kT="_srOnly_1rje5_863",MT="_turn_1rje5_1",A={finder:rS,mapMode:lS,log:sS,logHead:oS,logHint:cS,logRows:uS,row:dS,rowNum:fS,rowBack:hS,rowNumDashed:mS,rowText:gS,rowQuestion:pS,rowCue:bS,rowLive:vS,rowReady:yS,rowCurrent:xS,rowResult:_S,rowFault:SS,nextWrap:TS,nextCheck:jS,nextLabel:wS,line:NS,stops:ES,stop:OS,dashedNext:AS,dot:kS,answered:MS,current:CS,reached:RS,end:LS,fault:DS,stopInner:zS,stopButton:BS,cue:US,card:HS,strip:qS,stripEnd:GS,mapStatus:YS,seg:IS,segButton:VS,segOn:KS,mapFallback:QS,stripTitle:XS,stripValue:JS,timer:ZS,cells:PS,cell:FS,colon:WS,signCell:$S,timerCaption:nT,idle:eT,ok:tT,warn:aT,over:iT,body:rT,question:lT,resultName:sT,lead:oT,actions:cT,primary:uT,kbd:dT,options:fT,option:hT,optionCue:mT,footer:gT,plain:pT,fields:bT,field:vT,figure:yT,okNote:xT,overNote:_T,summary:ST,templates:TT,note:jT,commonProblems:wT,commonProblemsLoose:NT,commonProblemsNote:ET,commonProblemsNum:OT,docsLink:AT,srOnly:kT,turn:MT},j=(o,m,h,d=!1)=>d?{lc:o,name:m,slug:h,loose:d}:{lc:o,name:m,slug:h},Ei={rootId:"q-input",nodes:{"q-input":{id:"q-input",question:"What does the problem give you?",options:[{cue:"an array, a string, or a 2D board of values",next:"q-array"},{cue:"a linked list",next:"q-list"},{cue:"a binary tree or BST",next:"q-tree"},{cue:"a graph, edges, prerequisites, or a grid of cells you move between",next:"q-graph"},{cue:"a data stream, or a design-a-class prompt",next:"q-design"},{cue:"an integer n, or work done on its individual bits",next:"q-number"}]},"q-array":{id:"q-array",question:"What does it ask about the array or string?",options:[{cue:"a contiguous subarray or substring, or range sums or products",next:"q-subarray"},{cue:"a pair or triplet that hits a target or scores best, a palindrome, or an in-place edit",next:"q-pointers"},{cue:"searching a sorted or rotated array, or the smallest or largest value that works",next:"q-search"},{cue:"the next greater or smaller element of each item",next:"q-mono"},{cue:"counts, duplicates, membership, top K or repeated largest, brackets, words",next:"q-lookup"},{cue:"choices over elements: generate them all, or find the best or count the ways",next:"q-choices"},{cue:"intervals with a start and an end",next:"sort-first"}]},"q-subarray":{id:"q-subarray",question:"What does it want from the subarray or substring?",options:[{cue:"sum or average of each size-K window",next:"sliding-window-fixed"},{cue:"longest or shortest window that meets a rule",next:"q-window-variable"},{cue:"count subarrays with exactly K distinct or odd",next:"sliding-window-exactly-k"},{cue:"a sum or product over a range: equal to K, between i and j, or everything except one index",next:"q-prefix"},{cue:"maximum sum subarray of any length",next:"dp-kadane"},{cue:"max or min inside each size-K window",next:"monotonic-deque"}]},"q-window-variable":{id:"q-window-variable",question:"What does the window rule check?",options:[{cue:"sum or product vs a target, with non-negative numbers",next:"sliding-window-variable"},{cue:"which characters the window holds, and how many of each",next:"hashmap-sliding-window"}]},"q-prefix":{id:"q-prefix",question:"What kind of range-total question?",options:[{cue:"many queries for the sum between index i and j",next:"prefix-sum-range"},{cue:"for each index, a total of everything except that index",next:"prefix-sum-range"},{cue:"count or longest subarrays with sum K, when values can be negative",next:"prefix-sum-hashmap"}]},"q-pointers":{id:"q-pointers",question:"What kind of pair, check, or edit?",options:[{cue:"a pair or triplet that hits a target, when the array is sorted or the values matter, not their positions",next:"two-pointers-converging"},{cue:"a palindrome or other mirror-image check",next:"two-pointers-converging"},{cue:"the best pair where how far apart they are is part of the score",next:"two-pointers-converging"},{cue:"the largest rise from an earlier element to a later one",next:"dp-kadane"},{cue:"walking two separate inputs together",next:"two-pointers-two-inputs"},{cue:"rewriting the array in place, keeping some elements and moving or dropping the rest",next:"two-pointers-fast-slow-inplace"},{cue:"two numbers that hit a target in an unsorted array, returning their original positions",next:"hashmap-frequency"}]},"q-search":{id:"q-search",question:"What are you searching for?",options:[{cue:"a given value, or the minimum, in a sorted or rotated array",next:"binary-search-classic"},{cue:"first position of X, or where to insert X",next:"binary-search-left-bound"},{cue:"last position of X, or count of elements <= X",next:"binary-search-right-bound"},{cue:"smallest capacity or speed that works (minimize the max)",next:"binary-search-answer-minimize"},{cue:"largest distance or size that works (maximize the min)",next:"binary-search-answer-maximize"}]},"q-mono":{id:"q-mono",question:"What do you need for each element?",options:[{cue:"the next greater element for each item",next:"monotonic-stack-decreasing"},{cue:"the next smaller element for each item",next:"monotonic-stack-increasing"},{cue:"max or min inside each size-K window",next:"monotonic-deque"}]},"q-lookup":{id:"q-lookup",question:"What do you need to do with the data?",options:[{cue:"counting or grouping items that match",next:"hashmap-frequency"},{cue:"whether a value, or the value next to it, is present, in linear time",next:"hashmap-frequency"},{cue:"the K best items, or the Kth one, by size or frequency",next:"heap-top-k"},{cue:"repeatedly take the largest values, combine them, and put the result back",next:"heap-top-k"},{cue:"matching or nested structure, where the last thing opened closes first",next:"stack-matching"},{cue:"prefix lookups over a word list",next:"trie"},{cue:"building an output string piece by piece",next:"string-building"},{cue:"operating on the bits of numbers",next:"bit-manipulation"}]},"q-choices":{id:"q-choices",question:"What are you trying to do with the choices?",options:[{cue:"generate every subset, permutation, or combination",next:"q-backtrack"},{cue:"best cost, or number of ways, over the choices",next:"q-dp"},{cue:"a locally best move each step is enough",next:"greedy"}]},"q-backtrack":{id:"q-backtrack",question:"Can a partial choice be rejected early?",options:[{cue:"no, every candidate has to be generated",next:"backtracking"},{cue:"yes, a constraint lets you reject a partial choice early",next:"backtracking-pruning"}]},"q-dp":{id:"q-dp",question:"What do the choices look like?",options:[{cue:"items you can reuse any number of times",next:"dp-unbounded-knapsack"},{cue:"each item can be used at most once",next:"dp-01-knapsack"},{cue:"ordering or matching within one or two sequences",next:"dp-sequences"},{cue:"something else, where each state depends on earlier states",next:"q-dp-style"}]},"q-dp-style":{id:"q-dp-style",question:"Which way is the recurrence easier to write?",options:[{cue:"recurse from a state and cache the result",next:"dp-top-down"},{cue:"fill dp[i] or dp[r][c] from earlier cells",next:"dp-bottom-up"}]},"q-list":{id:"q-list",question:"What do you do with the list?",options:[{cue:"a cycle, the middle, or a position counted from the end",next:"linked-list-fast-slow"},{cue:"interleave or compare the front half with the back half",next:"linked-list-split-reverse-merge"},{cue:"reverse the list, a sublist, or k-groups",next:"linked-list-reverse"},{cue:"merge two sorted lists",next:"linked-list-merge-sorted"},{cue:"merge K sorted lists",next:"heap-merge-k"}]},"q-tree":{id:"q-tree",question:"What does it ask about the tree?",options:[{cue:"what the tree looks like level by level, or from one side",next:"tree-bfs"},{cue:"a measure of the whole tree, like its height, balance, or longest path",next:"tree-dfs-recursive"},{cue:"a change made at every node, or whether two trees match or one appears inside the other",next:"tree-dfs-recursive"},{cue:"a check at each node against its ancestors on the path from the root",next:"tree-dfs-recursive"},{cue:"find, insert, or delete a value in a BST, or the lowest node above two given nodes",next:"bst-walk"},{cue:"a BST's values in sorted order, one at a time or up to the kth",next:"tree-dfs-iterative"}]},"q-graph":{id:"q-graph",question:"What does it ask about the graph or grid?",options:[{cue:"everything connected to a start: count regions, measure them, or copy them",next:"graph-dfs"},{cue:"which cells connect to the edge of the grid",next:"graph-dfs"},{cue:"shortest path or minimum steps",next:"q-shortest"},{cue:"an order that respects prerequisites, or proof that none exists",next:"topological-sort"},{cue:"whether two items are already in the same group, or an edge closes an undirected cycle",next:"union-find"},{cue:"minimum cost to connect all points",next:"mst"},{cue:"a grid where you can only move right or down",next:"q-dp"}]},"q-shortest":{id:"q-shortest",question:"What kind of shortest path?",options:[{cue:"unweighted edges, from one start",next:"graph-bfs-shortest-path"},{cue:"spreads from many sources at once",next:"multi-source-bfs"},{cue:"weighted edges",next:"shortest-path-weighted"}]},"q-design":{id:"q-design",question:"What must the structure support?",options:[{cue:"median of a data stream",next:"two-heaps"},{cue:"the Kth largest of the values so far, after each new value",next:"heap-top-k"},{cue:"only the items from a recent time span or the last N arrivals, or a fixed-size queue",next:"queue-design"},{cue:"constant-time lookup plus keeping items ordered by when they were last used",next:"design-hashmap-linked-list"},{cue:"storing words so prefix and exact lookups are fast",next:"trie"},{cue:"a stack that also answers a question about its contents, like its minimum, in constant time",next:"stack-matching"},{cue:"stepping back through a history of actions",next:"stack-matching"}]},"q-number":{id:"q-number",question:"What does it ask about n?",options:[{cue:"bit-level properties of n",next:"bit-manipulation"},{cue:"the nth term defined by earlier terms",next:"q-dp"},{cue:"the largest x whose square is still at most n",next:"binary-search-answer-maximize"},{cue:"guess the number in 1..n",next:"binary-search-classic"}]}},leaves:{"two-pointers-converging":{id:"two-pointers-converging",name:"Two pointers, converging",pattern:"Two Pointers",summary:"Sorted array pairs/triplets, palindromes, in-place reversal. Start at both ends and move the pointer whose side cannot be part of the answer.",docsUrl:"https://resources.devweekends.com/dsa-patterns/two-pointers",problems:[j(167,"Two Sum II - Input Array Is Sorted","two-sum-ii-input-array-is-sorted"),j(15,"3Sum","3sum"),j(11,"Container With Most Water","container-with-most-water"),j(125,"Valid Palindrome","valid-palindrome")],templateIds:["two-pointers-one-input"]},"two-pointers-two-inputs":{id:"two-pointers-two-inputs",name:"Two pointers, two inputs",pattern:"Two Pointers",summary:"Merge sorted arrays, subsequence checks. One pointer per input; advance the one whose element is consumed.",docsUrl:"https://resources.devweekends.com/dsa-patterns/two-pointers",problems:[j(88,"Merge Sorted Array","merge-sorted-array"),j(392,"Is Subsequence","is-subsequence"),j(986,"Interval List Intersections","interval-list-intersections")],templateIds:["two-pointers-two-inputs"]},"two-pointers-fast-slow-inplace":{id:"two-pointers-fast-slow-inplace",name:"Two pointers, read/write in place",pattern:"Two Pointers",summary:"Remove duplicates, move zeroes, partition in O(1) space. A fast pointer reads every element; a slow pointer marks where the next kept element is written.",docsUrl:"https://resources.devweekends.com/dsa-patterns/two-pointers",problems:[j(26,"Remove Duplicates from Sorted Array","remove-duplicates-from-sorted-array"),j(283,"Move Zeroes","move-zeroes"),j(27,"Remove Element","remove-element"),j(75,"Sort Colors","sort-colors")],templateIds:[]},"sliding-window-fixed":{id:"sliding-window-fixed",name:"Sliding window, fixed size",pattern:"Sliding Window",summary:"Every window of exactly K elements. Add the entering element and remove the leaving one so each step is O(1).",docsUrl:"https://resources.devweekends.com/dsa-patterns/sliding-window",problems:[j(643,"Maximum Average Subarray I","maximum-average-subarray-i"),j(1456,"Maximum Number of Vowels in a Substring of Given Length","maximum-number-of-vowels-in-a-substring-of-given-length")],templateIds:["sliding-window"]},"sliding-window-variable":{id:"sliding-window-variable",name:"Sliding window, variable size",pattern:"Sliding Window",summary:"Longest/shortest subarray meeting a sum-style rule with non-negative values. Expand right, shrink left while the window is invalid (or while valid, for shortest).",docsUrl:"https://resources.devweekends.com/dsa-patterns/sliding-window",problems:[j(209,"Minimum Size Subarray Sum","minimum-size-subarray-sum"),j(713,"Subarray Product Less Than K","subarray-product-less-than-k"),j(1004,"Max Consecutive Ones III","max-consecutive-ones-iii")],templateIds:["sliding-window"]},"sliding-window-exactly-k":{id:"sliding-window-exactly-k",name:"Sliding window, exactly K",pattern:"Sliding Window",summary:'"Exactly K" is not monotonic, so count it as atMost(K) - atMost(K-1), each a standard variable window.',docsUrl:"https://resources.devweekends.com/dsa-patterns/sliding-window",problems:[j(992,"Subarrays with K Different Integers","subarrays-with-k-different-integers"),j(1248,"Count Number of Nice Subarrays","count-number-of-nice-subarrays"),j(930,"Binary Subarrays With Sum","binary-subarrays-with-sum")],templateIds:[]},"prefix-sum-range":{id:"prefix-sum-range",name:"Prefix sum, range queries",pattern:"Prefix Sum",summary:"Range totals on a fixed array, or for each index the total of everything before and after it. Precompute prefix (and suffix) sums or products; each answer is then O(1), e.g. prefix[j+1] - prefix[i].",docsUrl:"https://resources.devweekends.com/dsa-patterns/prefix-sum",problems:[j(303,"Range Sum Query - Immutable","range-sum-query-immutable"),j(304,"Range Sum Query 2D - Immutable","range-sum-query-2d-immutable"),j(238,"Product of Array Except Self","product-of-array-except-self"),j(724,"Find Pivot Index","find-pivot-index")],templateIds:["prefix-sum"]},"prefix-sum-hashmap":{id:"prefix-sum-hashmap",name:"Prefix sum, hash map",pattern:"Prefix Sum",summary:"Count or find subarrays with sum K when negatives break sliding window. Store prefix-sum counts (seeded with {0: 1}) and look up prefix - K.",docsUrl:"https://resources.devweekends.com/dsa-patterns/prefix-sum",problems:[j(560,"Subarray Sum Equals K","subarray-sum-equals-k"),j(525,"Contiguous Array","contiguous-array"),j(974,"Subarray Sums Divisible by K","subarray-sums-divisible-by-k")],templateIds:["hashmap-find-number-of-subarrays"]},"string-building":{id:"string-building",name:"String building",pattern:"String",summary:"Producing a new string piece by piece. Append to a list or builder and join once at the end; repeated concatenation is O(n^2).",docsUrl:"https://resources.devweekends.com/dsa-patterns/stack",problems:[j(151,"Reverse Words in a String","reverse-words-in-a-string"),j(443,"String Compression","string-compression"),j(1768,"Merge Strings Alternately","merge-strings-alternately")],templateIds:["string-building"]},"binary-search-classic":{id:"binary-search-classic",name:"Binary search, find target",pattern:"Binary Search",summary:"Find an exact value in a sorted (or rotated) space. Halve the range each step by comparing the middle with the target.",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",problems:[j(704,"Binary Search","binary-search"),j(153,"Find Minimum in Rotated Sorted Array","find-minimum-in-rotated-sorted-array"),j(33,"Search in Rotated Sorted Array","search-in-rotated-sorted-array"),j(74,"Search a 2D Matrix","search-a-2d-matrix")],templateIds:["binary-search"]},"binary-search-left-bound":{id:"binary-search-left-bound",name:"Binary search, left bound",pattern:"Binary Search",summary:"First position of X or its insertion point. Keep searching left when nums[mid] >= X to land on the leftmost index.",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",problems:[j(35,"Search Insert Position","search-insert-position"),j(278,"First Bad Version","first-bad-version"),j(34,"Find First and Last Position of Element in Sorted Array","find-first-and-last-position-of-element-in-sorted-array")],templateIds:["binary-search-left-insertion"]},"binary-search-right-bound":{id:"binary-search-right-bound",name:"Binary search, right bound",pattern:"Binary Search",summary:"Last position of X, or count of elements <= X. Search for the insertion point after every copy of X (go right when nums[mid] <= X).",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",problems:[j(34,"Find First and Last Position of Element in Sorted Array","find-first-and-last-position-of-element-in-sorted-array"),j(744,"Find Smallest Letter Greater Than Target","find-smallest-letter-greater-than-target")],templateIds:["binary-search-right-insertion"]},"binary-search-answer-minimize":{id:"binary-search-answer-minimize",name:"Binary search on answer, minimum",pattern:"Binary Search",summary:"Smallest value that still works (min capacity, min speed, minimize the max). Binary search the answer range with a greedy feasibility check.",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",problems:[j(875,"Koko Eating Bananas","koko-eating-bananas"),j(1011,"Capacity To Ship Packages Within D Days","capacity-to-ship-packages-within-d-days"),j(410,"Split Array Largest Sum","split-array-largest-sum")],templateIds:["binary-search-greedy-minimum"]},"binary-search-answer-maximize":{id:"binary-search-answer-maximize",name:"Binary search on answer, maximum",pattern:"Binary Search",summary:"Largest value that still works (maximize the minimum distance). Binary search the answer range, keeping the best feasible value.",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",problems:[j(69,"Sqrt(x)","sqrtx"),j(1552,"Magnetic Force Between Two Balls","magnetic-force-between-two-balls"),j(2226,"Maximum Candies Allocated to K Children","maximum-candies-allocated-to-k-children")],templateIds:["binary-search-greedy-maximum"]},"sort-first":{id:"sort-first",name:"Sort first, then scan",pattern:"Sorting",summary:"Intervals, meetings, or anything easier in order. Sort (often by start or end), then apply a linear scan, greedy, heap, or two pointers.",docsUrl:"https://resources.devweekends.com/dsa-patterns/sorting",problems:[j(56,"Merge Intervals","merge-intervals"),j(435,"Non-overlapping Intervals","non-overlapping-intervals"),j(57,"Insert Interval","insert-interval")],templateIds:[]},"hashmap-frequency":{id:"hashmap-frequency",name:"Hash map, lookup and frequency",pattern:"Hash Map",summary:"Counting, duplicates, anagrams, grouping, or unsorted two-sum. Store counts or complements so each lookup is O(1).",docsUrl:"https://resources.devweekends.com/dsa-patterns/hashmap",problems:[j(1,"Two Sum","two-sum"),j(217,"Contains Duplicate","contains-duplicate"),j(242,"Valid Anagram","valid-anagram"),j(49,"Group Anagrams","group-anagrams"),j(36,"Valid Sudoku","valid-sudoku"),j(128,"Longest Consecutive Sequence","longest-consecutive-sequence")],templateIds:[]},"hashmap-sliding-window":{id:"hashmap-sliding-window",name:"Sliding window, hash map",pattern:"Sliding Window",summary:"Substring with no repeats, at most K distinct, or containing all of T. A frequency map tracks the window so you know when to shrink.",docsUrl:"https://resources.devweekends.com/dsa-patterns/sliding-window",problems:[j(3,"Longest Substring Without Repeating Characters","longest-substring-without-repeating-characters"),j(76,"Minimum Window Substring","minimum-window-substring"),j(424,"Longest Repeating Character Replacement","longest-repeating-character-replacement")],templateIds:["hashmap-sliding-window"]},"stack-matching":{id:"stack-matching",name:"Stack, matching and saved state",pattern:"Stack",summary:"Brackets, expression evaluation, path simplification, undo, or a stack that also tracks extra state. Push openings, or state alongside each value; pop when the match arrives or to restore earlier state.",docsUrl:"https://resources.devweekends.com/dsa-patterns/stack",problems:[j(20,"Valid Parentheses","valid-parentheses"),j(71,"Simplify Path","simplify-path"),j(155,"Min Stack","min-stack"),j(150,"Evaluate Reverse Polish Notation","evaluate-reverse-polish-notation")],templateIds:[]},"monotonic-stack-increasing":{id:"monotonic-stack-increasing",name:"Monotonic stack, increasing",pattern:"Monotonic Stack",summary:"Next/previous smaller element. Keep the stack increasing; a smaller arrival pops and resolves the taller entries.",docsUrl:"https://resources.devweekends.com/dsa-patterns/monotonic-stack",problems:[j(84,"Largest Rectangle in Histogram","largest-rectangle-in-histogram"),j(85,"Maximal Rectangle","maximal-rectangle")],templateIds:["stack-monotonic-increasing"]},"monotonic-stack-decreasing":{id:"monotonic-stack-decreasing",name:"Monotonic stack, decreasing",pattern:"Monotonic Stack",summary:"Next/previous greater element. Keep the stack decreasing; a larger arrival pops and resolves the smaller entries.",docsUrl:"https://resources.devweekends.com/dsa-patterns/monotonic-stack",problems:[j(739,"Daily Temperatures","daily-temperatures"),j(496,"Next Greater Element I","next-greater-element-i"),j(503,"Next Greater Element II","next-greater-element-ii"),j(901,"Online Stock Span","online-stock-span")],templateIds:["stack-monotonic-decreasing"]},"monotonic-deque":{id:"monotonic-deque",name:"Monotonic deque",pattern:"Monotonic Deque",summary:"Max or min of every window of size K. Keep a deque of indices in monotonic order; drop expired indices from the front.",docsUrl:"https://resources.devweekends.com/dsa-patterns/queue",problems:[j(239,"Sliding Window Maximum","sliding-window-maximum"),j(1438,"Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit","longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit")],templateIds:[]},"queue-design":{id:"queue-design",name:"Queue design",pattern:"Queue",summary:"Rolling windows over recent items, rate limiting, fixed-size queues. FIFO of values or timestamps, evicting from the front as they expire.",docsUrl:"https://resources.devweekends.com/dsa-patterns/queue",problems:[j(933,"Number of Recent Calls","number-of-recent-calls"),j(622,"Design Circular Queue","design-circular-queue"),j(346,"Moving Average from Data Stream","moving-average-from-data-stream")],templateIds:[]},"design-hashmap-linked-list":{id:"design-hashmap-linked-list",name:"Hash map + doubly linked list",pattern:"Design",summary:"Constant-time lookup plus constant-time reordering or eviction by recency. A hash map finds a key's node; a doubly linked list keeps items in recency order, oldest at one end.",docsUrl:"https://resources.devweekends.com/dsa-patterns/linked-list",problems:[j(146,"LRU Cache","lru-cache"),j(460,"LFU Cache","lfu-cache",!0)],templateIds:[]},"heap-top-k":{id:"heap-top-k",name:"Heap, top K and repeated max",pattern:"Heap",summary:"K largest, K most frequent, Kth element (also in a stream), or taking the current largest again and again. A min-heap of size K for top K; a max-heap of everything when you must keep pulling the largest.",docsUrl:"https://resources.devweekends.com/dsa-patterns/heap",problems:[j(215,"Kth Largest Element in an Array","kth-largest-element-in-an-array"),j(347,"Top K Frequent Elements","top-k-frequent-elements"),j(703,"Kth Largest Element in a Stream","kth-largest-element-in-a-stream"),j(1046,"Last Stone Weight","last-stone-weight"),j(973,"K Closest Points to Origin","k-closest-points-to-origin")],templateIds:["heap-find-top-k-elements"]},"heap-merge-k":{id:"heap-merge-k",name:"Heap, merge K sorted",pattern:"Heap",summary:"Merge K sorted lists or streams. Push each head into a min-heap; pop the smallest and push its successor.",docsUrl:"https://resources.devweekends.com/dsa-patterns/heap",problems:[j(23,"Merge k Sorted Lists","merge-k-sorted-lists"),j(378,"Kth Smallest Element in a Sorted Matrix","kth-smallest-element-in-a-sorted-matrix"),j(373,"Find K Pairs with Smallest Sums","find-k-pairs-with-smallest-sums"),j(1046,"Last Stone Weight","last-stone-weight",!0)],templateIds:[]},"two-heaps":{id:"two-heaps",name:"Two heaps",pattern:"Heap",summary:"Running median of a stream. A max-heap holds the lower half and a min-heap the upper half, rebalanced so sizes differ by at most one.",docsUrl:"https://resources.devweekends.com/dsa-patterns/heap",problems:[j(295,"Find Median from Data Stream","find-median-from-data-stream"),j(480,"Sliding Window Median","sliding-window-median")],templateIds:[]},trie:{id:"trie",name:"Trie",pattern:"Trie",summary:"Prefix matching, autocomplete, word dictionaries. Store words character by character in a tree so prefix lookups cost O(length).",docsUrl:"https://resources.devweekends.com/dsa-patterns/trie",problems:[j(208,"Implement Trie (Prefix Tree)","implement-trie-prefix-tree"),j(211,"Design Add and Search Words Data Structure","design-add-and-search-words-data-structure"),j(212,"Word Search II","word-search-ii")],templateIds:["ds-trie"]},"linked-list-fast-slow":{id:"linked-list-fast-slow",name:"Linked list, fast and slow pointers",pattern:"Linked List",summary:"Cycle detection, middle node, Nth from end. Move one pointer twice as fast (Floyd's) or give one a head start.",docsUrl:"https://resources.devweekends.com/dsa-patterns/linked-list",problems:[j(141,"Linked List Cycle","linked-list-cycle"),j(876,"Middle of the Linked List","middle-of-the-linked-list"),j(19,"Remove Nth Node From End of List","remove-nth-node-from-end-of-list"),j(142,"Linked List Cycle II","linked-list-cycle-ii")],templateIds:["linkedlist-fast-and-slow-pointer"]},"linked-list-reverse":{id:"linked-list-reverse",name:"Linked list, reverse",pattern:"Linked List",summary:"Reverse a whole list, a sublist, or k-groups. Walk with prev/curr/next and flip each pointer.",docsUrl:"https://resources.devweekends.com/dsa-patterns/linked-list",problems:[j(206,"Reverse Linked List","reverse-linked-list"),j(92,"Reverse Linked List II","reverse-linked-list-ii"),j(25,"Reverse Nodes in k-Group","reverse-nodes-in-k-group")],templateIds:["linkedlist-reverse"]},"linked-list-merge-sorted":{id:"linked-list-merge-sorted",name:"Linked list, merge sorted",pattern:"Linked List",summary:"Merge two sorted lists. Use a dummy head and always attach the smaller of the two current nodes.",docsUrl:"https://resources.devweekends.com/dsa-patterns/linked-list",problems:[j(21,"Merge Two Sorted Lists","merge-two-sorted-lists"),j(148,"Sort List","sort-list")],templateIds:[]},"linked-list-split-reverse-merge":{id:"linked-list-split-reverse-merge",name:"Linked list, split, reverse, merge",pattern:"Linked List",summary:"Interleave or compare the two halves of a list. Find the middle with fast and slow pointers, reverse the second half, then merge or compare it with the first.",docsUrl:"https://resources.devweekends.com/dsa-patterns/linked-list",problems:[j(143,"Reorder List","reorder-list"),j(234,"Palindrome Linked List","palindrome-linked-list"),j(2130,"Maximum Twin Sum of a Linked List","maximum-twin-sum-of-a-linked-list")],templateIds:[]},"tree-dfs-recursive":{id:"tree-dfs-recursive",name:"Tree DFS, recursive",pattern:"DFS",summary:"Anything computed at each node from its children, or checked against values passed down from its ancestors. Recurse into each child; combine answers on the way up, or pass bounds and running values down.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dfs",problems:[j(226,"Invert Binary Tree","invert-binary-tree"),j(104,"Maximum Depth of Binary Tree","maximum-depth-of-binary-tree"),j(543,"Diameter of Binary Tree","diameter-of-binary-tree"),j(110,"Balanced Binary Tree","balanced-binary-tree"),j(100,"Same Tree","same-tree"),j(572,"Subtree of Another Tree","subtree-of-another-tree"),j(235,"Lowest Common Ancestor of a Binary Search Tree","lowest-common-ancestor-of-a-binary-search-tree",!0),j(1448,"Count Good Nodes in Binary Tree","count-good-nodes-in-binary-tree"),j(98,"Validate Binary Search Tree","validate-binary-search-tree")],templateIds:["tree-dfs-recursive"]},"tree-dfs-iterative":{id:"tree-dfs-iterative",name:"Tree DFS, iterative",pattern:"DFS",summary:"Traversals you must pause, or trees too deep to recurse. Replace recursion with an explicit stack, often for an in-order walk you can pause.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dfs",problems:[j(173,"Binary Search Tree Iterator","binary-search-tree-iterator"),j(230,"Kth Smallest Element in a BST","kth-smallest-element-in-a-bst"),j(94,"Binary Tree Inorder Traversal","binary-tree-inorder-traversal")],templateIds:["tree-dfs-iterative"]},"bst-walk":{id:"bst-walk",name:"BST, walk by ordering",pattern:"Binary Search Tree",summary:"Search, insert, delete, or a lowest common ancestor in a BST. Compare with the node and step to the one child that can hold the answer: O(height), no full traversal.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dfs",problems:[j(235,"Lowest Common Ancestor of a Binary Search Tree","lowest-common-ancestor-of-a-binary-search-tree"),j(700,"Search in a Binary Search Tree","search-in-a-binary-search-tree"),j(701,"Insert into a Binary Search Tree","insert-into-a-binary-search-tree"),j(450,"Delete Node in a BST","delete-node-in-a-bst")],templateIds:[]},"tree-bfs":{id:"tree-bfs",name:"Tree BFS, level order",pattern:"BFS",summary:"Anything computed per level. Process the queue one level at a time using its size as a snapshot.",docsUrl:"https://resources.devweekends.com/dsa-patterns/bfs",problems:[j(102,"Binary Tree Level Order Traversal","binary-tree-level-order-traversal"),j(199,"Binary Tree Right Side View","binary-tree-right-side-view"),j(103,"Binary Tree Zigzag Level Order Traversal","binary-tree-zigzag-level-order-traversal")],templateIds:["tree-bfs"]},"graph-dfs":{id:"graph-dfs",name:"Graph DFS",pattern:"DFS",summary:"Connected components, region sizes, copying a structure, or which cells connect to the border. Explore fully from each unvisited node (or from every border cell), marking visited.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dfs",problems:[j(200,"Number of Islands","number-of-islands"),j(695,"Max Area of Island","max-area-of-island"),j(133,"Clone Graph","clone-graph"),j(417,"Pacific Atlantic Water Flow","pacific-atlantic-water-flow"),j(130,"Surrounded Regions","surrounded-regions")],templateIds:["graph-dfs-recursive","graph-dfs-iterative"]},"graph-bfs-shortest-path":{id:"graph-bfs-shortest-path",name:"Graph BFS, shortest path",pattern:"BFS",summary:"Fewest steps in an unweighted graph or grid. BFS from the start; the level at which you reach the target is the distance.",docsUrl:"https://resources.devweekends.com/dsa-patterns/bfs",problems:[j(127,"Word Ladder","word-ladder"),j(1091,"Shortest Path in Binary Matrix","shortest-path-in-binary-matrix"),j(752,"Open the Lock","open-the-lock")],templateIds:["graph-bfs"]},"multi-source-bfs":{id:"multi-source-bfs",name:"Multi-source BFS",pattern:"BFS",summary:"Something spreads from many cells at once. Enqueue every source first, then run one BFS.",docsUrl:"https://resources.devweekends.com/dsa-patterns/bfs",problems:[j(994,"Rotting Oranges","rotting-oranges"),j(542,"01 Matrix","01-matrix"),j(417,"Pacific Atlantic Water Flow","pacific-atlantic-water-flow",!0),j(130,"Surrounded Regions","surrounded-regions",!0)],templateIds:[]},"shortest-path-weighted":{id:"shortest-path-weighted",name:"Shortest path, weighted",pattern:"Graph Algorithms",summary:"Shortest path with edge weights. Dijkstra (min-heap) for non-negative weights; Bellman-Ford for negatives or at most K edges.",docsUrl:"https://resources.devweekends.com/dsa-patterns/graph-algorithms",problems:[j(743,"Network Delay Time","network-delay-time"),j(787,"Cheapest Flights Within K Stops","cheapest-flights-within-k-stops"),j(1631,"Path With Minimum Effort","path-with-minimum-effort")],templateIds:["graph-dijkstra","graph-bellman-ford"]},"topological-sort":{id:"topological-sort",name:"Topological sort",pattern:"Graph Algorithms",summary:"Ordering with dependencies, or detecting that none exists. Kahn's algorithm: repeatedly take nodes with in-degree 0.",docsUrl:"https://resources.devweekends.com/dsa-patterns/graph-algorithms",problems:[j(207,"Course Schedule","course-schedule"),j(210,"Course Schedule II","course-schedule-ii")],templateIds:["graph-kahn"]},"union-find":{id:"union-find",name:"Union-find",pattern:"Union Find",summary:"Are two items in the same group, merging groups, redundant edges (undirected cycles). Keep a parent array with path compression and union by rank.",docsUrl:"https://resources.devweekends.com/dsa-patterns/union-find",problems:[j(684,"Redundant Connection","redundant-connection"),j(721,"Accounts Merge","accounts-merge"),j(547,"Number of Provinces","number-of-provinces")],templateIds:["ds-union-find","ds-union-find-optimized"]},mst:{id:"mst",name:"Minimum spanning tree",pattern:"Graph Algorithms",summary:"Minimum cost to connect all points. Kruskal (sort edges + Union Find) or Prim (grow from a node with a min-heap).",docsUrl:"https://resources.devweekends.com/dsa-patterns/graph-algorithms",problems:[j(1584,"Min Cost to Connect All Points","min-cost-to-connect-all-points")],templateIds:["graph-kruskal","graph-prim"]},backtracking:{id:"backtracking",name:"Backtracking",pattern:"Backtracking",summary:"Generate all subsets, permutations, or combinations. Choose, recurse, un-choose, recording each complete candidate.",docsUrl:"https://resources.devweekends.com/dsa-patterns/backtracking",problems:[j(78,"Subsets","subsets"),j(46,"Permutations","permutations"),j(77,"Combinations","combinations"),j(39,"Combination Sum","combination-sum")],templateIds:["backtracking"]},"backtracking-pruning":{id:"backtracking-pruning",name:"Backtracking, pruning",pattern:"Backtracking",summary:"Constraint puzzles where a partial choice can be checked early. Backtrack, but reject a partial choice as soon as it breaks a constraint.",docsUrl:"https://resources.devweekends.com/dsa-patterns/backtracking",problems:[j(51,"N-Queens","n-queens"),j(37,"Sudoku Solver","sudoku-solver"),j(79,"Word Search","word-search")],templateIds:[]},"dp-top-down":{id:"dp-top-down",name:"DP, top-down",pattern:"Dynamic Programming",summary:"Overlapping subproblems where the recursion is the natural statement. Write the recursive choice, then cache results by state.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",problems:[j(139,"Word Break","word-break"),j(91,"Decode Ways","decode-ways")],templateIds:["dp-top-down"]},"dp-bottom-up":{id:"dp-bottom-up",name:"DP, bottom-up",pattern:"Dynamic Programming",summary:"Each state depends on earlier indices or neighbor cells. Fill a dp table from the base cases forward.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",problems:[j(198,"House Robber","house-robber"),j(62,"Unique Paths","unique-paths"),j(64,"Minimum Path Sum","minimum-path-sum"),j(70,"Climbing Stairs","climbing-stairs")],templateIds:["dp-bottom-up"]},"dp-kadane":{id:"dp-kadane",name:"Kadane's algorithm",pattern:"Dynamic Programming",summary:"Maximum sum subarray, or the best gain of a later value over an earlier one. At each element, either extend the running best or restart from it (for a gain, track the lowest value so far); keep the best seen.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",problems:[j(53,"Maximum Subarray","maximum-subarray"),j(152,"Maximum Product Subarray","maximum-product-subarray"),j(918,"Maximum Sum Circular Subarray","maximum-sum-circular-subarray"),j(121,"Best Time to Buy and Sell Stock","best-time-to-buy-and-sell-stock")],templateIds:["dp-kadane"]},"dp-unbounded-knapsack":{id:"dp-unbounded-knapsack",name:"Unbounded knapsack",pattern:"Dynamic Programming",summary:"Items reusable any number of times: fewest items, or number of ways, to reach a total. 1D dp over the target, looping capacity forward.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",problems:[j(322,"Coin Change","coin-change"),j(518,"Coin Change II","coin-change-ii"),j(279,"Perfect Squares","perfect-squares")],templateIds:[]},"dp-01-knapsack":{id:"dp-01-knapsack",name:"0/1 knapsack",pattern:"Dynamic Programming",summary:"Each item used at most once: can a subset, or how many subsets, reach a total. dp over capacity, looping capacity backwards per item.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",problems:[j(416,"Partition Equal Subset Sum","partition-equal-subset-sum"),j(494,"Target Sum","target-sum"),j(474,"Ones and Zeroes","ones-and-zeroes")],templateIds:[]},"dp-sequences":{id:"dp-sequences",name:"DP, sequences",pattern:"Dynamic Programming",summary:"Longest increasing or common subsequence, edit distance. dp[i] over one sequence or dp[i][j] over prefixes of two.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",problems:[j(300,"Longest Increasing Subsequence","longest-increasing-subsequence"),j(1143,"Longest Common Subsequence","longest-common-subsequence"),j(72,"Edit Distance","edit-distance")],templateIds:[]},greedy:{id:"greedy",name:"Greedy",pattern:"Greedy",summary:"Take the locally best move in one pass when an exchange argument shows it is never worse.",docsUrl:"https://resources.devweekends.com/dsa-patterns/greedy",problems:[j(121,"Best Time to Buy and Sell Stock","best-time-to-buy-and-sell-stock",!0),j(55,"Jump Game","jump-game"),j(134,"Gas Station","gas-station"),j(763,"Partition Labels","partition-labels")],templateIds:[]},"bit-manipulation":{id:"bit-manipulation",name:"Bit manipulation",pattern:"Bit Manipulation",summary:"Single number among pairs, set bits, powers of two. Use XOR, masks, and shifts to work on bits directly in O(1) space.",docsUrl:"https://resources.devweekends.com/dsa-patterns/bit-manipulation",problems:[j(136,"Single Number","single-number"),j(191,"Number of 1 Bits","number-of-1-bits"),j(231,"Power of Two","power-of-two"),j(338,"Counting Bits","counting-bits")],templateIds:["bitmanipulation-test-kth-bit","bitmanipulation-set-kth-bit","bitmanipulation-clear-kth-bit","bitmanipulation-toggle-kth-bit","bitmanipulation-get-rightmost-bit","bitmanipulation-count-set-bits","bitmanipulation-multiply-power-of-two","bitmanipulation-divide-power-of-two","bitmanipulation-check-power-of-two","bitmanipulation-swap-variables"]}}},td=o=>String(o).padStart(2,"0");function CT({run:o}){const{started:m,steps:h,leaf:d,node:T}=o,R=h.length+1,M=m&&!d&&!T;return r.jsxs("nav",{className:A.log,"aria-label":"Your path so far",children:[r.jsxs("header",{className:A.logHead,children:[r.jsxs("p",{className:A.stripTitle,children:["Path log",r.jsxs("span",{className:A.stripValue,children:[h.length," answered"]})]}),r.jsx("p",{className:A.logHint,children:h.length>0?"Click a step to go back to that check.":"Each answer is written here as you go."})]}),r.jsxs("ol",{className:A.logRows,children:[h.map((D,q)=>r.jsx("li",{children:r.jsxs("button",{type:"button",className:A.row,"aria-label":`Back to question ${q+1}: ${D.question} You picked: ${D.option.cue}`,onClick:()=>o.backtrackTo(q),children:[r.jsx("span",{className:A.rowNum,"aria-hidden":"true",children:td(q+1)}),r.jsxs("span",{className:A.rowText,children:[r.jsx("span",{className:A.rowQuestion,children:D.question}),r.jsx("span",{className:A.rowCue,children:D.option.cue})]}),r.jsx("span",{className:A.rowBack,"aria-hidden":"true",children:"Back"})]})},q)),!m&&r.jsx("li",{children:r.jsxs("div",{className:Qn(A.row,A.rowReady),children:[r.jsx("span",{className:A.rowNum,"aria-hidden":"true",children:"01"}),r.jsxs("span",{className:A.rowText,children:[r.jsx("span",{className:A.rowQuestion,children:"Ready"}),r.jsx("span",{className:A.rowLive,children:Ei.nodes[Ei.rootId].question})]})]})}),m&&T&&r.jsx("li",{"aria-current":"step",children:r.jsxs("div",{className:Qn(A.row,A.rowCurrent),children:[r.jsx("span",{className:A.rowNum,"aria-hidden":"true",children:td(R)}),r.jsxs("span",{className:A.rowText,children:[r.jsxs("span",{className:A.rowQuestion,children:["Now, check ",R]}),r.jsx("span",{className:A.rowLive,children:T.question})]})]})}),d&&r.jsx("li",{"aria-current":"step",children:r.jsxs("div",{className:Qn(A.row,A.rowResult),children:[r.jsx("span",{className:A.rowNum,"aria-hidden":"true",children:"="}),r.jsxs("span",{className:A.rowText,children:[r.jsxs("span",{className:A.rowQuestion,children:["Result, ",d.pattern]}),r.jsx("span",{className:A.rowLive,children:d.name})]})]})}),M&&r.jsx("li",{"aria-current":"step",children:r.jsxs("div",{className:Qn(A.row,A.rowFault),children:[r.jsx("span",{className:A.rowNum,"aria-hidden":"true",children:"!"}),r.jsxs("span",{className:A.rowText,children:[r.jsx("span",{className:A.rowQuestion,children:"Fault"}),r.jsx("span",{className:A.rowLive,children:"This path leads nowhere"})]})]})}),!d&&!M&&r.jsx("li",{className:A.nextWrap,"aria-hidden":"true",children:r.jsxs("div",{className:A.nextCheck,children:[r.jsx("span",{className:Qn(A.rowNum,A.rowNumDashed),children:td(R+1)}),r.jsx("span",{className:A.nextLabel,children:"Next check appears here"})]})})]})]})}const tp=`def backtrack(curr, OTHER_ARGUMENTS...):
    if (BASE_CASE):
        # TODO: modify answer
        return

    ans = 0

    for (ITERATE_OVER_INPUT):
        # TODO: modify current state
        ans += backtrack(curr, OTHER_ARGUMENTS...)
        # TODO: undo modification of current state

    return ans
`,ap=`const backtrack = (curr, OTHER_ARGUMENTS...) => {
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
`,ip=`public int backtrack(STATE curr, OTHER_ARGUMENTS...) {
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
`,rp=`int backtrack(STATE curr, OTHER_ARGUMENTS...) {
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
`,lp=`def fn(arr, target):
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
`,sp=`const fn = (arr, target) => {
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
`,op=`public int fn(int[] arr, int target) {
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
`,cp=`#include <vector>

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
`,up=`def fn(arr):
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
`,dp=`const fn = (arr) => {
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
`,fp=`public int fn(int[] arr) {
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
`,hp=`#include <vector>

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
`,mp=`def fn(arr):
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
`,gp=`const fn = (arr) => {
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
`,pp=`public int fn(int[] arr) {
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
`,bp=`#include <vector>

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
`,vp=`def fn(arr, target):
    left = 0
    right = len(arr)

    while left < right:
        mid = (left + right) // 2

        if arr[mid] >= target:
            right = mid
        else:
            left = mid + 1

    return left
`,yp=`const fn = (arr, target) => {
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
`,xp=`public int fn(int[] arr, int target) {
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
`,_p=`#include <vector>

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
`,Sp=`def fn(arr, target):
    left = 0
    right = len(arr)

    while left < right:
        mid = (left + right) // 2

        if arr[mid] > target:
            right = mid
        else:
            left = mid + 1

    return left
`,Tp=`const fn = (arr, target) => {
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
`,jp=`public int fn(int[] arr, int target) {
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
`,wp=`#include <vector>

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
`,Np=`def is_power_of_two(num: int) -> bool:
    return (num & (num - 1)) == 0
`,Ep=`const isPowerOfTwo = (num) => {
    return (num & (num - 1)) === 0
}
`,Op=`public boolean isPowerOfTwo(int num) {
    return (num & (num - 1)) == 0;
}
`,Ap=`bool is_power_of_two(int num) {
    return (num & (num - 1)) == 0;
}
`,kp=`def clear_kth_bit(num: int, k: int) -> int:
    return num & ~(1 << k)
`,Mp=`const clearKthBit = (num, k) => {
    return num & ~(1 << k)
}
`,Cp=`public int clearKthBit(int num, int k) {
    return num & ~(1 << k);
}
`,Rp=`int clear_kth_bit(int num, int k) {
    return num & ~(1 << k);
}
`,Lp=`def count_set_bits(num: int) -> int:
    return bin(num).count('1')
`,Dp=`const countSetBits = (num) => {
    return num.toString(2).split('1').length - 1
}
`,zp=`public int countSetBits(int num) {
    int count = 0;

    while (num > 0) {
        count += num & 1;
        num >>= 1;
    }

    return count;
}
`,Bp=`int count_set_bits(int num) {
    int count = 0;

    while (num) {
        count += num & 1;
        num >>= 1;
    }

    return count;
}
`,Up=`def divide_by_power_of_two(num: int, k: int) -> int:
    return num >> k
`,Hp=`const divideByPowerOfTwo = (num, k) => {
    return num >> k;
}
`,qp=`public int divideByPowerOfTwo(int num, int k) {
    return num >> k;
}
`,Gp=`int divide_by_power_of_two(int num, int k) {
    return num >> k;
}
`,Yp=`def get_rightmost_set_bit(num: int) -> int:
    return num & -num
`,Ip=`const getRightmostSetBit = (num) => {
    return num & -num
}
`,Vp=`public int getRightmostSetBit(int num) {
    return num & -num;
}
`,Kp=`int get_rightmost_set_bit(int num) {
    return num & -num;
}
`,Qp=`def multiply_by_power_of_two(num: int, k: int) -> int:
    return num << k
`,Xp=`const multiplyByPowerOfTwo = (num, k) => {
    return num << k
}
`,Jp=`public int multiplyByPowerOfTwo(int num, int k) {
    return num << k;
}
`,Zp=`int multiply_by_power_of_two(int num, int k) {
    return num << k;
}
`,Pp=`def set_kth_bit(num: int, k: int) -> int:
    return num | (1 << k)
`,Fp=`const setKthBit = (num, k) => {
    return num | (1 << k)
}
`,Wp=`public int setKthBit(int num, int k) {
    return num | (1 << k);
}
`,$p=`int set_kth_bit(int num, int k) {
    return num | (1 << k);
}
`,nb=`def swap_variables(num1: int, num2: int) -> tuple:
    num1 ^= num2
    num2 ^= num1
    num1 ^= num2
    return num1, num2
`,eb=`const swapVariables = (num1, num2) => {
    num1 ^= num2
    num2 ^= num1
    num1 ^= num2
    return [num1, num2]
}
`,tb=`public int[] swapVariables(int num1, int num2) {
    num1 ^= num2;
    num2 ^= num1;
    num1 ^= num2;
    return new int[] { num1, num2 };
}
`,ab=`#include <tuple>

using namespace std;


tuple<int, int> swap_variables(int num1, int num2) {
    num1 ^= num2;
    num2 ^= num1;
    num1 ^= num2;
    return std::make_tuple(num1, num2);
}
`,ib=`def test_kth_bit(num: int, k: int) -> bool:
    return num & (1 << k) != 0
`,rb=`const testKthBit = (num, k) => {
    return num & (1 << k) !== 0
}
`,lb=`public boolean testKthBit(int num, int k) {
    return (num & (1 << k)) != 0;
}
`,sb=`bool test_kth_bit(int num, int k) {
    return (num & (1 << k)) != 0;
}
`,ob=`def toggle_kth_bit(num: int, k: int) -> int:
    return num ^ (1 << k)
`,cb=`const toggleKthBit = (num, k) => {
    return num ^ (1 << k)
}
`,ub=`public int toggleKthBit(int num, int k) {
    return num ^ (1 << k);
}
`,db=`int toggle_kth_bit(int num, int k) {
    return num ^ (1 << k);
}
`,fb=`def fn(arr):
    if BASE_CASE:
        return 0

    dp = [BASE_CASE] * (STATE_FOR_WHOLE_INPUT + 1)

    for STATE in range(SMALLEST_SUBPROBLEM, STATE_FOR_WHOLE_INPUT + 1):
        if BASE_CASE:
            dp[STATE] = BASE_CASE
        else:
            dp[STATE] = RECURRENCE_RELATION(STATE)

    return dp[STATE_FOR_WHOLE_INPUT]
`,hb=`const fn = (arr) => {
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
`,mb=`import java.util.Arrays;


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
`,gb=`#include <vector>
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
`,pb=`def kadane(arr: list[int]) -> int:
    curr_sub = max_sub = arr[0]

    for num in arr[1:]:
        curr_sub = max(curr_sub + num, num)
        max_sub = max(max_sub, curr_sub)

    return max_sub
`,bb=`const kadane = (arr) => {
    let currSub = arr[0]
    let maxSub = arr[0]

    for (let i = 1; i < arr.length; i++) {
        currSub = Math.max(currSub + arr[i], arr[i])
        maxSub = Math.max(maxSub, currSub)
    }

    return maxSub
}
`,vb=`public int kadane(int[] arr) {
    int currSub = arr[0];
    int maxSub = arr[0];

    for (int i = 1; i < arr.length; i++) {
        currSub = Math.max(currSub + arr[i], arr[i]);
        maxSub = Math.max(maxSub, currSub);
    }

    return maxSub;
}
`,yb=`#include <vector>
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
`,xb=`def fn(arr):
    @cache
    def dp(STATE):
        if BASE_CASE:
            return 0
        return RECURRENCE_RELATION(STATE)

    return dp(STATE_FOR_WHOLE_INPUT)
`,_b=`const fn = (arr) => {
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
`,Sb=`import java.util.HashMap;
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
`,Tb=`#include <unordered_map>

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
`,jb=`from typing import Any


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
`,wb=`class HashMap {
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
`,Nb=`public class HashMap {
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
`,Eb=`#include <iostream>
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
`,Ob=`class TrieNode:
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
`,Ab=`class TrieNode {
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
`,kb=`import java.util.ArrayList;
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
`,Mb=`#include <iostream>
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
`,Cb=`class UnionFind:
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
`,Rb=`class UnionFind {
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
`,Lb=`import java.util.ArrayList;
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
`,Db=`#include <iostream>
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
`,zb=`class UnionFind:
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
`,Bb=`class UnionFind {
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
`,Ub=`import java.util.ArrayList;
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
`,Hb=`#include <iostream>
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
`,qb=`def bellman_ford(n: int, edges: list[tuple[int, int, int]], source: int) -> list[int]:
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
`,Gb=`const bellmanFord = (n, edges, source) => {
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
`,Yb=`import java.util.Arrays;
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
`,Ib=`#include <vector>
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
`,Vb=`from collections import deque


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
`,Kb=`const fn = (graph) => {
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
`,Qb=`import java.util.ArrayList;
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
`,Xb=`#include <queue>
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
`,Jb=`def fn(graph):
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
`,Zb=`const fn = (graph) => {
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
`,Pb=`import java.util.Stack;
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
`,Fb=`#include <stack>
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
`,Wb=`def fn(graph):
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
`,$b=`const fn = (graph) => {
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
`,nv=`import java.util.HashSet;
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
`,ev=`#include <unordered_set>
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
`,tv=`from heapq import heappop, heappush


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
`,av=`/*
    JavaScript lacks built-in support for heaps.
    Try using a language that doesn't hate you, like Python.
*/
`,iv=`import java.util.Arrays;
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
`,rv=`#include <limits>
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
`,lv=`from collections import defaultdict, deque


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
`,sv=`const kahnTopologicalSort = (graph) => {
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
`,ov=`import java.util.ArrayList;
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
`,cv=`#include <vector>
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
`,uv=`def kruskal_mst(n: int, edges: list[tuple[int, int, int]]) -> list[tuple[int, int, int]]:
    mst = []
    uf = UnionFind(n)
    edges.sort()

    for w, u, v in edges:
        if not uf.connected(u, v):
            uf.union(u, v)
            mst.append((w, u, v))

    return mst
`,dv=`const kruskalMst = (n, edges) => {
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
`,fv=`import java.util.ArrayList;
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
`,hv=`#include <vector>
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
`,mv=`from heapq import heappop


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
`,gv=`/*
    JavaScript lacks built-in support for heaps.
    Try using a language that doesn't hate you, like Python.
*/
`,pv=`import java.util.ArrayList;
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
`,bv=`#include <vector>
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
`,vv=`from collections import defaultdict


def fn(arr, k):
    counts = defaultdict(int)
    counts[0] = 1
    ans = curr = 0

    for num in arr:
        # TODO: logic to change curr
        ans += counts[curr - k]
        counts[curr] += 1

    return ans
`,yv=`const fn = (arr, k) => {
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
`,xv=`import java.util.HashMap;
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
`,_v=`#include <vector>
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
`,Sv=`def fn(arr):
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
`,Tv=`function fn(arr) {
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
`,jv=`import java.util.HashSet;
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
`,wv=`#include <vector>
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
`,Nv=`from heapq import heappop, heappush


def fn(arr, k):
    heap = []

    for num in arr:
        # TODO: logic to push onto heap according to problem's criteria
        heappush(heap, (CRITERIA, num))

        if len(heap) > k:
            heappop(heap)

    return [num for num in heap]
`,Ev=`/*
    JavaScript lacks built-in support for heaps.
    Try using a language that doesn't hate you, like Python.
*/
`,Ov=`import java.util.PriorityQueue;


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
`,Av=`#include <vector>
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
`,kv=`def fn(head):
    slow = head
    fast = head
    ans = 0

    while fast and fast.next:
        # TODO: logic
        slow = slow.next
        fast = fast.next.next

    return ans
`,Mv=`const fn = (head) => {
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
`,Cv=`public int fn(ListNode head) {
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
`,Rv=`int fn(ListNode* head) {
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
`,Lv=`def fn(head):
    prev = None
    curr = head

    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt

    return prev
`,Dv=`const fn = (head) => {
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
`,zv=`public ListNode fn(ListNode head) {
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
`,Bv=`ListNode* fn(ListNode* head) {
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
`,Uv=`def fn(arr):
    n = len(arr)
    prefix = [arr[0]]

    for i in range(1, n):
        prefix.append(prefix[-1] + arr[i])

    return prefix
`,Hv=`const fn = (arr) => {
    let prefix = [arr[0]]

    for (let i = 1; i < arr.length; i++) {
        prefix.push(prefix[prefix.length - 1] + arr[i])
    }

    return prefix
}
`,qv=`import java.util.ArrayList;
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
`,Gv=`#include <iostream>
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
`,Yv=`def fn(arr):
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
`,Iv=`const fn = (arr) => {
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
`,Vv=`public int fn(int[] arr) {
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
`,Kv=`#include <vector>

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
`,Qv=`def fn(arr):
    stack = []
    ans = 0

    for num in arr:
        while stack and stack[-1] < num:
            # TODO: logic
            stack.pop()
        stack.append(num)

    return ans
`,Xv=`const fn = (arr) => {
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
`,Jv=`import java.util.Stack;


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
`,Zv=`#include <stack>
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
`,Pv=`def fn(arr):
    stack = []
    ans = 0

    for num in arr:
        while stack and stack[-1] > num:
            # TODO: logic
            stack.pop()
        stack.append(num)

    return ans
`,Fv=`const fn = (arr) => {
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
`,Wv=`import java.util.Stack;


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
`,$v=`#include <stack>
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
`,n1=`def fn(strs: list[str]):
    ans = []

    for char in strs:
        ans.append(char)

    return ''.join(ans)
`,e1=`const fn = (arr) => {
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
`,t1=`public String fn(char[] strs) {
    StringBuilder sb = new StringBuilder();

    for (char c: strs) {
        sb.append(c);
    }

    return sb.toString();
}
`,a1=`string fn(vector<char>& arr) {
    return string(arr.begin(), arr.end())
}
`,i1=`from collections import deque


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
`,r1=`const fn = (root) => {
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
`,l1=`import java.util.LinkedList;
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
`,s1=`#include <queue>

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
`,o1=`def dfs(root):
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
`,c1=`const dfs = (root) => {
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
`,u1=`import java.util.Stack;


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
`,d1=`#include <stack>

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
`,f1=`def dfs(root):
    if not root:
        return

    ans = 0

    # TODO: logic
    dfs(root.left)
    dfs(root.right)

    return ans
`,h1=`const dfs = (root) => {
    if (!root) {
        return
    }

    let ans = 0

    // TODO: logic
    dfs(root.left)
    dfs(root.right)

    return ans
}
`,m1=`public int dfs(TreeNode root) {
    if (root == null) {
        return 0;
    }

    int ans = 0;

    // TODO: logic
    ans += dfs(root.left);
    ans += dfs(root.right);

    return ans;
}
`,g1=`int dfs(TreeNode* root) {
    if (root == nullptr) {
        return 0;
    }

    int ans = 0;

    // TODO: logic
    dfs(root.left);
    dfs(root.right);

    return ans;
}
`,p1=`def fn(arr):
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
`,b1=`const fn = (arr) => {
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
`,v1=`public int fn(int[] arr) {
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
`,y1=`#include <vector>

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
`,x1=`def fn(arr1, arr2):
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
`,_1=`let fn = (arr1, arr2) => {
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
`,S1=`public int fn(int[] arr1, int[] arr2) {
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
`,T1=`#include <vector>

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
`,_n=(o,m,h,d,T)=>({title:o,code:{python:m,javascript:h,java:d,cpp:T}}),RT={backtracking:_n("backtracking",tp,ap,ip,rp),"binary-search":_n("binary search",lp,sp,op,cp),"binary-search-greedy-maximum":_n("greedy (maximum)",up,dp,fp,hp),"binary-search-greedy-minimum":_n("greedy (minimum)",mp,gp,pp,bp),"binary-search-left-insertion":_n("duplicate elements, left-most insertion point",vp,yp,xp,_p),"binary-search-right-insertion":_n("duplicate elements, right-most insertion point",Sp,Tp,jp,wp),"bitmanipulation-check-power-of-two":_n("check if number is power of 2",Np,Ep,Op,Ap),"bitmanipulation-clear-kth-bit":_n("clear kth bit",kp,Mp,Cp,Rp),"bitmanipulation-count-set-bits":_n("count set bits",Lp,Dp,zp,Bp),"bitmanipulation-divide-power-of-two":_n("divide by 2^k",Up,Hp,qp,Gp),"bitmanipulation-get-rightmost-bit":_n("get rightmost bit",Yp,Ip,Vp,Kp),"bitmanipulation-multiply-power-of-two":_n("multiply by 2^k",Qp,Xp,Jp,Zp),"bitmanipulation-set-kth-bit":_n("set kth bit",Pp,Fp,Wp,$p),"bitmanipulation-swap-variables":_n("swap two variables",nb,eb,tb,ab),"bitmanipulation-test-kth-bit":_n("test kth-bit",ib,rb,lb,sb),"bitmanipulation-toggle-kth-bit":_n("toggle kth bit",ob,cb,ub,db),"dp-bottom-up":_n("DP bottom-up",fb,hb,mb,gb),"dp-kadane":_n("Kadane (max-sum subarray)",pb,bb,vb,yb),"dp-top-down":_n("DP top-down",xb,_b,Sb,Tb),"ds-hash-map":_n("hash map",jb,wb,Nb,Eb),"ds-trie":_n("trie",Ob,Ab,kb,Mb),"ds-union-find":_n("union find",Cb,Rb,Lb,Db),"ds-union-find-optimized":_n("union find optimized",zb,Bb,Ub,Hb),"graph-bellman-ford":_n("Bellman-Ford (shortest path)",qb,Gb,Yb,Ib),"graph-bfs":_n("BFS",Vb,Kb,Qb,Xb),"graph-dfs-iterative":_n("DFS (iterative)",Jb,Zb,Pb,Fb),"graph-dfs-recursive":_n("DFS (recursive)",Wb,$b,nv,ev),"graph-dijkstra":_n("Dijkstra (shortest path)",tv,av,iv,rv),"graph-kahn":_n("Kahn (topological sort)",lv,sv,ov,cv),"graph-kruskal":_n("Kruskal (mst)",uv,dv,fv,hv),"graph-prim":_n("Prim (mst)",mv,gv,pv,bv),"hashmap-find-number-of-subarrays":_n("find number of subarrays that fit an exact criteria",vv,yv,xv,_v),"hashmap-sliding-window":_n("sliding window",Sv,Tv,jv,wv),"heap-find-top-k-elements":_n("find top k elements",Nv,Ev,Ov,Av),"linkedlist-fast-and-slow-pointer":_n("fast and slow pointer",kv,Mv,Cv,Rv),"linkedlist-reverse":_n("reverse linked list",Lv,Dv,zv,Bv),"prefix-sum":_n("prefix sum",Uv,Hv,qv,Gv),"sliding-window":_n("sliding window",Yv,Iv,Vv,Kv),"stack-monotonic-decreasing":_n("monotonic decreasing stack",Qv,Xv,Jv,Zv),"stack-monotonic-increasing":_n("monotonic increasing stack",Pv,Fv,Wv,$v),"string-building":_n("efficient string building",n1,e1,t1,a1),"tree-bfs":_n("BFS",i1,r1,l1,s1),"tree-dfs-iterative":_n("DFS (iterative)",o1,c1,u1,d1),"tree-dfs-recursive":_n("DFS (recursive)",f1,h1,m1,g1),"two-pointers-one-input":_n("two pointers: one input, opposite ends",p1,b1,v1,y1),"two-pointers-two-inputs":_n("two pointers: two inputs, exhaust both",x1,_1,S1,T1)};function LT(o){const m=Ei.leaves[o];return m?m.templateIds.map(h=>RT[h]).filter(h=>!!h):[]}const DT={E:"Easy",M:"Medium",H:"Hard"},ea=([o,m,h,d,T,R])=>({n:o,lc:m,name:h,slug:d,difficulty:DT[T],ask:R}),_a=[{id:"arrays-hashing",name:"Arrays & Hashing",why:"Trade memory for lookups. The first move on most problems.",problems:[[1,217,"Contains Duplicate","contains-duplicate","E","Does any value appear at least twice in the array?"],[2,242,"Valid Anagram","valid-anagram","E","Are two strings made of exactly the same letters?"],[3,1,"Two Sum","two-sum","E","Find the two numbers in an array that add up to a target."],[4,49,"Group Anagrams","group-anagrams","M","Group the strings that are anagrams of each other."],[5,347,"Top K Frequent Elements","top-k-frequent-elements","M","Return the k values that appear most often."],[6,36,"Valid Sudoku","valid-sudoku","M","Is a partly filled 9×9 board free of repeats in every row, column and box?"],[7,238,"Product of Array Except Self","product-of-array-except-self","M","For each index, the product of every other element, without division."],[8,128,"Longest Consecutive Sequence","longest-consecutive-sequence","M","Length of the longest run of consecutive integers, in O(n)."]].map(o=>ea(o))},{id:"two-pointers",name:"Two Pointers",why:"Turn a nested loop into one pass from both ends.",problems:[[9,125,"Valid Palindrome","valid-palindrome","E","Is the string a palindrome, ignoring case and non-alphanumerics?"],[10,167,"Two Sum II - Input Array Is Sorted","two-sum-ii-input-array-is-sorted","M","Two Sum on a sorted array, using constant extra space."],[11,15,"3Sum","3sum","M","Find all unique triplets that sum to zero."],[12,11,"Container With Most Water","container-with-most-water","M","Pick two lines that, with the x-axis, hold the most water."]].map(o=>ea(o))},{id:"sliding-window",name:"Sliding Window",why:"Grow right, shrink left, keep the window valid.",problems:[[13,121,"Best Time to Buy and Sell Stock","best-time-to-buy-and-sell-stock","E","Maximum profit from one buy followed by one sell."],[14,3,"Longest Substring Without Repeating Characters","longest-substring-without-repeating-characters","M","Length of the longest substring with no repeated characters."],[15,424,"Longest Repeating Character Replacement","longest-repeating-character-replacement","M","Longest substring that can become one repeated letter with at most k changes."]].map(o=>ea(o))},{id:"stack",name:"Stack",why:"The most recent unresolved thing is the next one to resolve.",problems:[[16,20,"Valid Parentheses","valid-parentheses","E","Are all brackets closed in the right order?"],[17,155,"Min Stack","min-stack","M","Design a stack that returns its minimum in constant time."],[18,739,"Daily Temperatures","daily-temperatures","M","For each day, how many days until a warmer one?"]].map(o=>ea(o))},{id:"binary-search",name:"Binary Search",why:"Discard half the space per step, even when the array is rotated.",problems:[[19,704,"Binary Search","binary-search","E","Find a target in a sorted array in O(log n)."],[20,153,"Find Minimum in Rotated Sorted Array","find-minimum-in-rotated-sorted-array","M","Find the smallest value in a sorted array rotated at an unknown point."],[21,33,"Search in Rotated Sorted Array","search-in-rotated-sorted-array","M","Find a target in a rotated sorted array in O(log n)."]].map(o=>ea(o))},{id:"linked-list",name:"Linked List",why:"Pointer surgery: dummy heads, fast and slow, reversal.",problems:[[22,206,"Reverse Linked List","reverse-linked-list","E","Reverse a singly linked list."],[23,21,"Merge Two Sorted Lists","merge-two-sorted-lists","E","Merge two sorted lists into one sorted list."],[24,143,"Reorder List","reorder-list","M","Reorder L0 → L1 → … → Ln into L0 → Ln → L1 → Ln-1 → …, in place."],[25,19,"Remove Nth Node From End of List","remove-nth-node-from-end-of-list","M","Remove the nth node from the end of a list in one pass."],[26,141,"Linked List Cycle","linked-list-cycle","E","Does a linked list contain a cycle?"],[27,146,"LRU Cache","lru-cache","M","Design a cache that evicts the least recently used key, with O(1) operations."]].map(o=>ea(o))},{id:"tree-recursion",name:"Tree Recursion",why:"Solve the subtree, then combine at the node.",problems:[[28,226,"Invert Binary Tree","invert-binary-tree","E","Mirror a binary tree left to right."],[29,104,"Maximum Depth of Binary Tree","maximum-depth-of-binary-tree","E","How many levels deep is a binary tree?"],[30,543,"Diameter of Binary Tree","diameter-of-binary-tree","E","Length of the longest path between any two nodes in a tree."],[31,110,"Balanced Binary Tree","balanced-binary-tree","E","Do all nodes have left and right subtree heights that differ by at most one?"],[32,100,"Same Tree","same-tree","E","Are two binary trees identical in shape and values?"],[33,572,"Subtree of Another Tree","subtree-of-another-tree","E","Does one tree appear as a subtree of another?"]].map(o=>ea(o))},{id:"tree-traversal-bst",name:"Traversal & BST",why:"Pick the traversal that carries the state you need.",problems:[[34,235,"Lowest Common Ancestor of a Binary Search Tree","lowest-common-ancestor-of-a-binary-search-tree","M","Find the lowest common ancestor of two nodes in a binary search tree."],[35,102,"Binary Tree Level Order Traversal","binary-tree-level-order-traversal","M","Return the node values level by level."],[36,199,"Binary Tree Right Side View","binary-tree-right-side-view","M","Which nodes are visible when looking at a tree from the right?"],[37,1448,"Count Good Nodes in Binary Tree","count-good-nodes-in-binary-tree","M","Count the nodes that are no smaller than any ancestor on their path from the root."],[38,98,"Validate Binary Search Tree","validate-binary-search-tree","M","Is a binary tree a valid binary search tree?"],[39,230,"Kth Smallest Element in a BST","kth-smallest-element-in-a-bst","M","Return the kth smallest value in a binary search tree."]].map(o=>ea(o))},{id:"heap",name:"Heap",why:"Keep only the k best, or always the next best.",problems:[[40,703,"Kth Largest Element in a Stream","kth-largest-element-in-a-stream","E","Return the kth largest value each time a new number arrives."],[41,1046,"Last Stone Weight","last-stone-weight","E","Repeatedly smash the two heaviest stones together; what weight is left?"],[42,215,"Kth Largest Element in an Array","kth-largest-element-in-an-array","M","Return the kth largest element of an unsorted array."]].map(o=>ea(o))},{id:"graphs",name:"Graphs",why:"Flood fill the grid, clone with a map, order with indegrees.",problems:[[43,200,"Number of Islands","number-of-islands","M","Count the islands in a grid of land and water."],[44,695,"Max Area of Island","max-area-of-island","M","Find the area of the largest island in a grid."],[45,133,"Clone Graph","clone-graph","M","Make a deep copy of a connected undirected graph."],[46,417,"Pacific Atlantic Water Flow","pacific-atlantic-water-flow","M","Which cells can send water to both the Pacific and the Atlantic?"],[47,130,"Surrounded Regions","surrounded-regions","M","Capture every region of O's completely surrounded by X's."],[48,207,"Course Schedule","course-schedule","M","Can all courses be finished, given their prerequisites?"],[49,210,"Course Schedule II","course-schedule-ii","M","Return a valid order to take all courses, if one exists."]].map(o=>ea(o))}],Nl=_a.flatMap(o=>o.problems),zT=o=>`https://leetcode.com/problems/${o}/`,so={total:Nl.length,patterns:_a.length,easy:Nl.filter(o=>o.difficulty==="Easy").length,medium:Nl.filter(o=>o.difficulty==="Medium").length,hard:Nl.filter(o=>o.difficulty==="Hard").length},BT="_container_g6uc3_1",UT="_buttonContainer_g6uc3_15",HT="_tabButtonContainer_g6uc3_24",qT="_tabButton_g6uc3_24",oo={container:BT,buttonContainer:UT,tabButtonContainer:HT,tabButton:qT},GT="_code_10mye_1",YT="_line_10mye_14",Ug={code:GT,line:YT};var ad,Hg;function IT(){if(Hg)return ad;Hg=1;function o(g){return g instanceof Map?g.clear=g.delete=g.set=function(){throw new Error("map is read-only")}:g instanceof Set&&(g.add=g.clear=g.delete=function(){throw new Error("set is read-only")}),Object.freeze(g),Object.getOwnPropertyNames(g).forEach(L=>{const X=g[L],yn=typeof X;(yn==="object"||yn==="function")&&!Object.isFrozen(X)&&o(X)}),g}class m{constructor(L){L.data===void 0&&(L.data={}),this.data=L.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function h(g){return g.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function d(g,...L){const X=Object.create(null);for(const yn in g)X[yn]=g[yn];return L.forEach(function(yn){for(const ae in yn)X[ae]=yn[ae]}),X}const T="</span>",R=g=>!!g.scope,M=(g,{prefix:L})=>{if(g.startsWith("language:"))return g.replace("language:","language-");if(g.includes(".")){const X=g.split(".");return[`${L}${X.shift()}`,...X.map((yn,ae)=>`${yn}${"_".repeat(ae+1)}`)].join(" ")}return`${L}${g}`};class D{constructor(L,X){this.buffer="",this.classPrefix=X.classPrefix,L.walk(this)}addText(L){this.buffer+=h(L)}openNode(L){if(!R(L))return;const X=M(L.scope,{prefix:this.classPrefix});this.span(X)}closeNode(L){R(L)&&(this.buffer+=T)}value(){return this.buffer}span(L){this.buffer+=`<span class="${L}">`}}const q=(g={})=>{const L={children:[]};return Object.assign(L,g),L};class Y{constructor(){this.rootNode=q(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(L){this.top.children.push(L)}openNode(L){const X=q({scope:L});this.add(X),this.stack.push(X)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(L){return this.constructor._walk(L,this.rootNode)}static _walk(L,X){return typeof X=="string"?L.addText(X):X.children&&(L.openNode(X),X.children.forEach(yn=>this._walk(L,yn)),L.closeNode(X)),L}static _collapse(L){typeof L!="string"&&L.children&&(L.children.every(X=>typeof X=="string")?L.children=[L.children.join("")]:L.children.forEach(X=>{Y._collapse(X)}))}}class z extends Y{constructor(L){super(),this.options=L}addText(L){L!==""&&this.add(L)}startScope(L){this.openNode(L)}endScope(){this.closeNode()}__addSublanguage(L,X){const yn=L.root;X&&(yn.scope=`language:${X}`),this.add(yn)}toHTML(){return new D(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function v(g){return g?typeof g=="string"?g:g.source:null}function E(g){return Z("(?=",g,")")}function V(g){return Z("(?:",g,")*")}function G(g){return Z("(?:",g,")?")}function Z(...g){return g.map(X=>v(X)).join("")}function tn(g){const L=g[g.length-1];return typeof L=="object"&&L.constructor===Object?(g.splice(g.length-1,1),L):{}}function Sn(...g){return"("+(tn(g).capture?"":"?:")+g.map(yn=>v(yn)).join("|")+")"}function gn(g){return new RegExp(g.toString()+"|").exec("").length-1}function mn(g,L){const X=g&&g.exec(L);return X&&X.index===0}const On=new RegExp(Sn(/\[(?:[^\\\]]|\\.)*\]/,/\(\?<(?![=!])[^>]+>/,/\(\?'[^']+'/,/\(\??/,/\\([1-9][0-9]*)/,/\\./));function Xn(g,{joinWith:L}){let X=0;return g.map(yn=>{X+=1;const ae=X;let Un=v(yn),nn="";for(;Un.length>0;){const K=On.exec(Un);if(!K){nn+=Un;break}nn+=Un.substring(0,K.index),Un=Un.substring(K.index+K[0].length),K[0][0]==="\\"&&K[1]?nn+="\\"+String(Number(K[1])+ae):(nn+=K[0],(K[0]==="("||/^\(\?[<']/.test(K[0]))&&X++)}return nn}).map(yn=>`(${yn})`).join(L)}const vn=/\b\B/,P="[a-zA-Z]\\w*",pn="[a-zA-Z_]\\w*",re="\\b\\d+(\\.\\d+)?",fe="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",oe="\\b(0b[01]+)",be="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Qe=(g={})=>{const L=/^#![ ]*\//;return g.binary&&(g.begin=Z(L,/.*\b/,g.binary,/\b.*/)),d({scope:"meta",begin:L,end:/$/,relevance:0,"on:begin":(X,yn)=>{X.index!==0&&yn.ignoreMatch()}},g)},Ae={begin:"\\\\[\\s\\S]",relevance:0},ue={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Ae]},I={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Ae]},un={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},W=function(g,L,X={}){const yn=d({scope:"comment",begin:g,end:L,contains:[]},X);yn.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const ae=Sn("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return yn.contains.push({begin:Z(/[ ]+/,"(",ae,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),yn},Mn=W("//","$"),jn=W("/\\*","\\*/"),ce=W("#","$"),ve={scope:"number",begin:re,relevance:0},dt={scope:"number",begin:fe,relevance:0},y={scope:"number",begin:oe,relevance:0},B={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[Ae,{begin:/\[/,end:/\]/,relevance:0,contains:[Ae]}]},on={scope:"title",begin:P,relevance:0},$={scope:"title",begin:pn,relevance:0},dn={begin:"\\.\\s*"+pn,relevance:0};var An=Object.freeze({__proto__:null,APOS_STRING_MODE:ue,BACKSLASH_ESCAPE:Ae,BINARY_NUMBER_MODE:y,BINARY_NUMBER_RE:oe,COMMENT:W,C_BLOCK_COMMENT_MODE:jn,C_LINE_COMMENT_MODE:Mn,C_NUMBER_MODE:dt,C_NUMBER_RE:fe,END_SAME_AS_BEGIN:function(g){return Object.assign(g,{"on:begin":(L,X)=>{X.data._beginMatch=L[1]},"on:end":(L,X)=>{X.data._beginMatch!==L[1]&&X.ignoreMatch()}})},HASH_COMMENT_MODE:ce,IDENT_RE:P,MATCH_NOTHING_RE:vn,METHOD_GUARD:dn,NUMBER_MODE:ve,NUMBER_RE:re,PHRASAL_WORDS_MODE:un,QUOTE_STRING_MODE:I,REGEXP_MODE:B,RE_STARTERS_RE:be,SHEBANG:Qe,TITLE_MODE:on,UNDERSCORE_IDENT_RE:pn,UNDERSCORE_TITLE_MODE:$});function an(g,L){g.input[g.index-1]==="."&&L.ignoreMatch()}function fn(g,L){g.className!==void 0&&(g.scope=g.className,delete g.className)}function et(g,L){L&&g.beginKeywords&&(g.begin="\\b("+g.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",g.__beforeBegin=an,g.keywords=g.keywords||g.beginKeywords,delete g.beginKeywords,g.relevance===void 0&&(g.relevance=0))}function ti(g,L){Array.isArray(g.illegal)&&(g.illegal=Sn(...g.illegal))}function Sa(g,L){if(g.match){if(g.begin||g.end)throw new Error("begin & end are not supported with match");g.begin=g.match,delete g.match}}function xt(g,L){g.relevance===void 0&&(g.relevance=1)}const ke=(g,L)=>{if(!g.beforeMatch)return;if(g.starts)throw new Error("beforeMatch cannot be used with starts");const X=Object.assign({},g);Object.keys(g).forEach(yn=>{delete g[yn]}),g.keywords=X.keywords,g.begin=Z(X.beforeMatch,E(X.begin)),g.starts={relevance:0,contains:[Object.assign(X,{endsParent:!0})]},g.relevance=0,delete X.beforeMatch},ne=["of","and","for","in","not","or","if","then","parent","list","value"],_t="keyword";function Ta(g,L,X=_t){const yn=Object.create(null);return typeof g=="string"?ae(X,g.split(" ")):Array.isArray(g)?ae(X,g):Object.keys(g).forEach(function(Un){Object.assign(yn,Ta(g[Un],L,Un))}),yn;function ae(Un,nn){L&&(nn=nn.map(K=>K.toLowerCase())),nn.forEach(function(K){const bn=K.split("|");yn[bn[0]]=[Un,Gt(bn[0],bn[1])]})}}function Gt(g,L){return L?Number(L):Oi(g)?0:1}function Oi(g){return ne.includes(g.toLowerCase())}const ai={},tt=g=>{console.error(g)},Ai=(g,...L)=>{console.log(`WARN: ${g}`,...L)},Ct=(g,L)=>{ai[`${g}/${L}`]||(console.log(`Deprecated as of ${g}. ${L}`),ai[`${g}/${L}`]=!0)},ja=new Error;function Tr(g,L,{key:X}){let yn=0;const ae=g[X],Un={},nn={};for(let K=1;K<=L.length;K++)nn[K+yn]=ae[K],Un[K+yn]=!0,yn+=gn(L[K-1]);g[X]=nn,g[X]._emit=Un,g[X]._multi=!0}function Yt(g){if(Array.isArray(g.begin)){if(g.skip||g.excludeBegin||g.returnBegin)throw tt("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),ja;if(typeof g.beginScope!="object"||g.beginScope===null)throw tt("beginScope must be object"),ja;Tr(g,g.begin,{key:"beginScope"}),g.begin=Xn(g.begin,{joinWith:""})}}function jr(g){if(Array.isArray(g.end)){if(g.skip||g.excludeEnd||g.returnEnd)throw tt("skip, excludeEnd, returnEnd not compatible with endScope: {}"),ja;if(typeof g.endScope!="object"||g.endScope===null)throw tt("endScope must be object"),ja;Tr(g,g.end,{key:"endScope"}),g.end=Xn(g.end,{joinWith:""})}}function wr(g){g.scope&&typeof g.scope=="object"&&g.scope!==null&&(g.beginScope=g.scope,delete g.scope)}function bo(g){wr(g),typeof g.beginScope=="string"&&(g.beginScope={_wrap:g.beginScope}),typeof g.endScope=="string"&&(g.endScope={_wrap:g.endScope}),Yt(g),jr(g)}function Al(g){function L(nn,K){return new RegExp(v(nn),"m"+(g.case_insensitive?"i":"")+(g.unicodeRegex?"u":"")+(K?"g":""))}class X{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(K,bn){bn.position=this.position++,this.matchIndexes[this.matchAt]=bn,this.regexes.push([bn,K]),this.matchAt+=gn(K)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const K=this.regexes.map(bn=>bn[1]);this.matcherRe=L(Xn(K,{joinWith:"|"}),!0),this.lastIndex=0}exec(K){this.matcherRe.lastIndex=this.lastIndex;const bn=this.matcherRe.exec(K);if(!bn)return null;const Se=bn.findIndex((It,wa)=>wa>0&&It!==void 0),me=this.matchIndexes[Se];return bn.splice(0,Se),Object.assign(bn,me)}}class yn{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(K){if(this.multiRegexes[K])return this.multiRegexes[K];const bn=new X;return this.rules.slice(K).forEach(([Se,me])=>bn.addRule(Se,me)),bn.compile(),this.multiRegexes[K]=bn,bn}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(K,bn){this.rules.push([K,bn]),bn.type==="begin"&&this.count++}exec(K){const bn=this.getMatcher(this.regexIndex);bn.lastIndex=this.lastIndex;let Se=bn.exec(K);if(this.resumingScanAtSamePosition()&&!(Se&&Se.index===this.lastIndex)){const me=this.getMatcher(0);me.lastIndex=this.lastIndex+1,Se=me.exec(K)}return Se&&(this.regexIndex+=Se.position+1,this.regexIndex===this.count&&this.considerAll()),Se}}function ae(nn){const K=new yn;return nn.contains.forEach(bn=>K.addRule(bn.begin,{rule:bn,type:"begin"})),nn.terminatorEnd&&K.addRule(nn.terminatorEnd,{type:"end"}),nn.illegal&&K.addRule(nn.illegal,{type:"illegal"}),K}function Un(nn,K){const bn=nn;if(nn.isCompiled)return bn;[fn,Sa,bo,ke].forEach(me=>me(nn,K)),g.compilerExtensions.forEach(me=>me(nn,K)),nn.__beforeBegin=null,[et,ti,xt].forEach(me=>me(nn,K)),nn.isCompiled=!0;let Se=null;return typeof nn.keywords=="object"&&nn.keywords.$pattern&&(nn.keywords=Object.assign({},nn.keywords),Se=nn.keywords.$pattern,delete nn.keywords.$pattern),Se=Se||/\w+/,nn.keywords&&(nn.keywords=Ta(nn.keywords,g.case_insensitive)),bn.keywordPatternRe=L(Se,!0),K&&(nn.begin||(nn.begin=/\B|\b/),bn.beginRe=L(bn.begin),!nn.end&&!nn.endsWithParent&&(nn.end=/\B|\b/),nn.end&&(bn.endRe=L(bn.end)),bn.terminatorEnd=v(bn.end)||"",nn.endsWithParent&&K.terminatorEnd&&(bn.terminatorEnd+=(nn.end?"|":"")+K.terminatorEnd)),nn.illegal&&(bn.illegalRe=L(nn.illegal)),nn.contains||(nn.contains=[]),nn.contains=[].concat(...nn.contains.map(function(me){return Nr(me==="self"?nn:me)})),nn.contains.forEach(function(me){Un(me,bn)}),nn.starts&&Un(nn.starts,K),bn.matcher=ae(bn),bn}if(g.compilerExtensions||(g.compilerExtensions=[]),g.contains&&g.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return g.classNameAliases=d(g.classNameAliases||{}),Un(g)}function ki(g){return g?g.endsWithParent||ki(g.starts):!1}function Nr(g){return g.variants&&!g.cachedVariants&&(g.cachedVariants=g.variants.map(function(L){return d(g,{variants:null},L)})),g.cachedVariants?g.cachedVariants:ki(g)?d(g,{starts:g.starts?d(g.starts):null}):Object.isFrozen(g)?d(g):g}var Er="11.12.0";class vo extends Error{constructor(L,X){super(L),this.name="HTMLInjectionError",this.html=X}}const Or=h,Xe=d,kl=Symbol("nomatch"),Ml=7,Ar=function(g){const L=Object.create(null),X=Object.create(null),yn=[];let ae=!0;const Un="Could not find the language '{}', did you forget to load/include a language module?",nn={disableAutodetect:!0,name:"Plain text",contains:[]};let K={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:z};function bn(U){return K.noHighlightRe.test(U)}function Se(U){let ln=U.className+" ";ln+=U.parentNode?U.parentNode.className:"";const Cn=K.languageDetectRe.exec(ln);if(Cn){const ee=Lt(Cn[1]);return ee||(Ai(Un.replace("{}",Cn[1])),Ai("Falling back to no-highlight mode for this block.",U)),ee?Cn[1]:"no-highlight"}return ln.split(/\s+/).find(ee=>bn(ee)||Lt(ee))}function me(U,ln,Cn){let ee="",ye="";typeof ln=="object"?(ee=U,Cn=ln.ignoreIllegals,ye=ln.language):(Ct("10.7.0","highlight(lang, code, ...args) has been deprecated."),Ct("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),ye=U,ee=ln),Cn===void 0&&(Cn=!0);const it={code:ee,language:ye};at("before:highlight",it);const rt=it.result?it.result:It(it.language,it.code,Cn);return rt.code=it.code,at("after:highlight",rt),rt}function It(U,ln,Cn,ee){const ye=Object.create(null);function it(J,sn){return J.keywords[sn]}function rt(){if(!Tn.keywords){je.addText(Yn);return}let J=0;Tn.keywordPatternRe.lastIndex=0;let sn=Tn.keywordPatternRe.exec(Yn),wn="";for(;sn;){wn+=Yn.substring(J,sn.index);const In=Tt.case_insensitive?sn[0].toLowerCase():sn[0],Pn=it(Tn,In);if(Pn){const[ft,ql]=Pn;if(je.addText(wn),wn="",ye[In]=(ye[In]||0)+1,ye[In]<=Ml&&(sa+=ql),ft.startsWith("_"))wn+=sn[0];else{const Rr=Tt.classNameAliases[ft]||ft;Le(sn[0],Rr)}}else wn+=sn[0];J=Tn.keywordPatternRe.lastIndex,sn=Tn.keywordPatternRe.exec(Yn)}wn+=Yn.substring(J),je.addText(wn)}function aa(){if(Yn==="")return;let J=null;if(typeof Tn.subLanguage=="string"){if(!L[Tn.subLanguage]){je.addText(Yn);return}J=It(Tn.subLanguage,Yn,!0,Hn[Tn.subLanguage]),Hn[Tn.subLanguage]=J._top}else J=Na(Yn,Tn.subLanguage.length?Tn.subLanguage:null);Tn.relevance>0&&(sa+=J.relevance),je.__addSublanguage(J._emitter,J.language)}function Re(){Tn.subLanguage!=null?aa():rt(),Yn=""}function Le(J,sn){J!==""&&(je.startScope(sn),je.addText(J),je.endScope())}function ia(J,sn){let wn=1;const In=sn.length-1;for(;wn<=In;){if(!J._emit[wn]){wn++;continue}const Pn=Tt.classNameAliases[J[wn]]||J[wn],ft=sn[wn];Pn?Le(ft,Pn):(Yn=ft,rt(),Yn=""),wn++}}function Aa(J,sn){return J.scope&&typeof J.scope=="string"&&je.openNode(Tt.classNameAliases[J.scope]||J.scope),J.beginScope&&(J.beginScope._wrap?(Le(Yn,Tt.classNameAliases[J.beginScope._wrap]||J.beginScope._wrap),Yn=""):J.beginScope._multi&&(ia(J.beginScope,sn),Yn="")),Tn=Object.create(J,{parent:{value:Tn}}),Tn}function ra(J,sn,wn){let In=mn(J.endRe,wn);if(In){if(J["on:end"]){const Pn=new m(J);J["on:end"](sn,Pn),Pn.isMatchIgnored&&(In=!1)}if(In){for(;J.endsParent&&J.parent;)J=J.parent;return J}}if(J.endsWithParent)return ra(J.parent,sn,wn)}function Te(J){return Tn.matcher.regexIndex===0?(Yn+=J[0],1):(Ri=!0,0)}function zl(J){const sn=J[0],wn=J.rule,In=new m(wn),Pn=[wn.__beforeBegin,wn["on:begin"]];for(const ft of Pn)if(ft&&(ft(J,In),In.isMatchIgnored))return Te(sn);return wn.skip?Yn+=sn:(wn.excludeBegin&&(Yn+=sn),Re(),!wn.returnBegin&&!wn.excludeBegin&&(Yn=sn)),Aa(wn,J),wn.returnBegin?0:sn.length}function Bl(J){const sn=J[0],wn=ln.substring(J.index),In=ra(Tn,J,wn);if(!In)return kl;const Pn=Tn;Tn.endScope&&Tn.endScope._wrap?(Re(),Le(sn,Tn.endScope._wrap)):Tn.endScope&&Tn.endScope._multi?(Re(),ia(Tn.endScope,J)):Pn.skip?Yn+=sn:(Pn.returnEnd||Pn.excludeEnd||(Yn+=sn),Re(),Pn.excludeEnd&&(Yn=sn));do Tn.scope&&je.closeNode(),!Tn.skip&&!Tn.subLanguage&&(sa+=Tn.relevance),Tn=Tn.parent;while(Tn!==In.parent);return In.starts&&Aa(In.starts,J),Pn.returnEnd?0:sn.length}function Ul(){const J=[];for(let sn=Tn;sn!==Tt;sn=sn.parent)sn.scope&&J.unshift(sn.scope);J.forEach(sn=>je.openNode(sn))}let St={};function la(J,sn){const wn=sn&&sn[0];if(Yn+=J,wn==null)return Re(),0;if(St.type==="begin"&&sn.type==="end"&&St.index===sn.index&&wn===""){if(Yn+=ln.slice(sn.index,sn.index+1),!ae){const In=new Error(`0 width match regex (${U})`);throw In.languageName=U,In.badRule=St.rule,In}return 1}if(St=sn,sn.type==="begin")return zl(sn);if(sn.type==="illegal"&&!Cn){const In=new Error('Illegal lexeme "'+wn+'" for mode "'+(Tn.scope||"<unnamed>")+'"');throw In.mode=Tn,In}else if(sn.type==="end"){const In=Bl(sn);if(In!==kl)return In}if(sn.type==="illegal"&&wn==="")return sn.index===ln.length||(Yn+=`
`),1;if(He>1e5&&He>sn.index*3)throw new Error("potential infinite loop, way more iterations than matches");return Yn+=wn,wn.length}const Tt=Lt(U);if(!Tt)throw tt(Un.replace("{}",U)),new Error('Unknown language: "'+U+'"');const Hl=Al(Tt);let Ci="",Tn=ee||Hl;const Hn={},je=new K.__emitter(K);Ul();let Yn="",sa=0,Ue=0,He=0,Ri=!1;try{if(Tt.__emitTokens)Tt.__emitTokens(ln,je);else{for(Tn.matcher.considerAll();;){He++,Ri?Ri=!1:Tn.matcher.considerAll(),Tn.matcher.lastIndex=Ue;const J=Tn.matcher.exec(ln);if(!J)break;const sn=ln.substring(Ue,J.index),wn=la(sn,J);Ue=J.index+wn}la(ln.substring(Ue))}return je.finalize(),Ci=je.toHTML(),{language:U,value:Ci,relevance:sa,illegal:!1,_emitter:je,_top:Tn}}catch(J){if(J.message&&J.message.includes("Illegal"))return{language:U,value:Or(ln),illegal:!0,relevance:0,_illegalBy:{message:J.message,index:Ue,context:ln.slice(Ue-100,Ue+100),mode:J.mode,resultSoFar:Ci},_emitter:je};if(ae)return{language:U,value:Or(ln),illegal:!1,relevance:0,errorRaised:J,_emitter:je,_top:Tn};throw J}}function wa(U){const ln={value:Or(U),illegal:!1,relevance:0,_top:nn,_emitter:new K.__emitter(K)};return ln._emitter.addText(U),ln}function Na(U,ln){ln=ln||K.languages||Object.keys(L);const Cn=wa(U),ee=ln.filter(Lt).filter(Mi).map(Re=>It(Re,U,!1));ee.unshift(Cn);const ye=ee.sort((Re,Le)=>{if(Re.relevance!==Le.relevance)return Le.relevance-Re.relevance;if(Re.language&&Le.language){if(Lt(Re.language).supersetOf===Le.language)return 1;if(Lt(Le.language).supersetOf===Re.language)return-1}return 0}),[it,rt]=ye,aa=it;return aa.secondBest=rt,aa}function ta(U,ln,Cn){const ee=ln&&X[ln]||Cn;U.classList.add("hljs"),U.classList.add(`language-${ee}`)}function Ea(U){let ln=null;const Cn=Se(U);if(bn(Cn))return;if(at("before:highlightElement",{el:U,language:Cn}),U.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",U);return}if(U.children.length>0&&(K.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(U)),K.throwUnescapedHTML))throw new vo("One of your code blocks includes unescaped HTML.",U.innerHTML);ln=U;const ee=ln.textContent,ye=Cn?me(ee,{language:Cn,ignoreIllegals:!0}):Na(ee);U.innerHTML=ye.value,U.dataset.highlighted="yes",ta(U,Cn,ye.language),U.result={language:ye.language,re:ye.relevance,relevance:ye.relevance},ye.secondBest&&(U.secondBest={language:ye.secondBest.language,relevance:ye.secondBest.relevance}),at("after:highlightElement",{el:U,result:ye,text:ee})}function ii(U){K=Xe(K,U)}const Cl=()=>{Oa(),Ct("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function yo(){Oa(),Ct("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let kr=!1;function Oa(){function U(){Oa()}if(document.readyState==="loading"){kr||window.addEventListener("DOMContentLoaded",U,!1),kr=!0;return}document.querySelectorAll(K.cssSelector).forEach(Ea)}function ri(U,ln){let Cn=null;try{Cn=ln(g)}catch(ee){if(tt("Language definition for '{}' could not be registered.".replace("{}",U)),ae)tt(ee);else throw ee;Cn=nn}Cn.name||(Cn.name=U),L[U]=Cn,Cn.rawDefinition=ln.bind(null,g),Cn.aliases&&Mr(Cn.aliases,{languageName:U})}function xo(U){delete L[U];for(const ln of Object.keys(X))X[ln]===U&&delete X[ln]}function Rl(){return Object.keys(L)}function Lt(U){return U=(U||"").toLowerCase(),L[U]||L[X[U]]}function Mr(U,{languageName:ln}){typeof U=="string"&&(U=[U]),U.forEach(Cn=>{X[Cn.toLowerCase()]=ln})}function Mi(U){const ln=Lt(U);return ln&&!ln.disableAutodetect}function Cr(U){U["before:highlightBlock"]&&!U["before:highlightElement"]&&(U["before:highlightElement"]=ln=>{U["before:highlightBlock"](Object.assign({block:ln.el},ln))}),U["after:highlightBlock"]&&!U["after:highlightElement"]&&(U["after:highlightElement"]=ln=>{U["after:highlightBlock"](Object.assign({block:ln.el},ln))})}function Ll(U){Cr(U),yn.push(U)}function Dl(U){const ln=yn.indexOf(U);ln!==-1&&yn.splice(ln,1)}function at(U,ln){const Cn=U;yn.forEach(function(ee){ee[Cn]&&ee[Cn](ln)})}function Me(U){return Ct("10.7.0","highlightBlock will be removed entirely in v12.0"),Ct("10.7.0","Please use highlightElement now."),Ea(U)}Object.assign(g,{highlight:me,highlightAuto:Na,highlightAll:Oa,highlightElement:Ea,highlightBlock:Me,configure:ii,initHighlighting:Cl,initHighlightingOnLoad:yo,registerLanguage:ri,unregisterLanguage:xo,listLanguages:Rl,getLanguage:Lt,registerAliases:Mr,autoDetection:Mi,inherit:Xe,addPlugin:Ll,removePlugin:Dl}),g.debugMode=function(){ae=!1},g.safeMode=function(){ae=!0},g.versionString=Er,g.regex={concat:Z,lookahead:E,either:Sn,optional:G,anyNumberOfTimes:V};for(const U in An)typeof An[U]=="object"&&o(An[U]);return Object.assign(g,An),g},Rt=Ar({});return Rt.newInstance=()=>Ar({}),ad=Rt,Rt.HighlightJS=Rt,Rt.default=Rt,ad}var VT=IT();const Ol=Sr(VT),qg="[A-Za-z$_][0-9A-Za-z$_]*",KT=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],QT=["true","false","null","undefined","NaN","Infinity"],j1=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],w1=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],N1=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],XT=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","self","global"],JT=[].concat(N1,j1,w1);function ZT(o){const m=o.regex,h=(W,{after:Mn})=>{const jn="</"+W[0].slice(1);return W.input.indexOf(jn,Mn)!==-1},d=qg,T={begin:"<>",end:"</>"},R=/<[A-Za-z0-9\\._:-]+\s*\/>/,M={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(W,Mn)=>{const jn=W[0].length+W.index,ce=W.input[jn];if(ce==="<"||ce===","){Mn.ignoreMatch();return}ce===">"&&(h(W,{after:jn})||Mn.ignoreMatch());let ve;const dt=W.input.substring(jn);if(ve=dt.match(/^\s*=/)){Mn.ignoreMatch();return}if((ve=dt.match(/^\s+extends\s+/))&&ve.index===0){Mn.ignoreMatch();return}}},D={$pattern:qg,keyword:KT,literal:QT,built_in:JT,"variable.language":XT},q="[0-9](_?[0-9])*",Y=`\\.(${q})`,z="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",v={className:"number",variants:[{begin:`(\\b(${z})((${Y})|\\.)?|(${Y}))[eE][+-]?(${q})\\b`},{begin:`\\b(${z})\\b((${Y})\\b|\\.)?|(${Y})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},E={className:"subst",begin:"\\$\\{",end:"\\}",keywords:D,contains:[]},V={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,E],subLanguage:"xml"}},G={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,E],subLanguage:"css"}},Z={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,E],subLanguage:"graphql"}},tn={className:"string",begin:"`",end:"`",contains:[o.BACKSLASH_ESCAPE,E]},gn={className:"comment",variants:[o.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:d+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),o.C_BLOCK_COMMENT_MODE,o.C_LINE_COMMENT_MODE]},mn=[o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,V,G,Z,tn,{match:/\$\d+/},v];E.contains=mn.concat({begin:/\{/,end:/\}/,keywords:D,contains:["self"].concat(mn)});const On=[].concat(gn,E.contains),Xn=On.concat([{begin:/(\s*)\(/,end:/\)/,keywords:D,contains:["self"].concat(On)}]),vn={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:D,contains:Xn},P={variants:[{match:[/class/,/\s+/,d,/\s+/,/extends/,/\s+/,m.concat(d,"(",m.concat(/\./,d),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,d],scope:{1:"keyword",3:"title.class"}}]},pn={relevance:0,match:m.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...j1,...w1]}},re={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},fe={variants:[{match:[/function/,/\s+/,d,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[vn],illegal:/%/},oe={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function be(W){return m.concat("(?!",W.join("|"),")")}const Qe={match:m.concat(/\b/,be([...N1,"super","import","await"].map(W=>`${W}\\s*\\(`)),d,m.lookahead(/\s*\(/)),className:"title.function",relevance:0},Ae={begin:m.concat(/\./,m.lookahead(m.concat(d,/(?![0-9A-Za-z$_(])/))),end:d,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},ue={match:[/get|set/,/\s+/,d,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},vn]},I="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+o.UNDERSCORE_IDENT_RE+")\\s*=>",un={match:[/const|var|let/,/\s+/,d,/\s*/,/=\s*/,/(async\s*)?/,m.lookahead(I)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[vn]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:D,exports:{PARAMS_CONTAINS:Xn,CLASS_REFERENCE:pn},illegal:/#(?![$_A-Za-z])/,contains:[o.SHEBANG({label:"shebang",binary:"node",relevance:5}),re,o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,V,G,Z,tn,gn,{match:/\$\d+/},v,pn,{scope:"attr",match:d+m.lookahead(":"),relevance:0},un,{begin:"("+o.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[gn,o.REGEXP_MODE,{className:"function",begin:I,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:o.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:D,contains:Xn}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:T.begin,end:T.end},{match:R},{begin:M.begin,"on:begin":M.isTrulyOpeningTag,end:M.end}],subLanguage:"xml",contains:[{begin:M.begin,end:M.end,skip:!0,contains:["self"]}]}]},fe,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+o.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[vn,o.inherit(o.TITLE_MODE,{begin:d,className:"title.function"})]},{match:/\.\.\./,relevance:0},Ae,{match:"\\$"+d,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[vn]},Qe,oe,P,ue,{match:/\$[(.]/}]}}var xr="[0-9](_*[0-9])*",co=`\\.(${xr})`,uo="[0-9a-fA-F](_*[0-9a-fA-F])*",Gg={className:"number",variants:[{begin:`(\\b(${xr})((${co})|\\.)?|(${co}))[eE][+-]?(${xr})[fFdD]?\\b`},{begin:`\\b(${xr})((${co})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${co})[fFdD]?\\b`},{begin:`\\b(${xr})[fFdD]\\b`},{begin:`\\b0[xX]((${uo})\\.?|(${uo})?\\.(${uo}))[pP][+-]?(${xr})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${uo})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};function E1(o,m,h){return h===-1?"":o.replace(m,d=>E1(o,m,h-1))}function PT(o){const m=o.regex,h="[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",d="(?:(?:\\s*\\[\\s*])+)?",T=h+"<@@@>"+d,M="(?:"+("\\?(?:\\s+(?:extends|super)\\s+"+T+")?")+"|"+T+")",D=E1("(?:\\s*<\\s*"+M+"(?:\\s*,\\s*"+M+")*\\s*>)?",/<@@@>/g,2),E={keyword:["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do","sealed","yield","permits","goto","when"],literal:["false","true","null"],type:["char","boolean","long","float","int","byte","short","double"],built_in:["super","this"]},V={className:"meta",begin:"@"+h,contains:[{begin:/\(/,end:/\)/,contains:["self"]}]},G={className:"params",begin:/\(/,end:/\)/,keywords:E,relevance:0,contains:[o.C_BLOCK_COMMENT_MODE],endsParent:!0};return{name:"Java",aliases:["jsp"],keywords:E,illegal:/<\/|#/,contains:[o.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{begin:/import java\.[a-z]+\./,keywords:"import",relevance:2},o.C_LINE_COMMENT_MODE,o.C_BLOCK_COMMENT_MODE,{begin:/"""/,end:/"""/,className:"string",contains:[o.BACKSLASH_ESCAPE]},o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,{match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,h],className:{1:"keyword",3:"title.class"}},{match:/non-sealed/,scope:"keyword"},{beginKeywords:"new throw return else yield assert",relevance:0},{begin:[h,m.concat(D,d,/\s+/),h,d,/\s*/,/=(?!=)/],className:{1:"type",3:"variable",6:"operator"}},{begin:[/record/,/\s+/,h],className:{1:"keyword",3:"title.class"},contains:[G,o.C_LINE_COMMENT_MODE,o.C_BLOCK_COMMENT_MODE]},{begin:[h,m.concat(D,d,/\s+/),h,/\s*(?=\()/],className:{1:"type",3:"title.function"},keywords:E,contains:[{className:"params",begin:/\(/,end:/\)/,keywords:E,relevance:0,contains:[V,o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,Gg,o.C_BLOCK_COMMENT_MODE]},o.C_LINE_COMMENT_MODE,o.C_BLOCK_COMMENT_MODE]},Gg,V]}}function FT(o){const m=o.regex,h=o.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),d="decltype\\(auto\\)",T="[a-zA-Z_]\\w*::",M="(?!struct)("+d+"|"+m.optional(T)+"[a-zA-Z_]\\w*"+m.optional("<[^<>]+>")+")",D={className:"type",begin:"\\b[a-z\\d_]*_t\\b"},Y={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[o.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'("+"\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)"+"|.)",end:"'",illegal:"."},o.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\\s"]{0,16})\(/,end:/\)([^()\\\s"]{0,16})"/})]},z={className:"number",variants:[{begin:"[+-]?(?:(?:\\b[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|\\b[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|\\b0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)"},{begin:"[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)"}],relevance:0},v={scope:"meta",begin:/#\s*include\b/,end:/$/,keywords:{keyword:"include"},contains:[{begin:/\\\n/},Y,{scope:"string",begin:/<.*?>/},h,o.C_BLOCK_COMMENT_MODE]},E={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},o.inherit(Y,{className:"string"}),h,o.C_BLOCK_COMMENT_MODE]},V=[v,E],G={className:"title",begin:m.optional(T)+o.IDENT_RE,relevance:0},Z=m.optional(T)+o.IDENT_RE+"\\s*\\(",tn=12,Sn=["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],gn=["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],mn=["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","flat_map","flat_set","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"],On=["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"],P={type:gn,keyword:Sn,literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],_type_hints:mn},pn={className:"function.dispatch",relevance:0,keywords:{_hint:On},begin:m.concat(/\b/,`(?!${Sn.join("|")})`,o.IDENT_RE,m.lookahead(/(<[^<>]+>|)\s*\(/))},re=[pn,...V,D,h,o.C_BLOCK_COMMENT_MODE,z,Y],fe={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:P,contains:re.concat([{begin:/\(/,end:/\)/,keywords:P,contains:re.concat(["self"]),relevance:0}]),relevance:0},oe={className:"function",begin:"("+M+"[\\*&\\s]+){1,"+tn+"}"+Z,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:P,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:d,keywords:P,relevance:0},{begin:Z,returnBegin:!0,contains:[G],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[Y,z]},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:P,relevance:0,contains:[h,o.C_BLOCK_COMMENT_MODE,Y,z,D,{begin:/\(/,end:/\)/,keywords:P,relevance:0,contains:["self",h,o.C_BLOCK_COMMENT_MODE,Y,z,D]}]},D,h,o.C_BLOCK_COMMENT_MODE,...V]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:P,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat(fe,oe,pn,re,[...V,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function|flat_map|flat_set)\\s*<(?!<)",end:">",keywords:P,contains:["self",D]},{begin:o.IDENT_RE+"::",keywords:P},{match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],className:{1:"keyword",3:"title.class"}}])}}function WT(o){const m=o.regex,h=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),d=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],T=/[-+*\/%=<>&|^~]|\*\*?|\/\/?|<<=?|>>=?|\+=|-=|\*=|\/=|%=|@|<|>/,R=["bool","complex","dict","float","frozenset","int","list","set","str","tuple"],M=["add_vertex","add","append","backtrack","bit_length","clear","collect_words","connected","counting_sort","defaultdict","deque","dfs","dp","extend","find_max_index","find","heapify","heappop","heappush","insert","insertion_sort","join","ListNode","merge_sort","pop","popleft","print_trie","quick_sort","RECURRENCE_RELATION","remove","shuffle","sort","TreeNode","TrieNode","union","UnionFind","update"],D=["BASE_CASE","BOOLEAN","CONDITION","CRITERIA","ITERATE_OVER_INPUT","MAXIMUM_POSSIBLE_ANSWER","MINIMUM_POSSIBLE_ANSWER","OTHER_ARGUMENTS","SMALLEST_SUBPROBLEM","START_NODE","STATE_FOR_WHOLE_INPUT","STATE","WINDOW_CONDITION_BROKEN"],q=["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip",...M],Y=["__debug__","Ellipsis","False","None","NotImplemented","True",...D],z=["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union",...R],v={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:d,built_in:q,literal:Y,type:z},E={className:"meta",begin:/^(>>>|\.\.\.) /},V={className:"subst",begin:/\{/,end:/\}/,keywords:v,illegal:/#/},G={begin:/\{\{/,relevance:0},Z={className:"string",contains:[o.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[o.BACKSLASH_ESCAPE,E],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[o.BACKSLASH_ESCAPE,E],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[o.BACKSLASH_ESCAPE,E,G,V]},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[o.BACKSLASH_ESCAPE,E,G,V]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[o.BACKSLASH_ESCAPE,G,V]},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[o.BACKSLASH_ESCAPE,G,V]},o.APOS_STRING_MODE,o.QUOTE_STRING_MODE]},tn="[0-9](_?[0-9])*",Sn=`(\\b(${tn}))?\\.(${tn})|\\b(${tn})\\.`,gn=`\\b|${d.join("|")}`,mn={className:"number",relevance:0,variants:[{begin:`(\\b(${tn})|(${Sn}))[eE][+-]?(${tn})[jJ]?(?=${gn})`},{begin:`(${Sn})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${gn})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${gn})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${gn})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${gn})`},{begin:`\\b(${tn})[jJ](?=${gn})`}]},On={className:"comment",begin:m.lookahead(/# type:/),end:/$/,keywords:v,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},Xn={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:v,contains:["self",E,mn,Z,o.HASH_COMMENT_MODE,{scope:"params.operator",match:T},{scope:"params.comma",match:","},{scope:"params.self",match:/self/}]}]};return V.contains=[Z,mn,E],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:v,illegal:/(<\/|\?)|=>/,contains:[E,mn,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},Z,On,o.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,h],scope:{1:"keyword.def",3:"title.function"},contains:[Xn]},{variants:[{match:[/\bclass/,/\s+/,h,/\s*/,/\(\s*/,h,/\s*\)/]},{match:[/\bclass/,/\s+/,h]}],scope:{1:"keyword.class",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[mn,Xn,Z]},{scope:"operator",match:T}]}}Ol.registerLanguage("python",WT);Ol.registerLanguage("javascript",ZT);Ol.registerLanguage("java",PT);Ol.registerLanguage("cpp",FT);function $T({code:o,language:m}){const h=H.useRef(null),[d,T]=H.useState(""),[R,M]=H.useState(""),D=Qn("hljs",m,Ug.code),q=()=>{if(h.current){const Z=o.split(`
`).map((tn,Sn)=>{const gn=Ol.highlight(tn,{language:m}).value;return`<span class=${Ug.line} data-line-number=${Sn+1}>${gn}</span>`}).join("");M(Z)}},Y=()=>{h.current?.querySelectorAll("span[data-line-number]")?.forEach(Z=>Z.addEventListener("click",E))},z=()=>{h.current?.querySelectorAll("span[data-line-number]")?.forEach(Z=>Z.removeEventListener("click",E))},v=()=>{h.current?.querySelector(`span[data-line-number="${d}"]`)?.removeAttribute("focused")},E=V=>{const G=V.currentTarget,Z=G.getAttribute("data-line-number")??"";v(),Z===d?T(""):(G.setAttribute("focused",""),T(Z))};return ep(h,v),H.useEffect(()=>(q(),Y(),()=>z()),[o,R,d]),r.jsx("pre",{ref:h,children:r.jsx("code",{className:D,dangerouslySetInnerHTML:{__html:R}})})}const nj="_copyButton_fst3f_1",ej="_copySvg_fst3f_23",tj="_checkSvg_fst3f_30",aj="_checkSvgPath_fst3f_35",ij="_enter_fst3f_46",rj="_exit_fst3f_50",Ni={copyButton:nj,copySvg:ej,checkSvg:tj,checkSvgPath:aj,enter:ij,exit:rj};function lj({onClick:o}){const[m,h]=H.useState("show"),[d,T]=H.useState("hide"),R=Qn(Ni.copySvg,m==="enter"&&Ni.enter,m==="exit"&&Ni.exit),M=Qn(Ni.checkSvg,d==="exit"&&Ni.exit),D=Qn(Ni.checkSvgPath),q=()=>{m==="show"&&d==="hide"&&(h("exit"),o())},Y=()=>{m==="enter"&&h("show"),m==="exit"&&(h("hide"),T("show"))},z=()=>{d==="show"&&setTimeout(()=>{T("exit")},500),d==="exit"&&(T("hide"),h("enter"))},v=()=>m!=="hide"&&r.jsx("svg",{className:R,viewBox:"0 0 512 512",onAnimationEnd:Y,children:r.jsx("path",{d:"M64 464H288c8.8 0 16-7.2 16-16V384h48v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h64v48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM224 304H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16V288c0 8.8 7.2 16 16 16zm-64-16V64c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64z"})}),E=()=>d!=="hide"&&r.jsx("svg",{className:M,viewBox:"0 0 16 16",onAnimationEnd:z,children:r.jsx("path",{className:D,d:"M3.428571,9.14285714 L6.85714286,12.57142857 L12.5714286,3.42857143"})});return r.jsxs("button",{type:"button","aria-label":d==="hide"?"Copy code":"Copied",title:"Copy code",className:Ni.copyButton,onClick:q,children:[v(),E()]})}function sj(){return r.jsxs("svg",{viewBox:"0 0 128 128",children:[r.jsxs("linearGradient",{id:"python_svg__a",x1:70.252,x2:170.659,y1:1237.476,y2:1151.089,gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",gradientUnits:"userSpaceOnUse",children:[r.jsx("stop",{offset:0,stopColor:"#5A9FD4"}),r.jsx("stop",{offset:1,stopColor:"#306998"})]}),r.jsxs("linearGradient",{id:"python_svg__b",x1:209.474,x2:173.62,y1:1098.811,y2:1149.537,gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",gradientUnits:"userSpaceOnUse",children:[r.jsx("stop",{offset:0,stopColor:"#FFD43B"}),r.jsx("stop",{offset:1,stopColor:"#FFE873"})]}),r.jsx("path",{fill:"url(#python_svg__a)",d:"M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008M50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721",transform:"translate(0 10.26)"}),r.jsx("path",{fill:"url(#python_svg__b)",d:"M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692",transform:"translate(0 10.26)"}),r.jsxs("radialGradient",{id:"python_svg__c",cx:1825.678,cy:444.45,r:26.743,gradientTransform:"matrix(0 -.24 -1.055 0 532.979 557.576)",gradientUnits:"userSpaceOnUse",children:[r.jsx("stop",{offset:0,stopColor:"#B8B8B8",stopOpacity:.498}),r.jsx("stop",{offset:1,stopColor:"#7F7F7F",stopOpacity:0})]}),r.jsx("path",{fill:"url(#python_svg__c)",d:"M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416s14.815-6.417 33.092-6.417c18.275 0 33.091 2.872 33.091 6.417",opacity:.444})]})}function oj(){return r.jsxs("svg",{viewBox:"0 0 128 128",children:[r.jsx("path",{fill:"#F0DB4F",d:"M1.408 1.408h125.184v125.185H1.408z"}),r.jsx("path",{fill:"#323330",d:"M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237"})]})}function cj(){return r.jsxs("svg",{id:"Layer_1",x:"0px",y:"0px",width:"306px",height:"344.35px",viewBox:"0 0 306 344.35",enableBackground:"new 0 0 306 344.35",children:[r.jsx("path",{fill:"#00599C",d:"M302.107,258.262c2.401-4.159,3.893-8.845,3.893-13.053V99.14c0-4.208-1.49-8.893-3.892-13.052L153,172.175L302.107,258.262z"}),r.jsx("path",{fill:"#004482",d:"M166.25,341.193l126.5-73.034c3.644-2.104,6.956-5.737,9.357-9.897L153,172.175L3.893,258.263c2.401,4.159,5.714,7.793,9.357,9.896l126.5,73.034C147.037,345.401,158.963,345.401,166.25,341.193z"}),r.jsx("path",{fill:"#659AD2",d:"M302.108,86.087c-2.402-4.16-5.715-7.793-9.358-9.897L166.25,3.156c-7.287-4.208-19.213-4.208-26.5,0L13.25,76.19C5.962,80.397,0,90.725,0,99.14v146.069c0,4.208,1.491,8.894,3.893,13.053L153,172.175L302.108,86.087z"}),r.jsx("g",{children:r.jsx("path",{fill:"#FFFFFF",d:"M153,274.175c-56.243,0-102-45.757-102-102s45.757-102,102-102c36.292,0,70.139,19.53,88.331,50.968l-44.143,25.544c-9.105-15.736-26.038-25.512-44.188-25.512c-28.122,0-51,22.878-51,51c0,28.121,22.878,51,51,51c18.152,0,35.085-9.776,44.191-25.515l44.143,25.543C223.142,254.644,189.294,274.175,153,274.175z"})}),r.jsx("g",{children:r.jsx("polygon",{fill:"#FFFFFF",points:"255,166.508 243.666,166.508 243.666,155.175 232.334,155.175 232.334,166.508 221,166.508221,177.841 232.334,177.841 232.334,189.175 243.666,189.175 243.666,177.841 255,177.841 	"})}),r.jsx("g",{children:r.jsx("polygon",{fill:"#FFFFFF",points:"297.5,166.508 286.166,166.508 286.166,155.175 274.834,155.175 274.834,166.508 263.5,166.508263.5,177.841 274.834,177.841 274.834,189.175 286.166,189.175 286.166,177.841 297.5,177.841 	"})})]})}function uj(){return r.jsxs("svg",{height:"800px",width:"800px",id:"Layer_1",viewBox:"0 0 511.998 511.998",children:[r.jsxs("g",{children:[r.jsx("path",{fill:"#DB380E",d:"M253.464,94.869c-23.658,16.639-50.471,35.498-64.838,66.699c-24.954,54.435,51.062,113.812,54.311,116.313c0.755,0.581,1.659,0.871,2.56,0.871c0.957,0,1.915-0.327,2.693-0.979c1.509-1.262,1.937-3.406,1.031-5.152c-0.275-0.53-27.561-53.53-26.547-91.552c0.359-13.243,18.892-28.266,38.512-44.171c17.97-14.568,38.34-31.079,50.258-50.394c26.164-42.516-2.916-84.322-3.213-84.74c-1.155-1.622-3.287-2.209-5.11-1.41c-1.821,0.804-2.83,2.773-2.414,4.72c0.059,0.277,5.714,27.923-10.022,56.406C284.203,73.25,269.959,83.268,253.464,94.869z"}),r.jsx("path",{fill:"#DB380E",d:"M353.137,113.617c1.669-1.257,2.159-3.55,1.15-5.38c-1.011-1.83-3.211-2.637-5.165-1.895c-4.019,1.528-98.416,37.915-98.416,81.88c0,30.307,12.946,46.317,22.399,58.009c3.708,4.586,6.909,8.546,7.964,11.927c2.97,9.743-4.066,27.353-7.025,33.317c-0.853,1.714-0.435,3.792,1.016,5.044c0.784,0.677,1.763,1.021,2.743,1.021c0.834,0,1.672-0.248,2.396-0.752c1.623-1.128,39.667-28.026,32.844-60.433c-2.542-12.318-8.595-21.318-13.936-29.26c-8.274-12.305-14.25-21.193-5.184-37.609C304.545,150.338,352.65,113.981,353.137,113.617z"})]}),r.jsxs("g",{children:[r.jsx("path",{fill:"#73A1FB",d:"M107.418,298.236c-1.618,4.845-0.854,9.651,2.207,13.903c10.233,14.207,46.48,22.029,102.068,22.029c0.003,0,0.005,0,0.007,0c7.532,0,15.484-0.148,23.629-0.44c88.875-3.181,121.839-30.869,123.199-32.046c1.482-1.283,1.878-3.419,0.957-5.147c-0.922-1.727-2.909-2.595-4.808-2.072c-31.301,8.546-89.748,11.58-130.288,11.58c-45.363,0-68.465-3.268-74.121-5.681c2.902-3.985,20.802-11.101,42.983-15.464c2.12-0.416,3.577-2.374,3.367-4.524s-2.016-3.79-4.177-3.79C179.439,276.584,114.234,277.628,107.418,298.236z"}),r.jsx("path",{fill:"#73A1FB",d:"M404.812,269.718c-18.331,0-35.714,9.188-36.446,9.577c-1.695,0.908-2.555,2.852-2.09,4.72c0.467,1.865,2.144,3.176,4.067,3.178c0.389,0,39.102,0.317,42.608,22.436c3.106,19.082-36.629,50-52.202,60.304c-1.682,1.113-2.335,3.263-1.554,5.123c0.665,1.583,2.206,2.573,3.868,2.573c0.29,0,0.584-0.03,0.876-0.092c3.696-0.791,90.406-19.899,81.238-70.384C439.584,276.213,420.138,269.718,404.812,269.718z"}),r.jsx("path",{fill:"#73A1FB",d:"M345.347,363.755c0.302-1.617-0.371-3.262-1.717-4.207l-20.791-14.563c-1.014-0.71-2.295-0.933-3.485-0.618c-0.217,0.055-21.959,5.771-53.525,9.276c-12.528,1.405-26.56,2.147-40.582,2.147c-31.558,0-52.192-3.708-55.197-6.428c-0.398-0.764-0.272-1.111-0.201-1.304c0.546-1.518,3.472-3.322,5.358-4.036c2.083-0.771,3.206-3.033,2.558-5.157c-0.646-2.127-2.837-3.378-4.999-2.859c-20.856,5.033-31.054,12.071-30.312,20.918c1.318,15.686,37.65,23.737,68.365,25.865c4.417,0.302,9.194,0.455,14.195,0.455c0.003,0,0.005,0,0.008,0c51.074,0,116.55-16.025,117.204-16.188C343.825,366.666,345.044,365.375,345.347,363.755z"}),r.jsx("path",{fill:"#73A1FB",d:"M188.602,397.419c1.575-1.024,2.273-2.971,1.714-4.764c-0.557-1.793-2.234-2.971-4.118-2.946c-2.795,0.074-27.349,1.182-29.068,16.815c-0.52,4.672,0.818,8.941,3.979,12.686c8.816,10.448,32.614,16.658,72.741,18.984c4.747,0.285,9.569,0.428,14.334,0.428c51.015,0,85.373-15.973,86.812-16.653c1.395-0.66,2.315-2.031,2.397-3.571s-0.687-3.001-2.003-3.806l-26.275-16.04c-0.912-0.556-2.003-0.74-3.043-0.527c-0.166,0.035-16.849,3.495-42.026,6.913c-4.764,0.648-10.73,0.977-17.73,0.977c-25.15,0-53.124-4.109-58.489-6.8C187.749,398.613,187.848,397.975,188.602,397.419z"}),r.jsx("path",{fill:"#73A1FB",d:"M224.408,486.85c116.854-0.099,179.571-20.88,191.653-33.957c4.277-4.626,4.739-9.006,4.376-11.867c-0.898-7.04-7.311-11.35-8.038-11.818c-1.754-1.128-4.108-0.833-5.476,0.745c-1.365,1.578-1.397,3.884-0.027,5.461c0.737,0.948,1.163,2.535-0.992,4.692c-4.83,4.511-53.545,18.204-134.656,22.318c-11.111,0.577-22.765,0.871-34.636,0.873c-72.623,0-125.772-9.948-132.749-15.744c2.689-3.864,21.489-10.037,41.482-13.529c2.253-0.393,3.775-2.516,3.426-4.776c-0.349-2.259-2.432-3.814-4.709-3.519c-0.564,0.077-2.478,0.191-4.694,0.327c-32.988,2.014-71.109,6.503-73.098,23.5c-0.604,5.179,0.935,9.881,4.576,13.973c8.909,10.01,34.516,23.319,153.558,23.319C224.406,486.85,224.406,486.85,224.408,486.85z"}),r.jsx("path",{fill:"#73A1FB",d:"M439.013,456.578c-1.652-0.764-3.604-0.378-4.836,0.952c-0.171,0.185-17.74,18.556-70.564,29.344c-20.223,4.052-58.183,6.107-112.826,6.107c-54.745,0-106.838-2.154-107.357-2.176c-2.176-0.106-4.037,1.476-4.333,3.618c-0.297,2.14,1.083,4.158,3.184,4.658c0.542,0.128,55.135,12.918,129.779,12.918c35.801,0,70.639-2.907,103.548-8.645c61.361-10.757,65.657-41.183,65.81-42.473C441.632,459.078,440.662,457.342,439.013,456.578z"})]})]})}const dj={python:sj,javascript:oj,java:uj,cpp:cj},fj={python:{short:"Py",full:"Python"},javascript:{short:"JS",full:"JavaScript"},java:{short:"Java",full:"Java"},cpp:{short:"C++",full:"C++"}};function u({title:o,children:m}){const{selectedLanguage:h,setSelectedLanguage:d}=Xg(),T=H.Children.toArray(m),R=T.findIndex(E=>E.props.language===h),M=R===-1?0:R,D=T[M]?.props.code??"",q=T[M]?.props.language,Y=E=>{d(T[E].props.language)},z=()=>navigator.clipboard.writeText(D),v=()=>T.map((E,V)=>{const G=dj[E.props.language],{short:Z,full:tn}=fj[E.props.language];return r.jsxs("button",{type:"button",role:"tab","aria-label":`${tn} code`,"aria-selected":V===M,className:oo.tabButton,onClick:()=>Y(V),children:[r.jsx(G,{}),r.jsx("span",{children:Z})]},V)});return r.jsxs("div",{className:oo.container,children:[r.jsx("h3",{children:o}),r.jsxs("div",{className:oo.buttonContainer,children:[r.jsx("div",{role:"tablist",className:oo.tabButtonContainer,children:v()}),r.jsx(lj,{onClick:z})]}),r.jsx("div",{role:"tabpanel",className:"tabs-content",children:r.jsx($T,{code:D,language:q})})]})}u.Tab=o=>r.jsx(r.Fragment,{children:o});function El({children:o}){return r.jsx("kbd",{className:A.kbd,"aria-hidden":"true",children:o})}function fd({mode:o,onMode:m}){return r.jsx("div",{className:A.seg,role:"group","aria-label":"View","aria-keyshortcuts":"M",children:["flow","map"].map(h=>r.jsx("button",{type:"button",className:Qn(A.segButton,o===h&&A.segOn),"aria-pressed":o===h,onClick:()=>m(h),children:h==="flow"?"Flow":"Map"},h))})}function Yg({leaf:o}){return r.jsx("a",{className:A.docsLink,href:o.docsUrl,target:"_blank",rel:"noreferrer",children:"Read the docs for this pattern"})}const hj=new Set(Nl.map(o=>o.lc));function Ig({leaf:o}){return r.jsxs("div",{className:A.commonProblems,children:[r.jsxs("h4",{children:["Common problems ",r.jsx("span",{children:"examples, not the full set"})]}),r.jsx("ul",{children:o.problems.map(m=>r.jsxs("li",{children:[r.jsx("a",{href:`https://leetcode.com/problems/${m.slug}/`,target:"_blank",rel:"noreferrer",children:m.name}),m.loose&&r.jsx("span",{className:A.commonProblemsLoose,title:"A looser fit for this pattern",children:"*"}),r.jsxs("span",{className:A.commonProblemsNum,children:["LC ",m.lc,hj.has(m.lc)&&" · Pareto"]})]},m.lc))}),o.problems.some(m=>m.loose)&&r.jsx("p",{className:A.commonProblemsNote,children:"* a looser fit: the pattern works, but most people reach for another one first"})]})}function mj({leaf:o}){const m=LT(o.id);return m.length===0?r.jsxs("div",{className:Qn(A.templates,A.note),children:[r.jsxs("p",{children:[r.jsx("strong",{children:"No template yet"})," for this pattern variant."]}),r.jsx("p",{children:o.summary}),r.jsx(Ig,{leaf:o}),r.jsx(Yg,{leaf:o})]}):r.jsxs("div",{className:A.templates,children:[m.map((h,d)=>r.jsx(u,{title:h.title,children:od.map(T=>r.jsx(u.Tab,{language:T,code:h.code[T]},T))},`${o.id}-${d}`)),r.jsx(Ig,{leaf:o}),r.jsx(Yg,{leaf:o})]})}function gj(o){return o.started?o.leaf?r.jsxs(r.Fragment,{children:["Run complete, ",r.jsx("b",{children:o.leaf.name})]}):r.jsxs(r.Fragment,{children:["Run paused, ",r.jsxs("b",{children:["check ",o.steps.length+1]})]}):r.jsxs(r.Fragment,{children:["No run, ",r.jsx("b",{children:"clock not started"})]})}function HN({run:o,detail:m}){return r.jsxs("header",{className:A.strip,children:[r.jsxs("p",{className:A.stripTitle,children:["Map",r.jsx("span",{className:A.stripValue,children:m})]}),r.jsxs("div",{className:A.stripEnd,children:[r.jsx("span",{className:A.mapStatus,role:"status",children:gj(o)}),r.jsx(fd,{mode:o.mode,onMode:o.setMode})]})]})}const pj=100;function bj(o){const m=H.useRef(0),h=H.useRef(null),[d,T]=H.useState(0),[R,M]=H.useState(!1),D=()=>{const Z=h.current===null?0:performance.now()-h.current;return m.current+Z},q=Z=>Math.floor(Z/1e3)*1e3;H.useEffect(()=>{if(!R)return;const Z=setInterval(()=>{const tn=q(D());T(Sn=>Sn===tn?Sn:tn)},pj);return()=>clearInterval(Z)},[R]);const Y=H.useCallback(()=>{m.current=0,h.current=performance.now(),T(0),M(!0)},[]),z=H.useCallback(()=>{h.current!==null&&(m.current=D(),h.current=null),T(m.current),M(!1)},[]),v=H.useCallback(()=>{h.current===null&&(h.current=performance.now()),T(q(D())),M(!0)},[]),E=H.useCallback(()=>{m.current=0,h.current=null,T(0),M(!1)},[]),V=o-d,G=d>=o;return{elapsedMs:d,remainingMs:V,overtimeMs:G?d-o:0,isOvertime:G,isRunning:R,start:Y,stop:z,resume:v,reset:E}}const Vg=30,vj=10;function yj(o){return o.isContentEditable||["INPUT","TEXTAREA","SELECT","OPTION"].includes(o.tagName)?!0:o.closest('input, textarea, select, [role="listbox"], [role="combobox"]')!==null}const xj=o=>String(o).padStart(2,"0");function _r(o){const m=Math.max(0,o);return`${Math.floor(m/60)}:${xj(m%60)}`}function _j(){const o=bj(Vg*1e3),[m,h]=H.useState(!1),[d,T]=H.useState([]),[R,M]=H.useState(!1),[D,q]=H.useState("flow"),Y=H.useRef(null),z=d.length>0?d[d.length-1].option.next:Ei.rootId,v=m?Ei.leaves[z]:void 0,E=m?Ei.nodes[z]:void 0;H.useEffect(()=>{Y.current?.focus()},[m,z,D]);const V=H.useCallback(()=>{h(!0),o.start()},[o]),G=H.useCallback(vn=>{E&&(T(P=>[...P,{question:E.question,option:vn}]),Ei.leaves[vn.next]&&o.stop())},[E,o]),Z=H.useCallback(vn=>{vn<0||vn>=d.length||(T(d.slice(0,vn)),M(!1),v&&o.resume())},[d,v,o]),tn=H.useCallback(()=>Z(d.length-1),[Z,d.length]),Sn=H.useCallback(()=>M(vn=>!vn),[]),gn=H.useCallback(vn=>{vn!==D&&(q(vn),!(!m||v)&&(vn==="map"?o.stop():o.resume()))},[D,m,v,o]),mn=H.useCallback(()=>gn(D==="flow"?"map":"flow"),[gn,D]),On=H.useCallback(()=>{o.reset(),h(!1),T([]),M(!1)},[o]);H.useEffect(()=>{const vn=P=>{if(P.metaKey||P.ctrlKey||P.altKey)return;const pn=P.target;if(!(pn&&yj(pn))){if(P.key==="m"||P.key==="M")return P.repeat?void 0:mn();if(D==="flow"){if(P.key==="Escape")return On();if(P.key==="Backspace"&&m&&d.length>0)return P.preventDefault(),tn();if(P.key==="Enter"&&!m&&pn?.tagName!=="BUTTON")return V();if((P.key==="t"||P.key==="T")&&v)return Sn();if(/^[1-9]$/.test(P.key)&&E){const re=E.options[Number(P.key)-1];re&&G(re)}}}};return window.addEventListener("keydown",vn),()=>window.removeEventListener("keydown",vn)},[D,m,d.length,E,v,G,tn,On,V,Sn,mn]);const Xn=Math.max(0,Math.ceil(o.remainingMs/1e3));return{budget:Vg,mode:D,setMode:gn,toggleMode:mn,started:m,steps:d,currentId:z,node:E,leaf:v,isOvertime:o.isOvertime,isWarn:!o.isOvertime&&Xn<=vj,elapsedSeconds:Math.floor(o.elapsedMs/1e3),remainingSeconds:Xn,overSeconds:Math.floor(o.overtimeMs/1e3),showTemplate:R,toggleTemplate:Sn,stageRef:Y,start:V,pick:G,backtrack:tn,backtrackTo:Z,reset:On}}const Sj=H.lazy(()=>go(()=>import("./MapView-DJ36MGSo.js"),__vite__mapDeps([2,3,4,5]))),Tj=H.lazy(()=>go(()=>import("./MapOutline-CxYG6cU3.js"),__vite__mapDeps([6,3,4]))),jj={maxWidth:760};function fo({text:o,sign:m,tone:h,caption:d,label:T}){return r.jsxs("div",{className:Qn(A.timer,A[h]),role:"timer","aria-live":"off","aria-label":T,children:[r.jsxs("span",{className:A.cells,"aria-hidden":"true",children:[r.jsx("span",{className:Qn(A.cell,A.signCell),children:m?"+":""}),o.split("").map((R,M)=>R===":"?r.jsx("span",{className:A.colon,children:":"},M):r.jsx("span",{className:A.cell,children:R},M))]}),r.jsx("span",{className:A.timerCaption,"aria-hidden":"true",children:d})]})}function wj({run:o}){if(!o.started){const h=_r(o.budget);return r.jsx(fo,{text:h,sign:!1,tone:"idle",caption:"budget",label:`Budget ${h}`})}if(o.leaf){const h=_r(o.elapsedSeconds);return r.jsx(fo,{text:h,sign:!1,tone:o.isOvertime?"over":"ok",caption:"taken",label:`Time taken ${h}`})}if(o.isOvertime){const h=_r(o.overSeconds);return r.jsx(fo,{text:h,sign:!0,tone:"over",caption:"over budget",label:`${h} over budget`})}const m=_r(o.remainingSeconds);return r.jsx(fo,{text:m,sign:!1,tone:o.isWarn?"warn":"ok",caption:"left",label:`${m} left`})}function Nj({run:o}){const{started:m,steps:h,leaf:d,node:T}=o,R=m&&!d&&!T,M=!d&&!R;return r.jsx("nav",{className:A.line,"aria-label":"Your path so far",children:r.jsxs("ol",{className:A.stops,children:[h.map((D,q)=>r.jsx("li",{className:Qn(A.stop,A.answered),children:r.jsxs("button",{type:"button",className:A.stopButton,title:`${D.question} ${D.option.cue}`,"aria-label":`Back to question ${q+1}: ${D.question} You picked: ${D.option.cue}`,onClick:()=>o.backtrackTo(q),children:[r.jsx("span",{className:A.dot,"aria-hidden":"true"}),r.jsx("span",{className:A.cue,children:D.option.cue})]})},q)),M&&r.jsx("li",{className:Qn(A.stop,A.current,A.dashedNext),"aria-current":"step",children:r.jsxs("span",{className:A.stopInner,children:[r.jsx("span",{className:A.dot,"aria-hidden":"true"}),r.jsx("span",{className:A.srOnly,children:m?`Question ${h.length+1}, current`:"Ready to start"})]})}),d&&r.jsx("li",{className:Qn(A.stop,A.reached),"aria-current":"step",children:r.jsxs("span",{className:A.stopInner,children:[r.jsx("span",{className:A.dot,"aria-hidden":"true"}),r.jsxs("span",{className:A.srOnly,children:["Result: ",d.name]})]})}),M&&r.jsx("li",{className:Qn(A.stop,A.end),"aria-hidden":"true",children:r.jsx("span",{className:A.stopInner,children:r.jsx("span",{className:A.dot})})}),R&&r.jsx("li",{className:Qn(A.stop,A.fault),"aria-current":"step",children:r.jsxs("span",{className:A.stopInner,children:[r.jsx("span",{className:A.dot,"aria-hidden":"true"}),r.jsx("span",{className:A.srOnly,children:"This path leads nowhere"})]})})]})})}function ho({label:o,value:m,run:h}){return r.jsxs("header",{className:A.strip,children:[r.jsxs("p",{className:A.stripTitle,children:[o,r.jsx("span",{className:A.stripValue,children:m})]}),r.jsxs("div",{className:A.stripEnd,children:[r.jsx(fd,{mode:h.mode,onMode:h.setMode}),r.jsx(wj,{run:h})]})]})}function id({run:o}){return r.jsxs("footer",{className:A.footer,children:[o.started&&(o.node||o.leaf)&&r.jsxs("button",{type:"button",className:A.plain,onClick:o.backtrack,disabled:o.steps.length===0,"aria-keyshortcuts":"Backspace",children:["Backtrack ",r.jsx(El,{children:"Bksp"})]}),r.jsxs("button",{type:"button",className:A.plain,onClick:o.reset,"aria-keyshortcuts":"Escape",children:["Reset ",r.jsx(El,{children:"Esc"})]})]})}function Ej({run:o}){return r.jsx("section",{className:Qn(A.card,A.mapFallback),"aria-label":"Map","aria-busy":"true",children:r.jsxs("header",{className:A.strip,children:[r.jsxs("p",{className:A.stripTitle,children:["Map",r.jsx("span",{className:A.stripValue,children:"Loading"})]}),r.jsx("div",{className:A.stripEnd,children:r.jsx(fd,{mode:o.mode,onMode:o.setMode})})]})})}function Oj(){const o=_j(),m=np(jj),h=()=>r.jsxs(r.Fragment,{children:[r.jsx(ho,{run:o,label:"Procedure",value:"Ready"}),r.jsxs("div",{className:A.body,children:[r.jsxs("h2",{ref:o.stageRef,tabIndex:-1,className:A.question,children:["Name the pattern in ",o.budget," seconds"]}),r.jsx("p",{className:A.lead,children:"Open the problem, then pick the cue that sounds most like it. Overtime is shown, not enforced."}),r.jsx("div",{className:A.actions,children:r.jsxs("button",{type:"button",className:A.primary,onClick:o.start,"aria-keyshortcuts":"Enter",children:["Start ",r.jsx(El,{children:"Enter"})]})})]},"idle")]}),d=D=>r.jsxs(r.Fragment,{children:[r.jsx(ho,{run:o,label:"Procedure",value:`Q${o.steps.length+1}`}),r.jsxs("div",{className:A.body,children:[r.jsx("h2",{ref:o.stageRef,tabIndex:-1,className:A.question,children:D.question}),r.jsx("ol",{className:A.options,children:D.options.map((q,Y)=>r.jsx("li",{children:r.jsxs("button",{type:"button",className:A.option,onClick:()=>o.pick(q),"aria-keyshortcuts":Y<9?String(Y+1):void 0,children:[Y<9&&r.jsx(El,{children:Y+1}),r.jsx("span",{className:A.optionCue,children:q.cue})]})},q.cue))})]},D.id),r.jsx(id,{run:o})]}),T=D=>{const q=_r(o.elapsedSeconds);return r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:A.srOnly,role:"status","aria-live":"polite",children:["Pattern found: ",D.name,", ",D.pattern,". Time taken ",q,"."]}),r.jsx(ho,{run:o,label:"Memory item",value:"Result"}),r.jsxs("div",{className:A.body,children:[r.jsx("h2",{ref:o.stageRef,tabIndex:-1,className:A.resultName,children:D.name}),r.jsxs("dl",{className:A.fields,children:[r.jsxs("div",{className:A.field,children:[r.jsx("dt",{children:"Pattern"}),r.jsx("dd",{children:D.pattern})]}),r.jsxs("div",{className:A.field,children:[r.jsx("dt",{children:"Time taken"}),r.jsxs("dd",{children:[r.jsx("span",{className:A.figure,children:q}),o.isOvertime?r.jsxs("span",{className:A.overNote,children:["+",_r(o.overSeconds)," over the ",o.budget,"s budget"]}):r.jsxs("span",{className:A.okNote,children:["within the ",o.budget,"s budget"]})]})]})]}),r.jsx("p",{className:A.summary,children:D.summary}),r.jsx("div",{className:A.actions,children:r.jsxs("button",{type:"button",className:A.primary,"aria-expanded":o.showTemplate,"aria-keyshortcuts":"T",onClick:o.toggleTemplate,children:[o.showTemplate?"Hide template":"View template"," ",r.jsx(El,{children:"T"})]})}),o.showTemplate&&r.jsx(mj,{leaf:D})]},D.id),r.jsx(id,{run:o})]})},R=()=>r.jsxs(r.Fragment,{children:[r.jsx(ho,{run:o,label:"Procedure",value:"Fault"}),r.jsxs("div",{className:A.body,children:[r.jsx("h2",{ref:o.stageRef,tabIndex:-1,className:A.question,children:"This path leads nowhere"}),r.jsx("p",{className:A.lead,children:"The cue you picked has no next check. Reset and run the procedure again."})]},"broken"),r.jsx(id,{run:o})]});let M;return o.started?o.leaf?M=T(o.leaf):o.node?M=d(o.node):M=R():M=h(),o.mode==="map"?r.jsx("div",{className:Qn(A.finder,A.mapMode),children:r.jsx(H.Suspense,{fallback:r.jsx(Ej,{run:o}),children:m?r.jsx(Tj,{run:o}):r.jsx(Sj,{run:o})})}):r.jsxs("div",{className:A.finder,children:[m?r.jsx(Nj,{run:o}):r.jsx(CT,{run:o}),r.jsx("section",{className:A.card,"aria-label":"Procedure",children:M})]})}const Aj="_root_3jvua_1",kj="_h2_3jvua_25",Mj="_h3_3jvua_35",Cj="_lede_3jvua_45",Rj="_origin_3jvua_52",Lj="_srOnly_3jvua_59",Dj="_ext_3jvua_71",zj="_diff_3jvua_83",Bj="_pips_3jvua_96",Uj="_pip_3jvua_96",Hj="_pipOn_3jvua_108",qj="_easy_3jvua_112",Gj="_medium_3jvua_116",Yj="_hard_3jvua_120",Ij="_primary_3jvua_124",Vj="_ghost_3jvua_148",Kj="_a_3jvua_167",Qj="_aHead_3jvua_176",Xj="_aStats_3jvua_181",Jj="_aIndex_3jvua_223",Zj="_aSection_3jvua_249",Pj="_aStrip_3jvua_255",Fj="_aCount_3jvua_280",Wj="_aRows_3jvua_289",$j="_aRow_3jvua_289",n2="_aNum_3jvua_312",e2="_aLc_3jvua_325",t2="_aText_3jvua_349",a2="_aLink_3jvua_355",i2="_aMove_3jvua_366",r2="_band_3jvua_381",l2="_bandList_3jvua_395",s2="_bandItem_3jvua_412",o2="_bandKey_3jvua_434",c2="_bandName_3jvua_448",u2="_bandOn_3jvua_457",Gn={root:Aj,h2:kj,h3:Mj,lede:Cj,origin:Rj,srOnly:Lj,ext:Dj,diff:zj,pips:Bj,pip:Uj,pipOn:Hj,easy:qj,medium:Gj,hard:Yj,primary:Ij,ghost:Vj,a:Kj,aHead:Qj,aStats:Xj,aIndex:Jj,aSection:Zj,aStrip:Pj,aCount:Fj,aRows:Wj,aRow:$j,aNum:n2,aLc:e2,aText:t2,aLink:a2,aMove:i2,band:r2,bandList:l2,bandItem:s2,bandKey:o2,bandName:c2,bandOn:u2},d2="A curated list of LeetCode and data structure/algorithm problems designed around the 80/20 rule, focusing on high-impact topics that deliver 90–95% of the results needed for software engineering coding interviews.",f2="Credit to Aman Manazir for coming up with this list.";function h2(){return r.jsx("svg",{className:Gn.ext,viewBox:"0 0 12 12","aria-hidden":"true",children:r.jsx("path",{d:"M4.5 2.5h5v5M9.5 2.5 3 9"})})}const m2={Easy:1,Medium:2,Hard:3};function g2({d:o,label:m=!0}){return r.jsxs("span",{className:Qn(Gn.diff,Gn[o.toLowerCase()]),children:[r.jsx("span",{className:Gn.pips,"aria-hidden":"true",children:[1,2,3].map(h=>r.jsx("span",{className:Qn(Gn.pip,h<=m2[o]&&Gn.pipOn)},h))}),r.jsx("span",{className:m?Gn.diffLabel:Gn.srOnly,children:o})]})}const rd="1234567890",wl=o=>`pareto-${o}`;function p2(){const[o,m]=H.useState(_a[0].id),h=d=>{const T=window.matchMedia("(prefers-reduced-motion: reduce)").matches;document.getElementById(wl(d))?.scrollIntoView({block:"start",behavior:T?"auto":"smooth"}),m(d)};return H.useEffect(()=>{const d=new Set,T=new IntersectionObserver(R=>{for(const D of R){const q=D.target.id.replace("pareto-","");D.isIntersecting?d.add(q):d.delete(q)}const M=_a.find(D=>d.has(D.id));M&&m(M.id)},{rootMargin:"-25% 0px -65% 0px"});return _a.forEach(R=>{const M=document.getElementById(wl(R.id));M&&T.observe(M)}),()=>T.disconnect()},[]),H.useEffect(()=>{const d=T=>{if(T.target.closest("input, textarea, select, [contenteditable]")||T.metaKey||T.ctrlKey||T.altKey)return;const M=rd.indexOf(T.key);M>=0&&M<_a.length&&h(_a[M].id)};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[]),r.jsx("div",{className:Gn.root,children:r.jsxs("div",{className:Gn.a,children:[r.jsxs("header",{className:Gn.aHead,children:[r.jsx("h2",{className:Gn.h2,children:"The Pareto Set"}),r.jsx("p",{className:Gn.lede,children:d2}),r.jsx("p",{className:Gn.origin,children:f2}),r.jsxs("dl",{className:Gn.aStats,children:[r.jsxs("div",{children:[r.jsx("dt",{children:"Problems"}),r.jsx("dd",{children:so.total})]}),r.jsxs("div",{children:[r.jsx("dt",{children:"Patterns"}),r.jsx("dd",{children:so.patterns})]}),r.jsxs("div",{children:[r.jsx("dt",{children:"Easy"}),r.jsx("dd",{children:so.easy})]}),r.jsxs("div",{children:[r.jsx("dt",{children:"Medium"}),r.jsx("dd",{children:so.medium})]})]})]}),r.jsx("nav",{className:Gn.band,"aria-label":"Patterns",children:r.jsx("ol",{className:Gn.bandList,children:_a.map((d,T)=>r.jsx("li",{children:r.jsxs("button",{type:"button",className:Qn(Gn.bandItem,d.id===o&&Gn.bandOn),"aria-current":d.id===o?"true":void 0,"aria-keyshortcuts":rd[T],onClick:()=>h(d.id),children:[r.jsx("span",{className:Gn.bandKey,children:rd[T]}),r.jsx("span",{className:Gn.bandName,children:d.name})]})},d.id))})}),_a.map(d=>r.jsxs("section",{id:wl(d.id),className:Gn.aSection,"aria-labelledby":`${wl(d.id)}-h`,children:[r.jsxs("div",{className:Gn.aStrip,children:[r.jsx("h3",{id:`${wl(d.id)}-h`,className:Gn.h3,children:d.name}),r.jsx("p",{children:d.why}),r.jsxs("span",{className:Gn.aCount,children:[d.problems.length," problems"]})]}),r.jsx("ol",{className:Gn.aRows,children:d.problems.map(T=>r.jsxs("li",{className:Gn.aRow,children:[r.jsx("span",{className:Gn.aNum,children:T.n}),r.jsxs("span",{className:Gn.aText,children:[r.jsxs("a",{href:zT(T.slug),target:"_blank",rel:"noopener noreferrer",className:Gn.aLink,children:[T.name,r.jsx("span",{className:Gn.srOnly,children:" on LeetCode (opens in a new tab)"})]}),r.jsx("span",{className:Gn.aMove,children:T.ask})]}),r.jsxs("span",{className:Gn.aLc,children:["LC ",T.lc]}),r.jsx(g2,{d:T.difficulty}),r.jsx(h2,{})]},T.slug))})]},d.id))]})})}const b2="_container_1htmy_1",v2="_sectionHeader_1htmy_7",Zn={container:b2,sectionHeader:v2},y2="_container_13ll4_1",x2="_label_13ll4_13",_2="_tableWrapper_13ll4_21",S2="_dataRow_13ll4_30",T2="_red_13ll4_51",j2="_oliveGreen_13ll4_55",w2="_green_13ll4_59",N2="_orange_13ll4_63",E2="_yellow_13ll4_67",O2="_gray_13ll4_71",p={container:y2,label:x2,tableWrapper:_2,dataRow:S2,red:T2,oliveGreen:j2,green:w2,orange:N2,yellow:E2,gray:O2};function A2(){const o={red:"var(--color-red-alpha)",orange:"var(--color-orange-alpha)",yellow:"var(--color-yellow-alpha)",oliveGreen:"var(--color-olive-green-alpha)",green:"var(--color-green-alpha)"};return r.jsx("section",{id:"bigo-chart",children:r.jsxs("div",{className:p.container,children:[r.jsx("h3",{children:"Big-O Complexity Chart"}),r.jsxs("svg",{id:"chart",viewBox:"0 0 800 500",style:{color:"var(--pd-text)"},children:[r.jsx("path",{d:"M50 450 L 50 0 L 800 0 L 800 450 Z",fill:o.red}),r.jsx("path",{d:"M50 450 L 800 0 L 800 450 Z",fill:o.orange}),r.jsx("path",{d:"M50 450 L 800 450 L 800 330 Z",fill:o.yellow}),r.jsx("path",{d:"M50 450 L 800 450 L 800 410 Z",fill:o.oliveGreen}),r.jsx("path",{d:"M50 450 L 800 450 L 800 440 Z",fill:o.green}),r.jsx("path",{d:"M50 0 L 50 450 L 800 450",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),r.jsx("path",{d:"M50 448 L 800 448",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),r.jsx("text",{x:"700",y:"438",fill:"currentColor",children:"O(log n), O(1)"}),r.jsx("path",{d:"M50 450 L 800 400",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),r.jsx("text",{x:"760",y:"390",fill:"currentColor",children:"O(n)"}),r.jsx("path",{d:"M50 450 Q 400 350, 800 150",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),r.jsx("text",{x:"630",y:"190",fill:"currentColor",children:"O(n log n)"}),r.jsx("path",{d:"M50 450 Q 180 380, 250 0",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),r.jsx("text",{x:"260",y:"30",fill:"currentColor",children:"O(n^2)"}),r.jsx("path",{d:"M50 450 C 100 430, 120 350, 120 0",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),r.jsx("text",{x:"125",y:"20",fill:"currentColor",children:"O(2^n)"}),r.jsx("path",{d:"M50 450 C 80 450, 80 350, 80 0",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),r.jsx("text",{x:"80",y:"20",fill:"currentColor",children:"O(n!)"}),r.jsx("text",{className:p.label,x:"0",y:"0",transform:"translate(30 230) rotate(-90)",fill:"currentColor",children:"Operations"}),r.jsx("text",{className:p.label,x:"0",y:"0",transform:"translate(420 470)",fill:"currentColor",children:"Elements"})]})]})})}function k2(){return r.jsx("section",{id:"bigo-data-structure-operations-table",children:r.jsxs("div",{className:p.container,children:[r.jsx("h3",{children:"Data Structure Operations"}),r.jsx("div",{className:p.tableWrapper,children:r.jsx("table",{className:p.table,children:r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("th",{children:"Data Structure"}),r.jsx("th",{colSpan:8,children:"Time Complexity"}),r.jsx("th",{children:"Space Complexity"})]}),r.jsxs("tr",{children:[r.jsx("th",{}),r.jsx("th",{colSpan:4,children:"Average"}),r.jsx("th",{colSpan:4,children:"Worst"}),r.jsx("th",{children:"Worst"})]}),r.jsxs("tr",{children:[r.jsx("th",{}),r.jsx("th",{children:"Access"}),r.jsx("th",{children:"Search"}),r.jsx("th",{children:"Insertion"}),r.jsx("th",{children:"Deletion"}),r.jsx("th",{children:"Access"}),r.jsx("th",{children:"Search"}),r.jsx("th",{children:"Insertion"}),r.jsx("th",{children:"Deletion"}),r.jsx("th",{})]}),r.jsxs("tr",{className:p.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Array_data_structure",target:"_blank",children:"Array"})}),r.jsx("td",{className:p.green,children:"Θ(1)"}),r.jsx("td",{className:p.yellow,children:"Θ(n)"}),r.jsx("td",{className:p.yellow,children:"Θ(n)"}),r.jsx("td",{className:p.yellow,children:"Θ(n)"}),r.jsx("td",{className:p.green,children:"O(1)"}),r.jsx("td",{className:p.yellow,children:"O(n)"}),r.jsx("td",{className:p.yellow,children:"O(n)"}),r.jsx("td",{className:p.yellow,children:"O(n)"}),r.jsx("td",{className:p.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:p.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Stack_(abstract_data_type)",target:"_blank",children:"Stack"})}),r.jsx("td",{className:p.yellow,children:"Θ(n)"}),r.jsx("td",{className:p.yellow,children:"Θ(n)"}),r.jsx("td",{className:p.green,children:"Θ(1)"}),r.jsx("td",{className:p.green,children:"Θ(1)"}),r.jsx("td",{className:p.yellow,children:"O(n)"}),r.jsx("td",{className:p.yellow,children:"O(n)"}),r.jsx("td",{className:p.green,children:"O(1)"}),r.jsx("td",{className:p.green,children:"O(1)"}),r.jsx("td",{className:p.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:p.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Queue_(abstract_data_type)",target:"_blank",children:"Queue"})}),r.jsx("td",{className:p.yellow,children:"Θ(n)"}),r.jsx("td",{className:p.yellow,children:"Θ(n)"}),r.jsx("td",{className:p.green,children:"Θ(1)"}),r.jsx("td",{className:p.green,children:"Θ(1)"}),r.jsx("td",{className:p.yellow,children:"O(n)"}),r.jsx("td",{className:p.yellow,children:"O(n)"}),r.jsx("td",{className:p.green,children:"O(1)"}),r.jsx("td",{className:p.green,children:"O(1)"}),r.jsx("td",{className:p.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:p.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Singly_linked_list#Singly_linked_lists",target:"_blank",children:"Singly-Linked List"})}),r.jsx("td",{className:p.yellow,children:"Θ(n)"}),r.jsx("td",{className:p.yellow,children:"Θ(n)"}),r.jsx("td",{className:p.green,children:"Θ(1)"}),r.jsx("td",{className:p.green,children:"Θ(1)"}),r.jsx("td",{className:p.yellow,children:"O(n)"}),r.jsx("td",{className:p.yellow,children:"O(n)"}),r.jsx("td",{className:p.green,children:"O(1)"}),r.jsx("td",{className:p.green,children:"O(1)"}),r.jsx("td",{className:p.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:p.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Doubly_linked_list",target:"_blank",children:"Doubly-Linked List"})}),r.jsx("td",{className:p.yellow,children:"Θ(n)"}),r.jsx("td",{className:p.yellow,children:"Θ(n)"}),r.jsx("td",{className:p.green,children:"Θ(1)"}),r.jsx("td",{className:p.green,children:"Θ(1)"}),r.jsx("td",{className:p.yellow,children:"O(n)"}),r.jsx("td",{className:p.yellow,children:"O(n)"}),r.jsx("td",{className:p.green,children:"O(1)"}),r.jsx("td",{className:p.green,children:"O(1)"}),r.jsx("td",{className:p.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:p.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Skip_list",target:"_blank",children:"Skip List"})}),r.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:p.yellow,children:"O(n)"}),r.jsx("td",{className:p.yellow,children:"O(n)"}),r.jsx("td",{className:p.yellow,children:"O(n)"}),r.jsx("td",{className:p.yellow,children:"O(n)"}),r.jsx("td",{className:p.orange,children:"O(n log(n))"})]}),r.jsxs("tr",{className:p.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Hash_table",target:"_blank",children:"Hash Table"})}),r.jsx("td",{className:p.gray,children:"N/A"}),r.jsx("td",{className:p.green,children:"Θ(1)"}),r.jsx("td",{className:p.green,children:"Θ(1)"}),r.jsx("td",{className:p.green,children:"Θ(1)"}),r.jsx("td",{className:p.gray,children:"N/A"}),r.jsx("td",{className:p.yellow,children:"O(n)"}),r.jsx("td",{className:p.yellow,children:"O(n)"}),r.jsx("td",{className:p.yellow,children:"O(n)"}),r.jsx("td",{className:p.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:p.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Binary_search_tree",target:"_blank",children:"Binary Search Tree"})}),r.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:p.yellow,children:"O(n)"}),r.jsx("td",{className:p.yellow,children:"O(n)"}),r.jsx("td",{className:p.yellow,children:"O(n)"}),r.jsx("td",{className:p.yellow,children:"O(n)"}),r.jsx("td",{className:p.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:p.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"https://en.wikipedia.org/wiki/Cartesian_tree",target:"_blank",children:"Cartesian Tree"})}),r.jsx("td",{className:p.gray,children:"N/A"}),r.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:p.gray,children:"N/A"}),r.jsx("td",{className:p.yellow,children:"O(n)"}),r.jsx("td",{className:p.yellow,children:"O(n)"}),r.jsx("td",{className:p.yellow,children:"O(n)"}),r.jsx("td",{className:p.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:p.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/B_tree",target:"_blank",children:"B-Tree"})}),r.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:p.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:p.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Red-black_tree",target:"_blank",children:"Red-Black Tree"})}),r.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:p.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:p.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"https://en.wikipedia.org/wiki/Splay_tree",target:"_blank",children:"Splay Tree"})}),r.jsx("td",{className:p.gray,children:"N/A"}),r.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:p.gray,children:"N/A"}),r.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:p.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:p.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/AVL_tree",target:"_blank",children:"AVL Tree"})}),r.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:p.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:p.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/K-d_tree",target:"_blank",children:"KD Tree"})}),r.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:p.yellow,children:"O(n)"}),r.jsx("td",{className:p.yellow,children:"O(n)"}),r.jsx("td",{className:p.yellow,children:"O(n)"}),r.jsx("td",{className:p.yellow,children:"O(n)"}),r.jsx("td",{className:p.yellow,children:"O(n)"})]})]})})})]})})}function M2(){return r.jsx("section",{id:"bigo-sorting-algorithms-table",children:r.jsxs("div",{className:p.container,children:[r.jsx("h3",{children:"Array Sorting Algorithms"}),r.jsx("div",{className:p.tableWrapper,children:r.jsx("table",{children:r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("th",{children:"Algorithm"}),r.jsx("th",{colSpan:3,children:"Time Complexity"}),r.jsx("th",{children:"Space Complexity"})]}),r.jsxs("tr",{children:[r.jsx("th",{}),r.jsx("th",{children:"Best"}),r.jsx("th",{children:"Average"}),r.jsx("th",{children:"Worst"}),r.jsx("th",{children:"Worst"})]}),r.jsxs("tr",{className:p.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Quicksort",target:"_blank",children:"Quicksort"})}),r.jsx("td",{className:p.orange,children:"Ω(n log(n))"}),r.jsx("td",{className:p.orange,children:"Θ(n log(n))"}),r.jsx("td",{className:p.red,children:"O(n^2)"}),r.jsx("td",{className:p.oliveGreen,children:"O(log(n))"})]}),r.jsxs("tr",{className:p.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Merge_sort",target:"_blank",children:"Mergesort"})}),r.jsx("td",{className:p.orange,children:"Ω(n log(n))"}),r.jsx("td",{className:p.orange,children:"Θ(n log(n))"}),r.jsx("td",{className:p.orange,children:"O(n log(n))"}),r.jsx("td",{className:p.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:p.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Timsort",target:"_blank",children:"Timsort"})}),r.jsx("td",{className:p.yellow,children:"Ω(n)"}),r.jsx("td",{className:p.orange,children:"Θ(n log(n))"}),r.jsx("td",{className:p.orange,children:"O(n log(n))"}),r.jsx("td",{className:p.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:p.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Heapsort",target:"_blank",children:"Heapsort"})}),r.jsx("td",{className:p.orange,children:"Ω(n log(n))"}),r.jsx("td",{className:p.orange,children:"Θ(n log(n))"}),r.jsx("td",{className:p.orange,children:"O(n log(n))"}),r.jsx("td",{className:p.green,children:"O(1)"})]}),r.jsxs("tr",{className:p.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Bubble_sort",target:"_blank",children:"Bubble Sort"})}),r.jsx("td",{className:p.yellow,children:"Ω(n)"}),r.jsx("td",{className:p.red,children:"Θ(n^2)"}),r.jsx("td",{className:p.red,children:"O(n^2)"}),r.jsx("td",{className:p.green,children:"O(1)"})]}),r.jsxs("tr",{className:p.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Insertion_sort",target:"_blank",children:"Insertion Sort"})}),r.jsx("td",{className:p.yellow,children:"Ω(n)"}),r.jsx("td",{className:p.red,children:"Θ(n^2)"}),r.jsx("td",{className:p.red,children:"O(n^2)"}),r.jsx("td",{className:p.green,children:"O(1)"})]}),r.jsxs("tr",{className:p.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Selection_sort",target:"_blank",children:"Selection Sort"})}),r.jsx("td",{className:p.red,children:"Ω(n^2)"}),r.jsx("td",{className:p.red,children:"Θ(n^2)"}),r.jsx("td",{className:p.red,children:"O(n^2)"}),r.jsx("td",{className:p.green,children:"O(1)"})]}),r.jsxs("tr",{className:p.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"https://en.wikipedia.org/wiki/Tree_sort",target:"_blank",children:"Tree Sort"})}),r.jsx("td",{className:p.orange,children:"Ω(n log(n))"}),r.jsx("td",{className:p.orange,children:"Θ(n log(n))"}),r.jsx("td",{className:p.red,children:"O(n^2)"}),r.jsx("td",{className:p.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:p.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Shellsort",target:"_blank",children:"Shell Sort"})}),r.jsx("td",{className:p.orange,children:"Ω(n log(n))"}),r.jsx("td",{className:p.red,children:"Θ(n(log(n))^2)"}),r.jsx("td",{className:p.red,children:"O(n(log(n))^2)"}),r.jsx("td",{className:p.green,children:"O(1)"})]}),r.jsxs("tr",{className:p.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Bucket_sort",target:"_blank",children:"Bucket Sort"})}),r.jsx("td",{className:p.green,children:"Ω(n+k)"}),r.jsx("td",{className:p.green,children:"Θ(n+k)"}),r.jsx("td",{className:p.red,children:"O(n^2)"}),r.jsx("td",{className:p.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:p.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Radix_sort",target:"_blank",children:"Radix Sort"})}),r.jsx("td",{className:p.green,children:"Ω(nk)"}),r.jsx("td",{className:p.green,children:"Θ(nk)"}),r.jsx("td",{className:p.green,children:"O(nk)"}),r.jsx("td",{className:p.yellow,children:"O(n+k)"})]}),r.jsxs("tr",{className:p.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"https://en.wikipedia.org/wiki/Counting_sort",children:"Counting Sort"})}),r.jsx("td",{className:p.green,children:"Ω(n+k)"}),r.jsx("td",{className:p.green,children:"Θ(n+k)"}),r.jsx("td",{className:p.green,children:"O(n+k)"}),r.jsx("td",{className:p.yellow,children:"O(k)"})]}),r.jsxs("tr",{className:p.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"https://en.wikipedia.org/wiki/Cubesort",target:"_blank",children:"Cubesort"})}),r.jsx("td",{className:p.yellow,children:"Ω(n)"}),r.jsx("td",{className:p.orange,children:"Θ(n log(n))"}),r.jsx("td",{className:p.orange,children:"O(n log(n))"}),r.jsx("td",{className:p.yellow,children:"O(n)"})]})]})})})]})})}function C2(){return r.jsxs("div",{className:Zn.container,children:[r.jsx("h2",{className:Zn.sectionHeader,children:"Big O"}),r.jsx(A2,{}),r.jsx(k2,{}),r.jsx(M2,{})]})}function R2(){return r.jsxs("div",{className:Zn.container,children:[r.jsx("h2",{className:Zn.sectionHeader,children:"Array"}),r.jsx("section",{id:"array-two-pointers-one-input",children:r.jsxs(u,{title:"two pointers: one input, opposite ends",children:[r.jsx(u.Tab,{code:p1,language:"python"}),r.jsx(u.Tab,{code:b1,language:"javascript"}),r.jsx(u.Tab,{code:v1,language:"java"}),r.jsx(u.Tab,{code:y1,language:"cpp"})]})}),r.jsx("section",{id:"array-two-pointers-two-inputs",children:r.jsxs(u,{title:"two pointers: two inputs, exhaust both",children:[r.jsx(u.Tab,{code:x1,language:"python"}),r.jsx(u.Tab,{code:_1,language:"javascript"}),r.jsx(u.Tab,{code:S1,language:"java"}),r.jsx(u.Tab,{code:T1,language:"cpp"})]})}),r.jsx("section",{id:"array-sliding-window",children:r.jsxs(u,{title:"sliding window",children:[r.jsx(u.Tab,{code:Yv,language:"python"}),r.jsx(u.Tab,{code:Iv,language:"javascript"}),r.jsx(u.Tab,{code:Vv,language:"java"}),r.jsx(u.Tab,{code:Kv,language:"cpp"})]})}),r.jsx("section",{id:"array-prefix-sum",children:r.jsxs(u,{title:"prefix sum",children:[r.jsx(u.Tab,{code:Uv,language:"python"}),r.jsx(u.Tab,{code:Hv,language:"javascript"}),r.jsx(u.Tab,{code:qv,language:"java"}),r.jsx(u.Tab,{code:Gv,language:"cpp"})]})}),r.jsx("section",{id:"array-string-building",children:r.jsxs(u,{title:"efficient string building",children:[r.jsx(u.Tab,{code:n1,language:"python"}),r.jsx(u.Tab,{code:e1,language:"javascript"}),r.jsx(u.Tab,{code:t1,language:"java"}),r.jsx(u.Tab,{code:a1,language:"cpp"})]})})]})}function L2(){return r.jsxs("div",{className:Zn.container,children:[r.jsx("h2",{className:Zn.sectionHeader,children:"Hash Map"}),r.jsx("section",{id:"hashmap-find-number-of-subarrays",children:r.jsxs(u,{title:"find number of subarrays that fit an exact criteria",children:[r.jsx(u.Tab,{code:vv,language:"python"}),r.jsx(u.Tab,{code:yv,language:"javascript"}),r.jsx(u.Tab,{code:xv,language:"java"}),r.jsx(u.Tab,{code:_v,language:"cpp"})]})}),r.jsx("section",{id:"hashmap-sliding-window",children:r.jsxs(u,{title:"sliding window",children:[r.jsx(u.Tab,{code:Sv,language:"python"}),r.jsx(u.Tab,{code:Tv,language:"javascript"}),r.jsx(u.Tab,{code:jv,language:"java"}),r.jsx(u.Tab,{code:wv,language:"cpp"})]})})]})}function D2(){return r.jsxs("div",{className:Zn.container,children:[r.jsx("h2",{className:Zn.sectionHeader,children:"Linked List"}),r.jsx("section",{id:"linkedlist-fast-and-slow-pointer",children:r.jsxs(u,{title:"fast and slow pointer",children:[r.jsx(u.Tab,{code:kv,language:"python"}),r.jsx(u.Tab,{code:Mv,language:"javascript"}),r.jsx(u.Tab,{code:Cv,language:"java"}),r.jsx(u.Tab,{code:Rv,language:"cpp"})]})}),r.jsx("section",{id:"linkedlist-reverse",children:r.jsxs(u,{title:"reverse linked list",children:[r.jsx(u.Tab,{code:Lv,language:"python"}),r.jsx(u.Tab,{code:Dv,language:"javascript"}),r.jsx(u.Tab,{code:zv,language:"java"}),r.jsx(u.Tab,{code:Bv,language:"cpp"})]})})]})}function z2(){return r.jsxs("div",{className:Zn.container,children:[r.jsx("h2",{className:Zn.sectionHeader,children:"Stack"}),r.jsx("section",{id:"stack-monotonic-increasing",children:r.jsxs(u,{title:"monotonic increasing stack",children:[r.jsx(u.Tab,{code:Pv,language:"python"}),r.jsx(u.Tab,{code:Fv,language:"javascript"}),r.jsx(u.Tab,{code:Wv,language:"java"}),r.jsx(u.Tab,{code:$v,language:"cpp"})]})}),r.jsx("section",{id:"stack-monotonic-decreasing",children:r.jsxs(u,{title:"monotonic decreasing stack",children:[r.jsx(u.Tab,{code:Qv,language:"python"}),r.jsx(u.Tab,{code:Xv,language:"javascript"}),r.jsx(u.Tab,{code:Jv,language:"java"}),r.jsx(u.Tab,{code:Zv,language:"cpp"})]})})]})}function B2(){return r.jsxs("div",{className:Zn.container,children:[r.jsx("h2",{className:Zn.sectionHeader,children:"Binary Tree"}),r.jsx("section",{id:"tree-dfs-recursive",children:r.jsxs(u,{title:"DFS (recursive)",children:[r.jsx(u.Tab,{code:f1,language:"python"}),r.jsx(u.Tab,{code:h1,language:"javascript"}),r.jsx(u.Tab,{code:m1,language:"java"}),r.jsx(u.Tab,{code:g1,language:"cpp"})]})}),r.jsx("section",{id:"tree-dfs-iterative",children:r.jsxs(u,{title:"DFS (iterative)",children:[r.jsx(u.Tab,{code:o1,language:"python"}),r.jsx(u.Tab,{code:c1,language:"javascript"}),r.jsx(u.Tab,{code:u1,language:"java"}),r.jsx(u.Tab,{code:d1,language:"cpp"})]})}),r.jsx("section",{id:"tree-bfs",children:r.jsxs(u,{title:"BFS",children:[r.jsx(u.Tab,{code:i1,language:"python"}),r.jsx(u.Tab,{code:r1,language:"javascript"}),r.jsx(u.Tab,{code:l1,language:"java"}),r.jsx(u.Tab,{code:s1,language:"cpp"})]})})]})}function U2(){return r.jsxs("div",{className:Zn.container,children:[r.jsx("h2",{className:Zn.sectionHeader,children:"Graph"}),r.jsx("section",{id:"graph-dfs-recursive",children:r.jsxs(u,{title:"DFS (recursive)",children:[r.jsx(u.Tab,{code:Wb,language:"python"}),r.jsx(u.Tab,{code:$b,language:"javascript"}),r.jsx(u.Tab,{code:nv,language:"java"}),r.jsx(u.Tab,{code:ev,language:"cpp"})]})}),r.jsx("section",{id:"graph-dfs-iterative",children:r.jsxs(u,{title:"DFS (iterative)",children:[r.jsx(u.Tab,{code:Jb,language:"python"}),r.jsx(u.Tab,{code:Zb,language:"javascript"}),r.jsx(u.Tab,{code:Pb,language:"java"}),r.jsx(u.Tab,{code:Fb,language:"cpp"})]})}),r.jsx("section",{id:"graph-bfs",children:r.jsxs(u,{title:"BFS",children:[r.jsx(u.Tab,{code:Vb,language:"python"}),r.jsx(u.Tab,{code:Kb,language:"javascript"}),r.jsx(u.Tab,{code:Qb,language:"java"}),r.jsx(u.Tab,{code:Xb,language:"cpp"})]})}),r.jsx("section",{id:"graph-dijkstra",children:r.jsxs(u,{title:"Dijkstra (shortest path)",children:[r.jsx(u.Tab,{code:tv,language:"python"}),r.jsx(u.Tab,{code:av,language:"javascript"}),r.jsx(u.Tab,{code:iv,language:"java"}),r.jsx(u.Tab,{code:rv,language:"cpp"})]})}),r.jsx("section",{id:"graph-bellman-ford",children:r.jsxs(u,{title:"Bellman-Ford (shortest path)",children:[r.jsx(u.Tab,{code:qb,language:"python"}),r.jsx(u.Tab,{code:Gb,language:"javascript"}),r.jsx(u.Tab,{code:Yb,language:"java"}),r.jsx(u.Tab,{code:Ib,language:"cpp"})]})}),r.jsx("section",{id:"graph-kahn",children:r.jsxs(u,{title:"Kahn (topological sort)",children:[r.jsx(u.Tab,{code:lv,language:"python"}),r.jsx(u.Tab,{code:sv,language:"javascript"}),r.jsx(u.Tab,{code:ov,language:"java"}),r.jsx(u.Tab,{code:cv,language:"cpp"})]})}),r.jsx("section",{id:"graph-kruskal",children:r.jsxs(u,{title:"Kruskal (mst)",children:[r.jsx(u.Tab,{code:uv,language:"python"}),r.jsx(u.Tab,{code:dv,language:"javascript"}),r.jsx(u.Tab,{code:fv,language:"java"}),r.jsx(u.Tab,{code:hv,language:"cpp"})]})}),r.jsx("section",{id:"graph-prim",children:r.jsxs(u,{title:"Prim (mst)",children:[r.jsx(u.Tab,{code:mv,language:"python"}),r.jsx(u.Tab,{code:gv,language:"javascript"}),r.jsx(u.Tab,{code:pv,language:"java"}),r.jsx(u.Tab,{code:bv,language:"cpp"})]})})]})}function H2(){return r.jsxs("div",{className:Zn.container,children:[r.jsx("h2",{className:Zn.sectionHeader,children:"Heap"}),r.jsx("section",{id:"heap-find-top-k-elements",children:r.jsxs(u,{title:"find top k elements",children:[r.jsx(u.Tab,{code:Nv,language:"python"}),r.jsx(u.Tab,{code:Ev,language:"javascript"}),r.jsx(u.Tab,{code:Ov,language:"java"}),r.jsx(u.Tab,{code:Av,language:"cpp"})]})})]})}function q2(){return r.jsxs("div",{className:Zn.container,children:[r.jsx("h2",{className:Zn.sectionHeader,children:"Binary Search"}),r.jsx("section",{id:"binarysearch-binary-search",children:r.jsxs(u,{title:"binary search",children:[r.jsx(u.Tab,{code:lp,language:"python"}),r.jsx(u.Tab,{code:sp,language:"javascript"}),r.jsx(u.Tab,{code:op,language:"java"}),r.jsx(u.Tab,{code:cp,language:"cpp"})]})}),r.jsx("section",{id:"binarysearch-duplicate-elements-left-insertion",children:r.jsxs(u,{title:"duplicate elements, left-most insertion point",children:[r.jsx(u.Tab,{code:vp,language:"python"}),r.jsx(u.Tab,{code:yp,language:"javascript"}),r.jsx(u.Tab,{code:xp,language:"java"}),r.jsx(u.Tab,{code:_p,language:"cpp"})]})}),r.jsx("section",{id:"binarysearch-duplicate-elements-right-insertion",children:r.jsxs(u,{title:"duplicate elements, right-most insertion point",children:[r.jsx(u.Tab,{code:Sp,language:"python"}),r.jsx(u.Tab,{code:Tp,language:"javascript"}),r.jsx(u.Tab,{code:jp,language:"java"}),r.jsx(u.Tab,{code:wp,language:"cpp"})]})}),r.jsx("section",{id:"binarysearch-greedy-minimum",children:r.jsxs(u,{title:"greedy (minimum)",children:[r.jsx(u.Tab,{code:mp,language:"python"}),r.jsx(u.Tab,{code:gp,language:"javascript"}),r.jsx(u.Tab,{code:pp,language:"java"}),r.jsx(u.Tab,{code:bp,language:"cpp"})]})}),r.jsx("section",{id:"binarysearch-greedy-maximum",children:r.jsxs(u,{title:"greedy (maximum)",children:[r.jsx(u.Tab,{code:up,language:"python"}),r.jsx(u.Tab,{code:dp,language:"javascript"}),r.jsx(u.Tab,{code:fp,language:"java"}),r.jsx(u.Tab,{code:hp,language:"cpp"})]})})]})}function G2(){return r.jsxs("div",{className:Zn.container,children:[r.jsx("h2",{className:Zn.sectionHeader,children:"Backtracking"}),r.jsx("section",{id:"backtracking-backtracking",children:r.jsxs(u,{title:"backtracking",children:[r.jsx(u.Tab,{code:tp,language:"python"}),r.jsx(u.Tab,{code:ap,language:"javascript"}),r.jsx(u.Tab,{code:ip,language:"java"}),r.jsx(u.Tab,{code:rp,language:"cpp"})]})})]})}function Y2(){return r.jsxs("div",{className:Zn.container,children:[r.jsx("h2",{className:Zn.sectionHeader,children:"Dynamic Programming"}),r.jsx("section",{id:"dp-top-down",children:r.jsxs(u,{title:"DP top-down",children:[r.jsx(u.Tab,{code:xb,language:"python"}),r.jsx(u.Tab,{code:_b,language:"javascript"}),r.jsx(u.Tab,{code:Sb,language:"java"}),r.jsx(u.Tab,{code:Tb,language:"cpp"})]})}),r.jsx("section",{id:"dp-bottom-up",children:r.jsxs(u,{title:"DP bottom-up",children:[r.jsx(u.Tab,{code:fb,language:"python"}),r.jsx(u.Tab,{code:hb,language:"javascript"}),r.jsx(u.Tab,{code:mb,language:"java"}),r.jsx(u.Tab,{code:gb,language:"cpp"})]})}),r.jsx("section",{id:"dp-kadane",children:r.jsxs(u,{title:"Kadane (max-sum subarray)",children:[r.jsx(u.Tab,{code:pb,language:"python"}),r.jsx(u.Tab,{code:bb,language:"javascript"}),r.jsx(u.Tab,{code:vb,language:"java"}),r.jsx(u.Tab,{code:yb,language:"cpp"})]})})]})}function I2(){return r.jsxs("div",{className:Zn.container,children:[r.jsx("h2",{className:Zn.sectionHeader,children:"Bit Manipulation"}),r.jsx("section",{id:"bitmanipulation-test-kth-bit",children:r.jsxs(u,{title:"test kth-bit",children:[r.jsx(u.Tab,{code:ib,language:"python"}),r.jsx(u.Tab,{code:rb,language:"javascript"}),r.jsx(u.Tab,{code:lb,language:"java"}),r.jsx(u.Tab,{code:sb,language:"cpp"})]})}),r.jsx("section",{id:"bitmanipulation-set-kth-bit",children:r.jsxs(u,{title:"set kth bit",children:[r.jsx(u.Tab,{code:Pp,language:"python"}),r.jsx(u.Tab,{code:Fp,language:"javascript"}),r.jsx(u.Tab,{code:Wp,language:"java"}),r.jsx(u.Tab,{code:$p,language:"cpp"})]})}),r.jsx("section",{id:"bitmanipulation-clear-kth-bit",children:r.jsxs(u,{title:"clear kth bit",children:[r.jsx(u.Tab,{code:kp,language:"python"}),r.jsx(u.Tab,{code:Mp,language:"javascript"}),r.jsx(u.Tab,{code:Cp,language:"java"}),r.jsx(u.Tab,{code:Rp,language:"cpp"})]})}),r.jsx("section",{id:"bitmanipulation-toggle-kth-bit",children:r.jsxs(u,{title:"toggle kth bit",children:[r.jsx(u.Tab,{code:ob,language:"python"}),r.jsx(u.Tab,{code:cb,language:"javascript"}),r.jsx(u.Tab,{code:ub,language:"java"}),r.jsx(u.Tab,{code:db,language:"cpp"})]})}),r.jsx("section",{id:"bitmanipulation-get-rightmost-bit",children:r.jsxs(u,{title:"get rightmost bit",children:[r.jsx(u.Tab,{code:Yp,language:"python"}),r.jsx(u.Tab,{code:Ip,language:"javascript"}),r.jsx(u.Tab,{code:Vp,language:"java"}),r.jsx(u.Tab,{code:Kp,language:"cpp"})]})}),r.jsx("section",{id:"bitmanipulation-count-set-bits",children:r.jsxs(u,{title:"count set bits",children:[r.jsx(u.Tab,{code:Lp,language:"python"}),r.jsx(u.Tab,{code:Dp,language:"javascript"}),r.jsx(u.Tab,{code:zp,language:"java"}),r.jsx(u.Tab,{code:Bp,language:"cpp"})]})}),r.jsx("section",{id:"bitmanipulation-multiply-power-of-two",children:r.jsxs(u,{title:"multiply by 2^k",children:[r.jsx(u.Tab,{code:Qp,language:"python"}),r.jsx(u.Tab,{code:Xp,language:"javascript"}),r.jsx(u.Tab,{code:Jp,language:"java"}),r.jsx(u.Tab,{code:Zp,language:"cpp"})]})}),r.jsx("section",{id:"bitmanipulation-divide-power-of-two",children:r.jsxs(u,{title:"divide by 2^k",children:[r.jsx(u.Tab,{code:Up,language:"python"}),r.jsx(u.Tab,{code:Hp,language:"javascript"}),r.jsx(u.Tab,{code:qp,language:"java"}),r.jsx(u.Tab,{code:Gp,language:"cpp"})]})}),r.jsx("section",{id:"bitmanipulation-check-power-of-two",children:r.jsxs(u,{title:"check if number is power of 2",children:[r.jsx(u.Tab,{code:Np,language:"python"}),r.jsx(u.Tab,{code:Ep,language:"javascript"}),r.jsx(u.Tab,{code:Op,language:"java"}),r.jsx(u.Tab,{code:Ap,language:"cpp"})]})}),r.jsx("section",{id:"bitmanipulation-swap-variables",children:r.jsxs(u,{title:"swap two variables",children:[r.jsx(u.Tab,{code:nb,language:"python"}),r.jsx(u.Tab,{code:eb,language:"javascript"}),r.jsx(u.Tab,{code:tb,language:"java"}),r.jsx(u.Tab,{code:ab,language:"cpp"})]})})]})}const V2=`def fn(matrix: list[list[int]]):
    r = len(matrix)
    c = len(matrix[0])

    create_matrix = [[0 for _ in range(c)] for _ in range(r)]
    copy_matrix = [row[:] for row in matrix]
`,K2=`def fn(matrix: list[list[int]]):
    r = len(matrix)
    c = len(matrix[0])

    main_diagonal = [matrix[i][i] for i in range(min(r, c))]
    anti_diagonal = [matrix[i][~i] for i in range(min(r, c))]
`,Q2=`def fn(matrix: list[list[int]]):
    r = len(matrix)
    c = len(matrix[0])

    transpose_tuple = zip(*matrix)
    transpose = [list(row) for row in transpose_tuple]
    rotate_left = transpose[::-1]
    rotate_right = [row[::-1] for row in transpose]
`,X2=`const fn = (matrix) => {
    const r = matrix.length;
    const c = matrix[0].length;

    const createMatrix = Array.from({ length: r }, () => Array(c).fill(0))
    const copyMatrix = matrix.map(row => [...row])
}
`,J2=`const fn = (matrix) => {
    const r = matrix.length
    const c = matrix[0].length

    const mainDiagonal = Array.from({ length: Math.min(r, c) }, (_, i) => matrix[i][i])
    const antiDiagonal = Array.from({ length: Math.min(r, c) }, (_, i) => matrix[i][~i])
}
`,Z2=`const fn = (matrix) => {
    const r = matrix.length
    const c = matrix[0].length

    const transposeTuple = matrix[0].map((_, i) => matrix.map(row => row[i]))
    const transpose = transposeTuple.map(row => [...row])
    const rotateLeft = transpose.reverse()
    const rotateRight = transpose.map(row => row.reverse())
}
`,P2=`import java.util.ArrayList;
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
`,F2=`import java.util.ArrayList;
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
`,W2=`import java.util.ArrayList;
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
`,$2=`#include <vector>

using namespace std;


void fn(vector<vector<int>>& matrix) {
    int r = matrix.size();
    int c = matrix[0].size();

    vector<vector<int>> create_matrix(r, vector<int>(c, 0));
    vector<vector<int>> copy_matrix(matrix);
}
`,nw=`#include <vector>

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
`,ew=`#include <vector>

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
`;function tw(){return r.jsxs("div",{className:Zn.container,children:[r.jsx("h2",{className:Zn.sectionHeader,children:"Matrix"}),r.jsx("section",{id:"matrix-create-copy",children:r.jsxs(u,{title:"create / copy",children:[r.jsx(u.Tab,{code:V2,language:"python"}),r.jsx(u.Tab,{code:X2,language:"javascript"}),r.jsx(u.Tab,{code:P2,language:"java"}),r.jsx(u.Tab,{code:$2,language:"cpp"})]})}),r.jsx("section",{id:"matrix-diagonals",children:r.jsxs(u,{title:"diagonals / anti-diagonals",children:[r.jsx(u.Tab,{code:K2,language:"python"}),r.jsx(u.Tab,{code:J2,language:"javascript"}),r.jsx(u.Tab,{code:F2,language:"java"}),r.jsx(u.Tab,{code:nw,language:"cpp"})]})}),r.jsx("section",{id:"matrix-rotate-transpose",children:r.jsxs(u,{title:"rotate / transpose",children:[r.jsx(u.Tab,{code:Q2,language:"python"}),r.jsx(u.Tab,{code:Z2,language:"javascript"}),r.jsx(u.Tab,{code:W2,language:"java"}),r.jsx(u.Tab,{code:ew,language:"cpp"})]})})]})}const aw=`from typing import Any


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
`,iw=`from typing import Any


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
`,rw=`from typing import Any


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
`,lw=`from typing import Any


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
`,sw=`from typing import Any


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
`,ow=`class Graph:
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
`,cw=`class Array {
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
`,uw=`class TreeNode {
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
`,dw=`class TreeNode {
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
`,fw=`class ListNode {
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
`,hw=`class ListNode {
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
`,mw=`class Graph {
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
`,gw=`public class Array<T> {
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
`,pw=`public class TreeNode<T> {
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
`,bw=`public class TreeNode<T extends Comparable<T>> {
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
`,vw=`class ListNode {
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
`,yw=`public class ListNode<T> {
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
`,xw=`import java.util.ArrayList;
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
`,_w=`#include <iostream>
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
`,Sw=`#include <iostream>
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
`,Tw=`#include <iostream>
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
`,jw=`#include <iostream>

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
`,ww=`#include <iostream>
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
`,Nw=`#include <iostream>
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
`;function Ew(){return r.jsxs("div",{className:Zn.container,children:[r.jsx("h2",{className:Zn.sectionHeader,children:"Data Structures"}),r.jsx("section",{id:"ds-array",children:r.jsxs(u,{title:"array",children:[r.jsx(u.Tab,{code:aw,language:"python"}),r.jsx(u.Tab,{code:cw,language:"javascript"}),r.jsx(u.Tab,{code:gw,language:"java"}),r.jsx(u.Tab,{code:_w,language:"cpp"})]})}),r.jsx("section",{id:"ds-hash-map",children:r.jsxs(u,{title:"hash map",children:[r.jsx(u.Tab,{code:jb,language:"python"}),r.jsx(u.Tab,{code:wb,language:"javascript"}),r.jsx(u.Tab,{code:Nb,language:"java"}),r.jsx(u.Tab,{code:Eb,language:"cpp"})]})}),r.jsx("section",{id:"ds-linked-list",children:r.jsxs(u,{title:"linked list",children:[r.jsx(u.Tab,{code:lw,language:"python"}),r.jsx(u.Tab,{code:fw,language:"javascript"}),r.jsx(u.Tab,{code:vw,language:"java"}),r.jsx(u.Tab,{code:jw,language:"cpp"})]})}),r.jsx("section",{id:"ds-doubly-linked-list",children:r.jsxs(u,{title:"doubly linked list",children:[r.jsx(u.Tab,{code:sw,language:"python"}),r.jsx(u.Tab,{code:hw,language:"javascript"}),r.jsx(u.Tab,{code:yw,language:"java"}),r.jsx(u.Tab,{code:ww,language:"cpp"})]})}),r.jsx("section",{id:"ds-binary-tree",children:r.jsxs(u,{title:"binary tree",children:[r.jsx(u.Tab,{code:iw,language:"python"}),r.jsx(u.Tab,{code:uw,language:"javascript"}),r.jsx(u.Tab,{code:pw,language:"java"}),r.jsx(u.Tab,{code:Sw,language:"cpp"})]})}),r.jsx("section",{id:"ds-binary-search-tree",children:r.jsxs(u,{title:"binary search tree",children:[r.jsx(u.Tab,{code:rw,language:"python"}),r.jsx(u.Tab,{code:dw,language:"javascript"}),r.jsx(u.Tab,{code:bw,language:"java"}),r.jsx(u.Tab,{code:Tw,language:"cpp"})]})}),r.jsx("section",{id:"ds-graph",children:r.jsxs(u,{title:"graph",children:[r.jsx(u.Tab,{code:ow,language:"python"}),r.jsx(u.Tab,{code:mw,language:"javascript"}),r.jsx(u.Tab,{code:xw,language:"java"}),r.jsx(u.Tab,{code:Nw,language:"cpp"})]})}),r.jsx("section",{id:"ds-union-find",children:r.jsxs(u,{title:"union find",children:[r.jsx(u.Tab,{code:Cb,language:"python"}),r.jsx(u.Tab,{code:Rb,language:"javascript"}),r.jsx(u.Tab,{code:Lb,language:"java"}),r.jsx(u.Tab,{code:Db,language:"cpp"})]})}),r.jsx("section",{id:"ds-union-find-optimized",children:r.jsxs(u,{title:"union find optimized",children:[r.jsx(u.Tab,{code:zb,language:"python"}),r.jsx(u.Tab,{code:Bb,language:"javascript"}),r.jsx(u.Tab,{code:Ub,language:"java"}),r.jsx(u.Tab,{code:Hb,language:"cpp"})]})}),r.jsx("section",{id:"ds-trie",children:r.jsxs(u,{title:"trie",children:[r.jsx(u.Tab,{code:Ob,language:"python"}),r.jsx(u.Tab,{code:Ab,language:"javascript"}),r.jsx(u.Tab,{code:kb,language:"java"}),r.jsx(u.Tab,{code:Mb,language:"cpp"})]})})]})}const Ow=`import random


def bogo_sort(arr: list) -> None:
    target = sorted(arr)

    while arr != target:
        random.shuffle(arr)
`,Aw=`def bubble_sort(arr: list) -> None:
    n = len(arr)

    for i in range(n):
        swapped = False

        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True

        if not swapped:
            break
`,kw=`def bucket_sort(arr: list) -> list:
    num_buckets = 10
    min_num = min(arr)
    max_num = max(arr)
    bucket_size = (max_num - min_num) / num_buckets
    buckets = [[] for _ in range(num_buckets)]

    for num in arr:
        index = min(int((num - min_num) / bucket_size), num_buckets - 1)
        buckets[index].append(num)

    return [num for bucket in buckets for num in sorted(bucket)]
`,Mw=`def counting_sort(arr: list) -> list:
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
`,Cw=`def cube_sort(arr: list, processors: int) -> None:
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
`,Rw=`def heap_sort(arr: list) -> list:
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
`,Lw=`def insertion_sort(arr: list) -> None:
    n = len(arr)

    for i in range(1, n):
        key = arr[i]

        while i > 0 and key < arr[i - 1]:
            arr[i] = arr[i - 1]
            i -= 1

        arr[i] = key
`,Dw=`def merge_sort(arr: list) -> list:
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
`,zw=`def pancake_sort(arr: list) -> None:
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
`,Bw=`def quick_sort(arr: list) -> list:
    n = len(arr)

    if n <= 1:
        return arr

    pivot = arr[n // 2]
    left = [x for x in arr if x < pivot]
    right = [x for x in arr if x > pivot]

    return quick_sort(left) + [pivot] + quick_sort(right)
`,Uw=`def radix_sort(arr: list) -> None:
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
`,Hw=`def selection_sort(arr: list) -> None:
    n = len(arr)

    for i in range(n):
        min_i = i

        for j in range(i + 1, n):
            if arr[j] < arr[min_i]:
                min_i = j

        if min_i != i:
            arr[i], arr[min_i] = arr[min_i], arr[i]
`,qw=`def shell_sort(arr: list) -> None:
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
`,Gw=`from threading import Thread
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
`,Yw=`def tim_sort(arr: list) -> list:
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
`,Iw=`const bogoSort = (arr) => {
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
`,Vw=`const bubbleSort = (arr) => {
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
`,Kw=`const bucketSort = (arr) => {
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
`,Qw=`const countingSort = (arr) => {
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
`,Xw=`const cubeSort = (arr, processors) => {
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
`,Jw=`const heapSort = (arr) => {
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
`,Zw=`const insertionSort = (arr) => {
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
`,Pw=`const mergeSort = (arr) => {
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
`,Fw=`const pancakeSort = (arr) => {
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
`,Ww=`const quickSort = (arr) => {
    const n = arr.length

    if (n <= 1) {
        return arr
    }

    const pivot = arr[Math.floor(n / 2)]
    const left = arr.filter(x => x < pivot)
    const right = arr.filter(x => x > pivot)

    return [...quickSort(left), pivot, ...quickSort(right)]
}
`,$w=`const radixSort = (arr) => {
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
`,nN=`const selectionSort = (arr) => {
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
`,eN=`const shellSort = (arr) => {
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
`,tN=`const sleepSort = (arr) => {
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
`,aN=`const timSort = (arr) => {
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
`,iN=`import java.util.Arrays;
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
`,rN=`public static void bubbleSort(int[] arr) {
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
`,lN=`import java.util.ArrayList;
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
`,sN=`import java.util.Arrays;


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
`,oN=`import java.util.ArrayList;
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
`,cN=`public static int[] heapSort(int[] arr) {
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
`,uN=`public static void insertionSort(int[] arr) {
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
`,dN=`import java.util.Arrays;


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
`,fN=`public static void pancakeSort(int[] arr) {
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
`,hN=`import java.util.ArrayList;
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
`,mN=`import java.util.Arrays;


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
`,gN=`public static void selectionSort(int[] arr) {
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
`,pN=`public static void shellSort(int[] arr) {
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
`,bN=`import java.util.ArrayList;
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
`,vN=`public static int[] timSort(int[] arr) {
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
`,yN=`#include <algorithm>
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
`,xN=`#include <vector>

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
`,_N=`#include <vector>
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
`,SN=`#include <vector>
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
`,TN=`#include <vector>
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
`,jN=`#include <vector>

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
`,wN=`#include <vector>

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
`,NN=`#include <vector>

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
`,EN=`#include <vector>

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
`,ON=`#include <vector>

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
`,AN=`#include <vector>

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
`,kN=`#include <vector>

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
`,MN=`#include <vector>

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
`,CN=`#include <chrono>
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
`,RN=`#include <vector>
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
`;function LN(){return r.jsxs("div",{className:Zn.container,children:[r.jsx("h2",{className:Zn.sectionHeader,children:"Sorting Algorithms"}),r.jsx("section",{id:"sort-bubble",children:r.jsxs(u,{title:"bubble sort",children:[r.jsx(u.Tab,{code:Aw,language:"python"}),r.jsx(u.Tab,{code:Vw,language:"javascript"}),r.jsx(u.Tab,{code:rN,language:"java"}),r.jsx(u.Tab,{code:xN,language:"cpp"})]})}),r.jsx("section",{id:"sort-selection",children:r.jsxs(u,{title:"selection sort",children:[r.jsx(u.Tab,{code:Hw,language:"python"}),r.jsx(u.Tab,{code:nN,language:"javascript"}),r.jsx(u.Tab,{code:gN,language:"java"}),r.jsx(u.Tab,{code:kN,language:"cpp"})]})}),r.jsx("section",{id:"sort-insertion",children:r.jsxs(u,{title:"insertion sort",children:[r.jsx(u.Tab,{code:Lw,language:"python"}),r.jsx(u.Tab,{code:Zw,language:"javascript"}),r.jsx(u.Tab,{code:uN,language:"java"}),r.jsx(u.Tab,{code:wN,language:"cpp"})]})}),r.jsx("section",{id:"sort-shell",children:r.jsxs(u,{title:"shell sort",children:[r.jsx(u.Tab,{code:qw,language:"python"}),r.jsx(u.Tab,{code:eN,language:"javascript"}),r.jsx(u.Tab,{code:pN,language:"java"}),r.jsx(u.Tab,{code:MN,language:"cpp"})]})}),r.jsx("section",{id:"sort-merge",children:r.jsxs(u,{title:"merge sort",children:[r.jsx(u.Tab,{code:Dw,language:"python"}),r.jsx(u.Tab,{code:Pw,language:"javascript"}),r.jsx(u.Tab,{code:dN,language:"java"}),r.jsx(u.Tab,{code:NN,language:"cpp"})]})}),r.jsx("section",{id:"sort-quick",children:r.jsxs(u,{title:"quick sort",children:[r.jsx(u.Tab,{code:Bw,language:"python"}),r.jsx(u.Tab,{code:Ww,language:"javascript"}),r.jsx(u.Tab,{code:hN,language:"java"}),r.jsx(u.Tab,{code:ON,language:"cpp"})]})}),r.jsx("section",{id:"sort-tim",children:r.jsxs(u,{title:"timsort",children:[r.jsx(u.Tab,{code:Yw,language:"python"}),r.jsx(u.Tab,{code:aN,language:"javascript"}),r.jsx(u.Tab,{code:vN,language:"java"}),r.jsx(u.Tab,{code:RN,language:"cpp"})]})}),r.jsx("section",{id:"sort-heap",children:r.jsxs(u,{title:"heap sort",children:[r.jsx(u.Tab,{code:Rw,language:"python"}),r.jsx(u.Tab,{code:Jw,language:"javascript"}),r.jsx(u.Tab,{code:cN,language:"java"}),r.jsx(u.Tab,{code:jN,language:"cpp"})]})}),r.jsx("section",{id:"sort-counting",children:r.jsxs(u,{title:"counting sort",children:[r.jsx(u.Tab,{code:Mw,language:"python"}),r.jsx(u.Tab,{code:Qw,language:"javascript"}),r.jsx(u.Tab,{code:sN,language:"java"}),r.jsx(u.Tab,{code:SN,language:"cpp"})]})}),r.jsx("section",{id:"sort-bucket",children:r.jsxs(u,{title:"bucket sort",children:[r.jsx(u.Tab,{code:kw,language:"python"}),r.jsx(u.Tab,{code:Kw,language:"javascript"}),r.jsx(u.Tab,{code:lN,language:"java"}),r.jsx(u.Tab,{code:_N,language:"cpp"})]})}),r.jsx("section",{id:"sort-radix",children:r.jsxs(u,{title:"radix sort",children:[r.jsx(u.Tab,{code:Uw,language:"python"}),r.jsx(u.Tab,{code:$w,language:"javascript"}),r.jsx(u.Tab,{code:mN,language:"java"}),r.jsx(u.Tab,{code:AN,language:"cpp"})]})}),r.jsx("section",{id:"sort-cube",children:r.jsxs(u,{title:"cubesort",children:[r.jsx(u.Tab,{code:Cw,language:"python"}),r.jsx(u.Tab,{code:Xw,language:"javascript"}),r.jsx(u.Tab,{code:oN,language:"java"}),r.jsx(u.Tab,{code:TN,language:"cpp"})]})}),r.jsx("section",{id:"sort-bogo",children:r.jsxs(u,{title:"bogo sort",children:[r.jsx(u.Tab,{code:Ow,language:"python"}),r.jsx(u.Tab,{code:Iw,language:"javascript"}),r.jsx(u.Tab,{code:iN,language:"java"}),r.jsx(u.Tab,{code:yN,language:"cpp"})]})}),r.jsx("section",{id:"sort-pancake",children:r.jsxs(u,{title:"pancake sort",children:[r.jsx(u.Tab,{code:zw,language:"python"}),r.jsx(u.Tab,{code:Fw,language:"javascript"}),r.jsx(u.Tab,{code:fN,language:"java"}),r.jsx(u.Tab,{code:EN,language:"cpp"})]})}),r.jsx("section",{id:"sort-sleep",children:r.jsxs(u,{title:"sleep sort",children:[r.jsx(u.Tab,{code:Gw,language:"python"}),r.jsx(u.Tab,{code:tN,language:"javascript"}),r.jsx(u.Tab,{code:bN,language:"java"}),r.jsx(u.Tab,{code:CN,language:"cpp"})]})})]})}function DN(){const{isSidebarOpen:o}=cd(),{view:m}=po(),h=Qn(Bg.main,(!o||m!=="cheatsheet")&&Bg.sidebarHidden);return r.jsx("main",{className:h,children:m==="finder"?r.jsx(Oj,{}):m==="pareto"?r.jsx(p2,{}):zN()})}function zN(){return r.jsxs(r.Fragment,{children:[r.jsx(C2,{}),r.jsx(R2,{}),r.jsx(L2,{}),r.jsx(D2,{}),r.jsx(z2,{}),r.jsx(B2,{}),r.jsx(U2,{}),r.jsx(H2,{}),r.jsx(q2,{}),r.jsx(G2,{}),r.jsx(Y2,{}),r.jsx(I2,{}),r.jsx(tw,{}),r.jsx(Ew,{}),r.jsx(LN,{})]})}function BN(){return r.jsx(mo.StrictMode,{children:r.jsx(vx,{children:r.jsx(bx,{children:r.jsx(yx,{children:r.jsxs("div",{className:"App",children:[r.jsx(tS,{}),r.jsx(DN,{})]})})})})})}gx.createRoot(document.getElementById("root")).render(r.jsx(BN,{}));export{El as K,HN as M,mo as R,mj as T,H as a,Qn as c,LT as g,r as j,sd as r,Ei as t};
