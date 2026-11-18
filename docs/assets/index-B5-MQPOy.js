const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MapView-BYikLzYS.js","assets/path-CxKWRv3q.js","assets/path-aq5Hpam3.css","assets/MapView-acdOEaeK.css","assets/MapOutline-Ds0-FuuX.js"])))=>i.map(i=>d[i]);
(function(){const g=document.createElement("link").relList;if(g&&g.supports&&g.supports("modulepreload"))return;for(const E of document.querySelectorAll('link[rel="modulepreload"]'))d(E);new MutationObserver(E=>{for(const R of E)if(R.type==="childList")for(const C of R.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&d(C)}).observe(document,{childList:!0,subtree:!0});function h(E){const R={};return E.integrity&&(R.integrity=E.integrity),E.referrerPolicy&&(R.referrerPolicy=E.referrerPolicy),E.crossOrigin==="use-credentials"?R.credentials="include":E.crossOrigin==="anonymous"?R.credentials="omit":R.credentials="same-origin",R}function d(E){if(E.ep)return;E.ep=!0;const R=h(E);fetch(E.href,R)}})();function br(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var zu={exports:{}},bl={};var lp;function Fy(){if(lp)return bl;lp=1;var o=Symbol.for("react.transitional.element"),g=Symbol.for("react.fragment");function h(d,E,R){var C=null;if(R!==void 0&&(C=""+R),E.key!==void 0&&(C=""+E.key),"key"in E){R={};for(var z in E)z!=="key"&&(R[z]=E[z])}else R=E;return E=R.ref,{$$typeof:o,type:d,key:C,ref:E!==void 0?E:null,props:R}}return bl.Fragment=g,bl.jsx=h,bl.jsxs=h,bl}var sp;function Py(){return sp||(sp=1,zu.exports=Fy()),zu.exports}var r=Py(),Du={exports:{}},yl={},Lu={exports:{}},Bu={};var op;function Wy(){return op||(op=1,(function(o){function g(Y,cn){var P=Y.length;Y.push(cn);n:for(;0<P;){var kn=P-1>>>1,Sn=Y[kn];if(0<E(Sn,cn))Y[kn]=cn,Y[P]=Sn,P=kn;else break n}}function h(Y){return Y.length===0?null:Y[0]}function d(Y){if(Y.length===0)return null;var cn=Y[0],P=Y.pop();if(P!==cn){Y[0]=P;n:for(var kn=0,Sn=Y.length,se=Sn>>>1;kn<se;){var me=2*(kn+1)-1,ct=Y[me],y=me+1,L=Y[y];if(0>E(ct,P))y<Sn&&0>E(L,ct)?(Y[kn]=L,Y[y]=P,kn=y):(Y[kn]=ct,Y[me]=P,kn=me);else if(y<Sn&&0>E(L,P))Y[kn]=L,Y[y]=P,kn=y;else break n}}return cn}function E(Y,cn){var P=Y.sortIndex-cn.sortIndex;return P!==0?P:Y.id-cn.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var R=performance;o.unstable_now=function(){return R.now()}}else{var C=Date,z=C.now();o.unstable_now=function(){return C.now()-z}}var H=[],G=[],D=1,b=null,N=3,V=!1,q=!1,J=!1,en=!1,_n=typeof setTimeout=="function"?setTimeout:null,gn=typeof clearTimeout=="function"?clearTimeout:null,hn=typeof setImmediate<"u"?setImmediate:null;function En(Y){for(var cn=h(G);cn!==null;){if(cn.callback===null)d(G);else if(cn.startTime<=Y)d(G),cn.sortIndex=cn.expirationTime,g(H,cn);else break;cn=h(G)}}function Kn(Y){if(J=!1,En(Y),!q)if(h(H)!==null)q=!0,vn||(vn=!0,pe());else{var cn=h(G);cn!==null&&oe(Kn,cn.startTime-Y)}}var vn=!1,Z=-1,pn=5,ae=-1;function ue(){return en?!0:!(o.unstable_now()-ae<pn)}function le(){if(en=!1,vn){var Y=o.unstable_now();ae=Y;var cn=!0;try{n:{q=!1,J&&(J=!1,gn(Z),Z=-1),V=!0;var P=N;try{e:{for(En(Y),b=h(H);b!==null&&!(b.expirationTime>Y&&ue());){var kn=b.callback;if(typeof kn=="function"){b.callback=null,N=b.priorityLevel;var Sn=kn(b.expirationTime<=Y);if(Y=o.unstable_now(),typeof Sn=="function"){b.callback=Sn,En(Y),cn=!0;break e}b===h(H)&&d(H),En(Y)}else d(H);b=h(H)}if(b!==null)cn=!0;else{var se=h(G);se!==null&&oe(Kn,se.startTime-Y),cn=!1}}break n}finally{b=null,N=P,V=!1}cn=void 0}}finally{cn?pe():vn=!1}}}var pe;if(typeof hn=="function")pe=function(){hn(le)};else if(typeof MessageChannel<"u"){var Ke=new MessageChannel,Ee=Ke.port2;Ke.port1.onmessage=le,pe=function(){Ee.postMessage(null)}}else pe=function(){_n(le,0)};function oe(Y,cn){Z=_n(function(){Y(o.unstable_now())},cn)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(Y){Y.callback=null},o.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):pn=0<Y?Math.floor(1e3/Y):5},o.unstable_getCurrentPriorityLevel=function(){return N},o.unstable_next=function(Y){switch(N){case 1:case 2:case 3:var cn=3;break;default:cn=N}var P=N;N=cn;try{return Y()}finally{N=P}},o.unstable_requestPaint=function(){en=!0},o.unstable_runWithPriority=function(Y,cn){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var P=N;N=Y;try{return cn()}finally{N=P}},o.unstable_scheduleCallback=function(Y,cn,P){var kn=o.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?kn+P:kn):P=kn,Y){case 1:var Sn=-1;break;case 2:Sn=250;break;case 5:Sn=1073741823;break;case 4:Sn=1e4;break;default:Sn=5e3}return Sn=P+Sn,Y={id:D++,callback:cn,priorityLevel:Y,startTime:P,expirationTime:Sn,sortIndex:-1},P>kn?(Y.sortIndex=P,g(G,Y),h(H)===null&&Y===h(G)&&(J?(gn(Z),Z=-1):J=!0,oe(Kn,P-kn))):(Y.sortIndex=Sn,g(H,Y),q||V||(q=!0,vn||(vn=!0,pe()))),Y},o.unstable_shouldYield=ue,o.unstable_wrapCallback=function(Y){var cn=N;return function(){var P=N;N=cn;try{return Y.apply(this,arguments)}finally{N=P}}}})(Bu)),Bu}var cp;function $y(){return cp||(cp=1,Lu.exports=Wy()),Lu.exports}var Uu={exports:{}},yn={};var up;function nx(){if(up)return yn;up=1;var o=Symbol.for("react.transitional.element"),g=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),C=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),G=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),N=Symbol.for("react.view_transition"),V=Symbol.iterator;function q(y){return y===null||typeof y!="object"?null:(y=V&&y[V]||y["@@iterator"],typeof y=="function"?y:null)}var J={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},en=Object.assign,_n={};function gn(y,L,sn){this.props=y,this.context=L,this.refs=_n,this.updater=sn||J}gn.prototype.isReactComponent={},gn.prototype.setState=function(y,L){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,L,"setState")},gn.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function hn(){}hn.prototype=gn.prototype;function En(y,L,sn){this.props=y,this.context=L,this.refs=_n,this.updater=sn||J}var Kn=En.prototype=new hn;Kn.constructor=En,en(Kn,gn.prototype),Kn.isPureReactComponent=!0;var vn=Array.isArray;function Z(){}var pn={H:null,A:null,T:null,S:null},ae=Object.prototype.hasOwnProperty;function ue(y,L,sn){var W=sn.ref;return{$$typeof:o,type:y,key:L,ref:W!==void 0?W:null,props:sn}}function le(y,L){return ue(y.type,L,y.props)}function pe(y){return typeof y=="object"&&y!==null&&y.$$typeof===o}function Ke(y){var L={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(sn){return L[sn]})}var Ee=/\/+/g;function oe(y,L){return typeof y=="object"&&y!==null&&y.key!=null?Ke(""+y.key):L.toString(36)}function Y(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(Z,Z):(y.status="pending",y.then(function(L){y.status==="pending"&&(y.status="fulfilled",y.value=L)},function(L){y.status==="pending"&&(y.status="rejected",y.reason=L)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function cn(y,L,sn,W,un){var Cn=typeof y;(Cn==="undefined"||Cn==="boolean")&&(y=null);var On=!1;if(y===null)On=!0;else switch(Cn){case"bigint":case"string":case"number":On=!0;break;case"object":switch(y.$$typeof){case o:case g:On=!0;break;case D:return On=y._init,cn(On(y._payload),L,sn,W,un)}}if(On)return un=un(y),On=W===""?"."+oe(y,0):W,vn(un)?(sn="",On!=null&&(sn=On.replace(Ee,"$&/")+"/"),cn(un,L,sn,"",function($e){return $e})):un!=null&&(pe(un)&&(un=le(un,sn+(un.key==null||y&&y.key===un.key?"":(""+un.key).replace(Ee,"$&/")+"/")+On)),L.push(un)),1;On=0;var tn=W===""?".":W+":";if(vn(y))for(var dn=0;dn<y.length;dn++)W=y[dn],Cn=tn+oe(W,dn),On+=cn(W,L,sn,Cn,un);else if(dn=q(y),typeof dn=="function")for(y=dn.call(y),dn=0;!(W=y.next()).done;)W=W.value,Cn=tn+oe(W,dn++),On+=cn(W,L,sn,Cn,un);else if(Cn==="object"){if(typeof y.then=="function")return cn(Y(y),L,sn,W,un);throw L=String(y),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return On}function P(y,L,sn){if(y==null)return y;var W=[],un=0;return cn(y,W,"","",function(Cn){return L.call(sn,Cn,un++)}),W}function kn(y){if(y._status===-1){var L=y._result,sn=L();sn.then(function(W){(y._status===0||y._status===-1)&&(y._status=1,y._result=W,sn.status===void 0&&(sn.status="fulfilled",sn.value=W))},function(W){(y._status===0||y._status===-1)&&(y._status=2,y._result=W,sn.status===void 0&&(sn.status="rejected",sn.reason=W))}),y._status===-1&&(y._status=0,y._result=sn)}if(y._status===1)return y._result.default;throw y._result}var Sn=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)};function se(y){var L=pn.T,sn={};sn.types=L!==null?L.types:null,pn.T=sn;try{var W=y(),un=pn.S;un!==null&&un(sn,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(Z,Sn)}catch(Cn){Sn(Cn)}finally{L!==null&&sn.types!==null&&(L.types=sn.types),pn.T=L}}function me(y){var L=pn.T;if(L!==null){var sn=L.types;sn===null?L.types=[y]:sn.indexOf(y)===-1&&sn.push(y)}else se(me.bind(null,y))}var ct={map:P,forEach:function(y,L,sn){P(y,function(){L.apply(this,arguments)},sn)},count:function(y){var L=0;return P(y,function(){L++}),L},toArray:function(y){return P(y,function(L){return L})||[]},only:function(y){if(!pe(y))throw Error("React.Children.only expected to receive a single React element child.");return y}};return yn.Activity=b,yn.Children=ct,yn.Component=gn,yn.Fragment=h,yn.Profiler=E,yn.PureComponent=En,yn.StrictMode=d,yn.Suspense=H,yn.ViewTransition=N,yn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=pn,yn.__COMPILER_RUNTIME={__proto__:null,c:function(y){return pn.H.useMemoCache(y)}},yn.addTransitionType=me,yn.cache=function(y){return function(){return y.apply(null,arguments)}},yn.cacheSignal=function(){return null},yn.cloneElement=function(y,L,sn){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var W=en({},y.props),un=y.key;if(L!=null)for(Cn in L.key!==void 0&&(un=""+L.key),L)!ae.call(L,Cn)||Cn==="key"||Cn==="__self"||Cn==="__source"||Cn==="ref"&&L.ref===void 0||(W[Cn]=L[Cn]);var Cn=arguments.length-2;if(Cn===1)W.children=sn;else if(1<Cn){for(var On=Array(Cn),tn=0;tn<Cn;tn++)On[tn]=arguments[tn+2];W.children=On}return ue(y.type,un,W)},yn.createContext=function(y){return y={$$typeof:C,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:R,_context:y},y},yn.createElement=function(y,L,sn){var W,un={},Cn=null;if(L!=null)for(W in L.key!==void 0&&(Cn=""+L.key),L)ae.call(L,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(un[W]=L[W]);var On=arguments.length-2;if(On===1)un.children=sn;else if(1<On){for(var tn=Array(On),dn=0;dn<On;dn++)tn[dn]=arguments[dn+2];un.children=tn}if(y&&y.defaultProps)for(W in On=y.defaultProps,On)un[W]===void 0&&(un[W]=On[W]);return ue(y,Cn,un)},yn.createRef=function(){return{current:null}},yn.forwardRef=function(y){return{$$typeof:z,render:y}},yn.isValidElement=pe,yn.lazy=function(y){return{$$typeof:D,_payload:{_status:-1,_result:y},_init:kn}},yn.memo=function(y,L){return{$$typeof:G,type:y,compare:L===void 0?null:L}},yn.startTransition=se,yn.unstable_useCacheRefresh=function(){return pn.H.useCacheRefresh()},yn.use=function(y){return pn.H.use(y)},yn.useActionState=function(y,L,sn){return pn.H.useActionState(y,L,sn)},yn.useCallback=function(y,L){return pn.H.useCallback(y,L)},yn.useContext=function(y){return pn.H.useContext(y)},yn.useDebugValue=function(){},yn.useDeferredValue=function(y,L){return pn.H.useDeferredValue(y,L)},yn.useEffect=function(y,L){return pn.H.useEffect(y,L)},yn.useEffectEvent=function(y){return pn.H.useEffectEvent(y)},yn.useId=function(){return pn.H.useId()},yn.useImperativeHandle=function(y,L,sn){return pn.H.useImperativeHandle(y,L,sn)},yn.useInsertionEffect=function(y,L){return pn.H.useInsertionEffect(y,L)},yn.useLayoutEffect=function(y,L){return pn.H.useLayoutEffect(y,L)},yn.useMemo=function(y,L){return pn.H.useMemo(y,L)},yn.useOptimistic=function(y,L){return pn.H.useOptimistic(y,L)},yn.useReducer=function(y,L,sn){return pn.H.useReducer(y,L,sn)},yn.useRef=function(y){return pn.H.useRef(y)},yn.useState=function(y){return pn.H.useState(y)},yn.useSyncExternalStore=function(y,L,sn){return pn.H.useSyncExternalStore(y,L,sn)},yn.useTransition=function(){return pn.H.useTransition()},yn.version="19.3.1",yn}var dp;function Wu(){return dp||(dp=1,Uu.exports=nx()),Uu.exports}var Hu={exports:{}},Ve={};var fp;function ex(){if(fp)return Ve;fp=1;var o=Wu();function g(D){var b="https://react.dev/errors/"+D;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)b+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+D+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(){}var d={d:{f:h,r:function(){throw Error(g(522))},D:h,C:h,L:h,m:h,X:h,S:h,M:h},p:0,findDOMNode:null},E=Symbol.for("react.portal"),R=Symbol.for("react.recoverable"),C=Symbol.for("react.optimistic_key");function z(D,b,N){var V=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:E,key:V==null?null:V===C?C:""+V,children:D,containerInfo:b,implementation:N}}var H=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function G(D,b){if(D==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return Ve.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Ve.browser=function(D){return{$$typeof:R,_reason:D}},Ve.createPortal=function(D,b){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(g(299));return z(D,b,null,N)},Ve.flushSync=function(D){var b=H.T,N=d.p;try{if(H.T=null,d.p=2,D)return D()}finally{H.T=b,d.p=N,d.d.f()}},Ve.preconnect=function(D,b){typeof D=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,d.d.C(D,b))},Ve.prefetchDNS=function(D){typeof D=="string"&&d.d.D(D)},Ve.preinit=function(D,b){if(typeof D=="string"&&b&&typeof b.as=="string"){var N=b.as,V=G(N,b.crossOrigin),q=typeof b.integrity=="string"?b.integrity:void 0,J=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;N==="style"?d.d.S(D,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:V,integrity:q,fetchPriority:J}):N==="script"&&d.d.X(D,{crossOrigin:V,integrity:q,fetchPriority:J,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},Ve.preinitModule=function(D,b){if(typeof D=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var N=G(b.as,b.crossOrigin);d.d.M(D,{crossOrigin:N,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0})}}else b==null&&d.d.M(D)},Ve.preload=function(D,b){if(typeof D=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var N=b.as,V=G(N,b.crossOrigin);d.d.L(D,N,{crossOrigin:V,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},Ve.preloadModule=function(D,b){if(typeof D=="string")if(b){var N=G(b.as,b.crossOrigin);d.d.m(D,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:N,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0})}else d.d.m(D)},Ve.requestFormReset=function(D){d.d.r(D)},Ve.unstable_batchedUpdates=function(D,b){return D(b)},Ve.useFormState=function(D,b,N){return H.H.useFormState(D,b,N)},Ve.useFormStatus=function(){return H.H.useHostTransitionStatus()},Ve.version="19.3.1",Ve}var hp;function zp(){if(hp)return Hu.exports;hp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(g){console.error(g)}}return o(),Hu.exports=ex(),Hu.exports}var gp;function tx(){if(gp)return yl;gp=1;var o=$y(),g=Wu(),h=zp();function d(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function E(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function R(n){for(var e=n,t=e;t&&!t.alternate;)e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;for(;e.return;)e=e.return;return e.tag===3?n:null}function C(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function z(n){if(n.tag===31){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function H(n){if(R(n)!==n)throw Error(d(188))}function G(n){var e=n.alternate;if(!e){if(e=R(n),e===null)throw Error(d(188));return e!==n?null:n}for(var t=n,a=e;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(a=i.return,a!==null){t=a;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return H(i),n;if(l===a)return H(i),e;l=l.sibling}throw Error(d(188))}if(t.return!==a.return)t=i,a=l;else{for(var s=!1,c=i.child;c;){if(c===t){s=!0,t=i,a=l;break}if(c===a){s=!0,a=i,t=l;break}c=c.sibling}if(!s){for(c=l.child;c;){if(c===t){s=!0,t=l,a=i;break}if(c===a){s=!0,a=l,t=i;break}c=c.sibling}if(!s)throw Error(d(189))}}if(t.alternate!==a)throw Error(d(190))}if(t.tag!==3)throw Error(d(188));return t.stateNode.current===t?n:e}function D(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n;for(n=n.child;n!==null;){if(e=D(n),e!==null)return e;n=n.sibling}return null}function b(n,e,t,a,i,l){for(;n!==null;){if((n.tag===5||n.tag===27||n.tag===6)&&t(n,a,i,l)||(n.tag!==22||n.memoizedState===null)&&(e||n.tag!==5&&n.tag!==27)&&b(n.child,e,t,a,i,l))return!0;n=n.sibling}return!1}function N(n){for(n=n.return;n!==null;){if(n.tag===3||n.tag===5||n.tag===27)return n;n=n.return}return null}function V(n){var e=!1;for(n=n.return;n!==null&&(n.tag===4&&(e=!0),!(n.tag===3||n.tag===5||n.tag===27));)n=n.return;return e}function q(n){var e=[null,null],t=N(n);return t===null||J(e,n,t.child,{foundSelf:!1}),e}function J(n,e,t,a){for(;t!==null;){if(t===e)a.foundSelf=!0;else if(t.tag===5||t.tag===27||t.tag===6){if(a.foundSelf)return n[1]=t,!0;n[0]=t}else if((t.tag!==22||t.memoizedState===null)&&J(n,e,t.child,a))return!0;t=t.sibling}return!1}function en(n){switch(n.tag){case 5:case 27:case 6:return n.stateNode;case 3:return n.stateNode.containerInfo;default:throw Error(d(559))}}var _n=null,gn=null;function hn(n,e,t){return n===t?!0:n===e?(_n=n,!0):!1}function En(n,e,t){return n===t?(gn=n,!1):n===e?(gn!==null&&(_n=n),!0):!1}function Kn(n){if(n===null)return null;do n=n===null?null:n.return;while(n&&n.tag!==5&&n.tag!==27&&n.tag!==3);return n||null}function vn(n,e,t){for(var a=0,i=n;i;i=t(i))a++;i=0;for(var l=e;l;l=t(l))i++;for(;0<a-i;)n=t(n),a--;for(;0<i-a;)e=t(e),i--;for(;a--;){if(n===e||e!==null&&n===e.alternate)return n;n=t(n),e=t(e)}return null}var Z=Object.assign,pn=Symbol.for("react.element"),ae=Symbol.for("react.transitional.element"),ue=Symbol.for("react.portal"),le=Symbol.for("react.fragment"),pe=Symbol.for("react.strict_mode"),Ke=Symbol.for("react.profiler"),Ee=Symbol.for("react.consumer"),oe=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),cn=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),kn=Symbol.for("react.memo"),Sn=Symbol.for("react.lazy"),se=Symbol.for("react.activity"),me=Symbol.for("react.legacy_hidden"),ct=Symbol.for("react.memo_cache_sentinel"),y=Symbol.for("react.view_transition"),L=Symbol.for("react.recoverable"),sn=Symbol.iterator;function W(n){return n===null||typeof n!="object"?null:(n=sn&&n[sn]||n["@@iterator"],typeof n=="function"?n:null)}var un=Symbol.for("react.client.reference");function Cn(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===un?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case le:return"Fragment";case Ke:return"Profiler";case pe:return"StrictMode";case cn:return"Suspense";case P:return"SuspenseList";case se:return"Activity";case y:return"ViewTransition"}if(typeof n=="object")switch(n.$$typeof){case ue:return"Portal";case oe:return n.displayName||"Context";case Ee:return(n._context.displayName||"Context")+".Consumer";case Y:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case kn:return e=n.displayName||null,e!==null?e:Cn(n.type)||"Memo";case Sn:e=n._payload,n=n._init;try{return Cn(n(e))}catch{}}return null}var On=Array.isArray,tn=g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,dn=h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$e={pending:!1,data:null,method:null,action:null},Wa=[],ba=-1;function bt(n){return{current:n}}function Oe(n){0>ba||(n.current=Wa[ba],Wa[ba]=null,ba--)}function Pn(n,e){ba++,Wa[ba]=n.current,n.current=e}var yt=bt(null),ya=bt(null),Ht=bt(null),ji=bt(null);function $a(n,e){switch(Pn(Ht,e),Pn(ya,n),Pn(yt,null),e.nodeType){case 9:case 11:n=(n=e.documentElement)&&(n=n.namespaceURI)?pg(n):0;break;default:if(n=e.tagName,e=e.namespaceURI)e=pg(e),n=mg(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Oe(yt),Pn(yt,n)}function nt(){Oe(yt),Oe(ya),Oe(Ht)}function Ni(n){var e=n.memoizedState;e!==null&&(fr._currentValue=e.memoizedState,Pn(ji,n)),e=yt.current;var t=mg(e,n.type);e!==t&&(Pn(ya,n),Pn(yt,t))}function kt(n){ya.current===n&&(Oe(yt),Oe(ya)),ji.current===n&&(Oe(ji),fr._currentValue=$e)}var xa,yr;function qt(n){if(xa===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);xa=e&&e[1]||"",yr=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xa+n+yr}var xr=!1;function _r(n,e){if(!n||xr)return"";xr=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(I){var x=I}Reflect.construct(n,[],k)}else{try{k.call()}catch(I){x=I}k=!1;try{var j=Object.getOwnPropertyDescriptor(n.prototype,"props");Object.defineProperty(n.prototype,"props",{configurable:!0,set:function(){throw Error()}}),k=!0,new n}finally{k&&(j!==void 0?Object.defineProperty(n.prototype,"props",j):delete n.prototype.props)}}}else{try{throw Error()}catch(I){x=I}(k=n())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(I){if(I&&x&&typeof I.stack=="string")return[I.stack,x.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=a.DetermineComponentFrameRoot(),s=l[0],c=l[1];if(s&&c){var f=s.split(`
`),T=c.split(`
`);for(i=a=0;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;for(;i<T.length&&!T[i].includes("DetermineComponentFrameRoot");)i++;if(a===f.length||i===T.length)for(a=f.length-1,i=T.length-1;1<=a&&0<=i&&f[a]!==T[i];)i--;for(;1<=a&&0<=i;a--,i--)if(f[a]!==T[i]){if(a!==1||i!==1)do if(a--,i--,0>i||f[a]!==T[i]){var w=`
`+f[a].replace(" at new "," at ");return n.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",n.displayName)),w}while(1<=a&&0<=i);break}}}finally{xr=!1,Error.prepareStackTrace=t}return(t=n?n.displayName||n.name:"")?qt(t):""}function oo(n,e){switch(n.tag){case 26:case 27:case 5:return qt(n.type);case 16:return qt("Lazy");case 13:return n.child!==e&&e!==null?qt("Suspense Fallback"):qt("Suspense");case 19:return qt("SuspenseList");case 0:case 15:return _r(n.type,!1);case 11:return _r(n.type.render,!1);case 1:return _r(n.type,!0);case 31:return qt("Activity");case 30:return qt("ViewTransition");default:return""}}function Sl(n){try{var e="",t=null;do e+=oo(n,t),t=n,n=n.return;while(n);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var wi=Object.prototype.hasOwnProperty,Tr=o.unstable_scheduleCallback,Sr=o.unstable_cancelCallback,co=o.unstable_shouldYield,jr=o.unstable_requestPaint,Ie=o.unstable_now,jl=o.unstable_getCurrentPriorityLevel,Nl=o.unstable_ImmediatePriority,Nr=o.unstable_UserBlockingPriority,Mt=o.unstable_NormalPriority,p=o.unstable_LowPriority,M=o.unstable_IdlePriority,Q=o.log,bn=o.unstable_setDisableYieldValue,ee=null,Bn=null;function $(n){if(typeof Q=="function"&&bn(n),Bn&&typeof Bn.setStrictMode=="function")try{Bn.setStrictMode(ee,n)}catch{}}var K=Math.clz32?Math.clz32:fe,mn=Math.log,xe=Math.LN2;function fe(n){return n>>>=0,n===0?32:31-(mn(n)/xe|0)|0}var Gt=256,_a=262144,Ta=4194304;function $t(n){var e=n&42;if(e!==0)return e;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&-n;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Sa(n,e,t){var a=n.pendingLanes;if(a===0)return 0;var i=0,l=n.suspendedLanes,s=n.pingedLanes;n=n.warmLanes;var c=a&134217727;return c!==0?(a=c&~l,a!==0?i=$t(a):(s&=c,s!==0?i=$t(s):t||(t=c&~n,t!==0&&(i=$t(t))))):(c=a&~l,c!==0?i=$t(c):s!==0?i=$t(s):t||(t=a&~n,t!==0&&(i=$t(t)))),i===0?0:e!==0&&e!==i&&(e&l)===0&&(l=i&-i,t=e&-e,l>=t||l===32&&(t&4194048)!==0)?e:i}function ni(n,e){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&e)===0}function wl(n,e){(e&8)!==0&&(e|=e&32);var t=n.entangledLanes;if(t!==0)for(n=n.entanglements,t&=e;0<t;){var a=31-K(t),i=1<<a;e|=n[a],t&=~i}return e}function uo(n,e){switch(n){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wr(){var n=Ta;return Ta<<=1,(Ta&62914560)===0&&(Ta=4194304),n}function ja(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ei(n,e){n.pendingLanes|=e,e!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function fo(n,e,t,a,i,l){var s=n.pendingLanes;n.pendingLanes=t,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=t,n.entangledLanes&=t,n.errorRecoveryDisabledLanes&=t,n.shellSuspendCounter=0;var c=n.entanglements,f=n.expirationTimes,T=n.hiddenUpdates;for(t=s&~t;0<t;){var w=31-K(t),k=1<<w;c[w]=0,f[w]=-1;var x=T[w];if(x!==null)for(T[w]=null,w=0;w<x.length;w++){var j=x[w];j!==null&&(j.lane&=-536870913)}t&=~k}a!==0&&El(n,a,0),l!==0&&i===0&&n.tag!==0&&(n.suspendedLanes|=l&~(s&~e))}function El(n,e,t){n.pendingLanes|=e,n.suspendedLanes&=~e;var a=31-K(e);n.entangledLanes|=e,n.entanglements[a]=n.entanglements[a]|1073741824|t&261930}function Ct(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var a=31-K(t),i=1<<a;i&e|n[a]&e&&(n[a]|=e),t&=~i}}function Er(n,e){var t=e&-e;return t=(t&42)!==0?1:Ei(t),(t&(n.suspendedLanes|e))!==0?0:t}function Ei(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Or(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Ol(){var n=dn.p;return n!==0?n:(n=window.event,n===void 0?32:$g(n.type))}function Al(n,e){var t=dn.p;try{return dn.p=n,e()}finally{dn.p=t}}var et=Math.random().toString(36).slice(2),Ae="__reactFiber$"+et,B="__reactProps$"+et,rn="__reactContainer$"+et,Mn="__reactEvents$"+et,Wn="__reactListeners$"+et,ve="__reactHandles$"+et,tt="__reactResources$"+et,at="__reactMarker$"+et,na="__reactLoad$"+et;function Me(n){delete n[Ae],delete n[B],delete n[Wn],delete n[ve]}function Ce(n){var e;if(e=n[Ae])return e;for(var t=n.parentNode;t;){if(e=t[rn]||t[Ae]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Rg(n);n!==null;){if(t=n[Ae])return t;n=Rg(n)}return e}n=t,t=n.parentNode}return null}function ea(n){if(n=n[Ae]||n[rn]){var e=n.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return n}return null}function Na(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n.stateNode;throw Error(d(33))}function ta(n){var e=n[tt];return e||(e=n[tt]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function _e(n){n[at]=!0}function kl(n){n[na]=void 0}var Ml=new Set,Cl={};function xt(n,e){aa(n,e),aa(n+"Capture",e)}function aa(n,e){for(Cl[n]=e,n=0;n<e.length;n++)Ml.add(e[n])}var _t=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Rl={},Oi={};function Tn(n){return wi.call(Oi,n)?!0:wi.call(Rl,n)?!1:_t.test(n)?Oi[n]=!0:(Rl[n]=!0,!1)}var Un=!1;function Te(){var n=Un;return Un=!1,n}function qn(n,e,t){if(Tn(e))if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":n.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){n.removeAttribute(e);return}}n.setAttribute(e,t)}}function ia(n,e,t){if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttribute(e,t)}}function Le(n,e,t,a){if(a===null)n.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttributeNS(e,t,a)}}function Be(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ai(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function X(n,e,t){var a=Object.getOwnPropertyDescriptor(n.constructor.prototype,e);if(!n.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,l=a.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){t=""+s,l.call(this,s)}}),Object.defineProperty(n,e,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(s){t=""+s},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ln(n){if(!n._valueTracker){var e=Ai(n)?"checked":"value";n._valueTracker=X(n,e,""+n[e])}}function jn(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),a="";return n&&(a=Ai(n)?n.checked?"true":"false":n.value),n=a,n!==t?(e.setValue(n),!0):!1}var Gn=/[\n"\\]/g;function Xn(n){return n.replace(Gn,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ut(n,e,t,a,i,l,s,c){n.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?n.type=s:n.removeAttribute("type"),e!=null?s==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+Be(e)):n.value!==""+Be(e)&&(n.value=""+Be(e)):s!=="submit"&&s!=="reset"||n.removeAttribute("value"),e!=null?s==="number"&&n.value==e?Ar(n,Be(n.value)):Ar(n,Be(e)):t!=null?Ar(n,Be(t)):a!=null&&n.removeAttribute("value"),i==null&&l!=null&&(n.defaultChecked=!!l),i!=null&&(n.checked=i&&typeof i!="function"&&typeof i!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?n.name=""+Be(c):n.removeAttribute("name")}function zl(n,e,t,a,i,l,s,c){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(n.type=l),e!=null||t!=null){if(!(l!=="submit"&&l!=="reset"||e!=null)){ln(n);return}t=t!=null?""+Be(t):"",e=e!=null?""+Be(e):t,c||e===n.value||(n.value=e),n.defaultValue=e}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,n.checked=c?n.checked:!!a,n.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(n.name=s),ln(n)}function Ar(n,e){n.defaultValue!==""+e&&(n.defaultValue=""+e)}function ki(n,e,t,a){if(n=n.options,e){e={};for(var i=0;i<t.length;i++)e["$"+t[i]]=!0;for(t=0;t<n.length;t++)i=e.hasOwnProperty("$"+n[t].value),n[t].selected!==i&&(n[t].selected=i),i&&a&&(n[t].defaultSelected=!0)}else{for(t=""+Be(t),e=null,i=0;i<n.length;i++){if(n[i].value===t){n[i].selected=!0,a&&(n[i].defaultSelected=!0);return}e!==null||n[i].disabled||(e=n[i])}e!==null&&(e.selected=!0)}}function id(n,e,t){if(e!=null&&(e=""+Be(e),e!==n.value&&(n.value=e),t==null)){n.defaultValue!==e&&(n.defaultValue=e);return}n.defaultValue=t!=null?""+Be(t):""}function rd(n,e,t,a){if(e==null){if(a!=null){if(t!=null)throw Error(d(92));if(On(a)){if(1<a.length)throw Error(d(93));a=a[0]}t=a}t==null&&(t=""),e=t}t=Be(e),n.defaultValue=t,a=n.textContent,a===t&&a!==""&&a!==null&&(n.value=a),ln(n)}function Mi(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var bv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ld(n,e,t){var a=e.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?n.setProperty(e,""):e==="float"?n.cssFloat="":n[e]="":a?n.setProperty(e,t):typeof t!="number"||t===0||bv.has(e)?e==="float"?n.cssFloat=t:n[e]=(""+t).trim():n[e]=t+"px"}function sd(n,e,t){if(e!=null&&typeof e!="object")throw Error(d(62));if(n=n.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="",Un=!0);for(var i in e)a=e[i],e.hasOwnProperty(i)&&t[i]!==a&&(ld(n,i,a),Un=!0)}else for(var l in e)e.hasOwnProperty(l)&&ld(n,l,e[l])}function ho(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),xv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Dl(n){return xv.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function Yt(){}var go=null;function po(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ci=null,Ri=null;function od(n){var e=ea(n);if(e&&(n=e.stateNode)){var t=n[B]||null;n:switch(n=e.stateNode,e.type){case"input":if(ut(n,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Xn(""+e)+'"][type="radio"]'),e=0;e<t.length;e++){var a=t[e];if(a!==n&&a.form===n.form){var i=a[B]||null;if(!i)throw Error(d(90));ut(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<t.length;e++)a=t[e],a.form===n.form&&jn(a)}break n;case"textarea":id(n,t.value,t.defaultValue);break n;case"select":e=t.value,e!=null&&ki(n,!!t.multiple,e,!1)}}}var mo=!1;function cd(n,e,t){if(mo)return n(e,t);mo=!0;try{var a=n(e);return a}finally{if(mo=!1,(Ci!==null||Ri!==null)&&(Ds(),Ci&&(e=Ci,n=Ri,Ri=Ci=null,od(e),n)))for(e=0;e<n.length;e++)od(n[e])}}function kr(n,e){var t=n.stateNode;if(t===null)return null;var a=t[B]||null;if(a===null)return null;t=a[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(n=n.type,a=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!a;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(d(231,e,typeof t));return t}var ra=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vo=!1;if(ra)try{var Mr={};Object.defineProperty(Mr,"passive",{get:function(){vo=!0}}),window.addEventListener("test",Mr,Mr),window.removeEventListener("test",Mr,Mr)}catch{vo=!1}var wa=null,bo=null,Ll=null;function ud(){if(Ll)return Ll;var n,e=bo,t=e.length,a,i="value"in wa?wa.value:wa.textContent,l=i.length;for(n=0;n<t&&e[n]===i[n];n++);var s=t-n;for(a=1;a<=s&&e[t-a]===i[l-a];a++);return Ll=i.slice(n,1<a?1-a:void 0)}function Bl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ul(){return!0}function dd(){return!1}function Xe(n){function e(t,a,i,l,s){this._reactName=t,this._targetInst=i,this.type=a,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var c in n)n.hasOwnProperty(c)&&(t=n[c],this[c]=t?t(l):l[c]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Ul:dd,this.isPropagationStopped=dd,this}return Z(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ul)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ul)},persist:function(){},isPersistent:Ul}),e}var Ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hl=Xe(Ea),Cr=Z({},Ea,{view:0,detail:0}),_v=Xe(Cr),yo,xo,Rr,ql=Z({},Cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:To,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Rr&&(Rr&&n.type==="mousemove"?(yo=n.screenX-Rr.screenX,xo=n.screenY-Rr.screenY):xo=yo=0,Rr=n),yo)},movementY:function(n){return"movementY"in n?n.movementY:xo}}),fd=Xe(ql),Tv=Z({},ql,{dataTransfer:0}),Sv=Xe(Tv),jv=Z({},Cr,{relatedTarget:0}),_o=Xe(jv),Nv=Z({},Ea,{animationName:0,elapsedTime:0,pseudoElement:0}),wv=Xe(Nv),Ev=Z({},Ea,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ov=Xe(Ev),Av=Z({},Ea,{data:0}),hd=Xe(Av),kv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rv(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Cv[n])?!!e[n]:!1}function To(){return Rv}var zv=Z({},Cr,{key:function(n){if(n.key){var e=kv[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Bl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Mv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:To,charCode:function(n){return n.type==="keypress"?Bl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Bl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Dv=Xe(zv),Lv=Z({},ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gd=Xe(Lv),Bv=Z({},Ea,{submitter:0}),Uv=Xe(Bv),Hv=Z({},Cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:To}),qv=Xe(Hv),Gv=Z({},Ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yv=Xe(Gv),Vv=Z({},ql,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Kv=Xe(Vv),Iv=Z({},Ea,{newState:0,oldState:0,source:0}),Qv=Xe(Iv),Xv=[9,13,27,32],So=ra&&"CompositionEvent"in window,zr=null;ra&&"documentMode"in document&&(zr=document.documentMode);var Jv=ra&&"TextEvent"in window&&!zr,pd=ra&&(!So||zr&&8<zr&&11>=zr),md=" ",vd=!1;function bd(n,e){switch(n){case"keyup":return Xv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var zi=!1;function Zv(n,e){switch(n){case"compositionend":return yd(e);case"keypress":return e.which!==32?null:(vd=!0,md);case"textInput":return n=e.data,n===md&&vd?null:n;default:return null}}function Fv(n,e){if(zi)return n==="compositionend"||!So&&bd(n,e)?(n=ud(),Ll=bo=wa=null,zi=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return pd&&e.locale!=="ko"?null:e.data;default:return null}}var Pv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xd(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Pv[n.type]:e==="textarea"}function _d(n,e,t,a){Ci?Ri?Ri.push(a):Ri=[a]:Ci=a,e=Gs(e,"onChange"),0<e.length&&(t=new Hl("onChange","change",null,t,a),n.push({event:t,listeners:e}))}var Dr=null,Lr=null;function Wv(n){cg(n,0)}function Gl(n){var e=Na(n);if(jn(e))return n}function Td(n,e){if(n==="change")return e}var Sd=!1;if(ra){var jo;if(ra){var No="oninput"in document;if(!No){var jd=document.createElement("div");jd.setAttribute("oninput","return;"),No=typeof jd.oninput=="function"}jo=No}else jo=!1;Sd=jo&&(!document.documentMode||9<document.documentMode)}function Nd(){Dr&&(Dr.detachEvent("onpropertychange",wd),Lr=Dr=null)}function wd(n){if(n.propertyName==="value"&&Gl(Lr)){var e=[];_d(e,Lr,n,po(n)),cd(Wv,e)}}function $v(n,e,t){n==="focusin"?(Nd(),Dr=e,Lr=t,Dr.attachEvent("onpropertychange",wd)):n==="focusout"&&Nd()}function nb(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Gl(Lr)}function eb(n,e){if(n==="click")return Gl(e)}function tb(n,e){if(n==="input"||n==="change")return Gl(e)}function ab(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var dt=typeof Object.is=="function"?Object.is:ab;function Br(n,e){if(dt(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),a=Object.keys(e);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var i=t[a];if(!wi.call(e,i)||!dt(n[i],e[i]))return!1}return!0}function wo(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ed(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Od(n,e){var t=Ed(n);n=0;for(var a;t;){if(t.nodeType===3){if(a=n+t.textContent.length,n<=e&&a>=e)return{node:t,offset:e-n};n=a}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=Ed(t)}}function Ad(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Ad(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function kd(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var e=wo(n.document);e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=wo(n.document)}return e}function Eo(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}var ib=ra&&"documentMode"in document&&11>=document.documentMode,Di=null,Oo=null,Ur=null,Ao=!1;function Md(n,e,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ao||Di==null||Di!==wo(a)||(a=Di,"selectionStart"in a&&Eo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ur&&Br(Ur,a)||(Ur=a,a=Gs(Oo,"onSelect"),0<a.length&&(e=new Hl("onSelect","select",null,e,t),n.push({event:e,listeners:a}),e.target=Di)))}function ti(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Li={animationend:ti("Animation","AnimationEnd"),animationiteration:ti("Animation","AnimationIteration"),animationstart:ti("Animation","AnimationStart"),transitionrun:ti("Transition","TransitionRun"),transitionstart:ti("Transition","TransitionStart"),transitioncancel:ti("Transition","TransitionCancel"),transitionend:ti("Transition","TransitionEnd")},ko={},Cd={};ra&&(Cd=document.createElement("div").style,"AnimationEvent"in window||(delete Li.animationend.animation,delete Li.animationiteration.animation,delete Li.animationstart.animation),"TransitionEvent"in window||delete Li.transitionend.transition);function ai(n){if(ko[n])return ko[n];if(!Li[n])return n;var e=Li[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Cd)return ko[n]=e[t];return n}var Rd=ai("animationend"),zd=ai("animationiteration"),Dd=ai("animationstart"),rb=ai("transitionrun"),lb=ai("transitionstart"),sb=ai("transitioncancel"),Ld=ai("transitionend"),Bd=new Map,Mo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mo.push("scrollEnd");function Rt(n,e){Bd.set(n,e),xt(e,[n])}var ob=0;function la(n,e){if(n.name!=null&&n.name!=="auto")return n.name;if(e.autoName!==null)return e.autoName;n=Bt.identifierPrefix;var t=ob++;return n="_"+n+"t_"+t.toString(32)+"_",e.autoName=n}function Ud(n){if(n==null||typeof n=="string")return n;var e=null,t=tr;if(t!==null)for(var a=0;a<t.length;a++){var i=n[t[a]];if(i!=null){if(i==="none")return"none";e=e==null?i:e+(" "+i)}}return e??n.default}function sa(n,e){return n=Ud(n),e=Ud(e),e==null?n==="auto"?null:n:e==="auto"?null:e}var Yl=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},Tt=[],Bi=0,Co=0;function Vl(){for(var n=Bi,e=Co=Bi=0;e<n;){var t=Tt[e];Tt[e++]=null;var a=Tt[e];Tt[e++]=null;var i=Tt[e];Tt[e++]=null;var l=Tt[e];if(Tt[e++]=null,a!==null&&i!==null){var s=a.pending;s===null?i.next=i:(i.next=s.next,s.next=i),a.pending=i}l!==0&&Hd(t,i,l)}}function Kl(n,e,t,a){Tt[Bi++]=n,Tt[Bi++]=e,Tt[Bi++]=t,Tt[Bi++]=a,Co|=a,n.lanes|=a,n=n.alternate,n!==null&&(n.lanes|=a)}function Ro(n,e,t,a){return Kl(n,e,t,a),Il(n)}function ii(n,e){return Kl(n,null,null,e),Il(n)}function Hd(n,e,t){n.lanes|=t;var a=n.alternate;a!==null&&(a.lanes|=t);for(var i=!1,l=n.return;l!==null;)l.childLanes|=t,a=l.alternate,a!==null&&(a.childLanes|=t),l.tag===22&&(n=l.stateNode,n===null||n._visibility&1||(i=!0)),n=l,l=l.return;return n.tag===3?(l=n.stateNode,i&&e!==null&&(i=31-K(t),n=l.hiddenUpdates,a=n[i],a===null?n[i]=[e]:a.push(e),e.lane=t|536870912),l):null}function Il(n){if(50<ll)throw ll=0,zs=null,Error(d(185));for(var e=n.return;e!==null;)n=e,e=n.return;return n.tag===3?n.stateNode:null}var Ui={};function cb(n,e,t,a){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(n,e,t,a){return new cb(n,e,t,a)}function zo(n){return n=n.prototype,!(!n||!n.isReactComponent)}function oa(n,e){var t=n.alternate;return t===null?(t=it(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&1206910976,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t.refCleanup=n.refCleanup,t}function qd(n,e){n.flags&=1206910978;var t=n.alternate;return t===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,n.type=t.type,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n}function Ql(n,e,t,a,i,l){var s=0;if(a=n,typeof a=="function")zo(a)&&(s=1);else if(typeof a=="string")s=By(n,t,yt.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(a){case se:return n=it(31,t,e,i),n.elementType=se,n.lanes=l,n;case le:return ri(t.children,i,l,e);case pe:s=8,i|=24;break;case Ke:return n=it(12,t,e,i|2),n.elementType=Ke,n.lanes=l,n;case cn:return n=it(13,t,e,i),n.elementType=cn,n.lanes=l,n;case P:return n=it(19,t,e,i),n.elementType=P,n.lanes=l,n;case me:case y:return n=i|32,n=it(30,t,e,n),n.elementType=y,n.lanes=l,n.stateNode={autoName:null,paired:null,clones:null,ref:null},n;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case oe:s=10;break n;case Ee:s=9;break n;case Y:s=11;break n;case kn:s=14;break n;case Sn:s=16,a=null;break n}s=29,t=Error(d(130,n===null?"null":typeof n,"")),a=null}return e=it(s,t,e,i),e.elementType=n,e.type=a,e.lanes=l,e}function ri(n,e,t,a){return n=it(7,n,a,e),n.lanes=t,n}function Do(n,e,t){return n=it(6,n,null,e),n.lanes=t,n}function Gd(n){var e=it(18,null,null,0);return e.stateNode=n,e}function Lo(n,e,t){return e=it(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}var Yd=new WeakMap;function St(n,e){if(typeof n=="object"&&n!==null){var t=Yd.get(n);return t!==void 0?t:(e={value:n,source:e,stack:Sl(e)},Yd.set(n,e),e)}return{value:n,source:e,stack:Sl(e)}}var Hi=[],qi=0,Xl=null,Hr=0,jt=[],Nt=0,Oa=null,Vt=1,Kt="";function ca(n,e){Hi[qi++]=Hr,Hi[qi++]=Xl,Xl=n,Hr=e}function Vd(n,e,t){jt[Nt++]=Vt,jt[Nt++]=Kt,jt[Nt++]=Oa,Oa=n;var a=Vt;n=Kt;var i=32-K(a)-1;a&=~(1<<i),t+=1;var l=32-K(e)+i;if(30<l){var s=i-i%5;l=(a&(1<<s)-1).toString(32),a>>=s,i-=s,Vt=1<<32-K(e)+i|t<<i|a,Kt=l+n}else Vt=1<<l|t<<i|a,Kt=n}function Jl(n){n.return!==null&&(ca(n,1),Vd(n,1,0))}function Bo(n){for(;n===Xl;)Xl=Hi[--qi],Hi[qi]=null,Hr=Hi[--qi],Hi[qi]=null;for(;n===Oa;)Oa=jt[--Nt],jt[Nt]=null,Kt=jt[--Nt],jt[Nt]=null,Vt=jt[--Nt],jt[Nt]=null}function Kd(n,e){jt[Nt++]=Vt,jt[Nt++]=Kt,jt[Nt++]=Oa,Vt=e.id,Kt=e.overflow,Oa=n}var Re=null,ie=null,An=!1,Aa=null,wt=!1,Uo=Error(d(519));function ka(n){var e=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw qr(St(e,n)),Uo}function Id(n){var e=n.stateNode,t=n.type,a=n.memoizedProps;switch(e[Ae]=n,e[B]=a,t){case"dialog":zn("cancel",e),zn("close",e);break;case"iframe":case"object":case"embed":zn("load",e);break;case"video":case"audio":for(t=0;t<ol.length;t++)zn(ol[t],e);break;case"source":zn("error",e);break;case"img":case"image":case"link":zn("error",e),zn("load",e);break;case"details":zn("toggle",e);break;case"input":zn("invalid",e),zl(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":zn("invalid",e);break;case"textarea":zn("invalid",e),rd(e,a.value,a.defaultValue,a.children)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||e.textContent===""+t||a.suppressHydrationWarning===!0||hg(e.textContent,t)?(a.popover!=null&&(zn("beforetoggle",e),zn("toggle",e)),a.onScroll!=null&&zn("scroll",e),a.onScrollEnd!=null&&zn("scrollend",e),a.onClick!=null&&(e.onclick=Yt),e=!0):e=!1,e||ka(n,!0)}function Zl(n){for(Re=n.return;Re;)switch(Re.tag){case 5:case 31:case 13:wt=!1;return;case 27:case 3:wt=!0;return;default:Re=Re.return}}function Gi(n){if(n!==Re)return!1;if(!An)return Zl(n),An=!0,!1;var e=n.tag,t;if((t=e!==3&&e!==27)&&((t=e===5)&&(t=n.type,t=!(t!=="form"&&t!=="button")||gu(n.type,n.memoizedProps)),t=!t),t&&ie&&ka(n),Zl(n),e===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));ie=Cg(n)}else if(e===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));ie=Cg(n)}else e===27?(e=ie,Qa(n.type)?(n=Su,Su=null,ie=n):ie=e):ie=Re?Ot(n.stateNode.nextSibling):null;return!0}function li(){ie=Re=null,An=!1}function Ho(){var n=Aa;return n!==null&&(st===null?st=n:st.push.apply(st,n),Aa=null),n}function qr(n){Aa===null?Aa=[n]:Aa.push(n)}var qo=bt(null),si=null,ua=null;function Ma(n,e,t){Pn(qo,e._currentValue),e._currentValue=t}function da(n){n._currentValue=qo.current,Oe(qo)}function Fl(n,e,t){for(;n!==null;){var a=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),n===t)break;n=n.return}}function Go(n,e,t,a){var i=n.child;for(i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){var s=i.child;l=l.firstContext;n:for(;l!==null;){var c=l;l=i;for(var f=0;f<e.length;f++)if(c.context===e[f]){l.lanes|=t,c=l.alternate,c!==null&&(c.lanes|=t),Fl(l.return,t,n),a||(s=null);break n}l=c.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(d(341));s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Fl(s,t,n),s=null}else i.tag===13&&i.memoizedState!==null&&i.memoizedState.dehydrated===null?(i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),Fl(i.return,t,n),s=i.child,s=s!==null?s.sibling:null):s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===n){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function oi(n,e,t,a){n=null;for(var i=e,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(d(387));if(s=s.memoizedProps,s!==null){var c=i.type;dt(i.pendingProps.value,s.value)||(n!==null?n.push(c):n=[c])}}else if(i===ji.current){if(s=i.alternate,s===null)throw Error(d(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(n!==null?n.push(fr):n=[fr])}i=i.return}return n!==null&&Go(e,n,t,a),e.flags|=262144,n!==null}function Pl(n){for(n=n.firstContext;n!==null;){if(!dt(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function ci(n){si=n,ua=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Ue(n){return Qd(si,n)}function Wl(n,e){return si===null&&ci(n),Qd(n,e)}function Qd(n,e){var t=e._currentValue;if(e={context:e,memoizedValue:t,next:null},ua===null){if(n===null)throw Error(d(308));ua=e,n.dependencies={lanes:0,firstContext:e},n.flags|=524288}else ua=ua.next=e;return t}var ub=typeof AbortController<"u"?AbortController:function(){var n=[],e=this.signal={aborted:!1,addEventListener:function(t,a){n.push(a)}};this.abort=function(){e.aborted=!0,n.forEach(function(t){return t()})}},db=o.unstable_scheduleCallback,fb=o.unstable_NormalPriority,Se={$$typeof:oe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yo(){return{controller:new ub,data:new Map,refCount:0}}function Gr(n){n.refCount--,n.refCount===0&&db(fb,function(){n.controller.abort()})}function Xd(n,e){if((n.pendingLanes&4194048)!==0){var t=n.transitionTypes;for(t===null&&(t=n.transitionTypes=[]),n=0;n<e.length;n++){var a=e[n];t.indexOf(a)===-1&&t.push(a)}}}var Yr=null;function hb(n){var e=n.transitionTypes;return n.transitionTypes=null,e}var Vr=null,Vo=0,ui=0,Yi=null;function gb(n,e){if(Vr===null){var t=Vr=[];Vo=0,ui=ru(),Yi={status:"pending",value:void 0,then:function(a){t.push(a)}}}return Vo++,e.then(Jd,Jd),e}function Jd(){if(--Vo===0&&(Yr=null,Vr!==null)){Yi!==null&&(Yi.status="fulfilled");var n=Vr;Vr=null,ui=0,Yi=null;for(var e=0;e<n.length;e++)(0,n[e])()}}function pb(n,e){var t=[],a={status:"pending",value:null,reason:null,then:function(i){t.push(i)}};return n.then(function(){a.status="fulfilled",a.value=e;for(var i=0;i<t.length;i++)(0,t[i])(e)},function(i){for(a.status="rejected",a.reason=i,i=0;i<t.length;i++)(0,t[i])(void 0)}),a}var Zd=tn.S;tn.S=function(n,e){if(Yh=Ie(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&gb(n,e),Yr!==null)for(var t=lr;t!==null;)Xd(t,Yr),t=t.next;if(t=n.types,t!==null){for(var a=lr;a!==null;)Xd(a,t),a=a.next;if(ui!==0){a=Yr,a===null&&(a=Yr=[]);for(var i=0;i<t.length;i++){var l=t[i];a.indexOf(l)===-1&&a.push(l)}}}Zd!==null&&Zd(n,e)};var di=bt(null);function Ko(){var n=di.current;return n!==null?n:te.pooledCache}function $l(n,e){e===null?Pn(di,di.current):Pn(di,e.pool)}function Fd(){var n=Ko();return n===null?null:{parent:Se._currentValue,pool:n}}var Vi=Error(d(460)),Io=Error(d(474)),ns=Error(d(542)),es={then:function(){}};function Pd(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Wd(n,e,t){switch(t=n[t],t===void 0?n.push(e):t!==e&&(e.then(Yt,Yt),e=t),e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,nf(n),n===void 0&&!("reason"in e)?Error(d(600)):n;default:if(typeof e.status=="string")e.then(Yt,Yt);else{if(n=te,n!==null&&100<n.shellSuspendCounter)throw Error(d(482));n=e,n.status="pending",n.then(function(a){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=a}},function(a){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,nf(n),n}throw hi=e,Vi}}function fi(n){try{var e=n._init;return e(n._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(hi=t,Vi):t}}var hi=null;function $d(){if(hi===null)throw Error(d(459));var n=hi;return hi=null,n}function nf(n){if(n===Vi||n===ns)throw Error(d(483))}var Ki=null,Kr=0;function ts(n){var e=Kr;return Kr+=1,Ki===null&&(Ki=[]),Wd(Ki,n,e)}function Ca(n,e){e=e.props.ref,n.ref=e!==void 0?e:null}function as(n,e){throw e.$$typeof===pn?Error(d(525)):(n=Object.prototype.toString.call(e),Error(d(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)))}function ef(n){function e(_,v){if(n){var S=_.deletions;S===null?(_.deletions=[v],_.flags|=16):S.push(v)}}function t(_,v){if(!n)return null;for(;v!==null;)e(_,v),v=v.sibling;return null}function a(_){for(var v=new Map;_!==null;)_.key===null?v.set(_.index,_):v.set(_.key,_),_=_.sibling;return v}function i(_,v){return _=oa(_,v),_.index=0,_.sibling=null,_}function l(_,v,S){return _.index=S,n?(S=_.alternate,S!==null?(S=S.index,S<v?(_.flags|=2,v):S):(_.flags|=134217730,v)):(_.flags|=1048576,v)}function s(_){return n&&_.alternate===null&&(_.flags|=134217730),_}function c(_,v,S,A){return v===null||v.tag!==6?(v=Do(S,_.mode,A),v.return=_,v):(v=i(v,S),v.return=_,v)}function f(_,v,S,A){var nn=S.type;return nn===le?(_=w(_,v,S.props.children,A,S.key),Ca(_,S),_):v!==null&&(v.elementType===nn||typeof nn=="object"&&nn!==null&&nn.$$typeof===Sn&&fi(nn)===v.type)?(v=i(v,S.props),Ca(v,S),v.return=_,v):(v=Ql(S.type,S.key,S.props,null,_.mode,A),Ca(v,S),v.return=_,v)}function T(_,v,S,A){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=Lo(S,_.mode,A),v.return=_,v):(v=i(v,S.children||[]),v.return=_,v)}function w(_,v,S,A,nn){return v===null||v.tag!==7?(v=ri(S,_.mode,A,nn),v.return=_,v):(v=i(v,S),v.return=_,v)}function k(_,v,S){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Do(""+v,_.mode,S),v.return=_,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ae:return S=Ql(v.type,v.key,v.props,null,_.mode,S),Ca(S,v),S.return=_,S;case ue:return v=Lo(v,_.mode,S),v.return=_,v;case Sn:return v=fi(v),k(_,v,S)}if(On(v)||W(v))return v=ri(v,_.mode,S,null),v.return=_,v;if(typeof v.then=="function")return k(_,ts(v),S);if(v.$$typeof===oe)return k(_,Wl(_,v),S);as(_,v)}return null}function x(_,v,S,A){var nn=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return nn!==null?null:c(_,v,""+S,A);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ae:return S.key===nn?f(_,v,S,A):null;case ue:return S.key===nn?T(_,v,S,A):null;case Sn:return S=fi(S),x(_,v,S,A)}if(On(S)||W(S))return nn!==null?null:w(_,v,S,A,null);if(typeof S.then=="function")return x(_,v,ts(S),A);if(S.$$typeof===oe)return x(_,v,Wl(_,S),A);as(_,S)}return null}function j(_,v,S,A,nn){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return _=_.get(S)||null,c(v,_,""+A,nn);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case ae:return _=_.get(A.key===null?S:A.key)||null,f(v,_,A,nn);case ue:return _=_.get(A.key===null?S:A.key)||null,T(v,_,A,nn);case Sn:return A=fi(A),j(_,v,S,A,nn)}if(On(A)||W(A))return _=_.get(S)||null,w(v,_,A,nn,null);if(typeof A.then=="function")return j(_,v,S,ts(A),nn);if(A.$$typeof===oe)return j(_,v,S,Wl(v,A),nn);as(v,A)}return null}function I(_,v,S,A){for(var nn=null,Ln=null,on=v,fn=v=0,we=null;on!==null&&fn<S.length;fn++){on.index>fn?(we=on,on=null):we=on.sibling;var Hn=x(_,on,S[fn],A);if(Hn===null){on===null&&(on=we);break}n&&on&&Hn.alternate===null&&e(_,on),v=l(Hn,v,fn),Ln===null?nn=Hn:Ln.sibling=Hn,Ln=Hn,on=we}if(fn===S.length)return t(_,on),An&&ca(_,fn),nn;if(on===null){for(;fn<S.length;fn++)on=k(_,S[fn],A),on!==null&&(v=l(on,v,fn),Ln===null?nn=on:Ln.sibling=on,Ln=on);return An&&ca(_,fn),nn}for(on=a(on);fn<S.length;fn++)we=j(on,_,fn,S[fn],A),we!==null&&(n&&(Hn=we.alternate,Hn!==null&&on.delete(Hn.key===null?fn:Hn.key)),v=l(we,v,fn),Ln===null?nn=we:Ln.sibling=we,Ln=we);return n&&on.forEach(function(Pa){return e(_,Pa)}),An&&ca(_,fn),nn}function an(_,v,S,A){if(S==null)throw Error(d(151));for(var nn=null,Ln=null,on=v,fn=v=0,we=null,Hn=S.next();on!==null&&!Hn.done;fn++,Hn=S.next()){on.index>fn?(we=on,on=null):we=on.sibling;var Pa=x(_,on,Hn.value,A);if(Pa===null){on===null&&(on=we);break}n&&on&&Pa.alternate===null&&e(_,on),v=l(Pa,v,fn),Ln===null?nn=Pa:Ln.sibling=Pa,Ln=Pa,on=we}if(Hn.done)return t(_,on),An&&ca(_,fn),nn;if(on===null){for(;!Hn.done;fn++,Hn=S.next())Hn=k(_,Hn.value,A),Hn!==null&&(v=l(Hn,v,fn),Ln===null?nn=Hn:Ln.sibling=Hn,Ln=Hn);return An&&ca(_,fn),nn}for(on=a(on);!Hn.done;fn++,Hn=S.next())Hn=j(on,_,fn,Hn.value,A),Hn!==null&&(n&&(we=Hn.alternate,we!==null&&on.delete(we.key===null?fn:we.key)),v=l(Hn,v,fn),Ln===null?nn=Hn:Ln.sibling=Hn,Ln=Hn);return n&&on.forEach(function(Zy){return e(_,Zy)}),An&&ca(_,fn),nn}function wn(_,v,S,A){if(typeof S=="object"&&S!==null&&S.type===le&&S.key===null&&S.props.ref===void 0&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case ae:n:{for(var nn=S.key;v!==null;){if(v.key===nn){if(nn=S.type,nn===le){if(v.tag===7){t(_,v.sibling),A=i(v,S.props.children),Ca(A,S),A.return=_,_=A;break n}}else if(v.elementType===nn||typeof nn=="object"&&nn!==null&&nn.$$typeof===Sn&&fi(nn)===v.type){t(_,v.sibling),A=i(v,S.props),Ca(A,S),A.return=_,_=A;break n}t(_,v);break}else e(_,v);v=v.sibling}S.type===le?(A=ri(S.props.children,_.mode,A,S.key),Ca(A,S),A.return=_,_=A):(A=Ql(S.type,S.key,S.props,null,_.mode,A),Ca(A,S),A.return=_,_=A)}return s(_);case ue:n:{for(nn=S.key;v!==null;){if(v.key===nn)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){t(_,v.sibling),A=i(v,S.children||[]),A.return=_,_=A;break n}else{t(_,v);break}else e(_,v);v=v.sibling}A=Lo(S,_.mode,A),A.return=_,_=A}return s(_);case Sn:return S=fi(S),wn(_,v,S,A)}if(On(S))return I(_,v,S,A);if(W(S)){if(nn=W(S),typeof nn!="function")throw Error(d(150));return S=nn.call(S),an(_,v,S,A)}if(typeof S.then=="function")return wn(_,v,ts(S),A);if(S.$$typeof===oe)return wn(_,v,Wl(_,S),A);as(_,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,v!==null&&v.tag===6?(t(_,v.sibling),A=i(v,S),A.return=_,_=A):(t(_,v),A=Do(S,_.mode,A),A.return=_,_=A),s(_)):t(_,v)}return function(_,v,S,A){try{Kr=0;var nn=wn(_,v,S,A);return Ki=null,nn}catch(on){if(on===Vi||on===ns)throw on;var Ln=it(29,on,null,_.mode);return Ln.lanes=A,Ln.return=_,Ln}}}var gi=ef(!0),tf=ef(!1),Ra=!1;function Qo(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xo(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function za(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Da(n,e,t){var a=n.updateQueue;if(a===null)return null;if(a=a.shared,(Yn&2)!==0){var i=a.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),a.pending=e,e=Il(n),Hd(n,null,t),e}return Kl(n,a,e,t),Il(n)}function Ir(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194048)!==0)){var a=e.lanes;a&=n.pendingLanes,t|=a,e.lanes=t,Ct(n,t)}}function Jo(n,e){var t=n.updateQueue,a=n.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var s={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};l===null?i=l=s:l=l.next=s,t=t.next}while(t!==null);l===null?i=l=e:l=l.next=e}else i=l=e;t={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:a.shared,callbacks:a.callbacks},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}var Zo=!1;function Qr(){if(Zo){var n=Yi;if(n!==null)throw n}}function Xr(n,e,t,a){Zo=!1;var i=n.updateQueue;Ra=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var f=c,T=f.next;f.next=null,s===null?l=T:s.next=T,s=f;var w=n.alternate;w!==null&&(w=w.updateQueue,c=w.lastBaseUpdate,c!==s&&(c===null?w.firstBaseUpdate=T:c.next=T,w.lastBaseUpdate=f))}if(l!==null){var k=i.baseState;s=0,w=T=f=null,c=l;do{var x=c.lane&-536870913,j=x!==c.lane;if(j?(Dn&x)===x:(a&x)===x){x!==0&&x===ui&&(Zo=!0),w!==null&&(w=w.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});n:{var I=n,an=c;x=e;var wn=t;switch(an.tag){case 1:if(I=an.payload,typeof I=="function"){k=I.call(wn,k,x);break n}k=I;break n;case 3:I.flags=I.flags&-65537|128;case 0:if(I=an.payload,x=typeof I=="function"?I.call(wn,k,x):I,x==null)break n;k=Z({},k,x);break n;case 2:Ra=!0}}x=c.callback,x!==null&&(n.flags|=64,j&&(n.flags|=8192),j=i.callbacks,j===null?i.callbacks=[x]:j.push(x))}else j={lane:x,tag:c.tag,payload:c.payload,callback:c.callback,next:null},w===null?(T=w=j,f=k):w=w.next=j,s|=x;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;j=c,c=j.next,j.next=null,i.lastBaseUpdate=j,i.shared.pending=null}}while(!0);w===null&&(f=k),i.baseState=f,i.firstBaseUpdate=T,i.lastBaseUpdate=w,l===null&&(i.shared.lanes=0),Ya|=s,n.lanes=s,n.memoizedState=k}}function af(n,e){if(typeof n!="function")throw Error(d(191,n));n.call(e)}function rf(n,e){var t=n.callbacks;if(t!==null)for(n.callbacks=null,n=0;n<t.length;n++)af(t[n],e)}var La=bt(null),is=bt(0);function lf(n,e){n=ma,Pn(is,n),Pn(La,e),ma=n|e.baseLanes}function Fo(){Pn(is,ma),Pn(La,La.current)}function Po(){ma=is.current,Oe(La),Oe(is)}var He=bt(null),Qe=null;function Ba(n){var e=n.alternate;Pn(qe,qe.current&1),Pn(He,n),Qe===null&&(e===null||La.current!==null||e.memoizedState!==null)&&(Qe=n)}function Wo(n){Pn(qe,qe.current),Pn(He,n),Qe===null&&(Qe=n)}function sf(n){n.tag===22?(Pn(qe,qe.current),Pn(He,n),Qe===null&&(Qe=n)):Ua()}function Ua(){Pn(qe,qe.current),Pn(He,He.current)}function ft(n){Oe(He),Qe===n&&(Qe=null),Oe(qe)}var qe=bt(0);function Jr(n,e){Pn(He,He.current),Pn(qe,e)}function $o(n){Oe(qe),Oe(He),Qe===n&&(Qe=null)}function rs(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||_u(t)||Tu(t)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fa=0,Nn=null,$n=null,je=null,ls=!1,Ii=!1,pi=!1,ss=0,Zr=0,Qi=null,mb=0;function he(){throw Error(d(321))}function nc(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!dt(n[t],e[t]))return!1;return!0}function ec(n,e,t,a,i,l){return fa=l,Nn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tn.H=n===null||n.memoizedState===null?Kf:If,pi=!1,l=t(a,i),pi=!1,Ii&&(l=cf(e,t,a,i)),of(n),l}function of(n){tn.H=gs;var e=$n!==null&&$n.next!==null;if(fa=0,je=$n=Nn=null,ls=!1,Zr=0,Qi=null,e)throw Error(d(300));n===null||Ne||(n=n.dependencies,n!==null&&Pl(n)&&(Ne=!0))}function cf(n,e,t,a){Nn=n;var i=0;do{if(Ii&&(Qi=null),Zr=0,Ii=!1,25<=i)throw Error(d(301));if(i+=1,je=$n=null,n.updateQueue!=null){var l=n.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}tn.H=jb,l=e(t,a)}while(Ii);return l}function vb(){var n=tn.H,e=n.useState()[0];return e=typeof e.then=="function"?Fr(e):e,n=n.useState()[0],($n!==null?$n.memoizedState:null)!==n&&(Nn.flags|=1024),e}function tc(){var n=ss!==0;return ss=0,n}function ac(n,e,t){e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~t}function ic(n){if(ls){for(n=n.memoizedState;n!==null;){var e=n.queue;e!==null&&(e.pending=null),n=n.next}ls=!1}fa=0,je=$n=Nn=null,Ii=!1,Zr=ss=0,Qi=null}function Je(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?Nn.memoizedState=je=n:je=je.next=n,je}function be(){if($n===null){var n=Nn.alternate;n=n!==null?n.memoizedState:null}else n=$n.next;var e=je===null?Nn.memoizedState:je.next;if(e!==null)je=e,$n=n;else{if(n===null)throw Nn.alternate===null?Error(d(467)):Error(d(310));$n=n,n={memoizedState:$n.memoizedState,baseState:$n.baseState,baseQueue:$n.baseQueue,queue:$n.queue,next:null},je===null?Nn.memoizedState=je=n:je=je.next=n}return je}function os(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fr(n){var e=Zr;return Zr+=1,Qi===null&&(Qi=[]),n=Wd(Qi,n,e),e=Nn,(je===null?e.memoizedState:je.next)===null&&(e=e.alternate,tn.H=e===null||e.memoizedState===null?Kf:If),n}function cs(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Fr(n);if(n.$$typeof===L)return;if(n.$$typeof===oe)return Ue(n)}throw Error(d(438,String(n)))}function rc(n){var e=null,t=Nn.updateQueue;if(t!==null&&(e=t.memoCache),e==null){var a=Nn.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),t===null&&(t=os(),Nn.updateQueue=t),t.memoCache=e,t=e.data[e.index],t===void 0)for(t=e.data[e.index]=Array(n),a=0;a<n;a++)t[a]=ct;return e.index++,t}function ha(n,e){return typeof e=="function"?e(n):e}function us(n){var e=be();return lc(e,$n,n)}function lc(n,e,t){var a=n.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=t;var i=n.baseQueue,l=a.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}e.baseQueue=i=l,a.pending=null}if(l=n.baseState,i===null)n.memoizedState=l;else{e=i.next;var c=s=null,f=null,T=e,w=!1;do{var k=T.lane&-536870913;if(k!==T.lane?(Dn&k)===k:(fa&k)===k){var x=T.revertLane;if(x===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),k===ui&&(w=!0);else if((fa&x)===x){T=T.next,x===ui&&(w=!0);continue}else k={lane:0,revertLane:T.revertLane,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},f===null?(c=f=k,s=l):f=f.next=k,Nn.lanes|=x,Ya|=x;k=T.action,pi&&t(l,k),l=T.hasEagerState?T.eagerState:t(l,k)}else x={lane:k,revertLane:T.revertLane,gesture:T.gesture,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},f===null?(c=f=x,s=l):f=f.next=x,Nn.lanes|=k,Ya|=k;T=T.next}while(T!==null&&T!==e);if(f===null?s=l:f.next=c,!dt(l,n.memoizedState)&&(Ne=!0,w&&(t=Yi,t!==null)))throw t;n.memoizedState=l,n.baseState=s,n.baseQueue=f,a.lastRenderedState=l}return i===null&&(a.lanes=0),[n.memoizedState,a.dispatch]}function sc(n){var e=be(),t=e.queue;if(t===null)throw Error(d(311));t.lastRenderedReducer=n;var a=t.dispatch,i=t.pending,l=e.memoizedState;if(i!==null){t.pending=null;var s=i=i.next;do l=n(l,s.action),s=s.next;while(s!==i);dt(l,e.memoizedState)||(Ne=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),t.lastRenderedState=l}return[l,a]}function uf(n,e,t){var a=Nn,i=be(),l=An;if(l){if(t===void 0)throw Error(d(407));t=t()}else t=e();var s=!dt(($n||i).memoizedState,t);if(s&&(i.memoizedState=t,Ne=!0),i=i.queue,uc(hf.bind(null,a,i,n),[n]),n=i.getSnapshot!==e||s||je!==null&&(je.memoizedState.tag&1)!==0,Xi(n?9:8,{destroy:void 0},ff.bind(null,a,i,t,e),null),n){if(a.flags|=2048,te===null)throw Error(d(349));l||(fa&127)!==0||df(a,e,t)}return t}function df(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Nn.updateQueue,e===null?(e=os(),Nn.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function ff(n,e,t,a){e.value=t,e.getSnapshot=a,gf(e)&&pf(n)}function hf(n,e,t){return t(function(){gf(e)&&pf(n)})}function gf(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!dt(n,t)}catch{return!0}}function pf(n){var e=ii(n,2);e!==null&&ot(e,n,2)}function oc(n){var e=Je();if(typeof n=="function"){var t=n;if(n=t(),pi){$(!0);try{t()}finally{$(!1)}}}return e.memoizedState=e.baseState=n,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:n},e}function mf(n,e,t,a){return n.baseState=t,lc(n,$n,typeof a=="function"?a:ha)}function bb(n,e,t,a,i){if(hs(n))throw Error(d(485));if(n=e.action,n!==null){var l={payload:i,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){l.listeners.push(s)}};tn.T!==null?t(!0):l.isTransition=!1,a(l),t=e.pending,t===null?(l.next=e.pending=l,vf(e,l)):(l.next=t.next,e.pending=t.next=l)}}function vf(n,e){var t=e.action,a=e.payload,i=n.state;if(e.isTransition){var l=tn.T,s={};s.types=l!==null?l.types:null,tn.T=s;try{var c=t(i,a),f=tn.S;f!==null&&f(s,c),bf(n,e,c)}catch(T){cc(n,e,T)}finally{l!==null&&s.types!==null&&(l.types=s.types),tn.T=l}}else try{l=t(i,a),bf(n,e,l)}catch(T){cc(n,e,T)}}function bf(n,e,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){yf(n,e,a)},function(a){return cc(n,e,a)}):yf(n,e,t)}function yf(n,e,t){e.status="fulfilled",e.value=t,xf(e),n.state=t,e=n.pending,e!==null&&(t=e.next,t===e?n.pending=null:(t=t.next,e.next=t,vf(n,t)))}function cc(n,e,t){var a=n.pending;if(n.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=t,xf(e),e=e.next;while(e!==a)}n.action=null}function xf(n){n=n.listeners;for(var e=0;e<n.length;e++)(0,n[e])()}function _f(n,e){return e}function Tf(n,e){if(An){var t=te.formState;if(t!==null){n:{var a=Nn;if(An){if(ie){e:{for(var i=ie,l=wt;i.nodeType!==8;){if(!l){i=null;break e}if(i=Ot(i.nextSibling),i===null){i=null;break e}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){ie=Ot(i.nextSibling),a=i.data==="F!";break n}}ka(a)}a=!1}a&&(e=t[0])}}return t=Je(),t.memoizedState=t.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_f,lastRenderedState:e},t.queue=a,t=Gf.bind(null,Nn,a),a.dispatch=t,a=oc(!1),l=pc.bind(null,Nn,!1,a.queue),a=Je(),i={state:e,dispatch:null,action:n,pending:null},a.queue=i,t=bb.bind(null,Nn,i,l,t),i.dispatch=t,a.memoizedState=n,[e,t,!1]}function Sf(n){var e=be();return jf(e,$n,n)}function jf(n,e,t){if(e=lc(n,e,_f)[0],n=us(ha)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=Fr(e)}catch(s){throw s===Vi?ns:s}else a=e;e=be();var i=e.queue,l=i.dispatch;return t!==e.memoizedState&&(Nn.flags|=2048,Xi(9,{destroy:void 0},yb.bind(null,i,t),null)),[a,l,n]}function yb(n,e){n.action=e}function Nf(n){var e=be(),t=$n;if(t!==null)return jf(e,t,n);be(),e=e.memoizedState,t=be();var a=t.queue.dispatch;return t.memoizedState=n,[e,a,!1]}function Xi(n,e,t,a){return n={tag:n,create:t,deps:a,inst:e,next:null},e=Nn.updateQueue,e===null&&(e=os(),Nn.updateQueue=e),t=e.lastEffect,t===null?e.lastEffect=n.next=n:(a=t.next,t.next=n,n.next=a,e.lastEffect=n),n}function wf(){return be().memoizedState}function ds(n,e,t,a){var i=Je();Nn.flags|=n,i.memoizedState=Xi(1|e,{destroy:void 0},t,a===void 0?null:a)}function fs(n,e,t,a){var i=be();a=a===void 0?null:a;var l=i.memoizedState.inst;$n!==null&&a!==null&&nc(a,$n.memoizedState.deps)?i.memoizedState=Xi(e,l,t,a):(Nn.flags|=n,i.memoizedState=Xi(1|e,l,t,a))}function Ef(n,e){ds(8390656,8,n,e)}function uc(n,e){fs(2048,8,n,e)}function xb(n){Nn.flags|=4;var e=Nn.updateQueue;if(e===null)e=os(),Nn.updateQueue=e,e.events=[n];else{var t=e.events;t===null?e.events=[n]:t.push(n)}}function Of(n){var e=be().memoizedState;return xb({ref:e,nextImpl:n}),function(){if((Yn&2)!==0)throw Error(d(440));return e.impl.apply(void 0,arguments)}}function Af(n,e){return fs(4,2,n,e)}function kf(n,e){return fs(4,4,n,e)}function Mf(n,e){if(typeof e=="function"){n=n();var t=e(n);return function(){typeof t=="function"?t():e(null)}}if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Cf(n,e,t){t=t!=null?t.concat([n]):null,fs(4,4,Mf.bind(null,e,n),t)}function dc(){}function Rf(n,e){var t=be();e=e===void 0?null:e;var a=t.memoizedState;return e!==null&&nc(e,a[1])?a[0]:(t.memoizedState=[n,e],n)}function zf(n,e){var t=be();e=e===void 0?null:e;var a=t.memoizedState;if(e!==null&&nc(e,a[1]))return a[0];if(a=n(),pi){$(!0);try{n()}finally{$(!1)}}return t.memoizedState=[a,e],a}function fc(n,e,t){return t===void 0||(fa&1073741824)!==0&&(Dn&261930)===0?n.memoizedState=e:(n.memoizedState=t,n=Kh(),Nn.lanes|=n,Ya|=n,t)}function Df(n,e,t,a){return dt(t,e)?t:La.current!==null?(n=fc(n,t,a),dt(n,e)||(Ne=!0),n):(fa&106)===0||(fa&1073741824)!==0&&(Dn&261930)===0?(Ne=!0,n.memoizedState=t):(n=Kh(),Nn.lanes|=n,Ya|=n,e)}function Lf(n,e,t,a,i){var l=dn.p;dn.p=l!==0&&8>l?l:8;var s=tn.T,c={};c.types=s!==null?s.types:null,tn.T=c,pc(n,!1,e,t);try{var f=i(),T=tn.S;if(T!==null&&T(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var w=pb(f,a);Pr(n,e,w,mt(n))}else Pr(n,e,a,mt(n))}catch(k){Pr(n,e,{then:function(){},status:"rejected",reason:k},mt())}finally{dn.p=l,s!==null&&c.types!==null&&(s.types=c.types),tn.T=s}}function _b(){}function hc(n,e,t,a){if(n.tag!==5)throw Error(d(476));var i=Bf(n).queue;Lf(n,i,e,$e,t===null?_b:function(){return Uf(n),t(a)})}function Bf(n){var e=n.memoizedState;if(e!==null)return e;e={memoizedState:$e,baseState:$e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:$e},next:null};var t={};return e.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:t},next:null},n.memoizedState=e,n=n.alternate,n!==null&&(n.memoizedState=e),e}function Uf(n){var e=Bf(n);e.next===null&&(e=n.alternate.memoizedState),Pr(n,e.next.queue,{},mt())}function gc(){return Ue(fr)}function Hf(){return be().memoizedState}function qf(){return be().memoizedState}function Tb(n){for(var e=n.return;e!==null;){switch(e.tag){case 24:case 3:var t=mt();n=za(t);var a=Da(e,n,t);a!==null&&(ot(a,e,t),Ir(a,e,t)),e={cache:Yo()},n.payload=e;return}e=e.return}}function Sb(n,e,t){var a=mt();t={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},hs(n)?Yf(e,t):(t=Ro(n,e,t,a),t!==null&&(ot(t,n,a),Vf(t,e,a)))}function Gf(n,e,t){var a=mt();Pr(n,e,t,a)}function Pr(n,e,t,a){var i={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(hs(n))Yf(e,i);else{var l=n.alternate;if(n.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var s=e.lastRenderedState,c=l(s,t);if(i.hasEagerState=!0,i.eagerState=c,dt(c,s))return Kl(n,e,i,0),te===null&&Vl(),!1}catch{}if(t=Ro(n,e,i,a),t!==null)return ot(t,n,a),Vf(t,e,a),!0}return!1}function pc(n,e,t,a){if(a={lane:2,revertLane:ru(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},hs(n)){if(e)throw Error(d(479))}else e=Ro(n,t,a,2),e!==null&&ot(e,n,2)}function hs(n){var e=n.alternate;return n===Nn||e!==null&&e===Nn}function Yf(n,e){Ii=ls=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Vf(n,e,t){if((t&4194048)!==0){var a=e.lanes;a&=n.pendingLanes,t|=a,e.lanes=t,Ct(n,t)}}var gs={readContext:Ue,use:cs,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useLayoutEffect:he,useInsertionEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useSyncExternalStore:he,useId:he,useHostTransitionStatus:he,useFormState:he,useActionState:he,useOptimistic:he,useMemoCache:he,useCacheRefresh:he,useEffectEvent:he},Kf={readContext:Ue,use:cs,useCallback:function(n,e){return Je().memoizedState=[n,e===void 0?null:e],n},useContext:Ue,useEffect:Ef,useImperativeHandle:function(n,e,t){t=t!=null?t.concat([n]):null,ds(4194308,4,Mf.bind(null,e,n),t)},useLayoutEffect:function(n,e){return ds(4194308,4,n,e)},useInsertionEffect:function(n,e){ds(4,2,n,e)},useMemo:function(n,e){var t=Je();e=e===void 0?null:e;var a=n();if(pi){$(!0);try{n()}finally{$(!1)}}return t.memoizedState=[a,e],a},useReducer:function(n,e,t){var a=Je();if(t!==void 0){var i=t(e);if(pi){$(!0);try{t(e)}finally{$(!1)}}}else i=e;return a.memoizedState=a.baseState=i,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},a.queue=n,n=n.dispatch=Sb.bind(null,Nn,n),[a.memoizedState,n]},useRef:function(n){var e=Je();return n={current:n},e.memoizedState=n},useState:function(n){n=oc(n);var e=n.queue,t=Gf.bind(null,Nn,e);return e.dispatch=t,[n.memoizedState,t]},useDebugValue:dc,useDeferredValue:function(n,e){var t=Je();return fc(t,n,e)},useTransition:function(){var n=oc(!1);return n=Lf.bind(null,Nn,n.queue,!0,!1),Je().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,e,t){var a=Nn,i=Je();if(An){if(t===void 0)throw Error(d(407));t=t()}else{if(t=e(),te===null)throw Error(d(349));(Dn&127)!==0||df(a,e,t)}i.memoizedState=t;var l={value:t,getSnapshot:e};return i.queue=l,Ef(hf.bind(null,a,l,n),[n]),a.flags|=2048,Xi(9,{destroy:void 0},ff.bind(null,a,l,t,e),null),t},useId:function(){var n=Je(),e=te.identifierPrefix;if(An){var t=Kt,a=Vt;t=(a&~(1<<32-K(a)-1)).toString(32)+t,e="_"+e+"R_"+t,t=ss++,0<t&&(e+="H"+t.toString(32)),e+="_"}else t=mb++,e="_"+e+"r_"+t.toString(32)+"_";return n.memoizedState=e},useHostTransitionStatus:gc,useFormState:Tf,useActionState:Tf,useOptimistic:function(n){var e=Je();e.memoizedState=e.baseState=n;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=t,e=pc.bind(null,Nn,!0,t),t.dispatch=e,[n,e]},useMemoCache:rc,useCacheRefresh:function(){return Je().memoizedState=Tb.bind(null,Nn)},useEffectEvent:function(n){var e=Je(),t={impl:n};return e.memoizedState=t,function(){if((Yn&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}},If={readContext:Ue,use:cs,useCallback:Rf,useContext:Ue,useEffect:uc,useImperativeHandle:Cf,useInsertionEffect:Af,useLayoutEffect:kf,useMemo:zf,useReducer:us,useRef:wf,useState:function(){return us(ha)},useDebugValue:dc,useDeferredValue:function(n,e){var t=be();return Df(t,$n.memoizedState,n,e)},useTransition:function(){var n=us(ha)[0],e=be().memoizedState;return[typeof n=="boolean"?n:Fr(n),e]},useSyncExternalStore:uf,useId:Hf,useHostTransitionStatus:gc,useFormState:Sf,useActionState:Sf,useOptimistic:function(n,e){var t=be();return mf(t,$n,n,e)},useMemoCache:rc,useCacheRefresh:qf,useEffectEvent:Of},jb={readContext:Ue,use:cs,useCallback:Rf,useContext:Ue,useEffect:uc,useImperativeHandle:Cf,useInsertionEffect:Af,useLayoutEffect:kf,useMemo:zf,useReducer:sc,useRef:wf,useState:function(){return sc(ha)},useDebugValue:dc,useDeferredValue:function(n,e){var t=be();return $n===null?fc(t,n,e):Df(t,$n.memoizedState,n,e)},useTransition:function(){var n=sc(ha)[0],e=be().memoizedState;return[typeof n=="boolean"?n:Fr(n),e]},useSyncExternalStore:uf,useId:Hf,useHostTransitionStatus:gc,useFormState:Nf,useActionState:Nf,useOptimistic:function(n,e){var t=be();return $n!==null?mf(t,$n,n,e):(t.baseState=n,[n,t.queue.dispatch])},useMemoCache:rc,useCacheRefresh:qf,useEffectEvent:Of};function mc(n,e,t,a){e=n.memoizedState,t=t(a,e),t=t==null?e:Z({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var vc={enqueueSetState:function(n,e,t){n=n._reactInternals;var a=mt(),i=za(a);i.payload=e,t!=null&&(i.callback=t),e=Da(n,i,a),e!==null&&(ot(e,n,a),Ir(e,n,a))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var a=mt(),i=za(a);i.tag=1,i.payload=e,t!=null&&(i.callback=t),e=Da(n,i,a),e!==null&&(ot(e,n,a),Ir(e,n,a))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=mt(),a=za(t);a.tag=2,e!=null&&(a.callback=e),e=Da(n,a,t),e!==null&&(ot(e,n,t),Ir(e,n,t))}};function Qf(n,e,t,a,i,l,s){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(a,l,s):e.prototype&&e.prototype.isPureReactComponent?!Br(t,a)||!Br(i,l):!0}function Xf(n,e,t,a){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,a),e.state!==n&&vc.enqueueReplaceState(e,e.state,null)}function mi(n,e){var t=e;if("ref"in e){t={};for(var a in e)a!=="ref"&&(t[a]=e[a])}if(n=n.defaultProps){t===e&&(t=Z({},t));for(var i in n)t[i]===void 0&&(t[i]=n[i])}return t}function Jf(n){Yl(n)}function Zf(n){console.error(n)}function Ff(n){Yl(n)}function ps(n,e){try{var t=n.onUncaughtError;t(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Pf(n,e,t){try{var a=n.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function bc(n,e,t){return t=za(t),t.tag=3,t.payload={element:null},t.callback=function(){ps(n,e)},t}function Wf(n){return n=za(n),n.tag=3,n}function $f(n,e,t,a){var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var l=a.value;n.payload=function(){return i(l)},n.callback=function(){Pf(e,t,a)}}var s=t.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Pf(e,t,a),typeof i!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function Nb(n,e,t,a,i){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=t.alternate,e!==null&&oi(e,t,i,!0),t=He.current,t!==null){switch(t.tag){case 31:case 13:case 19:return Qe===null?Ls():t.alternate===null&&ge===0&&(ge=3),t.flags&=-257,t.flags|=65536,t.lanes=i,a===es?t.flags|=16384:(e=t.updateQueue,e===null?t.updateQueue=new Set([a]):e.add(a),tu(n,a,i)),!1;case 22:return t.flags|=65536,a===es?t.flags|=16384:(e=t.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=e):(t=e.retryQueue,t===null?e.retryQueue=new Set([a]):t.add(a)),tu(n,a,i)),!1}throw Error(d(435,t.tag))}return tu(n,a,i),Ls(),!1}if(An)return e=He.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,a!==Uo&&(n=Error(d(422),{cause:a}),qr(St(n,t)))):(a!==Uo&&(e=Error(d(423),{cause:a}),qr(St(e,t))),n=n.current.alternate,n.flags|=65536,i&=-i,n.lanes|=i,a=St(a,t),i=bc(n.stateNode,a,i),Jo(n,i),ge!==4&&(ge=2)),!1;var l=Error(d(520),{cause:a});if(l=St(l,t),rl===null?rl=[l]:rl.push(l),ge!==4&&(ge=2),e===null)return!0;a=St(a,t),t=e;do{switch(t.tag){case 3:return t.flags|=65536,n=i&-i,t.lanes|=n,n=bc(t.stateNode,a,n),Jo(t,n),!1;case 1:if(e=t.type,l=t.stateNode,(t.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(Va===null||!Va.has(l))))return t.flags|=65536,i&=-i,t.lanes|=i,i=Wf(i),$f(i,n,t,a),Jo(t,i),!1;break;case 22:if(t.memoizedState!==null)return t.flags|=65536,!1}t=t.return}while(t!==null);return!1}var yc=Error(d(461)),Ne=!1;function ke(n,e,t,a){e.child=n===null?tf(e,null,t,a):gi(e,n.child,t,a)}function nh(n,e,t,a,i){t=t.render;var l=e.ref;if("ref"in a){var s={};for(var c in a)c!=="ref"&&(s[c]=a[c])}else s=a;return ci(e),a=ec(n,e,t,s,l,i),c=tc(),n!==null&&!Ne?(ac(n,e,i),ga(n,e,i)):(An&&c&&Jl(e),e.flags|=1,ke(n,e,a,i),e.child)}function eh(n,e,t,a,i){if(n===null){var l=t.type;return typeof l=="function"&&!zo(l)&&l.defaultProps===void 0&&t.compare===null?(e.tag=15,e.type=l,th(n,e,l,a,i)):(n=Ql(t.type,null,a,e,e.mode,i),n.ref=e.ref,n.return=e,e.child=n)}if(l=n.child,!Ec(n,i)){var s=l.memoizedProps;if(t=t.compare,t=t!==null?t:Br,t(s,a)&&n.ref===e.ref)return ga(n,e,i)}return e.flags|=1,n=oa(l,a),n.ref=e.ref,n.return=e,e.child=n}function th(n,e,t,a,i){if(n!==null){var l=n.memoizedProps;if(Br(l,a)&&n.ref===e.ref)if(Ne=!1,e.pendingProps=a=l,Ec(n,i))(n.flags&131072)!==0&&(Ne=!0);else return e.lanes=n.lanes,ga(n,e,i)}return xc(n,e,t,a,i)}function ah(n,e,t,a){var i=a.children,l=n!==null?n.memoizedState:null;if(n===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(l=l!==null?l.baseLanes|t:t,n!==null){for(a=e.child=n.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;a=i&~l}else a=0,e.child=null;return ih(n,e,l,t,a)}if((t&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},n!==null&&$l(e,l!==null?l.cachePool:null),l!==null?lf(e,l):Fo(),sf(e);else return a=e.lanes=536870912,ih(n,e,l!==null?l.baseLanes|t:t,t,a)}else l!==null?($l(e,l.cachePool),lf(e,l),Ua(),e.memoizedState=null):(n!==null&&$l(e,null),Fo(),Ua());return ke(n,e,i,t),e.child}function Wr(n,e){return n!==null&&n.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function ih(n,e,t,a,i){var l=Ko();return l=l===null?null:{parent:Se._currentValue,pool:l},e.memoizedState={baseLanes:t,cachePool:l},n!==null&&$l(e,null),Fo(),sf(e),n!==null&&oi(n,e,a,!0),e.childLanes=i,null}function ms(n,e){return e=vs({mode:e.mode,children:e.children},n.mode),e.ref=n.ref,n.child=e,e.return=n,e}function rh(n,e,t){return gi(e,n.child,null,t),n=ms(e,e.pendingProps),n.flags|=2,ft(e),e.memoizedState=null,n}function wb(n,e,t){var a=e.pendingProps,i=(e.flags&128)!==0;if(e.flags&=-129,n===null){if(An){if(a.mode==="hidden")return n=ms(e,a),e.lanes=536870912,n.memoizedState={baseLanes:0,cachePool:null},Wr(null,n);if(Wo(e),(n=ie)?(n=Mg(n,wt),n=n!==null&&n.data==="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:Oa!==null?{id:Vt,overflow:Kt}:null,retryLane:536870912,hydrationErrors:null},t=Gd(n),t.return=e,e.child=t,Re=e,ie=null)):n=null,n===null)throw ka(e);return e.lanes=536870912,null}return ms(e,a)}var l=n.memoizedState;if(l!==null){var s=l.dehydrated;if(Wo(e),i)if(e.flags&256)e.flags&=-257,e=rh(n,e,t);else if(e.memoizedState!==null)e.child=n.child,e.flags|=128,e=null;else throw Error(d(558));else if(Ne||oi(n,e,t,!1),i=(t&n.childLanes)!==0,Ne||i){if(La.current===null){if(a=te,a!==null&&(s=Er(a,t),s!==0&&s!==l.retryLane))throw l.retryLane=s,ii(n,s),ot(a,n,s),yc;Ls()}e=rh(n,e,t)}else n=l.treeContext,ie=Ot(s.nextSibling),Re=e,An=!0,Aa=null,wt=!1,n!==null&&Kd(e,n),e=ms(e,a),e.flags|=134221824;return e}return n=oa(n.child,{mode:a.mode,children:a.children}),n.ref=e.ref,e.child=n,n.return=e,n}function Ji(n,e){var t=e.ref;if(t===null)n!==null&&n.ref!==null&&(e.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(d(284));(n===null||n.ref!==t)&&(e.flags|=4194816)}}function xc(n,e,t,a,i){return ci(e),t=ec(n,e,t,a,void 0,i),a=tc(),n!==null&&!Ne?(ac(n,e,i),ga(n,e,i)):(An&&a&&Jl(e),e.flags|=1,ke(n,e,t,i),e.child)}function lh(n,e,t,a,i,l){return ci(e),e.updateQueue=null,t=cf(e,a,t,i),of(n),a=tc(),n!==null&&!Ne?(ac(n,e,l),ga(n,e,l)):(An&&a&&Jl(e),e.flags|=1,ke(n,e,t,l),e.child)}function sh(n,e,t,a,i){if(ci(e),e.stateNode===null){var l=Ui,s=t.contextType;typeof s=="object"&&s!==null&&(l=Ue(s)),l=new t(a,l),e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=vc,e.stateNode=l,l._reactInternals=e,l=e.stateNode,l.props=a,l.state=e.memoizedState,l.refs={},Qo(e),s=t.contextType,l.context=typeof s=="object"&&s!==null?Ue(s):Ui,l.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(mc(e,t,s,a),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(s=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),s!==l.state&&vc.enqueueReplaceState(l,l.state,null),Xr(e,a,l,i),Qr(),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(n===null){l=e.stateNode;var c=e.memoizedProps,f=mi(t,c);l.props=f;var T=l.context,w=t.contextType;s=Ui,typeof w=="object"&&w!==null&&(s=Ue(w));var k=t.getDerivedStateFromProps;w=typeof k=="function"||typeof l.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,w||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c||T!==s)&&Xf(e,l,a,s),Ra=!1;var x=e.memoizedState;l.state=x,Xr(e,a,l,i),Qr(),T=e.memoizedState,c||x!==T||Ra?(typeof k=="function"&&(mc(e,t,k,a),T=e.memoizedState),(f=Ra||Qf(e,t,f,a,x,T,s))?(w||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=T),l.props=a,l.state=T,l.context=s,a=f):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{l=e.stateNode,Xo(n,e),s=e.memoizedProps,w=mi(t,s),l.props=w,k=e.pendingProps,x=l.context,T=t.contextType,f=Ui,typeof T=="object"&&T!==null&&(f=Ue(T)),c=t.getDerivedStateFromProps,(T=typeof c=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==k||x!==f)&&Xf(e,l,a,f),Ra=!1,x=e.memoizedState,l.state=x,Xr(e,a,l,i),Qr();var j=e.memoizedState;s!==k||x!==j||Ra||n!==null&&n.dependencies!==null&&Pl(n.dependencies)?(typeof c=="function"&&(mc(e,t,c,a),j=e.memoizedState),(w=Ra||Qf(e,t,w,a,x,j,f)||n!==null&&n.dependencies!==null&&Pl(n.dependencies))?(T||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,j,f),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,j,f)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===n.memoizedProps&&x===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===n.memoizedProps&&x===n.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=j),l.props=a,l.state=j,l.context=f,a=w):(typeof l.componentDidUpdate!="function"||s===n.memoizedProps&&x===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===n.memoizedProps&&x===n.memoizedState||(e.flags|=1024),a=!1)}return l=a,Ji(n,e),a=(e.flags&128)!==0,l||a?(l=e.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:l.render(),e.flags|=1,n!==null&&a?(e.child=gi(e,n.child,null,i),e.child=gi(e,null,t,i)):ke(n,e,t,i),e.memoizedState=l.state,n=e.child):n=ga(n,e,i),n}function oh(n,e,t,a){return li(),e.flags|=256,ke(n,e,t,a),e.child}var _c={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Tc(n){return{baseLanes:n,cachePool:Fd()}}function Sc(n,e,t){return n=n!==null?n.childLanes&~t:0,e&&(n|=pt),n}function ch(n,e,t){var a=e.pendingProps,i=!1,l=(e.flags&128)!==0,s;if((s=l)||(s=n!==null&&n.memoizedState===null?!1:(qe.current&2)!==0),s&&(i=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,n===null){if(An){if(i?Ba(e):Ua(),(n=ie)?(n=Mg(n,wt),n=n!==null&&n.data!=="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:Oa!==null?{id:Vt,overflow:Kt}:null,retryLane:536870912,hydrationErrors:null},t=Gd(n),t.return=e,e.child=t,Re=e,ie=null)):n=null,n===null)throw ka(e);return Tu(n)?e.lanes=32:e.lanes=536870912,null}return l=a.children,a=a.fallback,i?(Ua(),i=e.mode,l=vs({mode:"hidden",children:l},i),a=ri(a,i,t,null),l.return=e,a.return=e,l.sibling=a,e.child=l,a=e.child,a.memoizedState=Tc(t),a.childLanes=Sc(n,s,t),e.memoizedState=_c,Wr(null,a)):(Ba(e),jc(e,l))}var c=n.memoizedState;if(c!==null){var f=c.dehydrated;if(f!==null)return Eb(n,e,l,s,a,f,c,t)}return i?(Ua(),i=a.fallback,l=e.mode,c=n.child,f=c.sibling,a=oa(c,{mode:"hidden",children:a.children}),a.subtreeFlags=c.subtreeFlags&1206910976,f!==null?i=oa(f,i):(i=ri(i,l,t,null),i.flags|=2),i.return=e,a.return=e,a.sibling=i,e.child=a,Wr(null,a),a=e.child,i=n.child.memoizedState,i===null?i=Tc(t):(l=i.cachePool,l!==null?(c=Se._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=Fd(),i={baseLanes:i.baseLanes|t,cachePool:l}),a.memoizedState=i,a.childLanes=Sc(n,s,t),e.memoizedState=_c,Wr(n.child,a)):(Ba(e),t=n.child,n=t.sibling,t=oa(t,{mode:"visible",children:a.children}),t.return=e,t.sibling=null,n!==null&&(s=e.deletions,s===null?(e.deletions=[n],e.flags|=16):s.push(n)),e.child=t,e.memoizedState=null,t)}function jc(n,e){return e=vs({mode:"visible",children:e},n.mode),e.return=n,n.child=e}function vs(n,e){return n=it(22,n,null,e),n.lanes=0,n}function bs(n,e,t){return gi(e,n.child,null,t),n=jc(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Eb(n,e,t,a,i,l,s,c){if(t)return e.flags&256?(Ba(e),e.flags&=-257,bs(n,e,c)):e.memoizedState!==null?(Ua(),e.child=n.child,e.flags|=128,null):(Ua(),l=i.fallback,s=e.mode,i=vs({mode:"visible",children:i.children},s),l=ri(l,s,c,null),l.flags|=2,i.return=e,l.return=e,i.sibling=l,e.child=i,gi(e,n.child,null,c),i=e.child,i.memoizedState=Tc(c),i.childLanes=Sc(n,a,c),e.memoizedState=_c,Wr(null,i));if(Ba(e),Tu(l)){if(a=l.nextSibling&&l.nextSibling.dataset,a)var f=a.dgst;return a=f,a!==""&&(i=Error(d(419)),i.stack="",i.digest=a,qr({value:i,source:null,stack:null})),bs(n,e,c)}if(Ne||oi(n,e,c,!1),a=(c&n.childLanes)!==0,Ne||a){if(La.current!==null)return bs(n,e,c);if(a=te,a!==null&&(i=Er(a,c),i!==0&&i!==s.retryLane))throw s.retryLane=i,ii(n,i),ot(a,n,i),yc;return _u(l)||Ls(),bs(n,e,c)}return _u(l)?(e.flags|=192,e.child=n.child,null):(n=s.treeContext,ie=Ot(l.nextSibling),Re=e,An=!0,Aa=null,wt=!1,n!==null&&Kd(e,n),e=jc(e,i.children),e.flags|=134221824,e)}function uh(n,e,t){n.lanes|=e;var a=n.alternate;a!==null&&(a.lanes|=e),Fl(n.return,e,t)}function dh(n){for(var e=null;n!==null;){var t=n.alternate;t!==null&&rs(t)===null&&(e=n),n=n.sibling}return e}function ys(n,e,t,a,i,l){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:i,treeForkCount:l}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=t,s.tailMode=i,s.treeForkCount=l)}function Nc(n){var e=n.child;for(n.child=null;e!==null;){var t=e.sibling;e.sibling=n.child,n.child=e,e=t}}function wc(n,e,t){var a=e.pendingProps,i=a.revealOrder,l=a.tail;a=a.children;var s=qe.current;if(e.flags&128)return Jr(e,s),null;var c=(s&2)!==0;if(c?(s=s&1|2,e.flags|=128):s&=1,Jr(e,s),i==="backwards"&&n!==null?(Nc(n),ke(n,e,a,t),Nc(n)):ke(n,e,a,t),a=An?Hr:0,!c&&n!==null&&(n.flags&128)!==0)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&uh(n,t,e);else if(n.tag===19)uh(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(i){case"backwards":t=dh(e.child),t===null?(i=e.child,e.child=null):(i=t.sibling,t.sibling=null,Nc(e)),ys(e,!0,i,null,l,a);break;case"unstable_legacy-backwards":for(t=null,i=e.child,e.child=null;i!==null;){if(n=i.alternate,n!==null&&rs(n)===null){e.child=i;break}n=i.sibling,i.sibling=t,t=i,i=n}ys(e,!0,t,null,l,a);break;case"together":ys(e,!1,null,null,void 0,a);break;case"independent":e.memoizedState=null;break;default:t=dh(e.child),t===null?(i=e.child,e.child=null):(i=t.sibling,t.sibling=null),ys(e,!1,i,t,l,a)}return e.child}function fh(n,e,t){var a=e.pendingProps;return Ma(e,e.type,a.value),ke(n,e,a.children,t),e.child}function ga(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Ya|=e.lanes,(t&e.childLanes)===0)if(n!==null){if(oi(n,e,t,!1),(t&e.childLanes)===0)return null}else return null;if(n!==null&&e.child!==n.child)throw Error(d(153));if(e.child!==null){for(n=e.child,t=oa(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=oa(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Ec(n,e){return(n.lanes&e)!==0?!0:(n=n.dependencies,!!(n!==null&&Pl(n)))}function Ob(n,e,t){switch(e.tag){case 3:$a(e,e.stateNode.containerInfo),Ma(e,Se,n.memoizedState.cache),li();break;case 27:case 5:Ni(e);break;case 4:$a(e,e.stateNode.containerInfo);break;case 10:Ma(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Wo(e),null;break;case 13:var a=e.memoizedState;if(a!==null){if(a.dehydrated!==null)return Ba(e),e.flags|=128,null;a=oi(n,e,t,!1);var i=e.child.childLanes;return a||(t&i)!==0?ch(n,e,t):(Ba(e),n=ga(n,e,t),n!==null?n.sibling:null)}Ba(e);break;case 19:if(e.flags&128)return wc(n,e,t);if(i=(n.flags&128)!==0,a=(t&e.childLanes)!==0,a||(oi(n,e,t,!1),a=(t&e.childLanes)!==0),i){if(a)return wc(n,e,t);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Jr(e,qe.current),a)break;return null;case 22:return e.lanes=0,ah(n,e,t,e.pendingProps);case 24:Ma(e,Se,n.memoizedState.cache)}return ga(n,e,t)}function hh(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps)Ne=!0;else{if(!Ec(n,t)&&(e.flags&128)===0)return Ne=!1,Ob(n,e,t);Ne=(n.flags&131072)!==0}else Ne=!1,An&&(e.flags&1048576)!==0&&Vd(e,Hr,e.index);switch(e.lanes=0,e.tag){case 16:n:{var a=e.pendingProps;if(n=fi(e.elementType),e.type=n,typeof n=="function")zo(n)?(a=mi(n,a),e.tag=1,e=sh(null,e,n,a,t)):(e.tag=0,e=xc(null,e,n,a,t));else{if(n!=null){var i=n.$$typeof;if(i===Y){e.tag=11,e=nh(null,e,n,a,t);break n}else if(i===kn){e.tag=14,e=eh(null,e,n,a,t);break n}else if(i===oe){e.tag=10,e.type=n,e=fh(null,e,t);break n}}throw e=Cn(n)||n,Error(d(306,e,""))}}return e;case 0:return xc(n,e,e.type,e.pendingProps,t);case 1:return a=e.type,i=mi(a,e.pendingProps),sh(n,e,a,i,t);case 3:n:{if($a(e,e.stateNode.containerInfo),n===null)throw Error(d(387));a=e.pendingProps;var l=e.memoizedState;i=l.element,Xo(n,e),Xr(e,a,null,t);var s=e.memoizedState;if(a=s.cache,Ma(e,Se,a),a!==l.cache&&Go(e,[Se],t,!0),Qr(),a=s.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){e=oh(n,e,a,t);break n}else if(a!==i){i=St(Error(d(424)),e),qr(i),e=oh(n,e,a,t);break n}else for(n=e.stateNode.containerInfo,n.nodeType===9?n=n.body:n=n.nodeName==="HTML"?n.ownerDocument.body:n,ie=Ot(n.firstChild),Re=e,An=!0,Aa=null,wt=!0,t=tf(e,null,a,t),e.child=t;t;)t.flags=t.flags&-3|134221824,t=t.sibling;else{if(li(),a===i){e=ga(n,e,t);break n}ke(n,e,a,t)}e=e.child}return e;case 26:return Ji(n,e),n===null?(t=Ug(e.type,null,e.pendingProps,null))?e.memoizedState=t:An||(e.stateNode=vg(e.type,e.pendingProps,Ht.current,e)):e.memoizedState=Ug(e.type,n.memoizedProps,e.pendingProps,n.memoizedState),null;case 27:return Ni(e),n===null&&An&&(a=e.stateNode=zg(e.type,e.pendingProps,Ht.current),Re=e,wt=!0,i=ie,Qa(e.type)?(Su=i,ie=Ot(a.firstChild)):ie=i),ke(n,e,e.pendingProps.children,t),Ji(n,e),n===null&&(e.flags|=4194304),e.child;case 5:return n===null&&An&&((i=a=ie)&&(a=Ty(a,e.type,e.pendingProps,wt),a!==null?(e.stateNode=a,Re=e,ie=Ot(a.firstChild),wt=!1,i=!0):i=!1),i||ka(e)),Ni(e),i=e.type,l=e.pendingProps,s=n!==null?n.memoizedProps:null,a=l.children,gu(i,l)?a=null:s!==null&&gu(i,s)&&(e.flags|=32),e.memoizedState!==null&&(i=ec(n,e,vb,null,null,t),fr._currentValue=i),Ji(n,e),ke(n,e,a,t),e.child;case 6:return n===null&&An&&((n=t=ie)&&(t=Sy(t,e.pendingProps,wt),t!==null?(e.stateNode=t,Re=e,ie=null,n=!0):n=!1),n||ka(e)),null;case 13:return ch(n,e,t);case 4:return $a(e,e.stateNode.containerInfo),a=e.pendingProps,n===null?e.child=gi(e,null,a,t):ke(n,e,a,t),e.child;case 11:return nh(n,e,e.type,e.pendingProps,t);case 7:return a=e.pendingProps,Ji(n,e),ke(n,e,a,t),e.child;case 8:return ke(n,e,e.pendingProps.children,t),e.child;case 12:return ke(n,e,e.pendingProps.children,t),e.child;case 10:return fh(n,e,t);case 9:return i=e.type._context,a=e.pendingProps.children,ci(e),i=Ue(i),a=a(i),e.flags|=1,ke(n,e,a,t),e.child;case 14:return eh(n,e,e.type,e.pendingProps,t);case 15:return th(n,e,e.type,e.pendingProps,t);case 19:return wc(n,e,t);case 31:return wb(n,e,t);case 22:return ah(n,e,t,e.pendingProps);case 24:return ci(e),a=Ue(Se),n===null?(i=Ko(),i===null&&(i=te,l=Yo(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=t),i=l),e.memoizedState={parent:a,cache:i},Qo(e),Ma(e,Se,i)):((n.lanes&t)!==0&&(Xo(n,e),Xr(e,null,null,t),Qr()),i=n.memoizedState,l=e.memoizedState,i.parent!==a?(i={parent:a,cache:a},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),Ma(e,Se,a)):(a=l.cache,Ma(e,Se,a),a!==i.cache&&Go(e,[Se],t,!0))),ke(n,e,e.pendingProps.children,t),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),a=e.pendingProps,a.name!=null&&a.name!=="auto"?e.flags|=n===null?18882560:18874368:An&&Jl(e),n!==null&&n.memoizedProps.name!==a.name?e.flags|=4194816:Ji(n,e),ke(n,e,a.children,t),e.child;case 29:throw e.pendingProps}throw Error(d(156,e.tag))}function pa(n){n.flags|=4}function Oc(n,e,t,a,i){var l;if((l=(n.mode&32)!==0)&&(l=t===null?Yg(e,a):Yg(e,a)&&(a.src!==t.src||a.srcSet!==t.srcSet)),l){if(n.flags|=16777216,(i&335544128)===i)if(n.stateNode.complete)n.flags|=8192;else if(Jh())n.flags|=8192;else throw hi=es,Io}else n.flags&=-16777217}function gh(n,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Vg(e))if(Jh())n.flags|=8192;else throw hi=es,Io}function xs(n,e){e!==null&&(n.flags|=4),n.flags&16384&&(e=n.tag!==22?wr():536870912,n.lanes|=e,$i|=e)}function $r(n,e){if(!An)switch(n.tailMode){case"visible":break;case"collapsed":for(var t=n.tail,a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:a.sibling=null;break;default:for(e=n.tail,t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null}}function re(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,a=0;if(e)for(var i=n.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags&1206910976,a|=i.flags&1206910976,i.return=n,i=i.sibling;else for(i=n.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=n,i=i.sibling;return n.subtreeFlags|=a,n.childLanes=t,e}function Ab(n,e,t){var a=e.pendingProps;switch(Bo(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(e),null;case 1:return re(e),null;case 3:return t=e.stateNode,a=null,n!==null&&(a=n.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),da(Se),nt(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(n===null||n.child===null)&&(Gi(e)?pa(e):n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ho())),re(e),null;case 26:var i=e.type,l=e.memoizedState;return n===null?(pa(e),l!==null?(re(e),gh(e,l)):(re(e),Oc(e,i,null,a,t))):l?l!==n.memoizedState?(pa(e),re(e),gh(e,l)):(re(e),e.flags&=-16777217):(n=n.memoizedProps,n!==a&&pa(e),re(e),Oc(e,i,n,a,t)),null;case 27:if(kt(e),t=Ht.current,i=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==a&&pa(e);else{if(!a){if(e.stateNode===null)throw Error(d(166));return re(e),e.subtreeFlags&=-33554433,null}n=yt.current,Gi(e)?Id(e):(n=zg(i,a,t),e.stateNode=n,pa(e))}return re(e),e.subtreeFlags&=-33554433,null;case 5:if(kt(e),i=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==a&&pa(e);else{if(!a){if(e.stateNode===null)throw Error(d(166));return re(e),e.subtreeFlags&=-33554433,null}if(l=yt.current,Gi(e))Id(e);else{var s=ul(Ht.current);switch(l){case 1:l=s.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:l=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":l=s.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":l=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":l=s.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof a.is=="string"?s.createElement("select",{is:a.is}):s.createElement("select"),a.multiple?l.multiple=!0:a.size&&(l.size=a.size);break;default:l=typeof a.is=="string"?s.createElement(i,{is:a.is}):s.createElement(i)}}l[Ae]=e,l[B]=a;n:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)l.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break n;for(;s.sibling===null;){if(s.return===null||s.return===e)break n;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=l;n:switch(Ye(l,i,a),i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break n;case"img":a=!0;break n;default:a=!1}a&&pa(e)}}return re(e),e.subtreeFlags&=-33554433,Oc(e,e.type,n===null?null:n.memoizedProps,e.pendingProps,t),null;case 6:if(n&&e.stateNode!=null)n.memoizedProps!==a&&pa(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(d(166));if(n=Ht.current,Gi(e)){if(n=e.stateNode,t=e.memoizedProps,a=null,i=Re,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}n[Ae]=e,n=!!(n.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||hg(n.nodeValue,t)),n||ka(e,!0)}else n=ul(n).createTextNode(a),n[Ae]=e,e.stateNode=n}return re(e),null;case 31:if(t=e.memoizedState,n===null||n.memoizedState!==null){if(a=Gi(e),t!==null){if(n===null){if(!a)throw Error(d(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(557));n[Ae]=e}else li(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;re(e),n=!1}else t=Ho(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=t),n=!0;if(!n)return e.flags&256?(ft(e),e):(ft(e),null);if((e.flags&128)!==0)throw Error(d(558))}return re(e),null;case 13:if(a=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(i=Gi(e),a!==null&&a.dehydrated!==null){if(n===null){if(!i)throw Error(d(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(d(317));i[Ae]=e}else li(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;re(e),i=!1}else i=Ho(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(ft(e),e):(ft(e),null)}return ft(e),(e.flags&128)!==0?(e.lanes=t,e):(t=a!==null,n=n!==null&&n.memoizedState!==null,t&&(a=e.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==i&&(a.flags|=2048)),t!==n&&t&&(e.child.flags|=8192),xs(e,e.updateQueue),re(e),null);case 4:return nt(),n===null&&cu(e.stateNode.containerInfo),e.flags|=67108864,re(e),null;case 10:return da(e.type),re(e),null;case 19:if($o(e),a=e.memoizedState,a===null)return re(e),null;if(i=(e.flags&128)!==0,l=a.rendering,l===null)if(i)$r(a,!1);else{if(ge!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(l=rs(n),l!==null){for(e.flags|=128,$r(a,!1),n=l.updateQueue,e.updateQueue=n,xs(e,n),e.subtreeFlags=0,n=t,t=e.child;t!==null;)qd(t,n),t=t.sibling;return Jr(e,qe.current&1|2),An&&ca(e,a.treeForkCount),e.child}n=n.sibling}a.tail!==null&&Ie()>Cs&&(e.flags|=128,i=!0,$r(a,!1),e.lanes=4194304)}else{if(!i)if(n=rs(l),n!==null){if(e.flags|=128,i=!0,n=n.updateQueue,e.updateQueue=n,xs(e,n),$r(a,!0),a.tail===null&&a.tailMode!=="collapsed"&&a.tailMode!=="visible"&&!l.alternate&&!An)return re(e),null}else 2*Ie()-a.renderingStartTime>Cs&&t!==536870912&&(e.flags|=128,i=!0,$r(a,!1),e.lanes=4194304);a.isBackwards?(l.sibling=e.child,e.child=l):(n=a.last,n!==null?n.sibling=l:e.child=l,a.last=l)}if(a.tail!==null){n=a.tail;n:{for(t=n;t!==null;){if(t.alternate!==null){t=!1;break n}t=t.sibling}t=!0}return a.rendering=n,a.tail=n.sibling,a.renderingStartTime=Ie(),n.sibling=null,l=qe.current,l=i?l&1|2:l&1,a.tailMode==="visible"||a.tailMode==="collapsed"||!t||An?Jr(e,l):(t=l,Pn(He,e),Pn(qe,t),Qe===null&&(Qe=e)),An&&ca(e,a.treeForkCount),n}return re(e),null;case 22:case 23:return ft(e),Po(),a=e.memoizedState!==null,n!==null?n.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(t&536870912)!==0&&(e.flags&128)===0&&(re(e),e.subtreeFlags&6&&(e.flags|=8192)):re(e),t=e.updateQueue,t!==null&&xs(e,t.retryQueue),t=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==t&&(e.flags|=2048),n!==null&&Oe(di),null;case 24:return t=null,n!==null&&(t=n.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),da(Se),re(e),null;case 25:return null;case 30:return e.flags|=33554432,re(e),null}throw Error(d(156,e.tag))}function kb(n,e){switch(Bo(e),e.tag){case 1:return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return da(Se),nt(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 26:case 27:case 5:return kt(e),null;case 31:if(e.memoizedState!==null){if(ft(e),e.alternate===null)throw Error(d(340));li()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 13:if(ft(e),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(d(340));li()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return $o(e),n=e.flags,n&65536?(e.flags=n&-65537|128,n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null),e.flags|=4,e):null;case 4:return nt(),null;case 10:return da(e.type),null;case 22:case 23:return ft(e),Po(),n!==null&&Oe(di),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 24:return da(Se),null;case 25:return null;default:return null}}function ph(n,e){switch(Bo(e),e.tag){case 3:da(Se),nt();break;case 26:case 27:case 5:kt(e);break;case 4:nt();break;case 31:e.memoizedState!==null&&ft(e);break;case 13:ft(e);break;case 19:$o(e);break;case 10:da(e.type);break;case 22:case 23:ft(e),Po(),n!==null&&Oe(di);break;case 24:da(Se)}}function nl(n,e){try{var t=e.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var i=a.next;t=i;do{if((t.tag&n)===n){a=void 0;var l=t.create,s=t.inst;a=l(),s.destroy=a}t=t.next}while(t!==i)}}catch(c){Zn(e,e.return,c)}}function Ha(n,e,t){try{var a=e.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&n)===n){var s=a.inst,c=s.destroy;if(c!==void 0){s.destroy=void 0,i=e;var f=t,T=c;try{T()}catch(w){Zn(i,f,w)}}}a=a.next}while(a!==l)}}catch(w){Zn(e,e.return,w)}}function mh(n){var e=n.updateQueue;if(e!==null){var t=n.stateNode;try{rf(e,t)}catch(a){Zn(n,n.return,a)}}}function vh(n,e,t){t.props=mi(n.type,n.memoizedProps),t.state=n.memoizedState;try{t.componentWillUnmount()}catch(a){Zn(n,e,a)}}function It(n,e){try{var t=n.ref;if(t!==null){switch(n.tag){case 26:case 27:case 5:var a=n.stateNode;break;case 30:var i=n.stateNode,l=la(n.memoizedProps,i);(i.ref===null||i.ref.name!==l)&&(i.ref=jg(l)),a=i.ref;break;case 7:if(n.stateNode===null){var s=new vt(n);b(n.child,!1,xy,s,void 0,void 0),n.stateNode=s}a=n.stateNode;break;default:a=n.stateNode}typeof t=="function"?n.refCleanup=t(a):t.current=a}}catch(c){Zn(n,e,c)}}function Ge(n,e){var t=n.ref,a=n.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(i){Zn(n,e,i)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(i){Zn(n,e,i)}else t.current=null}function _s(n,e){if((n.tag===5||n.tag===27||n.tag===6)&&n.alternate===null&&e!==null)for(var t=0;t<e.length;t++)kg(n.stateNode,e[t])}function bh(n){for(var e=n.return;e!==null&&(kc(e)&&kg(n.stateNode,e.stateNode),!Ac(e));)e=e.return}function el(n){for(var e=n.return;e!==null&&(kc(e)&&_y(n.stateNode,e.stateNode),!Ac(e));)e=e.return}function Ac(n){return n.tag===5||n.tag===3||n.tag===27}function kc(n){return n&&n.tag===7&&n.stateNode!==null}function Mc(n){var e=n.type,t=n.memoizedProps,a=n.stateNode;try{n:switch(e){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break n;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(i){Zn(n,n.return,i)}}function Cc(n,e,t){try{var a=n.stateNode;ty(a,n.type,t,e),a[B]=e}catch(i){Zn(n,n.return,i)}}function yh(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Qa(n.type)||n.tag===4}function Rc(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||yh(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Qa(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function zc(n,e,t,a){var i=n.tag;if(i===5||i===6)i=n.stateNode,e?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(i,e):(e=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.appendChild(i),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Yt)),_s(n,a),Un=!0;else if(i!==4&&(i===27&&(_s(n,a),a=null,Qa(n.type)&&(t=n.stateNode,e=null)),n=n.child,n!==null))for(zc(n,e,t,a),n=n.sibling;n!==null;)zc(n,e,t,a),n=n.sibling}function Ts(n,e,t,a){var i=n.tag;if(i===5||i===6)i=n.stateNode,e?t.insertBefore(i,e):t.appendChild(i),_s(n,a),Un=!0;else if(i!==4&&(i===27&&(_s(n,a),a=null,Qa(n.type)&&(t=n.stateNode)),n=n.child,n!==null))for(Ts(n,e,t,a),n=n.sibling;n!==null;)Ts(n,e,t,a),n=n.sibling}function xh(n){var e=n.stateNode,t=n.memoizedProps;try{for(var a=n.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Ye(e,a,t),e[Ae]=n,e[B]=t}catch(l){Zn(n,n.return,l)}}var Ss=!1,ht=null;function _h(n){(n.tag===30||(n.subtreeFlags&33554432)!==0)&&(Ss=!0)}var Qt=null;function Th(){var n=Qt;return Qt=null,n}var rt=0;function Zi(n,e,t,a,i){return rt=0,Sh(n.child,e,t,a,i)}function Sh(n,e,t,a,i){for(var l=!1;n!==null;){if(n.tag===5){var s=n.stateNode;if(a!==null){var c=vu(s);a.push(c),c.view&&(l=!0)}else l||vu(s).view&&(l=!0);Ss=!0,Tg(s,rt===0?e:e+"_"+rt,t),rt++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&i||Sh(n.child,e,t,a,i)&&(l=!0));n=n.sibling}return l}function Xt(n,e){for(;n!==null;)n.tag===5?Sg(n.stateNode,n.memoizedProps):(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&e||Xt(n.child,e)),n=n.sibling}function js(n){if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if((n.tag!==22||n.memoizedState===null)&&(js(n),n.tag===30&&(n.flags&18874368)!==0&&n.stateNode.paired)){var e=n.memoizedProps;if(e.name==null||e.name==="auto")throw Error(d(544));var t=e.name;e=sa(e.default,e.share),e!=="none"&&(Zi(n,t,e,null,!1)||Xt(n.child,!1))}n=n.sibling}}function Dc(n,e){if(n.tag===30){var t=n.stateNode,a=n.memoizedProps,i=la(a,t),l=sa(a.default,t.paired?a.share:a.enter);l!=="none"?Zi(n,i,l,null,!1)?(js(n),t.paired||e||ar(n,a.onEnter)):Xt(n.child,!1):js(n)}else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)Dc(n,e),n=n.sibling;else js(n)}function Lc(n){if(ht!==null&&ht.size!==0){var e=ht;if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if(n.tag!==22||n.memoizedState===null){if(n.tag===30&&(n.flags&18874368)!==0){var t=n.memoizedProps,a=t.name;if(a!=null&&a!=="auto"){var i=e.get(a);if(i!==void 0){var l=sa(t.default,t.share);if(l!=="none"&&(Zi(n,a,l,null,!1)?(l=n.stateNode,i.paired=l,l.paired=i,ar(n,t.onShare)):Xt(n.child,!1)),e.delete(a),e.size===0)break}}}Lc(n)}n=n.sibling}}}function Bc(n){if(n.tag===30){var e=n.memoizedProps,t=la(e,n.stateNode),a=ht!==null?ht.get(t):void 0,i=sa(e.default,a!==void 0?e.share:e.exit);i!=="none"&&(Zi(n,t,i,null,!1)?a!==void 0?(i=n.stateNode,a.paired=i,i.paired=a,ht.delete(t),ar(n,e.onShare)):ar(n,e.onExit):Xt(n.child,!1)),ht!==null&&Lc(n)}else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)Bc(n),n=n.sibling;else ht!==null&&Lc(n)}function jh(n){for(n=n.child;n!==null;){if(n.tag===30){var e=n.memoizedProps,t=la(e,n.stateNode);e=sa(e.default,e.update),n.flags&=-5,e!=="none"&&Zi(n,t,e,n.memoizedState=[],!1)}else(n.subtreeFlags&33554432)!==0&&jh(n);n=n.sibling}}function Uc(n){if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if(n.tag!==22||n.memoizedState===null){if(n.tag===30&&(n.flags&18874368)!==0){var e=n.stateNode;e.paired!==null&&(e.paired=null,Xt(n.child,!1))}Uc(n)}n=n.sibling}}function Ns(n){if(n.tag===30)n.stateNode.paired=null,Xt(n.child,!1),Uc(n);else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)Ns(n),n=n.sibling;else Uc(n)}function Nh(n){for(n=n.child;n!==null;)n.tag===30?Xt(n.child,!1):(n.subtreeFlags&33554432)!==0&&Nh(n),n=n.sibling}function Hc(n,e,t,a,i,l,s){for(var c=!1;e!==null;){if(e.tag===5){var f=e.stateNode;if(l!==null&&rt<l.length){var T=l[rt],w=vu(f);(T.view||w.view)&&(c=!0);var k;if(k=(n.flags&4)===0)if(w.clip)k=!0;else{k=T.rect;var x=w.rect;k=k.y!==x.y||k.x!==x.x||k.height!==x.height||k.width!==x.width}k&&(n.flags|=4),w.abs?w=!T.abs:(T=T.rect,w=w.rect,w=T.height!==w.height||T.width!==w.width),w&&(n.flags|=32)}else n.flags|=32;(n.flags&4)!==0&&Tg(f,rt===0?t:t+"_"+rt,i),c&&(n.flags&4)!==0||(Qt===null&&(Qt=[]),Qt.push(f,rt===0?a:a+"_"+rt,e.memoizedProps)),rt++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s?n.flags|=e.flags&32:Hc(n,e.child,t,a,i,l,s)&&(c=!0));e=e.sibling}return c}function wh(n,e){for(n=n.child;n!==null;){if(n.tag===30){var t=n.memoizedProps,a=n.stateNode,i=la(t,a),l=sa(t.default,t.update),s;s=n.memoizedState,n.memoizedState=null,a=n;var c=n.child;rt=0,i=Hc(a,c,i,i,l,s,!1),(n.flags&4)!==0&&i&&ar(n,t.onUpdate)}else(n.subtreeFlags&33554432)!==0&&wh(n);n=n.sibling}}var ze=!1,In=!1,Jt=!1,qc=!1,Eh=typeof WeakSet=="function"?WeakSet:Set,De=null,Zt=!1,tl=!1,ws=!1,Gc=!1;function Mb(n,e,t){if(n=n.containerInfo,fu=hr,n=kd(n),Eo(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else n:{a=(a=n.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var l=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break n}var c=0,f=-1,T=-1,w=0,k=0,x=n,j=null;e:for(;;){for(var I;x!==a||l!==0&&x.nodeType!==3||(f=c+l),x!==s||i!==0&&x.nodeType!==3||(T=c+i),x.nodeType===3&&(c+=x.nodeValue.length),(I=x.firstChild)!==null;)j=x,x=I;for(;;){if(x===n)break e;if(j===a&&++w===l&&(f=c),j===s&&++k===i&&(T=c),(I=x.nextSibling)!==null)break;x=j,j=x.parentNode}x=I}a=f===-1||T===-1?null:{start:f,end:T}}else a=null}a=a||{start:0,end:0}}else a=null;for(hu={focusedElem:n,selectionRange:a},hr=!1,t=(t&335544064)===t,De=e,e=t?9270:1024;De!==null;){if(n=De,t&&(a=n.deletions,a!==null))for(l=0;l<a.length;l++)t&&Bc(a[l]);if(n.alternate===null&&(n.flags&2)!==0)t&&_h(n),Es(t);else{if(n.tag===22){if(a=n.alternate,n.memoizedState!==null){a!==null&&a.memoizedState===null&&t&&Bc(a),Es(t);continue}else if(a!==null&&a.memoizedState!==null){t&&_h(n),Es(t);continue}}a=n.child,(n.subtreeFlags&e)!==0&&a!==null?(a.return=n,De=a):(t&&jh(n),Es(t))}}ht=null}function Es(n){for(;De!==null;){var e=De,t=n,a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((i&1024)!==0&&a!==null){t=void 0,i=a.memoizedProps,a=a.memoizedState;var l=e.stateNode;try{var s=mi(e.type,i);t=l.getSnapshotBeforeUpdate(s,a),l.__reactInternalSnapshotBeforeUpdate=t}catch(c){Zn(e,e.return,c)}}break;case 3:if((i&1024)!==0){if(a=e.stateNode.containerInfo,t=a.nodeType,t===9)xu(a);else if(t===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":xu(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:t&&a!==null&&(t=la(a.memoizedProps,a.stateNode),i=e.memoizedProps,i=sa(i.default,i.update),i!=="none"&&Zi(a,t,i,a.memoizedState=[],!0));break;default:if((i&1024)!==0)throw Error(d(163))}if(a=e.sibling,a!==null){a.return=e.return,De=a;break}De=e.return}}function Oh(n,e,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Ft(n,t),a&4&&nl(5,t);break;case 1:if(Ft(n,t),a&4)if(n=t.stateNode,e===null)try{n.componentDidMount()}catch(s){Zn(t,t.return,s)}else{var i=mi(t.type,e.memoizedProps);e=e.memoizedState;try{n.componentDidUpdate(i,e,n.__reactInternalSnapshotBeforeUpdate)}catch(s){Zn(t,t.return,s)}}a&64&&mh(t),a&512&&It(t,t.return);break;case 3:if(Ft(n,t),a&64&&(n=t.updateQueue,n!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{rf(n,e)}catch(s){Zn(t,t.return,s)}}break;case 27:e===null&&a&4&&xh(t);case 26:case 5:Ft(n,t),e===null&&a&4&&Mc(t),a&512&&It(t,t.return);break;case 12:Ft(n,t);break;case 31:Ft(n,t),a&4&&Ch(n,t);break;case 13:Ft(n,t),a&4&&Rh(n,t),a&64&&(n=t.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(t=Vb.bind(null,t),jy(n,t))));break;case 22:if(a=t.memoizedState!==null||ze,!a){var l=e!==null&&e.memoizedState!==null||In;e=ze,i=In,ze=a,(In=l)&&!i?(a=2,(t.subtreeFlags&8772)!==0&&(a|=1),Lt(n,t,a)):Ft(n,t),ze=e,In=i}break;case 30:Ft(n,t),a&512&&It(t,t.return);break;case 7:a&512&&It(t,t.return);default:Ft(n,t)}}function Yc(n,e){for(n=n.child;n!==null;)Ah(n,e),n=n.sibling}function Ah(n,e){switch(n.tag){case 5:case 26:try{var t=n.stateNode;if(e){var a=t.style;typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"}else{var i=n.stateNode,l=n.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null;i.style.display=s==null||typeof s=="boolean"?"":(""+s).trim()}}catch(f){Zn(n,n.return,f)}Vc(n,e);break;case 6:try{n.stateNode.nodeValue=e?"":n.memoizedProps,Un=!0}catch(f){Zn(n,n.return,f)}break;case 18:try{var c=n.stateNode;e?_g(c,!0):_g(n.stateNode,!1)}catch(f){Zn(n,n.return,f)}break;case 22:case 23:n.memoizedState===null&&Yc(n,e);break;default:Yc(n,e)}}function Vc(n,e){if(n.subtreeFlags&67108864)for(n=n.child;n!==null;){n:{var t=n,a=e;switch(t.tag){case 4:Ah(t,a);break n;case 22:t.memoizedState===null&&Vc(t,a);break n;default:Vc(t,a)}}n=n.sibling}}function kh(n){var e=n.alternate;e!==null&&(n.alternate=null,kh(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&Me(e)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var ce=null,lt=!1;function zt(n,e,t){for(t=t.child;t!==null;)Mh(n,e,t),t=t.sibling}function Mh(n,e,t){if(Bn&&typeof Bn.onCommitFiberUnmount=="function")try{Bn.onCommitFiberUnmount(ee,t)}catch{}switch(t.tag){case 26:In||Ge(t,e),zt(n,e,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&!In&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:In||Ge(t,e),el(t);var a=ce,i=lt;Qa(t.type)&&(ce=t.stateNode,lt=!1),zt(n,e,t),Dg(t.stateNode,t.type,t.memoizedProps),ce=a,lt=i;break;case 5:In||Ge(t,e),el(t);case 6:if(t.tag===6&&el(t),a=ce,i=lt,ce=null,zt(n,e,t),ce=a,lt=i,ce!==null)if(lt)try{(ce.nodeType===9?ce.body:ce.nodeName==="HTML"?ce.ownerDocument.body:ce).removeChild(t.stateNode),Un=!0}catch(l){Zn(t,e,l)}else try{ce.removeChild(t.stateNode),Un=!0}catch(l){Zn(t,e,l)}break;case 18:ce!==null&&(lt?(n=ce,xg(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.stateNode),gr(n)):xg(ce,t.stateNode));break;case 4:a=ce,i=lt,ce=t.stateNode.containerInfo,lt=!0,zt(n,e,t),ce=a,lt=i;break;case 0:case 11:case 14:case 15:Ha(2,t,e),In||Ha(4,t,e),zt(n,e,t);break;case 1:In||(Ge(t,e),a=t.stateNode,typeof a.componentWillUnmount=="function"&&vh(t,e,a)),zt(n,e,t);break;case 21:zt(n,e,t);break;case 22:In=(a=In)||t.memoizedState!==null,zt(n,e,t),In=a;break;case 30:Ge(t,e),zt(n,e,t);break;case 7:In||Ge(t,e),zt(n,e,t);break;default:zt(n,e,t)}}function Ch(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{gr(n)}catch(t){Zn(e,e.return,t)}}}function Rh(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{gr(n)}catch(t){Zn(e,e.return,t)}}function Cb(n){switch(n.tag){case 31:case 13:case 19:var e=n.stateNode;return e===null&&(e=n.stateNode=new Eh),e;case 22:return n=n.stateNode,e=n._retryCache,e===null&&(e=n._retryCache=new Eh),e;default:throw Error(d(435,n.tag))}}function Os(n,e){var t=Cb(n);e.forEach(function(a){if(!t.has(a)){t.add(a);var i=Kb.bind(null,n,a);a.then(i,i)}})}function Ze(n,e,t){var a=e.deletions;if(a!==null)for(var i=0;i<a.length;i++){var l=a[i],s=n,c=e,f=c;n:for(;f!==null;){switch(f.tag){case 27:if(Qa(f.type)){ce=f.stateNode,lt=!1;break n}break;case 5:ce=f.stateNode,lt=!1;break n;case 3:case 4:ce=f.stateNode.containerInfo,lt=!0;break n}f=f.return}if(ce===null)throw Error(d(160));Mh(s,c,l),ce=null,lt=!1,s=l.alternate,s!==null&&(s.return=null),l.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)zh(e,n,t),e=e.sibling}var Dt=null;function zh(n,e,t){var a=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(i&4&&(a=n.updateQueue,a=a!==null?a.events:null,a!==null))for(var l=0;l<a.length;l++){var s=a[l];s.ref.impl=s.nextImpl}Ze(e,n,t),Fe(n),i&4&&(Ha(3,n,n.return),nl(3,n),Ha(5,n,n.return));break;case 1:Ze(e,n,t),Fe(n),i&512&&(In||a===null||Ge(a,a.return)),i&64&&ze&&(n=n.updateQueue,n!==null&&(e=n.callbacks,e!==null&&(t=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=t===null?e:t.concat(e))));break;case 26:if(l=Dt,Ze(e,n,t),Fe(n),i&512&&(In||a===null||Ge(a,a.return)),i&4)if(i=a!==null?a.memoizedState:null,t=n.memoizedState,a===null)if(t===null)if(n.stateNode===null)if(ze)n.stateNode=vg(n.type,n.memoizedProps,e.containerInfo,n);else{n:{e=n.type,t=n.memoizedProps,i=l.ownerDocument||l;e:switch(e){case"title":a=i.getElementsByTagName("title")[0],(!a||a[at]||a[Ae]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=i.createElement(e),i.head.insertBefore(a,i.querySelector("head > title"))),Ye(a,e,t),a[Ae]=n,_e(a),e=a;break n;case"link":if(l=Gg("link","href",i).get(e+(t.href||""))){for(s=0;s<l.length;s++)if(a=l[s],a.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&a.getAttribute("rel")===(t.rel==null?null:t.rel)&&a.getAttribute("title")===(t.title==null?null:t.title)&&a.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){l.splice(s,1);break e}}a=i.createElement(e),Ye(a,e,t),i.head.appendChild(a);break;case"meta":if(l=Gg("meta","content",i).get(e+(t.content||""))){for(s=0;s<l.length;s++)if(a=l[s],a.getAttribute("content")===(t.content==null?null:""+t.content)&&a.getAttribute("name")===(t.name==null?null:t.name)&&a.getAttribute("property")===(t.property==null?null:t.property)&&a.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&a.getAttribute("charset")===(t.charSet==null?null:t.charSet)){l.splice(s,1);break e}}a=i.createElement(e),Ye(a,e,t),i.head.appendChild(a);break;default:throw Error(d(468,e))}a[Ae]=n,_e(a),e=a}n.stateNode=e}else ze||Eu(l,n.type,n.stateNode);else n.stateNode=qg(l,t,n.memoizedProps);else i!==t?(i===null?(e=a.stateNode,e===null||In||e.parentNode.removeChild(e)):i.count--,t===null?ze||Eu(l,n.type,n.stateNode):qg(l,t,n.memoizedProps)):t===null&&n.stateNode!==null&&Cc(n,n.memoizedProps,a.memoizedProps);break;case 27:Ze(e,n,t),Fe(n),i&512&&(In||a===null||Ge(a,a.return)),a!==null&&i&4&&Cc(n,n.memoizedProps,a.memoizedProps);break;case 5:if(l=Jt,Jt=!1,Ze(e,n,t),Jt=l,Fe(n),i&512&&(In||a===null||Ge(a,a.return)),n.flags&32){e=n.stateNode;try{Mi(e,""),Un=!0}catch(w){Zn(n,n.return,w)}}i&4&&n.stateNode!=null&&(e=n.memoizedProps,Cc(n,e,a!==null?a.memoizedProps:e)),i&1024&&(qc=!0);break;case 6:if(Ze(e,n,t),Fe(n),i&4){if(n.stateNode===null)throw Error(d(162));e=n.memoizedProps,t=n.stateNode;try{t.nodeValue=e,Un=!0}catch(w){Zn(n,n.return,w)}}break;case 3:if(Un=!1,Vs=null,l=Dt,Dt=dl(e.containerInfo),Ze(e,n,t),Dt=l,Fe(n),i&4&&a!==null&&a.memoizedState.isDehydrated)try{gr(e.containerInfo)}catch(w){Zn(n,n.return,w)}qc&&(qc=!1,Dh(n)),Un=!1;break;case 4:i=Jt,Jt=ze,a=Te(),l=Dt,Dt=dl(n.stateNode.containerInfo),Ze(e,n,t),Fe(n),Dt=l,Un&&tl&&(ws=!0),Un=a,Jt=i;break;case 12:Ze(e,n,t),Fe(n);break;case 31:Ze(e,n,t),Fe(n),i&4&&(e=n.updateQueue,e!==null&&(n.updateQueue=null,Os(n,e)));break;case 13:Ze(e,n,t),Fe(n),n.child.flags&8192&&n.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ms=Ie()),i&4&&(e=n.updateQueue,e!==null&&(n.updateQueue=null,Os(n,e)));break;case 22:l=n.memoizedState!==null,s=a!==null&&a.memoizedState!==null;var c=ze,f=In,T=Jt;ze=c||l,Jt=T||l,In=f||s,Ze(e,n,t),In=f,Jt=T,ze=c,Fe(n),i&8192&&(e=n.stateNode,e._visibility=l?e._visibility&-2:e._visibility|1,!l||a===null||s||ze||In||(e=s||In,t=ze,a=In,ze=l||ze,In=e,qa(n,2),ze=t,In=a),!l&&Jt||Yc(n,l)),i&4&&(e=n.updateQueue,e!==null&&(t=e.retryQueue,t!==null&&(e.retryQueue=null,Os(n,t))));break;case 19:Ze(e,n,t),Fe(n),i&4&&(e=n.updateQueue,e!==null&&(n.updateQueue=null,Os(n,e)));break;case 30:i&512&&(In||a===null||Ge(a,a.return)),i=Te(),l=tl,s=(t&335544064)===t,c=n.memoizedProps,tl=s&&sa(c.default,c.update)!=="none",Ze(e,n,t),Fe(n),s&&a!==null&&Un&&(n.flags|=4),tl=l,Un=i;break;case 21:break;case 7:i&512&&(In||a===null||Ge(a,a.return)),a&&a.stateNode!==null&&(a.stateNode._fragmentFiber=n);default:Ze(e,n,t),Fe(n)}}function Fe(n){var e=n.flags;if(e&2){try{for(var t,a=n.return;a!==null;){if(yh(a)){t=a;break}a=a.return}a=null;for(var i=n.return;i!==null;){if(kc(i)){var l=i.stateNode;a===null?a=[l]:a.push(l)}if(Ac(i))break;i=i.return}var s=a;if(t==null)throw Error(d(160));switch(t.tag){case 27:var c=t.stateNode,f=Rc(n);Ts(n,f,c,s);break;case 5:var T=t.stateNode;t.flags&32&&(Mi(T,""),t.flags&=-33);var w=Rc(n);Ts(n,w,T,s);break;case 3:case 4:var k=t.stateNode.containerInfo,x=Rc(n);zc(n,x,k,s);break;default:throw Error(d(161))}}catch(j){Zn(n,n.return,j)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Dh(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var e=n;Dh(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,hr=!0,e.reset(),hr=!1),n=n.sibling}}function Fi(n,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)Lh(e,n),e=e.sibling;else wh(e)}function Lh(n,e){var t=n.alternate;if(t===null)Dc(n,!1);else switch(n.tag){case 3:if(Gc=Zt=!1,Th(),Fi(e,n),!Zt&&!ws){if(n=Qt,n!==null)for(var a=0;a<n.length;a+=3){t=n[a];var i=n[a+1];Sg(t,n[a+2]),t=t.ownerDocument.documentElement,t!==null&&t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+i+")"})}n=e.containerInfo,n=n.nodeType===9?n.documentElement:n.ownerDocument.documentElement,n!==null&&n.style.viewTransitionName===""&&(n.style.viewTransitionName="none",n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),n.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Gc=!0}Qt=null;break;case 5:Fi(e,n);break;case 4:a=Zt,Zt=!1,Fi(e,n),Zt&&(ws=!0),Zt=a;break;case 22:n.memoizedState===null&&(t.memoizedState!==null?Dc(n,!1):Fi(e,n));break;case 30:a=Zt,i=Th(),Zt=!1,Fi(e,n),Zt&&(n.flags|=4);var l=n.memoizedProps,s=n.stateNode;e=la(l,s),s=la(t.memoizedProps,s);var c=sa(l.default,l.update);c==="none"?e=!1:(l=t.memoizedState,t.memoizedState=null,t=n.child,rt=0,e=Hc(n,t,e,s,c,l,!0),rt!==(l===null?0:l.length)&&(n.flags|=32)),(n.flags&4)!==0&&e?(ar(n,n.memoizedProps.onUpdate),Qt=i):i!==null&&(i.push.apply(i,Qt),Qt=i),Zt=(n.flags&32)!==0?!0:a;break;default:Fi(e,n)}}function Ft(n,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Oh(n,e.alternate,e),e=e.sibling}function qa(n,e){for(n=n.child;n!==null;){var t=n,a=e;switch(t.tag){case 0:case 11:case 14:case 15:Ha(4,t,t.return),qa(t,a);break;case 1:Ge(t,t.return);var i=t.stateNode;typeof i.componentWillUnmount=="function"&&vh(t,t.return,i),qa(t,a);break;case 27:(a&2)!==0&&Dg(t.stateNode,t.type,t.memoizedProps);case 5:Ge(t,t.return),t.tag!==5&&t.tag!==27||el(t),qa(t,a);break;case 6:el(t);break;case 26:Ge(t,t.return),i=t.stateNode,t.memoizedState!==null||i===null||In||i.parentNode.removeChild(i),qa(t,a);break;case 22:t.memoizedState===null&&qa(t,a);break;case 30:Ge(t,t.return),qa(t,a);break;case 7:Ge(t,t.return);default:qa(t,a)}n=n.sibling}}function Lt(n,e,t){for(t=(e.subtreeFlags&8772)!==0?t:t&-2,e=e.child;e!==null;){var a=e.alternate,i=n,l=e,s=l.flags,c=(t&1)!==0;switch(l.tag){case 0:case 11:case 15:Lt(i,l,t),nl(4,l);break;case 1:if(Lt(i,l,t),a=l,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(w){Zn(a,a.return,w)}if(a=l,i=a.updateQueue,i!==null){var f=a.stateNode;try{var T=i.shared.hiddenCallbacks;if(T!==null)for(i.shared.hiddenCallbacks=null,i=0;i<T.length;i++)af(T[i],f)}catch(w){Zn(a,a.return,w)}}c&&s&64&&mh(l),It(l,l.return);break;case 27:(t&2)!==0&&xh(l);case 5:l.tag!==5&&l.tag!==27||bh(l),Lt(i,l,t),c&&a===null&&s&4&&Mc(l),It(l,l.return);break;case 6:bh(l);break;case 26:f=l.stateNode,l.memoizedState!==null||f===null||ze||Eu(dl(f.ownerDocument),l.type,f),Lt(i,l,t),c&&a===null&&s&4&&Mc(l),It(l,l.return);break;case 12:Lt(i,l,t);break;case 31:Lt(i,l,t),c&&s&4&&Ch(i,l);break;case 13:Lt(i,l,t),c&&s&4&&Rh(i,l);break;case 22:l.memoizedState===null&&Lt(i,l,t),It(l,l.return);break;case 30:Lt(i,l,t),It(l,l.return);break;case 7:It(l,l.return);default:Lt(i,l,t)}e=e.sibling}}function Kc(n,e){var t=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==t&&(n!=null&&n.refCount++,t!=null&&Gr(t))}function Ic(n,e){n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&Gr(n))}function Et(n,e,t,a){var i=(t&335544064)===t;if(e.subtreeFlags&(i?10262:10256))for(e=e.child;e!==null;)Bh(n,e,t,a),e=e.sibling;else i&&Nh(e)}function Bh(n,e,t,a){var i=(t&335544064)===t;i&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&Ns(e);var l=e.flags;switch(e.tag){case 0:case 11:case 15:Et(n,e,t,a),l&2048&&nl(9,e);break;case 1:Et(n,e,t,a);break;case 3:Et(n,e,t,a),i&&Gc&&(n=n.containerInfo,n=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,n.style.viewTransitionName==="root"&&(n.style.viewTransitionName=""),n=n.ownerDocument.documentElement,n!==null&&n.style.viewTransitionName==="none"&&(n.style.viewTransitionName="")),l&2048&&(l=null,e.alternate!==null&&(l=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==l&&(e.refCount++,l!=null&&Gr(l)));break;case 12:if(l&2048){Et(n,e,t,a),l=e.stateNode;try{var s=e.memoizedProps,c=s.id,f=s.onPostCommit;typeof f=="function"&&f(c,e.alternate===null?"mount":"update",l.passiveEffectDuration,-0)}catch(T){Zn(e,e.return,T)}}else Et(n,e,t,a);break;case 31:Et(n,e,t,a);break;case 13:Et(n,e,t,a);break;case 23:break;case 22:s=e.stateNode,c=e.alternate,e.memoizedState!==null?(i&&c!==null&&c.memoizedState===null&&Ns(c),s._visibility&2?Et(n,e,t,a):al(n,e)):(i&&c!==null&&c.memoizedState!==null&&Ns(e),s._visibility&2?Et(n,e,t,a):(s._visibility|=2,Pi(n,e,t,a,(e.subtreeFlags&10256)!==0||!1))),l&2048&&Kc(c,e);break;case 24:Et(n,e,t,a),l&2048&&Ic(e.alternate,e);break;case 30:i&&(l=e.alternate,l!==null&&(Xt(l.child,!0),Xt(e.child,!0))),Et(n,e,t,a);break;default:Et(n,e,t,a)}}function Pi(n,e,t,a,i){for(i=i&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var l=n,s=e,c=t,f=a,T=s.flags;switch(s.tag){case 0:case 11:case 15:Pi(l,s,c,f,i),nl(8,s);break;case 23:break;case 22:var w=s.stateNode;s.memoizedState!==null?w._visibility&2?Pi(l,s,c,f,i):al(l,s):(w._visibility|=2,Pi(l,s,c,f,i)),i&&T&2048&&Kc(s.alternate,s);break;case 24:Pi(l,s,c,f,i),i&&T&2048&&Ic(s.alternate,s);break;default:Pi(l,s,c,f,i)}e=e.sibling}}function al(n,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var t=n,a=e,i=a.flags;switch(a.tag){case 22:al(t,a),i&2048&&Kc(a.alternate,a);break;case 24:al(t,a),i&2048&&Ic(a.alternate,a);break;default:al(t,a)}e=e.sibling}}var vi=8192;function bi(n,e,t){if(n.subtreeFlags&vi)for(n=n.child;n!==null;)Uh(n,e,t),n=n.sibling}function Uh(n,e,t){switch(n.tag){case 26:bi(n,e,t),n.flags&vi&&(n.memoizedState!==null?Uy(t,Dt,n.memoizedState,n.memoizedProps):(n=n.stateNode,(e&335544128)===e&&Ig(t,n)));break;case 5:bi(n,e,t),n.flags&vi&&(n=n.stateNode,(e&335544128)===e&&Ig(t,n));break;case 3:case 4:var a=Dt;Dt=dl(n.stateNode.containerInfo),bi(n,e,t),Dt=a;break;case 22:n.memoizedState===null&&(a=n.alternate,a!==null&&a.memoizedState!==null?(a=vi,vi=16777216,bi(n,e,t),vi=a):bi(n,e,t));break;case 30:if((n.flags&vi)!==0&&(a=n.memoizedProps.name,a!=null&&a!=="auto")){var i=n.stateNode;i.paired=null,ht===null&&(ht=new Map),ht.set(a,i)}bi(n,e,t);break;default:bi(n,e,t)}}function Hh(n){var e=n.alternate;if(e!==null&&(n=e.child,n!==null)){e.child=null;do e=n.sibling,n.sibling=null,n=e;while(n!==null)}}function il(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var a=e[t];De=a,Gh(a,n)}Hh(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)qh(n),n=n.sibling}function qh(n){switch(n.tag){case 0:case 11:case 15:il(n),n.flags&2048&&Ha(9,n,n.return);break;case 3:il(n);break;case 12:il(n);break;case 22:var e=n.stateNode;n.memoizedState!==null&&e._visibility&2&&(n.return===null||n.return.tag!==13)?(e._visibility&=-3,As(n)):il(n);break;default:il(n)}}function As(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var a=e[t];De=a,Gh(a,n)}Hh(n)}for(n=n.child;n!==null;){switch(e=n,e.tag){case 0:case 11:case 15:Ha(8,e,e.return),As(e);break;case 22:t=e.stateNode,t._visibility&2&&(t._visibility&=-3,As(e));break;default:As(e)}n=n.sibling}}function Gh(n,e){for(;De!==null;){var t=De;switch(t.tag){case 0:case 11:case 15:Ha(8,t,e);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Gr(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,De=a;else n:for(t=n;De!==null;){a=De;var i=a.sibling,l=a.return;if(kh(a),a===t){De=null;break n}if(i!==null){i.return=l,De=i;break n}De=l}}}var Rb={getCacheForType:function(n){var e=Ue(Se),t=e.data.get(n);return t===void 0&&(t=n(),e.data.set(n,t)),t},cacheSignal:function(){return Ue(Se).controller.signal}},zb=typeof WeakMap=="function"?WeakMap:Map,Yn=0,te=null,Rn=null,Dn=0,Jn=0,gt=null,Ga=!1,Wi=!1,Qc=!1,ma=0,ge=0,Ya=0,yi=0,ks=0,pt=0,$i=0,rl=null,st=null,Xc=!1,Ms=0,Yh=0,Cs=1/0,Rs=null,Va=null,de=0,Bt=null,xi=null,Pt=0,Jc=0,Zc=null,Vh=null,nr=null,er=null,tr=null,ll=0,zs=null;function mt(){return(Yn&2)!==0&&Dn!==0?Dn&-Dn:tn.T!==null?ru():Ol()}function Kh(){if(pt===0)if((Dn&536870912)===0||An){var n=_a;_a<<=1,(_a&3932160)===0&&(_a=262144),pt=n}else pt=536870912;return n=He.current,n!==null&&(n.flags|=32),pt}function ar(n,e){if(e!=null){var t=n.stateNode,a=t.ref;a===null&&(a=t.ref=jg(la(n.memoizedProps,t))),er===null&&(er=[]),er.push(e.bind(null,a))}}function ot(n,e,t){(n===te&&(Jn===2||Jn===9)||n.cancelPendingCommit!==null)&&(ir(n,0),Ka(n,Dn,pt,!1)),ei(n,t),((Yn&2)===0||n!==te)&&(n===te&&((Yn&2)===0&&(yi|=t),ge===4&&Ka(n,Dn,pt,!1)),Wt(n))}function Ih(n,e,t){if((Yn&6)!==0)throw Error(d(327));var a=!t&&(e&127)===0&&(e&n.expiredLanes)===0||ni(n,e),i=a?Bb(n,e):Pc(n,e,!0),l=a;do{if(i===0){Wi&&!a&&Ka(n,e,0,!1);break}else{if(t=n.current.alternate,l&&!Db(t)){i=Pc(n,e,!1),l=!1;continue}if(i===2){if(l=e,n.errorRecoveryDisabledLanes&l)var s=0;else s=n.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;n:{var c=n;i=rl;var f=c.current.memoizedState.isDehydrated;if(f&&(ir(c,s).flags|=256),s=Pc(c,s,!1),s!==2&&s!==6){if(Qc&&!f){c.errorRecoveryDisabledLanes|=l,yi|=l,i=4;break n}l=st,st=i,l!==null&&(st===null?st=l:st.push.apply(st,l))}i=s}if(l=!1,i!==2)continue}}if(i===1){ir(n,0),Ka(n,e,0,!0);break}n:{switch(a=n,l=i,l){case 0:case 1:throw Error(d(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:Ka(a,e,pt,!Ga);break n;case 2:st=null;break;case 3:case 5:break;default:throw Error(d(329))}if((e&62914560)===e&&(i=Ms+300-Ie(),10<i)){if(Ka(a,e,pt,!Ga),Sa(a,0,!0)!==0)break n;Pt=e,a.timeoutHandle=mu(Qh.bind(null,a,t,st,Rs,Xc,e,pt,yi,$i,Ga,l,"Throttled",-0,0),i);break n}Qh(a,t,st,Rs,Xc,e,pt,yi,$i,Ga,l,null,-0,0)}}break}while(!0);Wt(n)}function Qh(n,e,t,a,i,l,s,c,f,T,w,k,x,j){n.timeoutHandle=-1;var I=e.subtreeFlags,an=(l&335544064)===l;if(k=null,(an||I&8192||(I&16785408)===16785408)&&(k={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yt},ht=null,Uh(e,l,k),an&&(I=k,an=n.containerInfo,an=(an.nodeType===9?an:an.ownerDocument).__reactViewTransition,an!=null&&(I.count++,I.waitingForViewTransition=!0,I=gl.bind(I),an.finished.then(I,I))),I=(l&62914560)===l?Ms-Ie():(l&4194048)===l?Yh-Ie():0,I=Hy(k,I),I!==null)){Pt=l,n.cancelPendingCommit=I(ng.bind(null,n,e,l,t,a,i,s,c,f,T,w,k,null,x,j)),Ka(n,l,s,!T);return}ng(n,e,l,t,a,i,s,c,f,T,w,k)}function Db(n){for(var e=n;;){var t=e.tag;if((t===0||t===11||t===15)&&e.flags&16384&&(t=e.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var i=t[a],l=i.getSnapshot;i=i.value;try{if(!dt(l(),i))return!1}catch{return!1}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ka(n,e,t,a){e=wl(n,e),e&=~ks,e&=~yi,n.suspendedLanes|=e,n.pingedLanes&=~e,a&&(n.warmLanes|=e),a=n.expirationTimes;for(var i=e;0<i;){var l=31-K(i),s=1<<l;a[l]=-1,i&=~s}t!==0&&El(n,t,e)}function Ds(){return(Yn&6)===0?(sl(0),!1):!0}function Fc(){if(Rn!==null){if(Jn===0)var n=Rn.return;else n=Rn,ua=si=null,ic(n),Ki=null,Kr=0,n=Rn;for(;n!==null;)ph(n.alternate,n),n=n.return;Rn=null}}function ir(n,e){var t=n.timeoutHandle;return t!==-1&&(n.timeoutHandle=-1,ry(t)),t=n.cancelPendingCommit,t!==null&&(n.cancelPendingCommit=null,t()),Pt=0,Fc(),te=n,Rn=t=oa(n.current,null),Dn=e,Jn=0,gt=null,Ga=!1,Wi=ni(n,e),Qc=!1,$i=pt=ks=yi=Ya=ge=0,st=rl=null,Xc=!1,ma=wl(n,e),Vl(),t}function Xh(n,e){Nn=null,tn.H=gs,e===Vi||e===ns?(e=$d(),Jn=3):e===Io?(e=$d(),Jn=4):Jn=e===yc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,gt=e,Rn===null&&(ge=1,ps(n,St(e,n.current)))}function Jh(){var n=He.current;return n===null?!0:(Dn&4194048)===Dn?Qe===null:(Dn&62914560)===Dn||(Dn&536870912)!==0?n===Qe:!1}function Zh(){var n=tn.H;return tn.H=gs,n===null?gs:n}function Fh(){var n=tn.A;return tn.A=Rb,n}function Ls(){ge=4,Ga||(Dn&4194048)!==Dn&&He.current!==null||(Wi=!0),(Ya&134217727)===0&&(yi&134217727)===0||te===null||Ka(te,Dn,pt,!1)}function Pc(n,e,t){var a=Yn;Yn|=2;var i=Zh(),l=Fh();(te!==n||Dn!==e)&&(Rs=null,ir(n,e)),e=!1;var s=ge;n:do try{if(Jn!==0&&Rn!==null){var c=Rn,f=gt;switch(Jn){case 8:Fc(),s=6;break n;case 3:case 2:case 9:case 6:He.current===null&&(e=!0);var T=Jn;if(Jn=0,gt=null,rr(n,c,f,T),t&&Wi){s=0;break n}break;default:T=Jn,Jn=0,gt=null,rr(n,c,f,T)}}Lb(),s=ge;break}catch(w){Xh(n,w)}while(!0);return e&&n.shellSuspendCounter++,ua=si=null,Yn=a,tn.H=i,tn.A=l,Rn===null&&(te=null,Dn=0,Vl()),s}function Lb(){for(;Rn!==null;)Ph(Rn)}function Bb(n,e){var t=Yn;Yn|=2;var a=Zh(),i=Fh();te!==n||Dn!==e?(Rs=null,Cs=Ie()+500,ir(n,e)):Wi=ni(n,e);n:do try{if(Jn!==0&&Rn!==null){e=Rn;var l=gt;e:switch(Jn){case 1:Jn=0,gt=null,rr(n,e,l,1);break;case 2:case 9:if(Pd(l)){Jn=0,gt=null,Wh(e);break}e=function(){Jn!==2&&Jn!==9||te!==n||(Jn=7),Wt(n)},l.then(e,e);break n;case 3:Jn=7;break n;case 4:Jn=5;break n;case 7:Pd(l)?(Jn=0,gt=null,Wh(e)):(Jn=0,gt=null,rr(n,e,l,7));break;case 5:var s=null;switch(Rn.tag){case 26:s=Rn.memoizedState;case 5:case 27:var c=Rn;if(s?Vg(s):c.stateNode.complete){Jn=0,gt=null;var f=c.sibling;if(f!==null)Rn=f;else{var T=c.return;T!==null?(Rn=T,Bs(T)):Rn=null}break e}}Jn=0,gt=null,rr(n,e,l,5);break;case 6:Jn=0,gt=null,rr(n,e,l,6);break;case 8:Fc(),ge=6;break n;default:throw Error(d(462))}}Ub();break}catch(w){Xh(n,w)}while(!0);return ua=si=null,tn.H=a,tn.A=i,Yn=t,Rn!==null?0:(te=null,Dn=0,Vl(),ge)}function Ub(){for(;Rn!==null&&!co();)Ph(Rn)}function Ph(n){var e=hh(n.alternate,n,ma);n.memoizedProps=n.pendingProps,e===null?Bs(n):Rn=e}function Wh(n){var e=n,t=e.alternate;switch(e.tag){case 15:case 0:e=lh(t,e,e.pendingProps,e.type,void 0,Dn);break;case 11:e=lh(t,e,e.pendingProps,e.type.render,e.ref,Dn);break;case 5:ic(e);var a=e;a===Re&&(An?(Zl(a),a.tag===5&&a.stateNode!=null&&(ie=a.stateNode)):(Zl(a),An=!0));default:ph(t,e),e=Rn=qd(e,ma),e=hh(t,e,ma)}n.memoizedProps=n.pendingProps,e===null?Bs(n):Rn=e}function rr(n,e,t,a){ua=si=null,ic(e),Ki=null,Kr=0;var i=e.return;try{if(Nb(n,i,e,t,Dn)){ge=1,ps(n,St(t,n.current)),Rn=null;return}}catch(l){if(i!==null)throw Rn=i,l;ge=1,ps(n,St(t,n.current)),Rn=null;return}e.flags&32768?(An||a===1?n=!0:Wi||(Dn&536870912)!==0?n=!1:(Ga=n=!0,(a===2||a===9||a===3||a===6)&&(a=He.current,a!==null&&a.tag===13&&(a.flags|=16384))),$h(e,n)):Bs(e)}function Bs(n){var e=n;do{if((e.flags&32768)!==0){$h(e,Ga);return}n=e.return;var t=Ab(e.alternate,e,ma);if(t!==null){Rn=t;return}if(e=e.sibling,e!==null){Rn=e;return}Rn=e=n}while(e!==null);ge===0&&(ge=5)}function $h(n,e){do{var t=kb(n.alternate,n);if(t!==null){t.flags&=32767,Rn=t;return}if(t=n.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!e&&(n=n.sibling,n!==null)){Rn=n;return}Rn=n=t}while(n!==null);ge=6,Rn=null}function ng(n,e,t,a,i,l,s,c,f,T,w,k){n.cancelPendingCommit=null;do Us();while(de!==0);if((Yn&6)!==0)throw Error(d(327));if(e!==null){if(e===n.current)throw Error(d(177));n===te&&(Rn=te=null,Dn=0),xi=e,Bt=n,Pt=t,Zc=i,Vh=a,Hb(n,e,t,s,c,f,k)}}function Hb(n,e,t,a,i,l,s){var c=e.lanes|e.childLanes;if(Jc=c,c|=Co,fo(n,t,c,a,i,l),er=null,(t&335544064)===t?(tr=hb(n),a=10262):(tr=null,a=10256),(e.subtreeFlags&a)!==0||(e.flags&a)!==0?(n.callbackNode=null,n.callbackPriority=0,Ib(Mt,function(){return eu(),null})):(n.callbackNode=null,n.callbackPriority=0),Ss=!1,a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=tn.T,tn.T=null,i=dn.p,dn.p=2,l=Yn,Yn|=4;try{Mb(n,e,t)}finally{Yn=l,dn.p=i,tn.T=a}}de=1,Ss?nr=dy(s,n.containerInfo,tr,Wc,$c,Gb,nu,eu,qb):(Wc(),$c(),nu())}function qb(n){if(de!==0){var e=Bt.onRecoverableError;e(n,{componentStack:null})}}function Gb(){de===3&&(de=0,Lh(xi,Bt),de=4)}function Wc(){if(de===1){de=0;var n=Bt,e=xi,t=Pt,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=tn.T,tn.T=null;var i=dn.p;dn.p=2;var l=Yn;Yn|=4;try{tl=ws=!1,zh(e,n,t),t=hu;var s=kd(n.containerInfo),c=t.focusedElem,f=t.selectionRange;if(s!==c&&c&&c.ownerDocument&&Ad(c.ownerDocument.documentElement,c)){if(f!==null&&Eo(c)){var T=f.start,w=f.end;if(w===void 0&&(w=T),"selectionStart"in c)c.selectionStart=T,c.selectionEnd=Math.min(w,c.value.length);else{var k=c.ownerDocument||document,x=k&&k.defaultView||window;if(x.getSelection){var j=x.getSelection(),I=c.textContent.length,an=Math.min(f.start,I),wn=f.end===void 0?an:Math.min(f.end,I);!j.extend&&an>wn&&(s=wn,wn=an,an=s);var _=Od(c,an),v=Od(c,wn);if(_&&v&&(j.rangeCount!==1||j.anchorNode!==_.node||j.anchorOffset!==_.offset||j.focusNode!==v.node||j.focusOffset!==v.offset)){var S=k.createRange();S.setStart(_.node,_.offset),j.removeAllRanges(),an>wn?(j.addRange(S),j.extend(v.node,v.offset)):(S.setEnd(v.node,v.offset),j.addRange(S))}}}}for(k=[],j=c;j=j.parentNode;)j.nodeType===1&&k.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<k.length;c++){var A=k[c];A.element.scrollLeft=A.left,A.element.scrollTop=A.top}}hr=!!fu,hu=fu=null}finally{Yn=l,dn.p=i,tn.T=a}}n.current=e,de=2}}function $c(){if(de===2){de=0;var n=Bt,e=xi,t=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||t){t=tn.T,tn.T=null;var a=dn.p;dn.p=2;var i=Yn;Yn|=4;try{Oh(n,e.alternate,e)}finally{Yn=i,dn.p=a,tn.T=t}}de=3}}function nu(){if(de===4||de===3){de=0;var n=nr;nr=null,jr();var e=Bt,t=xi,a=Pt,i=Vh,l=(a&335544064)===a?10262:10256;if((t.subtreeFlags&l)!==0||(t.flags&l)!==0?de=5:(de=0,xi=Bt=null,eg(e,e.pendingLanes)),l=e.pendingLanes,l===0&&(Va=null),Or(a),t=t.stateNode,Bn&&typeof Bn.onCommitFiberRoot=="function")try{Bn.onCommitFiberRoot(ee,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=tn.T,l=dn.p,dn.p=2,tn.T=null;try{for(var s=e.onRecoverableError,c=0;c<i.length;c++){var f=i[c];s(f.value,{componentStack:f.stack})}}finally{tn.T=t,dn.p=l}}if(i=er,s=tr,tr=null,i!==null&&(er=null,s===null&&(s=[]),n!==null))for(f=0;f<i.length;f++)t=(0,i[f])(s),t!==void 0&&n.finished.finally(t);(Pt&3)!==0&&Us(),Wt(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===zs?ll++:(ll=0,zs=e):(ll=0,zs=null),sl(0)}}function eg(n,e){(n.pooledCacheLanes&=e)===0&&(e=n.pooledCache,e!=null&&(n.pooledCache=null,Gr(e)))}function Us(){return nr!==null&&(nr.skipTransition(),nr=null),Wc(),$c(),nu(),eu()}function eu(){if(de!==5)return!1;var n=Bt,e=Jc;Jc=0;var t=Or(Pt),a=tn.T,i=dn.p;try{dn.p=32>t?32:t,tn.T=null,t=Zc,Zc=null;var l=Bt,s=Pt;if(de=0,xi=Bt=null,Pt=0,(Yn&6)!==0)throw Error(d(331));var c=Yn;if(Yn|=4,qh(l.current),Bh(l,l.current,s,t),Yn=c,sl(0,!1),Bn&&typeof Bn.onPostCommitFiberRoot=="function")try{Bn.onPostCommitFiberRoot(ee,l)}catch{}return!0}finally{dn.p=i,tn.T=a,eg(n,e)}}function tg(n,e,t){e=St(t,e),e=bc(n.stateNode,e,2),n=Da(n,e,2),n!==null&&(ei(n,2),Wt(n))}function Zn(n,e,t){if(n.tag===3)tg(n,n,t);else for(;e!==null;){if(e.tag===3){tg(e,n,t);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Va===null||!Va.has(a))){n=St(t,n),t=Wf(2),a=Da(e,t,2),a!==null&&($f(t,a,e,n),ei(a,2),Wt(a));break}}e=e.return}}function tu(n,e,t){var a=n.pingCache;if(a===null){a=n.pingCache=new zb;var i=new Set;a.set(e,i)}else i=a.get(e),i===void 0&&(i=new Set,a.set(e,i));i.has(t)||(Qc=!0,i.add(t),n=Yb.bind(null,n,e,t),e.then(n,n))}function Yb(n,e,t){var a=n.pingCache;a!==null&&a.delete(e),n.pingedLanes|=n.suspendedLanes&t,n.warmLanes&=~t,te===n&&(Dn&t)===t&&((ge===4||ge===3&&(Dn&62914560)===Dn&&300>Ie()-Ms)&&(Yn&2)===0?ir(n,0):ks|=t,$i===Dn&&($i=0)),Wt(n)}function ag(n,e){e===0&&(e=wr()),n=ii(n,e),n!==null&&(ei(n,e),Wt(n))}function Vb(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),ag(n,t)}function Kb(n,e){var t=0;switch(n.tag){case 31:case 13:var a=n.stateNode,i=n.memoizedState;i!==null&&(t=i.retryLane);break;case 19:a=n.stateNode;break;case 22:a=n.stateNode._retryCache;break;default:throw Error(d(314))}a!==null&&a.delete(e),ag(n,t)}function Ib(n,e){return Tr(n,e)}var lr=null,sr=null,au=!1,Hs=!1,iu=!1,Ia=0;function Wt(n){n!==sr&&n.next===null&&(sr===null?lr=sr=n:sr=sr.next=n),Hs=!0,au||(au=!0,Xb())}function sl(n,e){if(!iu&&Hs){iu=!0;do for(var t=!1,a=lr;a!==null;){if(n!==0){var i=a.pendingLanes;if(i===0)var l=0;else{var s=a.suspendedLanes,c=a.pingedLanes;l=(1<<31-K(42|n)+1)-1,l&=i&~(s&~c),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(t=!0,sg(a,l))}else l=Dn,l=Sa(a,a===te?l:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(l&3)===0||ni(a,l)||(t=!0,sg(a,l));a=a.next}while(t);iu=!1}}function Qb(){ig()}function ig(){Hs=au=!1;var n=0;Ia!==0&&iy()&&(n=Ia);for(var e=Ie(),t=null,a=lr;a!==null;){var i=a.next,l=rg(a,e);l===0?(a.next=null,t===null?lr=i:t.next=i,i===null&&(sr=t)):(t=a,(n!==0||(l&3)!==0)&&(Hs=!0)),a=i}de!==0&&de!==5||sl(n),Ia!==0&&(Ia=0)}function rg(n,e){for(var t=n.suspendedLanes,a=n.pingedLanes,i=n.expirationTimes,l=n.pendingLanes&-62914561;0<l;){var s=31-K(l),c=1<<s,f=i[s];f===-1?((c&t)===0||(c&a)!==0)&&(i[s]=uo(c,e)):f<=e&&(n.expiredLanes|=c),l&=~c}if(e=te,t=Dn,t=Sa(n,n===e?t:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),a=n.callbackNode,t===0||n===e&&(Jn===2||Jn===9)||n.cancelPendingCommit!==null)return a!==null&&a!==null&&Sr(a),n.callbackNode=null,n.callbackPriority=0;if((t&3)===0||ni(n,t)){if(e=t&-t,e===n.callbackPriority)return e;switch(a!==null&&Sr(a),Or(t)){case 2:case 8:t=Nr;break;case 32:t=Mt;break;case 268435456:t=M;break;default:t=Mt}return a=lg.bind(null,n),t=Tr(t,a),n.callbackPriority=e,n.callbackNode=t,e}return a!==null&&a!==null&&Sr(a),n.callbackPriority=2,n.callbackNode=null,2}function lg(n,e){if(de!==0&&de!==5)return n.callbackNode=null,n.callbackPriority=0,null;var t=n.callbackNode;if(Us()&&n.callbackNode!==t)return null;var a=Dn;return a=Sa(n,n===te?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),a===0?null:(Ih(n,a,e),rg(n,Ie()),n.callbackNode!=null&&n.callbackNode===t?lg.bind(null,n):null)}function sg(n,e){if(Us())return null;Ih(n,e,!0)}function Xb(){ly(function(){(Yn&6)!==0?Tr(Nl,Qb):ig()})}function ru(){if(Ia===0){var n=ui;n===0&&(n=Gt,Gt<<=1,(Gt&261888)===0&&(Gt=256)),Ia=n}return Ia}function og(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Dl(n)}function Jb(n,e,t,a,i){if(e==="submit"&&t&&t.stateNode===i){var l=og((i[B]||null).action),s=a.submitter;s&&(e=(e=s[B]||null)?og(e.formAction):s.getAttribute("formAction"),e!==null&&(l=e,s=null));var c=new Hl("action","action",null,a,i);n.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Ia!==0){var f=new FormData(i,s);hc(t,{pending:!0,data:f,method:i.method,action:l},null,f)}}else typeof l=="function"&&(c.preventDefault(),f=new FormData(i,s),hc(t,{pending:!0,data:f,method:i.method,action:l},l,f))},currentTarget:i}]})}}for(var lu=0;lu<Mo.length;lu++){var su=Mo[lu],Zb=su.toLowerCase(),Fb=su[0].toUpperCase()+su.slice(1);Rt(Zb,"on"+Fb)}Rt(Rd,"onAnimationEnd"),Rt(zd,"onAnimationIteration"),Rt(Dd,"onAnimationStart"),Rt("dblclick","onDoubleClick"),Rt("focusin","onFocus"),Rt("focusout","onBlur"),Rt(rb,"onTransitionRun"),Rt(lb,"onTransitionStart"),Rt(sb,"onTransitionCancel"),Rt(Ld,"onTransitionEnd"),aa("onMouseEnter",["mouseout","mouseover"]),aa("onMouseLeave",["mouseout","mouseover"]),aa("onPointerEnter",["pointerout","pointerover"]),aa("onPointerLeave",["pointerout","pointerover"]),xt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),xt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),xt("onBeforeInput",["compositionend","keypress","textInput","paste"]),xt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),xt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),xt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ol));function cg(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var a=n[t],i=a.event;a=a.listeners;n:{var l=void 0;if(e)for(var s=a.length-1;0<=s;s--){var c=a[s],f=c.instance,T=c.currentTarget;if(c=c.listener,f!==l&&i.isPropagationStopped())break n;l=c,i.currentTarget=T;try{l(i)}catch(w){Yl(w)}i.currentTarget=null,l=f}else for(s=0;s<a.length;s++){if(c=a[s],f=c.instance,T=c.currentTarget,c=c.listener,f!==l&&i.isPropagationStopped())break n;l=c,i.currentTarget=T;try{l(i)}catch(w){Yl(w)}i.currentTarget=null,l=f}}}}function zn(n,e){var t=e[Mn];t===void 0&&(t=e[Mn]=new Set);var a=n+"__bubble";t.has(a)||(ug(e,n,2,!1),t.add(a))}function ou(n,e,t){var a=0;e&&(a|=4),ug(t,n,a,e)}var qs="_reactListening"+Math.random().toString(36).slice(2);function cu(n){if(!n[qs]){n[qs]=!0,Ml.forEach(function(t){t!=="selectionchange"&&(Pb.has(t)||ou(t,!1,n),ou(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[qs]||(e[qs]=!0,ou("selectionchange",!1,e))}}function ug(n,e,t,a){switch($g(e)){case 2:var i=Vy;break;case 8:i=Ky;break;default:i=Au}t=i.bind(null,e,t,n),i=void 0,!vo||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),a?i!==void 0?n.addEventListener(e,t,{capture:!0,passive:i}):n.addEventListener(e,t,!0):i!==void 0?n.addEventListener(e,t,{passive:i}):n.addEventListener(e,t,!1)}function uu(n,e,t,a,i){var l=a;if((e&1)===0&&(e&2)===0&&a!==null)n:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var c=a.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=a.return;s!==null;){var f=s.tag;if((f===3||f===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Ce(c),s===null)return;if(f=s.tag,f===5||f===6||f===26||f===27){a=l=s;continue n}c=c.parentNode}}a=a.return}cd(function(){var T=l,w=po(t),k=[];n:{var x=Bd.get(n);if(x!==void 0){var j=Hl,I=n;switch(n){case"keypress":if(Bl(t)===0)break n;case"keydown":case"keyup":j=Dv;break;case"focusin":I="focus",j=_o;break;case"focusout":I="blur",j=_o;break;case"beforeblur":case"afterblur":j=_o;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=fd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Sv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=qv;break;case Rd:case zd:case Dd:j=wv;break;case Ld:j=Yv;break;case"scroll":case"scrollend":j=_v;break;case"wheel":j=Kv;break;case"copy":case"cut":case"paste":j=Ov;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=gd;break;case"submit":j=Uv;break;case"toggle":case"beforetoggle":j=Qv}var an=(e&4)!==0,wn=!an&&(n==="scroll"||n==="scrollend"),_=an?x!==null?x+"Capture":null:x;an=[];for(var v=T,S;v!==null;){var A=v;if(S=A.stateNode,A=A.tag,A!==5&&A!==26&&A!==27||S===null||_===null||(A=kr(v,_),A!=null&&an.push(cl(v,A,S))),wn)break;v=v.return}0<an.length&&(x=new j(x,I,null,t,w),k.push({event:x,listeners:an}))}}if((e&7)===0){n:{if(j=n==="mouseover"||n==="pointerover",x=n==="mouseout"||n==="pointerout",j&&t!==go&&(I=t.relatedTarget||t.fromElement)&&(Ce(I)||I[rn]))break n;(x||j)&&(I=w.window===w?w:(j=w.ownerDocument)?j.defaultView||j.parentWindow:window,x?(j=t.relatedTarget||t.toElement,x=T,j=j?Ce(j):null,j!==null&&(wn=R(j),an=j.tag,j!==wn||an!==5&&an!==27&&an!==6)&&(j=null)):(x=null,j=T),x!==j&&(an=fd,A="onMouseLeave",_="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(an=gd,A="onPointerLeave",_="onPointerEnter",v="pointer"),wn=x==null?I:Na(x),S=j==null?I:Na(j),I=new an(A,v+"leave",x,t,w),I.target=wn,I.relatedTarget=S,A=null,Ce(w)===T&&(an=new an(_,v+"enter",j,t,w),an.target=S,an.relatedTarget=wn,A=an),wn=A,an=x&&j?vn(x,j,Wb):null,x!==null&&dg(k,I,x,an,!1),j!==null&&wn!==null&&dg(k,wn,j,an,!0)))}n:{if(x=T?Na(T):window,j=x.nodeName&&x.nodeName.toLowerCase(),j==="select"||j==="input"&&x.type==="file")var nn=Td;else if(xd(x))if(Sd)nn=tb;else{nn=nb;var Ln=$v}else j=x.nodeName,!j||j.toLowerCase()!=="input"||x.type!=="checkbox"&&x.type!=="radio"?T&&ho(T.elementType)&&(nn=Td):nn=eb;if(nn&&(nn=nn(n,T))){_d(k,nn,t,w);break n}Ln&&Ln(n,x,T)}switch(Ln=T?Na(T):window,n){case"focusin":(xd(Ln)||Ln.contentEditable==="true")&&(Di=Ln,Oo=T,Ur=null);break;case"focusout":Ur=Oo=Di=null;break;case"mousedown":Ao=!0;break;case"contextmenu":case"mouseup":case"dragend":Ao=!1,Md(k,t,w);break;case"selectionchange":if(ib)break;case"keydown":case"keyup":Md(k,t,w)}var on;if(So)n:{switch(n){case"compositionstart":var fn="onCompositionStart";break n;case"compositionend":fn="onCompositionEnd";break n;case"compositionupdate":fn="onCompositionUpdate";break n}fn=void 0}else zi?bd(n,t)&&(fn="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(fn="onCompositionStart");fn&&(pd&&t.locale!=="ko"&&(zi||fn!=="onCompositionStart"?fn==="onCompositionEnd"&&zi&&(on=ud()):(wa=w,bo="value"in wa?wa.value:wa.textContent,zi=!0)),Ln=Gs(T,fn),0<Ln.length&&(fn=new hd(fn,n,null,t,w),k.push({event:fn,listeners:Ln}),on?fn.data=on:(on=yd(t),on!==null&&(fn.data=on)))),(on=Jv?Zv(n,t):Fv(n,t))&&(fn=Gs(T,"onBeforeInput"),0<fn.length&&(Ln=new hd("onBeforeInput","beforeinput",null,t,w),k.push({event:Ln,listeners:fn}),Ln.data=on)),Jb(k,n,T,t,w)}cg(k,e)})}function cl(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Gs(n,e){for(var t=e+"Capture",a=[];n!==null;){var i=n,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=kr(n,t),i!=null&&a.unshift(cl(n,i,l)),i=kr(n,e),i!=null&&a.push(cl(n,i,l))),n.tag===3)return a;n=n.return}return[]}function Wb(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function dg(n,e,t,a,i){for(var l=e._reactName,s=[];t!==null&&t!==a;){var c=t,f=c.alternate,T=c.stateNode;if(c=c.tag,f!==null&&f===a)break;c!==5&&c!==26&&c!==27||T===null||(f=T,i?(T=kr(t,l),T!=null&&s.unshift(cl(t,T,f))):i||(T=kr(t,l),T!=null&&s.push(cl(t,T,f)))),t=t.return}s.length!==0&&n.push({event:e,listeners:s})}var $b=/\r\n?/g,ny=/\u0000|\uFFFD/g;function fg(n){return(typeof n=="string"?n:""+n).replace($b,`
`).replace(ny,"")}function hg(n,e){return e=fg(e),fg(n)===e}function Fn(n,e,t,a,i,l){switch(t){case"children":if(typeof a=="string")e==="body"||e==="textarea"&&a===""||Mi(n,a);else if(typeof a=="number"||typeof a=="bigint")e!=="body"&&Mi(n,""+a);else return;break;case"className":ia(n,"class",a);break;case"tabIndex":ia(n,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":ia(n,t,a);break;case"style":sd(n,a,l);return;case"data":if(e!=="object"){ia(n,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||t!=="href")){n.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){n.removeAttribute(t);break}a=Dl(a),n.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){n.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(t==="formAction"?(e!=="input"&&Fn(n,e,"name",i.name,i,null),Fn(n,e,"formEncType",i.formEncType,i,null),Fn(n,e,"formMethod",i.formMethod,i,null),Fn(n,e,"formTarget",i.formTarget,i,null)):(Fn(n,e,"encType",i.encType,i,null),Fn(n,e,"method",i.method,i,null),Fn(n,e,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){n.removeAttribute(t);break}a=Dl(a),n.setAttribute(t,a);break;case"onClick":a!=null&&(n.onclick=Yt);return;case"onScroll":a!=null&&zn("scroll",n);return;case"onScrollEnd":a!=null&&zn("scrollend",n);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(t=a.__html,t!=null){if(i.children!=null)throw Error(d(60));l?.__html!==t&&(n.innerHTML=t)}}break;case"multiple":n.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":n.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){n.removeAttribute("xlink:href");break}t=Dl(a),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(t,a):n.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(t,""):n.removeAttribute(t);break;case"capture":case"download":a===!0?n.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(t,a):n.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?n.setAttribute(t,a):n.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?n.removeAttribute(t):n.setAttribute(t,a);break;case"popover":zn("beforetoggle",n),zn("toggle",n),qn(n,"popover",a);break;case"xlinkActuate":Le(n,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Le(n,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Le(n,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Le(n,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Le(n,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Le(n,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Le(n,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Le(n,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Le(n,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":qn(n,"is",a);break;case"innerText":case"textContent":return;default:if(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")t=yv.get(t)||t,qn(n,t,a);else return}Un=!0}function du(n,e,t,a,i,l){switch(t){case"style":sd(n,a,l);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(t=a.__html,t!=null){if(i.children!=null)throw Error(d(60));l?.__html!==t&&(n.innerHTML=t)}}break;case"children":if(typeof a=="string")Mi(n,a);else if(typeof a=="number"||typeof a=="bigint")Mi(n,""+a);else return;break;case"onScroll":a!=null&&zn("scroll",n);return;case"onScrollEnd":a!=null&&zn("scrollend",n);return;case"onClick":a!=null&&(n.onclick=Yt);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Cl.hasOwnProperty(t))n:{if(t[0]==="o"&&t[1]==="n"&&(i=t.endsWith("Capture"),l=t.slice(2,i?t.length-7:void 0),e=n[B]||null,e=e!=null?e[t]:null,typeof e=="function"&&n.removeEventListener(l,e,i),typeof a=="function")){typeof e!="function"&&e!==null&&(t in n?n[t]=null:n.hasAttribute(t)&&n.removeAttribute(t)),n.addEventListener(l,a,i);break n}Un=!0,t in n?n[t]=a:a===!0?n.setAttribute(t,""):qn(n,t,a)}return}Un=!0}function Ye(n,e,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":zn("error",n),zn("load",n);var a=!1,i=!1,l;for(l in t)if(t.hasOwnProperty(l)){var s=t[l];if(s!=null)switch(l){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,e));default:Fn(n,e,l,s,t,null)}}i&&Fn(n,e,"srcSet",t.srcSet,t,null),a&&Fn(n,e,"src",t.src,t,null);return;case"input":zn("invalid",n);var c=l=s=i=null,f=null,T=null;for(a in t)if(t.hasOwnProperty(a)){var w=t[a];if(w!=null)switch(a){case"name":i=w;break;case"type":s=w;break;case"checked":f=w;break;case"defaultChecked":T=w;break;case"value":l=w;break;case"defaultValue":c=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(d(137,e));break;default:Fn(n,e,a,w,t,null)}}zl(n,l,c,f,T,s,i,!1);return;case"select":zn("invalid",n),a=s=l=null;for(i in t)if(t.hasOwnProperty(i)&&(c=t[i],c!=null))switch(i){case"value":l=c;break;case"defaultValue":s=c;break;case"multiple":a=c;default:Fn(n,e,i,c,t,null)}e=l,t=s,n.multiple=!!a,e!=null?ki(n,!!a,e,!1):t!=null&&ki(n,!!a,t,!0);return;case"textarea":zn("invalid",n),l=i=a=null;for(s in t)if(t.hasOwnProperty(s)&&(c=t[s],c!=null))switch(s){case"value":a=c;break;case"defaultValue":i=c;break;case"children":l=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(d(91));break;default:Fn(n,e,s,c,t,null)}rd(n,a,i,l);return;case"option":for(f in t)t.hasOwnProperty(f)&&(a=t[f],a!=null)&&(f==="selected"?n.selected=a&&typeof a!="function"&&typeof a!="symbol":Fn(n,e,f,a,t,null));return;case"dialog":zn("beforetoggle",n),zn("toggle",n),zn("cancel",n),zn("close",n);break;case"iframe":case"object":zn("load",n);break;case"video":case"audio":for(a=0;a<ol.length;a++)zn(ol[a],n);break;case"image":zn("error",n),zn("load",n);break;case"details":zn("toggle",n);break;case"embed":case"source":case"link":zn("error",n),zn("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in t)if(t.hasOwnProperty(T)&&(a=t[T],a!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,e));default:Fn(n,e,T,a,t,null)}return;default:if(ho(e)){for(w in t)t.hasOwnProperty(w)&&(a=t[w],a!==void 0&&du(n,e,w,a,t,void 0));return}}for(c in t)t.hasOwnProperty(c)&&(a=t[c],a!=null&&Fn(n,e,c,a,t,null))}var ey={};function ty(n,e,t,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,s=null,c=null,f=null,T=null,w=null;for(j in t){var k=t[j];if(t.hasOwnProperty(j)&&k!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":f=k;default:a.hasOwnProperty(j)||Fn(n,e,j,null,a,k)}}for(var x in a){var j=a[x];if(k=t[x],a.hasOwnProperty(x)&&(j!=null||k!=null))switch(x){case"type":j!==k&&(Un=!0),l=j;break;case"name":j!==k&&(Un=!0),i=j;break;case"checked":j!==k&&(Un=!0),T=j;break;case"defaultChecked":j!==k&&(Un=!0),w=j;break;case"value":j!==k&&(Un=!0),s=j;break;case"defaultValue":j!==k&&(Un=!0),c=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(d(137,e));break;default:j!==k&&Fn(n,e,x,j,a,k)}}ut(n,s,c,f,T,w,l,i);return;case"select":j=s=c=x=null;for(l in t)if(f=t[l],t.hasOwnProperty(l)&&f!=null)switch(l){case"value":break;case"multiple":j=f;default:a.hasOwnProperty(l)||Fn(n,e,l,null,a,f)}for(i in a)if(l=a[i],f=t[i],a.hasOwnProperty(i)&&(l!=null||f!=null))switch(i){case"value":l!==f&&(Un=!0),x=l;break;case"defaultValue":l!==f&&(Un=!0),c=l;break;case"multiple":l!==f&&(Un=!0),s=l;default:l!==f&&Fn(n,e,i,l,a,f)}e=c,t=s,a=j,x!=null?ki(n,!!t,x,!1):!!a!=!!t&&(e!=null?ki(n,!!t,e,!0):ki(n,!!t,t?[]:"",!1));return;case"textarea":j=x=null;for(c in t)if(i=t[c],t.hasOwnProperty(c)&&i!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:Fn(n,e,c,null,a,i)}for(s in a)if(i=a[s],l=t[s],a.hasOwnProperty(s)&&(i!=null||l!=null))switch(s){case"value":i!==l&&(Un=!0),x=i;break;case"defaultValue":i!==l&&(Un=!0),j=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(d(91));break;default:i!==l&&Fn(n,e,s,i,a,l)}id(n,x,j);return;case"option":for(var I in t)x=t[I],t.hasOwnProperty(I)&&x!=null&&!a.hasOwnProperty(I)&&(I==="selected"?n.selected=!1:Fn(n,e,I,null,a,x));for(f in a)x=a[f],j=t[f],a.hasOwnProperty(f)&&x!==j&&(x!=null||j!=null)&&(f==="selected"?(x!==j&&(Un=!0),n.selected=x&&typeof x!="function"&&typeof x!="symbol"):Fn(n,e,f,x,a,j));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var an in t)x=t[an],t.hasOwnProperty(an)&&x!=null&&!a.hasOwnProperty(an)&&Fn(n,e,an,null,a,x);for(T in a)if(x=a[T],j=t[T],a.hasOwnProperty(T)&&x!==j&&(x!=null||j!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(d(137,e));break;default:Fn(n,e,T,x,a,j)}return;default:if(ho(e)){for(var wn in t)x=t[wn],t.hasOwnProperty(wn)&&x!==void 0&&!a.hasOwnProperty(wn)&&du(n,e,wn,void 0,a,x);for(w in a)x=a[w],j=t[w],!a.hasOwnProperty(w)||x===j||x===void 0&&j===void 0||du(n,e,w,x,a,j);return}}for(var _ in t)x=t[_],t.hasOwnProperty(_)&&x!=null&&!a.hasOwnProperty(_)&&Fn(n,e,_,null,a,x);for(k in a)x=a[k],j=t[k],!a.hasOwnProperty(k)||x===j||x==null&&j==null||Fn(n,e,k,x,a,j)}function gg(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ay(){if(typeof performance.getEntriesByType=="function"){for(var n=0,e=0,t=performance.getEntriesByType("resource"),a=0;a<t.length;a++){var i=t[a],l=i.transferSize,s=i.initiatorType,c=i.duration;if(l&&c&&gg(s)){for(s=0,c=i.responseEnd,a+=1;a<t.length;a++){var f=t[a],T=f.startTime;if(T>c)break;var w=f.transferSize,k=f.initiatorType;w&&gg(k)&&(f=f.responseEnd,s+=w*(f<c?1:(c-T)/(f-T)))}if(--a,e+=8*(l+s)/(i.duration/1e3),n++,10<n)break}}if(0<n)return e/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var fu=null,hu=null;function ul(n){return n.nodeType===9?n:n.ownerDocument}function pg(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function mg(n,e){if(n===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&e==="foreignObject"?0:n}function vg(n,e,t,a){return t=ul(t).createElement(n),t[Ae]=a,t[B]=e,Ye(t,n,e),_e(t),t}function gu(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var pu=null;function iy(){var n=window.event;return n&&n.type==="popstate"?n===pu?!1:(pu=n,!0):(pu=null,!1)}var mu=typeof setTimeout=="function"?setTimeout:void 0,ry=typeof clearTimeout=="function"?clearTimeout:void 0,bg=typeof Promise=="function"?Promise:void 0,yg=typeof requestAnimationFrame=="function"?requestAnimationFrame:mu,ly=typeof queueMicrotask=="function"?queueMicrotask:typeof bg<"u"?function(n){return bg.resolve(null).then(n).catch(sy)}:mu;function sy(n){setTimeout(function(){throw n})}function Qa(n){return n==="head"}function xg(n,e){var t=e,a=0;do{var i=t.nextSibling;if(n.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"||t==="/&"){if(a===0){n.removeChild(i),gr(e);return}a--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")a++;else if(t==="html")ju(n.ownerDocument.documentElement);else if(t==="head"){t=n.ownerDocument.head,ju(t);for(var l=t.firstChild;l;){var s=l.nextSibling,c=l.nodeName;l[at]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&l.rel.toLowerCase()==="stylesheet"||t.removeChild(l),l=s}}else t==="body"&&ju(n.ownerDocument.body);t=i}while(t);gr(e)}function _g(n,e){var t=n;n=0;do{var a=t.nextSibling;if(t.nodeType===1?e?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(e?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(n===0)break;n--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||n++;t=a}while(t)}function Tg(n,e,t){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,n.style.viewTransitionName=e,t!=null&&(n.style.viewTransitionClass=t),t=getComputedStyle(n),t.display==="inline"){if(e=n.getClientRects(),e.length===1)var a=1;else for(var i=a=0;i<e.length;i++){var l=e[i];0<l.width&&0<l.height&&a++}a===1&&(n=n.style,n.display=e.length===1?"inline-block":"block",n.marginTop="-"+t.paddingTop,n.marginBottom="-"+t.paddingBottom)}}function Sg(n,e){n=n.style,e=e.style;var t=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;n.viewTransitionName=t==null||typeof t=="boolean"?"":(""+t).trim(),t=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,n.viewTransitionClass=t==null||typeof t=="boolean"?"":(""+t).trim(),n.display==="inline-block"&&(e==null?n.display=n.margin="":(t=e.display,n.display=t==null||typeof t=="boolean"?"":t,t=e.margin,t!=null?n.margin=t:(t=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],n.marginTop=t==null||typeof t=="boolean"?"":t,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],n.marginBottom=e==null||typeof e=="boolean"?"":e)))}function oy(n,e,t){return t=t.ownerDocument.defaultView,{rect:n,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=n.bottom&&0<=n.right&&n.top<=t.innerHeight&&n.left<=t.innerWidth}}function vu(n){var e=n.getBoundingClientRect(),t=getComputedStyle(n);return oy(e,t,n)}function cy(n){return n.documentElement.clientHeight}function uy(n){this.addEventListener("load",n),this.addEventListener("error",n)}function dy(n,e,t,a,i,l,s,c,f){var T=e.nodeType===9?e:e.ownerDocument;try{var w=T.startViewTransition({update:function(){var x=T.defaultView,j=x.navigation&&x.navigation.transition,I=T.fonts.status;a();var an=[];if(I==="loaded"&&(cy(T),T.fonts.status==="loading"&&an.push(T.fonts.ready)),I=an.length,n!==null)for(var wn=n.suspenseyImages,_=0,v=0;v<wn.length;v++){var S=wn[v];if(!S.complete){var A=S.getBoundingClientRect();if(0<A.bottom&&0<A.right&&A.top<x.innerHeight&&A.left<x.innerWidth){if(_+=Kg(S),_>Ks){an.length=I;break}S=new Promise(uy.bind(S)),an.push(S)}}}if(0<an.length)return x=Promise.race([Promise.all(an),new Promise(function(nn){return setTimeout(nn,500)})]).then(i,i),(j?Promise.allSettled([j.finished,x]):x).then(l,l);if(i(),j)return j.finished.then(l,l);l()},types:t});T.__reactViewTransition=w;var k=[];return w.ready.then(function(){for(var x=T.documentElement.getAnimations({subtree:!0}),j=0;j<x.length;j++){var I=x[j],an=I.effect,wn=an.pseudoElement;if(wn!=null&&wn.startsWith("::view-transition")){k.push(I),I=an.getKeyframes();for(var _=wn=void 0,v=!0,S=0;S<I.length;S++){var A=I[S],nn=A.width;if(wn===void 0)wn=nn;else if(wn!==nn){v=!1;break}if(nn=A.height,_===void 0)_=nn;else if(_!==nn){v=!1;break}delete A.width,delete A.height,A.transform==="none"&&delete A.transform}v&&wn!==void 0&&_!==void 0&&(an.setKeyframes(I),v=getComputedStyle(an.target,an.pseudoElement),v.width!==wn||v.height!==_)&&(v=I[0],v.width=wn,v.height=_,v=I[I.length-1],v.width=wn,v.height=_,an.setKeyframes(I))}}s()},function(x){T.__reactViewTransition===w&&(T.__reactViewTransition=null);try{typeof x=="object"&&x!==null&&x.name==="InvalidStateError"&&(x.message==="View transition was skipped because document visibility state is hidden."||x.message==="Skipping view transition because document visibility state has become hidden."||x.message==="Skipping view transition because viewport size changed."||x.message==="Transition was aborted because of invalid state")&&(x=null),x!==null&&f(x)}finally{a(),i(),s()}}),w.finished.finally(function(){for(var x=0;x<k.length;x++)k[x].cancel();T.__reactViewTransition===w&&(T.__reactViewTransition=null),c()}),w}catch{return a(),i(),s(),null}}function _i(n,e){this._scope=document.documentElement,this._selector="::view-transition-"+n+"("+e+")"}_i.prototype.animate=function(n,e){return e=typeof e=="number"?{duration:e}:Z({},e),e.pseudoElement=this._selector,this._scope.animate(n,e)},_i.prototype.getAnimations=function(){for(var n=this._scope,e=this._selector,t=n.getAnimations({subtree:!0}),a=[],i=0;i<t.length;i++){var l=t[i].effect;l!==null&&l.target===n&&l.pseudoElement===e&&a.push(t[i])}return a},_i.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function jg(n){return{name:n,group:new _i("group",n),imagePair:new _i("image-pair",n),old:new _i("old",n),new:new _i("new",n)}}function vt(n){this._fragmentFiber=n,this._observers=this._eventListeners=null}vt.prototype.addEventListener=function(n,e,t){var a=null,i=null;if(!(t!=null&&typeof t!="boolean"&&(a=t.signal||null,a!==null&&a.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var l=this._eventListeners;if(wg(l,n,e,t)===-1){var s=this,c=e;t!=null&&typeof t!="boolean"&&t.once===!0&&(c=function(f){s.removeEventListener(n,e,t),typeof e=="function"?e.call(this,f):e.handleEvent(f)}),a!==null&&(i=s.removeEventListener.bind(s,n,e,t),a.addEventListener("abort",i,{once:!0}),i=a.removeEventListener.bind(a,"abort",i)),a=or(t),l.push({type:n,listener:e,optionsOrUseCapture:t,attachedListener:c,cleanup:i}),b(this._fragmentFiber.child,!1,fy,n,c,a)}this._eventListeners=l}};function fy(n,e,t,a){return en(n).addEventListener(e,t,a),!1}vt.prototype.removeEventListener=function(n,e,t){var a=this._eventListeners;if(a!==null&&(e=wg(a,n,e,t),e!==-1)){var i=a[e];t=i.attachedListener;var l=i.cleanup;i=or(i.optionsOrUseCapture),b(this._fragmentFiber.child,!1,hy,n,t,i),a.splice(e,1),l!==null&&l()}};function hy(n,e,t,a){return en(n).removeEventListener(e,t,a),!1}function or(n){return n!=null&&typeof n!="boolean"&&(n.once===!0||n.signal instanceof AbortSignal)?{capture:n.capture,passive:n.passive}:n}function Ng(n){return n==null?"c=0":typeof n=="boolean"?"c="+(n?"1":"0"):"c="+(n.capture?"1":"0")}function wg(n,e,t,a){if(n.length===0)return-1;a=Ng(a);for(var i=0;i<n.length;i++){var l=n[i];if(l.type===e&&l.listener===t&&Ng(l.optionsOrUseCapture)===a)return i}return-1}vt.prototype.dispatchEvent=function(n){var e=N(this._fragmentFiber);if(e===null)return!0;e=en(e);var t=this._eventListeners;if(t!==null&&0<t.length||!n.bubbles){var a=e.nodeType===9?e.createComment(""):document.createTextNode("");if(t)for(var i=0;i<t.length;i++){var l=t[i];a.addEventListener(l.type,l.attachedListener,or(l.optionsOrUseCapture))}if(e.appendChild(a),n=a.dispatchEvent(n),t)for(i=0;i<t.length;i++)l=t[i],a.removeEventListener(l.type,l.attachedListener,or(l.optionsOrUseCapture));return e.removeChild(a),n}return e.dispatchEvent(n)},vt.prototype.focus=function(n){b(this._fragmentFiber.child,!0,Eg,n,void 0,void 0)};function Eg(n,e){return n.tag===6?!1:(n=en(n),Ny(n,e))}vt.prototype.focusLast=function(n){var e=[];b(this._fragmentFiber.child,!0,bu,e,void 0,void 0);for(var t=e.length-1;0<=t&&!Eg(e[t],n);t--);};function bu(n,e){return e.push(n),!1}vt.prototype.blur=function(){var n=N(this._fragmentFiber);n!==null&&(n=en(n),n=ul(n).activeElement,n!==null&&b(this._fragmentFiber.child,!1,gy,n,void 0,void 0))};function gy(n,e){return n.tag===6?!1:(n=en(n),n===e||n.contains(e)?(e.blur(),!0):!1)}vt.prototype.observeUsing=function(n){this._observers===null&&(this._observers=new Set),this._observers.add(n),b(this._fragmentFiber.child,!1,py,n,void 0,void 0)};function py(n,e){return n.tag===6||(n=en(n),e.observe(n)),!1}vt.prototype.unobserveUsing=function(n){var e=this._observers;if(e!==null&&e.has(n)){e.delete(n),b(this._fragmentFiber.child,!1,my,n,void 0,void 0);for(var t=e=0;t<Ut.length;t++){var a=Ut[t];a.fragmentInstance===this&&a.observer===n?n.unobserve(a.instance):Ut[e++]=a}Ut.length=e}};function my(n,e){return n.tag===6||(n=en(n),e.unobserve(n)),!1}var Ut=[],yu=!1;function vy(n,e,t){Ut.push({fragmentInstance:n,observer:e,instance:t}),yu||(yu=!0,wy(function(){yu=!1;var a=Ut;Ut=[];for(var i=0;i<a.length;i++){var l=a[i];l.observer.unobserve(l.instance)}}))}vt.prototype.getClientRects=function(){var n=[];return b(this._fragmentFiber.child,!1,by,n,void 0,void 0),n};function by(n,e){if(n.tag===6){n=n.stateNode;var t=n.ownerDocument.createRange();t.selectNodeContents(n),e.push.apply(e,t.getClientRects())}else n=en(n),e.push.apply(e,n.getClientRects());return!1}vt.prototype.getRootNode=function(n){var e=N(this._fragmentFiber);return e===null?this:en(e).getRootNode(n)},vt.prototype.compareDocumentPosition=function(n){var e=N(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var t=[];b(this._fragmentFiber.child,!1,bu,t,void 0,void 0);var a=en(e);if(t.length===0){if(t=a,V(this._fragmentFiber)){n:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break n}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(t=e)}e=this._fragmentFiber;var i=a=t.compareDocumentPosition(n);return t===n?i=Node.DOCUMENT_POSITION_CONTAINS:a&Node.DOCUMENT_POSITION_CONTAINED_BY&&(t=q(e)[1],t===null?i=Node.DOCUMENT_POSITION_PRECEDING:(n=en(t).compareDocumentPosition(n),i=n===0||n&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=en(t[0]),i=en(t[t.length-1]);var l=V(this._fragmentFiber)?e.parentElement:a;if(l==null)return Node.DOCUMENT_POSITION_DISCONNECTED;a=l.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,l=l.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var s=e.compareDocumentPosition(n),c=i.compareDocumentPosition(n),f=s&Node.DOCUMENT_POSITION_CONTAINED_BY||c&Node.DOCUMENT_POSITION_CONTAINED_BY;return c=a&&l&&s&Node.DOCUMENT_POSITION_FOLLOWING&&c&Node.DOCUMENT_POSITION_PRECEDING,e=a&&e===n||l&&i===n||f||c?Node.DOCUMENT_POSITION_CONTAINED_BY:!a&&e===n||!l&&i===n?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:s,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||yy(e,this._fragmentFiber,t[0],t[t.length-1],n)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function yy(n,e,t,a,i){var l=Ce(i);if(n&Node.DOCUMENT_POSITION_CONTAINED_BY){if(t=!!l)n:{for(;l!==null;){if(l.tag===7&&(l===e||l.alternate===e)){t=!0;break n}l=l.return}t=!1}return t}if(n&Node.DOCUMENT_POSITION_CONTAINS){if(l===null)return l=i.ownerDocument,i===l||i===l.documentElement||i===l.body;n:{for(l=e,e=N(e);l!==null;){if(!(l.tag!==5&&l.tag!==3&&l.tag!==27||l!==e&&l.alternate!==e)){l=!0;break n}l=l.return}l=!1}return l}return n&Node.DOCUMENT_POSITION_PRECEDING?((e=!!l)&&!(e=l===t)&&(e=vn(t,l,Kn),e===null?e=!1:(b(e,!0,hn,l,t),l=_n,_n=null,e=l!==null)),e):n&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!l)&&!(e=l===a)&&(e=vn(a,l,Kn),e===null?e=!1:(b(e,!0,En,l,a),l=_n,gn=_n=null,e=l!==null)),e):!1}function Og(n,e){var t=n.ownerDocument.createRange();t.selectNodeContents(n),n=t.getBoundingClientRect(),window.scrollTo(window.scrollX+n.left,e?window.scrollY+n.top:window.scrollY+n.bottom-window.innerHeight)}vt.prototype.scrollIntoView=function(n){if(typeof n=="object")throw Error(d(566));var e=[];b(this._fragmentFiber.child,!1,bu,e,void 0,void 0);var t=n!==!1;if(e.length===0){var a=q(this._fragmentFiber);if(a=t?a[1]||a[0]||N(this._fragmentFiber):a[0]||a[1],a===null)return;if(a.tag===6){n=en(a),Og(n,t);return}if(a=en(a),a.nodeType!==9){if(a.nodeType===11){t="host"in a?a.host:null,t!==null&&t.scrollIntoView(n);return}a.scrollIntoView(n)}}for(a=t?e.length-1:0;a!==(t?-1:e.length);){var i=e[a];i.tag===6?(i=en(i),Og(i,t)):en(i).scrollIntoView(n),a+=t?-1:1}};function xy(n,e){return n=en(n),Ag(n,e),!1}function Ag(n,e){n.reactFragments==null&&(n.reactFragments=new Set),n.reactFragments.add(e)}function kg(n,e){var t=e._eventListeners;if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];n.addEventListener(i.type,i.attachedListener,or(i.optionsOrUseCapture))}n.nodeType!==3&&(t=e._observers,t!==null&&t.forEach(function(l){for(var s=0,c=0;c<Ut.length;c++){var f=Ut[c];(f.fragmentInstance!==e||f.observer!==l||f.instance!==n)&&(Ut[s++]=f)}Ut.length=s,l.observe(n)}),Ag(n,e))}function _y(n,e){var t=e._eventListeners;if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];n.removeEventListener(i.type,i.attachedListener,or(i.optionsOrUseCapture))}n.nodeType!==3&&(t=e._observers,t!==null&&t.forEach(function(l){typeof l.rootMargin=="string"?vy(e,l,n):l.unobserve(n)}),n.reactFragments!=null&&n.reactFragments.delete(e))}function xu(n){var e=n.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var t=e;switch(e=e.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":xu(t),Me(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}n.removeChild(t)}}function Ty(n,e,t,a){for(;n.nodeType===1;){var i=t;if(n.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(a){if(!n[at])switch(e){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(l=n.getAttribute("rel"),l==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(l!==i.rel||n.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||n.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||n.getAttribute("title")!==(i.title==null?null:i.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(l=n.getAttribute("src"),(l!==(i.src==null?null:i.src)||n.getAttribute("type")!==(i.type==null?null:i.type)||n.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(e==="input"&&n.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&n.getAttribute("name")===l)return n}else return n;if(n=Ot(n.nextSibling),n===null)break}return null}function Sy(n,e,t){if(e==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!t||(n=Ot(n.nextSibling),n===null))return null;return n}function Mg(n,e){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=Ot(n.nextSibling),n===null))return null;return n}function _u(n){return n.data==="$?"||n.data==="$~"}function Tu(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function jy(n,e){var t=n.ownerDocument;if(n.data==="$~")n._reactRetry=e;else if(n.data!=="$?"||t.readyState!=="loading")e();else{var a=function(){e(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),n._reactRetry=a}}function Ot(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return n}var Su=null;function Cg(n){n=n.nextSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"||t==="/&"){if(e===0)return Ot(n.nextSibling);e--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||e++}n=n.nextSibling}return null}function Rg(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(e===0)return n;e--}else t!=="/$"&&t!=="/&"||e++}n=n.previousSibling}return null}function Ny(n,e){function t(){a=!0}if(n.ownerDocument.activeElement===n)return!0;var a=!1;try{n.ownerDocument.addEventListener("focus",t,!0),(n.focus||HTMLElement.prototype.focus).call(n,e)}finally{n.ownerDocument.removeEventListener("focus",t,!0)}return a}function wy(n){yg(function(){yg(function(e){return n(e)})})}function zg(n,e,t){switch(e=ul(t),n){case"html":if(n=e.documentElement,!n)throw Error(d(452));return n;case"head":if(n=e.head,!n)throw Error(d(453));return n;case"body":if(n=e.body,!n)throw Error(d(454));return n;default:throw Error(d(451))}}function Dg(n,e,t){for(var a in t){var i=t[a];t.hasOwnProperty(a)&&i!=null&&Fn(n,e,a,null,ey,i)}t.dangerouslySetInnerHTML!=null&&(n.textContent=""),n.onclick===Yt&&(n.onclick=null),Me(n)}function ju(n){for(var e=n.attributes;e.length;)n.removeAttributeNode(e[0]);Me(n)}var At=new Map,Lg=new Set;function dl(n){if(typeof n.getRootNode=="function"){var e=n.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return n.nodeType===9?n:n.ownerDocument}var va=dn.d;dn.d={f:Ey,r:Oy,D:Ay,C:ky,L:My,m:Cy,X:zy,S:Ry,M:Dy};function Ey(){var n=va.f(),e=Ds();return n||e}function Oy(n){var e=ea(n);e!==null&&e.tag===5&&e.type==="form"?Uf(e):va.r(n)}var cr=typeof document>"u"?null:document;function Bg(n,e,t){var a=cr;if(a&&typeof e=="string"&&e){var i=Xn(e);i='link[rel="'+n+'"][href="'+i+'"]',typeof t=="string"&&(i+='[crossorigin="'+t+'"]'),Lg.has(i)||(Lg.add(i),n={rel:n,crossOrigin:t,href:e},a.querySelector(i)===null&&(e=a.createElement("link"),Ye(e,"link",n),_e(e),a.head.appendChild(e)))}}function Ay(n){va.D(n),Bg("dns-prefetch",n,null)}function ky(n,e){va.C(n,e),Bg("preconnect",n,e)}function My(n,e,t){va.L(n,e,t);var a=cr;if(a&&n&&e){var i='link[rel="preload"][as="'+Xn(e)+'"]';e==="image"&&t&&t.imageSrcSet?(i+='[imagesrcset="'+Xn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(i+='[imagesizes="'+Xn(t.imageSizes)+'"]')):i+='[href="'+Xn(n)+'"]';var l=i;switch(e){case"style":l=ur(n);break;case"script":l=dr(n)}if(!(At.has(l)||(n=Z({rel:"preload",href:e==="image"&&t&&t.imageSrcSet?void 0:n,as:e},t),At.set(l,n),a.querySelector(i)!==null||e==="style"&&a.querySelector(fl(l))||e==="script"&&a.querySelector(hl(l))))){var s=a.createElement("link");Ye(s,"link",n),e==="style"&&(s[na]=!0,s.onload=s.onerror=function(){kl(s)}),_e(s),a.head.appendChild(s)}}}function Cy(n,e){va.m(n,e);var t=cr;if(t&&n){var a=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+Xn(a)+'"][href="'+Xn(n)+'"]',l=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=dr(n)}if(!At.has(l)&&(n=Z({rel:"modulepreload",href:n},e),At.set(l,n),t.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(hl(l)))return}a=t.createElement("link"),Ye(a,"link",n),_e(a),t.head.appendChild(a)}}}function Ry(n,e,t){va.S(n,e,t);var a=cr;if(a&&n){var i=ta(a).hoistableStyles,l=ur(n);e=e||"default";var s=i.get(l);if(!s){var c={loading:0,preload:null};if(s=a.querySelector(fl(l)))c.loading=5;else{n=Z({rel:"stylesheet",href:n,"data-precedence":e},t),(t=At.get(l))&&Nu(n,t);var f=s=a.createElement("link");_e(f),Ye(f,"link",n),f._p=new Promise(function(T,w){f.onload=T,f.onerror=w}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Ys(s,e,a)}s={type:"stylesheet",instance:s,count:1,state:c},i.set(l,s)}}}function zy(n,e){va.X(n,e);var t=cr;if(t&&n){var a=ta(t).hoistableScripts,i=dr(n),l=a.get(i);l||(l=t.querySelector(hl(i)),l||(n=Z({src:n,async:!0},e),(e=At.get(i))&&wu(n,e),l=t.createElement("script"),_e(l),Ye(l,"link",n),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function Dy(n,e){va.M(n,e);var t=cr;if(t&&n){var a=ta(t).hoistableScripts,i=dr(n),l=a.get(i);l||(l=t.querySelector(hl(i)),l||(n=Z({src:n,async:!0,type:"module"},e),(e=At.get(i))&&wu(n,e),l=t.createElement("script"),_e(l),Ye(l,"link",n),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function Ug(n,e,t,a){var i=(i=Ht.current)?dl(i):null;if(!i)throw Error(d(446));switch(n){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(t=ur(t.href),e=ta(i).hoistableStyles,a=e.get(t),a||(a={type:"style",instance:null,count:0,state:null},e.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){n=ur(t.href);var l=ta(i).hoistableStyles,s=l.get(n);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(n,s),(l=i.querySelector(fl(n)))?l._p||(s.instance=l,s.state.loading=5):(l=At.get(n),l||(l={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},At.set(n,l)),Ly(i,n,l,s.state))),e&&a===null)throw Error(d(528,""));return s}if(e&&a!==null)throw Error(d(529,""));return null;case"script":return e=t.async,t=t.src,typeof t=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(t=dr(t),e=ta(i).hoistableScripts,a=e.get(t),a||(a={type:"script",instance:null,count:0,state:null},e.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,n))}}function ur(n){return'href="'+Xn(n)+'"'}function fl(n){return'link[rel="stylesheet"]['+n+"]"}function Hg(n){return Z({},n,{"data-precedence":n.precedence,precedence:null})}function Ly(n,e,t,a){if(e=n.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[na]!==!0){a.loading=1;return}}else e=n.createElement("link"),e[na]=!0,e.onload=e.onerror=kl.bind(null,e),Ye(e,"link",t),_e(e),n.head.appendChild(e);a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2})}function dr(n){return'[src="'+Xn(n)+'"]'}function hl(n){return"script[async]"+n}function qg(n,e,t){if(e.count++,e.instance===null)switch(e.type){case"style":var a=n.querySelector('style[data-href~="'+Xn(t.href)+'"]');if(a)return e.instance=a,_e(a),a;var i=Z({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(n.ownerDocument||n).createElement("style"),_e(a),Ye(a,"style",i),Ys(a,t.precedence,n),e.instance=a;case"stylesheet":i=ur(t.href);var l=n.querySelector(fl(i));if(l)return e.state.loading|=4,e.instance=l,_e(l),l;a=Hg(t),(i=At.get(i))&&Nu(a,i),l=(n.ownerDocument||n).createElement("link"),_e(l);var s=l;return s._p=new Promise(function(c,f){s.onload=c,s.onerror=f}),Ye(l,"link",a),e.state.loading|=4,Ys(l,t.precedence,n),e.instance=l;case"script":return l=dr(t.src),(i=n.querySelector(hl(l)))?(e.instance=i,_e(i),i):(a=t,(i=At.get(l))&&(a=Z({},t),wu(a,i)),n=n.ownerDocument||n,i=n.createElement("script"),_e(i),Ye(i,"link",a),n.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(d(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Ys(a,t.precedence,n));return e.instance}function Ys(n,e,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,l=i,s=0;s<a.length;s++){var c=a[s];if(c.dataset.precedence===e)l=c;else if(l!==i)break}l?l.parentNode.insertBefore(n,l.nextSibling):(e=t.nodeType===9?t.head:t,e.insertBefore(n,e.firstChild))}function Nu(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.title==null&&(n.title=e.title)}function wu(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.integrity==null&&(n.integrity=e.integrity)}var Vs=null;function Gg(n,e,t){if(Vs===null){var a=new Map,i=Vs=new Map;i.set(t,a)}else i=Vs,a=i.get(t),a||(a=new Map,i.set(t,a));if(a.has(n))return a;for(a.set(n,null),t=t.getElementsByTagName(n),i=0;i<t.length;i++){var l=t[i];if(!(l[at]||l[Ae]||n==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var s=l.getAttribute(e)||"";s=n+s;var c=a.get(s);c?c.push(l):a.set(s,[l])}}return a}function Eu(n,e,t){n=n.ownerDocument||n,n.head.insertBefore(t,e==="title"?n.querySelector("head > title"):null)}function By(n,e,t){if(t===1||e.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(n=e.disabled,typeof e.precedence=="string"&&n==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Yg(n,e){return n==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function Vg(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function Kg(n){return(n.width||100)*(n.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Ig(n,e){typeof e.decode=="function"&&(n.imgCount++,e.complete||(n.imgBytes+=Kg(e),n.suspenseyImages.push(e)),n=qy.bind(n),e.decode().then(n,n))}function Uy(n,e,t,a){if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=ur(a.href),l=e.querySelector(fl(i));if(l){e=l._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=gl.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=l,_e(l);return}l=e.ownerDocument||e,a=Hg(a),(i=At.get(i))&&Nu(a,i),l=l.createElement("link"),_e(l);var s=l;s._p=new Promise(function(c,f){s.onload=c,s.onerror=f}),Ye(l,"link",a),t.instance=l}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=gl.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}var Ks=0;function Hy(n,e){return n.stylesheets&&n.count===0&&Qs(n,n.stylesheets),0<n.count||0<n.imgCount?function(t){var a=setTimeout(function(){if(n.stylesheets&&Qs(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4+e);0<n.imgBytes&&Ks===0&&(Ks=62500*ay());var i=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&Qs(n,n.stylesheets),n.unsuspend)){var l=n.unsuspend;n.unsuspend=null,l()}},(n.imgBytes>Ks?50:800)+e);return n.unsuspend=t,function(){n.unsuspend=null,clearTimeout(a),clearTimeout(i)}}:null}function Qg(n){if(n.count===0&&(n.imgCount===0||!n.waitingForImages)){if(n.stylesheets)Qs(n,n.stylesheets);else if(n.unsuspend){var e=n.unsuspend;n.unsuspend=null,e()}}}function gl(){this.count--,Qg(this)}function qy(){this.imgCount--,Qg(this)}var Is=null;function Qs(n,e){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Is=new Map,e.forEach(Gy,n),Is=null,gl.call(n))}function Gy(n,e){if(!(e.state.loading&4)){var t=Is.get(n);if(t)var a=t.get(null);else{t=new Map,Is.set(n,t);for(var i=n.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var s=i[l];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(t.set(s.dataset.precedence,s),a=s)}a&&t.set(null,a)}i=e.instance,s=i.getAttribute("data-precedence"),l=t.get(s)||a,l===a&&t.set(null,i),t.set(s,i),this.count++,a=gl.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),l?l.parentNode.insertBefore(i,l.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(i,n.firstChild)),e.state.loading|=4}}var fr={$$typeof:oe,Provider:null,Consumer:null,_currentValue:$e,_currentValue2:$e,_threadCount:0};function Yy(n,e,t,a,i,l,s,c,f){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ja(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ja(0),this.hiddenUpdates=ja(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.transitionTypes=null,this.incompleteTransitions=new Map}function Xg(n,e,t,a,i,l,s,c,f,T,w,k){return n=new Yy(n,e,t,s,f,T,w,k,c),e=1,l===!0&&(e|=24),l=it(3,null,null,e),n.current=l,l.stateNode=n,e=Yo(),e.refCount++,n.pooledCache=e,e.refCount++,l.memoizedState={element:a,isDehydrated:t,cache:e},Qo(l),n}function Jg(n){return n?(n=Ui,n):Ui}function Zg(n,e,t,a,i,l){i=Jg(i),a.context===null?a.context=i:a.pendingContext=i,a=za(e),a.payload={element:t},l=l===void 0?null:l,l!==null&&(a.callback=l),t=Da(n,a,e),t!==null&&(ot(t,n,e),Ir(t,n,e))}function Fg(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Ou(n,e){Fg(n,e),(n=n.alternate)&&Fg(n,e)}function Pg(n){if(n.tag===13||n.tag===31){var e=ii(n,67108864);e!==null&&ot(e,n,67108864),Ou(n,67108864)}}function Wg(n){if(n.tag===13||n.tag===31){var e=mt();e=Ei(e);var t=ii(n,e);t!==null&&ot(t,n,e),Ou(n,e)}}var hr=!0;function Vy(n,e,t,a){var i=tn.T;tn.T=null;var l=dn.p;try{dn.p=2,Au(n,e,t,a)}finally{dn.p=l,tn.T=i}}function Ky(n,e,t,a){var i=tn.T;tn.T=null;var l=dn.p;try{dn.p=8,Au(n,e,t,a)}finally{dn.p=l,tn.T=i}}function Au(n,e,t,a){if(hr){var i=ku(a);if(i===null)uu(n,e,a,Xs,t),np(n,a);else if(Qy(i,n,e,t,a))a.stopPropagation();else if(np(n,a),e&4&&-1<Iy.indexOf(n)){for(;i!==null;){var l=ea(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var s=$t(l.pendingLanes);if(s!==0){var c=l;for(c.pendingLanes|=2,c.entangledLanes|=2;s;){var f=1<<31-K(s);c.entanglements[1]|=f,s&=~f}Wt(l),(Yn&6)===0&&(Cs=Ie()+500,sl(0))}}break;case 31:case 13:c=ii(l,2),c!==null&&ot(c,l,2),Ds(),Ou(l,2)}if(l=ku(a),l===null&&uu(n,e,a,Xs,t),l===i)break;i=l}i!==null&&a.stopPropagation()}else uu(n,e,a,null,t)}}function ku(n){return n=po(n),Mu(n)}var Xs=null;function Mu(n){if(Xs=null,n=Ce(n),n!==null){var e=R(n);if(e===null)n=null;else{var t=e.tag;if(t===13){if(n=C(e),n!==null)return n;n=null}else if(t===31){if(n=z(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null)}}return Xs=n,null}function $g(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jl()){case Nl:return 2;case Nr:return 8;case Mt:case p:return 32;case M:return 268435456;default:return 32}default:return 32}}var Cu=!1,Xa=null,Ja=null,Za=null,pl=new Map,ml=new Map,Fa=[],Iy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function np(n,e){switch(n){case"focusin":case"focusout":Xa=null;break;case"dragenter":case"dragleave":Ja=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":pl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ml.delete(e.pointerId)}}function vl(n,e,t,a,i,l){return n===null||n.nativeEvent!==l?(n={blockedOn:e,domEventName:t,eventSystemFlags:a,nativeEvent:l,targetContainers:[i]},e!==null&&(e=ea(e),e!==null&&Pg(e)),n):(n.eventSystemFlags|=a,e=n.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),n)}function Qy(n,e,t,a,i){switch(e){case"focusin":return Xa=vl(Xa,n,e,t,a,i),!0;case"dragenter":return Ja=vl(Ja,n,e,t,a,i),!0;case"mouseover":return Za=vl(Za,n,e,t,a,i),!0;case"pointerover":var l=i.pointerId;return pl.set(l,vl(pl.get(l)||null,n,e,t,a,i)),!0;case"gotpointercapture":return l=i.pointerId,ml.set(l,vl(ml.get(l)||null,n,e,t,a,i)),!0}return!1}function ep(n){var e=Ce(n.target);if(e!==null){var t=R(e);if(t!==null){if(e=t.tag,e===13){if(e=C(t),e!==null){n.blockedOn=e,Al(n.priority,function(){Wg(t)});return}}else if(e===31){if(e=z(t),e!==null){n.blockedOn=e,Al(n.priority,function(){Wg(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Js(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=ku(n.nativeEvent);if(t===null){t=n.nativeEvent;var a=new t.constructor(t.type,t);go=a,t.target.dispatchEvent(a),go=null}else return e=ea(t),e!==null&&Pg(e),n.blockedOn=t,!1;e.shift()}return!0}function tp(n,e,t){Js(n)&&t.delete(e)}function Xy(){Cu=!1,Xa!==null&&Js(Xa)&&(Xa=null),Ja!==null&&Js(Ja)&&(Ja=null),Za!==null&&Js(Za)&&(Za=null),pl.forEach(tp),ml.forEach(tp)}function Zs(n,e){n.blockedOn===e&&(n.blockedOn=null,Cu||(Cu=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Xy)))}var Fs=null;function ap(n){Fs!==n&&(Fs=n,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Fs===n&&(Fs=null);for(var e=0;e<n.length;e+=3){var t=n[e],a=n[e+1],i=n[e+2];if(typeof a!="function"){if(Mu(a||t)===null)continue;break}var l=ea(t);l!==null&&(n.splice(e,3),e-=3,hc(l,{pending:!0,data:i,method:t.method,action:a},a,i))}}))}function gr(n){function e(f){return Zs(f,n)}Xa!==null&&Zs(Xa,n),Ja!==null&&Zs(Ja,n),Za!==null&&Zs(Za,n),pl.forEach(e),ml.forEach(e);for(var t=0;t<Fa.length;t++){var a=Fa[t];a.blockedOn===n&&(a.blockedOn=null)}for(;0<Fa.length&&(t=Fa[0],t.blockedOn===null);)ep(t),t.blockedOn===null&&Fa.shift();if(t=(n.ownerDocument||n).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var i=t[a],l=t[a+1],s=i[B]||null;if(typeof l=="function")s||ap(t);else if(s){var c=null;if(l&&l.hasAttribute("formAction")){if(i=l,s=l[B]||null)c=s.formAction;else if(Mu(i)!==null)continue}else c=s.action;typeof c=="function"?t[a+1]=c:(t.splice(a,3),a-=3),ap(t)}}}function ip(){function n(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(s){return i=s})},focusReset:"manual",scroll:"manual"})}function e(){i!==null&&(i(),i=null),a||setTimeout(t,20)}function t(){if(!a&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,i=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(t,100),function(){a=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),i!==null&&(i(),i=null)}}}function Ru(n){this._internalRoot=n}Ps.prototype.render=Ru.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(d(409));var t=e.current,a=mt();Zg(t,a,n,e,null,null)},Ps.prototype.unmount=Ru.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Zg(n.current,2,null,n,null,null),Ds(),e[rn]=null}};function Ps(n){this._internalRoot=n}Ps.prototype.unstable_scheduleHydration=function(n){if(n){var e=Ol();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Fa.length&&e!==0&&e<Fa[t].priority;t++);Fa.splice(t,0,n),t===0&&ep(n)}};var rp=g.version;if(rp!=="19.3.1")throw Error(d(527,rp,"19.3.1"));dn.findDOMNode=function(n){var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(d(188)):(n=Object.keys(n).join(","),Error(d(268,n)));return n=G(e),n=n!==null?D(n):null,n=n===null?null:n.stateNode,n};var Jy={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:tn,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ws=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ws.isDisabled&&Ws.supportsFiber)try{ee=Ws.inject(Jy),Bn=Ws}catch{}}return yl.createRoot=function(n,e){if(!E(n))throw Error(d(299));var t=!1,a="",i=Jf,l=Zf,s=Ff;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(l=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Xg(n,1,!1,null,null,t,a,null,i,l,s,ip),n[rn]=e.current,cu(n),new Ru(e)},yl.hydrateRoot=function(n,e,t){if(!E(n))throw Error(d(299));var a=!1,i="",l=Jf,s=Zf,c=Ff,f=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.formState!==void 0&&(f=t.formState)),e=Xg(n,1,!0,e,t??null,a,i,f,l,s,c,ip),e.context=Jg(null),t=e.current,a=mt(),a=Ei(a),i=za(a),i.callback=null,Da(t,i,a),t=a,e.current.lanes=t,ei(e,t),Wt(e),n[rn]=e.current,cu(n),new Ps(e)},yl.version="19.3.1",yl}var pp;function ax(){if(pp)return Du.exports;pp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(g){console.error(g)}}return o(),Du.exports=tx(),Du.exports}var ix=ax();const rx=br(ix);var U=Wu();const lo=br(U),$u=["python","javascript","java","cpp"];function lx(){try{const o=localStorage.getItem("selectedLanguage");return o&&$u.includes(o)?o:"python"}catch{return"python"}}const Dp=U.createContext(void 0),sx=({children:o})=>{const[g,h]=U.useState(lx);return U.useEffect(()=>{try{localStorage.setItem("selectedLanguage",g)}catch{}},[g]),r.jsx(Dp.Provider,{value:{selectedLanguage:g,setSelectedLanguage:h},children:o})};function Lp(){const o=U.useContext(Dp);if(o===void 0)throw new Error("useLanguage must be used within a LanguageProvider");return o}const Bp=U.createContext(void 0);function ox({children:o}){const[g,h]=U.useState(!1),d=()=>h(!0),E=()=>h(!1),R=()=>h(!g);return r.jsx(Bp.Provider,{value:{isSidebarOpen:g,showSidebar:d,hideSidebar:E,toggleSidebar:R},children:o})}function nd(){const o=U.useContext(Bp);if(o===void 0)throw new Error("useSidebar must be used within SidebarProvider");return o}const Up=U.createContext(void 0);function cx({children:o}){const[g,h]=U.useState("finder");return r.jsx(Up.Provider,{value:{view:g,setView:h},children:o})}function so(){const o=U.useContext(Up);if(o===void 0)throw new Error("useView must be used within ViewProvider");return o}const ux="_topbar_1nd3w_1",dx="_container_1nd3w_17",fx="_visuallyHidden_1nd3w_43",hx="_wordmark_1nd3w_55",gx="_title_1nd3w_68",px="_segmented_1nd3w_85",mx="_segment_1nd3w_85",vx="_tools_1nd3w_159",bx="_select_1nd3w_171",yx="_selectChevron_1nd3w_210",xx="_iconLink_1nd3w_226",_x="_hamburger_1nd3w_255",Tx="_hamburgerIcon_1nd3w_272",Sx="_hamburgerTop_1nd3w_282",jx="_open_1nd3w_285",Nx="_hamburgerMiddle_1nd3w_289",wx="_hamburgerBottom_1nd3w_296",ye={topbar:ux,container:dx,visuallyHidden:fx,wordmark:hx,title:gx,segmented:px,segment:mx,tools:vx,select:bx,selectChevron:yx,iconLink:xx,hamburger:_x,hamburgerIcon:Tx,hamburgerTop:Sx,open:jx,hamburgerMiddle:Nx,hamburgerBottom:wx};function ne(...o){let g="";for(const h of o)if(h){if(typeof h=="string"||typeof h=="number")g+=(g&&" ")+h;else if(Array.isArray(h)){const d=ne(...h);d&&(g+=(g&&" ")+d)}else if(typeof h=="object")for(const d in h)h[d]&&(g+=(g&&" ")+d)}return g}function Hp(){const o=document.documentElement,g=getComputedStyle(o).getPropertyValue("--navbar-height");return parseFloat(g)||76}function ed(o,g=0){const h=document.querySelector(o);if(!h)return;const d=h.getBoundingClientRect().top+window.scrollY,E=window.matchMedia("(prefers-reduced-motion: reduce)").matches;window.scrollTo({top:Math.max(0,d-g),behavior:E?"auto":"smooth"})}const Ex=2,Ox=2e3;let Pu=0;function td(){cancelAnimationFrame(Pu)}function Ax(o,g){td();const h=performance.now();let d=-1,E=0;const R=()=>{const C=document.querySelector(o);if(C){const H=C.getBoundingClientRect().top+window.scrollY;E=H===d?E+1:0,d=H}const z=performance.now()-h>Ox;if(E>=Ex||z){ed(o,g);return}Pu=requestAnimationFrame(R)};Pu=requestAnimationFrame(R)}const kx="_container_125w8_1",Mx="_input_125w8_7",Cx="_label_125w8_18",Rx="_indicator_125w8_34",zx="_sun_125w8_58",Dx="_moon_125w8_65",pr={container:kx,input:Mx,label:Cx,indicator:Rx,sun:zx,moon:Dx},Lx="theme";function mp(){document.documentElement.dispatchEvent(new Event("themeChange"))}function Bx(){const[o,g]=U.useState("dark");U.useEffect(()=>{const d=document.documentElement.getAttribute("data-theme")==="light"?"light":"dark";g(d),mp()},[]);const h=()=>{const d=o==="light"?"dark":"light";g(d),document.documentElement.setAttribute("data-theme",d);try{localStorage.setItem(Lx,d)}catch{}mp()};return r.jsxs("div",{className:pr.container,children:[r.jsx("input",{className:pr.input,"aria-label":"Light theme",role:"switch",id:"theme-switch",type:"checkbox",checked:o==="light",onChange:h}),r.jsx("label",{className:pr.label,htmlFor:"theme-switch",title:"Toggle light theme",children:r.jsxs("span",{className:pr.indicator,children:[r.jsx("svg",{className:pr.moon,viewBox:"0 0 16 16","aria-hidden":"true",children:r.jsx("path",{d:"M13 9.5A5.5 5.5 0 0 1 6.5 3a5.5 5.5 0 1 0 6.5 6.5Z"})}),r.jsxs("svg",{className:pr.sun,viewBox:"0 0 16 16","aria-hidden":"true",children:[r.jsx("circle",{cx:"8",cy:"8",r:"2.75"}),r.jsx("path",{d:"M8 1.5v1.75M8 12.75v1.75M1.5 8h1.75M12.75 8h1.75M3.4 3.4l1.25 1.25M11.35 11.35l1.25 1.25M3.4 12.6l1.25-1.25M11.35 4.65l1.25-1.25"})]})]})})]})}function Ux(){return r.jsx("svg",{viewBox:"0 0 128 128",children:r.jsxs("g",{fill:"var(--svg-github-fill)",children:[r.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"}),r.jsx("path",{d:"M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm2.382 3.477c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237m4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"})]})})}const Hx=[{id:"finder",label:"Pattern Finder"},{id:"cheatsheet",label:"Reference"}],qx={python:"Python",javascript:"JavaScript",java:"Java",cpp:"C++"};function Gx({forwardedRef:o}){const g=U.useRef(null),{isSidebarOpen:h,showSidebar:d,hideSidebar:E,toggleSidebar:R}=nd(),{view:C,setView:z}=so(),{selectedLanguage:H,setSelectedLanguage:G}=Lp();U.useLayoutEffect(()=>{if(!g.current)return;const q=new ResizeObserver(J=>{for(const en of J){const _n=en.borderBoxSize[0].blockSize;document.documentElement.style.setProperty("--topbar-height",`${_n}px`)}});return q.observe(g.current),()=>q.disconnect()},[]);const D=q=>{q.preventDefault(),window.history.replaceState({},"",window.location.pathname),ed("main",Hp()-2)},b=()=>R(),N=q=>{q!==C&&(td(),z(q),q==="finder"?E():window.matchMedia("(max-width: 768px)").matches||d(),window.scrollTo({top:0}))},V=q=>{G(q.target.value)};return r.jsx("header",{ref:g,className:ye.topbar,children:r.jsxs("div",{className:ye.container,children:[C==="cheatsheet"&&r.jsxs("button",{ref:o,type:"button",className:ye.hamburger,onClick:b,"aria-label":h?"Hide reference sections":"Show reference sections","aria-expanded":h,"aria-controls":"reference-sections",children:[r.jsx("span",{className:ne(ye.hamburgerIcon,ye.hamburgerTop,h&&ye.open)}),r.jsx("span",{className:ne(ye.hamburgerIcon,ye.hamburgerMiddle,h&&ye.open)}),r.jsx("span",{className:ne(ye.hamburgerIcon,ye.hamburgerBottom,h&&ye.open)})]}),r.jsx("a",{href:"/leetcode-pattern-drill/",className:ye.wordmark,onClick:D,children:r.jsx("h1",{className:ye.title,children:"Pattern Drill"})}),r.jsx("div",{className:ye.segmented,role:"group","aria-label":"View",children:Hx.map(({id:q,label:J})=>r.jsx("button",{type:"button",className:ye.segment,"aria-pressed":C===q,onClick:()=>N(q),children:J},q))}),r.jsxs("div",{className:ye.tools,children:[r.jsxs("label",{className:ye.select,children:[r.jsx("span",{className:ye.visuallyHidden,children:"Template language"}),r.jsx("select",{value:H,onChange:V,children:$u.map(q=>r.jsx("option",{value:q,children:qx[q]},q))}),r.jsx("svg",{className:ye.selectChevron,viewBox:"0 0 12 12","aria-hidden":"true",children:r.jsx("path",{d:"M2.5 4.5 6 8l3.5-3.5"})})]}),r.jsx(Bx,{}),r.jsx("a",{href:"https://github.com/Tyler-Reagan/leetcode-pattern-drill","aria-label":"GitHub source",className:ye.iconLink,target:"_blank",rel:"noopener noreferrer",children:r.jsx(Ux,{})})]})]})})}const Yx="_sidebar_u19dm_1",Vx="_exit_u19dm_17",Kx="_hide_u19dm_20",Ix="_heading_u19dm_29",Qx="_scrollContainer_u19dm_41",xl={sidebar:Yx,exit:Vx,hide:Kx,heading:Ix,scrollContainer:Qx};var $s={},vp;function Xx(){if(vp)return $s;vp=1,$s.match=R,$s.parse=C;var o=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,g=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,h=/^(?:(min|max)-)?(.+)/,d=/(em|rem|px|cm|mm|in|pt|pc)?$/,E=/(dpi|dpcm|dppx)?$/;function R(D,b){return C(D).some(function(N){var V=N.inverse,q=N.type==="all"||b.type===N.type;if(q&&V||!(q||V))return!1;var J=N.expressions.every(function(en){var _n=en.feature,gn=en.modifier,hn=en.value,En=b[_n];if(!En)return!1;switch(_n){case"orientation":case"scan":return En.toLowerCase()===hn.toLowerCase();case"width":case"height":case"device-width":case"device-height":hn=G(hn),En=G(En);break;case"resolution":hn=H(hn),En=H(En);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":hn=z(hn),En=z(En);break;case"grid":case"color":case"color-index":case"monochrome":hn=parseInt(hn,10)||1,En=parseInt(En,10)||0;break}switch(gn){case"min":return En>=hn;case"max":return En<=hn;default:return En===hn}});return J&&!V||!J&&V})}function C(D){return D.split(",").map(function(b){b=b.trim();var N=b.match(o),V=N[1],q=N[2],J=N[3]||"",en={};return en.inverse=!!V&&V.toLowerCase()==="not",en.type=q?q.toLowerCase():"all",J=J.match(/\([^\)]+\)/g)||[],en.expressions=J.map(function(_n){var gn=_n.match(g),hn=gn[1].toLowerCase().match(h);return{modifier:hn[1],feature:hn[2],value:gn[2]}}),en})}function z(D){var b=Number(D),N;return b||(N=D.match(/^(\d+)\s*\/\s*(\d+)$/),b=N[1]/N[2]),b}function H(D){var b=parseFloat(D),N=String(D).match(E)[1];switch(N){case"dpcm":return b/2.54;case"dppx":return b*96;default:return b}}function G(D){var b=parseFloat(D),N=String(D).match(d)[1];switch(N){case"em":return b*16;case"rem":return b*16;case"cm":return b*96/2.54;case"mm":return b*96/2.54/10;case"in":return b*96;case"pt":return b*72;case"pc":return b*72/12;default:return b}}return $s}var qu,bp;function Jx(){if(bp)return qu;bp=1;var o=Xx().match,g=typeof window<"u"?window.matchMedia:null;function h(E,R,C){var z=this,H;g&&!C&&(H=g.call(window,E)),H?(this.matches=H.matches,this.media=H.media,H.addListener(b)):(this.matches=o(E,R),this.media=E),this.addListener=G,this.removeListener=D,this.dispose=N;function G(V){H&&H.addListener(V)}function D(V){H&&H.removeListener(V)}function b(V){z.matches=V.matches,z.media=V.media}function N(){H&&H.removeListener(b)}}function d(E,R,C){return new h(E,R,C)}return qu=d,qu}var Zx=Jx();const Fx=br(Zx);var Px=/[A-Z]/g,Wx=/^ms-/,Gu={};function $x(o){return"-"+o.toLowerCase()}function qp(o){if(Gu.hasOwnProperty(o))return Gu[o];var g=o.replace(Px,$x);return Gu[o]=Wx.test(g)?"-"+g:g}function n_(o,g){if(o===g)return!0;if(!o||!g)return!1;const h=Object.keys(o),d=Object.keys(g),E=h.length;if(d.length!==E)return!1;for(let R=0;R<E;R++){const C=h[R];if(o[C]!==g[C]||!Object.prototype.hasOwnProperty.call(g,C))return!1}return!0}var Yu={exports:{}},Vu,yp;function e_(){if(yp)return Vu;yp=1;var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Vu=o,Vu}var Ku,xp;function t_(){if(xp)return Ku;xp=1;var o=e_();function g(){}function h(){}return h.resetWarningCache=g,Ku=function(){function d(C,z,H,G,D,b){if(b!==o){var N=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw N.name="Invariant Violation",N}}d.isRequired=d;function E(){return d}var R={array:d,bigint:d,bool:d,func:d,number:d,object:d,string:d,symbol:d,any:d,arrayOf:E,element:d,elementType:d,instanceOf:E,node:d,objectOf:E,oneOf:E,oneOfType:E,shape:E,exact:E,checkPropTypes:h,resetWarningCache:g};return R.PropTypes=R,R},Ku}var _p;function a_(){return _p||(_p=1,Yu.exports=t_()()),Yu.exports}var i_=a_();const Vn=br(i_),We=Vn.oneOfType([Vn.string,Vn.number]),Gp={all:Vn.bool,grid:Vn.bool,aural:Vn.bool,braille:Vn.bool,handheld:Vn.bool,print:Vn.bool,projection:Vn.bool,screen:Vn.bool,tty:Vn.bool,tv:Vn.bool,embossed:Vn.bool},r_={orientation:Vn.oneOf(["portrait","landscape"]),scan:Vn.oneOf(["progressive","interlace"]),aspectRatio:Vn.string,deviceAspectRatio:Vn.string,height:We,deviceHeight:We,width:We,deviceWidth:We,color:Vn.bool,colorIndex:Vn.bool,monochrome:Vn.bool,resolution:We,type:Object.keys(Gp)},{type:AN,...l_}=r_,s_={minAspectRatio:Vn.string,maxAspectRatio:Vn.string,minDeviceAspectRatio:Vn.string,maxDeviceAspectRatio:Vn.string,minHeight:We,maxHeight:We,minDeviceHeight:We,maxDeviceHeight:We,minWidth:We,maxWidth:We,minDeviceWidth:We,maxDeviceWidth:We,minColor:Vn.number,maxColor:Vn.number,minColorIndex:Vn.number,maxColorIndex:Vn.number,minMonochrome:Vn.number,maxMonochrome:Vn.number,minResolution:We,maxResolution:We,...l_},o_={...Gp,...s_};var c_={all:o_};const u_=o=>`not ${o}`,d_=(o,g)=>{const h=qp(o);return typeof g=="number"&&(g=`${g}px`),g===!0?h:g===!1?u_(h):`(${h}: ${g})`},f_=o=>o.join(" and "),h_=o=>{const g=[];return Object.keys(c_.all).forEach(h=>{const d=o[h];d!=null&&g.push(d_(h,d))}),f_(g)},g_=U.createContext(void 0),p_=o=>o.query||h_(o),Tp=o=>o?Object.keys(o).reduce((h,d)=>(h[qp(d)]=o[d],h),{}):void 0,Yp=()=>{const o=U.useRef(!1);return U.useEffect(()=>{o.current=!0},[]),o.current},m_=o=>{const g=U.useContext(g_),h=()=>Tp(o)||Tp(g),[d,E]=U.useState(h);return U.useEffect(()=>{const R=h();n_(d,R)||E(R)},[o,g]),d},v_=o=>{const g=()=>p_(o),[h,d]=U.useState(g);return U.useEffect(()=>{const E=g();h!==E&&d(E)},[o]),h},b_=(o,g)=>{const h=()=>Fx(o,g||{},!!g),[d,E]=U.useState(h),R=Yp();return U.useEffect(()=>{if(R){const C=h();return E(C),()=>{C&&C.dispose()}}},[o,g]),d},y_=o=>{const[g,h]=U.useState(o.matches);return U.useEffect(()=>{const d=E=>{h(E.matches)};return o.addListener(d),h(o.matches),()=>{o.removeListener(d)}},[o]),g},Vp=(o,g,h)=>{const d=m_(g),E=v_(o);if(!E)throw new Error("Invalid or missing MediaQuery!");const R=b_(E,d),C=y_(R),z=Yp();return U.useEffect(()=>{z&&h&&h(C)},[C]),U.useEffect(()=>()=>{R&&R.dispose()},[]),C};function Kp(o,g){U.useEffect(()=>{const h=d=>{const E=d.target;(Array.isArray(o)?o:[o]).every(z=>z.current&&!z.current.contains(E))&&g()};return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)},[o,g])}const x_="_accordion_hdwo0_1",__="_button_hdwo0_7",T_="_open_hdwo0_42",S_="_content_hdwo0_46",no={accordion:x_,button:__,open:T_,content:S_};function j_(o){const g=parseFloat(o);return!isNaN(g)&&isFinite(g)}function Sp(o){return typeof o=="string"&&o[o.length-1]==="%"&&j_(o.substring(0,o.length-1))}function Iu(o,g,h){g===0&&!h&&o?.style&&o?.children.length>0&&(o.style.display="none")}function N_(o,g){g===0&&o?.style&&(o.style.display="")}const w_={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"};function jp(o,g){return[o.static,g===0&&o.staticHeightZero,typeof g=="number"&&g>0?o.staticHeightSpecific:null,g==="auto"&&o.staticHeightAuto].filter(h=>h).join(" ")}const E_=["animateOpacity","animationStateClasses","applyInlineTransitions","children","className","contentClassName","contentRef","delay","duration","easing","height","onHeightAnimationEnd","onHeightAnimationStart","style","disableDisplayNone"],O_=lo.forwardRef((o,g)=>{const{animateOpacity:h=!1,animationStateClasses:d={},applyInlineTransitions:E=!0,children:R,className:C="",contentClassName:z,delay:H=0,disableDisplayNone:G=!1,duration:D=500,easing:b="ease",height:N,onHeightAnimationEnd:V,onHeightAnimationStart:q,style:J,contentRef:en}=o,_n={...o};E_.forEach(L=>{delete _n[L]});const gn=U.useRef(N),hn=U.useRef(null),En=U.useRef(void 0),Kn=U.useRef(void 0),vn=U.useRef({...w_,...d}),Z=typeof window<"u",pn=U.useRef(Z&&window.matchMedia?window.matchMedia("(prefers-reduced-motion)").matches:!1),ae=pn.current?0:H,ue=pn.current?0:D;let le=N,pe="visible";typeof N=="number"?(le=N<0?0:N,pe="hidden"):Sp(le)&&(le=N==="0%"?0:N,pe="hidden");const[Ke,Ee]=U.useState(le),[oe,Y]=U.useState(pe),[cn,P]=U.useState(!1),[kn,Sn]=U.useState(jp(vn.current,N));U.useEffect(()=>{Iu(hn.current,Ke,G)},[]),U.useEffect(()=>{if(N!==gn.current&&hn.current){N_(hn.current,gn.current),hn.current.style.overflow="hidden";const L=hn.current.offsetHeight;hn.current.style.overflow="";const sn=ue+ae;let W,un,Cn="hidden",On;const tn=gn.current==="auto";typeof N=="number"?(W=N<0?0:N,un=W):Sp(N)?(W=N==="0%"?0:N,un=W):(W=L,un="auto",Cn=void 0),tn&&(un=W,W=L);const dn=[vn.current.animating,(gn.current==="auto"||N<gn.current)&&vn.current.animatingUp,(N==="auto"||N>gn.current)&&vn.current.animatingDown,un===0&&vn.current.animatingToHeightZero,un==="auto"&&vn.current.animatingToHeightAuto,typeof un=="number"&&un>0?vn.current.animatingToHeightSpecific:null].filter(Wa=>Wa).join(" "),$e=jp(vn.current,un);Ee(W),Y("hidden"),P(!tn),Sn(dn),clearTimeout(Kn.current),clearTimeout(En.current),tn?(On=!0,Kn.current=setTimeout(()=>{Ee(un),Y(Cn),P(On),q?.(un),En.current=setTimeout(()=>{P(!1),Sn($e),Iu(hn.current,un,G),V?.(un)},sn)},50)):(q?.(W),Kn.current=setTimeout(()=>{Ee(un),Y(Cn),P(!1),Sn($e),N!=="auto"&&Iu(hn.current,W,G),V?.(W)},sn))}return gn.current=le,()=>{clearTimeout(Kn.current),clearTimeout(En.current)}},[N]);const se={...J,height:Ke,overflow:oe||J?.overflow};cn&&E&&(se.transition=`height ${ue}ms ${b} ${ae}ms`,J?.transition&&(se.transition=`${J.transition}, ${se.transition}`),se.WebkitTransition=se.transition);const me={};h&&(me.transition=`opacity ${ue}ms ${b} ${ae}ms`,me.WebkitTransition=me.transition,Ke===0&&(me.opacity=0));const y=typeof _n["aria-hidden"]<"u"?_n["aria-hidden"]:N===0;return lo.createElement("div",{..._n,"aria-hidden":y,className:`${kn} ${C}`,style:se,ref:g},lo.createElement("div",{className:z,style:me,ref:L=>{hn.current=L,en&&(en.current=L)}},R))});function A_(){return r.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("polyline",{points:"6 9 12 15 18 9"})})}function Pe({title:o,children:g}){const[h,d]=U.useState(!1),E=h?"auto":0,R=ne(no.button,h&&no.open),C=()=>d(!h);return r.jsxs("div",{className:no.accordion,children:[r.jsxs("button",{type:"button",className:R,onClick:C,"aria-expanded":h,children:[r.jsx("span",{children:o}),r.jsx(A_,{})]}),r.jsx(O_,{animateOpacity:!0,height:E,duration:400,children:r.jsx("div",{className:no.content,children:g})})]})}const k_="_linkWrapper_1p79w_1",M_="_link_1p79w_1",Np={linkWrapper:k_,link:M_},C_="_tooltip_cgi4r_1",R_="_exit_cgi4r_15",z_="_text_cgi4r_28",Qu={tooltip:C_,exit:R_,text:z_};var D_=zp();const L_=br(D_);function B_({anchorRef:o,content:g,showTooltip:h}){const d=U.useRef(null),[E,R]=U.useState(null),[C,z]=U.useState(!1),H=ne(Qu.tooltip,!h&&Qu.exit),G=()=>z(!1),D=()=>{h||z(!0)};return U.useEffect(()=>{if(!h||!o.current)return;const b=o.current.getBoundingClientRect(),N=d.current?.offsetHeight??0,V=b.left+window.scrollX,q=b.top+window.scrollY-N-4;R({top:q,left:V})},[h]),(h||!C)&&o.current&&L_.createPortal(r.jsx("div",{ref:d,className:H,style:E??{},onAnimationStart:G,onAnimationEnd:D,children:r.jsx("span",{className:Qu.text,children:g})}),document.body)}const Xu="pd-nav-link";function F({href:o,description:g}){const h=U.useRef(null),{view:d,setView:E}=so(),[R,C]=U.useState(!1),[z,H]=U.useState(()=>window.location.hash);let G;U.useEffect(()=>{const q=()=>H(window.location.hash);return window.addEventListener(Xu,q),window.addEventListener("hashchange",q),()=>{window.removeEventListener(Xu,q),window.removeEventListener("hashchange",q)}},[]);const D=d==="cheatsheet"&&z===o,b=q=>{q.preventDefault(),window.history.replaceState({},"",o),window.dispatchEvent(new Event(Xu)),clearTimeout(G),C(!1),td();const J=Hp()-2;d==="finder"?(E("cheatsheet"),Ax(o,J)):ed(o,J)},N=()=>{G=setTimeout(()=>{C(!0)},700)},V=()=>{clearTimeout(G),C(!1)};return r.jsxs("div",{className:Np.linkWrapper,children:[r.jsx("a",{ref:h,href:o,className:Np.link,onClick:b,role:"button","aria-current":D?"location":void 0,"aria-description":g,onMouseEnter:N,onMouseLeave:V,children:g}),r.jsx(B_,{anchorRef:h,content:g,showTooltip:R})]})}function U_(){return r.jsxs(r.Fragment,{children:[r.jsxs(Pe,{title:"Big O",children:[r.jsx(F,{href:"#bigo-chart",description:"Time/Space Complexities"}),r.jsx(F,{href:"#bigo-data-structure-operations-table",description:"Data Structure Operations"}),r.jsx(F,{href:"#bigo-sorting-algorithms-table",description:"Sorting Algorithms"})]}),r.jsxs(Pe,{title:"Array",children:[r.jsx(F,{href:"#array-two-pointers-one-input",description:"two pointers: one input, opposite ends"}),r.jsx(F,{href:"#array-two-pointers-two-inputs",description:"two pointers: two inputs, exhaust both"}),r.jsx(F,{href:"#array-sliding-window",description:"sliding window"}),r.jsx(F,{href:"#array-prefix-sum",description:"prefix sum"}),r.jsx(F,{href:"#array-string-building",description:"efficient string building"})]}),r.jsxs(Pe,{title:"Hash Map",children:[r.jsx(F,{href:"#hashmap-find-number-of-subarrays",description:"find number of subarrays that fit an exact criteria"}),r.jsx(F,{href:"#hashmap-sliding-window",description:"sliding window"})]}),r.jsxs(Pe,{title:"Linked List",children:[r.jsx(F,{href:"#linkedlist-fast-and-slow-pointer",description:"fast and slow pointer"}),r.jsx(F,{href:"#linkedlist-reverse",description:"reverse linked list"})]}),r.jsxs(Pe,{title:"Stack",children:[r.jsx(F,{href:"#stack-monotonic-increasing",description:"monotonic increasing stack"}),r.jsx(F,{href:"#stack-monotonic-decreasing",description:"monotonic decreasing stack"})]}),r.jsxs(Pe,{title:"Binary Tree",children:[r.jsx(F,{href:"#tree-dfs-recursive",description:"DFS (recursive)"}),r.jsx(F,{href:"#tree-dfs-iterative",description:"DFS (iterative)"}),r.jsx(F,{href:"#tree-bfs",description:"BFS"})]}),r.jsxs(Pe,{title:"Graph",children:[r.jsx(F,{href:"#graph-dfs-recursive",description:"DFS (recursive)"}),r.jsx(F,{href:"#graph-dfs-iterative",description:"DFS (iterative)"}),r.jsx(F,{href:"#graph-bfs",description:"BFS"}),r.jsx(F,{href:"#graph-dijkstra",description:"Dijkstra (shortest path)"}),r.jsx(F,{href:"#graph-bellman-ford",description:"Bellman-Ford (shortest path)"}),r.jsx(F,{href:"#graph-kahn",description:"Kahn (topological sort)"}),r.jsx(F,{href:"#graph-kruskal",description:"Kruskal (mst)"}),r.jsx(F,{href:"#graph-prim",description:"Prim (mst)"})]}),r.jsx(Pe,{title:"Heap",children:r.jsx(F,{href:"#heap-find-top-k-elements",description:"find top k elements with heap"})}),r.jsxs(Pe,{title:"Binary Search",children:[r.jsx(F,{href:"#binarysearch-binary-search",description:"binary search"}),r.jsx(F,{href:"#binarysearch-duplicate-elements-left-insertion",description:"duplicate elements, left-most insertion point"}),r.jsx(F,{href:"#binarysearch-duplicate-elements-right-insertion",description:"duplicate elements, right-most insertion point"}),r.jsx(F,{href:"#binarysearch-greedy-minimum",description:"greedy (minimum)"}),r.jsx(F,{href:"#binarysearch-greedy-maximum",description:"greedy (maximum)"})]}),r.jsx(Pe,{title:"Backtracking",children:r.jsx(F,{href:"#backtracking-backtracking",description:"backtracking"})}),r.jsxs(Pe,{title:"Dynamic Programming",children:[r.jsx(F,{href:"#dp-top-down",description:"top-down DP"}),r.jsx(F,{href:"#dp-bottom-up",description:"bottom-up DP"}),r.jsx(F,{href:"#dp-kadane",description:"Kadane (max-sum subarray)"})]}),r.jsxs(Pe,{title:"Bit Manipulation",children:[r.jsx(F,{href:"#bitmanipulation-test-kth-bit",description:"test kth bit"}),r.jsx(F,{href:"#bitmanipulation-set-kth-bit",description:"set kth bit"}),r.jsx(F,{href:"#bitmanipulation-clear-kth-bit",description:"clear kth bit"}),r.jsx(F,{href:"#bitmanipulation-get-rightmost-bit",description:"get rightmost bit"}),r.jsx(F,{href:"#bitmanipulation-count-set-bits",description:"count set bits"}),r.jsx(F,{href:"#bitmanipulation-multiply-power-of-two",description:"multiply by 2^k"}),r.jsx(F,{href:"#bitmanipulation-divide-power-of-two",description:"divide by 2^k"}),r.jsx(F,{href:"#bitmanipulation-check-power-of-two",description:"check if number is power of 2"}),r.jsx(F,{href:"#bitmanipulation-swap-variables",description:"swap two variables"})]}),r.jsxs(Pe,{title:"Matrix",children:[r.jsx(F,{href:"#matrix-create-copy",description:"create / copy"}),r.jsx(F,{href:"#matrix-diagonals",description:"main / anti diagonals"}),r.jsx(F,{href:"#matrix-rotate-transpose",description:"rotate / transpose"})]}),r.jsxs(Pe,{title:"Data Structures",children:[r.jsx(F,{href:"#ds-array",description:"array"}),r.jsx(F,{href:"#ds-hash-map",description:"hashmap"}),r.jsx(F,{href:"#ds-linked-list",description:"linked list"}),r.jsx(F,{href:"#ds-doubly-linked-list",description:"doubly linked list"}),r.jsx(F,{href:"#ds-binary-tree",description:"binary tree"}),r.jsx(F,{href:"#ds-binary-search-tree",description:"binary search tree"}),r.jsx(F,{href:"#ds-graph",description:"graph"}),r.jsx(F,{href:"#ds-union-find",description:"union find"}),r.jsx(F,{href:"#ds-union-find-optimized",description:"union find optimized"}),r.jsx(F,{href:"#ds-trie",description:"trie"})]}),r.jsxs(Pe,{title:"Sorting Algorithms",children:[r.jsx(F,{href:"#sort-bubble",description:"bubble sort"}),r.jsx(F,{href:"#sort-selection",description:"selection sort"}),r.jsx(F,{href:"#sort-insertion",description:"insertion sort"}),r.jsx(F,{href:"#sort-shell",description:"shell sort"}),r.jsx(F,{href:"#sort-merge",description:"mergesort"}),r.jsx(F,{href:"#sort-quick",description:"quicksort"}),r.jsx(F,{href:"#sort-tim",description:"timsort"}),r.jsx(F,{href:"#sort-heap",description:"heapsort"}),r.jsx(F,{href:"#sort-counting",description:"counting sort"}),r.jsx(F,{href:"#sort-bucket",description:"bucket sort"}),r.jsx(F,{href:"#sort-radix",description:"radix sort"}),r.jsx(F,{href:"#sort-cube",description:"cubesort"}),r.jsx(F,{href:"#sort-bogo",description:"bogo sort"}),r.jsx(F,{href:"#sort-pancake",description:"pancake sort"}),r.jsx(F,{href:"#sort-sleep",description:"sleep sort"})]})]})}function H_({hamburgerButtonRef:o}){const g=U.useRef(null),{isSidebarOpen:h,showSidebar:d,hideSidebar:E}=nd(),{view:R}=so(),[C,z]=U.useState(()=>!h),H=ne(xl.sidebar,!h&&xl.exit,!h&&C&&xl.hide),G=q=>{q&&h?E():!q&&!h&&R==="cheatsheet"&&d()};U.useEffect(()=>{R==="finder"&&h&&E()},[R,h,E]);const D=Vp({maxWidth:768},void 0,G),b=()=>{D&&h&&E()},N=()=>z(!1),V=()=>{h||z(!0)};return Kp([g,o],b),r.jsxs("nav",{ref:g,id:"reference-sections","aria-label":"Reference sections",className:H,onAnimationStart:N,onAnimationEndCapture:V,children:[r.jsx("h2",{className:xl.heading,children:"Reference"}),r.jsx("div",{className:xl.scrollContainer,children:r.jsx(U_,{})})]})}function q_(){const o=U.useRef(null);return r.jsxs("div",{id:"AppBar",children:[r.jsx(Gx,{forwardedRef:o}),r.jsx(H_,{hamburgerButtonRef:o})]})}const G_="_main_bsmjw_1",Y_="_sidebarHidden_bsmjw_12",wp={main:G_,sidebarHidden:Y_},V_="modulepreload",K_=function(o){return"/leetcode-pattern-drill/"+o},Ep={},Ip=function(g,h,d){let E=Promise.resolve();if(h&&h.length>0){let H=function(G){return Promise.all(G.map(D=>Promise.resolve(D).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const C=document.querySelector("meta[property=csp-nonce]"),z=C?.nonce||C?.getAttribute("nonce");E=H(h.map(G=>{if(G=K_(G),G in Ep)return;Ep[G]=!0;const D=G.endsWith(".css"),b=D?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${G}"]${b}`))return;const N=document.createElement("link");if(N.rel=D?"stylesheet":V_,D||(N.as="script"),N.crossOrigin="",N.href=G,z&&N.setAttribute("nonce",z),document.head.appendChild(N),D)return new Promise((V,q)=>{N.addEventListener("load",V),N.addEventListener("error",()=>q(new Error(`Unable to preload CSS for ${G}`)))})}))}function R(C){const z=new Event("vite:preloadError",{cancelable:!0});if(z.payload=C,window.dispatchEvent(z),!z.defaultPrevented)throw C}return E.then(C=>{for(const z of C||[])z.status==="rejected"&&R(z.reason);return g().catch(R)})},I_="_finder_19j5l_1",Q_="_mapMode_19j5l_15",X_="_log_19j5l_42",J_="_logHead_19j5l_51",Z_="_logHint_19j5l_61",F_="_logRows_19j5l_67",P_="_row_19j5l_79",W_="_rowNum_19j5l_93",$_="_rowBack_19j5l_97",nT="_rowNumDashed_19j5l_119",eT="_rowText_19j5l_123",tT="_rowQuestion_19j5l_130",aT="_rowCue_19j5l_140",iT="_rowLive_19j5l_157",rT="_rowReady_19j5l_167",lT="_rowCurrent_19j5l_171",sT="_rowResult_19j5l_172",oT="_rowFault_19j5l_187",cT="_nextWrap_19j5l_195",uT="_nextCheck_19j5l_199",dT="_nextLabel_19j5l_210",fT="_line_19j5l_218",hT="_stops_19j5l_222",gT="_stop_19j5l_222",pT="_dashedNext_19j5l_251",mT="_dot_19j5l_255",vT="_answered_19j5l_265",bT="_current_19j5l_269",yT="_reached_19j5l_270",xT="_end_19j5l_274",_T="_fault_19j5l_279",TT="_stopInner_19j5l_284",ST="_stopButton_19j5l_285",jT="_cue_19j5l_303",NT="_card_19j5l_313",wT="_strip_19j5l_328",ET="_stripEnd_19j5l_348",OT="_mapStatus_19j5l_359",AT="_seg_19j5l_372",kT="_segButton_19j5l_381",MT="_segOn_19j5l_404",CT="_mapFallback_19j5l_410",RT="_stripTitle_19j5l_414",zT="_stripValue_19j5l_424",DT="_timer_19j5l_430",LT="_cells_19j5l_437",BT="_cell_19j5l_437",UT="_colon_19j5l_443",HT="_signCell_19j5l_468",qT="_timerCaption_19j5l_489",GT="_idle_19j5l_499",YT="_ok_19j5l_503",VT="_warn_19j5l_507",KT="_over_19j5l_514",IT="_body_19j5l_526",QT="_question_19j5l_540",XT="_resultName_19j5l_541",JT="_lead_19j5l_557",ZT="_actions_19j5l_569",FT="_primary_19j5l_575",PT="_kbd_19j5l_602",WT="_options_19j5l_607",$T="_option_19j5l_607",nS="_optionCue_19j5l_653",eS="_footer_19j5l_676",tS="_plain_19j5l_688",aS="_fields_19j5l_728",iS="_field_19j5l_728",rS="_figure_19j5l_759",lS="_okNote_19j5l_767",sS="_overNote_19j5l_771",oS="_summary_19j5l_776",cS="_templates_19j5l_787",uS="_note_19j5l_796",dS="_docsLink_19j5l_801",fS="_srOnly_19j5l_812",hS="_turn_19j5l_1",O={finder:I_,mapMode:Q_,log:X_,logHead:J_,logHint:Z_,logRows:F_,row:P_,rowNum:W_,rowBack:$_,rowNumDashed:nT,rowText:eT,rowQuestion:tT,rowCue:aT,rowLive:iT,rowReady:rT,rowCurrent:lT,rowResult:sT,rowFault:oT,nextWrap:cT,nextCheck:uT,nextLabel:dT,line:fT,stops:hT,stop:gT,dashedNext:pT,dot:mT,answered:vT,current:bT,reached:yT,end:xT,fault:_T,stopInner:TT,stopButton:ST,cue:jT,card:NT,strip:wT,stripEnd:ET,mapStatus:OT,seg:AT,segButton:kT,segOn:MT,mapFallback:CT,stripTitle:RT,stripValue:zT,timer:DT,cells:LT,cell:BT,colon:UT,signCell:HT,timerCaption:qT,idle:GT,ok:YT,warn:VT,over:KT,body:IT,question:QT,resultName:XT,lead:JT,actions:ZT,primary:FT,kbd:PT,options:WT,option:$T,optionCue:nS,footer:eS,plain:tS,fields:aS,field:iS,figure:rS,okNote:lS,overNote:sS,summary:oS,templates:cS,note:uS,docsLink:dS,srOnly:fS,turn:hS},Si={rootId:"q-input",nodes:{"q-input":{id:"q-input",question:"What does the problem give you?",options:[{cue:"an array or a string",next:"q-array"},{cue:"a linked list",next:"q-list"},{cue:"a binary tree or BST",next:"q-tree"},{cue:"a graph, grid, edges, or prerequisites",next:"q-graph"},{cue:"a data stream, or a design-a-class prompt",next:"q-design"},{cue:"an integer n, or bit tricks (single number, XOR)",next:"q-number"}]},"q-array":{id:"q-array",question:"What does it ask about the array or string?",options:[{cue:"a contiguous subarray or substring (window, sum)",next:"q-subarray"},{cue:"a pair or triplet, a palindrome, or an in-place edit",next:"q-pointers"},{cue:"searching a sorted array, or the min/max value that works",next:"q-search"},{cue:"the next greater or smaller element of each item",next:"q-mono"},{cue:"counts, duplicates, top K, brackets, words",next:"q-lookup"},{cue:"choices over elements (all combos, best or count of ways)",next:"q-choices"},{cue:"intervals (merge, overlaps, meeting rooms)",next:"sort-first"}]},"q-subarray":{id:"q-subarray",question:"What does it want from the subarray or substring?",options:[{cue:"sum or average of each size-K window",next:"sliding-window-fixed"},{cue:"longest or shortest window that meets a rule",next:"q-window-variable"},{cue:"count subarrays with exactly K distinct or odd",next:"sliding-window-exactly-k"},{cue:"a subarray sum equal to K, or range-sum queries",next:"q-prefix"},{cue:"maximum sum subarray of any length",next:"dp-kadane"},{cue:"max or min inside each size-K window",next:"monotonic-deque"}]},"q-window-variable":{id:"q-window-variable",question:"What does the window rule check?",options:[{cue:"sum or product vs a target (non-negative numbers)",next:"sliding-window-variable"},{cue:"characters (no repeats, at most K distinct, contains all of T)",next:"hashmap-sliding-window"}]},"q-prefix":{id:"q-prefix",question:"What kind of subarray-sum question?",options:[{cue:"many queries for the sum between index i and j",next:"prefix-sum-range"},{cue:"count or longest subarrays with sum K (negatives allowed)",next:"prefix-sum-hashmap"}]},"q-pointers":{id:"q-pointers",question:"What are the pointers doing?",options:[{cue:"ends moving inward (3Sum, palindrome, reverse, container with most water)",next:"two-pointers-converging"},{cue:"two arrays or strings (merge sorted, is subsequence)",next:"two-pointers-two-inputs"},{cue:"in-place rewrite (remove duplicates, move zeroes, partition)",next:"two-pointers-fast-slow-inplace"},{cue:"two numbers in an unsorted array (sum to X, return indices)",next:"hashmap-frequency"}]},"q-search":{id:"q-search",question:"What are you searching for?",options:[{cue:"find X, or its index, in a sorted or rotated array",next:"binary-search-classic"},{cue:"first position of X, or where to insert X",next:"binary-search-left-bound"},{cue:"last position of X, or count of elements <= X",next:"binary-search-right-bound"},{cue:"smallest capacity or speed that works (minimize the max)",next:"binary-search-answer-minimize"},{cue:"largest distance or size that works (maximize the min)",next:"binary-search-answer-maximize"}]},"q-mono":{id:"q-mono",question:"What do you need for each element?",options:[{cue:"next greater element (days until warmer, stock span)",next:"monotonic-stack-decreasing"},{cue:"next smaller element (largest rectangle in histogram)",next:"monotonic-stack-increasing"},{cue:"max or min inside each size-K window",next:"monotonic-deque"}]},"q-lookup":{id:"q-lookup",question:"What do you need to do with the data?",options:[{cue:"counting or grouping (occurrences, duplicates, anagrams)",next:"hashmap-frequency"},{cue:"top K (K largest, K most frequent, Kth smallest)",next:"heap-top-k"},{cue:"matching or nesting (parentheses, expressions, simplify path)",next:"stack-matching"},{cue:"prefix lookups over a word list (autocomplete)",next:"trie"},{cue:"building an output string (reverse words, compress, join)",next:"string-building"},{cue:"bit tricks (single number among pairs, XOR)",next:"bit-manipulation"}]},"q-choices":{id:"q-choices",question:"What are you trying to do with the choices?",options:[{cue:"generate every subset, permutation, or combination",next:"q-backtrack"},{cue:"best cost, or number of ways, over the choices",next:"q-dp"},{cue:"locally best move each step (jump game, gas station)",next:"greedy"}]},"q-backtrack":{id:"q-backtrack",question:"Can a partial choice be rejected early?",options:[{cue:"no, enumerate everything (subsets, permutations, combination sum)",next:"backtracking"},{cue:"yes, a rule prunes branches (N-Queens, Sudoku, word search)",next:"backtracking-pruning"}]},"q-dp":{id:"q-dp",question:"What do the choices look like?",options:[{cue:"reusable items (min coins, ways to make X)",next:"dp-unbounded-knapsack"},{cue:"each item used once (partition equal subset, target sum)",next:"dp-01-knapsack"},{cue:"one or two sequences (LIS, LCS, edit distance)",next:"dp-sequences"},{cue:"something else (house robber, unique paths, word break)",next:"q-dp-style"}]},"q-dp-style":{id:"q-dp-style",question:"Which way is the recurrence easier to write?",options:[{cue:"recurse from a state and cache (word break, decode ways)",next:"dp-top-down"},{cue:"fill dp[i] or dp[r][c] from earlier cells (house robber, unique paths)",next:"dp-bottom-up"}]},"q-list":{id:"q-list",question:"What do you do with the list?",options:[{cue:"cycle, middle node, or Nth node from the end",next:"linked-list-fast-slow"},{cue:"reverse the list, a sublist, or k-groups",next:"linked-list-reverse"},{cue:"merge two sorted lists",next:"linked-list-merge-sorted"},{cue:"merge K sorted lists",next:"heap-merge-k"}]},"q-tree":{id:"q-tree",question:"What does it ask about the tree?",options:[{cue:"level-by-level view (level order, right side view)",next:"tree-bfs"},{cue:"combine subtree answers (depth, path sum, LCA, validate BST, serialize)",next:"tree-dfs-recursive"},{cue:"paused or non-recursive traversal (BST iterator, kth smallest)",next:"tree-dfs-iterative"}]},"q-graph":{id:"q-graph",question:"What does it ask about the graph or grid?",options:[{cue:"explore everything (islands, components, all paths)",next:"graph-dfs"},{cue:"shortest path or minimum steps",next:"q-shortest"},{cue:"ordering with prerequisites (course schedule, directed cycle)",next:"topological-sort"},{cue:"same-group checks (redundant connection, undirected cycle)",next:"union-find"},{cue:"minimum cost to connect all points",next:"mst"},{cue:"grid moving right or down (count paths, min path sum)",next:"q-dp"}]},"q-shortest":{id:"q-shortest",question:"What kind of shortest path?",options:[{cue:"unweighted, from one start (word ladder, maze)",next:"graph-bfs-shortest-path"},{cue:"spreads from many sources at once (rotting oranges, 01 matrix)",next:"multi-source-bfs"},{cue:"weighted edges (network delay, cheapest flights)",next:"shortest-path-weighted"}]},"q-design":{id:"q-design",question:"What must the structure support?",options:[{cue:"median of a data stream",next:"two-heaps"},{cue:"Kth largest element in a stream",next:"heap-top-k"},{cue:"moving average, recent calls, circular queue",next:"queue-design"},{cue:"implement Trie, add and search words",next:"trie"},{cue:"min stack, undo, browser history",next:"stack-matching"}]},"q-number":{id:"q-number",question:"What does it ask about n?",options:[{cue:"bit tricks (power of two, set bits, single number, XOR)",next:"bit-manipulation"},{cue:"nth term from earlier terms (climb n stairs)",next:"q-dp"},{cue:"integer square root (largest x with x*x <= n)",next:"binary-search-answer-maximize"},{cue:"guess the number in 1..n",next:"binary-search-classic"}]}},leaves:{"two-pointers-converging":{id:"two-pointers-converging",name:"Two pointers, converging",pattern:"Two Pointers",summary:"Sorted array pairs/triplets, palindromes, in-place reversal. Start at both ends and move the pointer whose side cannot be part of the answer.",docsUrl:"https://resources.devweekends.com/dsa-patterns/two-pointers",templateIds:["two-pointers-one-input"]},"two-pointers-two-inputs":{id:"two-pointers-two-inputs",name:"Two pointers, two inputs",pattern:"Two Pointers",summary:"Merge sorted arrays, subsequence checks. One pointer per input; advance the one whose element is consumed.",docsUrl:"https://resources.devweekends.com/dsa-patterns/two-pointers",templateIds:["two-pointers-two-inputs"]},"two-pointers-fast-slow-inplace":{id:"two-pointers-fast-slow-inplace",name:"Two pointers, read/write in place",pattern:"Two Pointers",summary:"Remove duplicates, move zeroes, partition in O(1) space. A fast pointer reads every element; a slow pointer marks where the next kept element is written.",docsUrl:"https://resources.devweekends.com/dsa-patterns/two-pointers",templateIds:[]},"sliding-window-fixed":{id:"sliding-window-fixed",name:"Sliding window, fixed size",pattern:"Sliding Window",summary:"Every window of exactly K elements. Add the entering element and remove the leaving one so each step is O(1).",docsUrl:"https://resources.devweekends.com/dsa-patterns/sliding-window",templateIds:["sliding-window"]},"sliding-window-variable":{id:"sliding-window-variable",name:"Sliding window, variable size",pattern:"Sliding Window",summary:"Longest/shortest subarray meeting a sum-style rule with non-negative values. Expand right, shrink left while the window is invalid (or while valid, for shortest).",docsUrl:"https://resources.devweekends.com/dsa-patterns/sliding-window",templateIds:["sliding-window"]},"sliding-window-exactly-k":{id:"sliding-window-exactly-k",name:"Sliding window, exactly K",pattern:"Sliding Window",summary:'"Exactly K" is not monotonic, so count it as atMost(K) - atMost(K-1), each a standard variable window.',docsUrl:"https://resources.devweekends.com/dsa-patterns/sliding-window",templateIds:[]},"prefix-sum-range":{id:"prefix-sum-range",name:"Prefix sum, range queries",pattern:"Prefix Sum",summary:"Many sum-between-i-and-j queries on a fixed array. Precompute prefix[i]; each query is prefix[j+1] - prefix[i] in O(1).",docsUrl:"https://resources.devweekends.com/dsa-patterns/prefix-sum",templateIds:["prefix-sum"]},"prefix-sum-hashmap":{id:"prefix-sum-hashmap",name:"Prefix sum, hash map",pattern:"Prefix Sum",summary:"Count or find subarrays with sum K when negatives break sliding window. Store prefix-sum counts (seeded with {0: 1}) and look up prefix - K.",docsUrl:"https://resources.devweekends.com/dsa-patterns/prefix-sum",templateIds:["hashmap-find-number-of-subarrays"]},"string-building":{id:"string-building",name:"String building",pattern:"String",summary:"Producing a new string piece by piece. Append to a list or builder and join once at the end; repeated concatenation is O(n^2).",docsUrl:"https://resources.devweekends.com/dsa-patterns/stack",templateIds:["string-building"]},"binary-search-classic":{id:"binary-search-classic",name:"Binary search, find target",pattern:"Binary Search",summary:"Find an exact value in a sorted (or rotated) space. Halve the range each step by comparing the middle with the target.",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",templateIds:["binary-search"]},"binary-search-left-bound":{id:"binary-search-left-bound",name:"Binary search, left bound",pattern:"Binary Search",summary:"First position of X or its insertion point. Keep searching left when nums[mid] >= X to land on the leftmost index.",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",templateIds:["binary-search-left-insertion"]},"binary-search-right-bound":{id:"binary-search-right-bound",name:"Binary search, right bound",pattern:"Binary Search",summary:"Last position of X, or count of elements <= X. Search for the insertion point after every copy of X (go right when nums[mid] <= X).",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",templateIds:["binary-search-right-insertion"]},"binary-search-answer-minimize":{id:"binary-search-answer-minimize",name:"Binary search on answer, minimum",pattern:"Binary Search",summary:"Smallest value that still works (min capacity, min speed, minimize the max). Binary search the answer range with a greedy feasibility check.",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",templateIds:["binary-search-greedy-minimum"]},"binary-search-answer-maximize":{id:"binary-search-answer-maximize",name:"Binary search on answer, maximum",pattern:"Binary Search",summary:"Largest value that still works (maximize the minimum distance). Binary search the answer range, keeping the best feasible value.",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",templateIds:["binary-search-greedy-maximum"]},"sort-first":{id:"sort-first",name:"Sort first, then scan",pattern:"Sorting",summary:"Intervals, meetings, or anything easier in order. Sort (often by start or end), then apply a linear scan, greedy, heap, or two pointers.",docsUrl:"https://resources.devweekends.com/dsa-patterns/sorting",templateIds:[]},"hashmap-frequency":{id:"hashmap-frequency",name:"Hash map, lookup and frequency",pattern:"Hash Map",summary:"Counting, duplicates, anagrams, grouping, or unsorted two-sum. Store counts or complements so each lookup is O(1).",docsUrl:"https://resources.devweekends.com/dsa-patterns/hashmap",templateIds:[]},"hashmap-sliding-window":{id:"hashmap-sliding-window",name:"Sliding window, hash map",pattern:"Sliding Window",summary:"Substring with no repeats, at most K distinct, or containing all of T. A frequency map tracks the window so you know when to shrink.",docsUrl:"https://resources.devweekends.com/dsa-patterns/sliding-window",templateIds:["hashmap-sliding-window"]},"stack-matching":{id:"stack-matching",name:"Stack, matching and undo",pattern:"Stack",summary:"Brackets, expression evaluation, path simplification, undo. Push openings or state; pop when the matching close or reversal arrives.",docsUrl:"https://resources.devweekends.com/dsa-patterns/stack",templateIds:[]},"monotonic-stack-increasing":{id:"monotonic-stack-increasing",name:"Monotonic stack, increasing",pattern:"Monotonic Stack",summary:"Next/previous smaller element, largest rectangle in histogram. Keep the stack increasing; a smaller arrival pops and resolves the taller entries.",docsUrl:"https://resources.devweekends.com/dsa-patterns/monotonic-stack",templateIds:["stack-monotonic-increasing"]},"monotonic-stack-decreasing":{id:"monotonic-stack-decreasing",name:"Monotonic stack, decreasing",pattern:"Monotonic Stack",summary:"Next/previous greater element, daily temperatures, stock span. Keep the stack decreasing; a larger arrival pops and resolves the smaller entries.",docsUrl:"https://resources.devweekends.com/dsa-patterns/monotonic-stack",templateIds:["stack-monotonic-decreasing"]},"monotonic-deque":{id:"monotonic-deque",name:"Monotonic deque",pattern:"Monotonic Deque",summary:"Max or min of every window of size K. Keep a deque of indices in monotonic order; drop expired indices from the front.",docsUrl:"https://resources.devweekends.com/dsa-patterns/queue",templateIds:[]},"queue-design":{id:"queue-design",name:"Queue design",pattern:"Queue",summary:"Moving average, recent calls, rate limiting, circular queue. FIFO of values or timestamps, evicting from the front as they expire.",docsUrl:"https://resources.devweekends.com/dsa-patterns/queue",templateIds:[]},"heap-top-k":{id:"heap-top-k",name:"Heap, top K",pattern:"Heap",summary:"K largest, K most frequent, Kth element (also in a stream). Keep a min-heap of size K, popping the smallest when it overflows.",docsUrl:"https://resources.devweekends.com/dsa-patterns/heap",templateIds:["heap-find-top-k-elements"]},"heap-merge-k":{id:"heap-merge-k",name:"Heap, merge K sorted",pattern:"Heap",summary:"Merge K sorted lists or streams. Push each head into a min-heap; pop the smallest and push its successor.",docsUrl:"https://resources.devweekends.com/dsa-patterns/heap",templateIds:[]},"two-heaps":{id:"two-heaps",name:"Two heaps",pattern:"Heap",summary:"Running median of a stream. A max-heap holds the lower half and a min-heap the upper half, rebalanced so sizes differ by at most one.",docsUrl:"https://resources.devweekends.com/dsa-patterns/heap",templateIds:[]},trie:{id:"trie",name:"Trie",pattern:"Trie",summary:"Prefix matching, autocomplete, word dictionaries. Store words character by character in a tree so prefix lookups cost O(length).",docsUrl:"https://resources.devweekends.com/dsa-patterns/trie",templateIds:["ds-trie"]},"linked-list-fast-slow":{id:"linked-list-fast-slow",name:"Linked list, fast and slow pointers",pattern:"Linked List",summary:"Cycle detection, middle node, Nth from end. Move one pointer twice as fast (Floyd's) or give one a head start.",docsUrl:"https://resources.devweekends.com/dsa-patterns/linked-list",templateIds:["linkedlist-fast-and-slow-pointer"]},"linked-list-reverse":{id:"linked-list-reverse",name:"Linked list, reverse",pattern:"Linked List",summary:"Reverse a whole list, a sublist, or k-groups. Walk with prev/curr/next and flip each pointer.",docsUrl:"https://resources.devweekends.com/dsa-patterns/linked-list",templateIds:["linkedlist-reverse"]},"linked-list-merge-sorted":{id:"linked-list-merge-sorted",name:"Linked list, merge sorted",pattern:"Linked List",summary:"Merge two sorted lists. Use a dummy head and always attach the smaller of the two current nodes.",docsUrl:"https://resources.devweekends.com/dsa-patterns/linked-list",templateIds:[]},"tree-dfs-recursive":{id:"tree-dfs-recursive",name:"Tree DFS, recursive",pattern:"DFS",summary:"Depth, path sum, LCA, validate BST, serialize. Recurse into children and combine their answers (pre-, in-, or post-order).",docsUrl:"https://resources.devweekends.com/dsa-patterns/dfs",templateIds:["tree-dfs-recursive"]},"tree-dfs-iterative":{id:"tree-dfs-iterative",name:"Tree DFS, iterative",pattern:"DFS",summary:"BST iterator, kth smallest, or deep trees. Replace recursion with an explicit stack, often for an in-order walk you can pause.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dfs",templateIds:["tree-dfs-iterative"]},"tree-bfs":{id:"tree-bfs",name:"Tree BFS, level order",pattern:"BFS",summary:"Level order, right side view, per-level values. Process the queue one level at a time using its size as a snapshot.",docsUrl:"https://resources.devweekends.com/dsa-patterns/bfs",templateIds:["tree-bfs"]},"graph-dfs":{id:"graph-dfs",name:"Graph DFS",pattern:"DFS",summary:"Islands, connected components, all paths, clone graph. Explore fully from each unvisited node, marking visited.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dfs",templateIds:["graph-dfs-recursive","graph-dfs-iterative"]},"graph-bfs-shortest-path":{id:"graph-bfs-shortest-path",name:"Graph BFS, shortest path",pattern:"BFS",summary:"Fewest steps in an unweighted graph or grid. BFS from the start; the level at which you reach the target is the distance.",docsUrl:"https://resources.devweekends.com/dsa-patterns/bfs",templateIds:["graph-bfs"]},"multi-source-bfs":{id:"multi-source-bfs",name:"Multi-source BFS",pattern:"BFS",summary:"Something spreads from many cells at once (rotting oranges, 01 matrix). Enqueue every source first, then run one BFS.",docsUrl:"https://resources.devweekends.com/dsa-patterns/bfs",templateIds:[]},"shortest-path-weighted":{id:"shortest-path-weighted",name:"Shortest path, weighted",pattern:"Graph Algorithms",summary:"Shortest path with edge weights. Dijkstra (min-heap) for non-negative weights; Bellman-Ford for negatives or at most K edges.",docsUrl:"https://resources.devweekends.com/dsa-patterns/graph-algorithms",templateIds:["graph-dijkstra","graph-bellman-ford"]},"topological-sort":{id:"topological-sort",name:"Topological sort",pattern:"Graph Algorithms",summary:"Ordering with dependencies, or detecting that none exists. Kahn's algorithm: repeatedly take nodes with in-degree 0.",docsUrl:"https://resources.devweekends.com/dsa-patterns/graph-algorithms",templateIds:["graph-kahn"]},"union-find":{id:"union-find",name:"Union-find",pattern:"Union Find",summary:"Are two items in the same group, merging groups, redundant edges (undirected cycles). Keep a parent array with path compression and union by rank.",docsUrl:"https://resources.devweekends.com/dsa-patterns/union-find",templateIds:["ds-union-find","ds-union-find-optimized"]},mst:{id:"mst",name:"Minimum spanning tree",pattern:"Graph Algorithms",summary:"Minimum cost to connect all points. Kruskal (sort edges + Union Find) or Prim (grow from a node with a min-heap).",docsUrl:"https://resources.devweekends.com/dsa-patterns/graph-algorithms",templateIds:["graph-kruskal","graph-prim"]},backtracking:{id:"backtracking",name:"Backtracking",pattern:"Backtracking",summary:"Generate all subsets, permutations, or combinations. Choose, recurse, un-choose, recording each complete candidate.",docsUrl:"https://resources.devweekends.com/dsa-patterns/backtracking",templateIds:["backtracking"]},"backtracking-pruning":{id:"backtracking-pruning",name:"Backtracking, pruning",pattern:"Backtracking",summary:"Constraint puzzles like N-Queens, Sudoku, word search. Backtrack, but reject a partial choice as soon as it breaks a constraint.",docsUrl:"https://resources.devweekends.com/dsa-patterns/backtracking",templateIds:[]},"dp-top-down":{id:"dp-top-down",name:"DP, top-down",pattern:"Dynamic Programming",summary:"Overlapping subproblems where the recursion is the natural statement. Write the recursive choice, then cache results by state.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",templateIds:["dp-top-down"]},"dp-bottom-up":{id:"dp-bottom-up",name:"DP, bottom-up",pattern:"Dynamic Programming",summary:"Each state depends on earlier indices or neighbor cells. Fill a dp table from the base cases forward.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",templateIds:["dp-bottom-up"]},"dp-kadane":{id:"dp-kadane",name:"Kadane's algorithm",pattern:"Dynamic Programming",summary:"Maximum sum subarray. At each element, either extend the running sum or restart from it; track the best seen.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",templateIds:["dp-kadane"]},"dp-unbounded-knapsack":{id:"dp-unbounded-knapsack",name:"Unbounded knapsack",pattern:"Dynamic Programming",summary:"Items reusable: min coins, ways to make change, climb stairs. 1D dp over the target, looping capacity forward.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",templateIds:[]},"dp-01-knapsack":{id:"dp-01-knapsack",name:"0/1 knapsack",pattern:"Dynamic Programming",summary:"Each item used at most once: partition equal subset, target sum. dp over capacity, looping capacity backwards per item.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",templateIds:[]},"dp-sequences":{id:"dp-sequences",name:"DP, sequences",pattern:"Dynamic Programming",summary:"Longest increasing or common subsequence, edit distance. dp[i] over one sequence or dp[i][j] over prefixes of two.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",templateIds:[]},greedy:{id:"greedy",name:"Greedy",pattern:"Greedy",summary:"Jump game, gas station, partition labels. Take the locally best move in one pass when an exchange argument shows it is never worse.",docsUrl:"https://resources.devweekends.com/dsa-patterns/greedy",templateIds:[]},"bit-manipulation":{id:"bit-manipulation",name:"Bit manipulation",pattern:"Bit Manipulation",summary:"Single number among pairs, set bits, powers of two. Use XOR, masks, and shifts to work on bits directly in O(1) space.",docsUrl:"https://resources.devweekends.com/dsa-patterns/bit-manipulation",templateIds:["bitmanipulation-test-kth-bit","bitmanipulation-set-kth-bit","bitmanipulation-clear-kth-bit","bitmanipulation-toggle-kth-bit","bitmanipulation-get-rightmost-bit","bitmanipulation-count-set-bits","bitmanipulation-multiply-power-of-two","bitmanipulation-divide-power-of-two","bitmanipulation-check-power-of-two","bitmanipulation-swap-variables"]}}},Ju=o=>String(o).padStart(2,"0");function gS({run:o}){const{started:g,steps:h,leaf:d,node:E}=o,R=h.length+1,C=g&&!d&&!E;return r.jsxs("nav",{className:O.log,"aria-label":"Your path so far",children:[r.jsxs("header",{className:O.logHead,children:[r.jsxs("p",{className:O.stripTitle,children:["Path log",r.jsxs("span",{className:O.stripValue,children:[h.length," answered"]})]}),r.jsx("p",{className:O.logHint,children:h.length>0?"Click a step to go back to that check.":"Each answer is written here as you go."})]}),r.jsxs("ol",{className:O.logRows,children:[h.map((z,H)=>r.jsx("li",{children:r.jsxs("button",{type:"button",className:O.row,"aria-label":`Back to question ${H+1}: ${z.question} You picked: ${z.option.cue}`,onClick:()=>o.backtrackTo(H),children:[r.jsx("span",{className:O.rowNum,"aria-hidden":"true",children:Ju(H+1)}),r.jsxs("span",{className:O.rowText,children:[r.jsx("span",{className:O.rowQuestion,children:z.question}),r.jsx("span",{className:O.rowCue,children:z.option.cue})]}),r.jsx("span",{className:O.rowBack,"aria-hidden":"true",children:"Back"})]})},H)),!g&&r.jsx("li",{children:r.jsxs("div",{className:ne(O.row,O.rowReady),children:[r.jsx("span",{className:O.rowNum,"aria-hidden":"true",children:"01"}),r.jsxs("span",{className:O.rowText,children:[r.jsx("span",{className:O.rowQuestion,children:"Ready"}),r.jsx("span",{className:O.rowLive,children:Si.nodes[Si.rootId].question})]})]})}),g&&E&&r.jsx("li",{"aria-current":"step",children:r.jsxs("div",{className:ne(O.row,O.rowCurrent),children:[r.jsx("span",{className:O.rowNum,"aria-hidden":"true",children:Ju(R)}),r.jsxs("span",{className:O.rowText,children:[r.jsxs("span",{className:O.rowQuestion,children:["Now, check ",R]}),r.jsx("span",{className:O.rowLive,children:E.question})]})]})}),d&&r.jsx("li",{"aria-current":"step",children:r.jsxs("div",{className:ne(O.row,O.rowResult),children:[r.jsx("span",{className:O.rowNum,"aria-hidden":"true",children:"="}),r.jsxs("span",{className:O.rowText,children:[r.jsxs("span",{className:O.rowQuestion,children:["Result, ",d.pattern]}),r.jsx("span",{className:O.rowLive,children:d.name})]})]})}),C&&r.jsx("li",{"aria-current":"step",children:r.jsxs("div",{className:ne(O.row,O.rowFault),children:[r.jsx("span",{className:O.rowNum,"aria-hidden":"true",children:"!"}),r.jsxs("span",{className:O.rowText,children:[r.jsx("span",{className:O.rowQuestion,children:"Fault"}),r.jsx("span",{className:O.rowLive,children:"This path leads nowhere"})]})]})}),!d&&!C&&r.jsx("li",{className:O.nextWrap,"aria-hidden":"true",children:r.jsxs("div",{className:O.nextCheck,children:[r.jsx("span",{className:ne(O.rowNum,O.rowNumDashed),children:Ju(R+1)}),r.jsx("span",{className:O.nextLabel,children:"Next check appears here"})]})})]})]})}const Qp=`def backtrack(curr, OTHER_ARGUMENTS...):
    if (BASE_CASE):
        # TODO: modify answer
        return

    ans = 0

    for (ITERATE_OVER_INPUT):
        # TODO: modify current state
        ans += backtrack(curr, OTHER_ARGUMENTS...)
        # TODO: undo modification of current state

    return ans
`,Xp=`const backtrack = (curr, OTHER_ARGUMENTS...) => {
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
`,Jp=`public int backtrack(STATE curr, OTHER_ARGUMENTS...) {
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
`,Zp=`int backtrack(STATE curr, OTHER_ARGUMENTS...) {
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
`,Fp=`def fn(arr, target):
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
`,Pp=`const fn = (arr, target) => {
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
`,Wp=`public int fn(int[] arr, int target) {
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
`,$p=`#include <vector>

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
`,nm=`def fn(arr):
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
`,em=`const fn = (arr) => {
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
`,tm=`public int fn(int[] arr) {
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
`,am=`#include <vector>

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
`,im=`def fn(arr):
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
`,rm=`const fn = (arr) => {
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
`,lm=`public int fn(int[] arr) {
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
`,sm=`#include <vector>

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
`,om=`def fn(arr, target):
    left = 0
    right = len(arr)

    while left < right:
        mid = (left + right) // 2

        if arr[mid] >= target:
            right = mid
        else:
            left = mid + 1

    return left
`,cm=`const fn = (arr, target) => {
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
`,um=`public int fn(int[] arr, int target) {
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
`,dm=`#include <vector>

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
`,fm=`def fn(arr, target):
    left = 0
    right = len(arr)

    while left < right:
        mid = (left + right) // 2

        if arr[mid] > target:
            right = mid
        else:
            left = mid + 1

    return left
`,hm=`const fn = (arr, target) => {
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
`,gm=`public int fn(int[] arr, int target) {
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
`,pm=`#include <vector>

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
`,mm=`def is_power_of_two(num: int) -> bool:
    return (num & (num - 1)) == 0
`,vm=`const isPowerOfTwo = (num) => {
    return (num & (num - 1)) === 0
}
`,bm=`public boolean isPowerOfTwo(int num) {
    return (num & (num - 1)) == 0;
}
`,ym=`bool is_power_of_two(int num) {
    return (num & (num - 1)) == 0;
}
`,xm=`def clear_kth_bit(num: int, k: int) -> int:
    return num & ~(1 << k)
`,_m=`const clearKthBit = (num, k) => {
    return num & ~(1 << k)
}
`,Tm=`public int clearKthBit(int num, int k) {
    return num & ~(1 << k);
}
`,Sm=`int clear_kth_bit(int num, int k) {
    return num & ~(1 << k);
}
`,jm=`def count_set_bits(num: int) -> int:
    return bin(num).count('1')
`,Nm=`const countSetBits = (num) => {
    return num.toString(2).split('1').length - 1
}
`,wm=`public int countSetBits(int num) {
    int count = 0;

    while (num > 0) {
        count += num & 1;
        num >>= 1;
    }

    return count;
}
`,Em=`int count_set_bits(int num) {
    int count = 0;

    while (num) {
        count += num & 1;
        num >>= 1;
    }

    return count;
}
`,Om=`def divide_by_power_of_two(num: int, k: int) -> int:
    return num >> k
`,Am=`const divideByPowerOfTwo = (num, k) => {
    return num >> k;
}
`,km=`public int divideByPowerOfTwo(int num, int k) {
    return num >> k;
}
`,Mm=`int divide_by_power_of_two(int num, int k) {
    return num >> k;
}
`,Cm=`def get_rightmost_set_bit(num: int) -> int:
    return num & -num
`,Rm=`const getRightmostSetBit = (num) => {
    return num & -num
}
`,zm=`public int getRightmostSetBit(int num) {
    return num & -num;
}
`,Dm=`int get_rightmost_set_bit(int num) {
    return num & -num;
}
`,Lm=`def multiply_by_power_of_two(num: int, k: int) -> int:
    return num << k
`,Bm=`const multiplyByPowerOfTwo = (num, k) => {
    return num << k
}
`,Um=`public int multiplyByPowerOfTwo(int num, int k) {
    return num << k;
}
`,Hm=`int multiply_by_power_of_two(int num, int k) {
    return num << k;
}
`,qm=`def set_kth_bit(num: int, k: int) -> int:
    return num | (1 << k)
`,Gm=`const setKthBit = (num, k) => {
    return num | (1 << k)
}
`,Ym=`public int setKthBit(int num, int k) {
    return num | (1 << k);
}
`,Vm=`int set_kth_bit(int num, int k) {
    return num | (1 << k);
}
`,Km=`def swap_variables(num1: int, num2: int) -> tuple:
    num1 ^= num2
    num2 ^= num1
    num1 ^= num2
    return num1, num2
`,Im=`const swapVariables = (num1, num2) => {
    num1 ^= num2
    num2 ^= num1
    num1 ^= num2
    return [num1, num2]
}
`,Qm=`public int[] swapVariables(int num1, int num2) {
    num1 ^= num2;
    num2 ^= num1;
    num1 ^= num2;
    return new int[] { num1, num2 };
}
`,Xm=`#include <tuple>

using namespace std;


tuple<int, int> swap_variables(int num1, int num2) {
    num1 ^= num2;
    num2 ^= num1;
    num1 ^= num2;
    return std::make_tuple(num1, num2);
}
`,Jm=`def test_kth_bit(num: int, k: int) -> bool:
    return num & (1 << k) != 0
`,Zm=`const testKthBit = (num, k) => {
    return num & (1 << k) !== 0
}
`,Fm=`public boolean testKthBit(int num, int k) {
    return (num & (1 << k)) != 0;
}
`,Pm=`bool test_kth_bit(int num, int k) {
    return (num & (1 << k)) != 0;
}
`,Wm=`def toggle_kth_bit(num: int, k: int) -> int:
    return num ^ (1 << k)
`,$m=`const toggleKthBit = (num, k) => {
    return num ^ (1 << k)
}
`,n0=`public int toggleKthBit(int num, int k) {
    return num ^ (1 << k);
}
`,e0=`int toggle_kth_bit(int num, int k) {
    return num ^ (1 << k);
}
`,t0=`def fn(arr):
    if BASE_CASE:
        return 0

    dp = [BASE_CASE] * (STATE_FOR_WHOLE_INPUT + 1)

    for STATE in range(SMALLEST_SUBPROBLEM, STATE_FOR_WHOLE_INPUT + 1):
        if BASE_CASE:
            dp[STATE] = BASE_CASE
        else:
            dp[STATE] = RECURRENCE_RELATION(STATE)

    return dp[STATE_FOR_WHOLE_INPUT]
`,a0=`const fn = (arr) => {
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
`,i0=`import java.util.Arrays;


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
`,r0=`#include <vector>
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
`,l0=`def kadane(arr: list[int]) -> int:
    curr_sub = max_sub = arr[0]

    for num in arr[1:]:
        curr_sub = max(curr_sub + num, num)
        max_sub = max(max_sub, curr_sub)

    return max_sub
`,s0=`const kadane = (arr) => {
    let currSub = arr[0]
    let maxSub = arr[0]

    for (let i = 1; i < arr.length; i++) {
        currSub = Math.max(currSub + arr[i], arr[i])
        maxSub = Math.max(maxSub, currSub)
    }

    return maxSub
}
`,o0=`public int kadane(int[] arr) {
    int currSub = arr[0];
    int maxSub = arr[0];

    for (int i = 1; i < arr.length; i++) {
        currSub = Math.max(currSub + arr[i], arr[i]);
        maxSub = Math.max(maxSub, currSub);
    }

    return maxSub;
}
`,c0=`#include <vector>
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
`,u0=`def fn(arr):
    @cache
    def dp(STATE):
        if BASE_CASE:
            return 0
        return RECURRENCE_RELATION(STATE)

    return dp(STATE_FOR_WHOLE_INPUT)
`,d0=`const fn = (arr) => {
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
`,f0=`import java.util.HashMap;
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
`,h0=`#include <unordered_map>

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
`,g0=`from typing import Any


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
`,p0=`class HashMap {
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
`,m0=`public class HashMap {
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
`,v0=`#include <iostream>
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
`,b0=`class TrieNode:
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
`,y0=`class TrieNode {
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
`,x0=`import java.util.ArrayList;
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
`,_0=`#include <iostream>
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
`,T0=`class UnionFind:
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
`,S0=`class UnionFind {
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
`,j0=`import java.util.ArrayList;
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
`,N0=`#include <iostream>
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
`,w0=`class UnionFind:
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
`,E0=`class UnionFind {
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
`,O0=`import java.util.ArrayList;
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
`,A0=`#include <iostream>
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
`,k0=`def bellman_ford(n: int, edges: list[tuple[int, int, int]], source: int) -> list[int]:
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
`,M0=`const bellmanFord = (n, edges, source) => {
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
`,C0=`import java.util.Arrays;
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
`,R0=`#include <vector>
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
`,z0=`from collections import deque


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
`,D0=`const fn = (graph) => {
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
`,L0=`import java.util.ArrayList;
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
`,B0=`#include <queue>
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
`,U0=`def fn(graph):
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
`,H0=`const fn = (graph) => {
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
`,q0=`import java.util.Stack;
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
`,G0=`#include <stack>
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
`,Y0=`def fn(graph):
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
`,V0=`const fn = (graph) => {
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
`,K0=`import java.util.HashSet;
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
`,I0=`#include <unordered_set>
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
`,Q0=`from heapq import heappop, heappush


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
`,X0=`/*
    JavaScript lacks built-in support for heaps.
    Try using a language that doesn't hate you, like Python.
*/
`,J0=`import java.util.Arrays;
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
`,Z0=`#include <limits>
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
`,F0=`from collections import defaultdict, deque


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
`,P0=`const kahnTopologicalSort = (graph) => {
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
`,W0=`import java.util.ArrayList;
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
`,$0=`#include <vector>
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
`,n1=`def kruskal_mst(n: int, edges: list[tuple[int, int, int]]) -> list[tuple[int, int, int]]:
    mst = []
    uf = UnionFind(n)
    edges.sort()

    for w, u, v in edges:
        if not uf.connected(u, v):
            uf.union(u, v)
            mst.append((w, u, v))

    return mst
`,e1=`const kruskalMst = (n, edges) => {
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
`,t1=`import java.util.ArrayList;
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
`,a1=`#include <vector>
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
`,i1=`from heapq import heappop


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
`,r1=`/*
    JavaScript lacks built-in support for heaps.
    Try using a language that doesn't hate you, like Python.
*/
`,l1=`import java.util.ArrayList;
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
`,s1=`#include <vector>
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
`,o1=`from collections import defaultdict


def fn(arr, k):
    counts = defaultdict(int)
    counts[0] = 1
    ans = curr = 0

    for num in arr:
        # TODO: logic to change curr
        ans += counts[curr - k]
        counts[curr] += 1

    return ans
`,c1=`const fn = (arr, k) => {
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
`,u1=`import java.util.HashMap;
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
`,d1=`#include <vector>
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
`,f1=`def fn(arr):
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
`,h1=`function fn(arr) {
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
`,g1=`import java.util.HashSet;
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
`,p1=`#include <vector>
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
`,m1=`from heapq import heappop, heappush


def fn(arr, k):
    heap = []

    for num in arr:
        # TODO: logic to push onto heap according to problem's criteria
        heappush(heap, (CRITERIA, num))

        if len(heap) > k:
            heappop(heap)

    return [num for num in heap]
`,v1=`/*
    JavaScript lacks built-in support for heaps.
    Try using a language that doesn't hate you, like Python.
*/
`,b1=`import java.util.PriorityQueue;


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
`,y1=`#include <vector>
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
`,x1=`def fn(head):
    slow = head
    fast = head
    ans = 0

    while fast and fast.next:
        # TODO: logic
        slow = slow.next
        fast = fast.next.next

    return ans
`,_1=`const fn = (head) => {
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
`,T1=`public int fn(ListNode head) {
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
`,S1=`int fn(ListNode* head) {
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
`,j1=`def fn(head):
    prev = None
    curr = head

    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt

    return prev
`,N1=`const fn = (head) => {
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
`,w1=`public ListNode fn(ListNode head) {
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
`,E1=`ListNode* fn(ListNode* head) {
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
`,O1=`def fn(arr):
    n = len(arr)
    prefix = [arr[0]]

    for i in range(1, n):
        prefix.append(prefix[-1] + arr[i])

    return prefix
`,A1=`const fn = (arr) => {
    let prefix = [arr[0]]

    for (let i = 1; i < arr.length; i++) {
        prefix.push(prefix[prefix.length - 1] + arr[i])
    }

    return prefix
}
`,k1=`import java.util.ArrayList;
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
`,M1=`#include <iostream>
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
`,C1=`def fn(arr):
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
`,R1=`const fn = (arr) => {
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
`,z1=`public int fn(int[] arr) {
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
`,D1=`#include <vector>

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
`,L1=`def fn(arr):
    stack = []
    ans = 0

    for num in arr:
        while stack and stack[-1] < num:
            # TODO: logic
            stack.pop()
        stack.append(num)

    return ans
`,B1=`const fn = (arr) => {
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
`,U1=`import java.util.Stack;


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
`,H1=`#include <stack>
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
`,q1=`def fn(arr):
    stack = []
    ans = 0

    for num in arr:
        while stack and stack[-1] > num:
            # TODO: logic
            stack.pop()
        stack.append(num)

    return ans
`,G1=`const fn = (arr) => {
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
`,Y1=`import java.util.Stack;


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
`,V1=`#include <stack>
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
`,K1=`def fn(strs: list[str]):
    ans = []

    for char in strs:
        ans.append(char)

    return ''.join(ans)
`,I1=`const fn = (arr) => {
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
`,Q1=`public String fn(char[] strs) {
    StringBuilder sb = new StringBuilder();

    for (char c: strs) {
        sb.append(c);
    }

    return sb.toString();
}
`,X1=`string fn(vector<char>& arr) {
    return string(arr.begin(), arr.end())
}
`,J1=`from collections import deque


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
`,Z1=`const fn = (root) => {
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
`,F1=`import java.util.LinkedList;
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
`,P1=`#include <queue>

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
`,W1=`def dfs(root):
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
`,$1=`const dfs = (root) => {
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
`,nv=`import java.util.Stack;


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
`,ev=`#include <stack>

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
`,tv=`def dfs(root):
    if not root:
        return

    ans = 0

    # TODO: logic
    dfs(root.left)
    dfs(root.right)

    return ans
`,av=`const dfs = (root) => {
    if (!root) {
        return
    }

    let ans = 0

    // TODO: logic
    dfs(root.left)
    dfs(root.right)

    return ans
}
`,iv=`public int dfs(TreeNode root) {
    if (root == null) {
        return 0;
    }

    int ans = 0;

    // TODO: logic
    ans += dfs(root.left);
    ans += dfs(root.right);

    return ans;
}
`,rv=`int dfs(TreeNode* root) {
    if (root == nullptr) {
        return 0;
    }

    int ans = 0;

    // TODO: logic
    dfs(root.left);
    dfs(root.right);

    return ans;
}
`,lv=`def fn(arr):
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
`,sv=`const fn = (arr) => {
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
`,ov=`public int fn(int[] arr) {
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
`,cv=`#include <vector>

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
`,uv=`def fn(arr1, arr2):
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
`,dv=`let fn = (arr1, arr2) => {
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
`,fv=`public int fn(int[] arr1, int[] arr2) {
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
`,hv=`#include <vector>

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
`,xn=(o,g,h,d,E)=>({title:o,code:{python:g,javascript:h,java:d,cpp:E}}),pS={backtracking:xn("backtracking",Qp,Xp,Jp,Zp),"binary-search":xn("binary search",Fp,Pp,Wp,$p),"binary-search-greedy-maximum":xn("greedy (maximum)",nm,em,tm,am),"binary-search-greedy-minimum":xn("greedy (minimum)",im,rm,lm,sm),"binary-search-left-insertion":xn("duplicate elements, left-most insertion point",om,cm,um,dm),"binary-search-right-insertion":xn("duplicate elements, right-most insertion point",fm,hm,gm,pm),"bitmanipulation-check-power-of-two":xn("check if number is power of 2",mm,vm,bm,ym),"bitmanipulation-clear-kth-bit":xn("clear kth bit",xm,_m,Tm,Sm),"bitmanipulation-count-set-bits":xn("count set bits",jm,Nm,wm,Em),"bitmanipulation-divide-power-of-two":xn("divide by 2^k",Om,Am,km,Mm),"bitmanipulation-get-rightmost-bit":xn("get rightmost bit",Cm,Rm,zm,Dm),"bitmanipulation-multiply-power-of-two":xn("multiply by 2^k",Lm,Bm,Um,Hm),"bitmanipulation-set-kth-bit":xn("set kth bit",qm,Gm,Ym,Vm),"bitmanipulation-swap-variables":xn("swap two variables",Km,Im,Qm,Xm),"bitmanipulation-test-kth-bit":xn("test kth-bit",Jm,Zm,Fm,Pm),"bitmanipulation-toggle-kth-bit":xn("toggle kth bit",Wm,$m,n0,e0),"dp-bottom-up":xn("DP bottom-up",t0,a0,i0,r0),"dp-kadane":xn("Kadane (max-sum subarray)",l0,s0,o0,c0),"dp-top-down":xn("DP top-down",u0,d0,f0,h0),"ds-hash-map":xn("hash map",g0,p0,m0,v0),"ds-trie":xn("trie",b0,y0,x0,_0),"ds-union-find":xn("union find",T0,S0,j0,N0),"ds-union-find-optimized":xn("union find optimized",w0,E0,O0,A0),"graph-bellman-ford":xn("Bellman-Ford (shortest path)",k0,M0,C0,R0),"graph-bfs":xn("BFS",z0,D0,L0,B0),"graph-dfs-iterative":xn("DFS (iterative)",U0,H0,q0,G0),"graph-dfs-recursive":xn("DFS (recursive)",Y0,V0,K0,I0),"graph-dijkstra":xn("Dijkstra (shortest path)",Q0,X0,J0,Z0),"graph-kahn":xn("Kahn (topological sort)",F0,P0,W0,$0),"graph-kruskal":xn("Kruskal (mst)",n1,e1,t1,a1),"graph-prim":xn("Prim (mst)",i1,r1,l1,s1),"hashmap-find-number-of-subarrays":xn("find number of subarrays that fit an exact criteria",o1,c1,u1,d1),"hashmap-sliding-window":xn("sliding window",f1,h1,g1,p1),"heap-find-top-k-elements":xn("find top k elements",m1,v1,b1,y1),"linkedlist-fast-and-slow-pointer":xn("fast and slow pointer",x1,_1,T1,S1),"linkedlist-reverse":xn("reverse linked list",j1,N1,w1,E1),"prefix-sum":xn("prefix sum",O1,A1,k1,M1),"sliding-window":xn("sliding window",C1,R1,z1,D1),"stack-monotonic-decreasing":xn("monotonic decreasing stack",L1,B1,U1,H1),"stack-monotonic-increasing":xn("monotonic increasing stack",q1,G1,Y1,V1),"string-building":xn("efficient string building",K1,I1,Q1,X1),"tree-bfs":xn("BFS",J1,Z1,F1,P1),"tree-dfs-iterative":xn("DFS (iterative)",W1,$1,nv,ev),"tree-dfs-recursive":xn("DFS (recursive)",tv,av,iv,rv),"two-pointers-one-input":xn("two pointers: one input, opposite ends",lv,sv,ov,cv),"two-pointers-two-inputs":xn("two pointers: two inputs, exhaust both",uv,dv,fv,hv)};function mS(o){const g=Si.leaves[o];return g?g.templateIds.map(h=>pS[h]).filter(h=>!!h):[]}const vS="_container_g6uc3_1",bS="_buttonContainer_g6uc3_15",yS="_tabButtonContainer_g6uc3_24",xS="_tabButton_g6uc3_24",eo={container:vS,buttonContainer:bS,tabButtonContainer:yS,tabButton:xS},_S="_code_10mye_1",TS="_line_10mye_14",Op={code:_S,line:TS};var Zu,Ap;function SS(){if(Ap)return Zu;Ap=1;function o(p){return p instanceof Map?p.clear=p.delete=p.set=function(){throw new Error("map is read-only")}:p instanceof Set&&(p.add=p.clear=p.delete=function(){throw new Error("set is read-only")}),Object.freeze(p),Object.getOwnPropertyNames(p).forEach(M=>{const Q=p[M],bn=typeof Q;(bn==="object"||bn==="function")&&!Object.isFrozen(Q)&&o(Q)}),p}class g{constructor(M){M.data===void 0&&(M.data={}),this.data=M.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function h(p){return p.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function d(p,...M){const Q=Object.create(null);for(const bn in p)Q[bn]=p[bn];return M.forEach(function(bn){for(const ee in bn)Q[ee]=bn[ee]}),Q}const E="</span>",R=p=>!!p.scope,C=(p,{prefix:M})=>{if(p.startsWith("language:"))return p.replace("language:","language-");if(p.includes(".")){const Q=p.split(".");return[`${M}${Q.shift()}`,...Q.map((bn,ee)=>`${bn}${"_".repeat(ee+1)}`)].join(" ")}return`${M}${p}`};class z{constructor(M,Q){this.buffer="",this.classPrefix=Q.classPrefix,M.walk(this)}addText(M){this.buffer+=h(M)}openNode(M){if(!R(M))return;const Q=C(M.scope,{prefix:this.classPrefix});this.span(Q)}closeNode(M){R(M)&&(this.buffer+=E)}value(){return this.buffer}span(M){this.buffer+=`<span class="${M}">`}}const H=(p={})=>{const M={children:[]};return Object.assign(M,p),M};class G{constructor(){this.rootNode=H(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(M){this.top.children.push(M)}openNode(M){const Q=H({scope:M});this.add(Q),this.stack.push(Q)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(M){return this.constructor._walk(M,this.rootNode)}static _walk(M,Q){return typeof Q=="string"?M.addText(Q):Q.children&&(M.openNode(Q),Q.children.forEach(bn=>this._walk(M,bn)),M.closeNode(Q)),M}static _collapse(M){typeof M!="string"&&M.children&&(M.children.every(Q=>typeof Q=="string")?M.children=[M.children.join("")]:M.children.forEach(Q=>{G._collapse(Q)}))}}class D extends G{constructor(M){super(),this.options=M}addText(M){M!==""&&this.add(M)}startScope(M){this.openNode(M)}endScope(){this.closeNode()}__addSublanguage(M,Q){const bn=M.root;Q&&(bn.scope=`language:${Q}`),this.add(bn)}toHTML(){return new z(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function b(p){return p?typeof p=="string"?p:p.source:null}function N(p){return J("(?=",p,")")}function V(p){return J("(?:",p,")*")}function q(p){return J("(?:",p,")?")}function J(...p){return p.map(Q=>b(Q)).join("")}function en(p){const M=p[p.length-1];return typeof M=="object"&&M.constructor===Object?(p.splice(p.length-1,1),M):{}}function _n(...p){return"("+(en(p).capture?"":"?:")+p.map(bn=>b(bn)).join("|")+")"}function gn(p){return new RegExp(p.toString()+"|").exec("").length-1}function hn(p,M){const Q=p&&p.exec(M);return Q&&Q.index===0}const En=new RegExp(_n(/\[(?:[^\\\]]|\\.)*\]/,/\(\?<(?![=!])[^>]+>/,/\(\?'[^']+'/,/\(\??/,/\\([1-9][0-9]*)/,/\\./));function Kn(p,{joinWith:M}){let Q=0;return p.map(bn=>{Q+=1;const ee=Q;let Bn=b(bn),$="";for(;Bn.length>0;){const K=En.exec(Bn);if(!K){$+=Bn;break}$+=Bn.substring(0,K.index),Bn=Bn.substring(K.index+K[0].length),K[0][0]==="\\"&&K[1]?$+="\\"+String(Number(K[1])+ee):($+=K[0],(K[0]==="("||/^\(\?[<']/.test(K[0]))&&Q++)}return $}).map(bn=>`(${bn})`).join(M)}const vn=/\b\B/,Z="[a-zA-Z]\\w*",pn="[a-zA-Z_]\\w*",ae="\\b\\d+(\\.\\d+)?",ue="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",le="\\b(0b[01]+)",pe="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Ke=(p={})=>{const M=/^#![ ]*\//;return p.binary&&(p.begin=J(M,/.*\b/,p.binary,/\b.*/)),d({scope:"meta",begin:M,end:/$/,relevance:0,"on:begin":(Q,bn)=>{Q.index!==0&&bn.ignoreMatch()}},p)},Ee={begin:"\\\\[\\s\\S]",relevance:0},oe={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Ee]},Y={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Ee]},cn={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},P=function(p,M,Q={}){const bn=d({scope:"comment",begin:p,end:M,contains:[]},Q);bn.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const ee=_n("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return bn.contains.push({begin:J(/[ ]+/,"(",ee,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),bn},kn=P("//","$"),Sn=P("/\\*","\\*/"),se=P("#","$"),me={scope:"number",begin:ae,relevance:0},ct={scope:"number",begin:ue,relevance:0},y={scope:"number",begin:le,relevance:0},L={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[Ee,{begin:/\[/,end:/\]/,relevance:0,contains:[Ee]}]},sn={scope:"title",begin:Z,relevance:0},W={scope:"title",begin:pn,relevance:0},un={begin:"\\.\\s*"+pn,relevance:0};var On=Object.freeze({__proto__:null,APOS_STRING_MODE:oe,BACKSLASH_ESCAPE:Ee,BINARY_NUMBER_MODE:y,BINARY_NUMBER_RE:le,COMMENT:P,C_BLOCK_COMMENT_MODE:Sn,C_LINE_COMMENT_MODE:kn,C_NUMBER_MODE:ct,C_NUMBER_RE:ue,END_SAME_AS_BEGIN:function(p){return Object.assign(p,{"on:begin":(M,Q)=>{Q.data._beginMatch=M[1]},"on:end":(M,Q)=>{Q.data._beginMatch!==M[1]&&Q.ignoreMatch()}})},HASH_COMMENT_MODE:se,IDENT_RE:Z,MATCH_NOTHING_RE:vn,METHOD_GUARD:un,NUMBER_MODE:me,NUMBER_RE:ae,PHRASAL_WORDS_MODE:cn,QUOTE_STRING_MODE:Y,REGEXP_MODE:L,RE_STARTERS_RE:pe,SHEBANG:Ke,TITLE_MODE:sn,UNDERSCORE_IDENT_RE:pn,UNDERSCORE_TITLE_MODE:W});function tn(p,M){p.input[p.index-1]==="."&&M.ignoreMatch()}function dn(p,M){p.className!==void 0&&(p.scope=p.className,delete p.className)}function $e(p,M){M&&p.beginKeywords&&(p.begin="\\b("+p.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",p.__beforeBegin=tn,p.keywords=p.keywords||p.beginKeywords,delete p.beginKeywords,p.relevance===void 0&&(p.relevance=0))}function Wa(p,M){Array.isArray(p.illegal)&&(p.illegal=_n(...p.illegal))}function ba(p,M){if(p.match){if(p.begin||p.end)throw new Error("begin & end are not supported with match");p.begin=p.match,delete p.match}}function bt(p,M){p.relevance===void 0&&(p.relevance=1)}const Oe=(p,M)=>{if(!p.beforeMatch)return;if(p.starts)throw new Error("beforeMatch cannot be used with starts");const Q=Object.assign({},p);Object.keys(p).forEach(bn=>{delete p[bn]}),p.keywords=Q.keywords,p.begin=J(Q.beforeMatch,N(Q.begin)),p.starts={relevance:0,contains:[Object.assign(Q,{endsParent:!0})]},p.relevance=0,delete Q.beforeMatch},Pn=["of","and","for","in","not","or","if","then","parent","list","value"],yt="keyword";function ya(p,M,Q=yt){const bn=Object.create(null);return typeof p=="string"?ee(Q,p.split(" ")):Array.isArray(p)?ee(Q,p):Object.keys(p).forEach(function(Bn){Object.assign(bn,ya(p[Bn],M,Bn))}),bn;function ee(Bn,$){M&&($=$.map(K=>K.toLowerCase())),$.forEach(function(K){const mn=K.split("|");bn[mn[0]]=[Bn,Ht(mn[0],mn[1])]})}}function Ht(p,M){return M?Number(M):ji(p)?0:1}function ji(p){return Pn.includes(p.toLowerCase())}const $a={},nt=p=>{console.error(p)},Ni=(p,...M)=>{console.log(`WARN: ${p}`,...M)},kt=(p,M)=>{$a[`${p}/${M}`]||(console.log(`Deprecated as of ${p}. ${M}`),$a[`${p}/${M}`]=!0)},xa=new Error;function yr(p,M,{key:Q}){let bn=0;const ee=p[Q],Bn={},$={};for(let K=1;K<=M.length;K++)$[K+bn]=ee[K],Bn[K+bn]=!0,bn+=gn(M[K-1]);p[Q]=$,p[Q]._emit=Bn,p[Q]._multi=!0}function qt(p){if(Array.isArray(p.begin)){if(p.skip||p.excludeBegin||p.returnBegin)throw nt("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),xa;if(typeof p.beginScope!="object"||p.beginScope===null)throw nt("beginScope must be object"),xa;yr(p,p.begin,{key:"beginScope"}),p.begin=Kn(p.begin,{joinWith:""})}}function xr(p){if(Array.isArray(p.end)){if(p.skip||p.excludeEnd||p.returnEnd)throw nt("skip, excludeEnd, returnEnd not compatible with endScope: {}"),xa;if(typeof p.endScope!="object"||p.endScope===null)throw nt("endScope must be object"),xa;yr(p,p.end,{key:"endScope"}),p.end=Kn(p.end,{joinWith:""})}}function _r(p){p.scope&&typeof p.scope=="object"&&p.scope!==null&&(p.beginScope=p.scope,delete p.scope)}function oo(p){_r(p),typeof p.beginScope=="string"&&(p.beginScope={_wrap:p.beginScope}),typeof p.endScope=="string"&&(p.endScope={_wrap:p.endScope}),qt(p),xr(p)}function Sl(p){function M($,K){return new RegExp(b($),"m"+(p.case_insensitive?"i":"")+(p.unicodeRegex?"u":"")+(K?"g":""))}class Q{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(K,mn){mn.position=this.position++,this.matchIndexes[this.matchAt]=mn,this.regexes.push([mn,K]),this.matchAt+=gn(K)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const K=this.regexes.map(mn=>mn[1]);this.matcherRe=M(Kn(K,{joinWith:"|"}),!0),this.lastIndex=0}exec(K){this.matcherRe.lastIndex=this.lastIndex;const mn=this.matcherRe.exec(K);if(!mn)return null;const xe=mn.findIndex((Gt,_a)=>_a>0&&Gt!==void 0),fe=this.matchIndexes[xe];return mn.splice(0,xe),Object.assign(mn,fe)}}class bn{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(K){if(this.multiRegexes[K])return this.multiRegexes[K];const mn=new Q;return this.rules.slice(K).forEach(([xe,fe])=>mn.addRule(xe,fe)),mn.compile(),this.multiRegexes[K]=mn,mn}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(K,mn){this.rules.push([K,mn]),mn.type==="begin"&&this.count++}exec(K){const mn=this.getMatcher(this.regexIndex);mn.lastIndex=this.lastIndex;let xe=mn.exec(K);if(this.resumingScanAtSamePosition()&&!(xe&&xe.index===this.lastIndex)){const fe=this.getMatcher(0);fe.lastIndex=this.lastIndex+1,xe=fe.exec(K)}return xe&&(this.regexIndex+=xe.position+1,this.regexIndex===this.count&&this.considerAll()),xe}}function ee($){const K=new bn;return $.contains.forEach(mn=>K.addRule(mn.begin,{rule:mn,type:"begin"})),$.terminatorEnd&&K.addRule($.terminatorEnd,{type:"end"}),$.illegal&&K.addRule($.illegal,{type:"illegal"}),K}function Bn($,K){const mn=$;if($.isCompiled)return mn;[dn,ba,oo,Oe].forEach(fe=>fe($,K)),p.compilerExtensions.forEach(fe=>fe($,K)),$.__beforeBegin=null,[$e,Wa,bt].forEach(fe=>fe($,K)),$.isCompiled=!0;let xe=null;return typeof $.keywords=="object"&&$.keywords.$pattern&&($.keywords=Object.assign({},$.keywords),xe=$.keywords.$pattern,delete $.keywords.$pattern),xe=xe||/\w+/,$.keywords&&($.keywords=ya($.keywords,p.case_insensitive)),mn.keywordPatternRe=M(xe,!0),K&&($.begin||($.begin=/\B|\b/),mn.beginRe=M(mn.begin),!$.end&&!$.endsWithParent&&($.end=/\B|\b/),$.end&&(mn.endRe=M(mn.end)),mn.terminatorEnd=b(mn.end)||"",$.endsWithParent&&K.terminatorEnd&&(mn.terminatorEnd+=($.end?"|":"")+K.terminatorEnd)),$.illegal&&(mn.illegalRe=M($.illegal)),$.contains||($.contains=[]),$.contains=[].concat(...$.contains.map(function(fe){return Tr(fe==="self"?$:fe)})),$.contains.forEach(function(fe){Bn(fe,mn)}),$.starts&&Bn($.starts,K),mn.matcher=ee(mn),mn}if(p.compilerExtensions||(p.compilerExtensions=[]),p.contains&&p.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return p.classNameAliases=d(p.classNameAliases||{}),Bn(p)}function wi(p){return p?p.endsWithParent||wi(p.starts):!1}function Tr(p){return p.variants&&!p.cachedVariants&&(p.cachedVariants=p.variants.map(function(M){return d(p,{variants:null},M)})),p.cachedVariants?p.cachedVariants:wi(p)?d(p,{starts:p.starts?d(p.starts):null}):Object.isFrozen(p)?d(p):p}var Sr="11.12.0";class co extends Error{constructor(M,Q){super(M),this.name="HTMLInjectionError",this.html=Q}}const jr=h,Ie=d,jl=Symbol("nomatch"),Nl=7,Nr=function(p){const M=Object.create(null),Q=Object.create(null),bn=[];let ee=!0;const Bn="Could not find the language '{}', did you forget to load/include a language module?",$={disableAutodetect:!0,name:"Plain text",contains:[]};let K={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:D};function mn(B){return K.noHighlightRe.test(B)}function xe(B){let rn=B.className+" ";rn+=B.parentNode?B.parentNode.className:"";const Mn=K.languageDetectRe.exec(rn);if(Mn){const Wn=Ct(Mn[1]);return Wn||(Ni(Bn.replace("{}",Mn[1])),Ni("Falling back to no-highlight mode for this block.",B)),Wn?Mn[1]:"no-highlight"}return rn.split(/\s+/).find(Wn=>mn(Wn)||Ct(Wn))}function fe(B,rn,Mn){let Wn="",ve="";typeof rn=="object"?(Wn=B,Mn=rn.ignoreIllegals,ve=rn.language):(kt("10.7.0","highlight(lang, code, ...args) has been deprecated."),kt("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),ve=B,Wn=rn),Mn===void 0&&(Mn=!0);const tt={code:Wn,language:ve};et("before:highlight",tt);const at=tt.result?tt.result:Gt(tt.language,tt.code,Mn);return at.code=tt.code,et("after:highlight",at),at}function Gt(B,rn,Mn,Wn){const ve=Object.create(null);function tt(X,ln){return X.keywords[ln]}function at(){if(!Tn.keywords){Te.addText(qn);return}let X=0;Tn.keywordPatternRe.lastIndex=0;let ln=Tn.keywordPatternRe.exec(qn),jn="";for(;ln;){jn+=qn.substring(X,ln.index);const Gn=_t.case_insensitive?ln[0].toLowerCase():ln[0],Xn=tt(Tn,Gn);if(Xn){const[ut,zl]=Xn;if(Te.addText(jn),jn="",ve[Gn]=(ve[Gn]||0)+1,ve[Gn]<=Nl&&(ia+=zl),ut.startsWith("_"))jn+=ln[0];else{const Ar=_t.classNameAliases[ut]||ut;Ce(ln[0],Ar)}}else jn+=ln[0];X=Tn.keywordPatternRe.lastIndex,ln=Tn.keywordPatternRe.exec(qn)}jn+=qn.substring(X),Te.addText(jn)}function na(){if(qn==="")return;let X=null;if(typeof Tn.subLanguage=="string"){if(!M[Tn.subLanguage]){Te.addText(qn);return}X=Gt(Tn.subLanguage,qn,!0,Un[Tn.subLanguage]),Un[Tn.subLanguage]=X._top}else X=Ta(qn,Tn.subLanguage.length?Tn.subLanguage:null);Tn.relevance>0&&(ia+=X.relevance),Te.__addSublanguage(X._emitter,X.language)}function Me(){Tn.subLanguage!=null?na():at(),qn=""}function Ce(X,ln){X!==""&&(Te.startScope(ln),Te.addText(X),Te.endScope())}function ea(X,ln){let jn=1;const Gn=ln.length-1;for(;jn<=Gn;){if(!X._emit[jn]){jn++;continue}const Xn=_t.classNameAliases[X[jn]]||X[jn],ut=ln[jn];Xn?Ce(ut,Xn):(qn=ut,at(),qn=""),jn++}}function Na(X,ln){return X.scope&&typeof X.scope=="string"&&Te.openNode(_t.classNameAliases[X.scope]||X.scope),X.beginScope&&(X.beginScope._wrap?(Ce(qn,_t.classNameAliases[X.beginScope._wrap]||X.beginScope._wrap),qn=""):X.beginScope._multi&&(ea(X.beginScope,ln),qn="")),Tn=Object.create(X,{parent:{value:Tn}}),Tn}function ta(X,ln,jn){let Gn=hn(X.endRe,jn);if(Gn){if(X["on:end"]){const Xn=new g(X);X["on:end"](ln,Xn),Xn.isMatchIgnored&&(Gn=!1)}if(Gn){for(;X.endsParent&&X.parent;)X=X.parent;return X}}if(X.endsWithParent)return ta(X.parent,ln,jn)}function _e(X){return Tn.matcher.regexIndex===0?(qn+=X[0],1):(Ai=!0,0)}function kl(X){const ln=X[0],jn=X.rule,Gn=new g(jn),Xn=[jn.__beforeBegin,jn["on:begin"]];for(const ut of Xn)if(ut&&(ut(X,Gn),Gn.isMatchIgnored))return _e(ln);return jn.skip?qn+=ln:(jn.excludeBegin&&(qn+=ln),Me(),!jn.returnBegin&&!jn.excludeBegin&&(qn=ln)),Na(jn,X),jn.returnBegin?0:ln.length}function Ml(X){const ln=X[0],jn=rn.substring(X.index),Gn=ta(Tn,X,jn);if(!Gn)return jl;const Xn=Tn;Tn.endScope&&Tn.endScope._wrap?(Me(),Ce(ln,Tn.endScope._wrap)):Tn.endScope&&Tn.endScope._multi?(Me(),ea(Tn.endScope,X)):Xn.skip?qn+=ln:(Xn.returnEnd||Xn.excludeEnd||(qn+=ln),Me(),Xn.excludeEnd&&(qn=ln));do Tn.scope&&Te.closeNode(),!Tn.skip&&!Tn.subLanguage&&(ia+=Tn.relevance),Tn=Tn.parent;while(Tn!==Gn.parent);return Gn.starts&&Na(Gn.starts,X),Xn.returnEnd?0:ln.length}function Cl(){const X=[];for(let ln=Tn;ln!==_t;ln=ln.parent)ln.scope&&X.unshift(ln.scope);X.forEach(ln=>Te.openNode(ln))}let xt={};function aa(X,ln){const jn=ln&&ln[0];if(qn+=X,jn==null)return Me(),0;if(xt.type==="begin"&&ln.type==="end"&&xt.index===ln.index&&jn===""){if(qn+=rn.slice(ln.index,ln.index+1),!ee){const Gn=new Error(`0 width match regex (${B})`);throw Gn.languageName=B,Gn.badRule=xt.rule,Gn}return 1}if(xt=ln,ln.type==="begin")return kl(ln);if(ln.type==="illegal"&&!Mn){const Gn=new Error('Illegal lexeme "'+jn+'" for mode "'+(Tn.scope||"<unnamed>")+'"');throw Gn.mode=Tn,Gn}else if(ln.type==="end"){const Gn=Ml(ln);if(Gn!==jl)return Gn}if(ln.type==="illegal"&&jn==="")return ln.index===rn.length||(qn+=`
`),1;if(Be>1e5&&Be>ln.index*3)throw new Error("potential infinite loop, way more iterations than matches");return qn+=jn,jn.length}const _t=Ct(B);if(!_t)throw nt(Bn.replace("{}",B)),new Error('Unknown language: "'+B+'"');const Rl=Sl(_t);let Oi="",Tn=Wn||Rl;const Un={},Te=new K.__emitter(K);Cl();let qn="",ia=0,Le=0,Be=0,Ai=!1;try{if(_t.__emitTokens)_t.__emitTokens(rn,Te);else{for(Tn.matcher.considerAll();;){Be++,Ai?Ai=!1:Tn.matcher.considerAll(),Tn.matcher.lastIndex=Le;const X=Tn.matcher.exec(rn);if(!X)break;const ln=rn.substring(Le,X.index),jn=aa(ln,X);Le=X.index+jn}aa(rn.substring(Le))}return Te.finalize(),Oi=Te.toHTML(),{language:B,value:Oi,relevance:ia,illegal:!1,_emitter:Te,_top:Tn}}catch(X){if(X.message&&X.message.includes("Illegal"))return{language:B,value:jr(rn),illegal:!0,relevance:0,_illegalBy:{message:X.message,index:Le,context:rn.slice(Le-100,Le+100),mode:X.mode,resultSoFar:Oi},_emitter:Te};if(ee)return{language:B,value:jr(rn),illegal:!1,relevance:0,errorRaised:X,_emitter:Te,_top:Tn};throw X}}function _a(B){const rn={value:jr(B),illegal:!1,relevance:0,_top:$,_emitter:new K.__emitter(K)};return rn._emitter.addText(B),rn}function Ta(B,rn){rn=rn||K.languages||Object.keys(M);const Mn=_a(B),Wn=rn.filter(Ct).filter(Ei).map(Me=>Gt(Me,B,!1));Wn.unshift(Mn);const ve=Wn.sort((Me,Ce)=>{if(Me.relevance!==Ce.relevance)return Ce.relevance-Me.relevance;if(Me.language&&Ce.language){if(Ct(Me.language).supersetOf===Ce.language)return 1;if(Ct(Ce.language).supersetOf===Me.language)return-1}return 0}),[tt,at]=ve,na=tt;return na.secondBest=at,na}function $t(B,rn,Mn){const Wn=rn&&Q[rn]||Mn;B.classList.add("hljs"),B.classList.add(`language-${Wn}`)}function Sa(B){let rn=null;const Mn=xe(B);if(mn(Mn))return;if(et("before:highlightElement",{el:B,language:Mn}),B.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",B);return}if(B.children.length>0&&(K.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(B)),K.throwUnescapedHTML))throw new co("One of your code blocks includes unescaped HTML.",B.innerHTML);rn=B;const Wn=rn.textContent,ve=Mn?fe(Wn,{language:Mn,ignoreIllegals:!0}):Ta(Wn);B.innerHTML=ve.value,B.dataset.highlighted="yes",$t(B,Mn,ve.language),B.result={language:ve.language,re:ve.relevance,relevance:ve.relevance},ve.secondBest&&(B.secondBest={language:ve.secondBest.language,relevance:ve.secondBest.relevance}),et("after:highlightElement",{el:B,result:ve,text:Wn})}function ni(B){K=Ie(K,B)}const wl=()=>{ja(),kt("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function uo(){ja(),kt("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let wr=!1;function ja(){function B(){ja()}if(document.readyState==="loading"){wr||window.addEventListener("DOMContentLoaded",B,!1),wr=!0;return}document.querySelectorAll(K.cssSelector).forEach(Sa)}function ei(B,rn){let Mn=null;try{Mn=rn(p)}catch(Wn){if(nt("Language definition for '{}' could not be registered.".replace("{}",B)),ee)nt(Wn);else throw Wn;Mn=$}Mn.name||(Mn.name=B),M[B]=Mn,Mn.rawDefinition=rn.bind(null,p),Mn.aliases&&Er(Mn.aliases,{languageName:B})}function fo(B){delete M[B];for(const rn of Object.keys(Q))Q[rn]===B&&delete Q[rn]}function El(){return Object.keys(M)}function Ct(B){return B=(B||"").toLowerCase(),M[B]||M[Q[B]]}function Er(B,{languageName:rn}){typeof B=="string"&&(B=[B]),B.forEach(Mn=>{Q[Mn.toLowerCase()]=rn})}function Ei(B){const rn=Ct(B);return rn&&!rn.disableAutodetect}function Or(B){B["before:highlightBlock"]&&!B["before:highlightElement"]&&(B["before:highlightElement"]=rn=>{B["before:highlightBlock"](Object.assign({block:rn.el},rn))}),B["after:highlightBlock"]&&!B["after:highlightElement"]&&(B["after:highlightElement"]=rn=>{B["after:highlightBlock"](Object.assign({block:rn.el},rn))})}function Ol(B){Or(B),bn.push(B)}function Al(B){const rn=bn.indexOf(B);rn!==-1&&bn.splice(rn,1)}function et(B,rn){const Mn=B;bn.forEach(function(Wn){Wn[Mn]&&Wn[Mn](rn)})}function Ae(B){return kt("10.7.0","highlightBlock will be removed entirely in v12.0"),kt("10.7.0","Please use highlightElement now."),Sa(B)}Object.assign(p,{highlight:fe,highlightAuto:Ta,highlightAll:ja,highlightElement:Sa,highlightBlock:Ae,configure:ni,initHighlighting:wl,initHighlightingOnLoad:uo,registerLanguage:ei,unregisterLanguage:fo,listLanguages:El,getLanguage:Ct,registerAliases:Er,autoDetection:Ei,inherit:Ie,addPlugin:Ol,removePlugin:Al}),p.debugMode=function(){ee=!1},p.safeMode=function(){ee=!0},p.versionString=Sr,p.regex={concat:J,lookahead:N,either:_n,optional:q,anyNumberOfTimes:V};for(const B in On)typeof On[B]=="object"&&o(On[B]);return Object.assign(p,On),p},Mt=Nr({});return Mt.newInstance=()=>Nr({}),Zu=Mt,Mt.HighlightJS=Mt,Mt.default=Mt,Zu}var jS=SS();const Tl=br(jS),kp="[A-Za-z$_][0-9A-Za-z$_]*",NS=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],wS=["true","false","null","undefined","NaN","Infinity"],gv=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],pv=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],mv=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],ES=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","self","global"],OS=[].concat(mv,gv,pv);function AS(o){const g=o.regex,h=(P,{after:kn})=>{const Sn="</"+P[0].slice(1);return P.input.indexOf(Sn,kn)!==-1},d=kp,E={begin:"<>",end:"</>"},R=/<[A-Za-z0-9\\._:-]+\s*\/>/,C={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(P,kn)=>{const Sn=P[0].length+P.index,se=P.input[Sn];if(se==="<"||se===","){kn.ignoreMatch();return}se===">"&&(h(P,{after:Sn})||kn.ignoreMatch());let me;const ct=P.input.substring(Sn);if(me=ct.match(/^\s*=/)){kn.ignoreMatch();return}if((me=ct.match(/^\s+extends\s+/))&&me.index===0){kn.ignoreMatch();return}}},z={$pattern:kp,keyword:NS,literal:wS,built_in:OS,"variable.language":ES},H="[0-9](_?[0-9])*",G=`\\.(${H})`,D="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",b={className:"number",variants:[{begin:`(\\b(${D})((${G})|\\.)?|(${G}))[eE][+-]?(${H})\\b`},{begin:`\\b(${D})\\b((${G})\\b|\\.)?|(${G})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},N={className:"subst",begin:"\\$\\{",end:"\\}",keywords:z,contains:[]},V={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,N],subLanguage:"xml"}},q={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,N],subLanguage:"css"}},J={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,N],subLanguage:"graphql"}},en={className:"string",begin:"`",end:"`",contains:[o.BACKSLASH_ESCAPE,N]},gn={className:"comment",variants:[o.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:d+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),o.C_BLOCK_COMMENT_MODE,o.C_LINE_COMMENT_MODE]},hn=[o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,V,q,J,en,{match:/\$\d+/},b];N.contains=hn.concat({begin:/\{/,end:/\}/,keywords:z,contains:["self"].concat(hn)});const En=[].concat(gn,N.contains),Kn=En.concat([{begin:/(\s*)\(/,end:/\)/,keywords:z,contains:["self"].concat(En)}]),vn={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:z,contains:Kn},Z={variants:[{match:[/class/,/\s+/,d,/\s+/,/extends/,/\s+/,g.concat(d,"(",g.concat(/\./,d),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,d],scope:{1:"keyword",3:"title.class"}}]},pn={relevance:0,match:g.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...gv,...pv]}},ae={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},ue={variants:[{match:[/function/,/\s+/,d,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[vn],illegal:/%/},le={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function pe(P){return g.concat("(?!",P.join("|"),")")}const Ke={match:g.concat(/\b/,pe([...mv,"super","import","await"].map(P=>`${P}\\s*\\(`)),d,g.lookahead(/\s*\(/)),className:"title.function",relevance:0},Ee={begin:g.concat(/\./,g.lookahead(g.concat(d,/(?![0-9A-Za-z$_(])/))),end:d,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},oe={match:[/get|set/,/\s+/,d,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},vn]},Y="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+o.UNDERSCORE_IDENT_RE+")\\s*=>",cn={match:[/const|var|let/,/\s+/,d,/\s*/,/=\s*/,/(async\s*)?/,g.lookahead(Y)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[vn]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:z,exports:{PARAMS_CONTAINS:Kn,CLASS_REFERENCE:pn},illegal:/#(?![$_A-Za-z])/,contains:[o.SHEBANG({label:"shebang",binary:"node",relevance:5}),ae,o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,V,q,J,en,gn,{match:/\$\d+/},b,pn,{scope:"attr",match:d+g.lookahead(":"),relevance:0},cn,{begin:"("+o.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[gn,o.REGEXP_MODE,{className:"function",begin:Y,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:o.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:z,contains:Kn}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:E.begin,end:E.end},{match:R},{begin:C.begin,"on:begin":C.isTrulyOpeningTag,end:C.end}],subLanguage:"xml",contains:[{begin:C.begin,end:C.end,skip:!0,contains:["self"]}]}]},ue,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+o.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[vn,o.inherit(o.TITLE_MODE,{begin:d,className:"title.function"})]},{match:/\.\.\./,relevance:0},Ee,{match:"\\$"+d,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[vn]},Ke,le,Z,oe,{match:/\$[(.]/}]}}var mr="[0-9](_*[0-9])*",to=`\\.(${mr})`,ao="[0-9a-fA-F](_*[0-9a-fA-F])*",Mp={className:"number",variants:[{begin:`(\\b(${mr})((${to})|\\.)?|(${to}))[eE][+-]?(${mr})[fFdD]?\\b`},{begin:`\\b(${mr})((${to})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${to})[fFdD]?\\b`},{begin:`\\b(${mr})[fFdD]\\b`},{begin:`\\b0[xX]((${ao})\\.?|(${ao})?\\.(${ao}))[pP][+-]?(${mr})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${ao})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};function vv(o,g,h){return h===-1?"":o.replace(g,d=>vv(o,g,h-1))}function kS(o){const g=o.regex,h="[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",d="(?:(?:\\s*\\[\\s*])+)?",E=h+"<@@@>"+d,C="(?:"+("\\?(?:\\s+(?:extends|super)\\s+"+E+")?")+"|"+E+")",z=vv("(?:\\s*<\\s*"+C+"(?:\\s*,\\s*"+C+")*\\s*>)?",/<@@@>/g,2),N={keyword:["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do","sealed","yield","permits","goto","when"],literal:["false","true","null"],type:["char","boolean","long","float","int","byte","short","double"],built_in:["super","this"]},V={className:"meta",begin:"@"+h,contains:[{begin:/\(/,end:/\)/,contains:["self"]}]},q={className:"params",begin:/\(/,end:/\)/,keywords:N,relevance:0,contains:[o.C_BLOCK_COMMENT_MODE],endsParent:!0};return{name:"Java",aliases:["jsp"],keywords:N,illegal:/<\/|#/,contains:[o.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{begin:/import java\.[a-z]+\./,keywords:"import",relevance:2},o.C_LINE_COMMENT_MODE,o.C_BLOCK_COMMENT_MODE,{begin:/"""/,end:/"""/,className:"string",contains:[o.BACKSLASH_ESCAPE]},o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,{match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,h],className:{1:"keyword",3:"title.class"}},{match:/non-sealed/,scope:"keyword"},{beginKeywords:"new throw return else yield assert",relevance:0},{begin:[h,g.concat(z,d,/\s+/),h,d,/\s*/,/=(?!=)/],className:{1:"type",3:"variable",6:"operator"}},{begin:[/record/,/\s+/,h],className:{1:"keyword",3:"title.class"},contains:[q,o.C_LINE_COMMENT_MODE,o.C_BLOCK_COMMENT_MODE]},{begin:[h,g.concat(z,d,/\s+/),h,/\s*(?=\()/],className:{1:"type",3:"title.function"},keywords:N,contains:[{className:"params",begin:/\(/,end:/\)/,keywords:N,relevance:0,contains:[V,o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,Mp,o.C_BLOCK_COMMENT_MODE]},o.C_LINE_COMMENT_MODE,o.C_BLOCK_COMMENT_MODE]},Mp,V]}}function MS(o){const g=o.regex,h=o.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),d="decltype\\(auto\\)",E="[a-zA-Z_]\\w*::",C="(?!struct)("+d+"|"+g.optional(E)+"[a-zA-Z_]\\w*"+g.optional("<[^<>]+>")+")",z={className:"type",begin:"\\b[a-z\\d_]*_t\\b"},G={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[o.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'("+"\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)"+"|.)",end:"'",illegal:"."},o.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\\s"]{0,16})\(/,end:/\)([^()\\\s"]{0,16})"/})]},D={className:"number",variants:[{begin:"[+-]?(?:(?:\\b[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|\\b[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|\\b0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)"},{begin:"[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)"}],relevance:0},b={scope:"meta",begin:/#\s*include\b/,end:/$/,keywords:{keyword:"include"},contains:[{begin:/\\\n/},G,{scope:"string",begin:/<.*?>/},h,o.C_BLOCK_COMMENT_MODE]},N={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},o.inherit(G,{className:"string"}),h,o.C_BLOCK_COMMENT_MODE]},V=[b,N],q={className:"title",begin:g.optional(E)+o.IDENT_RE,relevance:0},J=g.optional(E)+o.IDENT_RE+"\\s*\\(",en=12,_n=["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],gn=["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],hn=["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","flat_map","flat_set","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"],En=["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"],Z={type:gn,keyword:_n,literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],_type_hints:hn},pn={className:"function.dispatch",relevance:0,keywords:{_hint:En},begin:g.concat(/\b/,`(?!${_n.join("|")})`,o.IDENT_RE,g.lookahead(/(<[^<>]+>|)\s*\(/))},ae=[pn,...V,z,h,o.C_BLOCK_COMMENT_MODE,D,G],ue={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:Z,contains:ae.concat([{begin:/\(/,end:/\)/,keywords:Z,contains:ae.concat(["self"]),relevance:0}]),relevance:0},le={className:"function",begin:"("+C+"[\\*&\\s]+){1,"+en+"}"+J,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:Z,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:d,keywords:Z,relevance:0},{begin:J,returnBegin:!0,contains:[q],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[G,D]},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:Z,relevance:0,contains:[h,o.C_BLOCK_COMMENT_MODE,G,D,z,{begin:/\(/,end:/\)/,keywords:Z,relevance:0,contains:["self",h,o.C_BLOCK_COMMENT_MODE,G,D,z]}]},z,h,o.C_BLOCK_COMMENT_MODE,...V]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:Z,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat(ue,le,pn,ae,[...V,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function|flat_map|flat_set)\\s*<(?!<)",end:">",keywords:Z,contains:["self",z]},{begin:o.IDENT_RE+"::",keywords:Z},{match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],className:{1:"keyword",3:"title.class"}}])}}function CS(o){const g=o.regex,h=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),d=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],E=/[-+*\/%=<>&|^~]|\*\*?|\/\/?|<<=?|>>=?|\+=|-=|\*=|\/=|%=|@|<|>/,R=["bool","complex","dict","float","frozenset","int","list","set","str","tuple"],C=["add_vertex","add","append","backtrack","bit_length","clear","collect_words","connected","counting_sort","defaultdict","deque","dfs","dp","extend","find_max_index","find","heapify","heappop","heappush","insert","insertion_sort","join","ListNode","merge_sort","pop","popleft","print_trie","quick_sort","RECURRENCE_RELATION","remove","shuffle","sort","TreeNode","TrieNode","union","UnionFind","update"],z=["BASE_CASE","BOOLEAN","CONDITION","CRITERIA","ITERATE_OVER_INPUT","MAXIMUM_POSSIBLE_ANSWER","MINIMUM_POSSIBLE_ANSWER","OTHER_ARGUMENTS","SMALLEST_SUBPROBLEM","START_NODE","STATE_FOR_WHOLE_INPUT","STATE","WINDOW_CONDITION_BROKEN"],H=["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip",...C],G=["__debug__","Ellipsis","False","None","NotImplemented","True",...z],D=["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union",...R],b={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:d,built_in:H,literal:G,type:D},N={className:"meta",begin:/^(>>>|\.\.\.) /},V={className:"subst",begin:/\{/,end:/\}/,keywords:b,illegal:/#/},q={begin:/\{\{/,relevance:0},J={className:"string",contains:[o.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[o.BACKSLASH_ESCAPE,N],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[o.BACKSLASH_ESCAPE,N],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[o.BACKSLASH_ESCAPE,N,q,V]},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[o.BACKSLASH_ESCAPE,N,q,V]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[o.BACKSLASH_ESCAPE,q,V]},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[o.BACKSLASH_ESCAPE,q,V]},o.APOS_STRING_MODE,o.QUOTE_STRING_MODE]},en="[0-9](_?[0-9])*",_n=`(\\b(${en}))?\\.(${en})|\\b(${en})\\.`,gn=`\\b|${d.join("|")}`,hn={className:"number",relevance:0,variants:[{begin:`(\\b(${en})|(${_n}))[eE][+-]?(${en})[jJ]?(?=${gn})`},{begin:`(${_n})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${gn})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${gn})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${gn})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${gn})`},{begin:`\\b(${en})[jJ](?=${gn})`}]},En={className:"comment",begin:g.lookahead(/# type:/),end:/$/,keywords:b,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},Kn={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:b,contains:["self",N,hn,J,o.HASH_COMMENT_MODE,{scope:"params.operator",match:E},{scope:"params.comma",match:","},{scope:"params.self",match:/self/}]}]};return V.contains=[J,hn,N],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:b,illegal:/(<\/|\?)|=>/,contains:[N,hn,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},J,En,o.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,h],scope:{1:"keyword.def",3:"title.function"},contains:[Kn]},{variants:[{match:[/\bclass/,/\s+/,h,/\s*/,/\(\s*/,h,/\s*\)/]},{match:[/\bclass/,/\s+/,h]}],scope:{1:"keyword.class",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[hn,Kn,J]},{scope:"operator",match:E}]}}Tl.registerLanguage("python",CS);Tl.registerLanguage("javascript",AS);Tl.registerLanguage("java",kS);Tl.registerLanguage("cpp",MS);function RS({code:o,language:g}){const h=U.useRef(null),[d,E]=U.useState(""),[R,C]=U.useState(""),z=ne("hljs",g,Op.code),H=()=>{if(h.current){const J=o.split(`
`).map((en,_n)=>{const gn=Tl.highlight(en,{language:g}).value;return`<span class=${Op.line} data-line-number=${_n+1}>${gn}</span>`}).join("");C(J)}},G=()=>{h.current?.querySelectorAll("span[data-line-number]")?.forEach(J=>J.addEventListener("click",N))},D=()=>{h.current?.querySelectorAll("span[data-line-number]")?.forEach(J=>J.removeEventListener("click",N))},b=()=>{h.current?.querySelector(`span[data-line-number="${d}"]`)?.removeAttribute("focused")},N=V=>{const q=V.currentTarget,J=q.getAttribute("data-line-number")??"";b(),J===d?E(""):(q.setAttribute("focused",""),E(J))};return Kp(h,b),U.useEffect(()=>(H(),G(),()=>D()),[o,R,d]),r.jsx("pre",{ref:h,children:r.jsx("code",{className:z,dangerouslySetInnerHTML:{__html:R}})})}const zS="_copyButton_fst3f_1",DS="_copySvg_fst3f_23",LS="_checkSvg_fst3f_30",BS="_checkSvgPath_fst3f_35",US="_enter_fst3f_46",HS="_exit_fst3f_50",Ti={copyButton:zS,copySvg:DS,checkSvg:LS,checkSvgPath:BS,enter:US,exit:HS};function qS({onClick:o}){const[g,h]=U.useState("show"),[d,E]=U.useState("hide"),R=ne(Ti.copySvg,g==="enter"&&Ti.enter,g==="exit"&&Ti.exit),C=ne(Ti.checkSvg,d==="exit"&&Ti.exit),z=ne(Ti.checkSvgPath),H=()=>{g==="show"&&d==="hide"&&(h("exit"),o())},G=()=>{g==="enter"&&h("show"),g==="exit"&&(h("hide"),E("show"))},D=()=>{d==="show"&&setTimeout(()=>{E("exit")},500),d==="exit"&&(E("hide"),h("enter"))},b=()=>g!=="hide"&&r.jsx("svg",{className:R,viewBox:"0 0 512 512",onAnimationEnd:G,children:r.jsx("path",{d:"M64 464H288c8.8 0 16-7.2 16-16V384h48v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h64v48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM224 304H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16V288c0 8.8 7.2 16 16 16zm-64-16V64c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64z"})}),N=()=>d!=="hide"&&r.jsx("svg",{className:C,viewBox:"0 0 16 16",onAnimationEnd:D,children:r.jsx("path",{className:z,d:"M3.428571,9.14285714 L6.85714286,12.57142857 L12.5714286,3.42857143"})});return r.jsxs("button",{type:"button","aria-label":d==="hide"?"Copy code":"Copied",title:"Copy code",className:Ti.copyButton,onClick:H,children:[b(),N()]})}function GS(){return r.jsxs("svg",{viewBox:"0 0 128 128",children:[r.jsxs("linearGradient",{id:"python_svg__a",x1:70.252,x2:170.659,y1:1237.476,y2:1151.089,gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",gradientUnits:"userSpaceOnUse",children:[r.jsx("stop",{offset:0,stopColor:"#5A9FD4"}),r.jsx("stop",{offset:1,stopColor:"#306998"})]}),r.jsxs("linearGradient",{id:"python_svg__b",x1:209.474,x2:173.62,y1:1098.811,y2:1149.537,gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",gradientUnits:"userSpaceOnUse",children:[r.jsx("stop",{offset:0,stopColor:"#FFD43B"}),r.jsx("stop",{offset:1,stopColor:"#FFE873"})]}),r.jsx("path",{fill:"url(#python_svg__a)",d:"M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008M50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721",transform:"translate(0 10.26)"}),r.jsx("path",{fill:"url(#python_svg__b)",d:"M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692",transform:"translate(0 10.26)"}),r.jsxs("radialGradient",{id:"python_svg__c",cx:1825.678,cy:444.45,r:26.743,gradientTransform:"matrix(0 -.24 -1.055 0 532.979 557.576)",gradientUnits:"userSpaceOnUse",children:[r.jsx("stop",{offset:0,stopColor:"#B8B8B8",stopOpacity:.498}),r.jsx("stop",{offset:1,stopColor:"#7F7F7F",stopOpacity:0})]}),r.jsx("path",{fill:"url(#python_svg__c)",d:"M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416s14.815-6.417 33.092-6.417c18.275 0 33.091 2.872 33.091 6.417",opacity:.444})]})}function YS(){return r.jsxs("svg",{viewBox:"0 0 128 128",children:[r.jsx("path",{fill:"#F0DB4F",d:"M1.408 1.408h125.184v125.185H1.408z"}),r.jsx("path",{fill:"#323330",d:"M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237"})]})}function VS(){return r.jsxs("svg",{id:"Layer_1",x:"0px",y:"0px",width:"306px",height:"344.35px",viewBox:"0 0 306 344.35",enableBackground:"new 0 0 306 344.35",children:[r.jsx("path",{fill:"#00599C",d:"M302.107,258.262c2.401-4.159,3.893-8.845,3.893-13.053V99.14c0-4.208-1.49-8.893-3.892-13.052L153,172.175L302.107,258.262z"}),r.jsx("path",{fill:"#004482",d:"M166.25,341.193l126.5-73.034c3.644-2.104,6.956-5.737,9.357-9.897L153,172.175L3.893,258.263c2.401,4.159,5.714,7.793,9.357,9.896l126.5,73.034C147.037,345.401,158.963,345.401,166.25,341.193z"}),r.jsx("path",{fill:"#659AD2",d:"M302.108,86.087c-2.402-4.16-5.715-7.793-9.358-9.897L166.25,3.156c-7.287-4.208-19.213-4.208-26.5,0L13.25,76.19C5.962,80.397,0,90.725,0,99.14v146.069c0,4.208,1.491,8.894,3.893,13.053L153,172.175L302.108,86.087z"}),r.jsx("g",{children:r.jsx("path",{fill:"#FFFFFF",d:"M153,274.175c-56.243,0-102-45.757-102-102s45.757-102,102-102c36.292,0,70.139,19.53,88.331,50.968l-44.143,25.544c-9.105-15.736-26.038-25.512-44.188-25.512c-28.122,0-51,22.878-51,51c0,28.121,22.878,51,51,51c18.152,0,35.085-9.776,44.191-25.515l44.143,25.543C223.142,254.644,189.294,274.175,153,274.175z"})}),r.jsx("g",{children:r.jsx("polygon",{fill:"#FFFFFF",points:"255,166.508 243.666,166.508 243.666,155.175 232.334,155.175 232.334,166.508 221,166.508221,177.841 232.334,177.841 232.334,189.175 243.666,189.175 243.666,177.841 255,177.841 	"})}),r.jsx("g",{children:r.jsx("polygon",{fill:"#FFFFFF",points:"297.5,166.508 286.166,166.508 286.166,155.175 274.834,155.175 274.834,166.508 263.5,166.508263.5,177.841 274.834,177.841 274.834,189.175 286.166,189.175 286.166,177.841 297.5,177.841 	"})})]})}function KS(){return r.jsxs("svg",{height:"800px",width:"800px",id:"Layer_1",viewBox:"0 0 511.998 511.998",children:[r.jsxs("g",{children:[r.jsx("path",{fill:"#DB380E",d:"M253.464,94.869c-23.658,16.639-50.471,35.498-64.838,66.699c-24.954,54.435,51.062,113.812,54.311,116.313c0.755,0.581,1.659,0.871,2.56,0.871c0.957,0,1.915-0.327,2.693-0.979c1.509-1.262,1.937-3.406,1.031-5.152c-0.275-0.53-27.561-53.53-26.547-91.552c0.359-13.243,18.892-28.266,38.512-44.171c17.97-14.568,38.34-31.079,50.258-50.394c26.164-42.516-2.916-84.322-3.213-84.74c-1.155-1.622-3.287-2.209-5.11-1.41c-1.821,0.804-2.83,2.773-2.414,4.72c0.059,0.277,5.714,27.923-10.022,56.406C284.203,73.25,269.959,83.268,253.464,94.869z"}),r.jsx("path",{fill:"#DB380E",d:"M353.137,113.617c1.669-1.257,2.159-3.55,1.15-5.38c-1.011-1.83-3.211-2.637-5.165-1.895c-4.019,1.528-98.416,37.915-98.416,81.88c0,30.307,12.946,46.317,22.399,58.009c3.708,4.586,6.909,8.546,7.964,11.927c2.97,9.743-4.066,27.353-7.025,33.317c-0.853,1.714-0.435,3.792,1.016,5.044c0.784,0.677,1.763,1.021,2.743,1.021c0.834,0,1.672-0.248,2.396-0.752c1.623-1.128,39.667-28.026,32.844-60.433c-2.542-12.318-8.595-21.318-13.936-29.26c-8.274-12.305-14.25-21.193-5.184-37.609C304.545,150.338,352.65,113.981,353.137,113.617z"})]}),r.jsxs("g",{children:[r.jsx("path",{fill:"#73A1FB",d:"M107.418,298.236c-1.618,4.845-0.854,9.651,2.207,13.903c10.233,14.207,46.48,22.029,102.068,22.029c0.003,0,0.005,0,0.007,0c7.532,0,15.484-0.148,23.629-0.44c88.875-3.181,121.839-30.869,123.199-32.046c1.482-1.283,1.878-3.419,0.957-5.147c-0.922-1.727-2.909-2.595-4.808-2.072c-31.301,8.546-89.748,11.58-130.288,11.58c-45.363,0-68.465-3.268-74.121-5.681c2.902-3.985,20.802-11.101,42.983-15.464c2.12-0.416,3.577-2.374,3.367-4.524s-2.016-3.79-4.177-3.79C179.439,276.584,114.234,277.628,107.418,298.236z"}),r.jsx("path",{fill:"#73A1FB",d:"M404.812,269.718c-18.331,0-35.714,9.188-36.446,9.577c-1.695,0.908-2.555,2.852-2.09,4.72c0.467,1.865,2.144,3.176,4.067,3.178c0.389,0,39.102,0.317,42.608,22.436c3.106,19.082-36.629,50-52.202,60.304c-1.682,1.113-2.335,3.263-1.554,5.123c0.665,1.583,2.206,2.573,3.868,2.573c0.29,0,0.584-0.03,0.876-0.092c3.696-0.791,90.406-19.899,81.238-70.384C439.584,276.213,420.138,269.718,404.812,269.718z"}),r.jsx("path",{fill:"#73A1FB",d:"M345.347,363.755c0.302-1.617-0.371-3.262-1.717-4.207l-20.791-14.563c-1.014-0.71-2.295-0.933-3.485-0.618c-0.217,0.055-21.959,5.771-53.525,9.276c-12.528,1.405-26.56,2.147-40.582,2.147c-31.558,0-52.192-3.708-55.197-6.428c-0.398-0.764-0.272-1.111-0.201-1.304c0.546-1.518,3.472-3.322,5.358-4.036c2.083-0.771,3.206-3.033,2.558-5.157c-0.646-2.127-2.837-3.378-4.999-2.859c-20.856,5.033-31.054,12.071-30.312,20.918c1.318,15.686,37.65,23.737,68.365,25.865c4.417,0.302,9.194,0.455,14.195,0.455c0.003,0,0.005,0,0.008,0c51.074,0,116.55-16.025,117.204-16.188C343.825,366.666,345.044,365.375,345.347,363.755z"}),r.jsx("path",{fill:"#73A1FB",d:"M188.602,397.419c1.575-1.024,2.273-2.971,1.714-4.764c-0.557-1.793-2.234-2.971-4.118-2.946c-2.795,0.074-27.349,1.182-29.068,16.815c-0.52,4.672,0.818,8.941,3.979,12.686c8.816,10.448,32.614,16.658,72.741,18.984c4.747,0.285,9.569,0.428,14.334,0.428c51.015,0,85.373-15.973,86.812-16.653c1.395-0.66,2.315-2.031,2.397-3.571s-0.687-3.001-2.003-3.806l-26.275-16.04c-0.912-0.556-2.003-0.74-3.043-0.527c-0.166,0.035-16.849,3.495-42.026,6.913c-4.764,0.648-10.73,0.977-17.73,0.977c-25.15,0-53.124-4.109-58.489-6.8C187.749,398.613,187.848,397.975,188.602,397.419z"}),r.jsx("path",{fill:"#73A1FB",d:"M224.408,486.85c116.854-0.099,179.571-20.88,191.653-33.957c4.277-4.626,4.739-9.006,4.376-11.867c-0.898-7.04-7.311-11.35-8.038-11.818c-1.754-1.128-4.108-0.833-5.476,0.745c-1.365,1.578-1.397,3.884-0.027,5.461c0.737,0.948,1.163,2.535-0.992,4.692c-4.83,4.511-53.545,18.204-134.656,22.318c-11.111,0.577-22.765,0.871-34.636,0.873c-72.623,0-125.772-9.948-132.749-15.744c2.689-3.864,21.489-10.037,41.482-13.529c2.253-0.393,3.775-2.516,3.426-4.776c-0.349-2.259-2.432-3.814-4.709-3.519c-0.564,0.077-2.478,0.191-4.694,0.327c-32.988,2.014-71.109,6.503-73.098,23.5c-0.604,5.179,0.935,9.881,4.576,13.973c8.909,10.01,34.516,23.319,153.558,23.319C224.406,486.85,224.406,486.85,224.408,486.85z"}),r.jsx("path",{fill:"#73A1FB",d:"M439.013,456.578c-1.652-0.764-3.604-0.378-4.836,0.952c-0.171,0.185-17.74,18.556-70.564,29.344c-20.223,4.052-58.183,6.107-112.826,6.107c-54.745,0-106.838-2.154-107.357-2.176c-2.176-0.106-4.037,1.476-4.333,3.618c-0.297,2.14,1.083,4.158,3.184,4.658c0.542,0.128,55.135,12.918,129.779,12.918c35.801,0,70.639-2.907,103.548-8.645c61.361-10.757,65.657-41.183,65.81-42.473C441.632,459.078,440.662,457.342,439.013,456.578z"})]})]})}const IS={python:GS,javascript:YS,java:KS,cpp:VS},QS={python:{short:"Py",full:"Python"},javascript:{short:"JS",full:"JavaScript"},java:{short:"Java",full:"Java"},cpp:{short:"C++",full:"C++"}};function u({title:o,children:g}){const{selectedLanguage:h,setSelectedLanguage:d}=Lp(),E=U.Children.toArray(g),R=E.findIndex(N=>N.props.language===h),C=R===-1?0:R,z=E[C]?.props.code??"",H=E[C]?.props.language,G=N=>{d(E[N].props.language)},D=()=>navigator.clipboard.writeText(z),b=()=>E.map((N,V)=>{const q=IS[N.props.language],{short:J,full:en}=QS[N.props.language];return r.jsxs("button",{type:"button",role:"tab","aria-label":`${en} code`,"aria-selected":V===C,className:eo.tabButton,onClick:()=>G(V),children:[r.jsx(q,{}),r.jsx("span",{children:J})]},V)});return r.jsxs("div",{className:eo.container,children:[r.jsx("h3",{children:o}),r.jsxs("div",{className:eo.buttonContainer,children:[r.jsx("div",{role:"tablist",className:eo.tabButtonContainer,children:b()}),r.jsx(qS,{onClick:D})]}),r.jsx("div",{role:"tabpanel",className:"tabs-content",children:r.jsx(RS,{code:z,language:H})})]})}u.Tab=o=>r.jsx(r.Fragment,{children:o});function _l({children:o}){return r.jsx("kbd",{className:O.kbd,"aria-hidden":"true",children:o})}function ad({mode:o,onMode:g}){return r.jsx("div",{className:O.seg,role:"group","aria-label":"View","aria-keyshortcuts":"M",children:["flow","map"].map(h=>r.jsx("button",{type:"button",className:ne(O.segButton,o===h&&O.segOn),"aria-pressed":o===h,onClick:()=>g(h),children:h==="flow"?"Flow":"Map"},h))})}function Cp({leaf:o}){return r.jsx("a",{className:O.docsLink,href:o.docsUrl,target:"_blank",rel:"noreferrer",children:"Read the docs for this pattern"})}function XS({leaf:o}){const g=mS(o.id);return g.length===0?r.jsxs("div",{className:ne(O.templates,O.note),children:[r.jsxs("p",{children:[r.jsx("strong",{children:"No template yet"})," for this pattern variant."]}),r.jsx("p",{children:o.summary}),r.jsx(Cp,{leaf:o})]}):r.jsxs("div",{className:O.templates,children:[g.map((h,d)=>r.jsx(u,{title:h.title,children:$u.map(E=>r.jsx(u.Tab,{language:E,code:h.code[E]},E))},`${o.id}-${d}`)),r.jsx(Cp,{leaf:o})]})}function JS(o){return o.started?o.leaf?r.jsxs(r.Fragment,{children:["Run complete, ",r.jsx("b",{children:o.leaf.name})]}):r.jsxs(r.Fragment,{children:["Run paused, ",r.jsxs("b",{children:["check ",o.steps.length+1]})]}):r.jsxs(r.Fragment,{children:["No run, ",r.jsx("b",{children:"clock not started"})]})}function kN({run:o,detail:g}){return r.jsxs("header",{className:O.strip,children:[r.jsxs("p",{className:O.stripTitle,children:["Map",r.jsx("span",{className:O.stripValue,children:g})]}),r.jsxs("div",{className:O.stripEnd,children:[r.jsx("span",{className:O.mapStatus,role:"status",children:JS(o)}),r.jsx(ad,{mode:o.mode,onMode:o.setMode})]})]})}const ZS=100;function FS(o){const g=U.useRef(0),h=U.useRef(null),[d,E]=U.useState(0),[R,C]=U.useState(!1),z=()=>{const J=h.current===null?0:performance.now()-h.current;return g.current+J},H=J=>Math.floor(J/1e3)*1e3;U.useEffect(()=>{if(!R)return;const J=setInterval(()=>{const en=H(z());E(_n=>_n===en?_n:en)},ZS);return()=>clearInterval(J)},[R]);const G=U.useCallback(()=>{g.current=0,h.current=performance.now(),E(0),C(!0)},[]),D=U.useCallback(()=>{h.current!==null&&(g.current=z(),h.current=null),E(g.current),C(!1)},[]),b=U.useCallback(()=>{h.current===null&&(h.current=performance.now()),E(H(z())),C(!0)},[]),N=U.useCallback(()=>{g.current=0,h.current=null,E(0),C(!1)},[]),V=o-d,q=d>=o;return{elapsedMs:d,remainingMs:V,overtimeMs:q?d-o:0,isOvertime:q,isRunning:R,start:G,stop:D,resume:b,reset:N}}const Rp=30,PS=10;function WS(o){return o.isContentEditable||["INPUT","TEXTAREA","SELECT","OPTION"].includes(o.tagName)?!0:o.closest('input, textarea, select, [role="listbox"], [role="combobox"]')!==null}const $S=o=>String(o).padStart(2,"0");function vr(o){const g=Math.max(0,o);return`${Math.floor(g/60)}:${$S(g%60)}`}function nj(){const o=FS(Rp*1e3),[g,h]=U.useState(!1),[d,E]=U.useState([]),[R,C]=U.useState(!1),[z,H]=U.useState("flow"),G=U.useRef(null),D=d.length>0?d[d.length-1].option.next:Si.rootId,b=g?Si.leaves[D]:void 0,N=g?Si.nodes[D]:void 0;U.useEffect(()=>{G.current?.focus()},[g,D,z]);const V=U.useCallback(()=>{h(!0),o.start()},[o]),q=U.useCallback(vn=>{N&&(E(Z=>[...Z,{question:N.question,option:vn}]),Si.leaves[vn.next]&&o.stop())},[N,o]),J=U.useCallback(vn=>{vn<0||vn>=d.length||(E(d.slice(0,vn)),C(!1),b&&o.resume())},[d,b,o]),en=U.useCallback(()=>J(d.length-1),[J,d.length]),_n=U.useCallback(()=>C(vn=>!vn),[]),gn=U.useCallback(vn=>{vn!==z&&(H(vn),!(!g||b)&&(vn==="map"?o.stop():o.resume()))},[z,g,b,o]),hn=U.useCallback(()=>gn(z==="flow"?"map":"flow"),[gn,z]),En=U.useCallback(()=>{o.reset(),h(!1),E([]),C(!1)},[o]);U.useEffect(()=>{const vn=Z=>{if(Z.metaKey||Z.ctrlKey||Z.altKey)return;const pn=Z.target;if(!(pn&&WS(pn))){if(Z.key==="m"||Z.key==="M")return Z.repeat?void 0:hn();if(z==="flow"){if(Z.key==="Escape")return En();if(Z.key==="Backspace"&&g&&d.length>0)return Z.preventDefault(),en();if(Z.key==="Enter"&&!g&&pn?.tagName!=="BUTTON")return V();if((Z.key==="t"||Z.key==="T")&&b)return _n();if(/^[1-9]$/.test(Z.key)&&N){const ae=N.options[Number(Z.key)-1];ae&&q(ae)}}}};return window.addEventListener("keydown",vn),()=>window.removeEventListener("keydown",vn)},[z,g,d.length,N,b,q,en,En,V,_n,hn]);const Kn=Math.max(0,Math.ceil(o.remainingMs/1e3));return{budget:Rp,mode:z,setMode:gn,toggleMode:hn,started:g,steps:d,currentId:D,node:N,leaf:b,isOvertime:o.isOvertime,isWarn:!o.isOvertime&&Kn<=PS,elapsedSeconds:Math.floor(o.elapsedMs/1e3),remainingSeconds:Kn,overSeconds:Math.floor(o.overtimeMs/1e3),showTemplate:R,toggleTemplate:_n,stageRef:G,start:V,pick:q,backtrack:en,backtrackTo:J,reset:En}}const ej=U.lazy(()=>Ip(()=>import("./MapView-BYikLzYS.js"),__vite__mapDeps([0,1,2,3]))),tj=U.lazy(()=>Ip(()=>import("./MapOutline-Ds0-FuuX.js"),__vite__mapDeps([4,1,2]))),aj={maxWidth:760};function io({text:o,sign:g,tone:h,caption:d,label:E}){return r.jsxs("div",{className:ne(O.timer,O[h]),role:"timer","aria-live":"off","aria-label":E,children:[r.jsxs("span",{className:O.cells,"aria-hidden":"true",children:[r.jsx("span",{className:ne(O.cell,O.signCell),children:g?"+":""}),o.split("").map((R,C)=>R===":"?r.jsx("span",{className:O.colon,children:":"},C):r.jsx("span",{className:O.cell,children:R},C))]}),r.jsx("span",{className:O.timerCaption,"aria-hidden":"true",children:d})]})}function ij({run:o}){if(!o.started){const h=vr(o.budget);return r.jsx(io,{text:h,sign:!1,tone:"idle",caption:"budget",label:`Budget ${h}`})}if(o.leaf){const h=vr(o.elapsedSeconds);return r.jsx(io,{text:h,sign:!1,tone:o.isOvertime?"over":"ok",caption:"taken",label:`Time taken ${h}`})}if(o.isOvertime){const h=vr(o.overSeconds);return r.jsx(io,{text:h,sign:!0,tone:"over",caption:"over budget",label:`${h} over budget`})}const g=vr(o.remainingSeconds);return r.jsx(io,{text:g,sign:!1,tone:o.isWarn?"warn":"ok",caption:"left",label:`${g} left`})}function rj({run:o}){const{started:g,steps:h,leaf:d,node:E}=o,R=g&&!d&&!E,C=!d&&!R;return r.jsx("nav",{className:O.line,"aria-label":"Your path so far",children:r.jsxs("ol",{className:O.stops,children:[h.map((z,H)=>r.jsx("li",{className:ne(O.stop,O.answered),children:r.jsxs("button",{type:"button",className:O.stopButton,title:`${z.question} ${z.option.cue}`,"aria-label":`Back to question ${H+1}: ${z.question} You picked: ${z.option.cue}`,onClick:()=>o.backtrackTo(H),children:[r.jsx("span",{className:O.dot,"aria-hidden":"true"}),r.jsx("span",{className:O.cue,children:z.option.cue})]})},H)),C&&r.jsx("li",{className:ne(O.stop,O.current,O.dashedNext),"aria-current":"step",children:r.jsxs("span",{className:O.stopInner,children:[r.jsx("span",{className:O.dot,"aria-hidden":"true"}),r.jsx("span",{className:O.srOnly,children:g?`Question ${h.length+1}, current`:"Ready to start"})]})}),d&&r.jsx("li",{className:ne(O.stop,O.reached),"aria-current":"step",children:r.jsxs("span",{className:O.stopInner,children:[r.jsx("span",{className:O.dot,"aria-hidden":"true"}),r.jsxs("span",{className:O.srOnly,children:["Result: ",d.name]})]})}),C&&r.jsx("li",{className:ne(O.stop,O.end),"aria-hidden":"true",children:r.jsx("span",{className:O.stopInner,children:r.jsx("span",{className:O.dot})})}),R&&r.jsx("li",{className:ne(O.stop,O.fault),"aria-current":"step",children:r.jsxs("span",{className:O.stopInner,children:[r.jsx("span",{className:O.dot,"aria-hidden":"true"}),r.jsx("span",{className:O.srOnly,children:"This path leads nowhere"})]})})]})})}function ro({label:o,value:g,run:h}){return r.jsxs("header",{className:O.strip,children:[r.jsxs("p",{className:O.stripTitle,children:[o,r.jsx("span",{className:O.stripValue,children:g})]}),r.jsxs("div",{className:O.stripEnd,children:[r.jsx(ad,{mode:h.mode,onMode:h.setMode}),r.jsx(ij,{run:h})]})]})}function Fu({run:o}){return r.jsxs("footer",{className:O.footer,children:[o.started&&(o.node||o.leaf)&&r.jsxs("button",{type:"button",className:O.plain,onClick:o.backtrack,disabled:o.steps.length===0,"aria-keyshortcuts":"Backspace",children:["Backtrack ",r.jsx(_l,{children:"Bksp"})]}),r.jsxs("button",{type:"button",className:O.plain,onClick:o.reset,"aria-keyshortcuts":"Escape",children:["Reset ",r.jsx(_l,{children:"Esc"})]})]})}function lj({run:o}){return r.jsx("section",{className:ne(O.card,O.mapFallback),"aria-label":"Map","aria-busy":"true",children:r.jsxs("header",{className:O.strip,children:[r.jsxs("p",{className:O.stripTitle,children:["Map",r.jsx("span",{className:O.stripValue,children:"Loading"})]}),r.jsx("div",{className:O.stripEnd,children:r.jsx(ad,{mode:o.mode,onMode:o.setMode})})]})})}function sj(){const o=nj(),g=Vp(aj),h=()=>r.jsxs(r.Fragment,{children:[r.jsx(ro,{run:o,label:"Procedure",value:"Ready"}),r.jsxs("div",{className:O.body,children:[r.jsxs("h2",{ref:o.stageRef,tabIndex:-1,className:O.question,children:["Name the pattern in ",o.budget," seconds"]}),r.jsx("p",{className:O.lead,children:"Open the problem, then pick the cue that sounds most like it. Overtime is shown, not enforced."}),r.jsx("div",{className:O.actions,children:r.jsxs("button",{type:"button",className:O.primary,onClick:o.start,"aria-keyshortcuts":"Enter",children:["Start ",r.jsx(_l,{children:"Enter"})]})})]},"idle")]}),d=z=>r.jsxs(r.Fragment,{children:[r.jsx(ro,{run:o,label:"Procedure",value:`Q${o.steps.length+1}`}),r.jsxs("div",{className:O.body,children:[r.jsx("h2",{ref:o.stageRef,tabIndex:-1,className:O.question,children:z.question}),r.jsx("ol",{className:O.options,children:z.options.map((H,G)=>r.jsx("li",{children:r.jsxs("button",{type:"button",className:O.option,onClick:()=>o.pick(H),"aria-keyshortcuts":G<9?String(G+1):void 0,children:[G<9&&r.jsx(_l,{children:G+1}),r.jsx("span",{className:O.optionCue,children:H.cue})]})},H.cue))})]},z.id),r.jsx(Fu,{run:o})]}),E=z=>{const H=vr(o.elapsedSeconds);return r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:O.srOnly,role:"status","aria-live":"polite",children:["Pattern found: ",z.name,", ",z.pattern,". Time taken ",H,"."]}),r.jsx(ro,{run:o,label:"Memory item",value:"Result"}),r.jsxs("div",{className:O.body,children:[r.jsx("h2",{ref:o.stageRef,tabIndex:-1,className:O.resultName,children:z.name}),r.jsxs("dl",{className:O.fields,children:[r.jsxs("div",{className:O.field,children:[r.jsx("dt",{children:"Pattern"}),r.jsx("dd",{children:z.pattern})]}),r.jsxs("div",{className:O.field,children:[r.jsx("dt",{children:"Time taken"}),r.jsxs("dd",{children:[r.jsx("span",{className:O.figure,children:H}),o.isOvertime?r.jsxs("span",{className:O.overNote,children:["+",vr(o.overSeconds)," over the ",o.budget,"s budget"]}):r.jsxs("span",{className:O.okNote,children:["within the ",o.budget,"s budget"]})]})]})]}),r.jsx("p",{className:O.summary,children:z.summary}),r.jsx("div",{className:O.actions,children:r.jsxs("button",{type:"button",className:O.primary,"aria-expanded":o.showTemplate,"aria-keyshortcuts":"T",onClick:o.toggleTemplate,children:[o.showTemplate?"Hide template":"View template"," ",r.jsx(_l,{children:"T"})]})}),o.showTemplate&&r.jsx(XS,{leaf:z})]},z.id),r.jsx(Fu,{run:o})]})},R=()=>r.jsxs(r.Fragment,{children:[r.jsx(ro,{run:o,label:"Procedure",value:"Fault"}),r.jsxs("div",{className:O.body,children:[r.jsx("h2",{ref:o.stageRef,tabIndex:-1,className:O.question,children:"This path leads nowhere"}),r.jsx("p",{className:O.lead,children:"The cue you picked has no next check. Reset and run the procedure again."})]},"broken"),r.jsx(Fu,{run:o})]});let C;return o.started?o.leaf?C=E(o.leaf):o.node?C=d(o.node):C=R():C=h(),o.mode==="map"?r.jsx("div",{className:ne(O.finder,O.mapMode),children:r.jsx(U.Suspense,{fallback:r.jsx(lj,{run:o}),children:g?r.jsx(tj,{run:o}):r.jsx(ej,{run:o})})}):r.jsxs("div",{className:O.finder,children:[g?r.jsx(rj,{run:o}):r.jsx(gS,{run:o}),r.jsx("section",{className:O.card,"aria-label":"Procedure",children:C})]})}const oj="_container_1htmy_1",cj="_sectionHeader_1htmy_7",Qn={container:oj,sectionHeader:cj},uj="_container_13ll4_1",dj="_label_13ll4_13",fj="_tableWrapper_13ll4_21",hj="_dataRow_13ll4_30",gj="_red_13ll4_51",pj="_oliveGreen_13ll4_55",mj="_green_13ll4_59",vj="_orange_13ll4_63",bj="_yellow_13ll4_67",yj="_gray_13ll4_71",m={container:uj,label:dj,tableWrapper:fj,dataRow:hj,red:gj,oliveGreen:pj,green:mj,orange:vj,yellow:bj,gray:yj};function xj(){const o={red:"var(--color-red-alpha)",orange:"var(--color-orange-alpha)",yellow:"var(--color-yellow-alpha)",oliveGreen:"var(--color-olive-green-alpha)",green:"var(--color-green-alpha)"};return r.jsx("section",{id:"bigo-chart",children:r.jsxs("div",{className:m.container,children:[r.jsx("h3",{children:"Big-O Complexity Chart"}),r.jsxs("svg",{id:"chart",viewBox:"0 0 800 500",style:{color:"var(--pd-text)"},children:[r.jsx("path",{d:"M50 450 L 50 0 L 800 0 L 800 450 Z",fill:o.red}),r.jsx("path",{d:"M50 450 L 800 0 L 800 450 Z",fill:o.orange}),r.jsx("path",{d:"M50 450 L 800 450 L 800 330 Z",fill:o.yellow}),r.jsx("path",{d:"M50 450 L 800 450 L 800 410 Z",fill:o.oliveGreen}),r.jsx("path",{d:"M50 450 L 800 450 L 800 440 Z",fill:o.green}),r.jsx("path",{d:"M50 0 L 50 450 L 800 450",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),r.jsx("path",{d:"M50 448 L 800 448",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),r.jsx("text",{x:"700",y:"438",fill:"currentColor",children:"O(log n), O(1)"}),r.jsx("path",{d:"M50 450 L 800 400",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),r.jsx("text",{x:"760",y:"390",fill:"currentColor",children:"O(n)"}),r.jsx("path",{d:"M50 450 Q 400 350, 800 150",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),r.jsx("text",{x:"630",y:"190",fill:"currentColor",children:"O(n log n)"}),r.jsx("path",{d:"M50 450 Q 180 380, 250 0",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),r.jsx("text",{x:"260",y:"30",fill:"currentColor",children:"O(n^2)"}),r.jsx("path",{d:"M50 450 C 100 430, 120 350, 120 0",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),r.jsx("text",{x:"125",y:"20",fill:"currentColor",children:"O(2^n)"}),r.jsx("path",{d:"M50 450 C 80 450, 80 350, 80 0",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),r.jsx("text",{x:"80",y:"20",fill:"currentColor",children:"O(n!)"}),r.jsx("text",{className:m.label,x:"0",y:"0",transform:"translate(30 230) rotate(-90)",fill:"currentColor",children:"Operations"}),r.jsx("text",{className:m.label,x:"0",y:"0",transform:"translate(420 470)",fill:"currentColor",children:"Elements"})]})]})})}function _j(){return r.jsx("section",{id:"bigo-data-structure-operations-table",children:r.jsxs("div",{className:m.container,children:[r.jsx("h3",{children:"Data Structure Operations"}),r.jsx("div",{className:m.tableWrapper,children:r.jsx("table",{className:m.table,children:r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("th",{children:"Data Structure"}),r.jsx("th",{colSpan:8,children:"Time Complexity"}),r.jsx("th",{children:"Space Complexity"})]}),r.jsxs("tr",{children:[r.jsx("th",{}),r.jsx("th",{colSpan:4,children:"Average"}),r.jsx("th",{colSpan:4,children:"Worst"}),r.jsx("th",{children:"Worst"})]}),r.jsxs("tr",{children:[r.jsx("th",{}),r.jsx("th",{children:"Access"}),r.jsx("th",{children:"Search"}),r.jsx("th",{children:"Insertion"}),r.jsx("th",{children:"Deletion"}),r.jsx("th",{children:"Access"}),r.jsx("th",{children:"Search"}),r.jsx("th",{children:"Insertion"}),r.jsx("th",{children:"Deletion"}),r.jsx("th",{})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Array_data_structure",target:"_blank",children:"Array"})}),r.jsx("td",{className:m.green,children:"Θ(1)"}),r.jsx("td",{className:m.yellow,children:"Θ(n)"}),r.jsx("td",{className:m.yellow,children:"Θ(n)"}),r.jsx("td",{className:m.yellow,children:"Θ(n)"}),r.jsx("td",{className:m.green,children:"O(1)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Stack_(abstract_data_type)",target:"_blank",children:"Stack"})}),r.jsx("td",{className:m.yellow,children:"Θ(n)"}),r.jsx("td",{className:m.yellow,children:"Θ(n)"}),r.jsx("td",{className:m.green,children:"Θ(1)"}),r.jsx("td",{className:m.green,children:"Θ(1)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.green,children:"O(1)"}),r.jsx("td",{className:m.green,children:"O(1)"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Queue_(abstract_data_type)",target:"_blank",children:"Queue"})}),r.jsx("td",{className:m.yellow,children:"Θ(n)"}),r.jsx("td",{className:m.yellow,children:"Θ(n)"}),r.jsx("td",{className:m.green,children:"Θ(1)"}),r.jsx("td",{className:m.green,children:"Θ(1)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.green,children:"O(1)"}),r.jsx("td",{className:m.green,children:"O(1)"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Singly_linked_list#Singly_linked_lists",target:"_blank",children:"Singly-Linked List"})}),r.jsx("td",{className:m.yellow,children:"Θ(n)"}),r.jsx("td",{className:m.yellow,children:"Θ(n)"}),r.jsx("td",{className:m.green,children:"Θ(1)"}),r.jsx("td",{className:m.green,children:"Θ(1)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.green,children:"O(1)"}),r.jsx("td",{className:m.green,children:"O(1)"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Doubly_linked_list",target:"_blank",children:"Doubly-Linked List"})}),r.jsx("td",{className:m.yellow,children:"Θ(n)"}),r.jsx("td",{className:m.yellow,children:"Θ(n)"}),r.jsx("td",{className:m.green,children:"Θ(1)"}),r.jsx("td",{className:m.green,children:"Θ(1)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.green,children:"O(1)"}),r.jsx("td",{className:m.green,children:"O(1)"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Skip_list",target:"_blank",children:"Skip List"})}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.orange,children:"O(n log(n))"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Hash_table",target:"_blank",children:"Hash Table"})}),r.jsx("td",{className:m.gray,children:"N/A"}),r.jsx("td",{className:m.green,children:"Θ(1)"}),r.jsx("td",{className:m.green,children:"Θ(1)"}),r.jsx("td",{className:m.green,children:"Θ(1)"}),r.jsx("td",{className:m.gray,children:"N/A"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Binary_search_tree",target:"_blank",children:"Binary Search Tree"})}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"https://en.wikipedia.org/wiki/Cartesian_tree",target:"_blank",children:"Cartesian Tree"})}),r.jsx("td",{className:m.gray,children:"N/A"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.gray,children:"N/A"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/B_tree",target:"_blank",children:"B-Tree"})}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Red-black_tree",target:"_blank",children:"Red-Black Tree"})}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"https://en.wikipedia.org/wiki/Splay_tree",target:"_blank",children:"Splay Tree"})}),r.jsx("td",{className:m.gray,children:"N/A"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.gray,children:"N/A"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/AVL_tree",target:"_blank",children:"AVL Tree"})}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/K-d_tree",target:"_blank",children:"KD Tree"})}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]})]})})})]})})}function Tj(){return r.jsx("section",{id:"bigo-sorting-algorithms-table",children:r.jsxs("div",{className:m.container,children:[r.jsx("h3",{children:"Array Sorting Algorithms"}),r.jsx("div",{className:m.tableWrapper,children:r.jsx("table",{children:r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("th",{children:"Algorithm"}),r.jsx("th",{colSpan:3,children:"Time Complexity"}),r.jsx("th",{children:"Space Complexity"})]}),r.jsxs("tr",{children:[r.jsx("th",{}),r.jsx("th",{children:"Best"}),r.jsx("th",{children:"Average"}),r.jsx("th",{children:"Worst"}),r.jsx("th",{children:"Worst"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Quicksort",target:"_blank",children:"Quicksort"})}),r.jsx("td",{className:m.orange,children:"Ω(n log(n))"}),r.jsx("td",{className:m.orange,children:"Θ(n log(n))"}),r.jsx("td",{className:m.red,children:"O(n^2)"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Merge_sort",target:"_blank",children:"Mergesort"})}),r.jsx("td",{className:m.orange,children:"Ω(n log(n))"}),r.jsx("td",{className:m.orange,children:"Θ(n log(n))"}),r.jsx("td",{className:m.orange,children:"O(n log(n))"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Timsort",target:"_blank",children:"Timsort"})}),r.jsx("td",{className:m.yellow,children:"Ω(n)"}),r.jsx("td",{className:m.orange,children:"Θ(n log(n))"}),r.jsx("td",{className:m.orange,children:"O(n log(n))"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Heapsort",target:"_blank",children:"Heapsort"})}),r.jsx("td",{className:m.orange,children:"Ω(n log(n))"}),r.jsx("td",{className:m.orange,children:"Θ(n log(n))"}),r.jsx("td",{className:m.orange,children:"O(n log(n))"}),r.jsx("td",{className:m.green,children:"O(1)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Bubble_sort",target:"_blank",children:"Bubble Sort"})}),r.jsx("td",{className:m.yellow,children:"Ω(n)"}),r.jsx("td",{className:m.red,children:"Θ(n^2)"}),r.jsx("td",{className:m.red,children:"O(n^2)"}),r.jsx("td",{className:m.green,children:"O(1)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Insertion_sort",target:"_blank",children:"Insertion Sort"})}),r.jsx("td",{className:m.yellow,children:"Ω(n)"}),r.jsx("td",{className:m.red,children:"Θ(n^2)"}),r.jsx("td",{className:m.red,children:"O(n^2)"}),r.jsx("td",{className:m.green,children:"O(1)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Selection_sort",target:"_blank",children:"Selection Sort"})}),r.jsx("td",{className:m.red,children:"Ω(n^2)"}),r.jsx("td",{className:m.red,children:"Θ(n^2)"}),r.jsx("td",{className:m.red,children:"O(n^2)"}),r.jsx("td",{className:m.green,children:"O(1)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"https://en.wikipedia.org/wiki/Tree_sort",target:"_blank",children:"Tree Sort"})}),r.jsx("td",{className:m.orange,children:"Ω(n log(n))"}),r.jsx("td",{className:m.orange,children:"Θ(n log(n))"}),r.jsx("td",{className:m.red,children:"O(n^2)"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Shellsort",target:"_blank",children:"Shell Sort"})}),r.jsx("td",{className:m.orange,children:"Ω(n log(n))"}),r.jsx("td",{className:m.red,children:"Θ(n(log(n))^2)"}),r.jsx("td",{className:m.red,children:"O(n(log(n))^2)"}),r.jsx("td",{className:m.green,children:"O(1)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Bucket_sort",target:"_blank",children:"Bucket Sort"})}),r.jsx("td",{className:m.green,children:"Ω(n+k)"}),r.jsx("td",{className:m.green,children:"Θ(n+k)"}),r.jsx("td",{className:m.red,children:"O(n^2)"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Radix_sort",target:"_blank",children:"Radix Sort"})}),r.jsx("td",{className:m.green,children:"Ω(nk)"}),r.jsx("td",{className:m.green,children:"Θ(nk)"}),r.jsx("td",{className:m.green,children:"O(nk)"}),r.jsx("td",{className:m.yellow,children:"O(n+k)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"https://en.wikipedia.org/wiki/Counting_sort",children:"Counting Sort"})}),r.jsx("td",{className:m.green,children:"Ω(n+k)"}),r.jsx("td",{className:m.green,children:"Θ(n+k)"}),r.jsx("td",{className:m.green,children:"O(n+k)"}),r.jsx("td",{className:m.yellow,children:"O(k)"})]}),r.jsxs("tr",{className:m.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"https://en.wikipedia.org/wiki/Cubesort",target:"_blank",children:"Cubesort"})}),r.jsx("td",{className:m.yellow,children:"Ω(n)"}),r.jsx("td",{className:m.orange,children:"Θ(n log(n))"}),r.jsx("td",{className:m.orange,children:"O(n log(n))"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]})]})})})]})})}function Sj(){return r.jsxs("div",{className:Qn.container,children:[r.jsx("h2",{className:Qn.sectionHeader,children:"Big O"}),r.jsx(xj,{}),r.jsx(_j,{}),r.jsx(Tj,{})]})}function jj(){return r.jsxs("div",{className:Qn.container,children:[r.jsx("h2",{className:Qn.sectionHeader,children:"Array"}),r.jsx("section",{id:"array-two-pointers-one-input",children:r.jsxs(u,{title:"two pointers: one input, opposite ends",children:[r.jsx(u.Tab,{code:lv,language:"python"}),r.jsx(u.Tab,{code:sv,language:"javascript"}),r.jsx(u.Tab,{code:ov,language:"java"}),r.jsx(u.Tab,{code:cv,language:"cpp"})]})}),r.jsx("section",{id:"array-two-pointers-two-inputs",children:r.jsxs(u,{title:"two pointers: two inputs, exhaust both",children:[r.jsx(u.Tab,{code:uv,language:"python"}),r.jsx(u.Tab,{code:dv,language:"javascript"}),r.jsx(u.Tab,{code:fv,language:"java"}),r.jsx(u.Tab,{code:hv,language:"cpp"})]})}),r.jsx("section",{id:"array-sliding-window",children:r.jsxs(u,{title:"sliding window",children:[r.jsx(u.Tab,{code:C1,language:"python"}),r.jsx(u.Tab,{code:R1,language:"javascript"}),r.jsx(u.Tab,{code:z1,language:"java"}),r.jsx(u.Tab,{code:D1,language:"cpp"})]})}),r.jsx("section",{id:"array-prefix-sum",children:r.jsxs(u,{title:"prefix sum",children:[r.jsx(u.Tab,{code:O1,language:"python"}),r.jsx(u.Tab,{code:A1,language:"javascript"}),r.jsx(u.Tab,{code:k1,language:"java"}),r.jsx(u.Tab,{code:M1,language:"cpp"})]})}),r.jsx("section",{id:"array-string-building",children:r.jsxs(u,{title:"efficient string building",children:[r.jsx(u.Tab,{code:K1,language:"python"}),r.jsx(u.Tab,{code:I1,language:"javascript"}),r.jsx(u.Tab,{code:Q1,language:"java"}),r.jsx(u.Tab,{code:X1,language:"cpp"})]})})]})}function Nj(){return r.jsxs("div",{className:Qn.container,children:[r.jsx("h2",{className:Qn.sectionHeader,children:"Hash Map"}),r.jsx("section",{id:"hashmap-find-number-of-subarrays",children:r.jsxs(u,{title:"find number of subarrays that fit an exact criteria",children:[r.jsx(u.Tab,{code:o1,language:"python"}),r.jsx(u.Tab,{code:c1,language:"javascript"}),r.jsx(u.Tab,{code:u1,language:"java"}),r.jsx(u.Tab,{code:d1,language:"cpp"})]})}),r.jsx("section",{id:"hashmap-sliding-window",children:r.jsxs(u,{title:"sliding window",children:[r.jsx(u.Tab,{code:f1,language:"python"}),r.jsx(u.Tab,{code:h1,language:"javascript"}),r.jsx(u.Tab,{code:g1,language:"java"}),r.jsx(u.Tab,{code:p1,language:"cpp"})]})})]})}function wj(){return r.jsxs("div",{className:Qn.container,children:[r.jsx("h2",{className:Qn.sectionHeader,children:"Linked List"}),r.jsx("section",{id:"linkedlist-fast-and-slow-pointer",children:r.jsxs(u,{title:"fast and slow pointer",children:[r.jsx(u.Tab,{code:x1,language:"python"}),r.jsx(u.Tab,{code:_1,language:"javascript"}),r.jsx(u.Tab,{code:T1,language:"java"}),r.jsx(u.Tab,{code:S1,language:"cpp"})]})}),r.jsx("section",{id:"linkedlist-reverse",children:r.jsxs(u,{title:"reverse linked list",children:[r.jsx(u.Tab,{code:j1,language:"python"}),r.jsx(u.Tab,{code:N1,language:"javascript"}),r.jsx(u.Tab,{code:w1,language:"java"}),r.jsx(u.Tab,{code:E1,language:"cpp"})]})})]})}function Ej(){return r.jsxs("div",{className:Qn.container,children:[r.jsx("h2",{className:Qn.sectionHeader,children:"Stack"}),r.jsx("section",{id:"stack-monotonic-increasing",children:r.jsxs(u,{title:"monotonic increasing stack",children:[r.jsx(u.Tab,{code:q1,language:"python"}),r.jsx(u.Tab,{code:G1,language:"javascript"}),r.jsx(u.Tab,{code:Y1,language:"java"}),r.jsx(u.Tab,{code:V1,language:"cpp"})]})}),r.jsx("section",{id:"stack-monotonic-decreasing",children:r.jsxs(u,{title:"monotonic decreasing stack",children:[r.jsx(u.Tab,{code:L1,language:"python"}),r.jsx(u.Tab,{code:B1,language:"javascript"}),r.jsx(u.Tab,{code:U1,language:"java"}),r.jsx(u.Tab,{code:H1,language:"cpp"})]})})]})}function Oj(){return r.jsxs("div",{className:Qn.container,children:[r.jsx("h2",{className:Qn.sectionHeader,children:"Binary Tree"}),r.jsx("section",{id:"tree-dfs-recursive",children:r.jsxs(u,{title:"DFS (recursive)",children:[r.jsx(u.Tab,{code:tv,language:"python"}),r.jsx(u.Tab,{code:av,language:"javascript"}),r.jsx(u.Tab,{code:iv,language:"java"}),r.jsx(u.Tab,{code:rv,language:"cpp"})]})}),r.jsx("section",{id:"tree-dfs-iterative",children:r.jsxs(u,{title:"DFS (iterative)",children:[r.jsx(u.Tab,{code:W1,language:"python"}),r.jsx(u.Tab,{code:$1,language:"javascript"}),r.jsx(u.Tab,{code:nv,language:"java"}),r.jsx(u.Tab,{code:ev,language:"cpp"})]})}),r.jsx("section",{id:"tree-bfs",children:r.jsxs(u,{title:"BFS",children:[r.jsx(u.Tab,{code:J1,language:"python"}),r.jsx(u.Tab,{code:Z1,language:"javascript"}),r.jsx(u.Tab,{code:F1,language:"java"}),r.jsx(u.Tab,{code:P1,language:"cpp"})]})})]})}function Aj(){return r.jsxs("div",{className:Qn.container,children:[r.jsx("h2",{className:Qn.sectionHeader,children:"Graph"}),r.jsx("section",{id:"graph-dfs-recursive",children:r.jsxs(u,{title:"DFS (recursive)",children:[r.jsx(u.Tab,{code:Y0,language:"python"}),r.jsx(u.Tab,{code:V0,language:"javascript"}),r.jsx(u.Tab,{code:K0,language:"java"}),r.jsx(u.Tab,{code:I0,language:"cpp"})]})}),r.jsx("section",{id:"graph-dfs-iterative",children:r.jsxs(u,{title:"DFS (iterative)",children:[r.jsx(u.Tab,{code:U0,language:"python"}),r.jsx(u.Tab,{code:H0,language:"javascript"}),r.jsx(u.Tab,{code:q0,language:"java"}),r.jsx(u.Tab,{code:G0,language:"cpp"})]})}),r.jsx("section",{id:"graph-bfs",children:r.jsxs(u,{title:"BFS",children:[r.jsx(u.Tab,{code:z0,language:"python"}),r.jsx(u.Tab,{code:D0,language:"javascript"}),r.jsx(u.Tab,{code:L0,language:"java"}),r.jsx(u.Tab,{code:B0,language:"cpp"})]})}),r.jsx("section",{id:"graph-dijkstra",children:r.jsxs(u,{title:"Dijkstra (shortest path)",children:[r.jsx(u.Tab,{code:Q0,language:"python"}),r.jsx(u.Tab,{code:X0,language:"javascript"}),r.jsx(u.Tab,{code:J0,language:"java"}),r.jsx(u.Tab,{code:Z0,language:"cpp"})]})}),r.jsx("section",{id:"graph-bellman-ford",children:r.jsxs(u,{title:"Bellman-Ford (shortest path)",children:[r.jsx(u.Tab,{code:k0,language:"python"}),r.jsx(u.Tab,{code:M0,language:"javascript"}),r.jsx(u.Tab,{code:C0,language:"java"}),r.jsx(u.Tab,{code:R0,language:"cpp"})]})}),r.jsx("section",{id:"graph-kahn",children:r.jsxs(u,{title:"Kahn (topological sort)",children:[r.jsx(u.Tab,{code:F0,language:"python"}),r.jsx(u.Tab,{code:P0,language:"javascript"}),r.jsx(u.Tab,{code:W0,language:"java"}),r.jsx(u.Tab,{code:$0,language:"cpp"})]})}),r.jsx("section",{id:"graph-kruskal",children:r.jsxs(u,{title:"Kruskal (mst)",children:[r.jsx(u.Tab,{code:n1,language:"python"}),r.jsx(u.Tab,{code:e1,language:"javascript"}),r.jsx(u.Tab,{code:t1,language:"java"}),r.jsx(u.Tab,{code:a1,language:"cpp"})]})}),r.jsx("section",{id:"graph-prim",children:r.jsxs(u,{title:"Prim (mst)",children:[r.jsx(u.Tab,{code:i1,language:"python"}),r.jsx(u.Tab,{code:r1,language:"javascript"}),r.jsx(u.Tab,{code:l1,language:"java"}),r.jsx(u.Tab,{code:s1,language:"cpp"})]})})]})}function kj(){return r.jsxs("div",{className:Qn.container,children:[r.jsx("h2",{className:Qn.sectionHeader,children:"Heap"}),r.jsx("section",{id:"heap-find-top-k-elements",children:r.jsxs(u,{title:"find top k elements",children:[r.jsx(u.Tab,{code:m1,language:"python"}),r.jsx(u.Tab,{code:v1,language:"javascript"}),r.jsx(u.Tab,{code:b1,language:"java"}),r.jsx(u.Tab,{code:y1,language:"cpp"})]})})]})}function Mj(){return r.jsxs("div",{className:Qn.container,children:[r.jsx("h2",{className:Qn.sectionHeader,children:"Binary Search"}),r.jsx("section",{id:"binarysearch-binary-search",children:r.jsxs(u,{title:"binary search",children:[r.jsx(u.Tab,{code:Fp,language:"python"}),r.jsx(u.Tab,{code:Pp,language:"javascript"}),r.jsx(u.Tab,{code:Wp,language:"java"}),r.jsx(u.Tab,{code:$p,language:"cpp"})]})}),r.jsx("section",{id:"binarysearch-duplicate-elements-left-insertion",children:r.jsxs(u,{title:"duplicate elements, left-most insertion point",children:[r.jsx(u.Tab,{code:om,language:"python"}),r.jsx(u.Tab,{code:cm,language:"javascript"}),r.jsx(u.Tab,{code:um,language:"java"}),r.jsx(u.Tab,{code:dm,language:"cpp"})]})}),r.jsx("section",{id:"binarysearch-duplicate-elements-right-insertion",children:r.jsxs(u,{title:"duplicate elements, right-most insertion point",children:[r.jsx(u.Tab,{code:fm,language:"python"}),r.jsx(u.Tab,{code:hm,language:"javascript"}),r.jsx(u.Tab,{code:gm,language:"java"}),r.jsx(u.Tab,{code:pm,language:"cpp"})]})}),r.jsx("section",{id:"binarysearch-greedy-minimum",children:r.jsxs(u,{title:"greedy (minimum)",children:[r.jsx(u.Tab,{code:im,language:"python"}),r.jsx(u.Tab,{code:rm,language:"javascript"}),r.jsx(u.Tab,{code:lm,language:"java"}),r.jsx(u.Tab,{code:sm,language:"cpp"})]})}),r.jsx("section",{id:"binarysearch-greedy-maximum",children:r.jsxs(u,{title:"greedy (maximum)",children:[r.jsx(u.Tab,{code:nm,language:"python"}),r.jsx(u.Tab,{code:em,language:"javascript"}),r.jsx(u.Tab,{code:tm,language:"java"}),r.jsx(u.Tab,{code:am,language:"cpp"})]})})]})}function Cj(){return r.jsxs("div",{className:Qn.container,children:[r.jsx("h2",{className:Qn.sectionHeader,children:"Backtracking"}),r.jsx("section",{id:"backtracking-backtracking",children:r.jsxs(u,{title:"backtracking",children:[r.jsx(u.Tab,{code:Qp,language:"python"}),r.jsx(u.Tab,{code:Xp,language:"javascript"}),r.jsx(u.Tab,{code:Jp,language:"java"}),r.jsx(u.Tab,{code:Zp,language:"cpp"})]})})]})}function Rj(){return r.jsxs("div",{className:Qn.container,children:[r.jsx("h2",{className:Qn.sectionHeader,children:"Dynamic Programming"}),r.jsx("section",{id:"dp-top-down",children:r.jsxs(u,{title:"DP top-down",children:[r.jsx(u.Tab,{code:u0,language:"python"}),r.jsx(u.Tab,{code:d0,language:"javascript"}),r.jsx(u.Tab,{code:f0,language:"java"}),r.jsx(u.Tab,{code:h0,language:"cpp"})]})}),r.jsx("section",{id:"dp-bottom-up",children:r.jsxs(u,{title:"DP bottom-up",children:[r.jsx(u.Tab,{code:t0,language:"python"}),r.jsx(u.Tab,{code:a0,language:"javascript"}),r.jsx(u.Tab,{code:i0,language:"java"}),r.jsx(u.Tab,{code:r0,language:"cpp"})]})}),r.jsx("section",{id:"dp-kadane",children:r.jsxs(u,{title:"Kadane (max-sum subarray)",children:[r.jsx(u.Tab,{code:l0,language:"python"}),r.jsx(u.Tab,{code:s0,language:"javascript"}),r.jsx(u.Tab,{code:o0,language:"java"}),r.jsx(u.Tab,{code:c0,language:"cpp"})]})})]})}function zj(){return r.jsxs("div",{className:Qn.container,children:[r.jsx("h2",{className:Qn.sectionHeader,children:"Bit Manipulation"}),r.jsx("section",{id:"bitmanipulation-test-kth-bit",children:r.jsxs(u,{title:"test kth-bit",children:[r.jsx(u.Tab,{code:Jm,language:"python"}),r.jsx(u.Tab,{code:Zm,language:"javascript"}),r.jsx(u.Tab,{code:Fm,language:"java"}),r.jsx(u.Tab,{code:Pm,language:"cpp"})]})}),r.jsx("section",{id:"bitmanipulation-set-kth-bit",children:r.jsxs(u,{title:"set kth bit",children:[r.jsx(u.Tab,{code:qm,language:"python"}),r.jsx(u.Tab,{code:Gm,language:"javascript"}),r.jsx(u.Tab,{code:Ym,language:"java"}),r.jsx(u.Tab,{code:Vm,language:"cpp"})]})}),r.jsx("section",{id:"bitmanipulation-clear-kth-bit",children:r.jsxs(u,{title:"clear kth bit",children:[r.jsx(u.Tab,{code:xm,language:"python"}),r.jsx(u.Tab,{code:_m,language:"javascript"}),r.jsx(u.Tab,{code:Tm,language:"java"}),r.jsx(u.Tab,{code:Sm,language:"cpp"})]})}),r.jsx("section",{id:"bitmanipulation-toggle-kth-bit",children:r.jsxs(u,{title:"toggle kth bit",children:[r.jsx(u.Tab,{code:Wm,language:"python"}),r.jsx(u.Tab,{code:$m,language:"javascript"}),r.jsx(u.Tab,{code:n0,language:"java"}),r.jsx(u.Tab,{code:e0,language:"cpp"})]})}),r.jsx("section",{id:"bitmanipulation-get-rightmost-bit",children:r.jsxs(u,{title:"get rightmost bit",children:[r.jsx(u.Tab,{code:Cm,language:"python"}),r.jsx(u.Tab,{code:Rm,language:"javascript"}),r.jsx(u.Tab,{code:zm,language:"java"}),r.jsx(u.Tab,{code:Dm,language:"cpp"})]})}),r.jsx("section",{id:"bitmanipulation-count-set-bits",children:r.jsxs(u,{title:"count set bits",children:[r.jsx(u.Tab,{code:jm,language:"python"}),r.jsx(u.Tab,{code:Nm,language:"javascript"}),r.jsx(u.Tab,{code:wm,language:"java"}),r.jsx(u.Tab,{code:Em,language:"cpp"})]})}),r.jsx("section",{id:"bitmanipulation-multiply-power-of-two",children:r.jsxs(u,{title:"multiply by 2^k",children:[r.jsx(u.Tab,{code:Lm,language:"python"}),r.jsx(u.Tab,{code:Bm,language:"javascript"}),r.jsx(u.Tab,{code:Um,language:"java"}),r.jsx(u.Tab,{code:Hm,language:"cpp"})]})}),r.jsx("section",{id:"bitmanipulation-divide-power-of-two",children:r.jsxs(u,{title:"divide by 2^k",children:[r.jsx(u.Tab,{code:Om,language:"python"}),r.jsx(u.Tab,{code:Am,language:"javascript"}),r.jsx(u.Tab,{code:km,language:"java"}),r.jsx(u.Tab,{code:Mm,language:"cpp"})]})}),r.jsx("section",{id:"bitmanipulation-check-power-of-two",children:r.jsxs(u,{title:"check if number is power of 2",children:[r.jsx(u.Tab,{code:mm,language:"python"}),r.jsx(u.Tab,{code:vm,language:"javascript"}),r.jsx(u.Tab,{code:bm,language:"java"}),r.jsx(u.Tab,{code:ym,language:"cpp"})]})}),r.jsx("section",{id:"bitmanipulation-swap-variables",children:r.jsxs(u,{title:"swap two variables",children:[r.jsx(u.Tab,{code:Km,language:"python"}),r.jsx(u.Tab,{code:Im,language:"javascript"}),r.jsx(u.Tab,{code:Qm,language:"java"}),r.jsx(u.Tab,{code:Xm,language:"cpp"})]})})]})}const Dj=`def fn(matrix: list[list[int]]):
    r = len(matrix)
    c = len(matrix[0])

    create_matrix = [[0 for _ in range(c)] for _ in range(r)]
    copy_matrix = [row[:] for row in matrix]
`,Lj=`def fn(matrix: list[list[int]]):
    r = len(matrix)
    c = len(matrix[0])

    main_diagonal = [matrix[i][i] for i in range(min(r, c))]
    anti_diagonal = [matrix[i][~i] for i in range(min(r, c))]
`,Bj=`def fn(matrix: list[list[int]]):
    r = len(matrix)
    c = len(matrix[0])

    transpose_tuple = zip(*matrix)
    transpose = [list(row) for row in transpose_tuple]
    rotate_left = transpose[::-1]
    rotate_right = [row[::-1] for row in transpose]
`,Uj=`const fn = (matrix) => {
    const r = matrix.length;
    const c = matrix[0].length;

    const createMatrix = Array.from({ length: r }, () => Array(c).fill(0))
    const copyMatrix = matrix.map(row => [...row])
}
`,Hj=`const fn = (matrix) => {
    const r = matrix.length
    const c = matrix[0].length

    const mainDiagonal = Array.from({ length: Math.min(r, c) }, (_, i) => matrix[i][i])
    const antiDiagonal = Array.from({ length: Math.min(r, c) }, (_, i) => matrix[i][~i])
}
`,qj=`const fn = (matrix) => {
    const r = matrix.length
    const c = matrix[0].length

    const transposeTuple = matrix[0].map((_, i) => matrix.map(row => row[i]))
    const transpose = transposeTuple.map(row => [...row])
    const rotateLeft = transpose.reverse()
    const rotateRight = transpose.map(row => row.reverse())
}
`,Gj=`import java.util.ArrayList;
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
`,Yj=`import java.util.ArrayList;
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
`,Vj=`import java.util.ArrayList;
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
`,Kj=`#include <vector>

using namespace std;


void fn(vector<vector<int>>& matrix) {
    int r = matrix.size();
    int c = matrix[0].size();

    vector<vector<int>> create_matrix(r, vector<int>(c, 0));
    vector<vector<int>> copy_matrix(matrix);
}
`,Ij=`#include <vector>

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
`,Qj=`#include <vector>

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
`;function Xj(){return r.jsxs("div",{className:Qn.container,children:[r.jsx("h2",{className:Qn.sectionHeader,children:"Matrix"}),r.jsx("section",{id:"matrix-create-copy",children:r.jsxs(u,{title:"create / copy",children:[r.jsx(u.Tab,{code:Dj,language:"python"}),r.jsx(u.Tab,{code:Uj,language:"javascript"}),r.jsx(u.Tab,{code:Gj,language:"java"}),r.jsx(u.Tab,{code:Kj,language:"cpp"})]})}),r.jsx("section",{id:"matrix-diagonals",children:r.jsxs(u,{title:"diagonals / anti-diagonals",children:[r.jsx(u.Tab,{code:Lj,language:"python"}),r.jsx(u.Tab,{code:Hj,language:"javascript"}),r.jsx(u.Tab,{code:Yj,language:"java"}),r.jsx(u.Tab,{code:Ij,language:"cpp"})]})}),r.jsx("section",{id:"matrix-rotate-transpose",children:r.jsxs(u,{title:"rotate / transpose",children:[r.jsx(u.Tab,{code:Bj,language:"python"}),r.jsx(u.Tab,{code:qj,language:"javascript"}),r.jsx(u.Tab,{code:Vj,language:"java"}),r.jsx(u.Tab,{code:Qj,language:"cpp"})]})})]})}const Jj=`from typing import Any


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
`,Zj=`from typing import Any


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
`,Fj=`from typing import Any


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
`,Pj=`from typing import Any


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
`,Wj=`from typing import Any


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
`,$j=`class Graph:
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
`,n2=`class Array {
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
`,e2=`class TreeNode {
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
`,t2=`class TreeNode {
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
`,a2=`class ListNode {
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
`,i2=`class ListNode {
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
`,r2=`class Graph {
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
`,l2=`public class Array<T> {
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
`,s2=`public class TreeNode<T> {
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
`,o2=`public class TreeNode<T extends Comparable<T>> {
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
`,c2=`class ListNode {
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
`,u2=`public class ListNode<T> {
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
`,d2=`import java.util.ArrayList;
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
`,f2=`#include <iostream>
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
`,h2=`#include <iostream>
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
`,g2=`#include <iostream>
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
`,p2=`#include <iostream>

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
`,m2=`#include <iostream>
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
`,v2=`#include <iostream>
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
`;function b2(){return r.jsxs("div",{className:Qn.container,children:[r.jsx("h2",{className:Qn.sectionHeader,children:"Data Structures"}),r.jsx("section",{id:"ds-array",children:r.jsxs(u,{title:"array",children:[r.jsx(u.Tab,{code:Jj,language:"python"}),r.jsx(u.Tab,{code:n2,language:"javascript"}),r.jsx(u.Tab,{code:l2,language:"java"}),r.jsx(u.Tab,{code:f2,language:"cpp"})]})}),r.jsx("section",{id:"ds-hash-map",children:r.jsxs(u,{title:"hash map",children:[r.jsx(u.Tab,{code:g0,language:"python"}),r.jsx(u.Tab,{code:p0,language:"javascript"}),r.jsx(u.Tab,{code:m0,language:"java"}),r.jsx(u.Tab,{code:v0,language:"cpp"})]})}),r.jsx("section",{id:"ds-linked-list",children:r.jsxs(u,{title:"linked list",children:[r.jsx(u.Tab,{code:Pj,language:"python"}),r.jsx(u.Tab,{code:a2,language:"javascript"}),r.jsx(u.Tab,{code:c2,language:"java"}),r.jsx(u.Tab,{code:p2,language:"cpp"})]})}),r.jsx("section",{id:"ds-doubly-linked-list",children:r.jsxs(u,{title:"doubly linked list",children:[r.jsx(u.Tab,{code:Wj,language:"python"}),r.jsx(u.Tab,{code:i2,language:"javascript"}),r.jsx(u.Tab,{code:u2,language:"java"}),r.jsx(u.Tab,{code:m2,language:"cpp"})]})}),r.jsx("section",{id:"ds-binary-tree",children:r.jsxs(u,{title:"binary tree",children:[r.jsx(u.Tab,{code:Zj,language:"python"}),r.jsx(u.Tab,{code:e2,language:"javascript"}),r.jsx(u.Tab,{code:s2,language:"java"}),r.jsx(u.Tab,{code:h2,language:"cpp"})]})}),r.jsx("section",{id:"ds-binary-search-tree",children:r.jsxs(u,{title:"binary search tree",children:[r.jsx(u.Tab,{code:Fj,language:"python"}),r.jsx(u.Tab,{code:t2,language:"javascript"}),r.jsx(u.Tab,{code:o2,language:"java"}),r.jsx(u.Tab,{code:g2,language:"cpp"})]})}),r.jsx("section",{id:"ds-graph",children:r.jsxs(u,{title:"graph",children:[r.jsx(u.Tab,{code:$j,language:"python"}),r.jsx(u.Tab,{code:r2,language:"javascript"}),r.jsx(u.Tab,{code:d2,language:"java"}),r.jsx(u.Tab,{code:v2,language:"cpp"})]})}),r.jsx("section",{id:"ds-union-find",children:r.jsxs(u,{title:"union find",children:[r.jsx(u.Tab,{code:T0,language:"python"}),r.jsx(u.Tab,{code:S0,language:"javascript"}),r.jsx(u.Tab,{code:j0,language:"java"}),r.jsx(u.Tab,{code:N0,language:"cpp"})]})}),r.jsx("section",{id:"ds-union-find-optimized",children:r.jsxs(u,{title:"union find optimized",children:[r.jsx(u.Tab,{code:w0,language:"python"}),r.jsx(u.Tab,{code:E0,language:"javascript"}),r.jsx(u.Tab,{code:O0,language:"java"}),r.jsx(u.Tab,{code:A0,language:"cpp"})]})}),r.jsx("section",{id:"ds-trie",children:r.jsxs(u,{title:"trie",children:[r.jsx(u.Tab,{code:b0,language:"python"}),r.jsx(u.Tab,{code:y0,language:"javascript"}),r.jsx(u.Tab,{code:x0,language:"java"}),r.jsx(u.Tab,{code:_0,language:"cpp"})]})})]})}const y2=`import random


def bogo_sort(arr: list) -> None:
    target = sorted(arr)

    while arr != target:
        random.shuffle(arr)
`,x2=`def bubble_sort(arr: list) -> None:
    n = len(arr)

    for i in range(n):
        swapped = False

        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True

        if not swapped:
            break
`,_2=`def bucket_sort(arr: list) -> list:
    num_buckets = 10
    min_num = min(arr)
    max_num = max(arr)
    bucket_size = (max_num - min_num) / num_buckets
    buckets = [[] for _ in range(num_buckets)]

    for num in arr:
        index = min(int((num - min_num) / bucket_size), num_buckets - 1)
        buckets[index].append(num)

    return [num for bucket in buckets for num in sorted(bucket)]
`,T2=`def counting_sort(arr: list) -> list:
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
`,S2=`def cube_sort(arr: list, processors: int) -> None:
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
`,j2=`def heap_sort(arr: list) -> list:
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
`,N2=`def insertion_sort(arr: list) -> None:
    n = len(arr)

    for i in range(1, n):
        key = arr[i]

        while i > 0 and key < arr[i - 1]:
            arr[i] = arr[i - 1]
            i -= 1

        arr[i] = key
`,w2=`def merge_sort(arr: list) -> list:
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
`,E2=`def pancake_sort(arr: list) -> None:
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
`,O2=`def quick_sort(arr: list) -> list:
    n = len(arr)

    if n <= 1:
        return arr

    pivot = arr[n // 2]
    left = [x for x in arr if x < pivot]
    right = [x for x in arr if x > pivot]

    return quick_sort(left) + [pivot] + quick_sort(right)
`,A2=`def radix_sort(arr: list) -> None:
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
`,k2=`def selection_sort(arr: list) -> None:
    n = len(arr)

    for i in range(n):
        min_i = i

        for j in range(i + 1, n):
            if arr[j] < arr[min_i]:
                min_i = j

        if min_i != i:
            arr[i], arr[min_i] = arr[min_i], arr[i]
`,M2=`def shell_sort(arr: list) -> None:
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
`,C2=`from threading import Thread
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
`,R2=`def tim_sort(arr: list) -> list:
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
`,z2=`const bogoSort = (arr) => {
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
`,D2=`const bubbleSort = (arr) => {
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
`,L2=`const bucketSort = (arr) => {
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
`,B2=`const countingSort = (arr) => {
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
`,U2=`const cubeSort = (arr, processors) => {
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
`,H2=`const heapSort = (arr) => {
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
`,q2=`const insertionSort = (arr) => {
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
`,G2=`const mergeSort = (arr) => {
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
`,Y2=`const pancakeSort = (arr) => {
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
`,V2=`const quickSort = (arr) => {
    const n = arr.length

    if (n <= 1) {
        return arr
    }

    const pivot = arr[Math.floor(n / 2)]
    const left = arr.filter(x => x < pivot)
    const right = arr.filter(x => x > pivot)

    return [...quickSort(left), pivot, ...quickSort(right)]
}
`,K2=`const radixSort = (arr) => {
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
`,I2=`const selectionSort = (arr) => {
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
`,Q2=`const shellSort = (arr) => {
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
`,X2=`const sleepSort = (arr) => {
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
`,J2=`const timSort = (arr) => {
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
`,Z2=`import java.util.Arrays;
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
`,F2=`public static void bubbleSort(int[] arr) {
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
`,P2=`import java.util.ArrayList;
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
`,W2=`import java.util.Arrays;


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
`,$2=`import java.util.ArrayList;
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
`,nN=`public static int[] heapSort(int[] arr) {
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
`,eN=`public static void insertionSort(int[] arr) {
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
`,tN=`import java.util.Arrays;


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
`,aN=`public static void pancakeSort(int[] arr) {
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
`,iN=`import java.util.ArrayList;
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
`,rN=`import java.util.Arrays;


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
`,lN=`public static void selectionSort(int[] arr) {
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
`,sN=`public static void shellSort(int[] arr) {
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
`,oN=`import java.util.ArrayList;
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
`,cN=`public static int[] timSort(int[] arr) {
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
`,uN=`#include <algorithm>
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
`,dN=`#include <vector>

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
`,fN=`#include <vector>
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
`,hN=`#include <vector>
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
`,gN=`#include <vector>
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
`,pN=`#include <vector>

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
`,mN=`#include <vector>

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
`,vN=`#include <vector>

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
`,bN=`#include <vector>

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
`,yN=`#include <vector>

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
`,xN=`#include <vector>

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
`,_N=`#include <vector>

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
`,TN=`#include <vector>

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
`,SN=`#include <chrono>
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
`,jN=`#include <vector>
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
`;function NN(){return r.jsxs("div",{className:Qn.container,children:[r.jsx("h2",{className:Qn.sectionHeader,children:"Sorting Algorithms"}),r.jsx("section",{id:"sort-bubble",children:r.jsxs(u,{title:"bubble sort",children:[r.jsx(u.Tab,{code:x2,language:"python"}),r.jsx(u.Tab,{code:D2,language:"javascript"}),r.jsx(u.Tab,{code:F2,language:"java"}),r.jsx(u.Tab,{code:dN,language:"cpp"})]})}),r.jsx("section",{id:"sort-selection",children:r.jsxs(u,{title:"selection sort",children:[r.jsx(u.Tab,{code:k2,language:"python"}),r.jsx(u.Tab,{code:I2,language:"javascript"}),r.jsx(u.Tab,{code:lN,language:"java"}),r.jsx(u.Tab,{code:_N,language:"cpp"})]})}),r.jsx("section",{id:"sort-insertion",children:r.jsxs(u,{title:"insertion sort",children:[r.jsx(u.Tab,{code:N2,language:"python"}),r.jsx(u.Tab,{code:q2,language:"javascript"}),r.jsx(u.Tab,{code:eN,language:"java"}),r.jsx(u.Tab,{code:mN,language:"cpp"})]})}),r.jsx("section",{id:"sort-shell",children:r.jsxs(u,{title:"shell sort",children:[r.jsx(u.Tab,{code:M2,language:"python"}),r.jsx(u.Tab,{code:Q2,language:"javascript"}),r.jsx(u.Tab,{code:sN,language:"java"}),r.jsx(u.Tab,{code:TN,language:"cpp"})]})}),r.jsx("section",{id:"sort-merge",children:r.jsxs(u,{title:"merge sort",children:[r.jsx(u.Tab,{code:w2,language:"python"}),r.jsx(u.Tab,{code:G2,language:"javascript"}),r.jsx(u.Tab,{code:tN,language:"java"}),r.jsx(u.Tab,{code:vN,language:"cpp"})]})}),r.jsx("section",{id:"sort-quick",children:r.jsxs(u,{title:"quick sort",children:[r.jsx(u.Tab,{code:O2,language:"python"}),r.jsx(u.Tab,{code:V2,language:"javascript"}),r.jsx(u.Tab,{code:iN,language:"java"}),r.jsx(u.Tab,{code:yN,language:"cpp"})]})}),r.jsx("section",{id:"sort-tim",children:r.jsxs(u,{title:"timsort",children:[r.jsx(u.Tab,{code:R2,language:"python"}),r.jsx(u.Tab,{code:J2,language:"javascript"}),r.jsx(u.Tab,{code:cN,language:"java"}),r.jsx(u.Tab,{code:jN,language:"cpp"})]})}),r.jsx("section",{id:"sort-heap",children:r.jsxs(u,{title:"heap sort",children:[r.jsx(u.Tab,{code:j2,language:"python"}),r.jsx(u.Tab,{code:H2,language:"javascript"}),r.jsx(u.Tab,{code:nN,language:"java"}),r.jsx(u.Tab,{code:pN,language:"cpp"})]})}),r.jsx("section",{id:"sort-counting",children:r.jsxs(u,{title:"counting sort",children:[r.jsx(u.Tab,{code:T2,language:"python"}),r.jsx(u.Tab,{code:B2,language:"javascript"}),r.jsx(u.Tab,{code:W2,language:"java"}),r.jsx(u.Tab,{code:hN,language:"cpp"})]})}),r.jsx("section",{id:"sort-bucket",children:r.jsxs(u,{title:"bucket sort",children:[r.jsx(u.Tab,{code:_2,language:"python"}),r.jsx(u.Tab,{code:L2,language:"javascript"}),r.jsx(u.Tab,{code:P2,language:"java"}),r.jsx(u.Tab,{code:fN,language:"cpp"})]})}),r.jsx("section",{id:"sort-radix",children:r.jsxs(u,{title:"radix sort",children:[r.jsx(u.Tab,{code:A2,language:"python"}),r.jsx(u.Tab,{code:K2,language:"javascript"}),r.jsx(u.Tab,{code:rN,language:"java"}),r.jsx(u.Tab,{code:xN,language:"cpp"})]})}),r.jsx("section",{id:"sort-cube",children:r.jsxs(u,{title:"cubesort",children:[r.jsx(u.Tab,{code:S2,language:"python"}),r.jsx(u.Tab,{code:U2,language:"javascript"}),r.jsx(u.Tab,{code:$2,language:"java"}),r.jsx(u.Tab,{code:gN,language:"cpp"})]})}),r.jsx("section",{id:"sort-bogo",children:r.jsxs(u,{title:"bogo sort",children:[r.jsx(u.Tab,{code:y2,language:"python"}),r.jsx(u.Tab,{code:z2,language:"javascript"}),r.jsx(u.Tab,{code:Z2,language:"java"}),r.jsx(u.Tab,{code:uN,language:"cpp"})]})}),r.jsx("section",{id:"sort-pancake",children:r.jsxs(u,{title:"pancake sort",children:[r.jsx(u.Tab,{code:E2,language:"python"}),r.jsx(u.Tab,{code:Y2,language:"javascript"}),r.jsx(u.Tab,{code:aN,language:"java"}),r.jsx(u.Tab,{code:bN,language:"cpp"})]})}),r.jsx("section",{id:"sort-sleep",children:r.jsxs(u,{title:"sleep sort",children:[r.jsx(u.Tab,{code:C2,language:"python"}),r.jsx(u.Tab,{code:X2,language:"javascript"}),r.jsx(u.Tab,{code:oN,language:"java"}),r.jsx(u.Tab,{code:SN,language:"cpp"})]})})]})}function wN(){const{isSidebarOpen:o}=nd(),{view:g}=so(),h=ne(wp.main,(!o||g==="finder")&&wp.sidebarHidden);return r.jsx("main",{className:h,children:g==="finder"?r.jsx(sj,{}):EN()})}function EN(){return r.jsxs(r.Fragment,{children:[r.jsx(Sj,{}),r.jsx(jj,{}),r.jsx(Nj,{}),r.jsx(wj,{}),r.jsx(Ej,{}),r.jsx(Oj,{}),r.jsx(Aj,{}),r.jsx(kj,{}),r.jsx(Mj,{}),r.jsx(Cj,{}),r.jsx(Rj,{}),r.jsx(zj,{}),r.jsx(Xj,{}),r.jsx(b2,{}),r.jsx(NN,{})]})}function ON(){return r.jsx(lo.StrictMode,{children:r.jsx(ox,{children:r.jsx(sx,{children:r.jsx(cx,{children:r.jsxs("div",{className:"App",children:[r.jsx(q_,{}),r.jsx(wN,{})]})})})})})}rx.createRoot(document.getElementById("root")).render(r.jsx(ON,{}));export{_l as K,kN as M,lo as R,XS as T,U as a,ne as c,mS as g,r as j,Wu as r,Si as t};
