import{b as B}from"./chunk-7SP2NWYR.js";import{a as H}from"./chunk-MEG67MLH.js";import{a as I,b as q}from"./chunk-SKY63XYT.js";import{a as m,c as R}from"./chunk-UQMEPWWM.js";import{$ as c,Ab as T,Cb as A,E as b,I as x,J as C,Na as k,Ra as S,Sa as F,U as o,V as f,_ as v,da as u,ea as _,fa as t,ga as a,ha as s,ka as M,ma as h,ob as E,pb as N,qa as w,qb as z,ra as d,rb as p,sa as P,tb as L,ua as y,ub as D,va as O,vb as V,xb as g,yb as j,zb as G}from"./chunk-PWFBOZXI.js";import"./chunk-JMZ7DUBM.js";function Q(r,n){r&1&&s(0,"app-main-loader",18)}function W(r,n){r&1&&(t(0,"strong",19),d(1,"this user already exists"),a())}var me=(()=>{let n=class n{constructor(l,i){this.router=l,this.requestService=i,this.hide=!0,this.isFalseRegister=!1,this.mainLoader=!1,this.form=new V({email:new g("",p.required),password:new g("",p.required),name:new g("",p.required)})}send(l){this.mainLoader=!0,this.form.valid&&(this.requestService.post(R.signUp,this.form.value).subscribe(i=>{this.mainLoader=!1,localStorage.setItem("token",i.access_token),this.router.navigate(["./"])},i=>{i.status==401&&(this.isFalseRegister=!0)}),l.resetForm())}};n.\u0275fac=function(i){return new(i||n)(f(S),f(m))},n.\u0275cmp=b({type:n,selectors:[["app-register"]],standalone:!0,features:[y([m]),O],decls:24,vars:8,consts:[[1,"main_div",2,"position","relative"],["style","position: absolute; z-index: 1000; width: 100%; height: 100%"],["src","assets/images/icons/side-icons/flash-thread-colors.png",1,"side_image"],[1,"withe_layer"],[1,"container"],[1,"images_box"],["src","assets/images/message.gif",1,"messgae_image"],[1,"block"],[3,"formGroup","ngSubmit"],["formDirective","ngForm"],["type","text","name","name","formControlName","name","placeholder","Enter your name",1,"text_field"],["type","email","name","email","formControlName","email","placeholder","Enter your email",1,"text_field"],[2,"position","relative"],["name","password","formControlName","password","type","password","placeholder","Enter your password",1,"text_field",2,"padding-right","65px",3,"type"],["type","button","mat-icon-button","",1,"hide_show_pass_btn",3,"click"],["style","margin-bottom: 10px; color: #e01212"],[1,"send_button",3,"disabled"],["routerLink","/login",1,"dont_acc_link"],[2,"position","absolute","z-index","1000","width","100%","height","100%"],[2,"margin-bottom","10px","color","#e01212"]],template:function(i,e){if(i&1){let U=M();t(0,"div",0),u(1,Q,1,0,"app-main-loader",1),s(2,"img",2)(3,"div",3),t(4,"div",4)(5,"div",5),s(6,"img",6),a(),t(7,"div",7)(8,"form",8,9),h("ngSubmit",function(){x(U);let K=w(9);return C(e.send(K))}),t(10,"h1"),d(11,"Register"),a(),s(12,"input",10)(13,"input",11),t(14,"div",12),s(15,"input",13),t(16,"button",14),h("click",function(){return e.hide=!e.hide}),t(17,"mat-icon"),d(18),a()()(),u(19,W,2,0,"strong",15),t(20,"button",16),d(21,"SEND"),a()(),t(22,"a",17),d(23,"already have account - login"),a()()()()}i&2&&(o(1),_(1,e.mainLoader?1:-1),o(7),c("formGroup",e.form),o(7),c("type",e.hide?"password":"text"),o(1),v("aria-label","Hide password")("aria-pressed",e.hide),o(2),P(e.hide?"visibility_off":"visibility"),o(1),_(19,e.isFalseRegister&&!e.form.touched&&!e.form.dirty?19:-1),o(1),c("disabled",e.form.invalid))},dependencies:[F,B,q,I,N,E,A,j,z,L,D,G,T,k,H],styles:[".main_div[_ngcontent-%COMP%]{background:linear-gradient(to left,var(--main-color1),var(--main-color2),var(--main-color2))}.main_div[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%]{width:100%;padding:0 16px}.withe_layer[_ngcontent-%COMP%]{background-color:#fff;width:50%;height:100vh;position:absolute;border-radius:0 20px 20px 0}.text_field[_ngcontent-%COMP%]{color:#4b4b4b;outline:none;width:100%;padding:16px 20px 14px;background-color:#fff;border:3px solid #5c13a4;margin-top:15px;border-radius:14px;font-size:20px;font-weight:700;font-family:Poppins}.hide_show_pass_btn[_ngcontent-%COMP%]{background-color:#5c13a4;color:#fff;position:absolute;right:10px;top:24px;scale:.9}.text_field[_ngcontent-%COMP%]::placeholder{color:#5c13a46e}.text_field[_ngcontent-%COMP%]:focus{border-color:#8100ff}.text_field[_ngcontent-%COMP%]:focus::placeholder{color:#8100ff}h1[_ngcontent-%COMP%]{background:linear-gradient(to left,#003aff,#ff00fb);-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-align:center;font-size:50px;font-family:Asap Condensed,sans-serif;letter-spacing:4px}.main_div[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;height:100vh}.messgae_image[_ngcontent-%COMP%]{object-fit:cover;width:70%;height:70vh;position:absolute}.images_box[_ngcontent-%COMP%]{position:relative;width:100%;height:100vh;display:flex;align-items:center}.side_image[_ngcontent-%COMP%]{position:absolute;left:3%;top:3%;filter:drop-shadow(3px 3px 0 rgba(91,38,141,.53));width:60px;z-index:99}.block[_ngcontent-%COMP%]{border-radius:20px;padding:30px;background-color:#fff;width:700px;margin-right:30px}.block[_ngcontent-%COMP%] > form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.input[_ngcontent-%COMP%]{width:400px;font-size:20px;border-radius:10px;outline:none}.input[_ngcontent-%COMP%]:focus{border-color:#7100ff}.dont_acc_link[_ngcontent-%COMP%]{display:block;font-weight:bolder;background:linear-gradient(to left,rgb(154,26,152),#2744a6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-decoration:none;text-align:center}.send_button[_ngcontent-%COMP%]{background:linear-gradient(to left,#9900ff,#7300ff);margin-bottom:20px;margin-top:20px;font-family:Poppins;font-size:22px;letter-spacing:2px;color:#fff;padding:8px 0;border:none;border-radius:10px}.send_button[_ngcontent-%COMP%]:disabled{background-color:#7c47be;opacity:.7}@media screen and (max-width: 1030px){.images_box[_ngcontent-%COMP%], .withe_layer[_ngcontent-%COMP%]{display:none}.main_div[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%]{justify-content:center}.block[_ngcontent-%COMP%]{width:70%;margin-right:0}}@media screen and (max-width: 770px){.side_image[_ngcontent-%COMP%]{width:40px;filter:drop-shadow(2px 2px 0 rgba(91,38,141,.53))}}@media screen and (max-width: 660px){.text_field[_ngcontent-%COMP%]{color:#fff;background-color:#000}.main_div[_ngcontent-%COMP%]{background:white}.block[_ngcontent-%COMP%]{width:100%;background-color:#000}.input[_ngcontent-%COMP%]{width:100%}.main_div[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%]{background-color:#000}}@media screen and (max-width: 460px){.block[_ngcontent-%COMP%]{padding:5px}}"]});let r=n;return r})();export{me as RegisterComponent};
