import{a as N,b as q}from"./chunk-O3NBZHTB.js";import{d as S,e as F,w as I,x as L,z as B}from"./chunk-WWDSCM5Q.js";import{Ra as o,Sa as p,Za as x,_a as c,cc as y,da as _,db as v,dc as m,eb as C,fb as t,fc as E,gb as r,gc as D,ha as b,hb as d,hc as f,ia as h,jc as V,kb as M,kc as j,lc as z,nb as g,nc as u,oc as G,pc as R,qc as T,rb as w,sb as a,sc as A,tb as P,vb as O,yb as k}from"./chunk-KIWFM5SP.js";import"./chunk-JMZ7DUBM.js";function Q(l,i){l&1&&(t(0,"strong",16),a(1,"false email or password"),r())}var se=(()=>{let i=class i{constructor(s,n){this.router=s,this.requestService=n,this.hide=!0,this.isFalseLogin=!1,this.form=new z({email:new u("",f.required),password:new u("",f.required)})}send(s){this.form.valid&&(this.requestService.post(E.signIn,this.form.value).subscribe(n=>{localStorage.setItem("token",n.access_token),this.router.navigate(["./"])},n=>{n.status==401&&(this.isFalseLogin=!0)}),s.resetForm())}};i.\u0275fac=function(n){return new(n||i)(p(S),p(m))},i.\u0275cmp=_({type:i,selectors:[["app-login"]],standalone:!0,features:[O([m]),k],decls:22,vars:7,consts:[[1,"main_div"],["src","assets/images/icons/side-icons/flash-thread-colors.png",1,"side_image"],[1,"layer"],[1,"container"],[1,"images_box"],["src","assets/images/message2.gif",1,"messgae_image"],[1,"login_block"],[3,"formGroup","ngSubmit"],["formDirective","ngForm"],["type","email","name","email","formControlName","email","placeholder","Enter your email",1,"text_field"],[2,"position","relative"],["name","password","formControlName","password","type","password","placeholder","Enter your password",1,"text_field",2,"padding-right","65px",3,"type"],["type","button","mat-icon-button","",1,"hide_show_pass_btn",3,"click"],["style","margin-bottom: 10px; color: #e01212"],[1,"send_button",3,"disabled"],["routerLink","/register",1,"dont_acc_link"],[2,"margin-bottom","10px","color","#e01212"]],template:function(n,e){if(n&1){let H=M();t(0,"div",0),d(1,"img",1)(2,"div",2),t(3,"div",3)(4,"div",4),d(5,"img",5),r(),t(6,"div",6)(7,"form",7,8),g("ngSubmit",function(){b(H);let K=w(8);return h(e.send(K))}),t(9,"h1"),a(10,"Login"),r(),d(11,"input",9),t(12,"div",10),d(13,"input",11),t(14,"button",12),g("click",function(){return e.hide=!e.hide}),t(15,"mat-icon"),a(16),r()()(),v(17,Q,2,0,"strong",13),t(18,"button",14),a(19,"SEND"),r()(),t(20,"a",15),a(21,"don't have an account? - register"),r()()()()}n&2&&(o(7),c("formGroup",e.form),o(6),c("type",e.hide?"password":"text"),o(1),x("aria-label","Hide password")("aria-pressed",e.hide),o(2),P(e.hide?"visibility_off":"visibility"),o(1),C(17,e.isFalseLogin&&!e.form.touched&&!e.form.dirty?17:-1),o(1),c("disabled",e.form.invalid))},dependencies:[F,B,A,G,D,V,j,R,T,q,N,y,L,I],styles:[".main_div[_ngcontent-%COMP%]{background:linear-gradient(to left,var(--main-color2),var(--main-color1),var(--main-color1))}.main_div[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%]{width:100%;padding:0 16px}.text_field[_ngcontent-%COMP%]{color:#4b4b4b;outline:none;width:100%;padding:16px 20px 14px;background-color:#fff;border:3px solid #5c13a4;margin-top:15px;border-radius:14px;font-size:20px;font-weight:700;font-family:Poppins}.hide_show_pass_btn[_ngcontent-%COMP%]{background-color:#5c13a4;color:#fff;position:absolute;right:10px;top:24px;scale:.9}.text_field[_ngcontent-%COMP%]::placeholder{color:#5c13a46e}.text_field[_ngcontent-%COMP%]:focus{border-color:#8100ff}.text_field[_ngcontent-%COMP%]:focus::placeholder{color:#8100ff}.layer[_ngcontent-%COMP%]{background-color:#fff;width:50%;height:100vh;position:absolute;border-radius:0 20px 20px 0}h1[_ngcontent-%COMP%]{background:linear-gradient(to left,#003aff,#ff00fb);-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-align:center;font-size:50px;font-family:Asap Condensed,sans-serif;letter-spacing:4px;margin-bottom:10px}.main_div[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;height:100vh}.messgae_image[_ngcontent-%COMP%]{object-fit:cover;width:70%;height:70vh;position:absolute}.images_box[_ngcontent-%COMP%]{position:relative;width:100%;height:100vh;display:flex;align-items:center}.side_image[_ngcontent-%COMP%]{position:absolute;left:3%;top:3%;filter:drop-shadow(3px 3px 0 rgba(91,38,141,.53));width:60px;z-index:99}.login_block[_ngcontent-%COMP%]{border-radius:20px;padding:30px;width:700px;background-color:#fff;margin-right:30px}.login_block[_ngcontent-%COMP%] > form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.login_input[_ngcontent-%COMP%]{width:400px;font-size:20px;border-radius:10px;outline:none}.login_input[_ngcontent-%COMP%]:focus{border-color:#7100ff}.dont_acc_link[_ngcontent-%COMP%]{display:block;font-weight:bolder;background:linear-gradient(to left,rgb(154,26,152),#2744a6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-decoration:none;text-align:center}.send_button[_ngcontent-%COMP%]{background:linear-gradient(to left,#9900ff,#7300ff);margin-bottom:20px;margin-top:20px;font-family:Poppins;font-size:22px;letter-spacing:2px;color:#fff;padding:8px 0;border:none;border-radius:10px}.send_button[_ngcontent-%COMP%]:disabled{background-color:#7c47be;opacity:.7}@media screen and (max-width: 1030px){.images_box[_ngcontent-%COMP%], .layer[_ngcontent-%COMP%]{display:none}.main_div[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%]{justify-content:center}.login_block[_ngcontent-%COMP%]{width:70%;margin-right:0}}@media screen and (max-width: 770px){.side_image[_ngcontent-%COMP%]{width:40px;filter:drop-shadow(2px 2px 0 rgba(91,38,141,.53))}}@media screen and (max-width: 660px){.text_field[_ngcontent-%COMP%]{color:#fff;background-color:#000}.main_div[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%]{background-color:#000}.login_block[_ngcontent-%COMP%]{width:100%;background-color:#000}.login_input[_ngcontent-%COMP%]{width:100%}}@media screen and (max-width: 460px){.login_block[_ngcontent-%COMP%]{padding:5px}}"]});let l=i;return l})();export{se as LoginComponent};
