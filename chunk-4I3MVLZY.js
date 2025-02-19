import{d as le,g as de,r as he}from"./chunk-J7ILPO5N.js";import{$ as O,Aa as ie,Ca as ae,D as Q,G as H,Ja as ce,M as ee,U as ne,Y as te,a as Y,ca as N,ea as w,f as S,fa as m,i as X,na as re,p as Z,q as J,qa as se,ra as oe,u as x}from"./chunk-273GLWW4.js";var F=class{},_=class{},g=class t{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(n=>{let r=n.indexOf(":");if(r>0){let s=n.slice(0,r),i=s.toLowerCase(),o=n.slice(r+1).trim();this.maybeSetNormalizedName(s,i),this.headers.has(i)?this.headers.get(i).push(o):this.headers.set(i,[o])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((n,r)=>{this.setHeaderEntries(r,n)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([n,r])=>{this.setHeaderEntries(n,r)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let n=this.headers.get(e.toLowerCase());return n&&n.length>0?n[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,n){return this.clone({name:e,value:n,op:"a"})}set(e,n){return this.clone({name:e,value:n,op:"s"})}delete(e,n){return this.clone({name:e,value:n,op:"d"})}maybeSetNormalizedName(e,n){this.normalizedNames.has(n)||this.normalizedNames.set(n,e)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(n=>{this.headers.set(n,e.headers.get(n)),this.normalizedNames.set(n,e.normalizedNames.get(n))})}clone(e){let n=new t;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([e]),n}applyUpdate(e){let n=e.name.toLowerCase();switch(e.op){case"a":case"s":let r=e.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(e.name,n);let s=(e.op==="a"?this.headers.get(n):void 0)||[];s.push(...r),this.headers.set(n,s);break;case"d":let i=e.value;if(!i)this.headers.delete(n),this.normalizedNames.delete(n);else{let o=this.headers.get(n);if(!o)return;o=o.filter(d=>i.indexOf(d)===-1),o.length===0?(this.headers.delete(n),this.normalizedNames.delete(n)):this.headers.set(n,o)}break}}setHeaderEntries(e,n){let r=(Array.isArray(n)?n:[n]).map(i=>i.toString()),s=e.toLowerCase();this.headers.set(s,r),this.maybeSetNormalizedName(e,s)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(n=>e(this.normalizedNames.get(n),this.headers.get(n)))}};var V=class{encodeKey(e){return ue(e)}encodeValue(e){return ue(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function Re(t,e){let n=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(s=>{let i=s.indexOf("="),[o,d]=i==-1?[e.decodeKey(s),""]:[e.decodeKey(s.slice(0,i)),e.decodeValue(s.slice(i+1))],a=n.get(o)||[];a.push(d),n.set(o,a)}),n}var be=/%(\d[a-f0-9])/gi,Pe={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function ue(t){return encodeURIComponent(t).replace(be,(e,n)=>Pe[n]??e)}function U(t){return`${t}`}var v=class t{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new V,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=Re(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(n=>{let r=e.fromObject[n],s=Array.isArray(r)?r.map(U):[U(r)];this.map.set(n,s)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let n=this.map.get(e);return n?n[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,n){return this.clone({param:e,value:n,op:"a"})}appendAll(e){let n=[];return Object.keys(e).forEach(r=>{let s=e[r];Array.isArray(s)?s.forEach(i=>{n.push({param:r,value:i,op:"a"})}):n.push({param:r,value:s,op:"a"})}),this.clone(n)}set(e,n){return this.clone({param:e,value:n,op:"s"})}delete(e,n){return this.clone({param:e,value:n,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let n=this.encoder.encodeKey(e);return this.map.get(e).map(r=>n+"="+this.encoder.encodeValue(r)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let n=new t({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat(e),n}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let n=(e.op==="a"?this.map.get(e.param):void 0)||[];n.push(U(e.value)),this.map.set(e.param,n);break;case"d":if(e.value!==void 0){let r=this.map.get(e.param)||[],s=r.indexOf(U(e.value));s!==-1&&r.splice(s,1),r.length>0?this.map.set(e.param,r):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var $=class{constructor(){this.map=new Map}set(e,n){return this.map.set(e,n),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function Ne(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function fe(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function pe(t){return typeof Blob<"u"&&t instanceof Blob}function ye(t){return typeof FormData<"u"&&t instanceof FormData}function Ae(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var k=class t{constructor(e,n,r,s){this.url=n,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase();let i;if(Ne(this.method)||s?(this.body=r!==void 0?r:null,i=s):i=r,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),this.transferCache=i.transferCache),this.headers??=new g,this.context??=new $,!this.params)this.params=new v,this.urlWithParams=n;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=n;else{let d=n.indexOf("?"),a=d===-1?"?":d<n.length-1?"&":"";this.urlWithParams=n+a+o}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||fe(this.body)||pe(this.body)||ye(this.body)||Ae(this.body)?this.body:this.body instanceof v?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||ye(this.body)?null:pe(this.body)?this.body.type||null:fe(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof v?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(e={}){let n=e.method||this.method,r=e.url||this.url,s=e.responseType||this.responseType,i=e.transferCache??this.transferCache,o=e.body!==void 0?e.body:this.body,d=e.withCredentials??this.withCredentials,a=e.reportProgress??this.reportProgress,f=e.headers||this.headers,p=e.params||this.params,y=e.context??this.context;return e.setHeaders!==void 0&&(f=Object.keys(e.setHeaders).reduce((b,h)=>b.set(h,e.setHeaders[h]),f)),e.setParams&&(p=Object.keys(e.setParams).reduce((b,h)=>b.set(h,e.setParams[h]),p)),new t(n,r,o,{params:p,headers:f,context:y,reportProgress:a,responseType:s,withCredentials:d,transferCache:i})}},R=function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t}(R||{}),L=class{constructor(e,n=200,r="OK"){this.headers=e.headers||new g,this.status=e.status!==void 0?e.status:n,this.statusText=e.statusText||r,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}},B=class t extends L{constructor(e={}){super(e),this.type=R.ResponseHeader}clone(e={}){return new t({headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},j=class t extends L{constructor(e={}){super(e),this.type=R.Response,this.body=e.body!==void 0?e.body:null}clone(e={}){return new t({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},E=class extends L{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}},we=200,Oe=204;function C(t,e){return{body:e,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,transferCache:t.transferCache}}var Ie=(()=>{class t{constructor(n){this.handler=n}request(n,r,s={}){let i;if(n instanceof k)i=n;else{let a;s.headers instanceof g?a=s.headers:a=new g(s.headers);let f;s.params&&(s.params instanceof v?f=s.params:f=new v({fromObject:s.params})),i=new k(n,r,s.body!==void 0?s.body:null,{headers:a,context:s.context,params:f,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials,transferCache:s.transferCache})}let o=J(i).pipe(H(a=>this.handler.handle(a)));if(n instanceof k||s.observe==="events")return o;let d=o.pipe(Q(a=>a instanceof j));switch(s.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return d.pipe(x(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return d.pipe(x(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return d.pipe(x(a=>{if(a.body!==null&&typeof a.body!="string")throw new Error("Response is not a string.");return a.body}));case"json":default:return d.pipe(x(a=>a.body))}case"response":return d;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(n,r={}){return this.request("DELETE",n,r)}get(n,r={}){return this.request("GET",n,r)}head(n,r={}){return this.request("HEAD",n,r)}jsonp(n,r){return this.request("JSONP",n,{params:new v().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,r={}){return this.request("OPTIONS",n,r)}patch(n,r,s={}){return this.request("PATCH",n,C(s,r))}post(n,r,s={}){return this.request("POST",n,C(s,r))}put(n,r,s={}){return this.request("PUT",n,C(s,r))}static{this.\u0275fac=function(r){return new(r||t)(w(F))}}static{this.\u0275prov=O({token:t,factory:t.\u0275fac})}}return t})(),Me=/^\)\]\}',?\n/,De="X-Request-URL";function me(t){if(t.url)return t.url;let e=De.toLocaleLowerCase();return t.headers.get(e)}var xe=(()=>{class t{constructor(){this.fetchImpl=m(G,{optional:!0})?.fetch??((...n)=>globalThis.fetch(...n)),this.ngZone=m(ae)}handle(n){return new X(r=>{let s=new AbortController;return this.doRequest(n,s.signal,r).then(W,i=>r.error(new E({error:i}))),()=>s.abort()})}doRequest(n,r,s){return S(this,null,function*(){let i=this.createRequestInit(n),o;try{let h=this.ngZone.runOutsideAngular(()=>this.fetchImpl(n.urlWithParams,Y({signal:r},i)));ke(h),s.next({type:R.Sent}),o=yield h}catch(h){s.error(new E({error:h,status:h.status??0,statusText:h.statusText,url:n.urlWithParams,headers:h.headers}));return}let d=new g(o.headers),a=o.statusText,f=me(o)??n.urlWithParams,p=o.status,y=null;if(n.reportProgress&&s.next(new B({headers:d,status:p,statusText:a,url:f})),o.body){let h=o.headers.get("content-length"),I=[],c=o.body.getReader(),l=0,T,A,u=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>S(this,null,function*(){for(;;){let{done:P,value:D}=yield c.read();if(P)break;if(I.push(D),l+=D.length,n.reportProgress){A=n.responseType==="text"?(A??"")+(T??=new TextDecoder).decode(D,{stream:!0}):void 0;let q=()=>s.next({type:R.DownloadProgress,total:h?+h:void 0,loaded:l,partialText:A});u?u.run(q):q()}}}));let M=this.concatChunks(I,l);try{let P=o.headers.get("Content-Type")??"";y=this.parseBody(n,M,P)}catch(P){s.error(new E({error:P,headers:new g(o.headers),status:o.status,statusText:o.statusText,url:me(o)??n.urlWithParams}));return}}p===0&&(p=y?we:0),p>=200&&p<300?(s.next(new j({body:y,headers:d,status:p,statusText:a,url:f})),s.complete()):s.error(new E({error:y,headers:d,status:p,statusText:a,url:f}))})}parseBody(n,r,s){switch(n.responseType){case"json":let i=new TextDecoder().decode(r).replace(Me,"");return i===""?null:JSON.parse(i);case"text":return new TextDecoder().decode(r);case"blob":return new Blob([r],{type:s});case"arraybuffer":return r.buffer}}createRequestInit(n){let r={},s=n.withCredentials?"include":void 0;if(n.headers.forEach((i,o)=>r[i]=o.join(",")),n.headers.has("Accept")||(r.Accept="application/json, text/plain, */*"),!n.headers.has("Content-Type")){let i=n.detectContentTypeHeader();i!==null&&(r["Content-Type"]=i)}return{body:n.serializeBody(),method:n.method,headers:r,credentials:s}}concatChunks(n,r){let s=new Uint8Array(r),i=0;for(let o of n)s.set(o,i),i+=o.length;return s}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275prov=O({token:t,factory:t.\u0275fac})}}return t})(),G=class{};function W(){}function ke(t){t.then(W,W)}function Fe(t,e){return e(t)}function Le(t,e,n){return(r,s)=>oe(n,()=>e(r,i=>t(i,s)))}var K=new N(""),je=new N(""),Ue=new N("",{providedIn:"root",factory:()=>!0});var ge=(()=>{class t extends F{constructor(n,r){super(),this.backend=n,this.injector=r,this.chain=null,this.pendingTasks=m(ie),this.contributeToStability=m(Ue)}handle(n){if(this.chain===null){let r=Array.from(new Set([...this.injector.get(K),...this.injector.get(je,[])]));this.chain=r.reduceRight((s,i)=>Le(s,i,this.injector),Fe)}if(this.contributeToStability){let r=this.pendingTasks.add();return this.chain(n,s=>this.backend.handle(s)).pipe(ee(()=>this.pendingTasks.remove(r)))}else return this.chain(n,r=>this.backend.handle(r))}static{this.\u0275fac=function(r){return new(r||t)(w(_),w(se))}}static{this.\u0275prov=O({token:t,factory:t.\u0275fac})}}return t})();var _e=/^\)\]\}',?\n/;function Be(t){return"responseURL"in t&&t.responseURL?t.responseURL:/^X-Request-URL:/m.test(t.getAllResponseHeaders())?t.getResponseHeader("X-Request-URL"):null}var Te=(()=>{class t{constructor(n){this.xhrFactory=n}handle(n){if(n.method==="JSONP")throw new te(-2800,!1);let r=this.xhrFactory;return(r.\u0275loadImpl?Z(r.\u0275loadImpl()):J(null)).pipe(ne(()=>new X(i=>{let o=r.build();if(o.open(n.method,n.urlWithParams),n.withCredentials&&(o.withCredentials=!0),n.headers.forEach((c,l)=>o.setRequestHeader(c,l.join(","))),n.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!n.headers.has("Content-Type")){let c=n.detectContentTypeHeader();c!==null&&o.setRequestHeader("Content-Type",c)}if(n.responseType){let c=n.responseType.toLowerCase();o.responseType=c!=="json"?c:"text"}let d=n.serializeBody(),a=null,f=()=>{if(a!==null)return a;let c=o.statusText||"OK",l=new g(o.getAllResponseHeaders()),T=Be(o)||n.url;return a=new B({headers:l,status:o.status,statusText:c,url:T}),a},p=()=>{let{headers:c,status:l,statusText:T,url:A}=f(),u=null;l!==Oe&&(u=typeof o.response>"u"?o.responseText:o.response),l===0&&(l=u?we:0);let M=l>=200&&l<300;if(n.responseType==="json"&&typeof u=="string"){let P=u;u=u.replace(_e,"");try{u=u!==""?JSON.parse(u):null}catch(D){u=P,M&&(M=!1,u={error:D,text:u})}}M?(i.next(new j({body:u,headers:c,status:l,statusText:T,url:A||void 0})),i.complete()):i.error(new E({error:u,headers:c,status:l,statusText:T,url:A||void 0}))},y=c=>{let{url:l}=f(),T=new E({error:c,status:o.status||0,statusText:o.statusText||"Unknown Error",url:l||void 0});i.error(T)},b=!1,h=c=>{b||(i.next(f()),b=!0);let l={type:R.DownloadProgress,loaded:c.loaded};c.lengthComputable&&(l.total=c.total),n.responseType==="text"&&o.responseText&&(l.partialText=o.responseText),i.next(l)},I=c=>{let l={type:R.UploadProgress,loaded:c.loaded};c.lengthComputable&&(l.total=c.total),i.next(l)};return o.addEventListener("load",p),o.addEventListener("error",y),o.addEventListener("timeout",y),o.addEventListener("abort",y),n.reportProgress&&(o.addEventListener("progress",h),d!==null&&o.upload&&o.upload.addEventListener("progress",I)),o.send(d),i.next({type:R.Sent}),()=>{o.removeEventListener("error",y),o.removeEventListener("abort",y),o.removeEventListener("load",p),o.removeEventListener("timeout",y),n.reportProgress&&(o.removeEventListener("progress",h),d!==null&&o.upload&&o.upload.removeEventListener("progress",I)),o.readyState!==o.DONE&&o.abort()}})))}static{this.\u0275fac=function(r){return new(r||t)(w(he))}}static{this.\u0275prov=O({token:t,factory:t.\u0275fac})}}return t})(),Ee=new N(""),ze="XSRF-TOKEN",Se=new N("",{providedIn:"root",factory:()=>ze}),Xe="X-XSRF-TOKEN",Je=new N("",{providedIn:"root",factory:()=>Xe}),z=class{},Ce=(()=>{class t{constructor(n,r,s){this.doc=n,this.platform=r,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=de(n,this.cookieName),this.lastCookieString=n),this.lastToken}static{this.\u0275fac=function(r){return new(r||t)(w(le),w(ce),w(Se))}}static{this.\u0275prov=O({token:t,factory:t.\u0275fac})}}return t})();function Ve(t,e){let n=t.url.toLowerCase();if(!m(Ee)||t.method==="GET"||t.method==="HEAD"||n.startsWith("http://")||n.startsWith("https://"))return e(t);let r=m(z).getToken(),s=m(Je);return r!=null&&!t.headers.has(s)&&(t=t.clone({headers:t.headers.set(s,r)})),e(t)}var ve=function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t}(ve||{});function $e(t,e){return{\u0275kind:t,\u0275providers:e}}function mn(...t){let e=[Ie,Te,ge,{provide:F,useExisting:ge},{provide:_,useFactory:()=>m(xe,{optional:!0})??m(Te)},{provide:K,useValue:Ve,multi:!0},{provide:Ee,useValue:!0},{provide:z,useClass:Ce}];for(let n of t)e.push(...n.\u0275providers);return re(e)}function gn(t){return $e(ve.Interceptors,t.map(e=>({provide:K,useValue:e,multi:!0})))}export{Ie as a,mn as b,gn as c};
