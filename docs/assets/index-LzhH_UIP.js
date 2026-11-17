(function(){const b=document.createElement("link").relList;if(b&&b.supports&&b.supports("modulepreload"))return;for(const j of document.querySelectorAll('link[rel="modulepreload"]'))d(j);new MutationObserver(j=>{for(const z of j)if(z.type==="childList")for(const L of z.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&d(L)}).observe(document,{childList:!0,subtree:!0});function g(j){const z={};return j.integrity&&(z.integrity=j.integrity),j.referrerPolicy&&(z.referrerPolicy=j.referrerPolicy),j.crossOrigin==="use-credentials"?z.credentials="include":j.crossOrigin==="anonymous"?z.credentials="omit":z.credentials="same-origin",z}function d(j){if(j.ep)return;j.ep=!0;const z=g(j);fetch(j.href,z)}})();function Ui(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var wo={exports:{}},Br={};var Nh;function z0(){if(Nh)return Br;Nh=1;var c=Symbol.for("react.transitional.element"),b=Symbol.for("react.fragment");function g(d,j,z){var L=null;if(z!==void 0&&(L=""+z),j.key!==void 0&&(L=""+j.key),"key"in j){z={};for(var U in j)U!=="key"&&(z[U]=j[U])}else z=j;return j=z.ref,{$$typeof:c,type:d,key:L,ref:j!==void 0?j:null,props:z}}return Br.Fragment=b,Br.jsx=g,Br.jsxs=g,Br}var wh;function B0(){return wh||(wh=1,wo.exports=z0()),wo.exports}var i=B0(),Eo={exports:{}},Ur={},Ao={exports:{}},Oo={};var Eh;function U0(){return Eh||(Eh=1,(function(c){function b(w,V){var F=w.length;w.push(V);n:for(;0<F;){var jn=F-1>>>1,Nn=w[jn];if(0<j(Nn,V))w[jn]=V,w[F]=Nn,F=jn;else break n}}function g(w){return w.length===0?null:w[0]}function d(w){if(w.length===0)return null;var V=w[0],F=w.pop();if(F!==V){w[0]=F;n:for(var jn=0,Nn=w.length,m=Nn>>>1;jn<m;){var O=2*(jn+1)-1,K=w[O],$=O+1,sn=w[$];if(0>j(K,F))$<Nn&&0>j(sn,K)?(w[jn]=sn,w[$]=F,jn=$):(w[jn]=K,w[O]=F,jn=O);else if($<Nn&&0>j(sn,F))w[jn]=sn,w[$]=F,jn=$;else break n}}return V}function j(w,V){var F=w.sortIndex-V.sortIndex;return F!==0?F:w.id-V.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var z=performance;c.unstable_now=function(){return z.now()}}else{var L=Date,U=L.now();c.unstable_now=function(){return L.now()-U}}var R=[],S=[],q=1,A=null,C=3,J=!1,H=!1,Q=!1,hn=!1,yn=typeof setTimeout=="function"?setTimeout:null,un=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;function cn(w){for(var V=g(S);V!==null;){if(V.callback===null)d(S);else if(V.startTime<=w)d(S),V.sortIndex=V.expirationTime,b(R,V);else break;V=g(S)}}function Dn(w){if(Q=!1,cn(w),!H)if(g(R)!==null)H=!0,Rn||(Rn=!0,re());else{var V=g(S);V!==null&&Ee(Dn,V.startTime-w)}}var Rn=!1,mn=-1,Fn=5,je=-1;function Be(){return hn?!0:!(c.unstable_now()-je<Fn)}function me(){if(hn=!1,Rn){var w=c.unstable_now();je=w;var V=!0;try{n:{H=!1,Q&&(Q=!1,un(mn),mn=-1),J=!0;var F=C;try{e:{for(cn(w),A=g(R);A!==null&&!(A.expirationTime>w&&Be());){var jn=A.callback;if(typeof jn=="function"){A.callback=null,C=A.priorityLevel;var Nn=jn(A.expirationTime<=w);if(w=c.unstable_now(),typeof Nn=="function"){A.callback=Nn,cn(w),V=!0;break e}A===g(R)&&d(R),cn(w)}else d(R);A=g(R)}if(A!==null)V=!0;else{var m=g(S);m!==null&&Ee(Dn,m.startTime-w),V=!1}}break n}finally{A=null,C=F,J=!1}V=void 0}}finally{V?re():Rn=!1}}}var re;if(typeof W=="function")re=function(){W(me)};else if(typeof MessageChannel<"u"){var Ue=new MessageChannel,ce=Ue.port2;Ue.port1.onmessage=me,re=function(){ce.postMessage(null)}}else re=function(){yn(me,0)};function Ee(w,V){mn=yn(function(){w(c.unstable_now())},V)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(w){w.callback=null},c.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Fn=0<w?Math.floor(1e3/w):5},c.unstable_getCurrentPriorityLevel=function(){return C},c.unstable_next=function(w){switch(C){case 1:case 2:case 3:var V=3;break;default:V=C}var F=C;C=V;try{return w()}finally{C=F}},c.unstable_requestPaint=function(){hn=!0},c.unstable_runWithPriority=function(w,V){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var F=C;C=w;try{return V()}finally{C=F}},c.unstable_scheduleCallback=function(w,V,F){var jn=c.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?jn+F:jn):F=jn,w){case 1:var Nn=-1;break;case 2:Nn=250;break;case 5:Nn=1073741823;break;case 4:Nn=1e4;break;default:Nn=5e3}return Nn=F+Nn,w={id:q++,callback:V,priorityLevel:w,startTime:F,expirationTime:Nn,sortIndex:-1},F>jn?(w.sortIndex=F,b(S,w),g(R)===null&&w===g(S)&&(Q?(un(mn),mn=-1):Q=!0,Ee(Dn,F-jn))):(w.sortIndex=Nn,b(R,w),H||J||(H=!0,Rn||(Rn=!0,re()))),w},c.unstable_shouldYield=Be,c.unstable_wrapCallback=function(w){var V=C;return function(){var F=C;C=V;try{return w.apply(this,arguments)}finally{C=F}}}})(Oo)),Oo}var Ah;function q0(){return Ah||(Ah=1,Ao.exports=U0()),Ao.exports}var ko={exports:{}},vn={};var Oh;function H0(){if(Oh)return vn;Oh=1;var c=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),L=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),S=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),C=Symbol.iterator;function J(m){return m===null||typeof m!="object"?null:(m=C&&m[C]||m["@@iterator"],typeof m=="function"?m:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,hn={};function yn(m,O,K){this.props=m,this.context=O,this.refs=hn,this.updater=K||H}yn.prototype.isReactComponent={},yn.prototype.setState=function(m,O){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,O,"setState")},yn.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function un(){}un.prototype=yn.prototype;function W(m,O,K){this.props=m,this.context=O,this.refs=hn,this.updater=K||H}var cn=W.prototype=new un;cn.constructor=W,Q(cn,yn.prototype),cn.isPureReactComponent=!0;var Dn=Array.isArray;function Rn(){}var mn={H:null,A:null,T:null,S:null},Fn=Object.prototype.hasOwnProperty;function je(m,O,K){var $=K.ref;return{$$typeof:c,type:m,key:O,ref:$!==void 0?$:null,props:K}}function Be(m,O){return je(m.type,O,m.props)}function me(m){return typeof m=="object"&&m!==null&&m.$$typeof===c}function re(m){var O={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(K){return O[K]})}var Ue=/\/+/g;function ce(m,O){return typeof m=="object"&&m!==null&&m.key!=null?re(""+m.key):O.toString(36)}function Ee(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(Rn,Rn):(m.status="pending",m.then(function(O){m.status==="pending"&&(m.status="fulfilled",m.value=O)},function(O){m.status==="pending"&&(m.status="rejected",m.reason=O)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function w(m,O,K,$,sn){var _n=typeof m;(_n==="undefined"||_n==="boolean")&&(m=null);var bn=!1;if(m===null)bn=!0;else switch(_n){case"bigint":case"string":case"number":bn=!0;break;case"object":switch(m.$$typeof){case c:case b:bn=!0;break;case q:return bn=m._init,w(bn(m._payload),O,K,$,sn)}}if(bn)return sn=sn(m),bn=$===""?"."+ce(m,0):$,Dn(sn)?(K="",bn!=null&&(K=bn.replace(Ue,"$&/")+"/"),w(sn,O,K,"",function($e){return $e})):sn!=null&&(me(sn)&&(sn=Be(sn,K+(sn.key==null||m&&m.key===sn.key?"":(""+sn.key).replace(Ue,"$&/")+"/")+bn)),O.push(sn)),1;bn=0;var Ln=$===""?".":$+":";if(Dn(m))for(var Wn=0;Wn<m.length;Wn++)$=m[Wn],_n=Ln+ce($,Wn),bn+=w($,O,K,_n,sn);else if(Wn=J(m),typeof Wn=="function")for(m=Wn.call(m),Wn=0;!($=m.next()).done;)$=$.value,_n=Ln+ce($,Wn++),bn+=w($,O,K,_n,sn);else if(_n==="object"){if(typeof m.then=="function")return w(Ee(m),O,K,$,sn);throw O=String(m),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return bn}function V(m,O,K){if(m==null)return m;var $=[],sn=0;return w(m,$,"","",function(_n){return O.call(K,_n,sn++)}),$}function F(m){if(m._status===-1){var O=m._result;O=O(),O.then(function(K){(m._status===0||m._status===-1)&&(m._status=1,m._result=K)},function(K){(m._status===0||m._status===-1)&&(m._status=2,m._result=K)}),m._status===-1&&(m._status=0,m._result=O)}if(m._status===1)return m._result.default;throw m._result}var jn=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)},Nn={map:V,forEach:function(m,O,K){V(m,function(){O.apply(this,arguments)},K)},count:function(m){var O=0;return V(m,function(){O++}),O},toArray:function(m){return V(m,function(O){return O})||[]},only:function(m){if(!me(m))throw Error("React.Children.only expected to receive a single React element child.");return m}};return vn.Activity=A,vn.Children=Nn,vn.Component=yn,vn.Fragment=g,vn.Profiler=j,vn.PureComponent=W,vn.StrictMode=d,vn.Suspense=R,vn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=mn,vn.__COMPILER_RUNTIME={__proto__:null,c:function(m){return mn.H.useMemoCache(m)}},vn.cache=function(m){return function(){return m.apply(null,arguments)}},vn.cacheSignal=function(){return null},vn.cloneElement=function(m,O,K){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var $=Q({},m.props),sn=m.key;if(O!=null)for(_n in O.key!==void 0&&(sn=""+O.key),O)!Fn.call(O,_n)||_n==="key"||_n==="__self"||_n==="__source"||_n==="ref"&&O.ref===void 0||($[_n]=O[_n]);var _n=arguments.length-2;if(_n===1)$.children=K;else if(1<_n){for(var bn=Array(_n),Ln=0;Ln<_n;Ln++)bn[Ln]=arguments[Ln+2];$.children=bn}return je(m.type,sn,$)},vn.createContext=function(m){return m={$$typeof:L,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:z,_context:m},m},vn.createElement=function(m,O,K){var $,sn={},_n=null;if(O!=null)for($ in O.key!==void 0&&(_n=""+O.key),O)Fn.call(O,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(sn[$]=O[$]);var bn=arguments.length-2;if(bn===1)sn.children=K;else if(1<bn){for(var Ln=Array(bn),Wn=0;Wn<bn;Wn++)Ln[Wn]=arguments[Wn+2];sn.children=Ln}if(m&&m.defaultProps)for($ in bn=m.defaultProps,bn)sn[$]===void 0&&(sn[$]=bn[$]);return je(m,_n,sn)},vn.createRef=function(){return{current:null}},vn.forwardRef=function(m){return{$$typeof:U,render:m}},vn.isValidElement=me,vn.lazy=function(m){return{$$typeof:q,_payload:{_status:-1,_result:m},_init:F}},vn.memo=function(m,O){return{$$typeof:S,type:m,compare:O===void 0?null:O}},vn.startTransition=function(m){var O=mn.T,K={};mn.T=K;try{var $=m(),sn=mn.S;sn!==null&&sn(K,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(Rn,jn)}catch(_n){jn(_n)}finally{O!==null&&K.types!==null&&(O.types=K.types),mn.T=O}},vn.unstable_useCacheRefresh=function(){return mn.H.useCacheRefresh()},vn.use=function(m){return mn.H.use(m)},vn.useActionState=function(m,O,K){return mn.H.useActionState(m,O,K)},vn.useCallback=function(m,O){return mn.H.useCallback(m,O)},vn.useContext=function(m){return mn.H.useContext(m)},vn.useDebugValue=function(){},vn.useDeferredValue=function(m,O){return mn.H.useDeferredValue(m,O)},vn.useEffect=function(m,O){return mn.H.useEffect(m,O)},vn.useEffectEvent=function(m){return mn.H.useEffectEvent(m)},vn.useId=function(){return mn.H.useId()},vn.useImperativeHandle=function(m,O,K){return mn.H.useImperativeHandle(m,O,K)},vn.useInsertionEffect=function(m,O){return mn.H.useInsertionEffect(m,O)},vn.useLayoutEffect=function(m,O){return mn.H.useLayoutEffect(m,O)},vn.useMemo=function(m,O){return mn.H.useMemo(m,O)},vn.useOptimistic=function(m,O){return mn.H.useOptimistic(m,O)},vn.useReducer=function(m,O,K){return mn.H.useReducer(m,O,K)},vn.useRef=function(m){return mn.H.useRef(m)},vn.useState=function(m){return mn.H.useState(m)},vn.useSyncExternalStore=function(m,O,K){return mn.H.useSyncExternalStore(m,O,K)},vn.useTransition=function(){return mn.H.useTransition()},vn.version="19.2.3",vn}var kh;function Vo(){return kh||(kh=1,ko.exports=H0()),ko.exports}var Mo={exports:{}},ze={};var Mh;function G0(){if(Mh)return ze;Mh=1;var c=Vo();function b(R){var S="https://react.dev/errors/"+R;if(1<arguments.length){S+="?args[]="+encodeURIComponent(arguments[1]);for(var q=2;q<arguments.length;q++)S+="&args[]="+encodeURIComponent(arguments[q])}return"Minified React error #"+R+"; visit "+S+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function g(){}var d={d:{f:g,r:function(){throw Error(b(522))},D:g,C:g,L:g,m:g,X:g,S:g,M:g},p:0,findDOMNode:null},j=Symbol.for("react.portal");function z(R,S,q){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:j,key:A==null?null:""+A,children:R,containerInfo:S,implementation:q}}var L=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function U(R,S){if(R==="font")return"";if(typeof S=="string")return S==="use-credentials"?S:""}return ze.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,ze.createPortal=function(R,S){var q=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!S||S.nodeType!==1&&S.nodeType!==9&&S.nodeType!==11)throw Error(b(299));return z(R,S,null,q)},ze.flushSync=function(R){var S=L.T,q=d.p;try{if(L.T=null,d.p=2,R)return R()}finally{L.T=S,d.p=q,d.d.f()}},ze.preconnect=function(R,S){typeof R=="string"&&(S?(S=S.crossOrigin,S=typeof S=="string"?S==="use-credentials"?S:"":void 0):S=null,d.d.C(R,S))},ze.prefetchDNS=function(R){typeof R=="string"&&d.d.D(R)},ze.preinit=function(R,S){if(typeof R=="string"&&S&&typeof S.as=="string"){var q=S.as,A=U(q,S.crossOrigin),C=typeof S.integrity=="string"?S.integrity:void 0,J=typeof S.fetchPriority=="string"?S.fetchPriority:void 0;q==="style"?d.d.S(R,typeof S.precedence=="string"?S.precedence:void 0,{crossOrigin:A,integrity:C,fetchPriority:J}):q==="script"&&d.d.X(R,{crossOrigin:A,integrity:C,fetchPriority:J,nonce:typeof S.nonce=="string"?S.nonce:void 0})}},ze.preinitModule=function(R,S){if(typeof R=="string")if(typeof S=="object"&&S!==null){if(S.as==null||S.as==="script"){var q=U(S.as,S.crossOrigin);d.d.M(R,{crossOrigin:q,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0})}}else S==null&&d.d.M(R)},ze.preload=function(R,S){if(typeof R=="string"&&typeof S=="object"&&S!==null&&typeof S.as=="string"){var q=S.as,A=U(q,S.crossOrigin);d.d.L(R,q,{crossOrigin:A,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,type:typeof S.type=="string"?S.type:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0,referrerPolicy:typeof S.referrerPolicy=="string"?S.referrerPolicy:void 0,imageSrcSet:typeof S.imageSrcSet=="string"?S.imageSrcSet:void 0,imageSizes:typeof S.imageSizes=="string"?S.imageSizes:void 0,media:typeof S.media=="string"?S.media:void 0})}},ze.preloadModule=function(R,S){if(typeof R=="string")if(S){var q=U(S.as,S.crossOrigin);d.d.m(R,{as:typeof S.as=="string"&&S.as!=="script"?S.as:void 0,crossOrigin:q,integrity:typeof S.integrity=="string"?S.integrity:void 0})}else d.d.m(R)},ze.requestFormReset=function(R){d.d.r(R)},ze.unstable_batchedUpdates=function(R,S){return R(S)},ze.useFormState=function(R,S,q){return L.H.useFormState(R,S,q)},ze.useFormStatus=function(){return L.H.useHostTransitionStatus()},ze.version="19.2.3",ze}var Rh;function Ph(){if(Rh)return Mo.exports;Rh=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(b){console.error(b)}}return c(),Mo.exports=G0(),Mo.exports}var Ch;function Y0(){if(Ch)return Ur;Ch=1;var c=q0(),b=Vo(),g=Ph();function d(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function j(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function z(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function L(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function U(n){if(n.tag===31){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function R(n){if(z(n)!==n)throw Error(d(188))}function S(n){var e=n.alternate;if(!e){if(e=z(n),e===null)throw Error(d(188));return e!==n?null:n}for(var t=n,a=e;;){var r=t.return;if(r===null)break;var l=r.alternate;if(l===null){if(a=r.return,a!==null){t=a;continue}break}if(r.child===l.child){for(l=r.child;l;){if(l===t)return R(r),n;if(l===a)return R(r),e;l=l.sibling}throw Error(d(188))}if(t.return!==a.return)t=r,a=l;else{for(var s=!1,u=r.child;u;){if(u===t){s=!0,t=r,a=l;break}if(u===a){s=!0,a=r,t=l;break}u=u.sibling}if(!s){for(u=l.child;u;){if(u===t){s=!0,t=l,a=r;break}if(u===a){s=!0,a=l,t=r;break}u=u.sibling}if(!s)throw Error(d(189))}}if(t.alternate!==a)throw Error(d(190))}if(t.tag!==3)throw Error(d(188));return t.stateNode.current===t?n:e}function q(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n;for(n=n.child;n!==null;){if(e=q(n),e!==null)return e;n=n.sibling}return null}var A=Object.assign,C=Symbol.for("react.element"),J=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),Q=Symbol.for("react.fragment"),hn=Symbol.for("react.strict_mode"),yn=Symbol.for("react.profiler"),un=Symbol.for("react.consumer"),W=Symbol.for("react.context"),cn=Symbol.for("react.forward_ref"),Dn=Symbol.for("react.suspense"),Rn=Symbol.for("react.suspense_list"),mn=Symbol.for("react.memo"),Fn=Symbol.for("react.lazy"),je=Symbol.for("react.activity"),Be=Symbol.for("react.memo_cache_sentinel"),me=Symbol.iterator;function re(n){return n===null||typeof n!="object"?null:(n=me&&n[me]||n["@@iterator"],typeof n=="function"?n:null)}var Ue=Symbol.for("react.client.reference");function ce(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===Ue?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Q:return"Fragment";case yn:return"Profiler";case hn:return"StrictMode";case Dn:return"Suspense";case Rn:return"SuspenseList";case je:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case H:return"Portal";case W:return n.displayName||"Context";case un:return(n._context.displayName||"Context")+".Consumer";case cn:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case mn:return e=n.displayName||null,e!==null?e:ce(n.type)||"Memo";case Fn:e=n._payload,n=n._init;try{return ce(n(e))}catch{}}return null}var Ee=Array.isArray,w=b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=g.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},jn=[],Nn=-1;function m(n){return{current:n}}function O(n){0>Nn||(n.current=jn[Nn],jn[Nn]=null,Nn--)}function K(n,e){Nn++,jn[Nn]=n.current,n.current=e}var $=m(null),sn=m(null),_n=m(null),bn=m(null);function Ln(n,e){switch(K(_n,e),K(sn,n),K($,null),e.nodeType){case 9:case 11:n=(n=e.documentElement)&&(n=n.namespaceURI)?Zf(n):0;break;default:if(n=e.tagName,e=e.namespaceURI)e=Zf(e),n=If(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}O($),K($,n)}function Wn(){O($),O(sn),O(_n)}function $e(n){n.memoizedState!==null&&K(bn,n);var e=$.current,t=If(e,n.type);e!==t&&(K(sn,n),K($,t))}function St(n){sn.current===n&&(O($),O(sn)),bn.current===n&&(O(bn),Cr._currentValue=F)}var ja,Na;function vt(n){if(ja===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);ja=e&&e[1]||"",Na=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ja+n+Na}var qi=!1;function Hi(n,e){if(!n||qi)return"";qi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(N){var T=N}Reflect.construct(n,[],D)}else{try{D.call()}catch(N){T=N}n.call(D.prototype)}}else{try{throw Error()}catch(N){T=N}(D=n())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(N){if(N&&T&&typeof N.stack=="string")return[N.stack,T.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=a.DetermineComponentFrameRoot(),s=l[0],u=l[1];if(s&&u){var f=s.split(`
`),_=u.split(`
`);for(r=a=0;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;for(;r<_.length&&!_[r].includes("DetermineComponentFrameRoot");)r++;if(a===f.length||r===_.length)for(a=f.length-1,r=_.length-1;1<=a&&0<=r&&f[a]!==_[r];)r--;for(;1<=a&&0<=r;a--,r--)if(f[a]!==_[r]){if(a!==1||r!==1)do if(a--,r--,0>r||f[a]!==_[r]){var E=`
`+f[a].replace(" at new "," at ");return n.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",n.displayName)),E}while(1<=a&&0<=r);break}}}finally{qi=!1,Error.prepareStackTrace=t}return(t=n?n.displayName||n.name:"")?vt(t):""}function vs(n,e){switch(n.tag){case 26:case 27:case 5:return vt(n.type);case 16:return vt("Lazy");case 13:return n.child!==e&&e!==null?vt("Suspense Fallback"):vt("Suspense");case 19:return vt("SuspenseList");case 0:case 15:return Hi(n.type,!1);case 11:return Hi(n.type.render,!1);case 1:return Hi(n.type,!0);case 31:return vt("Activity");default:return""}}function Vr(n){try{var e="",t=null;do e+=vs(n,t),t=n,n=n.return;while(n);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Gi=Object.prototype.hasOwnProperty,Wa=c.unstable_scheduleCallback,Yi=c.unstable_cancelCallback,ys=c.unstable_shouldYield,Kr=c.unstable_requestPaint,oe=c.unstable_now,Xr=c.unstable_getCurrentPriorityLevel,Ot=c.unstable_ImmediatePriority,wa=c.unstable_UserBlockingPriority,Ea=c.unstable_NormalPriority,xs=c.unstable_LowPriority,Qr=c.unstable_IdlePriority,_s=c.log,Ss=c.unstable_setDisableYieldValue,Aa=null,Ce=null;function Tt(n){if(typeof _s=="function"&&Ss(n),Ce&&typeof Ce.setStrictMode=="function")try{Ce.setStrictMode(Aa,n)}catch{}}var qe=Math.clz32?Math.clz32:Jr,Ts=Math.log,Vi=Math.LN2;function Jr(n){return n>>>=0,n===0?32:31-(Ts(n)/Vi|0)|0}var Oa=256,Pa=262144,ka=4194304;function Ke(n){var e=n&42;if(e!==0)return e;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function h(n,e,t){var a=n.pendingLanes;if(a===0)return 0;var r=0,l=n.suspendedLanes,s=n.pingedLanes;n=n.warmLanes;var u=a&134217727;return u!==0?(a=u&~l,a!==0?r=Ke(a):(s&=u,s!==0?r=Ke(s):t||(t=u&~n,t!==0&&(r=Ke(t))))):(u=a&~l,u!==0?r=Ke(u):s!==0?r=Ke(s):t||(t=a&~n,t!==0&&(r=Ke(t)))),r===0?0:e!==0&&e!==r&&(e&l)===0&&(l=r&-r,t=e&-e,l>=t||l===32&&(t&4194048)!==0)?e:r}function k(n,e){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&e)===0}function X(n,e){switch(n){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pn(){var n=ka;return ka<<=1,(ka&62914560)===0&&(ka=4194304),n}function $n(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Zn(n,e){n.pendingLanes|=e,e!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function en(n,e,t,a,r,l){var s=n.pendingLanes;n.pendingLanes=t,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=t,n.entangledLanes&=t,n.errorRecoveryDisabledLanes&=t,n.shellSuspendCounter=0;var u=n.entanglements,f=n.expirationTimes,_=n.hiddenUpdates;for(t=s&~t;0<t;){var E=31-qe(t),D=1<<E;u[E]=0,f[E]=-1;var T=_[E];if(T!==null)for(_[E]=null,E=0;E<T.length;E++){var N=T[E];N!==null&&(N.lane&=-536870913)}t&=~D}a!==0&&P(n,a,0),l!==0&&r===0&&n.tag!==0&&(n.suspendedLanes|=l&~(s&~e))}function P(n,e,t){n.pendingLanes|=e,n.suspendedLanes&=~e;var a=31-qe(e);n.entangledLanes|=e,n.entanglements[a]=n.entanglements[a]|1073741824|t&261930}function fn(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var a=31-qe(t),r=1<<a;r&e|n[a]&e&&(n[a]|=e),t&=~r}}function ue(n,e){var t=e&-e;return t=(t&42)!==0?1:te(t),(t&(n.suspendedLanes|e))!==0?0:t}function te(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function kt(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function $a(){var n=V.p;return n!==0?n:(n=window.event,n===void 0?32:vh(n.type))}function ni(n,e){var t=V.p;try{return V.p=n,e()}finally{V.p=t}}var jt=Math.random().toString(36).slice(2),de="__reactFiber$"+jt,De="__reactProps$"+jt,Ft="__reactContainer$"+jt,Ki="__reactEvents$"+jt,Zr="__reactListeners$"+jt,ei="__reactHandles$"+jt,Ir="__reactResources$"+jt,Ma="__reactMarker$"+jt;function Xi(n){delete n[de],delete n[De],delete n[Ki],delete n[Zr],delete n[ei]}function He(n){var e=n[de];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Ft]||t[de]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=th(n);n!==null;){if(t=n[de])return t;n=th(n)}return e}n=t,t=n.parentNode}return null}function Mt(n){if(n=n[de]||n[Ft]){var e=n.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return n}return null}function Wt(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n.stateNode;throw Error(d(33))}function Pt(n){var e=n[Ir];return e||(e=n[Ir]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function be(n){n[Ma]=!0}var Fr=new Set,Ra={};function Rt(n,e){B(n,e),B(n+"Capture",e)}function B(n,e){for(Ra[n]=e,n=0;n<e.length;n++)Fr.add(e[n])}var rn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),wn={},Gn={};function fe(n){return Gi.call(Gn,n)?!0:Gi.call(wn,n)?!1:rn.test(n)?Gn[n]=!0:(wn[n]=!0,!1)}function Le(n,e,t){if(fe(e))if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":n.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){n.removeAttribute(e);return}}n.setAttribute(e,""+t)}}function nt(n,e,t){if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttribute(e,""+t)}}function Xe(n,e,t,a){if(a===null)n.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttributeNS(e,t,""+a)}}function Pn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function et(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Wr(n,e,t){var a=Object.getOwnPropertyDescriptor(n.constructor.prototype,e);if(!n.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var r=a.get,l=a.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){t=""+s,l.call(this,s)}}),Object.defineProperty(n,e,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(s){t=""+s},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ti(n){if(!n._valueTracker){var e=et(n)?"checked":"value";n._valueTracker=Wr(n,e,""+n[e])}}function Qi(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),a="";return n&&(a=et(n)?n.checked?"true":"false":n.value),n=a,n!==t?(e.setValue(n),!0):!1}function ai(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var js=/[\n"\\]/g;function Qe(n){return n.replace(js,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Ji(n,e,t,a,r,l,s,u){n.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?n.type=s:n.removeAttribute("type"),e!=null?s==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+Pn(e)):n.value!==""+Pn(e)&&(n.value=""+Pn(e)):s!=="submit"&&s!=="reset"||n.removeAttribute("value"),e!=null?ii(n,s,Pn(e)):t!=null?ii(n,s,Pn(t)):a!=null&&n.removeAttribute("value"),r==null&&l!=null&&(n.defaultChecked=!!l),r!=null&&(n.checked=r&&typeof r!="function"&&typeof r!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?n.name=""+Pn(u):n.removeAttribute("name")}function Ca(n,e,t,a,r,l,s,u){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(n.type=l),e!=null||t!=null){if(!(l!=="submit"&&l!=="reset"||e!=null)){ti(n);return}t=t!=null?""+Pn(t):"",e=e!=null?""+Pn(e):t,u||e===n.value||(n.value=e),n.defaultValue=e}a=a??r,a=typeof a!="function"&&typeof a!="symbol"&&!!a,n.checked=u?n.checked:!!a,n.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(n.name=s),ti(n)}function ii(n,e,t){e==="number"&&ai(n.ownerDocument)===n||n.defaultValue===""+t||(n.defaultValue=""+t)}function Ae(n,e,t,a){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&a&&(n[t].defaultSelected=!0)}else{for(t=""+Pn(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,a&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Pr(n,e,t){if(e!=null&&(e=""+Pn(e),e!==n.value&&(n.value=e),t==null)){n.defaultValue!==e&&(n.defaultValue=e);return}n.defaultValue=t!=null?""+Pn(t):""}function ri(n,e,t,a){if(e==null){if(a!=null){if(t!=null)throw Error(d(92));if(Ee(a)){if(1<a.length)throw Error(d(93));a=a[0]}t=a}t==null&&(t=""),e=t}t=Pn(e),n.defaultValue=t,a=n.textContent,a===t&&a!==""&&a!==null&&(n.value=a),ti(n)}function dn(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var $r=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ve(n,e,t){var a=e.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?n.setProperty(e,""):e==="float"?n.cssFloat="":n[e]="":a?n.setProperty(e,t):typeof t!="number"||t===0||$r.has(e)?e==="float"?n.cssFloat=t:n[e]=(""+t).trim():n[e]=t+"px"}function Yn(n,e,t){if(e!=null&&typeof e!="object")throw Error(d(62));if(n=n.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="");for(var r in e)a=e[r],e.hasOwnProperty(r)&&t[r]!==a&&ve(n,r,a)}else for(var l in e)e.hasOwnProperty(l)&&ve(n,l,e[l])}function $t(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ct=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zi=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function na(n){return Zi.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function G(){}var tn=null;function xn(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var On=null,ie=null;function ot(n){var e=Mt(n);if(e&&(n=e.stateNode)){var t=n[De]||null;n:switch(n=e.stateNode,e.type){case"input":if(Ji(n,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Qe(""+e)+'"][type="radio"]'),e=0;e<t.length;e++){var a=t[e];if(a!==n&&a.form===n.form){var r=a[De]||null;if(!r)throw Error(d(90));Ji(a,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(e=0;e<t.length;e++)a=t[e],a.form===n.form&&Qi(a)}break n;case"textarea":Pr(n,t.value,t.defaultValue);break n;case"select":e=t.value,e!=null&&Ae(n,!!t.multiple,e,!1)}}}var Ii=!1;function nl(n,e,t){if(Ii)return n(e,t);Ii=!0;try{var a=n(e);return a}finally{if(Ii=!1,(On!==null||ie!==null)&&(Gl(),On&&(e=On,n=ie,ie=On=null,ot(e),n)))for(e=0;e<n.length;e++)ot(n[e])}}function Fi(n,e){var t=n.stateNode;if(t===null)return null;var a=t[De]||null;if(a===null)return null;t=a[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(n=n.type,a=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!a;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(d(231,e,typeof t));return t}var Dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ns=!1;if(Dt)try{var Wi={};Object.defineProperty(Wi,"passive",{get:function(){Ns=!0}}),window.addEventListener("test",Wi,Wi),window.removeEventListener("test",Wi,Wi)}catch{Ns=!1}var ea=null,ws=null,el=null;function Zo(){if(el)return el;var n,e=ws,t=e.length,a,r="value"in ea?ea.value:ea.textContent,l=r.length;for(n=0;n<t&&e[n]===r[n];n++);var s=t-n;for(a=1;a<=s&&e[t-a]===r[l-a];a++);return el=r.slice(n,1<a?1-a:void 0)}function tl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function al(){return!0}function Io(){return!1}function Je(n){function e(t,a,r,l,s){this._reactName=t,this._targetInst=r,this.type=a,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var u in n)n.hasOwnProperty(u)&&(t=n[u],this[u]=t?t(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?al:Io,this.isPropagationStopped=Io,this}return A(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),e}var Da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},il=Je(Da),Pi=A({},Da,{view:0,detail:0}),Db=Je(Pi),Es,As,$i,rl=A({},Pi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ks,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==$i&&($i&&n.type==="mousemove"?(Es=n.screenX-$i.screenX,As=n.screenY-$i.screenY):As=Es=0,$i=n),Es)},movementY:function(n){return"movementY"in n?n.movementY:As}}),Fo=Je(rl),Lb=A({},rl,{dataTransfer:0}),zb=Je(Lb),Bb=A({},Pi,{relatedTarget:0}),Os=Je(Bb),Ub=A({},Da,{animationName:0,elapsedTime:0,pseudoElement:0}),qb=Je(Ub),Hb=A({},Da,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Gb=Je(Hb),Yb=A({},Da,{data:0}),Wo=Je(Yb),Vb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qb(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Xb[n])?!!e[n]:!1}function ks(){return Qb}var Jb=A({},Pi,{key:function(n){if(n.key){var e=Vb[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=tl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Kb[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ks,charCode:function(n){return n.type==="keypress"?tl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?tl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Zb=Je(Jb),Ib=A({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Po=Je(Ib),Fb=A({},Pi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ks}),Wb=Je(Fb),Pb=A({},Da,{propertyName:0,elapsedTime:0,pseudoElement:0}),$b=Je(Pb),n1=A({},rl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),e1=Je(n1),t1=A({},Da,{newState:0,oldState:0}),a1=Je(t1),i1=[9,13,27,32],Ms=Dt&&"CompositionEvent"in window,nr=null;Dt&&"documentMode"in document&&(nr=document.documentMode);var r1=Dt&&"TextEvent"in window&&!nr,$o=Dt&&(!Ms||nr&&8<nr&&11>=nr),nu=" ",eu=!1;function tu(n,e){switch(n){case"keyup":return i1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function au(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var li=!1;function l1(n,e){switch(n){case"compositionend":return au(e);case"keypress":return e.which!==32?null:(eu=!0,nu);case"textInput":return n=e.data,n===nu&&eu?null:n;default:return null}}function s1(n,e){if(li)return n==="compositionend"||!Ms&&tu(n,e)?(n=Zo(),el=ws=ea=null,li=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return $o&&e.locale!=="ko"?null:e.data;default:return null}}var c1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function iu(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!c1[n.type]:e==="textarea"}function ru(n,e,t,a){On?ie?ie.push(a):ie=[a]:On=a,e=Zl(e,"onChange"),0<e.length&&(t=new il("onChange","change",null,t,a),n.push({event:t,listeners:e}))}var er=null,tr=null;function o1(n){Yf(n,0)}function ll(n){var e=Wt(n);if(Qi(e))return n}function lu(n,e){if(n==="change")return e}var su=!1;if(Dt){var Rs;if(Dt){var Cs="oninput"in document;if(!Cs){var cu=document.createElement("div");cu.setAttribute("oninput","return;"),Cs=typeof cu.oninput=="function"}Rs=Cs}else Rs=!1;su=Rs&&(!document.documentMode||9<document.documentMode)}function ou(){er&&(er.detachEvent("onpropertychange",uu),tr=er=null)}function uu(n){if(n.propertyName==="value"&&ll(tr)){var e=[];ru(e,tr,n,xn(n)),nl(o1,e)}}function u1(n,e,t){n==="focusin"?(ou(),er=e,tr=t,er.attachEvent("onpropertychange",uu)):n==="focusout"&&ou()}function d1(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ll(tr)}function f1(n,e){if(n==="click")return ll(e)}function h1(n,e){if(n==="input"||n==="change")return ll(e)}function p1(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var tt=typeof Object.is=="function"?Object.is:p1;function ar(n,e){if(tt(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),a=Object.keys(e);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var r=t[a];if(!Gi.call(e,r)||!tt(n[r],e[r]))return!1}return!0}function du(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function fu(n,e){var t=du(n);n=0;for(var a;t;){if(t.nodeType===3){if(a=n+t.textContent.length,n<=e&&a>=e)return{node:t,offset:e-n};n=a}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=du(t)}}function hu(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?hu(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function pu(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var e=ai(n.document);e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=ai(n.document)}return e}function Ds(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}var g1=Dt&&"documentMode"in document&&11>=document.documentMode,si=null,Ls=null,ir=null,zs=!1;function gu(n,e,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;zs||si==null||si!==ai(a)||(a=si,"selectionStart"in a&&Ds(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ir&&ar(ir,a)||(ir=a,a=Zl(Ls,"onSelect"),0<a.length&&(e=new il("onSelect","select",null,e,t),n.push({event:e,listeners:a}),e.target=si)))}function La(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ci={animationend:La("Animation","AnimationEnd"),animationiteration:La("Animation","AnimationIteration"),animationstart:La("Animation","AnimationStart"),transitionrun:La("Transition","TransitionRun"),transitionstart:La("Transition","TransitionStart"),transitioncancel:La("Transition","TransitionCancel"),transitionend:La("Transition","TransitionEnd")},Bs={},mu={};Dt&&(mu=document.createElement("div").style,"AnimationEvent"in window||(delete ci.animationend.animation,delete ci.animationiteration.animation,delete ci.animationstart.animation),"TransitionEvent"in window||delete ci.transitionend.transition);function za(n){if(Bs[n])return Bs[n];if(!ci[n])return n;var e=ci[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in mu)return Bs[n]=e[t];return n}var bu=za("animationend"),vu=za("animationiteration"),yu=za("animationstart"),m1=za("transitionrun"),b1=za("transitionstart"),v1=za("transitioncancel"),xu=za("transitionend"),_u=new Map,Us="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Us.push("scrollEnd");function yt(n,e){_u.set(n,e),Rt(e,[n])}var sl=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},ut=[],oi=0,qs=0;function cl(){for(var n=oi,e=qs=oi=0;e<n;){var t=ut[e];ut[e++]=null;var a=ut[e];ut[e++]=null;var r=ut[e];ut[e++]=null;var l=ut[e];if(ut[e++]=null,a!==null&&r!==null){var s=a.pending;s===null?r.next=r:(r.next=s.next,s.next=r),a.pending=r}l!==0&&Su(t,r,l)}}function ol(n,e,t,a){ut[oi++]=n,ut[oi++]=e,ut[oi++]=t,ut[oi++]=a,qs|=a,n.lanes|=a,n=n.alternate,n!==null&&(n.lanes|=a)}function Hs(n,e,t,a){return ol(n,e,t,a),ul(n)}function Ba(n,e){return ol(n,null,null,e),ul(n)}function Su(n,e,t){n.lanes|=t;var a=n.alternate;a!==null&&(a.lanes|=t);for(var r=!1,l=n.return;l!==null;)l.childLanes|=t,a=l.alternate,a!==null&&(a.childLanes|=t),l.tag===22&&(n=l.stateNode,n===null||n._visibility&1||(r=!0)),n=l,l=l.return;return n.tag===3?(l=n.stateNode,r&&e!==null&&(r=31-qe(t),n=l.hiddenUpdates,a=n[r],a===null?n[r]=[e]:a.push(e),e.lane=t|536870912),l):null}function ul(n){if(50<wr)throw wr=0,Ic=null,Error(d(185));for(var e=n.return;e!==null;)n=e,e=n.return;return n.tag===3?n.stateNode:null}var ui={};function y1(n,e,t,a){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(n,e,t,a){return new y1(n,e,t,a)}function Gs(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Lt(n,e){var t=n.alternate;return t===null?(t=at(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&65011712,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t.refCleanup=n.refCleanup,t}function Tu(n,e){n.flags&=65011714;var t=n.alternate;return t===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,n.type=t.type,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n}function dl(n,e,t,a,r,l){var s=0;if(a=n,typeof n=="function")Gs(n)&&(s=1);else if(typeof n=="string")s=j0(n,t,$.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case je:return n=at(31,t,e,r),n.elementType=je,n.lanes=l,n;case Q:return Ua(t.children,r,l,e);case hn:s=8,r|=24;break;case yn:return n=at(12,t,e,r|2),n.elementType=yn,n.lanes=l,n;case Dn:return n=at(13,t,e,r),n.elementType=Dn,n.lanes=l,n;case Rn:return n=at(19,t,e,r),n.elementType=Rn,n.lanes=l,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case W:s=10;break n;case un:s=9;break n;case cn:s=11;break n;case mn:s=14;break n;case Fn:s=16,a=null;break n}s=29,t=Error(d(130,n===null?"null":typeof n,"")),a=null}return e=at(s,t,e,r),e.elementType=n,e.type=a,e.lanes=l,e}function Ua(n,e,t,a){return n=at(7,n,a,e),n.lanes=t,n}function Ys(n,e,t){return n=at(6,n,null,e),n.lanes=t,n}function ju(n){var e=at(18,null,null,0);return e.stateNode=n,e}function Vs(n,e,t){return e=at(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}var Nu=new WeakMap;function dt(n,e){if(typeof n=="object"&&n!==null){var t=Nu.get(n);return t!==void 0?t:(e={value:n,source:e,stack:Vr(e)},Nu.set(n,e),e)}return{value:n,source:e,stack:Vr(e)}}var di=[],fi=0,fl=null,rr=0,ft=[],ht=0,ta=null,Nt=1,wt="";function zt(n,e){di[fi++]=rr,di[fi++]=fl,fl=n,rr=e}function wu(n,e,t){ft[ht++]=Nt,ft[ht++]=wt,ft[ht++]=ta,ta=n;var a=Nt;n=wt;var r=32-qe(a)-1;a&=~(1<<r),t+=1;var l=32-qe(e)+r;if(30<l){var s=r-r%5;l=(a&(1<<s)-1).toString(32),a>>=s,r-=s,Nt=1<<32-qe(e)+r|t<<r|a,wt=l+n}else Nt=1<<l|t<<r|a,wt=n}function Ks(n){n.return!==null&&(zt(n,1),wu(n,1,0))}function Xs(n){for(;n===fl;)fl=di[--fi],di[fi]=null,rr=di[--fi],di[fi]=null;for(;n===ta;)ta=ft[--ht],ft[ht]=null,wt=ft[--ht],ft[ht]=null,Nt=ft[--ht],ft[ht]=null}function Eu(n,e){ft[ht++]=Nt,ft[ht++]=wt,ft[ht++]=ta,Nt=e.id,wt=e.overflow,ta=n}var Oe=null,ne=null,Cn=!1,aa=null,pt=!1,Qs=Error(d(519));function ia(n){var e=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw lr(dt(e,n)),Qs}function Au(n){var e=n.stateNode,t=n.type,a=n.memoizedProps;switch(e[de]=n,e[De]=a,t){case"dialog":An("cancel",e),An("close",e);break;case"iframe":case"object":case"embed":An("load",e);break;case"video":case"audio":for(t=0;t<Ar.length;t++)An(Ar[t],e);break;case"source":An("error",e);break;case"img":case"image":case"link":An("error",e),An("load",e);break;case"details":An("toggle",e);break;case"input":An("invalid",e),Ca(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":An("invalid",e);break;case"textarea":An("invalid",e),ri(e,a.value,a.defaultValue,a.children)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||e.textContent===""+t||a.suppressHydrationWarning===!0||Qf(e.textContent,t)?(a.popover!=null&&(An("beforetoggle",e),An("toggle",e)),a.onScroll!=null&&An("scroll",e),a.onScrollEnd!=null&&An("scrollend",e),a.onClick!=null&&(e.onclick=G),e=!0):e=!1,e||ia(n,!0)}function Ou(n){for(Oe=n.return;Oe;)switch(Oe.tag){case 5:case 31:case 13:pt=!1;return;case 27:case 3:pt=!0;return;default:Oe=Oe.return}}function hi(n){if(n!==Oe)return!1;if(!Cn)return Ou(n),Cn=!0,!1;var e=n.tag,t;if((t=e!==3&&e!==27)&&((t=e===5)&&(t=n.type,t=!(t!=="form"&&t!=="button")||uo(n.type,n.memoizedProps)),t=!t),t&&ne&&ia(n),Ou(n),e===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));ne=eh(n)}else if(e===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));ne=eh(n)}else e===27?(e=ne,va(n.type)?(n=mo,mo=null,ne=n):ne=e):ne=Oe?mt(n.stateNode.nextSibling):null;return!0}function qa(){ne=Oe=null,Cn=!1}function Js(){var n=aa;return n!==null&&(We===null?We=n:We.push.apply(We,n),aa=null),n}function lr(n){aa===null?aa=[n]:aa.push(n)}var Zs=m(null),Ha=null,Bt=null;function ra(n,e,t){K(Zs,e._currentValue),e._currentValue=t}function Ut(n){n._currentValue=Zs.current,O(Zs)}function Is(n,e,t){for(;n!==null;){var a=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),n===t)break;n=n.return}}function Fs(n,e,t,a){var r=n.child;for(r!==null&&(r.return=n);r!==null;){var l=r.dependencies;if(l!==null){var s=r.child;l=l.firstContext;n:for(;l!==null;){var u=l;l=r;for(var f=0;f<e.length;f++)if(u.context===e[f]){l.lanes|=t,u=l.alternate,u!==null&&(u.lanes|=t),Is(l.return,t,n),a||(s=null);break n}l=u.next}}else if(r.tag===18){if(s=r.return,s===null)throw Error(d(341));s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Is(s,t,n),s=null}else s=r.child;if(s!==null)s.return=r;else for(s=r;s!==null;){if(s===n){s=null;break}if(r=s.sibling,r!==null){r.return=s.return,s=r;break}s=s.return}r=s}}function pi(n,e,t,a){n=null;for(var r=e,l=!1;r!==null;){if(!l){if((r.flags&524288)!==0)l=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var s=r.alternate;if(s===null)throw Error(d(387));if(s=s.memoizedProps,s!==null){var u=r.type;tt(r.pendingProps.value,s.value)||(n!==null?n.push(u):n=[u])}}else if(r===bn.current){if(s=r.alternate,s===null)throw Error(d(387));s.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(n!==null?n.push(Cr):n=[Cr])}r=r.return}n!==null&&Fs(e,n,t,a),e.flags|=262144}function hl(n){for(n=n.firstContext;n!==null;){if(!tt(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ga(n){Ha=n,Bt=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function ke(n){return ku(Ha,n)}function pl(n,e){return Ha===null&&Ga(n),ku(n,e)}function ku(n,e){var t=e._currentValue;if(e={context:e,memoizedValue:t,next:null},Bt===null){if(n===null)throw Error(d(308));Bt=e,n.dependencies={lanes:0,firstContext:e},n.flags|=524288}else Bt=Bt.next=e;return t}var x1=typeof AbortController<"u"?AbortController:function(){var n=[],e=this.signal={aborted:!1,addEventListener:function(t,a){n.push(a)}};this.abort=function(){e.aborted=!0,n.forEach(function(t){return t()})}},_1=c.unstable_scheduleCallback,S1=c.unstable_NormalPriority,ye={$$typeof:W,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ws(){return{controller:new x1,data:new Map,refCount:0}}function sr(n){n.refCount--,n.refCount===0&&_1(S1,function(){n.controller.abort()})}var cr=null,Ps=0,gi=0,mi=null;function T1(n,e){if(cr===null){var t=cr=[];Ps=0,gi=eo(),mi={status:"pending",value:void 0,then:function(a){t.push(a)}}}return Ps++,e.then(Mu,Mu),e}function Mu(){if(--Ps===0&&cr!==null){mi!==null&&(mi.status="fulfilled");var n=cr;cr=null,gi=0,mi=null;for(var e=0;e<n.length;e++)(0,n[e])()}}function j1(n,e){var t=[],a={status:"pending",value:null,reason:null,then:function(r){t.push(r)}};return n.then(function(){a.status="fulfilled",a.value=e;for(var r=0;r<t.length;r++)(0,t[r])(e)},function(r){for(a.status="rejected",a.reason=r,r=0;r<t.length;r++)(0,t[r])(void 0)}),a}var Ru=w.S;w.S=function(n,e){mf=oe(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&T1(n,e),Ru!==null&&Ru(n,e)};var Ya=m(null);function $s(){var n=Ya.current;return n!==null?n:In.pooledCache}function gl(n,e){e===null?K(Ya,Ya.current):K(Ya,e.pool)}function Cu(){var n=$s();return n===null?null:{parent:ye._currentValue,pool:n}}var bi=Error(d(460)),nc=Error(d(474)),ml=Error(d(542)),bl={then:function(){}};function Du(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Lu(n,e,t){switch(t=n[t],t===void 0?n.push(e):t!==e&&(e.then(G,G),e=t),e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,Bu(n),n;default:if(typeof e.status=="string")e.then(G,G);else{if(n=In,n!==null&&100<n.shellSuspendCounter)throw Error(d(482));n=e,n.status="pending",n.then(function(a){if(e.status==="pending"){var r=e;r.status="fulfilled",r.value=a}},function(a){if(e.status==="pending"){var r=e;r.status="rejected",r.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,Bu(n),n}throw Ka=e,bi}}function Va(n){try{var e=n._init;return e(n._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Ka=t,bi):t}}var Ka=null;function zu(){if(Ka===null)throw Error(d(459));var n=Ka;return Ka=null,n}function Bu(n){if(n===bi||n===ml)throw Error(d(483))}var vi=null,or=0;function vl(n){var e=or;return or+=1,vi===null&&(vi=[]),Lu(vi,n,e)}function ur(n,e){e=e.props.ref,n.ref=e!==void 0?e:null}function yl(n,e){throw e.$$typeof===C?Error(d(525)):(n=Object.prototype.toString.call(e),Error(d(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)))}function Uu(n){function e(y,v){if(n){var x=y.deletions;x===null?(y.deletions=[v],y.flags|=16):x.push(v)}}function t(y,v){if(!n)return null;for(;v!==null;)e(y,v),v=v.sibling;return null}function a(y){for(var v=new Map;y!==null;)y.key!==null?v.set(y.key,y):v.set(y.index,y),y=y.sibling;return v}function r(y,v){return y=Lt(y,v),y.index=0,y.sibling=null,y}function l(y,v,x){return y.index=x,n?(x=y.alternate,x!==null?(x=x.index,x<v?(y.flags|=67108866,v):x):(y.flags|=67108866,v)):(y.flags|=1048576,v)}function s(y){return n&&y.alternate===null&&(y.flags|=67108866),y}function u(y,v,x,M){return v===null||v.tag!==6?(v=Ys(x,y.mode,M),v.return=y,v):(v=r(v,x),v.return=y,v)}function f(y,v,x,M){var ln=x.type;return ln===Q?E(y,v,x.props.children,M,x.key):v!==null&&(v.elementType===ln||typeof ln=="object"&&ln!==null&&ln.$$typeof===Fn&&Va(ln)===v.type)?(v=r(v,x.props),ur(v,x),v.return=y,v):(v=dl(x.type,x.key,x.props,null,y.mode,M),ur(v,x),v.return=y,v)}function _(y,v,x,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Vs(x,y.mode,M),v.return=y,v):(v=r(v,x.children||[]),v.return=y,v)}function E(y,v,x,M,ln){return v===null||v.tag!==7?(v=Ua(x,y.mode,M,ln),v.return=y,v):(v=r(v,x),v.return=y,v)}function D(y,v,x){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Ys(""+v,y.mode,x),v.return=y,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case J:return x=dl(v.type,v.key,v.props,null,y.mode,x),ur(x,v),x.return=y,x;case H:return v=Vs(v,y.mode,x),v.return=y,v;case Fn:return v=Va(v),D(y,v,x)}if(Ee(v)||re(v))return v=Ua(v,y.mode,x,null),v.return=y,v;if(typeof v.then=="function")return D(y,vl(v),x);if(v.$$typeof===W)return D(y,pl(y,v),x);yl(y,v)}return null}function T(y,v,x,M){var ln=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return ln!==null?null:u(y,v,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case J:return x.key===ln?f(y,v,x,M):null;case H:return x.key===ln?_(y,v,x,M):null;case Fn:return x=Va(x),T(y,v,x,M)}if(Ee(x)||re(x))return ln!==null?null:E(y,v,x,M,null);if(typeof x.then=="function")return T(y,v,vl(x),M);if(x.$$typeof===W)return T(y,v,pl(y,x),M);yl(y,x)}return null}function N(y,v,x,M,ln){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return y=y.get(x)||null,u(v,y,""+M,ln);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case J:return y=y.get(M.key===null?x:M.key)||null,f(v,y,M,ln);case H:return y=y.get(M.key===null?x:M.key)||null,_(v,y,M,ln);case Fn:return M=Va(M),N(y,v,x,M,ln)}if(Ee(M)||re(M))return y=y.get(x)||null,E(v,y,M,ln,null);if(typeof M.then=="function")return N(y,v,x,vl(M),ln);if(M.$$typeof===W)return N(y,v,x,pl(v,M),ln);yl(v,M)}return null}function nn(y,v,x,M){for(var ln=null,zn=null,an=v,Tn=v=0,Mn=null;an!==null&&Tn<x.length;Tn++){an.index>Tn?(Mn=an,an=null):Mn=an.sibling;var Bn=T(y,an,x[Tn],M);if(Bn===null){an===null&&(an=Mn);break}n&&an&&Bn.alternate===null&&e(y,an),v=l(Bn,v,Tn),zn===null?ln=Bn:zn.sibling=Bn,zn=Bn,an=Mn}if(Tn===x.length)return t(y,an),Cn&&zt(y,Tn),ln;if(an===null){for(;Tn<x.length;Tn++)an=D(y,x[Tn],M),an!==null&&(v=l(an,v,Tn),zn===null?ln=an:zn.sibling=an,zn=an);return Cn&&zt(y,Tn),ln}for(an=a(an);Tn<x.length;Tn++)Mn=N(an,y,Tn,x[Tn],M),Mn!==null&&(n&&Mn.alternate!==null&&an.delete(Mn.key===null?Tn:Mn.key),v=l(Mn,v,Tn),zn===null?ln=Mn:zn.sibling=Mn,zn=Mn);return n&&an.forEach(function(Ta){return e(y,Ta)}),Cn&&zt(y,Tn),ln}function on(y,v,x,M){if(x==null)throw Error(d(151));for(var ln=null,zn=null,an=v,Tn=v=0,Mn=null,Bn=x.next();an!==null&&!Bn.done;Tn++,Bn=x.next()){an.index>Tn?(Mn=an,an=null):Mn=an.sibling;var Ta=T(y,an,Bn.value,M);if(Ta===null){an===null&&(an=Mn);break}n&&an&&Ta.alternate===null&&e(y,an),v=l(Ta,v,Tn),zn===null?ln=Ta:zn.sibling=Ta,zn=Ta,an=Mn}if(Bn.done)return t(y,an),Cn&&zt(y,Tn),ln;if(an===null){for(;!Bn.done;Tn++,Bn=x.next())Bn=D(y,Bn.value,M),Bn!==null&&(v=l(Bn,v,Tn),zn===null?ln=Bn:zn.sibling=Bn,zn=Bn);return Cn&&zt(y,Tn),ln}for(an=a(an);!Bn.done;Tn++,Bn=x.next())Bn=N(an,y,Tn,Bn.value,M),Bn!==null&&(n&&Bn.alternate!==null&&an.delete(Bn.key===null?Tn:Bn.key),v=l(Bn,v,Tn),zn===null?ln=Bn:zn.sibling=Bn,zn=Bn);return n&&an.forEach(function(L0){return e(y,L0)}),Cn&&zt(y,Tn),ln}function Jn(y,v,x,M){if(typeof x=="object"&&x!==null&&x.type===Q&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case J:n:{for(var ln=x.key;v!==null;){if(v.key===ln){if(ln=x.type,ln===Q){if(v.tag===7){t(y,v.sibling),M=r(v,x.props.children),M.return=y,y=M;break n}}else if(v.elementType===ln||typeof ln=="object"&&ln!==null&&ln.$$typeof===Fn&&Va(ln)===v.type){t(y,v.sibling),M=r(v,x.props),ur(M,x),M.return=y,y=M;break n}t(y,v);break}else e(y,v);v=v.sibling}x.type===Q?(M=Ua(x.props.children,y.mode,M,x.key),M.return=y,y=M):(M=dl(x.type,x.key,x.props,null,y.mode,M),ur(M,x),M.return=y,y=M)}return s(y);case H:n:{for(ln=x.key;v!==null;){if(v.key===ln)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(y,v.sibling),M=r(v,x.children||[]),M.return=y,y=M;break n}else{t(y,v);break}else e(y,v);v=v.sibling}M=Vs(x,y.mode,M),M.return=y,y=M}return s(y);case Fn:return x=Va(x),Jn(y,v,x,M)}if(Ee(x))return nn(y,v,x,M);if(re(x)){if(ln=re(x),typeof ln!="function")throw Error(d(150));return x=ln.call(x),on(y,v,x,M)}if(typeof x.then=="function")return Jn(y,v,vl(x),M);if(x.$$typeof===W)return Jn(y,v,pl(y,x),M);yl(y,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,v!==null&&v.tag===6?(t(y,v.sibling),M=r(v,x),M.return=y,y=M):(t(y,v),M=Ys(x,y.mode,M),M.return=y,y=M),s(y)):t(y,v)}return function(y,v,x,M){try{or=0;var ln=Jn(y,v,x,M);return vi=null,ln}catch(an){if(an===bi||an===ml)throw an;var zn=at(29,an,null,y.mode);return zn.lanes=M,zn.return=y,zn}}}var Xa=Uu(!0),qu=Uu(!1),la=!1;function ec(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function tc(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function sa(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function ca(n,e,t){var a=n.updateQueue;if(a===null)return null;if(a=a.shared,(Un&2)!==0){var r=a.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),a.pending=e,e=ul(n),Su(n,null,t),e}return ol(n,a,e,t),ul(n)}function dr(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194048)!==0)){var a=e.lanes;a&=n.pendingLanes,t|=a,e.lanes=t,fn(n,t)}}function ac(n,e){var t=n.updateQueue,a=n.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var r=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var s={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};l===null?r=l=s:l=l.next=s,t=t.next}while(t!==null);l===null?r=l=e:l=l.next=e}else r=l=e;t={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:l,shared:a.shared,callbacks:a.callbacks},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}var ic=!1;function fr(){if(ic){var n=mi;if(n!==null)throw n}}function hr(n,e,t,a){ic=!1;var r=n.updateQueue;la=!1;var l=r.firstBaseUpdate,s=r.lastBaseUpdate,u=r.shared.pending;if(u!==null){r.shared.pending=null;var f=u,_=f.next;f.next=null,s===null?l=_:s.next=_,s=f;var E=n.alternate;E!==null&&(E=E.updateQueue,u=E.lastBaseUpdate,u!==s&&(u===null?E.firstBaseUpdate=_:u.next=_,E.lastBaseUpdate=f))}if(l!==null){var D=r.baseState;s=0,E=_=f=null,u=l;do{var T=u.lane&-536870913,N=T!==u.lane;if(N?(kn&T)===T:(a&T)===T){T!==0&&T===gi&&(ic=!0),E!==null&&(E=E.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});n:{var nn=n,on=u;T=e;var Jn=t;switch(on.tag){case 1:if(nn=on.payload,typeof nn=="function"){D=nn.call(Jn,D,T);break n}D=nn;break n;case 3:nn.flags=nn.flags&-65537|128;case 0:if(nn=on.payload,T=typeof nn=="function"?nn.call(Jn,D,T):nn,T==null)break n;D=A({},D,T);break n;case 2:la=!0}}T=u.callback,T!==null&&(n.flags|=64,N&&(n.flags|=8192),N=r.callbacks,N===null?r.callbacks=[T]:N.push(T))}else N={lane:T,tag:u.tag,payload:u.payload,callback:u.callback,next:null},E===null?(_=E=N,f=D):E=E.next=N,s|=T;if(u=u.next,u===null){if(u=r.shared.pending,u===null)break;N=u,u=N.next,N.next=null,r.lastBaseUpdate=N,r.shared.pending=null}}while(!0);E===null&&(f=D),r.baseState=f,r.firstBaseUpdate=_,r.lastBaseUpdate=E,l===null&&(r.shared.lanes=0),ha|=s,n.lanes=s,n.memoizedState=D}}function Hu(n,e){if(typeof n!="function")throw Error(d(191,n));n.call(e)}function Gu(n,e){var t=n.callbacks;if(t!==null)for(n.callbacks=null,n=0;n<t.length;n++)Hu(t[n],e)}var yi=m(null),xl=m(0);function Yu(n,e){n=Jt,K(xl,n),K(yi,e),Jt=n|e.baseLanes}function rc(){K(xl,Jt),K(yi,yi.current)}function lc(){Jt=xl.current,O(yi),O(xl)}var it=m(null),gt=null;function oa(n){var e=n.alternate;K(he,he.current&1),K(it,n),gt===null&&(e===null||yi.current!==null||e.memoizedState!==null)&&(gt=n)}function sc(n){K(he,he.current),K(it,n),gt===null&&(gt=n)}function Vu(n){n.tag===22?(K(he,he.current),K(it,n),gt===null&&(gt=n)):ua()}function ua(){K(he,he.current),K(it,it.current)}function rt(n){O(it),gt===n&&(gt=null),O(he)}var he=m(0);function _l(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||po(t)||go(t)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qt=0,Sn=null,Xn=null,xe=null,Sl=!1,xi=!1,Qa=!1,Tl=0,pr=0,_i=null,N1=0;function le(){throw Error(d(321))}function cc(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!tt(n[t],e[t]))return!1;return!0}function oc(n,e,t,a,r,l){return qt=l,Sn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,w.H=n===null||n.memoizedState===null?wd:jc,Qa=!1,l=t(a,r),Qa=!1,xi&&(l=Xu(e,t,a,r)),Ku(n),l}function Ku(n){w.H=br;var e=Xn!==null&&Xn.next!==null;if(qt=0,xe=Xn=Sn=null,Sl=!1,pr=0,_i=null,e)throw Error(d(300));n===null||_e||(n=n.dependencies,n!==null&&hl(n)&&(_e=!0))}function Xu(n,e,t,a){Sn=n;var r=0;do{if(xi&&(_i=null),pr=0,xi=!1,25<=r)throw Error(d(301));if(r+=1,xe=Xn=null,n.updateQueue!=null){var l=n.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}w.H=Ed,l=e(t,a)}while(xi);return l}function w1(){var n=w.H,e=n.useState()[0];return e=typeof e.then=="function"?gr(e):e,n=n.useState()[0],(Xn!==null?Xn.memoizedState:null)!==n&&(Sn.flags|=1024),e}function uc(){var n=Tl!==0;return Tl=0,n}function dc(n,e,t){e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~t}function fc(n){if(Sl){for(n=n.memoizedState;n!==null;){var e=n.queue;e!==null&&(e.pending=null),n=n.next}Sl=!1}qt=0,xe=Xn=Sn=null,xi=!1,pr=Tl=0,_i=null}function Ge(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?Sn.memoizedState=xe=n:xe=xe.next=n,xe}function pe(){if(Xn===null){var n=Sn.alternate;n=n!==null?n.memoizedState:null}else n=Xn.next;var e=xe===null?Sn.memoizedState:xe.next;if(e!==null)xe=e,Xn=n;else{if(n===null)throw Sn.alternate===null?Error(d(467)):Error(d(310));Xn=n,n={memoizedState:Xn.memoizedState,baseState:Xn.baseState,baseQueue:Xn.baseQueue,queue:Xn.queue,next:null},xe===null?Sn.memoizedState=xe=n:xe=xe.next=n}return xe}function jl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function gr(n){var e=pr;return pr+=1,_i===null&&(_i=[]),n=Lu(_i,n,e),e=Sn,(xe===null?e.memoizedState:xe.next)===null&&(e=e.alternate,w.H=e===null||e.memoizedState===null?wd:jc),n}function Nl(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return gr(n);if(n.$$typeof===W)return ke(n)}throw Error(d(438,String(n)))}function hc(n){var e=null,t=Sn.updateQueue;if(t!==null&&(e=t.memoCache),e==null){var a=Sn.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(r){return r.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),t===null&&(t=jl(),Sn.updateQueue=t),t.memoCache=e,t=e.data[e.index],t===void 0)for(t=e.data[e.index]=Array(n),a=0;a<n;a++)t[a]=Be;return e.index++,t}function Ht(n,e){return typeof e=="function"?e(n):e}function wl(n){var e=pe();return pc(e,Xn,n)}function pc(n,e,t){var a=n.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=t;var r=n.baseQueue,l=a.pending;if(l!==null){if(r!==null){var s=r.next;r.next=l.next,l.next=s}e.baseQueue=r=l,a.pending=null}if(l=n.baseState,r===null)n.memoizedState=l;else{e=r.next;var u=s=null,f=null,_=e,E=!1;do{var D=_.lane&-536870913;if(D!==_.lane?(kn&D)===D:(qt&D)===D){var T=_.revertLane;if(T===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),D===gi&&(E=!0);else if((qt&T)===T){_=_.next,T===gi&&(E=!0);continue}else D={lane:0,revertLane:_.revertLane,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},f===null?(u=f=D,s=l):f=f.next=D,Sn.lanes|=T,ha|=T;D=_.action,Qa&&t(l,D),l=_.hasEagerState?_.eagerState:t(l,D)}else T={lane:D,revertLane:_.revertLane,gesture:_.gesture,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},f===null?(u=f=T,s=l):f=f.next=T,Sn.lanes|=D,ha|=D;_=_.next}while(_!==null&&_!==e);if(f===null?s=l:f.next=u,!tt(l,n.memoizedState)&&(_e=!0,E&&(t=mi,t!==null)))throw t;n.memoizedState=l,n.baseState=s,n.baseQueue=f,a.lastRenderedState=l}return r===null&&(a.lanes=0),[n.memoizedState,a.dispatch]}function gc(n){var e=pe(),t=e.queue;if(t===null)throw Error(d(311));t.lastRenderedReducer=n;var a=t.dispatch,r=t.pending,l=e.memoizedState;if(r!==null){t.pending=null;var s=r=r.next;do l=n(l,s.action),s=s.next;while(s!==r);tt(l,e.memoizedState)||(_e=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),t.lastRenderedState=l}return[l,a]}function Qu(n,e,t){var a=Sn,r=pe(),l=Cn;if(l){if(t===void 0)throw Error(d(407));t=t()}else t=e();var s=!tt((Xn||r).memoizedState,t);if(s&&(r.memoizedState=t,_e=!0),r=r.queue,vc(Iu.bind(null,a,r,n),[n]),r.getSnapshot!==e||s||xe!==null&&xe.memoizedState.tag&1){if(a.flags|=2048,Si(9,{destroy:void 0},Zu.bind(null,a,r,t,e),null),In===null)throw Error(d(349));l||(qt&127)!==0||Ju(a,e,t)}return t}function Ju(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Sn.updateQueue,e===null?(e=jl(),Sn.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Zu(n,e,t,a){e.value=t,e.getSnapshot=a,Fu(e)&&Wu(n)}function Iu(n,e,t){return t(function(){Fu(e)&&Wu(n)})}function Fu(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!tt(n,t)}catch{return!0}}function Wu(n){var e=Ba(n,2);e!==null&&Pe(e,n,2)}function mc(n){var e=Ge();if(typeof n=="function"){var t=n;if(n=t(),Qa){Tt(!0);try{t()}finally{Tt(!1)}}}return e.memoizedState=e.baseState=n,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ht,lastRenderedState:n},e}function Pu(n,e,t,a){return n.baseState=t,pc(n,Xn,typeof a=="function"?a:Ht)}function E1(n,e,t,a,r){if(Ol(n))throw Error(d(485));if(n=e.action,n!==null){var l={payload:r,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){l.listeners.push(s)}};w.T!==null?t(!0):l.isTransition=!1,a(l),t=e.pending,t===null?(l.next=e.pending=l,$u(e,l)):(l.next=t.next,e.pending=t.next=l)}}function $u(n,e){var t=e.action,a=e.payload,r=n.state;if(e.isTransition){var l=w.T,s={};w.T=s;try{var u=t(r,a),f=w.S;f!==null&&f(s,u),nd(n,e,u)}catch(_){bc(n,e,_)}finally{l!==null&&s.types!==null&&(l.types=s.types),w.T=l}}else try{l=t(r,a),nd(n,e,l)}catch(_){bc(n,e,_)}}function nd(n,e,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){ed(n,e,a)},function(a){return bc(n,e,a)}):ed(n,e,t)}function ed(n,e,t){e.status="fulfilled",e.value=t,td(e),n.state=t,e=n.pending,e!==null&&(t=e.next,t===e?n.pending=null:(t=t.next,e.next=t,$u(n,t)))}function bc(n,e,t){var a=n.pending;if(n.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=t,td(e),e=e.next;while(e!==a)}n.action=null}function td(n){n=n.listeners;for(var e=0;e<n.length;e++)(0,n[e])()}function ad(n,e){return e}function id(n,e){if(Cn){var t=In.formState;if(t!==null){n:{var a=Sn;if(Cn){if(ne){e:{for(var r=ne,l=pt;r.nodeType!==8;){if(!l){r=null;break e}if(r=mt(r.nextSibling),r===null){r=null;break e}}l=r.data,r=l==="F!"||l==="F"?r:null}if(r){ne=mt(r.nextSibling),a=r.data==="F!";break n}}ia(a)}a=!1}a&&(e=t[0])}}return t=Ge(),t.memoizedState=t.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ad,lastRenderedState:e},t.queue=a,t=Td.bind(null,Sn,a),a.dispatch=t,a=mc(!1),l=Tc.bind(null,Sn,!1,a.queue),a=Ge(),r={state:e,dispatch:null,action:n,pending:null},a.queue=r,t=E1.bind(null,Sn,r,l,t),r.dispatch=t,a.memoizedState=n,[e,t,!1]}function rd(n){var e=pe();return ld(e,Xn,n)}function ld(n,e,t){if(e=pc(n,e,ad)[0],n=wl(Ht)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=gr(e)}catch(s){throw s===bi?ml:s}else a=e;e=pe();var r=e.queue,l=r.dispatch;return t!==e.memoizedState&&(Sn.flags|=2048,Si(9,{destroy:void 0},A1.bind(null,r,t),null)),[a,l,n]}function A1(n,e){n.action=e}function sd(n){var e=pe(),t=Xn;if(t!==null)return ld(e,t,n);pe(),e=e.memoizedState,t=pe();var a=t.queue.dispatch;return t.memoizedState=n,[e,a,!1]}function Si(n,e,t,a){return n={tag:n,create:t,deps:a,inst:e,next:null},e=Sn.updateQueue,e===null&&(e=jl(),Sn.updateQueue=e),t=e.lastEffect,t===null?e.lastEffect=n.next=n:(a=t.next,t.next=n,n.next=a,e.lastEffect=n),n}function cd(){return pe().memoizedState}function El(n,e,t,a){var r=Ge();Sn.flags|=n,r.memoizedState=Si(1|e,{destroy:void 0},t,a===void 0?null:a)}function Al(n,e,t,a){var r=pe();a=a===void 0?null:a;var l=r.memoizedState.inst;Xn!==null&&a!==null&&cc(a,Xn.memoizedState.deps)?r.memoizedState=Si(e,l,t,a):(Sn.flags|=n,r.memoizedState=Si(1|e,l,t,a))}function od(n,e){El(8390656,8,n,e)}function vc(n,e){Al(2048,8,n,e)}function O1(n){Sn.flags|=4;var e=Sn.updateQueue;if(e===null)e=jl(),Sn.updateQueue=e,e.events=[n];else{var t=e.events;t===null?e.events=[n]:t.push(n)}}function ud(n){var e=pe().memoizedState;return O1({ref:e,nextImpl:n}),function(){if((Un&2)!==0)throw Error(d(440));return e.impl.apply(void 0,arguments)}}function dd(n,e){return Al(4,2,n,e)}function fd(n,e){return Al(4,4,n,e)}function hd(n,e){if(typeof e=="function"){n=n();var t=e(n);return function(){typeof t=="function"?t():e(null)}}if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function pd(n,e,t){t=t!=null?t.concat([n]):null,Al(4,4,hd.bind(null,e,n),t)}function yc(){}function gd(n,e){var t=pe();e=e===void 0?null:e;var a=t.memoizedState;return e!==null&&cc(e,a[1])?a[0]:(t.memoizedState=[n,e],n)}function md(n,e){var t=pe();e=e===void 0?null:e;var a=t.memoizedState;if(e!==null&&cc(e,a[1]))return a[0];if(a=n(),Qa){Tt(!0);try{n()}finally{Tt(!1)}}return t.memoizedState=[a,e],a}function xc(n,e,t){return t===void 0||(qt&1073741824)!==0&&(kn&261930)===0?n.memoizedState=e:(n.memoizedState=t,n=vf(),Sn.lanes|=n,ha|=n,t)}function bd(n,e,t,a){return tt(t,e)?t:yi.current!==null?(n=xc(n,t,a),tt(n,e)||(_e=!0),n):(qt&42)===0||(qt&1073741824)!==0&&(kn&261930)===0?(_e=!0,n.memoizedState=t):(n=vf(),Sn.lanes|=n,ha|=n,e)}function vd(n,e,t,a,r){var l=V.p;V.p=l!==0&&8>l?l:8;var s=w.T,u={};w.T=u,Tc(n,!1,e,t);try{var f=r(),_=w.S;if(_!==null&&_(u,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var E=j1(f,a);mr(n,e,E,ct(n))}else mr(n,e,a,ct(n))}catch(D){mr(n,e,{then:function(){},status:"rejected",reason:D},ct())}finally{V.p=l,s!==null&&u.types!==null&&(s.types=u.types),w.T=s}}function k1(){}function _c(n,e,t,a){if(n.tag!==5)throw Error(d(476));var r=yd(n).queue;vd(n,r,e,F,t===null?k1:function(){return xd(n),t(a)})}function yd(n){var e=n.memoizedState;if(e!==null)return e;e={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ht,lastRenderedState:F},next:null};var t={};return e.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ht,lastRenderedState:t},next:null},n.memoizedState=e,n=n.alternate,n!==null&&(n.memoizedState=e),e}function xd(n){var e=yd(n);e.next===null&&(e=n.alternate.memoizedState),mr(n,e.next.queue,{},ct())}function Sc(){return ke(Cr)}function _d(){return pe().memoizedState}function Sd(){return pe().memoizedState}function M1(n){for(var e=n.return;e!==null;){switch(e.tag){case 24:case 3:var t=ct();n=sa(t);var a=ca(e,n,t);a!==null&&(Pe(a,e,t),dr(a,e,t)),e={cache:Ws()},n.payload=e;return}e=e.return}}function R1(n,e,t){var a=ct();t={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Ol(n)?jd(e,t):(t=Hs(n,e,t,a),t!==null&&(Pe(t,n,a),Nd(t,e,a)))}function Td(n,e,t){var a=ct();mr(n,e,t,a)}function mr(n,e,t,a){var r={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ol(n))jd(e,r);else{var l=n.alternate;if(n.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var s=e.lastRenderedState,u=l(s,t);if(r.hasEagerState=!0,r.eagerState=u,tt(u,s))return ol(n,e,r,0),In===null&&cl(),!1}catch{}if(t=Hs(n,e,r,a),t!==null)return Pe(t,n,a),Nd(t,e,a),!0}return!1}function Tc(n,e,t,a){if(a={lane:2,revertLane:eo(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ol(n)){if(e)throw Error(d(479))}else e=Hs(n,t,a,2),e!==null&&Pe(e,n,2)}function Ol(n){var e=n.alternate;return n===Sn||e!==null&&e===Sn}function jd(n,e){xi=Sl=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Nd(n,e,t){if((t&4194048)!==0){var a=e.lanes;a&=n.pendingLanes,t|=a,e.lanes=t,fn(n,t)}}var br={readContext:ke,use:Nl,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useLayoutEffect:le,useInsertionEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useSyncExternalStore:le,useId:le,useHostTransitionStatus:le,useFormState:le,useActionState:le,useOptimistic:le,useMemoCache:le,useCacheRefresh:le};br.useEffectEvent=le;var wd={readContext:ke,use:Nl,useCallback:function(n,e){return Ge().memoizedState=[n,e===void 0?null:e],n},useContext:ke,useEffect:od,useImperativeHandle:function(n,e,t){t=t!=null?t.concat([n]):null,El(4194308,4,hd.bind(null,e,n),t)},useLayoutEffect:function(n,e){return El(4194308,4,n,e)},useInsertionEffect:function(n,e){El(4,2,n,e)},useMemo:function(n,e){var t=Ge();e=e===void 0?null:e;var a=n();if(Qa){Tt(!0);try{n()}finally{Tt(!1)}}return t.memoizedState=[a,e],a},useReducer:function(n,e,t){var a=Ge();if(t!==void 0){var r=t(e);if(Qa){Tt(!0);try{t(e)}finally{Tt(!1)}}}else r=e;return a.memoizedState=a.baseState=r,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},a.queue=n,n=n.dispatch=R1.bind(null,Sn,n),[a.memoizedState,n]},useRef:function(n){var e=Ge();return n={current:n},e.memoizedState=n},useState:function(n){n=mc(n);var e=n.queue,t=Td.bind(null,Sn,e);return e.dispatch=t,[n.memoizedState,t]},useDebugValue:yc,useDeferredValue:function(n,e){var t=Ge();return xc(t,n,e)},useTransition:function(){var n=mc(!1);return n=vd.bind(null,Sn,n.queue,!0,!1),Ge().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,e,t){var a=Sn,r=Ge();if(Cn){if(t===void 0)throw Error(d(407));t=t()}else{if(t=e(),In===null)throw Error(d(349));(kn&127)!==0||Ju(a,e,t)}r.memoizedState=t;var l={value:t,getSnapshot:e};return r.queue=l,od(Iu.bind(null,a,l,n),[n]),a.flags|=2048,Si(9,{destroy:void 0},Zu.bind(null,a,l,t,e),null),t},useId:function(){var n=Ge(),e=In.identifierPrefix;if(Cn){var t=wt,a=Nt;t=(a&~(1<<32-qe(a)-1)).toString(32)+t,e="_"+e+"R_"+t,t=Tl++,0<t&&(e+="H"+t.toString(32)),e+="_"}else t=N1++,e="_"+e+"r_"+t.toString(32)+"_";return n.memoizedState=e},useHostTransitionStatus:Sc,useFormState:id,useActionState:id,useOptimistic:function(n){var e=Ge();e.memoizedState=e.baseState=n;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=t,e=Tc.bind(null,Sn,!0,t),t.dispatch=e,[n,e]},useMemoCache:hc,useCacheRefresh:function(){return Ge().memoizedState=M1.bind(null,Sn)},useEffectEvent:function(n){var e=Ge(),t={impl:n};return e.memoizedState=t,function(){if((Un&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}},jc={readContext:ke,use:Nl,useCallback:gd,useContext:ke,useEffect:vc,useImperativeHandle:pd,useInsertionEffect:dd,useLayoutEffect:fd,useMemo:md,useReducer:wl,useRef:cd,useState:function(){return wl(Ht)},useDebugValue:yc,useDeferredValue:function(n,e){var t=pe();return bd(t,Xn.memoizedState,n,e)},useTransition:function(){var n=wl(Ht)[0],e=pe().memoizedState;return[typeof n=="boolean"?n:gr(n),e]},useSyncExternalStore:Qu,useId:_d,useHostTransitionStatus:Sc,useFormState:rd,useActionState:rd,useOptimistic:function(n,e){var t=pe();return Pu(t,Xn,n,e)},useMemoCache:hc,useCacheRefresh:Sd};jc.useEffectEvent=ud;var Ed={readContext:ke,use:Nl,useCallback:gd,useContext:ke,useEffect:vc,useImperativeHandle:pd,useInsertionEffect:dd,useLayoutEffect:fd,useMemo:md,useReducer:gc,useRef:cd,useState:function(){return gc(Ht)},useDebugValue:yc,useDeferredValue:function(n,e){var t=pe();return Xn===null?xc(t,n,e):bd(t,Xn.memoizedState,n,e)},useTransition:function(){var n=gc(Ht)[0],e=pe().memoizedState;return[typeof n=="boolean"?n:gr(n),e]},useSyncExternalStore:Qu,useId:_d,useHostTransitionStatus:Sc,useFormState:sd,useActionState:sd,useOptimistic:function(n,e){var t=pe();return Xn!==null?Pu(t,Xn,n,e):(t.baseState=n,[n,t.queue.dispatch])},useMemoCache:hc,useCacheRefresh:Sd};Ed.useEffectEvent=ud;function Nc(n,e,t,a){e=n.memoizedState,t=t(a,e),t=t==null?e:A({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var wc={enqueueSetState:function(n,e,t){n=n._reactInternals;var a=ct(),r=sa(a);r.payload=e,t!=null&&(r.callback=t),e=ca(n,r,a),e!==null&&(Pe(e,n,a),dr(e,n,a))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var a=ct(),r=sa(a);r.tag=1,r.payload=e,t!=null&&(r.callback=t),e=ca(n,r,a),e!==null&&(Pe(e,n,a),dr(e,n,a))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=ct(),a=sa(t);a.tag=2,e!=null&&(a.callback=e),e=ca(n,a,t),e!==null&&(Pe(e,n,t),dr(e,n,t))}};function Ad(n,e,t,a,r,l,s){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(a,l,s):e.prototype&&e.prototype.isPureReactComponent?!ar(t,a)||!ar(r,l):!0}function Od(n,e,t,a){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,a),e.state!==n&&wc.enqueueReplaceState(e,e.state,null)}function Ja(n,e){var t=e;if("ref"in e){t={};for(var a in e)a!=="ref"&&(t[a]=e[a])}if(n=n.defaultProps){t===e&&(t=A({},t));for(var r in n)t[r]===void 0&&(t[r]=n[r])}return t}function kd(n){sl(n)}function Md(n){console.error(n)}function Rd(n){sl(n)}function kl(n,e){try{var t=n.onUncaughtError;t(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Cd(n,e,t){try{var a=n.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Ec(n,e,t){return t=sa(t),t.tag=3,t.payload={element:null},t.callback=function(){kl(n,e)},t}function Dd(n){return n=sa(n),n.tag=3,n}function Ld(n,e,t,a){var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var l=a.value;n.payload=function(){return r(l)},n.callback=function(){Cd(e,t,a)}}var s=t.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Cd(e,t,a),typeof r!="function"&&(pa===null?pa=new Set([this]):pa.add(this));var u=a.stack;this.componentDidCatch(a.value,{componentStack:u!==null?u:""})})}function C1(n,e,t,a,r){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=t.alternate,e!==null&&pi(e,t,r,!0),t=it.current,t!==null){switch(t.tag){case 31:case 13:return gt===null?Yl():t.alternate===null&&se===0&&(se=3),t.flags&=-257,t.flags|=65536,t.lanes=r,a===bl?t.flags|=16384:(e=t.updateQueue,e===null?t.updateQueue=new Set([a]):e.add(a),Pc(n,a,r)),!1;case 22:return t.flags|=65536,a===bl?t.flags|=16384:(e=t.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=e):(t=e.retryQueue,t===null?e.retryQueue=new Set([a]):t.add(a)),Pc(n,a,r)),!1}throw Error(d(435,t.tag))}return Pc(n,a,r),Yl(),!1}if(Cn)return e=it.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=r,a!==Qs&&(n=Error(d(422),{cause:a}),lr(dt(n,t)))):(a!==Qs&&(e=Error(d(423),{cause:a}),lr(dt(e,t))),n=n.current.alternate,n.flags|=65536,r&=-r,n.lanes|=r,a=dt(a,t),r=Ec(n.stateNode,a,r),ac(n,r),se!==4&&(se=2)),!1;var l=Error(d(520),{cause:a});if(l=dt(l,t),Nr===null?Nr=[l]:Nr.push(l),se!==4&&(se=2),e===null)return!0;a=dt(a,t),t=e;do{switch(t.tag){case 3:return t.flags|=65536,n=r&-r,t.lanes|=n,n=Ec(t.stateNode,a,n),ac(t,n),!1;case 1:if(e=t.type,l=t.stateNode,(t.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(pa===null||!pa.has(l))))return t.flags|=65536,r&=-r,t.lanes|=r,r=Dd(r),Ld(r,n,t,a),ac(t,r),!1}t=t.return}while(t!==null);return!1}var Ac=Error(d(461)),_e=!1;function Me(n,e,t,a){e.child=n===null?qu(e,null,t,a):Xa(e,n.child,t,a)}function zd(n,e,t,a,r){t=t.render;var l=e.ref;if("ref"in a){var s={};for(var u in a)u!=="ref"&&(s[u]=a[u])}else s=a;return Ga(e),a=oc(n,e,t,s,l,r),u=uc(),n!==null&&!_e?(dc(n,e,r),Gt(n,e,r)):(Cn&&u&&Ks(e),e.flags|=1,Me(n,e,a,r),e.child)}function Bd(n,e,t,a,r){if(n===null){var l=t.type;return typeof l=="function"&&!Gs(l)&&l.defaultProps===void 0&&t.compare===null?(e.tag=15,e.type=l,Ud(n,e,l,a,r)):(n=dl(t.type,null,a,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(l=n.child,!zc(n,r)){var s=l.memoizedProps;if(t=t.compare,t=t!==null?t:ar,t(s,a)&&n.ref===e.ref)return Gt(n,e,r)}return e.flags|=1,n=Lt(l,a),n.ref=e.ref,n.return=e,e.child=n}function Ud(n,e,t,a,r){if(n!==null){var l=n.memoizedProps;if(ar(l,a)&&n.ref===e.ref)if(_e=!1,e.pendingProps=a=l,zc(n,r))(n.flags&131072)!==0&&(_e=!0);else return e.lanes=n.lanes,Gt(n,e,r)}return Oc(n,e,t,a,r)}function qd(n,e,t,a){var r=a.children,l=n!==null?n.memoizedState:null;if(n===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(l=l!==null?l.baseLanes|t:t,n!==null){for(a=e.child=n.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;a=r&~l}else a=0,e.child=null;return Hd(n,e,l,t,a)}if((t&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},n!==null&&gl(e,l!==null?l.cachePool:null),l!==null?Yu(e,l):rc(),Vu(e);else return a=e.lanes=536870912,Hd(n,e,l!==null?l.baseLanes|t:t,t,a)}else l!==null?(gl(e,l.cachePool),Yu(e,l),ua(),e.memoizedState=null):(n!==null&&gl(e,null),rc(),ua());return Me(n,e,r,t),e.child}function vr(n,e){return n!==null&&n.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Hd(n,e,t,a,r){var l=$s();return l=l===null?null:{parent:ye._currentValue,pool:l},e.memoizedState={baseLanes:t,cachePool:l},n!==null&&gl(e,null),rc(),Vu(e),n!==null&&pi(n,e,a,!0),e.childLanes=r,null}function Ml(n,e){return e=Cl({mode:e.mode,children:e.children},n.mode),e.ref=n.ref,n.child=e,e.return=n,e}function Gd(n,e,t){return Xa(e,n.child,null,t),n=Ml(e,e.pendingProps),n.flags|=2,rt(e),e.memoizedState=null,n}function D1(n,e,t){var a=e.pendingProps,r=(e.flags&128)!==0;if(e.flags&=-129,n===null){if(Cn){if(a.mode==="hidden")return n=Ml(e,a),e.lanes=536870912,vr(null,n);if(sc(e),(n=ne)?(n=nh(n,pt),n=n!==null&&n.data==="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:ta!==null?{id:Nt,overflow:wt}:null,retryLane:536870912,hydrationErrors:null},t=ju(n),t.return=e,e.child=t,Oe=e,ne=null)):n=null,n===null)throw ia(e);return e.lanes=536870912,null}return Ml(e,a)}var l=n.memoizedState;if(l!==null){var s=l.dehydrated;if(sc(e),r)if(e.flags&256)e.flags&=-257,e=Gd(n,e,t);else if(e.memoizedState!==null)e.child=n.child,e.flags|=128,e=null;else throw Error(d(558));else if(_e||pi(n,e,t,!1),r=(t&n.childLanes)!==0,_e||r){if(a=In,a!==null&&(s=ue(a,t),s!==0&&s!==l.retryLane))throw l.retryLane=s,Ba(n,s),Pe(a,n,s),Ac;Yl(),e=Gd(n,e,t)}else n=l.treeContext,ne=mt(s.nextSibling),Oe=e,Cn=!0,aa=null,pt=!1,n!==null&&Eu(e,n),e=Ml(e,a),e.flags|=4096;return e}return n=Lt(n.child,{mode:a.mode,children:a.children}),n.ref=e.ref,e.child=n,n.return=e,n}function Rl(n,e){var t=e.ref;if(t===null)n!==null&&n.ref!==null&&(e.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(d(284));(n===null||n.ref!==t)&&(e.flags|=4194816)}}function Oc(n,e,t,a,r){return Ga(e),t=oc(n,e,t,a,void 0,r),a=uc(),n!==null&&!_e?(dc(n,e,r),Gt(n,e,r)):(Cn&&a&&Ks(e),e.flags|=1,Me(n,e,t,r),e.child)}function Yd(n,e,t,a,r,l){return Ga(e),e.updateQueue=null,t=Xu(e,a,t,r),Ku(n),a=uc(),n!==null&&!_e?(dc(n,e,l),Gt(n,e,l)):(Cn&&a&&Ks(e),e.flags|=1,Me(n,e,t,l),e.child)}function Vd(n,e,t,a,r){if(Ga(e),e.stateNode===null){var l=ui,s=t.contextType;typeof s=="object"&&s!==null&&(l=ke(s)),l=new t(a,l),e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=wc,e.stateNode=l,l._reactInternals=e,l=e.stateNode,l.props=a,l.state=e.memoizedState,l.refs={},ec(e),s=t.contextType,l.context=typeof s=="object"&&s!==null?ke(s):ui,l.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Nc(e,t,s,a),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(s=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),s!==l.state&&wc.enqueueReplaceState(l,l.state,null),hr(e,a,l,r),fr(),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(n===null){l=e.stateNode;var u=e.memoizedProps,f=Ja(t,u);l.props=f;var _=l.context,E=t.contextType;s=ui,typeof E=="object"&&E!==null&&(s=ke(E));var D=t.getDerivedStateFromProps;E=typeof D=="function"||typeof l.getSnapshotBeforeUpdate=="function",u=e.pendingProps!==u,E||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u||_!==s)&&Od(e,l,a,s),la=!1;var T=e.memoizedState;l.state=T,hr(e,a,l,r),fr(),_=e.memoizedState,u||T!==_||la?(typeof D=="function"&&(Nc(e,t,D,a),_=e.memoizedState),(f=la||Ad(e,t,f,a,T,_,s))?(E||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=_),l.props=a,l.state=_,l.context=s,a=f):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{l=e.stateNode,tc(n,e),s=e.memoizedProps,E=Ja(t,s),l.props=E,D=e.pendingProps,T=l.context,_=t.contextType,f=ui,typeof _=="object"&&_!==null&&(f=ke(_)),u=t.getDerivedStateFromProps,(_=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==D||T!==f)&&Od(e,l,a,f),la=!1,T=e.memoizedState,l.state=T,hr(e,a,l,r),fr();var N=e.memoizedState;s!==D||T!==N||la||n!==null&&n.dependencies!==null&&hl(n.dependencies)?(typeof u=="function"&&(Nc(e,t,u,a),N=e.memoizedState),(E=la||Ad(e,t,E,a,T,N,f)||n!==null&&n.dependencies!==null&&hl(n.dependencies))?(_||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,N,f),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,N,f)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===n.memoizedProps&&T===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===n.memoizedProps&&T===n.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=N),l.props=a,l.state=N,l.context=f,a=E):(typeof l.componentDidUpdate!="function"||s===n.memoizedProps&&T===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===n.memoizedProps&&T===n.memoizedState||(e.flags|=1024),a=!1)}return l=a,Rl(n,e),a=(e.flags&128)!==0,l||a?(l=e.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:l.render(),e.flags|=1,n!==null&&a?(e.child=Xa(e,n.child,null,r),e.child=Xa(e,null,t,r)):Me(n,e,t,r),e.memoizedState=l.state,n=e.child):n=Gt(n,e,r),n}function Kd(n,e,t,a){return qa(),e.flags|=256,Me(n,e,t,a),e.child}var kc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mc(n){return{baseLanes:n,cachePool:Cu()}}function Rc(n,e,t){return n=n!==null?n.childLanes&~t:0,e&&(n|=st),n}function Xd(n,e,t){var a=e.pendingProps,r=!1,l=(e.flags&128)!==0,s;if((s=l)||(s=n!==null&&n.memoizedState===null?!1:(he.current&2)!==0),s&&(r=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,n===null){if(Cn){if(r?oa(e):ua(),(n=ne)?(n=nh(n,pt),n=n!==null&&n.data!=="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:ta!==null?{id:Nt,overflow:wt}:null,retryLane:536870912,hydrationErrors:null},t=ju(n),t.return=e,e.child=t,Oe=e,ne=null)):n=null,n===null)throw ia(e);return go(n)?e.lanes=32:e.lanes=536870912,null}var u=a.children;return a=a.fallback,r?(ua(),r=e.mode,u=Cl({mode:"hidden",children:u},r),a=Ua(a,r,t,null),u.return=e,a.return=e,u.sibling=a,e.child=u,a=e.child,a.memoizedState=Mc(t),a.childLanes=Rc(n,s,t),e.memoizedState=kc,vr(null,a)):(oa(e),Cc(e,u))}var f=n.memoizedState;if(f!==null&&(u=f.dehydrated,u!==null)){if(l)e.flags&256?(oa(e),e.flags&=-257,e=Dc(n,e,t)):e.memoizedState!==null?(ua(),e.child=n.child,e.flags|=128,e=null):(ua(),u=a.fallback,r=e.mode,a=Cl({mode:"visible",children:a.children},r),u=Ua(u,r,t,null),u.flags|=2,a.return=e,u.return=e,a.sibling=u,e.child=a,Xa(e,n.child,null,t),a=e.child,a.memoizedState=Mc(t),a.childLanes=Rc(n,s,t),e.memoizedState=kc,e=vr(null,a));else if(oa(e),go(u)){if(s=u.nextSibling&&u.nextSibling.dataset,s)var _=s.dgst;s=_,a=Error(d(419)),a.stack="",a.digest=s,lr({value:a,source:null,stack:null}),e=Dc(n,e,t)}else if(_e||pi(n,e,t,!1),s=(t&n.childLanes)!==0,_e||s){if(s=In,s!==null&&(a=ue(s,t),a!==0&&a!==f.retryLane))throw f.retryLane=a,Ba(n,a),Pe(s,n,a),Ac;po(u)||Yl(),e=Dc(n,e,t)}else po(u)?(e.flags|=192,e.child=n.child,e=null):(n=f.treeContext,ne=mt(u.nextSibling),Oe=e,Cn=!0,aa=null,pt=!1,n!==null&&Eu(e,n),e=Cc(e,a.children),e.flags|=4096);return e}return r?(ua(),u=a.fallback,r=e.mode,f=n.child,_=f.sibling,a=Lt(f,{mode:"hidden",children:a.children}),a.subtreeFlags=f.subtreeFlags&65011712,_!==null?u=Lt(_,u):(u=Ua(u,r,t,null),u.flags|=2),u.return=e,a.return=e,a.sibling=u,e.child=a,vr(null,a),a=e.child,u=n.child.memoizedState,u===null?u=Mc(t):(r=u.cachePool,r!==null?(f=ye._currentValue,r=r.parent!==f?{parent:f,pool:f}:r):r=Cu(),u={baseLanes:u.baseLanes|t,cachePool:r}),a.memoizedState=u,a.childLanes=Rc(n,s,t),e.memoizedState=kc,vr(n.child,a)):(oa(e),t=n.child,n=t.sibling,t=Lt(t,{mode:"visible",children:a.children}),t.return=e,t.sibling=null,n!==null&&(s=e.deletions,s===null?(e.deletions=[n],e.flags|=16):s.push(n)),e.child=t,e.memoizedState=null,t)}function Cc(n,e){return e=Cl({mode:"visible",children:e},n.mode),e.return=n,n.child=e}function Cl(n,e){return n=at(22,n,null,e),n.lanes=0,n}function Dc(n,e,t){return Xa(e,n.child,null,t),n=Cc(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Qd(n,e,t){n.lanes|=e;var a=n.alternate;a!==null&&(a.lanes|=e),Is(n.return,e,t)}function Lc(n,e,t,a,r,l){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:r,treeForkCount:l}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=t,s.tailMode=r,s.treeForkCount=l)}function Jd(n,e,t){var a=e.pendingProps,r=a.revealOrder,l=a.tail;a=a.children;var s=he.current,u=(s&2)!==0;if(u?(s=s&1|2,e.flags|=128):s&=1,K(he,s),Me(n,e,a,t),a=Cn?rr:0,!u&&n!==null&&(n.flags&128)!==0)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Qd(n,t,e);else if(n.tag===19)Qd(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&_l(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Lc(e,!1,r,t,l,a);break;case"backwards":case"unstable_legacy-backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&_l(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Lc(e,!0,t,null,l,a);break;case"together":Lc(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function Gt(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),ha|=e.lanes,(t&e.childLanes)===0)if(n!==null){if(pi(n,e,t,!1),(t&e.childLanes)===0)return null}else return null;if(n!==null&&e.child!==n.child)throw Error(d(153));if(e.child!==null){for(n=e.child,t=Lt(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Lt(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function zc(n,e){return(n.lanes&e)!==0?!0:(n=n.dependencies,!!(n!==null&&hl(n)))}function L1(n,e,t){switch(e.tag){case 3:Ln(e,e.stateNode.containerInfo),ra(e,ye,n.memoizedState.cache),qa();break;case 27:case 5:$e(e);break;case 4:Ln(e,e.stateNode.containerInfo);break;case 10:ra(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,sc(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(oa(e),e.flags|=128,null):(t&e.child.childLanes)!==0?Xd(n,e,t):(oa(e),n=Gt(n,e,t),n!==null?n.sibling:null);oa(e);break;case 19:var r=(n.flags&128)!==0;if(a=(t&e.childLanes)!==0,a||(pi(n,e,t,!1),a=(t&e.childLanes)!==0),r){if(a)return Jd(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),K(he,he.current),a)break;return null;case 22:return e.lanes=0,qd(n,e,t,e.pendingProps);case 24:ra(e,ye,n.memoizedState.cache)}return Gt(n,e,t)}function Zd(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps)_e=!0;else{if(!zc(n,t)&&(e.flags&128)===0)return _e=!1,L1(n,e,t);_e=(n.flags&131072)!==0}else _e=!1,Cn&&(e.flags&1048576)!==0&&wu(e,rr,e.index);switch(e.lanes=0,e.tag){case 16:n:{var a=e.pendingProps;if(n=Va(e.elementType),e.type=n,typeof n=="function")Gs(n)?(a=Ja(n,a),e.tag=1,e=Vd(null,e,n,a,t)):(e.tag=0,e=Oc(null,e,n,a,t));else{if(n!=null){var r=n.$$typeof;if(r===cn){e.tag=11,e=zd(null,e,n,a,t);break n}else if(r===mn){e.tag=14,e=Bd(null,e,n,a,t);break n}}throw e=ce(n)||n,Error(d(306,e,""))}}return e;case 0:return Oc(n,e,e.type,e.pendingProps,t);case 1:return a=e.type,r=Ja(a,e.pendingProps),Vd(n,e,a,r,t);case 3:n:{if(Ln(e,e.stateNode.containerInfo),n===null)throw Error(d(387));a=e.pendingProps;var l=e.memoizedState;r=l.element,tc(n,e),hr(e,a,null,t);var s=e.memoizedState;if(a=s.cache,ra(e,ye,a),a!==l.cache&&Fs(e,[ye],t,!0),fr(),a=s.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){e=Kd(n,e,a,t);break n}else if(a!==r){r=dt(Error(d(424)),e),lr(r),e=Kd(n,e,a,t);break n}else for(n=e.stateNode.containerInfo,n.nodeType===9?n=n.body:n=n.nodeName==="HTML"?n.ownerDocument.body:n,ne=mt(n.firstChild),Oe=e,Cn=!0,aa=null,pt=!0,t=qu(e,null,a,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(qa(),a===r){e=Gt(n,e,t);break n}Me(n,e,a,t)}e=e.child}return e;case 26:return Rl(n,e),n===null?(t=lh(e.type,null,e.pendingProps,null))?e.memoizedState=t:Cn||(t=e.type,n=e.pendingProps,a=Il(_n.current).createElement(t),a[de]=e,a[De]=n,Re(a,t,n),be(a),e.stateNode=a):e.memoizedState=lh(e.type,n.memoizedProps,e.pendingProps,n.memoizedState),null;case 27:return $e(e),n===null&&Cn&&(a=e.stateNode=ah(e.type,e.pendingProps,_n.current),Oe=e,pt=!0,r=ne,va(e.type)?(mo=r,ne=mt(a.firstChild)):ne=r),Me(n,e,e.pendingProps.children,t),Rl(n,e),n===null&&(e.flags|=4194304),e.child;case 5:return n===null&&Cn&&((r=a=ne)&&(a=d0(a,e.type,e.pendingProps,pt),a!==null?(e.stateNode=a,Oe=e,ne=mt(a.firstChild),pt=!1,r=!0):r=!1),r||ia(e)),$e(e),r=e.type,l=e.pendingProps,s=n!==null?n.memoizedProps:null,a=l.children,uo(r,l)?a=null:s!==null&&uo(r,s)&&(e.flags|=32),e.memoizedState!==null&&(r=oc(n,e,w1,null,null,t),Cr._currentValue=r),Rl(n,e),Me(n,e,a,t),e.child;case 6:return n===null&&Cn&&((n=t=ne)&&(t=f0(t,e.pendingProps,pt),t!==null?(e.stateNode=t,Oe=e,ne=null,n=!0):n=!1),n||ia(e)),null;case 13:return Xd(n,e,t);case 4:return Ln(e,e.stateNode.containerInfo),a=e.pendingProps,n===null?e.child=Xa(e,null,a,t):Me(n,e,a,t),e.child;case 11:return zd(n,e,e.type,e.pendingProps,t);case 7:return Me(n,e,e.pendingProps,t),e.child;case 8:return Me(n,e,e.pendingProps.children,t),e.child;case 12:return Me(n,e,e.pendingProps.children,t),e.child;case 10:return a=e.pendingProps,ra(e,e.type,a.value),Me(n,e,a.children,t),e.child;case 9:return r=e.type._context,a=e.pendingProps.children,Ga(e),r=ke(r),a=a(r),e.flags|=1,Me(n,e,a,t),e.child;case 14:return Bd(n,e,e.type,e.pendingProps,t);case 15:return Ud(n,e,e.type,e.pendingProps,t);case 19:return Jd(n,e,t);case 31:return D1(n,e,t);case 22:return qd(n,e,t,e.pendingProps);case 24:return Ga(e),a=ke(ye),n===null?(r=$s(),r===null&&(r=In,l=Ws(),r.pooledCache=l,l.refCount++,l!==null&&(r.pooledCacheLanes|=t),r=l),e.memoizedState={parent:a,cache:r},ec(e),ra(e,ye,r)):((n.lanes&t)!==0&&(tc(n,e),hr(e,null,null,t),fr()),r=n.memoizedState,l=e.memoizedState,r.parent!==a?(r={parent:a,cache:a},e.memoizedState=r,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=r),ra(e,ye,a)):(a=l.cache,ra(e,ye,a),a!==r.cache&&Fs(e,[ye],t,!0))),Me(n,e,e.pendingProps.children,t),e.child;case 29:throw e.pendingProps}throw Error(d(156,e.tag))}function Yt(n){n.flags|=4}function Bc(n,e,t,a,r){if((e=(n.mode&32)!==0)&&(e=!1),e){if(n.flags|=16777216,(r&335544128)===r)if(n.stateNode.complete)n.flags|=8192;else if(Sf())n.flags|=8192;else throw Ka=bl,nc}else n.flags&=-16777217}function Id(n,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!dh(e))if(Sf())n.flags|=8192;else throw Ka=bl,nc}function Dl(n,e){e!==null&&(n.flags|=4),n.flags&16384&&(e=n.tag!==22?pn():536870912,n.lanes|=e,wi|=e)}function yr(n,e){if(!Cn)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:a.sibling=null}}function ee(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,a=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags&65011712,a|=r.flags&65011712,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=a,n.childLanes=t,e}function z1(n,e,t){var a=e.pendingProps;switch(Xs(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ee(e),null;case 1:return ee(e),null;case 3:return t=e.stateNode,a=null,n!==null&&(a=n.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Ut(ye),Wn(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(n===null||n.child===null)&&(hi(e)?Yt(e):n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Js())),ee(e),null;case 26:var r=e.type,l=e.memoizedState;return n===null?(Yt(e),l!==null?(ee(e),Id(e,l)):(ee(e),Bc(e,r,null,a,t))):l?l!==n.memoizedState?(Yt(e),ee(e),Id(e,l)):(ee(e),e.flags&=-16777217):(n=n.memoizedProps,n!==a&&Yt(e),ee(e),Bc(e,r,n,a,t)),null;case 27:if(St(e),t=_n.current,r=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==a&&Yt(e);else{if(!a){if(e.stateNode===null)throw Error(d(166));return ee(e),null}n=$.current,hi(e)?Au(e):(n=ah(r,a,t),e.stateNode=n,Yt(e))}return ee(e),null;case 5:if(St(e),r=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==a&&Yt(e);else{if(!a){if(e.stateNode===null)throw Error(d(166));return ee(e),null}if(l=$.current,hi(e))Au(e);else{var s=Il(_n.current);switch(l){case 1:l=s.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:l=s.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":l=s.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":l=s.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":l=s.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof a.is=="string"?s.createElement("select",{is:a.is}):s.createElement("select"),a.multiple?l.multiple=!0:a.size&&(l.size=a.size);break;default:l=typeof a.is=="string"?s.createElement(r,{is:a.is}):s.createElement(r)}}l[de]=e,l[De]=a;n:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)l.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break n;for(;s.sibling===null;){if(s.return===null||s.return===e)break n;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=l;n:switch(Re(l,r,a),r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break n;case"img":a=!0;break n;default:a=!1}a&&Yt(e)}}return ee(e),Bc(e,e.type,n===null?null:n.memoizedProps,e.pendingProps,t),null;case 6:if(n&&e.stateNode!=null)n.memoizedProps!==a&&Yt(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(d(166));if(n=_n.current,hi(e)){if(n=e.stateNode,t=e.memoizedProps,a=null,r=Oe,r!==null)switch(r.tag){case 27:case 5:a=r.memoizedProps}n[de]=e,n=!!(n.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||Qf(n.nodeValue,t)),n||ia(e,!0)}else n=Il(n).createTextNode(a),n[de]=e,e.stateNode=n}return ee(e),null;case 31:if(t=e.memoizedState,n===null||n.memoizedState!==null){if(a=hi(e),t!==null){if(n===null){if(!a)throw Error(d(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(557));n[de]=e}else qa(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ee(e),n=!1}else t=Js(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=t),n=!0;if(!n)return e.flags&256?(rt(e),e):(rt(e),null);if((e.flags&128)!==0)throw Error(d(558))}return ee(e),null;case 13:if(a=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(r=hi(e),a!==null&&a.dehydrated!==null){if(n===null){if(!r)throw Error(d(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(d(317));r[de]=e}else qa(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ee(e),r=!1}else r=Js(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=r),r=!0;if(!r)return e.flags&256?(rt(e),e):(rt(e),null)}return rt(e),(e.flags&128)!==0?(e.lanes=t,e):(t=a!==null,n=n!==null&&n.memoizedState!==null,t&&(a=e.child,r=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(r=a.alternate.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==r&&(a.flags|=2048)),t!==n&&t&&(e.child.flags|=8192),Dl(e,e.updateQueue),ee(e),null);case 4:return Wn(),n===null&&ro(e.stateNode.containerInfo),ee(e),null;case 10:return Ut(e.type),ee(e),null;case 19:if(O(he),a=e.memoizedState,a===null)return ee(e),null;if(r=(e.flags&128)!==0,l=a.rendering,l===null)if(r)yr(a,!1);else{if(se!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(l=_l(n),l!==null){for(e.flags|=128,yr(a,!1),n=l.updateQueue,e.updateQueue=n,Dl(e,n),e.subtreeFlags=0,n=t,t=e.child;t!==null;)Tu(t,n),t=t.sibling;return K(he,he.current&1|2),Cn&&zt(e,a.treeForkCount),e.child}n=n.sibling}a.tail!==null&&oe()>ql&&(e.flags|=128,r=!0,yr(a,!1),e.lanes=4194304)}else{if(!r)if(n=_l(l),n!==null){if(e.flags|=128,r=!0,n=n.updateQueue,e.updateQueue=n,Dl(e,n),yr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!Cn)return ee(e),null}else 2*oe()-a.renderingStartTime>ql&&t!==536870912&&(e.flags|=128,r=!0,yr(a,!1),e.lanes=4194304);a.isBackwards?(l.sibling=e.child,e.child=l):(n=a.last,n!==null?n.sibling=l:e.child=l,a.last=l)}return a.tail!==null?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.renderingStartTime=oe(),n.sibling=null,t=he.current,K(he,r?t&1|2:t&1),Cn&&zt(e,a.treeForkCount),n):(ee(e),null);case 22:case 23:return rt(e),lc(),a=e.memoizedState!==null,n!==null?n.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(t&536870912)!==0&&(e.flags&128)===0&&(ee(e),e.subtreeFlags&6&&(e.flags|=8192)):ee(e),t=e.updateQueue,t!==null&&Dl(e,t.retryQueue),t=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==t&&(e.flags|=2048),n!==null&&O(Ya),null;case 24:return t=null,n!==null&&(t=n.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),Ut(ye),ee(e),null;case 25:return null;case 30:return null}throw Error(d(156,e.tag))}function B1(n,e){switch(Xs(e),e.tag){case 1:return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ut(ye),Wn(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 26:case 27:case 5:return St(e),null;case 31:if(e.memoizedState!==null){if(rt(e),e.alternate===null)throw Error(d(340));qa()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 13:if(rt(e),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(d(340));qa()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return O(he),null;case 4:return Wn(),null;case 10:return Ut(e.type),null;case 22:case 23:return rt(e),lc(),n!==null&&O(Ya),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 24:return Ut(ye),null;case 25:return null;default:return null}}function Fd(n,e){switch(Xs(e),e.tag){case 3:Ut(ye),Wn();break;case 26:case 27:case 5:St(e);break;case 4:Wn();break;case 31:e.memoizedState!==null&&rt(e);break;case 13:rt(e);break;case 19:O(he);break;case 10:Ut(e.type);break;case 22:case 23:rt(e),lc(),n!==null&&O(Ya);break;case 24:Ut(ye)}}function xr(n,e){try{var t=e.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var r=a.next;t=r;do{if((t.tag&n)===n){a=void 0;var l=t.create,s=t.inst;a=l(),s.destroy=a}t=t.next}while(t!==r)}}catch(u){Kn(e,e.return,u)}}function da(n,e,t){try{var a=e.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var l=r.next;a=l;do{if((a.tag&n)===n){var s=a.inst,u=s.destroy;if(u!==void 0){s.destroy=void 0,r=e;var f=t,_=u;try{_()}catch(E){Kn(r,f,E)}}}a=a.next}while(a!==l)}}catch(E){Kn(e,e.return,E)}}function Wd(n){var e=n.updateQueue;if(e!==null){var t=n.stateNode;try{Gu(e,t)}catch(a){Kn(n,n.return,a)}}}function Pd(n,e,t){t.props=Ja(n.type,n.memoizedProps),t.state=n.memoizedState;try{t.componentWillUnmount()}catch(a){Kn(n,e,a)}}function _r(n,e){try{var t=n.ref;if(t!==null){switch(n.tag){case 26:case 27:case 5:var a=n.stateNode;break;case 30:a=n.stateNode;break;default:a=n.stateNode}typeof t=="function"?n.refCleanup=t(a):t.current=a}}catch(r){Kn(n,e,r)}}function Et(n,e){var t=n.ref,a=n.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(r){Kn(n,e,r)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(r){Kn(n,e,r)}else t.current=null}function $d(n){var e=n.type,t=n.memoizedProps,a=n.stateNode;try{n:switch(e){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break n;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(r){Kn(n,n.return,r)}}function Uc(n,e,t){try{var a=n.stateNode;r0(a,n.type,t,e),a[De]=e}catch(r){Kn(n,n.return,r)}}function nf(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&va(n.type)||n.tag===4}function qc(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||nf(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&va(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Hc(n,e,t){var a=n.tag;if(a===5||a===6)n=n.stateNode,e?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(n,e):(e=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.appendChild(n),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=G));else if(a!==4&&(a===27&&va(n.type)&&(t=n.stateNode,e=null),n=n.child,n!==null))for(Hc(n,e,t),n=n.sibling;n!==null;)Hc(n,e,t),n=n.sibling}function Ll(n,e,t){var a=n.tag;if(a===5||a===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(a!==4&&(a===27&&va(n.type)&&(t=n.stateNode),n=n.child,n!==null))for(Ll(n,e,t),n=n.sibling;n!==null;)Ll(n,e,t),n=n.sibling}function ef(n){var e=n.stateNode,t=n.memoizedProps;try{for(var a=n.type,r=e.attributes;r.length;)e.removeAttributeNode(r[0]);Re(e,a,t),e[de]=n,e[De]=t}catch(l){Kn(n,n.return,l)}}var Vt=!1,Se=!1,Gc=!1,tf=typeof WeakSet=="function"?WeakSet:Set,we=null;function U1(n,e){if(n=n.containerInfo,co=ts,n=pu(n),Ds(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var r=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break n}var s=0,u=-1,f=-1,_=0,E=0,D=n,T=null;e:for(;;){for(var N;D!==t||r!==0&&D.nodeType!==3||(u=s+r),D!==l||a!==0&&D.nodeType!==3||(f=s+a),D.nodeType===3&&(s+=D.nodeValue.length),(N=D.firstChild)!==null;)T=D,D=N;for(;;){if(D===n)break e;if(T===t&&++_===r&&(u=s),T===l&&++E===a&&(f=s),(N=D.nextSibling)!==null)break;D=T,T=D.parentNode}D=N}t=u===-1||f===-1?null:{start:u,end:f}}else t=null}t=t||{start:0,end:0}}else t=null;for(oo={focusedElem:n,selectionRange:t},ts=!1,we=e;we!==null;)if(e=we,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,we=n;else for(;we!==null;){switch(e=we,l=e.alternate,n=e.flags,e.tag){case 0:if((n&4)!==0&&(n=e.updateQueue,n=n!==null?n.events:null,n!==null))for(t=0;t<n.length;t++)r=n[t],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&l!==null){n=void 0,t=e,r=l.memoizedProps,l=l.memoizedState,a=t.stateNode;try{var nn=Ja(t.type,r);n=a.getSnapshotBeforeUpdate(nn,l),a.__reactInternalSnapshotBeforeUpdate=n}catch(on){Kn(t,t.return,on)}}break;case 3:if((n&1024)!==0){if(n=e.stateNode.containerInfo,t=n.nodeType,t===9)ho(n);else if(t===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":ho(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(d(163))}if(n=e.sibling,n!==null){n.return=e.return,we=n;break}we=e.return}}function af(n,e,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Xt(n,t),a&4&&xr(5,t);break;case 1:if(Xt(n,t),a&4)if(n=t.stateNode,e===null)try{n.componentDidMount()}catch(s){Kn(t,t.return,s)}else{var r=Ja(t.type,e.memoizedProps);e=e.memoizedState;try{n.componentDidUpdate(r,e,n.__reactInternalSnapshotBeforeUpdate)}catch(s){Kn(t,t.return,s)}}a&64&&Wd(t),a&512&&_r(t,t.return);break;case 3:if(Xt(n,t),a&64&&(n=t.updateQueue,n!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{Gu(n,e)}catch(s){Kn(t,t.return,s)}}break;case 27:e===null&&a&4&&ef(t);case 26:case 5:Xt(n,t),e===null&&a&4&&$d(t),a&512&&_r(t,t.return);break;case 12:Xt(n,t);break;case 31:Xt(n,t),a&4&&sf(n,t);break;case 13:Xt(n,t),a&4&&cf(n,t),a&64&&(n=t.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(t=J1.bind(null,t),h0(n,t))));break;case 22:if(a=t.memoizedState!==null||Vt,!a){e=e!==null&&e.memoizedState!==null||Se,r=Vt;var l=Se;Vt=a,(Se=e)&&!l?Qt(n,t,(t.subtreeFlags&8772)!==0):Xt(n,t),Vt=r,Se=l}break;case 30:break;default:Xt(n,t)}}function rf(n){var e=n.alternate;e!==null&&(n.alternate=null,rf(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&Xi(e)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var ae=null,Ze=!1;function Kt(n,e,t){for(t=t.child;t!==null;)lf(n,e,t),t=t.sibling}function lf(n,e,t){if(Ce&&typeof Ce.onCommitFiberUnmount=="function")try{Ce.onCommitFiberUnmount(Aa,t)}catch{}switch(t.tag){case 26:Se||Et(t,e),Kt(n,e,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Se||Et(t,e);var a=ae,r=Ze;va(t.type)&&(ae=t.stateNode,Ze=!1),Kt(n,e,t),kr(t.stateNode),ae=a,Ze=r;break;case 5:Se||Et(t,e);case 6:if(a=ae,r=Ze,ae=null,Kt(n,e,t),ae=a,Ze=r,ae!==null)if(Ze)try{(ae.nodeType===9?ae.body:ae.nodeName==="HTML"?ae.ownerDocument.body:ae).removeChild(t.stateNode)}catch(l){Kn(t,e,l)}else try{ae.removeChild(t.stateNode)}catch(l){Kn(t,e,l)}break;case 18:ae!==null&&(Ze?(n=ae,Pf(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.stateNode),Di(n)):Pf(ae,t.stateNode));break;case 4:a=ae,r=Ze,ae=t.stateNode.containerInfo,Ze=!0,Kt(n,e,t),ae=a,Ze=r;break;case 0:case 11:case 14:case 15:da(2,t,e),Se||da(4,t,e),Kt(n,e,t);break;case 1:Se||(Et(t,e),a=t.stateNode,typeof a.componentWillUnmount=="function"&&Pd(t,e,a)),Kt(n,e,t);break;case 21:Kt(n,e,t);break;case 22:Se=(a=Se)||t.memoizedState!==null,Kt(n,e,t),Se=a;break;default:Kt(n,e,t)}}function sf(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{Di(n)}catch(t){Kn(e,e.return,t)}}}function cf(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Di(n)}catch(t){Kn(e,e.return,t)}}function q1(n){switch(n.tag){case 31:case 13:case 19:var e=n.stateNode;return e===null&&(e=n.stateNode=new tf),e;case 22:return n=n.stateNode,e=n._retryCache,e===null&&(e=n._retryCache=new tf),e;default:throw Error(d(435,n.tag))}}function zl(n,e){var t=q1(n);e.forEach(function(a){if(!t.has(a)){t.add(a);var r=Z1.bind(null,n,a);a.then(r,r)}})}function Ie(n,e){var t=e.deletions;if(t!==null)for(var a=0;a<t.length;a++){var r=t[a],l=n,s=e,u=s;n:for(;u!==null;){switch(u.tag){case 27:if(va(u.type)){ae=u.stateNode,Ze=!1;break n}break;case 5:ae=u.stateNode,Ze=!1;break n;case 3:case 4:ae=u.stateNode.containerInfo,Ze=!0;break n}u=u.return}if(ae===null)throw Error(d(160));lf(l,s,r),ae=null,Ze=!1,l=r.alternate,l!==null&&(l.return=null),r.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)of(e,n),e=e.sibling}var xt=null;function of(n,e){var t=n.alternate,a=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Ie(e,n),Fe(n),a&4&&(da(3,n,n.return),xr(3,n),da(5,n,n.return));break;case 1:Ie(e,n),Fe(n),a&512&&(Se||t===null||Et(t,t.return)),a&64&&Vt&&(n=n.updateQueue,n!==null&&(a=n.callbacks,a!==null&&(t=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var r=xt;if(Ie(e,n),Fe(n),a&512&&(Se||t===null||Et(t,t.return)),a&4){var l=t!==null?t.memoizedState:null;if(a=n.memoizedState,t===null)if(a===null)if(n.stateNode===null){n:{a=n.type,t=n.memoizedProps,r=r.ownerDocument||r;e:switch(a){case"title":l=r.getElementsByTagName("title")[0],(!l||l[Ma]||l[de]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=r.createElement(a),r.head.insertBefore(l,r.querySelector("head > title"))),Re(l,a,t),l[de]=n,be(l),a=l;break n;case"link":var s=oh("link","href",r).get(a+(t.href||""));if(s){for(var u=0;u<s.length;u++)if(l=s[u],l.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&l.getAttribute("rel")===(t.rel==null?null:t.rel)&&l.getAttribute("title")===(t.title==null?null:t.title)&&l.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){s.splice(u,1);break e}}l=r.createElement(a),Re(l,a,t),r.head.appendChild(l);break;case"meta":if(s=oh("meta","content",r).get(a+(t.content||""))){for(u=0;u<s.length;u++)if(l=s[u],l.getAttribute("content")===(t.content==null?null:""+t.content)&&l.getAttribute("name")===(t.name==null?null:t.name)&&l.getAttribute("property")===(t.property==null?null:t.property)&&l.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&l.getAttribute("charset")===(t.charSet==null?null:t.charSet)){s.splice(u,1);break e}}l=r.createElement(a),Re(l,a,t),r.head.appendChild(l);break;default:throw Error(d(468,a))}l[de]=n,be(l),a=l}n.stateNode=a}else uh(r,n.type,n.stateNode);else n.stateNode=ch(r,a,n.memoizedProps);else l!==a?(l===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):l.count--,a===null?uh(r,n.type,n.stateNode):ch(r,a,n.memoizedProps)):a===null&&n.stateNode!==null&&Uc(n,n.memoizedProps,t.memoizedProps)}break;case 27:Ie(e,n),Fe(n),a&512&&(Se||t===null||Et(t,t.return)),t!==null&&a&4&&Uc(n,n.memoizedProps,t.memoizedProps);break;case 5:if(Ie(e,n),Fe(n),a&512&&(Se||t===null||Et(t,t.return)),n.flags&32){r=n.stateNode;try{dn(r,"")}catch(nn){Kn(n,n.return,nn)}}a&4&&n.stateNode!=null&&(r=n.memoizedProps,Uc(n,r,t!==null?t.memoizedProps:r)),a&1024&&(Gc=!0);break;case 6:if(Ie(e,n),Fe(n),a&4){if(n.stateNode===null)throw Error(d(162));a=n.memoizedProps,t=n.stateNode;try{t.nodeValue=a}catch(nn){Kn(n,n.return,nn)}}break;case 3:if(Pl=null,r=xt,xt=Fl(e.containerInfo),Ie(e,n),xt=r,Fe(n),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Di(e.containerInfo)}catch(nn){Kn(n,n.return,nn)}Gc&&(Gc=!1,uf(n));break;case 4:a=xt,xt=Fl(n.stateNode.containerInfo),Ie(e,n),Fe(n),xt=a;break;case 12:Ie(e,n),Fe(n);break;case 31:Ie(e,n),Fe(n),a&4&&(a=n.updateQueue,a!==null&&(n.updateQueue=null,zl(n,a)));break;case 13:Ie(e,n),Fe(n),n.child.flags&8192&&n.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Ul=oe()),a&4&&(a=n.updateQueue,a!==null&&(n.updateQueue=null,zl(n,a)));break;case 22:r=n.memoizedState!==null;var f=t!==null&&t.memoizedState!==null,_=Vt,E=Se;if(Vt=_||r,Se=E||f,Ie(e,n),Se=E,Vt=_,Fe(n),a&8192)n:for(e=n.stateNode,e._visibility=r?e._visibility&-2:e._visibility|1,r&&(t===null||f||Vt||Se||Za(n)),t=null,e=n;;){if(e.tag===5||e.tag===26){if(t===null){f=t=e;try{if(l=f.stateNode,r)s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{u=f.stateNode;var D=f.memoizedProps.style,T=D!=null&&D.hasOwnProperty("display")?D.display:null;u.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(nn){Kn(f,f.return,nn)}}}else if(e.tag===6){if(t===null){f=e;try{f.stateNode.nodeValue=r?"":f.memoizedProps}catch(nn){Kn(f,f.return,nn)}}}else if(e.tag===18){if(t===null){f=e;try{var N=f.stateNode;r?$f(N,!0):$f(f.stateNode,!1)}catch(nn){Kn(f,f.return,nn)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===n)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break n;for(;e.sibling===null;){if(e.return===null||e.return===n)break n;t===e&&(t=null),e=e.return}t===e&&(t=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=n.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,zl(n,t))));break;case 19:Ie(e,n),Fe(n),a&4&&(a=n.updateQueue,a!==null&&(n.updateQueue=null,zl(n,a)));break;case 30:break;case 21:break;default:Ie(e,n),Fe(n)}}function Fe(n){var e=n.flags;if(e&2){try{for(var t,a=n.return;a!==null;){if(nf(a)){t=a;break}a=a.return}if(t==null)throw Error(d(160));switch(t.tag){case 27:var r=t.stateNode,l=qc(n);Ll(n,l,r);break;case 5:var s=t.stateNode;t.flags&32&&(dn(s,""),t.flags&=-33);var u=qc(n);Ll(n,u,s);break;case 3:case 4:var f=t.stateNode.containerInfo,_=qc(n);Hc(n,_,f);break;default:throw Error(d(161))}}catch(E){Kn(n,n.return,E)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function uf(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var e=n;uf(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),n=n.sibling}}function Xt(n,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)af(n,e.alternate,e),e=e.sibling}function Za(n){for(n=n.child;n!==null;){var e=n;switch(e.tag){case 0:case 11:case 14:case 15:da(4,e,e.return),Za(e);break;case 1:Et(e,e.return);var t=e.stateNode;typeof t.componentWillUnmount=="function"&&Pd(e,e.return,t),Za(e);break;case 27:kr(e.stateNode);case 26:case 5:Et(e,e.return),Za(e);break;case 22:e.memoizedState===null&&Za(e);break;case 30:Za(e);break;default:Za(e)}n=n.sibling}}function Qt(n,e,t){for(t=t&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,r=n,l=e,s=l.flags;switch(l.tag){case 0:case 11:case 15:Qt(r,l,t),xr(4,l);break;case 1:if(Qt(r,l,t),a=l,r=a.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(_){Kn(a,a.return,_)}if(a=l,r=a.updateQueue,r!==null){var u=a.stateNode;try{var f=r.shared.hiddenCallbacks;if(f!==null)for(r.shared.hiddenCallbacks=null,r=0;r<f.length;r++)Hu(f[r],u)}catch(_){Kn(a,a.return,_)}}t&&s&64&&Wd(l),_r(l,l.return);break;case 27:ef(l);case 26:case 5:Qt(r,l,t),t&&a===null&&s&4&&$d(l),_r(l,l.return);break;case 12:Qt(r,l,t);break;case 31:Qt(r,l,t),t&&s&4&&sf(r,l);break;case 13:Qt(r,l,t),t&&s&4&&cf(r,l);break;case 22:l.memoizedState===null&&Qt(r,l,t),_r(l,l.return);break;case 30:break;default:Qt(r,l,t)}e=e.sibling}}function Yc(n,e){var t=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==t&&(n!=null&&n.refCount++,t!=null&&sr(t))}function Vc(n,e){n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&sr(n))}function _t(n,e,t,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)df(n,e,t,a),e=e.sibling}function df(n,e,t,a){var r=e.flags;switch(e.tag){case 0:case 11:case 15:_t(n,e,t,a),r&2048&&xr(9,e);break;case 1:_t(n,e,t,a);break;case 3:_t(n,e,t,a),r&2048&&(n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&sr(n)));break;case 12:if(r&2048){_t(n,e,t,a),n=e.stateNode;try{var l=e.memoizedProps,s=l.id,u=l.onPostCommit;typeof u=="function"&&u(s,e.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(f){Kn(e,e.return,f)}}else _t(n,e,t,a);break;case 31:_t(n,e,t,a);break;case 13:_t(n,e,t,a);break;case 23:break;case 22:l=e.stateNode,s=e.alternate,e.memoizedState!==null?l._visibility&2?_t(n,e,t,a):Sr(n,e):l._visibility&2?_t(n,e,t,a):(l._visibility|=2,Ti(n,e,t,a,(e.subtreeFlags&10256)!==0||!1)),r&2048&&Yc(s,e);break;case 24:_t(n,e,t,a),r&2048&&Vc(e.alternate,e);break;default:_t(n,e,t,a)}}function Ti(n,e,t,a,r){for(r=r&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var l=n,s=e,u=t,f=a,_=s.flags;switch(s.tag){case 0:case 11:case 15:Ti(l,s,u,f,r),xr(8,s);break;case 23:break;case 22:var E=s.stateNode;s.memoizedState!==null?E._visibility&2?Ti(l,s,u,f,r):Sr(l,s):(E._visibility|=2,Ti(l,s,u,f,r)),r&&_&2048&&Yc(s.alternate,s);break;case 24:Ti(l,s,u,f,r),r&&_&2048&&Vc(s.alternate,s);break;default:Ti(l,s,u,f,r)}e=e.sibling}}function Sr(n,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var t=n,a=e,r=a.flags;switch(a.tag){case 22:Sr(t,a),r&2048&&Yc(a.alternate,a);break;case 24:Sr(t,a),r&2048&&Vc(a.alternate,a);break;default:Sr(t,a)}e=e.sibling}}var Tr=8192;function ji(n,e,t){if(n.subtreeFlags&Tr)for(n=n.child;n!==null;)ff(n,e,t),n=n.sibling}function ff(n,e,t){switch(n.tag){case 26:ji(n,e,t),n.flags&Tr&&n.memoizedState!==null&&N0(t,xt,n.memoizedState,n.memoizedProps);break;case 5:ji(n,e,t);break;case 3:case 4:var a=xt;xt=Fl(n.stateNode.containerInfo),ji(n,e,t),xt=a;break;case 22:n.memoizedState===null&&(a=n.alternate,a!==null&&a.memoizedState!==null?(a=Tr,Tr=16777216,ji(n,e,t),Tr=a):ji(n,e,t));break;default:ji(n,e,t)}}function hf(n){var e=n.alternate;if(e!==null&&(n=e.child,n!==null)){e.child=null;do e=n.sibling,n.sibling=null,n=e;while(n!==null)}}function jr(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var a=e[t];we=a,gf(a,n)}hf(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)pf(n),n=n.sibling}function pf(n){switch(n.tag){case 0:case 11:case 15:jr(n),n.flags&2048&&da(9,n,n.return);break;case 3:jr(n);break;case 12:jr(n);break;case 22:var e=n.stateNode;n.memoizedState!==null&&e._visibility&2&&(n.return===null||n.return.tag!==13)?(e._visibility&=-3,Bl(n)):jr(n);break;default:jr(n)}}function Bl(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var a=e[t];we=a,gf(a,n)}hf(n)}for(n=n.child;n!==null;){switch(e=n,e.tag){case 0:case 11:case 15:da(8,e,e.return),Bl(e);break;case 22:t=e.stateNode,t._visibility&2&&(t._visibility&=-3,Bl(e));break;default:Bl(e)}n=n.sibling}}function gf(n,e){for(;we!==null;){var t=we;switch(t.tag){case 0:case 11:case 15:da(8,t,e);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:sr(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,we=a;else n:for(t=n;we!==null;){a=we;var r=a.sibling,l=a.return;if(rf(a),a===t){we=null;break n}if(r!==null){r.return=l,we=r;break n}we=l}}}var H1={getCacheForType:function(n){var e=ke(ye),t=e.data.get(n);return t===void 0&&(t=n(),e.data.set(n,t)),t},cacheSignal:function(){return ke(ye).controller.signal}},G1=typeof WeakMap=="function"?WeakMap:Map,Un=0,In=null,En=null,kn=0,Vn=0,lt=null,fa=!1,Ni=!1,Kc=!1,Jt=0,se=0,ha=0,Ia=0,Xc=0,st=0,wi=0,Nr=null,We=null,Qc=!1,Ul=0,mf=0,ql=1/0,Hl=null,pa=null,Ne=0,ga=null,Ei=null,Zt=0,Jc=0,Zc=null,bf=null,wr=0,Ic=null;function ct(){return(Un&2)!==0&&kn!==0?kn&-kn:w.T!==null?eo():$a()}function vf(){if(st===0)if((kn&536870912)===0||Cn){var n=Pa;Pa<<=1,(Pa&3932160)===0&&(Pa=262144),st=n}else st=536870912;return n=it.current,n!==null&&(n.flags|=32),st}function Pe(n,e,t){(n===In&&(Vn===2||Vn===9)||n.cancelPendingCommit!==null)&&(Ai(n,0),ma(n,kn,st,!1)),Zn(n,t),((Un&2)===0||n!==In)&&(n===In&&((Un&2)===0&&(Ia|=t),se===4&&ma(n,kn,st,!1)),At(n))}function yf(n,e,t){if((Un&6)!==0)throw Error(d(327));var a=!t&&(e&127)===0&&(e&n.expiredLanes)===0||k(n,e),r=a?K1(n,e):Wc(n,e,!0),l=a;do{if(r===0){Ni&&!a&&ma(n,e,0,!1);break}else{if(t=n.current.alternate,l&&!Y1(t)){r=Wc(n,e,!1),l=!1;continue}if(r===2){if(l=e,n.errorRecoveryDisabledLanes&l)var s=0;else s=n.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;n:{var u=n;r=Nr;var f=u.current.memoizedState.isDehydrated;if(f&&(Ai(u,s).flags|=256),s=Wc(u,s,!1),s!==2){if(Kc&&!f){u.errorRecoveryDisabledLanes|=l,Ia|=l,r=4;break n}l=We,We=r,l!==null&&(We===null?We=l:We.push.apply(We,l))}r=s}if(l=!1,r!==2)continue}}if(r===1){Ai(n,0),ma(n,e,0,!0);break}n:{switch(a=n,l=r,l){case 0:case 1:throw Error(d(345));case 4:if((e&4194048)!==e)break;case 6:ma(a,e,st,!fa);break n;case 2:We=null;break;case 3:case 5:break;default:throw Error(d(329))}if((e&62914560)===e&&(r=Ul+300-oe(),10<r)){if(ma(a,e,st,!fa),h(a,0,!0)!==0)break n;Zt=e,a.timeoutHandle=Ff(xf.bind(null,a,t,We,Hl,Qc,e,st,Ia,wi,fa,l,"Throttled",-0,0),r);break n}xf(a,t,We,Hl,Qc,e,st,Ia,wi,fa,l,null,-0,0)}}break}while(!0);At(n)}function xf(n,e,t,a,r,l,s,u,f,_,E,D,T,N){if(n.timeoutHandle=-1,D=e.subtreeFlags,D&8192||(D&16785408)===16785408){D={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:G},ff(e,l,D);var nn=(l&62914560)===l?Ul-oe():(l&4194048)===l?mf-oe():0;if(nn=w0(D,nn),nn!==null){Zt=l,n.cancelPendingCommit=nn(Af.bind(null,n,e,l,t,a,r,s,u,f,E,D,null,T,N)),ma(n,l,s,!_);return}}Af(n,e,l,t,a,r,s,u,f)}function Y1(n){for(var e=n;;){var t=e.tag;if((t===0||t===11||t===15)&&e.flags&16384&&(t=e.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var r=t[a],l=r.getSnapshot;r=r.value;try{if(!tt(l(),r))return!1}catch{return!1}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ma(n,e,t,a){e&=~Xc,e&=~Ia,n.suspendedLanes|=e,n.pingedLanes&=~e,a&&(n.warmLanes|=e),a=n.expirationTimes;for(var r=e;0<r;){var l=31-qe(r),s=1<<l;a[l]=-1,r&=~s}t!==0&&P(n,t,e)}function Gl(){return(Un&6)===0?(Er(0),!1):!0}function Fc(){if(En!==null){if(Vn===0)var n=En.return;else n=En,Bt=Ha=null,fc(n),vi=null,or=0,n=En;for(;n!==null;)Fd(n.alternate,n),n=n.return;En=null}}function Ai(n,e){var t=n.timeoutHandle;t!==-1&&(n.timeoutHandle=-1,c0(t)),t=n.cancelPendingCommit,t!==null&&(n.cancelPendingCommit=null,t()),Zt=0,Fc(),In=n,En=t=Lt(n.current,null),kn=e,Vn=0,lt=null,fa=!1,Ni=k(n,e),Kc=!1,wi=st=Xc=Ia=ha=se=0,We=Nr=null,Qc=!1,(e&8)!==0&&(e|=e&32);var a=n.entangledLanes;if(a!==0)for(n=n.entanglements,a&=e;0<a;){var r=31-qe(a),l=1<<r;e|=n[r],a&=~l}return Jt=e,cl(),t}function _f(n,e){Sn=null,w.H=br,e===bi||e===ml?(e=zu(),Vn=3):e===nc?(e=zu(),Vn=4):Vn=e===Ac?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,lt=e,En===null&&(se=1,kl(n,dt(e,n.current)))}function Sf(){var n=it.current;return n===null?!0:(kn&4194048)===kn?gt===null:(kn&62914560)===kn||(kn&536870912)!==0?n===gt:!1}function Tf(){var n=w.H;return w.H=br,n===null?br:n}function jf(){var n=w.A;return w.A=H1,n}function Yl(){se=4,fa||(kn&4194048)!==kn&&it.current!==null||(Ni=!0),(ha&134217727)===0&&(Ia&134217727)===0||In===null||ma(In,kn,st,!1)}function Wc(n,e,t){var a=Un;Un|=2;var r=Tf(),l=jf();(In!==n||kn!==e)&&(Hl=null,Ai(n,e)),e=!1;var s=se;n:do try{if(Vn!==0&&En!==null){var u=En,f=lt;switch(Vn){case 8:Fc(),s=6;break n;case 3:case 2:case 9:case 6:it.current===null&&(e=!0);var _=Vn;if(Vn=0,lt=null,Oi(n,u,f,_),t&&Ni){s=0;break n}break;default:_=Vn,Vn=0,lt=null,Oi(n,u,f,_)}}V1(),s=se;break}catch(E){_f(n,E)}while(!0);return e&&n.shellSuspendCounter++,Bt=Ha=null,Un=a,w.H=r,w.A=l,En===null&&(In=null,kn=0,cl()),s}function V1(){for(;En!==null;)Nf(En)}function K1(n,e){var t=Un;Un|=2;var a=Tf(),r=jf();In!==n||kn!==e?(Hl=null,ql=oe()+500,Ai(n,e)):Ni=k(n,e);n:do try{if(Vn!==0&&En!==null){e=En;var l=lt;e:switch(Vn){case 1:Vn=0,lt=null,Oi(n,e,l,1);break;case 2:case 9:if(Du(l)){Vn=0,lt=null,wf(e);break}e=function(){Vn!==2&&Vn!==9||In!==n||(Vn=7),At(n)},l.then(e,e);break n;case 3:Vn=7;break n;case 4:Vn=5;break n;case 7:Du(l)?(Vn=0,lt=null,wf(e)):(Vn=0,lt=null,Oi(n,e,l,7));break;case 5:var s=null;switch(En.tag){case 26:s=En.memoizedState;case 5:case 27:var u=En;if(s?dh(s):u.stateNode.complete){Vn=0,lt=null;var f=u.sibling;if(f!==null)En=f;else{var _=u.return;_!==null?(En=_,Vl(_)):En=null}break e}}Vn=0,lt=null,Oi(n,e,l,5);break;case 6:Vn=0,lt=null,Oi(n,e,l,6);break;case 8:Fc(),se=6;break n;default:throw Error(d(462))}}X1();break}catch(E){_f(n,E)}while(!0);return Bt=Ha=null,w.H=a,w.A=r,Un=t,En!==null?0:(In=null,kn=0,cl(),se)}function X1(){for(;En!==null&&!ys();)Nf(En)}function Nf(n){var e=Zd(n.alternate,n,Jt);n.memoizedProps=n.pendingProps,e===null?Vl(n):En=e}function wf(n){var e=n,t=e.alternate;switch(e.tag){case 15:case 0:e=Yd(t,e,e.pendingProps,e.type,void 0,kn);break;case 11:e=Yd(t,e,e.pendingProps,e.type.render,e.ref,kn);break;case 5:fc(e);default:Fd(t,e),e=En=Tu(e,Jt),e=Zd(t,e,Jt)}n.memoizedProps=n.pendingProps,e===null?Vl(n):En=e}function Oi(n,e,t,a){Bt=Ha=null,fc(e),vi=null,or=0;var r=e.return;try{if(C1(n,r,e,t,kn)){se=1,kl(n,dt(t,n.current)),En=null;return}}catch(l){if(r!==null)throw En=r,l;se=1,kl(n,dt(t,n.current)),En=null;return}e.flags&32768?(Cn||a===1?n=!0:Ni||(kn&536870912)!==0?n=!1:(fa=n=!0,(a===2||a===9||a===3||a===6)&&(a=it.current,a!==null&&a.tag===13&&(a.flags|=16384))),Ef(e,n)):Vl(e)}function Vl(n){var e=n;do{if((e.flags&32768)!==0){Ef(e,fa);return}n=e.return;var t=z1(e.alternate,e,Jt);if(t!==null){En=t;return}if(e=e.sibling,e!==null){En=e;return}En=e=n}while(e!==null);se===0&&(se=5)}function Ef(n,e){do{var t=B1(n.alternate,n);if(t!==null){t.flags&=32767,En=t;return}if(t=n.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!e&&(n=n.sibling,n!==null)){En=n;return}En=n=t}while(n!==null);se=6,En=null}function Af(n,e,t,a,r,l,s,u,f){n.cancelPendingCommit=null;do Kl();while(Ne!==0);if((Un&6)!==0)throw Error(d(327));if(e!==null){if(e===n.current)throw Error(d(177));if(l=e.lanes|e.childLanes,l|=qs,en(n,t,l,s,u,f),n===In&&(En=In=null,kn=0),Ei=e,ga=n,Zt=t,Jc=l,Zc=r,bf=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,I1(Ea,function(){return Cf(),null})):(n.callbackNode=null,n.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=w.T,w.T=null,r=V.p,V.p=2,s=Un,Un|=4;try{U1(n,e,t)}finally{Un=s,V.p=r,w.T=a}}Ne=1,Of(),kf(),Mf()}}function Of(){if(Ne===1){Ne=0;var n=ga,e=Ei,t=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||t){t=w.T,w.T=null;var a=V.p;V.p=2;var r=Un;Un|=4;try{of(e,n);var l=oo,s=pu(n.containerInfo),u=l.focusedElem,f=l.selectionRange;if(s!==u&&u&&u.ownerDocument&&hu(u.ownerDocument.documentElement,u)){if(f!==null&&Ds(u)){var _=f.start,E=f.end;if(E===void 0&&(E=_),"selectionStart"in u)u.selectionStart=_,u.selectionEnd=Math.min(E,u.value.length);else{var D=u.ownerDocument||document,T=D&&D.defaultView||window;if(T.getSelection){var N=T.getSelection(),nn=u.textContent.length,on=Math.min(f.start,nn),Jn=f.end===void 0?on:Math.min(f.end,nn);!N.extend&&on>Jn&&(s=Jn,Jn=on,on=s);var y=fu(u,on),v=fu(u,Jn);if(y&&v&&(N.rangeCount!==1||N.anchorNode!==y.node||N.anchorOffset!==y.offset||N.focusNode!==v.node||N.focusOffset!==v.offset)){var x=D.createRange();x.setStart(y.node,y.offset),N.removeAllRanges(),on>Jn?(N.addRange(x),N.extend(v.node,v.offset)):(x.setEnd(v.node,v.offset),N.addRange(x))}}}}for(D=[],N=u;N=N.parentNode;)N.nodeType===1&&D.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<D.length;u++){var M=D[u];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}ts=!!co,oo=co=null}finally{Un=r,V.p=a,w.T=t}}n.current=e,Ne=2}}function kf(){if(Ne===2){Ne=0;var n=ga,e=Ei,t=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||t){t=w.T,w.T=null;var a=V.p;V.p=2;var r=Un;Un|=4;try{af(n,e.alternate,e)}finally{Un=r,V.p=a,w.T=t}}Ne=3}}function Mf(){if(Ne===4||Ne===3){Ne=0,Kr();var n=ga,e=Ei,t=Zt,a=bf;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Ne=5:(Ne=0,Ei=ga=null,Rf(n,n.pendingLanes));var r=n.pendingLanes;if(r===0&&(pa=null),kt(t),e=e.stateNode,Ce&&typeof Ce.onCommitFiberRoot=="function")try{Ce.onCommitFiberRoot(Aa,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=w.T,r=V.p,V.p=2,w.T=null;try{for(var l=n.onRecoverableError,s=0;s<a.length;s++){var u=a[s];l(u.value,{componentStack:u.stack})}}finally{w.T=e,V.p=r}}(Zt&3)!==0&&Kl(),At(n),r=n.pendingLanes,(t&261930)!==0&&(r&42)!==0?n===Ic?wr++:(wr=0,Ic=n):wr=0,Er(0)}}function Rf(n,e){(n.pooledCacheLanes&=e)===0&&(e=n.pooledCache,e!=null&&(n.pooledCache=null,sr(e)))}function Kl(){return Of(),kf(),Mf(),Cf()}function Cf(){if(Ne!==5)return!1;var n=ga,e=Jc;Jc=0;var t=kt(Zt),a=w.T,r=V.p;try{V.p=32>t?32:t,w.T=null,t=Zc,Zc=null;var l=ga,s=Zt;if(Ne=0,Ei=ga=null,Zt=0,(Un&6)!==0)throw Error(d(331));var u=Un;if(Un|=4,pf(l.current),df(l,l.current,s,t),Un=u,Er(0,!1),Ce&&typeof Ce.onPostCommitFiberRoot=="function")try{Ce.onPostCommitFiberRoot(Aa,l)}catch{}return!0}finally{V.p=r,w.T=a,Rf(n,e)}}function Df(n,e,t){e=dt(t,e),e=Ec(n.stateNode,e,2),n=ca(n,e,2),n!==null&&(Zn(n,2),At(n))}function Kn(n,e,t){if(n.tag===3)Df(n,n,t);else for(;e!==null;){if(e.tag===3){Df(e,n,t);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(pa===null||!pa.has(a))){n=dt(t,n),t=Dd(2),a=ca(e,t,2),a!==null&&(Ld(t,a,e,n),Zn(a,2),At(a));break}}e=e.return}}function Pc(n,e,t){var a=n.pingCache;if(a===null){a=n.pingCache=new G1;var r=new Set;a.set(e,r)}else r=a.get(e),r===void 0&&(r=new Set,a.set(e,r));r.has(t)||(Kc=!0,r.add(t),n=Q1.bind(null,n,e,t),e.then(n,n))}function Q1(n,e,t){var a=n.pingCache;a!==null&&a.delete(e),n.pingedLanes|=n.suspendedLanes&t,n.warmLanes&=~t,In===n&&(kn&t)===t&&(se===4||se===3&&(kn&62914560)===kn&&300>oe()-Ul?(Un&2)===0&&Ai(n,0):Xc|=t,wi===kn&&(wi=0)),At(n)}function Lf(n,e){e===0&&(e=pn()),n=Ba(n,e),n!==null&&(Zn(n,e),At(n))}function J1(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Lf(n,t)}function Z1(n,e){var t=0;switch(n.tag){case 31:case 13:var a=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:a=n.stateNode;break;case 22:a=n.stateNode._retryCache;break;default:throw Error(d(314))}a!==null&&a.delete(e),Lf(n,t)}function I1(n,e){return Wa(n,e)}var Xl=null,ki=null,$c=!1,Ql=!1,no=!1,ba=0;function At(n){n!==ki&&n.next===null&&(ki===null?Xl=ki=n:ki=ki.next=n),Ql=!0,$c||($c=!0,W1())}function Er(n,e){if(!no&&Ql){no=!0;do for(var t=!1,a=Xl;a!==null;){if(n!==0){var r=a.pendingLanes;if(r===0)var l=0;else{var s=a.suspendedLanes,u=a.pingedLanes;l=(1<<31-qe(42|n)+1)-1,l&=r&~(s&~u),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(t=!0,qf(a,l))}else l=kn,l=h(a,a===In?l:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(l&3)===0||k(a,l)||(t=!0,qf(a,l));a=a.next}while(t);no=!1}}function F1(){zf()}function zf(){Ql=$c=!1;var n=0;ba!==0&&s0()&&(n=ba);for(var e=oe(),t=null,a=Xl;a!==null;){var r=a.next,l=Bf(a,e);l===0?(a.next=null,t===null?Xl=r:t.next=r,r===null&&(ki=t)):(t=a,(n!==0||(l&3)!==0)&&(Ql=!0)),a=r}Ne!==0&&Ne!==5||Er(n),ba!==0&&(ba=0)}function Bf(n,e){for(var t=n.suspendedLanes,a=n.pingedLanes,r=n.expirationTimes,l=n.pendingLanes&-62914561;0<l;){var s=31-qe(l),u=1<<s,f=r[s];f===-1?((u&t)===0||(u&a)!==0)&&(r[s]=X(u,e)):f<=e&&(n.expiredLanes|=u),l&=~u}if(e=In,t=kn,t=h(n,n===e?t:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),a=n.callbackNode,t===0||n===e&&(Vn===2||Vn===9)||n.cancelPendingCommit!==null)return a!==null&&a!==null&&Yi(a),n.callbackNode=null,n.callbackPriority=0;if((t&3)===0||k(n,t)){if(e=t&-t,e===n.callbackPriority)return e;switch(a!==null&&Yi(a),kt(t)){case 2:case 8:t=wa;break;case 32:t=Ea;break;case 268435456:t=Qr;break;default:t=Ea}return a=Uf.bind(null,n),t=Wa(t,a),n.callbackPriority=e,n.callbackNode=t,e}return a!==null&&a!==null&&Yi(a),n.callbackPriority=2,n.callbackNode=null,2}function Uf(n,e){if(Ne!==0&&Ne!==5)return n.callbackNode=null,n.callbackPriority=0,null;var t=n.callbackNode;if(Kl()&&n.callbackNode!==t)return null;var a=kn;return a=h(n,n===In?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),a===0?null:(yf(n,a,e),Bf(n,oe()),n.callbackNode!=null&&n.callbackNode===t?Uf.bind(null,n):null)}function qf(n,e){if(Kl())return null;yf(n,e,!0)}function W1(){o0(function(){(Un&6)!==0?Wa(Ot,F1):zf()})}function eo(){if(ba===0){var n=gi;n===0&&(n=Oa,Oa<<=1,(Oa&261888)===0&&(Oa=256)),ba=n}return ba}function Hf(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:na(""+n)}function Gf(n,e){var t=e.ownerDocument.createElement("input");return t.name=e.name,t.value=e.value,n.id&&t.setAttribute("form",n.id),e.parentNode.insertBefore(t,e),n=new FormData(n),t.parentNode.removeChild(t),n}function P1(n,e,t,a,r){if(e==="submit"&&t&&t.stateNode===r){var l=Hf((r[De]||null).action),s=a.submitter;s&&(e=(e=s[De]||null)?Hf(e.formAction):s.getAttribute("formAction"),e!==null&&(l=e,s=null));var u=new il("action","action",null,a,r);n.push({event:u,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ba!==0){var f=s?Gf(r,s):new FormData(r);_c(t,{pending:!0,data:f,method:r.method,action:l},null,f)}}else typeof l=="function"&&(u.preventDefault(),f=s?Gf(r,s):new FormData(r),_c(t,{pending:!0,data:f,method:r.method,action:l},l,f))},currentTarget:r}]})}}for(var to=0;to<Us.length;to++){var ao=Us[to],$1=ao.toLowerCase(),n0=ao[0].toUpperCase()+ao.slice(1);yt($1,"on"+n0)}yt(bu,"onAnimationEnd"),yt(vu,"onAnimationIteration"),yt(yu,"onAnimationStart"),yt("dblclick","onDoubleClick"),yt("focusin","onFocus"),yt("focusout","onBlur"),yt(m1,"onTransitionRun"),yt(b1,"onTransitionStart"),yt(v1,"onTransitionCancel"),yt(xu,"onTransitionEnd"),B("onMouseEnter",["mouseout","mouseover"]),B("onMouseLeave",["mouseout","mouseover"]),B("onPointerEnter",["pointerout","pointerover"]),B("onPointerLeave",["pointerout","pointerover"]),Rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Rt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),e0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ar));function Yf(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var a=n[t],r=a.event;a=a.listeners;n:{var l=void 0;if(e)for(var s=a.length-1;0<=s;s--){var u=a[s],f=u.instance,_=u.currentTarget;if(u=u.listener,f!==l&&r.isPropagationStopped())break n;l=u,r.currentTarget=_;try{l(r)}catch(E){sl(E)}r.currentTarget=null,l=f}else for(s=0;s<a.length;s++){if(u=a[s],f=u.instance,_=u.currentTarget,u=u.listener,f!==l&&r.isPropagationStopped())break n;l=u,r.currentTarget=_;try{l(r)}catch(E){sl(E)}r.currentTarget=null,l=f}}}}function An(n,e){var t=e[Ki];t===void 0&&(t=e[Ki]=new Set);var a=n+"__bubble";t.has(a)||(Vf(e,n,2,!1),t.add(a))}function io(n,e,t){var a=0;e&&(a|=4),Vf(t,n,a,e)}var Jl="_reactListening"+Math.random().toString(36).slice(2);function ro(n){if(!n[Jl]){n[Jl]=!0,Fr.forEach(function(t){t!=="selectionchange"&&(e0.has(t)||io(t,!1,n),io(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Jl]||(e[Jl]=!0,io("selectionchange",!1,e))}}function Vf(n,e,t,a){switch(vh(e)){case 2:var r=O0;break;case 8:r=k0;break;default:r=_o}t=r.bind(null,e,t,n),r=void 0,!Ns||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),a?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function lo(n,e,t,a,r){var l=a;if((e&1)===0&&(e&2)===0&&a!==null)n:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var u=a.stateNode.containerInfo;if(u===r)break;if(s===4)for(s=a.return;s!==null;){var f=s.tag;if((f===3||f===4)&&s.stateNode.containerInfo===r)return;s=s.return}for(;u!==null;){if(s=He(u),s===null)return;if(f=s.tag,f===5||f===6||f===26||f===27){a=l=s;continue n}u=u.parentNode}}a=a.return}nl(function(){var _=l,E=xn(t),D=[];n:{var T=_u.get(n);if(T!==void 0){var N=il,nn=n;switch(n){case"keypress":if(tl(t)===0)break n;case"keydown":case"keyup":N=Zb;break;case"focusin":nn="focus",N=Os;break;case"focusout":nn="blur",N=Os;break;case"beforeblur":case"afterblur":N=Os;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Fo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=zb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=Wb;break;case bu:case vu:case yu:N=qb;break;case xu:N=$b;break;case"scroll":case"scrollend":N=Db;break;case"wheel":N=e1;break;case"copy":case"cut":case"paste":N=Gb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Po;break;case"toggle":case"beforetoggle":N=a1}var on=(e&4)!==0,Jn=!on&&(n==="scroll"||n==="scrollend"),y=on?T!==null?T+"Capture":null:T;on=[];for(var v=_,x;v!==null;){var M=v;if(x=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||x===null||y===null||(M=Fi(v,y),M!=null&&on.push(Or(v,M,x))),Jn)break;v=v.return}0<on.length&&(T=new N(T,nn,null,t,E),D.push({event:T,listeners:on}))}}if((e&7)===0){n:{if(T=n==="mouseover"||n==="pointerover",N=n==="mouseout"||n==="pointerout",T&&t!==tn&&(nn=t.relatedTarget||t.fromElement)&&(He(nn)||nn[Ft]))break n;if((N||T)&&(T=E.window===E?E:(T=E.ownerDocument)?T.defaultView||T.parentWindow:window,N?(nn=t.relatedTarget||t.toElement,N=_,nn=nn?He(nn):null,nn!==null&&(Jn=z(nn),on=nn.tag,nn!==Jn||on!==5&&on!==27&&on!==6)&&(nn=null)):(N=null,nn=_),N!==nn)){if(on=Fo,M="onMouseLeave",y="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(on=Po,M="onPointerLeave",y="onPointerEnter",v="pointer"),Jn=N==null?T:Wt(N),x=nn==null?T:Wt(nn),T=new on(M,v+"leave",N,t,E),T.target=Jn,T.relatedTarget=x,M=null,He(E)===_&&(on=new on(y,v+"enter",nn,t,E),on.target=x,on.relatedTarget=Jn,M=on),Jn=M,N&&nn)e:{for(on=t0,y=N,v=nn,x=0,M=y;M;M=on(M))x++;M=0;for(var ln=v;ln;ln=on(ln))M++;for(;0<x-M;)y=on(y),x--;for(;0<M-x;)v=on(v),M--;for(;x--;){if(y===v||v!==null&&y===v.alternate){on=y;break e}y=on(y),v=on(v)}on=null}else on=null;N!==null&&Kf(D,T,N,on,!1),nn!==null&&Jn!==null&&Kf(D,Jn,nn,on,!0)}}n:{if(T=_?Wt(_):window,N=T.nodeName&&T.nodeName.toLowerCase(),N==="select"||N==="input"&&T.type==="file")var zn=lu;else if(iu(T))if(su)zn=h1;else{zn=d1;var an=u1}else N=T.nodeName,!N||N.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?_&&$t(_.elementType)&&(zn=lu):zn=f1;if(zn&&(zn=zn(n,_))){ru(D,zn,t,E);break n}an&&an(n,T,_),n==="focusout"&&_&&T.type==="number"&&_.memoizedProps.value!=null&&ii(T,"number",T.value)}switch(an=_?Wt(_):window,n){case"focusin":(iu(an)||an.contentEditable==="true")&&(si=an,Ls=_,ir=null);break;case"focusout":ir=Ls=si=null;break;case"mousedown":zs=!0;break;case"contextmenu":case"mouseup":case"dragend":zs=!1,gu(D,t,E);break;case"selectionchange":if(g1)break;case"keydown":case"keyup":gu(D,t,E)}var Tn;if(Ms)n:{switch(n){case"compositionstart":var Mn="onCompositionStart";break n;case"compositionend":Mn="onCompositionEnd";break n;case"compositionupdate":Mn="onCompositionUpdate";break n}Mn=void 0}else li?tu(n,t)&&(Mn="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(Mn="onCompositionStart");Mn&&($o&&t.locale!=="ko"&&(li||Mn!=="onCompositionStart"?Mn==="onCompositionEnd"&&li&&(Tn=Zo()):(ea=E,ws="value"in ea?ea.value:ea.textContent,li=!0)),an=Zl(_,Mn),0<an.length&&(Mn=new Wo(Mn,n,null,t,E),D.push({event:Mn,listeners:an}),Tn?Mn.data=Tn:(Tn=au(t),Tn!==null&&(Mn.data=Tn)))),(Tn=r1?l1(n,t):s1(n,t))&&(Mn=Zl(_,"onBeforeInput"),0<Mn.length&&(an=new Wo("onBeforeInput","beforeinput",null,t,E),D.push({event:an,listeners:Mn}),an.data=Tn)),P1(D,n,_,t,E)}Yf(D,e)})}function Or(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Zl(n,e){for(var t=e+"Capture",a=[];n!==null;){var r=n,l=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||l===null||(r=Fi(n,t),r!=null&&a.unshift(Or(n,r,l)),r=Fi(n,e),r!=null&&a.push(Or(n,r,l))),n.tag===3)return a;n=n.return}return[]}function t0(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Kf(n,e,t,a,r){for(var l=e._reactName,s=[];t!==null&&t!==a;){var u=t,f=u.alternate,_=u.stateNode;if(u=u.tag,f!==null&&f===a)break;u!==5&&u!==26&&u!==27||_===null||(f=_,r?(_=Fi(t,l),_!=null&&s.unshift(Or(t,_,f))):r||(_=Fi(t,l),_!=null&&s.push(Or(t,_,f)))),t=t.return}s.length!==0&&n.push({event:e,listeners:s})}var a0=/\r\n?/g,i0=/\u0000|\uFFFD/g;function Xf(n){return(typeof n=="string"?n:""+n).replace(a0,`
`).replace(i0,"")}function Qf(n,e){return e=Xf(e),Xf(n)===e}function Qn(n,e,t,a,r,l){switch(t){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||dn(n,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&dn(n,""+a);break;case"className":nt(n,"class",a);break;case"tabIndex":nt(n,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":nt(n,t,a);break;case"style":Yn(n,a,l);break;case"data":if(e!=="object"){nt(n,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||t!=="href")){n.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){n.removeAttribute(t);break}a=na(""+a),n.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){n.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(t==="formAction"?(e!=="input"&&Qn(n,e,"name",r.name,r,null),Qn(n,e,"formEncType",r.formEncType,r,null),Qn(n,e,"formMethod",r.formMethod,r,null),Qn(n,e,"formTarget",r.formTarget,r,null)):(Qn(n,e,"encType",r.encType,r,null),Qn(n,e,"method",r.method,r,null),Qn(n,e,"target",r.target,r,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){n.removeAttribute(t);break}a=na(""+a),n.setAttribute(t,a);break;case"onClick":a!=null&&(n.onclick=G);break;case"onScroll":a!=null&&An("scroll",n);break;case"onScrollEnd":a!=null&&An("scrollend",n);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(t=a.__html,t!=null){if(r.children!=null)throw Error(d(60));n.innerHTML=t}}break;case"multiple":n.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":n.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){n.removeAttribute("xlink:href");break}t=na(""+a),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(t,""+a):n.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(t,""):n.removeAttribute(t);break;case"capture":case"download":a===!0?n.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(t,a):n.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?n.setAttribute(t,a):n.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?n.removeAttribute(t):n.setAttribute(t,a);break;case"popover":An("beforetoggle",n),An("toggle",n),Le(n,"popover",a);break;case"xlinkActuate":Xe(n,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Xe(n,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Xe(n,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Xe(n,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Xe(n,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Xe(n,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Xe(n,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Xe(n,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Xe(n,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Le(n,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Ct.get(t)||t,Le(n,t,a))}}function so(n,e,t,a,r,l){switch(t){case"style":Yn(n,a,l);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(t=a.__html,t!=null){if(r.children!=null)throw Error(d(60));n.innerHTML=t}}break;case"children":typeof a=="string"?dn(n,a):(typeof a=="number"||typeof a=="bigint")&&dn(n,""+a);break;case"onScroll":a!=null&&An("scroll",n);break;case"onScrollEnd":a!=null&&An("scrollend",n);break;case"onClick":a!=null&&(n.onclick=G);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ra.hasOwnProperty(t))n:{if(t[0]==="o"&&t[1]==="n"&&(r=t.endsWith("Capture"),e=t.slice(2,r?t.length-7:void 0),l=n[De]||null,l=l!=null?l[t]:null,typeof l=="function"&&n.removeEventListener(e,l,r),typeof a=="function")){typeof l!="function"&&l!==null&&(t in n?n[t]=null:n.hasAttribute(t)&&n.removeAttribute(t)),n.addEventListener(e,a,r);break n}t in n?n[t]=a:a===!0?n.setAttribute(t,""):Le(n,t,a)}}}function Re(n,e,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":An("error",n),An("load",n);var a=!1,r=!1,l;for(l in t)if(t.hasOwnProperty(l)){var s=t[l];if(s!=null)switch(l){case"src":a=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,e));default:Qn(n,e,l,s,t,null)}}r&&Qn(n,e,"srcSet",t.srcSet,t,null),a&&Qn(n,e,"src",t.src,t,null);return;case"input":An("invalid",n);var u=l=s=r=null,f=null,_=null;for(a in t)if(t.hasOwnProperty(a)){var E=t[a];if(E!=null)switch(a){case"name":r=E;break;case"type":s=E;break;case"checked":f=E;break;case"defaultChecked":_=E;break;case"value":l=E;break;case"defaultValue":u=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(d(137,e));break;default:Qn(n,e,a,E,t,null)}}Ca(n,l,u,f,_,s,r,!1);return;case"select":An("invalid",n),a=s=l=null;for(r in t)if(t.hasOwnProperty(r)&&(u=t[r],u!=null))switch(r){case"value":l=u;break;case"defaultValue":s=u;break;case"multiple":a=u;default:Qn(n,e,r,u,t,null)}e=l,t=s,n.multiple=!!a,e!=null?Ae(n,!!a,e,!1):t!=null&&Ae(n,!!a,t,!0);return;case"textarea":An("invalid",n),l=r=a=null;for(s in t)if(t.hasOwnProperty(s)&&(u=t[s],u!=null))switch(s){case"value":a=u;break;case"defaultValue":r=u;break;case"children":l=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(d(91));break;default:Qn(n,e,s,u,t,null)}ri(n,a,r,l);return;case"option":for(f in t)t.hasOwnProperty(f)&&(a=t[f],a!=null)&&(f==="selected"?n.selected=a&&typeof a!="function"&&typeof a!="symbol":Qn(n,e,f,a,t,null));return;case"dialog":An("beforetoggle",n),An("toggle",n),An("cancel",n),An("close",n);break;case"iframe":case"object":An("load",n);break;case"video":case"audio":for(a=0;a<Ar.length;a++)An(Ar[a],n);break;case"image":An("error",n),An("load",n);break;case"details":An("toggle",n);break;case"embed":case"source":case"link":An("error",n),An("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(_ in t)if(t.hasOwnProperty(_)&&(a=t[_],a!=null))switch(_){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,e));default:Qn(n,e,_,a,t,null)}return;default:if($t(e)){for(E in t)t.hasOwnProperty(E)&&(a=t[E],a!==void 0&&so(n,e,E,a,t,void 0));return}}for(u in t)t.hasOwnProperty(u)&&(a=t[u],a!=null&&Qn(n,e,u,a,t,null))}function r0(n,e,t,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,l=null,s=null,u=null,f=null,_=null,E=null;for(N in t){var D=t[N];if(t.hasOwnProperty(N)&&D!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":f=D;default:a.hasOwnProperty(N)||Qn(n,e,N,null,a,D)}}for(var T in a){var N=a[T];if(D=t[T],a.hasOwnProperty(T)&&(N!=null||D!=null))switch(T){case"type":l=N;break;case"name":r=N;break;case"checked":_=N;break;case"defaultChecked":E=N;break;case"value":s=N;break;case"defaultValue":u=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(d(137,e));break;default:N!==D&&Qn(n,e,T,N,a,D)}}Ji(n,s,u,f,_,E,l,r);return;case"select":N=s=u=T=null;for(l in t)if(f=t[l],t.hasOwnProperty(l)&&f!=null)switch(l){case"value":break;case"multiple":N=f;default:a.hasOwnProperty(l)||Qn(n,e,l,null,a,f)}for(r in a)if(l=a[r],f=t[r],a.hasOwnProperty(r)&&(l!=null||f!=null))switch(r){case"value":T=l;break;case"defaultValue":u=l;break;case"multiple":s=l;default:l!==f&&Qn(n,e,r,l,a,f)}e=u,t=s,a=N,T!=null?Ae(n,!!t,T,!1):!!a!=!!t&&(e!=null?Ae(n,!!t,e,!0):Ae(n,!!t,t?[]:"",!1));return;case"textarea":N=T=null;for(u in t)if(r=t[u],t.hasOwnProperty(u)&&r!=null&&!a.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:Qn(n,e,u,null,a,r)}for(s in a)if(r=a[s],l=t[s],a.hasOwnProperty(s)&&(r!=null||l!=null))switch(s){case"value":T=r;break;case"defaultValue":N=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(d(91));break;default:r!==l&&Qn(n,e,s,r,a,l)}Pr(n,T,N);return;case"option":for(var nn in t)T=t[nn],t.hasOwnProperty(nn)&&T!=null&&!a.hasOwnProperty(nn)&&(nn==="selected"?n.selected=!1:Qn(n,e,nn,null,a,T));for(f in a)T=a[f],N=t[f],a.hasOwnProperty(f)&&T!==N&&(T!=null||N!=null)&&(f==="selected"?n.selected=T&&typeof T!="function"&&typeof T!="symbol":Qn(n,e,f,T,a,N));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var on in t)T=t[on],t.hasOwnProperty(on)&&T!=null&&!a.hasOwnProperty(on)&&Qn(n,e,on,null,a,T);for(_ in a)if(T=a[_],N=t[_],a.hasOwnProperty(_)&&T!==N&&(T!=null||N!=null))switch(_){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(d(137,e));break;default:Qn(n,e,_,T,a,N)}return;default:if($t(e)){for(var Jn in t)T=t[Jn],t.hasOwnProperty(Jn)&&T!==void 0&&!a.hasOwnProperty(Jn)&&so(n,e,Jn,void 0,a,T);for(E in a)T=a[E],N=t[E],!a.hasOwnProperty(E)||T===N||T===void 0&&N===void 0||so(n,e,E,T,a,N);return}}for(var y in t)T=t[y],t.hasOwnProperty(y)&&T!=null&&!a.hasOwnProperty(y)&&Qn(n,e,y,null,a,T);for(D in a)T=a[D],N=t[D],!a.hasOwnProperty(D)||T===N||T==null&&N==null||Qn(n,e,D,T,a,N)}function Jf(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function l0(){if(typeof performance.getEntriesByType=="function"){for(var n=0,e=0,t=performance.getEntriesByType("resource"),a=0;a<t.length;a++){var r=t[a],l=r.transferSize,s=r.initiatorType,u=r.duration;if(l&&u&&Jf(s)){for(s=0,u=r.responseEnd,a+=1;a<t.length;a++){var f=t[a],_=f.startTime;if(_>u)break;var E=f.transferSize,D=f.initiatorType;E&&Jf(D)&&(f=f.responseEnd,s+=E*(f<u?1:(u-_)/(f-_)))}if(--a,e+=8*(l+s)/(r.duration/1e3),n++,10<n)break}}if(0<n)return e/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var co=null,oo=null;function Il(n){return n.nodeType===9?n:n.ownerDocument}function Zf(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function If(n,e){if(n===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&e==="foreignObject"?0:n}function uo(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fo=null;function s0(){var n=window.event;return n&&n.type==="popstate"?n===fo?!1:(fo=n,!0):(fo=null,!1)}var Ff=typeof setTimeout=="function"?setTimeout:void 0,c0=typeof clearTimeout=="function"?clearTimeout:void 0,Wf=typeof Promise=="function"?Promise:void 0,o0=typeof queueMicrotask=="function"?queueMicrotask:typeof Wf<"u"?function(n){return Wf.resolve(null).then(n).catch(u0)}:Ff;function u0(n){setTimeout(function(){throw n})}function va(n){return n==="head"}function Pf(n,e){var t=e,a=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"||t==="/&"){if(a===0){n.removeChild(r),Di(e);return}a--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")a++;else if(t==="html")kr(n.ownerDocument.documentElement);else if(t==="head"){t=n.ownerDocument.head,kr(t);for(var l=t.firstChild;l;){var s=l.nextSibling,u=l.nodeName;l[Ma]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&l.rel.toLowerCase()==="stylesheet"||t.removeChild(l),l=s}}else t==="body"&&kr(n.ownerDocument.body);t=r}while(t);Di(e)}function $f(n,e){var t=n;n=0;do{var a=t.nextSibling;if(t.nodeType===1?e?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(e?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(n===0)break;n--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||n++;t=a}while(t)}function ho(n){var e=n.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var t=e;switch(e=e.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":ho(t),Xi(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}n.removeChild(t)}}function d0(n,e,t,a){for(;n.nodeType===1;){var r=t;if(n.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(a){if(!n[Ma])switch(e){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(l=n.getAttribute("rel"),l==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(l!==r.rel||n.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||n.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||n.getAttribute("title")!==(r.title==null?null:r.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(l=n.getAttribute("src"),(l!==(r.src==null?null:r.src)||n.getAttribute("type")!==(r.type==null?null:r.type)||n.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&l&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(e==="input"&&n.type==="hidden"){var l=r.name==null?null:""+r.name;if(r.type==="hidden"&&n.getAttribute("name")===l)return n}else return n;if(n=mt(n.nextSibling),n===null)break}return null}function f0(n,e,t){if(e==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!t||(n=mt(n.nextSibling),n===null))return null;return n}function nh(n,e){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=mt(n.nextSibling),n===null))return null;return n}function po(n){return n.data==="$?"||n.data==="$~"}function go(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function h0(n,e){var t=n.ownerDocument;if(n.data==="$~")n._reactRetry=e;else if(n.data!=="$?"||t.readyState!=="loading")e();else{var a=function(){e(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),n._reactRetry=a}}function mt(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return n}var mo=null;function eh(n){n=n.nextSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"||t==="/&"){if(e===0)return mt(n.nextSibling);e--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||e++}n=n.nextSibling}return null}function th(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(e===0)return n;e--}else t!=="/$"&&t!=="/&"||e++}n=n.previousSibling}return null}function ah(n,e,t){switch(e=Il(t),n){case"html":if(n=e.documentElement,!n)throw Error(d(452));return n;case"head":if(n=e.head,!n)throw Error(d(453));return n;case"body":if(n=e.body,!n)throw Error(d(454));return n;default:throw Error(d(451))}}function kr(n){for(var e=n.attributes;e.length;)n.removeAttributeNode(e[0]);Xi(n)}var bt=new Map,ih=new Set;function Fl(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var It=V.d;V.d={f:p0,r:g0,D:m0,C:b0,L:v0,m:y0,X:_0,S:x0,M:S0};function p0(){var n=It.f(),e=Gl();return n||e}function g0(n){var e=Mt(n);e!==null&&e.tag===5&&e.type==="form"?xd(e):It.r(n)}var Mi=typeof document>"u"?null:document;function rh(n,e,t){var a=Mi;if(a&&typeof e=="string"&&e){var r=Qe(e);r='link[rel="'+n+'"][href="'+r+'"]',typeof t=="string"&&(r+='[crossorigin="'+t+'"]'),ih.has(r)||(ih.add(r),n={rel:n,crossOrigin:t,href:e},a.querySelector(r)===null&&(e=a.createElement("link"),Re(e,"link",n),be(e),a.head.appendChild(e)))}}function m0(n){It.D(n),rh("dns-prefetch",n,null)}function b0(n,e){It.C(n,e),rh("preconnect",n,e)}function v0(n,e,t){It.L(n,e,t);var a=Mi;if(a&&n&&e){var r='link[rel="preload"][as="'+Qe(e)+'"]';e==="image"&&t&&t.imageSrcSet?(r+='[imagesrcset="'+Qe(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(r+='[imagesizes="'+Qe(t.imageSizes)+'"]')):r+='[href="'+Qe(n)+'"]';var l=r;switch(e){case"style":l=Ri(n);break;case"script":l=Ci(n)}bt.has(l)||(n=A({rel:"preload",href:e==="image"&&t&&t.imageSrcSet?void 0:n,as:e},t),bt.set(l,n),a.querySelector(r)!==null||e==="style"&&a.querySelector(Mr(l))||e==="script"&&a.querySelector(Rr(l))||(e=a.createElement("link"),Re(e,"link",n),be(e),a.head.appendChild(e)))}}function y0(n,e){It.m(n,e);var t=Mi;if(t&&n){var a=e&&typeof e.as=="string"?e.as:"script",r='link[rel="modulepreload"][as="'+Qe(a)+'"][href="'+Qe(n)+'"]',l=r;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Ci(n)}if(!bt.has(l)&&(n=A({rel:"modulepreload",href:n},e),bt.set(l,n),t.querySelector(r)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Rr(l)))return}a=t.createElement("link"),Re(a,"link",n),be(a),t.head.appendChild(a)}}}function x0(n,e,t){It.S(n,e,t);var a=Mi;if(a&&n){var r=Pt(a).hoistableStyles,l=Ri(n);e=e||"default";var s=r.get(l);if(!s){var u={loading:0,preload:null};if(s=a.querySelector(Mr(l)))u.loading=5;else{n=A({rel:"stylesheet",href:n,"data-precedence":e},t),(t=bt.get(l))&&bo(n,t);var f=s=a.createElement("link");be(f),Re(f,"link",n),f._p=new Promise(function(_,E){f.onload=_,f.onerror=E}),f.addEventListener("load",function(){u.loading|=1}),f.addEventListener("error",function(){u.loading|=2}),u.loading|=4,Wl(s,e,a)}s={type:"stylesheet",instance:s,count:1,state:u},r.set(l,s)}}}function _0(n,e){It.X(n,e);var t=Mi;if(t&&n){var a=Pt(t).hoistableScripts,r=Ci(n),l=a.get(r);l||(l=t.querySelector(Rr(r)),l||(n=A({src:n,async:!0},e),(e=bt.get(r))&&vo(n,e),l=t.createElement("script"),be(l),Re(l,"link",n),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(r,l))}}function S0(n,e){It.M(n,e);var t=Mi;if(t&&n){var a=Pt(t).hoistableScripts,r=Ci(n),l=a.get(r);l||(l=t.querySelector(Rr(r)),l||(n=A({src:n,async:!0,type:"module"},e),(e=bt.get(r))&&vo(n,e),l=t.createElement("script"),be(l),Re(l,"link",n),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(r,l))}}function lh(n,e,t,a){var r=(r=_n.current)?Fl(r):null;if(!r)throw Error(d(446));switch(n){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(e=Ri(t.href),t=Pt(r).hoistableStyles,a=t.get(e),a||(a={type:"style",instance:null,count:0,state:null},t.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){n=Ri(t.href);var l=Pt(r).hoistableStyles,s=l.get(n);if(s||(r=r.ownerDocument||r,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(n,s),(l=r.querySelector(Mr(n)))&&!l._p&&(s.instance=l,s.state.loading=5),bt.has(n)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},bt.set(n,t),l||T0(r,n,t,s.state))),e&&a===null)throw Error(d(528,""));return s}if(e&&a!==null)throw Error(d(529,""));return null;case"script":return e=t.async,t=t.src,typeof t=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ci(t),t=Pt(r).hoistableScripts,a=t.get(e),a||(a={type:"script",instance:null,count:0,state:null},t.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,n))}}function Ri(n){return'href="'+Qe(n)+'"'}function Mr(n){return'link[rel="stylesheet"]['+n+"]"}function sh(n){return A({},n,{"data-precedence":n.precedence,precedence:null})}function T0(n,e,t,a){n.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=n.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),Re(e,"link",t),be(e),n.head.appendChild(e))}function Ci(n){return'[src="'+Qe(n)+'"]'}function Rr(n){return"script[async]"+n}function ch(n,e,t){if(e.count++,e.instance===null)switch(e.type){case"style":var a=n.querySelector('style[data-href~="'+Qe(t.href)+'"]');if(a)return e.instance=a,be(a),a;var r=A({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(n.ownerDocument||n).createElement("style"),be(a),Re(a,"style",r),Wl(a,t.precedence,n),e.instance=a;case"stylesheet":r=Ri(t.href);var l=n.querySelector(Mr(r));if(l)return e.state.loading|=4,e.instance=l,be(l),l;a=sh(t),(r=bt.get(r))&&bo(a,r),l=(n.ownerDocument||n).createElement("link"),be(l);var s=l;return s._p=new Promise(function(u,f){s.onload=u,s.onerror=f}),Re(l,"link",a),e.state.loading|=4,Wl(l,t.precedence,n),e.instance=l;case"script":return l=Ci(t.src),(r=n.querySelector(Rr(l)))?(e.instance=r,be(r),r):(a=t,(r=bt.get(l))&&(a=A({},t),vo(a,r)),n=n.ownerDocument||n,r=n.createElement("script"),be(r),Re(r,"link",a),n.head.appendChild(r),e.instance=r);case"void":return null;default:throw Error(d(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Wl(a,t.precedence,n));return e.instance}function Wl(n,e,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=a.length?a[a.length-1]:null,l=r,s=0;s<a.length;s++){var u=a[s];if(u.dataset.precedence===e)l=u;else if(l!==r)break}l?l.parentNode.insertBefore(n,l.nextSibling):(e=t.nodeType===9?t.head:t,e.insertBefore(n,e.firstChild))}function bo(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.title==null&&(n.title=e.title)}function vo(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.integrity==null&&(n.integrity=e.integrity)}var Pl=null;function oh(n,e,t){if(Pl===null){var a=new Map,r=Pl=new Map;r.set(t,a)}else r=Pl,a=r.get(t),a||(a=new Map,r.set(t,a));if(a.has(n))return a;for(a.set(n,null),t=t.getElementsByTagName(n),r=0;r<t.length;r++){var l=t[r];if(!(l[Ma]||l[de]||n==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var s=l.getAttribute(e)||"";s=n+s;var u=a.get(s);u?u.push(l):a.set(s,[l])}}return a}function uh(n,e,t){n=n.ownerDocument||n,n.head.insertBefore(t,e==="title"?n.querySelector("head > title"):null)}function j0(n,e,t){if(t===1||e.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(n=e.disabled,typeof e.precedence=="string"&&n==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function dh(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function N0(n,e,t,a){if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var r=Ri(a.href),l=e.querySelector(Mr(r));if(l){e=l._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=$l.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=l,be(l);return}l=e.ownerDocument||e,a=sh(a),(r=bt.get(r))&&bo(a,r),l=l.createElement("link"),be(l);var s=l;s._p=new Promise(function(u,f){s.onload=u,s.onerror=f}),Re(l,"link",a),t.instance=l}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=$l.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}var yo=0;function w0(n,e){return n.stylesheets&&n.count===0&&es(n,n.stylesheets),0<n.count||0<n.imgCount?function(t){var a=setTimeout(function(){if(n.stylesheets&&es(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4+e);0<n.imgBytes&&yo===0&&(yo=62500*l0());var r=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&es(n,n.stylesheets),n.unsuspend)){var l=n.unsuspend;n.unsuspend=null,l()}},(n.imgBytes>yo?50:800)+e);return n.unsuspend=t,function(){n.unsuspend=null,clearTimeout(a),clearTimeout(r)}}:null}function $l(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)es(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var ns=null;function es(n,e){n.stylesheets=null,n.unsuspend!==null&&(n.count++,ns=new Map,e.forEach(E0,n),ns=null,$l.call(n))}function E0(n,e){if(!(e.state.loading&4)){var t=ns.get(n);if(t)var a=t.get(null);else{t=new Map,ns.set(n,t);for(var r=n.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<r.length;l++){var s=r[l];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(t.set(s.dataset.precedence,s),a=s)}a&&t.set(null,a)}r=e.instance,s=r.getAttribute("data-precedence"),l=t.get(s)||a,l===a&&t.set(null,r),t.set(s,r),this.count++,a=$l.bind(this),r.addEventListener("load",a),r.addEventListener("error",a),l?l.parentNode.insertBefore(r,l.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(r,n.firstChild)),e.state.loading|=4}}var Cr={$$typeof:W,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function A0(n,e,t,a,r,l,s,u,f){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$n(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$n(0),this.hiddenUpdates=$n(null),this.identifierPrefix=a,this.onUncaughtError=r,this.onCaughtError=l,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function fh(n,e,t,a,r,l,s,u,f,_,E,D){return n=new A0(n,e,t,s,f,_,E,D,u),e=1,l===!0&&(e|=24),l=at(3,null,null,e),n.current=l,l.stateNode=n,e=Ws(),e.refCount++,n.pooledCache=e,e.refCount++,l.memoizedState={element:a,isDehydrated:t,cache:e},ec(l),n}function hh(n){return n?(n=ui,n):ui}function ph(n,e,t,a,r,l){r=hh(r),a.context===null?a.context=r:a.pendingContext=r,a=sa(e),a.payload={element:t},l=l===void 0?null:l,l!==null&&(a.callback=l),t=ca(n,a,e),t!==null&&(Pe(t,n,e),dr(t,n,e))}function gh(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function xo(n,e){gh(n,e),(n=n.alternate)&&gh(n,e)}function mh(n){if(n.tag===13||n.tag===31){var e=Ba(n,67108864);e!==null&&Pe(e,n,67108864),xo(n,67108864)}}function bh(n){if(n.tag===13||n.tag===31){var e=ct();e=te(e);var t=Ba(n,e);t!==null&&Pe(t,n,e),xo(n,e)}}var ts=!0;function O0(n,e,t,a){var r=w.T;w.T=null;var l=V.p;try{V.p=2,_o(n,e,t,a)}finally{V.p=l,w.T=r}}function k0(n,e,t,a){var r=w.T;w.T=null;var l=V.p;try{V.p=8,_o(n,e,t,a)}finally{V.p=l,w.T=r}}function _o(n,e,t,a){if(ts){var r=So(a);if(r===null)lo(n,e,a,as,t),yh(n,a);else if(R0(r,n,e,t,a))a.stopPropagation();else if(yh(n,a),e&4&&-1<M0.indexOf(n)){for(;r!==null;){var l=Mt(r);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var s=Ke(l.pendingLanes);if(s!==0){var u=l;for(u.pendingLanes|=2,u.entangledLanes|=2;s;){var f=1<<31-qe(s);u.entanglements[1]|=f,s&=~f}At(l),(Un&6)===0&&(ql=oe()+500,Er(0))}}break;case 31:case 13:u=Ba(l,2),u!==null&&Pe(u,l,2),Gl(),xo(l,2)}if(l=So(a),l===null&&lo(n,e,a,as,t),l===r)break;r=l}r!==null&&a.stopPropagation()}else lo(n,e,a,null,t)}}function So(n){return n=xn(n),To(n)}var as=null;function To(n){if(as=null,n=He(n),n!==null){var e=z(n);if(e===null)n=null;else{var t=e.tag;if(t===13){if(n=L(e),n!==null)return n;n=null}else if(t===31){if(n=U(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null)}}return as=n,null}function vh(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xr()){case Ot:return 2;case wa:return 8;case Ea:case xs:return 32;case Qr:return 268435456;default:return 32}default:return 32}}var jo=!1,ya=null,xa=null,_a=null,Dr=new Map,Lr=new Map,Sa=[],M0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function yh(n,e){switch(n){case"focusin":case"focusout":ya=null;break;case"dragenter":case"dragleave":xa=null;break;case"mouseover":case"mouseout":_a=null;break;case"pointerover":case"pointerout":Dr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lr.delete(e.pointerId)}}function zr(n,e,t,a,r,l){return n===null||n.nativeEvent!==l?(n={blockedOn:e,domEventName:t,eventSystemFlags:a,nativeEvent:l,targetContainers:[r]},e!==null&&(e=Mt(e),e!==null&&mh(e)),n):(n.eventSystemFlags|=a,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function R0(n,e,t,a,r){switch(e){case"focusin":return ya=zr(ya,n,e,t,a,r),!0;case"dragenter":return xa=zr(xa,n,e,t,a,r),!0;case"mouseover":return _a=zr(_a,n,e,t,a,r),!0;case"pointerover":var l=r.pointerId;return Dr.set(l,zr(Dr.get(l)||null,n,e,t,a,r)),!0;case"gotpointercapture":return l=r.pointerId,Lr.set(l,zr(Lr.get(l)||null,n,e,t,a,r)),!0}return!1}function xh(n){var e=He(n.target);if(e!==null){var t=z(e);if(t!==null){if(e=t.tag,e===13){if(e=L(t),e!==null){n.blockedOn=e,ni(n.priority,function(){bh(t)});return}}else if(e===31){if(e=U(t),e!==null){n.blockedOn=e,ni(n.priority,function(){bh(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function is(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=So(n.nativeEvent);if(t===null){t=n.nativeEvent;var a=new t.constructor(t.type,t);tn=a,t.target.dispatchEvent(a),tn=null}else return e=Mt(t),e!==null&&mh(e),n.blockedOn=t,!1;e.shift()}return!0}function _h(n,e,t){is(n)&&t.delete(e)}function C0(){jo=!1,ya!==null&&is(ya)&&(ya=null),xa!==null&&is(xa)&&(xa=null),_a!==null&&is(_a)&&(_a=null),Dr.forEach(_h),Lr.forEach(_h)}function rs(n,e){n.blockedOn===e&&(n.blockedOn=null,jo||(jo=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,C0)))}var ls=null;function Sh(n){ls!==n&&(ls=n,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){ls===n&&(ls=null);for(var e=0;e<n.length;e+=3){var t=n[e],a=n[e+1],r=n[e+2];if(typeof a!="function"){if(To(a||t)===null)continue;break}var l=Mt(t);l!==null&&(n.splice(e,3),e-=3,_c(l,{pending:!0,data:r,method:t.method,action:a},a,r))}}))}function Di(n){function e(f){return rs(f,n)}ya!==null&&rs(ya,n),xa!==null&&rs(xa,n),_a!==null&&rs(_a,n),Dr.forEach(e),Lr.forEach(e);for(var t=0;t<Sa.length;t++){var a=Sa[t];a.blockedOn===n&&(a.blockedOn=null)}for(;0<Sa.length&&(t=Sa[0],t.blockedOn===null);)xh(t),t.blockedOn===null&&Sa.shift();if(t=(n.ownerDocument||n).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var r=t[a],l=t[a+1],s=r[De]||null;if(typeof l=="function")s||Sh(t);else if(s){var u=null;if(l&&l.hasAttribute("formAction")){if(r=l,s=l[De]||null)u=s.formAction;else if(To(r)!==null)continue}else u=s.action;typeof u=="function"?t[a+1]=u:(t.splice(a,3),a-=3),Sh(t)}}}function Th(){function n(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(s){return r=s})},focusReset:"manual",scroll:"manual"})}function e(){r!==null&&(r(),r=null),a||setTimeout(t,20)}function t(){if(!a&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,r=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(t,100),function(){a=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),r!==null&&(r(),r=null)}}}function No(n){this._internalRoot=n}ss.prototype.render=No.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(d(409));var t=e.current,a=ct();ph(t,a,n,e,null,null)},ss.prototype.unmount=No.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ph(n.current,2,null,n,null,null),Gl(),e[Ft]=null}};function ss(n){this._internalRoot=n}ss.prototype.unstable_scheduleHydration=function(n){if(n){var e=$a();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Sa.length&&e!==0&&e<Sa[t].priority;t++);Sa.splice(t,0,n),t===0&&xh(n)}};var jh=b.version;if(jh!=="19.2.3")throw Error(d(527,jh,"19.2.3"));V.findDOMNode=function(n){var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(d(188)):(n=Object.keys(n).join(","),Error(d(268,n)));return n=S(e),n=n!==null?q(n):null,n=n===null?null:n.stateNode,n};var D0={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:w,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cs.isDisabled&&cs.supportsFiber)try{Aa=cs.inject(D0),Ce=cs}catch{}}return Ur.createRoot=function(n,e){if(!j(n))throw Error(d(299));var t=!1,a="",r=kd,l=Md,s=Rd;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(r=e.onUncaughtError),e.onCaughtError!==void 0&&(l=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=fh(n,1,!1,null,null,t,a,null,r,l,s,Th),n[Ft]=e.current,ro(n),new No(e)},Ur.hydrateRoot=function(n,e,t){if(!j(n))throw Error(d(299));var a=!1,r="",l=kd,s=Md,u=Rd,f=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError),t.formState!==void 0&&(f=t.formState)),e=fh(n,1,!0,e,t??null,a,r,f,l,s,u,Th),e.context=hh(null),t=e.current,a=ct(),a=te(a),r=sa(a),r.callback=null,ca(t,r,a),t=a,e.current.lanes=t,Zn(e,t),At(e),n[Ft]=e.current,ro(n),new ss(e)},Ur.version="19.2.3",Ur}var Dh;function V0(){if(Dh)return Eo.exports;Dh=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(b){console.error(b)}}return c(),Eo.exports=Y0(),Eo.exports}var K0=V0();const X0=Ui(K0);var Y=Vo();const ms=Ui(Y),Ko=["python","javascript","java","cpp"];function Q0(){try{const c=localStorage.getItem("selectedLanguage");return c&&Ko.includes(c)?c:"python"}catch{return"python"}}const $h=Y.createContext(void 0),J0=({children:c})=>{const[b,g]=Y.useState(Q0);return Y.useEffect(()=>{try{localStorage.setItem("selectedLanguage",b)}catch{}},[b]),i.jsx($h.Provider,{value:{selectedLanguage:b,setSelectedLanguage:g},children:c})};function np(){const c=Y.useContext($h);if(c===void 0)throw new Error("useLanguage must be used within a LanguageProvider");return c}const ep=Y.createContext(void 0);function Z0({children:c}){const[b,g]=Y.useState(!1),d=()=>g(!0),j=()=>g(!1),z=()=>g(!b);return i.jsx(ep.Provider,{value:{isSidebarOpen:b,showSidebar:d,hideSidebar:j,toggleSidebar:z},children:c})}function Xo(){const c=Y.useContext(ep);if(c===void 0)throw new Error("useSidebar must be used within SidebarProvider");return c}const tp=Y.createContext(void 0);function I0({children:c}){const[b,g]=Y.useState("finder");return i.jsx(tp.Provider,{value:{view:b,setView:g},children:c})}function bs(){const c=Y.useContext(tp);if(c===void 0)throw new Error("useView must be used within ViewProvider");return c}const F0="_topbar_1nd3w_1",W0="_container_1nd3w_17",P0="_visuallyHidden_1nd3w_43",$0="_wordmark_1nd3w_55",nv="_title_1nd3w_68",ev="_segmented_1nd3w_85",tv="_segment_1nd3w_85",av="_tools_1nd3w_159",iv="_select_1nd3w_171",rv="_selectChevron_1nd3w_210",lv="_iconLink_1nd3w_226",sv="_hamburger_1nd3w_255",cv="_hamburgerIcon_1nd3w_272",ov="_hamburgerTop_1nd3w_282",uv="_open_1nd3w_285",dv="_hamburgerMiddle_1nd3w_289",fv="_hamburgerBottom_1nd3w_296",ge={topbar:F0,container:W0,visuallyHidden:P0,wordmark:$0,title:nv,segmented:ev,segment:tv,tools:av,select:iv,selectChevron:rv,iconLink:lv,hamburger:sv,hamburgerIcon:cv,hamburgerTop:ov,open:uv,hamburgerMiddle:dv,hamburgerBottom:fv};function Te(...c){let b="";for(const g of c)if(g){if(typeof g=="string"||typeof g=="number")b+=(b&&" ")+g;else if(Array.isArray(g)){const d=Te(...g);d&&(b+=(b&&" ")+d)}else if(typeof g=="object")for(const d in g)g[d]&&(b+=(b&&" ")+d)}return b}function ap(){const c=document.documentElement,b=getComputedStyle(c).getPropertyValue("--navbar-height");return parseFloat(b)||76}const hv=c=>c<.5?2*c*c:1-Math.pow(-2*c+2,2)/2;function Qo(c,b=0){const g=document.querySelector(c);if(!g)return;const d=g.offsetTop,j=window.scrollY,z=d-j-b,L=performance.now(),U=1500,R=S=>{const q=S-L,A=q/U,C=hv(A),J=j+z*(A>1?1:C);window.scrollTo({top:J}),q<U&&requestAnimationFrame(R)};requestAnimationFrame(R)}const pv=6,gv=2e3;let Yo=0;function Jo(){cancelAnimationFrame(Yo)}function mv(c,b){Jo();const g=performance.now();let d=-1,j=0;const z=()=>{const L=document.querySelector(c);L&&(j=L.offsetTop===d?j+1:0,d=L.offsetTop);const U=performance.now()-g>gv;if(j>=pv||U){Qo(c,b);return}Yo=requestAnimationFrame(z)};Yo=requestAnimationFrame(z)}const bv="_container_125w8_1",vv="_input_125w8_7",yv="_label_125w8_18",xv="_indicator_125w8_34",_v="_sun_125w8_58",Sv="_moon_125w8_65",Li={container:bv,input:vv,label:yv,indicator:xv,sun:_v,moon:Sv},Tv="theme";function Lh(){document.documentElement.dispatchEvent(new Event("themeChange"))}function jv(){const[c,b]=Y.useState("dark");Y.useEffect(()=>{const d=document.documentElement.getAttribute("data-theme")==="light"?"light":"dark";b(d),Lh()},[]);const g=()=>{const d=c==="light"?"dark":"light";b(d),document.documentElement.setAttribute("data-theme",d);try{localStorage.setItem(Tv,d)}catch{}Lh()};return i.jsxs("div",{className:Li.container,children:[i.jsx("input",{className:Li.input,"aria-label":"Light theme",role:"switch",id:"theme-switch",type:"checkbox",checked:c==="light",onChange:g}),i.jsx("label",{className:Li.label,htmlFor:"theme-switch",title:"Toggle light theme",children:i.jsxs("span",{className:Li.indicator,children:[i.jsx("svg",{className:Li.moon,viewBox:"0 0 16 16","aria-hidden":"true",children:i.jsx("path",{d:"M13 9.5A5.5 5.5 0 0 1 6.5 3a5.5 5.5 0 1 0 6.5 6.5Z"})}),i.jsxs("svg",{className:Li.sun,viewBox:"0 0 16 16","aria-hidden":"true",children:[i.jsx("circle",{cx:"8",cy:"8",r:"2.75"}),i.jsx("path",{d:"M8 1.5v1.75M8 12.75v1.75M1.5 8h1.75M12.75 8h1.75M3.4 3.4l1.25 1.25M11.35 11.35l1.25 1.25M3.4 12.6l1.25-1.25M11.35 4.65l1.25-1.25"})]})]})})]})}function Nv(){return i.jsx("svg",{viewBox:"0 0 128 128",children:i.jsxs("g",{fill:"var(--svg-github-fill)",children:[i.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"}),i.jsx("path",{d:"M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm2.382 3.477c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237m4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"})]})})}const wv=[{id:"finder",label:"Pattern Finder"},{id:"cheatsheet",label:"Reference"}],Ev={python:"Python",javascript:"JavaScript",java:"Java",cpp:"C++"};function Av({forwardedRef:c}){const b=Y.useRef(null),{isSidebarOpen:g,showSidebar:d,hideSidebar:j,toggleSidebar:z}=Xo(),{view:L,setView:U}=bs(),{selectedLanguage:R,setSelectedLanguage:S}=np();Y.useLayoutEffect(()=>{if(!b.current)return;const H=new ResizeObserver(Q=>{for(const hn of Q){const yn=hn.borderBoxSize[0].blockSize;document.documentElement.style.setProperty("--topbar-height",`${yn}px`)}});return H.observe(b.current),()=>H.disconnect()},[]);const q=H=>{H.preventDefault(),window.history.replaceState({},"",window.location.pathname),Qo("main",ap()-2)},A=()=>z(),C=H=>{H!==L&&(Jo(),U(H),H==="finder"?j():window.matchMedia("(max-width: 768px)").matches||d(),window.scrollTo({top:0}))},J=H=>{S(H.target.value)};return i.jsx("header",{ref:b,className:ge.topbar,children:i.jsxs("div",{className:ge.container,children:[L==="cheatsheet"&&i.jsxs("button",{ref:c,type:"button",className:ge.hamburger,onClick:A,"aria-label":g?"Hide reference sections":"Show reference sections","aria-expanded":g,"aria-controls":"reference-sections",children:[i.jsx("span",{className:Te(ge.hamburgerIcon,ge.hamburgerTop,g&&ge.open)}),i.jsx("span",{className:Te(ge.hamburgerIcon,ge.hamburgerMiddle,g&&ge.open)}),i.jsx("span",{className:Te(ge.hamburgerIcon,ge.hamburgerBottom,g&&ge.open)})]}),i.jsx("a",{href:"/leetcode-pattern-drill/",className:ge.wordmark,onClick:q,children:i.jsx("h1",{className:ge.title,children:"Pattern Drill"})}),i.jsx("div",{className:ge.segmented,role:"group","aria-label":"View",children:wv.map(({id:H,label:Q})=>i.jsx("button",{type:"button",className:ge.segment,"aria-pressed":L===H,onClick:()=>C(H),children:Q},H))}),i.jsxs("div",{className:ge.tools,children:[i.jsxs("label",{className:ge.select,children:[i.jsx("span",{className:ge.visuallyHidden,children:"Template language"}),i.jsx("select",{value:R,onChange:J,children:Ko.map(H=>i.jsx("option",{value:H,children:Ev[H]},H))}),i.jsx("svg",{className:ge.selectChevron,viewBox:"0 0 12 12","aria-hidden":"true",children:i.jsx("path",{d:"M2.5 4.5 6 8l3.5-3.5"})})]}),i.jsx(jv,{}),i.jsx("a",{href:"https://github.com/Tyler-Reagan/leetcode-pattern-drill","aria-label":"GitHub source",className:ge.iconLink,target:"_blank",rel:"noopener noreferrer",children:i.jsx(Nv,{})})]})]})})}const Ov="_sidebar_u19dm_1",kv="_exit_u19dm_17",Mv="_hide_u19dm_20",Rv="_heading_u19dm_29",Cv="_scrollContainer_u19dm_41",qr={sidebar:Ov,exit:kv,hide:Mv,heading:Rv,scrollContainer:Cv};var os={},zh;function Dv(){if(zh)return os;zh=1,os.match=z,os.parse=L;var c=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,b=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,g=/^(?:(min|max)-)?(.+)/,d=/(em|rem|px|cm|mm|in|pt|pc)?$/,j=/(dpi|dpcm|dppx)?$/;function z(q,A){return L(q).some(function(C){var J=C.inverse,H=C.type==="all"||A.type===C.type;if(H&&J||!(H||J))return!1;var Q=C.expressions.every(function(hn){var yn=hn.feature,un=hn.modifier,W=hn.value,cn=A[yn];if(!cn)return!1;switch(yn){case"orientation":case"scan":return cn.toLowerCase()===W.toLowerCase();case"width":case"height":case"device-width":case"device-height":W=S(W),cn=S(cn);break;case"resolution":W=R(W),cn=R(cn);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":W=U(W),cn=U(cn);break;case"grid":case"color":case"color-index":case"monochrome":W=parseInt(W,10)||1,cn=parseInt(cn,10)||0;break}switch(un){case"min":return cn>=W;case"max":return cn<=W;default:return cn===W}});return Q&&!J||!Q&&J})}function L(q){return q.split(",").map(function(A){A=A.trim();var C=A.match(c),J=C[1],H=C[2],Q=C[3]||"",hn={};return hn.inverse=!!J&&J.toLowerCase()==="not",hn.type=H?H.toLowerCase():"all",Q=Q.match(/\([^\)]+\)/g)||[],hn.expressions=Q.map(function(yn){var un=yn.match(b),W=un[1].toLowerCase().match(g);return{modifier:W[1],feature:W[2],value:un[2]}}),hn})}function U(q){var A=Number(q),C;return A||(C=q.match(/^(\d+)\s*\/\s*(\d+)$/),A=C[1]/C[2]),A}function R(q){var A=parseFloat(q),C=String(q).match(j)[1];switch(C){case"dpcm":return A/2.54;case"dppx":return A*96;default:return A}}function S(q){var A=parseFloat(q),C=String(q).match(d)[1];switch(C){case"em":return A*16;case"rem":return A*16;case"cm":return A*96/2.54;case"mm":return A*96/2.54/10;case"in":return A*96;case"pt":return A*72;case"pc":return A*72/12;default:return A}}return os}var Ro,Bh;function Lv(){if(Bh)return Ro;Bh=1;var c=Dv().match,b=typeof window<"u"?window.matchMedia:null;function g(j,z,L){var U=this,R;b&&!L&&(R=b.call(window,j)),R?(this.matches=R.matches,this.media=R.media,R.addListener(A)):(this.matches=c(j,z),this.media=j),this.addListener=S,this.removeListener=q,this.dispose=C;function S(J){R&&R.addListener(J)}function q(J){R&&R.removeListener(J)}function A(J){U.matches=J.matches,U.media=J.media}function C(){R&&R.removeListener(A)}}function d(j,z,L){return new g(j,z,L)}return Ro=d,Ro}var zv=Lv();const Bv=Ui(zv);var Uv=/[A-Z]/g,qv=/^ms-/,Co={};function Hv(c){return"-"+c.toLowerCase()}function ip(c){if(Co.hasOwnProperty(c))return Co[c];var b=c.replace(Uv,Hv);return Co[c]=qv.test(b)?"-"+b:b}function Gv(c,b){if(c===b)return!0;if(!c||!b)return!1;const g=Object.keys(c),d=Object.keys(b),j=g.length;if(d.length!==j)return!1;for(let z=0;z<j;z++){const L=g[z];if(c[L]!==b[L]||!Object.prototype.hasOwnProperty.call(b,L))return!1}return!0}var Do={exports:{}},Lo,Uh;function Yv(){if(Uh)return Lo;Uh=1;var c="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Lo=c,Lo}var zo,qh;function Vv(){if(qh)return zo;qh=1;var c=Yv();function b(){}function g(){}return g.resetWarningCache=b,zo=function(){function d(L,U,R,S,q,A){if(A!==c){var C=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw C.name="Invariant Violation",C}}d.isRequired=d;function j(){return d}var z={array:d,bigint:d,bool:d,func:d,number:d,object:d,string:d,symbol:d,any:d,arrayOf:j,element:d,elementType:d,instanceOf:j,node:d,objectOf:j,oneOf:j,oneOfType:j,shape:j,exact:j,checkPropTypes:g,resetWarningCache:b};return z.PropTypes=z,z},zo}var Hh;function Kv(){return Hh||(Hh=1,Do.exports=Vv()()),Do.exports}var Xv=Kv();const qn=Ui(Xv),Ve=qn.oneOfType([qn.string,qn.number]),rp={all:qn.bool,grid:qn.bool,aural:qn.bool,braille:qn.bool,handheld:qn.bool,print:qn.bool,projection:qn.bool,screen:qn.bool,tty:qn.bool,tv:qn.bool,embossed:qn.bool},Qv={orientation:qn.oneOf(["portrait","landscape"]),scan:qn.oneOf(["progressive","interlace"]),aspectRatio:qn.string,deviceAspectRatio:qn.string,height:Ve,deviceHeight:Ve,width:Ve,deviceWidth:Ve,color:qn.bool,colorIndex:qn.bool,monochrome:qn.bool,resolution:Ve,type:Object.keys(rp)},{type:BT,...Jv}=Qv,Zv={minAspectRatio:qn.string,maxAspectRatio:qn.string,minDeviceAspectRatio:qn.string,maxDeviceAspectRatio:qn.string,minHeight:Ve,maxHeight:Ve,minDeviceHeight:Ve,maxDeviceHeight:Ve,minWidth:Ve,maxWidth:Ve,minDeviceWidth:Ve,maxDeviceWidth:Ve,minColor:qn.number,maxColor:qn.number,minColorIndex:qn.number,maxColorIndex:qn.number,minMonochrome:qn.number,maxMonochrome:qn.number,minResolution:Ve,maxResolution:Ve,...Jv},Iv={...rp,...Zv};var Fv={all:Iv};const Wv=c=>`not ${c}`,Pv=(c,b)=>{const g=ip(c);return typeof b=="number"&&(b=`${b}px`),b===!0?g:b===!1?Wv(g):`(${g}: ${b})`},$v=c=>c.join(" and "),ny=c=>{const b=[];return Object.keys(Fv.all).forEach(g=>{const d=c[g];d!=null&&b.push(Pv(g,d))}),$v(b)},ey=Y.createContext(void 0),ty=c=>c.query||ny(c),Gh=c=>c?Object.keys(c).reduce((g,d)=>(g[ip(d)]=c[d],g),{}):void 0,lp=()=>{const c=Y.useRef(!1);return Y.useEffect(()=>{c.current=!0},[]),c.current},ay=c=>{const b=Y.useContext(ey),g=()=>Gh(c)||Gh(b),[d,j]=Y.useState(g);return Y.useEffect(()=>{const z=g();Gv(d,z)||j(z)},[c,b]),d},iy=c=>{const b=()=>ty(c),[g,d]=Y.useState(b);return Y.useEffect(()=>{const j=b();g!==j&&d(j)},[c]),g},ry=(c,b)=>{const g=()=>Bv(c,b||{},!!b),[d,j]=Y.useState(g),z=lp();return Y.useEffect(()=>{if(z){const L=g();return j(L),()=>{L&&L.dispose()}}},[c,b]),d},ly=c=>{const[b,g]=Y.useState(c.matches);return Y.useEffect(()=>{const d=j=>{g(j.matches)};return c.addListener(d),g(c.matches),()=>{c.removeListener(d)}},[c]),b},sy=(c,b,g)=>{const d=ay(b),j=iy(c);if(!j)throw new Error("Invalid or missing MediaQuery!");const z=ry(j,d),L=ly(z),U=lp();return Y.useEffect(()=>{U&&g&&g(L)},[L]),Y.useEffect(()=>()=>{z&&z.dispose()},[]),L};function sp(c,b){Y.useEffect(()=>{const g=d=>{const j=d.target;(Array.isArray(c)?c:[c]).every(U=>U.current&&!U.current.contains(j))&&b()};return document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g)},[c,b])}const cy="_accordion_hdwo0_1",oy="_button_hdwo0_7",uy="_open_hdwo0_42",dy="_content_hdwo0_46",us={accordion:cy,button:oy,open:uy,content:dy};function fy(c){const b=parseFloat(c);return!isNaN(b)&&isFinite(b)}function Yh(c){return typeof c=="string"&&c[c.length-1]==="%"&&fy(c.substring(0,c.length-1))}function Bo(c,b,g){b===0&&!g&&c?.style&&c?.children.length>0&&(c.style.display="none")}function hy(c,b){b===0&&c?.style&&(c.style.display="")}const py={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"};function Vh(c,b){return[c.static,b===0&&c.staticHeightZero,typeof b=="number"&&b>0?c.staticHeightSpecific:null,b==="auto"&&c.staticHeightAuto].filter(g=>g).join(" ")}const gy=["animateOpacity","animationStateClasses","applyInlineTransitions","children","className","contentClassName","contentRef","delay","duration","easing","height","onHeightAnimationEnd","onHeightAnimationStart","style","disableDisplayNone"],my=ms.forwardRef((c,b)=>{const{animateOpacity:g=!1,animationStateClasses:d={},applyInlineTransitions:j=!0,children:z,className:L="",contentClassName:U,delay:R=0,disableDisplayNone:S=!1,duration:q=500,easing:A="ease",height:C,onHeightAnimationEnd:J,onHeightAnimationStart:H,style:Q,contentRef:hn}=c,yn=Object.assign({},c);gy.forEach(sn=>{delete yn[sn]});const un=Y.useRef(C),W=Y.useRef(null),cn=Y.useRef(),Dn=Y.useRef(),Rn=Y.useRef(Object.assign(Object.assign({},py),d)),mn=typeof window<"u",Fn=Y.useRef(mn&&window.matchMedia?window.matchMedia("(prefers-reduced-motion)").matches:!1),je=Fn.current?0:R,Be=Fn.current?0:q;let me=C,re="visible";typeof C=="number"?(me=C<0?0:C,re="hidden"):Yh(me)&&(me=C==="0%"?0:C,re="hidden");const[Ue,ce]=Y.useState(me),[Ee,w]=Y.useState(re),[V,F]=Y.useState(!1),[jn,Nn]=Y.useState(Vh(Rn.current,C));Y.useEffect(()=>{Bo(W.current,Ue,S)},[]),Y.useEffect(()=>{if(C!==un.current&&W.current){hy(W.current,un.current),W.current.style.overflow="hidden";const sn=W.current.offsetHeight;W.current.style.overflow="";const _n=Be+je;let bn,Ln,Wn="hidden",$e;const St=un.current==="auto";typeof C=="number"?(bn=C<0?0:C,Ln=bn):Yh(C)?(bn=C==="0%"?0:C,Ln=bn):(bn=sn,Ln="auto",Wn=void 0),St&&(Ln=bn,bn=sn);const ja=[Rn.current.animating,(un.current==="auto"||C<un.current)&&Rn.current.animatingUp,(C==="auto"||C>un.current)&&Rn.current.animatingDown,Ln===0&&Rn.current.animatingToHeightZero,Ln==="auto"&&Rn.current.animatingToHeightAuto,typeof Ln=="number"&&Ln>0?Rn.current.animatingToHeightSpecific:null].filter(vt=>vt).join(" "),Na=Vh(Rn.current,Ln);ce(bn),w("hidden"),F(!St),Nn(ja),clearTimeout(Dn.current),clearTimeout(cn.current),St?($e=!0,Dn.current=setTimeout(()=>{ce(Ln),w(Wn),F($e),H?.(Ln)},50),cn.current=setTimeout(()=>{F(!1),Nn(Na),Bo(W.current,Ln,S),J?.(Ln)},_n)):(H?.(bn),Dn.current=setTimeout(()=>{ce(Ln),w(Wn),F(!1),Nn(Na),C!=="auto"&&Bo(W.current,bn,S),J?.(bn)},_n))}return un.current=C,()=>{clearTimeout(Dn.current),clearTimeout(cn.current)}},[C]);const m=Object.assign(Object.assign({},Q),{height:Ue,overflow:Ee||Q?.overflow});V&&j&&(m.transition=`height ${Be}ms ${A} ${je}ms`,Q?.transition&&(m.transition=`${Q.transition}, ${m.transition}`),m.WebkitTransition=m.transition);const O={};g&&(O.transition=`opacity ${Be}ms ${A} ${je}ms`,O.WebkitTransition=O.transition,Ue===0&&(O.opacity=0));const $=typeof yn["aria-hidden"]<"u"?yn["aria-hidden"]:C===0;return ms.createElement("div",Object.assign({},yn,{"aria-hidden":$,className:`${jn} ${L}`,style:m,ref:b}),ms.createElement("div",{className:U,style:O,ref:sn=>{W.current=sn,hn&&(hn.current=sn)}},z))});function by(){return i.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("polyline",{points:"6 9 12 15 18 9"})})}function Ye({title:c,children:b}){const[g,d]=Y.useState(!1),j=g?"auto":0,z=Te(us.button,g&&us.open),L=()=>d(!g);return i.jsxs("div",{className:us.accordion,children:[i.jsxs("button",{type:"button",className:z,onClick:L,"aria-expanded":g,children:[i.jsx("span",{children:c}),i.jsx(by,{})]}),i.jsx(my,{animateOpacity:!0,height:j,duration:400,children:i.jsx("div",{className:us.content,children:b})})]})}const vy="_linkWrapper_1p79w_1",yy="_link_1p79w_1",Kh={linkWrapper:vy,link:yy},xy="_tooltip_cgi4r_1",_y="_exit_cgi4r_15",Sy="_text_cgi4r_28",Uo={tooltip:xy,exit:_y,text:Sy};var Ty=Ph();const jy=Ui(Ty);function Ny({anchorRef:c,content:b,showTooltip:g}){const d=Y.useRef(null),[j,z]=Y.useState(null),[L,U]=Y.useState(!1),R=Te(Uo.tooltip,!g&&Uo.exit),S=()=>U(!1),q=()=>{g||U(!0)};return Y.useEffect(()=>{if(!g||!c.current)return;const A=c.current.getBoundingClientRect(),C=d.current?.offsetHeight??0,J=A.left+window.scrollX,H=A.top+window.scrollY-C-4;z({top:H,left:J})},[g]),(g||!L)&&c.current&&jy.createPortal(i.jsx("div",{ref:d,className:R,style:j??{},onAnimationStart:S,onAnimationEnd:q,children:i.jsx("span",{className:Uo.text,children:b})}),document.body)}const qo="pd-nav-link";function I({href:c,description:b}){const g=Y.useRef(null),{view:d,setView:j}=bs(),[z,L]=Y.useState(!1),[U,R]=Y.useState(()=>window.location.hash);let S;Y.useEffect(()=>{const H=()=>R(window.location.hash);return window.addEventListener(qo,H),window.addEventListener("hashchange",H),()=>{window.removeEventListener(qo,H),window.removeEventListener("hashchange",H)}},[]);const q=d==="cheatsheet"&&U===c,A=H=>{H.preventDefault(),window.history.replaceState({},"",c),window.dispatchEvent(new Event(qo)),clearTimeout(S),L(!1),Jo();const Q=ap()-2;d==="finder"?(j("cheatsheet"),mv(c,Q)):Qo(c,Q)},C=()=>{S=setTimeout(()=>{L(!0)},700)},J=()=>{clearTimeout(S),L(!1)};return i.jsxs("div",{className:Kh.linkWrapper,children:[i.jsx("a",{ref:g,href:c,className:Kh.link,onClick:A,role:"button","aria-current":q?"location":void 0,"aria-description":b,onMouseEnter:C,onMouseLeave:J,children:b}),i.jsx(Ny,{anchorRef:g,content:b,showTooltip:z})]})}function wy(){return i.jsxs(i.Fragment,{children:[i.jsxs(Ye,{title:"Big O",children:[i.jsx(I,{href:"#bigo-chart",description:"Time/Space Complexities"}),i.jsx(I,{href:"#bigo-data-structure-operations-table",description:"Data Structure Operations"}),i.jsx(I,{href:"#bigo-sorting-algorithms-table",description:"Sorting Algorithms"})]}),i.jsxs(Ye,{title:"Array",children:[i.jsx(I,{href:"#array-two-pointers-one-input",description:"two pointers: one input, opposite ends"}),i.jsx(I,{href:"#array-two-pointers-two-inputs",description:"two pointers: two inputs, exhaust both"}),i.jsx(I,{href:"#array-sliding-window",description:"sliding window"}),i.jsx(I,{href:"#array-prefix-sum",description:"prefix sum"}),i.jsx(I,{href:"#array-string-building",description:"efficient string building"})]}),i.jsxs(Ye,{title:"Hash Map",children:[i.jsx(I,{href:"#hashmap-find-number-of-subarrays",description:"find number of subarrays that fit an exact criteria"}),i.jsx(I,{href:"#hashmap-sliding-window",description:"sliding window"})]}),i.jsxs(Ye,{title:"Linked List",children:[i.jsx(I,{href:"#linkedlist-fast-and-slow-pointer",description:"fast and slow pointer"}),i.jsx(I,{href:"#linkedlist-reverse",description:"reverse linked list"})]}),i.jsxs(Ye,{title:"Stack",children:[i.jsx(I,{href:"#stack-monotonic-increasing",description:"monotonic increasing stack"}),i.jsx(I,{href:"#stack-monotonic-decreasing",description:"monotonic decreasing stack"})]}),i.jsxs(Ye,{title:"Binary Tree",children:[i.jsx(I,{href:"#tree-dfs-recursive",description:"DFS (recursive)"}),i.jsx(I,{href:"#tree-dfs-iterative",description:"DFS (iterative)"}),i.jsx(I,{href:"#tree-bfs",description:"BFS"})]}),i.jsxs(Ye,{title:"Graph",children:[i.jsx(I,{href:"#graph-dfs-recursive",description:"DFS (recursive)"}),i.jsx(I,{href:"#graph-dfs-iterative",description:"DFS (iterative)"}),i.jsx(I,{href:"#graph-bfs",description:"BFS"}),i.jsx(I,{href:"#graph-dijkstra",description:"Dijkstra (shortest path)"}),i.jsx(I,{href:"#graph-bellman-ford",description:"Bellman-Ford (shortest path)"}),i.jsx(I,{href:"#graph-kahn",description:"Kahn (topological sort)"}),i.jsx(I,{href:"#graph-kruskal",description:"Kruskal (mst)"}),i.jsx(I,{href:"#graph-prim",description:"Prim (mst)"})]}),i.jsx(Ye,{title:"Heap",children:i.jsx(I,{href:"#heap-find-top-k-elements",description:"find top k elements with heap"})}),i.jsxs(Ye,{title:"Binary Search",children:[i.jsx(I,{href:"#binarysearch-binary-search",description:"binary search"}),i.jsx(I,{href:"#binarysearch-duplicate-elements-left-insertion",description:"duplicate elements, left-most insertion point"}),i.jsx(I,{href:"#binarysearch-duplicate-elements-right-insertion",description:"duplicate elements, right-most insertion point"}),i.jsx(I,{href:"#binarysearch-greedy-minimum",description:"greedy (minimum)"}),i.jsx(I,{href:"#binarysearch-greedy-maximum",description:"greedy (maximum)"})]}),i.jsx(Ye,{title:"Backtracking",children:i.jsx(I,{href:"#backtracking-backtracking",description:"backtracking"})}),i.jsxs(Ye,{title:"Dynamic Programming",children:[i.jsx(I,{href:"#dp-top-down",description:"top-down DP"}),i.jsx(I,{href:"#dp-bottom-up",description:"bottom-up DP"}),i.jsx(I,{href:"#dp-kadane",description:"Kadane (max-sum subarray)"})]}),i.jsxs(Ye,{title:"Bit Manipulation",children:[i.jsx(I,{href:"#bitmanipulation-test-kth-bit",description:"test kth bit"}),i.jsx(I,{href:"#bitmanipulation-set-kth-bit",description:"set kth bit"}),i.jsx(I,{href:"#bitmanipulation-clear-kth-bit",description:"clear kth bit"}),i.jsx(I,{href:"#bitmanipulation-get-rightmost-bit",description:"get rightmost bit"}),i.jsx(I,{href:"#bitmanipulation-count-set-bits",description:"count set bits"}),i.jsx(I,{href:"#bitmanipulation-multiply-power-of-two",description:"multiply by 2^k"}),i.jsx(I,{href:"#bitmanipulation-divide-power-of-two",description:"divide by 2^k"}),i.jsx(I,{href:"#bitmanipulation-check-power-of-two",description:"check if number is power of 2"}),i.jsx(I,{href:"#bitmanipulation-swap-variables",description:"swap two variables"})]}),i.jsxs(Ye,{title:"Matrix",children:[i.jsx(I,{href:"#matrix-create-copy",description:"create / copy"}),i.jsx(I,{href:"#matrix-diagonals",description:"main / anti diagonals"}),i.jsx(I,{href:"#matrix-rotate-transpose",description:"rotate / transpose"})]}),i.jsxs(Ye,{title:"Data Structures",children:[i.jsx(I,{href:"#ds-array",description:"array"}),i.jsx(I,{href:"#ds-hash-map",description:"hashmap"}),i.jsx(I,{href:"#ds-linked-list",description:"linked list"}),i.jsx(I,{href:"#ds-doubly-linked-list",description:"doubly linked list"}),i.jsx(I,{href:"#ds-binary-tree",description:"binary tree"}),i.jsx(I,{href:"#ds-binary-search-tree",description:"binary search tree"}),i.jsx(I,{href:"#ds-graph",description:"graph"}),i.jsx(I,{href:"#ds-union-find",description:"union find"}),i.jsx(I,{href:"#ds-union-find-optimized",description:"union find optimized"}),i.jsx(I,{href:"#ds-trie",description:"trie"})]}),i.jsxs(Ye,{title:"Sorting Algorithms",children:[i.jsx(I,{href:"#sort-bubble",description:"bubble sort"}),i.jsx(I,{href:"#sort-selection",description:"selection sort"}),i.jsx(I,{href:"#sort-insertion",description:"insertion sort"}),i.jsx(I,{href:"#sort-shell",description:"shell sort"}),i.jsx(I,{href:"#sort-merge",description:"mergesort"}),i.jsx(I,{href:"#sort-quick",description:"quicksort"}),i.jsx(I,{href:"#sort-tim",description:"timsort"}),i.jsx(I,{href:"#sort-heap",description:"heapsort"}),i.jsx(I,{href:"#sort-counting",description:"counting sort"}),i.jsx(I,{href:"#sort-bucket",description:"bucket sort"}),i.jsx(I,{href:"#sort-radix",description:"radix sort"}),i.jsx(I,{href:"#sort-cube",description:"cubesort"}),i.jsx(I,{href:"#sort-bogo",description:"bogo sort"}),i.jsx(I,{href:"#sort-pancake",description:"pancake sort"}),i.jsx(I,{href:"#sort-sleep",description:"sleep sort"})]})]})}function Ey({hamburgerButtonRef:c}){const b=Y.useRef(null),{isSidebarOpen:g,showSidebar:d,hideSidebar:j}=Xo(),{view:z}=bs(),[L,U]=Y.useState(()=>!g),R=Te(qr.sidebar,!g&&qr.exit,!g&&L&&qr.hide),S=H=>{H&&g?j():!H&&!g&&z==="cheatsheet"&&d()};Y.useEffect(()=>{z==="finder"&&g&&j()},[z,g,j]);const q=sy({maxWidth:768},void 0,S),A=()=>{q&&g&&j()},C=()=>U(!1),J=()=>{g||U(!0)};return sp([b,c],A),i.jsxs("nav",{ref:b,id:"reference-sections","aria-label":"Reference sections",className:R,onAnimationStart:C,onAnimationEndCapture:J,children:[i.jsx("h2",{className:qr.heading,children:"Reference"}),i.jsx("div",{className:qr.scrollContainer,children:i.jsx(wy,{})})]})}function Ay(){const c=Y.useRef(null);return i.jsxs("div",{id:"AppBar",children:[i.jsx(Av,{forwardedRef:c}),i.jsx(Ey,{hamburgerButtonRef:c})]})}const Oy="_main_bsmjw_1",ky="_sidebarHidden_bsmjw_12",Xh={main:Oy,sidebarHidden:ky},My="_finder_jt9b5_1",Ry="_line_jt9b5_41",Cy="_stops_jt9b5_51",Dy="_stop_jt9b5_51",Ly="_dashedNext_jt9b5_98",zy="_dot_jt9b5_107",By="_answered_jt9b5_123",Uy="_current_jt9b5_127",qy="_reached_jt9b5_128",Hy="_end_jt9b5_132",Gy="_fault_jt9b5_137",Yy="_stopInner_jt9b5_142",Vy="_stopButton_jt9b5_143",Ky="_cue_jt9b5_182",Xy="_card_jt9b5_208",Qy="_strip_jt9b5_223",Jy="_stripTitle_jt9b5_241",Zy="_stripValue_jt9b5_251",Iy="_timer_jt9b5_257",Fy="_cells_jt9b5_264",Wy="_cell_jt9b5_264",Py="_colon_jt9b5_270",$y="_signCell_jt9b5_295",nx="_timerCaption_jt9b5_316",ex="_idle_jt9b5_326",tx="_ok_jt9b5_330",ax="_warn_jt9b5_334",ix="_over_jt9b5_341",rx="_body_jt9b5_353",lx="_question_jt9b5_367",sx="_resultName_jt9b5_368",cx="_lead_jt9b5_384",ox="_actions_jt9b5_396",ux="_primary_jt9b5_402",dx="_kbd_jt9b5_429",fx="_options_jt9b5_434",hx="_option_jt9b5_434",px="_optionCue_jt9b5_480",gx="_footer_jt9b5_503",mx="_plain_jt9b5_515",bx="_fields_jt9b5_555",vx="_field_jt9b5_555",yx="_figure_jt9b5_586",xx="_okNote_jt9b5_594",_x="_overNote_jt9b5_598",Sx="_summary_jt9b5_603",Tx="_templates_jt9b5_614",jx="_note_jt9b5_623",Nx="_docsLink_jt9b5_628",wx="_srOnly_jt9b5_639",Ex="_turn_jt9b5_1",Z={finder:My,line:Ry,stops:Cy,stop:Dy,dashedNext:Ly,dot:zy,answered:By,current:Uy,reached:qy,end:Hy,fault:Gy,stopInner:Yy,stopButton:Vy,cue:Ky,card:Xy,strip:Qy,stripTitle:Jy,stripValue:Zy,timer:Iy,cells:Fy,cell:Wy,colon:Py,signCell:$y,timerCaption:nx,idle:ex,ok:tx,warn:ax,over:ix,body:rx,question:lx,resultName:sx,lead:cx,actions:ox,primary:ux,kbd:dx,options:fx,option:hx,optionCue:px,footer:gx,plain:mx,fields:bx,field:vx,figure:yx,okNote:xx,overNote:_x,summary:Sx,templates:Tx,note:jx,docsLink:Nx,srOnly:wx,turn:Ex},Hr={rootId:"q-input",nodes:{"q-input":{id:"q-input",question:"What does the problem give you?",options:[{cue:"an array or a string",next:"q-array"},{cue:"a linked list",next:"q-list"},{cue:"a binary tree or BST",next:"q-tree"},{cue:"a graph, grid, edges, or prerequisites",next:"q-graph"},{cue:"a stream, or 'design a class that supports...'",next:"q-design"},{cue:"just an integer n, or bit operations",next:"q-number"}]},"q-array":{id:"q-array",question:"What does it ask about the array or string?",options:[{cue:"contiguous subarray or substring (window, sum)",next:"q-subarray"},{cue:"pair/triplet with sum X, palindrome, or edit in place",next:"q-pointers"},{cue:"sorted array search, or 'find the min/max value that works'",next:"q-search"},{cue:"next greater/smaller element for each item",next:"q-mono"},{cue:"frequencies, duplicates, top K, brackets, words",next:"q-lookup"},{cue:"pick elements: all combos, best/count of ways, intervals",next:"q-choices"}]},"q-subarray":{id:"q-subarray",question:"What about the subarray or substring?",options:[{cue:"max/avg sum of a window of size K",next:"sliding-window-fixed"},{cue:"longest/shortest window satisfying a rule",next:"q-window-variable"},{cue:"count subarrays with exactly K distinct/odd",next:"sliding-window-exactly-k"},{cue:"subarray sum equals K, or range sum queries",next:"q-prefix"},{cue:"maximum sum subarray, any length",next:"dp-kadane"},{cue:"max/min of every window of size K",next:"monotonic-deque"}]},"q-window-variable":{id:"q-window-variable",question:"What is the window rule about?",options:[{cue:"sum/product vs target, all numbers positive",next:"sliding-window-variable"},{cue:"characters: no repeats, at most K distinct, contains all of T",next:"hashmap-sliding-window"}]},"q-prefix":{id:"q-prefix",question:"Which kind of sum question?",options:[{cue:"many queries: sum between index i and j",next:"prefix-sum-range"},{cue:"count/longest subarrays with sum K, negatives allowed",next:"prefix-sum-hashmap"}]},"q-pointers":{id:"q-pointers",question:"Which pair or in-place task?",options:[{cue:"sorted array: pair or triplet that sums to X",next:"two-pointers-converging"},{cue:"is palindrome, reverse in place, container with most water",next:"two-pointers-converging"},{cue:"two arrays/strings: merge sorted, is subsequence",next:"two-pointers-two-inputs"},{cue:"remove duplicates in place, move zeroes, partition",next:"two-pointers-fast-slow-inplace"},{cue:"unsorted array, two numbers that sum to X (indices)",next:"hashmap-frequency"}]},"q-search":{id:"q-search",question:"What are you searching for?",options:[{cue:"find X (or its index) in a sorted or rotated array",next:"binary-search-classic"},{cue:"first position of X, or where to insert X",next:"binary-search-left-bound"},{cue:"last position of X, or count of elements <= X",next:"binary-search-right-bound"},{cue:"smallest capacity/speed that works, minimize the max",next:"binary-search-answer-minimize"},{cue:"largest distance/size that works, maximize the min",next:"binary-search-answer-maximize"}]},"q-mono":{id:"q-mono",question:"What do you need for each element?",options:[{cue:"next greater element, days until warmer, stock span",next:"monotonic-stack-decreasing"},{cue:"next smaller element, largest rectangle in histogram",next:"monotonic-stack-increasing"},{cue:"max or min of every window of size K",next:"monotonic-deque"}]},"q-lookup":{id:"q-lookup",question:"What is the core operation?",options:[{cue:"count occurrences, duplicates, anagrams, group by key",next:"hashmap-frequency"},{cue:"K largest, K most frequent, Kth smallest",next:"heap-top-k"},{cue:"valid parentheses, evaluate expression, simplify path",next:"stack-matching"},{cue:"list of words + prefix lookups, autocomplete",next:"trie"},{cue:"build an output string: reverse words, compress, join",next:"string-building"},{cue:"single number among pairs, XOR, count set bits",next:"bit-manipulation"}]},"q-choices":{id:"q-choices",question:"What is the goal over the choices?",options:[{cue:"generate all subsets, permutations, combinations",next:"q-backtrack"},{cue:"max/min cost, or number of ways, over choices",next:"q-dp"},{cue:"jump game, gas station, partition labels",next:"greedy"},{cue:"intervals: merge, overlaps, meeting rooms",next:"sort-first"}]},"q-backtrack":{id:"q-backtrack",question:"How constrained is the search?",options:[{cue:"all subsets / permutations / combination sum",next:"backtracking"},{cue:"N-Queens, Sudoku, word search on a grid",next:"backtracking-pruning"}]},"q-dp":{id:"q-dp",question:"What shape is the DP?",options:[{cue:"maximum sum subarray",next:"dp-kadane"},{cue:"reusable coins/steps: min coins, ways to make X",next:"dp-unbounded-knapsack"},{cue:"each item once: partition equal subset, target sum",next:"dp-01-knapsack"},{cue:"LIS, LCS, edit distance (one or two sequences)",next:"dp-sequences"},{cue:"other: house robber, unique paths, word break",next:"q-dp-style"}]},"q-dp-style":{id:"q-dp-style",question:"Which way is the recurrence easiest to write?",options:[{cue:"recurse on choices from a state, cache results (word break, decode ways)",next:"dp-top-down"},{cue:"fill dp[i] / dp[r][c] from earlier cells (house robber, unique paths)",next:"dp-bottom-up"}]},"q-list":{id:"q-list",question:"What do you do with the list?",options:[{cue:"detect cycle, find middle, Nth node from end",next:"linked-list-fast-slow"},{cue:"reverse the list, a sublist, or k-group",next:"linked-list-reverse"},{cue:"merge two sorted lists",next:"linked-list-merge-sorted"},{cue:"merge K sorted lists",next:"heap-merge-k"}]},"q-tree":{id:"q-tree",question:"What does it ask about the tree?",options:[{cue:"level order, per-level values, right side view",next:"tree-bfs"},{cue:"max depth, path sum, LCA, validate BST, serialize",next:"tree-dfs-recursive"},{cue:"BST iterator, kth smallest, traverse without recursion",next:"tree-dfs-iterative"}]},"q-graph":{id:"q-graph",question:"What does it ask about the graph or grid?",options:[{cue:"number of islands, connected components, all paths, cycle",next:"graph-dfs"},{cue:"shortest path, minimum steps",next:"q-shortest"},{cue:"course schedule, prerequisites, valid ordering",next:"topological-sort"},{cue:"same group? merge sets, redundant connection",next:"union-find"},{cue:"minimum cost to connect all points",next:"mst"},{cue:"grid moving right/down: count paths or min path sum",next:"q-dp"}]},"q-shortest":{id:"q-shortest",question:"What kind of shortest path?",options:[{cue:"unweighted, from one start (word ladder, maze)",next:"graph-bfs-shortest-path"},{cue:"spreads from many sources at once (rotting oranges, 01 matrix)",next:"multi-source-bfs"},{cue:"edges have weights or costs (network delay, cheapest flights)",next:"shortest-path-weighted"}]},"q-design":{id:"q-design",question:"What must the structure support?",options:[{cue:"find median from a data stream",next:"two-heaps"},{cue:"Kth largest element in a stream",next:"heap-top-k"},{cue:"moving average, recent calls, circular queue",next:"queue-design"},{cue:"implement Trie, add and search words",next:"trie"},{cue:"min stack, undo, browser history",next:"stack-matching"},{cue:"sliding window maximum",next:"monotonic-deque"}]},"q-number":{id:"q-number",question:"What does it ask about n?",options:[{cue:"power of two, count set bits, XOR tricks",next:"bit-manipulation"},{cue:"ways to climb n stairs, nth term from smaller terms",next:"q-dp"},{cue:"integer square root: the largest x with x*x <= n",next:"binary-search-answer-maximize"},{cue:"guess the number in 1..n",next:"binary-search-classic"}]}},leaves:{"two-pointers-converging":{id:"two-pointers-converging",name:"Two pointers, converging",pattern:"Two Pointers",summary:"Sorted array pairs/triplets, palindromes, in-place reversal. Start at both ends and move the pointer whose side cannot be part of the answer.",docsUrl:"https://resources.devweekends.com/dsa-patterns/two-pointers",templateIds:["two-pointers-one-input"]},"two-pointers-two-inputs":{id:"two-pointers-two-inputs",name:"Two pointers, two inputs",pattern:"Two Pointers",summary:"Two arrays or strings walked together, such as merging sorted arrays or checking a subsequence. One pointer per input; advance the one whose element is consumed.",docsUrl:"https://resources.devweekends.com/dsa-patterns/two-pointers",templateIds:["two-pointers-two-inputs"]},"two-pointers-fast-slow-inplace":{id:"two-pointers-fast-slow-inplace",name:"Two pointers, read/write in place",pattern:"Two Pointers",summary:"Remove duplicates, move zeroes, partition in O(1) space. A fast pointer reads every element; a slow pointer marks where the next kept element is written.",docsUrl:"https://resources.devweekends.com/dsa-patterns/two-pointers",templateIds:[]},"sliding-window-fixed":{id:"sliding-window-fixed",name:"Fixed-size sliding window",pattern:"Sliding Window",summary:"Every window of exactly K elements. Add the entering element and remove the leaving one so each step is O(1).",docsUrl:"https://resources.devweekends.com/dsa-patterns/sliding-window",templateIds:["sliding-window"]},"sliding-window-variable":{id:"sliding-window-variable",name:"Variable-size sliding window",pattern:"Sliding Window",summary:"Longest/shortest subarray meeting a sum-style rule with non-negative values. Expand right, shrink left while the window is invalid (or while valid, for shortest).",docsUrl:"https://resources.devweekends.com/dsa-patterns/sliding-window",templateIds:["sliding-window"]},"sliding-window-exactly-k":{id:"sliding-window-exactly-k",name:"Exactly K via at-most trick",pattern:"Sliding Window",summary:'"Exactly K" is not monotonic, so count it as atMost(K) - atMost(K-1), each a standard variable window.',docsUrl:"https://resources.devweekends.com/dsa-patterns/sliding-window",templateIds:[]},"prefix-sum-range":{id:"prefix-sum-range",name:"Prefix sum, range queries",pattern:"Prefix Sum",summary:"Many sum-between-i-and-j queries on a fixed array. Precompute prefix[i]; each query is prefix[j+1] - prefix[i] in O(1).",docsUrl:"https://resources.devweekends.com/dsa-patterns/prefix-sum",templateIds:["prefix-sum"]},"prefix-sum-hashmap":{id:"prefix-sum-hashmap",name:"Prefix sum + hash map",pattern:"Prefix Sum",summary:"Count or find subarrays with sum K when negatives break sliding window. Store prefix-sum counts (seeded with {0: 1}) and look up prefix - K.",docsUrl:"https://resources.devweekends.com/dsa-patterns/prefix-sum",templateIds:["hashmap-find-number-of-subarrays"]},"string-building":{id:"string-building",name:"String building",pattern:"String",summary:"Producing a new string piece by piece. Append to a list or builder and join once at the end; repeated concatenation is O(n^2).",docsUrl:"https://resources.devweekends.com/dsa-patterns/stack",templateIds:["string-building"]},"binary-search-classic":{id:"binary-search-classic",name:"Binary search, find target",pattern:"Binary Search",summary:"Find an exact value in a sorted (or rotated) space. Halve the range each step by comparing the middle with the target.",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",templateIds:["binary-search"]},"binary-search-left-bound":{id:"binary-search-left-bound",name:"Binary search, left bound",pattern:"Binary Search",summary:"First position of X or its insertion point. Keep searching left when nums[mid] >= X to land on the leftmost index.",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",templateIds:["binary-search-left-insertion"]},"binary-search-right-bound":{id:"binary-search-right-bound",name:"Binary search, right bound",pattern:"Binary Search",summary:"Last position of X, or count of elements <= X. Search for the insertion point after all copies of X (move right when nums[mid] <= X).",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",templateIds:["binary-search-right-insertion"]},"binary-search-answer-minimize":{id:"binary-search-answer-minimize",name:"Binary search on answer, minimum",pattern:"Binary Search",summary:"Smallest value that still works (min capacity, min speed, minimize the max). Binary search the answer range with a greedy feasibility check.",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",templateIds:["binary-search-greedy-minimum"]},"binary-search-answer-maximize":{id:"binary-search-answer-maximize",name:"Binary search on answer, maximum",pattern:"Binary Search",summary:"Largest value that still works (maximize the minimum distance). Binary search the answer range, keeping the best feasible value.",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",templateIds:["binary-search-greedy-maximum"]},"sort-first":{id:"sort-first",name:"Sort first, then scan",pattern:"Sorting",summary:"Intervals, meetings, or anything easier in order. Sort (often by start or end), then apply a linear scan, greedy, heap, or two pointers.",docsUrl:"https://resources.devweekends.com/dsa-patterns/sorting",templateIds:[]},"hashmap-frequency":{id:"hashmap-frequency",name:"Hash map lookup / frequency",pattern:"HashMap",summary:"Counting, duplicates, anagrams, grouping, or unsorted two-sum. Store counts or complements so each lookup is O(1).",docsUrl:"https://resources.devweekends.com/dsa-patterns/hashmap",templateIds:[]},"hashmap-sliding-window":{id:"hashmap-sliding-window",name:"Sliding window + hash map",pattern:"Sliding Window",summary:"Substring with no repeats, at most K distinct, or containing all of T. A frequency map tracks the window so you know when to shrink.",docsUrl:"https://resources.devweekends.com/dsa-patterns/sliding-window",templateIds:["hashmap-sliding-window"]},"stack-matching":{id:"stack-matching",name:"Stack (matching / LIFO)",pattern:"Stack",summary:"Brackets, expression evaluation, path simplification, undo. Push openings or state; pop when the matching close or reversal arrives.",docsUrl:"https://resources.devweekends.com/dsa-patterns/stack",templateIds:[]},"monotonic-stack-increasing":{id:"monotonic-stack-increasing",name:"Monotonic increasing stack",pattern:"Monotonic Stack",summary:"Next/previous smaller element, largest rectangle in histogram. Keep the stack increasing; a smaller arrival pops and resolves the taller entries.",docsUrl:"https://resources.devweekends.com/dsa-patterns/monotonic-stack",templateIds:["stack-monotonic-increasing"]},"monotonic-stack-decreasing":{id:"monotonic-stack-decreasing",name:"Monotonic decreasing stack",pattern:"Monotonic Stack",summary:"Next/previous greater element, daily temperatures, stock span. Keep the stack decreasing; a larger arrival pops and resolves the smaller entries.",docsUrl:"https://resources.devweekends.com/dsa-patterns/monotonic-stack",templateIds:["stack-monotonic-decreasing"]},"monotonic-deque":{id:"monotonic-deque",name:"Monotonic deque",pattern:"Queue",summary:"Max or min of every window of size K. Keep a deque of indices in monotonic order; drop expired indices from the front.",docsUrl:"https://resources.devweekends.com/dsa-patterns/queue",templateIds:[]},"queue-design":{id:"queue-design",name:"Queue design",pattern:"Queue",summary:"Moving average, recent calls, rate limiting, circular queue. FIFO of values or timestamps, evicting from the front as they expire.",docsUrl:"https://resources.devweekends.com/dsa-patterns/queue",templateIds:[]},"heap-top-k":{id:"heap-top-k",name:"Heap, top K",pattern:"Heap",summary:"K largest, K most frequent, Kth element (also in a stream). Keep a min-heap of size K, popping the smallest when it overflows.",docsUrl:"https://resources.devweekends.com/dsa-patterns/heap",templateIds:["heap-find-top-k-elements"]},"heap-merge-k":{id:"heap-merge-k",name:"Heap, merge K sorted",pattern:"Heap",summary:"Merge K sorted lists or streams. Push each head into a min-heap; pop the smallest and push its successor.",docsUrl:"https://resources.devweekends.com/dsa-patterns/heap",templateIds:[]},"two-heaps":{id:"two-heaps",name:"Two heaps",pattern:"Heap",summary:"Running median of a stream. A max-heap holds the lower half and a min-heap the upper half, rebalanced so sizes differ by at most one.",docsUrl:"https://resources.devweekends.com/dsa-patterns/heap",templateIds:[]},trie:{id:"trie",name:"Trie",pattern:"Trie",summary:"Prefix matching, autocomplete, word dictionaries. Store words character by character in a tree so prefix lookups cost O(length).",docsUrl:"https://resources.devweekends.com/dsa-patterns/trie",templateIds:["ds-trie"]},"linked-list-fast-slow":{id:"linked-list-fast-slow",name:"Fast and slow pointers",pattern:"Linked List",summary:"Cycle detection, middle node, Nth from end. Move one pointer twice as fast (Floyd's) or give one a head start.",docsUrl:"https://resources.devweekends.com/dsa-patterns/linked-list",templateIds:["linkedlist-fast-and-slow-pointer"]},"linked-list-reverse":{id:"linked-list-reverse",name:"Reverse a linked list",pattern:"Linked List",summary:"Reverse a whole list, a sublist, or k-groups. Walk with prev/curr/next and flip each pointer.",docsUrl:"https://resources.devweekends.com/dsa-patterns/linked-list",templateIds:["linkedlist-reverse"]},"linked-list-merge-sorted":{id:"linked-list-merge-sorted",name:"Merge sorted lists",pattern:"Linked List",summary:"Merge two sorted lists. Use a dummy head and always attach the smaller of the two current nodes.",docsUrl:"https://resources.devweekends.com/dsa-patterns/linked-list",templateIds:[]},"tree-dfs-recursive":{id:"tree-dfs-recursive",name:"Tree DFS, recursive",pattern:"DFS",summary:"Depth, path sum, LCA, validate BST, serialize. Recurse into children and combine their answers (pre-, in-, or post-order).",docsUrl:"https://resources.devweekends.com/dsa-patterns/dfs",templateIds:["tree-dfs-recursive"]},"tree-dfs-iterative":{id:"tree-dfs-iterative",name:"Tree DFS, iterative",pattern:"DFS",summary:"BST iterator, kth smallest, or deep trees. Replace recursion with an explicit stack, often for an in-order walk you can pause.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dfs",templateIds:["tree-dfs-iterative"]},"tree-bfs":{id:"tree-bfs",name:"Tree BFS (level order)",pattern:"BFS",summary:"Level order, right side view, per-level values. Process the queue one level at a time using its size as a snapshot.",docsUrl:"https://resources.devweekends.com/dsa-patterns/bfs",templateIds:["tree-bfs"]},"graph-dfs":{id:"graph-dfs",name:"Graph DFS",pattern:"DFS",summary:"Islands, connected components, all paths, cycle detection, clone graph. Explore fully from each unvisited node, marking visited.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dfs",templateIds:["graph-dfs-recursive","graph-dfs-iterative"]},"graph-bfs-shortest-path":{id:"graph-bfs-shortest-path",name:"BFS shortest path",pattern:"BFS",summary:"Fewest steps in an unweighted graph or grid. BFS from the start; the level at which you reach the target is the distance.",docsUrl:"https://resources.devweekends.com/dsa-patterns/bfs",templateIds:["graph-bfs"]},"multi-source-bfs":{id:"multi-source-bfs",name:"Multi-source BFS",pattern:"BFS",summary:"Something spreads from many cells at once (rotting oranges, 01 matrix). Enqueue every source first, then run one BFS.",docsUrl:"https://resources.devweekends.com/dsa-patterns/bfs",templateIds:[]},"shortest-path-weighted":{id:"shortest-path-weighted",name:"Weighted shortest path",pattern:"Graph Algorithms",summary:"Shortest path with edge weights. Dijkstra (min-heap) for non-negative weights; Bellman-Ford for negative edges or at most K edges.",docsUrl:"https://resources.devweekends.com/dsa-patterns/graph-algorithms",templateIds:["graph-dijkstra","graph-bellman-ford"]},"topological-sort":{id:"topological-sort",name:"Topological sort",pattern:"Graph Algorithms",summary:"Ordering with dependencies, or detecting that none exists. Kahn's algorithm: repeatedly take nodes with in-degree 0.",docsUrl:"https://resources.devweekends.com/dsa-patterns/graph-algorithms",templateIds:["graph-kahn"]},"union-find":{id:"union-find",name:"Union Find",pattern:"Union Find",summary:"Are two items in the same group, merging groups, redundant edges. Keep a parent array with path compression and union by rank.",docsUrl:"https://resources.devweekends.com/dsa-patterns/union-find",templateIds:["ds-union-find","ds-union-find-optimized"]},mst:{id:"mst",name:"Minimum spanning tree",pattern:"Graph Algorithms",summary:"Minimum cost to connect all points. Kruskal (sort edges + Union Find) or Prim (grow from a node with a min-heap).",docsUrl:"https://resources.devweekends.com/dsa-patterns/graph-algorithms",templateIds:["graph-kruskal","graph-prim"]},backtracking:{id:"backtracking",name:"Backtracking",pattern:"Backtracking",summary:"Generate all subsets, permutations, or combinations. Choose, recurse, un-choose, recording each complete candidate.",docsUrl:"https://resources.devweekends.com/dsa-patterns/backtracking",templateIds:["backtracking"]},"backtracking-pruning":{id:"backtracking-pruning",name:"Backtracking with pruning",pattern:"Backtracking",summary:"Constraint puzzles like N-Queens, Sudoku, word search. Backtrack, but reject a partial choice as soon as it breaks a constraint.",docsUrl:"https://resources.devweekends.com/dsa-patterns/backtracking",templateIds:[]},"dp-top-down":{id:"dp-top-down",name:"DP, top-down (memo)",pattern:"Dynamic Programming",summary:"Overlapping subproblems where the recursion is the natural statement. Write the recursive choice, then cache results by state.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",templateIds:["dp-top-down"]},"dp-bottom-up":{id:"dp-bottom-up",name:"DP, bottom-up (table)",pattern:"Dynamic Programming",summary:"Each state depends on earlier indices or neighbor cells. Fill a dp table from the base cases forward.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",templateIds:["dp-bottom-up"]},"dp-kadane":{id:"dp-kadane",name:"Kadane's algorithm",pattern:"Dynamic Programming",summary:"Maximum sum subarray. At each element, either extend the running sum or restart from it; track the best seen.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",templateIds:["dp-kadane"]},"dp-unbounded-knapsack":{id:"dp-unbounded-knapsack",name:"Unbounded knapsack",pattern:"Dynamic Programming",summary:"Items reusable: min coins, ways to make change, climb stairs. 1D dp over the target, looping capacity forward.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",templateIds:[]},"dp-01-knapsack":{id:"dp-01-knapsack",name:"0/1 knapsack",pattern:"Dynamic Programming",summary:"Each item used at most once: partition equal subset, target sum. dp over capacity, looping capacity backwards per item.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",templateIds:[]},"dp-sequences":{id:"dp-sequences",name:"Sequence DP (LIS / LCS)",pattern:"Dynamic Programming",summary:"Longest increasing or common subsequence, edit distance. dp[i] over one sequence or dp[i][j] over prefixes of two.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",templateIds:[]},greedy:{id:"greedy",name:"Greedy",pattern:"Greedy",summary:"Jump game, gas station, partition labels. Take the locally best move in one pass when an exchange argument shows it is never worse.",docsUrl:"https://resources.devweekends.com/dsa-patterns/greedy",templateIds:[]},"bit-manipulation":{id:"bit-manipulation",name:"Bit manipulation",pattern:"Bit Manipulation",summary:"Single number among pairs, set bits, powers of two. Use XOR, masks, and shifts to work on bits directly in O(1) space.",docsUrl:"https://resources.devweekends.com/dsa-patterns/bit-manipulation",templateIds:["bitmanipulation-test-kth-bit","bitmanipulation-set-kth-bit","bitmanipulation-clear-kth-bit","bitmanipulation-toggle-kth-bit","bitmanipulation-get-rightmost-bit","bitmanipulation-count-set-bits","bitmanipulation-multiply-power-of-two","bitmanipulation-divide-power-of-two","bitmanipulation-check-power-of-two","bitmanipulation-swap-variables"]}}},cp=`def backtrack(curr, OTHER_ARGUMENTS...):
    if (BASE_CASE):
        # TODO: modify answer
        return

    ans = 0

    for (ITERATE_OVER_INPUT):
        # TODO: modify current state
        ans += backtrack(curr, OTHER_ARGUMENTS...)
        # TODO: undo modification of current state

    return ans
`,op=`const backtrack = (curr, OTHER_ARGUMENTS...) => {
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
`,up=`public int backtrack(STATE curr, OTHER_ARGUMENTS...) {
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
`,dp=`int backtrack(STATE curr, OTHER_ARGUMENTS...) {
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
`,fp=`def fn(arr, target):
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
`,hp=`const fn = (arr, target) => {
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
`,pp=`public int fn(int[] arr, int target) {
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
`,gp=`#include <vector>

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
`,mp=`def fn(arr):
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
`,bp=`const fn = (arr) => {
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
`,vp=`public int fn(int[] arr) {
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
`,yp=`#include <vector>

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
`,xp=`def fn(arr):
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
`,_p=`const fn = (arr) => {
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
`,Sp=`public int fn(int[] arr) {
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
`,Tp=`#include <vector>

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
`,jp=`def fn(arr, target):
    left = 0
    right = len(arr)

    while left < right:
        mid = (left + right) // 2

        if arr[mid] >= target:
            right = mid
        else:
            left = mid + 1

    return left
`,Np=`const fn = (arr, target) => {
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
`,wp=`public int fn(int[] arr, int target) {
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
`,Ep=`#include <vector>

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
`,Ap=`def fn(arr, target):
    left = 0
    right = len(arr)

    while left < right:
        mid = (left + right) // 2

        if arr[mid] > target:
            right = mid
        else:
            left = mid + 1

    return left
`,Op=`const fn = (arr, target) => {
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
`,kp=`public int fn(int[] arr, int target) {
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
`,Mp=`#include <vector>

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
`,Rp=`def is_power_of_two(num: int) -> bool:
    return (num & (num - 1)) == 0
`,Cp=`const isPowerOfTwo = (num) => {
    return (num & (num - 1)) === 0
}
`,Dp=`public boolean isPowerOfTwo(int num) {
    return (num & (num - 1)) == 0;
}
`,Lp=`bool is_power_of_two(int num) {
    return (num & (num - 1)) == 0;
}
`,zp=`def clear_kth_bit(num: int, k: int) -> int:
    return num & ~(1 << k)
`,Bp=`const clearKthBit = (num, k) => {
    return num & ~(1 << k)
}
`,Up=`public int clearKthBit(int num, int k) {
    return num & ~(1 << k);
}
`,qp=`int clear_kth_bit(int num, int k) {
    return num & ~(1 << k);
}
`,Hp=`def count_set_bits(num: int) -> int:
    return bin(num).count('1')
`,Gp=`const countSetBits = (num) => {
    return num.toString(2).split('1').length - 1
}
`,Yp=`public int countSetBits(int num) {
    int count = 0;

    while (num > 0) {
        count += num & 1;
        num >>= 1;
    }

    return count;
}
`,Vp=`int count_set_bits(int num) {
    int count = 0;

    while (num) {
        count += num & 1;
        num >>= 1;
    }

    return count;
}
`,Kp=`def divide_by_power_of_two(num: int, k: int) -> int:
    return num >> k
`,Xp=`const divideByPowerOfTwo = (num, k) => {
    return num >> k;
}
`,Qp=`public int divideByPowerOfTwo(int num, int k) {
    return num >> k;
}
`,Jp=`int divide_by_power_of_two(int num, int k) {
    return num >> k;
}
`,Zp=`def get_rightmost_set_bit(num: int) -> int:
    return num & -num
`,Ip=`const getRightmostSetBit = (num) => {
    return num & -num
}
`,Fp=`public int getRightmostSetBit(int num) {
    return num & -num;
}
`,Wp=`int get_rightmost_set_bit(int num) {
    return num & -num;
}
`,Pp=`def multiply_by_power_of_two(num: int, k: int) -> int:
    return num << k
`,$p=`const multiplyByPowerOfTwo = (num, k) => {
    return num << k
}
`,ng=`public int multiplyByPowerOfTwo(int num, int k) {
    return num << k;
}
`,eg=`int multiply_by_power_of_two(int num, int k) {
    return num << k;
}
`,tg=`def set_kth_bit(num: int, k: int) -> int:
    return num | (1 << k)
`,ag=`const setKthBit = (num, k) => {
    return num | (1 << k)
}
`,ig=`public int setKthBit(int num, int k) {
    return num | (1 << k);
}
`,rg=`int set_kth_bit(int num, int k) {
    return num | (1 << k);
}
`,lg=`def swap_variables(num1: int, num2: int) -> tuple:
    num1 ^= num2
    num2 ^= num1
    num1 ^= num2
    return num1, num2
`,sg=`const swapVariables = (num1, num2) => {
    num1 ^= num2
    num2 ^= num1
    num1 ^= num2
    return [num1, num2]
}
`,cg=`public int[] swapVariables(int num1, int num2) {
    num1 ^= num2;
    num2 ^= num1;
    num1 ^= num2;
    return new int[] { num1, num2 };
}
`,og=`#include <tuple>

using namespace std;


tuple<int, int> swap_variables(int num1, int num2) {
    num1 ^= num2;
    num2 ^= num1;
    num1 ^= num2;
    return std::make_tuple(num1, num2);
}
`,ug=`def test_kth_bit(num: int, k: int) -> bool:
    return num & (1 << k) != 0
`,dg=`const testKthBit = (num, k) => {
    return num & (1 << k) !== 0
}
`,fg=`public boolean testKthBit(int num, int k) {
    return (num & (1 << k)) != 0;
}
`,hg=`bool test_kth_bit(int num, int k) {
    return (num & (1 << k)) != 0;
}
`,pg=`def toggle_kth_bit(num: int, k: int) -> int:
    return num ^ (1 << k)
`,gg=`const toggleKthBit = (num, k) => {
    return num ^ (1 << k)
}
`,mg=`public int toggleKthBit(int num, int k) {
    return num ^ (1 << k);
}
`,bg=`int toggle_kth_bit(int num, int k) {
    return num ^ (1 << k);
}
`,vg=`def fn(arr):
    if BASE_CASE:
        return 0

    dp = [BASE_CASE] * (STATE_FOR_WHOLE_INPUT + 1)

    for STATE in range(SMALLEST_SUBPROBLEM, STATE_FOR_WHOLE_INPUT + 1):
        if BASE_CASE:
            dp[STATE] = BASE_CASE
        else:
            dp[STATE] = RECURRENCE_RELATION(STATE)

    return dp[STATE_FOR_WHOLE_INPUT]
`,yg=`const fn = (arr) => {
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
`,xg=`import java.util.Arrays;


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
`,_g=`#include <vector>
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
`,Sg=`def kadane(arr: list[int]) -> int:
    curr_sub = max_sub = arr[0]

    for num in arr[1:]:
        curr_sub = max(curr_sub + num, num)
        max_sub = max(max_sub, curr_sub)

    return max_sub
`,Tg=`const kadane = (arr) => {
    let currSub = arr[0]
    let maxSub = arr[0]

    for (let i = 1; i < arr.length; i++) {
        currSub = Math.max(currSub + arr[i], arr[i])
        maxSub = Math.max(maxSub, currSub)
    }

    return maxSub
}
`,jg=`public int kadane(int[] arr) {
    int currSub = arr[0];
    int maxSub = arr[0];

    for (int i = 1; i < arr.length; i++) {
        currSub = Math.max(currSub + arr[i], arr[i]);
        maxSub = Math.max(maxSub, currSub);
    }

    return maxSub;
}
`,Ng=`#include <vector>
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
`,wg=`def fn(arr):
    @cache
    def dp(STATE):
        if BASE_CASE:
            return 0
        return RECURRENCE_RELATION(STATE)

    return dp(STATE_FOR_WHOLE_INPUT)
`,Eg=`const fn = (arr) => {
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
`,Ag=`import java.util.HashMap;
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
`,Og=`#include <unordered_map>

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
`,kg=`from typing import Any


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
`,Mg=`class HashMap {
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
`,Rg=`public class HashMap {
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
`,Cg=`#include <iostream>
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
`,Dg=`class TrieNode:
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
`,Lg=`class TrieNode {
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
`,zg=`import java.util.ArrayList;
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
`,Bg=`#include <iostream>
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
`,Ug=`class UnionFind:
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
`,qg=`class UnionFind {
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
`,Hg=`import java.util.ArrayList;
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
`,Gg=`#include <iostream>
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
`,Yg=`class UnionFind:
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
`,Vg=`class UnionFind {
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
`,Kg=`import java.util.ArrayList;
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
`,Xg=`#include <iostream>
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
`,Qg=`def bellman_ford(n: int, edges: list[tuple[int, int, int]], source: int) -> list[int]:
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
`,Jg=`const bellmanFord = (n, edges, source) => {
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
`,Zg=`import java.util.Arrays;
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
`,Ig=`#include <vector>
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
`,Fg=`from collections import deque


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
`,Wg=`const fn = (graph) => {
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
`,Pg=`import java.util.ArrayList;
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
`,$g=`#include <queue>
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
`,nm=`def fn(graph):
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
`,em=`const fn = (graph) => {
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
`,tm=`import java.util.Stack;
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
`,am=`#include <stack>
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
`,im=`def fn(graph):
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
`,rm=`const fn = (graph) => {
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
`,lm=`import java.util.HashSet;
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
`,sm=`#include <unordered_set>
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
`,cm=`from heapq import heappop, heappush


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
`,om=`/*
    JavaScript lacks built-in support for heaps.
    Try using a language that doesn't hate you, like Python.
*/
`,um=`import java.util.Arrays;
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
`,dm=`#include <limits>
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
`,fm=`from collections import defaultdict, deque


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
`,hm=`const kahnTopologicalSort = (graph) => {
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
`,pm=`import java.util.ArrayList;
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
`,gm=`#include <vector>
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
`,mm=`def kruskal_mst(n: int, edges: list[tuple[int, int, int]]) -> list[tuple[int, int, int]]:
    mst = []
    uf = UnionFind(n)
    edges.sort()

    for w, u, v in edges:
        if not uf.connected(u, v):
            uf.union(u, v)
            mst.append((w, u, v))

    return mst
`,bm=`const kruskalMst = (n, edges) => {
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
`,vm=`import java.util.ArrayList;
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
`,ym=`#include <vector>
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
`,xm=`from heapq import heappop


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
`,_m=`/*
    JavaScript lacks built-in support for heaps.
    Try using a language that doesn't hate you, like Python.
*/
`,Sm=`import java.util.ArrayList;
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
`,Tm=`#include <vector>
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
`,jm=`from collections import defaultdict


def fn(arr, k):
    counts = defaultdict(int)
    counts[0] = 1
    ans = curr = 0

    for num in arr:
        # TODO: logic to change curr
        ans += counts[curr - k]
        counts[curr] += 1

    return ans
`,Nm=`const fn = (arr, k) => {
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
`,wm=`import java.util.HashMap;
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
`,Em=`#include <vector>
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
`,Am=`def fn(arr):
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
`,Om=`function fn(arr) {
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
`,km=`import java.util.HashSet;
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
`,Mm=`#include <vector>
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
`,Rm=`from heapq import heappop, heappush


def fn(arr, k):
    heap = []

    for num in arr:
        # TODO: logic to push onto heap according to problem's criteria
        heappush(heap, (CRITERIA, num))

        if len(heap) > k:
            heappop(heap)

    return [num for num in heap]
`,Cm=`/*
    JavaScript lacks built-in support for heaps.
    Try using a language that doesn't hate you, like Python.
*/
`,Dm=`import java.util.PriorityQueue;


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
`,Lm=`#include <vector>
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
`,zm=`def fn(head):
    slow = head
    fast = head
    ans = 0

    while fast and fast.next:
        # TODO: logic
        slow = slow.next
        fast = fast.next.next

    return ans
`,Bm=`const fn = (head) => {
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
`,Um=`public int fn(ListNode head) {
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
`,qm=`int fn(ListNode* head) {
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
`,Hm=`def fn(head):
    prev = None
    curr = head

    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt

    return prev
`,Gm=`const fn = (head) => {
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
`,Ym=`public ListNode fn(ListNode head) {
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
`,Vm=`ListNode* fn(ListNode* head) {
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
`,Km=`def fn(arr):
    n = len(arr)
    prefix = [arr[0]]

    for i in range(1, n):
        prefix.append(prefix[-1] + arr[i])

    return prefix
`,Xm=`const fn = (arr) => {
    let prefix = [arr[0]]

    for (let i = 1; i < arr.length; i++) {
        prefix.push(prefix[prefix.length - 1] + arr[i])
    }

    return prefix
}
`,Qm=`import java.util.ArrayList;
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
`,Jm=`#include <iostream>
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
`,Zm=`def fn(arr):
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
`,Im=`const fn = (arr) => {
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
`,Fm=`public int fn(int[] arr) {
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
`,Wm=`#include <vector>

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
`,Pm=`def fn(arr):
    stack = []
    ans = 0

    for num in arr:
        while stack and stack[-1] < num:
            # TODO: logic
            stack.pop()
        stack.append(num)

    return ans
`,$m=`const fn = (arr) => {
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
`,nb=`import java.util.Stack;


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
`,eb=`#include <stack>
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
`,tb=`def fn(arr):
    stack = []
    ans = 0

    for num in arr:
        while stack and stack[-1] > num:
            # TODO: logic
            stack.pop()
        stack.append(num)

    return ans
`,ab=`const fn = (arr) => {
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
`,ib=`import java.util.Stack;


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
`,rb=`#include <stack>
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
`,lb=`def fn(strs: list[str]):
    ans = []

    for char in strs:
        ans.append(char)

    return ''.join(ans)
`,sb=`const fn = (arr) => {
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
`,cb=`public String fn(char[] strs) {
    StringBuilder sb = new StringBuilder();

    for (char c: strs) {
        sb.append(c);
    }

    return sb.toString();
}
`,ob=`string fn(vector<char>& arr) {
    return string(arr.begin(), arr.end())
}
`,ub=`from collections import deque


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
`,db=`const fn = (root) => {
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
`,fb=`import java.util.LinkedList;
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
`,hb=`#include <queue>

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
`,pb=`def dfs(root):
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
`,gb=`const dfs = (root) => {
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
`,mb=`import java.util.Stack;


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
`,bb=`#include <stack>

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
`,vb=`def dfs(root):
    if not root:
        return

    ans = 0

    # TODO: logic
    dfs(root.left)
    dfs(root.right)

    return ans
`,yb=`const dfs = (root) => {
    if (!root) {
        return
    }

    let ans = 0

    // TODO: logic
    dfs(root.left)
    dfs(root.right)

    return ans
}
`,xb=`public int dfs(TreeNode root) {
    if (root == null) {
        return 0;
    }

    int ans = 0;

    // TODO: logic
    ans += dfs(root.left);
    ans += dfs(root.right);

    return ans;
}
`,_b=`int dfs(TreeNode* root) {
    if (root == nullptr) {
        return 0;
    }

    int ans = 0;

    // TODO: logic
    dfs(root.left);
    dfs(root.right);

    return ans;
}
`,Sb=`def fn(arr):
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
`,Tb=`const fn = (arr) => {
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
`,jb=`public int fn(int[] arr) {
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
`,Nb=`#include <vector>

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
`,wb=`def fn(arr1, arr2):
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
`,Eb=`let fn = (arr1, arr2) => {
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
`,Ab=`public int fn(int[] arr1, int[] arr2) {
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
`,Ob=`#include <vector>

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
`,gn=(c,b,g,d,j)=>({title:c,code:{python:b,javascript:g,java:d,cpp:j}}),Ax={backtracking:gn("backtracking",cp,op,up,dp),"binary-search":gn("binary search",fp,hp,pp,gp),"binary-search-greedy-maximum":gn("greedy (maximum)",mp,bp,vp,yp),"binary-search-greedy-minimum":gn("greedy (minimum)",xp,_p,Sp,Tp),"binary-search-left-insertion":gn("duplicate elements, left-most insertion point",jp,Np,wp,Ep),"binary-search-right-insertion":gn("duplicate elements, right-most insertion point",Ap,Op,kp,Mp),"bitmanipulation-check-power-of-two":gn("check if number is power of 2",Rp,Cp,Dp,Lp),"bitmanipulation-clear-kth-bit":gn("clear kth bit",zp,Bp,Up,qp),"bitmanipulation-count-set-bits":gn("count set bits",Hp,Gp,Yp,Vp),"bitmanipulation-divide-power-of-two":gn("divide by 2^k",Kp,Xp,Qp,Jp),"bitmanipulation-get-rightmost-bit":gn("get rightmost bit",Zp,Ip,Fp,Wp),"bitmanipulation-multiply-power-of-two":gn("multiply by 2^k",Pp,$p,ng,eg),"bitmanipulation-set-kth-bit":gn("set kth bit",tg,ag,ig,rg),"bitmanipulation-swap-variables":gn("swap two variables",lg,sg,cg,og),"bitmanipulation-test-kth-bit":gn("test kth-bit",ug,dg,fg,hg),"bitmanipulation-toggle-kth-bit":gn("toggle kth bit",pg,gg,mg,bg),"dp-bottom-up":gn("DP bottom-up",vg,yg,xg,_g),"dp-kadane":gn("Kadane (max-sum subarray)",Sg,Tg,jg,Ng),"dp-top-down":gn("DP top-down",wg,Eg,Ag,Og),"ds-hash-map":gn("hash map",kg,Mg,Rg,Cg),"ds-trie":gn("trie",Dg,Lg,zg,Bg),"ds-union-find":gn("union find",Ug,qg,Hg,Gg),"ds-union-find-optimized":gn("union find optimized",Yg,Vg,Kg,Xg),"graph-bellman-ford":gn("Bellman-Ford (shortest path)",Qg,Jg,Zg,Ig),"graph-bfs":gn("BFS",Fg,Wg,Pg,$g),"graph-dfs-iterative":gn("DFS (iterative)",nm,em,tm,am),"graph-dfs-recursive":gn("DFS (recursive)",im,rm,lm,sm),"graph-dijkstra":gn("Dijkstra (shortest path)",cm,om,um,dm),"graph-kahn":gn("Kahn (topological sort)",fm,hm,pm,gm),"graph-kruskal":gn("Kruskal (mst)",mm,bm,vm,ym),"graph-prim":gn("Prim (mst)",xm,_m,Sm,Tm),"hashmap-find-number-of-subarrays":gn("find number of subarrays that fit an exact criteria",jm,Nm,wm,Em),"hashmap-sliding-window":gn("sliding window",Am,Om,km,Mm),"heap-find-top-k-elements":gn("find top k elements",Rm,Cm,Dm,Lm),"linkedlist-fast-and-slow-pointer":gn("fast and slow pointer",zm,Bm,Um,qm),"linkedlist-reverse":gn("reverse linked list",Hm,Gm,Ym,Vm),"prefix-sum":gn("prefix sum",Km,Xm,Qm,Jm),"sliding-window":gn("sliding window",Zm,Im,Fm,Wm),"stack-monotonic-decreasing":gn("monotonic decreasing stack",Pm,$m,nb,eb),"stack-monotonic-increasing":gn("monotonic increasing stack",tb,ab,ib,rb),"string-building":gn("efficient string building",lb,sb,cb,ob),"tree-bfs":gn("BFS",ub,db,fb,hb),"tree-dfs-iterative":gn("DFS (iterative)",pb,gb,mb,bb),"tree-dfs-recursive":gn("DFS (recursive)",vb,yb,xb,_b),"two-pointers-one-input":gn("two pointers: one input, opposite ends",Sb,Tb,jb,Nb),"two-pointers-two-inputs":gn("two pointers: two inputs, exhaust both",wb,Eb,Ab,Ob)};function Ox(c){const b=Hr.leaves[c];return b?b.templateIds.map(g=>Ax[g]).filter(g=>!!g):[]}const kx="_container_g6uc3_1",Mx="_buttonContainer_g6uc3_15",Rx="_tabButtonContainer_g6uc3_24",Cx="_tabButton_g6uc3_24",ds={container:kx,buttonContainer:Mx,tabButtonContainer:Rx,tabButton:Cx},Dx="_code_10mye_1",Lx="_line_10mye_14",Qh={code:Dx,line:Lx};var Ho,Jh;function zx(){if(Jh)return Ho;Jh=1;function c(h){return h instanceof Map?h.clear=h.delete=h.set=function(){throw new Error("map is read-only")}:h instanceof Set&&(h.add=h.clear=h.delete=function(){throw new Error("set is read-only")}),Object.freeze(h),Object.getOwnPropertyNames(h).forEach(k=>{const X=h[k],pn=typeof X;(pn==="object"||pn==="function")&&!Object.isFrozen(X)&&c(X)}),h}class b{constructor(k){k.data===void 0&&(k.data={}),this.data=k.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function g(h){return h.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function d(h,...k){const X=Object.create(null);for(const pn in h)X[pn]=h[pn];return k.forEach(function(pn){for(const $n in pn)X[$n]=pn[$n]}),X}const j="</span>",z=h=>!!h.scope,L=(h,{prefix:k})=>{if(h.startsWith("language:"))return h.replace("language:","language-");if(h.includes(".")){const X=h.split(".");return[`${k}${X.shift()}`,...X.map((pn,$n)=>`${pn}${"_".repeat($n+1)}`)].join(" ")}return`${k}${h}`};class U{constructor(k,X){this.buffer="",this.classPrefix=X.classPrefix,k.walk(this)}addText(k){this.buffer+=g(k)}openNode(k){if(!z(k))return;const X=L(k.scope,{prefix:this.classPrefix});this.span(X)}closeNode(k){z(k)&&(this.buffer+=j)}value(){return this.buffer}span(k){this.buffer+=`<span class="${k}">`}}const R=(h={})=>{const k={children:[]};return Object.assign(k,h),k};class S{constructor(){this.rootNode=R(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(k){this.top.children.push(k)}openNode(k){const X=R({scope:k});this.add(X),this.stack.push(X)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(k){return this.constructor._walk(k,this.rootNode)}static _walk(k,X){return typeof X=="string"?k.addText(X):X.children&&(k.openNode(X),X.children.forEach(pn=>this._walk(k,pn)),k.closeNode(X)),k}static _collapse(k){typeof k!="string"&&k.children&&(k.children.every(X=>typeof X=="string")?k.children=[k.children.join("")]:k.children.forEach(X=>{S._collapse(X)}))}}class q extends S{constructor(k){super(),this.options=k}addText(k){k!==""&&this.add(k)}startScope(k){this.openNode(k)}endScope(){this.closeNode()}__addSublanguage(k,X){const pn=k.root;X&&(pn.scope=`language:${X}`),this.add(pn)}toHTML(){return new U(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function A(h){return h?typeof h=="string"?h:h.source:null}function C(h){return Q("(?=",h,")")}function J(h){return Q("(?:",h,")*")}function H(h){return Q("(?:",h,")?")}function Q(...h){return h.map(X=>A(X)).join("")}function hn(h){const k=h[h.length-1];return typeof k=="object"&&k.constructor===Object?(h.splice(h.length-1,1),k):{}}function yn(...h){return"("+(hn(h).capture?"":"?:")+h.map(pn=>A(pn)).join("|")+")"}function un(h){return new RegExp(h.toString()+"|").exec("").length-1}function W(h,k){const X=h&&h.exec(k);return X&&X.index===0}const cn=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Dn(h,{joinWith:k}){let X=0;return h.map(pn=>{X+=1;const $n=X;let Zn=A(pn),en="";for(;Zn.length>0;){const P=cn.exec(Zn);if(!P){en+=Zn;break}en+=Zn.substring(0,P.index),Zn=Zn.substring(P.index+P[0].length),P[0][0]==="\\"&&P[1]?en+="\\"+String(Number(P[1])+$n):(en+=P[0],P[0]==="("&&X++)}return en}).map(pn=>`(${pn})`).join(k)}const Rn=/\b\B/,mn="[a-zA-Z]\\w*",Fn="[a-zA-Z_]\\w*",je="\\b\\d+(\\.\\d+)?",Be="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",me="\\b(0b[01]+)",re="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Ue=(h={})=>{const k=/^#![ ]*\//;return h.binary&&(h.begin=Q(k,/.*\b/,h.binary,/\b.*/)),d({scope:"meta",begin:k,end:/$/,relevance:0,"on:begin":(X,pn)=>{X.index!==0&&pn.ignoreMatch()}},h)},ce={begin:"\\\\[\\s\\S]",relevance:0},Ee={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[ce]},w={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[ce]},V={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},F=function(h,k,X={}){const pn=d({scope:"comment",begin:h,end:k,contains:[]},X);pn.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const $n=yn("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return pn.contains.push({begin:Q(/[ ]+/,"(",$n,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),pn},jn=F("//","$"),Nn=F("/\\*","\\*/"),m=F("#","$"),O={scope:"number",begin:je,relevance:0},K={scope:"number",begin:Be,relevance:0},$={scope:"number",begin:me,relevance:0},sn={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[ce,{begin:/\[/,end:/\]/,relevance:0,contains:[ce]}]},_n={scope:"title",begin:mn,relevance:0},bn={scope:"title",begin:Fn,relevance:0},Ln={begin:"\\.\\s*"+Fn,relevance:0};var $e=Object.freeze({__proto__:null,APOS_STRING_MODE:Ee,BACKSLASH_ESCAPE:ce,BINARY_NUMBER_MODE:$,BINARY_NUMBER_RE:me,COMMENT:F,C_BLOCK_COMMENT_MODE:Nn,C_LINE_COMMENT_MODE:jn,C_NUMBER_MODE:K,C_NUMBER_RE:Be,END_SAME_AS_BEGIN:function(h){return Object.assign(h,{"on:begin":(k,X)=>{X.data._beginMatch=k[1]},"on:end":(k,X)=>{X.data._beginMatch!==k[1]&&X.ignoreMatch()}})},HASH_COMMENT_MODE:m,IDENT_RE:mn,MATCH_NOTHING_RE:Rn,METHOD_GUARD:Ln,NUMBER_MODE:O,NUMBER_RE:je,PHRASAL_WORDS_MODE:V,QUOTE_STRING_MODE:w,REGEXP_MODE:sn,RE_STARTERS_RE:re,SHEBANG:Ue,TITLE_MODE:_n,UNDERSCORE_IDENT_RE:Fn,UNDERSCORE_TITLE_MODE:bn});function St(h,k){h.input[h.index-1]==="."&&k.ignoreMatch()}function ja(h,k){h.className!==void 0&&(h.scope=h.className,delete h.className)}function Na(h,k){k&&h.beginKeywords&&(h.begin="\\b("+h.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",h.__beforeBegin=St,h.keywords=h.keywords||h.beginKeywords,delete h.beginKeywords,h.relevance===void 0&&(h.relevance=0))}function vt(h,k){Array.isArray(h.illegal)&&(h.illegal=yn(...h.illegal))}function qi(h,k){if(h.match){if(h.begin||h.end)throw new Error("begin & end are not supported with match");h.begin=h.match,delete h.match}}function Hi(h,k){h.relevance===void 0&&(h.relevance=1)}const vs=(h,k)=>{if(!h.beforeMatch)return;if(h.starts)throw new Error("beforeMatch cannot be used with starts");const X=Object.assign({},h);Object.keys(h).forEach(pn=>{delete h[pn]}),h.keywords=X.keywords,h.begin=Q(X.beforeMatch,C(X.begin)),h.starts={relevance:0,contains:[Object.assign(X,{endsParent:!0})]},h.relevance=0,delete X.beforeMatch},Vr=["of","and","for","in","not","or","if","then","parent","list","value"],Gi="keyword";function Wa(h,k,X=Gi){const pn=Object.create(null);return typeof h=="string"?$n(X,h.split(" ")):Array.isArray(h)?$n(X,h):Object.keys(h).forEach(function(Zn){Object.assign(pn,Wa(h[Zn],k,Zn))}),pn;function $n(Zn,en){k&&(en=en.map(P=>P.toLowerCase())),en.forEach(function(P){const fn=P.split("|");pn[fn[0]]=[Zn,Yi(fn[0],fn[1])]})}}function Yi(h,k){return k?Number(k):ys(h)?0:1}function ys(h){return Vr.includes(h.toLowerCase())}const Kr={},oe=h=>{console.error(h)},Xr=(h,...k)=>{console.log(`WARN: ${h}`,...k)},Ot=(h,k)=>{Kr[`${h}/${k}`]||(console.log(`Deprecated as of ${h}. ${k}`),Kr[`${h}/${k}`]=!0)},wa=new Error;function Ea(h,k,{key:X}){let pn=0;const $n=h[X],Zn={},en={};for(let P=1;P<=k.length;P++)en[P+pn]=$n[P],Zn[P+pn]=!0,pn+=un(k[P-1]);h[X]=en,h[X]._emit=Zn,h[X]._multi=!0}function xs(h){if(Array.isArray(h.begin)){if(h.skip||h.excludeBegin||h.returnBegin)throw oe("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),wa;if(typeof h.beginScope!="object"||h.beginScope===null)throw oe("beginScope must be object"),wa;Ea(h,h.begin,{key:"beginScope"}),h.begin=Dn(h.begin,{joinWith:""})}}function Qr(h){if(Array.isArray(h.end)){if(h.skip||h.excludeEnd||h.returnEnd)throw oe("skip, excludeEnd, returnEnd not compatible with endScope: {}"),wa;if(typeof h.endScope!="object"||h.endScope===null)throw oe("endScope must be object"),wa;Ea(h,h.end,{key:"endScope"}),h.end=Dn(h.end,{joinWith:""})}}function _s(h){h.scope&&typeof h.scope=="object"&&h.scope!==null&&(h.beginScope=h.scope,delete h.scope)}function Ss(h){_s(h),typeof h.beginScope=="string"&&(h.beginScope={_wrap:h.beginScope}),typeof h.endScope=="string"&&(h.endScope={_wrap:h.endScope}),xs(h),Qr(h)}function Aa(h){function k(en,P){return new RegExp(A(en),"m"+(h.case_insensitive?"i":"")+(h.unicodeRegex?"u":"")+(P?"g":""))}class X{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(P,fn){fn.position=this.position++,this.matchIndexes[this.matchAt]=fn,this.regexes.push([fn,P]),this.matchAt+=un(P)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const P=this.regexes.map(fn=>fn[1]);this.matcherRe=k(Dn(P,{joinWith:"|"}),!0),this.lastIndex=0}exec(P){this.matcherRe.lastIndex=this.lastIndex;const fn=this.matcherRe.exec(P);if(!fn)return null;const ue=fn.findIndex((kt,$a)=>$a>0&&kt!==void 0),te=this.matchIndexes[ue];return fn.splice(0,ue),Object.assign(fn,te)}}class pn{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(P){if(this.multiRegexes[P])return this.multiRegexes[P];const fn=new X;return this.rules.slice(P).forEach(([ue,te])=>fn.addRule(ue,te)),fn.compile(),this.multiRegexes[P]=fn,fn}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(P,fn){this.rules.push([P,fn]),fn.type==="begin"&&this.count++}exec(P){const fn=this.getMatcher(this.regexIndex);fn.lastIndex=this.lastIndex;let ue=fn.exec(P);if(this.resumingScanAtSamePosition()&&!(ue&&ue.index===this.lastIndex)){const te=this.getMatcher(0);te.lastIndex=this.lastIndex+1,ue=te.exec(P)}return ue&&(this.regexIndex+=ue.position+1,this.regexIndex===this.count&&this.considerAll()),ue}}function $n(en){const P=new pn;return en.contains.forEach(fn=>P.addRule(fn.begin,{rule:fn,type:"begin"})),en.terminatorEnd&&P.addRule(en.terminatorEnd,{type:"end"}),en.illegal&&P.addRule(en.illegal,{type:"illegal"}),P}function Zn(en,P){const fn=en;if(en.isCompiled)return fn;[ja,qi,Ss,vs].forEach(te=>te(en,P)),h.compilerExtensions.forEach(te=>te(en,P)),en.__beforeBegin=null,[Na,vt,Hi].forEach(te=>te(en,P)),en.isCompiled=!0;let ue=null;return typeof en.keywords=="object"&&en.keywords.$pattern&&(en.keywords=Object.assign({},en.keywords),ue=en.keywords.$pattern,delete en.keywords.$pattern),ue=ue||/\w+/,en.keywords&&(en.keywords=Wa(en.keywords,h.case_insensitive)),fn.keywordPatternRe=k(ue,!0),P&&(en.begin||(en.begin=/\B|\b/),fn.beginRe=k(fn.begin),!en.end&&!en.endsWithParent&&(en.end=/\B|\b/),en.end&&(fn.endRe=k(fn.end)),fn.terminatorEnd=A(fn.end)||"",en.endsWithParent&&P.terminatorEnd&&(fn.terminatorEnd+=(en.end?"|":"")+P.terminatorEnd)),en.illegal&&(fn.illegalRe=k(en.illegal)),en.contains||(en.contains=[]),en.contains=[].concat(...en.contains.map(function(te){return Tt(te==="self"?en:te)})),en.contains.forEach(function(te){Zn(te,fn)}),en.starts&&Zn(en.starts,P),fn.matcher=$n(fn),fn}if(h.compilerExtensions||(h.compilerExtensions=[]),h.contains&&h.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return h.classNameAliases=d(h.classNameAliases||{}),Zn(h)}function Ce(h){return h?h.endsWithParent||Ce(h.starts):!1}function Tt(h){return h.variants&&!h.cachedVariants&&(h.cachedVariants=h.variants.map(function(k){return d(h,{variants:null},k)})),h.cachedVariants?h.cachedVariants:Ce(h)?d(h,{starts:h.starts?d(h.starts):null}):Object.isFrozen(h)?d(h):h}var qe="11.11.1";class Ts extends Error{constructor(k,X){super(k),this.name="HTMLInjectionError",this.html=X}}const Vi=g,Jr=d,Oa=Symbol("nomatch"),Pa=7,ka=function(h){const k=Object.create(null),X=Object.create(null),pn=[];let $n=!0;const Zn="Could not find the language '{}', did you forget to load/include a language module?",en={disableAutodetect:!0,name:"Plain text",contains:[]};let P={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:q};function fn(B){return P.noHighlightRe.test(B)}function ue(B){let rn=B.className+" ";rn+=B.parentNode?B.parentNode.className:"";const wn=P.languageDetectRe.exec(rn);if(wn){const Gn=He(wn[1]);return Gn||(Xr(Zn.replace("{}",wn[1])),Xr("Falling back to no-highlight mode for this block.",B)),Gn?wn[1]:"no-highlight"}return rn.split(/\s+/).find(Gn=>fn(Gn)||He(Gn))}function te(B,rn,wn){let Gn="",fe="";typeof rn=="object"?(Gn=B,wn=rn.ignoreIllegals,fe=rn.language):(Ot("10.7.0","highlight(lang, code, ...args) has been deprecated."),Ot("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),fe=B,Gn=rn),wn===void 0&&(wn=!0);const Le={code:Gn,language:fe};Ra("before:highlight",Le);const nt=Le.result?Le.result:kt(Le.language,Le.code,wn);return nt.code=Le.code,Ra("after:highlight",nt),nt}function kt(B,rn,wn,Gn){const fe=Object.create(null);function Le(G,tn){return G.keywords[tn]}function nt(){if(!dn.keywords){ve.addText(Yn);return}let G=0;dn.keywordPatternRe.lastIndex=0;let tn=dn.keywordPatternRe.exec(Yn),xn="";for(;tn;){xn+=Yn.substring(G,tn.index);const On=Ae.case_insensitive?tn[0].toLowerCase():tn[0],ie=Le(dn,On);if(ie){const[ot,Ii]=ie;if(ve.addText(xn),xn="",fe[On]=(fe[On]||0)+1,fe[On]<=Pa&&($t+=Ii),ot.startsWith("_"))xn+=tn[0];else{const nl=Ae.classNameAliases[ot]||ot;et(tn[0],nl)}}else xn+=tn[0];G=dn.keywordPatternRe.lastIndex,tn=dn.keywordPatternRe.exec(Yn)}xn+=Yn.substring(G),ve.addText(xn)}function Xe(){if(Yn==="")return;let G=null;if(typeof dn.subLanguage=="string"){if(!k[dn.subLanguage]){ve.addText(Yn);return}G=kt(dn.subLanguage,Yn,!0,$r[dn.subLanguage]),$r[dn.subLanguage]=G._top}else G=ni(Yn,dn.subLanguage.length?dn.subLanguage:null);dn.relevance>0&&($t+=G.relevance),ve.__addSublanguage(G._emitter,G.language)}function Pn(){dn.subLanguage!=null?Xe():nt(),Yn=""}function et(G,tn){G!==""&&(ve.startScope(tn),ve.addText(G),ve.endScope())}function Wr(G,tn){let xn=1;const On=tn.length-1;for(;xn<=On;){if(!G._emit[xn]){xn++;continue}const ie=Ae.classNameAliases[G[xn]]||G[xn],ot=tn[xn];ie?et(ot,ie):(Yn=ot,nt(),Yn=""),xn++}}function ti(G,tn){return G.scope&&typeof G.scope=="string"&&ve.openNode(Ae.classNameAliases[G.scope]||G.scope),G.beginScope&&(G.beginScope._wrap?(et(Yn,Ae.classNameAliases[G.beginScope._wrap]||G.beginScope._wrap),Yn=""):G.beginScope._multi&&(Wr(G.beginScope,tn),Yn="")),dn=Object.create(G,{parent:{value:dn}}),dn}function Qi(G,tn,xn){let On=W(G.endRe,xn);if(On){if(G["on:end"]){const ie=new b(G);G["on:end"](tn,ie),ie.isMatchIgnored&&(On=!1)}if(On){for(;G.endsParent&&G.parent;)G=G.parent;return G}}if(G.endsWithParent)return Qi(G.parent,tn,xn)}function ai(G){return dn.matcher.regexIndex===0?(Yn+=G[0],1):(na=!0,0)}function js(G){const tn=G[0],xn=G.rule,On=new b(xn),ie=[xn.__beforeBegin,xn["on:begin"]];for(const ot of ie)if(ot&&(ot(G,On),On.isMatchIgnored))return ai(tn);return xn.skip?Yn+=tn:(xn.excludeBegin&&(Yn+=tn),Pn(),!xn.returnBegin&&!xn.excludeBegin&&(Yn=tn)),ti(xn,G),xn.returnBegin?0:tn.length}function Qe(G){const tn=G[0],xn=rn.substring(G.index),On=Qi(dn,G,xn);if(!On)return Oa;const ie=dn;dn.endScope&&dn.endScope._wrap?(Pn(),et(tn,dn.endScope._wrap)):dn.endScope&&dn.endScope._multi?(Pn(),Wr(dn.endScope,G)):ie.skip?Yn+=tn:(ie.returnEnd||ie.excludeEnd||(Yn+=tn),Pn(),ie.excludeEnd&&(Yn=tn));do dn.scope&&ve.closeNode(),!dn.skip&&!dn.subLanguage&&($t+=dn.relevance),dn=dn.parent;while(dn!==On.parent);return On.starts&&ti(On.starts,G),ie.returnEnd?0:tn.length}function Ji(){const G=[];for(let tn=dn;tn!==Ae;tn=tn.parent)tn.scope&&G.unshift(tn.scope);G.forEach(tn=>ve.openNode(tn))}let Ca={};function ii(G,tn){const xn=tn&&tn[0];if(Yn+=G,xn==null)return Pn(),0;if(Ca.type==="begin"&&tn.type==="end"&&Ca.index===tn.index&&xn===""){if(Yn+=rn.slice(tn.index,tn.index+1),!$n){const On=new Error(`0 width match regex (${B})`);throw On.languageName=B,On.badRule=Ca.rule,On}return 1}if(Ca=tn,tn.type==="begin")return js(tn);if(tn.type==="illegal"&&!wn){const On=new Error('Illegal lexeme "'+xn+'" for mode "'+(dn.scope||"<unnamed>")+'"');throw On.mode=dn,On}else if(tn.type==="end"){const On=Qe(tn);if(On!==Oa)return On}if(tn.type==="illegal"&&xn==="")return Yn+=`
`,1;if(Zi>1e5&&Zi>tn.index*3)throw new Error("potential infinite loop, way more iterations than matches");return Yn+=xn,xn.length}const Ae=He(B);if(!Ae)throw oe(Zn.replace("{}",B)),new Error('Unknown language: "'+B+'"');const Pr=Aa(Ae);let ri="",dn=Gn||Pr;const $r={},ve=new P.__emitter(P);Ji();let Yn="",$t=0,Ct=0,Zi=0,na=!1;try{if(Ae.__emitTokens)Ae.__emitTokens(rn,ve);else{for(dn.matcher.considerAll();;){Zi++,na?na=!1:dn.matcher.considerAll(),dn.matcher.lastIndex=Ct;const G=dn.matcher.exec(rn);if(!G)break;const tn=rn.substring(Ct,G.index),xn=ii(tn,G);Ct=G.index+xn}ii(rn.substring(Ct))}return ve.finalize(),ri=ve.toHTML(),{language:B,value:ri,relevance:$t,illegal:!1,_emitter:ve,_top:dn}}catch(G){if(G.message&&G.message.includes("Illegal"))return{language:B,value:Vi(rn),illegal:!0,relevance:0,_illegalBy:{message:G.message,index:Ct,context:rn.slice(Ct-100,Ct+100),mode:G.mode,resultSoFar:ri},_emitter:ve};if($n)return{language:B,value:Vi(rn),illegal:!1,relevance:0,errorRaised:G,_emitter:ve,_top:dn};throw G}}function $a(B){const rn={value:Vi(B),illegal:!1,relevance:0,_top:en,_emitter:new P.__emitter(P)};return rn._emitter.addText(B),rn}function ni(B,rn){rn=rn||P.languages||Object.keys(k);const wn=$a(B),Gn=rn.filter(He).filter(Wt).map(Pn=>kt(Pn,B,!1));Gn.unshift(wn);const fe=Gn.sort((Pn,et)=>{if(Pn.relevance!==et.relevance)return et.relevance-Pn.relevance;if(Pn.language&&et.language){if(He(Pn.language).supersetOf===et.language)return 1;if(He(et.language).supersetOf===Pn.language)return-1}return 0}),[Le,nt]=fe,Xe=Le;return Xe.secondBest=nt,Xe}function jt(B,rn,wn){const Gn=rn&&X[rn]||wn;B.classList.add("hljs"),B.classList.add(`language-${Gn}`)}function de(B){let rn=null;const wn=ue(B);if(fn(wn))return;if(Ra("before:highlightElement",{el:B,language:wn}),B.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",B);return}if(B.children.length>0&&(P.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(B)),P.throwUnescapedHTML))throw new Ts("One of your code blocks includes unescaped HTML.",B.innerHTML);rn=B;const Gn=rn.textContent,fe=wn?te(Gn,{language:wn,ignoreIllegals:!0}):ni(Gn);B.innerHTML=fe.value,B.dataset.highlighted="yes",jt(B,wn,fe.language),B.result={language:fe.language,re:fe.relevance,relevance:fe.relevance},fe.secondBest&&(B.secondBest={language:fe.secondBest.language,relevance:fe.secondBest.relevance}),Ra("after:highlightElement",{el:B,result:fe,text:Gn})}function De(B){P=Jr(P,B)}const Ft=()=>{ei(),Ot("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function Ki(){ei(),Ot("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Zr=!1;function ei(){function B(){ei()}if(document.readyState==="loading"){Zr||window.addEventListener("DOMContentLoaded",B,!1),Zr=!0;return}document.querySelectorAll(P.cssSelector).forEach(de)}function Ir(B,rn){let wn=null;try{wn=rn(h)}catch(Gn){if(oe("Language definition for '{}' could not be registered.".replace("{}",B)),$n)oe(Gn);else throw Gn;wn=en}wn.name||(wn.name=B),k[B]=wn,wn.rawDefinition=rn.bind(null,h),wn.aliases&&Mt(wn.aliases,{languageName:B})}function Ma(B){delete k[B];for(const rn of Object.keys(X))X[rn]===B&&delete X[rn]}function Xi(){return Object.keys(k)}function He(B){return B=(B||"").toLowerCase(),k[B]||k[X[B]]}function Mt(B,{languageName:rn}){typeof B=="string"&&(B=[B]),B.forEach(wn=>{X[wn.toLowerCase()]=rn})}function Wt(B){const rn=He(B);return rn&&!rn.disableAutodetect}function Pt(B){B["before:highlightBlock"]&&!B["before:highlightElement"]&&(B["before:highlightElement"]=rn=>{B["before:highlightBlock"](Object.assign({block:rn.el},rn))}),B["after:highlightBlock"]&&!B["after:highlightElement"]&&(B["after:highlightElement"]=rn=>{B["after:highlightBlock"](Object.assign({block:rn.el},rn))})}function be(B){Pt(B),pn.push(B)}function Fr(B){const rn=pn.indexOf(B);rn!==-1&&pn.splice(rn,1)}function Ra(B,rn){const wn=B;pn.forEach(function(Gn){Gn[wn]&&Gn[wn](rn)})}function Rt(B){return Ot("10.7.0","highlightBlock will be removed entirely in v12.0"),Ot("10.7.0","Please use highlightElement now."),de(B)}Object.assign(h,{highlight:te,highlightAuto:ni,highlightAll:ei,highlightElement:de,highlightBlock:Rt,configure:De,initHighlighting:Ft,initHighlightingOnLoad:Ki,registerLanguage:Ir,unregisterLanguage:Ma,listLanguages:Xi,getLanguage:He,registerAliases:Mt,autoDetection:Wt,inherit:Jr,addPlugin:be,removePlugin:Fr}),h.debugMode=function(){$n=!1},h.safeMode=function(){$n=!0},h.versionString=qe,h.regex={concat:Q,lookahead:C,either:yn,optional:H,anyNumberOfTimes:J};for(const B in $e)typeof $e[B]=="object"&&c($e[B]);return Object.assign(h,$e),h},Ke=ka({});return Ke.newInstance=()=>ka({}),Ho=Ke,Ke.HighlightJS=Ke,Ke.default=Ke,Ho}var Bx=zx();const Yr=Ui(Bx),Zh="[A-Za-z$_][0-9A-Za-z$_]*",Ux=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],qx=["true","false","null","undefined","NaN","Infinity"],kb=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Mb=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Rb=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Hx=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Gx=[].concat(Rb,kb,Mb);function Yx(c){const b=c.regex,g=(F,{after:jn})=>{const Nn="</"+F[0].slice(1);return F.input.indexOf(Nn,jn)!==-1},d=Zh,j={begin:"<>",end:"</>"},z=/<[A-Za-z0-9\\._:-]+\s*\/>/,L={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(F,jn)=>{const Nn=F[0].length+F.index,m=F.input[Nn];if(m==="<"||m===","){jn.ignoreMatch();return}m===">"&&(g(F,{after:Nn})||jn.ignoreMatch());let O;const K=F.input.substring(Nn);if(O=K.match(/^\s*=/)){jn.ignoreMatch();return}if((O=K.match(/^\s+extends\s+/))&&O.index===0){jn.ignoreMatch();return}}},U={$pattern:Zh,keyword:Ux,literal:qx,built_in:Gx,"variable.language":Hx},R="[0-9](_?[0-9])*",S=`\\.(${R})`,q="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",A={className:"number",variants:[{begin:`(\\b(${q})((${S})|\\.)?|(${S}))[eE][+-]?(${R})\\b`},{begin:`\\b(${q})\\b((${S})\\b|\\.)?|(${S})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},C={className:"subst",begin:"\\$\\{",end:"\\}",keywords:U,contains:[]},J={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[c.BACKSLASH_ESCAPE,C],subLanguage:"xml"}},H={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[c.BACKSLASH_ESCAPE,C],subLanguage:"css"}},Q={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[c.BACKSLASH_ESCAPE,C],subLanguage:"graphql"}},hn={className:"string",begin:"`",end:"`",contains:[c.BACKSLASH_ESCAPE,C]},un={className:"comment",variants:[c.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:d+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),c.C_BLOCK_COMMENT_MODE,c.C_LINE_COMMENT_MODE]},W=[c.APOS_STRING_MODE,c.QUOTE_STRING_MODE,J,H,Q,hn,{match:/\$\d+/},A];C.contains=W.concat({begin:/\{/,end:/\}/,keywords:U,contains:["self"].concat(W)});const cn=[].concat(un,C.contains),Dn=cn.concat([{begin:/(\s*)\(/,end:/\)/,keywords:U,contains:["self"].concat(cn)}]),Rn={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:U,contains:Dn},mn={variants:[{match:[/class/,/\s+/,d,/\s+/,/extends/,/\s+/,b.concat(d,"(",b.concat(/\./,d),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,d],scope:{1:"keyword",3:"title.class"}}]},Fn={relevance:0,match:b.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...kb,...Mb]}},je={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},Be={variants:[{match:[/function/,/\s+/,d,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[Rn],illegal:/%/},me={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function re(F){return b.concat("(?!",F.join("|"),")")}const Ue={match:b.concat(/\b/,re([...Rb,"super","import"].map(F=>`${F}\\s*\\(`)),d,b.lookahead(/\s*\(/)),className:"title.function",relevance:0},ce={begin:b.concat(/\./,b.lookahead(b.concat(d,/(?![0-9A-Za-z$_(])/))),end:d,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},Ee={match:[/get|set/,/\s+/,d,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},Rn]},w="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+c.UNDERSCORE_IDENT_RE+")\\s*=>",V={match:[/const|var|let/,/\s+/,d,/\s*/,/=\s*/,/(async\s*)?/,b.lookahead(w)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[Rn]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:U,exports:{PARAMS_CONTAINS:Dn,CLASS_REFERENCE:Fn},illegal:/#(?![$_A-z])/,contains:[c.SHEBANG({label:"shebang",binary:"node",relevance:5}),je,c.APOS_STRING_MODE,c.QUOTE_STRING_MODE,J,H,Q,hn,un,{match:/\$\d+/},A,Fn,{scope:"attr",match:d+b.lookahead(":"),relevance:0},V,{begin:"("+c.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[un,c.REGEXP_MODE,{className:"function",begin:w,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:c.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:U,contains:Dn}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:j.begin,end:j.end},{match:z},{begin:L.begin,"on:begin":L.isTrulyOpeningTag,end:L.end}],subLanguage:"xml",contains:[{begin:L.begin,end:L.end,skip:!0,contains:["self"]}]}]},Be,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+c.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[Rn,c.inherit(c.TITLE_MODE,{begin:d,className:"title.function"})]},{match:/\.\.\./,relevance:0},ce,{match:"\\$"+d,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[Rn]},Ue,me,mn,Ee,{match:/\$[(.]/}]}}var zi="[0-9](_*[0-9])*",fs=`\\.(${zi})`,hs="[0-9a-fA-F](_*[0-9a-fA-F])*",Ih={className:"number",variants:[{begin:`(\\b(${zi})((${fs})|\\.)?|(${fs}))[eE][+-]?(${zi})[fFdD]?\\b`},{begin:`\\b(${zi})((${fs})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${fs})[fFdD]?\\b`},{begin:`\\b(${zi})[fFdD]\\b`},{begin:`\\b0[xX]((${hs})\\.?|(${hs})?\\.(${hs}))[pP][+-]?(${zi})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${hs})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};function Cb(c,b,g){return g===-1?"":c.replace(b,d=>Cb(c,b,g-1))}function Vx(c){const b=c.regex,g="[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",d=g+Cb("(?:<"+g+"~~~(?:\\s*,\\s*"+g+"~~~)*>)?",/~~~/g,2),R={keyword:["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do","sealed","yield","permits","goto","when"],literal:["false","true","null"],type:["char","boolean","long","float","int","byte","short","double"],built_in:["super","this"]},S={className:"meta",begin:"@"+g,contains:[{begin:/\(/,end:/\)/,contains:["self"]}]},q={className:"params",begin:/\(/,end:/\)/,keywords:R,relevance:0,contains:[c.C_BLOCK_COMMENT_MODE],endsParent:!0};return{name:"Java",aliases:["jsp"],keywords:R,illegal:/<\/|#/,contains:[c.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{begin:/import java\.[a-z]+\./,keywords:"import",relevance:2},c.C_LINE_COMMENT_MODE,c.C_BLOCK_COMMENT_MODE,{begin:/"""/,end:/"""/,className:"string",contains:[c.BACKSLASH_ESCAPE]},c.APOS_STRING_MODE,c.QUOTE_STRING_MODE,{match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,g],className:{1:"keyword",3:"title.class"}},{match:/non-sealed/,scope:"keyword"},{begin:[b.concat(/(?!else)/,g),/\s+/,g,/\s+/,/=(?!=)/],className:{1:"type",3:"variable",5:"operator"}},{begin:[/record/,/\s+/,g],className:{1:"keyword",3:"title.class"},contains:[q,c.C_LINE_COMMENT_MODE,c.C_BLOCK_COMMENT_MODE]},{beginKeywords:"new throw return else",relevance:0},{begin:["(?:"+d+"\\s+)",c.UNDERSCORE_IDENT_RE,/\s*(?=\()/],className:{2:"title.function"},keywords:R,contains:[{className:"params",begin:/\(/,end:/\)/,keywords:R,relevance:0,contains:[S,c.APOS_STRING_MODE,c.QUOTE_STRING_MODE,Ih,c.C_BLOCK_COMMENT_MODE]},c.C_LINE_COMMENT_MODE,c.C_BLOCK_COMMENT_MODE]},Ih,S]}}function Kx(c){const b=c.regex,g=c.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),d="decltype\\(auto\\)",j="[a-zA-Z_]\\w*::",L="(?!struct)("+d+"|"+b.optional(j)+"[a-zA-Z_]\\w*"+b.optional("<[^<>]+>")+")",U={className:"type",begin:"\\b[a-z\\d_]*_t\\b"},S={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[c.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'("+"\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)"+"|.)",end:"'",illegal:"."},c.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},q={className:"number",variants:[{begin:"[+-]?(?:(?:[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)"},{begin:"[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)"}],relevance:0},A={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},c.inherit(S,{className:"string"}),{className:"string",begin:/<.*?>/},g,c.C_BLOCK_COMMENT_MODE]},C={className:"title",begin:b.optional(j)+c.IDENT_RE,relevance:0},J=b.optional(j)+c.IDENT_RE+"\\s*\\(",H=["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],Q=["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],hn=["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","flat_map","flat_set","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"],yn=["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"],cn={type:Q,keyword:H,literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],_type_hints:hn},Dn={className:"function.dispatch",relevance:0,keywords:{_hint:yn},begin:b.concat(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!switch)/,/(?!while)/,c.IDENT_RE,b.lookahead(/(<[^<>]+>|)\s*\(/))},Rn=[Dn,A,U,g,c.C_BLOCK_COMMENT_MODE,q,S],mn={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:cn,contains:Rn.concat([{begin:/\(/,end:/\)/,keywords:cn,contains:Rn.concat(["self"]),relevance:0}]),relevance:0},Fn={className:"function",begin:"("+L+"[\\*&\\s]+)+"+J,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:cn,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:d,keywords:cn,relevance:0},{begin:J,returnBegin:!0,contains:[C],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[S,q]},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:cn,relevance:0,contains:[g,c.C_BLOCK_COMMENT_MODE,S,q,U,{begin:/\(/,end:/\)/,keywords:cn,relevance:0,contains:["self",g,c.C_BLOCK_COMMENT_MODE,S,q,U]}]},U,g,c.C_BLOCK_COMMENT_MODE,A]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:cn,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat(mn,Fn,Dn,Rn,[A,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function|flat_map|flat_set)\\s*<(?!<)",end:">",keywords:cn,contains:["self",U]},{begin:c.IDENT_RE+"::",keywords:cn},{match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],className:{1:"keyword",3:"title.class"}}])}}function Xx(c){const b=c.regex,g=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),d=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],j=/[-+*\/%=<>&|^~]|\*\*?|\/\/?|<<=?|>>=?|\+=|-=|\*=|\/=|%=|@|<|>/,z=["bool","complex","dict","float","frozenset","int","list","set","str","tuple"],L=["add_vertex","add","append","backtrack","bit_length","clear","collect_words","connected","counting_sort","defaultdict","deque","dfs","dp","extend","find_max_index","find","heapify","heappop","heappush","insert","insertion_sort","join","ListNode","merge_sort","pop","popleft","print_trie","quick_sort","RECURRENCE_RELATION","remove","shuffle","sort","TreeNode","TrieNode","union","UnionFind","update"],U=["BASE_CASE","BOOLEAN","CONDITION","CRITERIA","ITERATE_OVER_INPUT","MAXIMUM_POSSIBLE_ANSWER","MINIMUM_POSSIBLE_ANSWER","OTHER_ARGUMENTS","SMALLEST_SUBPROBLEM","START_NODE","STATE_FOR_WHOLE_INPUT","STATE","WINDOW_CONDITION_BROKEN"],R=["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip",...L],S=["__debug__","Ellipsis","False","None","NotImplemented","True",...U],q=["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union",...z],A={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:d,built_in:R,literal:S,type:q},C={className:"meta",begin:/^(>>>|\.\.\.) /},J={className:"subst",begin:/\{/,end:/\}/,keywords:A,illegal:/#/},H={begin:/\{\{/,relevance:0},Q={className:"string",contains:[c.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[c.BACKSLASH_ESCAPE,C],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[c.BACKSLASH_ESCAPE,C],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[c.BACKSLASH_ESCAPE,C,H,J]},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[c.BACKSLASH_ESCAPE,C,H,J]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[c.BACKSLASH_ESCAPE,H,J]},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[c.BACKSLASH_ESCAPE,H,J]},c.APOS_STRING_MODE,c.QUOTE_STRING_MODE]},hn="[0-9](_?[0-9])*",yn=`(\\b(${hn}))?\\.(${hn})|\\b(${hn})\\.`,un=`\\b|${d.join("|")}`,W={className:"number",relevance:0,variants:[{begin:`(\\b(${hn})|(${yn}))[eE][+-]?(${hn})[jJ]?(?=${un})`},{begin:`(${yn})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${un})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${un})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${un})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${un})`},{begin:`\\b(${hn})[jJ](?=${un})`}]},cn={className:"comment",begin:b.lookahead(/# type:/),end:/$/,keywords:A,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},Dn={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:A,contains:["self",C,W,Q,c.HASH_COMMENT_MODE,{scope:"params.operator",match:j},{scope:"params.comma",match:","},{scope:"params.self",match:/self/}]}]};return J.contains=[Q,W,C],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:A,illegal:/(<\/|\?)|=>/,contains:[C,W,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},Q,cn,c.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,g],scope:{1:"keyword.def",3:"title.function"},contains:[Dn]},{variants:[{match:[/\bclass/,/\s+/,g,/\s*/,/\(\s*/,g,/\s*\)/]},{match:[/\bclass/,/\s+/,g]}],scope:{1:"keyword.class",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[W,Dn,Q]},{scope:"operator",match:j}]}}Yr.registerLanguage("python",Xx);Yr.registerLanguage("javascript",Yx);Yr.registerLanguage("java",Vx);Yr.registerLanguage("cpp",Kx);function Qx({code:c,language:b}){const g=Y.useRef(null),[d,j]=Y.useState(""),[z,L]=Y.useState(""),U=Te("hljs",b,Qh.code),R=()=>{if(g.current){const Q=c.split(`
`).map((hn,yn)=>{const un=Yr.highlight(hn,{language:b}).value;return`<span class=${Qh.line} data-line-number=${yn+1}>${un}</span>`}).join("");L(Q)}},S=()=>{g.current?.querySelectorAll("span[data-line-number]")?.forEach(Q=>Q.addEventListener("click",C))},q=()=>{g.current?.querySelectorAll("span[data-line-number]")?.forEach(Q=>Q.removeEventListener("click",C))},A=()=>{g.current?.querySelector(`span[data-line-number="${d}"]`)?.removeAttribute("focused")},C=J=>{const H=J.currentTarget,Q=H.getAttribute("data-line-number")??"";A(),Q===d?j(""):(H.setAttribute("focused",""),j(Q))};return sp(g,A),Y.useEffect(()=>(R(),S(),()=>q()),[c,z,d]),i.jsx("pre",{ref:g,children:i.jsx("code",{className:U,dangerouslySetInnerHTML:{__html:z}})})}const Jx="_copyButton_fst3f_1",Zx="_copySvg_fst3f_23",Ix="_checkSvg_fst3f_30",Fx="_checkSvgPath_fst3f_35",Wx="_enter_fst3f_46",Px="_exit_fst3f_50",Fa={copyButton:Jx,copySvg:Zx,checkSvg:Ix,checkSvgPath:Fx,enter:Wx,exit:Px};function $x({onClick:c}){const[b,g]=Y.useState("show"),[d,j]=Y.useState("hide"),z=Te(Fa.copySvg,b==="enter"&&Fa.enter,b==="exit"&&Fa.exit),L=Te(Fa.checkSvg,d==="exit"&&Fa.exit),U=Te(Fa.checkSvgPath),R=()=>{b==="show"&&d==="hide"&&(g("exit"),c())},S=()=>{b==="enter"&&g("show"),b==="exit"&&(g("hide"),j("show"))},q=()=>{d==="show"&&setTimeout(()=>{j("exit")},500),d==="exit"&&(j("hide"),g("enter"))},A=()=>b!=="hide"&&i.jsx("svg",{className:z,viewBox:"0 0 512 512",onAnimationEnd:S,children:i.jsx("path",{d:"M64 464H288c8.8 0 16-7.2 16-16V384h48v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h64v48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM224 304H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16V288c0 8.8 7.2 16 16 16zm-64-16V64c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64z"})}),C=()=>d!=="hide"&&i.jsx("svg",{className:L,viewBox:"0 0 16 16",onAnimationEnd:q,children:i.jsx("path",{className:U,d:"M3.428571,9.14285714 L6.85714286,12.57142857 L12.5714286,3.42857143"})});return i.jsxs("button",{type:"button","aria-label":d==="hide"?"Copy code":"Copied",title:"Copy code",className:Fa.copyButton,onClick:R,children:[A(),C()]})}function n_(){return i.jsxs("svg",{viewBox:"0 0 128 128",children:[i.jsxs("linearGradient",{id:"python_svg__a",x1:70.252,x2:170.659,y1:1237.476,y2:1151.089,gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{offset:0,stopColor:"#5A9FD4"}),i.jsx("stop",{offset:1,stopColor:"#306998"})]}),i.jsxs("linearGradient",{id:"python_svg__b",x1:209.474,x2:173.62,y1:1098.811,y2:1149.537,gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{offset:0,stopColor:"#FFD43B"}),i.jsx("stop",{offset:1,stopColor:"#FFE873"})]}),i.jsx("path",{fill:"url(#python_svg__a)",d:"M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008M50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721",transform:"translate(0 10.26)"}),i.jsx("path",{fill:"url(#python_svg__b)",d:"M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692",transform:"translate(0 10.26)"}),i.jsxs("radialGradient",{id:"python_svg__c",cx:1825.678,cy:444.45,r:26.743,gradientTransform:"matrix(0 -.24 -1.055 0 532.979 557.576)",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{offset:0,stopColor:"#B8B8B8",stopOpacity:.498}),i.jsx("stop",{offset:1,stopColor:"#7F7F7F",stopOpacity:0})]}),i.jsx("path",{fill:"url(#python_svg__c)",d:"M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416s14.815-6.417 33.092-6.417c18.275 0 33.091 2.872 33.091 6.417",opacity:.444})]})}function e_(){return i.jsxs("svg",{viewBox:"0 0 128 128",children:[i.jsx("path",{fill:"#F0DB4F",d:"M1.408 1.408h125.184v125.185H1.408z"}),i.jsx("path",{fill:"#323330",d:"M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237"})]})}function t_(){return i.jsxs("svg",{id:"Layer_1",x:"0px",y:"0px",width:"306px",height:"344.35px",viewBox:"0 0 306 344.35",enableBackground:"new 0 0 306 344.35",children:[i.jsx("path",{fill:"#00599C",d:"M302.107,258.262c2.401-4.159,3.893-8.845,3.893-13.053V99.14c0-4.208-1.49-8.893-3.892-13.052L153,172.175L302.107,258.262z"}),i.jsx("path",{fill:"#004482",d:"M166.25,341.193l126.5-73.034c3.644-2.104,6.956-5.737,9.357-9.897L153,172.175L3.893,258.263c2.401,4.159,5.714,7.793,9.357,9.896l126.5,73.034C147.037,345.401,158.963,345.401,166.25,341.193z"}),i.jsx("path",{fill:"#659AD2",d:"M302.108,86.087c-2.402-4.16-5.715-7.793-9.358-9.897L166.25,3.156c-7.287-4.208-19.213-4.208-26.5,0L13.25,76.19C5.962,80.397,0,90.725,0,99.14v146.069c0,4.208,1.491,8.894,3.893,13.053L153,172.175L302.108,86.087z"}),i.jsx("g",{children:i.jsx("path",{fill:"#FFFFFF",d:"M153,274.175c-56.243,0-102-45.757-102-102s45.757-102,102-102c36.292,0,70.139,19.53,88.331,50.968l-44.143,25.544c-9.105-15.736-26.038-25.512-44.188-25.512c-28.122,0-51,22.878-51,51c0,28.121,22.878,51,51,51c18.152,0,35.085-9.776,44.191-25.515l44.143,25.543C223.142,254.644,189.294,274.175,153,274.175z"})}),i.jsx("g",{children:i.jsx("polygon",{fill:"#FFFFFF",points:"255,166.508 243.666,166.508 243.666,155.175 232.334,155.175 232.334,166.508 221,166.508221,177.841 232.334,177.841 232.334,189.175 243.666,189.175 243.666,177.841 255,177.841 	"})}),i.jsx("g",{children:i.jsx("polygon",{fill:"#FFFFFF",points:"297.5,166.508 286.166,166.508 286.166,155.175 274.834,155.175 274.834,166.508 263.5,166.508263.5,177.841 274.834,177.841 274.834,189.175 286.166,189.175 286.166,177.841 297.5,177.841 	"})})]})}function a_(){return i.jsxs("svg",{height:"800px",width:"800px",id:"Layer_1",viewBox:"0 0 511.998 511.998",children:[i.jsxs("g",{children:[i.jsx("path",{fill:"#DB380E",d:"M253.464,94.869c-23.658,16.639-50.471,35.498-64.838,66.699c-24.954,54.435,51.062,113.812,54.311,116.313c0.755,0.581,1.659,0.871,2.56,0.871c0.957,0,1.915-0.327,2.693-0.979c1.509-1.262,1.937-3.406,1.031-5.152c-0.275-0.53-27.561-53.53-26.547-91.552c0.359-13.243,18.892-28.266,38.512-44.171c17.97-14.568,38.34-31.079,50.258-50.394c26.164-42.516-2.916-84.322-3.213-84.74c-1.155-1.622-3.287-2.209-5.11-1.41c-1.821,0.804-2.83,2.773-2.414,4.72c0.059,0.277,5.714,27.923-10.022,56.406C284.203,73.25,269.959,83.268,253.464,94.869z"}),i.jsx("path",{fill:"#DB380E",d:"M353.137,113.617c1.669-1.257,2.159-3.55,1.15-5.38c-1.011-1.83-3.211-2.637-5.165-1.895c-4.019,1.528-98.416,37.915-98.416,81.88c0,30.307,12.946,46.317,22.399,58.009c3.708,4.586,6.909,8.546,7.964,11.927c2.97,9.743-4.066,27.353-7.025,33.317c-0.853,1.714-0.435,3.792,1.016,5.044c0.784,0.677,1.763,1.021,2.743,1.021c0.834,0,1.672-0.248,2.396-0.752c1.623-1.128,39.667-28.026,32.844-60.433c-2.542-12.318-8.595-21.318-13.936-29.26c-8.274-12.305-14.25-21.193-5.184-37.609C304.545,150.338,352.65,113.981,353.137,113.617z"})]}),i.jsxs("g",{children:[i.jsx("path",{fill:"#73A1FB",d:"M107.418,298.236c-1.618,4.845-0.854,9.651,2.207,13.903c10.233,14.207,46.48,22.029,102.068,22.029c0.003,0,0.005,0,0.007,0c7.532,0,15.484-0.148,23.629-0.44c88.875-3.181,121.839-30.869,123.199-32.046c1.482-1.283,1.878-3.419,0.957-5.147c-0.922-1.727-2.909-2.595-4.808-2.072c-31.301,8.546-89.748,11.58-130.288,11.58c-45.363,0-68.465-3.268-74.121-5.681c2.902-3.985,20.802-11.101,42.983-15.464c2.12-0.416,3.577-2.374,3.367-4.524s-2.016-3.79-4.177-3.79C179.439,276.584,114.234,277.628,107.418,298.236z"}),i.jsx("path",{fill:"#73A1FB",d:"M404.812,269.718c-18.331,0-35.714,9.188-36.446,9.577c-1.695,0.908-2.555,2.852-2.09,4.72c0.467,1.865,2.144,3.176,4.067,3.178c0.389,0,39.102,0.317,42.608,22.436c3.106,19.082-36.629,50-52.202,60.304c-1.682,1.113-2.335,3.263-1.554,5.123c0.665,1.583,2.206,2.573,3.868,2.573c0.29,0,0.584-0.03,0.876-0.092c3.696-0.791,90.406-19.899,81.238-70.384C439.584,276.213,420.138,269.718,404.812,269.718z"}),i.jsx("path",{fill:"#73A1FB",d:"M345.347,363.755c0.302-1.617-0.371-3.262-1.717-4.207l-20.791-14.563c-1.014-0.71-2.295-0.933-3.485-0.618c-0.217,0.055-21.959,5.771-53.525,9.276c-12.528,1.405-26.56,2.147-40.582,2.147c-31.558,0-52.192-3.708-55.197-6.428c-0.398-0.764-0.272-1.111-0.201-1.304c0.546-1.518,3.472-3.322,5.358-4.036c2.083-0.771,3.206-3.033,2.558-5.157c-0.646-2.127-2.837-3.378-4.999-2.859c-20.856,5.033-31.054,12.071-30.312,20.918c1.318,15.686,37.65,23.737,68.365,25.865c4.417,0.302,9.194,0.455,14.195,0.455c0.003,0,0.005,0,0.008,0c51.074,0,116.55-16.025,117.204-16.188C343.825,366.666,345.044,365.375,345.347,363.755z"}),i.jsx("path",{fill:"#73A1FB",d:"M188.602,397.419c1.575-1.024,2.273-2.971,1.714-4.764c-0.557-1.793-2.234-2.971-4.118-2.946c-2.795,0.074-27.349,1.182-29.068,16.815c-0.52,4.672,0.818,8.941,3.979,12.686c8.816,10.448,32.614,16.658,72.741,18.984c4.747,0.285,9.569,0.428,14.334,0.428c51.015,0,85.373-15.973,86.812-16.653c1.395-0.66,2.315-2.031,2.397-3.571s-0.687-3.001-2.003-3.806l-26.275-16.04c-0.912-0.556-2.003-0.74-3.043-0.527c-0.166,0.035-16.849,3.495-42.026,6.913c-4.764,0.648-10.73,0.977-17.73,0.977c-25.15,0-53.124-4.109-58.489-6.8C187.749,398.613,187.848,397.975,188.602,397.419z"}),i.jsx("path",{fill:"#73A1FB",d:"M224.408,486.85c116.854-0.099,179.571-20.88,191.653-33.957c4.277-4.626,4.739-9.006,4.376-11.867c-0.898-7.04-7.311-11.35-8.038-11.818c-1.754-1.128-4.108-0.833-5.476,0.745c-1.365,1.578-1.397,3.884-0.027,5.461c0.737,0.948,1.163,2.535-0.992,4.692c-4.83,4.511-53.545,18.204-134.656,22.318c-11.111,0.577-22.765,0.871-34.636,0.873c-72.623,0-125.772-9.948-132.749-15.744c2.689-3.864,21.489-10.037,41.482-13.529c2.253-0.393,3.775-2.516,3.426-4.776c-0.349-2.259-2.432-3.814-4.709-3.519c-0.564,0.077-2.478,0.191-4.694,0.327c-32.988,2.014-71.109,6.503-73.098,23.5c-0.604,5.179,0.935,9.881,4.576,13.973c8.909,10.01,34.516,23.319,153.558,23.319C224.406,486.85,224.406,486.85,224.408,486.85z"}),i.jsx("path",{fill:"#73A1FB",d:"M439.013,456.578c-1.652-0.764-3.604-0.378-4.836,0.952c-0.171,0.185-17.74,18.556-70.564,29.344c-20.223,4.052-58.183,6.107-112.826,6.107c-54.745,0-106.838-2.154-107.357-2.176c-2.176-0.106-4.037,1.476-4.333,3.618c-0.297,2.14,1.083,4.158,3.184,4.658c0.542,0.128,55.135,12.918,129.779,12.918c35.801,0,70.639-2.907,103.548-8.645c61.361-10.757,65.657-41.183,65.81-42.473C441.632,459.078,440.662,457.342,439.013,456.578z"})]})]})}const i_={python:n_,javascript:e_,java:a_,cpp:t_},r_={python:{short:"Py",full:"Python"},javascript:{short:"JS",full:"JavaScript"},java:{short:"Java",full:"Java"},cpp:{short:"C++",full:"C++"}};function o({title:c,children:b}){const{selectedLanguage:g,setSelectedLanguage:d}=np(),j=Y.Children.toArray(b),z=j.findIndex(C=>C.props.language===g),L=z===-1?0:z,U=j[L]?.props.code??"",R=j[L]?.props.language,S=C=>{d(j[C].props.language)},q=()=>navigator.clipboard.writeText(U),A=()=>j.map((C,J)=>{const H=i_[C.props.language],{short:Q,full:hn}=r_[C.props.language];return i.jsxs("button",{type:"button",role:"tab","aria-label":`${hn} code`,"aria-selected":J===L,className:ds.tabButton,onClick:()=>S(J),children:[i.jsx(H,{}),i.jsx("span",{children:Q})]},J)});return i.jsxs("div",{className:ds.container,children:[i.jsx("h3",{children:c}),i.jsxs("div",{className:ds.buttonContainer,children:[i.jsx("div",{role:"tablist",className:ds.tabButtonContainer,children:A()}),i.jsx($x,{onClick:q})]}),i.jsx("div",{role:"tabpanel",className:"tabs-content",children:i.jsx(Qx,{code:U,language:R})})]})}o.Tab=c=>i.jsx(i.Fragment,{children:c});const l_=100;function s_(c){const b=Y.useRef(0),g=Y.useRef(null),[d,j]=Y.useState(0),[z,L]=Y.useState(!1),U=()=>{const Q=g.current===null?0:performance.now()-g.current;return b.current+Q},R=Q=>Math.floor(Q/1e3)*1e3;Y.useEffect(()=>{if(!z)return;const Q=setInterval(()=>{const hn=R(U());j(yn=>yn===hn?yn:hn)},l_);return()=>clearInterval(Q)},[z]);const S=Y.useCallback(()=>{b.current=0,g.current=performance.now(),j(0),L(!0)},[]),q=Y.useCallback(()=>{g.current!==null&&(b.current=U(),g.current=null),j(b.current),L(!1)},[]),A=Y.useCallback(()=>{g.current===null&&(g.current=performance.now()),j(R(U())),L(!0)},[]),C=Y.useCallback(()=>{b.current=0,g.current=null,j(0),L(!1)},[]),J=c-d,H=d>=c;return{elapsedMs:d,remainingMs:J,overtimeMs:H?d-c:0,isOvertime:H,isRunning:z,start:S,stop:q,resume:A,reset:C}}const Fh=30,c_=10;function o_(c){return c.isContentEditable||["INPUT","TEXTAREA","SELECT","OPTION"].includes(c.tagName)?!0:c.closest('input, textarea, select, [role="listbox"], [role="combobox"]')!==null}const u_=c=>String(c).padStart(2,"0");function Bi(c){const b=Math.max(0,c);return`${Math.floor(b/60)}:${u_(b%60)}`}function d_(){const c=s_(Fh*1e3),[b,g]=Y.useState(!1),[d,j]=Y.useState([]),[z,L]=Y.useState(!1),U=Y.useRef(null),R=d.length>0?d[d.length-1].option.next:Hr.rootId,S=b?Hr.leaves[R]:void 0,q=b?Hr.nodes[R]:void 0;Y.useEffect(()=>{U.current?.focus()},[b,R]);const A=Y.useCallback(()=>{g(!0),c.start()},[c]),C=Y.useCallback(un=>{q&&(j(W=>[...W,{question:q.question,option:un}]),Hr.leaves[un.next]&&c.stop())},[q,c]),J=Y.useCallback(un=>{un<0||un>=d.length||(j(d.slice(0,un)),L(!1),S&&c.resume())},[d,S,c]),H=Y.useCallback(()=>J(d.length-1),[J,d.length]),Q=Y.useCallback(()=>L(un=>!un),[]),hn=Y.useCallback(()=>{c.reset(),g(!1),j([]),L(!1)},[c]);Y.useEffect(()=>{const un=W=>{if(W.metaKey||W.ctrlKey||W.altKey)return;const cn=W.target;if(!(cn&&o_(cn))){if(W.key==="Escape")return hn();if(W.key==="Backspace"&&b&&d.length>0)return W.preventDefault(),H();if(W.key==="Enter"&&!b&&cn?.tagName!=="BUTTON")return A();if((W.key==="t"||W.key==="T")&&S)return Q();if(/^[1-9]$/.test(W.key)&&q){const Dn=q.options[Number(W.key)-1];Dn&&C(Dn)}}};return window.addEventListener("keydown",un),()=>window.removeEventListener("keydown",un)},[b,d.length,q,S,C,H,hn,A,Q]);const yn=Math.max(0,Math.ceil(c.remainingMs/1e3));return{budget:Fh,started:b,steps:d,node:q,leaf:S,isOvertime:c.isOvertime,isWarn:!c.isOvertime&&yn<=c_,elapsedSeconds:Math.floor(c.elapsedMs/1e3),remainingSeconds:yn,overSeconds:Math.floor(c.overtimeMs/1e3),showTemplate:z,toggleTemplate:Q,stageRef:U,start:A,pick:C,backtrack:H,backtrackTo:J,reset:hn}}function Gr({children:c}){return i.jsx("kbd",{className:Z.kbd,"aria-hidden":"true",children:c})}function ps({text:c,sign:b,tone:g,caption:d,label:j}){return i.jsxs("div",{className:Te(Z.timer,Z[g]),role:"timer","aria-live":"off","aria-label":j,children:[i.jsxs("span",{className:Z.cells,"aria-hidden":"true",children:[i.jsx("span",{className:Te(Z.cell,Z.signCell),children:b?"+":""}),c.split("").map((z,L)=>z===":"?i.jsx("span",{className:Z.colon,children:":"},L):i.jsx("span",{className:Z.cell,children:z},L))]}),i.jsx("span",{className:Z.timerCaption,"aria-hidden":"true",children:d})]})}function f_({run:c}){if(!c.started){const g=Bi(c.budget);return i.jsx(ps,{text:g,sign:!1,tone:"idle",caption:"budget",label:`Budget ${g}`})}if(c.leaf){const g=Bi(c.elapsedSeconds);return i.jsx(ps,{text:g,sign:!1,tone:c.isOvertime?"over":"ok",caption:"taken",label:`Time taken ${g}`})}if(c.isOvertime){const g=Bi(c.overSeconds);return i.jsx(ps,{text:g,sign:!0,tone:"over",caption:"over budget",label:`${g} over budget`})}const b=Bi(c.remainingSeconds);return i.jsx(ps,{text:b,sign:!1,tone:c.isWarn?"warn":"ok",caption:"left",label:`${b} left`})}function h_({run:c}){const{started:b,steps:g,leaf:d,node:j}=c,z=b&&!d&&!j,L=!d&&!z;return i.jsx("nav",{className:Z.line,"aria-label":"Your path so far",children:i.jsxs("ol",{className:Z.stops,children:[g.map((U,R)=>i.jsx("li",{className:Te(Z.stop,Z.answered),children:i.jsxs("button",{type:"button",className:Z.stopButton,title:`${U.question} ${U.option.cue}`,"aria-label":`Back to question ${R+1}: ${U.question} You picked: ${U.option.cue}`,onClick:()=>c.backtrackTo(R),children:[i.jsx("span",{className:Z.dot,"aria-hidden":"true"}),i.jsx("span",{className:Z.cue,children:U.option.cue})]})},R)),L&&i.jsx("li",{className:Te(Z.stop,Z.current,Z.dashedNext),"aria-current":"step",children:i.jsxs("span",{className:Z.stopInner,children:[i.jsx("span",{className:Z.dot,"aria-hidden":"true"}),i.jsx("span",{className:Z.srOnly,children:b?`Question ${g.length+1}, current`:"Ready to start"})]})}),d&&i.jsx("li",{className:Te(Z.stop,Z.reached),"aria-current":"step",children:i.jsxs("span",{className:Z.stopInner,children:[i.jsx("span",{className:Z.dot,"aria-hidden":"true"}),i.jsxs("span",{className:Z.srOnly,children:["Result: ",d.name]})]})}),L&&i.jsx("li",{className:Te(Z.stop,Z.end),"aria-hidden":"true",children:i.jsx("span",{className:Z.stopInner,children:i.jsx("span",{className:Z.dot})})}),z&&i.jsx("li",{className:Te(Z.stop,Z.fault),"aria-current":"step",children:i.jsxs("span",{className:Z.stopInner,children:[i.jsx("span",{className:Z.dot,"aria-hidden":"true"}),i.jsx("span",{className:Z.srOnly,children:"This path leads nowhere"})]})})]})})}function gs({label:c,value:b,run:g}){return i.jsxs("header",{className:Z.strip,children:[i.jsxs("p",{className:Z.stripTitle,children:[c,i.jsx("span",{className:Z.stripValue,children:b})]}),i.jsx(f_,{run:g})]})}function Go({run:c}){return i.jsxs("footer",{className:Z.footer,children:[c.started&&(c.node||c.leaf)&&i.jsxs("button",{type:"button",className:Z.plain,onClick:c.backtrack,disabled:c.steps.length===0,"aria-keyshortcuts":"Backspace",children:["Backtrack ",i.jsx(Gr,{children:"Bksp"})]}),i.jsxs("button",{type:"button",className:Z.plain,onClick:c.reset,"aria-keyshortcuts":"Escape",children:["Reset ",i.jsx(Gr,{children:"Esc"})]})]})}function Wh({leaf:c}){return i.jsx("a",{className:Z.docsLink,href:c.docsUrl,target:"_blank",rel:"noreferrer",children:"Read the docs for this pattern"})}function p_({leaf:c}){const b=Ox(c.id);return b.length===0?i.jsxs("div",{className:Te(Z.templates,Z.note),children:[i.jsxs("p",{children:[i.jsx("strong",{children:"No template yet"})," for this pattern variant."]}),i.jsx("p",{children:c.summary}),i.jsx(Wh,{leaf:c})]}):i.jsxs("div",{className:Z.templates,children:[b.map((g,d)=>i.jsx(o,{title:g.title,children:Ko.map(j=>i.jsx(o.Tab,{language:j,code:g.code[j]},j))},`${c.id}-${d}`)),i.jsx(Wh,{leaf:c})]})}function g_(){const c=d_(),b=()=>i.jsxs(i.Fragment,{children:[i.jsx(gs,{run:c,label:"Procedure",value:"Ready"}),i.jsxs("div",{className:Z.body,children:[i.jsxs("h2",{ref:c.stageRef,tabIndex:-1,className:Z.question,children:["Name the pattern in ",c.budget," seconds"]}),i.jsx("p",{className:Z.lead,children:"Open the problem, then pick the cue that sounds most like it. Overtime is shown, not enforced."}),i.jsx("div",{className:Z.actions,children:i.jsxs("button",{type:"button",className:Z.primary,onClick:c.start,"aria-keyshortcuts":"Enter",children:["Start ",i.jsx(Gr,{children:"Enter"})]})})]},"idle")]}),g=L=>i.jsxs(i.Fragment,{children:[i.jsx(gs,{run:c,label:"Procedure",value:`Q${c.steps.length+1}`}),i.jsxs("div",{className:Z.body,children:[i.jsx("h2",{ref:c.stageRef,tabIndex:-1,className:Z.question,children:L.question}),i.jsx("ol",{className:Z.options,children:L.options.map((U,R)=>i.jsx("li",{children:i.jsxs("button",{type:"button",className:Z.option,onClick:()=>c.pick(U),"aria-keyshortcuts":R<9?String(R+1):void 0,children:[R<9&&i.jsx(Gr,{children:R+1}),i.jsx("span",{className:Z.optionCue,children:U.cue})]})},U.cue))})]},L.id),i.jsx(Go,{run:c})]}),d=L=>{const U=Bi(c.elapsedSeconds);return i.jsxs(i.Fragment,{children:[i.jsxs("p",{className:Z.srOnly,role:"status","aria-live":"polite",children:["Pattern found: ",L.name,", ",L.pattern,". Time taken ",U,"."]}),i.jsx(gs,{run:c,label:"Memory item",value:"Result"}),i.jsxs("div",{className:Z.body,children:[i.jsx("h2",{ref:c.stageRef,tabIndex:-1,className:Z.resultName,children:L.name}),i.jsxs("dl",{className:Z.fields,children:[i.jsxs("div",{className:Z.field,children:[i.jsx("dt",{children:"Pattern"}),i.jsx("dd",{children:L.pattern})]}),i.jsxs("div",{className:Z.field,children:[i.jsx("dt",{children:"Time taken"}),i.jsxs("dd",{children:[i.jsx("span",{className:Z.figure,children:U}),c.isOvertime?i.jsxs("span",{className:Z.overNote,children:["+",Bi(c.overSeconds)," over the ",c.budget,"s budget"]}):i.jsxs("span",{className:Z.okNote,children:["within the ",c.budget,"s budget"]})]})]})]}),i.jsx("p",{className:Z.summary,children:L.summary}),i.jsx("div",{className:Z.actions,children:i.jsxs("button",{type:"button",className:Z.primary,"aria-expanded":c.showTemplate,"aria-keyshortcuts":"T",onClick:c.toggleTemplate,children:[c.showTemplate?"Hide template":"View template"," ",i.jsx(Gr,{children:"T"})]})}),c.showTemplate&&i.jsx(p_,{leaf:L})]},L.id),i.jsx(Go,{run:c})]})},j=()=>i.jsxs(i.Fragment,{children:[i.jsx(gs,{run:c,label:"Procedure",value:"Fault"}),i.jsxs("div",{className:Z.body,children:[i.jsx("h2",{ref:c.stageRef,tabIndex:-1,className:Z.question,children:"This path leads nowhere"}),i.jsx("p",{className:Z.lead,children:"The cue you picked has no next check. Reset and run the procedure again."})]},"broken"),i.jsx(Go,{run:c})]});let z;return c.started?c.leaf?z=d(c.leaf):c.node?z=g(c.node):z=j():z=b(),i.jsxs("div",{className:Z.finder,children:[i.jsx(h_,{run:c}),i.jsx("section",{className:Z.card,"aria-label":"Procedure",children:z})]})}const m_="_container_1htmy_1",b_="_sectionHeader_1htmy_7",Hn={container:m_,sectionHeader:b_},v_="_container_13ll4_1",y_="_label_13ll4_13",x_="_tableWrapper_13ll4_21",__="_dataRow_13ll4_30",S_="_red_13ll4_51",T_="_oliveGreen_13ll4_55",j_="_green_13ll4_59",N_="_orange_13ll4_63",w_="_yellow_13ll4_67",E_="_gray_13ll4_71",p={container:v_,label:y_,tableWrapper:x_,dataRow:__,red:S_,oliveGreen:T_,green:j_,orange:N_,yellow:w_,gray:E_};function A_(){const c={red:"var(--color-red-alpha)",orange:"var(--color-orange-alpha)",yellow:"var(--color-yellow-alpha)",oliveGreen:"var(--color-olive-green-alpha)",green:"var(--color-green-alpha)"};return i.jsx("section",{id:"bigo-chart",children:i.jsxs("div",{className:p.container,children:[i.jsx("h3",{children:"Big-O Complexity Chart"}),i.jsxs("svg",{id:"chart",viewBox:"0 0 800 500",style:{color:"var(--pd-text)"},children:[i.jsx("path",{d:"M50 450 L 50 0 L 800 0 L 800 450 Z",fill:c.red}),i.jsx("path",{d:"M50 450 L 800 0 L 800 450 Z",fill:c.orange}),i.jsx("path",{d:"M50 450 L 800 450 L 800 330 Z",fill:c.yellow}),i.jsx("path",{d:"M50 450 L 800 450 L 800 410 Z",fill:c.oliveGreen}),i.jsx("path",{d:"M50 450 L 800 450 L 800 440 Z",fill:c.green}),i.jsx("path",{d:"M50 0 L 50 450 L 800 450",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),i.jsx("path",{d:"M50 448 L 800 448",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),i.jsx("text",{x:"700",y:"438",fill:"currentColor",children:"O(log n), O(1)"}),i.jsx("path",{d:"M50 450 L 800 400",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),i.jsx("text",{x:"760",y:"390",fill:"currentColor",children:"O(n)"}),i.jsx("path",{d:"M50 450 Q 400 350, 800 150",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),i.jsx("text",{x:"630",y:"190",fill:"currentColor",children:"O(n log n)"}),i.jsx("path",{d:"M50 450 Q 180 380, 250 0",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),i.jsx("text",{x:"260",y:"30",fill:"currentColor",children:"O(n^2)"}),i.jsx("path",{d:"M50 450 C 100 430, 120 350, 120 0",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),i.jsx("text",{x:"125",y:"20",fill:"currentColor",children:"O(2^n)"}),i.jsx("path",{d:"M50 450 C 80 450, 80 350, 80 0",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),i.jsx("text",{x:"80",y:"20",fill:"currentColor",children:"O(n!)"}),i.jsx("text",{className:p.label,x:"0",y:"0",transform:"translate(30 230) rotate(-90)",fill:"currentColor",children:"Operations"}),i.jsx("text",{className:p.label,x:"0",y:"0",transform:"translate(420 470)",fill:"currentColor",children:"Elements"})]})]})})}function O_(){return i.jsx("section",{id:"bigo-data-structure-operations-table",children:i.jsxs("div",{className:p.container,children:[i.jsx("h3",{children:"Data Structure Operations"}),i.jsx("div",{className:p.tableWrapper,children:i.jsx("table",{className:p.table,children:i.jsxs("tbody",{children:[i.jsxs("tr",{children:[i.jsx("th",{children:"Data Structure"}),i.jsx("th",{colSpan:8,children:"Time Complexity"}),i.jsx("th",{children:"Space Complexity"})]}),i.jsxs("tr",{children:[i.jsx("th",{}),i.jsx("th",{colSpan:4,children:"Average"}),i.jsx("th",{colSpan:4,children:"Worst"}),i.jsx("th",{children:"Worst"})]}),i.jsxs("tr",{children:[i.jsx("th",{}),i.jsx("th",{children:"Access"}),i.jsx("th",{children:"Search"}),i.jsx("th",{children:"Insertion"}),i.jsx("th",{children:"Deletion"}),i.jsx("th",{children:"Access"}),i.jsx("th",{children:"Search"}),i.jsx("th",{children:"Insertion"}),i.jsx("th",{children:"Deletion"}),i.jsx("th",{})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Array_data_structure",target:"_blank",children:"Array"})}),i.jsx("td",{className:p.green,children:"Θ(1)"}),i.jsx("td",{className:p.yellow,children:"Θ(n)"}),i.jsx("td",{className:p.yellow,children:"Θ(n)"}),i.jsx("td",{className:p.yellow,children:"Θ(n)"}),i.jsx("td",{className:p.green,children:"O(1)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Stack_(abstract_data_type)",target:"_blank",children:"Stack"})}),i.jsx("td",{className:p.yellow,children:"Θ(n)"}),i.jsx("td",{className:p.yellow,children:"Θ(n)"}),i.jsx("td",{className:p.green,children:"Θ(1)"}),i.jsx("td",{className:p.green,children:"Θ(1)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.green,children:"O(1)"}),i.jsx("td",{className:p.green,children:"O(1)"}),i.jsx("td",{className:p.yellow,children:"O(n)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Queue_(abstract_data_type)",target:"_blank",children:"Queue"})}),i.jsx("td",{className:p.yellow,children:"Θ(n)"}),i.jsx("td",{className:p.yellow,children:"Θ(n)"}),i.jsx("td",{className:p.green,children:"Θ(1)"}),i.jsx("td",{className:p.green,children:"Θ(1)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.green,children:"O(1)"}),i.jsx("td",{className:p.green,children:"O(1)"}),i.jsx("td",{className:p.yellow,children:"O(n)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Singly_linked_list#Singly_linked_lists",target:"_blank",children:"Singly-Linked List"})}),i.jsx("td",{className:p.yellow,children:"Θ(n)"}),i.jsx("td",{className:p.yellow,children:"Θ(n)"}),i.jsx("td",{className:p.green,children:"Θ(1)"}),i.jsx("td",{className:p.green,children:"Θ(1)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.green,children:"O(1)"}),i.jsx("td",{className:p.green,children:"O(1)"}),i.jsx("td",{className:p.yellow,children:"O(n)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Doubly_linked_list",target:"_blank",children:"Doubly-Linked List"})}),i.jsx("td",{className:p.yellow,children:"Θ(n)"}),i.jsx("td",{className:p.yellow,children:"Θ(n)"}),i.jsx("td",{className:p.green,children:"Θ(1)"}),i.jsx("td",{className:p.green,children:"Θ(1)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.green,children:"O(1)"}),i.jsx("td",{className:p.green,children:"O(1)"}),i.jsx("td",{className:p.yellow,children:"O(n)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Skip_list",target:"_blank",children:"Skip List"})}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.orange,children:"O(n log(n))"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Hash_table",target:"_blank",children:"Hash Table"})}),i.jsx("td",{className:p.gray,children:"N/A"}),i.jsx("td",{className:p.green,children:"Θ(1)"}),i.jsx("td",{className:p.green,children:"Θ(1)"}),i.jsx("td",{className:p.green,children:"Θ(1)"}),i.jsx("td",{className:p.gray,children:"N/A"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Binary_search_tree",target:"_blank",children:"Binary Search Tree"})}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"https://en.wikipedia.org/wiki/Cartesian_tree",target:"_blank",children:"Cartesian Tree"})}),i.jsx("td",{className:p.gray,children:"N/A"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.gray,children:"N/A"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/B_tree",target:"_blank",children:"B-Tree"})}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:p.yellow,children:"O(n)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Red-black_tree",target:"_blank",children:"Red-Black Tree"})}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:p.yellow,children:"O(n)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"https://en.wikipedia.org/wiki/Splay_tree",target:"_blank",children:"Splay Tree"})}),i.jsx("td",{className:p.gray,children:"N/A"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.gray,children:"N/A"}),i.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:p.yellow,children:"O(n)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/AVL_tree",target:"_blank",children:"AVL Tree"})}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:p.yellow,children:"O(n)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/K-d_tree",target:"_blank",children:"KD Tree"})}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"})]})]})})})]})})}function k_(){return i.jsx("section",{id:"bigo-sorting-algorithms-table",children:i.jsxs("div",{className:p.container,children:[i.jsx("h3",{children:"Array Sorting Algorithms"}),i.jsx("div",{className:p.tableWrapper,children:i.jsx("table",{children:i.jsxs("tbody",{children:[i.jsxs("tr",{children:[i.jsx("th",{children:"Algorithm"}),i.jsx("th",{colSpan:3,children:"Time Complexity"}),i.jsx("th",{children:"Space Complexity"})]}),i.jsxs("tr",{children:[i.jsx("th",{}),i.jsx("th",{children:"Best"}),i.jsx("th",{children:"Average"}),i.jsx("th",{children:"Worst"}),i.jsx("th",{children:"Worst"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Quicksort",target:"_blank",children:"Quicksort"})}),i.jsx("td",{className:p.orange,children:"Ω(n log(n))"}),i.jsx("td",{className:p.orange,children:"Θ(n log(n))"}),i.jsx("td",{className:p.red,children:"O(n^2)"}),i.jsx("td",{className:p.oliveGreen,children:"O(log(n))"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Merge_sort",target:"_blank",children:"Mergesort"})}),i.jsx("td",{className:p.orange,children:"Ω(n log(n))"}),i.jsx("td",{className:p.orange,children:"Θ(n log(n))"}),i.jsx("td",{className:p.orange,children:"O(n log(n))"}),i.jsx("td",{className:p.yellow,children:"O(n)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Timsort",target:"_blank",children:"Timsort"})}),i.jsx("td",{className:p.yellow,children:"Ω(n)"}),i.jsx("td",{className:p.orange,children:"Θ(n log(n))"}),i.jsx("td",{className:p.orange,children:"O(n log(n))"}),i.jsx("td",{className:p.yellow,children:"O(n)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Heapsort",target:"_blank",children:"Heapsort"})}),i.jsx("td",{className:p.orange,children:"Ω(n log(n))"}),i.jsx("td",{className:p.orange,children:"Θ(n log(n))"}),i.jsx("td",{className:p.orange,children:"O(n log(n))"}),i.jsx("td",{className:p.green,children:"O(1)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Bubble_sort",target:"_blank",children:"Bubble Sort"})}),i.jsx("td",{className:p.yellow,children:"Ω(n)"}),i.jsx("td",{className:p.red,children:"Θ(n^2)"}),i.jsx("td",{className:p.red,children:"O(n^2)"}),i.jsx("td",{className:p.green,children:"O(1)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Insertion_sort",target:"_blank",children:"Insertion Sort"})}),i.jsx("td",{className:p.yellow,children:"Ω(n)"}),i.jsx("td",{className:p.red,children:"Θ(n^2)"}),i.jsx("td",{className:p.red,children:"O(n^2)"}),i.jsx("td",{className:p.green,children:"O(1)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Selection_sort",target:"_blank",children:"Selection Sort"})}),i.jsx("td",{className:p.red,children:"Ω(n^2)"}),i.jsx("td",{className:p.red,children:"Θ(n^2)"}),i.jsx("td",{className:p.red,children:"O(n^2)"}),i.jsx("td",{className:p.green,children:"O(1)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"https://en.wikipedia.org/wiki/Tree_sort",target:"_blank",children:"Tree Sort"})}),i.jsx("td",{className:p.orange,children:"Ω(n log(n))"}),i.jsx("td",{className:p.orange,children:"Θ(n log(n))"}),i.jsx("td",{className:p.red,children:"O(n^2)"}),i.jsx("td",{className:p.yellow,children:"O(n)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Shellsort",target:"_blank",children:"Shell Sort"})}),i.jsx("td",{className:p.orange,children:"Ω(n log(n))"}),i.jsx("td",{className:p.red,children:"Θ(n(log(n))^2)"}),i.jsx("td",{className:p.red,children:"O(n(log(n))^2)"}),i.jsx("td",{className:p.green,children:"O(1)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Bucket_sort",target:"_blank",children:"Bucket Sort"})}),i.jsx("td",{className:p.green,children:"Ω(n+k)"}),i.jsx("td",{className:p.green,children:"Θ(n+k)"}),i.jsx("td",{className:p.red,children:"O(n^2)"}),i.jsx("td",{className:p.yellow,children:"O(n)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Radix_sort",target:"_blank",children:"Radix Sort"})}),i.jsx("td",{className:p.green,children:"Ω(nk)"}),i.jsx("td",{className:p.green,children:"Θ(nk)"}),i.jsx("td",{className:p.green,children:"O(nk)"}),i.jsx("td",{className:p.yellow,children:"O(n+k)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"https://en.wikipedia.org/wiki/Counting_sort",children:"Counting Sort"})}),i.jsx("td",{className:p.green,children:"Ω(n+k)"}),i.jsx("td",{className:p.green,children:"Θ(n+k)"}),i.jsx("td",{className:p.green,children:"O(n+k)"}),i.jsx("td",{className:p.yellow,children:"O(k)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"https://en.wikipedia.org/wiki/Cubesort",target:"_blank",children:"Cubesort"})}),i.jsx("td",{className:p.yellow,children:"Ω(n)"}),i.jsx("td",{className:p.orange,children:"Θ(n log(n))"}),i.jsx("td",{className:p.orange,children:"O(n log(n))"}),i.jsx("td",{className:p.yellow,children:"O(n)"})]})]})})})]})})}function M_(){return i.jsxs("div",{className:Hn.container,children:[i.jsx("h2",{className:Hn.sectionHeader,children:"Big O"}),i.jsx(A_,{}),i.jsx(O_,{}),i.jsx(k_,{})]})}function R_(){return i.jsxs("div",{className:Hn.container,children:[i.jsx("h2",{className:Hn.sectionHeader,children:"Array"}),i.jsx("section",{id:"array-two-pointers-one-input",children:i.jsxs(o,{title:"two pointers: one input, opposite ends",children:[i.jsx(o.Tab,{code:Sb,language:"python"}),i.jsx(o.Tab,{code:Tb,language:"javascript"}),i.jsx(o.Tab,{code:jb,language:"java"}),i.jsx(o.Tab,{code:Nb,language:"cpp"})]})}),i.jsx("section",{id:"array-two-pointers-two-inputs",children:i.jsxs(o,{title:"two pointers: two inputs, exhaust both",children:[i.jsx(o.Tab,{code:wb,language:"python"}),i.jsx(o.Tab,{code:Eb,language:"javascript"}),i.jsx(o.Tab,{code:Ab,language:"java"}),i.jsx(o.Tab,{code:Ob,language:"cpp"})]})}),i.jsx("section",{id:"array-sliding-window",children:i.jsxs(o,{title:"sliding window",children:[i.jsx(o.Tab,{code:Zm,language:"python"}),i.jsx(o.Tab,{code:Im,language:"javascript"}),i.jsx(o.Tab,{code:Fm,language:"java"}),i.jsx(o.Tab,{code:Wm,language:"cpp"})]})}),i.jsx("section",{id:"array-prefix-sum",children:i.jsxs(o,{title:"prefix sum",children:[i.jsx(o.Tab,{code:Km,language:"python"}),i.jsx(o.Tab,{code:Xm,language:"javascript"}),i.jsx(o.Tab,{code:Qm,language:"java"}),i.jsx(o.Tab,{code:Jm,language:"cpp"})]})}),i.jsx("section",{id:"array-string-building",children:i.jsxs(o,{title:"efficient string building",children:[i.jsx(o.Tab,{code:lb,language:"python"}),i.jsx(o.Tab,{code:sb,language:"javascript"}),i.jsx(o.Tab,{code:cb,language:"java"}),i.jsx(o.Tab,{code:ob,language:"cpp"})]})})]})}function C_(){return i.jsxs("div",{className:Hn.container,children:[i.jsx("h2",{className:Hn.sectionHeader,children:"Hash Map"}),i.jsx("section",{id:"hashmap-find-number-of-subarrays",children:i.jsxs(o,{title:"find number of subarrays that fit an exact criteria",children:[i.jsx(o.Tab,{code:jm,language:"python"}),i.jsx(o.Tab,{code:Nm,language:"javascript"}),i.jsx(o.Tab,{code:wm,language:"java"}),i.jsx(o.Tab,{code:Em,language:"cpp"})]})}),i.jsx("section",{id:"hashmap-sliding-window",children:i.jsxs(o,{title:"sliding window",children:[i.jsx(o.Tab,{code:Am,language:"python"}),i.jsx(o.Tab,{code:Om,language:"javascript"}),i.jsx(o.Tab,{code:km,language:"java"}),i.jsx(o.Tab,{code:Mm,language:"cpp"})]})})]})}function D_(){return i.jsxs("div",{className:Hn.container,children:[i.jsx("h2",{className:Hn.sectionHeader,children:"Linked List"}),i.jsx("section",{id:"linkedlist-fast-and-slow-pointer",children:i.jsxs(o,{title:"fast and slow pointer",children:[i.jsx(o.Tab,{code:zm,language:"python"}),i.jsx(o.Tab,{code:Bm,language:"javascript"}),i.jsx(o.Tab,{code:Um,language:"java"}),i.jsx(o.Tab,{code:qm,language:"cpp"})]})}),i.jsx("section",{id:"linkedlist-reverse",children:i.jsxs(o,{title:"reverse linked list",children:[i.jsx(o.Tab,{code:Hm,language:"python"}),i.jsx(o.Tab,{code:Gm,language:"javascript"}),i.jsx(o.Tab,{code:Ym,language:"java"}),i.jsx(o.Tab,{code:Vm,language:"cpp"})]})})]})}function L_(){return i.jsxs("div",{className:Hn.container,children:[i.jsx("h2",{className:Hn.sectionHeader,children:"Stack"}),i.jsx("section",{id:"stack-monotonic-increasing",children:i.jsxs(o,{title:"monotonic increasing stack",children:[i.jsx(o.Tab,{code:tb,language:"python"}),i.jsx(o.Tab,{code:ab,language:"javascript"}),i.jsx(o.Tab,{code:ib,language:"java"}),i.jsx(o.Tab,{code:rb,language:"cpp"})]})}),i.jsx("section",{id:"stack-monotonic-decreasing",children:i.jsxs(o,{title:"monotonic decreasing stack",children:[i.jsx(o.Tab,{code:Pm,language:"python"}),i.jsx(o.Tab,{code:$m,language:"javascript"}),i.jsx(o.Tab,{code:nb,language:"java"}),i.jsx(o.Tab,{code:eb,language:"cpp"})]})})]})}function z_(){return i.jsxs("div",{className:Hn.container,children:[i.jsx("h2",{className:Hn.sectionHeader,children:"Binary Tree"}),i.jsx("section",{id:"tree-dfs-recursive",children:i.jsxs(o,{title:"DFS (recursive)",children:[i.jsx(o.Tab,{code:vb,language:"python"}),i.jsx(o.Tab,{code:yb,language:"javascript"}),i.jsx(o.Tab,{code:xb,language:"java"}),i.jsx(o.Tab,{code:_b,language:"cpp"})]})}),i.jsx("section",{id:"tree-dfs-iterative",children:i.jsxs(o,{title:"DFS (iterative)",children:[i.jsx(o.Tab,{code:pb,language:"python"}),i.jsx(o.Tab,{code:gb,language:"javascript"}),i.jsx(o.Tab,{code:mb,language:"java"}),i.jsx(o.Tab,{code:bb,language:"cpp"})]})}),i.jsx("section",{id:"tree-bfs",children:i.jsxs(o,{title:"BFS",children:[i.jsx(o.Tab,{code:ub,language:"python"}),i.jsx(o.Tab,{code:db,language:"javascript"}),i.jsx(o.Tab,{code:fb,language:"java"}),i.jsx(o.Tab,{code:hb,language:"cpp"})]})})]})}function B_(){return i.jsxs("div",{className:Hn.container,children:[i.jsx("h2",{className:Hn.sectionHeader,children:"Graph"}),i.jsx("section",{id:"graph-dfs-recursive",children:i.jsxs(o,{title:"DFS (recursive)",children:[i.jsx(o.Tab,{code:im,language:"python"}),i.jsx(o.Tab,{code:rm,language:"javascript"}),i.jsx(o.Tab,{code:lm,language:"java"}),i.jsx(o.Tab,{code:sm,language:"cpp"})]})}),i.jsx("section",{id:"graph-dfs-iterative",children:i.jsxs(o,{title:"DFS (iterative)",children:[i.jsx(o.Tab,{code:nm,language:"python"}),i.jsx(o.Tab,{code:em,language:"javascript"}),i.jsx(o.Tab,{code:tm,language:"java"}),i.jsx(o.Tab,{code:am,language:"cpp"})]})}),i.jsx("section",{id:"graph-bfs",children:i.jsxs(o,{title:"BFS",children:[i.jsx(o.Tab,{code:Fg,language:"python"}),i.jsx(o.Tab,{code:Wg,language:"javascript"}),i.jsx(o.Tab,{code:Pg,language:"java"}),i.jsx(o.Tab,{code:$g,language:"cpp"})]})}),i.jsx("section",{id:"graph-dijkstra",children:i.jsxs(o,{title:"Dijkstra (shortest path)",children:[i.jsx(o.Tab,{code:cm,language:"python"}),i.jsx(o.Tab,{code:om,language:"javascript"}),i.jsx(o.Tab,{code:um,language:"java"}),i.jsx(o.Tab,{code:dm,language:"cpp"})]})}),i.jsx("section",{id:"graph-bellman-ford",children:i.jsxs(o,{title:"Bellman-Ford (shortest path)",children:[i.jsx(o.Tab,{code:Qg,language:"python"}),i.jsx(o.Tab,{code:Jg,language:"javascript"}),i.jsx(o.Tab,{code:Zg,language:"java"}),i.jsx(o.Tab,{code:Ig,language:"cpp"})]})}),i.jsx("section",{id:"graph-kahn",children:i.jsxs(o,{title:"Kahn (topological sort)",children:[i.jsx(o.Tab,{code:fm,language:"python"}),i.jsx(o.Tab,{code:hm,language:"javascript"}),i.jsx(o.Tab,{code:pm,language:"java"}),i.jsx(o.Tab,{code:gm,language:"cpp"})]})}),i.jsx("section",{id:"graph-kruskal",children:i.jsxs(o,{title:"Kruskal (mst)",children:[i.jsx(o.Tab,{code:mm,language:"python"}),i.jsx(o.Tab,{code:bm,language:"javascript"}),i.jsx(o.Tab,{code:vm,language:"java"}),i.jsx(o.Tab,{code:ym,language:"cpp"})]})}),i.jsx("section",{id:"graph-prim",children:i.jsxs(o,{title:"Prim (mst)",children:[i.jsx(o.Tab,{code:xm,language:"python"}),i.jsx(o.Tab,{code:_m,language:"javascript"}),i.jsx(o.Tab,{code:Sm,language:"java"}),i.jsx(o.Tab,{code:Tm,language:"cpp"})]})})]})}function U_(){return i.jsxs("div",{className:Hn.container,children:[i.jsx("h2",{className:Hn.sectionHeader,children:"Heap"}),i.jsx("section",{id:"heap-find-top-k-elements",children:i.jsxs(o,{title:"find top k elements",children:[i.jsx(o.Tab,{code:Rm,language:"python"}),i.jsx(o.Tab,{code:Cm,language:"javascript"}),i.jsx(o.Tab,{code:Dm,language:"java"}),i.jsx(o.Tab,{code:Lm,language:"cpp"})]})})]})}function q_(){return i.jsxs("div",{className:Hn.container,children:[i.jsx("h2",{className:Hn.sectionHeader,children:"Binary Search"}),i.jsx("section",{id:"binarysearch-binary-search",children:i.jsxs(o,{title:"binary search",children:[i.jsx(o.Tab,{code:fp,language:"python"}),i.jsx(o.Tab,{code:hp,language:"javascript"}),i.jsx(o.Tab,{code:pp,language:"java"}),i.jsx(o.Tab,{code:gp,language:"cpp"})]})}),i.jsx("section",{id:"binarysearch-duplicate-elements-left-insertion",children:i.jsxs(o,{title:"duplicate elements, left-most insertion point",children:[i.jsx(o.Tab,{code:jp,language:"python"}),i.jsx(o.Tab,{code:Np,language:"javascript"}),i.jsx(o.Tab,{code:wp,language:"java"}),i.jsx(o.Tab,{code:Ep,language:"cpp"})]})}),i.jsx("section",{id:"binarysearch-duplicate-elements-right-insertion",children:i.jsxs(o,{title:"duplicate elements, right-most insertion point",children:[i.jsx(o.Tab,{code:Ap,language:"python"}),i.jsx(o.Tab,{code:Op,language:"javascript"}),i.jsx(o.Tab,{code:kp,language:"java"}),i.jsx(o.Tab,{code:Mp,language:"cpp"})]})}),i.jsx("section",{id:"binarysearch-greedy-minimum",children:i.jsxs(o,{title:"greedy (minimum)",children:[i.jsx(o.Tab,{code:xp,language:"python"}),i.jsx(o.Tab,{code:_p,language:"javascript"}),i.jsx(o.Tab,{code:Sp,language:"java"}),i.jsx(o.Tab,{code:Tp,language:"cpp"})]})}),i.jsx("section",{id:"binarysearch-greedy-maximum",children:i.jsxs(o,{title:"greedy (maximum)",children:[i.jsx(o.Tab,{code:mp,language:"python"}),i.jsx(o.Tab,{code:bp,language:"javascript"}),i.jsx(o.Tab,{code:vp,language:"java"}),i.jsx(o.Tab,{code:yp,language:"cpp"})]})})]})}function H_(){return i.jsxs("div",{className:Hn.container,children:[i.jsx("h2",{className:Hn.sectionHeader,children:"Backtracking"}),i.jsx("section",{id:"backtracking-backtracking",children:i.jsxs(o,{title:"backtracking",children:[i.jsx(o.Tab,{code:cp,language:"python"}),i.jsx(o.Tab,{code:op,language:"javascript"}),i.jsx(o.Tab,{code:up,language:"java"}),i.jsx(o.Tab,{code:dp,language:"cpp"})]})})]})}function G_(){return i.jsxs("div",{className:Hn.container,children:[i.jsx("h2",{className:Hn.sectionHeader,children:"Dynamic Programming"}),i.jsx("section",{id:"dp-top-down",children:i.jsxs(o,{title:"DP top-down",children:[i.jsx(o.Tab,{code:wg,language:"python"}),i.jsx(o.Tab,{code:Eg,language:"javascript"}),i.jsx(o.Tab,{code:Ag,language:"java"}),i.jsx(o.Tab,{code:Og,language:"cpp"})]})}),i.jsx("section",{id:"dp-bottom-up",children:i.jsxs(o,{title:"DP bottom-up",children:[i.jsx(o.Tab,{code:vg,language:"python"}),i.jsx(o.Tab,{code:yg,language:"javascript"}),i.jsx(o.Tab,{code:xg,language:"java"}),i.jsx(o.Tab,{code:_g,language:"cpp"})]})}),i.jsx("section",{id:"dp-kadane",children:i.jsxs(o,{title:"Kadane (max-sum subarray)",children:[i.jsx(o.Tab,{code:Sg,language:"python"}),i.jsx(o.Tab,{code:Tg,language:"javascript"}),i.jsx(o.Tab,{code:jg,language:"java"}),i.jsx(o.Tab,{code:Ng,language:"cpp"})]})})]})}function Y_(){return i.jsxs("div",{className:Hn.container,children:[i.jsx("h2",{className:Hn.sectionHeader,children:"Bit Manipulation"}),i.jsx("section",{id:"bitmanipulation-test-kth-bit",children:i.jsxs(o,{title:"test kth-bit",children:[i.jsx(o.Tab,{code:ug,language:"python"}),i.jsx(o.Tab,{code:dg,language:"javascript"}),i.jsx(o.Tab,{code:fg,language:"java"}),i.jsx(o.Tab,{code:hg,language:"cpp"})]})}),i.jsx("section",{id:"bitmanipulation-set-kth-bit",children:i.jsxs(o,{title:"set kth bit",children:[i.jsx(o.Tab,{code:tg,language:"python"}),i.jsx(o.Tab,{code:ag,language:"javascript"}),i.jsx(o.Tab,{code:ig,language:"java"}),i.jsx(o.Tab,{code:rg,language:"cpp"})]})}),i.jsx("section",{id:"bitmanipulation-clear-kth-bit",children:i.jsxs(o,{title:"clear kth bit",children:[i.jsx(o.Tab,{code:zp,language:"python"}),i.jsx(o.Tab,{code:Bp,language:"javascript"}),i.jsx(o.Tab,{code:Up,language:"java"}),i.jsx(o.Tab,{code:qp,language:"cpp"})]})}),i.jsx("section",{id:"bitmanipulation-toggle-kth-bit",children:i.jsxs(o,{title:"toggle kth bit",children:[i.jsx(o.Tab,{code:pg,language:"python"}),i.jsx(o.Tab,{code:gg,language:"javascript"}),i.jsx(o.Tab,{code:mg,language:"java"}),i.jsx(o.Tab,{code:bg,language:"cpp"})]})}),i.jsx("section",{id:"bitmanipulation-get-rightmost-bit",children:i.jsxs(o,{title:"get rightmost bit",children:[i.jsx(o.Tab,{code:Zp,language:"python"}),i.jsx(o.Tab,{code:Ip,language:"javascript"}),i.jsx(o.Tab,{code:Fp,language:"java"}),i.jsx(o.Tab,{code:Wp,language:"cpp"})]})}),i.jsx("section",{id:"bitmanipulation-count-set-bits",children:i.jsxs(o,{title:"count set bits",children:[i.jsx(o.Tab,{code:Hp,language:"python"}),i.jsx(o.Tab,{code:Gp,language:"javascript"}),i.jsx(o.Tab,{code:Yp,language:"java"}),i.jsx(o.Tab,{code:Vp,language:"cpp"})]})}),i.jsx("section",{id:"bitmanipulation-multiply-power-of-two",children:i.jsxs(o,{title:"multiply by 2^k",children:[i.jsx(o.Tab,{code:Pp,language:"python"}),i.jsx(o.Tab,{code:$p,language:"javascript"}),i.jsx(o.Tab,{code:ng,language:"java"}),i.jsx(o.Tab,{code:eg,language:"cpp"})]})}),i.jsx("section",{id:"bitmanipulation-divide-power-of-two",children:i.jsxs(o,{title:"divide by 2^k",children:[i.jsx(o.Tab,{code:Kp,language:"python"}),i.jsx(o.Tab,{code:Xp,language:"javascript"}),i.jsx(o.Tab,{code:Qp,language:"java"}),i.jsx(o.Tab,{code:Jp,language:"cpp"})]})}),i.jsx("section",{id:"bitmanipulation-check-power-of-two",children:i.jsxs(o,{title:"check if number is power of 2",children:[i.jsx(o.Tab,{code:Rp,language:"python"}),i.jsx(o.Tab,{code:Cp,language:"javascript"}),i.jsx(o.Tab,{code:Dp,language:"java"}),i.jsx(o.Tab,{code:Lp,language:"cpp"})]})}),i.jsx("section",{id:"bitmanipulation-swap-variables",children:i.jsxs(o,{title:"swap two variables",children:[i.jsx(o.Tab,{code:lg,language:"python"}),i.jsx(o.Tab,{code:sg,language:"javascript"}),i.jsx(o.Tab,{code:cg,language:"java"}),i.jsx(o.Tab,{code:og,language:"cpp"})]})})]})}const V_=`def fn(matrix: list[list[int]]):
    r = len(matrix)
    c = len(matrix[0])

    create_matrix = [[0 for _ in range(c)] for _ in range(r)]
    copy_matrix = [row[:] for row in matrix]
`,K_=`def fn(matrix: list[list[int]]):
    r = len(matrix)
    c = len(matrix[0])

    main_diagonal = [matrix[i][i] for i in range(min(r, c))]
    anti_diagonal = [matrix[i][~i] for i in range(min(r, c))]
`,X_=`def fn(matrix: list[list[int]]):
    r = len(matrix)
    c = len(matrix[0])

    transpose_tuple = zip(*matrix)
    transpose = [list(row) for row in transpose_tuple]
    rotate_left = transpose[::-1]
    rotate_right = [row[::-1] for row in transpose]
`,Q_=`const fn = (matrix) => {
    const r = matrix.length;
    const c = matrix[0].length;

    const createMatrix = Array.from({ length: r }, () => Array(c).fill(0))
    const copyMatrix = matrix.map(row => [...row])
}
`,J_=`const fn = (matrix) => {
    const r = matrix.length
    const c = matrix[0].length

    const mainDiagonal = Array.from({ length: Math.min(r, c) }, (_, i) => matrix[i][i])
    const antiDiagonal = Array.from({ length: Math.min(r, c) }, (_, i) => matrix[i][~i])
}
`,Z_=`const fn = (matrix) => {
    const r = matrix.length
    const c = matrix[0].length

    const transposeTuple = matrix[0].map((_, i) => matrix.map(row => row[i]))
    const transpose = transposeTuple.map(row => [...row])
    const rotateLeft = transpose.reverse()
    const rotateRight = transpose.map(row => row.reverse())
}
`,I_=`import java.util.ArrayList;
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
`,F_=`import java.util.ArrayList;
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
`,W_=`import java.util.ArrayList;
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
`,P_=`#include <vector>

using namespace std;


void fn(vector<vector<int>>& matrix) {
    int r = matrix.size();
    int c = matrix[0].size();

    vector<vector<int>> create_matrix(r, vector<int>(c, 0));
    vector<vector<int>> copy_matrix(matrix);
}
`,$_=`#include <vector>

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
`,nS=`#include <vector>

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
`;function eS(){return i.jsxs("div",{className:Hn.container,children:[i.jsx("h2",{className:Hn.sectionHeader,children:"Matrix"}),i.jsx("section",{id:"matrix-create-copy",children:i.jsxs(o,{title:"create / copy",children:[i.jsx(o.Tab,{code:V_,language:"python"}),i.jsx(o.Tab,{code:Q_,language:"javascript"}),i.jsx(o.Tab,{code:I_,language:"java"}),i.jsx(o.Tab,{code:P_,language:"cpp"})]})}),i.jsx("section",{id:"matrix-diagonals",children:i.jsxs(o,{title:"diagonals / anti-diagonals",children:[i.jsx(o.Tab,{code:K_,language:"python"}),i.jsx(o.Tab,{code:J_,language:"javascript"}),i.jsx(o.Tab,{code:F_,language:"java"}),i.jsx(o.Tab,{code:$_,language:"cpp"})]})}),i.jsx("section",{id:"matrix-rotate-transpose",children:i.jsxs(o,{title:"rotate / transpose",children:[i.jsx(o.Tab,{code:X_,language:"python"}),i.jsx(o.Tab,{code:Z_,language:"javascript"}),i.jsx(o.Tab,{code:W_,language:"java"}),i.jsx(o.Tab,{code:nS,language:"cpp"})]})})]})}const tS=`from typing import Any


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
`,aS=`from typing import Any


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
`,iS=`from typing import Any


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
`,rS=`from typing import Any


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
`,lS=`from typing import Any


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
`,sS=`class Graph:
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
`,cS=`class Array {
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
`,oS=`class TreeNode {
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
`,uS=`class TreeNode {
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
`,dS=`class ListNode {
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
`,fS=`class ListNode {
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
`,hS=`class Graph {
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
`,pS=`public class Array<T> {
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
`,gS=`public class TreeNode<T> {
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
`,mS=`public class TreeNode<T extends Comparable<T>> {
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
`,bS=`class ListNode {
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
`,vS=`public class ListNode<T> {
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
`,yS=`import java.util.ArrayList;
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
`,xS=`#include <iostream>
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
`,_S=`#include <iostream>
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
`,SS=`#include <iostream>
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
`,TS=`#include <iostream>

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
`,jS=`#include <iostream>
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
`,NS=`#include <iostream>
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
`;function wS(){return i.jsxs("div",{className:Hn.container,children:[i.jsx("h2",{className:Hn.sectionHeader,children:"Data Structures"}),i.jsx("section",{id:"ds-array",children:i.jsxs(o,{title:"array",children:[i.jsx(o.Tab,{code:tS,language:"python"}),i.jsx(o.Tab,{code:cS,language:"javascript"}),i.jsx(o.Tab,{code:pS,language:"java"}),i.jsx(o.Tab,{code:xS,language:"cpp"})]})}),i.jsx("section",{id:"ds-hash-map",children:i.jsxs(o,{title:"hash map",children:[i.jsx(o.Tab,{code:kg,language:"python"}),i.jsx(o.Tab,{code:Mg,language:"javascript"}),i.jsx(o.Tab,{code:Rg,language:"java"}),i.jsx(o.Tab,{code:Cg,language:"cpp"})]})}),i.jsx("section",{id:"ds-linked-list",children:i.jsxs(o,{title:"linked list",children:[i.jsx(o.Tab,{code:rS,language:"python"}),i.jsx(o.Tab,{code:dS,language:"javascript"}),i.jsx(o.Tab,{code:bS,language:"java"}),i.jsx(o.Tab,{code:TS,language:"cpp"})]})}),i.jsx("section",{id:"ds-doubly-linked-list",children:i.jsxs(o,{title:"doubly linked list",children:[i.jsx(o.Tab,{code:lS,language:"python"}),i.jsx(o.Tab,{code:fS,language:"javascript"}),i.jsx(o.Tab,{code:vS,language:"java"}),i.jsx(o.Tab,{code:jS,language:"cpp"})]})}),i.jsx("section",{id:"ds-binary-tree",children:i.jsxs(o,{title:"binary tree",children:[i.jsx(o.Tab,{code:aS,language:"python"}),i.jsx(o.Tab,{code:oS,language:"javascript"}),i.jsx(o.Tab,{code:gS,language:"java"}),i.jsx(o.Tab,{code:_S,language:"cpp"})]})}),i.jsx("section",{id:"ds-binary-search-tree",children:i.jsxs(o,{title:"binary search tree",children:[i.jsx(o.Tab,{code:iS,language:"python"}),i.jsx(o.Tab,{code:uS,language:"javascript"}),i.jsx(o.Tab,{code:mS,language:"java"}),i.jsx(o.Tab,{code:SS,language:"cpp"})]})}),i.jsx("section",{id:"ds-graph",children:i.jsxs(o,{title:"graph",children:[i.jsx(o.Tab,{code:sS,language:"python"}),i.jsx(o.Tab,{code:hS,language:"javascript"}),i.jsx(o.Tab,{code:yS,language:"java"}),i.jsx(o.Tab,{code:NS,language:"cpp"})]})}),i.jsx("section",{id:"ds-union-find",children:i.jsxs(o,{title:"union find",children:[i.jsx(o.Tab,{code:Ug,language:"python"}),i.jsx(o.Tab,{code:qg,language:"javascript"}),i.jsx(o.Tab,{code:Hg,language:"java"}),i.jsx(o.Tab,{code:Gg,language:"cpp"})]})}),i.jsx("section",{id:"ds-union-find-optimized",children:i.jsxs(o,{title:"union find optimized",children:[i.jsx(o.Tab,{code:Yg,language:"python"}),i.jsx(o.Tab,{code:Vg,language:"javascript"}),i.jsx(o.Tab,{code:Kg,language:"java"}),i.jsx(o.Tab,{code:Xg,language:"cpp"})]})}),i.jsx("section",{id:"ds-trie",children:i.jsxs(o,{title:"trie",children:[i.jsx(o.Tab,{code:Dg,language:"python"}),i.jsx(o.Tab,{code:Lg,language:"javascript"}),i.jsx(o.Tab,{code:zg,language:"java"}),i.jsx(o.Tab,{code:Bg,language:"cpp"})]})})]})}const ES=`import random


def bogo_sort(arr: list) -> None:
    target = sorted(arr)

    while arr != target:
        random.shuffle(arr)
`,AS=`def bubble_sort(arr: list) -> None:
    n = len(arr)

    for i in range(n):
        swapped = False

        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True

        if not swapped:
            break
`,OS=`def bucket_sort(arr: list) -> list:
    num_buckets = 10
    min_num = min(arr)
    max_num = max(arr)
    bucket_size = (max_num - min_num) / num_buckets
    buckets = [[] for _ in range(num_buckets)]

    for num in arr:
        index = min(int((num - min_num) / bucket_size), num_buckets - 1)
        buckets[index].append(num)

    return [num for bucket in buckets for num in sorted(bucket)]
`,kS=`def counting_sort(arr: list) -> list:
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
`,MS=`def cube_sort(arr: list, processors: int) -> None:
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
`,RS=`def heap_sort(arr: list) -> list:
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
`,CS=`def insertion_sort(arr: list) -> None:
    n = len(arr)

    for i in range(1, n):
        key = arr[i]

        while i > 0 and key < arr[i - 1]:
            arr[i] = arr[i - 1]
            i -= 1

        arr[i] = key
`,DS=`def merge_sort(arr: list) -> list:
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
`,LS=`def pancake_sort(arr: list) -> None:
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
`,zS=`def quick_sort(arr: list) -> list:
    n = len(arr)

    if n <= 1:
        return arr

    pivot = arr[n // 2]
    left = [x for x in arr if x < pivot]
    right = [x for x in arr if x > pivot]

    return quick_sort(left) + [pivot] + quick_sort(right)
`,BS=`def radix_sort(arr: list) -> None:
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
`,US=`def selection_sort(arr: list) -> None:
    n = len(arr)

    for i in range(n):
        min_i = i

        for j in range(i + 1, n):
            if arr[j] < arr[min_i]:
                min_i = j

        if min_i != i:
            arr[i], arr[min_i] = arr[min_i], arr[i]
`,qS=`def shell_sort(arr: list) -> None:
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
`,HS=`from threading import Thread
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
`,GS=`def tim_sort(arr: list) -> list:
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
`,YS=`const bogoSort = (arr) => {
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
`,VS=`const bubbleSort = (arr) => {
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
`,KS=`const bucketSort = (arr) => {
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
`,XS=`const countingSort = (arr) => {
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
`,QS=`const cubeSort = (arr, processors) => {
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
`,JS=`const heapSort = (arr) => {
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
`,ZS=`const insertionSort = (arr) => {
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
`,IS=`const mergeSort = (arr) => {
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
`,FS=`const pancakeSort = (arr) => {
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
`,WS=`const quickSort = (arr) => {
    const n = arr.length

    if (n <= 1) {
        return arr
    }

    const pivot = arr[Math.floor(n / 2)]
    const left = arr.filter(x => x < pivot)
    const right = arr.filter(x => x > pivot)

    return [...quickSort(left), pivot, ...quickSort(right)]
}
`,PS=`const radixSort = (arr) => {
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
`,$S=`const selectionSort = (arr) => {
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
`,nT=`const shellSort = (arr) => {
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
`,eT=`const sleepSort = (arr) => {
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
`,tT=`const timSort = (arr) => {
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
`,aT=`import java.util.Arrays;
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
`,iT=`public static void bubbleSort(int[] arr) {
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
`,rT=`import java.util.ArrayList;
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
`,lT=`import java.util.Arrays;


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
`,sT=`import java.util.ArrayList;
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
`,cT=`public static int[] heapSort(int[] arr) {
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
`,oT=`public static void insertionSort(int[] arr) {
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
`,uT=`import java.util.Arrays;


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
`,dT=`public static void pancakeSort(int[] arr) {
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
`,fT=`import java.util.ArrayList;
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
`,hT=`import java.util.Arrays;


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
`,pT=`public static void selectionSort(int[] arr) {
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
`,gT=`public static void shellSort(int[] arr) {
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
`,mT=`import java.util.ArrayList;
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
`,bT=`public static int[] timSort(int[] arr) {
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
`,vT=`#include <algorithm>
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
`,yT=`#include <vector>

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
`,xT=`#include <vector>
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
`,_T=`#include <vector>
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
`,ST=`#include <vector>
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
`,TT=`#include <vector>

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
`,jT=`#include <vector>

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
`,NT=`#include <vector>

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
`,wT=`#include <vector>

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
`,ET=`#include <vector>

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
`,AT=`#include <vector>

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
`,OT=`#include <vector>

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
`,kT=`#include <vector>

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
`,MT=`#include <chrono>
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
`,RT=`#include <vector>
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
`;function CT(){return i.jsxs("div",{className:Hn.container,children:[i.jsx("h2",{className:Hn.sectionHeader,children:"Sorting Algorithms"}),i.jsx("section",{id:"sort-bubble",children:i.jsxs(o,{title:"bubble sort",children:[i.jsx(o.Tab,{code:AS,language:"python"}),i.jsx(o.Tab,{code:VS,language:"javascript"}),i.jsx(o.Tab,{code:iT,language:"java"}),i.jsx(o.Tab,{code:yT,language:"cpp"})]})}),i.jsx("section",{id:"sort-selection",children:i.jsxs(o,{title:"selection sort",children:[i.jsx(o.Tab,{code:US,language:"python"}),i.jsx(o.Tab,{code:$S,language:"javascript"}),i.jsx(o.Tab,{code:pT,language:"java"}),i.jsx(o.Tab,{code:OT,language:"cpp"})]})}),i.jsx("section",{id:"sort-insertion",children:i.jsxs(o,{title:"insertion sort",children:[i.jsx(o.Tab,{code:CS,language:"python"}),i.jsx(o.Tab,{code:ZS,language:"javascript"}),i.jsx(o.Tab,{code:oT,language:"java"}),i.jsx(o.Tab,{code:jT,language:"cpp"})]})}),i.jsx("section",{id:"sort-shell",children:i.jsxs(o,{title:"shell sort",children:[i.jsx(o.Tab,{code:qS,language:"python"}),i.jsx(o.Tab,{code:nT,language:"javascript"}),i.jsx(o.Tab,{code:gT,language:"java"}),i.jsx(o.Tab,{code:kT,language:"cpp"})]})}),i.jsx("section",{id:"sort-merge",children:i.jsxs(o,{title:"merge sort",children:[i.jsx(o.Tab,{code:DS,language:"python"}),i.jsx(o.Tab,{code:IS,language:"javascript"}),i.jsx(o.Tab,{code:uT,language:"java"}),i.jsx(o.Tab,{code:NT,language:"cpp"})]})}),i.jsx("section",{id:"sort-quick",children:i.jsxs(o,{title:"quick sort",children:[i.jsx(o.Tab,{code:zS,language:"python"}),i.jsx(o.Tab,{code:WS,language:"javascript"}),i.jsx(o.Tab,{code:fT,language:"java"}),i.jsx(o.Tab,{code:ET,language:"cpp"})]})}),i.jsx("section",{id:"sort-tim",children:i.jsxs(o,{title:"timsort",children:[i.jsx(o.Tab,{code:GS,language:"python"}),i.jsx(o.Tab,{code:tT,language:"javascript"}),i.jsx(o.Tab,{code:bT,language:"java"}),i.jsx(o.Tab,{code:RT,language:"cpp"})]})}),i.jsx("section",{id:"sort-heap",children:i.jsxs(o,{title:"heap sort",children:[i.jsx(o.Tab,{code:RS,language:"python"}),i.jsx(o.Tab,{code:JS,language:"javascript"}),i.jsx(o.Tab,{code:cT,language:"java"}),i.jsx(o.Tab,{code:TT,language:"cpp"})]})}),i.jsx("section",{id:"sort-counting",children:i.jsxs(o,{title:"counting sort",children:[i.jsx(o.Tab,{code:kS,language:"python"}),i.jsx(o.Tab,{code:XS,language:"javascript"}),i.jsx(o.Tab,{code:lT,language:"java"}),i.jsx(o.Tab,{code:_T,language:"cpp"})]})}),i.jsx("section",{id:"sort-bucket",children:i.jsxs(o,{title:"bucket sort",children:[i.jsx(o.Tab,{code:OS,language:"python"}),i.jsx(o.Tab,{code:KS,language:"javascript"}),i.jsx(o.Tab,{code:rT,language:"java"}),i.jsx(o.Tab,{code:xT,language:"cpp"})]})}),i.jsx("section",{id:"sort-radix",children:i.jsxs(o,{title:"radix sort",children:[i.jsx(o.Tab,{code:BS,language:"python"}),i.jsx(o.Tab,{code:PS,language:"javascript"}),i.jsx(o.Tab,{code:hT,language:"java"}),i.jsx(o.Tab,{code:AT,language:"cpp"})]})}),i.jsx("section",{id:"sort-cube",children:i.jsxs(o,{title:"cubesort",children:[i.jsx(o.Tab,{code:MS,language:"python"}),i.jsx(o.Tab,{code:QS,language:"javascript"}),i.jsx(o.Tab,{code:sT,language:"java"}),i.jsx(o.Tab,{code:ST,language:"cpp"})]})}),i.jsx("section",{id:"sort-bogo",children:i.jsxs(o,{title:"bogo sort",children:[i.jsx(o.Tab,{code:ES,language:"python"}),i.jsx(o.Tab,{code:YS,language:"javascript"}),i.jsx(o.Tab,{code:aT,language:"java"}),i.jsx(o.Tab,{code:vT,language:"cpp"})]})}),i.jsx("section",{id:"sort-pancake",children:i.jsxs(o,{title:"pancake sort",children:[i.jsx(o.Tab,{code:LS,language:"python"}),i.jsx(o.Tab,{code:FS,language:"javascript"}),i.jsx(o.Tab,{code:dT,language:"java"}),i.jsx(o.Tab,{code:wT,language:"cpp"})]})}),i.jsx("section",{id:"sort-sleep",children:i.jsxs(o,{title:"sleep sort",children:[i.jsx(o.Tab,{code:HS,language:"python"}),i.jsx(o.Tab,{code:eT,language:"javascript"}),i.jsx(o.Tab,{code:mT,language:"java"}),i.jsx(o.Tab,{code:MT,language:"cpp"})]})})]})}function DT(){const{isSidebarOpen:c}=Xo(),{view:b}=bs(),g=Te(Xh.main,(!c||b==="finder")&&Xh.sidebarHidden);return i.jsx("main",{className:g,children:b==="finder"?i.jsx(g_,{}):LT()})}function LT(){return i.jsxs(i.Fragment,{children:[i.jsx(M_,{}),i.jsx(R_,{}),i.jsx(C_,{}),i.jsx(D_,{}),i.jsx(L_,{}),i.jsx(z_,{}),i.jsx(B_,{}),i.jsx(U_,{}),i.jsx(q_,{}),i.jsx(H_,{}),i.jsx(G_,{}),i.jsx(Y_,{}),i.jsx(eS,{}),i.jsx(wS,{}),i.jsx(CT,{})]})}function zT(){return i.jsx(ms.StrictMode,{children:i.jsx(Z0,{children:i.jsx(J0,{children:i.jsx(I0,{children:i.jsxs("div",{className:"App",children:[i.jsx(Ay,{}),i.jsx(DT,{})]})})})})})}X0.createRoot(document.getElementById("root")).render(i.jsx(zT,{}));
