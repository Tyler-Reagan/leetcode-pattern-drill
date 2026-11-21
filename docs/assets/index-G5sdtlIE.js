const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/400-B5WfoJxY.css","assets/700-Bwqbt05G.css","assets/MapView-DS_p7Scu.js","assets/path-ZKHm4b7v.js","assets/path-YF1ekw5y.css","assets/MapView-acdOEaeK.css","assets/MapOutline-Dg66PoFF.js","assets/Cheatsheet-BQPKQt4g.js","assets/Cheatsheet-CWUDfl2-.css"])))=>i.map(i=>d[i]);
(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const S of document.querySelectorAll('link[rel="modulepreload"]'))c(S);new MutationObserver(S=>{for(const R of S)if(R.type==="childList")for(const M of R.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&c(M)}).observe(document,{childList:!0,subtree:!0});function f(S){const R={};return S.integrity&&(R.integrity=S.integrity),S.referrerPolicy&&(R.referrerPolicy=S.referrerPolicy),S.crossOrigin==="use-credentials"?R.credentials="include":S.crossOrigin==="anonymous"?R.credentials="omit":R.credentials="same-origin",R}function c(S){if(S.ep)return;S.ep=!0;const R=f(S);fetch(S.href,R)}})();function _l(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var qc={exports:{}},_r={};var hp;function B0(){if(hp)return _r;hp=1;var s=Symbol.for("react.transitional.element"),h=Symbol.for("react.fragment");function f(c,S,R){var M=null;if(R!==void 0&&(M=""+R),S.key!==void 0&&(M=""+S.key),"key"in S){R={};for(var D in S)D!=="key"&&(R[D]=S[D])}else R=S;return S=R.ref,{$$typeof:s,type:c,key:M,ref:S!==void 0?S:null,props:R}}return _r.Fragment=h,_r.jsx=f,_r.jsxs=f,_r}var mp;function L0(){return mp||(mp=1,qc.exports=B0()),qc.exports}var u=L0(),Hc={exports:{}},Sr={},Yc={exports:{}},Gc={};var pp;function U0(){return pp||(pp=1,(function(s){function h(G,se){var J=G.length;G.push(se);e:for(;0<J;){var Me=J-1>>>1,Se=G[Me];if(0<S(Se,se))G[Me]=se,G[J]=Se,J=Me;else break e}}function f(G){return G.length===0?null:G[0]}function c(G){if(G.length===0)return null;var se=G[0],J=G.pop();if(J!==se){G[0]=J;e:for(var Me=0,Se=G.length,sn=Se>>>1;Me<sn;){var pn=2*(Me+1)-1,ut=G[pn],b=pn+1,j=G[b];if(0>S(ut,J))b<Se&&0>S(j,ut)?(G[Me]=j,G[b]=J,Me=b):(G[Me]=ut,G[pn]=J,Me=pn);else if(b<Se&&0>S(j,J))G[Me]=j,G[b]=J,Me=b;else break e}}return se}function S(G,se){var J=G.sortIndex-se.sortIndex;return J!==0?J:G.id-se.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var R=performance;s.unstable_now=function(){return R.now()}}else{var M=Date,D=M.now();s.unstable_now=function(){return M.now()-D}}var U=[],q=[],z=1,g=null,x=3,Y=!1,H=!1,X=!1,$=!1,ve=typeof setTimeout=="function"?setTimeout:null,de=typeof clearTimeout=="function"?clearTimeout:null,fe=typeof setImmediate<"u"?setImmediate:null;function xe(G){for(var se=f(q);se!==null;){if(se.callback===null)c(q);else if(se.startTime<=G)c(q),se.sortIndex=se.expirationTime,h(U,se);else break;se=f(q)}}function Ge(G){if(X=!1,xe(G),!H)if(f(U)!==null)H=!0,Be||(Be=!0,un());else{var se=f(q);se!==null&&on(Ge,se.startTime-G)}}var Be=!1,le=-1,me=5,Oe=-1;function _e(){return $?!0:!(s.unstable_now()-Oe<me)}function Ze(){if($=!1,Be){var G=s.unstable_now();Oe=G;var se=!0;try{e:{H=!1,X&&(X=!1,de(le),le=-1),Y=!0;var J=x;try{n:{for(xe(G),g=f(U);g!==null&&!(g.expirationTime>G&&_e());){var Me=g.callback;if(typeof Me=="function"){g.callback=null,x=g.priorityLevel;var Se=Me(g.expirationTime<=G);if(G=s.unstable_now(),typeof Se=="function"){g.callback=Se,xe(G),se=!0;break n}g===f(U)&&c(U),xe(G)}else c(U);g=f(U)}if(g!==null)se=!0;else{var sn=f(q);sn!==null&&on(Ge,sn.startTime-G),se=!1}}break e}finally{g=null,x=J,Y=!1}se=void 0}}finally{se?un():Be=!1}}}var un;if(typeof fe=="function")un=function(){fe(Ze)};else if(typeof MessageChannel<"u"){var Kn=new MessageChannel,On=Kn.port2;Kn.port1.onmessage=Ze,un=function(){On.postMessage(null)}}else un=function(){ve(Ze,0)};function on(G,se){le=ve(function(){G(s.unstable_now())},se)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(G){G.callback=null},s.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):me=0<G?Math.floor(1e3/G):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(G){switch(x){case 1:case 2:case 3:var se=3;break;default:se=x}var J=x;x=se;try{return G()}finally{x=J}},s.unstable_requestPaint=function(){$=!0},s.unstable_runWithPriority=function(G,se){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var J=x;x=G;try{return se()}finally{x=J}},s.unstable_scheduleCallback=function(G,se,J){var Me=s.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?Me+J:Me):J=Me,G){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=J+Se,G={id:z++,callback:se,priorityLevel:G,startTime:J,expirationTime:Se,sortIndex:-1},J>Me?(G.sortIndex=J,h(q,G),f(U)===null&&G===f(q)&&(X?(de(le),le=-1):X=!0,on(Ge,J-Me))):(G.sortIndex=Se,h(U,G),H||Y||(H=!0,Be||(Be=!0,un()))),G},s.unstable_shouldYield=_e,s.unstable_wrapCallback=function(G){var se=x;return function(){var J=x;x=se;try{return G.apply(this,arguments)}finally{x=J}}}})(Gc)),Gc}var gp;function q0(){return gp||(gp=1,Yc.exports=U0()),Yc.exports}var Kc={exports:{}},ge={};var bp;function H0(){if(bp)return ge;bp=1;var s=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),M=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),q=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.for("react.view_transition"),Y=Symbol.iterator;function H(b){return b===null||typeof b!="object"?null:(b=Y&&b[Y]||b["@@iterator"],typeof b=="function"?b:null)}var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,ve={};function de(b,j,ie){this.props=b,this.context=j,this.refs=ve,this.updater=ie||X}de.prototype.isReactComponent={},de.prototype.setState=function(b,j){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,j,"setState")},de.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function fe(){}fe.prototype=de.prototype;function xe(b,j,ie){this.props=b,this.context=j,this.refs=ve,this.updater=ie||X}var Ge=xe.prototype=new fe;Ge.constructor=xe,$(Ge,de.prototype),Ge.isPureReactComponent=!0;var Be=Array.isArray;function le(){}var me={H:null,A:null,T:null,S:null},Oe=Object.prototype.hasOwnProperty;function _e(b,j,ie){var F=ie.ref;return{$$typeof:s,type:b,key:j,ref:F!==void 0?F:null,props:ie}}function Ze(b,j){return _e(b.type,j,b.props)}function un(b){return typeof b=="object"&&b!==null&&b.$$typeof===s}function Kn(b){var j={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(ie){return j[ie]})}var On=/\/+/g;function on(b,j){return typeof b=="object"&&b!==null&&b.key!=null?Kn(""+b.key):j.toString(36)}function G(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(le,le):(b.status="pending",b.then(function(j){b.status==="pending"&&(b.status="fulfilled",b.value=j)},function(j){b.status==="pending"&&(b.status="rejected",b.reason=j)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function se(b,j,ie,F,ue){var Re=typeof b;(Re==="undefined"||Re==="boolean")&&(b=null);var Ne=!1;if(b===null)Ne=!0;else switch(Re){case"bigint":case"string":case"number":Ne=!0;break;case"object":switch(b.$$typeof){case s:case h:Ne=!0;break;case z:return Ne=b._init,se(Ne(b._payload),j,ie,F,ue)}}if(Ne)return ue=ue(b),Ne=F===""?"."+on(b,0):F,Be(ue)?(ie="",Ne!=null&&(ie=Ne.replace(On,"$&/")+"/"),se(ue,j,ie,"",function(Wn){return Wn})):ue!=null&&(un(ue)&&(ue=Ze(ue,ie+(ue.key==null||b&&b.key===ue.key?"":(""+ue.key).replace(On,"$&/")+"/")+Ne)),j.push(ue)),1;Ne=0;var ee=F===""?".":F+":";if(Be(b))for(var oe=0;oe<b.length;oe++)F=b[oe],Re=ee+on(F,oe),Ne+=se(F,j,ie,Re,ue);else if(oe=H(b),typeof oe=="function")for(b=oe.call(b),oe=0;!(F=b.next()).done;)F=F.value,Re=ee+on(F,oe++),Ne+=se(F,j,ie,Re,ue);else if(Re==="object"){if(typeof b.then=="function")return se(G(b),j,ie,F,ue);throw j=String(b),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return Ne}function J(b,j,ie){if(b==null)return b;var F=[],ue=0;return se(b,F,"","",function(Re){return j.call(ie,Re,ue++)}),F}function Me(b){if(b._status===-1){var j=b._result,ie=j();ie.then(function(F){(b._status===0||b._status===-1)&&(b._status=1,b._result=F,ie.status===void 0&&(ie.status="fulfilled",ie.value=F))},function(F){(b._status===0||b._status===-1)&&(b._status=2,b._result=F,ie.status===void 0&&(ie.status="rejected",ie.reason=F))}),b._status===-1&&(b._status=0,b._result=ie)}if(b._status===1)return b._result.default;throw b._result}var Se=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)};function sn(b){var j=me.T,ie={};ie.types=j!==null?j.types:null,me.T=ie;try{var F=b(),ue=me.S;ue!==null&&ue(ie,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(le,Se)}catch(Re){Se(Re)}finally{j!==null&&ie.types!==null&&(j.types=ie.types),me.T=j}}function pn(b){var j=me.T;if(j!==null){var ie=j.types;ie===null?j.types=[b]:ie.indexOf(b)===-1&&ie.push(b)}else sn(pn.bind(null,b))}var ut={map:J,forEach:function(b,j,ie){J(b,function(){j.apply(this,arguments)},ie)},count:function(b){var j=0;return J(b,function(){j++}),j},toArray:function(b){return J(b,function(j){return j})||[]},only:function(b){if(!un(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return ge.Activity=g,ge.Children=ut,ge.Component=de,ge.Fragment=f,ge.Profiler=S,ge.PureComponent=xe,ge.StrictMode=c,ge.Suspense=U,ge.ViewTransition=x,ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=me,ge.__COMPILER_RUNTIME={__proto__:null,c:function(b){return me.H.useMemoCache(b)}},ge.addTransitionType=pn,ge.cache=function(b){return function(){return b.apply(null,arguments)}},ge.cacheSignal=function(){return null},ge.cloneElement=function(b,j,ie){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var F=$({},b.props),ue=b.key;if(j!=null)for(Re in j.key!==void 0&&(ue=""+j.key),j)!Oe.call(j,Re)||Re==="key"||Re==="__self"||Re==="__source"||Re==="ref"&&j.ref===void 0||(F[Re]=j[Re]);var Re=arguments.length-2;if(Re===1)F.children=ie;else if(1<Re){for(var Ne=Array(Re),ee=0;ee<Re;ee++)Ne[ee]=arguments[ee+2];F.children=Ne}return _e(b.type,ue,F)},ge.createContext=function(b){return b={$$typeof:M,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:R,_context:b},b},ge.createElement=function(b,j,ie){var F,ue={},Re=null;if(j!=null)for(F in j.key!==void 0&&(Re=""+j.key),j)Oe.call(j,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&(ue[F]=j[F]);var Ne=arguments.length-2;if(Ne===1)ue.children=ie;else if(1<Ne){for(var ee=Array(Ne),oe=0;oe<Ne;oe++)ee[oe]=arguments[oe+2];ue.children=ee}if(b&&b.defaultProps)for(F in Ne=b.defaultProps,Ne)ue[F]===void 0&&(ue[F]=Ne[F]);return _e(b,Re,ue)},ge.createRef=function(){return{current:null}},ge.forwardRef=function(b){return{$$typeof:D,render:b}},ge.isValidElement=un,ge.lazy=function(b){return{$$typeof:z,_payload:{_status:-1,_result:b},_init:Me}},ge.memo=function(b,j){return{$$typeof:q,type:b,compare:j===void 0?null:j}},ge.startTransition=sn,ge.unstable_useCacheRefresh=function(){return me.H.useCacheRefresh()},ge.use=function(b){return me.H.use(b)},ge.useActionState=function(b,j,ie){return me.H.useActionState(b,j,ie)},ge.useCallback=function(b,j){return me.H.useCallback(b,j)},ge.useContext=function(b){return me.H.useContext(b)},ge.useDebugValue=function(){},ge.useDeferredValue=function(b,j){return me.H.useDeferredValue(b,j)},ge.useEffect=function(b,j){return me.H.useEffect(b,j)},ge.useEffectEvent=function(b){return me.H.useEffectEvent(b)},ge.useId=function(){return me.H.useId()},ge.useImperativeHandle=function(b,j,ie){return me.H.useImperativeHandle(b,j,ie)},ge.useInsertionEffect=function(b,j){return me.H.useInsertionEffect(b,j)},ge.useLayoutEffect=function(b,j){return me.H.useLayoutEffect(b,j)},ge.useMemo=function(b,j){return me.H.useMemo(b,j)},ge.useOptimistic=function(b,j){return me.H.useOptimistic(b,j)},ge.useReducer=function(b,j,ie){return me.H.useReducer(b,j,ie)},ge.useRef=function(b){return me.H.useRef(b)},ge.useState=function(b){return me.H.useState(b)},ge.useSyncExternalStore=function(b,j,ie){return me.H.useSyncExternalStore(b,j,ie)},ge.useTransition=function(){return me.H.useTransition()},ge.version="19.3.1",ge}var vp;function rf(){return vp||(vp=1,Kc.exports=H0()),Kc.exports}var Vc={exports:{}},Gn={};var yp;function Y0(){if(yp)return Gn;yp=1;var s=rf();function h(z){var g="https://react.dev/errors/"+z;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)g+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+z+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var c={d:{f,r:function(){throw Error(h(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},S=Symbol.for("react.portal"),R=Symbol.for("react.recoverable"),M=Symbol.for("react.optimistic_key");function D(z,g,x){var Y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:S,key:Y==null?null:Y===M?M:""+Y,children:z,containerInfo:g,implementation:x}}var U=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function q(z,g){if(z==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Gn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Gn.browser=function(z){return{$$typeof:R,_reason:z}},Gn.createPortal=function(z,g){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(h(299));return D(z,g,null,x)},Gn.flushSync=function(z){var g=U.T,x=c.p;try{if(U.T=null,c.p=2,z)return z()}finally{U.T=g,c.p=x,c.d.f()}},Gn.preconnect=function(z,g){typeof z=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,c.d.C(z,g))},Gn.prefetchDNS=function(z){typeof z=="string"&&c.d.D(z)},Gn.preinit=function(z,g){if(typeof z=="string"&&g&&typeof g.as=="string"){var x=g.as,Y=q(x,g.crossOrigin),H=typeof g.integrity=="string"?g.integrity:void 0,X=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;x==="style"?c.d.S(z,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:Y,integrity:H,fetchPriority:X}):x==="script"&&c.d.X(z,{crossOrigin:Y,integrity:H,fetchPriority:X,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Gn.preinitModule=function(z,g){if(typeof z=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var x=q(g.as,g.crossOrigin);c.d.M(z,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&c.d.M(z)},Gn.preload=function(z,g){if(typeof z=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var x=g.as,Y=q(x,g.crossOrigin);c.d.L(z,x,{crossOrigin:Y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Gn.preloadModule=function(z,g){if(typeof z=="string")if(g){var x=q(g.as,g.crossOrigin);c.d.m(z,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else c.d.m(z)},Gn.requestFormReset=function(z){c.d.r(z)},Gn.unstable_batchedUpdates=function(z,g){return z(g)},Gn.useFormState=function(z,g,x){return U.H.useFormState(z,g,x)},Gn.useFormStatus=function(){return U.H.useHostTransitionStatus()},Gn.version="19.3.1",Gn}var _p;function Kp(){if(_p)return Vc.exports;_p=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(h){console.error(h)}}return s(),Vc.exports=Y0(),Vc.exports}var Sp;function G0(){if(Sp)return Sr;Sp=1;var s=q0(),h=rf(),f=Kp();function c(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function S(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function R(e){for(var n=e,t=n;t&&!t.alternate;)n=t,(n.flags&4098)!==0&&(e=n.return),t=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function M(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function D(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function U(e){if(R(e)!==e)throw Error(c(188))}function q(e){var n=e.alternate;if(!n){if(n=R(e),n===null)throw Error(c(188));return n!==e?null:e}for(var t=e,a=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(a=i.return,a!==null){t=a;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return U(i),e;if(l===a)return U(i),n;l=l.sibling}throw Error(c(188))}if(t.return!==a.return)t=i,a=l;else{for(var r=!1,o=i.child;o;){if(o===t){r=!0,t=i,a=l;break}if(o===a){r=!0,a=i,t=l;break}o=o.sibling}if(!r){for(o=l.child;o;){if(o===t){r=!0,t=l,a=i;break}if(o===a){r=!0,a=l,t=i;break}o=o.sibling}if(!r)throw Error(c(189))}}if(t.alternate!==a)throw Error(c(190))}if(t.tag!==3)throw Error(c(188));return t.stateNode.current===t?e:n}function z(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=z(e),n!==null)return n;e=e.sibling}return null}function g(e,n,t,a,i,l){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&t(e,a,i,l)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&g(e.child,n,t,a,i,l))return!0;e=e.sibling}return!1}function x(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function Y(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function H(e){var n=[null,null],t=x(e);return t===null||X(n,e,t.child,{foundSelf:!1}),n}function X(e,n,t,a){for(;t!==null;){if(t===n)a.foundSelf=!0;else if(t.tag===5||t.tag===27||t.tag===6){if(a.foundSelf)return e[1]=t,!0;e[0]=t}else if((t.tag!==22||t.memoizedState===null)&&X(e,n,t.child,a))return!0;t=t.sibling}return!1}function $(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(c(559))}}var ve=null,de=null;function fe(e,n,t){return e===t?!0:e===n?(ve=e,!0):!1}function xe(e,n,t){return e===t?(de=e,!1):e===n?(de!==null&&(ve=e),!0):!1}function Ge(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function Be(e,n,t){for(var a=0,i=e;i;i=t(i))a++;i=0;for(var l=n;l;l=t(l))i++;for(;0<a-i;)e=t(e),a--;for(;0<i-a;)n=t(n),i--;for(;a--;){if(e===n||n!==null&&e===n.alternate)return e;e=t(e),n=t(n)}return null}var le=Object.assign,me=Symbol.for("react.element"),Oe=Symbol.for("react.transitional.element"),_e=Symbol.for("react.portal"),Ze=Symbol.for("react.fragment"),un=Symbol.for("react.strict_mode"),Kn=Symbol.for("react.profiler"),On=Symbol.for("react.consumer"),on=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),Me=Symbol.for("react.memo"),Se=Symbol.for("react.lazy"),sn=Symbol.for("react.activity"),pn=Symbol.for("react.legacy_hidden"),ut=Symbol.for("react.memo_cache_sentinel"),b=Symbol.for("react.view_transition"),j=Symbol.for("react.recoverable"),ie=Symbol.iterator;function F(e){return e===null||typeof e!="object"?null:(e=ie&&e[ie]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Symbol.for("react.client.reference");function Re(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ue?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ze:return"Fragment";case Kn:return"Profiler";case un:return"StrictMode";case se:return"Suspense";case J:return"SuspenseList";case sn:return"Activity";case b:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case _e:return"Portal";case on:return e.displayName||"Context";case On:return(e._context.displayName||"Context")+".Consumer";case G:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Me:return n=e.displayName||null,n!==null?n:Re(e.type)||"Memo";case Se:n=e._payload,e=e._init;try{return Re(e(n))}catch{}}return null}var Ne=Array.isArray,ee=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Wn={pending:!1,data:null,method:null,action:null},$a=[],ya=-1;function bt(e){return{current:e}}function Nn(e){0>ya||(e.current=$a[ya],$a[ya]=null,ya--)}function $e(e,n){ya++,$a[ya]=e.current,e.current=n}var vt=bt(null),_a=bt(null),Ut=bt(null),xi=bt(null);function ei(e,n){switch($e(Ut,n),$e(_a,e),$e(vt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Tm(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Tm(n),e=Em(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Nn(vt),$e(vt,e)}function $n(){Nn(vt),Nn(_a),Nn(Ut)}function Oi(e){var n=e.memoizedState;n!==null&&(hl._currentValue=n.memoizedState,$e(xi,e)),n=vt.current;var t=Em(n,e.type);n!==t&&($e(_a,e),$e(vt,t))}function Mt(e){_a.current===e&&(Nn(vt),Nn(_a)),xi.current===e&&(Nn(xi),hl._currentValue=Wn)}var Sa,Sl;function qt(e){if(Sa===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Sa=n&&n[1]||"",Sl=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Sa+e+Sl}var Tl=!1;function El(e,n){if(!e||Tl)return"";Tl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(V){var v=V}Reflect.construct(e,[],C)}else{try{C.call()}catch(V){v=V}C=!1;try{var w=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),C=!0,new e}finally{C&&(w!==void 0?Object.defineProperty(e.prototype,"props",w):delete e.prototype.props)}}}else{try{throw Error()}catch(V){v=V}(C=e())&&typeof C.catch=="function"&&C.catch(function(){})}}catch(V){if(V&&v&&typeof V.stack=="string")return[V.stack,v.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=a.DetermineComponentFrameRoot(),r=l[0],o=l[1];if(r&&o){var d=r.split(`
`),_=o.split(`
`);for(i=a=0;a<d.length&&!d[a].includes("DetermineComponentFrameRoot");)a++;for(;i<_.length&&!_[i].includes("DetermineComponentFrameRoot");)i++;if(a===d.length||i===_.length)for(a=d.length-1,i=_.length-1;1<=a&&0<=i&&d[a]!==_[i];)i--;for(;1<=a&&0<=i;a--,i--)if(d[a]!==_[i]){if(a!==1||i!==1)do if(a--,i--,0>i||d[a]!==_[i]){var O=`
`+d[a].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=a&&0<=i);break}}}finally{Tl=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?qt(t):""}function hu(e,n){switch(e.tag){case 26:case 27:case 5:return qt(e.type);case 16:return qt("Lazy");case 13:return e.child!==n&&n!==null?qt("Suspense Fallback"):qt("Suspense");case 19:return qt("SuspenseList");case 0:case 15:return El(e.type,!1);case 11:return El(e.type.render,!1);case 1:return El(e.type,!0);case 31:return qt("Activity");case 30:return qt("ViewTransition");default:return""}}function Nr(e){try{var n="",t=null;do n+=hu(e,t),t=e,e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Ni=Object.prototype.hasOwnProperty,wl=s.unstable_scheduleCallback,xl=s.unstable_cancelCallback,mu=s.unstable_shouldYield,Ol=s.unstable_requestPaint,Vn=s.unstable_now,Ar=s.unstable_getCurrentPriorityLevel,Mr=s.unstable_ImmediatePriority,Nl=s.unstable_UserBlockingPriority,Ct=s.unstable_NormalPriority,m=s.unstable_LowPriority,k=s.unstable_IdlePriority,I=s.log,pe=s.unstable_setDisableYieldValue,tn=null,Le=null;function P(e){if(typeof I=="function"&&pe(e),Le&&typeof Le.setStrictMode=="function")try{Le.setStrictMode(tn,e)}catch{}}var K=Math.clz32?Math.clz32:dn,he=Math.log,yn=Math.LN2;function dn(e){return e>>>=0,e===0?32:31-(he(e)/yn|0)|0}var Ht=256,Ta=262144,Ea=4194304;function $t(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function wa(e,n,t){var a=e.pendingLanes;if(a===0)return 0;var i=0,l=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=a&134217727;return o!==0?(a=o&~l,a!==0?i=$t(a):(r&=o,r!==0?i=$t(r):t||(t=o&~e,t!==0&&(i=$t(t))))):(o=a&~l,o!==0?i=$t(o):r!==0?i=$t(r):t||(t=a&~e,t!==0&&(i=$t(t)))),i===0?0:n!==0&&n!==i&&(n&l)===0&&(l=i&-i,t=n&-n,l>=t||l===32&&(t&4194048)!==0)?n:i}function ni(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Cr(e,n){(n&8)!==0&&(n|=n&32);var t=e.entangledLanes;if(t!==0)for(e=e.entanglements,t&=n;0<t;){var a=31-K(t),i=1<<a;n|=e[a],t&=~i}return n}function pu(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Al(){var e=Ea;return Ea<<=1,(Ea&62914560)===0&&(Ea=4194304),e}function xa(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ti(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function gu(e,n,t,a,i,l){var r=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var o=e.entanglements,d=e.expirationTimes,_=e.hiddenUpdates;for(t=r&~t;0<t;){var O=31-K(t),C=1<<O;o[O]=0,d[O]=-1;var v=_[O];if(v!==null)for(_[O]=null,O=0;O<v.length;O++){var w=v[O];w!==null&&(w.lane&=-536870913)}t&=~C}a!==0&&Rr(e,a,0),l!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=l&~(r&~n))}function Rr(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var a=31-K(n);e.entangledLanes|=n,e.entanglements[a]=e.entanglements[a]|1073741824|t&261930}function Rt(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-K(t),i=1<<a;i&n|e[a]&n&&(e[a]|=n),t&=~i}}function Ml(e,n){var t=n&-n;return t=(t&42)!==0?1:Ai(t),(t&(e.suspendedLanes|n))!==0?0:t}function Ai(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Cl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function kr(){var e=oe.p;return e!==0?e:(e=window.event,e===void 0?32:rp(e.type))}function Dr(e,n){var t=oe.p;try{return oe.p=e,n()}finally{oe.p=t}}var et=Math.random().toString(36).slice(2),An="__reactFiber$"+et,B="__reactProps$"+et,te="__reactContainer$"+et,Ce="__reactEvents$"+et,en="__reactListeners$"+et,gn="__reactHandles$"+et,nt="__reactResources$"+et,tt="__reactMarker$"+et,ea="__reactLoad$"+et;function Cn(e){delete e[An],delete e[B],delete e[en],delete e[gn]}function Rn(e){var n;if(n=e[An])return n;for(var t=e.parentNode;t;){if(n=t[te]||t[An]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Hm(e);e!==null;){if(t=e[An])return t;e=Hm(e)}return n}e=t,t=e.parentNode}return null}function na(e){if(e=e[An]||e[te]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Oa(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(c(33))}function ta(e){var n=e[nt];return n||(n=e[nt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function _n(e){e[tt]=!0}function jr(e){e[ea]=void 0}var zr=new Set,Br={};function yt(e,n){aa(e,n),aa(e+"Capture",n)}function aa(e,n){for(Br[e]=n,e=0;e<n.length;e++)zr.add(n[e])}var _t=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Lr={},Mi={};function ye(e){return Ni.call(Mi,e)?!0:Ni.call(Lr,e)?!1:_t.test(e)?Mi[e]=!0:(Lr[e]=!0,!1)}var Ue=!1;function Sn(){var e=Ue;return Ue=!1,e}function Ke(e,n,t){if(ye(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,t)}}function ia(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,t)}}function zn(e,n,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,a)}}function Bn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ci(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Q(e,n,t){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,l=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(r){t=""+r,l.call(this,r)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(r){t=""+r},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ae(e){if(!e._valueTracker){var n=Ci(e)?"checked":"value";e._valueTracker=Q(e,n,""+e[n])}}function Te(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=Ci(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}var Ve=/[\n"\\]/g;function Je(e){return e.replace(Ve,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ot(e,n,t,a,i,l,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),n!=null?r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Bn(n)):e.value!==""+Bn(n)&&(e.value=""+Bn(n)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),n!=null?r==="number"&&e.value==n?Rl(e,Bn(e.value)):Rl(e,Bn(n)):t!=null?Rl(e,Bn(t)):a!=null&&e.removeAttribute("value"),i==null&&l!=null&&(e.defaultChecked=!!l),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Bn(o):e.removeAttribute("name")}function Ur(e,n,t,a,i,l,r,o){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),n!=null||t!=null){if(!(l!=="submit"&&l!=="reset"||n!=null)){ae(e);return}t=t!=null?""+Bn(t):"",n=n!=null?""+Bn(n):t,o||n===e.value||(e.value=n),e.defaultValue=n}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=o?e.checked:!!a,e.defaultChecked=!!a,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),ae(e)}function Rl(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function Ri(e,n,t,a){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&a&&(e[t].defaultSelected=!0)}else{for(t=""+Bn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function df(e,n,t){if(n!=null&&(n=""+Bn(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+Bn(t):""}function hf(e,n,t,a){if(n==null){if(a!=null){if(t!=null)throw Error(c(92));if(Ne(a)){if(1<a.length)throw Error(c(93));a=a[0]}t=a}t==null&&(t=""),n=t}t=Bn(n),e.defaultValue=t,a=e.textContent,a===t&&a!==""&&a!==null&&(e.value=a),ae(e)}function ki(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var ig=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mf(e,n,t){var a=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":a?e.setProperty(n,t):typeof t!="number"||t===0||ig.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function pf(e,n,t){if(n!=null&&typeof n!="object")throw Error(c(62));if(e=e.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="",Ue=!0);for(var i in n)a=n[i],n.hasOwnProperty(i)&&t[i]!==a&&(mf(e,i,a),Ue=!0)}else for(var l in n)n.hasOwnProperty(l)&&mf(e,l,n[l])}function bu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),rg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qr(e){return rg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Yt(){}var vu=null;function yu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Di=null,ji=null;function gf(e){var n=na(e);if(n&&(e=n.stateNode)){var t=e[B]||null;e:switch(e=n.stateNode,n.type){case"input":if(ot(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Je(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var i=a[B]||null;if(!i)throw Error(c(90));ot(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(n=0;n<t.length;n++)a=t[n],a.form===e.form&&Te(a)}break e;case"textarea":df(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&Ri(e,!!t.multiple,n,!1)}}}var _u=!1;function bf(e,n,t){if(_u)return e(n,t);_u=!0;try{var a=e(n);return a}finally{if(_u=!1,(Di!==null||ji!==null)&&(qs(),Di&&(n=Di,e=ji,ji=Di=null,gf(n),e)))for(n=0;n<e.length;n++)gf(e[n])}}function kl(e,n){var t=e.stateNode;if(t===null)return null;var a=t[B]||null;if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(c(231,n,typeof t));return t}var la=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=!1;if(la)try{var Dl={};Object.defineProperty(Dl,"passive",{get:function(){Su=!0}}),window.addEventListener("test",Dl,Dl),window.removeEventListener("test",Dl,Dl)}catch{Su=!1}var Na=null,Tu=null,Hr=null;function vf(){if(Hr)return Hr;var e,n=Tu,t=n.length,a,i="value"in Na?Na.value:Na.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var r=t-e;for(a=1;a<=r&&n[t-a]===i[l-a];a++);return Hr=i.slice(e,1<a?1-a:void 0)}function Yr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Gr(){return!0}function yf(){return!1}function Qn(e){function n(t,a,i,l,r){this._reactName=t,this._targetInst=i,this.type=a,this.nativeEvent=l,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Gr:yf,this.isPropagationStopped=yf,this}return le(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Gr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Gr)},persist:function(){},isPersistent:Gr}),n}var Aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kr=Qn(Aa),jl=le({},Aa,{view:0,detail:0}),sg=Qn(jl),Eu,wu,zl,Vr=le({},jl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zl&&(zl&&e.type==="mousemove"?(Eu=e.screenX-zl.screenX,wu=e.screenY-zl.screenY):wu=Eu=0,zl=e),Eu)},movementY:function(e){return"movementY"in e?e.movementY:wu}}),_f=Qn(Vr),ug=le({},Vr,{dataTransfer:0}),og=Qn(ug),cg=le({},jl,{relatedTarget:0}),xu=Qn(cg),fg=le({},Aa,{animationName:0,elapsedTime:0,pseudoElement:0}),dg=Qn(fg),hg=le({},Aa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mg=Qn(hg),pg=le({},Aa,{data:0}),Sf=Qn(pg),gg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yg(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=vg[e])?!!n[e]:!1}function Ou(){return yg}var _g=le({},jl,{key:function(e){if(e.key){var n=gg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Yr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ou,charCode:function(e){return e.type==="keypress"?Yr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sg=Qn(_g),Tg=le({},Vr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tf=Qn(Tg),Eg=le({},Aa,{submitter:0}),wg=Qn(Eg),xg=le({},jl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ou}),Og=Qn(xg),Ng=le({},Aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ag=Qn(Ng),Mg=le({},Vr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cg=Qn(Mg),Rg=le({},Aa,{newState:0,oldState:0,source:0}),kg=Qn(Rg),Dg=[9,13,27,32],Nu=la&&"CompositionEvent"in window,Bl=null;la&&"documentMode"in document&&(Bl=document.documentMode);var jg=la&&"TextEvent"in window&&!Bl,Ef=la&&(!Nu||Bl&&8<Bl&&11>=Bl),wf=" ",xf=!1;function Of(e,n){switch(e){case"keyup":return Dg.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zi=!1;function zg(e,n){switch(e){case"compositionend":return Nf(n);case"keypress":return n.which!==32?null:(xf=!0,wf);case"textInput":return e=n.data,e===wf&&xf?null:e;default:return null}}function Bg(e,n){if(zi)return e==="compositionend"||!Nu&&Of(e,n)?(e=vf(),Hr=Tu=Na=null,zi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ef&&n.locale!=="ko"?null:n.data;default:return null}}var Lg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Af(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Lg[e.type]:n==="textarea"}function Mf(e,n,t,a){Di?ji?ji.push(a):ji=[a]:Di=a,n=Is(n,"onChange"),0<n.length&&(t=new Kr("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var Ll=null,Ul=null;function Ug(e){gm(e,0)}function Ir(e){var n=Oa(e);if(Te(n))return e}function Cf(e,n){if(e==="change")return n}var Rf=!1;if(la){var Au;if(la){var Mu="oninput"in document;if(!Mu){var kf=document.createElement("div");kf.setAttribute("oninput","return;"),Mu=typeof kf.oninput=="function"}Au=Mu}else Au=!1;Rf=Au&&(!document.documentMode||9<document.documentMode)}function Df(){Ll&&(Ll.detachEvent("onpropertychange",jf),Ul=Ll=null)}function jf(e){if(e.propertyName==="value"&&Ir(Ul)){var n=[];Mf(n,Ul,e,yu(e)),bf(Ug,n)}}function qg(e,n,t){e==="focusin"?(Df(),Ll=n,Ul=t,Ll.attachEvent("onpropertychange",jf)):e==="focusout"&&Df()}function Hg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ir(Ul)}function Yg(e,n){if(e==="click")return Ir(n)}function Gg(e,n){if(e==="input"||e==="change")return Ir(n)}function Kg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ct=typeof Object.is=="function"?Object.is:Kg;function ql(e,n){if(ct(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var i=t[a];if(!Ni.call(n,i)||!ct(e[i],n[i]))return!1}return!0}function Cu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function zf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bf(e,n){var t=zf(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=zf(t)}}function Lf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Lf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Uf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Cu(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Cu(e.document)}return n}function Ru(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Vg=la&&"documentMode"in document&&11>=document.documentMode,Bi=null,ku=null,Hl=null,Du=!1;function qf(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Du||Bi==null||Bi!==Cu(a)||(a=Bi,"selectionStart"in a&&Ru(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Hl&&ql(Hl,a)||(Hl=a,a=Is(ku,"onSelect"),0<a.length&&(n=new Kr("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=Bi)))}function ai(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Li={animationend:ai("Animation","AnimationEnd"),animationiteration:ai("Animation","AnimationIteration"),animationstart:ai("Animation","AnimationStart"),transitionrun:ai("Transition","TransitionRun"),transitionstart:ai("Transition","TransitionStart"),transitioncancel:ai("Transition","TransitionCancel"),transitionend:ai("Transition","TransitionEnd")},ju={},Hf={};la&&(Hf=document.createElement("div").style,"AnimationEvent"in window||(delete Li.animationend.animation,delete Li.animationiteration.animation,delete Li.animationstart.animation),"TransitionEvent"in window||delete Li.transitionend.transition);function ii(e){if(ju[e])return ju[e];if(!Li[e])return e;var n=Li[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Hf)return ju[e]=n[t];return e}var Yf=ii("animationend"),Gf=ii("animationiteration"),Kf=ii("animationstart"),Ig=ii("transitionrun"),Qg=ii("transitionstart"),Xg=ii("transitioncancel"),Vf=ii("transitionend"),If=new Map,zu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zu.push("scrollEnd");function kt(e,n){If.set(e,n),yt(n,[e])}var Zg=0;function ra(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=Bt.identifierPrefix;var t=Zg++;return e="_"+e+"t_"+t.toString(32)+"_",n.autoName=e}function Qf(e){if(e==null||typeof e=="string")return e;var n=null,t=al;if(t!==null)for(var a=0;a<t.length;a++){var i=e[t[a]];if(i!=null){if(i==="none")return"none";n=n==null?i:n+(" "+i)}}return n??e.default}function sa(e,n){return e=Qf(e),n=Qf(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var Qr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},St=[],Ui=0,Bu=0;function Xr(){for(var e=Ui,n=Bu=Ui=0;n<e;){var t=St[n];St[n++]=null;var a=St[n];St[n++]=null;var i=St[n];St[n++]=null;var l=St[n];if(St[n++]=null,a!==null&&i!==null){var r=a.pending;r===null?i.next=i:(i.next=r.next,r.next=i),a.pending=i}l!==0&&Xf(t,i,l)}}function Zr(e,n,t,a){St[Ui++]=e,St[Ui++]=n,St[Ui++]=t,St[Ui++]=a,Bu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Lu(e,n,t,a){return Zr(e,n,t,a),Jr(e)}function li(e,n){return Zr(e,null,null,n),Jr(e)}function Xf(e,n,t){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t);for(var i=!1,l=e.return;l!==null;)l.childLanes|=t,a=l.alternate,a!==null&&(a.childLanes|=t),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(i=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,i&&n!==null&&(i=31-K(t),e=l.hiddenUpdates,a=e[i],a===null?e[i]=[n]:a.push(n),n.lane=t|536870912),l):null}function Jr(e){if(50<ur)throw ur=0,Us=null,Error(c(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var qi={};function Jg(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,n,t,a){return new Jg(e,n,t,a)}function Uu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ua(e,n){var t=e.alternate;return t===null?(t=at(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&1206910976,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Zf(e,n){e.flags&=1206910978;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Fr(e,n,t,a,i,l){var r=0;if(a=e,typeof a=="function")Uu(a)&&(r=1);else if(typeof a=="string")r=E0(e,t,vt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(a){case sn:return e=at(31,t,n,i),e.elementType=sn,e.lanes=l,e;case Ze:return ri(t.children,i,l,n);case un:r=8,i|=24;break;case Kn:return e=at(12,t,n,i|2),e.elementType=Kn,e.lanes=l,e;case se:return e=at(13,t,n,i),e.elementType=se,e.lanes=l,e;case J:return e=at(19,t,n,i),e.elementType=J,e.lanes=l,e;case pn:case b:return e=i|32,e=at(30,t,n,e),e.elementType=b,e.lanes=l,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case on:r=10;break e;case On:r=9;break e;case G:r=11;break e;case Me:r=14;break e;case Se:r=16,a=null;break e}r=29,t=Error(c(130,e===null?"null":typeof e,"")),a=null}return n=at(r,t,n,i),n.elementType=e,n.type=a,n.lanes=l,n}function ri(e,n,t,a){return e=at(7,e,a,n),e.lanes=t,e}function qu(e,n,t){return e=at(6,e,null,n),e.lanes=t,e}function Jf(e){var n=at(18,null,null,0);return n.stateNode=e,n}function Hu(e,n,t){return n=at(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ff=new WeakMap;function Tt(e,n){if(typeof e=="object"&&e!==null){var t=Ff.get(e);return t!==void 0?t:(n={value:e,source:n,stack:Nr(n)},Ff.set(e,n),n)}return{value:e,source:n,stack:Nr(n)}}var Hi=[],Yi=0,Pr=null,Yl=0,Et=[],wt=0,Ma=null,Gt=1,Kt="";function oa(e,n){Hi[Yi++]=Yl,Hi[Yi++]=Pr,Pr=e,Yl=n}function Pf(e,n,t){Et[wt++]=Gt,Et[wt++]=Kt,Et[wt++]=Ma,Ma=e;var a=Gt;e=Kt;var i=32-K(a)-1;a&=~(1<<i),t+=1;var l=32-K(n)+i;if(30<l){var r=i-i%5;l=(a&(1<<r)-1).toString(32),a>>=r,i-=r,Gt=1<<32-K(n)+i|t<<i|a,Kt=l+e}else Gt=1<<l|t<<i|a,Kt=e}function Wr(e){e.return!==null&&(oa(e,1),Pf(e,1,0))}function Yu(e){for(;e===Pr;)Pr=Hi[--Yi],Hi[Yi]=null,Yl=Hi[--Yi],Hi[Yi]=null;for(;e===Ma;)Ma=Et[--wt],Et[wt]=null,Kt=Et[--wt],Et[wt]=null,Gt=Et[--wt],Et[wt]=null}function Wf(e,n){Et[wt++]=Gt,Et[wt++]=Kt,Et[wt++]=Ma,Gt=n.id,Kt=n.overflow,Ma=e}var kn=null,ln=null,Ae=!1,Ca=null,xt=!1,Gu=Error(c(519));function Ra(e){var n=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Gl(Tt(n,e)),Gu}function $f(e){var n=e.stateNode,t=e.type,a=e.memoizedProps;switch(n[An]=e,n[B]=a,t){case"dialog":De("cancel",n),De("close",n);break;case"iframe":case"object":case"embed":De("load",n);break;case"video":case"audio":for(t=0;t<cr.length;t++)De(cr[t],n);break;case"source":De("error",n);break;case"img":case"image":case"link":De("error",n),De("load",n);break;case"details":De("toggle",n);break;case"input":De("invalid",n),Ur(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":De("invalid",n);break;case"textarea":De("invalid",n),hf(n,a.value,a.defaultValue,a.children)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||a.suppressHydrationWarning===!0||_m(n.textContent,t)?(a.popover!=null&&(De("beforetoggle",n),De("toggle",n)),a.onScroll!=null&&De("scroll",n),a.onScrollEnd!=null&&De("scrollend",n),a.onClick!=null&&(n.onclick=Yt),n=!0):n=!1,n||Ra(e,!0)}function $r(e){for(kn=e.return;kn;)switch(kn.tag){case 5:case 31:case 13:xt=!1;return;case 27:case 3:xt=!0;return;default:kn=kn.return}}function Gi(e){if(e!==kn)return!1;if(!Ae)return $r(e),Ae=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||yc(e.type,e.memoizedProps)),t=!t),t&&ln&&Ra(e),$r(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));ln=qm(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));ln=qm(e)}else n===27?(n=ln,Xa(e.type)?(e=Ac,Ac=null,ln=e):ln=n):ln=kn?Nt(e.stateNode.nextSibling):null;return!0}function si(){ln=kn=null,Ae=!1}function Ku(){var e=Ca;return e!==null&&(rt===null?rt=e:rt.push.apply(rt,e),Ca=null),e}function Gl(e){Ca===null?Ca=[e]:Ca.push(e)}var Vu=bt(null),ui=null,ca=null;function ka(e,n,t){$e(Vu,n._currentValue),n._currentValue=t}function fa(e){e._currentValue=Vu.current,Nn(Vu)}function es(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function Iu(e,n,t,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){var r=i.child;l=l.firstContext;e:for(;l!==null;){var o=l;l=i;for(var d=0;d<n.length;d++)if(o.context===n[d]){l.lanes|=t,o=l.alternate,o!==null&&(o.lanes|=t),es(l.return,t,e),a||(r=null);break e}l=o.next}}else if(i.tag===18){if(r=i.return,r===null)throw Error(c(341));r.lanes|=t,l=r.alternate,l!==null&&(l.lanes|=t),es(r,t,e),r=null}else i.tag===13&&i.memoizedState!==null&&i.memoizedState.dehydrated===null?(i.lanes|=t,r=i.alternate,r!==null&&(r.lanes|=t),es(i.return,t,e),r=i.child,r=r!==null?r.sibling:null):r=i.child;if(r!==null)r.return=i;else for(r=i;r!==null;){if(r===e){r=null;break}if(i=r.sibling,i!==null){i.return=r.return,r=i;break}r=r.return}i=r}}function oi(e,n,t,a){e=null;for(var i=n,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var r=i.alternate;if(r===null)throw Error(c(387));if(r=r.memoizedProps,r!==null){var o=i.type;ct(i.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(i===xi.current){if(r=i.alternate,r===null)throw Error(c(387));r.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(hl):e=[hl])}i=i.return}return e!==null&&Iu(n,e,t,a),n.flags|=262144,e!==null}function ns(e){for(e=e.firstContext;e!==null;){if(!ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ci(e){ui=e,ca=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ln(e){return ed(ui,e)}function ts(e,n){return ui===null&&ci(e),ed(e,n)}function ed(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},ca===null){if(e===null)throw Error(c(308));ca=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ca=ca.next=n;return t}var Fg=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,a){e.push(a)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},Pg=s.unstable_scheduleCallback,Wg=s.unstable_NormalPriority,Tn={$$typeof:on,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qu(){return{controller:new Fg,data:new Map,refCount:0}}function Kl(e){e.refCount--,e.refCount===0&&Pg(Wg,function(){e.controller.abort()})}function nd(e,n){if((e.pendingLanes&4194048)!==0){var t=e.transitionTypes;for(t===null&&(t=e.transitionTypes=[]),e=0;e<n.length;e++){var a=n[e];t.indexOf(a)===-1&&t.push(a)}}}var Vl=null;function $g(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var Il=null,Xu=0,fi=0,Ki=null;function e1(e,n){if(Il===null){var t=Il=[];Xu=0,fi=cc(),Ki={status:"pending",value:void 0,then:function(a){t.push(a)}}}return Xu++,n.then(td,td),n}function td(){if(--Xu===0&&(Vl=null,Il!==null)){Ki!==null&&(Ki.status="fulfilled");var e=Il;Il=null,fi=0,Ki=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function n1(e,n){var t=[],a={status:"pending",value:null,reason:null,then:function(i){t.push(i)}};return e.then(function(){a.status="fulfilled",a.value=n;for(var i=0;i<t.length;i++)(0,t[i])(n)},function(i){for(a.status="rejected",a.reason=i,i=0;i<t.length;i++)(0,t[i])(void 0)}),a}var ad=ee.S;ee.S=function(e,n){if(Jh=Vn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&e1(e,n),Vl!==null)for(var t=sl;t!==null;)nd(t,Vl),t=t.next;if(t=e.types,t!==null){for(var a=sl;a!==null;)nd(a,t),a=a.next;if(fi!==0){a=Vl,a===null&&(a=Vl=[]);for(var i=0;i<t.length;i++){var l=t[i];a.indexOf(l)===-1&&a.push(l)}}}ad!==null&&ad(e,n)};var di=bt(null);function Zu(){var e=di.current;return e!==null?e:an.pooledCache}function as(e,n){n===null?$e(di,di.current):$e(di,n.pool)}function id(){var e=Zu();return e===null?null:{parent:Tn._currentValue,pool:e}}var Vi=Error(c(460)),Ju=Error(c(474)),is=Error(c(542)),ls={then:function(){}};function ld(e){return e=e.status,e==="fulfilled"||e==="rejected"}function rd(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(Yt,Yt),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,ud(e),e===void 0&&!("reason"in n)?Error(c(600)):e;default:if(typeof n.status=="string")n.then(Yt,Yt);else{if(e=an,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=n,e.status="pending",e.then(function(a){if(n.status==="pending"){var i=n;i.status="fulfilled",i.value=a}},function(a){if(n.status==="pending"){var i=n;i.status="rejected",i.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,ud(e),e}throw mi=n,Vi}}function hi(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(mi=t,Vi):t}}var mi=null;function sd(){if(mi===null)throw Error(c(459));var e=mi;return mi=null,e}function ud(e){if(e===Vi||e===is)throw Error(c(483))}var Ii=null,Ql=0;function rs(e){var n=Ql;return Ql+=1,Ii===null&&(Ii=[]),rd(Ii,e,n)}function Da(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ss(e,n){throw n.$$typeof===me?Error(c(525)):(e=Object.prototype.toString.call(n),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function od(e){function n(y,p){if(e){var E=y.deletions;E===null?(y.deletions=[p],y.flags|=16):E.push(p)}}function t(y,p){if(!e)return null;for(;p!==null;)n(y,p),p=p.sibling;return null}function a(y){for(var p=new Map;y!==null;)y.key===null?p.set(y.index,y):p.set(y.key,y),y=y.sibling;return p}function i(y,p){return y=ua(y,p),y.index=0,y.sibling=null,y}function l(y,p,E){return y.index=E,e?(E=y.alternate,E!==null?(E=E.index,E<p?(y.flags|=2,p):E):(y.flags|=134217730,p)):(y.flags|=1048576,p)}function r(y){return e&&y.alternate===null&&(y.flags|=134217730),y}function o(y,p,E,A){return p===null||p.tag!==6?(p=qu(E,y.mode,A),p.return=y,p):(p=i(p,E),p.return=y,p)}function d(y,p,E,A){var W=E.type;return W===Ze?(y=O(y,p,E.props.children,A,E.key),Da(y,E),y):p!==null&&(p.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Se&&hi(W)===p.type)?(p=i(p,E.props),Da(p,E),p.return=y,p):(p=Fr(E.type,E.key,E.props,null,y.mode,A),Da(p,E),p.return=y,p)}function _(y,p,E,A){return p===null||p.tag!==4||p.stateNode.containerInfo!==E.containerInfo||p.stateNode.implementation!==E.implementation?(p=Hu(E,y.mode,A),p.return=y,p):(p=i(p,E.children||[]),p.return=y,p)}function O(y,p,E,A,W){return p===null||p.tag!==7?(p=ri(E,y.mode,A,W),p.return=y,p):(p=i(p,E),p.return=y,p)}function C(y,p,E){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return p=qu(""+p,y.mode,E),p.return=y,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Oe:return E=Fr(p.type,p.key,p.props,null,y.mode,E),Da(E,p),E.return=y,E;case _e:return p=Hu(p,y.mode,E),p.return=y,p;case Se:return p=hi(p),C(y,p,E)}if(Ne(p)||F(p))return p=ri(p,y.mode,E,null),p.return=y,p;if(typeof p.then=="function")return C(y,rs(p),E);if(p.$$typeof===on)return C(y,ts(y,p),E);ss(y,p)}return null}function v(y,p,E,A){var W=p!==null?p.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return W!==null?null:o(y,p,""+E,A);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Oe:return E.key===W?d(y,p,E,A):null;case _e:return E.key===W?_(y,p,E,A):null;case Se:return E=hi(E),v(y,p,E,A)}if(Ne(E)||F(E))return W!==null?null:O(y,p,E,A,null);if(typeof E.then=="function")return v(y,p,rs(E),A);if(E.$$typeof===on)return v(y,p,ts(y,E),A);ss(y,E)}return null}function w(y,p,E,A,W){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return y=y.get(E)||null,o(p,y,""+A,W);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Oe:return y=y.get(A.key===null?E:A.key)||null,d(p,y,A,W);case _e:return y=y.get(A.key===null?E:A.key)||null,_(p,y,A,W);case Se:return A=hi(A),w(y,p,E,A,W)}if(Ne(A)||F(A))return y=y.get(E)||null,O(p,y,A,W,null);if(typeof A.then=="function")return w(y,p,E,rs(A),W);if(A.$$typeof===on)return w(y,p,E,ts(p,A),W);ss(p,A)}return null}function V(y,p,E,A){for(var W=null,ze=null,re=p,ce=p=0,xn=null;re!==null&&ce<E.length;ce++){re.index>ce?(xn=re,re=null):xn=re.sibling;var qe=v(y,re,E[ce],A);if(qe===null){re===null&&(re=xn);break}e&&re&&qe.alternate===null&&n(y,re),p=l(qe,p,ce),ze===null?W=qe:ze.sibling=qe,ze=qe,re=xn}if(ce===E.length)return t(y,re),Ae&&oa(y,ce),W;if(re===null){for(;ce<E.length;ce++)re=C(y,E[ce],A),re!==null&&(p=l(re,p,ce),ze===null?W=re:ze.sibling=re,ze=re);return Ae&&oa(y,ce),W}for(re=a(re);ce<E.length;ce++)xn=w(re,y,ce,E[ce],A),xn!==null&&(e&&(qe=xn.alternate,qe!==null&&re.delete(qe.key===null?ce:qe.key)),p=l(xn,p,ce),ze===null?W=xn:ze.sibling=xn,ze=xn);return e&&re.forEach(function(Wa){return n(y,Wa)}),Ae&&oa(y,ce),W}function ne(y,p,E,A){if(E==null)throw Error(c(151));for(var W=null,ze=null,re=p,ce=p=0,xn=null,qe=E.next();re!==null&&!qe.done;ce++,qe=E.next()){re.index>ce?(xn=re,re=null):xn=re.sibling;var Wa=v(y,re,qe.value,A);if(Wa===null){re===null&&(re=xn);break}e&&re&&Wa.alternate===null&&n(y,re),p=l(Wa,p,ce),ze===null?W=Wa:ze.sibling=Wa,ze=Wa,re=xn}if(qe.done)return t(y,re),Ae&&oa(y,ce),W;if(re===null){for(;!qe.done;ce++,qe=E.next())qe=C(y,qe.value,A),qe!==null&&(p=l(qe,p,ce),ze===null?W=qe:ze.sibling=qe,ze=qe);return Ae&&oa(y,ce),W}for(re=a(re);!qe.done;ce++,qe=E.next())qe=w(re,y,ce,qe.value,A),qe!==null&&(e&&(xn=qe.alternate,xn!==null&&re.delete(xn.key===null?ce:xn.key)),p=l(qe,p,ce),ze===null?W=qe:ze.sibling=qe,ze=qe);return e&&re.forEach(function(z0){return n(y,z0)}),Ae&&oa(y,ce),W}function we(y,p,E,A){if(typeof E=="object"&&E!==null&&E.type===Ze&&E.key===null&&E.props.ref===void 0&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Oe:e:{for(var W=E.key;p!==null;){if(p.key===W){if(W=E.type,W===Ze){if(p.tag===7){t(y,p.sibling),A=i(p,E.props.children),Da(A,E),A.return=y,y=A;break e}}else if(p.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Se&&hi(W)===p.type){t(y,p.sibling),A=i(p,E.props),Da(A,E),A.return=y,y=A;break e}t(y,p);break}else n(y,p);p=p.sibling}E.type===Ze?(A=ri(E.props.children,y.mode,A,E.key),Da(A,E),A.return=y,y=A):(A=Fr(E.type,E.key,E.props,null,y.mode,A),Da(A,E),A.return=y,y=A)}return r(y);case _e:e:{for(W=E.key;p!==null;){if(p.key===W)if(p.tag===4&&p.stateNode.containerInfo===E.containerInfo&&p.stateNode.implementation===E.implementation){t(y,p.sibling),A=i(p,E.children||[]),A.return=y,y=A;break e}else{t(y,p);break}else n(y,p);p=p.sibling}A=Hu(E,y.mode,A),A.return=y,y=A}return r(y);case Se:return E=hi(E),we(y,p,E,A)}if(Ne(E))return V(y,p,E,A);if(F(E)){if(W=F(E),typeof W!="function")throw Error(c(150));return E=W.call(E),ne(y,p,E,A)}if(typeof E.then=="function")return we(y,p,rs(E),A);if(E.$$typeof===on)return we(y,p,ts(y,E),A);ss(y,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,p!==null&&p.tag===6?(t(y,p.sibling),A=i(p,E),A.return=y,y=A):(t(y,p),A=qu(E,y.mode,A),A.return=y,y=A),r(y)):t(y,p)}return function(y,p,E,A){try{Ql=0;var W=we(y,p,E,A);return Ii=null,W}catch(re){if(re===Vi||re===is)throw re;var ze=at(29,re,null,y.mode);return ze.lanes=A,ze.return=y,ze}}}var pi=od(!0),cd=od(!1),ja=!1;function Fu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ba(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ie&2)!==0){var i=a.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n,n=Jr(e),Xf(e,null,t),n}return Zr(e,a,n,t),Jr(e)}function Xl(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Rt(e,t)}}function Wu(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var r={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};l===null?i=l=r:l=l.next=r,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:a.shared,callbacks:a.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var $u=!1;function Zl(){if($u){var e=Ki;if(e!==null)throw e}}function Jl(e,n,t,a){$u=!1;var i=e.updateQueue;ja=!1;var l=i.firstBaseUpdate,r=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var d=o,_=d.next;d.next=null,r===null?l=_:r.next=_,r=d;var O=e.alternate;O!==null&&(O=O.updateQueue,o=O.lastBaseUpdate,o!==r&&(o===null?O.firstBaseUpdate=_:o.next=_,O.lastBaseUpdate=d))}if(l!==null){var C=i.baseState;r=0,O=_=d=null,o=l;do{var v=o.lane&-536870913,w=v!==o.lane;if(w?(je&v)===v:(a&v)===v){v!==0&&v===fi&&($u=!0),O!==null&&(O=O.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var V=e,ne=o;v=n;var we=t;switch(ne.tag){case 1:if(V=ne.payload,typeof V=="function"){C=V.call(we,C,v);break e}C=V;break e;case 3:V.flags=V.flags&-65537|128;case 0:if(V=ne.payload,v=typeof V=="function"?V.call(we,C,v):V,v==null)break e;C=le({},C,v);break e;case 2:ja=!0}}v=o.callback,v!==null&&(e.flags|=64,w&&(e.flags|=8192),w=i.callbacks,w===null?i.callbacks=[v]:w.push(v))}else w={lane:v,tag:o.tag,payload:o.payload,callback:o.callback,next:null},O===null?(_=O=w,d=C):O=O.next=w,r|=v;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;w=o,o=w.next,w.next=null,i.lastBaseUpdate=w,i.shared.pending=null}}while(!0);O===null&&(d=C),i.baseState=d,i.firstBaseUpdate=_,i.lastBaseUpdate=O,l===null&&(i.shared.lanes=0),Ka|=r,e.lanes=r,e.memoizedState=C}}function fd(e,n){if(typeof e!="function")throw Error(c(191,e));e.call(n)}function dd(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)fd(t[e],n)}var La=bt(null),us=bt(0);function hd(e,n){e=ga,$e(us,e),$e(La,n),ga=e|n.baseLanes}function eo(){$e(us,ga),$e(La,La.current)}function no(){ga=us.current,Nn(La),Nn(us)}var Un=bt(null),In=null;function Ua(e){var n=e.alternate;$e(qn,qn.current&1),$e(Un,e),In===null&&(n===null||La.current!==null||n.memoizedState!==null)&&(In=e)}function to(e){$e(qn,qn.current),$e(Un,e),In===null&&(In=e)}function md(e){e.tag===22?($e(qn,qn.current),$e(Un,e),In===null&&(In=e)):qa()}function qa(){$e(qn,qn.current),$e(Un,Un.current)}function ft(e){Nn(Un),In===e&&(In=null),Nn(qn)}var qn=bt(0);function Fl(e,n){$e(Un,Un.current),$e(qn,n)}function ao(e){Nn(qn),Nn(Un),In===e&&(In=null)}function os(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Oc(t)||Nc(t)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var da=0,Ee=null,nn=null,En=null,cs=!1,Qi=!1,gi=!1,fs=0,Pl=0,Xi=null,t1=0;function hn(){throw Error(c(321))}function io(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!ct(e[t],n[t]))return!1;return!0}function lo(e,n,t,a,i,l){return da=l,Ee=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ee.H=e===null||e.memoizedState===null?Pd:Wd,gi=!1,l=t(a,i),gi=!1,Qi&&(l=gd(n,t,a,i)),pd(e),l}function pd(e){ee.H=vs;var n=nn!==null&&nn.next!==null;if(da=0,En=nn=Ee=null,cs=!1,Pl=0,Xi=null,n)throw Error(c(300));e===null||wn||(e=e.dependencies,e!==null&&ns(e)&&(wn=!0))}function gd(e,n,t,a){Ee=e;var i=0;do{if(Qi&&(Xi=null),Pl=0,Qi=!1,25<=i)throw Error(c(301));if(i+=1,En=nn=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}ee.H=c1,l=n(t,a)}while(Qi);return l}function a1(){var e=ee.H,n=e.useState()[0];return n=typeof n.then=="function"?Wl(n):n,e=e.useState()[0],(nn!==null?nn.memoizedState:null)!==e&&(Ee.flags|=1024),n}function ro(){var e=fs!==0;return fs=0,e}function so(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function uo(e){if(cs){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}cs=!1}da=0,En=nn=Ee=null,Qi=!1,Pl=fs=0,Xi=null}function Xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return En===null?Ee.memoizedState=En=e:En=En.next=e,En}function bn(){if(nn===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=nn.next;var n=En===null?Ee.memoizedState:En.next;if(n!==null)En=n,nn=e;else{if(e===null)throw Ee.alternate===null?Error(c(467)):Error(c(310));nn=e,e={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},En===null?Ee.memoizedState=En=e:En=En.next=e}return En}function ds(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wl(e){var n=Pl;return Pl+=1,Xi===null&&(Xi=[]),e=rd(Xi,e,n),n=Ee,(En===null?n.memoizedState:En.next)===null&&(n=n.alternate,ee.H=n===null||n.memoizedState===null?Pd:Wd),e}function hs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Wl(e);if(e.$$typeof===j)return;if(e.$$typeof===on)return Ln(e)}throw Error(c(438,String(e)))}function oo(e){var n=null,t=Ee.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var a=Ee.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(i){return i.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=ds(),Ee.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),a=0;a<e;a++)t[a]=ut;return n.index++,t}function ha(e,n){return typeof n=="function"?n(e):n}function ms(e){var n=bn();return co(n,nn,e)}function co(e,n,t){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=t;var i=e.baseQueue,l=a.pending;if(l!==null){if(i!==null){var r=i.next;i.next=l.next,l.next=r}n.baseQueue=i=l,a.pending=null}if(l=e.baseState,i===null)e.memoizedState=l;else{n=i.next;var o=r=null,d=null,_=n,O=!1;do{var C=_.lane&-536870913;if(C!==_.lane?(je&C)===C:(da&C)===C){var v=_.revertLane;if(v===0)d!==null&&(d=d.next={lane:0,revertLane:0,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),C===fi&&(O=!0);else if((da&v)===v){_=_.next,v===fi&&(O=!0);continue}else C={lane:0,revertLane:_.revertLane,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},d===null?(o=d=C,r=l):d=d.next=C,Ee.lanes|=v,Ka|=v;C=_.action,gi&&t(l,C),l=_.hasEagerState?_.eagerState:t(l,C)}else v={lane:C,revertLane:_.revertLane,gesture:_.gesture,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},d===null?(o=d=v,r=l):d=d.next=v,Ee.lanes|=C,Ka|=C;_=_.next}while(_!==null&&_!==n);if(d===null?r=l:d.next=o,!ct(l,e.memoizedState)&&(wn=!0,O&&(t=Ki,t!==null)))throw t;e.memoizedState=l,e.baseState=r,e.baseQueue=d,a.lastRenderedState=l}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function fo(e){var n=bn(),t=n.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var a=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var r=i=i.next;do l=e(l,r.action),r=r.next;while(r!==i);ct(l,n.memoizedState)||(wn=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,a]}function bd(e,n,t){var a=Ee,i=bn(),l=Ae;if(l){if(t===void 0)throw Error(c(407));t=t()}else t=n();var r=!ct((nn||i).memoizedState,t);if(r&&(i.memoizedState=t,wn=!0),i=i.queue,po(_d.bind(null,a,i,e),[e]),e=i.getSnapshot!==n||r||En!==null&&(En.memoizedState.tag&1)!==0,Zi(e?9:8,{destroy:void 0},yd.bind(null,a,i,t,n),null),e){if(a.flags|=2048,an===null)throw Error(c(349));l||(da&127)!==0||vd(a,n,t)}return t}function vd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Ee.updateQueue,n===null?(n=ds(),Ee.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function yd(e,n,t,a){n.value=t,n.getSnapshot=a,Sd(n)&&Td(e)}function _d(e,n,t){return t(function(){Sd(n)&&Td(e)})}function Sd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!ct(e,t)}catch{return!0}}function Td(e){var n=li(e,2);n!==null&&st(n,e,2)}function ho(e){var n=Xn();if(typeof e=="function"){var t=e;if(e=t(),gi){P(!0);try{t()}finally{P(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:e},n}function Ed(e,n,t,a){return e.baseState=t,co(e,nn,typeof a=="function"?a:ha)}function i1(e,n,t,a,i){if(bs(e))throw Error(c(485));if(e=n.action,e!==null){var l={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){l.listeners.push(r)}};ee.T!==null?t(!0):l.isTransition=!1,a(l),t=n.pending,t===null?(l.next=n.pending=l,wd(n,l)):(l.next=t.next,n.pending=t.next=l)}}function wd(e,n){var t=n.action,a=n.payload,i=e.state;if(n.isTransition){var l=ee.T,r={};r.types=l!==null?l.types:null,ee.T=r;try{var o=t(i,a),d=ee.S;d!==null&&d(r,o),xd(e,n,o)}catch(_){mo(e,n,_)}finally{l!==null&&r.types!==null&&(l.types=r.types),ee.T=l}}else try{l=t(i,a),xd(e,n,l)}catch(_){mo(e,n,_)}}function xd(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){Od(e,n,a)},function(a){return mo(e,n,a)}):Od(e,n,t)}function Od(e,n,t){n.status="fulfilled",n.value=t,Nd(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,wd(e,t)))}function mo(e,n,t){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=t,Nd(n),n=n.next;while(n!==a)}e.action=null}function Nd(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Ad(e,n){return n}function Md(e,n){if(Ae){var t=an.formState;if(t!==null){e:{var a=Ee;if(Ae){if(ln){n:{for(var i=ln,l=xt;i.nodeType!==8;){if(!l){i=null;break n}if(i=Nt(i.nextSibling),i===null){i=null;break n}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){ln=Nt(i.nextSibling),a=i.data==="F!";break e}}Ra(a)}a=!1}a&&(n=t[0])}}return t=Xn(),t.memoizedState=t.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ad,lastRenderedState:n},t.queue=a,t=Zd.bind(null,Ee,a),a.dispatch=t,a=ho(!1),l=_o.bind(null,Ee,!1,a.queue),a=Xn(),i={state:n,dispatch:null,action:e,pending:null},a.queue=i,t=i1.bind(null,Ee,i,l,t),i.dispatch=t,a.memoizedState=e,[n,t,!1]}function Cd(e){var n=bn();return Rd(n,nn,e)}function Rd(e,n,t){if(n=co(e,n,Ad)[0],e=ms(ha)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var a=Wl(n)}catch(r){throw r===Vi?is:r}else a=n;n=bn();var i=n.queue,l=i.dispatch;return t!==n.memoizedState&&(Ee.flags|=2048,Zi(9,{destroy:void 0},l1.bind(null,i,t),null)),[a,l,e]}function l1(e,n){e.action=n}function kd(e){var n=bn(),t=nn;if(t!==null)return Rd(n,t,e);bn(),n=n.memoizedState,t=bn();var a=t.queue.dispatch;return t.memoizedState=e,[n,a,!1]}function Zi(e,n,t,a){return e={tag:e,create:t,deps:a,inst:n,next:null},n=Ee.updateQueue,n===null&&(n=ds(),Ee.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e),e}function Dd(){return bn().memoizedState}function ps(e,n,t,a){var i=Xn();Ee.flags|=e,i.memoizedState=Zi(1|n,{destroy:void 0},t,a===void 0?null:a)}function gs(e,n,t,a){var i=bn();a=a===void 0?null:a;var l=i.memoizedState.inst;nn!==null&&a!==null&&io(a,nn.memoizedState.deps)?i.memoizedState=Zi(n,l,t,a):(Ee.flags|=e,i.memoizedState=Zi(1|n,l,t,a))}function jd(e,n){ps(8390656,8,e,n)}function po(e,n){gs(2048,8,e,n)}function r1(e){Ee.flags|=4;var n=Ee.updateQueue;if(n===null)n=ds(),Ee.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function zd(e){var n=bn().memoizedState;return r1({ref:n,nextImpl:e}),function(){if((Ie&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}function Bd(e,n){return gs(4,2,e,n)}function Ld(e,n){return gs(4,4,e,n)}function Ud(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function qd(e,n,t){t=t!=null?t.concat([e]):null,gs(4,4,Ud.bind(null,n,e),t)}function go(){}function Hd(e,n){var t=bn();n=n===void 0?null:n;var a=t.memoizedState;return n!==null&&io(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function Yd(e,n){var t=bn();n=n===void 0?null:n;var a=t.memoizedState;if(n!==null&&io(n,a[1]))return a[0];if(a=e(),gi){P(!0);try{e()}finally{P(!1)}}return t.memoizedState=[a,n],a}function bo(e,n,t){return t===void 0||(da&1073741824)!==0&&(je&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=Ph(),Ee.lanes|=e,Ka|=e,t)}function Gd(e,n,t,a){return ct(t,n)?t:La.current!==null?(e=bo(e,t,a),ct(e,n)||(wn=!0),e):(da&106)===0||(da&1073741824)!==0&&(je&261930)===0?(wn=!0,e.memoizedState=t):(e=Ph(),Ee.lanes|=e,Ka|=e,n)}function Kd(e,n,t,a,i){var l=oe.p;oe.p=l!==0&&8>l?l:8;var r=ee.T,o={};o.types=r!==null?r.types:null,ee.T=o,_o(e,!1,n,t);try{var d=i(),_=ee.S;if(_!==null&&_(o,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var O=n1(d,a);$l(e,n,O,pt(e))}else $l(e,n,a,pt(e))}catch(C){$l(e,n,{then:function(){},status:"rejected",reason:C},pt())}finally{oe.p=l,r!==null&&o.types!==null&&(r.types=o.types),ee.T=r}}function s1(){}function vo(e,n,t,a){if(e.tag!==5)throw Error(c(476));var i=Vd(e).queue;Kd(e,i,n,Wn,t===null?s1:function(){return Id(e),t(a)})}function Vd(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Wn,baseState:Wn,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:Wn},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Id(e){var n=Vd(e);n.next===null&&(n=e.alternate.memoizedState),$l(e,n.next.queue,{},pt())}function yo(){return Ln(hl)}function Qd(){return bn().memoizedState}function Xd(){return bn().memoizedState}function u1(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=pt();e=za(t);var a=Ba(n,e,t);a!==null&&(st(a,n,t),Xl(a,n,t)),n={cache:Qu()},e.payload=n;return}n=n.return}}function o1(e,n,t){var a=pt();t={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},bs(e)?Jd(n,t):(t=Lu(e,n,t,a),t!==null&&(st(t,e,a),Fd(t,n,a)))}function Zd(e,n,t){var a=pt();$l(e,n,t,a)}function $l(e,n,t,a){var i={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(bs(e))Jd(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var r=n.lastRenderedState,o=l(r,t);if(i.hasEagerState=!0,i.eagerState=o,ct(o,r))return Zr(e,n,i,0),an===null&&Xr(),!1}catch{}if(t=Lu(e,n,i,a),t!==null)return st(t,e,a),Fd(t,n,a),!0}return!1}function _o(e,n,t,a){if(a={lane:2,revertLane:cc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},bs(e)){if(n)throw Error(c(479))}else n=Lu(e,t,a,2),n!==null&&st(n,e,2)}function bs(e){var n=e.alternate;return e===Ee||n!==null&&n===Ee}function Jd(e,n){Qi=cs=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Fd(e,n,t){if((t&4194048)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Rt(e,t)}}var vs={readContext:Ln,use:hs,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useLayoutEffect:hn,useInsertionEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useSyncExternalStore:hn,useId:hn,useHostTransitionStatus:hn,useFormState:hn,useActionState:hn,useOptimistic:hn,useMemoCache:hn,useCacheRefresh:hn,useEffectEvent:hn},Pd={readContext:Ln,use:hs,useCallback:function(e,n){return Xn().memoizedState=[e,n===void 0?null:n],e},useContext:Ln,useEffect:jd,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,ps(4194308,4,Ud.bind(null,n,e),t)},useLayoutEffect:function(e,n){return ps(4194308,4,e,n)},useInsertionEffect:function(e,n){ps(4,2,e,n)},useMemo:function(e,n){var t=Xn();n=n===void 0?null:n;var a=e();if(gi){P(!0);try{e()}finally{P(!1)}}return t.memoizedState=[a,n],a},useReducer:function(e,n,t){var a=Xn();if(t!==void 0){var i=t(n);if(gi){P(!0);try{t(n)}finally{P(!1)}}}else i=n;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=o1.bind(null,Ee,e),[a.memoizedState,e]},useRef:function(e){var n=Xn();return e={current:e},n.memoizedState=e},useState:function(e){e=ho(e);var n=e.queue,t=Zd.bind(null,Ee,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:go,useDeferredValue:function(e,n){var t=Xn();return bo(t,e,n)},useTransition:function(){var e=ho(!1);return e=Kd.bind(null,Ee,e.queue,!0,!1),Xn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var a=Ee,i=Xn();if(Ae){if(t===void 0)throw Error(c(407));t=t()}else{if(t=n(),an===null)throw Error(c(349));(je&127)!==0||vd(a,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,jd(_d.bind(null,a,l,e),[e]),a.flags|=2048,Zi(9,{destroy:void 0},yd.bind(null,a,l,t,n),null),t},useId:function(){var e=Xn(),n=an.identifierPrefix;if(Ae){var t=Kt,a=Gt;t=(a&~(1<<32-K(a)-1)).toString(32)+t,n="_"+n+"R_"+t,t=fs++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=t1++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:yo,useFormState:Md,useActionState:Md,useOptimistic:function(e){var n=Xn();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=_o.bind(null,Ee,!0,t),t.dispatch=n,[e,n]},useMemoCache:oo,useCacheRefresh:function(){return Xn().memoizedState=u1.bind(null,Ee)},useEffectEvent:function(e){var n=Xn(),t={impl:e};return n.memoizedState=t,function(){if((Ie&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}},Wd={readContext:Ln,use:hs,useCallback:Hd,useContext:Ln,useEffect:po,useImperativeHandle:qd,useInsertionEffect:Bd,useLayoutEffect:Ld,useMemo:Yd,useReducer:ms,useRef:Dd,useState:function(){return ms(ha)},useDebugValue:go,useDeferredValue:function(e,n){var t=bn();return Gd(t,nn.memoizedState,e,n)},useTransition:function(){var e=ms(ha)[0],n=bn().memoizedState;return[typeof e=="boolean"?e:Wl(e),n]},useSyncExternalStore:bd,useId:Qd,useHostTransitionStatus:yo,useFormState:Cd,useActionState:Cd,useOptimistic:function(e,n){var t=bn();return Ed(t,nn,e,n)},useMemoCache:oo,useCacheRefresh:Xd,useEffectEvent:zd},c1={readContext:Ln,use:hs,useCallback:Hd,useContext:Ln,useEffect:po,useImperativeHandle:qd,useInsertionEffect:Bd,useLayoutEffect:Ld,useMemo:Yd,useReducer:fo,useRef:Dd,useState:function(){return fo(ha)},useDebugValue:go,useDeferredValue:function(e,n){var t=bn();return nn===null?bo(t,e,n):Gd(t,nn.memoizedState,e,n)},useTransition:function(){var e=fo(ha)[0],n=bn().memoizedState;return[typeof e=="boolean"?e:Wl(e),n]},useSyncExternalStore:bd,useId:Qd,useHostTransitionStatus:yo,useFormState:kd,useActionState:kd,useOptimistic:function(e,n){var t=bn();return nn!==null?Ed(t,nn,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:oo,useCacheRefresh:Xd,useEffectEvent:zd};function So(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:le({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var To={enqueueSetState:function(e,n,t){e=e._reactInternals;var a=pt(),i=za(a);i.payload=n,t!=null&&(i.callback=t),n=Ba(e,i,a),n!==null&&(st(n,e,a),Xl(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=pt(),i=za(a);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Ba(e,i,a),n!==null&&(st(n,e,a),Xl(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=pt(),a=za(t);a.tag=2,n!=null&&(a.callback=n),n=Ba(e,a,t),n!==null&&(st(n,e,t),Xl(n,e,t))}};function $d(e,n,t,a,i,l,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,l,r):n.prototype&&n.prototype.isPureReactComponent?!ql(t,a)||!ql(i,l):!0}function eh(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&To.enqueueReplaceState(n,n.state,null)}function bi(e,n){var t=n;if("ref"in n){t={};for(var a in n)a!=="ref"&&(t[a]=n[a])}if(e=e.defaultProps){t===n&&(t=le({},t));for(var i in e)t[i]===void 0&&(t[i]=e[i])}return t}function nh(e){Qr(e)}function th(e){console.error(e)}function ah(e){Qr(e)}function ys(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function ih(e,n,t){try{var a=e.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Eo(e,n,t){return t=za(t),t.tag=3,t.payload={element:null},t.callback=function(){ys(e,n)},t}function lh(e){return e=za(e),e.tag=3,e}function rh(e,n,t,a){var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var l=a.value;e.payload=function(){return i(l)},e.callback=function(){ih(n,t,a)}}var r=t.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){ih(n,t,a),typeof i!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var o=a.stack;this.componentDidCatch(a.value,{componentStack:o!==null?o:""})})}function f1(e,n,t,a,i){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=t.alternate,n!==null&&oi(n,t,i,!0),t=Un.current,t!==null){switch(t.tag){case 31:case 13:case 19:return In===null?Hs():t.alternate===null&&mn===0&&(mn=3),t.flags&=-257,t.flags|=65536,t.lanes=i,a===ls?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([a]):n.add(a),sc(e,a,i)),!1;case 22:return t.flags|=65536,a===ls?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([a]):t.add(a)),sc(e,a,i)),!1}throw Error(c(435,t.tag))}return sc(e,a,i),Hs(),!1}if(Ae)return n=Un.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=i,a!==Gu&&(e=Error(c(422),{cause:a}),Gl(Tt(e,t)))):(a!==Gu&&(n=Error(c(423),{cause:a}),Gl(Tt(n,t))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=Tt(a,t),i=Eo(e.stateNode,a,i),Wu(e,i),mn!==4&&(mn=2)),!1;var l=Error(c(520),{cause:a});if(l=Tt(l,t),sr===null?sr=[l]:sr.push(l),mn!==4&&(mn=2),n===null)return!0;a=Tt(a,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=i&-i,t.lanes|=e,e=Eo(t.stateNode,a,e),Wu(t,e),!1;case 1:if(n=t.type,l=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(Va===null||!Va.has(l))))return t.flags|=65536,i&=-i,t.lanes|=i,i=lh(i),rh(i,e,t,a),Wu(t,i),!1;break;case 22:if(t.memoizedState!==null)return t.flags|=65536,!1}t=t.return}while(t!==null);return!1}var wo=Error(c(461)),wn=!1;function Mn(e,n,t,a){n.child=e===null?cd(n,null,t,a):pi(n,e.child,t,a)}function sh(e,n,t,a,i){t=t.render;var l=n.ref;if("ref"in a){var r={};for(var o in a)o!=="ref"&&(r[o]=a[o])}else r=a;return ci(n),a=lo(e,n,t,r,l,i),o=ro(),e!==null&&!wn?(so(e,n,i),ma(e,n,i)):(Ae&&o&&Wr(n),n.flags|=1,Mn(e,n,a,i),n.child)}function uh(e,n,t,a,i){if(e===null){var l=t.type;return typeof l=="function"&&!Uu(l)&&l.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=l,oh(e,n,l,a,i)):(e=Fr(t.type,null,a,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!ko(e,i)){var r=l.memoizedProps;if(t=t.compare,t=t!==null?t:ql,t(r,a)&&e.ref===n.ref)return ma(e,n,i)}return n.flags|=1,e=ua(l,a),e.ref=n.ref,e.return=n,n.child=e}function oh(e,n,t,a,i){if(e!==null){var l=e.memoizedProps;if(ql(l,a)&&e.ref===n.ref)if(wn=!1,n.pendingProps=a=l,ko(e,i))(e.flags&131072)!==0&&(wn=!0);else return n.lanes=e.lanes,ma(e,n,i)}return xo(e,n,t,a,i)}function ch(e,n,t,a){var i=a.children,l=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((n.flags&128)!==0){if(l=l!==null?l.baseLanes|t:t,e!==null){for(a=n.child=e.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;a=i&~l}else a=0,n.child=null;return fh(e,n,l,t,a)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&as(n,l!==null?l.cachePool:null),l!==null?hd(n,l):eo(),md(n);else return a=n.lanes=536870912,fh(e,n,l!==null?l.baseLanes|t:t,t,a)}else l!==null?(as(n,l.cachePool),hd(n,l),qa(),n.memoizedState=null):(e!==null&&as(n,null),eo(),qa());return Mn(e,n,i,t),n.child}function er(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function fh(e,n,t,a,i){var l=Zu();return l=l===null?null:{parent:Tn._currentValue,pool:l},n.memoizedState={baseLanes:t,cachePool:l},e!==null&&as(n,null),eo(),md(n),e!==null&&oi(e,n,a,!0),n.childLanes=i,null}function _s(e,n){return n=Ss({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function dh(e,n,t){return pi(n,e.child,null,t),e=_s(n,n.pendingProps),e.flags|=2,ft(n),n.memoizedState=null,e}function d1(e,n,t){var a=n.pendingProps,i=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ae){if(a.mode==="hidden")return e=_s(n,a),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},er(null,e);if(to(n),(e=ln)?(e=Um(e,xt),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ma!==null?{id:Gt,overflow:Kt}:null,retryLane:536870912,hydrationErrors:null},t=Jf(e),t.return=n,n.child=t,kn=n,ln=null)):e=null,e===null)throw Ra(n);return n.lanes=536870912,null}return _s(n,a)}var l=e.memoizedState;if(l!==null){var r=l.dehydrated;if(to(n),i)if(n.flags&256)n.flags&=-257,n=dh(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(c(558));else if(wn||oi(e,n,t,!1),i=(t&e.childLanes)!==0,wn||i){if(La.current===null){if(a=an,a!==null&&(r=Ml(a,t),r!==0&&r!==l.retryLane))throw l.retryLane=r,li(e,r),st(a,e,r),wo;Hs()}n=dh(e,n,t)}else e=l.treeContext,ln=Nt(r.nextSibling),kn=n,Ae=!0,Ca=null,xt=!1,e!==null&&Wf(n,e),n=_s(n,a),n.flags|=134221824;return n}return e=ua(e.child,{mode:a.mode,children:a.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ji(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(c(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function xo(e,n,t,a,i){return ci(n),t=lo(e,n,t,a,void 0,i),a=ro(),e!==null&&!wn?(so(e,n,i),ma(e,n,i)):(Ae&&a&&Wr(n),n.flags|=1,Mn(e,n,t,i),n.child)}function hh(e,n,t,a,i,l){return ci(n),n.updateQueue=null,t=gd(n,a,t,i),pd(e),a=ro(),e!==null&&!wn?(so(e,n,l),ma(e,n,l)):(Ae&&a&&Wr(n),n.flags|=1,Mn(e,n,t,l),n.child)}function mh(e,n,t,a,i){if(ci(n),n.stateNode===null){var l=qi,r=t.contextType;typeof r=="object"&&r!==null&&(l=Ln(r)),l=new t(a,l),n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=To,n.stateNode=l,l._reactInternals=n,l=n.stateNode,l.props=a,l.state=n.memoizedState,l.refs={},Fu(n),r=t.contextType,l.context=typeof r=="object"&&r!==null?Ln(r):qi,l.state=n.memoizedState,r=t.getDerivedStateFromProps,typeof r=="function"&&(So(n,t,r,a),l.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(r=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),r!==l.state&&To.enqueueReplaceState(l,l.state,null),Jl(n,a,l,i),Zl(),l.state=n.memoizedState),typeof l.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(e===null){l=n.stateNode;var o=n.memoizedProps,d=bi(t,o);l.props=d;var _=l.context,O=t.contextType;r=qi,typeof O=="object"&&O!==null&&(r=Ln(O));var C=t.getDerivedStateFromProps;O=typeof C=="function"||typeof l.getSnapshotBeforeUpdate=="function",o=n.pendingProps!==o,O||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o||_!==r)&&eh(n,l,a,r),ja=!1;var v=n.memoizedState;l.state=v,Jl(n,a,l,i),Zl(),_=n.memoizedState,o||v!==_||ja?(typeof C=="function"&&(So(n,t,C,a),_=n.memoizedState),(d=ja||$d(n,t,d,a,v,_,r))?(O||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=_),l.props=a,l.state=_,l.context=r,a=d):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{l=n.stateNode,Pu(e,n),r=n.memoizedProps,O=bi(t,r),l.props=O,C=n.pendingProps,v=l.context,_=t.contextType,d=qi,typeof _=="object"&&_!==null&&(d=Ln(_)),o=t.getDerivedStateFromProps,(_=typeof o=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(r!==C||v!==d)&&eh(n,l,a,d),ja=!1,v=n.memoizedState,l.state=v,Jl(n,a,l,i),Zl();var w=n.memoizedState;r!==C||v!==w||ja||e!==null&&e.dependencies!==null&&ns(e.dependencies)?(typeof o=="function"&&(So(n,t,o,a),w=n.memoizedState),(O=ja||$d(n,t,O,a,v,w,d)||e!==null&&e.dependencies!==null&&ns(e.dependencies))?(_||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,w,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,w,d)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||r===e.memoizedProps&&v===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&v===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=w),l.props=a,l.state=w,l.context=d,a=O):(typeof l.componentDidUpdate!="function"||r===e.memoizedProps&&v===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&v===e.memoizedState||(n.flags|=1024),a=!1)}return l=a,Ji(e,n),a=(n.flags&128)!==0,l||a?(l=n.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:l.render(),n.flags|=1,e!==null&&a?(n.child=pi(n,e.child,null,i),n.child=pi(n,null,t,i)):Mn(e,n,t,i),n.memoizedState=l.state,e=n.child):e=ma(e,n,i),e}function ph(e,n,t,a){return si(),n.flags|=256,Mn(e,n,t,a),n.child}var Oo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function No(e){return{baseLanes:e,cachePool:id()}}function Ao(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=mt),e}function gh(e,n,t){var a=n.pendingProps,i=!1,l=(n.flags&128)!==0,r;if((r=l)||(r=e!==null&&e.memoizedState===null?!1:(qn.current&2)!==0),r&&(i=!0,n.flags&=-129),r=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ae){if(i?Ua(n):qa(),(e=ln)?(e=Um(e,xt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ma!==null?{id:Gt,overflow:Kt}:null,retryLane:536870912,hydrationErrors:null},t=Jf(e),t.return=n,n.child=t,kn=n,ln=null)):e=null,e===null)throw Ra(n);return Nc(e)?n.lanes=32:n.lanes=536870912,null}return l=a.children,a=a.fallback,i?(qa(),i=n.mode,l=Ss({mode:"hidden",children:l},i),a=ri(a,i,t,null),l.return=n,a.return=n,l.sibling=a,n.child=l,a=n.child,a.memoizedState=No(t),a.childLanes=Ao(e,r,t),n.memoizedState=Oo,er(null,a)):(Ua(n),Mo(n,l))}var o=e.memoizedState;if(o!==null){var d=o.dehydrated;if(d!==null)return h1(e,n,l,r,a,d,o,t)}return i?(qa(),i=a.fallback,l=n.mode,o=e.child,d=o.sibling,a=ua(o,{mode:"hidden",children:a.children}),a.subtreeFlags=o.subtreeFlags&1206910976,d!==null?i=ua(d,i):(i=ri(i,l,t,null),i.flags|=2),i.return=n,a.return=n,a.sibling=i,n.child=a,er(null,a),a=n.child,i=e.child.memoizedState,i===null?i=No(t):(l=i.cachePool,l!==null?(o=Tn._currentValue,l=l.parent!==o?{parent:o,pool:o}:l):l=id(),i={baseLanes:i.baseLanes|t,cachePool:l}),a.memoizedState=i,a.childLanes=Ao(e,r,t),n.memoizedState=Oo,er(e.child,a)):(Ua(n),t=e.child,e=t.sibling,t=ua(t,{mode:"visible",children:a.children}),t.return=n,t.sibling=null,e!==null&&(r=n.deletions,r===null?(n.deletions=[e],n.flags|=16):r.push(e)),n.child=t,n.memoizedState=null,t)}function Mo(e,n){return n=Ss({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ss(e,n){return e=at(22,e,null,n),e.lanes=0,e}function Ts(e,n,t){return pi(n,e.child,null,t),e=Mo(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function h1(e,n,t,a,i,l,r,o){if(t)return n.flags&256?(Ua(n),n.flags&=-257,Ts(e,n,o)):n.memoizedState!==null?(qa(),n.child=e.child,n.flags|=128,null):(qa(),l=i.fallback,r=n.mode,i=Ss({mode:"visible",children:i.children},r),l=ri(l,r,o,null),l.flags|=2,i.return=n,l.return=n,i.sibling=l,n.child=i,pi(n,e.child,null,o),i=n.child,i.memoizedState=No(o),i.childLanes=Ao(e,a,o),n.memoizedState=Oo,er(null,i));if(Ua(n),Nc(l)){if(a=l.nextSibling&&l.nextSibling.dataset,a)var d=a.dgst;return a=d,a!==""&&(i=Error(c(419)),i.stack="",i.digest=a,Gl({value:i,source:null,stack:null})),Ts(e,n,o)}if(wn||oi(e,n,o,!1),a=(o&e.childLanes)!==0,wn||a){if(La.current!==null)return Ts(e,n,o);if(a=an,a!==null&&(i=Ml(a,o),i!==0&&i!==r.retryLane))throw r.retryLane=i,li(e,i),st(a,e,i),wo;return Oc(l)||Hs(),Ts(e,n,o)}return Oc(l)?(n.flags|=192,n.child=e.child,null):(e=r.treeContext,ln=Nt(l.nextSibling),kn=n,Ae=!0,Ca=null,xt=!1,e!==null&&Wf(n,e),n=Mo(n,i.children),n.flags|=134221824,n)}function bh(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),es(e.return,n,t)}function vh(e){for(var n=null;e!==null;){var t=e.alternate;t!==null&&os(t)===null&&(n=e),e=e.sibling}return n}function Es(e,n,t,a,i,l){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:i,treeForkCount:l}:(r.isBackwards=n,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=t,r.tailMode=i,r.treeForkCount=l)}function Co(e){var n=e.child;for(e.child=null;n!==null;){var t=n.sibling;n.sibling=e.child,e.child=n,n=t}}function Ro(e,n,t){var a=n.pendingProps,i=a.revealOrder,l=a.tail;a=a.children;var r=qn.current;if(n.flags&128)return Fl(n,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,n.flags|=128):r&=1,Fl(n,r),i==="backwards"&&e!==null?(Co(e),Mn(e,n,a,t),Co(e)):Mn(e,n,a,t),a=Ae?Yl:0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bh(e,t,n);else if(e.tag===19)bh(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"backwards":t=vh(n.child),t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null,Co(n)),Es(n,!0,i,null,l,a);break;case"unstable_legacy-backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&os(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Es(n,!0,t,null,l,a);break;case"together":Es(n,!1,null,null,void 0,a);break;case"independent":n.memoizedState=null;break;default:t=vh(n.child),t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Es(n,!1,i,t,l,a)}return n.child}function yh(e,n,t){var a=n.pendingProps;return ka(n,n.type,a.value),Mn(e,n,a.children,t),n.child}function ma(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Ka|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(oi(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(c(153));if(n.child!==null){for(e=n.child,t=ua(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=ua(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function ko(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ns(e)))}function m1(e,n,t){switch(n.tag){case 3:ei(n,n.stateNode.containerInfo),ka(n,Tn,e.memoizedState.cache),si();break;case 27:case 5:Oi(n);break;case 4:ei(n,n.stateNode.containerInfo);break;case 10:ka(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,to(n),null;break;case 13:var a=n.memoizedState;if(a!==null){if(a.dehydrated!==null)return Ua(n),n.flags|=128,null;a=oi(e,n,t,!1);var i=n.child.childLanes;return a||(t&i)!==0?gh(e,n,t):(Ua(n),e=ma(e,n,t),e!==null?e.sibling:null)}Ua(n);break;case 19:if(n.flags&128)return Ro(e,n,t);if(i=(e.flags&128)!==0,a=(t&n.childLanes)!==0,a||(oi(e,n,t,!1),a=(t&n.childLanes)!==0),i){if(a)return Ro(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Fl(n,qn.current),a)break;return null;case 22:return n.lanes=0,ch(e,n,t,n.pendingProps);case 24:ka(n,Tn,e.memoizedState.cache)}return ma(e,n,t)}function _h(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)wn=!0;else{if(!ko(e,t)&&(n.flags&128)===0)return wn=!1,m1(e,n,t);wn=(e.flags&131072)!==0}else wn=!1,Ae&&(n.flags&1048576)!==0&&Pf(n,Yl,n.index);switch(n.lanes=0,n.tag){case 16:e:{var a=n.pendingProps;if(e=hi(n.elementType),n.type=e,typeof e=="function")Uu(e)?(a=bi(e,a),n.tag=1,n=mh(null,n,e,a,t)):(n.tag=0,n=xo(null,n,e,a,t));else{if(e!=null){var i=e.$$typeof;if(i===G){n.tag=11,n=sh(null,n,e,a,t);break e}else if(i===Me){n.tag=14,n=uh(null,n,e,a,t);break e}else if(i===on){n.tag=10,n.type=e,n=yh(null,n,t);break e}}throw n=Re(e)||e,Error(c(306,n,""))}}return n;case 0:return xo(e,n,n.type,n.pendingProps,t);case 1:return a=n.type,i=bi(a,n.pendingProps),mh(e,n,a,i,t);case 3:e:{if(ei(n,n.stateNode.containerInfo),e===null)throw Error(c(387));a=n.pendingProps;var l=n.memoizedState;i=l.element,Pu(e,n),Jl(n,a,null,t);var r=n.memoizedState;if(a=r.cache,ka(n,Tn,a),a!==l.cache&&Iu(n,[Tn],t,!0),Zl(),a=r.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:r.cache},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){n=ph(e,n,a,t);break e}else if(a!==i){i=Tt(Error(c(424)),n),Gl(i),n=ph(e,n,a,t);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ln=Nt(e.firstChild),kn=n,Ae=!0,Ca=null,xt=!0,t=cd(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|134221824,t=t.sibling;else{if(si(),a===i){n=ma(e,n,t);break e}Mn(e,n,a,t)}n=n.child}return n;case 26:return Ji(e,n),e===null?(t=Im(n.type,null,n.pendingProps,null))?n.memoizedState=t:Ae||(n.stateNode=wm(n.type,n.pendingProps,Ut.current,n)):n.memoizedState=Im(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Oi(n),e===null&&Ae&&(a=n.stateNode=Ym(n.type,n.pendingProps,Ut.current),kn=n,xt=!0,i=ln,Xa(n.type)?(Ac=i,ln=Nt(a.firstChild)):ln=i),Mn(e,n,n.pendingProps.children,t),Ji(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ae&&((i=a=ln)&&(a=u0(a,n.type,n.pendingProps,xt),a!==null?(n.stateNode=a,kn=n,ln=Nt(a.firstChild),xt=!1,i=!0):i=!1),i||Ra(n)),Oi(n),i=n.type,l=n.pendingProps,r=e!==null?e.memoizedProps:null,a=l.children,yc(i,l)?a=null:r!==null&&yc(i,r)&&(n.flags|=32),n.memoizedState!==null&&(i=lo(e,n,a1,null,null,t),hl._currentValue=i),Ji(e,n),Mn(e,n,a,t),n.child;case 6:return e===null&&Ae&&((e=t=ln)&&(t=o0(t,n.pendingProps,xt),t!==null?(n.stateNode=t,kn=n,ln=null,e=!0):e=!1),e||Ra(n)),null;case 13:return gh(e,n,t);case 4:return ei(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=pi(n,null,a,t):Mn(e,n,a,t),n.child;case 11:return sh(e,n,n.type,n.pendingProps,t);case 7:return a=n.pendingProps,Ji(e,n),Mn(e,n,a,t),n.child;case 8:return Mn(e,n,n.pendingProps.children,t),n.child;case 12:return Mn(e,n,n.pendingProps.children,t),n.child;case 10:return yh(e,n,t);case 9:return i=n.type._context,a=n.pendingProps.children,ci(n),i=Ln(i),a=a(i),n.flags|=1,Mn(e,n,a,t),n.child;case 14:return uh(e,n,n.type,n.pendingProps,t);case 15:return oh(e,n,n.type,n.pendingProps,t);case 19:return Ro(e,n,t);case 31:return d1(e,n,t);case 22:return ch(e,n,t,n.pendingProps);case 24:return ci(n),a=Ln(Tn),e===null?(i=Zu(),i===null&&(i=an,l=Qu(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=t),i=l),n.memoizedState={parent:a,cache:i},Fu(n),ka(n,Tn,i)):((e.lanes&t)!==0&&(Pu(e,n),Jl(n,null,null,t),Zl()),i=e.memoizedState,l=n.memoizedState,i.parent!==a?(i={parent:a,cache:a},n.memoizedState=i,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=i),ka(n,Tn,a)):(a=l.cache,ka(n,Tn,a),a!==i.cache&&Iu(n,[Tn],t,!0))),Mn(e,n,n.pendingProps.children,t),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),a=n.pendingProps,a.name!=null&&a.name!=="auto"?n.flags|=e===null?18882560:18874368:Ae&&Wr(n),e!==null&&e.memoizedProps.name!==a.name?n.flags|=4194816:Ji(e,n),Mn(e,n,a.children,t),n.child;case 29:throw n.pendingProps}throw Error(c(156,n.tag))}function pa(e){e.flags|=4}function Do(e,n,t,a,i){var l;if((l=(e.mode&32)!==0)&&(l=t===null?Jm(n,a):Jm(n,a)&&(a.src!==t.src||a.srcSet!==t.srcSet)),l){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(nm())e.flags|=8192;else throw mi=ls,Ju}else e.flags&=-16777217}function Sh(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Fm(n))if(nm())e.flags|=8192;else throw mi=ls,Ju}function ws(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Al():536870912,e.lanes|=n,el|=n)}function nr(e,n){if(!Ae)switch(e.tailMode){case"visible":break;case"collapsed":for(var t=e.tail,a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null;break;default:for(n=e.tail,t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null}}function rn(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags&1206910976,a|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function p1(e,n,t){var a=n.pendingProps;switch(Yu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(n),null;case 1:return rn(n),null;case 3:return t=n.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),fa(Tn),$n(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Gi(n)?pa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ku())),rn(n),null;case 26:var i=n.type,l=n.memoizedState;return e===null?(pa(n),l!==null?(rn(n),Sh(n,l)):(rn(n),Do(n,i,null,a,t))):l?l!==e.memoizedState?(pa(n),rn(n),Sh(n,l)):(rn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==a&&pa(n),rn(n),Do(n,i,e,a,t)),null;case 27:if(Mt(n),t=Ut.current,i=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&pa(n);else{if(!a){if(n.stateNode===null)throw Error(c(166));return rn(n),n.subtreeFlags&=-33554433,null}e=vt.current,Gi(n)?$f(n):(e=Ym(i,a,t),n.stateNode=e,pa(n))}return rn(n),n.subtreeFlags&=-33554433,null;case 5:if(Mt(n),i=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&pa(n);else{if(!a){if(n.stateNode===null)throw Error(c(166));return rn(n),n.subtreeFlags&=-33554433,null}if(l=vt.current,Gi(n))$f(n);else{var r=dr(Ut.current);switch(l){case 1:l=r.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:l=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":l=r.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":l=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":l=r.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof a.is=="string"?r.createElement("select",{is:a.is}):r.createElement("select"),a.multiple?l.multiple=!0:a.size&&(l.size=a.size);break;default:l=typeof a.is=="string"?r.createElement(i,{is:a.is}):r.createElement(i)}}l[An]=n,l[B]=a;e:for(r=n.child;r!==null;){if(r.tag===5||r.tag===6)l.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}n.stateNode=l;e:switch(Yn(l,i,a),i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&pa(n)}}return rn(n),n.subtreeFlags&=-33554433,Do(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==a&&pa(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(c(166));if(e=Ut.current,Gi(n)){if(e=n.stateNode,t=n.memoizedProps,a=null,i=kn,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[An]=n,e=!!(e.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||_m(e.nodeValue,t)),e||Ra(n,!0)}else e=dr(e).createTextNode(a),e[An]=n,n.stateNode=e}return rn(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(a=Gi(n),t!==null){if(e===null){if(!a)throw Error(c(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[An]=n}else si(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;rn(n),e=!1}else t=Ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(ft(n),n):(ft(n),null);if((n.flags&128)!==0)throw Error(c(558))}return rn(n),null;case 13:if(a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Gi(n),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(c(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[An]=n}else si(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;rn(n),i=!1}else i=Ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return n.flags&256?(ft(n),n):(ft(n),null)}return ft(n),(n.flags&128)!==0?(n.lanes=t,n):(t=a!==null,e=e!==null&&e.memoizedState!==null,t&&(a=n.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==i&&(a.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),ws(n,n.updateQueue),rn(n),null);case 4:return $n(),e===null&&mc(n.stateNode.containerInfo),n.flags|=67108864,rn(n),null;case 10:return fa(n.type),rn(n),null;case 19:if(ao(n),a=n.memoizedState,a===null)return rn(n),null;if(i=(n.flags&128)!==0,l=a.rendering,l===null)if(i)nr(a,!1);else{if(mn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(l=os(e),l!==null){for(n.flags|=128,nr(a,!1),e=l.updateQueue,n.updateQueue=e,ws(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)Zf(t,e),t=t.sibling;return Fl(n,qn.current&1|2),Ae&&oa(n,a.treeForkCount),n.child}e=e.sibling}a.tail!==null&&Vn()>Bs&&(n.flags|=128,i=!0,nr(a,!1),n.lanes=4194304)}else{if(!i)if(e=os(l),e!==null){if(n.flags|=128,i=!0,e=e.updateQueue,n.updateQueue=e,ws(n,e),nr(a,!0),a.tail===null&&a.tailMode!=="collapsed"&&a.tailMode!=="visible"&&!l.alternate&&!Ae)return rn(n),null}else 2*Vn()-a.renderingStartTime>Bs&&t!==536870912&&(n.flags|=128,i=!0,nr(a,!1),n.lanes=4194304);a.isBackwards?(l.sibling=n.child,n.child=l):(e=a.last,e!==null?e.sibling=l:n.child=l,a.last=l)}if(a.tail!==null){e=a.tail;e:{for(t=e;t!==null;){if(t.alternate!==null){t=!1;break e}t=t.sibling}t=!0}return a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Vn(),e.sibling=null,l=qn.current,l=i?l&1|2:l&1,a.tailMode==="visible"||a.tailMode==="collapsed"||!t||Ae?Fl(n,l):(t=l,$e(Un,n),$e(qn,t),In===null&&(In=n)),Ae&&oa(n,a.treeForkCount),e}return rn(n),null;case 22:case 23:return ft(n),no(),a=n.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(t&536870912)!==0&&(n.flags&128)===0&&(rn(n),n.subtreeFlags&6&&(n.flags|=8192)):rn(n),t=n.updateQueue,t!==null&&ws(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==t&&(n.flags|=2048),e!==null&&Nn(di),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),fa(Tn),rn(n),null;case 25:return null;case 30:return n.flags|=33554432,rn(n),null}throw Error(c(156,n.tag))}function g1(e,n){switch(Yu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return fa(Tn),$n(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Mt(n),null;case 31:if(n.memoizedState!==null){if(ft(n),n.alternate===null)throw Error(c(340));si()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ft(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(c(340));si()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ao(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return $n(),null;case 10:return fa(n.type),null;case 22:case 23:return ft(n),no(),e!==null&&Nn(di),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return fa(Tn),null;case 25:return null;default:return null}}function Th(e,n){switch(Yu(n),n.tag){case 3:fa(Tn),$n();break;case 26:case 27:case 5:Mt(n);break;case 4:$n();break;case 31:n.memoizedState!==null&&ft(n);break;case 13:ft(n);break;case 19:ao(n);break;case 10:fa(n.type);break;case 22:case 23:ft(n),no(),e!==null&&Nn(di);break;case 24:fa(Tn)}}function tr(e,n){try{var t=n.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var i=a.next;t=i;do{if((t.tag&e)===e){a=void 0;var l=t.create,r=t.inst;a=l(),r.destroy=a}t=t.next}while(t!==i)}}catch(o){Pe(n,n.return,o)}}function Ha(e,n,t){try{var a=n.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&e)===e){var r=a.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,i=n;var d=t,_=o;try{_()}catch(O){Pe(i,d,O)}}}a=a.next}while(a!==l)}}catch(O){Pe(n,n.return,O)}}function Eh(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{dd(n,t)}catch(a){Pe(e,e.return,a)}}}function wh(e,n,t){t.props=bi(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(a){Pe(e,n,a)}}function Vt(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:var i=e.stateNode,l=ra(e.memoizedProps,i);(i.ref===null||i.ref.name!==l)&&(i.ref=Rm(l)),a=i.ref;break;case 7:if(e.stateNode===null){var r=new gt(e);g(e.child,!1,r0,r,void 0,void 0),e.stateNode=r}a=e.stateNode;break;default:a=e.stateNode}typeof t=="function"?e.refCleanup=t(a):t.current=a}}catch(o){Pe(e,n,o)}}function Hn(e,n){var t=e.ref,a=e.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(i){Pe(e,n,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(i){Pe(e,n,i)}else t.current=null}function xs(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var t=0;t<n.length;t++)Lm(e.stateNode,n[t])}function xh(e){for(var n=e.return;n!==null&&(zo(n)&&Lm(e.stateNode,n.stateNode),!jo(n));)n=n.return}function ar(e){for(var n=e.return;n!==null&&(zo(n)&&s0(e.stateNode,n.stateNode),!jo(n));)n=n.return}function jo(e){return e.tag===5||e.tag===3||e.tag===27}function zo(e){return e&&e.tag===7&&e.stateNode!==null}function Bo(e){var n=e.type,t=e.memoizedProps,a=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break e;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(i){Pe(e,e.return,i)}}function Lo(e,n,t){try{var a=e.stateNode;G1(a,e.type,t,n),a[B]=n}catch(i){Pe(e,e.return,i)}}function Oh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Xa(e.type)||e.tag===4}function Uo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Oh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Xa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qo(e,n,t,a){var i=e.tag;if(i===5||i===6)i=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(i,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(i),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Yt)),xs(e,a),Ue=!0;else if(i!==4&&(i===27&&(xs(e,a),a=null,Xa(e.type)&&(t=e.stateNode,n=null)),e=e.child,e!==null))for(qo(e,n,t,a),e=e.sibling;e!==null;)qo(e,n,t,a),e=e.sibling}function Os(e,n,t,a){var i=e.tag;if(i===5||i===6)i=e.stateNode,n?t.insertBefore(i,n):t.appendChild(i),xs(e,a),Ue=!0;else if(i!==4&&(i===27&&(xs(e,a),a=null,Xa(e.type)&&(t=e.stateNode)),e=e.child,e!==null))for(Os(e,n,t,a),e=e.sibling;e!==null;)Os(e,n,t,a),e=e.sibling}function Nh(e){var n=e.stateNode,t=e.memoizedProps;try{for(var a=e.type,i=n.attributes;i.length;)n.removeAttributeNode(i[0]);Yn(n,a,t),n[An]=e,n[B]=t}catch(l){Pe(e,e.return,l)}}var Ns=!1,dt=null;function Ah(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Ns=!0)}var It=null;function Mh(){var e=It;return It=null,e}var it=0;function Fi(e,n,t,a,i){return it=0,Ch(e.child,n,t,a,i)}function Ch(e,n,t,a,i){for(var l=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(a!==null){var o=Tc(r);a.push(o),o.view&&(l=!0)}else l||Tc(r).view&&(l=!0);Ns=!0,Mm(r,it===0?n:n+"_"+it,t),it++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&i||Ch(e.child,n,t,a,i)&&(l=!0));e=e.sibling}return l}function Qt(e,n){for(;e!==null;)e.tag===5?Cm(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||Qt(e.child,n)),e=e.sibling}function As(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(As(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(c(544));var t=n.name;n=sa(n.default,n.share),n!=="none"&&(Fi(e,t,n,null,!1)||Qt(e.child,!1))}e=e.sibling}}function Ho(e,n){if(e.tag===30){var t=e.stateNode,a=e.memoizedProps,i=ra(a,t),l=sa(a.default,t.paired?a.share:a.enter);l!=="none"?Fi(e,i,l,null,!1)?(As(e),t.paired||n||il(e,a.onEnter)):Qt(e.child,!1):As(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ho(e,n),e=e.sibling;else As(e)}function Yo(e){if(dt!==null&&dt.size!==0){var n=dt;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.memoizedProps,a=t.name;if(a!=null&&a!=="auto"){var i=n.get(a);if(i!==void 0){var l=sa(t.default,t.share);if(l!=="none"&&(Fi(e,a,l,null,!1)?(l=e.stateNode,i.paired=l,l.paired=i,il(e,t.onShare)):Qt(e.child,!1)),n.delete(a),n.size===0)break}}}Yo(e)}e=e.sibling}}}function Go(e){if(e.tag===30){var n=e.memoizedProps,t=ra(n,e.stateNode),a=dt!==null?dt.get(t):void 0,i=sa(n.default,a!==void 0?n.share:n.exit);i!=="none"&&(Fi(e,t,i,null,!1)?a!==void 0?(i=e.stateNode,a.paired=i,i.paired=a,dt.delete(t),il(e,n.onShare)):il(e,n.onExit):Qt(e.child,!1)),dt!==null&&Yo(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Go(e),e=e.sibling;else dt!==null&&Yo(e)}function Rh(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,t=ra(n,e.stateNode);n=sa(n.default,n.update),e.flags&=-5,n!=="none"&&Fi(e,t,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Rh(e);e=e.sibling}}function Ko(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,Qt(e.child,!1))}Ko(e)}e=e.sibling}}function Ms(e){if(e.tag===30)e.stateNode.paired=null,Qt(e.child,!1),Ko(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ms(e),e=e.sibling;else Ko(e)}function kh(e){for(e=e.child;e!==null;)e.tag===30?Qt(e.child,!1):(e.subtreeFlags&33554432)!==0&&kh(e),e=e.sibling}function Vo(e,n,t,a,i,l,r){for(var o=!1;n!==null;){if(n.tag===5){var d=n.stateNode;if(l!==null&&it<l.length){var _=l[it],O=Tc(d);(_.view||O.view)&&(o=!0);var C;if(C=(e.flags&4)===0)if(O.clip)C=!0;else{C=_.rect;var v=O.rect;C=C.y!==v.y||C.x!==v.x||C.height!==v.height||C.width!==v.width}C&&(e.flags|=4),O.abs?O=!_.abs:(_=_.rect,O=O.rect,O=_.height!==O.height||_.width!==O.width),O&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&Mm(d,it===0?t:t+"_"+it,i),o&&(e.flags&4)!==0||(It===null&&(It=[]),It.push(d,it===0?a:a+"_"+it,n.memoizedProps)),it++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&r?e.flags|=n.flags&32:Vo(e,n.child,t,a,i,l,r)&&(o=!0));n=n.sibling}return o}function Dh(e,n){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,a=e.stateNode,i=ra(t,a),l=sa(t.default,t.update),r;r=e.memoizedState,e.memoizedState=null,a=e;var o=e.child;it=0,i=Vo(a,o,i,i,l,r,!1),(e.flags&4)!==0&&i&&il(e,t.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Dh(e);e=e.sibling}}var Dn=!1,Xe=!1,Xt=!1,Io=!1,jh=typeof WeakSet=="function"?WeakSet:Set,jn=null,Zt=!1,ir=!1,Cs=!1,Qo=!1;function b1(e,n,t){if(e=e.containerInfo,bc=ml,e=Uf(e),Ru(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var l=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var o=0,d=-1,_=-1,O=0,C=0,v=e,w=null;n:for(;;){for(var V;v!==a||l!==0&&v.nodeType!==3||(d=o+l),v!==r||i!==0&&v.nodeType!==3||(_=o+i),v.nodeType===3&&(o+=v.nodeValue.length),(V=v.firstChild)!==null;)w=v,v=V;for(;;){if(v===e)break n;if(w===a&&++O===l&&(d=o),w===r&&++C===i&&(_=o),(V=v.nextSibling)!==null)break;v=w,w=v.parentNode}v=V}a=d===-1||_===-1?null:{start:d,end:_}}else a=null}a=a||{start:0,end:0}}else a=null;for(vc={focusedElem:e,selectionRange:a},ml=!1,t=(t&335544064)===t,jn=n,n=t?9270:1024;jn!==null;){if(e=jn,t&&(a=e.deletions,a!==null))for(l=0;l<a.length;l++)t&&Go(a[l]);if(e.alternate===null&&(e.flags&2)!==0)t&&Ah(e),Rs(t);else{if(e.tag===22){if(a=e.alternate,e.memoizedState!==null){a!==null&&a.memoizedState===null&&t&&Go(a),Rs(t);continue}else if(a!==null&&a.memoizedState!==null){t&&Ah(e),Rs(t);continue}}a=e.child,(e.subtreeFlags&n)!==0&&a!==null?(a.return=e,jn=a):(t&&Rh(e),Rs(t))}}dt=null}function Rs(e){for(;jn!==null;){var n=jn,t=e,a=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((i&1024)!==0&&a!==null){t=void 0,i=a.memoizedProps,a=a.memoizedState;var l=n.stateNode;try{var r=bi(n.type,i);t=l.getSnapshotBeforeUpdate(r,a),l.__reactInternalSnapshotBeforeUpdate=t}catch(o){Pe(n,n.return,o)}}break;case 3:if((i&1024)!==0){if(a=n.stateNode.containerInfo,t=a.nodeType,t===9)xc(a);else if(t===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":xc(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:t&&a!==null&&(t=ra(a.memoizedProps,a.stateNode),i=n.memoizedProps,i=sa(i.default,i.update),i!=="none"&&Fi(a,t,i,a.memoizedState=[],!0));break;default:if((i&1024)!==0)throw Error(c(163))}if(a=n.sibling,a!==null){a.return=n.return,jn=a;break}jn=n.return}}function zh(e,n,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Jt(e,t),a&4&&tr(5,t);break;case 1:if(Jt(e,t),a&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(r){Pe(t,t.return,r)}else{var i=bi(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(i,n,e.__reactInternalSnapshotBeforeUpdate)}catch(r){Pe(t,t.return,r)}}a&64&&Eh(t),a&512&&Vt(t,t.return);break;case 3:if(Jt(e,t),a&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{dd(e,n)}catch(r){Pe(t,t.return,r)}}break;case 27:n===null&&a&4&&Nh(t);case 26:case 5:Jt(e,t),n===null&&a&4&&Bo(t),a&512&&Vt(t,t.return);break;case 12:Jt(e,t);break;case 31:Jt(e,t),a&4&&qh(e,t);break;case 13:Jt(e,t),a&4&&Hh(e,t),a&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=M1.bind(null,t),c0(e,t))));break;case 22:if(a=t.memoizedState!==null||Dn,!a){var l=n!==null&&n.memoizedState!==null||Xe;n=Dn,i=Xe,Dn=a,(Xe=l)&&!i?(a=2,(t.subtreeFlags&8772)!==0&&(a|=1),zt(e,t,a)):Jt(e,t),Dn=n,Xe=i}break;case 30:Jt(e,t),a&512&&Vt(t,t.return);break;case 7:a&512&&Vt(t,t.return);default:Jt(e,t)}}function Xo(e,n){for(e=e.child;e!==null;)Bh(e,n),e=e.sibling}function Bh(e,n){switch(e.tag){case 5:case 26:try{var t=e.stateNode;if(n){var a=t.style;typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"}else{var i=e.stateNode,l=e.memoizedProps.style,r=l!=null&&l.hasOwnProperty("display")?l.display:null;i.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(d){Pe(e,e.return,d)}Zo(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,Ue=!0}catch(d){Pe(e,e.return,d)}break;case 18:try{var o=e.stateNode;n?Am(o,!0):Am(e.stateNode,!1)}catch(d){Pe(e,e.return,d)}break;case 22:case 23:e.memoizedState===null&&Xo(e,n);break;default:Xo(e,n)}}function Zo(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var t=e,a=n;switch(t.tag){case 4:Bh(t,a);break e;case 22:t.memoizedState===null&&Zo(t,a);break e;default:Zo(t,a)}}e=e.sibling}}function Lh(e){var n=e.alternate;n!==null&&(e.alternate=null,Lh(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Cn(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var cn=null,lt=!1;function Dt(e,n,t){for(t=t.child;t!==null;)Uh(e,n,t),t=t.sibling}function Uh(e,n,t){if(Le&&typeof Le.onCommitFiberUnmount=="function")try{Le.onCommitFiberUnmount(tn,t)}catch{}switch(t.tag){case 26:Xe||Hn(t,n),Dt(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&!Xe&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Xe||Hn(t,n),ar(t);var a=cn,i=lt;Xa(t.type)&&(cn=t.stateNode,lt=!1),Dt(e,n,t),Gm(t.stateNode,t.type,t.memoizedProps),cn=a,lt=i;break;case 5:Xe||Hn(t,n),ar(t);case 6:if(t.tag===6&&ar(t),a=cn,i=lt,cn=null,Dt(e,n,t),cn=a,lt=i,cn!==null)if(lt)try{(cn.nodeType===9?cn.body:cn.nodeName==="HTML"?cn.ownerDocument.body:cn).removeChild(t.stateNode),Ue=!0}catch(l){Pe(t,n,l)}else try{cn.removeChild(t.stateNode),Ue=!0}catch(l){Pe(t,n,l)}break;case 18:cn!==null&&(lt?(e=cn,Nm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),pl(e)):Nm(cn,t.stateNode));break;case 4:a=cn,i=lt,cn=t.stateNode.containerInfo,lt=!0,Dt(e,n,t),cn=a,lt=i;break;case 0:case 11:case 14:case 15:Ha(2,t,n),Xe||Ha(4,t,n),Dt(e,n,t);break;case 1:Xe||(Hn(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"&&wh(t,n,a)),Dt(e,n,t);break;case 21:Dt(e,n,t);break;case 22:Xe=(a=Xe)||t.memoizedState!==null,Dt(e,n,t),Xe=a;break;case 30:Hn(t,n),Dt(e,n,t);break;case 7:Xe||Hn(t,n),Dt(e,n,t);break;default:Dt(e,n,t)}}function qh(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{pl(e)}catch(t){Pe(n,n.return,t)}}}function Hh(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{pl(e)}catch(t){Pe(n,n.return,t)}}function v1(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new jh),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new jh),n;default:throw Error(c(435,e.tag))}}function ks(e,n){var t=v1(e);n.forEach(function(a){if(!t.has(a)){t.add(a);var i=C1.bind(null,e,a);a.then(i,i)}})}function Zn(e,n,t){var a=n.deletions;if(a!==null)for(var i=0;i<a.length;i++){var l=a[i],r=e,o=n,d=o;e:for(;d!==null;){switch(d.tag){case 27:if(Xa(d.type)){cn=d.stateNode,lt=!1;break e}break;case 5:cn=d.stateNode,lt=!1;break e;case 3:case 4:cn=d.stateNode.containerInfo,lt=!0;break e}d=d.return}if(cn===null)throw Error(c(160));Uh(r,o,l),cn=null,lt=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Yh(n,e,t),n=n.sibling}var jt=null;function Yh(e,n,t){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(i&4&&(a=e.updateQueue,a=a!==null?a.events:null,a!==null))for(var l=0;l<a.length;l++){var r=a[l];r.ref.impl=r.nextImpl}Zn(n,e,t),Jn(e),i&4&&(Ha(3,e,e.return),tr(3,e),Ha(5,e,e.return));break;case 1:Zn(n,e,t),Jn(e),i&512&&(Xe||a===null||Hn(a,a.return)),i&64&&Dn&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?n:t.concat(n))));break;case 26:if(l=jt,Zn(n,e,t),Jn(e),i&512&&(Xe||a===null||Hn(a,a.return)),i&4)if(i=a!==null?a.memoizedState:null,t=e.memoizedState,a===null)if(t===null)if(e.stateNode===null)if(Dn)e.stateNode=wm(e.type,e.memoizedProps,n.containerInfo,e);else{e:{n=e.type,t=e.memoizedProps,i=l.ownerDocument||l;n:switch(n){case"title":a=i.getElementsByTagName("title")[0],(!a||a[tt]||a[An]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=i.createElement(n),i.head.insertBefore(a,i.querySelector("head > title"))),Yn(a,n,t),a[An]=e,_n(a),n=a;break e;case"link":if(l=Zm("link","href",i).get(n+(t.href||""))){for(r=0;r<l.length;r++)if(a=l[r],a.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&a.getAttribute("rel")===(t.rel==null?null:t.rel)&&a.getAttribute("title")===(t.title==null?null:t.title)&&a.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){l.splice(r,1);break n}}a=i.createElement(n),Yn(a,n,t),i.head.appendChild(a);break;case"meta":if(l=Zm("meta","content",i).get(n+(t.content||""))){for(r=0;r<l.length;r++)if(a=l[r],a.getAttribute("content")===(t.content==null?null:""+t.content)&&a.getAttribute("name")===(t.name==null?null:t.name)&&a.getAttribute("property")===(t.property==null?null:t.property)&&a.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&a.getAttribute("charset")===(t.charSet==null?null:t.charSet)){l.splice(r,1);break n}}a=i.createElement(n),Yn(a,n,t),i.head.appendChild(a);break;default:throw Error(c(468,n))}a[An]=e,_n(a),n=a}e.stateNode=n}else Dn||kc(l,e.type,e.stateNode);else e.stateNode=Xm(l,t,e.memoizedProps);else i!==t?(i===null?(n=a.stateNode,n===null||Xe||n.parentNode.removeChild(n)):i.count--,t===null?Dn||kc(l,e.type,e.stateNode):Xm(l,t,e.memoizedProps)):t===null&&e.stateNode!==null&&Lo(e,e.memoizedProps,a.memoizedProps);break;case 27:Zn(n,e,t),Jn(e),i&512&&(Xe||a===null||Hn(a,a.return)),a!==null&&i&4&&Lo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(l=Xt,Xt=!1,Zn(n,e,t),Xt=l,Jn(e),i&512&&(Xe||a===null||Hn(a,a.return)),e.flags&32){n=e.stateNode;try{ki(n,""),Ue=!0}catch(O){Pe(e,e.return,O)}}i&4&&e.stateNode!=null&&(n=e.memoizedProps,Lo(e,n,a!==null?a.memoizedProps:n)),i&1024&&(Io=!0);break;case 6:if(Zn(n,e,t),Jn(e),i&4){if(e.stateNode===null)throw Error(c(162));n=e.memoizedProps,t=e.stateNode;try{t.nodeValue=n,Ue=!0}catch(O){Pe(e,e.return,O)}}break;case 3:if(Ue=!1,Xs=null,l=jt,jt=hr(n.containerInfo),Zn(n,e,t),jt=l,Jn(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{pl(n.containerInfo)}catch(O){Pe(e,e.return,O)}Io&&(Io=!1,Gh(e)),Ue=!1;break;case 4:i=Xt,Xt=Dn,a=Sn(),l=jt,jt=hr(e.stateNode.containerInfo),Zn(n,e,t),Jn(e),jt=l,Ue&&ir&&(Cs=!0),Ue=a,Xt=i;break;case 12:Zn(n,e,t),Jn(e);break;case 31:Zn(n,e,t),Jn(e),i&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ks(e,n)));break;case 13:Zn(n,e,t),Jn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(zs=Vn()),i&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ks(e,n)));break;case 22:l=e.memoizedState!==null,r=a!==null&&a.memoizedState!==null;var o=Dn,d=Xe,_=Xt;Dn=o||l,Xt=_||l,Xe=d||r,Zn(n,e,t),Xe=d,Xt=_,Dn=o,Jn(e),i&8192&&(n=e.stateNode,n._visibility=l?n._visibility&-2:n._visibility|1,!l||a===null||r||Dn||Xe||(n=r||Xe,t=Dn,a=Xe,Dn=l||Dn,Xe=n,Ya(e,2),Dn=t,Xe=a),!l&&Xt||Xo(e,l)),i&4&&(n=e.updateQueue,n!==null&&(t=n.retryQueue,t!==null&&(n.retryQueue=null,ks(e,t))));break;case 19:Zn(n,e,t),Jn(e),i&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ks(e,n)));break;case 30:i&512&&(Xe||a===null||Hn(a,a.return)),i=Sn(),l=ir,r=(t&335544064)===t,o=e.memoizedProps,ir=r&&sa(o.default,o.update)!=="none",Zn(n,e,t),Jn(e),r&&a!==null&&Ue&&(e.flags|=4),ir=l,Ue=i;break;case 21:break;case 7:i&512&&(Xe||a===null||Hn(a,a.return)),a&&a.stateNode!==null&&(a.stateNode._fragmentFiber=e);default:Zn(n,e,t),Jn(e)}}function Jn(e){var n=e.flags;if(n&2){try{for(var t,a=e.return;a!==null;){if(Oh(a)){t=a;break}a=a.return}a=null;for(var i=e.return;i!==null;){if(zo(i)){var l=i.stateNode;a===null?a=[l]:a.push(l)}if(jo(i))break;i=i.return}var r=a;if(t==null)throw Error(c(160));switch(t.tag){case 27:var o=t.stateNode,d=Uo(e);Os(e,d,o,r);break;case 5:var _=t.stateNode;t.flags&32&&(ki(_,""),t.flags&=-33);var O=Uo(e);Os(e,O,_,r);break;case 3:case 4:var C=t.stateNode.containerInfo,v=Uo(e);qo(e,v,C,r);break;default:throw Error(c(161))}}catch(w){Pe(e,e.return,w)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Gh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Gh(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,ml=!0,n.reset(),ml=!1),e=e.sibling}}function Pi(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Kh(n,e),n=n.sibling;else Dh(n)}function Kh(e,n){var t=e.alternate;if(t===null)Ho(e,!1);else switch(e.tag){case 3:if(Qo=Zt=!1,Mh(),Pi(n,e),!Zt&&!Cs){if(e=It,e!==null)for(var a=0;a<e.length;a+=3){t=e[a];var i=e[a+1];Cm(t,e[a+2]),t=t.ownerDocument.documentElement,t!==null&&t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+i+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Qo=!0}It=null;break;case 5:Pi(n,e);break;case 4:a=Zt,Zt=!1,Pi(n,e),Zt&&(Cs=!0),Zt=a;break;case 22:e.memoizedState===null&&(t.memoizedState!==null?Ho(e,!1):Pi(n,e));break;case 30:a=Zt,i=Mh(),Zt=!1,Pi(n,e),Zt&&(e.flags|=4);var l=e.memoizedProps,r=e.stateNode;n=ra(l,r),r=ra(t.memoizedProps,r);var o=sa(l.default,l.update);o==="none"?n=!1:(l=t.memoizedState,t.memoizedState=null,t=e.child,it=0,n=Vo(e,t,n,r,o,l,!0),it!==(l===null?0:l.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(il(e,e.memoizedProps.onUpdate),It=i):i!==null&&(i.push.apply(i,It),It=i),Zt=(e.flags&32)!==0?!0:a;break;default:Pi(n,e)}}function Jt(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)zh(e,n.alternate,n),n=n.sibling}function Ya(e,n){for(e=e.child;e!==null;){var t=e,a=n;switch(t.tag){case 0:case 11:case 14:case 15:Ha(4,t,t.return),Ya(t,a);break;case 1:Hn(t,t.return);var i=t.stateNode;typeof i.componentWillUnmount=="function"&&wh(t,t.return,i),Ya(t,a);break;case 27:(a&2)!==0&&Gm(t.stateNode,t.type,t.memoizedProps);case 5:Hn(t,t.return),t.tag!==5&&t.tag!==27||ar(t),Ya(t,a);break;case 6:ar(t);break;case 26:Hn(t,t.return),i=t.stateNode,t.memoizedState!==null||i===null||Xe||i.parentNode.removeChild(i),Ya(t,a);break;case 22:t.memoizedState===null&&Ya(t,a);break;case 30:Hn(t,t.return),Ya(t,a);break;case 7:Hn(t,t.return);default:Ya(t,a)}e=e.sibling}}function zt(e,n,t){for(t=(n.subtreeFlags&8772)!==0?t:t&-2,n=n.child;n!==null;){var a=n.alternate,i=e,l=n,r=l.flags,o=(t&1)!==0;switch(l.tag){case 0:case 11:case 15:zt(i,l,t),tr(4,l);break;case 1:if(zt(i,l,t),a=l,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(O){Pe(a,a.return,O)}if(a=l,i=a.updateQueue,i!==null){var d=a.stateNode;try{var _=i.shared.hiddenCallbacks;if(_!==null)for(i.shared.hiddenCallbacks=null,i=0;i<_.length;i++)fd(_[i],d)}catch(O){Pe(a,a.return,O)}}o&&r&64&&Eh(l),Vt(l,l.return);break;case 27:(t&2)!==0&&Nh(l);case 5:l.tag!==5&&l.tag!==27||xh(l),zt(i,l,t),o&&a===null&&r&4&&Bo(l),Vt(l,l.return);break;case 6:xh(l);break;case 26:d=l.stateNode,l.memoizedState!==null||d===null||Dn||kc(hr(d.ownerDocument),l.type,d),zt(i,l,t),o&&a===null&&r&4&&Bo(l),Vt(l,l.return);break;case 12:zt(i,l,t);break;case 31:zt(i,l,t),o&&r&4&&qh(i,l);break;case 13:zt(i,l,t),o&&r&4&&Hh(i,l);break;case 22:l.memoizedState===null&&zt(i,l,t),Vt(l,l.return);break;case 30:zt(i,l,t),Vt(l,l.return);break;case 7:Vt(l,l.return);default:zt(i,l,t)}n=n.sibling}}function Jo(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&Kl(t))}function Fo(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Kl(e))}function Ot(e,n,t,a){var i=(t&335544064)===t;if(n.subtreeFlags&(i?10262:10256))for(n=n.child;n!==null;)Vh(e,n,t,a),n=n.sibling;else i&&kh(n)}function Vh(e,n,t,a){var i=(t&335544064)===t;i&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Ms(n);var l=n.flags;switch(n.tag){case 0:case 11:case 15:Ot(e,n,t,a),l&2048&&tr(9,n);break;case 1:Ot(e,n,t,a);break;case 3:Ot(e,n,t,a),i&&Qo&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),l&2048&&(l=null,n.alternate!==null&&(l=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==l&&(n.refCount++,l!=null&&Kl(l)));break;case 12:if(l&2048){Ot(e,n,t,a),l=n.stateNode;try{var r=n.memoizedProps,o=r.id,d=r.onPostCommit;typeof d=="function"&&d(o,n.alternate===null?"mount":"update",l.passiveEffectDuration,-0)}catch(_){Pe(n,n.return,_)}}else Ot(e,n,t,a);break;case 31:Ot(e,n,t,a);break;case 13:Ot(e,n,t,a);break;case 23:break;case 22:r=n.stateNode,o=n.alternate,n.memoizedState!==null?(i&&o!==null&&o.memoizedState===null&&Ms(o),r._visibility&2?Ot(e,n,t,a):lr(e,n)):(i&&o!==null&&o.memoizedState!==null&&Ms(n),r._visibility&2?Ot(e,n,t,a):(r._visibility|=2,Wi(e,n,t,a,(n.subtreeFlags&10256)!==0||!1))),l&2048&&Jo(o,n);break;case 24:Ot(e,n,t,a),l&2048&&Fo(n.alternate,n);break;case 30:i&&(l=n.alternate,l!==null&&(Qt(l.child,!0),Qt(n.child,!0))),Ot(e,n,t,a);break;default:Ot(e,n,t,a)}}function Wi(e,n,t,a,i){for(i=i&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var l=e,r=n,o=t,d=a,_=r.flags;switch(r.tag){case 0:case 11:case 15:Wi(l,r,o,d,i),tr(8,r);break;case 23:break;case 22:var O=r.stateNode;r.memoizedState!==null?O._visibility&2?Wi(l,r,o,d,i):lr(l,r):(O._visibility|=2,Wi(l,r,o,d,i)),i&&_&2048&&Jo(r.alternate,r);break;case 24:Wi(l,r,o,d,i),i&&_&2048&&Fo(r.alternate,r);break;default:Wi(l,r,o,d,i)}n=n.sibling}}function lr(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,a=n,i=a.flags;switch(a.tag){case 22:lr(t,a),i&2048&&Jo(a.alternate,a);break;case 24:lr(t,a),i&2048&&Fo(a.alternate,a);break;default:lr(t,a)}n=n.sibling}}var vi=8192;function yi(e,n,t){if(e.subtreeFlags&vi)for(e=e.child;e!==null;)Ih(e,n,t),e=e.sibling}function Ih(e,n,t){switch(e.tag){case 26:yi(e,n,t),e.flags&vi&&(e.memoizedState!==null?w0(t,jt,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&Wm(t,e)));break;case 5:yi(e,n,t),e.flags&vi&&(e=e.stateNode,(n&335544128)===n&&Wm(t,e));break;case 3:case 4:var a=jt;jt=hr(e.stateNode.containerInfo),yi(e,n,t),jt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=vi,vi=16777216,yi(e,n,t),vi=a):yi(e,n,t));break;case 30:if((e.flags&vi)!==0&&(a=e.memoizedProps.name,a!=null&&a!=="auto")){var i=e.stateNode;i.paired=null,dt===null&&(dt=new Map),dt.set(a,i)}yi(e,n,t);break;default:yi(e,n,t)}}function Qh(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function rr(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];jn=a,Zh(a,e)}Qh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Xh(e),e=e.sibling}function Xh(e){switch(e.tag){case 0:case 11:case 15:rr(e),e.flags&2048&&Ha(9,e,e.return);break;case 3:rr(e);break;case 12:rr(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ds(e)):rr(e);break;default:rr(e)}}function Ds(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];jn=a,Zh(a,e)}Qh(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ha(8,n,n.return),Ds(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,Ds(n));break;default:Ds(n)}e=e.sibling}}function Zh(e,n){for(;jn!==null;){var t=jn;switch(t.tag){case 0:case 11:case 15:Ha(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Kl(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,jn=a;else e:for(t=e;jn!==null;){a=jn;var i=a.sibling,l=a.return;if(Lh(a),a===t){jn=null;break e}if(i!==null){i.return=l,jn=i;break e}jn=l}}}var y1={getCacheForType:function(e){var n=Ln(Tn),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return Ln(Tn).controller.signal}},_1=typeof WeakMap=="function"?WeakMap:Map,Ie=0,an=null,ke=null,je=0,Fe=0,ht=null,Ga=!1,$i=!1,Po=!1,ga=0,mn=0,Ka=0,_i=0,js=0,mt=0,el=0,sr=null,rt=null,Wo=!1,zs=0,Jh=0,Bs=1/0,Ls=null,Va=null,fn=0,Bt=null,Si=null,Ft=0,$o=0,ec=null,Fh=null,nl=null,tl=null,al=null,ur=0,Us=null;function pt(){return(Ie&2)!==0&&je!==0?je&-je:ee.T!==null?cc():kr()}function Ph(){if(mt===0)if((je&536870912)===0||Ae){var e=Ta;Ta<<=1,(Ta&3932160)===0&&(Ta=262144),mt=e}else mt=536870912;return e=Un.current,e!==null&&(e.flags|=32),mt}function il(e,n){if(n!=null){var t=e.stateNode,a=t.ref;a===null&&(a=t.ref=Rm(ra(e.memoizedProps,t))),tl===null&&(tl=[]),tl.push(n.bind(null,a))}}function st(e,n,t){(e===an&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)&&(ll(e,0),Ia(e,je,mt,!1)),ti(e,t),((Ie&2)===0||e!==an)&&(e===an&&((Ie&2)===0&&(_i|=t),mn===4&&Ia(e,je,mt,!1)),Pt(e))}function Wh(e,n,t){if((Ie&6)!==0)throw Error(c(327));var a=!t&&(n&127)===0&&(n&e.expiredLanes)===0||ni(e,n),i=a?E1(e,n):tc(e,n,!0),l=a;do{if(i===0){$i&&!a&&Ia(e,n,0,!1);break}else{if(t=e.current.alternate,l&&!S1(t)){i=tc(e,n,!1),l=!1;continue}if(i===2){if(l=n,e.errorRecoveryDisabledLanes&l)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){n=r;e:{var o=e;i=sr;var d=o.current.memoizedState.isDehydrated;if(d&&(ll(o,r).flags|=256),r=tc(o,r,!1),r!==2&&r!==6){if(Po&&!d){o.errorRecoveryDisabledLanes|=l,_i|=l,i=4;break e}l=rt,rt=i,l!==null&&(rt===null?rt=l:rt.push.apply(rt,l))}i=r}if(l=!1,i!==2)continue}}if(i===1){ll(e,0),Ia(e,n,0,!0);break}e:{switch(a=e,l=i,l){case 0:case 1:throw Error(c(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:Ia(a,n,mt,!Ga);break e;case 2:rt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((n&62914560)===n&&(i=zs+300-Vn(),10<i)){if(Ia(a,n,mt,!Ga),wa(a,0,!0)!==0)break e;Ft=n,a.timeoutHandle=Sc($h.bind(null,a,t,rt,Ls,Wo,n,mt,_i,el,Ga,l,"Throttled",-0,0),i);break e}$h(a,t,rt,Ls,Wo,n,mt,_i,el,Ga,l,null,-0,0)}}break}while(!0);Pt(e)}function $h(e,n,t,a,i,l,r,o,d,_,O,C,v,w){e.timeoutHandle=-1;var V=n.subtreeFlags,ne=(l&335544064)===l;if(C=null,(ne||V&8192||(V&16785408)===16785408)&&(C={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yt},dt=null,Ih(n,l,C),ne&&(V=C,ne=e.containerInfo,ne=(ne.nodeType===9?ne:ne.ownerDocument).__reactViewTransition,ne!=null&&(V.count++,V.waitingForViewTransition=!0,V=gr.bind(V),ne.finished.then(V,V))),V=(l&62914560)===l?zs-Vn():(l&4194048)===l?Jh-Vn():0,V=x0(C,V),V!==null)){Ft=l,e.cancelPendingCommit=V(sm.bind(null,e,n,l,t,a,i,r,o,d,_,O,C,null,v,w)),Ia(e,l,r,!_);return}sm(e,n,l,t,a,i,r,o,d,_,O,C)}function S1(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var i=t[a],l=i.getSnapshot;i=i.value;try{if(!ct(l(),i))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ia(e,n,t,a){n=Cr(e,n),n&=~js,n&=~_i,e.suspendedLanes|=n,e.pingedLanes&=~n,a&&(e.warmLanes|=n),a=e.expirationTimes;for(var i=n;0<i;){var l=31-K(i),r=1<<l;a[l]=-1,i&=~r}t!==0&&Rr(e,t,n)}function qs(){return(Ie&6)===0?(or(0),!1):!0}function nc(){if(ke!==null){if(Fe===0)var e=ke.return;else e=ke,ca=ui=null,uo(e),Ii=null,Ql=0,e=ke;for(;e!==null;)Th(e.alternate,e),e=e.return;ke=null}}function ll(e,n){var t=e.timeoutHandle;return t!==-1&&(e.timeoutHandle=-1,I1(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Ft=0,nc(),an=e,ke=t=ua(e.current,null),je=n,Fe=0,ht=null,Ga=!1,$i=ni(e,n),Po=!1,el=mt=js=_i=Ka=mn=0,rt=sr=null,Wo=!1,ga=Cr(e,n),Xr(),t}function em(e,n){Ee=null,ee.H=vs,n===Vi||n===is?(n=sd(),Fe=3):n===Ju?(n=sd(),Fe=4):Fe=n===wo?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ht=n,ke===null&&(mn=1,ys(e,Tt(n,e.current)))}function nm(){var e=Un.current;return e===null?!0:(je&4194048)===je?In===null:(je&62914560)===je||(je&536870912)!==0?e===In:!1}function tm(){var e=ee.H;return ee.H=vs,e===null?vs:e}function am(){var e=ee.A;return ee.A=y1,e}function Hs(){mn=4,Ga||(je&4194048)!==je&&Un.current!==null||($i=!0),(Ka&134217727)===0&&(_i&134217727)===0||an===null||Ia(an,je,mt,!1)}function tc(e,n,t){var a=Ie;Ie|=2;var i=tm(),l=am();(an!==e||je!==n)&&(Ls=null,ll(e,n)),n=!1;var r=mn;e:do try{if(Fe!==0&&ke!==null){var o=ke,d=ht;switch(Fe){case 8:nc(),r=6;break e;case 3:case 2:case 9:case 6:Un.current===null&&(n=!0);var _=Fe;if(Fe=0,ht=null,rl(e,o,d,_),t&&$i){r=0;break e}break;default:_=Fe,Fe=0,ht=null,rl(e,o,d,_)}}T1(),r=mn;break}catch(O){em(e,O)}while(!0);return n&&e.shellSuspendCounter++,ca=ui=null,Ie=a,ee.H=i,ee.A=l,ke===null&&(an=null,je=0,Xr()),r}function T1(){for(;ke!==null;)im(ke)}function E1(e,n){var t=Ie;Ie|=2;var a=tm(),i=am();an!==e||je!==n?(Ls=null,Bs=Vn()+500,ll(e,n)):$i=ni(e,n);e:do try{if(Fe!==0&&ke!==null){n=ke;var l=ht;n:switch(Fe){case 1:Fe=0,ht=null,rl(e,n,l,1);break;case 2:case 9:if(ld(l)){Fe=0,ht=null,lm(n);break}n=function(){Fe!==2&&Fe!==9||an!==e||(Fe=7),Pt(e)},l.then(n,n);break e;case 3:Fe=7;break e;case 4:Fe=5;break e;case 7:ld(l)?(Fe=0,ht=null,lm(n)):(Fe=0,ht=null,rl(e,n,l,7));break;case 5:var r=null;switch(ke.tag){case 26:r=ke.memoizedState;case 5:case 27:var o=ke;if(r?Fm(r):o.stateNode.complete){Fe=0,ht=null;var d=o.sibling;if(d!==null)ke=d;else{var _=o.return;_!==null?(ke=_,Ys(_)):ke=null}break n}}Fe=0,ht=null,rl(e,n,l,5);break;case 6:Fe=0,ht=null,rl(e,n,l,6);break;case 8:nc(),mn=6;break e;default:throw Error(c(462))}}w1();break}catch(O){em(e,O)}while(!0);return ca=ui=null,ee.H=a,ee.A=i,Ie=t,ke!==null?0:(an=null,je=0,Xr(),mn)}function w1(){for(;ke!==null&&!mu();)im(ke)}function im(e){var n=_h(e.alternate,e,ga);e.memoizedProps=e.pendingProps,n===null?Ys(e):ke=n}function lm(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=hh(t,n,n.pendingProps,n.type,void 0,je);break;case 11:n=hh(t,n,n.pendingProps,n.type.render,n.ref,je);break;case 5:uo(n);var a=n;a===kn&&(Ae?($r(a),a.tag===5&&a.stateNode!=null&&(ln=a.stateNode)):($r(a),Ae=!0));default:Th(t,n),n=ke=Zf(n,ga),n=_h(t,n,ga)}e.memoizedProps=e.pendingProps,n===null?Ys(e):ke=n}function rl(e,n,t,a){ca=ui=null,uo(n),Ii=null,Ql=0;var i=n.return;try{if(f1(e,i,n,t,je)){mn=1,ys(e,Tt(t,e.current)),ke=null;return}}catch(l){if(i!==null)throw ke=i,l;mn=1,ys(e,Tt(t,e.current)),ke=null;return}n.flags&32768?(Ae||a===1?e=!0:$i||(je&536870912)!==0?e=!1:(Ga=e=!0,(a===2||a===9||a===3||a===6)&&(a=Un.current,a!==null&&a.tag===13&&(a.flags|=16384))),rm(n,e)):Ys(n)}function Ys(e){var n=e;do{if((n.flags&32768)!==0){rm(n,Ga);return}e=n.return;var t=p1(n.alternate,n,ga);if(t!==null){ke=t;return}if(n=n.sibling,n!==null){ke=n;return}ke=n=e}while(n!==null);mn===0&&(mn=5)}function rm(e,n){do{var t=g1(e.alternate,e);if(t!==null){t.flags&=32767,ke=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){ke=e;return}ke=e=t}while(e!==null);mn=6,ke=null}function sm(e,n,t,a,i,l,r,o,d,_,O,C){e.cancelPendingCommit=null;do Gs();while(fn!==0);if((Ie&6)!==0)throw Error(c(327));if(n!==null){if(n===e.current)throw Error(c(177));e===an&&(ke=an=null,je=0),Si=n,Bt=e,Ft=t,ec=i,Fh=a,x1(e,n,t,r,o,d,C)}}function x1(e,n,t,a,i,l,r){var o=n.lanes|n.childLanes;if($o=o,o|=Bu,gu(e,t,o,a,i,l),tl=null,(t&335544064)===t?(al=$g(e),a=10262):(al=null,a=10256),(n.subtreeFlags&a)!==0||(n.flags&a)!==0?(e.callbackNode=null,e.callbackPriority=0,R1(Ct,function(){return rc(),null})):(e.callbackNode=null,e.callbackPriority=0),Ns=!1,a=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||a){a=ee.T,ee.T=null,i=oe.p,oe.p=2,l=Ie,Ie|=4;try{b1(e,n,t)}finally{Ie=l,oe.p=i,ee.T=a}}fn=1,Ns?nl=P1(r,e.containerInfo,al,ac,ic,N1,lc,rc,O1):(ac(),ic(),lc())}function O1(e){if(fn!==0){var n=Bt.onRecoverableError;n(e,{componentStack:null})}}function N1(){fn===3&&(fn=0,Kh(Si,Bt),fn=4)}function ac(){if(fn===1){fn=0;var e=Bt,n=Si,t=Ft,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=ee.T,ee.T=null;var i=oe.p;oe.p=2;var l=Ie;Ie|=4;try{ir=Cs=!1,Yh(n,e,t),t=vc;var r=Uf(e.containerInfo),o=t.focusedElem,d=t.selectionRange;if(r!==o&&o&&o.ownerDocument&&Lf(o.ownerDocument.documentElement,o)){if(d!==null&&Ru(o)){var _=d.start,O=d.end;if(O===void 0&&(O=_),"selectionStart"in o)o.selectionStart=_,o.selectionEnd=Math.min(O,o.value.length);else{var C=o.ownerDocument||document,v=C&&C.defaultView||window;if(v.getSelection){var w=v.getSelection(),V=o.textContent.length,ne=Math.min(d.start,V),we=d.end===void 0?ne:Math.min(d.end,V);!w.extend&&ne>we&&(r=we,we=ne,ne=r);var y=Bf(o,ne),p=Bf(o,we);if(y&&p&&(w.rangeCount!==1||w.anchorNode!==y.node||w.anchorOffset!==y.offset||w.focusNode!==p.node||w.focusOffset!==p.offset)){var E=C.createRange();E.setStart(y.node,y.offset),w.removeAllRanges(),ne>we?(w.addRange(E),w.extend(p.node,p.offset)):(E.setEnd(p.node,p.offset),w.addRange(E))}}}}for(C=[],w=o;w=w.parentNode;)w.nodeType===1&&C.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<C.length;o++){var A=C[o];A.element.scrollLeft=A.left,A.element.scrollTop=A.top}}ml=!!bc,vc=bc=null}finally{Ie=l,oe.p=i,ee.T=a}}e.current=n,fn=2}}function ic(){if(fn===2){fn=0;var e=Bt,n=Si,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=ee.T,ee.T=null;var a=oe.p;oe.p=2;var i=Ie;Ie|=4;try{zh(e,n.alternate,n)}finally{Ie=i,oe.p=a,ee.T=t}}fn=3}}function lc(){if(fn===4||fn===3){fn=0;var e=nl;nl=null,Ol();var n=Bt,t=Si,a=Ft,i=Fh,l=(a&335544064)===a?10262:10256;if((t.subtreeFlags&l)!==0||(t.flags&l)!==0?fn=5:(fn=0,Si=Bt=null,um(n,n.pendingLanes)),l=n.pendingLanes,l===0&&(Va=null),Cl(a),t=t.stateNode,Le&&typeof Le.onCommitFiberRoot=="function")try{Le.onCommitFiberRoot(tn,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=ee.T,l=oe.p,oe.p=2,ee.T=null;try{for(var r=n.onRecoverableError,o=0;o<i.length;o++){var d=i[o];r(d.value,{componentStack:d.stack})}}finally{ee.T=t,oe.p=l}}if(i=tl,r=al,al=null,i!==null&&(tl=null,r===null&&(r=[]),e!==null))for(d=0;d<i.length;d++)t=(0,i[d])(r),t!==void 0&&e.finished.finally(t);(Ft&3)!==0&&Gs(),Pt(n),l=n.pendingLanes,(a&261930)!==0&&(l&42)!==0?n===Us?ur++:(ur=0,Us=n):(ur=0,Us=null),or(0)}}function um(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Kl(n)))}function Gs(){return nl!==null&&(nl.skipTransition(),nl=null),ac(),ic(),lc(),rc()}function rc(){if(fn!==5)return!1;var e=Bt,n=$o;$o=0;var t=Cl(Ft),a=ee.T,i=oe.p;try{oe.p=32>t?32:t,ee.T=null,t=ec,ec=null;var l=Bt,r=Ft;if(fn=0,Si=Bt=null,Ft=0,(Ie&6)!==0)throw Error(c(331));var o=Ie;if(Ie|=4,Xh(l.current),Vh(l,l.current,r,t),Ie=o,or(0,!1),Le&&typeof Le.onPostCommitFiberRoot=="function")try{Le.onPostCommitFiberRoot(tn,l)}catch{}return!0}finally{oe.p=i,ee.T=a,um(e,n)}}function om(e,n,t){n=Tt(t,n),n=Eo(e.stateNode,n,2),e=Ba(e,n,2),e!==null&&(ti(e,2),Pt(e))}function Pe(e,n,t){if(e.tag===3)om(e,e,t);else for(;n!==null;){if(n.tag===3){om(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Va===null||!Va.has(a))){e=Tt(t,e),t=lh(2),a=Ba(n,t,2),a!==null&&(rh(t,a,n,e),ti(a,2),Pt(a));break}}n=n.return}}function sc(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new _1;var i=new Set;a.set(n,i)}else i=a.get(n),i===void 0&&(i=new Set,a.set(n,i));i.has(t)||(Po=!0,i.add(t),e=A1.bind(null,e,n,t),n.then(e,e))}function A1(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,an===e&&(je&t)===t&&((mn===4||mn===3&&(je&62914560)===je&&300>Vn()-zs)&&(Ie&2)===0?ll(e,0):js|=t,el===je&&(el=0)),Pt(e)}function cm(e,n){n===0&&(n=Al()),e=li(e,n),e!==null&&(ti(e,n),Pt(e))}function M1(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),cm(e,t)}function C1(e,n){var t=0;switch(e.tag){case 31:case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(n),cm(e,t)}function R1(e,n){return wl(e,n)}var sl=null,ul=null,uc=!1,Ks=!1,oc=!1,Qa=0;function Pt(e){e!==ul&&e.next===null&&(ul===null?sl=ul=e:ul=ul.next=e),Ks=!0,uc||(uc=!0,D1())}function or(e,n){if(!oc&&Ks){oc=!0;do for(var t=!1,a=sl;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var l=0;else{var r=a.suspendedLanes,o=a.pingedLanes;l=(1<<31-K(42|e)+1)-1,l&=i&~(r&~o),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(t=!0,mm(a,l))}else l=je,l=wa(a,a===an?l:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(l&3)===0||ni(a,l)||(t=!0,mm(a,l));a=a.next}while(t);oc=!1}}function k1(){fm()}function fm(){Ks=uc=!1;var e=0;Qa!==0&&V1()&&(e=Qa);for(var n=Vn(),t=null,a=sl;a!==null;){var i=a.next,l=dm(a,n);l===0?(a.next=null,t===null?sl=i:t.next=i,i===null&&(ul=t)):(t=a,(e!==0||(l&3)!==0)&&(Ks=!0)),a=i}fn!==0&&fn!==5||or(e),Qa!==0&&(Qa=0)}function dm(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var r=31-K(l),o=1<<r,d=i[r];d===-1?((o&t)===0||(o&a)!==0)&&(i[r]=pu(o,n)):d<=n&&(e.expiredLanes|=o),l&=~o}if(n=an,t=je,t=wa(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,t===0||e===n&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&xl(a),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||ni(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(a!==null&&xl(a),Cl(t)){case 2:case 8:t=Nl;break;case 32:t=Ct;break;case 268435456:t=k;break;default:t=Ct}return a=hm.bind(null,e),t=wl(t,a),e.callbackPriority=n,e.callbackNode=t,n}return a!==null&&a!==null&&xl(a),e.callbackPriority=2,e.callbackNode=null,2}function hm(e,n){if(fn!==0&&fn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Gs()&&e.callbackNode!==t)return null;var a=je;return a=wa(e,e===an?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Wh(e,a,n),dm(e,Vn()),e.callbackNode!=null&&e.callbackNode===t?hm.bind(null,e):null)}function mm(e,n){if(Gs())return null;Wh(e,n,!0)}function D1(){Q1(function(){(Ie&6)!==0?wl(Mr,k1):fm()})}function cc(){if(Qa===0){var e=fi;e===0&&(e=Ht,Ht<<=1,(Ht&261888)===0&&(Ht=256)),Qa=e}return Qa}function pm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:qr(e)}function j1(e,n,t,a,i){if(n==="submit"&&t&&t.stateNode===i){var l=pm((i[B]||null).action),r=a.submitter;r&&(n=(n=r[B]||null)?pm(n.formAction):r.getAttribute("formAction"),n!==null&&(l=n,r=null));var o=new Kr("action","action",null,a,i);e.push({event:o,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Qa!==0){var d=new FormData(i,r);vo(t,{pending:!0,data:d,method:i.method,action:l},null,d)}}else typeof l=="function"&&(o.preventDefault(),d=new FormData(i,r),vo(t,{pending:!0,data:d,method:i.method,action:l},l,d))},currentTarget:i}]})}}for(var fc=0;fc<zu.length;fc++){var dc=zu[fc],z1=dc.toLowerCase(),B1=dc[0].toUpperCase()+dc.slice(1);kt(z1,"on"+B1)}kt(Yf,"onAnimationEnd"),kt(Gf,"onAnimationIteration"),kt(Kf,"onAnimationStart"),kt("dblclick","onDoubleClick"),kt("focusin","onFocus"),kt("focusout","onBlur"),kt(Ig,"onTransitionRun"),kt(Qg,"onTransitionStart"),kt(Xg,"onTransitionCancel"),kt(Vf,"onTransitionEnd"),aa("onMouseEnter",["mouseout","mouseover"]),aa("onMouseLeave",["mouseout","mouseover"]),aa("onPointerEnter",["pointerout","pointerover"]),aa("onPointerLeave",["pointerout","pointerover"]),yt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),yt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),yt("onBeforeInput",["compositionend","keypress","textInput","paste"]),yt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),yt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),yt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),L1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cr));function gm(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],i=a.event;a=a.listeners;e:{var l=void 0;if(n)for(var r=a.length-1;0<=r;r--){var o=a[r],d=o.instance,_=o.currentTarget;if(o=o.listener,d!==l&&i.isPropagationStopped())break e;l=o,i.currentTarget=_;try{l(i)}catch(O){Qr(O)}i.currentTarget=null,l=d}else for(r=0;r<a.length;r++){if(o=a[r],d=o.instance,_=o.currentTarget,o=o.listener,d!==l&&i.isPropagationStopped())break e;l=o,i.currentTarget=_;try{l(i)}catch(O){Qr(O)}i.currentTarget=null,l=d}}}}function De(e,n){var t=n[Ce];t===void 0&&(t=n[Ce]=new Set);var a=e+"__bubble";t.has(a)||(bm(n,e,2,!1),t.add(a))}function hc(e,n,t){var a=0;n&&(a|=4),bm(t,e,a,n)}var Vs="_reactListening"+Math.random().toString(36).slice(2);function mc(e){if(!e[Vs]){e[Vs]=!0,zr.forEach(function(t){t!=="selectionchange"&&(L1.has(t)||hc(t,!1,e),hc(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Vs]||(n[Vs]=!0,hc("selectionchange",!1,n))}}function bm(e,n,t,a){switch(rp(n)){case 2:var i=M0;break;case 8:i=C0;break;default:i=jc}t=i.bind(null,n,t,e),i=void 0,!Su||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function pc(e,n,t,a,i){var l=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var r=a.tag;if(r===3||r===4){var o=a.stateNode.containerInfo;if(o===i)break;if(r===4)for(r=a.return;r!==null;){var d=r.tag;if((d===3||d===4)&&r.stateNode.containerInfo===i)return;r=r.return}for(;o!==null;){if(r=Rn(o),r===null)return;if(d=r.tag,d===5||d===6||d===26||d===27){a=l=r;continue e}o=o.parentNode}}a=a.return}bf(function(){var _=l,O=yu(t),C=[];e:{var v=If.get(e);if(v!==void 0){var w=Kr,V=e;switch(e){case"keypress":if(Yr(t)===0)break e;case"keydown":case"keyup":w=Sg;break;case"focusin":V="focus",w=xu;break;case"focusout":V="blur",w=xu;break;case"beforeblur":case"afterblur":w=xu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=_f;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=og;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Og;break;case Yf:case Gf:case Kf:w=dg;break;case Vf:w=Ag;break;case"scroll":case"scrollend":w=sg;break;case"wheel":w=Cg;break;case"copy":case"cut":case"paste":w=mg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Tf;break;case"submit":w=wg;break;case"toggle":case"beforetoggle":w=kg}var ne=(n&4)!==0,we=!ne&&(e==="scroll"||e==="scrollend"),y=ne?v!==null?v+"Capture":null:v;ne=[];for(var p=_,E;p!==null;){var A=p;if(E=A.stateNode,A=A.tag,A!==5&&A!==26&&A!==27||E===null||y===null||(A=kl(p,y),A!=null&&ne.push(fr(p,A,E))),we)break;p=p.return}0<ne.length&&(v=new w(v,V,null,t,O),C.push({event:v,listeners:ne}))}}if((n&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",w&&t!==vu&&(V=t.relatedTarget||t.fromElement)&&(Rn(V)||V[te]))break e;(v||w)&&(V=O.window===O?O:(w=O.ownerDocument)?w.defaultView||w.parentWindow:window,v?(w=t.relatedTarget||t.toElement,v=_,w=w?Rn(w):null,w!==null&&(we=R(w),ne=w.tag,w!==we||ne!==5&&ne!==27&&ne!==6)&&(w=null)):(v=null,w=_),v!==w&&(ne=_f,A="onMouseLeave",y="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(ne=Tf,A="onPointerLeave",y="onPointerEnter",p="pointer"),we=v==null?V:Oa(v),E=w==null?V:Oa(w),V=new ne(A,p+"leave",v,t,O),V.target=we,V.relatedTarget=E,A=null,Rn(O)===_&&(ne=new ne(y,p+"enter",w,t,O),ne.target=E,ne.relatedTarget=we,A=ne),we=A,ne=v&&w?Be(v,w,U1):null,v!==null&&vm(C,V,v,ne,!1),w!==null&&we!==null&&vm(C,we,w,ne,!0)))}e:{if(v=_?Oa(_):window,w=v.nodeName&&v.nodeName.toLowerCase(),w==="select"||w==="input"&&v.type==="file")var W=Cf;else if(Af(v))if(Rf)W=Gg;else{W=Hg;var ze=qg}else w=v.nodeName,!w||w.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?_&&bu(_.elementType)&&(W=Cf):W=Yg;if(W&&(W=W(e,_))){Mf(C,W,t,O);break e}ze&&ze(e,v,_)}switch(ze=_?Oa(_):window,e){case"focusin":(Af(ze)||ze.contentEditable==="true")&&(Bi=ze,ku=_,Hl=null);break;case"focusout":Hl=ku=Bi=null;break;case"mousedown":Du=!0;break;case"contextmenu":case"mouseup":case"dragend":Du=!1,qf(C,t,O);break;case"selectionchange":if(Vg)break;case"keydown":case"keyup":qf(C,t,O)}var re;if(Nu)e:{switch(e){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else zi?Of(e,t)&&(ce="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(ce="onCompositionStart");ce&&(Ef&&t.locale!=="ko"&&(zi||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&zi&&(re=vf()):(Na=O,Tu="value"in Na?Na.value:Na.textContent,zi=!0)),ze=Is(_,ce),0<ze.length&&(ce=new Sf(ce,e,null,t,O),C.push({event:ce,listeners:ze}),re?ce.data=re:(re=Nf(t),re!==null&&(ce.data=re)))),(re=jg?zg(e,t):Bg(e,t))&&(ce=Is(_,"onBeforeInput"),0<ce.length&&(ze=new Sf("onBeforeInput","beforeinput",null,t,O),C.push({event:ze,listeners:ce}),ze.data=re)),j1(C,e,_,t,O)}gm(C,n)})}function fr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Is(e,n){for(var t=n+"Capture",a=[];e!==null;){var i=e,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=kl(e,t),i!=null&&a.unshift(fr(e,i,l)),i=kl(e,n),i!=null&&a.push(fr(e,i,l))),e.tag===3)return a;e=e.return}return[]}function U1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function vm(e,n,t,a,i){for(var l=n._reactName,r=[];t!==null&&t!==a;){var o=t,d=o.alternate,_=o.stateNode;if(o=o.tag,d!==null&&d===a)break;o!==5&&o!==26&&o!==27||_===null||(d=_,i?(_=kl(t,l),_!=null&&r.unshift(fr(t,_,d))):i||(_=kl(t,l),_!=null&&r.push(fr(t,_,d)))),t=t.return}r.length!==0&&e.push({event:n,listeners:r})}var q1=/\r\n?/g,H1=/\u0000|\uFFFD/g;function ym(e){return(typeof e=="string"?e:""+e).replace(q1,`
`).replace(H1,"")}function _m(e,n){return n=ym(n),ym(e)===n}function We(e,n,t,a,i,l){switch(t){case"children":if(typeof a=="string")n==="body"||n==="textarea"&&a===""||ki(e,a);else if(typeof a=="number"||typeof a=="bigint")n!=="body"&&ki(e,""+a);else return;break;case"className":ia(e,"class",a);break;case"tabIndex":ia(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":ia(e,t,a);break;case"style":pf(e,a,l);return;case"data":if(n!=="object"){ia(e,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=qr(a),e.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(t==="formAction"?(n!=="input"&&We(e,n,"name",i.name,i,null),We(e,n,"formEncType",i.formEncType,i,null),We(e,n,"formMethod",i.formMethod,i,null),We(e,n,"formTarget",i.formTarget,i,null)):(We(e,n,"encType",i.encType,i,null),We(e,n,"method",i.method,i,null),We(e,n,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=qr(a),e.setAttribute(t,a);break;case"onClick":a!=null&&(e.onclick=Yt);return;case"onScroll":a!=null&&De("scroll",e);return;case"onScrollEnd":a!=null&&De("scrollend",e);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(t=a.__html,t!=null){if(i.children!=null)throw Error(c(60));l?.__html!==t&&(e.innerHTML=t)}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}t=qr(a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":a===!0?e.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(t,a):e.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(t):e.setAttribute(t,a);break;case"popover":De("beforetoggle",e),De("toggle",e),Ke(e,"popover",a);break;case"xlinkActuate":zn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":zn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":zn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":zn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":zn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":zn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":zn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":zn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":zn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ke(e,"is",a);break;case"innerText":case"textContent":return;default:if(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")t=lg.get(t)||t,Ke(e,t,a);else return}Ue=!0}function gc(e,n,t,a,i,l){switch(t){case"style":pf(e,a,l);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(t=a.__html,t!=null){if(i.children!=null)throw Error(c(60));l?.__html!==t&&(e.innerHTML=t)}}break;case"children":if(typeof a=="string")ki(e,a);else if(typeof a=="number"||typeof a=="bigint")ki(e,""+a);else return;break;case"onScroll":a!=null&&De("scroll",e);return;case"onScrollEnd":a!=null&&De("scrollend",e);return;case"onClick":a!=null&&(e.onclick=Yt);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Br.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(i=t.endsWith("Capture"),l=t.slice(2,i?t.length-7:void 0),n=e[B]||null,n=n!=null?n[t]:null,typeof n=="function"&&e.removeEventListener(l,n,i),typeof a=="function")){typeof n!="function"&&n!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(l,a,i);break e}Ue=!0,t in e?e[t]=a:a===!0?e.setAttribute(t,""):Ke(e,t,a)}return}Ue=!0}function Yn(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":De("error",e),De("load",e);var a=!1,i=!1,l;for(l in t)if(t.hasOwnProperty(l)){var r=t[l];if(r!=null)switch(l){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,n));default:We(e,n,l,r,t,null)}}i&&We(e,n,"srcSet",t.srcSet,t,null),a&&We(e,n,"src",t.src,t,null);return;case"input":De("invalid",e);var o=l=r=i=null,d=null,_=null;for(a in t)if(t.hasOwnProperty(a)){var O=t[a];if(O!=null)switch(a){case"name":i=O;break;case"type":r=O;break;case"checked":d=O;break;case"defaultChecked":_=O;break;case"value":l=O;break;case"defaultValue":o=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(c(137,n));break;default:We(e,n,a,O,t,null)}}Ur(e,l,o,d,_,r,i,!1);return;case"select":De("invalid",e),a=r=l=null;for(i in t)if(t.hasOwnProperty(i)&&(o=t[i],o!=null))switch(i){case"value":l=o;break;case"defaultValue":r=o;break;case"multiple":a=o;default:We(e,n,i,o,t,null)}n=l,t=r,e.multiple=!!a,n!=null?Ri(e,!!a,n,!1):t!=null&&Ri(e,!!a,t,!0);return;case"textarea":De("invalid",e),l=i=a=null;for(r in t)if(t.hasOwnProperty(r)&&(o=t[r],o!=null))switch(r){case"value":a=o;break;case"defaultValue":i=o;break;case"children":l=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(c(91));break;default:We(e,n,r,o,t,null)}hf(e,a,i,l);return;case"option":for(d in t)t.hasOwnProperty(d)&&(a=t[d],a!=null)&&(d==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":We(e,n,d,a,t,null));return;case"dialog":De("beforetoggle",e),De("toggle",e),De("cancel",e),De("close",e);break;case"iframe":case"object":De("load",e);break;case"video":case"audio":for(a=0;a<cr.length;a++)De(cr[a],e);break;case"image":De("error",e),De("load",e);break;case"details":De("toggle",e);break;case"embed":case"source":case"link":De("error",e),De("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(_ in t)if(t.hasOwnProperty(_)&&(a=t[_],a!=null))switch(_){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,n));default:We(e,n,_,a,t,null)}return;default:if(bu(n)){for(O in t)t.hasOwnProperty(O)&&(a=t[O],a!==void 0&&gc(e,n,O,a,t,void 0));return}}for(o in t)t.hasOwnProperty(o)&&(a=t[o],a!=null&&We(e,n,o,a,t,null))}var Y1={};function G1(e,n,t,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,r=null,o=null,d=null,_=null,O=null;for(w in t){var C=t[w];if(t.hasOwnProperty(w)&&C!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":d=C;default:a.hasOwnProperty(w)||We(e,n,w,null,a,C)}}for(var v in a){var w=a[v];if(C=t[v],a.hasOwnProperty(v)&&(w!=null||C!=null))switch(v){case"type":w!==C&&(Ue=!0),l=w;break;case"name":w!==C&&(Ue=!0),i=w;break;case"checked":w!==C&&(Ue=!0),_=w;break;case"defaultChecked":w!==C&&(Ue=!0),O=w;break;case"value":w!==C&&(Ue=!0),r=w;break;case"defaultValue":w!==C&&(Ue=!0),o=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(c(137,n));break;default:w!==C&&We(e,n,v,w,a,C)}}ot(e,r,o,d,_,O,l,i);return;case"select":w=r=o=v=null;for(l in t)if(d=t[l],t.hasOwnProperty(l)&&d!=null)switch(l){case"value":break;case"multiple":w=d;default:a.hasOwnProperty(l)||We(e,n,l,null,a,d)}for(i in a)if(l=a[i],d=t[i],a.hasOwnProperty(i)&&(l!=null||d!=null))switch(i){case"value":l!==d&&(Ue=!0),v=l;break;case"defaultValue":l!==d&&(Ue=!0),o=l;break;case"multiple":l!==d&&(Ue=!0),r=l;default:l!==d&&We(e,n,i,l,a,d)}n=o,t=r,a=w,v!=null?Ri(e,!!t,v,!1):!!a!=!!t&&(n!=null?Ri(e,!!t,n,!0):Ri(e,!!t,t?[]:"",!1));return;case"textarea":w=v=null;for(o in t)if(i=t[o],t.hasOwnProperty(o)&&i!=null&&!a.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:We(e,n,o,null,a,i)}for(r in a)if(i=a[r],l=t[r],a.hasOwnProperty(r)&&(i!=null||l!=null))switch(r){case"value":i!==l&&(Ue=!0),v=i;break;case"defaultValue":i!==l&&(Ue=!0),w=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(c(91));break;default:i!==l&&We(e,n,r,i,a,l)}df(e,v,w);return;case"option":for(var V in t)v=t[V],t.hasOwnProperty(V)&&v!=null&&!a.hasOwnProperty(V)&&(V==="selected"?e.selected=!1:We(e,n,V,null,a,v));for(d in a)v=a[d],w=t[d],a.hasOwnProperty(d)&&v!==w&&(v!=null||w!=null)&&(d==="selected"?(v!==w&&(Ue=!0),e.selected=v&&typeof v!="function"&&typeof v!="symbol"):We(e,n,d,v,a,w));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in t)v=t[ne],t.hasOwnProperty(ne)&&v!=null&&!a.hasOwnProperty(ne)&&We(e,n,ne,null,a,v);for(_ in a)if(v=a[_],w=t[_],a.hasOwnProperty(_)&&v!==w&&(v!=null||w!=null))switch(_){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(c(137,n));break;default:We(e,n,_,v,a,w)}return;default:if(bu(n)){for(var we in t)v=t[we],t.hasOwnProperty(we)&&v!==void 0&&!a.hasOwnProperty(we)&&gc(e,n,we,void 0,a,v);for(O in a)v=a[O],w=t[O],!a.hasOwnProperty(O)||v===w||v===void 0&&w===void 0||gc(e,n,O,v,a,w);return}}for(var y in t)v=t[y],t.hasOwnProperty(y)&&v!=null&&!a.hasOwnProperty(y)&&We(e,n,y,null,a,v);for(C in a)v=a[C],w=t[C],!a.hasOwnProperty(C)||v===w||v==null&&w==null||We(e,n,C,v,a,w)}function Sm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function K1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),a=0;a<t.length;a++){var i=t[a],l=i.transferSize,r=i.initiatorType,o=i.duration;if(l&&o&&Sm(r)){for(r=0,o=i.responseEnd,a+=1;a<t.length;a++){var d=t[a],_=d.startTime;if(_>o)break;var O=d.transferSize,C=d.initiatorType;O&&Sm(C)&&(d=d.responseEnd,r+=O*(d<o?1:(o-_)/(d-_)))}if(--a,n+=8*(l+r)/(i.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var bc=null,vc=null;function dr(e){return e.nodeType===9?e:e.ownerDocument}function Tm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Em(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function wm(e,n,t,a){return t=dr(t).createElement(e),t[An]=a,t[B]=n,Yn(t,e,n),_n(t),t}function yc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var _c=null;function V1(){var e=window.event;return e&&e.type==="popstate"?e===_c?!1:(_c=e,!0):(_c=null,!1)}var Sc=typeof setTimeout=="function"?setTimeout:void 0,I1=typeof clearTimeout=="function"?clearTimeout:void 0,xm=typeof Promise=="function"?Promise:void 0,Om=typeof requestAnimationFrame=="function"?requestAnimationFrame:Sc,Q1=typeof queueMicrotask=="function"?queueMicrotask:typeof xm<"u"?function(e){return xm.resolve(null).then(e).catch(X1)}:Sc;function X1(e){setTimeout(function(){throw e})}function Xa(e){return e==="head"}function Nm(e,n){var t=n,a=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"||t==="/&"){if(a===0){e.removeChild(i),pl(n);return}a--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")a++;else if(t==="html")Mc(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Mc(t);for(var l=t.firstChild;l;){var r=l.nextSibling,o=l.nodeName;l[tt]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&l.rel.toLowerCase()==="stylesheet"||t.removeChild(l),l=r}}else t==="body"&&Mc(e.ownerDocument.body);t=i}while(t);pl(n)}function Am(e,n){var t=e;e=0;do{var a=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=a}while(t)}function Mm(e,n,t){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,t!=null&&(e.style.viewTransitionClass=t),t=getComputedStyle(e),t.display==="inline"){if(n=e.getClientRects(),n.length===1)var a=1;else for(var i=a=0;i<n.length;i++){var l=n[i];0<l.width&&0<l.height&&a++}a===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+t.paddingTop,e.marginBottom="-"+t.paddingBottom)}}function Cm(e,n){e=e.style,n=n.style;var t=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=t==null||typeof t=="boolean"?"":(""+t).trim(),t=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=t==null||typeof t=="boolean"?"":(""+t).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(t=n.display,e.display=t==null||typeof t=="boolean"?"":t,t=n.margin,t!=null?e.margin=t:(t=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=t==null||typeof t=="boolean"?"":t,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function Z1(e,n,t){return t=t.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=t.innerHeight&&e.left<=t.innerWidth}}function Tc(e){var n=e.getBoundingClientRect(),t=getComputedStyle(e);return Z1(n,t,e)}function J1(e){return e.documentElement.clientHeight}function F1(e){this.addEventListener("load",e),this.addEventListener("error",e)}function P1(e,n,t,a,i,l,r,o,d){var _=n.nodeType===9?n:n.ownerDocument;try{var O=_.startViewTransition({update:function(){var v=_.defaultView,w=v.navigation&&v.navigation.transition,V=_.fonts.status;a();var ne=[];if(V==="loaded"&&(J1(_),_.fonts.status==="loading"&&ne.push(_.fonts.ready)),V=ne.length,e!==null)for(var we=e.suspenseyImages,y=0,p=0;p<we.length;p++){var E=we[p];if(!E.complete){var A=E.getBoundingClientRect();if(0<A.bottom&&0<A.right&&A.top<v.innerHeight&&A.left<v.innerWidth){if(y+=Pm(E),y>Zs){ne.length=V;break}E=new Promise(F1.bind(E)),ne.push(E)}}}if(0<ne.length)return v=Promise.race([Promise.all(ne),new Promise(function(W){return setTimeout(W,500)})]).then(i,i),(w?Promise.allSettled([w.finished,v]):v).then(l,l);if(i(),w)return w.finished.then(l,l);l()},types:t});_.__reactViewTransition=O;var C=[];return O.ready.then(function(){for(var v=_.documentElement.getAnimations({subtree:!0}),w=0;w<v.length;w++){var V=v[w],ne=V.effect,we=ne.pseudoElement;if(we!=null&&we.startsWith("::view-transition")){C.push(V),V=ne.getKeyframes();for(var y=we=void 0,p=!0,E=0;E<V.length;E++){var A=V[E],W=A.width;if(we===void 0)we=W;else if(we!==W){p=!1;break}if(W=A.height,y===void 0)y=W;else if(y!==W){p=!1;break}delete A.width,delete A.height,A.transform==="none"&&delete A.transform}p&&we!==void 0&&y!==void 0&&(ne.setKeyframes(V),p=getComputedStyle(ne.target,ne.pseudoElement),p.width!==we||p.height!==y)&&(p=V[0],p.width=we,p.height=y,p=V[V.length-1],p.width=we,p.height=y,ne.setKeyframes(V))}}r()},function(v){_.__reactViewTransition===O&&(_.__reactViewTransition=null);try{typeof v=="object"&&v!==null&&v.name==="InvalidStateError"&&(v.message==="View transition was skipped because document visibility state is hidden."||v.message==="Skipping view transition because document visibility state has become hidden."||v.message==="Skipping view transition because viewport size changed."||v.message==="Transition was aborted because of invalid state")&&(v=null),v!==null&&d(v)}finally{a(),i(),r()}}),O.finished.finally(function(){for(var v=0;v<C.length;v++)C[v].cancel();_.__reactViewTransition===O&&(_.__reactViewTransition=null),o()}),O}catch{return a(),i(),r(),null}}function Ti(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}Ti.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:le({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},Ti.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,t=e.getAnimations({subtree:!0}),a=[],i=0;i<t.length;i++){var l=t[i].effect;l!==null&&l.target===e&&l.pseudoElement===n&&a.push(t[i])}return a},Ti.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Rm(e){return{name:e,group:new Ti("group",e),imagePair:new Ti("image-pair",e),old:new Ti("old",e),new:new Ti("new",e)}}function gt(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}gt.prototype.addEventListener=function(e,n,t){var a=null,i=null;if(!(t!=null&&typeof t!="boolean"&&(a=t.signal||null,a!==null&&a.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var l=this._eventListeners;if(Dm(l,e,n,t)===-1){var r=this,o=n;t!=null&&typeof t!="boolean"&&t.once===!0&&(o=function(d){r.removeEventListener(e,n,t),typeof n=="function"?n.call(this,d):n.handleEvent(d)}),a!==null&&(i=r.removeEventListener.bind(r,e,n,t),a.addEventListener("abort",i,{once:!0}),i=a.removeEventListener.bind(a,"abort",i)),a=ol(t),l.push({type:e,listener:n,optionsOrUseCapture:t,attachedListener:o,cleanup:i}),g(this._fragmentFiber.child,!1,W1,e,o,a)}this._eventListeners=l}};function W1(e,n,t,a){return $(e).addEventListener(n,t,a),!1}gt.prototype.removeEventListener=function(e,n,t){var a=this._eventListeners;if(a!==null&&(n=Dm(a,e,n,t),n!==-1)){var i=a[n];t=i.attachedListener;var l=i.cleanup;i=ol(i.optionsOrUseCapture),g(this._fragmentFiber.child,!1,$1,e,t,i),a.splice(n,1),l!==null&&l()}};function $1(e,n,t,a){return $(e).removeEventListener(n,t,a),!1}function ol(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function km(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function Dm(e,n,t,a){if(e.length===0)return-1;a=km(a);for(var i=0;i<e.length;i++){var l=e[i];if(l.type===n&&l.listener===t&&km(l.optionsOrUseCapture)===a)return i}return-1}gt.prototype.dispatchEvent=function(e){var n=x(this._fragmentFiber);if(n===null)return!0;n=$(n);var t=this._eventListeners;if(t!==null&&0<t.length||!e.bubbles){var a=n.nodeType===9?n.createComment(""):document.createTextNode("");if(t)for(var i=0;i<t.length;i++){var l=t[i];a.addEventListener(l.type,l.attachedListener,ol(l.optionsOrUseCapture))}if(n.appendChild(a),e=a.dispatchEvent(e),t)for(i=0;i<t.length;i++)l=t[i],a.removeEventListener(l.type,l.attachedListener,ol(l.optionsOrUseCapture));return n.removeChild(a),e}return n.dispatchEvent(e)},gt.prototype.focus=function(e){g(this._fragmentFiber.child,!0,jm,e,void 0,void 0)};function jm(e,n){return e.tag===6?!1:(e=$(e),f0(e,n))}gt.prototype.focusLast=function(e){var n=[];g(this._fragmentFiber.child,!0,Ec,n,void 0,void 0);for(var t=n.length-1;0<=t&&!jm(n[t],e);t--);};function Ec(e,n){return n.push(e),!1}gt.prototype.blur=function(){var e=x(this._fragmentFiber);e!==null&&(e=$(e),e=dr(e).activeElement,e!==null&&g(this._fragmentFiber.child,!1,e0,e,void 0,void 0))};function e0(e,n){return e.tag===6?!1:(e=$(e),e===n||e.contains(n)?(n.blur(),!0):!1)}gt.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),g(this._fragmentFiber.child,!1,n0,e,void 0,void 0)};function n0(e,n){return e.tag===6||(e=$(e),n.observe(e)),!1}gt.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),g(this._fragmentFiber.child,!1,t0,e,void 0,void 0);for(var t=n=0;t<Lt.length;t++){var a=Lt[t];a.fragmentInstance===this&&a.observer===e?e.unobserve(a.instance):Lt[n++]=a}Lt.length=n}};function t0(e,n){return e.tag===6||(e=$(e),n.unobserve(e)),!1}var Lt=[],wc=!1;function a0(e,n,t){Lt.push({fragmentInstance:e,observer:n,instance:t}),wc||(wc=!0,d0(function(){wc=!1;var a=Lt;Lt=[];for(var i=0;i<a.length;i++){var l=a[i];l.observer.unobserve(l.instance)}}))}gt.prototype.getClientRects=function(){var e=[];return g(this._fragmentFiber.child,!1,i0,e,void 0,void 0),e};function i0(e,n){if(e.tag===6){e=e.stateNode;var t=e.ownerDocument.createRange();t.selectNodeContents(e),n.push.apply(n,t.getClientRects())}else e=$(e),n.push.apply(n,e.getClientRects());return!1}gt.prototype.getRootNode=function(e){var n=x(this._fragmentFiber);return n===null?this:$(n).getRootNode(e)},gt.prototype.compareDocumentPosition=function(e){var n=x(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var t=[];g(this._fragmentFiber.child,!1,Ec,t,void 0,void 0);var a=$(n);if(t.length===0){if(t=a,Y(this._fragmentFiber)){e:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break e}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(t=n)}n=this._fragmentFiber;var i=a=t.compareDocumentPosition(e);return t===e?i=Node.DOCUMENT_POSITION_CONTAINS:a&Node.DOCUMENT_POSITION_CONTAINED_BY&&(t=H(n)[1],t===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=$(t).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=$(t[0]),i=$(t[t.length-1]);var l=Y(this._fragmentFiber)?n.parentElement:a;if(l==null)return Node.DOCUMENT_POSITION_DISCONNECTED;a=l.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,l=l.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=n.compareDocumentPosition(e),o=i.compareDocumentPosition(e),d=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=a&&l&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,n=a&&n===e||l&&i===e||d||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!a&&n===e||!l&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||l0(n,this._fragmentFiber,t[0],t[t.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function l0(e,n,t,a,i){var l=Rn(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(t=!!l)e:{for(;l!==null;){if(l.tag===7&&(l===n||l.alternate===n)){t=!0;break e}l=l.return}t=!1}return t}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(l===null)return l=i.ownerDocument,i===l||i===l.documentElement||i===l.body;e:{for(l=n,n=x(n);l!==null;){if(!(l.tag!==5&&l.tag!==3&&l.tag!==27||l!==n&&l.alternate!==n)){l=!0;break e}l=l.return}l=!1}return l}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!l)&&!(n=l===t)&&(n=Be(t,l,Ge),n===null?n=!1:(g(n,!0,fe,l,t),l=ve,ve=null,n=l!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!l)&&!(n=l===a)&&(n=Be(a,l,Ge),n===null?n=!1:(g(n,!0,xe,l,a),l=ve,de=ve=null,n=l!==null)),n):!1}function zm(e,n){var t=e.ownerDocument.createRange();t.selectNodeContents(e),e=t.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}gt.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(c(566));var n=[];g(this._fragmentFiber.child,!1,Ec,n,void 0,void 0);var t=e!==!1;if(n.length===0){var a=H(this._fragmentFiber);if(a=t?a[1]||a[0]||x(this._fragmentFiber):a[0]||a[1],a===null)return;if(a.tag===6){e=$(a),zm(e,t);return}if(a=$(a),a.nodeType!==9){if(a.nodeType===11){t="host"in a?a.host:null,t!==null&&t.scrollIntoView(e);return}a.scrollIntoView(e)}}for(a=t?n.length-1:0;a!==(t?-1:n.length);){var i=n[a];i.tag===6?(i=$(i),zm(i,t)):$(i).scrollIntoView(e),a+=t?-1:1}};function r0(e,n){return e=$(e),Bm(e,n),!1}function Bm(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function Lm(e,n){var t=n._eventListeners;if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];e.addEventListener(i.type,i.attachedListener,ol(i.optionsOrUseCapture))}e.nodeType!==3&&(t=n._observers,t!==null&&t.forEach(function(l){for(var r=0,o=0;o<Lt.length;o++){var d=Lt[o];(d.fragmentInstance!==n||d.observer!==l||d.instance!==e)&&(Lt[r++]=d)}Lt.length=r,l.observe(e)}),Bm(e,n))}function s0(e,n){var t=n._eventListeners;if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];e.removeEventListener(i.type,i.attachedListener,ol(i.optionsOrUseCapture))}e.nodeType!==3&&(t=n._observers,t!==null&&t.forEach(function(l){typeof l.rootMargin=="string"?a0(n,l,e):l.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function xc(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":xc(t),Cn(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function u0(e,n,t,a){for(;e.nodeType===1;){var i=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[tt])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=Nt(e.nextSibling),e===null)break}return null}function o0(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Nt(e.nextSibling),e===null))return null;return e}function Um(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Nt(e.nextSibling),e===null))return null;return e}function Oc(e){return e.data==="$?"||e.data==="$~"}function Nc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function c0(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var a=function(){n(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Nt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Ac=null;function qm(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return Nt(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function Hm(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function f0(e,n){function t(){a=!0}if(e.ownerDocument.activeElement===e)return!0;var a=!1;try{e.ownerDocument.addEventListener("focus",t,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",t,!0)}return a}function d0(e){Om(function(){Om(function(n){return e(n)})})}function Ym(e,n,t){switch(n=dr(t),e){case"html":if(e=n.documentElement,!e)throw Error(c(452));return e;case"head":if(e=n.head,!e)throw Error(c(453));return e;case"body":if(e=n.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Gm(e,n,t){for(var a in t){var i=t[a];t.hasOwnProperty(a)&&i!=null&&We(e,n,a,null,Y1,i)}t.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Yt&&(e.onclick=null),Cn(e)}function Mc(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Cn(e)}var At=new Map,Km=new Set;function hr(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var ba=oe.d;oe.d={f:h0,r:m0,D:p0,C:g0,L:b0,m:v0,X:_0,S:y0,M:S0};function h0(){var e=ba.f(),n=qs();return e||n}function m0(e){var n=na(e);n!==null&&n.tag===5&&n.type==="form"?Id(n):ba.r(e)}var cl=typeof document>"u"?null:document;function Vm(e,n,t){var a=cl;if(a&&typeof n=="string"&&n){var i=Je(n);i='link[rel="'+e+'"][href="'+i+'"]',typeof t=="string"&&(i+='[crossorigin="'+t+'"]'),Km.has(i)||(Km.add(i),e={rel:e,crossOrigin:t,href:n},a.querySelector(i)===null&&(n=a.createElement("link"),Yn(n,"link",e),_n(n),a.head.appendChild(n)))}}function p0(e){ba.D(e),Vm("dns-prefetch",e,null)}function g0(e,n){ba.C(e,n),Vm("preconnect",e,n)}function b0(e,n,t){ba.L(e,n,t);var a=cl;if(a&&e&&n){var i='link[rel="preload"][as="'+Je(n)+'"]';n==="image"&&t&&t.imageSrcSet?(i+='[imagesrcset="'+Je(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(i+='[imagesizes="'+Je(t.imageSizes)+'"]')):i+='[href="'+Je(e)+'"]';var l=i;switch(n){case"style":l=fl(e);break;case"script":l=dl(e)}if(!(At.has(l)||(e=le({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),At.set(l,e),a.querySelector(i)!==null||n==="style"&&a.querySelector(mr(l))||n==="script"&&a.querySelector(pr(l))))){var r=a.createElement("link");Yn(r,"link",e),n==="style"&&(r[ea]=!0,r.onload=r.onerror=function(){jr(r)}),_n(r),a.head.appendChild(r)}}}function v0(e,n){ba.m(e,n);var t=cl;if(t&&e){var a=n&&typeof n.as=="string"?n.as:"script",i='link[rel="modulepreload"][as="'+Je(a)+'"][href="'+Je(e)+'"]',l=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=dl(e)}if(!At.has(l)&&(e=le({rel:"modulepreload",href:e},n),At.set(l,e),t.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(pr(l)))return}a=t.createElement("link"),Yn(a,"link",e),_n(a),t.head.appendChild(a)}}}function y0(e,n,t){ba.S(e,n,t);var a=cl;if(a&&e){var i=ta(a).hoistableStyles,l=fl(e);n=n||"default";var r=i.get(l);if(!r){var o={loading:0,preload:null};if(r=a.querySelector(mr(l)))o.loading=5;else{e=le({rel:"stylesheet",href:e,"data-precedence":n},t),(t=At.get(l))&&Cc(e,t);var d=r=a.createElement("link");_n(d),Yn(d,"link",e),d._p=new Promise(function(_,O){d.onload=_,d.onerror=O}),d.addEventListener("load",function(){o.loading|=1}),d.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Qs(r,n,a)}r={type:"stylesheet",instance:r,count:1,state:o},i.set(l,r)}}}function _0(e,n){ba.X(e,n);var t=cl;if(t&&e){var a=ta(t).hoistableScripts,i=dl(e),l=a.get(i);l||(l=t.querySelector(pr(i)),l||(e=le({src:e,async:!0},n),(n=At.get(i))&&Rc(e,n),l=t.createElement("script"),_n(l),Yn(l,"link",e),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function S0(e,n){ba.M(e,n);var t=cl;if(t&&e){var a=ta(t).hoistableScripts,i=dl(e),l=a.get(i);l||(l=t.querySelector(pr(i)),l||(e=le({src:e,async:!0,type:"module"},n),(n=At.get(i))&&Rc(e,n),l=t.createElement("script"),_n(l),Yn(l,"link",e),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function Im(e,n,t,a){var i=(i=Ut.current)?hr(i):null;if(!i)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(t=fl(t.href),n=ta(i).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=fl(t.href);var l=ta(i).hoistableStyles,r=l.get(e);if(r||(i=i.ownerDocument||i,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,r),(l=i.querySelector(mr(e)))?l._p||(r.instance=l,r.state.loading=5):(l=At.get(e),l||(l={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},At.set(e,l)),T0(i,e,l,r.state))),n&&a===null)throw Error(c(528,""));return r}if(n&&a!==null)throw Error(c(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(t=dl(t),n=ta(i).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function fl(e){return'href="'+Je(e)+'"'}function mr(e){return'link[rel="stylesheet"]['+e+"]"}function Qm(e){return le({},e,{"data-precedence":e.precedence,precedence:null})}function T0(e,n,t,a){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[ea]!==!0){a.loading=1;return}}else n=e.createElement("link"),n[ea]=!0,n.onload=n.onerror=jr.bind(null,n),Yn(n,"link",t),_n(n),e.head.appendChild(n);a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2})}function dl(e){return'[src="'+Je(e)+'"]'}function pr(e){return"script[async]"+e}function Xm(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var a=e.querySelector('style[data-href~="'+Je(t.href)+'"]');if(a)return n.instance=a,_n(a),a;var i=le({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),_n(a),Yn(a,"style",i),Qs(a,t.precedence,e),n.instance=a;case"stylesheet":i=fl(t.href);var l=e.querySelector(mr(i));if(l)return n.state.loading|=4,n.instance=l,_n(l),l;a=Qm(t),(i=At.get(i))&&Cc(a,i),l=(e.ownerDocument||e).createElement("link"),_n(l);var r=l;return r._p=new Promise(function(o,d){r.onload=o,r.onerror=d}),Yn(l,"link",a),n.state.loading|=4,Qs(l,t.precedence,e),n.instance=l;case"script":return l=dl(t.src),(i=e.querySelector(pr(l)))?(n.instance=i,_n(i),i):(a=t,(i=At.get(l))&&(a=le({},t),Rc(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),_n(i),Yn(i,"link",a),e.head.appendChild(i),n.instance=i);case"void":return null;default:throw Error(c(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,Qs(a,t.precedence,e));return n.instance}function Qs(e,n,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,l=i,r=0;r<a.length;r++){var o=a[r];if(o.dataset.precedence===n)l=o;else if(l!==i)break}l?l.parentNode.insertBefore(e,l.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function Cc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Rc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Xs=null;function Zm(e,n,t){if(Xs===null){var a=new Map,i=Xs=new Map;i.set(t,a)}else i=Xs,a=i.get(t),a||(a=new Map,i.set(t,a));if(a.has(e))return a;for(a.set(e,null),t=t.getElementsByTagName(e),i=0;i<t.length;i++){var l=t[i];if(!(l[tt]||l[An]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var r=l.getAttribute(n)||"";r=e+r;var o=a.get(r);o?o.push(l):a.set(r,[l])}}return a}function kc(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function E0(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Jm(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Fm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Pm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Wm(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=Pm(n),e.suspenseyImages.push(n)),e=O0.bind(e),n.decode().then(e,e))}function w0(e,n,t,a){if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=fl(a.href),l=n.querySelector(mr(i));if(l){n=l._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=gr.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=l,_n(l);return}l=n.ownerDocument||n,a=Qm(a),(i=At.get(i))&&Cc(a,i),l=l.createElement("link"),_n(l);var r=l;r._p=new Promise(function(o,d){r.onload=o,r.onerror=d}),Yn(l,"link",a),t.instance=l}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=gr.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var Zs=0;function x0(e,n){return e.stylesheets&&e.count===0&&Fs(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var a=setTimeout(function(){if(e.stylesheets&&Fs(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4+n);0<e.imgBytes&&Zs===0&&(Zs=62500*K1());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Fs(e,e.stylesheets),e.unsuspend)){var l=e.unsuspend;e.unsuspend=null,l()}},(e.imgBytes>Zs?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(i)}}:null}function $m(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Fs(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function gr(){this.count--,$m(this)}function O0(){this.imgCount--,$m(this)}var Js=null;function Fs(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Js=new Map,n.forEach(N0,e),Js=null,gr.call(e))}function N0(e,n){if(!(n.state.loading&4)){var t=Js.get(e);if(t)var a=t.get(null);else{t=new Map,Js.set(e,t);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var r=i[l];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(t.set(r.dataset.precedence,r),a=r)}a&&t.set(null,a)}i=n.instance,r=i.getAttribute("data-precedence"),l=t.get(r)||a,l===a&&t.set(null,i),t.set(r,i),this.count++,a=gr.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),l?l.parentNode.insertBefore(i,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),n.state.loading|=4}}var hl={$$typeof:on,Provider:null,Consumer:null,_currentValue:Wn,_currentValue2:Wn,_threadCount:0};function A0(e,n,t,a,i,l,r,o,d){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xa(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xa(0),this.hiddenUpdates=xa(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.transitionTypes=null,this.incompleteTransitions=new Map}function ep(e,n,t,a,i,l,r,o,d,_,O,C){return e=new A0(e,n,t,r,d,_,O,C,o),n=1,l===!0&&(n|=24),l=at(3,null,null,n),e.current=l,l.stateNode=e,n=Qu(),n.refCount++,e.pooledCache=n,n.refCount++,l.memoizedState={element:a,isDehydrated:t,cache:n},Fu(l),e}function np(e){return e?(e=qi,e):qi}function tp(e,n,t,a,i,l){i=np(i),a.context===null?a.context=i:a.pendingContext=i,a=za(n),a.payload={element:t},l=l===void 0?null:l,l!==null&&(a.callback=l),t=Ba(e,a,n),t!==null&&(st(t,e,n),Xl(t,e,n))}function ap(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Dc(e,n){ap(e,n),(e=e.alternate)&&ap(e,n)}function ip(e){if(e.tag===13||e.tag===31){var n=li(e,67108864);n!==null&&st(n,e,67108864),Dc(e,67108864)}}function lp(e){if(e.tag===13||e.tag===31){var n=pt();n=Ai(n);var t=li(e,n);t!==null&&st(t,e,n),Dc(e,n)}}var ml=!0;function M0(e,n,t,a){var i=ee.T;ee.T=null;var l=oe.p;try{oe.p=2,jc(e,n,t,a)}finally{oe.p=l,ee.T=i}}function C0(e,n,t,a){var i=ee.T;ee.T=null;var l=oe.p;try{oe.p=8,jc(e,n,t,a)}finally{oe.p=l,ee.T=i}}function jc(e,n,t,a){if(ml){var i=zc(a);if(i===null)pc(e,n,a,Ps,t),sp(e,a);else if(k0(i,e,n,t,a))a.stopPropagation();else if(sp(e,a),n&4&&-1<R0.indexOf(e)){for(;i!==null;){var l=na(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var r=$t(l.pendingLanes);if(r!==0){var o=l;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var d=1<<31-K(r);o.entanglements[1]|=d,r&=~d}Pt(l),(Ie&6)===0&&(Bs=Vn()+500,or(0))}}break;case 31:case 13:o=li(l,2),o!==null&&st(o,l,2),qs(),Dc(l,2)}if(l=zc(a),l===null&&pc(e,n,a,Ps,t),l===i)break;i=l}i!==null&&a.stopPropagation()}else pc(e,n,a,null,t)}}function zc(e){return e=yu(e),Bc(e)}var Ps=null;function Bc(e){if(Ps=null,e=Rn(e),e!==null){var n=R(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=M(n),e!==null)return e;e=null}else if(t===31){if(e=D(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Ps=e,null}function rp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ar()){case Mr:return 2;case Nl:return 8;case Ct:case m:return 32;case k:return 268435456;default:return 32}default:return 32}}var Lc=!1,Za=null,Ja=null,Fa=null,br=new Map,vr=new Map,Pa=[],R0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sp(e,n){switch(e){case"focusin":case"focusout":Za=null;break;case"dragenter":case"dragleave":Ja=null;break;case"mouseover":case"mouseout":Fa=null;break;case"pointerover":case"pointerout":br.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":vr.delete(n.pointerId)}}function yr(e,n,t,a,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:l,targetContainers:[i]},n!==null&&(n=na(n),n!==null&&ip(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function k0(e,n,t,a,i){switch(n){case"focusin":return Za=yr(Za,e,n,t,a,i),!0;case"dragenter":return Ja=yr(Ja,e,n,t,a,i),!0;case"mouseover":return Fa=yr(Fa,e,n,t,a,i),!0;case"pointerover":var l=i.pointerId;return br.set(l,yr(br.get(l)||null,e,n,t,a,i)),!0;case"gotpointercapture":return l=i.pointerId,vr.set(l,yr(vr.get(l)||null,e,n,t,a,i)),!0}return!1}function up(e){var n=Rn(e.target);if(n!==null){var t=R(n);if(t!==null){if(n=t.tag,n===13){if(n=M(t),n!==null){e.blockedOn=n,Dr(e.priority,function(){lp(t)});return}}else if(n===31){if(n=D(t),n!==null){e.blockedOn=n,Dr(e.priority,function(){lp(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ws(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=zc(e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);vu=a,t.target.dispatchEvent(a),vu=null}else return n=na(t),n!==null&&ip(n),e.blockedOn=t,!1;n.shift()}return!0}function op(e,n,t){Ws(e)&&t.delete(n)}function D0(){Lc=!1,Za!==null&&Ws(Za)&&(Za=null),Ja!==null&&Ws(Ja)&&(Ja=null),Fa!==null&&Ws(Fa)&&(Fa=null),br.forEach(op),vr.forEach(op)}function $s(e,n){e.blockedOn===n&&(e.blockedOn=null,Lc||(Lc=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,D0)))}var eu=null;function cp(e){eu!==e&&(eu=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){eu===e&&(eu=null);for(var n=0;n<e.length;n+=3){var t=e[n],a=e[n+1],i=e[n+2];if(typeof a!="function"){if(Bc(a||t)===null)continue;break}var l=na(t);l!==null&&(e.splice(n,3),n-=3,vo(l,{pending:!0,data:i,method:t.method,action:a},a,i))}}))}function pl(e){function n(d){return $s(d,e)}Za!==null&&$s(Za,e),Ja!==null&&$s(Ja,e),Fa!==null&&$s(Fa,e),br.forEach(n),vr.forEach(n);for(var t=0;t<Pa.length;t++){var a=Pa[t];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Pa.length&&(t=Pa[0],t.blockedOn===null);)up(t),t.blockedOn===null&&Pa.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var i=t[a],l=t[a+1],r=i[B]||null;if(typeof l=="function")r||cp(t);else if(r){var o=null;if(l&&l.hasAttribute("formAction")){if(i=l,r=l[B]||null)o=r.formAction;else if(Bc(i)!==null)continue}else o=r.action;typeof o=="function"?t[a+1]=o:(t.splice(a,3),a-=3),cp(t)}}}function fp(){function e(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(r){return i=r})},focusReset:"manual",scroll:"manual"})}function n(){i!==null&&(i(),i=null),a||setTimeout(t,20)}function t(){if(!a&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),i!==null&&(i(),i=null)}}}function Uc(e){this._internalRoot=e}nu.prototype.render=Uc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(c(409));var t=n.current,a=pt();tp(t,a,e,n,null,null)},nu.prototype.unmount=Uc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;tp(e.current,2,null,e,null,null),qs(),n[te]=null}};function nu(e){this._internalRoot=e}nu.prototype.unstable_scheduleHydration=function(e){if(e){var n=kr();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Pa.length&&n!==0&&n<Pa[t].priority;t++);Pa.splice(t,0,e),t===0&&up(e)}};var dp=h.version;if(dp!=="19.3.1")throw Error(c(527,dp,"19.3.1"));oe.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=q(n),e=e!==null?z(e):null,e=e===null?null:e.stateNode,e};var j0={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:ee,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tu.isDisabled&&tu.supportsFiber)try{tn=tu.inject(j0),Le=tu}catch{}}return Sr.createRoot=function(e,n){if(!S(e))throw Error(c(299));var t=!1,a="",i=nh,l=th,r=ah;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(l=n.onCaughtError),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=ep(e,1,!1,null,null,t,a,null,i,l,r,fp),e[te]=n.current,mc(e),new Uc(n)},Sr.hydrateRoot=function(e,n,t){if(!S(e))throw Error(c(299));var a=!1,i="",l=nh,r=th,o=ah,d=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError),t.formState!==void 0&&(d=t.formState)),n=ep(e,1,!0,n,t??null,a,i,d,l,r,o,fp),n.context=np(null),t=n.current,a=pt(),a=Ai(a),i=za(a),i.callback=null,Ba(t,i,a),t=a,n.current.lanes=t,ti(n,t),Pt(n),e[te]=n.current,mc(e),new nu(n)},Sr.version="19.3.1",Sr}var Tp;function K0(){if(Tp)return Hc.exports;Tp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(h){console.error(h)}}return s(),Hc.exports=G0(),Hc.exports}var V0=K0();const I0=_l(V0);var L=rf();const fu=_l(L),sf=["python","javascript","java","cpp"];function Q0(){try{const s=localStorage.getItem("selectedLanguage");return s&&sf.includes(s)?s:"python"}catch{return"python"}}const Vp=L.createContext(void 0),X0=({children:s})=>{const[h,f]=L.useState(Q0);return L.useEffect(()=>{try{localStorage.setItem("selectedLanguage",h)}catch{}},[h]),u.jsx(Vp.Provider,{value:{selectedLanguage:h,setSelectedLanguage:f},children:s})};function Ip(){const s=L.useContext(Vp);if(s===void 0)throw new Error("useLanguage must be used within a LanguageProvider");return s}const Qp=L.createContext(void 0);function Z0({children:s}){const[h,f]=L.useState(!1),c=()=>f(!0),S=()=>f(!1),R=()=>f(!h);return u.jsx(Qp.Provider,{value:{isSidebarOpen:h,showSidebar:c,hideSidebar:S,toggleSidebar:R},children:s})}function uf(){const s=L.useContext(Qp);if(s===void 0)throw new Error("useSidebar must be used within SidebarProvider");return s}const Xp=L.createContext(void 0);function J0({children:s}){const[h,f]=L.useState("finder");return u.jsx(Xp.Provider,{value:{view:h,setView:f},children:s})}function du(){const s=L.useContext(Xp);if(s===void 0)throw new Error("useView must be used within ViewProvider");return s}const F0="_topbar_1t6u3_1",P0="_container_1t6u3_17",W0="_visuallyHidden_1t6u3_44",$0="_wordmark_1t6u3_56",eb="_title_1t6u3_74",nb="_segmented_1t6u3_91",tb="_segment_1t6u3_91",ab="_tools_1t6u3_166",ib="_select_1t6u3_178",lb="_selectChevron_1t6u3_222",rb="_iconLink_1t6u3_238",sb="_hamburger_1t6u3_267",ub="_hamburgerIcon_1t6u3_284",ob="_hamburgerTop_1t6u3_294",cb="_open_1t6u3_297",fb="_hamburgerMiddle_1t6u3_301",db="_hamburgerBottom_1t6u3_308",vn={topbar:F0,container:P0,visuallyHidden:W0,wordmark:$0,title:eb,segmented:nb,segment:tb,tools:ab,select:ib,selectChevron:lb,iconLink:rb,hamburger:sb,hamburgerIcon:ub,hamburgerTop:ob,open:cb,hamburgerMiddle:fb,hamburgerBottom:db};function Ye(...s){let h="";for(const f of s)if(f){if(typeof f=="string"||typeof f=="number")h+=(h&&" ")+f;else if(Array.isArray(f)){const c=Ye(...f);c&&(h+=(h&&" ")+c)}else if(typeof f=="object")for(const c in f)f[c]&&(h+=(h&&" ")+c)}return h}function Zp(){const s=document.documentElement,h=getComputedStyle(s).getPropertyValue("--navbar-height");return parseFloat(h)||76}function of(s,h=0){const f=document.querySelector(s);if(!f)return;const c=f.getBoundingClientRect().top+window.scrollY,S=window.matchMedia("(prefers-reduced-motion: reduce)").matches;window.scrollTo({top:Math.max(0,c-h),behavior:S?"auto":"smooth"})}const hb=2,mb=2e3;let af=0;function cf(){cancelAnimationFrame(af)}function pb(s,h){cf();const f=performance.now();let c=-1,S=0;const R=()=>{const M=document.querySelector(s);if(M){const U=M.getBoundingClientRect().top+window.scrollY;S=U===c?S+1:0,c=U}const D=performance.now()-f>mb;if(S>=hb||D){of(s,h);return}af=requestAnimationFrame(R)};af=requestAnimationFrame(R)}const gb="modulepreload",bb=function(s){return"/leetcode-pattern-drill/"+s},Ep={},xr=function(h,f,c){let S=Promise.resolve();if(f&&f.length>0){let U=function(q){return Promise.all(q.map(z=>Promise.resolve(z).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const M=document.querySelector("meta[property=csp-nonce]"),D=M?.nonce||M?.getAttribute("nonce");S=U(f.map(q=>{if(q=bb(q),q in Ep)return;Ep[q]=!0;const z=q.endsWith(".css"),g=z?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${q}"]${g}`))return;const x=document.createElement("link");if(x.rel=z?"stylesheet":gb,z||(x.as="script"),x.crossOrigin="",x.href=q,D&&x.setAttribute("nonce",D),document.head.appendChild(x),z)return new Promise((Y,H)=>{x.addEventListener("load",Y),x.addEventListener("error",()=>H(new Error(`Unable to preload CSS for ${q}`)))})}))}function R(M){const D=new Event("vite:preloadError",{cancelable:!0});if(D.payload=M,window.dispatchEvent(D),!D.defaultPrevented)throw M}return S.then(M=>{for(const D of M||[])D.status==="rejected"&&R(D.reason);return h().catch(R)})},vb="_button_1ebwq_1",yb={button:vb},_b="dyslexic-font";function wp(){xr(()=>Promise.resolve({}),__vite__mapDeps([0])),xr(()=>Promise.resolve({}),__vite__mapDeps([1]))}function Sb(){const[s,h]=L.useState(!1);L.useEffect(()=>{const c=document.documentElement.getAttribute("data-font")==="dyslexic";c&&wp(),h(c)},[]);const f=()=>{const c=!s;h(c),c?(wp(),document.documentElement.setAttribute("data-font","dyslexic")):document.documentElement.removeAttribute("data-font"),document.documentElement.dispatchEvent(new Event("fontChange"));try{localStorage.setItem(_b,c?"1":"0")}catch{}};return u.jsx("button",{type:"button",className:yb.button,"aria-pressed":s,"aria-label":"OpenDyslexic font",title:"Use the OpenDyslexic font",onClick:f,children:"Aa"})}const Tb="_container_1j9je_1",Eb="_input_1j9je_7",wb="_label_1j9je_18",xb="_indicator_1j9je_41",Ob="_sun_1j9je_65",Nb="_moon_1j9je_72",gl={container:Tb,input:Eb,label:wb,indicator:xb,sun:Ob,moon:Nb},Ab="theme";function xp(){document.documentElement.dispatchEvent(new Event("themeChange"))}function Mb(){const[s,h]=L.useState("dark");L.useEffect(()=>{const c=document.documentElement.getAttribute("data-theme")==="light"?"light":"dark";h(c),xp()},[]);const f=()=>{const c=s==="light"?"dark":"light";h(c),document.documentElement.setAttribute("data-theme",c);try{localStorage.setItem(Ab,c)}catch{}xp()};return u.jsxs("div",{className:gl.container,children:[u.jsx("input",{className:gl.input,"aria-label":"Light theme",role:"switch",id:"theme-switch",type:"checkbox",checked:s==="light",onChange:f}),u.jsx("label",{className:gl.label,htmlFor:"theme-switch",title:"Toggle light theme",children:u.jsxs("span",{className:gl.indicator,children:[u.jsx("svg",{className:gl.moon,viewBox:"0 0 16 16","aria-hidden":"true",children:u.jsx("path",{d:"M13 9.5A5.5 5.5 0 0 1 6.5 3a5.5 5.5 0 1 0 6.5 6.5Z"})}),u.jsxs("svg",{className:gl.sun,viewBox:"0 0 16 16","aria-hidden":"true",children:[u.jsx("circle",{cx:"8",cy:"8",r:"2.75"}),u.jsx("path",{d:"M8 1.5v1.75M8 12.75v1.75M1.5 8h1.75M12.75 8h1.75M3.4 3.4l1.25 1.25M11.35 11.35l1.25 1.25M3.4 12.6l1.25-1.25M11.35 4.65l1.25-1.25"})]})]})})]})}function Cb(){return u.jsx("svg",{viewBox:"0 0 128 128",children:u.jsxs("g",{fill:"var(--svg-github-fill)",children:[u.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"}),u.jsx("path",{d:"M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm2.382 3.477c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237m4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"})]})})}const Rb=[{id:"finder",label:"Pattern Finder"},{id:"pareto",label:"Pareto Set"},{id:"cheatsheet",label:"Reference"}],kb={python:"Python",javascript:"JavaScript",java:"Java",cpp:"C++"};function Db({forwardedRef:s}){const h=L.useRef(null),{isSidebarOpen:f,showSidebar:c,hideSidebar:S,toggleSidebar:R}=uf(),{view:M,setView:D}=du(),{selectedLanguage:U,setSelectedLanguage:q}=Ip();L.useLayoutEffect(()=>{if(!h.current)return;const H=new ResizeObserver(X=>{for(const $ of X){const ve=$.borderBoxSize[0].blockSize;document.documentElement.style.setProperty("--topbar-height",`${ve}px`)}});return H.observe(h.current),()=>H.disconnect()},[]);const z=H=>{H.preventDefault(),window.history.replaceState({},"",window.location.pathname),of("main",Zp()-2)},g=()=>R(),x=H=>{H!==M&&(cf(),D(H),H!=="cheatsheet"?S():window.matchMedia("(max-width: 768px)").matches||c(),window.scrollTo({top:0}))},Y=H=>{q(H.target.value)};return u.jsx("header",{ref:h,className:vn.topbar,children:u.jsxs("div",{className:vn.container,children:[M==="cheatsheet"&&u.jsxs("button",{ref:s,type:"button",className:vn.hamburger,onClick:g,"aria-label":f?"Hide reference sections":"Show reference sections","aria-expanded":f,"aria-controls":"reference-sections",children:[u.jsx("span",{className:Ye(vn.hamburgerIcon,vn.hamburgerTop,f&&vn.open)}),u.jsx("span",{className:Ye(vn.hamburgerIcon,vn.hamburgerMiddle,f&&vn.open)}),u.jsx("span",{className:Ye(vn.hamburgerIcon,vn.hamburgerBottom,f&&vn.open)})]}),u.jsx("a",{href:"/leetcode-pattern-drill/",className:vn.wordmark,onClick:z,children:u.jsx("h1",{className:vn.title,children:"Pattern Drill"})}),u.jsx("div",{className:vn.segmented,role:"group","aria-label":"View",children:Rb.map(({id:H,label:X})=>u.jsx("button",{type:"button",className:vn.segment,"aria-pressed":M===H,onClick:()=>x(H),children:X},H))}),u.jsxs("div",{className:vn.tools,children:[u.jsxs("label",{className:vn.select,children:[u.jsx("span",{className:vn.visuallyHidden,children:"Template language"}),u.jsx("select",{value:U,onChange:Y,children:sf.map(H=>u.jsx("option",{value:H,children:kb[H]},H))}),u.jsx("svg",{className:vn.selectChevron,viewBox:"0 0 12 12","aria-hidden":"true",children:u.jsx("path",{d:"M2.5 4.5 6 8l3.5-3.5"})})]}),u.jsx(Sb,{}),u.jsx(Mb,{}),u.jsx("a",{href:"https://github.com/Tyler-Reagan/leetcode-pattern-drill","aria-label":"GitHub source",className:vn.iconLink,target:"_blank",rel:"noopener noreferrer",children:u.jsx(Cb,{})})]})]})})}const jb="_sidebar_u19dm_1",zb="_exit_u19dm_17",Bb="_hide_u19dm_20",Lb="_heading_u19dm_29",Ub="_scrollContainer_u19dm_41",Tr={sidebar:jb,exit:zb,hide:Bb,heading:Lb,scrollContainer:Ub};var au={},Op;function qb(){if(Op)return au;Op=1,au.match=R,au.parse=M;var s=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,h=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,f=/^(?:(min|max)-)?(.+)/,c=/(em|rem|px|cm|mm|in|pt|pc)?$/,S=/(dpi|dpcm|dppx)?$/;function R(z,g){return M(z).some(function(x){var Y=x.inverse,H=x.type==="all"||g.type===x.type;if(H&&Y||!(H||Y))return!1;var X=x.expressions.every(function($){var ve=$.feature,de=$.modifier,fe=$.value,xe=g[ve];if(!xe)return!1;switch(ve){case"orientation":case"scan":return xe.toLowerCase()===fe.toLowerCase();case"width":case"height":case"device-width":case"device-height":fe=q(fe),xe=q(xe);break;case"resolution":fe=U(fe),xe=U(xe);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":fe=D(fe),xe=D(xe);break;case"grid":case"color":case"color-index":case"monochrome":fe=parseInt(fe,10)||1,xe=parseInt(xe,10)||0;break}switch(de){case"min":return xe>=fe;case"max":return xe<=fe;default:return xe===fe}});return X&&!Y||!X&&Y})}function M(z){return z.split(",").map(function(g){g=g.trim();var x=g.match(s),Y=x[1],H=x[2],X=x[3]||"",$={};return $.inverse=!!Y&&Y.toLowerCase()==="not",$.type=H?H.toLowerCase():"all",X=X.match(/\([^\)]+\)/g)||[],$.expressions=X.map(function(ve){var de=ve.match(h),fe=de[1].toLowerCase().match(f);return{modifier:fe[1],feature:fe[2],value:de[2]}}),$})}function D(z){var g=Number(z),x;return g||(x=z.match(/^(\d+)\s*\/\s*(\d+)$/),g=x[1]/x[2]),g}function U(z){var g=parseFloat(z),x=String(z).match(S)[1];switch(x){case"dpcm":return g/2.54;case"dppx":return g*96;default:return g}}function q(z){var g=parseFloat(z),x=String(z).match(c)[1];switch(x){case"em":return g*16;case"rem":return g*16;case"cm":return g*96/2.54;case"mm":return g*96/2.54/10;case"in":return g*96;case"pt":return g*72;case"pc":return g*72/12;default:return g}}return au}var Ic,Np;function Hb(){if(Np)return Ic;Np=1;var s=qb().match,h=typeof window<"u"?window.matchMedia:null;function f(S,R,M){var D=this,U;h&&!M&&(U=h.call(window,S)),U?(this.matches=U.matches,this.media=U.media,U.addListener(g)):(this.matches=s(S,R),this.media=S),this.addListener=q,this.removeListener=z,this.dispose=x;function q(Y){U&&U.addListener(Y)}function z(Y){U&&U.removeListener(Y)}function g(Y){D.matches=Y.matches,D.media=Y.media}function x(){U&&U.removeListener(g)}}function c(S,R,M){return new f(S,R,M)}return Ic=c,Ic}var Yb=Hb();const Gb=_l(Yb);var Kb=/[A-Z]/g,Vb=/^ms-/,Qc={};function Ib(s){return"-"+s.toLowerCase()}function Jp(s){if(Qc.hasOwnProperty(s))return Qc[s];var h=s.replace(Kb,Ib);return Qc[s]=Vb.test(h)?"-"+h:h}function Qb(s,h){if(s===h)return!0;if(!s||!h)return!1;const f=Object.keys(s),c=Object.keys(h),S=f.length;if(c.length!==S)return!1;for(let R=0;R<S;R++){const M=f[R];if(s[M]!==h[M]||!Object.prototype.hasOwnProperty.call(h,M))return!1}return!0}var Xc={exports:{}},Zc,Ap;function Xb(){if(Ap)return Zc;Ap=1;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Zc=s,Zc}var Jc,Mp;function Zb(){if(Mp)return Jc;Mp=1;var s=Xb();function h(){}function f(){}return f.resetWarningCache=h,Jc=function(){function c(M,D,U,q,z,g){if(g!==s){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}c.isRequired=c;function S(){return c}var R={array:c,bigint:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:S,element:c,elementType:c,instanceOf:S,node:c,objectOf:S,oneOf:S,oneOfType:S,shape:S,exact:S,checkPropTypes:f,resetWarningCache:h};return R.PropTypes=R,R},Jc}var Cp;function Jb(){return Cp||(Cp=1,Xc.exports=Zb()()),Xc.exports}var Fb=Jb();const Qe=_l(Fb),Pn=Qe.oneOfType([Qe.string,Qe.number]),Fp={all:Qe.bool,grid:Qe.bool,aural:Qe.bool,braille:Qe.bool,handheld:Qe.bool,print:Qe.bool,projection:Qe.bool,screen:Qe.bool,tty:Qe.bool,tv:Qe.bool,embossed:Qe.bool},Pb={orientation:Qe.oneOf(["portrait","landscape"]),scan:Qe.oneOf(["progressive","interlace"]),aspectRatio:Qe.string,deviceAspectRatio:Qe.string,height:Pn,deviceHeight:Pn,width:Pn,deviceWidth:Pn,color:Qe.bool,colorIndex:Qe.bool,monochrome:Qe.bool,resolution:Pn,type:Object.keys(Fp)},{type:NE,...Wb}=Pb,$b={minAspectRatio:Qe.string,maxAspectRatio:Qe.string,minDeviceAspectRatio:Qe.string,maxDeviceAspectRatio:Qe.string,minHeight:Pn,maxHeight:Pn,minDeviceHeight:Pn,maxDeviceHeight:Pn,minWidth:Pn,maxWidth:Pn,minDeviceWidth:Pn,maxDeviceWidth:Pn,minColor:Qe.number,maxColor:Qe.number,minColorIndex:Qe.number,maxColorIndex:Qe.number,minMonochrome:Qe.number,maxMonochrome:Qe.number,minResolution:Pn,maxResolution:Pn,...Wb},ev={...Fp,...$b};var nv={all:ev};const tv=s=>`not ${s}`,av=(s,h)=>{const f=Jp(s);return typeof h=="number"&&(h=`${h}px`),h===!0?f:h===!1?tv(f):`(${f}: ${h})`},iv=s=>s.join(" and "),lv=s=>{const h=[];return Object.keys(nv.all).forEach(f=>{const c=s[f];c!=null&&h.push(av(f,c))}),iv(h)},rv=L.createContext(void 0),sv=s=>s.query||lv(s),Rp=s=>s?Object.keys(s).reduce((f,c)=>(f[Jp(c)]=s[c],f),{}):void 0,Pp=()=>{const s=L.useRef(!1);return L.useEffect(()=>{s.current=!0},[]),s.current},uv=s=>{const h=L.useContext(rv),f=()=>Rp(s)||Rp(h),[c,S]=L.useState(f);return L.useEffect(()=>{const R=f();Qb(c,R)||S(R)},[s,h]),c},ov=s=>{const h=()=>sv(s),[f,c]=L.useState(h);return L.useEffect(()=>{const S=h();f!==S&&c(S)},[s]),f},cv=(s,h)=>{const f=()=>Gb(s,h||{},!!h),[c,S]=L.useState(f),R=Pp();return L.useEffect(()=>{if(R){const M=f();return S(M),()=>{M&&M.dispose()}}},[s,h]),c},fv=s=>{const[h,f]=L.useState(s.matches);return L.useEffect(()=>{const c=S=>{f(S.matches)};return s.addListener(c),f(s.matches),()=>{s.removeListener(c)}},[s]),h},Wp=(s,h,f)=>{const c=uv(h),S=ov(s);if(!S)throw new Error("Invalid or missing MediaQuery!");const R=cv(S,c),M=fv(R),D=Pp();return L.useEffect(()=>{D&&f&&f(M)},[M]),L.useEffect(()=>()=>{R&&R.dispose()},[]),M};function $p(s,h){L.useEffect(()=>{const f=c=>{const S=c.target;(Array.isArray(s)?s:[s]).every(D=>D.current&&!D.current.contains(S))&&h()};return document.addEventListener("mousedown",f),()=>document.removeEventListener("mousedown",f)},[s,h])}const dv="_accordion_hdwo0_1",hv="_button_hdwo0_7",mv="_open_hdwo0_42",pv="_content_hdwo0_46",iu={accordion:dv,button:hv,open:mv,content:pv};function gv(s){const h=parseFloat(s);return!isNaN(h)&&isFinite(h)}function kp(s){return typeof s=="string"&&s[s.length-1]==="%"&&gv(s.substring(0,s.length-1))}function Fc(s,h,f){h===0&&!f&&s?.style&&s?.children.length>0&&(s.style.display="none")}function bv(s,h){h===0&&s?.style&&(s.style.display="")}const vv={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"};function Dp(s,h){return[s.static,h===0&&s.staticHeightZero,typeof h=="number"&&h>0?s.staticHeightSpecific:null,h==="auto"&&s.staticHeightAuto].filter(f=>f).join(" ")}const yv=["animateOpacity","animationStateClasses","applyInlineTransitions","children","className","contentClassName","contentRef","delay","duration","easing","height","onHeightAnimationEnd","onHeightAnimationStart","style","disableDisplayNone"],_v=fu.forwardRef((s,h)=>{const{animateOpacity:f=!1,animationStateClasses:c={},applyInlineTransitions:S=!0,children:R,className:M="",contentClassName:D,delay:U=0,disableDisplayNone:q=!1,duration:z=500,easing:g="ease",height:x,onHeightAnimationEnd:Y,onHeightAnimationStart:H,style:X,contentRef:$}=s,ve={...s};yv.forEach(j=>{delete ve[j]});const de=L.useRef(x),fe=L.useRef(null),xe=L.useRef(void 0),Ge=L.useRef(void 0),Be=L.useRef({...vv,...c}),le=typeof window<"u",me=L.useRef(le&&window.matchMedia?window.matchMedia("(prefers-reduced-motion)").matches:!1),Oe=me.current?0:U,_e=me.current?0:z;let Ze=x,un="visible";typeof x=="number"?(Ze=x<0?0:x,un="hidden"):kp(Ze)&&(Ze=x==="0%"?0:x,un="hidden");const[Kn,On]=L.useState(Ze),[on,G]=L.useState(un),[se,J]=L.useState(!1),[Me,Se]=L.useState(Dp(Be.current,x));L.useEffect(()=>{Fc(fe.current,Kn,q)},[]),L.useEffect(()=>{if(x!==de.current&&fe.current){bv(fe.current,de.current),fe.current.style.overflow="hidden";const j=fe.current.offsetHeight;fe.current.style.overflow="";const ie=_e+Oe;let F,ue,Re="hidden",Ne;const ee=de.current==="auto";typeof x=="number"?(F=x<0?0:x,ue=F):kp(x)?(F=x==="0%"?0:x,ue=F):(F=j,ue="auto",Re=void 0),ee&&(ue=F,F=j);const oe=[Be.current.animating,(de.current==="auto"||x<de.current)&&Be.current.animatingUp,(x==="auto"||x>de.current)&&Be.current.animatingDown,ue===0&&Be.current.animatingToHeightZero,ue==="auto"&&Be.current.animatingToHeightAuto,typeof ue=="number"&&ue>0?Be.current.animatingToHeightSpecific:null].filter($a=>$a).join(" "),Wn=Dp(Be.current,ue);On(F),G("hidden"),J(!ee),Se(oe),clearTimeout(Ge.current),clearTimeout(xe.current),ee?(Ne=!0,Ge.current=setTimeout(()=>{On(ue),G(Re),J(Ne),H?.(ue),xe.current=setTimeout(()=>{J(!1),Se(Wn),Fc(fe.current,ue,q),Y?.(ue)},ie)},50)):(H?.(F),Ge.current=setTimeout(()=>{On(ue),G(Re),J(!1),Se(Wn),x!=="auto"&&Fc(fe.current,F,q),Y?.(F)},ie))}return de.current=Ze,()=>{clearTimeout(Ge.current),clearTimeout(xe.current)}},[x]);const sn={...X,height:Kn,overflow:on||X?.overflow};se&&S&&(sn.transition=`height ${_e}ms ${g} ${Oe}ms`,X?.transition&&(sn.transition=`${X.transition}, ${sn.transition}`),sn.WebkitTransition=sn.transition);const pn={};f&&(pn.transition=`opacity ${_e}ms ${g} ${Oe}ms`,pn.WebkitTransition=pn.transition,Kn===0&&(pn.opacity=0));const b=typeof ve["aria-hidden"]<"u"?ve["aria-hidden"]:x===0;return fu.createElement("div",{...ve,"aria-hidden":b,className:`${Me} ${M}`,style:sn,ref:h},fu.createElement("div",{className:D,style:pn,ref:j=>{fe.current=j,$&&($.current=j)}},R))});function Sv(){return u.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("polyline",{points:"6 9 12 15 18 9"})})}function Fn({title:s,children:h}){const[f,c]=L.useState(!1),S=f?"auto":0,R=Ye(iu.button,f&&iu.open),M=()=>c(!f);return u.jsxs("div",{className:iu.accordion,children:[u.jsxs("button",{type:"button",className:R,onClick:M,"aria-expanded":f,children:[u.jsx("span",{children:s}),u.jsx(Sv,{})]}),u.jsx(_v,{animateOpacity:!0,height:S,duration:400,children:u.jsx("div",{className:iu.content,children:h})})]})}const Tv="_linkWrapper_1p79w_1",Ev="_link_1p79w_1",jp={linkWrapper:Tv,link:Ev},wv="_tooltip_cgi4r_1",xv="_exit_cgi4r_15",Ov="_text_cgi4r_28",Pc={tooltip:wv,exit:xv,text:Ov};var Nv=Kp();const Av=_l(Nv);function Mv({anchorRef:s,content:h,showTooltip:f}){const c=L.useRef(null),[S,R]=L.useState(null),[M,D]=L.useState(!1),U=Ye(Pc.tooltip,!f&&Pc.exit),q=()=>D(!1),z=()=>{f||D(!0)};return L.useEffect(()=>{if(!f||!s.current)return;const g=s.current.getBoundingClientRect(),x=c.current?.offsetHeight??0,Y=g.left+window.scrollX,H=g.top+window.scrollY-x-4;R({top:H,left:Y})},[f]),(f||!M)&&s.current&&Av.createPortal(u.jsx("div",{ref:c,className:U,style:S??{},onAnimationStart:q,onAnimationEnd:z,children:u.jsx("span",{className:Pc.text,children:h})}),document.body)}const Wc="pd-nav-link";function Z({href:s,description:h}){const f=L.useRef(null),{view:c,setView:S}=du(),[R,M]=L.useState(!1),[D,U]=L.useState(()=>window.location.hash);let q;L.useEffect(()=>{const H=()=>U(window.location.hash);return window.addEventListener(Wc,H),window.addEventListener("hashchange",H),()=>{window.removeEventListener(Wc,H),window.removeEventListener("hashchange",H)}},[]);const z=c==="cheatsheet"&&D===s,g=H=>{H.preventDefault(),window.history.replaceState({},"",s),window.dispatchEvent(new Event(Wc)),clearTimeout(q),M(!1),cf();const X=Zp()-2;c==="finder"?(S("cheatsheet"),pb(s,X)):of(s,X)},x=()=>{q=setTimeout(()=>{M(!0)},700)},Y=()=>{clearTimeout(q),M(!1)};return u.jsxs("div",{className:jp.linkWrapper,children:[u.jsx("a",{ref:f,href:s,className:jp.link,onClick:g,role:"button","aria-current":z?"location":void 0,"aria-description":h,onMouseEnter:x,onMouseLeave:Y,children:h}),u.jsx(Mv,{anchorRef:f,content:h,showTooltip:R})]})}function Cv(){return u.jsxs(u.Fragment,{children:[u.jsxs(Fn,{title:"Big O",children:[u.jsx(Z,{href:"#bigo-chart",description:"Time/Space Complexities"}),u.jsx(Z,{href:"#bigo-data-structure-operations-table",description:"Data Structure Operations"}),u.jsx(Z,{href:"#bigo-sorting-algorithms-table",description:"Sorting Algorithms"})]}),u.jsxs(Fn,{title:"Array",children:[u.jsx(Z,{href:"#array-two-pointers-one-input",description:"two pointers: one input, opposite ends"}),u.jsx(Z,{href:"#array-two-pointers-two-inputs",description:"two pointers: two inputs, exhaust both"}),u.jsx(Z,{href:"#array-sliding-window",description:"sliding window"}),u.jsx(Z,{href:"#array-prefix-sum",description:"prefix sum"}),u.jsx(Z,{href:"#array-string-building",description:"efficient string building"})]}),u.jsxs(Fn,{title:"Hash Map",children:[u.jsx(Z,{href:"#hashmap-find-number-of-subarrays",description:"find number of subarrays that fit an exact criteria"}),u.jsx(Z,{href:"#hashmap-sliding-window",description:"sliding window"})]}),u.jsxs(Fn,{title:"Linked List",children:[u.jsx(Z,{href:"#linkedlist-fast-and-slow-pointer",description:"fast and slow pointer"}),u.jsx(Z,{href:"#linkedlist-reverse",description:"reverse linked list"})]}),u.jsxs(Fn,{title:"Stack",children:[u.jsx(Z,{href:"#stack-monotonic-increasing",description:"monotonic increasing stack"}),u.jsx(Z,{href:"#stack-monotonic-decreasing",description:"monotonic decreasing stack"})]}),u.jsxs(Fn,{title:"Binary Tree",children:[u.jsx(Z,{href:"#tree-dfs-recursive",description:"DFS (recursive)"}),u.jsx(Z,{href:"#tree-dfs-iterative",description:"DFS (iterative)"}),u.jsx(Z,{href:"#tree-bfs",description:"BFS"})]}),u.jsxs(Fn,{title:"Graph",children:[u.jsx(Z,{href:"#graph-dfs-recursive",description:"DFS (recursive)"}),u.jsx(Z,{href:"#graph-dfs-iterative",description:"DFS (iterative)"}),u.jsx(Z,{href:"#graph-bfs",description:"BFS"}),u.jsx(Z,{href:"#graph-dijkstra",description:"Dijkstra (shortest path)"}),u.jsx(Z,{href:"#graph-bellman-ford",description:"Bellman-Ford (shortest path)"}),u.jsx(Z,{href:"#graph-kahn",description:"Kahn (topological sort)"}),u.jsx(Z,{href:"#graph-kruskal",description:"Kruskal (mst)"}),u.jsx(Z,{href:"#graph-prim",description:"Prim (mst)"})]}),u.jsx(Fn,{title:"Heap",children:u.jsx(Z,{href:"#heap-find-top-k-elements",description:"find top k elements with heap"})}),u.jsxs(Fn,{title:"Binary Search",children:[u.jsx(Z,{href:"#binarysearch-binary-search",description:"binary search"}),u.jsx(Z,{href:"#binarysearch-duplicate-elements-left-insertion",description:"duplicate elements, left-most insertion point"}),u.jsx(Z,{href:"#binarysearch-duplicate-elements-right-insertion",description:"duplicate elements, right-most insertion point"}),u.jsx(Z,{href:"#binarysearch-greedy-minimum",description:"greedy (minimum)"}),u.jsx(Z,{href:"#binarysearch-greedy-maximum",description:"greedy (maximum)"})]}),u.jsx(Fn,{title:"Backtracking",children:u.jsx(Z,{href:"#backtracking-backtracking",description:"backtracking"})}),u.jsxs(Fn,{title:"Dynamic Programming",children:[u.jsx(Z,{href:"#dp-top-down",description:"top-down DP"}),u.jsx(Z,{href:"#dp-bottom-up",description:"bottom-up DP"}),u.jsx(Z,{href:"#dp-kadane",description:"Kadane (max-sum subarray)"})]}),u.jsxs(Fn,{title:"Bit Manipulation",children:[u.jsx(Z,{href:"#bitmanipulation-test-kth-bit",description:"test kth bit"}),u.jsx(Z,{href:"#bitmanipulation-set-kth-bit",description:"set kth bit"}),u.jsx(Z,{href:"#bitmanipulation-clear-kth-bit",description:"clear kth bit"}),u.jsx(Z,{href:"#bitmanipulation-get-rightmost-bit",description:"get rightmost bit"}),u.jsx(Z,{href:"#bitmanipulation-count-set-bits",description:"count set bits"}),u.jsx(Z,{href:"#bitmanipulation-multiply-power-of-two",description:"multiply by 2^k"}),u.jsx(Z,{href:"#bitmanipulation-divide-power-of-two",description:"divide by 2^k"}),u.jsx(Z,{href:"#bitmanipulation-check-power-of-two",description:"check if number is power of 2"}),u.jsx(Z,{href:"#bitmanipulation-swap-variables",description:"swap two variables"})]}),u.jsxs(Fn,{title:"Matrix",children:[u.jsx(Z,{href:"#matrix-create-copy",description:"create / copy"}),u.jsx(Z,{href:"#matrix-diagonals",description:"main / anti diagonals"}),u.jsx(Z,{href:"#matrix-rotate-transpose",description:"rotate / transpose"})]}),u.jsxs(Fn,{title:"Data Structures",children:[u.jsx(Z,{href:"#ds-array",description:"array"}),u.jsx(Z,{href:"#ds-hash-map",description:"hashmap"}),u.jsx(Z,{href:"#ds-linked-list",description:"linked list"}),u.jsx(Z,{href:"#ds-doubly-linked-list",description:"doubly linked list"}),u.jsx(Z,{href:"#ds-binary-tree",description:"binary tree"}),u.jsx(Z,{href:"#ds-binary-search-tree",description:"binary search tree"}),u.jsx(Z,{href:"#ds-graph",description:"graph"}),u.jsx(Z,{href:"#ds-union-find",description:"union find"}),u.jsx(Z,{href:"#ds-union-find-optimized",description:"union find optimized"}),u.jsx(Z,{href:"#ds-trie",description:"trie"})]}),u.jsxs(Fn,{title:"Sorting Algorithms",children:[u.jsx(Z,{href:"#sort-bubble",description:"bubble sort"}),u.jsx(Z,{href:"#sort-selection",description:"selection sort"}),u.jsx(Z,{href:"#sort-insertion",description:"insertion sort"}),u.jsx(Z,{href:"#sort-shell",description:"shell sort"}),u.jsx(Z,{href:"#sort-merge",description:"mergesort"}),u.jsx(Z,{href:"#sort-quick",description:"quicksort"}),u.jsx(Z,{href:"#sort-tim",description:"timsort"}),u.jsx(Z,{href:"#sort-heap",description:"heapsort"}),u.jsx(Z,{href:"#sort-counting",description:"counting sort"}),u.jsx(Z,{href:"#sort-bucket",description:"bucket sort"}),u.jsx(Z,{href:"#sort-radix",description:"radix sort"}),u.jsx(Z,{href:"#sort-cube",description:"cubesort"}),u.jsx(Z,{href:"#sort-bogo",description:"bogo sort"}),u.jsx(Z,{href:"#sort-pancake",description:"pancake sort"}),u.jsx(Z,{href:"#sort-sleep",description:"sleep sort"})]})]})}function Rv({hamburgerButtonRef:s}){const h=L.useRef(null),{isSidebarOpen:f,showSidebar:c,hideSidebar:S}=uf(),{view:R}=du(),[M,D]=L.useState(()=>!f),U=Ye(Tr.sidebar,!f&&Tr.exit,!f&&M&&Tr.hide),q=H=>{H&&f?S():!H&&!f&&R==="cheatsheet"&&c()};L.useEffect(()=>{R!=="cheatsheet"&&f&&S()},[R,f,S]);const z=Wp({maxWidth:768},void 0,q),g=()=>{z&&f&&S()},x=()=>D(!1),Y=()=>{f||D(!0)};return $p([h,s],g),u.jsxs("nav",{ref:h,id:"reference-sections","aria-label":"Reference sections",className:U,onAnimationStart:x,onAnimationEndCapture:Y,children:[u.jsx("h2",{className:Tr.heading,children:"Reference"}),u.jsx("div",{className:Tr.scrollContainer,children:u.jsx(Cv,{})})]})}function kv(){const s=L.useRef(null);return u.jsxs("div",{id:"AppBar",children:[u.jsx(Db,{forwardedRef:s}),u.jsx(Rv,{hamburgerButtonRef:s})]})}const Dv="_main_bsmjw_1",jv="_sidebarHidden_bsmjw_12",zp={main:Dv,sidebarHidden:jv},zv="_finder_1eurr_1",Bv="_mapMode_1eurr_15",Lv="_log_1eurr_42",Uv="_logHead_1eurr_51",qv="_logHint_1eurr_61",Hv="_logRows_1eurr_67",Yv="_row_1eurr_79",Gv="_rowNum_1eurr_93",Kv="_rowBack_1eurr_97",Vv="_rowNumDashed_1eurr_119",Iv="_rowText_1eurr_123",Qv="_rowQuestion_1eurr_130",Xv="_rowCue_1eurr_140",Zv="_rowLive_1eurr_157",Jv="_rowReady_1eurr_167",Fv="_rowCurrent_1eurr_171",Pv="_rowResult_1eurr_172",Wv="_rowFault_1eurr_187",$v="_nextWrap_1eurr_195",ey="_nextCheck_1eurr_199",ny="_nextLabel_1eurr_210",ty="_line_1eurr_218",ay="_stops_1eurr_222",iy="_stop_1eurr_222",ly="_dashedNext_1eurr_251",ry="_dot_1eurr_255",sy="_answered_1eurr_265",uy="_current_1eurr_269",oy="_reached_1eurr_270",cy="_end_1eurr_274",fy="_fault_1eurr_279",dy="_stopInner_1eurr_284",hy="_stopButton_1eurr_285",my="_cue_1eurr_303",py="_card_1eurr_313",gy="_strip_1eurr_328",by="_stripEnd_1eurr_348",vy="_mapStatus_1eurr_359",yy="_seg_1eurr_372",_y="_segButton_1eurr_381",Sy="_segOn_1eurr_410",Ty="_mapFallback_1eurr_416",Ey="_stripTitle_1eurr_420",wy="_stripValue_1eurr_430",xy="_timer_1eurr_436",Oy="_cells_1eurr_443",Ny="_cell_1eurr_443",Ay="_colon_1eurr_449",My="_signCell_1eurr_474",Cy="_timerCaption_1eurr_495",Ry="_idle_1eurr_505",ky="_ok_1eurr_509",Dy="_warn_1eurr_513",jy="_over_1eurr_520",zy="_body_1eurr_532",By="_question_1eurr_546",Ly="_resultName_1eurr_547",Uy="_lead_1eurr_563",qy="_actions_1eurr_575",Hy="_actionsPair_1eurr_581",Yy="_primary_1eurr_585",Gy="_kbd_1eurr_618",Ky="_options_1eurr_623",Vy="_option_1eurr_623",Iy="_optionCue_1eurr_669",Qy="_footer_1eurr_692",Xy="_plain_1eurr_704",Zy="_fields_1eurr_744",Jy="_field_1eurr_744",Fy="_figure_1eurr_775",Py="_okNote_1eurr_783",Wy="_overNote_1eurr_787",$y="_summary_1eurr_792",e_="_templates_1eurr_803",n_="_note_1eurr_812",t_="_commonProblems_1eurr_817",a_="_commonProblemsLoose_1eurr_842",i_="_commonProblemsNote_1eurr_847",l_="_commonProblemsNum_1eurr_853",r_="_docsLink_1eurr_859",s_="_srOnly_1eurr_870",u_="_turn_1eurr_1",o_="_cpNum_1eurr_912",c_="_cpLoose_1eurr_918",f_="_cpTiles_1eurr_922",d_="_cpTile_1eurr_922",h_="_toggleLabel_1eurr_940",m_="_toggleHidden_1eurr_947",N={finder:zv,mapMode:Bv,log:Lv,logHead:Uv,logHint:qv,logRows:Hv,row:Yv,rowNum:Gv,rowBack:Kv,rowNumDashed:Vv,rowText:Iv,rowQuestion:Qv,rowCue:Xv,rowLive:Zv,rowReady:Jv,rowCurrent:Fv,rowResult:Pv,rowFault:Wv,nextWrap:$v,nextCheck:ey,nextLabel:ny,line:ty,stops:ay,stop:iy,dashedNext:ly,dot:ry,answered:sy,current:uy,reached:oy,end:cy,fault:fy,stopInner:dy,stopButton:hy,cue:my,card:py,strip:gy,stripEnd:by,mapStatus:vy,seg:yy,segButton:_y,segOn:Sy,mapFallback:Ty,stripTitle:Ey,stripValue:wy,timer:xy,cells:Oy,cell:Ny,colon:Ay,signCell:My,timerCaption:Cy,idle:Ry,ok:ky,warn:Dy,over:jy,body:zy,question:By,resultName:Ly,lead:Uy,actions:qy,actionsPair:Hy,primary:Yy,kbd:Gy,options:Ky,option:Vy,optionCue:Iy,footer:Qy,plain:Xy,fields:Zy,field:Jy,figure:Fy,okNote:Py,overNote:Wy,summary:$y,templates:e_,note:n_,commonProblems:t_,commonProblemsLoose:a_,commonProblemsNote:i_,commonProblemsNum:l_,docsLink:r_,srOnly:s_,turn:u_,cpNum:o_,cpLoose:c_,cpTiles:f_,cpTile:d_,toggleLabel:h_,toggleHidden:m_},T=(s,h,f,c=!1)=>c?{lc:s,name:h,slug:f,loose:c}:{lc:s,name:h,slug:f},wi={rootId:"q-input",nodes:{"q-input":{id:"q-input",question:"What does the problem give you?",options:[{cue:"an array, a string, or a 2D board of values",next:"q-array"},{cue:"a linked list",next:"q-list"},{cue:"a binary tree or BST",next:"q-tree"},{cue:"a graph, edges, prerequisites, or a grid of cells you move between",next:"q-graph"},{cue:"a data stream, or a design-a-class prompt",next:"q-design"},{cue:"an integer n, or work done on its individual bits",next:"q-number"}]},"q-array":{id:"q-array",question:"What does it ask about the array or string?",options:[{cue:"a contiguous subarray or substring, or range sums or products",next:"q-subarray"},{cue:"a pair or triplet that hits a target or scores best, a palindrome, or an in-place edit",next:"q-pointers"},{cue:"searching a sorted or rotated array, or the smallest or largest value that works",next:"q-search"},{cue:"the next greater or smaller element of each item",next:"q-mono"},{cue:"counts, duplicates, membership, top K or repeated largest, brackets, words",next:"q-lookup"},{cue:"choices over elements: generate them all, or find the best or count the ways",next:"q-choices"},{cue:"intervals with a start and an end",next:"sort-first"}]},"q-subarray":{id:"q-subarray",question:"What does it want from the subarray or substring?",options:[{cue:"sum or average of each size-K window",next:"sliding-window-fixed"},{cue:"longest or shortest window that meets a rule",next:"q-window-variable"},{cue:"count subarrays with exactly K distinct or odd",next:"sliding-window-exactly-k"},{cue:"a sum or product over a range: equal to K, between i and j, or everything except one index",next:"q-prefix"},{cue:"maximum sum subarray of any length",next:"dp-kadane"},{cue:"max or min inside each size-K window",next:"monotonic-deque"}]},"q-window-variable":{id:"q-window-variable",question:"What does the window rule check?",options:[{cue:"sum or product vs a target, with non-negative numbers",next:"sliding-window-variable"},{cue:"which characters the window holds, and how many of each",next:"hashmap-sliding-window"}]},"q-prefix":{id:"q-prefix",question:"What kind of range-total question?",options:[{cue:"many queries for the sum between index i and j",next:"prefix-sum-range"},{cue:"for each index, a total of everything except that index",next:"prefix-sum-range"},{cue:"count or longest subarrays with sum K, when values can be negative",next:"prefix-sum-hashmap"}]},"q-pointers":{id:"q-pointers",question:"What kind of pair, check, or edit?",options:[{cue:"a pair or triplet that hits a target, when the array is sorted or the values matter, not their positions",next:"two-pointers-converging"},{cue:"a palindrome or other mirror-image check",next:"two-pointers-converging"},{cue:"the best pair where how far apart they are is part of the score",next:"two-pointers-converging"},{cue:"the largest rise from an earlier element to a later one",next:"dp-kadane"},{cue:"walking two separate inputs together",next:"two-pointers-two-inputs"},{cue:"rewriting the array in place, keeping some elements and moving or dropping the rest",next:"two-pointers-fast-slow-inplace"},{cue:"two numbers that hit a target in an unsorted array, returning their original positions",next:"hashmap-frequency"}]},"q-search":{id:"q-search",question:"What are you searching for?",options:[{cue:"a given value, or the minimum, in a sorted or rotated array",next:"binary-search-classic"},{cue:"first position of X, or where to insert X",next:"binary-search-left-bound"},{cue:"last position of X, or count of elements <= X",next:"binary-search-right-bound"},{cue:"smallest capacity or speed that works (minimize the max)",next:"binary-search-answer-minimize"},{cue:"largest distance or size that works (maximize the min)",next:"binary-search-answer-maximize"}]},"q-mono":{id:"q-mono",question:"What do you need for each element?",options:[{cue:"the next greater element for each item",next:"monotonic-stack-decreasing"},{cue:"the next smaller element for each item",next:"monotonic-stack-increasing"},{cue:"max or min inside each size-K window",next:"monotonic-deque"}]},"q-lookup":{id:"q-lookup",question:"What do you need to do with the data?",options:[{cue:"counting or grouping items that match",next:"hashmap-frequency"},{cue:"whether a value, or the value next to it, is present, in linear time",next:"hashmap-frequency"},{cue:"the K best items, or the Kth one, by size or frequency",next:"heap-top-k"},{cue:"repeatedly take the largest values, combine them, and put the result back",next:"heap-top-k"},{cue:"matching or nested structure, where the last thing opened closes first",next:"stack-matching"},{cue:"prefix lookups over a word list",next:"trie"},{cue:"building an output string piece by piece",next:"string-building"},{cue:"operating on the bits of numbers",next:"bit-manipulation"}]},"q-choices":{id:"q-choices",question:"What are you trying to do with the choices?",options:[{cue:"generate every subset, permutation, or combination",next:"q-backtrack"},{cue:"best cost, or number of ways, over the choices",next:"q-dp"},{cue:"a locally best move each step is enough",next:"greedy"}]},"q-backtrack":{id:"q-backtrack",question:"Can a partial choice be rejected early?",options:[{cue:"no, every candidate has to be generated",next:"backtracking"},{cue:"yes, a constraint lets you reject a partial choice early",next:"backtracking-pruning"}]},"q-dp":{id:"q-dp",question:"What do the choices look like?",options:[{cue:"items you can reuse any number of times",next:"dp-unbounded-knapsack"},{cue:"each item can be used at most once",next:"dp-01-knapsack"},{cue:"ordering or matching within one or two sequences",next:"dp-sequences"},{cue:"something else, where each state depends on earlier states",next:"q-dp-style"}]},"q-dp-style":{id:"q-dp-style",question:"Which way is the recurrence easier to write?",options:[{cue:"recurse from a state and cache the result",next:"dp-top-down"},{cue:"fill dp[i] or dp[r][c] from earlier cells",next:"dp-bottom-up"}]},"q-list":{id:"q-list",question:"What do you do with the list?",options:[{cue:"a cycle, the middle, or a position counted from the end",next:"linked-list-fast-slow"},{cue:"interleave or compare the front half with the back half",next:"linked-list-split-reverse-merge"},{cue:"reverse the list, a sublist, or k-groups",next:"linked-list-reverse"},{cue:"merge two sorted lists",next:"linked-list-merge-sorted"},{cue:"merge K sorted lists",next:"heap-merge-k"}]},"q-tree":{id:"q-tree",question:"What does it ask about the tree?",options:[{cue:"what the tree looks like level by level, or from one side",next:"tree-bfs"},{cue:"a measure of the whole tree, like its height, balance, or longest path",next:"tree-dfs-recursive"},{cue:"a change made at every node, or whether two trees match or one appears inside the other",next:"tree-dfs-recursive"},{cue:"a check at each node against its ancestors on the path from the root",next:"tree-dfs-recursive"},{cue:"find, insert, or delete a value in a BST, or the lowest node above two given nodes",next:"bst-walk"},{cue:"a BST's values in sorted order, one at a time or up to the kth",next:"tree-dfs-iterative"}]},"q-graph":{id:"q-graph",question:"What does it ask about the graph or grid?",options:[{cue:"everything connected to a start: count regions, measure them, or copy them",next:"graph-dfs"},{cue:"which cells connect to the edge of the grid",next:"graph-dfs"},{cue:"shortest path or minimum steps",next:"q-shortest"},{cue:"an order that respects prerequisites, or proof that none exists",next:"topological-sort"},{cue:"whether two items are already in the same group, or an edge closes an undirected cycle",next:"union-find"},{cue:"minimum cost to connect all points",next:"mst"},{cue:"a grid where you can only move right or down",next:"q-dp"}]},"q-shortest":{id:"q-shortest",question:"What kind of shortest path?",options:[{cue:"unweighted edges, from one start",next:"graph-bfs-shortest-path"},{cue:"spreads from many sources at once",next:"multi-source-bfs"},{cue:"weighted edges",next:"shortest-path-weighted"}]},"q-design":{id:"q-design",question:"What must the structure support?",options:[{cue:"median of a data stream",next:"two-heaps"},{cue:"the Kth largest of the values so far, after each new value",next:"heap-top-k"},{cue:"only the items from a recent time span or the last N arrivals, or a fixed-size queue",next:"queue-design"},{cue:"constant-time lookup plus keeping items ordered by when they were last used",next:"design-hashmap-linked-list"},{cue:"storing words so prefix and exact lookups are fast",next:"trie"},{cue:"a stack that also answers a question about its contents, like its minimum, in constant time",next:"stack-matching"},{cue:"stepping back through a history of actions",next:"stack-matching"}]},"q-number":{id:"q-number",question:"What does it ask about n?",options:[{cue:"bit-level properties of n",next:"bit-manipulation"},{cue:"the nth term defined by earlier terms",next:"q-dp"},{cue:"the largest x whose square is still at most n",next:"binary-search-answer-maximize"},{cue:"guess the number in 1..n",next:"binary-search-classic"}]}},leaves:{"two-pointers-converging":{id:"two-pointers-converging",name:"Two pointers, converging",pattern:"Two Pointers",summary:"Sorted array pairs/triplets, palindromes, in-place reversal. Start at both ends and move the pointer whose side cannot be part of the answer.",docsUrl:"https://resources.devweekends.com/dsa-patterns/two-pointers",problems:[T(167,"Two Sum II - Input Array Is Sorted","two-sum-ii-input-array-is-sorted"),T(15,"3Sum","3sum"),T(11,"Container With Most Water","container-with-most-water"),T(125,"Valid Palindrome","valid-palindrome")],templateIds:["two-pointers-one-input"]},"two-pointers-two-inputs":{id:"two-pointers-two-inputs",name:"Two pointers, two inputs",pattern:"Two Pointers",summary:"Merge sorted arrays, subsequence checks. One pointer per input; advance the one whose element is consumed.",docsUrl:"https://resources.devweekends.com/dsa-patterns/two-pointers",problems:[T(88,"Merge Sorted Array","merge-sorted-array"),T(392,"Is Subsequence","is-subsequence"),T(986,"Interval List Intersections","interval-list-intersections")],templateIds:["two-pointers-two-inputs"]},"two-pointers-fast-slow-inplace":{id:"two-pointers-fast-slow-inplace",name:"Two pointers, read/write in place",pattern:"Two Pointers",summary:"Remove duplicates, move zeroes, partition in O(1) space. A fast pointer reads every element; a slow pointer marks where the next kept element is written.",docsUrl:"https://resources.devweekends.com/dsa-patterns/two-pointers",problems:[T(26,"Remove Duplicates from Sorted Array","remove-duplicates-from-sorted-array"),T(283,"Move Zeroes","move-zeroes"),T(27,"Remove Element","remove-element"),T(75,"Sort Colors","sort-colors")],templateIds:[]},"sliding-window-fixed":{id:"sliding-window-fixed",name:"Sliding window, fixed size",pattern:"Sliding Window",summary:"Every window of exactly K elements. Add the entering element and remove the leaving one so each step is O(1).",docsUrl:"https://resources.devweekends.com/dsa-patterns/sliding-window",problems:[T(643,"Maximum Average Subarray I","maximum-average-subarray-i"),T(1456,"Maximum Number of Vowels in a Substring of Given Length","maximum-number-of-vowels-in-a-substring-of-given-length")],templateIds:["sliding-window"]},"sliding-window-variable":{id:"sliding-window-variable",name:"Sliding window, variable size",pattern:"Sliding Window",summary:"Longest/shortest subarray meeting a sum-style rule with non-negative values. Expand right, shrink left while the window is invalid (or while valid, for shortest).",docsUrl:"https://resources.devweekends.com/dsa-patterns/sliding-window",problems:[T(209,"Minimum Size Subarray Sum","minimum-size-subarray-sum"),T(713,"Subarray Product Less Than K","subarray-product-less-than-k"),T(1004,"Max Consecutive Ones III","max-consecutive-ones-iii")],templateIds:["sliding-window"]},"sliding-window-exactly-k":{id:"sliding-window-exactly-k",name:"Sliding window, exactly K",pattern:"Sliding Window",summary:'"Exactly K" is not monotonic, so count it as atMost(K) - atMost(K-1), each a standard variable window.',docsUrl:"https://resources.devweekends.com/dsa-patterns/sliding-window",problems:[T(992,"Subarrays with K Different Integers","subarrays-with-k-different-integers"),T(1248,"Count Number of Nice Subarrays","count-number-of-nice-subarrays"),T(930,"Binary Subarrays With Sum","binary-subarrays-with-sum")],templateIds:[]},"prefix-sum-range":{id:"prefix-sum-range",name:"Prefix sum, range queries",pattern:"Prefix Sum",summary:"Range totals on a fixed array, or for each index the total of everything before and after it. Precompute prefix (and suffix) sums or products; each answer is then O(1), e.g. prefix[j+1] - prefix[i].",docsUrl:"https://resources.devweekends.com/dsa-patterns/prefix-sum",problems:[T(303,"Range Sum Query - Immutable","range-sum-query-immutable"),T(304,"Range Sum Query 2D - Immutable","range-sum-query-2d-immutable"),T(238,"Product of Array Except Self","product-of-array-except-self"),T(724,"Find Pivot Index","find-pivot-index")],templateIds:["prefix-sum"]},"prefix-sum-hashmap":{id:"prefix-sum-hashmap",name:"Prefix sum, hash map",pattern:"Prefix Sum",summary:"Count or find subarrays with sum K when negatives break sliding window. Store prefix-sum counts (seeded with {0: 1}) and look up prefix - K.",docsUrl:"https://resources.devweekends.com/dsa-patterns/prefix-sum",problems:[T(560,"Subarray Sum Equals K","subarray-sum-equals-k"),T(525,"Contiguous Array","contiguous-array"),T(974,"Subarray Sums Divisible by K","subarray-sums-divisible-by-k")],templateIds:["hashmap-find-number-of-subarrays"]},"string-building":{id:"string-building",name:"String building",pattern:"String",summary:"Producing a new string piece by piece. Append to a list or builder and join once at the end; repeated concatenation is O(n^2).",docsUrl:"https://resources.devweekends.com/dsa-patterns/stack",problems:[T(151,"Reverse Words in a String","reverse-words-in-a-string"),T(443,"String Compression","string-compression"),T(1768,"Merge Strings Alternately","merge-strings-alternately")],templateIds:["string-building"]},"binary-search-classic":{id:"binary-search-classic",name:"Binary search, find target",pattern:"Binary Search",summary:"Find an exact value in a sorted (or rotated) space. Halve the range each step by comparing the middle with the target.",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",problems:[T(704,"Binary Search","binary-search"),T(153,"Find Minimum in Rotated Sorted Array","find-minimum-in-rotated-sorted-array"),T(33,"Search in Rotated Sorted Array","search-in-rotated-sorted-array"),T(74,"Search a 2D Matrix","search-a-2d-matrix")],templateIds:["binary-search"]},"binary-search-left-bound":{id:"binary-search-left-bound",name:"Binary search, left bound",pattern:"Binary Search",summary:"First position of X or its insertion point. Keep searching left when nums[mid] >= X to land on the leftmost index.",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",problems:[T(35,"Search Insert Position","search-insert-position"),T(278,"First Bad Version","first-bad-version"),T(34,"Find First and Last Position of Element in Sorted Array","find-first-and-last-position-of-element-in-sorted-array")],templateIds:["binary-search-left-insertion"]},"binary-search-right-bound":{id:"binary-search-right-bound",name:"Binary search, right bound",pattern:"Binary Search",summary:"Last position of X, or count of elements <= X. Search for the insertion point after every copy of X (go right when nums[mid] <= X).",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",problems:[T(34,"Find First and Last Position of Element in Sorted Array","find-first-and-last-position-of-element-in-sorted-array"),T(744,"Find Smallest Letter Greater Than Target","find-smallest-letter-greater-than-target")],templateIds:["binary-search-right-insertion"]},"binary-search-answer-minimize":{id:"binary-search-answer-minimize",name:"Binary search on answer, minimum",pattern:"Binary Search",summary:"Smallest value that still works (min capacity, min speed, minimize the max). Binary search the answer range with a greedy feasibility check.",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",problems:[T(875,"Koko Eating Bananas","koko-eating-bananas"),T(1011,"Capacity To Ship Packages Within D Days","capacity-to-ship-packages-within-d-days"),T(410,"Split Array Largest Sum","split-array-largest-sum")],templateIds:["binary-search-greedy-minimum"]},"binary-search-answer-maximize":{id:"binary-search-answer-maximize",name:"Binary search on answer, maximum",pattern:"Binary Search",summary:"Largest value that still works (maximize the minimum distance). Binary search the answer range, keeping the best feasible value.",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",problems:[T(69,"Sqrt(x)","sqrtx"),T(1552,"Magnetic Force Between Two Balls","magnetic-force-between-two-balls"),T(2226,"Maximum Candies Allocated to K Children","maximum-candies-allocated-to-k-children")],templateIds:["binary-search-greedy-maximum"]},"sort-first":{id:"sort-first",name:"Sort first, then scan",pattern:"Sorting",summary:"Intervals, meetings, or anything easier in order. Sort (often by start or end), then apply a linear scan, greedy, heap, or two pointers.",docsUrl:"https://resources.devweekends.com/dsa-patterns/sorting",problems:[T(56,"Merge Intervals","merge-intervals"),T(435,"Non-overlapping Intervals","non-overlapping-intervals"),T(57,"Insert Interval","insert-interval")],templateIds:[]},"hashmap-frequency":{id:"hashmap-frequency",name:"Hash map, lookup and frequency",pattern:"Hash Map",summary:"Counting, duplicates, anagrams, grouping, or unsorted two-sum. Store counts or complements so each lookup is O(1).",docsUrl:"https://resources.devweekends.com/dsa-patterns/hashmap",problems:[T(1,"Two Sum","two-sum"),T(217,"Contains Duplicate","contains-duplicate"),T(242,"Valid Anagram","valid-anagram"),T(49,"Group Anagrams","group-anagrams"),T(36,"Valid Sudoku","valid-sudoku"),T(128,"Longest Consecutive Sequence","longest-consecutive-sequence")],templateIds:[]},"hashmap-sliding-window":{id:"hashmap-sliding-window",name:"Sliding window, hash map",pattern:"Sliding Window",summary:"Substring with no repeats, at most K distinct, or containing all of T. A frequency map tracks the window so you know when to shrink.",docsUrl:"https://resources.devweekends.com/dsa-patterns/sliding-window",problems:[T(3,"Longest Substring Without Repeating Characters","longest-substring-without-repeating-characters"),T(76,"Minimum Window Substring","minimum-window-substring"),T(424,"Longest Repeating Character Replacement","longest-repeating-character-replacement")],templateIds:["hashmap-sliding-window"]},"stack-matching":{id:"stack-matching",name:"Stack, matching and saved state",pattern:"Stack",summary:"Brackets, expression evaluation, path simplification, undo, or a stack that also tracks extra state. Push openings, or state alongside each value; pop when the match arrives or to restore earlier state.",docsUrl:"https://resources.devweekends.com/dsa-patterns/stack",problems:[T(20,"Valid Parentheses","valid-parentheses"),T(71,"Simplify Path","simplify-path"),T(155,"Min Stack","min-stack"),T(150,"Evaluate Reverse Polish Notation","evaluate-reverse-polish-notation")],templateIds:[]},"monotonic-stack-increasing":{id:"monotonic-stack-increasing",name:"Monotonic stack, increasing",pattern:"Monotonic Stack",summary:"Next/previous smaller element. Keep the stack increasing; a smaller arrival pops and resolves the taller entries.",docsUrl:"https://resources.devweekends.com/dsa-patterns/monotonic-stack",problems:[T(84,"Largest Rectangle in Histogram","largest-rectangle-in-histogram"),T(85,"Maximal Rectangle","maximal-rectangle")],templateIds:["stack-monotonic-increasing"]},"monotonic-stack-decreasing":{id:"monotonic-stack-decreasing",name:"Monotonic stack, decreasing",pattern:"Monotonic Stack",summary:"Next/previous greater element. Keep the stack decreasing; a larger arrival pops and resolves the smaller entries.",docsUrl:"https://resources.devweekends.com/dsa-patterns/monotonic-stack",problems:[T(739,"Daily Temperatures","daily-temperatures"),T(496,"Next Greater Element I","next-greater-element-i"),T(503,"Next Greater Element II","next-greater-element-ii"),T(901,"Online Stock Span","online-stock-span")],templateIds:["stack-monotonic-decreasing"]},"monotonic-deque":{id:"monotonic-deque",name:"Monotonic deque",pattern:"Monotonic Deque",summary:"Max or min of every window of size K. Keep a deque of indices in monotonic order; drop expired indices from the front.",docsUrl:"https://resources.devweekends.com/dsa-patterns/queue",problems:[T(239,"Sliding Window Maximum","sliding-window-maximum"),T(1438,"Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit","longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit")],templateIds:[]},"queue-design":{id:"queue-design",name:"Queue design",pattern:"Queue",summary:"Rolling windows over recent items, rate limiting, fixed-size queues. FIFO of values or timestamps, evicting from the front as they expire.",docsUrl:"https://resources.devweekends.com/dsa-patterns/queue",problems:[T(933,"Number of Recent Calls","number-of-recent-calls"),T(622,"Design Circular Queue","design-circular-queue"),T(346,"Moving Average from Data Stream","moving-average-from-data-stream")],templateIds:[]},"design-hashmap-linked-list":{id:"design-hashmap-linked-list",name:"Hash map + doubly linked list",pattern:"Design",summary:"Constant-time lookup plus constant-time reordering or eviction by recency. A hash map finds a key's node; a doubly linked list keeps items in recency order, oldest at one end.",docsUrl:"https://resources.devweekends.com/dsa-patterns/linked-list",problems:[T(146,"LRU Cache","lru-cache"),T(460,"LFU Cache","lfu-cache",!0)],templateIds:[]},"heap-top-k":{id:"heap-top-k",name:"Heap, top K and repeated max",pattern:"Heap",summary:"K largest, K most frequent, Kth element (also in a stream), or taking the current largest again and again. A min-heap of size K for top K; a max-heap of everything when you must keep pulling the largest.",docsUrl:"https://resources.devweekends.com/dsa-patterns/heap",problems:[T(215,"Kth Largest Element in an Array","kth-largest-element-in-an-array"),T(347,"Top K Frequent Elements","top-k-frequent-elements"),T(703,"Kth Largest Element in a Stream","kth-largest-element-in-a-stream"),T(1046,"Last Stone Weight","last-stone-weight"),T(973,"K Closest Points to Origin","k-closest-points-to-origin")],templateIds:["heap-find-top-k-elements"]},"heap-merge-k":{id:"heap-merge-k",name:"Heap, merge K sorted",pattern:"Heap",summary:"Merge K sorted lists or streams. Push each head into a min-heap; pop the smallest and push its successor.",docsUrl:"https://resources.devweekends.com/dsa-patterns/heap",problems:[T(23,"Merge k Sorted Lists","merge-k-sorted-lists"),T(378,"Kth Smallest Element in a Sorted Matrix","kth-smallest-element-in-a-sorted-matrix"),T(373,"Find K Pairs with Smallest Sums","find-k-pairs-with-smallest-sums"),T(1046,"Last Stone Weight","last-stone-weight",!0)],templateIds:[]},"two-heaps":{id:"two-heaps",name:"Two heaps",pattern:"Heap",summary:"Running median of a stream. A max-heap holds the lower half and a min-heap the upper half, rebalanced so sizes differ by at most one.",docsUrl:"https://resources.devweekends.com/dsa-patterns/heap",problems:[T(295,"Find Median from Data Stream","find-median-from-data-stream"),T(480,"Sliding Window Median","sliding-window-median")],templateIds:[]},trie:{id:"trie",name:"Trie",pattern:"Trie",summary:"Prefix matching, autocomplete, word dictionaries. Store words character by character in a tree so prefix lookups cost O(length).",docsUrl:"https://resources.devweekends.com/dsa-patterns/trie",problems:[T(208,"Implement Trie (Prefix Tree)","implement-trie-prefix-tree"),T(211,"Design Add and Search Words Data Structure","design-add-and-search-words-data-structure"),T(212,"Word Search II","word-search-ii")],templateIds:["ds-trie"]},"linked-list-fast-slow":{id:"linked-list-fast-slow",name:"Linked list, fast and slow pointers",pattern:"Linked List",summary:"Cycle detection, middle node, Nth from end. Move one pointer twice as fast (Floyd's) or give one a head start.",docsUrl:"https://resources.devweekends.com/dsa-patterns/linked-list",problems:[T(141,"Linked List Cycle","linked-list-cycle"),T(876,"Middle of the Linked List","middle-of-the-linked-list"),T(19,"Remove Nth Node From End of List","remove-nth-node-from-end-of-list"),T(142,"Linked List Cycle II","linked-list-cycle-ii")],templateIds:["linkedlist-fast-and-slow-pointer"]},"linked-list-reverse":{id:"linked-list-reverse",name:"Linked list, reverse",pattern:"Linked List",summary:"Reverse a whole list, a sublist, or k-groups. Walk with prev/curr/next and flip each pointer.",docsUrl:"https://resources.devweekends.com/dsa-patterns/linked-list",problems:[T(206,"Reverse Linked List","reverse-linked-list"),T(92,"Reverse Linked List II","reverse-linked-list-ii"),T(25,"Reverse Nodes in k-Group","reverse-nodes-in-k-group")],templateIds:["linkedlist-reverse"]},"linked-list-merge-sorted":{id:"linked-list-merge-sorted",name:"Linked list, merge sorted",pattern:"Linked List",summary:"Merge two sorted lists. Use a dummy head and always attach the smaller of the two current nodes.",docsUrl:"https://resources.devweekends.com/dsa-patterns/linked-list",problems:[T(21,"Merge Two Sorted Lists","merge-two-sorted-lists"),T(148,"Sort List","sort-list")],templateIds:[]},"linked-list-split-reverse-merge":{id:"linked-list-split-reverse-merge",name:"Linked list, split, reverse, merge",pattern:"Linked List",summary:"Interleave or compare the two halves of a list. Find the middle with fast and slow pointers, reverse the second half, then merge or compare it with the first.",docsUrl:"https://resources.devweekends.com/dsa-patterns/linked-list",problems:[T(143,"Reorder List","reorder-list"),T(234,"Palindrome Linked List","palindrome-linked-list"),T(2130,"Maximum Twin Sum of a Linked List","maximum-twin-sum-of-a-linked-list")],templateIds:[]},"tree-dfs-recursive":{id:"tree-dfs-recursive",name:"Tree DFS, recursive",pattern:"DFS",summary:"Anything computed at each node from its children, or checked against values passed down from its ancestors. Recurse into each child; combine answers on the way up, or pass bounds and running values down.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dfs",problems:[T(226,"Invert Binary Tree","invert-binary-tree"),T(104,"Maximum Depth of Binary Tree","maximum-depth-of-binary-tree"),T(543,"Diameter of Binary Tree","diameter-of-binary-tree"),T(110,"Balanced Binary Tree","balanced-binary-tree"),T(100,"Same Tree","same-tree"),T(572,"Subtree of Another Tree","subtree-of-another-tree"),T(235,"Lowest Common Ancestor of a Binary Search Tree","lowest-common-ancestor-of-a-binary-search-tree",!0),T(1448,"Count Good Nodes in Binary Tree","count-good-nodes-in-binary-tree"),T(98,"Validate Binary Search Tree","validate-binary-search-tree")],templateIds:["tree-dfs-recursive"]},"tree-dfs-iterative":{id:"tree-dfs-iterative",name:"Tree DFS, iterative",pattern:"DFS",summary:"Traversals you must pause, or trees too deep to recurse. Replace recursion with an explicit stack, often for an in-order walk you can pause.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dfs",problems:[T(173,"Binary Search Tree Iterator","binary-search-tree-iterator"),T(230,"Kth Smallest Element in a BST","kth-smallest-element-in-a-bst"),T(94,"Binary Tree Inorder Traversal","binary-tree-inorder-traversal")],templateIds:["tree-dfs-iterative"]},"bst-walk":{id:"bst-walk",name:"BST, walk by ordering",pattern:"Binary Search Tree",summary:"Search, insert, delete, or a lowest common ancestor in a BST. Compare with the node and step to the one child that can hold the answer: O(height), no full traversal.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dfs",problems:[T(235,"Lowest Common Ancestor of a Binary Search Tree","lowest-common-ancestor-of-a-binary-search-tree"),T(700,"Search in a Binary Search Tree","search-in-a-binary-search-tree"),T(701,"Insert into a Binary Search Tree","insert-into-a-binary-search-tree"),T(450,"Delete Node in a BST","delete-node-in-a-bst")],templateIds:[]},"tree-bfs":{id:"tree-bfs",name:"Tree BFS, level order",pattern:"BFS",summary:"Anything computed per level. Process the queue one level at a time using its size as a snapshot.",docsUrl:"https://resources.devweekends.com/dsa-patterns/bfs",problems:[T(102,"Binary Tree Level Order Traversal","binary-tree-level-order-traversal"),T(199,"Binary Tree Right Side View","binary-tree-right-side-view"),T(103,"Binary Tree Zigzag Level Order Traversal","binary-tree-zigzag-level-order-traversal")],templateIds:["tree-bfs"]},"graph-dfs":{id:"graph-dfs",name:"Graph DFS",pattern:"DFS",summary:"Connected components, region sizes, copying a structure, or which cells connect to the border. Explore fully from each unvisited node (or from every border cell), marking visited.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dfs",problems:[T(200,"Number of Islands","number-of-islands"),T(695,"Max Area of Island","max-area-of-island"),T(133,"Clone Graph","clone-graph"),T(417,"Pacific Atlantic Water Flow","pacific-atlantic-water-flow"),T(130,"Surrounded Regions","surrounded-regions")],templateIds:["graph-dfs-recursive","graph-dfs-iterative"]},"graph-bfs-shortest-path":{id:"graph-bfs-shortest-path",name:"Graph BFS, shortest path",pattern:"BFS",summary:"Fewest steps in an unweighted graph or grid. BFS from the start; the level at which you reach the target is the distance.",docsUrl:"https://resources.devweekends.com/dsa-patterns/bfs",problems:[T(127,"Word Ladder","word-ladder"),T(1091,"Shortest Path in Binary Matrix","shortest-path-in-binary-matrix"),T(752,"Open the Lock","open-the-lock")],templateIds:["graph-bfs"]},"multi-source-bfs":{id:"multi-source-bfs",name:"Multi-source BFS",pattern:"BFS",summary:"Something spreads from many cells at once. Enqueue every source first, then run one BFS.",docsUrl:"https://resources.devweekends.com/dsa-patterns/bfs",problems:[T(994,"Rotting Oranges","rotting-oranges"),T(542,"01 Matrix","01-matrix"),T(417,"Pacific Atlantic Water Flow","pacific-atlantic-water-flow",!0),T(130,"Surrounded Regions","surrounded-regions",!0)],templateIds:[]},"shortest-path-weighted":{id:"shortest-path-weighted",name:"Shortest path, weighted",pattern:"Graph Algorithms",summary:"Shortest path with edge weights. Dijkstra (min-heap) for non-negative weights; Bellman-Ford for negatives or at most K edges.",docsUrl:"https://resources.devweekends.com/dsa-patterns/graph-algorithms",problems:[T(743,"Network Delay Time","network-delay-time"),T(787,"Cheapest Flights Within K Stops","cheapest-flights-within-k-stops"),T(1631,"Path With Minimum Effort","path-with-minimum-effort")],templateIds:["graph-dijkstra","graph-bellman-ford"]},"topological-sort":{id:"topological-sort",name:"Topological sort",pattern:"Graph Algorithms",summary:"Ordering with dependencies, or detecting that none exists. Kahn's algorithm: repeatedly take nodes with in-degree 0.",docsUrl:"https://resources.devweekends.com/dsa-patterns/graph-algorithms",problems:[T(207,"Course Schedule","course-schedule"),T(210,"Course Schedule II","course-schedule-ii")],templateIds:["graph-kahn"]},"union-find":{id:"union-find",name:"Union-find",pattern:"Union Find",summary:"Are two items in the same group, merging groups, redundant edges (undirected cycles). Keep a parent array with path compression and union by rank.",docsUrl:"https://resources.devweekends.com/dsa-patterns/union-find",problems:[T(684,"Redundant Connection","redundant-connection"),T(721,"Accounts Merge","accounts-merge"),T(547,"Number of Provinces","number-of-provinces")],templateIds:["ds-union-find","ds-union-find-optimized"]},mst:{id:"mst",name:"Minimum spanning tree",pattern:"Graph Algorithms",summary:"Minimum cost to connect all points. Kruskal (sort edges + Union Find) or Prim (grow from a node with a min-heap).",docsUrl:"https://resources.devweekends.com/dsa-patterns/graph-algorithms",problems:[T(1584,"Min Cost to Connect All Points","min-cost-to-connect-all-points")],templateIds:["graph-kruskal","graph-prim"]},backtracking:{id:"backtracking",name:"Backtracking",pattern:"Backtracking",summary:"Generate all subsets, permutations, or combinations. Choose, recurse, un-choose, recording each complete candidate.",docsUrl:"https://resources.devweekends.com/dsa-patterns/backtracking",problems:[T(78,"Subsets","subsets"),T(46,"Permutations","permutations"),T(77,"Combinations","combinations"),T(39,"Combination Sum","combination-sum")],templateIds:["backtracking"]},"backtracking-pruning":{id:"backtracking-pruning",name:"Backtracking, pruning",pattern:"Backtracking",summary:"Constraint puzzles where a partial choice can be checked early. Backtrack, but reject a partial choice as soon as it breaks a constraint.",docsUrl:"https://resources.devweekends.com/dsa-patterns/backtracking",problems:[T(51,"N-Queens","n-queens"),T(37,"Sudoku Solver","sudoku-solver"),T(79,"Word Search","word-search")],templateIds:[]},"dp-top-down":{id:"dp-top-down",name:"DP, top-down",pattern:"Dynamic Programming",summary:"Overlapping subproblems where the recursion is the natural statement. Write the recursive choice, then cache results by state.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",problems:[T(139,"Word Break","word-break"),T(91,"Decode Ways","decode-ways")],templateIds:["dp-top-down"]},"dp-bottom-up":{id:"dp-bottom-up",name:"DP, bottom-up",pattern:"Dynamic Programming",summary:"Each state depends on earlier indices or neighbor cells. Fill a dp table from the base cases forward.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",problems:[T(198,"House Robber","house-robber"),T(62,"Unique Paths","unique-paths"),T(64,"Minimum Path Sum","minimum-path-sum"),T(70,"Climbing Stairs","climbing-stairs")],templateIds:["dp-bottom-up"]},"dp-kadane":{id:"dp-kadane",name:"Kadane's algorithm",pattern:"Dynamic Programming",summary:"Maximum sum subarray, or the best gain of a later value over an earlier one. At each element, either extend the running best or restart from it (for a gain, track the lowest value so far); keep the best seen.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",problems:[T(53,"Maximum Subarray","maximum-subarray"),T(152,"Maximum Product Subarray","maximum-product-subarray"),T(918,"Maximum Sum Circular Subarray","maximum-sum-circular-subarray"),T(121,"Best Time to Buy and Sell Stock","best-time-to-buy-and-sell-stock")],templateIds:["dp-kadane"]},"dp-unbounded-knapsack":{id:"dp-unbounded-knapsack",name:"Unbounded knapsack",pattern:"Dynamic Programming",summary:"Items reusable any number of times: fewest items, or number of ways, to reach a total. 1D dp over the target, looping capacity forward.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",problems:[T(322,"Coin Change","coin-change"),T(518,"Coin Change II","coin-change-ii"),T(279,"Perfect Squares","perfect-squares")],templateIds:[]},"dp-01-knapsack":{id:"dp-01-knapsack",name:"0/1 knapsack",pattern:"Dynamic Programming",summary:"Each item used at most once: can a subset, or how many subsets, reach a total. dp over capacity, looping capacity backwards per item.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",problems:[T(416,"Partition Equal Subset Sum","partition-equal-subset-sum"),T(494,"Target Sum","target-sum"),T(474,"Ones and Zeroes","ones-and-zeroes")],templateIds:[]},"dp-sequences":{id:"dp-sequences",name:"DP, sequences",pattern:"Dynamic Programming",summary:"Longest increasing or common subsequence, edit distance. dp[i] over one sequence or dp[i][j] over prefixes of two.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",problems:[T(300,"Longest Increasing Subsequence","longest-increasing-subsequence"),T(1143,"Longest Common Subsequence","longest-common-subsequence"),T(72,"Edit Distance","edit-distance")],templateIds:[]},greedy:{id:"greedy",name:"Greedy",pattern:"Greedy",summary:"Take the locally best move in one pass when an exchange argument shows it is never worse.",docsUrl:"https://resources.devweekends.com/dsa-patterns/greedy",problems:[T(121,"Best Time to Buy and Sell Stock","best-time-to-buy-and-sell-stock",!0),T(55,"Jump Game","jump-game"),T(134,"Gas Station","gas-station"),T(763,"Partition Labels","partition-labels")],templateIds:[]},"bit-manipulation":{id:"bit-manipulation",name:"Bit manipulation",pattern:"Bit Manipulation",summary:"Single number among pairs, set bits, powers of two. Use XOR, masks, and shifts to work on bits directly in O(1) space.",docsUrl:"https://resources.devweekends.com/dsa-patterns/bit-manipulation",problems:[T(136,"Single Number","single-number"),T(191,"Number of 1 Bits","number-of-1-bits"),T(231,"Power of Two","power-of-two"),T(338,"Counting Bits","counting-bits")],templateIds:["bitmanipulation-test-kth-bit","bitmanipulation-set-kth-bit","bitmanipulation-clear-kth-bit","bitmanipulation-toggle-kth-bit","bitmanipulation-get-rightmost-bit","bitmanipulation-count-set-bits","bitmanipulation-multiply-power-of-two","bitmanipulation-divide-power-of-two","bitmanipulation-check-power-of-two","bitmanipulation-swap-variables"]}}},$c=s=>String(s).padStart(2,"0");function p_({run:s}){const{started:h,steps:f,leaf:c,node:S}=s,R=f.length+1,M=h&&!c&&!S;return u.jsxs("nav",{className:N.log,"aria-label":"Your path so far",children:[u.jsxs("header",{className:N.logHead,children:[u.jsxs("p",{className:N.stripTitle,children:["Path log",u.jsxs("span",{className:N.stripValue,children:[f.length," answered"]})]}),u.jsx("p",{className:N.logHint,children:f.length>0?"Click a step to go back to that check.":"Each answer is written here as you go."})]}),u.jsxs("ol",{className:N.logRows,children:[f.map((D,U)=>u.jsx("li",{children:u.jsxs("button",{type:"button",className:N.row,"aria-label":`Back to question ${U+1}: ${D.question} You picked: ${D.option.cue}`,onClick:()=>s.backtrackTo(U),children:[u.jsx("span",{className:N.rowNum,"aria-hidden":"true",children:$c(U+1)}),u.jsxs("span",{className:N.rowText,children:[u.jsx("span",{className:N.rowQuestion,children:D.question}),u.jsx("span",{className:N.rowCue,children:D.option.cue})]}),u.jsx("span",{className:N.rowBack,"aria-hidden":"true",children:"Back"})]})},U)),!h&&u.jsx("li",{children:u.jsxs("div",{className:Ye(N.row,N.rowReady),children:[u.jsx("span",{className:N.rowNum,"aria-hidden":"true",children:"01"}),u.jsxs("span",{className:N.rowText,children:[u.jsx("span",{className:N.rowQuestion,children:"Ready"}),u.jsx("span",{className:N.rowLive,children:wi.nodes[wi.rootId].question})]})]})}),h&&S&&u.jsx("li",{"aria-current":"step",children:u.jsxs("div",{className:Ye(N.row,N.rowCurrent),children:[u.jsx("span",{className:N.rowNum,"aria-hidden":"true",children:$c(R)}),u.jsxs("span",{className:N.rowText,children:[u.jsxs("span",{className:N.rowQuestion,children:["Now, check ",R]}),u.jsx("span",{className:N.rowLive,children:S.question})]})]})}),c&&u.jsx("li",{"aria-current":"step",children:u.jsxs("div",{className:Ye(N.row,N.rowResult),children:[u.jsx("span",{className:N.rowNum,"aria-hidden":"true",children:"="}),u.jsxs("span",{className:N.rowText,children:[u.jsxs("span",{className:N.rowQuestion,children:["Result, ",c.pattern]}),u.jsx("span",{className:N.rowLive,children:c.name})]})]})}),M&&u.jsx("li",{"aria-current":"step",children:u.jsxs("div",{className:Ye(N.row,N.rowFault),children:[u.jsx("span",{className:N.rowNum,"aria-hidden":"true",children:"!"}),u.jsxs("span",{className:N.rowText,children:[u.jsx("span",{className:N.rowQuestion,children:"Fault"}),u.jsx("span",{className:N.rowLive,children:"This path leads nowhere"})]})]})}),!c&&!M&&u.jsx("li",{className:N.nextWrap,"aria-hidden":"true",children:u.jsxs("div",{className:N.nextCheck,children:[u.jsx("span",{className:Ye(N.rowNum,N.rowNumDashed),children:$c(R+1)}),u.jsx("span",{className:N.nextLabel,children:"Next check appears here"})]})})]})]})}const g_=`def backtrack(curr, OTHER_ARGUMENTS...):
    if (BASE_CASE):
        # TODO: modify answer
        return

    ans = 0

    for (ITERATE_OVER_INPUT):
        # TODO: modify current state
        ans += backtrack(curr, OTHER_ARGUMENTS...)
        # TODO: undo modification of current state

    return ans
`,b_=`const backtrack = (curr, OTHER_ARGUMENTS...) => {
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
`,v_=`public int backtrack(STATE curr, OTHER_ARGUMENTS...) {
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
`,y_=`int backtrack(STATE curr, OTHER_ARGUMENTS...) {
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
`,__=`def fn(arr, target):
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
`,S_=`const fn = (arr, target) => {
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
`,T_=`public int fn(int[] arr, int target) {
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
`,E_=`#include <vector>

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
`,w_=`def fn(arr):
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
`,x_=`const fn = (arr) => {
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
`,O_=`public int fn(int[] arr) {
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
`,N_=`#include <vector>

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
`,A_=`def fn(arr):
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
`,M_=`const fn = (arr) => {
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
`,C_=`public int fn(int[] arr) {
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
`,R_=`#include <vector>

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
`,k_=`def fn(arr, target):
    left = 0
    right = len(arr)

    while left < right:
        mid = (left + right) // 2

        if arr[mid] >= target:
            right = mid
        else:
            left = mid + 1

    return left
`,D_=`const fn = (arr, target) => {
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
`,j_=`public int fn(int[] arr, int target) {
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
`,z_=`#include <vector>

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
`,B_=`def fn(arr, target):
    left = 0
    right = len(arr)

    while left < right:
        mid = (left + right) // 2

        if arr[mid] > target:
            right = mid
        else:
            left = mid + 1

    return left
`,L_=`const fn = (arr, target) => {
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
`,U_=`public int fn(int[] arr, int target) {
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
`,q_=`#include <vector>

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
`,H_=`def is_power_of_two(num: int) -> bool:
    return (num & (num - 1)) == 0
`,Y_=`const isPowerOfTwo = (num) => {
    return (num & (num - 1)) === 0
}
`,G_=`public boolean isPowerOfTwo(int num) {
    return (num & (num - 1)) == 0;
}
`,K_=`bool is_power_of_two(int num) {
    return (num & (num - 1)) == 0;
}
`,V_=`def clear_kth_bit(num: int, k: int) -> int:
    return num & ~(1 << k)
`,I_=`const clearKthBit = (num, k) => {
    return num & ~(1 << k)
}
`,Q_=`public int clearKthBit(int num, int k) {
    return num & ~(1 << k);
}
`,X_=`int clear_kth_bit(int num, int k) {
    return num & ~(1 << k);
}
`,Z_=`def count_set_bits(num: int) -> int:
    return bin(num).count('1')
`,J_=`const countSetBits = (num) => {
    return num.toString(2).split('1').length - 1
}
`,F_=`public int countSetBits(int num) {
    int count = 0;

    while (num > 0) {
        count += num & 1;
        num >>= 1;
    }

    return count;
}
`,P_=`int count_set_bits(int num) {
    int count = 0;

    while (num) {
        count += num & 1;
        num >>= 1;
    }

    return count;
}
`,W_=`def divide_by_power_of_two(num: int, k: int) -> int:
    return num >> k
`,$_=`const divideByPowerOfTwo = (num, k) => {
    return num >> k;
}
`,eS=`public int divideByPowerOfTwo(int num, int k) {
    return num >> k;
}
`,nS=`int divide_by_power_of_two(int num, int k) {
    return num >> k;
}
`,tS=`def get_rightmost_set_bit(num: int) -> int:
    return num & -num
`,aS=`const getRightmostSetBit = (num) => {
    return num & -num
}
`,iS=`public int getRightmostSetBit(int num) {
    return num & -num;
}
`,lS=`int get_rightmost_set_bit(int num) {
    return num & -num;
}
`,rS=`def multiply_by_power_of_two(num: int, k: int) -> int:
    return num << k
`,sS=`const multiplyByPowerOfTwo = (num, k) => {
    return num << k
}
`,uS=`public int multiplyByPowerOfTwo(int num, int k) {
    return num << k;
}
`,oS=`int multiply_by_power_of_two(int num, int k) {
    return num << k;
}
`,cS=`def set_kth_bit(num: int, k: int) -> int:
    return num | (1 << k)
`,fS=`const setKthBit = (num, k) => {
    return num | (1 << k)
}
`,dS=`public int setKthBit(int num, int k) {
    return num | (1 << k);
}
`,hS=`int set_kth_bit(int num, int k) {
    return num | (1 << k);
}
`,mS=`def swap_variables(num1: int, num2: int) -> tuple:
    num1 ^= num2
    num2 ^= num1
    num1 ^= num2
    return num1, num2
`,pS=`const swapVariables = (num1, num2) => {
    num1 ^= num2
    num2 ^= num1
    num1 ^= num2
    return [num1, num2]
}
`,gS=`public int[] swapVariables(int num1, int num2) {
    num1 ^= num2;
    num2 ^= num1;
    num1 ^= num2;
    return new int[] { num1, num2 };
}
`,bS=`#include <tuple>

using namespace std;


tuple<int, int> swap_variables(int num1, int num2) {
    num1 ^= num2;
    num2 ^= num1;
    num1 ^= num2;
    return std::make_tuple(num1, num2);
}
`,vS=`def test_kth_bit(num: int, k: int) -> bool:
    return num & (1 << k) != 0
`,yS=`const testKthBit = (num, k) => {
    return num & (1 << k) !== 0
}
`,_S=`public boolean testKthBit(int num, int k) {
    return (num & (1 << k)) != 0;
}
`,SS=`bool test_kth_bit(int num, int k) {
    return (num & (1 << k)) != 0;
}
`,TS=`def toggle_kth_bit(num: int, k: int) -> int:
    return num ^ (1 << k)
`,ES=`const toggleKthBit = (num, k) => {
    return num ^ (1 << k)
}
`,wS=`public int toggleKthBit(int num, int k) {
    return num ^ (1 << k);
}
`,xS=`int toggle_kth_bit(int num, int k) {
    return num ^ (1 << k);
}
`,OS=`def fn(arr):
    if BASE_CASE:
        return 0

    dp = [BASE_CASE] * (STATE_FOR_WHOLE_INPUT + 1)

    for STATE in range(SMALLEST_SUBPROBLEM, STATE_FOR_WHOLE_INPUT + 1):
        if BASE_CASE:
            dp[STATE] = BASE_CASE
        else:
            dp[STATE] = RECURRENCE_RELATION(STATE)

    return dp[STATE_FOR_WHOLE_INPUT]
`,NS=`const fn = (arr) => {
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
`,AS=`import java.util.Arrays;


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
`,MS=`#include <vector>
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
`,CS=`def kadane(arr: list[int]) -> int:
    curr_sub = max_sub = arr[0]

    for num in arr[1:]:
        curr_sub = max(curr_sub + num, num)
        max_sub = max(max_sub, curr_sub)

    return max_sub
`,RS=`const kadane = (arr) => {
    let currSub = arr[0]
    let maxSub = arr[0]

    for (let i = 1; i < arr.length; i++) {
        currSub = Math.max(currSub + arr[i], arr[i])
        maxSub = Math.max(maxSub, currSub)
    }

    return maxSub
}
`,kS=`public int kadane(int[] arr) {
    int currSub = arr[0];
    int maxSub = arr[0];

    for (int i = 1; i < arr.length; i++) {
        currSub = Math.max(currSub + arr[i], arr[i]);
        maxSub = Math.max(maxSub, currSub);
    }

    return maxSub;
}
`,DS=`#include <vector>
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
`,jS=`def fn(arr):
    @cache
    def dp(STATE):
        if BASE_CASE:
            return 0
        return RECURRENCE_RELATION(STATE)

    return dp(STATE_FOR_WHOLE_INPUT)
`,zS=`const fn = (arr) => {
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
`,BS=`import java.util.HashMap;
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
`,LS=`#include <unordered_map>

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
`,US=`from typing import Any


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
`,qS=`class HashMap {
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
`,HS=`public class HashMap {
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
`,YS=`#include <iostream>
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
`,GS=`class TrieNode:
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
`,KS=`class TrieNode {
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
`,VS=`import java.util.ArrayList;
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
`,IS=`#include <iostream>
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
`,QS=`class UnionFind:
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
`,XS=`class UnionFind {
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
`,ZS=`import java.util.ArrayList;
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
`,JS=`#include <iostream>
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
`,FS=`class UnionFind:
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
`,PS=`class UnionFind {
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
`,WS=`import java.util.ArrayList;
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
`,$S=`#include <iostream>
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
`,e2=`def bellman_ford(n: int, edges: list[tuple[int, int, int]], source: int) -> list[int]:
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
`,n2=`const bellmanFord = (n, edges, source) => {
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
`,t2=`import java.util.Arrays;
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
`,a2=`#include <vector>
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
`,i2=`from collections import deque


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
`,l2=`const fn = (graph) => {
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
`,r2=`import java.util.ArrayList;
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
`,s2=`#include <queue>
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
`,u2=`def fn(graph):
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
`,o2=`const fn = (graph) => {
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
`,c2=`import java.util.Stack;
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
`,f2=`#include <stack>
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
`,d2=`def fn(graph):
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
`,h2=`const fn = (graph) => {
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
`,m2=`import java.util.HashSet;
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
`,p2=`#include <unordered_set>
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
`,g2=`from heapq import heappop, heappush


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
`,b2=`/*
    JavaScript lacks built-in support for heaps.
    Try using a language that doesn't hate you, like Python.
*/
`,v2=`import java.util.Arrays;
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
`,y2=`#include <limits>
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
`,_2=`from collections import defaultdict, deque


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
`,S2=`const kahnTopologicalSort = (graph) => {
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
`,T2=`import java.util.ArrayList;
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
`,E2=`#include <vector>
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
`,w2=`def kruskal_mst(n: int, edges: list[tuple[int, int, int]]) -> list[tuple[int, int, int]]:
    mst = []
    uf = UnionFind(n)
    edges.sort()

    for w, u, v in edges:
        if not uf.connected(u, v):
            uf.union(u, v)
            mst.append((w, u, v))

    return mst
`,x2=`const kruskalMst = (n, edges) => {
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
`,O2=`import java.util.ArrayList;
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
`,N2=`#include <vector>
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
`,A2=`from heapq import heappop


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
`,M2=`/*
    JavaScript lacks built-in support for heaps.
    Try using a language that doesn't hate you, like Python.
*/
`,C2=`import java.util.ArrayList;
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
`,R2=`#include <vector>
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
`,k2=`from collections import defaultdict


def fn(arr, k):
    counts = defaultdict(int)
    counts[0] = 1
    ans = curr = 0

    for num in arr:
        # TODO: logic to change curr
        ans += counts[curr - k]
        counts[curr] += 1

    return ans
`,D2=`const fn = (arr, k) => {
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
`,j2=`import java.util.HashMap;
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
`,z2=`#include <vector>
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
`,B2=`def fn(arr):
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
`,L2=`function fn(arr) {
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
`,U2=`import java.util.HashSet;
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
`,q2=`#include <vector>
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
`,H2=`from heapq import heappop, heappush


def fn(arr, k):
    heap = []

    for num in arr:
        # TODO: logic to push onto heap according to problem's criteria
        heappush(heap, (CRITERIA, num))

        if len(heap) > k:
            heappop(heap)

    return [num for num in heap]
`,Y2=`/*
    JavaScript lacks built-in support for heaps.
    Try using a language that doesn't hate you, like Python.
*/
`,G2=`import java.util.PriorityQueue;


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
`,K2=`#include <vector>
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
`,V2=`def fn(head):
    slow = head
    fast = head
    ans = 0

    while fast and fast.next:
        # TODO: logic
        slow = slow.next
        fast = fast.next.next

    return ans
`,I2=`const fn = (head) => {
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
`,Q2=`public int fn(ListNode head) {
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
`,X2=`int fn(ListNode* head) {
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
`,Z2=`def fn(head):
    prev = None
    curr = head

    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt

    return prev
`,J2=`const fn = (head) => {
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
`,F2=`public ListNode fn(ListNode head) {
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
`,P2=`ListNode* fn(ListNode* head) {
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
`,W2=`def fn(arr):
    n = len(arr)
    prefix = [arr[0]]

    for i in range(1, n):
        prefix.append(prefix[-1] + arr[i])

    return prefix
`,$2=`const fn = (arr) => {
    let prefix = [arr[0]]

    for (let i = 1; i < arr.length; i++) {
        prefix.push(prefix[prefix.length - 1] + arr[i])
    }

    return prefix
}
`,e3=`import java.util.ArrayList;
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
`,n3=`#include <iostream>
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
`,t3=`def fn(arr):
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
`,a3=`const fn = (arr) => {
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
`,i3=`public int fn(int[] arr) {
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
`,l3=`#include <vector>

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
`,r3=`def fn(arr):
    stack = []
    ans = 0

    for num in arr:
        while stack and stack[-1] < num:
            # TODO: logic
            stack.pop()
        stack.append(num)

    return ans
`,s3=`const fn = (arr) => {
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
`,u3=`import java.util.Stack;


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
`,o3=`#include <stack>
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
`,c3=`def fn(arr):
    stack = []
    ans = 0

    for num in arr:
        while stack and stack[-1] > num:
            # TODO: logic
            stack.pop()
        stack.append(num)

    return ans
`,f3=`const fn = (arr) => {
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
`,d3=`import java.util.Stack;


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
`,h3=`#include <stack>
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
`,m3=`def fn(strs: list[str]):
    ans = []

    for char in strs:
        ans.append(char)

    return ''.join(ans)
`,p3=`const fn = (arr) => {
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
`,g3=`public String fn(char[] strs) {
    StringBuilder sb = new StringBuilder();

    for (char c: strs) {
        sb.append(c);
    }

    return sb.toString();
}
`,b3=`string fn(vector<char>& arr) {
    return string(arr.begin(), arr.end())
}
`,v3=`from collections import deque


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
`,y3=`const fn = (root) => {
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
`,_3=`import java.util.LinkedList;
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
`,S3=`#include <queue>

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
`,T3=`def dfs(root):
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
`,E3=`const dfs = (root) => {
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
`,w3=`import java.util.Stack;


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
`,x3=`#include <stack>

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
`,O3=`def dfs(root):
    if not root:
        return

    ans = 0

    # TODO: logic
    dfs(root.left)
    dfs(root.right)

    return ans
`,N3=`const dfs = (root) => {
    if (!root) {
        return
    }

    let ans = 0

    // TODO: logic
    dfs(root.left)
    dfs(root.right)

    return ans
}
`,A3=`public int dfs(TreeNode root) {
    if (root == null) {
        return 0;
    }

    int ans = 0;

    // TODO: logic
    ans += dfs(root.left);
    ans += dfs(root.right);

    return ans;
}
`,M3=`int dfs(TreeNode* root) {
    if (root == nullptr) {
        return 0;
    }

    int ans = 0;

    // TODO: logic
    dfs(root.left);
    dfs(root.right);

    return ans;
}
`,C3=`def fn(arr):
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
`,R3=`const fn = (arr) => {
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
`,k3=`public int fn(int[] arr) {
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
`,D3=`#include <vector>

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
`,j3=`def fn(arr1, arr2):
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
`,z3=`let fn = (arr1, arr2) => {
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
`,B3=`public int fn(int[] arr1, int[] arr2) {
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
`,L3=`#include <vector>

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
`,be=(s,h,f,c,S)=>({title:s,code:{python:h,javascript:f,java:c,cpp:S}}),U3={backtracking:be("backtracking",g_,b_,v_,y_),"binary-search":be("binary search",__,S_,T_,E_),"binary-search-greedy-maximum":be("greedy (maximum)",w_,x_,O_,N_),"binary-search-greedy-minimum":be("greedy (minimum)",A_,M_,C_,R_),"binary-search-left-insertion":be("duplicate elements, left-most insertion point",k_,D_,j_,z_),"binary-search-right-insertion":be("duplicate elements, right-most insertion point",B_,L_,U_,q_),"bitmanipulation-check-power-of-two":be("check if number is power of 2",H_,Y_,G_,K_),"bitmanipulation-clear-kth-bit":be("clear kth bit",V_,I_,Q_,X_),"bitmanipulation-count-set-bits":be("count set bits",Z_,J_,F_,P_),"bitmanipulation-divide-power-of-two":be("divide by 2^k",W_,$_,eS,nS),"bitmanipulation-get-rightmost-bit":be("get rightmost bit",tS,aS,iS,lS),"bitmanipulation-multiply-power-of-two":be("multiply by 2^k",rS,sS,uS,oS),"bitmanipulation-set-kth-bit":be("set kth bit",cS,fS,dS,hS),"bitmanipulation-swap-variables":be("swap two variables",mS,pS,gS,bS),"bitmanipulation-test-kth-bit":be("test kth-bit",vS,yS,_S,SS),"bitmanipulation-toggle-kth-bit":be("toggle kth bit",TS,ES,wS,xS),"dp-bottom-up":be("DP bottom-up",OS,NS,AS,MS),"dp-kadane":be("Kadane (max-sum subarray)",CS,RS,kS,DS),"dp-top-down":be("DP top-down",jS,zS,BS,LS),"ds-hash-map":be("hash map",US,qS,HS,YS),"ds-trie":be("trie",GS,KS,VS,IS),"ds-union-find":be("union find",QS,XS,ZS,JS),"ds-union-find-optimized":be("union find optimized",FS,PS,WS,$S),"graph-bellman-ford":be("Bellman-Ford (shortest path)",e2,n2,t2,a2),"graph-bfs":be("BFS",i2,l2,r2,s2),"graph-dfs-iterative":be("DFS (iterative)",u2,o2,c2,f2),"graph-dfs-recursive":be("DFS (recursive)",d2,h2,m2,p2),"graph-dijkstra":be("Dijkstra (shortest path)",g2,b2,v2,y2),"graph-kahn":be("Kahn (topological sort)",_2,S2,T2,E2),"graph-kruskal":be("Kruskal (mst)",w2,x2,O2,N2),"graph-prim":be("Prim (mst)",A2,M2,C2,R2),"hashmap-find-number-of-subarrays":be("find number of subarrays that fit an exact criteria",k2,D2,j2,z2),"hashmap-sliding-window":be("sliding window",B2,L2,U2,q2),"heap-find-top-k-elements":be("find top k elements",H2,Y2,G2,K2),"linkedlist-fast-and-slow-pointer":be("fast and slow pointer",V2,I2,Q2,X2),"linkedlist-reverse":be("reverse linked list",Z2,J2,F2,P2),"prefix-sum":be("prefix sum",W2,$2,e3,n3),"sliding-window":be("sliding window",t3,a3,i3,l3),"stack-monotonic-decreasing":be("monotonic decreasing stack",r3,s3,u3,o3),"stack-monotonic-increasing":be("monotonic increasing stack",c3,f3,d3,h3),"string-building":be("efficient string building",m3,p3,g3,b3),"tree-bfs":be("BFS",v3,y3,_3,S3),"tree-dfs-iterative":be("DFS (iterative)",T3,E3,w3,x3),"tree-dfs-recursive":be("DFS (recursive)",O3,N3,A3,M3),"two-pointers-one-input":be("two pointers: one input, opposite ends",C3,R3,k3,D3),"two-pointers-two-inputs":be("two pointers: two inputs, exhaust both",j3,z3,B3,L3)};function q3(s){const h=wi.leaves[s];return h?h.templateIds.map(f=>U3[f]).filter(f=>!!f):[]}const H3={E:"Easy",M:"Medium",H:"Hard"},Wt=([s,h,f,c,S,R])=>({n:s,lc:h,name:f,slug:c,difficulty:H3[S],ask:R}),va=[{id:"arrays-hashing",name:"Arrays & Hashing",why:"Trade memory for lookups. The first move on most problems.",problems:[[1,217,"Contains Duplicate","contains-duplicate","E","Does any value appear at least twice in the array?"],[2,242,"Valid Anagram","valid-anagram","E","Are two strings made of exactly the same letters?"],[3,1,"Two Sum","two-sum","E","Find the two numbers in an array that add up to a target."],[4,49,"Group Anagrams","group-anagrams","M","Group the strings that are anagrams of each other."],[5,347,"Top K Frequent Elements","top-k-frequent-elements","M","Return the k values that appear most often."],[6,36,"Valid Sudoku","valid-sudoku","M","Is a partly filled 9×9 board free of repeats in every row, column and box?"],[7,238,"Product of Array Except Self","product-of-array-except-self","M","For each index, the product of every other element, without division."],[8,128,"Longest Consecutive Sequence","longest-consecutive-sequence","M","Length of the longest run of consecutive integers, in O(n)."]].map(s=>Wt(s))},{id:"two-pointers",name:"Two Pointers",why:"Turn a nested loop into one pass from both ends.",problems:[[9,125,"Valid Palindrome","valid-palindrome","E","Is the string a palindrome, ignoring case and non-alphanumerics?"],[10,167,"Two Sum II - Input Array Is Sorted","two-sum-ii-input-array-is-sorted","M","Two Sum on a sorted array, using constant extra space."],[11,15,"3Sum","3sum","M","Find all unique triplets that sum to zero."],[12,11,"Container With Most Water","container-with-most-water","M","Pick two lines that, with the x-axis, hold the most water."]].map(s=>Wt(s))},{id:"sliding-window",name:"Sliding Window",why:"Grow right, shrink left, keep the window valid.",problems:[[13,121,"Best Time to Buy and Sell Stock","best-time-to-buy-and-sell-stock","E","Maximum profit from one buy followed by one sell."],[14,3,"Longest Substring Without Repeating Characters","longest-substring-without-repeating-characters","M","Length of the longest substring with no repeated characters."],[15,424,"Longest Repeating Character Replacement","longest-repeating-character-replacement","M","Longest substring that can become one repeated letter with at most k changes."]].map(s=>Wt(s))},{id:"stack",name:"Stack",why:"The most recent unresolved thing is the next one to resolve.",problems:[[16,20,"Valid Parentheses","valid-parentheses","E","Are all brackets closed in the right order?"],[17,155,"Min Stack","min-stack","M","Design a stack that returns its minimum in constant time."],[18,739,"Daily Temperatures","daily-temperatures","M","For each day, how many days until a warmer one?"]].map(s=>Wt(s))},{id:"binary-search",name:"Binary Search",why:"Discard half the space per step, even when the array is rotated.",problems:[[19,704,"Binary Search","binary-search","E","Find a target in a sorted array in O(log n)."],[20,153,"Find Minimum in Rotated Sorted Array","find-minimum-in-rotated-sorted-array","M","Find the smallest value in a sorted array rotated at an unknown point."],[21,33,"Search in Rotated Sorted Array","search-in-rotated-sorted-array","M","Find a target in a rotated sorted array in O(log n)."]].map(s=>Wt(s))},{id:"linked-list",name:"Linked List",why:"Pointer surgery: dummy heads, fast and slow, reversal.",problems:[[22,206,"Reverse Linked List","reverse-linked-list","E","Reverse a singly linked list."],[23,21,"Merge Two Sorted Lists","merge-two-sorted-lists","E","Merge two sorted lists into one sorted list."],[24,143,"Reorder List","reorder-list","M","Reorder L0 → L1 → … → Ln into L0 → Ln → L1 → Ln-1 → …, in place."],[25,19,"Remove Nth Node From End of List","remove-nth-node-from-end-of-list","M","Remove the nth node from the end of a list in one pass."],[26,141,"Linked List Cycle","linked-list-cycle","E","Does a linked list contain a cycle?"],[27,146,"LRU Cache","lru-cache","M","Design a cache that evicts the least recently used key, with O(1) operations."]].map(s=>Wt(s))},{id:"tree-recursion",name:"Tree Recursion",why:"Solve the subtree, then combine at the node.",problems:[[28,226,"Invert Binary Tree","invert-binary-tree","E","Mirror a binary tree left to right."],[29,104,"Maximum Depth of Binary Tree","maximum-depth-of-binary-tree","E","How many levels deep is a binary tree?"],[30,543,"Diameter of Binary Tree","diameter-of-binary-tree","E","Length of the longest path between any two nodes in a tree."],[31,110,"Balanced Binary Tree","balanced-binary-tree","E","Do all nodes have left and right subtree heights that differ by at most one?"],[32,100,"Same Tree","same-tree","E","Are two binary trees identical in shape and values?"],[33,572,"Subtree of Another Tree","subtree-of-another-tree","E","Does one tree appear as a subtree of another?"]].map(s=>Wt(s))},{id:"tree-traversal-bst",name:"Traversal & BST",why:"Pick the traversal that carries the state you need.",problems:[[34,235,"Lowest Common Ancestor of a Binary Search Tree","lowest-common-ancestor-of-a-binary-search-tree","M","Find the lowest common ancestor of two nodes in a binary search tree."],[35,102,"Binary Tree Level Order Traversal","binary-tree-level-order-traversal","M","Return the node values level by level."],[36,199,"Binary Tree Right Side View","binary-tree-right-side-view","M","Which nodes are visible when looking at a tree from the right?"],[37,1448,"Count Good Nodes in Binary Tree","count-good-nodes-in-binary-tree","M","Count the nodes that are no smaller than any ancestor on their path from the root."],[38,98,"Validate Binary Search Tree","validate-binary-search-tree","M","Is a binary tree a valid binary search tree?"],[39,230,"Kth Smallest Element in a BST","kth-smallest-element-in-a-bst","M","Return the kth smallest value in a binary search tree."]].map(s=>Wt(s))},{id:"heap",name:"Heap",why:"Keep only the k best, or always the next best.",problems:[[40,703,"Kth Largest Element in a Stream","kth-largest-element-in-a-stream","E","Return the kth largest value each time a new number arrives."],[41,1046,"Last Stone Weight","last-stone-weight","E","Repeatedly smash the two heaviest stones together; what weight is left?"],[42,215,"Kth Largest Element in an Array","kth-largest-element-in-an-array","M","Return the kth largest element of an unsorted array."]].map(s=>Wt(s))},{id:"graphs",name:"Graphs",why:"Flood fill the grid, clone with a map, order with indegrees.",problems:[[43,200,"Number of Islands","number-of-islands","M","Count the islands in a grid of land and water."],[44,695,"Max Area of Island","max-area-of-island","M","Find the area of the largest island in a grid."],[45,133,"Clone Graph","clone-graph","M","Make a deep copy of a connected undirected graph."],[46,417,"Pacific Atlantic Water Flow","pacific-atlantic-water-flow","M","Which cells can send water to both the Pacific and the Atlantic?"],[47,130,"Surrounded Regions","surrounded-regions","M","Capture every region of O's completely surrounded by X's."],[48,207,"Course Schedule","course-schedule","M","Can all courses be finished, given their prerequisites?"],[49,210,"Course Schedule II","course-schedule-ii","M","Return a valid order to take all courses, if one exists."]].map(s=>Wt(s))}],wr=va.flatMap(s=>s.problems),Y3=s=>`https://leetcode.com/problems/${s}/`,lu={total:wr.length,patterns:va.length,easy:wr.filter(s=>s.difficulty==="Easy").length,medium:wr.filter(s=>s.difficulty==="Medium").length,hard:wr.filter(s=>s.difficulty==="Hard").length},G3="_container_15mmp_1",K3="_buttonContainer_15mmp_15",V3="_tabButtonContainer_15mmp_24",I3="_tabButton_15mmp_24",ru={container:G3,buttonContainer:K3,tabButtonContainer:V3,tabButton:I3},Q3="_code_10mye_1",X3="_line_10mye_14",Bp={code:Q3,line:X3};var ef,Lp;function Z3(){if(Lp)return ef;Lp=1;function s(m){return m instanceof Map?m.clear=m.delete=m.set=function(){throw new Error("map is read-only")}:m instanceof Set&&(m.add=m.clear=m.delete=function(){throw new Error("set is read-only")}),Object.freeze(m),Object.getOwnPropertyNames(m).forEach(k=>{const I=m[k],pe=typeof I;(pe==="object"||pe==="function")&&!Object.isFrozen(I)&&s(I)}),m}class h{constructor(k){k.data===void 0&&(k.data={}),this.data=k.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function f(m){return m.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function c(m,...k){const I=Object.create(null);for(const pe in m)I[pe]=m[pe];return k.forEach(function(pe){for(const tn in pe)I[tn]=pe[tn]}),I}const S="</span>",R=m=>!!m.scope,M=(m,{prefix:k})=>{if(m.startsWith("language:"))return m.replace("language:","language-");if(m.includes(".")){const I=m.split(".");return[`${k}${I.shift()}`,...I.map((pe,tn)=>`${pe}${"_".repeat(tn+1)}`)].join(" ")}return`${k}${m}`};class D{constructor(k,I){this.buffer="",this.classPrefix=I.classPrefix,k.walk(this)}addText(k){this.buffer+=f(k)}openNode(k){if(!R(k))return;const I=M(k.scope,{prefix:this.classPrefix});this.span(I)}closeNode(k){R(k)&&(this.buffer+=S)}value(){return this.buffer}span(k){this.buffer+=`<span class="${k}">`}}const U=(m={})=>{const k={children:[]};return Object.assign(k,m),k};class q{constructor(){this.rootNode=U(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(k){this.top.children.push(k)}openNode(k){const I=U({scope:k});this.add(I),this.stack.push(I)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(k){return this.constructor._walk(k,this.rootNode)}static _walk(k,I){return typeof I=="string"?k.addText(I):I.children&&(k.openNode(I),I.children.forEach(pe=>this._walk(k,pe)),k.closeNode(I)),k}static _collapse(k){typeof k!="string"&&k.children&&(k.children.every(I=>typeof I=="string")?k.children=[k.children.join("")]:k.children.forEach(I=>{q._collapse(I)}))}}class z extends q{constructor(k){super(),this.options=k}addText(k){k!==""&&this.add(k)}startScope(k){this.openNode(k)}endScope(){this.closeNode()}__addSublanguage(k,I){const pe=k.root;I&&(pe.scope=`language:${I}`),this.add(pe)}toHTML(){return new D(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function g(m){return m?typeof m=="string"?m:m.source:null}function x(m){return X("(?=",m,")")}function Y(m){return X("(?:",m,")*")}function H(m){return X("(?:",m,")?")}function X(...m){return m.map(I=>g(I)).join("")}function $(m){const k=m[m.length-1];return typeof k=="object"&&k.constructor===Object?(m.splice(m.length-1,1),k):{}}function ve(...m){return"("+($(m).capture?"":"?:")+m.map(pe=>g(pe)).join("|")+")"}function de(m){return new RegExp(m.toString()+"|").exec("").length-1}function fe(m,k){const I=m&&m.exec(k);return I&&I.index===0}const xe=new RegExp(ve(/\[(?:[^\\\]]|\\.)*\]/,/\(\?<(?![=!])[^>]+>/,/\(\?'[^']+'/,/\(\??/,/\\([1-9][0-9]*)/,/\\./));function Ge(m,{joinWith:k}){let I=0;return m.map(pe=>{I+=1;const tn=I;let Le=g(pe),P="";for(;Le.length>0;){const K=xe.exec(Le);if(!K){P+=Le;break}P+=Le.substring(0,K.index),Le=Le.substring(K.index+K[0].length),K[0][0]==="\\"&&K[1]?P+="\\"+String(Number(K[1])+tn):(P+=K[0],(K[0]==="("||/^\(\?[<']/.test(K[0]))&&I++)}return P}).map(pe=>`(${pe})`).join(k)}const Be=/\b\B/,le="[a-zA-Z]\\w*",me="[a-zA-Z_]\\w*",Oe="\\b\\d+(\\.\\d+)?",_e="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Ze="\\b(0b[01]+)",un="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Kn=(m={})=>{const k=/^#![ ]*\//;return m.binary&&(m.begin=X(k,/.*\b/,m.binary,/\b.*/)),c({scope:"meta",begin:k,end:/$/,relevance:0,"on:begin":(I,pe)=>{I.index!==0&&pe.ignoreMatch()}},m)},On={begin:"\\\\[\\s\\S]",relevance:0},on={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[On]},G={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[On]},se={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},J=function(m,k,I={}){const pe=c({scope:"comment",begin:m,end:k,contains:[]},I);pe.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const tn=ve("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return pe.contains.push({begin:X(/[ ]+/,"(",tn,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),pe},Me=J("//","$"),Se=J("/\\*","\\*/"),sn=J("#","$"),pn={scope:"number",begin:Oe,relevance:0},ut={scope:"number",begin:_e,relevance:0},b={scope:"number",begin:Ze,relevance:0},j={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[On,{begin:/\[/,end:/\]/,relevance:0,contains:[On]}]},ie={scope:"title",begin:le,relevance:0},F={scope:"title",begin:me,relevance:0},ue={begin:"\\.\\s*"+me,relevance:0};var Ne=Object.freeze({__proto__:null,APOS_STRING_MODE:on,BACKSLASH_ESCAPE:On,BINARY_NUMBER_MODE:b,BINARY_NUMBER_RE:Ze,COMMENT:J,C_BLOCK_COMMENT_MODE:Se,C_LINE_COMMENT_MODE:Me,C_NUMBER_MODE:ut,C_NUMBER_RE:_e,END_SAME_AS_BEGIN:function(m){return Object.assign(m,{"on:begin":(k,I)=>{I.data._beginMatch=k[1]},"on:end":(k,I)=>{I.data._beginMatch!==k[1]&&I.ignoreMatch()}})},HASH_COMMENT_MODE:sn,IDENT_RE:le,MATCH_NOTHING_RE:Be,METHOD_GUARD:ue,NUMBER_MODE:pn,NUMBER_RE:Oe,PHRASAL_WORDS_MODE:se,QUOTE_STRING_MODE:G,REGEXP_MODE:j,RE_STARTERS_RE:un,SHEBANG:Kn,TITLE_MODE:ie,UNDERSCORE_IDENT_RE:me,UNDERSCORE_TITLE_MODE:F});function ee(m,k){m.input[m.index-1]==="."&&k.ignoreMatch()}function oe(m,k){m.className!==void 0&&(m.scope=m.className,delete m.className)}function Wn(m,k){k&&m.beginKeywords&&(m.begin="\\b("+m.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",m.__beforeBegin=ee,m.keywords=m.keywords||m.beginKeywords,delete m.beginKeywords,m.relevance===void 0&&(m.relevance=0))}function $a(m,k){Array.isArray(m.illegal)&&(m.illegal=ve(...m.illegal))}function ya(m,k){if(m.match){if(m.begin||m.end)throw new Error("begin & end are not supported with match");m.begin=m.match,delete m.match}}function bt(m,k){m.relevance===void 0&&(m.relevance=1)}const Nn=(m,k)=>{if(!m.beforeMatch)return;if(m.starts)throw new Error("beforeMatch cannot be used with starts");const I=Object.assign({},m);Object.keys(m).forEach(pe=>{delete m[pe]}),m.keywords=I.keywords,m.begin=X(I.beforeMatch,x(I.begin)),m.starts={relevance:0,contains:[Object.assign(I,{endsParent:!0})]},m.relevance=0,delete I.beforeMatch},$e=["of","and","for","in","not","or","if","then","parent","list","value"],vt="keyword";function _a(m,k,I=vt){const pe=Object.create(null);return typeof m=="string"?tn(I,m.split(" ")):Array.isArray(m)?tn(I,m):Object.keys(m).forEach(function(Le){Object.assign(pe,_a(m[Le],k,Le))}),pe;function tn(Le,P){k&&(P=P.map(K=>K.toLowerCase())),P.forEach(function(K){const he=K.split("|");pe[he[0]]=[Le,Ut(he[0],he[1])]})}}function Ut(m,k){return k?Number(k):xi(m)?0:1}function xi(m){return $e.includes(m.toLowerCase())}const ei={},$n=m=>{console.error(m)},Oi=(m,...k)=>{console.log(`WARN: ${m}`,...k)},Mt=(m,k)=>{ei[`${m}/${k}`]||(console.log(`Deprecated as of ${m}. ${k}`),ei[`${m}/${k}`]=!0)},Sa=new Error;function Sl(m,k,{key:I}){let pe=0;const tn=m[I],Le={},P={};for(let K=1;K<=k.length;K++)P[K+pe]=tn[K],Le[K+pe]=!0,pe+=de(k[K-1]);m[I]=P,m[I]._emit=Le,m[I]._multi=!0}function qt(m){if(Array.isArray(m.begin)){if(m.skip||m.excludeBegin||m.returnBegin)throw $n("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Sa;if(typeof m.beginScope!="object"||m.beginScope===null)throw $n("beginScope must be object"),Sa;Sl(m,m.begin,{key:"beginScope"}),m.begin=Ge(m.begin,{joinWith:""})}}function Tl(m){if(Array.isArray(m.end)){if(m.skip||m.excludeEnd||m.returnEnd)throw $n("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Sa;if(typeof m.endScope!="object"||m.endScope===null)throw $n("endScope must be object"),Sa;Sl(m,m.end,{key:"endScope"}),m.end=Ge(m.end,{joinWith:""})}}function El(m){m.scope&&typeof m.scope=="object"&&m.scope!==null&&(m.beginScope=m.scope,delete m.scope)}function hu(m){El(m),typeof m.beginScope=="string"&&(m.beginScope={_wrap:m.beginScope}),typeof m.endScope=="string"&&(m.endScope={_wrap:m.endScope}),qt(m),Tl(m)}function Nr(m){function k(P,K){return new RegExp(g(P),"m"+(m.case_insensitive?"i":"")+(m.unicodeRegex?"u":"")+(K?"g":""))}class I{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(K,he){he.position=this.position++,this.matchIndexes[this.matchAt]=he,this.regexes.push([he,K]),this.matchAt+=de(K)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const K=this.regexes.map(he=>he[1]);this.matcherRe=k(Ge(K,{joinWith:"|"}),!0),this.lastIndex=0}exec(K){this.matcherRe.lastIndex=this.lastIndex;const he=this.matcherRe.exec(K);if(!he)return null;const yn=he.findIndex((Ht,Ta)=>Ta>0&&Ht!==void 0),dn=this.matchIndexes[yn];return he.splice(0,yn),Object.assign(he,dn)}}class pe{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(K){if(this.multiRegexes[K])return this.multiRegexes[K];const he=new I;return this.rules.slice(K).forEach(([yn,dn])=>he.addRule(yn,dn)),he.compile(),this.multiRegexes[K]=he,he}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(K,he){this.rules.push([K,he]),he.type==="begin"&&this.count++}exec(K){const he=this.getMatcher(this.regexIndex);he.lastIndex=this.lastIndex;let yn=he.exec(K);if(this.resumingScanAtSamePosition()&&!(yn&&yn.index===this.lastIndex)){const dn=this.getMatcher(0);dn.lastIndex=this.lastIndex+1,yn=dn.exec(K)}return yn&&(this.regexIndex+=yn.position+1,this.regexIndex===this.count&&this.considerAll()),yn}}function tn(P){const K=new pe;return P.contains.forEach(he=>K.addRule(he.begin,{rule:he,type:"begin"})),P.terminatorEnd&&K.addRule(P.terminatorEnd,{type:"end"}),P.illegal&&K.addRule(P.illegal,{type:"illegal"}),K}function Le(P,K){const he=P;if(P.isCompiled)return he;[oe,ya,hu,Nn].forEach(dn=>dn(P,K)),m.compilerExtensions.forEach(dn=>dn(P,K)),P.__beforeBegin=null,[Wn,$a,bt].forEach(dn=>dn(P,K)),P.isCompiled=!0;let yn=null;return typeof P.keywords=="object"&&P.keywords.$pattern&&(P.keywords=Object.assign({},P.keywords),yn=P.keywords.$pattern,delete P.keywords.$pattern),yn=yn||/\w+/,P.keywords&&(P.keywords=_a(P.keywords,m.case_insensitive)),he.keywordPatternRe=k(yn,!0),K&&(P.begin||(P.begin=/\B|\b/),he.beginRe=k(he.begin),!P.end&&!P.endsWithParent&&(P.end=/\B|\b/),P.end&&(he.endRe=k(he.end)),he.terminatorEnd=g(he.end)||"",P.endsWithParent&&K.terminatorEnd&&(he.terminatorEnd+=(P.end?"|":"")+K.terminatorEnd)),P.illegal&&(he.illegalRe=k(P.illegal)),P.contains||(P.contains=[]),P.contains=[].concat(...P.contains.map(function(dn){return wl(dn==="self"?P:dn)})),P.contains.forEach(function(dn){Le(dn,he)}),P.starts&&Le(P.starts,K),he.matcher=tn(he),he}if(m.compilerExtensions||(m.compilerExtensions=[]),m.contains&&m.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return m.classNameAliases=c(m.classNameAliases||{}),Le(m)}function Ni(m){return m?m.endsWithParent||Ni(m.starts):!1}function wl(m){return m.variants&&!m.cachedVariants&&(m.cachedVariants=m.variants.map(function(k){return c(m,{variants:null},k)})),m.cachedVariants?m.cachedVariants:Ni(m)?c(m,{starts:m.starts?c(m.starts):null}):Object.isFrozen(m)?c(m):m}var xl="11.12.0";class mu extends Error{constructor(k,I){super(k),this.name="HTMLInjectionError",this.html=I}}const Ol=f,Vn=c,Ar=Symbol("nomatch"),Mr=7,Nl=function(m){const k=Object.create(null),I=Object.create(null),pe=[];let tn=!0;const Le="Could not find the language '{}', did you forget to load/include a language module?",P={disableAutodetect:!0,name:"Plain text",contains:[]};let K={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:z};function he(B){return K.noHighlightRe.test(B)}function yn(B){let te=B.className+" ";te+=B.parentNode?B.parentNode.className:"";const Ce=K.languageDetectRe.exec(te);if(Ce){const en=Rt(Ce[1]);return en||(Oi(Le.replace("{}",Ce[1])),Oi("Falling back to no-highlight mode for this block.",B)),en?Ce[1]:"no-highlight"}return te.split(/\s+/).find(en=>he(en)||Rt(en))}function dn(B,te,Ce){let en="",gn="";typeof te=="object"?(en=B,Ce=te.ignoreIllegals,gn=te.language):(Mt("10.7.0","highlight(lang, code, ...args) has been deprecated."),Mt("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),gn=B,en=te),Ce===void 0&&(Ce=!0);const nt={code:en,language:gn};et("before:highlight",nt);const tt=nt.result?nt.result:Ht(nt.language,nt.code,Ce);return tt.code=nt.code,et("after:highlight",tt),tt}function Ht(B,te,Ce,en){const gn=Object.create(null);function nt(Q,ae){return Q.keywords[ae]}function tt(){if(!ye.keywords){Sn.addText(Ke);return}let Q=0;ye.keywordPatternRe.lastIndex=0;let ae=ye.keywordPatternRe.exec(Ke),Te="";for(;ae;){Te+=Ke.substring(Q,ae.index);const Ve=_t.case_insensitive?ae[0].toLowerCase():ae[0],Je=nt(ye,Ve);if(Je){const[ot,Ur]=Je;if(Sn.addText(Te),Te="",gn[Ve]=(gn[Ve]||0)+1,gn[Ve]<=Mr&&(ia+=Ur),ot.startsWith("_"))Te+=ae[0];else{const Rl=_t.classNameAliases[ot]||ot;Rn(ae[0],Rl)}}else Te+=ae[0];Q=ye.keywordPatternRe.lastIndex,ae=ye.keywordPatternRe.exec(Ke)}Te+=Ke.substring(Q),Sn.addText(Te)}function ea(){if(Ke==="")return;let Q=null;if(typeof ye.subLanguage=="string"){if(!k[ye.subLanguage]){Sn.addText(Ke);return}Q=Ht(ye.subLanguage,Ke,!0,Ue[ye.subLanguage]),Ue[ye.subLanguage]=Q._top}else Q=Ea(Ke,ye.subLanguage.length?ye.subLanguage:null);ye.relevance>0&&(ia+=Q.relevance),Sn.__addSublanguage(Q._emitter,Q.language)}function Cn(){ye.subLanguage!=null?ea():tt(),Ke=""}function Rn(Q,ae){Q!==""&&(Sn.startScope(ae),Sn.addText(Q),Sn.endScope())}function na(Q,ae){let Te=1;const Ve=ae.length-1;for(;Te<=Ve;){if(!Q._emit[Te]){Te++;continue}const Je=_t.classNameAliases[Q[Te]]||Q[Te],ot=ae[Te];Je?Rn(ot,Je):(Ke=ot,tt(),Ke=""),Te++}}function Oa(Q,ae){return Q.scope&&typeof Q.scope=="string"&&Sn.openNode(_t.classNameAliases[Q.scope]||Q.scope),Q.beginScope&&(Q.beginScope._wrap?(Rn(Ke,_t.classNameAliases[Q.beginScope._wrap]||Q.beginScope._wrap),Ke=""):Q.beginScope._multi&&(na(Q.beginScope,ae),Ke="")),ye=Object.create(Q,{parent:{value:ye}}),ye}function ta(Q,ae,Te){let Ve=fe(Q.endRe,Te);if(Ve){if(Q["on:end"]){const Je=new h(Q);Q["on:end"](ae,Je),Je.isMatchIgnored&&(Ve=!1)}if(Ve){for(;Q.endsParent&&Q.parent;)Q=Q.parent;return Q}}if(Q.endsWithParent)return ta(Q.parent,ae,Te)}function _n(Q){return ye.matcher.regexIndex===0?(Ke+=Q[0],1):(Ci=!0,0)}function jr(Q){const ae=Q[0],Te=Q.rule,Ve=new h(Te),Je=[Te.__beforeBegin,Te["on:begin"]];for(const ot of Je)if(ot&&(ot(Q,Ve),Ve.isMatchIgnored))return _n(ae);return Te.skip?Ke+=ae:(Te.excludeBegin&&(Ke+=ae),Cn(),!Te.returnBegin&&!Te.excludeBegin&&(Ke=ae)),Oa(Te,Q),Te.returnBegin?0:ae.length}function zr(Q){const ae=Q[0],Te=te.substring(Q.index),Ve=ta(ye,Q,Te);if(!Ve)return Ar;const Je=ye;ye.endScope&&ye.endScope._wrap?(Cn(),Rn(ae,ye.endScope._wrap)):ye.endScope&&ye.endScope._multi?(Cn(),na(ye.endScope,Q)):Je.skip?Ke+=ae:(Je.returnEnd||Je.excludeEnd||(Ke+=ae),Cn(),Je.excludeEnd&&(Ke=ae));do ye.scope&&Sn.closeNode(),!ye.skip&&!ye.subLanguage&&(ia+=ye.relevance),ye=ye.parent;while(ye!==Ve.parent);return Ve.starts&&Oa(Ve.starts,Q),Je.returnEnd?0:ae.length}function Br(){const Q=[];for(let ae=ye;ae!==_t;ae=ae.parent)ae.scope&&Q.unshift(ae.scope);Q.forEach(ae=>Sn.openNode(ae))}let yt={};function aa(Q,ae){const Te=ae&&ae[0];if(Ke+=Q,Te==null)return Cn(),0;if(yt.type==="begin"&&ae.type==="end"&&yt.index===ae.index&&Te===""){if(Ke+=te.slice(ae.index,ae.index+1),!tn){const Ve=new Error(`0 width match regex (${B})`);throw Ve.languageName=B,Ve.badRule=yt.rule,Ve}return 1}if(yt=ae,ae.type==="begin")return jr(ae);if(ae.type==="illegal"&&!Ce){const Ve=new Error('Illegal lexeme "'+Te+'" for mode "'+(ye.scope||"<unnamed>")+'"');throw Ve.mode=ye,Ve}else if(ae.type==="end"){const Ve=zr(ae);if(Ve!==Ar)return Ve}if(ae.type==="illegal"&&Te==="")return ae.index===te.length||(Ke+=`
`),1;if(Bn>1e5&&Bn>ae.index*3)throw new Error("potential infinite loop, way more iterations than matches");return Ke+=Te,Te.length}const _t=Rt(B);if(!_t)throw $n(Le.replace("{}",B)),new Error('Unknown language: "'+B+'"');const Lr=Nr(_t);let Mi="",ye=en||Lr;const Ue={},Sn=new K.__emitter(K);Br();let Ke="",ia=0,zn=0,Bn=0,Ci=!1;try{if(_t.__emitTokens)_t.__emitTokens(te,Sn);else{for(ye.matcher.considerAll();;){Bn++,Ci?Ci=!1:ye.matcher.considerAll(),ye.matcher.lastIndex=zn;const Q=ye.matcher.exec(te);if(!Q)break;const ae=te.substring(zn,Q.index),Te=aa(ae,Q);zn=Q.index+Te}aa(te.substring(zn))}return Sn.finalize(),Mi=Sn.toHTML(),{language:B,value:Mi,relevance:ia,illegal:!1,_emitter:Sn,_top:ye}}catch(Q){if(Q.message&&Q.message.includes("Illegal"))return{language:B,value:Ol(te),illegal:!0,relevance:0,_illegalBy:{message:Q.message,index:zn,context:te.slice(zn-100,zn+100),mode:Q.mode,resultSoFar:Mi},_emitter:Sn};if(tn)return{language:B,value:Ol(te),illegal:!1,relevance:0,errorRaised:Q,_emitter:Sn,_top:ye};throw Q}}function Ta(B){const te={value:Ol(B),illegal:!1,relevance:0,_top:P,_emitter:new K.__emitter(K)};return te._emitter.addText(B),te}function Ea(B,te){te=te||K.languages||Object.keys(k);const Ce=Ta(B),en=te.filter(Rt).filter(Ai).map(Cn=>Ht(Cn,B,!1));en.unshift(Ce);const gn=en.sort((Cn,Rn)=>{if(Cn.relevance!==Rn.relevance)return Rn.relevance-Cn.relevance;if(Cn.language&&Rn.language){if(Rt(Cn.language).supersetOf===Rn.language)return 1;if(Rt(Rn.language).supersetOf===Cn.language)return-1}return 0}),[nt,tt]=gn,ea=nt;return ea.secondBest=tt,ea}function $t(B,te,Ce){const en=te&&I[te]||Ce;B.classList.add("hljs"),B.classList.add(`language-${en}`)}function wa(B){let te=null;const Ce=yn(B);if(he(Ce))return;if(et("before:highlightElement",{el:B,language:Ce}),B.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",B);return}if(B.children.length>0&&(K.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(B)),K.throwUnescapedHTML))throw new mu("One of your code blocks includes unescaped HTML.",B.innerHTML);te=B;const en=te.textContent,gn=Ce?dn(en,{language:Ce,ignoreIllegals:!0}):Ea(en);B.innerHTML=gn.value,B.dataset.highlighted="yes",$t(B,Ce,gn.language),B.result={language:gn.language,re:gn.relevance,relevance:gn.relevance},gn.secondBest&&(B.secondBest={language:gn.secondBest.language,relevance:gn.secondBest.relevance}),et("after:highlightElement",{el:B,result:gn,text:en})}function ni(B){K=Vn(K,B)}const Cr=()=>{xa(),Mt("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function pu(){xa(),Mt("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Al=!1;function xa(){function B(){xa()}if(document.readyState==="loading"){Al||window.addEventListener("DOMContentLoaded",B,!1),Al=!0;return}document.querySelectorAll(K.cssSelector).forEach(wa)}function ti(B,te){let Ce=null;try{Ce=te(m)}catch(en){if($n("Language definition for '{}' could not be registered.".replace("{}",B)),tn)$n(en);else throw en;Ce=P}Ce.name||(Ce.name=B),k[B]=Ce,Ce.rawDefinition=te.bind(null,m),Ce.aliases&&Ml(Ce.aliases,{languageName:B})}function gu(B){delete k[B];for(const te of Object.keys(I))I[te]===B&&delete I[te]}function Rr(){return Object.keys(k)}function Rt(B){return B=(B||"").toLowerCase(),k[B]||k[I[B]]}function Ml(B,{languageName:te}){typeof B=="string"&&(B=[B]),B.forEach(Ce=>{I[Ce.toLowerCase()]=te})}function Ai(B){const te=Rt(B);return te&&!te.disableAutodetect}function Cl(B){B["before:highlightBlock"]&&!B["before:highlightElement"]&&(B["before:highlightElement"]=te=>{B["before:highlightBlock"](Object.assign({block:te.el},te))}),B["after:highlightBlock"]&&!B["after:highlightElement"]&&(B["after:highlightElement"]=te=>{B["after:highlightBlock"](Object.assign({block:te.el},te))})}function kr(B){Cl(B),pe.push(B)}function Dr(B){const te=pe.indexOf(B);te!==-1&&pe.splice(te,1)}function et(B,te){const Ce=B;pe.forEach(function(en){en[Ce]&&en[Ce](te)})}function An(B){return Mt("10.7.0","highlightBlock will be removed entirely in v12.0"),Mt("10.7.0","Please use highlightElement now."),wa(B)}Object.assign(m,{highlight:dn,highlightAuto:Ea,highlightAll:xa,highlightElement:wa,highlightBlock:An,configure:ni,initHighlighting:Cr,initHighlightingOnLoad:pu,registerLanguage:ti,unregisterLanguage:gu,listLanguages:Rr,getLanguage:Rt,registerAliases:Ml,autoDetection:Ai,inherit:Vn,addPlugin:kr,removePlugin:Dr}),m.debugMode=function(){tn=!1},m.safeMode=function(){tn=!0},m.versionString=xl,m.regex={concat:X,lookahead:x,either:ve,optional:H,anyNumberOfTimes:Y};for(const B in Ne)typeof Ne[B]=="object"&&s(Ne[B]);return Object.assign(m,Ne),m},Ct=Nl({});return Ct.newInstance=()=>Nl({}),ef=Ct,Ct.HighlightJS=Ct,Ct.default=Ct,ef}var J3=Z3();const Or=_l(J3),Up="[A-Za-z$_][0-9A-Za-z$_]*",F3=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],P3=["true","false","null","undefined","NaN","Infinity"],eg=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],ng=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],tg=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],W3=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","self","global"],$3=[].concat(tg,eg,ng);function eT(s){const h=s.regex,f=(J,{after:Me})=>{const Se="</"+J[0].slice(1);return J.input.indexOf(Se,Me)!==-1},c=Up,S={begin:"<>",end:"</>"},R=/<[A-Za-z0-9\\._:-]+\s*\/>/,M={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(J,Me)=>{const Se=J[0].length+J.index,sn=J.input[Se];if(sn==="<"||sn===","){Me.ignoreMatch();return}sn===">"&&(f(J,{after:Se})||Me.ignoreMatch());let pn;const ut=J.input.substring(Se);if(pn=ut.match(/^\s*=/)){Me.ignoreMatch();return}if((pn=ut.match(/^\s+extends\s+/))&&pn.index===0){Me.ignoreMatch();return}}},D={$pattern:Up,keyword:F3,literal:P3,built_in:$3,"variable.language":W3},U="[0-9](_?[0-9])*",q=`\\.(${U})`,z="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",g={className:"number",variants:[{begin:`(\\b(${z})((${q})|\\.)?|(${q}))[eE][+-]?(${U})\\b`},{begin:`\\b(${z})\\b((${q})\\b|\\.)?|(${q})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},x={className:"subst",begin:"\\$\\{",end:"\\}",keywords:D,contains:[]},Y={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[s.BACKSLASH_ESCAPE,x],subLanguage:"xml"}},H={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[s.BACKSLASH_ESCAPE,x],subLanguage:"css"}},X={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[s.BACKSLASH_ESCAPE,x],subLanguage:"graphql"}},$={className:"string",begin:"`",end:"`",contains:[s.BACKSLASH_ESCAPE,x]},de={className:"comment",variants:[s.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:c+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),s.C_BLOCK_COMMENT_MODE,s.C_LINE_COMMENT_MODE]},fe=[s.APOS_STRING_MODE,s.QUOTE_STRING_MODE,Y,H,X,$,{match:/\$\d+/},g];x.contains=fe.concat({begin:/\{/,end:/\}/,keywords:D,contains:["self"].concat(fe)});const xe=[].concat(de,x.contains),Ge=xe.concat([{begin:/(\s*)\(/,end:/\)/,keywords:D,contains:["self"].concat(xe)}]),Be={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:D,contains:Ge},le={variants:[{match:[/class/,/\s+/,c,/\s+/,/extends/,/\s+/,h.concat(c,"(",h.concat(/\./,c),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,c],scope:{1:"keyword",3:"title.class"}}]},me={relevance:0,match:h.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...eg,...ng]}},Oe={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},_e={variants:[{match:[/function/,/\s+/,c,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[Be],illegal:/%/},Ze={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function un(J){return h.concat("(?!",J.join("|"),")")}const Kn={match:h.concat(/\b/,un([...tg,"super","import","await"].map(J=>`${J}\\s*\\(`)),c,h.lookahead(/\s*\(/)),className:"title.function",relevance:0},On={begin:h.concat(/\./,h.lookahead(h.concat(c,/(?![0-9A-Za-z$_(])/))),end:c,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},on={match:[/get|set/,/\s+/,c,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},Be]},G="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+s.UNDERSCORE_IDENT_RE+")\\s*=>",se={match:[/const|var|let/,/\s+/,c,/\s*/,/=\s*/,/(async\s*)?/,h.lookahead(G)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[Be]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:D,exports:{PARAMS_CONTAINS:Ge,CLASS_REFERENCE:me},illegal:/#(?![$_A-Za-z])/,contains:[s.SHEBANG({label:"shebang",binary:"node",relevance:5}),Oe,s.APOS_STRING_MODE,s.QUOTE_STRING_MODE,Y,H,X,$,de,{match:/\$\d+/},g,me,{scope:"attr",match:c+h.lookahead(":"),relevance:0},se,{begin:"("+s.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[de,s.REGEXP_MODE,{className:"function",begin:G,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:s.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:D,contains:Ge}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:S.begin,end:S.end},{match:R},{begin:M.begin,"on:begin":M.isTrulyOpeningTag,end:M.end}],subLanguage:"xml",contains:[{begin:M.begin,end:M.end,skip:!0,contains:["self"]}]}]},_e,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+s.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[Be,s.inherit(s.TITLE_MODE,{begin:c,className:"title.function"})]},{match:/\.\.\./,relevance:0},On,{match:"\\$"+c,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[Be]},Kn,Ze,le,on,{match:/\$[(.]/}]}}var bl="[0-9](_*[0-9])*",su=`\\.(${bl})`,uu="[0-9a-fA-F](_*[0-9a-fA-F])*",qp={className:"number",variants:[{begin:`(\\b(${bl})((${su})|\\.)?|(${su}))[eE][+-]?(${bl})[fFdD]?\\b`},{begin:`\\b(${bl})((${su})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${su})[fFdD]?\\b`},{begin:`\\b(${bl})[fFdD]\\b`},{begin:`\\b0[xX]((${uu})\\.?|(${uu})?\\.(${uu}))[pP][+-]?(${bl})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${uu})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};function ag(s,h,f){return f===-1?"":s.replace(h,c=>ag(s,h,f-1))}function nT(s){const h=s.regex,f="[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",c="(?:(?:\\s*\\[\\s*])+)?",S=f+"<@@@>"+c,M="(?:"+("\\?(?:\\s+(?:extends|super)\\s+"+S+")?")+"|"+S+")",D=ag("(?:\\s*<\\s*"+M+"(?:\\s*,\\s*"+M+")*\\s*>)?",/<@@@>/g,2),x={keyword:["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do","sealed","yield","permits","goto","when"],literal:["false","true","null"],type:["char","boolean","long","float","int","byte","short","double"],built_in:["super","this"]},Y={className:"meta",begin:"@"+f,contains:[{begin:/\(/,end:/\)/,contains:["self"]}]},H={className:"params",begin:/\(/,end:/\)/,keywords:x,relevance:0,contains:[s.C_BLOCK_COMMENT_MODE],endsParent:!0};return{name:"Java",aliases:["jsp"],keywords:x,illegal:/<\/|#/,contains:[s.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{begin:/import java\.[a-z]+\./,keywords:"import",relevance:2},s.C_LINE_COMMENT_MODE,s.C_BLOCK_COMMENT_MODE,{begin:/"""/,end:/"""/,className:"string",contains:[s.BACKSLASH_ESCAPE]},s.APOS_STRING_MODE,s.QUOTE_STRING_MODE,{match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,f],className:{1:"keyword",3:"title.class"}},{match:/non-sealed/,scope:"keyword"},{beginKeywords:"new throw return else yield assert",relevance:0},{begin:[f,h.concat(D,c,/\s+/),f,c,/\s*/,/=(?!=)/],className:{1:"type",3:"variable",6:"operator"}},{begin:[/record/,/\s+/,f],className:{1:"keyword",3:"title.class"},contains:[H,s.C_LINE_COMMENT_MODE,s.C_BLOCK_COMMENT_MODE]},{begin:[f,h.concat(D,c,/\s+/),f,/\s*(?=\()/],className:{1:"type",3:"title.function"},keywords:x,contains:[{className:"params",begin:/\(/,end:/\)/,keywords:x,relevance:0,contains:[Y,s.APOS_STRING_MODE,s.QUOTE_STRING_MODE,qp,s.C_BLOCK_COMMENT_MODE]},s.C_LINE_COMMENT_MODE,s.C_BLOCK_COMMENT_MODE]},qp,Y]}}function tT(s){const h=s.regex,f=s.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),c="decltype\\(auto\\)",S="[a-zA-Z_]\\w*::",M="(?!struct)("+c+"|"+h.optional(S)+"[a-zA-Z_]\\w*"+h.optional("<[^<>]+>")+")",D={className:"type",begin:"\\b[a-z\\d_]*_t\\b"},q={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[s.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'("+"\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)"+"|.)",end:"'",illegal:"."},s.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\\s"]{0,16})\(/,end:/\)([^()\\\s"]{0,16})"/})]},z={className:"number",variants:[{begin:"[+-]?(?:(?:\\b[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|\\b[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|\\b0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)"},{begin:"[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)"}],relevance:0},g={scope:"meta",begin:/#\s*include\b/,end:/$/,keywords:{keyword:"include"},contains:[{begin:/\\\n/},q,{scope:"string",begin:/<.*?>/},f,s.C_BLOCK_COMMENT_MODE]},x={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},s.inherit(q,{className:"string"}),f,s.C_BLOCK_COMMENT_MODE]},Y=[g,x],H={className:"title",begin:h.optional(S)+s.IDENT_RE,relevance:0},X=h.optional(S)+s.IDENT_RE+"\\s*\\(",$=12,ve=["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],de=["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],fe=["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","flat_map","flat_set","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"],xe=["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"],le={type:de,keyword:ve,literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],_type_hints:fe},me={className:"function.dispatch",relevance:0,keywords:{_hint:xe},begin:h.concat(/\b/,`(?!${ve.join("|")})`,s.IDENT_RE,h.lookahead(/(<[^<>]+>|)\s*\(/))},Oe=[me,...Y,D,f,s.C_BLOCK_COMMENT_MODE,z,q],_e={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:le,contains:Oe.concat([{begin:/\(/,end:/\)/,keywords:le,contains:Oe.concat(["self"]),relevance:0}]),relevance:0},Ze={className:"function",begin:"("+M+"[\\*&\\s]+){1,"+$+"}"+X,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:le,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:c,keywords:le,relevance:0},{begin:X,returnBegin:!0,contains:[H],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[q,z]},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:le,relevance:0,contains:[f,s.C_BLOCK_COMMENT_MODE,q,z,D,{begin:/\(/,end:/\)/,keywords:le,relevance:0,contains:["self",f,s.C_BLOCK_COMMENT_MODE,q,z,D]}]},D,f,s.C_BLOCK_COMMENT_MODE,...Y]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:le,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat(_e,Ze,me,Oe,[...Y,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function|flat_map|flat_set)\\s*<(?!<)",end:">",keywords:le,contains:["self",D]},{begin:s.IDENT_RE+"::",keywords:le},{match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],className:{1:"keyword",3:"title.class"}}])}}function aT(s){const h=s.regex,f=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),c=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],S=/[-+*\/%=<>&|^~]|\*\*?|\/\/?|<<=?|>>=?|\+=|-=|\*=|\/=|%=|@|<|>/,R=["bool","complex","dict","float","frozenset","int","list","set","str","tuple"],M=["add_vertex","add","append","backtrack","bit_length","clear","collect_words","connected","counting_sort","defaultdict","deque","dfs","dp","extend","find_max_index","find","heapify","heappop","heappush","insert","insertion_sort","join","ListNode","merge_sort","pop","popleft","print_trie","quick_sort","RECURRENCE_RELATION","remove","shuffle","sort","TreeNode","TrieNode","union","UnionFind","update"],D=["BASE_CASE","BOOLEAN","CONDITION","CRITERIA","ITERATE_OVER_INPUT","MAXIMUM_POSSIBLE_ANSWER","MINIMUM_POSSIBLE_ANSWER","OTHER_ARGUMENTS","SMALLEST_SUBPROBLEM","START_NODE","STATE_FOR_WHOLE_INPUT","STATE","WINDOW_CONDITION_BROKEN"],U=["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip",...M],q=["__debug__","Ellipsis","False","None","NotImplemented","True",...D],z=["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union",...R],g={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:c,built_in:U,literal:q,type:z},x={className:"meta",begin:/^(>>>|\.\.\.) /},Y={className:"subst",begin:/\{/,end:/\}/,keywords:g,illegal:/#/},H={begin:/\{\{/,relevance:0},X={className:"string",contains:[s.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[s.BACKSLASH_ESCAPE,x],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[s.BACKSLASH_ESCAPE,x],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[s.BACKSLASH_ESCAPE,x,H,Y]},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[s.BACKSLASH_ESCAPE,x,H,Y]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[s.BACKSLASH_ESCAPE,H,Y]},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[s.BACKSLASH_ESCAPE,H,Y]},s.APOS_STRING_MODE,s.QUOTE_STRING_MODE]},$="[0-9](_?[0-9])*",ve=`(\\b(${$}))?\\.(${$})|\\b(${$})\\.`,de=`\\b|${c.join("|")}`,fe={className:"number",relevance:0,variants:[{begin:`(\\b(${$})|(${ve}))[eE][+-]?(${$})[jJ]?(?=${de})`},{begin:`(${ve})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${de})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${de})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${de})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${de})`},{begin:`\\b(${$})[jJ](?=${de})`}]},xe={className:"comment",begin:h.lookahead(/# type:/),end:/$/,keywords:g,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},Ge={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:g,contains:["self",x,fe,X,s.HASH_COMMENT_MODE,{scope:"params.operator",match:S},{scope:"params.comma",match:","},{scope:"params.self",match:/self/}]}]};return Y.contains=[X,fe,x],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:g,illegal:/(<\/|\?)|=>/,contains:[x,fe,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},X,xe,s.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,f],scope:{1:"keyword.def",3:"title.function"},contains:[Ge]},{variants:[{match:[/\bclass/,/\s+/,f,/\s*/,/\(\s*/,f,/\s*\)/]},{match:[/\bclass/,/\s+/,f]}],scope:{1:"keyword.class",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[fe,Ge,X]},{scope:"operator",match:S}]}}Or.registerLanguage("python",aT);Or.registerLanguage("javascript",eT);Or.registerLanguage("java",nT);Or.registerLanguage("cpp",tT);function iT({code:s,language:h}){const f=L.useRef(null),[c,S]=L.useState(""),[R,M]=L.useState(""),D=Ye("hljs",h,Bp.code),U=()=>{if(f.current){const X=s.split(`
`).map(($,ve)=>{const de=Or.highlight($,{language:h}).value;return`<span class=${Bp.line} data-line-number=${ve+1}>${de}</span>`}).join("");M(X)}},q=()=>{f.current?.querySelectorAll("span[data-line-number]")?.forEach(X=>X.addEventListener("click",x))},z=()=>{f.current?.querySelectorAll("span[data-line-number]")?.forEach(X=>X.removeEventListener("click",x))},g=()=>{f.current?.querySelector(`span[data-line-number="${c}"]`)?.removeAttribute("focused")},x=Y=>{const H=Y.currentTarget,X=H.getAttribute("data-line-number")??"";g(),X===c?S(""):(H.setAttribute("focused",""),S(X))};return $p(f,g),L.useEffect(()=>(U(),q(),()=>z()),[s,R,c]),u.jsx("pre",{ref:f,children:u.jsx("code",{className:D,dangerouslySetInnerHTML:{__html:R}})})}const lT="_copyButton_1k9b5_1",rT="_copySvg_1k9b5_30",sT="_checkSvg_1k9b5_37",uT="_checkSvgPath_1k9b5_42",oT="_enter_1k9b5_53",cT="_exit_1k9b5_57",Ei={copyButton:lT,copySvg:rT,checkSvg:sT,checkSvgPath:uT,enter:oT,exit:cT};function fT({onClick:s}){const[h,f]=L.useState("show"),[c,S]=L.useState("hide"),R=Ye(Ei.copySvg,h==="enter"&&Ei.enter,h==="exit"&&Ei.exit),M=Ye(Ei.checkSvg,c==="exit"&&Ei.exit),D=Ye(Ei.checkSvgPath),U=()=>{h==="show"&&c==="hide"&&(f("exit"),s())},q=()=>{h==="enter"&&f("show"),h==="exit"&&(f("hide"),S("show"))},z=()=>{c==="show"&&setTimeout(()=>{S("exit")},500),c==="exit"&&(S("hide"),f("enter"))},g=()=>h!=="hide"&&u.jsx("svg",{className:R,viewBox:"0 0 512 512",onAnimationEnd:q,children:u.jsx("path",{d:"M64 464H288c8.8 0 16-7.2 16-16V384h48v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h64v48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM224 304H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16V288c0 8.8 7.2 16 16 16zm-64-16V64c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64z"})}),x=()=>c!=="hide"&&u.jsx("svg",{className:M,viewBox:"0 0 16 16",onAnimationEnd:z,children:u.jsx("path",{className:D,d:"M3.428571,9.14285714 L6.85714286,12.57142857 L12.5714286,3.42857143"})});return u.jsxs("button",{type:"button","aria-label":c==="hide"?"Copy code":"Copied",title:"Copy code",className:Ei.copyButton,onClick:U,children:[g(),x()]})}function dT(){return u.jsxs("svg",{viewBox:"0 0 128 128",children:[u.jsxs("linearGradient",{id:"python_svg__a",x1:70.252,x2:170.659,y1:1237.476,y2:1151.089,gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{offset:0,stopColor:"#5A9FD4"}),u.jsx("stop",{offset:1,stopColor:"#306998"})]}),u.jsxs("linearGradient",{id:"python_svg__b",x1:209.474,x2:173.62,y1:1098.811,y2:1149.537,gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{offset:0,stopColor:"#FFD43B"}),u.jsx("stop",{offset:1,stopColor:"#FFE873"})]}),u.jsx("path",{fill:"url(#python_svg__a)",d:"M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008M50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721",transform:"translate(0 10.26)"}),u.jsx("path",{fill:"url(#python_svg__b)",d:"M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692",transform:"translate(0 10.26)"}),u.jsxs("radialGradient",{id:"python_svg__c",cx:1825.678,cy:444.45,r:26.743,gradientTransform:"matrix(0 -.24 -1.055 0 532.979 557.576)",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{offset:0,stopColor:"#B8B8B8",stopOpacity:.498}),u.jsx("stop",{offset:1,stopColor:"#7F7F7F",stopOpacity:0})]}),u.jsx("path",{fill:"url(#python_svg__c)",d:"M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416s14.815-6.417 33.092-6.417c18.275 0 33.091 2.872 33.091 6.417",opacity:.444})]})}function hT(){return u.jsxs("svg",{viewBox:"0 0 128 128",children:[u.jsx("path",{fill:"#F0DB4F",d:"M1.408 1.408h125.184v125.185H1.408z"}),u.jsx("path",{fill:"#323330",d:"M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237"})]})}function mT(){return u.jsxs("svg",{id:"Layer_1",x:"0px",y:"0px",width:"306px",height:"344.35px",viewBox:"0 0 306 344.35",enableBackground:"new 0 0 306 344.35",children:[u.jsx("path",{fill:"#00599C",d:"M302.107,258.262c2.401-4.159,3.893-8.845,3.893-13.053V99.14c0-4.208-1.49-8.893-3.892-13.052L153,172.175L302.107,258.262z"}),u.jsx("path",{fill:"#004482",d:"M166.25,341.193l126.5-73.034c3.644-2.104,6.956-5.737,9.357-9.897L153,172.175L3.893,258.263c2.401,4.159,5.714,7.793,9.357,9.896l126.5,73.034C147.037,345.401,158.963,345.401,166.25,341.193z"}),u.jsx("path",{fill:"#659AD2",d:"M302.108,86.087c-2.402-4.16-5.715-7.793-9.358-9.897L166.25,3.156c-7.287-4.208-19.213-4.208-26.5,0L13.25,76.19C5.962,80.397,0,90.725,0,99.14v146.069c0,4.208,1.491,8.894,3.893,13.053L153,172.175L302.108,86.087z"}),u.jsx("g",{children:u.jsx("path",{fill:"#FFFFFF",d:"M153,274.175c-56.243,0-102-45.757-102-102s45.757-102,102-102c36.292,0,70.139,19.53,88.331,50.968l-44.143,25.544c-9.105-15.736-26.038-25.512-44.188-25.512c-28.122,0-51,22.878-51,51c0,28.121,22.878,51,51,51c18.152,0,35.085-9.776,44.191-25.515l44.143,25.543C223.142,254.644,189.294,274.175,153,274.175z"})}),u.jsx("g",{children:u.jsx("polygon",{fill:"#FFFFFF",points:"255,166.508 243.666,166.508 243.666,155.175 232.334,155.175 232.334,166.508 221,166.508221,177.841 232.334,177.841 232.334,189.175 243.666,189.175 243.666,177.841 255,177.841 	"})}),u.jsx("g",{children:u.jsx("polygon",{fill:"#FFFFFF",points:"297.5,166.508 286.166,166.508 286.166,155.175 274.834,155.175 274.834,166.508 263.5,166.508263.5,177.841 274.834,177.841 274.834,189.175 286.166,189.175 286.166,177.841 297.5,177.841 	"})})]})}function pT(){return u.jsxs("svg",{height:"800px",width:"800px",id:"Layer_1",viewBox:"0 0 511.998 511.998",children:[u.jsxs("g",{children:[u.jsx("path",{fill:"#DB380E",d:"M253.464,94.869c-23.658,16.639-50.471,35.498-64.838,66.699c-24.954,54.435,51.062,113.812,54.311,116.313c0.755,0.581,1.659,0.871,2.56,0.871c0.957,0,1.915-0.327,2.693-0.979c1.509-1.262,1.937-3.406,1.031-5.152c-0.275-0.53-27.561-53.53-26.547-91.552c0.359-13.243,18.892-28.266,38.512-44.171c17.97-14.568,38.34-31.079,50.258-50.394c26.164-42.516-2.916-84.322-3.213-84.74c-1.155-1.622-3.287-2.209-5.11-1.41c-1.821,0.804-2.83,2.773-2.414,4.72c0.059,0.277,5.714,27.923-10.022,56.406C284.203,73.25,269.959,83.268,253.464,94.869z"}),u.jsx("path",{fill:"#DB380E",d:"M353.137,113.617c1.669-1.257,2.159-3.55,1.15-5.38c-1.011-1.83-3.211-2.637-5.165-1.895c-4.019,1.528-98.416,37.915-98.416,81.88c0,30.307,12.946,46.317,22.399,58.009c3.708,4.586,6.909,8.546,7.964,11.927c2.97,9.743-4.066,27.353-7.025,33.317c-0.853,1.714-0.435,3.792,1.016,5.044c0.784,0.677,1.763,1.021,2.743,1.021c0.834,0,1.672-0.248,2.396-0.752c1.623-1.128,39.667-28.026,32.844-60.433c-2.542-12.318-8.595-21.318-13.936-29.26c-8.274-12.305-14.25-21.193-5.184-37.609C304.545,150.338,352.65,113.981,353.137,113.617z"})]}),u.jsxs("g",{children:[u.jsx("path",{fill:"#73A1FB",d:"M107.418,298.236c-1.618,4.845-0.854,9.651,2.207,13.903c10.233,14.207,46.48,22.029,102.068,22.029c0.003,0,0.005,0,0.007,0c7.532,0,15.484-0.148,23.629-0.44c88.875-3.181,121.839-30.869,123.199-32.046c1.482-1.283,1.878-3.419,0.957-5.147c-0.922-1.727-2.909-2.595-4.808-2.072c-31.301,8.546-89.748,11.58-130.288,11.58c-45.363,0-68.465-3.268-74.121-5.681c2.902-3.985,20.802-11.101,42.983-15.464c2.12-0.416,3.577-2.374,3.367-4.524s-2.016-3.79-4.177-3.79C179.439,276.584,114.234,277.628,107.418,298.236z"}),u.jsx("path",{fill:"#73A1FB",d:"M404.812,269.718c-18.331,0-35.714,9.188-36.446,9.577c-1.695,0.908-2.555,2.852-2.09,4.72c0.467,1.865,2.144,3.176,4.067,3.178c0.389,0,39.102,0.317,42.608,22.436c3.106,19.082-36.629,50-52.202,60.304c-1.682,1.113-2.335,3.263-1.554,5.123c0.665,1.583,2.206,2.573,3.868,2.573c0.29,0,0.584-0.03,0.876-0.092c3.696-0.791,90.406-19.899,81.238-70.384C439.584,276.213,420.138,269.718,404.812,269.718z"}),u.jsx("path",{fill:"#73A1FB",d:"M345.347,363.755c0.302-1.617-0.371-3.262-1.717-4.207l-20.791-14.563c-1.014-0.71-2.295-0.933-3.485-0.618c-0.217,0.055-21.959,5.771-53.525,9.276c-12.528,1.405-26.56,2.147-40.582,2.147c-31.558,0-52.192-3.708-55.197-6.428c-0.398-0.764-0.272-1.111-0.201-1.304c0.546-1.518,3.472-3.322,5.358-4.036c2.083-0.771,3.206-3.033,2.558-5.157c-0.646-2.127-2.837-3.378-4.999-2.859c-20.856,5.033-31.054,12.071-30.312,20.918c1.318,15.686,37.65,23.737,68.365,25.865c4.417,0.302,9.194,0.455,14.195,0.455c0.003,0,0.005,0,0.008,0c51.074,0,116.55-16.025,117.204-16.188C343.825,366.666,345.044,365.375,345.347,363.755z"}),u.jsx("path",{fill:"#73A1FB",d:"M188.602,397.419c1.575-1.024,2.273-2.971,1.714-4.764c-0.557-1.793-2.234-2.971-4.118-2.946c-2.795,0.074-27.349,1.182-29.068,16.815c-0.52,4.672,0.818,8.941,3.979,12.686c8.816,10.448,32.614,16.658,72.741,18.984c4.747,0.285,9.569,0.428,14.334,0.428c51.015,0,85.373-15.973,86.812-16.653c1.395-0.66,2.315-2.031,2.397-3.571s-0.687-3.001-2.003-3.806l-26.275-16.04c-0.912-0.556-2.003-0.74-3.043-0.527c-0.166,0.035-16.849,3.495-42.026,6.913c-4.764,0.648-10.73,0.977-17.73,0.977c-25.15,0-53.124-4.109-58.489-6.8C187.749,398.613,187.848,397.975,188.602,397.419z"}),u.jsx("path",{fill:"#73A1FB",d:"M224.408,486.85c116.854-0.099,179.571-20.88,191.653-33.957c4.277-4.626,4.739-9.006,4.376-11.867c-0.898-7.04-7.311-11.35-8.038-11.818c-1.754-1.128-4.108-0.833-5.476,0.745c-1.365,1.578-1.397,3.884-0.027,5.461c0.737,0.948,1.163,2.535-0.992,4.692c-4.83,4.511-53.545,18.204-134.656,22.318c-11.111,0.577-22.765,0.871-34.636,0.873c-72.623,0-125.772-9.948-132.749-15.744c2.689-3.864,21.489-10.037,41.482-13.529c2.253-0.393,3.775-2.516,3.426-4.776c-0.349-2.259-2.432-3.814-4.709-3.519c-0.564,0.077-2.478,0.191-4.694,0.327c-32.988,2.014-71.109,6.503-73.098,23.5c-0.604,5.179,0.935,9.881,4.576,13.973c8.909,10.01,34.516,23.319,153.558,23.319C224.406,486.85,224.406,486.85,224.408,486.85z"}),u.jsx("path",{fill:"#73A1FB",d:"M439.013,456.578c-1.652-0.764-3.604-0.378-4.836,0.952c-0.171,0.185-17.74,18.556-70.564,29.344c-20.223,4.052-58.183,6.107-112.826,6.107c-54.745,0-106.838-2.154-107.357-2.176c-2.176-0.106-4.037,1.476-4.333,3.618c-0.297,2.14,1.083,4.158,3.184,4.658c0.542,0.128,55.135,12.918,129.779,12.918c35.801,0,70.639-2.907,103.548-8.645c61.361-10.757,65.657-41.183,65.81-42.473C441.632,459.078,440.662,457.342,439.013,456.578z"})]})]})}const gT={python:dT,javascript:hT,java:pT,cpp:mT},bT={python:{short:"Py",full:"Python"},javascript:{short:"JS",full:"JavaScript"},java:{short:"Java",full:"Java"},cpp:{short:"C++",full:"C++"}};function lf({title:s,children:h}){const{selectedLanguage:f,setSelectedLanguage:c}=Ip(),S=L.Children.toArray(h),R=S.findIndex(x=>x.props.language===f),M=R===-1?0:R,D=S[M]?.props.code??"",U=S[M]?.props.language,q=x=>{c(S[x].props.language)},z=()=>navigator.clipboard.writeText(D),g=()=>S.map((x,Y)=>{const H=gT[x.props.language],{short:X,full:$}=bT[x.props.language];return u.jsxs("button",{type:"button",role:"tab","aria-label":`${$} code`,"aria-selected":Y===M,className:ru.tabButton,onClick:()=>q(Y),children:[u.jsx(H,{}),u.jsx("span",{children:X})]},Y)});return u.jsxs("div",{className:ru.container,children:[u.jsx("h3",{children:s}),u.jsxs("div",{className:ru.buttonContainer,children:[u.jsx("div",{role:"tablist",className:ru.tabButtonContainer,children:g()}),u.jsx(fT,{onClick:z})]}),u.jsx("div",{role:"tabpanel",className:"tabs-content",children:u.jsx(iT,{code:D,language:U})})]})}lf.Tab=s=>u.jsx(u.Fragment,{children:s});function vl({children:s}){return u.jsx("kbd",{className:N.kbd,"aria-hidden":"true",children:s})}function ff({mode:s,onMode:h}){return u.jsx("div",{className:N.seg,role:"group","aria-label":"View","aria-keyshortcuts":"M",children:["flow","map"].map(f=>u.jsx("button",{type:"button",className:Ye(N.segButton,s===f&&N.segOn),"aria-pressed":s===f,onClick:()=>h(f),children:f==="flow"?"Flow":"Map"},f))})}function Hp({leaf:s}){return u.jsx("a",{className:N.docsLink,href:s.docsUrl,target:"_blank",rel:"noreferrer",children:"Read the docs for this pattern"})}const vT=new Set(wr.map(s=>s.lc));function yT(s){const h=f=>f.loose?2:vT.has(f.lc)?0:1;return[...s.problems].sort((f,c)=>h(f)-h(c))}function Yp({open:s,show:h,hide:f}){return u.jsxs("span",{className:N.toggleLabel,children:[u.jsx("span",{"aria-hidden":s,className:s?N.toggleHidden:void 0,children:h}),u.jsx("span",{"aria-hidden":!s,className:s?void 0:N.toggleHidden,children:f})]})}function _T({leaf:s}){const h=yT(s);return u.jsxs("div",{className:N.commonProblems,children:[u.jsxs("h4",{children:["Common problems ",u.jsx("span",{children:"examples, not the full set"})]}),u.jsx("ul",{className:N.cpTiles,children:h.map(f=>u.jsxs("li",{className:Ye(N.cpTile,f.loose&&N.cpLoose),children:[u.jsxs("span",{className:N.cpNum,children:["LC ",f.lc,f.loose&&"*"]}),u.jsx("a",{href:`https://leetcode.com/problems/${f.slug}/`,target:"_blank",rel:"noreferrer",children:f.name})]},f.lc))}),h.some(f=>f.loose)&&u.jsx("p",{className:N.commonProblemsNote,children:"* a looser fit: the pattern works, but most people reach for another one first"})]})}function ST({leaf:s}){const h=q3(s.id);return h.length===0?u.jsxs("div",{className:Ye(N.templates,N.note),children:[u.jsxs("p",{children:[u.jsx("strong",{children:"No template yet"})," for this pattern variant."]}),u.jsx("p",{children:s.summary}),u.jsx(Hp,{leaf:s})]}):u.jsxs("div",{className:N.templates,children:[h.map((f,c)=>u.jsx(lf,{title:f.title,children:sf.map(S=>u.jsx(lf.Tab,{language:S,code:f.code[S]},S))},`${s.id}-${c}`)),u.jsx(Hp,{leaf:s})]})}function TT(s){return s.started?s.leaf?u.jsxs(u.Fragment,{children:["Run complete, ",u.jsx("b",{children:s.leaf.name})]}):u.jsxs(u.Fragment,{children:["Run paused, ",u.jsxs("b",{children:["check ",s.steps.length+1]})]}):u.jsxs(u.Fragment,{children:["No run, ",u.jsx("b",{children:"clock not started"})]})}function AE({run:s,detail:h}){return u.jsxs("header",{className:N.strip,children:[u.jsxs("p",{className:N.stripTitle,children:["Map",u.jsx("span",{className:N.stripValue,children:h})]}),u.jsxs("div",{className:N.stripEnd,children:[u.jsx("span",{className:N.mapStatus,role:"status",children:TT(s)}),u.jsx(ff,{mode:s.mode,onMode:s.setMode})]})]})}const ET=100;function wT(s){const h=L.useRef(0),f=L.useRef(null),[c,S]=L.useState(0),[R,M]=L.useState(!1),D=()=>{const X=f.current===null?0:performance.now()-f.current;return h.current+X},U=X=>Math.floor(X/1e3)*1e3;L.useEffect(()=>{if(!R)return;const X=setInterval(()=>{const $=U(D());S(ve=>ve===$?ve:$)},ET);return()=>clearInterval(X)},[R]);const q=L.useCallback(()=>{h.current=0,f.current=performance.now(),S(0),M(!0)},[]),z=L.useCallback(()=>{f.current!==null&&(h.current=D(),f.current=null),S(h.current),M(!1)},[]),g=L.useCallback(()=>{f.current===null&&(f.current=performance.now()),S(U(D())),M(!0)},[]),x=L.useCallback(()=>{h.current=0,f.current=null,S(0),M(!1)},[]),Y=s-c,H=c>=s;return{elapsedMs:c,remainingMs:Y,overtimeMs:H?c-s:0,isOvertime:H,isRunning:R,start:q,stop:z,resume:g,reset:x}}const Gp=30,xT=10;function OT(s){return s.isContentEditable||["INPUT","TEXTAREA","SELECT","OPTION"].includes(s.tagName)?!0:s.closest('input, textarea, select, [role="listbox"], [role="combobox"]')!==null}const NT=s=>String(s).padStart(2,"0");function yl(s){const h=Math.max(0,s);return`${Math.floor(h/60)}:${NT(h%60)}`}function AT(){const s=wT(Gp*1e3),[h,f]=L.useState(!1),[c,S]=L.useState([]),[R,M]=L.useState(!1),[D,U]=L.useState(!1),[q,z]=L.useState("flow"),g=L.useRef(null),x=c.length>0?c[c.length-1].option.next:wi.rootId,Y=h?wi.leaves[x]:void 0,H=h?wi.nodes[x]:void 0;L.useEffect(()=>{g.current?.focus()},[h,x,q]);const X=L.useCallback(()=>{f(!0),s.start()},[s]),$=L.useCallback(Oe=>{H&&(S(_e=>[..._e,{question:H.question,option:Oe}]),wi.leaves[Oe.next]&&s.stop())},[H,s]),ve=L.useCallback(Oe=>{Oe<0||Oe>=c.length||(S(c.slice(0,Oe)),M(!1),U(!1),Y&&s.resume())},[c,Y,s]),de=L.useCallback(()=>ve(c.length-1),[ve,c.length]),fe=L.useCallback(()=>M(Oe=>!Oe),[]),xe=L.useCallback(()=>U(Oe=>!Oe),[]),Ge=L.useCallback(Oe=>{Oe!==q&&(z(Oe),!(!h||Y)&&(Oe==="map"?s.stop():s.resume()))},[q,h,Y,s]),Be=L.useCallback(()=>Ge(q==="flow"?"map":"flow"),[Ge,q]),le=L.useCallback(()=>{s.reset(),f(!1),S([]),M(!1),U(!1)},[s]);L.useEffect(()=>{const Oe=_e=>{if(_e.metaKey||_e.ctrlKey||_e.altKey)return;const Ze=_e.target;if(!(Ze&&OT(Ze))){if(_e.key==="m"||_e.key==="M")return _e.repeat?void 0:Be();if(q==="flow"){if(_e.key==="Escape")return le();if(_e.key==="Backspace"&&h&&c.length>0)return _e.preventDefault(),de();if(_e.key==="Enter"&&!h&&Ze?.tagName!=="BUTTON")return X();if((_e.key==="t"||_e.key==="T")&&Y)return fe();if((_e.key==="p"||_e.key==="P")&&Y)return xe();if(/^[1-9]$/.test(_e.key)&&H){const un=H.options[Number(_e.key)-1];un&&$(un)}}}};return window.addEventListener("keydown",Oe),()=>window.removeEventListener("keydown",Oe)},[q,h,c.length,H,Y,$,de,le,X,fe,xe,Be]);const me=Math.max(0,Math.ceil(s.remainingMs/1e3));return{budget:Gp,mode:q,setMode:Ge,toggleMode:Be,started:h,steps:c,currentId:x,node:H,leaf:Y,isOvertime:s.isOvertime,isWarn:!s.isOvertime&&me<=xT,elapsedSeconds:Math.floor(s.elapsedMs/1e3),remainingSeconds:me,overSeconds:Math.floor(s.overtimeMs/1e3),showTemplate:R,toggleTemplate:fe,showProblems:D,toggleProblems:xe,stageRef:g,start:X,pick:$,backtrack:de,backtrackTo:ve,reset:le}}const MT=L.lazy(()=>xr(()=>import("./MapView-DS_p7Scu.js"),__vite__mapDeps([2,3,4,5]))),CT=L.lazy(()=>xr(()=>import("./MapOutline-Dg66PoFF.js"),__vite__mapDeps([6,3,4]))),RT={maxWidth:760};function ou({text:s,sign:h,tone:f,caption:c,label:S}){return u.jsxs("div",{className:Ye(N.timer,N[f]),role:"timer","aria-live":"off","aria-label":S,children:[u.jsxs("span",{className:N.cells,"aria-hidden":"true",children:[u.jsx("span",{className:Ye(N.cell,N.signCell),children:h?"+":""}),s.split("").map((R,M)=>R===":"?u.jsx("span",{className:N.colon,children:":"},M):u.jsx("span",{className:N.cell,children:R},M))]}),u.jsx("span",{className:N.timerCaption,"aria-hidden":"true",children:c})]})}function kT({run:s}){if(!s.started){const f=yl(s.budget);return u.jsx(ou,{text:f,sign:!1,tone:"idle",caption:"budget",label:`Budget ${f}`})}if(s.leaf){const f=yl(s.elapsedSeconds);return u.jsx(ou,{text:f,sign:!1,tone:s.isOvertime?"over":"ok",caption:"taken",label:`Time taken ${f}`})}if(s.isOvertime){const f=yl(s.overSeconds);return u.jsx(ou,{text:f,sign:!0,tone:"over",caption:"over budget",label:`${f} over budget`})}const h=yl(s.remainingSeconds);return u.jsx(ou,{text:h,sign:!1,tone:s.isWarn?"warn":"ok",caption:"left",label:`${h} left`})}function DT({run:s}){const{started:h,steps:f,leaf:c,node:S}=s,R=h&&!c&&!S,M=!c&&!R;return u.jsx("nav",{className:N.line,"aria-label":"Your path so far",children:u.jsxs("ol",{className:N.stops,children:[f.map((D,U)=>u.jsx("li",{className:Ye(N.stop,N.answered),children:u.jsxs("button",{type:"button",className:N.stopButton,title:`${D.question} ${D.option.cue}`,"aria-label":`Back to question ${U+1}: ${D.question} You picked: ${D.option.cue}`,onClick:()=>s.backtrackTo(U),children:[u.jsx("span",{className:N.dot,"aria-hidden":"true"}),u.jsx("span",{className:N.cue,children:D.option.cue})]})},U)),M&&u.jsx("li",{className:Ye(N.stop,N.current,N.dashedNext),"aria-current":"step",children:u.jsxs("span",{className:N.stopInner,children:[u.jsx("span",{className:N.dot,"aria-hidden":"true"}),u.jsx("span",{className:N.srOnly,children:h?`Question ${f.length+1}, current`:"Ready to start"})]})}),c&&u.jsx("li",{className:Ye(N.stop,N.reached),"aria-current":"step",children:u.jsxs("span",{className:N.stopInner,children:[u.jsx("span",{className:N.dot,"aria-hidden":"true"}),u.jsxs("span",{className:N.srOnly,children:["Result: ",c.name]})]})}),M&&u.jsx("li",{className:Ye(N.stop,N.end),"aria-hidden":"true",children:u.jsx("span",{className:N.stopInner,children:u.jsx("span",{className:N.dot})})}),R&&u.jsx("li",{className:Ye(N.stop,N.fault),"aria-current":"step",children:u.jsxs("span",{className:N.stopInner,children:[u.jsx("span",{className:N.dot,"aria-hidden":"true"}),u.jsx("span",{className:N.srOnly,children:"This path leads nowhere"})]})})]})})}function cu({label:s,value:h,run:f}){return u.jsxs("header",{className:N.strip,children:[u.jsxs("p",{className:N.stripTitle,children:[s,u.jsx("span",{className:N.stripValue,children:h})]}),u.jsxs("div",{className:N.stripEnd,children:[u.jsx(ff,{mode:f.mode,onMode:f.setMode}),u.jsx(kT,{run:f})]})]})}function nf({run:s}){return u.jsxs("footer",{className:N.footer,children:[s.started&&(s.node||s.leaf)&&u.jsxs("button",{type:"button",className:N.plain,onClick:s.backtrack,disabled:s.steps.length===0,"aria-keyshortcuts":"Backspace",children:["Backtrack ",u.jsx(vl,{children:"Bksp"})]}),u.jsxs("button",{type:"button",className:N.plain,onClick:s.reset,"aria-keyshortcuts":"Escape",children:["Reset ",u.jsx(vl,{children:"Esc"})]})]})}function jT({run:s}){return u.jsx("section",{className:Ye(N.card,N.mapFallback),"aria-label":"Map","aria-busy":"true",children:u.jsxs("header",{className:N.strip,children:[u.jsxs("p",{className:N.stripTitle,children:["Map",u.jsx("span",{className:N.stripValue,children:"Loading"})]}),u.jsx("div",{className:N.stripEnd,children:u.jsx(ff,{mode:s.mode,onMode:s.setMode})})]})})}function zT(){const s=AT(),h=Wp(RT),f=()=>u.jsxs(u.Fragment,{children:[u.jsx(cu,{run:s,label:"Procedure",value:"Ready"}),u.jsxs("div",{className:N.body,children:[u.jsxs("h2",{ref:s.stageRef,tabIndex:-1,className:N.question,children:["Name the pattern in ",s.budget," seconds"]}),u.jsx("p",{className:N.lead,children:"Open the problem, then pick the cue that sounds most like it. Overtime is shown, not enforced."}),u.jsx("div",{className:N.actions,children:u.jsxs("button",{type:"button",className:N.primary,onClick:s.start,"aria-keyshortcuts":"Enter",children:["Start ",u.jsx(vl,{children:"Enter"})]})})]},"idle")]}),c=D=>u.jsxs(u.Fragment,{children:[u.jsx(cu,{run:s,label:"Procedure",value:`Q${s.steps.length+1}`}),u.jsxs("div",{className:N.body,children:[u.jsx("h2",{ref:s.stageRef,tabIndex:-1,className:N.question,children:D.question}),u.jsx("ol",{className:N.options,children:D.options.map((U,q)=>u.jsx("li",{children:u.jsxs("button",{type:"button",className:N.option,onClick:()=>s.pick(U),"aria-keyshortcuts":q<9?String(q+1):void 0,children:[q<9&&u.jsx(vl,{children:q+1}),u.jsx("span",{className:N.optionCue,children:U.cue})]})},U.cue))})]},D.id),u.jsx(nf,{run:s})]}),S=D=>{const U=yl(s.elapsedSeconds);return u.jsxs(u.Fragment,{children:[u.jsxs("p",{className:N.srOnly,role:"status","aria-live":"polite",children:["Pattern found: ",D.name,", ",D.pattern,". Time taken ",U,"."]}),u.jsx(cu,{run:s,label:"Memory item",value:"Result"}),u.jsxs("div",{className:N.body,children:[u.jsx("h2",{ref:s.stageRef,tabIndex:-1,className:N.resultName,children:D.name}),u.jsxs("dl",{className:N.fields,children:[u.jsxs("div",{className:N.field,children:[u.jsx("dt",{children:"Pattern"}),u.jsx("dd",{children:D.pattern})]}),u.jsxs("div",{className:N.field,children:[u.jsx("dt",{children:"Time taken"}),u.jsxs("dd",{children:[u.jsx("span",{className:N.figure,children:U}),s.isOvertime?u.jsxs("span",{className:N.overNote,children:["+",yl(s.overSeconds)," over the ",s.budget,"s budget"]}):u.jsxs("span",{className:N.okNote,children:["within the ",s.budget,"s budget"]})]})]})]}),u.jsx("p",{className:N.summary,children:D.summary}),u.jsxs("div",{className:Ye(N.actions,N.actionsPair),children:[u.jsxs("button",{type:"button",className:N.primary,"aria-expanded":s.showTemplate,"aria-keyshortcuts":"T",onClick:s.toggleTemplate,children:[u.jsx(Yp,{open:s.showTemplate,show:"View template",hide:"Hide template"})," ",u.jsx(vl,{children:"T"})]}),u.jsxs("button",{type:"button",className:N.primary,"aria-expanded":s.showProblems,"aria-keyshortcuts":"P",onClick:s.toggleProblems,children:[u.jsx(Yp,{open:s.showProblems,show:"View problems",hide:"Hide problems"})," ",u.jsx(vl,{children:"P"})]})]}),s.showTemplate&&u.jsx(ST,{leaf:D}),s.showProblems&&u.jsx(_T,{leaf:D})]},D.id),u.jsx(nf,{run:s})]})},R=()=>u.jsxs(u.Fragment,{children:[u.jsx(cu,{run:s,label:"Procedure",value:"Fault"}),u.jsxs("div",{className:N.body,children:[u.jsx("h2",{ref:s.stageRef,tabIndex:-1,className:N.question,children:"This path leads nowhere"}),u.jsx("p",{className:N.lead,children:"The cue you picked has no next check. Reset and run the procedure again."})]},"broken"),u.jsx(nf,{run:s})]});let M;return s.started?s.leaf?M=S(s.leaf):s.node?M=c(s.node):M=R():M=f(),s.mode==="map"?u.jsx("div",{className:Ye(N.finder,N.mapMode),children:u.jsx(L.Suspense,{fallback:u.jsx(jT,{run:s}),children:h?u.jsx(CT,{run:s}):u.jsx(MT,{run:s})})}):u.jsxs("div",{className:N.finder,children:[h?u.jsx(DT,{run:s}):u.jsx(p_,{run:s}),u.jsx("section",{className:N.card,"aria-label":"Procedure",children:M})]})}const BT="_root_xqjb6_1",LT="_h2_xqjb6_25",UT="_h3_xqjb6_35",qT="_lede_xqjb6_45",HT="_origin_xqjb6_52",YT="_srOnly_xqjb6_59",GT="_ext_xqjb6_71",KT="_diff_xqjb6_83",VT="_pips_xqjb6_96",IT="_pip_xqjb6_96",QT="_pipOn_xqjb6_108",XT="_easy_xqjb6_112",ZT="_medium_xqjb6_116",JT="_hard_xqjb6_120",FT="_primary_xqjb6_124",PT="_ghost_xqjb6_148",WT="_a_xqjb6_167",$T="_aHead_xqjb6_176",eE="_aStats_xqjb6_181",nE="_aIndex_xqjb6_223",tE="_aSection_xqjb6_249",aE="_aStrip_xqjb6_255",iE="_aCount_xqjb6_280",lE="_aRows_xqjb6_289",rE="_aRow_xqjb6_289",sE="_aNum_xqjb6_312",uE="_aLc_xqjb6_325",oE="_aText_xqjb6_349",cE="_aLink_xqjb6_355",fE="_aMove_xqjb6_366",dE="_band_xqjb6_381",hE="_bandList_xqjb6_395",mE="_bandItem_xqjb6_412",pE="_bandKey_xqjb6_434",gE="_bandName_xqjb6_448",bE="_bandOn_xqjb6_457",He={root:BT,h2:LT,h3:UT,lede:qT,origin:HT,srOnly:YT,ext:GT,diff:KT,pips:VT,pip:IT,pipOn:QT,easy:XT,medium:ZT,hard:JT,primary:FT,ghost:PT,a:WT,aHead:$T,aStats:eE,aIndex:nE,aSection:tE,aStrip:aE,aCount:iE,aRows:lE,aRow:rE,aNum:sE,aLc:uE,aText:oE,aLink:cE,aMove:fE,band:dE,bandList:hE,bandItem:mE,bandKey:pE,bandName:gE,bandOn:bE},vE="A curated list of LeetCode and data structure/algorithm problems designed around the 80/20 rule, focusing on high-impact topics that deliver 90–95% of the results needed for software engineering coding interviews.",yE="Credit to Aman Manazir for coming up with this list.";function _E(){return u.jsx("svg",{className:He.ext,viewBox:"0 0 12 12","aria-hidden":"true",children:u.jsx("path",{d:"M4.5 2.5h5v5M9.5 2.5 3 9"})})}const SE={Easy:1,Medium:2,Hard:3};function TE({d:s,label:h=!0}){return u.jsxs("span",{className:Ye(He.diff,He[s.toLowerCase()]),children:[u.jsx("span",{className:He.pips,"aria-hidden":"true",children:[1,2,3].map(f=>u.jsx("span",{className:Ye(He.pip,f<=SE[s]&&He.pipOn)},f))}),u.jsx("span",{className:h?He.diffLabel:He.srOnly,children:s})]})}const tf="1234567890",Er=s=>`pareto-${s}`;function EE(){const[s,h]=L.useState(va[0].id),f=c=>{const S=window.matchMedia("(prefers-reduced-motion: reduce)").matches;document.getElementById(Er(c))?.scrollIntoView({block:"start",behavior:S?"auto":"smooth"}),h(c)};return L.useEffect(()=>{const c=new Set,S=new IntersectionObserver(R=>{for(const D of R){const U=D.target.id.replace("pareto-","");D.isIntersecting?c.add(U):c.delete(U)}const M=va.find(D=>c.has(D.id));M&&h(M.id)},{rootMargin:"-25% 0px -65% 0px"});return va.forEach(R=>{const M=document.getElementById(Er(R.id));M&&S.observe(M)}),()=>S.disconnect()},[]),L.useEffect(()=>{const c=S=>{if(S.target.closest("input, textarea, select, [contenteditable]")||S.metaKey||S.ctrlKey||S.altKey)return;const M=tf.indexOf(S.key);M>=0&&M<va.length&&f(va[M].id)};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[]),u.jsx("div",{className:He.root,children:u.jsxs("div",{className:He.a,children:[u.jsxs("header",{className:He.aHead,children:[u.jsx("h2",{className:He.h2,children:"The Pareto Set"}),u.jsx("p",{className:He.lede,children:vE}),u.jsx("p",{className:He.origin,children:yE}),u.jsxs("dl",{className:He.aStats,children:[u.jsxs("div",{children:[u.jsx("dt",{children:"Problems"}),u.jsx("dd",{children:lu.total})]}),u.jsxs("div",{children:[u.jsx("dt",{children:"Patterns"}),u.jsx("dd",{children:lu.patterns})]}),u.jsxs("div",{children:[u.jsx("dt",{children:"Easy"}),u.jsx("dd",{children:lu.easy})]}),u.jsxs("div",{children:[u.jsx("dt",{children:"Medium"}),u.jsx("dd",{children:lu.medium})]})]})]}),u.jsx("nav",{className:He.band,"aria-label":"Patterns",children:u.jsx("ol",{className:He.bandList,children:va.map((c,S)=>u.jsx("li",{children:u.jsxs("button",{type:"button",className:Ye(He.bandItem,c.id===s&&He.bandOn),"aria-current":c.id===s?"true":void 0,"aria-keyshortcuts":tf[S],onClick:()=>f(c.id),children:[u.jsx("span",{className:He.bandKey,children:tf[S]}),u.jsx("span",{className:He.bandName,children:c.name})]})},c.id))})}),va.map(c=>u.jsxs("section",{id:Er(c.id),className:He.aSection,"aria-labelledby":`${Er(c.id)}-h`,children:[u.jsxs("div",{className:He.aStrip,children:[u.jsx("h3",{id:`${Er(c.id)}-h`,className:He.h3,children:c.name}),u.jsx("p",{children:c.why}),u.jsxs("span",{className:He.aCount,children:[c.problems.length," problems"]})]}),u.jsx("ol",{className:He.aRows,children:c.problems.map(S=>u.jsxs("li",{className:He.aRow,children:[u.jsx("span",{className:He.aNum,children:S.n}),u.jsxs("span",{className:He.aText,children:[u.jsxs("a",{href:Y3(S.slug),target:"_blank",rel:"noopener noreferrer",className:He.aLink,children:[S.name,u.jsx("span",{className:He.srOnly,children:" on LeetCode (opens in a new tab)"})]}),u.jsx("span",{className:He.aMove,children:S.ask})]}),u.jsxs("span",{className:He.aLc,children:["LC ",S.lc]}),u.jsx(TE,{d:S.difficulty}),u.jsx(_E,{})]},S.slug))})]},c.id))]})})}const wE=L.lazy(()=>xr(()=>import("./Cheatsheet-BQPKQt4g.js"),__vite__mapDeps([7,8])));function xE(){const{isSidebarOpen:s}=uf(),{view:h}=du(),f=Ye(zp.main,(!s||h!=="cheatsheet")&&zp.sidebarHidden);return u.jsx("main",{className:f,children:h==="finder"?u.jsx(zT,{}):h==="pareto"?u.jsx(EE,{}):u.jsx(L.Suspense,{fallback:null,children:u.jsx(wE,{})})})}function OE(){return u.jsx(fu.StrictMode,{children:u.jsx(Z0,{children:u.jsx(X0,{children:u.jsx(J0,{children:u.jsxs("div",{className:"App",children:[u.jsx(kv,{}),u.jsx(xE,{})]})})})})})}I0.createRoot(document.getElementById("root")).render(u.jsx(OE,{}));export{x3 as $,V2 as A,I2 as B,Q2 as C,X2 as D,J2 as E,k2 as F,F2 as G,P2 as H,f3 as I,d3 as J,h3 as K,r3 as L,c3 as M,s3 as N,u3 as O,W2 as P,o3 as Q,Z2 as R,t3 as S,lf as T,O3 as U,N3 as V,A3 as W,M3 as X,T3 as Y,E3 as Z,w3 as _,C3 as a,y_ as a$,v3 as a0,y3 as a1,_3 as a2,S3 as a3,d2 as a4,h2 as a5,m2 as a6,p2 as a7,u2 as a8,o2 as a9,H2 as aA,Y2 as aB,G2 as aC,K2 as aD,__ as aE,S_ as aF,T_ as aG,E_ as aH,k_ as aI,D_ as aJ,j_ as aK,z_ as aL,B_ as aM,L_ as aN,U_ as aO,q_ as aP,A_ as aQ,M_ as aR,C_ as aS,R_ as aT,w_ as aU,x_ as aV,O_ as aW,N_ as aX,g_ as aY,b_ as aZ,v_ as a_,c2 as aa,f2 as ab,i2 as ac,l2 as ad,r2 as ae,s2 as af,g2 as ag,b2 as ah,v2 as ai,y2 as aj,e2 as ak,n2 as al,t2 as am,a2 as an,_2 as ao,S2 as ap,T2 as aq,E2 as ar,w2 as as,x2 as at,O2 as au,N2 as av,A2 as aw,M2 as ax,C2 as ay,R2 as az,R3 as b,$S as b$,jS as b0,zS as b1,BS as b2,LS as b3,OS as b4,NS as b5,AS as b6,MS as b7,CS as b8,RS as b9,rS as bA,sS as bB,uS as bC,oS as bD,W_ as bE,$_ as bF,eS as bG,nS as bH,H_ as bI,Y_ as bJ,G_ as bK,K_ as bL,mS as bM,pS as bN,gS as bO,bS as bP,US as bQ,qS as bR,HS as bS,YS as bT,QS as bU,XS as bV,ZS as bW,JS as bX,FS as bY,PS as bZ,WS as b_,kS as ba,DS as bb,vS as bc,yS as bd,_S as be,SS as bf,cS as bg,fS as bh,dS as bi,hS as bj,V_ as bk,I_ as bl,Q_ as bm,X_ as bn,TS as bo,ES as bp,wS as bq,xS as br,tS as bs,aS as bt,iS as bu,lS as bv,Z_ as bw,J_ as bx,F_ as by,P_ as bz,k3 as c,GS as c0,KS as c1,VS as c2,IS as c3,wi as c4,rf as c5,fu as c6,L as c7,Ye as c8,AE as c9,vl as ca,q3 as cb,ST as cc,D3 as d,j3 as e,z3 as f,B3 as g,L3 as h,a3 as i,u as j,i3 as k,l3 as l,$2 as m,e3 as n,n3 as o,m3 as p,p3 as q,g3 as r,b3 as s,D2 as t,j2 as u,z2 as v,B2 as w,L2 as x,U2 as y,q2 as z};
