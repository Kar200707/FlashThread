import{a as Ot,b as At}from"./chunk-XBQI7VOT.js";import{a as Et}from"./chunk-4IKY2LOZ.js";import{i as Lt,j as Tt,k as Pe,l as N,m as V,n as ke,o as Dt}from"./chunk-LCP4AOTT.js";import{a as kt}from"./chunk-SQY326CE.js";import{c as Ct}from"./chunk-OWTRPE7Q.js";import{c as _t,e as wt,f as Pt,w as xt,x as Mt,z as It}from"./chunk-WWDSCM5Q.js";import{$ as S,$a as dt,Ab as pt,Bb as gt,C as st,Db as ft,Eb as mt,F as at,Fb as Ue,Jb as ht,Ka as be,Mb as Ne,P as ct,Ra as g,S as O,Sa as W,T as Fe,V as lt,Wa as I,Wb as vt,X as j,Xb as bt,Y as X,_a as w,aa as _,c as Y,cc as yt,da as he,db as E,dc as U,ea as ee,eb as te,fb as f,fc as T,g as Xe,gb as m,h as et,hb as L,i as tt,ib as je,j as nt,jb as Re,k as P,l as k,la as q,n as me,nb as ne,ob as R,r as it,ra as ve,rb as ye,sb as $,sc as St,t as rt,tb as ae,v as ot,va as se,vb as _e,ya as ut,yb as we,zb as $e}from"./chunk-KIWFM5SP.js";import{d as u}from"./chunk-JMZ7DUBM.js";var dn=["search"];function pn(e,t){if(e&1&&L(0,"app-user-details",4),e&2){let n=R();w("size",98)("userData",n.userData)}}function gn(e,t){e&1&&(f(0,"div",14)(1,"div",15),L(2,"div",16)(3,"div",17),m()())}var Ft=e=>["/messenger/chat",e];function fn(e,t){if(e&1&&(f(0,"div",19),L(1,"img",20),f(2,"div",21)(3,"h2"),$(4),m(),f(5,"p"),$(6),m()()()),e&2){let n=R().$implicit;w("routerLink",$e(5,Ft,n.id)),g(1),w("src",n.avatar,be)("alt","avatar "+n.name),g(3),ae(n.name),g(2),ae(n.bio)}}function mn(e,t){if(e&1&&(je(0),E(1,fn,7,7,"div",18),Re()),e&2){let n=t.$implicit,r=R(2);g(1),w("ngIf",r.tokenUser.id!==n.id)}}function hn(e,t){if(e&1&&(f(0,"div",12),E(1,gn,4,0,"div",13)(2,mn,2,1,"ng-container",11),m()),e&2){let n=R(),r=ye(7);g(1),te(1,n.searchData.length==0&&r.value!=""?1:-1),g(1),w("ngForOf",n.searchData)}}function vn(e,t){if(e&1&&(f(0,"div",23),L(1,"img",24),f(2,"div")(3,"h3"),$(4),m(),f(5,"p"),$(6,"test"),m()()()),e&2){let n=R().$implicit;w("routerLink",$e(3,Ft,n.id)),g(1),w("src",n.avatar,be),g(3),ae(n.name)}}function bn(e,t){if(e&1&&(je(0),E(1,vn,7,5,"div",22),Re()),e&2){let n=t.$implicit;g(1),w("ngIf",n!=null)}}var jt=(()=>{let t=class t{constructor(r){this.reqService=r,this.isOpenedSearchBlock=!1,this.chatsData=[],this.aiLastMessage="loading...",this.token=localStorage.getItem("token"),this.isOpenedUserDetails=!1,this.userData={avatar:"./assets/images/load/load.jpg",name:"loading name...",email:"loading email...",bio:"loading biography...",l_name:"loading last name..."},this.searchData=[],this.chatUsersData=[]}ngOnInit(){let r={token:this.token};this.reqService.post(T.aiGetChat,{token:this.token}).subscribe(i=>{i.messages[i.messages.length-1].message.length>25?this.aiLastMessage=i.messages[i.messages.length-1].message.slice(0,24)+"...":this.aiLastMessage=i.messages[i.messages.length-1].message}),this.chat.addEventListener("click",()=>{this.isOpenedSearchBlock=!1}),this.reqService.post(T.getUserByToken,r).subscribe(i=>{this.tokenUser=i,this.userData=i}),this.reqService.post(T.getActiveChats,r).subscribe(i=>{this.chatsData=i,console.log(i),i.forEach((o,s)=>{o&&o.usersId.forEach(a=>{if(this.userData.id!=a){let l={id:a,token:this.token};this.reqService.post(T.getUserById,l).subscribe(c=>{this.chatUsersData.push(c)})}})})})}searchValue(){let r={name:this.input?.nativeElement.value.split("").filter(i=>i.trim().length).join("")};this.reqService.post(T.search,r).subscribe(i=>{this.searchData=i})}};t.\u0275fac=function(i){return new(i||t)(W(U))},t.\u0275cmp=he({type:t,selectors:[["app-chat-lists"]],viewQuery:function(i,o){if(i&1&&gt(dn,5),i&2){let s;pt(s=ft())&&(o.input=s.first)}},inputs:{chat:"chat"},standalone:!0,features:[_e([U]),we],decls:19,vars:9,consts:[["appResizeHeight","",1,"main-div",3,"size"],[1,"box"],[1,"user_img_box",3,"click"],["alt","user image",3,"src","title"],["appResizeHeight","",3,"size","userData"],[1,"search_box",3,"mouseleave","click"],["placeholder","Search User","type","text",1,"search",3,"focus","input"],["search",""],["class","search_list_block"],[1,"chat_block"],["routerLinkActive","active-chat","routerLink","ai",1,"ai_chat"],[4,"ngFor","ngForOf"],[1,"search_list_block"],["class","loading_list"],[1,"loading_list"],[1,"list",2,"margin-top","20px"],[2,"width","50px","height","50px","border-radius","50%","background-color","#2a2a2a"],[2,"margin-left","20px","width","70%","height","20px","border-radius","5px","background-color","#2a2a2a"],["style","margin-top: 20px","class","list",3,"routerLink",4,"ngIf"],[1,"list",2,"margin-top","20px",3,"routerLink"],[3,"src","alt"],[2,"margin-left","20px"],["routerLinkActive","active-chat","class","chat",3,"routerLink",4,"ngIf"],["routerLinkActive","active-chat",1,"chat",3,"routerLink"],["alt","chat",3,"src"]],template:function(i,o){i&1&&(f(0,"div",0)(1,"div",1)(2,"div",2),ne("click",function(){return o.isOpenedUserDetails=!o.isOpenedUserDetails}),L(3,"img",3),m(),E(4,pn,1,2,"app-user-details",4),f(5,"div",5),ne("mouseleave",function(){return o.isOpenedSearchBlock=!1})("click",function(){return o.isOpenedSearchBlock=!0}),f(6,"input",6,7),ne("focus",function(){return o.isOpenedSearchBlock=!0})("input",function(){return o.searchValue()}),m(),E(8,hn,3,2,"div",8),m()(),f(9,"div",9)(10,"div",10)(11,"mat-icon"),$(12,"auto_awesome"),m(),f(13,"div")(14,"h3"),$(15,"Flash Ai"),m(),f(16,"p"),$(17),m()()(),E(18,bn,2,1,"ng-container",11),m()()),i&2&&(w("size",1),g(3),w("src",o.userData.avatar,be)("title",o.userData.name),g(1),te(4,o.isOpenedUserDetails?4:-1),g(2),dt("width",o.isOpenedSearchBlock?"400px":"300px"),g(2),te(8,o.isOpenedSearchBlock?8:-1),g(9),ae(o.aiLastMessage),g(1),w("ngForOf",o.chatUsersData))},dependencies:[kt,vt,bt,wt,Ot,At,It,Pt,Mt,xt],styles:['.main-div[_ngcontent-%COMP%]{background-image:linear-gradient(to left,rgba(152,46,131,.11),rgba(0,51,153,.1));overflow-y:scroll;background-color:#0e0e0e;padding:20px;width:100%;position:relative}.list[_ngcontent-%COMP%]{padding:10px;background-color:#3d3d3d;border-radius:10px;display:flex;align-items:center;border:1px solid rgba(255,255,255,.13)}.search_list_block[_ngcontent-%COMP%]{width:100%;padding:0 20px 20px;box-shadow:#00000012 0 3px 6px,#00000021 0 3px 6px;position:absolute;top:35px;background-color:#232323;border-bottom-left-radius:10px;border-bottom-right-radius:10px}.list[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:50px;height:50px;object-fit:cover;border-radius:50%}.list[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%], .list[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:#fff}.box[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.side-icon[_ngcontent-%COMP%]{width:30px;height:30px}.search[_ngcontent-%COMP%]{outline:none;color:#fff6;background-color:transparent;border:1px solid;height:15px;font-family:Rubik Glitch,system-ui;font-weight:bolder;border-radius:20px;padding:20px 15px;transition:.3s;box-shadow:#00000012 0 3px 6px,#00000021 0 3px 6px}.search[_ngcontent-%COMP%]:focus{box-shadow:#00000040 0 14px 28px,#00000038 0 10px 10px;border-color:#039}app-user-details[_ngcontent-%COMP%]{position:absolute;top:90px;left:0;width:100%;transition:.2s;border-top-right-radius:10px;border-bottom-right-radius:10px;border:1px solid rgba(255,255,255,.15);border-left:0;overflow:hidden;z-index:999}.user_img_box[_ngcontent-%COMP%]{width:45px;height:45px;margin-right:10px;background-color:#3d3d3d;top:20px;right:20px;border-radius:50%;overflow:hidden;display:flex;align-items:center;justify-content:center;padding:20px;transition:.2s}.user_img_box[_ngcontent-%COMP%]:active{scale:.95}.user_img_box[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:35px;height:35px;object-fit:cover;border-radius:50%}.chat_block[_ngcontent-%COMP%]{margin-top:30px;padding-top:20px;border-top:1px solid rgba(255,255,255,.2)}.chat_block[_ngcontent-%COMP%] > .ai_chat[_ngcontent-%COMP%]{width:100%;padding:10px;background:rgba(42,42,42,.59);border-radius:10px;margin-bottom:15px;fill:#fff;display:flex;align-items:center;border:1px solid rgba(255,255,255,.06);transition:.2s scale;outline:none}.chat_block[_ngcontent-%COMP%] > .ai_chat[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{color:#003aff;width:40px;height:40px;font-size:40px;background:linear-gradient(to left,#003aff,#ff00fb);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.chat_block[_ngcontent-%COMP%] > .ai_chat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{color:#fff;font-family:Rubik Glitch,system-ui;font-size:25px;margin-left:20px;background:linear-gradient(to left,#003aff,#ff00fb);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.chat_block[_ngcontent-%COMP%] > .ai_chat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:#ffffff7d;margin-left:20px}.chat_block[_ngcontent-%COMP%] > .chat[_ngcontent-%COMP%]{width:100%;padding:10px;background:rgba(42,42,42,.59);border-radius:10px;margin-bottom:15px;fill:#fff;display:flex;align-items:center;border:1px solid rgba(255,255,255,.06);transition:.2s scale;outline:none}.active-chat.active-chat.active-chat[_ngcontent-%COMP%]{background:rgb(68,68,68);border:1px solid rgba(255,255,255,.28);scale:1.02}.active-chat.active-chat.active-chat[_ngcontent-%COMP%]:after{content:"";display:block;position:absolute;width:30px;height:30px;background-color:#444;border-top-right-radius:6px;rotate:45deg;right:-10px}.chat_block[_ngcontent-%COMP%] > .chat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-left:15px}.chat_block[_ngcontent-%COMP%] > .chat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{color:#fff;font-family:Rubik Glitch,system-ui;font-size:25px}.chat_block[_ngcontent-%COMP%] > .chat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:#ffffff7d}.chat_block[_ngcontent-%COMP%] > .chat[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:55px;height:55px;object-fit:cover;border-radius:50%;display:block}.search_box[_ngcontent-%COMP%]{position:relative}']});let e=t;return e})();var yn="firebase",_n="10.7.2";N(yn,_n,"app");var Z=new mt("ANGULARFIRE2_VERSION"),Rt=e=>`The APP_INITIALIZER that is "making" isSupported() sync for the sake of convenient DI has not resolved in this
context. Rather than injecting ${e} in the constructor, first ensure that ${e} is supported by calling
\`await isSupported()\`, then retrieve the instance from the injector manually \`injector.get(${e})\`.`;function $t(e,t,n){if(t){if(t.length===1)return t[0];let o=t.filter(s=>s.app===n);if(o.length===1)return o[0]}return n.container.getProvider(e).getImmediate({optional:!0})}var Ut=(e,t)=>{let n=t?[t]:Pe(),r=[];return n.forEach(i=>{i.container.getProvider(e).instances.forEach(s=>{r.includes(s)||r.push(s)})}),r};function ie(){}var xe=class{zone;delegate;constructor(t,n=tt){this.zone=t,this.delegate=n}now(){return this.delegate.now()}schedule(t,n,r){let i=this.zone,o=function(s){i.runGuarded(()=>{t.apply(this,[s])})};return this.delegate.schedule(o,n,r)}},Ve=class{zone;task=null;constructor(t){this.zone=t}call(t,n){let r=this.unscheduleTask.bind(this);return this.task=this.zone.run(()=>Zone.current.scheduleMacroTask("firebaseZoneBlock",ie,{},ie,ie)),n.pipe(lt({next:r,complete:r,error:r})).subscribe(t).add(r)}unscheduleTask(){setTimeout(()=>{this.task!=null&&this.task.state==="scheduled"&&(this.task.invoke(),this.task=null)},10)}},re=(()=>{class e{ngZone;outsideAngular;insideAngular;constructor(n){this.ngZone=n,this.outsideAngular=n.runOutsideAngular(()=>new xe(Zone.current)),this.insideAngular=n.run(()=>new xe(Zone.current,et)),globalThis.\u0275AngularFireScheduler||=this}static \u0275fac=function(r){return new(r||e)(_(I))};static \u0275prov=j({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Me(){let e=globalThis.\u0275AngularFireScheduler;if(!e)throw new Error(`Either AngularFireModule has not been provided in your AppModule (this can be done manually or implictly using
provideFirebaseApp) or you're calling an AngularFire method outside of an NgModule (which is not supported).`);return e}function wn(e){return Me().ngZone.runOutsideAngular(()=>e())}function G(e){return Me().ngZone.run(()=>e())}function Pn(e){return kn(Me())(e)}function kn(e){return function(n){return n=n.lift(new Ve(e.ngZone)),n.pipe(k(e.outsideAngular),P(e.insideAngular))}}var xn=(e,t)=>function(){let r=arguments;return t&&setTimeout(()=>{t.state==="scheduled"&&t.invoke()},10),G(()=>e.apply(void 0,r))},Ce=(e,t)=>function(){let n,r=arguments;for(let o=0;o<arguments.length;o++)typeof r[o]=="function"&&(t&&(n||=G(()=>Zone.current.scheduleMacroTask("firebaseZoneBlock",ie,{},ie,ie))),r[o]=xn(r[o],n));let i=wn(()=>e.apply(this,r));if(!t)if(i instanceof Y){let o=Me();return i.pipe(k(o.outsideAngular),P(o.insideAngular))}else return G(()=>i);return i instanceof Y?i.pipe(Pn):i instanceof Promise?G(()=>new Promise((o,s)=>i.then(a=>G(()=>o(a)),a=>G(()=>s(a))))):typeof i=="function"&&n?function(){return setTimeout(()=>{n&&n.state==="scheduled"&&n.invoke()},10),i.apply(this,arguments)}:G(()=>i)};var Cn="firebase",On="10.7.2";V.registerVersion(Cn,On,"app-compat");var Sn=["ngOnDestroy"],Vt=(e,t,n,r={})=>new Proxy(e,{get:(i,o)=>n.runOutsideAngular(()=>{if(e[o])return r?.spy?.get&&r.spy.get(o,e[o]),e[o];if(Sn.indexOf(o)>-1)return()=>{};let s=t.toPromise().then(a=>{let l=a?.[o];return typeof l=="function"?l.bind(a):l?.then?l.then(c=>n.run(()=>c)):n.run(()=>l)});return new Proxy(()=>{},{get:(a,l)=>s[l],apply:(a,l,c)=>s.then(v=>{let x=v?.(...c);return r?.spy?.apply&&r.spy.apply(o,c,x),x})})})});var ze=class{constructor(t){return t}},zt=new S("angularfire2.app.options"),Bt=new S("angularfire2.app.name");function qt(e,t,n){let r=typeof n=="string"&&n||"[DEFAULT]",i=typeof n=="object"&&n||{};i.name=i.name||r;let s=V.apps.filter(a=>a&&a.name===i.name)[0]||t.runOutsideAngular(()=>V.initializeApp(e,i));try{if(JSON.stringify(e)!==JSON.stringify(s.options)){let a=!!module.hot;An("error",`${s.name} Firebase App already initialized with different options${a?", you may need to reload as Firebase is not HMR aware.":"."}`)}}catch{}return new ze(s)}var An=(e,...t)=>{Ne()&&typeof console<"u"&&console[e](...t)};function Wt(e,t,n,r,i){let[,o,s]=globalThis.\u0275AngularfireInstanceCache.find(a=>a[0]===e)||[];if(o)return In(i,s)||(Nt("error",`${t} was already initialized on the ${n} Firebase App with different settings.${En?" You may need to reload as Firebase is not HMR aware.":""}`),Nt("warn",{is:i,was:s})),o;{let a=r();return globalThis.\u0275AngularfireInstanceCache.push([e,a,i]),a}}function In(e,t){try{return e.toString()===t.toString()}catch{return e===t}}var En=typeof module<"u"&&!!module.hot,Nt=(e,...t)=>{Ne()&&typeof console<"u"&&console[e](...t)};globalThis.\u0275AngularfireInstanceCache||=[];var Ln=new S("angularfire2.messaging.vapid-key"),Tn=new S("angularfire2.messaging.service-worker-registeration"),ce=(()=>{class e{requestPermission;getToken;tokenChanges;messages;requestToken;deleteToken;constructor(n,r,i,o,s,a,l){let c=l,v=me(void 0).pipe(k(s.outsideAngular),P(s.insideAngular),O(ke),O(b=>b?import("./chunk-WSNBO2U2.js"):nt),it(()=>qt(n,o,r)),O(b=>Wt(`${b.name}.messaging`,"AngularFireMessaging",b.name,()=>me(b.messaging()),[])),ct({bufferSize:1,refCount:!1}));this.requestPermission=v.pipe(k(s.outsideAngular),P(s.insideAngular),O(()=>Notification.requestPermission())),this.getToken=v.pipe(k(s.outsideAngular),P(s.insideAngular),O(b=>u(this,null,function*(){if(Notification.permission==="granted"){let z=c?yield c:null;return yield b.getToken({vapidKey:a,serviceWorkerRegistration:z})}else return null})));let x=new Y(b=>{navigator.permissions.query({name:"notifications"}).then(z=>{z.onchange=()=>b.next()})}),oe=v.pipe(k(s.outsideAngular),P(s.insideAngular),Fe(x),Fe(this.getToken));return this.tokenChanges=v.pipe(k(s.outsideAngular),P(s.insideAngular),O(()=>ot(this.getToken,oe))),this.messages=v.pipe(k(s.outsideAngular),P(s.insideAngular),O(b=>new Y(z=>b.onMessage(z)))),this.requestToken=v.pipe(k(s.outsideAngular),P(s.insideAngular),O(()=>this.requestPermission),st(()=>me(null)),rt(()=>this.tokenChanges)),this.deleteToken=()=>v.pipe(k(s.outsideAngular),P(s.insideAngular),O(b=>b.deleteToken()),at(!1)),Vt(this,v,o)}static \u0275fac=function(r){return new(r||e)(_(zt),_(Bt,8),_(se),_(I),_(re),_(Ln,8),_(Tn,8))};static \u0275prov=j({token:e,factory:e.\u0275fac,providedIn:"any"})}return e})(),Ht=(()=>{class e{constructor(){V.registerVersion("angularfire",Z.full,"fcm-compat")}static \u0275fac=function(r){return new(r||e)};static \u0275mod=ee({type:e});static \u0275inj=X({providers:[ce]})}return e})();var Oe=(()=>{let t=class t{constructor(r){this.angularFireMessaging=r,this.currentMessage=new Xe(null),this.callRequestPermission=this.angularFireMessaging.requestToken,this.angularFireMessaging.messages.subscribe(i=>{i.onMessage=i.onMessage.bind(i),i.onTokenRefresh=i.onTokenRefresh.bind(i)})}receiveMessage(){this.angularFireMessaging.messages.subscribe(r=>{console.log("new message received. ",r),this.currentMessage.next(r)})}};t.\u0275fac=function(i){return new(i||t)(_(ce))},t.\u0275prov=j({token:t,factory:t.\u0275fac});let e=t;return e})();var K=class{constructor(t){return t}},le=class{constructor(){return Pe()}};function jn(e){return e&&e.length===1?e[0]:new K(Tt())}var Be=new S("angularfire2._apps"),Rn={provide:K,useFactory:jn,deps:[[new q,Be]]},$n={provide:le,deps:[[new q,Be]]};function Un(e){return(t,n)=>{let r=t.runOutsideAngular(()=>e(n));return new K(r)}}var Nn=(()=>{class e{constructor(n){N("angularfire",Z.full,"core"),N("angularfire",Z.full,"app"),N("angular",Ue.full,n.toString())}static \u0275fac=function(r){return new(r||e)(_(se))};static \u0275mod=ee({type:e});static \u0275inj=X({providers:[Rn,$n]})}return e})();function Xi(e,...t){return{ngModule:Nn,providers:[{provide:Be,useFactory:Un(e),multi:!0,deps:[I,ve,re,...t]}]}}var er=Ce(Lt,!0);var ue=class{constructor(t){return t}},Gt="messaging",qe=class{constructor(){return Ut(Gt)}};var Zt="__angularfire_symbol__messagingIsSupported",We="__angularfire_symbol__messagingIsSupportedValue";globalThis[Zt]||=ke().then(e=>globalThis[We]=e).catch(()=>globalThis[We]=!1);var Se={async:()=>globalThis[Zt],sync:()=>{let e=globalThis[We];if(e===void 0)throw new Error(Rt("Messaging"));return e}},He=new S("angularfire2.messaging-instances");function Vn(e,t){if(!Se.sync())return null;let n=$t(Gt,e,t);return n&&new ue(n)}function zn(e){return(t,n)=>{if(!Se.sync())return null;let r=t.runOutsideAngular(()=>e(n));return new ue(r)}}var Bn={provide:qe,deps:[[new q,He]]},qn={provide:ue,useFactory:Vn,deps:[[new q,He],K]},Ge=(()=>{class e{constructor(){N("angularfire",Z.full,"fcm")}static \u0275fac=function(r){return new(r||e)};static \u0275mod=ee({type:e});static \u0275inj=X({providers:[qn,Bn,{provide:ht,useValue:Se.async,multi:!0}]})}return e})();function pr(e,...t){return{ngModule:Ge,providers:[{provide:He,useFactory:zn(e),multi:!0,deps:[I,ve,re,le,...t]}]}}var gr=Se.async;var fr=Ce(Dt,!0);var Wn=e=>{let t=new Map;t.set("web",{name:"web"});let n=e.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:t},r=(o,s)=>{n.platforms.set(o,s)},i=o=>{n.platforms.has(o)&&(n.currentPlatform=n.platforms.get(o))};return n.addPlatform=r,n.setPlatform=i,n},Hn=e=>e.CapacitorPlatforms=Wn(e),Qt=Hn(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),vr=Qt.addPlatform,br=Qt.setPlatform;var pe=function(e){return e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE",e}(pe||{}),de=class extends Error{constructor(t,n,r){super(t),this.message=t,this.code=n,this.data=r}},Gn=e=>{var t,n;return e?.androidBridge?"android":!((n=(t=e?.webkit)===null||t===void 0?void 0:t.messageHandlers)===null||n===void 0)&&n.bridge?"ios":"web"},Zn=e=>{var t,n,r,i,o;let s=e.CapacitorCustomPlatform||null,a=e.Capacitor||{},l=a.Plugins=a.Plugins||{},c=e.CapacitorPlatforms,v=()=>s!==null?s.name:Gn(e),x=((t=c?.currentPlatform)===null||t===void 0?void 0:t.getPlatform)||v,oe=()=>x()!=="web",b=((n=c?.currentPlatform)===null||n===void 0?void 0:n.isNativePlatform)||oe,z=d=>{let p=Le.get(d);return!!(p?.platforms.has(x())||Je(d))},en=((r=c?.currentPlatform)===null||r===void 0?void 0:r.isPluginAvailable)||z,tn=d=>{var p;return(p=a.PluginHeaders)===null||p===void 0?void 0:p.find(J=>J.name===d)},Je=((i=c?.currentPlatform)===null||i===void 0?void 0:i.getPluginHeader)||tn,nn=d=>e.console.error(d),rn=(d,p,J)=>Promise.reject(`${J} does not have an implementation of "${p}".`),Le=new Map,on=(d,p={})=>{let J=Le.get(d);if(J)return console.warn(`Capacitor plugin "${d}" already registered. Cannot register plugins twice.`),J.proxy;let B=x(),Q=Je(d),A,an=()=>u(void 0,null,function*(){return!A&&B in p?A=typeof p[B]=="function"?A=yield p[B]():A=p[B]:s!==null&&!A&&"web"in p&&(A=typeof p.web=="function"?A=yield p.web():A=p.web),A}),cn=(h,y)=>{var C,D;if(Q){let F=Q?.methods.find(M=>y===M.name);if(F)return F.rtype==="promise"?M=>a.nativePromise(d,y.toString(),M):(M,ge)=>a.nativeCallback(d,y.toString(),M,ge);if(h)return(C=h[y])===null||C===void 0?void 0:C.bind(h)}else{if(h)return(D=h[y])===null||D===void 0?void 0:D.bind(h);throw new de(`"${d}" plugin is not implemented on ${B}`,pe.Unimplemented)}},Te=h=>{let y,C=(...D)=>{let F=an().then(M=>{let ge=cn(M,h);if(ge){let fe=ge(...D);return y=fe?.remove,fe}else throw new de(`"${d}.${h}()" is not implemented on ${B}`,pe.Unimplemented)});return h==="addListener"&&(F.remove=()=>u(void 0,null,function*(){return y()})),F};return C.toString=()=>`${h.toString()}() { [capacitor code] }`,Object.defineProperty(C,"name",{value:h,writable:!1,configurable:!1}),C},Qe=Te("addListener"),Ye=Te("removeListener"),ln=(h,y)=>{let C=Qe({eventName:h},y),D=()=>u(void 0,null,function*(){let M=yield C;Ye({eventName:h,callbackId:M},y)}),F=new Promise(M=>C.then(()=>M({remove:D})));return F.remove=()=>u(void 0,null,function*(){console.warn("Using addListener() without 'await' is deprecated."),yield D()}),F},De=new Proxy({},{get(h,y){switch(y){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return Q?ln:Qe;case"removeListener":return Ye;default:return Te(y)}}});return l[d]=De,Le.set(d,{name:d,proxy:De,platforms:new Set([...Object.keys(p),...Q?[B]:[]])}),De},sn=((o=c?.currentPlatform)===null||o===void 0?void 0:o.registerPlugin)||on;return a.convertFileSrc||(a.convertFileSrc=d=>d),a.getPlatform=x,a.handleError=nn,a.isNativePlatform=b,a.isPluginAvailable=en,a.pluginMethodNoop=rn,a.registerPlugin=sn,a.Exception=de,a.DEBUG=!!a.DEBUG,a.isLoggingEnabled=!!a.isLoggingEnabled,a.platform=a.getPlatform(),a.isNative=a.isNativePlatform(),a},Kn=e=>e.Capacitor=Zn(e),Ae=Kn(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Ee=Ae.registerPlugin,yr=Ae.Plugins;var Ie=class{constructor(t){this.listeners={},this.windowListeners={},t&&(console.warn(`Capacitor WebPlugin "${t.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=t)}addListener(t,n){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(n);let i=this.windowListeners[t];i&&!i.registered&&this.addWindowListener(i);let o=()=>u(this,null,function*(){return this.removeListener(t,n)}),s=Promise.resolve({remove:o});return Object.defineProperty(s,"remove",{value:()=>u(this,null,function*(){console.warn("Using addListener() without 'await' is deprecated."),yield o()})}),s}removeAllListeners(){return u(this,null,function*(){this.listeners={};for(let t in this.windowListeners)this.removeWindowListener(this.windowListeners[t]);this.windowListeners={}})}notifyListeners(t,n){let r=this.listeners[t];r&&r.forEach(i=>i(n))}hasListeners(t){return!!this.listeners[t].length}registerWindowListener(t,n){this.windowListeners[n]={registered:!1,windowEventName:t,pluginEventName:n,handler:r=>{this.notifyListeners(n,r)}}}unimplemented(t="not implemented"){return new Ae.Exception(t,pe.Unimplemented)}unavailable(t="not available"){return new Ae.Exception(t,pe.Unavailable)}removeListener(t,n){return u(this,null,function*(){let r=this.listeners[t];if(!r)return;let i=r.indexOf(n);this.listeners[t].splice(i,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t])})}addWindowListener(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0}removeWindowListener(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)}};var Kt=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Jt=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent),Ze=class extends Ie{getCookies(){return u(this,null,function*(){let t=document.cookie,n={};return t.split(";").forEach(r=>{if(r.length<=0)return;let[i,o]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");i=Jt(i).trim(),o=Jt(o).trim(),n[i]=o}),n})}setCookie(t){return u(this,null,function*(){try{let n=Kt(t.key),r=Kt(t.value),i=`; expires=${(t.expires||"").replace("expires=","")}`,o=(t.path||"/").replace("path=",""),s=t.url!=null&&t.url.length>0?`domain=${t.url}`:"";document.cookie=`${n}=${r||""}${i}; path=${o}; ${s};`}catch(n){return Promise.reject(n)}})}deleteCookie(t){return u(this,null,function*(){try{document.cookie=`${t.key}=; Max-Age=0`}catch(n){return Promise.reject(n)}})}clearCookies(){return u(this,null,function*(){try{let t=document.cookie.split(";")||[];for(let n of t)document.cookie=n.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(t){return Promise.reject(t)}})}clearAllCookies(){return u(this,null,function*(){try{yield this.clearCookies()}catch(t){return Promise.reject(t)}})}},_r=Ee("CapacitorCookies",{web:()=>new Ze}),Jn=e=>u(void 0,null,function*(){return new Promise((t,n)=>{let r=new FileReader;r.onload=()=>{let i=r.result;t(i.indexOf(",")>=0?i.split(",")[1]:i)},r.onerror=i=>n(i),r.readAsDataURL(e)})}),Qn=(e={})=>{let t=Object.keys(e);return Object.keys(e).map(i=>i.toLocaleLowerCase()).reduce((i,o,s)=>(i[o]=e[t[s]],i),{})},Yn=(e,t=!0)=>e?Object.entries(e).reduce((r,i)=>{let[o,s]=i,a,l;return Array.isArray(s)?(l="",s.forEach(c=>{a=t?encodeURIComponent(c):c,l+=`${o}=${a}&`}),l.slice(0,-1)):(a=t?encodeURIComponent(s):s,l=`${o}=${a}`),`${r}&${l}`},"").substr(1):null,Xn=(e,t={})=>{let n=Object.assign({method:e.method||"GET",headers:e.headers},t),i=Qn(e.headers)["content-type"]||"";if(typeof e.data=="string")n.body=e.data;else if(i.includes("application/x-www-form-urlencoded")){let o=new URLSearchParams;for(let[s,a]of Object.entries(e.data||{}))o.set(s,a);n.body=o.toString()}else if(i.includes("multipart/form-data")||e.data instanceof FormData){let o=new FormData;if(e.data instanceof FormData)e.data.forEach((a,l)=>{o.append(l,a)});else for(let a of Object.keys(e.data))o.append(a,e.data[a]);n.body=o;let s=new Headers(n.headers);s.delete("content-type"),n.headers=s}else(i.includes("application/json")||typeof e.data=="object")&&(n.body=JSON.stringify(e.data));return n},Ke=class extends Ie{request(t){return u(this,null,function*(){let n=Xn(t,t.webFetchExtra),r=Yn(t.params,t.shouldEncodeUrlParams),i=r?`${t.url}?${r}`:t.url,o=yield fetch(i,n),s=o.headers.get("content-type")||"",{responseType:a="text"}=o.ok?t:{};s.includes("application/json")&&(a="json");let l,c;switch(a){case"arraybuffer":case"blob":c=yield o.blob(),l=yield Jn(c);break;case"json":l=yield o.json();break;case"document":case"text":default:l=yield o.text()}let v={};return o.headers.forEach((x,oe)=>{v[oe]=x}),{data:l,headers:v,status:o.status,url:o.url}})}get(t){return u(this,null,function*(){return this.request(Object.assign(Object.assign({},t),{method:"GET"}))})}post(t){return u(this,null,function*(){return this.request(Object.assign(Object.assign({},t),{method:"POST"}))})}put(t){return u(this,null,function*(){return this.request(Object.assign(Object.assign({},t),{method:"PUT"}))})}patch(t){return u(this,null,function*(){return this.request(Object.assign(Object.assign({},t),{method:"PATCH"}))})}delete(t){return u(this,null,function*(){return this.request(Object.assign(Object.assign({},t),{method:"DELETE"}))})}},wr=Ee("CapacitorHttp",{web:()=>new Ke});var Yt=Ee("StatusBar");var Xt=(()=>{let t=class t{constructor(){}setStatusBarStyle(r){return u(this,null,function*(){yield Yt.setBackgroundColor({color:r})})}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=j({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function ti(e,t){if(e&1&&(f(0,"div"),L(1,"app-chat-lists",3),m()),e&2){R();let n=ye(3);g(1),w("chat",n)}}var Gr=(()=>{let t=class t{resize(){this.windowSize=innerWidth}constructor(r,i,o,s){this.setMobileThemes=r,this.messagingService=i,this.webSocket=o,this.reqService=s,this.windowSize=innerWidth,this.token=localStorage.getItem("token"),this.userData={avatar:"./assets/images/load/load.jpg",name:"loading name...",email:"loading email...",bio:"loading biography...",l_name:"loading last name..."},this.innerWidth=innerWidth,this.webSocket.socket=this.webSocket.io(this.webSocket.uri,{auth:{token:this.webSocket.token}})}ngOnInit(){this.messagingService.callRequestPermission.subscribe(i=>{i&&this.token&&this.reqService.put(T.userEdit,{device:i,token:this.token}).subscribe(()=>{})});let r={token:this.token};this.reqService.post(T.getUser,r).subscribe(i=>{this.userData=i})}};t.\u0275fac=function(i){return new(i||t)(W(Xt),W(Oe),W(Et),W(U))},t.\u0275cmp=he({type:t,selectors:[["app-main"]],hostBindings:function(i,o){i&1&&ne("resize",function(){return o.resize()},!1,ut)},standalone:!0,features:[_e([U,Oe,ce]),we],decls:5,vars:1,consts:[[1,"container"],[2,"width","100%"],["chatBlock",""],[2,"width","30%",3,"chat"]],template:function(i,o){i&1&&(f(0,"div",0),E(1,ti,2,1,"div"),f(2,"div",1,2),L(4,"router-outlet"),m()()),i&2&&(g(1),te(1,o.windowSize>940?1:-1))},dependencies:[jt,yt,St,Ct,_t,Ht,Ge],styles:[".container[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:normal;align-items:center}"]});let e=t;return e})();export{zt as a,ce as b,Ht as c,Oe as d,Xi as e,er as f,Ge as g,pr as h,fr as i,Xt as j,Gr as k};
