const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/400-B5WfoJxY.css","assets/700-Bwqbt05G.css","assets/MapView-BYavQszK.js","assets/path-BhUgGXyf.js","assets/path-BhwaGE6S.css","assets/MapView-acdOEaeK.css","assets/MapOutline-D2pKZqEv.js"])))=>i.map(i=>d[i]);
(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const T of document.querySelectorAll('link[rel="modulepreload"]'))d(T);new MutationObserver(T=>{for(const R of T)if(R.type==="childList")for(const M of R.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&d(M)}).observe(document,{childList:!0,subtree:!0});function f(T){const R={};return T.integrity&&(R.integrity=T.integrity),T.referrerPolicy&&(R.referrerPolicy=T.referrerPolicy),T.crossOrigin==="use-credentials"?R.credentials="include":T.crossOrigin==="anonymous"?R.credentials="omit":R.credentials="same-origin",R}function d(T){if(T.ep)return;T.ep=!0;const R=f(T);fetch(T.href,R)}})();function Tr(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Yu={exports:{}},Tl={};var gg;function lx(){if(gg)return Tl;gg=1;var o=Symbol.for("react.transitional.element"),m=Symbol.for("react.fragment");function f(d,T,R){var M=null;if(R!==void 0&&(M=""+R),T.key!==void 0&&(M=""+T.key),"key"in T){R={};for(var D in T)D!=="key"&&(R[D]=T[D])}else R=T;return T=R.ref,{$$typeof:o,type:d,key:M,ref:T!==void 0?T:null,props:R}}return Tl.Fragment=m,Tl.jsx=f,Tl.jsxs=f,Tl}var pg;function sx(){return pg||(pg=1,Yu.exports=lx()),Yu.exports}var i=sx(),Iu={exports:{}},jl={},Vu={exports:{}},Ku={};var bg;function ox(){return bg||(bg=1,(function(o){function m(V,un){var F=V.length;V.push(un);n:for(;0<F;){var Cn=F-1>>>1,jn=V[Cn];if(0<T(jn,un))V[Cn]=un,V[F]=jn,F=Cn;else break n}}function f(V){return V.length===0?null:V[0]}function d(V){if(V.length===0)return null;var un=V[0],F=V.pop();if(F!==un){V[0]=F;n:for(var Cn=0,jn=V.length,ue=jn>>>1;Cn<ue;){var ve=2*(Cn+1)-1,dt=V[ve],y=ve+1,z=V[y];if(0>T(dt,F))y<jn&&0>T(z,dt)?(V[Cn]=z,V[y]=F,Cn=y):(V[Cn]=dt,V[ve]=F,Cn=ve);else if(y<jn&&0>T(z,F))V[Cn]=z,V[y]=F,Cn=y;else break n}}return un}function T(V,un){var F=V.sortIndex-un.sortIndex;return F!==0?F:V.id-un.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var R=performance;o.unstable_now=function(){return R.now()}}else{var M=Date,D=M.now();o.unstable_now=function(){return M.now()-D}}var q=[],G=[],B=1,v=null,E=3,I=!1,Y=!1,Z=!1,en=!1,_n=typeof setTimeout=="function"?setTimeout:null,gn=typeof clearTimeout=="function"?clearTimeout:null,mn=typeof setImmediate<"u"?setImmediate:null;function On(V){for(var un=f(G);un!==null;){if(un.callback===null)d(G);else if(un.startTime<=V)d(G),un.sortIndex=un.expirationTime,m(q,un);else break;un=f(G)}}function Kn(V){if(Z=!1,On(V),!Y)if(f(q)!==null)Y=!0,Hn||(Hn=!0,de());else{var un=f(G);un!==null&&fe(Kn,un.startTime-V)}}var Hn=!1,on=-1,bn=5,An=-1;function Tn(){return en?!0:!(o.unstable_now()-An<bn)}function Wn(){if(en=!1,Hn){var V=o.unstable_now();An=V;var un=!0;try{n:{Y=!1,Z&&(Z=!1,gn(on),on=-1),I=!0;var F=E;try{e:{for(On(V),v=f(q);v!==null&&!(v.expirationTime>V&&Tn());){var Cn=v.callback;if(typeof Cn=="function"){v.callback=null,E=v.priorityLevel;var jn=Cn(v.expirationTime<=V);if(V=o.unstable_now(),typeof jn=="function"){v.callback=jn,On(V),un=!0;break e}v===f(q)&&d(q),On(V)}else d(q);v=f(q)}if(v!==null)un=!0;else{var ue=f(G);ue!==null&&fe(Kn,ue.startTime-V),un=!1}}break n}finally{v=null,E=F,I=!1}un=void 0}}finally{un?de():Hn=!1}}}var de;if(typeof mn=="function")de=function(){mn(Wn)};else if(typeof MessageChannel<"u"){var Qe=new MessageChannel,Ae=Qe.port2;Qe.port1.onmessage=Wn,de=function(){Ae.postMessage(null)}}else de=function(){_n(Wn,0)};function fe(V,un){on=_n(function(){V(o.unstable_now())},un)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(V){V.callback=null},o.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):bn=0<V?Math.floor(1e3/V):5},o.unstable_getCurrentPriorityLevel=function(){return E},o.unstable_next=function(V){switch(E){case 1:case 2:case 3:var un=3;break;default:un=E}var F=E;E=un;try{return V()}finally{E=F}},o.unstable_requestPaint=function(){en=!0},o.unstable_runWithPriority=function(V,un){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var F=E;E=V;try{return un()}finally{E=F}},o.unstable_scheduleCallback=function(V,un,F){var Cn=o.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?Cn+F:Cn):F=Cn,V){case 1:var jn=-1;break;case 2:jn=250;break;case 5:jn=1073741823;break;case 4:jn=1e4;break;default:jn=5e3}return jn=F+jn,V={id:B++,callback:un,priorityLevel:V,startTime:F,expirationTime:jn,sortIndex:-1},F>Cn?(V.sortIndex=F,m(G,V),f(q)===null&&V===f(G)&&(Z?(gn(on),on=-1):Z=!0,fe(Kn,F-Cn))):(V.sortIndex=jn,m(q,V),Y||I||(Y=!0,Hn||(Hn=!0,de()))),V},o.unstable_shouldYield=Tn,o.unstable_wrapCallback=function(V){var un=E;return function(){var F=E;E=un;try{return V.apply(this,arguments)}finally{E=F}}}})(Ku)),Ku}var vg;function cx(){return vg||(vg=1,Vu.exports=ox()),Vu.exports}var Qu={exports:{}},yn={};var yg;function ux(){if(yg)return yn;yg=1;var o=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),M=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),G=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),E=Symbol.for("react.view_transition"),I=Symbol.iterator;function Y(y){return y===null||typeof y!="object"?null:(y=I&&y[I]||y["@@iterator"],typeof y=="function"?y:null)}var Z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},en=Object.assign,_n={};function gn(y,z,sn){this.props=y,this.context=z,this.refs=_n,this.updater=sn||Z}gn.prototype.isReactComponent={},gn.prototype.setState=function(y,z){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,z,"setState")},gn.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function mn(){}mn.prototype=gn.prototype;function On(y,z,sn){this.props=y,this.context=z,this.refs=_n,this.updater=sn||Z}var Kn=On.prototype=new mn;Kn.constructor=On,en(Kn,gn.prototype),Kn.isPureReactComponent=!0;var Hn=Array.isArray;function on(){}var bn={H:null,A:null,T:null,S:null},An=Object.prototype.hasOwnProperty;function Tn(y,z,sn){var W=sn.ref;return{$$typeof:o,type:y,key:z,ref:W!==void 0?W:null,props:sn}}function Wn(y,z){return Tn(y.type,z,y.props)}function de(y){return typeof y=="object"&&y!==null&&y.$$typeof===o}function Qe(y){var z={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(sn){return z[sn]})}var Ae=/\/+/g;function fe(y,z){return typeof y=="object"&&y!==null&&y.key!=null?Qe(""+y.key):z.toString(36)}function V(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(on,on):(y.status="pending",y.then(function(z){y.status==="pending"&&(y.status="fulfilled",y.value=z)},function(z){y.status==="pending"&&(y.status="rejected",y.reason=z)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function un(y,z,sn,W,dn){var Ln=typeof y;(Ln==="undefined"||Ln==="boolean")&&(y=null);var kn=!1;if(y===null)kn=!0;else switch(Ln){case"bigint":case"string":case"number":kn=!0;break;case"object":switch(y.$$typeof){case o:case m:kn=!0;break;case B:return kn=y._init,un(kn(y._payload),z,sn,W,dn)}}if(kn)return dn=dn(y),kn=W===""?"."+fe(y,0):W,Hn(dn)?(sn="",kn!=null&&(sn=kn.replace(Ae,"$&/")+"/"),un(dn,z,sn,"",function(et){return et})):dn!=null&&(de(dn)&&(dn=Wn(dn,sn+(dn.key==null||y&&y.key===dn.key?"":(""+dn.key).replace(Ae,"$&/")+"/")+kn)),z.push(dn)),1;kn=0;var tn=W===""?".":W+":";if(Hn(y))for(var fn=0;fn<y.length;fn++)W=y[fn],Ln=tn+fe(W,fn),kn+=un(W,z,sn,Ln,dn);else if(fn=Y(y),typeof fn=="function")for(y=fn.call(y),fn=0;!(W=y.next()).done;)W=W.value,Ln=tn+fe(W,fn++),kn+=un(W,z,sn,Ln,dn);else if(Ln==="object"){if(typeof y.then=="function")return un(V(y),z,sn,W,dn);throw z=String(y),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return kn}function F(y,z,sn){if(y==null)return y;var W=[],dn=0;return un(y,W,"","",function(Ln){return z.call(sn,Ln,dn++)}),W}function Cn(y){if(y._status===-1){var z=y._result,sn=z();sn.then(function(W){(y._status===0||y._status===-1)&&(y._status=1,y._result=W,sn.status===void 0&&(sn.status="fulfilled",sn.value=W))},function(W){(y._status===0||y._status===-1)&&(y._status=2,y._result=W,sn.status===void 0&&(sn.status="rejected",sn.reason=W))}),y._status===-1&&(y._status=0,y._result=sn)}if(y._status===1)return y._result.default;throw y._result}var jn=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)};function ue(y){var z=bn.T,sn={};sn.types=z!==null?z.types:null,bn.T=sn;try{var W=y(),dn=bn.S;dn!==null&&dn(sn,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(on,jn)}catch(Ln){jn(Ln)}finally{z!==null&&sn.types!==null&&(z.types=sn.types),bn.T=z}}function ve(y){var z=bn.T;if(z!==null){var sn=z.types;sn===null?z.types=[y]:sn.indexOf(y)===-1&&sn.push(y)}else ue(ve.bind(null,y))}var dt={map:F,forEach:function(y,z,sn){F(y,function(){z.apply(this,arguments)},sn)},count:function(y){var z=0;return F(y,function(){z++}),z},toArray:function(y){return F(y,function(z){return z})||[]},only:function(y){if(!de(y))throw Error("React.Children.only expected to receive a single React element child.");return y}};return yn.Activity=v,yn.Children=dt,yn.Component=gn,yn.Fragment=f,yn.Profiler=T,yn.PureComponent=On,yn.StrictMode=d,yn.Suspense=q,yn.ViewTransition=E,yn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=bn,yn.__COMPILER_RUNTIME={__proto__:null,c:function(y){return bn.H.useMemoCache(y)}},yn.addTransitionType=ve,yn.cache=function(y){return function(){return y.apply(null,arguments)}},yn.cacheSignal=function(){return null},yn.cloneElement=function(y,z,sn){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var W=en({},y.props),dn=y.key;if(z!=null)for(Ln in z.key!==void 0&&(dn=""+z.key),z)!An.call(z,Ln)||Ln==="key"||Ln==="__self"||Ln==="__source"||Ln==="ref"&&z.ref===void 0||(W[Ln]=z[Ln]);var Ln=arguments.length-2;if(Ln===1)W.children=sn;else if(1<Ln){for(var kn=Array(Ln),tn=0;tn<Ln;tn++)kn[tn]=arguments[tn+2];W.children=kn}return Tn(y.type,dn,W)},yn.createContext=function(y){return y={$$typeof:M,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:R,_context:y},y},yn.createElement=function(y,z,sn){var W,dn={},Ln=null;if(z!=null)for(W in z.key!==void 0&&(Ln=""+z.key),z)An.call(z,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(dn[W]=z[W]);var kn=arguments.length-2;if(kn===1)dn.children=sn;else if(1<kn){for(var tn=Array(kn),fn=0;fn<kn;fn++)tn[fn]=arguments[fn+2];dn.children=tn}if(y&&y.defaultProps)for(W in kn=y.defaultProps,kn)dn[W]===void 0&&(dn[W]=kn[W]);return Tn(y,Ln,dn)},yn.createRef=function(){return{current:null}},yn.forwardRef=function(y){return{$$typeof:D,render:y}},yn.isValidElement=de,yn.lazy=function(y){return{$$typeof:B,_payload:{_status:-1,_result:y},_init:Cn}},yn.memo=function(y,z){return{$$typeof:G,type:y,compare:z===void 0?null:z}},yn.startTransition=ue,yn.unstable_useCacheRefresh=function(){return bn.H.useCacheRefresh()},yn.use=function(y){return bn.H.use(y)},yn.useActionState=function(y,z,sn){return bn.H.useActionState(y,z,sn)},yn.useCallback=function(y,z){return bn.H.useCallback(y,z)},yn.useContext=function(y){return bn.H.useContext(y)},yn.useDebugValue=function(){},yn.useDeferredValue=function(y,z){return bn.H.useDeferredValue(y,z)},yn.useEffect=function(y,z){return bn.H.useEffect(y,z)},yn.useEffectEvent=function(y){return bn.H.useEffectEvent(y)},yn.useId=function(){return bn.H.useId()},yn.useImperativeHandle=function(y,z,sn){return bn.H.useImperativeHandle(y,z,sn)},yn.useInsertionEffect=function(y,z){return bn.H.useInsertionEffect(y,z)},yn.useLayoutEffect=function(y,z){return bn.H.useLayoutEffect(y,z)},yn.useMemo=function(y,z){return bn.H.useMemo(y,z)},yn.useOptimistic=function(y,z){return bn.H.useOptimistic(y,z)},yn.useReducer=function(y,z,sn){return bn.H.useReducer(y,z,sn)},yn.useRef=function(y){return bn.H.useRef(y)},yn.useState=function(y){return bn.H.useState(y)},yn.useSyncExternalStore=function(y,z,sn){return bn.H.useSyncExternalStore(y,z,sn)},yn.useTransition=function(){return bn.H.useTransition()},yn.version="19.3.1",yn}var xg;function sd(){return xg||(xg=1,Qu.exports=ux()),Qu.exports}var Xu={exports:{}},Ke={};var _g;function dx(){if(_g)return Ke;_g=1;var o=sd();function m(B){var v="https://react.dev/errors/"+B;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)v+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+B+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var d={d:{f,r:function(){throw Error(m(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},T=Symbol.for("react.portal"),R=Symbol.for("react.recoverable"),M=Symbol.for("react.optimistic_key");function D(B,v,E){var I=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:T,key:I==null?null:I===M?M:""+I,children:B,containerInfo:v,implementation:E}}var q=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function G(B,v){if(B==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Ke.browser=function(B){return{$$typeof:R,_reason:B}},Ke.createPortal=function(B,v){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(m(299));return D(B,v,null,E)},Ke.flushSync=function(B){var v=q.T,E=d.p;try{if(q.T=null,d.p=2,B)return B()}finally{q.T=v,d.p=E,d.d.f()}},Ke.preconnect=function(B,v){typeof B=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,d.d.C(B,v))},Ke.prefetchDNS=function(B){typeof B=="string"&&d.d.D(B)},Ke.preinit=function(B,v){if(typeof B=="string"&&v&&typeof v.as=="string"){var E=v.as,I=G(E,v.crossOrigin),Y=typeof v.integrity=="string"?v.integrity:void 0,Z=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;E==="style"?d.d.S(B,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:I,integrity:Y,fetchPriority:Z}):E==="script"&&d.d.X(B,{crossOrigin:I,integrity:Y,fetchPriority:Z,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Ke.preinitModule=function(B,v){if(typeof B=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var E=G(v.as,v.crossOrigin);d.d.M(B,{crossOrigin:E,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}}else v==null&&d.d.M(B)},Ke.preload=function(B,v){if(typeof B=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var E=v.as,I=G(E,v.crossOrigin);d.d.L(B,E,{crossOrigin:I,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Ke.preloadModule=function(B,v){if(typeof B=="string")if(v){var E=G(v.as,v.crossOrigin);d.d.m(B,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:E,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}else d.d.m(B)},Ke.requestFormReset=function(B){d.d.r(B)},Ke.unstable_batchedUpdates=function(B,v){return B(v)},Ke.useFormState=function(B,v,E){return q.H.useFormState(B,v,E)},Ke.useFormStatus=function(){return q.H.useHostTransitionStatus()},Ke.version="19.3.1",Ke}var Sg;function Kg(){if(Sg)return Xu.exports;Sg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(m){console.error(m)}}return o(),Xu.exports=dx(),Xu.exports}var Tg;function fx(){if(Tg)return jl;Tg=1;var o=cx(),m=sd(),f=Kg();function d(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function T(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function R(n){for(var e=n,t=e;t&&!t.alternate;)e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;for(;e.return;)e=e.return;return e.tag===3?n:null}function M(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function D(n){if(n.tag===31){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function q(n){if(R(n)!==n)throw Error(d(188))}function G(n){var e=n.alternate;if(!e){if(e=R(n),e===null)throw Error(d(188));return e!==n?null:n}for(var t=n,a=e;;){var r=t.return;if(r===null)break;var l=r.alternate;if(l===null){if(a=r.return,a!==null){t=a;continue}break}if(r.child===l.child){for(l=r.child;l;){if(l===t)return q(r),n;if(l===a)return q(r),e;l=l.sibling}throw Error(d(188))}if(t.return!==a.return)t=r,a=l;else{for(var s=!1,c=r.child;c;){if(c===t){s=!0,t=r,a=l;break}if(c===a){s=!0,a=r,t=l;break}c=c.sibling}if(!s){for(c=l.child;c;){if(c===t){s=!0,t=l,a=r;break}if(c===a){s=!0,a=l,t=r;break}c=c.sibling}if(!s)throw Error(d(189))}}if(t.alternate!==a)throw Error(d(190))}if(t.tag!==3)throw Error(d(188));return t.stateNode.current===t?n:e}function B(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n;for(n=n.child;n!==null;){if(e=B(n),e!==null)return e;n=n.sibling}return null}function v(n,e,t,a,r,l){for(;n!==null;){if((n.tag===5||n.tag===27||n.tag===6)&&t(n,a,r,l)||(n.tag!==22||n.memoizedState===null)&&(e||n.tag!==5&&n.tag!==27)&&v(n.child,e,t,a,r,l))return!0;n=n.sibling}return!1}function E(n){for(n=n.return;n!==null;){if(n.tag===3||n.tag===5||n.tag===27)return n;n=n.return}return null}function I(n){var e=!1;for(n=n.return;n!==null&&(n.tag===4&&(e=!0),!(n.tag===3||n.tag===5||n.tag===27));)n=n.return;return e}function Y(n){var e=[null,null],t=E(n);return t===null||Z(e,n,t.child,{foundSelf:!1}),e}function Z(n,e,t,a){for(;t!==null;){if(t===e)a.foundSelf=!0;else if(t.tag===5||t.tag===27||t.tag===6){if(a.foundSelf)return n[1]=t,!0;n[0]=t}else if((t.tag!==22||t.memoizedState===null)&&Z(n,e,t.child,a))return!0;t=t.sibling}return!1}function en(n){switch(n.tag){case 5:case 27:case 6:return n.stateNode;case 3:return n.stateNode.containerInfo;default:throw Error(d(559))}}var _n=null,gn=null;function mn(n,e,t){return n===t?!0:n===e?(_n=n,!0):!1}function On(n,e,t){return n===t?(gn=n,!1):n===e?(gn!==null&&(_n=n),!0):!1}function Kn(n){if(n===null)return null;do n=n===null?null:n.return;while(n&&n.tag!==5&&n.tag!==27&&n.tag!==3);return n||null}function Hn(n,e,t){for(var a=0,r=n;r;r=t(r))a++;r=0;for(var l=e;l;l=t(l))r++;for(;0<a-r;)n=t(n),a--;for(;0<r-a;)e=t(e),r--;for(;a--;){if(n===e||e!==null&&n===e.alternate)return n;n=t(n),e=t(e)}return null}var on=Object.assign,bn=Symbol.for("react.element"),An=Symbol.for("react.transitional.element"),Tn=Symbol.for("react.portal"),Wn=Symbol.for("react.fragment"),de=Symbol.for("react.strict_mode"),Qe=Symbol.for("react.profiler"),Ae=Symbol.for("react.consumer"),fe=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),un=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),Cn=Symbol.for("react.memo"),jn=Symbol.for("react.lazy"),ue=Symbol.for("react.activity"),ve=Symbol.for("react.legacy_hidden"),dt=Symbol.for("react.memo_cache_sentinel"),y=Symbol.for("react.view_transition"),z=Symbol.for("react.recoverable"),sn=Symbol.iterator;function W(n){return n===null||typeof n!="object"?null:(n=sn&&n[sn]||n["@@iterator"],typeof n=="function"?n:null)}var dn=Symbol.for("react.client.reference");function Ln(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===dn?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Wn:return"Fragment";case Qe:return"Profiler";case de:return"StrictMode";case un:return"Suspense";case F:return"SuspenseList";case ue:return"Activity";case y:return"ViewTransition"}if(typeof n=="object")switch(n.$$typeof){case Tn:return"Portal";case fe:return n.displayName||"Context";case Ae:return(n._context.displayName||"Context")+".Consumer";case V:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Cn:return e=n.displayName||null,e!==null?e:Ln(n.type)||"Memo";case jn:e=n._payload,n=n._init;try{return Ln(n(e))}catch{}}return null}var kn=Array.isArray,tn=m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fn=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et={pending:!1,data:null,method:null,action:null},ti=[],Sa=-1;function xt(n){return{current:n}}function ke(n){0>Sa||(n.current=ti[Sa],ti[Sa]=null,Sa--)}function ae(n,e){Sa++,ti[Sa]=n.current,n.current=e}var _t=xt(null),Ta=xt(null),Gt=xt(null),Oi=xt(null);function ai(n,e){switch(ae(Gt,e),ae(Ta,n),ae(_t,null),e.nodeType){case 9:case 11:n=(n=e.documentElement)&&(n=n.namespaceURI)?jm(n):0;break;default:if(n=e.tagName,e=e.namespaceURI)e=jm(e),n=wm(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ke(_t),ae(_t,n)}function tt(){ke(_t),ke(Ta),ke(Gt)}function Ai(n){var e=n.memoizedState;e!==null&&(pr._currentValue=e.memoizedState,ae(Oi,n)),e=_t.current;var t=wm(e,n.type);e!==t&&(ae(Ta,n),ae(_t,t))}function Ct(n){Ta.current===n&&(ke(_t),ke(Ta)),Oi.current===n&&(ke(Oi),pr._currentValue=et)}var ja,jr;function Yt(n){if(ja===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);ja=e&&e[1]||"",jr=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ja+n+jr}var wr=!1;function Nr(n,e){if(!n||wr)return"";wr=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(Q){var x=Q}Reflect.construct(n,[],C)}else{try{C.call()}catch(Q){x=Q}C=!1;try{var N=Object.getOwnPropertyDescriptor(n.prototype,"props");Object.defineProperty(n.prototype,"props",{configurable:!0,set:function(){throw Error()}}),C=!0,new n}finally{C&&(N!==void 0?Object.defineProperty(n.prototype,"props",N):delete n.prototype.props)}}}else{try{throw Error()}catch(Q){x=Q}(C=n())&&typeof C.catch=="function"&&C.catch(function(){})}}catch(Q){if(Q&&x&&typeof Q.stack=="string")return[Q.stack,x.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=a.DetermineComponentFrameRoot(),s=l[0],c=l[1];if(s&&c){var h=s.split(`
`),S=c.split(`
`);for(r=a=0;a<h.length&&!h[a].includes("DetermineComponentFrameRoot");)a++;for(;r<S.length&&!S[r].includes("DetermineComponentFrameRoot");)r++;if(a===h.length||r===S.length)for(a=h.length-1,r=S.length-1;1<=a&&0<=r&&h[a]!==S[r];)r--;for(;1<=a&&0<=r;a--,r--)if(h[a]!==S[r]){if(a!==1||r!==1)do if(a--,r--,0>r||h[a]!==S[r]){var O=`
`+h[a].replace(" at new "," at ");return n.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",n.displayName)),O}while(1<=a&&0<=r);break}}}finally{wr=!1,Error.prepareStackTrace=t}return(t=n?n.displayName||n.name:"")?Yt(t):""}function bo(n,e){switch(n.tag){case 26:case 27:case 5:return Yt(n.type);case 16:return Yt("Lazy");case 13:return n.child!==e&&e!==null?Yt("Suspense Fallback"):Yt("Suspense");case 19:return Yt("SuspenseList");case 0:case 15:return Nr(n.type,!1);case 11:return Nr(n.type.render,!1);case 1:return Nr(n.type,!0);case 31:return Yt("Activity");case 30:return Yt("ViewTransition");default:return""}}function Al(n){try{var e="",t=null;do e+=bo(n,t),t=n,n=n.return;while(n);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var ki=Object.prototype.hasOwnProperty,Er=o.unstable_scheduleCallback,Or=o.unstable_cancelCallback,vo=o.unstable_shouldYield,Ar=o.unstable_requestPaint,Xe=o.unstable_now,kl=o.unstable_getCurrentPriorityLevel,Ml=o.unstable_ImmediatePriority,kr=o.unstable_UserBlockingPriority,Rt=o.unstable_NormalPriority,g=o.unstable_LowPriority,L=o.unstable_IdlePriority,X=o.log,vn=o.unstable_setDisableYieldValue,le=null,qn=null;function $(n){if(typeof X=="function"&&vn(n),qn&&typeof qn.setStrictMode=="function")try{qn.setStrictMode(le,n)}catch{}}var K=Math.clz32?Math.clz32:ge,pn=Math.log,Se=Math.LN2;function ge(n){return n>>>=0,n===0?32:31-(pn(n)/Se|0)|0}var It=256,wa=262144,Na=4194304;function ta(n){var e=n&42;if(e!==0)return e;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&-n;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Ea(n,e,t){var a=n.pendingLanes;if(a===0)return 0;var r=0,l=n.suspendedLanes,s=n.pingedLanes;n=n.warmLanes;var c=a&134217727;return c!==0?(a=c&~l,a!==0?r=ta(a):(s&=c,s!==0?r=ta(s):t||(t=c&~n,t!==0&&(r=ta(t))))):(c=a&~l,c!==0?r=ta(c):s!==0?r=ta(s):t||(t=a&~n,t!==0&&(r=ta(t)))),r===0?0:e!==0&&e!==r&&(e&l)===0&&(l=r&-r,t=e&-e,l>=t||l===32&&(t&4194048)!==0)?e:r}function ii(n,e){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&e)===0}function Cl(n,e){(e&8)!==0&&(e|=e&32);var t=n.entangledLanes;if(t!==0)for(n=n.entanglements,t&=e;0<t;){var a=31-K(t),r=1<<a;e|=n[a],t&=~r}return e}function yo(n,e){switch(n){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mr(){var n=Na;return Na<<=1,(Na&62914560)===0&&(Na=4194304),n}function Oa(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ri(n,e){n.pendingLanes|=e,e!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function xo(n,e,t,a,r,l){var s=n.pendingLanes;n.pendingLanes=t,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=t,n.entangledLanes&=t,n.errorRecoveryDisabledLanes&=t,n.shellSuspendCounter=0;var c=n.entanglements,h=n.expirationTimes,S=n.hiddenUpdates;for(t=s&~t;0<t;){var O=31-K(t),C=1<<O;c[O]=0,h[O]=-1;var x=S[O];if(x!==null)for(S[O]=null,O=0;O<x.length;O++){var N=x[O];N!==null&&(N.lane&=-536870913)}t&=~C}a!==0&&Rl(n,a,0),l!==0&&r===0&&n.tag!==0&&(n.suspendedLanes|=l&~(s&~e))}function Rl(n,e,t){n.pendingLanes|=e,n.suspendedLanes&=~e;var a=31-K(e);n.entangledLanes|=e,n.entanglements[a]=n.entanglements[a]|1073741824|t&261930}function Lt(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var a=31-K(t),r=1<<a;r&e|n[a]&e&&(n[a]|=e),t&=~r}}function Cr(n,e){var t=e&-e;return t=(t&42)!==0?1:Mi(t),(t&(n.suspendedLanes|e))!==0?0:t}function Mi(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Rr(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Ll(){var n=fn.p;return n!==0?n:(n=window.event,n===void 0?32:og(n.type))}function Dl(n,e){var t=fn.p;try{return fn.p=n,e()}finally{fn.p=t}}var at=Math.random().toString(36).slice(2),Me="__reactFiber$"+at,U="__reactProps$"+at,rn="__reactContainer$"+at,Rn="__reactEvents$"+at,ie="__reactListeners$"+at,ye="__reactHandles$"+at,it="__reactResources$"+at,rt="__reactMarker$"+at,aa="__reactLoad$"+at;function Re(n){delete n[Me],delete n[U],delete n[ie],delete n[ye]}function Le(n){var e;if(e=n[Me])return e;for(var t=n.parentNode;t;){if(e=t[rn]||t[Me]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Ym(n);n!==null;){if(t=n[Me])return t;n=Ym(n)}return e}n=t,t=n.parentNode}return null}function ia(n){if(n=n[Me]||n[rn]){var e=n.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return n}return null}function Aa(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n.stateNode;throw Error(d(33))}function ra(n){var e=n[it];return e||(e=n[it]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Te(n){n[rt]=!0}function zl(n){n[aa]=void 0}var Bl=new Set,Ul={};function St(n,e){la(n,e),la(n+"Capture",e)}function la(n,e){for(Ul[n]=e,n=0;n<e.length;n++)Bl.add(e[n])}var Tt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hl={},Ci={};function Sn(n){return ki.call(Ci,n)?!0:ki.call(Hl,n)?!1:Tt.test(n)?Ci[n]=!0:(Hl[n]=!0,!1)}var Gn=!1;function je(){var n=Gn;return Gn=!1,n}function Qn(n,e,t){if(Sn(e))if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":n.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){n.removeAttribute(e);return}}n.setAttribute(e,t)}}function sa(n,e,t){if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttribute(e,t)}}function Ue(n,e,t,a){if(a===null)n.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttributeNS(e,t,a)}}function He(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ri(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function J(n,e,t){var a=Object.getOwnPropertyDescriptor(n.constructor.prototype,e);if(!n.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var r=a.get,l=a.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){t=""+s,l.call(this,s)}}),Object.defineProperty(n,e,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(s){t=""+s},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ln(n){if(!n._valueTracker){var e=Ri(n)?"checked":"value";n._valueTracker=J(n,e,""+n[e])}}function wn(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),a="";return n&&(a=Ri(n)?n.checked?"true":"false":n.value),n=a,n!==t?(e.setValue(n),!0):!1}var Xn=/[\n"\\]/g;function $n(n){return n.replace(Xn,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ft(n,e,t,a,r,l,s,c){n.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?n.type=s:n.removeAttribute("type"),e!=null?s==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+He(e)):n.value!==""+He(e)&&(n.value=""+He(e)):s!=="submit"&&s!=="reset"||n.removeAttribute("value"),e!=null?s==="number"&&n.value==e?Lr(n,He(n.value)):Lr(n,He(e)):t!=null?Lr(n,He(t)):a!=null&&n.removeAttribute("value"),r==null&&l!=null&&(n.defaultChecked=!!l),r!=null&&(n.checked=r&&typeof r!="function"&&typeof r!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?n.name=""+He(c):n.removeAttribute("name")}function ql(n,e,t,a,r,l,s,c){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(n.type=l),e!=null||t!=null){if(!(l!=="submit"&&l!=="reset"||e!=null)){ln(n);return}t=t!=null?""+He(t):"",e=e!=null?""+He(e):t,c||e===n.value||(n.value=e),n.defaultValue=e}a=a??r,a=typeof a!="function"&&typeof a!="symbol"&&!!a,n.checked=c?n.checked:!!a,n.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(n.name=s),ln(n)}function Lr(n,e){n.defaultValue!==""+e&&(n.defaultValue=""+e)}function Li(n,e,t,a){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&a&&(n[t].defaultSelected=!0)}else{for(t=""+He(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,a&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function hd(n,e,t){if(e!=null&&(e=""+He(e),e!==n.value&&(n.value=e),t==null)){n.defaultValue!==e&&(n.defaultValue=e);return}n.defaultValue=t!=null?""+He(t):""}function md(n,e,t,a){if(e==null){if(a!=null){if(t!=null)throw Error(d(92));if(kn(a)){if(1<a.length)throw Error(d(93));a=a[0]}t=a}t==null&&(t=""),e=t}t=He(e),n.defaultValue=t,a=n.textContent,a===t&&a!==""&&a!==null&&(n.value=a),ln(n)}function Di(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var O1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gd(n,e,t){var a=e.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?n.setProperty(e,""):e==="float"?n.cssFloat="":n[e]="":a?n.setProperty(e,t):typeof t!="number"||t===0||O1.has(e)?e==="float"?n.cssFloat=t:n[e]=(""+t).trim():n[e]=t+"px"}function pd(n,e,t){if(e!=null&&typeof e!="object")throw Error(d(62));if(n=n.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="",Gn=!0);for(var r in e)a=e[r],e.hasOwnProperty(r)&&t[r]!==a&&(gd(n,r,a),Gn=!0)}else for(var l in e)e.hasOwnProperty(l)&&gd(n,l,e[l])}function _o(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var A1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),k1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Gl(n){return k1.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function Vt(){}var So=null;function To(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var zi=null,Bi=null;function bd(n){var e=ia(n);if(e&&(n=e.stateNode)){var t=n[U]||null;n:switch(n=e.stateNode,e.type){case"input":if(ft(n,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+$n(""+e)+'"][type="radio"]'),e=0;e<t.length;e++){var a=t[e];if(a!==n&&a.form===n.form){var r=a[U]||null;if(!r)throw Error(d(90));ft(a,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(e=0;e<t.length;e++)a=t[e],a.form===n.form&&wn(a)}break n;case"textarea":hd(n,t.value,t.defaultValue);break n;case"select":e=t.value,e!=null&&Li(n,!!t.multiple,e,!1)}}}var jo=!1;function vd(n,e,t){if(jo)return n(e,t);jo=!0;try{var a=n(e);return a}finally{if(jo=!1,(zi!==null||Bi!==null)&&(Gs(),zi&&(e=zi,n=Bi,Bi=zi=null,bd(e),n)))for(e=0;e<n.length;e++)bd(n[e])}}function Dr(n,e){var t=n.stateNode;if(t===null)return null;var a=t[U]||null;if(a===null)return null;t=a[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(n=n.type,a=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!a;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(d(231,e,typeof t));return t}var oa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wo=!1;if(oa)try{var zr={};Object.defineProperty(zr,"passive",{get:function(){wo=!0}}),window.addEventListener("test",zr,zr),window.removeEventListener("test",zr,zr)}catch{wo=!1}var ka=null,No=null,Yl=null;function yd(){if(Yl)return Yl;var n,e=No,t=e.length,a,r="value"in ka?ka.value:ka.textContent,l=r.length;for(n=0;n<t&&e[n]===r[n];n++);var s=t-n;for(a=1;a<=s&&e[t-a]===r[l-a];a++);return Yl=r.slice(n,1<a?1-a:void 0)}function Il(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Vl(){return!0}function xd(){return!1}function Ze(n){function e(t,a,r,l,s){this._reactName=t,this._targetInst=r,this.type=a,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var c in n)n.hasOwnProperty(c)&&(t=n[c],this[c]=t?t(l):l[c]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Vl:xd,this.isPropagationStopped=xd,this}return on(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Vl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Vl)},persist:function(){},isPersistent:Vl}),e}var Ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kl=Ze(Ma),Br=on({},Ma,{view:0,detail:0}),M1=Ze(Br),Eo,Oo,Ur,Ql=on({},Br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ko,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ur&&(Ur&&n.type==="mousemove"?(Eo=n.screenX-Ur.screenX,Oo=n.screenY-Ur.screenY):Oo=Eo=0,Ur=n),Eo)},movementY:function(n){return"movementY"in n?n.movementY:Oo}}),_d=Ze(Ql),C1=on({},Ql,{dataTransfer:0}),R1=Ze(C1),L1=on({},Br,{relatedTarget:0}),Ao=Ze(L1),D1=on({},Ma,{animationName:0,elapsedTime:0,pseudoElement:0}),z1=Ze(D1),B1=on({},Ma,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),U1=Ze(B1),H1=on({},Ma,{data:0}),Sd=Ze(H1),q1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},G1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function I1(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Y1[n])?!!e[n]:!1}function ko(){return I1}var V1=on({},Br,{key:function(n){if(n.key){var e=q1[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Il(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?G1[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ko,charCode:function(n){return n.type==="keypress"?Il(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Il(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),K1=Ze(V1),Q1=on({},Ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=Ze(Q1),X1=on({},Ma,{submitter:0}),J1=Ze(X1),Z1=on({},Br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ko}),P1=Ze(Z1),F1=on({},Ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),W1=Ze(F1),$1=on({},Ql,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ny=Ze($1),ey=on({},Ma,{newState:0,oldState:0,source:0}),ty=Ze(ey),ay=[9,13,27,32],Mo=oa&&"CompositionEvent"in window,Hr=null;oa&&"documentMode"in document&&(Hr=document.documentMode);var iy=oa&&"TextEvent"in window&&!Hr,jd=oa&&(!Mo||Hr&&8<Hr&&11>=Hr),wd=" ",Nd=!1;function Ed(n,e){switch(n){case"keyup":return ay.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Od(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ui=!1;function ry(n,e){switch(n){case"compositionend":return Od(e);case"keypress":return e.which!==32?null:(Nd=!0,wd);case"textInput":return n=e.data,n===wd&&Nd?null:n;default:return null}}function ly(n,e){if(Ui)return n==="compositionend"||!Mo&&Ed(n,e)?(n=yd(),Yl=No=ka=null,Ui=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return jd&&e.locale!=="ko"?null:e.data;default:return null}}var sy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ad(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!sy[n.type]:e==="textarea"}function kd(n,e,t,a){zi?Bi?Bi.push(a):Bi=[a]:zi=a,e=Xs(e,"onChange"),0<e.length&&(t=new Kl("onChange","change",null,t,a),n.push({event:t,listeners:e}))}var qr=null,Gr=null;function oy(n){vm(n,0)}function Xl(n){var e=Aa(n);if(wn(e))return n}function Md(n,e){if(n==="change")return e}var Cd=!1;if(oa){var Co;if(oa){var Ro="oninput"in document;if(!Ro){var Rd=document.createElement("div");Rd.setAttribute("oninput","return;"),Ro=typeof Rd.oninput=="function"}Co=Ro}else Co=!1;Cd=Co&&(!document.documentMode||9<document.documentMode)}function Ld(){qr&&(qr.detachEvent("onpropertychange",Dd),Gr=qr=null)}function Dd(n){if(n.propertyName==="value"&&Xl(Gr)){var e=[];kd(e,Gr,n,To(n)),vd(oy,e)}}function cy(n,e,t){n==="focusin"?(Ld(),qr=e,Gr=t,qr.attachEvent("onpropertychange",Dd)):n==="focusout"&&Ld()}function uy(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Xl(Gr)}function dy(n,e){if(n==="click")return Xl(e)}function fy(n,e){if(n==="input"||n==="change")return Xl(e)}function hy(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ht=typeof Object.is=="function"?Object.is:hy;function Yr(n,e){if(ht(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),a=Object.keys(e);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var r=t[a];if(!ki.call(e,r)||!ht(n[r],e[r]))return!1}return!0}function Lo(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function zd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Bd(n,e){var t=zd(n);n=0;for(var a;t;){if(t.nodeType===3){if(a=n+t.textContent.length,n<=e&&a>=e)return{node:t,offset:e-n};n=a}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=zd(t)}}function Ud(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Ud(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Hd(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var e=Lo(n.document);e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Lo(n.document)}return e}function Do(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}var my=oa&&"documentMode"in document&&11>=document.documentMode,Hi=null,zo=null,Ir=null,Bo=!1;function qd(n,e,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Bo||Hi==null||Hi!==Lo(a)||(a=Hi,"selectionStart"in a&&Do(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ir&&Yr(Ir,a)||(Ir=a,a=Xs(zo,"onSelect"),0<a.length&&(e=new Kl("onSelect","select",null,e,t),n.push({event:e,listeners:a}),e.target=Hi)))}function li(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var qi={animationend:li("Animation","AnimationEnd"),animationiteration:li("Animation","AnimationIteration"),animationstart:li("Animation","AnimationStart"),transitionrun:li("Transition","TransitionRun"),transitionstart:li("Transition","TransitionStart"),transitioncancel:li("Transition","TransitionCancel"),transitionend:li("Transition","TransitionEnd")},Uo={},Gd={};oa&&(Gd=document.createElement("div").style,"AnimationEvent"in window||(delete qi.animationend.animation,delete qi.animationiteration.animation,delete qi.animationstart.animation),"TransitionEvent"in window||delete qi.transitionend.transition);function si(n){if(Uo[n])return Uo[n];if(!qi[n])return n;var e=qi[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Gd)return Uo[n]=e[t];return n}var Yd=si("animationend"),Id=si("animationiteration"),Vd=si("animationstart"),gy=si("transitionrun"),py=si("transitionstart"),by=si("transitioncancel"),Kd=si("transitionend"),Qd=new Map,Ho="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ho.push("scrollEnd");function Dt(n,e){Qd.set(n,e),St(e,[n])}var vy=0;function ca(n,e){if(n.name!=null&&n.name!=="auto")return n.name;if(e.autoName!==null)return e.autoName;n=Ht.identifierPrefix;var t=vy++;return n="_"+n+"t_"+t.toString(32)+"_",e.autoName=n}function Xd(n){if(n==null||typeof n=="string")return n;var e=null,t=lr;if(t!==null)for(var a=0;a<t.length;a++){var r=n[t[a]];if(r!=null){if(r==="none")return"none";e=e==null?r:e+(" "+r)}}return e??n.default}function ua(n,e){return n=Xd(n),e=Xd(e),e==null?n==="auto"?null:n:e==="auto"?null:e}var Jl=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},jt=[],Gi=0,qo=0;function Zl(){for(var n=Gi,e=qo=Gi=0;e<n;){var t=jt[e];jt[e++]=null;var a=jt[e];jt[e++]=null;var r=jt[e];jt[e++]=null;var l=jt[e];if(jt[e++]=null,a!==null&&r!==null){var s=a.pending;s===null?r.next=r:(r.next=s.next,s.next=r),a.pending=r}l!==0&&Jd(t,r,l)}}function Pl(n,e,t,a){jt[Gi++]=n,jt[Gi++]=e,jt[Gi++]=t,jt[Gi++]=a,qo|=a,n.lanes|=a,n=n.alternate,n!==null&&(n.lanes|=a)}function Go(n,e,t,a){return Pl(n,e,t,a),Fl(n)}function oi(n,e){return Pl(n,null,null,e),Fl(n)}function Jd(n,e,t){n.lanes|=t;var a=n.alternate;a!==null&&(a.lanes|=t);for(var r=!1,l=n.return;l!==null;)l.childLanes|=t,a=l.alternate,a!==null&&(a.childLanes|=t),l.tag===22&&(n=l.stateNode,n===null||n._visibility&1||(r=!0)),n=l,l=l.return;return n.tag===3?(l=n.stateNode,r&&e!==null&&(r=31-K(t),n=l.hiddenUpdates,a=n[r],a===null?n[r]=[e]:a.push(e),e.lane=t|536870912),l):null}function Fl(n){if(50<dl)throw dl=0,qs=null,Error(d(185));for(var e=n.return;e!==null;)n=e,e=n.return;return n.tag===3?n.stateNode:null}var Yi={};function yy(n,e,t,a){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(n,e,t,a){return new yy(n,e,t,a)}function Yo(n){return n=n.prototype,!(!n||!n.isReactComponent)}function da(n,e){var t=n.alternate;return t===null?(t=lt(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&1206910976,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t.refCleanup=n.refCleanup,t}function Zd(n,e){n.flags&=1206910978;var t=n.alternate;return t===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,n.type=t.type,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n}function Wl(n,e,t,a,r,l){var s=0;if(a=n,typeof a=="function")Yo(a)&&(s=1);else if(typeof a=="string")s=X0(n,t,_t.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(a){case ue:return n=lt(31,t,e,r),n.elementType=ue,n.lanes=l,n;case Wn:return ci(t.children,r,l,e);case de:s=8,r|=24;break;case Qe:return n=lt(12,t,e,r|2),n.elementType=Qe,n.lanes=l,n;case un:return n=lt(13,t,e,r),n.elementType=un,n.lanes=l,n;case F:return n=lt(19,t,e,r),n.elementType=F,n.lanes=l,n;case ve:case y:return n=r|32,n=lt(30,t,e,n),n.elementType=y,n.lanes=l,n.stateNode={autoName:null,paired:null,clones:null,ref:null},n;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case fe:s=10;break n;case Ae:s=9;break n;case V:s=11;break n;case Cn:s=14;break n;case jn:s=16,a=null;break n}s=29,t=Error(d(130,n===null?"null":typeof n,"")),a=null}return e=lt(s,t,e,r),e.elementType=n,e.type=a,e.lanes=l,e}function ci(n,e,t,a){return n=lt(7,n,a,e),n.lanes=t,n}function Io(n,e,t){return n=lt(6,n,null,e),n.lanes=t,n}function Pd(n){var e=lt(18,null,null,0);return e.stateNode=n,e}function Vo(n,e,t){return e=lt(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}var Fd=new WeakMap;function wt(n,e){if(typeof n=="object"&&n!==null){var t=Fd.get(n);return t!==void 0?t:(e={value:n,source:e,stack:Al(e)},Fd.set(n,e),e)}return{value:n,source:e,stack:Al(e)}}var Ii=[],Vi=0,$l=null,Vr=0,Nt=[],Et=0,Ca=null,Kt=1,Qt="";function fa(n,e){Ii[Vi++]=Vr,Ii[Vi++]=$l,$l=n,Vr=e}function Wd(n,e,t){Nt[Et++]=Kt,Nt[Et++]=Qt,Nt[Et++]=Ca,Ca=n;var a=Kt;n=Qt;var r=32-K(a)-1;a&=~(1<<r),t+=1;var l=32-K(e)+r;if(30<l){var s=r-r%5;l=(a&(1<<s)-1).toString(32),a>>=s,r-=s,Kt=1<<32-K(e)+r|t<<r|a,Qt=l+n}else Kt=1<<l|t<<r|a,Qt=n}function ns(n){n.return!==null&&(fa(n,1),Wd(n,1,0))}function Ko(n){for(;n===$l;)$l=Ii[--Vi],Ii[Vi]=null,Vr=Ii[--Vi],Ii[Vi]=null;for(;n===Ca;)Ca=Nt[--Et],Nt[Et]=null,Qt=Nt[--Et],Nt[Et]=null,Kt=Nt[--Et],Nt[Et]=null}function $d(n,e){Nt[Et++]=Kt,Nt[Et++]=Qt,Nt[Et++]=Ca,Kt=e.id,Qt=e.overflow,Ca=n}var De=null,oe=null,Mn=!1,Ra=null,Ot=!1,Qo=Error(d(519));function La(n){var e=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Kr(wt(e,n)),Qo}function nf(n){var e=n.stateNode,t=n.type,a=n.memoizedProps;switch(e[Me]=n,e[U]=a,t){case"dialog":zn("cancel",e),zn("close",e);break;case"iframe":case"object":case"embed":zn("load",e);break;case"video":case"audio":for(t=0;t<hl.length;t++)zn(hl[t],e);break;case"source":zn("error",e);break;case"img":case"image":case"link":zn("error",e),zn("load",e);break;case"details":zn("toggle",e);break;case"input":zn("invalid",e),ql(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":zn("invalid",e);break;case"textarea":zn("invalid",e),md(e,a.value,a.defaultValue,a.children)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||e.textContent===""+t||a.suppressHydrationWarning===!0||Sm(e.textContent,t)?(a.popover!=null&&(zn("beforetoggle",e),zn("toggle",e)),a.onScroll!=null&&zn("scroll",e),a.onScrollEnd!=null&&zn("scrollend",e),a.onClick!=null&&(e.onclick=Vt),e=!0):e=!1,e||La(n,!0)}function es(n){for(De=n.return;De;)switch(De.tag){case 5:case 31:case 13:Ot=!1;return;case 27:case 3:Ot=!0;return;default:De=De.return}}function Ki(n){if(n!==De)return!1;if(!Mn)return es(n),Mn=!0,!1;var e=n.tag,t;if((t=e!==3&&e!==27)&&((t=e===5)&&(t=n.type,t=!(t!=="form"&&t!=="button")||Su(n.type,n.memoizedProps)),t=!t),t&&oe&&La(n),es(n),e===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));oe=Gm(n)}else if(e===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));oe=Gm(n)}else e===27?(e=oe,Pa(n.type)?(n=Mu,Mu=null,oe=n):oe=e):oe=De?kt(n.stateNode.nextSibling):null;return!0}function ui(){oe=De=null,Mn=!1}function Xo(){var n=Ra;return n!==null&&(ct===null?ct=n:ct.push.apply(ct,n),Ra=null),n}function Kr(n){Ra===null?Ra=[n]:Ra.push(n)}var Jo=xt(null),di=null,ha=null;function Da(n,e,t){ae(Jo,e._currentValue),e._currentValue=t}function ma(n){n._currentValue=Jo.current,ke(Jo)}function ts(n,e,t){for(;n!==null;){var a=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),n===t)break;n=n.return}}function Zo(n,e,t,a){var r=n.child;for(r!==null&&(r.return=n);r!==null;){var l=r.dependencies;if(l!==null){var s=r.child;l=l.firstContext;n:for(;l!==null;){var c=l;l=r;for(var h=0;h<e.length;h++)if(c.context===e[h]){l.lanes|=t,c=l.alternate,c!==null&&(c.lanes|=t),ts(l.return,t,n),a||(s=null);break n}l=c.next}}else if(r.tag===18){if(s=r.return,s===null)throw Error(d(341));s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),ts(s,t,n),s=null}else r.tag===13&&r.memoizedState!==null&&r.memoizedState.dehydrated===null?(r.lanes|=t,s=r.alternate,s!==null&&(s.lanes|=t),ts(r.return,t,n),s=r.child,s=s!==null?s.sibling:null):s=r.child;if(s!==null)s.return=r;else for(s=r;s!==null;){if(s===n){s=null;break}if(r=s.sibling,r!==null){r.return=s.return,s=r;break}s=s.return}r=s}}function fi(n,e,t,a){n=null;for(var r=e,l=!1;r!==null;){if(!l){if((r.flags&524288)!==0)l=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var s=r.alternate;if(s===null)throw Error(d(387));if(s=s.memoizedProps,s!==null){var c=r.type;ht(r.pendingProps.value,s.value)||(n!==null?n.push(c):n=[c])}}else if(r===Oi.current){if(s=r.alternate,s===null)throw Error(d(387));s.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(n!==null?n.push(pr):n=[pr])}r=r.return}return n!==null&&Zo(e,n,t,a),e.flags|=262144,n!==null}function as(n){for(n=n.firstContext;n!==null;){if(!ht(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function hi(n){di=n,ha=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function qe(n){return ef(di,n)}function is(n,e){return di===null&&hi(n),ef(n,e)}function ef(n,e){var t=e._currentValue;if(e={context:e,memoizedValue:t,next:null},ha===null){if(n===null)throw Error(d(308));ha=e,n.dependencies={lanes:0,firstContext:e},n.flags|=524288}else ha=ha.next=e;return t}var xy=typeof AbortController<"u"?AbortController:function(){var n=[],e=this.signal={aborted:!1,addEventListener:function(t,a){n.push(a)}};this.abort=function(){e.aborted=!0,n.forEach(function(t){return t()})}},_y=o.unstable_scheduleCallback,Sy=o.unstable_NormalPriority,we={$$typeof:fe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Po(){return{controller:new xy,data:new Map,refCount:0}}function Qr(n){n.refCount--,n.refCount===0&&_y(Sy,function(){n.controller.abort()})}function tf(n,e){if((n.pendingLanes&4194048)!==0){var t=n.transitionTypes;for(t===null&&(t=n.transitionTypes=[]),n=0;n<e.length;n++){var a=e[n];t.indexOf(a)===-1&&t.push(a)}}}var Xr=null;function Ty(n){var e=n.transitionTypes;return n.transitionTypes=null,e}var Jr=null,Fo=0,mi=0,Qi=null;function jy(n,e){if(Jr===null){var t=Jr=[];Fo=0,mi=hu(),Qi={status:"pending",value:void 0,then:function(a){t.push(a)}}}return Fo++,e.then(af,af),e}function af(){if(--Fo===0&&(Xr=null,Jr!==null)){Qi!==null&&(Qi.status="fulfilled");var n=Jr;Jr=null,mi=0,Qi=null;for(var e=0;e<n.length;e++)(0,n[e])()}}function wy(n,e){var t=[],a={status:"pending",value:null,reason:null,then:function(r){t.push(r)}};return n.then(function(){a.status="fulfilled",a.value=e;for(var r=0;r<t.length;r++)(0,t[r])(e)},function(r){for(a.status="rejected",a.reason=r,r=0;r<t.length;r++)(0,t[r])(void 0)}),a}var rf=tn.S;tn.S=function(n,e){if(Fh=Xe(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&jy(n,e),Xr!==null)for(var t=ur;t!==null;)tf(t,Xr),t=t.next;if(t=n.types,t!==null){for(var a=ur;a!==null;)tf(a,t),a=a.next;if(mi!==0){a=Xr,a===null&&(a=Xr=[]);for(var r=0;r<t.length;r++){var l=t[r];a.indexOf(l)===-1&&a.push(l)}}}rf!==null&&rf(n,e)};var gi=xt(null);function Wo(){var n=gi.current;return n!==null?n:se.pooledCache}function rs(n,e){e===null?ae(gi,gi.current):ae(gi,e.pool)}function lf(){var n=Wo();return n===null?null:{parent:we._currentValue,pool:n}}var Xi=Error(d(460)),$o=Error(d(474)),ls=Error(d(542)),ss={then:function(){}};function sf(n){return n=n.status,n==="fulfilled"||n==="rejected"}function of(n,e,t){switch(t=n[t],t===void 0?n.push(e):t!==e&&(e.then(Vt,Vt),e=t),e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,uf(n),n===void 0&&!("reason"in e)?Error(d(600)):n;default:if(typeof e.status=="string")e.then(Vt,Vt);else{if(n=se,n!==null&&100<n.shellSuspendCounter)throw Error(d(482));n=e,n.status="pending",n.then(function(a){if(e.status==="pending"){var r=e;r.status="fulfilled",r.value=a}},function(a){if(e.status==="pending"){var r=e;r.status="rejected",r.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,uf(n),n}throw bi=e,Xi}}function pi(n){try{var e=n._init;return e(n._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(bi=t,Xi):t}}var bi=null;function cf(){if(bi===null)throw Error(d(459));var n=bi;return bi=null,n}function uf(n){if(n===Xi||n===ls)throw Error(d(483))}var Ji=null,Zr=0;function os(n){var e=Zr;return Zr+=1,Ji===null&&(Ji=[]),of(Ji,n,e)}function za(n,e){e=e.props.ref,n.ref=e!==void 0?e:null}function cs(n,e){throw e.$$typeof===bn?Error(d(525)):(n=Object.prototype.toString.call(e),Error(d(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)))}function df(n){function e(_,b){if(n){var w=_.deletions;w===null?(_.deletions=[b],_.flags|=16):w.push(b)}}function t(_,b){if(!n)return null;for(;b!==null;)e(_,b),b=b.sibling;return null}function a(_){for(var b=new Map;_!==null;)_.key===null?b.set(_.index,_):b.set(_.key,_),_=_.sibling;return b}function r(_,b){return _=da(_,b),_.index=0,_.sibling=null,_}function l(_,b,w){return _.index=w,n?(w=_.alternate,w!==null?(w=w.index,w<b?(_.flags|=2,b):w):(_.flags|=134217730,b)):(_.flags|=1048576,b)}function s(_){return n&&_.alternate===null&&(_.flags|=134217730),_}function c(_,b,w,k){return b===null||b.tag!==6?(b=Io(w,_.mode,k),b.return=_,b):(b=r(b,w),b.return=_,b)}function h(_,b,w,k){var nn=w.type;return nn===Wn?(_=O(_,b,w.props.children,k,w.key),za(_,w),_):b!==null&&(b.elementType===nn||typeof nn=="object"&&nn!==null&&nn.$$typeof===jn&&pi(nn)===b.type)?(b=r(b,w.props),za(b,w),b.return=_,b):(b=Wl(w.type,w.key,w.props,null,_.mode,k),za(b,w),b.return=_,b)}function S(_,b,w,k){return b===null||b.tag!==4||b.stateNode.containerInfo!==w.containerInfo||b.stateNode.implementation!==w.implementation?(b=Vo(w,_.mode,k),b.return=_,b):(b=r(b,w.children||[]),b.return=_,b)}function O(_,b,w,k,nn){return b===null||b.tag!==7?(b=ci(w,_.mode,k,nn),b.return=_,b):(b=r(b,w),b.return=_,b)}function C(_,b,w){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=Io(""+b,_.mode,w),b.return=_,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case An:return w=Wl(b.type,b.key,b.props,null,_.mode,w),za(w,b),w.return=_,w;case Tn:return b=Vo(b,_.mode,w),b.return=_,b;case jn:return b=pi(b),C(_,b,w)}if(kn(b)||W(b))return b=ci(b,_.mode,w,null),b.return=_,b;if(typeof b.then=="function")return C(_,os(b),w);if(b.$$typeof===fe)return C(_,is(_,b),w);cs(_,b)}return null}function x(_,b,w,k){var nn=b!==null?b.key:null;if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return nn!==null?null:c(_,b,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case An:return w.key===nn?h(_,b,w,k):null;case Tn:return w.key===nn?S(_,b,w,k):null;case jn:return w=pi(w),x(_,b,w,k)}if(kn(w)||W(w))return nn!==null?null:O(_,b,w,k,null);if(typeof w.then=="function")return x(_,b,os(w),k);if(w.$$typeof===fe)return x(_,b,is(_,w),k);cs(_,w)}return null}function N(_,b,w,k,nn){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return _=_.get(w)||null,c(b,_,""+k,nn);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case An:return _=_.get(k.key===null?w:k.key)||null,h(b,_,k,nn);case Tn:return _=_.get(k.key===null?w:k.key)||null,S(b,_,k,nn);case jn:return k=pi(k),N(_,b,w,k,nn)}if(kn(k)||W(k))return _=_.get(w)||null,O(b,_,k,nn,null);if(typeof k.then=="function")return N(_,b,w,os(k),nn);if(k.$$typeof===fe)return N(_,b,w,is(b,k),nn);cs(b,k)}return null}function Q(_,b,w,k){for(var nn=null,Un=null,cn=b,hn=b=0,Oe=null;cn!==null&&hn<w.length;hn++){cn.index>hn?(Oe=cn,cn=null):Oe=cn.sibling;var Yn=x(_,cn,w[hn],k);if(Yn===null){cn===null&&(cn=Oe);break}n&&cn&&Yn.alternate===null&&e(_,cn),b=l(Yn,b,hn),Un===null?nn=Yn:Un.sibling=Yn,Un=Yn,cn=Oe}if(hn===w.length)return t(_,cn),Mn&&fa(_,hn),nn;if(cn===null){for(;hn<w.length;hn++)cn=C(_,w[hn],k),cn!==null&&(b=l(cn,b,hn),Un===null?nn=cn:Un.sibling=cn,Un=cn);return Mn&&fa(_,hn),nn}for(cn=a(cn);hn<w.length;hn++)Oe=N(cn,_,hn,w[hn],k),Oe!==null&&(n&&(Yn=Oe.alternate,Yn!==null&&cn.delete(Yn.key===null?hn:Yn.key)),b=l(Oe,b,hn),Un===null?nn=Oe:Un.sibling=Oe,Un=Oe);return n&&cn.forEach(function(ei){return e(_,ei)}),Mn&&fa(_,hn),nn}function an(_,b,w,k){if(w==null)throw Error(d(151));for(var nn=null,Un=null,cn=b,hn=b=0,Oe=null,Yn=w.next();cn!==null&&!Yn.done;hn++,Yn=w.next()){cn.index>hn?(Oe=cn,cn=null):Oe=cn.sibling;var ei=x(_,cn,Yn.value,k);if(ei===null){cn===null&&(cn=Oe);break}n&&cn&&ei.alternate===null&&e(_,cn),b=l(ei,b,hn),Un===null?nn=ei:Un.sibling=ei,Un=ei,cn=Oe}if(Yn.done)return t(_,cn),Mn&&fa(_,hn),nn;if(cn===null){for(;!Yn.done;hn++,Yn=w.next())Yn=C(_,Yn.value,k),Yn!==null&&(b=l(Yn,b,hn),Un===null?nn=Yn:Un.sibling=Yn,Un=Yn);return Mn&&fa(_,hn),nn}for(cn=a(cn);!Yn.done;hn++,Yn=w.next())Yn=N(cn,_,hn,Yn.value,k),Yn!==null&&(n&&(Oe=Yn.alternate,Oe!==null&&cn.delete(Oe.key===null?hn:Oe.key)),b=l(Yn,b,hn),Un===null?nn=Yn:Un.sibling=Yn,Un=Yn);return n&&cn.forEach(function(rx){return e(_,rx)}),Mn&&fa(_,hn),nn}function En(_,b,w,k){if(typeof w=="object"&&w!==null&&w.type===Wn&&w.key===null&&w.props.ref===void 0&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case An:n:{for(var nn=w.key;b!==null;){if(b.key===nn){if(nn=w.type,nn===Wn){if(b.tag===7){t(_,b.sibling),k=r(b,w.props.children),za(k,w),k.return=_,_=k;break n}}else if(b.elementType===nn||typeof nn=="object"&&nn!==null&&nn.$$typeof===jn&&pi(nn)===b.type){t(_,b.sibling),k=r(b,w.props),za(k,w),k.return=_,_=k;break n}t(_,b);break}else e(_,b);b=b.sibling}w.type===Wn?(k=ci(w.props.children,_.mode,k,w.key),za(k,w),k.return=_,_=k):(k=Wl(w.type,w.key,w.props,null,_.mode,k),za(k,w),k.return=_,_=k)}return s(_);case Tn:n:{for(nn=w.key;b!==null;){if(b.key===nn)if(b.tag===4&&b.stateNode.containerInfo===w.containerInfo&&b.stateNode.implementation===w.implementation){t(_,b.sibling),k=r(b,w.children||[]),k.return=_,_=k;break n}else{t(_,b);break}else e(_,b);b=b.sibling}k=Vo(w,_.mode,k),k.return=_,_=k}return s(_);case jn:return w=pi(w),En(_,b,w,k)}if(kn(w))return Q(_,b,w,k);if(W(w)){if(nn=W(w),typeof nn!="function")throw Error(d(150));return w=nn.call(w),an(_,b,w,k)}if(typeof w.then=="function")return En(_,b,os(w),k);if(w.$$typeof===fe)return En(_,b,is(_,w),k);cs(_,w)}return typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint"?(w=""+w,b!==null&&b.tag===6?(t(_,b.sibling),k=r(b,w),k.return=_,_=k):(t(_,b),k=Io(w,_.mode,k),k.return=_,_=k),s(_)):t(_,b)}return function(_,b,w,k){try{Zr=0;var nn=En(_,b,w,k);return Ji=null,nn}catch(cn){if(cn===Xi||cn===ls)throw cn;var Un=lt(29,cn,null,_.mode);return Un.lanes=k,Un.return=_,Un}}}var vi=df(!0),ff=df(!1),Ba=!1;function nc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ec(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Ua(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Ha(n,e,t){var a=n.updateQueue;if(a===null)return null;if(a=a.shared,(Jn&2)!==0){var r=a.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),a.pending=e,e=Fl(n),Jd(n,null,t),e}return Pl(n,a,e,t),Fl(n)}function Pr(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194048)!==0)){var a=e.lanes;a&=n.pendingLanes,t|=a,e.lanes=t,Lt(n,t)}}function tc(n,e){var t=n.updateQueue,a=n.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var r=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var s={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};l===null?r=l=s:l=l.next=s,t=t.next}while(t!==null);l===null?r=l=e:l=l.next=e}else r=l=e;t={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:l,shared:a.shared,callbacks:a.callbacks},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}var ac=!1;function Fr(){if(ac){var n=Qi;if(n!==null)throw n}}function Wr(n,e,t,a){ac=!1;var r=n.updateQueue;Ba=!1;var l=r.firstBaseUpdate,s=r.lastBaseUpdate,c=r.shared.pending;if(c!==null){r.shared.pending=null;var h=c,S=h.next;h.next=null,s===null?l=S:s.next=S,s=h;var O=n.alternate;O!==null&&(O=O.updateQueue,c=O.lastBaseUpdate,c!==s&&(c===null?O.firstBaseUpdate=S:c.next=S,O.lastBaseUpdate=h))}if(l!==null){var C=r.baseState;s=0,O=S=h=null,c=l;do{var x=c.lane&-536870913,N=x!==c.lane;if(N?(Bn&x)===x:(a&x)===x){x!==0&&x===mi&&(ac=!0),O!==null&&(O=O.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});n:{var Q=n,an=c;x=e;var En=t;switch(an.tag){case 1:if(Q=an.payload,typeof Q=="function"){C=Q.call(En,C,x);break n}C=Q;break n;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=an.payload,x=typeof Q=="function"?Q.call(En,C,x):Q,x==null)break n;C=on({},C,x);break n;case 2:Ba=!0}}x=c.callback,x!==null&&(n.flags|=64,N&&(n.flags|=8192),N=r.callbacks,N===null?r.callbacks=[x]:N.push(x))}else N={lane:x,tag:c.tag,payload:c.payload,callback:c.callback,next:null},O===null?(S=O=N,h=C):O=O.next=N,s|=x;if(c=c.next,c===null){if(c=r.shared.pending,c===null)break;N=c,c=N.next,N.next=null,r.lastBaseUpdate=N,r.shared.pending=null}}while(!0);O===null&&(h=C),r.baseState=h,r.firstBaseUpdate=S,r.lastBaseUpdate=O,l===null&&(r.shared.lanes=0),Qa|=s,n.lanes=s,n.memoizedState=C}}function hf(n,e){if(typeof n!="function")throw Error(d(191,n));n.call(e)}function mf(n,e){var t=n.callbacks;if(t!==null)for(n.callbacks=null,n=0;n<t.length;n++)hf(t[n],e)}var qa=xt(null),us=xt(0);function gf(n,e){n=ya,ae(us,n),ae(qa,e),ya=n|e.baseLanes}function ic(){ae(us,ya),ae(qa,qa.current)}function rc(){ya=us.current,ke(qa),ke(us)}var Ge=xt(null),Je=null;function Ga(n){var e=n.alternate;ae(Ye,Ye.current&1),ae(Ge,n),Je===null&&(e===null||qa.current!==null||e.memoizedState!==null)&&(Je=n)}function lc(n){ae(Ye,Ye.current),ae(Ge,n),Je===null&&(Je=n)}function pf(n){n.tag===22?(ae(Ye,Ye.current),ae(Ge,n),Je===null&&(Je=n)):Ya()}function Ya(){ae(Ye,Ye.current),ae(Ge,Ge.current)}function mt(n){ke(Ge),Je===n&&(Je=null),ke(Ye)}var Ye=xt(0);function $r(n,e){ae(Ge,Ge.current),ae(Ye,e)}function sc(n){ke(Ye),ke(Ge),Je===n&&(Je=null)}function ds(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Au(t)||ku(t)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ga=0,Nn=null,re=null,Ne=null,fs=!1,Zi=!1,yi=!1,hs=0,nl=0,Pi=null,Ny=0;function pe(){throw Error(d(321))}function oc(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ht(n[t],e[t]))return!1;return!0}function cc(n,e,t,a,r,l){return ga=l,Nn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tn.H=n===null||n.memoizedState===null?$f:nh,yi=!1,l=t(a,r),yi=!1,Zi&&(l=vf(e,t,a,r)),bf(n),l}function bf(n){tn.H=xs;var e=re!==null&&re.next!==null;if(ga=0,Ne=re=Nn=null,fs=!1,nl=0,Pi=null,e)throw Error(d(300));n===null||Ee||(n=n.dependencies,n!==null&&as(n)&&(Ee=!0))}function vf(n,e,t,a){Nn=n;var r=0;do{if(Zi&&(Pi=null),nl=0,Zi=!1,25<=r)throw Error(d(301));if(r+=1,Ne=re=null,n.updateQueue!=null){var l=n.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}tn.H=Ly,l=e(t,a)}while(Zi);return l}function Ey(){var n=tn.H,e=n.useState()[0];return e=typeof e.then=="function"?el(e):e,n=n.useState()[0],(re!==null?re.memoizedState:null)!==n&&(Nn.flags|=1024),e}function uc(){var n=hs!==0;return hs=0,n}function dc(n,e,t){e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~t}function fc(n){if(fs){for(n=n.memoizedState;n!==null;){var e=n.queue;e!==null&&(e.pending=null),n=n.next}fs=!1}ga=0,Ne=re=Nn=null,Zi=!1,nl=hs=0,Pi=null}function Pe(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?Nn.memoizedState=Ne=n:Ne=Ne.next=n,Ne}function xe(){if(re===null){var n=Nn.alternate;n=n!==null?n.memoizedState:null}else n=re.next;var e=Ne===null?Nn.memoizedState:Ne.next;if(e!==null)Ne=e,re=n;else{if(n===null)throw Nn.alternate===null?Error(d(467)):Error(d(310));re=n,n={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},Ne===null?Nn.memoizedState=Ne=n:Ne=Ne.next=n}return Ne}function ms(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function el(n){var e=nl;return nl+=1,Pi===null&&(Pi=[]),n=of(Pi,n,e),e=Nn,(Ne===null?e.memoizedState:Ne.next)===null&&(e=e.alternate,tn.H=e===null||e.memoizedState===null?$f:nh),n}function gs(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return el(n);if(n.$$typeof===z)return;if(n.$$typeof===fe)return qe(n)}throw Error(d(438,String(n)))}function hc(n){var e=null,t=Nn.updateQueue;if(t!==null&&(e=t.memoCache),e==null){var a=Nn.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(r){return r.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),t===null&&(t=ms(),Nn.updateQueue=t),t.memoCache=e,t=e.data[e.index],t===void 0)for(t=e.data[e.index]=Array(n),a=0;a<n;a++)t[a]=dt;return e.index++,t}function pa(n,e){return typeof e=="function"?e(n):e}function ps(n){var e=xe();return mc(e,re,n)}function mc(n,e,t){var a=n.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=t;var r=n.baseQueue,l=a.pending;if(l!==null){if(r!==null){var s=r.next;r.next=l.next,l.next=s}e.baseQueue=r=l,a.pending=null}if(l=n.baseState,r===null)n.memoizedState=l;else{e=r.next;var c=s=null,h=null,S=e,O=!1;do{var C=S.lane&-536870913;if(C!==S.lane?(Bn&C)===C:(ga&C)===C){var x=S.revertLane;if(x===0)h!==null&&(h=h.next={lane:0,revertLane:0,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),C===mi&&(O=!0);else if((ga&x)===x){S=S.next,x===mi&&(O=!0);continue}else C={lane:0,revertLane:S.revertLane,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},h===null?(c=h=C,s=l):h=h.next=C,Nn.lanes|=x,Qa|=x;C=S.action,yi&&t(l,C),l=S.hasEagerState?S.eagerState:t(l,C)}else x={lane:C,revertLane:S.revertLane,gesture:S.gesture,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},h===null?(c=h=x,s=l):h=h.next=x,Nn.lanes|=C,Qa|=C;S=S.next}while(S!==null&&S!==e);if(h===null?s=l:h.next=c,!ht(l,n.memoizedState)&&(Ee=!0,O&&(t=Qi,t!==null)))throw t;n.memoizedState=l,n.baseState=s,n.baseQueue=h,a.lastRenderedState=l}return r===null&&(a.lanes=0),[n.memoizedState,a.dispatch]}function gc(n){var e=xe(),t=e.queue;if(t===null)throw Error(d(311));t.lastRenderedReducer=n;var a=t.dispatch,r=t.pending,l=e.memoizedState;if(r!==null){t.pending=null;var s=r=r.next;do l=n(l,s.action),s=s.next;while(s!==r);ht(l,e.memoizedState)||(Ee=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),t.lastRenderedState=l}return[l,a]}function yf(n,e,t){var a=Nn,r=xe(),l=Mn;if(l){if(t===void 0)throw Error(d(407));t=t()}else t=e();var s=!ht((re||r).memoizedState,t);if(s&&(r.memoizedState=t,Ee=!0),r=r.queue,vc(Sf.bind(null,a,r,n),[n]),n=r.getSnapshot!==e||s||Ne!==null&&(Ne.memoizedState.tag&1)!==0,Fi(n?9:8,{destroy:void 0},_f.bind(null,a,r,t,e),null),n){if(a.flags|=2048,se===null)throw Error(d(349));l||(ga&127)!==0||xf(a,e,t)}return t}function xf(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Nn.updateQueue,e===null?(e=ms(),Nn.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function _f(n,e,t,a){e.value=t,e.getSnapshot=a,Tf(e)&&jf(n)}function Sf(n,e,t){return t(function(){Tf(e)&&jf(n)})}function Tf(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ht(n,t)}catch{return!0}}function jf(n){var e=oi(n,2);e!==null&&ut(e,n,2)}function pc(n){var e=Pe();if(typeof n=="function"){var t=n;if(n=t(),yi){$(!0);try{t()}finally{$(!1)}}}return e.memoizedState=e.baseState=n,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:n},e}function wf(n,e,t,a){return n.baseState=t,mc(n,re,typeof a=="function"?a:pa)}function Oy(n,e,t,a,r){if(ys(n))throw Error(d(485));if(n=e.action,n!==null){var l={payload:r,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){l.listeners.push(s)}};tn.T!==null?t(!0):l.isTransition=!1,a(l),t=e.pending,t===null?(l.next=e.pending=l,Nf(e,l)):(l.next=t.next,e.pending=t.next=l)}}function Nf(n,e){var t=e.action,a=e.payload,r=n.state;if(e.isTransition){var l=tn.T,s={};s.types=l!==null?l.types:null,tn.T=s;try{var c=t(r,a),h=tn.S;h!==null&&h(s,c),Ef(n,e,c)}catch(S){bc(n,e,S)}finally{l!==null&&s.types!==null&&(l.types=s.types),tn.T=l}}else try{l=t(r,a),Ef(n,e,l)}catch(S){bc(n,e,S)}}function Ef(n,e,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){Of(n,e,a)},function(a){return bc(n,e,a)}):Of(n,e,t)}function Of(n,e,t){e.status="fulfilled",e.value=t,Af(e),n.state=t,e=n.pending,e!==null&&(t=e.next,t===e?n.pending=null:(t=t.next,e.next=t,Nf(n,t)))}function bc(n,e,t){var a=n.pending;if(n.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=t,Af(e),e=e.next;while(e!==a)}n.action=null}function Af(n){n=n.listeners;for(var e=0;e<n.length;e++)(0,n[e])()}function kf(n,e){return e}function Mf(n,e){if(Mn){var t=se.formState;if(t!==null){n:{var a=Nn;if(Mn){if(oe){e:{for(var r=oe,l=Ot;r.nodeType!==8;){if(!l){r=null;break e}if(r=kt(r.nextSibling),r===null){r=null;break e}}l=r.data,r=l==="F!"||l==="F"?r:null}if(r){oe=kt(r.nextSibling),a=r.data==="F!";break n}}La(a)}a=!1}a&&(e=t[0])}}return t=Pe(),t.memoizedState=t.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kf,lastRenderedState:e},t.queue=a,t=Pf.bind(null,Nn,a),a.dispatch=t,a=pc(!1),l=Tc.bind(null,Nn,!1,a.queue),a=Pe(),r={state:e,dispatch:null,action:n,pending:null},a.queue=r,t=Oy.bind(null,Nn,r,l,t),r.dispatch=t,a.memoizedState=n,[e,t,!1]}function Cf(n){var e=xe();return Rf(e,re,n)}function Rf(n,e,t){if(e=mc(n,e,kf)[0],n=ps(pa)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=el(e)}catch(s){throw s===Xi?ls:s}else a=e;e=xe();var r=e.queue,l=r.dispatch;return t!==e.memoizedState&&(Nn.flags|=2048,Fi(9,{destroy:void 0},Ay.bind(null,r,t),null)),[a,l,n]}function Ay(n,e){n.action=e}function Lf(n){var e=xe(),t=re;if(t!==null)return Rf(e,t,n);xe(),e=e.memoizedState,t=xe();var a=t.queue.dispatch;return t.memoizedState=n,[e,a,!1]}function Fi(n,e,t,a){return n={tag:n,create:t,deps:a,inst:e,next:null},e=Nn.updateQueue,e===null&&(e=ms(),Nn.updateQueue=e),t=e.lastEffect,t===null?e.lastEffect=n.next=n:(a=t.next,t.next=n,n.next=a,e.lastEffect=n),n}function Df(){return xe().memoizedState}function bs(n,e,t,a){var r=Pe();Nn.flags|=n,r.memoizedState=Fi(1|e,{destroy:void 0},t,a===void 0?null:a)}function vs(n,e,t,a){var r=xe();a=a===void 0?null:a;var l=r.memoizedState.inst;re!==null&&a!==null&&oc(a,re.memoizedState.deps)?r.memoizedState=Fi(e,l,t,a):(Nn.flags|=n,r.memoizedState=Fi(1|e,l,t,a))}function zf(n,e){bs(8390656,8,n,e)}function vc(n,e){vs(2048,8,n,e)}function ky(n){Nn.flags|=4;var e=Nn.updateQueue;if(e===null)e=ms(),Nn.updateQueue=e,e.events=[n];else{var t=e.events;t===null?e.events=[n]:t.push(n)}}function Bf(n){var e=xe().memoizedState;return ky({ref:e,nextImpl:n}),function(){if((Jn&2)!==0)throw Error(d(440));return e.impl.apply(void 0,arguments)}}function Uf(n,e){return vs(4,2,n,e)}function Hf(n,e){return vs(4,4,n,e)}function qf(n,e){if(typeof e=="function"){n=n();var t=e(n);return function(){typeof t=="function"?t():e(null)}}if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Gf(n,e,t){t=t!=null?t.concat([n]):null,vs(4,4,qf.bind(null,e,n),t)}function yc(){}function Yf(n,e){var t=xe();e=e===void 0?null:e;var a=t.memoizedState;return e!==null&&oc(e,a[1])?a[0]:(t.memoizedState=[n,e],n)}function If(n,e){var t=xe();e=e===void 0?null:e;var a=t.memoizedState;if(e!==null&&oc(e,a[1]))return a[0];if(a=n(),yi){$(!0);try{n()}finally{$(!1)}}return t.memoizedState=[a,e],a}function xc(n,e,t){return t===void 0||(ga&1073741824)!==0&&(Bn&261930)===0?n.memoizedState=e:(n.memoizedState=t,n=$h(),Nn.lanes|=n,Qa|=n,t)}function Vf(n,e,t,a){return ht(t,e)?t:qa.current!==null?(n=xc(n,t,a),ht(n,e)||(Ee=!0),n):(ga&106)===0||(ga&1073741824)!==0&&(Bn&261930)===0?(Ee=!0,n.memoizedState=t):(n=$h(),Nn.lanes|=n,Qa|=n,e)}function Kf(n,e,t,a,r){var l=fn.p;fn.p=l!==0&&8>l?l:8;var s=tn.T,c={};c.types=s!==null?s.types:null,tn.T=c,Tc(n,!1,e,t);try{var h=r(),S=tn.S;if(S!==null&&S(c,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var O=wy(h,a);tl(n,e,O,vt(n))}else tl(n,e,a,vt(n))}catch(C){tl(n,e,{then:function(){},status:"rejected",reason:C},vt())}finally{fn.p=l,s!==null&&c.types!==null&&(s.types=c.types),tn.T=s}}function My(){}function _c(n,e,t,a){if(n.tag!==5)throw Error(d(476));var r=Qf(n).queue;Kf(n,r,e,et,t===null?My:function(){return Xf(n),t(a)})}function Qf(n){var e=n.memoizedState;if(e!==null)return e;e={memoizedState:et,baseState:et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:et},next:null};var t={};return e.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:t},next:null},n.memoizedState=e,n=n.alternate,n!==null&&(n.memoizedState=e),e}function Xf(n){var e=Qf(n);e.next===null&&(e=n.alternate.memoizedState),tl(n,e.next.queue,{},vt())}function Sc(){return qe(pr)}function Jf(){return xe().memoizedState}function Zf(){return xe().memoizedState}function Cy(n){for(var e=n.return;e!==null;){switch(e.tag){case 24:case 3:var t=vt();n=Ua(t);var a=Ha(e,n,t);a!==null&&(ut(a,e,t),Pr(a,e,t)),e={cache:Po()},n.payload=e;return}e=e.return}}function Ry(n,e,t){var a=vt();t={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},ys(n)?Ff(e,t):(t=Go(n,e,t,a),t!==null&&(ut(t,n,a),Wf(t,e,a)))}function Pf(n,e,t){var a=vt();tl(n,e,t,a)}function tl(n,e,t,a){var r={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(ys(n))Ff(e,r);else{var l=n.alternate;if(n.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var s=e.lastRenderedState,c=l(s,t);if(r.hasEagerState=!0,r.eagerState=c,ht(c,s))return Pl(n,e,r,0),se===null&&Zl(),!1}catch{}if(t=Go(n,e,r,a),t!==null)return ut(t,n,a),Wf(t,e,a),!0}return!1}function Tc(n,e,t,a){if(a={lane:2,revertLane:hu(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ys(n)){if(e)throw Error(d(479))}else e=Go(n,t,a,2),e!==null&&ut(e,n,2)}function ys(n){var e=n.alternate;return n===Nn||e!==null&&e===Nn}function Ff(n,e){Zi=fs=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Wf(n,e,t){if((t&4194048)!==0){var a=e.lanes;a&=n.pendingLanes,t|=a,e.lanes=t,Lt(n,t)}}var xs={readContext:qe,use:gs,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useLayoutEffect:pe,useInsertionEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useSyncExternalStore:pe,useId:pe,useHostTransitionStatus:pe,useFormState:pe,useActionState:pe,useOptimistic:pe,useMemoCache:pe,useCacheRefresh:pe,useEffectEvent:pe},$f={readContext:qe,use:gs,useCallback:function(n,e){return Pe().memoizedState=[n,e===void 0?null:e],n},useContext:qe,useEffect:zf,useImperativeHandle:function(n,e,t){t=t!=null?t.concat([n]):null,bs(4194308,4,qf.bind(null,e,n),t)},useLayoutEffect:function(n,e){return bs(4194308,4,n,e)},useInsertionEffect:function(n,e){bs(4,2,n,e)},useMemo:function(n,e){var t=Pe();e=e===void 0?null:e;var a=n();if(yi){$(!0);try{n()}finally{$(!1)}}return t.memoizedState=[a,e],a},useReducer:function(n,e,t){var a=Pe();if(t!==void 0){var r=t(e);if(yi){$(!0);try{t(e)}finally{$(!1)}}}else r=e;return a.memoizedState=a.baseState=r,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},a.queue=n,n=n.dispatch=Ry.bind(null,Nn,n),[a.memoizedState,n]},useRef:function(n){var e=Pe();return n={current:n},e.memoizedState=n},useState:function(n){n=pc(n);var e=n.queue,t=Pf.bind(null,Nn,e);return e.dispatch=t,[n.memoizedState,t]},useDebugValue:yc,useDeferredValue:function(n,e){var t=Pe();return xc(t,n,e)},useTransition:function(){var n=pc(!1);return n=Kf.bind(null,Nn,n.queue,!0,!1),Pe().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,e,t){var a=Nn,r=Pe();if(Mn){if(t===void 0)throw Error(d(407));t=t()}else{if(t=e(),se===null)throw Error(d(349));(Bn&127)!==0||xf(a,e,t)}r.memoizedState=t;var l={value:t,getSnapshot:e};return r.queue=l,zf(Sf.bind(null,a,l,n),[n]),a.flags|=2048,Fi(9,{destroy:void 0},_f.bind(null,a,l,t,e),null),t},useId:function(){var n=Pe(),e=se.identifierPrefix;if(Mn){var t=Qt,a=Kt;t=(a&~(1<<32-K(a)-1)).toString(32)+t,e="_"+e+"R_"+t,t=hs++,0<t&&(e+="H"+t.toString(32)),e+="_"}else t=Ny++,e="_"+e+"r_"+t.toString(32)+"_";return n.memoizedState=e},useHostTransitionStatus:Sc,useFormState:Mf,useActionState:Mf,useOptimistic:function(n){var e=Pe();e.memoizedState=e.baseState=n;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=t,e=Tc.bind(null,Nn,!0,t),t.dispatch=e,[n,e]},useMemoCache:hc,useCacheRefresh:function(){return Pe().memoizedState=Cy.bind(null,Nn)},useEffectEvent:function(n){var e=Pe(),t={impl:n};return e.memoizedState=t,function(){if((Jn&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}},nh={readContext:qe,use:gs,useCallback:Yf,useContext:qe,useEffect:vc,useImperativeHandle:Gf,useInsertionEffect:Uf,useLayoutEffect:Hf,useMemo:If,useReducer:ps,useRef:Df,useState:function(){return ps(pa)},useDebugValue:yc,useDeferredValue:function(n,e){var t=xe();return Vf(t,re.memoizedState,n,e)},useTransition:function(){var n=ps(pa)[0],e=xe().memoizedState;return[typeof n=="boolean"?n:el(n),e]},useSyncExternalStore:yf,useId:Jf,useHostTransitionStatus:Sc,useFormState:Cf,useActionState:Cf,useOptimistic:function(n,e){var t=xe();return wf(t,re,n,e)},useMemoCache:hc,useCacheRefresh:Zf,useEffectEvent:Bf},Ly={readContext:qe,use:gs,useCallback:Yf,useContext:qe,useEffect:vc,useImperativeHandle:Gf,useInsertionEffect:Uf,useLayoutEffect:Hf,useMemo:If,useReducer:gc,useRef:Df,useState:function(){return gc(pa)},useDebugValue:yc,useDeferredValue:function(n,e){var t=xe();return re===null?xc(t,n,e):Vf(t,re.memoizedState,n,e)},useTransition:function(){var n=gc(pa)[0],e=xe().memoizedState;return[typeof n=="boolean"?n:el(n),e]},useSyncExternalStore:yf,useId:Jf,useHostTransitionStatus:Sc,useFormState:Lf,useActionState:Lf,useOptimistic:function(n,e){var t=xe();return re!==null?wf(t,re,n,e):(t.baseState=n,[n,t.queue.dispatch])},useMemoCache:hc,useCacheRefresh:Zf,useEffectEvent:Bf};function jc(n,e,t,a){e=n.memoizedState,t=t(a,e),t=t==null?e:on({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var wc={enqueueSetState:function(n,e,t){n=n._reactInternals;var a=vt(),r=Ua(a);r.payload=e,t!=null&&(r.callback=t),e=Ha(n,r,a),e!==null&&(ut(e,n,a),Pr(e,n,a))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var a=vt(),r=Ua(a);r.tag=1,r.payload=e,t!=null&&(r.callback=t),e=Ha(n,r,a),e!==null&&(ut(e,n,a),Pr(e,n,a))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=vt(),a=Ua(t);a.tag=2,e!=null&&(a.callback=e),e=Ha(n,a,t),e!==null&&(ut(e,n,t),Pr(e,n,t))}};function eh(n,e,t,a,r,l,s){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(a,l,s):e.prototype&&e.prototype.isPureReactComponent?!Yr(t,a)||!Yr(r,l):!0}function th(n,e,t,a){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,a),e.state!==n&&wc.enqueueReplaceState(e,e.state,null)}function xi(n,e){var t=e;if("ref"in e){t={};for(var a in e)a!=="ref"&&(t[a]=e[a])}if(n=n.defaultProps){t===e&&(t=on({},t));for(var r in n)t[r]===void 0&&(t[r]=n[r])}return t}function ah(n){Jl(n)}function ih(n){console.error(n)}function rh(n){Jl(n)}function _s(n,e){try{var t=n.onUncaughtError;t(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function lh(n,e,t){try{var a=n.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Nc(n,e,t){return t=Ua(t),t.tag=3,t.payload={element:null},t.callback=function(){_s(n,e)},t}function sh(n){return n=Ua(n),n.tag=3,n}function oh(n,e,t,a){var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var l=a.value;n.payload=function(){return r(l)},n.callback=function(){lh(e,t,a)}}var s=t.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){lh(e,t,a),typeof r!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function Dy(n,e,t,a,r){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=t.alternate,e!==null&&fi(e,t,r,!0),t=Ge.current,t!==null){switch(t.tag){case 31:case 13:case 19:return Je===null?Ys():t.alternate===null&&be===0&&(be=3),t.flags&=-257,t.flags|=65536,t.lanes=r,a===ss?t.flags|=16384:(e=t.updateQueue,e===null?t.updateQueue=new Set([a]):e.add(a),uu(n,a,r)),!1;case 22:return t.flags|=65536,a===ss?t.flags|=16384:(e=t.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=e):(t=e.retryQueue,t===null?e.retryQueue=new Set([a]):t.add(a)),uu(n,a,r)),!1}throw Error(d(435,t.tag))}return uu(n,a,r),Ys(),!1}if(Mn)return e=Ge.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=r,a!==Qo&&(n=Error(d(422),{cause:a}),Kr(wt(n,t)))):(a!==Qo&&(e=Error(d(423),{cause:a}),Kr(wt(e,t))),n=n.current.alternate,n.flags|=65536,r&=-r,n.lanes|=r,a=wt(a,t),r=Nc(n.stateNode,a,r),tc(n,r),be!==4&&(be=2)),!1;var l=Error(d(520),{cause:a});if(l=wt(l,t),ul===null?ul=[l]:ul.push(l),be!==4&&(be=2),e===null)return!0;a=wt(a,t),t=e;do{switch(t.tag){case 3:return t.flags|=65536,n=r&-r,t.lanes|=n,n=Nc(t.stateNode,a,n),tc(t,n),!1;case 1:if(e=t.type,l=t.stateNode,(t.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(Xa===null||!Xa.has(l))))return t.flags|=65536,r&=-r,t.lanes|=r,r=sh(r),oh(r,n,t,a),tc(t,r),!1;break;case 22:if(t.memoizedState!==null)return t.flags|=65536,!1}t=t.return}while(t!==null);return!1}var Ec=Error(d(461)),Ee=!1;function Ce(n,e,t,a){e.child=n===null?ff(e,null,t,a):vi(e,n.child,t,a)}function ch(n,e,t,a,r){t=t.render;var l=e.ref;if("ref"in a){var s={};for(var c in a)c!=="ref"&&(s[c]=a[c])}else s=a;return hi(e),a=cc(n,e,t,s,l,r),c=uc(),n!==null&&!Ee?(dc(n,e,r),ba(n,e,r)):(Mn&&c&&ns(e),e.flags|=1,Ce(n,e,a,r),e.child)}function uh(n,e,t,a,r){if(n===null){var l=t.type;return typeof l=="function"&&!Yo(l)&&l.defaultProps===void 0&&t.compare===null?(e.tag=15,e.type=l,dh(n,e,l,a,r)):(n=Wl(t.type,null,a,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(l=n.child,!Dc(n,r)){var s=l.memoizedProps;if(t=t.compare,t=t!==null?t:Yr,t(s,a)&&n.ref===e.ref)return ba(n,e,r)}return e.flags|=1,n=da(l,a),n.ref=e.ref,n.return=e,e.child=n}function dh(n,e,t,a,r){if(n!==null){var l=n.memoizedProps;if(Yr(l,a)&&n.ref===e.ref)if(Ee=!1,e.pendingProps=a=l,Dc(n,r))(n.flags&131072)!==0&&(Ee=!0);else return e.lanes=n.lanes,ba(n,e,r)}return Oc(n,e,t,a,r)}function fh(n,e,t,a){var r=a.children,l=n!==null?n.memoizedState:null;if(n===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(l=l!==null?l.baseLanes|t:t,n!==null){for(a=e.child=n.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;a=r&~l}else a=0,e.child=null;return hh(n,e,l,t,a)}if((t&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},n!==null&&rs(e,l!==null?l.cachePool:null),l!==null?gf(e,l):ic(),pf(e);else return a=e.lanes=536870912,hh(n,e,l!==null?l.baseLanes|t:t,t,a)}else l!==null?(rs(e,l.cachePool),gf(e,l),Ya(),e.memoizedState=null):(n!==null&&rs(e,null),ic(),Ya());return Ce(n,e,r,t),e.child}function al(n,e){return n!==null&&n.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function hh(n,e,t,a,r){var l=Wo();return l=l===null?null:{parent:we._currentValue,pool:l},e.memoizedState={baseLanes:t,cachePool:l},n!==null&&rs(e,null),ic(),pf(e),n!==null&&fi(n,e,a,!0),e.childLanes=r,null}function Ss(n,e){return e=Ts({mode:e.mode,children:e.children},n.mode),e.ref=n.ref,n.child=e,e.return=n,e}function mh(n,e,t){return vi(e,n.child,null,t),n=Ss(e,e.pendingProps),n.flags|=2,mt(e),e.memoizedState=null,n}function zy(n,e,t){var a=e.pendingProps,r=(e.flags&128)!==0;if(e.flags&=-129,n===null){if(Mn){if(a.mode==="hidden")return n=Ss(e,a),e.lanes=536870912,n.memoizedState={baseLanes:0,cachePool:null},al(null,n);if(lc(e),(n=oe)?(n=qm(n,Ot),n=n!==null&&n.data==="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:Ca!==null?{id:Kt,overflow:Qt}:null,retryLane:536870912,hydrationErrors:null},t=Pd(n),t.return=e,e.child=t,De=e,oe=null)):n=null,n===null)throw La(e);return e.lanes=536870912,null}return Ss(e,a)}var l=n.memoizedState;if(l!==null){var s=l.dehydrated;if(lc(e),r)if(e.flags&256)e.flags&=-257,e=mh(n,e,t);else if(e.memoizedState!==null)e.child=n.child,e.flags|=128,e=null;else throw Error(d(558));else if(Ee||fi(n,e,t,!1),r=(t&n.childLanes)!==0,Ee||r){if(qa.current===null){if(a=se,a!==null&&(s=Cr(a,t),s!==0&&s!==l.retryLane))throw l.retryLane=s,oi(n,s),ut(a,n,s),Ec;Ys()}e=mh(n,e,t)}else n=l.treeContext,oe=kt(s.nextSibling),De=e,Mn=!0,Ra=null,Ot=!1,n!==null&&$d(e,n),e=Ss(e,a),e.flags|=134221824;return e}return n=da(n.child,{mode:a.mode,children:a.children}),n.ref=e.ref,e.child=n,n.return=e,n}function Wi(n,e){var t=e.ref;if(t===null)n!==null&&n.ref!==null&&(e.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(d(284));(n===null||n.ref!==t)&&(e.flags|=4194816)}}function Oc(n,e,t,a,r){return hi(e),t=cc(n,e,t,a,void 0,r),a=uc(),n!==null&&!Ee?(dc(n,e,r),ba(n,e,r)):(Mn&&a&&ns(e),e.flags|=1,Ce(n,e,t,r),e.child)}function gh(n,e,t,a,r,l){return hi(e),e.updateQueue=null,t=vf(e,a,t,r),bf(n),a=uc(),n!==null&&!Ee?(dc(n,e,l),ba(n,e,l)):(Mn&&a&&ns(e),e.flags|=1,Ce(n,e,t,l),e.child)}function ph(n,e,t,a,r){if(hi(e),e.stateNode===null){var l=Yi,s=t.contextType;typeof s=="object"&&s!==null&&(l=qe(s)),l=new t(a,l),e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=wc,e.stateNode=l,l._reactInternals=e,l=e.stateNode,l.props=a,l.state=e.memoizedState,l.refs={},nc(e),s=t.contextType,l.context=typeof s=="object"&&s!==null?qe(s):Yi,l.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(jc(e,t,s,a),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(s=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),s!==l.state&&wc.enqueueReplaceState(l,l.state,null),Wr(e,a,l,r),Fr(),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(n===null){l=e.stateNode;var c=e.memoizedProps,h=xi(t,c);l.props=h;var S=l.context,O=t.contextType;s=Yi,typeof O=="object"&&O!==null&&(s=qe(O));var C=t.getDerivedStateFromProps;O=typeof C=="function"||typeof l.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,O||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c||S!==s)&&th(e,l,a,s),Ba=!1;var x=e.memoizedState;l.state=x,Wr(e,a,l,r),Fr(),S=e.memoizedState,c||x!==S||Ba?(typeof C=="function"&&(jc(e,t,C,a),S=e.memoizedState),(h=Ba||eh(e,t,h,a,x,S,s))?(O||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=S),l.props=a,l.state=S,l.context=s,a=h):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{l=e.stateNode,ec(n,e),s=e.memoizedProps,O=xi(t,s),l.props=O,C=e.pendingProps,x=l.context,S=t.contextType,h=Yi,typeof S=="object"&&S!==null&&(h=qe(S)),c=t.getDerivedStateFromProps,(S=typeof c=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==C||x!==h)&&th(e,l,a,h),Ba=!1,x=e.memoizedState,l.state=x,Wr(e,a,l,r),Fr();var N=e.memoizedState;s!==C||x!==N||Ba||n!==null&&n.dependencies!==null&&as(n.dependencies)?(typeof c=="function"&&(jc(e,t,c,a),N=e.memoizedState),(O=Ba||eh(e,t,O,a,x,N,h)||n!==null&&n.dependencies!==null&&as(n.dependencies))?(S||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,N,h),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,N,h)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===n.memoizedProps&&x===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===n.memoizedProps&&x===n.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=N),l.props=a,l.state=N,l.context=h,a=O):(typeof l.componentDidUpdate!="function"||s===n.memoizedProps&&x===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===n.memoizedProps&&x===n.memoizedState||(e.flags|=1024),a=!1)}return l=a,Wi(n,e),a=(e.flags&128)!==0,l||a?(l=e.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:l.render(),e.flags|=1,n!==null&&a?(e.child=vi(e,n.child,null,r),e.child=vi(e,null,t,r)):Ce(n,e,t,r),e.memoizedState=l.state,n=e.child):n=ba(n,e,r),n}function bh(n,e,t,a){return ui(),e.flags|=256,Ce(n,e,t,a),e.child}var Ac={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function kc(n){return{baseLanes:n,cachePool:lf()}}function Mc(n,e,t){return n=n!==null?n.childLanes&~t:0,e&&(n|=bt),n}function vh(n,e,t){var a=e.pendingProps,r=!1,l=(e.flags&128)!==0,s;if((s=l)||(s=n!==null&&n.memoizedState===null?!1:(Ye.current&2)!==0),s&&(r=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,n===null){if(Mn){if(r?Ga(e):Ya(),(n=oe)?(n=qm(n,Ot),n=n!==null&&n.data!=="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:Ca!==null?{id:Kt,overflow:Qt}:null,retryLane:536870912,hydrationErrors:null},t=Pd(n),t.return=e,e.child=t,De=e,oe=null)):n=null,n===null)throw La(e);return ku(n)?e.lanes=32:e.lanes=536870912,null}return l=a.children,a=a.fallback,r?(Ya(),r=e.mode,l=Ts({mode:"hidden",children:l},r),a=ci(a,r,t,null),l.return=e,a.return=e,l.sibling=a,e.child=l,a=e.child,a.memoizedState=kc(t),a.childLanes=Mc(n,s,t),e.memoizedState=Ac,al(null,a)):(Ga(e),Cc(e,l))}var c=n.memoizedState;if(c!==null){var h=c.dehydrated;if(h!==null)return By(n,e,l,s,a,h,c,t)}return r?(Ya(),r=a.fallback,l=e.mode,c=n.child,h=c.sibling,a=da(c,{mode:"hidden",children:a.children}),a.subtreeFlags=c.subtreeFlags&1206910976,h!==null?r=da(h,r):(r=ci(r,l,t,null),r.flags|=2),r.return=e,a.return=e,a.sibling=r,e.child=a,al(null,a),a=e.child,r=n.child.memoizedState,r===null?r=kc(t):(l=r.cachePool,l!==null?(c=we._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=lf(),r={baseLanes:r.baseLanes|t,cachePool:l}),a.memoizedState=r,a.childLanes=Mc(n,s,t),e.memoizedState=Ac,al(n.child,a)):(Ga(e),t=n.child,n=t.sibling,t=da(t,{mode:"visible",children:a.children}),t.return=e,t.sibling=null,n!==null&&(s=e.deletions,s===null?(e.deletions=[n],e.flags|=16):s.push(n)),e.child=t,e.memoizedState=null,t)}function Cc(n,e){return e=Ts({mode:"visible",children:e},n.mode),e.return=n,n.child=e}function Ts(n,e){return n=lt(22,n,null,e),n.lanes=0,n}function js(n,e,t){return vi(e,n.child,null,t),n=Cc(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function By(n,e,t,a,r,l,s,c){if(t)return e.flags&256?(Ga(e),e.flags&=-257,js(n,e,c)):e.memoizedState!==null?(Ya(),e.child=n.child,e.flags|=128,null):(Ya(),l=r.fallback,s=e.mode,r=Ts({mode:"visible",children:r.children},s),l=ci(l,s,c,null),l.flags|=2,r.return=e,l.return=e,r.sibling=l,e.child=r,vi(e,n.child,null,c),r=e.child,r.memoizedState=kc(c),r.childLanes=Mc(n,a,c),e.memoizedState=Ac,al(null,r));if(Ga(e),ku(l)){if(a=l.nextSibling&&l.nextSibling.dataset,a)var h=a.dgst;return a=h,a!==""&&(r=Error(d(419)),r.stack="",r.digest=a,Kr({value:r,source:null,stack:null})),js(n,e,c)}if(Ee||fi(n,e,c,!1),a=(c&n.childLanes)!==0,Ee||a){if(qa.current!==null)return js(n,e,c);if(a=se,a!==null&&(r=Cr(a,c),r!==0&&r!==s.retryLane))throw s.retryLane=r,oi(n,r),ut(a,n,r),Ec;return Au(l)||Ys(),js(n,e,c)}return Au(l)?(e.flags|=192,e.child=n.child,null):(n=s.treeContext,oe=kt(l.nextSibling),De=e,Mn=!0,Ra=null,Ot=!1,n!==null&&$d(e,n),e=Cc(e,r.children),e.flags|=134221824,e)}function yh(n,e,t){n.lanes|=e;var a=n.alternate;a!==null&&(a.lanes|=e),ts(n.return,e,t)}function xh(n){for(var e=null;n!==null;){var t=n.alternate;t!==null&&ds(t)===null&&(e=n),n=n.sibling}return e}function ws(n,e,t,a,r,l){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:r,treeForkCount:l}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=t,s.tailMode=r,s.treeForkCount=l)}function Rc(n){var e=n.child;for(n.child=null;e!==null;){var t=e.sibling;e.sibling=n.child,n.child=e,e=t}}function Lc(n,e,t){var a=e.pendingProps,r=a.revealOrder,l=a.tail;a=a.children;var s=Ye.current;if(e.flags&128)return $r(e,s),null;var c=(s&2)!==0;if(c?(s=s&1|2,e.flags|=128):s&=1,$r(e,s),r==="backwards"&&n!==null?(Rc(n),Ce(n,e,a,t),Rc(n)):Ce(n,e,a,t),a=Mn?Vr:0,!c&&n!==null&&(n.flags&128)!==0)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&yh(n,t,e);else if(n.tag===19)yh(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(r){case"backwards":t=xh(e.child),t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null,Rc(e)),ws(e,!0,r,null,l,a);break;case"unstable_legacy-backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&ds(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}ws(e,!0,t,null,l,a);break;case"together":ws(e,!1,null,null,void 0,a);break;case"independent":e.memoizedState=null;break;default:t=xh(e.child),t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),ws(e,!1,r,t,l,a)}return e.child}function _h(n,e,t){var a=e.pendingProps;return Da(e,e.type,a.value),Ce(n,e,a.children,t),e.child}function ba(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Qa|=e.lanes,(t&e.childLanes)===0)if(n!==null){if(fi(n,e,t,!1),(t&e.childLanes)===0)return null}else return null;if(n!==null&&e.child!==n.child)throw Error(d(153));if(e.child!==null){for(n=e.child,t=da(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=da(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Dc(n,e){return(n.lanes&e)!==0?!0:(n=n.dependencies,!!(n!==null&&as(n)))}function Uy(n,e,t){switch(e.tag){case 3:ai(e,e.stateNode.containerInfo),Da(e,we,n.memoizedState.cache),ui();break;case 27:case 5:Ai(e);break;case 4:ai(e,e.stateNode.containerInfo);break;case 10:Da(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,lc(e),null;break;case 13:var a=e.memoizedState;if(a!==null){if(a.dehydrated!==null)return Ga(e),e.flags|=128,null;a=fi(n,e,t,!1);var r=e.child.childLanes;return a||(t&r)!==0?vh(n,e,t):(Ga(e),n=ba(n,e,t),n!==null?n.sibling:null)}Ga(e);break;case 19:if(e.flags&128)return Lc(n,e,t);if(r=(n.flags&128)!==0,a=(t&e.childLanes)!==0,a||(fi(n,e,t,!1),a=(t&e.childLanes)!==0),r){if(a)return Lc(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),$r(e,Ye.current),a)break;return null;case 22:return e.lanes=0,fh(n,e,t,e.pendingProps);case 24:Da(e,we,n.memoizedState.cache)}return ba(n,e,t)}function Sh(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps)Ee=!0;else{if(!Dc(n,t)&&(e.flags&128)===0)return Ee=!1,Uy(n,e,t);Ee=(n.flags&131072)!==0}else Ee=!1,Mn&&(e.flags&1048576)!==0&&Wd(e,Vr,e.index);switch(e.lanes=0,e.tag){case 16:n:{var a=e.pendingProps;if(n=pi(e.elementType),e.type=n,typeof n=="function")Yo(n)?(a=xi(n,a),e.tag=1,e=ph(null,e,n,a,t)):(e.tag=0,e=Oc(null,e,n,a,t));else{if(n!=null){var r=n.$$typeof;if(r===V){e.tag=11,e=ch(null,e,n,a,t);break n}else if(r===Cn){e.tag=14,e=uh(null,e,n,a,t);break n}else if(r===fe){e.tag=10,e.type=n,e=_h(null,e,t);break n}}throw e=Ln(n)||n,Error(d(306,e,""))}}return e;case 0:return Oc(n,e,e.type,e.pendingProps,t);case 1:return a=e.type,r=xi(a,e.pendingProps),ph(n,e,a,r,t);case 3:n:{if(ai(e,e.stateNode.containerInfo),n===null)throw Error(d(387));a=e.pendingProps;var l=e.memoizedState;r=l.element,ec(n,e),Wr(e,a,null,t);var s=e.memoizedState;if(a=s.cache,Da(e,we,a),a!==l.cache&&Zo(e,[we],t,!0),Fr(),a=s.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){e=bh(n,e,a,t);break n}else if(a!==r){r=wt(Error(d(424)),e),Kr(r),e=bh(n,e,a,t);break n}else for(n=e.stateNode.containerInfo,n.nodeType===9?n=n.body:n=n.nodeName==="HTML"?n.ownerDocument.body:n,oe=kt(n.firstChild),De=e,Mn=!0,Ra=null,Ot=!0,t=ff(e,null,a,t),e.child=t;t;)t.flags=t.flags&-3|134221824,t=t.sibling;else{if(ui(),a===r){e=ba(n,e,t);break n}Ce(n,e,a,t)}e=e.child}return e;case 26:return Wi(n,e),n===null?(t=Xm(e.type,null,e.pendingProps,null))?e.memoizedState=t:Mn||(e.stateNode=Nm(e.type,e.pendingProps,Gt.current,e)):e.memoizedState=Xm(e.type,n.memoizedProps,e.pendingProps,n.memoizedState),null;case 27:return Ai(e),n===null&&Mn&&(a=e.stateNode=Im(e.type,e.pendingProps,Gt.current),De=e,Ot=!0,r=oe,Pa(e.type)?(Mu=r,oe=kt(a.firstChild)):oe=r),Ce(n,e,e.pendingProps.children,t),Wi(n,e),n===null&&(e.flags|=4194304),e.child;case 5:return n===null&&Mn&&((r=a=oe)&&(a=C0(a,e.type,e.pendingProps,Ot),a!==null?(e.stateNode=a,De=e,oe=kt(a.firstChild),Ot=!1,r=!0):r=!1),r||La(e)),Ai(e),r=e.type,l=e.pendingProps,s=n!==null?n.memoizedProps:null,a=l.children,Su(r,l)?a=null:s!==null&&Su(r,s)&&(e.flags|=32),e.memoizedState!==null&&(r=cc(n,e,Ey,null,null,t),pr._currentValue=r),Wi(n,e),Ce(n,e,a,t),e.child;case 6:return n===null&&Mn&&((n=t=oe)&&(t=R0(t,e.pendingProps,Ot),t!==null?(e.stateNode=t,De=e,oe=null,n=!0):n=!1),n||La(e)),null;case 13:return vh(n,e,t);case 4:return ai(e,e.stateNode.containerInfo),a=e.pendingProps,n===null?e.child=vi(e,null,a,t):Ce(n,e,a,t),e.child;case 11:return ch(n,e,e.type,e.pendingProps,t);case 7:return a=e.pendingProps,Wi(n,e),Ce(n,e,a,t),e.child;case 8:return Ce(n,e,e.pendingProps.children,t),e.child;case 12:return Ce(n,e,e.pendingProps.children,t),e.child;case 10:return _h(n,e,t);case 9:return r=e.type._context,a=e.pendingProps.children,hi(e),r=qe(r),a=a(r),e.flags|=1,Ce(n,e,a,t),e.child;case 14:return uh(n,e,e.type,e.pendingProps,t);case 15:return dh(n,e,e.type,e.pendingProps,t);case 19:return Lc(n,e,t);case 31:return zy(n,e,t);case 22:return fh(n,e,t,e.pendingProps);case 24:return hi(e),a=qe(we),n===null?(r=Wo(),r===null&&(r=se,l=Po(),r.pooledCache=l,l.refCount++,l!==null&&(r.pooledCacheLanes|=t),r=l),e.memoizedState={parent:a,cache:r},nc(e),Da(e,we,r)):((n.lanes&t)!==0&&(ec(n,e),Wr(e,null,null,t),Fr()),r=n.memoizedState,l=e.memoizedState,r.parent!==a?(r={parent:a,cache:a},e.memoizedState=r,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=r),Da(e,we,a)):(a=l.cache,Da(e,we,a),a!==r.cache&&Zo(e,[we],t,!0))),Ce(n,e,e.pendingProps.children,t),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),a=e.pendingProps,a.name!=null&&a.name!=="auto"?e.flags|=n===null?18882560:18874368:Mn&&ns(e),n!==null&&n.memoizedProps.name!==a.name?e.flags|=4194816:Wi(n,e),Ce(n,e,a.children,t),e.child;case 29:throw e.pendingProps}throw Error(d(156,e.tag))}function va(n){n.flags|=4}function zc(n,e,t,a,r){var l;if((l=(n.mode&32)!==0)&&(l=t===null?Fm(e,a):Fm(e,a)&&(a.src!==t.src||a.srcSet!==t.srcSet)),l){if(n.flags|=16777216,(r&335544128)===r)if(n.stateNode.complete)n.flags|=8192;else if(am())n.flags|=8192;else throw bi=ss,$o}else n.flags&=-16777217}function Th(n,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Wm(e))if(am())n.flags|=8192;else throw bi=ss,$o}function Ns(n,e){e!==null&&(n.flags|=4),n.flags&16384&&(e=n.tag!==22?Mr():536870912,n.lanes|=e,ar|=e)}function il(n,e){if(!Mn)switch(n.tailMode){case"visible":break;case"collapsed":for(var t=n.tail,a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:a.sibling=null;break;default:for(e=n.tail,t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null}}function ce(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,a=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags&1206910976,a|=r.flags&1206910976,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=a,n.childLanes=t,e}function Hy(n,e,t){var a=e.pendingProps;switch(Ko(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(e),null;case 1:return ce(e),null;case 3:return t=e.stateNode,a=null,n!==null&&(a=n.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),ma(we),tt(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(n===null||n.child===null)&&(Ki(e)?va(e):n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Xo())),ce(e),null;case 26:var r=e.type,l=e.memoizedState;return n===null?(va(e),l!==null?(ce(e),Th(e,l)):(ce(e),zc(e,r,null,a,t))):l?l!==n.memoizedState?(va(e),ce(e),Th(e,l)):(ce(e),e.flags&=-16777217):(n=n.memoizedProps,n!==a&&va(e),ce(e),zc(e,r,n,a,t)),null;case 27:if(Ct(e),t=Gt.current,r=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==a&&va(e);else{if(!a){if(e.stateNode===null)throw Error(d(166));return ce(e),e.subtreeFlags&=-33554433,null}n=_t.current,Ki(e)?nf(e):(n=Im(r,a,t),e.stateNode=n,va(e))}return ce(e),e.subtreeFlags&=-33554433,null;case 5:if(Ct(e),r=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==a&&va(e);else{if(!a){if(e.stateNode===null)throw Error(d(166));return ce(e),e.subtreeFlags&=-33554433,null}if(l=_t.current,Ki(e))nf(e);else{var s=gl(Gt.current);switch(l){case 1:l=s.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:l=s.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":l=s.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":l=s.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":l=s.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof a.is=="string"?s.createElement("select",{is:a.is}):s.createElement("select"),a.multiple?l.multiple=!0:a.size&&(l.size=a.size);break;default:l=typeof a.is=="string"?s.createElement(r,{is:a.is}):s.createElement(r)}}l[Me]=e,l[U]=a;n:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)l.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break n;for(;s.sibling===null;){if(s.return===null||s.return===e)break n;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=l;n:switch(Ve(l,r,a),r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break n;case"img":a=!0;break n;default:a=!1}a&&va(e)}}return ce(e),e.subtreeFlags&=-33554433,zc(e,e.type,n===null?null:n.memoizedProps,e.pendingProps,t),null;case 6:if(n&&e.stateNode!=null)n.memoizedProps!==a&&va(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(d(166));if(n=Gt.current,Ki(e)){if(n=e.stateNode,t=e.memoizedProps,a=null,r=De,r!==null)switch(r.tag){case 27:case 5:a=r.memoizedProps}n[Me]=e,n=!!(n.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||Sm(n.nodeValue,t)),n||La(e,!0)}else n=gl(n).createTextNode(a),n[Me]=e,e.stateNode=n}return ce(e),null;case 31:if(t=e.memoizedState,n===null||n.memoizedState!==null){if(a=Ki(e),t!==null){if(n===null){if(!a)throw Error(d(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(557));n[Me]=e}else ui(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ce(e),n=!1}else t=Xo(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=t),n=!0;if(!n)return e.flags&256?(mt(e),e):(mt(e),null);if((e.flags&128)!==0)throw Error(d(558))}return ce(e),null;case 13:if(a=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(r=Ki(e),a!==null&&a.dehydrated!==null){if(n===null){if(!r)throw Error(d(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(d(317));r[Me]=e}else ui(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ce(e),r=!1}else r=Xo(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=r),r=!0;if(!r)return e.flags&256?(mt(e),e):(mt(e),null)}return mt(e),(e.flags&128)!==0?(e.lanes=t,e):(t=a!==null,n=n!==null&&n.memoizedState!==null,t&&(a=e.child,r=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(r=a.alternate.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==r&&(a.flags|=2048)),t!==n&&t&&(e.child.flags|=8192),Ns(e,e.updateQueue),ce(e),null);case 4:return tt(),n===null&&bu(e.stateNode.containerInfo),e.flags|=67108864,ce(e),null;case 10:return ma(e.type),ce(e),null;case 19:if(sc(e),a=e.memoizedState,a===null)return ce(e),null;if(r=(e.flags&128)!==0,l=a.rendering,l===null)if(r)il(a,!1);else{if(be!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(l=ds(n),l!==null){for(e.flags|=128,il(a,!1),n=l.updateQueue,e.updateQueue=n,Ns(e,n),e.subtreeFlags=0,n=t,t=e.child;t!==null;)Zd(t,n),t=t.sibling;return $r(e,Ye.current&1|2),Mn&&fa(e,a.treeForkCount),e.child}n=n.sibling}a.tail!==null&&Xe()>Us&&(e.flags|=128,r=!0,il(a,!1),e.lanes=4194304)}else{if(!r)if(n=ds(l),n!==null){if(e.flags|=128,r=!0,n=n.updateQueue,e.updateQueue=n,Ns(e,n),il(a,!0),a.tail===null&&a.tailMode!=="collapsed"&&a.tailMode!=="visible"&&!l.alternate&&!Mn)return ce(e),null}else 2*Xe()-a.renderingStartTime>Us&&t!==536870912&&(e.flags|=128,r=!0,il(a,!1),e.lanes=4194304);a.isBackwards?(l.sibling=e.child,e.child=l):(n=a.last,n!==null?n.sibling=l:e.child=l,a.last=l)}if(a.tail!==null){n=a.tail;n:{for(t=n;t!==null;){if(t.alternate!==null){t=!1;break n}t=t.sibling}t=!0}return a.rendering=n,a.tail=n.sibling,a.renderingStartTime=Xe(),n.sibling=null,l=Ye.current,l=r?l&1|2:l&1,a.tailMode==="visible"||a.tailMode==="collapsed"||!t||Mn?$r(e,l):(t=l,ae(Ge,e),ae(Ye,t),Je===null&&(Je=e)),Mn&&fa(e,a.treeForkCount),n}return ce(e),null;case 22:case 23:return mt(e),rc(),a=e.memoizedState!==null,n!==null?n.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(t&536870912)!==0&&(e.flags&128)===0&&(ce(e),e.subtreeFlags&6&&(e.flags|=8192)):ce(e),t=e.updateQueue,t!==null&&Ns(e,t.retryQueue),t=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==t&&(e.flags|=2048),n!==null&&ke(gi),null;case 24:return t=null,n!==null&&(t=n.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),ma(we),ce(e),null;case 25:return null;case 30:return e.flags|=33554432,ce(e),null}throw Error(d(156,e.tag))}function qy(n,e){switch(Ko(e),e.tag){case 1:return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return ma(we),tt(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 26:case 27:case 5:return Ct(e),null;case 31:if(e.memoizedState!==null){if(mt(e),e.alternate===null)throw Error(d(340));ui()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 13:if(mt(e),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(d(340));ui()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return sc(e),n=e.flags,n&65536?(e.flags=n&-65537|128,n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null),e.flags|=4,e):null;case 4:return tt(),null;case 10:return ma(e.type),null;case 22:case 23:return mt(e),rc(),n!==null&&ke(gi),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 24:return ma(we),null;case 25:return null;default:return null}}function jh(n,e){switch(Ko(e),e.tag){case 3:ma(we),tt();break;case 26:case 27:case 5:Ct(e);break;case 4:tt();break;case 31:e.memoizedState!==null&&mt(e);break;case 13:mt(e);break;case 19:sc(e);break;case 10:ma(e.type);break;case 22:case 23:mt(e),rc(),n!==null&&ke(gi);break;case 24:ma(we)}}function rl(n,e){try{var t=e.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var r=a.next;t=r;do{if((t.tag&n)===n){a=void 0;var l=t.create,s=t.inst;a=l(),s.destroy=a}t=t.next}while(t!==r)}}catch(c){ee(e,e.return,c)}}function Ia(n,e,t){try{var a=e.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var l=r.next;a=l;do{if((a.tag&n)===n){var s=a.inst,c=s.destroy;if(c!==void 0){s.destroy=void 0,r=e;var h=t,S=c;try{S()}catch(O){ee(r,h,O)}}}a=a.next}while(a!==l)}}catch(O){ee(e,e.return,O)}}function wh(n){var e=n.updateQueue;if(e!==null){var t=n.stateNode;try{mf(e,t)}catch(a){ee(n,n.return,a)}}}function Nh(n,e,t){t.props=xi(n.type,n.memoizedProps),t.state=n.memoizedState;try{t.componentWillUnmount()}catch(a){ee(n,e,a)}}function Xt(n,e){try{var t=n.ref;if(t!==null){switch(n.tag){case 26:case 27:case 5:var a=n.stateNode;break;case 30:var r=n.stateNode,l=ca(n.memoizedProps,r);(r.ref===null||r.ref.name!==l)&&(r.ref=Rm(l)),a=r.ref;break;case 7:if(n.stateNode===null){var s=new yt(n);v(n.child,!1,k0,s,void 0,void 0),n.stateNode=s}a=n.stateNode;break;default:a=n.stateNode}typeof t=="function"?n.refCleanup=t(a):t.current=a}}catch(c){ee(n,e,c)}}function Ie(n,e){var t=n.ref,a=n.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(r){ee(n,e,r)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(r){ee(n,e,r)}else t.current=null}function Es(n,e){if((n.tag===5||n.tag===27||n.tag===6)&&n.alternate===null&&e!==null)for(var t=0;t<e.length;t++)Hm(n.stateNode,e[t])}function Eh(n){for(var e=n.return;e!==null&&(Uc(e)&&Hm(n.stateNode,e.stateNode),!Bc(e));)e=e.return}function ll(n){for(var e=n.return;e!==null&&(Uc(e)&&M0(n.stateNode,e.stateNode),!Bc(e));)e=e.return}function Bc(n){return n.tag===5||n.tag===3||n.tag===27}function Uc(n){return n&&n.tag===7&&n.stateNode!==null}function Hc(n){var e=n.type,t=n.memoizedProps,a=n.stateNode;try{n:switch(e){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break n;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(r){ee(n,n.return,r)}}function qc(n,e,t){try{var a=n.stateNode;f0(a,n.type,t,e),a[U]=e}catch(r){ee(n,n.return,r)}}function Oh(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Pa(n.type)||n.tag===4}function Gc(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Oh(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Pa(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Yc(n,e,t,a){var r=n.tag;if(r===5||r===6)r=n.stateNode,e?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(r,e):(e=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.appendChild(r),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Vt)),Es(n,a),Gn=!0;else if(r!==4&&(r===27&&(Es(n,a),a=null,Pa(n.type)&&(t=n.stateNode,e=null)),n=n.child,n!==null))for(Yc(n,e,t,a),n=n.sibling;n!==null;)Yc(n,e,t,a),n=n.sibling}function Os(n,e,t,a){var r=n.tag;if(r===5||r===6)r=n.stateNode,e?t.insertBefore(r,e):t.appendChild(r),Es(n,a),Gn=!0;else if(r!==4&&(r===27&&(Es(n,a),a=null,Pa(n.type)&&(t=n.stateNode)),n=n.child,n!==null))for(Os(n,e,t,a),n=n.sibling;n!==null;)Os(n,e,t,a),n=n.sibling}function Ah(n){var e=n.stateNode,t=n.memoizedProps;try{for(var a=n.type,r=e.attributes;r.length;)e.removeAttributeNode(r[0]);Ve(e,a,t),e[Me]=n,e[U]=t}catch(l){ee(n,n.return,l)}}var As=!1,gt=null;function kh(n){(n.tag===30||(n.subtreeFlags&33554432)!==0)&&(As=!0)}var Jt=null;function Mh(){var n=Jt;return Jt=null,n}var st=0;function $i(n,e,t,a,r){return st=0,Ch(n.child,e,t,a,r)}function Ch(n,e,t,a,r){for(var l=!1;n!==null;){if(n.tag===5){var s=n.stateNode;if(a!==null){var c=wu(s);a.push(c),c.view&&(l=!0)}else l||wu(s).view&&(l=!0);As=!0,Mm(s,st===0?e:e+"_"+st,t),st++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&r||Ch(n.child,e,t,a,r)&&(l=!0));n=n.sibling}return l}function Zt(n,e){for(;n!==null;)n.tag===5?Cm(n.stateNode,n.memoizedProps):(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&e||Zt(n.child,e)),n=n.sibling}function ks(n){if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if((n.tag!==22||n.memoizedState===null)&&(ks(n),n.tag===30&&(n.flags&18874368)!==0&&n.stateNode.paired)){var e=n.memoizedProps;if(e.name==null||e.name==="auto")throw Error(d(544));var t=e.name;e=ua(e.default,e.share),e!=="none"&&($i(n,t,e,null,!1)||Zt(n.child,!1))}n=n.sibling}}function Ic(n,e){if(n.tag===30){var t=n.stateNode,a=n.memoizedProps,r=ca(a,t),l=ua(a.default,t.paired?a.share:a.enter);l!=="none"?$i(n,r,l,null,!1)?(ks(n),t.paired||e||sr(n,a.onEnter)):Zt(n.child,!1):ks(n)}else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)Ic(n,e),n=n.sibling;else ks(n)}function Vc(n){if(gt!==null&&gt.size!==0){var e=gt;if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if(n.tag!==22||n.memoizedState===null){if(n.tag===30&&(n.flags&18874368)!==0){var t=n.memoizedProps,a=t.name;if(a!=null&&a!=="auto"){var r=e.get(a);if(r!==void 0){var l=ua(t.default,t.share);if(l!=="none"&&($i(n,a,l,null,!1)?(l=n.stateNode,r.paired=l,l.paired=r,sr(n,t.onShare)):Zt(n.child,!1)),e.delete(a),e.size===0)break}}}Vc(n)}n=n.sibling}}}function Kc(n){if(n.tag===30){var e=n.memoizedProps,t=ca(e,n.stateNode),a=gt!==null?gt.get(t):void 0,r=ua(e.default,a!==void 0?e.share:e.exit);r!=="none"&&($i(n,t,r,null,!1)?a!==void 0?(r=n.stateNode,a.paired=r,r.paired=a,gt.delete(t),sr(n,e.onShare)):sr(n,e.onExit):Zt(n.child,!1)),gt!==null&&Vc(n)}else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)Kc(n),n=n.sibling;else gt!==null&&Vc(n)}function Rh(n){for(n=n.child;n!==null;){if(n.tag===30){var e=n.memoizedProps,t=ca(e,n.stateNode);e=ua(e.default,e.update),n.flags&=-5,e!=="none"&&$i(n,t,e,n.memoizedState=[],!1)}else(n.subtreeFlags&33554432)!==0&&Rh(n);n=n.sibling}}function Qc(n){if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if(n.tag!==22||n.memoizedState===null){if(n.tag===30&&(n.flags&18874368)!==0){var e=n.stateNode;e.paired!==null&&(e.paired=null,Zt(n.child,!1))}Qc(n)}n=n.sibling}}function Ms(n){if(n.tag===30)n.stateNode.paired=null,Zt(n.child,!1),Qc(n);else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)Ms(n),n=n.sibling;else Qc(n)}function Lh(n){for(n=n.child;n!==null;)n.tag===30?Zt(n.child,!1):(n.subtreeFlags&33554432)!==0&&Lh(n),n=n.sibling}function Xc(n,e,t,a,r,l,s){for(var c=!1;e!==null;){if(e.tag===5){var h=e.stateNode;if(l!==null&&st<l.length){var S=l[st],O=wu(h);(S.view||O.view)&&(c=!0);var C;if(C=(n.flags&4)===0)if(O.clip)C=!0;else{C=S.rect;var x=O.rect;C=C.y!==x.y||C.x!==x.x||C.height!==x.height||C.width!==x.width}C&&(n.flags|=4),O.abs?O=!S.abs:(S=S.rect,O=O.rect,O=S.height!==O.height||S.width!==O.width),O&&(n.flags|=32)}else n.flags|=32;(n.flags&4)!==0&&Mm(h,st===0?t:t+"_"+st,r),c&&(n.flags&4)!==0||(Jt===null&&(Jt=[]),Jt.push(h,st===0?a:a+"_"+st,e.memoizedProps)),st++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s?n.flags|=e.flags&32:Xc(n,e.child,t,a,r,l,s)&&(c=!0));e=e.sibling}return c}function Dh(n,e){for(n=n.child;n!==null;){if(n.tag===30){var t=n.memoizedProps,a=n.stateNode,r=ca(t,a),l=ua(t.default,t.update),s;s=n.memoizedState,n.memoizedState=null,a=n;var c=n.child;st=0,r=Xc(a,c,r,r,l,s,!1),(n.flags&4)!==0&&r&&sr(n,t.onUpdate)}else(n.subtreeFlags&33554432)!==0&&Dh(n);n=n.sibling}}var ze=!1,Pn=!1,Pt=!1,Jc=!1,zh=typeof WeakSet=="function"?WeakSet:Set,Be=null,Ft=!1,sl=!1,Cs=!1,Zc=!1;function Gy(n,e,t){if(n=n.containerInfo,xu=br,n=Hd(n),Do(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else n:{a=(a=n.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var l=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break n}var c=0,h=-1,S=-1,O=0,C=0,x=n,N=null;e:for(;;){for(var Q;x!==a||l!==0&&x.nodeType!==3||(h=c+l),x!==s||r!==0&&x.nodeType!==3||(S=c+r),x.nodeType===3&&(c+=x.nodeValue.length),(Q=x.firstChild)!==null;)N=x,x=Q;for(;;){if(x===n)break e;if(N===a&&++O===l&&(h=c),N===s&&++C===r&&(S=c),(Q=x.nextSibling)!==null)break;x=N,N=x.parentNode}x=Q}a=h===-1||S===-1?null:{start:h,end:S}}else a=null}a=a||{start:0,end:0}}else a=null;for(_u={focusedElem:n,selectionRange:a},br=!1,t=(t&335544064)===t,Be=e,e=t?9270:1024;Be!==null;){if(n=Be,t&&(a=n.deletions,a!==null))for(l=0;l<a.length;l++)t&&Kc(a[l]);if(n.alternate===null&&(n.flags&2)!==0)t&&kh(n),Rs(t);else{if(n.tag===22){if(a=n.alternate,n.memoizedState!==null){a!==null&&a.memoizedState===null&&t&&Kc(a),Rs(t);continue}else if(a!==null&&a.memoizedState!==null){t&&kh(n),Rs(t);continue}}a=n.child,(n.subtreeFlags&e)!==0&&a!==null?(a.return=n,Be=a):(t&&Rh(n),Rs(t))}}gt=null}function Rs(n){for(;Be!==null;){var e=Be,t=n,a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((r&1024)!==0&&a!==null){t=void 0,r=a.memoizedProps,a=a.memoizedState;var l=e.stateNode;try{var s=xi(e.type,r);t=l.getSnapshotBeforeUpdate(s,a),l.__reactInternalSnapshotBeforeUpdate=t}catch(c){ee(e,e.return,c)}}break;case 3:if((r&1024)!==0){if(a=e.stateNode.containerInfo,t=a.nodeType,t===9)Ou(a);else if(t===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":Ou(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:t&&a!==null&&(t=ca(a.memoizedProps,a.stateNode),r=e.memoizedProps,r=ua(r.default,r.update),r!=="none"&&$i(a,t,r,a.memoizedState=[],!0));break;default:if((r&1024)!==0)throw Error(d(163))}if(a=e.sibling,a!==null){a.return=e.return,Be=a;break}Be=e.return}}function Bh(n,e,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Wt(n,t),a&4&&rl(5,t);break;case 1:if(Wt(n,t),a&4)if(n=t.stateNode,e===null)try{n.componentDidMount()}catch(s){ee(t,t.return,s)}else{var r=xi(t.type,e.memoizedProps);e=e.memoizedState;try{n.componentDidUpdate(r,e,n.__reactInternalSnapshotBeforeUpdate)}catch(s){ee(t,t.return,s)}}a&64&&wh(t),a&512&&Xt(t,t.return);break;case 3:if(Wt(n,t),a&64&&(n=t.updateQueue,n!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{mf(n,e)}catch(s){ee(t,t.return,s)}}break;case 27:e===null&&a&4&&Ah(t);case 26:case 5:Wt(n,t),e===null&&a&4&&Hc(t),a&512&&Xt(t,t.return);break;case 12:Wt(n,t);break;case 31:Wt(n,t),a&4&&Gh(n,t);break;case 13:Wt(n,t),a&4&&Yh(n,t),a&64&&(n=t.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(t=$y.bind(null,t),L0(n,t))));break;case 22:if(a=t.memoizedState!==null||ze,!a){var l=e!==null&&e.memoizedState!==null||Pn;e=ze,r=Pn,ze=a,(Pn=l)&&!r?(a=2,(t.subtreeFlags&8772)!==0&&(a|=1),Ut(n,t,a)):Wt(n,t),ze=e,Pn=r}break;case 30:Wt(n,t),a&512&&Xt(t,t.return);break;case 7:a&512&&Xt(t,t.return);default:Wt(n,t)}}function Pc(n,e){for(n=n.child;n!==null;)Uh(n,e),n=n.sibling}function Uh(n,e){switch(n.tag){case 5:case 26:try{var t=n.stateNode;if(e){var a=t.style;typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"}else{var r=n.stateNode,l=n.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null;r.style.display=s==null||typeof s=="boolean"?"":(""+s).trim()}}catch(h){ee(n,n.return,h)}Fc(n,e);break;case 6:try{n.stateNode.nodeValue=e?"":n.memoizedProps,Gn=!0}catch(h){ee(n,n.return,h)}break;case 18:try{var c=n.stateNode;e?km(c,!0):km(n.stateNode,!1)}catch(h){ee(n,n.return,h)}break;case 22:case 23:n.memoizedState===null&&Pc(n,e);break;default:Pc(n,e)}}function Fc(n,e){if(n.subtreeFlags&67108864)for(n=n.child;n!==null;){n:{var t=n,a=e;switch(t.tag){case 4:Uh(t,a);break n;case 22:t.memoizedState===null&&Fc(t,a);break n;default:Fc(t,a)}}n=n.sibling}}function Hh(n){var e=n.alternate;e!==null&&(n.alternate=null,Hh(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&Re(e)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var he=null,ot=!1;function zt(n,e,t){for(t=t.child;t!==null;)qh(n,e,t),t=t.sibling}function qh(n,e,t){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(le,t)}catch{}switch(t.tag){case 26:Pn||Ie(t,e),zt(n,e,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&!Pn&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Pn||Ie(t,e),ll(t);var a=he,r=ot;Pa(t.type)&&(he=t.stateNode,ot=!1),zt(n,e,t),Vm(t.stateNode,t.type,t.memoizedProps),he=a,ot=r;break;case 5:Pn||Ie(t,e),ll(t);case 6:if(t.tag===6&&ll(t),a=he,r=ot,he=null,zt(n,e,t),he=a,ot=r,he!==null)if(ot)try{(he.nodeType===9?he.body:he.nodeName==="HTML"?he.ownerDocument.body:he).removeChild(t.stateNode),Gn=!0}catch(l){ee(t,e,l)}else try{he.removeChild(t.stateNode),Gn=!0}catch(l){ee(t,e,l)}break;case 18:he!==null&&(ot?(n=he,Am(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.stateNode),vr(n)):Am(he,t.stateNode));break;case 4:a=he,r=ot,he=t.stateNode.containerInfo,ot=!0,zt(n,e,t),he=a,ot=r;break;case 0:case 11:case 14:case 15:Ia(2,t,e),Pn||Ia(4,t,e),zt(n,e,t);break;case 1:Pn||(Ie(t,e),a=t.stateNode,typeof a.componentWillUnmount=="function"&&Nh(t,e,a)),zt(n,e,t);break;case 21:zt(n,e,t);break;case 22:Pn=(a=Pn)||t.memoizedState!==null,zt(n,e,t),Pn=a;break;case 30:Ie(t,e),zt(n,e,t);break;case 7:Pn||Ie(t,e),zt(n,e,t);break;default:zt(n,e,t)}}function Gh(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{vr(n)}catch(t){ee(e,e.return,t)}}}function Yh(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{vr(n)}catch(t){ee(e,e.return,t)}}function Yy(n){switch(n.tag){case 31:case 13:case 19:var e=n.stateNode;return e===null&&(e=n.stateNode=new zh),e;case 22:return n=n.stateNode,e=n._retryCache,e===null&&(e=n._retryCache=new zh),e;default:throw Error(d(435,n.tag))}}function Ls(n,e){var t=Yy(n);e.forEach(function(a){if(!t.has(a)){t.add(a);var r=n0.bind(null,n,a);a.then(r,r)}})}function Fe(n,e,t){var a=e.deletions;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r],s=n,c=e,h=c;n:for(;h!==null;){switch(h.tag){case 27:if(Pa(h.type)){he=h.stateNode,ot=!1;break n}break;case 5:he=h.stateNode,ot=!1;break n;case 3:case 4:he=h.stateNode.containerInfo,ot=!0;break n}h=h.return}if(he===null)throw Error(d(160));qh(s,c,l),he=null,ot=!1,s=l.alternate,s!==null&&(s.return=null),l.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Ih(e,n,t),e=e.sibling}var Bt=null;function Ih(n,e,t){var a=n.alternate,r=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(r&4&&(a=n.updateQueue,a=a!==null?a.events:null,a!==null))for(var l=0;l<a.length;l++){var s=a[l];s.ref.impl=s.nextImpl}Fe(e,n,t),We(n),r&4&&(Ia(3,n,n.return),rl(3,n),Ia(5,n,n.return));break;case 1:Fe(e,n,t),We(n),r&512&&(Pn||a===null||Ie(a,a.return)),r&64&&ze&&(n=n.updateQueue,n!==null&&(e=n.callbacks,e!==null&&(t=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=t===null?e:t.concat(e))));break;case 26:if(l=Bt,Fe(e,n,t),We(n),r&512&&(Pn||a===null||Ie(a,a.return)),r&4)if(r=a!==null?a.memoizedState:null,t=n.memoizedState,a===null)if(t===null)if(n.stateNode===null)if(ze)n.stateNode=Nm(n.type,n.memoizedProps,e.containerInfo,n);else{n:{e=n.type,t=n.memoizedProps,r=l.ownerDocument||l;e:switch(e){case"title":a=r.getElementsByTagName("title")[0],(!a||a[rt]||a[Me]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=r.createElement(e),r.head.insertBefore(a,r.querySelector("head > title"))),Ve(a,e,t),a[Me]=n,Te(a),e=a;break n;case"link":if(l=Pm("link","href",r).get(e+(t.href||""))){for(s=0;s<l.length;s++)if(a=l[s],a.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&a.getAttribute("rel")===(t.rel==null?null:t.rel)&&a.getAttribute("title")===(t.title==null?null:t.title)&&a.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){l.splice(s,1);break e}}a=r.createElement(e),Ve(a,e,t),r.head.appendChild(a);break;case"meta":if(l=Pm("meta","content",r).get(e+(t.content||""))){for(s=0;s<l.length;s++)if(a=l[s],a.getAttribute("content")===(t.content==null?null:""+t.content)&&a.getAttribute("name")===(t.name==null?null:t.name)&&a.getAttribute("property")===(t.property==null?null:t.property)&&a.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&a.getAttribute("charset")===(t.charSet==null?null:t.charSet)){l.splice(s,1);break e}}a=r.createElement(e),Ve(a,e,t),r.head.appendChild(a);break;default:throw Error(d(468,e))}a[Me]=n,Te(a),e=a}n.stateNode=e}else ze||Du(l,n.type,n.stateNode);else n.stateNode=Zm(l,t,n.memoizedProps);else r!==t?(r===null?(e=a.stateNode,e===null||Pn||e.parentNode.removeChild(e)):r.count--,t===null?ze||Du(l,n.type,n.stateNode):Zm(l,t,n.memoizedProps)):t===null&&n.stateNode!==null&&qc(n,n.memoizedProps,a.memoizedProps);break;case 27:Fe(e,n,t),We(n),r&512&&(Pn||a===null||Ie(a,a.return)),a!==null&&r&4&&qc(n,n.memoizedProps,a.memoizedProps);break;case 5:if(l=Pt,Pt=!1,Fe(e,n,t),Pt=l,We(n),r&512&&(Pn||a===null||Ie(a,a.return)),n.flags&32){e=n.stateNode;try{Di(e,""),Gn=!0}catch(O){ee(n,n.return,O)}}r&4&&n.stateNode!=null&&(e=n.memoizedProps,qc(n,e,a!==null?a.memoizedProps:e)),r&1024&&(Jc=!0);break;case 6:if(Fe(e,n,t),We(n),r&4){if(n.stateNode===null)throw Error(d(162));e=n.memoizedProps,t=n.stateNode;try{t.nodeValue=e,Gn=!0}catch(O){ee(n,n.return,O)}}break;case 3:if(Gn=!1,Zs=null,l=Bt,Bt=pl(e.containerInfo),Fe(e,n,t),Bt=l,We(n),r&4&&a!==null&&a.memoizedState.isDehydrated)try{vr(e.containerInfo)}catch(O){ee(n,n.return,O)}Jc&&(Jc=!1,Vh(n)),Gn=!1;break;case 4:r=Pt,Pt=ze,a=je(),l=Bt,Bt=pl(n.stateNode.containerInfo),Fe(e,n,t),We(n),Bt=l,Gn&&sl&&(Cs=!0),Gn=a,Pt=r;break;case 12:Fe(e,n,t),We(n);break;case 31:Fe(e,n,t),We(n),r&4&&(e=n.updateQueue,e!==null&&(n.updateQueue=null,Ls(n,e)));break;case 13:Fe(e,n,t),We(n),n.child.flags&8192&&n.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Bs=Xe()),r&4&&(e=n.updateQueue,e!==null&&(n.updateQueue=null,Ls(n,e)));break;case 22:l=n.memoizedState!==null,s=a!==null&&a.memoizedState!==null;var c=ze,h=Pn,S=Pt;ze=c||l,Pt=S||l,Pn=h||s,Fe(e,n,t),Pn=h,Pt=S,ze=c,We(n),r&8192&&(e=n.stateNode,e._visibility=l?e._visibility&-2:e._visibility|1,!l||a===null||s||ze||Pn||(e=s||Pn,t=ze,a=Pn,ze=l||ze,Pn=e,Va(n,2),ze=t,Pn=a),!l&&Pt||Pc(n,l)),r&4&&(e=n.updateQueue,e!==null&&(t=e.retryQueue,t!==null&&(e.retryQueue=null,Ls(n,t))));break;case 19:Fe(e,n,t),We(n),r&4&&(e=n.updateQueue,e!==null&&(n.updateQueue=null,Ls(n,e)));break;case 30:r&512&&(Pn||a===null||Ie(a,a.return)),r=je(),l=sl,s=(t&335544064)===t,c=n.memoizedProps,sl=s&&ua(c.default,c.update)!=="none",Fe(e,n,t),We(n),s&&a!==null&&Gn&&(n.flags|=4),sl=l,Gn=r;break;case 21:break;case 7:r&512&&(Pn||a===null||Ie(a,a.return)),a&&a.stateNode!==null&&(a.stateNode._fragmentFiber=n);default:Fe(e,n,t),We(n)}}function We(n){var e=n.flags;if(e&2){try{for(var t,a=n.return;a!==null;){if(Oh(a)){t=a;break}a=a.return}a=null;for(var r=n.return;r!==null;){if(Uc(r)){var l=r.stateNode;a===null?a=[l]:a.push(l)}if(Bc(r))break;r=r.return}var s=a;if(t==null)throw Error(d(160));switch(t.tag){case 27:var c=t.stateNode,h=Gc(n);Os(n,h,c,s);break;case 5:var S=t.stateNode;t.flags&32&&(Di(S,""),t.flags&=-33);var O=Gc(n);Os(n,O,S,s);break;case 3:case 4:var C=t.stateNode.containerInfo,x=Gc(n);Yc(n,x,C,s);break;default:throw Error(d(161))}}catch(N){ee(n,n.return,N)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Vh(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var e=n;Vh(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,br=!0,e.reset(),br=!1),n=n.sibling}}function nr(n,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)Kh(e,n),e=e.sibling;else Dh(e)}function Kh(n,e){var t=n.alternate;if(t===null)Ic(n,!1);else switch(n.tag){case 3:if(Zc=Ft=!1,Mh(),nr(e,n),!Ft&&!Cs){if(n=Jt,n!==null)for(var a=0;a<n.length;a+=3){t=n[a];var r=n[a+1];Cm(t,n[a+2]),t=t.ownerDocument.documentElement,t!==null&&t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+r+")"})}n=e.containerInfo,n=n.nodeType===9?n.documentElement:n.ownerDocument.documentElement,n!==null&&n.style.viewTransitionName===""&&(n.style.viewTransitionName="none",n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),n.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Zc=!0}Jt=null;break;case 5:nr(e,n);break;case 4:a=Ft,Ft=!1,nr(e,n),Ft&&(Cs=!0),Ft=a;break;case 22:n.memoizedState===null&&(t.memoizedState!==null?Ic(n,!1):nr(e,n));break;case 30:a=Ft,r=Mh(),Ft=!1,nr(e,n),Ft&&(n.flags|=4);var l=n.memoizedProps,s=n.stateNode;e=ca(l,s),s=ca(t.memoizedProps,s);var c=ua(l.default,l.update);c==="none"?e=!1:(l=t.memoizedState,t.memoizedState=null,t=n.child,st=0,e=Xc(n,t,e,s,c,l,!0),st!==(l===null?0:l.length)&&(n.flags|=32)),(n.flags&4)!==0&&e?(sr(n,n.memoizedProps.onUpdate),Jt=r):r!==null&&(r.push.apply(r,Jt),Jt=r),Ft=(n.flags&32)!==0?!0:a;break;default:nr(e,n)}}function Wt(n,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Bh(n,e.alternate,e),e=e.sibling}function Va(n,e){for(n=n.child;n!==null;){var t=n,a=e;switch(t.tag){case 0:case 11:case 14:case 15:Ia(4,t,t.return),Va(t,a);break;case 1:Ie(t,t.return);var r=t.stateNode;typeof r.componentWillUnmount=="function"&&Nh(t,t.return,r),Va(t,a);break;case 27:(a&2)!==0&&Vm(t.stateNode,t.type,t.memoizedProps);case 5:Ie(t,t.return),t.tag!==5&&t.tag!==27||ll(t),Va(t,a);break;case 6:ll(t);break;case 26:Ie(t,t.return),r=t.stateNode,t.memoizedState!==null||r===null||Pn||r.parentNode.removeChild(r),Va(t,a);break;case 22:t.memoizedState===null&&Va(t,a);break;case 30:Ie(t,t.return),Va(t,a);break;case 7:Ie(t,t.return);default:Va(t,a)}n=n.sibling}}function Ut(n,e,t){for(t=(e.subtreeFlags&8772)!==0?t:t&-2,e=e.child;e!==null;){var a=e.alternate,r=n,l=e,s=l.flags,c=(t&1)!==0;switch(l.tag){case 0:case 11:case 15:Ut(r,l,t),rl(4,l);break;case 1:if(Ut(r,l,t),a=l,r=a.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(O){ee(a,a.return,O)}if(a=l,r=a.updateQueue,r!==null){var h=a.stateNode;try{var S=r.shared.hiddenCallbacks;if(S!==null)for(r.shared.hiddenCallbacks=null,r=0;r<S.length;r++)hf(S[r],h)}catch(O){ee(a,a.return,O)}}c&&s&64&&wh(l),Xt(l,l.return);break;case 27:(t&2)!==0&&Ah(l);case 5:l.tag!==5&&l.tag!==27||Eh(l),Ut(r,l,t),c&&a===null&&s&4&&Hc(l),Xt(l,l.return);break;case 6:Eh(l);break;case 26:h=l.stateNode,l.memoizedState!==null||h===null||ze||Du(pl(h.ownerDocument),l.type,h),Ut(r,l,t),c&&a===null&&s&4&&Hc(l),Xt(l,l.return);break;case 12:Ut(r,l,t);break;case 31:Ut(r,l,t),c&&s&4&&Gh(r,l);break;case 13:Ut(r,l,t),c&&s&4&&Yh(r,l);break;case 22:l.memoizedState===null&&Ut(r,l,t),Xt(l,l.return);break;case 30:Ut(r,l,t),Xt(l,l.return);break;case 7:Xt(l,l.return);default:Ut(r,l,t)}e=e.sibling}}function Wc(n,e){var t=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==t&&(n!=null&&n.refCount++,t!=null&&Qr(t))}function $c(n,e){n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&Qr(n))}function At(n,e,t,a){var r=(t&335544064)===t;if(e.subtreeFlags&(r?10262:10256))for(e=e.child;e!==null;)Qh(n,e,t,a),e=e.sibling;else r&&Lh(e)}function Qh(n,e,t,a){var r=(t&335544064)===t;r&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&Ms(e);var l=e.flags;switch(e.tag){case 0:case 11:case 15:At(n,e,t,a),l&2048&&rl(9,e);break;case 1:At(n,e,t,a);break;case 3:At(n,e,t,a),r&&Zc&&(n=n.containerInfo,n=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,n.style.viewTransitionName==="root"&&(n.style.viewTransitionName=""),n=n.ownerDocument.documentElement,n!==null&&n.style.viewTransitionName==="none"&&(n.style.viewTransitionName="")),l&2048&&(l=null,e.alternate!==null&&(l=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==l&&(e.refCount++,l!=null&&Qr(l)));break;case 12:if(l&2048){At(n,e,t,a),l=e.stateNode;try{var s=e.memoizedProps,c=s.id,h=s.onPostCommit;typeof h=="function"&&h(c,e.alternate===null?"mount":"update",l.passiveEffectDuration,-0)}catch(S){ee(e,e.return,S)}}else At(n,e,t,a);break;case 31:At(n,e,t,a);break;case 13:At(n,e,t,a);break;case 23:break;case 22:s=e.stateNode,c=e.alternate,e.memoizedState!==null?(r&&c!==null&&c.memoizedState===null&&Ms(c),s._visibility&2?At(n,e,t,a):ol(n,e)):(r&&c!==null&&c.memoizedState!==null&&Ms(e),s._visibility&2?At(n,e,t,a):(s._visibility|=2,er(n,e,t,a,(e.subtreeFlags&10256)!==0||!1))),l&2048&&Wc(c,e);break;case 24:At(n,e,t,a),l&2048&&$c(e.alternate,e);break;case 30:r&&(l=e.alternate,l!==null&&(Zt(l.child,!0),Zt(e.child,!0))),At(n,e,t,a);break;default:At(n,e,t,a)}}function er(n,e,t,a,r){for(r=r&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var l=n,s=e,c=t,h=a,S=s.flags;switch(s.tag){case 0:case 11:case 15:er(l,s,c,h,r),rl(8,s);break;case 23:break;case 22:var O=s.stateNode;s.memoizedState!==null?O._visibility&2?er(l,s,c,h,r):ol(l,s):(O._visibility|=2,er(l,s,c,h,r)),r&&S&2048&&Wc(s.alternate,s);break;case 24:er(l,s,c,h,r),r&&S&2048&&$c(s.alternate,s);break;default:er(l,s,c,h,r)}e=e.sibling}}function ol(n,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var t=n,a=e,r=a.flags;switch(a.tag){case 22:ol(t,a),r&2048&&Wc(a.alternate,a);break;case 24:ol(t,a),r&2048&&$c(a.alternate,a);break;default:ol(t,a)}e=e.sibling}}var _i=8192;function Si(n,e,t){if(n.subtreeFlags&_i)for(n=n.child;n!==null;)Xh(n,e,t),n=n.sibling}function Xh(n,e,t){switch(n.tag){case 26:Si(n,e,t),n.flags&_i&&(n.memoizedState!==null?J0(t,Bt,n.memoizedState,n.memoizedProps):(n=n.stateNode,(e&335544128)===e&&ng(t,n)));break;case 5:Si(n,e,t),n.flags&_i&&(n=n.stateNode,(e&335544128)===e&&ng(t,n));break;case 3:case 4:var a=Bt;Bt=pl(n.stateNode.containerInfo),Si(n,e,t),Bt=a;break;case 22:n.memoizedState===null&&(a=n.alternate,a!==null&&a.memoizedState!==null?(a=_i,_i=16777216,Si(n,e,t),_i=a):Si(n,e,t));break;case 30:if((n.flags&_i)!==0&&(a=n.memoizedProps.name,a!=null&&a!=="auto")){var r=n.stateNode;r.paired=null,gt===null&&(gt=new Map),gt.set(a,r)}Si(n,e,t);break;default:Si(n,e,t)}}function Jh(n){var e=n.alternate;if(e!==null&&(n=e.child,n!==null)){e.child=null;do e=n.sibling,n.sibling=null,n=e;while(n!==null)}}function cl(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var a=e[t];Be=a,Ph(a,n)}Jh(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Zh(n),n=n.sibling}function Zh(n){switch(n.tag){case 0:case 11:case 15:cl(n),n.flags&2048&&Ia(9,n,n.return);break;case 3:cl(n);break;case 12:cl(n);break;case 22:var e=n.stateNode;n.memoizedState!==null&&e._visibility&2&&(n.return===null||n.return.tag!==13)?(e._visibility&=-3,Ds(n)):cl(n);break;default:cl(n)}}function Ds(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var a=e[t];Be=a,Ph(a,n)}Jh(n)}for(n=n.child;n!==null;){switch(e=n,e.tag){case 0:case 11:case 15:Ia(8,e,e.return),Ds(e);break;case 22:t=e.stateNode,t._visibility&2&&(t._visibility&=-3,Ds(e));break;default:Ds(e)}n=n.sibling}}function Ph(n,e){for(;Be!==null;){var t=Be;switch(t.tag){case 0:case 11:case 15:Ia(8,t,e);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Qr(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,Be=a;else n:for(t=n;Be!==null;){a=Be;var r=a.sibling,l=a.return;if(Hh(a),a===t){Be=null;break n}if(r!==null){r.return=l,Be=r;break n}Be=l}}}var Iy={getCacheForType:function(n){var e=qe(we),t=e.data.get(n);return t===void 0&&(t=n(),e.data.set(n,t)),t},cacheSignal:function(){return qe(we).controller.signal}},Vy=typeof WeakMap=="function"?WeakMap:Map,Jn=0,se=null,Dn=null,Bn=0,ne=0,pt=null,Ka=!1,tr=!1,nu=!1,ya=0,be=0,Qa=0,Ti=0,zs=0,bt=0,ar=0,ul=null,ct=null,eu=!1,Bs=0,Fh=0,Us=1/0,Hs=null,Xa=null,me=0,Ht=null,ji=null,$t=0,tu=0,au=null,Wh=null,ir=null,rr=null,lr=null,dl=0,qs=null;function vt(){return(Jn&2)!==0&&Bn!==0?Bn&-Bn:tn.T!==null?hu():Ll()}function $h(){if(bt===0)if((Bn&536870912)===0||Mn){var n=wa;wa<<=1,(wa&3932160)===0&&(wa=262144),bt=n}else bt=536870912;return n=Ge.current,n!==null&&(n.flags|=32),bt}function sr(n,e){if(e!=null){var t=n.stateNode,a=t.ref;a===null&&(a=t.ref=Rm(ca(n.memoizedProps,t))),rr===null&&(rr=[]),rr.push(e.bind(null,a))}}function ut(n,e,t){(n===se&&(ne===2||ne===9)||n.cancelPendingCommit!==null)&&(or(n,0),Ja(n,Bn,bt,!1)),ri(n,t),((Jn&2)===0||n!==se)&&(n===se&&((Jn&2)===0&&(Ti|=t),be===4&&Ja(n,Bn,bt,!1)),na(n))}function nm(n,e,t){if((Jn&6)!==0)throw Error(d(327));var a=!t&&(e&127)===0&&(e&n.expiredLanes)===0||ii(n,e),r=a?Xy(n,e):ru(n,e,!0),l=a;do{if(r===0){tr&&!a&&Ja(n,e,0,!1);break}else{if(t=n.current.alternate,l&&!Ky(t)){r=ru(n,e,!1),l=!1;continue}if(r===2){if(l=e,n.errorRecoveryDisabledLanes&l)var s=0;else s=n.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;n:{var c=n;r=ul;var h=c.current.memoizedState.isDehydrated;if(h&&(or(c,s).flags|=256),s=ru(c,s,!1),s!==2&&s!==6){if(nu&&!h){c.errorRecoveryDisabledLanes|=l,Ti|=l,r=4;break n}l=ct,ct=r,l!==null&&(ct===null?ct=l:ct.push.apply(ct,l))}r=s}if(l=!1,r!==2)continue}}if(r===1){or(n,0),Ja(n,e,0,!0);break}n:{switch(a=n,l=r,l){case 0:case 1:throw Error(d(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:Ja(a,e,bt,!Ka);break n;case 2:ct=null;break;case 3:case 5:break;default:throw Error(d(329))}if((e&62914560)===e&&(r=Bs+300-Xe(),10<r)){if(Ja(a,e,bt,!Ka),Ea(a,0,!0)!==0)break n;$t=e,a.timeoutHandle=ju(em.bind(null,a,t,ct,Hs,eu,e,bt,Ti,ar,Ka,l,"Throttled",-0,0),r);break n}em(a,t,ct,Hs,eu,e,bt,Ti,ar,Ka,l,null,-0,0)}}break}while(!0);na(n)}function em(n,e,t,a,r,l,s,c,h,S,O,C,x,N){n.timeoutHandle=-1;var Q=e.subtreeFlags,an=(l&335544064)===l;if(C=null,(an||Q&8192||(Q&16785408)===16785408)&&(C={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Vt},gt=null,Xh(e,l,C),an&&(Q=C,an=n.containerInfo,an=(an.nodeType===9?an:an.ownerDocument).__reactViewTransition,an!=null&&(Q.count++,Q.waitingForViewTransition=!0,Q=yl.bind(Q),an.finished.then(Q,Q))),Q=(l&62914560)===l?Bs-Xe():(l&4194048)===l?Fh-Xe():0,Q=Z0(C,Q),Q!==null)){$t=l,n.cancelPendingCommit=Q(cm.bind(null,n,e,l,t,a,r,s,c,h,S,O,C,null,x,N)),Ja(n,l,s,!S);return}cm(n,e,l,t,a,r,s,c,h,S,O,C)}function Ky(n){for(var e=n;;){var t=e.tag;if((t===0||t===11||t===15)&&e.flags&16384&&(t=e.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var r=t[a],l=r.getSnapshot;r=r.value;try{if(!ht(l(),r))return!1}catch{return!1}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ja(n,e,t,a){e=Cl(n,e),e&=~zs,e&=~Ti,n.suspendedLanes|=e,n.pingedLanes&=~e,a&&(n.warmLanes|=e),a=n.expirationTimes;for(var r=e;0<r;){var l=31-K(r),s=1<<l;a[l]=-1,r&=~s}t!==0&&Rl(n,t,e)}function Gs(){return(Jn&6)===0?(fl(0),!1):!0}function iu(){if(Dn!==null){if(ne===0)var n=Dn.return;else n=Dn,ha=di=null,fc(n),Ji=null,Zr=0,n=Dn;for(;n!==null;)jh(n.alternate,n),n=n.return;Dn=null}}function or(n,e){var t=n.timeoutHandle;return t!==-1&&(n.timeoutHandle=-1,g0(t)),t=n.cancelPendingCommit,t!==null&&(n.cancelPendingCommit=null,t()),$t=0,iu(),se=n,Dn=t=da(n.current,null),Bn=e,ne=0,pt=null,Ka=!1,tr=ii(n,e),nu=!1,ar=bt=zs=Ti=Qa=be=0,ct=ul=null,eu=!1,ya=Cl(n,e),Zl(),t}function tm(n,e){Nn=null,tn.H=xs,e===Xi||e===ls?(e=cf(),ne=3):e===$o?(e=cf(),ne=4):ne=e===Ec?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,pt=e,Dn===null&&(be=1,_s(n,wt(e,n.current)))}function am(){var n=Ge.current;return n===null?!0:(Bn&4194048)===Bn?Je===null:(Bn&62914560)===Bn||(Bn&536870912)!==0?n===Je:!1}function im(){var n=tn.H;return tn.H=xs,n===null?xs:n}function rm(){var n=tn.A;return tn.A=Iy,n}function Ys(){be=4,Ka||(Bn&4194048)!==Bn&&Ge.current!==null||(tr=!0),(Qa&134217727)===0&&(Ti&134217727)===0||se===null||Ja(se,Bn,bt,!1)}function ru(n,e,t){var a=Jn;Jn|=2;var r=im(),l=rm();(se!==n||Bn!==e)&&(Hs=null,or(n,e)),e=!1;var s=be;n:do try{if(ne!==0&&Dn!==null){var c=Dn,h=pt;switch(ne){case 8:iu(),s=6;break n;case 3:case 2:case 9:case 6:Ge.current===null&&(e=!0);var S=ne;if(ne=0,pt=null,cr(n,c,h,S),t&&tr){s=0;break n}break;default:S=ne,ne=0,pt=null,cr(n,c,h,S)}}Qy(),s=be;break}catch(O){tm(n,O)}while(!0);return e&&n.shellSuspendCounter++,ha=di=null,Jn=a,tn.H=r,tn.A=l,Dn===null&&(se=null,Bn=0,Zl()),s}function Qy(){for(;Dn!==null;)lm(Dn)}function Xy(n,e){var t=Jn;Jn|=2;var a=im(),r=rm();se!==n||Bn!==e?(Hs=null,Us=Xe()+500,or(n,e)):tr=ii(n,e);n:do try{if(ne!==0&&Dn!==null){e=Dn;var l=pt;e:switch(ne){case 1:ne=0,pt=null,cr(n,e,l,1);break;case 2:case 9:if(sf(l)){ne=0,pt=null,sm(e);break}e=function(){ne!==2&&ne!==9||se!==n||(ne=7),na(n)},l.then(e,e);break n;case 3:ne=7;break n;case 4:ne=5;break n;case 7:sf(l)?(ne=0,pt=null,sm(e)):(ne=0,pt=null,cr(n,e,l,7));break;case 5:var s=null;switch(Dn.tag){case 26:s=Dn.memoizedState;case 5:case 27:var c=Dn;if(s?Wm(s):c.stateNode.complete){ne=0,pt=null;var h=c.sibling;if(h!==null)Dn=h;else{var S=c.return;S!==null?(Dn=S,Is(S)):Dn=null}break e}}ne=0,pt=null,cr(n,e,l,5);break;case 6:ne=0,pt=null,cr(n,e,l,6);break;case 8:iu(),be=6;break n;default:throw Error(d(462))}}Jy();break}catch(O){tm(n,O)}while(!0);return ha=di=null,tn.H=a,tn.A=r,Jn=t,Dn!==null?0:(se=null,Bn=0,Zl(),be)}function Jy(){for(;Dn!==null&&!vo();)lm(Dn)}function lm(n){var e=Sh(n.alternate,n,ya);n.memoizedProps=n.pendingProps,e===null?Is(n):Dn=e}function sm(n){var e=n,t=e.alternate;switch(e.tag){case 15:case 0:e=gh(t,e,e.pendingProps,e.type,void 0,Bn);break;case 11:e=gh(t,e,e.pendingProps,e.type.render,e.ref,Bn);break;case 5:fc(e);var a=e;a===De&&(Mn?(es(a),a.tag===5&&a.stateNode!=null&&(oe=a.stateNode)):(es(a),Mn=!0));default:jh(t,e),e=Dn=Zd(e,ya),e=Sh(t,e,ya)}n.memoizedProps=n.pendingProps,e===null?Is(n):Dn=e}function cr(n,e,t,a){ha=di=null,fc(e),Ji=null,Zr=0;var r=e.return;try{if(Dy(n,r,e,t,Bn)){be=1,_s(n,wt(t,n.current)),Dn=null;return}}catch(l){if(r!==null)throw Dn=r,l;be=1,_s(n,wt(t,n.current)),Dn=null;return}e.flags&32768?(Mn||a===1?n=!0:tr||(Bn&536870912)!==0?n=!1:(Ka=n=!0,(a===2||a===9||a===3||a===6)&&(a=Ge.current,a!==null&&a.tag===13&&(a.flags|=16384))),om(e,n)):Is(e)}function Is(n){var e=n;do{if((e.flags&32768)!==0){om(e,Ka);return}n=e.return;var t=Hy(e.alternate,e,ya);if(t!==null){Dn=t;return}if(e=e.sibling,e!==null){Dn=e;return}Dn=e=n}while(e!==null);be===0&&(be=5)}function om(n,e){do{var t=qy(n.alternate,n);if(t!==null){t.flags&=32767,Dn=t;return}if(t=n.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!e&&(n=n.sibling,n!==null)){Dn=n;return}Dn=n=t}while(n!==null);be=6,Dn=null}function cm(n,e,t,a,r,l,s,c,h,S,O,C){n.cancelPendingCommit=null;do Vs();while(me!==0);if((Jn&6)!==0)throw Error(d(327));if(e!==null){if(e===n.current)throw Error(d(177));n===se&&(Dn=se=null,Bn=0),ji=e,Ht=n,$t=t,au=r,Wh=a,Zy(n,e,t,s,c,h,C)}}function Zy(n,e,t,a,r,l,s){var c=e.lanes|e.childLanes;if(tu=c,c|=qo,xo(n,t,c,a,r,l),rr=null,(t&335544064)===t?(lr=Ty(n),a=10262):(lr=null,a=10256),(e.subtreeFlags&a)!==0||(e.flags&a)!==0?(n.callbackNode=null,n.callbackPriority=0,e0(Rt,function(){return cu(),null})):(n.callbackNode=null,n.callbackPriority=0),As=!1,a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=tn.T,tn.T=null,r=fn.p,fn.p=2,l=Jn,Jn|=4;try{Gy(n,e,t)}finally{Jn=l,fn.p=r,tn.T=a}}me=1,As?ir=_0(s,n.containerInfo,lr,lu,su,Fy,ou,cu,Py):(lu(),su(),ou())}function Py(n){if(me!==0){var e=Ht.onRecoverableError;e(n,{componentStack:null})}}function Fy(){me===3&&(me=0,Kh(ji,Ht),me=4)}function lu(){if(me===1){me=0;var n=Ht,e=ji,t=$t,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=tn.T,tn.T=null;var r=fn.p;fn.p=2;var l=Jn;Jn|=4;try{sl=Cs=!1,Ih(e,n,t),t=_u;var s=Hd(n.containerInfo),c=t.focusedElem,h=t.selectionRange;if(s!==c&&c&&c.ownerDocument&&Ud(c.ownerDocument.documentElement,c)){if(h!==null&&Do(c)){var S=h.start,O=h.end;if(O===void 0&&(O=S),"selectionStart"in c)c.selectionStart=S,c.selectionEnd=Math.min(O,c.value.length);else{var C=c.ownerDocument||document,x=C&&C.defaultView||window;if(x.getSelection){var N=x.getSelection(),Q=c.textContent.length,an=Math.min(h.start,Q),En=h.end===void 0?an:Math.min(h.end,Q);!N.extend&&an>En&&(s=En,En=an,an=s);var _=Bd(c,an),b=Bd(c,En);if(_&&b&&(N.rangeCount!==1||N.anchorNode!==_.node||N.anchorOffset!==_.offset||N.focusNode!==b.node||N.focusOffset!==b.offset)){var w=C.createRange();w.setStart(_.node,_.offset),N.removeAllRanges(),an>En?(N.addRange(w),N.extend(b.node,b.offset)):(w.setEnd(b.node,b.offset),N.addRange(w))}}}}for(C=[],N=c;N=N.parentNode;)N.nodeType===1&&C.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<C.length;c++){var k=C[c];k.element.scrollLeft=k.left,k.element.scrollTop=k.top}}br=!!xu,_u=xu=null}finally{Jn=l,fn.p=r,tn.T=a}}n.current=e,me=2}}function su(){if(me===2){me=0;var n=Ht,e=ji,t=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||t){t=tn.T,tn.T=null;var a=fn.p;fn.p=2;var r=Jn;Jn|=4;try{Bh(n,e.alternate,e)}finally{Jn=r,fn.p=a,tn.T=t}}me=3}}function ou(){if(me===4||me===3){me=0;var n=ir;ir=null,Ar();var e=Ht,t=ji,a=$t,r=Wh,l=(a&335544064)===a?10262:10256;if((t.subtreeFlags&l)!==0||(t.flags&l)!==0?me=5:(me=0,ji=Ht=null,um(e,e.pendingLanes)),l=e.pendingLanes,l===0&&(Xa=null),Rr(a),t=t.stateNode,qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(le,t,void 0,(t.current.flags&128)===128)}catch{}if(r!==null){t=tn.T,l=fn.p,fn.p=2,tn.T=null;try{for(var s=e.onRecoverableError,c=0;c<r.length;c++){var h=r[c];s(h.value,{componentStack:h.stack})}}finally{tn.T=t,fn.p=l}}if(r=rr,s=lr,lr=null,r!==null&&(rr=null,s===null&&(s=[]),n!==null))for(h=0;h<r.length;h++)t=(0,r[h])(s),t!==void 0&&n.finished.finally(t);($t&3)!==0&&Vs(),na(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===qs?dl++:(dl=0,qs=e):(dl=0,qs=null),fl(0)}}function um(n,e){(n.pooledCacheLanes&=e)===0&&(e=n.pooledCache,e!=null&&(n.pooledCache=null,Qr(e)))}function Vs(){return ir!==null&&(ir.skipTransition(),ir=null),lu(),su(),ou(),cu()}function cu(){if(me!==5)return!1;var n=Ht,e=tu;tu=0;var t=Rr($t),a=tn.T,r=fn.p;try{fn.p=32>t?32:t,tn.T=null,t=au,au=null;var l=Ht,s=$t;if(me=0,ji=Ht=null,$t=0,(Jn&6)!==0)throw Error(d(331));var c=Jn;if(Jn|=4,Zh(l.current),Qh(l,l.current,s,t),Jn=c,fl(0,!1),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(le,l)}catch{}return!0}finally{fn.p=r,tn.T=a,um(n,e)}}function dm(n,e,t){e=wt(t,e),e=Nc(n.stateNode,e,2),n=Ha(n,e,2),n!==null&&(ri(n,2),na(n))}function ee(n,e,t){if(n.tag===3)dm(n,n,t);else for(;e!==null;){if(e.tag===3){dm(e,n,t);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Xa===null||!Xa.has(a))){n=wt(t,n),t=sh(2),a=Ha(e,t,2),a!==null&&(oh(t,a,e,n),ri(a,2),na(a));break}}e=e.return}}function uu(n,e,t){var a=n.pingCache;if(a===null){a=n.pingCache=new Vy;var r=new Set;a.set(e,r)}else r=a.get(e),r===void 0&&(r=new Set,a.set(e,r));r.has(t)||(nu=!0,r.add(t),n=Wy.bind(null,n,e,t),e.then(n,n))}function Wy(n,e,t){var a=n.pingCache;a!==null&&a.delete(e),n.pingedLanes|=n.suspendedLanes&t,n.warmLanes&=~t,se===n&&(Bn&t)===t&&((be===4||be===3&&(Bn&62914560)===Bn&&300>Xe()-Bs)&&(Jn&2)===0?or(n,0):zs|=t,ar===Bn&&(ar=0)),na(n)}function fm(n,e){e===0&&(e=Mr()),n=oi(n,e),n!==null&&(ri(n,e),na(n))}function $y(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),fm(n,t)}function n0(n,e){var t=0;switch(n.tag){case 31:case 13:var a=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:a=n.stateNode;break;case 22:a=n.stateNode._retryCache;break;default:throw Error(d(314))}a!==null&&a.delete(e),fm(n,t)}function e0(n,e){return Er(n,e)}var ur=null,dr=null,du=!1,Ks=!1,fu=!1,Za=0;function na(n){n!==dr&&n.next===null&&(dr===null?ur=dr=n:dr=dr.next=n),Ks=!0,du||(du=!0,a0())}function fl(n,e){if(!fu&&Ks){fu=!0;do for(var t=!1,a=ur;a!==null;){if(n!==0){var r=a.pendingLanes;if(r===0)var l=0;else{var s=a.suspendedLanes,c=a.pingedLanes;l=(1<<31-K(42|n)+1)-1,l&=r&~(s&~c),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(t=!0,pm(a,l))}else l=Bn,l=Ea(a,a===se?l:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(l&3)===0||ii(a,l)||(t=!0,pm(a,l));a=a.next}while(t);fu=!1}}function t0(){hm()}function hm(){Ks=du=!1;var n=0;Za!==0&&m0()&&(n=Za);for(var e=Xe(),t=null,a=ur;a!==null;){var r=a.next,l=mm(a,e);l===0?(a.next=null,t===null?ur=r:t.next=r,r===null&&(dr=t)):(t=a,(n!==0||(l&3)!==0)&&(Ks=!0)),a=r}me!==0&&me!==5||fl(n),Za!==0&&(Za=0)}function mm(n,e){for(var t=n.suspendedLanes,a=n.pingedLanes,r=n.expirationTimes,l=n.pendingLanes&-62914561;0<l;){var s=31-K(l),c=1<<s,h=r[s];h===-1?((c&t)===0||(c&a)!==0)&&(r[s]=yo(c,e)):h<=e&&(n.expiredLanes|=c),l&=~c}if(e=se,t=Bn,t=Ea(n,n===e?t:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),a=n.callbackNode,t===0||n===e&&(ne===2||ne===9)||n.cancelPendingCommit!==null)return a!==null&&a!==null&&Or(a),n.callbackNode=null,n.callbackPriority=0;if((t&3)===0||ii(n,t)){if(e=t&-t,e===n.callbackPriority)return e;switch(a!==null&&Or(a),Rr(t)){case 2:case 8:t=kr;break;case 32:t=Rt;break;case 268435456:t=L;break;default:t=Rt}return a=gm.bind(null,n),t=Er(t,a),n.callbackPriority=e,n.callbackNode=t,e}return a!==null&&a!==null&&Or(a),n.callbackPriority=2,n.callbackNode=null,2}function gm(n,e){if(me!==0&&me!==5)return n.callbackNode=null,n.callbackPriority=0,null;var t=n.callbackNode;if(Vs()&&n.callbackNode!==t)return null;var a=Bn;return a=Ea(n,n===se?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),a===0?null:(nm(n,a,e),mm(n,Xe()),n.callbackNode!=null&&n.callbackNode===t?gm.bind(null,n):null)}function pm(n,e){if(Vs())return null;nm(n,e,!0)}function a0(){p0(function(){(Jn&6)!==0?Er(Ml,t0):hm()})}function hu(){if(Za===0){var n=mi;n===0&&(n=It,It<<=1,(It&261888)===0&&(It=256)),Za=n}return Za}function bm(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Gl(n)}function i0(n,e,t,a,r){if(e==="submit"&&t&&t.stateNode===r){var l=bm((r[U]||null).action),s=a.submitter;s&&(e=(e=s[U]||null)?bm(e.formAction):s.getAttribute("formAction"),e!==null&&(l=e,s=null));var c=new Kl("action","action",null,a,r);n.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Za!==0){var h=new FormData(r,s);_c(t,{pending:!0,data:h,method:r.method,action:l},null,h)}}else typeof l=="function"&&(c.preventDefault(),h=new FormData(r,s),_c(t,{pending:!0,data:h,method:r.method,action:l},l,h))},currentTarget:r}]})}}for(var mu=0;mu<Ho.length;mu++){var gu=Ho[mu],r0=gu.toLowerCase(),l0=gu[0].toUpperCase()+gu.slice(1);Dt(r0,"on"+l0)}Dt(Yd,"onAnimationEnd"),Dt(Id,"onAnimationIteration"),Dt(Vd,"onAnimationStart"),Dt("dblclick","onDoubleClick"),Dt("focusin","onFocus"),Dt("focusout","onBlur"),Dt(gy,"onTransitionRun"),Dt(py,"onTransitionStart"),Dt(by,"onTransitionCancel"),Dt(Kd,"onTransitionEnd"),la("onMouseEnter",["mouseout","mouseover"]),la("onMouseLeave",["mouseout","mouseover"]),la("onPointerEnter",["pointerout","pointerover"]),la("onPointerLeave",["pointerout","pointerover"]),St("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),St("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),St("onBeforeInput",["compositionend","keypress","textInput","paste"]),St("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),St("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),St("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),s0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hl));function vm(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var a=n[t],r=a.event;a=a.listeners;n:{var l=void 0;if(e)for(var s=a.length-1;0<=s;s--){var c=a[s],h=c.instance,S=c.currentTarget;if(c=c.listener,h!==l&&r.isPropagationStopped())break n;l=c,r.currentTarget=S;try{l(r)}catch(O){Jl(O)}r.currentTarget=null,l=h}else for(s=0;s<a.length;s++){if(c=a[s],h=c.instance,S=c.currentTarget,c=c.listener,h!==l&&r.isPropagationStopped())break n;l=c,r.currentTarget=S;try{l(r)}catch(O){Jl(O)}r.currentTarget=null,l=h}}}}function zn(n,e){var t=e[Rn];t===void 0&&(t=e[Rn]=new Set);var a=n+"__bubble";t.has(a)||(ym(e,n,2,!1),t.add(a))}function pu(n,e,t){var a=0;e&&(a|=4),ym(t,n,a,e)}var Qs="_reactListening"+Math.random().toString(36).slice(2);function bu(n){if(!n[Qs]){n[Qs]=!0,Bl.forEach(function(t){t!=="selectionchange"&&(s0.has(t)||pu(t,!1,n),pu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Qs]||(e[Qs]=!0,pu("selectionchange",!1,e))}}function ym(n,e,t,a){switch(og(e)){case 2:var r=$0;break;case 8:r=nx;break;default:r=Bu}t=r.bind(null,e,t,n),r=void 0,!wo||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),a?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function vu(n,e,t,a,r){var l=a;if((e&1)===0&&(e&2)===0&&a!==null)n:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var c=a.stateNode.containerInfo;if(c===r)break;if(s===4)for(s=a.return;s!==null;){var h=s.tag;if((h===3||h===4)&&s.stateNode.containerInfo===r)return;s=s.return}for(;c!==null;){if(s=Le(c),s===null)return;if(h=s.tag,h===5||h===6||h===26||h===27){a=l=s;continue n}c=c.parentNode}}a=a.return}vd(function(){var S=l,O=To(t),C=[];n:{var x=Qd.get(n);if(x!==void 0){var N=Kl,Q=n;switch(n){case"keypress":if(Il(t)===0)break n;case"keydown":case"keyup":N=K1;break;case"focusin":Q="focus",N=Ao;break;case"focusout":Q="blur",N=Ao;break;case"beforeblur":case"afterblur":N=Ao;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=_d;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=R1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=P1;break;case Yd:case Id:case Vd:N=z1;break;case Kd:N=W1;break;case"scroll":case"scrollend":N=M1;break;case"wheel":N=ny;break;case"copy":case"cut":case"paste":N=U1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Td;break;case"submit":N=J1;break;case"toggle":case"beforetoggle":N=ty}var an=(e&4)!==0,En=!an&&(n==="scroll"||n==="scrollend"),_=an?x!==null?x+"Capture":null:x;an=[];for(var b=S,w;b!==null;){var k=b;if(w=k.stateNode,k=k.tag,k!==5&&k!==26&&k!==27||w===null||_===null||(k=Dr(b,_),k!=null&&an.push(ml(b,k,w))),En)break;b=b.return}0<an.length&&(x=new N(x,Q,null,t,O),C.push({event:x,listeners:an}))}}if((e&7)===0){n:{if(N=n==="mouseover"||n==="pointerover",x=n==="mouseout"||n==="pointerout",N&&t!==So&&(Q=t.relatedTarget||t.fromElement)&&(Le(Q)||Q[rn]))break n;(x||N)&&(Q=O.window===O?O:(N=O.ownerDocument)?N.defaultView||N.parentWindow:window,x?(N=t.relatedTarget||t.toElement,x=S,N=N?Le(N):null,N!==null&&(En=R(N),an=N.tag,N!==En||an!==5&&an!==27&&an!==6)&&(N=null)):(x=null,N=S),x!==N&&(an=_d,k="onMouseLeave",_="onMouseEnter",b="mouse",(n==="pointerout"||n==="pointerover")&&(an=Td,k="onPointerLeave",_="onPointerEnter",b="pointer"),En=x==null?Q:Aa(x),w=N==null?Q:Aa(N),Q=new an(k,b+"leave",x,t,O),Q.target=En,Q.relatedTarget=w,k=null,Le(O)===S&&(an=new an(_,b+"enter",N,t,O),an.target=w,an.relatedTarget=En,k=an),En=k,an=x&&N?Hn(x,N,o0):null,x!==null&&xm(C,Q,x,an,!1),N!==null&&En!==null&&xm(C,En,N,an,!0)))}n:{if(x=S?Aa(S):window,N=x.nodeName&&x.nodeName.toLowerCase(),N==="select"||N==="input"&&x.type==="file")var nn=Md;else if(Ad(x))if(Cd)nn=fy;else{nn=uy;var Un=cy}else N=x.nodeName,!N||N.toLowerCase()!=="input"||x.type!=="checkbox"&&x.type!=="radio"?S&&_o(S.elementType)&&(nn=Md):nn=dy;if(nn&&(nn=nn(n,S))){kd(C,nn,t,O);break n}Un&&Un(n,x,S)}switch(Un=S?Aa(S):window,n){case"focusin":(Ad(Un)||Un.contentEditable==="true")&&(Hi=Un,zo=S,Ir=null);break;case"focusout":Ir=zo=Hi=null;break;case"mousedown":Bo=!0;break;case"contextmenu":case"mouseup":case"dragend":Bo=!1,qd(C,t,O);break;case"selectionchange":if(my)break;case"keydown":case"keyup":qd(C,t,O)}var cn;if(Mo)n:{switch(n){case"compositionstart":var hn="onCompositionStart";break n;case"compositionend":hn="onCompositionEnd";break n;case"compositionupdate":hn="onCompositionUpdate";break n}hn=void 0}else Ui?Ed(n,t)&&(hn="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(hn="onCompositionStart");hn&&(jd&&t.locale!=="ko"&&(Ui||hn!=="onCompositionStart"?hn==="onCompositionEnd"&&Ui&&(cn=yd()):(ka=O,No="value"in ka?ka.value:ka.textContent,Ui=!0)),Un=Xs(S,hn),0<Un.length&&(hn=new Sd(hn,n,null,t,O),C.push({event:hn,listeners:Un}),cn?hn.data=cn:(cn=Od(t),cn!==null&&(hn.data=cn)))),(cn=iy?ry(n,t):ly(n,t))&&(hn=Xs(S,"onBeforeInput"),0<hn.length&&(Un=new Sd("onBeforeInput","beforeinput",null,t,O),C.push({event:Un,listeners:hn}),Un.data=cn)),i0(C,n,S,t,O)}vm(C,e)})}function ml(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Xs(n,e){for(var t=e+"Capture",a=[];n!==null;){var r=n,l=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||l===null||(r=Dr(n,t),r!=null&&a.unshift(ml(n,r,l)),r=Dr(n,e),r!=null&&a.push(ml(n,r,l))),n.tag===3)return a;n=n.return}return[]}function o0(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function xm(n,e,t,a,r){for(var l=e._reactName,s=[];t!==null&&t!==a;){var c=t,h=c.alternate,S=c.stateNode;if(c=c.tag,h!==null&&h===a)break;c!==5&&c!==26&&c!==27||S===null||(h=S,r?(S=Dr(t,l),S!=null&&s.unshift(ml(t,S,h))):r||(S=Dr(t,l),S!=null&&s.push(ml(t,S,h)))),t=t.return}s.length!==0&&n.push({event:e,listeners:s})}var c0=/\r\n?/g,u0=/\u0000|\uFFFD/g;function _m(n){return(typeof n=="string"?n:""+n).replace(c0,`
`).replace(u0,"")}function Sm(n,e){return e=_m(e),_m(n)===e}function te(n,e,t,a,r,l){switch(t){case"children":if(typeof a=="string")e==="body"||e==="textarea"&&a===""||Di(n,a);else if(typeof a=="number"||typeof a=="bigint")e!=="body"&&Di(n,""+a);else return;break;case"className":sa(n,"class",a);break;case"tabIndex":sa(n,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":sa(n,t,a);break;case"style":pd(n,a,l);return;case"data":if(e!=="object"){sa(n,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||t!=="href")){n.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){n.removeAttribute(t);break}a=Gl(a),n.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){n.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(t==="formAction"?(e!=="input"&&te(n,e,"name",r.name,r,null),te(n,e,"formEncType",r.formEncType,r,null),te(n,e,"formMethod",r.formMethod,r,null),te(n,e,"formTarget",r.formTarget,r,null)):(te(n,e,"encType",r.encType,r,null),te(n,e,"method",r.method,r,null),te(n,e,"target",r.target,r,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){n.removeAttribute(t);break}a=Gl(a),n.setAttribute(t,a);break;case"onClick":a!=null&&(n.onclick=Vt);return;case"onScroll":a!=null&&zn("scroll",n);return;case"onScrollEnd":a!=null&&zn("scrollend",n);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(t=a.__html,t!=null){if(r.children!=null)throw Error(d(60));l?.__html!==t&&(n.innerHTML=t)}}break;case"multiple":n.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":n.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){n.removeAttribute("xlink:href");break}t=Gl(a),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(t,a):n.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(t,""):n.removeAttribute(t);break;case"capture":case"download":a===!0?n.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(t,a):n.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?n.setAttribute(t,a):n.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?n.removeAttribute(t):n.setAttribute(t,a);break;case"popover":zn("beforetoggle",n),zn("toggle",n),Qn(n,"popover",a);break;case"xlinkActuate":Ue(n,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Ue(n,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Ue(n,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Ue(n,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Ue(n,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Ue(n,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Ue(n,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Ue(n,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Ue(n,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Qn(n,"is",a);break;case"innerText":case"textContent":return;default:if(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")t=A1.get(t)||t,Qn(n,t,a);else return}Gn=!0}function yu(n,e,t,a,r,l){switch(t){case"style":pd(n,a,l);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(t=a.__html,t!=null){if(r.children!=null)throw Error(d(60));l?.__html!==t&&(n.innerHTML=t)}}break;case"children":if(typeof a=="string")Di(n,a);else if(typeof a=="number"||typeof a=="bigint")Di(n,""+a);else return;break;case"onScroll":a!=null&&zn("scroll",n);return;case"onScrollEnd":a!=null&&zn("scrollend",n);return;case"onClick":a!=null&&(n.onclick=Vt);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Ul.hasOwnProperty(t))n:{if(t[0]==="o"&&t[1]==="n"&&(r=t.endsWith("Capture"),l=t.slice(2,r?t.length-7:void 0),e=n[U]||null,e=e!=null?e[t]:null,typeof e=="function"&&n.removeEventListener(l,e,r),typeof a=="function")){typeof e!="function"&&e!==null&&(t in n?n[t]=null:n.hasAttribute(t)&&n.removeAttribute(t)),n.addEventListener(l,a,r);break n}Gn=!0,t in n?n[t]=a:a===!0?n.setAttribute(t,""):Qn(n,t,a)}return}Gn=!0}function Ve(n,e,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":zn("error",n),zn("load",n);var a=!1,r=!1,l;for(l in t)if(t.hasOwnProperty(l)){var s=t[l];if(s!=null)switch(l){case"src":a=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,e));default:te(n,e,l,s,t,null)}}r&&te(n,e,"srcSet",t.srcSet,t,null),a&&te(n,e,"src",t.src,t,null);return;case"input":zn("invalid",n);var c=l=s=r=null,h=null,S=null;for(a in t)if(t.hasOwnProperty(a)){var O=t[a];if(O!=null)switch(a){case"name":r=O;break;case"type":s=O;break;case"checked":h=O;break;case"defaultChecked":S=O;break;case"value":l=O;break;case"defaultValue":c=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(d(137,e));break;default:te(n,e,a,O,t,null)}}ql(n,l,c,h,S,s,r,!1);return;case"select":zn("invalid",n),a=s=l=null;for(r in t)if(t.hasOwnProperty(r)&&(c=t[r],c!=null))switch(r){case"value":l=c;break;case"defaultValue":s=c;break;case"multiple":a=c;default:te(n,e,r,c,t,null)}e=l,t=s,n.multiple=!!a,e!=null?Li(n,!!a,e,!1):t!=null&&Li(n,!!a,t,!0);return;case"textarea":zn("invalid",n),l=r=a=null;for(s in t)if(t.hasOwnProperty(s)&&(c=t[s],c!=null))switch(s){case"value":a=c;break;case"defaultValue":r=c;break;case"children":l=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(d(91));break;default:te(n,e,s,c,t,null)}md(n,a,r,l);return;case"option":for(h in t)t.hasOwnProperty(h)&&(a=t[h],a!=null)&&(h==="selected"?n.selected=a&&typeof a!="function"&&typeof a!="symbol":te(n,e,h,a,t,null));return;case"dialog":zn("beforetoggle",n),zn("toggle",n),zn("cancel",n),zn("close",n);break;case"iframe":case"object":zn("load",n);break;case"video":case"audio":for(a=0;a<hl.length;a++)zn(hl[a],n);break;case"image":zn("error",n),zn("load",n);break;case"details":zn("toggle",n);break;case"embed":case"source":case"link":zn("error",n),zn("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in t)if(t.hasOwnProperty(S)&&(a=t[S],a!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,e));default:te(n,e,S,a,t,null)}return;default:if(_o(e)){for(O in t)t.hasOwnProperty(O)&&(a=t[O],a!==void 0&&yu(n,e,O,a,t,void 0));return}}for(c in t)t.hasOwnProperty(c)&&(a=t[c],a!=null&&te(n,e,c,a,t,null))}var d0={};function f0(n,e,t,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,l=null,s=null,c=null,h=null,S=null,O=null;for(N in t){var C=t[N];if(t.hasOwnProperty(N)&&C!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":h=C;default:a.hasOwnProperty(N)||te(n,e,N,null,a,C)}}for(var x in a){var N=a[x];if(C=t[x],a.hasOwnProperty(x)&&(N!=null||C!=null))switch(x){case"type":N!==C&&(Gn=!0),l=N;break;case"name":N!==C&&(Gn=!0),r=N;break;case"checked":N!==C&&(Gn=!0),S=N;break;case"defaultChecked":N!==C&&(Gn=!0),O=N;break;case"value":N!==C&&(Gn=!0),s=N;break;case"defaultValue":N!==C&&(Gn=!0),c=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(d(137,e));break;default:N!==C&&te(n,e,x,N,a,C)}}ft(n,s,c,h,S,O,l,r);return;case"select":N=s=c=x=null;for(l in t)if(h=t[l],t.hasOwnProperty(l)&&h!=null)switch(l){case"value":break;case"multiple":N=h;default:a.hasOwnProperty(l)||te(n,e,l,null,a,h)}for(r in a)if(l=a[r],h=t[r],a.hasOwnProperty(r)&&(l!=null||h!=null))switch(r){case"value":l!==h&&(Gn=!0),x=l;break;case"defaultValue":l!==h&&(Gn=!0),c=l;break;case"multiple":l!==h&&(Gn=!0),s=l;default:l!==h&&te(n,e,r,l,a,h)}e=c,t=s,a=N,x!=null?Li(n,!!t,x,!1):!!a!=!!t&&(e!=null?Li(n,!!t,e,!0):Li(n,!!t,t?[]:"",!1));return;case"textarea":N=x=null;for(c in t)if(r=t[c],t.hasOwnProperty(c)&&r!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:te(n,e,c,null,a,r)}for(s in a)if(r=a[s],l=t[s],a.hasOwnProperty(s)&&(r!=null||l!=null))switch(s){case"value":r!==l&&(Gn=!0),x=r;break;case"defaultValue":r!==l&&(Gn=!0),N=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(d(91));break;default:r!==l&&te(n,e,s,r,a,l)}hd(n,x,N);return;case"option":for(var Q in t)x=t[Q],t.hasOwnProperty(Q)&&x!=null&&!a.hasOwnProperty(Q)&&(Q==="selected"?n.selected=!1:te(n,e,Q,null,a,x));for(h in a)x=a[h],N=t[h],a.hasOwnProperty(h)&&x!==N&&(x!=null||N!=null)&&(h==="selected"?(x!==N&&(Gn=!0),n.selected=x&&typeof x!="function"&&typeof x!="symbol"):te(n,e,h,x,a,N));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var an in t)x=t[an],t.hasOwnProperty(an)&&x!=null&&!a.hasOwnProperty(an)&&te(n,e,an,null,a,x);for(S in a)if(x=a[S],N=t[S],a.hasOwnProperty(S)&&x!==N&&(x!=null||N!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(d(137,e));break;default:te(n,e,S,x,a,N)}return;default:if(_o(e)){for(var En in t)x=t[En],t.hasOwnProperty(En)&&x!==void 0&&!a.hasOwnProperty(En)&&yu(n,e,En,void 0,a,x);for(O in a)x=a[O],N=t[O],!a.hasOwnProperty(O)||x===N||x===void 0&&N===void 0||yu(n,e,O,x,a,N);return}}for(var _ in t)x=t[_],t.hasOwnProperty(_)&&x!=null&&!a.hasOwnProperty(_)&&te(n,e,_,null,a,x);for(C in a)x=a[C],N=t[C],!a.hasOwnProperty(C)||x===N||x==null&&N==null||te(n,e,C,x,a,N)}function Tm(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function h0(){if(typeof performance.getEntriesByType=="function"){for(var n=0,e=0,t=performance.getEntriesByType("resource"),a=0;a<t.length;a++){var r=t[a],l=r.transferSize,s=r.initiatorType,c=r.duration;if(l&&c&&Tm(s)){for(s=0,c=r.responseEnd,a+=1;a<t.length;a++){var h=t[a],S=h.startTime;if(S>c)break;var O=h.transferSize,C=h.initiatorType;O&&Tm(C)&&(h=h.responseEnd,s+=O*(h<c?1:(c-S)/(h-S)))}if(--a,e+=8*(l+s)/(r.duration/1e3),n++,10<n)break}}if(0<n)return e/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var xu=null,_u=null;function gl(n){return n.nodeType===9?n:n.ownerDocument}function jm(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wm(n,e){if(n===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&e==="foreignObject"?0:n}function Nm(n,e,t,a){return t=gl(t).createElement(n),t[Me]=a,t[U]=e,Ve(t,n,e),Te(t),t}function Su(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Tu=null;function m0(){var n=window.event;return n&&n.type==="popstate"?n===Tu?!1:(Tu=n,!0):(Tu=null,!1)}var ju=typeof setTimeout=="function"?setTimeout:void 0,g0=typeof clearTimeout=="function"?clearTimeout:void 0,Em=typeof Promise=="function"?Promise:void 0,Om=typeof requestAnimationFrame=="function"?requestAnimationFrame:ju,p0=typeof queueMicrotask=="function"?queueMicrotask:typeof Em<"u"?function(n){return Em.resolve(null).then(n).catch(b0)}:ju;function b0(n){setTimeout(function(){throw n})}function Pa(n){return n==="head"}function Am(n,e){var t=e,a=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"||t==="/&"){if(a===0){n.removeChild(r),vr(e);return}a--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")a++;else if(t==="html")Cu(n.ownerDocument.documentElement);else if(t==="head"){t=n.ownerDocument.head,Cu(t);for(var l=t.firstChild;l;){var s=l.nextSibling,c=l.nodeName;l[rt]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&l.rel.toLowerCase()==="stylesheet"||t.removeChild(l),l=s}}else t==="body"&&Cu(n.ownerDocument.body);t=r}while(t);vr(e)}function km(n,e){var t=n;n=0;do{var a=t.nextSibling;if(t.nodeType===1?e?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(e?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(n===0)break;n--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||n++;t=a}while(t)}function Mm(n,e,t){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,n.style.viewTransitionName=e,t!=null&&(n.style.viewTransitionClass=t),t=getComputedStyle(n),t.display==="inline"){if(e=n.getClientRects(),e.length===1)var a=1;else for(var r=a=0;r<e.length;r++){var l=e[r];0<l.width&&0<l.height&&a++}a===1&&(n=n.style,n.display=e.length===1?"inline-block":"block",n.marginTop="-"+t.paddingTop,n.marginBottom="-"+t.paddingBottom)}}function Cm(n,e){n=n.style,e=e.style;var t=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;n.viewTransitionName=t==null||typeof t=="boolean"?"":(""+t).trim(),t=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,n.viewTransitionClass=t==null||typeof t=="boolean"?"":(""+t).trim(),n.display==="inline-block"&&(e==null?n.display=n.margin="":(t=e.display,n.display=t==null||typeof t=="boolean"?"":t,t=e.margin,t!=null?n.margin=t:(t=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],n.marginTop=t==null||typeof t=="boolean"?"":t,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],n.marginBottom=e==null||typeof e=="boolean"?"":e)))}function v0(n,e,t){return t=t.ownerDocument.defaultView,{rect:n,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=n.bottom&&0<=n.right&&n.top<=t.innerHeight&&n.left<=t.innerWidth}}function wu(n){var e=n.getBoundingClientRect(),t=getComputedStyle(n);return v0(e,t,n)}function y0(n){return n.documentElement.clientHeight}function x0(n){this.addEventListener("load",n),this.addEventListener("error",n)}function _0(n,e,t,a,r,l,s,c,h){var S=e.nodeType===9?e:e.ownerDocument;try{var O=S.startViewTransition({update:function(){var x=S.defaultView,N=x.navigation&&x.navigation.transition,Q=S.fonts.status;a();var an=[];if(Q==="loaded"&&(y0(S),S.fonts.status==="loading"&&an.push(S.fonts.ready)),Q=an.length,n!==null)for(var En=n.suspenseyImages,_=0,b=0;b<En.length;b++){var w=En[b];if(!w.complete){var k=w.getBoundingClientRect();if(0<k.bottom&&0<k.right&&k.top<x.innerHeight&&k.left<x.innerWidth){if(_+=$m(w),_>Ps){an.length=Q;break}w=new Promise(x0.bind(w)),an.push(w)}}}if(0<an.length)return x=Promise.race([Promise.all(an),new Promise(function(nn){return setTimeout(nn,500)})]).then(r,r),(N?Promise.allSettled([N.finished,x]):x).then(l,l);if(r(),N)return N.finished.then(l,l);l()},types:t});S.__reactViewTransition=O;var C=[];return O.ready.then(function(){for(var x=S.documentElement.getAnimations({subtree:!0}),N=0;N<x.length;N++){var Q=x[N],an=Q.effect,En=an.pseudoElement;if(En!=null&&En.startsWith("::view-transition")){C.push(Q),Q=an.getKeyframes();for(var _=En=void 0,b=!0,w=0;w<Q.length;w++){var k=Q[w],nn=k.width;if(En===void 0)En=nn;else if(En!==nn){b=!1;break}if(nn=k.height,_===void 0)_=nn;else if(_!==nn){b=!1;break}delete k.width,delete k.height,k.transform==="none"&&delete k.transform}b&&En!==void 0&&_!==void 0&&(an.setKeyframes(Q),b=getComputedStyle(an.target,an.pseudoElement),b.width!==En||b.height!==_)&&(b=Q[0],b.width=En,b.height=_,b=Q[Q.length-1],b.width=En,b.height=_,an.setKeyframes(Q))}}s()},function(x){S.__reactViewTransition===O&&(S.__reactViewTransition=null);try{typeof x=="object"&&x!==null&&x.name==="InvalidStateError"&&(x.message==="View transition was skipped because document visibility state is hidden."||x.message==="Skipping view transition because document visibility state has become hidden."||x.message==="Skipping view transition because viewport size changed."||x.message==="Transition was aborted because of invalid state")&&(x=null),x!==null&&h(x)}finally{a(),r(),s()}}),O.finished.finally(function(){for(var x=0;x<C.length;x++)C[x].cancel();S.__reactViewTransition===O&&(S.__reactViewTransition=null),c()}),O}catch{return a(),r(),s(),null}}function wi(n,e){this._scope=document.documentElement,this._selector="::view-transition-"+n+"("+e+")"}wi.prototype.animate=function(n,e){return e=typeof e=="number"?{duration:e}:on({},e),e.pseudoElement=this._selector,this._scope.animate(n,e)},wi.prototype.getAnimations=function(){for(var n=this._scope,e=this._selector,t=n.getAnimations({subtree:!0}),a=[],r=0;r<t.length;r++){var l=t[r].effect;l!==null&&l.target===n&&l.pseudoElement===e&&a.push(t[r])}return a},wi.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Rm(n){return{name:n,group:new wi("group",n),imagePair:new wi("image-pair",n),old:new wi("old",n),new:new wi("new",n)}}function yt(n){this._fragmentFiber=n,this._observers=this._eventListeners=null}yt.prototype.addEventListener=function(n,e,t){var a=null,r=null;if(!(t!=null&&typeof t!="boolean"&&(a=t.signal||null,a!==null&&a.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var l=this._eventListeners;if(Dm(l,n,e,t)===-1){var s=this,c=e;t!=null&&typeof t!="boolean"&&t.once===!0&&(c=function(h){s.removeEventListener(n,e,t),typeof e=="function"?e.call(this,h):e.handleEvent(h)}),a!==null&&(r=s.removeEventListener.bind(s,n,e,t),a.addEventListener("abort",r,{once:!0}),r=a.removeEventListener.bind(a,"abort",r)),a=fr(t),l.push({type:n,listener:e,optionsOrUseCapture:t,attachedListener:c,cleanup:r}),v(this._fragmentFiber.child,!1,S0,n,c,a)}this._eventListeners=l}};function S0(n,e,t,a){return en(n).addEventListener(e,t,a),!1}yt.prototype.removeEventListener=function(n,e,t){var a=this._eventListeners;if(a!==null&&(e=Dm(a,n,e,t),e!==-1)){var r=a[e];t=r.attachedListener;var l=r.cleanup;r=fr(r.optionsOrUseCapture),v(this._fragmentFiber.child,!1,T0,n,t,r),a.splice(e,1),l!==null&&l()}};function T0(n,e,t,a){return en(n).removeEventListener(e,t,a),!1}function fr(n){return n!=null&&typeof n!="boolean"&&(n.once===!0||n.signal instanceof AbortSignal)?{capture:n.capture,passive:n.passive}:n}function Lm(n){return n==null?"c=0":typeof n=="boolean"?"c="+(n?"1":"0"):"c="+(n.capture?"1":"0")}function Dm(n,e,t,a){if(n.length===0)return-1;a=Lm(a);for(var r=0;r<n.length;r++){var l=n[r];if(l.type===e&&l.listener===t&&Lm(l.optionsOrUseCapture)===a)return r}return-1}yt.prototype.dispatchEvent=function(n){var e=E(this._fragmentFiber);if(e===null)return!0;e=en(e);var t=this._eventListeners;if(t!==null&&0<t.length||!n.bubbles){var a=e.nodeType===9?e.createComment(""):document.createTextNode("");if(t)for(var r=0;r<t.length;r++){var l=t[r];a.addEventListener(l.type,l.attachedListener,fr(l.optionsOrUseCapture))}if(e.appendChild(a),n=a.dispatchEvent(n),t)for(r=0;r<t.length;r++)l=t[r],a.removeEventListener(l.type,l.attachedListener,fr(l.optionsOrUseCapture));return e.removeChild(a),n}return e.dispatchEvent(n)},yt.prototype.focus=function(n){v(this._fragmentFiber.child,!0,zm,n,void 0,void 0)};function zm(n,e){return n.tag===6?!1:(n=en(n),D0(n,e))}yt.prototype.focusLast=function(n){var e=[];v(this._fragmentFiber.child,!0,Nu,e,void 0,void 0);for(var t=e.length-1;0<=t&&!zm(e[t],n);t--);};function Nu(n,e){return e.push(n),!1}yt.prototype.blur=function(){var n=E(this._fragmentFiber);n!==null&&(n=en(n),n=gl(n).activeElement,n!==null&&v(this._fragmentFiber.child,!1,j0,n,void 0,void 0))};function j0(n,e){return n.tag===6?!1:(n=en(n),n===e||n.contains(e)?(e.blur(),!0):!1)}yt.prototype.observeUsing=function(n){this._observers===null&&(this._observers=new Set),this._observers.add(n),v(this._fragmentFiber.child,!1,w0,n,void 0,void 0)};function w0(n,e){return n.tag===6||(n=en(n),e.observe(n)),!1}yt.prototype.unobserveUsing=function(n){var e=this._observers;if(e!==null&&e.has(n)){e.delete(n),v(this._fragmentFiber.child,!1,N0,n,void 0,void 0);for(var t=e=0;t<qt.length;t++){var a=qt[t];a.fragmentInstance===this&&a.observer===n?n.unobserve(a.instance):qt[e++]=a}qt.length=e}};function N0(n,e){return n.tag===6||(n=en(n),e.unobserve(n)),!1}var qt=[],Eu=!1;function E0(n,e,t){qt.push({fragmentInstance:n,observer:e,instance:t}),Eu||(Eu=!0,z0(function(){Eu=!1;var a=qt;qt=[];for(var r=0;r<a.length;r++){var l=a[r];l.observer.unobserve(l.instance)}}))}yt.prototype.getClientRects=function(){var n=[];return v(this._fragmentFiber.child,!1,O0,n,void 0,void 0),n};function O0(n,e){if(n.tag===6){n=n.stateNode;var t=n.ownerDocument.createRange();t.selectNodeContents(n),e.push.apply(e,t.getClientRects())}else n=en(n),e.push.apply(e,n.getClientRects());return!1}yt.prototype.getRootNode=function(n){var e=E(this._fragmentFiber);return e===null?this:en(e).getRootNode(n)},yt.prototype.compareDocumentPosition=function(n){var e=E(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var t=[];v(this._fragmentFiber.child,!1,Nu,t,void 0,void 0);var a=en(e);if(t.length===0){if(t=a,I(this._fragmentFiber)){n:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break n}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(t=e)}e=this._fragmentFiber;var r=a=t.compareDocumentPosition(n);return t===n?r=Node.DOCUMENT_POSITION_CONTAINS:a&Node.DOCUMENT_POSITION_CONTAINED_BY&&(t=Y(e)[1],t===null?r=Node.DOCUMENT_POSITION_PRECEDING:(n=en(t).compareDocumentPosition(n),r=n===0||n&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),r|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=en(t[0]),r=en(t[t.length-1]);var l=I(this._fragmentFiber)?e.parentElement:a;if(l==null)return Node.DOCUMENT_POSITION_DISCONNECTED;a=l.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,l=l.compareDocumentPosition(r)&Node.DOCUMENT_POSITION_CONTAINED_BY;var s=e.compareDocumentPosition(n),c=r.compareDocumentPosition(n),h=s&Node.DOCUMENT_POSITION_CONTAINED_BY||c&Node.DOCUMENT_POSITION_CONTAINED_BY;return c=a&&l&&s&Node.DOCUMENT_POSITION_FOLLOWING&&c&Node.DOCUMENT_POSITION_PRECEDING,e=a&&e===n||l&&r===n||h||c?Node.DOCUMENT_POSITION_CONTAINED_BY:!a&&e===n||!l&&r===n?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:s,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||A0(e,this._fragmentFiber,t[0],t[t.length-1],n)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function A0(n,e,t,a,r){var l=Le(r);if(n&Node.DOCUMENT_POSITION_CONTAINED_BY){if(t=!!l)n:{for(;l!==null;){if(l.tag===7&&(l===e||l.alternate===e)){t=!0;break n}l=l.return}t=!1}return t}if(n&Node.DOCUMENT_POSITION_CONTAINS){if(l===null)return l=r.ownerDocument,r===l||r===l.documentElement||r===l.body;n:{for(l=e,e=E(e);l!==null;){if(!(l.tag!==5&&l.tag!==3&&l.tag!==27||l!==e&&l.alternate!==e)){l=!0;break n}l=l.return}l=!1}return l}return n&Node.DOCUMENT_POSITION_PRECEDING?((e=!!l)&&!(e=l===t)&&(e=Hn(t,l,Kn),e===null?e=!1:(v(e,!0,mn,l,t),l=_n,_n=null,e=l!==null)),e):n&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!l)&&!(e=l===a)&&(e=Hn(a,l,Kn),e===null?e=!1:(v(e,!0,On,l,a),l=_n,gn=_n=null,e=l!==null)),e):!1}function Bm(n,e){var t=n.ownerDocument.createRange();t.selectNodeContents(n),n=t.getBoundingClientRect(),window.scrollTo(window.scrollX+n.left,e?window.scrollY+n.top:window.scrollY+n.bottom-window.innerHeight)}yt.prototype.scrollIntoView=function(n){if(typeof n=="object")throw Error(d(566));var e=[];v(this._fragmentFiber.child,!1,Nu,e,void 0,void 0);var t=n!==!1;if(e.length===0){var a=Y(this._fragmentFiber);if(a=t?a[1]||a[0]||E(this._fragmentFiber):a[0]||a[1],a===null)return;if(a.tag===6){n=en(a),Bm(n,t);return}if(a=en(a),a.nodeType!==9){if(a.nodeType===11){t="host"in a?a.host:null,t!==null&&t.scrollIntoView(n);return}a.scrollIntoView(n)}}for(a=t?e.length-1:0;a!==(t?-1:e.length);){var r=e[a];r.tag===6?(r=en(r),Bm(r,t)):en(r).scrollIntoView(n),a+=t?-1:1}};function k0(n,e){return n=en(n),Um(n,e),!1}function Um(n,e){n.reactFragments==null&&(n.reactFragments=new Set),n.reactFragments.add(e)}function Hm(n,e){var t=e._eventListeners;if(t!==null)for(var a=0;a<t.length;a++){var r=t[a];n.addEventListener(r.type,r.attachedListener,fr(r.optionsOrUseCapture))}n.nodeType!==3&&(t=e._observers,t!==null&&t.forEach(function(l){for(var s=0,c=0;c<qt.length;c++){var h=qt[c];(h.fragmentInstance!==e||h.observer!==l||h.instance!==n)&&(qt[s++]=h)}qt.length=s,l.observe(n)}),Um(n,e))}function M0(n,e){var t=e._eventListeners;if(t!==null)for(var a=0;a<t.length;a++){var r=t[a];n.removeEventListener(r.type,r.attachedListener,fr(r.optionsOrUseCapture))}n.nodeType!==3&&(t=e._observers,t!==null&&t.forEach(function(l){typeof l.rootMargin=="string"?E0(e,l,n):l.unobserve(n)}),n.reactFragments!=null&&n.reactFragments.delete(e))}function Ou(n){var e=n.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var t=e;switch(e=e.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Ou(t),Re(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}n.removeChild(t)}}function C0(n,e,t,a){for(;n.nodeType===1;){var r=t;if(n.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(a){if(!n[rt])switch(e){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(l=n.getAttribute("rel"),l==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(l!==r.rel||n.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||n.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||n.getAttribute("title")!==(r.title==null?null:r.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(l=n.getAttribute("src"),(l!==(r.src==null?null:r.src)||n.getAttribute("type")!==(r.type==null?null:r.type)||n.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&l&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(e==="input"&&n.type==="hidden"){var l=r.name==null?null:""+r.name;if(r.type==="hidden"&&n.getAttribute("name")===l)return n}else return n;if(n=kt(n.nextSibling),n===null)break}return null}function R0(n,e,t){if(e==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!t||(n=kt(n.nextSibling),n===null))return null;return n}function qm(n,e){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=kt(n.nextSibling),n===null))return null;return n}function Au(n){return n.data==="$?"||n.data==="$~"}function ku(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function L0(n,e){var t=n.ownerDocument;if(n.data==="$~")n._reactRetry=e;else if(n.data!=="$?"||t.readyState!=="loading")e();else{var a=function(){e(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),n._reactRetry=a}}function kt(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return n}var Mu=null;function Gm(n){n=n.nextSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"||t==="/&"){if(e===0)return kt(n.nextSibling);e--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||e++}n=n.nextSibling}return null}function Ym(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(e===0)return n;e--}else t!=="/$"&&t!=="/&"||e++}n=n.previousSibling}return null}function D0(n,e){function t(){a=!0}if(n.ownerDocument.activeElement===n)return!0;var a=!1;try{n.ownerDocument.addEventListener("focus",t,!0),(n.focus||HTMLElement.prototype.focus).call(n,e)}finally{n.ownerDocument.removeEventListener("focus",t,!0)}return a}function z0(n){Om(function(){Om(function(e){return n(e)})})}function Im(n,e,t){switch(e=gl(t),n){case"html":if(n=e.documentElement,!n)throw Error(d(452));return n;case"head":if(n=e.head,!n)throw Error(d(453));return n;case"body":if(n=e.body,!n)throw Error(d(454));return n;default:throw Error(d(451))}}function Vm(n,e,t){for(var a in t){var r=t[a];t.hasOwnProperty(a)&&r!=null&&te(n,e,a,null,d0,r)}t.dangerouslySetInnerHTML!=null&&(n.textContent=""),n.onclick===Vt&&(n.onclick=null),Re(n)}function Cu(n){for(var e=n.attributes;e.length;)n.removeAttributeNode(e[0]);Re(n)}var Mt=new Map,Km=new Set;function pl(n){if(typeof n.getRootNode=="function"){var e=n.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return n.nodeType===9?n:n.ownerDocument}var xa=fn.d;fn.d={f:B0,r:U0,D:H0,C:q0,L:G0,m:Y0,X:V0,S:I0,M:K0};function B0(){var n=xa.f(),e=Gs();return n||e}function U0(n){var e=ia(n);e!==null&&e.tag===5&&e.type==="form"?Xf(e):xa.r(n)}var hr=typeof document>"u"?null:document;function Qm(n,e,t){var a=hr;if(a&&typeof e=="string"&&e){var r=$n(e);r='link[rel="'+n+'"][href="'+r+'"]',typeof t=="string"&&(r+='[crossorigin="'+t+'"]'),Km.has(r)||(Km.add(r),n={rel:n,crossOrigin:t,href:e},a.querySelector(r)===null&&(e=a.createElement("link"),Ve(e,"link",n),Te(e),a.head.appendChild(e)))}}function H0(n){xa.D(n),Qm("dns-prefetch",n,null)}function q0(n,e){xa.C(n,e),Qm("preconnect",n,e)}function G0(n,e,t){xa.L(n,e,t);var a=hr;if(a&&n&&e){var r='link[rel="preload"][as="'+$n(e)+'"]';e==="image"&&t&&t.imageSrcSet?(r+='[imagesrcset="'+$n(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(r+='[imagesizes="'+$n(t.imageSizes)+'"]')):r+='[href="'+$n(n)+'"]';var l=r;switch(e){case"style":l=mr(n);break;case"script":l=gr(n)}if(!(Mt.has(l)||(n=on({rel:"preload",href:e==="image"&&t&&t.imageSrcSet?void 0:n,as:e},t),Mt.set(l,n),a.querySelector(r)!==null||e==="style"&&a.querySelector(bl(l))||e==="script"&&a.querySelector(vl(l))))){var s=a.createElement("link");Ve(s,"link",n),e==="style"&&(s[aa]=!0,s.onload=s.onerror=function(){zl(s)}),Te(s),a.head.appendChild(s)}}}function Y0(n,e){xa.m(n,e);var t=hr;if(t&&n){var a=e&&typeof e.as=="string"?e.as:"script",r='link[rel="modulepreload"][as="'+$n(a)+'"][href="'+$n(n)+'"]',l=r;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=gr(n)}if(!Mt.has(l)&&(n=on({rel:"modulepreload",href:n},e),Mt.set(l,n),t.querySelector(r)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(vl(l)))return}a=t.createElement("link"),Ve(a,"link",n),Te(a),t.head.appendChild(a)}}}function I0(n,e,t){xa.S(n,e,t);var a=hr;if(a&&n){var r=ra(a).hoistableStyles,l=mr(n);e=e||"default";var s=r.get(l);if(!s){var c={loading:0,preload:null};if(s=a.querySelector(bl(l)))c.loading=5;else{n=on({rel:"stylesheet",href:n,"data-precedence":e},t),(t=Mt.get(l))&&Ru(n,t);var h=s=a.createElement("link");Te(h),Ve(h,"link",n),h._p=new Promise(function(S,O){h.onload=S,h.onerror=O}),h.addEventListener("load",function(){c.loading|=1}),h.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Js(s,e,a)}s={type:"stylesheet",instance:s,count:1,state:c},r.set(l,s)}}}function V0(n,e){xa.X(n,e);var t=hr;if(t&&n){var a=ra(t).hoistableScripts,r=gr(n),l=a.get(r);l||(l=t.querySelector(vl(r)),l||(n=on({src:n,async:!0},e),(e=Mt.get(r))&&Lu(n,e),l=t.createElement("script"),Te(l),Ve(l,"link",n),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(r,l))}}function K0(n,e){xa.M(n,e);var t=hr;if(t&&n){var a=ra(t).hoistableScripts,r=gr(n),l=a.get(r);l||(l=t.querySelector(vl(r)),l||(n=on({src:n,async:!0,type:"module"},e),(e=Mt.get(r))&&Lu(n,e),l=t.createElement("script"),Te(l),Ve(l,"link",n),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(r,l))}}function Xm(n,e,t,a){var r=(r=Gt.current)?pl(r):null;if(!r)throw Error(d(446));switch(n){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(t=mr(t.href),e=ra(r).hoistableStyles,a=e.get(t),a||(a={type:"style",instance:null,count:0,state:null},e.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){n=mr(t.href);var l=ra(r).hoistableStyles,s=l.get(n);if(s||(r=r.ownerDocument||r,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(n,s),(l=r.querySelector(bl(n)))?l._p||(s.instance=l,s.state.loading=5):(l=Mt.get(n),l||(l={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Mt.set(n,l)),Q0(r,n,l,s.state))),e&&a===null)throw Error(d(528,""));return s}if(e&&a!==null)throw Error(d(529,""));return null;case"script":return e=t.async,t=t.src,typeof t=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(t=gr(t),e=ra(r).hoistableScripts,a=e.get(t),a||(a={type:"script",instance:null,count:0,state:null},e.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,n))}}function mr(n){return'href="'+$n(n)+'"'}function bl(n){return'link[rel="stylesheet"]['+n+"]"}function Jm(n){return on({},n,{"data-precedence":n.precedence,precedence:null})}function Q0(n,e,t,a){if(e=n.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[aa]!==!0){a.loading=1;return}}else e=n.createElement("link"),e[aa]=!0,e.onload=e.onerror=zl.bind(null,e),Ve(e,"link",t),Te(e),n.head.appendChild(e);a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2})}function gr(n){return'[src="'+$n(n)+'"]'}function vl(n){return"script[async]"+n}function Zm(n,e,t){if(e.count++,e.instance===null)switch(e.type){case"style":var a=n.querySelector('style[data-href~="'+$n(t.href)+'"]');if(a)return e.instance=a,Te(a),a;var r=on({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(n.ownerDocument||n).createElement("style"),Te(a),Ve(a,"style",r),Js(a,t.precedence,n),e.instance=a;case"stylesheet":r=mr(t.href);var l=n.querySelector(bl(r));if(l)return e.state.loading|=4,e.instance=l,Te(l),l;a=Jm(t),(r=Mt.get(r))&&Ru(a,r),l=(n.ownerDocument||n).createElement("link"),Te(l);var s=l;return s._p=new Promise(function(c,h){s.onload=c,s.onerror=h}),Ve(l,"link",a),e.state.loading|=4,Js(l,t.precedence,n),e.instance=l;case"script":return l=gr(t.src),(r=n.querySelector(vl(l)))?(e.instance=r,Te(r),r):(a=t,(r=Mt.get(l))&&(a=on({},t),Lu(a,r)),n=n.ownerDocument||n,r=n.createElement("script"),Te(r),Ve(r,"link",a),n.head.appendChild(r),e.instance=r);case"void":return null;default:throw Error(d(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Js(a,t.precedence,n));return e.instance}function Js(n,e,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=a.length?a[a.length-1]:null,l=r,s=0;s<a.length;s++){var c=a[s];if(c.dataset.precedence===e)l=c;else if(l!==r)break}l?l.parentNode.insertBefore(n,l.nextSibling):(e=t.nodeType===9?t.head:t,e.insertBefore(n,e.firstChild))}function Ru(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.title==null&&(n.title=e.title)}function Lu(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.integrity==null&&(n.integrity=e.integrity)}var Zs=null;function Pm(n,e,t){if(Zs===null){var a=new Map,r=Zs=new Map;r.set(t,a)}else r=Zs,a=r.get(t),a||(a=new Map,r.set(t,a));if(a.has(n))return a;for(a.set(n,null),t=t.getElementsByTagName(n),r=0;r<t.length;r++){var l=t[r];if(!(l[rt]||l[Me]||n==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var s=l.getAttribute(e)||"";s=n+s;var c=a.get(s);c?c.push(l):a.set(s,[l])}}return a}function Du(n,e,t){n=n.ownerDocument||n,n.head.insertBefore(t,e==="title"?n.querySelector("head > title"):null)}function X0(n,e,t){if(t===1||e.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(n=e.disabled,typeof e.precedence=="string"&&n==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Fm(n,e){return n==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function Wm(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function $m(n){return(n.width||100)*(n.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function ng(n,e){typeof e.decode=="function"&&(n.imgCount++,e.complete||(n.imgBytes+=$m(e),n.suspenseyImages.push(e)),n=P0.bind(n),e.decode().then(n,n))}function J0(n,e,t,a){if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var r=mr(a.href),l=e.querySelector(bl(r));if(l){e=l._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=yl.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=l,Te(l);return}l=e.ownerDocument||e,a=Jm(a),(r=Mt.get(r))&&Ru(a,r),l=l.createElement("link"),Te(l);var s=l;s._p=new Promise(function(c,h){s.onload=c,s.onerror=h}),Ve(l,"link",a),t.instance=l}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=yl.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}var Ps=0;function Z0(n,e){return n.stylesheets&&n.count===0&&Ws(n,n.stylesheets),0<n.count||0<n.imgCount?function(t){var a=setTimeout(function(){if(n.stylesheets&&Ws(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4+e);0<n.imgBytes&&Ps===0&&(Ps=62500*h0());var r=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&Ws(n,n.stylesheets),n.unsuspend)){var l=n.unsuspend;n.unsuspend=null,l()}},(n.imgBytes>Ps?50:800)+e);return n.unsuspend=t,function(){n.unsuspend=null,clearTimeout(a),clearTimeout(r)}}:null}function eg(n){if(n.count===0&&(n.imgCount===0||!n.waitingForImages)){if(n.stylesheets)Ws(n,n.stylesheets);else if(n.unsuspend){var e=n.unsuspend;n.unsuspend=null,e()}}}function yl(){this.count--,eg(this)}function P0(){this.imgCount--,eg(this)}var Fs=null;function Ws(n,e){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Fs=new Map,e.forEach(F0,n),Fs=null,yl.call(n))}function F0(n,e){if(!(e.state.loading&4)){var t=Fs.get(n);if(t)var a=t.get(null);else{t=new Map,Fs.set(n,t);for(var r=n.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<r.length;l++){var s=r[l];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(t.set(s.dataset.precedence,s),a=s)}a&&t.set(null,a)}r=e.instance,s=r.getAttribute("data-precedence"),l=t.get(s)||a,l===a&&t.set(null,r),t.set(s,r),this.count++,a=yl.bind(this),r.addEventListener("load",a),r.addEventListener("error",a),l?l.parentNode.insertBefore(r,l.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(r,n.firstChild)),e.state.loading|=4}}var pr={$$typeof:fe,Provider:null,Consumer:null,_currentValue:et,_currentValue2:et,_threadCount:0};function W0(n,e,t,a,r,l,s,c,h){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Oa(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oa(0),this.hiddenUpdates=Oa(null),this.identifierPrefix=a,this.onUncaughtError=r,this.onCaughtError=l,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.transitionTypes=null,this.incompleteTransitions=new Map}function tg(n,e,t,a,r,l,s,c,h,S,O,C){return n=new W0(n,e,t,s,h,S,O,C,c),e=1,l===!0&&(e|=24),l=lt(3,null,null,e),n.current=l,l.stateNode=n,e=Po(),e.refCount++,n.pooledCache=e,e.refCount++,l.memoizedState={element:a,isDehydrated:t,cache:e},nc(l),n}function ag(n){return n?(n=Yi,n):Yi}function ig(n,e,t,a,r,l){r=ag(r),a.context===null?a.context=r:a.pendingContext=r,a=Ua(e),a.payload={element:t},l=l===void 0?null:l,l!==null&&(a.callback=l),t=Ha(n,a,e),t!==null&&(ut(t,n,e),Pr(t,n,e))}function rg(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function zu(n,e){rg(n,e),(n=n.alternate)&&rg(n,e)}function lg(n){if(n.tag===13||n.tag===31){var e=oi(n,67108864);e!==null&&ut(e,n,67108864),zu(n,67108864)}}function sg(n){if(n.tag===13||n.tag===31){var e=vt();e=Mi(e);var t=oi(n,e);t!==null&&ut(t,n,e),zu(n,e)}}var br=!0;function $0(n,e,t,a){var r=tn.T;tn.T=null;var l=fn.p;try{fn.p=2,Bu(n,e,t,a)}finally{fn.p=l,tn.T=r}}function nx(n,e,t,a){var r=tn.T;tn.T=null;var l=fn.p;try{fn.p=8,Bu(n,e,t,a)}finally{fn.p=l,tn.T=r}}function Bu(n,e,t,a){if(br){var r=Uu(a);if(r===null)vu(n,e,a,$s,t),cg(n,a);else if(tx(r,n,e,t,a))a.stopPropagation();else if(cg(n,a),e&4&&-1<ex.indexOf(n)){for(;r!==null;){var l=ia(r);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var s=ta(l.pendingLanes);if(s!==0){var c=l;for(c.pendingLanes|=2,c.entangledLanes|=2;s;){var h=1<<31-K(s);c.entanglements[1]|=h,s&=~h}na(l),(Jn&6)===0&&(Us=Xe()+500,fl(0))}}break;case 31:case 13:c=oi(l,2),c!==null&&ut(c,l,2),Gs(),zu(l,2)}if(l=Uu(a),l===null&&vu(n,e,a,$s,t),l===r)break;r=l}r!==null&&a.stopPropagation()}else vu(n,e,a,null,t)}}function Uu(n){return n=To(n),Hu(n)}var $s=null;function Hu(n){if($s=null,n=Le(n),n!==null){var e=R(n);if(e===null)n=null;else{var t=e.tag;if(t===13){if(n=M(e),n!==null)return n;n=null}else if(t===31){if(n=D(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null)}}return $s=n,null}function og(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kl()){case Ml:return 2;case kr:return 8;case Rt:case g:return 32;case L:return 268435456;default:return 32}default:return 32}}var qu=!1,Fa=null,Wa=null,$a=null,xl=new Map,_l=new Map,ni=[],ex="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cg(n,e){switch(n){case"focusin":case"focusout":Fa=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":$a=null;break;case"pointerover":case"pointerout":xl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_l.delete(e.pointerId)}}function Sl(n,e,t,a,r,l){return n===null||n.nativeEvent!==l?(n={blockedOn:e,domEventName:t,eventSystemFlags:a,nativeEvent:l,targetContainers:[r]},e!==null&&(e=ia(e),e!==null&&lg(e)),n):(n.eventSystemFlags|=a,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function tx(n,e,t,a,r){switch(e){case"focusin":return Fa=Sl(Fa,n,e,t,a,r),!0;case"dragenter":return Wa=Sl(Wa,n,e,t,a,r),!0;case"mouseover":return $a=Sl($a,n,e,t,a,r),!0;case"pointerover":var l=r.pointerId;return xl.set(l,Sl(xl.get(l)||null,n,e,t,a,r)),!0;case"gotpointercapture":return l=r.pointerId,_l.set(l,Sl(_l.get(l)||null,n,e,t,a,r)),!0}return!1}function ug(n){var e=Le(n.target);if(e!==null){var t=R(e);if(t!==null){if(e=t.tag,e===13){if(e=M(t),e!==null){n.blockedOn=e,Dl(n.priority,function(){sg(t)});return}}else if(e===31){if(e=D(t),e!==null){n.blockedOn=e,Dl(n.priority,function(){sg(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function no(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Uu(n.nativeEvent);if(t===null){t=n.nativeEvent;var a=new t.constructor(t.type,t);So=a,t.target.dispatchEvent(a),So=null}else return e=ia(t),e!==null&&lg(e),n.blockedOn=t,!1;e.shift()}return!0}function dg(n,e,t){no(n)&&t.delete(e)}function ax(){qu=!1,Fa!==null&&no(Fa)&&(Fa=null),Wa!==null&&no(Wa)&&(Wa=null),$a!==null&&no($a)&&($a=null),xl.forEach(dg),_l.forEach(dg)}function eo(n,e){n.blockedOn===e&&(n.blockedOn=null,qu||(qu=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,ax)))}var to=null;function fg(n){to!==n&&(to=n,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){to===n&&(to=null);for(var e=0;e<n.length;e+=3){var t=n[e],a=n[e+1],r=n[e+2];if(typeof a!="function"){if(Hu(a||t)===null)continue;break}var l=ia(t);l!==null&&(n.splice(e,3),e-=3,_c(l,{pending:!0,data:r,method:t.method,action:a},a,r))}}))}function vr(n){function e(h){return eo(h,n)}Fa!==null&&eo(Fa,n),Wa!==null&&eo(Wa,n),$a!==null&&eo($a,n),xl.forEach(e),_l.forEach(e);for(var t=0;t<ni.length;t++){var a=ni[t];a.blockedOn===n&&(a.blockedOn=null)}for(;0<ni.length&&(t=ni[0],t.blockedOn===null);)ug(t),t.blockedOn===null&&ni.shift();if(t=(n.ownerDocument||n).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var r=t[a],l=t[a+1],s=r[U]||null;if(typeof l=="function")s||fg(t);else if(s){var c=null;if(l&&l.hasAttribute("formAction")){if(r=l,s=l[U]||null)c=s.formAction;else if(Hu(r)!==null)continue}else c=s.action;typeof c=="function"?t[a+1]=c:(t.splice(a,3),a-=3),fg(t)}}}function hg(){function n(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(s){return r=s})},focusReset:"manual",scroll:"manual"})}function e(){r!==null&&(r(),r=null),a||setTimeout(t,20)}function t(){if(!a&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,r=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(t,100),function(){a=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),r!==null&&(r(),r=null)}}}function Gu(n){this._internalRoot=n}ao.prototype.render=Gu.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(d(409));var t=e.current,a=vt();ig(t,a,n,e,null,null)},ao.prototype.unmount=Gu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ig(n.current,2,null,n,null,null),Gs(),e[rn]=null}};function ao(n){this._internalRoot=n}ao.prototype.unstable_scheduleHydration=function(n){if(n){var e=Ll();n={blockedOn:null,target:n,priority:e};for(var t=0;t<ni.length&&e!==0&&e<ni[t].priority;t++);ni.splice(t,0,n),t===0&&ug(n)}};var mg=m.version;if(mg!=="19.3.1")throw Error(d(527,mg,"19.3.1"));fn.findDOMNode=function(n){var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(d(188)):(n=Object.keys(n).join(","),Error(d(268,n)));return n=G(e),n=n!==null?B(n):null,n=n===null?null:n.stateNode,n};var ix={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:tn,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!io.isDisabled&&io.supportsFiber)try{le=io.inject(ix),qn=io}catch{}}return jl.createRoot=function(n,e){if(!T(n))throw Error(d(299));var t=!1,a="",r=ah,l=ih,s=rh;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(r=e.onUncaughtError),e.onCaughtError!==void 0&&(l=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=tg(n,1,!1,null,null,t,a,null,r,l,s,hg),n[rn]=e.current,bu(n),new Gu(e)},jl.hydrateRoot=function(n,e,t){if(!T(n))throw Error(d(299));var a=!1,r="",l=ah,s=ih,c=rh,h=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.formState!==void 0&&(h=t.formState)),e=tg(n,1,!0,e,t??null,a,r,h,l,s,c,hg),e.context=ag(null),t=e.current,a=vt(),a=Mi(a),r=Ua(a),r.callback=null,Ha(t,r,a),t=a,e.current.lanes=t,ri(e,t),na(e),n[rn]=e.current,bu(n),new ao(e)},jl.version="19.3.1",jl}var jg;function hx(){if(jg)return Iu.exports;jg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(m){console.error(m)}}return o(),Iu.exports=fx(),Iu.exports}var mx=hx();const gx=Tr(mx);var H=sd();const mo=Tr(H),od=["python","javascript","java","cpp"];function px(){try{const o=localStorage.getItem("selectedLanguage");return o&&od.includes(o)?o:"python"}catch{return"python"}}const Qg=H.createContext(void 0),bx=({children:o})=>{const[m,f]=H.useState(px);return H.useEffect(()=>{try{localStorage.setItem("selectedLanguage",m)}catch{}},[m]),i.jsx(Qg.Provider,{value:{selectedLanguage:m,setSelectedLanguage:f},children:o})};function Xg(){const o=H.useContext(Qg);if(o===void 0)throw new Error("useLanguage must be used within a LanguageProvider");return o}const Jg=H.createContext(void 0);function vx({children:o}){const[m,f]=H.useState(!1),d=()=>f(!0),T=()=>f(!1),R=()=>f(!m);return i.jsx(Jg.Provider,{value:{isSidebarOpen:m,showSidebar:d,hideSidebar:T,toggleSidebar:R},children:o})}function cd(){const o=H.useContext(Jg);if(o===void 0)throw new Error("useSidebar must be used within SidebarProvider");return o}const Zg=H.createContext(void 0);function yx({children:o}){const[m,f]=H.useState("finder");return i.jsx(Zg.Provider,{value:{view:m,setView:f},children:o})}function po(){const o=H.useContext(Zg);if(o===void 0)throw new Error("useView must be used within ViewProvider");return o}const xx="_topbar_1nd3w_1",_x="_container_1nd3w_17",Sx="_visuallyHidden_1nd3w_43",Tx="_wordmark_1nd3w_55",jx="_title_1nd3w_68",wx="_segmented_1nd3w_85",Nx="_segment_1nd3w_85",Ex="_tools_1nd3w_159",Ox="_select_1nd3w_171",Ax="_selectChevron_1nd3w_210",kx="_iconLink_1nd3w_226",Mx="_hamburger_1nd3w_255",Cx="_hamburgerIcon_1nd3w_272",Rx="_hamburgerTop_1nd3w_282",Lx="_open_1nd3w_285",Dx="_hamburgerMiddle_1nd3w_289",zx="_hamburgerBottom_1nd3w_296",_e={topbar:xx,container:_x,visuallyHidden:Sx,wordmark:Tx,title:jx,segmented:wx,segment:Nx,tools:Ex,select:Ox,selectChevron:Ax,iconLink:kx,hamburger:Mx,hamburgerIcon:Cx,hamburgerTop:Rx,open:Lx,hamburgerMiddle:Dx,hamburgerBottom:zx};function Vn(...o){let m="";for(const f of o)if(f){if(typeof f=="string"||typeof f=="number")m+=(m&&" ")+f;else if(Array.isArray(f)){const d=Vn(...f);d&&(m+=(m&&" ")+d)}else if(typeof f=="object")for(const d in f)f[d]&&(m+=(m&&" ")+d)}return m}function Pg(){const o=document.documentElement,m=getComputedStyle(o).getPropertyValue("--navbar-height");return parseFloat(m)||76}function ud(o,m=0){const f=document.querySelector(o);if(!f)return;const d=f.getBoundingClientRect().top+window.scrollY,T=window.matchMedia("(prefers-reduced-motion: reduce)").matches;window.scrollTo({top:Math.max(0,d-m),behavior:T?"auto":"smooth"})}const Bx=2,Ux=2e3;let ld=0;function dd(){cancelAnimationFrame(ld)}function Hx(o,m){dd();const f=performance.now();let d=-1,T=0;const R=()=>{const M=document.querySelector(o);if(M){const q=M.getBoundingClientRect().top+window.scrollY;T=q===d?T+1:0,d=q}const D=performance.now()-f>Ux;if(T>=Bx||D){ud(o,m);return}ld=requestAnimationFrame(R)};ld=requestAnimationFrame(R)}const qx="modulepreload",Gx=function(o){return"/leetcode-pattern-drill/"+o},wg={},go=function(m,f,d){let T=Promise.resolve();if(f&&f.length>0){let q=function(G){return Promise.all(G.map(B=>Promise.resolve(B).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const M=document.querySelector("meta[property=csp-nonce]"),D=M?.nonce||M?.getAttribute("nonce");T=q(f.map(G=>{if(G=Gx(G),G in wg)return;wg[G]=!0;const B=G.endsWith(".css"),v=B?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${G}"]${v}`))return;const E=document.createElement("link");if(E.rel=B?"stylesheet":qx,B||(E.as="script"),E.crossOrigin="",E.href=G,D&&E.setAttribute("nonce",D),document.head.appendChild(E),B)return new Promise((I,Y)=>{E.addEventListener("load",I),E.addEventListener("error",()=>Y(new Error(`Unable to preload CSS for ${G}`)))})}))}function R(M){const D=new Event("vite:preloadError",{cancelable:!0});if(D.payload=M,window.dispatchEvent(D),!D.defaultPrevented)throw M}return T.then(M=>{for(const D of M||[])D.status==="rejected"&&R(D.reason);return m().catch(R)})},Yx="_button_ef3ud_1",Ix={button:Yx},Vx="dyslexic-font";function Ng(){go(()=>Promise.resolve({}),__vite__mapDeps([0])),go(()=>Promise.resolve({}),__vite__mapDeps([1]))}function Kx(){const[o,m]=H.useState(!1);H.useEffect(()=>{const d=document.documentElement.getAttribute("data-font")==="dyslexic";d&&Ng(),m(d)},[]);const f=()=>{const d=!o;m(d),d?(Ng(),document.documentElement.setAttribute("data-font","dyslexic")):document.documentElement.removeAttribute("data-font"),document.documentElement.dispatchEvent(new Event("fontChange"));try{localStorage.setItem(Vx,d?"1":"0")}catch{}};return i.jsx("button",{type:"button",className:Ix.button,"aria-pressed":o,"aria-label":"OpenDyslexic font",title:"Use the OpenDyslexic font",onClick:f,children:"Aa"})}const Qx="_container_125w8_1",Xx="_input_125w8_7",Jx="_label_125w8_18",Zx="_indicator_125w8_34",Px="_sun_125w8_58",Fx="_moon_125w8_65",yr={container:Qx,input:Xx,label:Jx,indicator:Zx,sun:Px,moon:Fx},Wx="theme";function Eg(){document.documentElement.dispatchEvent(new Event("themeChange"))}function $x(){const[o,m]=H.useState("dark");H.useEffect(()=>{const d=document.documentElement.getAttribute("data-theme")==="light"?"light":"dark";m(d),Eg()},[]);const f=()=>{const d=o==="light"?"dark":"light";m(d),document.documentElement.setAttribute("data-theme",d);try{localStorage.setItem(Wx,d)}catch{}Eg()};return i.jsxs("div",{className:yr.container,children:[i.jsx("input",{className:yr.input,"aria-label":"Light theme",role:"switch",id:"theme-switch",type:"checkbox",checked:o==="light",onChange:f}),i.jsx("label",{className:yr.label,htmlFor:"theme-switch",title:"Toggle light theme",children:i.jsxs("span",{className:yr.indicator,children:[i.jsx("svg",{className:yr.moon,viewBox:"0 0 16 16","aria-hidden":"true",children:i.jsx("path",{d:"M13 9.5A5.5 5.5 0 0 1 6.5 3a5.5 5.5 0 1 0 6.5 6.5Z"})}),i.jsxs("svg",{className:yr.sun,viewBox:"0 0 16 16","aria-hidden":"true",children:[i.jsx("circle",{cx:"8",cy:"8",r:"2.75"}),i.jsx("path",{d:"M8 1.5v1.75M8 12.75v1.75M1.5 8h1.75M12.75 8h1.75M3.4 3.4l1.25 1.25M11.35 11.35l1.25 1.25M3.4 12.6l1.25-1.25M11.35 4.65l1.25-1.25"})]})]})})]})}function n_(){return i.jsx("svg",{viewBox:"0 0 128 128",children:i.jsxs("g",{fill:"var(--svg-github-fill)",children:[i.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"}),i.jsx("path",{d:"M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm2.382 3.477c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237m4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"})]})})}const e_=[{id:"finder",label:"Pattern Finder"},{id:"pareto",label:"Pareto Set"},{id:"cheatsheet",label:"Reference"}],t_={python:"Python",javascript:"JavaScript",java:"Java",cpp:"C++"};function a_({forwardedRef:o}){const m=H.useRef(null),{isSidebarOpen:f,showSidebar:d,hideSidebar:T,toggleSidebar:R}=cd(),{view:M,setView:D}=po(),{selectedLanguage:q,setSelectedLanguage:G}=Xg();H.useLayoutEffect(()=>{if(!m.current)return;const Y=new ResizeObserver(Z=>{for(const en of Z){const _n=en.borderBoxSize[0].blockSize;document.documentElement.style.setProperty("--topbar-height",`${_n}px`)}});return Y.observe(m.current),()=>Y.disconnect()},[]);const B=Y=>{Y.preventDefault(),window.history.replaceState({},"",window.location.pathname),ud("main",Pg()-2)},v=()=>R(),E=Y=>{Y!==M&&(dd(),D(Y),Y!=="cheatsheet"?T():window.matchMedia("(max-width: 768px)").matches||d(),window.scrollTo({top:0}))},I=Y=>{G(Y.target.value)};return i.jsx("header",{ref:m,className:_e.topbar,children:i.jsxs("div",{className:_e.container,children:[M==="cheatsheet"&&i.jsxs("button",{ref:o,type:"button",className:_e.hamburger,onClick:v,"aria-label":f?"Hide reference sections":"Show reference sections","aria-expanded":f,"aria-controls":"reference-sections",children:[i.jsx("span",{className:Vn(_e.hamburgerIcon,_e.hamburgerTop,f&&_e.open)}),i.jsx("span",{className:Vn(_e.hamburgerIcon,_e.hamburgerMiddle,f&&_e.open)}),i.jsx("span",{className:Vn(_e.hamburgerIcon,_e.hamburgerBottom,f&&_e.open)})]}),i.jsx("a",{href:"/leetcode-pattern-drill/",className:_e.wordmark,onClick:B,children:i.jsx("h1",{className:_e.title,children:"Pattern Drill"})}),i.jsx("div",{className:_e.segmented,role:"group","aria-label":"View",children:e_.map(({id:Y,label:Z})=>i.jsx("button",{type:"button",className:_e.segment,"aria-pressed":M===Y,onClick:()=>E(Y),children:Z},Y))}),i.jsxs("div",{className:_e.tools,children:[i.jsxs("label",{className:_e.select,children:[i.jsx("span",{className:_e.visuallyHidden,children:"Template language"}),i.jsx("select",{value:q,onChange:I,children:od.map(Y=>i.jsx("option",{value:Y,children:t_[Y]},Y))}),i.jsx("svg",{className:_e.selectChevron,viewBox:"0 0 12 12","aria-hidden":"true",children:i.jsx("path",{d:"M2.5 4.5 6 8l3.5-3.5"})})]}),i.jsx(Kx,{}),i.jsx($x,{}),i.jsx("a",{href:"https://github.com/Tyler-Reagan/leetcode-pattern-drill","aria-label":"GitHub source",className:_e.iconLink,target:"_blank",rel:"noopener noreferrer",children:i.jsx(n_,{})})]})]})})}const i_="_sidebar_u19dm_1",r_="_exit_u19dm_17",l_="_hide_u19dm_20",s_="_heading_u19dm_29",o_="_scrollContainer_u19dm_41",wl={sidebar:i_,exit:r_,hide:l_,heading:s_,scrollContainer:o_};var ro={},Og;function c_(){if(Og)return ro;Og=1,ro.match=R,ro.parse=M;var o=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,m=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,f=/^(?:(min|max)-)?(.+)/,d=/(em|rem|px|cm|mm|in|pt|pc)?$/,T=/(dpi|dpcm|dppx)?$/;function R(B,v){return M(B).some(function(E){var I=E.inverse,Y=E.type==="all"||v.type===E.type;if(Y&&I||!(Y||I))return!1;var Z=E.expressions.every(function(en){var _n=en.feature,gn=en.modifier,mn=en.value,On=v[_n];if(!On)return!1;switch(_n){case"orientation":case"scan":return On.toLowerCase()===mn.toLowerCase();case"width":case"height":case"device-width":case"device-height":mn=G(mn),On=G(On);break;case"resolution":mn=q(mn),On=q(On);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":mn=D(mn),On=D(On);break;case"grid":case"color":case"color-index":case"monochrome":mn=parseInt(mn,10)||1,On=parseInt(On,10)||0;break}switch(gn){case"min":return On>=mn;case"max":return On<=mn;default:return On===mn}});return Z&&!I||!Z&&I})}function M(B){return B.split(",").map(function(v){v=v.trim();var E=v.match(o),I=E[1],Y=E[2],Z=E[3]||"",en={};return en.inverse=!!I&&I.toLowerCase()==="not",en.type=Y?Y.toLowerCase():"all",Z=Z.match(/\([^\)]+\)/g)||[],en.expressions=Z.map(function(_n){var gn=_n.match(m),mn=gn[1].toLowerCase().match(f);return{modifier:mn[1],feature:mn[2],value:gn[2]}}),en})}function D(B){var v=Number(B),E;return v||(E=B.match(/^(\d+)\s*\/\s*(\d+)$/),v=E[1]/E[2]),v}function q(B){var v=parseFloat(B),E=String(B).match(T)[1];switch(E){case"dpcm":return v/2.54;case"dppx":return v*96;default:return v}}function G(B){var v=parseFloat(B),E=String(B).match(d)[1];switch(E){case"em":return v*16;case"rem":return v*16;case"cm":return v*96/2.54;case"mm":return v*96/2.54/10;case"in":return v*96;case"pt":return v*72;case"pc":return v*72/12;default:return v}}return ro}var Ju,Ag;function u_(){if(Ag)return Ju;Ag=1;var o=c_().match,m=typeof window<"u"?window.matchMedia:null;function f(T,R,M){var D=this,q;m&&!M&&(q=m.call(window,T)),q?(this.matches=q.matches,this.media=q.media,q.addListener(v)):(this.matches=o(T,R),this.media=T),this.addListener=G,this.removeListener=B,this.dispose=E;function G(I){q&&q.addListener(I)}function B(I){q&&q.removeListener(I)}function v(I){D.matches=I.matches,D.media=I.media}function E(){q&&q.removeListener(v)}}function d(T,R,M){return new f(T,R,M)}return Ju=d,Ju}var d_=u_();const f_=Tr(d_);var h_=/[A-Z]/g,m_=/^ms-/,Zu={};function g_(o){return"-"+o.toLowerCase()}function Fg(o){if(Zu.hasOwnProperty(o))return Zu[o];var m=o.replace(h_,g_);return Zu[o]=m_.test(m)?"-"+m:m}function p_(o,m){if(o===m)return!0;if(!o||!m)return!1;const f=Object.keys(o),d=Object.keys(m),T=f.length;if(d.length!==T)return!1;for(let R=0;R<T;R++){const M=f[R];if(o[M]!==m[M]||!Object.prototype.hasOwnProperty.call(m,M))return!1}return!0}var Pu={exports:{}},Fu,kg;function b_(){if(kg)return Fu;kg=1;var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Fu=o,Fu}var Wu,Mg;function v_(){if(Mg)return Wu;Mg=1;var o=b_();function m(){}function f(){}return f.resetWarningCache=m,Wu=function(){function d(M,D,q,G,B,v){if(v!==o){var E=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw E.name="Invariant Violation",E}}d.isRequired=d;function T(){return d}var R={array:d,bigint:d,bool:d,func:d,number:d,object:d,string:d,symbol:d,any:d,arrayOf:T,element:d,elementType:d,instanceOf:T,node:d,objectOf:T,oneOf:T,oneOfType:T,shape:T,exact:T,checkPropTypes:f,resetWarningCache:m};return R.PropTypes=R,R},Wu}var Cg;function y_(){return Cg||(Cg=1,Pu.exports=v_()()),Pu.exports}var x_=y_();const Zn=Tr(x_),nt=Zn.oneOfType([Zn.string,Zn.number]),Wg={all:Zn.bool,grid:Zn.bool,aural:Zn.bool,braille:Zn.bool,handheld:Zn.bool,print:Zn.bool,projection:Zn.bool,screen:Zn.bool,tty:Zn.bool,tv:Zn.bool,embossed:Zn.bool},__={orientation:Zn.oneOf(["portrait","landscape"]),scan:Zn.oneOf(["progressive","interlace"]),aspectRatio:Zn.string,deviceAspectRatio:Zn.string,height:nt,deviceHeight:nt,width:nt,deviceWidth:nt,color:Zn.bool,colorIndex:Zn.bool,monochrome:Zn.bool,resolution:nt,type:Object.keys(Wg)},{type:Q3,...S_}=__,T_={minAspectRatio:Zn.string,maxAspectRatio:Zn.string,minDeviceAspectRatio:Zn.string,maxDeviceAspectRatio:Zn.string,minHeight:nt,maxHeight:nt,minDeviceHeight:nt,maxDeviceHeight:nt,minWidth:nt,maxWidth:nt,minDeviceWidth:nt,maxDeviceWidth:nt,minColor:Zn.number,maxColor:Zn.number,minColorIndex:Zn.number,maxColorIndex:Zn.number,minMonochrome:Zn.number,maxMonochrome:Zn.number,minResolution:nt,maxResolution:nt,...S_},j_={...Wg,...T_};var w_={all:j_};const N_=o=>`not ${o}`,E_=(o,m)=>{const f=Fg(o);return typeof m=="number"&&(m=`${m}px`),m===!0?f:m===!1?N_(f):`(${f}: ${m})`},O_=o=>o.join(" and "),A_=o=>{const m=[];return Object.keys(w_.all).forEach(f=>{const d=o[f];d!=null&&m.push(E_(f,d))}),O_(m)},k_=H.createContext(void 0),M_=o=>o.query||A_(o),Rg=o=>o?Object.keys(o).reduce((f,d)=>(f[Fg(d)]=o[d],f),{}):void 0,$g=()=>{const o=H.useRef(!1);return H.useEffect(()=>{o.current=!0},[]),o.current},C_=o=>{const m=H.useContext(k_),f=()=>Rg(o)||Rg(m),[d,T]=H.useState(f);return H.useEffect(()=>{const R=f();p_(d,R)||T(R)},[o,m]),d},R_=o=>{const m=()=>M_(o),[f,d]=H.useState(m);return H.useEffect(()=>{const T=m();f!==T&&d(T)},[o]),f},L_=(o,m)=>{const f=()=>f_(o,m||{},!!m),[d,T]=H.useState(f),R=$g();return H.useEffect(()=>{if(R){const M=f();return T(M),()=>{M&&M.dispose()}}},[o,m]),d},D_=o=>{const[m,f]=H.useState(o.matches);return H.useEffect(()=>{const d=T=>{f(T.matches)};return o.addListener(d),f(o.matches),()=>{o.removeListener(d)}},[o]),m},np=(o,m,f)=>{const d=C_(m),T=R_(o);if(!T)throw new Error("Invalid or missing MediaQuery!");const R=L_(T,d),M=D_(R),D=$g();return H.useEffect(()=>{D&&f&&f(M)},[M]),H.useEffect(()=>()=>{R&&R.dispose()},[]),M};function ep(o,m){H.useEffect(()=>{const f=d=>{const T=d.target;(Array.isArray(o)?o:[o]).every(D=>D.current&&!D.current.contains(T))&&m()};return document.addEventListener("mousedown",f),()=>document.removeEventListener("mousedown",f)},[o,m])}const z_="_accordion_hdwo0_1",B_="_button_hdwo0_7",U_="_open_hdwo0_42",H_="_content_hdwo0_46",lo={accordion:z_,button:B_,open:U_,content:H_};function q_(o){const m=parseFloat(o);return!isNaN(m)&&isFinite(m)}function Lg(o){return typeof o=="string"&&o[o.length-1]==="%"&&q_(o.substring(0,o.length-1))}function $u(o,m,f){m===0&&!f&&o?.style&&o?.children.length>0&&(o.style.display="none")}function G_(o,m){m===0&&o?.style&&(o.style.display="")}const Y_={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"};function Dg(o,m){return[o.static,m===0&&o.staticHeightZero,typeof m=="number"&&m>0?o.staticHeightSpecific:null,m==="auto"&&o.staticHeightAuto].filter(f=>f).join(" ")}const I_=["animateOpacity","animationStateClasses","applyInlineTransitions","children","className","contentClassName","contentRef","delay","duration","easing","height","onHeightAnimationEnd","onHeightAnimationStart","style","disableDisplayNone"],V_=mo.forwardRef((o,m)=>{const{animateOpacity:f=!1,animationStateClasses:d={},applyInlineTransitions:T=!0,children:R,className:M="",contentClassName:D,delay:q=0,disableDisplayNone:G=!1,duration:B=500,easing:v="ease",height:E,onHeightAnimationEnd:I,onHeightAnimationStart:Y,style:Z,contentRef:en}=o,_n={...o};I_.forEach(z=>{delete _n[z]});const gn=H.useRef(E),mn=H.useRef(null),On=H.useRef(void 0),Kn=H.useRef(void 0),Hn=H.useRef({...Y_,...d}),on=typeof window<"u",bn=H.useRef(on&&window.matchMedia?window.matchMedia("(prefers-reduced-motion)").matches:!1),An=bn.current?0:q,Tn=bn.current?0:B;let Wn=E,de="visible";typeof E=="number"?(Wn=E<0?0:E,de="hidden"):Lg(Wn)&&(Wn=E==="0%"?0:E,de="hidden");const[Qe,Ae]=H.useState(Wn),[fe,V]=H.useState(de),[un,F]=H.useState(!1),[Cn,jn]=H.useState(Dg(Hn.current,E));H.useEffect(()=>{$u(mn.current,Qe,G)},[]),H.useEffect(()=>{if(E!==gn.current&&mn.current){G_(mn.current,gn.current),mn.current.style.overflow="hidden";const z=mn.current.offsetHeight;mn.current.style.overflow="";const sn=Tn+An;let W,dn,Ln="hidden",kn;const tn=gn.current==="auto";typeof E=="number"?(W=E<0?0:E,dn=W):Lg(E)?(W=E==="0%"?0:E,dn=W):(W=z,dn="auto",Ln=void 0),tn&&(dn=W,W=z);const fn=[Hn.current.animating,(gn.current==="auto"||E<gn.current)&&Hn.current.animatingUp,(E==="auto"||E>gn.current)&&Hn.current.animatingDown,dn===0&&Hn.current.animatingToHeightZero,dn==="auto"&&Hn.current.animatingToHeightAuto,typeof dn=="number"&&dn>0?Hn.current.animatingToHeightSpecific:null].filter(ti=>ti).join(" "),et=Dg(Hn.current,dn);Ae(W),V("hidden"),F(!tn),jn(fn),clearTimeout(Kn.current),clearTimeout(On.current),tn?(kn=!0,Kn.current=setTimeout(()=>{Ae(dn),V(Ln),F(kn),Y?.(dn),On.current=setTimeout(()=>{F(!1),jn(et),$u(mn.current,dn,G),I?.(dn)},sn)},50)):(Y?.(W),Kn.current=setTimeout(()=>{Ae(dn),V(Ln),F(!1),jn(et),E!=="auto"&&$u(mn.current,W,G),I?.(W)},sn))}return gn.current=Wn,()=>{clearTimeout(Kn.current),clearTimeout(On.current)}},[E]);const ue={...Z,height:Qe,overflow:fe||Z?.overflow};un&&T&&(ue.transition=`height ${Tn}ms ${v} ${An}ms`,Z?.transition&&(ue.transition=`${Z.transition}, ${ue.transition}`),ue.WebkitTransition=ue.transition);const ve={};f&&(ve.transition=`opacity ${Tn}ms ${v} ${An}ms`,ve.WebkitTransition=ve.transition,Qe===0&&(ve.opacity=0));const y=typeof _n["aria-hidden"]<"u"?_n["aria-hidden"]:E===0;return mo.createElement("div",{..._n,"aria-hidden":y,className:`${Cn} ${M}`,style:ue,ref:m},mo.createElement("div",{className:D,style:ve,ref:z=>{mn.current=z,en&&(en.current=z)}},R))});function K_(){return i.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("polyline",{points:"6 9 12 15 18 9"})})}function $e({title:o,children:m}){const[f,d]=H.useState(!1),T=f?"auto":0,R=Vn(lo.button,f&&lo.open),M=()=>d(!f);return i.jsxs("div",{className:lo.accordion,children:[i.jsxs("button",{type:"button",className:R,onClick:M,"aria-expanded":f,children:[i.jsx("span",{children:o}),i.jsx(K_,{})]}),i.jsx(V_,{animateOpacity:!0,height:T,duration:400,children:i.jsx("div",{className:lo.content,children:m})})]})}const Q_="_linkWrapper_1p79w_1",X_="_link_1p79w_1",zg={linkWrapper:Q_,link:X_},J_="_tooltip_cgi4r_1",Z_="_exit_cgi4r_15",P_="_text_cgi4r_28",nd={tooltip:J_,exit:Z_,text:P_};var F_=Kg();const W_=Tr(F_);function $_({anchorRef:o,content:m,showTooltip:f}){const d=H.useRef(null),[T,R]=H.useState(null),[M,D]=H.useState(!1),q=Vn(nd.tooltip,!f&&nd.exit),G=()=>D(!1),B=()=>{f||D(!0)};return H.useEffect(()=>{if(!f||!o.current)return;const v=o.current.getBoundingClientRect(),E=d.current?.offsetHeight??0,I=v.left+window.scrollX,Y=v.top+window.scrollY-E-4;R({top:Y,left:I})},[f]),(f||!M)&&o.current&&W_.createPortal(i.jsx("div",{ref:d,className:q,style:T??{},onAnimationStart:G,onAnimationEnd:B,children:i.jsx("span",{className:nd.text,children:m})}),document.body)}const ed="pd-nav-link";function P({href:o,description:m}){const f=H.useRef(null),{view:d,setView:T}=po(),[R,M]=H.useState(!1),[D,q]=H.useState(()=>window.location.hash);let G;H.useEffect(()=>{const Y=()=>q(window.location.hash);return window.addEventListener(ed,Y),window.addEventListener("hashchange",Y),()=>{window.removeEventListener(ed,Y),window.removeEventListener("hashchange",Y)}},[]);const B=d==="cheatsheet"&&D===o,v=Y=>{Y.preventDefault(),window.history.replaceState({},"",o),window.dispatchEvent(new Event(ed)),clearTimeout(G),M(!1),dd();const Z=Pg()-2;d==="finder"?(T("cheatsheet"),Hx(o,Z)):ud(o,Z)},E=()=>{G=setTimeout(()=>{M(!0)},700)},I=()=>{clearTimeout(G),M(!1)};return i.jsxs("div",{className:zg.linkWrapper,children:[i.jsx("a",{ref:f,href:o,className:zg.link,onClick:v,role:"button","aria-current":B?"location":void 0,"aria-description":m,onMouseEnter:E,onMouseLeave:I,children:m}),i.jsx($_,{anchorRef:f,content:m,showTooltip:R})]})}function nS(){return i.jsxs(i.Fragment,{children:[i.jsxs($e,{title:"Big O",children:[i.jsx(P,{href:"#bigo-chart",description:"Time/Space Complexities"}),i.jsx(P,{href:"#bigo-data-structure-operations-table",description:"Data Structure Operations"}),i.jsx(P,{href:"#bigo-sorting-algorithms-table",description:"Sorting Algorithms"})]}),i.jsxs($e,{title:"Array",children:[i.jsx(P,{href:"#array-two-pointers-one-input",description:"two pointers: one input, opposite ends"}),i.jsx(P,{href:"#array-two-pointers-two-inputs",description:"two pointers: two inputs, exhaust both"}),i.jsx(P,{href:"#array-sliding-window",description:"sliding window"}),i.jsx(P,{href:"#array-prefix-sum",description:"prefix sum"}),i.jsx(P,{href:"#array-string-building",description:"efficient string building"})]}),i.jsxs($e,{title:"Hash Map",children:[i.jsx(P,{href:"#hashmap-find-number-of-subarrays",description:"find number of subarrays that fit an exact criteria"}),i.jsx(P,{href:"#hashmap-sliding-window",description:"sliding window"})]}),i.jsxs($e,{title:"Linked List",children:[i.jsx(P,{href:"#linkedlist-fast-and-slow-pointer",description:"fast and slow pointer"}),i.jsx(P,{href:"#linkedlist-reverse",description:"reverse linked list"})]}),i.jsxs($e,{title:"Stack",children:[i.jsx(P,{href:"#stack-monotonic-increasing",description:"monotonic increasing stack"}),i.jsx(P,{href:"#stack-monotonic-decreasing",description:"monotonic decreasing stack"})]}),i.jsxs($e,{title:"Binary Tree",children:[i.jsx(P,{href:"#tree-dfs-recursive",description:"DFS (recursive)"}),i.jsx(P,{href:"#tree-dfs-iterative",description:"DFS (iterative)"}),i.jsx(P,{href:"#tree-bfs",description:"BFS"})]}),i.jsxs($e,{title:"Graph",children:[i.jsx(P,{href:"#graph-dfs-recursive",description:"DFS (recursive)"}),i.jsx(P,{href:"#graph-dfs-iterative",description:"DFS (iterative)"}),i.jsx(P,{href:"#graph-bfs",description:"BFS"}),i.jsx(P,{href:"#graph-dijkstra",description:"Dijkstra (shortest path)"}),i.jsx(P,{href:"#graph-bellman-ford",description:"Bellman-Ford (shortest path)"}),i.jsx(P,{href:"#graph-kahn",description:"Kahn (topological sort)"}),i.jsx(P,{href:"#graph-kruskal",description:"Kruskal (mst)"}),i.jsx(P,{href:"#graph-prim",description:"Prim (mst)"})]}),i.jsx($e,{title:"Heap",children:i.jsx(P,{href:"#heap-find-top-k-elements",description:"find top k elements with heap"})}),i.jsxs($e,{title:"Binary Search",children:[i.jsx(P,{href:"#binarysearch-binary-search",description:"binary search"}),i.jsx(P,{href:"#binarysearch-duplicate-elements-left-insertion",description:"duplicate elements, left-most insertion point"}),i.jsx(P,{href:"#binarysearch-duplicate-elements-right-insertion",description:"duplicate elements, right-most insertion point"}),i.jsx(P,{href:"#binarysearch-greedy-minimum",description:"greedy (minimum)"}),i.jsx(P,{href:"#binarysearch-greedy-maximum",description:"greedy (maximum)"})]}),i.jsx($e,{title:"Backtracking",children:i.jsx(P,{href:"#backtracking-backtracking",description:"backtracking"})}),i.jsxs($e,{title:"Dynamic Programming",children:[i.jsx(P,{href:"#dp-top-down",description:"top-down DP"}),i.jsx(P,{href:"#dp-bottom-up",description:"bottom-up DP"}),i.jsx(P,{href:"#dp-kadane",description:"Kadane (max-sum subarray)"})]}),i.jsxs($e,{title:"Bit Manipulation",children:[i.jsx(P,{href:"#bitmanipulation-test-kth-bit",description:"test kth bit"}),i.jsx(P,{href:"#bitmanipulation-set-kth-bit",description:"set kth bit"}),i.jsx(P,{href:"#bitmanipulation-clear-kth-bit",description:"clear kth bit"}),i.jsx(P,{href:"#bitmanipulation-get-rightmost-bit",description:"get rightmost bit"}),i.jsx(P,{href:"#bitmanipulation-count-set-bits",description:"count set bits"}),i.jsx(P,{href:"#bitmanipulation-multiply-power-of-two",description:"multiply by 2^k"}),i.jsx(P,{href:"#bitmanipulation-divide-power-of-two",description:"divide by 2^k"}),i.jsx(P,{href:"#bitmanipulation-check-power-of-two",description:"check if number is power of 2"}),i.jsx(P,{href:"#bitmanipulation-swap-variables",description:"swap two variables"})]}),i.jsxs($e,{title:"Matrix",children:[i.jsx(P,{href:"#matrix-create-copy",description:"create / copy"}),i.jsx(P,{href:"#matrix-diagonals",description:"main / anti diagonals"}),i.jsx(P,{href:"#matrix-rotate-transpose",description:"rotate / transpose"})]}),i.jsxs($e,{title:"Data Structures",children:[i.jsx(P,{href:"#ds-array",description:"array"}),i.jsx(P,{href:"#ds-hash-map",description:"hashmap"}),i.jsx(P,{href:"#ds-linked-list",description:"linked list"}),i.jsx(P,{href:"#ds-doubly-linked-list",description:"doubly linked list"}),i.jsx(P,{href:"#ds-binary-tree",description:"binary tree"}),i.jsx(P,{href:"#ds-binary-search-tree",description:"binary search tree"}),i.jsx(P,{href:"#ds-graph",description:"graph"}),i.jsx(P,{href:"#ds-union-find",description:"union find"}),i.jsx(P,{href:"#ds-union-find-optimized",description:"union find optimized"}),i.jsx(P,{href:"#ds-trie",description:"trie"})]}),i.jsxs($e,{title:"Sorting Algorithms",children:[i.jsx(P,{href:"#sort-bubble",description:"bubble sort"}),i.jsx(P,{href:"#sort-selection",description:"selection sort"}),i.jsx(P,{href:"#sort-insertion",description:"insertion sort"}),i.jsx(P,{href:"#sort-shell",description:"shell sort"}),i.jsx(P,{href:"#sort-merge",description:"mergesort"}),i.jsx(P,{href:"#sort-quick",description:"quicksort"}),i.jsx(P,{href:"#sort-tim",description:"timsort"}),i.jsx(P,{href:"#sort-heap",description:"heapsort"}),i.jsx(P,{href:"#sort-counting",description:"counting sort"}),i.jsx(P,{href:"#sort-bucket",description:"bucket sort"}),i.jsx(P,{href:"#sort-radix",description:"radix sort"}),i.jsx(P,{href:"#sort-cube",description:"cubesort"}),i.jsx(P,{href:"#sort-bogo",description:"bogo sort"}),i.jsx(P,{href:"#sort-pancake",description:"pancake sort"}),i.jsx(P,{href:"#sort-sleep",description:"sleep sort"})]})]})}function eS({hamburgerButtonRef:o}){const m=H.useRef(null),{isSidebarOpen:f,showSidebar:d,hideSidebar:T}=cd(),{view:R}=po(),[M,D]=H.useState(()=>!f),q=Vn(wl.sidebar,!f&&wl.exit,!f&&M&&wl.hide),G=Y=>{Y&&f?T():!Y&&!f&&R==="cheatsheet"&&d()};H.useEffect(()=>{R!=="cheatsheet"&&f&&T()},[R,f,T]);const B=np({maxWidth:768},void 0,G),v=()=>{B&&f&&T()},E=()=>D(!1),I=()=>{f||D(!0)};return ep([m,o],v),i.jsxs("nav",{ref:m,id:"reference-sections","aria-label":"Reference sections",className:q,onAnimationStart:E,onAnimationEndCapture:I,children:[i.jsx("h2",{className:wl.heading,children:"Reference"}),i.jsx("div",{className:wl.scrollContainer,children:i.jsx(nS,{})})]})}function tS(){const o=H.useRef(null);return i.jsxs("div",{id:"AppBar",children:[i.jsx(a_,{forwardedRef:o}),i.jsx(eS,{hamburgerButtonRef:o})]})}const aS="_main_bsmjw_1",iS="_sidebarHidden_bsmjw_12",Bg={main:aS,sidebarHidden:iS},rS="_finder_1y63i_1",lS="_mapMode_1y63i_15",sS="_log_1y63i_42",oS="_logHead_1y63i_51",cS="_logHint_1y63i_61",uS="_logRows_1y63i_67",dS="_row_1y63i_79",fS="_rowNum_1y63i_93",hS="_rowBack_1y63i_97",mS="_rowNumDashed_1y63i_119",gS="_rowText_1y63i_123",pS="_rowQuestion_1y63i_130",bS="_rowCue_1y63i_140",vS="_rowLive_1y63i_157",yS="_rowReady_1y63i_167",xS="_rowCurrent_1y63i_171",_S="_rowResult_1y63i_172",SS="_rowFault_1y63i_187",TS="_nextWrap_1y63i_195",jS="_nextCheck_1y63i_199",wS="_nextLabel_1y63i_210",NS="_line_1y63i_218",ES="_stops_1y63i_222",OS="_stop_1y63i_222",AS="_dashedNext_1y63i_251",kS="_dot_1y63i_255",MS="_answered_1y63i_265",CS="_current_1y63i_269",RS="_reached_1y63i_270",LS="_end_1y63i_274",DS="_fault_1y63i_279",zS="_stopInner_1y63i_284",BS="_stopButton_1y63i_285",US="_cue_1y63i_303",HS="_card_1y63i_313",qS="_strip_1y63i_328",GS="_stripEnd_1y63i_348",YS="_mapStatus_1y63i_359",IS="_seg_1y63i_372",VS="_segButton_1y63i_381",KS="_segOn_1y63i_404",QS="_mapFallback_1y63i_410",XS="_stripTitle_1y63i_414",JS="_stripValue_1y63i_424",ZS="_timer_1y63i_430",PS="_cells_1y63i_437",FS="_cell_1y63i_437",WS="_colon_1y63i_443",$S="_signCell_1y63i_468",nT="_timerCaption_1y63i_489",eT="_idle_1y63i_499",tT="_ok_1y63i_503",aT="_warn_1y63i_507",iT="_over_1y63i_514",rT="_body_1y63i_526",lT="_question_1y63i_540",sT="_resultName_1y63i_541",oT="_lead_1y63i_557",cT="_actions_1y63i_569",uT="_primary_1y63i_575",dT="_kbd_1y63i_602",fT="_options_1y63i_607",hT="_option_1y63i_607",mT="_optionCue_1y63i_653",gT="_footer_1y63i_676",pT="_plain_1y63i_688",bT="_fields_1y63i_728",vT="_field_1y63i_728",yT="_figure_1y63i_759",xT="_okNote_1y63i_767",_T="_overNote_1y63i_771",ST="_summary_1y63i_776",TT="_templates_1y63i_787",jT="_note_1y63i_796",wT="_commonProblems_1y63i_801",NT="_cpTiles_1y63i_820",ET="_commonProblemsLoose_1y63i_835",OT="_commonProblemsNote_1y63i_840",AT="_commonProblemsNum_1y63i_846",kT="_docsLink_1y63i_852",MT="_srOnly_1y63i_863",CT="_turn_1y63i_1",RT="_cpNum_1y63i_905",LT="_cpLoose_1y63i_911",DT="_cpTile_1y63i_820",zT="_toggleLabel_1y63i_933",BT="_toggleHidden_1y63i_940",A={finder:rS,mapMode:lS,log:sS,logHead:oS,logHint:cS,logRows:uS,row:dS,rowNum:fS,rowBack:hS,rowNumDashed:mS,rowText:gS,rowQuestion:pS,rowCue:bS,rowLive:vS,rowReady:yS,rowCurrent:xS,rowResult:_S,rowFault:SS,nextWrap:TS,nextCheck:jS,nextLabel:wS,line:NS,stops:ES,stop:OS,dashedNext:AS,dot:kS,answered:MS,current:CS,reached:RS,end:LS,fault:DS,stopInner:zS,stopButton:BS,cue:US,card:HS,strip:qS,stripEnd:GS,mapStatus:YS,seg:IS,segButton:VS,segOn:KS,mapFallback:QS,stripTitle:XS,stripValue:JS,timer:ZS,cells:PS,cell:FS,colon:WS,signCell:$S,timerCaption:nT,idle:eT,ok:tT,warn:aT,over:iT,body:rT,question:lT,resultName:sT,lead:oT,actions:cT,primary:uT,kbd:dT,options:fT,option:hT,optionCue:mT,footer:gT,plain:pT,fields:bT,field:vT,figure:yT,okNote:xT,overNote:_T,summary:ST,templates:TT,note:jT,commonProblems:wT,cpTiles:NT,commonProblemsLoose:ET,commonProblemsNote:OT,commonProblemsNum:AT,docsLink:kT,srOnly:MT,turn:CT,cpNum:RT,cpLoose:LT,cpTile:DT,toggleLabel:zT,toggleHidden:BT},j=(o,m,f,d=!1)=>d?{lc:o,name:m,slug:f,loose:d}:{lc:o,name:m,slug:f},Ei={rootId:"q-input",nodes:{"q-input":{id:"q-input",question:"What does the problem give you?",options:[{cue:"an array, a string, or a 2D board of values",next:"q-array"},{cue:"a linked list",next:"q-list"},{cue:"a binary tree or BST",next:"q-tree"},{cue:"a graph, edges, prerequisites, or a grid of cells you move between",next:"q-graph"},{cue:"a data stream, or a design-a-class prompt",next:"q-design"},{cue:"an integer n, or work done on its individual bits",next:"q-number"}]},"q-array":{id:"q-array",question:"What does it ask about the array or string?",options:[{cue:"a contiguous subarray or substring, or range sums or products",next:"q-subarray"},{cue:"a pair or triplet that hits a target or scores best, a palindrome, or an in-place edit",next:"q-pointers"},{cue:"searching a sorted or rotated array, or the smallest or largest value that works",next:"q-search"},{cue:"the next greater or smaller element of each item",next:"q-mono"},{cue:"counts, duplicates, membership, top K or repeated largest, brackets, words",next:"q-lookup"},{cue:"choices over elements: generate them all, or find the best or count the ways",next:"q-choices"},{cue:"intervals with a start and an end",next:"sort-first"}]},"q-subarray":{id:"q-subarray",question:"What does it want from the subarray or substring?",options:[{cue:"sum or average of each size-K window",next:"sliding-window-fixed"},{cue:"longest or shortest window that meets a rule",next:"q-window-variable"},{cue:"count subarrays with exactly K distinct or odd",next:"sliding-window-exactly-k"},{cue:"a sum or product over a range: equal to K, between i and j, or everything except one index",next:"q-prefix"},{cue:"maximum sum subarray of any length",next:"dp-kadane"},{cue:"max or min inside each size-K window",next:"monotonic-deque"}]},"q-window-variable":{id:"q-window-variable",question:"What does the window rule check?",options:[{cue:"sum or product vs a target, with non-negative numbers",next:"sliding-window-variable"},{cue:"which characters the window holds, and how many of each",next:"hashmap-sliding-window"}]},"q-prefix":{id:"q-prefix",question:"What kind of range-total question?",options:[{cue:"many queries for the sum between index i and j",next:"prefix-sum-range"},{cue:"for each index, a total of everything except that index",next:"prefix-sum-range"},{cue:"count or longest subarrays with sum K, when values can be negative",next:"prefix-sum-hashmap"}]},"q-pointers":{id:"q-pointers",question:"What kind of pair, check, or edit?",options:[{cue:"a pair or triplet that hits a target, when the array is sorted or the values matter, not their positions",next:"two-pointers-converging"},{cue:"a palindrome or other mirror-image check",next:"two-pointers-converging"},{cue:"the best pair where how far apart they are is part of the score",next:"two-pointers-converging"},{cue:"the largest rise from an earlier element to a later one",next:"dp-kadane"},{cue:"walking two separate inputs together",next:"two-pointers-two-inputs"},{cue:"rewriting the array in place, keeping some elements and moving or dropping the rest",next:"two-pointers-fast-slow-inplace"},{cue:"two numbers that hit a target in an unsorted array, returning their original positions",next:"hashmap-frequency"}]},"q-search":{id:"q-search",question:"What are you searching for?",options:[{cue:"a given value, or the minimum, in a sorted or rotated array",next:"binary-search-classic"},{cue:"first position of X, or where to insert X",next:"binary-search-left-bound"},{cue:"last position of X, or count of elements <= X",next:"binary-search-right-bound"},{cue:"smallest capacity or speed that works (minimize the max)",next:"binary-search-answer-minimize"},{cue:"largest distance or size that works (maximize the min)",next:"binary-search-answer-maximize"}]},"q-mono":{id:"q-mono",question:"What do you need for each element?",options:[{cue:"the next greater element for each item",next:"monotonic-stack-decreasing"},{cue:"the next smaller element for each item",next:"monotonic-stack-increasing"},{cue:"max or min inside each size-K window",next:"monotonic-deque"}]},"q-lookup":{id:"q-lookup",question:"What do you need to do with the data?",options:[{cue:"counting or grouping items that match",next:"hashmap-frequency"},{cue:"whether a value, or the value next to it, is present, in linear time",next:"hashmap-frequency"},{cue:"the K best items, or the Kth one, by size or frequency",next:"heap-top-k"},{cue:"repeatedly take the largest values, combine them, and put the result back",next:"heap-top-k"},{cue:"matching or nested structure, where the last thing opened closes first",next:"stack-matching"},{cue:"prefix lookups over a word list",next:"trie"},{cue:"building an output string piece by piece",next:"string-building"},{cue:"operating on the bits of numbers",next:"bit-manipulation"}]},"q-choices":{id:"q-choices",question:"What are you trying to do with the choices?",options:[{cue:"generate every subset, permutation, or combination",next:"q-backtrack"},{cue:"best cost, or number of ways, over the choices",next:"q-dp"},{cue:"a locally best move each step is enough",next:"greedy"}]},"q-backtrack":{id:"q-backtrack",question:"Can a partial choice be rejected early?",options:[{cue:"no, every candidate has to be generated",next:"backtracking"},{cue:"yes, a constraint lets you reject a partial choice early",next:"backtracking-pruning"}]},"q-dp":{id:"q-dp",question:"What do the choices look like?",options:[{cue:"items you can reuse any number of times",next:"dp-unbounded-knapsack"},{cue:"each item can be used at most once",next:"dp-01-knapsack"},{cue:"ordering or matching within one or two sequences",next:"dp-sequences"},{cue:"something else, where each state depends on earlier states",next:"q-dp-style"}]},"q-dp-style":{id:"q-dp-style",question:"Which way is the recurrence easier to write?",options:[{cue:"recurse from a state and cache the result",next:"dp-top-down"},{cue:"fill dp[i] or dp[r][c] from earlier cells",next:"dp-bottom-up"}]},"q-list":{id:"q-list",question:"What do you do with the list?",options:[{cue:"a cycle, the middle, or a position counted from the end",next:"linked-list-fast-slow"},{cue:"interleave or compare the front half with the back half",next:"linked-list-split-reverse-merge"},{cue:"reverse the list, a sublist, or k-groups",next:"linked-list-reverse"},{cue:"merge two sorted lists",next:"linked-list-merge-sorted"},{cue:"merge K sorted lists",next:"heap-merge-k"}]},"q-tree":{id:"q-tree",question:"What does it ask about the tree?",options:[{cue:"what the tree looks like level by level, or from one side",next:"tree-bfs"},{cue:"a measure of the whole tree, like its height, balance, or longest path",next:"tree-dfs-recursive"},{cue:"a change made at every node, or whether two trees match or one appears inside the other",next:"tree-dfs-recursive"},{cue:"a check at each node against its ancestors on the path from the root",next:"tree-dfs-recursive"},{cue:"find, insert, or delete a value in a BST, or the lowest node above two given nodes",next:"bst-walk"},{cue:"a BST's values in sorted order, one at a time or up to the kth",next:"tree-dfs-iterative"}]},"q-graph":{id:"q-graph",question:"What does it ask about the graph or grid?",options:[{cue:"everything connected to a start: count regions, measure them, or copy them",next:"graph-dfs"},{cue:"which cells connect to the edge of the grid",next:"graph-dfs"},{cue:"shortest path or minimum steps",next:"q-shortest"},{cue:"an order that respects prerequisites, or proof that none exists",next:"topological-sort"},{cue:"whether two items are already in the same group, or an edge closes an undirected cycle",next:"union-find"},{cue:"minimum cost to connect all points",next:"mst"},{cue:"a grid where you can only move right or down",next:"q-dp"}]},"q-shortest":{id:"q-shortest",question:"What kind of shortest path?",options:[{cue:"unweighted edges, from one start",next:"graph-bfs-shortest-path"},{cue:"spreads from many sources at once",next:"multi-source-bfs"},{cue:"weighted edges",next:"shortest-path-weighted"}]},"q-design":{id:"q-design",question:"What must the structure support?",options:[{cue:"median of a data stream",next:"two-heaps"},{cue:"the Kth largest of the values so far, after each new value",next:"heap-top-k"},{cue:"only the items from a recent time span or the last N arrivals, or a fixed-size queue",next:"queue-design"},{cue:"constant-time lookup plus keeping items ordered by when they were last used",next:"design-hashmap-linked-list"},{cue:"storing words so prefix and exact lookups are fast",next:"trie"},{cue:"a stack that also answers a question about its contents, like its minimum, in constant time",next:"stack-matching"},{cue:"stepping back through a history of actions",next:"stack-matching"}]},"q-number":{id:"q-number",question:"What does it ask about n?",options:[{cue:"bit-level properties of n",next:"bit-manipulation"},{cue:"the nth term defined by earlier terms",next:"q-dp"},{cue:"the largest x whose square is still at most n",next:"binary-search-answer-maximize"},{cue:"guess the number in 1..n",next:"binary-search-classic"}]}},leaves:{"two-pointers-converging":{id:"two-pointers-converging",name:"Two pointers, converging",pattern:"Two Pointers",summary:"Sorted array pairs/triplets, palindromes, in-place reversal. Start at both ends and move the pointer whose side cannot be part of the answer.",docsUrl:"https://resources.devweekends.com/dsa-patterns/two-pointers",problems:[j(167,"Two Sum II - Input Array Is Sorted","two-sum-ii-input-array-is-sorted"),j(15,"3Sum","3sum"),j(11,"Container With Most Water","container-with-most-water"),j(125,"Valid Palindrome","valid-palindrome")],templateIds:["two-pointers-one-input"]},"two-pointers-two-inputs":{id:"two-pointers-two-inputs",name:"Two pointers, two inputs",pattern:"Two Pointers",summary:"Merge sorted arrays, subsequence checks. One pointer per input; advance the one whose element is consumed.",docsUrl:"https://resources.devweekends.com/dsa-patterns/two-pointers",problems:[j(88,"Merge Sorted Array","merge-sorted-array"),j(392,"Is Subsequence","is-subsequence"),j(986,"Interval List Intersections","interval-list-intersections")],templateIds:["two-pointers-two-inputs"]},"two-pointers-fast-slow-inplace":{id:"two-pointers-fast-slow-inplace",name:"Two pointers, read/write in place",pattern:"Two Pointers",summary:"Remove duplicates, move zeroes, partition in O(1) space. A fast pointer reads every element; a slow pointer marks where the next kept element is written.",docsUrl:"https://resources.devweekends.com/dsa-patterns/two-pointers",problems:[j(26,"Remove Duplicates from Sorted Array","remove-duplicates-from-sorted-array"),j(283,"Move Zeroes","move-zeroes"),j(27,"Remove Element","remove-element"),j(75,"Sort Colors","sort-colors")],templateIds:[]},"sliding-window-fixed":{id:"sliding-window-fixed",name:"Sliding window, fixed size",pattern:"Sliding Window",summary:"Every window of exactly K elements. Add the entering element and remove the leaving one so each step is O(1).",docsUrl:"https://resources.devweekends.com/dsa-patterns/sliding-window",problems:[j(643,"Maximum Average Subarray I","maximum-average-subarray-i"),j(1456,"Maximum Number of Vowels in a Substring of Given Length","maximum-number-of-vowels-in-a-substring-of-given-length")],templateIds:["sliding-window"]},"sliding-window-variable":{id:"sliding-window-variable",name:"Sliding window, variable size",pattern:"Sliding Window",summary:"Longest/shortest subarray meeting a sum-style rule with non-negative values. Expand right, shrink left while the window is invalid (or while valid, for shortest).",docsUrl:"https://resources.devweekends.com/dsa-patterns/sliding-window",problems:[j(209,"Minimum Size Subarray Sum","minimum-size-subarray-sum"),j(713,"Subarray Product Less Than K","subarray-product-less-than-k"),j(1004,"Max Consecutive Ones III","max-consecutive-ones-iii")],templateIds:["sliding-window"]},"sliding-window-exactly-k":{id:"sliding-window-exactly-k",name:"Sliding window, exactly K",pattern:"Sliding Window",summary:'"Exactly K" is not monotonic, so count it as atMost(K) - atMost(K-1), each a standard variable window.',docsUrl:"https://resources.devweekends.com/dsa-patterns/sliding-window",problems:[j(992,"Subarrays with K Different Integers","subarrays-with-k-different-integers"),j(1248,"Count Number of Nice Subarrays","count-number-of-nice-subarrays"),j(930,"Binary Subarrays With Sum","binary-subarrays-with-sum")],templateIds:[]},"prefix-sum-range":{id:"prefix-sum-range",name:"Prefix sum, range queries",pattern:"Prefix Sum",summary:"Range totals on a fixed array, or for each index the total of everything before and after it. Precompute prefix (and suffix) sums or products; each answer is then O(1), e.g. prefix[j+1] - prefix[i].",docsUrl:"https://resources.devweekends.com/dsa-patterns/prefix-sum",problems:[j(303,"Range Sum Query - Immutable","range-sum-query-immutable"),j(304,"Range Sum Query 2D - Immutable","range-sum-query-2d-immutable"),j(238,"Product of Array Except Self","product-of-array-except-self"),j(724,"Find Pivot Index","find-pivot-index")],templateIds:["prefix-sum"]},"prefix-sum-hashmap":{id:"prefix-sum-hashmap",name:"Prefix sum, hash map",pattern:"Prefix Sum",summary:"Count or find subarrays with sum K when negatives break sliding window. Store prefix-sum counts (seeded with {0: 1}) and look up prefix - K.",docsUrl:"https://resources.devweekends.com/dsa-patterns/prefix-sum",problems:[j(560,"Subarray Sum Equals K","subarray-sum-equals-k"),j(525,"Contiguous Array","contiguous-array"),j(974,"Subarray Sums Divisible by K","subarray-sums-divisible-by-k")],templateIds:["hashmap-find-number-of-subarrays"]},"string-building":{id:"string-building",name:"String building",pattern:"String",summary:"Producing a new string piece by piece. Append to a list or builder and join once at the end; repeated concatenation is O(n^2).",docsUrl:"https://resources.devweekends.com/dsa-patterns/stack",problems:[j(151,"Reverse Words in a String","reverse-words-in-a-string"),j(443,"String Compression","string-compression"),j(1768,"Merge Strings Alternately","merge-strings-alternately")],templateIds:["string-building"]},"binary-search-classic":{id:"binary-search-classic",name:"Binary search, find target",pattern:"Binary Search",summary:"Find an exact value in a sorted (or rotated) space. Halve the range each step by comparing the middle with the target.",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",problems:[j(704,"Binary Search","binary-search"),j(153,"Find Minimum in Rotated Sorted Array","find-minimum-in-rotated-sorted-array"),j(33,"Search in Rotated Sorted Array","search-in-rotated-sorted-array"),j(74,"Search a 2D Matrix","search-a-2d-matrix")],templateIds:["binary-search"]},"binary-search-left-bound":{id:"binary-search-left-bound",name:"Binary search, left bound",pattern:"Binary Search",summary:"First position of X or its insertion point. Keep searching left when nums[mid] >= X to land on the leftmost index.",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",problems:[j(35,"Search Insert Position","search-insert-position"),j(278,"First Bad Version","first-bad-version"),j(34,"Find First and Last Position of Element in Sorted Array","find-first-and-last-position-of-element-in-sorted-array")],templateIds:["binary-search-left-insertion"]},"binary-search-right-bound":{id:"binary-search-right-bound",name:"Binary search, right bound",pattern:"Binary Search",summary:"Last position of X, or count of elements <= X. Search for the insertion point after every copy of X (go right when nums[mid] <= X).",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",problems:[j(34,"Find First and Last Position of Element in Sorted Array","find-first-and-last-position-of-element-in-sorted-array"),j(744,"Find Smallest Letter Greater Than Target","find-smallest-letter-greater-than-target")],templateIds:["binary-search-right-insertion"]},"binary-search-answer-minimize":{id:"binary-search-answer-minimize",name:"Binary search on answer, minimum",pattern:"Binary Search",summary:"Smallest value that still works (min capacity, min speed, minimize the max). Binary search the answer range with a greedy feasibility check.",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",problems:[j(875,"Koko Eating Bananas","koko-eating-bananas"),j(1011,"Capacity To Ship Packages Within D Days","capacity-to-ship-packages-within-d-days"),j(410,"Split Array Largest Sum","split-array-largest-sum")],templateIds:["binary-search-greedy-minimum"]},"binary-search-answer-maximize":{id:"binary-search-answer-maximize",name:"Binary search on answer, maximum",pattern:"Binary Search",summary:"Largest value that still works (maximize the minimum distance). Binary search the answer range, keeping the best feasible value.",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",problems:[j(69,"Sqrt(x)","sqrtx"),j(1552,"Magnetic Force Between Two Balls","magnetic-force-between-two-balls"),j(2226,"Maximum Candies Allocated to K Children","maximum-candies-allocated-to-k-children")],templateIds:["binary-search-greedy-maximum"]},"sort-first":{id:"sort-first",name:"Sort first, then scan",pattern:"Sorting",summary:"Intervals, meetings, or anything easier in order. Sort (often by start or end), then apply a linear scan, greedy, heap, or two pointers.",docsUrl:"https://resources.devweekends.com/dsa-patterns/sorting",problems:[j(56,"Merge Intervals","merge-intervals"),j(435,"Non-overlapping Intervals","non-overlapping-intervals"),j(57,"Insert Interval","insert-interval")],templateIds:[]},"hashmap-frequency":{id:"hashmap-frequency",name:"Hash map, lookup and frequency",pattern:"Hash Map",summary:"Counting, duplicates, anagrams, grouping, or unsorted two-sum. Store counts or complements so each lookup is O(1).",docsUrl:"https://resources.devweekends.com/dsa-patterns/hashmap",problems:[j(1,"Two Sum","two-sum"),j(217,"Contains Duplicate","contains-duplicate"),j(242,"Valid Anagram","valid-anagram"),j(49,"Group Anagrams","group-anagrams"),j(36,"Valid Sudoku","valid-sudoku"),j(128,"Longest Consecutive Sequence","longest-consecutive-sequence")],templateIds:[]},"hashmap-sliding-window":{id:"hashmap-sliding-window",name:"Sliding window, hash map",pattern:"Sliding Window",summary:"Substring with no repeats, at most K distinct, or containing all of T. A frequency map tracks the window so you know when to shrink.",docsUrl:"https://resources.devweekends.com/dsa-patterns/sliding-window",problems:[j(3,"Longest Substring Without Repeating Characters","longest-substring-without-repeating-characters"),j(76,"Minimum Window Substring","minimum-window-substring"),j(424,"Longest Repeating Character Replacement","longest-repeating-character-replacement")],templateIds:["hashmap-sliding-window"]},"stack-matching":{id:"stack-matching",name:"Stack, matching and saved state",pattern:"Stack",summary:"Brackets, expression evaluation, path simplification, undo, or a stack that also tracks extra state. Push openings, or state alongside each value; pop when the match arrives or to restore earlier state.",docsUrl:"https://resources.devweekends.com/dsa-patterns/stack",problems:[j(20,"Valid Parentheses","valid-parentheses"),j(71,"Simplify Path","simplify-path"),j(155,"Min Stack","min-stack"),j(150,"Evaluate Reverse Polish Notation","evaluate-reverse-polish-notation")],templateIds:[]},"monotonic-stack-increasing":{id:"monotonic-stack-increasing",name:"Monotonic stack, increasing",pattern:"Monotonic Stack",summary:"Next/previous smaller element. Keep the stack increasing; a smaller arrival pops and resolves the taller entries.",docsUrl:"https://resources.devweekends.com/dsa-patterns/monotonic-stack",problems:[j(84,"Largest Rectangle in Histogram","largest-rectangle-in-histogram"),j(85,"Maximal Rectangle","maximal-rectangle")],templateIds:["stack-monotonic-increasing"]},"monotonic-stack-decreasing":{id:"monotonic-stack-decreasing",name:"Monotonic stack, decreasing",pattern:"Monotonic Stack",summary:"Next/previous greater element. Keep the stack decreasing; a larger arrival pops and resolves the smaller entries.",docsUrl:"https://resources.devweekends.com/dsa-patterns/monotonic-stack",problems:[j(739,"Daily Temperatures","daily-temperatures"),j(496,"Next Greater Element I","next-greater-element-i"),j(503,"Next Greater Element II","next-greater-element-ii"),j(901,"Online Stock Span","online-stock-span")],templateIds:["stack-monotonic-decreasing"]},"monotonic-deque":{id:"monotonic-deque",name:"Monotonic deque",pattern:"Monotonic Deque",summary:"Max or min of every window of size K. Keep a deque of indices in monotonic order; drop expired indices from the front.",docsUrl:"https://resources.devweekends.com/dsa-patterns/queue",problems:[j(239,"Sliding Window Maximum","sliding-window-maximum"),j(1438,"Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit","longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit")],templateIds:[]},"queue-design":{id:"queue-design",name:"Queue design",pattern:"Queue",summary:"Rolling windows over recent items, rate limiting, fixed-size queues. FIFO of values or timestamps, evicting from the front as they expire.",docsUrl:"https://resources.devweekends.com/dsa-patterns/queue",problems:[j(933,"Number of Recent Calls","number-of-recent-calls"),j(622,"Design Circular Queue","design-circular-queue"),j(346,"Moving Average from Data Stream","moving-average-from-data-stream")],templateIds:[]},"design-hashmap-linked-list":{id:"design-hashmap-linked-list",name:"Hash map + doubly linked list",pattern:"Design",summary:"Constant-time lookup plus constant-time reordering or eviction by recency. A hash map finds a key's node; a doubly linked list keeps items in recency order, oldest at one end.",docsUrl:"https://resources.devweekends.com/dsa-patterns/linked-list",problems:[j(146,"LRU Cache","lru-cache"),j(460,"LFU Cache","lfu-cache",!0)],templateIds:[]},"heap-top-k":{id:"heap-top-k",name:"Heap, top K and repeated max",pattern:"Heap",summary:"K largest, K most frequent, Kth element (also in a stream), or taking the current largest again and again. A min-heap of size K for top K; a max-heap of everything when you must keep pulling the largest.",docsUrl:"https://resources.devweekends.com/dsa-patterns/heap",problems:[j(215,"Kth Largest Element in an Array","kth-largest-element-in-an-array"),j(347,"Top K Frequent Elements","top-k-frequent-elements"),j(703,"Kth Largest Element in a Stream","kth-largest-element-in-a-stream"),j(1046,"Last Stone Weight","last-stone-weight"),j(973,"K Closest Points to Origin","k-closest-points-to-origin")],templateIds:["heap-find-top-k-elements"]},"heap-merge-k":{id:"heap-merge-k",name:"Heap, merge K sorted",pattern:"Heap",summary:"Merge K sorted lists or streams. Push each head into a min-heap; pop the smallest and push its successor.",docsUrl:"https://resources.devweekends.com/dsa-patterns/heap",problems:[j(23,"Merge k Sorted Lists","merge-k-sorted-lists"),j(378,"Kth Smallest Element in a Sorted Matrix","kth-smallest-element-in-a-sorted-matrix"),j(373,"Find K Pairs with Smallest Sums","find-k-pairs-with-smallest-sums"),j(1046,"Last Stone Weight","last-stone-weight",!0)],templateIds:[]},"two-heaps":{id:"two-heaps",name:"Two heaps",pattern:"Heap",summary:"Running median of a stream. A max-heap holds the lower half and a min-heap the upper half, rebalanced so sizes differ by at most one.",docsUrl:"https://resources.devweekends.com/dsa-patterns/heap",problems:[j(295,"Find Median from Data Stream","find-median-from-data-stream"),j(480,"Sliding Window Median","sliding-window-median")],templateIds:[]},trie:{id:"trie",name:"Trie",pattern:"Trie",summary:"Prefix matching, autocomplete, word dictionaries. Store words character by character in a tree so prefix lookups cost O(length).",docsUrl:"https://resources.devweekends.com/dsa-patterns/trie",problems:[j(208,"Implement Trie (Prefix Tree)","implement-trie-prefix-tree"),j(211,"Design Add and Search Words Data Structure","design-add-and-search-words-data-structure"),j(212,"Word Search II","word-search-ii")],templateIds:["ds-trie"]},"linked-list-fast-slow":{id:"linked-list-fast-slow",name:"Linked list, fast and slow pointers",pattern:"Linked List",summary:"Cycle detection, middle node, Nth from end. Move one pointer twice as fast (Floyd's) or give one a head start.",docsUrl:"https://resources.devweekends.com/dsa-patterns/linked-list",problems:[j(141,"Linked List Cycle","linked-list-cycle"),j(876,"Middle of the Linked List","middle-of-the-linked-list"),j(19,"Remove Nth Node From End of List","remove-nth-node-from-end-of-list"),j(142,"Linked List Cycle II","linked-list-cycle-ii")],templateIds:["linkedlist-fast-and-slow-pointer"]},"linked-list-reverse":{id:"linked-list-reverse",name:"Linked list, reverse",pattern:"Linked List",summary:"Reverse a whole list, a sublist, or k-groups. Walk with prev/curr/next and flip each pointer.",docsUrl:"https://resources.devweekends.com/dsa-patterns/linked-list",problems:[j(206,"Reverse Linked List","reverse-linked-list"),j(92,"Reverse Linked List II","reverse-linked-list-ii"),j(25,"Reverse Nodes in k-Group","reverse-nodes-in-k-group")],templateIds:["linkedlist-reverse"]},"linked-list-merge-sorted":{id:"linked-list-merge-sorted",name:"Linked list, merge sorted",pattern:"Linked List",summary:"Merge two sorted lists. Use a dummy head and always attach the smaller of the two current nodes.",docsUrl:"https://resources.devweekends.com/dsa-patterns/linked-list",problems:[j(21,"Merge Two Sorted Lists","merge-two-sorted-lists"),j(148,"Sort List","sort-list")],templateIds:[]},"linked-list-split-reverse-merge":{id:"linked-list-split-reverse-merge",name:"Linked list, split, reverse, merge",pattern:"Linked List",summary:"Interleave or compare the two halves of a list. Find the middle with fast and slow pointers, reverse the second half, then merge or compare it with the first.",docsUrl:"https://resources.devweekends.com/dsa-patterns/linked-list",problems:[j(143,"Reorder List","reorder-list"),j(234,"Palindrome Linked List","palindrome-linked-list"),j(2130,"Maximum Twin Sum of a Linked List","maximum-twin-sum-of-a-linked-list")],templateIds:[]},"tree-dfs-recursive":{id:"tree-dfs-recursive",name:"Tree DFS, recursive",pattern:"DFS",summary:"Anything computed at each node from its children, or checked against values passed down from its ancestors. Recurse into each child; combine answers on the way up, or pass bounds and running values down.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dfs",problems:[j(226,"Invert Binary Tree","invert-binary-tree"),j(104,"Maximum Depth of Binary Tree","maximum-depth-of-binary-tree"),j(543,"Diameter of Binary Tree","diameter-of-binary-tree"),j(110,"Balanced Binary Tree","balanced-binary-tree"),j(100,"Same Tree","same-tree"),j(572,"Subtree of Another Tree","subtree-of-another-tree"),j(235,"Lowest Common Ancestor of a Binary Search Tree","lowest-common-ancestor-of-a-binary-search-tree",!0),j(1448,"Count Good Nodes in Binary Tree","count-good-nodes-in-binary-tree"),j(98,"Validate Binary Search Tree","validate-binary-search-tree")],templateIds:["tree-dfs-recursive"]},"tree-dfs-iterative":{id:"tree-dfs-iterative",name:"Tree DFS, iterative",pattern:"DFS",summary:"Traversals you must pause, or trees too deep to recurse. Replace recursion with an explicit stack, often for an in-order walk you can pause.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dfs",problems:[j(173,"Binary Search Tree Iterator","binary-search-tree-iterator"),j(230,"Kth Smallest Element in a BST","kth-smallest-element-in-a-bst"),j(94,"Binary Tree Inorder Traversal","binary-tree-inorder-traversal")],templateIds:["tree-dfs-iterative"]},"bst-walk":{id:"bst-walk",name:"BST, walk by ordering",pattern:"Binary Search Tree",summary:"Search, insert, delete, or a lowest common ancestor in a BST. Compare with the node and step to the one child that can hold the answer: O(height), no full traversal.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dfs",problems:[j(235,"Lowest Common Ancestor of a Binary Search Tree","lowest-common-ancestor-of-a-binary-search-tree"),j(700,"Search in a Binary Search Tree","search-in-a-binary-search-tree"),j(701,"Insert into a Binary Search Tree","insert-into-a-binary-search-tree"),j(450,"Delete Node in a BST","delete-node-in-a-bst")],templateIds:[]},"tree-bfs":{id:"tree-bfs",name:"Tree BFS, level order",pattern:"BFS",summary:"Anything computed per level. Process the queue one level at a time using its size as a snapshot.",docsUrl:"https://resources.devweekends.com/dsa-patterns/bfs",problems:[j(102,"Binary Tree Level Order Traversal","binary-tree-level-order-traversal"),j(199,"Binary Tree Right Side View","binary-tree-right-side-view"),j(103,"Binary Tree Zigzag Level Order Traversal","binary-tree-zigzag-level-order-traversal")],templateIds:["tree-bfs"]},"graph-dfs":{id:"graph-dfs",name:"Graph DFS",pattern:"DFS",summary:"Connected components, region sizes, copying a structure, or which cells connect to the border. Explore fully from each unvisited node (or from every border cell), marking visited.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dfs",problems:[j(200,"Number of Islands","number-of-islands"),j(695,"Max Area of Island","max-area-of-island"),j(133,"Clone Graph","clone-graph"),j(417,"Pacific Atlantic Water Flow","pacific-atlantic-water-flow"),j(130,"Surrounded Regions","surrounded-regions")],templateIds:["graph-dfs-recursive","graph-dfs-iterative"]},"graph-bfs-shortest-path":{id:"graph-bfs-shortest-path",name:"Graph BFS, shortest path",pattern:"BFS",summary:"Fewest steps in an unweighted graph or grid. BFS from the start; the level at which you reach the target is the distance.",docsUrl:"https://resources.devweekends.com/dsa-patterns/bfs",problems:[j(127,"Word Ladder","word-ladder"),j(1091,"Shortest Path in Binary Matrix","shortest-path-in-binary-matrix"),j(752,"Open the Lock","open-the-lock")],templateIds:["graph-bfs"]},"multi-source-bfs":{id:"multi-source-bfs",name:"Multi-source BFS",pattern:"BFS",summary:"Something spreads from many cells at once. Enqueue every source first, then run one BFS.",docsUrl:"https://resources.devweekends.com/dsa-patterns/bfs",problems:[j(994,"Rotting Oranges","rotting-oranges"),j(542,"01 Matrix","01-matrix"),j(417,"Pacific Atlantic Water Flow","pacific-atlantic-water-flow",!0),j(130,"Surrounded Regions","surrounded-regions",!0)],templateIds:[]},"shortest-path-weighted":{id:"shortest-path-weighted",name:"Shortest path, weighted",pattern:"Graph Algorithms",summary:"Shortest path with edge weights. Dijkstra (min-heap) for non-negative weights; Bellman-Ford for negatives or at most K edges.",docsUrl:"https://resources.devweekends.com/dsa-patterns/graph-algorithms",problems:[j(743,"Network Delay Time","network-delay-time"),j(787,"Cheapest Flights Within K Stops","cheapest-flights-within-k-stops"),j(1631,"Path With Minimum Effort","path-with-minimum-effort")],templateIds:["graph-dijkstra","graph-bellman-ford"]},"topological-sort":{id:"topological-sort",name:"Topological sort",pattern:"Graph Algorithms",summary:"Ordering with dependencies, or detecting that none exists. Kahn's algorithm: repeatedly take nodes with in-degree 0.",docsUrl:"https://resources.devweekends.com/dsa-patterns/graph-algorithms",problems:[j(207,"Course Schedule","course-schedule"),j(210,"Course Schedule II","course-schedule-ii")],templateIds:["graph-kahn"]},"union-find":{id:"union-find",name:"Union-find",pattern:"Union Find",summary:"Are two items in the same group, merging groups, redundant edges (undirected cycles). Keep a parent array with path compression and union by rank.",docsUrl:"https://resources.devweekends.com/dsa-patterns/union-find",problems:[j(684,"Redundant Connection","redundant-connection"),j(721,"Accounts Merge","accounts-merge"),j(547,"Number of Provinces","number-of-provinces")],templateIds:["ds-union-find","ds-union-find-optimized"]},mst:{id:"mst",name:"Minimum spanning tree",pattern:"Graph Algorithms",summary:"Minimum cost to connect all points. Kruskal (sort edges + Union Find) or Prim (grow from a node with a min-heap).",docsUrl:"https://resources.devweekends.com/dsa-patterns/graph-algorithms",problems:[j(1584,"Min Cost to Connect All Points","min-cost-to-connect-all-points")],templateIds:["graph-kruskal","graph-prim"]},backtracking:{id:"backtracking",name:"Backtracking",pattern:"Backtracking",summary:"Generate all subsets, permutations, or combinations. Choose, recurse, un-choose, recording each complete candidate.",docsUrl:"https://resources.devweekends.com/dsa-patterns/backtracking",problems:[j(78,"Subsets","subsets"),j(46,"Permutations","permutations"),j(77,"Combinations","combinations"),j(39,"Combination Sum","combination-sum")],templateIds:["backtracking"]},"backtracking-pruning":{id:"backtracking-pruning",name:"Backtracking, pruning",pattern:"Backtracking",summary:"Constraint puzzles where a partial choice can be checked early. Backtrack, but reject a partial choice as soon as it breaks a constraint.",docsUrl:"https://resources.devweekends.com/dsa-patterns/backtracking",problems:[j(51,"N-Queens","n-queens"),j(37,"Sudoku Solver","sudoku-solver"),j(79,"Word Search","word-search")],templateIds:[]},"dp-top-down":{id:"dp-top-down",name:"DP, top-down",pattern:"Dynamic Programming",summary:"Overlapping subproblems where the recursion is the natural statement. Write the recursive choice, then cache results by state.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",problems:[j(139,"Word Break","word-break"),j(91,"Decode Ways","decode-ways")],templateIds:["dp-top-down"]},"dp-bottom-up":{id:"dp-bottom-up",name:"DP, bottom-up",pattern:"Dynamic Programming",summary:"Each state depends on earlier indices or neighbor cells. Fill a dp table from the base cases forward.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",problems:[j(198,"House Robber","house-robber"),j(62,"Unique Paths","unique-paths"),j(64,"Minimum Path Sum","minimum-path-sum"),j(70,"Climbing Stairs","climbing-stairs")],templateIds:["dp-bottom-up"]},"dp-kadane":{id:"dp-kadane",name:"Kadane's algorithm",pattern:"Dynamic Programming",summary:"Maximum sum subarray, or the best gain of a later value over an earlier one. At each element, either extend the running best or restart from it (for a gain, track the lowest value so far); keep the best seen.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",problems:[j(53,"Maximum Subarray","maximum-subarray"),j(152,"Maximum Product Subarray","maximum-product-subarray"),j(918,"Maximum Sum Circular Subarray","maximum-sum-circular-subarray"),j(121,"Best Time to Buy and Sell Stock","best-time-to-buy-and-sell-stock")],templateIds:["dp-kadane"]},"dp-unbounded-knapsack":{id:"dp-unbounded-knapsack",name:"Unbounded knapsack",pattern:"Dynamic Programming",summary:"Items reusable any number of times: fewest items, or number of ways, to reach a total. 1D dp over the target, looping capacity forward.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",problems:[j(322,"Coin Change","coin-change"),j(518,"Coin Change II","coin-change-ii"),j(279,"Perfect Squares","perfect-squares")],templateIds:[]},"dp-01-knapsack":{id:"dp-01-knapsack",name:"0/1 knapsack",pattern:"Dynamic Programming",summary:"Each item used at most once: can a subset, or how many subsets, reach a total. dp over capacity, looping capacity backwards per item.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",problems:[j(416,"Partition Equal Subset Sum","partition-equal-subset-sum"),j(494,"Target Sum","target-sum"),j(474,"Ones and Zeroes","ones-and-zeroes")],templateIds:[]},"dp-sequences":{id:"dp-sequences",name:"DP, sequences",pattern:"Dynamic Programming",summary:"Longest increasing or common subsequence, edit distance. dp[i] over one sequence or dp[i][j] over prefixes of two.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",problems:[j(300,"Longest Increasing Subsequence","longest-increasing-subsequence"),j(1143,"Longest Common Subsequence","longest-common-subsequence"),j(72,"Edit Distance","edit-distance")],templateIds:[]},greedy:{id:"greedy",name:"Greedy",pattern:"Greedy",summary:"Take the locally best move in one pass when an exchange argument shows it is never worse.",docsUrl:"https://resources.devweekends.com/dsa-patterns/greedy",problems:[j(121,"Best Time to Buy and Sell Stock","best-time-to-buy-and-sell-stock",!0),j(55,"Jump Game","jump-game"),j(134,"Gas Station","gas-station"),j(763,"Partition Labels","partition-labels")],templateIds:[]},"bit-manipulation":{id:"bit-manipulation",name:"Bit manipulation",pattern:"Bit Manipulation",summary:"Single number among pairs, set bits, powers of two. Use XOR, masks, and shifts to work on bits directly in O(1) space.",docsUrl:"https://resources.devweekends.com/dsa-patterns/bit-manipulation",problems:[j(136,"Single Number","single-number"),j(191,"Number of 1 Bits","number-of-1-bits"),j(231,"Power of Two","power-of-two"),j(338,"Counting Bits","counting-bits")],templateIds:["bitmanipulation-test-kth-bit","bitmanipulation-set-kth-bit","bitmanipulation-clear-kth-bit","bitmanipulation-toggle-kth-bit","bitmanipulation-get-rightmost-bit","bitmanipulation-count-set-bits","bitmanipulation-multiply-power-of-two","bitmanipulation-divide-power-of-two","bitmanipulation-check-power-of-two","bitmanipulation-swap-variables"]}}},td=o=>String(o).padStart(2,"0");function UT({run:o}){const{started:m,steps:f,leaf:d,node:T}=o,R=f.length+1,M=m&&!d&&!T;return i.jsxs("nav",{className:A.log,"aria-label":"Your path so far",children:[i.jsxs("header",{className:A.logHead,children:[i.jsxs("p",{className:A.stripTitle,children:["Path log",i.jsxs("span",{className:A.stripValue,children:[f.length," answered"]})]}),i.jsx("p",{className:A.logHint,children:f.length>0?"Click a step to go back to that check.":"Each answer is written here as you go."})]}),i.jsxs("ol",{className:A.logRows,children:[f.map((D,q)=>i.jsx("li",{children:i.jsxs("button",{type:"button",className:A.row,"aria-label":`Back to question ${q+1}: ${D.question} You picked: ${D.option.cue}`,onClick:()=>o.backtrackTo(q),children:[i.jsx("span",{className:A.rowNum,"aria-hidden":"true",children:td(q+1)}),i.jsxs("span",{className:A.rowText,children:[i.jsx("span",{className:A.rowQuestion,children:D.question}),i.jsx("span",{className:A.rowCue,children:D.option.cue})]}),i.jsx("span",{className:A.rowBack,"aria-hidden":"true",children:"Back"})]})},q)),!m&&i.jsx("li",{children:i.jsxs("div",{className:Vn(A.row,A.rowReady),children:[i.jsx("span",{className:A.rowNum,"aria-hidden":"true",children:"01"}),i.jsxs("span",{className:A.rowText,children:[i.jsx("span",{className:A.rowQuestion,children:"Ready"}),i.jsx("span",{className:A.rowLive,children:Ei.nodes[Ei.rootId].question})]})]})}),m&&T&&i.jsx("li",{"aria-current":"step",children:i.jsxs("div",{className:Vn(A.row,A.rowCurrent),children:[i.jsx("span",{className:A.rowNum,"aria-hidden":"true",children:td(R)}),i.jsxs("span",{className:A.rowText,children:[i.jsxs("span",{className:A.rowQuestion,children:["Now, check ",R]}),i.jsx("span",{className:A.rowLive,children:T.question})]})]})}),d&&i.jsx("li",{"aria-current":"step",children:i.jsxs("div",{className:Vn(A.row,A.rowResult),children:[i.jsx("span",{className:A.rowNum,"aria-hidden":"true",children:"="}),i.jsxs("span",{className:A.rowText,children:[i.jsxs("span",{className:A.rowQuestion,children:["Result, ",d.pattern]}),i.jsx("span",{className:A.rowLive,children:d.name})]})]})}),M&&i.jsx("li",{"aria-current":"step",children:i.jsxs("div",{className:Vn(A.row,A.rowFault),children:[i.jsx("span",{className:A.rowNum,"aria-hidden":"true",children:"!"}),i.jsxs("span",{className:A.rowText,children:[i.jsx("span",{className:A.rowQuestion,children:"Fault"}),i.jsx("span",{className:A.rowLive,children:"This path leads nowhere"})]})]})}),!d&&!M&&i.jsx("li",{className:A.nextWrap,"aria-hidden":"true",children:i.jsxs("div",{className:A.nextCheck,children:[i.jsx("span",{className:Vn(A.rowNum,A.rowNumDashed),children:td(R+1)}),i.jsx("span",{className:A.nextLabel,children:"Next check appears here"})]})})]})]})}const tp=`def backtrack(curr, OTHER_ARGUMENTS...):
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
`,xn=(o,m,f,d,T)=>({title:o,code:{python:m,javascript:f,java:d,cpp:T}}),HT={backtracking:xn("backtracking",tp,ap,ip,rp),"binary-search":xn("binary search",lp,sp,op,cp),"binary-search-greedy-maximum":xn("greedy (maximum)",up,dp,fp,hp),"binary-search-greedy-minimum":xn("greedy (minimum)",mp,gp,pp,bp),"binary-search-left-insertion":xn("duplicate elements, left-most insertion point",vp,yp,xp,_p),"binary-search-right-insertion":xn("duplicate elements, right-most insertion point",Sp,Tp,jp,wp),"bitmanipulation-check-power-of-two":xn("check if number is power of 2",Np,Ep,Op,Ap),"bitmanipulation-clear-kth-bit":xn("clear kth bit",kp,Mp,Cp,Rp),"bitmanipulation-count-set-bits":xn("count set bits",Lp,Dp,zp,Bp),"bitmanipulation-divide-power-of-two":xn("divide by 2^k",Up,Hp,qp,Gp),"bitmanipulation-get-rightmost-bit":xn("get rightmost bit",Yp,Ip,Vp,Kp),"bitmanipulation-multiply-power-of-two":xn("multiply by 2^k",Qp,Xp,Jp,Zp),"bitmanipulation-set-kth-bit":xn("set kth bit",Pp,Fp,Wp,$p),"bitmanipulation-swap-variables":xn("swap two variables",nb,eb,tb,ab),"bitmanipulation-test-kth-bit":xn("test kth-bit",ib,rb,lb,sb),"bitmanipulation-toggle-kth-bit":xn("toggle kth bit",ob,cb,ub,db),"dp-bottom-up":xn("DP bottom-up",fb,hb,mb,gb),"dp-kadane":xn("Kadane (max-sum subarray)",pb,bb,vb,yb),"dp-top-down":xn("DP top-down",xb,_b,Sb,Tb),"ds-hash-map":xn("hash map",jb,wb,Nb,Eb),"ds-trie":xn("trie",Ob,Ab,kb,Mb),"ds-union-find":xn("union find",Cb,Rb,Lb,Db),"ds-union-find-optimized":xn("union find optimized",zb,Bb,Ub,Hb),"graph-bellman-ford":xn("Bellman-Ford (shortest path)",qb,Gb,Yb,Ib),"graph-bfs":xn("BFS",Vb,Kb,Qb,Xb),"graph-dfs-iterative":xn("DFS (iterative)",Jb,Zb,Pb,Fb),"graph-dfs-recursive":xn("DFS (recursive)",Wb,$b,nv,ev),"graph-dijkstra":xn("Dijkstra (shortest path)",tv,av,iv,rv),"graph-kahn":xn("Kahn (topological sort)",lv,sv,ov,cv),"graph-kruskal":xn("Kruskal (mst)",uv,dv,fv,hv),"graph-prim":xn("Prim (mst)",mv,gv,pv,bv),"hashmap-find-number-of-subarrays":xn("find number of subarrays that fit an exact criteria",vv,yv,xv,_v),"hashmap-sliding-window":xn("sliding window",Sv,Tv,jv,wv),"heap-find-top-k-elements":xn("find top k elements",Nv,Ev,Ov,Av),"linkedlist-fast-and-slow-pointer":xn("fast and slow pointer",kv,Mv,Cv,Rv),"linkedlist-reverse":xn("reverse linked list",Lv,Dv,zv,Bv),"prefix-sum":xn("prefix sum",Uv,Hv,qv,Gv),"sliding-window":xn("sliding window",Yv,Iv,Vv,Kv),"stack-monotonic-decreasing":xn("monotonic decreasing stack",Qv,Xv,Jv,Zv),"stack-monotonic-increasing":xn("monotonic increasing stack",Pv,Fv,Wv,$v),"string-building":xn("efficient string building",n1,e1,t1,a1),"tree-bfs":xn("BFS",i1,r1,l1,s1),"tree-dfs-iterative":xn("DFS (iterative)",o1,c1,u1,d1),"tree-dfs-recursive":xn("DFS (recursive)",f1,h1,m1,g1),"two-pointers-one-input":xn("two pointers: one input, opposite ends",p1,b1,v1,y1),"two-pointers-two-inputs":xn("two pointers: two inputs, exhaust both",x1,_1,S1,T1)};function qT(o){const m=Ei.leaves[o];return m?m.templateIds.map(f=>HT[f]).filter(f=>!!f):[]}const GT={E:"Easy",M:"Medium",H:"Hard"},ea=([o,m,f,d,T,R])=>({n:o,lc:m,name:f,slug:d,difficulty:GT[T],ask:R}),_a=[{id:"arrays-hashing",name:"Arrays & Hashing",why:"Trade memory for lookups. The first move on most problems.",problems:[[1,217,"Contains Duplicate","contains-duplicate","E","Does any value appear at least twice in the array?"],[2,242,"Valid Anagram","valid-anagram","E","Are two strings made of exactly the same letters?"],[3,1,"Two Sum","two-sum","E","Find the two numbers in an array that add up to a target."],[4,49,"Group Anagrams","group-anagrams","M","Group the strings that are anagrams of each other."],[5,347,"Top K Frequent Elements","top-k-frequent-elements","M","Return the k values that appear most often."],[6,36,"Valid Sudoku","valid-sudoku","M","Is a partly filled 9×9 board free of repeats in every row, column and box?"],[7,238,"Product of Array Except Self","product-of-array-except-self","M","For each index, the product of every other element, without division."],[8,128,"Longest Consecutive Sequence","longest-consecutive-sequence","M","Length of the longest run of consecutive integers, in O(n)."]].map(o=>ea(o))},{id:"two-pointers",name:"Two Pointers",why:"Turn a nested loop into one pass from both ends.",problems:[[9,125,"Valid Palindrome","valid-palindrome","E","Is the string a palindrome, ignoring case and non-alphanumerics?"],[10,167,"Two Sum II - Input Array Is Sorted","two-sum-ii-input-array-is-sorted","M","Two Sum on a sorted array, using constant extra space."],[11,15,"3Sum","3sum","M","Find all unique triplets that sum to zero."],[12,11,"Container With Most Water","container-with-most-water","M","Pick two lines that, with the x-axis, hold the most water."]].map(o=>ea(o))},{id:"sliding-window",name:"Sliding Window",why:"Grow right, shrink left, keep the window valid.",problems:[[13,121,"Best Time to Buy and Sell Stock","best-time-to-buy-and-sell-stock","E","Maximum profit from one buy followed by one sell."],[14,3,"Longest Substring Without Repeating Characters","longest-substring-without-repeating-characters","M","Length of the longest substring with no repeated characters."],[15,424,"Longest Repeating Character Replacement","longest-repeating-character-replacement","M","Longest substring that can become one repeated letter with at most k changes."]].map(o=>ea(o))},{id:"stack",name:"Stack",why:"The most recent unresolved thing is the next one to resolve.",problems:[[16,20,"Valid Parentheses","valid-parentheses","E","Are all brackets closed in the right order?"],[17,155,"Min Stack","min-stack","M","Design a stack that returns its minimum in constant time."],[18,739,"Daily Temperatures","daily-temperatures","M","For each day, how many days until a warmer one?"]].map(o=>ea(o))},{id:"binary-search",name:"Binary Search",why:"Discard half the space per step, even when the array is rotated.",problems:[[19,704,"Binary Search","binary-search","E","Find a target in a sorted array in O(log n)."],[20,153,"Find Minimum in Rotated Sorted Array","find-minimum-in-rotated-sorted-array","M","Find the smallest value in a sorted array rotated at an unknown point."],[21,33,"Search in Rotated Sorted Array","search-in-rotated-sorted-array","M","Find a target in a rotated sorted array in O(log n)."]].map(o=>ea(o))},{id:"linked-list",name:"Linked List",why:"Pointer surgery: dummy heads, fast and slow, reversal.",problems:[[22,206,"Reverse Linked List","reverse-linked-list","E","Reverse a singly linked list."],[23,21,"Merge Two Sorted Lists","merge-two-sorted-lists","E","Merge two sorted lists into one sorted list."],[24,143,"Reorder List","reorder-list","M","Reorder L0 → L1 → … → Ln into L0 → Ln → L1 → Ln-1 → …, in place."],[25,19,"Remove Nth Node From End of List","remove-nth-node-from-end-of-list","M","Remove the nth node from the end of a list in one pass."],[26,141,"Linked List Cycle","linked-list-cycle","E","Does a linked list contain a cycle?"],[27,146,"LRU Cache","lru-cache","M","Design a cache that evicts the least recently used key, with O(1) operations."]].map(o=>ea(o))},{id:"tree-recursion",name:"Tree Recursion",why:"Solve the subtree, then combine at the node.",problems:[[28,226,"Invert Binary Tree","invert-binary-tree","E","Mirror a binary tree left to right."],[29,104,"Maximum Depth of Binary Tree","maximum-depth-of-binary-tree","E","How many levels deep is a binary tree?"],[30,543,"Diameter of Binary Tree","diameter-of-binary-tree","E","Length of the longest path between any two nodes in a tree."],[31,110,"Balanced Binary Tree","balanced-binary-tree","E","Do all nodes have left and right subtree heights that differ by at most one?"],[32,100,"Same Tree","same-tree","E","Are two binary trees identical in shape and values?"],[33,572,"Subtree of Another Tree","subtree-of-another-tree","E","Does one tree appear as a subtree of another?"]].map(o=>ea(o))},{id:"tree-traversal-bst",name:"Traversal & BST",why:"Pick the traversal that carries the state you need.",problems:[[34,235,"Lowest Common Ancestor of a Binary Search Tree","lowest-common-ancestor-of-a-binary-search-tree","M","Find the lowest common ancestor of two nodes in a binary search tree."],[35,102,"Binary Tree Level Order Traversal","binary-tree-level-order-traversal","M","Return the node values level by level."],[36,199,"Binary Tree Right Side View","binary-tree-right-side-view","M","Which nodes are visible when looking at a tree from the right?"],[37,1448,"Count Good Nodes in Binary Tree","count-good-nodes-in-binary-tree","M","Count the nodes that are no smaller than any ancestor on their path from the root."],[38,98,"Validate Binary Search Tree","validate-binary-search-tree","M","Is a binary tree a valid binary search tree?"],[39,230,"Kth Smallest Element in a BST","kth-smallest-element-in-a-bst","M","Return the kth smallest value in a binary search tree."]].map(o=>ea(o))},{id:"heap",name:"Heap",why:"Keep only the k best, or always the next best.",problems:[[40,703,"Kth Largest Element in a Stream","kth-largest-element-in-a-stream","E","Return the kth largest value each time a new number arrives."],[41,1046,"Last Stone Weight","last-stone-weight","E","Repeatedly smash the two heaviest stones together; what weight is left?"],[42,215,"Kth Largest Element in an Array","kth-largest-element-in-an-array","M","Return the kth largest element of an unsorted array."]].map(o=>ea(o))},{id:"graphs",name:"Graphs",why:"Flood fill the grid, clone with a map, order with indegrees.",problems:[[43,200,"Number of Islands","number-of-islands","M","Count the islands in a grid of land and water."],[44,695,"Max Area of Island","max-area-of-island","M","Find the area of the largest island in a grid."],[45,133,"Clone Graph","clone-graph","M","Make a deep copy of a connected undirected graph."],[46,417,"Pacific Atlantic Water Flow","pacific-atlantic-water-flow","M","Which cells can send water to both the Pacific and the Atlantic?"],[47,130,"Surrounded Regions","surrounded-regions","M","Capture every region of O's completely surrounded by X's."],[48,207,"Course Schedule","course-schedule","M","Can all courses be finished, given their prerequisites?"],[49,210,"Course Schedule II","course-schedule-ii","M","Return a valid order to take all courses, if one exists."]].map(o=>ea(o))}],El=_a.flatMap(o=>o.problems),YT=o=>`https://leetcode.com/problems/${o}/`,so={total:El.length,patterns:_a.length,easy:El.filter(o=>o.difficulty==="Easy").length,medium:El.filter(o=>o.difficulty==="Medium").length,hard:El.filter(o=>o.difficulty==="Hard").length},IT="_container_g6uc3_1",VT="_buttonContainer_g6uc3_15",KT="_tabButtonContainer_g6uc3_24",QT="_tabButton_g6uc3_24",oo={container:IT,buttonContainer:VT,tabButtonContainer:KT,tabButton:QT},XT="_code_10mye_1",JT="_line_10mye_14",Ug={code:XT,line:JT};var ad,Hg;function ZT(){if(Hg)return ad;Hg=1;function o(g){return g instanceof Map?g.clear=g.delete=g.set=function(){throw new Error("map is read-only")}:g instanceof Set&&(g.add=g.clear=g.delete=function(){throw new Error("set is read-only")}),Object.freeze(g),Object.getOwnPropertyNames(g).forEach(L=>{const X=g[L],vn=typeof X;(vn==="object"||vn==="function")&&!Object.isFrozen(X)&&o(X)}),g}class m{constructor(L){L.data===void 0&&(L.data={}),this.data=L.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function f(g){return g.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function d(g,...L){const X=Object.create(null);for(const vn in g)X[vn]=g[vn];return L.forEach(function(vn){for(const le in vn)X[le]=vn[le]}),X}const T="</span>",R=g=>!!g.scope,M=(g,{prefix:L})=>{if(g.startsWith("language:"))return g.replace("language:","language-");if(g.includes(".")){const X=g.split(".");return[`${L}${X.shift()}`,...X.map((vn,le)=>`${vn}${"_".repeat(le+1)}`)].join(" ")}return`${L}${g}`};class D{constructor(L,X){this.buffer="",this.classPrefix=X.classPrefix,L.walk(this)}addText(L){this.buffer+=f(L)}openNode(L){if(!R(L))return;const X=M(L.scope,{prefix:this.classPrefix});this.span(X)}closeNode(L){R(L)&&(this.buffer+=T)}value(){return this.buffer}span(L){this.buffer+=`<span class="${L}">`}}const q=(g={})=>{const L={children:[]};return Object.assign(L,g),L};class G{constructor(){this.rootNode=q(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(L){this.top.children.push(L)}openNode(L){const X=q({scope:L});this.add(X),this.stack.push(X)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(L){return this.constructor._walk(L,this.rootNode)}static _walk(L,X){return typeof X=="string"?L.addText(X):X.children&&(L.openNode(X),X.children.forEach(vn=>this._walk(L,vn)),L.closeNode(X)),L}static _collapse(L){typeof L!="string"&&L.children&&(L.children.every(X=>typeof X=="string")?L.children=[L.children.join("")]:L.children.forEach(X=>{G._collapse(X)}))}}class B extends G{constructor(L){super(),this.options=L}addText(L){L!==""&&this.add(L)}startScope(L){this.openNode(L)}endScope(){this.closeNode()}__addSublanguage(L,X){const vn=L.root;X&&(vn.scope=`language:${X}`),this.add(vn)}toHTML(){return new D(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function v(g){return g?typeof g=="string"?g:g.source:null}function E(g){return Z("(?=",g,")")}function I(g){return Z("(?:",g,")*")}function Y(g){return Z("(?:",g,")?")}function Z(...g){return g.map(X=>v(X)).join("")}function en(g){const L=g[g.length-1];return typeof L=="object"&&L.constructor===Object?(g.splice(g.length-1,1),L):{}}function _n(...g){return"("+(en(g).capture?"":"?:")+g.map(vn=>v(vn)).join("|")+")"}function gn(g){return new RegExp(g.toString()+"|").exec("").length-1}function mn(g,L){const X=g&&g.exec(L);return X&&X.index===0}const On=new RegExp(_n(/\[(?:[^\\\]]|\\.)*\]/,/\(\?<(?![=!])[^>]+>/,/\(\?'[^']+'/,/\(\??/,/\\([1-9][0-9]*)/,/\\./));function Kn(g,{joinWith:L}){let X=0;return g.map(vn=>{X+=1;const le=X;let qn=v(vn),$="";for(;qn.length>0;){const K=On.exec(qn);if(!K){$+=qn;break}$+=qn.substring(0,K.index),qn=qn.substring(K.index+K[0].length),K[0][0]==="\\"&&K[1]?$+="\\"+String(Number(K[1])+le):($+=K[0],(K[0]==="("||/^\(\?[<']/.test(K[0]))&&X++)}return $}).map(vn=>`(${vn})`).join(L)}const Hn=/\b\B/,on="[a-zA-Z]\\w*",bn="[a-zA-Z_]\\w*",An="\\b\\d+(\\.\\d+)?",Tn="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Wn="\\b(0b[01]+)",de="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Qe=(g={})=>{const L=/^#![ ]*\//;return g.binary&&(g.begin=Z(L,/.*\b/,g.binary,/\b.*/)),d({scope:"meta",begin:L,end:/$/,relevance:0,"on:begin":(X,vn)=>{X.index!==0&&vn.ignoreMatch()}},g)},Ae={begin:"\\\\[\\s\\S]",relevance:0},fe={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Ae]},V={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Ae]},un={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},F=function(g,L,X={}){const vn=d({scope:"comment",begin:g,end:L,contains:[]},X);vn.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const le=_n("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return vn.contains.push({begin:Z(/[ ]+/,"(",le,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),vn},Cn=F("//","$"),jn=F("/\\*","\\*/"),ue=F("#","$"),ve={scope:"number",begin:An,relevance:0},dt={scope:"number",begin:Tn,relevance:0},y={scope:"number",begin:Wn,relevance:0},z={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[Ae,{begin:/\[/,end:/\]/,relevance:0,contains:[Ae]}]},sn={scope:"title",begin:on,relevance:0},W={scope:"title",begin:bn,relevance:0},dn={begin:"\\.\\s*"+bn,relevance:0};var kn=Object.freeze({__proto__:null,APOS_STRING_MODE:fe,BACKSLASH_ESCAPE:Ae,BINARY_NUMBER_MODE:y,BINARY_NUMBER_RE:Wn,COMMENT:F,C_BLOCK_COMMENT_MODE:jn,C_LINE_COMMENT_MODE:Cn,C_NUMBER_MODE:dt,C_NUMBER_RE:Tn,END_SAME_AS_BEGIN:function(g){return Object.assign(g,{"on:begin":(L,X)=>{X.data._beginMatch=L[1]},"on:end":(L,X)=>{X.data._beginMatch!==L[1]&&X.ignoreMatch()}})},HASH_COMMENT_MODE:ue,IDENT_RE:on,MATCH_NOTHING_RE:Hn,METHOD_GUARD:dn,NUMBER_MODE:ve,NUMBER_RE:An,PHRASAL_WORDS_MODE:un,QUOTE_STRING_MODE:V,REGEXP_MODE:z,RE_STARTERS_RE:de,SHEBANG:Qe,TITLE_MODE:sn,UNDERSCORE_IDENT_RE:bn,UNDERSCORE_TITLE_MODE:W});function tn(g,L){g.input[g.index-1]==="."&&L.ignoreMatch()}function fn(g,L){g.className!==void 0&&(g.scope=g.className,delete g.className)}function et(g,L){L&&g.beginKeywords&&(g.begin="\\b("+g.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",g.__beforeBegin=tn,g.keywords=g.keywords||g.beginKeywords,delete g.beginKeywords,g.relevance===void 0&&(g.relevance=0))}function ti(g,L){Array.isArray(g.illegal)&&(g.illegal=_n(...g.illegal))}function Sa(g,L){if(g.match){if(g.begin||g.end)throw new Error("begin & end are not supported with match");g.begin=g.match,delete g.match}}function xt(g,L){g.relevance===void 0&&(g.relevance=1)}const ke=(g,L)=>{if(!g.beforeMatch)return;if(g.starts)throw new Error("beforeMatch cannot be used with starts");const X=Object.assign({},g);Object.keys(g).forEach(vn=>{delete g[vn]}),g.keywords=X.keywords,g.begin=Z(X.beforeMatch,E(X.begin)),g.starts={relevance:0,contains:[Object.assign(X,{endsParent:!0})]},g.relevance=0,delete X.beforeMatch},ae=["of","and","for","in","not","or","if","then","parent","list","value"],_t="keyword";function Ta(g,L,X=_t){const vn=Object.create(null);return typeof g=="string"?le(X,g.split(" ")):Array.isArray(g)?le(X,g):Object.keys(g).forEach(function(qn){Object.assign(vn,Ta(g[qn],L,qn))}),vn;function le(qn,$){L&&($=$.map(K=>K.toLowerCase())),$.forEach(function(K){const pn=K.split("|");vn[pn[0]]=[qn,Gt(pn[0],pn[1])]})}}function Gt(g,L){return L?Number(L):Oi(g)?0:1}function Oi(g){return ae.includes(g.toLowerCase())}const ai={},tt=g=>{console.error(g)},Ai=(g,...L)=>{console.log(`WARN: ${g}`,...L)},Ct=(g,L)=>{ai[`${g}/${L}`]||(console.log(`Deprecated as of ${g}. ${L}`),ai[`${g}/${L}`]=!0)},ja=new Error;function jr(g,L,{key:X}){let vn=0;const le=g[X],qn={},$={};for(let K=1;K<=L.length;K++)$[K+vn]=le[K],qn[K+vn]=!0,vn+=gn(L[K-1]);g[X]=$,g[X]._emit=qn,g[X]._multi=!0}function Yt(g){if(Array.isArray(g.begin)){if(g.skip||g.excludeBegin||g.returnBegin)throw tt("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),ja;if(typeof g.beginScope!="object"||g.beginScope===null)throw tt("beginScope must be object"),ja;jr(g,g.begin,{key:"beginScope"}),g.begin=Kn(g.begin,{joinWith:""})}}function wr(g){if(Array.isArray(g.end)){if(g.skip||g.excludeEnd||g.returnEnd)throw tt("skip, excludeEnd, returnEnd not compatible with endScope: {}"),ja;if(typeof g.endScope!="object"||g.endScope===null)throw tt("endScope must be object"),ja;jr(g,g.end,{key:"endScope"}),g.end=Kn(g.end,{joinWith:""})}}function Nr(g){g.scope&&typeof g.scope=="object"&&g.scope!==null&&(g.beginScope=g.scope,delete g.scope)}function bo(g){Nr(g),typeof g.beginScope=="string"&&(g.beginScope={_wrap:g.beginScope}),typeof g.endScope=="string"&&(g.endScope={_wrap:g.endScope}),Yt(g),wr(g)}function Al(g){function L($,K){return new RegExp(v($),"m"+(g.case_insensitive?"i":"")+(g.unicodeRegex?"u":"")+(K?"g":""))}class X{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(K,pn){pn.position=this.position++,this.matchIndexes[this.matchAt]=pn,this.regexes.push([pn,K]),this.matchAt+=gn(K)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const K=this.regexes.map(pn=>pn[1]);this.matcherRe=L(Kn(K,{joinWith:"|"}),!0),this.lastIndex=0}exec(K){this.matcherRe.lastIndex=this.lastIndex;const pn=this.matcherRe.exec(K);if(!pn)return null;const Se=pn.findIndex((It,wa)=>wa>0&&It!==void 0),ge=this.matchIndexes[Se];return pn.splice(0,Se),Object.assign(pn,ge)}}class vn{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(K){if(this.multiRegexes[K])return this.multiRegexes[K];const pn=new X;return this.rules.slice(K).forEach(([Se,ge])=>pn.addRule(Se,ge)),pn.compile(),this.multiRegexes[K]=pn,pn}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(K,pn){this.rules.push([K,pn]),pn.type==="begin"&&this.count++}exec(K){const pn=this.getMatcher(this.regexIndex);pn.lastIndex=this.lastIndex;let Se=pn.exec(K);if(this.resumingScanAtSamePosition()&&!(Se&&Se.index===this.lastIndex)){const ge=this.getMatcher(0);ge.lastIndex=this.lastIndex+1,Se=ge.exec(K)}return Se&&(this.regexIndex+=Se.position+1,this.regexIndex===this.count&&this.considerAll()),Se}}function le($){const K=new vn;return $.contains.forEach(pn=>K.addRule(pn.begin,{rule:pn,type:"begin"})),$.terminatorEnd&&K.addRule($.terminatorEnd,{type:"end"}),$.illegal&&K.addRule($.illegal,{type:"illegal"}),K}function qn($,K){const pn=$;if($.isCompiled)return pn;[fn,Sa,bo,ke].forEach(ge=>ge($,K)),g.compilerExtensions.forEach(ge=>ge($,K)),$.__beforeBegin=null,[et,ti,xt].forEach(ge=>ge($,K)),$.isCompiled=!0;let Se=null;return typeof $.keywords=="object"&&$.keywords.$pattern&&($.keywords=Object.assign({},$.keywords),Se=$.keywords.$pattern,delete $.keywords.$pattern),Se=Se||/\w+/,$.keywords&&($.keywords=Ta($.keywords,g.case_insensitive)),pn.keywordPatternRe=L(Se,!0),K&&($.begin||($.begin=/\B|\b/),pn.beginRe=L(pn.begin),!$.end&&!$.endsWithParent&&($.end=/\B|\b/),$.end&&(pn.endRe=L(pn.end)),pn.terminatorEnd=v(pn.end)||"",$.endsWithParent&&K.terminatorEnd&&(pn.terminatorEnd+=($.end?"|":"")+K.terminatorEnd)),$.illegal&&(pn.illegalRe=L($.illegal)),$.contains||($.contains=[]),$.contains=[].concat(...$.contains.map(function(ge){return Er(ge==="self"?$:ge)})),$.contains.forEach(function(ge){qn(ge,pn)}),$.starts&&qn($.starts,K),pn.matcher=le(pn),pn}if(g.compilerExtensions||(g.compilerExtensions=[]),g.contains&&g.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return g.classNameAliases=d(g.classNameAliases||{}),qn(g)}function ki(g){return g?g.endsWithParent||ki(g.starts):!1}function Er(g){return g.variants&&!g.cachedVariants&&(g.cachedVariants=g.variants.map(function(L){return d(g,{variants:null},L)})),g.cachedVariants?g.cachedVariants:ki(g)?d(g,{starts:g.starts?d(g.starts):null}):Object.isFrozen(g)?d(g):g}var Or="11.12.0";class vo extends Error{constructor(L,X){super(L),this.name="HTMLInjectionError",this.html=X}}const Ar=f,Xe=d,kl=Symbol("nomatch"),Ml=7,kr=function(g){const L=Object.create(null),X=Object.create(null),vn=[];let le=!0;const qn="Could not find the language '{}', did you forget to load/include a language module?",$={disableAutodetect:!0,name:"Plain text",contains:[]};let K={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:B};function pn(U){return K.noHighlightRe.test(U)}function Se(U){let rn=U.className+" ";rn+=U.parentNode?U.parentNode.className:"";const Rn=K.languageDetectRe.exec(rn);if(Rn){const ie=Lt(Rn[1]);return ie||(Ai(qn.replace("{}",Rn[1])),Ai("Falling back to no-highlight mode for this block.",U)),ie?Rn[1]:"no-highlight"}return rn.split(/\s+/).find(ie=>pn(ie)||Lt(ie))}function ge(U,rn,Rn){let ie="",ye="";typeof rn=="object"?(ie=U,Rn=rn.ignoreIllegals,ye=rn.language):(Ct("10.7.0","highlight(lang, code, ...args) has been deprecated."),Ct("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),ye=U,ie=rn),Rn===void 0&&(Rn=!0);const it={code:ie,language:ye};at("before:highlight",it);const rt=it.result?it.result:It(it.language,it.code,Rn);return rt.code=it.code,at("after:highlight",rt),rt}function It(U,rn,Rn,ie){const ye=Object.create(null);function it(J,ln){return J.keywords[ln]}function rt(){if(!Sn.keywords){je.addText(Qn);return}let J=0;Sn.keywordPatternRe.lastIndex=0;let ln=Sn.keywordPatternRe.exec(Qn),wn="";for(;ln;){wn+=Qn.substring(J,ln.index);const Xn=Tt.case_insensitive?ln[0].toLowerCase():ln[0],$n=it(Sn,Xn);if($n){const[ft,ql]=$n;if(je.addText(wn),wn="",ye[Xn]=(ye[Xn]||0)+1,ye[Xn]<=Ml&&(sa+=ql),ft.startsWith("_"))wn+=ln[0];else{const Lr=Tt.classNameAliases[ft]||ft;Le(ln[0],Lr)}}else wn+=ln[0];J=Sn.keywordPatternRe.lastIndex,ln=Sn.keywordPatternRe.exec(Qn)}wn+=Qn.substring(J),je.addText(wn)}function aa(){if(Qn==="")return;let J=null;if(typeof Sn.subLanguage=="string"){if(!L[Sn.subLanguage]){je.addText(Qn);return}J=It(Sn.subLanguage,Qn,!0,Gn[Sn.subLanguage]),Gn[Sn.subLanguage]=J._top}else J=Na(Qn,Sn.subLanguage.length?Sn.subLanguage:null);Sn.relevance>0&&(sa+=J.relevance),je.__addSublanguage(J._emitter,J.language)}function Re(){Sn.subLanguage!=null?aa():rt(),Qn=""}function Le(J,ln){J!==""&&(je.startScope(ln),je.addText(J),je.endScope())}function ia(J,ln){let wn=1;const Xn=ln.length-1;for(;wn<=Xn;){if(!J._emit[wn]){wn++;continue}const $n=Tt.classNameAliases[J[wn]]||J[wn],ft=ln[wn];$n?Le(ft,$n):(Qn=ft,rt(),Qn=""),wn++}}function Aa(J,ln){return J.scope&&typeof J.scope=="string"&&je.openNode(Tt.classNameAliases[J.scope]||J.scope),J.beginScope&&(J.beginScope._wrap?(Le(Qn,Tt.classNameAliases[J.beginScope._wrap]||J.beginScope._wrap),Qn=""):J.beginScope._multi&&(ia(J.beginScope,ln),Qn="")),Sn=Object.create(J,{parent:{value:Sn}}),Sn}function ra(J,ln,wn){let Xn=mn(J.endRe,wn);if(Xn){if(J["on:end"]){const $n=new m(J);J["on:end"](ln,$n),$n.isMatchIgnored&&(Xn=!1)}if(Xn){for(;J.endsParent&&J.parent;)J=J.parent;return J}}if(J.endsWithParent)return ra(J.parent,ln,wn)}function Te(J){return Sn.matcher.regexIndex===0?(Qn+=J[0],1):(Ri=!0,0)}function zl(J){const ln=J[0],wn=J.rule,Xn=new m(wn),$n=[wn.__beforeBegin,wn["on:begin"]];for(const ft of $n)if(ft&&(ft(J,Xn),Xn.isMatchIgnored))return Te(ln);return wn.skip?Qn+=ln:(wn.excludeBegin&&(Qn+=ln),Re(),!wn.returnBegin&&!wn.excludeBegin&&(Qn=ln)),Aa(wn,J),wn.returnBegin?0:ln.length}function Bl(J){const ln=J[0],wn=rn.substring(J.index),Xn=ra(Sn,J,wn);if(!Xn)return kl;const $n=Sn;Sn.endScope&&Sn.endScope._wrap?(Re(),Le(ln,Sn.endScope._wrap)):Sn.endScope&&Sn.endScope._multi?(Re(),ia(Sn.endScope,J)):$n.skip?Qn+=ln:($n.returnEnd||$n.excludeEnd||(Qn+=ln),Re(),$n.excludeEnd&&(Qn=ln));do Sn.scope&&je.closeNode(),!Sn.skip&&!Sn.subLanguage&&(sa+=Sn.relevance),Sn=Sn.parent;while(Sn!==Xn.parent);return Xn.starts&&Aa(Xn.starts,J),$n.returnEnd?0:ln.length}function Ul(){const J=[];for(let ln=Sn;ln!==Tt;ln=ln.parent)ln.scope&&J.unshift(ln.scope);J.forEach(ln=>je.openNode(ln))}let St={};function la(J,ln){const wn=ln&&ln[0];if(Qn+=J,wn==null)return Re(),0;if(St.type==="begin"&&ln.type==="end"&&St.index===ln.index&&wn===""){if(Qn+=rn.slice(ln.index,ln.index+1),!le){const Xn=new Error(`0 width match regex (${U})`);throw Xn.languageName=U,Xn.badRule=St.rule,Xn}return 1}if(St=ln,ln.type==="begin")return zl(ln);if(ln.type==="illegal"&&!Rn){const Xn=new Error('Illegal lexeme "'+wn+'" for mode "'+(Sn.scope||"<unnamed>")+'"');throw Xn.mode=Sn,Xn}else if(ln.type==="end"){const Xn=Bl(ln);if(Xn!==kl)return Xn}if(ln.type==="illegal"&&wn==="")return ln.index===rn.length||(Qn+=`
`),1;if(He>1e5&&He>ln.index*3)throw new Error("potential infinite loop, way more iterations than matches");return Qn+=wn,wn.length}const Tt=Lt(U);if(!Tt)throw tt(qn.replace("{}",U)),new Error('Unknown language: "'+U+'"');const Hl=Al(Tt);let Ci="",Sn=ie||Hl;const Gn={},je=new K.__emitter(K);Ul();let Qn="",sa=0,Ue=0,He=0,Ri=!1;try{if(Tt.__emitTokens)Tt.__emitTokens(rn,je);else{for(Sn.matcher.considerAll();;){He++,Ri?Ri=!1:Sn.matcher.considerAll(),Sn.matcher.lastIndex=Ue;const J=Sn.matcher.exec(rn);if(!J)break;const ln=rn.substring(Ue,J.index),wn=la(ln,J);Ue=J.index+wn}la(rn.substring(Ue))}return je.finalize(),Ci=je.toHTML(),{language:U,value:Ci,relevance:sa,illegal:!1,_emitter:je,_top:Sn}}catch(J){if(J.message&&J.message.includes("Illegal"))return{language:U,value:Ar(rn),illegal:!0,relevance:0,_illegalBy:{message:J.message,index:Ue,context:rn.slice(Ue-100,Ue+100),mode:J.mode,resultSoFar:Ci},_emitter:je};if(le)return{language:U,value:Ar(rn),illegal:!1,relevance:0,errorRaised:J,_emitter:je,_top:Sn};throw J}}function wa(U){const rn={value:Ar(U),illegal:!1,relevance:0,_top:$,_emitter:new K.__emitter(K)};return rn._emitter.addText(U),rn}function Na(U,rn){rn=rn||K.languages||Object.keys(L);const Rn=wa(U),ie=rn.filter(Lt).filter(Mi).map(Re=>It(Re,U,!1));ie.unshift(Rn);const ye=ie.sort((Re,Le)=>{if(Re.relevance!==Le.relevance)return Le.relevance-Re.relevance;if(Re.language&&Le.language){if(Lt(Re.language).supersetOf===Le.language)return 1;if(Lt(Le.language).supersetOf===Re.language)return-1}return 0}),[it,rt]=ye,aa=it;return aa.secondBest=rt,aa}function ta(U,rn,Rn){const ie=rn&&X[rn]||Rn;U.classList.add("hljs"),U.classList.add(`language-${ie}`)}function Ea(U){let rn=null;const Rn=Se(U);if(pn(Rn))return;if(at("before:highlightElement",{el:U,language:Rn}),U.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",U);return}if(U.children.length>0&&(K.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(U)),K.throwUnescapedHTML))throw new vo("One of your code blocks includes unescaped HTML.",U.innerHTML);rn=U;const ie=rn.textContent,ye=Rn?ge(ie,{language:Rn,ignoreIllegals:!0}):Na(ie);U.innerHTML=ye.value,U.dataset.highlighted="yes",ta(U,Rn,ye.language),U.result={language:ye.language,re:ye.relevance,relevance:ye.relevance},ye.secondBest&&(U.secondBest={language:ye.secondBest.language,relevance:ye.secondBest.relevance}),at("after:highlightElement",{el:U,result:ye,text:ie})}function ii(U){K=Xe(K,U)}const Cl=()=>{Oa(),Ct("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function yo(){Oa(),Ct("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Mr=!1;function Oa(){function U(){Oa()}if(document.readyState==="loading"){Mr||window.addEventListener("DOMContentLoaded",U,!1),Mr=!0;return}document.querySelectorAll(K.cssSelector).forEach(Ea)}function ri(U,rn){let Rn=null;try{Rn=rn(g)}catch(ie){if(tt("Language definition for '{}' could not be registered.".replace("{}",U)),le)tt(ie);else throw ie;Rn=$}Rn.name||(Rn.name=U),L[U]=Rn,Rn.rawDefinition=rn.bind(null,g),Rn.aliases&&Cr(Rn.aliases,{languageName:U})}function xo(U){delete L[U];for(const rn of Object.keys(X))X[rn]===U&&delete X[rn]}function Rl(){return Object.keys(L)}function Lt(U){return U=(U||"").toLowerCase(),L[U]||L[X[U]]}function Cr(U,{languageName:rn}){typeof U=="string"&&(U=[U]),U.forEach(Rn=>{X[Rn.toLowerCase()]=rn})}function Mi(U){const rn=Lt(U);return rn&&!rn.disableAutodetect}function Rr(U){U["before:highlightBlock"]&&!U["before:highlightElement"]&&(U["before:highlightElement"]=rn=>{U["before:highlightBlock"](Object.assign({block:rn.el},rn))}),U["after:highlightBlock"]&&!U["after:highlightElement"]&&(U["after:highlightElement"]=rn=>{U["after:highlightBlock"](Object.assign({block:rn.el},rn))})}function Ll(U){Rr(U),vn.push(U)}function Dl(U){const rn=vn.indexOf(U);rn!==-1&&vn.splice(rn,1)}function at(U,rn){const Rn=U;vn.forEach(function(ie){ie[Rn]&&ie[Rn](rn)})}function Me(U){return Ct("10.7.0","highlightBlock will be removed entirely in v12.0"),Ct("10.7.0","Please use highlightElement now."),Ea(U)}Object.assign(g,{highlight:ge,highlightAuto:Na,highlightAll:Oa,highlightElement:Ea,highlightBlock:Me,configure:ii,initHighlighting:Cl,initHighlightingOnLoad:yo,registerLanguage:ri,unregisterLanguage:xo,listLanguages:Rl,getLanguage:Lt,registerAliases:Cr,autoDetection:Mi,inherit:Xe,addPlugin:Ll,removePlugin:Dl}),g.debugMode=function(){le=!1},g.safeMode=function(){le=!0},g.versionString=Or,g.regex={concat:Z,lookahead:E,either:_n,optional:Y,anyNumberOfTimes:I};for(const U in kn)typeof kn[U]=="object"&&o(kn[U]);return Object.assign(g,kn),g},Rt=kr({});return Rt.newInstance=()=>kr({}),ad=Rt,Rt.HighlightJS=Rt,Rt.default=Rt,ad}var PT=ZT();const Ol=Tr(PT),qg="[A-Za-z$_][0-9A-Za-z$_]*",FT=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],WT=["true","false","null","undefined","NaN","Infinity"],j1=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],w1=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],N1=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],$T=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","self","global"],nj=[].concat(N1,j1,w1);function ej(o){const m=o.regex,f=(F,{after:Cn})=>{const jn="</"+F[0].slice(1);return F.input.indexOf(jn,Cn)!==-1},d=qg,T={begin:"<>",end:"</>"},R=/<[A-Za-z0-9\\._:-]+\s*\/>/,M={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(F,Cn)=>{const jn=F[0].length+F.index,ue=F.input[jn];if(ue==="<"||ue===","){Cn.ignoreMatch();return}ue===">"&&(f(F,{after:jn})||Cn.ignoreMatch());let ve;const dt=F.input.substring(jn);if(ve=dt.match(/^\s*=/)){Cn.ignoreMatch();return}if((ve=dt.match(/^\s+extends\s+/))&&ve.index===0){Cn.ignoreMatch();return}}},D={$pattern:qg,keyword:FT,literal:WT,built_in:nj,"variable.language":$T},q="[0-9](_?[0-9])*",G=`\\.(${q})`,B="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",v={className:"number",variants:[{begin:`(\\b(${B})((${G})|\\.)?|(${G}))[eE][+-]?(${q})\\b`},{begin:`\\b(${B})\\b((${G})\\b|\\.)?|(${G})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},E={className:"subst",begin:"\\$\\{",end:"\\}",keywords:D,contains:[]},I={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,E],subLanguage:"xml"}},Y={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,E],subLanguage:"css"}},Z={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,E],subLanguage:"graphql"}},en={className:"string",begin:"`",end:"`",contains:[o.BACKSLASH_ESCAPE,E]},gn={className:"comment",variants:[o.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:d+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),o.C_BLOCK_COMMENT_MODE,o.C_LINE_COMMENT_MODE]},mn=[o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,I,Y,Z,en,{match:/\$\d+/},v];E.contains=mn.concat({begin:/\{/,end:/\}/,keywords:D,contains:["self"].concat(mn)});const On=[].concat(gn,E.contains),Kn=On.concat([{begin:/(\s*)\(/,end:/\)/,keywords:D,contains:["self"].concat(On)}]),Hn={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:D,contains:Kn},on={variants:[{match:[/class/,/\s+/,d,/\s+/,/extends/,/\s+/,m.concat(d,"(",m.concat(/\./,d),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,d],scope:{1:"keyword",3:"title.class"}}]},bn={relevance:0,match:m.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...j1,...w1]}},An={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},Tn={variants:[{match:[/function/,/\s+/,d,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[Hn],illegal:/%/},Wn={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function de(F){return m.concat("(?!",F.join("|"),")")}const Qe={match:m.concat(/\b/,de([...N1,"super","import","await"].map(F=>`${F}\\s*\\(`)),d,m.lookahead(/\s*\(/)),className:"title.function",relevance:0},Ae={begin:m.concat(/\./,m.lookahead(m.concat(d,/(?![0-9A-Za-z$_(])/))),end:d,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},fe={match:[/get|set/,/\s+/,d,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},Hn]},V="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+o.UNDERSCORE_IDENT_RE+")\\s*=>",un={match:[/const|var|let/,/\s+/,d,/\s*/,/=\s*/,/(async\s*)?/,m.lookahead(V)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[Hn]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:D,exports:{PARAMS_CONTAINS:Kn,CLASS_REFERENCE:bn},illegal:/#(?![$_A-Za-z])/,contains:[o.SHEBANG({label:"shebang",binary:"node",relevance:5}),An,o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,I,Y,Z,en,gn,{match:/\$\d+/},v,bn,{scope:"attr",match:d+m.lookahead(":"),relevance:0},un,{begin:"("+o.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[gn,o.REGEXP_MODE,{className:"function",begin:V,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:o.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:D,contains:Kn}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:T.begin,end:T.end},{match:R},{begin:M.begin,"on:begin":M.isTrulyOpeningTag,end:M.end}],subLanguage:"xml",contains:[{begin:M.begin,end:M.end,skip:!0,contains:["self"]}]}]},Tn,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+o.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[Hn,o.inherit(o.TITLE_MODE,{begin:d,className:"title.function"})]},{match:/\.\.\./,relevance:0},Ae,{match:"\\$"+d,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[Hn]},Qe,Wn,on,fe,{match:/\$[(.]/}]}}var xr="[0-9](_*[0-9])*",co=`\\.(${xr})`,uo="[0-9a-fA-F](_*[0-9a-fA-F])*",Gg={className:"number",variants:[{begin:`(\\b(${xr})((${co})|\\.)?|(${co}))[eE][+-]?(${xr})[fFdD]?\\b`},{begin:`\\b(${xr})((${co})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${co})[fFdD]?\\b`},{begin:`\\b(${xr})[fFdD]\\b`},{begin:`\\b0[xX]((${uo})\\.?|(${uo})?\\.(${uo}))[pP][+-]?(${xr})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${uo})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};function E1(o,m,f){return f===-1?"":o.replace(m,d=>E1(o,m,f-1))}function tj(o){const m=o.regex,f="[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",d="(?:(?:\\s*\\[\\s*])+)?",T=f+"<@@@>"+d,M="(?:"+("\\?(?:\\s+(?:extends|super)\\s+"+T+")?")+"|"+T+")",D=E1("(?:\\s*<\\s*"+M+"(?:\\s*,\\s*"+M+")*\\s*>)?",/<@@@>/g,2),E={keyword:["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do","sealed","yield","permits","goto","when"],literal:["false","true","null"],type:["char","boolean","long","float","int","byte","short","double"],built_in:["super","this"]},I={className:"meta",begin:"@"+f,contains:[{begin:/\(/,end:/\)/,contains:["self"]}]},Y={className:"params",begin:/\(/,end:/\)/,keywords:E,relevance:0,contains:[o.C_BLOCK_COMMENT_MODE],endsParent:!0};return{name:"Java",aliases:["jsp"],keywords:E,illegal:/<\/|#/,contains:[o.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{begin:/import java\.[a-z]+\./,keywords:"import",relevance:2},o.C_LINE_COMMENT_MODE,o.C_BLOCK_COMMENT_MODE,{begin:/"""/,end:/"""/,className:"string",contains:[o.BACKSLASH_ESCAPE]},o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,{match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,f],className:{1:"keyword",3:"title.class"}},{match:/non-sealed/,scope:"keyword"},{beginKeywords:"new throw return else yield assert",relevance:0},{begin:[f,m.concat(D,d,/\s+/),f,d,/\s*/,/=(?!=)/],className:{1:"type",3:"variable",6:"operator"}},{begin:[/record/,/\s+/,f],className:{1:"keyword",3:"title.class"},contains:[Y,o.C_LINE_COMMENT_MODE,o.C_BLOCK_COMMENT_MODE]},{begin:[f,m.concat(D,d,/\s+/),f,/\s*(?=\()/],className:{1:"type",3:"title.function"},keywords:E,contains:[{className:"params",begin:/\(/,end:/\)/,keywords:E,relevance:0,contains:[I,o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,Gg,o.C_BLOCK_COMMENT_MODE]},o.C_LINE_COMMENT_MODE,o.C_BLOCK_COMMENT_MODE]},Gg,I]}}function aj(o){const m=o.regex,f=o.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),d="decltype\\(auto\\)",T="[a-zA-Z_]\\w*::",M="(?!struct)("+d+"|"+m.optional(T)+"[a-zA-Z_]\\w*"+m.optional("<[^<>]+>")+")",D={className:"type",begin:"\\b[a-z\\d_]*_t\\b"},G={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[o.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'("+"\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)"+"|.)",end:"'",illegal:"."},o.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\\s"]{0,16})\(/,end:/\)([^()\\\s"]{0,16})"/})]},B={className:"number",variants:[{begin:"[+-]?(?:(?:\\b[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|\\b[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|\\b0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)"},{begin:"[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)"}],relevance:0},v={scope:"meta",begin:/#\s*include\b/,end:/$/,keywords:{keyword:"include"},contains:[{begin:/\\\n/},G,{scope:"string",begin:/<.*?>/},f,o.C_BLOCK_COMMENT_MODE]},E={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},o.inherit(G,{className:"string"}),f,o.C_BLOCK_COMMENT_MODE]},I=[v,E],Y={className:"title",begin:m.optional(T)+o.IDENT_RE,relevance:0},Z=m.optional(T)+o.IDENT_RE+"\\s*\\(",en=12,_n=["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],gn=["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],mn=["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","flat_map","flat_set","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"],On=["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"],on={type:gn,keyword:_n,literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],_type_hints:mn},bn={className:"function.dispatch",relevance:0,keywords:{_hint:On},begin:m.concat(/\b/,`(?!${_n.join("|")})`,o.IDENT_RE,m.lookahead(/(<[^<>]+>|)\s*\(/))},An=[bn,...I,D,f,o.C_BLOCK_COMMENT_MODE,B,G],Tn={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:on,contains:An.concat([{begin:/\(/,end:/\)/,keywords:on,contains:An.concat(["self"]),relevance:0}]),relevance:0},Wn={className:"function",begin:"("+M+"[\\*&\\s]+){1,"+en+"}"+Z,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:on,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:d,keywords:on,relevance:0},{begin:Z,returnBegin:!0,contains:[Y],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[G,B]},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:on,relevance:0,contains:[f,o.C_BLOCK_COMMENT_MODE,G,B,D,{begin:/\(/,end:/\)/,keywords:on,relevance:0,contains:["self",f,o.C_BLOCK_COMMENT_MODE,G,B,D]}]},D,f,o.C_BLOCK_COMMENT_MODE,...I]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:on,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat(Tn,Wn,bn,An,[...I,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function|flat_map|flat_set)\\s*<(?!<)",end:">",keywords:on,contains:["self",D]},{begin:o.IDENT_RE+"::",keywords:on},{match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],className:{1:"keyword",3:"title.class"}}])}}function ij(o){const m=o.regex,f=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),d=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],T=/[-+*\/%=<>&|^~]|\*\*?|\/\/?|<<=?|>>=?|\+=|-=|\*=|\/=|%=|@|<|>/,R=["bool","complex","dict","float","frozenset","int","list","set","str","tuple"],M=["add_vertex","add","append","backtrack","bit_length","clear","collect_words","connected","counting_sort","defaultdict","deque","dfs","dp","extend","find_max_index","find","heapify","heappop","heappush","insert","insertion_sort","join","ListNode","merge_sort","pop","popleft","print_trie","quick_sort","RECURRENCE_RELATION","remove","shuffle","sort","TreeNode","TrieNode","union","UnionFind","update"],D=["BASE_CASE","BOOLEAN","CONDITION","CRITERIA","ITERATE_OVER_INPUT","MAXIMUM_POSSIBLE_ANSWER","MINIMUM_POSSIBLE_ANSWER","OTHER_ARGUMENTS","SMALLEST_SUBPROBLEM","START_NODE","STATE_FOR_WHOLE_INPUT","STATE","WINDOW_CONDITION_BROKEN"],q=["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip",...M],G=["__debug__","Ellipsis","False","None","NotImplemented","True",...D],B=["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union",...R],v={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:d,built_in:q,literal:G,type:B},E={className:"meta",begin:/^(>>>|\.\.\.) /},I={className:"subst",begin:/\{/,end:/\}/,keywords:v,illegal:/#/},Y={begin:/\{\{/,relevance:0},Z={className:"string",contains:[o.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[o.BACKSLASH_ESCAPE,E],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[o.BACKSLASH_ESCAPE,E],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[o.BACKSLASH_ESCAPE,E,Y,I]},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[o.BACKSLASH_ESCAPE,E,Y,I]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[o.BACKSLASH_ESCAPE,Y,I]},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[o.BACKSLASH_ESCAPE,Y,I]},o.APOS_STRING_MODE,o.QUOTE_STRING_MODE]},en="[0-9](_?[0-9])*",_n=`(\\b(${en}))?\\.(${en})|\\b(${en})\\.`,gn=`\\b|${d.join("|")}`,mn={className:"number",relevance:0,variants:[{begin:`(\\b(${en})|(${_n}))[eE][+-]?(${en})[jJ]?(?=${gn})`},{begin:`(${_n})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${gn})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${gn})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${gn})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${gn})`},{begin:`\\b(${en})[jJ](?=${gn})`}]},On={className:"comment",begin:m.lookahead(/# type:/),end:/$/,keywords:v,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},Kn={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:v,contains:["self",E,mn,Z,o.HASH_COMMENT_MODE,{scope:"params.operator",match:T},{scope:"params.comma",match:","},{scope:"params.self",match:/self/}]}]};return I.contains=[Z,mn,E],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:v,illegal:/(<\/|\?)|=>/,contains:[E,mn,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},Z,On,o.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,f],scope:{1:"keyword.def",3:"title.function"},contains:[Kn]},{variants:[{match:[/\bclass/,/\s+/,f,/\s*/,/\(\s*/,f,/\s*\)/]},{match:[/\bclass/,/\s+/,f]}],scope:{1:"keyword.class",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[mn,Kn,Z]},{scope:"operator",match:T}]}}Ol.registerLanguage("python",ij);Ol.registerLanguage("javascript",ej);Ol.registerLanguage("java",tj);Ol.registerLanguage("cpp",aj);function rj({code:o,language:m}){const f=H.useRef(null),[d,T]=H.useState(""),[R,M]=H.useState(""),D=Vn("hljs",m,Ug.code),q=()=>{if(f.current){const Z=o.split(`
`).map((en,_n)=>{const gn=Ol.highlight(en,{language:m}).value;return`<span class=${Ug.line} data-line-number=${_n+1}>${gn}</span>`}).join("");M(Z)}},G=()=>{f.current?.querySelectorAll("span[data-line-number]")?.forEach(Z=>Z.addEventListener("click",E))},B=()=>{f.current?.querySelectorAll("span[data-line-number]")?.forEach(Z=>Z.removeEventListener("click",E))},v=()=>{f.current?.querySelector(`span[data-line-number="${d}"]`)?.removeAttribute("focused")},E=I=>{const Y=I.currentTarget,Z=Y.getAttribute("data-line-number")??"";v(),Z===d?T(""):(Y.setAttribute("focused",""),T(Z))};return ep(f,v),H.useEffect(()=>(q(),G(),()=>B()),[o,R,d]),i.jsx("pre",{ref:f,children:i.jsx("code",{className:D,dangerouslySetInnerHTML:{__html:R}})})}const lj="_copyButton_fst3f_1",sj="_copySvg_fst3f_23",oj="_checkSvg_fst3f_30",cj="_checkSvgPath_fst3f_35",uj="_enter_fst3f_46",dj="_exit_fst3f_50",Ni={copyButton:lj,copySvg:sj,checkSvg:oj,checkSvgPath:cj,enter:uj,exit:dj};function fj({onClick:o}){const[m,f]=H.useState("show"),[d,T]=H.useState("hide"),R=Vn(Ni.copySvg,m==="enter"&&Ni.enter,m==="exit"&&Ni.exit),M=Vn(Ni.checkSvg,d==="exit"&&Ni.exit),D=Vn(Ni.checkSvgPath),q=()=>{m==="show"&&d==="hide"&&(f("exit"),o())},G=()=>{m==="enter"&&f("show"),m==="exit"&&(f("hide"),T("show"))},B=()=>{d==="show"&&setTimeout(()=>{T("exit")},500),d==="exit"&&(T("hide"),f("enter"))},v=()=>m!=="hide"&&i.jsx("svg",{className:R,viewBox:"0 0 512 512",onAnimationEnd:G,children:i.jsx("path",{d:"M64 464H288c8.8 0 16-7.2 16-16V384h48v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h64v48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM224 304H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16V288c0 8.8 7.2 16 16 16zm-64-16V64c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64z"})}),E=()=>d!=="hide"&&i.jsx("svg",{className:M,viewBox:"0 0 16 16",onAnimationEnd:B,children:i.jsx("path",{className:D,d:"M3.428571,9.14285714 L6.85714286,12.57142857 L12.5714286,3.42857143"})});return i.jsxs("button",{type:"button","aria-label":d==="hide"?"Copy code":"Copied",title:"Copy code",className:Ni.copyButton,onClick:q,children:[v(),E()]})}function hj(){return i.jsxs("svg",{viewBox:"0 0 128 128",children:[i.jsxs("linearGradient",{id:"python_svg__a",x1:70.252,x2:170.659,y1:1237.476,y2:1151.089,gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{offset:0,stopColor:"#5A9FD4"}),i.jsx("stop",{offset:1,stopColor:"#306998"})]}),i.jsxs("linearGradient",{id:"python_svg__b",x1:209.474,x2:173.62,y1:1098.811,y2:1149.537,gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{offset:0,stopColor:"#FFD43B"}),i.jsx("stop",{offset:1,stopColor:"#FFE873"})]}),i.jsx("path",{fill:"url(#python_svg__a)",d:"M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008M50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721",transform:"translate(0 10.26)"}),i.jsx("path",{fill:"url(#python_svg__b)",d:"M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692",transform:"translate(0 10.26)"}),i.jsxs("radialGradient",{id:"python_svg__c",cx:1825.678,cy:444.45,r:26.743,gradientTransform:"matrix(0 -.24 -1.055 0 532.979 557.576)",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{offset:0,stopColor:"#B8B8B8",stopOpacity:.498}),i.jsx("stop",{offset:1,stopColor:"#7F7F7F",stopOpacity:0})]}),i.jsx("path",{fill:"url(#python_svg__c)",d:"M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416s14.815-6.417 33.092-6.417c18.275 0 33.091 2.872 33.091 6.417",opacity:.444})]})}function mj(){return i.jsxs("svg",{viewBox:"0 0 128 128",children:[i.jsx("path",{fill:"#F0DB4F",d:"M1.408 1.408h125.184v125.185H1.408z"}),i.jsx("path",{fill:"#323330",d:"M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237"})]})}function gj(){return i.jsxs("svg",{id:"Layer_1",x:"0px",y:"0px",width:"306px",height:"344.35px",viewBox:"0 0 306 344.35",enableBackground:"new 0 0 306 344.35",children:[i.jsx("path",{fill:"#00599C",d:"M302.107,258.262c2.401-4.159,3.893-8.845,3.893-13.053V99.14c0-4.208-1.49-8.893-3.892-13.052L153,172.175L302.107,258.262z"}),i.jsx("path",{fill:"#004482",d:"M166.25,341.193l126.5-73.034c3.644-2.104,6.956-5.737,9.357-9.897L153,172.175L3.893,258.263c2.401,4.159,5.714,7.793,9.357,9.896l126.5,73.034C147.037,345.401,158.963,345.401,166.25,341.193z"}),i.jsx("path",{fill:"#659AD2",d:"M302.108,86.087c-2.402-4.16-5.715-7.793-9.358-9.897L166.25,3.156c-7.287-4.208-19.213-4.208-26.5,0L13.25,76.19C5.962,80.397,0,90.725,0,99.14v146.069c0,4.208,1.491,8.894,3.893,13.053L153,172.175L302.108,86.087z"}),i.jsx("g",{children:i.jsx("path",{fill:"#FFFFFF",d:"M153,274.175c-56.243,0-102-45.757-102-102s45.757-102,102-102c36.292,0,70.139,19.53,88.331,50.968l-44.143,25.544c-9.105-15.736-26.038-25.512-44.188-25.512c-28.122,0-51,22.878-51,51c0,28.121,22.878,51,51,51c18.152,0,35.085-9.776,44.191-25.515l44.143,25.543C223.142,254.644,189.294,274.175,153,274.175z"})}),i.jsx("g",{children:i.jsx("polygon",{fill:"#FFFFFF",points:"255,166.508 243.666,166.508 243.666,155.175 232.334,155.175 232.334,166.508 221,166.508221,177.841 232.334,177.841 232.334,189.175 243.666,189.175 243.666,177.841 255,177.841 	"})}),i.jsx("g",{children:i.jsx("polygon",{fill:"#FFFFFF",points:"297.5,166.508 286.166,166.508 286.166,155.175 274.834,155.175 274.834,166.508 263.5,166.508263.5,177.841 274.834,177.841 274.834,189.175 286.166,189.175 286.166,177.841 297.5,177.841 	"})})]})}function pj(){return i.jsxs("svg",{height:"800px",width:"800px",id:"Layer_1",viewBox:"0 0 511.998 511.998",children:[i.jsxs("g",{children:[i.jsx("path",{fill:"#DB380E",d:"M253.464,94.869c-23.658,16.639-50.471,35.498-64.838,66.699c-24.954,54.435,51.062,113.812,54.311,116.313c0.755,0.581,1.659,0.871,2.56,0.871c0.957,0,1.915-0.327,2.693-0.979c1.509-1.262,1.937-3.406,1.031-5.152c-0.275-0.53-27.561-53.53-26.547-91.552c0.359-13.243,18.892-28.266,38.512-44.171c17.97-14.568,38.34-31.079,50.258-50.394c26.164-42.516-2.916-84.322-3.213-84.74c-1.155-1.622-3.287-2.209-5.11-1.41c-1.821,0.804-2.83,2.773-2.414,4.72c0.059,0.277,5.714,27.923-10.022,56.406C284.203,73.25,269.959,83.268,253.464,94.869z"}),i.jsx("path",{fill:"#DB380E",d:"M353.137,113.617c1.669-1.257,2.159-3.55,1.15-5.38c-1.011-1.83-3.211-2.637-5.165-1.895c-4.019,1.528-98.416,37.915-98.416,81.88c0,30.307,12.946,46.317,22.399,58.009c3.708,4.586,6.909,8.546,7.964,11.927c2.97,9.743-4.066,27.353-7.025,33.317c-0.853,1.714-0.435,3.792,1.016,5.044c0.784,0.677,1.763,1.021,2.743,1.021c0.834,0,1.672-0.248,2.396-0.752c1.623-1.128,39.667-28.026,32.844-60.433c-2.542-12.318-8.595-21.318-13.936-29.26c-8.274-12.305-14.25-21.193-5.184-37.609C304.545,150.338,352.65,113.981,353.137,113.617z"})]}),i.jsxs("g",{children:[i.jsx("path",{fill:"#73A1FB",d:"M107.418,298.236c-1.618,4.845-0.854,9.651,2.207,13.903c10.233,14.207,46.48,22.029,102.068,22.029c0.003,0,0.005,0,0.007,0c7.532,0,15.484-0.148,23.629-0.44c88.875-3.181,121.839-30.869,123.199-32.046c1.482-1.283,1.878-3.419,0.957-5.147c-0.922-1.727-2.909-2.595-4.808-2.072c-31.301,8.546-89.748,11.58-130.288,11.58c-45.363,0-68.465-3.268-74.121-5.681c2.902-3.985,20.802-11.101,42.983-15.464c2.12-0.416,3.577-2.374,3.367-4.524s-2.016-3.79-4.177-3.79C179.439,276.584,114.234,277.628,107.418,298.236z"}),i.jsx("path",{fill:"#73A1FB",d:"M404.812,269.718c-18.331,0-35.714,9.188-36.446,9.577c-1.695,0.908-2.555,2.852-2.09,4.72c0.467,1.865,2.144,3.176,4.067,3.178c0.389,0,39.102,0.317,42.608,22.436c3.106,19.082-36.629,50-52.202,60.304c-1.682,1.113-2.335,3.263-1.554,5.123c0.665,1.583,2.206,2.573,3.868,2.573c0.29,0,0.584-0.03,0.876-0.092c3.696-0.791,90.406-19.899,81.238-70.384C439.584,276.213,420.138,269.718,404.812,269.718z"}),i.jsx("path",{fill:"#73A1FB",d:"M345.347,363.755c0.302-1.617-0.371-3.262-1.717-4.207l-20.791-14.563c-1.014-0.71-2.295-0.933-3.485-0.618c-0.217,0.055-21.959,5.771-53.525,9.276c-12.528,1.405-26.56,2.147-40.582,2.147c-31.558,0-52.192-3.708-55.197-6.428c-0.398-0.764-0.272-1.111-0.201-1.304c0.546-1.518,3.472-3.322,5.358-4.036c2.083-0.771,3.206-3.033,2.558-5.157c-0.646-2.127-2.837-3.378-4.999-2.859c-20.856,5.033-31.054,12.071-30.312,20.918c1.318,15.686,37.65,23.737,68.365,25.865c4.417,0.302,9.194,0.455,14.195,0.455c0.003,0,0.005,0,0.008,0c51.074,0,116.55-16.025,117.204-16.188C343.825,366.666,345.044,365.375,345.347,363.755z"}),i.jsx("path",{fill:"#73A1FB",d:"M188.602,397.419c1.575-1.024,2.273-2.971,1.714-4.764c-0.557-1.793-2.234-2.971-4.118-2.946c-2.795,0.074-27.349,1.182-29.068,16.815c-0.52,4.672,0.818,8.941,3.979,12.686c8.816,10.448,32.614,16.658,72.741,18.984c4.747,0.285,9.569,0.428,14.334,0.428c51.015,0,85.373-15.973,86.812-16.653c1.395-0.66,2.315-2.031,2.397-3.571s-0.687-3.001-2.003-3.806l-26.275-16.04c-0.912-0.556-2.003-0.74-3.043-0.527c-0.166,0.035-16.849,3.495-42.026,6.913c-4.764,0.648-10.73,0.977-17.73,0.977c-25.15,0-53.124-4.109-58.489-6.8C187.749,398.613,187.848,397.975,188.602,397.419z"}),i.jsx("path",{fill:"#73A1FB",d:"M224.408,486.85c116.854-0.099,179.571-20.88,191.653-33.957c4.277-4.626,4.739-9.006,4.376-11.867c-0.898-7.04-7.311-11.35-8.038-11.818c-1.754-1.128-4.108-0.833-5.476,0.745c-1.365,1.578-1.397,3.884-0.027,5.461c0.737,0.948,1.163,2.535-0.992,4.692c-4.83,4.511-53.545,18.204-134.656,22.318c-11.111,0.577-22.765,0.871-34.636,0.873c-72.623,0-125.772-9.948-132.749-15.744c2.689-3.864,21.489-10.037,41.482-13.529c2.253-0.393,3.775-2.516,3.426-4.776c-0.349-2.259-2.432-3.814-4.709-3.519c-0.564,0.077-2.478,0.191-4.694,0.327c-32.988,2.014-71.109,6.503-73.098,23.5c-0.604,5.179,0.935,9.881,4.576,13.973c8.909,10.01,34.516,23.319,153.558,23.319C224.406,486.85,224.406,486.85,224.408,486.85z"}),i.jsx("path",{fill:"#73A1FB",d:"M439.013,456.578c-1.652-0.764-3.604-0.378-4.836,0.952c-0.171,0.185-17.74,18.556-70.564,29.344c-20.223,4.052-58.183,6.107-112.826,6.107c-54.745,0-106.838-2.154-107.357-2.176c-2.176-0.106-4.037,1.476-4.333,3.618c-0.297,2.14,1.083,4.158,3.184,4.658c0.542,0.128,55.135,12.918,129.779,12.918c35.801,0,70.639-2.907,103.548-8.645c61.361-10.757,65.657-41.183,65.81-42.473C441.632,459.078,440.662,457.342,439.013,456.578z"})]})]})}const bj={python:hj,javascript:mj,java:pj,cpp:gj},vj={python:{short:"Py",full:"Python"},javascript:{short:"JS",full:"JavaScript"},java:{short:"Java",full:"Java"},cpp:{short:"C++",full:"C++"}};function u({title:o,children:m}){const{selectedLanguage:f,setSelectedLanguage:d}=Xg(),T=H.Children.toArray(m),R=T.findIndex(E=>E.props.language===f),M=R===-1?0:R,D=T[M]?.props.code??"",q=T[M]?.props.language,G=E=>{d(T[E].props.language)},B=()=>navigator.clipboard.writeText(D),v=()=>T.map((E,I)=>{const Y=bj[E.props.language],{short:Z,full:en}=vj[E.props.language];return i.jsxs("button",{type:"button",role:"tab","aria-label":`${en} code`,"aria-selected":I===M,className:oo.tabButton,onClick:()=>G(I),children:[i.jsx(Y,{}),i.jsx("span",{children:Z})]},I)});return i.jsxs("div",{className:oo.container,children:[i.jsx("h3",{children:o}),i.jsxs("div",{className:oo.buttonContainer,children:[i.jsx("div",{role:"tablist",className:oo.tabButtonContainer,children:v()}),i.jsx(fj,{onClick:B})]}),i.jsx("div",{role:"tabpanel",className:"tabs-content",children:i.jsx(rj,{code:D,language:q})})]})}u.Tab=o=>i.jsx(i.Fragment,{children:o});function _r({children:o}){return i.jsx("kbd",{className:A.kbd,"aria-hidden":"true",children:o})}function fd({mode:o,onMode:m}){return i.jsx("div",{className:A.seg,role:"group","aria-label":"View","aria-keyshortcuts":"M",children:["flow","map"].map(f=>i.jsx("button",{type:"button",className:Vn(A.segButton,o===f&&A.segOn),"aria-pressed":o===f,onClick:()=>m(f),children:f==="flow"?"Flow":"Map"},f))})}function Yg({leaf:o}){return i.jsx("a",{className:A.docsLink,href:o.docsUrl,target:"_blank",rel:"noreferrer",children:"Read the docs for this pattern"})}const yj=new Set(El.map(o=>o.lc));function xj(o){const m=f=>f.loose?2:yj.has(f.lc)?0:1;return[...o.problems].sort((f,d)=>m(f)-m(d))}function Ig({open:o,show:m,hide:f}){return i.jsxs("span",{className:A.toggleLabel,children:[i.jsx("span",{"aria-hidden":o,className:o?A.toggleHidden:void 0,children:m}),i.jsx("span",{"aria-hidden":!o,className:o?void 0:A.toggleHidden,children:f})]})}function _j({leaf:o}){const m=xj(o);return i.jsxs("div",{className:A.commonProblems,children:[i.jsxs("h4",{children:["Common problems ",i.jsx("span",{children:"examples, not the full set"})]}),i.jsx("ul",{className:A.cpTiles,children:m.map(f=>i.jsxs("li",{className:Vn(A.cpTile,f.loose&&A.cpLoose),children:[i.jsxs("span",{className:A.cpNum,children:["LC ",f.lc,f.loose&&"*"]}),i.jsx("a",{href:`https://leetcode.com/problems/${f.slug}/`,target:"_blank",rel:"noreferrer",children:f.name})]},f.lc))}),m.some(f=>f.loose)&&i.jsx("p",{className:A.commonProblemsNote,children:"* a looser fit: the pattern works, but most people reach for another one first"})]})}function Sj({leaf:o}){const m=qT(o.id);return m.length===0?i.jsxs("div",{className:Vn(A.templates,A.note),children:[i.jsxs("p",{children:[i.jsx("strong",{children:"No template yet"})," for this pattern variant."]}),i.jsx("p",{children:o.summary}),i.jsx(Yg,{leaf:o})]}):i.jsxs("div",{className:A.templates,children:[m.map((f,d)=>i.jsx(u,{title:f.title,children:od.map(T=>i.jsx(u.Tab,{language:T,code:f.code[T]},T))},`${o.id}-${d}`)),i.jsx(Yg,{leaf:o})]})}function Tj(o){return o.started?o.leaf?i.jsxs(i.Fragment,{children:["Run complete, ",i.jsx("b",{children:o.leaf.name})]}):i.jsxs(i.Fragment,{children:["Run paused, ",i.jsxs("b",{children:["check ",o.steps.length+1]})]}):i.jsxs(i.Fragment,{children:["No run, ",i.jsx("b",{children:"clock not started"})]})}function X3({run:o,detail:m}){return i.jsxs("header",{className:A.strip,children:[i.jsxs("p",{className:A.stripTitle,children:["Map",i.jsx("span",{className:A.stripValue,children:m})]}),i.jsxs("div",{className:A.stripEnd,children:[i.jsx("span",{className:A.mapStatus,role:"status",children:Tj(o)}),i.jsx(fd,{mode:o.mode,onMode:o.setMode})]})]})}const jj=100;function wj(o){const m=H.useRef(0),f=H.useRef(null),[d,T]=H.useState(0),[R,M]=H.useState(!1),D=()=>{const Z=f.current===null?0:performance.now()-f.current;return m.current+Z},q=Z=>Math.floor(Z/1e3)*1e3;H.useEffect(()=>{if(!R)return;const Z=setInterval(()=>{const en=q(D());T(_n=>_n===en?_n:en)},jj);return()=>clearInterval(Z)},[R]);const G=H.useCallback(()=>{m.current=0,f.current=performance.now(),T(0),M(!0)},[]),B=H.useCallback(()=>{f.current!==null&&(m.current=D(),f.current=null),T(m.current),M(!1)},[]),v=H.useCallback(()=>{f.current===null&&(f.current=performance.now()),T(q(D())),M(!0)},[]),E=H.useCallback(()=>{m.current=0,f.current=null,T(0),M(!1)},[]),I=o-d,Y=d>=o;return{elapsedMs:d,remainingMs:I,overtimeMs:Y?d-o:0,isOvertime:Y,isRunning:R,start:G,stop:B,resume:v,reset:E}}const Vg=30,Nj=10;function Ej(o){return o.isContentEditable||["INPUT","TEXTAREA","SELECT","OPTION"].includes(o.tagName)?!0:o.closest('input, textarea, select, [role="listbox"], [role="combobox"]')!==null}const Oj=o=>String(o).padStart(2,"0");function Sr(o){const m=Math.max(0,o);return`${Math.floor(m/60)}:${Oj(m%60)}`}function Aj(){const o=wj(Vg*1e3),[m,f]=H.useState(!1),[d,T]=H.useState([]),[R,M]=H.useState(!1),[D,q]=H.useState(!1),[G,B]=H.useState("flow"),v=H.useRef(null),E=d.length>0?d[d.length-1].option.next:Ei.rootId,I=m?Ei.leaves[E]:void 0,Y=m?Ei.nodes[E]:void 0;H.useEffect(()=>{v.current?.focus()},[m,E,G]);const Z=H.useCallback(()=>{f(!0),o.start()},[o]),en=H.useCallback(An=>{Y&&(T(Tn=>[...Tn,{question:Y.question,option:An}]),Ei.leaves[An.next]&&o.stop())},[Y,o]),_n=H.useCallback(An=>{An<0||An>=d.length||(T(d.slice(0,An)),M(!1),q(!1),I&&o.resume())},[d,I,o]),gn=H.useCallback(()=>_n(d.length-1),[_n,d.length]),mn=H.useCallback(()=>M(An=>!An),[]),On=H.useCallback(()=>q(An=>!An),[]),Kn=H.useCallback(An=>{An!==G&&(B(An),!(!m||I)&&(An==="map"?o.stop():o.resume()))},[G,m,I,o]),Hn=H.useCallback(()=>Kn(G==="flow"?"map":"flow"),[Kn,G]),on=H.useCallback(()=>{o.reset(),f(!1),T([]),M(!1),q(!1)},[o]);H.useEffect(()=>{const An=Tn=>{if(Tn.metaKey||Tn.ctrlKey||Tn.altKey)return;const Wn=Tn.target;if(!(Wn&&Ej(Wn))){if(Tn.key==="m"||Tn.key==="M")return Tn.repeat?void 0:Hn();if(G==="flow"){if(Tn.key==="Escape")return on();if(Tn.key==="Backspace"&&m&&d.length>0)return Tn.preventDefault(),gn();if(Tn.key==="Enter"&&!m&&Wn?.tagName!=="BUTTON")return Z();if((Tn.key==="t"||Tn.key==="T")&&I)return mn();if((Tn.key==="p"||Tn.key==="P")&&I)return On();if(/^[1-9]$/.test(Tn.key)&&Y){const de=Y.options[Number(Tn.key)-1];de&&en(de)}}}};return window.addEventListener("keydown",An),()=>window.removeEventListener("keydown",An)},[G,m,d.length,Y,I,en,gn,on,Z,mn,On,Hn]);const bn=Math.max(0,Math.ceil(o.remainingMs/1e3));return{budget:Vg,mode:G,setMode:Kn,toggleMode:Hn,started:m,steps:d,currentId:E,node:Y,leaf:I,isOvertime:o.isOvertime,isWarn:!o.isOvertime&&bn<=Nj,elapsedSeconds:Math.floor(o.elapsedMs/1e3),remainingSeconds:bn,overSeconds:Math.floor(o.overtimeMs/1e3),showTemplate:R,toggleTemplate:mn,showProblems:D,toggleProblems:On,stageRef:v,start:Z,pick:en,backtrack:gn,backtrackTo:_n,reset:on}}const kj=H.lazy(()=>go(()=>import("./MapView-BYavQszK.js"),__vite__mapDeps([2,3,4,5]))),Mj=H.lazy(()=>go(()=>import("./MapOutline-D2pKZqEv.js"),__vite__mapDeps([6,3,4]))),Cj={maxWidth:760};function fo({text:o,sign:m,tone:f,caption:d,label:T}){return i.jsxs("div",{className:Vn(A.timer,A[f]),role:"timer","aria-live":"off","aria-label":T,children:[i.jsxs("span",{className:A.cells,"aria-hidden":"true",children:[i.jsx("span",{className:Vn(A.cell,A.signCell),children:m?"+":""}),o.split("").map((R,M)=>R===":"?i.jsx("span",{className:A.colon,children:":"},M):i.jsx("span",{className:A.cell,children:R},M))]}),i.jsx("span",{className:A.timerCaption,"aria-hidden":"true",children:d})]})}function Rj({run:o}){if(!o.started){const f=Sr(o.budget);return i.jsx(fo,{text:f,sign:!1,tone:"idle",caption:"budget",label:`Budget ${f}`})}if(o.leaf){const f=Sr(o.elapsedSeconds);return i.jsx(fo,{text:f,sign:!1,tone:o.isOvertime?"over":"ok",caption:"taken",label:`Time taken ${f}`})}if(o.isOvertime){const f=Sr(o.overSeconds);return i.jsx(fo,{text:f,sign:!0,tone:"over",caption:"over budget",label:`${f} over budget`})}const m=Sr(o.remainingSeconds);return i.jsx(fo,{text:m,sign:!1,tone:o.isWarn?"warn":"ok",caption:"left",label:`${m} left`})}function Lj({run:o}){const{started:m,steps:f,leaf:d,node:T}=o,R=m&&!d&&!T,M=!d&&!R;return i.jsx("nav",{className:A.line,"aria-label":"Your path so far",children:i.jsxs("ol",{className:A.stops,children:[f.map((D,q)=>i.jsx("li",{className:Vn(A.stop,A.answered),children:i.jsxs("button",{type:"button",className:A.stopButton,title:`${D.question} ${D.option.cue}`,"aria-label":`Back to question ${q+1}: ${D.question} You picked: ${D.option.cue}`,onClick:()=>o.backtrackTo(q),children:[i.jsx("span",{className:A.dot,"aria-hidden":"true"}),i.jsx("span",{className:A.cue,children:D.option.cue})]})},q)),M&&i.jsx("li",{className:Vn(A.stop,A.current,A.dashedNext),"aria-current":"step",children:i.jsxs("span",{className:A.stopInner,children:[i.jsx("span",{className:A.dot,"aria-hidden":"true"}),i.jsx("span",{className:A.srOnly,children:m?`Question ${f.length+1}, current`:"Ready to start"})]})}),d&&i.jsx("li",{className:Vn(A.stop,A.reached),"aria-current":"step",children:i.jsxs("span",{className:A.stopInner,children:[i.jsx("span",{className:A.dot,"aria-hidden":"true"}),i.jsxs("span",{className:A.srOnly,children:["Result: ",d.name]})]})}),M&&i.jsx("li",{className:Vn(A.stop,A.end),"aria-hidden":"true",children:i.jsx("span",{className:A.stopInner,children:i.jsx("span",{className:A.dot})})}),R&&i.jsx("li",{className:Vn(A.stop,A.fault),"aria-current":"step",children:i.jsxs("span",{className:A.stopInner,children:[i.jsx("span",{className:A.dot,"aria-hidden":"true"}),i.jsx("span",{className:A.srOnly,children:"This path leads nowhere"})]})})]})})}function ho({label:o,value:m,run:f}){return i.jsxs("header",{className:A.strip,children:[i.jsxs("p",{className:A.stripTitle,children:[o,i.jsx("span",{className:A.stripValue,children:m})]}),i.jsxs("div",{className:A.stripEnd,children:[i.jsx(fd,{mode:f.mode,onMode:f.setMode}),i.jsx(Rj,{run:f})]})]})}function id({run:o}){return i.jsxs("footer",{className:A.footer,children:[o.started&&(o.node||o.leaf)&&i.jsxs("button",{type:"button",className:A.plain,onClick:o.backtrack,disabled:o.steps.length===0,"aria-keyshortcuts":"Backspace",children:["Backtrack ",i.jsx(_r,{children:"Bksp"})]}),i.jsxs("button",{type:"button",className:A.plain,onClick:o.reset,"aria-keyshortcuts":"Escape",children:["Reset ",i.jsx(_r,{children:"Esc"})]})]})}function Dj({run:o}){return i.jsx("section",{className:Vn(A.card,A.mapFallback),"aria-label":"Map","aria-busy":"true",children:i.jsxs("header",{className:A.strip,children:[i.jsxs("p",{className:A.stripTitle,children:["Map",i.jsx("span",{className:A.stripValue,children:"Loading"})]}),i.jsx("div",{className:A.stripEnd,children:i.jsx(fd,{mode:o.mode,onMode:o.setMode})})]})})}function zj(){const o=Aj(),m=np(Cj),f=()=>i.jsxs(i.Fragment,{children:[i.jsx(ho,{run:o,label:"Procedure",value:"Ready"}),i.jsxs("div",{className:A.body,children:[i.jsxs("h2",{ref:o.stageRef,tabIndex:-1,className:A.question,children:["Name the pattern in ",o.budget," seconds"]}),i.jsx("p",{className:A.lead,children:"Open the problem, then pick the cue that sounds most like it. Overtime is shown, not enforced."}),i.jsx("div",{className:A.actions,children:i.jsxs("button",{type:"button",className:A.primary,onClick:o.start,"aria-keyshortcuts":"Enter",children:["Start ",i.jsx(_r,{children:"Enter"})]})})]},"idle")]}),d=D=>i.jsxs(i.Fragment,{children:[i.jsx(ho,{run:o,label:"Procedure",value:`Q${o.steps.length+1}`}),i.jsxs("div",{className:A.body,children:[i.jsx("h2",{ref:o.stageRef,tabIndex:-1,className:A.question,children:D.question}),i.jsx("ol",{className:A.options,children:D.options.map((q,G)=>i.jsx("li",{children:i.jsxs("button",{type:"button",className:A.option,onClick:()=>o.pick(q),"aria-keyshortcuts":G<9?String(G+1):void 0,children:[G<9&&i.jsx(_r,{children:G+1}),i.jsx("span",{className:A.optionCue,children:q.cue})]})},q.cue))})]},D.id),i.jsx(id,{run:o})]}),T=D=>{const q=Sr(o.elapsedSeconds);return i.jsxs(i.Fragment,{children:[i.jsxs("p",{className:A.srOnly,role:"status","aria-live":"polite",children:["Pattern found: ",D.name,", ",D.pattern,". Time taken ",q,"."]}),i.jsx(ho,{run:o,label:"Memory item",value:"Result"}),i.jsxs("div",{className:A.body,children:[i.jsx("h2",{ref:o.stageRef,tabIndex:-1,className:A.resultName,children:D.name}),i.jsxs("dl",{className:A.fields,children:[i.jsxs("div",{className:A.field,children:[i.jsx("dt",{children:"Pattern"}),i.jsx("dd",{children:D.pattern})]}),i.jsxs("div",{className:A.field,children:[i.jsx("dt",{children:"Time taken"}),i.jsxs("dd",{children:[i.jsx("span",{className:A.figure,children:q}),o.isOvertime?i.jsxs("span",{className:A.overNote,children:["+",Sr(o.overSeconds)," over the ",o.budget,"s budget"]}):i.jsxs("span",{className:A.okNote,children:["within the ",o.budget,"s budget"]})]})]})]}),i.jsx("p",{className:A.summary,children:D.summary}),i.jsxs("div",{className:A.actions,children:[i.jsxs("button",{type:"button",className:A.primary,"aria-expanded":o.showTemplate,"aria-keyshortcuts":"T",onClick:o.toggleTemplate,children:[i.jsx(Ig,{open:o.showTemplate,show:"View template",hide:"Hide template"})," ",i.jsx(_r,{children:"T"})]}),i.jsxs("button",{type:"button",className:A.primary,"aria-expanded":o.showProblems,"aria-keyshortcuts":"P",onClick:o.toggleProblems,children:[i.jsx(Ig,{open:o.showProblems,show:"View problems",hide:"Hide problems"})," ",i.jsx(_r,{children:"P"})]})]}),o.showTemplate&&i.jsx(Sj,{leaf:D}),o.showProblems&&i.jsx(_j,{leaf:D})]},D.id),i.jsx(id,{run:o})]})},R=()=>i.jsxs(i.Fragment,{children:[i.jsx(ho,{run:o,label:"Procedure",value:"Fault"}),i.jsxs("div",{className:A.body,children:[i.jsx("h2",{ref:o.stageRef,tabIndex:-1,className:A.question,children:"This path leads nowhere"}),i.jsx("p",{className:A.lead,children:"The cue you picked has no next check. Reset and run the procedure again."})]},"broken"),i.jsx(id,{run:o})]});let M;return o.started?o.leaf?M=T(o.leaf):o.node?M=d(o.node):M=R():M=f(),o.mode==="map"?i.jsx("div",{className:Vn(A.finder,A.mapMode),children:i.jsx(H.Suspense,{fallback:i.jsx(Dj,{run:o}),children:m?i.jsx(Mj,{run:o}):i.jsx(kj,{run:o})})}):i.jsxs("div",{className:A.finder,children:[m?i.jsx(Lj,{run:o}):i.jsx(UT,{run:o}),i.jsx("section",{className:A.card,"aria-label":"Procedure",children:M})]})}const Bj="_root_3jvua_1",Uj="_h2_3jvua_25",Hj="_h3_3jvua_35",qj="_lede_3jvua_45",Gj="_origin_3jvua_52",Yj="_srOnly_3jvua_59",Ij="_ext_3jvua_71",Vj="_diff_3jvua_83",Kj="_pips_3jvua_96",Qj="_pip_3jvua_96",Xj="_pipOn_3jvua_108",Jj="_easy_3jvua_112",Zj="_medium_3jvua_116",Pj="_hard_3jvua_120",Fj="_primary_3jvua_124",Wj="_ghost_3jvua_148",$j="_a_3jvua_167",n2="_aHead_3jvua_176",e2="_aStats_3jvua_181",t2="_aIndex_3jvua_223",a2="_aSection_3jvua_249",i2="_aStrip_3jvua_255",r2="_aCount_3jvua_280",l2="_aRows_3jvua_289",s2="_aRow_3jvua_289",o2="_aNum_3jvua_312",c2="_aLc_3jvua_325",u2="_aText_3jvua_349",d2="_aLink_3jvua_355",f2="_aMove_3jvua_366",h2="_band_3jvua_381",m2="_bandList_3jvua_395",g2="_bandItem_3jvua_412",p2="_bandKey_3jvua_434",b2="_bandName_3jvua_448",v2="_bandOn_3jvua_457",In={root:Bj,h2:Uj,h3:Hj,lede:qj,origin:Gj,srOnly:Yj,ext:Ij,diff:Vj,pips:Kj,pip:Qj,pipOn:Xj,easy:Jj,medium:Zj,hard:Pj,primary:Fj,ghost:Wj,a:$j,aHead:n2,aStats:e2,aIndex:t2,aSection:a2,aStrip:i2,aCount:r2,aRows:l2,aRow:s2,aNum:o2,aLc:c2,aText:u2,aLink:d2,aMove:f2,band:h2,bandList:m2,bandItem:g2,bandKey:p2,bandName:b2,bandOn:v2},y2="A curated list of LeetCode and data structure/algorithm problems designed around the 80/20 rule, focusing on high-impact topics that deliver 90–95% of the results needed for software engineering coding interviews.",x2="Credit to Aman Manazir for coming up with this list.";function _2(){return i.jsx("svg",{className:In.ext,viewBox:"0 0 12 12","aria-hidden":"true",children:i.jsx("path",{d:"M4.5 2.5h5v5M9.5 2.5 3 9"})})}const S2={Easy:1,Medium:2,Hard:3};function T2({d:o,label:m=!0}){return i.jsxs("span",{className:Vn(In.diff,In[o.toLowerCase()]),children:[i.jsx("span",{className:In.pips,"aria-hidden":"true",children:[1,2,3].map(f=>i.jsx("span",{className:Vn(In.pip,f<=S2[o]&&In.pipOn)},f))}),i.jsx("span",{className:m?In.diffLabel:In.srOnly,children:o})]})}const rd="1234567890",Nl=o=>`pareto-${o}`;function j2(){const[o,m]=H.useState(_a[0].id),f=d=>{const T=window.matchMedia("(prefers-reduced-motion: reduce)").matches;document.getElementById(Nl(d))?.scrollIntoView({block:"start",behavior:T?"auto":"smooth"}),m(d)};return H.useEffect(()=>{const d=new Set,T=new IntersectionObserver(R=>{for(const D of R){const q=D.target.id.replace("pareto-","");D.isIntersecting?d.add(q):d.delete(q)}const M=_a.find(D=>d.has(D.id));M&&m(M.id)},{rootMargin:"-25% 0px -65% 0px"});return _a.forEach(R=>{const M=document.getElementById(Nl(R.id));M&&T.observe(M)}),()=>T.disconnect()},[]),H.useEffect(()=>{const d=T=>{if(T.target.closest("input, textarea, select, [contenteditable]")||T.metaKey||T.ctrlKey||T.altKey)return;const M=rd.indexOf(T.key);M>=0&&M<_a.length&&f(_a[M].id)};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[]),i.jsx("div",{className:In.root,children:i.jsxs("div",{className:In.a,children:[i.jsxs("header",{className:In.aHead,children:[i.jsx("h2",{className:In.h2,children:"The Pareto Set"}),i.jsx("p",{className:In.lede,children:y2}),i.jsx("p",{className:In.origin,children:x2}),i.jsxs("dl",{className:In.aStats,children:[i.jsxs("div",{children:[i.jsx("dt",{children:"Problems"}),i.jsx("dd",{children:so.total})]}),i.jsxs("div",{children:[i.jsx("dt",{children:"Patterns"}),i.jsx("dd",{children:so.patterns})]}),i.jsxs("div",{children:[i.jsx("dt",{children:"Easy"}),i.jsx("dd",{children:so.easy})]}),i.jsxs("div",{children:[i.jsx("dt",{children:"Medium"}),i.jsx("dd",{children:so.medium})]})]})]}),i.jsx("nav",{className:In.band,"aria-label":"Patterns",children:i.jsx("ol",{className:In.bandList,children:_a.map((d,T)=>i.jsx("li",{children:i.jsxs("button",{type:"button",className:Vn(In.bandItem,d.id===o&&In.bandOn),"aria-current":d.id===o?"true":void 0,"aria-keyshortcuts":rd[T],onClick:()=>f(d.id),children:[i.jsx("span",{className:In.bandKey,children:rd[T]}),i.jsx("span",{className:In.bandName,children:d.name})]})},d.id))})}),_a.map(d=>i.jsxs("section",{id:Nl(d.id),className:In.aSection,"aria-labelledby":`${Nl(d.id)}-h`,children:[i.jsxs("div",{className:In.aStrip,children:[i.jsx("h3",{id:`${Nl(d.id)}-h`,className:In.h3,children:d.name}),i.jsx("p",{children:d.why}),i.jsxs("span",{className:In.aCount,children:[d.problems.length," problems"]})]}),i.jsx("ol",{className:In.aRows,children:d.problems.map(T=>i.jsxs("li",{className:In.aRow,children:[i.jsx("span",{className:In.aNum,children:T.n}),i.jsxs("span",{className:In.aText,children:[i.jsxs("a",{href:YT(T.slug),target:"_blank",rel:"noopener noreferrer",className:In.aLink,children:[T.name,i.jsx("span",{className:In.srOnly,children:" on LeetCode (opens in a new tab)"})]}),i.jsx("span",{className:In.aMove,children:T.ask})]}),i.jsxs("span",{className:In.aLc,children:["LC ",T.lc]}),i.jsx(T2,{d:T.difficulty}),i.jsx(_2,{})]},T.slug))})]},d.id))]})})}const w2="_container_1htmy_1",N2="_sectionHeader_1htmy_7",Fn={container:w2,sectionHeader:N2},E2="_container_13ll4_1",O2="_label_13ll4_13",A2="_tableWrapper_13ll4_21",k2="_dataRow_13ll4_30",M2="_red_13ll4_51",C2="_oliveGreen_13ll4_55",R2="_green_13ll4_59",L2="_orange_13ll4_63",D2="_yellow_13ll4_67",z2="_gray_13ll4_71",p={container:E2,label:O2,tableWrapper:A2,dataRow:k2,red:M2,oliveGreen:C2,green:R2,orange:L2,yellow:D2,gray:z2};function B2(){const o={red:"var(--color-red-alpha)",orange:"var(--color-orange-alpha)",yellow:"var(--color-yellow-alpha)",oliveGreen:"var(--color-olive-green-alpha)",green:"var(--color-green-alpha)"};return i.jsx("section",{id:"bigo-chart",children:i.jsxs("div",{className:p.container,children:[i.jsx("h3",{children:"Big-O Complexity Chart"}),i.jsxs("svg",{id:"chart",viewBox:"0 0 800 500",style:{color:"var(--pd-text)"},children:[i.jsx("path",{d:"M50 450 L 50 0 L 800 0 L 800 450 Z",fill:o.red}),i.jsx("path",{d:"M50 450 L 800 0 L 800 450 Z",fill:o.orange}),i.jsx("path",{d:"M50 450 L 800 450 L 800 330 Z",fill:o.yellow}),i.jsx("path",{d:"M50 450 L 800 450 L 800 410 Z",fill:o.oliveGreen}),i.jsx("path",{d:"M50 450 L 800 450 L 800 440 Z",fill:o.green}),i.jsx("path",{d:"M50 0 L 50 450 L 800 450",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),i.jsx("path",{d:"M50 448 L 800 448",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),i.jsx("text",{x:"700",y:"438",fill:"currentColor",children:"O(log n), O(1)"}),i.jsx("path",{d:"M50 450 L 800 400",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),i.jsx("text",{x:"760",y:"390",fill:"currentColor",children:"O(n)"}),i.jsx("path",{d:"M50 450 Q 400 350, 800 150",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),i.jsx("text",{x:"630",y:"190",fill:"currentColor",children:"O(n log n)"}),i.jsx("path",{d:"M50 450 Q 180 380, 250 0",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),i.jsx("text",{x:"260",y:"30",fill:"currentColor",children:"O(n^2)"}),i.jsx("path",{d:"M50 450 C 100 430, 120 350, 120 0",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),i.jsx("text",{x:"125",y:"20",fill:"currentColor",children:"O(2^n)"}),i.jsx("path",{d:"M50 450 C 80 450, 80 350, 80 0",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),i.jsx("text",{x:"80",y:"20",fill:"currentColor",children:"O(n!)"}),i.jsx("text",{className:p.label,x:"0",y:"0",transform:"translate(30 230) rotate(-90)",fill:"currentColor",children:"Operations"}),i.jsx("text",{className:p.label,x:"0",y:"0",transform:"translate(420 470)",fill:"currentColor",children:"Elements"})]})]})})}function U2(){return i.jsx("section",{id:"bigo-data-structure-operations-table",children:i.jsxs("div",{className:p.container,children:[i.jsx("h3",{children:"Data Structure Operations"}),i.jsx("div",{className:p.tableWrapper,children:i.jsx("table",{className:p.table,children:i.jsxs("tbody",{children:[i.jsxs("tr",{children:[i.jsx("th",{children:"Data Structure"}),i.jsx("th",{colSpan:8,children:"Time Complexity"}),i.jsx("th",{children:"Space Complexity"})]}),i.jsxs("tr",{children:[i.jsx("th",{}),i.jsx("th",{colSpan:4,children:"Average"}),i.jsx("th",{colSpan:4,children:"Worst"}),i.jsx("th",{children:"Worst"})]}),i.jsxs("tr",{children:[i.jsx("th",{}),i.jsx("th",{children:"Access"}),i.jsx("th",{children:"Search"}),i.jsx("th",{children:"Insertion"}),i.jsx("th",{children:"Deletion"}),i.jsx("th",{children:"Access"}),i.jsx("th",{children:"Search"}),i.jsx("th",{children:"Insertion"}),i.jsx("th",{children:"Deletion"}),i.jsx("th",{})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Array_data_structure",target:"_blank",children:"Array"})}),i.jsx("td",{className:p.green,children:"Θ(1)"}),i.jsx("td",{className:p.yellow,children:"Θ(n)"}),i.jsx("td",{className:p.yellow,children:"Θ(n)"}),i.jsx("td",{className:p.yellow,children:"Θ(n)"}),i.jsx("td",{className:p.green,children:"O(1)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Stack_(abstract_data_type)",target:"_blank",children:"Stack"})}),i.jsx("td",{className:p.yellow,children:"Θ(n)"}),i.jsx("td",{className:p.yellow,children:"Θ(n)"}),i.jsx("td",{className:p.green,children:"Θ(1)"}),i.jsx("td",{className:p.green,children:"Θ(1)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.green,children:"O(1)"}),i.jsx("td",{className:p.green,children:"O(1)"}),i.jsx("td",{className:p.yellow,children:"O(n)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Queue_(abstract_data_type)",target:"_blank",children:"Queue"})}),i.jsx("td",{className:p.yellow,children:"Θ(n)"}),i.jsx("td",{className:p.yellow,children:"Θ(n)"}),i.jsx("td",{className:p.green,children:"Θ(1)"}),i.jsx("td",{className:p.green,children:"Θ(1)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.green,children:"O(1)"}),i.jsx("td",{className:p.green,children:"O(1)"}),i.jsx("td",{className:p.yellow,children:"O(n)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Singly_linked_list#Singly_linked_lists",target:"_blank",children:"Singly-Linked List"})}),i.jsx("td",{className:p.yellow,children:"Θ(n)"}),i.jsx("td",{className:p.yellow,children:"Θ(n)"}),i.jsx("td",{className:p.green,children:"Θ(1)"}),i.jsx("td",{className:p.green,children:"Θ(1)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.green,children:"O(1)"}),i.jsx("td",{className:p.green,children:"O(1)"}),i.jsx("td",{className:p.yellow,children:"O(n)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Doubly_linked_list",target:"_blank",children:"Doubly-Linked List"})}),i.jsx("td",{className:p.yellow,children:"Θ(n)"}),i.jsx("td",{className:p.yellow,children:"Θ(n)"}),i.jsx("td",{className:p.green,children:"Θ(1)"}),i.jsx("td",{className:p.green,children:"Θ(1)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.green,children:"O(1)"}),i.jsx("td",{className:p.green,children:"O(1)"}),i.jsx("td",{className:p.yellow,children:"O(n)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Skip_list",target:"_blank",children:"Skip List"})}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.orange,children:"O(n log(n))"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Hash_table",target:"_blank",children:"Hash Table"})}),i.jsx("td",{className:p.gray,children:"N/A"}),i.jsx("td",{className:p.green,children:"Θ(1)"}),i.jsx("td",{className:p.green,children:"Θ(1)"}),i.jsx("td",{className:p.green,children:"Θ(1)"}),i.jsx("td",{className:p.gray,children:"N/A"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Binary_search_tree",target:"_blank",children:"Binary Search Tree"})}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"https://en.wikipedia.org/wiki/Cartesian_tree",target:"_blank",children:"Cartesian Tree"})}),i.jsx("td",{className:p.gray,children:"N/A"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.gray,children:"N/A"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/B_tree",target:"_blank",children:"B-Tree"})}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:p.yellow,children:"O(n)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Red-black_tree",target:"_blank",children:"Red-Black Tree"})}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:p.yellow,children:"O(n)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"https://en.wikipedia.org/wiki/Splay_tree",target:"_blank",children:"Splay Tree"})}),i.jsx("td",{className:p.gray,children:"N/A"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.gray,children:"N/A"}),i.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:p.yellow,children:"O(n)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/AVL_tree",target:"_blank",children:"AVL Tree"})}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:p.yellow,children:"O(n)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/K-d_tree",target:"_blank",children:"KD Tree"})}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"}),i.jsx("td",{className:p.yellow,children:"O(n)"})]})]})})})]})})}function H2(){return i.jsx("section",{id:"bigo-sorting-algorithms-table",children:i.jsxs("div",{className:p.container,children:[i.jsx("h3",{children:"Array Sorting Algorithms"}),i.jsx("div",{className:p.tableWrapper,children:i.jsx("table",{children:i.jsxs("tbody",{children:[i.jsxs("tr",{children:[i.jsx("th",{children:"Algorithm"}),i.jsx("th",{colSpan:3,children:"Time Complexity"}),i.jsx("th",{children:"Space Complexity"})]}),i.jsxs("tr",{children:[i.jsx("th",{}),i.jsx("th",{children:"Best"}),i.jsx("th",{children:"Average"}),i.jsx("th",{children:"Worst"}),i.jsx("th",{children:"Worst"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Quicksort",target:"_blank",children:"Quicksort"})}),i.jsx("td",{className:p.orange,children:"Ω(n log(n))"}),i.jsx("td",{className:p.orange,children:"Θ(n log(n))"}),i.jsx("td",{className:p.red,children:"O(n^2)"}),i.jsx("td",{className:p.oliveGreen,children:"O(log(n))"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Merge_sort",target:"_blank",children:"Mergesort"})}),i.jsx("td",{className:p.orange,children:"Ω(n log(n))"}),i.jsx("td",{className:p.orange,children:"Θ(n log(n))"}),i.jsx("td",{className:p.orange,children:"O(n log(n))"}),i.jsx("td",{className:p.yellow,children:"O(n)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Timsort",target:"_blank",children:"Timsort"})}),i.jsx("td",{className:p.yellow,children:"Ω(n)"}),i.jsx("td",{className:p.orange,children:"Θ(n log(n))"}),i.jsx("td",{className:p.orange,children:"O(n log(n))"}),i.jsx("td",{className:p.yellow,children:"O(n)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Heapsort",target:"_blank",children:"Heapsort"})}),i.jsx("td",{className:p.orange,children:"Ω(n log(n))"}),i.jsx("td",{className:p.orange,children:"Θ(n log(n))"}),i.jsx("td",{className:p.orange,children:"O(n log(n))"}),i.jsx("td",{className:p.green,children:"O(1)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Bubble_sort",target:"_blank",children:"Bubble Sort"})}),i.jsx("td",{className:p.yellow,children:"Ω(n)"}),i.jsx("td",{className:p.red,children:"Θ(n^2)"}),i.jsx("td",{className:p.red,children:"O(n^2)"}),i.jsx("td",{className:p.green,children:"O(1)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Insertion_sort",target:"_blank",children:"Insertion Sort"})}),i.jsx("td",{className:p.yellow,children:"Ω(n)"}),i.jsx("td",{className:p.red,children:"Θ(n^2)"}),i.jsx("td",{className:p.red,children:"O(n^2)"}),i.jsx("td",{className:p.green,children:"O(1)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Selection_sort",target:"_blank",children:"Selection Sort"})}),i.jsx("td",{className:p.red,children:"Ω(n^2)"}),i.jsx("td",{className:p.red,children:"Θ(n^2)"}),i.jsx("td",{className:p.red,children:"O(n^2)"}),i.jsx("td",{className:p.green,children:"O(1)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"https://en.wikipedia.org/wiki/Tree_sort",target:"_blank",children:"Tree Sort"})}),i.jsx("td",{className:p.orange,children:"Ω(n log(n))"}),i.jsx("td",{className:p.orange,children:"Θ(n log(n))"}),i.jsx("td",{className:p.red,children:"O(n^2)"}),i.jsx("td",{className:p.yellow,children:"O(n)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Shellsort",target:"_blank",children:"Shell Sort"})}),i.jsx("td",{className:p.orange,children:"Ω(n log(n))"}),i.jsx("td",{className:p.red,children:"Θ(n(log(n))^2)"}),i.jsx("td",{className:p.red,children:"O(n(log(n))^2)"}),i.jsx("td",{className:p.green,children:"O(1)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Bucket_sort",target:"_blank",children:"Bucket Sort"})}),i.jsx("td",{className:p.green,children:"Ω(n+k)"}),i.jsx("td",{className:p.green,children:"Θ(n+k)"}),i.jsx("td",{className:p.red,children:"O(n^2)"}),i.jsx("td",{className:p.yellow,children:"O(n)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Radix_sort",target:"_blank",children:"Radix Sort"})}),i.jsx("td",{className:p.green,children:"Ω(nk)"}),i.jsx("td",{className:p.green,children:"Θ(nk)"}),i.jsx("td",{className:p.green,children:"O(nk)"}),i.jsx("td",{className:p.yellow,children:"O(n+k)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"https://en.wikipedia.org/wiki/Counting_sort",children:"Counting Sort"})}),i.jsx("td",{className:p.green,children:"Ω(n+k)"}),i.jsx("td",{className:p.green,children:"Θ(n+k)"}),i.jsx("td",{className:p.green,children:"O(n+k)"}),i.jsx("td",{className:p.yellow,children:"O(k)"})]}),i.jsxs("tr",{className:p.dataRow,children:[i.jsx("td",{children:i.jsx("a",{href:"https://en.wikipedia.org/wiki/Cubesort",target:"_blank",children:"Cubesort"})}),i.jsx("td",{className:p.yellow,children:"Ω(n)"}),i.jsx("td",{className:p.orange,children:"Θ(n log(n))"}),i.jsx("td",{className:p.orange,children:"O(n log(n))"}),i.jsx("td",{className:p.yellow,children:"O(n)"})]})]})})})]})})}function q2(){return i.jsxs("div",{className:Fn.container,children:[i.jsx("h2",{className:Fn.sectionHeader,children:"Big O"}),i.jsx(B2,{}),i.jsx(U2,{}),i.jsx(H2,{})]})}function G2(){return i.jsxs("div",{className:Fn.container,children:[i.jsx("h2",{className:Fn.sectionHeader,children:"Array"}),i.jsx("section",{id:"array-two-pointers-one-input",children:i.jsxs(u,{title:"two pointers: one input, opposite ends",children:[i.jsx(u.Tab,{code:p1,language:"python"}),i.jsx(u.Tab,{code:b1,language:"javascript"}),i.jsx(u.Tab,{code:v1,language:"java"}),i.jsx(u.Tab,{code:y1,language:"cpp"})]})}),i.jsx("section",{id:"array-two-pointers-two-inputs",children:i.jsxs(u,{title:"two pointers: two inputs, exhaust both",children:[i.jsx(u.Tab,{code:x1,language:"python"}),i.jsx(u.Tab,{code:_1,language:"javascript"}),i.jsx(u.Tab,{code:S1,language:"java"}),i.jsx(u.Tab,{code:T1,language:"cpp"})]})}),i.jsx("section",{id:"array-sliding-window",children:i.jsxs(u,{title:"sliding window",children:[i.jsx(u.Tab,{code:Yv,language:"python"}),i.jsx(u.Tab,{code:Iv,language:"javascript"}),i.jsx(u.Tab,{code:Vv,language:"java"}),i.jsx(u.Tab,{code:Kv,language:"cpp"})]})}),i.jsx("section",{id:"array-prefix-sum",children:i.jsxs(u,{title:"prefix sum",children:[i.jsx(u.Tab,{code:Uv,language:"python"}),i.jsx(u.Tab,{code:Hv,language:"javascript"}),i.jsx(u.Tab,{code:qv,language:"java"}),i.jsx(u.Tab,{code:Gv,language:"cpp"})]})}),i.jsx("section",{id:"array-string-building",children:i.jsxs(u,{title:"efficient string building",children:[i.jsx(u.Tab,{code:n1,language:"python"}),i.jsx(u.Tab,{code:e1,language:"javascript"}),i.jsx(u.Tab,{code:t1,language:"java"}),i.jsx(u.Tab,{code:a1,language:"cpp"})]})})]})}function Y2(){return i.jsxs("div",{className:Fn.container,children:[i.jsx("h2",{className:Fn.sectionHeader,children:"Hash Map"}),i.jsx("section",{id:"hashmap-find-number-of-subarrays",children:i.jsxs(u,{title:"find number of subarrays that fit an exact criteria",children:[i.jsx(u.Tab,{code:vv,language:"python"}),i.jsx(u.Tab,{code:yv,language:"javascript"}),i.jsx(u.Tab,{code:xv,language:"java"}),i.jsx(u.Tab,{code:_v,language:"cpp"})]})}),i.jsx("section",{id:"hashmap-sliding-window",children:i.jsxs(u,{title:"sliding window",children:[i.jsx(u.Tab,{code:Sv,language:"python"}),i.jsx(u.Tab,{code:Tv,language:"javascript"}),i.jsx(u.Tab,{code:jv,language:"java"}),i.jsx(u.Tab,{code:wv,language:"cpp"})]})})]})}function I2(){return i.jsxs("div",{className:Fn.container,children:[i.jsx("h2",{className:Fn.sectionHeader,children:"Linked List"}),i.jsx("section",{id:"linkedlist-fast-and-slow-pointer",children:i.jsxs(u,{title:"fast and slow pointer",children:[i.jsx(u.Tab,{code:kv,language:"python"}),i.jsx(u.Tab,{code:Mv,language:"javascript"}),i.jsx(u.Tab,{code:Cv,language:"java"}),i.jsx(u.Tab,{code:Rv,language:"cpp"})]})}),i.jsx("section",{id:"linkedlist-reverse",children:i.jsxs(u,{title:"reverse linked list",children:[i.jsx(u.Tab,{code:Lv,language:"python"}),i.jsx(u.Tab,{code:Dv,language:"javascript"}),i.jsx(u.Tab,{code:zv,language:"java"}),i.jsx(u.Tab,{code:Bv,language:"cpp"})]})})]})}function V2(){return i.jsxs("div",{className:Fn.container,children:[i.jsx("h2",{className:Fn.sectionHeader,children:"Stack"}),i.jsx("section",{id:"stack-monotonic-increasing",children:i.jsxs(u,{title:"monotonic increasing stack",children:[i.jsx(u.Tab,{code:Pv,language:"python"}),i.jsx(u.Tab,{code:Fv,language:"javascript"}),i.jsx(u.Tab,{code:Wv,language:"java"}),i.jsx(u.Tab,{code:$v,language:"cpp"})]})}),i.jsx("section",{id:"stack-monotonic-decreasing",children:i.jsxs(u,{title:"monotonic decreasing stack",children:[i.jsx(u.Tab,{code:Qv,language:"python"}),i.jsx(u.Tab,{code:Xv,language:"javascript"}),i.jsx(u.Tab,{code:Jv,language:"java"}),i.jsx(u.Tab,{code:Zv,language:"cpp"})]})})]})}function K2(){return i.jsxs("div",{className:Fn.container,children:[i.jsx("h2",{className:Fn.sectionHeader,children:"Binary Tree"}),i.jsx("section",{id:"tree-dfs-recursive",children:i.jsxs(u,{title:"DFS (recursive)",children:[i.jsx(u.Tab,{code:f1,language:"python"}),i.jsx(u.Tab,{code:h1,language:"javascript"}),i.jsx(u.Tab,{code:m1,language:"java"}),i.jsx(u.Tab,{code:g1,language:"cpp"})]})}),i.jsx("section",{id:"tree-dfs-iterative",children:i.jsxs(u,{title:"DFS (iterative)",children:[i.jsx(u.Tab,{code:o1,language:"python"}),i.jsx(u.Tab,{code:c1,language:"javascript"}),i.jsx(u.Tab,{code:u1,language:"java"}),i.jsx(u.Tab,{code:d1,language:"cpp"})]})}),i.jsx("section",{id:"tree-bfs",children:i.jsxs(u,{title:"BFS",children:[i.jsx(u.Tab,{code:i1,language:"python"}),i.jsx(u.Tab,{code:r1,language:"javascript"}),i.jsx(u.Tab,{code:l1,language:"java"}),i.jsx(u.Tab,{code:s1,language:"cpp"})]})})]})}function Q2(){return i.jsxs("div",{className:Fn.container,children:[i.jsx("h2",{className:Fn.sectionHeader,children:"Graph"}),i.jsx("section",{id:"graph-dfs-recursive",children:i.jsxs(u,{title:"DFS (recursive)",children:[i.jsx(u.Tab,{code:Wb,language:"python"}),i.jsx(u.Tab,{code:$b,language:"javascript"}),i.jsx(u.Tab,{code:nv,language:"java"}),i.jsx(u.Tab,{code:ev,language:"cpp"})]})}),i.jsx("section",{id:"graph-dfs-iterative",children:i.jsxs(u,{title:"DFS (iterative)",children:[i.jsx(u.Tab,{code:Jb,language:"python"}),i.jsx(u.Tab,{code:Zb,language:"javascript"}),i.jsx(u.Tab,{code:Pb,language:"java"}),i.jsx(u.Tab,{code:Fb,language:"cpp"})]})}),i.jsx("section",{id:"graph-bfs",children:i.jsxs(u,{title:"BFS",children:[i.jsx(u.Tab,{code:Vb,language:"python"}),i.jsx(u.Tab,{code:Kb,language:"javascript"}),i.jsx(u.Tab,{code:Qb,language:"java"}),i.jsx(u.Tab,{code:Xb,language:"cpp"})]})}),i.jsx("section",{id:"graph-dijkstra",children:i.jsxs(u,{title:"Dijkstra (shortest path)",children:[i.jsx(u.Tab,{code:tv,language:"python"}),i.jsx(u.Tab,{code:av,language:"javascript"}),i.jsx(u.Tab,{code:iv,language:"java"}),i.jsx(u.Tab,{code:rv,language:"cpp"})]})}),i.jsx("section",{id:"graph-bellman-ford",children:i.jsxs(u,{title:"Bellman-Ford (shortest path)",children:[i.jsx(u.Tab,{code:qb,language:"python"}),i.jsx(u.Tab,{code:Gb,language:"javascript"}),i.jsx(u.Tab,{code:Yb,language:"java"}),i.jsx(u.Tab,{code:Ib,language:"cpp"})]})}),i.jsx("section",{id:"graph-kahn",children:i.jsxs(u,{title:"Kahn (topological sort)",children:[i.jsx(u.Tab,{code:lv,language:"python"}),i.jsx(u.Tab,{code:sv,language:"javascript"}),i.jsx(u.Tab,{code:ov,language:"java"}),i.jsx(u.Tab,{code:cv,language:"cpp"})]})}),i.jsx("section",{id:"graph-kruskal",children:i.jsxs(u,{title:"Kruskal (mst)",children:[i.jsx(u.Tab,{code:uv,language:"python"}),i.jsx(u.Tab,{code:dv,language:"javascript"}),i.jsx(u.Tab,{code:fv,language:"java"}),i.jsx(u.Tab,{code:hv,language:"cpp"})]})}),i.jsx("section",{id:"graph-prim",children:i.jsxs(u,{title:"Prim (mst)",children:[i.jsx(u.Tab,{code:mv,language:"python"}),i.jsx(u.Tab,{code:gv,language:"javascript"}),i.jsx(u.Tab,{code:pv,language:"java"}),i.jsx(u.Tab,{code:bv,language:"cpp"})]})})]})}function X2(){return i.jsxs("div",{className:Fn.container,children:[i.jsx("h2",{className:Fn.sectionHeader,children:"Heap"}),i.jsx("section",{id:"heap-find-top-k-elements",children:i.jsxs(u,{title:"find top k elements",children:[i.jsx(u.Tab,{code:Nv,language:"python"}),i.jsx(u.Tab,{code:Ev,language:"javascript"}),i.jsx(u.Tab,{code:Ov,language:"java"}),i.jsx(u.Tab,{code:Av,language:"cpp"})]})})]})}function J2(){return i.jsxs("div",{className:Fn.container,children:[i.jsx("h2",{className:Fn.sectionHeader,children:"Binary Search"}),i.jsx("section",{id:"binarysearch-binary-search",children:i.jsxs(u,{title:"binary search",children:[i.jsx(u.Tab,{code:lp,language:"python"}),i.jsx(u.Tab,{code:sp,language:"javascript"}),i.jsx(u.Tab,{code:op,language:"java"}),i.jsx(u.Tab,{code:cp,language:"cpp"})]})}),i.jsx("section",{id:"binarysearch-duplicate-elements-left-insertion",children:i.jsxs(u,{title:"duplicate elements, left-most insertion point",children:[i.jsx(u.Tab,{code:vp,language:"python"}),i.jsx(u.Tab,{code:yp,language:"javascript"}),i.jsx(u.Tab,{code:xp,language:"java"}),i.jsx(u.Tab,{code:_p,language:"cpp"})]})}),i.jsx("section",{id:"binarysearch-duplicate-elements-right-insertion",children:i.jsxs(u,{title:"duplicate elements, right-most insertion point",children:[i.jsx(u.Tab,{code:Sp,language:"python"}),i.jsx(u.Tab,{code:Tp,language:"javascript"}),i.jsx(u.Tab,{code:jp,language:"java"}),i.jsx(u.Tab,{code:wp,language:"cpp"})]})}),i.jsx("section",{id:"binarysearch-greedy-minimum",children:i.jsxs(u,{title:"greedy (minimum)",children:[i.jsx(u.Tab,{code:mp,language:"python"}),i.jsx(u.Tab,{code:gp,language:"javascript"}),i.jsx(u.Tab,{code:pp,language:"java"}),i.jsx(u.Tab,{code:bp,language:"cpp"})]})}),i.jsx("section",{id:"binarysearch-greedy-maximum",children:i.jsxs(u,{title:"greedy (maximum)",children:[i.jsx(u.Tab,{code:up,language:"python"}),i.jsx(u.Tab,{code:dp,language:"javascript"}),i.jsx(u.Tab,{code:fp,language:"java"}),i.jsx(u.Tab,{code:hp,language:"cpp"})]})})]})}function Z2(){return i.jsxs("div",{className:Fn.container,children:[i.jsx("h2",{className:Fn.sectionHeader,children:"Backtracking"}),i.jsx("section",{id:"backtracking-backtracking",children:i.jsxs(u,{title:"backtracking",children:[i.jsx(u.Tab,{code:tp,language:"python"}),i.jsx(u.Tab,{code:ap,language:"javascript"}),i.jsx(u.Tab,{code:ip,language:"java"}),i.jsx(u.Tab,{code:rp,language:"cpp"})]})})]})}function P2(){return i.jsxs("div",{className:Fn.container,children:[i.jsx("h2",{className:Fn.sectionHeader,children:"Dynamic Programming"}),i.jsx("section",{id:"dp-top-down",children:i.jsxs(u,{title:"DP top-down",children:[i.jsx(u.Tab,{code:xb,language:"python"}),i.jsx(u.Tab,{code:_b,language:"javascript"}),i.jsx(u.Tab,{code:Sb,language:"java"}),i.jsx(u.Tab,{code:Tb,language:"cpp"})]})}),i.jsx("section",{id:"dp-bottom-up",children:i.jsxs(u,{title:"DP bottom-up",children:[i.jsx(u.Tab,{code:fb,language:"python"}),i.jsx(u.Tab,{code:hb,language:"javascript"}),i.jsx(u.Tab,{code:mb,language:"java"}),i.jsx(u.Tab,{code:gb,language:"cpp"})]})}),i.jsx("section",{id:"dp-kadane",children:i.jsxs(u,{title:"Kadane (max-sum subarray)",children:[i.jsx(u.Tab,{code:pb,language:"python"}),i.jsx(u.Tab,{code:bb,language:"javascript"}),i.jsx(u.Tab,{code:vb,language:"java"}),i.jsx(u.Tab,{code:yb,language:"cpp"})]})})]})}function F2(){return i.jsxs("div",{className:Fn.container,children:[i.jsx("h2",{className:Fn.sectionHeader,children:"Bit Manipulation"}),i.jsx("section",{id:"bitmanipulation-test-kth-bit",children:i.jsxs(u,{title:"test kth-bit",children:[i.jsx(u.Tab,{code:ib,language:"python"}),i.jsx(u.Tab,{code:rb,language:"javascript"}),i.jsx(u.Tab,{code:lb,language:"java"}),i.jsx(u.Tab,{code:sb,language:"cpp"})]})}),i.jsx("section",{id:"bitmanipulation-set-kth-bit",children:i.jsxs(u,{title:"set kth bit",children:[i.jsx(u.Tab,{code:Pp,language:"python"}),i.jsx(u.Tab,{code:Fp,language:"javascript"}),i.jsx(u.Tab,{code:Wp,language:"java"}),i.jsx(u.Tab,{code:$p,language:"cpp"})]})}),i.jsx("section",{id:"bitmanipulation-clear-kth-bit",children:i.jsxs(u,{title:"clear kth bit",children:[i.jsx(u.Tab,{code:kp,language:"python"}),i.jsx(u.Tab,{code:Mp,language:"javascript"}),i.jsx(u.Tab,{code:Cp,language:"java"}),i.jsx(u.Tab,{code:Rp,language:"cpp"})]})}),i.jsx("section",{id:"bitmanipulation-toggle-kth-bit",children:i.jsxs(u,{title:"toggle kth bit",children:[i.jsx(u.Tab,{code:ob,language:"python"}),i.jsx(u.Tab,{code:cb,language:"javascript"}),i.jsx(u.Tab,{code:ub,language:"java"}),i.jsx(u.Tab,{code:db,language:"cpp"})]})}),i.jsx("section",{id:"bitmanipulation-get-rightmost-bit",children:i.jsxs(u,{title:"get rightmost bit",children:[i.jsx(u.Tab,{code:Yp,language:"python"}),i.jsx(u.Tab,{code:Ip,language:"javascript"}),i.jsx(u.Tab,{code:Vp,language:"java"}),i.jsx(u.Tab,{code:Kp,language:"cpp"})]})}),i.jsx("section",{id:"bitmanipulation-count-set-bits",children:i.jsxs(u,{title:"count set bits",children:[i.jsx(u.Tab,{code:Lp,language:"python"}),i.jsx(u.Tab,{code:Dp,language:"javascript"}),i.jsx(u.Tab,{code:zp,language:"java"}),i.jsx(u.Tab,{code:Bp,language:"cpp"})]})}),i.jsx("section",{id:"bitmanipulation-multiply-power-of-two",children:i.jsxs(u,{title:"multiply by 2^k",children:[i.jsx(u.Tab,{code:Qp,language:"python"}),i.jsx(u.Tab,{code:Xp,language:"javascript"}),i.jsx(u.Tab,{code:Jp,language:"java"}),i.jsx(u.Tab,{code:Zp,language:"cpp"})]})}),i.jsx("section",{id:"bitmanipulation-divide-power-of-two",children:i.jsxs(u,{title:"divide by 2^k",children:[i.jsx(u.Tab,{code:Up,language:"python"}),i.jsx(u.Tab,{code:Hp,language:"javascript"}),i.jsx(u.Tab,{code:qp,language:"java"}),i.jsx(u.Tab,{code:Gp,language:"cpp"})]})}),i.jsx("section",{id:"bitmanipulation-check-power-of-two",children:i.jsxs(u,{title:"check if number is power of 2",children:[i.jsx(u.Tab,{code:Np,language:"python"}),i.jsx(u.Tab,{code:Ep,language:"javascript"}),i.jsx(u.Tab,{code:Op,language:"java"}),i.jsx(u.Tab,{code:Ap,language:"cpp"})]})}),i.jsx("section",{id:"bitmanipulation-swap-variables",children:i.jsxs(u,{title:"swap two variables",children:[i.jsx(u.Tab,{code:nb,language:"python"}),i.jsx(u.Tab,{code:eb,language:"javascript"}),i.jsx(u.Tab,{code:tb,language:"java"}),i.jsx(u.Tab,{code:ab,language:"cpp"})]})})]})}const W2=`def fn(matrix: list[list[int]]):
    r = len(matrix)
    c = len(matrix[0])

    create_matrix = [[0 for _ in range(c)] for _ in range(r)]
    copy_matrix = [row[:] for row in matrix]
`,$2=`def fn(matrix: list[list[int]]):
    r = len(matrix)
    c = len(matrix[0])

    main_diagonal = [matrix[i][i] for i in range(min(r, c))]
    anti_diagonal = [matrix[i][~i] for i in range(min(r, c))]
`,nw=`def fn(matrix: list[list[int]]):
    r = len(matrix)
    c = len(matrix[0])

    transpose_tuple = zip(*matrix)
    transpose = [list(row) for row in transpose_tuple]
    rotate_left = transpose[::-1]
    rotate_right = [row[::-1] for row in transpose]
`,ew=`const fn = (matrix) => {
    const r = matrix.length;
    const c = matrix[0].length;

    const createMatrix = Array.from({ length: r }, () => Array(c).fill(0))
    const copyMatrix = matrix.map(row => [...row])
}
`,tw=`const fn = (matrix) => {
    const r = matrix.length
    const c = matrix[0].length

    const mainDiagonal = Array.from({ length: Math.min(r, c) }, (_, i) => matrix[i][i])
    const antiDiagonal = Array.from({ length: Math.min(r, c) }, (_, i) => matrix[i][~i])
}
`,aw=`const fn = (matrix) => {
    const r = matrix.length
    const c = matrix[0].length

    const transposeTuple = matrix[0].map((_, i) => matrix.map(row => row[i]))
    const transpose = transposeTuple.map(row => [...row])
    const rotateLeft = transpose.reverse()
    const rotateRight = transpose.map(row => row.reverse())
}
`,iw=`import java.util.ArrayList;
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
`,rw=`import java.util.ArrayList;
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
`,lw=`import java.util.ArrayList;
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
`,sw=`#include <vector>

using namespace std;


void fn(vector<vector<int>>& matrix) {
    int r = matrix.size();
    int c = matrix[0].size();

    vector<vector<int>> create_matrix(r, vector<int>(c, 0));
    vector<vector<int>> copy_matrix(matrix);
}
`,ow=`#include <vector>

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
`,cw=`#include <vector>

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
`;function uw(){return i.jsxs("div",{className:Fn.container,children:[i.jsx("h2",{className:Fn.sectionHeader,children:"Matrix"}),i.jsx("section",{id:"matrix-create-copy",children:i.jsxs(u,{title:"create / copy",children:[i.jsx(u.Tab,{code:W2,language:"python"}),i.jsx(u.Tab,{code:ew,language:"javascript"}),i.jsx(u.Tab,{code:iw,language:"java"}),i.jsx(u.Tab,{code:sw,language:"cpp"})]})}),i.jsx("section",{id:"matrix-diagonals",children:i.jsxs(u,{title:"diagonals / anti-diagonals",children:[i.jsx(u.Tab,{code:$2,language:"python"}),i.jsx(u.Tab,{code:tw,language:"javascript"}),i.jsx(u.Tab,{code:rw,language:"java"}),i.jsx(u.Tab,{code:ow,language:"cpp"})]})}),i.jsx("section",{id:"matrix-rotate-transpose",children:i.jsxs(u,{title:"rotate / transpose",children:[i.jsx(u.Tab,{code:nw,language:"python"}),i.jsx(u.Tab,{code:aw,language:"javascript"}),i.jsx(u.Tab,{code:lw,language:"java"}),i.jsx(u.Tab,{code:cw,language:"cpp"})]})})]})}const dw=`from typing import Any


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
`,fw=`from typing import Any


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
`,hw=`from typing import Any


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
`,mw=`from typing import Any


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
`,gw=`from typing import Any


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
`,pw=`class Graph:
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
`,bw=`class Array {
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
`,vw=`class TreeNode {
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
`,yw=`class TreeNode {
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
`,xw=`class ListNode {
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
`,_w=`class ListNode {
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
`,Sw=`class Graph {
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
`,Tw=`public class Array<T> {
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
`,jw=`public class TreeNode<T> {
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
`,ww=`public class TreeNode<T extends Comparable<T>> {
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
`,Nw=`class ListNode {
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
`,Ew=`public class ListNode<T> {
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
`,Ow=`import java.util.ArrayList;
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
`,Aw=`#include <iostream>
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
`,kw=`#include <iostream>
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
`,Mw=`#include <iostream>
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
`,Cw=`#include <iostream>

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
`,Rw=`#include <iostream>
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
`,Lw=`#include <iostream>
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
`;function Dw(){return i.jsxs("div",{className:Fn.container,children:[i.jsx("h2",{className:Fn.sectionHeader,children:"Data Structures"}),i.jsx("section",{id:"ds-array",children:i.jsxs(u,{title:"array",children:[i.jsx(u.Tab,{code:dw,language:"python"}),i.jsx(u.Tab,{code:bw,language:"javascript"}),i.jsx(u.Tab,{code:Tw,language:"java"}),i.jsx(u.Tab,{code:Aw,language:"cpp"})]})}),i.jsx("section",{id:"ds-hash-map",children:i.jsxs(u,{title:"hash map",children:[i.jsx(u.Tab,{code:jb,language:"python"}),i.jsx(u.Tab,{code:wb,language:"javascript"}),i.jsx(u.Tab,{code:Nb,language:"java"}),i.jsx(u.Tab,{code:Eb,language:"cpp"})]})}),i.jsx("section",{id:"ds-linked-list",children:i.jsxs(u,{title:"linked list",children:[i.jsx(u.Tab,{code:mw,language:"python"}),i.jsx(u.Tab,{code:xw,language:"javascript"}),i.jsx(u.Tab,{code:Nw,language:"java"}),i.jsx(u.Tab,{code:Cw,language:"cpp"})]})}),i.jsx("section",{id:"ds-doubly-linked-list",children:i.jsxs(u,{title:"doubly linked list",children:[i.jsx(u.Tab,{code:gw,language:"python"}),i.jsx(u.Tab,{code:_w,language:"javascript"}),i.jsx(u.Tab,{code:Ew,language:"java"}),i.jsx(u.Tab,{code:Rw,language:"cpp"})]})}),i.jsx("section",{id:"ds-binary-tree",children:i.jsxs(u,{title:"binary tree",children:[i.jsx(u.Tab,{code:fw,language:"python"}),i.jsx(u.Tab,{code:vw,language:"javascript"}),i.jsx(u.Tab,{code:jw,language:"java"}),i.jsx(u.Tab,{code:kw,language:"cpp"})]})}),i.jsx("section",{id:"ds-binary-search-tree",children:i.jsxs(u,{title:"binary search tree",children:[i.jsx(u.Tab,{code:hw,language:"python"}),i.jsx(u.Tab,{code:yw,language:"javascript"}),i.jsx(u.Tab,{code:ww,language:"java"}),i.jsx(u.Tab,{code:Mw,language:"cpp"})]})}),i.jsx("section",{id:"ds-graph",children:i.jsxs(u,{title:"graph",children:[i.jsx(u.Tab,{code:pw,language:"python"}),i.jsx(u.Tab,{code:Sw,language:"javascript"}),i.jsx(u.Tab,{code:Ow,language:"java"}),i.jsx(u.Tab,{code:Lw,language:"cpp"})]})}),i.jsx("section",{id:"ds-union-find",children:i.jsxs(u,{title:"union find",children:[i.jsx(u.Tab,{code:Cb,language:"python"}),i.jsx(u.Tab,{code:Rb,language:"javascript"}),i.jsx(u.Tab,{code:Lb,language:"java"}),i.jsx(u.Tab,{code:Db,language:"cpp"})]})}),i.jsx("section",{id:"ds-union-find-optimized",children:i.jsxs(u,{title:"union find optimized",children:[i.jsx(u.Tab,{code:zb,language:"python"}),i.jsx(u.Tab,{code:Bb,language:"javascript"}),i.jsx(u.Tab,{code:Ub,language:"java"}),i.jsx(u.Tab,{code:Hb,language:"cpp"})]})}),i.jsx("section",{id:"ds-trie",children:i.jsxs(u,{title:"trie",children:[i.jsx(u.Tab,{code:Ob,language:"python"}),i.jsx(u.Tab,{code:Ab,language:"javascript"}),i.jsx(u.Tab,{code:kb,language:"java"}),i.jsx(u.Tab,{code:Mb,language:"cpp"})]})})]})}const zw=`import random


def bogo_sort(arr: list) -> None:
    target = sorted(arr)

    while arr != target:
        random.shuffle(arr)
`,Bw=`def bubble_sort(arr: list) -> None:
    n = len(arr)

    for i in range(n):
        swapped = False

        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True

        if not swapped:
            break
`,Uw=`def bucket_sort(arr: list) -> list:
    num_buckets = 10
    min_num = min(arr)
    max_num = max(arr)
    bucket_size = (max_num - min_num) / num_buckets
    buckets = [[] for _ in range(num_buckets)]

    for num in arr:
        index = min(int((num - min_num) / bucket_size), num_buckets - 1)
        buckets[index].append(num)

    return [num for bucket in buckets for num in sorted(bucket)]
`,Hw=`def counting_sort(arr: list) -> list:
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
`,qw=`def cube_sort(arr: list, processors: int) -> None:
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
`,Gw=`def heap_sort(arr: list) -> list:
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
`,Yw=`def insertion_sort(arr: list) -> None:
    n = len(arr)

    for i in range(1, n):
        key = arr[i]

        while i > 0 and key < arr[i - 1]:
            arr[i] = arr[i - 1]
            i -= 1

        arr[i] = key
`,Iw=`def merge_sort(arr: list) -> list:
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
`,Vw=`def pancake_sort(arr: list) -> None:
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
`,Kw=`def quick_sort(arr: list) -> list:
    n = len(arr)

    if n <= 1:
        return arr

    pivot = arr[n // 2]
    left = [x for x in arr if x < pivot]
    right = [x for x in arr if x > pivot]

    return quick_sort(left) + [pivot] + quick_sort(right)
`,Qw=`def radix_sort(arr: list) -> None:
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
`,Xw=`def selection_sort(arr: list) -> None:
    n = len(arr)

    for i in range(n):
        min_i = i

        for j in range(i + 1, n):
            if arr[j] < arr[min_i]:
                min_i = j

        if min_i != i:
            arr[i], arr[min_i] = arr[min_i], arr[i]
`,Jw=`def shell_sort(arr: list) -> None:
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
`,Zw=`from threading import Thread
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
`,Pw=`def tim_sort(arr: list) -> list:
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
`,Fw=`const bogoSort = (arr) => {
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
`,Ww=`const bubbleSort = (arr) => {
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
`,$w=`const bucketSort = (arr) => {
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
`,n3=`const countingSort = (arr) => {
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
`,e3=`const cubeSort = (arr, processors) => {
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
`,t3=`const heapSort = (arr) => {
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
`,a3=`const insertionSort = (arr) => {
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
`,i3=`const mergeSort = (arr) => {
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
`,r3=`const pancakeSort = (arr) => {
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
`,l3=`const quickSort = (arr) => {
    const n = arr.length

    if (n <= 1) {
        return arr
    }

    const pivot = arr[Math.floor(n / 2)]
    const left = arr.filter(x => x < pivot)
    const right = arr.filter(x => x > pivot)

    return [...quickSort(left), pivot, ...quickSort(right)]
}
`,s3=`const radixSort = (arr) => {
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
`,o3=`const selectionSort = (arr) => {
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
`,c3=`const shellSort = (arr) => {
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
`,u3=`const sleepSort = (arr) => {
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
`,d3=`const timSort = (arr) => {
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
`,f3=`import java.util.Arrays;
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
`,h3=`public static void bubbleSort(int[] arr) {
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
`,m3=`import java.util.ArrayList;
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
`,g3=`import java.util.Arrays;


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
`,p3=`import java.util.ArrayList;
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
`,b3=`public static int[] heapSort(int[] arr) {
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
`,v3=`public static void insertionSort(int[] arr) {
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
`,y3=`import java.util.Arrays;


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
`,x3=`public static void pancakeSort(int[] arr) {
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
`,_3=`import java.util.ArrayList;
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
`,S3=`import java.util.Arrays;


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
`,T3=`public static void selectionSort(int[] arr) {
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
`,j3=`public static void shellSort(int[] arr) {
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
`,w3=`import java.util.ArrayList;
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
`,N3=`public static int[] timSort(int[] arr) {
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
`,E3=`#include <algorithm>
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
`,O3=`#include <vector>

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
`,A3=`#include <vector>
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
`,k3=`#include <vector>
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
`,M3=`#include <vector>
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
`,C3=`#include <vector>

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
`,R3=`#include <vector>

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
`,L3=`#include <vector>

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
`,D3=`#include <vector>

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
`,z3=`#include <vector>

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
`,B3=`#include <vector>

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
`,U3=`#include <vector>

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
`,H3=`#include <vector>

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
`,q3=`#include <chrono>
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
`,G3=`#include <vector>
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
`;function Y3(){return i.jsxs("div",{className:Fn.container,children:[i.jsx("h2",{className:Fn.sectionHeader,children:"Sorting Algorithms"}),i.jsx("section",{id:"sort-bubble",children:i.jsxs(u,{title:"bubble sort",children:[i.jsx(u.Tab,{code:Bw,language:"python"}),i.jsx(u.Tab,{code:Ww,language:"javascript"}),i.jsx(u.Tab,{code:h3,language:"java"}),i.jsx(u.Tab,{code:O3,language:"cpp"})]})}),i.jsx("section",{id:"sort-selection",children:i.jsxs(u,{title:"selection sort",children:[i.jsx(u.Tab,{code:Xw,language:"python"}),i.jsx(u.Tab,{code:o3,language:"javascript"}),i.jsx(u.Tab,{code:T3,language:"java"}),i.jsx(u.Tab,{code:U3,language:"cpp"})]})}),i.jsx("section",{id:"sort-insertion",children:i.jsxs(u,{title:"insertion sort",children:[i.jsx(u.Tab,{code:Yw,language:"python"}),i.jsx(u.Tab,{code:a3,language:"javascript"}),i.jsx(u.Tab,{code:v3,language:"java"}),i.jsx(u.Tab,{code:R3,language:"cpp"})]})}),i.jsx("section",{id:"sort-shell",children:i.jsxs(u,{title:"shell sort",children:[i.jsx(u.Tab,{code:Jw,language:"python"}),i.jsx(u.Tab,{code:c3,language:"javascript"}),i.jsx(u.Tab,{code:j3,language:"java"}),i.jsx(u.Tab,{code:H3,language:"cpp"})]})}),i.jsx("section",{id:"sort-merge",children:i.jsxs(u,{title:"merge sort",children:[i.jsx(u.Tab,{code:Iw,language:"python"}),i.jsx(u.Tab,{code:i3,language:"javascript"}),i.jsx(u.Tab,{code:y3,language:"java"}),i.jsx(u.Tab,{code:L3,language:"cpp"})]})}),i.jsx("section",{id:"sort-quick",children:i.jsxs(u,{title:"quick sort",children:[i.jsx(u.Tab,{code:Kw,language:"python"}),i.jsx(u.Tab,{code:l3,language:"javascript"}),i.jsx(u.Tab,{code:_3,language:"java"}),i.jsx(u.Tab,{code:z3,language:"cpp"})]})}),i.jsx("section",{id:"sort-tim",children:i.jsxs(u,{title:"timsort",children:[i.jsx(u.Tab,{code:Pw,language:"python"}),i.jsx(u.Tab,{code:d3,language:"javascript"}),i.jsx(u.Tab,{code:N3,language:"java"}),i.jsx(u.Tab,{code:G3,language:"cpp"})]})}),i.jsx("section",{id:"sort-heap",children:i.jsxs(u,{title:"heap sort",children:[i.jsx(u.Tab,{code:Gw,language:"python"}),i.jsx(u.Tab,{code:t3,language:"javascript"}),i.jsx(u.Tab,{code:b3,language:"java"}),i.jsx(u.Tab,{code:C3,language:"cpp"})]})}),i.jsx("section",{id:"sort-counting",children:i.jsxs(u,{title:"counting sort",children:[i.jsx(u.Tab,{code:Hw,language:"python"}),i.jsx(u.Tab,{code:n3,language:"javascript"}),i.jsx(u.Tab,{code:g3,language:"java"}),i.jsx(u.Tab,{code:k3,language:"cpp"})]})}),i.jsx("section",{id:"sort-bucket",children:i.jsxs(u,{title:"bucket sort",children:[i.jsx(u.Tab,{code:Uw,language:"python"}),i.jsx(u.Tab,{code:$w,language:"javascript"}),i.jsx(u.Tab,{code:m3,language:"java"}),i.jsx(u.Tab,{code:A3,language:"cpp"})]})}),i.jsx("section",{id:"sort-radix",children:i.jsxs(u,{title:"radix sort",children:[i.jsx(u.Tab,{code:Qw,language:"python"}),i.jsx(u.Tab,{code:s3,language:"javascript"}),i.jsx(u.Tab,{code:S3,language:"java"}),i.jsx(u.Tab,{code:B3,language:"cpp"})]})}),i.jsx("section",{id:"sort-cube",children:i.jsxs(u,{title:"cubesort",children:[i.jsx(u.Tab,{code:qw,language:"python"}),i.jsx(u.Tab,{code:e3,language:"javascript"}),i.jsx(u.Tab,{code:p3,language:"java"}),i.jsx(u.Tab,{code:M3,language:"cpp"})]})}),i.jsx("section",{id:"sort-bogo",children:i.jsxs(u,{title:"bogo sort",children:[i.jsx(u.Tab,{code:zw,language:"python"}),i.jsx(u.Tab,{code:Fw,language:"javascript"}),i.jsx(u.Tab,{code:f3,language:"java"}),i.jsx(u.Tab,{code:E3,language:"cpp"})]})}),i.jsx("section",{id:"sort-pancake",children:i.jsxs(u,{title:"pancake sort",children:[i.jsx(u.Tab,{code:Vw,language:"python"}),i.jsx(u.Tab,{code:r3,language:"javascript"}),i.jsx(u.Tab,{code:x3,language:"java"}),i.jsx(u.Tab,{code:D3,language:"cpp"})]})}),i.jsx("section",{id:"sort-sleep",children:i.jsxs(u,{title:"sleep sort",children:[i.jsx(u.Tab,{code:Zw,language:"python"}),i.jsx(u.Tab,{code:u3,language:"javascript"}),i.jsx(u.Tab,{code:w3,language:"java"}),i.jsx(u.Tab,{code:q3,language:"cpp"})]})})]})}function I3(){const{isSidebarOpen:o}=cd(),{view:m}=po(),f=Vn(Bg.main,(!o||m!=="cheatsheet")&&Bg.sidebarHidden);return i.jsx("main",{className:f,children:m==="finder"?i.jsx(zj,{}):m==="pareto"?i.jsx(j2,{}):V3()})}function V3(){return i.jsxs(i.Fragment,{children:[i.jsx(q2,{}),i.jsx(G2,{}),i.jsx(Y2,{}),i.jsx(I2,{}),i.jsx(V2,{}),i.jsx(K2,{}),i.jsx(Q2,{}),i.jsx(X2,{}),i.jsx(J2,{}),i.jsx(Z2,{}),i.jsx(P2,{}),i.jsx(F2,{}),i.jsx(uw,{}),i.jsx(Dw,{}),i.jsx(Y3,{})]})}function K3(){return i.jsx(mo.StrictMode,{children:i.jsx(vx,{children:i.jsx(bx,{children:i.jsx(yx,{children:i.jsxs("div",{className:"App",children:[i.jsx(tS,{}),i.jsx(I3,{})]})})})})})}gx.createRoot(document.getElementById("root")).render(i.jsx(K3,{}));export{_r as K,X3 as M,mo as R,Sj as T,H as a,Vn as c,qT as g,i as j,sd as r,Ei as t};
