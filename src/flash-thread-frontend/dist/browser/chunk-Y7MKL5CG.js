import{a as Q,b as $}from"./chunk-7FTFBMPD.js";import{a as q}from"./chunk-3U5XJFFI.js";import"./chunk-WZCWJEY5.js";import{D as V,e as L,f as R,w as A,x as B}from"./chunk-JTFNDISO.js";import{$a as w,Ab as I,Bb as T,Db as j,Ka as f,Ra as a,Sa as y,Xb as z,Yb as F,_a as l,da as P,db as g,eb as C,fb as o,fc as b,gb as c,hb as h,hc as u,ib as v,jb as M,nb as x,ob as m,rb as D,sb as d,tb as _,ub as S,vb as U,yb as E,zb as O}from"./chunk-LENDDSTQ.js";import"./chunk-JMZ7DUBM.js";var J=["search"];function K(n,s){n&1&&(o(0,"div",14)(1,"div",15),h(2,"div",16)(3,"div",17),c()())}var G=n=>["/messenger/chat",n];function W(n,s){if(n&1&&(o(0,"div",19),h(1,"img",20),o(2,"div",21)(3,"h2"),d(4),c(),o(5,"p"),d(6),c()()()),n&2){let r=m().$implicit;l("routerLink",O(5,G,r.id)),a(1),l("src",r.avatar,f)("alt","avatar "+r.name),a(3),_(r.name),a(2),_(r.bio)}}function X(n,s){if(n&1&&(v(0),g(1,W,7,7,"div",18),M()),n&2){let r=s.$implicit,i=m(2);a(1),l("ngIf",i.tokenUser.id!==r.id)}}function Y(n,s){if(n&1&&(o(0,"div",12),g(1,K,4,0,"div",13)(2,X,2,1,"ng-container",11),c()),n&2){let r=m(),i=D(7);a(1),C(1,r.searchData.length==0&&i.value!=""?1:-1),a(1),l("ngForOf",r.searchData)}}function Z(n,s){if(n&1&&(o(0,"div",23),h(1,"img",24),o(2,"div")(3,"div")(4,"h3"),d(5),c(),o(6,"p"),d(7),c()(),o(8,"p"),d(9),c()()()),n&2){let r=m(),i=r.$implicit,e=r.index,t=m();l("routerLink",O(5,G,i.id)),a(1),l("src",i.avatar,f),a(4),_(i.name),a(2),S(" ",t.chatsData[e].messages[t.chatsData[e].messages.length-1].date.hours+":"+t.chatsData[e].messages[t.chatsData[e].messages.length-1].date.minutes,""),a(2),_(t.chatsData[e].messages[t.chatsData[e].messages.length-1].message)}}function tt(n,s){if(n&1&&(v(0),g(1,Z,10,7,"div",22),M()),n&2){let r=s.$implicit;a(1),l("ngIf",r!=null)}}var ht=(()=>{let s=class s{constructor(i){this.reqService=i,this.isOpenedSearchBlock=!1,this.chatsData=[],this.token=localStorage.getItem("token"),this.isOpenedUserDetails=!1,this.userData={avatar:"./assets/images/load/load.jpg",name:"loading name...",email:"loading email...",bio:"loading biography...",l_name:"loading last name..."},this.searchData=[],this.chatUsersData=[]}ngOnInit(){let i={token:this.token};this.reqService.post(u.getUserByToken,i).subscribe(e=>{this.tokenUser=e,this.userData=e}),this.reqService.post(u.getActiveChats,i).subscribe(e=>{e.forEach(t=>{t&&this.chatsData.push(t)}),e.forEach((t,p)=>{t&&t.usersId.forEach(k=>{if(this.userData.id!=k){let H={id:k,token:this.token};this.reqService.post(u.getUserById,H).subscribe(N=>{this.chatUsersData.push(N)})}})})})}searchValue(){let i={name:this.input?.nativeElement.value.split("").filter(e=>e.trim().length).join("")};this.reqService.post(u.search,i).subscribe(e=>{this.searchData=e})}};s.\u0275fac=function(e){return new(e||s)(y(b))},s.\u0275cmp=P({type:s,selectors:[["app-chats-menu"]],viewQuery:function(e,t){if(e&1&&T(J,5),e&2){let p;I(p=j())&&(t.input=p.first)}},standalone:!0,features:[U([b]),E],decls:19,vars:14,consts:[["appResizeHeight","",1,"main-div",3,"size"],[1,"box"],[1,"user_img_box",3,"click"],["alt","user image",3,"src","title"],[3,"userData"],[1,"search_box",3,"mouseleave","click"],["placeholder","Search User","type","text",1,"search",3,"focus","input"],["search",""],["class","search_list_block"],[1,"chat_block"],["routerLink","/messenger/ai",1,"ai_chat"],[4,"ngFor","ngForOf"],[1,"search_list_block"],["class","loading_list"],[1,"loading_list"],[1,"list",2,"margin-top","20px"],[2,"width","50px","height","50px","border-radius","50%","background-color","#2a2a2a"],[2,"margin-left","20px","width","70%","height","20px","border-radius","5px","background-color","#2a2a2a"],["style","margin-top: 20px","class","list",3,"routerLink",4,"ngIf"],[1,"list",2,"margin-top","20px",3,"routerLink"],[3,"src","alt"],[2,"margin-left","20px"],["routerLinkActive","active-chat","class","chat",3,"routerLink",4,"ngIf"],["routerLinkActive","active-chat",1,"chat",3,"routerLink"],["alt","chat",3,"src"]],template:function(e,t){e&1&&(o(0,"div",0)(1,"div",1)(2,"div",2),x("click",function(){return t.isOpenedUserDetails=!t.isOpenedUserDetails}),h(3,"img",3),c(),h(4,"app-user-details",4),o(5,"div",5),x("mouseleave",function(){return t.isOpenedSearchBlock=!1})("click",function(){return t.isOpenedSearchBlock=!0}),o(6,"input",6,7),x("focus",function(){return t.isOpenedSearchBlock=!0})("input",function(){return t.searchValue()}),c(),g(8,Y,3,2,"div",8),c()(),o(9,"div",9)(10,"div",10)(11,"mat-icon"),d(12,"auto_awesome"),c(),o(13,"div")(14,"h3"),d(15,"Flash Ai"),c(),o(16,"p"),d(17,"Ai"),c()()(),g(18,tt,2,1,"ng-container",11),c()()),e&2&&(l("size",1),a(3),l("src",t.userData.avatar,f)("title",t.userData.name),a(1),w("left",t.isOpenedUserDetails?"40px":"-7%")("top",t.isOpenedUserDetails?"75px":"-24%")("opacity",t.isOpenedUserDetails?"1":"0")("scale",t.isOpenedUserDetails?"1":"0"),l("userData",t.userData),a(4),C(8,t.isOpenedSearchBlock?8:-1),a(10),l("ngForOf",t.chatUsersData))},dependencies:[q,z,F,L,Q,$,V,R,B,A],styles:['.main-div[_ngcontent-%COMP%]{background-image:linear-gradient(to left,rgba(152,46,131,.14),rgba(0,51,153,.12));background-color:#171717;overflow-y:scroll;width:100%}.main-div[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.list[_ngcontent-%COMP%]{padding:10px;background-color:#3d3d3d;border-radius:10px;display:flex;align-items:center;border:1px solid rgba(255,255,255,.13)}.search_list_block[_ngcontent-%COMP%]{width:100%;padding:0 20px 20px;box-shadow:#00000012 0 3px 6px,#00000021 0 3px 6px;position:absolute;top:35px;background-color:#232323;border-bottom-left-radius:10px;border-bottom-right-radius:10px}.list[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:50px;height:50px;object-fit:cover;border-radius:50%}.list[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%], .list[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:#fff}.box[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;background-color:#2a2a2a;padding:15px}.side-icon[_ngcontent-%COMP%]{width:30px;height:30px}.search[_ngcontent-%COMP%]{outline:none;color:#fff;background-color:transparent;border:1px solid;height:15px;font-family:Asap Condensed,sans-serif;font-weight:bolder;border-radius:20px;padding:21px 15px 20px;transition:.3s}.search[_ngcontent-%COMP%]:focus{box-shadow:#00000040 0 14px 28px,#00000038 0 10px 10px;border-color:#039}app-user-details[_ngcontent-%COMP%]{position:absolute;box-shadow:#00000040 0 14px 28px,#00000038 0 10px 10px;top:10px;left:20px;transition:.2s;border-radius:20px;border:1px solid rgba(255,255,255,.09);z-index:999}.user_img_box[_ngcontent-%COMP%]{width:45px;height:45px;margin-right:10px;background-color:#3d3d3d;top:20px;right:20px;border-radius:50%;overflow:hidden;display:flex;align-items:center;justify-content:center;padding:20px;transition:.2s}.user_img_box[_ngcontent-%COMP%]:active{scale:.95}.user_img_box[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:35px;height:35px;object-fit:cover;border-radius:50%}.chat_block[_ngcontent-%COMP%] > .chat[_ngcontent-%COMP%]{width:100%;padding:10px;background:rgba(23,23,23,.39);fill:#fff;display:flex;align-items:center;border-top:1px solid rgba(0,0,0,.6);transition:.2s scale;outline:none}.chat_block[_ngcontent-%COMP%] > .ai_chat[_ngcontent-%COMP%]{width:100%;padding:10px;background:rgba(42,42,42,.59);fill:#fff;display:flex;align-items:center;border:1px solid rgba(255,255,255,.06);transition:.2s scale;outline:none}.chat_block[_ngcontent-%COMP%] > .ai_chat[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{color:#003aff;width:40px;height:40px;font-size:40px;background:linear-gradient(to left,#003aff,#ff00fb);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.chat_block[_ngcontent-%COMP%] > .ai_chat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{color:#fff;font-family:Rubik Glitch,system-ui;font-size:25px;margin-left:20px;background:linear-gradient(to left,#003aff,#ff00fb);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.chat_block[_ngcontent-%COMP%] > .ai_chat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:#ffffff7d;margin-left:20px}.active-chat.active-chat.active-chat[_ngcontent-%COMP%]{background:rgb(68,68,68);border:1px solid rgba(255,255,255,.28);scale:1.02}.active-chat.active-chat.active-chat[_ngcontent-%COMP%]:after{content:"";display:block;position:absolute;width:30px;height:30px;background-color:#444;border-top-right-radius:6px;rotate:45deg;right:-10px}.chat_block[_ngcontent-%COMP%] > .chat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-left:15px;width:100%}.chat_block[_ngcontent-%COMP%] > .chat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%}.chat_block[_ngcontent-%COMP%] > .chat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:#c4c4c4}.chat_block[_ngcontent-%COMP%] > .chat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{color:#fff;font-family:Rubik Glitch,system-ui;font-size:25px}.chat_block[_ngcontent-%COMP%] > .chat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:#ffffff7d}.chat_block[_ngcontent-%COMP%] > .chat[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:55px;height:55px;object-fit:cover;border-radius:50%;display:block}.search_box[_ngcontent-%COMP%]{position:relative;width:80%}@media screen and (max-width: 520px){.search[_ngcontent-%COMP%]{width:100%}}']});let n=s;return n})();export{ht as ChatsMenuComponent};
