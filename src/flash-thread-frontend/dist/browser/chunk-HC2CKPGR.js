import{Ra as d,Sa as c,_a as v,cc as F,da as f,dc as o,fb as i,fc as h,gb as s,gc as y,ha as u,hb as m,hc as k,ia as p,jc as D,kb as S,kc as N,lc as V,nb as g,nc as _,oc as q,pc as G,qc as E,rb as w,sb as l,sc as M,vb as b,yb as C}from"./chunk-KIWFM5SP.js";import"./chunk-JMZ7DUBM.js";var B=(()=>{let t=class t{constructor(r){this.reqService=r,this.token=localStorage.getItem("token"),this.form=new V({avatar:new _("",k.required)})}ngOnInit(){}send(r){let e=new FormData;e.set("file",r.files[0]),e.set("email","test#wff"),e.set("name","nasd"),e.set("l_name","dsfgs"),e.set("avatar","sdfsdf"),e.set("bio","assssss"),e.set("id","karen"),e.set("token",this.token),this.reqService.put(h.userEdit,e).subscribe(a=>{})}};t.\u0275fac=function(e){return new(e||t)(c(o))},t.\u0275cmp=f({type:t,selectors:[["app-profile-edit"]],standalone:!0,features:[b([o]),C],decls:8,vars:1,consts:[[3,"formGroup","ngSubmit"],["formControlName","avatar","name","avatar","type","file"],["avatarFile",""],["autoplay","","src","blob:https://www.youtube.com/30b23e26-077f-496e-91ec-01f0d5e999ef"]],template:function(e,a){if(e&1){let I=S();i(0,"p"),l(1,"profile-edit works!"),s(),i(2,"form",0),g("ngSubmit",function(){u(I);let R=w(4);return p(a.send(R))}),m(3,"input",1,2),i(5,"button"),l(6,"save"),s()(),m(7,"video",3)}e&2&&(d(2),v("formGroup",a.form))},dependencies:[F,M,q,y,D,N,G,E]});let n=t;return n})();export{B as ProfileEditComponent};
