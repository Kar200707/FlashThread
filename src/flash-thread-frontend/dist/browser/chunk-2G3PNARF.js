import{a as D}from"./chunk-VNKSPXN3.js";import{a as ee,b as te}from"./chunk-7SP2NWYR.js";import{a as q,b as N}from"./chunk-SKY63XYT.js";import{a as j,c as v}from"./chunk-37RFCEB7.js";import{$ as C,Ab as X,Bb as Y,Cb as Z,E as F,I as _,Ia as I,J as m,Ja as z,Sa as B,U as p,V,ca as y,da as b,ea as w,fa as s,ga as a,ha as k,ka as M,ma as f,na as r,ob as G,pb as H,qa as g,qb as R,ra as d,rb as L,sa as O,tb as Q,ub as $,va as E,vb as U,xa as S,xb as W,ya as T,yb as J,za as A,zb as K}from"./chunk-PWFBOZXI.js";import"./chunk-JMZ7DUBM.js";var ne=["messagesScrollBox"],ie=["img"];function oe(o,c){if(o&1){let i=M();s(0,"mat-icon",25),f("click",function(){_(i);let e=r(2).$implicit,t=r(2);return m(t.textToSpeech(e.message))}),d(1,"volume_up"),a()}}function se(o,c){if(o&1){let i=M();s(0,"mat-icon",25),f("click",function(){_(i);let e=r(2).$implicit,t=r(2);return m(t.textToSpeech(e.message))}),d(1,"volume_off"),a()}}function ae(o,c){if(o&1){let i=M();s(0,"mat-icon"),d(1,"auto_awesome"),a(),s(2,"div",20,21),f("mousedown",function(){_(i);let e=g(3),t=r(3);return m(t.selectMessage(e))})("mouseup",function(){_(i);let e=g(3),t=r(3);return m(t.unselectMessage(e))})("touchstart",function(){_(i);let e=g(3),t=r(3);return m(t.selectMessage(e))})("touchend",function(){_(i);let e=g(3),t=r(3);return m(t.unselectMessage(e))}),s(4,"pre"),d(5),a(),s(6,"div",22)(7,"mat-icon",23,24),f("click",function(){_(i);let e=g(8),t=r().$implicit,l=r(2);return m(l.copyText(t.message,e))}),d(9),a(),b(10,oe,2,0,"mat-icon")(11,se,2,0),a()()}if(o&2){let i=r().$implicit,n=r(2);p(5),O(i.message===""?"try typing other text":i.message),p(4),O(n.isCopied?"done":"content_copy"),p(1),w(10,n.isSpeak?11:10)}}function re(o,c){if(o&1){let i=M();s(0,"p",26,27),f("mousedown",function(){_(i);let e=g(1),t=r(3);return m(t.selectMessage(e))})("mouseup",function(){_(i);let e=g(1),t=r(3);return m(t.unselectMessage(e))})("touchstart",function(){_(i);let e=g(1),t=r(3);return m(t.selectMessage(e))})("touchend",function(){_(i);let e=g(1),t=r(3);return m(t.unselectMessage(e))}),d(2),a()}if(o&2){let i=r().$implicit;p(2),O(i.message)}}function le(o,c){if(o&1&&(s(0,"div",19),b(1,ae,12,3)(2,re,3,1),a()),o&2){let i=c.$implicit;y(i.sender!=="user"?"message_box_reverce":"message_box"),p(1),w(1,i.sender!=="user"?1:2)}}function ce(o,c){if(o&1&&(s(0,"div"),b(1,le,3,3,"div",18),a()),o&2){let i=r();p(1),C("ngForOf",i.aiChatMessages)}}function _e(o,c){o&1&&(s(0,"div",28)(1,"mat-icon"),d(2,"auto_awesome"),a(),k(3,"img",29),a())}function me(o,c){if(o&1){let i=M();s(0,"div")(1,"mat-icon",25),f("click",function(){_(i);let e=r();return m(e.isSelectedImg=!1)}),d(2,"close"),a(),k(3,"img",null,30),a()}}var ye=(()=>{let c=class c{constructor(n){this.reqService=n,this.isLoadedAiAnswer=!0,this.aiChatMessages=[],this.isCopied=!1,this.isSpeak=!1,this.token=localStorage.getItem("token"),this.isSelectedImg=!1,this.chatHistory=[],this.form=new U({message:new W("",L.required)}),this.innerWidth=innerWidth}ngOnInit(){this.reqService.post(v.aiGetChat,{token:this.token}).subscribe(e=>{this.aiChatMessages=e.messages,setTimeout(()=>{this.messagesBoxScroll&&(this.messagesBoxScroll.nativeElement.scrollTop=this.messagesBoxScroll.nativeElement.scrollHeight)},100)});let n={token:this.token};this.reqService.post(v.getUserByToken,n).subscribe(e=>{this.thisUser=e})}textToSpeech(n){if(this.isSpeak=!this.isSpeak,this.isSpeak){let e=new SpeechSynthesisUtterance;e.text=n,e.lang="en-US",speechSynthesis.speak(e)}else speechSynthesis.cancel()}copyText(n,e){e.innerText="done",this.isCopied=!0,navigator.clipboard.writeText(n)}setImage(n,e,t){try{this.isSelectedImg=!0;let l=new FileReader;e.files&&(l.readAsDataURL(e.files[0]),l.onload=()=>{this.img&&(this.img.nativeElement.src=l.result)})}catch{this.isSelectedImg=!1}}deleteChat(){confirm("delete this ai chat?")&&this.reqService.delete(v.aiDeleteChat,{token:this.token}).subscribe(()=>{this.aiChatMessages=[]})}scrollDown(){setTimeout(()=>{this.messagesBoxScroll&&(this.messagesBoxScroll.nativeElement.scrollTop=this.messagesBoxScroll.nativeElement.scrollHeight)},100)}send(n){if(this.isCopied=!1,this.isSpeak=!1,this.isLoadedAiAnswer=!1,this.form.value.message){let e=new Date,t={message:this.form.value.message,sender:"user"},l=this.form.value.message;this.aiChatMessages.push(t),setTimeout(()=>{this.messagesBoxScroll?.nativeElement.scrollTo(0,this.messagesBoxScroll?.nativeElement.scrollHeight)},100);let x=new FormData;this.isSelectedImg&&x.set("image",n.files[0]),x.set("message",this.form.value.message),x.set("userToken",this.token),x.set("history",JSON.stringify(this.chatHistory)),this.reqService.post(v.ai,x).subscribe(u=>{if(this.chatHistory.push({role:"user",parts:l}),this.chatHistory.push({role:"model",parts:u.aiGeneratedMessage}),u.aiGeneratedMessage===""){let h=new Audio;h.src="assets/audios/notifiaction/error-call-to-attention-129258.mp3",h.load(),h.play()}else{let h=new Audio;h.src="assets/audios/notifiaction/bloop-2-186531.mp3",h.load(),h.play()}let P={message:u.aiGeneratedMessage===""?"try typing other text":u.aiGeneratedMessage,sender:"ai"};this.form.reset(),this.isLoadedAiAnswer=!0,this.aiChatMessages.push(P),setTimeout(()=>{this.messagesBoxScroll?.nativeElement.scrollTo(0,this.messagesBoxScroll?.nativeElement.scrollHeight)},100)},u=>{u.status===401&&(this.isLoadedAiAnswer=!0)})}this.form.reset()}selectMessage(n){n.style.transition=".3s",n.style.scale=".98"}unselectMessage(n){n.style.transition=".3s",n.style.scale="1"}};c.\u0275fac=function(e){return new(e||c)(V(j))},c.\u0275cmp=F({type:c,selectors:[["app-flash-ai"]],viewQuery:function(e,t){if(e&1&&(T(ne,5),T(ie,5)),e&2){let l;S(l=A())&&(t.messagesBoxScroll=l.first),S(l=A())&&(t.img=l.first)}},standalone:!0,features:[E],decls:31,vars:8,consts:[[1,"main-div"],[1,"lear"],["appResizeHeight","",1,"messages_scroll_box",3,"size"],["messagesScrollBox",""],[4,"ngIf"],["class","ai_loading"],[1,"selected_chat_user"],["title","delete chat","mat-icon-button","",1,"delete_button",3,"click"],["color","warn"],["routerLink","/chats-menu"],[1,"img_box"],[1,"message_sending_panel"],[3,"formGroup","ngSubmit"],["matInput","","formControlName","message","placeholder","Type your message...","name","message","type","text",1,"message_input",3,"focus"],[1,"send_button",3,"disabled"],[1,"select_image"],["capture","camera","type","file","multiple","","accept","image/*",3,"change"],["imageInput",""],["style","font-size: 16px;","class","message",3,"class",4,"ngFor","ngForOf"],[1,"message",2,"font-size","16px"],[1,"animated-message",3,"mousedown","mouseup","touchstart","touchend"],["aiMessage",""],[1,"message-tools-box"],[2,"margin-right","10px",3,"click"],["icon",""],[3,"click"],[3,"mousedown","mouseup","touchstart","touchend"],["myMessage",""],[1,"ai_loading"],["src","../../../assets/images/loading.gif"],["img",""]],template:function(e,t){if(e&1){let l=M();s(0,"div",0)(1,"div",1)(2,"div",2,3),b(4,ce,2,1,"div",4)(5,_e,4,0,"div",5),a(),s(6,"div",6)(7,"button",7),f("click",function(){return t.deleteChat()}),s(8,"mat-icon",8),d(9,"delete_sweep"),a()(),s(10,"a",9)(11,"mat-icon"),d(12,"arrow_back_ios"),a()(),s(13,"div",10)(14,"mat-icon"),d(15,"auto_awesome"),a(),s(16,"h3"),d(17,"Flash Ai"),a()()(),s(18,"div",11)(19,"form",12),f("ngSubmit",function(){_(l);let u=g(30);return m(t.send(u))}),b(20,me,5,0,"div",4),s(21,"input",13),f("focus",function(){return t.scrollDown()}),a(),s(22,"button",14)(23,"mat-icon"),d(24,"auto_awesome"),a()(),s(25,"label")(26,"span",15)(27,"mat-icon"),d(28,"photo_camera"),a()(),s(29,"input",16,17),f("change",function(u){_(l);let P=g(30);return m(t.setImage(t.img,P,u))}),a()()()()()()}e&2&&(p(2),C("size",t.innerWidth>940?130:140),p(2),C("ngIf",t.aiChatMessages!=null),p(1),w(5,t.isLoadedAiAnswer?-1:5),p(14),C("formGroup",t.form),p(1),C("ngIf",t.isSelectedImg),p(2),C("disabled",t.form.invalid),p(1),y(t.form.valid?"send_button_icon-anim":""))},dependencies:[Y,J,R,Q,$,H,G,te,ee,I,z,Z,K,X,D,B,N,q],styles:[".main-div[_ngcontent-%COMP%]{background-color:#262626;height:100vh}.lear[_ngcontent-%COMP%]{height:100%;display:flex;align-items:center;flex-direction:column;padding:58px 20px 0;position:relative;backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background-color:#0000001f}.message[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:#0e0e0e;position:relative;display:flex;align-items:center;padding:10px 15px 13px;border:1px solid #ffffff26;border-radius:20px 20px 20px 0}.message[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > pre[_ngcontent-%COMP%]{background:linear-gradient(to left,#003aff,#ff00fb);-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-user-select:auto;user-select:auto;table-layout:fixed;display:table;color:#fff;font-weight:400;font-family:Poppins;align-items:center;position:relative;margin-left:10px;white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word}.message[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{padding:10px 20px;border-radius:20px 20px 0;background:rgb(0,80,239);color:#fff;font-weight:400;font-family:Poppins;display:flex;align-items:center;position:relative;margin-left:40px}.message[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{color:#fff;margin-bottom:10px;margin-left:5px}.message_box[_ngcontent-%COMP%]{overflow-x:scroll;width:100%;display:flex;align-items:center;justify-content:end;margin-top:20px;-ms-overflow-style:none;scrollbar-width:none}.message_box[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.message_box_reverce[_ngcontent-%COMP%]{width:100%;overflow-x:scroll;position:relative;display:flex;align-items:flex-start;justify-content:start;flex-direction:column;margin-top:13px}.message_sending_panel[_ngcontent-%COMP%]{position:fixed;bottom:0;background-color:#000;padding:16px 30px;width:100%;border-top-left-radius:32px;border-top-right-radius:32px}.message_sending_panel[_ngcontent-%COMP%] > form[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;position:relative;width:100%}.message_sending_panel[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:-60px;right:0}.message_sending_panel[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{color:#fff;position:absolute;top:-10px;right:-10px;background-color:#b54949;border-radius:50%}.message_sending_panel[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:55px;height:55px;border-radius:10px;border:5px solid #2a2a2a;object-fit:cover}.select_image[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:40px;width:40px;background-color:#2a2a2a;margin-left:10px;border-radius:50%}.select_image[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{color:#c5c5c5}.message_sending_panel[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > label[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{display:none}.message_input[_ngcontent-%COMP%]{background-color:#262626;display:block;border:none;outline:none;width:70%;border-radius:30px;padding:11px 24px;color:#fff;font-family:Poppins;font-size:16px;font-weight:400;line-height:18px;text-align:left}.message_input[_ngcontent-%COMP%]::placeholder{color:#fff9}.controllers_box[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;padding:0 25px}.send_button[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:40px;width:40px;background-color:#fff;margin-left:10px;border-radius:50%;border:none}@media screen and (max-width: 410px){.message_input[_ngcontent-%COMP%]{width:65%}}.send_button[_ngcontent-%COMP%]:disabled{opacity:.3}.send_button[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{background:linear-gradient(to left,#003aff,#ff00fb);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.send_button_icon-anim[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_send_anim alternate-reverse .4s ease-in-out infinite}@keyframes _ngcontent-%COMP%_send_anim{0%{scale:.9}to{scale:1}}.messages_scroll_box[_ngcontent-%COMP%]{width:100%;overflow-y:scroll;padding-bottom:10px}.messages_scroll_box[_ngcontent-%COMP%]::-webkit-scrollbar{width:0}.selected_chat_user[_ngcontent-%COMP%]{justify-content:center;z-index:500;padding:10px 25px;background-color:#000;position:absolute;left:0;top:0;width:100%;display:flex;align-items:center;border-bottom-left-radius:32px;border-bottom-right-radius:32px}.delete_button[_ngcontent-%COMP%]{position:absolute;right:20px;display:flex;align-items:center;justify-content:center}.delete_button[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{font-size:30px;width:30px;height:30px}.selected_chat_user[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{margin-right:20px;display:none;width:25px}.selected_chat_user[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{color:#fff;display:block;font-size:25px}.selected_chat_user[_ngcontent-%COMP%] > .img_box[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center}.selected_chat_user[_ngcontent-%COMP%] > .img_box[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{background:linear-gradient(to left,#003aff,#ff00fb);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-family:Poppins;font-size:25px;margin-left:20px}.selected_chat_user[_ngcontent-%COMP%] > .img_box[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{background:linear-gradient(to left,#003aff,#ff00fb);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-size:30px;width:30px;height:30px}.in-chat-user-avatar[_ngcontent-%COMP%]{width:30px;height:30px;object-fit:cover;border-radius:50%;display:block;position:absolute;left:-40px}.first_message_block[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{font-size:35px;color:#fff;margin-bottom:30px}.first_message_block[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative}.first_message_block[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:focus{outline:5px solid #5c13a4}.first_message_block[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > button[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{font-size:35px;width:33px;height:31px;color:#fff;display:flex;align-items:center;justify-content:center}@media screen and (max-width: 940px){.lear[_ngcontent-%COMP%]{padding:70px 16px 0}.messages_scroll_box[_ngcontent-%COMP%]{width:100%}.selected_chat_user[_ngcontent-%COMP%]{padding:16px 25px}.selected_chat_user[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{display:block;position:absolute;left:25px}}@media screen and (max-width: 594px){.first_message_block[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{width:100%}.first_message_block[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:90%}.message_box[_ngcontent-%COMP%]{margin-top:5px}.message[_ngcontent-%COMP%] > pre[_ngcontent-%COMP%], .message[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:16px}}@media screen and (max-width: 574px){.first_message_block[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{font-size:30px;text-align:center;max-width:90%}}.ai_loading[_ngcontent-%COMP%]{display:flex;align-items:center;margin-left:5px}.ai_loading[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{color:#fff}.ai_loading[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:130px;border-radius:20px;filter:saturate(4.3)}.animated-message[_ngcontent-%COMP%]{position:relative;animation:.2s _ngcontent-%COMP%_animatedmessage alternate ease-in-out}@keyframes _ngcontent-%COMP%_animatedmessage{0%{transform:translate(-700px)}to{transform:translate(0)}}.message-tools-box[_ngcontent-%COMP%]{position:absolute;right:20px;top:-30px}.message-tools-box[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{color:#898989}"]});let o=c;return o})();export{ye as FlashAiComponent};
