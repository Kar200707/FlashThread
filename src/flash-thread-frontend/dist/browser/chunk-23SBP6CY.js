import{a as nt,b as rt}from"./chunk-7FTFBMPD.js";import{a as st}from"./chunk-VFXITUL6.js";import{i as at,j as ct,k as re,l as P,m as w,n as oe,o as lt}from"./chunk-LCP4AOTT.js";import{a as Je}from"./chunk-3U5XJFFI.js";import{a as pt}from"./chunk-66LW3IYX.js";import{c as tt}from"./chunk-WZCWJEY5.js";import{D as ot,c as Ke,e as Qe,f as Ye,w as Xe,x as et}from"./chunk-JTFNDISO.js";import{$ as b,$a as de,Ab as Ue,Bb as $e,C as Te,Db as Be,F as Fe,Fb as qe,Gb as he,Ka as ee,Kb as Ze,Nb as _e,P as Re,Ra as c,S as v,Sa as D,T as ue,V as je,Wa as x,X as N,Xb as We,Y as L,Yb as Ge,_a as d,aa as u,c as j,da as J,db as k,ea as V,eb as Z,ec as He,fb as l,fc as C,g as Ae,gb as p,h as Ce,ha as Ne,hb as O,hc as I,i as Ie,ia as Le,ib as ge,j as Pe,jb as fe,k as m,kb as ze,l as h,la as E,n as Y,nb as S,ob as y,r as we,ra as X,rb as te,sb as A,t as Ee,tb as W,uc as it,v as De,va as q,vb as ne,ya as Ve,yb as ie,zb as me}from"./chunk-LENDDSTQ.js";import{d as Se}from"./chunk-JMZ7DUBM.js";var Ct=["search"];function It(e,t){e&1&&(l(0,"div",14)(1,"div",15),O(2,"div",16)(3,"div",17),p()())}var ut=e=>["/messenger/chat",e];function Pt(e,t){if(e&1&&(l(0,"div",19),O(1,"img",20),l(2,"div",21)(3,"h2"),A(4),p(),l(5,"p"),A(6),p()()()),e&2){let i=y().$implicit;d("routerLink",me(5,ut,i.id)),c(1),d("src",i.avatar,ee)("alt","avatar "+i.name),c(3),W(i.name),c(2),W(i.bio)}}function wt(e,t){if(e&1&&(ge(0),k(1,Pt,7,7,"div",18),fe()),e&2){let i=t.$implicit,n=y(2);c(1),d("ngIf",n.tokenUser.id!==i.id)}}function Et(e,t){if(e&1&&(l(0,"div",12),k(1,It,4,0,"div",13)(2,wt,2,1,"ng-container",11),p()),e&2){let i=y(),n=te(7);c(1),Z(1,i.searchData.length==0&&n.value!=""?1:-1),c(1),d("ngForOf",i.searchData)}}function Dt(e,t){if(e&1&&(l(0,"div",23),O(1,"img",24),l(2,"div")(3,"h3"),A(4),p(),l(5,"p"),A(6),p()()()),e&2){let i=y(),n=i.$implicit,r=i.index,o=y();d("routerLink",me(4,ut,n.id)),c(1),d("src",n.avatar,ee),c(3),W(n.name),c(2),W(o.chatsData[r].messages[o.chatsData[r].messages.length-1].message)}}function Tt(e,t){if(e&1&&(ge(0),k(1,Dt,7,6,"div",22),fe()),e&2){let i=t.$implicit;c(1),d("ngIf",i!=null)}}var dt=(()=>{let t=class t{constructor(n){this.reqService=n,this.isOpenedSearchBlock=!1,this.chatsData=[],this.token=localStorage.getItem("token"),this.isOpenedUserDetails=!1,this.userData={avatar:"./assets/images/load/load.jpg",name:"loading name...",email:"loading email...",bio:"loading biography...",l_name:"loading last name..."},this.searchData=[],this.chatUsersData=[]}ngOnInit(){let n={token:this.token};this.chat.addEventListener("click",()=>{this.isOpenedSearchBlock=!1}),this.reqService.post(I.getUserByToken,n).subscribe(r=>{this.tokenUser=r,this.userData=r}),this.reqService.post(I.getActiveChats,n).subscribe(r=>{r.forEach(o=>{o&&this.chatsData.push(o)}),r.forEach((o,s)=>{o&&o.usersId.forEach(a=>{if(this.userData.id!=a){let f={id:a,token:this.token};this.reqService.post(I.getUserById,f).subscribe(M=>{this.chatUsersData.push(M)})}})})})}searchValue(){let n={name:this.input?.nativeElement.value.split("").filter(r=>r.trim().length).join("")};this.reqService.post(I.search,n).subscribe(r=>{this.searchData=r})}};t.\u0275fac=function(r){return new(r||t)(D(C))},t.\u0275cmp=J({type:t,selectors:[["app-chat-lists"]],viewQuery:function(r,o){if(r&1&&$e(Ct,5),r&2){let s;Ue(s=Be())&&(o.input=s.first)}},inputs:{chat:"chat"},standalone:!0,features:[ne([C]),ie],decls:19,vars:16,consts:[["appResizeHeight","",1,"main-div",3,"size"],[1,"box"],[1,"user_img_box",3,"click"],["alt","user image",3,"src","title"],[3,"userData"],[1,"search_box",3,"mouseleave","click"],["placeholder","Search User","type","text",1,"search",3,"focus","input"],["search",""],["class","search_list_block"],[1,"chat_block"],["routerLinkActive","active-chat","routerLink","ai",1,"ai_chat"],[4,"ngFor","ngForOf"],[1,"search_list_block"],["class","loading_list"],[1,"loading_list"],[1,"list",2,"margin-top","20px"],[2,"width","50px","height","50px","border-radius","50%","background-color","#2a2a2a"],[2,"margin-left","20px","width","70%","height","20px","border-radius","5px","background-color","#2a2a2a"],["style","margin-top: 20px","class","list",3,"routerLink",4,"ngIf"],[1,"list",2,"margin-top","20px",3,"routerLink"],[3,"src","alt"],[2,"margin-left","20px"],["routerLinkActive","active-chat","class","chat",3,"routerLink",4,"ngIf"],["routerLinkActive","active-chat",1,"chat",3,"routerLink"],["alt","chat",3,"src"]],template:function(r,o){r&1&&(l(0,"div",0)(1,"div",1)(2,"div",2),S("click",function(){return o.isOpenedUserDetails=!o.isOpenedUserDetails}),O(3,"img",3),p(),O(4,"app-user-details",4),l(5,"div",5),S("mouseleave",function(){return o.isOpenedSearchBlock=!1})("click",function(){return o.isOpenedSearchBlock=!0}),l(6,"input",6,7),S("focus",function(){return o.isOpenedSearchBlock=!0})("input",function(){return o.searchValue()}),p(),k(8,Et,3,2,"div",8),p()(),l(9,"div",9)(10,"div",10)(11,"mat-icon"),A(12,"auto_awesome"),p(),l(13,"div")(14,"h3"),A(15,"Flash Ai"),p(),l(16,"p"),A(17,"Ai"),p()()(),k(18,Tt,2,1,"ng-container",11),p()()),r&2&&(d("size",1),c(3),d("src",o.userData.avatar,ee)("title",o.userData.name),c(1),de("left",o.isOpenedUserDetails?"40px":"-7%")("top",o.isOpenedUserDetails?"75px":"-24%")("opacity",o.isOpenedUserDetails?"1":"0")("scale",o.isOpenedUserDetails?"1":"0"),d("userData",o.userData),c(2),de("width",o.isOpenedSearchBlock?"400px":"300px"),c(2),Z(8,o.isOpenedSearchBlock?8:-1),c(10),d("ngForOf",o.chatUsersData))},dependencies:[Je,We,Ge,Qe,nt,rt,ot,Ye,et,Xe],styles:['.main-div[_ngcontent-%COMP%]{background-image:linear-gradient(to left,rgba(152,46,131,.14),rgba(0,51,153,.12));overflow-y:scroll;background-color:#171717;padding:20px;width:100%}.list[_ngcontent-%COMP%]{padding:10px;background-color:#3d3d3d;border-radius:10px;display:flex;align-items:center;border:1px solid rgba(255,255,255,.13)}.search_list_block[_ngcontent-%COMP%]{width:100%;padding:0 20px 20px;box-shadow:#00000012 0 3px 6px,#00000021 0 3px 6px;position:absolute;top:35px;background-color:#232323;border-bottom-left-radius:10px;border-bottom-right-radius:10px}.list[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:50px;height:50px;object-fit:cover;border-radius:50%}.list[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%], .list[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:#fff}header[_ngcontent-%COMP%]{background-image:linear-gradient(to left,var(--main-color1),var(--main-color2));width:400px}.box[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.side-icon[_ngcontent-%COMP%]{width:30px;height:30px}.search[_ngcontent-%COMP%]{outline:none;color:#fff6;background-color:transparent;border:1px solid;height:15px;font-family:Rubik Glitch,system-ui;font-weight:bolder;border-radius:7px;padding:20px 15px;transition:.3s;box-shadow:#00000012 0 3px 6px,#00000021 0 3px 6px}.search[_ngcontent-%COMP%]:focus{box-shadow:#00000040 0 14px 28px,#00000038 0 10px 10px;border-color:#039}app-user-details[_ngcontent-%COMP%]{position:absolute;box-shadow:#00000040 0 14px 28px,#00000038 0 10px 10px;top:10px;left:20px;transition:.2s;border-radius:20px;border:1px solid rgba(255,255,255,.09);z-index:999}.user_img_box[_ngcontent-%COMP%]{width:45px;height:45px;margin-right:10px;background-color:#3d3d3d;top:20px;right:20px;border-radius:50%;overflow:hidden;display:flex;align-items:center;justify-content:center;padding:20px;transition:.2s}.user_img_box[_ngcontent-%COMP%]:active{scale:.95}.user_img_box[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:35px;height:35px;object-fit:cover;border-radius:50%}.chat_block[_ngcontent-%COMP%]{margin-top:30px;padding-top:20px;border-top:1px solid rgba(255,255,255,.2)}.chat_block[_ngcontent-%COMP%] > .ai_chat[_ngcontent-%COMP%]{width:100%;padding:10px;background:rgba(42,42,42,.59);border-radius:10px;margin-bottom:15px;fill:#fff;display:flex;align-items:center;border:1px solid rgba(255,255,255,.06);transition:.2s scale;outline:none}.chat_block[_ngcontent-%COMP%] > .ai_chat[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{color:#003aff;width:40px;height:40px;font-size:40px;background:linear-gradient(to left,#003aff,#ff00fb);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.chat_block[_ngcontent-%COMP%] > .ai_chat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{color:#fff;font-family:Rubik Glitch,system-ui;font-size:25px;margin-left:20px;background:linear-gradient(to left,#003aff,#ff00fb);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.chat_block[_ngcontent-%COMP%] > .ai_chat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:#ffffff7d;margin-left:20px}.chat_block[_ngcontent-%COMP%] > .chat[_ngcontent-%COMP%]{width:100%;padding:10px;background:rgba(42,42,42,.59);border-radius:10px;margin-bottom:15px;fill:#fff;display:flex;align-items:center;border:1px solid rgba(255,255,255,.06);transition:.2s scale;outline:none}.active-chat.active-chat.active-chat[_ngcontent-%COMP%]{background:rgb(68,68,68);border:1px solid rgba(255,255,255,.28);scale:1.02}.active-chat.active-chat.active-chat[_ngcontent-%COMP%]:after{content:"";display:block;position:absolute;width:30px;height:30px;background-color:#444;border-top-right-radius:6px;rotate:45deg;right:-10px}.chat_block[_ngcontent-%COMP%] > .chat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-left:15px}.chat_block[_ngcontent-%COMP%] > .chat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{color:#fff;font-family:Rubik Glitch,system-ui;font-size:25px}.chat_block[_ngcontent-%COMP%] > .chat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:#ffffff7d}.chat_block[_ngcontent-%COMP%] > .chat[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:55px;height:55px;object-fit:cover;border-radius:50%;display:block}.search_box[_ngcontent-%COMP%]{position:relative}']});let e=t;return e})();var Ft="firebase",Rt="10.7.2";P(Ft,Rt,"app");var F=new qe("ANGULARFIRE2_VERSION"),gt=e=>`The APP_INITIALIZER that is "making" isSupported() sync for the sake of convenient DI has not resolved in this
context. Rather than injecting ${e} in the constructor, first ensure that ${e} is supported by calling
\`await isSupported()\`, then retrieve the instance from the injector manually \`injector.get(${e})\`.`;function ft(e,t,i){if(t){if(t.length===1)return t[0];let o=t.filter(s=>s.app===i);if(o.length===1)return o[0]}return i.container.getProvider(e).getImmediate({optional:!0})}var mt=(e,t)=>{let i=t?[t]:re(),n=[];return i.forEach(r=>{r.container.getProvider(e).instances.forEach(s=>{n.includes(s)||n.push(s)})}),n};function U(){}var se=class{zone;delegate;constructor(t,i=Ie){this.zone=t,this.delegate=i}now(){return this.delegate.now()}schedule(t,i,n){let r=this.zone,o=function(s){r.runGuarded(()=>{t.apply(this,[s])})};return this.delegate.schedule(o,i,n)}},ve=class{zone;task=null;constructor(t){this.zone=t}call(t,i){let n=this.unscheduleTask.bind(this);return this.task=this.zone.run(()=>Zone.current.scheduleMacroTask("firebaseZoneBlock",U,{},U,U)),i.pipe(je({next:n,complete:n,error:n})).subscribe(t).add(n)}unscheduleTask(){setTimeout(()=>{this.task!=null&&this.task.state==="scheduled"&&(this.task.invoke(),this.task=null)},10)}},$=(()=>{class e{ngZone;outsideAngular;insideAngular;constructor(i){this.ngZone=i,this.outsideAngular=i.runOutsideAngular(()=>new se(Zone.current)),this.insideAngular=i.run(()=>new se(Zone.current,Ce)),globalThis.\u0275AngularFireScheduler||=this}static \u0275fac=function(n){return new(n||e)(u(x))};static \u0275prov=N({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function ae(){let e=globalThis.\u0275AngularFireScheduler;if(!e)throw new Error(`Either AngularFireModule has not been provided in your AppModule (this can be done manually or implictly using
provideFirebaseApp) or you're calling an AngularFire method outside of an NgModule (which is not supported).`);return e}function jt(e){return ae().ngZone.runOutsideAngular(()=>e())}function T(e){return ae().ngZone.run(()=>e())}function Nt(e){return Lt(ae())(e)}function Lt(e){return function(i){return i=i.lift(new ve(e.ngZone)),i.pipe(h(e.outsideAngular),m(e.insideAngular))}}var Vt=(e,t)=>function(){let n=arguments;return t&&setTimeout(()=>{t.state==="scheduled"&&t.invoke()},10),T(()=>e.apply(void 0,n))},ce=(e,t)=>function(){let i,n=arguments;for(let o=0;o<arguments.length;o++)typeof n[o]=="function"&&(t&&(i||=T(()=>Zone.current.scheduleMacroTask("firebaseZoneBlock",U,{},U,U))),n[o]=Vt(n[o],i));let r=jt(()=>e.apply(this,n));if(!t)if(r instanceof j){let o=ae();return r.pipe(h(o.outsideAngular),m(o.insideAngular))}else return T(()=>r);return r instanceof j?r.pipe(Nt):r instanceof Promise?T(()=>new Promise((o,s)=>r.then(a=>T(()=>o(a)),a=>T(()=>s(a))))):typeof r=="function"&&i?function(){return setTimeout(()=>{i&&i.state==="scheduled"&&i.invoke()},10),r.apply(this,arguments)}:T(()=>r)};var Ut="firebase",$t="10.7.2";w.registerVersion(Ut,$t,"app-compat");var Bt=["ngOnDestroy"],_t=(e,t,i,n={})=>new Proxy(e,{get:(r,o)=>i.runOutsideAngular(()=>{if(e[o])return n?.spy?.get&&n.spy.get(o,e[o]),e[o];if(Bt.indexOf(o)>-1)return()=>{};let s=t.toPromise().then(a=>{let f=a?.[o];return typeof f=="function"?f.bind(a):f?.then?f.then(M=>i.run(()=>M)):i.run(()=>f)});return new Proxy(()=>{},{get:(a,f)=>s[f],apply:(a,f,M)=>s.then(_=>{let Q=_?.(...M);return n?.spy?.apply&&n.spy.apply(o,M,Q),Q})})})});var be=class{constructor(t){return t}},vt=new b("angularfire2.app.options"),bt=new b("angularfire2.app.name");function Mt(e,t,i){let n=typeof i=="string"&&i||"[DEFAULT]",r=typeof i=="object"&&i||{};r.name=r.name||n;let s=w.apps.filter(a=>a&&a.name===r.name)[0]||t.runOutsideAngular(()=>w.initializeApp(e,r));try{if(JSON.stringify(e)!==JSON.stringify(s.options)){let a=!!module.hot;qt("error",`${s.name} Firebase App already initialized with different options${a?", you may need to reload as Firebase is not HMR aware.":"."}`)}}catch{}return new be(s)}var qt=(e,...t)=>{_e()&&typeof console<"u"&&console[e](...t)};function xt(e,t,i,n,r){let[,o,s]=globalThis.\u0275AngularfireInstanceCache.find(a=>a[0]===e)||[];if(o)return Zt(r,s)||(ht("error",`${t} was already initialized on the ${i} Firebase App with different settings.${Wt?" You may need to reload as Firebase is not HMR aware.":""}`),ht("warn",{is:r,was:s})),o;{let a=n();return globalThis.\u0275AngularfireInstanceCache.push([e,a,r]),a}}function Zt(e,t){try{return e.toString()===t.toString()}catch{return e===t}}var Wt=typeof module<"u"&&!!module.hot,ht=(e,...t)=>{_e()&&typeof console<"u"&&console[e](...t)};globalThis.\u0275AngularfireInstanceCache||=[];var Gt=new b("angularfire2.messaging.vapid-key"),Ht=new b("angularfire2.messaging.service-worker-registeration"),G=(()=>{class e{requestPermission;getToken;tokenChanges;messages;requestToken;deleteToken;constructor(i,n,r,o,s,a,f){let M=f,_=Y(void 0).pipe(h(s.outsideAngular),m(s.insideAngular),v(oe),v(g=>g?import("./chunk-WSNBO2U2.js"):Pe),we(()=>Mt(i,o,n)),v(g=>xt(`${g.name}.messaging`,"AngularFireMessaging",g.name,()=>Y(g.messaging()),[])),Re({bufferSize:1,refCount:!1}));this.requestPermission=_.pipe(h(s.outsideAngular),m(s.insideAngular),v(()=>Notification.requestPermission())),this.getToken=_.pipe(h(s.outsideAngular),m(s.insideAngular),v(g=>Se(this,null,function*(){if(Notification.permission==="granted"){let B=M?yield M:null;return yield g.getToken({vapidKey:a,serviceWorkerRegistration:B})}else return null})));let Q=new j(g=>{navigator.permissions.query({name:"notifications"}).then(B=>{B.onchange=()=>g.next()})}),St=_.pipe(h(s.outsideAngular),m(s.insideAngular),ue(Q),ue(this.getToken));return this.tokenChanges=_.pipe(h(s.outsideAngular),m(s.insideAngular),v(()=>De(this.getToken,St))),this.messages=_.pipe(h(s.outsideAngular),m(s.insideAngular),v(g=>new j(B=>g.onMessage(B)))),this.requestToken=_.pipe(h(s.outsideAngular),m(s.insideAngular),v(()=>this.requestPermission),Te(()=>Y(null)),Ee(()=>this.tokenChanges)),this.deleteToken=()=>_.pipe(h(s.outsideAngular),m(s.insideAngular),v(g=>g.deleteToken()),Fe(!1)),_t(this,_,o)}static \u0275fac=function(n){return new(n||e)(u(vt),u(bt,8),u(q),u(x),u($),u(Gt,8),u(Ht,8))};static \u0275prov=N({token:e,factory:e.\u0275fac,providedIn:"any"})}return e})(),yt=(()=>{class e{constructor(){w.registerVersion("angularfire",F.full,"fcm-compat")}static \u0275fac=function(n){return new(n||e)};static \u0275mod=V({type:e});static \u0275inj=L({providers:[G]})}return e})();var le=(()=>{let t=class t{constructor(n){this.angularFireMessaging=n,this.currentMessage=new Ae(null),this.callRequestPermission=this.angularFireMessaging.requestToken,this.angularFireMessaging.messages.subscribe(r=>{r.onMessage=r.onMessage.bind(r),r.onTokenRefresh=r.onTokenRefresh.bind(r)})}receiveMessage(){this.angularFireMessaging.messages.subscribe(n=>{console.log("new message received. ",n),this.currentMessage.next(n)})}};t.\u0275fac=function(r){return new(r||t)(u(G))},t.\u0275prov=N({token:t,factory:t.\u0275fac});let e=t;return e})();var R=class{constructor(t){return t}},H=class{constructor(){return re()}};function Yt(e){return e&&e.length===1?e[0]:new R(ct())}var Me=new b("angularfire2._apps"),Jt={provide:R,useFactory:Yt,deps:[[new E,Me]]},Xt={provide:H,deps:[[new E,Me]]};function en(e){return(t,i)=>{let n=t.runOutsideAngular(()=>e(i));return new R(n)}}var tn=(()=>{class e{constructor(i){P("angularfire",F.full,"core"),P("angularfire",F.full,"app"),P("angular",he.full,i.toString())}static \u0275fac=function(n){return new(n||e)(u(q))};static \u0275mod=V({type:e});static \u0275inj=L({providers:[Jt,Xt]})}return e})();function oi(e,...t){return{ngModule:tn,providers:[{provide:Me,useFactory:en(e),multi:!0,deps:[x,X,$,...t]}]}}var si=ce(at,!0);var K=class{constructor(t){return t}},kt="messaging",xe=class{constructor(){return mt(kt)}};var Ot="__angularfire_symbol__messagingIsSupported",ye="__angularfire_symbol__messagingIsSupportedValue";globalThis[Ot]||=oe().then(e=>globalThis[ye]=e).catch(()=>globalThis[ye]=!1);var pe={async:()=>globalThis[Ot],sync:()=>{let e=globalThis[ye];if(e===void 0)throw new Error(gt("Messaging"));return e}},ke=new b("angularfire2.messaging-instances");function nn(e,t){if(!pe.sync())return null;let i=ft(kt,e,t);return i&&new K(i)}function rn(e){return(t,i)=>{if(!pe.sync())return null;let n=t.runOutsideAngular(()=>e(i));return new K(n)}}var on={provide:xe,deps:[[new E,ke]]},sn={provide:K,useFactory:nn,deps:[[new E,ke],R]},Oe=(()=>{class e{constructor(){P("angularfire",F.full,"fcm")}static \u0275fac=function(n){return new(n||e)};static \u0275mod=V({type:e});static \u0275inj=L({providers:[sn,on,{provide:Ze,useValue:pe.async,multi:!0}]})}return e})();function vi(e,...t){return{ngModule:Oe,providers:[{provide:ke,useFactory:rn(e),multi:!0,deps:[x,X,$,H,...t]}]}}var bi=pe.async;var Mi=ce(lt,!0);function an(e,t){if(e&1){let i=ze();l(0,"div")(1,"app-chat-lists",3),S("click",function(){Ne(i);let r=y();return Le(r.isOpenedUserDetails=!1)}),p()()}if(e&2){y();let i=te(3);c(1),d("chat",i)}}var Ui=(()=>{let t=class t{resize(){this.windowSize=innerWidth}constructor(n,r,o,s){this.setMobileThemes=n,this.messagingService=r,this.webSocket=o,this.reqService=s,this.windowSize=innerWidth,this.isOpenedUserDetails=!1,this.token=localStorage.getItem("token"),this.userData={avatar:"./assets/images/load/load.jpg",name:"loading name...",email:"loading email...",bio:"loading biography...",l_name:"loading last name..."},this.innerWidth=innerWidth,this.setMobileThemes.setStatusBarStyle("#2a2a2a").then().catch(),this.webSocket.socket=this.webSocket.io(this.webSocket.uri,{auth:{token:this.webSocket.token}})}ngOnInit(){this.messagingService.callRequestPermission.subscribe(r=>{r&&this.token&&this.reqService.put(I.userEdit,{device:r,token:this.token}).subscribe(()=>{})});let n={token:this.token};this.reqService.post(I.getUser,n).subscribe(r=>{this.userData=r})}};t.\u0275fac=function(r){return new(r||t)(D(pt),D(le),D(st),D(C))},t.\u0275cmp=J({type:t,selectors:[["app-main"]],hostBindings:function(r,o){r&1&&S("resize",function(){return o.resize()},!1,Ve)},standalone:!0,features:[ne([C,le,G]),ie],decls:5,vars:1,consts:[[1,"container"],[2,"width","100%",3,"click"],["chatBlock",""],[2,"width","30%",3,"chat","click"]],template:function(r,o){r&1&&(l(0,"div",0),k(1,an,2,1,"div"),l(2,"div",1,2),S("click",function(){return o.isOpenedUserDetails=!1}),O(4,"router-outlet"),p()()),r&2&&(c(1),Z(1,o.windowSize>940?1:-1))},dependencies:[dt,He,it,tt,Ke,yt,Oe],styles:[".container[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:normal;align-items:center}"]});let e=t;return e})();export{vt as a,G as b,yt as c,le as d,oi as e,si as f,Oe as g,vi as h,Mi as i,Ui as j};