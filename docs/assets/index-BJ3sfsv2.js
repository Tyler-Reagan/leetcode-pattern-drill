(function(){const b=document.createElement("link").relList;if(b&&b.supports&&b.supports("modulepreload"))return;for(const E of document.querySelectorAll('link[rel="modulepreload"]'))d(E);new MutationObserver(E=>{for(const M of E)if(M.type==="childList")for(const C of M.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&d(C)}).observe(document,{childList:!0,subtree:!0});function p(E){const M={};return E.integrity&&(M.integrity=E.integrity),E.referrerPolicy&&(M.referrerPolicy=E.referrerPolicy),E.crossOrigin==="use-credentials"?M.credentials="include":E.crossOrigin==="anonymous"?M.credentials="omit":M.credentials="same-origin",M}function d(E){if(E.ep)return;E.ep=!0;const M=p(E);fetch(E.href,M)}})();function br(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var zu={exports:{}},bl={};var ip;function Iy(){if(ip)return bl;ip=1;var o=Symbol.for("react.transitional.element"),b=Symbol.for("react.fragment");function p(d,E,M){var C=null;if(M!==void 0&&(C=""+M),E.key!==void 0&&(C=""+E.key),"key"in E){M={};for(var L in E)L!=="key"&&(M[L]=E[L])}else M=E;return E=M.ref,{$$typeof:o,type:d,key:C,ref:E!==void 0?E:null,props:M}}return bl.Fragment=b,bl.jsx=p,bl.jsxs=p,bl}var rp;function Xy(){return rp||(rp=1,zu.exports=Iy()),zu.exports}var r=Xy(),Du={exports:{}},vl={},Lu={exports:{}},Bu={};var lp;function Qy(){return lp||(lp=1,(function(o){function b(q,dn){var F=q.length;q.push(dn);n:for(;0<F;){var An=F-1>>>1,Tn=q[An];if(0<E(Tn,dn))q[An]=dn,q[F]=Tn,F=An;else break n}}function p(q){return q.length===0?null:q[0]}function d(q){if(q.length===0)return null;var dn=q[0],F=q.pop();if(F!==dn){q[0]=F;n:for(var An=0,Tn=q.length,re=Tn>>>1;An<re;){var pe=2*(An+1)-1,ct=q[pe],v=pe+1,R=q[v];if(0>E(ct,F))v<Tn&&0>E(R,ct)?(q[An]=R,q[v]=F,An=v):(q[An]=ct,q[pe]=F,An=pe);else if(v<Tn&&0>E(R,F))q[An]=R,q[v]=F,An=v;else break n}}return dn}function E(q,dn){var F=q.sortIndex-dn.sortIndex;return F!==0?F:q.id-dn.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var M=performance;o.unstable_now=function(){return M.now()}}else{var C=Date,L=C.now();o.unstable_now=function(){return C.now()-L}}var H=[],Z=[],z=1,y=null,w=3,V=!1,B=!1,X=!1,nn=!1,xn=typeof setTimeout=="function"?setTimeout:null,cn=typeof clearTimeout=="function"?clearTimeout:null,ln=typeof setImmediate<"u"?setImmediate:null;function wn(q){for(var dn=p(Z);dn!==null;){if(dn.callback===null)d(Z);else if(dn.startTime<=q)d(Z),dn.sortIndex=dn.expirationTime,b(H,dn);else break;dn=p(Z)}}function Kn(q){if(X=!1,wn(q),!B)if(p(H)!==null)B=!0,Hn||(Hn=!0,ge());else{var dn=p(Z);dn!==null&&le(Kn,dn.startTime-q)}}var Hn=!1,un=-1,_n=5,oe=-1;function ce(){return nn?!0:!(o.unstable_now()-oe<_n)}function ie(){if(nn=!1,Hn){var q=o.unstable_now();oe=q;var dn=!0;try{n:{B=!1,X&&(X=!1,cn(un),un=-1),V=!0;var F=w;try{e:{for(wn(q),y=p(H);y!==null&&!(y.expirationTime>q&&ce());){var An=y.callback;if(typeof An=="function"){y.callback=null,w=y.priorityLevel;var Tn=An(y.expirationTime<=q);if(q=o.unstable_now(),typeof Tn=="function"){y.callback=Tn,wn(q),dn=!0;break e}y===p(H)&&d(H),wn(q)}else d(H);y=p(H)}if(y!==null)dn=!0;else{var re=p(Z);re!==null&&le(Kn,re.startTime-q),dn=!1}}break n}finally{y=null,w=F,V=!1}dn=void 0}}finally{dn?ge():Hn=!1}}}var ge;if(typeof ln=="function")ge=function(){ln(ie)};else if(typeof MessageChannel<"u"){var Ke=new MessageChannel,Ee=Ke.port2;Ke.port1.onmessage=ie,ge=function(){Ee.postMessage(null)}}else ge=function(){xn(ie,0)};function le(q,dn){un=xn(function(){q(o.unstable_now())},dn)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(q){q.callback=null},o.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_n=0<q?Math.floor(1e3/q):5},o.unstable_getCurrentPriorityLevel=function(){return w},o.unstable_next=function(q){switch(w){case 1:case 2:case 3:var dn=3;break;default:dn=w}var F=w;w=dn;try{return q()}finally{w=F}},o.unstable_requestPaint=function(){nn=!0},o.unstable_runWithPriority=function(q,dn){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var F=w;w=q;try{return dn()}finally{w=F}},o.unstable_scheduleCallback=function(q,dn,F){var An=o.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?An+F:An):F=An,q){case 1:var Tn=-1;break;case 2:Tn=250;break;case 5:Tn=1073741823;break;case 4:Tn=1e4;break;default:Tn=5e3}return Tn=F+Tn,q={id:z++,callback:dn,priorityLevel:q,startTime:F,expirationTime:Tn,sortIndex:-1},F>An?(q.sortIndex=F,b(Z,q),p(H)===null&&q===p(Z)&&(X?(cn(un),un=-1):X=!0,le(Kn,F-An))):(q.sortIndex=Tn,b(H,q),B||V||(B=!0,Hn||(Hn=!0,ge()))),q},o.unstable_shouldYield=ce,o.unstable_wrapCallback=function(q){var dn=w;return function(){var F=w;w=dn;try{return q.apply(this,arguments)}finally{w=F}}}})(Bu)),Bu}var sp;function Jy(){return sp||(sp=1,Lu.exports=Qy()),Lu.exports}var Uu={exports:{}},bn={};var op;function Zy(){if(op)return bn;op=1;var o=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),C=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),Z=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),w=Symbol.for("react.view_transition"),V=Symbol.iterator;function B(v){return v===null||typeof v!="object"?null:(v=V&&v[V]||v["@@iterator"],typeof v=="function"?v:null)}var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nn=Object.assign,xn={};function cn(v,R,sn){this.props=v,this.context=R,this.refs=xn,this.updater=sn||X}cn.prototype.isReactComponent={},cn.prototype.setState=function(v,R){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,R,"setState")},cn.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function ln(){}ln.prototype=cn.prototype;function wn(v,R,sn){this.props=v,this.context=R,this.refs=xn,this.updater=sn||X}var Kn=wn.prototype=new ln;Kn.constructor=wn,nn(Kn,cn.prototype),Kn.isPureReactComponent=!0;var Hn=Array.isArray;function un(){}var _n={H:null,A:null,T:null,S:null},oe=Object.prototype.hasOwnProperty;function ce(v,R,sn){var P=sn.ref;return{$$typeof:o,type:v,key:R,ref:P!==void 0?P:null,props:sn}}function ie(v,R){return ce(v.type,R,v.props)}function ge(v){return typeof v=="object"&&v!==null&&v.$$typeof===o}function Ke(v){var R={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(sn){return R[sn]})}var Ee=/\/+/g;function le(v,R){return typeof v=="object"&&v!==null&&v.key!=null?Ke(""+v.key):R.toString(36)}function q(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(un,un):(v.status="pending",v.then(function(R){v.status==="pending"&&(v.status="fulfilled",v.value=R)},function(R){v.status==="pending"&&(v.status="rejected",v.reason=R)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function dn(v,R,sn,P,fn){var Mn=typeof v;(Mn==="undefined"||Mn==="boolean")&&(v=null);var En=!1;if(v===null)En=!0;else switch(Mn){case"bigint":case"string":case"number":En=!0;break;case"object":switch(v.$$typeof){case o:case b:En=!0;break;case z:return En=v._init,dn(En(v._payload),R,sn,P,fn)}}if(En)return fn=fn(v),En=P===""?"."+le(v,0):P,Hn(fn)?(sn="",En!=null&&(sn=En.replace(Ee,"$&/")+"/"),dn(fn,R,sn,"",function($e){return $e})):fn!=null&&(ge(fn)&&(fn=ie(fn,sn+(fn.key==null||v&&v.key===fn.key?"":(""+fn.key).replace(Ee,"$&/")+"/")+En)),R.push(fn)),1;En=0;var en=P===""?".":P+":";if(Hn(v))for(var hn=0;hn<v.length;hn++)P=v[hn],Mn=en+le(P,hn),En+=dn(P,R,sn,Mn,fn);else if(hn=B(v),typeof hn=="function")for(v=hn.call(v),hn=0;!(P=v.next()).done;)P=P.value,Mn=en+le(P,hn++),En+=dn(P,R,sn,Mn,fn);else if(Mn==="object"){if(typeof v.then=="function")return dn(q(v),R,sn,P,fn);throw R=String(v),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.")}return En}function F(v,R,sn){if(v==null)return v;var P=[],fn=0;return dn(v,P,"","",function(Mn){return R.call(sn,Mn,fn++)}),P}function An(v){if(v._status===-1){var R=v._result,sn=R();sn.then(function(P){(v._status===0||v._status===-1)&&(v._status=1,v._result=P,sn.status===void 0&&(sn.status="fulfilled",sn.value=P))},function(P){(v._status===0||v._status===-1)&&(v._status=2,v._result=P,sn.status===void 0&&(sn.status="rejected",sn.reason=P))}),v._status===-1&&(v._status=0,v._result=sn)}if(v._status===1)return v._result.default;throw v._result}var Tn=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var R=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(R))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)};function re(v){var R=_n.T,sn={};sn.types=R!==null?R.types:null,_n.T=sn;try{var P=v(),fn=_n.S;fn!==null&&fn(sn,P),typeof P=="object"&&P!==null&&typeof P.then=="function"&&P.then(un,Tn)}catch(Mn){Tn(Mn)}finally{R!==null&&sn.types!==null&&(R.types=sn.types),_n.T=R}}function pe(v){var R=_n.T;if(R!==null){var sn=R.types;sn===null?R.types=[v]:sn.indexOf(v)===-1&&sn.push(v)}else re(pe.bind(null,v))}var ct={map:F,forEach:function(v,R,sn){F(v,function(){R.apply(this,arguments)},sn)},count:function(v){var R=0;return F(v,function(){R++}),R},toArray:function(v){return F(v,function(R){return R})||[]},only:function(v){if(!ge(v))throw Error("React.Children.only expected to receive a single React element child.");return v}};return bn.Activity=y,bn.Children=ct,bn.Component=cn,bn.Fragment=p,bn.Profiler=E,bn.PureComponent=wn,bn.StrictMode=d,bn.Suspense=H,bn.ViewTransition=w,bn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=_n,bn.__COMPILER_RUNTIME={__proto__:null,c:function(v){return _n.H.useMemoCache(v)}},bn.addTransitionType=pe,bn.cache=function(v){return function(){return v.apply(null,arguments)}},bn.cacheSignal=function(){return null},bn.cloneElement=function(v,R,sn){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var P=nn({},v.props),fn=v.key;if(R!=null)for(Mn in R.key!==void 0&&(fn=""+R.key),R)!oe.call(R,Mn)||Mn==="key"||Mn==="__self"||Mn==="__source"||Mn==="ref"&&R.ref===void 0||(P[Mn]=R[Mn]);var Mn=arguments.length-2;if(Mn===1)P.children=sn;else if(1<Mn){for(var En=Array(Mn),en=0;en<Mn;en++)En[en]=arguments[en+2];P.children=En}return ce(v.type,fn,P)},bn.createContext=function(v){return v={$$typeof:C,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:M,_context:v},v},bn.createElement=function(v,R,sn){var P,fn={},Mn=null;if(R!=null)for(P in R.key!==void 0&&(Mn=""+R.key),R)oe.call(R,P)&&P!=="key"&&P!=="__self"&&P!=="__source"&&(fn[P]=R[P]);var En=arguments.length-2;if(En===1)fn.children=sn;else if(1<En){for(var en=Array(En),hn=0;hn<En;hn++)en[hn]=arguments[hn+2];fn.children=en}if(v&&v.defaultProps)for(P in En=v.defaultProps,En)fn[P]===void 0&&(fn[P]=En[P]);return ce(v,Mn,fn)},bn.createRef=function(){return{current:null}},bn.forwardRef=function(v){return{$$typeof:L,render:v}},bn.isValidElement=ge,bn.lazy=function(v){return{$$typeof:z,_payload:{_status:-1,_result:v},_init:An}},bn.memo=function(v,R){return{$$typeof:Z,type:v,compare:R===void 0?null:R}},bn.startTransition=re,bn.unstable_useCacheRefresh=function(){return _n.H.useCacheRefresh()},bn.use=function(v){return _n.H.use(v)},bn.useActionState=function(v,R,sn){return _n.H.useActionState(v,R,sn)},bn.useCallback=function(v,R){return _n.H.useCallback(v,R)},bn.useContext=function(v){return _n.H.useContext(v)},bn.useDebugValue=function(){},bn.useDeferredValue=function(v,R){return _n.H.useDeferredValue(v,R)},bn.useEffect=function(v,R){return _n.H.useEffect(v,R)},bn.useEffectEvent=function(v){return _n.H.useEffectEvent(v)},bn.useId=function(){return _n.H.useId()},bn.useImperativeHandle=function(v,R,sn){return _n.H.useImperativeHandle(v,R,sn)},bn.useInsertionEffect=function(v,R){return _n.H.useInsertionEffect(v,R)},bn.useLayoutEffect=function(v,R){return _n.H.useLayoutEffect(v,R)},bn.useMemo=function(v,R){return _n.H.useMemo(v,R)},bn.useOptimistic=function(v,R){return _n.H.useOptimistic(v,R)},bn.useReducer=function(v,R,sn){return _n.H.useReducer(v,R,sn)},bn.useRef=function(v){return _n.H.useRef(v)},bn.useState=function(v){return _n.H.useState(v)},bn.useSyncExternalStore=function(v,R,sn){return _n.H.useSyncExternalStore(v,R,sn)},bn.useTransition=function(){return _n.H.useTransition()},bn.version="19.3.1",bn}var cp;function Pu(){return cp||(cp=1,Uu.exports=Zy()),Uu.exports}var Hu={exports:{}},Ve={};var up;function Fy(){if(up)return Ve;up=1;var o=Pu();function b(z){var y="https://react.dev/errors/"+z;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)y+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+z+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(){}var d={d:{f:p,r:function(){throw Error(b(522))},D:p,C:p,L:p,m:p,X:p,S:p,M:p},p:0,findDOMNode:null},E=Symbol.for("react.portal"),M=Symbol.for("react.recoverable"),C=Symbol.for("react.optimistic_key");function L(z,y,w){var V=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:E,key:V==null?null:V===C?C:""+V,children:z,containerInfo:y,implementation:w}}var H=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Z(z,y){if(z==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Ve.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Ve.browser=function(z){return{$$typeof:M,_reason:z}},Ve.createPortal=function(z,y){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(b(299));return L(z,y,null,w)},Ve.flushSync=function(z){var y=H.T,w=d.p;try{if(H.T=null,d.p=2,z)return z()}finally{H.T=y,d.p=w,d.d.f()}},Ve.preconnect=function(z,y){typeof z=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,d.d.C(z,y))},Ve.prefetchDNS=function(z){typeof z=="string"&&d.d.D(z)},Ve.preinit=function(z,y){if(typeof z=="string"&&y&&typeof y.as=="string"){var w=y.as,V=Z(w,y.crossOrigin),B=typeof y.integrity=="string"?y.integrity:void 0,X=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;w==="style"?d.d.S(z,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:V,integrity:B,fetchPriority:X}):w==="script"&&d.d.X(z,{crossOrigin:V,integrity:B,fetchPriority:X,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Ve.preinitModule=function(z,y){if(typeof z=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var w=Z(y.as,y.crossOrigin);d.d.M(z,{crossOrigin:w,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0})}}else y==null&&d.d.M(z)},Ve.preload=function(z,y){if(typeof z=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var w=y.as,V=Z(w,y.crossOrigin);d.d.L(z,w,{crossOrigin:V,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Ve.preloadModule=function(z,y){if(typeof z=="string")if(y){var w=Z(y.as,y.crossOrigin);d.d.m(z,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:w,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0})}else d.d.m(z)},Ve.requestFormReset=function(z){d.d.r(z)},Ve.unstable_batchedUpdates=function(z,y){return z(y)},Ve.useFormState=function(z,y,w){return H.H.useFormState(z,y,w)},Ve.useFormStatus=function(){return H.H.useHostTransitionStatus()},Ve.version="19.3.1",Ve}var dp;function Mp(){if(dp)return Hu.exports;dp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(b){console.error(b)}}return o(),Hu.exports=Fy(),Hu.exports}var fp;function Py(){if(fp)return vl;fp=1;var o=Jy(),b=Pu(),p=Mp();function d(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function E(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function M(n){for(var e=n,t=e;t&&!t.alternate;)e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;for(;e.return;)e=e.return;return e.tag===3?n:null}function C(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function L(n){if(n.tag===31){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function H(n){if(M(n)!==n)throw Error(d(188))}function Z(n){var e=n.alternate;if(!e){if(e=M(n),e===null)throw Error(d(188));return e!==n?null:n}for(var t=n,a=e;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(a=i.return,a!==null){t=a;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return H(i),n;if(l===a)return H(i),e;l=l.sibling}throw Error(d(188))}if(t.return!==a.return)t=i,a=l;else{for(var s=!1,c=i.child;c;){if(c===t){s=!0,t=i,a=l;break}if(c===a){s=!0,a=i,t=l;break}c=c.sibling}if(!s){for(c=l.child;c;){if(c===t){s=!0,t=l,a=i;break}if(c===a){s=!0,a=l,t=i;break}c=c.sibling}if(!s)throw Error(d(189))}}if(t.alternate!==a)throw Error(d(190))}if(t.tag!==3)throw Error(d(188));return t.stateNode.current===t?n:e}function z(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n;for(n=n.child;n!==null;){if(e=z(n),e!==null)return e;n=n.sibling}return null}function y(n,e,t,a,i,l){for(;n!==null;){if((n.tag===5||n.tag===27||n.tag===6)&&t(n,a,i,l)||(n.tag!==22||n.memoizedState===null)&&(e||n.tag!==5&&n.tag!==27)&&y(n.child,e,t,a,i,l))return!0;n=n.sibling}return!1}function w(n){for(n=n.return;n!==null;){if(n.tag===3||n.tag===5||n.tag===27)return n;n=n.return}return null}function V(n){var e=!1;for(n=n.return;n!==null&&(n.tag===4&&(e=!0),!(n.tag===3||n.tag===5||n.tag===27));)n=n.return;return e}function B(n){var e=[null,null],t=w(n);return t===null||X(e,n,t.child,{foundSelf:!1}),e}function X(n,e,t,a){for(;t!==null;){if(t===e)a.foundSelf=!0;else if(t.tag===5||t.tag===27||t.tag===6){if(a.foundSelf)return n[1]=t,!0;n[0]=t}else if((t.tag!==22||t.memoizedState===null)&&X(n,e,t.child,a))return!0;t=t.sibling}return!1}function nn(n){switch(n.tag){case 5:case 27:case 6:return n.stateNode;case 3:return n.stateNode.containerInfo;default:throw Error(d(559))}}var xn=null,cn=null;function ln(n,e,t){return n===t?!0:n===e?(xn=n,!0):!1}function wn(n,e,t){return n===t?(cn=n,!1):n===e?(cn!==null&&(xn=n),!0):!1}function Kn(n){if(n===null)return null;do n=n===null?null:n.return;while(n&&n.tag!==5&&n.tag!==27&&n.tag!==3);return n||null}function Hn(n,e,t){for(var a=0,i=n;i;i=t(i))a++;i=0;for(var l=e;l;l=t(l))i++;for(;0<a-i;)n=t(n),a--;for(;0<i-a;)e=t(e),i--;for(;a--;){if(n===e||e!==null&&n===e.alternate)return n;n=t(n),e=t(e)}return null}var un=Object.assign,_n=Symbol.for("react.element"),oe=Symbol.for("react.transitional.element"),ce=Symbol.for("react.portal"),ie=Symbol.for("react.fragment"),ge=Symbol.for("react.strict_mode"),Ke=Symbol.for("react.profiler"),Ee=Symbol.for("react.consumer"),le=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),dn=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),An=Symbol.for("react.memo"),Tn=Symbol.for("react.lazy"),re=Symbol.for("react.activity"),pe=Symbol.for("react.legacy_hidden"),ct=Symbol.for("react.memo_cache_sentinel"),v=Symbol.for("react.view_transition"),R=Symbol.for("react.recoverable"),sn=Symbol.iterator;function P(n){return n===null||typeof n!="object"?null:(n=sn&&n[sn]||n["@@iterator"],typeof n=="function"?n:null)}var fn=Symbol.for("react.client.reference");function Mn(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===fn?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ie:return"Fragment";case Ke:return"Profiler";case ge:return"StrictMode";case dn:return"Suspense";case F:return"SuspenseList";case re:return"Activity";case v:return"ViewTransition"}if(typeof n=="object")switch(n.$$typeof){case ce:return"Portal";case le:return n.displayName||"Context";case Ee:return(n._context.displayName||"Context")+".Consumer";case q:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case An:return e=n.displayName||null,e!==null?e:Mn(n.type)||"Memo";case Tn:e=n._payload,n=n._init;try{return Mn(n(e))}catch{}}return null}var En=Array.isArray,en=b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,hn=p.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$e={pending:!1,data:null,method:null,action:null},Wa=[],va=-1;function vt(n){return{current:n}}function Oe(n){0>va||(n.current=Wa[va],Wa[va]=null,va--)}function Pn(n,e){va++,Wa[va]=n.current,n.current=e}var yt=vt(null),ya=vt(null),Ht=vt(null),Si=vt(null);function $a(n,e){switch(Pn(Ht,e),Pn(ya,n),Pn(yt,null),e.nodeType){case 9:case 11:n=(n=e.documentElement)&&(n=n.namespaceURI)?hg(n):0;break;default:if(n=e.tagName,e=e.namespaceURI)e=hg(e),n=gg(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Oe(yt),Pn(yt,n)}function nt(){Oe(yt),Oe(ya),Oe(Ht)}function ji(n){var e=n.memoizedState;e!==null&&(dr._currentValue=e.memoizedState,Pn(Si,n)),e=yt.current;var t=gg(e,n.type);e!==t&&(Pn(ya,n),Pn(yt,t))}function kt(n){ya.current===n&&(Oe(yt),Oe(ya)),Si.current===n&&(Oe(Si),dr._currentValue=$e)}var xa,vr;function qt(n){if(xa===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);xa=e&&e[1]||"",vr=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xa+n+vr}var yr=!1;function xr(n,e){if(!n||yr)return"";yr=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(Y){var x=Y}Reflect.construct(n,[],A)}else{try{A.call()}catch(Y){x=Y}A=!1;try{var j=Object.getOwnPropertyDescriptor(n.prototype,"props");Object.defineProperty(n.prototype,"props",{configurable:!0,set:function(){throw Error()}}),A=!0,new n}finally{A&&(j!==void 0?Object.defineProperty(n.prototype,"props",j):delete n.prototype.props)}}}else{try{throw Error()}catch(Y){x=Y}(A=n())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(Y){if(Y&&x&&typeof Y.stack=="string")return[Y.stack,x.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=a.DetermineComponentFrameRoot(),s=l[0],c=l[1];if(s&&c){var f=s.split(`
`),T=c.split(`
`);for(i=a=0;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;for(;i<T.length&&!T[i].includes("DetermineComponentFrameRoot");)i++;if(a===f.length||i===T.length)for(a=f.length-1,i=T.length-1;1<=a&&0<=i&&f[a]!==T[i];)i--;for(;1<=a&&0<=i;a--,i--)if(f[a]!==T[i]){if(a!==1||i!==1)do if(a--,i--,0>i||f[a]!==T[i]){var N=`
`+f[a].replace(" at new "," at ");return n.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",n.displayName)),N}while(1<=a&&0<=i);break}}}finally{yr=!1,Error.prepareStackTrace=t}return(t=n?n.displayName||n.name:"")?qt(t):""}function oo(n,e){switch(n.tag){case 26:case 27:case 5:return qt(n.type);case 16:return qt("Lazy");case 13:return n.child!==e&&e!==null?qt("Suspense Fallback"):qt("Suspense");case 19:return qt("SuspenseList");case 0:case 15:return xr(n.type,!1);case 11:return xr(n.type.render,!1);case 1:return xr(n.type,!0);case 31:return qt("Activity");case 30:return qt("ViewTransition");default:return""}}function Sl(n){try{var e="",t=null;do e+=oo(n,t),t=n,n=n.return;while(n);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Ni=Object.prototype.hasOwnProperty,_r=o.unstable_scheduleCallback,Tr=o.unstable_cancelCallback,co=o.unstable_shouldYield,Sr=o.unstable_requestPaint,Ie=o.unstable_now,jl=o.unstable_getCurrentPriorityLevel,Nl=o.unstable_ImmediatePriority,jr=o.unstable_UserBlockingPriority,Mt=o.unstable_NormalPriority,h=o.unstable_LowPriority,k=o.unstable_IdlePriority,K=o.log,mn=o.unstable_setDisableYieldValue,ne=null,Ln=null;function W(n){if(typeof K=="function"&&mn(n),Ln&&typeof Ln.setStrictMode=="function")try{Ln.setStrictMode(ne,n)}catch{}}var G=Math.clz32?Math.clz32:de,pn=Math.log,ye=Math.LN2;function de(n){return n>>>=0,n===0?32:31-(pn(n)/ye|0)|0}var Gt=256,_a=262144,Ta=4194304;function $t(n){var e=n&42;if(e!==0)return e;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&-n;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Sa(n,e,t){var a=n.pendingLanes;if(a===0)return 0;var i=0,l=n.suspendedLanes,s=n.pingedLanes;n=n.warmLanes;var c=a&134217727;return c!==0?(a=c&~l,a!==0?i=$t(a):(s&=c,s!==0?i=$t(s):t||(t=c&~n,t!==0&&(i=$t(t))))):(c=a&~l,c!==0?i=$t(c):s!==0?i=$t(s):t||(t=a&~n,t!==0&&(i=$t(t)))),i===0?0:e!==0&&e!==i&&(e&l)===0&&(l=i&-i,t=e&-e,l>=t||l===32&&(t&4194048)!==0)?e:i}function ni(n,e){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&e)===0}function wl(n,e){(e&8)!==0&&(e|=e&32);var t=n.entangledLanes;if(t!==0)for(n=n.entanglements,t&=e;0<t;){var a=31-G(t),i=1<<a;e|=n[a],t&=~i}return e}function uo(n,e){switch(n){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nr(){var n=Ta;return Ta<<=1,(Ta&62914560)===0&&(Ta=4194304),n}function ja(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ei(n,e){n.pendingLanes|=e,e!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function fo(n,e,t,a,i,l){var s=n.pendingLanes;n.pendingLanes=t,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=t,n.entangledLanes&=t,n.errorRecoveryDisabledLanes&=t,n.shellSuspendCounter=0;var c=n.entanglements,f=n.expirationTimes,T=n.hiddenUpdates;for(t=s&~t;0<t;){var N=31-G(t),A=1<<N;c[N]=0,f[N]=-1;var x=T[N];if(x!==null)for(T[N]=null,N=0;N<x.length;N++){var j=x[N];j!==null&&(j.lane&=-536870913)}t&=~A}a!==0&&El(n,a,0),l!==0&&i===0&&n.tag!==0&&(n.suspendedLanes|=l&~(s&~e))}function El(n,e,t){n.pendingLanes|=e,n.suspendedLanes&=~e;var a=31-G(e);n.entangledLanes|=e,n.entanglements[a]=n.entanglements[a]|1073741824|t&261930}function Ct(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var a=31-G(t),i=1<<a;i&e|n[a]&e&&(n[a]|=e),t&=~i}}function wr(n,e){var t=e&-e;return t=(t&42)!==0?1:wi(t),(t&(n.suspendedLanes|e))!==0?0:t}function wi(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Er(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Ol(){var n=hn.p;return n!==0?n:(n=window.event,n===void 0?32:Pg(n.type))}function Al(n,e){var t=hn.p;try{return hn.p=n,e()}finally{hn.p=t}}var et=Math.random().toString(36).slice(2),Ae="__reactFiber$"+et,D="__reactProps$"+et,an="__reactContainer$"+et,kn="__reactEvents$"+et,Wn="__reactListeners$"+et,me="__reactHandles$"+et,tt="__reactResources$"+et,at="__reactMarker$"+et,na="__reactLoad$"+et;function Me(n){delete n[Ae],delete n[D],delete n[Wn],delete n[me]}function Ce(n){var e;if(e=n[Ae])return e;for(var t=n.parentNode;t;){if(e=t[an]||t[Ae]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Mg(n);n!==null;){if(t=n[Ae])return t;n=Mg(n)}return e}n=t,t=n.parentNode}return null}function ea(n){if(n=n[Ae]||n[an]){var e=n.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return n}return null}function Na(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n.stateNode;throw Error(d(33))}function ta(n){var e=n[tt];return e||(e=n[tt]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function xe(n){n[at]=!0}function kl(n){n[na]=void 0}var Ml=new Set,Cl={};function xt(n,e){aa(n,e),aa(n+"Capture",e)}function aa(n,e){for(Cl[n]=e,n=0;n<e.length;n++)Ml.add(e[n])}var _t=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Rl={},Ei={};function yn(n){return Ni.call(Ei,n)?!0:Ni.call(Rl,n)?!1:_t.test(n)?Ei[n]=!0:(Rl[n]=!0,!1)}var Bn=!1;function _e(){var n=Bn;return Bn=!1,n}function qn(n,e,t){if(yn(e))if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":n.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){n.removeAttribute(e);return}}n.setAttribute(e,t)}}function ia(n,e,t){if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttribute(e,t)}}function Le(n,e,t,a){if(a===null)n.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttributeNS(e,t,a)}}function Be(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Oi(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function I(n,e,t){var a=Object.getOwnPropertyDescriptor(n.constructor.prototype,e);if(!n.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,l=a.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){t=""+s,l.call(this,s)}}),Object.defineProperty(n,e,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(s){t=""+s},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function rn(n){if(!n._valueTracker){var e=Oi(n)?"checked":"value";n._valueTracker=I(n,e,""+n[e])}}function Sn(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),a="";return n&&(a=Oi(n)?n.checked?"true":"false":n.value),n=a,n!==t?(e.setValue(n),!0):!1}var Gn=/[\n"\\]/g;function Qn(n){return n.replace(Gn,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ut(n,e,t,a,i,l,s,c){n.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?n.type=s:n.removeAttribute("type"),e!=null?s==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+Be(e)):n.value!==""+Be(e)&&(n.value=""+Be(e)):s!=="submit"&&s!=="reset"||n.removeAttribute("value"),e!=null?s==="number"&&n.value==e?Or(n,Be(n.value)):Or(n,Be(e)):t!=null?Or(n,Be(t)):a!=null&&n.removeAttribute("value"),i==null&&l!=null&&(n.defaultChecked=!!l),i!=null&&(n.checked=i&&typeof i!="function"&&typeof i!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?n.name=""+Be(c):n.removeAttribute("name")}function zl(n,e,t,a,i,l,s,c){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(n.type=l),e!=null||t!=null){if(!(l!=="submit"&&l!=="reset"||e!=null)){rn(n);return}t=t!=null?""+Be(t):"",e=e!=null?""+Be(e):t,c||e===n.value||(n.value=e),n.defaultValue=e}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,n.checked=c?n.checked:!!a,n.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(n.name=s),rn(n)}function Or(n,e){n.defaultValue!==""+e&&(n.defaultValue=""+e)}function Ai(n,e,t,a){if(n=n.options,e){e={};for(var i=0;i<t.length;i++)e["$"+t[i]]=!0;for(t=0;t<n.length;t++)i=e.hasOwnProperty("$"+n[t].value),n[t].selected!==i&&(n[t].selected=i),i&&a&&(n[t].defaultSelected=!0)}else{for(t=""+Be(t),e=null,i=0;i<n.length;i++){if(n[i].value===t){n[i].selected=!0,a&&(n[i].defaultSelected=!0);return}e!==null||n[i].disabled||(e=n[i])}e!==null&&(e.selected=!0)}}function td(n,e,t){if(e!=null&&(e=""+Be(e),e!==n.value&&(n.value=e),t==null)){n.defaultValue!==e&&(n.defaultValue=e);return}n.defaultValue=t!=null?""+Be(t):""}function ad(n,e,t,a){if(e==null){if(a!=null){if(t!=null)throw Error(d(92));if(En(a)){if(1<a.length)throw Error(d(93));a=a[0]}t=a}t==null&&(t=""),e=t}t=Be(e),n.defaultValue=t,a=n.textContent,a===t&&a!==""&&a!==null&&(n.value=a),rn(n)}function ki(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var hv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function id(n,e,t){var a=e.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?n.setProperty(e,""):e==="float"?n.cssFloat="":n[e]="":a?n.setProperty(e,t):typeof t!="number"||t===0||hv.has(e)?e==="float"?n.cssFloat=t:n[e]=(""+t).trim():n[e]=t+"px"}function rd(n,e,t){if(e!=null&&typeof e!="object")throw Error(d(62));if(n=n.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="",Bn=!0);for(var i in e)a=e[i],e.hasOwnProperty(i)&&t[i]!==a&&(id(n,i,a),Bn=!0)}else for(var l in e)e.hasOwnProperty(l)&&id(n,l,e[l])}function ho(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),pv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Dl(n){return pv.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function Yt(){}var go=null;function po(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Mi=null,Ci=null;function ld(n){var e=ea(n);if(e&&(n=e.stateNode)){var t=n[D]||null;n:switch(n=e.stateNode,e.type){case"input":if(ut(n,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Qn(""+e)+'"][type="radio"]'),e=0;e<t.length;e++){var a=t[e];if(a!==n&&a.form===n.form){var i=a[D]||null;if(!i)throw Error(d(90));ut(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<t.length;e++)a=t[e],a.form===n.form&&Sn(a)}break n;case"textarea":td(n,t.value,t.defaultValue);break n;case"select":e=t.value,e!=null&&Ai(n,!!t.multiple,e,!1)}}}var mo=!1;function sd(n,e,t){if(mo)return n(e,t);mo=!0;try{var a=n(e);return a}finally{if(mo=!1,(Mi!==null||Ci!==null)&&(Ds(),Mi&&(e=Mi,n=Ci,Ci=Mi=null,ld(e),n)))for(e=0;e<n.length;e++)ld(n[e])}}function Ar(n,e){var t=n.stateNode;if(t===null)return null;var a=t[D]||null;if(a===null)return null;t=a[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(n=n.type,a=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!a;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(d(231,e,typeof t));return t}var ra=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bo=!1;if(ra)try{var kr={};Object.defineProperty(kr,"passive",{get:function(){bo=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{bo=!1}var wa=null,vo=null,Ll=null;function od(){if(Ll)return Ll;var n,e=vo,t=e.length,a,i="value"in wa?wa.value:wa.textContent,l=i.length;for(n=0;n<t&&e[n]===i[n];n++);var s=t-n;for(a=1;a<=s&&e[t-a]===i[l-a];a++);return Ll=i.slice(n,1<a?1-a:void 0)}function Bl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ul(){return!0}function cd(){return!1}function Qe(n){function e(t,a,i,l,s){this._reactName=t,this._targetInst=i,this.type=a,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var c in n)n.hasOwnProperty(c)&&(t=n[c],this[c]=t?t(l):l[c]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Ul:cd,this.isPropagationStopped=cd,this}return un(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ul)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ul)},persist:function(){},isPersistent:Ul}),e}var Ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hl=Qe(Ea),Mr=un({},Ea,{view:0,detail:0}),mv=Qe(Mr),yo,xo,Cr,ql=un({},Mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:To,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Cr&&(Cr&&n.type==="mousemove"?(yo=n.screenX-Cr.screenX,xo=n.screenY-Cr.screenY):xo=yo=0,Cr=n),yo)},movementY:function(n){return"movementY"in n?n.movementY:xo}}),ud=Qe(ql),bv=un({},ql,{dataTransfer:0}),vv=Qe(bv),yv=un({},Mr,{relatedTarget:0}),_o=Qe(yv),xv=un({},Ea,{animationName:0,elapsedTime:0,pseudoElement:0}),_v=Qe(xv),Tv=un({},Ea,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Sv=Qe(Tv),jv=un({},Ea,{data:0}),dd=Qe(jv),Nv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ev={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ov(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Ev[n])?!!e[n]:!1}function To(){return Ov}var Av=un({},Mr,{key:function(n){if(n.key){var e=Nv[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Bl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?wv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:To,charCode:function(n){return n.type==="keypress"?Bl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Bl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),kv=Qe(Av),Mv=un({},ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fd=Qe(Mv),Cv=un({},Ea,{submitter:0}),Rv=Qe(Cv),zv=un({},Mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:To}),Dv=Qe(zv),Lv=un({},Ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bv=Qe(Lv),Uv=un({},ql,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Hv=Qe(Uv),qv=un({},Ea,{newState:0,oldState:0,source:0}),Gv=Qe(qv),Yv=[9,13,27,32],So=ra&&"CompositionEvent"in window,Rr=null;ra&&"documentMode"in document&&(Rr=document.documentMode);var Vv=ra&&"TextEvent"in window&&!Rr,hd=ra&&(!So||Rr&&8<Rr&&11>=Rr),gd=" ",pd=!1;function md(n,e){switch(n){case"keyup":return Yv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ri=!1;function Kv(n,e){switch(n){case"compositionend":return bd(e);case"keypress":return e.which!==32?null:(pd=!0,gd);case"textInput":return n=e.data,n===gd&&pd?null:n;default:return null}}function Iv(n,e){if(Ri)return n==="compositionend"||!So&&md(n,e)?(n=od(),Ll=vo=wa=null,Ri=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hd&&e.locale!=="ko"?null:e.data;default:return null}}var Xv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vd(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Xv[n.type]:e==="textarea"}function yd(n,e,t,a){Mi?Ci?Ci.push(a):Ci=[a]:Mi=a,e=Gs(e,"onChange"),0<e.length&&(t=new Hl("onChange","change",null,t,a),n.push({event:t,listeners:e}))}var zr=null,Dr=null;function Qv(n){sg(n,0)}function Gl(n){var e=Na(n);if(Sn(e))return n}function xd(n,e){if(n==="change")return e}var _d=!1;if(ra){var jo;if(ra){var No="oninput"in document;if(!No){var Td=document.createElement("div");Td.setAttribute("oninput","return;"),No=typeof Td.oninput=="function"}jo=No}else jo=!1;_d=jo&&(!document.documentMode||9<document.documentMode)}function Sd(){zr&&(zr.detachEvent("onpropertychange",jd),Dr=zr=null)}function jd(n){if(n.propertyName==="value"&&Gl(Dr)){var e=[];yd(e,Dr,n,po(n)),sd(Qv,e)}}function Jv(n,e,t){n==="focusin"?(Sd(),zr=e,Dr=t,zr.attachEvent("onpropertychange",jd)):n==="focusout"&&Sd()}function Zv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Gl(Dr)}function Fv(n,e){if(n==="click")return Gl(e)}function Pv(n,e){if(n==="input"||n==="change")return Gl(e)}function Wv(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var dt=typeof Object.is=="function"?Object.is:Wv;function Lr(n,e){if(dt(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),a=Object.keys(e);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var i=t[a];if(!Ni.call(e,i)||!dt(n[i],e[i]))return!1}return!0}function wo(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Nd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function wd(n,e){var t=Nd(n);n=0;for(var a;t;){if(t.nodeType===3){if(a=n+t.textContent.length,n<=e&&a>=e)return{node:t,offset:e-n};n=a}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=Nd(t)}}function Ed(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Ed(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Od(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var e=wo(n.document);e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=wo(n.document)}return e}function Eo(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}var $v=ra&&"documentMode"in document&&11>=document.documentMode,zi=null,Oo=null,Br=null,Ao=!1;function Ad(n,e,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ao||zi==null||zi!==wo(a)||(a=zi,"selectionStart"in a&&Eo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Br&&Lr(Br,a)||(Br=a,a=Gs(Oo,"onSelect"),0<a.length&&(e=new Hl("onSelect","select",null,e,t),n.push({event:e,listeners:a}),e.target=zi)))}function ti(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Di={animationend:ti("Animation","AnimationEnd"),animationiteration:ti("Animation","AnimationIteration"),animationstart:ti("Animation","AnimationStart"),transitionrun:ti("Transition","TransitionRun"),transitionstart:ti("Transition","TransitionStart"),transitioncancel:ti("Transition","TransitionCancel"),transitionend:ti("Transition","TransitionEnd")},ko={},kd={};ra&&(kd=document.createElement("div").style,"AnimationEvent"in window||(delete Di.animationend.animation,delete Di.animationiteration.animation,delete Di.animationstart.animation),"TransitionEvent"in window||delete Di.transitionend.transition);function ai(n){if(ko[n])return ko[n];if(!Di[n])return n;var e=Di[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in kd)return ko[n]=e[t];return n}var Md=ai("animationend"),Cd=ai("animationiteration"),Rd=ai("animationstart"),n1=ai("transitionrun"),e1=ai("transitionstart"),t1=ai("transitioncancel"),zd=ai("transitionend"),Dd=new Map,Mo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mo.push("scrollEnd");function Rt(n,e){Dd.set(n,e),xt(e,[n])}var a1=0;function la(n,e){if(n.name!=null&&n.name!=="auto")return n.name;if(e.autoName!==null)return e.autoName;n=Bt.identifierPrefix;var t=a1++;return n="_"+n+"t_"+t.toString(32)+"_",e.autoName=n}function Ld(n){if(n==null||typeof n=="string")return n;var e=null,t=er;if(t!==null)for(var a=0;a<t.length;a++){var i=n[t[a]];if(i!=null){if(i==="none")return"none";e=e==null?i:e+(" "+i)}}return e??n.default}function sa(n,e){return n=Ld(n),e=Ld(e),e==null?n==="auto"?null:n:e==="auto"?null:e}var Yl=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},Tt=[],Li=0,Co=0;function Vl(){for(var n=Li,e=Co=Li=0;e<n;){var t=Tt[e];Tt[e++]=null;var a=Tt[e];Tt[e++]=null;var i=Tt[e];Tt[e++]=null;var l=Tt[e];if(Tt[e++]=null,a!==null&&i!==null){var s=a.pending;s===null?i.next=i:(i.next=s.next,s.next=i),a.pending=i}l!==0&&Bd(t,i,l)}}function Kl(n,e,t,a){Tt[Li++]=n,Tt[Li++]=e,Tt[Li++]=t,Tt[Li++]=a,Co|=a,n.lanes|=a,n=n.alternate,n!==null&&(n.lanes|=a)}function Ro(n,e,t,a){return Kl(n,e,t,a),Il(n)}function ii(n,e){return Kl(n,null,null,e),Il(n)}function Bd(n,e,t){n.lanes|=t;var a=n.alternate;a!==null&&(a.lanes|=t);for(var i=!1,l=n.return;l!==null;)l.childLanes|=t,a=l.alternate,a!==null&&(a.childLanes|=t),l.tag===22&&(n=l.stateNode,n===null||n._visibility&1||(i=!0)),n=l,l=l.return;return n.tag===3?(l=n.stateNode,i&&e!==null&&(i=31-G(t),n=l.hiddenUpdates,a=n[i],a===null?n[i]=[e]:a.push(e),e.lane=t|536870912),l):null}function Il(n){if(50<rl)throw rl=0,zs=null,Error(d(185));for(var e=n.return;e!==null;)n=e,e=n.return;return n.tag===3?n.stateNode:null}var Bi={};function i1(n,e,t,a){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(n,e,t,a){return new i1(n,e,t,a)}function zo(n){return n=n.prototype,!(!n||!n.isReactComponent)}function oa(n,e){var t=n.alternate;return t===null?(t=it(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&1206910976,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t.refCleanup=n.refCleanup,t}function Ud(n,e){n.flags&=1206910978;var t=n.alternate;return t===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,n.type=t.type,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n}function Xl(n,e,t,a,i,l){var s=0;if(a=n,typeof a=="function")zo(a)&&(s=1);else if(typeof a=="string")s=Cy(n,t,yt.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(a){case re:return n=it(31,t,e,i),n.elementType=re,n.lanes=l,n;case ie:return ri(t.children,i,l,e);case ge:s=8,i|=24;break;case Ke:return n=it(12,t,e,i|2),n.elementType=Ke,n.lanes=l,n;case dn:return n=it(13,t,e,i),n.elementType=dn,n.lanes=l,n;case F:return n=it(19,t,e,i),n.elementType=F,n.lanes=l,n;case pe:case v:return n=i|32,n=it(30,t,e,n),n.elementType=v,n.lanes=l,n.stateNode={autoName:null,paired:null,clones:null,ref:null},n;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case le:s=10;break n;case Ee:s=9;break n;case q:s=11;break n;case An:s=14;break n;case Tn:s=16,a=null;break n}s=29,t=Error(d(130,n===null?"null":typeof n,"")),a=null}return e=it(s,t,e,i),e.elementType=n,e.type=a,e.lanes=l,e}function ri(n,e,t,a){return n=it(7,n,a,e),n.lanes=t,n}function Do(n,e,t){return n=it(6,n,null,e),n.lanes=t,n}function Hd(n){var e=it(18,null,null,0);return e.stateNode=n,e}function Lo(n,e,t){return e=it(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}var qd=new WeakMap;function St(n,e){if(typeof n=="object"&&n!==null){var t=qd.get(n);return t!==void 0?t:(e={value:n,source:e,stack:Sl(e)},qd.set(n,e),e)}return{value:n,source:e,stack:Sl(e)}}var Ui=[],Hi=0,Ql=null,Ur=0,jt=[],Nt=0,Oa=null,Vt=1,Kt="";function ca(n,e){Ui[Hi++]=Ur,Ui[Hi++]=Ql,Ql=n,Ur=e}function Gd(n,e,t){jt[Nt++]=Vt,jt[Nt++]=Kt,jt[Nt++]=Oa,Oa=n;var a=Vt;n=Kt;var i=32-G(a)-1;a&=~(1<<i),t+=1;var l=32-G(e)+i;if(30<l){var s=i-i%5;l=(a&(1<<s)-1).toString(32),a>>=s,i-=s,Vt=1<<32-G(e)+i|t<<i|a,Kt=l+n}else Vt=1<<l|t<<i|a,Kt=n}function Jl(n){n.return!==null&&(ca(n,1),Gd(n,1,0))}function Bo(n){for(;n===Ql;)Ql=Ui[--Hi],Ui[Hi]=null,Ur=Ui[--Hi],Ui[Hi]=null;for(;n===Oa;)Oa=jt[--Nt],jt[Nt]=null,Kt=jt[--Nt],jt[Nt]=null,Vt=jt[--Nt],jt[Nt]=null}function Yd(n,e){jt[Nt++]=Vt,jt[Nt++]=Kt,jt[Nt++]=Oa,Vt=e.id,Kt=e.overflow,Oa=n}var Re=null,te=null,On=!1,Aa=null,wt=!1,Uo=Error(d(519));function ka(n){var e=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Hr(St(e,n)),Uo}function Vd(n){var e=n.stateNode,t=n.type,a=n.memoizedProps;switch(e[Ae]=n,e[D]=a,t){case"dialog":Rn("cancel",e),Rn("close",e);break;case"iframe":case"object":case"embed":Rn("load",e);break;case"video":case"audio":for(t=0;t<sl.length;t++)Rn(sl[t],e);break;case"source":Rn("error",e);break;case"img":case"image":case"link":Rn("error",e),Rn("load",e);break;case"details":Rn("toggle",e);break;case"input":Rn("invalid",e),zl(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Rn("invalid",e);break;case"textarea":Rn("invalid",e),ad(e,a.value,a.defaultValue,a.children)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||e.textContent===""+t||a.suppressHydrationWarning===!0||dg(e.textContent,t)?(a.popover!=null&&(Rn("beforetoggle",e),Rn("toggle",e)),a.onScroll!=null&&Rn("scroll",e),a.onScrollEnd!=null&&Rn("scrollend",e),a.onClick!=null&&(e.onclick=Yt),e=!0):e=!1,e||ka(n,!0)}function Zl(n){for(Re=n.return;Re;)switch(Re.tag){case 5:case 31:case 13:wt=!1;return;case 27:case 3:wt=!0;return;default:Re=Re.return}}function qi(n){if(n!==Re)return!1;if(!On)return Zl(n),On=!0,!1;var e=n.tag,t;if((t=e!==3&&e!==27)&&((t=e===5)&&(t=n.type,t=!(t!=="form"&&t!=="button")||gu(n.type,n.memoizedProps)),t=!t),t&&te&&ka(n),Zl(n),e===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));te=kg(n)}else if(e===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));te=kg(n)}else e===27?(e=te,Xa(n.type)?(n=Su,Su=null,te=n):te=e):te=Re?Ot(n.stateNode.nextSibling):null;return!0}function li(){te=Re=null,On=!1}function Ho(){var n=Aa;return n!==null&&(st===null?st=n:st.push.apply(st,n),Aa=null),n}function Hr(n){Aa===null?Aa=[n]:Aa.push(n)}var qo=vt(null),si=null,ua=null;function Ma(n,e,t){Pn(qo,e._currentValue),e._currentValue=t}function da(n){n._currentValue=qo.current,Oe(qo)}function Fl(n,e,t){for(;n!==null;){var a=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),n===t)break;n=n.return}}function Go(n,e,t,a){var i=n.child;for(i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){var s=i.child;l=l.firstContext;n:for(;l!==null;){var c=l;l=i;for(var f=0;f<e.length;f++)if(c.context===e[f]){l.lanes|=t,c=l.alternate,c!==null&&(c.lanes|=t),Fl(l.return,t,n),a||(s=null);break n}l=c.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(d(341));s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Fl(s,t,n),s=null}else i.tag===13&&i.memoizedState!==null&&i.memoizedState.dehydrated===null?(i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),Fl(i.return,t,n),s=i.child,s=s!==null?s.sibling:null):s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===n){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function oi(n,e,t,a){n=null;for(var i=e,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(d(387));if(s=s.memoizedProps,s!==null){var c=i.type;dt(i.pendingProps.value,s.value)||(n!==null?n.push(c):n=[c])}}else if(i===Si.current){if(s=i.alternate,s===null)throw Error(d(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(n!==null?n.push(dr):n=[dr])}i=i.return}return n!==null&&Go(e,n,t,a),e.flags|=262144,n!==null}function Pl(n){for(n=n.firstContext;n!==null;){if(!dt(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function ci(n){si=n,ua=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Ue(n){return Kd(si,n)}function Wl(n,e){return si===null&&ci(n),Kd(n,e)}function Kd(n,e){var t=e._currentValue;if(e={context:e,memoizedValue:t,next:null},ua===null){if(n===null)throw Error(d(308));ua=e,n.dependencies={lanes:0,firstContext:e},n.flags|=524288}else ua=ua.next=e;return t}var r1=typeof AbortController<"u"?AbortController:function(){var n=[],e=this.signal={aborted:!1,addEventListener:function(t,a){n.push(a)}};this.abort=function(){e.aborted=!0,n.forEach(function(t){return t()})}},l1=o.unstable_scheduleCallback,s1=o.unstable_NormalPriority,Te={$$typeof:le,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yo(){return{controller:new r1,data:new Map,refCount:0}}function qr(n){n.refCount--,n.refCount===0&&l1(s1,function(){n.controller.abort()})}function Id(n,e){if((n.pendingLanes&4194048)!==0){var t=n.transitionTypes;for(t===null&&(t=n.transitionTypes=[]),n=0;n<e.length;n++){var a=e[n];t.indexOf(a)===-1&&t.push(a)}}}var Gr=null;function o1(n){var e=n.transitionTypes;return n.transitionTypes=null,e}var Yr=null,Vo=0,ui=0,Gi=null;function c1(n,e){if(Yr===null){var t=Yr=[];Vo=0,ui=ru(),Gi={status:"pending",value:void 0,then:function(a){t.push(a)}}}return Vo++,e.then(Xd,Xd),e}function Xd(){if(--Vo===0&&(Gr=null,Yr!==null)){Gi!==null&&(Gi.status="fulfilled");var n=Yr;Yr=null,ui=0,Gi=null;for(var e=0;e<n.length;e++)(0,n[e])()}}function u1(n,e){var t=[],a={status:"pending",value:null,reason:null,then:function(i){t.push(i)}};return n.then(function(){a.status="fulfilled",a.value=e;for(var i=0;i<t.length;i++)(0,t[i])(e)},function(i){for(a.status="rejected",a.reason=i,i=0;i<t.length;i++)(0,t[i])(void 0)}),a}var Qd=en.S;en.S=function(n,e){if(qh=Ie(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&c1(n,e),Gr!==null)for(var t=rr;t!==null;)Id(t,Gr),t=t.next;if(t=n.types,t!==null){for(var a=rr;a!==null;)Id(a,t),a=a.next;if(ui!==0){a=Gr,a===null&&(a=Gr=[]);for(var i=0;i<t.length;i++){var l=t[i];a.indexOf(l)===-1&&a.push(l)}}}Qd!==null&&Qd(n,e)};var di=vt(null);function Ko(){var n=di.current;return n!==null?n:ee.pooledCache}function $l(n,e){e===null?Pn(di,di.current):Pn(di,e.pool)}function Jd(){var n=Ko();return n===null?null:{parent:Te._currentValue,pool:n}}var Yi=Error(d(460)),Io=Error(d(474)),ns=Error(d(542)),es={then:function(){}};function Zd(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Fd(n,e,t){switch(t=n[t],t===void 0?n.push(e):t!==e&&(e.then(Yt,Yt),e=t),e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,Wd(n),n===void 0&&!("reason"in e)?Error(d(600)):n;default:if(typeof e.status=="string")e.then(Yt,Yt);else{if(n=ee,n!==null&&100<n.shellSuspendCounter)throw Error(d(482));n=e,n.status="pending",n.then(function(a){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=a}},function(a){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,Wd(n),n}throw hi=e,Yi}}function fi(n){try{var e=n._init;return e(n._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(hi=t,Yi):t}}var hi=null;function Pd(){if(hi===null)throw Error(d(459));var n=hi;return hi=null,n}function Wd(n){if(n===Yi||n===ns)throw Error(d(483))}var Vi=null,Vr=0;function ts(n){var e=Vr;return Vr+=1,Vi===null&&(Vi=[]),Fd(Vi,n,e)}function Ca(n,e){e=e.props.ref,n.ref=e!==void 0?e:null}function as(n,e){throw e.$$typeof===_n?Error(d(525)):(n=Object.prototype.toString.call(e),Error(d(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)))}function $d(n){function e(_,m){if(n){var S=_.deletions;S===null?(_.deletions=[m],_.flags|=16):S.push(m)}}function t(_,m){if(!n)return null;for(;m!==null;)e(_,m),m=m.sibling;return null}function a(_){for(var m=new Map;_!==null;)_.key===null?m.set(_.index,_):m.set(_.key,_),_=_.sibling;return m}function i(_,m){return _=oa(_,m),_.index=0,_.sibling=null,_}function l(_,m,S){return _.index=S,n?(S=_.alternate,S!==null?(S=S.index,S<m?(_.flags|=2,m):S):(_.flags|=134217730,m)):(_.flags|=1048576,m)}function s(_){return n&&_.alternate===null&&(_.flags|=134217730),_}function c(_,m,S,O){return m===null||m.tag!==6?(m=Do(S,_.mode,O),m.return=_,m):(m=i(m,S),m.return=_,m)}function f(_,m,S,O){var $=S.type;return $===ie?(_=N(_,m,S.props.children,O,S.key),Ca(_,S),_):m!==null&&(m.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Tn&&fi($)===m.type)?(m=i(m,S.props),Ca(m,S),m.return=_,m):(m=Xl(S.type,S.key,S.props,null,_.mode,O),Ca(m,S),m.return=_,m)}function T(_,m,S,O){return m===null||m.tag!==4||m.stateNode.containerInfo!==S.containerInfo||m.stateNode.implementation!==S.implementation?(m=Lo(S,_.mode,O),m.return=_,m):(m=i(m,S.children||[]),m.return=_,m)}function N(_,m,S,O,$){return m===null||m.tag!==7?(m=ri(S,_.mode,O,$),m.return=_,m):(m=i(m,S),m.return=_,m)}function A(_,m,S){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=Do(""+m,_.mode,S),m.return=_,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case oe:return S=Xl(m.type,m.key,m.props,null,_.mode,S),Ca(S,m),S.return=_,S;case ce:return m=Lo(m,_.mode,S),m.return=_,m;case Tn:return m=fi(m),A(_,m,S)}if(En(m)||P(m))return m=ri(m,_.mode,S,null),m.return=_,m;if(typeof m.then=="function")return A(_,ts(m),S);if(m.$$typeof===le)return A(_,Wl(_,m),S);as(_,m)}return null}function x(_,m,S,O){var $=m!==null?m.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return $!==null?null:c(_,m,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case oe:return S.key===$?f(_,m,S,O):null;case ce:return S.key===$?T(_,m,S,O):null;case Tn:return S=fi(S),x(_,m,S,O)}if(En(S)||P(S))return $!==null?null:N(_,m,S,O,null);if(typeof S.then=="function")return x(_,m,ts(S),O);if(S.$$typeof===le)return x(_,m,Wl(_,S),O);as(_,S)}return null}function j(_,m,S,O,$){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return _=_.get(S)||null,c(m,_,""+O,$);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case oe:return _=_.get(O.key===null?S:O.key)||null,f(m,_,O,$);case ce:return _=_.get(O.key===null?S:O.key)||null,T(m,_,O,$);case Tn:return O=fi(O),j(_,m,S,O,$)}if(En(O)||P(O))return _=_.get(S)||null,N(m,_,O,$,null);if(typeof O.then=="function")return j(_,m,S,ts(O),$);if(O.$$typeof===le)return j(_,m,S,Wl(m,O),$);as(m,O)}return null}function Y(_,m,S,O){for(var $=null,Dn=null,on=m,gn=m=0,Ne=null;on!==null&&gn<S.length;gn++){on.index>gn?(Ne=on,on=null):Ne=on.sibling;var Un=x(_,on,S[gn],O);if(Un===null){on===null&&(on=Ne);break}n&&on&&Un.alternate===null&&e(_,on),m=l(Un,m,gn),Dn===null?$=Un:Dn.sibling=Un,Dn=Un,on=Ne}if(gn===S.length)return t(_,on),On&&ca(_,gn),$;if(on===null){for(;gn<S.length;gn++)on=A(_,S[gn],O),on!==null&&(m=l(on,m,gn),Dn===null?$=on:Dn.sibling=on,Dn=on);return On&&ca(_,gn),$}for(on=a(on);gn<S.length;gn++)Ne=j(on,_,gn,S[gn],O),Ne!==null&&(n&&(Un=Ne.alternate,Un!==null&&on.delete(Un.key===null?gn:Un.key)),m=l(Ne,m,gn),Dn===null?$=Ne:Dn.sibling=Ne,Dn=Ne);return n&&on.forEach(function(Pa){return e(_,Pa)}),On&&ca(_,gn),$}function tn(_,m,S,O){if(S==null)throw Error(d(151));for(var $=null,Dn=null,on=m,gn=m=0,Ne=null,Un=S.next();on!==null&&!Un.done;gn++,Un=S.next()){on.index>gn?(Ne=on,on=null):Ne=on.sibling;var Pa=x(_,on,Un.value,O);if(Pa===null){on===null&&(on=Ne);break}n&&on&&Pa.alternate===null&&e(_,on),m=l(Pa,m,gn),Dn===null?$=Pa:Dn.sibling=Pa,Dn=Pa,on=Ne}if(Un.done)return t(_,on),On&&ca(_,gn),$;if(on===null){for(;!Un.done;gn++,Un=S.next())Un=A(_,Un.value,O),Un!==null&&(m=l(Un,m,gn),Dn===null?$=Un:Dn.sibling=Un,Dn=Un);return On&&ca(_,gn),$}for(on=a(on);!Un.done;gn++,Un=S.next())Un=j(on,_,gn,Un.value,O),Un!==null&&(n&&(Ne=Un.alternate,Ne!==null&&on.delete(Ne.key===null?gn:Ne.key)),m=l(Un,m,gn),Dn===null?$=Un:Dn.sibling=Un,Dn=Un);return n&&on.forEach(function(Ky){return e(_,Ky)}),On&&ca(_,gn),$}function Nn(_,m,S,O){if(typeof S=="object"&&S!==null&&S.type===ie&&S.key===null&&S.props.ref===void 0&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case oe:n:{for(var $=S.key;m!==null;){if(m.key===$){if($=S.type,$===ie){if(m.tag===7){t(_,m.sibling),O=i(m,S.props.children),Ca(O,S),O.return=_,_=O;break n}}else if(m.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Tn&&fi($)===m.type){t(_,m.sibling),O=i(m,S.props),Ca(O,S),O.return=_,_=O;break n}t(_,m);break}else e(_,m);m=m.sibling}S.type===ie?(O=ri(S.props.children,_.mode,O,S.key),Ca(O,S),O.return=_,_=O):(O=Xl(S.type,S.key,S.props,null,_.mode,O),Ca(O,S),O.return=_,_=O)}return s(_);case ce:n:{for($=S.key;m!==null;){if(m.key===$)if(m.tag===4&&m.stateNode.containerInfo===S.containerInfo&&m.stateNode.implementation===S.implementation){t(_,m.sibling),O=i(m,S.children||[]),O.return=_,_=O;break n}else{t(_,m);break}else e(_,m);m=m.sibling}O=Lo(S,_.mode,O),O.return=_,_=O}return s(_);case Tn:return S=fi(S),Nn(_,m,S,O)}if(En(S))return Y(_,m,S,O);if(P(S)){if($=P(S),typeof $!="function")throw Error(d(150));return S=$.call(S),tn(_,m,S,O)}if(typeof S.then=="function")return Nn(_,m,ts(S),O);if(S.$$typeof===le)return Nn(_,m,Wl(_,S),O);as(_,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,m!==null&&m.tag===6?(t(_,m.sibling),O=i(m,S),O.return=_,_=O):(t(_,m),O=Do(S,_.mode,O),O.return=_,_=O),s(_)):t(_,m)}return function(_,m,S,O){try{Vr=0;var $=Nn(_,m,S,O);return Vi=null,$}catch(on){if(on===Yi||on===ns)throw on;var Dn=it(29,on,null,_.mode);return Dn.lanes=O,Dn.return=_,Dn}}}var gi=$d(!0),nf=$d(!1),Ra=!1;function Xo(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qo(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function za(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Da(n,e,t){var a=n.updateQueue;if(a===null)return null;if(a=a.shared,(Yn&2)!==0){var i=a.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),a.pending=e,e=Il(n),Bd(n,null,t),e}return Kl(n,a,e,t),Il(n)}function Kr(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194048)!==0)){var a=e.lanes;a&=n.pendingLanes,t|=a,e.lanes=t,Ct(n,t)}}function Jo(n,e){var t=n.updateQueue,a=n.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var s={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};l===null?i=l=s:l=l.next=s,t=t.next}while(t!==null);l===null?i=l=e:l=l.next=e}else i=l=e;t={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:a.shared,callbacks:a.callbacks},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}var Zo=!1;function Ir(){if(Zo){var n=Gi;if(n!==null)throw n}}function Xr(n,e,t,a){Zo=!1;var i=n.updateQueue;Ra=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var f=c,T=f.next;f.next=null,s===null?l=T:s.next=T,s=f;var N=n.alternate;N!==null&&(N=N.updateQueue,c=N.lastBaseUpdate,c!==s&&(c===null?N.firstBaseUpdate=T:c.next=T,N.lastBaseUpdate=f))}if(l!==null){var A=i.baseState;s=0,N=T=f=null,c=l;do{var x=c.lane&-536870913,j=x!==c.lane;if(j?(zn&x)===x:(a&x)===x){x!==0&&x===ui&&(Zo=!0),N!==null&&(N=N.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});n:{var Y=n,tn=c;x=e;var Nn=t;switch(tn.tag){case 1:if(Y=tn.payload,typeof Y=="function"){A=Y.call(Nn,A,x);break n}A=Y;break n;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=tn.payload,x=typeof Y=="function"?Y.call(Nn,A,x):Y,x==null)break n;A=un({},A,x);break n;case 2:Ra=!0}}x=c.callback,x!==null&&(n.flags|=64,j&&(n.flags|=8192),j=i.callbacks,j===null?i.callbacks=[x]:j.push(x))}else j={lane:x,tag:c.tag,payload:c.payload,callback:c.callback,next:null},N===null?(T=N=j,f=A):N=N.next=j,s|=x;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;j=c,c=j.next,j.next=null,i.lastBaseUpdate=j,i.shared.pending=null}}while(!0);N===null&&(f=A),i.baseState=f,i.firstBaseUpdate=T,i.lastBaseUpdate=N,l===null&&(i.shared.lanes=0),Ya|=s,n.lanes=s,n.memoizedState=A}}function ef(n,e){if(typeof n!="function")throw Error(d(191,n));n.call(e)}function tf(n,e){var t=n.callbacks;if(t!==null)for(n.callbacks=null,n=0;n<t.length;n++)ef(t[n],e)}var La=vt(null),is=vt(0);function af(n,e){n=ma,Pn(is,n),Pn(La,e),ma=n|e.baseLanes}function Fo(){Pn(is,ma),Pn(La,La.current)}function Po(){ma=is.current,Oe(La),Oe(is)}var He=vt(null),Xe=null;function Ba(n){var e=n.alternate;Pn(qe,qe.current&1),Pn(He,n),Xe===null&&(e===null||La.current!==null||e.memoizedState!==null)&&(Xe=n)}function Wo(n){Pn(qe,qe.current),Pn(He,n),Xe===null&&(Xe=n)}function rf(n){n.tag===22?(Pn(qe,qe.current),Pn(He,n),Xe===null&&(Xe=n)):Ua()}function Ua(){Pn(qe,qe.current),Pn(He,He.current)}function ft(n){Oe(He),Xe===n&&(Xe=null),Oe(qe)}var qe=vt(0);function Qr(n,e){Pn(He,He.current),Pn(qe,e)}function $o(n){Oe(qe),Oe(He),Xe===n&&(Xe=null)}function rs(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||_u(t)||Tu(t)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fa=0,jn=null,$n=null,Se=null,ls=!1,Ki=!1,pi=!1,ss=0,Jr=0,Ii=null,d1=0;function fe(){throw Error(d(321))}function nc(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!dt(n[t],e[t]))return!1;return!0}function ec(n,e,t,a,i,l){return fa=l,jn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,en.H=n===null||n.memoizedState===null?Yf:Vf,pi=!1,l=t(a,i),pi=!1,Ki&&(l=sf(e,t,a,i)),lf(n),l}function lf(n){en.H=gs;var e=$n!==null&&$n.next!==null;if(fa=0,Se=$n=jn=null,ls=!1,Jr=0,Ii=null,e)throw Error(d(300));n===null||je||(n=n.dependencies,n!==null&&Pl(n)&&(je=!0))}function sf(n,e,t,a){jn=n;var i=0;do{if(Ki&&(Ii=null),Jr=0,Ki=!1,25<=i)throw Error(d(301));if(i+=1,Se=$n=null,n.updateQueue!=null){var l=n.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}en.H=y1,l=e(t,a)}while(Ki);return l}function f1(){var n=en.H,e=n.useState()[0];return e=typeof e.then=="function"?Zr(e):e,n=n.useState()[0],($n!==null?$n.memoizedState:null)!==n&&(jn.flags|=1024),e}function tc(){var n=ss!==0;return ss=0,n}function ac(n,e,t){e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~t}function ic(n){if(ls){for(n=n.memoizedState;n!==null;){var e=n.queue;e!==null&&(e.pending=null),n=n.next}ls=!1}fa=0,Se=$n=jn=null,Ki=!1,Jr=ss=0,Ii=null}function Je(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?jn.memoizedState=Se=n:Se=Se.next=n,Se}function be(){if($n===null){var n=jn.alternate;n=n!==null?n.memoizedState:null}else n=$n.next;var e=Se===null?jn.memoizedState:Se.next;if(e!==null)Se=e,$n=n;else{if(n===null)throw jn.alternate===null?Error(d(467)):Error(d(310));$n=n,n={memoizedState:$n.memoizedState,baseState:$n.baseState,baseQueue:$n.baseQueue,queue:$n.queue,next:null},Se===null?jn.memoizedState=Se=n:Se=Se.next=n}return Se}function os(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zr(n){var e=Jr;return Jr+=1,Ii===null&&(Ii=[]),n=Fd(Ii,n,e),e=jn,(Se===null?e.memoizedState:Se.next)===null&&(e=e.alternate,en.H=e===null||e.memoizedState===null?Yf:Vf),n}function cs(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Zr(n);if(n.$$typeof===R)return;if(n.$$typeof===le)return Ue(n)}throw Error(d(438,String(n)))}function rc(n){var e=null,t=jn.updateQueue;if(t!==null&&(e=t.memoCache),e==null){var a=jn.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),t===null&&(t=os(),jn.updateQueue=t),t.memoCache=e,t=e.data[e.index],t===void 0)for(t=e.data[e.index]=Array(n),a=0;a<n;a++)t[a]=ct;return e.index++,t}function ha(n,e){return typeof e=="function"?e(n):e}function us(n){var e=be();return lc(e,$n,n)}function lc(n,e,t){var a=n.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=t;var i=n.baseQueue,l=a.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}e.baseQueue=i=l,a.pending=null}if(l=n.baseState,i===null)n.memoizedState=l;else{e=i.next;var c=s=null,f=null,T=e,N=!1;do{var A=T.lane&-536870913;if(A!==T.lane?(zn&A)===A:(fa&A)===A){var x=T.revertLane;if(x===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),A===ui&&(N=!0);else if((fa&x)===x){T=T.next,x===ui&&(N=!0);continue}else A={lane:0,revertLane:T.revertLane,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},f===null?(c=f=A,s=l):f=f.next=A,jn.lanes|=x,Ya|=x;A=T.action,pi&&t(l,A),l=T.hasEagerState?T.eagerState:t(l,A)}else x={lane:A,revertLane:T.revertLane,gesture:T.gesture,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},f===null?(c=f=x,s=l):f=f.next=x,jn.lanes|=A,Ya|=A;T=T.next}while(T!==null&&T!==e);if(f===null?s=l:f.next=c,!dt(l,n.memoizedState)&&(je=!0,N&&(t=Gi,t!==null)))throw t;n.memoizedState=l,n.baseState=s,n.baseQueue=f,a.lastRenderedState=l}return i===null&&(a.lanes=0),[n.memoizedState,a.dispatch]}function sc(n){var e=be(),t=e.queue;if(t===null)throw Error(d(311));t.lastRenderedReducer=n;var a=t.dispatch,i=t.pending,l=e.memoizedState;if(i!==null){t.pending=null;var s=i=i.next;do l=n(l,s.action),s=s.next;while(s!==i);dt(l,e.memoizedState)||(je=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),t.lastRenderedState=l}return[l,a]}function of(n,e,t){var a=jn,i=be(),l=On;if(l){if(t===void 0)throw Error(d(407));t=t()}else t=e();var s=!dt(($n||i).memoizedState,t);if(s&&(i.memoizedState=t,je=!0),i=i.queue,uc(df.bind(null,a,i,n),[n]),n=i.getSnapshot!==e||s||Se!==null&&(Se.memoizedState.tag&1)!==0,Xi(n?9:8,{destroy:void 0},uf.bind(null,a,i,t,e),null),n){if(a.flags|=2048,ee===null)throw Error(d(349));l||(fa&127)!==0||cf(a,e,t)}return t}function cf(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=jn.updateQueue,e===null?(e=os(),jn.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function uf(n,e,t,a){e.value=t,e.getSnapshot=a,ff(e)&&hf(n)}function df(n,e,t){return t(function(){ff(e)&&hf(n)})}function ff(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!dt(n,t)}catch{return!0}}function hf(n){var e=ii(n,2);e!==null&&ot(e,n,2)}function oc(n){var e=Je();if(typeof n=="function"){var t=n;if(n=t(),pi){W(!0);try{t()}finally{W(!1)}}}return e.memoizedState=e.baseState=n,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:n},e}function gf(n,e,t,a){return n.baseState=t,lc(n,$n,typeof a=="function"?a:ha)}function h1(n,e,t,a,i){if(hs(n))throw Error(d(485));if(n=e.action,n!==null){var l={payload:i,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){l.listeners.push(s)}};en.T!==null?t(!0):l.isTransition=!1,a(l),t=e.pending,t===null?(l.next=e.pending=l,pf(e,l)):(l.next=t.next,e.pending=t.next=l)}}function pf(n,e){var t=e.action,a=e.payload,i=n.state;if(e.isTransition){var l=en.T,s={};s.types=l!==null?l.types:null,en.T=s;try{var c=t(i,a),f=en.S;f!==null&&f(s,c),mf(n,e,c)}catch(T){cc(n,e,T)}finally{l!==null&&s.types!==null&&(l.types=s.types),en.T=l}}else try{l=t(i,a),mf(n,e,l)}catch(T){cc(n,e,T)}}function mf(n,e,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){bf(n,e,a)},function(a){return cc(n,e,a)}):bf(n,e,t)}function bf(n,e,t){e.status="fulfilled",e.value=t,vf(e),n.state=t,e=n.pending,e!==null&&(t=e.next,t===e?n.pending=null:(t=t.next,e.next=t,pf(n,t)))}function cc(n,e,t){var a=n.pending;if(n.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=t,vf(e),e=e.next;while(e!==a)}n.action=null}function vf(n){n=n.listeners;for(var e=0;e<n.length;e++)(0,n[e])()}function yf(n,e){return e}function xf(n,e){if(On){var t=ee.formState;if(t!==null){n:{var a=jn;if(On){if(te){e:{for(var i=te,l=wt;i.nodeType!==8;){if(!l){i=null;break e}if(i=Ot(i.nextSibling),i===null){i=null;break e}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){te=Ot(i.nextSibling),a=i.data==="F!";break n}}ka(a)}a=!1}a&&(e=t[0])}}return t=Je(),t.memoizedState=t.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yf,lastRenderedState:e},t.queue=a,t=Hf.bind(null,jn,a),a.dispatch=t,a=oc(!1),l=pc.bind(null,jn,!1,a.queue),a=Je(),i={state:e,dispatch:null,action:n,pending:null},a.queue=i,t=h1.bind(null,jn,i,l,t),i.dispatch=t,a.memoizedState=n,[e,t,!1]}function _f(n){var e=be();return Tf(e,$n,n)}function Tf(n,e,t){if(e=lc(n,e,yf)[0],n=us(ha)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=Zr(e)}catch(s){throw s===Yi?ns:s}else a=e;e=be();var i=e.queue,l=i.dispatch;return t!==e.memoizedState&&(jn.flags|=2048,Xi(9,{destroy:void 0},g1.bind(null,i,t),null)),[a,l,n]}function g1(n,e){n.action=e}function Sf(n){var e=be(),t=$n;if(t!==null)return Tf(e,t,n);be(),e=e.memoizedState,t=be();var a=t.queue.dispatch;return t.memoizedState=n,[e,a,!1]}function Xi(n,e,t,a){return n={tag:n,create:t,deps:a,inst:e,next:null},e=jn.updateQueue,e===null&&(e=os(),jn.updateQueue=e),t=e.lastEffect,t===null?e.lastEffect=n.next=n:(a=t.next,t.next=n,n.next=a,e.lastEffect=n),n}function jf(){return be().memoizedState}function ds(n,e,t,a){var i=Je();jn.flags|=n,i.memoizedState=Xi(1|e,{destroy:void 0},t,a===void 0?null:a)}function fs(n,e,t,a){var i=be();a=a===void 0?null:a;var l=i.memoizedState.inst;$n!==null&&a!==null&&nc(a,$n.memoizedState.deps)?i.memoizedState=Xi(e,l,t,a):(jn.flags|=n,i.memoizedState=Xi(1|e,l,t,a))}function Nf(n,e){ds(8390656,8,n,e)}function uc(n,e){fs(2048,8,n,e)}function p1(n){jn.flags|=4;var e=jn.updateQueue;if(e===null)e=os(),jn.updateQueue=e,e.events=[n];else{var t=e.events;t===null?e.events=[n]:t.push(n)}}function wf(n){var e=be().memoizedState;return p1({ref:e,nextImpl:n}),function(){if((Yn&2)!==0)throw Error(d(440));return e.impl.apply(void 0,arguments)}}function Ef(n,e){return fs(4,2,n,e)}function Of(n,e){return fs(4,4,n,e)}function Af(n,e){if(typeof e=="function"){n=n();var t=e(n);return function(){typeof t=="function"?t():e(null)}}if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function kf(n,e,t){t=t!=null?t.concat([n]):null,fs(4,4,Af.bind(null,e,n),t)}function dc(){}function Mf(n,e){var t=be();e=e===void 0?null:e;var a=t.memoizedState;return e!==null&&nc(e,a[1])?a[0]:(t.memoizedState=[n,e],n)}function Cf(n,e){var t=be();e=e===void 0?null:e;var a=t.memoizedState;if(e!==null&&nc(e,a[1]))return a[0];if(a=n(),pi){W(!0);try{n()}finally{W(!1)}}return t.memoizedState=[a,e],a}function fc(n,e,t){return t===void 0||(fa&1073741824)!==0&&(zn&261930)===0?n.memoizedState=e:(n.memoizedState=t,n=Yh(),jn.lanes|=n,Ya|=n,t)}function Rf(n,e,t,a){return dt(t,e)?t:La.current!==null?(n=fc(n,t,a),dt(n,e)||(je=!0),n):(fa&106)===0||(fa&1073741824)!==0&&(zn&261930)===0?(je=!0,n.memoizedState=t):(n=Yh(),jn.lanes|=n,Ya|=n,e)}function zf(n,e,t,a,i){var l=hn.p;hn.p=l!==0&&8>l?l:8;var s=en.T,c={};c.types=s!==null?s.types:null,en.T=c,pc(n,!1,e,t);try{var f=i(),T=en.S;if(T!==null&&T(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var N=u1(f,a);Fr(n,e,N,mt(n))}else Fr(n,e,a,mt(n))}catch(A){Fr(n,e,{then:function(){},status:"rejected",reason:A},mt())}finally{hn.p=l,s!==null&&c.types!==null&&(s.types=c.types),en.T=s}}function m1(){}function hc(n,e,t,a){if(n.tag!==5)throw Error(d(476));var i=Df(n).queue;zf(n,i,e,$e,t===null?m1:function(){return Lf(n),t(a)})}function Df(n){var e=n.memoizedState;if(e!==null)return e;e={memoizedState:$e,baseState:$e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:$e},next:null};var t={};return e.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:t},next:null},n.memoizedState=e,n=n.alternate,n!==null&&(n.memoizedState=e),e}function Lf(n){var e=Df(n);e.next===null&&(e=n.alternate.memoizedState),Fr(n,e.next.queue,{},mt())}function gc(){return Ue(dr)}function Bf(){return be().memoizedState}function Uf(){return be().memoizedState}function b1(n){for(var e=n.return;e!==null;){switch(e.tag){case 24:case 3:var t=mt();n=za(t);var a=Da(e,n,t);a!==null&&(ot(a,e,t),Kr(a,e,t)),e={cache:Yo()},n.payload=e;return}e=e.return}}function v1(n,e,t){var a=mt();t={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},hs(n)?qf(e,t):(t=Ro(n,e,t,a),t!==null&&(ot(t,n,a),Gf(t,e,a)))}function Hf(n,e,t){var a=mt();Fr(n,e,t,a)}function Fr(n,e,t,a){var i={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(hs(n))qf(e,i);else{var l=n.alternate;if(n.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var s=e.lastRenderedState,c=l(s,t);if(i.hasEagerState=!0,i.eagerState=c,dt(c,s))return Kl(n,e,i,0),ee===null&&Vl(),!1}catch{}if(t=Ro(n,e,i,a),t!==null)return ot(t,n,a),Gf(t,e,a),!0}return!1}function pc(n,e,t,a){if(a={lane:2,revertLane:ru(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},hs(n)){if(e)throw Error(d(479))}else e=Ro(n,t,a,2),e!==null&&ot(e,n,2)}function hs(n){var e=n.alternate;return n===jn||e!==null&&e===jn}function qf(n,e){Ki=ls=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Gf(n,e,t){if((t&4194048)!==0){var a=e.lanes;a&=n.pendingLanes,t|=a,e.lanes=t,Ct(n,t)}}var gs={readContext:Ue,use:cs,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useLayoutEffect:fe,useInsertionEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useSyncExternalStore:fe,useId:fe,useHostTransitionStatus:fe,useFormState:fe,useActionState:fe,useOptimistic:fe,useMemoCache:fe,useCacheRefresh:fe,useEffectEvent:fe},Yf={readContext:Ue,use:cs,useCallback:function(n,e){return Je().memoizedState=[n,e===void 0?null:e],n},useContext:Ue,useEffect:Nf,useImperativeHandle:function(n,e,t){t=t!=null?t.concat([n]):null,ds(4194308,4,Af.bind(null,e,n),t)},useLayoutEffect:function(n,e){return ds(4194308,4,n,e)},useInsertionEffect:function(n,e){ds(4,2,n,e)},useMemo:function(n,e){var t=Je();e=e===void 0?null:e;var a=n();if(pi){W(!0);try{n()}finally{W(!1)}}return t.memoizedState=[a,e],a},useReducer:function(n,e,t){var a=Je();if(t!==void 0){var i=t(e);if(pi){W(!0);try{t(e)}finally{W(!1)}}}else i=e;return a.memoizedState=a.baseState=i,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},a.queue=n,n=n.dispatch=v1.bind(null,jn,n),[a.memoizedState,n]},useRef:function(n){var e=Je();return n={current:n},e.memoizedState=n},useState:function(n){n=oc(n);var e=n.queue,t=Hf.bind(null,jn,e);return e.dispatch=t,[n.memoizedState,t]},useDebugValue:dc,useDeferredValue:function(n,e){var t=Je();return fc(t,n,e)},useTransition:function(){var n=oc(!1);return n=zf.bind(null,jn,n.queue,!0,!1),Je().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,e,t){var a=jn,i=Je();if(On){if(t===void 0)throw Error(d(407));t=t()}else{if(t=e(),ee===null)throw Error(d(349));(zn&127)!==0||cf(a,e,t)}i.memoizedState=t;var l={value:t,getSnapshot:e};return i.queue=l,Nf(df.bind(null,a,l,n),[n]),a.flags|=2048,Xi(9,{destroy:void 0},uf.bind(null,a,l,t,e),null),t},useId:function(){var n=Je(),e=ee.identifierPrefix;if(On){var t=Kt,a=Vt;t=(a&~(1<<32-G(a)-1)).toString(32)+t,e="_"+e+"R_"+t,t=ss++,0<t&&(e+="H"+t.toString(32)),e+="_"}else t=d1++,e="_"+e+"r_"+t.toString(32)+"_";return n.memoizedState=e},useHostTransitionStatus:gc,useFormState:xf,useActionState:xf,useOptimistic:function(n){var e=Je();e.memoizedState=e.baseState=n;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=t,e=pc.bind(null,jn,!0,t),t.dispatch=e,[n,e]},useMemoCache:rc,useCacheRefresh:function(){return Je().memoizedState=b1.bind(null,jn)},useEffectEvent:function(n){var e=Je(),t={impl:n};return e.memoizedState=t,function(){if((Yn&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}},Vf={readContext:Ue,use:cs,useCallback:Mf,useContext:Ue,useEffect:uc,useImperativeHandle:kf,useInsertionEffect:Ef,useLayoutEffect:Of,useMemo:Cf,useReducer:us,useRef:jf,useState:function(){return us(ha)},useDebugValue:dc,useDeferredValue:function(n,e){var t=be();return Rf(t,$n.memoizedState,n,e)},useTransition:function(){var n=us(ha)[0],e=be().memoizedState;return[typeof n=="boolean"?n:Zr(n),e]},useSyncExternalStore:of,useId:Bf,useHostTransitionStatus:gc,useFormState:_f,useActionState:_f,useOptimistic:function(n,e){var t=be();return gf(t,$n,n,e)},useMemoCache:rc,useCacheRefresh:Uf,useEffectEvent:wf},y1={readContext:Ue,use:cs,useCallback:Mf,useContext:Ue,useEffect:uc,useImperativeHandle:kf,useInsertionEffect:Ef,useLayoutEffect:Of,useMemo:Cf,useReducer:sc,useRef:jf,useState:function(){return sc(ha)},useDebugValue:dc,useDeferredValue:function(n,e){var t=be();return $n===null?fc(t,n,e):Rf(t,$n.memoizedState,n,e)},useTransition:function(){var n=sc(ha)[0],e=be().memoizedState;return[typeof n=="boolean"?n:Zr(n),e]},useSyncExternalStore:of,useId:Bf,useHostTransitionStatus:gc,useFormState:Sf,useActionState:Sf,useOptimistic:function(n,e){var t=be();return $n!==null?gf(t,$n,n,e):(t.baseState=n,[n,t.queue.dispatch])},useMemoCache:rc,useCacheRefresh:Uf,useEffectEvent:wf};function mc(n,e,t,a){e=n.memoizedState,t=t(a,e),t=t==null?e:un({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var bc={enqueueSetState:function(n,e,t){n=n._reactInternals;var a=mt(),i=za(a);i.payload=e,t!=null&&(i.callback=t),e=Da(n,i,a),e!==null&&(ot(e,n,a),Kr(e,n,a))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var a=mt(),i=za(a);i.tag=1,i.payload=e,t!=null&&(i.callback=t),e=Da(n,i,a),e!==null&&(ot(e,n,a),Kr(e,n,a))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=mt(),a=za(t);a.tag=2,e!=null&&(a.callback=e),e=Da(n,a,t),e!==null&&(ot(e,n,t),Kr(e,n,t))}};function Kf(n,e,t,a,i,l,s){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(a,l,s):e.prototype&&e.prototype.isPureReactComponent?!Lr(t,a)||!Lr(i,l):!0}function If(n,e,t,a){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,a),e.state!==n&&bc.enqueueReplaceState(e,e.state,null)}function mi(n,e){var t=e;if("ref"in e){t={};for(var a in e)a!=="ref"&&(t[a]=e[a])}if(n=n.defaultProps){t===e&&(t=un({},t));for(var i in n)t[i]===void 0&&(t[i]=n[i])}return t}function Xf(n){Yl(n)}function Qf(n){console.error(n)}function Jf(n){Yl(n)}function ps(n,e){try{var t=n.onUncaughtError;t(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Zf(n,e,t){try{var a=n.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function vc(n,e,t){return t=za(t),t.tag=3,t.payload={element:null},t.callback=function(){ps(n,e)},t}function Ff(n){return n=za(n),n.tag=3,n}function Pf(n,e,t,a){var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var l=a.value;n.payload=function(){return i(l)},n.callback=function(){Zf(e,t,a)}}var s=t.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Zf(e,t,a),typeof i!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function x1(n,e,t,a,i){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=t.alternate,e!==null&&oi(e,t,i,!0),t=He.current,t!==null){switch(t.tag){case 31:case 13:case 19:return Xe===null?Ls():t.alternate===null&&he===0&&(he=3),t.flags&=-257,t.flags|=65536,t.lanes=i,a===es?t.flags|=16384:(e=t.updateQueue,e===null?t.updateQueue=new Set([a]):e.add(a),tu(n,a,i)),!1;case 22:return t.flags|=65536,a===es?t.flags|=16384:(e=t.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=e):(t=e.retryQueue,t===null?e.retryQueue=new Set([a]):t.add(a)),tu(n,a,i)),!1}throw Error(d(435,t.tag))}return tu(n,a,i),Ls(),!1}if(On)return e=He.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,a!==Uo&&(n=Error(d(422),{cause:a}),Hr(St(n,t)))):(a!==Uo&&(e=Error(d(423),{cause:a}),Hr(St(e,t))),n=n.current.alternate,n.flags|=65536,i&=-i,n.lanes|=i,a=St(a,t),i=vc(n.stateNode,a,i),Jo(n,i),he!==4&&(he=2)),!1;var l=Error(d(520),{cause:a});if(l=St(l,t),il===null?il=[l]:il.push(l),he!==4&&(he=2),e===null)return!0;a=St(a,t),t=e;do{switch(t.tag){case 3:return t.flags|=65536,n=i&-i,t.lanes|=n,n=vc(t.stateNode,a,n),Jo(t,n),!1;case 1:if(e=t.type,l=t.stateNode,(t.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(Va===null||!Va.has(l))))return t.flags|=65536,i&=-i,t.lanes|=i,i=Ff(i),Pf(i,n,t,a),Jo(t,i),!1;break;case 22:if(t.memoizedState!==null)return t.flags|=65536,!1}t=t.return}while(t!==null);return!1}var yc=Error(d(461)),je=!1;function ke(n,e,t,a){e.child=n===null?nf(e,null,t,a):gi(e,n.child,t,a)}function Wf(n,e,t,a,i){t=t.render;var l=e.ref;if("ref"in a){var s={};for(var c in a)c!=="ref"&&(s[c]=a[c])}else s=a;return ci(e),a=ec(n,e,t,s,l,i),c=tc(),n!==null&&!je?(ac(n,e,i),ga(n,e,i)):(On&&c&&Jl(e),e.flags|=1,ke(n,e,a,i),e.child)}function $f(n,e,t,a,i){if(n===null){var l=t.type;return typeof l=="function"&&!zo(l)&&l.defaultProps===void 0&&t.compare===null?(e.tag=15,e.type=l,nh(n,e,l,a,i)):(n=Xl(t.type,null,a,e,e.mode,i),n.ref=e.ref,n.return=e,e.child=n)}if(l=n.child,!Ec(n,i)){var s=l.memoizedProps;if(t=t.compare,t=t!==null?t:Lr,t(s,a)&&n.ref===e.ref)return ga(n,e,i)}return e.flags|=1,n=oa(l,a),n.ref=e.ref,n.return=e,e.child=n}function nh(n,e,t,a,i){if(n!==null){var l=n.memoizedProps;if(Lr(l,a)&&n.ref===e.ref)if(je=!1,e.pendingProps=a=l,Ec(n,i))(n.flags&131072)!==0&&(je=!0);else return e.lanes=n.lanes,ga(n,e,i)}return xc(n,e,t,a,i)}function eh(n,e,t,a){var i=a.children,l=n!==null?n.memoizedState:null;if(n===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(l=l!==null?l.baseLanes|t:t,n!==null){for(a=e.child=n.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;a=i&~l}else a=0,e.child=null;return th(n,e,l,t,a)}if((t&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},n!==null&&$l(e,l!==null?l.cachePool:null),l!==null?af(e,l):Fo(),rf(e);else return a=e.lanes=536870912,th(n,e,l!==null?l.baseLanes|t:t,t,a)}else l!==null?($l(e,l.cachePool),af(e,l),Ua(),e.memoizedState=null):(n!==null&&$l(e,null),Fo(),Ua());return ke(n,e,i,t),e.child}function Pr(n,e){return n!==null&&n.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function th(n,e,t,a,i){var l=Ko();return l=l===null?null:{parent:Te._currentValue,pool:l},e.memoizedState={baseLanes:t,cachePool:l},n!==null&&$l(e,null),Fo(),rf(e),n!==null&&oi(n,e,a,!0),e.childLanes=i,null}function ms(n,e){return e=bs({mode:e.mode,children:e.children},n.mode),e.ref=n.ref,n.child=e,e.return=n,e}function ah(n,e,t){return gi(e,n.child,null,t),n=ms(e,e.pendingProps),n.flags|=2,ft(e),e.memoizedState=null,n}function _1(n,e,t){var a=e.pendingProps,i=(e.flags&128)!==0;if(e.flags&=-129,n===null){if(On){if(a.mode==="hidden")return n=ms(e,a),e.lanes=536870912,n.memoizedState={baseLanes:0,cachePool:null},Pr(null,n);if(Wo(e),(n=te)?(n=Ag(n,wt),n=n!==null&&n.data==="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:Oa!==null?{id:Vt,overflow:Kt}:null,retryLane:536870912,hydrationErrors:null},t=Hd(n),t.return=e,e.child=t,Re=e,te=null)):n=null,n===null)throw ka(e);return e.lanes=536870912,null}return ms(e,a)}var l=n.memoizedState;if(l!==null){var s=l.dehydrated;if(Wo(e),i)if(e.flags&256)e.flags&=-257,e=ah(n,e,t);else if(e.memoizedState!==null)e.child=n.child,e.flags|=128,e=null;else throw Error(d(558));else if(je||oi(n,e,t,!1),i=(t&n.childLanes)!==0,je||i){if(La.current===null){if(a=ee,a!==null&&(s=wr(a,t),s!==0&&s!==l.retryLane))throw l.retryLane=s,ii(n,s),ot(a,n,s),yc;Ls()}e=ah(n,e,t)}else n=l.treeContext,te=Ot(s.nextSibling),Re=e,On=!0,Aa=null,wt=!1,n!==null&&Yd(e,n),e=ms(e,a),e.flags|=134221824;return e}return n=oa(n.child,{mode:a.mode,children:a.children}),n.ref=e.ref,e.child=n,n.return=e,n}function Qi(n,e){var t=e.ref;if(t===null)n!==null&&n.ref!==null&&(e.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(d(284));(n===null||n.ref!==t)&&(e.flags|=4194816)}}function xc(n,e,t,a,i){return ci(e),t=ec(n,e,t,a,void 0,i),a=tc(),n!==null&&!je?(ac(n,e,i),ga(n,e,i)):(On&&a&&Jl(e),e.flags|=1,ke(n,e,t,i),e.child)}function ih(n,e,t,a,i,l){return ci(e),e.updateQueue=null,t=sf(e,a,t,i),lf(n),a=tc(),n!==null&&!je?(ac(n,e,l),ga(n,e,l)):(On&&a&&Jl(e),e.flags|=1,ke(n,e,t,l),e.child)}function rh(n,e,t,a,i){if(ci(e),e.stateNode===null){var l=Bi,s=t.contextType;typeof s=="object"&&s!==null&&(l=Ue(s)),l=new t(a,l),e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=bc,e.stateNode=l,l._reactInternals=e,l=e.stateNode,l.props=a,l.state=e.memoizedState,l.refs={},Xo(e),s=t.contextType,l.context=typeof s=="object"&&s!==null?Ue(s):Bi,l.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(mc(e,t,s,a),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(s=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),s!==l.state&&bc.enqueueReplaceState(l,l.state,null),Xr(e,a,l,i),Ir(),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(n===null){l=e.stateNode;var c=e.memoizedProps,f=mi(t,c);l.props=f;var T=l.context,N=t.contextType;s=Bi,typeof N=="object"&&N!==null&&(s=Ue(N));var A=t.getDerivedStateFromProps;N=typeof A=="function"||typeof l.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,N||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c||T!==s)&&If(e,l,a,s),Ra=!1;var x=e.memoizedState;l.state=x,Xr(e,a,l,i),Ir(),T=e.memoizedState,c||x!==T||Ra?(typeof A=="function"&&(mc(e,t,A,a),T=e.memoizedState),(f=Ra||Kf(e,t,f,a,x,T,s))?(N||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=T),l.props=a,l.state=T,l.context=s,a=f):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{l=e.stateNode,Qo(n,e),s=e.memoizedProps,N=mi(t,s),l.props=N,A=e.pendingProps,x=l.context,T=t.contextType,f=Bi,typeof T=="object"&&T!==null&&(f=Ue(T)),c=t.getDerivedStateFromProps,(T=typeof c=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==A||x!==f)&&If(e,l,a,f),Ra=!1,x=e.memoizedState,l.state=x,Xr(e,a,l,i),Ir();var j=e.memoizedState;s!==A||x!==j||Ra||n!==null&&n.dependencies!==null&&Pl(n.dependencies)?(typeof c=="function"&&(mc(e,t,c,a),j=e.memoizedState),(N=Ra||Kf(e,t,N,a,x,j,f)||n!==null&&n.dependencies!==null&&Pl(n.dependencies))?(T||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,j,f),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,j,f)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===n.memoizedProps&&x===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===n.memoizedProps&&x===n.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=j),l.props=a,l.state=j,l.context=f,a=N):(typeof l.componentDidUpdate!="function"||s===n.memoizedProps&&x===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===n.memoizedProps&&x===n.memoizedState||(e.flags|=1024),a=!1)}return l=a,Qi(n,e),a=(e.flags&128)!==0,l||a?(l=e.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:l.render(),e.flags|=1,n!==null&&a?(e.child=gi(e,n.child,null,i),e.child=gi(e,null,t,i)):ke(n,e,t,i),e.memoizedState=l.state,n=e.child):n=ga(n,e,i),n}function lh(n,e,t,a){return li(),e.flags|=256,ke(n,e,t,a),e.child}var _c={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Tc(n){return{baseLanes:n,cachePool:Jd()}}function Sc(n,e,t){return n=n!==null?n.childLanes&~t:0,e&&(n|=pt),n}function sh(n,e,t){var a=e.pendingProps,i=!1,l=(e.flags&128)!==0,s;if((s=l)||(s=n!==null&&n.memoizedState===null?!1:(qe.current&2)!==0),s&&(i=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,n===null){if(On){if(i?Ba(e):Ua(),(n=te)?(n=Ag(n,wt),n=n!==null&&n.data!=="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:Oa!==null?{id:Vt,overflow:Kt}:null,retryLane:536870912,hydrationErrors:null},t=Hd(n),t.return=e,e.child=t,Re=e,te=null)):n=null,n===null)throw ka(e);return Tu(n)?e.lanes=32:e.lanes=536870912,null}return l=a.children,a=a.fallback,i?(Ua(),i=e.mode,l=bs({mode:"hidden",children:l},i),a=ri(a,i,t,null),l.return=e,a.return=e,l.sibling=a,e.child=l,a=e.child,a.memoizedState=Tc(t),a.childLanes=Sc(n,s,t),e.memoizedState=_c,Pr(null,a)):(Ba(e),jc(e,l))}var c=n.memoizedState;if(c!==null){var f=c.dehydrated;if(f!==null)return T1(n,e,l,s,a,f,c,t)}return i?(Ua(),i=a.fallback,l=e.mode,c=n.child,f=c.sibling,a=oa(c,{mode:"hidden",children:a.children}),a.subtreeFlags=c.subtreeFlags&1206910976,f!==null?i=oa(f,i):(i=ri(i,l,t,null),i.flags|=2),i.return=e,a.return=e,a.sibling=i,e.child=a,Pr(null,a),a=e.child,i=n.child.memoizedState,i===null?i=Tc(t):(l=i.cachePool,l!==null?(c=Te._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=Jd(),i={baseLanes:i.baseLanes|t,cachePool:l}),a.memoizedState=i,a.childLanes=Sc(n,s,t),e.memoizedState=_c,Pr(n.child,a)):(Ba(e),t=n.child,n=t.sibling,t=oa(t,{mode:"visible",children:a.children}),t.return=e,t.sibling=null,n!==null&&(s=e.deletions,s===null?(e.deletions=[n],e.flags|=16):s.push(n)),e.child=t,e.memoizedState=null,t)}function jc(n,e){return e=bs({mode:"visible",children:e},n.mode),e.return=n,n.child=e}function bs(n,e){return n=it(22,n,null,e),n.lanes=0,n}function vs(n,e,t){return gi(e,n.child,null,t),n=jc(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function T1(n,e,t,a,i,l,s,c){if(t)return e.flags&256?(Ba(e),e.flags&=-257,vs(n,e,c)):e.memoizedState!==null?(Ua(),e.child=n.child,e.flags|=128,null):(Ua(),l=i.fallback,s=e.mode,i=bs({mode:"visible",children:i.children},s),l=ri(l,s,c,null),l.flags|=2,i.return=e,l.return=e,i.sibling=l,e.child=i,gi(e,n.child,null,c),i=e.child,i.memoizedState=Tc(c),i.childLanes=Sc(n,a,c),e.memoizedState=_c,Pr(null,i));if(Ba(e),Tu(l)){if(a=l.nextSibling&&l.nextSibling.dataset,a)var f=a.dgst;return a=f,a!==""&&(i=Error(d(419)),i.stack="",i.digest=a,Hr({value:i,source:null,stack:null})),vs(n,e,c)}if(je||oi(n,e,c,!1),a=(c&n.childLanes)!==0,je||a){if(La.current!==null)return vs(n,e,c);if(a=ee,a!==null&&(i=wr(a,c),i!==0&&i!==s.retryLane))throw s.retryLane=i,ii(n,i),ot(a,n,i),yc;return _u(l)||Ls(),vs(n,e,c)}return _u(l)?(e.flags|=192,e.child=n.child,null):(n=s.treeContext,te=Ot(l.nextSibling),Re=e,On=!0,Aa=null,wt=!1,n!==null&&Yd(e,n),e=jc(e,i.children),e.flags|=134221824,e)}function oh(n,e,t){n.lanes|=e;var a=n.alternate;a!==null&&(a.lanes|=e),Fl(n.return,e,t)}function ch(n){for(var e=null;n!==null;){var t=n.alternate;t!==null&&rs(t)===null&&(e=n),n=n.sibling}return e}function ys(n,e,t,a,i,l){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:i,treeForkCount:l}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=t,s.tailMode=i,s.treeForkCount=l)}function Nc(n){var e=n.child;for(n.child=null;e!==null;){var t=e.sibling;e.sibling=n.child,n.child=e,e=t}}function wc(n,e,t){var a=e.pendingProps,i=a.revealOrder,l=a.tail;a=a.children;var s=qe.current;if(e.flags&128)return Qr(e,s),null;var c=(s&2)!==0;if(c?(s=s&1|2,e.flags|=128):s&=1,Qr(e,s),i==="backwards"&&n!==null?(Nc(n),ke(n,e,a,t),Nc(n)):ke(n,e,a,t),a=On?Ur:0,!c&&n!==null&&(n.flags&128)!==0)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&oh(n,t,e);else if(n.tag===19)oh(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(i){case"backwards":t=ch(e.child),t===null?(i=e.child,e.child=null):(i=t.sibling,t.sibling=null,Nc(e)),ys(e,!0,i,null,l,a);break;case"unstable_legacy-backwards":for(t=null,i=e.child,e.child=null;i!==null;){if(n=i.alternate,n!==null&&rs(n)===null){e.child=i;break}n=i.sibling,i.sibling=t,t=i,i=n}ys(e,!0,t,null,l,a);break;case"together":ys(e,!1,null,null,void 0,a);break;case"independent":e.memoizedState=null;break;default:t=ch(e.child),t===null?(i=e.child,e.child=null):(i=t.sibling,t.sibling=null),ys(e,!1,i,t,l,a)}return e.child}function uh(n,e,t){var a=e.pendingProps;return Ma(e,e.type,a.value),ke(n,e,a.children,t),e.child}function ga(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Ya|=e.lanes,(t&e.childLanes)===0)if(n!==null){if(oi(n,e,t,!1),(t&e.childLanes)===0)return null}else return null;if(n!==null&&e.child!==n.child)throw Error(d(153));if(e.child!==null){for(n=e.child,t=oa(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=oa(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Ec(n,e){return(n.lanes&e)!==0?!0:(n=n.dependencies,!!(n!==null&&Pl(n)))}function S1(n,e,t){switch(e.tag){case 3:$a(e,e.stateNode.containerInfo),Ma(e,Te,n.memoizedState.cache),li();break;case 27:case 5:ji(e);break;case 4:$a(e,e.stateNode.containerInfo);break;case 10:Ma(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Wo(e),null;break;case 13:var a=e.memoizedState;if(a!==null){if(a.dehydrated!==null)return Ba(e),e.flags|=128,null;a=oi(n,e,t,!1);var i=e.child.childLanes;return a||(t&i)!==0?sh(n,e,t):(Ba(e),n=ga(n,e,t),n!==null?n.sibling:null)}Ba(e);break;case 19:if(e.flags&128)return wc(n,e,t);if(i=(n.flags&128)!==0,a=(t&e.childLanes)!==0,a||(oi(n,e,t,!1),a=(t&e.childLanes)!==0),i){if(a)return wc(n,e,t);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Qr(e,qe.current),a)break;return null;case 22:return e.lanes=0,eh(n,e,t,e.pendingProps);case 24:Ma(e,Te,n.memoizedState.cache)}return ga(n,e,t)}function dh(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps)je=!0;else{if(!Ec(n,t)&&(e.flags&128)===0)return je=!1,S1(n,e,t);je=(n.flags&131072)!==0}else je=!1,On&&(e.flags&1048576)!==0&&Gd(e,Ur,e.index);switch(e.lanes=0,e.tag){case 16:n:{var a=e.pendingProps;if(n=fi(e.elementType),e.type=n,typeof n=="function")zo(n)?(a=mi(n,a),e.tag=1,e=rh(null,e,n,a,t)):(e.tag=0,e=xc(null,e,n,a,t));else{if(n!=null){var i=n.$$typeof;if(i===q){e.tag=11,e=Wf(null,e,n,a,t);break n}else if(i===An){e.tag=14,e=$f(null,e,n,a,t);break n}else if(i===le){e.tag=10,e.type=n,e=uh(null,e,t);break n}}throw e=Mn(n)||n,Error(d(306,e,""))}}return e;case 0:return xc(n,e,e.type,e.pendingProps,t);case 1:return a=e.type,i=mi(a,e.pendingProps),rh(n,e,a,i,t);case 3:n:{if($a(e,e.stateNode.containerInfo),n===null)throw Error(d(387));a=e.pendingProps;var l=e.memoizedState;i=l.element,Qo(n,e),Xr(e,a,null,t);var s=e.memoizedState;if(a=s.cache,Ma(e,Te,a),a!==l.cache&&Go(e,[Te],t,!0),Ir(),a=s.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){e=lh(n,e,a,t);break n}else if(a!==i){i=St(Error(d(424)),e),Hr(i),e=lh(n,e,a,t);break n}else for(n=e.stateNode.containerInfo,n.nodeType===9?n=n.body:n=n.nodeName==="HTML"?n.ownerDocument.body:n,te=Ot(n.firstChild),Re=e,On=!0,Aa=null,wt=!0,t=nf(e,null,a,t),e.child=t;t;)t.flags=t.flags&-3|134221824,t=t.sibling;else{if(li(),a===i){e=ga(n,e,t);break n}ke(n,e,a,t)}e=e.child}return e;case 26:return Qi(n,e),n===null?(t=Lg(e.type,null,e.pendingProps,null))?e.memoizedState=t:On||(e.stateNode=pg(e.type,e.pendingProps,Ht.current,e)):e.memoizedState=Lg(e.type,n.memoizedProps,e.pendingProps,n.memoizedState),null;case 27:return ji(e),n===null&&On&&(a=e.stateNode=Cg(e.type,e.pendingProps,Ht.current),Re=e,wt=!0,i=te,Xa(e.type)?(Su=i,te=Ot(a.firstChild)):te=i),ke(n,e,e.pendingProps.children,t),Qi(n,e),n===null&&(e.flags|=4194304),e.child;case 5:return n===null&&On&&((i=a=te)&&(a=by(a,e.type,e.pendingProps,wt),a!==null?(e.stateNode=a,Re=e,te=Ot(a.firstChild),wt=!1,i=!0):i=!1),i||ka(e)),ji(e),i=e.type,l=e.pendingProps,s=n!==null?n.memoizedProps:null,a=l.children,gu(i,l)?a=null:s!==null&&gu(i,s)&&(e.flags|=32),e.memoizedState!==null&&(i=ec(n,e,f1,null,null,t),dr._currentValue=i),Qi(n,e),ke(n,e,a,t),e.child;case 6:return n===null&&On&&((n=t=te)&&(t=vy(t,e.pendingProps,wt),t!==null?(e.stateNode=t,Re=e,te=null,n=!0):n=!1),n||ka(e)),null;case 13:return sh(n,e,t);case 4:return $a(e,e.stateNode.containerInfo),a=e.pendingProps,n===null?e.child=gi(e,null,a,t):ke(n,e,a,t),e.child;case 11:return Wf(n,e,e.type,e.pendingProps,t);case 7:return a=e.pendingProps,Qi(n,e),ke(n,e,a,t),e.child;case 8:return ke(n,e,e.pendingProps.children,t),e.child;case 12:return ke(n,e,e.pendingProps.children,t),e.child;case 10:return uh(n,e,t);case 9:return i=e.type._context,a=e.pendingProps.children,ci(e),i=Ue(i),a=a(i),e.flags|=1,ke(n,e,a,t),e.child;case 14:return $f(n,e,e.type,e.pendingProps,t);case 15:return nh(n,e,e.type,e.pendingProps,t);case 19:return wc(n,e,t);case 31:return _1(n,e,t);case 22:return eh(n,e,t,e.pendingProps);case 24:return ci(e),a=Ue(Te),n===null?(i=Ko(),i===null&&(i=ee,l=Yo(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=t),i=l),e.memoizedState={parent:a,cache:i},Xo(e),Ma(e,Te,i)):((n.lanes&t)!==0&&(Qo(n,e),Xr(e,null,null,t),Ir()),i=n.memoizedState,l=e.memoizedState,i.parent!==a?(i={parent:a,cache:a},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),Ma(e,Te,a)):(a=l.cache,Ma(e,Te,a),a!==i.cache&&Go(e,[Te],t,!0))),ke(n,e,e.pendingProps.children,t),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),a=e.pendingProps,a.name!=null&&a.name!=="auto"?e.flags|=n===null?18882560:18874368:On&&Jl(e),n!==null&&n.memoizedProps.name!==a.name?e.flags|=4194816:Qi(n,e),ke(n,e,a.children,t),e.child;case 29:throw e.pendingProps}throw Error(d(156,e.tag))}function pa(n){n.flags|=4}function Oc(n,e,t,a,i){var l;if((l=(n.mode&32)!==0)&&(l=t===null?qg(e,a):qg(e,a)&&(a.src!==t.src||a.srcSet!==t.srcSet)),l){if(n.flags|=16777216,(i&335544128)===i)if(n.stateNode.complete)n.flags|=8192;else if(Xh())n.flags|=8192;else throw hi=es,Io}else n.flags&=-16777217}function fh(n,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Gg(e))if(Xh())n.flags|=8192;else throw hi=es,Io}function xs(n,e){e!==null&&(n.flags|=4),n.flags&16384&&(e=n.tag!==22?Nr():536870912,n.lanes|=e,Wi|=e)}function Wr(n,e){if(!On)switch(n.tailMode){case"visible":break;case"collapsed":for(var t=n.tail,a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:a.sibling=null;break;default:for(e=n.tail,t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null}}function ae(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,a=0;if(e)for(var i=n.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags&1206910976,a|=i.flags&1206910976,i.return=n,i=i.sibling;else for(i=n.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=n,i=i.sibling;return n.subtreeFlags|=a,n.childLanes=t,e}function j1(n,e,t){var a=e.pendingProps;switch(Bo(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(e),null;case 1:return ae(e),null;case 3:return t=e.stateNode,a=null,n!==null&&(a=n.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),da(Te),nt(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(n===null||n.child===null)&&(qi(e)?pa(e):n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ho())),ae(e),null;case 26:var i=e.type,l=e.memoizedState;return n===null?(pa(e),l!==null?(ae(e),fh(e,l)):(ae(e),Oc(e,i,null,a,t))):l?l!==n.memoizedState?(pa(e),ae(e),fh(e,l)):(ae(e),e.flags&=-16777217):(n=n.memoizedProps,n!==a&&pa(e),ae(e),Oc(e,i,n,a,t)),null;case 27:if(kt(e),t=Ht.current,i=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==a&&pa(e);else{if(!a){if(e.stateNode===null)throw Error(d(166));return ae(e),e.subtreeFlags&=-33554433,null}n=yt.current,qi(e)?Vd(e):(n=Cg(i,a,t),e.stateNode=n,pa(e))}return ae(e),e.subtreeFlags&=-33554433,null;case 5:if(kt(e),i=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==a&&pa(e);else{if(!a){if(e.stateNode===null)throw Error(d(166));return ae(e),e.subtreeFlags&=-33554433,null}if(l=yt.current,qi(e))Vd(e);else{var s=cl(Ht.current);switch(l){case 1:l=s.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:l=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":l=s.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":l=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":l=s.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof a.is=="string"?s.createElement("select",{is:a.is}):s.createElement("select"),a.multiple?l.multiple=!0:a.size&&(l.size=a.size);break;default:l=typeof a.is=="string"?s.createElement(i,{is:a.is}):s.createElement(i)}}l[Ae]=e,l[D]=a;n:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)l.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break n;for(;s.sibling===null;){if(s.return===null||s.return===e)break n;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=l;n:switch(Ye(l,i,a),i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break n;case"img":a=!0;break n;default:a=!1}a&&pa(e)}}return ae(e),e.subtreeFlags&=-33554433,Oc(e,e.type,n===null?null:n.memoizedProps,e.pendingProps,t),null;case 6:if(n&&e.stateNode!=null)n.memoizedProps!==a&&pa(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(d(166));if(n=Ht.current,qi(e)){if(n=e.stateNode,t=e.memoizedProps,a=null,i=Re,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}n[Ae]=e,n=!!(n.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||dg(n.nodeValue,t)),n||ka(e,!0)}else n=cl(n).createTextNode(a),n[Ae]=e,e.stateNode=n}return ae(e),null;case 31:if(t=e.memoizedState,n===null||n.memoizedState!==null){if(a=qi(e),t!==null){if(n===null){if(!a)throw Error(d(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(557));n[Ae]=e}else li(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ae(e),n=!1}else t=Ho(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=t),n=!0;if(!n)return e.flags&256?(ft(e),e):(ft(e),null);if((e.flags&128)!==0)throw Error(d(558))}return ae(e),null;case 13:if(a=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(i=qi(e),a!==null&&a.dehydrated!==null){if(n===null){if(!i)throw Error(d(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(d(317));i[Ae]=e}else li(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ae(e),i=!1}else i=Ho(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(ft(e),e):(ft(e),null)}return ft(e),(e.flags&128)!==0?(e.lanes=t,e):(t=a!==null,n=n!==null&&n.memoizedState!==null,t&&(a=e.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==i&&(a.flags|=2048)),t!==n&&t&&(e.child.flags|=8192),xs(e,e.updateQueue),ae(e),null);case 4:return nt(),n===null&&cu(e.stateNode.containerInfo),e.flags|=67108864,ae(e),null;case 10:return da(e.type),ae(e),null;case 19:if($o(e),a=e.memoizedState,a===null)return ae(e),null;if(i=(e.flags&128)!==0,l=a.rendering,l===null)if(i)Wr(a,!1);else{if(he!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(l=rs(n),l!==null){for(e.flags|=128,Wr(a,!1),n=l.updateQueue,e.updateQueue=n,xs(e,n),e.subtreeFlags=0,n=t,t=e.child;t!==null;)Ud(t,n),t=t.sibling;return Qr(e,qe.current&1|2),On&&ca(e,a.treeForkCount),e.child}n=n.sibling}a.tail!==null&&Ie()>Cs&&(e.flags|=128,i=!0,Wr(a,!1),e.lanes=4194304)}else{if(!i)if(n=rs(l),n!==null){if(e.flags|=128,i=!0,n=n.updateQueue,e.updateQueue=n,xs(e,n),Wr(a,!0),a.tail===null&&a.tailMode!=="collapsed"&&a.tailMode!=="visible"&&!l.alternate&&!On)return ae(e),null}else 2*Ie()-a.renderingStartTime>Cs&&t!==536870912&&(e.flags|=128,i=!0,Wr(a,!1),e.lanes=4194304);a.isBackwards?(l.sibling=e.child,e.child=l):(n=a.last,n!==null?n.sibling=l:e.child=l,a.last=l)}if(a.tail!==null){n=a.tail;n:{for(t=n;t!==null;){if(t.alternate!==null){t=!1;break n}t=t.sibling}t=!0}return a.rendering=n,a.tail=n.sibling,a.renderingStartTime=Ie(),n.sibling=null,l=qe.current,l=i?l&1|2:l&1,a.tailMode==="visible"||a.tailMode==="collapsed"||!t||On?Qr(e,l):(t=l,Pn(He,e),Pn(qe,t),Xe===null&&(Xe=e)),On&&ca(e,a.treeForkCount),n}return ae(e),null;case 22:case 23:return ft(e),Po(),a=e.memoizedState!==null,n!==null?n.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(t&536870912)!==0&&(e.flags&128)===0&&(ae(e),e.subtreeFlags&6&&(e.flags|=8192)):ae(e),t=e.updateQueue,t!==null&&xs(e,t.retryQueue),t=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==t&&(e.flags|=2048),n!==null&&Oe(di),null;case 24:return t=null,n!==null&&(t=n.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),da(Te),ae(e),null;case 25:return null;case 30:return e.flags|=33554432,ae(e),null}throw Error(d(156,e.tag))}function N1(n,e){switch(Bo(e),e.tag){case 1:return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return da(Te),nt(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 26:case 27:case 5:return kt(e),null;case 31:if(e.memoizedState!==null){if(ft(e),e.alternate===null)throw Error(d(340));li()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 13:if(ft(e),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(d(340));li()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return $o(e),n=e.flags,n&65536?(e.flags=n&-65537|128,n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null),e.flags|=4,e):null;case 4:return nt(),null;case 10:return da(e.type),null;case 22:case 23:return ft(e),Po(),n!==null&&Oe(di),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 24:return da(Te),null;case 25:return null;default:return null}}function hh(n,e){switch(Bo(e),e.tag){case 3:da(Te),nt();break;case 26:case 27:case 5:kt(e);break;case 4:nt();break;case 31:e.memoizedState!==null&&ft(e);break;case 13:ft(e);break;case 19:$o(e);break;case 10:da(e.type);break;case 22:case 23:ft(e),Po(),n!==null&&Oe(di);break;case 24:da(Te)}}function $r(n,e){try{var t=e.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var i=a.next;t=i;do{if((t.tag&n)===n){a=void 0;var l=t.create,s=t.inst;a=l(),s.destroy=a}t=t.next}while(t!==i)}}catch(c){Zn(e,e.return,c)}}function Ha(n,e,t){try{var a=e.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&n)===n){var s=a.inst,c=s.destroy;if(c!==void 0){s.destroy=void 0,i=e;var f=t,T=c;try{T()}catch(N){Zn(i,f,N)}}}a=a.next}while(a!==l)}}catch(N){Zn(e,e.return,N)}}function gh(n){var e=n.updateQueue;if(e!==null){var t=n.stateNode;try{tf(e,t)}catch(a){Zn(n,n.return,a)}}}function ph(n,e,t){t.props=mi(n.type,n.memoizedProps),t.state=n.memoizedState;try{t.componentWillUnmount()}catch(a){Zn(n,e,a)}}function It(n,e){try{var t=n.ref;if(t!==null){switch(n.tag){case 26:case 27:case 5:var a=n.stateNode;break;case 30:var i=n.stateNode,l=la(n.memoizedProps,i);(i.ref===null||i.ref.name!==l)&&(i.ref=Tg(l)),a=i.ref;break;case 7:if(n.stateNode===null){var s=new bt(n);y(n.child,!1,py,s,void 0,void 0),n.stateNode=s}a=n.stateNode;break;default:a=n.stateNode}typeof t=="function"?n.refCleanup=t(a):t.current=a}}catch(c){Zn(n,e,c)}}function Ge(n,e){var t=n.ref,a=n.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(i){Zn(n,e,i)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(i){Zn(n,e,i)}else t.current=null}function _s(n,e){if((n.tag===5||n.tag===27||n.tag===6)&&n.alternate===null&&e!==null)for(var t=0;t<e.length;t++)Og(n.stateNode,e[t])}function mh(n){for(var e=n.return;e!==null&&(kc(e)&&Og(n.stateNode,e.stateNode),!Ac(e));)e=e.return}function nl(n){for(var e=n.return;e!==null&&(kc(e)&&my(n.stateNode,e.stateNode),!Ac(e));)e=e.return}function Ac(n){return n.tag===5||n.tag===3||n.tag===27}function kc(n){return n&&n.tag===7&&n.stateNode!==null}function Mc(n){var e=n.type,t=n.memoizedProps,a=n.stateNode;try{n:switch(e){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break n;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(i){Zn(n,n.return,i)}}function Cc(n,e,t){try{var a=n.stateNode;P1(a,n.type,t,e),a[D]=e}catch(i){Zn(n,n.return,i)}}function bh(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Xa(n.type)||n.tag===4}function Rc(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||bh(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Xa(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function zc(n,e,t,a){var i=n.tag;if(i===5||i===6)i=n.stateNode,e?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(i,e):(e=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.appendChild(i),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Yt)),_s(n,a),Bn=!0;else if(i!==4&&(i===27&&(_s(n,a),a=null,Xa(n.type)&&(t=n.stateNode,e=null)),n=n.child,n!==null))for(zc(n,e,t,a),n=n.sibling;n!==null;)zc(n,e,t,a),n=n.sibling}function Ts(n,e,t,a){var i=n.tag;if(i===5||i===6)i=n.stateNode,e?t.insertBefore(i,e):t.appendChild(i),_s(n,a),Bn=!0;else if(i!==4&&(i===27&&(_s(n,a),a=null,Xa(n.type)&&(t=n.stateNode)),n=n.child,n!==null))for(Ts(n,e,t,a),n=n.sibling;n!==null;)Ts(n,e,t,a),n=n.sibling}function vh(n){var e=n.stateNode,t=n.memoizedProps;try{for(var a=n.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Ye(e,a,t),e[Ae]=n,e[D]=t}catch(l){Zn(n,n.return,l)}}var Ss=!1,ht=null;function yh(n){(n.tag===30||(n.subtreeFlags&33554432)!==0)&&(Ss=!0)}var Xt=null;function xh(){var n=Xt;return Xt=null,n}var rt=0;function Ji(n,e,t,a,i){return rt=0,_h(n.child,e,t,a,i)}function _h(n,e,t,a,i){for(var l=!1;n!==null;){if(n.tag===5){var s=n.stateNode;if(a!==null){var c=bu(s);a.push(c),c.view&&(l=!0)}else l||bu(s).view&&(l=!0);Ss=!0,xg(s,rt===0?e:e+"_"+rt,t),rt++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&i||_h(n.child,e,t,a,i)&&(l=!0));n=n.sibling}return l}function Qt(n,e){for(;n!==null;)n.tag===5?_g(n.stateNode,n.memoizedProps):(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&e||Qt(n.child,e)),n=n.sibling}function js(n){if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if((n.tag!==22||n.memoizedState===null)&&(js(n),n.tag===30&&(n.flags&18874368)!==0&&n.stateNode.paired)){var e=n.memoizedProps;if(e.name==null||e.name==="auto")throw Error(d(544));var t=e.name;e=sa(e.default,e.share),e!=="none"&&(Ji(n,t,e,null,!1)||Qt(n.child,!1))}n=n.sibling}}function Dc(n,e){if(n.tag===30){var t=n.stateNode,a=n.memoizedProps,i=la(a,t),l=sa(a.default,t.paired?a.share:a.enter);l!=="none"?Ji(n,i,l,null,!1)?(js(n),t.paired||e||tr(n,a.onEnter)):Qt(n.child,!1):js(n)}else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)Dc(n,e),n=n.sibling;else js(n)}function Lc(n){if(ht!==null&&ht.size!==0){var e=ht;if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if(n.tag!==22||n.memoizedState===null){if(n.tag===30&&(n.flags&18874368)!==0){var t=n.memoizedProps,a=t.name;if(a!=null&&a!=="auto"){var i=e.get(a);if(i!==void 0){var l=sa(t.default,t.share);if(l!=="none"&&(Ji(n,a,l,null,!1)?(l=n.stateNode,i.paired=l,l.paired=i,tr(n,t.onShare)):Qt(n.child,!1)),e.delete(a),e.size===0)break}}}Lc(n)}n=n.sibling}}}function Bc(n){if(n.tag===30){var e=n.memoizedProps,t=la(e,n.stateNode),a=ht!==null?ht.get(t):void 0,i=sa(e.default,a!==void 0?e.share:e.exit);i!=="none"&&(Ji(n,t,i,null,!1)?a!==void 0?(i=n.stateNode,a.paired=i,i.paired=a,ht.delete(t),tr(n,e.onShare)):tr(n,e.onExit):Qt(n.child,!1)),ht!==null&&Lc(n)}else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)Bc(n),n=n.sibling;else ht!==null&&Lc(n)}function Th(n){for(n=n.child;n!==null;){if(n.tag===30){var e=n.memoizedProps,t=la(e,n.stateNode);e=sa(e.default,e.update),n.flags&=-5,e!=="none"&&Ji(n,t,e,n.memoizedState=[],!1)}else(n.subtreeFlags&33554432)!==0&&Th(n);n=n.sibling}}function Uc(n){if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if(n.tag!==22||n.memoizedState===null){if(n.tag===30&&(n.flags&18874368)!==0){var e=n.stateNode;e.paired!==null&&(e.paired=null,Qt(n.child,!1))}Uc(n)}n=n.sibling}}function Ns(n){if(n.tag===30)n.stateNode.paired=null,Qt(n.child,!1),Uc(n);else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)Ns(n),n=n.sibling;else Uc(n)}function Sh(n){for(n=n.child;n!==null;)n.tag===30?Qt(n.child,!1):(n.subtreeFlags&33554432)!==0&&Sh(n),n=n.sibling}function Hc(n,e,t,a,i,l,s){for(var c=!1;e!==null;){if(e.tag===5){var f=e.stateNode;if(l!==null&&rt<l.length){var T=l[rt],N=bu(f);(T.view||N.view)&&(c=!0);var A;if(A=(n.flags&4)===0)if(N.clip)A=!0;else{A=T.rect;var x=N.rect;A=A.y!==x.y||A.x!==x.x||A.height!==x.height||A.width!==x.width}A&&(n.flags|=4),N.abs?N=!T.abs:(T=T.rect,N=N.rect,N=T.height!==N.height||T.width!==N.width),N&&(n.flags|=32)}else n.flags|=32;(n.flags&4)!==0&&xg(f,rt===0?t:t+"_"+rt,i),c&&(n.flags&4)!==0||(Xt===null&&(Xt=[]),Xt.push(f,rt===0?a:a+"_"+rt,e.memoizedProps)),rt++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s?n.flags|=e.flags&32:Hc(n,e.child,t,a,i,l,s)&&(c=!0));e=e.sibling}return c}function jh(n,e){for(n=n.child;n!==null;){if(n.tag===30){var t=n.memoizedProps,a=n.stateNode,i=la(t,a),l=sa(t.default,t.update),s;s=n.memoizedState,n.memoizedState=null,a=n;var c=n.child;rt=0,i=Hc(a,c,i,i,l,s,!1),(n.flags&4)!==0&&i&&tr(n,t.onUpdate)}else(n.subtreeFlags&33554432)!==0&&jh(n);n=n.sibling}}var ze=!1,In=!1,Jt=!1,qc=!1,Nh=typeof WeakSet=="function"?WeakSet:Set,De=null,Zt=!1,el=!1,ws=!1,Gc=!1;function w1(n,e,t){if(n=n.containerInfo,fu=fr,n=Od(n),Eo(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else n:{a=(a=n.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var l=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break n}var c=0,f=-1,T=-1,N=0,A=0,x=n,j=null;e:for(;;){for(var Y;x!==a||l!==0&&x.nodeType!==3||(f=c+l),x!==s||i!==0&&x.nodeType!==3||(T=c+i),x.nodeType===3&&(c+=x.nodeValue.length),(Y=x.firstChild)!==null;)j=x,x=Y;for(;;){if(x===n)break e;if(j===a&&++N===l&&(f=c),j===s&&++A===i&&(T=c),(Y=x.nextSibling)!==null)break;x=j,j=x.parentNode}x=Y}a=f===-1||T===-1?null:{start:f,end:T}}else a=null}a=a||{start:0,end:0}}else a=null;for(hu={focusedElem:n,selectionRange:a},fr=!1,t=(t&335544064)===t,De=e,e=t?9270:1024;De!==null;){if(n=De,t&&(a=n.deletions,a!==null))for(l=0;l<a.length;l++)t&&Bc(a[l]);if(n.alternate===null&&(n.flags&2)!==0)t&&yh(n),Es(t);else{if(n.tag===22){if(a=n.alternate,n.memoizedState!==null){a!==null&&a.memoizedState===null&&t&&Bc(a),Es(t);continue}else if(a!==null&&a.memoizedState!==null){t&&yh(n),Es(t);continue}}a=n.child,(n.subtreeFlags&e)!==0&&a!==null?(a.return=n,De=a):(t&&Th(n),Es(t))}}ht=null}function Es(n){for(;De!==null;){var e=De,t=n,a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((i&1024)!==0&&a!==null){t=void 0,i=a.memoizedProps,a=a.memoizedState;var l=e.stateNode;try{var s=mi(e.type,i);t=l.getSnapshotBeforeUpdate(s,a),l.__reactInternalSnapshotBeforeUpdate=t}catch(c){Zn(e,e.return,c)}}break;case 3:if((i&1024)!==0){if(a=e.stateNode.containerInfo,t=a.nodeType,t===9)xu(a);else if(t===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":xu(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:t&&a!==null&&(t=la(a.memoizedProps,a.stateNode),i=e.memoizedProps,i=sa(i.default,i.update),i!=="none"&&Ji(a,t,i,a.memoizedState=[],!0));break;default:if((i&1024)!==0)throw Error(d(163))}if(a=e.sibling,a!==null){a.return=e.return,De=a;break}De=e.return}}function wh(n,e,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Ft(n,t),a&4&&$r(5,t);break;case 1:if(Ft(n,t),a&4)if(n=t.stateNode,e===null)try{n.componentDidMount()}catch(s){Zn(t,t.return,s)}else{var i=mi(t.type,e.memoizedProps);e=e.memoizedState;try{n.componentDidUpdate(i,e,n.__reactInternalSnapshotBeforeUpdate)}catch(s){Zn(t,t.return,s)}}a&64&&gh(t),a&512&&It(t,t.return);break;case 3:if(Ft(n,t),a&64&&(n=t.updateQueue,n!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{tf(n,e)}catch(s){Zn(t,t.return,s)}}break;case 27:e===null&&a&4&&vh(t);case 26:case 5:Ft(n,t),e===null&&a&4&&Mc(t),a&512&&It(t,t.return);break;case 12:Ft(n,t);break;case 31:Ft(n,t),a&4&&kh(n,t);break;case 13:Ft(n,t),a&4&&Mh(n,t),a&64&&(n=t.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(t=U1.bind(null,t),yy(n,t))));break;case 22:if(a=t.memoizedState!==null||ze,!a){var l=e!==null&&e.memoizedState!==null||In;e=ze,i=In,ze=a,(In=l)&&!i?(a=2,(t.subtreeFlags&8772)!==0&&(a|=1),Lt(n,t,a)):Ft(n,t),ze=e,In=i}break;case 30:Ft(n,t),a&512&&It(t,t.return);break;case 7:a&512&&It(t,t.return);default:Ft(n,t)}}function Yc(n,e){for(n=n.child;n!==null;)Eh(n,e),n=n.sibling}function Eh(n,e){switch(n.tag){case 5:case 26:try{var t=n.stateNode;if(e){var a=t.style;typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"}else{var i=n.stateNode,l=n.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null;i.style.display=s==null||typeof s=="boolean"?"":(""+s).trim()}}catch(f){Zn(n,n.return,f)}Vc(n,e);break;case 6:try{n.stateNode.nodeValue=e?"":n.memoizedProps,Bn=!0}catch(f){Zn(n,n.return,f)}break;case 18:try{var c=n.stateNode;e?yg(c,!0):yg(n.stateNode,!1)}catch(f){Zn(n,n.return,f)}break;case 22:case 23:n.memoizedState===null&&Yc(n,e);break;default:Yc(n,e)}}function Vc(n,e){if(n.subtreeFlags&67108864)for(n=n.child;n!==null;){n:{var t=n,a=e;switch(t.tag){case 4:Eh(t,a);break n;case 22:t.memoizedState===null&&Vc(t,a);break n;default:Vc(t,a)}}n=n.sibling}}function Oh(n){var e=n.alternate;e!==null&&(n.alternate=null,Oh(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&Me(e)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var se=null,lt=!1;function zt(n,e,t){for(t=t.child;t!==null;)Ah(n,e,t),t=t.sibling}function Ah(n,e,t){if(Ln&&typeof Ln.onCommitFiberUnmount=="function")try{Ln.onCommitFiberUnmount(ne,t)}catch{}switch(t.tag){case 26:In||Ge(t,e),zt(n,e,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&!In&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:In||Ge(t,e),nl(t);var a=se,i=lt;Xa(t.type)&&(se=t.stateNode,lt=!1),zt(n,e,t),Rg(t.stateNode,t.type,t.memoizedProps),se=a,lt=i;break;case 5:In||Ge(t,e),nl(t);case 6:if(t.tag===6&&nl(t),a=se,i=lt,se=null,zt(n,e,t),se=a,lt=i,se!==null)if(lt)try{(se.nodeType===9?se.body:se.nodeName==="HTML"?se.ownerDocument.body:se).removeChild(t.stateNode),Bn=!0}catch(l){Zn(t,e,l)}else try{se.removeChild(t.stateNode),Bn=!0}catch(l){Zn(t,e,l)}break;case 18:se!==null&&(lt?(n=se,vg(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.stateNode),hr(n)):vg(se,t.stateNode));break;case 4:a=se,i=lt,se=t.stateNode.containerInfo,lt=!0,zt(n,e,t),se=a,lt=i;break;case 0:case 11:case 14:case 15:Ha(2,t,e),In||Ha(4,t,e),zt(n,e,t);break;case 1:In||(Ge(t,e),a=t.stateNode,typeof a.componentWillUnmount=="function"&&ph(t,e,a)),zt(n,e,t);break;case 21:zt(n,e,t);break;case 22:In=(a=In)||t.memoizedState!==null,zt(n,e,t),In=a;break;case 30:Ge(t,e),zt(n,e,t);break;case 7:In||Ge(t,e),zt(n,e,t);break;default:zt(n,e,t)}}function kh(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{hr(n)}catch(t){Zn(e,e.return,t)}}}function Mh(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{hr(n)}catch(t){Zn(e,e.return,t)}}function E1(n){switch(n.tag){case 31:case 13:case 19:var e=n.stateNode;return e===null&&(e=n.stateNode=new Nh),e;case 22:return n=n.stateNode,e=n._retryCache,e===null&&(e=n._retryCache=new Nh),e;default:throw Error(d(435,n.tag))}}function Os(n,e){var t=E1(n);e.forEach(function(a){if(!t.has(a)){t.add(a);var i=H1.bind(null,n,a);a.then(i,i)}})}function Ze(n,e,t){var a=e.deletions;if(a!==null)for(var i=0;i<a.length;i++){var l=a[i],s=n,c=e,f=c;n:for(;f!==null;){switch(f.tag){case 27:if(Xa(f.type)){se=f.stateNode,lt=!1;break n}break;case 5:se=f.stateNode,lt=!1;break n;case 3:case 4:se=f.stateNode.containerInfo,lt=!0;break n}f=f.return}if(se===null)throw Error(d(160));Ah(s,c,l),se=null,lt=!1,s=l.alternate,s!==null&&(s.return=null),l.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Ch(e,n,t),e=e.sibling}var Dt=null;function Ch(n,e,t){var a=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(i&4&&(a=n.updateQueue,a=a!==null?a.events:null,a!==null))for(var l=0;l<a.length;l++){var s=a[l];s.ref.impl=s.nextImpl}Ze(e,n,t),Fe(n),i&4&&(Ha(3,n,n.return),$r(3,n),Ha(5,n,n.return));break;case 1:Ze(e,n,t),Fe(n),i&512&&(In||a===null||Ge(a,a.return)),i&64&&ze&&(n=n.updateQueue,n!==null&&(e=n.callbacks,e!==null&&(t=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=t===null?e:t.concat(e))));break;case 26:if(l=Dt,Ze(e,n,t),Fe(n),i&512&&(In||a===null||Ge(a,a.return)),i&4)if(i=a!==null?a.memoizedState:null,t=n.memoizedState,a===null)if(t===null)if(n.stateNode===null)if(ze)n.stateNode=pg(n.type,n.memoizedProps,e.containerInfo,n);else{n:{e=n.type,t=n.memoizedProps,i=l.ownerDocument||l;e:switch(e){case"title":a=i.getElementsByTagName("title")[0],(!a||a[at]||a[Ae]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=i.createElement(e),i.head.insertBefore(a,i.querySelector("head > title"))),Ye(a,e,t),a[Ae]=n,xe(a),e=a;break n;case"link":if(l=Hg("link","href",i).get(e+(t.href||""))){for(s=0;s<l.length;s++)if(a=l[s],a.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&a.getAttribute("rel")===(t.rel==null?null:t.rel)&&a.getAttribute("title")===(t.title==null?null:t.title)&&a.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){l.splice(s,1);break e}}a=i.createElement(e),Ye(a,e,t),i.head.appendChild(a);break;case"meta":if(l=Hg("meta","content",i).get(e+(t.content||""))){for(s=0;s<l.length;s++)if(a=l[s],a.getAttribute("content")===(t.content==null?null:""+t.content)&&a.getAttribute("name")===(t.name==null?null:t.name)&&a.getAttribute("property")===(t.property==null?null:t.property)&&a.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&a.getAttribute("charset")===(t.charSet==null?null:t.charSet)){l.splice(s,1);break e}}a=i.createElement(e),Ye(a,e,t),i.head.appendChild(a);break;default:throw Error(d(468,e))}a[Ae]=n,xe(a),e=a}n.stateNode=e}else ze||Eu(l,n.type,n.stateNode);else n.stateNode=Ug(l,t,n.memoizedProps);else i!==t?(i===null?(e=a.stateNode,e===null||In||e.parentNode.removeChild(e)):i.count--,t===null?ze||Eu(l,n.type,n.stateNode):Ug(l,t,n.memoizedProps)):t===null&&n.stateNode!==null&&Cc(n,n.memoizedProps,a.memoizedProps);break;case 27:Ze(e,n,t),Fe(n),i&512&&(In||a===null||Ge(a,a.return)),a!==null&&i&4&&Cc(n,n.memoizedProps,a.memoizedProps);break;case 5:if(l=Jt,Jt=!1,Ze(e,n,t),Jt=l,Fe(n),i&512&&(In||a===null||Ge(a,a.return)),n.flags&32){e=n.stateNode;try{ki(e,""),Bn=!0}catch(N){Zn(n,n.return,N)}}i&4&&n.stateNode!=null&&(e=n.memoizedProps,Cc(n,e,a!==null?a.memoizedProps:e)),i&1024&&(qc=!0);break;case 6:if(Ze(e,n,t),Fe(n),i&4){if(n.stateNode===null)throw Error(d(162));e=n.memoizedProps,t=n.stateNode;try{t.nodeValue=e,Bn=!0}catch(N){Zn(n,n.return,N)}}break;case 3:if(Bn=!1,Vs=null,l=Dt,Dt=ul(e.containerInfo),Ze(e,n,t),Dt=l,Fe(n),i&4&&a!==null&&a.memoizedState.isDehydrated)try{hr(e.containerInfo)}catch(N){Zn(n,n.return,N)}qc&&(qc=!1,Rh(n)),Bn=!1;break;case 4:i=Jt,Jt=ze,a=_e(),l=Dt,Dt=ul(n.stateNode.containerInfo),Ze(e,n,t),Fe(n),Dt=l,Bn&&el&&(ws=!0),Bn=a,Jt=i;break;case 12:Ze(e,n,t),Fe(n);break;case 31:Ze(e,n,t),Fe(n),i&4&&(e=n.updateQueue,e!==null&&(n.updateQueue=null,Os(n,e)));break;case 13:Ze(e,n,t),Fe(n),n.child.flags&8192&&n.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ms=Ie()),i&4&&(e=n.updateQueue,e!==null&&(n.updateQueue=null,Os(n,e)));break;case 22:l=n.memoizedState!==null,s=a!==null&&a.memoizedState!==null;var c=ze,f=In,T=Jt;ze=c||l,Jt=T||l,In=f||s,Ze(e,n,t),In=f,Jt=T,ze=c,Fe(n),i&8192&&(e=n.stateNode,e._visibility=l?e._visibility&-2:e._visibility|1,!l||a===null||s||ze||In||(e=s||In,t=ze,a=In,ze=l||ze,In=e,qa(n,2),ze=t,In=a),!l&&Jt||Yc(n,l)),i&4&&(e=n.updateQueue,e!==null&&(t=e.retryQueue,t!==null&&(e.retryQueue=null,Os(n,t))));break;case 19:Ze(e,n,t),Fe(n),i&4&&(e=n.updateQueue,e!==null&&(n.updateQueue=null,Os(n,e)));break;case 30:i&512&&(In||a===null||Ge(a,a.return)),i=_e(),l=el,s=(t&335544064)===t,c=n.memoizedProps,el=s&&sa(c.default,c.update)!=="none",Ze(e,n,t),Fe(n),s&&a!==null&&Bn&&(n.flags|=4),el=l,Bn=i;break;case 21:break;case 7:i&512&&(In||a===null||Ge(a,a.return)),a&&a.stateNode!==null&&(a.stateNode._fragmentFiber=n);default:Ze(e,n,t),Fe(n)}}function Fe(n){var e=n.flags;if(e&2){try{for(var t,a=n.return;a!==null;){if(bh(a)){t=a;break}a=a.return}a=null;for(var i=n.return;i!==null;){if(kc(i)){var l=i.stateNode;a===null?a=[l]:a.push(l)}if(Ac(i))break;i=i.return}var s=a;if(t==null)throw Error(d(160));switch(t.tag){case 27:var c=t.stateNode,f=Rc(n);Ts(n,f,c,s);break;case 5:var T=t.stateNode;t.flags&32&&(ki(T,""),t.flags&=-33);var N=Rc(n);Ts(n,N,T,s);break;case 3:case 4:var A=t.stateNode.containerInfo,x=Rc(n);zc(n,x,A,s);break;default:throw Error(d(161))}}catch(j){Zn(n,n.return,j)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Rh(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var e=n;Rh(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,fr=!0,e.reset(),fr=!1),n=n.sibling}}function Zi(n,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)zh(e,n),e=e.sibling;else jh(e)}function zh(n,e){var t=n.alternate;if(t===null)Dc(n,!1);else switch(n.tag){case 3:if(Gc=Zt=!1,xh(),Zi(e,n),!Zt&&!ws){if(n=Xt,n!==null)for(var a=0;a<n.length;a+=3){t=n[a];var i=n[a+1];_g(t,n[a+2]),t=t.ownerDocument.documentElement,t!==null&&t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+i+")"})}n=e.containerInfo,n=n.nodeType===9?n.documentElement:n.ownerDocument.documentElement,n!==null&&n.style.viewTransitionName===""&&(n.style.viewTransitionName="none",n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),n.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Gc=!0}Xt=null;break;case 5:Zi(e,n);break;case 4:a=Zt,Zt=!1,Zi(e,n),Zt&&(ws=!0),Zt=a;break;case 22:n.memoizedState===null&&(t.memoizedState!==null?Dc(n,!1):Zi(e,n));break;case 30:a=Zt,i=xh(),Zt=!1,Zi(e,n),Zt&&(n.flags|=4);var l=n.memoizedProps,s=n.stateNode;e=la(l,s),s=la(t.memoizedProps,s);var c=sa(l.default,l.update);c==="none"?e=!1:(l=t.memoizedState,t.memoizedState=null,t=n.child,rt=0,e=Hc(n,t,e,s,c,l,!0),rt!==(l===null?0:l.length)&&(n.flags|=32)),(n.flags&4)!==0&&e?(tr(n,n.memoizedProps.onUpdate),Xt=i):i!==null&&(i.push.apply(i,Xt),Xt=i),Zt=(n.flags&32)!==0?!0:a;break;default:Zi(e,n)}}function Ft(n,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)wh(n,e.alternate,e),e=e.sibling}function qa(n,e){for(n=n.child;n!==null;){var t=n,a=e;switch(t.tag){case 0:case 11:case 14:case 15:Ha(4,t,t.return),qa(t,a);break;case 1:Ge(t,t.return);var i=t.stateNode;typeof i.componentWillUnmount=="function"&&ph(t,t.return,i),qa(t,a);break;case 27:(a&2)!==0&&Rg(t.stateNode,t.type,t.memoizedProps);case 5:Ge(t,t.return),t.tag!==5&&t.tag!==27||nl(t),qa(t,a);break;case 6:nl(t);break;case 26:Ge(t,t.return),i=t.stateNode,t.memoizedState!==null||i===null||In||i.parentNode.removeChild(i),qa(t,a);break;case 22:t.memoizedState===null&&qa(t,a);break;case 30:Ge(t,t.return),qa(t,a);break;case 7:Ge(t,t.return);default:qa(t,a)}n=n.sibling}}function Lt(n,e,t){for(t=(e.subtreeFlags&8772)!==0?t:t&-2,e=e.child;e!==null;){var a=e.alternate,i=n,l=e,s=l.flags,c=(t&1)!==0;switch(l.tag){case 0:case 11:case 15:Lt(i,l,t),$r(4,l);break;case 1:if(Lt(i,l,t),a=l,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(N){Zn(a,a.return,N)}if(a=l,i=a.updateQueue,i!==null){var f=a.stateNode;try{var T=i.shared.hiddenCallbacks;if(T!==null)for(i.shared.hiddenCallbacks=null,i=0;i<T.length;i++)ef(T[i],f)}catch(N){Zn(a,a.return,N)}}c&&s&64&&gh(l),It(l,l.return);break;case 27:(t&2)!==0&&vh(l);case 5:l.tag!==5&&l.tag!==27||mh(l),Lt(i,l,t),c&&a===null&&s&4&&Mc(l),It(l,l.return);break;case 6:mh(l);break;case 26:f=l.stateNode,l.memoizedState!==null||f===null||ze||Eu(ul(f.ownerDocument),l.type,f),Lt(i,l,t),c&&a===null&&s&4&&Mc(l),It(l,l.return);break;case 12:Lt(i,l,t);break;case 31:Lt(i,l,t),c&&s&4&&kh(i,l);break;case 13:Lt(i,l,t),c&&s&4&&Mh(i,l);break;case 22:l.memoizedState===null&&Lt(i,l,t),It(l,l.return);break;case 30:Lt(i,l,t),It(l,l.return);break;case 7:It(l,l.return);default:Lt(i,l,t)}e=e.sibling}}function Kc(n,e){var t=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==t&&(n!=null&&n.refCount++,t!=null&&qr(t))}function Ic(n,e){n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&qr(n))}function Et(n,e,t,a){var i=(t&335544064)===t;if(e.subtreeFlags&(i?10262:10256))for(e=e.child;e!==null;)Dh(n,e,t,a),e=e.sibling;else i&&Sh(e)}function Dh(n,e,t,a){var i=(t&335544064)===t;i&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&Ns(e);var l=e.flags;switch(e.tag){case 0:case 11:case 15:Et(n,e,t,a),l&2048&&$r(9,e);break;case 1:Et(n,e,t,a);break;case 3:Et(n,e,t,a),i&&Gc&&(n=n.containerInfo,n=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,n.style.viewTransitionName==="root"&&(n.style.viewTransitionName=""),n=n.ownerDocument.documentElement,n!==null&&n.style.viewTransitionName==="none"&&(n.style.viewTransitionName="")),l&2048&&(l=null,e.alternate!==null&&(l=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==l&&(e.refCount++,l!=null&&qr(l)));break;case 12:if(l&2048){Et(n,e,t,a),l=e.stateNode;try{var s=e.memoizedProps,c=s.id,f=s.onPostCommit;typeof f=="function"&&f(c,e.alternate===null?"mount":"update",l.passiveEffectDuration,-0)}catch(T){Zn(e,e.return,T)}}else Et(n,e,t,a);break;case 31:Et(n,e,t,a);break;case 13:Et(n,e,t,a);break;case 23:break;case 22:s=e.stateNode,c=e.alternate,e.memoizedState!==null?(i&&c!==null&&c.memoizedState===null&&Ns(c),s._visibility&2?Et(n,e,t,a):tl(n,e)):(i&&c!==null&&c.memoizedState!==null&&Ns(e),s._visibility&2?Et(n,e,t,a):(s._visibility|=2,Fi(n,e,t,a,(e.subtreeFlags&10256)!==0||!1))),l&2048&&Kc(c,e);break;case 24:Et(n,e,t,a),l&2048&&Ic(e.alternate,e);break;case 30:i&&(l=e.alternate,l!==null&&(Qt(l.child,!0),Qt(e.child,!0))),Et(n,e,t,a);break;default:Et(n,e,t,a)}}function Fi(n,e,t,a,i){for(i=i&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var l=n,s=e,c=t,f=a,T=s.flags;switch(s.tag){case 0:case 11:case 15:Fi(l,s,c,f,i),$r(8,s);break;case 23:break;case 22:var N=s.stateNode;s.memoizedState!==null?N._visibility&2?Fi(l,s,c,f,i):tl(l,s):(N._visibility|=2,Fi(l,s,c,f,i)),i&&T&2048&&Kc(s.alternate,s);break;case 24:Fi(l,s,c,f,i),i&&T&2048&&Ic(s.alternate,s);break;default:Fi(l,s,c,f,i)}e=e.sibling}}function tl(n,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var t=n,a=e,i=a.flags;switch(a.tag){case 22:tl(t,a),i&2048&&Kc(a.alternate,a);break;case 24:tl(t,a),i&2048&&Ic(a.alternate,a);break;default:tl(t,a)}e=e.sibling}}var bi=8192;function vi(n,e,t){if(n.subtreeFlags&bi)for(n=n.child;n!==null;)Lh(n,e,t),n=n.sibling}function Lh(n,e,t){switch(n.tag){case 26:vi(n,e,t),n.flags&bi&&(n.memoizedState!==null?Ry(t,Dt,n.memoizedState,n.memoizedProps):(n=n.stateNode,(e&335544128)===e&&Vg(t,n)));break;case 5:vi(n,e,t),n.flags&bi&&(n=n.stateNode,(e&335544128)===e&&Vg(t,n));break;case 3:case 4:var a=Dt;Dt=ul(n.stateNode.containerInfo),vi(n,e,t),Dt=a;break;case 22:n.memoizedState===null&&(a=n.alternate,a!==null&&a.memoizedState!==null?(a=bi,bi=16777216,vi(n,e,t),bi=a):vi(n,e,t));break;case 30:if((n.flags&bi)!==0&&(a=n.memoizedProps.name,a!=null&&a!=="auto")){var i=n.stateNode;i.paired=null,ht===null&&(ht=new Map),ht.set(a,i)}vi(n,e,t);break;default:vi(n,e,t)}}function Bh(n){var e=n.alternate;if(e!==null&&(n=e.child,n!==null)){e.child=null;do e=n.sibling,n.sibling=null,n=e;while(n!==null)}}function al(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var a=e[t];De=a,Hh(a,n)}Bh(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Uh(n),n=n.sibling}function Uh(n){switch(n.tag){case 0:case 11:case 15:al(n),n.flags&2048&&Ha(9,n,n.return);break;case 3:al(n);break;case 12:al(n);break;case 22:var e=n.stateNode;n.memoizedState!==null&&e._visibility&2&&(n.return===null||n.return.tag!==13)?(e._visibility&=-3,As(n)):al(n);break;default:al(n)}}function As(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var a=e[t];De=a,Hh(a,n)}Bh(n)}for(n=n.child;n!==null;){switch(e=n,e.tag){case 0:case 11:case 15:Ha(8,e,e.return),As(e);break;case 22:t=e.stateNode,t._visibility&2&&(t._visibility&=-3,As(e));break;default:As(e)}n=n.sibling}}function Hh(n,e){for(;De!==null;){var t=De;switch(t.tag){case 0:case 11:case 15:Ha(8,t,e);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:qr(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,De=a;else n:for(t=n;De!==null;){a=De;var i=a.sibling,l=a.return;if(Oh(a),a===t){De=null;break n}if(i!==null){i.return=l,De=i;break n}De=l}}}var O1={getCacheForType:function(n){var e=Ue(Te),t=e.data.get(n);return t===void 0&&(t=n(),e.data.set(n,t)),t},cacheSignal:function(){return Ue(Te).controller.signal}},A1=typeof WeakMap=="function"?WeakMap:Map,Yn=0,ee=null,Cn=null,zn=0,Jn=0,gt=null,Ga=!1,Pi=!1,Xc=!1,ma=0,he=0,Ya=0,yi=0,ks=0,pt=0,Wi=0,il=null,st=null,Qc=!1,Ms=0,qh=0,Cs=1/0,Rs=null,Va=null,ue=0,Bt=null,xi=null,Pt=0,Jc=0,Zc=null,Gh=null,$i=null,nr=null,er=null,rl=0,zs=null;function mt(){return(Yn&2)!==0&&zn!==0?zn&-zn:en.T!==null?ru():Ol()}function Yh(){if(pt===0)if((zn&536870912)===0||On){var n=_a;_a<<=1,(_a&3932160)===0&&(_a=262144),pt=n}else pt=536870912;return n=He.current,n!==null&&(n.flags|=32),pt}function tr(n,e){if(e!=null){var t=n.stateNode,a=t.ref;a===null&&(a=t.ref=Tg(la(n.memoizedProps,t))),nr===null&&(nr=[]),nr.push(e.bind(null,a))}}function ot(n,e,t){(n===ee&&(Jn===2||Jn===9)||n.cancelPendingCommit!==null)&&(ar(n,0),Ka(n,zn,pt,!1)),ei(n,t),((Yn&2)===0||n!==ee)&&(n===ee&&((Yn&2)===0&&(yi|=t),he===4&&Ka(n,zn,pt,!1)),Wt(n))}function Vh(n,e,t){if((Yn&6)!==0)throw Error(d(327));var a=!t&&(e&127)===0&&(e&n.expiredLanes)===0||ni(n,e),i=a?C1(n,e):Pc(n,e,!0),l=a;do{if(i===0){Pi&&!a&&Ka(n,e,0,!1);break}else{if(t=n.current.alternate,l&&!k1(t)){i=Pc(n,e,!1),l=!1;continue}if(i===2){if(l=e,n.errorRecoveryDisabledLanes&l)var s=0;else s=n.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;n:{var c=n;i=il;var f=c.current.memoizedState.isDehydrated;if(f&&(ar(c,s).flags|=256),s=Pc(c,s,!1),s!==2&&s!==6){if(Xc&&!f){c.errorRecoveryDisabledLanes|=l,yi|=l,i=4;break n}l=st,st=i,l!==null&&(st===null?st=l:st.push.apply(st,l))}i=s}if(l=!1,i!==2)continue}}if(i===1){ar(n,0),Ka(n,e,0,!0);break}n:{switch(a=n,l=i,l){case 0:case 1:throw Error(d(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:Ka(a,e,pt,!Ga);break n;case 2:st=null;break;case 3:case 5:break;default:throw Error(d(329))}if((e&62914560)===e&&(i=Ms+300-Ie(),10<i)){if(Ka(a,e,pt,!Ga),Sa(a,0,!0)!==0)break n;Pt=e,a.timeoutHandle=mu(Kh.bind(null,a,t,st,Rs,Qc,e,pt,yi,Wi,Ga,l,"Throttled",-0,0),i);break n}Kh(a,t,st,Rs,Qc,e,pt,yi,Wi,Ga,l,null,-0,0)}}break}while(!0);Wt(n)}function Kh(n,e,t,a,i,l,s,c,f,T,N,A,x,j){n.timeoutHandle=-1;var Y=e.subtreeFlags,tn=(l&335544064)===l;if(A=null,(tn||Y&8192||(Y&16785408)===16785408)&&(A={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yt},ht=null,Lh(e,l,A),tn&&(Y=A,tn=n.containerInfo,tn=(tn.nodeType===9?tn:tn.ownerDocument).__reactViewTransition,tn!=null&&(Y.count++,Y.waitingForViewTransition=!0,Y=hl.bind(Y),tn.finished.then(Y,Y))),Y=(l&62914560)===l?Ms-Ie():(l&4194048)===l?qh-Ie():0,Y=zy(A,Y),Y!==null)){Pt=l,n.cancelPendingCommit=Y(Wh.bind(null,n,e,l,t,a,i,s,c,f,T,N,A,null,x,j)),Ka(n,l,s,!T);return}Wh(n,e,l,t,a,i,s,c,f,T,N,A)}function k1(n){for(var e=n;;){var t=e.tag;if((t===0||t===11||t===15)&&e.flags&16384&&(t=e.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var i=t[a],l=i.getSnapshot;i=i.value;try{if(!dt(l(),i))return!1}catch{return!1}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ka(n,e,t,a){e=wl(n,e),e&=~ks,e&=~yi,n.suspendedLanes|=e,n.pingedLanes&=~e,a&&(n.warmLanes|=e),a=n.expirationTimes;for(var i=e;0<i;){var l=31-G(i),s=1<<l;a[l]=-1,i&=~s}t!==0&&El(n,t,e)}function Ds(){return(Yn&6)===0?(ll(0),!1):!0}function Fc(){if(Cn!==null){if(Jn===0)var n=Cn.return;else n=Cn,ua=si=null,ic(n),Vi=null,Vr=0,n=Cn;for(;n!==null;)hh(n.alternate,n),n=n.return;Cn=null}}function ar(n,e){var t=n.timeoutHandle;return t!==-1&&(n.timeoutHandle=-1,ny(t)),t=n.cancelPendingCommit,t!==null&&(n.cancelPendingCommit=null,t()),Pt=0,Fc(),ee=n,Cn=t=oa(n.current,null),zn=e,Jn=0,gt=null,Ga=!1,Pi=ni(n,e),Xc=!1,Wi=pt=ks=yi=Ya=he=0,st=il=null,Qc=!1,ma=wl(n,e),Vl(),t}function Ih(n,e){jn=null,en.H=gs,e===Yi||e===ns?(e=Pd(),Jn=3):e===Io?(e=Pd(),Jn=4):Jn=e===yc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,gt=e,Cn===null&&(he=1,ps(n,St(e,n.current)))}function Xh(){var n=He.current;return n===null?!0:(zn&4194048)===zn?Xe===null:(zn&62914560)===zn||(zn&536870912)!==0?n===Xe:!1}function Qh(){var n=en.H;return en.H=gs,n===null?gs:n}function Jh(){var n=en.A;return en.A=O1,n}function Ls(){he=4,Ga||(zn&4194048)!==zn&&He.current!==null||(Pi=!0),(Ya&134217727)===0&&(yi&134217727)===0||ee===null||Ka(ee,zn,pt,!1)}function Pc(n,e,t){var a=Yn;Yn|=2;var i=Qh(),l=Jh();(ee!==n||zn!==e)&&(Rs=null,ar(n,e)),e=!1;var s=he;n:do try{if(Jn!==0&&Cn!==null){var c=Cn,f=gt;switch(Jn){case 8:Fc(),s=6;break n;case 3:case 2:case 9:case 6:He.current===null&&(e=!0);var T=Jn;if(Jn=0,gt=null,ir(n,c,f,T),t&&Pi){s=0;break n}break;default:T=Jn,Jn=0,gt=null,ir(n,c,f,T)}}M1(),s=he;break}catch(N){Ih(n,N)}while(!0);return e&&n.shellSuspendCounter++,ua=si=null,Yn=a,en.H=i,en.A=l,Cn===null&&(ee=null,zn=0,Vl()),s}function M1(){for(;Cn!==null;)Zh(Cn)}function C1(n,e){var t=Yn;Yn|=2;var a=Qh(),i=Jh();ee!==n||zn!==e?(Rs=null,Cs=Ie()+500,ar(n,e)):Pi=ni(n,e);n:do try{if(Jn!==0&&Cn!==null){e=Cn;var l=gt;e:switch(Jn){case 1:Jn=0,gt=null,ir(n,e,l,1);break;case 2:case 9:if(Zd(l)){Jn=0,gt=null,Fh(e);break}e=function(){Jn!==2&&Jn!==9||ee!==n||(Jn=7),Wt(n)},l.then(e,e);break n;case 3:Jn=7;break n;case 4:Jn=5;break n;case 7:Zd(l)?(Jn=0,gt=null,Fh(e)):(Jn=0,gt=null,ir(n,e,l,7));break;case 5:var s=null;switch(Cn.tag){case 26:s=Cn.memoizedState;case 5:case 27:var c=Cn;if(s?Gg(s):c.stateNode.complete){Jn=0,gt=null;var f=c.sibling;if(f!==null)Cn=f;else{var T=c.return;T!==null?(Cn=T,Bs(T)):Cn=null}break e}}Jn=0,gt=null,ir(n,e,l,5);break;case 6:Jn=0,gt=null,ir(n,e,l,6);break;case 8:Fc(),he=6;break n;default:throw Error(d(462))}}R1();break}catch(N){Ih(n,N)}while(!0);return ua=si=null,en.H=a,en.A=i,Yn=t,Cn!==null?0:(ee=null,zn=0,Vl(),he)}function R1(){for(;Cn!==null&&!co();)Zh(Cn)}function Zh(n){var e=dh(n.alternate,n,ma);n.memoizedProps=n.pendingProps,e===null?Bs(n):Cn=e}function Fh(n){var e=n,t=e.alternate;switch(e.tag){case 15:case 0:e=ih(t,e,e.pendingProps,e.type,void 0,zn);break;case 11:e=ih(t,e,e.pendingProps,e.type.render,e.ref,zn);break;case 5:ic(e);var a=e;a===Re&&(On?(Zl(a),a.tag===5&&a.stateNode!=null&&(te=a.stateNode)):(Zl(a),On=!0));default:hh(t,e),e=Cn=Ud(e,ma),e=dh(t,e,ma)}n.memoizedProps=n.pendingProps,e===null?Bs(n):Cn=e}function ir(n,e,t,a){ua=si=null,ic(e),Vi=null,Vr=0;var i=e.return;try{if(x1(n,i,e,t,zn)){he=1,ps(n,St(t,n.current)),Cn=null;return}}catch(l){if(i!==null)throw Cn=i,l;he=1,ps(n,St(t,n.current)),Cn=null;return}e.flags&32768?(On||a===1?n=!0:Pi||(zn&536870912)!==0?n=!1:(Ga=n=!0,(a===2||a===9||a===3||a===6)&&(a=He.current,a!==null&&a.tag===13&&(a.flags|=16384))),Ph(e,n)):Bs(e)}function Bs(n){var e=n;do{if((e.flags&32768)!==0){Ph(e,Ga);return}n=e.return;var t=j1(e.alternate,e,ma);if(t!==null){Cn=t;return}if(e=e.sibling,e!==null){Cn=e;return}Cn=e=n}while(e!==null);he===0&&(he=5)}function Ph(n,e){do{var t=N1(n.alternate,n);if(t!==null){t.flags&=32767,Cn=t;return}if(t=n.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!e&&(n=n.sibling,n!==null)){Cn=n;return}Cn=n=t}while(n!==null);he=6,Cn=null}function Wh(n,e,t,a,i,l,s,c,f,T,N,A){n.cancelPendingCommit=null;do Us();while(ue!==0);if((Yn&6)!==0)throw Error(d(327));if(e!==null){if(e===n.current)throw Error(d(177));n===ee&&(Cn=ee=null,zn=0),xi=e,Bt=n,Pt=t,Zc=i,Gh=a,z1(n,e,t,s,c,f,A)}}function z1(n,e,t,a,i,l,s){var c=e.lanes|e.childLanes;if(Jc=c,c|=Co,fo(n,t,c,a,i,l),nr=null,(t&335544064)===t?(er=o1(n),a=10262):(er=null,a=10256),(e.subtreeFlags&a)!==0||(e.flags&a)!==0?(n.callbackNode=null,n.callbackPriority=0,q1(Mt,function(){return eu(),null})):(n.callbackNode=null,n.callbackPriority=0),Ss=!1,a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=en.T,en.T=null,i=hn.p,hn.p=2,l=Yn,Yn|=4;try{w1(n,e,t)}finally{Yn=l,hn.p=i,en.T=a}}ue=1,Ss?$i=ly(s,n.containerInfo,er,Wc,$c,L1,nu,eu,D1):(Wc(),$c(),nu())}function D1(n){if(ue!==0){var e=Bt.onRecoverableError;e(n,{componentStack:null})}}function L1(){ue===3&&(ue=0,zh(xi,Bt),ue=4)}function Wc(){if(ue===1){ue=0;var n=Bt,e=xi,t=Pt,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=en.T,en.T=null;var i=hn.p;hn.p=2;var l=Yn;Yn|=4;try{el=ws=!1,Ch(e,n,t),t=hu;var s=Od(n.containerInfo),c=t.focusedElem,f=t.selectionRange;if(s!==c&&c&&c.ownerDocument&&Ed(c.ownerDocument.documentElement,c)){if(f!==null&&Eo(c)){var T=f.start,N=f.end;if(N===void 0&&(N=T),"selectionStart"in c)c.selectionStart=T,c.selectionEnd=Math.min(N,c.value.length);else{var A=c.ownerDocument||document,x=A&&A.defaultView||window;if(x.getSelection){var j=x.getSelection(),Y=c.textContent.length,tn=Math.min(f.start,Y),Nn=f.end===void 0?tn:Math.min(f.end,Y);!j.extend&&tn>Nn&&(s=Nn,Nn=tn,tn=s);var _=wd(c,tn),m=wd(c,Nn);if(_&&m&&(j.rangeCount!==1||j.anchorNode!==_.node||j.anchorOffset!==_.offset||j.focusNode!==m.node||j.focusOffset!==m.offset)){var S=A.createRange();S.setStart(_.node,_.offset),j.removeAllRanges(),tn>Nn?(j.addRange(S),j.extend(m.node,m.offset)):(S.setEnd(m.node,m.offset),j.addRange(S))}}}}for(A=[],j=c;j=j.parentNode;)j.nodeType===1&&A.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<A.length;c++){var O=A[c];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}fr=!!fu,hu=fu=null}finally{Yn=l,hn.p=i,en.T=a}}n.current=e,ue=2}}function $c(){if(ue===2){ue=0;var n=Bt,e=xi,t=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||t){t=en.T,en.T=null;var a=hn.p;hn.p=2;var i=Yn;Yn|=4;try{wh(n,e.alternate,e)}finally{Yn=i,hn.p=a,en.T=t}}ue=3}}function nu(){if(ue===4||ue===3){ue=0;var n=$i;$i=null,Sr();var e=Bt,t=xi,a=Pt,i=Gh,l=(a&335544064)===a?10262:10256;if((t.subtreeFlags&l)!==0||(t.flags&l)!==0?ue=5:(ue=0,xi=Bt=null,$h(e,e.pendingLanes)),l=e.pendingLanes,l===0&&(Va=null),Er(a),t=t.stateNode,Ln&&typeof Ln.onCommitFiberRoot=="function")try{Ln.onCommitFiberRoot(ne,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=en.T,l=hn.p,hn.p=2,en.T=null;try{for(var s=e.onRecoverableError,c=0;c<i.length;c++){var f=i[c];s(f.value,{componentStack:f.stack})}}finally{en.T=t,hn.p=l}}if(i=nr,s=er,er=null,i!==null&&(nr=null,s===null&&(s=[]),n!==null))for(f=0;f<i.length;f++)t=(0,i[f])(s),t!==void 0&&n.finished.finally(t);(Pt&3)!==0&&Us(),Wt(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===zs?rl++:(rl=0,zs=e):(rl=0,zs=null),ll(0)}}function $h(n,e){(n.pooledCacheLanes&=e)===0&&(e=n.pooledCache,e!=null&&(n.pooledCache=null,qr(e)))}function Us(){return $i!==null&&($i.skipTransition(),$i=null),Wc(),$c(),nu(),eu()}function eu(){if(ue!==5)return!1;var n=Bt,e=Jc;Jc=0;var t=Er(Pt),a=en.T,i=hn.p;try{hn.p=32>t?32:t,en.T=null,t=Zc,Zc=null;var l=Bt,s=Pt;if(ue=0,xi=Bt=null,Pt=0,(Yn&6)!==0)throw Error(d(331));var c=Yn;if(Yn|=4,Uh(l.current),Dh(l,l.current,s,t),Yn=c,ll(0,!1),Ln&&typeof Ln.onPostCommitFiberRoot=="function")try{Ln.onPostCommitFiberRoot(ne,l)}catch{}return!0}finally{hn.p=i,en.T=a,$h(n,e)}}function ng(n,e,t){e=St(t,e),e=vc(n.stateNode,e,2),n=Da(n,e,2),n!==null&&(ei(n,2),Wt(n))}function Zn(n,e,t){if(n.tag===3)ng(n,n,t);else for(;e!==null;){if(e.tag===3){ng(e,n,t);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Va===null||!Va.has(a))){n=St(t,n),t=Ff(2),a=Da(e,t,2),a!==null&&(Pf(t,a,e,n),ei(a,2),Wt(a));break}}e=e.return}}function tu(n,e,t){var a=n.pingCache;if(a===null){a=n.pingCache=new A1;var i=new Set;a.set(e,i)}else i=a.get(e),i===void 0&&(i=new Set,a.set(e,i));i.has(t)||(Xc=!0,i.add(t),n=B1.bind(null,n,e,t),e.then(n,n))}function B1(n,e,t){var a=n.pingCache;a!==null&&a.delete(e),n.pingedLanes|=n.suspendedLanes&t,n.warmLanes&=~t,ee===n&&(zn&t)===t&&((he===4||he===3&&(zn&62914560)===zn&&300>Ie()-Ms)&&(Yn&2)===0?ar(n,0):ks|=t,Wi===zn&&(Wi=0)),Wt(n)}function eg(n,e){e===0&&(e=Nr()),n=ii(n,e),n!==null&&(ei(n,e),Wt(n))}function U1(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),eg(n,t)}function H1(n,e){var t=0;switch(n.tag){case 31:case 13:var a=n.stateNode,i=n.memoizedState;i!==null&&(t=i.retryLane);break;case 19:a=n.stateNode;break;case 22:a=n.stateNode._retryCache;break;default:throw Error(d(314))}a!==null&&a.delete(e),eg(n,t)}function q1(n,e){return _r(n,e)}var rr=null,lr=null,au=!1,Hs=!1,iu=!1,Ia=0;function Wt(n){n!==lr&&n.next===null&&(lr===null?rr=lr=n:lr=lr.next=n),Hs=!0,au||(au=!0,Y1())}function ll(n,e){if(!iu&&Hs){iu=!0;do for(var t=!1,a=rr;a!==null;){if(n!==0){var i=a.pendingLanes;if(i===0)var l=0;else{var s=a.suspendedLanes,c=a.pingedLanes;l=(1<<31-G(42|n)+1)-1,l&=i&~(s&~c),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(t=!0,rg(a,l))}else l=zn,l=Sa(a,a===ee?l:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(l&3)===0||ni(a,l)||(t=!0,rg(a,l));a=a.next}while(t);iu=!1}}function G1(){tg()}function tg(){Hs=au=!1;var n=0;Ia!==0&&$1()&&(n=Ia);for(var e=Ie(),t=null,a=rr;a!==null;){var i=a.next,l=ag(a,e);l===0?(a.next=null,t===null?rr=i:t.next=i,i===null&&(lr=t)):(t=a,(n!==0||(l&3)!==0)&&(Hs=!0)),a=i}ue!==0&&ue!==5||ll(n),Ia!==0&&(Ia=0)}function ag(n,e){for(var t=n.suspendedLanes,a=n.pingedLanes,i=n.expirationTimes,l=n.pendingLanes&-62914561;0<l;){var s=31-G(l),c=1<<s,f=i[s];f===-1?((c&t)===0||(c&a)!==0)&&(i[s]=uo(c,e)):f<=e&&(n.expiredLanes|=c),l&=~c}if(e=ee,t=zn,t=Sa(n,n===e?t:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),a=n.callbackNode,t===0||n===e&&(Jn===2||Jn===9)||n.cancelPendingCommit!==null)return a!==null&&a!==null&&Tr(a),n.callbackNode=null,n.callbackPriority=0;if((t&3)===0||ni(n,t)){if(e=t&-t,e===n.callbackPriority)return e;switch(a!==null&&Tr(a),Er(t)){case 2:case 8:t=jr;break;case 32:t=Mt;break;case 268435456:t=k;break;default:t=Mt}return a=ig.bind(null,n),t=_r(t,a),n.callbackPriority=e,n.callbackNode=t,e}return a!==null&&a!==null&&Tr(a),n.callbackPriority=2,n.callbackNode=null,2}function ig(n,e){if(ue!==0&&ue!==5)return n.callbackNode=null,n.callbackPriority=0,null;var t=n.callbackNode;if(Us()&&n.callbackNode!==t)return null;var a=zn;return a=Sa(n,n===ee?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),a===0?null:(Vh(n,a,e),ag(n,Ie()),n.callbackNode!=null&&n.callbackNode===t?ig.bind(null,n):null)}function rg(n,e){if(Us())return null;Vh(n,e,!0)}function Y1(){ey(function(){(Yn&6)!==0?_r(Nl,G1):tg()})}function ru(){if(Ia===0){var n=ui;n===0&&(n=Gt,Gt<<=1,(Gt&261888)===0&&(Gt=256)),Ia=n}return Ia}function lg(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Dl(n)}function V1(n,e,t,a,i){if(e==="submit"&&t&&t.stateNode===i){var l=lg((i[D]||null).action),s=a.submitter;s&&(e=(e=s[D]||null)?lg(e.formAction):s.getAttribute("formAction"),e!==null&&(l=e,s=null));var c=new Hl("action","action",null,a,i);n.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Ia!==0){var f=new FormData(i,s);hc(t,{pending:!0,data:f,method:i.method,action:l},null,f)}}else typeof l=="function"&&(c.preventDefault(),f=new FormData(i,s),hc(t,{pending:!0,data:f,method:i.method,action:l},l,f))},currentTarget:i}]})}}for(var lu=0;lu<Mo.length;lu++){var su=Mo[lu],K1=su.toLowerCase(),I1=su[0].toUpperCase()+su.slice(1);Rt(K1,"on"+I1)}Rt(Md,"onAnimationEnd"),Rt(Cd,"onAnimationIteration"),Rt(Rd,"onAnimationStart"),Rt("dblclick","onDoubleClick"),Rt("focusin","onFocus"),Rt("focusout","onBlur"),Rt(n1,"onTransitionRun"),Rt(e1,"onTransitionStart"),Rt(t1,"onTransitionCancel"),Rt(zd,"onTransitionEnd"),aa("onMouseEnter",["mouseout","mouseover"]),aa("onMouseLeave",["mouseout","mouseover"]),aa("onPointerEnter",["pointerout","pointerover"]),aa("onPointerLeave",["pointerout","pointerover"]),xt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),xt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),xt("onBeforeInput",["compositionend","keypress","textInput","paste"]),xt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),xt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),xt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(sl));function sg(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var a=n[t],i=a.event;a=a.listeners;n:{var l=void 0;if(e)for(var s=a.length-1;0<=s;s--){var c=a[s],f=c.instance,T=c.currentTarget;if(c=c.listener,f!==l&&i.isPropagationStopped())break n;l=c,i.currentTarget=T;try{l(i)}catch(N){Yl(N)}i.currentTarget=null,l=f}else for(s=0;s<a.length;s++){if(c=a[s],f=c.instance,T=c.currentTarget,c=c.listener,f!==l&&i.isPropagationStopped())break n;l=c,i.currentTarget=T;try{l(i)}catch(N){Yl(N)}i.currentTarget=null,l=f}}}}function Rn(n,e){var t=e[kn];t===void 0&&(t=e[kn]=new Set);var a=n+"__bubble";t.has(a)||(og(e,n,2,!1),t.add(a))}function ou(n,e,t){var a=0;e&&(a|=4),og(t,n,a,e)}var qs="_reactListening"+Math.random().toString(36).slice(2);function cu(n){if(!n[qs]){n[qs]=!0,Ml.forEach(function(t){t!=="selectionchange"&&(X1.has(t)||ou(t,!1,n),ou(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[qs]||(e[qs]=!0,ou("selectionchange",!1,e))}}function og(n,e,t,a){switch(Pg(e)){case 2:var i=Uy;break;case 8:i=Hy;break;default:i=Au}t=i.bind(null,e,t,n),i=void 0,!bo||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),a?i!==void 0?n.addEventListener(e,t,{capture:!0,passive:i}):n.addEventListener(e,t,!0):i!==void 0?n.addEventListener(e,t,{passive:i}):n.addEventListener(e,t,!1)}function uu(n,e,t,a,i){var l=a;if((e&1)===0&&(e&2)===0&&a!==null)n:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var c=a.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=a.return;s!==null;){var f=s.tag;if((f===3||f===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Ce(c),s===null)return;if(f=s.tag,f===5||f===6||f===26||f===27){a=l=s;continue n}c=c.parentNode}}a=a.return}sd(function(){var T=l,N=po(t),A=[];n:{var x=Dd.get(n);if(x!==void 0){var j=Hl,Y=n;switch(n){case"keypress":if(Bl(t)===0)break n;case"keydown":case"keyup":j=kv;break;case"focusin":Y="focus",j=_o;break;case"focusout":Y="blur",j=_o;break;case"beforeblur":case"afterblur":j=_o;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=ud;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=vv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Dv;break;case Md:case Cd:case Rd:j=_v;break;case zd:j=Bv;break;case"scroll":case"scrollend":j=mv;break;case"wheel":j=Hv;break;case"copy":case"cut":case"paste":j=Sv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=fd;break;case"submit":j=Rv;break;case"toggle":case"beforetoggle":j=Gv}var tn=(e&4)!==0,Nn=!tn&&(n==="scroll"||n==="scrollend"),_=tn?x!==null?x+"Capture":null:x;tn=[];for(var m=T,S;m!==null;){var O=m;if(S=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||S===null||_===null||(O=Ar(m,_),O!=null&&tn.push(ol(m,O,S))),Nn)break;m=m.return}0<tn.length&&(x=new j(x,Y,null,t,N),A.push({event:x,listeners:tn}))}}if((e&7)===0){n:{if(j=n==="mouseover"||n==="pointerover",x=n==="mouseout"||n==="pointerout",j&&t!==go&&(Y=t.relatedTarget||t.fromElement)&&(Ce(Y)||Y[an]))break n;(x||j)&&(Y=N.window===N?N:(j=N.ownerDocument)?j.defaultView||j.parentWindow:window,x?(j=t.relatedTarget||t.toElement,x=T,j=j?Ce(j):null,j!==null&&(Nn=M(j),tn=j.tag,j!==Nn||tn!==5&&tn!==27&&tn!==6)&&(j=null)):(x=null,j=T),x!==j&&(tn=ud,O="onMouseLeave",_="onMouseEnter",m="mouse",(n==="pointerout"||n==="pointerover")&&(tn=fd,O="onPointerLeave",_="onPointerEnter",m="pointer"),Nn=x==null?Y:Na(x),S=j==null?Y:Na(j),Y=new tn(O,m+"leave",x,t,N),Y.target=Nn,Y.relatedTarget=S,O=null,Ce(N)===T&&(tn=new tn(_,m+"enter",j,t,N),tn.target=S,tn.relatedTarget=Nn,O=tn),Nn=O,tn=x&&j?Hn(x,j,Q1):null,x!==null&&cg(A,Y,x,tn,!1),j!==null&&Nn!==null&&cg(A,Nn,j,tn,!0)))}n:{if(x=T?Na(T):window,j=x.nodeName&&x.nodeName.toLowerCase(),j==="select"||j==="input"&&x.type==="file")var $=xd;else if(vd(x))if(_d)$=Pv;else{$=Zv;var Dn=Jv}else j=x.nodeName,!j||j.toLowerCase()!=="input"||x.type!=="checkbox"&&x.type!=="radio"?T&&ho(T.elementType)&&($=xd):$=Fv;if($&&($=$(n,T))){yd(A,$,t,N);break n}Dn&&Dn(n,x,T)}switch(Dn=T?Na(T):window,n){case"focusin":(vd(Dn)||Dn.contentEditable==="true")&&(zi=Dn,Oo=T,Br=null);break;case"focusout":Br=Oo=zi=null;break;case"mousedown":Ao=!0;break;case"contextmenu":case"mouseup":case"dragend":Ao=!1,Ad(A,t,N);break;case"selectionchange":if($v)break;case"keydown":case"keyup":Ad(A,t,N)}var on;if(So)n:{switch(n){case"compositionstart":var gn="onCompositionStart";break n;case"compositionend":gn="onCompositionEnd";break n;case"compositionupdate":gn="onCompositionUpdate";break n}gn=void 0}else Ri?md(n,t)&&(gn="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(gn="onCompositionStart");gn&&(hd&&t.locale!=="ko"&&(Ri||gn!=="onCompositionStart"?gn==="onCompositionEnd"&&Ri&&(on=od()):(wa=N,vo="value"in wa?wa.value:wa.textContent,Ri=!0)),Dn=Gs(T,gn),0<Dn.length&&(gn=new dd(gn,n,null,t,N),A.push({event:gn,listeners:Dn}),on?gn.data=on:(on=bd(t),on!==null&&(gn.data=on)))),(on=Vv?Kv(n,t):Iv(n,t))&&(gn=Gs(T,"onBeforeInput"),0<gn.length&&(Dn=new dd("onBeforeInput","beforeinput",null,t,N),A.push({event:Dn,listeners:gn}),Dn.data=on)),V1(A,n,T,t,N)}sg(A,e)})}function ol(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Gs(n,e){for(var t=e+"Capture",a=[];n!==null;){var i=n,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=Ar(n,t),i!=null&&a.unshift(ol(n,i,l)),i=Ar(n,e),i!=null&&a.push(ol(n,i,l))),n.tag===3)return a;n=n.return}return[]}function Q1(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function cg(n,e,t,a,i){for(var l=e._reactName,s=[];t!==null&&t!==a;){var c=t,f=c.alternate,T=c.stateNode;if(c=c.tag,f!==null&&f===a)break;c!==5&&c!==26&&c!==27||T===null||(f=T,i?(T=Ar(t,l),T!=null&&s.unshift(ol(t,T,f))):i||(T=Ar(t,l),T!=null&&s.push(ol(t,T,f)))),t=t.return}s.length!==0&&n.push({event:e,listeners:s})}var J1=/\r\n?/g,Z1=/\u0000|\uFFFD/g;function ug(n){return(typeof n=="string"?n:""+n).replace(J1,`
`).replace(Z1,"")}function dg(n,e){return e=ug(e),ug(n)===e}function Fn(n,e,t,a,i,l){switch(t){case"children":if(typeof a=="string")e==="body"||e==="textarea"&&a===""||ki(n,a);else if(typeof a=="number"||typeof a=="bigint")e!=="body"&&ki(n,""+a);else return;break;case"className":ia(n,"class",a);break;case"tabIndex":ia(n,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":ia(n,t,a);break;case"style":rd(n,a,l);return;case"data":if(e!=="object"){ia(n,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||t!=="href")){n.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){n.removeAttribute(t);break}a=Dl(a),n.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){n.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(t==="formAction"?(e!=="input"&&Fn(n,e,"name",i.name,i,null),Fn(n,e,"formEncType",i.formEncType,i,null),Fn(n,e,"formMethod",i.formMethod,i,null),Fn(n,e,"formTarget",i.formTarget,i,null)):(Fn(n,e,"encType",i.encType,i,null),Fn(n,e,"method",i.method,i,null),Fn(n,e,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){n.removeAttribute(t);break}a=Dl(a),n.setAttribute(t,a);break;case"onClick":a!=null&&(n.onclick=Yt);return;case"onScroll":a!=null&&Rn("scroll",n);return;case"onScrollEnd":a!=null&&Rn("scrollend",n);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(t=a.__html,t!=null){if(i.children!=null)throw Error(d(60));l?.__html!==t&&(n.innerHTML=t)}}break;case"multiple":n.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":n.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){n.removeAttribute("xlink:href");break}t=Dl(a),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(t,a):n.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(t,""):n.removeAttribute(t);break;case"capture":case"download":a===!0?n.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(t,a):n.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?n.setAttribute(t,a):n.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?n.removeAttribute(t):n.setAttribute(t,a);break;case"popover":Rn("beforetoggle",n),Rn("toggle",n),qn(n,"popover",a);break;case"xlinkActuate":Le(n,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Le(n,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Le(n,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Le(n,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Le(n,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Le(n,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Le(n,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Le(n,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Le(n,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":qn(n,"is",a);break;case"innerText":case"textContent":return;default:if(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")t=gv.get(t)||t,qn(n,t,a);else return}Bn=!0}function du(n,e,t,a,i,l){switch(t){case"style":rd(n,a,l);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(t=a.__html,t!=null){if(i.children!=null)throw Error(d(60));l?.__html!==t&&(n.innerHTML=t)}}break;case"children":if(typeof a=="string")ki(n,a);else if(typeof a=="number"||typeof a=="bigint")ki(n,""+a);else return;break;case"onScroll":a!=null&&Rn("scroll",n);return;case"onScrollEnd":a!=null&&Rn("scrollend",n);return;case"onClick":a!=null&&(n.onclick=Yt);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Cl.hasOwnProperty(t))n:{if(t[0]==="o"&&t[1]==="n"&&(i=t.endsWith("Capture"),l=t.slice(2,i?t.length-7:void 0),e=n[D]||null,e=e!=null?e[t]:null,typeof e=="function"&&n.removeEventListener(l,e,i),typeof a=="function")){typeof e!="function"&&e!==null&&(t in n?n[t]=null:n.hasAttribute(t)&&n.removeAttribute(t)),n.addEventListener(l,a,i);break n}Bn=!0,t in n?n[t]=a:a===!0?n.setAttribute(t,""):qn(n,t,a)}return}Bn=!0}function Ye(n,e,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Rn("error",n),Rn("load",n);var a=!1,i=!1,l;for(l in t)if(t.hasOwnProperty(l)){var s=t[l];if(s!=null)switch(l){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,e));default:Fn(n,e,l,s,t,null)}}i&&Fn(n,e,"srcSet",t.srcSet,t,null),a&&Fn(n,e,"src",t.src,t,null);return;case"input":Rn("invalid",n);var c=l=s=i=null,f=null,T=null;for(a in t)if(t.hasOwnProperty(a)){var N=t[a];if(N!=null)switch(a){case"name":i=N;break;case"type":s=N;break;case"checked":f=N;break;case"defaultChecked":T=N;break;case"value":l=N;break;case"defaultValue":c=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(d(137,e));break;default:Fn(n,e,a,N,t,null)}}zl(n,l,c,f,T,s,i,!1);return;case"select":Rn("invalid",n),a=s=l=null;for(i in t)if(t.hasOwnProperty(i)&&(c=t[i],c!=null))switch(i){case"value":l=c;break;case"defaultValue":s=c;break;case"multiple":a=c;default:Fn(n,e,i,c,t,null)}e=l,t=s,n.multiple=!!a,e!=null?Ai(n,!!a,e,!1):t!=null&&Ai(n,!!a,t,!0);return;case"textarea":Rn("invalid",n),l=i=a=null;for(s in t)if(t.hasOwnProperty(s)&&(c=t[s],c!=null))switch(s){case"value":a=c;break;case"defaultValue":i=c;break;case"children":l=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(d(91));break;default:Fn(n,e,s,c,t,null)}ad(n,a,i,l);return;case"option":for(f in t)t.hasOwnProperty(f)&&(a=t[f],a!=null)&&(f==="selected"?n.selected=a&&typeof a!="function"&&typeof a!="symbol":Fn(n,e,f,a,t,null));return;case"dialog":Rn("beforetoggle",n),Rn("toggle",n),Rn("cancel",n),Rn("close",n);break;case"iframe":case"object":Rn("load",n);break;case"video":case"audio":for(a=0;a<sl.length;a++)Rn(sl[a],n);break;case"image":Rn("error",n),Rn("load",n);break;case"details":Rn("toggle",n);break;case"embed":case"source":case"link":Rn("error",n),Rn("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in t)if(t.hasOwnProperty(T)&&(a=t[T],a!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,e));default:Fn(n,e,T,a,t,null)}return;default:if(ho(e)){for(N in t)t.hasOwnProperty(N)&&(a=t[N],a!==void 0&&du(n,e,N,a,t,void 0));return}}for(c in t)t.hasOwnProperty(c)&&(a=t[c],a!=null&&Fn(n,e,c,a,t,null))}var F1={};function P1(n,e,t,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,s=null,c=null,f=null,T=null,N=null;for(j in t){var A=t[j];if(t.hasOwnProperty(j)&&A!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":f=A;default:a.hasOwnProperty(j)||Fn(n,e,j,null,a,A)}}for(var x in a){var j=a[x];if(A=t[x],a.hasOwnProperty(x)&&(j!=null||A!=null))switch(x){case"type":j!==A&&(Bn=!0),l=j;break;case"name":j!==A&&(Bn=!0),i=j;break;case"checked":j!==A&&(Bn=!0),T=j;break;case"defaultChecked":j!==A&&(Bn=!0),N=j;break;case"value":j!==A&&(Bn=!0),s=j;break;case"defaultValue":j!==A&&(Bn=!0),c=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(d(137,e));break;default:j!==A&&Fn(n,e,x,j,a,A)}}ut(n,s,c,f,T,N,l,i);return;case"select":j=s=c=x=null;for(l in t)if(f=t[l],t.hasOwnProperty(l)&&f!=null)switch(l){case"value":break;case"multiple":j=f;default:a.hasOwnProperty(l)||Fn(n,e,l,null,a,f)}for(i in a)if(l=a[i],f=t[i],a.hasOwnProperty(i)&&(l!=null||f!=null))switch(i){case"value":l!==f&&(Bn=!0),x=l;break;case"defaultValue":l!==f&&(Bn=!0),c=l;break;case"multiple":l!==f&&(Bn=!0),s=l;default:l!==f&&Fn(n,e,i,l,a,f)}e=c,t=s,a=j,x!=null?Ai(n,!!t,x,!1):!!a!=!!t&&(e!=null?Ai(n,!!t,e,!0):Ai(n,!!t,t?[]:"",!1));return;case"textarea":j=x=null;for(c in t)if(i=t[c],t.hasOwnProperty(c)&&i!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:Fn(n,e,c,null,a,i)}for(s in a)if(i=a[s],l=t[s],a.hasOwnProperty(s)&&(i!=null||l!=null))switch(s){case"value":i!==l&&(Bn=!0),x=i;break;case"defaultValue":i!==l&&(Bn=!0),j=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(d(91));break;default:i!==l&&Fn(n,e,s,i,a,l)}td(n,x,j);return;case"option":for(var Y in t)x=t[Y],t.hasOwnProperty(Y)&&x!=null&&!a.hasOwnProperty(Y)&&(Y==="selected"?n.selected=!1:Fn(n,e,Y,null,a,x));for(f in a)x=a[f],j=t[f],a.hasOwnProperty(f)&&x!==j&&(x!=null||j!=null)&&(f==="selected"?(x!==j&&(Bn=!0),n.selected=x&&typeof x!="function"&&typeof x!="symbol"):Fn(n,e,f,x,a,j));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tn in t)x=t[tn],t.hasOwnProperty(tn)&&x!=null&&!a.hasOwnProperty(tn)&&Fn(n,e,tn,null,a,x);for(T in a)if(x=a[T],j=t[T],a.hasOwnProperty(T)&&x!==j&&(x!=null||j!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(d(137,e));break;default:Fn(n,e,T,x,a,j)}return;default:if(ho(e)){for(var Nn in t)x=t[Nn],t.hasOwnProperty(Nn)&&x!==void 0&&!a.hasOwnProperty(Nn)&&du(n,e,Nn,void 0,a,x);for(N in a)x=a[N],j=t[N],!a.hasOwnProperty(N)||x===j||x===void 0&&j===void 0||du(n,e,N,x,a,j);return}}for(var _ in t)x=t[_],t.hasOwnProperty(_)&&x!=null&&!a.hasOwnProperty(_)&&Fn(n,e,_,null,a,x);for(A in a)x=a[A],j=t[A],!a.hasOwnProperty(A)||x===j||x==null&&j==null||Fn(n,e,A,x,a,j)}function fg(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function W1(){if(typeof performance.getEntriesByType=="function"){for(var n=0,e=0,t=performance.getEntriesByType("resource"),a=0;a<t.length;a++){var i=t[a],l=i.transferSize,s=i.initiatorType,c=i.duration;if(l&&c&&fg(s)){for(s=0,c=i.responseEnd,a+=1;a<t.length;a++){var f=t[a],T=f.startTime;if(T>c)break;var N=f.transferSize,A=f.initiatorType;N&&fg(A)&&(f=f.responseEnd,s+=N*(f<c?1:(c-T)/(f-T)))}if(--a,e+=8*(l+s)/(i.duration/1e3),n++,10<n)break}}if(0<n)return e/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var fu=null,hu=null;function cl(n){return n.nodeType===9?n:n.ownerDocument}function hg(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gg(n,e){if(n===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&e==="foreignObject"?0:n}function pg(n,e,t,a){return t=cl(t).createElement(n),t[Ae]=a,t[D]=e,Ye(t,n,e),xe(t),t}function gu(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var pu=null;function $1(){var n=window.event;return n&&n.type==="popstate"?n===pu?!1:(pu=n,!0):(pu=null,!1)}var mu=typeof setTimeout=="function"?setTimeout:void 0,ny=typeof clearTimeout=="function"?clearTimeout:void 0,mg=typeof Promise=="function"?Promise:void 0,bg=typeof requestAnimationFrame=="function"?requestAnimationFrame:mu,ey=typeof queueMicrotask=="function"?queueMicrotask:typeof mg<"u"?function(n){return mg.resolve(null).then(n).catch(ty)}:mu;function ty(n){setTimeout(function(){throw n})}function Xa(n){return n==="head"}function vg(n,e){var t=e,a=0;do{var i=t.nextSibling;if(n.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"||t==="/&"){if(a===0){n.removeChild(i),hr(e);return}a--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")a++;else if(t==="html")ju(n.ownerDocument.documentElement);else if(t==="head"){t=n.ownerDocument.head,ju(t);for(var l=t.firstChild;l;){var s=l.nextSibling,c=l.nodeName;l[at]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&l.rel.toLowerCase()==="stylesheet"||t.removeChild(l),l=s}}else t==="body"&&ju(n.ownerDocument.body);t=i}while(t);hr(e)}function yg(n,e){var t=n;n=0;do{var a=t.nextSibling;if(t.nodeType===1?e?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(e?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(n===0)break;n--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||n++;t=a}while(t)}function xg(n,e,t){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,n.style.viewTransitionName=e,t!=null&&(n.style.viewTransitionClass=t),t=getComputedStyle(n),t.display==="inline"){if(e=n.getClientRects(),e.length===1)var a=1;else for(var i=a=0;i<e.length;i++){var l=e[i];0<l.width&&0<l.height&&a++}a===1&&(n=n.style,n.display=e.length===1?"inline-block":"block",n.marginTop="-"+t.paddingTop,n.marginBottom="-"+t.paddingBottom)}}function _g(n,e){n=n.style,e=e.style;var t=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;n.viewTransitionName=t==null||typeof t=="boolean"?"":(""+t).trim(),t=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,n.viewTransitionClass=t==null||typeof t=="boolean"?"":(""+t).trim(),n.display==="inline-block"&&(e==null?n.display=n.margin="":(t=e.display,n.display=t==null||typeof t=="boolean"?"":t,t=e.margin,t!=null?n.margin=t:(t=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],n.marginTop=t==null||typeof t=="boolean"?"":t,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],n.marginBottom=e==null||typeof e=="boolean"?"":e)))}function ay(n,e,t){return t=t.ownerDocument.defaultView,{rect:n,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=n.bottom&&0<=n.right&&n.top<=t.innerHeight&&n.left<=t.innerWidth}}function bu(n){var e=n.getBoundingClientRect(),t=getComputedStyle(n);return ay(e,t,n)}function iy(n){return n.documentElement.clientHeight}function ry(n){this.addEventListener("load",n),this.addEventListener("error",n)}function ly(n,e,t,a,i,l,s,c,f){var T=e.nodeType===9?e:e.ownerDocument;try{var N=T.startViewTransition({update:function(){var x=T.defaultView,j=x.navigation&&x.navigation.transition,Y=T.fonts.status;a();var tn=[];if(Y==="loaded"&&(iy(T),T.fonts.status==="loading"&&tn.push(T.fonts.ready)),Y=tn.length,n!==null)for(var Nn=n.suspenseyImages,_=0,m=0;m<Nn.length;m++){var S=Nn[m];if(!S.complete){var O=S.getBoundingClientRect();if(0<O.bottom&&0<O.right&&O.top<x.innerHeight&&O.left<x.innerWidth){if(_+=Yg(S),_>Ks){tn.length=Y;break}S=new Promise(ry.bind(S)),tn.push(S)}}}if(0<tn.length)return x=Promise.race([Promise.all(tn),new Promise(function($){return setTimeout($,500)})]).then(i,i),(j?Promise.allSettled([j.finished,x]):x).then(l,l);if(i(),j)return j.finished.then(l,l);l()},types:t});T.__reactViewTransition=N;var A=[];return N.ready.then(function(){for(var x=T.documentElement.getAnimations({subtree:!0}),j=0;j<x.length;j++){var Y=x[j],tn=Y.effect,Nn=tn.pseudoElement;if(Nn!=null&&Nn.startsWith("::view-transition")){A.push(Y),Y=tn.getKeyframes();for(var _=Nn=void 0,m=!0,S=0;S<Y.length;S++){var O=Y[S],$=O.width;if(Nn===void 0)Nn=$;else if(Nn!==$){m=!1;break}if($=O.height,_===void 0)_=$;else if(_!==$){m=!1;break}delete O.width,delete O.height,O.transform==="none"&&delete O.transform}m&&Nn!==void 0&&_!==void 0&&(tn.setKeyframes(Y),m=getComputedStyle(tn.target,tn.pseudoElement),m.width!==Nn||m.height!==_)&&(m=Y[0],m.width=Nn,m.height=_,m=Y[Y.length-1],m.width=Nn,m.height=_,tn.setKeyframes(Y))}}s()},function(x){T.__reactViewTransition===N&&(T.__reactViewTransition=null);try{typeof x=="object"&&x!==null&&x.name==="InvalidStateError"&&(x.message==="View transition was skipped because document visibility state is hidden."||x.message==="Skipping view transition because document visibility state has become hidden."||x.message==="Skipping view transition because viewport size changed."||x.message==="Transition was aborted because of invalid state")&&(x=null),x!==null&&f(x)}finally{a(),i(),s()}}),N.finished.finally(function(){for(var x=0;x<A.length;x++)A[x].cancel();T.__reactViewTransition===N&&(T.__reactViewTransition=null),c()}),N}catch{return a(),i(),s(),null}}function _i(n,e){this._scope=document.documentElement,this._selector="::view-transition-"+n+"("+e+")"}_i.prototype.animate=function(n,e){return e=typeof e=="number"?{duration:e}:un({},e),e.pseudoElement=this._selector,this._scope.animate(n,e)},_i.prototype.getAnimations=function(){for(var n=this._scope,e=this._selector,t=n.getAnimations({subtree:!0}),a=[],i=0;i<t.length;i++){var l=t[i].effect;l!==null&&l.target===n&&l.pseudoElement===e&&a.push(t[i])}return a},_i.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Tg(n){return{name:n,group:new _i("group",n),imagePair:new _i("image-pair",n),old:new _i("old",n),new:new _i("new",n)}}function bt(n){this._fragmentFiber=n,this._observers=this._eventListeners=null}bt.prototype.addEventListener=function(n,e,t){var a=null,i=null;if(!(t!=null&&typeof t!="boolean"&&(a=t.signal||null,a!==null&&a.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var l=this._eventListeners;if(jg(l,n,e,t)===-1){var s=this,c=e;t!=null&&typeof t!="boolean"&&t.once===!0&&(c=function(f){s.removeEventListener(n,e,t),typeof e=="function"?e.call(this,f):e.handleEvent(f)}),a!==null&&(i=s.removeEventListener.bind(s,n,e,t),a.addEventListener("abort",i,{once:!0}),i=a.removeEventListener.bind(a,"abort",i)),a=sr(t),l.push({type:n,listener:e,optionsOrUseCapture:t,attachedListener:c,cleanup:i}),y(this._fragmentFiber.child,!1,sy,n,c,a)}this._eventListeners=l}};function sy(n,e,t,a){return nn(n).addEventListener(e,t,a),!1}bt.prototype.removeEventListener=function(n,e,t){var a=this._eventListeners;if(a!==null&&(e=jg(a,n,e,t),e!==-1)){var i=a[e];t=i.attachedListener;var l=i.cleanup;i=sr(i.optionsOrUseCapture),y(this._fragmentFiber.child,!1,oy,n,t,i),a.splice(e,1),l!==null&&l()}};function oy(n,e,t,a){return nn(n).removeEventListener(e,t,a),!1}function sr(n){return n!=null&&typeof n!="boolean"&&(n.once===!0||n.signal instanceof AbortSignal)?{capture:n.capture,passive:n.passive}:n}function Sg(n){return n==null?"c=0":typeof n=="boolean"?"c="+(n?"1":"0"):"c="+(n.capture?"1":"0")}function jg(n,e,t,a){if(n.length===0)return-1;a=Sg(a);for(var i=0;i<n.length;i++){var l=n[i];if(l.type===e&&l.listener===t&&Sg(l.optionsOrUseCapture)===a)return i}return-1}bt.prototype.dispatchEvent=function(n){var e=w(this._fragmentFiber);if(e===null)return!0;e=nn(e);var t=this._eventListeners;if(t!==null&&0<t.length||!n.bubbles){var a=e.nodeType===9?e.createComment(""):document.createTextNode("");if(t)for(var i=0;i<t.length;i++){var l=t[i];a.addEventListener(l.type,l.attachedListener,sr(l.optionsOrUseCapture))}if(e.appendChild(a),n=a.dispatchEvent(n),t)for(i=0;i<t.length;i++)l=t[i],a.removeEventListener(l.type,l.attachedListener,sr(l.optionsOrUseCapture));return e.removeChild(a),n}return e.dispatchEvent(n)},bt.prototype.focus=function(n){y(this._fragmentFiber.child,!0,Ng,n,void 0,void 0)};function Ng(n,e){return n.tag===6?!1:(n=nn(n),xy(n,e))}bt.prototype.focusLast=function(n){var e=[];y(this._fragmentFiber.child,!0,vu,e,void 0,void 0);for(var t=e.length-1;0<=t&&!Ng(e[t],n);t--);};function vu(n,e){return e.push(n),!1}bt.prototype.blur=function(){var n=w(this._fragmentFiber);n!==null&&(n=nn(n),n=cl(n).activeElement,n!==null&&y(this._fragmentFiber.child,!1,cy,n,void 0,void 0))};function cy(n,e){return n.tag===6?!1:(n=nn(n),n===e||n.contains(e)?(e.blur(),!0):!1)}bt.prototype.observeUsing=function(n){this._observers===null&&(this._observers=new Set),this._observers.add(n),y(this._fragmentFiber.child,!1,uy,n,void 0,void 0)};function uy(n,e){return n.tag===6||(n=nn(n),e.observe(n)),!1}bt.prototype.unobserveUsing=function(n){var e=this._observers;if(e!==null&&e.has(n)){e.delete(n),y(this._fragmentFiber.child,!1,dy,n,void 0,void 0);for(var t=e=0;t<Ut.length;t++){var a=Ut[t];a.fragmentInstance===this&&a.observer===n?n.unobserve(a.instance):Ut[e++]=a}Ut.length=e}};function dy(n,e){return n.tag===6||(n=nn(n),e.unobserve(n)),!1}var Ut=[],yu=!1;function fy(n,e,t){Ut.push({fragmentInstance:n,observer:e,instance:t}),yu||(yu=!0,_y(function(){yu=!1;var a=Ut;Ut=[];for(var i=0;i<a.length;i++){var l=a[i];l.observer.unobserve(l.instance)}}))}bt.prototype.getClientRects=function(){var n=[];return y(this._fragmentFiber.child,!1,hy,n,void 0,void 0),n};function hy(n,e){if(n.tag===6){n=n.stateNode;var t=n.ownerDocument.createRange();t.selectNodeContents(n),e.push.apply(e,t.getClientRects())}else n=nn(n),e.push.apply(e,n.getClientRects());return!1}bt.prototype.getRootNode=function(n){var e=w(this._fragmentFiber);return e===null?this:nn(e).getRootNode(n)},bt.prototype.compareDocumentPosition=function(n){var e=w(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var t=[];y(this._fragmentFiber.child,!1,vu,t,void 0,void 0);var a=nn(e);if(t.length===0){if(t=a,V(this._fragmentFiber)){n:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break n}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(t=e)}e=this._fragmentFiber;var i=a=t.compareDocumentPosition(n);return t===n?i=Node.DOCUMENT_POSITION_CONTAINS:a&Node.DOCUMENT_POSITION_CONTAINED_BY&&(t=B(e)[1],t===null?i=Node.DOCUMENT_POSITION_PRECEDING:(n=nn(t).compareDocumentPosition(n),i=n===0||n&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=nn(t[0]),i=nn(t[t.length-1]);var l=V(this._fragmentFiber)?e.parentElement:a;if(l==null)return Node.DOCUMENT_POSITION_DISCONNECTED;a=l.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,l=l.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var s=e.compareDocumentPosition(n),c=i.compareDocumentPosition(n),f=s&Node.DOCUMENT_POSITION_CONTAINED_BY||c&Node.DOCUMENT_POSITION_CONTAINED_BY;return c=a&&l&&s&Node.DOCUMENT_POSITION_FOLLOWING&&c&Node.DOCUMENT_POSITION_PRECEDING,e=a&&e===n||l&&i===n||f||c?Node.DOCUMENT_POSITION_CONTAINED_BY:!a&&e===n||!l&&i===n?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:s,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||gy(e,this._fragmentFiber,t[0],t[t.length-1],n)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function gy(n,e,t,a,i){var l=Ce(i);if(n&Node.DOCUMENT_POSITION_CONTAINED_BY){if(t=!!l)n:{for(;l!==null;){if(l.tag===7&&(l===e||l.alternate===e)){t=!0;break n}l=l.return}t=!1}return t}if(n&Node.DOCUMENT_POSITION_CONTAINS){if(l===null)return l=i.ownerDocument,i===l||i===l.documentElement||i===l.body;n:{for(l=e,e=w(e);l!==null;){if(!(l.tag!==5&&l.tag!==3&&l.tag!==27||l!==e&&l.alternate!==e)){l=!0;break n}l=l.return}l=!1}return l}return n&Node.DOCUMENT_POSITION_PRECEDING?((e=!!l)&&!(e=l===t)&&(e=Hn(t,l,Kn),e===null?e=!1:(y(e,!0,ln,l,t),l=xn,xn=null,e=l!==null)),e):n&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!l)&&!(e=l===a)&&(e=Hn(a,l,Kn),e===null?e=!1:(y(e,!0,wn,l,a),l=xn,cn=xn=null,e=l!==null)),e):!1}function wg(n,e){var t=n.ownerDocument.createRange();t.selectNodeContents(n),n=t.getBoundingClientRect(),window.scrollTo(window.scrollX+n.left,e?window.scrollY+n.top:window.scrollY+n.bottom-window.innerHeight)}bt.prototype.scrollIntoView=function(n){if(typeof n=="object")throw Error(d(566));var e=[];y(this._fragmentFiber.child,!1,vu,e,void 0,void 0);var t=n!==!1;if(e.length===0){var a=B(this._fragmentFiber);if(a=t?a[1]||a[0]||w(this._fragmentFiber):a[0]||a[1],a===null)return;if(a.tag===6){n=nn(a),wg(n,t);return}if(a=nn(a),a.nodeType!==9){if(a.nodeType===11){t="host"in a?a.host:null,t!==null&&t.scrollIntoView(n);return}a.scrollIntoView(n)}}for(a=t?e.length-1:0;a!==(t?-1:e.length);){var i=e[a];i.tag===6?(i=nn(i),wg(i,t)):nn(i).scrollIntoView(n),a+=t?-1:1}};function py(n,e){return n=nn(n),Eg(n,e),!1}function Eg(n,e){n.reactFragments==null&&(n.reactFragments=new Set),n.reactFragments.add(e)}function Og(n,e){var t=e._eventListeners;if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];n.addEventListener(i.type,i.attachedListener,sr(i.optionsOrUseCapture))}n.nodeType!==3&&(t=e._observers,t!==null&&t.forEach(function(l){for(var s=0,c=0;c<Ut.length;c++){var f=Ut[c];(f.fragmentInstance!==e||f.observer!==l||f.instance!==n)&&(Ut[s++]=f)}Ut.length=s,l.observe(n)}),Eg(n,e))}function my(n,e){var t=e._eventListeners;if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];n.removeEventListener(i.type,i.attachedListener,sr(i.optionsOrUseCapture))}n.nodeType!==3&&(t=e._observers,t!==null&&t.forEach(function(l){typeof l.rootMargin=="string"?fy(e,l,n):l.unobserve(n)}),n.reactFragments!=null&&n.reactFragments.delete(e))}function xu(n){var e=n.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var t=e;switch(e=e.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":xu(t),Me(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}n.removeChild(t)}}function by(n,e,t,a){for(;n.nodeType===1;){var i=t;if(n.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(a){if(!n[at])switch(e){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(l=n.getAttribute("rel"),l==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(l!==i.rel||n.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||n.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||n.getAttribute("title")!==(i.title==null?null:i.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(l=n.getAttribute("src"),(l!==(i.src==null?null:i.src)||n.getAttribute("type")!==(i.type==null?null:i.type)||n.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(e==="input"&&n.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&n.getAttribute("name")===l)return n}else return n;if(n=Ot(n.nextSibling),n===null)break}return null}function vy(n,e,t){if(e==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!t||(n=Ot(n.nextSibling),n===null))return null;return n}function Ag(n,e){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=Ot(n.nextSibling),n===null))return null;return n}function _u(n){return n.data==="$?"||n.data==="$~"}function Tu(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function yy(n,e){var t=n.ownerDocument;if(n.data==="$~")n._reactRetry=e;else if(n.data!=="$?"||t.readyState!=="loading")e();else{var a=function(){e(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),n._reactRetry=a}}function Ot(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return n}var Su=null;function kg(n){n=n.nextSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"||t==="/&"){if(e===0)return Ot(n.nextSibling);e--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||e++}n=n.nextSibling}return null}function Mg(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(e===0)return n;e--}else t!=="/$"&&t!=="/&"||e++}n=n.previousSibling}return null}function xy(n,e){function t(){a=!0}if(n.ownerDocument.activeElement===n)return!0;var a=!1;try{n.ownerDocument.addEventListener("focus",t,!0),(n.focus||HTMLElement.prototype.focus).call(n,e)}finally{n.ownerDocument.removeEventListener("focus",t,!0)}return a}function _y(n){bg(function(){bg(function(e){return n(e)})})}function Cg(n,e,t){switch(e=cl(t),n){case"html":if(n=e.documentElement,!n)throw Error(d(452));return n;case"head":if(n=e.head,!n)throw Error(d(453));return n;case"body":if(n=e.body,!n)throw Error(d(454));return n;default:throw Error(d(451))}}function Rg(n,e,t){for(var a in t){var i=t[a];t.hasOwnProperty(a)&&i!=null&&Fn(n,e,a,null,F1,i)}t.dangerouslySetInnerHTML!=null&&(n.textContent=""),n.onclick===Yt&&(n.onclick=null),Me(n)}function ju(n){for(var e=n.attributes;e.length;)n.removeAttributeNode(e[0]);Me(n)}var At=new Map,zg=new Set;function ul(n){if(typeof n.getRootNode=="function"){var e=n.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return n.nodeType===9?n:n.ownerDocument}var ba=hn.d;hn.d={f:Ty,r:Sy,D:jy,C:Ny,L:wy,m:Ey,X:Ay,S:Oy,M:ky};function Ty(){var n=ba.f(),e=Ds();return n||e}function Sy(n){var e=ea(n);e!==null&&e.tag===5&&e.type==="form"?Lf(e):ba.r(n)}var or=typeof document>"u"?null:document;function Dg(n,e,t){var a=or;if(a&&typeof e=="string"&&e){var i=Qn(e);i='link[rel="'+n+'"][href="'+i+'"]',typeof t=="string"&&(i+='[crossorigin="'+t+'"]'),zg.has(i)||(zg.add(i),n={rel:n,crossOrigin:t,href:e},a.querySelector(i)===null&&(e=a.createElement("link"),Ye(e,"link",n),xe(e),a.head.appendChild(e)))}}function jy(n){ba.D(n),Dg("dns-prefetch",n,null)}function Ny(n,e){ba.C(n,e),Dg("preconnect",n,e)}function wy(n,e,t){ba.L(n,e,t);var a=or;if(a&&n&&e){var i='link[rel="preload"][as="'+Qn(e)+'"]';e==="image"&&t&&t.imageSrcSet?(i+='[imagesrcset="'+Qn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(i+='[imagesizes="'+Qn(t.imageSizes)+'"]')):i+='[href="'+Qn(n)+'"]';var l=i;switch(e){case"style":l=cr(n);break;case"script":l=ur(n)}if(!(At.has(l)||(n=un({rel:"preload",href:e==="image"&&t&&t.imageSrcSet?void 0:n,as:e},t),At.set(l,n),a.querySelector(i)!==null||e==="style"&&a.querySelector(dl(l))||e==="script"&&a.querySelector(fl(l))))){var s=a.createElement("link");Ye(s,"link",n),e==="style"&&(s[na]=!0,s.onload=s.onerror=function(){kl(s)}),xe(s),a.head.appendChild(s)}}}function Ey(n,e){ba.m(n,e);var t=or;if(t&&n){var a=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+Qn(a)+'"][href="'+Qn(n)+'"]',l=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=ur(n)}if(!At.has(l)&&(n=un({rel:"modulepreload",href:n},e),At.set(l,n),t.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(fl(l)))return}a=t.createElement("link"),Ye(a,"link",n),xe(a),t.head.appendChild(a)}}}function Oy(n,e,t){ba.S(n,e,t);var a=or;if(a&&n){var i=ta(a).hoistableStyles,l=cr(n);e=e||"default";var s=i.get(l);if(!s){var c={loading:0,preload:null};if(s=a.querySelector(dl(l)))c.loading=5;else{n=un({rel:"stylesheet",href:n,"data-precedence":e},t),(t=At.get(l))&&Nu(n,t);var f=s=a.createElement("link");xe(f),Ye(f,"link",n),f._p=new Promise(function(T,N){f.onload=T,f.onerror=N}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Ys(s,e,a)}s={type:"stylesheet",instance:s,count:1,state:c},i.set(l,s)}}}function Ay(n,e){ba.X(n,e);var t=or;if(t&&n){var a=ta(t).hoistableScripts,i=ur(n),l=a.get(i);l||(l=t.querySelector(fl(i)),l||(n=un({src:n,async:!0},e),(e=At.get(i))&&wu(n,e),l=t.createElement("script"),xe(l),Ye(l,"link",n),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function ky(n,e){ba.M(n,e);var t=or;if(t&&n){var a=ta(t).hoistableScripts,i=ur(n),l=a.get(i);l||(l=t.querySelector(fl(i)),l||(n=un({src:n,async:!0,type:"module"},e),(e=At.get(i))&&wu(n,e),l=t.createElement("script"),xe(l),Ye(l,"link",n),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function Lg(n,e,t,a){var i=(i=Ht.current)?ul(i):null;if(!i)throw Error(d(446));switch(n){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(t=cr(t.href),e=ta(i).hoistableStyles,a=e.get(t),a||(a={type:"style",instance:null,count:0,state:null},e.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){n=cr(t.href);var l=ta(i).hoistableStyles,s=l.get(n);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(n,s),(l=i.querySelector(dl(n)))?l._p||(s.instance=l,s.state.loading=5):(l=At.get(n),l||(l={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},At.set(n,l)),My(i,n,l,s.state))),e&&a===null)throw Error(d(528,""));return s}if(e&&a!==null)throw Error(d(529,""));return null;case"script":return e=t.async,t=t.src,typeof t=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(t=ur(t),e=ta(i).hoistableScripts,a=e.get(t),a||(a={type:"script",instance:null,count:0,state:null},e.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,n))}}function cr(n){return'href="'+Qn(n)+'"'}function dl(n){return'link[rel="stylesheet"]['+n+"]"}function Bg(n){return un({},n,{"data-precedence":n.precedence,precedence:null})}function My(n,e,t,a){if(e=n.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[na]!==!0){a.loading=1;return}}else e=n.createElement("link"),e[na]=!0,e.onload=e.onerror=kl.bind(null,e),Ye(e,"link",t),xe(e),n.head.appendChild(e);a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2})}function ur(n){return'[src="'+Qn(n)+'"]'}function fl(n){return"script[async]"+n}function Ug(n,e,t){if(e.count++,e.instance===null)switch(e.type){case"style":var a=n.querySelector('style[data-href~="'+Qn(t.href)+'"]');if(a)return e.instance=a,xe(a),a;var i=un({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(n.ownerDocument||n).createElement("style"),xe(a),Ye(a,"style",i),Ys(a,t.precedence,n),e.instance=a;case"stylesheet":i=cr(t.href);var l=n.querySelector(dl(i));if(l)return e.state.loading|=4,e.instance=l,xe(l),l;a=Bg(t),(i=At.get(i))&&Nu(a,i),l=(n.ownerDocument||n).createElement("link"),xe(l);var s=l;return s._p=new Promise(function(c,f){s.onload=c,s.onerror=f}),Ye(l,"link",a),e.state.loading|=4,Ys(l,t.precedence,n),e.instance=l;case"script":return l=ur(t.src),(i=n.querySelector(fl(l)))?(e.instance=i,xe(i),i):(a=t,(i=At.get(l))&&(a=un({},t),wu(a,i)),n=n.ownerDocument||n,i=n.createElement("script"),xe(i),Ye(i,"link",a),n.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(d(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Ys(a,t.precedence,n));return e.instance}function Ys(n,e,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,l=i,s=0;s<a.length;s++){var c=a[s];if(c.dataset.precedence===e)l=c;else if(l!==i)break}l?l.parentNode.insertBefore(n,l.nextSibling):(e=t.nodeType===9?t.head:t,e.insertBefore(n,e.firstChild))}function Nu(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.title==null&&(n.title=e.title)}function wu(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.integrity==null&&(n.integrity=e.integrity)}var Vs=null;function Hg(n,e,t){if(Vs===null){var a=new Map,i=Vs=new Map;i.set(t,a)}else i=Vs,a=i.get(t),a||(a=new Map,i.set(t,a));if(a.has(n))return a;for(a.set(n,null),t=t.getElementsByTagName(n),i=0;i<t.length;i++){var l=t[i];if(!(l[at]||l[Ae]||n==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var s=l.getAttribute(e)||"";s=n+s;var c=a.get(s);c?c.push(l):a.set(s,[l])}}return a}function Eu(n,e,t){n=n.ownerDocument||n,n.head.insertBefore(t,e==="title"?n.querySelector("head > title"):null)}function Cy(n,e,t){if(t===1||e.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(n=e.disabled,typeof e.precedence=="string"&&n==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function qg(n,e){return n==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function Gg(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function Yg(n){return(n.width||100)*(n.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Vg(n,e){typeof e.decode=="function"&&(n.imgCount++,e.complete||(n.imgBytes+=Yg(e),n.suspenseyImages.push(e)),n=Dy.bind(n),e.decode().then(n,n))}function Ry(n,e,t,a){if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=cr(a.href),l=e.querySelector(dl(i));if(l){e=l._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=hl.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=l,xe(l);return}l=e.ownerDocument||e,a=Bg(a),(i=At.get(i))&&Nu(a,i),l=l.createElement("link"),xe(l);var s=l;s._p=new Promise(function(c,f){s.onload=c,s.onerror=f}),Ye(l,"link",a),t.instance=l}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=hl.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}var Ks=0;function zy(n,e){return n.stylesheets&&n.count===0&&Xs(n,n.stylesheets),0<n.count||0<n.imgCount?function(t){var a=setTimeout(function(){if(n.stylesheets&&Xs(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4+e);0<n.imgBytes&&Ks===0&&(Ks=62500*W1());var i=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&Xs(n,n.stylesheets),n.unsuspend)){var l=n.unsuspend;n.unsuspend=null,l()}},(n.imgBytes>Ks?50:800)+e);return n.unsuspend=t,function(){n.unsuspend=null,clearTimeout(a),clearTimeout(i)}}:null}function Kg(n){if(n.count===0&&(n.imgCount===0||!n.waitingForImages)){if(n.stylesheets)Xs(n,n.stylesheets);else if(n.unsuspend){var e=n.unsuspend;n.unsuspend=null,e()}}}function hl(){this.count--,Kg(this)}function Dy(){this.imgCount--,Kg(this)}var Is=null;function Xs(n,e){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Is=new Map,e.forEach(Ly,n),Is=null,hl.call(n))}function Ly(n,e){if(!(e.state.loading&4)){var t=Is.get(n);if(t)var a=t.get(null);else{t=new Map,Is.set(n,t);for(var i=n.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var s=i[l];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(t.set(s.dataset.precedence,s),a=s)}a&&t.set(null,a)}i=e.instance,s=i.getAttribute("data-precedence"),l=t.get(s)||a,l===a&&t.set(null,i),t.set(s,i),this.count++,a=hl.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),l?l.parentNode.insertBefore(i,l.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(i,n.firstChild)),e.state.loading|=4}}var dr={$$typeof:le,Provider:null,Consumer:null,_currentValue:$e,_currentValue2:$e,_threadCount:0};function By(n,e,t,a,i,l,s,c,f){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ja(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ja(0),this.hiddenUpdates=ja(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.transitionTypes=null,this.incompleteTransitions=new Map}function Ig(n,e,t,a,i,l,s,c,f,T,N,A){return n=new By(n,e,t,s,f,T,N,A,c),e=1,l===!0&&(e|=24),l=it(3,null,null,e),n.current=l,l.stateNode=n,e=Yo(),e.refCount++,n.pooledCache=e,e.refCount++,l.memoizedState={element:a,isDehydrated:t,cache:e},Xo(l),n}function Xg(n){return n?(n=Bi,n):Bi}function Qg(n,e,t,a,i,l){i=Xg(i),a.context===null?a.context=i:a.pendingContext=i,a=za(e),a.payload={element:t},l=l===void 0?null:l,l!==null&&(a.callback=l),t=Da(n,a,e),t!==null&&(ot(t,n,e),Kr(t,n,e))}function Jg(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Ou(n,e){Jg(n,e),(n=n.alternate)&&Jg(n,e)}function Zg(n){if(n.tag===13||n.tag===31){var e=ii(n,67108864);e!==null&&ot(e,n,67108864),Ou(n,67108864)}}function Fg(n){if(n.tag===13||n.tag===31){var e=mt();e=wi(e);var t=ii(n,e);t!==null&&ot(t,n,e),Ou(n,e)}}var fr=!0;function Uy(n,e,t,a){var i=en.T;en.T=null;var l=hn.p;try{hn.p=2,Au(n,e,t,a)}finally{hn.p=l,en.T=i}}function Hy(n,e,t,a){var i=en.T;en.T=null;var l=hn.p;try{hn.p=8,Au(n,e,t,a)}finally{hn.p=l,en.T=i}}function Au(n,e,t,a){if(fr){var i=ku(a);if(i===null)uu(n,e,a,Qs,t),Wg(n,a);else if(Gy(i,n,e,t,a))a.stopPropagation();else if(Wg(n,a),e&4&&-1<qy.indexOf(n)){for(;i!==null;){var l=ea(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var s=$t(l.pendingLanes);if(s!==0){var c=l;for(c.pendingLanes|=2,c.entangledLanes|=2;s;){var f=1<<31-G(s);c.entanglements[1]|=f,s&=~f}Wt(l),(Yn&6)===0&&(Cs=Ie()+500,ll(0))}}break;case 31:case 13:c=ii(l,2),c!==null&&ot(c,l,2),Ds(),Ou(l,2)}if(l=ku(a),l===null&&uu(n,e,a,Qs,t),l===i)break;i=l}i!==null&&a.stopPropagation()}else uu(n,e,a,null,t)}}function ku(n){return n=po(n),Mu(n)}var Qs=null;function Mu(n){if(Qs=null,n=Ce(n),n!==null){var e=M(n);if(e===null)n=null;else{var t=e.tag;if(t===13){if(n=C(e),n!==null)return n;n=null}else if(t===31){if(n=L(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null)}}return Qs=n,null}function Pg(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jl()){case Nl:return 2;case jr:return 8;case Mt:case h:return 32;case k:return 268435456;default:return 32}default:return 32}}var Cu=!1,Qa=null,Ja=null,Za=null,gl=new Map,pl=new Map,Fa=[],qy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Wg(n,e){switch(n){case"focusin":case"focusout":Qa=null;break;case"dragenter":case"dragleave":Ja=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":gl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":pl.delete(e.pointerId)}}function ml(n,e,t,a,i,l){return n===null||n.nativeEvent!==l?(n={blockedOn:e,domEventName:t,eventSystemFlags:a,nativeEvent:l,targetContainers:[i]},e!==null&&(e=ea(e),e!==null&&Zg(e)),n):(n.eventSystemFlags|=a,e=n.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),n)}function Gy(n,e,t,a,i){switch(e){case"focusin":return Qa=ml(Qa,n,e,t,a,i),!0;case"dragenter":return Ja=ml(Ja,n,e,t,a,i),!0;case"mouseover":return Za=ml(Za,n,e,t,a,i),!0;case"pointerover":var l=i.pointerId;return gl.set(l,ml(gl.get(l)||null,n,e,t,a,i)),!0;case"gotpointercapture":return l=i.pointerId,pl.set(l,ml(pl.get(l)||null,n,e,t,a,i)),!0}return!1}function $g(n){var e=Ce(n.target);if(e!==null){var t=M(e);if(t!==null){if(e=t.tag,e===13){if(e=C(t),e!==null){n.blockedOn=e,Al(n.priority,function(){Fg(t)});return}}else if(e===31){if(e=L(t),e!==null){n.blockedOn=e,Al(n.priority,function(){Fg(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Js(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=ku(n.nativeEvent);if(t===null){t=n.nativeEvent;var a=new t.constructor(t.type,t);go=a,t.target.dispatchEvent(a),go=null}else return e=ea(t),e!==null&&Zg(e),n.blockedOn=t,!1;e.shift()}return!0}function np(n,e,t){Js(n)&&t.delete(e)}function Yy(){Cu=!1,Qa!==null&&Js(Qa)&&(Qa=null),Ja!==null&&Js(Ja)&&(Ja=null),Za!==null&&Js(Za)&&(Za=null),gl.forEach(np),pl.forEach(np)}function Zs(n,e){n.blockedOn===e&&(n.blockedOn=null,Cu||(Cu=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Yy)))}var Fs=null;function ep(n){Fs!==n&&(Fs=n,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Fs===n&&(Fs=null);for(var e=0;e<n.length;e+=3){var t=n[e],a=n[e+1],i=n[e+2];if(typeof a!="function"){if(Mu(a||t)===null)continue;break}var l=ea(t);l!==null&&(n.splice(e,3),e-=3,hc(l,{pending:!0,data:i,method:t.method,action:a},a,i))}}))}function hr(n){function e(f){return Zs(f,n)}Qa!==null&&Zs(Qa,n),Ja!==null&&Zs(Ja,n),Za!==null&&Zs(Za,n),gl.forEach(e),pl.forEach(e);for(var t=0;t<Fa.length;t++){var a=Fa[t];a.blockedOn===n&&(a.blockedOn=null)}for(;0<Fa.length&&(t=Fa[0],t.blockedOn===null);)$g(t),t.blockedOn===null&&Fa.shift();if(t=(n.ownerDocument||n).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var i=t[a],l=t[a+1],s=i[D]||null;if(typeof l=="function")s||ep(t);else if(s){var c=null;if(l&&l.hasAttribute("formAction")){if(i=l,s=l[D]||null)c=s.formAction;else if(Mu(i)!==null)continue}else c=s.action;typeof c=="function"?t[a+1]=c:(t.splice(a,3),a-=3),ep(t)}}}function tp(){function n(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(s){return i=s})},focusReset:"manual",scroll:"manual"})}function e(){i!==null&&(i(),i=null),a||setTimeout(t,20)}function t(){if(!a&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,i=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(t,100),function(){a=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),i!==null&&(i(),i=null)}}}function Ru(n){this._internalRoot=n}Ps.prototype.render=Ru.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(d(409));var t=e.current,a=mt();Qg(t,a,n,e,null,null)},Ps.prototype.unmount=Ru.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Qg(n.current,2,null,n,null,null),Ds(),e[an]=null}};function Ps(n){this._internalRoot=n}Ps.prototype.unstable_scheduleHydration=function(n){if(n){var e=Ol();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Fa.length&&e!==0&&e<Fa[t].priority;t++);Fa.splice(t,0,n),t===0&&$g(n)}};var ap=b.version;if(ap!=="19.3.1")throw Error(d(527,ap,"19.3.1"));hn.findDOMNode=function(n){var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(d(188)):(n=Object.keys(n).join(","),Error(d(268,n)));return n=Z(e),n=n!==null?z(n):null,n=n===null?null:n.stateNode,n};var Vy={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:en,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ws=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ws.isDisabled&&Ws.supportsFiber)try{ne=Ws.inject(Vy),Ln=Ws}catch{}}return vl.createRoot=function(n,e){if(!E(n))throw Error(d(299));var t=!1,a="",i=Xf,l=Qf,s=Jf;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(l=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Ig(n,1,!1,null,null,t,a,null,i,l,s,tp),n[an]=e.current,cu(n),new Ru(e)},vl.hydrateRoot=function(n,e,t){if(!E(n))throw Error(d(299));var a=!1,i="",l=Xf,s=Qf,c=Jf,f=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.formState!==void 0&&(f=t.formState)),e=Ig(n,1,!0,e,t??null,a,i,f,l,s,c,tp),e.context=Xg(null),t=e.current,a=mt(),a=wi(a),i=za(a),i.callback=null,Da(t,i,a),t=a,e.current.lanes=t,ei(e,t),Wt(e),n[an]=e.current,cu(n),new Ps(e)},vl.version="19.3.1",vl}var hp;function Wy(){if(hp)return Du.exports;hp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(b){console.error(b)}}return o(),Du.exports=Py(),Du.exports}var $y=Wy();const nx=br($y);var U=Pu();const lo=br(U),Wu=["python","javascript","java","cpp"];function ex(){try{const o=localStorage.getItem("selectedLanguage");return o&&Wu.includes(o)?o:"python"}catch{return"python"}}const Cp=U.createContext(void 0),tx=({children:o})=>{const[b,p]=U.useState(ex);return U.useEffect(()=>{try{localStorage.setItem("selectedLanguage",b)}catch{}},[b]),r.jsx(Cp.Provider,{value:{selectedLanguage:b,setSelectedLanguage:p},children:o})};function Rp(){const o=U.useContext(Cp);if(o===void 0)throw new Error("useLanguage must be used within a LanguageProvider");return o}const zp=U.createContext(void 0);function ax({children:o}){const[b,p]=U.useState(!1),d=()=>p(!0),E=()=>p(!1),M=()=>p(!b);return r.jsx(zp.Provider,{value:{isSidebarOpen:b,showSidebar:d,hideSidebar:E,toggleSidebar:M},children:o})}function $u(){const o=U.useContext(zp);if(o===void 0)throw new Error("useSidebar must be used within SidebarProvider");return o}const Dp=U.createContext(void 0);function ix({children:o}){const[b,p]=U.useState("finder");return r.jsx(Dp.Provider,{value:{view:b,setView:p},children:o})}function so(){const o=U.useContext(Dp);if(o===void 0)throw new Error("useView must be used within ViewProvider");return o}const rx="_topbar_1nd3w_1",lx="_container_1nd3w_17",sx="_visuallyHidden_1nd3w_43",ox="_wordmark_1nd3w_55",cx="_title_1nd3w_68",ux="_segmented_1nd3w_85",dx="_segment_1nd3w_85",fx="_tools_1nd3w_159",hx="_select_1nd3w_171",gx="_selectChevron_1nd3w_210",px="_iconLink_1nd3w_226",mx="_hamburger_1nd3w_255",bx="_hamburgerIcon_1nd3w_272",vx="_hamburgerTop_1nd3w_282",yx="_open_1nd3w_285",xx="_hamburgerMiddle_1nd3w_289",_x="_hamburgerBottom_1nd3w_296",ve={topbar:rx,container:lx,visuallyHidden:sx,wordmark:ox,title:cx,segmented:ux,segment:dx,tools:fx,select:hx,selectChevron:gx,iconLink:px,hamburger:mx,hamburgerIcon:bx,hamburgerTop:vx,open:yx,hamburgerMiddle:xx,hamburgerBottom:_x};function we(...o){let b="";for(const p of o)if(p){if(typeof p=="string"||typeof p=="number")b+=(b&&" ")+p;else if(Array.isArray(p)){const d=we(...p);d&&(b+=(b&&" ")+d)}else if(typeof p=="object")for(const d in p)p[d]&&(b+=(b&&" ")+d)}return b}function Lp(){const o=document.documentElement,b=getComputedStyle(o).getPropertyValue("--navbar-height");return parseFloat(b)||76}function nd(o,b=0){const p=document.querySelector(o);if(!p)return;const d=p.getBoundingClientRect().top+window.scrollY,E=window.matchMedia("(prefers-reduced-motion: reduce)").matches;window.scrollTo({top:Math.max(0,d-b),behavior:E?"auto":"smooth"})}const Tx=2,Sx=2e3;let Fu=0;function ed(){cancelAnimationFrame(Fu)}function jx(o,b){ed();const p=performance.now();let d=-1,E=0;const M=()=>{const C=document.querySelector(o);if(C){const H=C.getBoundingClientRect().top+window.scrollY;E=H===d?E+1:0,d=H}const L=performance.now()-p>Sx;if(E>=Tx||L){nd(o,b);return}Fu=requestAnimationFrame(M)};Fu=requestAnimationFrame(M)}const Nx="_container_125w8_1",wx="_input_125w8_7",Ex="_label_125w8_18",Ox="_indicator_125w8_34",Ax="_sun_125w8_58",kx="_moon_125w8_65",gr={container:Nx,input:wx,label:Ex,indicator:Ox,sun:Ax,moon:kx},Mx="theme";function gp(){document.documentElement.dispatchEvent(new Event("themeChange"))}function Cx(){const[o,b]=U.useState("dark");U.useEffect(()=>{const d=document.documentElement.getAttribute("data-theme")==="light"?"light":"dark";b(d),gp()},[]);const p=()=>{const d=o==="light"?"dark":"light";b(d),document.documentElement.setAttribute("data-theme",d);try{localStorage.setItem(Mx,d)}catch{}gp()};return r.jsxs("div",{className:gr.container,children:[r.jsx("input",{className:gr.input,"aria-label":"Light theme",role:"switch",id:"theme-switch",type:"checkbox",checked:o==="light",onChange:p}),r.jsx("label",{className:gr.label,htmlFor:"theme-switch",title:"Toggle light theme",children:r.jsxs("span",{className:gr.indicator,children:[r.jsx("svg",{className:gr.moon,viewBox:"0 0 16 16","aria-hidden":"true",children:r.jsx("path",{d:"M13 9.5A5.5 5.5 0 0 1 6.5 3a5.5 5.5 0 1 0 6.5 6.5Z"})}),r.jsxs("svg",{className:gr.sun,viewBox:"0 0 16 16","aria-hidden":"true",children:[r.jsx("circle",{cx:"8",cy:"8",r:"2.75"}),r.jsx("path",{d:"M8 1.5v1.75M8 12.75v1.75M1.5 8h1.75M12.75 8h1.75M3.4 3.4l1.25 1.25M11.35 11.35l1.25 1.25M3.4 12.6l1.25-1.25M11.35 4.65l1.25-1.25"})]})]})})]})}function Rx(){return r.jsx("svg",{viewBox:"0 0 128 128",children:r.jsxs("g",{fill:"var(--svg-github-fill)",children:[r.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"}),r.jsx("path",{d:"M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm2.382 3.477c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237m4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"})]})})}const zx=[{id:"finder",label:"Pattern Finder"},{id:"cheatsheet",label:"Reference"}],Dx={python:"Python",javascript:"JavaScript",java:"Java",cpp:"C++"};function Lx({forwardedRef:o}){const b=U.useRef(null),{isSidebarOpen:p,showSidebar:d,hideSidebar:E,toggleSidebar:M}=$u(),{view:C,setView:L}=so(),{selectedLanguage:H,setSelectedLanguage:Z}=Rp();U.useLayoutEffect(()=>{if(!b.current)return;const B=new ResizeObserver(X=>{for(const nn of X){const xn=nn.borderBoxSize[0].blockSize;document.documentElement.style.setProperty("--topbar-height",`${xn}px`)}});return B.observe(b.current),()=>B.disconnect()},[]);const z=B=>{B.preventDefault(),window.history.replaceState({},"",window.location.pathname),nd("main",Lp()-2)},y=()=>M(),w=B=>{B!==C&&(ed(),L(B),B==="finder"?E():window.matchMedia("(max-width: 768px)").matches||d(),window.scrollTo({top:0}))},V=B=>{Z(B.target.value)};return r.jsx("header",{ref:b,className:ve.topbar,children:r.jsxs("div",{className:ve.container,children:[C==="cheatsheet"&&r.jsxs("button",{ref:o,type:"button",className:ve.hamburger,onClick:y,"aria-label":p?"Hide reference sections":"Show reference sections","aria-expanded":p,"aria-controls":"reference-sections",children:[r.jsx("span",{className:we(ve.hamburgerIcon,ve.hamburgerTop,p&&ve.open)}),r.jsx("span",{className:we(ve.hamburgerIcon,ve.hamburgerMiddle,p&&ve.open)}),r.jsx("span",{className:we(ve.hamburgerIcon,ve.hamburgerBottom,p&&ve.open)})]}),r.jsx("a",{href:"/leetcode-pattern-drill/",className:ve.wordmark,onClick:z,children:r.jsx("h1",{className:ve.title,children:"Pattern Drill"})}),r.jsx("div",{className:ve.segmented,role:"group","aria-label":"View",children:zx.map(({id:B,label:X})=>r.jsx("button",{type:"button",className:ve.segment,"aria-pressed":C===B,onClick:()=>w(B),children:X},B))}),r.jsxs("div",{className:ve.tools,children:[r.jsxs("label",{className:ve.select,children:[r.jsx("span",{className:ve.visuallyHidden,children:"Template language"}),r.jsx("select",{value:H,onChange:V,children:Wu.map(B=>r.jsx("option",{value:B,children:Dx[B]},B))}),r.jsx("svg",{className:ve.selectChevron,viewBox:"0 0 12 12","aria-hidden":"true",children:r.jsx("path",{d:"M2.5 4.5 6 8l3.5-3.5"})})]}),r.jsx(Cx,{}),r.jsx("a",{href:"https://github.com/Tyler-Reagan/leetcode-pattern-drill","aria-label":"GitHub source",className:ve.iconLink,target:"_blank",rel:"noopener noreferrer",children:r.jsx(Rx,{})})]})]})})}const Bx="_sidebar_u19dm_1",Ux="_exit_u19dm_17",Hx="_hide_u19dm_20",qx="_heading_u19dm_29",Gx="_scrollContainer_u19dm_41",yl={sidebar:Bx,exit:Ux,hide:Hx,heading:qx,scrollContainer:Gx};var $s={},pp;function Yx(){if(pp)return $s;pp=1,$s.match=M,$s.parse=C;var o=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,b=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,p=/^(?:(min|max)-)?(.+)/,d=/(em|rem|px|cm|mm|in|pt|pc)?$/,E=/(dpi|dpcm|dppx)?$/;function M(z,y){return C(z).some(function(w){var V=w.inverse,B=w.type==="all"||y.type===w.type;if(B&&V||!(B||V))return!1;var X=w.expressions.every(function(nn){var xn=nn.feature,cn=nn.modifier,ln=nn.value,wn=y[xn];if(!wn)return!1;switch(xn){case"orientation":case"scan":return wn.toLowerCase()===ln.toLowerCase();case"width":case"height":case"device-width":case"device-height":ln=Z(ln),wn=Z(wn);break;case"resolution":ln=H(ln),wn=H(wn);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":ln=L(ln),wn=L(wn);break;case"grid":case"color":case"color-index":case"monochrome":ln=parseInt(ln,10)||1,wn=parseInt(wn,10)||0;break}switch(cn){case"min":return wn>=ln;case"max":return wn<=ln;default:return wn===ln}});return X&&!V||!X&&V})}function C(z){return z.split(",").map(function(y){y=y.trim();var w=y.match(o),V=w[1],B=w[2],X=w[3]||"",nn={};return nn.inverse=!!V&&V.toLowerCase()==="not",nn.type=B?B.toLowerCase():"all",X=X.match(/\([^\)]+\)/g)||[],nn.expressions=X.map(function(xn){var cn=xn.match(b),ln=cn[1].toLowerCase().match(p);return{modifier:ln[1],feature:ln[2],value:cn[2]}}),nn})}function L(z){var y=Number(z),w;return y||(w=z.match(/^(\d+)\s*\/\s*(\d+)$/),y=w[1]/w[2]),y}function H(z){var y=parseFloat(z),w=String(z).match(E)[1];switch(w){case"dpcm":return y/2.54;case"dppx":return y*96;default:return y}}function Z(z){var y=parseFloat(z),w=String(z).match(d)[1];switch(w){case"em":return y*16;case"rem":return y*16;case"cm":return y*96/2.54;case"mm":return y*96/2.54/10;case"in":return y*96;case"pt":return y*72;case"pc":return y*72/12;default:return y}}return $s}var qu,mp;function Vx(){if(mp)return qu;mp=1;var o=Yx().match,b=typeof window<"u"?window.matchMedia:null;function p(E,M,C){var L=this,H;b&&!C&&(H=b.call(window,E)),H?(this.matches=H.matches,this.media=H.media,H.addListener(y)):(this.matches=o(E,M),this.media=E),this.addListener=Z,this.removeListener=z,this.dispose=w;function Z(V){H&&H.addListener(V)}function z(V){H&&H.removeListener(V)}function y(V){L.matches=V.matches,L.media=V.media}function w(){H&&H.removeListener(y)}}function d(E,M,C){return new p(E,M,C)}return qu=d,qu}var Kx=Vx();const Ix=br(Kx);var Xx=/[A-Z]/g,Qx=/^ms-/,Gu={};function Jx(o){return"-"+o.toLowerCase()}function Bp(o){if(Gu.hasOwnProperty(o))return Gu[o];var b=o.replace(Xx,Jx);return Gu[o]=Qx.test(b)?"-"+b:b}function Zx(o,b){if(o===b)return!0;if(!o||!b)return!1;const p=Object.keys(o),d=Object.keys(b),E=p.length;if(d.length!==E)return!1;for(let M=0;M<E;M++){const C=p[M];if(o[C]!==b[C]||!Object.prototype.hasOwnProperty.call(b,C))return!1}return!0}var Yu={exports:{}},Vu,bp;function Fx(){if(bp)return Vu;bp=1;var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Vu=o,Vu}var Ku,vp;function Px(){if(vp)return Ku;vp=1;var o=Fx();function b(){}function p(){}return p.resetWarningCache=b,Ku=function(){function d(C,L,H,Z,z,y){if(y!==o){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}d.isRequired=d;function E(){return d}var M={array:d,bigint:d,bool:d,func:d,number:d,object:d,string:d,symbol:d,any:d,arrayOf:E,element:d,elementType:d,instanceOf:E,node:d,objectOf:E,oneOf:E,oneOfType:E,shape:E,exact:E,checkPropTypes:p,resetWarningCache:b};return M.PropTypes=M,M},Ku}var yp;function Wx(){return yp||(yp=1,Yu.exports=Px()()),Yu.exports}var $x=Wx();const Vn=br($x),We=Vn.oneOfType([Vn.string,Vn.number]),Up={all:Vn.bool,grid:Vn.bool,aural:Vn.bool,braille:Vn.bool,handheld:Vn.bool,print:Vn.bool,projection:Vn.bool,screen:Vn.bool,tty:Vn.bool,tv:Vn.bool,embossed:Vn.bool},n_={orientation:Vn.oneOf(["portrait","landscape"]),scan:Vn.oneOf(["progressive","interlace"]),aspectRatio:Vn.string,deviceAspectRatio:Vn.string,height:We,deviceHeight:We,width:We,deviceWidth:We,color:Vn.bool,colorIndex:Vn.bool,monochrome:Vn.bool,resolution:We,type:Object.keys(Up)},{type:I2,...e_}=n_,t_={minAspectRatio:Vn.string,maxAspectRatio:Vn.string,minDeviceAspectRatio:Vn.string,maxDeviceAspectRatio:Vn.string,minHeight:We,maxHeight:We,minDeviceHeight:We,maxDeviceHeight:We,minWidth:We,maxWidth:We,minDeviceWidth:We,maxDeviceWidth:We,minColor:Vn.number,maxColor:Vn.number,minColorIndex:Vn.number,maxColorIndex:Vn.number,minMonochrome:Vn.number,maxMonochrome:Vn.number,minResolution:We,maxResolution:We,...e_},a_={...Up,...t_};var i_={all:a_};const r_=o=>`not ${o}`,l_=(o,b)=>{const p=Bp(o);return typeof b=="number"&&(b=`${b}px`),b===!0?p:b===!1?r_(p):`(${p}: ${b})`},s_=o=>o.join(" and "),o_=o=>{const b=[];return Object.keys(i_.all).forEach(p=>{const d=o[p];d!=null&&b.push(l_(p,d))}),s_(b)},c_=U.createContext(void 0),u_=o=>o.query||o_(o),xp=o=>o?Object.keys(o).reduce((p,d)=>(p[Bp(d)]=o[d],p),{}):void 0,Hp=()=>{const o=U.useRef(!1);return U.useEffect(()=>{o.current=!0},[]),o.current},d_=o=>{const b=U.useContext(c_),p=()=>xp(o)||xp(b),[d,E]=U.useState(p);return U.useEffect(()=>{const M=p();Zx(d,M)||E(M)},[o,b]),d},f_=o=>{const b=()=>u_(o),[p,d]=U.useState(b);return U.useEffect(()=>{const E=b();p!==E&&d(E)},[o]),p},h_=(o,b)=>{const p=()=>Ix(o,b||{},!!b),[d,E]=U.useState(p),M=Hp();return U.useEffect(()=>{if(M){const C=p();return E(C),()=>{C&&C.dispose()}}},[o,b]),d},g_=o=>{const[b,p]=U.useState(o.matches);return U.useEffect(()=>{const d=E=>{p(E.matches)};return o.addListener(d),p(o.matches),()=>{o.removeListener(d)}},[o]),b},p_=(o,b,p)=>{const d=d_(b),E=f_(o);if(!E)throw new Error("Invalid or missing MediaQuery!");const M=h_(E,d),C=g_(M),L=Hp();return U.useEffect(()=>{L&&p&&p(C)},[C]),U.useEffect(()=>()=>{M&&M.dispose()},[]),C};function qp(o,b){U.useEffect(()=>{const p=d=>{const E=d.target;(Array.isArray(o)?o:[o]).every(L=>L.current&&!L.current.contains(E))&&b()};return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[o,b])}const m_="_accordion_hdwo0_1",b_="_button_hdwo0_7",v_="_open_hdwo0_42",y_="_content_hdwo0_46",no={accordion:m_,button:b_,open:v_,content:y_};function x_(o){const b=parseFloat(o);return!isNaN(b)&&isFinite(b)}function _p(o){return typeof o=="string"&&o[o.length-1]==="%"&&x_(o.substring(0,o.length-1))}function Iu(o,b,p){b===0&&!p&&o?.style&&o?.children.length>0&&(o.style.display="none")}function __(o,b){b===0&&o?.style&&(o.style.display="")}const T_={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"};function Tp(o,b){return[o.static,b===0&&o.staticHeightZero,typeof b=="number"&&b>0?o.staticHeightSpecific:null,b==="auto"&&o.staticHeightAuto].filter(p=>p).join(" ")}const S_=["animateOpacity","animationStateClasses","applyInlineTransitions","children","className","contentClassName","contentRef","delay","duration","easing","height","onHeightAnimationEnd","onHeightAnimationStart","style","disableDisplayNone"],j_=lo.forwardRef((o,b)=>{const{animateOpacity:p=!1,animationStateClasses:d={},applyInlineTransitions:E=!0,children:M,className:C="",contentClassName:L,delay:H=0,disableDisplayNone:Z=!1,duration:z=500,easing:y="ease",height:w,onHeightAnimationEnd:V,onHeightAnimationStart:B,style:X,contentRef:nn}=o,xn={...o};S_.forEach(R=>{delete xn[R]});const cn=U.useRef(w),ln=U.useRef(null),wn=U.useRef(void 0),Kn=U.useRef(void 0),Hn=U.useRef({...T_,...d}),un=typeof window<"u",_n=U.useRef(un&&window.matchMedia?window.matchMedia("(prefers-reduced-motion)").matches:!1),oe=_n.current?0:H,ce=_n.current?0:z;let ie=w,ge="visible";typeof w=="number"?(ie=w<0?0:w,ge="hidden"):_p(ie)&&(ie=w==="0%"?0:w,ge="hidden");const[Ke,Ee]=U.useState(ie),[le,q]=U.useState(ge),[dn,F]=U.useState(!1),[An,Tn]=U.useState(Tp(Hn.current,w));U.useEffect(()=>{Iu(ln.current,Ke,Z)},[]),U.useEffect(()=>{if(w!==cn.current&&ln.current){__(ln.current,cn.current),ln.current.style.overflow="hidden";const R=ln.current.offsetHeight;ln.current.style.overflow="";const sn=ce+oe;let P,fn,Mn="hidden",En;const en=cn.current==="auto";typeof w=="number"?(P=w<0?0:w,fn=P):_p(w)?(P=w==="0%"?0:w,fn=P):(P=R,fn="auto",Mn=void 0),en&&(fn=P,P=R);const hn=[Hn.current.animating,(cn.current==="auto"||w<cn.current)&&Hn.current.animatingUp,(w==="auto"||w>cn.current)&&Hn.current.animatingDown,fn===0&&Hn.current.animatingToHeightZero,fn==="auto"&&Hn.current.animatingToHeightAuto,typeof fn=="number"&&fn>0?Hn.current.animatingToHeightSpecific:null].filter(Wa=>Wa).join(" "),$e=Tp(Hn.current,fn);Ee(P),q("hidden"),F(!en),Tn(hn),clearTimeout(Kn.current),clearTimeout(wn.current),en?(En=!0,Kn.current=setTimeout(()=>{Ee(fn),q(Mn),F(En),B?.(fn),wn.current=setTimeout(()=>{F(!1),Tn($e),Iu(ln.current,fn,Z),V?.(fn)},sn)},50)):(B?.(P),Kn.current=setTimeout(()=>{Ee(fn),q(Mn),F(!1),Tn($e),w!=="auto"&&Iu(ln.current,P,Z),V?.(P)},sn))}return cn.current=ie,()=>{clearTimeout(Kn.current),clearTimeout(wn.current)}},[w]);const re={...X,height:Ke,overflow:le||X?.overflow};dn&&E&&(re.transition=`height ${ce}ms ${y} ${oe}ms`,X?.transition&&(re.transition=`${X.transition}, ${re.transition}`),re.WebkitTransition=re.transition);const pe={};p&&(pe.transition=`opacity ${ce}ms ${y} ${oe}ms`,pe.WebkitTransition=pe.transition,Ke===0&&(pe.opacity=0));const v=typeof xn["aria-hidden"]<"u"?xn["aria-hidden"]:w===0;return lo.createElement("div",{...xn,"aria-hidden":v,className:`${An} ${C}`,style:re,ref:b},lo.createElement("div",{className:L,style:pe,ref:R=>{ln.current=R,nn&&(nn.current=R)}},M))});function N_(){return r.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("polyline",{points:"6 9 12 15 18 9"})})}function Pe({title:o,children:b}){const[p,d]=U.useState(!1),E=p?"auto":0,M=we(no.button,p&&no.open),C=()=>d(!p);return r.jsxs("div",{className:no.accordion,children:[r.jsxs("button",{type:"button",className:M,onClick:C,"aria-expanded":p,children:[r.jsx("span",{children:o}),r.jsx(N_,{})]}),r.jsx(j_,{animateOpacity:!0,height:E,duration:400,children:r.jsx("div",{className:no.content,children:b})})]})}const w_="_linkWrapper_1p79w_1",E_="_link_1p79w_1",Sp={linkWrapper:w_,link:E_},O_="_tooltip_cgi4r_1",A_="_exit_cgi4r_15",k_="_text_cgi4r_28",Xu={tooltip:O_,exit:A_,text:k_};var M_=Mp();const C_=br(M_);function R_({anchorRef:o,content:b,showTooltip:p}){const d=U.useRef(null),[E,M]=U.useState(null),[C,L]=U.useState(!1),H=we(Xu.tooltip,!p&&Xu.exit),Z=()=>L(!1),z=()=>{p||L(!0)};return U.useEffect(()=>{if(!p||!o.current)return;const y=o.current.getBoundingClientRect(),w=d.current?.offsetHeight??0,V=y.left+window.scrollX,B=y.top+window.scrollY-w-4;M({top:B,left:V})},[p]),(p||!C)&&o.current&&C_.createPortal(r.jsx("div",{ref:d,className:H,style:E??{},onAnimationStart:Z,onAnimationEnd:z,children:r.jsx("span",{className:Xu.text,children:b})}),document.body)}const Qu="pd-nav-link";function J({href:o,description:b}){const p=U.useRef(null),{view:d,setView:E}=so(),[M,C]=U.useState(!1),[L,H]=U.useState(()=>window.location.hash);let Z;U.useEffect(()=>{const B=()=>H(window.location.hash);return window.addEventListener(Qu,B),window.addEventListener("hashchange",B),()=>{window.removeEventListener(Qu,B),window.removeEventListener("hashchange",B)}},[]);const z=d==="cheatsheet"&&L===o,y=B=>{B.preventDefault(),window.history.replaceState({},"",o),window.dispatchEvent(new Event(Qu)),clearTimeout(Z),C(!1),ed();const X=Lp()-2;d==="finder"?(E("cheatsheet"),jx(o,X)):nd(o,X)},w=()=>{Z=setTimeout(()=>{C(!0)},700)},V=()=>{clearTimeout(Z),C(!1)};return r.jsxs("div",{className:Sp.linkWrapper,children:[r.jsx("a",{ref:p,href:o,className:Sp.link,onClick:y,role:"button","aria-current":z?"location":void 0,"aria-description":b,onMouseEnter:w,onMouseLeave:V,children:b}),r.jsx(R_,{anchorRef:p,content:b,showTooltip:M})]})}function z_(){return r.jsxs(r.Fragment,{children:[r.jsxs(Pe,{title:"Big O",children:[r.jsx(J,{href:"#bigo-chart",description:"Time/Space Complexities"}),r.jsx(J,{href:"#bigo-data-structure-operations-table",description:"Data Structure Operations"}),r.jsx(J,{href:"#bigo-sorting-algorithms-table",description:"Sorting Algorithms"})]}),r.jsxs(Pe,{title:"Array",children:[r.jsx(J,{href:"#array-two-pointers-one-input",description:"two pointers: one input, opposite ends"}),r.jsx(J,{href:"#array-two-pointers-two-inputs",description:"two pointers: two inputs, exhaust both"}),r.jsx(J,{href:"#array-sliding-window",description:"sliding window"}),r.jsx(J,{href:"#array-prefix-sum",description:"prefix sum"}),r.jsx(J,{href:"#array-string-building",description:"efficient string building"})]}),r.jsxs(Pe,{title:"Hash Map",children:[r.jsx(J,{href:"#hashmap-find-number-of-subarrays",description:"find number of subarrays that fit an exact criteria"}),r.jsx(J,{href:"#hashmap-sliding-window",description:"sliding window"})]}),r.jsxs(Pe,{title:"Linked List",children:[r.jsx(J,{href:"#linkedlist-fast-and-slow-pointer",description:"fast and slow pointer"}),r.jsx(J,{href:"#linkedlist-reverse",description:"reverse linked list"})]}),r.jsxs(Pe,{title:"Stack",children:[r.jsx(J,{href:"#stack-monotonic-increasing",description:"monotonic increasing stack"}),r.jsx(J,{href:"#stack-monotonic-decreasing",description:"monotonic decreasing stack"})]}),r.jsxs(Pe,{title:"Binary Tree",children:[r.jsx(J,{href:"#tree-dfs-recursive",description:"DFS (recursive)"}),r.jsx(J,{href:"#tree-dfs-iterative",description:"DFS (iterative)"}),r.jsx(J,{href:"#tree-bfs",description:"BFS"})]}),r.jsxs(Pe,{title:"Graph",children:[r.jsx(J,{href:"#graph-dfs-recursive",description:"DFS (recursive)"}),r.jsx(J,{href:"#graph-dfs-iterative",description:"DFS (iterative)"}),r.jsx(J,{href:"#graph-bfs",description:"BFS"}),r.jsx(J,{href:"#graph-dijkstra",description:"Dijkstra (shortest path)"}),r.jsx(J,{href:"#graph-bellman-ford",description:"Bellman-Ford (shortest path)"}),r.jsx(J,{href:"#graph-kahn",description:"Kahn (topological sort)"}),r.jsx(J,{href:"#graph-kruskal",description:"Kruskal (mst)"}),r.jsx(J,{href:"#graph-prim",description:"Prim (mst)"})]}),r.jsx(Pe,{title:"Heap",children:r.jsx(J,{href:"#heap-find-top-k-elements",description:"find top k elements with heap"})}),r.jsxs(Pe,{title:"Binary Search",children:[r.jsx(J,{href:"#binarysearch-binary-search",description:"binary search"}),r.jsx(J,{href:"#binarysearch-duplicate-elements-left-insertion",description:"duplicate elements, left-most insertion point"}),r.jsx(J,{href:"#binarysearch-duplicate-elements-right-insertion",description:"duplicate elements, right-most insertion point"}),r.jsx(J,{href:"#binarysearch-greedy-minimum",description:"greedy (minimum)"}),r.jsx(J,{href:"#binarysearch-greedy-maximum",description:"greedy (maximum)"})]}),r.jsx(Pe,{title:"Backtracking",children:r.jsx(J,{href:"#backtracking-backtracking",description:"backtracking"})}),r.jsxs(Pe,{title:"Dynamic Programming",children:[r.jsx(J,{href:"#dp-top-down",description:"top-down DP"}),r.jsx(J,{href:"#dp-bottom-up",description:"bottom-up DP"}),r.jsx(J,{href:"#dp-kadane",description:"Kadane (max-sum subarray)"})]}),r.jsxs(Pe,{title:"Bit Manipulation",children:[r.jsx(J,{href:"#bitmanipulation-test-kth-bit",description:"test kth bit"}),r.jsx(J,{href:"#bitmanipulation-set-kth-bit",description:"set kth bit"}),r.jsx(J,{href:"#bitmanipulation-clear-kth-bit",description:"clear kth bit"}),r.jsx(J,{href:"#bitmanipulation-get-rightmost-bit",description:"get rightmost bit"}),r.jsx(J,{href:"#bitmanipulation-count-set-bits",description:"count set bits"}),r.jsx(J,{href:"#bitmanipulation-multiply-power-of-two",description:"multiply by 2^k"}),r.jsx(J,{href:"#bitmanipulation-divide-power-of-two",description:"divide by 2^k"}),r.jsx(J,{href:"#bitmanipulation-check-power-of-two",description:"check if number is power of 2"}),r.jsx(J,{href:"#bitmanipulation-swap-variables",description:"swap two variables"})]}),r.jsxs(Pe,{title:"Matrix",children:[r.jsx(J,{href:"#matrix-create-copy",description:"create / copy"}),r.jsx(J,{href:"#matrix-diagonals",description:"main / anti diagonals"}),r.jsx(J,{href:"#matrix-rotate-transpose",description:"rotate / transpose"})]}),r.jsxs(Pe,{title:"Data Structures",children:[r.jsx(J,{href:"#ds-array",description:"array"}),r.jsx(J,{href:"#ds-hash-map",description:"hashmap"}),r.jsx(J,{href:"#ds-linked-list",description:"linked list"}),r.jsx(J,{href:"#ds-doubly-linked-list",description:"doubly linked list"}),r.jsx(J,{href:"#ds-binary-tree",description:"binary tree"}),r.jsx(J,{href:"#ds-binary-search-tree",description:"binary search tree"}),r.jsx(J,{href:"#ds-graph",description:"graph"}),r.jsx(J,{href:"#ds-union-find",description:"union find"}),r.jsx(J,{href:"#ds-union-find-optimized",description:"union find optimized"}),r.jsx(J,{href:"#ds-trie",description:"trie"})]}),r.jsxs(Pe,{title:"Sorting Algorithms",children:[r.jsx(J,{href:"#sort-bubble",description:"bubble sort"}),r.jsx(J,{href:"#sort-selection",description:"selection sort"}),r.jsx(J,{href:"#sort-insertion",description:"insertion sort"}),r.jsx(J,{href:"#sort-shell",description:"shell sort"}),r.jsx(J,{href:"#sort-merge",description:"mergesort"}),r.jsx(J,{href:"#sort-quick",description:"quicksort"}),r.jsx(J,{href:"#sort-tim",description:"timsort"}),r.jsx(J,{href:"#sort-heap",description:"heapsort"}),r.jsx(J,{href:"#sort-counting",description:"counting sort"}),r.jsx(J,{href:"#sort-bucket",description:"bucket sort"}),r.jsx(J,{href:"#sort-radix",description:"radix sort"}),r.jsx(J,{href:"#sort-cube",description:"cubesort"}),r.jsx(J,{href:"#sort-bogo",description:"bogo sort"}),r.jsx(J,{href:"#sort-pancake",description:"pancake sort"}),r.jsx(J,{href:"#sort-sleep",description:"sleep sort"})]})]})}function D_({hamburgerButtonRef:o}){const b=U.useRef(null),{isSidebarOpen:p,showSidebar:d,hideSidebar:E}=$u(),{view:M}=so(),[C,L]=U.useState(()=>!p),H=we(yl.sidebar,!p&&yl.exit,!p&&C&&yl.hide),Z=B=>{B&&p?E():!B&&!p&&M==="cheatsheet"&&d()};U.useEffect(()=>{M==="finder"&&p&&E()},[M,p,E]);const z=p_({maxWidth:768},void 0,Z),y=()=>{z&&p&&E()},w=()=>L(!1),V=()=>{p||L(!0)};return qp([b,o],y),r.jsxs("nav",{ref:b,id:"reference-sections","aria-label":"Reference sections",className:H,onAnimationStart:w,onAnimationEndCapture:V,children:[r.jsx("h2",{className:yl.heading,children:"Reference"}),r.jsx("div",{className:yl.scrollContainer,children:r.jsx(z_,{})})]})}function L_(){const o=U.useRef(null);return r.jsxs("div",{id:"AppBar",children:[r.jsx(Lx,{forwardedRef:o}),r.jsx(D_,{hamburgerButtonRef:o})]})}const B_="_main_bsmjw_1",U_="_sidebarHidden_bsmjw_12",jp={main:B_,sidebarHidden:U_},H_="_finder_jt9b5_1",q_="_line_jt9b5_41",G_="_stops_jt9b5_51",Y_="_stop_jt9b5_51",V_="_dashedNext_jt9b5_98",K_="_dot_jt9b5_107",I_="_answered_jt9b5_123",X_="_current_jt9b5_127",Q_="_reached_jt9b5_128",J_="_end_jt9b5_132",Z_="_fault_jt9b5_137",F_="_stopInner_jt9b5_142",P_="_stopButton_jt9b5_143",W_="_cue_jt9b5_182",$_="_card_jt9b5_208",nT="_strip_jt9b5_223",eT="_stripTitle_jt9b5_241",tT="_stripValue_jt9b5_251",aT="_timer_jt9b5_257",iT="_cells_jt9b5_264",rT="_cell_jt9b5_264",lT="_colon_jt9b5_270",sT="_signCell_jt9b5_295",oT="_timerCaption_jt9b5_316",cT="_idle_jt9b5_326",uT="_ok_jt9b5_330",dT="_warn_jt9b5_334",fT="_over_jt9b5_341",hT="_body_jt9b5_353",gT="_question_jt9b5_367",pT="_resultName_jt9b5_368",mT="_lead_jt9b5_384",bT="_actions_jt9b5_396",vT="_primary_jt9b5_402",yT="_kbd_jt9b5_429",xT="_options_jt9b5_434",_T="_option_jt9b5_434",TT="_optionCue_jt9b5_480",ST="_footer_jt9b5_503",jT="_plain_jt9b5_515",NT="_fields_jt9b5_555",wT="_field_jt9b5_555",ET="_figure_jt9b5_586",OT="_okNote_jt9b5_594",AT="_overNote_jt9b5_598",kT="_summary_jt9b5_603",MT="_templates_jt9b5_614",CT="_note_jt9b5_623",RT="_docsLink_jt9b5_628",zT="_srOnly_jt9b5_639",DT="_turn_jt9b5_1",Q={finder:H_,line:q_,stops:G_,stop:Y_,dashedNext:V_,dot:K_,answered:I_,current:X_,reached:Q_,end:J_,fault:Z_,stopInner:F_,stopButton:P_,cue:W_,card:$_,strip:nT,stripTitle:eT,stripValue:tT,timer:aT,cells:iT,cell:rT,colon:lT,signCell:sT,timerCaption:oT,idle:cT,ok:uT,warn:dT,over:fT,body:hT,question:gT,resultName:pT,lead:mT,actions:bT,primary:vT,kbd:yT,options:xT,option:_T,optionCue:TT,footer:ST,plain:jT,fields:NT,field:wT,figure:ET,okNote:OT,overNote:AT,summary:kT,templates:MT,note:CT,docsLink:RT,srOnly:zT,turn:DT},xl={rootId:"q-input",nodes:{"q-input":{id:"q-input",question:"What does the problem give you?",options:[{cue:"an array or a string",next:"q-array"},{cue:"a linked list",next:"q-list"},{cue:"a binary tree or BST",next:"q-tree"},{cue:"a graph, grid, edges, or prerequisites",next:"q-graph"},{cue:"a data stream, or a design-a-class prompt",next:"q-design"},{cue:"an integer n, or bit tricks (single number, XOR)",next:"q-number"}]},"q-array":{id:"q-array",question:"What does it ask about the array or string?",options:[{cue:"a contiguous subarray or substring (window, sum)",next:"q-subarray"},{cue:"a pair or triplet, a palindrome, or an in-place edit",next:"q-pointers"},{cue:"searching a sorted array, or the min/max value that works",next:"q-search"},{cue:"the next greater or smaller element of each item",next:"q-mono"},{cue:"counts, duplicates, top K, brackets, words",next:"q-lookup"},{cue:"choices over elements (all combos, best or count of ways)",next:"q-choices"},{cue:"intervals (merge, overlaps, meeting rooms)",next:"sort-first"}]},"q-subarray":{id:"q-subarray",question:"What does it want from the subarray or substring?",options:[{cue:"sum or average of each size-K window",next:"sliding-window-fixed"},{cue:"longest or shortest window that meets a rule",next:"q-window-variable"},{cue:"count subarrays with exactly K distinct or odd",next:"sliding-window-exactly-k"},{cue:"a subarray sum equal to K, or range-sum queries",next:"q-prefix"},{cue:"maximum sum subarray of any length",next:"dp-kadane"},{cue:"max or min inside each size-K window",next:"monotonic-deque"}]},"q-window-variable":{id:"q-window-variable",question:"What does the window rule check?",options:[{cue:"sum or product vs a target (non-negative numbers)",next:"sliding-window-variable"},{cue:"characters (no repeats, at most K distinct, contains all of T)",next:"hashmap-sliding-window"}]},"q-prefix":{id:"q-prefix",question:"What kind of subarray-sum question?",options:[{cue:"many queries for the sum between index i and j",next:"prefix-sum-range"},{cue:"count or longest subarrays with sum K (negatives allowed)",next:"prefix-sum-hashmap"}]},"q-pointers":{id:"q-pointers",question:"What are the pointers doing?",options:[{cue:"ends moving inward (3Sum, palindrome, reverse, container with most water)",next:"two-pointers-converging"},{cue:"two arrays or strings (merge sorted, is subsequence)",next:"two-pointers-two-inputs"},{cue:"in-place rewrite (remove duplicates, move zeroes, partition)",next:"two-pointers-fast-slow-inplace"},{cue:"two numbers in an unsorted array (sum to X, return indices)",next:"hashmap-frequency"}]},"q-search":{id:"q-search",question:"What are you searching for?",options:[{cue:"find X, or its index, in a sorted or rotated array",next:"binary-search-classic"},{cue:"first position of X, or where to insert X",next:"binary-search-left-bound"},{cue:"last position of X, or count of elements <= X",next:"binary-search-right-bound"},{cue:"smallest capacity or speed that works (minimize the max)",next:"binary-search-answer-minimize"},{cue:"largest distance or size that works (maximize the min)",next:"binary-search-answer-maximize"}]},"q-mono":{id:"q-mono",question:"What do you need for each element?",options:[{cue:"next greater element (days until warmer, stock span)",next:"monotonic-stack-decreasing"},{cue:"next smaller element (largest rectangle in histogram)",next:"monotonic-stack-increasing"},{cue:"max or min inside each size-K window",next:"monotonic-deque"}]},"q-lookup":{id:"q-lookup",question:"What do you need to do with the data?",options:[{cue:"counting or grouping (occurrences, duplicates, anagrams)",next:"hashmap-frequency"},{cue:"top K (K largest, K most frequent, Kth smallest)",next:"heap-top-k"},{cue:"matching or nesting (parentheses, expressions, simplify path)",next:"stack-matching"},{cue:"prefix lookups over a word list (autocomplete)",next:"trie"},{cue:"building an output string (reverse words, compress, join)",next:"string-building"},{cue:"bit tricks (single number among pairs, XOR)",next:"bit-manipulation"}]},"q-choices":{id:"q-choices",question:"What are you trying to do with the choices?",options:[{cue:"generate every subset, permutation, or combination",next:"q-backtrack"},{cue:"best cost, or number of ways, over the choices",next:"q-dp"},{cue:"locally best move each step (jump game, gas station)",next:"greedy"}]},"q-backtrack":{id:"q-backtrack",question:"Can a partial choice be rejected early?",options:[{cue:"no, enumerate everything (subsets, permutations, combination sum)",next:"backtracking"},{cue:"yes, a rule prunes branches (N-Queens, Sudoku, word search)",next:"backtracking-pruning"}]},"q-dp":{id:"q-dp",question:"What do the choices look like?",options:[{cue:"reusable items (min coins, ways to make X)",next:"dp-unbounded-knapsack"},{cue:"each item used once (partition equal subset, target sum)",next:"dp-01-knapsack"},{cue:"one or two sequences (LIS, LCS, edit distance)",next:"dp-sequences"},{cue:"something else (house robber, unique paths, word break)",next:"q-dp-style"}]},"q-dp-style":{id:"q-dp-style",question:"Which way is the recurrence easier to write?",options:[{cue:"recurse from a state and cache (word break, decode ways)",next:"dp-top-down"},{cue:"fill dp[i] or dp[r][c] from earlier cells (house robber, unique paths)",next:"dp-bottom-up"}]},"q-list":{id:"q-list",question:"What do you do with the list?",options:[{cue:"cycle, middle node, or Nth node from the end",next:"linked-list-fast-slow"},{cue:"reverse the list, a sublist, or k-groups",next:"linked-list-reverse"},{cue:"merge two sorted lists",next:"linked-list-merge-sorted"},{cue:"merge K sorted lists",next:"heap-merge-k"}]},"q-tree":{id:"q-tree",question:"What does it ask about the tree?",options:[{cue:"level-by-level view (level order, right side view)",next:"tree-bfs"},{cue:"combine subtree answers (depth, path sum, LCA, validate BST, serialize)",next:"tree-dfs-recursive"},{cue:"paused or non-recursive traversal (BST iterator, kth smallest)",next:"tree-dfs-iterative"}]},"q-graph":{id:"q-graph",question:"What does it ask about the graph or grid?",options:[{cue:"explore everything (islands, components, all paths)",next:"graph-dfs"},{cue:"shortest path or minimum steps",next:"q-shortest"},{cue:"ordering with prerequisites (course schedule, directed cycle)",next:"topological-sort"},{cue:"same-group checks (redundant connection, undirected cycle)",next:"union-find"},{cue:"minimum cost to connect all points",next:"mst"},{cue:"grid moving right or down (count paths, min path sum)",next:"q-dp"}]},"q-shortest":{id:"q-shortest",question:"What kind of shortest path?",options:[{cue:"unweighted, from one start (word ladder, maze)",next:"graph-bfs-shortest-path"},{cue:"spreads from many sources at once (rotting oranges, 01 matrix)",next:"multi-source-bfs"},{cue:"weighted edges (network delay, cheapest flights)",next:"shortest-path-weighted"}]},"q-design":{id:"q-design",question:"What must the structure support?",options:[{cue:"median of a data stream",next:"two-heaps"},{cue:"Kth largest element in a stream",next:"heap-top-k"},{cue:"moving average, recent calls, circular queue",next:"queue-design"},{cue:"implement Trie, add and search words",next:"trie"},{cue:"min stack, undo, browser history",next:"stack-matching"}]},"q-number":{id:"q-number",question:"What does it ask about n?",options:[{cue:"bit tricks (power of two, set bits, single number, XOR)",next:"bit-manipulation"},{cue:"nth term from earlier terms (climb n stairs)",next:"q-dp"},{cue:"integer square root (largest x with x*x <= n)",next:"binary-search-answer-maximize"},{cue:"guess the number in 1..n",next:"binary-search-classic"}]}},leaves:{"two-pointers-converging":{id:"two-pointers-converging",name:"Two pointers, converging",pattern:"Two Pointers",summary:"Sorted array pairs/triplets, palindromes, in-place reversal. Start at both ends and move the pointer whose side cannot be part of the answer.",docsUrl:"https://resources.devweekends.com/dsa-patterns/two-pointers",templateIds:["two-pointers-one-input"]},"two-pointers-two-inputs":{id:"two-pointers-two-inputs",name:"Two pointers, two inputs",pattern:"Two Pointers",summary:"Merge sorted arrays, subsequence checks. One pointer per input; advance the one whose element is consumed.",docsUrl:"https://resources.devweekends.com/dsa-patterns/two-pointers",templateIds:["two-pointers-two-inputs"]},"two-pointers-fast-slow-inplace":{id:"two-pointers-fast-slow-inplace",name:"Two pointers, read/write in place",pattern:"Two Pointers",summary:"Remove duplicates, move zeroes, partition in O(1) space. A fast pointer reads every element; a slow pointer marks where the next kept element is written.",docsUrl:"https://resources.devweekends.com/dsa-patterns/two-pointers",templateIds:[]},"sliding-window-fixed":{id:"sliding-window-fixed",name:"Sliding window, fixed size",pattern:"Sliding Window",summary:"Every window of exactly K elements. Add the entering element and remove the leaving one so each step is O(1).",docsUrl:"https://resources.devweekends.com/dsa-patterns/sliding-window",templateIds:["sliding-window"]},"sliding-window-variable":{id:"sliding-window-variable",name:"Sliding window, variable size",pattern:"Sliding Window",summary:"Longest/shortest subarray meeting a sum-style rule with non-negative values. Expand right, shrink left while the window is invalid (or while valid, for shortest).",docsUrl:"https://resources.devweekends.com/dsa-patterns/sliding-window",templateIds:["sliding-window"]},"sliding-window-exactly-k":{id:"sliding-window-exactly-k",name:"Sliding window, exactly K",pattern:"Sliding Window",summary:'"Exactly K" is not monotonic, so count it as atMost(K) - atMost(K-1), each a standard variable window.',docsUrl:"https://resources.devweekends.com/dsa-patterns/sliding-window",templateIds:[]},"prefix-sum-range":{id:"prefix-sum-range",name:"Prefix sum, range queries",pattern:"Prefix Sum",summary:"Many sum-between-i-and-j queries on a fixed array. Precompute prefix[i]; each query is prefix[j+1] - prefix[i] in O(1).",docsUrl:"https://resources.devweekends.com/dsa-patterns/prefix-sum",templateIds:["prefix-sum"]},"prefix-sum-hashmap":{id:"prefix-sum-hashmap",name:"Prefix sum, hash map",pattern:"Prefix Sum",summary:"Count or find subarrays with sum K when negatives break sliding window. Store prefix-sum counts (seeded with {0: 1}) and look up prefix - K.",docsUrl:"https://resources.devweekends.com/dsa-patterns/prefix-sum",templateIds:["hashmap-find-number-of-subarrays"]},"string-building":{id:"string-building",name:"String building",pattern:"String",summary:"Producing a new string piece by piece. Append to a list or builder and join once at the end; repeated concatenation is O(n^2).",docsUrl:"https://resources.devweekends.com/dsa-patterns/stack",templateIds:["string-building"]},"binary-search-classic":{id:"binary-search-classic",name:"Binary search, find target",pattern:"Binary Search",summary:"Find an exact value in a sorted (or rotated) space. Halve the range each step by comparing the middle with the target.",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",templateIds:["binary-search"]},"binary-search-left-bound":{id:"binary-search-left-bound",name:"Binary search, left bound",pattern:"Binary Search",summary:"First position of X or its insertion point. Keep searching left when nums[mid] >= X to land on the leftmost index.",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",templateIds:["binary-search-left-insertion"]},"binary-search-right-bound":{id:"binary-search-right-bound",name:"Binary search, right bound",pattern:"Binary Search",summary:"Last position of X, or count of elements <= X. Search for the insertion point after every copy of X (go right when nums[mid] <= X).",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",templateIds:["binary-search-right-insertion"]},"binary-search-answer-minimize":{id:"binary-search-answer-minimize",name:"Binary search on answer, minimum",pattern:"Binary Search",summary:"Smallest value that still works (min capacity, min speed, minimize the max). Binary search the answer range with a greedy feasibility check.",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",templateIds:["binary-search-greedy-minimum"]},"binary-search-answer-maximize":{id:"binary-search-answer-maximize",name:"Binary search on answer, maximum",pattern:"Binary Search",summary:"Largest value that still works (maximize the minimum distance). Binary search the answer range, keeping the best feasible value.",docsUrl:"https://resources.devweekends.com/dsa-patterns/binary-search",templateIds:["binary-search-greedy-maximum"]},"sort-first":{id:"sort-first",name:"Sort first, then scan",pattern:"Sorting",summary:"Intervals, meetings, or anything easier in order. Sort (often by start or end), then apply a linear scan, greedy, heap, or two pointers.",docsUrl:"https://resources.devweekends.com/dsa-patterns/sorting",templateIds:[]},"hashmap-frequency":{id:"hashmap-frequency",name:"Hash map, lookup and frequency",pattern:"Hash Map",summary:"Counting, duplicates, anagrams, grouping, or unsorted two-sum. Store counts or complements so each lookup is O(1).",docsUrl:"https://resources.devweekends.com/dsa-patterns/hashmap",templateIds:[]},"hashmap-sliding-window":{id:"hashmap-sliding-window",name:"Sliding window, hash map",pattern:"Sliding Window",summary:"Substring with no repeats, at most K distinct, or containing all of T. A frequency map tracks the window so you know when to shrink.",docsUrl:"https://resources.devweekends.com/dsa-patterns/sliding-window",templateIds:["hashmap-sliding-window"]},"stack-matching":{id:"stack-matching",name:"Stack, matching and undo",pattern:"Stack",summary:"Brackets, expression evaluation, path simplification, undo. Push openings or state; pop when the matching close or reversal arrives.",docsUrl:"https://resources.devweekends.com/dsa-patterns/stack",templateIds:[]},"monotonic-stack-increasing":{id:"monotonic-stack-increasing",name:"Monotonic stack, increasing",pattern:"Monotonic Stack",summary:"Next/previous smaller element, largest rectangle in histogram. Keep the stack increasing; a smaller arrival pops and resolves the taller entries.",docsUrl:"https://resources.devweekends.com/dsa-patterns/monotonic-stack",templateIds:["stack-monotonic-increasing"]},"monotonic-stack-decreasing":{id:"monotonic-stack-decreasing",name:"Monotonic stack, decreasing",pattern:"Monotonic Stack",summary:"Next/previous greater element, daily temperatures, stock span. Keep the stack decreasing; a larger arrival pops and resolves the smaller entries.",docsUrl:"https://resources.devweekends.com/dsa-patterns/monotonic-stack",templateIds:["stack-monotonic-decreasing"]},"monotonic-deque":{id:"monotonic-deque",name:"Monotonic deque",pattern:"Monotonic Deque",summary:"Max or min of every window of size K. Keep a deque of indices in monotonic order; drop expired indices from the front.",docsUrl:"https://resources.devweekends.com/dsa-patterns/queue",templateIds:[]},"queue-design":{id:"queue-design",name:"Queue design",pattern:"Queue",summary:"Moving average, recent calls, rate limiting, circular queue. FIFO of values or timestamps, evicting from the front as they expire.",docsUrl:"https://resources.devweekends.com/dsa-patterns/queue",templateIds:[]},"heap-top-k":{id:"heap-top-k",name:"Heap, top K",pattern:"Heap",summary:"K largest, K most frequent, Kth element (also in a stream). Keep a min-heap of size K, popping the smallest when it overflows.",docsUrl:"https://resources.devweekends.com/dsa-patterns/heap",templateIds:["heap-find-top-k-elements"]},"heap-merge-k":{id:"heap-merge-k",name:"Heap, merge K sorted",pattern:"Heap",summary:"Merge K sorted lists or streams. Push each head into a min-heap; pop the smallest and push its successor.",docsUrl:"https://resources.devweekends.com/dsa-patterns/heap",templateIds:[]},"two-heaps":{id:"two-heaps",name:"Two heaps",pattern:"Heap",summary:"Running median of a stream. A max-heap holds the lower half and a min-heap the upper half, rebalanced so sizes differ by at most one.",docsUrl:"https://resources.devweekends.com/dsa-patterns/heap",templateIds:[]},trie:{id:"trie",name:"Trie",pattern:"Trie",summary:"Prefix matching, autocomplete, word dictionaries. Store words character by character in a tree so prefix lookups cost O(length).",docsUrl:"https://resources.devweekends.com/dsa-patterns/trie",templateIds:["ds-trie"]},"linked-list-fast-slow":{id:"linked-list-fast-slow",name:"Linked list, fast and slow pointers",pattern:"Linked List",summary:"Cycle detection, middle node, Nth from end. Move one pointer twice as fast (Floyd's) or give one a head start.",docsUrl:"https://resources.devweekends.com/dsa-patterns/linked-list",templateIds:["linkedlist-fast-and-slow-pointer"]},"linked-list-reverse":{id:"linked-list-reverse",name:"Linked list, reverse",pattern:"Linked List",summary:"Reverse a whole list, a sublist, or k-groups. Walk with prev/curr/next and flip each pointer.",docsUrl:"https://resources.devweekends.com/dsa-patterns/linked-list",templateIds:["linkedlist-reverse"]},"linked-list-merge-sorted":{id:"linked-list-merge-sorted",name:"Linked list, merge sorted",pattern:"Linked List",summary:"Merge two sorted lists. Use a dummy head and always attach the smaller of the two current nodes.",docsUrl:"https://resources.devweekends.com/dsa-patterns/linked-list",templateIds:[]},"tree-dfs-recursive":{id:"tree-dfs-recursive",name:"Tree DFS, recursive",pattern:"DFS",summary:"Depth, path sum, LCA, validate BST, serialize. Recurse into children and combine their answers (pre-, in-, or post-order).",docsUrl:"https://resources.devweekends.com/dsa-patterns/dfs",templateIds:["tree-dfs-recursive"]},"tree-dfs-iterative":{id:"tree-dfs-iterative",name:"Tree DFS, iterative",pattern:"DFS",summary:"BST iterator, kth smallest, or deep trees. Replace recursion with an explicit stack, often for an in-order walk you can pause.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dfs",templateIds:["tree-dfs-iterative"]},"tree-bfs":{id:"tree-bfs",name:"Tree BFS, level order",pattern:"BFS",summary:"Level order, right side view, per-level values. Process the queue one level at a time using its size as a snapshot.",docsUrl:"https://resources.devweekends.com/dsa-patterns/bfs",templateIds:["tree-bfs"]},"graph-dfs":{id:"graph-dfs",name:"Graph DFS",pattern:"DFS",summary:"Islands, connected components, all paths, clone graph. Explore fully from each unvisited node, marking visited.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dfs",templateIds:["graph-dfs-recursive","graph-dfs-iterative"]},"graph-bfs-shortest-path":{id:"graph-bfs-shortest-path",name:"Graph BFS, shortest path",pattern:"BFS",summary:"Fewest steps in an unweighted graph or grid. BFS from the start; the level at which you reach the target is the distance.",docsUrl:"https://resources.devweekends.com/dsa-patterns/bfs",templateIds:["graph-bfs"]},"multi-source-bfs":{id:"multi-source-bfs",name:"Multi-source BFS",pattern:"BFS",summary:"Something spreads from many cells at once (rotting oranges, 01 matrix). Enqueue every source first, then run one BFS.",docsUrl:"https://resources.devweekends.com/dsa-patterns/bfs",templateIds:[]},"shortest-path-weighted":{id:"shortest-path-weighted",name:"Shortest path, weighted",pattern:"Graph Algorithms",summary:"Shortest path with edge weights. Dijkstra (min-heap) for non-negative weights; Bellman-Ford for negatives or at most K edges.",docsUrl:"https://resources.devweekends.com/dsa-patterns/graph-algorithms",templateIds:["graph-dijkstra","graph-bellman-ford"]},"topological-sort":{id:"topological-sort",name:"Topological sort",pattern:"Graph Algorithms",summary:"Ordering with dependencies, or detecting that none exists. Kahn's algorithm: repeatedly take nodes with in-degree 0.",docsUrl:"https://resources.devweekends.com/dsa-patterns/graph-algorithms",templateIds:["graph-kahn"]},"union-find":{id:"union-find",name:"Union-find",pattern:"Union Find",summary:"Are two items in the same group, merging groups, redundant edges (undirected cycles). Keep a parent array with path compression and union by rank.",docsUrl:"https://resources.devweekends.com/dsa-patterns/union-find",templateIds:["ds-union-find","ds-union-find-optimized"]},mst:{id:"mst",name:"Minimum spanning tree",pattern:"Graph Algorithms",summary:"Minimum cost to connect all points. Kruskal (sort edges + Union Find) or Prim (grow from a node with a min-heap).",docsUrl:"https://resources.devweekends.com/dsa-patterns/graph-algorithms",templateIds:["graph-kruskal","graph-prim"]},backtracking:{id:"backtracking",name:"Backtracking",pattern:"Backtracking",summary:"Generate all subsets, permutations, or combinations. Choose, recurse, un-choose, recording each complete candidate.",docsUrl:"https://resources.devweekends.com/dsa-patterns/backtracking",templateIds:["backtracking"]},"backtracking-pruning":{id:"backtracking-pruning",name:"Backtracking, pruning",pattern:"Backtracking",summary:"Constraint puzzles like N-Queens, Sudoku, word search. Backtrack, but reject a partial choice as soon as it breaks a constraint.",docsUrl:"https://resources.devweekends.com/dsa-patterns/backtracking",templateIds:[]},"dp-top-down":{id:"dp-top-down",name:"DP, top-down",pattern:"Dynamic Programming",summary:"Overlapping subproblems where the recursion is the natural statement. Write the recursive choice, then cache results by state.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",templateIds:["dp-top-down"]},"dp-bottom-up":{id:"dp-bottom-up",name:"DP, bottom-up",pattern:"Dynamic Programming",summary:"Each state depends on earlier indices or neighbor cells. Fill a dp table from the base cases forward.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",templateIds:["dp-bottom-up"]},"dp-kadane":{id:"dp-kadane",name:"Kadane's algorithm",pattern:"Dynamic Programming",summary:"Maximum sum subarray. At each element, either extend the running sum or restart from it; track the best seen.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",templateIds:["dp-kadane"]},"dp-unbounded-knapsack":{id:"dp-unbounded-knapsack",name:"Unbounded knapsack",pattern:"Dynamic Programming",summary:"Items reusable: min coins, ways to make change, climb stairs. 1D dp over the target, looping capacity forward.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",templateIds:[]},"dp-01-knapsack":{id:"dp-01-knapsack",name:"0/1 knapsack",pattern:"Dynamic Programming",summary:"Each item used at most once: partition equal subset, target sum. dp over capacity, looping capacity backwards per item.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",templateIds:[]},"dp-sequences":{id:"dp-sequences",name:"DP, sequences",pattern:"Dynamic Programming",summary:"Longest increasing or common subsequence, edit distance. dp[i] over one sequence or dp[i][j] over prefixes of two.",docsUrl:"https://resources.devweekends.com/dsa-patterns/dynamic-programming",templateIds:[]},greedy:{id:"greedy",name:"Greedy",pattern:"Greedy",summary:"Jump game, gas station, partition labels. Take the locally best move in one pass when an exchange argument shows it is never worse.",docsUrl:"https://resources.devweekends.com/dsa-patterns/greedy",templateIds:[]},"bit-manipulation":{id:"bit-manipulation",name:"Bit manipulation",pattern:"Bit Manipulation",summary:"Single number among pairs, set bits, powers of two. Use XOR, masks, and shifts to work on bits directly in O(1) space.",docsUrl:"https://resources.devweekends.com/dsa-patterns/bit-manipulation",templateIds:["bitmanipulation-test-kth-bit","bitmanipulation-set-kth-bit","bitmanipulation-clear-kth-bit","bitmanipulation-toggle-kth-bit","bitmanipulation-get-rightmost-bit","bitmanipulation-count-set-bits","bitmanipulation-multiply-power-of-two","bitmanipulation-divide-power-of-two","bitmanipulation-check-power-of-two","bitmanipulation-swap-variables"]}}},Gp=`def backtrack(curr, OTHER_ARGUMENTS...):
    if (BASE_CASE):
        # TODO: modify answer
        return

    ans = 0

    for (ITERATE_OVER_INPUT):
        # TODO: modify current state
        ans += backtrack(curr, OTHER_ARGUMENTS...)
        # TODO: undo modification of current state

    return ans
`,Yp=`const backtrack = (curr, OTHER_ARGUMENTS...) => {
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
`,Vp=`public int backtrack(STATE curr, OTHER_ARGUMENTS...) {
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
`,Kp=`int backtrack(STATE curr, OTHER_ARGUMENTS...) {
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
`,Ip=`def fn(arr, target):
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
`,Xp=`const fn = (arr, target) => {
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
`,Qp=`public int fn(int[] arr, int target) {
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
`,Jp=`#include <vector>

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
`,Zp=`def fn(arr):
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
`,Fp=`const fn = (arr) => {
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
`,Pp=`public int fn(int[] arr) {
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
`,Wp=`#include <vector>

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
`,$p=`def fn(arr):
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
`,nm=`const fn = (arr) => {
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
`,em=`public int fn(int[] arr) {
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
`,tm=`#include <vector>

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
`,am=`def fn(arr, target):
    left = 0
    right = len(arr)

    while left < right:
        mid = (left + right) // 2

        if arr[mid] >= target:
            right = mid
        else:
            left = mid + 1

    return left
`,im=`const fn = (arr, target) => {
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
`,rm=`public int fn(int[] arr, int target) {
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
`,lm=`#include <vector>

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
`,sm=`def fn(arr, target):
    left = 0
    right = len(arr)

    while left < right:
        mid = (left + right) // 2

        if arr[mid] > target:
            right = mid
        else:
            left = mid + 1

    return left
`,om=`const fn = (arr, target) => {
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
`,cm=`public int fn(int[] arr, int target) {
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
`,um=`#include <vector>

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
`,dm=`def is_power_of_two(num: int) -> bool:
    return (num & (num - 1)) == 0
`,fm=`const isPowerOfTwo = (num) => {
    return (num & (num - 1)) === 0
}
`,hm=`public boolean isPowerOfTwo(int num) {
    return (num & (num - 1)) == 0;
}
`,gm=`bool is_power_of_two(int num) {
    return (num & (num - 1)) == 0;
}
`,pm=`def clear_kth_bit(num: int, k: int) -> int:
    return num & ~(1 << k)
`,mm=`const clearKthBit = (num, k) => {
    return num & ~(1 << k)
}
`,bm=`public int clearKthBit(int num, int k) {
    return num & ~(1 << k);
}
`,vm=`int clear_kth_bit(int num, int k) {
    return num & ~(1 << k);
}
`,ym=`def count_set_bits(num: int) -> int:
    return bin(num).count('1')
`,xm=`const countSetBits = (num) => {
    return num.toString(2).split('1').length - 1
}
`,_m=`public int countSetBits(int num) {
    int count = 0;

    while (num > 0) {
        count += num & 1;
        num >>= 1;
    }

    return count;
}
`,Tm=`int count_set_bits(int num) {
    int count = 0;

    while (num) {
        count += num & 1;
        num >>= 1;
    }

    return count;
}
`,Sm=`def divide_by_power_of_two(num: int, k: int) -> int:
    return num >> k
`,jm=`const divideByPowerOfTwo = (num, k) => {
    return num >> k;
}
`,Nm=`public int divideByPowerOfTwo(int num, int k) {
    return num >> k;
}
`,wm=`int divide_by_power_of_two(int num, int k) {
    return num >> k;
}
`,Em=`def get_rightmost_set_bit(num: int) -> int:
    return num & -num
`,Om=`const getRightmostSetBit = (num) => {
    return num & -num
}
`,Am=`public int getRightmostSetBit(int num) {
    return num & -num;
}
`,km=`int get_rightmost_set_bit(int num) {
    return num & -num;
}
`,Mm=`def multiply_by_power_of_two(num: int, k: int) -> int:
    return num << k
`,Cm=`const multiplyByPowerOfTwo = (num, k) => {
    return num << k
}
`,Rm=`public int multiplyByPowerOfTwo(int num, int k) {
    return num << k;
}
`,zm=`int multiply_by_power_of_two(int num, int k) {
    return num << k;
}
`,Dm=`def set_kth_bit(num: int, k: int) -> int:
    return num | (1 << k)
`,Lm=`const setKthBit = (num, k) => {
    return num | (1 << k)
}
`,Bm=`public int setKthBit(int num, int k) {
    return num | (1 << k);
}
`,Um=`int set_kth_bit(int num, int k) {
    return num | (1 << k);
}
`,Hm=`def swap_variables(num1: int, num2: int) -> tuple:
    num1 ^= num2
    num2 ^= num1
    num1 ^= num2
    return num1, num2
`,qm=`const swapVariables = (num1, num2) => {
    num1 ^= num2
    num2 ^= num1
    num1 ^= num2
    return [num1, num2]
}
`,Gm=`public int[] swapVariables(int num1, int num2) {
    num1 ^= num2;
    num2 ^= num1;
    num1 ^= num2;
    return new int[] { num1, num2 };
}
`,Ym=`#include <tuple>

using namespace std;


tuple<int, int> swap_variables(int num1, int num2) {
    num1 ^= num2;
    num2 ^= num1;
    num1 ^= num2;
    return std::make_tuple(num1, num2);
}
`,Vm=`def test_kth_bit(num: int, k: int) -> bool:
    return num & (1 << k) != 0
`,Km=`const testKthBit = (num, k) => {
    return num & (1 << k) !== 0
}
`,Im=`public boolean testKthBit(int num, int k) {
    return (num & (1 << k)) != 0;
}
`,Xm=`bool test_kth_bit(int num, int k) {
    return (num & (1 << k)) != 0;
}
`,Qm=`def toggle_kth_bit(num: int, k: int) -> int:
    return num ^ (1 << k)
`,Jm=`const toggleKthBit = (num, k) => {
    return num ^ (1 << k)
}
`,Zm=`public int toggleKthBit(int num, int k) {
    return num ^ (1 << k);
}
`,Fm=`int toggle_kth_bit(int num, int k) {
    return num ^ (1 << k);
}
`,Pm=`def fn(arr):
    if BASE_CASE:
        return 0

    dp = [BASE_CASE] * (STATE_FOR_WHOLE_INPUT + 1)

    for STATE in range(SMALLEST_SUBPROBLEM, STATE_FOR_WHOLE_INPUT + 1):
        if BASE_CASE:
            dp[STATE] = BASE_CASE
        else:
            dp[STATE] = RECURRENCE_RELATION(STATE)

    return dp[STATE_FOR_WHOLE_INPUT]
`,Wm=`const fn = (arr) => {
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
`,$m=`import java.util.Arrays;


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
`,n0=`#include <vector>
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
`,e0=`def kadane(arr: list[int]) -> int:
    curr_sub = max_sub = arr[0]

    for num in arr[1:]:
        curr_sub = max(curr_sub + num, num)
        max_sub = max(max_sub, curr_sub)

    return max_sub
`,t0=`const kadane = (arr) => {
    let currSub = arr[0]
    let maxSub = arr[0]

    for (let i = 1; i < arr.length; i++) {
        currSub = Math.max(currSub + arr[i], arr[i])
        maxSub = Math.max(maxSub, currSub)
    }

    return maxSub
}
`,a0=`public int kadane(int[] arr) {
    int currSub = arr[0];
    int maxSub = arr[0];

    for (int i = 1; i < arr.length; i++) {
        currSub = Math.max(currSub + arr[i], arr[i]);
        maxSub = Math.max(maxSub, currSub);
    }

    return maxSub;
}
`,i0=`#include <vector>
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
`,r0=`def fn(arr):
    @cache
    def dp(STATE):
        if BASE_CASE:
            return 0
        return RECURRENCE_RELATION(STATE)

    return dp(STATE_FOR_WHOLE_INPUT)
`,l0=`const fn = (arr) => {
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
`,s0=`import java.util.HashMap;
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
`,o0=`#include <unordered_map>

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
`,c0=`from typing import Any


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
`,u0=`class HashMap {
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
`,d0=`public class HashMap {
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
`,f0=`#include <iostream>
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
`,h0=`class TrieNode:
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
`,g0=`class TrieNode {
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
`,p0=`import java.util.ArrayList;
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
`,m0=`#include <iostream>
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
`,b0=`class UnionFind:
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
`,v0=`class UnionFind {
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
`,y0=`import java.util.ArrayList;
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
`,x0=`#include <iostream>
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
`,_0=`class UnionFind:
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
`,T0=`class UnionFind {
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
`,S0=`import java.util.ArrayList;
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
`,j0=`#include <iostream>
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
`,N0=`def bellman_ford(n: int, edges: list[tuple[int, int, int]], source: int) -> list[int]:
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
`,w0=`const bellmanFord = (n, edges, source) => {
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
`,E0=`import java.util.Arrays;
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
`,O0=`#include <vector>
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
`,A0=`from collections import deque


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
`,k0=`const fn = (graph) => {
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
`,M0=`import java.util.ArrayList;
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
`,C0=`#include <queue>
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
`,R0=`def fn(graph):
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
`,z0=`const fn = (graph) => {
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
`,D0=`import java.util.Stack;
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
`,L0=`#include <stack>
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
`,B0=`def fn(graph):
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
`,U0=`const fn = (graph) => {
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
`,H0=`import java.util.HashSet;
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
`,q0=`#include <unordered_set>
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
`,G0=`from heapq import heappop, heappush


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
`,Y0=`/*
    JavaScript lacks built-in support for heaps.
    Try using a language that doesn't hate you, like Python.
*/
`,V0=`import java.util.Arrays;
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
`,K0=`#include <limits>
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
`,I0=`from collections import defaultdict, deque


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
`,X0=`const kahnTopologicalSort = (graph) => {
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
`,Q0=`import java.util.ArrayList;
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
`,J0=`#include <vector>
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
`,Z0=`def kruskal_mst(n: int, edges: list[tuple[int, int, int]]) -> list[tuple[int, int, int]]:
    mst = []
    uf = UnionFind(n)
    edges.sort()

    for w, u, v in edges:
        if not uf.connected(u, v):
            uf.union(u, v)
            mst.append((w, u, v))

    return mst
`,F0=`const kruskalMst = (n, edges) => {
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
`,P0=`import java.util.ArrayList;
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
`,W0=`#include <vector>
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
`,$0=`from heapq import heappop


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
`,nb=`/*
    JavaScript lacks built-in support for heaps.
    Try using a language that doesn't hate you, like Python.
*/
`,eb=`import java.util.ArrayList;
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
`,tb=`#include <vector>
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
`,ab=`from collections import defaultdict


def fn(arr, k):
    counts = defaultdict(int)
    counts[0] = 1
    ans = curr = 0

    for num in arr:
        # TODO: logic to change curr
        ans += counts[curr - k]
        counts[curr] += 1

    return ans
`,ib=`const fn = (arr, k) => {
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
`,rb=`import java.util.HashMap;
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
`,lb=`#include <vector>
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
`,sb=`def fn(arr):
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
`,ob=`function fn(arr) {
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
`,cb=`import java.util.HashSet;
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
`,ub=`#include <vector>
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
`,db=`from heapq import heappop, heappush


def fn(arr, k):
    heap = []

    for num in arr:
        # TODO: logic to push onto heap according to problem's criteria
        heappush(heap, (CRITERIA, num))

        if len(heap) > k:
            heappop(heap)

    return [num for num in heap]
`,fb=`/*
    JavaScript lacks built-in support for heaps.
    Try using a language that doesn't hate you, like Python.
*/
`,hb=`import java.util.PriorityQueue;


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
`,gb=`#include <vector>
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
`,pb=`def fn(head):
    slow = head
    fast = head
    ans = 0

    while fast and fast.next:
        # TODO: logic
        slow = slow.next
        fast = fast.next.next

    return ans
`,mb=`const fn = (head) => {
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
`,bb=`public int fn(ListNode head) {
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
`,vb=`int fn(ListNode* head) {
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
`,yb=`def fn(head):
    prev = None
    curr = head

    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt

    return prev
`,xb=`const fn = (head) => {
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
`,_b=`public ListNode fn(ListNode head) {
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
`,Tb=`ListNode* fn(ListNode* head) {
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
`,Sb=`def fn(arr):
    n = len(arr)
    prefix = [arr[0]]

    for i in range(1, n):
        prefix.append(prefix[-1] + arr[i])

    return prefix
`,jb=`const fn = (arr) => {
    let prefix = [arr[0]]

    for (let i = 1; i < arr.length; i++) {
        prefix.push(prefix[prefix.length - 1] + arr[i])
    }

    return prefix
}
`,Nb=`import java.util.ArrayList;
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
`,wb=`#include <iostream>
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
`,Eb=`def fn(arr):
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
`,Ob=`const fn = (arr) => {
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
`,Ab=`public int fn(int[] arr) {
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
`,kb=`#include <vector>

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
`,Mb=`def fn(arr):
    stack = []
    ans = 0

    for num in arr:
        while stack and stack[-1] < num:
            # TODO: logic
            stack.pop()
        stack.append(num)

    return ans
`,Cb=`const fn = (arr) => {
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
`,Rb=`import java.util.Stack;


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
`,zb=`#include <stack>
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
`,Db=`def fn(arr):
    stack = []
    ans = 0

    for num in arr:
        while stack and stack[-1] > num:
            # TODO: logic
            stack.pop()
        stack.append(num)

    return ans
`,Lb=`const fn = (arr) => {
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
`,Bb=`import java.util.Stack;


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
`,Ub=`#include <stack>
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
`,Hb=`def fn(strs: list[str]):
    ans = []

    for char in strs:
        ans.append(char)

    return ''.join(ans)
`,qb=`const fn = (arr) => {
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
`,Gb=`public String fn(char[] strs) {
    StringBuilder sb = new StringBuilder();

    for (char c: strs) {
        sb.append(c);
    }

    return sb.toString();
}
`,Yb=`string fn(vector<char>& arr) {
    return string(arr.begin(), arr.end())
}
`,Vb=`from collections import deque


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
`,Kb=`const fn = (root) => {
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
`,Ib=`import java.util.LinkedList;
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
`,Xb=`#include <queue>

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
`,Qb=`def dfs(root):
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
`,Jb=`const dfs = (root) => {
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
`,Zb=`import java.util.Stack;


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
`,Fb=`#include <stack>

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
`,Pb=`def dfs(root):
    if not root:
        return

    ans = 0

    # TODO: logic
    dfs(root.left)
    dfs(root.right)

    return ans
`,Wb=`const dfs = (root) => {
    if (!root) {
        return
    }

    let ans = 0

    // TODO: logic
    dfs(root.left)
    dfs(root.right)

    return ans
}
`,$b=`public int dfs(TreeNode root) {
    if (root == null) {
        return 0;
    }

    int ans = 0;

    // TODO: logic
    ans += dfs(root.left);
    ans += dfs(root.right);

    return ans;
}
`,nv=`int dfs(TreeNode* root) {
    if (root == nullptr) {
        return 0;
    }

    int ans = 0;

    // TODO: logic
    dfs(root.left);
    dfs(root.right);

    return ans;
}
`,ev=`def fn(arr):
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
`,tv=`const fn = (arr) => {
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
`,av=`public int fn(int[] arr) {
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
`,iv=`#include <vector>

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
`,rv=`def fn(arr1, arr2):
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
`,lv=`let fn = (arr1, arr2) => {
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
`,sv=`public int fn(int[] arr1, int[] arr2) {
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
`,ov=`#include <vector>

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
`,vn=(o,b,p,d,E)=>({title:o,code:{python:b,javascript:p,java:d,cpp:E}}),LT={backtracking:vn("backtracking",Gp,Yp,Vp,Kp),"binary-search":vn("binary search",Ip,Xp,Qp,Jp),"binary-search-greedy-maximum":vn("greedy (maximum)",Zp,Fp,Pp,Wp),"binary-search-greedy-minimum":vn("greedy (minimum)",$p,nm,em,tm),"binary-search-left-insertion":vn("duplicate elements, left-most insertion point",am,im,rm,lm),"binary-search-right-insertion":vn("duplicate elements, right-most insertion point",sm,om,cm,um),"bitmanipulation-check-power-of-two":vn("check if number is power of 2",dm,fm,hm,gm),"bitmanipulation-clear-kth-bit":vn("clear kth bit",pm,mm,bm,vm),"bitmanipulation-count-set-bits":vn("count set bits",ym,xm,_m,Tm),"bitmanipulation-divide-power-of-two":vn("divide by 2^k",Sm,jm,Nm,wm),"bitmanipulation-get-rightmost-bit":vn("get rightmost bit",Em,Om,Am,km),"bitmanipulation-multiply-power-of-two":vn("multiply by 2^k",Mm,Cm,Rm,zm),"bitmanipulation-set-kth-bit":vn("set kth bit",Dm,Lm,Bm,Um),"bitmanipulation-swap-variables":vn("swap two variables",Hm,qm,Gm,Ym),"bitmanipulation-test-kth-bit":vn("test kth-bit",Vm,Km,Im,Xm),"bitmanipulation-toggle-kth-bit":vn("toggle kth bit",Qm,Jm,Zm,Fm),"dp-bottom-up":vn("DP bottom-up",Pm,Wm,$m,n0),"dp-kadane":vn("Kadane (max-sum subarray)",e0,t0,a0,i0),"dp-top-down":vn("DP top-down",r0,l0,s0,o0),"ds-hash-map":vn("hash map",c0,u0,d0,f0),"ds-trie":vn("trie",h0,g0,p0,m0),"ds-union-find":vn("union find",b0,v0,y0,x0),"ds-union-find-optimized":vn("union find optimized",_0,T0,S0,j0),"graph-bellman-ford":vn("Bellman-Ford (shortest path)",N0,w0,E0,O0),"graph-bfs":vn("BFS",A0,k0,M0,C0),"graph-dfs-iterative":vn("DFS (iterative)",R0,z0,D0,L0),"graph-dfs-recursive":vn("DFS (recursive)",B0,U0,H0,q0),"graph-dijkstra":vn("Dijkstra (shortest path)",G0,Y0,V0,K0),"graph-kahn":vn("Kahn (topological sort)",I0,X0,Q0,J0),"graph-kruskal":vn("Kruskal (mst)",Z0,F0,P0,W0),"graph-prim":vn("Prim (mst)",$0,nb,eb,tb),"hashmap-find-number-of-subarrays":vn("find number of subarrays that fit an exact criteria",ab,ib,rb,lb),"hashmap-sliding-window":vn("sliding window",sb,ob,cb,ub),"heap-find-top-k-elements":vn("find top k elements",db,fb,hb,gb),"linkedlist-fast-and-slow-pointer":vn("fast and slow pointer",pb,mb,bb,vb),"linkedlist-reverse":vn("reverse linked list",yb,xb,_b,Tb),"prefix-sum":vn("prefix sum",Sb,jb,Nb,wb),"sliding-window":vn("sliding window",Eb,Ob,Ab,kb),"stack-monotonic-decreasing":vn("monotonic decreasing stack",Mb,Cb,Rb,zb),"stack-monotonic-increasing":vn("monotonic increasing stack",Db,Lb,Bb,Ub),"string-building":vn("efficient string building",Hb,qb,Gb,Yb),"tree-bfs":vn("BFS",Vb,Kb,Ib,Xb),"tree-dfs-iterative":vn("DFS (iterative)",Qb,Jb,Zb,Fb),"tree-dfs-recursive":vn("DFS (recursive)",Pb,Wb,$b,nv),"two-pointers-one-input":vn("two pointers: one input, opposite ends",ev,tv,av,iv),"two-pointers-two-inputs":vn("two pointers: two inputs, exhaust both",rv,lv,sv,ov)};function BT(o){const b=xl.leaves[o];return b?b.templateIds.map(p=>LT[p]).filter(p=>!!p):[]}const UT="_container_g6uc3_1",HT="_buttonContainer_g6uc3_15",qT="_tabButtonContainer_g6uc3_24",GT="_tabButton_g6uc3_24",eo={container:UT,buttonContainer:HT,tabButtonContainer:qT,tabButton:GT},YT="_code_10mye_1",VT="_line_10mye_14",Np={code:YT,line:VT};var Ju,wp;function KT(){if(wp)return Ju;wp=1;function o(h){return h instanceof Map?h.clear=h.delete=h.set=function(){throw new Error("map is read-only")}:h instanceof Set&&(h.add=h.clear=h.delete=function(){throw new Error("set is read-only")}),Object.freeze(h),Object.getOwnPropertyNames(h).forEach(k=>{const K=h[k],mn=typeof K;(mn==="object"||mn==="function")&&!Object.isFrozen(K)&&o(K)}),h}class b{constructor(k){k.data===void 0&&(k.data={}),this.data=k.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function p(h){return h.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function d(h,...k){const K=Object.create(null);for(const mn in h)K[mn]=h[mn];return k.forEach(function(mn){for(const ne in mn)K[ne]=mn[ne]}),K}const E="</span>",M=h=>!!h.scope,C=(h,{prefix:k})=>{if(h.startsWith("language:"))return h.replace("language:","language-");if(h.includes(".")){const K=h.split(".");return[`${k}${K.shift()}`,...K.map((mn,ne)=>`${mn}${"_".repeat(ne+1)}`)].join(" ")}return`${k}${h}`};class L{constructor(k,K){this.buffer="",this.classPrefix=K.classPrefix,k.walk(this)}addText(k){this.buffer+=p(k)}openNode(k){if(!M(k))return;const K=C(k.scope,{prefix:this.classPrefix});this.span(K)}closeNode(k){M(k)&&(this.buffer+=E)}value(){return this.buffer}span(k){this.buffer+=`<span class="${k}">`}}const H=(h={})=>{const k={children:[]};return Object.assign(k,h),k};class Z{constructor(){this.rootNode=H(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(k){this.top.children.push(k)}openNode(k){const K=H({scope:k});this.add(K),this.stack.push(K)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(k){return this.constructor._walk(k,this.rootNode)}static _walk(k,K){return typeof K=="string"?k.addText(K):K.children&&(k.openNode(K),K.children.forEach(mn=>this._walk(k,mn)),k.closeNode(K)),k}static _collapse(k){typeof k!="string"&&k.children&&(k.children.every(K=>typeof K=="string")?k.children=[k.children.join("")]:k.children.forEach(K=>{Z._collapse(K)}))}}class z extends Z{constructor(k){super(),this.options=k}addText(k){k!==""&&this.add(k)}startScope(k){this.openNode(k)}endScope(){this.closeNode()}__addSublanguage(k,K){const mn=k.root;K&&(mn.scope=`language:${K}`),this.add(mn)}toHTML(){return new L(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function y(h){return h?typeof h=="string"?h:h.source:null}function w(h){return X("(?=",h,")")}function V(h){return X("(?:",h,")*")}function B(h){return X("(?:",h,")?")}function X(...h){return h.map(K=>y(K)).join("")}function nn(h){const k=h[h.length-1];return typeof k=="object"&&k.constructor===Object?(h.splice(h.length-1,1),k):{}}function xn(...h){return"("+(nn(h).capture?"":"?:")+h.map(mn=>y(mn)).join("|")+")"}function cn(h){return new RegExp(h.toString()+"|").exec("").length-1}function ln(h,k){const K=h&&h.exec(k);return K&&K.index===0}const wn=new RegExp(xn(/\[(?:[^\\\]]|\\.)*\]/,/\(\?<(?![=!])[^>]+>/,/\(\?'[^']+'/,/\(\??/,/\\([1-9][0-9]*)/,/\\./));function Kn(h,{joinWith:k}){let K=0;return h.map(mn=>{K+=1;const ne=K;let Ln=y(mn),W="";for(;Ln.length>0;){const G=wn.exec(Ln);if(!G){W+=Ln;break}W+=Ln.substring(0,G.index),Ln=Ln.substring(G.index+G[0].length),G[0][0]==="\\"&&G[1]?W+="\\"+String(Number(G[1])+ne):(W+=G[0],(G[0]==="("||/^\(\?[<']/.test(G[0]))&&K++)}return W}).map(mn=>`(${mn})`).join(k)}const Hn=/\b\B/,un="[a-zA-Z]\\w*",_n="[a-zA-Z_]\\w*",oe="\\b\\d+(\\.\\d+)?",ce="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",ie="\\b(0b[01]+)",ge="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Ke=(h={})=>{const k=/^#![ ]*\//;return h.binary&&(h.begin=X(k,/.*\b/,h.binary,/\b.*/)),d({scope:"meta",begin:k,end:/$/,relevance:0,"on:begin":(K,mn)=>{K.index!==0&&mn.ignoreMatch()}},h)},Ee={begin:"\\\\[\\s\\S]",relevance:0},le={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Ee]},q={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Ee]},dn={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},F=function(h,k,K={}){const mn=d({scope:"comment",begin:h,end:k,contains:[]},K);mn.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const ne=xn("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return mn.contains.push({begin:X(/[ ]+/,"(",ne,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),mn},An=F("//","$"),Tn=F("/\\*","\\*/"),re=F("#","$"),pe={scope:"number",begin:oe,relevance:0},ct={scope:"number",begin:ce,relevance:0},v={scope:"number",begin:ie,relevance:0},R={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[Ee,{begin:/\[/,end:/\]/,relevance:0,contains:[Ee]}]},sn={scope:"title",begin:un,relevance:0},P={scope:"title",begin:_n,relevance:0},fn={begin:"\\.\\s*"+_n,relevance:0};var En=Object.freeze({__proto__:null,APOS_STRING_MODE:le,BACKSLASH_ESCAPE:Ee,BINARY_NUMBER_MODE:v,BINARY_NUMBER_RE:ie,COMMENT:F,C_BLOCK_COMMENT_MODE:Tn,C_LINE_COMMENT_MODE:An,C_NUMBER_MODE:ct,C_NUMBER_RE:ce,END_SAME_AS_BEGIN:function(h){return Object.assign(h,{"on:begin":(k,K)=>{K.data._beginMatch=k[1]},"on:end":(k,K)=>{K.data._beginMatch!==k[1]&&K.ignoreMatch()}})},HASH_COMMENT_MODE:re,IDENT_RE:un,MATCH_NOTHING_RE:Hn,METHOD_GUARD:fn,NUMBER_MODE:pe,NUMBER_RE:oe,PHRASAL_WORDS_MODE:dn,QUOTE_STRING_MODE:q,REGEXP_MODE:R,RE_STARTERS_RE:ge,SHEBANG:Ke,TITLE_MODE:sn,UNDERSCORE_IDENT_RE:_n,UNDERSCORE_TITLE_MODE:P});function en(h,k){h.input[h.index-1]==="."&&k.ignoreMatch()}function hn(h,k){h.className!==void 0&&(h.scope=h.className,delete h.className)}function $e(h,k){k&&h.beginKeywords&&(h.begin="\\b("+h.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",h.__beforeBegin=en,h.keywords=h.keywords||h.beginKeywords,delete h.beginKeywords,h.relevance===void 0&&(h.relevance=0))}function Wa(h,k){Array.isArray(h.illegal)&&(h.illegal=xn(...h.illegal))}function va(h,k){if(h.match){if(h.begin||h.end)throw new Error("begin & end are not supported with match");h.begin=h.match,delete h.match}}function vt(h,k){h.relevance===void 0&&(h.relevance=1)}const Oe=(h,k)=>{if(!h.beforeMatch)return;if(h.starts)throw new Error("beforeMatch cannot be used with starts");const K=Object.assign({},h);Object.keys(h).forEach(mn=>{delete h[mn]}),h.keywords=K.keywords,h.begin=X(K.beforeMatch,w(K.begin)),h.starts={relevance:0,contains:[Object.assign(K,{endsParent:!0})]},h.relevance=0,delete K.beforeMatch},Pn=["of","and","for","in","not","or","if","then","parent","list","value"],yt="keyword";function ya(h,k,K=yt){const mn=Object.create(null);return typeof h=="string"?ne(K,h.split(" ")):Array.isArray(h)?ne(K,h):Object.keys(h).forEach(function(Ln){Object.assign(mn,ya(h[Ln],k,Ln))}),mn;function ne(Ln,W){k&&(W=W.map(G=>G.toLowerCase())),W.forEach(function(G){const pn=G.split("|");mn[pn[0]]=[Ln,Ht(pn[0],pn[1])]})}}function Ht(h,k){return k?Number(k):Si(h)?0:1}function Si(h){return Pn.includes(h.toLowerCase())}const $a={},nt=h=>{console.error(h)},ji=(h,...k)=>{console.log(`WARN: ${h}`,...k)},kt=(h,k)=>{$a[`${h}/${k}`]||(console.log(`Deprecated as of ${h}. ${k}`),$a[`${h}/${k}`]=!0)},xa=new Error;function vr(h,k,{key:K}){let mn=0;const ne=h[K],Ln={},W={};for(let G=1;G<=k.length;G++)W[G+mn]=ne[G],Ln[G+mn]=!0,mn+=cn(k[G-1]);h[K]=W,h[K]._emit=Ln,h[K]._multi=!0}function qt(h){if(Array.isArray(h.begin)){if(h.skip||h.excludeBegin||h.returnBegin)throw nt("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),xa;if(typeof h.beginScope!="object"||h.beginScope===null)throw nt("beginScope must be object"),xa;vr(h,h.begin,{key:"beginScope"}),h.begin=Kn(h.begin,{joinWith:""})}}function yr(h){if(Array.isArray(h.end)){if(h.skip||h.excludeEnd||h.returnEnd)throw nt("skip, excludeEnd, returnEnd not compatible with endScope: {}"),xa;if(typeof h.endScope!="object"||h.endScope===null)throw nt("endScope must be object"),xa;vr(h,h.end,{key:"endScope"}),h.end=Kn(h.end,{joinWith:""})}}function xr(h){h.scope&&typeof h.scope=="object"&&h.scope!==null&&(h.beginScope=h.scope,delete h.scope)}function oo(h){xr(h),typeof h.beginScope=="string"&&(h.beginScope={_wrap:h.beginScope}),typeof h.endScope=="string"&&(h.endScope={_wrap:h.endScope}),qt(h),yr(h)}function Sl(h){function k(W,G){return new RegExp(y(W),"m"+(h.case_insensitive?"i":"")+(h.unicodeRegex?"u":"")+(G?"g":""))}class K{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(G,pn){pn.position=this.position++,this.matchIndexes[this.matchAt]=pn,this.regexes.push([pn,G]),this.matchAt+=cn(G)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const G=this.regexes.map(pn=>pn[1]);this.matcherRe=k(Kn(G,{joinWith:"|"}),!0),this.lastIndex=0}exec(G){this.matcherRe.lastIndex=this.lastIndex;const pn=this.matcherRe.exec(G);if(!pn)return null;const ye=pn.findIndex((Gt,_a)=>_a>0&&Gt!==void 0),de=this.matchIndexes[ye];return pn.splice(0,ye),Object.assign(pn,de)}}class mn{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(G){if(this.multiRegexes[G])return this.multiRegexes[G];const pn=new K;return this.rules.slice(G).forEach(([ye,de])=>pn.addRule(ye,de)),pn.compile(),this.multiRegexes[G]=pn,pn}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(G,pn){this.rules.push([G,pn]),pn.type==="begin"&&this.count++}exec(G){const pn=this.getMatcher(this.regexIndex);pn.lastIndex=this.lastIndex;let ye=pn.exec(G);if(this.resumingScanAtSamePosition()&&!(ye&&ye.index===this.lastIndex)){const de=this.getMatcher(0);de.lastIndex=this.lastIndex+1,ye=de.exec(G)}return ye&&(this.regexIndex+=ye.position+1,this.regexIndex===this.count&&this.considerAll()),ye}}function ne(W){const G=new mn;return W.contains.forEach(pn=>G.addRule(pn.begin,{rule:pn,type:"begin"})),W.terminatorEnd&&G.addRule(W.terminatorEnd,{type:"end"}),W.illegal&&G.addRule(W.illegal,{type:"illegal"}),G}function Ln(W,G){const pn=W;if(W.isCompiled)return pn;[hn,va,oo,Oe].forEach(de=>de(W,G)),h.compilerExtensions.forEach(de=>de(W,G)),W.__beforeBegin=null,[$e,Wa,vt].forEach(de=>de(W,G)),W.isCompiled=!0;let ye=null;return typeof W.keywords=="object"&&W.keywords.$pattern&&(W.keywords=Object.assign({},W.keywords),ye=W.keywords.$pattern,delete W.keywords.$pattern),ye=ye||/\w+/,W.keywords&&(W.keywords=ya(W.keywords,h.case_insensitive)),pn.keywordPatternRe=k(ye,!0),G&&(W.begin||(W.begin=/\B|\b/),pn.beginRe=k(pn.begin),!W.end&&!W.endsWithParent&&(W.end=/\B|\b/),W.end&&(pn.endRe=k(pn.end)),pn.terminatorEnd=y(pn.end)||"",W.endsWithParent&&G.terminatorEnd&&(pn.terminatorEnd+=(W.end?"|":"")+G.terminatorEnd)),W.illegal&&(pn.illegalRe=k(W.illegal)),W.contains||(W.contains=[]),W.contains=[].concat(...W.contains.map(function(de){return _r(de==="self"?W:de)})),W.contains.forEach(function(de){Ln(de,pn)}),W.starts&&Ln(W.starts,G),pn.matcher=ne(pn),pn}if(h.compilerExtensions||(h.compilerExtensions=[]),h.contains&&h.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return h.classNameAliases=d(h.classNameAliases||{}),Ln(h)}function Ni(h){return h?h.endsWithParent||Ni(h.starts):!1}function _r(h){return h.variants&&!h.cachedVariants&&(h.cachedVariants=h.variants.map(function(k){return d(h,{variants:null},k)})),h.cachedVariants?h.cachedVariants:Ni(h)?d(h,{starts:h.starts?d(h.starts):null}):Object.isFrozen(h)?d(h):h}var Tr="11.12.0";class co extends Error{constructor(k,K){super(k),this.name="HTMLInjectionError",this.html=K}}const Sr=p,Ie=d,jl=Symbol("nomatch"),Nl=7,jr=function(h){const k=Object.create(null),K=Object.create(null),mn=[];let ne=!0;const Ln="Could not find the language '{}', did you forget to load/include a language module?",W={disableAutodetect:!0,name:"Plain text",contains:[]};let G={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:z};function pn(D){return G.noHighlightRe.test(D)}function ye(D){let an=D.className+" ";an+=D.parentNode?D.parentNode.className:"";const kn=G.languageDetectRe.exec(an);if(kn){const Wn=Ct(kn[1]);return Wn||(ji(Ln.replace("{}",kn[1])),ji("Falling back to no-highlight mode for this block.",D)),Wn?kn[1]:"no-highlight"}return an.split(/\s+/).find(Wn=>pn(Wn)||Ct(Wn))}function de(D,an,kn){let Wn="",me="";typeof an=="object"?(Wn=D,kn=an.ignoreIllegals,me=an.language):(kt("10.7.0","highlight(lang, code, ...args) has been deprecated."),kt("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),me=D,Wn=an),kn===void 0&&(kn=!0);const tt={code:Wn,language:me};et("before:highlight",tt);const at=tt.result?tt.result:Gt(tt.language,tt.code,kn);return at.code=tt.code,et("after:highlight",at),at}function Gt(D,an,kn,Wn){const me=Object.create(null);function tt(I,rn){return I.keywords[rn]}function at(){if(!yn.keywords){_e.addText(qn);return}let I=0;yn.keywordPatternRe.lastIndex=0;let rn=yn.keywordPatternRe.exec(qn),Sn="";for(;rn;){Sn+=qn.substring(I,rn.index);const Gn=_t.case_insensitive?rn[0].toLowerCase():rn[0],Qn=tt(yn,Gn);if(Qn){const[ut,zl]=Qn;if(_e.addText(Sn),Sn="",me[Gn]=(me[Gn]||0)+1,me[Gn]<=Nl&&(ia+=zl),ut.startsWith("_"))Sn+=rn[0];else{const Or=_t.classNameAliases[ut]||ut;Ce(rn[0],Or)}}else Sn+=rn[0];I=yn.keywordPatternRe.lastIndex,rn=yn.keywordPatternRe.exec(qn)}Sn+=qn.substring(I),_e.addText(Sn)}function na(){if(qn==="")return;let I=null;if(typeof yn.subLanguage=="string"){if(!k[yn.subLanguage]){_e.addText(qn);return}I=Gt(yn.subLanguage,qn,!0,Bn[yn.subLanguage]),Bn[yn.subLanguage]=I._top}else I=Ta(qn,yn.subLanguage.length?yn.subLanguage:null);yn.relevance>0&&(ia+=I.relevance),_e.__addSublanguage(I._emitter,I.language)}function Me(){yn.subLanguage!=null?na():at(),qn=""}function Ce(I,rn){I!==""&&(_e.startScope(rn),_e.addText(I),_e.endScope())}function ea(I,rn){let Sn=1;const Gn=rn.length-1;for(;Sn<=Gn;){if(!I._emit[Sn]){Sn++;continue}const Qn=_t.classNameAliases[I[Sn]]||I[Sn],ut=rn[Sn];Qn?Ce(ut,Qn):(qn=ut,at(),qn=""),Sn++}}function Na(I,rn){return I.scope&&typeof I.scope=="string"&&_e.openNode(_t.classNameAliases[I.scope]||I.scope),I.beginScope&&(I.beginScope._wrap?(Ce(qn,_t.classNameAliases[I.beginScope._wrap]||I.beginScope._wrap),qn=""):I.beginScope._multi&&(ea(I.beginScope,rn),qn="")),yn=Object.create(I,{parent:{value:yn}}),yn}function ta(I,rn,Sn){let Gn=ln(I.endRe,Sn);if(Gn){if(I["on:end"]){const Qn=new b(I);I["on:end"](rn,Qn),Qn.isMatchIgnored&&(Gn=!1)}if(Gn){for(;I.endsParent&&I.parent;)I=I.parent;return I}}if(I.endsWithParent)return ta(I.parent,rn,Sn)}function xe(I){return yn.matcher.regexIndex===0?(qn+=I[0],1):(Oi=!0,0)}function kl(I){const rn=I[0],Sn=I.rule,Gn=new b(Sn),Qn=[Sn.__beforeBegin,Sn["on:begin"]];for(const ut of Qn)if(ut&&(ut(I,Gn),Gn.isMatchIgnored))return xe(rn);return Sn.skip?qn+=rn:(Sn.excludeBegin&&(qn+=rn),Me(),!Sn.returnBegin&&!Sn.excludeBegin&&(qn=rn)),Na(Sn,I),Sn.returnBegin?0:rn.length}function Ml(I){const rn=I[0],Sn=an.substring(I.index),Gn=ta(yn,I,Sn);if(!Gn)return jl;const Qn=yn;yn.endScope&&yn.endScope._wrap?(Me(),Ce(rn,yn.endScope._wrap)):yn.endScope&&yn.endScope._multi?(Me(),ea(yn.endScope,I)):Qn.skip?qn+=rn:(Qn.returnEnd||Qn.excludeEnd||(qn+=rn),Me(),Qn.excludeEnd&&(qn=rn));do yn.scope&&_e.closeNode(),!yn.skip&&!yn.subLanguage&&(ia+=yn.relevance),yn=yn.parent;while(yn!==Gn.parent);return Gn.starts&&Na(Gn.starts,I),Qn.returnEnd?0:rn.length}function Cl(){const I=[];for(let rn=yn;rn!==_t;rn=rn.parent)rn.scope&&I.unshift(rn.scope);I.forEach(rn=>_e.openNode(rn))}let xt={};function aa(I,rn){const Sn=rn&&rn[0];if(qn+=I,Sn==null)return Me(),0;if(xt.type==="begin"&&rn.type==="end"&&xt.index===rn.index&&Sn===""){if(qn+=an.slice(rn.index,rn.index+1),!ne){const Gn=new Error(`0 width match regex (${D})`);throw Gn.languageName=D,Gn.badRule=xt.rule,Gn}return 1}if(xt=rn,rn.type==="begin")return kl(rn);if(rn.type==="illegal"&&!kn){const Gn=new Error('Illegal lexeme "'+Sn+'" for mode "'+(yn.scope||"<unnamed>")+'"');throw Gn.mode=yn,Gn}else if(rn.type==="end"){const Gn=Ml(rn);if(Gn!==jl)return Gn}if(rn.type==="illegal"&&Sn==="")return rn.index===an.length||(qn+=`
`),1;if(Be>1e5&&Be>rn.index*3)throw new Error("potential infinite loop, way more iterations than matches");return qn+=Sn,Sn.length}const _t=Ct(D);if(!_t)throw nt(Ln.replace("{}",D)),new Error('Unknown language: "'+D+'"');const Rl=Sl(_t);let Ei="",yn=Wn||Rl;const Bn={},_e=new G.__emitter(G);Cl();let qn="",ia=0,Le=0,Be=0,Oi=!1;try{if(_t.__emitTokens)_t.__emitTokens(an,_e);else{for(yn.matcher.considerAll();;){Be++,Oi?Oi=!1:yn.matcher.considerAll(),yn.matcher.lastIndex=Le;const I=yn.matcher.exec(an);if(!I)break;const rn=an.substring(Le,I.index),Sn=aa(rn,I);Le=I.index+Sn}aa(an.substring(Le))}return _e.finalize(),Ei=_e.toHTML(),{language:D,value:Ei,relevance:ia,illegal:!1,_emitter:_e,_top:yn}}catch(I){if(I.message&&I.message.includes("Illegal"))return{language:D,value:Sr(an),illegal:!0,relevance:0,_illegalBy:{message:I.message,index:Le,context:an.slice(Le-100,Le+100),mode:I.mode,resultSoFar:Ei},_emitter:_e};if(ne)return{language:D,value:Sr(an),illegal:!1,relevance:0,errorRaised:I,_emitter:_e,_top:yn};throw I}}function _a(D){const an={value:Sr(D),illegal:!1,relevance:0,_top:W,_emitter:new G.__emitter(G)};return an._emitter.addText(D),an}function Ta(D,an){an=an||G.languages||Object.keys(k);const kn=_a(D),Wn=an.filter(Ct).filter(wi).map(Me=>Gt(Me,D,!1));Wn.unshift(kn);const me=Wn.sort((Me,Ce)=>{if(Me.relevance!==Ce.relevance)return Ce.relevance-Me.relevance;if(Me.language&&Ce.language){if(Ct(Me.language).supersetOf===Ce.language)return 1;if(Ct(Ce.language).supersetOf===Me.language)return-1}return 0}),[tt,at]=me,na=tt;return na.secondBest=at,na}function $t(D,an,kn){const Wn=an&&K[an]||kn;D.classList.add("hljs"),D.classList.add(`language-${Wn}`)}function Sa(D){let an=null;const kn=ye(D);if(pn(kn))return;if(et("before:highlightElement",{el:D,language:kn}),D.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",D);return}if(D.children.length>0&&(G.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(D)),G.throwUnescapedHTML))throw new co("One of your code blocks includes unescaped HTML.",D.innerHTML);an=D;const Wn=an.textContent,me=kn?de(Wn,{language:kn,ignoreIllegals:!0}):Ta(Wn);D.innerHTML=me.value,D.dataset.highlighted="yes",$t(D,kn,me.language),D.result={language:me.language,re:me.relevance,relevance:me.relevance},me.secondBest&&(D.secondBest={language:me.secondBest.language,relevance:me.secondBest.relevance}),et("after:highlightElement",{el:D,result:me,text:Wn})}function ni(D){G=Ie(G,D)}const wl=()=>{ja(),kt("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function uo(){ja(),kt("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Nr=!1;function ja(){function D(){ja()}if(document.readyState==="loading"){Nr||window.addEventListener("DOMContentLoaded",D,!1),Nr=!0;return}document.querySelectorAll(G.cssSelector).forEach(Sa)}function ei(D,an){let kn=null;try{kn=an(h)}catch(Wn){if(nt("Language definition for '{}' could not be registered.".replace("{}",D)),ne)nt(Wn);else throw Wn;kn=W}kn.name||(kn.name=D),k[D]=kn,kn.rawDefinition=an.bind(null,h),kn.aliases&&wr(kn.aliases,{languageName:D})}function fo(D){delete k[D];for(const an of Object.keys(K))K[an]===D&&delete K[an]}function El(){return Object.keys(k)}function Ct(D){return D=(D||"").toLowerCase(),k[D]||k[K[D]]}function wr(D,{languageName:an}){typeof D=="string"&&(D=[D]),D.forEach(kn=>{K[kn.toLowerCase()]=an})}function wi(D){const an=Ct(D);return an&&!an.disableAutodetect}function Er(D){D["before:highlightBlock"]&&!D["before:highlightElement"]&&(D["before:highlightElement"]=an=>{D["before:highlightBlock"](Object.assign({block:an.el},an))}),D["after:highlightBlock"]&&!D["after:highlightElement"]&&(D["after:highlightElement"]=an=>{D["after:highlightBlock"](Object.assign({block:an.el},an))})}function Ol(D){Er(D),mn.push(D)}function Al(D){const an=mn.indexOf(D);an!==-1&&mn.splice(an,1)}function et(D,an){const kn=D;mn.forEach(function(Wn){Wn[kn]&&Wn[kn](an)})}function Ae(D){return kt("10.7.0","highlightBlock will be removed entirely in v12.0"),kt("10.7.0","Please use highlightElement now."),Sa(D)}Object.assign(h,{highlight:de,highlightAuto:Ta,highlightAll:ja,highlightElement:Sa,highlightBlock:Ae,configure:ni,initHighlighting:wl,initHighlightingOnLoad:uo,registerLanguage:ei,unregisterLanguage:fo,listLanguages:El,getLanguage:Ct,registerAliases:wr,autoDetection:wi,inherit:Ie,addPlugin:Ol,removePlugin:Al}),h.debugMode=function(){ne=!1},h.safeMode=function(){ne=!0},h.versionString=Tr,h.regex={concat:X,lookahead:w,either:xn,optional:B,anyNumberOfTimes:V};for(const D in En)typeof En[D]=="object"&&o(En[D]);return Object.assign(h,En),h},Mt=jr({});return Mt.newInstance=()=>jr({}),Ju=Mt,Mt.HighlightJS=Mt,Mt.default=Mt,Ju}var IT=KT();const Tl=br(IT),Ep="[A-Za-z$_][0-9A-Za-z$_]*",XT=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],QT=["true","false","null","undefined","NaN","Infinity"],cv=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],uv=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],dv=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],JT=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","self","global"],ZT=[].concat(dv,cv,uv);function FT(o){const b=o.regex,p=(F,{after:An})=>{const Tn="</"+F[0].slice(1);return F.input.indexOf(Tn,An)!==-1},d=Ep,E={begin:"<>",end:"</>"},M=/<[A-Za-z0-9\\._:-]+\s*\/>/,C={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(F,An)=>{const Tn=F[0].length+F.index,re=F.input[Tn];if(re==="<"||re===","){An.ignoreMatch();return}re===">"&&(p(F,{after:Tn})||An.ignoreMatch());let pe;const ct=F.input.substring(Tn);if(pe=ct.match(/^\s*=/)){An.ignoreMatch();return}if((pe=ct.match(/^\s+extends\s+/))&&pe.index===0){An.ignoreMatch();return}}},L={$pattern:Ep,keyword:XT,literal:QT,built_in:ZT,"variable.language":JT},H="[0-9](_?[0-9])*",Z=`\\.(${H})`,z="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",y={className:"number",variants:[{begin:`(\\b(${z})((${Z})|\\.)?|(${Z}))[eE][+-]?(${H})\\b`},{begin:`\\b(${z})\\b((${Z})\\b|\\.)?|(${Z})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},w={className:"subst",begin:"\\$\\{",end:"\\}",keywords:L,contains:[]},V={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,w],subLanguage:"xml"}},B={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,w],subLanguage:"css"}},X={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,w],subLanguage:"graphql"}},nn={className:"string",begin:"`",end:"`",contains:[o.BACKSLASH_ESCAPE,w]},cn={className:"comment",variants:[o.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:d+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),o.C_BLOCK_COMMENT_MODE,o.C_LINE_COMMENT_MODE]},ln=[o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,V,B,X,nn,{match:/\$\d+/},y];w.contains=ln.concat({begin:/\{/,end:/\}/,keywords:L,contains:["self"].concat(ln)});const wn=[].concat(cn,w.contains),Kn=wn.concat([{begin:/(\s*)\(/,end:/\)/,keywords:L,contains:["self"].concat(wn)}]),Hn={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:L,contains:Kn},un={variants:[{match:[/class/,/\s+/,d,/\s+/,/extends/,/\s+/,b.concat(d,"(",b.concat(/\./,d),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,d],scope:{1:"keyword",3:"title.class"}}]},_n={relevance:0,match:b.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...cv,...uv]}},oe={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},ce={variants:[{match:[/function/,/\s+/,d,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[Hn],illegal:/%/},ie={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function ge(F){return b.concat("(?!",F.join("|"),")")}const Ke={match:b.concat(/\b/,ge([...dv,"super","import","await"].map(F=>`${F}\\s*\\(`)),d,b.lookahead(/\s*\(/)),className:"title.function",relevance:0},Ee={begin:b.concat(/\./,b.lookahead(b.concat(d,/(?![0-9A-Za-z$_(])/))),end:d,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},le={match:[/get|set/,/\s+/,d,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},Hn]},q="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+o.UNDERSCORE_IDENT_RE+")\\s*=>",dn={match:[/const|var|let/,/\s+/,d,/\s*/,/=\s*/,/(async\s*)?/,b.lookahead(q)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[Hn]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:L,exports:{PARAMS_CONTAINS:Kn,CLASS_REFERENCE:_n},illegal:/#(?![$_A-Za-z])/,contains:[o.SHEBANG({label:"shebang",binary:"node",relevance:5}),oe,o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,V,B,X,nn,cn,{match:/\$\d+/},y,_n,{scope:"attr",match:d+b.lookahead(":"),relevance:0},dn,{begin:"("+o.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[cn,o.REGEXP_MODE,{className:"function",begin:q,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:o.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:L,contains:Kn}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:E.begin,end:E.end},{match:M},{begin:C.begin,"on:begin":C.isTrulyOpeningTag,end:C.end}],subLanguage:"xml",contains:[{begin:C.begin,end:C.end,skip:!0,contains:["self"]}]}]},ce,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+o.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[Hn,o.inherit(o.TITLE_MODE,{begin:d,className:"title.function"})]},{match:/\.\.\./,relevance:0},Ee,{match:"\\$"+d,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[Hn]},Ke,ie,un,le,{match:/\$[(.]/}]}}var pr="[0-9](_*[0-9])*",to=`\\.(${pr})`,ao="[0-9a-fA-F](_*[0-9a-fA-F])*",Op={className:"number",variants:[{begin:`(\\b(${pr})((${to})|\\.)?|(${to}))[eE][+-]?(${pr})[fFdD]?\\b`},{begin:`\\b(${pr})((${to})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${to})[fFdD]?\\b`},{begin:`\\b(${pr})[fFdD]\\b`},{begin:`\\b0[xX]((${ao})\\.?|(${ao})?\\.(${ao}))[pP][+-]?(${pr})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${ao})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};function fv(o,b,p){return p===-1?"":o.replace(b,d=>fv(o,b,p-1))}function PT(o){const b=o.regex,p="[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",d="(?:(?:\\s*\\[\\s*])+)?",E=p+"<@@@>"+d,C="(?:"+("\\?(?:\\s+(?:extends|super)\\s+"+E+")?")+"|"+E+")",L=fv("(?:\\s*<\\s*"+C+"(?:\\s*,\\s*"+C+")*\\s*>)?",/<@@@>/g,2),w={keyword:["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do","sealed","yield","permits","goto","when"],literal:["false","true","null"],type:["char","boolean","long","float","int","byte","short","double"],built_in:["super","this"]},V={className:"meta",begin:"@"+p,contains:[{begin:/\(/,end:/\)/,contains:["self"]}]},B={className:"params",begin:/\(/,end:/\)/,keywords:w,relevance:0,contains:[o.C_BLOCK_COMMENT_MODE],endsParent:!0};return{name:"Java",aliases:["jsp"],keywords:w,illegal:/<\/|#/,contains:[o.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{begin:/import java\.[a-z]+\./,keywords:"import",relevance:2},o.C_LINE_COMMENT_MODE,o.C_BLOCK_COMMENT_MODE,{begin:/"""/,end:/"""/,className:"string",contains:[o.BACKSLASH_ESCAPE]},o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,{match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,p],className:{1:"keyword",3:"title.class"}},{match:/non-sealed/,scope:"keyword"},{beginKeywords:"new throw return else yield assert",relevance:0},{begin:[p,b.concat(L,d,/\s+/),p,d,/\s*/,/=(?!=)/],className:{1:"type",3:"variable",6:"operator"}},{begin:[/record/,/\s+/,p],className:{1:"keyword",3:"title.class"},contains:[B,o.C_LINE_COMMENT_MODE,o.C_BLOCK_COMMENT_MODE]},{begin:[p,b.concat(L,d,/\s+/),p,/\s*(?=\()/],className:{1:"type",3:"title.function"},keywords:w,contains:[{className:"params",begin:/\(/,end:/\)/,keywords:w,relevance:0,contains:[V,o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,Op,o.C_BLOCK_COMMENT_MODE]},o.C_LINE_COMMENT_MODE,o.C_BLOCK_COMMENT_MODE]},Op,V]}}function WT(o){const b=o.regex,p=o.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),d="decltype\\(auto\\)",E="[a-zA-Z_]\\w*::",C="(?!struct)("+d+"|"+b.optional(E)+"[a-zA-Z_]\\w*"+b.optional("<[^<>]+>")+")",L={className:"type",begin:"\\b[a-z\\d_]*_t\\b"},Z={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[o.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'("+"\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)"+"|.)",end:"'",illegal:"."},o.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\\s"]{0,16})\(/,end:/\)([^()\\\s"]{0,16})"/})]},z={className:"number",variants:[{begin:"[+-]?(?:(?:\\b[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|\\b[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|\\b0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)"},{begin:"[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)"}],relevance:0},y={scope:"meta",begin:/#\s*include\b/,end:/$/,keywords:{keyword:"include"},contains:[{begin:/\\\n/},Z,{scope:"string",begin:/<.*?>/},p,o.C_BLOCK_COMMENT_MODE]},w={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},o.inherit(Z,{className:"string"}),p,o.C_BLOCK_COMMENT_MODE]},V=[y,w],B={className:"title",begin:b.optional(E)+o.IDENT_RE,relevance:0},X=b.optional(E)+o.IDENT_RE+"\\s*\\(",nn=12,xn=["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],cn=["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],ln=["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","flat_map","flat_set","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"],wn=["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"],un={type:cn,keyword:xn,literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],_type_hints:ln},_n={className:"function.dispatch",relevance:0,keywords:{_hint:wn},begin:b.concat(/\b/,`(?!${xn.join("|")})`,o.IDENT_RE,b.lookahead(/(<[^<>]+>|)\s*\(/))},oe=[_n,...V,L,p,o.C_BLOCK_COMMENT_MODE,z,Z],ce={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:un,contains:oe.concat([{begin:/\(/,end:/\)/,keywords:un,contains:oe.concat(["self"]),relevance:0}]),relevance:0},ie={className:"function",begin:"("+C+"[\\*&\\s]+){1,"+nn+"}"+X,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:un,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:d,keywords:un,relevance:0},{begin:X,returnBegin:!0,contains:[B],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[Z,z]},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:un,relevance:0,contains:[p,o.C_BLOCK_COMMENT_MODE,Z,z,L,{begin:/\(/,end:/\)/,keywords:un,relevance:0,contains:["self",p,o.C_BLOCK_COMMENT_MODE,Z,z,L]}]},L,p,o.C_BLOCK_COMMENT_MODE,...V]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:un,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat(ce,ie,_n,oe,[...V,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function|flat_map|flat_set)\\s*<(?!<)",end:">",keywords:un,contains:["self",L]},{begin:o.IDENT_RE+"::",keywords:un},{match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],className:{1:"keyword",3:"title.class"}}])}}function $T(o){const b=o.regex,p=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),d=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],E=/[-+*\/%=<>&|^~]|\*\*?|\/\/?|<<=?|>>=?|\+=|-=|\*=|\/=|%=|@|<|>/,M=["bool","complex","dict","float","frozenset","int","list","set","str","tuple"],C=["add_vertex","add","append","backtrack","bit_length","clear","collect_words","connected","counting_sort","defaultdict","deque","dfs","dp","extend","find_max_index","find","heapify","heappop","heappush","insert","insertion_sort","join","ListNode","merge_sort","pop","popleft","print_trie","quick_sort","RECURRENCE_RELATION","remove","shuffle","sort","TreeNode","TrieNode","union","UnionFind","update"],L=["BASE_CASE","BOOLEAN","CONDITION","CRITERIA","ITERATE_OVER_INPUT","MAXIMUM_POSSIBLE_ANSWER","MINIMUM_POSSIBLE_ANSWER","OTHER_ARGUMENTS","SMALLEST_SUBPROBLEM","START_NODE","STATE_FOR_WHOLE_INPUT","STATE","WINDOW_CONDITION_BROKEN"],H=["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip",...C],Z=["__debug__","Ellipsis","False","None","NotImplemented","True",...L],z=["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union",...M],y={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:d,built_in:H,literal:Z,type:z},w={className:"meta",begin:/^(>>>|\.\.\.) /},V={className:"subst",begin:/\{/,end:/\}/,keywords:y,illegal:/#/},B={begin:/\{\{/,relevance:0},X={className:"string",contains:[o.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[o.BACKSLASH_ESCAPE,w],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[o.BACKSLASH_ESCAPE,w],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[o.BACKSLASH_ESCAPE,w,B,V]},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[o.BACKSLASH_ESCAPE,w,B,V]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[o.BACKSLASH_ESCAPE,B,V]},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[o.BACKSLASH_ESCAPE,B,V]},o.APOS_STRING_MODE,o.QUOTE_STRING_MODE]},nn="[0-9](_?[0-9])*",xn=`(\\b(${nn}))?\\.(${nn})|\\b(${nn})\\.`,cn=`\\b|${d.join("|")}`,ln={className:"number",relevance:0,variants:[{begin:`(\\b(${nn})|(${xn}))[eE][+-]?(${nn})[jJ]?(?=${cn})`},{begin:`(${xn})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${cn})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${cn})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${cn})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${cn})`},{begin:`\\b(${nn})[jJ](?=${cn})`}]},wn={className:"comment",begin:b.lookahead(/# type:/),end:/$/,keywords:y,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},Kn={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:y,contains:["self",w,ln,X,o.HASH_COMMENT_MODE,{scope:"params.operator",match:E},{scope:"params.comma",match:","},{scope:"params.self",match:/self/}]}]};return V.contains=[X,ln,w],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:y,illegal:/(<\/|\?)|=>/,contains:[w,ln,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},X,wn,o.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,p],scope:{1:"keyword.def",3:"title.function"},contains:[Kn]},{variants:[{match:[/\bclass/,/\s+/,p,/\s*/,/\(\s*/,p,/\s*\)/]},{match:[/\bclass/,/\s+/,p]}],scope:{1:"keyword.class",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[ln,Kn,X]},{scope:"operator",match:E}]}}Tl.registerLanguage("python",$T);Tl.registerLanguage("javascript",FT);Tl.registerLanguage("java",PT);Tl.registerLanguage("cpp",WT);function nS({code:o,language:b}){const p=U.useRef(null),[d,E]=U.useState(""),[M,C]=U.useState(""),L=we("hljs",b,Np.code),H=()=>{if(p.current){const X=o.split(`
`).map((nn,xn)=>{const cn=Tl.highlight(nn,{language:b}).value;return`<span class=${Np.line} data-line-number=${xn+1}>${cn}</span>`}).join("");C(X)}},Z=()=>{p.current?.querySelectorAll("span[data-line-number]")?.forEach(X=>X.addEventListener("click",w))},z=()=>{p.current?.querySelectorAll("span[data-line-number]")?.forEach(X=>X.removeEventListener("click",w))},y=()=>{p.current?.querySelector(`span[data-line-number="${d}"]`)?.removeAttribute("focused")},w=V=>{const B=V.currentTarget,X=B.getAttribute("data-line-number")??"";y(),X===d?E(""):(B.setAttribute("focused",""),E(X))};return qp(p,y),U.useEffect(()=>(H(),Z(),()=>z()),[o,M,d]),r.jsx("pre",{ref:p,children:r.jsx("code",{className:L,dangerouslySetInnerHTML:{__html:M}})})}const eS="_copyButton_fst3f_1",tS="_copySvg_fst3f_23",aS="_checkSvg_fst3f_30",iS="_checkSvgPath_fst3f_35",rS="_enter_fst3f_46",lS="_exit_fst3f_50",Ti={copyButton:eS,copySvg:tS,checkSvg:aS,checkSvgPath:iS,enter:rS,exit:lS};function sS({onClick:o}){const[b,p]=U.useState("show"),[d,E]=U.useState("hide"),M=we(Ti.copySvg,b==="enter"&&Ti.enter,b==="exit"&&Ti.exit),C=we(Ti.checkSvg,d==="exit"&&Ti.exit),L=we(Ti.checkSvgPath),H=()=>{b==="show"&&d==="hide"&&(p("exit"),o())},Z=()=>{b==="enter"&&p("show"),b==="exit"&&(p("hide"),E("show"))},z=()=>{d==="show"&&setTimeout(()=>{E("exit")},500),d==="exit"&&(E("hide"),p("enter"))},y=()=>b!=="hide"&&r.jsx("svg",{className:M,viewBox:"0 0 512 512",onAnimationEnd:Z,children:r.jsx("path",{d:"M64 464H288c8.8 0 16-7.2 16-16V384h48v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h64v48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM224 304H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16V288c0 8.8 7.2 16 16 16zm-64-16V64c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64z"})}),w=()=>d!=="hide"&&r.jsx("svg",{className:C,viewBox:"0 0 16 16",onAnimationEnd:z,children:r.jsx("path",{className:L,d:"M3.428571,9.14285714 L6.85714286,12.57142857 L12.5714286,3.42857143"})});return r.jsxs("button",{type:"button","aria-label":d==="hide"?"Copy code":"Copied",title:"Copy code",className:Ti.copyButton,onClick:H,children:[y(),w()]})}function oS(){return r.jsxs("svg",{viewBox:"0 0 128 128",children:[r.jsxs("linearGradient",{id:"python_svg__a",x1:70.252,x2:170.659,y1:1237.476,y2:1151.089,gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",gradientUnits:"userSpaceOnUse",children:[r.jsx("stop",{offset:0,stopColor:"#5A9FD4"}),r.jsx("stop",{offset:1,stopColor:"#306998"})]}),r.jsxs("linearGradient",{id:"python_svg__b",x1:209.474,x2:173.62,y1:1098.811,y2:1149.537,gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",gradientUnits:"userSpaceOnUse",children:[r.jsx("stop",{offset:0,stopColor:"#FFD43B"}),r.jsx("stop",{offset:1,stopColor:"#FFE873"})]}),r.jsx("path",{fill:"url(#python_svg__a)",d:"M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008M50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721",transform:"translate(0 10.26)"}),r.jsx("path",{fill:"url(#python_svg__b)",d:"M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692",transform:"translate(0 10.26)"}),r.jsxs("radialGradient",{id:"python_svg__c",cx:1825.678,cy:444.45,r:26.743,gradientTransform:"matrix(0 -.24 -1.055 0 532.979 557.576)",gradientUnits:"userSpaceOnUse",children:[r.jsx("stop",{offset:0,stopColor:"#B8B8B8",stopOpacity:.498}),r.jsx("stop",{offset:1,stopColor:"#7F7F7F",stopOpacity:0})]}),r.jsx("path",{fill:"url(#python_svg__c)",d:"M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416s14.815-6.417 33.092-6.417c18.275 0 33.091 2.872 33.091 6.417",opacity:.444})]})}function cS(){return r.jsxs("svg",{viewBox:"0 0 128 128",children:[r.jsx("path",{fill:"#F0DB4F",d:"M1.408 1.408h125.184v125.185H1.408z"}),r.jsx("path",{fill:"#323330",d:"M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237"})]})}function uS(){return r.jsxs("svg",{id:"Layer_1",x:"0px",y:"0px",width:"306px",height:"344.35px",viewBox:"0 0 306 344.35",enableBackground:"new 0 0 306 344.35",children:[r.jsx("path",{fill:"#00599C",d:"M302.107,258.262c2.401-4.159,3.893-8.845,3.893-13.053V99.14c0-4.208-1.49-8.893-3.892-13.052L153,172.175L302.107,258.262z"}),r.jsx("path",{fill:"#004482",d:"M166.25,341.193l126.5-73.034c3.644-2.104,6.956-5.737,9.357-9.897L153,172.175L3.893,258.263c2.401,4.159,5.714,7.793,9.357,9.896l126.5,73.034C147.037,345.401,158.963,345.401,166.25,341.193z"}),r.jsx("path",{fill:"#659AD2",d:"M302.108,86.087c-2.402-4.16-5.715-7.793-9.358-9.897L166.25,3.156c-7.287-4.208-19.213-4.208-26.5,0L13.25,76.19C5.962,80.397,0,90.725,0,99.14v146.069c0,4.208,1.491,8.894,3.893,13.053L153,172.175L302.108,86.087z"}),r.jsx("g",{children:r.jsx("path",{fill:"#FFFFFF",d:"M153,274.175c-56.243,0-102-45.757-102-102s45.757-102,102-102c36.292,0,70.139,19.53,88.331,50.968l-44.143,25.544c-9.105-15.736-26.038-25.512-44.188-25.512c-28.122,0-51,22.878-51,51c0,28.121,22.878,51,51,51c18.152,0,35.085-9.776,44.191-25.515l44.143,25.543C223.142,254.644,189.294,274.175,153,274.175z"})}),r.jsx("g",{children:r.jsx("polygon",{fill:"#FFFFFF",points:"255,166.508 243.666,166.508 243.666,155.175 232.334,155.175 232.334,166.508 221,166.508221,177.841 232.334,177.841 232.334,189.175 243.666,189.175 243.666,177.841 255,177.841 	"})}),r.jsx("g",{children:r.jsx("polygon",{fill:"#FFFFFF",points:"297.5,166.508 286.166,166.508 286.166,155.175 274.834,155.175 274.834,166.508 263.5,166.508263.5,177.841 274.834,177.841 274.834,189.175 286.166,189.175 286.166,177.841 297.5,177.841 	"})})]})}function dS(){return r.jsxs("svg",{height:"800px",width:"800px",id:"Layer_1",viewBox:"0 0 511.998 511.998",children:[r.jsxs("g",{children:[r.jsx("path",{fill:"#DB380E",d:"M253.464,94.869c-23.658,16.639-50.471,35.498-64.838,66.699c-24.954,54.435,51.062,113.812,54.311,116.313c0.755,0.581,1.659,0.871,2.56,0.871c0.957,0,1.915-0.327,2.693-0.979c1.509-1.262,1.937-3.406,1.031-5.152c-0.275-0.53-27.561-53.53-26.547-91.552c0.359-13.243,18.892-28.266,38.512-44.171c17.97-14.568,38.34-31.079,50.258-50.394c26.164-42.516-2.916-84.322-3.213-84.74c-1.155-1.622-3.287-2.209-5.11-1.41c-1.821,0.804-2.83,2.773-2.414,4.72c0.059,0.277,5.714,27.923-10.022,56.406C284.203,73.25,269.959,83.268,253.464,94.869z"}),r.jsx("path",{fill:"#DB380E",d:"M353.137,113.617c1.669-1.257,2.159-3.55,1.15-5.38c-1.011-1.83-3.211-2.637-5.165-1.895c-4.019,1.528-98.416,37.915-98.416,81.88c0,30.307,12.946,46.317,22.399,58.009c3.708,4.586,6.909,8.546,7.964,11.927c2.97,9.743-4.066,27.353-7.025,33.317c-0.853,1.714-0.435,3.792,1.016,5.044c0.784,0.677,1.763,1.021,2.743,1.021c0.834,0,1.672-0.248,2.396-0.752c1.623-1.128,39.667-28.026,32.844-60.433c-2.542-12.318-8.595-21.318-13.936-29.26c-8.274-12.305-14.25-21.193-5.184-37.609C304.545,150.338,352.65,113.981,353.137,113.617z"})]}),r.jsxs("g",{children:[r.jsx("path",{fill:"#73A1FB",d:"M107.418,298.236c-1.618,4.845-0.854,9.651,2.207,13.903c10.233,14.207,46.48,22.029,102.068,22.029c0.003,0,0.005,0,0.007,0c7.532,0,15.484-0.148,23.629-0.44c88.875-3.181,121.839-30.869,123.199-32.046c1.482-1.283,1.878-3.419,0.957-5.147c-0.922-1.727-2.909-2.595-4.808-2.072c-31.301,8.546-89.748,11.58-130.288,11.58c-45.363,0-68.465-3.268-74.121-5.681c2.902-3.985,20.802-11.101,42.983-15.464c2.12-0.416,3.577-2.374,3.367-4.524s-2.016-3.79-4.177-3.79C179.439,276.584,114.234,277.628,107.418,298.236z"}),r.jsx("path",{fill:"#73A1FB",d:"M404.812,269.718c-18.331,0-35.714,9.188-36.446,9.577c-1.695,0.908-2.555,2.852-2.09,4.72c0.467,1.865,2.144,3.176,4.067,3.178c0.389,0,39.102,0.317,42.608,22.436c3.106,19.082-36.629,50-52.202,60.304c-1.682,1.113-2.335,3.263-1.554,5.123c0.665,1.583,2.206,2.573,3.868,2.573c0.29,0,0.584-0.03,0.876-0.092c3.696-0.791,90.406-19.899,81.238-70.384C439.584,276.213,420.138,269.718,404.812,269.718z"}),r.jsx("path",{fill:"#73A1FB",d:"M345.347,363.755c0.302-1.617-0.371-3.262-1.717-4.207l-20.791-14.563c-1.014-0.71-2.295-0.933-3.485-0.618c-0.217,0.055-21.959,5.771-53.525,9.276c-12.528,1.405-26.56,2.147-40.582,2.147c-31.558,0-52.192-3.708-55.197-6.428c-0.398-0.764-0.272-1.111-0.201-1.304c0.546-1.518,3.472-3.322,5.358-4.036c2.083-0.771,3.206-3.033,2.558-5.157c-0.646-2.127-2.837-3.378-4.999-2.859c-20.856,5.033-31.054,12.071-30.312,20.918c1.318,15.686,37.65,23.737,68.365,25.865c4.417,0.302,9.194,0.455,14.195,0.455c0.003,0,0.005,0,0.008,0c51.074,0,116.55-16.025,117.204-16.188C343.825,366.666,345.044,365.375,345.347,363.755z"}),r.jsx("path",{fill:"#73A1FB",d:"M188.602,397.419c1.575-1.024,2.273-2.971,1.714-4.764c-0.557-1.793-2.234-2.971-4.118-2.946c-2.795,0.074-27.349,1.182-29.068,16.815c-0.52,4.672,0.818,8.941,3.979,12.686c8.816,10.448,32.614,16.658,72.741,18.984c4.747,0.285,9.569,0.428,14.334,0.428c51.015,0,85.373-15.973,86.812-16.653c1.395-0.66,2.315-2.031,2.397-3.571s-0.687-3.001-2.003-3.806l-26.275-16.04c-0.912-0.556-2.003-0.74-3.043-0.527c-0.166,0.035-16.849,3.495-42.026,6.913c-4.764,0.648-10.73,0.977-17.73,0.977c-25.15,0-53.124-4.109-58.489-6.8C187.749,398.613,187.848,397.975,188.602,397.419z"}),r.jsx("path",{fill:"#73A1FB",d:"M224.408,486.85c116.854-0.099,179.571-20.88,191.653-33.957c4.277-4.626,4.739-9.006,4.376-11.867c-0.898-7.04-7.311-11.35-8.038-11.818c-1.754-1.128-4.108-0.833-5.476,0.745c-1.365,1.578-1.397,3.884-0.027,5.461c0.737,0.948,1.163,2.535-0.992,4.692c-4.83,4.511-53.545,18.204-134.656,22.318c-11.111,0.577-22.765,0.871-34.636,0.873c-72.623,0-125.772-9.948-132.749-15.744c2.689-3.864,21.489-10.037,41.482-13.529c2.253-0.393,3.775-2.516,3.426-4.776c-0.349-2.259-2.432-3.814-4.709-3.519c-0.564,0.077-2.478,0.191-4.694,0.327c-32.988,2.014-71.109,6.503-73.098,23.5c-0.604,5.179,0.935,9.881,4.576,13.973c8.909,10.01,34.516,23.319,153.558,23.319C224.406,486.85,224.406,486.85,224.408,486.85z"}),r.jsx("path",{fill:"#73A1FB",d:"M439.013,456.578c-1.652-0.764-3.604-0.378-4.836,0.952c-0.171,0.185-17.74,18.556-70.564,29.344c-20.223,4.052-58.183,6.107-112.826,6.107c-54.745,0-106.838-2.154-107.357-2.176c-2.176-0.106-4.037,1.476-4.333,3.618c-0.297,2.14,1.083,4.158,3.184,4.658c0.542,0.128,55.135,12.918,129.779,12.918c35.801,0,70.639-2.907,103.548-8.645c61.361-10.757,65.657-41.183,65.81-42.473C441.632,459.078,440.662,457.342,439.013,456.578z"})]})]})}const fS={python:oS,javascript:cS,java:dS,cpp:uS},hS={python:{short:"Py",full:"Python"},javascript:{short:"JS",full:"JavaScript"},java:{short:"Java",full:"Java"},cpp:{short:"C++",full:"C++"}};function u({title:o,children:b}){const{selectedLanguage:p,setSelectedLanguage:d}=Rp(),E=U.Children.toArray(b),M=E.findIndex(w=>w.props.language===p),C=M===-1?0:M,L=E[C]?.props.code??"",H=E[C]?.props.language,Z=w=>{d(E[w].props.language)},z=()=>navigator.clipboard.writeText(L),y=()=>E.map((w,V)=>{const B=fS[w.props.language],{short:X,full:nn}=hS[w.props.language];return r.jsxs("button",{type:"button",role:"tab","aria-label":`${nn} code`,"aria-selected":V===C,className:eo.tabButton,onClick:()=>Z(V),children:[r.jsx(B,{}),r.jsx("span",{children:X})]},V)});return r.jsxs("div",{className:eo.container,children:[r.jsx("h3",{children:o}),r.jsxs("div",{className:eo.buttonContainer,children:[r.jsx("div",{role:"tablist",className:eo.tabButtonContainer,children:y()}),r.jsx(sS,{onClick:z})]}),r.jsx("div",{role:"tabpanel",className:"tabs-content",children:r.jsx(nS,{code:L,language:H})})]})}u.Tab=o=>r.jsx(r.Fragment,{children:o});const gS=100;function pS(o){const b=U.useRef(0),p=U.useRef(null),[d,E]=U.useState(0),[M,C]=U.useState(!1),L=()=>{const X=p.current===null?0:performance.now()-p.current;return b.current+X},H=X=>Math.floor(X/1e3)*1e3;U.useEffect(()=>{if(!M)return;const X=setInterval(()=>{const nn=H(L());E(xn=>xn===nn?xn:nn)},gS);return()=>clearInterval(X)},[M]);const Z=U.useCallback(()=>{b.current=0,p.current=performance.now(),E(0),C(!0)},[]),z=U.useCallback(()=>{p.current!==null&&(b.current=L(),p.current=null),E(b.current),C(!1)},[]),y=U.useCallback(()=>{p.current===null&&(p.current=performance.now()),E(H(L())),C(!0)},[]),w=U.useCallback(()=>{b.current=0,p.current=null,E(0),C(!1)},[]),V=o-d,B=d>=o;return{elapsedMs:d,remainingMs:V,overtimeMs:B?d-o:0,isOvertime:B,isRunning:M,start:Z,stop:z,resume:y,reset:w}}const Ap=30,mS=10;function bS(o){return o.isContentEditable||["INPUT","TEXTAREA","SELECT","OPTION"].includes(o.tagName)?!0:o.closest('input, textarea, select, [role="listbox"], [role="combobox"]')!==null}const vS=o=>String(o).padStart(2,"0");function mr(o){const b=Math.max(0,o);return`${Math.floor(b/60)}:${vS(b%60)}`}function yS(){const o=pS(Ap*1e3),[b,p]=U.useState(!1),[d,E]=U.useState([]),[M,C]=U.useState(!1),L=U.useRef(null),H=d.length>0?d[d.length-1].option.next:xl.rootId,Z=b?xl.leaves[H]:void 0,z=b?xl.nodes[H]:void 0;U.useEffect(()=>{L.current?.focus()},[b,H]);const y=U.useCallback(()=>{p(!0),o.start()},[o]),w=U.useCallback(cn=>{z&&(E(ln=>[...ln,{question:z.question,option:cn}]),xl.leaves[cn.next]&&o.stop())},[z,o]),V=U.useCallback(cn=>{cn<0||cn>=d.length||(E(d.slice(0,cn)),C(!1),Z&&o.resume())},[d,Z,o]),B=U.useCallback(()=>V(d.length-1),[V,d.length]),X=U.useCallback(()=>C(cn=>!cn),[]),nn=U.useCallback(()=>{o.reset(),p(!1),E([]),C(!1)},[o]);U.useEffect(()=>{const cn=ln=>{if(ln.metaKey||ln.ctrlKey||ln.altKey)return;const wn=ln.target;if(!(wn&&bS(wn))){if(ln.key==="Escape")return nn();if(ln.key==="Backspace"&&b&&d.length>0)return ln.preventDefault(),B();if(ln.key==="Enter"&&!b&&wn?.tagName!=="BUTTON")return y();if((ln.key==="t"||ln.key==="T")&&Z)return X();if(/^[1-9]$/.test(ln.key)&&z){const Kn=z.options[Number(ln.key)-1];Kn&&w(Kn)}}};return window.addEventListener("keydown",cn),()=>window.removeEventListener("keydown",cn)},[b,d.length,z,Z,w,B,nn,y,X]);const xn=Math.max(0,Math.ceil(o.remainingMs/1e3));return{budget:Ap,started:b,steps:d,node:z,leaf:Z,isOvertime:o.isOvertime,isWarn:!o.isOvertime&&xn<=mS,elapsedSeconds:Math.floor(o.elapsedMs/1e3),remainingSeconds:xn,overSeconds:Math.floor(o.overtimeMs/1e3),showTemplate:M,toggleTemplate:X,stageRef:L,start:y,pick:w,backtrack:B,backtrackTo:V,reset:nn}}function _l({children:o}){return r.jsx("kbd",{className:Q.kbd,"aria-hidden":"true",children:o})}function io({text:o,sign:b,tone:p,caption:d,label:E}){return r.jsxs("div",{className:we(Q.timer,Q[p]),role:"timer","aria-live":"off","aria-label":E,children:[r.jsxs("span",{className:Q.cells,"aria-hidden":"true",children:[r.jsx("span",{className:we(Q.cell,Q.signCell),children:b?"+":""}),o.split("").map((M,C)=>M===":"?r.jsx("span",{className:Q.colon,children:":"},C):r.jsx("span",{className:Q.cell,children:M},C))]}),r.jsx("span",{className:Q.timerCaption,"aria-hidden":"true",children:d})]})}function xS({run:o}){if(!o.started){const p=mr(o.budget);return r.jsx(io,{text:p,sign:!1,tone:"idle",caption:"budget",label:`Budget ${p}`})}if(o.leaf){const p=mr(o.elapsedSeconds);return r.jsx(io,{text:p,sign:!1,tone:o.isOvertime?"over":"ok",caption:"taken",label:`Time taken ${p}`})}if(o.isOvertime){const p=mr(o.overSeconds);return r.jsx(io,{text:p,sign:!0,tone:"over",caption:"over budget",label:`${p} over budget`})}const b=mr(o.remainingSeconds);return r.jsx(io,{text:b,sign:!1,tone:o.isWarn?"warn":"ok",caption:"left",label:`${b} left`})}function _S({run:o}){const{started:b,steps:p,leaf:d,node:E}=o,M=b&&!d&&!E,C=!d&&!M;return r.jsx("nav",{className:Q.line,"aria-label":"Your path so far",children:r.jsxs("ol",{className:Q.stops,children:[p.map((L,H)=>r.jsx("li",{className:we(Q.stop,Q.answered),children:r.jsxs("button",{type:"button",className:Q.stopButton,title:`${L.question} ${L.option.cue}`,"aria-label":`Back to question ${H+1}: ${L.question} You picked: ${L.option.cue}`,onClick:()=>o.backtrackTo(H),children:[r.jsx("span",{className:Q.dot,"aria-hidden":"true"}),r.jsx("span",{className:Q.cue,children:L.option.cue})]})},H)),C&&r.jsx("li",{className:we(Q.stop,Q.current,Q.dashedNext),"aria-current":"step",children:r.jsxs("span",{className:Q.stopInner,children:[r.jsx("span",{className:Q.dot,"aria-hidden":"true"}),r.jsx("span",{className:Q.srOnly,children:b?`Question ${p.length+1}, current`:"Ready to start"})]})}),d&&r.jsx("li",{className:we(Q.stop,Q.reached),"aria-current":"step",children:r.jsxs("span",{className:Q.stopInner,children:[r.jsx("span",{className:Q.dot,"aria-hidden":"true"}),r.jsxs("span",{className:Q.srOnly,children:["Result: ",d.name]})]})}),C&&r.jsx("li",{className:we(Q.stop,Q.end),"aria-hidden":"true",children:r.jsx("span",{className:Q.stopInner,children:r.jsx("span",{className:Q.dot})})}),M&&r.jsx("li",{className:we(Q.stop,Q.fault),"aria-current":"step",children:r.jsxs("span",{className:Q.stopInner,children:[r.jsx("span",{className:Q.dot,"aria-hidden":"true"}),r.jsx("span",{className:Q.srOnly,children:"This path leads nowhere"})]})})]})})}function ro({label:o,value:b,run:p}){return r.jsxs("header",{className:Q.strip,children:[r.jsxs("p",{className:Q.stripTitle,children:[o,r.jsx("span",{className:Q.stripValue,children:b})]}),r.jsx(xS,{run:p})]})}function Zu({run:o}){return r.jsxs("footer",{className:Q.footer,children:[o.started&&(o.node||o.leaf)&&r.jsxs("button",{type:"button",className:Q.plain,onClick:o.backtrack,disabled:o.steps.length===0,"aria-keyshortcuts":"Backspace",children:["Backtrack ",r.jsx(_l,{children:"Bksp"})]}),r.jsxs("button",{type:"button",className:Q.plain,onClick:o.reset,"aria-keyshortcuts":"Escape",children:["Reset ",r.jsx(_l,{children:"Esc"})]})]})}function kp({leaf:o}){return r.jsx("a",{className:Q.docsLink,href:o.docsUrl,target:"_blank",rel:"noreferrer",children:"Read the docs for this pattern"})}function TS({leaf:o}){const b=BT(o.id);return b.length===0?r.jsxs("div",{className:we(Q.templates,Q.note),children:[r.jsxs("p",{children:[r.jsx("strong",{children:"No template yet"})," for this pattern variant."]}),r.jsx("p",{children:o.summary}),r.jsx(kp,{leaf:o})]}):r.jsxs("div",{className:Q.templates,children:[b.map((p,d)=>r.jsx(u,{title:p.title,children:Wu.map(E=>r.jsx(u.Tab,{language:E,code:p.code[E]},E))},`${o.id}-${d}`)),r.jsx(kp,{leaf:o})]})}function SS(){const o=yS(),b=()=>r.jsxs(r.Fragment,{children:[r.jsx(ro,{run:o,label:"Procedure",value:"Ready"}),r.jsxs("div",{className:Q.body,children:[r.jsxs("h2",{ref:o.stageRef,tabIndex:-1,className:Q.question,children:["Name the pattern in ",o.budget," seconds"]}),r.jsx("p",{className:Q.lead,children:"Open the problem, then pick the cue that sounds most like it. Overtime is shown, not enforced."}),r.jsx("div",{className:Q.actions,children:r.jsxs("button",{type:"button",className:Q.primary,onClick:o.start,"aria-keyshortcuts":"Enter",children:["Start ",r.jsx(_l,{children:"Enter"})]})})]},"idle")]}),p=C=>r.jsxs(r.Fragment,{children:[r.jsx(ro,{run:o,label:"Procedure",value:`Q${o.steps.length+1}`}),r.jsxs("div",{className:Q.body,children:[r.jsx("h2",{ref:o.stageRef,tabIndex:-1,className:Q.question,children:C.question}),r.jsx("ol",{className:Q.options,children:C.options.map((L,H)=>r.jsx("li",{children:r.jsxs("button",{type:"button",className:Q.option,onClick:()=>o.pick(L),"aria-keyshortcuts":H<9?String(H+1):void 0,children:[H<9&&r.jsx(_l,{children:H+1}),r.jsx("span",{className:Q.optionCue,children:L.cue})]})},L.cue))})]},C.id),r.jsx(Zu,{run:o})]}),d=C=>{const L=mr(o.elapsedSeconds);return r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:Q.srOnly,role:"status","aria-live":"polite",children:["Pattern found: ",C.name,", ",C.pattern,". Time taken ",L,"."]}),r.jsx(ro,{run:o,label:"Memory item",value:"Result"}),r.jsxs("div",{className:Q.body,children:[r.jsx("h2",{ref:o.stageRef,tabIndex:-1,className:Q.resultName,children:C.name}),r.jsxs("dl",{className:Q.fields,children:[r.jsxs("div",{className:Q.field,children:[r.jsx("dt",{children:"Pattern"}),r.jsx("dd",{children:C.pattern})]}),r.jsxs("div",{className:Q.field,children:[r.jsx("dt",{children:"Time taken"}),r.jsxs("dd",{children:[r.jsx("span",{className:Q.figure,children:L}),o.isOvertime?r.jsxs("span",{className:Q.overNote,children:["+",mr(o.overSeconds)," over the ",o.budget,"s budget"]}):r.jsxs("span",{className:Q.okNote,children:["within the ",o.budget,"s budget"]})]})]})]}),r.jsx("p",{className:Q.summary,children:C.summary}),r.jsx("div",{className:Q.actions,children:r.jsxs("button",{type:"button",className:Q.primary,"aria-expanded":o.showTemplate,"aria-keyshortcuts":"T",onClick:o.toggleTemplate,children:[o.showTemplate?"Hide template":"View template"," ",r.jsx(_l,{children:"T"})]})}),o.showTemplate&&r.jsx(TS,{leaf:C})]},C.id),r.jsx(Zu,{run:o})]})},E=()=>r.jsxs(r.Fragment,{children:[r.jsx(ro,{run:o,label:"Procedure",value:"Fault"}),r.jsxs("div",{className:Q.body,children:[r.jsx("h2",{ref:o.stageRef,tabIndex:-1,className:Q.question,children:"This path leads nowhere"}),r.jsx("p",{className:Q.lead,children:"The cue you picked has no next check. Reset and run the procedure again."})]},"broken"),r.jsx(Zu,{run:o})]});let M;return o.started?o.leaf?M=d(o.leaf):o.node?M=p(o.node):M=E():M=b(),r.jsxs("div",{className:Q.finder,children:[r.jsx(_S,{run:o}),r.jsx("section",{className:Q.card,"aria-label":"Procedure",children:M})]})}const jS="_container_1htmy_1",NS="_sectionHeader_1htmy_7",Xn={container:jS,sectionHeader:NS},wS="_container_13ll4_1",ES="_label_13ll4_13",OS="_tableWrapper_13ll4_21",AS="_dataRow_13ll4_30",kS="_red_13ll4_51",MS="_oliveGreen_13ll4_55",CS="_green_13ll4_59",RS="_orange_13ll4_63",zS="_yellow_13ll4_67",DS="_gray_13ll4_71",g={container:wS,label:ES,tableWrapper:OS,dataRow:AS,red:kS,oliveGreen:MS,green:CS,orange:RS,yellow:zS,gray:DS};function LS(){const o={red:"var(--color-red-alpha)",orange:"var(--color-orange-alpha)",yellow:"var(--color-yellow-alpha)",oliveGreen:"var(--color-olive-green-alpha)",green:"var(--color-green-alpha)"};return r.jsx("section",{id:"bigo-chart",children:r.jsxs("div",{className:g.container,children:[r.jsx("h3",{children:"Big-O Complexity Chart"}),r.jsxs("svg",{id:"chart",viewBox:"0 0 800 500",style:{color:"var(--pd-text)"},children:[r.jsx("path",{d:"M50 450 L 50 0 L 800 0 L 800 450 Z",fill:o.red}),r.jsx("path",{d:"M50 450 L 800 0 L 800 450 Z",fill:o.orange}),r.jsx("path",{d:"M50 450 L 800 450 L 800 330 Z",fill:o.yellow}),r.jsx("path",{d:"M50 450 L 800 450 L 800 410 Z",fill:o.oliveGreen}),r.jsx("path",{d:"M50 450 L 800 450 L 800 440 Z",fill:o.green}),r.jsx("path",{d:"M50 0 L 50 450 L 800 450",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),r.jsx("path",{d:"M50 448 L 800 448",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),r.jsx("text",{x:"700",y:"438",fill:"currentColor",children:"O(log n), O(1)"}),r.jsx("path",{d:"M50 450 L 800 400",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),r.jsx("text",{x:"760",y:"390",fill:"currentColor",children:"O(n)"}),r.jsx("path",{d:"M50 450 Q 400 350, 800 150",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),r.jsx("text",{x:"630",y:"190",fill:"currentColor",children:"O(n log n)"}),r.jsx("path",{d:"M50 450 Q 180 380, 250 0",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),r.jsx("text",{x:"260",y:"30",fill:"currentColor",children:"O(n^2)"}),r.jsx("path",{d:"M50 450 C 100 430, 120 350, 120 0",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),r.jsx("text",{x:"125",y:"20",fill:"currentColor",children:"O(2^n)"}),r.jsx("path",{d:"M50 450 C 80 450, 80 350, 80 0",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),r.jsx("text",{x:"80",y:"20",fill:"currentColor",children:"O(n!)"}),r.jsx("text",{className:g.label,x:"0",y:"0",transform:"translate(30 230) rotate(-90)",fill:"currentColor",children:"Operations"}),r.jsx("text",{className:g.label,x:"0",y:"0",transform:"translate(420 470)",fill:"currentColor",children:"Elements"})]})]})})}function BS(){return r.jsx("section",{id:"bigo-data-structure-operations-table",children:r.jsxs("div",{className:g.container,children:[r.jsx("h3",{children:"Data Structure Operations"}),r.jsx("div",{className:g.tableWrapper,children:r.jsx("table",{className:g.table,children:r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("th",{children:"Data Structure"}),r.jsx("th",{colSpan:8,children:"Time Complexity"}),r.jsx("th",{children:"Space Complexity"})]}),r.jsxs("tr",{children:[r.jsx("th",{}),r.jsx("th",{colSpan:4,children:"Average"}),r.jsx("th",{colSpan:4,children:"Worst"}),r.jsx("th",{children:"Worst"})]}),r.jsxs("tr",{children:[r.jsx("th",{}),r.jsx("th",{children:"Access"}),r.jsx("th",{children:"Search"}),r.jsx("th",{children:"Insertion"}),r.jsx("th",{children:"Deletion"}),r.jsx("th",{children:"Access"}),r.jsx("th",{children:"Search"}),r.jsx("th",{children:"Insertion"}),r.jsx("th",{children:"Deletion"}),r.jsx("th",{})]}),r.jsxs("tr",{className:g.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Array_data_structure",target:"_blank",children:"Array"})}),r.jsx("td",{className:g.green,children:"Θ(1)"}),r.jsx("td",{className:g.yellow,children:"Θ(n)"}),r.jsx("td",{className:g.yellow,children:"Θ(n)"}),r.jsx("td",{className:g.yellow,children:"Θ(n)"}),r.jsx("td",{className:g.green,children:"O(1)"}),r.jsx("td",{className:g.yellow,children:"O(n)"}),r.jsx("td",{className:g.yellow,children:"O(n)"}),r.jsx("td",{className:g.yellow,children:"O(n)"}),r.jsx("td",{className:g.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:g.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Stack_(abstract_data_type)",target:"_blank",children:"Stack"})}),r.jsx("td",{className:g.yellow,children:"Θ(n)"}),r.jsx("td",{className:g.yellow,children:"Θ(n)"}),r.jsx("td",{className:g.green,children:"Θ(1)"}),r.jsx("td",{className:g.green,children:"Θ(1)"}),r.jsx("td",{className:g.yellow,children:"O(n)"}),r.jsx("td",{className:g.yellow,children:"O(n)"}),r.jsx("td",{className:g.green,children:"O(1)"}),r.jsx("td",{className:g.green,children:"O(1)"}),r.jsx("td",{className:g.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:g.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Queue_(abstract_data_type)",target:"_blank",children:"Queue"})}),r.jsx("td",{className:g.yellow,children:"Θ(n)"}),r.jsx("td",{className:g.yellow,children:"Θ(n)"}),r.jsx("td",{className:g.green,children:"Θ(1)"}),r.jsx("td",{className:g.green,children:"Θ(1)"}),r.jsx("td",{className:g.yellow,children:"O(n)"}),r.jsx("td",{className:g.yellow,children:"O(n)"}),r.jsx("td",{className:g.green,children:"O(1)"}),r.jsx("td",{className:g.green,children:"O(1)"}),r.jsx("td",{className:g.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:g.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Singly_linked_list#Singly_linked_lists",target:"_blank",children:"Singly-Linked List"})}),r.jsx("td",{className:g.yellow,children:"Θ(n)"}),r.jsx("td",{className:g.yellow,children:"Θ(n)"}),r.jsx("td",{className:g.green,children:"Θ(1)"}),r.jsx("td",{className:g.green,children:"Θ(1)"}),r.jsx("td",{className:g.yellow,children:"O(n)"}),r.jsx("td",{className:g.yellow,children:"O(n)"}),r.jsx("td",{className:g.green,children:"O(1)"}),r.jsx("td",{className:g.green,children:"O(1)"}),r.jsx("td",{className:g.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:g.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Doubly_linked_list",target:"_blank",children:"Doubly-Linked List"})}),r.jsx("td",{className:g.yellow,children:"Θ(n)"}),r.jsx("td",{className:g.yellow,children:"Θ(n)"}),r.jsx("td",{className:g.green,children:"Θ(1)"}),r.jsx("td",{className:g.green,children:"Θ(1)"}),r.jsx("td",{className:g.yellow,children:"O(n)"}),r.jsx("td",{className:g.yellow,children:"O(n)"}),r.jsx("td",{className:g.green,children:"O(1)"}),r.jsx("td",{className:g.green,children:"O(1)"}),r.jsx("td",{className:g.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:g.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Skip_list",target:"_blank",children:"Skip List"})}),r.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:g.yellow,children:"O(n)"}),r.jsx("td",{className:g.yellow,children:"O(n)"}),r.jsx("td",{className:g.yellow,children:"O(n)"}),r.jsx("td",{className:g.yellow,children:"O(n)"}),r.jsx("td",{className:g.orange,children:"O(n log(n))"})]}),r.jsxs("tr",{className:g.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Hash_table",target:"_blank",children:"Hash Table"})}),r.jsx("td",{className:g.gray,children:"N/A"}),r.jsx("td",{className:g.green,children:"Θ(1)"}),r.jsx("td",{className:g.green,children:"Θ(1)"}),r.jsx("td",{className:g.green,children:"Θ(1)"}),r.jsx("td",{className:g.gray,children:"N/A"}),r.jsx("td",{className:g.yellow,children:"O(n)"}),r.jsx("td",{className:g.yellow,children:"O(n)"}),r.jsx("td",{className:g.yellow,children:"O(n)"}),r.jsx("td",{className:g.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:g.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Binary_search_tree",target:"_blank",children:"Binary Search Tree"})}),r.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:g.yellow,children:"O(n)"}),r.jsx("td",{className:g.yellow,children:"O(n)"}),r.jsx("td",{className:g.yellow,children:"O(n)"}),r.jsx("td",{className:g.yellow,children:"O(n)"}),r.jsx("td",{className:g.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:g.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"https://en.wikipedia.org/wiki/Cartesian_tree",target:"_blank",children:"Cartesian Tree"})}),r.jsx("td",{className:g.gray,children:"N/A"}),r.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:g.gray,children:"N/A"}),r.jsx("td",{className:g.yellow,children:"O(n)"}),r.jsx("td",{className:g.yellow,children:"O(n)"}),r.jsx("td",{className:g.yellow,children:"O(n)"}),r.jsx("td",{className:g.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:g.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/B_tree",target:"_blank",children:"B-Tree"})}),r.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:g.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:g.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Red-black_tree",target:"_blank",children:"Red-Black Tree"})}),r.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:g.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:g.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"https://en.wikipedia.org/wiki/Splay_tree",target:"_blank",children:"Splay Tree"})}),r.jsx("td",{className:g.gray,children:"N/A"}),r.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:g.gray,children:"N/A"}),r.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:g.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:g.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/AVL_tree",target:"_blank",children:"AVL Tree"})}),r.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:g.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:g.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/K-d_tree",target:"_blank",children:"KD Tree"})}),r.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:g.yellow,children:"O(n)"}),r.jsx("td",{className:g.yellow,children:"O(n)"}),r.jsx("td",{className:g.yellow,children:"O(n)"}),r.jsx("td",{className:g.yellow,children:"O(n)"}),r.jsx("td",{className:g.yellow,children:"O(n)"})]})]})})})]})})}function US(){return r.jsx("section",{id:"bigo-sorting-algorithms-table",children:r.jsxs("div",{className:g.container,children:[r.jsx("h3",{children:"Array Sorting Algorithms"}),r.jsx("div",{className:g.tableWrapper,children:r.jsx("table",{children:r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("th",{children:"Algorithm"}),r.jsx("th",{colSpan:3,children:"Time Complexity"}),r.jsx("th",{children:"Space Complexity"})]}),r.jsxs("tr",{children:[r.jsx("th",{}),r.jsx("th",{children:"Best"}),r.jsx("th",{children:"Average"}),r.jsx("th",{children:"Worst"}),r.jsx("th",{children:"Worst"})]}),r.jsxs("tr",{className:g.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Quicksort",target:"_blank",children:"Quicksort"})}),r.jsx("td",{className:g.orange,children:"Ω(n log(n))"}),r.jsx("td",{className:g.orange,children:"Θ(n log(n))"}),r.jsx("td",{className:g.red,children:"O(n^2)"}),r.jsx("td",{className:g.oliveGreen,children:"O(log(n))"})]}),r.jsxs("tr",{className:g.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Merge_sort",target:"_blank",children:"Mergesort"})}),r.jsx("td",{className:g.orange,children:"Ω(n log(n))"}),r.jsx("td",{className:g.orange,children:"Θ(n log(n))"}),r.jsx("td",{className:g.orange,children:"O(n log(n))"}),r.jsx("td",{className:g.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:g.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Timsort",target:"_blank",children:"Timsort"})}),r.jsx("td",{className:g.yellow,children:"Ω(n)"}),r.jsx("td",{className:g.orange,children:"Θ(n log(n))"}),r.jsx("td",{className:g.orange,children:"O(n log(n))"}),r.jsx("td",{className:g.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:g.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Heapsort",target:"_blank",children:"Heapsort"})}),r.jsx("td",{className:g.orange,children:"Ω(n log(n))"}),r.jsx("td",{className:g.orange,children:"Θ(n log(n))"}),r.jsx("td",{className:g.orange,children:"O(n log(n))"}),r.jsx("td",{className:g.green,children:"O(1)"})]}),r.jsxs("tr",{className:g.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Bubble_sort",target:"_blank",children:"Bubble Sort"})}),r.jsx("td",{className:g.yellow,children:"Ω(n)"}),r.jsx("td",{className:g.red,children:"Θ(n^2)"}),r.jsx("td",{className:g.red,children:"O(n^2)"}),r.jsx("td",{className:g.green,children:"O(1)"})]}),r.jsxs("tr",{className:g.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Insertion_sort",target:"_blank",children:"Insertion Sort"})}),r.jsx("td",{className:g.yellow,children:"Ω(n)"}),r.jsx("td",{className:g.red,children:"Θ(n^2)"}),r.jsx("td",{className:g.red,children:"O(n^2)"}),r.jsx("td",{className:g.green,children:"O(1)"})]}),r.jsxs("tr",{className:g.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Selection_sort",target:"_blank",children:"Selection Sort"})}),r.jsx("td",{className:g.red,children:"Ω(n^2)"}),r.jsx("td",{className:g.red,children:"Θ(n^2)"}),r.jsx("td",{className:g.red,children:"O(n^2)"}),r.jsx("td",{className:g.green,children:"O(1)"})]}),r.jsxs("tr",{className:g.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"https://en.wikipedia.org/wiki/Tree_sort",target:"_blank",children:"Tree Sort"})}),r.jsx("td",{className:g.orange,children:"Ω(n log(n))"}),r.jsx("td",{className:g.orange,children:"Θ(n log(n))"}),r.jsx("td",{className:g.red,children:"O(n^2)"}),r.jsx("td",{className:g.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:g.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Shellsort",target:"_blank",children:"Shell Sort"})}),r.jsx("td",{className:g.orange,children:"Ω(n log(n))"}),r.jsx("td",{className:g.red,children:"Θ(n(log(n))^2)"}),r.jsx("td",{className:g.red,children:"O(n(log(n))^2)"}),r.jsx("td",{className:g.green,children:"O(1)"})]}),r.jsxs("tr",{className:g.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Bucket_sort",target:"_blank",children:"Bucket Sort"})}),r.jsx("td",{className:g.green,children:"Ω(n+k)"}),r.jsx("td",{className:g.green,children:"Θ(n+k)"}),r.jsx("td",{className:g.red,children:"O(n^2)"}),r.jsx("td",{className:g.yellow,children:"O(n)"})]}),r.jsxs("tr",{className:g.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Radix_sort",target:"_blank",children:"Radix Sort"})}),r.jsx("td",{className:g.green,children:"Ω(nk)"}),r.jsx("td",{className:g.green,children:"Θ(nk)"}),r.jsx("td",{className:g.green,children:"O(nk)"}),r.jsx("td",{className:g.yellow,children:"O(n+k)"})]}),r.jsxs("tr",{className:g.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"https://en.wikipedia.org/wiki/Counting_sort",children:"Counting Sort"})}),r.jsx("td",{className:g.green,children:"Ω(n+k)"}),r.jsx("td",{className:g.green,children:"Θ(n+k)"}),r.jsx("td",{className:g.green,children:"O(n+k)"}),r.jsx("td",{className:g.yellow,children:"O(k)"})]}),r.jsxs("tr",{className:g.dataRow,children:[r.jsx("td",{children:r.jsx("a",{href:"https://en.wikipedia.org/wiki/Cubesort",target:"_blank",children:"Cubesort"})}),r.jsx("td",{className:g.yellow,children:"Ω(n)"}),r.jsx("td",{className:g.orange,children:"Θ(n log(n))"}),r.jsx("td",{className:g.orange,children:"O(n log(n))"}),r.jsx("td",{className:g.yellow,children:"O(n)"})]})]})})})]})})}function HS(){return r.jsxs("div",{className:Xn.container,children:[r.jsx("h2",{className:Xn.sectionHeader,children:"Big O"}),r.jsx(LS,{}),r.jsx(BS,{}),r.jsx(US,{})]})}function qS(){return r.jsxs("div",{className:Xn.container,children:[r.jsx("h2",{className:Xn.sectionHeader,children:"Array"}),r.jsx("section",{id:"array-two-pointers-one-input",children:r.jsxs(u,{title:"two pointers: one input, opposite ends",children:[r.jsx(u.Tab,{code:ev,language:"python"}),r.jsx(u.Tab,{code:tv,language:"javascript"}),r.jsx(u.Tab,{code:av,language:"java"}),r.jsx(u.Tab,{code:iv,language:"cpp"})]})}),r.jsx("section",{id:"array-two-pointers-two-inputs",children:r.jsxs(u,{title:"two pointers: two inputs, exhaust both",children:[r.jsx(u.Tab,{code:rv,language:"python"}),r.jsx(u.Tab,{code:lv,language:"javascript"}),r.jsx(u.Tab,{code:sv,language:"java"}),r.jsx(u.Tab,{code:ov,language:"cpp"})]})}),r.jsx("section",{id:"array-sliding-window",children:r.jsxs(u,{title:"sliding window",children:[r.jsx(u.Tab,{code:Eb,language:"python"}),r.jsx(u.Tab,{code:Ob,language:"javascript"}),r.jsx(u.Tab,{code:Ab,language:"java"}),r.jsx(u.Tab,{code:kb,language:"cpp"})]})}),r.jsx("section",{id:"array-prefix-sum",children:r.jsxs(u,{title:"prefix sum",children:[r.jsx(u.Tab,{code:Sb,language:"python"}),r.jsx(u.Tab,{code:jb,language:"javascript"}),r.jsx(u.Tab,{code:Nb,language:"java"}),r.jsx(u.Tab,{code:wb,language:"cpp"})]})}),r.jsx("section",{id:"array-string-building",children:r.jsxs(u,{title:"efficient string building",children:[r.jsx(u.Tab,{code:Hb,language:"python"}),r.jsx(u.Tab,{code:qb,language:"javascript"}),r.jsx(u.Tab,{code:Gb,language:"java"}),r.jsx(u.Tab,{code:Yb,language:"cpp"})]})})]})}function GS(){return r.jsxs("div",{className:Xn.container,children:[r.jsx("h2",{className:Xn.sectionHeader,children:"Hash Map"}),r.jsx("section",{id:"hashmap-find-number-of-subarrays",children:r.jsxs(u,{title:"find number of subarrays that fit an exact criteria",children:[r.jsx(u.Tab,{code:ab,language:"python"}),r.jsx(u.Tab,{code:ib,language:"javascript"}),r.jsx(u.Tab,{code:rb,language:"java"}),r.jsx(u.Tab,{code:lb,language:"cpp"})]})}),r.jsx("section",{id:"hashmap-sliding-window",children:r.jsxs(u,{title:"sliding window",children:[r.jsx(u.Tab,{code:sb,language:"python"}),r.jsx(u.Tab,{code:ob,language:"javascript"}),r.jsx(u.Tab,{code:cb,language:"java"}),r.jsx(u.Tab,{code:ub,language:"cpp"})]})})]})}function YS(){return r.jsxs("div",{className:Xn.container,children:[r.jsx("h2",{className:Xn.sectionHeader,children:"Linked List"}),r.jsx("section",{id:"linkedlist-fast-and-slow-pointer",children:r.jsxs(u,{title:"fast and slow pointer",children:[r.jsx(u.Tab,{code:pb,language:"python"}),r.jsx(u.Tab,{code:mb,language:"javascript"}),r.jsx(u.Tab,{code:bb,language:"java"}),r.jsx(u.Tab,{code:vb,language:"cpp"})]})}),r.jsx("section",{id:"linkedlist-reverse",children:r.jsxs(u,{title:"reverse linked list",children:[r.jsx(u.Tab,{code:yb,language:"python"}),r.jsx(u.Tab,{code:xb,language:"javascript"}),r.jsx(u.Tab,{code:_b,language:"java"}),r.jsx(u.Tab,{code:Tb,language:"cpp"})]})})]})}function VS(){return r.jsxs("div",{className:Xn.container,children:[r.jsx("h2",{className:Xn.sectionHeader,children:"Stack"}),r.jsx("section",{id:"stack-monotonic-increasing",children:r.jsxs(u,{title:"monotonic increasing stack",children:[r.jsx(u.Tab,{code:Db,language:"python"}),r.jsx(u.Tab,{code:Lb,language:"javascript"}),r.jsx(u.Tab,{code:Bb,language:"java"}),r.jsx(u.Tab,{code:Ub,language:"cpp"})]})}),r.jsx("section",{id:"stack-monotonic-decreasing",children:r.jsxs(u,{title:"monotonic decreasing stack",children:[r.jsx(u.Tab,{code:Mb,language:"python"}),r.jsx(u.Tab,{code:Cb,language:"javascript"}),r.jsx(u.Tab,{code:Rb,language:"java"}),r.jsx(u.Tab,{code:zb,language:"cpp"})]})})]})}function KS(){return r.jsxs("div",{className:Xn.container,children:[r.jsx("h2",{className:Xn.sectionHeader,children:"Binary Tree"}),r.jsx("section",{id:"tree-dfs-recursive",children:r.jsxs(u,{title:"DFS (recursive)",children:[r.jsx(u.Tab,{code:Pb,language:"python"}),r.jsx(u.Tab,{code:Wb,language:"javascript"}),r.jsx(u.Tab,{code:$b,language:"java"}),r.jsx(u.Tab,{code:nv,language:"cpp"})]})}),r.jsx("section",{id:"tree-dfs-iterative",children:r.jsxs(u,{title:"DFS (iterative)",children:[r.jsx(u.Tab,{code:Qb,language:"python"}),r.jsx(u.Tab,{code:Jb,language:"javascript"}),r.jsx(u.Tab,{code:Zb,language:"java"}),r.jsx(u.Tab,{code:Fb,language:"cpp"})]})}),r.jsx("section",{id:"tree-bfs",children:r.jsxs(u,{title:"BFS",children:[r.jsx(u.Tab,{code:Vb,language:"python"}),r.jsx(u.Tab,{code:Kb,language:"javascript"}),r.jsx(u.Tab,{code:Ib,language:"java"}),r.jsx(u.Tab,{code:Xb,language:"cpp"})]})})]})}function IS(){return r.jsxs("div",{className:Xn.container,children:[r.jsx("h2",{className:Xn.sectionHeader,children:"Graph"}),r.jsx("section",{id:"graph-dfs-recursive",children:r.jsxs(u,{title:"DFS (recursive)",children:[r.jsx(u.Tab,{code:B0,language:"python"}),r.jsx(u.Tab,{code:U0,language:"javascript"}),r.jsx(u.Tab,{code:H0,language:"java"}),r.jsx(u.Tab,{code:q0,language:"cpp"})]})}),r.jsx("section",{id:"graph-dfs-iterative",children:r.jsxs(u,{title:"DFS (iterative)",children:[r.jsx(u.Tab,{code:R0,language:"python"}),r.jsx(u.Tab,{code:z0,language:"javascript"}),r.jsx(u.Tab,{code:D0,language:"java"}),r.jsx(u.Tab,{code:L0,language:"cpp"})]})}),r.jsx("section",{id:"graph-bfs",children:r.jsxs(u,{title:"BFS",children:[r.jsx(u.Tab,{code:A0,language:"python"}),r.jsx(u.Tab,{code:k0,language:"javascript"}),r.jsx(u.Tab,{code:M0,language:"java"}),r.jsx(u.Tab,{code:C0,language:"cpp"})]})}),r.jsx("section",{id:"graph-dijkstra",children:r.jsxs(u,{title:"Dijkstra (shortest path)",children:[r.jsx(u.Tab,{code:G0,language:"python"}),r.jsx(u.Tab,{code:Y0,language:"javascript"}),r.jsx(u.Tab,{code:V0,language:"java"}),r.jsx(u.Tab,{code:K0,language:"cpp"})]})}),r.jsx("section",{id:"graph-bellman-ford",children:r.jsxs(u,{title:"Bellman-Ford (shortest path)",children:[r.jsx(u.Tab,{code:N0,language:"python"}),r.jsx(u.Tab,{code:w0,language:"javascript"}),r.jsx(u.Tab,{code:E0,language:"java"}),r.jsx(u.Tab,{code:O0,language:"cpp"})]})}),r.jsx("section",{id:"graph-kahn",children:r.jsxs(u,{title:"Kahn (topological sort)",children:[r.jsx(u.Tab,{code:I0,language:"python"}),r.jsx(u.Tab,{code:X0,language:"javascript"}),r.jsx(u.Tab,{code:Q0,language:"java"}),r.jsx(u.Tab,{code:J0,language:"cpp"})]})}),r.jsx("section",{id:"graph-kruskal",children:r.jsxs(u,{title:"Kruskal (mst)",children:[r.jsx(u.Tab,{code:Z0,language:"python"}),r.jsx(u.Tab,{code:F0,language:"javascript"}),r.jsx(u.Tab,{code:P0,language:"java"}),r.jsx(u.Tab,{code:W0,language:"cpp"})]})}),r.jsx("section",{id:"graph-prim",children:r.jsxs(u,{title:"Prim (mst)",children:[r.jsx(u.Tab,{code:$0,language:"python"}),r.jsx(u.Tab,{code:nb,language:"javascript"}),r.jsx(u.Tab,{code:eb,language:"java"}),r.jsx(u.Tab,{code:tb,language:"cpp"})]})})]})}function XS(){return r.jsxs("div",{className:Xn.container,children:[r.jsx("h2",{className:Xn.sectionHeader,children:"Heap"}),r.jsx("section",{id:"heap-find-top-k-elements",children:r.jsxs(u,{title:"find top k elements",children:[r.jsx(u.Tab,{code:db,language:"python"}),r.jsx(u.Tab,{code:fb,language:"javascript"}),r.jsx(u.Tab,{code:hb,language:"java"}),r.jsx(u.Tab,{code:gb,language:"cpp"})]})})]})}function QS(){return r.jsxs("div",{className:Xn.container,children:[r.jsx("h2",{className:Xn.sectionHeader,children:"Binary Search"}),r.jsx("section",{id:"binarysearch-binary-search",children:r.jsxs(u,{title:"binary search",children:[r.jsx(u.Tab,{code:Ip,language:"python"}),r.jsx(u.Tab,{code:Xp,language:"javascript"}),r.jsx(u.Tab,{code:Qp,language:"java"}),r.jsx(u.Tab,{code:Jp,language:"cpp"})]})}),r.jsx("section",{id:"binarysearch-duplicate-elements-left-insertion",children:r.jsxs(u,{title:"duplicate elements, left-most insertion point",children:[r.jsx(u.Tab,{code:am,language:"python"}),r.jsx(u.Tab,{code:im,language:"javascript"}),r.jsx(u.Tab,{code:rm,language:"java"}),r.jsx(u.Tab,{code:lm,language:"cpp"})]})}),r.jsx("section",{id:"binarysearch-duplicate-elements-right-insertion",children:r.jsxs(u,{title:"duplicate elements, right-most insertion point",children:[r.jsx(u.Tab,{code:sm,language:"python"}),r.jsx(u.Tab,{code:om,language:"javascript"}),r.jsx(u.Tab,{code:cm,language:"java"}),r.jsx(u.Tab,{code:um,language:"cpp"})]})}),r.jsx("section",{id:"binarysearch-greedy-minimum",children:r.jsxs(u,{title:"greedy (minimum)",children:[r.jsx(u.Tab,{code:$p,language:"python"}),r.jsx(u.Tab,{code:nm,language:"javascript"}),r.jsx(u.Tab,{code:em,language:"java"}),r.jsx(u.Tab,{code:tm,language:"cpp"})]})}),r.jsx("section",{id:"binarysearch-greedy-maximum",children:r.jsxs(u,{title:"greedy (maximum)",children:[r.jsx(u.Tab,{code:Zp,language:"python"}),r.jsx(u.Tab,{code:Fp,language:"javascript"}),r.jsx(u.Tab,{code:Pp,language:"java"}),r.jsx(u.Tab,{code:Wp,language:"cpp"})]})})]})}function JS(){return r.jsxs("div",{className:Xn.container,children:[r.jsx("h2",{className:Xn.sectionHeader,children:"Backtracking"}),r.jsx("section",{id:"backtracking-backtracking",children:r.jsxs(u,{title:"backtracking",children:[r.jsx(u.Tab,{code:Gp,language:"python"}),r.jsx(u.Tab,{code:Yp,language:"javascript"}),r.jsx(u.Tab,{code:Vp,language:"java"}),r.jsx(u.Tab,{code:Kp,language:"cpp"})]})})]})}function ZS(){return r.jsxs("div",{className:Xn.container,children:[r.jsx("h2",{className:Xn.sectionHeader,children:"Dynamic Programming"}),r.jsx("section",{id:"dp-top-down",children:r.jsxs(u,{title:"DP top-down",children:[r.jsx(u.Tab,{code:r0,language:"python"}),r.jsx(u.Tab,{code:l0,language:"javascript"}),r.jsx(u.Tab,{code:s0,language:"java"}),r.jsx(u.Tab,{code:o0,language:"cpp"})]})}),r.jsx("section",{id:"dp-bottom-up",children:r.jsxs(u,{title:"DP bottom-up",children:[r.jsx(u.Tab,{code:Pm,language:"python"}),r.jsx(u.Tab,{code:Wm,language:"javascript"}),r.jsx(u.Tab,{code:$m,language:"java"}),r.jsx(u.Tab,{code:n0,language:"cpp"})]})}),r.jsx("section",{id:"dp-kadane",children:r.jsxs(u,{title:"Kadane (max-sum subarray)",children:[r.jsx(u.Tab,{code:e0,language:"python"}),r.jsx(u.Tab,{code:t0,language:"javascript"}),r.jsx(u.Tab,{code:a0,language:"java"}),r.jsx(u.Tab,{code:i0,language:"cpp"})]})})]})}function FS(){return r.jsxs("div",{className:Xn.container,children:[r.jsx("h2",{className:Xn.sectionHeader,children:"Bit Manipulation"}),r.jsx("section",{id:"bitmanipulation-test-kth-bit",children:r.jsxs(u,{title:"test kth-bit",children:[r.jsx(u.Tab,{code:Vm,language:"python"}),r.jsx(u.Tab,{code:Km,language:"javascript"}),r.jsx(u.Tab,{code:Im,language:"java"}),r.jsx(u.Tab,{code:Xm,language:"cpp"})]})}),r.jsx("section",{id:"bitmanipulation-set-kth-bit",children:r.jsxs(u,{title:"set kth bit",children:[r.jsx(u.Tab,{code:Dm,language:"python"}),r.jsx(u.Tab,{code:Lm,language:"javascript"}),r.jsx(u.Tab,{code:Bm,language:"java"}),r.jsx(u.Tab,{code:Um,language:"cpp"})]})}),r.jsx("section",{id:"bitmanipulation-clear-kth-bit",children:r.jsxs(u,{title:"clear kth bit",children:[r.jsx(u.Tab,{code:pm,language:"python"}),r.jsx(u.Tab,{code:mm,language:"javascript"}),r.jsx(u.Tab,{code:bm,language:"java"}),r.jsx(u.Tab,{code:vm,language:"cpp"})]})}),r.jsx("section",{id:"bitmanipulation-toggle-kth-bit",children:r.jsxs(u,{title:"toggle kth bit",children:[r.jsx(u.Tab,{code:Qm,language:"python"}),r.jsx(u.Tab,{code:Jm,language:"javascript"}),r.jsx(u.Tab,{code:Zm,language:"java"}),r.jsx(u.Tab,{code:Fm,language:"cpp"})]})}),r.jsx("section",{id:"bitmanipulation-get-rightmost-bit",children:r.jsxs(u,{title:"get rightmost bit",children:[r.jsx(u.Tab,{code:Em,language:"python"}),r.jsx(u.Tab,{code:Om,language:"javascript"}),r.jsx(u.Tab,{code:Am,language:"java"}),r.jsx(u.Tab,{code:km,language:"cpp"})]})}),r.jsx("section",{id:"bitmanipulation-count-set-bits",children:r.jsxs(u,{title:"count set bits",children:[r.jsx(u.Tab,{code:ym,language:"python"}),r.jsx(u.Tab,{code:xm,language:"javascript"}),r.jsx(u.Tab,{code:_m,language:"java"}),r.jsx(u.Tab,{code:Tm,language:"cpp"})]})}),r.jsx("section",{id:"bitmanipulation-multiply-power-of-two",children:r.jsxs(u,{title:"multiply by 2^k",children:[r.jsx(u.Tab,{code:Mm,language:"python"}),r.jsx(u.Tab,{code:Cm,language:"javascript"}),r.jsx(u.Tab,{code:Rm,language:"java"}),r.jsx(u.Tab,{code:zm,language:"cpp"})]})}),r.jsx("section",{id:"bitmanipulation-divide-power-of-two",children:r.jsxs(u,{title:"divide by 2^k",children:[r.jsx(u.Tab,{code:Sm,language:"python"}),r.jsx(u.Tab,{code:jm,language:"javascript"}),r.jsx(u.Tab,{code:Nm,language:"java"}),r.jsx(u.Tab,{code:wm,language:"cpp"})]})}),r.jsx("section",{id:"bitmanipulation-check-power-of-two",children:r.jsxs(u,{title:"check if number is power of 2",children:[r.jsx(u.Tab,{code:dm,language:"python"}),r.jsx(u.Tab,{code:fm,language:"javascript"}),r.jsx(u.Tab,{code:hm,language:"java"}),r.jsx(u.Tab,{code:gm,language:"cpp"})]})}),r.jsx("section",{id:"bitmanipulation-swap-variables",children:r.jsxs(u,{title:"swap two variables",children:[r.jsx(u.Tab,{code:Hm,language:"python"}),r.jsx(u.Tab,{code:qm,language:"javascript"}),r.jsx(u.Tab,{code:Gm,language:"java"}),r.jsx(u.Tab,{code:Ym,language:"cpp"})]})})]})}const PS=`def fn(matrix: list[list[int]]):
    r = len(matrix)
    c = len(matrix[0])

    create_matrix = [[0 for _ in range(c)] for _ in range(r)]
    copy_matrix = [row[:] for row in matrix]
`,WS=`def fn(matrix: list[list[int]]):
    r = len(matrix)
    c = len(matrix[0])

    main_diagonal = [matrix[i][i] for i in range(min(r, c))]
    anti_diagonal = [matrix[i][~i] for i in range(min(r, c))]
`,$S=`def fn(matrix: list[list[int]]):
    r = len(matrix)
    c = len(matrix[0])

    transpose_tuple = zip(*matrix)
    transpose = [list(row) for row in transpose_tuple]
    rotate_left = transpose[::-1]
    rotate_right = [row[::-1] for row in transpose]
`,nj=`const fn = (matrix) => {
    const r = matrix.length;
    const c = matrix[0].length;

    const createMatrix = Array.from({ length: r }, () => Array(c).fill(0))
    const copyMatrix = matrix.map(row => [...row])
}
`,ej=`const fn = (matrix) => {
    const r = matrix.length
    const c = matrix[0].length

    const mainDiagonal = Array.from({ length: Math.min(r, c) }, (_, i) => matrix[i][i])
    const antiDiagonal = Array.from({ length: Math.min(r, c) }, (_, i) => matrix[i][~i])
}
`,tj=`const fn = (matrix) => {
    const r = matrix.length
    const c = matrix[0].length

    const transposeTuple = matrix[0].map((_, i) => matrix.map(row => row[i]))
    const transpose = transposeTuple.map(row => [...row])
    const rotateLeft = transpose.reverse()
    const rotateRight = transpose.map(row => row.reverse())
}
`,aj=`import java.util.ArrayList;
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
`,ij=`import java.util.ArrayList;
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
`,rj=`import java.util.ArrayList;
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
`,lj=`#include <vector>

using namespace std;


void fn(vector<vector<int>>& matrix) {
    int r = matrix.size();
    int c = matrix[0].size();

    vector<vector<int>> create_matrix(r, vector<int>(c, 0));
    vector<vector<int>> copy_matrix(matrix);
}
`,sj=`#include <vector>

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
`,oj=`#include <vector>

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
`;function cj(){return r.jsxs("div",{className:Xn.container,children:[r.jsx("h2",{className:Xn.sectionHeader,children:"Matrix"}),r.jsx("section",{id:"matrix-create-copy",children:r.jsxs(u,{title:"create / copy",children:[r.jsx(u.Tab,{code:PS,language:"python"}),r.jsx(u.Tab,{code:nj,language:"javascript"}),r.jsx(u.Tab,{code:aj,language:"java"}),r.jsx(u.Tab,{code:lj,language:"cpp"})]})}),r.jsx("section",{id:"matrix-diagonals",children:r.jsxs(u,{title:"diagonals / anti-diagonals",children:[r.jsx(u.Tab,{code:WS,language:"python"}),r.jsx(u.Tab,{code:ej,language:"javascript"}),r.jsx(u.Tab,{code:ij,language:"java"}),r.jsx(u.Tab,{code:sj,language:"cpp"})]})}),r.jsx("section",{id:"matrix-rotate-transpose",children:r.jsxs(u,{title:"rotate / transpose",children:[r.jsx(u.Tab,{code:$S,language:"python"}),r.jsx(u.Tab,{code:tj,language:"javascript"}),r.jsx(u.Tab,{code:rj,language:"java"}),r.jsx(u.Tab,{code:oj,language:"cpp"})]})})]})}const uj=`from typing import Any


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
`,dj=`from typing import Any


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
`,fj=`from typing import Any


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
`,hj=`from typing import Any


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
`,gj=`from typing import Any


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
`,pj=`class Graph:
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
`,mj=`class Array {
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
`,bj=`class TreeNode {
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
`,vj=`class TreeNode {
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
`,yj=`class ListNode {
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
`,xj=`class ListNode {
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
`,_j=`class Graph {
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
`,Tj=`public class Array<T> {
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
`,Sj=`public class TreeNode<T> {
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
`,jj=`public class TreeNode<T extends Comparable<T>> {
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
`,Nj=`class ListNode {
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
`,wj=`public class ListNode<T> {
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
`,Ej=`import java.util.ArrayList;
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
`,Oj=`#include <iostream>
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
`,Aj=`#include <iostream>
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
`,kj=`#include <iostream>
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
`,Mj=`#include <iostream>

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
`,Cj=`#include <iostream>
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
`,Rj=`#include <iostream>
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
`;function zj(){return r.jsxs("div",{className:Xn.container,children:[r.jsx("h2",{className:Xn.sectionHeader,children:"Data Structures"}),r.jsx("section",{id:"ds-array",children:r.jsxs(u,{title:"array",children:[r.jsx(u.Tab,{code:uj,language:"python"}),r.jsx(u.Tab,{code:mj,language:"javascript"}),r.jsx(u.Tab,{code:Tj,language:"java"}),r.jsx(u.Tab,{code:Oj,language:"cpp"})]})}),r.jsx("section",{id:"ds-hash-map",children:r.jsxs(u,{title:"hash map",children:[r.jsx(u.Tab,{code:c0,language:"python"}),r.jsx(u.Tab,{code:u0,language:"javascript"}),r.jsx(u.Tab,{code:d0,language:"java"}),r.jsx(u.Tab,{code:f0,language:"cpp"})]})}),r.jsx("section",{id:"ds-linked-list",children:r.jsxs(u,{title:"linked list",children:[r.jsx(u.Tab,{code:hj,language:"python"}),r.jsx(u.Tab,{code:yj,language:"javascript"}),r.jsx(u.Tab,{code:Nj,language:"java"}),r.jsx(u.Tab,{code:Mj,language:"cpp"})]})}),r.jsx("section",{id:"ds-doubly-linked-list",children:r.jsxs(u,{title:"doubly linked list",children:[r.jsx(u.Tab,{code:gj,language:"python"}),r.jsx(u.Tab,{code:xj,language:"javascript"}),r.jsx(u.Tab,{code:wj,language:"java"}),r.jsx(u.Tab,{code:Cj,language:"cpp"})]})}),r.jsx("section",{id:"ds-binary-tree",children:r.jsxs(u,{title:"binary tree",children:[r.jsx(u.Tab,{code:dj,language:"python"}),r.jsx(u.Tab,{code:bj,language:"javascript"}),r.jsx(u.Tab,{code:Sj,language:"java"}),r.jsx(u.Tab,{code:Aj,language:"cpp"})]})}),r.jsx("section",{id:"ds-binary-search-tree",children:r.jsxs(u,{title:"binary search tree",children:[r.jsx(u.Tab,{code:fj,language:"python"}),r.jsx(u.Tab,{code:vj,language:"javascript"}),r.jsx(u.Tab,{code:jj,language:"java"}),r.jsx(u.Tab,{code:kj,language:"cpp"})]})}),r.jsx("section",{id:"ds-graph",children:r.jsxs(u,{title:"graph",children:[r.jsx(u.Tab,{code:pj,language:"python"}),r.jsx(u.Tab,{code:_j,language:"javascript"}),r.jsx(u.Tab,{code:Ej,language:"java"}),r.jsx(u.Tab,{code:Rj,language:"cpp"})]})}),r.jsx("section",{id:"ds-union-find",children:r.jsxs(u,{title:"union find",children:[r.jsx(u.Tab,{code:b0,language:"python"}),r.jsx(u.Tab,{code:v0,language:"javascript"}),r.jsx(u.Tab,{code:y0,language:"java"}),r.jsx(u.Tab,{code:x0,language:"cpp"})]})}),r.jsx("section",{id:"ds-union-find-optimized",children:r.jsxs(u,{title:"union find optimized",children:[r.jsx(u.Tab,{code:_0,language:"python"}),r.jsx(u.Tab,{code:T0,language:"javascript"}),r.jsx(u.Tab,{code:S0,language:"java"}),r.jsx(u.Tab,{code:j0,language:"cpp"})]})}),r.jsx("section",{id:"ds-trie",children:r.jsxs(u,{title:"trie",children:[r.jsx(u.Tab,{code:h0,language:"python"}),r.jsx(u.Tab,{code:g0,language:"javascript"}),r.jsx(u.Tab,{code:p0,language:"java"}),r.jsx(u.Tab,{code:m0,language:"cpp"})]})})]})}const Dj=`import random


def bogo_sort(arr: list) -> None:
    target = sorted(arr)

    while arr != target:
        random.shuffle(arr)
`,Lj=`def bubble_sort(arr: list) -> None:
    n = len(arr)

    for i in range(n):
        swapped = False

        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True

        if not swapped:
            break
`,Bj=`def bucket_sort(arr: list) -> list:
    num_buckets = 10
    min_num = min(arr)
    max_num = max(arr)
    bucket_size = (max_num - min_num) / num_buckets
    buckets = [[] for _ in range(num_buckets)]

    for num in arr:
        index = min(int((num - min_num) / bucket_size), num_buckets - 1)
        buckets[index].append(num)

    return [num for bucket in buckets for num in sorted(bucket)]
`,Uj=`def counting_sort(arr: list) -> list:
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
`,Hj=`def cube_sort(arr: list, processors: int) -> None:
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
`,qj=`def heap_sort(arr: list) -> list:
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
`,Gj=`def insertion_sort(arr: list) -> None:
    n = len(arr)

    for i in range(1, n):
        key = arr[i]

        while i > 0 and key < arr[i - 1]:
            arr[i] = arr[i - 1]
            i -= 1

        arr[i] = key
`,Yj=`def merge_sort(arr: list) -> list:
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
`,Vj=`def pancake_sort(arr: list) -> None:
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
`,Kj=`def quick_sort(arr: list) -> list:
    n = len(arr)

    if n <= 1:
        return arr

    pivot = arr[n // 2]
    left = [x for x in arr if x < pivot]
    right = [x for x in arr if x > pivot]

    return quick_sort(left) + [pivot] + quick_sort(right)
`,Ij=`def radix_sort(arr: list) -> None:
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
`,Xj=`def selection_sort(arr: list) -> None:
    n = len(arr)

    for i in range(n):
        min_i = i

        for j in range(i + 1, n):
            if arr[j] < arr[min_i]:
                min_i = j

        if min_i != i:
            arr[i], arr[min_i] = arr[min_i], arr[i]
`,Qj=`def shell_sort(arr: list) -> None:
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
`,Jj=`from threading import Thread
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
`,Zj=`def tim_sort(arr: list) -> list:
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
`,Fj=`const bogoSort = (arr) => {
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
`,Pj=`const bubbleSort = (arr) => {
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
`,Wj=`const bucketSort = (arr) => {
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
`,$j=`const countingSort = (arr) => {
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
`,n2=`const cubeSort = (arr, processors) => {
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
`,e2=`const heapSort = (arr) => {
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
`,t2=`const insertionSort = (arr) => {
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
`,a2=`const mergeSort = (arr) => {
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
`,i2=`const pancakeSort = (arr) => {
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
`,r2=`const quickSort = (arr) => {
    const n = arr.length

    if (n <= 1) {
        return arr
    }

    const pivot = arr[Math.floor(n / 2)]
    const left = arr.filter(x => x < pivot)
    const right = arr.filter(x => x > pivot)

    return [...quickSort(left), pivot, ...quickSort(right)]
}
`,l2=`const radixSort = (arr) => {
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
`,s2=`const selectionSort = (arr) => {
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
`,o2=`const shellSort = (arr) => {
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
`,c2=`const sleepSort = (arr) => {
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
`,u2=`const timSort = (arr) => {
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
`,d2=`import java.util.Arrays;
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
`,f2=`public static void bubbleSort(int[] arr) {
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
`,h2=`import java.util.ArrayList;
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
`,g2=`import java.util.Arrays;


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
`,p2=`import java.util.ArrayList;
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
`,m2=`public static int[] heapSort(int[] arr) {
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
`,b2=`public static void insertionSort(int[] arr) {
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
`,v2=`import java.util.Arrays;


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
`,y2=`public static void pancakeSort(int[] arr) {
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
`,x2=`import java.util.ArrayList;
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
`,_2=`import java.util.Arrays;


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
`,T2=`public static void selectionSort(int[] arr) {
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
`,S2=`public static void shellSort(int[] arr) {
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
`,j2=`import java.util.ArrayList;
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
`,N2=`public static int[] timSort(int[] arr) {
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
`,w2=`#include <algorithm>
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
`,E2=`#include <vector>

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
`,O2=`#include <vector>
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
`,A2=`#include <vector>
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
`,k2=`#include <vector>
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
`,M2=`#include <vector>

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
`,C2=`#include <vector>

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
`,R2=`#include <vector>

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
`,z2=`#include <vector>

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
`,D2=`#include <vector>

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
`,L2=`#include <vector>

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
`,B2=`#include <vector>

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
`,U2=`#include <vector>

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
`,H2=`#include <chrono>
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
`,q2=`#include <vector>
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
`;function G2(){return r.jsxs("div",{className:Xn.container,children:[r.jsx("h2",{className:Xn.sectionHeader,children:"Sorting Algorithms"}),r.jsx("section",{id:"sort-bubble",children:r.jsxs(u,{title:"bubble sort",children:[r.jsx(u.Tab,{code:Lj,language:"python"}),r.jsx(u.Tab,{code:Pj,language:"javascript"}),r.jsx(u.Tab,{code:f2,language:"java"}),r.jsx(u.Tab,{code:E2,language:"cpp"})]})}),r.jsx("section",{id:"sort-selection",children:r.jsxs(u,{title:"selection sort",children:[r.jsx(u.Tab,{code:Xj,language:"python"}),r.jsx(u.Tab,{code:s2,language:"javascript"}),r.jsx(u.Tab,{code:T2,language:"java"}),r.jsx(u.Tab,{code:B2,language:"cpp"})]})}),r.jsx("section",{id:"sort-insertion",children:r.jsxs(u,{title:"insertion sort",children:[r.jsx(u.Tab,{code:Gj,language:"python"}),r.jsx(u.Tab,{code:t2,language:"javascript"}),r.jsx(u.Tab,{code:b2,language:"java"}),r.jsx(u.Tab,{code:C2,language:"cpp"})]})}),r.jsx("section",{id:"sort-shell",children:r.jsxs(u,{title:"shell sort",children:[r.jsx(u.Tab,{code:Qj,language:"python"}),r.jsx(u.Tab,{code:o2,language:"javascript"}),r.jsx(u.Tab,{code:S2,language:"java"}),r.jsx(u.Tab,{code:U2,language:"cpp"})]})}),r.jsx("section",{id:"sort-merge",children:r.jsxs(u,{title:"merge sort",children:[r.jsx(u.Tab,{code:Yj,language:"python"}),r.jsx(u.Tab,{code:a2,language:"javascript"}),r.jsx(u.Tab,{code:v2,language:"java"}),r.jsx(u.Tab,{code:R2,language:"cpp"})]})}),r.jsx("section",{id:"sort-quick",children:r.jsxs(u,{title:"quick sort",children:[r.jsx(u.Tab,{code:Kj,language:"python"}),r.jsx(u.Tab,{code:r2,language:"javascript"}),r.jsx(u.Tab,{code:x2,language:"java"}),r.jsx(u.Tab,{code:D2,language:"cpp"})]})}),r.jsx("section",{id:"sort-tim",children:r.jsxs(u,{title:"timsort",children:[r.jsx(u.Tab,{code:Zj,language:"python"}),r.jsx(u.Tab,{code:u2,language:"javascript"}),r.jsx(u.Tab,{code:N2,language:"java"}),r.jsx(u.Tab,{code:q2,language:"cpp"})]})}),r.jsx("section",{id:"sort-heap",children:r.jsxs(u,{title:"heap sort",children:[r.jsx(u.Tab,{code:qj,language:"python"}),r.jsx(u.Tab,{code:e2,language:"javascript"}),r.jsx(u.Tab,{code:m2,language:"java"}),r.jsx(u.Tab,{code:M2,language:"cpp"})]})}),r.jsx("section",{id:"sort-counting",children:r.jsxs(u,{title:"counting sort",children:[r.jsx(u.Tab,{code:Uj,language:"python"}),r.jsx(u.Tab,{code:$j,language:"javascript"}),r.jsx(u.Tab,{code:g2,language:"java"}),r.jsx(u.Tab,{code:A2,language:"cpp"})]})}),r.jsx("section",{id:"sort-bucket",children:r.jsxs(u,{title:"bucket sort",children:[r.jsx(u.Tab,{code:Bj,language:"python"}),r.jsx(u.Tab,{code:Wj,language:"javascript"}),r.jsx(u.Tab,{code:h2,language:"java"}),r.jsx(u.Tab,{code:O2,language:"cpp"})]})}),r.jsx("section",{id:"sort-radix",children:r.jsxs(u,{title:"radix sort",children:[r.jsx(u.Tab,{code:Ij,language:"python"}),r.jsx(u.Tab,{code:l2,language:"javascript"}),r.jsx(u.Tab,{code:_2,language:"java"}),r.jsx(u.Tab,{code:L2,language:"cpp"})]})}),r.jsx("section",{id:"sort-cube",children:r.jsxs(u,{title:"cubesort",children:[r.jsx(u.Tab,{code:Hj,language:"python"}),r.jsx(u.Tab,{code:n2,language:"javascript"}),r.jsx(u.Tab,{code:p2,language:"java"}),r.jsx(u.Tab,{code:k2,language:"cpp"})]})}),r.jsx("section",{id:"sort-bogo",children:r.jsxs(u,{title:"bogo sort",children:[r.jsx(u.Tab,{code:Dj,language:"python"}),r.jsx(u.Tab,{code:Fj,language:"javascript"}),r.jsx(u.Tab,{code:d2,language:"java"}),r.jsx(u.Tab,{code:w2,language:"cpp"})]})}),r.jsx("section",{id:"sort-pancake",children:r.jsxs(u,{title:"pancake sort",children:[r.jsx(u.Tab,{code:Vj,language:"python"}),r.jsx(u.Tab,{code:i2,language:"javascript"}),r.jsx(u.Tab,{code:y2,language:"java"}),r.jsx(u.Tab,{code:z2,language:"cpp"})]})}),r.jsx("section",{id:"sort-sleep",children:r.jsxs(u,{title:"sleep sort",children:[r.jsx(u.Tab,{code:Jj,language:"python"}),r.jsx(u.Tab,{code:c2,language:"javascript"}),r.jsx(u.Tab,{code:j2,language:"java"}),r.jsx(u.Tab,{code:H2,language:"cpp"})]})})]})}function Y2(){const{isSidebarOpen:o}=$u(),{view:b}=so(),p=we(jp.main,(!o||b==="finder")&&jp.sidebarHidden);return r.jsx("main",{className:p,children:b==="finder"?r.jsx(SS,{}):V2()})}function V2(){return r.jsxs(r.Fragment,{children:[r.jsx(HS,{}),r.jsx(qS,{}),r.jsx(GS,{}),r.jsx(YS,{}),r.jsx(VS,{}),r.jsx(KS,{}),r.jsx(IS,{}),r.jsx(XS,{}),r.jsx(QS,{}),r.jsx(JS,{}),r.jsx(ZS,{}),r.jsx(FS,{}),r.jsx(cj,{}),r.jsx(zj,{}),r.jsx(G2,{})]})}function K2(){return r.jsx(lo.StrictMode,{children:r.jsx(ax,{children:r.jsx(tx,{children:r.jsx(ix,{children:r.jsxs("div",{className:"App",children:[r.jsx(L_,{}),r.jsx(Y2,{})]})})})})})}nx.createRoot(document.getElementById("root")).render(r.jsx(K2,{}));
