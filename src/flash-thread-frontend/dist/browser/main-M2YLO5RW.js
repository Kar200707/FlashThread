import{a as T,b as P,c as k,d as f,e as x,f as j,g as D,h,i as g,j as E,k as L}from"./chunk-DU6GYLVK.js";import"./chunk-ZQWXMHTV.js";import"./chunk-VV62BV6J.js";import"./chunk-LCP4AOTT.js";import"./chunk-SQY326CE.js";import"./chunk-O3NBZHTB.js";import{a as F,c as R,d as c,g as I,r as y}from"./chunk-WWDSCM5Q.js";import{Sa as m,Yb as S,ba as n,cc as A,da as a,dc as l,fc as b,hb as p,na as u,vb as M,yb as s}from"./chunk-KIWFM5SP.js";import"./chunk-JMZ7DUBM.js";var v=(e,t)=>{let B=localStorage.getItem("token"),o=n(c);return B?(o.navigate(["/messenger"]),!1):!0};var i=()=>{let e=localStorage.getItem("token"),t=n(c);return e?!0:(t.navigate(["/login"]),!1)};var q=[{path:"",redirectTo:innerWidth>940?"messenger":"chats-menu",pathMatch:"full"},{title:"FlashThread Chats",canActivate:[i],loadComponent:()=>import("./chunk-4W35PRQF.js").then(e=>e.ChatsMenuComponent),path:"chats-menu"},{canActivate:[i],loadComponent:()=>import("./chunk-QMSDTV4P.js").then(e=>e.MainComponent),path:"messenger",children:[{canActivate:[i],loadComponent:()=>import("./chunk-S7MNBV5E.js").then(e=>e.ChatComponent),path:"chat/:id"},{canActivate:[i],loadComponent:()=>import("./chunk-EERQNTGP.js").then(e=>e.FlashAiComponent),path:"ai",title:"Flash Ai"}]},{canActivate:[v],loadComponent:()=>import("./chunk-R66BGOAE.js").then(e=>e.LoginComponent),path:"login",title:"Flash Thread Login"},{canActivate:[v],loadComponent:()=>import("./chunk-R6ZHYLZY.js").then(e=>e.RegisterComponent),path:"register",title:"Flash Thread Register"},{canActivate:[i],loadComponent:()=>import("./chunk-HC2CKPGR.js").then(e=>e.ProfileEditComponent),path:"profile",title:"Profile"}];var C={apiKey:"AIzaSyBz0EakdSKMLL49mEpz6AmPpmT2pZt4JDA",authDomain:"flash-thread.firebaseapp.com",projectId:"flash-thread",storageBucket:"flash-thread.appspot.com",messagingSenderId:"889572240321",appId:"1:889572240321:web:ed23f59d691d51423fdd40",measurementId:"G-ZRLRP66075"};var G={providers:[{provide:T,useValue:C},I(q),y(),u(x(()=>j(C),h(()=>g()))),u(h(()=>g()))]};var O=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=a({type:t,selectors:[["app-layout"]],standalone:!0,features:[s],decls:1,vars:0,template:function(r,d){r&1&&p(0,"router-outlet")},dependencies:[R]});let e=t;return e})();var z=(()=>{let t=class t{constructor(o,r,d){this.setMobileThemes=o,this.reqService=r,this.messagingService=d,this.token=localStorage.getItem("token"),E.isNative&&this.setMobileThemes.setStatusBarStyle("#000000").then().catch()}ngOnInit(){this.messagingService.callRequestPermission.subscribe(o=>{o&&this.reqService.put(b.userEdit,{device:o,token:this.token}).subscribe(()=>{})})}};t.\u0275fac=function(r){return new(r||t)(m(L),m(l),m(f))},t.\u0275cmp=a({type:t,selectors:[["app-root"]],standalone:!0,features:[M([f,P,l]),s],decls:1,vars:0,template:function(r,d){r&1&&p(0,"app-layout")},dependencies:[S,O,k,D,A]});let e=t;return e})();F(z,G).catch(e=>console.error(e));
