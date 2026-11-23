const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/400-B5WfoJxY.css","assets/700-Bwqbt05G.css","assets/MapView-Cdwd6iiR.js","assets/path-DPVt66OR.js","assets/path-YF1ekw5y.css","assets/MapView-acdOEaeK.css","assets/MapOutline-CCiztUrZ.js","assets/Cheatsheet-Csk_kOkX.js","assets/Cheatsheet-CWUDfl2-.css"])))=>i.map(i=>d[i]);
(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const E of document.querySelectorAll('link[rel="modulepreload"]'))c(E);new MutationObserver(E=>{for(const A of E)if(A.type==="childList")for(const k of A.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&c(k)}).observe(document,{childList:!0,subtree:!0});function f(E){const A={};return E.integrity&&(A.integrity=E.integrity),E.referrerPolicy&&(A.referrerPolicy=E.referrerPolicy),E.crossOrigin==="use-credentials"?A.credentials="include":E.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function c(E){if(E.ep)return;E.ep=!0;const A=f(E);fetch(E.href,A)}})();function _l(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var qc={exports:{}},_r={};var fp;function z0(){if(fp)return _r;fp=1;var s=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function f(c,E,A){var k=null;if(A!==void 0&&(k=""+A),E.key!==void 0&&(k=""+E.key),"key"in E){A={};for(var j in E)j!=="key"&&(A[j]=E[j])}else A=E;return E=A.ref,{$$typeof:s,type:c,key:k,ref:E!==void 0?E:null,props:A}}return _r.Fragment=d,_r.jsx=f,_r.jsxs=f,_r}var dp;function B0(){return dp||(dp=1,qc.exports=z0()),qc.exports}var o=B0(),Hc={exports:{}},Sr={},Yc={exports:{}},Gc={};var hp;function L0(){return hp||(hp=1,(function(s){function d(G,re){var Z=G.length;G.push(re);e:for(;0<Z;){var Ae=Z-1>>>1,_e=G[Ae];if(0<E(_e,re))G[Ae]=re,G[Z]=_e,Z=Ae;else break e}}function f(G){return G.length===0?null:G[0]}function c(G){if(G.length===0)return null;var re=G[0],Z=G.pop();if(Z!==re){G[0]=Z;e:for(var Ae=0,_e=G.length,rn=_e>>>1;Ae<rn;){var pn=2*(Ae+1)-1,rt=G[pn],g=pn+1,D=G[g];if(0>E(rt,Z))g<_e&&0>E(D,rt)?(G[Ae]=D,G[g]=Z,Ae=g):(G[Ae]=rt,G[pn]=Z,Ae=pn);else if(g<_e&&0>E(D,Z))G[Ae]=D,G[g]=Z,Ae=g;else break e}}return re}function E(G,re){var Z=G.sortIndex-re.sortIndex;return Z!==0?Z:G.id-re.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var A=performance;s.unstable_now=function(){return A.now()}}else{var k=Date,j=k.now();s.unstable_now=function(){return k.now()-j}}var U=[],q=[],z=1,b=null,N=3,H=!1,Y=!1,X=!1,W=!1,be=typeof setTimeout=="function"?setTimeout:null,fe=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate<"u"?setImmediate:null;function we(G){for(var re=f(q);re!==null;){if(re.callback===null)c(q);else if(re.startTime<=G)c(q),re.sortIndex=re.expirationTime,d(U,re);else break;re=f(q)}}function He(G){if(X=!1,we(G),!Y)if(f(U)!==null)Y=!0,ze||(ze=!0,sn());else{var re=f(q);re!==null&&un(He,re.startTime-G)}}var ze=!1,ie=-1,he=5,Oe=-1;function ye(){return W?!0:!(s.unstable_now()-Oe<he)}function Qe(){if(W=!1,ze){var G=s.unstable_now();Oe=G;var re=!0;try{e:{Y=!1,X&&(X=!1,fe(ie),ie=-1),H=!0;var Z=N;try{n:{for(we(G),b=f(U);b!==null&&!(b.expirationTime>G&&ye());){var Ae=b.callback;if(typeof Ae=="function"){b.callback=null,N=b.priorityLevel;var _e=Ae(b.expirationTime<=G);if(G=s.unstable_now(),typeof _e=="function"){b.callback=_e,we(G),re=!0;break n}b===f(U)&&c(U),we(G)}else c(U);b=f(U)}if(b!==null)re=!0;else{var rn=f(q);rn!==null&&un(He,rn.startTime-G),re=!1}}break e}finally{b=null,N=Z,H=!1}re=void 0}}finally{re?sn():ze=!1}}}var sn;if(typeof ce=="function")sn=function(){ce(Qe)};else if(typeof MessageChannel<"u"){var Gn=new MessageChannel,On=Gn.port2;Gn.port1.onmessage=Qe,sn=function(){On.postMessage(null)}}else sn=function(){be(Qe,0)};function un(G,re){ie=be(function(){G(s.unstable_now())},re)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(G){G.callback=null},s.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):he=0<G?Math.floor(1e3/G):5},s.unstable_getCurrentPriorityLevel=function(){return N},s.unstable_next=function(G){switch(N){case 1:case 2:case 3:var re=3;break;default:re=N}var Z=N;N=re;try{return G()}finally{N=Z}},s.unstable_requestPaint=function(){W=!0},s.unstable_runWithPriority=function(G,re){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var Z=N;N=G;try{return re()}finally{N=Z}},s.unstable_scheduleCallback=function(G,re,Z){var Ae=s.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Ae+Z:Ae):Z=Ae,G){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=Z+_e,G={id:z++,callback:re,priorityLevel:G,startTime:Z,expirationTime:_e,sortIndex:-1},Z>Ae?(G.sortIndex=Z,d(q,G),f(U)===null&&G===f(q)&&(X?(fe(ie),ie=-1):X=!0,un(He,Z-Ae))):(G.sortIndex=_e,d(U,G),Y||H||(Y=!0,ze||(ze=!0,sn()))),G},s.unstable_shouldYield=ye,s.unstable_wrapCallback=function(G){var re=N;return function(){var Z=N;N=re;try{return G.apply(this,arguments)}finally{N=Z}}}})(Gc)),Gc}var mp;function U0(){return mp||(mp=1,Yc.exports=L0()),Yc.exports}var Kc={exports:{}},pe={};var pp;function q0(){if(pp)return pe;pp=1;var s=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),k=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),q=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),N=Symbol.for("react.view_transition"),H=Symbol.iterator;function Y(g){return g===null||typeof g!="object"?null:(g=H&&g[H]||g["@@iterator"],typeof g=="function"?g:null)}var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,be={};function fe(g,D,ae){this.props=g,this.context=D,this.refs=be,this.updater=ae||X}fe.prototype.isReactComponent={},fe.prototype.setState=function(g,D){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,D,"setState")},fe.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function ce(){}ce.prototype=fe.prototype;function we(g,D,ae){this.props=g,this.context=D,this.refs=be,this.updater=ae||X}var He=we.prototype=new ce;He.constructor=we,W(He,fe.prototype),He.isPureReactComponent=!0;var ze=Array.isArray;function ie(){}var he={H:null,A:null,T:null,S:null},Oe=Object.prototype.hasOwnProperty;function ye(g,D,ae){var J=ae.ref;return{$$typeof:s,type:g,key:D,ref:J!==void 0?J:null,props:ae}}function Qe(g,D){return ye(g.type,D,g.props)}function sn(g){return typeof g=="object"&&g!==null&&g.$$typeof===s}function Gn(g){var D={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(ae){return D[ae]})}var On=/\/+/g;function un(g,D){return typeof g=="object"&&g!==null&&g.key!=null?Gn(""+g.key):D.toString(36)}function G(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(ie,ie):(g.status="pending",g.then(function(D){g.status==="pending"&&(g.status="fulfilled",g.value=D)},function(D){g.status==="pending"&&(g.status="rejected",g.reason=D)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function re(g,D,ae,J,se){var Ce=typeof g;(Ce==="undefined"||Ce==="boolean")&&(g=null);var Ne=!1;if(g===null)Ne=!0;else switch(Ce){case"bigint":case"string":case"number":Ne=!0;break;case"object":switch(g.$$typeof){case s:case d:Ne=!0;break;case z:return Ne=g._init,re(Ne(g._payload),D,ae,J,se)}}if(Ne)return se=se(g),Ne=J===""?"."+un(g,0):J,ze(se)?(ae="",Ne!=null&&(ae=Ne.replace(On,"$&/")+"/"),re(se,D,ae,"",function(Fn){return Fn})):se!=null&&(sn(se)&&(se=Qe(se,ae+(se.key==null||g&&g.key===se.key?"":(""+se.key).replace(On,"$&/")+"/")+Ne)),D.push(se)),1;Ne=0;var $=J===""?".":J+":";if(ze(g))for(var ue=0;ue<g.length;ue++)J=g[ue],Ce=$+un(J,ue),Ne+=re(J,D,ae,Ce,se);else if(ue=Y(g),typeof ue=="function")for(g=ue.call(g),ue=0;!(J=g.next()).done;)J=J.value,Ce=$+un(J,ue++),Ne+=re(J,D,ae,Ce,se);else if(Ce==="object"){if(typeof g.then=="function")return re(G(g),D,ae,J,se);throw D=String(g),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return Ne}function Z(g,D,ae){if(g==null)return g;var J=[],se=0;return re(g,J,"","",function(Ce){return D.call(ae,Ce,se++)}),J}function Ae(g){if(g._status===-1){var D=g._result,ae=D();ae.then(function(J){(g._status===0||g._status===-1)&&(g._status=1,g._result=J,ae.status===void 0&&(ae.status="fulfilled",ae.value=J))},function(J){(g._status===0||g._status===-1)&&(g._status=2,g._result=J,ae.status===void 0&&(ae.status="rejected",ae.reason=J))}),g._status===-1&&(g._status=0,g._result=ae)}if(g._status===1)return g._result.default;throw g._result}var _e=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)};function rn(g){var D=he.T,ae={};ae.types=D!==null?D.types:null,he.T=ae;try{var J=g(),se=he.S;se!==null&&se(ae,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(ie,_e)}catch(Ce){_e(Ce)}finally{D!==null&&ae.types!==null&&(D.types=ae.types),he.T=D}}function pn(g){var D=he.T;if(D!==null){var ae=D.types;ae===null?D.types=[g]:ae.indexOf(g)===-1&&ae.push(g)}else rn(pn.bind(null,g))}var rt={map:Z,forEach:function(g,D,ae){Z(g,function(){D.apply(this,arguments)},ae)},count:function(g){var D=0;return Z(g,function(){D++}),D},toArray:function(g){return Z(g,function(D){return D})||[]},only:function(g){if(!sn(g))throw Error("React.Children.only expected to receive a single React element child.");return g}};return pe.Activity=b,pe.Children=rt,pe.Component=fe,pe.Fragment=f,pe.Profiler=E,pe.PureComponent=we,pe.StrictMode=c,pe.Suspense=U,pe.ViewTransition=N,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=he,pe.__COMPILER_RUNTIME={__proto__:null,c:function(g){return he.H.useMemoCache(g)}},pe.addTransitionType=pn,pe.cache=function(g){return function(){return g.apply(null,arguments)}},pe.cacheSignal=function(){return null},pe.cloneElement=function(g,D,ae){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var J=W({},g.props),se=g.key;if(D!=null)for(Ce in D.key!==void 0&&(se=""+D.key),D)!Oe.call(D,Ce)||Ce==="key"||Ce==="__self"||Ce==="__source"||Ce==="ref"&&D.ref===void 0||(J[Ce]=D[Ce]);var Ce=arguments.length-2;if(Ce===1)J.children=ae;else if(1<Ce){for(var Ne=Array(Ce),$=0;$<Ce;$++)Ne[$]=arguments[$+2];J.children=Ne}return ye(g.type,se,J)},pe.createContext=function(g){return g={$$typeof:k,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:A,_context:g},g},pe.createElement=function(g,D,ae){var J,se={},Ce=null;if(D!=null)for(J in D.key!==void 0&&(Ce=""+D.key),D)Oe.call(D,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(se[J]=D[J]);var Ne=arguments.length-2;if(Ne===1)se.children=ae;else if(1<Ne){for(var $=Array(Ne),ue=0;ue<Ne;ue++)$[ue]=arguments[ue+2];se.children=$}if(g&&g.defaultProps)for(J in Ne=g.defaultProps,Ne)se[J]===void 0&&(se[J]=Ne[J]);return ye(g,Ce,se)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(g){return{$$typeof:j,render:g}},pe.isValidElement=sn,pe.lazy=function(g){return{$$typeof:z,_payload:{_status:-1,_result:g},_init:Ae}},pe.memo=function(g,D){return{$$typeof:q,type:g,compare:D===void 0?null:D}},pe.startTransition=rn,pe.unstable_useCacheRefresh=function(){return he.H.useCacheRefresh()},pe.use=function(g){return he.H.use(g)},pe.useActionState=function(g,D,ae){return he.H.useActionState(g,D,ae)},pe.useCallback=function(g,D){return he.H.useCallback(g,D)},pe.useContext=function(g){return he.H.useContext(g)},pe.useDebugValue=function(){},pe.useDeferredValue=function(g,D){return he.H.useDeferredValue(g,D)},pe.useEffect=function(g,D){return he.H.useEffect(g,D)},pe.useEffectEvent=function(g){return he.H.useEffectEvent(g)},pe.useId=function(){return he.H.useId()},pe.useImperativeHandle=function(g,D,ae){return he.H.useImperativeHandle(g,D,ae)},pe.useInsertionEffect=function(g,D){return he.H.useInsertionEffect(g,D)},pe.useLayoutEffect=function(g,D){return he.H.useLayoutEffect(g,D)},pe.useMemo=function(g,D){return he.H.useMemo(g,D)},pe.useOptimistic=function(g,D){return he.H.useOptimistic(g,D)},pe.useReducer=function(g,D,ae){return he.H.useReducer(g,D,ae)},pe.useRef=function(g){return he.H.useRef(g)},pe.useState=function(g){return he.H.useState(g)},pe.useSyncExternalStore=function(g,D,ae){return he.H.useSyncExternalStore(g,D,ae)},pe.useTransition=function(){return he.H.useTransition()},pe.version="19.3.1",pe}var gp;function af(){return gp||(gp=1,Kc.exports=q0()),Kc.exports}var Vc={exports:{}},Yn={};var bp;function H0(){if(bp)return Yn;bp=1;var s=af();function d(z){var b="https://react.dev/errors/"+z;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)b+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+z+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var c={d:{f,r:function(){throw Error(d(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},E=Symbol.for("react.portal"),A=Symbol.for("react.recoverable"),k=Symbol.for("react.optimistic_key");function j(z,b,N){var H=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:E,key:H==null?null:H===k?k:""+H,children:z,containerInfo:b,implementation:N}}var U=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function q(z,b){if(z==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return Yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Yn.browser=function(z){return{$$typeof:A,_reason:z}},Yn.createPortal=function(z,b){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(d(299));return j(z,b,null,N)},Yn.flushSync=function(z){var b=U.T,N=c.p;try{if(U.T=null,c.p=2,z)return z()}finally{U.T=b,c.p=N,c.d.f()}},Yn.preconnect=function(z,b){typeof z=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,c.d.C(z,b))},Yn.prefetchDNS=function(z){typeof z=="string"&&c.d.D(z)},Yn.preinit=function(z,b){if(typeof z=="string"&&b&&typeof b.as=="string"){var N=b.as,H=q(N,b.crossOrigin),Y=typeof b.integrity=="string"?b.integrity:void 0,X=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;N==="style"?c.d.S(z,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:H,integrity:Y,fetchPriority:X}):N==="script"&&c.d.X(z,{crossOrigin:H,integrity:Y,fetchPriority:X,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},Yn.preinitModule=function(z,b){if(typeof z=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var N=q(b.as,b.crossOrigin);c.d.M(z,{crossOrigin:N,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0})}}else b==null&&c.d.M(z)},Yn.preload=function(z,b){if(typeof z=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var N=b.as,H=q(N,b.crossOrigin);c.d.L(z,N,{crossOrigin:H,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},Yn.preloadModule=function(z,b){if(typeof z=="string")if(b){var N=q(b.as,b.crossOrigin);c.d.m(z,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:N,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0})}else c.d.m(z)},Yn.requestFormReset=function(z){c.d.r(z)},Yn.unstable_batchedUpdates=function(z,b){return z(b)},Yn.useFormState=function(z,b,N){return U.H.useFormState(z,b,N)},Yn.useFormStatus=function(){return U.H.useHostTransitionStatus()},Yn.version="19.3.1",Yn}var vp;function Gp(){if(vp)return Vc.exports;vp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(d){console.error(d)}}return s(),Vc.exports=H0(),Vc.exports}var yp;function Y0(){if(yp)return Sr;yp=1;var s=U0(),d=af(),f=Gp();function c(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function E(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function A(e){for(var n=e,t=n;t&&!t.alternate;)n=t,(n.flags&4098)!==0&&(e=n.return),t=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function k(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function j(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function U(e){if(A(e)!==e)throw Error(c(188))}function q(e){var n=e.alternate;if(!n){if(n=A(e),n===null)throw Error(c(188));return n!==e?null:e}for(var t=e,a=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(a=i.return,a!==null){t=a;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return U(i),e;if(l===a)return U(i),n;l=l.sibling}throw Error(c(188))}if(t.return!==a.return)t=i,a=l;else{for(var r=!1,u=i.child;u;){if(u===t){r=!0,t=i,a=l;break}if(u===a){r=!0,a=i,t=l;break}u=u.sibling}if(!r){for(u=l.child;u;){if(u===t){r=!0,t=l,a=i;break}if(u===a){r=!0,a=l,t=i;break}u=u.sibling}if(!r)throw Error(c(189))}}if(t.alternate!==a)throw Error(c(190))}if(t.tag!==3)throw Error(c(188));return t.stateNode.current===t?e:n}function z(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=z(e),n!==null)return n;e=e.sibling}return null}function b(e,n,t,a,i,l){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&t(e,a,i,l)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&b(e.child,n,t,a,i,l))return!0;e=e.sibling}return!1}function N(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function H(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function Y(e){var n=[null,null],t=N(e);return t===null||X(n,e,t.child,{foundSelf:!1}),n}function X(e,n,t,a){for(;t!==null;){if(t===n)a.foundSelf=!0;else if(t.tag===5||t.tag===27||t.tag===6){if(a.foundSelf)return e[1]=t,!0;e[0]=t}else if((t.tag!==22||t.memoizedState===null)&&X(e,n,t.child,a))return!0;t=t.sibling}return!1}function W(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(c(559))}}var be=null,fe=null;function ce(e,n,t){return e===t?!0:e===n?(be=e,!0):!1}function we(e,n,t){return e===t?(fe=e,!1):e===n?(fe!==null&&(be=e),!0):!1}function He(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function ze(e,n,t){for(var a=0,i=e;i;i=t(i))a++;i=0;for(var l=n;l;l=t(l))i++;for(;0<a-i;)e=t(e),a--;for(;0<i-a;)n=t(n),i--;for(;a--;){if(e===n||n!==null&&e===n.alternate)return e;e=t(e),n=t(n)}return null}var ie=Object.assign,he=Symbol.for("react.element"),Oe=Symbol.for("react.transitional.element"),ye=Symbol.for("react.portal"),Qe=Symbol.for("react.fragment"),sn=Symbol.for("react.strict_mode"),Gn=Symbol.for("react.profiler"),On=Symbol.for("react.consumer"),un=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),Ae=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),rn=Symbol.for("react.activity"),pn=Symbol.for("react.legacy_hidden"),rt=Symbol.for("react.memo_cache_sentinel"),g=Symbol.for("react.view_transition"),D=Symbol.for("react.recoverable"),ae=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=ae&&e[ae]||e["@@iterator"],typeof e=="function"?e:null)}var se=Symbol.for("react.client.reference");function Ce(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qe:return"Fragment";case Gn:return"Profiler";case sn:return"StrictMode";case re:return"Suspense";case Z:return"SuspenseList";case rn:return"Activity";case g:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case ye:return"Portal";case un:return e.displayName||"Context";case On:return(e._context.displayName||"Context")+".Consumer";case G:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ae:return n=e.displayName||null,n!==null?n:Ce(e.type)||"Memo";case _e:n=e._payload,e=e._init;try{return Ce(e(n))}catch{}}return null}var Ne=Array.isArray,$=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Fn={pending:!1,data:null,method:null,action:null},Wa=[],ga=-1;function pt(e){return{current:e}}function Nn(e){0>ga||(e.current=Wa[ga],Wa[ga]=null,ga--)}function Pe(e,n){ga++,Wa[ga]=e.current,e.current=n}var gt=pt(null),ba=pt(null),Bt=pt(null),Oi=pt(null);function $a(e,n){switch(Pe(Bt,n),Pe(ba,e),Pe(gt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?_m(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=_m(n),e=Sm(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Nn(gt),Pe(gt,e)}function Pn(){Nn(gt),Nn(ba),Nn(Bt)}function Ni(e){var n=e.memoizedState;n!==null&&(hl._currentValue=n.memoizedState,Pe(Oi,e)),n=gt.current;var t=Sm(n,e.type);n!==t&&(Pe(ba,e),Pe(gt,t))}function xt(e){ba.current===e&&(Nn(gt),Nn(ba)),Oi.current===e&&(Nn(Oi),hl._currentValue=Fn)}var va,Sl;function Lt(e){if(va===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);va=n&&n[1]||"",Sl=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+va+e+Sl}var Tl=!1;function El(e,n){if(!e||Tl)return"";Tl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(V){var v=V}Reflect.construct(e,[],C)}else{try{C.call()}catch(V){v=V}C=!1;try{var w=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),C=!0,new e}finally{C&&(w!==void 0?Object.defineProperty(e.prototype,"props",w):delete e.prototype.props)}}}else{try{throw Error()}catch(V){v=V}(C=e())&&typeof C.catch=="function"&&C.catch(function(){})}}catch(V){if(V&&v&&typeof V.stack=="string")return[V.stack,v.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=a.DetermineComponentFrameRoot(),r=l[0],u=l[1];if(r&&u){var h=r.split(`
`),_=u.split(`
`);for(i=a=0;a<h.length&&!h[a].includes("DetermineComponentFrameRoot");)a++;for(;i<_.length&&!_[i].includes("DetermineComponentFrameRoot");)i++;if(a===h.length||i===_.length)for(a=h.length-1,i=_.length-1;1<=a&&0<=i&&h[a]!==_[i];)i--;for(;1<=a&&0<=i;a--,i--)if(h[a]!==_[i]){if(a!==1||i!==1)do if(a--,i--,0>i||h[a]!==_[i]){var O=`
`+h[a].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=a&&0<=i);break}}}finally{Tl=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Lt(t):""}function hu(e,n){switch(e.tag){case 26:case 27:case 5:return Lt(e.type);case 16:return Lt("Lazy");case 13:return e.child!==n&&n!==null?Lt("Suspense Fallback"):Lt("Suspense");case 19:return Lt("SuspenseList");case 0:case 15:return El(e.type,!1);case 11:return El(e.type.render,!1);case 1:return El(e.type,!0);case 31:return Lt("Activity");case 30:return Lt("ViewTransition");default:return""}}function Nr(e){try{var n="",t=null;do n+=hu(e,t),t=e,e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var xi=Object.prototype.hasOwnProperty,wl=s.unstable_scheduleCallback,Ol=s.unstable_cancelCallback,mu=s.unstable_shouldYield,Nl=s.unstable_requestPaint,Kn=s.unstable_now,xr=s.unstable_getCurrentPriorityLevel,Ar=s.unstable_ImmediatePriority,xl=s.unstable_UserBlockingPriority,At=s.unstable_NormalPriority,m=s.unstable_LowPriority,R=s.unstable_IdlePriority,I=s.log,me=s.unstable_setDisableYieldValue,en=null,Be=null;function F(e){if(typeof I=="function"&&me(e),Be&&typeof Be.setStrictMode=="function")try{Be.setStrictMode(en,e)}catch{}}var K=Math.clz32?Math.clz32:dn,de=Math.log,vn=Math.LN2;function dn(e){return e>>>=0,e===0?32:31-(de(e)/vn|0)|0}var Ut=256,ya=262144,_a=4194304;function Pt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Sa(e,n,t){var a=e.pendingLanes;if(a===0)return 0;var i=0,l=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var u=a&134217727;return u!==0?(a=u&~l,a!==0?i=Pt(a):(r&=u,r!==0?i=Pt(r):t||(t=u&~e,t!==0&&(i=Pt(t))))):(u=a&~l,u!==0?i=Pt(u):r!==0?i=Pt(r):t||(t=a&~e,t!==0&&(i=Pt(t)))),i===0?0:n!==0&&n!==i&&(n&l)===0&&(l=i&-i,t=n&-n,l>=t||l===32&&(t&4194048)!==0)?n:i}function ei(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Mr(e,n){(n&8)!==0&&(n|=n&32);var t=e.entangledLanes;if(t!==0)for(e=e.entanglements,t&=n;0<t;){var a=31-K(t),i=1<<a;n|=e[a],t&=~i}return n}function pu(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Al(){var e=_a;return _a<<=1,(_a&62914560)===0&&(_a=4194304),e}function Ta(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ni(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function gu(e,n,t,a,i,l){var r=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var u=e.entanglements,h=e.expirationTimes,_=e.hiddenUpdates;for(t=r&~t;0<t;){var O=31-K(t),C=1<<O;u[O]=0,h[O]=-1;var v=_[O];if(v!==null)for(_[O]=null,O=0;O<v.length;O++){var w=v[O];w!==null&&(w.lane&=-536870913)}t&=~C}a!==0&&Cr(e,a,0),l!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=l&~(r&~n))}function Cr(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var a=31-K(n);e.entangledLanes|=n,e.entanglements[a]=e.entanglements[a]|1073741824|t&261930}function Mt(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-K(t),i=1<<a;i&n|e[a]&n&&(e[a]|=n),t&=~i}}function Ml(e,n){var t=n&-n;return t=(t&42)!==0?1:Ai(t),(t&(e.suspendedLanes|n))!==0?0:t}function Ai(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Cl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Rr(){var e=ue.p;return e!==0?e:(e=window.event,e===void 0?32:ip(e.type))}function kr(e,n){var t=ue.p;try{return ue.p=e,n()}finally{ue.p=t}}var Wn=Math.random().toString(36).slice(2),xn="__reactFiber$"+Wn,B="__reactProps$"+Wn,ne="__reactContainer$"+Wn,Me="__reactEvents$"+Wn,We="__reactListeners$"+Wn,gn="__reactHandles$"+Wn,$n="__reactResources$"+Wn,et="__reactMarker$"+Wn,Wt="__reactLoad$"+Wn;function Mn(e){delete e[xn],delete e[B],delete e[We],delete e[gn]}function Cn(e){var n;if(n=e[xn])return n;for(var t=e.parentNode;t;){if(n=t[ne]||t[xn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Um(e);e!==null;){if(t=e[xn])return t;e=Um(e)}return n}e=t,t=e.parentNode}return null}function $t(e){if(e=e[xn]||e[ne]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ea(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(c(33))}function ea(e){var n=e[$n];return n||(n=e[$n]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function yn(e){e[et]=!0}function Dr(e){e[Wt]=void 0}var jr=new Set,zr={};function bt(e,n){na(e,n),na(e+"Capture",n)}function na(e,n){for(zr[e]=n,e=0;e<n.length;e++)jr.add(n[e])}var vt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Br={},Mi={};function ve(e){return xi.call(Mi,e)?!0:xi.call(Br,e)?!1:vt.test(e)?Mi[e]=!0:(Br[e]=!0,!1)}var Le=!1;function _n(){var e=Le;return Le=!1,e}function Ye(e,n,t){if(ve(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,t)}}function ta(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,t)}}function jn(e,n,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,a)}}function zn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ci(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Q(e,n,t){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,l=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(r){t=""+r,l.call(this,r)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(r){t=""+r},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function te(e){if(!e._valueTracker){var n=Ci(e)?"checked":"value";e._valueTracker=Q(e,n,""+e[n])}}function Se(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=Ci(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}var Ge=/[\n"\\]/g;function Xe(e){return e.replace(Ge,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function st(e,n,t,a,i,l,r,u){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),n!=null?r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+zn(n)):e.value!==""+zn(n)&&(e.value=""+zn(n)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),n!=null?r==="number"&&e.value==n?Rl(e,zn(e.value)):Rl(e,zn(n)):t!=null?Rl(e,zn(t)):a!=null&&e.removeAttribute("value"),i==null&&l!=null&&(e.defaultChecked=!!l),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+zn(u):e.removeAttribute("name")}function Lr(e,n,t,a,i,l,r,u){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),n!=null||t!=null){if(!(l!=="submit"&&l!=="reset"||n!=null)){te(e);return}t=t!=null?""+zn(t):"",n=n!=null?""+zn(n):t,u||n===e.value||(e.value=n),e.defaultValue=n}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=u?e.checked:!!a,e.defaultChecked=!!a,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),te(e)}function Rl(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function Ri(e,n,t,a){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&a&&(e[t].defaultSelected=!0)}else{for(t=""+zn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function cf(e,n,t){if(n!=null&&(n=""+zn(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+zn(t):""}function ff(e,n,t,a){if(n==null){if(a!=null){if(t!=null)throw Error(c(92));if(Ne(a)){if(1<a.length)throw Error(c(93));a=a[0]}t=a}t==null&&(t=""),n=t}t=zn(n),e.defaultValue=t,a=e.textContent,a===t&&a!==""&&a!==null&&(e.value=a),te(e)}function ki(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var ag=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function df(e,n,t){var a=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":a?e.setProperty(n,t):typeof t!="number"||t===0||ag.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function hf(e,n,t){if(n!=null&&typeof n!="object")throw Error(c(62));if(e=e.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="",Le=!0);for(var i in n)a=n[i],n.hasOwnProperty(i)&&t[i]!==a&&(df(e,i,a),Le=!0)}else for(var l in n)n.hasOwnProperty(l)&&df(e,l,n[l])}function bu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ig=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ur(e){return lg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function qt(){}var vu=null;function yu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Di=null,ji=null;function mf(e){var n=$t(e);if(n&&(e=n.stateNode)){var t=e[B]||null;e:switch(e=n.stateNode,n.type){case"input":if(st(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Xe(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var i=a[B]||null;if(!i)throw Error(c(90));st(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(n=0;n<t.length;n++)a=t[n],a.form===e.form&&Se(a)}break e;case"textarea":cf(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&Ri(e,!!t.multiple,n,!1)}}}var _u=!1;function pf(e,n,t){if(_u)return e(n,t);_u=!0;try{var a=e(n);return a}finally{if(_u=!1,(Di!==null||ji!==null)&&(Us(),Di&&(n=Di,e=ji,ji=Di=null,mf(n),e)))for(n=0;n<e.length;n++)mf(e[n])}}function kl(e,n){var t=e.stateNode;if(t===null)return null;var a=t[B]||null;if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(c(231,n,typeof t));return t}var aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=!1;if(aa)try{var Dl={};Object.defineProperty(Dl,"passive",{get:function(){Su=!0}}),window.addEventListener("test",Dl,Dl),window.removeEventListener("test",Dl,Dl)}catch{Su=!1}var wa=null,Tu=null,qr=null;function gf(){if(qr)return qr;var e,n=Tu,t=n.length,a,i="value"in wa?wa.value:wa.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var r=t-e;for(a=1;a<=r&&n[t-a]===i[l-a];a++);return qr=i.slice(e,1<a?1-a:void 0)}function Hr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Yr(){return!0}function bf(){return!1}function In(e){function n(t,a,i,l,r){this._reactName=t,this._targetInst=i,this.type=a,this.nativeEvent=l,this.target=r,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Yr:bf,this.isPropagationStopped=bf,this}return ie(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Yr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Yr)},persist:function(){},isPersistent:Yr}),n}var Oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gr=In(Oa),jl=ie({},Oa,{view:0,detail:0}),rg=In(jl),Eu,wu,zl,Kr=ie({},jl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zl&&(zl&&e.type==="mousemove"?(Eu=e.screenX-zl.screenX,wu=e.screenY-zl.screenY):wu=Eu=0,zl=e),Eu)},movementY:function(e){return"movementY"in e?e.movementY:wu}}),vf=In(Kr),sg=ie({},Kr,{dataTransfer:0}),ug=In(sg),og=ie({},jl,{relatedTarget:0}),Ou=In(og),cg=ie({},Oa,{animationName:0,elapsedTime:0,pseudoElement:0}),fg=In(cg),dg=ie({},Oa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hg=In(dg),mg=ie({},Oa,{data:0}),yf=In(mg),pg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vg(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=bg[e])?!!n[e]:!1}function Nu(){return vg}var yg=ie({},jl,{key:function(e){if(e.key){var n=pg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Hr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nu,charCode:function(e){return e.type==="keypress"?Hr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_g=In(yg),Sg=ie({},Kr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_f=In(Sg),Tg=ie({},Oa,{submitter:0}),Eg=In(Tg),wg=ie({},jl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nu}),Og=In(wg),Ng=ie({},Oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),xg=In(Ng),Ag=ie({},Kr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mg=In(Ag),Cg=ie({},Oa,{newState:0,oldState:0,source:0}),Rg=In(Cg),kg=[9,13,27,32],xu=aa&&"CompositionEvent"in window,Bl=null;aa&&"documentMode"in document&&(Bl=document.documentMode);var Dg=aa&&"TextEvent"in window&&!Bl,Sf=aa&&(!xu||Bl&&8<Bl&&11>=Bl),Tf=" ",Ef=!1;function wf(e,n){switch(e){case"keyup":return kg.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Of(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zi=!1;function jg(e,n){switch(e){case"compositionend":return Of(n);case"keypress":return n.which!==32?null:(Ef=!0,Tf);case"textInput":return e=n.data,e===Tf&&Ef?null:e;default:return null}}function zg(e,n){if(zi)return e==="compositionend"||!xu&&wf(e,n)?(e=gf(),qr=Tu=wa=null,zi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Sf&&n.locale!=="ko"?null:n.data;default:return null}}var Bg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Bg[e.type]:n==="textarea"}function xf(e,n,t,a){Di?ji?ji.push(a):ji=[a]:Di=a,n=Vs(n,"onChange"),0<n.length&&(t=new Gr("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var Ll=null,Ul=null;function Lg(e){mm(e,0)}function Vr(e){var n=Ea(e);if(Se(n))return e}function Af(e,n){if(e==="change")return n}var Mf=!1;if(aa){var Au;if(aa){var Mu="oninput"in document;if(!Mu){var Cf=document.createElement("div");Cf.setAttribute("oninput","return;"),Mu=typeof Cf.oninput=="function"}Au=Mu}else Au=!1;Mf=Au&&(!document.documentMode||9<document.documentMode)}function Rf(){Ll&&(Ll.detachEvent("onpropertychange",kf),Ul=Ll=null)}function kf(e){if(e.propertyName==="value"&&Vr(Ul)){var n=[];xf(n,Ul,e,yu(e)),pf(Lg,n)}}function Ug(e,n,t){e==="focusin"?(Rf(),Ll=n,Ul=t,Ll.attachEvent("onpropertychange",kf)):e==="focusout"&&Rf()}function qg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vr(Ul)}function Hg(e,n){if(e==="click")return Vr(n)}function Yg(e,n){if(e==="input"||e==="change")return Vr(n)}function Gg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ut=typeof Object.is=="function"?Object.is:Gg;function ql(e,n){if(ut(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var i=t[a];if(!xi.call(n,i)||!ut(e[i],n[i]))return!1}return!0}function Cu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Df(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jf(e,n){var t=Df(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Df(t)}}function zf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?zf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Bf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Cu(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Cu(e.document)}return n}function Ru(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Kg=aa&&"documentMode"in document&&11>=document.documentMode,Bi=null,ku=null,Hl=null,Du=!1;function Lf(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Du||Bi==null||Bi!==Cu(a)||(a=Bi,"selectionStart"in a&&Ru(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Hl&&ql(Hl,a)||(Hl=a,a=Vs(ku,"onSelect"),0<a.length&&(n=new Gr("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=Bi)))}function ti(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Li={animationend:ti("Animation","AnimationEnd"),animationiteration:ti("Animation","AnimationIteration"),animationstart:ti("Animation","AnimationStart"),transitionrun:ti("Transition","TransitionRun"),transitionstart:ti("Transition","TransitionStart"),transitioncancel:ti("Transition","TransitionCancel"),transitionend:ti("Transition","TransitionEnd")},ju={},Uf={};aa&&(Uf=document.createElement("div").style,"AnimationEvent"in window||(delete Li.animationend.animation,delete Li.animationiteration.animation,delete Li.animationstart.animation),"TransitionEvent"in window||delete Li.transitionend.transition);function ai(e){if(ju[e])return ju[e];if(!Li[e])return e;var n=Li[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Uf)return ju[e]=n[t];return e}var qf=ai("animationend"),Hf=ai("animationiteration"),Yf=ai("animationstart"),Vg=ai("transitionrun"),Ig=ai("transitionstart"),Qg=ai("transitioncancel"),Gf=ai("transitionend"),Kf=new Map,zu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zu.push("scrollEnd");function Ct(e,n){Kf.set(e,n),bt(n,[e])}var Xg=0;function ia(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=jt.identifierPrefix;var t=Xg++;return e="_"+e+"t_"+t.toString(32)+"_",n.autoName=e}function Vf(e){if(e==null||typeof e=="string")return e;var n=null,t=al;if(t!==null)for(var a=0;a<t.length;a++){var i=e[t[a]];if(i!=null){if(i==="none")return"none";n=n==null?i:n+(" "+i)}}return n??e.default}function la(e,n){return e=Vf(e),n=Vf(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var Ir=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},yt=[],Ui=0,Bu=0;function Qr(){for(var e=Ui,n=Bu=Ui=0;n<e;){var t=yt[n];yt[n++]=null;var a=yt[n];yt[n++]=null;var i=yt[n];yt[n++]=null;var l=yt[n];if(yt[n++]=null,a!==null&&i!==null){var r=a.pending;r===null?i.next=i:(i.next=r.next,r.next=i),a.pending=i}l!==0&&If(t,i,l)}}function Xr(e,n,t,a){yt[Ui++]=e,yt[Ui++]=n,yt[Ui++]=t,yt[Ui++]=a,Bu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Lu(e,n,t,a){return Xr(e,n,t,a),Zr(e)}function ii(e,n){return Xr(e,null,null,n),Zr(e)}function If(e,n,t){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t);for(var i=!1,l=e.return;l!==null;)l.childLanes|=t,a=l.alternate,a!==null&&(a.childLanes|=t),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(i=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,i&&n!==null&&(i=31-K(t),e=l.hiddenUpdates,a=e[i],a===null?e[i]=[n]:a.push(n),n.lane=t|536870912),l):null}function Zr(e){if(50<ur)throw ur=0,Ls=null,Error(c(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var qi={};function Zg(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(e,n,t,a){return new Zg(e,n,t,a)}function Uu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ra(e,n){var t=e.alternate;return t===null?(t=nt(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&1206910976,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Qf(e,n){e.flags&=1206910978;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Jr(e,n,t,a,i,l){var r=0;if(a=e,typeof a=="function")Uu(a)&&(r=1);else if(typeof a=="string")r=T0(e,t,gt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(a){case rn:return e=nt(31,t,n,i),e.elementType=rn,e.lanes=l,e;case Qe:return li(t.children,i,l,n);case sn:r=8,i|=24;break;case Gn:return e=nt(12,t,n,i|2),e.elementType=Gn,e.lanes=l,e;case re:return e=nt(13,t,n,i),e.elementType=re,e.lanes=l,e;case Z:return e=nt(19,t,n,i),e.elementType=Z,e.lanes=l,e;case pn:case g:return e=i|32,e=nt(30,t,n,e),e.elementType=g,e.lanes=l,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case un:r=10;break e;case On:r=9;break e;case G:r=11;break e;case Ae:r=14;break e;case _e:r=16,a=null;break e}r=29,t=Error(c(130,e===null?"null":typeof e,"")),a=null}return n=nt(r,t,n,i),n.elementType=e,n.type=a,n.lanes=l,n}function li(e,n,t,a){return e=nt(7,e,a,n),e.lanes=t,e}function qu(e,n,t){return e=nt(6,e,null,n),e.lanes=t,e}function Xf(e){var n=nt(18,null,null,0);return n.stateNode=e,n}function Hu(e,n,t){return n=nt(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Zf=new WeakMap;function _t(e,n){if(typeof e=="object"&&e!==null){var t=Zf.get(e);return t!==void 0?t:(n={value:e,source:n,stack:Nr(n)},Zf.set(e,n),n)}return{value:e,source:n,stack:Nr(n)}}var Hi=[],Yi=0,Fr=null,Yl=0,St=[],Tt=0,Na=null,Ht=1,Yt="";function sa(e,n){Hi[Yi++]=Yl,Hi[Yi++]=Fr,Fr=e,Yl=n}function Jf(e,n,t){St[Tt++]=Ht,St[Tt++]=Yt,St[Tt++]=Na,Na=e;var a=Ht;e=Yt;var i=32-K(a)-1;a&=~(1<<i),t+=1;var l=32-K(n)+i;if(30<l){var r=i-i%5;l=(a&(1<<r)-1).toString(32),a>>=r,i-=r,Ht=1<<32-K(n)+i|t<<i|a,Yt=l+e}else Ht=1<<l|t<<i|a,Yt=e}function Pr(e){e.return!==null&&(sa(e,1),Jf(e,1,0))}function Yu(e){for(;e===Fr;)Fr=Hi[--Yi],Hi[Yi]=null,Yl=Hi[--Yi],Hi[Yi]=null;for(;e===Na;)Na=St[--Tt],St[Tt]=null,Yt=St[--Tt],St[Tt]=null,Ht=St[--Tt],St[Tt]=null}function Ff(e,n){St[Tt++]=Ht,St[Tt++]=Yt,St[Tt++]=Na,Ht=n.id,Yt=n.overflow,Na=e}var Rn=null,an=null,xe=!1,xa=null,Et=!1,Gu=Error(c(519));function Aa(e){var n=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Gl(_t(n,e)),Gu}function Pf(e){var n=e.stateNode,t=e.type,a=e.memoizedProps;switch(n[xn]=e,n[B]=a,t){case"dialog":ke("cancel",n),ke("close",n);break;case"iframe":case"object":case"embed":ke("load",n);break;case"video":case"audio":for(t=0;t<cr.length;t++)ke(cr[t],n);break;case"source":ke("error",n);break;case"img":case"image":case"link":ke("error",n),ke("load",n);break;case"details":ke("toggle",n);break;case"input":ke("invalid",n),Lr(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":ke("invalid",n);break;case"textarea":ke("invalid",n),ff(n,a.value,a.defaultValue,a.children)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||a.suppressHydrationWarning===!0||vm(n.textContent,t)?(a.popover!=null&&(ke("beforetoggle",n),ke("toggle",n)),a.onScroll!=null&&ke("scroll",n),a.onScrollEnd!=null&&ke("scrollend",n),a.onClick!=null&&(n.onclick=qt),n=!0):n=!1,n||Aa(e,!0)}function Wr(e){for(Rn=e.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:Et=!1;return;case 27:case 3:Et=!0;return;default:Rn=Rn.return}}function Gi(e){if(e!==Rn)return!1;if(!xe)return Wr(e),xe=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||yc(e.type,e.memoizedProps)),t=!t),t&&an&&Aa(e),Wr(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));an=Lm(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));an=Lm(e)}else n===27?(n=an,Va(e.type)?(e=Ac,Ac=null,an=e):an=n):an=Rn?Ot(e.stateNode.nextSibling):null;return!0}function ri(){an=Rn=null,xe=!1}function Ku(){var e=xa;return e!==null&&(it===null?it=e:it.push.apply(it,e),xa=null),e}function Gl(e){xa===null?xa=[e]:xa.push(e)}var Vu=pt(null),si=null,ua=null;function Ma(e,n,t){Pe(Vu,n._currentValue),n._currentValue=t}function oa(e){e._currentValue=Vu.current,Nn(Vu)}function $r(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function Iu(e,n,t,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){var r=i.child;l=l.firstContext;e:for(;l!==null;){var u=l;l=i;for(var h=0;h<n.length;h++)if(u.context===n[h]){l.lanes|=t,u=l.alternate,u!==null&&(u.lanes|=t),$r(l.return,t,e),a||(r=null);break e}l=u.next}}else if(i.tag===18){if(r=i.return,r===null)throw Error(c(341));r.lanes|=t,l=r.alternate,l!==null&&(l.lanes|=t),$r(r,t,e),r=null}else i.tag===13&&i.memoizedState!==null&&i.memoizedState.dehydrated===null?(i.lanes|=t,r=i.alternate,r!==null&&(r.lanes|=t),$r(i.return,t,e),r=i.child,r=r!==null?r.sibling:null):r=i.child;if(r!==null)r.return=i;else for(r=i;r!==null;){if(r===e){r=null;break}if(i=r.sibling,i!==null){i.return=r.return,r=i;break}r=r.return}i=r}}function ui(e,n,t,a){e=null;for(var i=n,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var r=i.alternate;if(r===null)throw Error(c(387));if(r=r.memoizedProps,r!==null){var u=i.type;ut(i.pendingProps.value,r.value)||(e!==null?e.push(u):e=[u])}}else if(i===Oi.current){if(r=i.alternate,r===null)throw Error(c(387));r.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(hl):e=[hl])}i=i.return}return e!==null&&Iu(n,e,t,a),n.flags|=262144,e!==null}function es(e){for(e=e.firstContext;e!==null;){if(!ut(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function oi(e){si=e,ua=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Bn(e){return Wf(si,e)}function ns(e,n){return si===null&&oi(e),Wf(e,n)}function Wf(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},ua===null){if(e===null)throw Error(c(308));ua=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ua=ua.next=n;return t}var Jg=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,a){e.push(a)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},Fg=s.unstable_scheduleCallback,Pg=s.unstable_NormalPriority,Sn={$$typeof:un,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qu(){return{controller:new Jg,data:new Map,refCount:0}}function Kl(e){e.refCount--,e.refCount===0&&Fg(Pg,function(){e.controller.abort()})}function $f(e,n){if((e.pendingLanes&4194048)!==0){var t=e.transitionTypes;for(t===null&&(t=e.transitionTypes=[]),e=0;e<n.length;e++){var a=n[e];t.indexOf(a)===-1&&t.push(a)}}}var Vl=null;function Wg(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var Il=null,Xu=0,ci=0,Ki=null;function $g(e,n){if(Il===null){var t=Il=[];Xu=0,ci=cc(),Ki={status:"pending",value:void 0,then:function(a){t.push(a)}}}return Xu++,n.then(ed,ed),n}function ed(){if(--Xu===0&&(Vl=null,Il!==null)){Ki!==null&&(Ki.status="fulfilled");var e=Il;Il=null,ci=0,Ki=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function e1(e,n){var t=[],a={status:"pending",value:null,reason:null,then:function(i){t.push(i)}};return e.then(function(){a.status="fulfilled",a.value=n;for(var i=0;i<t.length;i++)(0,t[i])(n)},function(i){for(a.status="rejected",a.reason=i,i=0;i<t.length;i++)(0,t[i])(void 0)}),a}var nd=$.S;$.S=function(e,n){if(Xh=Kn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&$g(e,n),Vl!==null)for(var t=sl;t!==null;)$f(t,Vl),t=t.next;if(t=e.types,t!==null){for(var a=sl;a!==null;)$f(a,t),a=a.next;if(ci!==0){a=Vl,a===null&&(a=Vl=[]);for(var i=0;i<t.length;i++){var l=t[i];a.indexOf(l)===-1&&a.push(l)}}}nd!==null&&nd(e,n)};var fi=pt(null);function Zu(){var e=fi.current;return e!==null?e:nn.pooledCache}function ts(e,n){n===null?Pe(fi,fi.current):Pe(fi,n.pool)}function td(){var e=Zu();return e===null?null:{parent:Sn._currentValue,pool:e}}var Vi=Error(c(460)),Ju=Error(c(474)),as=Error(c(542)),is={then:function(){}};function ad(e){return e=e.status,e==="fulfilled"||e==="rejected"}function id(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(qt,qt),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,rd(e),e===void 0&&!("reason"in n)?Error(c(600)):e;default:if(typeof n.status=="string")n.then(qt,qt);else{if(e=nn,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=n,e.status="pending",e.then(function(a){if(n.status==="pending"){var i=n;i.status="fulfilled",i.value=a}},function(a){if(n.status==="pending"){var i=n;i.status="rejected",i.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,rd(e),e}throw hi=n,Vi}}function di(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(hi=t,Vi):t}}var hi=null;function ld(){if(hi===null)throw Error(c(459));var e=hi;return hi=null,e}function rd(e){if(e===Vi||e===as)throw Error(c(483))}var Ii=null,Ql=0;function ls(e){var n=Ql;return Ql+=1,Ii===null&&(Ii=[]),id(Ii,e,n)}function Ca(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function rs(e,n){throw n.$$typeof===he?Error(c(525)):(e=Object.prototype.toString.call(n),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function sd(e){function n(y,p){if(e){var T=y.deletions;T===null?(y.deletions=[p],y.flags|=16):T.push(p)}}function t(y,p){if(!e)return null;for(;p!==null;)n(y,p),p=p.sibling;return null}function a(y){for(var p=new Map;y!==null;)y.key===null?p.set(y.index,y):p.set(y.key,y),y=y.sibling;return p}function i(y,p){return y=ra(y,p),y.index=0,y.sibling=null,y}function l(y,p,T){return y.index=T,e?(T=y.alternate,T!==null?(T=T.index,T<p?(y.flags|=2,p):T):(y.flags|=134217730,p)):(y.flags|=1048576,p)}function r(y){return e&&y.alternate===null&&(y.flags|=134217730),y}function u(y,p,T,M){return p===null||p.tag!==6?(p=qu(T,y.mode,M),p.return=y,p):(p=i(p,T),p.return=y,p)}function h(y,p,T,M){var P=T.type;return P===Qe?(y=O(y,p,T.props.children,M,T.key),Ca(y,T),y):p!==null&&(p.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===_e&&di(P)===p.type)?(p=i(p,T.props),Ca(p,T),p.return=y,p):(p=Jr(T.type,T.key,T.props,null,y.mode,M),Ca(p,T),p.return=y,p)}function _(y,p,T,M){return p===null||p.tag!==4||p.stateNode.containerInfo!==T.containerInfo||p.stateNode.implementation!==T.implementation?(p=Hu(T,y.mode,M),p.return=y,p):(p=i(p,T.children||[]),p.return=y,p)}function O(y,p,T,M,P){return p===null||p.tag!==7?(p=li(T,y.mode,M,P),p.return=y,p):(p=i(p,T),p.return=y,p)}function C(y,p,T){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return p=qu(""+p,y.mode,T),p.return=y,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Oe:return T=Jr(p.type,p.key,p.props,null,y.mode,T),Ca(T,p),T.return=y,T;case ye:return p=Hu(p,y.mode,T),p.return=y,p;case _e:return p=di(p),C(y,p,T)}if(Ne(p)||J(p))return p=li(p,y.mode,T,null),p.return=y,p;if(typeof p.then=="function")return C(y,ls(p),T);if(p.$$typeof===un)return C(y,ns(y,p),T);rs(y,p)}return null}function v(y,p,T,M){var P=p!==null?p.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return P!==null?null:u(y,p,""+T,M);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Oe:return T.key===P?h(y,p,T,M):null;case ye:return T.key===P?_(y,p,T,M):null;case _e:return T=di(T),v(y,p,T,M)}if(Ne(T)||J(T))return P!==null?null:O(y,p,T,M,null);if(typeof T.then=="function")return v(y,p,ls(T),M);if(T.$$typeof===un)return v(y,p,ns(y,T),M);rs(y,T)}return null}function w(y,p,T,M,P){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return y=y.get(T)||null,u(p,y,""+M,P);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Oe:return y=y.get(M.key===null?T:M.key)||null,h(p,y,M,P);case ye:return y=y.get(M.key===null?T:M.key)||null,_(p,y,M,P);case _e:return M=di(M),w(y,p,T,M,P)}if(Ne(M)||J(M))return y=y.get(T)||null,O(p,y,M,P,null);if(typeof M.then=="function")return w(y,p,T,ls(M),P);if(M.$$typeof===un)return w(y,p,T,ns(p,M),P);rs(p,M)}return null}function V(y,p,T,M){for(var P=null,je=null,le=p,oe=p=0,wn=null;le!==null&&oe<T.length;oe++){le.index>oe?(wn=le,le=null):wn=le.sibling;var Ue=v(y,le,T[oe],M);if(Ue===null){le===null&&(le=wn);break}e&&le&&Ue.alternate===null&&n(y,le),p=l(Ue,p,oe),je===null?P=Ue:je.sibling=Ue,je=Ue,le=wn}if(oe===T.length)return t(y,le),xe&&sa(y,oe),P;if(le===null){for(;oe<T.length;oe++)le=C(y,T[oe],M),le!==null&&(p=l(le,p,oe),je===null?P=le:je.sibling=le,je=le);return xe&&sa(y,oe),P}for(le=a(le);oe<T.length;oe++)wn=w(le,y,oe,T[oe],M),wn!==null&&(e&&(Ue=wn.alternate,Ue!==null&&le.delete(Ue.key===null?oe:Ue.key)),p=l(wn,p,oe),je===null?P=wn:je.sibling=wn,je=wn);return e&&le.forEach(function(Ja){return n(y,Ja)}),xe&&sa(y,oe),P}function ee(y,p,T,M){if(T==null)throw Error(c(151));for(var P=null,je=null,le=p,oe=p=0,wn=null,Ue=T.next();le!==null&&!Ue.done;oe++,Ue=T.next()){le.index>oe?(wn=le,le=null):wn=le.sibling;var Ja=v(y,le,Ue.value,M);if(Ja===null){le===null&&(le=wn);break}e&&le&&Ja.alternate===null&&n(y,le),p=l(Ja,p,oe),je===null?P=Ja:je.sibling=Ja,je=Ja,le=wn}if(Ue.done)return t(y,le),xe&&sa(y,oe),P;if(le===null){for(;!Ue.done;oe++,Ue=T.next())Ue=C(y,Ue.value,M),Ue!==null&&(p=l(Ue,p,oe),je===null?P=Ue:je.sibling=Ue,je=Ue);return xe&&sa(y,oe),P}for(le=a(le);!Ue.done;oe++,Ue=T.next())Ue=w(le,y,oe,Ue.value,M),Ue!==null&&(e&&(wn=Ue.alternate,wn!==null&&le.delete(wn.key===null?oe:wn.key)),p=l(Ue,p,oe),je===null?P=Ue:je.sibling=Ue,je=Ue);return e&&le.forEach(function(j0){return n(y,j0)}),xe&&sa(y,oe),P}function Ee(y,p,T,M){if(typeof T=="object"&&T!==null&&T.type===Qe&&T.key===null&&T.props.ref===void 0&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Oe:e:{for(var P=T.key;p!==null;){if(p.key===P){if(P=T.type,P===Qe){if(p.tag===7){t(y,p.sibling),M=i(p,T.props.children),Ca(M,T),M.return=y,y=M;break e}}else if(p.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===_e&&di(P)===p.type){t(y,p.sibling),M=i(p,T.props),Ca(M,T),M.return=y,y=M;break e}t(y,p);break}else n(y,p);p=p.sibling}T.type===Qe?(M=li(T.props.children,y.mode,M,T.key),Ca(M,T),M.return=y,y=M):(M=Jr(T.type,T.key,T.props,null,y.mode,M),Ca(M,T),M.return=y,y=M)}return r(y);case ye:e:{for(P=T.key;p!==null;){if(p.key===P)if(p.tag===4&&p.stateNode.containerInfo===T.containerInfo&&p.stateNode.implementation===T.implementation){t(y,p.sibling),M=i(p,T.children||[]),M.return=y,y=M;break e}else{t(y,p);break}else n(y,p);p=p.sibling}M=Hu(T,y.mode,M),M.return=y,y=M}return r(y);case _e:return T=di(T),Ee(y,p,T,M)}if(Ne(T))return V(y,p,T,M);if(J(T)){if(P=J(T),typeof P!="function")throw Error(c(150));return T=P.call(T),ee(y,p,T,M)}if(typeof T.then=="function")return Ee(y,p,ls(T),M);if(T.$$typeof===un)return Ee(y,p,ns(y,T),M);rs(y,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,p!==null&&p.tag===6?(t(y,p.sibling),M=i(p,T),M.return=y,y=M):(t(y,p),M=qu(T,y.mode,M),M.return=y,y=M),r(y)):t(y,p)}return function(y,p,T,M){try{Ql=0;var P=Ee(y,p,T,M);return Ii=null,P}catch(le){if(le===Vi||le===as)throw le;var je=nt(29,le,null,y.mode);return je.lanes=M,je.return=y,je}}}var mi=sd(!0),ud=sd(!1),Ra=!1;function Fu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ka(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Da(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ke&2)!==0){var i=a.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n,n=Zr(e),If(e,null,t),n}return Xr(e,a,n,t),Zr(e)}function Xl(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Mt(e,t)}}function Wu(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var r={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};l===null?i=l=r:l=l.next=r,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:a.shared,callbacks:a.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var $u=!1;function Zl(){if($u){var e=Ki;if(e!==null)throw e}}function Jl(e,n,t,a){$u=!1;var i=e.updateQueue;Ra=!1;var l=i.firstBaseUpdate,r=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var h=u,_=h.next;h.next=null,r===null?l=_:r.next=_,r=h;var O=e.alternate;O!==null&&(O=O.updateQueue,u=O.lastBaseUpdate,u!==r&&(u===null?O.firstBaseUpdate=_:u.next=_,O.lastBaseUpdate=h))}if(l!==null){var C=i.baseState;r=0,O=_=h=null,u=l;do{var v=u.lane&-536870913,w=v!==u.lane;if(w?(De&v)===v:(a&v)===v){v!==0&&v===ci&&($u=!0),O!==null&&(O=O.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var V=e,ee=u;v=n;var Ee=t;switch(ee.tag){case 1:if(V=ee.payload,typeof V=="function"){C=V.call(Ee,C,v);break e}C=V;break e;case 3:V.flags=V.flags&-65537|128;case 0:if(V=ee.payload,v=typeof V=="function"?V.call(Ee,C,v):V,v==null)break e;C=ie({},C,v);break e;case 2:Ra=!0}}v=u.callback,v!==null&&(e.flags|=64,w&&(e.flags|=8192),w=i.callbacks,w===null?i.callbacks=[v]:w.push(v))}else w={lane:v,tag:u.tag,payload:u.payload,callback:u.callback,next:null},O===null?(_=O=w,h=C):O=O.next=w,r|=v;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;w=u,u=w.next,w.next=null,i.lastBaseUpdate=w,i.shared.pending=null}}while(!0);O===null&&(h=C),i.baseState=h,i.firstBaseUpdate=_,i.lastBaseUpdate=O,l===null&&(i.shared.lanes=0),Ha|=r,e.lanes=r,e.memoizedState=C}}function od(e,n){if(typeof e!="function")throw Error(c(191,e));e.call(n)}function cd(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)od(t[e],n)}var ja=pt(null),ss=pt(0);function fd(e,n){e=ma,Pe(ss,e),Pe(ja,n),ma=e|n.baseLanes}function eo(){Pe(ss,ma),Pe(ja,ja.current)}function no(){ma=ss.current,Nn(ja),Nn(ss)}var Ln=pt(null),Vn=null;function za(e){var n=e.alternate;Pe(Un,Un.current&1),Pe(Ln,e),Vn===null&&(n===null||ja.current!==null||n.memoizedState!==null)&&(Vn=e)}function to(e){Pe(Un,Un.current),Pe(Ln,e),Vn===null&&(Vn=e)}function dd(e){e.tag===22?(Pe(Un,Un.current),Pe(Ln,e),Vn===null&&(Vn=e)):Ba()}function Ba(){Pe(Un,Un.current),Pe(Ln,Ln.current)}function ot(e){Nn(Ln),Vn===e&&(Vn=null),Nn(Un)}var Un=pt(0);function Fl(e,n){Pe(Ln,Ln.current),Pe(Un,n)}function ao(e){Nn(Un),Nn(Ln),Vn===e&&(Vn=null)}function us(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Nc(t)||xc(t)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ca=0,Te=null,$e=null,Tn=null,os=!1,Qi=!1,pi=!1,cs=0,Pl=0,Xi=null,n1=0;function hn(){throw Error(c(321))}function io(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!ut(e[t],n[t]))return!1;return!0}function lo(e,n,t,a,i,l){return ca=l,Te=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,$.H=e===null||e.memoizedState===null?Jd:Fd,pi=!1,l=t(a,i),pi=!1,Qi&&(l=md(n,t,a,i)),hd(e),l}function hd(e){$.H=bs;var n=$e!==null&&$e.next!==null;if(ca=0,Tn=$e=Te=null,os=!1,Pl=0,Xi=null,n)throw Error(c(300));e===null||En||(e=e.dependencies,e!==null&&es(e)&&(En=!0))}function md(e,n,t,a){Te=e;var i=0;do{if(Qi&&(Xi=null),Pl=0,Qi=!1,25<=i)throw Error(c(301));if(i+=1,Tn=$e=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}$.H=o1,l=n(t,a)}while(Qi);return l}function t1(){var e=$.H,n=e.useState()[0];return n=typeof n.then=="function"?Wl(n):n,e=e.useState()[0],($e!==null?$e.memoizedState:null)!==e&&(Te.flags|=1024),n}function ro(){var e=cs!==0;return cs=0,e}function so(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function uo(e){if(os){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}os=!1}ca=0,Tn=$e=Te=null,Qi=!1,Pl=cs=0,Xi=null}function Qn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tn===null?Te.memoizedState=Tn=e:Tn=Tn.next=e,Tn}function bn(){if($e===null){var e=Te.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var n=Tn===null?Te.memoizedState:Tn.next;if(n!==null)Tn=n,$e=e;else{if(e===null)throw Te.alternate===null?Error(c(467)):Error(c(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Tn===null?Te.memoizedState=Tn=e:Tn=Tn.next=e}return Tn}function fs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wl(e){var n=Pl;return Pl+=1,Xi===null&&(Xi=[]),e=id(Xi,e,n),n=Te,(Tn===null?n.memoizedState:Tn.next)===null&&(n=n.alternate,$.H=n===null||n.memoizedState===null?Jd:Fd),e}function ds(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Wl(e);if(e.$$typeof===D)return;if(e.$$typeof===un)return Bn(e)}throw Error(c(438,String(e)))}function oo(e){var n=null,t=Te.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var a=Te.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(i){return i.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=fs(),Te.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),a=0;a<e;a++)t[a]=rt;return n.index++,t}function fa(e,n){return typeof n=="function"?n(e):n}function hs(e){var n=bn();return co(n,$e,e)}function co(e,n,t){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=t;var i=e.baseQueue,l=a.pending;if(l!==null){if(i!==null){var r=i.next;i.next=l.next,l.next=r}n.baseQueue=i=l,a.pending=null}if(l=e.baseState,i===null)e.memoizedState=l;else{n=i.next;var u=r=null,h=null,_=n,O=!1;do{var C=_.lane&-536870913;if(C!==_.lane?(De&C)===C:(ca&C)===C){var v=_.revertLane;if(v===0)h!==null&&(h=h.next={lane:0,revertLane:0,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),C===ci&&(O=!0);else if((ca&v)===v){_=_.next,v===ci&&(O=!0);continue}else C={lane:0,revertLane:_.revertLane,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},h===null?(u=h=C,r=l):h=h.next=C,Te.lanes|=v,Ha|=v;C=_.action,pi&&t(l,C),l=_.hasEagerState?_.eagerState:t(l,C)}else v={lane:C,revertLane:_.revertLane,gesture:_.gesture,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},h===null?(u=h=v,r=l):h=h.next=v,Te.lanes|=C,Ha|=C;_=_.next}while(_!==null&&_!==n);if(h===null?r=l:h.next=u,!ut(l,e.memoizedState)&&(En=!0,O&&(t=Ki,t!==null)))throw t;e.memoizedState=l,e.baseState=r,e.baseQueue=h,a.lastRenderedState=l}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function fo(e){var n=bn(),t=n.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var a=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var r=i=i.next;do l=e(l,r.action),r=r.next;while(r!==i);ut(l,n.memoizedState)||(En=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,a]}function pd(e,n,t){var a=Te,i=bn(),l=xe;if(l){if(t===void 0)throw Error(c(407));t=t()}else t=n();var r=!ut(($e||i).memoizedState,t);if(r&&(i.memoizedState=t,En=!0),i=i.queue,po(vd.bind(null,a,i,e),[e]),e=i.getSnapshot!==n||r||Tn!==null&&(Tn.memoizedState.tag&1)!==0,Zi(e?9:8,{destroy:void 0},bd.bind(null,a,i,t,n),null),e){if(a.flags|=2048,nn===null)throw Error(c(349));l||(ca&127)!==0||gd(a,n,t)}return t}function gd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Te.updateQueue,n===null?(n=fs(),Te.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function bd(e,n,t,a){n.value=t,n.getSnapshot=a,yd(n)&&_d(e)}function vd(e,n,t){return t(function(){yd(n)&&_d(e)})}function yd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!ut(e,t)}catch{return!0}}function _d(e){var n=ii(e,2);n!==null&&lt(n,e,2)}function ho(e){var n=Qn();if(typeof e=="function"){var t=e;if(e=t(),pi){F(!0);try{t()}finally{F(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:e},n}function Sd(e,n,t,a){return e.baseState=t,co(e,$e,typeof a=="function"?a:fa)}function a1(e,n,t,a,i){if(gs(e))throw Error(c(485));if(e=n.action,e!==null){var l={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){l.listeners.push(r)}};$.T!==null?t(!0):l.isTransition=!1,a(l),t=n.pending,t===null?(l.next=n.pending=l,Td(n,l)):(l.next=t.next,n.pending=t.next=l)}}function Td(e,n){var t=n.action,a=n.payload,i=e.state;if(n.isTransition){var l=$.T,r={};r.types=l!==null?l.types:null,$.T=r;try{var u=t(i,a),h=$.S;h!==null&&h(r,u),Ed(e,n,u)}catch(_){mo(e,n,_)}finally{l!==null&&r.types!==null&&(l.types=r.types),$.T=l}}else try{l=t(i,a),Ed(e,n,l)}catch(_){mo(e,n,_)}}function Ed(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){wd(e,n,a)},function(a){return mo(e,n,a)}):wd(e,n,t)}function wd(e,n,t){n.status="fulfilled",n.value=t,Od(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,Td(e,t)))}function mo(e,n,t){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=t,Od(n),n=n.next;while(n!==a)}e.action=null}function Od(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Nd(e,n){return n}function xd(e,n){if(xe){var t=nn.formState;if(t!==null){e:{var a=Te;if(xe){if(an){n:{for(var i=an,l=Et;i.nodeType!==8;){if(!l){i=null;break n}if(i=Ot(i.nextSibling),i===null){i=null;break n}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){an=Ot(i.nextSibling),a=i.data==="F!";break e}}Aa(a)}a=!1}a&&(n=t[0])}}return t=Qn(),t.memoizedState=t.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nd,lastRenderedState:n},t.queue=a,t=Qd.bind(null,Te,a),a.dispatch=t,a=ho(!1),l=_o.bind(null,Te,!1,a.queue),a=Qn(),i={state:n,dispatch:null,action:e,pending:null},a.queue=i,t=a1.bind(null,Te,i,l,t),i.dispatch=t,a.memoizedState=e,[n,t,!1]}function Ad(e){var n=bn();return Md(n,$e,e)}function Md(e,n,t){if(n=co(e,n,Nd)[0],e=hs(fa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var a=Wl(n)}catch(r){throw r===Vi?as:r}else a=n;n=bn();var i=n.queue,l=i.dispatch;return t!==n.memoizedState&&(Te.flags|=2048,Zi(9,{destroy:void 0},i1.bind(null,i,t),null)),[a,l,e]}function i1(e,n){e.action=n}function Cd(e){var n=bn(),t=$e;if(t!==null)return Md(n,t,e);bn(),n=n.memoizedState,t=bn();var a=t.queue.dispatch;return t.memoizedState=e,[n,a,!1]}function Zi(e,n,t,a){return e={tag:e,create:t,deps:a,inst:n,next:null},n=Te.updateQueue,n===null&&(n=fs(),Te.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e),e}function Rd(){return bn().memoizedState}function ms(e,n,t,a){var i=Qn();Te.flags|=e,i.memoizedState=Zi(1|n,{destroy:void 0},t,a===void 0?null:a)}function ps(e,n,t,a){var i=bn();a=a===void 0?null:a;var l=i.memoizedState.inst;$e!==null&&a!==null&&io(a,$e.memoizedState.deps)?i.memoizedState=Zi(n,l,t,a):(Te.flags|=e,i.memoizedState=Zi(1|n,l,t,a))}function kd(e,n){ms(8390656,8,e,n)}function po(e,n){ps(2048,8,e,n)}function l1(e){Te.flags|=4;var n=Te.updateQueue;if(n===null)n=fs(),Te.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function Dd(e){var n=bn().memoizedState;return l1({ref:n,nextImpl:e}),function(){if((Ke&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}function jd(e,n){return ps(4,2,e,n)}function zd(e,n){return ps(4,4,e,n)}function Bd(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ld(e,n,t){t=t!=null?t.concat([e]):null,ps(4,4,Bd.bind(null,n,e),t)}function go(){}function Ud(e,n){var t=bn();n=n===void 0?null:n;var a=t.memoizedState;return n!==null&&io(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function qd(e,n){var t=bn();n=n===void 0?null:n;var a=t.memoizedState;if(n!==null&&io(n,a[1]))return a[0];if(a=e(),pi){F(!0);try{e()}finally{F(!1)}}return t.memoizedState=[a,n],a}function bo(e,n,t){return t===void 0||(ca&1073741824)!==0&&(De&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=Jh(),Te.lanes|=e,Ha|=e,t)}function Hd(e,n,t,a){return ut(t,n)?t:ja.current!==null?(e=bo(e,t,a),ut(e,n)||(En=!0),e):(ca&106)===0||(ca&1073741824)!==0&&(De&261930)===0?(En=!0,e.memoizedState=t):(e=Jh(),Te.lanes|=e,Ha|=e,n)}function Yd(e,n,t,a,i){var l=ue.p;ue.p=l!==0&&8>l?l:8;var r=$.T,u={};u.types=r!==null?r.types:null,$.T=u,_o(e,!1,n,t);try{var h=i(),_=$.S;if(_!==null&&_(u,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var O=e1(h,a);$l(e,n,O,ht(e))}else $l(e,n,a,ht(e))}catch(C){$l(e,n,{then:function(){},status:"rejected",reason:C},ht())}finally{ue.p=l,r!==null&&u.types!==null&&(r.types=u.types),$.T=r}}function r1(){}function vo(e,n,t,a){if(e.tag!==5)throw Error(c(476));var i=Gd(e).queue;Yd(e,i,n,Fn,t===null?r1:function(){return Kd(e),t(a)})}function Gd(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Fn,baseState:Fn,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:Fn},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Kd(e){var n=Gd(e);n.next===null&&(n=e.alternate.memoizedState),$l(e,n.next.queue,{},ht())}function yo(){return Bn(hl)}function Vd(){return bn().memoizedState}function Id(){return bn().memoizedState}function s1(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=ht();e=ka(t);var a=Da(n,e,t);a!==null&&(lt(a,n,t),Xl(a,n,t)),n={cache:Qu()},e.payload=n;return}n=n.return}}function u1(e,n,t){var a=ht();t={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},gs(e)?Xd(n,t):(t=Lu(e,n,t,a),t!==null&&(lt(t,e,a),Zd(t,n,a)))}function Qd(e,n,t){var a=ht();$l(e,n,t,a)}function $l(e,n,t,a){var i={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(gs(e))Xd(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var r=n.lastRenderedState,u=l(r,t);if(i.hasEagerState=!0,i.eagerState=u,ut(u,r))return Xr(e,n,i,0),nn===null&&Qr(),!1}catch{}if(t=Lu(e,n,i,a),t!==null)return lt(t,e,a),Zd(t,n,a),!0}return!1}function _o(e,n,t,a){if(a={lane:2,revertLane:cc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},gs(e)){if(n)throw Error(c(479))}else n=Lu(e,t,a,2),n!==null&&lt(n,e,2)}function gs(e){var n=e.alternate;return e===Te||n!==null&&n===Te}function Xd(e,n){Qi=os=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Zd(e,n,t){if((t&4194048)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Mt(e,t)}}var bs={readContext:Bn,use:ds,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useLayoutEffect:hn,useInsertionEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useSyncExternalStore:hn,useId:hn,useHostTransitionStatus:hn,useFormState:hn,useActionState:hn,useOptimistic:hn,useMemoCache:hn,useCacheRefresh:hn,useEffectEvent:hn},Jd={readContext:Bn,use:ds,useCallback:function(e,n){return Qn().memoizedState=[e,n===void 0?null:n],e},useContext:Bn,useEffect:kd,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,ms(4194308,4,Bd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return ms(4194308,4,e,n)},useInsertionEffect:function(e,n){ms(4,2,e,n)},useMemo:function(e,n){var t=Qn();n=n===void 0?null:n;var a=e();if(pi){F(!0);try{e()}finally{F(!1)}}return t.memoizedState=[a,n],a},useReducer:function(e,n,t){var a=Qn();if(t!==void 0){var i=t(n);if(pi){F(!0);try{t(n)}finally{F(!1)}}}else i=n;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=u1.bind(null,Te,e),[a.memoizedState,e]},useRef:function(e){var n=Qn();return e={current:e},n.memoizedState=e},useState:function(e){e=ho(e);var n=e.queue,t=Qd.bind(null,Te,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:go,useDeferredValue:function(e,n){var t=Qn();return bo(t,e,n)},useTransition:function(){var e=ho(!1);return e=Yd.bind(null,Te,e.queue,!0,!1),Qn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var a=Te,i=Qn();if(xe){if(t===void 0)throw Error(c(407));t=t()}else{if(t=n(),nn===null)throw Error(c(349));(De&127)!==0||gd(a,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,kd(vd.bind(null,a,l,e),[e]),a.flags|=2048,Zi(9,{destroy:void 0},bd.bind(null,a,l,t,n),null),t},useId:function(){var e=Qn(),n=nn.identifierPrefix;if(xe){var t=Yt,a=Ht;t=(a&~(1<<32-K(a)-1)).toString(32)+t,n="_"+n+"R_"+t,t=cs++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=n1++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:yo,useFormState:xd,useActionState:xd,useOptimistic:function(e){var n=Qn();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=_o.bind(null,Te,!0,t),t.dispatch=n,[e,n]},useMemoCache:oo,useCacheRefresh:function(){return Qn().memoizedState=s1.bind(null,Te)},useEffectEvent:function(e){var n=Qn(),t={impl:e};return n.memoizedState=t,function(){if((Ke&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}},Fd={readContext:Bn,use:ds,useCallback:Ud,useContext:Bn,useEffect:po,useImperativeHandle:Ld,useInsertionEffect:jd,useLayoutEffect:zd,useMemo:qd,useReducer:hs,useRef:Rd,useState:function(){return hs(fa)},useDebugValue:go,useDeferredValue:function(e,n){var t=bn();return Hd(t,$e.memoizedState,e,n)},useTransition:function(){var e=hs(fa)[0],n=bn().memoizedState;return[typeof e=="boolean"?e:Wl(e),n]},useSyncExternalStore:pd,useId:Vd,useHostTransitionStatus:yo,useFormState:Ad,useActionState:Ad,useOptimistic:function(e,n){var t=bn();return Sd(t,$e,e,n)},useMemoCache:oo,useCacheRefresh:Id,useEffectEvent:Dd},o1={readContext:Bn,use:ds,useCallback:Ud,useContext:Bn,useEffect:po,useImperativeHandle:Ld,useInsertionEffect:jd,useLayoutEffect:zd,useMemo:qd,useReducer:fo,useRef:Rd,useState:function(){return fo(fa)},useDebugValue:go,useDeferredValue:function(e,n){var t=bn();return $e===null?bo(t,e,n):Hd(t,$e.memoizedState,e,n)},useTransition:function(){var e=fo(fa)[0],n=bn().memoizedState;return[typeof e=="boolean"?e:Wl(e),n]},useSyncExternalStore:pd,useId:Vd,useHostTransitionStatus:yo,useFormState:Cd,useActionState:Cd,useOptimistic:function(e,n){var t=bn();return $e!==null?Sd(t,$e,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:oo,useCacheRefresh:Id,useEffectEvent:Dd};function So(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:ie({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var To={enqueueSetState:function(e,n,t){e=e._reactInternals;var a=ht(),i=ka(a);i.payload=n,t!=null&&(i.callback=t),n=Da(e,i,a),n!==null&&(lt(n,e,a),Xl(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=ht(),i=ka(a);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Da(e,i,a),n!==null&&(lt(n,e,a),Xl(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ht(),a=ka(t);a.tag=2,n!=null&&(a.callback=n),n=Da(e,a,t),n!==null&&(lt(n,e,t),Xl(n,e,t))}};function Pd(e,n,t,a,i,l,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,l,r):n.prototype&&n.prototype.isPureReactComponent?!ql(t,a)||!ql(i,l):!0}function Wd(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&To.enqueueReplaceState(n,n.state,null)}function gi(e,n){var t=n;if("ref"in n){t={};for(var a in n)a!=="ref"&&(t[a]=n[a])}if(e=e.defaultProps){t===n&&(t=ie({},t));for(var i in e)t[i]===void 0&&(t[i]=e[i])}return t}function $d(e){Ir(e)}function eh(e){console.error(e)}function nh(e){Ir(e)}function vs(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function th(e,n,t){try{var a=e.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Eo(e,n,t){return t=ka(t),t.tag=3,t.payload={element:null},t.callback=function(){vs(e,n)},t}function ah(e){return e=ka(e),e.tag=3,e}function ih(e,n,t,a){var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var l=a.value;e.payload=function(){return i(l)},e.callback=function(){th(n,t,a)}}var r=t.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){th(n,t,a),typeof i!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var u=a.stack;this.componentDidCatch(a.value,{componentStack:u!==null?u:""})})}function c1(e,n,t,a,i){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=t.alternate,n!==null&&ui(n,t,i,!0),t=Ln.current,t!==null){switch(t.tag){case 31:case 13:case 19:return Vn===null?qs():t.alternate===null&&mn===0&&(mn=3),t.flags&=-257,t.flags|=65536,t.lanes=i,a===is?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([a]):n.add(a),sc(e,a,i)),!1;case 22:return t.flags|=65536,a===is?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([a]):t.add(a)),sc(e,a,i)),!1}throw Error(c(435,t.tag))}return sc(e,a,i),qs(),!1}if(xe)return n=Ln.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=i,a!==Gu&&(e=Error(c(422),{cause:a}),Gl(_t(e,t)))):(a!==Gu&&(n=Error(c(423),{cause:a}),Gl(_t(n,t))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=_t(a,t),i=Eo(e.stateNode,a,i),Wu(e,i),mn!==4&&(mn=2)),!1;var l=Error(c(520),{cause:a});if(l=_t(l,t),sr===null?sr=[l]:sr.push(l),mn!==4&&(mn=2),n===null)return!0;a=_t(a,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=i&-i,t.lanes|=e,e=Eo(t.stateNode,a,e),Wu(t,e),!1;case 1:if(n=t.type,l=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(Ya===null||!Ya.has(l))))return t.flags|=65536,i&=-i,t.lanes|=i,i=ah(i),ih(i,e,t,a),Wu(t,i),!1;break;case 22:if(t.memoizedState!==null)return t.flags|=65536,!1}t=t.return}while(t!==null);return!1}var wo=Error(c(461)),En=!1;function An(e,n,t,a){n.child=e===null?ud(n,null,t,a):mi(n,e.child,t,a)}function lh(e,n,t,a,i){t=t.render;var l=n.ref;if("ref"in a){var r={};for(var u in a)u!=="ref"&&(r[u]=a[u])}else r=a;return oi(n),a=lo(e,n,t,r,l,i),u=ro(),e!==null&&!En?(so(e,n,i),da(e,n,i)):(xe&&u&&Pr(n),n.flags|=1,An(e,n,a,i),n.child)}function rh(e,n,t,a,i){if(e===null){var l=t.type;return typeof l=="function"&&!Uu(l)&&l.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=l,sh(e,n,l,a,i)):(e=Jr(t.type,null,a,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!ko(e,i)){var r=l.memoizedProps;if(t=t.compare,t=t!==null?t:ql,t(r,a)&&e.ref===n.ref)return da(e,n,i)}return n.flags|=1,e=ra(l,a),e.ref=n.ref,e.return=n,n.child=e}function sh(e,n,t,a,i){if(e!==null){var l=e.memoizedProps;if(ql(l,a)&&e.ref===n.ref)if(En=!1,n.pendingProps=a=l,ko(e,i))(e.flags&131072)!==0&&(En=!0);else return n.lanes=e.lanes,da(e,n,i)}return Oo(e,n,t,a,i)}function uh(e,n,t,a){var i=a.children,l=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((n.flags&128)!==0){if(l=l!==null?l.baseLanes|t:t,e!==null){for(a=n.child=e.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;a=i&~l}else a=0,n.child=null;return oh(e,n,l,t,a)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ts(n,l!==null?l.cachePool:null),l!==null?fd(n,l):eo(),dd(n);else return a=n.lanes=536870912,oh(e,n,l!==null?l.baseLanes|t:t,t,a)}else l!==null?(ts(n,l.cachePool),fd(n,l),Ba(),n.memoizedState=null):(e!==null&&ts(n,null),eo(),Ba());return An(e,n,i,t),n.child}function er(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function oh(e,n,t,a,i){var l=Zu();return l=l===null?null:{parent:Sn._currentValue,pool:l},n.memoizedState={baseLanes:t,cachePool:l},e!==null&&ts(n,null),eo(),dd(n),e!==null&&ui(e,n,a,!0),n.childLanes=i,null}function ys(e,n){return n=_s({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function ch(e,n,t){return mi(n,e.child,null,t),e=ys(n,n.pendingProps),e.flags|=2,ot(n),n.memoizedState=null,e}function f1(e,n,t){var a=n.pendingProps,i=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(xe){if(a.mode==="hidden")return e=ys(n,a),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},er(null,e);if(to(n),(e=an)?(e=Bm(e,Et),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Na!==null?{id:Ht,overflow:Yt}:null,retryLane:536870912,hydrationErrors:null},t=Xf(e),t.return=n,n.child=t,Rn=n,an=null)):e=null,e===null)throw Aa(n);return n.lanes=536870912,null}return ys(n,a)}var l=e.memoizedState;if(l!==null){var r=l.dehydrated;if(to(n),i)if(n.flags&256)n.flags&=-257,n=ch(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(c(558));else if(En||ui(e,n,t,!1),i=(t&e.childLanes)!==0,En||i){if(ja.current===null){if(a=nn,a!==null&&(r=Ml(a,t),r!==0&&r!==l.retryLane))throw l.retryLane=r,ii(e,r),lt(a,e,r),wo;qs()}n=ch(e,n,t)}else e=l.treeContext,an=Ot(r.nextSibling),Rn=n,xe=!0,xa=null,Et=!1,e!==null&&Ff(n,e),n=ys(n,a),n.flags|=134221824;return n}return e=ra(e.child,{mode:a.mode,children:a.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ji(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(c(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function Oo(e,n,t,a,i){return oi(n),t=lo(e,n,t,a,void 0,i),a=ro(),e!==null&&!En?(so(e,n,i),da(e,n,i)):(xe&&a&&Pr(n),n.flags|=1,An(e,n,t,i),n.child)}function fh(e,n,t,a,i,l){return oi(n),n.updateQueue=null,t=md(n,a,t,i),hd(e),a=ro(),e!==null&&!En?(so(e,n,l),da(e,n,l)):(xe&&a&&Pr(n),n.flags|=1,An(e,n,t,l),n.child)}function dh(e,n,t,a,i){if(oi(n),n.stateNode===null){var l=qi,r=t.contextType;typeof r=="object"&&r!==null&&(l=Bn(r)),l=new t(a,l),n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=To,n.stateNode=l,l._reactInternals=n,l=n.stateNode,l.props=a,l.state=n.memoizedState,l.refs={},Fu(n),r=t.contextType,l.context=typeof r=="object"&&r!==null?Bn(r):qi,l.state=n.memoizedState,r=t.getDerivedStateFromProps,typeof r=="function"&&(So(n,t,r,a),l.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(r=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),r!==l.state&&To.enqueueReplaceState(l,l.state,null),Jl(n,a,l,i),Zl(),l.state=n.memoizedState),typeof l.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(e===null){l=n.stateNode;var u=n.memoizedProps,h=gi(t,u);l.props=h;var _=l.context,O=t.contextType;r=qi,typeof O=="object"&&O!==null&&(r=Bn(O));var C=t.getDerivedStateFromProps;O=typeof C=="function"||typeof l.getSnapshotBeforeUpdate=="function",u=n.pendingProps!==u,O||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u||_!==r)&&Wd(n,l,a,r),Ra=!1;var v=n.memoizedState;l.state=v,Jl(n,a,l,i),Zl(),_=n.memoizedState,u||v!==_||Ra?(typeof C=="function"&&(So(n,t,C,a),_=n.memoizedState),(h=Ra||Pd(n,t,h,a,v,_,r))?(O||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=_),l.props=a,l.state=_,l.context=r,a=h):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{l=n.stateNode,Pu(e,n),r=n.memoizedProps,O=gi(t,r),l.props=O,C=n.pendingProps,v=l.context,_=t.contextType,h=qi,typeof _=="object"&&_!==null&&(h=Bn(_)),u=t.getDerivedStateFromProps,(_=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(r!==C||v!==h)&&Wd(n,l,a,h),Ra=!1,v=n.memoizedState,l.state=v,Jl(n,a,l,i),Zl();var w=n.memoizedState;r!==C||v!==w||Ra||e!==null&&e.dependencies!==null&&es(e.dependencies)?(typeof u=="function"&&(So(n,t,u,a),w=n.memoizedState),(O=Ra||Pd(n,t,O,a,v,w,h)||e!==null&&e.dependencies!==null&&es(e.dependencies))?(_||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,w,h),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,w,h)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||r===e.memoizedProps&&v===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&v===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=w),l.props=a,l.state=w,l.context=h,a=O):(typeof l.componentDidUpdate!="function"||r===e.memoizedProps&&v===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&v===e.memoizedState||(n.flags|=1024),a=!1)}return l=a,Ji(e,n),a=(n.flags&128)!==0,l||a?(l=n.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:l.render(),n.flags|=1,e!==null&&a?(n.child=mi(n,e.child,null,i),n.child=mi(n,null,t,i)):An(e,n,t,i),n.memoizedState=l.state,e=n.child):e=da(e,n,i),e}function hh(e,n,t,a){return ri(),n.flags|=256,An(e,n,t,a),n.child}var No={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xo(e){return{baseLanes:e,cachePool:td()}}function Ao(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=dt),e}function mh(e,n,t){var a=n.pendingProps,i=!1,l=(n.flags&128)!==0,r;if((r=l)||(r=e!==null&&e.memoizedState===null?!1:(Un.current&2)!==0),r&&(i=!0,n.flags&=-129),r=(n.flags&32)!==0,n.flags&=-33,e===null){if(xe){if(i?za(n):Ba(),(e=an)?(e=Bm(e,Et),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Na!==null?{id:Ht,overflow:Yt}:null,retryLane:536870912,hydrationErrors:null},t=Xf(e),t.return=n,n.child=t,Rn=n,an=null)):e=null,e===null)throw Aa(n);return xc(e)?n.lanes=32:n.lanes=536870912,null}return l=a.children,a=a.fallback,i?(Ba(),i=n.mode,l=_s({mode:"hidden",children:l},i),a=li(a,i,t,null),l.return=n,a.return=n,l.sibling=a,n.child=l,a=n.child,a.memoizedState=xo(t),a.childLanes=Ao(e,r,t),n.memoizedState=No,er(null,a)):(za(n),Mo(n,l))}var u=e.memoizedState;if(u!==null){var h=u.dehydrated;if(h!==null)return d1(e,n,l,r,a,h,u,t)}return i?(Ba(),i=a.fallback,l=n.mode,u=e.child,h=u.sibling,a=ra(u,{mode:"hidden",children:a.children}),a.subtreeFlags=u.subtreeFlags&1206910976,h!==null?i=ra(h,i):(i=li(i,l,t,null),i.flags|=2),i.return=n,a.return=n,a.sibling=i,n.child=a,er(null,a),a=n.child,i=e.child.memoizedState,i===null?i=xo(t):(l=i.cachePool,l!==null?(u=Sn._currentValue,l=l.parent!==u?{parent:u,pool:u}:l):l=td(),i={baseLanes:i.baseLanes|t,cachePool:l}),a.memoizedState=i,a.childLanes=Ao(e,r,t),n.memoizedState=No,er(e.child,a)):(za(n),t=e.child,e=t.sibling,t=ra(t,{mode:"visible",children:a.children}),t.return=n,t.sibling=null,e!==null&&(r=n.deletions,r===null?(n.deletions=[e],n.flags|=16):r.push(e)),n.child=t,n.memoizedState=null,t)}function Mo(e,n){return n=_s({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function _s(e,n){return e=nt(22,e,null,n),e.lanes=0,e}function Ss(e,n,t){return mi(n,e.child,null,t),e=Mo(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function d1(e,n,t,a,i,l,r,u){if(t)return n.flags&256?(za(n),n.flags&=-257,Ss(e,n,u)):n.memoizedState!==null?(Ba(),n.child=e.child,n.flags|=128,null):(Ba(),l=i.fallback,r=n.mode,i=_s({mode:"visible",children:i.children},r),l=li(l,r,u,null),l.flags|=2,i.return=n,l.return=n,i.sibling=l,n.child=i,mi(n,e.child,null,u),i=n.child,i.memoizedState=xo(u),i.childLanes=Ao(e,a,u),n.memoizedState=No,er(null,i));if(za(n),xc(l)){if(a=l.nextSibling&&l.nextSibling.dataset,a)var h=a.dgst;return a=h,a!==""&&(i=Error(c(419)),i.stack="",i.digest=a,Gl({value:i,source:null,stack:null})),Ss(e,n,u)}if(En||ui(e,n,u,!1),a=(u&e.childLanes)!==0,En||a){if(ja.current!==null)return Ss(e,n,u);if(a=nn,a!==null&&(i=Ml(a,u),i!==0&&i!==r.retryLane))throw r.retryLane=i,ii(e,i),lt(a,e,i),wo;return Nc(l)||qs(),Ss(e,n,u)}return Nc(l)?(n.flags|=192,n.child=e.child,null):(e=r.treeContext,an=Ot(l.nextSibling),Rn=n,xe=!0,xa=null,Et=!1,e!==null&&Ff(n,e),n=Mo(n,i.children),n.flags|=134221824,n)}function ph(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),$r(e.return,n,t)}function gh(e){for(var n=null;e!==null;){var t=e.alternate;t!==null&&us(t)===null&&(n=e),e=e.sibling}return n}function Ts(e,n,t,a,i,l){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:i,treeForkCount:l}:(r.isBackwards=n,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=t,r.tailMode=i,r.treeForkCount=l)}function Co(e){var n=e.child;for(e.child=null;n!==null;){var t=n.sibling;n.sibling=e.child,e.child=n,n=t}}function Ro(e,n,t){var a=n.pendingProps,i=a.revealOrder,l=a.tail;a=a.children;var r=Un.current;if(n.flags&128)return Fl(n,r),null;var u=(r&2)!==0;if(u?(r=r&1|2,n.flags|=128):r&=1,Fl(n,r),i==="backwards"&&e!==null?(Co(e),An(e,n,a,t),Co(e)):An(e,n,a,t),a=xe?Yl:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ph(e,t,n);else if(e.tag===19)ph(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"backwards":t=gh(n.child),t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null,Co(n)),Ts(n,!0,i,null,l,a);break;case"unstable_legacy-backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&us(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Ts(n,!0,t,null,l,a);break;case"together":Ts(n,!1,null,null,void 0,a);break;case"independent":n.memoizedState=null;break;default:t=gh(n.child),t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Ts(n,!1,i,t,l,a)}return n.child}function bh(e,n,t){var a=n.pendingProps;return Ma(n,n.type,a.value),An(e,n,a.children,t),n.child}function da(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Ha|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(ui(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(c(153));if(n.child!==null){for(e=n.child,t=ra(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=ra(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function ko(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&es(e)))}function h1(e,n,t){switch(n.tag){case 3:$a(n,n.stateNode.containerInfo),Ma(n,Sn,e.memoizedState.cache),ri();break;case 27:case 5:Ni(n);break;case 4:$a(n,n.stateNode.containerInfo);break;case 10:Ma(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,to(n),null;break;case 13:var a=n.memoizedState;if(a!==null){if(a.dehydrated!==null)return za(n),n.flags|=128,null;a=ui(e,n,t,!1);var i=n.child.childLanes;return a||(t&i)!==0?mh(e,n,t):(za(n),e=da(e,n,t),e!==null?e.sibling:null)}za(n);break;case 19:if(n.flags&128)return Ro(e,n,t);if(i=(e.flags&128)!==0,a=(t&n.childLanes)!==0,a||(ui(e,n,t,!1),a=(t&n.childLanes)!==0),i){if(a)return Ro(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Fl(n,Un.current),a)break;return null;case 22:return n.lanes=0,uh(e,n,t,n.pendingProps);case 24:Ma(n,Sn,e.memoizedState.cache)}return da(e,n,t)}function vh(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)En=!0;else{if(!ko(e,t)&&(n.flags&128)===0)return En=!1,h1(e,n,t);En=(e.flags&131072)!==0}else En=!1,xe&&(n.flags&1048576)!==0&&Jf(n,Yl,n.index);switch(n.lanes=0,n.tag){case 16:e:{var a=n.pendingProps;if(e=di(n.elementType),n.type=e,typeof e=="function")Uu(e)?(a=gi(e,a),n.tag=1,n=dh(null,n,e,a,t)):(n.tag=0,n=Oo(null,n,e,a,t));else{if(e!=null){var i=e.$$typeof;if(i===G){n.tag=11,n=lh(null,n,e,a,t);break e}else if(i===Ae){n.tag=14,n=rh(null,n,e,a,t);break e}else if(i===un){n.tag=10,n.type=e,n=bh(null,n,t);break e}}throw n=Ce(e)||e,Error(c(306,n,""))}}return n;case 0:return Oo(e,n,n.type,n.pendingProps,t);case 1:return a=n.type,i=gi(a,n.pendingProps),dh(e,n,a,i,t);case 3:e:{if($a(n,n.stateNode.containerInfo),e===null)throw Error(c(387));a=n.pendingProps;var l=n.memoizedState;i=l.element,Pu(e,n),Jl(n,a,null,t);var r=n.memoizedState;if(a=r.cache,Ma(n,Sn,a),a!==l.cache&&Iu(n,[Sn],t,!0),Zl(),a=r.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:r.cache},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){n=hh(e,n,a,t);break e}else if(a!==i){i=_t(Error(c(424)),n),Gl(i),n=hh(e,n,a,t);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,an=Ot(e.firstChild),Rn=n,xe=!0,xa=null,Et=!0,t=ud(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|134221824,t=t.sibling;else{if(ri(),a===i){n=da(e,n,t);break e}An(e,n,a,t)}n=n.child}return n;case 26:return Ji(e,n),e===null?(t=Km(n.type,null,n.pendingProps,null))?n.memoizedState=t:xe||(n.stateNode=Tm(n.type,n.pendingProps,Bt.current,n)):n.memoizedState=Km(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ni(n),e===null&&xe&&(a=n.stateNode=qm(n.type,n.pendingProps,Bt.current),Rn=n,Et=!0,i=an,Va(n.type)?(Ac=i,an=Ot(a.firstChild)):an=i),An(e,n,n.pendingProps.children,t),Ji(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&xe&&((i=a=an)&&(a=s0(a,n.type,n.pendingProps,Et),a!==null?(n.stateNode=a,Rn=n,an=Ot(a.firstChild),Et=!1,i=!0):i=!1),i||Aa(n)),Ni(n),i=n.type,l=n.pendingProps,r=e!==null?e.memoizedProps:null,a=l.children,yc(i,l)?a=null:r!==null&&yc(i,r)&&(n.flags|=32),n.memoizedState!==null&&(i=lo(e,n,t1,null,null,t),hl._currentValue=i),Ji(e,n),An(e,n,a,t),n.child;case 6:return e===null&&xe&&((e=t=an)&&(t=u0(t,n.pendingProps,Et),t!==null?(n.stateNode=t,Rn=n,an=null,e=!0):e=!1),e||Aa(n)),null;case 13:return mh(e,n,t);case 4:return $a(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=mi(n,null,a,t):An(e,n,a,t),n.child;case 11:return lh(e,n,n.type,n.pendingProps,t);case 7:return a=n.pendingProps,Ji(e,n),An(e,n,a,t),n.child;case 8:return An(e,n,n.pendingProps.children,t),n.child;case 12:return An(e,n,n.pendingProps.children,t),n.child;case 10:return bh(e,n,t);case 9:return i=n.type._context,a=n.pendingProps.children,oi(n),i=Bn(i),a=a(i),n.flags|=1,An(e,n,a,t),n.child;case 14:return rh(e,n,n.type,n.pendingProps,t);case 15:return sh(e,n,n.type,n.pendingProps,t);case 19:return Ro(e,n,t);case 31:return f1(e,n,t);case 22:return uh(e,n,t,n.pendingProps);case 24:return oi(n),a=Bn(Sn),e===null?(i=Zu(),i===null&&(i=nn,l=Qu(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=t),i=l),n.memoizedState={parent:a,cache:i},Fu(n),Ma(n,Sn,i)):((e.lanes&t)!==0&&(Pu(e,n),Jl(n,null,null,t),Zl()),i=e.memoizedState,l=n.memoizedState,i.parent!==a?(i={parent:a,cache:a},n.memoizedState=i,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=i),Ma(n,Sn,a)):(a=l.cache,Ma(n,Sn,a),a!==i.cache&&Iu(n,[Sn],t,!0))),An(e,n,n.pendingProps.children,t),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),a=n.pendingProps,a.name!=null&&a.name!=="auto"?n.flags|=e===null?18882560:18874368:xe&&Pr(n),e!==null&&e.memoizedProps.name!==a.name?n.flags|=4194816:Ji(e,n),An(e,n,a.children,t),n.child;case 29:throw n.pendingProps}throw Error(c(156,n.tag))}function ha(e){e.flags|=4}function Do(e,n,t,a,i){var l;if((l=(e.mode&32)!==0)&&(l=t===null?Xm(n,a):Xm(n,a)&&(a.src!==t.src||a.srcSet!==t.srcSet)),l){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if($h())e.flags|=8192;else throw hi=is,Ju}else e.flags&=-16777217}function yh(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Zm(n))if($h())e.flags|=8192;else throw hi=is,Ju}function Es(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Al():536870912,e.lanes|=n,el|=n)}function nr(e,n){if(!xe)switch(e.tailMode){case"visible":break;case"collapsed":for(var t=e.tail,a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null;break;default:for(n=e.tail,t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null}}function ln(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags&1206910976,a|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function m1(e,n,t){var a=n.pendingProps;switch(Yu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(n),null;case 1:return ln(n),null;case 3:return t=n.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),oa(Sn),Pn(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Gi(n)?ha(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ku())),ln(n),null;case 26:var i=n.type,l=n.memoizedState;return e===null?(ha(n),l!==null?(ln(n),yh(n,l)):(ln(n),Do(n,i,null,a,t))):l?l!==e.memoizedState?(ha(n),ln(n),yh(n,l)):(ln(n),n.flags&=-16777217):(e=e.memoizedProps,e!==a&&ha(n),ln(n),Do(n,i,e,a,t)),null;case 27:if(xt(n),t=Bt.current,i=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&ha(n);else{if(!a){if(n.stateNode===null)throw Error(c(166));return ln(n),n.subtreeFlags&=-33554433,null}e=gt.current,Gi(n)?Pf(n):(e=qm(i,a,t),n.stateNode=e,ha(n))}return ln(n),n.subtreeFlags&=-33554433,null;case 5:if(xt(n),i=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&ha(n);else{if(!a){if(n.stateNode===null)throw Error(c(166));return ln(n),n.subtreeFlags&=-33554433,null}if(l=gt.current,Gi(n))Pf(n);else{var r=dr(Bt.current);switch(l){case 1:l=r.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:l=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":l=r.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":l=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":l=r.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof a.is=="string"?r.createElement("select",{is:a.is}):r.createElement("select"),a.multiple?l.multiple=!0:a.size&&(l.size=a.size);break;default:l=typeof a.is=="string"?r.createElement(i,{is:a.is}):r.createElement(i)}}l[xn]=n,l[B]=a;e:for(r=n.child;r!==null;){if(r.tag===5||r.tag===6)l.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}n.stateNode=l;e:switch(Hn(l,i,a),i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&ha(n)}}return ln(n),n.subtreeFlags&=-33554433,Do(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==a&&ha(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(c(166));if(e=Bt.current,Gi(n)){if(e=n.stateNode,t=n.memoizedProps,a=null,i=Rn,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[xn]=n,e=!!(e.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||vm(e.nodeValue,t)),e||Aa(n,!0)}else e=dr(e).createTextNode(a),e[xn]=n,n.stateNode=e}return ln(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(a=Gi(n),t!==null){if(e===null){if(!a)throw Error(c(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[xn]=n}else ri(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ln(n),e=!1}else t=Ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(ot(n),n):(ot(n),null);if((n.flags&128)!==0)throw Error(c(558))}return ln(n),null;case 13:if(a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Gi(n),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(c(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[xn]=n}else ri(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ln(n),i=!1}else i=Ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return n.flags&256?(ot(n),n):(ot(n),null)}return ot(n),(n.flags&128)!==0?(n.lanes=t,n):(t=a!==null,e=e!==null&&e.memoizedState!==null,t&&(a=n.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==i&&(a.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),Es(n,n.updateQueue),ln(n),null);case 4:return Pn(),e===null&&mc(n.stateNode.containerInfo),n.flags|=67108864,ln(n),null;case 10:return oa(n.type),ln(n),null;case 19:if(ao(n),a=n.memoizedState,a===null)return ln(n),null;if(i=(n.flags&128)!==0,l=a.rendering,l===null)if(i)nr(a,!1);else{if(mn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(l=us(e),l!==null){for(n.flags|=128,nr(a,!1),e=l.updateQueue,n.updateQueue=e,Es(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)Qf(t,e),t=t.sibling;return Fl(n,Un.current&1|2),xe&&sa(n,a.treeForkCount),n.child}e=e.sibling}a.tail!==null&&Kn()>zs&&(n.flags|=128,i=!0,nr(a,!1),n.lanes=4194304)}else{if(!i)if(e=us(l),e!==null){if(n.flags|=128,i=!0,e=e.updateQueue,n.updateQueue=e,Es(n,e),nr(a,!0),a.tail===null&&a.tailMode!=="collapsed"&&a.tailMode!=="visible"&&!l.alternate&&!xe)return ln(n),null}else 2*Kn()-a.renderingStartTime>zs&&t!==536870912&&(n.flags|=128,i=!0,nr(a,!1),n.lanes=4194304);a.isBackwards?(l.sibling=n.child,n.child=l):(e=a.last,e!==null?e.sibling=l:n.child=l,a.last=l)}if(a.tail!==null){e=a.tail;e:{for(t=e;t!==null;){if(t.alternate!==null){t=!1;break e}t=t.sibling}t=!0}return a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Kn(),e.sibling=null,l=Un.current,l=i?l&1|2:l&1,a.tailMode==="visible"||a.tailMode==="collapsed"||!t||xe?Fl(n,l):(t=l,Pe(Ln,n),Pe(Un,t),Vn===null&&(Vn=n)),xe&&sa(n,a.treeForkCount),e}return ln(n),null;case 22:case 23:return ot(n),no(),a=n.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(t&536870912)!==0&&(n.flags&128)===0&&(ln(n),n.subtreeFlags&6&&(n.flags|=8192)):ln(n),t=n.updateQueue,t!==null&&Es(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==t&&(n.flags|=2048),e!==null&&Nn(fi),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),oa(Sn),ln(n),null;case 25:return null;case 30:return n.flags|=33554432,ln(n),null}throw Error(c(156,n.tag))}function p1(e,n){switch(Yu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return oa(Sn),Pn(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return xt(n),null;case 31:if(n.memoizedState!==null){if(ot(n),n.alternate===null)throw Error(c(340));ri()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ot(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(c(340));ri()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ao(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return Pn(),null;case 10:return oa(n.type),null;case 22:case 23:return ot(n),no(),e!==null&&Nn(fi),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return oa(Sn),null;case 25:return null;default:return null}}function _h(e,n){switch(Yu(n),n.tag){case 3:oa(Sn),Pn();break;case 26:case 27:case 5:xt(n);break;case 4:Pn();break;case 31:n.memoizedState!==null&&ot(n);break;case 13:ot(n);break;case 19:ao(n);break;case 10:oa(n.type);break;case 22:case 23:ot(n),no(),e!==null&&Nn(fi);break;case 24:oa(Sn)}}function tr(e,n){try{var t=n.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var i=a.next;t=i;do{if((t.tag&e)===e){a=void 0;var l=t.create,r=t.inst;a=l(),r.destroy=a}t=t.next}while(t!==i)}}catch(u){Je(n,n.return,u)}}function La(e,n,t){try{var a=n.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&e)===e){var r=a.inst,u=r.destroy;if(u!==void 0){r.destroy=void 0,i=n;var h=t,_=u;try{_()}catch(O){Je(i,h,O)}}}a=a.next}while(a!==l)}}catch(O){Je(n,n.return,O)}}function Sh(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{cd(n,t)}catch(a){Je(e,e.return,a)}}}function Th(e,n,t){t.props=gi(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(a){Je(e,n,a)}}function Gt(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:var i=e.stateNode,l=ia(e.memoizedProps,i);(i.ref===null||i.ref.name!==l)&&(i.ref=Mm(l)),a=i.ref;break;case 7:if(e.stateNode===null){var r=new mt(e);b(e.child,!1,l0,r,void 0,void 0),e.stateNode=r}a=e.stateNode;break;default:a=e.stateNode}typeof t=="function"?e.refCleanup=t(a):t.current=a}}catch(u){Je(e,n,u)}}function qn(e,n){var t=e.ref,a=e.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(i){Je(e,n,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(i){Je(e,n,i)}else t.current=null}function ws(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var t=0;t<n.length;t++)zm(e.stateNode,n[t])}function Eh(e){for(var n=e.return;n!==null&&(zo(n)&&zm(e.stateNode,n.stateNode),!jo(n));)n=n.return}function ar(e){for(var n=e.return;n!==null&&(zo(n)&&r0(e.stateNode,n.stateNode),!jo(n));)n=n.return}function jo(e){return e.tag===5||e.tag===3||e.tag===27}function zo(e){return e&&e.tag===7&&e.stateNode!==null}function Bo(e){var n=e.type,t=e.memoizedProps,a=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break e;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(i){Je(e,e.return,i)}}function Lo(e,n,t){try{var a=e.stateNode;Y1(a,e.type,t,n),a[B]=n}catch(i){Je(e,e.return,i)}}function wh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Va(e.type)||e.tag===4}function Uo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Va(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qo(e,n,t,a){var i=e.tag;if(i===5||i===6)i=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(i,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(i),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=qt)),ws(e,a),Le=!0;else if(i!==4&&(i===27&&(ws(e,a),a=null,Va(e.type)&&(t=e.stateNode,n=null)),e=e.child,e!==null))for(qo(e,n,t,a),e=e.sibling;e!==null;)qo(e,n,t,a),e=e.sibling}function Os(e,n,t,a){var i=e.tag;if(i===5||i===6)i=e.stateNode,n?t.insertBefore(i,n):t.appendChild(i),ws(e,a),Le=!0;else if(i!==4&&(i===27&&(ws(e,a),a=null,Va(e.type)&&(t=e.stateNode)),e=e.child,e!==null))for(Os(e,n,t,a),e=e.sibling;e!==null;)Os(e,n,t,a),e=e.sibling}function Oh(e){var n=e.stateNode,t=e.memoizedProps;try{for(var a=e.type,i=n.attributes;i.length;)n.removeAttributeNode(i[0]);Hn(n,a,t),n[xn]=e,n[B]=t}catch(l){Je(e,e.return,l)}}var Ns=!1,ct=null;function Nh(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Ns=!0)}var Kt=null;function xh(){var e=Kt;return Kt=null,e}var tt=0;function Fi(e,n,t,a,i){return tt=0,Ah(e.child,n,t,a,i)}function Ah(e,n,t,a,i){for(var l=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(a!==null){var u=Tc(r);a.push(u),u.view&&(l=!0)}else l||Tc(r).view&&(l=!0);Ns=!0,xm(r,tt===0?n:n+"_"+tt,t),tt++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&i||Ah(e.child,n,t,a,i)&&(l=!0));e=e.sibling}return l}function Vt(e,n){for(;e!==null;)e.tag===5?Am(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||Vt(e.child,n)),e=e.sibling}function xs(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(xs(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(c(544));var t=n.name;n=la(n.default,n.share),n!=="none"&&(Fi(e,t,n,null,!1)||Vt(e.child,!1))}e=e.sibling}}function Ho(e,n){if(e.tag===30){var t=e.stateNode,a=e.memoizedProps,i=ia(a,t),l=la(a.default,t.paired?a.share:a.enter);l!=="none"?Fi(e,i,l,null,!1)?(xs(e),t.paired||n||il(e,a.onEnter)):Vt(e.child,!1):xs(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ho(e,n),e=e.sibling;else xs(e)}function Yo(e){if(ct!==null&&ct.size!==0){var n=ct;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.memoizedProps,a=t.name;if(a!=null&&a!=="auto"){var i=n.get(a);if(i!==void 0){var l=la(t.default,t.share);if(l!=="none"&&(Fi(e,a,l,null,!1)?(l=e.stateNode,i.paired=l,l.paired=i,il(e,t.onShare)):Vt(e.child,!1)),n.delete(a),n.size===0)break}}}Yo(e)}e=e.sibling}}}function Go(e){if(e.tag===30){var n=e.memoizedProps,t=ia(n,e.stateNode),a=ct!==null?ct.get(t):void 0,i=la(n.default,a!==void 0?n.share:n.exit);i!=="none"&&(Fi(e,t,i,null,!1)?a!==void 0?(i=e.stateNode,a.paired=i,i.paired=a,ct.delete(t),il(e,n.onShare)):il(e,n.onExit):Vt(e.child,!1)),ct!==null&&Yo(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Go(e),e=e.sibling;else ct!==null&&Yo(e)}function Mh(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,t=ia(n,e.stateNode);n=la(n.default,n.update),e.flags&=-5,n!=="none"&&Fi(e,t,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Mh(e);e=e.sibling}}function Ko(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,Vt(e.child,!1))}Ko(e)}e=e.sibling}}function As(e){if(e.tag===30)e.stateNode.paired=null,Vt(e.child,!1),Ko(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)As(e),e=e.sibling;else Ko(e)}function Ch(e){for(e=e.child;e!==null;)e.tag===30?Vt(e.child,!1):(e.subtreeFlags&33554432)!==0&&Ch(e),e=e.sibling}function Vo(e,n,t,a,i,l,r){for(var u=!1;n!==null;){if(n.tag===5){var h=n.stateNode;if(l!==null&&tt<l.length){var _=l[tt],O=Tc(h);(_.view||O.view)&&(u=!0);var C;if(C=(e.flags&4)===0)if(O.clip)C=!0;else{C=_.rect;var v=O.rect;C=C.y!==v.y||C.x!==v.x||C.height!==v.height||C.width!==v.width}C&&(e.flags|=4),O.abs?O=!_.abs:(_=_.rect,O=O.rect,O=_.height!==O.height||_.width!==O.width),O&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&xm(h,tt===0?t:t+"_"+tt,i),u&&(e.flags&4)!==0||(Kt===null&&(Kt=[]),Kt.push(h,tt===0?a:a+"_"+tt,n.memoizedProps)),tt++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&r?e.flags|=n.flags&32:Vo(e,n.child,t,a,i,l,r)&&(u=!0));n=n.sibling}return u}function Rh(e,n){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,a=e.stateNode,i=ia(t,a),l=la(t.default,t.update),r;r=e.memoizedState,e.memoizedState=null,a=e;var u=e.child;tt=0,i=Vo(a,u,i,i,l,r,!1),(e.flags&4)!==0&&i&&il(e,t.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Rh(e);e=e.sibling}}var kn=!1,Ie=!1,It=!1,Io=!1,kh=typeof WeakSet=="function"?WeakSet:Set,Dn=null,Qt=!1,ir=!1,Ms=!1,Qo=!1;function g1(e,n,t){if(e=e.containerInfo,bc=ml,e=Bf(e),Ru(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var l=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var u=0,h=-1,_=-1,O=0,C=0,v=e,w=null;n:for(;;){for(var V;v!==a||l!==0&&v.nodeType!==3||(h=u+l),v!==r||i!==0&&v.nodeType!==3||(_=u+i),v.nodeType===3&&(u+=v.nodeValue.length),(V=v.firstChild)!==null;)w=v,v=V;for(;;){if(v===e)break n;if(w===a&&++O===l&&(h=u),w===r&&++C===i&&(_=u),(V=v.nextSibling)!==null)break;v=w,w=v.parentNode}v=V}a=h===-1||_===-1?null:{start:h,end:_}}else a=null}a=a||{start:0,end:0}}else a=null;for(vc={focusedElem:e,selectionRange:a},ml=!1,t=(t&335544064)===t,Dn=n,n=t?9270:1024;Dn!==null;){if(e=Dn,t&&(a=e.deletions,a!==null))for(l=0;l<a.length;l++)t&&Go(a[l]);if(e.alternate===null&&(e.flags&2)!==0)t&&Nh(e),Cs(t);else{if(e.tag===22){if(a=e.alternate,e.memoizedState!==null){a!==null&&a.memoizedState===null&&t&&Go(a),Cs(t);continue}else if(a!==null&&a.memoizedState!==null){t&&Nh(e),Cs(t);continue}}a=e.child,(e.subtreeFlags&n)!==0&&a!==null?(a.return=e,Dn=a):(t&&Mh(e),Cs(t))}}ct=null}function Cs(e){for(;Dn!==null;){var n=Dn,t=e,a=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((i&1024)!==0&&a!==null){t=void 0,i=a.memoizedProps,a=a.memoizedState;var l=n.stateNode;try{var r=gi(n.type,i);t=l.getSnapshotBeforeUpdate(r,a),l.__reactInternalSnapshotBeforeUpdate=t}catch(u){Je(n,n.return,u)}}break;case 3:if((i&1024)!==0){if(a=n.stateNode.containerInfo,t=a.nodeType,t===9)Oc(a);else if(t===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":Oc(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:t&&a!==null&&(t=ia(a.memoizedProps,a.stateNode),i=n.memoizedProps,i=la(i.default,i.update),i!=="none"&&Fi(a,t,i,a.memoizedState=[],!0));break;default:if((i&1024)!==0)throw Error(c(163))}if(a=n.sibling,a!==null){a.return=n.return,Dn=a;break}Dn=n.return}}function Dh(e,n,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Xt(e,t),a&4&&tr(5,t);break;case 1:if(Xt(e,t),a&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(r){Je(t,t.return,r)}else{var i=gi(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(i,n,e.__reactInternalSnapshotBeforeUpdate)}catch(r){Je(t,t.return,r)}}a&64&&Sh(t),a&512&&Gt(t,t.return);break;case 3:if(Xt(e,t),a&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{cd(e,n)}catch(r){Je(t,t.return,r)}}break;case 27:n===null&&a&4&&Oh(t);case 26:case 5:Xt(e,t),n===null&&a&4&&Bo(t),a&512&&Gt(t,t.return);break;case 12:Xt(e,t);break;case 31:Xt(e,t),a&4&&Lh(e,t);break;case 13:Xt(e,t),a&4&&Uh(e,t),a&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=A1.bind(null,t),o0(e,t))));break;case 22:if(a=t.memoizedState!==null||kn,!a){var l=n!==null&&n.memoizedState!==null||Ie;n=kn,i=Ie,kn=a,(Ie=l)&&!i?(a=2,(t.subtreeFlags&8772)!==0&&(a|=1),Dt(e,t,a)):Xt(e,t),kn=n,Ie=i}break;case 30:Xt(e,t),a&512&&Gt(t,t.return);break;case 7:a&512&&Gt(t,t.return);default:Xt(e,t)}}function Xo(e,n){for(e=e.child;e!==null;)jh(e,n),e=e.sibling}function jh(e,n){switch(e.tag){case 5:case 26:try{var t=e.stateNode;if(n){var a=t.style;typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"}else{var i=e.stateNode,l=e.memoizedProps.style,r=l!=null&&l.hasOwnProperty("display")?l.display:null;i.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(h){Je(e,e.return,h)}Zo(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,Le=!0}catch(h){Je(e,e.return,h)}break;case 18:try{var u=e.stateNode;n?Nm(u,!0):Nm(e.stateNode,!1)}catch(h){Je(e,e.return,h)}break;case 22:case 23:e.memoizedState===null&&Xo(e,n);break;default:Xo(e,n)}}function Zo(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var t=e,a=n;switch(t.tag){case 4:jh(t,a);break e;case 22:t.memoizedState===null&&Zo(t,a);break e;default:Zo(t,a)}}e=e.sibling}}function zh(e){var n=e.alternate;n!==null&&(e.alternate=null,zh(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Mn(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var on=null,at=!1;function Rt(e,n,t){for(t=t.child;t!==null;)Bh(e,n,t),t=t.sibling}function Bh(e,n,t){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(en,t)}catch{}switch(t.tag){case 26:Ie||qn(t,n),Rt(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&!Ie&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Ie||qn(t,n),ar(t);var a=on,i=at;Va(t.type)&&(on=t.stateNode,at=!1),Rt(e,n,t),Hm(t.stateNode,t.type,t.memoizedProps),on=a,at=i;break;case 5:Ie||qn(t,n),ar(t);case 6:if(t.tag===6&&ar(t),a=on,i=at,on=null,Rt(e,n,t),on=a,at=i,on!==null)if(at)try{(on.nodeType===9?on.body:on.nodeName==="HTML"?on.ownerDocument.body:on).removeChild(t.stateNode),Le=!0}catch(l){Je(t,n,l)}else try{on.removeChild(t.stateNode),Le=!0}catch(l){Je(t,n,l)}break;case 18:on!==null&&(at?(e=on,Om(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),pl(e)):Om(on,t.stateNode));break;case 4:a=on,i=at,on=t.stateNode.containerInfo,at=!0,Rt(e,n,t),on=a,at=i;break;case 0:case 11:case 14:case 15:La(2,t,n),Ie||La(4,t,n),Rt(e,n,t);break;case 1:Ie||(qn(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"&&Th(t,n,a)),Rt(e,n,t);break;case 21:Rt(e,n,t);break;case 22:Ie=(a=Ie)||t.memoizedState!==null,Rt(e,n,t),Ie=a;break;case 30:qn(t,n),Rt(e,n,t);break;case 7:Ie||qn(t,n),Rt(e,n,t);break;default:Rt(e,n,t)}}function Lh(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{pl(e)}catch(t){Je(n,n.return,t)}}}function Uh(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{pl(e)}catch(t){Je(n,n.return,t)}}function b1(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new kh),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new kh),n;default:throw Error(c(435,e.tag))}}function Rs(e,n){var t=b1(e);n.forEach(function(a){if(!t.has(a)){t.add(a);var i=M1.bind(null,e,a);a.then(i,i)}})}function Xn(e,n,t){var a=n.deletions;if(a!==null)for(var i=0;i<a.length;i++){var l=a[i],r=e,u=n,h=u;e:for(;h!==null;){switch(h.tag){case 27:if(Va(h.type)){on=h.stateNode,at=!1;break e}break;case 5:on=h.stateNode,at=!1;break e;case 3:case 4:on=h.stateNode.containerInfo,at=!0;break e}h=h.return}if(on===null)throw Error(c(160));Bh(r,u,l),on=null,at=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)qh(n,e,t),n=n.sibling}var kt=null;function qh(e,n,t){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(i&4&&(a=e.updateQueue,a=a!==null?a.events:null,a!==null))for(var l=0;l<a.length;l++){var r=a[l];r.ref.impl=r.nextImpl}Xn(n,e,t),Zn(e),i&4&&(La(3,e,e.return),tr(3,e),La(5,e,e.return));break;case 1:Xn(n,e,t),Zn(e),i&512&&(Ie||a===null||qn(a,a.return)),i&64&&kn&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?n:t.concat(n))));break;case 26:if(l=kt,Xn(n,e,t),Zn(e),i&512&&(Ie||a===null||qn(a,a.return)),i&4)if(i=a!==null?a.memoizedState:null,t=e.memoizedState,a===null)if(t===null)if(e.stateNode===null)if(kn)e.stateNode=Tm(e.type,e.memoizedProps,n.containerInfo,e);else{e:{n=e.type,t=e.memoizedProps,i=l.ownerDocument||l;n:switch(n){case"title":a=i.getElementsByTagName("title")[0],(!a||a[et]||a[xn]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=i.createElement(n),i.head.insertBefore(a,i.querySelector("head > title"))),Hn(a,n,t),a[xn]=e,yn(a),n=a;break e;case"link":if(l=Qm("link","href",i).get(n+(t.href||""))){for(r=0;r<l.length;r++)if(a=l[r],a.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&a.getAttribute("rel")===(t.rel==null?null:t.rel)&&a.getAttribute("title")===(t.title==null?null:t.title)&&a.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){l.splice(r,1);break n}}a=i.createElement(n),Hn(a,n,t),i.head.appendChild(a);break;case"meta":if(l=Qm("meta","content",i).get(n+(t.content||""))){for(r=0;r<l.length;r++)if(a=l[r],a.getAttribute("content")===(t.content==null?null:""+t.content)&&a.getAttribute("name")===(t.name==null?null:t.name)&&a.getAttribute("property")===(t.property==null?null:t.property)&&a.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&a.getAttribute("charset")===(t.charSet==null?null:t.charSet)){l.splice(r,1);break n}}a=i.createElement(n),Hn(a,n,t),i.head.appendChild(a);break;default:throw Error(c(468,n))}a[xn]=e,yn(a),n=a}e.stateNode=n}else kn||kc(l,e.type,e.stateNode);else e.stateNode=Im(l,t,e.memoizedProps);else i!==t?(i===null?(n=a.stateNode,n===null||Ie||n.parentNode.removeChild(n)):i.count--,t===null?kn||kc(l,e.type,e.stateNode):Im(l,t,e.memoizedProps)):t===null&&e.stateNode!==null&&Lo(e,e.memoizedProps,a.memoizedProps);break;case 27:Xn(n,e,t),Zn(e),i&512&&(Ie||a===null||qn(a,a.return)),a!==null&&i&4&&Lo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(l=It,It=!1,Xn(n,e,t),It=l,Zn(e),i&512&&(Ie||a===null||qn(a,a.return)),e.flags&32){n=e.stateNode;try{ki(n,""),Le=!0}catch(O){Je(e,e.return,O)}}i&4&&e.stateNode!=null&&(n=e.memoizedProps,Lo(e,n,a!==null?a.memoizedProps:n)),i&1024&&(Io=!0);break;case 6:if(Xn(n,e,t),Zn(e),i&4){if(e.stateNode===null)throw Error(c(162));n=e.memoizedProps,t=e.stateNode;try{t.nodeValue=n,Le=!0}catch(O){Je(e,e.return,O)}}break;case 3:if(Le=!1,Qs=null,l=kt,kt=hr(n.containerInfo),Xn(n,e,t),kt=l,Zn(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{pl(n.containerInfo)}catch(O){Je(e,e.return,O)}Io&&(Io=!1,Hh(e)),Le=!1;break;case 4:i=It,It=kn,a=_n(),l=kt,kt=hr(e.stateNode.containerInfo),Xn(n,e,t),Zn(e),kt=l,Le&&ir&&(Ms=!0),Le=a,It=i;break;case 12:Xn(n,e,t),Zn(e);break;case 31:Xn(n,e,t),Zn(e),i&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Rs(e,n)));break;case 13:Xn(n,e,t),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(js=Kn()),i&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Rs(e,n)));break;case 22:l=e.memoizedState!==null,r=a!==null&&a.memoizedState!==null;var u=kn,h=Ie,_=It;kn=u||l,It=_||l,Ie=h||r,Xn(n,e,t),Ie=h,It=_,kn=u,Zn(e),i&8192&&(n=e.stateNode,n._visibility=l?n._visibility&-2:n._visibility|1,!l||a===null||r||kn||Ie||(n=r||Ie,t=kn,a=Ie,kn=l||kn,Ie=n,Ua(e,2),kn=t,Ie=a),!l&&It||Xo(e,l)),i&4&&(n=e.updateQueue,n!==null&&(t=n.retryQueue,t!==null&&(n.retryQueue=null,Rs(e,t))));break;case 19:Xn(n,e,t),Zn(e),i&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Rs(e,n)));break;case 30:i&512&&(Ie||a===null||qn(a,a.return)),i=_n(),l=ir,r=(t&335544064)===t,u=e.memoizedProps,ir=r&&la(u.default,u.update)!=="none",Xn(n,e,t),Zn(e),r&&a!==null&&Le&&(e.flags|=4),ir=l,Le=i;break;case 21:break;case 7:i&512&&(Ie||a===null||qn(a,a.return)),a&&a.stateNode!==null&&(a.stateNode._fragmentFiber=e);default:Xn(n,e,t),Zn(e)}}function Zn(e){var n=e.flags;if(n&2){try{for(var t,a=e.return;a!==null;){if(wh(a)){t=a;break}a=a.return}a=null;for(var i=e.return;i!==null;){if(zo(i)){var l=i.stateNode;a===null?a=[l]:a.push(l)}if(jo(i))break;i=i.return}var r=a;if(t==null)throw Error(c(160));switch(t.tag){case 27:var u=t.stateNode,h=Uo(e);Os(e,h,u,r);break;case 5:var _=t.stateNode;t.flags&32&&(ki(_,""),t.flags&=-33);var O=Uo(e);Os(e,O,_,r);break;case 3:case 4:var C=t.stateNode.containerInfo,v=Uo(e);qo(e,v,C,r);break;default:throw Error(c(161))}}catch(w){Je(e,e.return,w)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Hh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Hh(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,ml=!0,n.reset(),ml=!1),e=e.sibling}}function Pi(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Yh(n,e),n=n.sibling;else Rh(n)}function Yh(e,n){var t=e.alternate;if(t===null)Ho(e,!1);else switch(e.tag){case 3:if(Qo=Qt=!1,xh(),Pi(n,e),!Qt&&!Ms){if(e=Kt,e!==null)for(var a=0;a<e.length;a+=3){t=e[a];var i=e[a+1];Am(t,e[a+2]),t=t.ownerDocument.documentElement,t!==null&&t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+i+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Qo=!0}Kt=null;break;case 5:Pi(n,e);break;case 4:a=Qt,Qt=!1,Pi(n,e),Qt&&(Ms=!0),Qt=a;break;case 22:e.memoizedState===null&&(t.memoizedState!==null?Ho(e,!1):Pi(n,e));break;case 30:a=Qt,i=xh(),Qt=!1,Pi(n,e),Qt&&(e.flags|=4);var l=e.memoizedProps,r=e.stateNode;n=ia(l,r),r=ia(t.memoizedProps,r);var u=la(l.default,l.update);u==="none"?n=!1:(l=t.memoizedState,t.memoizedState=null,t=e.child,tt=0,n=Vo(e,t,n,r,u,l,!0),tt!==(l===null?0:l.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(il(e,e.memoizedProps.onUpdate),Kt=i):i!==null&&(i.push.apply(i,Kt),Kt=i),Qt=(e.flags&32)!==0?!0:a;break;default:Pi(n,e)}}function Xt(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Dh(e,n.alternate,n),n=n.sibling}function Ua(e,n){for(e=e.child;e!==null;){var t=e,a=n;switch(t.tag){case 0:case 11:case 14:case 15:La(4,t,t.return),Ua(t,a);break;case 1:qn(t,t.return);var i=t.stateNode;typeof i.componentWillUnmount=="function"&&Th(t,t.return,i),Ua(t,a);break;case 27:(a&2)!==0&&Hm(t.stateNode,t.type,t.memoizedProps);case 5:qn(t,t.return),t.tag!==5&&t.tag!==27||ar(t),Ua(t,a);break;case 6:ar(t);break;case 26:qn(t,t.return),i=t.stateNode,t.memoizedState!==null||i===null||Ie||i.parentNode.removeChild(i),Ua(t,a);break;case 22:t.memoizedState===null&&Ua(t,a);break;case 30:qn(t,t.return),Ua(t,a);break;case 7:qn(t,t.return);default:Ua(t,a)}e=e.sibling}}function Dt(e,n,t){for(t=(n.subtreeFlags&8772)!==0?t:t&-2,n=n.child;n!==null;){var a=n.alternate,i=e,l=n,r=l.flags,u=(t&1)!==0;switch(l.tag){case 0:case 11:case 15:Dt(i,l,t),tr(4,l);break;case 1:if(Dt(i,l,t),a=l,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(O){Je(a,a.return,O)}if(a=l,i=a.updateQueue,i!==null){var h=a.stateNode;try{var _=i.shared.hiddenCallbacks;if(_!==null)for(i.shared.hiddenCallbacks=null,i=0;i<_.length;i++)od(_[i],h)}catch(O){Je(a,a.return,O)}}u&&r&64&&Sh(l),Gt(l,l.return);break;case 27:(t&2)!==0&&Oh(l);case 5:l.tag!==5&&l.tag!==27||Eh(l),Dt(i,l,t),u&&a===null&&r&4&&Bo(l),Gt(l,l.return);break;case 6:Eh(l);break;case 26:h=l.stateNode,l.memoizedState!==null||h===null||kn||kc(hr(h.ownerDocument),l.type,h),Dt(i,l,t),u&&a===null&&r&4&&Bo(l),Gt(l,l.return);break;case 12:Dt(i,l,t);break;case 31:Dt(i,l,t),u&&r&4&&Lh(i,l);break;case 13:Dt(i,l,t),u&&r&4&&Uh(i,l);break;case 22:l.memoizedState===null&&Dt(i,l,t),Gt(l,l.return);break;case 30:Dt(i,l,t),Gt(l,l.return);break;case 7:Gt(l,l.return);default:Dt(i,l,t)}n=n.sibling}}function Jo(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&Kl(t))}function Fo(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Kl(e))}function wt(e,n,t,a){var i=(t&335544064)===t;if(n.subtreeFlags&(i?10262:10256))for(n=n.child;n!==null;)Gh(e,n,t,a),n=n.sibling;else i&&Ch(n)}function Gh(e,n,t,a){var i=(t&335544064)===t;i&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&As(n);var l=n.flags;switch(n.tag){case 0:case 11:case 15:wt(e,n,t,a),l&2048&&tr(9,n);break;case 1:wt(e,n,t,a);break;case 3:wt(e,n,t,a),i&&Qo&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),l&2048&&(l=null,n.alternate!==null&&(l=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==l&&(n.refCount++,l!=null&&Kl(l)));break;case 12:if(l&2048){wt(e,n,t,a),l=n.stateNode;try{var r=n.memoizedProps,u=r.id,h=r.onPostCommit;typeof h=="function"&&h(u,n.alternate===null?"mount":"update",l.passiveEffectDuration,-0)}catch(_){Je(n,n.return,_)}}else wt(e,n,t,a);break;case 31:wt(e,n,t,a);break;case 13:wt(e,n,t,a);break;case 23:break;case 22:r=n.stateNode,u=n.alternate,n.memoizedState!==null?(i&&u!==null&&u.memoizedState===null&&As(u),r._visibility&2?wt(e,n,t,a):lr(e,n)):(i&&u!==null&&u.memoizedState!==null&&As(n),r._visibility&2?wt(e,n,t,a):(r._visibility|=2,Wi(e,n,t,a,(n.subtreeFlags&10256)!==0||!1))),l&2048&&Jo(u,n);break;case 24:wt(e,n,t,a),l&2048&&Fo(n.alternate,n);break;case 30:i&&(l=n.alternate,l!==null&&(Vt(l.child,!0),Vt(n.child,!0))),wt(e,n,t,a);break;default:wt(e,n,t,a)}}function Wi(e,n,t,a,i){for(i=i&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var l=e,r=n,u=t,h=a,_=r.flags;switch(r.tag){case 0:case 11:case 15:Wi(l,r,u,h,i),tr(8,r);break;case 23:break;case 22:var O=r.stateNode;r.memoizedState!==null?O._visibility&2?Wi(l,r,u,h,i):lr(l,r):(O._visibility|=2,Wi(l,r,u,h,i)),i&&_&2048&&Jo(r.alternate,r);break;case 24:Wi(l,r,u,h,i),i&&_&2048&&Fo(r.alternate,r);break;default:Wi(l,r,u,h,i)}n=n.sibling}}function lr(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,a=n,i=a.flags;switch(a.tag){case 22:lr(t,a),i&2048&&Jo(a.alternate,a);break;case 24:lr(t,a),i&2048&&Fo(a.alternate,a);break;default:lr(t,a)}n=n.sibling}}var bi=8192;function vi(e,n,t){if(e.subtreeFlags&bi)for(e=e.child;e!==null;)Kh(e,n,t),e=e.sibling}function Kh(e,n,t){switch(e.tag){case 26:vi(e,n,t),e.flags&bi&&(e.memoizedState!==null?E0(t,kt,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&Fm(t,e)));break;case 5:vi(e,n,t),e.flags&bi&&(e=e.stateNode,(n&335544128)===n&&Fm(t,e));break;case 3:case 4:var a=kt;kt=hr(e.stateNode.containerInfo),vi(e,n,t),kt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=bi,bi=16777216,vi(e,n,t),bi=a):vi(e,n,t));break;case 30:if((e.flags&bi)!==0&&(a=e.memoizedProps.name,a!=null&&a!=="auto")){var i=e.stateNode;i.paired=null,ct===null&&(ct=new Map),ct.set(a,i)}vi(e,n,t);break;default:vi(e,n,t)}}function Vh(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function rr(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];Dn=a,Qh(a,e)}Vh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ih(e),e=e.sibling}function Ih(e){switch(e.tag){case 0:case 11:case 15:rr(e),e.flags&2048&&La(9,e,e.return);break;case 3:rr(e);break;case 12:rr(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,ks(e)):rr(e);break;default:rr(e)}}function ks(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];Dn=a,Qh(a,e)}Vh(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:La(8,n,n.return),ks(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,ks(n));break;default:ks(n)}e=e.sibling}}function Qh(e,n){for(;Dn!==null;){var t=Dn;switch(t.tag){case 0:case 11:case 15:La(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Kl(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,Dn=a;else e:for(t=e;Dn!==null;){a=Dn;var i=a.sibling,l=a.return;if(zh(a),a===t){Dn=null;break e}if(i!==null){i.return=l,Dn=i;break e}Dn=l}}}var v1={getCacheForType:function(e){var n=Bn(Sn),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return Bn(Sn).controller.signal}},y1=typeof WeakMap=="function"?WeakMap:Map,Ke=0,nn=null,Re=null,De=0,Ze=0,ft=null,qa=!1,$i=!1,Po=!1,ma=0,mn=0,Ha=0,yi=0,Ds=0,dt=0,el=0,sr=null,it=null,Wo=!1,js=0,Xh=0,zs=1/0,Bs=null,Ya=null,cn=0,jt=null,_i=null,Zt=0,$o=0,ec=null,Zh=null,nl=null,tl=null,al=null,ur=0,Ls=null;function ht(){return(Ke&2)!==0&&De!==0?De&-De:$.T!==null?cc():Rr()}function Jh(){if(dt===0)if((De&536870912)===0||xe){var e=ya;ya<<=1,(ya&3932160)===0&&(ya=262144),dt=e}else dt=536870912;return e=Ln.current,e!==null&&(e.flags|=32),dt}function il(e,n){if(n!=null){var t=e.stateNode,a=t.ref;a===null&&(a=t.ref=Mm(ia(e.memoizedProps,t))),tl===null&&(tl=[]),tl.push(n.bind(null,a))}}function lt(e,n,t){(e===nn&&(Ze===2||Ze===9)||e.cancelPendingCommit!==null)&&(ll(e,0),Ga(e,De,dt,!1)),ni(e,t),((Ke&2)===0||e!==nn)&&(e===nn&&((Ke&2)===0&&(yi|=t),mn===4&&Ga(e,De,dt,!1)),Jt(e))}function Fh(e,n,t){if((Ke&6)!==0)throw Error(c(327));var a=!t&&(n&127)===0&&(n&e.expiredLanes)===0||ei(e,n),i=a?T1(e,n):tc(e,n,!0),l=a;do{if(i===0){$i&&!a&&Ga(e,n,0,!1);break}else{if(t=e.current.alternate,l&&!_1(t)){i=tc(e,n,!1),l=!1;continue}if(i===2){if(l=n,e.errorRecoveryDisabledLanes&l)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){n=r;e:{var u=e;i=sr;var h=u.current.memoizedState.isDehydrated;if(h&&(ll(u,r).flags|=256),r=tc(u,r,!1),r!==2&&r!==6){if(Po&&!h){u.errorRecoveryDisabledLanes|=l,yi|=l,i=4;break e}l=it,it=i,l!==null&&(it===null?it=l:it.push.apply(it,l))}i=r}if(l=!1,i!==2)continue}}if(i===1){ll(e,0),Ga(e,n,0,!0);break}e:{switch(a=e,l=i,l){case 0:case 1:throw Error(c(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:Ga(a,n,dt,!qa);break e;case 2:it=null;break;case 3:case 5:break;default:throw Error(c(329))}if((n&62914560)===n&&(i=js+300-Kn(),10<i)){if(Ga(a,n,dt,!qa),Sa(a,0,!0)!==0)break e;Zt=n,a.timeoutHandle=Sc(Ph.bind(null,a,t,it,Bs,Wo,n,dt,yi,el,qa,l,"Throttled",-0,0),i);break e}Ph(a,t,it,Bs,Wo,n,dt,yi,el,qa,l,null,-0,0)}}break}while(!0);Jt(e)}function Ph(e,n,t,a,i,l,r,u,h,_,O,C,v,w){e.timeoutHandle=-1;var V=n.subtreeFlags,ee=(l&335544064)===l;if(C=null,(ee||V&8192||(V&16785408)===16785408)&&(C={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qt},ct=null,Kh(n,l,C),ee&&(V=C,ee=e.containerInfo,ee=(ee.nodeType===9?ee:ee.ownerDocument).__reactViewTransition,ee!=null&&(V.count++,V.waitingForViewTransition=!0,V=gr.bind(V),ee.finished.then(V,V))),V=(l&62914560)===l?js-Kn():(l&4194048)===l?Xh-Kn():0,V=w0(C,V),V!==null)){Zt=l,e.cancelPendingCommit=V(lm.bind(null,e,n,l,t,a,i,r,u,h,_,O,C,null,v,w)),Ga(e,l,r,!_);return}lm(e,n,l,t,a,i,r,u,h,_,O,C)}function _1(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var i=t[a],l=i.getSnapshot;i=i.value;try{if(!ut(l(),i))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ga(e,n,t,a){n=Mr(e,n),n&=~Ds,n&=~yi,e.suspendedLanes|=n,e.pingedLanes&=~n,a&&(e.warmLanes|=n),a=e.expirationTimes;for(var i=n;0<i;){var l=31-K(i),r=1<<l;a[l]=-1,i&=~r}t!==0&&Cr(e,t,n)}function Us(){return(Ke&6)===0?(or(0),!1):!0}function nc(){if(Re!==null){if(Ze===0)var e=Re.return;else e=Re,ua=si=null,uo(e),Ii=null,Ql=0,e=Re;for(;e!==null;)_h(e.alternate,e),e=e.return;Re=null}}function ll(e,n){var t=e.timeoutHandle;return t!==-1&&(e.timeoutHandle=-1,V1(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Zt=0,nc(),nn=e,Re=t=ra(e.current,null),De=n,Ze=0,ft=null,qa=!1,$i=ei(e,n),Po=!1,el=dt=Ds=yi=Ha=mn=0,it=sr=null,Wo=!1,ma=Mr(e,n),Qr(),t}function Wh(e,n){Te=null,$.H=bs,n===Vi||n===as?(n=ld(),Ze=3):n===Ju?(n=ld(),Ze=4):Ze=n===wo?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ft=n,Re===null&&(mn=1,vs(e,_t(n,e.current)))}function $h(){var e=Ln.current;return e===null?!0:(De&4194048)===De?Vn===null:(De&62914560)===De||(De&536870912)!==0?e===Vn:!1}function em(){var e=$.H;return $.H=bs,e===null?bs:e}function nm(){var e=$.A;return $.A=v1,e}function qs(){mn=4,qa||(De&4194048)!==De&&Ln.current!==null||($i=!0),(Ha&134217727)===0&&(yi&134217727)===0||nn===null||Ga(nn,De,dt,!1)}function tc(e,n,t){var a=Ke;Ke|=2;var i=em(),l=nm();(nn!==e||De!==n)&&(Bs=null,ll(e,n)),n=!1;var r=mn;e:do try{if(Ze!==0&&Re!==null){var u=Re,h=ft;switch(Ze){case 8:nc(),r=6;break e;case 3:case 2:case 9:case 6:Ln.current===null&&(n=!0);var _=Ze;if(Ze=0,ft=null,rl(e,u,h,_),t&&$i){r=0;break e}break;default:_=Ze,Ze=0,ft=null,rl(e,u,h,_)}}S1(),r=mn;break}catch(O){Wh(e,O)}while(!0);return n&&e.shellSuspendCounter++,ua=si=null,Ke=a,$.H=i,$.A=l,Re===null&&(nn=null,De=0,Qr()),r}function S1(){for(;Re!==null;)tm(Re)}function T1(e,n){var t=Ke;Ke|=2;var a=em(),i=nm();nn!==e||De!==n?(Bs=null,zs=Kn()+500,ll(e,n)):$i=ei(e,n);e:do try{if(Ze!==0&&Re!==null){n=Re;var l=ft;n:switch(Ze){case 1:Ze=0,ft=null,rl(e,n,l,1);break;case 2:case 9:if(ad(l)){Ze=0,ft=null,am(n);break}n=function(){Ze!==2&&Ze!==9||nn!==e||(Ze=7),Jt(e)},l.then(n,n);break e;case 3:Ze=7;break e;case 4:Ze=5;break e;case 7:ad(l)?(Ze=0,ft=null,am(n)):(Ze=0,ft=null,rl(e,n,l,7));break;case 5:var r=null;switch(Re.tag){case 26:r=Re.memoizedState;case 5:case 27:var u=Re;if(r?Zm(r):u.stateNode.complete){Ze=0,ft=null;var h=u.sibling;if(h!==null)Re=h;else{var _=u.return;_!==null?(Re=_,Hs(_)):Re=null}break n}}Ze=0,ft=null,rl(e,n,l,5);break;case 6:Ze=0,ft=null,rl(e,n,l,6);break;case 8:nc(),mn=6;break e;default:throw Error(c(462))}}E1();break}catch(O){Wh(e,O)}while(!0);return ua=si=null,$.H=a,$.A=i,Ke=t,Re!==null?0:(nn=null,De=0,Qr(),mn)}function E1(){for(;Re!==null&&!mu();)tm(Re)}function tm(e){var n=vh(e.alternate,e,ma);e.memoizedProps=e.pendingProps,n===null?Hs(e):Re=n}function am(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=fh(t,n,n.pendingProps,n.type,void 0,De);break;case 11:n=fh(t,n,n.pendingProps,n.type.render,n.ref,De);break;case 5:uo(n);var a=n;a===Rn&&(xe?(Wr(a),a.tag===5&&a.stateNode!=null&&(an=a.stateNode)):(Wr(a),xe=!0));default:_h(t,n),n=Re=Qf(n,ma),n=vh(t,n,ma)}e.memoizedProps=e.pendingProps,n===null?Hs(e):Re=n}function rl(e,n,t,a){ua=si=null,uo(n),Ii=null,Ql=0;var i=n.return;try{if(c1(e,i,n,t,De)){mn=1,vs(e,_t(t,e.current)),Re=null;return}}catch(l){if(i!==null)throw Re=i,l;mn=1,vs(e,_t(t,e.current)),Re=null;return}n.flags&32768?(xe||a===1?e=!0:$i||(De&536870912)!==0?e=!1:(qa=e=!0,(a===2||a===9||a===3||a===6)&&(a=Ln.current,a!==null&&a.tag===13&&(a.flags|=16384))),im(n,e)):Hs(n)}function Hs(e){var n=e;do{if((n.flags&32768)!==0){im(n,qa);return}e=n.return;var t=m1(n.alternate,n,ma);if(t!==null){Re=t;return}if(n=n.sibling,n!==null){Re=n;return}Re=n=e}while(n!==null);mn===0&&(mn=5)}function im(e,n){do{var t=p1(e.alternate,e);if(t!==null){t.flags&=32767,Re=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){Re=e;return}Re=e=t}while(e!==null);mn=6,Re=null}function lm(e,n,t,a,i,l,r,u,h,_,O,C){e.cancelPendingCommit=null;do Ys();while(cn!==0);if((Ke&6)!==0)throw Error(c(327));if(n!==null){if(n===e.current)throw Error(c(177));e===nn&&(Re=nn=null,De=0),_i=n,jt=e,Zt=t,ec=i,Zh=a,w1(e,n,t,r,u,h,C)}}function w1(e,n,t,a,i,l,r){var u=n.lanes|n.childLanes;if($o=u,u|=Bu,gu(e,t,u,a,i,l),tl=null,(t&335544064)===t?(al=Wg(e),a=10262):(al=null,a=10256),(n.subtreeFlags&a)!==0||(n.flags&a)!==0?(e.callbackNode=null,e.callbackPriority=0,C1(At,function(){return rc(),null})):(e.callbackNode=null,e.callbackPriority=0),Ns=!1,a=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||a){a=$.T,$.T=null,i=ue.p,ue.p=2,l=Ke,Ke|=4;try{g1(e,n,t)}finally{Ke=l,ue.p=i,$.T=a}}cn=1,Ns?nl=F1(r,e.containerInfo,al,ac,ic,N1,lc,rc,O1):(ac(),ic(),lc())}function O1(e){if(cn!==0){var n=jt.onRecoverableError;n(e,{componentStack:null})}}function N1(){cn===3&&(cn=0,Yh(_i,jt),cn=4)}function ac(){if(cn===1){cn=0;var e=jt,n=_i,t=Zt,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=$.T,$.T=null;var i=ue.p;ue.p=2;var l=Ke;Ke|=4;try{ir=Ms=!1,qh(n,e,t),t=vc;var r=Bf(e.containerInfo),u=t.focusedElem,h=t.selectionRange;if(r!==u&&u&&u.ownerDocument&&zf(u.ownerDocument.documentElement,u)){if(h!==null&&Ru(u)){var _=h.start,O=h.end;if(O===void 0&&(O=_),"selectionStart"in u)u.selectionStart=_,u.selectionEnd=Math.min(O,u.value.length);else{var C=u.ownerDocument||document,v=C&&C.defaultView||window;if(v.getSelection){var w=v.getSelection(),V=u.textContent.length,ee=Math.min(h.start,V),Ee=h.end===void 0?ee:Math.min(h.end,V);!w.extend&&ee>Ee&&(r=Ee,Ee=ee,ee=r);var y=jf(u,ee),p=jf(u,Ee);if(y&&p&&(w.rangeCount!==1||w.anchorNode!==y.node||w.anchorOffset!==y.offset||w.focusNode!==p.node||w.focusOffset!==p.offset)){var T=C.createRange();T.setStart(y.node,y.offset),w.removeAllRanges(),ee>Ee?(w.addRange(T),w.extend(p.node,p.offset)):(T.setEnd(p.node,p.offset),w.addRange(T))}}}}for(C=[],w=u;w=w.parentNode;)w.nodeType===1&&C.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<C.length;u++){var M=C[u];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}ml=!!bc,vc=bc=null}finally{Ke=l,ue.p=i,$.T=a}}e.current=n,cn=2}}function ic(){if(cn===2){cn=0;var e=jt,n=_i,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=$.T,$.T=null;var a=ue.p;ue.p=2;var i=Ke;Ke|=4;try{Dh(e,n.alternate,n)}finally{Ke=i,ue.p=a,$.T=t}}cn=3}}function lc(){if(cn===4||cn===3){cn=0;var e=nl;nl=null,Nl();var n=jt,t=_i,a=Zt,i=Zh,l=(a&335544064)===a?10262:10256;if((t.subtreeFlags&l)!==0||(t.flags&l)!==0?cn=5:(cn=0,_i=jt=null,rm(n,n.pendingLanes)),l=n.pendingLanes,l===0&&(Ya=null),Cl(a),t=t.stateNode,Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(en,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=$.T,l=ue.p,ue.p=2,$.T=null;try{for(var r=n.onRecoverableError,u=0;u<i.length;u++){var h=i[u];r(h.value,{componentStack:h.stack})}}finally{$.T=t,ue.p=l}}if(i=tl,r=al,al=null,i!==null&&(tl=null,r===null&&(r=[]),e!==null))for(h=0;h<i.length;h++)t=(0,i[h])(r),t!==void 0&&e.finished.finally(t);(Zt&3)!==0&&Ys(),Jt(n),l=n.pendingLanes,(a&261930)!==0&&(l&42)!==0?n===Ls?ur++:(ur=0,Ls=n):(ur=0,Ls=null),or(0)}}function rm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Kl(n)))}function Ys(){return nl!==null&&(nl.skipTransition(),nl=null),ac(),ic(),lc(),rc()}function rc(){if(cn!==5)return!1;var e=jt,n=$o;$o=0;var t=Cl(Zt),a=$.T,i=ue.p;try{ue.p=32>t?32:t,$.T=null,t=ec,ec=null;var l=jt,r=Zt;if(cn=0,_i=jt=null,Zt=0,(Ke&6)!==0)throw Error(c(331));var u=Ke;if(Ke|=4,Ih(l.current),Gh(l,l.current,r,t),Ke=u,or(0,!1),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(en,l)}catch{}return!0}finally{ue.p=i,$.T=a,rm(e,n)}}function sm(e,n,t){n=_t(t,n),n=Eo(e.stateNode,n,2),e=Da(e,n,2),e!==null&&(ni(e,2),Jt(e))}function Je(e,n,t){if(e.tag===3)sm(e,e,t);else for(;n!==null;){if(n.tag===3){sm(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ya===null||!Ya.has(a))){e=_t(t,e),t=ah(2),a=Da(n,t,2),a!==null&&(ih(t,a,n,e),ni(a,2),Jt(a));break}}n=n.return}}function sc(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new y1;var i=new Set;a.set(n,i)}else i=a.get(n),i===void 0&&(i=new Set,a.set(n,i));i.has(t)||(Po=!0,i.add(t),e=x1.bind(null,e,n,t),n.then(e,e))}function x1(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,nn===e&&(De&t)===t&&((mn===4||mn===3&&(De&62914560)===De&&300>Kn()-js)&&(Ke&2)===0?ll(e,0):Ds|=t,el===De&&(el=0)),Jt(e)}function um(e,n){n===0&&(n=Al()),e=ii(e,n),e!==null&&(ni(e,n),Jt(e))}function A1(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),um(e,t)}function M1(e,n){var t=0;switch(e.tag){case 31:case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(n),um(e,t)}function C1(e,n){return wl(e,n)}var sl=null,ul=null,uc=!1,Gs=!1,oc=!1,Ka=0;function Jt(e){e!==ul&&e.next===null&&(ul===null?sl=ul=e:ul=ul.next=e),Gs=!0,uc||(uc=!0,k1())}function or(e,n){if(!oc&&Gs){oc=!0;do for(var t=!1,a=sl;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var l=0;else{var r=a.suspendedLanes,u=a.pingedLanes;l=(1<<31-K(42|e)+1)-1,l&=i&~(r&~u),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(t=!0,dm(a,l))}else l=De,l=Sa(a,a===nn?l:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(l&3)===0||ei(a,l)||(t=!0,dm(a,l));a=a.next}while(t);oc=!1}}function R1(){om()}function om(){Gs=uc=!1;var e=0;Ka!==0&&K1()&&(e=Ka);for(var n=Kn(),t=null,a=sl;a!==null;){var i=a.next,l=cm(a,n);l===0?(a.next=null,t===null?sl=i:t.next=i,i===null&&(ul=t)):(t=a,(e!==0||(l&3)!==0)&&(Gs=!0)),a=i}cn!==0&&cn!==5||or(e),Ka!==0&&(Ka=0)}function cm(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var r=31-K(l),u=1<<r,h=i[r];h===-1?((u&t)===0||(u&a)!==0)&&(i[r]=pu(u,n)):h<=n&&(e.expiredLanes|=u),l&=~u}if(n=nn,t=De,t=Sa(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,t===0||e===n&&(Ze===2||Ze===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Ol(a),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||ei(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(a!==null&&Ol(a),Cl(t)){case 2:case 8:t=xl;break;case 32:t=At;break;case 268435456:t=R;break;default:t=At}return a=fm.bind(null,e),t=wl(t,a),e.callbackPriority=n,e.callbackNode=t,n}return a!==null&&a!==null&&Ol(a),e.callbackPriority=2,e.callbackNode=null,2}function fm(e,n){if(cn!==0&&cn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Ys()&&e.callbackNode!==t)return null;var a=De;return a=Sa(e,e===nn?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Fh(e,a,n),cm(e,Kn()),e.callbackNode!=null&&e.callbackNode===t?fm.bind(null,e):null)}function dm(e,n){if(Ys())return null;Fh(e,n,!0)}function k1(){I1(function(){(Ke&6)!==0?wl(Ar,R1):om()})}function cc(){if(Ka===0){var e=ci;e===0&&(e=Ut,Ut<<=1,(Ut&261888)===0&&(Ut=256)),Ka=e}return Ka}function hm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ur(e)}function D1(e,n,t,a,i){if(n==="submit"&&t&&t.stateNode===i){var l=hm((i[B]||null).action),r=a.submitter;r&&(n=(n=r[B]||null)?hm(n.formAction):r.getAttribute("formAction"),n!==null&&(l=n,r=null));var u=new Gr("action","action",null,a,i);e.push({event:u,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Ka!==0){var h=new FormData(i,r);vo(t,{pending:!0,data:h,method:i.method,action:l},null,h)}}else typeof l=="function"&&(u.preventDefault(),h=new FormData(i,r),vo(t,{pending:!0,data:h,method:i.method,action:l},l,h))},currentTarget:i}]})}}for(var fc=0;fc<zu.length;fc++){var dc=zu[fc],j1=dc.toLowerCase(),z1=dc[0].toUpperCase()+dc.slice(1);Ct(j1,"on"+z1)}Ct(qf,"onAnimationEnd"),Ct(Hf,"onAnimationIteration"),Ct(Yf,"onAnimationStart"),Ct("dblclick","onDoubleClick"),Ct("focusin","onFocus"),Ct("focusout","onBlur"),Ct(Vg,"onTransitionRun"),Ct(Ig,"onTransitionStart"),Ct(Qg,"onTransitionCancel"),Ct(Gf,"onTransitionEnd"),na("onMouseEnter",["mouseout","mouseover"]),na("onMouseLeave",["mouseout","mouseover"]),na("onPointerEnter",["pointerout","pointerover"]),na("onPointerLeave",["pointerout","pointerover"]),bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),bt("onBeforeInput",["compositionend","keypress","textInput","paste"]),bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),B1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cr));function mm(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],i=a.event;a=a.listeners;e:{var l=void 0;if(n)for(var r=a.length-1;0<=r;r--){var u=a[r],h=u.instance,_=u.currentTarget;if(u=u.listener,h!==l&&i.isPropagationStopped())break e;l=u,i.currentTarget=_;try{l(i)}catch(O){Ir(O)}i.currentTarget=null,l=h}else for(r=0;r<a.length;r++){if(u=a[r],h=u.instance,_=u.currentTarget,u=u.listener,h!==l&&i.isPropagationStopped())break e;l=u,i.currentTarget=_;try{l(i)}catch(O){Ir(O)}i.currentTarget=null,l=h}}}}function ke(e,n){var t=n[Me];t===void 0&&(t=n[Me]=new Set);var a=e+"__bubble";t.has(a)||(pm(n,e,2,!1),t.add(a))}function hc(e,n,t){var a=0;n&&(a|=4),pm(t,e,a,n)}var Ks="_reactListening"+Math.random().toString(36).slice(2);function mc(e){if(!e[Ks]){e[Ks]=!0,jr.forEach(function(t){t!=="selectionchange"&&(B1.has(t)||hc(t,!1,e),hc(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ks]||(n[Ks]=!0,hc("selectionchange",!1,n))}}function pm(e,n,t,a){switch(ip(n)){case 2:var i=A0;break;case 8:i=M0;break;default:i=jc}t=i.bind(null,n,t,e),i=void 0,!Su||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function pc(e,n,t,a,i){var l=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var r=a.tag;if(r===3||r===4){var u=a.stateNode.containerInfo;if(u===i)break;if(r===4)for(r=a.return;r!==null;){var h=r.tag;if((h===3||h===4)&&r.stateNode.containerInfo===i)return;r=r.return}for(;u!==null;){if(r=Cn(u),r===null)return;if(h=r.tag,h===5||h===6||h===26||h===27){a=l=r;continue e}u=u.parentNode}}a=a.return}pf(function(){var _=l,O=yu(t),C=[];e:{var v=Kf.get(e);if(v!==void 0){var w=Gr,V=e;switch(e){case"keypress":if(Hr(t)===0)break e;case"keydown":case"keyup":w=_g;break;case"focusin":V="focus",w=Ou;break;case"focusout":V="blur",w=Ou;break;case"beforeblur":case"afterblur":w=Ou;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=vf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=ug;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Og;break;case qf:case Hf:case Yf:w=fg;break;case Gf:w=xg;break;case"scroll":case"scrollend":w=rg;break;case"wheel":w=Mg;break;case"copy":case"cut":case"paste":w=hg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=_f;break;case"submit":w=Eg;break;case"toggle":case"beforetoggle":w=Rg}var ee=(n&4)!==0,Ee=!ee&&(e==="scroll"||e==="scrollend"),y=ee?v!==null?v+"Capture":null:v;ee=[];for(var p=_,T;p!==null;){var M=p;if(T=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||T===null||y===null||(M=kl(p,y),M!=null&&ee.push(fr(p,M,T))),Ee)break;p=p.return}0<ee.length&&(v=new w(v,V,null,t,O),C.push({event:v,listeners:ee}))}}if((n&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",w&&t!==vu&&(V=t.relatedTarget||t.fromElement)&&(Cn(V)||V[ne]))break e;(v||w)&&(V=O.window===O?O:(w=O.ownerDocument)?w.defaultView||w.parentWindow:window,v?(w=t.relatedTarget||t.toElement,v=_,w=w?Cn(w):null,w!==null&&(Ee=A(w),ee=w.tag,w!==Ee||ee!==5&&ee!==27&&ee!==6)&&(w=null)):(v=null,w=_),v!==w&&(ee=vf,M="onMouseLeave",y="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(ee=_f,M="onPointerLeave",y="onPointerEnter",p="pointer"),Ee=v==null?V:Ea(v),T=w==null?V:Ea(w),V=new ee(M,p+"leave",v,t,O),V.target=Ee,V.relatedTarget=T,M=null,Cn(O)===_&&(ee=new ee(y,p+"enter",w,t,O),ee.target=T,ee.relatedTarget=Ee,M=ee),Ee=M,ee=v&&w?ze(v,w,L1):null,v!==null&&gm(C,V,v,ee,!1),w!==null&&Ee!==null&&gm(C,Ee,w,ee,!0)))}e:{if(v=_?Ea(_):window,w=v.nodeName&&v.nodeName.toLowerCase(),w==="select"||w==="input"&&v.type==="file")var P=Af;else if(Nf(v))if(Mf)P=Yg;else{P=qg;var je=Ug}else w=v.nodeName,!w||w.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?_&&bu(_.elementType)&&(P=Af):P=Hg;if(P&&(P=P(e,_))){xf(C,P,t,O);break e}je&&je(e,v,_)}switch(je=_?Ea(_):window,e){case"focusin":(Nf(je)||je.contentEditable==="true")&&(Bi=je,ku=_,Hl=null);break;case"focusout":Hl=ku=Bi=null;break;case"mousedown":Du=!0;break;case"contextmenu":case"mouseup":case"dragend":Du=!1,Lf(C,t,O);break;case"selectionchange":if(Kg)break;case"keydown":case"keyup":Lf(C,t,O)}var le;if(xu)e:{switch(e){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else zi?wf(e,t)&&(oe="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(oe="onCompositionStart");oe&&(Sf&&t.locale!=="ko"&&(zi||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&zi&&(le=gf()):(wa=O,Tu="value"in wa?wa.value:wa.textContent,zi=!0)),je=Vs(_,oe),0<je.length&&(oe=new yf(oe,e,null,t,O),C.push({event:oe,listeners:je}),le?oe.data=le:(le=Of(t),le!==null&&(oe.data=le)))),(le=Dg?jg(e,t):zg(e,t))&&(oe=Vs(_,"onBeforeInput"),0<oe.length&&(je=new yf("onBeforeInput","beforeinput",null,t,O),C.push({event:je,listeners:oe}),je.data=le)),D1(C,e,_,t,O)}mm(C,n)})}function fr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Vs(e,n){for(var t=n+"Capture",a=[];e!==null;){var i=e,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=kl(e,t),i!=null&&a.unshift(fr(e,i,l)),i=kl(e,n),i!=null&&a.push(fr(e,i,l))),e.tag===3)return a;e=e.return}return[]}function L1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function gm(e,n,t,a,i){for(var l=n._reactName,r=[];t!==null&&t!==a;){var u=t,h=u.alternate,_=u.stateNode;if(u=u.tag,h!==null&&h===a)break;u!==5&&u!==26&&u!==27||_===null||(h=_,i?(_=kl(t,l),_!=null&&r.unshift(fr(t,_,h))):i||(_=kl(t,l),_!=null&&r.push(fr(t,_,h)))),t=t.return}r.length!==0&&e.push({event:n,listeners:r})}var U1=/\r\n?/g,q1=/\u0000|\uFFFD/g;function bm(e){return(typeof e=="string"?e:""+e).replace(U1,`
`).replace(q1,"")}function vm(e,n){return n=bm(n),bm(e)===n}function Fe(e,n,t,a,i,l){switch(t){case"children":if(typeof a=="string")n==="body"||n==="textarea"&&a===""||ki(e,a);else if(typeof a=="number"||typeof a=="bigint")n!=="body"&&ki(e,""+a);else return;break;case"className":ta(e,"class",a);break;case"tabIndex":ta(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":ta(e,t,a);break;case"style":hf(e,a,l);return;case"data":if(n!=="object"){ta(e,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=Ur(a),e.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(t==="formAction"?(n!=="input"&&Fe(e,n,"name",i.name,i,null),Fe(e,n,"formEncType",i.formEncType,i,null),Fe(e,n,"formMethod",i.formMethod,i,null),Fe(e,n,"formTarget",i.formTarget,i,null)):(Fe(e,n,"encType",i.encType,i,null),Fe(e,n,"method",i.method,i,null),Fe(e,n,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=Ur(a),e.setAttribute(t,a);break;case"onClick":a!=null&&(e.onclick=qt);return;case"onScroll":a!=null&&ke("scroll",e);return;case"onScrollEnd":a!=null&&ke("scrollend",e);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(t=a.__html,t!=null){if(i.children!=null)throw Error(c(60));l?.__html!==t&&(e.innerHTML=t)}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}t=Ur(a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":a===!0?e.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(t,a):e.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(t):e.setAttribute(t,a);break;case"popover":ke("beforetoggle",e),ke("toggle",e),Ye(e,"popover",a);break;case"xlinkActuate":jn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":jn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":jn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":jn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":jn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":jn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":jn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":jn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":jn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ye(e,"is",a);break;case"innerText":case"textContent":return;default:if(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")t=ig.get(t)||t,Ye(e,t,a);else return}Le=!0}function gc(e,n,t,a,i,l){switch(t){case"style":hf(e,a,l);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(t=a.__html,t!=null){if(i.children!=null)throw Error(c(60));l?.__html!==t&&(e.innerHTML=t)}}break;case"children":if(typeof a=="string")ki(e,a);else if(typeof a=="number"||typeof a=="bigint")ki(e,""+a);else return;break;case"onScroll":a!=null&&ke("scroll",e);return;case"onScrollEnd":a!=null&&ke("scrollend",e);return;case"onClick":a!=null&&(e.onclick=qt);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!zr.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(i=t.endsWith("Capture"),l=t.slice(2,i?t.length-7:void 0),n=e[B]||null,n=n!=null?n[t]:null,typeof n=="function"&&e.removeEventListener(l,n,i),typeof a=="function")){typeof n!="function"&&n!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(l,a,i);break e}Le=!0,t in e?e[t]=a:a===!0?e.setAttribute(t,""):Ye(e,t,a)}return}Le=!0}function Hn(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ke("error",e),ke("load",e);var a=!1,i=!1,l;for(l in t)if(t.hasOwnProperty(l)){var r=t[l];if(r!=null)switch(l){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,n));default:Fe(e,n,l,r,t,null)}}i&&Fe(e,n,"srcSet",t.srcSet,t,null),a&&Fe(e,n,"src",t.src,t,null);return;case"input":ke("invalid",e);var u=l=r=i=null,h=null,_=null;for(a in t)if(t.hasOwnProperty(a)){var O=t[a];if(O!=null)switch(a){case"name":i=O;break;case"type":r=O;break;case"checked":h=O;break;case"defaultChecked":_=O;break;case"value":l=O;break;case"defaultValue":u=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(c(137,n));break;default:Fe(e,n,a,O,t,null)}}Lr(e,l,u,h,_,r,i,!1);return;case"select":ke("invalid",e),a=r=l=null;for(i in t)if(t.hasOwnProperty(i)&&(u=t[i],u!=null))switch(i){case"value":l=u;break;case"defaultValue":r=u;break;case"multiple":a=u;default:Fe(e,n,i,u,t,null)}n=l,t=r,e.multiple=!!a,n!=null?Ri(e,!!a,n,!1):t!=null&&Ri(e,!!a,t,!0);return;case"textarea":ke("invalid",e),l=i=a=null;for(r in t)if(t.hasOwnProperty(r)&&(u=t[r],u!=null))switch(r){case"value":a=u;break;case"defaultValue":i=u;break;case"children":l=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(c(91));break;default:Fe(e,n,r,u,t,null)}ff(e,a,i,l);return;case"option":for(h in t)t.hasOwnProperty(h)&&(a=t[h],a!=null)&&(h==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":Fe(e,n,h,a,t,null));return;case"dialog":ke("beforetoggle",e),ke("toggle",e),ke("cancel",e),ke("close",e);break;case"iframe":case"object":ke("load",e);break;case"video":case"audio":for(a=0;a<cr.length;a++)ke(cr[a],e);break;case"image":ke("error",e),ke("load",e);break;case"details":ke("toggle",e);break;case"embed":case"source":case"link":ke("error",e),ke("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(_ in t)if(t.hasOwnProperty(_)&&(a=t[_],a!=null))switch(_){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,n));default:Fe(e,n,_,a,t,null)}return;default:if(bu(n)){for(O in t)t.hasOwnProperty(O)&&(a=t[O],a!==void 0&&gc(e,n,O,a,t,void 0));return}}for(u in t)t.hasOwnProperty(u)&&(a=t[u],a!=null&&Fe(e,n,u,a,t,null))}var H1={};function Y1(e,n,t,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,r=null,u=null,h=null,_=null,O=null;for(w in t){var C=t[w];if(t.hasOwnProperty(w)&&C!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":h=C;default:a.hasOwnProperty(w)||Fe(e,n,w,null,a,C)}}for(var v in a){var w=a[v];if(C=t[v],a.hasOwnProperty(v)&&(w!=null||C!=null))switch(v){case"type":w!==C&&(Le=!0),l=w;break;case"name":w!==C&&(Le=!0),i=w;break;case"checked":w!==C&&(Le=!0),_=w;break;case"defaultChecked":w!==C&&(Le=!0),O=w;break;case"value":w!==C&&(Le=!0),r=w;break;case"defaultValue":w!==C&&(Le=!0),u=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(c(137,n));break;default:w!==C&&Fe(e,n,v,w,a,C)}}st(e,r,u,h,_,O,l,i);return;case"select":w=r=u=v=null;for(l in t)if(h=t[l],t.hasOwnProperty(l)&&h!=null)switch(l){case"value":break;case"multiple":w=h;default:a.hasOwnProperty(l)||Fe(e,n,l,null,a,h)}for(i in a)if(l=a[i],h=t[i],a.hasOwnProperty(i)&&(l!=null||h!=null))switch(i){case"value":l!==h&&(Le=!0),v=l;break;case"defaultValue":l!==h&&(Le=!0),u=l;break;case"multiple":l!==h&&(Le=!0),r=l;default:l!==h&&Fe(e,n,i,l,a,h)}n=u,t=r,a=w,v!=null?Ri(e,!!t,v,!1):!!a!=!!t&&(n!=null?Ri(e,!!t,n,!0):Ri(e,!!t,t?[]:"",!1));return;case"textarea":w=v=null;for(u in t)if(i=t[u],t.hasOwnProperty(u)&&i!=null&&!a.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:Fe(e,n,u,null,a,i)}for(r in a)if(i=a[r],l=t[r],a.hasOwnProperty(r)&&(i!=null||l!=null))switch(r){case"value":i!==l&&(Le=!0),v=i;break;case"defaultValue":i!==l&&(Le=!0),w=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(c(91));break;default:i!==l&&Fe(e,n,r,i,a,l)}cf(e,v,w);return;case"option":for(var V in t)v=t[V],t.hasOwnProperty(V)&&v!=null&&!a.hasOwnProperty(V)&&(V==="selected"?e.selected=!1:Fe(e,n,V,null,a,v));for(h in a)v=a[h],w=t[h],a.hasOwnProperty(h)&&v!==w&&(v!=null||w!=null)&&(h==="selected"?(v!==w&&(Le=!0),e.selected=v&&typeof v!="function"&&typeof v!="symbol"):Fe(e,n,h,v,a,w));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in t)v=t[ee],t.hasOwnProperty(ee)&&v!=null&&!a.hasOwnProperty(ee)&&Fe(e,n,ee,null,a,v);for(_ in a)if(v=a[_],w=t[_],a.hasOwnProperty(_)&&v!==w&&(v!=null||w!=null))switch(_){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(c(137,n));break;default:Fe(e,n,_,v,a,w)}return;default:if(bu(n)){for(var Ee in t)v=t[Ee],t.hasOwnProperty(Ee)&&v!==void 0&&!a.hasOwnProperty(Ee)&&gc(e,n,Ee,void 0,a,v);for(O in a)v=a[O],w=t[O],!a.hasOwnProperty(O)||v===w||v===void 0&&w===void 0||gc(e,n,O,v,a,w);return}}for(var y in t)v=t[y],t.hasOwnProperty(y)&&v!=null&&!a.hasOwnProperty(y)&&Fe(e,n,y,null,a,v);for(C in a)v=a[C],w=t[C],!a.hasOwnProperty(C)||v===w||v==null&&w==null||Fe(e,n,C,v,a,w)}function ym(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function G1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),a=0;a<t.length;a++){var i=t[a],l=i.transferSize,r=i.initiatorType,u=i.duration;if(l&&u&&ym(r)){for(r=0,u=i.responseEnd,a+=1;a<t.length;a++){var h=t[a],_=h.startTime;if(_>u)break;var O=h.transferSize,C=h.initiatorType;O&&ym(C)&&(h=h.responseEnd,r+=O*(h<u?1:(u-_)/(h-_)))}if(--a,n+=8*(l+r)/(i.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var bc=null,vc=null;function dr(e){return e.nodeType===9?e:e.ownerDocument}function _m(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Sm(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Tm(e,n,t,a){return t=dr(t).createElement(e),t[xn]=a,t[B]=n,Hn(t,e,n),yn(t),t}function yc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var _c=null;function K1(){var e=window.event;return e&&e.type==="popstate"?e===_c?!1:(_c=e,!0):(_c=null,!1)}var Sc=typeof setTimeout=="function"?setTimeout:void 0,V1=typeof clearTimeout=="function"?clearTimeout:void 0,Em=typeof Promise=="function"?Promise:void 0,wm=typeof requestAnimationFrame=="function"?requestAnimationFrame:Sc,I1=typeof queueMicrotask=="function"?queueMicrotask:typeof Em<"u"?function(e){return Em.resolve(null).then(e).catch(Q1)}:Sc;function Q1(e){setTimeout(function(){throw e})}function Va(e){return e==="head"}function Om(e,n){var t=n,a=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"||t==="/&"){if(a===0){e.removeChild(i),pl(n);return}a--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")a++;else if(t==="html")Mc(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Mc(t);for(var l=t.firstChild;l;){var r=l.nextSibling,u=l.nodeName;l[et]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&l.rel.toLowerCase()==="stylesheet"||t.removeChild(l),l=r}}else t==="body"&&Mc(e.ownerDocument.body);t=i}while(t);pl(n)}function Nm(e,n){var t=e;e=0;do{var a=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=a}while(t)}function xm(e,n,t){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,t!=null&&(e.style.viewTransitionClass=t),t=getComputedStyle(e),t.display==="inline"){if(n=e.getClientRects(),n.length===1)var a=1;else for(var i=a=0;i<n.length;i++){var l=n[i];0<l.width&&0<l.height&&a++}a===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+t.paddingTop,e.marginBottom="-"+t.paddingBottom)}}function Am(e,n){e=e.style,n=n.style;var t=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=t==null||typeof t=="boolean"?"":(""+t).trim(),t=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=t==null||typeof t=="boolean"?"":(""+t).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(t=n.display,e.display=t==null||typeof t=="boolean"?"":t,t=n.margin,t!=null?e.margin=t:(t=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=t==null||typeof t=="boolean"?"":t,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function X1(e,n,t){return t=t.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=t.innerHeight&&e.left<=t.innerWidth}}function Tc(e){var n=e.getBoundingClientRect(),t=getComputedStyle(e);return X1(n,t,e)}function Z1(e){return e.documentElement.clientHeight}function J1(e){this.addEventListener("load",e),this.addEventListener("error",e)}function F1(e,n,t,a,i,l,r,u,h){var _=n.nodeType===9?n:n.ownerDocument;try{var O=_.startViewTransition({update:function(){var v=_.defaultView,w=v.navigation&&v.navigation.transition,V=_.fonts.status;a();var ee=[];if(V==="loaded"&&(Z1(_),_.fonts.status==="loading"&&ee.push(_.fonts.ready)),V=ee.length,e!==null)for(var Ee=e.suspenseyImages,y=0,p=0;p<Ee.length;p++){var T=Ee[p];if(!T.complete){var M=T.getBoundingClientRect();if(0<M.bottom&&0<M.right&&M.top<v.innerHeight&&M.left<v.innerWidth){if(y+=Jm(T),y>Xs){ee.length=V;break}T=new Promise(J1.bind(T)),ee.push(T)}}}if(0<ee.length)return v=Promise.race([Promise.all(ee),new Promise(function(P){return setTimeout(P,500)})]).then(i,i),(w?Promise.allSettled([w.finished,v]):v).then(l,l);if(i(),w)return w.finished.then(l,l);l()},types:t});_.__reactViewTransition=O;var C=[];return O.ready.then(function(){for(var v=_.documentElement.getAnimations({subtree:!0}),w=0;w<v.length;w++){var V=v[w],ee=V.effect,Ee=ee.pseudoElement;if(Ee!=null&&Ee.startsWith("::view-transition")){C.push(V),V=ee.getKeyframes();for(var y=Ee=void 0,p=!0,T=0;T<V.length;T++){var M=V[T],P=M.width;if(Ee===void 0)Ee=P;else if(Ee!==P){p=!1;break}if(P=M.height,y===void 0)y=P;else if(y!==P){p=!1;break}delete M.width,delete M.height,M.transform==="none"&&delete M.transform}p&&Ee!==void 0&&y!==void 0&&(ee.setKeyframes(V),p=getComputedStyle(ee.target,ee.pseudoElement),p.width!==Ee||p.height!==y)&&(p=V[0],p.width=Ee,p.height=y,p=V[V.length-1],p.width=Ee,p.height=y,ee.setKeyframes(V))}}r()},function(v){_.__reactViewTransition===O&&(_.__reactViewTransition=null);try{typeof v=="object"&&v!==null&&v.name==="InvalidStateError"&&(v.message==="View transition was skipped because document visibility state is hidden."||v.message==="Skipping view transition because document visibility state has become hidden."||v.message==="Skipping view transition because viewport size changed."||v.message==="Transition was aborted because of invalid state")&&(v=null),v!==null&&h(v)}finally{a(),i(),r()}}),O.finished.finally(function(){for(var v=0;v<C.length;v++)C[v].cancel();_.__reactViewTransition===O&&(_.__reactViewTransition=null),u()}),O}catch{return a(),i(),r(),null}}function Si(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}Si.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:ie({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},Si.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,t=e.getAnimations({subtree:!0}),a=[],i=0;i<t.length;i++){var l=t[i].effect;l!==null&&l.target===e&&l.pseudoElement===n&&a.push(t[i])}return a},Si.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Mm(e){return{name:e,group:new Si("group",e),imagePair:new Si("image-pair",e),old:new Si("old",e),new:new Si("new",e)}}function mt(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}mt.prototype.addEventListener=function(e,n,t){var a=null,i=null;if(!(t!=null&&typeof t!="boolean"&&(a=t.signal||null,a!==null&&a.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var l=this._eventListeners;if(Rm(l,e,n,t)===-1){var r=this,u=n;t!=null&&typeof t!="boolean"&&t.once===!0&&(u=function(h){r.removeEventListener(e,n,t),typeof n=="function"?n.call(this,h):n.handleEvent(h)}),a!==null&&(i=r.removeEventListener.bind(r,e,n,t),a.addEventListener("abort",i,{once:!0}),i=a.removeEventListener.bind(a,"abort",i)),a=ol(t),l.push({type:e,listener:n,optionsOrUseCapture:t,attachedListener:u,cleanup:i}),b(this._fragmentFiber.child,!1,P1,e,u,a)}this._eventListeners=l}};function P1(e,n,t,a){return W(e).addEventListener(n,t,a),!1}mt.prototype.removeEventListener=function(e,n,t){var a=this._eventListeners;if(a!==null&&(n=Rm(a,e,n,t),n!==-1)){var i=a[n];t=i.attachedListener;var l=i.cleanup;i=ol(i.optionsOrUseCapture),b(this._fragmentFiber.child,!1,W1,e,t,i),a.splice(n,1),l!==null&&l()}};function W1(e,n,t,a){return W(e).removeEventListener(n,t,a),!1}function ol(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Cm(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function Rm(e,n,t,a){if(e.length===0)return-1;a=Cm(a);for(var i=0;i<e.length;i++){var l=e[i];if(l.type===n&&l.listener===t&&Cm(l.optionsOrUseCapture)===a)return i}return-1}mt.prototype.dispatchEvent=function(e){var n=N(this._fragmentFiber);if(n===null)return!0;n=W(n);var t=this._eventListeners;if(t!==null&&0<t.length||!e.bubbles){var a=n.nodeType===9?n.createComment(""):document.createTextNode("");if(t)for(var i=0;i<t.length;i++){var l=t[i];a.addEventListener(l.type,l.attachedListener,ol(l.optionsOrUseCapture))}if(n.appendChild(a),e=a.dispatchEvent(e),t)for(i=0;i<t.length;i++)l=t[i],a.removeEventListener(l.type,l.attachedListener,ol(l.optionsOrUseCapture));return n.removeChild(a),e}return n.dispatchEvent(e)},mt.prototype.focus=function(e){b(this._fragmentFiber.child,!0,km,e,void 0,void 0)};function km(e,n){return e.tag===6?!1:(e=W(e),c0(e,n))}mt.prototype.focusLast=function(e){var n=[];b(this._fragmentFiber.child,!0,Ec,n,void 0,void 0);for(var t=n.length-1;0<=t&&!km(n[t],e);t--);};function Ec(e,n){return n.push(e),!1}mt.prototype.blur=function(){var e=N(this._fragmentFiber);e!==null&&(e=W(e),e=dr(e).activeElement,e!==null&&b(this._fragmentFiber.child,!1,$1,e,void 0,void 0))};function $1(e,n){return e.tag===6?!1:(e=W(e),e===n||e.contains(n)?(n.blur(),!0):!1)}mt.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),b(this._fragmentFiber.child,!1,e0,e,void 0,void 0)};function e0(e,n){return e.tag===6||(e=W(e),n.observe(e)),!1}mt.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),b(this._fragmentFiber.child,!1,n0,e,void 0,void 0);for(var t=n=0;t<zt.length;t++){var a=zt[t];a.fragmentInstance===this&&a.observer===e?e.unobserve(a.instance):zt[n++]=a}zt.length=n}};function n0(e,n){return e.tag===6||(e=W(e),n.unobserve(e)),!1}var zt=[],wc=!1;function t0(e,n,t){zt.push({fragmentInstance:e,observer:n,instance:t}),wc||(wc=!0,f0(function(){wc=!1;var a=zt;zt=[];for(var i=0;i<a.length;i++){var l=a[i];l.observer.unobserve(l.instance)}}))}mt.prototype.getClientRects=function(){var e=[];return b(this._fragmentFiber.child,!1,a0,e,void 0,void 0),e};function a0(e,n){if(e.tag===6){e=e.stateNode;var t=e.ownerDocument.createRange();t.selectNodeContents(e),n.push.apply(n,t.getClientRects())}else e=W(e),n.push.apply(n,e.getClientRects());return!1}mt.prototype.getRootNode=function(e){var n=N(this._fragmentFiber);return n===null?this:W(n).getRootNode(e)},mt.prototype.compareDocumentPosition=function(e){var n=N(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var t=[];b(this._fragmentFiber.child,!1,Ec,t,void 0,void 0);var a=W(n);if(t.length===0){if(t=a,H(this._fragmentFiber)){e:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break e}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(t=n)}n=this._fragmentFiber;var i=a=t.compareDocumentPosition(e);return t===e?i=Node.DOCUMENT_POSITION_CONTAINS:a&Node.DOCUMENT_POSITION_CONTAINED_BY&&(t=Y(n)[1],t===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=W(t).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=W(t[0]),i=W(t[t.length-1]);var l=H(this._fragmentFiber)?n.parentElement:a;if(l==null)return Node.DOCUMENT_POSITION_DISCONNECTED;a=l.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,l=l.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=n.compareDocumentPosition(e),u=i.compareDocumentPosition(e),h=r&Node.DOCUMENT_POSITION_CONTAINED_BY||u&Node.DOCUMENT_POSITION_CONTAINED_BY;return u=a&&l&&r&Node.DOCUMENT_POSITION_FOLLOWING&&u&Node.DOCUMENT_POSITION_PRECEDING,n=a&&n===e||l&&i===e||h||u?Node.DOCUMENT_POSITION_CONTAINED_BY:!a&&n===e||!l&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||i0(n,this._fragmentFiber,t[0],t[t.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function i0(e,n,t,a,i){var l=Cn(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(t=!!l)e:{for(;l!==null;){if(l.tag===7&&(l===n||l.alternate===n)){t=!0;break e}l=l.return}t=!1}return t}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(l===null)return l=i.ownerDocument,i===l||i===l.documentElement||i===l.body;e:{for(l=n,n=N(n);l!==null;){if(!(l.tag!==5&&l.tag!==3&&l.tag!==27||l!==n&&l.alternate!==n)){l=!0;break e}l=l.return}l=!1}return l}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!l)&&!(n=l===t)&&(n=ze(t,l,He),n===null?n=!1:(b(n,!0,ce,l,t),l=be,be=null,n=l!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!l)&&!(n=l===a)&&(n=ze(a,l,He),n===null?n=!1:(b(n,!0,we,l,a),l=be,fe=be=null,n=l!==null)),n):!1}function Dm(e,n){var t=e.ownerDocument.createRange();t.selectNodeContents(e),e=t.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}mt.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(c(566));var n=[];b(this._fragmentFiber.child,!1,Ec,n,void 0,void 0);var t=e!==!1;if(n.length===0){var a=Y(this._fragmentFiber);if(a=t?a[1]||a[0]||N(this._fragmentFiber):a[0]||a[1],a===null)return;if(a.tag===6){e=W(a),Dm(e,t);return}if(a=W(a),a.nodeType!==9){if(a.nodeType===11){t="host"in a?a.host:null,t!==null&&t.scrollIntoView(e);return}a.scrollIntoView(e)}}for(a=t?n.length-1:0;a!==(t?-1:n.length);){var i=n[a];i.tag===6?(i=W(i),Dm(i,t)):W(i).scrollIntoView(e),a+=t?-1:1}};function l0(e,n){return e=W(e),jm(e,n),!1}function jm(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function zm(e,n){var t=n._eventListeners;if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];e.addEventListener(i.type,i.attachedListener,ol(i.optionsOrUseCapture))}e.nodeType!==3&&(t=n._observers,t!==null&&t.forEach(function(l){for(var r=0,u=0;u<zt.length;u++){var h=zt[u];(h.fragmentInstance!==n||h.observer!==l||h.instance!==e)&&(zt[r++]=h)}zt.length=r,l.observe(e)}),jm(e,n))}function r0(e,n){var t=n._eventListeners;if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];e.removeEventListener(i.type,i.attachedListener,ol(i.optionsOrUseCapture))}e.nodeType!==3&&(t=n._observers,t!==null&&t.forEach(function(l){typeof l.rootMargin=="string"?t0(n,l,e):l.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function Oc(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Oc(t),Mn(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function s0(e,n,t,a){for(;e.nodeType===1;){var i=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[et])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=Ot(e.nextSibling),e===null)break}return null}function u0(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ot(e.nextSibling),e===null))return null;return e}function Bm(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ot(e.nextSibling),e===null))return null;return e}function Nc(e){return e.data==="$?"||e.data==="$~"}function xc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function o0(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var a=function(){n(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Ot(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Ac=null;function Lm(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return Ot(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function Um(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function c0(e,n){function t(){a=!0}if(e.ownerDocument.activeElement===e)return!0;var a=!1;try{e.ownerDocument.addEventListener("focus",t,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",t,!0)}return a}function f0(e){wm(function(){wm(function(n){return e(n)})})}function qm(e,n,t){switch(n=dr(t),e){case"html":if(e=n.documentElement,!e)throw Error(c(452));return e;case"head":if(e=n.head,!e)throw Error(c(453));return e;case"body":if(e=n.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Hm(e,n,t){for(var a in t){var i=t[a];t.hasOwnProperty(a)&&i!=null&&Fe(e,n,a,null,H1,i)}t.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===qt&&(e.onclick=null),Mn(e)}function Mc(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Mn(e)}var Nt=new Map,Ym=new Set;function hr(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var pa=ue.d;ue.d={f:d0,r:h0,D:m0,C:p0,L:g0,m:b0,X:y0,S:v0,M:_0};function d0(){var e=pa.f(),n=Us();return e||n}function h0(e){var n=$t(e);n!==null&&n.tag===5&&n.type==="form"?Kd(n):pa.r(e)}var cl=typeof document>"u"?null:document;function Gm(e,n,t){var a=cl;if(a&&typeof n=="string"&&n){var i=Xe(n);i='link[rel="'+e+'"][href="'+i+'"]',typeof t=="string"&&(i+='[crossorigin="'+t+'"]'),Ym.has(i)||(Ym.add(i),e={rel:e,crossOrigin:t,href:n},a.querySelector(i)===null&&(n=a.createElement("link"),Hn(n,"link",e),yn(n),a.head.appendChild(n)))}}function m0(e){pa.D(e),Gm("dns-prefetch",e,null)}function p0(e,n){pa.C(e,n),Gm("preconnect",e,n)}function g0(e,n,t){pa.L(e,n,t);var a=cl;if(a&&e&&n){var i='link[rel="preload"][as="'+Xe(n)+'"]';n==="image"&&t&&t.imageSrcSet?(i+='[imagesrcset="'+Xe(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(i+='[imagesizes="'+Xe(t.imageSizes)+'"]')):i+='[href="'+Xe(e)+'"]';var l=i;switch(n){case"style":l=fl(e);break;case"script":l=dl(e)}if(!(Nt.has(l)||(e=ie({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),Nt.set(l,e),a.querySelector(i)!==null||n==="style"&&a.querySelector(mr(l))||n==="script"&&a.querySelector(pr(l))))){var r=a.createElement("link");Hn(r,"link",e),n==="style"&&(r[Wt]=!0,r.onload=r.onerror=function(){Dr(r)}),yn(r),a.head.appendChild(r)}}}function b0(e,n){pa.m(e,n);var t=cl;if(t&&e){var a=n&&typeof n.as=="string"?n.as:"script",i='link[rel="modulepreload"][as="'+Xe(a)+'"][href="'+Xe(e)+'"]',l=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=dl(e)}if(!Nt.has(l)&&(e=ie({rel:"modulepreload",href:e},n),Nt.set(l,e),t.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(pr(l)))return}a=t.createElement("link"),Hn(a,"link",e),yn(a),t.head.appendChild(a)}}}function v0(e,n,t){pa.S(e,n,t);var a=cl;if(a&&e){var i=ea(a).hoistableStyles,l=fl(e);n=n||"default";var r=i.get(l);if(!r){var u={loading:0,preload:null};if(r=a.querySelector(mr(l)))u.loading=5;else{e=ie({rel:"stylesheet",href:e,"data-precedence":n},t),(t=Nt.get(l))&&Cc(e,t);var h=r=a.createElement("link");yn(h),Hn(h,"link",e),h._p=new Promise(function(_,O){h.onload=_,h.onerror=O}),h.addEventListener("load",function(){u.loading|=1}),h.addEventListener("error",function(){u.loading|=2}),u.loading|=4,Is(r,n,a)}r={type:"stylesheet",instance:r,count:1,state:u},i.set(l,r)}}}function y0(e,n){pa.X(e,n);var t=cl;if(t&&e){var a=ea(t).hoistableScripts,i=dl(e),l=a.get(i);l||(l=t.querySelector(pr(i)),l||(e=ie({src:e,async:!0},n),(n=Nt.get(i))&&Rc(e,n),l=t.createElement("script"),yn(l),Hn(l,"link",e),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function _0(e,n){pa.M(e,n);var t=cl;if(t&&e){var a=ea(t).hoistableScripts,i=dl(e),l=a.get(i);l||(l=t.querySelector(pr(i)),l||(e=ie({src:e,async:!0,type:"module"},n),(n=Nt.get(i))&&Rc(e,n),l=t.createElement("script"),yn(l),Hn(l,"link",e),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function Km(e,n,t,a){var i=(i=Bt.current)?hr(i):null;if(!i)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(t=fl(t.href),n=ea(i).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=fl(t.href);var l=ea(i).hoistableStyles,r=l.get(e);if(r||(i=i.ownerDocument||i,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,r),(l=i.querySelector(mr(e)))?l._p||(r.instance=l,r.state.loading=5):(l=Nt.get(e),l||(l={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Nt.set(e,l)),S0(i,e,l,r.state))),n&&a===null)throw Error(c(528,""));return r}if(n&&a!==null)throw Error(c(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(t=dl(t),n=ea(i).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function fl(e){return'href="'+Xe(e)+'"'}function mr(e){return'link[rel="stylesheet"]['+e+"]"}function Vm(e){return ie({},e,{"data-precedence":e.precedence,precedence:null})}function S0(e,n,t,a){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Wt]!==!0){a.loading=1;return}}else n=e.createElement("link"),n[Wt]=!0,n.onload=n.onerror=Dr.bind(null,n),Hn(n,"link",t),yn(n),e.head.appendChild(n);a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2})}function dl(e){return'[src="'+Xe(e)+'"]'}function pr(e){return"script[async]"+e}function Im(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var a=e.querySelector('style[data-href~="'+Xe(t.href)+'"]');if(a)return n.instance=a,yn(a),a;var i=ie({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),yn(a),Hn(a,"style",i),Is(a,t.precedence,e),n.instance=a;case"stylesheet":i=fl(t.href);var l=e.querySelector(mr(i));if(l)return n.state.loading|=4,n.instance=l,yn(l),l;a=Vm(t),(i=Nt.get(i))&&Cc(a,i),l=(e.ownerDocument||e).createElement("link"),yn(l);var r=l;return r._p=new Promise(function(u,h){r.onload=u,r.onerror=h}),Hn(l,"link",a),n.state.loading|=4,Is(l,t.precedence,e),n.instance=l;case"script":return l=dl(t.src),(i=e.querySelector(pr(l)))?(n.instance=i,yn(i),i):(a=t,(i=Nt.get(l))&&(a=ie({},t),Rc(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),yn(i),Hn(i,"link",a),e.head.appendChild(i),n.instance=i);case"void":return null;default:throw Error(c(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,Is(a,t.precedence,e));return n.instance}function Is(e,n,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,l=i,r=0;r<a.length;r++){var u=a[r];if(u.dataset.precedence===n)l=u;else if(l!==i)break}l?l.parentNode.insertBefore(e,l.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function Cc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Rc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Qs=null;function Qm(e,n,t){if(Qs===null){var a=new Map,i=Qs=new Map;i.set(t,a)}else i=Qs,a=i.get(t),a||(a=new Map,i.set(t,a));if(a.has(e))return a;for(a.set(e,null),t=t.getElementsByTagName(e),i=0;i<t.length;i++){var l=t[i];if(!(l[et]||l[xn]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var r=l.getAttribute(n)||"";r=e+r;var u=a.get(r);u?u.push(l):a.set(r,[l])}}return a}function kc(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function T0(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Xm(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Zm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Jm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Fm(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=Jm(n),e.suspenseyImages.push(n)),e=O0.bind(e),n.decode().then(e,e))}function E0(e,n,t,a){if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=fl(a.href),l=n.querySelector(mr(i));if(l){n=l._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=gr.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=l,yn(l);return}l=n.ownerDocument||n,a=Vm(a),(i=Nt.get(i))&&Cc(a,i),l=l.createElement("link"),yn(l);var r=l;r._p=new Promise(function(u,h){r.onload=u,r.onerror=h}),Hn(l,"link",a),t.instance=l}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=gr.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var Xs=0;function w0(e,n){return e.stylesheets&&e.count===0&&Js(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var a=setTimeout(function(){if(e.stylesheets&&Js(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4+n);0<e.imgBytes&&Xs===0&&(Xs=62500*G1());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Js(e,e.stylesheets),e.unsuspend)){var l=e.unsuspend;e.unsuspend=null,l()}},(e.imgBytes>Xs?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(i)}}:null}function Pm(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Js(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function gr(){this.count--,Pm(this)}function O0(){this.imgCount--,Pm(this)}var Zs=null;function Js(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Zs=new Map,n.forEach(N0,e),Zs=null,gr.call(e))}function N0(e,n){if(!(n.state.loading&4)){var t=Zs.get(e);if(t)var a=t.get(null);else{t=new Map,Zs.set(e,t);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var r=i[l];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(t.set(r.dataset.precedence,r),a=r)}a&&t.set(null,a)}i=n.instance,r=i.getAttribute("data-precedence"),l=t.get(r)||a,l===a&&t.set(null,i),t.set(r,i),this.count++,a=gr.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),l?l.parentNode.insertBefore(i,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),n.state.loading|=4}}var hl={$$typeof:un,Provider:null,Consumer:null,_currentValue:Fn,_currentValue2:Fn,_threadCount:0};function x0(e,n,t,a,i,l,r,u,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ta(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ta(0),this.hiddenUpdates=Ta(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.transitionTypes=null,this.incompleteTransitions=new Map}function Wm(e,n,t,a,i,l,r,u,h,_,O,C){return e=new x0(e,n,t,r,h,_,O,C,u),n=1,l===!0&&(n|=24),l=nt(3,null,null,n),e.current=l,l.stateNode=e,n=Qu(),n.refCount++,e.pooledCache=n,n.refCount++,l.memoizedState={element:a,isDehydrated:t,cache:n},Fu(l),e}function $m(e){return e?(e=qi,e):qi}function ep(e,n,t,a,i,l){i=$m(i),a.context===null?a.context=i:a.pendingContext=i,a=ka(n),a.payload={element:t},l=l===void 0?null:l,l!==null&&(a.callback=l),t=Da(e,a,n),t!==null&&(lt(t,e,n),Xl(t,e,n))}function np(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Dc(e,n){np(e,n),(e=e.alternate)&&np(e,n)}function tp(e){if(e.tag===13||e.tag===31){var n=ii(e,67108864);n!==null&&lt(n,e,67108864),Dc(e,67108864)}}function ap(e){if(e.tag===13||e.tag===31){var n=ht();n=Ai(n);var t=ii(e,n);t!==null&&lt(t,e,n),Dc(e,n)}}var ml=!0;function A0(e,n,t,a){var i=$.T;$.T=null;var l=ue.p;try{ue.p=2,jc(e,n,t,a)}finally{ue.p=l,$.T=i}}function M0(e,n,t,a){var i=$.T;$.T=null;var l=ue.p;try{ue.p=8,jc(e,n,t,a)}finally{ue.p=l,$.T=i}}function jc(e,n,t,a){if(ml){var i=zc(a);if(i===null)pc(e,n,a,Fs,t),lp(e,a);else if(R0(i,e,n,t,a))a.stopPropagation();else if(lp(e,a),n&4&&-1<C0.indexOf(e)){for(;i!==null;){var l=$t(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var r=Pt(l.pendingLanes);if(r!==0){var u=l;for(u.pendingLanes|=2,u.entangledLanes|=2;r;){var h=1<<31-K(r);u.entanglements[1]|=h,r&=~h}Jt(l),(Ke&6)===0&&(zs=Kn()+500,or(0))}}break;case 31:case 13:u=ii(l,2),u!==null&&lt(u,l,2),Us(),Dc(l,2)}if(l=zc(a),l===null&&pc(e,n,a,Fs,t),l===i)break;i=l}i!==null&&a.stopPropagation()}else pc(e,n,a,null,t)}}function zc(e){return e=yu(e),Bc(e)}var Fs=null;function Bc(e){if(Fs=null,e=Cn(e),e!==null){var n=A(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=k(n),e!==null)return e;e=null}else if(t===31){if(e=j(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Fs=e,null}function ip(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xr()){case Ar:return 2;case xl:return 8;case At:case m:return 32;case R:return 268435456;default:return 32}default:return 32}}var Lc=!1,Ia=null,Qa=null,Xa=null,br=new Map,vr=new Map,Za=[],C0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function lp(e,n){switch(e){case"focusin":case"focusout":Ia=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":Xa=null;break;case"pointerover":case"pointerout":br.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":vr.delete(n.pointerId)}}function yr(e,n,t,a,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:l,targetContainers:[i]},n!==null&&(n=$t(n),n!==null&&tp(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function R0(e,n,t,a,i){switch(n){case"focusin":return Ia=yr(Ia,e,n,t,a,i),!0;case"dragenter":return Qa=yr(Qa,e,n,t,a,i),!0;case"mouseover":return Xa=yr(Xa,e,n,t,a,i),!0;case"pointerover":var l=i.pointerId;return br.set(l,yr(br.get(l)||null,e,n,t,a,i)),!0;case"gotpointercapture":return l=i.pointerId,vr.set(l,yr(vr.get(l)||null,e,n,t,a,i)),!0}return!1}function rp(e){var n=Cn(e.target);if(n!==null){var t=A(n);if(t!==null){if(n=t.tag,n===13){if(n=k(t),n!==null){e.blockedOn=n,kr(e.priority,function(){ap(t)});return}}else if(n===31){if(n=j(t),n!==null){e.blockedOn=n,kr(e.priority,function(){ap(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ps(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=zc(e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);vu=a,t.target.dispatchEvent(a),vu=null}else return n=$t(t),n!==null&&tp(n),e.blockedOn=t,!1;n.shift()}return!0}function sp(e,n,t){Ps(e)&&t.delete(n)}function k0(){Lc=!1,Ia!==null&&Ps(Ia)&&(Ia=null),Qa!==null&&Ps(Qa)&&(Qa=null),Xa!==null&&Ps(Xa)&&(Xa=null),br.forEach(sp),vr.forEach(sp)}function Ws(e,n){e.blockedOn===n&&(e.blockedOn=null,Lc||(Lc=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,k0)))}var $s=null;function up(e){$s!==e&&($s=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){$s===e&&($s=null);for(var n=0;n<e.length;n+=3){var t=e[n],a=e[n+1],i=e[n+2];if(typeof a!="function"){if(Bc(a||t)===null)continue;break}var l=$t(t);l!==null&&(e.splice(n,3),n-=3,vo(l,{pending:!0,data:i,method:t.method,action:a},a,i))}}))}function pl(e){function n(h){return Ws(h,e)}Ia!==null&&Ws(Ia,e),Qa!==null&&Ws(Qa,e),Xa!==null&&Ws(Xa,e),br.forEach(n),vr.forEach(n);for(var t=0;t<Za.length;t++){var a=Za[t];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Za.length&&(t=Za[0],t.blockedOn===null);)rp(t),t.blockedOn===null&&Za.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var i=t[a],l=t[a+1],r=i[B]||null;if(typeof l=="function")r||up(t);else if(r){var u=null;if(l&&l.hasAttribute("formAction")){if(i=l,r=l[B]||null)u=r.formAction;else if(Bc(i)!==null)continue}else u=r.action;typeof u=="function"?t[a+1]=u:(t.splice(a,3),a-=3),up(t)}}}function op(){function e(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(r){return i=r})},focusReset:"manual",scroll:"manual"})}function n(){i!==null&&(i(),i=null),a||setTimeout(t,20)}function t(){if(!a&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),i!==null&&(i(),i=null)}}}function Uc(e){this._internalRoot=e}eu.prototype.render=Uc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(c(409));var t=n.current,a=ht();ep(t,a,e,n,null,null)},eu.prototype.unmount=Uc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;ep(e.current,2,null,e,null,null),Us(),n[ne]=null}};function eu(e){this._internalRoot=e}eu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Rr();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Za.length&&n!==0&&n<Za[t].priority;t++);Za.splice(t,0,e),t===0&&rp(e)}};var cp=d.version;if(cp!=="19.3.1")throw Error(c(527,cp,"19.3.1"));ue.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=q(n),e=e!==null?z(e):null,e=e===null?null:e.stateNode,e};var D0={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:$,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nu.isDisabled&&nu.supportsFiber)try{en=nu.inject(D0),Be=nu}catch{}}return Sr.createRoot=function(e,n){if(!E(e))throw Error(c(299));var t=!1,a="",i=$d,l=eh,r=nh;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(l=n.onCaughtError),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=Wm(e,1,!1,null,null,t,a,null,i,l,r,op),e[ne]=n.current,mc(e),new Uc(n)},Sr.hydrateRoot=function(e,n,t){if(!E(e))throw Error(c(299));var a=!1,i="",l=$d,r=eh,u=nh,h=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError),t.formState!==void 0&&(h=t.formState)),n=Wm(e,1,!0,n,t??null,a,i,h,l,r,u,op),n.context=$m(null),t=n.current,a=ht(),a=Ai(a),i=ka(a),i.callback=null,Da(t,i,a),t=a,n.current.lanes=t,ni(n,t),Jt(n),e[ne]=n.current,mc(e),new eu(n)},Sr.version="19.3.1",Sr}var _p;function G0(){if(_p)return Hc.exports;_p=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(d){console.error(d)}}return s(),Hc.exports=Y0(),Hc.exports}var K0=G0();const V0=_l(K0);var L=af();const ou=_l(L),lf=["python","javascript","java","cpp"];function I0(){try{const s=localStorage.getItem("selectedLanguage");return s&&lf.includes(s)?s:"python"}catch{return"python"}}const Kp=L.createContext(void 0),Q0=({children:s})=>{const[d,f]=L.useState(I0);return L.useEffect(()=>{try{localStorage.setItem("selectedLanguage",d)}catch{}},[d]),o.jsx(Kp.Provider,{value:{selectedLanguage:d,setSelectedLanguage:f},children:s})};function Vp(){const s=L.useContext(Kp);if(s===void 0)throw new Error("useLanguage must be used within a LanguageProvider");return s}const Ip=L.createContext(void 0);function X0({children:s}){const[d,f]=L.useState(!1),c=()=>f(!0),E=()=>f(!1),A=()=>f(!d);return o.jsx(Ip.Provider,{value:{isSidebarOpen:d,showSidebar:c,hideSidebar:E,toggleSidebar:A},children:s})}function rf(){const s=L.useContext(Ip);if(s===void 0)throw new Error("useSidebar must be used within SidebarProvider");return s}const Qp=L.createContext(void 0);function Z0({children:s}){const[d,f]=L.useState("finder");return o.jsx(Qp.Provider,{value:{view:d,setView:f},children:s})}function fu(){const s=L.useContext(Qp);if(s===void 0)throw new Error("useView must be used within ViewProvider");return s}const J0="_topbar_1gvoe_1",F0="_container_1gvoe_17",P0="_leading_1gvoe_50",W0="_visuallyHidden_1gvoe_60",$0="_wordmark_1gvoe_72",eb="_title_1gvoe_89",nb="_segmented_1gvoe_128",tb="_segment_1gvoe_128",ab="_tools_1gvoe_204",ib="_select_1gvoe_222",lb="_selectChevron_1gvoe_266",rb="_iconLink_1gvoe_282",sb="_hamburger_1gvoe_311",ub="_inactive_1gvoe_321",ob="_hamburgerIcon_1gvoe_331",cb="_hamburgerTop_1gvoe_341",fb="_open_1gvoe_344",db="_hamburgerMiddle_1gvoe_348",hb="_hamburgerBottom_1gvoe_355",fn={topbar:J0,container:F0,leading:P0,visuallyHidden:W0,wordmark:$0,title:eb,segmented:nb,segment:tb,tools:ab,select:ib,selectChevron:lb,iconLink:rb,hamburger:sb,inactive:ub,hamburgerIcon:ob,hamburgerTop:cb,open:fb,hamburgerMiddle:db,hamburgerBottom:hb};function qe(...s){let d="";for(const f of s)if(f){if(typeof f=="string"||typeof f=="number")d+=(d&&" ")+f;else if(Array.isArray(f)){const c=qe(...f);c&&(d+=(d&&" ")+c)}else if(typeof f=="object")for(const c in f)f[c]&&(d+=(d&&" ")+c)}return d}function sf(){const s=document.documentElement,d=getComputedStyle(s).getPropertyValue("--navbar-height");return parseFloat(d)||76}function du(s,d=0){const f=document.querySelector(s);if(!f)return;const c=f.getBoundingClientRect().top+window.scrollY,E=window.matchMedia("(prefers-reduced-motion: reduce)").matches;window.scrollTo({top:Math.max(0,c-d),behavior:E?"auto":"smooth"})}const mb=2,pb=2e3;let nf=0;function uf(){cancelAnimationFrame(nf)}function gb(s,d){uf();const f=performance.now();let c=-1,E=0;const A=()=>{const k=document.querySelector(s);if(k){const U=k.getBoundingClientRect().top+window.scrollY;E=U===c?E+1:0,c=U}const j=performance.now()-f>pb;if(E>=mb||j){du(s,d);return}nf=requestAnimationFrame(A)};nf=requestAnimationFrame(A)}const bb="modulepreload",vb=function(s){return"/leetcode-pattern-drill/"+s},Sp={},wr=function(d,f,c){let E=Promise.resolve();if(f&&f.length>0){let U=function(q){return Promise.all(q.map(z=>Promise.resolve(z).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const k=document.querySelector("meta[property=csp-nonce]"),j=k?.nonce||k?.getAttribute("nonce");E=U(f.map(q=>{if(q=vb(q),q in Sp)return;Sp[q]=!0;const z=q.endsWith(".css"),b=z?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${q}"]${b}`))return;const N=document.createElement("link");if(N.rel=z?"stylesheet":bb,z||(N.as="script"),N.crossOrigin="",N.href=q,j&&N.setAttribute("nonce",j),document.head.appendChild(N),z)return new Promise((H,Y)=>{N.addEventListener("load",H),N.addEventListener("error",()=>Y(new Error(`Unable to preload CSS for ${q}`)))})}))}function A(k){const j=new Event("vite:preloadError",{cancelable:!0});if(j.payload=k,window.dispatchEvent(j),!j.defaultPrevented)throw k}return E.then(k=>{for(const j of k||[])j.status==="rejected"&&A(j.reason);return d().catch(A)})},yb="_button_1ebwq_1",_b={button:yb},Sb="dyslexic-font";function Tp(){wr(()=>Promise.resolve({}),__vite__mapDeps([0])),wr(()=>Promise.resolve({}),__vite__mapDeps([1]))}function Tb(){const[s,d]=L.useState(!1);L.useEffect(()=>{const c=document.documentElement.getAttribute("data-font")==="dyslexic";c&&Tp(),d(c)},[]);const f=()=>{const c=!s;d(c),c?(Tp(),document.documentElement.setAttribute("data-font","dyslexic")):document.documentElement.removeAttribute("data-font"),document.documentElement.dispatchEvent(new Event("fontChange"));try{localStorage.setItem(Sb,c?"1":"0")}catch{}};return o.jsx("button",{type:"button",className:_b.button,"aria-pressed":s,"aria-label":"OpenDyslexic font",title:"Use the OpenDyslexic font",onClick:f,children:"Aa"})}const Eb="_container_1j9je_1",wb="_input_1j9je_7",Ob="_label_1j9je_18",Nb="_indicator_1j9je_41",xb="_sun_1j9je_65",Ab="_moon_1j9je_72",gl={container:Eb,input:wb,label:Ob,indicator:Nb,sun:xb,moon:Ab},Mb="theme";function Ep(){document.documentElement.dispatchEvent(new Event("themeChange"))}function Cb(){const[s,d]=L.useState("dark");L.useEffect(()=>{const c=document.documentElement.getAttribute("data-theme")==="light"?"light":"dark";d(c),Ep()},[]);const f=()=>{const c=s==="light"?"dark":"light";d(c),document.documentElement.setAttribute("data-theme",c);try{localStorage.setItem(Mb,c)}catch{}Ep()};return o.jsxs("div",{className:gl.container,children:[o.jsx("input",{className:gl.input,"aria-label":"Light theme",role:"switch",id:"theme-switch",type:"checkbox",checked:s==="light",onChange:f}),o.jsx("label",{className:gl.label,htmlFor:"theme-switch",title:"Toggle light theme",children:o.jsxs("span",{className:gl.indicator,children:[o.jsx("svg",{className:gl.moon,viewBox:"0 0 16 16","aria-hidden":"true",children:o.jsx("path",{d:"M13 9.5A5.5 5.5 0 0 1 6.5 3a5.5 5.5 0 1 0 6.5 6.5Z"})}),o.jsxs("svg",{className:gl.sun,viewBox:"0 0 16 16","aria-hidden":"true",children:[o.jsx("circle",{cx:"8",cy:"8",r:"2.75"}),o.jsx("path",{d:"M8 1.5v1.75M8 12.75v1.75M1.5 8h1.75M12.75 8h1.75M3.4 3.4l1.25 1.25M11.35 11.35l1.25 1.25M3.4 12.6l1.25-1.25M11.35 4.65l1.25-1.25"})]})]})})]})}function Rb(){return o.jsx("svg",{viewBox:"0 0 128 128",children:o.jsxs("g",{fill:"var(--svg-github-fill)",children:[o.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"}),o.jsx("path",{d:"M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm2.382 3.477c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237m4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"})]})})}const kb=[{id:"finder",label:"Pattern Finder"},{id:"pareto",label:"Pareto Set"},{id:"cheatsheet",label:"Reference"}],Db={python:"Python",javascript:"JavaScript",java:"Java",cpp:"C++"};function jb({forwardedRef:s}){const d=L.useRef(null),{isSidebarOpen:f,showSidebar:c,hideSidebar:E,toggleSidebar:A}=rf(),{view:k,setView:j}=fu(),{selectedLanguage:U,setSelectedLanguage:q}=Vp();L.useLayoutEffect(()=>{if(!d.current)return;const Y=new ResizeObserver(X=>{for(const W of X){const be=W.borderBoxSize[0].blockSize;document.documentElement.style.setProperty("--topbar-height",`${be}px`)}});return Y.observe(d.current),()=>Y.disconnect()},[]);const z=Y=>{Y.preventDefault(),window.history.replaceState({},"",window.location.pathname),du("main",sf()-2)},b=()=>A(),N=Y=>{Y!==k&&(uf(),j(Y),Y==="finder"?E():window.matchMedia("(max-width: 768px)").matches||c(),window.scrollTo({top:0}))},H=Y=>{q(Y.target.value)};return o.jsx("header",{ref:d,className:fn.topbar,children:o.jsxs("div",{className:fn.container,children:[o.jsxs("div",{className:fn.leading,children:[o.jsxs("button",{ref:s,type:"button",className:qe(fn.hamburger,k==="finder"&&fn.inactive),onClick:b,"aria-label":f?"Hide sections":"Show sections","aria-expanded":f,"aria-controls":"sidebar-sections",children:[o.jsx("span",{className:qe(fn.hamburgerIcon,fn.hamburgerTop,f&&fn.open)}),o.jsx("span",{className:qe(fn.hamburgerIcon,fn.hamburgerMiddle,f&&fn.open)}),o.jsx("span",{className:qe(fn.hamburgerIcon,fn.hamburgerBottom,f&&fn.open)})]}),o.jsx("div",{className:fn.segmented,role:"group","aria-label":"View",children:kb.map(({id:Y,label:X})=>o.jsx("button",{type:"button",className:fn.segment,"aria-pressed":k===Y,onClick:()=>N(Y),children:X},Y))})]}),o.jsx("a",{href:"/leetcode-pattern-drill/",className:fn.wordmark,onClick:z,children:o.jsx("h1",{className:fn.title,children:"Pattern Drill"})}),o.jsxs("div",{className:fn.tools,children:[o.jsxs("label",{className:fn.select,children:[o.jsx("span",{className:fn.visuallyHidden,children:"Template language"}),o.jsx("select",{value:U,onChange:H,children:lf.map(Y=>o.jsx("option",{value:Y,children:Db[Y]},Y))}),o.jsx("svg",{className:fn.selectChevron,viewBox:"0 0 12 12","aria-hidden":"true",children:o.jsx("path",{d:"M2.5 4.5 6 8l3.5-3.5"})})]}),o.jsx(Tb,{}),o.jsx(Cb,{}),o.jsx("a",{href:"https://github.com/Tyler-Reagan/leetcode-pattern-drill","aria-label":"GitHub source",className:fn.iconLink,target:"_blank",rel:"noopener noreferrer",children:o.jsx(Rb,{})})]})]})})}const zb="_sidebar_u19dm_1",Bb="_exit_u19dm_17",Lb="_hide_u19dm_20",Ub="_heading_u19dm_29",qb="_scrollContainer_u19dm_41",Tr={sidebar:zb,exit:Bb,hide:Lb,heading:Ub,scrollContainer:qb};var tu={},wp;function Hb(){if(wp)return tu;wp=1,tu.match=A,tu.parse=k;var s=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,d=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,f=/^(?:(min|max)-)?(.+)/,c=/(em|rem|px|cm|mm|in|pt|pc)?$/,E=/(dpi|dpcm|dppx)?$/;function A(z,b){return k(z).some(function(N){var H=N.inverse,Y=N.type==="all"||b.type===N.type;if(Y&&H||!(Y||H))return!1;var X=N.expressions.every(function(W){var be=W.feature,fe=W.modifier,ce=W.value,we=b[be];if(!we)return!1;switch(be){case"orientation":case"scan":return we.toLowerCase()===ce.toLowerCase();case"width":case"height":case"device-width":case"device-height":ce=q(ce),we=q(we);break;case"resolution":ce=U(ce),we=U(we);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":ce=j(ce),we=j(we);break;case"grid":case"color":case"color-index":case"monochrome":ce=parseInt(ce,10)||1,we=parseInt(we,10)||0;break}switch(fe){case"min":return we>=ce;case"max":return we<=ce;default:return we===ce}});return X&&!H||!X&&H})}function k(z){return z.split(",").map(function(b){b=b.trim();var N=b.match(s),H=N[1],Y=N[2],X=N[3]||"",W={};return W.inverse=!!H&&H.toLowerCase()==="not",W.type=Y?Y.toLowerCase():"all",X=X.match(/\([^\)]+\)/g)||[],W.expressions=X.map(function(be){var fe=be.match(d),ce=fe[1].toLowerCase().match(f);return{modifier:ce[1],feature:ce[2],value:fe[2]}}),W})}function j(z){var b=Number(z),N;return b||(N=z.match(/^(\d+)\s*\/\s*(\d+)$/),b=N[1]/N[2]),b}function U(z){var b=parseFloat(z),N=String(z).match(E)[1];switch(N){case"dpcm":return b/2.54;case"dppx":return b*96;default:return b}}function q(z){var b=parseFloat(z),N=String(z).match(c)[1];switch(N){case"em":return b*16;case"rem":return b*16;case"cm":return b*96/2.54;case"mm":return b*96/2.54/10;case"in":return b*96;case"pt":return b*72;case"pc":return b*72/12;default:return b}}return tu}var Ic,Op;function Yb(){if(Op)return Ic;Op=1;var s=Hb().match,d=typeof window<"u"?window.matchMedia:null;function f(E,A,k){var j=this,U;d&&!k&&(U=d.call(window,E)),U?(this.matches=U.matches,this.media=U.media,U.addListener(b)):(this.matches=s(E,A),this.media=E),this.addListener=q,this.removeListener=z,this.dispose=N;function q(H){U&&U.addListener(H)}function z(H){U&&U.removeListener(H)}function b(H){j.matches=H.matches,j.media=H.media}function N(){U&&U.removeListener(b)}}function c(E,A,k){return new f(E,A,k)}return Ic=c,Ic}var Gb=Yb();const Kb=_l(Gb);var Vb=/[A-Z]/g,Ib=/^ms-/,Qc={};function Qb(s){return"-"+s.toLowerCase()}function Xp(s){if(Qc.hasOwnProperty(s))return Qc[s];var d=s.replace(Vb,Qb);return Qc[s]=Ib.test(d)?"-"+d:d}function Xb(s,d){if(s===d)return!0;if(!s||!d)return!1;const f=Object.keys(s),c=Object.keys(d),E=f.length;if(c.length!==E)return!1;for(let A=0;A<E;A++){const k=f[A];if(s[k]!==d[k]||!Object.prototype.hasOwnProperty.call(d,k))return!1}return!0}var Xc={exports:{}},Zc,Np;function Zb(){if(Np)return Zc;Np=1;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Zc=s,Zc}var Jc,xp;function Jb(){if(xp)return Jc;xp=1;var s=Zb();function d(){}function f(){}return f.resetWarningCache=d,Jc=function(){function c(k,j,U,q,z,b){if(b!==s){var N=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw N.name="Invariant Violation",N}}c.isRequired=c;function E(){return c}var A={array:c,bigint:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:E,element:c,elementType:c,instanceOf:E,node:c,objectOf:E,oneOf:E,oneOfType:E,shape:E,exact:E,checkPropTypes:f,resetWarningCache:d};return A.PropTypes=A,A},Jc}var Ap;function Fb(){return Ap||(Ap=1,Xc.exports=Jb()()),Xc.exports}var Pb=Fb();const Ve=_l(Pb),Jn=Ve.oneOfType([Ve.string,Ve.number]),Zp={all:Ve.bool,grid:Ve.bool,aural:Ve.bool,braille:Ve.bool,handheld:Ve.bool,print:Ve.bool,projection:Ve.bool,screen:Ve.bool,tty:Ve.bool,tv:Ve.bool,embossed:Ve.bool},Wb={orientation:Ve.oneOf(["portrait","landscape"]),scan:Ve.oneOf(["progressive","interlace"]),aspectRatio:Ve.string,deviceAspectRatio:Ve.string,height:Jn,deviceHeight:Jn,width:Jn,deviceWidth:Jn,color:Ve.bool,colorIndex:Ve.bool,monochrome:Ve.bool,resolution:Jn,type:Object.keys(Zp)},{type:RE,...$b}=Wb,ev={minAspectRatio:Ve.string,maxAspectRatio:Ve.string,minDeviceAspectRatio:Ve.string,maxDeviceAspectRatio:Ve.string,minHeight:Jn,maxHeight:Jn,minDeviceHeight:Jn,maxDeviceHeight:Jn,minWidth:Jn,maxWidth:Jn,minDeviceWidth:Jn,maxDeviceWidth:Jn,minColor:Ve.number,maxColor:Ve.number,minColorIndex:Ve.number,maxColorIndex:Ve.number,minMonochrome:Ve.number,maxMonochrome:Ve.number,minResolution:Jn,maxResolution:Jn,...$b},nv={...Zp,...ev};var tv={all:nv};const av=s=>`not ${s}`,iv=(s,d)=>{const f=Xp(s);return typeof d=="number"&&(d=`${d}px`),d===!0?f:d===!1?av(f):`(${f}: ${d})`},lv=s=>s.join(" and "),rv=s=>{const d=[];return Object.keys(tv.all).forEach(f=>{const c=s[f];c!=null&&d.push(iv(f,c))}),lv(d)},sv=L.createContext(void 0),uv=s=>s.query||rv(s),Mp=s=>s?Object.keys(s).reduce((f,c)=>(f[Xp(c)]=s[c],f),{}):void 0,Jp=()=>{const s=L.useRef(!1);return L.useEffect(()=>{s.current=!0},[]),s.current},ov=s=>{const d=L.useContext(sv),f=()=>Mp(s)||Mp(d),[c,E]=L.useState(f);return L.useEffect(()=>{const A=f();Xb(c,A)||E(A)},[s,d]),c},cv=s=>{const d=()=>uv(s),[f,c]=L.useState(d);return L.useEffect(()=>{const E=d();f!==E&&c(E)},[s]),f},fv=(s,d)=>{const f=()=>Kb(s,d||{},!!d),[c,E]=L.useState(f),A=Jp();return L.useEffect(()=>{if(A){const k=f();return E(k),()=>{k&&k.dispose()}}},[s,d]),c},dv=s=>{const[d,f]=L.useState(s.matches);return L.useEffect(()=>{const c=E=>{f(E.matches)};return s.addListener(c),f(s.matches),()=>{s.removeListener(c)}},[s]),d},Fp=(s,d,f)=>{const c=ov(d),E=cv(s);if(!E)throw new Error("Invalid or missing MediaQuery!");const A=fv(E,c),k=dv(A),j=Jp();return L.useEffect(()=>{j&&f&&f(k)},[k]),L.useEffect(()=>()=>{A&&A.dispose()},[]),k};function Pp(s,d){L.useEffect(()=>{const f=c=>{const E=c.target;(Array.isArray(s)?s:[s]).every(j=>j.current&&!j.current.contains(E))&&d()};return document.addEventListener("mousedown",f),()=>document.removeEventListener("mousedown",f)},[s,d])}const hv="_accordion_mpgt4_1",mv="_button_mpgt4_7",pv="_open_mpgt4_42",gv="_leaf_mpgt4_46",bv="_hint_mpgt4_51",vv="_content_mpgt4_64",Pa={accordion:hv,button:mv,open:pv,leaf:gv,hint:bv,content:vv};function yv(s){const d=parseFloat(s);return!isNaN(d)&&isFinite(d)}function Cp(s){return typeof s=="string"&&s[s.length-1]==="%"&&yv(s.substring(0,s.length-1))}function Fc(s,d,f){d===0&&!f&&s?.style&&s?.children.length>0&&(s.style.display="none")}function _v(s,d){d===0&&s?.style&&(s.style.display="")}const Sv={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"};function Rp(s,d){return[s.static,d===0&&s.staticHeightZero,typeof d=="number"&&d>0?s.staticHeightSpecific:null,d==="auto"&&s.staticHeightAuto].filter(f=>f).join(" ")}const Tv=["animateOpacity","animationStateClasses","applyInlineTransitions","children","className","contentClassName","contentRef","delay","duration","easing","height","onHeightAnimationEnd","onHeightAnimationStart","style","disableDisplayNone"],Ev=ou.forwardRef((s,d)=>{const{animateOpacity:f=!1,animationStateClasses:c={},applyInlineTransitions:E=!0,children:A,className:k="",contentClassName:j,delay:U=0,disableDisplayNone:q=!1,duration:z=500,easing:b="ease",height:N,onHeightAnimationEnd:H,onHeightAnimationStart:Y,style:X,contentRef:W}=s,be={...s};Tv.forEach(D=>{delete be[D]});const fe=L.useRef(N),ce=L.useRef(null),we=L.useRef(void 0),He=L.useRef(void 0),ze=L.useRef({...Sv,...c}),ie=typeof window<"u",he=L.useRef(ie&&window.matchMedia?window.matchMedia("(prefers-reduced-motion)").matches:!1),Oe=he.current?0:U,ye=he.current?0:z;let Qe=N,sn="visible";typeof N=="number"?(Qe=N<0?0:N,sn="hidden"):Cp(Qe)&&(Qe=N==="0%"?0:N,sn="hidden");const[Gn,On]=L.useState(Qe),[un,G]=L.useState(sn),[re,Z]=L.useState(!1),[Ae,_e]=L.useState(Rp(ze.current,N));L.useEffect(()=>{Fc(ce.current,Gn,q)},[]),L.useEffect(()=>{if(N!==fe.current&&ce.current){_v(ce.current,fe.current),ce.current.style.overflow="hidden";const D=ce.current.offsetHeight;ce.current.style.overflow="";const ae=ye+Oe;let J,se,Ce="hidden",Ne;const $=fe.current==="auto";typeof N=="number"?(J=N<0?0:N,se=J):Cp(N)?(J=N==="0%"?0:N,se=J):(J=D,se="auto",Ce=void 0),$&&(se=J,J=D);const ue=[ze.current.animating,(fe.current==="auto"||N<fe.current)&&ze.current.animatingUp,(N==="auto"||N>fe.current)&&ze.current.animatingDown,se===0&&ze.current.animatingToHeightZero,se==="auto"&&ze.current.animatingToHeightAuto,typeof se=="number"&&se>0?ze.current.animatingToHeightSpecific:null].filter(Wa=>Wa).join(" "),Fn=Rp(ze.current,se);On(J),G("hidden"),Z(!$),_e(ue),clearTimeout(He.current),clearTimeout(we.current),$?(Ne=!0,He.current=setTimeout(()=>{On(se),G(Ce),Z(Ne),Y?.(se),we.current=setTimeout(()=>{Z(!1),_e(Fn),Fc(ce.current,se,q),H?.(se)},ae)},50)):(Y?.(J),He.current=setTimeout(()=>{On(se),G(Ce),Z(!1),_e(Fn),N!=="auto"&&Fc(ce.current,J,q),H?.(J)},ae))}return fe.current=Qe,()=>{clearTimeout(He.current),clearTimeout(we.current)}},[N]);const rn={...X,height:Gn,overflow:un||X?.overflow};re&&E&&(rn.transition=`height ${ye}ms ${b} ${Oe}ms`,X?.transition&&(rn.transition=`${X.transition}, ${rn.transition}`),rn.WebkitTransition=rn.transition);const pn={};f&&(pn.transition=`opacity ${ye}ms ${b} ${Oe}ms`,pn.WebkitTransition=pn.transition,Gn===0&&(pn.opacity=0));const g=typeof be["aria-hidden"]<"u"?be["aria-hidden"]:N===0;return ou.createElement("div",{...be,"aria-hidden":g,className:`${Ae} ${k}`,style:rn,ref:d},ou.createElement("div",{className:j,style:pn,ref:D=>{ce.current=D,W&&(W.current=D)}},A))});function wv(){return o.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("polyline",{points:"6 9 12 15 18 9"})})}const cu="pd-nav-link";function Wp(s,d){const{view:f,setView:c}=fu(),[E,A]=L.useState(()=>window.location.hash);return L.useEffect(()=>{const U=()=>A(window.location.hash);return window.addEventListener(cu,U),window.addEventListener("hashchange",U),()=>{window.removeEventListener(cu,U),window.removeEventListener("hashchange",U)}},[]),{isCurrent:f!=="finder"&&E===s,onClick:U=>{U.preventDefault(),window.history.replaceState({},"",s),window.dispatchEvent(new Event(cu)),d?.(),uf();const q=sf()-2;f==="finder"?(c("cheatsheet"),gb(s,q)):du(s,q)}}}function Ov({title:s,children:d}){const[f,c]=L.useState(!1),E=f?"auto":0,A=qe(Pa.button,f&&Pa.open),k=()=>c(!f);return o.jsxs("div",{className:Pa.accordion,children:[o.jsxs("button",{type:"button",className:A,onClick:k,"aria-expanded":f,children:[o.jsx("span",{children:s}),o.jsx(wv,{})]}),o.jsx(Ev,{animateOpacity:!0,height:E,duration:400,children:o.jsx("div",{className:Pa.content,children:d})})]})}function Nv({href:s,title:d,hint:f}){const{isCurrent:c,onClick:E}=Wp(s);return o.jsx("div",{className:Pa.accordion,children:o.jsxs("a",{href:s,"data-toc-link":!0,className:qe(Pa.button,Pa.leaf),"aria-current":c?"location":void 0,"aria-keyshortcuts":f,onClick:E,children:[o.jsx("span",{children:d}),f&&o.jsx("span",{className:Pa.hint,"aria-hidden":"true",children:f})]})})}const xv="_linkWrapper_lvxoz_1",Av="_link_lvxoz_1",kp={linkWrapper:xv,link:Av},Mv="_tooltip_cgi4r_1",Cv="_exit_cgi4r_15",Rv="_text_cgi4r_28",Pc={tooltip:Mv,exit:Cv,text:Rv};var kv=Gp();const Dv=_l(kv);function jv({anchorRef:s,content:d,showTooltip:f}){const c=L.useRef(null),[E,A]=L.useState(null),[k,j]=L.useState(!1),U=qe(Pc.tooltip,!f&&Pc.exit),q=()=>j(!1),z=()=>{f||j(!0)};return L.useEffect(()=>{if(!f||!s.current)return;const b=s.current.getBoundingClientRect(),N=c.current?.offsetHeight??0,H=b.left+window.scrollX,Y=b.top+window.scrollY-N-4;A({top:Y,left:H})},[f]),(f||!k)&&s.current&&Dv.createPortal(o.jsx("div",{ref:c,className:U,style:E??{},onAnimationStart:q,onAnimationEnd:z,children:o.jsx("span",{className:Pc.text,children:d})}),document.body)}function zv({href:s,description:d}){const f=L.useRef(null),[c,E]=L.useState(!1),A=L.useRef(void 0),k=()=>{clearTimeout(A.current),E(!1)},{isCurrent:j,onClick:U}=Wp(s,k),q=()=>{clearTimeout(A.current),A.current=setTimeout(()=>E(!0),700)};return L.useEffect(()=>()=>clearTimeout(A.current),[]),o.jsxs("div",{className:kp.linkWrapper,children:[o.jsx("a",{ref:f,href:s,className:kp.link,onClick:U,"data-toc-link":!0,"aria-current":j?"location":void 0,"aria-description":d,onMouseEnter:q,onMouseLeave:k,children:d}),o.jsx(jv,{anchorRef:f,content:d,showTooltip:c})]})}function Bv({entries:s}){return o.jsx(o.Fragment,{children:s.map(d=>d.links?o.jsx(Ov,{title:d.title,children:d.links.map(f=>o.jsx(zv,{href:f.href,description:f.label},f.href))},d.title):d.href?o.jsx(Nv,{href:d.href,title:d.title,hint:d.hint},d.href):null)})}const Lv=[{title:"Big O",links:[{href:"#bigo-chart",label:"Time/Space Complexities"},{href:"#bigo-data-structure-operations-table",label:"Data Structure Operations"},{href:"#bigo-sorting-algorithms-table",label:"Sorting Algorithms"}]},{title:"Array",links:[{href:"#array-two-pointers-one-input",label:"two pointers: one input, opposite ends"},{href:"#array-two-pointers-two-inputs",label:"two pointers: two inputs, exhaust both"},{href:"#array-sliding-window",label:"sliding window"},{href:"#array-prefix-sum",label:"prefix sum"},{href:"#array-string-building",label:"efficient string building"}]},{title:"Hash Map",links:[{href:"#hashmap-find-number-of-subarrays",label:"find number of subarrays that fit an exact criteria"},{href:"#hashmap-sliding-window",label:"sliding window"}]},{title:"Linked List",links:[{href:"#linkedlist-fast-and-slow-pointer",label:"fast and slow pointer"},{href:"#linkedlist-reverse",label:"reverse linked list"}]},{title:"Stack",links:[{href:"#stack-monotonic-increasing",label:"monotonic increasing stack"},{href:"#stack-monotonic-decreasing",label:"monotonic decreasing stack"}]},{title:"Binary Tree",links:[{href:"#tree-dfs-recursive",label:"DFS (recursive)"},{href:"#tree-dfs-iterative",label:"DFS (iterative)"},{href:"#tree-bfs",label:"BFS"}]},{title:"Graph",links:[{href:"#graph-dfs-recursive",label:"DFS (recursive)"},{href:"#graph-dfs-iterative",label:"DFS (iterative)"},{href:"#graph-bfs",label:"BFS"},{href:"#graph-dijkstra",label:"Dijkstra (shortest path)"},{href:"#graph-bellman-ford",label:"Bellman-Ford (shortest path)"},{href:"#graph-kahn",label:"Kahn (topological sort)"},{href:"#graph-kruskal",label:"Kruskal (mst)"},{href:"#graph-prim",label:"Prim (mst)"}]},{title:"Heap",links:[{href:"#heap-find-top-k-elements",label:"find top k elements with heap"}]},{title:"Binary Search",links:[{href:"#binarysearch-binary-search",label:"binary search"},{href:"#binarysearch-duplicate-elements-left-insertion",label:"duplicate elements, left-most insertion point"},{href:"#binarysearch-duplicate-elements-right-insertion",label:"duplicate elements, right-most insertion point"},{href:"#binarysearch-greedy-minimum",label:"greedy (minimum)"},{href:"#binarysearch-greedy-maximum",label:"greedy (maximum)"}]},{title:"Backtracking",links:[{href:"#backtracking-backtracking",label:"backtracking"}]},{title:"Dynamic Programming",links:[{href:"#dp-top-down",label:"top-down DP"},{href:"#dp-bottom-up",label:"bottom-up DP"},{href:"#dp-kadane",label:"Kadane (max-sum subarray)"}]},{title:"Bit Manipulation",links:[{href:"#bitmanipulation-test-kth-bit",label:"test kth bit"},{href:"#bitmanipulation-set-kth-bit",label:"set kth bit"},{href:"#bitmanipulation-clear-kth-bit",label:"clear kth bit"},{href:"#bitmanipulation-get-rightmost-bit",label:"get rightmost bit"},{href:"#bitmanipulation-count-set-bits",label:"count set bits"},{href:"#bitmanipulation-multiply-power-of-two",label:"multiply by 2^k"},{href:"#bitmanipulation-divide-power-of-two",label:"divide by 2^k"},{href:"#bitmanipulation-check-power-of-two",label:"check if number is power of 2"},{href:"#bitmanipulation-swap-variables",label:"swap two variables"}]},{title:"Matrix",links:[{href:"#matrix-create-copy",label:"create / copy"},{href:"#matrix-diagonals",label:"main / anti diagonals"},{href:"#matrix-rotate-transpose",label:"rotate / transpose"}]},{title:"Data Structures",links:[{href:"#ds-array",label:"array"},{href:"#ds-hash-map",label:"hashmap"},{href:"#ds-linked-list",label:"linked list"},{href:"#ds-doubly-linked-list",label:"doubly linked list"},{href:"#ds-binary-tree",label:"binary tree"},{href:"#ds-binary-search-tree",label:"binary search tree"},{href:"#ds-graph",label:"graph"},{href:"#ds-union-find",label:"union find"},{href:"#ds-union-find-optimized",label:"union find optimized"},{href:"#ds-trie",label:"trie"}]},{title:"Sorting Algorithms",links:[{href:"#sort-bubble",label:"bubble sort"},{href:"#sort-selection",label:"selection sort"},{href:"#sort-insertion",label:"insertion sort"},{href:"#sort-shell",label:"shell sort"},{href:"#sort-merge",label:"mergesort"},{href:"#sort-quick",label:"quicksort"},{href:"#sort-tim",label:"timsort"},{href:"#sort-heap",label:"heapsort"},{href:"#sort-counting",label:"counting sort"},{href:"#sort-bucket",label:"bucket sort"},{href:"#sort-radix",label:"radix sort"},{href:"#sort-cube",label:"cubesort"},{href:"#sort-bogo",label:"bogo sort"},{href:"#sort-pancake",label:"pancake sort"},{href:"#sort-sleep",label:"sleep sort"}]}],Uv={E:"Easy",M:"Medium",H:"Hard"},Ft=([s,d,f,c,E,A])=>({n:s,lc:d,name:f,slug:c,difficulty:Uv[E],ask:A}),Fa=[{id:"arrays-hashing",name:"Arrays & Hashing",why:"Trade memory for lookups. The first move on most problems.",problems:[[1,217,"Contains Duplicate","contains-duplicate","E","Does any value appear at least twice in the array?"],[2,242,"Valid Anagram","valid-anagram","E","Are two strings made of exactly the same letters?"],[3,1,"Two Sum","two-sum","E","Find the two numbers in an array that add up to a target."],[4,49,"Group Anagrams","group-anagrams","M","Group the strings that are anagrams of each other."],[5,347,"Top K Frequent Elements","top-k-frequent-elements","M","Return the k values that appear most often."],[6,36,"Valid Sudoku","valid-sudoku","M","Is a partly filled 9×9 board free of repeats in every row, column and box?"],[7,238,"Product of Array Except Self","product-of-array-except-self","M","For each index, the product of every other element, without division."],[8,128,"Longest Consecutive Sequence","longest-consecutive-sequence","M","Length of the longest run of consecutive integers, in O(n)."]].map(s=>Ft(s))},{id:"two-pointers",name:"Two Pointers",why:"Turn a nested loop into one pass from both ends.",problems:[[9,125,"Valid Palindrome","valid-palindrome","E","Is the string a palindrome, ignoring case and non-alphanumerics?"],[10,167,"Two Sum II - Input Array Is Sorted","two-sum-ii-input-array-is-sorted","M","Two Sum on a sorted array, using constant extra space."],[11,15,"3Sum","3sum","M","Find all unique triplets that sum to zero."],[12,11,"Container With Most Water","container-with-most-water","M","Pick two lines that, with the x-axis, hold the most water."]].map(s=>Ft(s))},{id:"sliding-window",name:"Sliding Window",why:"Grow right, shrink left, keep the window valid.",problems:[[13,121,"Best Time to Buy and Sell Stock","best-time-to-buy-and-sell-stock","E","Maximum profit from one buy followed by one sell."],[14,3,"Longest Substring Without Repeating Characters","longest-substring-without-repeating-characters","M","Length of the longest substring with no repeated characters."],[15,424,"Longest Repeating Character Replacement","longest-repeating-character-replacement","M","Longest substring that can become one repeated letter with at most k changes."]].map(s=>Ft(s))},{id:"stack",name:"Stack",why:"The most recent unresolved thing is the next one to resolve.",problems:[[16,20,"Valid Parentheses","valid-parentheses","E","Are all brackets closed in the right order?"],[17,155,"Min Stack","min-stack","M","Design a stack that returns its minimum in constant time."],[18,739,"Daily Temperatures","daily-temperatures","M","For each day, how many days until a warmer one?"]].map(s=>Ft(s))},{id:"binary-search",name:"Binary Search",why:"Discard half the space per step, even when the array is rotated.",problems:[[19,704,"Binary Search","binary-search","E","Find a target in a sorted array in O(log n)."],[20,153,"Find Minimum in Rotated Sorted Array","find-minimum-in-rotated-sorted-array","M","Find the smallest value in a sorted array rotated at an unknown point."],[21,33,"Search in Rotated Sorted Array","search-in-rotated-sorted-array","M","Find a target in a rotated sorted array in O(log n)."]].map(s=>Ft(s))},{id:"linked-list",name:"Linked List",why:"Pointer surgery: dummy heads, fast and slow, reversal.",problems:[[22,206,"Reverse Linked List","reverse-linked-list","E","Reverse a singly linked list."],[23,21,"Merge Two Sorted Lists","merge-two-sorted-lists","E","Merge two sorted lists into one sorted list."],[24,143,"Reorder List","reorder-list","M","Reorder L0 → L1 → … → Ln into L0 → Ln → L1 → Ln-1 → …, in place."],[25,19,"Remove Nth Node From End of List","remove-nth-node-from-end-of-list","M","Remove the nth node from the end of a list in one pass."],[26,141,"Linked List Cycle","linked-list-cycle","E","Does a linked list contain a cycle?"],[27,146,"LRU Cache","lru-cache","M","Design a cache that evicts the least recently used key, with O(1) operations."]].map(s=>Ft(s))},{id:"tree-recursion",name:"Tree Recursion",why:"Solve the subtree, then combine at the node.",problems:[[28,226,"Invert Binary Tree","invert-binary-tree","E","Mirror a binary tree left to right."],[29,104,"Maximum Depth of Binary Tree","maximum-depth-of-binary-tree","E","How many levels deep is a binary tree?"],[30,543,"Diameter of Binary Tree","diameter-of-binary-tree","E","Length of the longest path between any two nodes in a tree."],[31,110,"Balanced Binary Tree","balanced-binary-tree","E","Do all nodes have left and right subtree heights that differ by at most one?"],[32,100,"Same Tree","same-tree","E","Are two binary trees identical in shape and values?"],[33,572,"Subtree of Another Tree","subtree-of-another-tree","E","Does one tree appear as a subtree of another?"]].map(s=>Ft(s))},{id:"tree-traversal-bst",name:"Traversal & BST",why:"Pick the traversal that carries the state you need.",problems:[[34,235,"Lowest Common Ancestor of a Binary Search Tree","lowest-common-ancestor-of-a-binary-search-tree","M","Find the lowest common ancestor of two nodes in a binary search tree."],[35,102,"Binary Tree Level Order Traversal","binary-tree-level-order-traversal","M","Return the node values level by level."],[36,199,"Binary Tree Right Side View","binary-tree-right-side-view","M","Which nodes are visible when looking at a tree from the right?"],[37,1448,"Count Good Nodes in Binary Tree","count-good-nodes-in-binary-tree","M","Count the nodes that are no smaller than any ancestor on their path from the root."],[38,98,"Validate Binary Search Tree","validate-binary-search-tree","M","Is a binary tree a valid binary search tree?"],[39,230,"Kth Smallest Element in a BST","kth-smallest-element-in-a-bst","M","Return the kth smallest value in a binary search tree."]].map(s=>Ft(s))},{id:"heap",name:"Heap",why:"Keep only the k best, or always the next best.",problems:[[40,703,"Kth Largest Element in a Stream","kth-largest-element-in-a-stream","E","Return the kth largest value each time a new number arrives."],[41,1046,"Last Stone Weight","last-stone-weight","E","Repeatedly smash the two heaviest stones together; what weight is left?"],[42,215,"Kth Largest Element in an Array","kth-largest-element-in-an-array","M","Return the kth largest element of an unsorted array."]].map(s=>Ft(s))},{id:"graphs",name:"Graphs",why:"Flood fill the grid, clone with a map, order with indegrees.",problems:[[43,200,"Number of Islands","number-of-islands","M","Count the islands in a grid of land and water."],[44,695,"Max Area of Island","max-area-of-island","M","Find the area of the largest island in a grid."],[45,133,"Clone Graph","clone-graph","M","Make a deep copy of a connected undirected graph."],[46,417,"Pacific Atlantic Water Flow","pacific-atlantic-water-flow","M","Which cells can send water to both the Pacific and the Atlantic?"],[47,130,"Surrounded Regions","surrounded-regions","M","Capture every region of O's completely surrounded by X's."],[48,207,"Course Schedule","course-schedule","M","Can all courses be finished, given their prerequisites?"],[49,210,"Course Schedule II","course-schedule-ii","M","Return a valid order to take all courses, if one exists."]].map(s=>Ft(s))}],Er=Fa.flatMap(s=>s.problems),qv=s=>`https://leetcode.com/problems/${s}/`,au={total:Er.length,patterns:Fa.length,easy:Er.filter(s=>s.difficulty==="Easy").length,medium:Er.filter(s=>s.difficulty==="Medium").length,hard:Er.filter(s=>s.difficulty==="Hard").length},Hv="_root_d9jt8_1",Yv="_h2_d9jt8_25",Gv="_h3_d9jt8_35",Kv="_lede_d9jt8_45",Vv="_origin_d9jt8_52",Iv="_srOnly_d9jt8_59",Qv="_ext_d9jt8_71",Xv="_diff_d9jt8_83",Zv="_pips_d9jt8_96",Jv="_pip_d9jt8_96",Fv="_pipOn_d9jt8_108",Pv="_easy_d9jt8_112",Wv="_medium_d9jt8_116",$v="_hard_d9jt8_120",ey="_primary_d9jt8_124",ny="_ghost_d9jt8_148",ty="_a_d9jt8_167",ay="_aHead_d9jt8_176",iy="_aStats_d9jt8_181",ly="_aIndex_d9jt8_223",ry="_aSection_d9jt8_249",sy="_aStrip_d9jt8_255",uy="_aCount_d9jt8_280",oy="_aRows_d9jt8_289",cy="_aRow_d9jt8_289",fy="_aNum_d9jt8_312",dy="_aLc_d9jt8_325",hy="_aText_d9jt8_349",my="_aLink_d9jt8_355",py="_aMove_d9jt8_366",tn={root:Hv,h2:Yv,h3:Gv,lede:Kv,origin:Vv,srOnly:Iv,ext:Qv,diff:Xv,pips:Zv,pip:Jv,pipOn:Fv,easy:Pv,medium:Wv,hard:$v,primary:ey,ghost:ny,a:ty,aHead:ay,aStats:iy,aIndex:ly,aSection:ry,aStrip:sy,aCount:uy,aRows:oy,aRow:cy,aNum:fy,aLc:dy,aText:hy,aLink:my,aMove:py},gy="A curated list of LeetCode and data structure/algorithm problems designed around the 80/20 rule, focusing on high-impact topics that deliver 90–95% of the results needed for software engineering coding interviews.",Ei=s=>`pareto-${s}`,by="Credit to Aman Manazir for coming up with this list.";function vy(){return o.jsx("svg",{className:tn.ext,viewBox:"0 0 12 12","aria-hidden":"true",children:o.jsx("path",{d:"M4.5 2.5h5v5M9.5 2.5 3 9"})})}const yy={Easy:1,Medium:2,Hard:3};function _y({d:s,label:d=!0}){return o.jsxs("span",{className:qe(tn.diff,tn[s.toLowerCase()]),children:[o.jsx("span",{className:tn.pips,"aria-hidden":"true",children:[1,2,3].map(f=>o.jsx("span",{className:qe(tn.pip,f<=yy[s]&&tn.pipOn)},f))}),o.jsx("span",{className:d?tn.diffLabel:tn.srOnly,children:s})]})}const Sy="1234567890",Ty=Fa.map((s,d)=>({title:s.name,href:`#${Ei(s.id)}`,hint:Sy[d]}));function Ey({hamburgerButtonRef:s}){const d=L.useRef(null),{isSidebarOpen:f,showSidebar:c,hideSidebar:E}=rf(),{view:A}=fu(),[k,j]=L.useState(()=>!f),U=A==="pareto"?"Pareto Set":"Reference",q=qe(Tr.sidebar,!f&&Tr.exit,!f&&k&&Tr.hide),z=X=>{X&&f?E():!X&&!f&&A!=="finder"&&c()};L.useEffect(()=>{A==="finder"&&f&&E()},[A,f,E]);const b=Fp({maxWidth:768},void 0,z),N=()=>{b&&f&&E()},H=()=>j(!1),Y=()=>{f||j(!0)};return Pp([d,s],N),o.jsxs("nav",{ref:d,id:"sidebar-sections","aria-label":`${U} sections`,className:q,onAnimationStart:H,onAnimationEndCapture:Y,children:[o.jsx("h2",{className:Tr.heading,children:U}),o.jsx("div",{className:Tr.scrollContainer,children:o.jsx(Bv,{entries:A==="pareto"?Ty:Lv})})]})}function wy(){const s=L.useRef(null);return o.jsxs("div",{id:"AppBar",children:[o.jsx(jb,{forwardedRef:s}),o.jsx(Ey,{hamburgerButtonRef:s})]})}const Oy="_main_bsmjw_1",Ny="_sidebarHidden_bsmjw_12",Dp={main:Oy,sidebarHidden:Ny},xy="_finder_1eurr_1",Ay="_mapMode_1eurr_15",My="_log_1eurr_42",Cy="_logHead_1eurr_51",Ry="_logHint_1eurr_61",ky="_logRows_1eurr_67",Dy="_row_1eurr_79",jy="_rowNum_1eurr_93",zy="_rowBack_1eurr_97",By="_rowNumDashed_1eurr_119",Ly="_rowText_1eurr_123",Uy="_rowQuestion_1eurr_130",qy="_rowCue_1eurr_140",Hy="_rowLive_1eurr_157",Yy="_rowReady_1eurr_167",Gy="_rowCurrent_1eurr_171",Ky="_rowResult_1eurr_172",Vy="_rowFault_1eurr_187",Iy="_nextWrap_1eurr_195",Qy="_nextCheck_1eurr_199",Xy="_nextLabel_1eurr_210",Zy="_line_1eurr_218",Jy="_stops_1eurr_222",Fy="_stop_1eurr_222",Py="_dashedNext_1eurr_251",Wy="_dot_1eurr_255",$y="_answered_1eurr_265",e_="_current_1eurr_269",n_="_reached_1eurr_270",t_="_end_1eurr_274",a_="_fault_1eurr_279",i_="_stopInner_1eurr_284",l_="_stopButton_1eurr_285",r_="_cue_1eurr_303",s_="_card_1eurr_313",u_="_strip_1eurr_328",o_="_stripEnd_1eurr_348",c_="_mapStatus_1eurr_359",f_="_seg_1eurr_372",d_="_segButton_1eurr_381",h_="_segOn_1eurr_410",m_="_mapFallback_1eurr_416",p_="_stripTitle_1eurr_420",g_="_stripValue_1eurr_430",b_="_timer_1eurr_436",v_="_cells_1eurr_443",y_="_cell_1eurr_443",__="_colon_1eurr_449",S_="_signCell_1eurr_474",T_="_timerCaption_1eurr_495",E_="_idle_1eurr_505",w_="_ok_1eurr_509",O_="_warn_1eurr_513",N_="_over_1eurr_520",x_="_body_1eurr_532",A_="_question_1eurr_546",M_="_resultName_1eurr_547",C_="_lead_1eurr_563",R_="_actions_1eurr_575",k_="_actionsPair_1eurr_581",D_="_primary_1eurr_585",j_="_kbd_1eurr_618",z_="_options_1eurr_623",B_="_option_1eurr_623",L_="_optionCue_1eurr_669",U_="_footer_1eurr_692",q_="_plain_1eurr_704",H_="_fields_1eurr_744",Y_="_field_1eurr_744",G_="_figure_1eurr_775",K_="_okNote_1eurr_783",V_="_overNote_1eurr_787",I_="_summary_1eurr_792",Q_="_templates_1eurr_803",X_="_note_1eurr_812",Z_="_commonProblems_1eurr_817",J_="_commonProblemsLoose_1eurr_842",F_="_commonProblemsNote_1eurr_847",P_="_commonProblemsNum_1eurr_853",W_="_docsLink_1eurr_859",$_="_srOnly_1eurr_870",eS="_turn_1eurr_1",nS="_cpNum_1eurr_912",tS="_cpLoose_1eurr_918",aS="_cpTiles_1eurr_922",iS="_cpTile_1eurr_922",lS="_toggleLabel_1eurr_940",rS="_toggleHidden_1eurr_947",x={finder:xy,mapMode:Ay,log:My,logHead:Cy,logHint:Ry,logRows:ky,row:Dy,rowNum:jy,rowBack:zy,rowNumDashed:By,rowText:Ly,rowQuestion:Uy,rowCue:qy,rowLive:Hy,rowReady:Yy,rowCurrent:Gy,rowResult:Ky,rowFault:Vy,nextWrap:Iy,nextCheck:Qy,nextLabel:Xy,line:Zy,stops:Jy,stop:Fy,dashedNext:Py,dot:Wy,answered:$y,current:e_,reached:n_,end:t_,fault:a_,stopInner:i_,stopButton:l_,cue:r_,card:s_,strip:u_,stripEnd:o_,mapStatus:c_,seg:f_,segButton:d_,segOn:h_,mapFallback:m_,stripTitle:p_,stripValue:g_,timer:b_,cells:v_,cell:y_,colon:__,signCell:S_,timerCaption:T_,idle:E_,ok:w_,warn:O_,over:N_,body:x_,question:A_,resultName:M_,lead:C_,actions:R_,actionsPair:k_,primary:D_,kbd:j_,options:z_,option:B_,optionCue:L_,footer:U_,plain:q_,fields:H_,field:Y_,figure:G_,okNote:K_,overNote:V_,summary:I_,templates:Q_,note:X_,commonProblems:Z_,commonProblemsLoose:J_,commonProblemsNote:F_,commonProblemsNum:P_,docsLink:W_,srOnly:$_,turn:eS,cpNum:nS,cpLoose:tS,cpTiles:aS,cpTile:iS,toggleLabel:lS,toggleHidden:rS},S=(s,d,f,c=!1)=>c?{lc:s,name:d,slug:f,loose:c}:{lc:s,name:d,slug:f},wi={rootId:"q-input",nodes:{"q-input":{id:"q-input",question:"What does the problem give you?",options:[{cue:"an array, a string, or a 2D board of values",next:"q-array"},{cue:"a linked list",next:"q-list"},{cue:"a binary tree or BST",next:"q-tree"},{cue:"a graph, edges, prerequisites, or a grid of cells you move between",next:"q-graph"},{cue:"a data stream, or a design-a-class prompt",next:"q-design"},{cue:"an integer n, or work done on its individual bits",next:"q-number"}]},"q-array":{id:"q-array",question:"What does it ask about the array or string?",options:[{cue:"a contiguous subarray or substring, or range sums or products",next:"q-subarray"},{cue:"a pair or triplet that hits a target or scores best, a palindrome, or an in-place edit",next:"q-pointers"},{cue:"searching a sorted or rotated array, or the smallest or largest value that works",next:"q-search"},{cue:"the next greater or smaller element of each item",next:"q-mono"},{cue:"counts, duplicates, membership, top K or repeated largest, brackets, words",next:"q-lookup"},{cue:"choices over elements: generate them all, or find the best or count the ways",next:"q-choices"},{cue:"intervals with a start and an end",next:"sort-first"}]},"q-subarray":{id:"q-subarray",question:"What does it want from the subarray or substring?",options:[{cue:"sum or average of each size-K window",next:"sliding-window-fixed"},{cue:"longest or shortest window that meets a rule",next:"q-window-variable"},{cue:"count subarrays with exactly K distinct or odd",next:"sliding-window-exactly-k"},{cue:"a sum or product over a range: equal to K, between i and j, or everything except one index",next:"q-prefix"},{cue:"maximum sum subarray of any length",next:"dp-kadane"},{cue:"max or min inside each size-K window",next:"monotonic-deque"}]},"q-window-variable":{id:"q-window-variable",question:"What does the window rule check?",options:[{cue:"sum or product vs a target, with non-negative numbers",next:"sliding-window-variable"},{cue:"which characters the window holds, and how many of each",next:"hashmap-sliding-window"}]},"q-prefix":{id:"q-prefix",question:"What kind of range-total question?",options:[{cue:"many queries for the sum between index i and j",next:"prefix-sum-range"},{cue:"for each index, a total of everything except that index",next:"prefix-sum-range"},{cue:"count or longest subarrays with sum K, when values can be negative",next:"prefix-sum-hashmap"}]},"q-pointers":{id:"q-pointers",question:"What kind of pair, check, or edit?",options:[{cue:"a pair or triplet that hits a target, when the array is sorted or the values matter, not their positions",next:"two-pointers-converging"},{cue:"a palindrome or other mirror-image check",next:"two-pointers-converging"},{cue:"the best pair where how far apart they are is part of the score",next:"two-pointers-converging"},{cue:"the largest rise from an earlier element to a later one",next:"dp-kadane"},{cue:"walking two separate inputs together",next:"two-pointers-two-inputs"},{cue:"rewriting the array in place, keeping some elements and moving or dropping the rest",next:"two-pointers-fast-slow-inplace"},{cue:"two numbers that hit a target in an unsorted array, returning their original positions",next:"hashmap-frequency"}]},"q-search":{id:"q-search",question:"What are you searching for?",options:[{cue:"a given value, or the minimum, in a sorted or rotated array",next:"binary-search-classic"},{cue:"first position of X, or where to insert X",next:"binary-search-left-bound"},{cue:"last position of X, or count of elements <= X",next:"binary-search-right-bound"},{cue:"smallest capacity or speed that works (minimize the max)",next:"binary-search-answer-minimize"},{cue:"largest distance or size that works (maximize the min)",next:"binary-search-answer-maximize"}]},"q-mono":{id:"q-mono",question:"What do you need for each element?",options:[{cue:"the next greater element for each item",next:"monotonic-stack-decreasing"},{cue:"the next smaller element for each item",next:"monotonic-stack-increasing"},{cue:"max or min inside each size-K window",next:"monotonic-deque"}]},"q-lookup":{id:"q-lookup",question:"What do you need to do with the data?",options:[{cue:"counting or grouping items that match",next:"hashmap-frequency"},{cue:"whether a value, or the value next to it, is present, in linear time",next:"hashmap-frequency"},{cue:"the K best items, or the Kth one, by size or frequency",next:"heap-top-k"},{cue:"repeatedly take the largest values, combine them, and put the result back",next:"heap-top-k"},{cue:"matching or nested structure, where the last thing opened closes first",next:"stack-matching"},{cue:"prefix lookups over a word list",next:"trie"},{cue:"building an output string piece by piece",next:"string-building"},{cue:"operating on the bits of numbers",next:"bit-manipulation"}]},"q-choices":{id:"q-choices",question:"What are you trying to do with the choices?",options:[{cue:"generate every subset, permutation, or combination",next:"q-backtrack"},{cue:"best cost, or number of ways, over the choices",next:"q-dp"},{cue:"a locally best move each step is enough",next:"greedy"}]},"q-backtrack":{id:"q-backtrack",question:"Can a partial choice be rejected early?",options:[{cue:"no, every candidate has to be generated",next:"backtracking"},{cue:"yes, a constraint lets you reject a partial choice early",next:"backtracking-pruning"}]},"q-dp":{id:"q-dp",question:"What do the choices look like?",options:[{cue:"items you can reuse any number of times",next:"dp-unbounded-knapsack"},{cue:"each item can be used at most once",next:"dp-01-knapsack"},{cue:"ordering or matching within one or two sequences",next:"dp-sequences"},{cue:"something else, where each state depends on earlier states",next:"q-dp-style"}]},"q-dp-style":{id:"q-dp-style",question:"Which way is the recurrence easier to write?",options:[{cue:"recurse from a state and cache the result",next:"dp-top-down"},{cue:"fill dp[i] or dp[r][c] from earlier cells",next:"dp-bottom-up"}]},"q-list":{id:"q-list",question:"What do you do with the list?",options:[{cue:"a cycle, the middle, or a position counted from the end",next:"linked-list-fast-slow"},{cue:"interleave or compare the front half with the back half",next:"linked-list-split-reverse-merge"},{cue:"reverse the list, a sublist, or k-groups",next:"linked-list-reverse"},{cue:"merge two sorted lists",next:"linked-list-merge-sorted"},{cue:"merge K sorted lists",next:"heap-merge-k"}]},"q-tree":{id:"q-tree",question:"What does it ask about the tree?",options:[{cue:"what the tree looks like level by level, or from one side",next:"tree-bfs"},{cue:"a measure of the whole tree, like its height, balance, or longest path",next:"tree-dfs-recursive"},{cue:"a change made at every node, or whether two trees match or one appears inside the other",next:"tree-dfs-recursive"},{cue:"a check at each node against its ancestors on the path from the root",next:"tree-dfs-recursive"},{cue:"find, insert, or delete a value in a BST, or the lowest node above two given nodes",next:"bst-walk"},{cue:"a BST's values in sorted order, one at a time or up to the kth",next:"tree-dfs-iterative"}]},"q-graph":{id:"q-graph",question:"What does it ask about the graph or grid?",options:[{cue:"everything connected to a start: count regions, measure them, or copy them",next:"graph-dfs"},{cue:"which cells connect to the edge of the grid",next:"graph-dfs"},{cue:"shortest path or minimum steps",next:"q-shortest"},{cue:"an order that respects prerequisites, or proof that none exists",next:"topological-sort"},{cue:"whether two items are already in the same group, or an edge closes an undirected cycle",next:"union-find"},{cue:"minimum cost to connect all points",next:"mst"},{cue:"a grid where you can only move right or down",next:"q-dp"}]},"q-shortest":{id:"q-shortest",question:"What kind of shortest path?",options:[{cue:"unweighted edges, from one start",next:"graph-bfs-shortest-path"},{cue:"spreads from many sources at once",next:"multi-source-bfs"},{cue:"weighted edges",next:"shortest-path-weighted"}]},"q-design":{id:"q-design",question:"What must the structure support?",options:[{cue:"median of a data stream",next:"two-heaps"},{cue:"the Kth largest of the values so far, after each new value",next:"heap-top-k"},{cue:"only the items from a recent time span or the last N arrivals, or a fixed-size queue",next:"queue-design"},{cue:"constant-time lookup plus keeping items ordered by when they were last used",next:"design-hashmap-linked-list"},{cue:"storing words so prefix and exact lookups are fast",next:"trie"},{cue:"a stack that also answers a question about its contents, like its minimum, in constant time",next:"stack-matching"},{cue:"stepping back through a history of actions",next:"stack-matching"}]},"q-number":{id:"q-number",question:"What does it ask about n?",options:[{cue:"bit-level properties of n",next:"bit-manipulation"},{cue:"the nth term defined by earlier terms",next:"q-dp"},{cue:"the largest x whose square is still at most n",next:"binary-search-answer-maximize"},{cue:"guess the number in 1..n",next:"binary-search-classic"}]}},leaves:{"two-pointers-converging":{id:"two-pointers-converging",name:"Two pointers, converging",pattern:"Two Pointers",summary:"Sorted array pairs/triplets, palindromes, in-place reversal. Start at both ends and move the pointer whose side cannot be part of the answer.",docsUrl:"https://resources.devweekends.com/dsa-patterns/two-pointers",problems:[S(167,"Two Sum II - Input Array Is Sorted","two-sum-ii-input-array-is-sorted"),S(15,"3Sum","3sum"),S(11,"Container With Most Water","container-with-most-water"),S(125,"Valid Palindrome","valid-palindrome")],templateIds:["two-pointers-one-input"]},"two-pointers-two-inputs":{id:"two-pointers-two-inputs",name:"Two pointers, two inputs",pattern:"Two Pointers",summary:"Merge sorted arrays, subsequence checks. One pointer per input; advance the one whose element is consumed.",docsUrl:"https://resources.devweekends.com/dsa-patterns/two-pointers",problems:[S(88,"Merge Sorted Array","merge-sorted-array"),S(392,"Is Subsequence","is-subsequence"),S(986,"Interval List Intersections","interval-list-intersections")],templateIds:["two-pointers-two-inputs"]},"two-pointers-fast-slow-inplace":{id:"two-pointers-fast-slow-inplace",name:"Two pointers, read/write in place",pattern:"Two Pointers",summary:"Remove duplicates, move zeroes, partition in O(1) space. A fast pointer reads every element; a slow pointer marks where the next kept element is written.",docsUrl:"https://resources.devweekends.com/dsa-patterns/two-pointers",problems:[S(26,"Remove Duplicates from Sorted Array","remove-duplicates-from-sorted-array"),S(283,"Move Zeroes","move-zeroes"),S(27,"Remove Element","remove-element"),S(75,"Sort Colors","sort-colors")],templateIds:[]},"sliding-window-fixed":{id:"sliding-window-fixed",name:"Sliding window, fixed size",pattern:"Sliding Window",summary:"Every window of exactly K elements. Add the entering element and remove the leaving one so each step is O(1).",docsUrl:"https://resources.devweekends.com/dsa-patterns/sliding-window",problems:[S(643,"Maximum Average Subarray I","maximum-average-subarray-i"),S(1456,"Maximum Number of Vowels in a Substring of Given Length","maximum-number-of-vowels-in-a-substring-of-given-length")],templateIds:["sliding-window"]},"sliding-window-variable":{id:"sliding-window-variable",name:"Sliding window, variable size",pattern:"Sliding Window",summary:"Longest/shortest subarray meeting a sum-style rule with non-negative values. Expand right, shrink left while the window is invalid (or while valid, for shortest).",docsUrl:"https://resources.devweekends.com/dsa-patterns/sliding-window",problems:[S(209,"Minimum Size Subarray Sum","minimum-size-subarray-sum"),S(713,"Subarray Product Less Than K","subarray-product-less-than-k"),S(1004,"Max Consecutive Ones III","max-consecutive-ones-iii")],templateIds:["sliding-window"]},"sliding-window-exactly-k":{id:"sliding-window-exactly-k",name:"Sliding window, exactly K",pattern:"Sliding Window",summary:'"Exactly K" is not monotonic, so count it as atMost(K) - atMost(K-1), each a standard variable window.',docsUrl:"https://resources.devweekends.com/dsa-patterns/sliding-window",problems:[S(992,"Subarrays with K Different Integers","subarrays-with-k-different-integers"),S(1248,"Count Number of Nice Subarrays","count-number-of-nice-subarrays"),S(930,"Binary Subarrays With Sum","binary-subarrays-with-sum")],templateIds:[]},"prefix-sum-range":{id:"prefix-sum-range",name:"Prefix sum, range queries",pattern:"Prefix Sum",summary:"Range totals on a fixed array, or for each index the total of everything before and after it. Precompute prefix (and suffix) sums or products; each answer is then O(1), e.g. prefix[j+1] - prefix[i].",docsUrl:"https://resources.devweekends.com/dsa-patterns/prefix-sum",problems:[S(303,"Range Sum Query - Immutable","range-sum-query-immutable"),S(304,"Range Sum Query 2D - Immutable","range-sum-query-2d-immutable"),S(238,"Product of Array Except Self","product-of-array-except-self"),S(724,"Find Pivot Index","find-pivot-index")],templateIds:["prefix-sum"]},"prefix-sum-hashmap":{id:"prefix-sum-hashmap",name:"Prefix sum, hash map",pattern:"Prefix Sum",summary:"Count or find subarrays with sum K when negatives break sliding window. Store prefix-sum counts (seeded with {0: 1}) and look up prefix - K.",docsUrl:"https://resources.devweekends.com/dsa-patterns/prefix-sum",problems:[S(560,"Subarray Sum Equals K","subarray-sum-equals-k"),S(525,"Contiguous Array","contiguous-array"),S(974,"Subarray Sums Divisible by K","subarray-sums-divisible-by-k")],templateIds:["hashmap-find-number-of-subarrays"]},"string-building":{id:"string-building",name:"String building",pattern:"String",summary:"Producing a new string piece by piece. Append to a list or builder and join once at the end; repeated concatenation is O(n^2).",docsUrl:"https://resources.devweekends.com/dsa-patterns/stack",problems:[S(151,"Reverse Words in a String","reverse-words-in-a-string"),S(443,"String Compression","string-compression"),S(1768,"Merge Strings Alternately","merge-strings-alternately")],templateIds:["string-building"]},"binary-search-classic":{id:"binary-search-classic",name:"Binary search, find target",pattern:"Binary Search",summary:"Find an exact value in a sorted (or rotated) space. Halve the range each step by comparing the middle with the target.",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",problems:[S(704,"Binary Search","binary-search"),S(153,"Find Minimum in Rotated Sorted Array","find-minimum-in-rotated-sorted-array"),S(33,"Search in Rotated Sorted Array","search-in-rotated-sorted-array"),S(74,"Search a 2D Matrix","search-a-2d-matrix")],templateIds:["binary-search"]},"binary-search-left-bound":{id:"binary-search-left-bound",name:"Binary search, left bound",pattern:"Binary Search",summary:"First position of X or its insertion point. Keep searching left when nums[mid] >= X to land on the leftmost index.",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",problems:[S(35,"Search Insert Position","search-insert-position"),S(278,"First Bad Version","first-bad-version"),S(34,"Find First and Last Position of Element in Sorted Array","find-first-and-last-position-of-element-in-sorted-array")],templateIds:["binary-search-left-insertion"]},"binary-search-right-bound":{id:"binary-search-right-bound",name:"Binary search, right bound",pattern:"Binary Search",summary:"Last position of X, or count of elements <= X. Search for the insertion point after every copy of X (go right when nums[mid] <= X).",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",problems:[S(34,"Find First and Last Position of Element in Sorted Array","find-first-and-last-position-of-element-in-sorted-array"),S(744,"Find Smallest Letter Greater Than Target","find-smallest-letter-greater-than-target")],templateIds:["binary-search-right-insertion"]},"binary-search-answer-minimize":{id:"binary-search-answer-minimize",name:"Binary search on answer, minimum",pattern:"Binary Search",summary:"Smallest value that still works (min capacity, min speed, minimize the max). Binary search the answer range with a greedy feasibility check.",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",problems:[S(875,"Koko Eating Bananas","koko-eating-bananas"),S(1011,"Capacity To Ship Packages Within D Days","capacity-to-ship-packages-within-d-days"),S(410,"Split Array Largest Sum","split-array-largest-sum")],templateIds:["binary-search-greedy-minimum"]},"binary-search-answer-maximize":{id:"binary-search-answer-maximize",name:"Binary search on answer, maximum",pattern:"Binary Search",summary:"Largest value that still works (maximize the minimum distance). Binary search the answer range, keeping the best feasible value.",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",problems:[S(69,"Sqrt(x)","sqrtx"),S(1552,"Magnetic Force Between Two Balls","magnetic-force-between-two-balls"),S(2226,"Maximum Candies Allocated to K Children","maximum-candies-allocated-to-k-children")],templateIds:["binary-search-greedy-maximum"]},"sort-first":{id:"sort-first",name:"Sort first, then scan",pattern:"Sorting",summary:"Intervals, meetings, or anything easier in order. Sort (often by start or end), then apply a linear scan, greedy, heap, or two pointers.",docsUrl:"https://resources.devweekends.com/dsa-patterns/sorting",problems:[S(56,"Merge Intervals","merge-intervals"),S(435,"Non-overlapping Intervals","non-overlapping-intervals"),S(57,"Insert Interval","insert-interval")],templateIds:[]},"hashmap-frequency":{id:"hashmap-frequency",name:"Hash map, lookup and frequency",pattern:"Hash Map",summary:"Counting, duplicates, anagrams, grouping, or unsorted two-sum. Store counts or complements so each lookup is O(1).",docsUrl:"https://resources.devweekends.com/dsa-patterns/hashmap",problems:[S(1,"Two Sum","two-sum"),S(217,"Contains Duplicate","contains-duplicate"),S(242,"Valid Anagram","valid-anagram"),S(49,"Group Anagrams","group-anagrams"),S(36,"Valid Sudoku","valid-sudoku"),S(128,"Longest Consecutive Sequence","longest-consecutive-sequence")],templateIds:[]},"hashmap-sliding-window":{id:"hashmap-sliding-window",name:"Sliding window, hash map",pattern:"Sliding Window",summary:"Substring with no repeats, at most K distinct, or containing all of T. A frequency map tracks the window so you know when to shrink.",docsUrl:"https://resources.devweekends.com/dsa-patterns/sliding-window",problems:[S(3,"Longest Substring Without Repeating Characters","longest-substring-without-repeating-characters"),S(76,"Minimum Window Substring","minimum-window-substring"),S(424,"Longest Repeating Character Replacement","longest-repeating-character-replacement")],templateIds:["hashmap-sliding-window"]},"stack-matching":{id:"stack-matching",name:"Stack, matching and saved state",pattern:"Stack",summary:"Brackets, expression evaluation, path simplification, undo, or a stack that also tracks extra state. Push openings, or state alongside each value; pop when the match arrives or to restore earlier state.",docsUrl:"https://resources.devweekends.com/dsa-patterns/stack",problems:[S(20,"Valid Parentheses","valid-parentheses"),S(71,"Simplify Path","simplify-path"),S(155,"Min Stack","min-stack"),S(150,"Evaluate Reverse Polish Notation","evaluate-reverse-polish-notation")],templateIds:[]},"monotonic-stack-increasing":{id:"monotonic-stack-increasing",name:"Monotonic stack, increasing",pattern:"Monotonic Stack",summary:"Next/previous smaller element. Keep the stack increasing; a smaller arrival pops and resolves the taller entries.",docsUrl:"https://resources.devweekends.com/dsa-patterns/monotonic-stack",problems:[S(84,"Largest Rectangle in Histogram","largest-rectangle-in-histogram"),S(85,"Maximal Rectangle","maximal-rectangle")],templateIds:["stack-monotonic-increasing"]},"monotonic-stack-decreasing":{id:"monotonic-stack-decreasing",name:"Monotonic stack, decreasing",pattern:"Monotonic Stack",summary:"Next/previous greater element. Keep the stack decreasing; a larger arrival pops and resolves the smaller entries.",docsUrl:"https://resources.devweekends.com/dsa-patterns/monotonic-stack",problems:[S(739,"Daily Temperatures","daily-temperatures"),S(496,"Next Greater Element I","next-greater-element-i"),S(503,"Next Greater Element II","next-greater-element-ii"),S(901,"Online Stock Span","online-stock-span")],templateIds:["stack-monotonic-decreasing"]},"monotonic-deque":{id:"monotonic-deque",name:"Monotonic deque",pattern:"Monotonic Deque",summary:"Max or min of every window of size K. Keep a deque of indices in monotonic order; drop expired indices from the front.",docsUrl:"https://resources.devweekends.com/dsa-patterns/queue",problems:[S(239,"Sliding Window Maximum","sliding-window-maximum"),S(1438,"Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit","longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit")],templateIds:[]},"queue-design":{id:"queue-design",name:"Queue design",pattern:"Queue",summary:"Rolling windows over recent items, rate limiting, fixed-size queues. FIFO of values or timestamps, evicting from the front as they expire.",docsUrl:"https://resources.devweekends.com/dsa-patterns/queue",problems:[S(933,"Number of Recent Calls","number-of-recent-calls"),S(622,"Design Circular Queue","design-circular-queue"),S(346,"Moving Average from Data Stream","moving-average-from-data-stream")],templateIds:[]},"design-hashmap-linked-list":{id:"design-hashmap-linked-list",name:"Hash map + doubly linked list",pattern:"Design",summary:"Constant-time lookup plus constant-time reordering or eviction by recency. A hash map finds a key's node; a doubly linked list keeps items in recency order, oldest at one end.",docsUrl:"https://resources.devweekends.com/dsa-patterns/linked-list",problems:[S(146,"LRU Cache","lru-cache"),S(460,"LFU Cache","lfu-cache",!0)],templateIds:[]},"heap-top-k":{id:"heap-top-k",name:"Heap, top K and repeated max",pattern:"Heap",summary:"K largest, K most frequent, Kth element (also in a stream), or taking the current largest again and again. A min-heap of size K for top K; a max-heap of everything when you must keep pulling the largest.",docsUrl:"https://resources.devweekends.com/dsa-patterns/heap",problems:[S(215,"Kth Largest Element in an Array","kth-largest-element-in-an-array"),S(347,"Top K Frequent Elements","top-k-frequent-elements"),S(703,"Kth Largest Element in a Stream","kth-largest-element-in-a-stream"),S(1046,"Last Stone Weight","last-stone-weight"),S(973,"K Closest Points to Origin","k-closest-points-to-origin")],templateIds:["heap-find-top-k-elements"]},"heap-merge-k":{id:"heap-merge-k",name:"Heap, merge K sorted",pattern:"Heap",summary:"Merge K sorted lists or streams. Push each head into a min-heap; pop the smallest and push its successor.",docsUrl:"https://resources.devweekends.com/dsa-patterns/heap",problems:[S(23,"Merge k Sorted Lists","merge-k-sorted-lists"),S(378,"Kth Smallest Element in a Sorted Matrix","kth-smallest-element-in-a-sorted-matrix"),S(373,"Find K Pairs with Smallest Sums","find-k-pairs-with-smallest-sums"),S(1046,"Last Stone Weight","last-stone-weight",!0)],templateIds:[]},"two-heaps":{id:"two-heaps",name:"Two heaps",pattern:"Heap",summary:"Running median of a stream. A max-heap holds the lower half and a min-heap the upper half, rebalanced so sizes differ by at most one.",docsUrl:"https://resources.devweekends.com/dsa-patterns/heap",problems:[S(295,"Find Median from Data Stream","find-median-from-data-stream"),S(480,"Sliding Window Median","sliding-window-median")],templateIds:[]},trie:{id:"trie",name:"Trie",pattern:"Trie",summary:"Prefix matching, autocomplete, word dictionaries. Store words character by character in a tree so prefix lookups cost O(length).",docsUrl:"https://resources.devweekends.com/dsa-patterns/trie",problems:[S(208,"Implement Trie (Prefix Tree)","implement-trie-prefix-tree"),S(211,"Design Add and Search Words Data Structure","design-add-and-search-words-data-structure"),S(212,"Word Search II","word-search-ii")],templateIds:["ds-trie"]},"linked-list-fast-slow":{id:"linked-list-fast-slow",name:"Linked list, fast and slow pointers",pattern:"Linked List",summary:"Cycle detection, middle node, Nth from end. Move one pointer twice as fast (Floyd's) or give one a head start.",docsUrl:"https://resources.devweekends.com/dsa-patterns/linked-list",problems:[S(141,"Linked List Cycle","linked-list-cycle"),S(876,"Middle of the Linked List","middle-of-the-linked-list"),S(19,"Remove Nth Node From End of List","remove-nth-node-from-end-of-list"),S(142,"Linked List Cycle II","linked-list-cycle-ii")],templateIds:["linkedlist-fast-and-slow-pointer"]},"linked-list-reverse":{id:"linked-list-reverse",name:"Linked list, reverse",pattern:"Linked List",summary:"Reverse a whole list, a sublist, or k-groups. Walk with prev/curr/next and flip each pointer.",docsUrl:"https://resources.devweekends.com/dsa-patterns/linked-list",problems:[S(206,"Reverse Linked List","reverse-linked-list"),S(92,"Reverse Linked List II","reverse-linked-list-ii"),S(25,"Reverse Nodes in k-Group","reverse-nodes-in-k-group")],templateIds:["linkedlist-reverse"]},"linked-list-merge-sorted":{id:"linked-list-merge-sorted",name:"Linked list, merge sorted",pattern:"Linked List",summary:"Merge two sorted lists. Use a dummy head and always attach the smaller of the two current nodes.",docsUrl:"https://resources.devweekends.com/dsa-patterns/linked-list",problems:[S(21,"Merge Two Sorted Lists","merge-two-sorted-lists"),S(148,"Sort List","sort-list")],templateIds:[]},"linked-list-split-reverse-merge":{id:"linked-list-split-reverse-merge",name:"Linked list, split, reverse, merge",pattern:"Linked List",summary:"Interleave or compare the two halves of a list. Find the middle with fast and slow pointers, reverse the second half, then merge or compare it with the first.",docsUrl:"https://resources.devweekends.com/dsa-patterns/linked-list",problems:[S(143,"Reorder List","reorder-list"),S(234,"Palindrome Linked List","palindrome-linked-list"),S(2130,"Maximum Twin Sum of a Linked List","maximum-twin-sum-of-a-linked-list")],templateIds:[]},"tree-dfs-recursive":{id:"tree-dfs-recursive",name:"Tree DFS, recursive",pattern:"DFS",summary:"Anything computed at each node from its children, or checked against values passed down from its ancestors. Recurse into each child; combine answers on the way up, or pass bounds and running values down.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dfs",problems:[S(226,"Invert Binary Tree","invert-binary-tree"),S(104,"Maximum Depth of Binary Tree","maximum-depth-of-binary-tree"),S(543,"Diameter of Binary Tree","diameter-of-binary-tree"),S(110,"Balanced Binary Tree","balanced-binary-tree"),S(100,"Same Tree","same-tree"),S(572,"Subtree of Another Tree","subtree-of-another-tree"),S(235,"Lowest Common Ancestor of a Binary Search Tree","lowest-common-ancestor-of-a-binary-search-tree",!0),S(1448,"Count Good Nodes in Binary Tree","count-good-nodes-in-binary-tree"),S(98,"Validate Binary Search Tree","validate-binary-search-tree")],templateIds:["tree-dfs-recursive"]},"tree-dfs-iterative":{id:"tree-dfs-iterative",name:"Tree DFS, iterative",pattern:"DFS",summary:"Traversals you must pause, or trees too deep to recurse. Replace recursion with an explicit stack, often for an in-order walk you can pause.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dfs",problems:[S(173,"Binary Search Tree Iterator","binary-search-tree-iterator"),S(230,"Kth Smallest Element in a BST","kth-smallest-element-in-a-bst"),S(94,"Binary Tree Inorder Traversal","binary-tree-inorder-traversal")],templateIds:["tree-dfs-iterative"]},"bst-walk":{id:"bst-walk",name:"BST, walk by ordering",pattern:"Binary Search Tree",summary:"Search, insert, delete, or a lowest common ancestor in a BST. Compare with the node and step to the one child that can hold the answer: O(height), no full traversal.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dfs",problems:[S(235,"Lowest Common Ancestor of a Binary Search Tree","lowest-common-ancestor-of-a-binary-search-tree"),S(700,"Search in a Binary Search Tree","search-in-a-binary-search-tree"),S(701,"Insert into a Binary Search Tree","insert-into-a-binary-search-tree"),S(450,"Delete Node in a BST","delete-node-in-a-bst")],templateIds:[]},"tree-bfs":{id:"tree-bfs",name:"Tree BFS, level order",pattern:"BFS",summary:"Anything computed per level. Process the queue one level at a time using its size as a snapshot.",docsUrl:"https://resources.devweekends.com/dsa-patterns/bfs",problems:[S(102,"Binary Tree Level Order Traversal","binary-tree-level-order-traversal"),S(199,"Binary Tree Right Side View","binary-tree-right-side-view"),S(103,"Binary Tree Zigzag Level Order Traversal","binary-tree-zigzag-level-order-traversal")],templateIds:["tree-bfs"]},"graph-dfs":{id:"graph-dfs",name:"Graph DFS",pattern:"DFS",summary:"Connected components, region sizes, copying a structure, or which cells connect to the border. Explore fully from each unvisited node (or from every border cell), marking visited.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dfs",problems:[S(200,"Number of Islands","number-of-islands"),S(695,"Max Area of Island","max-area-of-island"),S(133,"Clone Graph","clone-graph"),S(417,"Pacific Atlantic Water Flow","pacific-atlantic-water-flow"),S(130,"Surrounded Regions","surrounded-regions")],templateIds:["graph-dfs-recursive","graph-dfs-iterative"]},"graph-bfs-shortest-path":{id:"graph-bfs-shortest-path",name:"Graph BFS, shortest path",pattern:"BFS",summary:"Fewest steps in an unweighted graph or grid. BFS from the start; the level at which you reach the target is the distance.",docsUrl:"https://resources.devweekends.com/dsa-patterns/bfs",problems:[S(127,"Word Ladder","word-ladder"),S(1091,"Shortest Path in Binary Matrix","shortest-path-in-binary-matrix"),S(752,"Open the Lock","open-the-lock")],templateIds:["graph-bfs"]},"multi-source-bfs":{id:"multi-source-bfs",name:"Multi-source BFS",pattern:"BFS",summary:"Something spreads from many cells at once. Enqueue every source first, then run one BFS.",docsUrl:"https://resources.devweekends.com/dsa-patterns/bfs",problems:[S(994,"Rotting Oranges","rotting-oranges"),S(542,"01 Matrix","01-matrix"),S(417,"Pacific Atlantic Water Flow","pacific-atlantic-water-flow",!0),S(130,"Surrounded Regions","surrounded-regions",!0)],templateIds:[]},"shortest-path-weighted":{id:"shortest-path-weighted",name:"Shortest path, weighted",pattern:"Graph Algorithms",summary:"Shortest path with edge weights. Dijkstra (min-heap) for non-negative weights; Bellman-Ford for negatives or at most K edges.",docsUrl:"https://resources.devweekends.com/dsa-patterns/graph-algorithms",problems:[S(743,"Network Delay Time","network-delay-time"),S(787,"Cheapest Flights Within K Stops","cheapest-flights-within-k-stops"),S(1631,"Path With Minimum Effort","path-with-minimum-effort")],templateIds:["graph-dijkstra","graph-bellman-ford"]},"topological-sort":{id:"topological-sort",name:"Topological sort",pattern:"Graph Algorithms",summary:"Ordering with dependencies, or detecting that none exists. Kahn's algorithm: repeatedly take nodes with in-degree 0.",docsUrl:"https://resources.devweekends.com/dsa-patterns/graph-algorithms",problems:[S(207,"Course Schedule","course-schedule"),S(210,"Course Schedule II","course-schedule-ii")],templateIds:["graph-kahn"]},"union-find":{id:"union-find",name:"Union-find",pattern:"Union Find",summary:"Are two items in the same group, merging groups, redundant edges (undirected cycles). Keep a parent array with path compression and union by rank.",docsUrl:"https://resources.devweekends.com/dsa-patterns/union-find",problems:[S(684,"Redundant Connection","redundant-connection"),S(721,"Accounts Merge","accounts-merge"),S(547,"Number of Provinces","number-of-provinces")],templateIds:["ds-union-find","ds-union-find-optimized"]},mst:{id:"mst",name:"Minimum spanning tree",pattern:"Graph Algorithms",summary:"Minimum cost to connect all points. Kruskal (sort edges + Union Find) or Prim (grow from a node with a min-heap).",docsUrl:"https://resources.devweekends.com/dsa-patterns/graph-algorithms",problems:[S(1584,"Min Cost to Connect All Points","min-cost-to-connect-all-points")],templateIds:["graph-kruskal","graph-prim"]},backtracking:{id:"backtracking",name:"Backtracking",pattern:"Backtracking",summary:"Generate all subsets, permutations, or combinations. Choose, recurse, un-choose, recording each complete candidate.",docsUrl:"https://resources.devweekends.com/dsa-patterns/backtracking",problems:[S(78,"Subsets","subsets"),S(46,"Permutations","permutations"),S(77,"Combinations","combinations"),S(39,"Combination Sum","combination-sum")],templateIds:["backtracking"]},"backtracking-pruning":{id:"backtracking-pruning",name:"Backtracking, pruning",pattern:"Backtracking",summary:"Constraint puzzles where a partial choice can be checked early. Backtrack, but reject a partial choice as soon as it breaks a constraint.",docsUrl:"https://resources.devweekends.com/dsa-patterns/backtracking",problems:[S(51,"N-Queens","n-queens"),S(37,"Sudoku Solver","sudoku-solver"),S(79,"Word Search","word-search")],templateIds:[]},"dp-top-down":{id:"dp-top-down",name:"DP, top-down",pattern:"Dynamic Programming",summary:"Overlapping subproblems where the recursion is the natural statement. Write the recursive choice, then cache results by state.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",problems:[S(139,"Word Break","word-break"),S(91,"Decode Ways","decode-ways")],templateIds:["dp-top-down"]},"dp-bottom-up":{id:"dp-bottom-up",name:"DP, bottom-up",pattern:"Dynamic Programming",summary:"Each state depends on earlier indices or neighbor cells. Fill a dp table from the base cases forward.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",problems:[S(198,"House Robber","house-robber"),S(62,"Unique Paths","unique-paths"),S(64,"Minimum Path Sum","minimum-path-sum"),S(70,"Climbing Stairs","climbing-stairs")],templateIds:["dp-bottom-up"]},"dp-kadane":{id:"dp-kadane",name:"Kadane's algorithm",pattern:"Dynamic Programming",summary:"Maximum sum subarray, or the best gain of a later value over an earlier one. At each element, either extend the running best or restart from it (for a gain, track the lowest value so far); keep the best seen.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",problems:[S(53,"Maximum Subarray","maximum-subarray"),S(152,"Maximum Product Subarray","maximum-product-subarray"),S(918,"Maximum Sum Circular Subarray","maximum-sum-circular-subarray"),S(121,"Best Time to Buy and Sell Stock","best-time-to-buy-and-sell-stock")],templateIds:["dp-kadane"]},"dp-unbounded-knapsack":{id:"dp-unbounded-knapsack",name:"Unbounded knapsack",pattern:"Dynamic Programming",summary:"Items reusable any number of times: fewest items, or number of ways, to reach a total. 1D dp over the target, looping capacity forward.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",problems:[S(322,"Coin Change","coin-change"),S(518,"Coin Change II","coin-change-ii"),S(279,"Perfect Squares","perfect-squares")],templateIds:[]},"dp-01-knapsack":{id:"dp-01-knapsack",name:"0/1 knapsack",pattern:"Dynamic Programming",summary:"Each item used at most once: can a subset, or how many subsets, reach a total. dp over capacity, looping capacity backwards per item.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",problems:[S(416,"Partition Equal Subset Sum","partition-equal-subset-sum"),S(494,"Target Sum","target-sum"),S(474,"Ones and Zeroes","ones-and-zeroes")],templateIds:[]},"dp-sequences":{id:"dp-sequences",name:"DP, sequences",pattern:"Dynamic Programming",summary:"Longest increasing or common subsequence, edit distance. dp[i] over one sequence or dp[i][j] over prefixes of two.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",problems:[S(300,"Longest Increasing Subsequence","longest-increasing-subsequence"),S(1143,"Longest Common Subsequence","longest-common-subsequence"),S(72,"Edit Distance","edit-distance")],templateIds:[]},greedy:{id:"greedy",name:"Greedy",pattern:"Greedy",summary:"Take the locally best move in one pass when an exchange argument shows it is never worse.",docsUrl:"https://resources.devweekends.com/dsa-patterns/greedy",problems:[S(121,"Best Time to Buy and Sell Stock","best-time-to-buy-and-sell-stock",!0),S(55,"Jump Game","jump-game"),S(134,"Gas Station","gas-station"),S(763,"Partition Labels","partition-labels")],templateIds:[]},"bit-manipulation":{id:"bit-manipulation",name:"Bit manipulation",pattern:"Bit Manipulation",summary:"Single number among pairs, set bits, powers of two. Use XOR, masks, and shifts to work on bits directly in O(1) space.",docsUrl:"https://resources.devweekends.com/dsa-patterns/bit-manipulation",problems:[S(136,"Single Number","single-number"),S(191,"Number of 1 Bits","number-of-1-bits"),S(231,"Power of Two","power-of-two"),S(338,"Counting Bits","counting-bits")],templateIds:["bitmanipulation-test-kth-bit","bitmanipulation-set-kth-bit","bitmanipulation-clear-kth-bit","bitmanipulation-toggle-kth-bit","bitmanipulation-get-rightmost-bit","bitmanipulation-count-set-bits","bitmanipulation-multiply-power-of-two","bitmanipulation-divide-power-of-two","bitmanipulation-check-power-of-two","bitmanipulation-swap-variables"]}}},Wc=s=>String(s).padStart(2,"0");function sS({run:s}){const{started:d,steps:f,leaf:c,node:E}=s,A=f.length+1,k=d&&!c&&!E;return o.jsxs("nav",{className:x.log,"aria-label":"Your path so far",children:[o.jsxs("header",{className:x.logHead,children:[o.jsxs("p",{className:x.stripTitle,children:["Path log",o.jsxs("span",{className:x.stripValue,children:[f.length," answered"]})]}),o.jsx("p",{className:x.logHint,children:f.length>0?"Click a step to go back to that check.":"Each answer is written here as you go."})]}),o.jsxs("ol",{className:x.logRows,children:[f.map((j,U)=>o.jsx("li",{children:o.jsxs("button",{type:"button",className:x.row,"aria-label":`Back to question ${U+1}: ${j.question} You picked: ${j.option.cue}`,onClick:()=>s.backtrackTo(U),children:[o.jsx("span",{className:x.rowNum,"aria-hidden":"true",children:Wc(U+1)}),o.jsxs("span",{className:x.rowText,children:[o.jsx("span",{className:x.rowQuestion,children:j.question}),o.jsx("span",{className:x.rowCue,children:j.option.cue})]}),o.jsx("span",{className:x.rowBack,"aria-hidden":"true",children:"Back"})]})},U)),!d&&o.jsx("li",{children:o.jsxs("div",{className:qe(x.row,x.rowReady),children:[o.jsx("span",{className:x.rowNum,"aria-hidden":"true",children:"01"}),o.jsxs("span",{className:x.rowText,children:[o.jsx("span",{className:x.rowQuestion,children:"Ready"}),o.jsx("span",{className:x.rowLive,children:wi.nodes[wi.rootId].question})]})]})}),d&&E&&o.jsx("li",{"aria-current":"step",children:o.jsxs("div",{className:qe(x.row,x.rowCurrent),children:[o.jsx("span",{className:x.rowNum,"aria-hidden":"true",children:Wc(A)}),o.jsxs("span",{className:x.rowText,children:[o.jsxs("span",{className:x.rowQuestion,children:["Now, check ",A]}),o.jsx("span",{className:x.rowLive,children:E.question})]})]})}),c&&o.jsx("li",{"aria-current":"step",children:o.jsxs("div",{className:qe(x.row,x.rowResult),children:[o.jsx("span",{className:x.rowNum,"aria-hidden":"true",children:"="}),o.jsxs("span",{className:x.rowText,children:[o.jsxs("span",{className:x.rowQuestion,children:["Result, ",c.pattern]}),o.jsx("span",{className:x.rowLive,children:c.name})]})]})}),k&&o.jsx("li",{"aria-current":"step",children:o.jsxs("div",{className:qe(x.row,x.rowFault),children:[o.jsx("span",{className:x.rowNum,"aria-hidden":"true",children:"!"}),o.jsxs("span",{className:x.rowText,children:[o.jsx("span",{className:x.rowQuestion,children:"Fault"}),o.jsx("span",{className:x.rowLive,children:"This path leads nowhere"})]})]})}),!c&&!k&&o.jsx("li",{className:x.nextWrap,"aria-hidden":"true",children:o.jsxs("div",{className:x.nextCheck,children:[o.jsx("span",{className:qe(x.rowNum,x.rowNumDashed),children:Wc(A+1)}),o.jsx("span",{className:x.nextLabel,children:"Next check appears here"})]})})]})]})}const uS=`def backtrack(curr, OTHER_ARGUMENTS...):
    if (BASE_CASE):
        # TODO: modify answer
        return

    ans = 0

    for (ITERATE_OVER_INPUT):
        # TODO: modify current state
        ans += backtrack(curr, OTHER_ARGUMENTS...)
        # TODO: undo modification of current state

    return ans
`,oS=`const backtrack = (curr, OTHER_ARGUMENTS...) => {
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
`,cS=`public int backtrack(STATE curr, OTHER_ARGUMENTS...) {
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
`,fS=`int backtrack(STATE curr, OTHER_ARGUMENTS...) {
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
`,dS=`def fn(arr, target):
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
`,hS=`const fn = (arr, target) => {
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
`,mS=`public int fn(int[] arr, int target) {
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
`,pS=`#include <vector>

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
`,gS=`def fn(arr):
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
`,bS=`const fn = (arr) => {
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
`,vS=`public int fn(int[] arr) {
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
`,yS=`#include <vector>

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
`,_S=`def fn(arr):
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
`,SS=`const fn = (arr) => {
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
`,TS=`public int fn(int[] arr) {
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
`,ES=`#include <vector>

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
`,wS=`def fn(arr, target):
    left = 0
    right = len(arr)

    while left < right:
        mid = (left + right) // 2

        if arr[mid] >= target:
            right = mid
        else:
            left = mid + 1

    return left
`,OS=`const fn = (arr, target) => {
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
`,NS=`public int fn(int[] arr, int target) {
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
`,xS=`#include <vector>

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
`,AS=`def fn(arr, target):
    left = 0
    right = len(arr)

    while left < right:
        mid = (left + right) // 2

        if arr[mid] > target:
            right = mid
        else:
            left = mid + 1

    return left
`,MS=`const fn = (arr, target) => {
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
`,CS=`public int fn(int[] arr, int target) {
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
`,RS=`#include <vector>

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
`,kS=`def is_power_of_two(num: int) -> bool:
    return (num & (num - 1)) == 0
`,DS=`const isPowerOfTwo = (num) => {
    return (num & (num - 1)) === 0
}
`,jS=`public boolean isPowerOfTwo(int num) {
    return (num & (num - 1)) == 0;
}
`,zS=`bool is_power_of_two(int num) {
    return (num & (num - 1)) == 0;
}
`,BS=`def clear_kth_bit(num: int, k: int) -> int:
    return num & ~(1 << k)
`,LS=`const clearKthBit = (num, k) => {
    return num & ~(1 << k)
}
`,US=`public int clearKthBit(int num, int k) {
    return num & ~(1 << k);
}
`,qS=`int clear_kth_bit(int num, int k) {
    return num & ~(1 << k);
}
`,HS=`def count_set_bits(num: int) -> int:
    return bin(num).count('1')
`,YS=`const countSetBits = (num) => {
    return num.toString(2).split('1').length - 1
}
`,GS=`public int countSetBits(int num) {
    int count = 0;

    while (num > 0) {
        count += num & 1;
        num >>= 1;
    }

    return count;
}
`,KS=`int count_set_bits(int num) {
    int count = 0;

    while (num) {
        count += num & 1;
        num >>= 1;
    }

    return count;
}
`,VS=`def divide_by_power_of_two(num: int, k: int) -> int:
    return num >> k
`,IS=`const divideByPowerOfTwo = (num, k) => {
    return num >> k;
}
`,QS=`public int divideByPowerOfTwo(int num, int k) {
    return num >> k;
}
`,XS=`int divide_by_power_of_two(int num, int k) {
    return num >> k;
}
`,ZS=`def get_rightmost_set_bit(num: int) -> int:
    return num & -num
`,JS=`const getRightmostSetBit = (num) => {
    return num & -num
}
`,FS=`public int getRightmostSetBit(int num) {
    return num & -num;
}
`,PS=`int get_rightmost_set_bit(int num) {
    return num & -num;
}
`,WS=`def multiply_by_power_of_two(num: int, k: int) -> int:
    return num << k
`,$S=`const multiplyByPowerOfTwo = (num, k) => {
    return num << k
}
`,e2=`public int multiplyByPowerOfTwo(int num, int k) {
    return num << k;
}
`,n2=`int multiply_by_power_of_two(int num, int k) {
    return num << k;
}
`,t2=`def set_kth_bit(num: int, k: int) -> int:
    return num | (1 << k)
`,a2=`const setKthBit = (num, k) => {
    return num | (1 << k)
}
`,i2=`public int setKthBit(int num, int k) {
    return num | (1 << k);
}
`,l2=`int set_kth_bit(int num, int k) {
    return num | (1 << k);
}
`,r2=`def swap_variables(num1: int, num2: int) -> tuple:
    num1 ^= num2
    num2 ^= num1
    num1 ^= num2
    return num1, num2
`,s2=`const swapVariables = (num1, num2) => {
    num1 ^= num2
    num2 ^= num1
    num1 ^= num2
    return [num1, num2]
}
`,u2=`public int[] swapVariables(int num1, int num2) {
    num1 ^= num2;
    num2 ^= num1;
    num1 ^= num2;
    return new int[] { num1, num2 };
}
`,o2=`#include <tuple>

using namespace std;


tuple<int, int> swap_variables(int num1, int num2) {
    num1 ^= num2;
    num2 ^= num1;
    num1 ^= num2;
    return std::make_tuple(num1, num2);
}
`,c2=`def test_kth_bit(num: int, k: int) -> bool:
    return num & (1 << k) != 0
`,f2=`const testKthBit = (num, k) => {
    return num & (1 << k) !== 0
}
`,d2=`public boolean testKthBit(int num, int k) {
    return (num & (1 << k)) != 0;
}
`,h2=`bool test_kth_bit(int num, int k) {
    return (num & (1 << k)) != 0;
}
`,m2=`def toggle_kth_bit(num: int, k: int) -> int:
    return num ^ (1 << k)
`,p2=`const toggleKthBit = (num, k) => {
    return num ^ (1 << k)
}
`,g2=`public int toggleKthBit(int num, int k) {
    return num ^ (1 << k);
}
`,b2=`int toggle_kth_bit(int num, int k) {
    return num ^ (1 << k);
}
`,v2=`def fn(arr):
    if BASE_CASE:
        return 0

    dp = [BASE_CASE] * (STATE_FOR_WHOLE_INPUT + 1)

    for STATE in range(SMALLEST_SUBPROBLEM, STATE_FOR_WHOLE_INPUT + 1):
        if BASE_CASE:
            dp[STATE] = BASE_CASE
        else:
            dp[STATE] = RECURRENCE_RELATION(STATE)

    return dp[STATE_FOR_WHOLE_INPUT]
`,y2=`const fn = (arr) => {
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
`,_2=`import java.util.Arrays;


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
`,S2=`#include <vector>
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
`,T2=`def kadane(arr: list[int]) -> int:
    curr_sub = max_sub = arr[0]

    for num in arr[1:]:
        curr_sub = max(curr_sub + num, num)
        max_sub = max(max_sub, curr_sub)

    return max_sub
`,E2=`const kadane = (arr) => {
    let currSub = arr[0]
    let maxSub = arr[0]

    for (let i = 1; i < arr.length; i++) {
        currSub = Math.max(currSub + arr[i], arr[i])
        maxSub = Math.max(maxSub, currSub)
    }

    return maxSub
}
`,w2=`public int kadane(int[] arr) {
    int currSub = arr[0];
    int maxSub = arr[0];

    for (int i = 1; i < arr.length; i++) {
        currSub = Math.max(currSub + arr[i], arr[i]);
        maxSub = Math.max(maxSub, currSub);
    }

    return maxSub;
}
`,O2=`#include <vector>
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
`,N2=`def fn(arr):
    @cache
    def dp(STATE):
        if BASE_CASE:
            return 0
        return RECURRENCE_RELATION(STATE)

    return dp(STATE_FOR_WHOLE_INPUT)
`,x2=`const fn = (arr) => {
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
`,A2=`import java.util.HashMap;
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
`,M2=`#include <unordered_map>

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
`,C2=`from typing import Any


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
`,R2=`class HashMap {
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
`,k2=`public class HashMap {
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
`,D2=`#include <iostream>
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
`,j2=`class TrieNode:
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
`,z2=`class TrieNode {
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
`,B2=`import java.util.ArrayList;
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
`,L2=`#include <iostream>
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
`,U2=`class UnionFind:
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
`,q2=`class UnionFind {
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
`,H2=`import java.util.ArrayList;
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
`,Y2=`#include <iostream>
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
`,G2=`class UnionFind:
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
`,K2=`class UnionFind {
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
`,V2=`import java.util.ArrayList;
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
`,I2=`#include <iostream>
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
`,Q2=`def bellman_ford(n: int, edges: list[tuple[int, int, int]], source: int) -> list[int]:
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
`,X2=`const bellmanFord = (n, edges, source) => {
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
`,Z2=`import java.util.Arrays;
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
`,J2=`#include <vector>
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
`,F2=`from collections import deque


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
`,P2=`const fn = (graph) => {
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
`,W2=`import java.util.ArrayList;
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
`,$2=`#include <queue>
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
`,e3=`def fn(graph):
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
`,n3=`const fn = (graph) => {
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
`,t3=`import java.util.Stack;
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
`,a3=`#include <stack>
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
`,i3=`def fn(graph):
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
`,l3=`const fn = (graph) => {
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
`,r3=`import java.util.HashSet;
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
`,s3=`#include <unordered_set>
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
`,u3=`from heapq import heappop, heappush


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
`,o3=`/*
    JavaScript lacks built-in support for heaps.
    Try using a language that doesn't hate you, like Python.
*/
`,c3=`import java.util.Arrays;
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
`,f3=`#include <limits>
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
`,d3=`from collections import defaultdict, deque


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
`,h3=`const kahnTopologicalSort = (graph) => {
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
`,m3=`import java.util.ArrayList;
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
`,p3=`#include <vector>
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
`,g3=`def kruskal_mst(n: int, edges: list[tuple[int, int, int]]) -> list[tuple[int, int, int]]:
    mst = []
    uf = UnionFind(n)
    edges.sort()

    for w, u, v in edges:
        if not uf.connected(u, v):
            uf.union(u, v)
            mst.append((w, u, v))

    return mst
`,b3=`const kruskalMst = (n, edges) => {
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
`,v3=`import java.util.ArrayList;
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
`,y3=`#include <vector>
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
`,_3=`from heapq import heappop


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
`,S3=`/*
    JavaScript lacks built-in support for heaps.
    Try using a language that doesn't hate you, like Python.
*/
`,T3=`import java.util.ArrayList;
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
`,E3=`#include <vector>
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
`,w3=`from collections import defaultdict


def fn(arr, k):
    counts = defaultdict(int)
    counts[0] = 1
    ans = curr = 0

    for num in arr:
        # TODO: logic to change curr
        ans += counts[curr - k]
        counts[curr] += 1

    return ans
`,O3=`const fn = (arr, k) => {
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
`,N3=`import java.util.HashMap;
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
`,x3=`#include <vector>
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
`,A3=`def fn(arr):
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
`,M3=`function fn(arr) {
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
`,C3=`import java.util.HashSet;
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
`,R3=`#include <vector>
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
`,k3=`from heapq import heappop, heappush


def fn(arr, k):
    heap = []

    for num in arr:
        # TODO: logic to push onto heap according to problem's criteria
        heappush(heap, (CRITERIA, num))

        if len(heap) > k:
            heappop(heap)

    return [num for num in heap]
`,D3=`/*
    JavaScript lacks built-in support for heaps.
    Try using a language that doesn't hate you, like Python.
*/
`,j3=`import java.util.PriorityQueue;


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
`,z3=`#include <vector>
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
`,B3=`def fn(head):
    slow = head
    fast = head
    ans = 0

    while fast and fast.next:
        # TODO: logic
        slow = slow.next
        fast = fast.next.next

    return ans
`,L3=`const fn = (head) => {
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
`,U3=`public int fn(ListNode head) {
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
`,q3=`int fn(ListNode* head) {
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
`,H3=`def fn(head):
    prev = None
    curr = head

    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt

    return prev
`,Y3=`const fn = (head) => {
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
`,G3=`public ListNode fn(ListNode head) {
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
`,K3=`ListNode* fn(ListNode* head) {
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
`,V3=`def fn(arr):
    n = len(arr)
    prefix = [arr[0]]

    for i in range(1, n):
        prefix.append(prefix[-1] + arr[i])

    return prefix
`,I3=`const fn = (arr) => {
    let prefix = [arr[0]]

    for (let i = 1; i < arr.length; i++) {
        prefix.push(prefix[prefix.length - 1] + arr[i])
    }

    return prefix
}
`,Q3=`import java.util.ArrayList;
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
`,X3=`#include <iostream>
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
`,Z3=`def fn(arr):
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
`,J3=`const fn = (arr) => {
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
`,F3=`public int fn(int[] arr) {
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
`,P3=`#include <vector>

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
`,W3=`def fn(arr):
    stack = []
    ans = 0

    for num in arr:
        while stack and stack[-1] < num:
            # TODO: logic
            stack.pop()
        stack.append(num)

    return ans
`,$3=`const fn = (arr) => {
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
`,eT=`import java.util.Stack;


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
`,nT=`#include <stack>
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
`,tT=`def fn(arr):
    stack = []
    ans = 0

    for num in arr:
        while stack and stack[-1] > num:
            # TODO: logic
            stack.pop()
        stack.append(num)

    return ans
`,aT=`const fn = (arr) => {
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
`,iT=`import java.util.Stack;


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
`,lT=`#include <stack>
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
`,rT=`def fn(strs: list[str]):
    ans = []

    for char in strs:
        ans.append(char)

    return ''.join(ans)
`,sT=`const fn = (arr) => {
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
`,uT=`public String fn(char[] strs) {
    StringBuilder sb = new StringBuilder();

    for (char c: strs) {
        sb.append(c);
    }

    return sb.toString();
}
`,oT=`string fn(vector<char>& arr) {
    return string(arr.begin(), arr.end())
}
`,cT=`from collections import deque


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
`,fT=`const fn = (root) => {
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
`,dT=`import java.util.LinkedList;
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
`,hT=`#include <queue>

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
`,mT=`def dfs(root):
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
`,pT=`const dfs = (root) => {
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
`,gT=`import java.util.Stack;


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
`,bT=`#include <stack>

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
`,vT=`def dfs(root):
    if not root:
        return

    ans = 0

    # TODO: logic
    dfs(root.left)
    dfs(root.right)

    return ans
`,yT=`const dfs = (root) => {
    if (!root) {
        return
    }

    let ans = 0

    // TODO: logic
    dfs(root.left)
    dfs(root.right)

    return ans
}
`,_T=`public int dfs(TreeNode root) {
    if (root == null) {
        return 0;
    }

    int ans = 0;

    // TODO: logic
    ans += dfs(root.left);
    ans += dfs(root.right);

    return ans;
}
`,ST=`int dfs(TreeNode* root) {
    if (root == nullptr) {
        return 0;
    }

    int ans = 0;

    // TODO: logic
    dfs(root.left);
    dfs(root.right);

    return ans;
}
`,TT=`def fn(arr):
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
`,ET=`const fn = (arr) => {
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
`,wT=`public int fn(int[] arr) {
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
`,OT=`#include <vector>

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
`,NT=`def fn(arr1, arr2):
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
`,xT=`let fn = (arr1, arr2) => {
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
`,AT=`public int fn(int[] arr1, int[] arr2) {
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
`,MT=`#include <vector>

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
`,ge=(s,d,f,c,E)=>({title:s,code:{python:d,javascript:f,java:c,cpp:E}}),CT={backtracking:ge("backtracking",uS,oS,cS,fS),"binary-search":ge("binary search",dS,hS,mS,pS),"binary-search-greedy-maximum":ge("greedy (maximum)",gS,bS,vS,yS),"binary-search-greedy-minimum":ge("greedy (minimum)",_S,SS,TS,ES),"binary-search-left-insertion":ge("duplicate elements, left-most insertion point",wS,OS,NS,xS),"binary-search-right-insertion":ge("duplicate elements, right-most insertion point",AS,MS,CS,RS),"bitmanipulation-check-power-of-two":ge("check if number is power of 2",kS,DS,jS,zS),"bitmanipulation-clear-kth-bit":ge("clear kth bit",BS,LS,US,qS),"bitmanipulation-count-set-bits":ge("count set bits",HS,YS,GS,KS),"bitmanipulation-divide-power-of-two":ge("divide by 2^k",VS,IS,QS,XS),"bitmanipulation-get-rightmost-bit":ge("get rightmost bit",ZS,JS,FS,PS),"bitmanipulation-multiply-power-of-two":ge("multiply by 2^k",WS,$S,e2,n2),"bitmanipulation-set-kth-bit":ge("set kth bit",t2,a2,i2,l2),"bitmanipulation-swap-variables":ge("swap two variables",r2,s2,u2,o2),"bitmanipulation-test-kth-bit":ge("test kth-bit",c2,f2,d2,h2),"bitmanipulation-toggle-kth-bit":ge("toggle kth bit",m2,p2,g2,b2),"dp-bottom-up":ge("DP bottom-up",v2,y2,_2,S2),"dp-kadane":ge("Kadane (max-sum subarray)",T2,E2,w2,O2),"dp-top-down":ge("DP top-down",N2,x2,A2,M2),"ds-hash-map":ge("hash map",C2,R2,k2,D2),"ds-trie":ge("trie",j2,z2,B2,L2),"ds-union-find":ge("union find",U2,q2,H2,Y2),"ds-union-find-optimized":ge("union find optimized",G2,K2,V2,I2),"graph-bellman-ford":ge("Bellman-Ford (shortest path)",Q2,X2,Z2,J2),"graph-bfs":ge("BFS",F2,P2,W2,$2),"graph-dfs-iterative":ge("DFS (iterative)",e3,n3,t3,a3),"graph-dfs-recursive":ge("DFS (recursive)",i3,l3,r3,s3),"graph-dijkstra":ge("Dijkstra (shortest path)",u3,o3,c3,f3),"graph-kahn":ge("Kahn (topological sort)",d3,h3,m3,p3),"graph-kruskal":ge("Kruskal (mst)",g3,b3,v3,y3),"graph-prim":ge("Prim (mst)",_3,S3,T3,E3),"hashmap-find-number-of-subarrays":ge("find number of subarrays that fit an exact criteria",w3,O3,N3,x3),"hashmap-sliding-window":ge("sliding window",A3,M3,C3,R3),"heap-find-top-k-elements":ge("find top k elements",k3,D3,j3,z3),"linkedlist-fast-and-slow-pointer":ge("fast and slow pointer",B3,L3,U3,q3),"linkedlist-reverse":ge("reverse linked list",H3,Y3,G3,K3),"prefix-sum":ge("prefix sum",V3,I3,Q3,X3),"sliding-window":ge("sliding window",Z3,J3,F3,P3),"stack-monotonic-decreasing":ge("monotonic decreasing stack",W3,$3,eT,nT),"stack-monotonic-increasing":ge("monotonic increasing stack",tT,aT,iT,lT),"string-building":ge("efficient string building",rT,sT,uT,oT),"tree-bfs":ge("BFS",cT,fT,dT,hT),"tree-dfs-iterative":ge("DFS (iterative)",mT,pT,gT,bT),"tree-dfs-recursive":ge("DFS (recursive)",vT,yT,_T,ST),"two-pointers-one-input":ge("two pointers: one input, opposite ends",TT,ET,wT,OT),"two-pointers-two-inputs":ge("two pointers: two inputs, exhaust both",NT,xT,AT,MT)};function RT(s){const d=wi.leaves[s];return d?d.templateIds.map(f=>CT[f]).filter(f=>!!f):[]}const kT="_container_15mmp_1",DT="_buttonContainer_15mmp_15",jT="_tabButtonContainer_15mmp_24",zT="_tabButton_15mmp_24",iu={container:kT,buttonContainer:DT,tabButtonContainer:jT,tabButton:zT},BT="_code_10mye_1",LT="_line_10mye_14",jp={code:BT,line:LT};var $c,zp;function UT(){if(zp)return $c;zp=1;function s(m){return m instanceof Map?m.clear=m.delete=m.set=function(){throw new Error("map is read-only")}:m instanceof Set&&(m.add=m.clear=m.delete=function(){throw new Error("set is read-only")}),Object.freeze(m),Object.getOwnPropertyNames(m).forEach(R=>{const I=m[R],me=typeof I;(me==="object"||me==="function")&&!Object.isFrozen(I)&&s(I)}),m}class d{constructor(R){R.data===void 0&&(R.data={}),this.data=R.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function f(m){return m.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function c(m,...R){const I=Object.create(null);for(const me in m)I[me]=m[me];return R.forEach(function(me){for(const en in me)I[en]=me[en]}),I}const E="</span>",A=m=>!!m.scope,k=(m,{prefix:R})=>{if(m.startsWith("language:"))return m.replace("language:","language-");if(m.includes(".")){const I=m.split(".");return[`${R}${I.shift()}`,...I.map((me,en)=>`${me}${"_".repeat(en+1)}`)].join(" ")}return`${R}${m}`};class j{constructor(R,I){this.buffer="",this.classPrefix=I.classPrefix,R.walk(this)}addText(R){this.buffer+=f(R)}openNode(R){if(!A(R))return;const I=k(R.scope,{prefix:this.classPrefix});this.span(I)}closeNode(R){A(R)&&(this.buffer+=E)}value(){return this.buffer}span(R){this.buffer+=`<span class="${R}">`}}const U=(m={})=>{const R={children:[]};return Object.assign(R,m),R};class q{constructor(){this.rootNode=U(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(R){this.top.children.push(R)}openNode(R){const I=U({scope:R});this.add(I),this.stack.push(I)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(R){return this.constructor._walk(R,this.rootNode)}static _walk(R,I){return typeof I=="string"?R.addText(I):I.children&&(R.openNode(I),I.children.forEach(me=>this._walk(R,me)),R.closeNode(I)),R}static _collapse(R){typeof R!="string"&&R.children&&(R.children.every(I=>typeof I=="string")?R.children=[R.children.join("")]:R.children.forEach(I=>{q._collapse(I)}))}}class z extends q{constructor(R){super(),this.options=R}addText(R){R!==""&&this.add(R)}startScope(R){this.openNode(R)}endScope(){this.closeNode()}__addSublanguage(R,I){const me=R.root;I&&(me.scope=`language:${I}`),this.add(me)}toHTML(){return new j(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function b(m){return m?typeof m=="string"?m:m.source:null}function N(m){return X("(?=",m,")")}function H(m){return X("(?:",m,")*")}function Y(m){return X("(?:",m,")?")}function X(...m){return m.map(I=>b(I)).join("")}function W(m){const R=m[m.length-1];return typeof R=="object"&&R.constructor===Object?(m.splice(m.length-1,1),R):{}}function be(...m){return"("+(W(m).capture?"":"?:")+m.map(me=>b(me)).join("|")+")"}function fe(m){return new RegExp(m.toString()+"|").exec("").length-1}function ce(m,R){const I=m&&m.exec(R);return I&&I.index===0}const we=new RegExp(be(/\[(?:[^\\\]]|\\.)*\]/,/\(\?<(?![=!])[^>]+>/,/\(\?'[^']+'/,/\(\??/,/\\([1-9][0-9]*)/,/\\./));function He(m,{joinWith:R}){let I=0;return m.map(me=>{I+=1;const en=I;let Be=b(me),F="";for(;Be.length>0;){const K=we.exec(Be);if(!K){F+=Be;break}F+=Be.substring(0,K.index),Be=Be.substring(K.index+K[0].length),K[0][0]==="\\"&&K[1]?F+="\\"+String(Number(K[1])+en):(F+=K[0],(K[0]==="("||/^\(\?[<']/.test(K[0]))&&I++)}return F}).map(me=>`(${me})`).join(R)}const ze=/\b\B/,ie="[a-zA-Z]\\w*",he="[a-zA-Z_]\\w*",Oe="\\b\\d+(\\.\\d+)?",ye="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Qe="\\b(0b[01]+)",sn="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Gn=(m={})=>{const R=/^#![ ]*\//;return m.binary&&(m.begin=X(R,/.*\b/,m.binary,/\b.*/)),c({scope:"meta",begin:R,end:/$/,relevance:0,"on:begin":(I,me)=>{I.index!==0&&me.ignoreMatch()}},m)},On={begin:"\\\\[\\s\\S]",relevance:0},un={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[On]},G={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[On]},re={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Z=function(m,R,I={}){const me=c({scope:"comment",begin:m,end:R,contains:[]},I);me.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const en=be("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return me.contains.push({begin:X(/[ ]+/,"(",en,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),me},Ae=Z("//","$"),_e=Z("/\\*","\\*/"),rn=Z("#","$"),pn={scope:"number",begin:Oe,relevance:0},rt={scope:"number",begin:ye,relevance:0},g={scope:"number",begin:Qe,relevance:0},D={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[On,{begin:/\[/,end:/\]/,relevance:0,contains:[On]}]},ae={scope:"title",begin:ie,relevance:0},J={scope:"title",begin:he,relevance:0},se={begin:"\\.\\s*"+he,relevance:0};var Ne=Object.freeze({__proto__:null,APOS_STRING_MODE:un,BACKSLASH_ESCAPE:On,BINARY_NUMBER_MODE:g,BINARY_NUMBER_RE:Qe,COMMENT:Z,C_BLOCK_COMMENT_MODE:_e,C_LINE_COMMENT_MODE:Ae,C_NUMBER_MODE:rt,C_NUMBER_RE:ye,END_SAME_AS_BEGIN:function(m){return Object.assign(m,{"on:begin":(R,I)=>{I.data._beginMatch=R[1]},"on:end":(R,I)=>{I.data._beginMatch!==R[1]&&I.ignoreMatch()}})},HASH_COMMENT_MODE:rn,IDENT_RE:ie,MATCH_NOTHING_RE:ze,METHOD_GUARD:se,NUMBER_MODE:pn,NUMBER_RE:Oe,PHRASAL_WORDS_MODE:re,QUOTE_STRING_MODE:G,REGEXP_MODE:D,RE_STARTERS_RE:sn,SHEBANG:Gn,TITLE_MODE:ae,UNDERSCORE_IDENT_RE:he,UNDERSCORE_TITLE_MODE:J});function $(m,R){m.input[m.index-1]==="."&&R.ignoreMatch()}function ue(m,R){m.className!==void 0&&(m.scope=m.className,delete m.className)}function Fn(m,R){R&&m.beginKeywords&&(m.begin="\\b("+m.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",m.__beforeBegin=$,m.keywords=m.keywords||m.beginKeywords,delete m.beginKeywords,m.relevance===void 0&&(m.relevance=0))}function Wa(m,R){Array.isArray(m.illegal)&&(m.illegal=be(...m.illegal))}function ga(m,R){if(m.match){if(m.begin||m.end)throw new Error("begin & end are not supported with match");m.begin=m.match,delete m.match}}function pt(m,R){m.relevance===void 0&&(m.relevance=1)}const Nn=(m,R)=>{if(!m.beforeMatch)return;if(m.starts)throw new Error("beforeMatch cannot be used with starts");const I=Object.assign({},m);Object.keys(m).forEach(me=>{delete m[me]}),m.keywords=I.keywords,m.begin=X(I.beforeMatch,N(I.begin)),m.starts={relevance:0,contains:[Object.assign(I,{endsParent:!0})]},m.relevance=0,delete I.beforeMatch},Pe=["of","and","for","in","not","or","if","then","parent","list","value"],gt="keyword";function ba(m,R,I=gt){const me=Object.create(null);return typeof m=="string"?en(I,m.split(" ")):Array.isArray(m)?en(I,m):Object.keys(m).forEach(function(Be){Object.assign(me,ba(m[Be],R,Be))}),me;function en(Be,F){R&&(F=F.map(K=>K.toLowerCase())),F.forEach(function(K){const de=K.split("|");me[de[0]]=[Be,Bt(de[0],de[1])]})}}function Bt(m,R){return R?Number(R):Oi(m)?0:1}function Oi(m){return Pe.includes(m.toLowerCase())}const $a={},Pn=m=>{console.error(m)},Ni=(m,...R)=>{console.log(`WARN: ${m}`,...R)},xt=(m,R)=>{$a[`${m}/${R}`]||(console.log(`Deprecated as of ${m}. ${R}`),$a[`${m}/${R}`]=!0)},va=new Error;function Sl(m,R,{key:I}){let me=0;const en=m[I],Be={},F={};for(let K=1;K<=R.length;K++)F[K+me]=en[K],Be[K+me]=!0,me+=fe(R[K-1]);m[I]=F,m[I]._emit=Be,m[I]._multi=!0}function Lt(m){if(Array.isArray(m.begin)){if(m.skip||m.excludeBegin||m.returnBegin)throw Pn("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),va;if(typeof m.beginScope!="object"||m.beginScope===null)throw Pn("beginScope must be object"),va;Sl(m,m.begin,{key:"beginScope"}),m.begin=He(m.begin,{joinWith:""})}}function Tl(m){if(Array.isArray(m.end)){if(m.skip||m.excludeEnd||m.returnEnd)throw Pn("skip, excludeEnd, returnEnd not compatible with endScope: {}"),va;if(typeof m.endScope!="object"||m.endScope===null)throw Pn("endScope must be object"),va;Sl(m,m.end,{key:"endScope"}),m.end=He(m.end,{joinWith:""})}}function El(m){m.scope&&typeof m.scope=="object"&&m.scope!==null&&(m.beginScope=m.scope,delete m.scope)}function hu(m){El(m),typeof m.beginScope=="string"&&(m.beginScope={_wrap:m.beginScope}),typeof m.endScope=="string"&&(m.endScope={_wrap:m.endScope}),Lt(m),Tl(m)}function Nr(m){function R(F,K){return new RegExp(b(F),"m"+(m.case_insensitive?"i":"")+(m.unicodeRegex?"u":"")+(K?"g":""))}class I{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(K,de){de.position=this.position++,this.matchIndexes[this.matchAt]=de,this.regexes.push([de,K]),this.matchAt+=fe(K)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const K=this.regexes.map(de=>de[1]);this.matcherRe=R(He(K,{joinWith:"|"}),!0),this.lastIndex=0}exec(K){this.matcherRe.lastIndex=this.lastIndex;const de=this.matcherRe.exec(K);if(!de)return null;const vn=de.findIndex((Ut,ya)=>ya>0&&Ut!==void 0),dn=this.matchIndexes[vn];return de.splice(0,vn),Object.assign(de,dn)}}class me{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(K){if(this.multiRegexes[K])return this.multiRegexes[K];const de=new I;return this.rules.slice(K).forEach(([vn,dn])=>de.addRule(vn,dn)),de.compile(),this.multiRegexes[K]=de,de}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(K,de){this.rules.push([K,de]),de.type==="begin"&&this.count++}exec(K){const de=this.getMatcher(this.regexIndex);de.lastIndex=this.lastIndex;let vn=de.exec(K);if(this.resumingScanAtSamePosition()&&!(vn&&vn.index===this.lastIndex)){const dn=this.getMatcher(0);dn.lastIndex=this.lastIndex+1,vn=dn.exec(K)}return vn&&(this.regexIndex+=vn.position+1,this.regexIndex===this.count&&this.considerAll()),vn}}function en(F){const K=new me;return F.contains.forEach(de=>K.addRule(de.begin,{rule:de,type:"begin"})),F.terminatorEnd&&K.addRule(F.terminatorEnd,{type:"end"}),F.illegal&&K.addRule(F.illegal,{type:"illegal"}),K}function Be(F,K){const de=F;if(F.isCompiled)return de;[ue,ga,hu,Nn].forEach(dn=>dn(F,K)),m.compilerExtensions.forEach(dn=>dn(F,K)),F.__beforeBegin=null,[Fn,Wa,pt].forEach(dn=>dn(F,K)),F.isCompiled=!0;let vn=null;return typeof F.keywords=="object"&&F.keywords.$pattern&&(F.keywords=Object.assign({},F.keywords),vn=F.keywords.$pattern,delete F.keywords.$pattern),vn=vn||/\w+/,F.keywords&&(F.keywords=ba(F.keywords,m.case_insensitive)),de.keywordPatternRe=R(vn,!0),K&&(F.begin||(F.begin=/\B|\b/),de.beginRe=R(de.begin),!F.end&&!F.endsWithParent&&(F.end=/\B|\b/),F.end&&(de.endRe=R(de.end)),de.terminatorEnd=b(de.end)||"",F.endsWithParent&&K.terminatorEnd&&(de.terminatorEnd+=(F.end?"|":"")+K.terminatorEnd)),F.illegal&&(de.illegalRe=R(F.illegal)),F.contains||(F.contains=[]),F.contains=[].concat(...F.contains.map(function(dn){return wl(dn==="self"?F:dn)})),F.contains.forEach(function(dn){Be(dn,de)}),F.starts&&Be(F.starts,K),de.matcher=en(de),de}if(m.compilerExtensions||(m.compilerExtensions=[]),m.contains&&m.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return m.classNameAliases=c(m.classNameAliases||{}),Be(m)}function xi(m){return m?m.endsWithParent||xi(m.starts):!1}function wl(m){return m.variants&&!m.cachedVariants&&(m.cachedVariants=m.variants.map(function(R){return c(m,{variants:null},R)})),m.cachedVariants?m.cachedVariants:xi(m)?c(m,{starts:m.starts?c(m.starts):null}):Object.isFrozen(m)?c(m):m}var Ol="11.12.0";class mu extends Error{constructor(R,I){super(R),this.name="HTMLInjectionError",this.html=I}}const Nl=f,Kn=c,xr=Symbol("nomatch"),Ar=7,xl=function(m){const R=Object.create(null),I=Object.create(null),me=[];let en=!0;const Be="Could not find the language '{}', did you forget to load/include a language module?",F={disableAutodetect:!0,name:"Plain text",contains:[]};let K={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:z};function de(B){return K.noHighlightRe.test(B)}function vn(B){let ne=B.className+" ";ne+=B.parentNode?B.parentNode.className:"";const Me=K.languageDetectRe.exec(ne);if(Me){const We=Mt(Me[1]);return We||(Ni(Be.replace("{}",Me[1])),Ni("Falling back to no-highlight mode for this block.",B)),We?Me[1]:"no-highlight"}return ne.split(/\s+/).find(We=>de(We)||Mt(We))}function dn(B,ne,Me){let We="",gn="";typeof ne=="object"?(We=B,Me=ne.ignoreIllegals,gn=ne.language):(xt("10.7.0","highlight(lang, code, ...args) has been deprecated."),xt("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),gn=B,We=ne),Me===void 0&&(Me=!0);const $n={code:We,language:gn};Wn("before:highlight",$n);const et=$n.result?$n.result:Ut($n.language,$n.code,Me);return et.code=$n.code,Wn("after:highlight",et),et}function Ut(B,ne,Me,We){const gn=Object.create(null);function $n(Q,te){return Q.keywords[te]}function et(){if(!ve.keywords){_n.addText(Ye);return}let Q=0;ve.keywordPatternRe.lastIndex=0;let te=ve.keywordPatternRe.exec(Ye),Se="";for(;te;){Se+=Ye.substring(Q,te.index);const Ge=vt.case_insensitive?te[0].toLowerCase():te[0],Xe=$n(ve,Ge);if(Xe){const[st,Lr]=Xe;if(_n.addText(Se),Se="",gn[Ge]=(gn[Ge]||0)+1,gn[Ge]<=Ar&&(ta+=Lr),st.startsWith("_"))Se+=te[0];else{const Rl=vt.classNameAliases[st]||st;Cn(te[0],Rl)}}else Se+=te[0];Q=ve.keywordPatternRe.lastIndex,te=ve.keywordPatternRe.exec(Ye)}Se+=Ye.substring(Q),_n.addText(Se)}function Wt(){if(Ye==="")return;let Q=null;if(typeof ve.subLanguage=="string"){if(!R[ve.subLanguage]){_n.addText(Ye);return}Q=Ut(ve.subLanguage,Ye,!0,Le[ve.subLanguage]),Le[ve.subLanguage]=Q._top}else Q=_a(Ye,ve.subLanguage.length?ve.subLanguage:null);ve.relevance>0&&(ta+=Q.relevance),_n.__addSublanguage(Q._emitter,Q.language)}function Mn(){ve.subLanguage!=null?Wt():et(),Ye=""}function Cn(Q,te){Q!==""&&(_n.startScope(te),_n.addText(Q),_n.endScope())}function $t(Q,te){let Se=1;const Ge=te.length-1;for(;Se<=Ge;){if(!Q._emit[Se]){Se++;continue}const Xe=vt.classNameAliases[Q[Se]]||Q[Se],st=te[Se];Xe?Cn(st,Xe):(Ye=st,et(),Ye=""),Se++}}function Ea(Q,te){return Q.scope&&typeof Q.scope=="string"&&_n.openNode(vt.classNameAliases[Q.scope]||Q.scope),Q.beginScope&&(Q.beginScope._wrap?(Cn(Ye,vt.classNameAliases[Q.beginScope._wrap]||Q.beginScope._wrap),Ye=""):Q.beginScope._multi&&($t(Q.beginScope,te),Ye="")),ve=Object.create(Q,{parent:{value:ve}}),ve}function ea(Q,te,Se){let Ge=ce(Q.endRe,Se);if(Ge){if(Q["on:end"]){const Xe=new d(Q);Q["on:end"](te,Xe),Xe.isMatchIgnored&&(Ge=!1)}if(Ge){for(;Q.endsParent&&Q.parent;)Q=Q.parent;return Q}}if(Q.endsWithParent)return ea(Q.parent,te,Se)}function yn(Q){return ve.matcher.regexIndex===0?(Ye+=Q[0],1):(Ci=!0,0)}function Dr(Q){const te=Q[0],Se=Q.rule,Ge=new d(Se),Xe=[Se.__beforeBegin,Se["on:begin"]];for(const st of Xe)if(st&&(st(Q,Ge),Ge.isMatchIgnored))return yn(te);return Se.skip?Ye+=te:(Se.excludeBegin&&(Ye+=te),Mn(),!Se.returnBegin&&!Se.excludeBegin&&(Ye=te)),Ea(Se,Q),Se.returnBegin?0:te.length}function jr(Q){const te=Q[0],Se=ne.substring(Q.index),Ge=ea(ve,Q,Se);if(!Ge)return xr;const Xe=ve;ve.endScope&&ve.endScope._wrap?(Mn(),Cn(te,ve.endScope._wrap)):ve.endScope&&ve.endScope._multi?(Mn(),$t(ve.endScope,Q)):Xe.skip?Ye+=te:(Xe.returnEnd||Xe.excludeEnd||(Ye+=te),Mn(),Xe.excludeEnd&&(Ye=te));do ve.scope&&_n.closeNode(),!ve.skip&&!ve.subLanguage&&(ta+=ve.relevance),ve=ve.parent;while(ve!==Ge.parent);return Ge.starts&&Ea(Ge.starts,Q),Xe.returnEnd?0:te.length}function zr(){const Q=[];for(let te=ve;te!==vt;te=te.parent)te.scope&&Q.unshift(te.scope);Q.forEach(te=>_n.openNode(te))}let bt={};function na(Q,te){const Se=te&&te[0];if(Ye+=Q,Se==null)return Mn(),0;if(bt.type==="begin"&&te.type==="end"&&bt.index===te.index&&Se===""){if(Ye+=ne.slice(te.index,te.index+1),!en){const Ge=new Error(`0 width match regex (${B})`);throw Ge.languageName=B,Ge.badRule=bt.rule,Ge}return 1}if(bt=te,te.type==="begin")return Dr(te);if(te.type==="illegal"&&!Me){const Ge=new Error('Illegal lexeme "'+Se+'" for mode "'+(ve.scope||"<unnamed>")+'"');throw Ge.mode=ve,Ge}else if(te.type==="end"){const Ge=jr(te);if(Ge!==xr)return Ge}if(te.type==="illegal"&&Se==="")return te.index===ne.length||(Ye+=`
`),1;if(zn>1e5&&zn>te.index*3)throw new Error("potential infinite loop, way more iterations than matches");return Ye+=Se,Se.length}const vt=Mt(B);if(!vt)throw Pn(Be.replace("{}",B)),new Error('Unknown language: "'+B+'"');const Br=Nr(vt);let Mi="",ve=We||Br;const Le={},_n=new K.__emitter(K);zr();let Ye="",ta=0,jn=0,zn=0,Ci=!1;try{if(vt.__emitTokens)vt.__emitTokens(ne,_n);else{for(ve.matcher.considerAll();;){zn++,Ci?Ci=!1:ve.matcher.considerAll(),ve.matcher.lastIndex=jn;const Q=ve.matcher.exec(ne);if(!Q)break;const te=ne.substring(jn,Q.index),Se=na(te,Q);jn=Q.index+Se}na(ne.substring(jn))}return _n.finalize(),Mi=_n.toHTML(),{language:B,value:Mi,relevance:ta,illegal:!1,_emitter:_n,_top:ve}}catch(Q){if(Q.message&&Q.message.includes("Illegal"))return{language:B,value:Nl(ne),illegal:!0,relevance:0,_illegalBy:{message:Q.message,index:jn,context:ne.slice(jn-100,jn+100),mode:Q.mode,resultSoFar:Mi},_emitter:_n};if(en)return{language:B,value:Nl(ne),illegal:!1,relevance:0,errorRaised:Q,_emitter:_n,_top:ve};throw Q}}function ya(B){const ne={value:Nl(B),illegal:!1,relevance:0,_top:F,_emitter:new K.__emitter(K)};return ne._emitter.addText(B),ne}function _a(B,ne){ne=ne||K.languages||Object.keys(R);const Me=ya(B),We=ne.filter(Mt).filter(Ai).map(Mn=>Ut(Mn,B,!1));We.unshift(Me);const gn=We.sort((Mn,Cn)=>{if(Mn.relevance!==Cn.relevance)return Cn.relevance-Mn.relevance;if(Mn.language&&Cn.language){if(Mt(Mn.language).supersetOf===Cn.language)return 1;if(Mt(Cn.language).supersetOf===Mn.language)return-1}return 0}),[$n,et]=gn,Wt=$n;return Wt.secondBest=et,Wt}function Pt(B,ne,Me){const We=ne&&I[ne]||Me;B.classList.add("hljs"),B.classList.add(`language-${We}`)}function Sa(B){let ne=null;const Me=vn(B);if(de(Me))return;if(Wn("before:highlightElement",{el:B,language:Me}),B.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",B);return}if(B.children.length>0&&(K.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(B)),K.throwUnescapedHTML))throw new mu("One of your code blocks includes unescaped HTML.",B.innerHTML);ne=B;const We=ne.textContent,gn=Me?dn(We,{language:Me,ignoreIllegals:!0}):_a(We);B.innerHTML=gn.value,B.dataset.highlighted="yes",Pt(B,Me,gn.language),B.result={language:gn.language,re:gn.relevance,relevance:gn.relevance},gn.secondBest&&(B.secondBest={language:gn.secondBest.language,relevance:gn.secondBest.relevance}),Wn("after:highlightElement",{el:B,result:gn,text:We})}function ei(B){K=Kn(K,B)}const Mr=()=>{Ta(),xt("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function pu(){Ta(),xt("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Al=!1;function Ta(){function B(){Ta()}if(document.readyState==="loading"){Al||window.addEventListener("DOMContentLoaded",B,!1),Al=!0;return}document.querySelectorAll(K.cssSelector).forEach(Sa)}function ni(B,ne){let Me=null;try{Me=ne(m)}catch(We){if(Pn("Language definition for '{}' could not be registered.".replace("{}",B)),en)Pn(We);else throw We;Me=F}Me.name||(Me.name=B),R[B]=Me,Me.rawDefinition=ne.bind(null,m),Me.aliases&&Ml(Me.aliases,{languageName:B})}function gu(B){delete R[B];for(const ne of Object.keys(I))I[ne]===B&&delete I[ne]}function Cr(){return Object.keys(R)}function Mt(B){return B=(B||"").toLowerCase(),R[B]||R[I[B]]}function Ml(B,{languageName:ne}){typeof B=="string"&&(B=[B]),B.forEach(Me=>{I[Me.toLowerCase()]=ne})}function Ai(B){const ne=Mt(B);return ne&&!ne.disableAutodetect}function Cl(B){B["before:highlightBlock"]&&!B["before:highlightElement"]&&(B["before:highlightElement"]=ne=>{B["before:highlightBlock"](Object.assign({block:ne.el},ne))}),B["after:highlightBlock"]&&!B["after:highlightElement"]&&(B["after:highlightElement"]=ne=>{B["after:highlightBlock"](Object.assign({block:ne.el},ne))})}function Rr(B){Cl(B),me.push(B)}function kr(B){const ne=me.indexOf(B);ne!==-1&&me.splice(ne,1)}function Wn(B,ne){const Me=B;me.forEach(function(We){We[Me]&&We[Me](ne)})}function xn(B){return xt("10.7.0","highlightBlock will be removed entirely in v12.0"),xt("10.7.0","Please use highlightElement now."),Sa(B)}Object.assign(m,{highlight:dn,highlightAuto:_a,highlightAll:Ta,highlightElement:Sa,highlightBlock:xn,configure:ei,initHighlighting:Mr,initHighlightingOnLoad:pu,registerLanguage:ni,unregisterLanguage:gu,listLanguages:Cr,getLanguage:Mt,registerAliases:Ml,autoDetection:Ai,inherit:Kn,addPlugin:Rr,removePlugin:kr}),m.debugMode=function(){en=!1},m.safeMode=function(){en=!0},m.versionString=Ol,m.regex={concat:X,lookahead:N,either:be,optional:Y,anyNumberOfTimes:H};for(const B in Ne)typeof Ne[B]=="object"&&s(Ne[B]);return Object.assign(m,Ne),m},At=xl({});return At.newInstance=()=>xl({}),$c=At,At.HighlightJS=At,At.default=At,$c}var qT=UT();const Or=_l(qT),Bp="[A-Za-z$_][0-9A-Za-z$_]*",HT=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],YT=["true","false","null","undefined","NaN","Infinity"],$p=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],eg=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],ng=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],GT=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","self","global"],KT=[].concat(ng,$p,eg);function VT(s){const d=s.regex,f=(Z,{after:Ae})=>{const _e="</"+Z[0].slice(1);return Z.input.indexOf(_e,Ae)!==-1},c=Bp,E={begin:"<>",end:"</>"},A=/<[A-Za-z0-9\\._:-]+\s*\/>/,k={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(Z,Ae)=>{const _e=Z[0].length+Z.index,rn=Z.input[_e];if(rn==="<"||rn===","){Ae.ignoreMatch();return}rn===">"&&(f(Z,{after:_e})||Ae.ignoreMatch());let pn;const rt=Z.input.substring(_e);if(pn=rt.match(/^\s*=/)){Ae.ignoreMatch();return}if((pn=rt.match(/^\s+extends\s+/))&&pn.index===0){Ae.ignoreMatch();return}}},j={$pattern:Bp,keyword:HT,literal:YT,built_in:KT,"variable.language":GT},U="[0-9](_?[0-9])*",q=`\\.(${U})`,z="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",b={className:"number",variants:[{begin:`(\\b(${z})((${q})|\\.)?|(${q}))[eE][+-]?(${U})\\b`},{begin:`\\b(${z})\\b((${q})\\b|\\.)?|(${q})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},N={className:"subst",begin:"\\$\\{",end:"\\}",keywords:j,contains:[]},H={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[s.BACKSLASH_ESCAPE,N],subLanguage:"xml"}},Y={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[s.BACKSLASH_ESCAPE,N],subLanguage:"css"}},X={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[s.BACKSLASH_ESCAPE,N],subLanguage:"graphql"}},W={className:"string",begin:"`",end:"`",contains:[s.BACKSLASH_ESCAPE,N]},fe={className:"comment",variants:[s.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:c+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),s.C_BLOCK_COMMENT_MODE,s.C_LINE_COMMENT_MODE]},ce=[s.APOS_STRING_MODE,s.QUOTE_STRING_MODE,H,Y,X,W,{match:/\$\d+/},b];N.contains=ce.concat({begin:/\{/,end:/\}/,keywords:j,contains:["self"].concat(ce)});const we=[].concat(fe,N.contains),He=we.concat([{begin:/(\s*)\(/,end:/\)/,keywords:j,contains:["self"].concat(we)}]),ze={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:j,contains:He},ie={variants:[{match:[/class/,/\s+/,c,/\s+/,/extends/,/\s+/,d.concat(c,"(",d.concat(/\./,c),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,c],scope:{1:"keyword",3:"title.class"}}]},he={relevance:0,match:d.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...$p,...eg]}},Oe={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},ye={variants:[{match:[/function/,/\s+/,c,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[ze],illegal:/%/},Qe={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function sn(Z){return d.concat("(?!",Z.join("|"),")")}const Gn={match:d.concat(/\b/,sn([...ng,"super","import","await"].map(Z=>`${Z}\\s*\\(`)),c,d.lookahead(/\s*\(/)),className:"title.function",relevance:0},On={begin:d.concat(/\./,d.lookahead(d.concat(c,/(?![0-9A-Za-z$_(])/))),end:c,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},un={match:[/get|set/,/\s+/,c,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},ze]},G="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+s.UNDERSCORE_IDENT_RE+")\\s*=>",re={match:[/const|var|let/,/\s+/,c,/\s*/,/=\s*/,/(async\s*)?/,d.lookahead(G)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[ze]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:j,exports:{PARAMS_CONTAINS:He,CLASS_REFERENCE:he},illegal:/#(?![$_A-Za-z])/,contains:[s.SHEBANG({label:"shebang",binary:"node",relevance:5}),Oe,s.APOS_STRING_MODE,s.QUOTE_STRING_MODE,H,Y,X,W,fe,{match:/\$\d+/},b,he,{scope:"attr",match:c+d.lookahead(":"),relevance:0},re,{begin:"("+s.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[fe,s.REGEXP_MODE,{className:"function",begin:G,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:s.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:j,contains:He}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:E.begin,end:E.end},{match:A},{begin:k.begin,"on:begin":k.isTrulyOpeningTag,end:k.end}],subLanguage:"xml",contains:[{begin:k.begin,end:k.end,skip:!0,contains:["self"]}]}]},ye,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+s.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[ze,s.inherit(s.TITLE_MODE,{begin:c,className:"title.function"})]},{match:/\.\.\./,relevance:0},On,{match:"\\$"+c,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[ze]},Gn,Qe,ie,un,{match:/\$[(.]/}]}}var bl="[0-9](_*[0-9])*",lu=`\\.(${bl})`,ru="[0-9a-fA-F](_*[0-9a-fA-F])*",Lp={className:"number",variants:[{begin:`(\\b(${bl})((${lu})|\\.)?|(${lu}))[eE][+-]?(${bl})[fFdD]?\\b`},{begin:`\\b(${bl})((${lu})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${lu})[fFdD]?\\b`},{begin:`\\b(${bl})[fFdD]\\b`},{begin:`\\b0[xX]((${ru})\\.?|(${ru})?\\.(${ru}))[pP][+-]?(${bl})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${ru})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};function tg(s,d,f){return f===-1?"":s.replace(d,c=>tg(s,d,f-1))}function IT(s){const d=s.regex,f="[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",c="(?:(?:\\s*\\[\\s*])+)?",E=f+"<@@@>"+c,k="(?:"+("\\?(?:\\s+(?:extends|super)\\s+"+E+")?")+"|"+E+")",j=tg("(?:\\s*<\\s*"+k+"(?:\\s*,\\s*"+k+")*\\s*>)?",/<@@@>/g,2),N={keyword:["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do","sealed","yield","permits","goto","when"],literal:["false","true","null"],type:["char","boolean","long","float","int","byte","short","double"],built_in:["super","this"]},H={className:"meta",begin:"@"+f,contains:[{begin:/\(/,end:/\)/,contains:["self"]}]},Y={className:"params",begin:/\(/,end:/\)/,keywords:N,relevance:0,contains:[s.C_BLOCK_COMMENT_MODE],endsParent:!0};return{name:"Java",aliases:["jsp"],keywords:N,illegal:/<\/|#/,contains:[s.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{begin:/import java\.[a-z]+\./,keywords:"import",relevance:2},s.C_LINE_COMMENT_MODE,s.C_BLOCK_COMMENT_MODE,{begin:/"""/,end:/"""/,className:"string",contains:[s.BACKSLASH_ESCAPE]},s.APOS_STRING_MODE,s.QUOTE_STRING_MODE,{match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,f],className:{1:"keyword",3:"title.class"}},{match:/non-sealed/,scope:"keyword"},{beginKeywords:"new throw return else yield assert",relevance:0},{begin:[f,d.concat(j,c,/\s+/),f,c,/\s*/,/=(?!=)/],className:{1:"type",3:"variable",6:"operator"}},{begin:[/record/,/\s+/,f],className:{1:"keyword",3:"title.class"},contains:[Y,s.C_LINE_COMMENT_MODE,s.C_BLOCK_COMMENT_MODE]},{begin:[f,d.concat(j,c,/\s+/),f,/\s*(?=\()/],className:{1:"type",3:"title.function"},keywords:N,contains:[{className:"params",begin:/\(/,end:/\)/,keywords:N,relevance:0,contains:[H,s.APOS_STRING_MODE,s.QUOTE_STRING_MODE,Lp,s.C_BLOCK_COMMENT_MODE]},s.C_LINE_COMMENT_MODE,s.C_BLOCK_COMMENT_MODE]},Lp,H]}}function QT(s){const d=s.regex,f=s.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),c="decltype\\(auto\\)",E="[a-zA-Z_]\\w*::",k="(?!struct)("+c+"|"+d.optional(E)+"[a-zA-Z_]\\w*"+d.optional("<[^<>]+>")+")",j={className:"type",begin:"\\b[a-z\\d_]*_t\\b"},q={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[s.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'("+"\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)"+"|.)",end:"'",illegal:"."},s.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\\s"]{0,16})\(/,end:/\)([^()\\\s"]{0,16})"/})]},z={className:"number",variants:[{begin:"[+-]?(?:(?:\\b[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|\\b[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|\\b0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)"},{begin:"[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)"}],relevance:0},b={scope:"meta",begin:/#\s*include\b/,end:/$/,keywords:{keyword:"include"},contains:[{begin:/\\\n/},q,{scope:"string",begin:/<.*?>/},f,s.C_BLOCK_COMMENT_MODE]},N={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},s.inherit(q,{className:"string"}),f,s.C_BLOCK_COMMENT_MODE]},H=[b,N],Y={className:"title",begin:d.optional(E)+s.IDENT_RE,relevance:0},X=d.optional(E)+s.IDENT_RE+"\\s*\\(",W=12,be=["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],fe=["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],ce=["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","flat_map","flat_set","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"],we=["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"],ie={type:fe,keyword:be,literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],_type_hints:ce},he={className:"function.dispatch",relevance:0,keywords:{_hint:we},begin:d.concat(/\b/,`(?!${be.join("|")})`,s.IDENT_RE,d.lookahead(/(<[^<>]+>|)\s*\(/))},Oe=[he,...H,j,f,s.C_BLOCK_COMMENT_MODE,z,q],ye={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:ie,contains:Oe.concat([{begin:/\(/,end:/\)/,keywords:ie,contains:Oe.concat(["self"]),relevance:0}]),relevance:0},Qe={className:"function",begin:"("+k+"[\\*&\\s]+){1,"+W+"}"+X,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:ie,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:c,keywords:ie,relevance:0},{begin:X,returnBegin:!0,contains:[Y],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[q,z]},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:ie,relevance:0,contains:[f,s.C_BLOCK_COMMENT_MODE,q,z,j,{begin:/\(/,end:/\)/,keywords:ie,relevance:0,contains:["self",f,s.C_BLOCK_COMMENT_MODE,q,z,j]}]},j,f,s.C_BLOCK_COMMENT_MODE,...H]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:ie,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat(ye,Qe,he,Oe,[...H,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function|flat_map|flat_set)\\s*<(?!<)",end:">",keywords:ie,contains:["self",j]},{begin:s.IDENT_RE+"::",keywords:ie},{match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],className:{1:"keyword",3:"title.class"}}])}}function XT(s){const d=s.regex,f=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),c=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],E=/[-+*\/%=<>&|^~]|\*\*?|\/\/?|<<=?|>>=?|\+=|-=|\*=|\/=|%=|@|<|>/,A=["bool","complex","dict","float","frozenset","int","list","set","str","tuple"],k=["add_vertex","add","append","backtrack","bit_length","clear","collect_words","connected","counting_sort","defaultdict","deque","dfs","dp","extend","find_max_index","find","heapify","heappop","heappush","insert","insertion_sort","join","ListNode","merge_sort","pop","popleft","print_trie","quick_sort","RECURRENCE_RELATION","remove","shuffle","sort","TreeNode","TrieNode","union","UnionFind","update"],j=["BASE_CASE","BOOLEAN","CONDITION","CRITERIA","ITERATE_OVER_INPUT","MAXIMUM_POSSIBLE_ANSWER","MINIMUM_POSSIBLE_ANSWER","OTHER_ARGUMENTS","SMALLEST_SUBPROBLEM","START_NODE","STATE_FOR_WHOLE_INPUT","STATE","WINDOW_CONDITION_BROKEN"],U=["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip",...k],q=["__debug__","Ellipsis","False","None","NotImplemented","True",...j],z=["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union",...A],b={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:c,built_in:U,literal:q,type:z},N={className:"meta",begin:/^(>>>|\.\.\.) /},H={className:"subst",begin:/\{/,end:/\}/,keywords:b,illegal:/#/},Y={begin:/\{\{/,relevance:0},X={className:"string",contains:[s.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[s.BACKSLASH_ESCAPE,N],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[s.BACKSLASH_ESCAPE,N],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[s.BACKSLASH_ESCAPE,N,Y,H]},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[s.BACKSLASH_ESCAPE,N,Y,H]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[s.BACKSLASH_ESCAPE,Y,H]},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[s.BACKSLASH_ESCAPE,Y,H]},s.APOS_STRING_MODE,s.QUOTE_STRING_MODE]},W="[0-9](_?[0-9])*",be=`(\\b(${W}))?\\.(${W})|\\b(${W})\\.`,fe=`\\b|${c.join("|")}`,ce={className:"number",relevance:0,variants:[{begin:`(\\b(${W})|(${be}))[eE][+-]?(${W})[jJ]?(?=${fe})`},{begin:`(${be})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${fe})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${fe})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${fe})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${fe})`},{begin:`\\b(${W})[jJ](?=${fe})`}]},we={className:"comment",begin:d.lookahead(/# type:/),end:/$/,keywords:b,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},He={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:b,contains:["self",N,ce,X,s.HASH_COMMENT_MODE,{scope:"params.operator",match:E},{scope:"params.comma",match:","},{scope:"params.self",match:/self/}]}]};return H.contains=[X,ce,N],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:b,illegal:/(<\/|\?)|=>/,contains:[N,ce,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},X,we,s.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,f],scope:{1:"keyword.def",3:"title.function"},contains:[He]},{variants:[{match:[/\bclass/,/\s+/,f,/\s*/,/\(\s*/,f,/\s*\)/]},{match:[/\bclass/,/\s+/,f]}],scope:{1:"keyword.class",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[ce,He,X]},{scope:"operator",match:E}]}}Or.registerLanguage("python",XT);Or.registerLanguage("javascript",VT);Or.registerLanguage("java",IT);Or.registerLanguage("cpp",QT);function ZT({code:s,language:d}){const f=L.useRef(null),[c,E]=L.useState(""),[A,k]=L.useState(""),j=qe("hljs",d,jp.code),U=()=>{if(f.current){const X=s.split(`
`).map((W,be)=>{const fe=Or.highlight(W,{language:d}).value;return`<span class=${jp.line} data-line-number=${be+1}>${fe}</span>`}).join("");k(X)}},q=()=>{f.current?.querySelectorAll("span[data-line-number]")?.forEach(X=>X.addEventListener("click",N))},z=()=>{f.current?.querySelectorAll("span[data-line-number]")?.forEach(X=>X.removeEventListener("click",N))},b=()=>{f.current?.querySelector(`span[data-line-number="${c}"]`)?.removeAttribute("focused")},N=H=>{const Y=H.currentTarget,X=Y.getAttribute("data-line-number")??"";b(),X===c?E(""):(Y.setAttribute("focused",""),E(X))};return Pp(f,b),L.useEffect(()=>(U(),q(),()=>z()),[s,A,c]),o.jsx("pre",{ref:f,children:o.jsx("code",{className:j,dangerouslySetInnerHTML:{__html:A}})})}const JT="_copyButton_1k9b5_1",FT="_copySvg_1k9b5_30",PT="_checkSvg_1k9b5_37",WT="_checkSvgPath_1k9b5_42",$T="_enter_1k9b5_53",eE="_exit_1k9b5_57",Ti={copyButton:JT,copySvg:FT,checkSvg:PT,checkSvgPath:WT,enter:$T,exit:eE};function nE({onClick:s}){const[d,f]=L.useState("show"),[c,E]=L.useState("hide"),A=qe(Ti.copySvg,d==="enter"&&Ti.enter,d==="exit"&&Ti.exit),k=qe(Ti.checkSvg,c==="exit"&&Ti.exit),j=qe(Ti.checkSvgPath),U=()=>{d==="show"&&c==="hide"&&(f("exit"),s())},q=()=>{d==="enter"&&f("show"),d==="exit"&&(f("hide"),E("show"))},z=()=>{c==="show"&&setTimeout(()=>{E("exit")},500),c==="exit"&&(E("hide"),f("enter"))},b=()=>d!=="hide"&&o.jsx("svg",{className:A,viewBox:"0 0 512 512",onAnimationEnd:q,children:o.jsx("path",{d:"M64 464H288c8.8 0 16-7.2 16-16V384h48v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h64v48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM224 304H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16V288c0 8.8 7.2 16 16 16zm-64-16V64c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64z"})}),N=()=>c!=="hide"&&o.jsx("svg",{className:k,viewBox:"0 0 16 16",onAnimationEnd:z,children:o.jsx("path",{className:j,d:"M3.428571,9.14285714 L6.85714286,12.57142857 L12.5714286,3.42857143"})});return o.jsxs("button",{type:"button","aria-label":c==="hide"?"Copy code":"Copied",title:"Copy code",className:Ti.copyButton,onClick:U,children:[b(),N()]})}function tE(){return o.jsxs("svg",{viewBox:"0 0 128 128",children:[o.jsxs("linearGradient",{id:"python_svg__a",x1:70.252,x2:170.659,y1:1237.476,y2:1151.089,gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",gradientUnits:"userSpaceOnUse",children:[o.jsx("stop",{offset:0,stopColor:"#5A9FD4"}),o.jsx("stop",{offset:1,stopColor:"#306998"})]}),o.jsxs("linearGradient",{id:"python_svg__b",x1:209.474,x2:173.62,y1:1098.811,y2:1149.537,gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",gradientUnits:"userSpaceOnUse",children:[o.jsx("stop",{offset:0,stopColor:"#FFD43B"}),o.jsx("stop",{offset:1,stopColor:"#FFE873"})]}),o.jsx("path",{fill:"url(#python_svg__a)",d:"M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008M50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721",transform:"translate(0 10.26)"}),o.jsx("path",{fill:"url(#python_svg__b)",d:"M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692",transform:"translate(0 10.26)"}),o.jsxs("radialGradient",{id:"python_svg__c",cx:1825.678,cy:444.45,r:26.743,gradientTransform:"matrix(0 -.24 -1.055 0 532.979 557.576)",gradientUnits:"userSpaceOnUse",children:[o.jsx("stop",{offset:0,stopColor:"#B8B8B8",stopOpacity:.498}),o.jsx("stop",{offset:1,stopColor:"#7F7F7F",stopOpacity:0})]}),o.jsx("path",{fill:"url(#python_svg__c)",d:"M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416s14.815-6.417 33.092-6.417c18.275 0 33.091 2.872 33.091 6.417",opacity:.444})]})}function aE(){return o.jsxs("svg",{viewBox:"0 0 128 128",children:[o.jsx("path",{fill:"#F0DB4F",d:"M1.408 1.408h125.184v125.185H1.408z"}),o.jsx("path",{fill:"#323330",d:"M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237"})]})}function iE(){return o.jsxs("svg",{id:"Layer_1",x:"0px",y:"0px",width:"306px",height:"344.35px",viewBox:"0 0 306 344.35",enableBackground:"new 0 0 306 344.35",children:[o.jsx("path",{fill:"#00599C",d:"M302.107,258.262c2.401-4.159,3.893-8.845,3.893-13.053V99.14c0-4.208-1.49-8.893-3.892-13.052L153,172.175L302.107,258.262z"}),o.jsx("path",{fill:"#004482",d:"M166.25,341.193l126.5-73.034c3.644-2.104,6.956-5.737,9.357-9.897L153,172.175L3.893,258.263c2.401,4.159,5.714,7.793,9.357,9.896l126.5,73.034C147.037,345.401,158.963,345.401,166.25,341.193z"}),o.jsx("path",{fill:"#659AD2",d:"M302.108,86.087c-2.402-4.16-5.715-7.793-9.358-9.897L166.25,3.156c-7.287-4.208-19.213-4.208-26.5,0L13.25,76.19C5.962,80.397,0,90.725,0,99.14v146.069c0,4.208,1.491,8.894,3.893,13.053L153,172.175L302.108,86.087z"}),o.jsx("g",{children:o.jsx("path",{fill:"#FFFFFF",d:"M153,274.175c-56.243,0-102-45.757-102-102s45.757-102,102-102c36.292,0,70.139,19.53,88.331,50.968l-44.143,25.544c-9.105-15.736-26.038-25.512-44.188-25.512c-28.122,0-51,22.878-51,51c0,28.121,22.878,51,51,51c18.152,0,35.085-9.776,44.191-25.515l44.143,25.543C223.142,254.644,189.294,274.175,153,274.175z"})}),o.jsx("g",{children:o.jsx("polygon",{fill:"#FFFFFF",points:"255,166.508 243.666,166.508 243.666,155.175 232.334,155.175 232.334,166.508 221,166.508221,177.841 232.334,177.841 232.334,189.175 243.666,189.175 243.666,177.841 255,177.841 	"})}),o.jsx("g",{children:o.jsx("polygon",{fill:"#FFFFFF",points:"297.5,166.508 286.166,166.508 286.166,155.175 274.834,155.175 274.834,166.508 263.5,166.508263.5,177.841 274.834,177.841 274.834,189.175 286.166,189.175 286.166,177.841 297.5,177.841 	"})})]})}function lE(){return o.jsxs("svg",{height:"800px",width:"800px",id:"Layer_1",viewBox:"0 0 511.998 511.998",children:[o.jsxs("g",{children:[o.jsx("path",{fill:"#DB380E",d:"M253.464,94.869c-23.658,16.639-50.471,35.498-64.838,66.699c-24.954,54.435,51.062,113.812,54.311,116.313c0.755,0.581,1.659,0.871,2.56,0.871c0.957,0,1.915-0.327,2.693-0.979c1.509-1.262,1.937-3.406,1.031-5.152c-0.275-0.53-27.561-53.53-26.547-91.552c0.359-13.243,18.892-28.266,38.512-44.171c17.97-14.568,38.34-31.079,50.258-50.394c26.164-42.516-2.916-84.322-3.213-84.74c-1.155-1.622-3.287-2.209-5.11-1.41c-1.821,0.804-2.83,2.773-2.414,4.72c0.059,0.277,5.714,27.923-10.022,56.406C284.203,73.25,269.959,83.268,253.464,94.869z"}),o.jsx("path",{fill:"#DB380E",d:"M353.137,113.617c1.669-1.257,2.159-3.55,1.15-5.38c-1.011-1.83-3.211-2.637-5.165-1.895c-4.019,1.528-98.416,37.915-98.416,81.88c0,30.307,12.946,46.317,22.399,58.009c3.708,4.586,6.909,8.546,7.964,11.927c2.97,9.743-4.066,27.353-7.025,33.317c-0.853,1.714-0.435,3.792,1.016,5.044c0.784,0.677,1.763,1.021,2.743,1.021c0.834,0,1.672-0.248,2.396-0.752c1.623-1.128,39.667-28.026,32.844-60.433c-2.542-12.318-8.595-21.318-13.936-29.26c-8.274-12.305-14.25-21.193-5.184-37.609C304.545,150.338,352.65,113.981,353.137,113.617z"})]}),o.jsxs("g",{children:[o.jsx("path",{fill:"#73A1FB",d:"M107.418,298.236c-1.618,4.845-0.854,9.651,2.207,13.903c10.233,14.207,46.48,22.029,102.068,22.029c0.003,0,0.005,0,0.007,0c7.532,0,15.484-0.148,23.629-0.44c88.875-3.181,121.839-30.869,123.199-32.046c1.482-1.283,1.878-3.419,0.957-5.147c-0.922-1.727-2.909-2.595-4.808-2.072c-31.301,8.546-89.748,11.58-130.288,11.58c-45.363,0-68.465-3.268-74.121-5.681c2.902-3.985,20.802-11.101,42.983-15.464c2.12-0.416,3.577-2.374,3.367-4.524s-2.016-3.79-4.177-3.79C179.439,276.584,114.234,277.628,107.418,298.236z"}),o.jsx("path",{fill:"#73A1FB",d:"M404.812,269.718c-18.331,0-35.714,9.188-36.446,9.577c-1.695,0.908-2.555,2.852-2.09,4.72c0.467,1.865,2.144,3.176,4.067,3.178c0.389,0,39.102,0.317,42.608,22.436c3.106,19.082-36.629,50-52.202,60.304c-1.682,1.113-2.335,3.263-1.554,5.123c0.665,1.583,2.206,2.573,3.868,2.573c0.29,0,0.584-0.03,0.876-0.092c3.696-0.791,90.406-19.899,81.238-70.384C439.584,276.213,420.138,269.718,404.812,269.718z"}),o.jsx("path",{fill:"#73A1FB",d:"M345.347,363.755c0.302-1.617-0.371-3.262-1.717-4.207l-20.791-14.563c-1.014-0.71-2.295-0.933-3.485-0.618c-0.217,0.055-21.959,5.771-53.525,9.276c-12.528,1.405-26.56,2.147-40.582,2.147c-31.558,0-52.192-3.708-55.197-6.428c-0.398-0.764-0.272-1.111-0.201-1.304c0.546-1.518,3.472-3.322,5.358-4.036c2.083-0.771,3.206-3.033,2.558-5.157c-0.646-2.127-2.837-3.378-4.999-2.859c-20.856,5.033-31.054,12.071-30.312,20.918c1.318,15.686,37.65,23.737,68.365,25.865c4.417,0.302,9.194,0.455,14.195,0.455c0.003,0,0.005,0,0.008,0c51.074,0,116.55-16.025,117.204-16.188C343.825,366.666,345.044,365.375,345.347,363.755z"}),o.jsx("path",{fill:"#73A1FB",d:"M188.602,397.419c1.575-1.024,2.273-2.971,1.714-4.764c-0.557-1.793-2.234-2.971-4.118-2.946c-2.795,0.074-27.349,1.182-29.068,16.815c-0.52,4.672,0.818,8.941,3.979,12.686c8.816,10.448,32.614,16.658,72.741,18.984c4.747,0.285,9.569,0.428,14.334,0.428c51.015,0,85.373-15.973,86.812-16.653c1.395-0.66,2.315-2.031,2.397-3.571s-0.687-3.001-2.003-3.806l-26.275-16.04c-0.912-0.556-2.003-0.74-3.043-0.527c-0.166,0.035-16.849,3.495-42.026,6.913c-4.764,0.648-10.73,0.977-17.73,0.977c-25.15,0-53.124-4.109-58.489-6.8C187.749,398.613,187.848,397.975,188.602,397.419z"}),o.jsx("path",{fill:"#73A1FB",d:"M224.408,486.85c116.854-0.099,179.571-20.88,191.653-33.957c4.277-4.626,4.739-9.006,4.376-11.867c-0.898-7.04-7.311-11.35-8.038-11.818c-1.754-1.128-4.108-0.833-5.476,0.745c-1.365,1.578-1.397,3.884-0.027,5.461c0.737,0.948,1.163,2.535-0.992,4.692c-4.83,4.511-53.545,18.204-134.656,22.318c-11.111,0.577-22.765,0.871-34.636,0.873c-72.623,0-125.772-9.948-132.749-15.744c2.689-3.864,21.489-10.037,41.482-13.529c2.253-0.393,3.775-2.516,3.426-4.776c-0.349-2.259-2.432-3.814-4.709-3.519c-0.564,0.077-2.478,0.191-4.694,0.327c-32.988,2.014-71.109,6.503-73.098,23.5c-0.604,5.179,0.935,9.881,4.576,13.973c8.909,10.01,34.516,23.319,153.558,23.319C224.406,486.85,224.406,486.85,224.408,486.85z"}),o.jsx("path",{fill:"#73A1FB",d:"M439.013,456.578c-1.652-0.764-3.604-0.378-4.836,0.952c-0.171,0.185-17.74,18.556-70.564,29.344c-20.223,4.052-58.183,6.107-112.826,6.107c-54.745,0-106.838-2.154-107.357-2.176c-2.176-0.106-4.037,1.476-4.333,3.618c-0.297,2.14,1.083,4.158,3.184,4.658c0.542,0.128,55.135,12.918,129.779,12.918c35.801,0,70.639-2.907,103.548-8.645c61.361-10.757,65.657-41.183,65.81-42.473C441.632,459.078,440.662,457.342,439.013,456.578z"})]})]})}const rE={python:tE,javascript:aE,java:lE,cpp:iE},sE={python:{short:"Py",full:"Python"},javascript:{short:"JS",full:"JavaScript"},java:{short:"Java",full:"Java"},cpp:{short:"C++",full:"C++"}};function tf({title:s,children:d}){const{selectedLanguage:f,setSelectedLanguage:c}=Vp(),E=L.Children.toArray(d),A=E.findIndex(N=>N.props.language===f),k=A===-1?0:A,j=E[k]?.props.code??"",U=E[k]?.props.language,q=N=>{c(E[N].props.language)},z=()=>navigator.clipboard.writeText(j),b=()=>E.map((N,H)=>{const Y=rE[N.props.language],{short:X,full:W}=sE[N.props.language];return o.jsxs("button",{type:"button",role:"tab","aria-label":`${W} code`,"aria-selected":H===k,className:iu.tabButton,onClick:()=>q(H),children:[o.jsx(Y,{}),o.jsx("span",{children:X})]},H)});return o.jsxs("div",{className:iu.container,children:[o.jsx("h3",{children:s}),o.jsxs("div",{className:iu.buttonContainer,children:[o.jsx("div",{role:"tablist",className:iu.tabButtonContainer,children:b()}),o.jsx(nE,{onClick:z})]}),o.jsx("div",{role:"tabpanel",className:"tabs-content",children:o.jsx(ZT,{code:j,language:U})})]})}tf.Tab=s=>o.jsx(o.Fragment,{children:s});function vl({children:s}){return o.jsx("kbd",{className:x.kbd,"aria-hidden":"true",children:s})}function of({mode:s,onMode:d}){return o.jsx("div",{className:x.seg,role:"group","aria-label":"View","aria-keyshortcuts":"M",children:["flow","map"].map(f=>o.jsx("button",{type:"button",className:qe(x.segButton,s===f&&x.segOn),"aria-pressed":s===f,onClick:()=>d(f),children:f==="flow"?"Flow":"Map"},f))})}function Up({leaf:s}){return o.jsx("a",{className:x.docsLink,href:s.docsUrl,target:"_blank",rel:"noreferrer",children:"Read the docs for this pattern"})}const uE=new Set(Er.map(s=>s.lc));function oE(s){const d=f=>f.loose?2:uE.has(f.lc)?0:1;return[...s.problems].sort((f,c)=>d(f)-d(c))}function qp({open:s,show:d,hide:f}){return o.jsxs("span",{className:x.toggleLabel,children:[o.jsx("span",{"aria-hidden":s,className:s?x.toggleHidden:void 0,children:d}),o.jsx("span",{"aria-hidden":!s,className:s?void 0:x.toggleHidden,children:f})]})}function cE({leaf:s}){const d=oE(s);return o.jsxs("div",{className:x.commonProblems,children:[o.jsxs("h4",{children:["Common problems ",o.jsx("span",{children:"examples, not the full set"})]}),o.jsx("ul",{className:x.cpTiles,children:d.map(f=>o.jsxs("li",{className:qe(x.cpTile,f.loose&&x.cpLoose),children:[o.jsxs("span",{className:x.cpNum,children:["LC ",f.lc,f.loose&&"*"]}),o.jsx("a",{href:`https://leetcode.com/problems/${f.slug}/`,target:"_blank",rel:"noreferrer",children:f.name})]},f.lc))}),d.some(f=>f.loose)&&o.jsx("p",{className:x.commonProblemsNote,children:"* a looser fit: the pattern works, but most people reach for another one first"})]})}function fE({leaf:s}){const d=RT(s.id);return d.length===0?o.jsxs("div",{className:qe(x.templates,x.note),children:[o.jsxs("p",{children:[o.jsx("strong",{children:"No template yet"})," for this pattern variant."]}),o.jsx("p",{children:s.summary}),o.jsx(Up,{leaf:s})]}):o.jsxs("div",{className:x.templates,children:[d.map((f,c)=>o.jsx(tf,{title:f.title,children:lf.map(E=>o.jsx(tf.Tab,{language:E,code:f.code[E]},E))},`${s.id}-${c}`)),o.jsx(Up,{leaf:s})]})}function dE(s){return s.started?s.leaf?o.jsxs(o.Fragment,{children:["Run complete, ",o.jsx("b",{children:s.leaf.name})]}):o.jsxs(o.Fragment,{children:["Run paused, ",o.jsxs("b",{children:["check ",s.steps.length+1]})]}):o.jsxs(o.Fragment,{children:["No run, ",o.jsx("b",{children:"clock not started"})]})}function kE({run:s,detail:d}){return o.jsxs("header",{className:x.strip,children:[o.jsxs("p",{className:x.stripTitle,children:["Map",o.jsx("span",{className:x.stripValue,children:d})]}),o.jsxs("div",{className:x.stripEnd,children:[o.jsx("span",{className:x.mapStatus,role:"status",children:dE(s)}),o.jsx(of,{mode:s.mode,onMode:s.setMode})]})]})}const hE=100;function mE(s){const d=L.useRef(0),f=L.useRef(null),[c,E]=L.useState(0),[A,k]=L.useState(!1),j=()=>{const X=f.current===null?0:performance.now()-f.current;return d.current+X},U=X=>Math.floor(X/1e3)*1e3;L.useEffect(()=>{if(!A)return;const X=setInterval(()=>{const W=U(j());E(be=>be===W?be:W)},hE);return()=>clearInterval(X)},[A]);const q=L.useCallback(()=>{d.current=0,f.current=performance.now(),E(0),k(!0)},[]),z=L.useCallback(()=>{f.current!==null&&(d.current=j(),f.current=null),E(d.current),k(!1)},[]),b=L.useCallback(()=>{f.current===null&&(f.current=performance.now()),E(U(j())),k(!0)},[]),N=L.useCallback(()=>{d.current=0,f.current=null,E(0),k(!1)},[]),H=s-c,Y=c>=s;return{elapsedMs:c,remainingMs:H,overtimeMs:Y?c-s:0,isOvertime:Y,isRunning:A,start:q,stop:z,resume:b,reset:N}}const Hp=30,pE=10;function gE(s){return s.isContentEditable||["INPUT","TEXTAREA","SELECT","OPTION"].includes(s.tagName)?!0:s.closest('input, textarea, select, [role="listbox"], [role="combobox"]')!==null}const bE=s=>String(s).padStart(2,"0");function yl(s){const d=Math.max(0,s);return`${Math.floor(d/60)}:${bE(d%60)}`}function vE(){const s=mE(Hp*1e3),[d,f]=L.useState(!1),[c,E]=L.useState([]),[A,k]=L.useState(!1),[j,U]=L.useState(!1),[q,z]=L.useState("flow"),b=L.useRef(null),N=c.length>0?c[c.length-1].option.next:wi.rootId,H=d?wi.leaves[N]:void 0,Y=d?wi.nodes[N]:void 0;L.useEffect(()=>{b.current?.focus()},[d,N,q]);const X=L.useCallback(()=>{f(!0),s.start()},[s]),W=L.useCallback(Oe=>{Y&&(E(ye=>[...ye,{question:Y.question,option:Oe}]),wi.leaves[Oe.next]&&s.stop())},[Y,s]),be=L.useCallback(Oe=>{Oe<0||Oe>=c.length||(E(c.slice(0,Oe)),k(!1),U(!1),H&&s.resume())},[c,H,s]),fe=L.useCallback(()=>be(c.length-1),[be,c.length]),ce=L.useCallback(()=>k(Oe=>!Oe),[]),we=L.useCallback(()=>U(Oe=>!Oe),[]),He=L.useCallback(Oe=>{Oe!==q&&(z(Oe),!(!d||H)&&(Oe==="map"?s.stop():s.resume()))},[q,d,H,s]),ze=L.useCallback(()=>He(q==="flow"?"map":"flow"),[He,q]),ie=L.useCallback(()=>{s.reset(),f(!1),E([]),k(!1),U(!1)},[s]);L.useEffect(()=>{const Oe=ye=>{if(ye.metaKey||ye.ctrlKey||ye.altKey)return;const Qe=ye.target;if(!(Qe&&gE(Qe))){if(ye.key==="m"||ye.key==="M")return ye.repeat?void 0:ze();if(q==="flow"){if(ye.key==="Escape")return ie();if(ye.key==="Backspace"&&d&&c.length>0)return ye.preventDefault(),fe();if(ye.key==="Enter"&&!d&&Qe?.tagName!=="BUTTON")return X();if((ye.key==="t"||ye.key==="T")&&H)return ce();if((ye.key==="p"||ye.key==="P")&&H)return we();if(/^[1-9]$/.test(ye.key)&&Y){const sn=Y.options[Number(ye.key)-1];sn&&W(sn)}}}};return window.addEventListener("keydown",Oe),()=>window.removeEventListener("keydown",Oe)},[q,d,c.length,Y,H,W,fe,ie,X,ce,we,ze]);const he=Math.max(0,Math.ceil(s.remainingMs/1e3));return{budget:Hp,mode:q,setMode:He,toggleMode:ze,started:d,steps:c,currentId:N,node:Y,leaf:H,isOvertime:s.isOvertime,isWarn:!s.isOvertime&&he<=pE,elapsedSeconds:Math.floor(s.elapsedMs/1e3),remainingSeconds:he,overSeconds:Math.floor(s.overtimeMs/1e3),showTemplate:A,toggleTemplate:ce,showProblems:j,toggleProblems:we,stageRef:b,start:X,pick:W,backtrack:fe,backtrackTo:be,reset:ie}}const yE=L.lazy(()=>wr(()=>import("./MapView-Cdwd6iiR.js"),__vite__mapDeps([2,3,4,5]))),_E=L.lazy(()=>wr(()=>import("./MapOutline-CCiztUrZ.js"),__vite__mapDeps([6,3,4]))),SE={maxWidth:760};function su({text:s,sign:d,tone:f,caption:c,label:E}){return o.jsxs("div",{className:qe(x.timer,x[f]),role:"timer","aria-live":"off","aria-label":E,children:[o.jsxs("span",{className:x.cells,"aria-hidden":"true",children:[o.jsx("span",{className:qe(x.cell,x.signCell),children:d?"+":""}),s.split("").map((A,k)=>A===":"?o.jsx("span",{className:x.colon,children:":"},k):o.jsx("span",{className:x.cell,children:A},k))]}),o.jsx("span",{className:x.timerCaption,"aria-hidden":"true",children:c})]})}function TE({run:s}){if(!s.started){const f=yl(s.budget);return o.jsx(su,{text:f,sign:!1,tone:"idle",caption:"budget",label:`Budget ${f}`})}if(s.leaf){const f=yl(s.elapsedSeconds);return o.jsx(su,{text:f,sign:!1,tone:s.isOvertime?"over":"ok",caption:"taken",label:`Time taken ${f}`})}if(s.isOvertime){const f=yl(s.overSeconds);return o.jsx(su,{text:f,sign:!0,tone:"over",caption:"over budget",label:`${f} over budget`})}const d=yl(s.remainingSeconds);return o.jsx(su,{text:d,sign:!1,tone:s.isWarn?"warn":"ok",caption:"left",label:`${d} left`})}function EE({run:s}){const{started:d,steps:f,leaf:c,node:E}=s,A=d&&!c&&!E,k=!c&&!A;return o.jsx("nav",{className:x.line,"aria-label":"Your path so far",children:o.jsxs("ol",{className:x.stops,children:[f.map((j,U)=>o.jsx("li",{className:qe(x.stop,x.answered),children:o.jsxs("button",{type:"button",className:x.stopButton,title:`${j.question} ${j.option.cue}`,"aria-label":`Back to question ${U+1}: ${j.question} You picked: ${j.option.cue}`,onClick:()=>s.backtrackTo(U),children:[o.jsx("span",{className:x.dot,"aria-hidden":"true"}),o.jsx("span",{className:x.cue,children:j.option.cue})]})},U)),k&&o.jsx("li",{className:qe(x.stop,x.current,x.dashedNext),"aria-current":"step",children:o.jsxs("span",{className:x.stopInner,children:[o.jsx("span",{className:x.dot,"aria-hidden":"true"}),o.jsx("span",{className:x.srOnly,children:d?`Question ${f.length+1}, current`:"Ready to start"})]})}),c&&o.jsx("li",{className:qe(x.stop,x.reached),"aria-current":"step",children:o.jsxs("span",{className:x.stopInner,children:[o.jsx("span",{className:x.dot,"aria-hidden":"true"}),o.jsxs("span",{className:x.srOnly,children:["Result: ",c.name]})]})}),k&&o.jsx("li",{className:qe(x.stop,x.end),"aria-hidden":"true",children:o.jsx("span",{className:x.stopInner,children:o.jsx("span",{className:x.dot})})}),A&&o.jsx("li",{className:qe(x.stop,x.fault),"aria-current":"step",children:o.jsxs("span",{className:x.stopInner,children:[o.jsx("span",{className:x.dot,"aria-hidden":"true"}),o.jsx("span",{className:x.srOnly,children:"This path leads nowhere"})]})})]})})}function uu({label:s,value:d,run:f}){return o.jsxs("header",{className:x.strip,children:[o.jsxs("p",{className:x.stripTitle,children:[s,o.jsx("span",{className:x.stripValue,children:d})]}),o.jsxs("div",{className:x.stripEnd,children:[o.jsx(of,{mode:f.mode,onMode:f.setMode}),o.jsx(TE,{run:f})]})]})}function ef({run:s}){return o.jsxs("footer",{className:x.footer,children:[s.started&&(s.node||s.leaf)&&o.jsxs("button",{type:"button",className:x.plain,onClick:s.backtrack,disabled:s.steps.length===0,"aria-keyshortcuts":"Backspace",children:["Backtrack ",o.jsx(vl,{children:"Bksp"})]}),o.jsxs("button",{type:"button",className:x.plain,onClick:s.reset,"aria-keyshortcuts":"Escape",children:["Reset ",o.jsx(vl,{children:"Esc"})]})]})}function wE({run:s}){return o.jsx("section",{className:qe(x.card,x.mapFallback),"aria-label":"Map","aria-busy":"true",children:o.jsxs("header",{className:x.strip,children:[o.jsxs("p",{className:x.stripTitle,children:["Map",o.jsx("span",{className:x.stripValue,children:"Loading"})]}),o.jsx("div",{className:x.stripEnd,children:o.jsx(of,{mode:s.mode,onMode:s.setMode})})]})})}function OE(){const s=vE(),d=Fp(SE),f=()=>o.jsxs(o.Fragment,{children:[o.jsx(uu,{run:s,label:"Procedure",value:"Ready"}),o.jsxs("div",{className:x.body,children:[o.jsxs("h2",{ref:s.stageRef,tabIndex:-1,className:x.question,children:["Name the pattern in ",s.budget," seconds"]}),o.jsx("p",{className:x.lead,children:"Open the problem, then pick the cue that sounds most like it. Overtime is shown, not enforced."}),o.jsx("div",{className:x.actions,children:o.jsxs("button",{type:"button",className:x.primary,onClick:s.start,"aria-keyshortcuts":"Enter",children:["Start ",o.jsx(vl,{children:"Enter"})]})})]},"idle")]}),c=j=>o.jsxs(o.Fragment,{children:[o.jsx(uu,{run:s,label:"Procedure",value:`Q${s.steps.length+1}`}),o.jsxs("div",{className:x.body,children:[o.jsx("h2",{ref:s.stageRef,tabIndex:-1,className:x.question,children:j.question}),o.jsx("ol",{className:x.options,children:j.options.map((U,q)=>o.jsx("li",{children:o.jsxs("button",{type:"button",className:x.option,onClick:()=>s.pick(U),"aria-keyshortcuts":q<9?String(q+1):void 0,children:[q<9&&o.jsx(vl,{children:q+1}),o.jsx("span",{className:x.optionCue,children:U.cue})]})},U.cue))})]},j.id),o.jsx(ef,{run:s})]}),E=j=>{const U=yl(s.elapsedSeconds);return o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:x.srOnly,role:"status","aria-live":"polite",children:["Pattern found: ",j.name,", ",j.pattern,". Time taken ",U,"."]}),o.jsx(uu,{run:s,label:"Memory item",value:"Result"}),o.jsxs("div",{className:x.body,children:[o.jsx("h2",{ref:s.stageRef,tabIndex:-1,className:x.resultName,children:j.name}),o.jsxs("dl",{className:x.fields,children:[o.jsxs("div",{className:x.field,children:[o.jsx("dt",{children:"Pattern"}),o.jsx("dd",{children:j.pattern})]}),o.jsxs("div",{className:x.field,children:[o.jsx("dt",{children:"Time taken"}),o.jsxs("dd",{children:[o.jsx("span",{className:x.figure,children:U}),s.isOvertime?o.jsxs("span",{className:x.overNote,children:["+",yl(s.overSeconds)," over the ",s.budget,"s budget"]}):o.jsxs("span",{className:x.okNote,children:["within the ",s.budget,"s budget"]})]})]})]}),o.jsx("p",{className:x.summary,children:j.summary}),o.jsxs("div",{className:qe(x.actions,x.actionsPair),children:[o.jsxs("button",{type:"button",className:x.primary,"aria-expanded":s.showTemplate,"aria-keyshortcuts":"T",onClick:s.toggleTemplate,children:[o.jsx(qp,{open:s.showTemplate,show:"View template",hide:"Hide template"})," ",o.jsx(vl,{children:"T"})]}),o.jsxs("button",{type:"button",className:x.primary,"aria-expanded":s.showProblems,"aria-keyshortcuts":"P",onClick:s.toggleProblems,children:[o.jsx(qp,{open:s.showProblems,show:"View problems",hide:"Hide problems"})," ",o.jsx(vl,{children:"P"})]})]}),s.showTemplate&&o.jsx(fE,{leaf:j}),s.showProblems&&o.jsx(cE,{leaf:j})]},j.id),o.jsx(ef,{run:s})]})},A=()=>o.jsxs(o.Fragment,{children:[o.jsx(uu,{run:s,label:"Procedure",value:"Fault"}),o.jsxs("div",{className:x.body,children:[o.jsx("h2",{ref:s.stageRef,tabIndex:-1,className:x.question,children:"This path leads nowhere"}),o.jsx("p",{className:x.lead,children:"The cue you picked has no next check. Reset and run the procedure again."})]},"broken"),o.jsx(ef,{run:s})]});let k;return s.started?s.leaf?k=E(s.leaf):s.node?k=c(s.node):k=A():k=f(),s.mode==="map"?o.jsx("div",{className:qe(x.finder,x.mapMode),children:o.jsx(L.Suspense,{fallback:o.jsx(wE,{run:s}),children:d?o.jsx(_E,{run:s}):o.jsx(yE,{run:s})})}):o.jsxs("div",{className:x.finder,children:[d?o.jsx(EE,{run:s}):o.jsx(sS,{run:s}),o.jsx("section",{className:x.card,"aria-label":"Procedure",children:k})]})}const NE="1234567890",Yp=s=>{const d=`#${Ei(s)}`;window.location.hash!==d&&(window.history.replaceState({},"",d),window.dispatchEvent(new Event(cu)))};function xE(){const s=d=>{Yp(d),du(`#${Ei(d)}`,sf()-2)};return L.useEffect(()=>{const d=new Set,f=new IntersectionObserver(c=>{for(const A of c){const k=A.target.id.replace("pareto-","");A.isIntersecting?d.add(k):d.delete(k)}const E=Fa.find(A=>d.has(A.id));E&&Yp(E.id)},{rootMargin:"-25% 0px -65% 0px"});return Fa.forEach(c=>{const E=document.getElementById(Ei(c.id));E&&f.observe(E)}),()=>f.disconnect()},[]),L.useEffect(()=>{const d=f=>{const c=f.target;if(c.closest("input, textarea, select, [contenteditable]")||f.metaKey||f.ctrlKey||f.altKey)return;const E=NE.indexOf(f.key);E>=0&&E<Fa.length&&(c.closest("#sidebar-sections")&&c.blur(),s(Fa[E].id))};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[]),o.jsx("div",{className:tn.root,children:o.jsxs("div",{className:tn.a,children:[o.jsxs("header",{className:tn.aHead,children:[o.jsx("h2",{className:tn.h2,children:"The Pareto Set"}),o.jsx("p",{className:tn.lede,children:gy}),o.jsx("p",{className:tn.origin,children:by}),o.jsxs("dl",{className:tn.aStats,children:[o.jsxs("div",{children:[o.jsx("dt",{children:"Problems"}),o.jsx("dd",{children:au.total})]}),o.jsxs("div",{children:[o.jsx("dt",{children:"Patterns"}),o.jsx("dd",{children:au.patterns})]}),o.jsxs("div",{children:[o.jsx("dt",{children:"Easy"}),o.jsx("dd",{children:au.easy})]}),o.jsxs("div",{children:[o.jsx("dt",{children:"Medium"}),o.jsx("dd",{children:au.medium})]})]})]}),Fa.map(d=>o.jsxs("section",{id:Ei(d.id),className:tn.aSection,"aria-labelledby":`${Ei(d.id)}-h`,children:[o.jsxs("div",{className:tn.aStrip,children:[o.jsx("h3",{id:`${Ei(d.id)}-h`,className:tn.h3,children:d.name}),o.jsx("p",{children:d.why}),o.jsxs("span",{className:tn.aCount,children:[d.problems.length," problems"]})]}),o.jsx("ol",{className:tn.aRows,children:d.problems.map(f=>o.jsxs("li",{className:tn.aRow,children:[o.jsx("span",{className:tn.aNum,children:f.n}),o.jsxs("span",{className:tn.aText,children:[o.jsxs("a",{href:qv(f.slug),target:"_blank",rel:"noopener noreferrer",className:tn.aLink,children:[f.name,o.jsx("span",{className:tn.srOnly,children:" on LeetCode (opens in a new tab)"})]}),o.jsx("span",{className:tn.aMove,children:f.ask})]}),o.jsxs("span",{className:tn.aLc,children:["LC ",f.lc]}),o.jsx(_y,{d:f.difficulty}),o.jsx(vy,{})]},f.slug))})]},d.id))]})})}const AE=L.lazy(()=>wr(()=>import("./Cheatsheet-Csk_kOkX.js"),__vite__mapDeps([7,8])));function ME(){const{isSidebarOpen:s}=rf(),{view:d}=fu(),f=qe(Dp.main,(!s||d==="finder")&&Dp.sidebarHidden);return o.jsx("main",{className:f,children:d==="finder"?o.jsx(OE,{}):d==="pareto"?o.jsx(xE,{}):o.jsx(L.Suspense,{fallback:null,children:o.jsx(AE,{})})})}function CE(){return o.jsx(ou.StrictMode,{children:o.jsx(X0,{children:o.jsx(Q0,{children:o.jsx(Z0,{children:o.jsxs("div",{className:"App",children:[o.jsx(wy,{}),o.jsx(ME,{})]})})})})})}V0.createRoot(document.getElementById("root")).render(o.jsx(CE,{}));export{bT as $,B3 as A,L3 as B,U3 as C,q3 as D,Y3 as E,w3 as F,G3 as G,K3 as H,aT as I,iT as J,lT as K,W3 as L,tT as M,$3 as N,eT as O,V3 as P,nT as Q,H3 as R,Z3 as S,tf as T,vT as U,yT as V,_T as W,ST as X,mT as Y,pT as Z,gT as _,TT as a,fS as a$,cT as a0,fT as a1,dT as a2,hT as a3,i3 as a4,l3 as a5,r3 as a6,s3 as a7,e3 as a8,n3 as a9,k3 as aA,D3 as aB,j3 as aC,z3 as aD,dS as aE,hS as aF,mS as aG,pS as aH,wS as aI,OS as aJ,NS as aK,xS as aL,AS as aM,MS as aN,CS as aO,RS as aP,_S as aQ,SS as aR,TS as aS,ES as aT,gS as aU,bS as aV,vS as aW,yS as aX,uS as aY,oS as aZ,cS as a_,t3 as aa,a3 as ab,F2 as ac,P2 as ad,W2 as ae,$2 as af,u3 as ag,o3 as ah,c3 as ai,f3 as aj,Q2 as ak,X2 as al,Z2 as am,J2 as an,d3 as ao,h3 as ap,m3 as aq,p3 as ar,g3 as as,b3 as at,v3 as au,y3 as av,_3 as aw,S3 as ax,T3 as ay,E3 as az,ET as b,I2 as b$,N2 as b0,x2 as b1,A2 as b2,M2 as b3,v2 as b4,y2 as b5,_2 as b6,S2 as b7,T2 as b8,E2 as b9,WS as bA,$S as bB,e2 as bC,n2 as bD,VS as bE,IS as bF,QS as bG,XS as bH,kS as bI,DS as bJ,jS as bK,zS as bL,r2 as bM,s2 as bN,u2 as bO,o2 as bP,C2 as bQ,R2 as bR,k2 as bS,D2 as bT,U2 as bU,q2 as bV,H2 as bW,Y2 as bX,G2 as bY,K2 as bZ,V2 as b_,w2 as ba,O2 as bb,c2 as bc,f2 as bd,d2 as be,h2 as bf,t2 as bg,a2 as bh,i2 as bi,l2 as bj,BS as bk,LS as bl,US as bm,qS as bn,m2 as bo,p2 as bp,g2 as bq,b2 as br,ZS as bs,JS as bt,FS as bu,PS as bv,HS as bw,YS as bx,GS as by,KS as bz,wT as c,j2 as c0,z2 as c1,B2 as c2,L2 as c3,wi as c4,af as c5,ou as c6,L as c7,qe as c8,kE as c9,vl as ca,RT as cb,fE as cc,OT as d,NT as e,xT as f,AT as g,MT as h,J3 as i,o as j,F3 as k,P3 as l,I3 as m,Q3 as n,X3 as o,rT as p,sT as q,uT as r,oT as s,O3 as t,N3 as u,x3 as v,A3 as w,M3 as x,C3 as y,R3 as z};
