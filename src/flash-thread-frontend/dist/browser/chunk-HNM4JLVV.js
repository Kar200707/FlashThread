import{a as _e}from"./chunk-CO3CGNU7.js";import{a as Ne}from"./chunk-PV6JO6XG.js";import{i as Ve,j as xe,k as Z,l as A,m as y,n as q,o as ze}from"./chunk-LCP4AOTT.js";import{b as je}from"./chunk-F5I7DCU5.js";import{a as L,c as ee}from"./chunk-HODLTFWJ.js";import{Y as De,h as Oe,k as Pe}from"./chunk-EKEATKT6.js";import{Ba as Ie,C as he,Cb as Fe,F as Ae,Jb as Te,Kb as Q,Ob as Re,P as ye,Rb as X,S as d,T as K,V as ve,Va as Se,Wa as $,Z as k,_ as E,_a as h,ba as m,c as w,ca as u,fa as Me,g as ce,ga as F,h as le,hb as be,i as pe,ib as we,j as ge,jb as C,k as l,kb as Y,l as p,lb as J,n as x,oa as M,r as fe,rb as ke,t as de,ua as z,v as me,ya as P,zb as Ee}from"./chunk-MYIS5EFB.js";import{d as ue}from"./chunk-JMZ7DUBM.js";var Qe="firebase",Xe="10.7.2";A(Qe,Xe,"app");var S=new Te("ANGULARFIRE2_VERSION"),$e=e=>`The APP_INITIALIZER that is "making" isSupported() sync for the sake of convenient DI has not resolved in this
context. Rather than injecting ${e} in the constructor, first ensure that ${e} is supported by calling
\`await isSupported()\`, then retrieve the instance from the injector manually \`injector.get(${e})\`.`;function Ce(e,t,i){if(t){if(t.length===1)return t[0];let o=t.filter(s=>s.app===i);if(o.length===1)return o[0]}return i.container.getProvider(e).getImmediate({optional:!0})}var Le=(e,t)=>{let i=t?[t]:Z(),n=[];return i.forEach(r=>{r.container.getProvider(e).instances.forEach(s=>{n.includes(s)||n.push(s)})}),n};function T(){}var B=class{zone;delegate;constructor(t,i=pe){this.zone=t,this.delegate=i}now(){return this.delegate.now()}schedule(t,i,n){let r=this.zone,o=function(s){r.runGuarded(()=>{t.apply(this,[s])})};return this.delegate.schedule(o,i,n)}},te=class{zone;task=null;constructor(t){this.zone=t}call(t,i){let n=this.unscheduleTask.bind(this);return this.task=this.zone.run(()=>Zone.current.scheduleMacroTask("firebaseZoneBlock",T,{},T,T)),i.pipe(ve({next:n,complete:n,error:n})).subscribe(t).add(n)}unscheduleTask(){setTimeout(()=>{this.task!=null&&this.task.state==="scheduled"&&(this.task.invoke(),this.task=null)},10)}},R=(()=>{class e{ngZone;outsideAngular;insideAngular;constructor(i){this.ngZone=i,this.outsideAngular=i.runOutsideAngular(()=>new B(Zone.current)),this.insideAngular=i.run(()=>new B(Zone.current,le)),globalThis.\u0275AngularFireScheduler||=this}static \u0275fac=function(n){return new(n||e)(u(h))};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function W(){let e=globalThis.\u0275AngularFireScheduler;if(!e)throw new Error(`Either AngularFireModule has not been provided in your AppModule (this can be done manually or implictly using
provideFirebaseApp) or you're calling an AngularFire method outside of an NgModule (which is not supported).`);return e}function et(e){return W().ngZone.runOutsideAngular(()=>e())}function I(e){return W().ngZone.run(()=>e())}function tt(e){return nt(W())(e)}function nt(e){return function(i){return i=i.lift(new te(e.ngZone)),i.pipe(p(e.outsideAngular),l(e.insideAngular))}}var it=(e,t)=>function(){let n=arguments;return t&&setTimeout(()=>{t.state==="scheduled"&&t.invoke()},10),I(()=>e.apply(void 0,n))},U=(e,t)=>function(){let i,n=arguments;for(let o=0;o<arguments.length;o++)typeof n[o]=="function"&&(t&&(i||=I(()=>Zone.current.scheduleMacroTask("firebaseZoneBlock",T,{},T,T))),n[o]=it(n[o],i));let r=et(()=>e.apply(this,n));if(!t)if(r instanceof w){let o=W();return r.pipe(p(o.outsideAngular),l(o.insideAngular))}else return I(()=>r);return r instanceof w?r.pipe(tt):r instanceof Promise?I(()=>new Promise((o,s)=>r.then(a=>I(()=>o(a)),a=>I(()=>s(a))))):typeof r=="function"&&i?function(){return setTimeout(()=>{i&&i.state==="scheduled"&&i.invoke()},10),r.apply(this,arguments)}:I(()=>r)};var ot="firebase",st="10.7.2";y.registerVersion(ot,st,"app-compat");var at=["ngOnDestroy"],qe=(e,t,i,n={})=>new Proxy(e,{get:(r,o)=>i.runOutsideAngular(()=>{if(e[o])return n?.spy?.get&&n.spy.get(o,e[o]),e[o];if(at.indexOf(o)>-1)return()=>{};let s=t.toPromise().then(a=>{let g=a?.[o];return typeof g=="function"?g.bind(a):g?.then?g.then(v=>i.run(()=>v)):i.run(()=>g)});return new Proxy(()=>{},{get:(a,g)=>s[g],apply:(a,g,v)=>s.then(f=>{let V=f?.(...v);return n?.spy?.apply&&n.spy.apply(o,v,V),V})})})});var ne=class{constructor(t){return t}},Be=new m("angularfire2.app.options"),We=new m("angularfire2.app.name");function Ue(e,t,i){let n=typeof i=="string"&&i||"[DEFAULT]",r=typeof i=="object"&&i||{};r.name=r.name||n;let s=y.apps.filter(a=>a&&a.name===r.name)[0]||t.runOutsideAngular(()=>y.initializeApp(e,r));try{if(JSON.stringify(e)!==JSON.stringify(s.options)){let a=!!module.hot;ut("error",`${s.name} Firebase App already initialized with different options${a?", you may need to reload as Firebase is not HMR aware.":"."}`)}}catch{}return new ne(s)}var ut=(e,...t)=>{X()&&typeof console<"u"&&console[e](...t)};function Ge(e,t,i,n,r){let[,o,s]=globalThis.\u0275AngularfireInstanceCache.find(a=>a[0]===e)||[];if(o)return ct(r,s)||(Ze("error",`${t} was already initialized on the ${i} Firebase App with different settings.${lt?" You may need to reload as Firebase is not HMR aware.":""}`),Ze("warn",{is:r,was:s})),o;{let a=n();return globalThis.\u0275AngularfireInstanceCache.push([e,a,r]),a}}function ct(e,t){try{return e.toString()===t.toString()}catch{return e===t}}var lt=typeof module<"u"&&!!module.hot,Ze=(e,...t)=>{X()&&typeof console<"u"&&console[e](...t)};globalThis.\u0275AngularfireInstanceCache||=[];var pt=new m("angularfire2.messaging.vapid-key"),gt=new m("angularfire2.messaging.service-worker-registeration"),D=(()=>{class e{requestPermission;getToken;tokenChanges;messages;requestToken;deleteToken;constructor(i,n,r,o,s,a,g){let v=g,f=x(void 0).pipe(p(s.outsideAngular),l(s.insideAngular),d(q),d(c=>c?import("./chunk-WSNBO2U2.js"):ge),fe(()=>Ue(i,o,n)),d(c=>Ge(`${c.name}.messaging`,"AngularFireMessaging",c.name,()=>x(c.messaging()),[])),ye({bufferSize:1,refCount:!1}));this.requestPermission=f.pipe(p(s.outsideAngular),l(s.insideAngular),d(()=>Notification.requestPermission())),this.getToken=f.pipe(p(s.outsideAngular),l(s.insideAngular),d(c=>ue(this,null,function*(){if(Notification.permission==="granted"){let O=v?yield v:null;return yield c.getToken({vapidKey:a,serviceWorkerRegistration:O})}else return null})));let V=new w(c=>{navigator.permissions.query({name:"notifications"}).then(O=>{O.onchange=()=>c.next()})}),Je=f.pipe(p(s.outsideAngular),l(s.insideAngular),K(V),K(this.getToken));return this.tokenChanges=f.pipe(p(s.outsideAngular),l(s.insideAngular),d(()=>me(this.getToken,Je))),this.messages=f.pipe(p(s.outsideAngular),l(s.insideAngular),d(c=>new w(O=>c.onMessage(O)))),this.requestToken=f.pipe(p(s.outsideAngular),l(s.insideAngular),d(()=>this.requestPermission),he(()=>x(null)),de(()=>this.tokenChanges)),this.deleteToken=()=>f.pipe(p(s.outsideAngular),l(s.insideAngular),d(c=>c.deleteToken()),Ae(!1)),qe(this,f,o)}static \u0275fac=function(n){return new(n||e)(u(Be),u(We,8),u(P),u(h),u(R),u(pt,8),u(gt,8))};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"any"})}return e})(),He=(()=>{class e{constructor(){y.registerVersion("angularfire",S.full,"fcm-compat")}static \u0275fac=function(n){return new(n||e)};static \u0275mod=F({type:e});static \u0275inj=E({providers:[D]})}return e})();var G=(()=>{let t=class t{constructor(n){this.angularFireMessaging=n,this.currentMessage=new ce(null),this.callRequestPermission=this.angularFireMessaging.requestToken,this.angularFireMessaging.messages.subscribe(r=>{r.onMessage=r.onMessage.bind(r),r.onTokenRefresh=r.onTokenRefresh.bind(r)})}receiveMessage(){this.angularFireMessaging.messages.subscribe(n=>{console.log("new message received. ",n),this.currentMessage.next(n)})}};t.\u0275fac=function(r){return new(r||t)(u(D))},t.\u0275prov=k({token:t,factory:t.\u0275fac});let e=t;return e})();var b=class{constructor(t){return t}},N=class{constructor(){return Z()}};function mt(e){return e&&e.length===1?e[0]:new b(xe())}var ie=new m("angularfire2._apps"),ht={provide:b,useFactory:mt,deps:[[new M,ie]]},At={provide:N,deps:[[new M,ie]]};function yt(e){return(t,i)=>{let n=t.runOutsideAngular(()=>e(i));return new b(n)}}var vt=(()=>{class e{constructor(i){A("angularfire",S.full,"core"),A("angularfire",S.full,"app"),A("angular",Q.full,i.toString())}static \u0275fac=function(n){return new(n||e)(u(P))};static \u0275mod=F({type:e});static \u0275inj=E({providers:[ht,At]})}return e})();function gn(e,...t){return{ngModule:vt,providers:[{provide:ie,useFactory:yt(e),multi:!0,deps:[h,z,R,...t]}]}}var fn=U(Ve,!0);var _=class{constructor(t){return t}},Ke="messaging",re=class{constructor(){return Le(Ke)}};var Ye="__angularfire_symbol__messagingIsSupported",oe="__angularfire_symbol__messagingIsSupportedValue";globalThis[Ye]||=q().then(e=>globalThis[oe]=e).catch(()=>globalThis[oe]=!1);var H={async:()=>globalThis[Ye],sync:()=>{let e=globalThis[oe];if(e===void 0)throw new Error($e("Messaging"));return e}},se=new m("angularfire2.messaging-instances");function Mt(e,t){if(!H.sync())return null;let i=Ce(Ke,e,t);return i&&new _(i)}function It(e){return(t,i)=>{if(!H.sync())return null;let n=t.runOutsideAngular(()=>e(i));return new _(n)}}var St={provide:re,deps:[[new M,se]]},bt={provide:_,useFactory:Mt,deps:[[new M,se],b]},ae=(()=>{class e{constructor(){A("angularfire",S.full,"fcm")}static \u0275fac=function(n){return new(n||e)};static \u0275mod=F({type:e});static \u0275inj=E({providers:[bt,St,{provide:Re,useValue:H.async,multi:!0}]})}return e})();function kn(e,...t){return{ngModule:ae,providers:[{provide:se,useFactory:It(e),multi:!0,deps:[h,z,R,N,...t]}]}}var En=H.async;var Fn=U(ze,!0);function wt(e,t){e&1&&(C(0,"div",3),J(1,"app-chats-menu"),Y())}var Hn=(()=>{let t=class t{resize(){this.windowSize=innerWidth}constructor(n,r,o){this.messagingService=n,this.webSocket=r,this.reqService=o,this.windowSize=innerWidth,this.token=localStorage.getItem("token"),this.userData={avatar:"./assets/images/load/load.jpg",name:"loading name...",email:"loading email...",bio:"loading biography...",l_name:"loading last name..."},this.innerWidth=innerWidth,this.webSocket.socket=this.webSocket.io(this.webSocket.uri,{auth:{token:this.webSocket.token}})}ngOnInit(){this.webSocket.listen("connect").subscribe(()=>{console.log("socket connected"),this.webSocket.emit("join",{id:this.userData.id})}),this.messagingService.callRequestPermission.subscribe(r=>{r&&this.token&&this.reqService.put(ee.userEdit,{device:r,token:this.token}).subscribe(()=>{})});let n={token:this.token};this.reqService.post(ee.getUser,n).subscribe(r=>{this.userData=r})}};t.\u0275fac=function(r){return new(r||t)($(G),$(Ne),$(L))},t.\u0275cmp=Me({type:t,selectors:[["app-main"]],hostBindings:function(r,o){r&1&&ke("resize",function(){return o.resize()},!1,Ie)},standalone:!0,features:[Ee([L,G,D]),Fe],decls:4,vars:1,consts:[[1,"container"],["style","width: 40%;"],[2,"width","100%"],[2,"width","40%"]],template:function(r,o){r&1&&(C(0,"div",0),be(1,wt,2,0,"div",1),C(2,"div",2),J(3,"router-outlet"),Y()()),r&2&&(Se(1),we(1,o.windowSize>940?1:-1))},dependencies:[Oe,De,je,Pe,He,ae,_e],styles:[".container[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:normal;align-items:center}.move_line[_ngcontent-%COMP%]{height:100vh;width:3px;background-color:#fff;cursor:e-resize}"]});let e=t;return e})();export{Be as a,D as b,He as c,G as d,gn as e,fn as f,ae as g,kn as h,Fn as i,Hn as j};
