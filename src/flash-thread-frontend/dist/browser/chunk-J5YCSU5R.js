import{b as U}from"./chunk-BDNLMVIY.js";import{a as Z}from"./chunk-FRIJOY76.js";import{a as I,b as T}from"./chunk-F5I7DCU5.js";import{a as u,c as L}from"./chunk-HODLTFWJ.js";import{K as N,L as z,M as q,N as s,P as D,Q as V,R as j,T as _,U as G,V as A,W as B,Y as H,h as E,l as R,m as F}from"./chunk-EKEATKT6.js";import{Cb as S,Va as r,Wa as h,bb as w,cb as g,fa as C,hb as b,ib as c,ja as v,jb as t,ka as M,kb as a,lb as d,ob as y,rb as x,vb as P,wb as l,xb as O,zb as k}from"./chunk-MYIS5EFB.js";import"./chunk-JMZ7DUBM.js";function J(n,i){n&1&&d(0,"app-main-loader",18)}function K(n,i){n&1&&(t(0,"strong",19),l(1,"this user already exists"),a())}function Q(n,i){n&1&&(t(0,"strong",19),l(1,"The name must contain only Latin letters, before 10 characters"),a())}function W(n,i){n&1&&(t(0,"strong",19),l(1,"Enter valid email"),a())}var fe=(()=>{let i=class i{constructor(m,o){this.router=m,this.requestService=o,this.hide=!0,this.isFalseRegister=!1,this.mainLoader=!1,this.form=new j({email:new _("",[s.required,s.email]),password:new _("",s.required),name:new _("",[s.required,s.pattern(/^[a-zA-Z]+$/),s.max(10)])})}send(m){this.mainLoader=!0,this.form.valid&&(this.requestService.post(L.signUp,this.form.value).subscribe(o=>{this.mainLoader=!1,localStorage.setItem("token",o.access_token),this.router.navigate(["./"])},o=>{o.status==401&&(this.mainLoader=!1,this.isFalseRegister=!0)}),m.resetForm())}};i.\u0275fac=function(o){return new(o||i)(h(R),h(u))},i.\u0275cmp=C({type:i,selectors:[["app-register"]],standalone:!0,features:[k([u]),S],decls:26,vars:10,consts:[[1,"main_div",2,"position","relative"],["style","position: absolute; z-index: 1000; width: 100%; height: 100%"],["src","assets/images/icons/side-icons/flash-thread-colors.png",1,"side_image"],[1,"withe_layer"],[1,"container"],[1,"images_box"],["src","assets/images/message.gif",1,"messgae_image"],[1,"block"],[3,"formGroup","ngSubmit"],["formDirective","ngForm"],["type","text","name","name","formControlName","name","placeholder","Enter your name",1,"text_field"],["type","email","name","email","formControlName","email","placeholder","Enter your email",1,"text_field"],[2,"position","relative"],["name","password","formControlName","password","type","password","placeholder","Enter your password",1,"text_field",2,"padding-right","65px",3,"type"],["type","button","mat-icon-button","",1,"hide_show_pass_btn",3,"click"],["style","margin-top: 5px; color: #d23b3b; font-family: Poppins"],[1,"send_button",3,"disabled"],["routerLink","/login",1,"dont_acc_link"],[2,"position","absolute","z-index","1000","width","100%","height","100%"],[2,"margin-top","5px","color","#d23b3b","font-family","Poppins"]],template:function(o,e){if(o&1){let p=y();t(0,"div",0),b(1,J,1,0,"app-main-loader",1),d(2,"img",2)(3,"div",3),t(4,"div",4)(5,"div",5),d(6,"img",6),a(),t(7,"div",7)(8,"form",8,9),x("ngSubmit",function(){v(p);let $=P(9);return M(e.send($))}),t(10,"h1"),l(11,"Register"),a(),d(12,"input",10)(13,"input",11),t(14,"div",12),d(15,"input",13),t(16,"button",14),x("click",function(){return e.hide=!e.hide}),t(17,"mat-icon"),l(18),a()()(),b(19,K,2,0,"strong",15)(20,Q,2,0,"strong",15)(21,W,2,0,"strong",15),t(22,"button",16),l(23,"SEND"),a()(),t(24,"a",17),l(25,"already have account - login"),a()()()()}if(o&2){let p,f;r(1),c(1,e.mainLoader?1:-1),r(7),g("formGroup",e.form),r(7),g("type",e.hide?"password":"text"),r(1),w("aria-label","Hide password")("aria-pressed",e.hide),r(2),O(e.hide?"visibility_off":"visibility"),r(1),c(19,e.isFalseRegister&&!e.form.touched&&!e.form.dirty?19:-1),r(1),c(20,(p=e.form.get("name"))!=null&&p.hasError("pattern")?20:-1),r(1),c(21,(f=e.form.get("email"))!=null&&f.hasError("email")&&e.form.touched&&e.form.dirty?21:-1),r(1),g("disabled",e.form.invalid)}},dependencies:[F,U,T,I,z,N,H,G,q,D,V,A,B,E,Z],styles:[".main_div[_ngcontent-%COMP%]{background:linear-gradient(to left,var(--main-color1),var(--main-color2),var(--main-color2))}.main_div[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%]{width:100%;padding:0 16px}.withe_layer[_ngcontent-%COMP%]{background-color:#fff;width:50%;height:100vh;position:absolute;border-radius:0 20px 20px 0}.text_field[_ngcontent-%COMP%]{color:#4b4b4b;outline:none;width:100%;padding:16px 20px 14px;background-color:#fff;border:3px solid #5c13a4;margin-top:15px;border-radius:14px;font-size:20px;font-weight:700;font-family:Poppins}.hide_show_pass_btn[_ngcontent-%COMP%]{background-color:#5c13a4;color:#fff;position:absolute;right:10px;top:24px;scale:.9}.text_field[_ngcontent-%COMP%]::placeholder{color:#5c13a46e}.text_field[_ngcontent-%COMP%]:focus{border-color:#8100ff}.text_field[_ngcontent-%COMP%]:focus::placeholder{color:#8100ff}h1[_ngcontent-%COMP%]{background:linear-gradient(to left,#003aff,#ff00fb);-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-align:center;font-size:50px;font-family:Asap Condensed,sans-serif;letter-spacing:4px}.main_div[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;height:100vh}.messgae_image[_ngcontent-%COMP%]{object-fit:cover;width:70%;height:70vh;position:absolute}.images_box[_ngcontent-%COMP%]{position:relative;width:100%;height:100vh;display:flex;align-items:center}.side_image[_ngcontent-%COMP%]{position:absolute;left:3%;top:3%;filter:drop-shadow(3px 3px 0 rgba(91,38,141,.53));width:60px;z-index:99}.block[_ngcontent-%COMP%]{transition:.3s;border-radius:20px;padding:30px;background-color:#fff;width:700px;margin-right:30px}.block[_ngcontent-%COMP%] > form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.input[_ngcontent-%COMP%]{width:400px;font-size:20px;border-radius:10px;outline:none}.input[_ngcontent-%COMP%]:focus{border-color:#7100ff}.dont_acc_link[_ngcontent-%COMP%]{display:block;font-weight:bolder;background:linear-gradient(to left,rgb(154,26,152),#2744a6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-decoration:none;text-align:center}.send_button[_ngcontent-%COMP%]{background:linear-gradient(to left,#9900ff,#7300ff);margin-bottom:20px;margin-top:20px;font-family:Poppins;font-size:22px;letter-spacing:2px;color:#fff;padding:8px 0;border:none;border-radius:10px}.send_button[_ngcontent-%COMP%]:disabled{background-color:#7c47be;opacity:.7}@media screen and (max-width: 1030px){.images_box[_ngcontent-%COMP%], .withe_layer[_ngcontent-%COMP%]{display:none}.main_div[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%]{justify-content:center}.block[_ngcontent-%COMP%]{width:70%;margin-right:0}}@media screen and (max-width: 770px){.side_image[_ngcontent-%COMP%]{width:40px;filter:drop-shadow(2px 2px 0 rgba(91,38,141,.53))}}@media screen and (max-width: 660px){.text_field[_ngcontent-%COMP%]{color:#fff;background-color:#000}.main_div[_ngcontent-%COMP%]{background:white}.block[_ngcontent-%COMP%]{width:100%;background-color:#000}.input[_ngcontent-%COMP%]{width:100%}.main_div[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%]{background-color:#000}}@media screen and (max-width: 460px){.block[_ngcontent-%COMP%]{padding:5px}}"]});let n=i;return n})();export{fe as RegisterComponent};
