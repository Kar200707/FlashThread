import{a as j}from"./chunk-SQY326CE.js";import{b as q,c as H}from"./chunk-OWTRPE7Q.js";import{e as B,w as R,x as D,y as ee,z as te}from"./chunk-WWDSCM5Q.js";import{Ab as S,Bb as T,Db as A,Ra as p,Sa as V,Wb as I,Xb as z,_a as C,bb as k,da as F,db as b,dc as G,eb as w,fb as s,fc as v,gb as a,gc as N,ha as _,hb as O,hc as L,ia as m,jc as Q,kb as M,kc as $,lc as U,nb as f,nc as W,ob as r,oc as J,pc as Y,qc as K,rb as g,rc as X,sb as d,sc as Z,tb as P,yb as E}from"./chunk-KIWFM5SP.js";import"./chunk-JMZ7DUBM.js";var ne=["messagesScrollBox"],ie=["img"];function oe(o,l){if(o&1){let i=M();s(0,"mat-icon",25),f("click",function(){_(i);let e=r(2).$implicit,t=r(2);return m(t.textToSpeech(e.message))}),d(1,"volume_up"),a()}}function se(o,l){if(o&1){let i=M();s(0,"mat-icon",25),f("click",function(){_(i);let e=r(2).$implicit,t=r(2);return m(t.textToSpeech(e.message))}),d(1,"volume_off"),a()}}function ae(o,l){if(o&1){let i=M();s(0,"mat-icon"),d(1,"auto_awesome"),a(),s(2,"div",20,21),f("mousedown",function(){_(i);let e=g(3),t=r(3);return m(t.selectMessage(e))})("mouseup",function(){_(i);let e=g(3),t=r(3);return m(t.unselectMessage(e))})("touchstart",function(){_(i);let e=g(3),t=r(3);return m(t.selectMessage(e))})("touchend",function(){_(i);let e=g(3),t=r(3);return m(t.unselectMessage(e))}),s(4,"pre"),d(5),a(),s(6,"div",22)(7,"mat-icon",23,24),f("click",function(){_(i);let e=g(8),t=r().$implicit,c=r(2);return m(c.copyText(t.message,e))}),d(9),a(),b(10,oe,2,0,"mat-icon")(11,se,2,0),a()()}if(o&2){let i=r().$implicit,n=r(2);p(5),P(i.message===""?"try typing other text":i.message),p(4),P(n.isCopied?"done":"content_copy"),p(1),w(10,n.isSpeak?11:10)}}function re(o,l){if(o&1){let i=M();s(0,"p",26,27),f("mousedown",function(){_(i);let e=g(1),t=r(3);return m(t.selectMessage(e))})("mouseup",function(){_(i);let e=g(1),t=r(3);return m(t.unselectMessage(e))})("touchstart",function(){_(i);let e=g(1),t=r(3);return m(t.selectMessage(e))})("touchend",function(){_(i);let e=g(1),t=r(3);return m(t.unselectMessage(e))}),d(2),a()}if(o&2){let i=r().$implicit;p(2),P(i.message)}}function ce(o,l){if(o&1&&(s(0,"div",19),b(1,ae,12,3)(2,re,3,1),a()),o&2){let i=l.$implicit;k(i.sender!=="user"?"message_box_reverce":"message_box"),p(1),w(1,i.sender!=="user"?1:2)}}function le(o,l){if(o&1&&(s(0,"div"),b(1,ce,3,3,"div",18),a()),o&2){let i=r();p(1),C("ngForOf",i.aiChatMessages)}}function _e(o,l){o&1&&(s(0,"div",28)(1,"mat-icon"),d(2,"auto_awesome"),a(),O(3,"img",29),a())}function me(o,l){if(o&1){let i=M();s(0,"div")(1,"mat-icon",25),f("click",function(){_(i);let e=r();return m(e.isSelectedImg=!1)}),d(2,"close"),a(),O(3,"img",null,30),a()}}var ye=(()=>{let l=class l{constructor(n){this.reqService=n,this.isLoadedAiAnswer=!0,this.aiChatMessages=[],this.isCopied=!1,this.isSpeak=!1,this.token=localStorage.getItem("token"),this.isSelectedImg=!1,this.chatHistory=[],this.form=new U({message:new W("",L.required)}),this.innerWidth=innerWidth}ngOnInit(){this.reqService.post(v.aiGetChat,{token:this.token}).subscribe(e=>{this.aiChatMessages=e.messages,setTimeout(()=>{this.messagesBoxScroll&&(this.messagesBoxScroll.nativeElement.scrollTop=this.messagesBoxScroll.nativeElement.scrollHeight)},100)});let n={token:this.token};this.reqService.post(v.getUserByToken,n).subscribe(e=>{this.thisUser=e})}textToSpeech(n){if(this.isSpeak=!this.isSpeak,this.isSpeak){let e=new SpeechSynthesisUtterance;e.text=n,e.lang="en-US",speechSynthesis.speak(e)}else speechSynthesis.cancel()}copyText(n,e){e.innerText="done",this.isCopied=!0,navigator.clipboard.writeText(n)}setImage(n,e,t){try{this.isSelectedImg=!0;let c=new FileReader;e.files&&(c.readAsDataURL(e.files[0]),c.onload=()=>{this.img&&(this.img.nativeElement.src=c.result)})}catch{this.isSelectedImg=!1}}deleteChat(){confirm("delete this ai chat?")&&this.reqService.delete(v.aiDeleteChat,{token:this.token}).subscribe(()=>{this.aiChatMessages=[]})}send(n){if(this.isCopied=!1,this.isSpeak=!1,this.isLoadedAiAnswer=!1,this.form.value.message){let e=new Date,t={message:this.form.value.message,sender:"user"},c=this.form.value.message;this.aiChatMessages.push(t);let u=new FormData;this.isSelectedImg&&u.set("image",n.files[0]),u.set("message",this.form.value.message),u.set("userToken",this.token),u.set("history",JSON.stringify(this.chatHistory)),this.reqService.post(v.ai,u).subscribe(x=>{if(this.chatHistory.push({role:"user",parts:c}),this.chatHistory.push({role:"model",parts:x.aiGeneratedMessage}),x.aiGeneratedMessage===""){let h=new Audio;h.src="assets/audios/notifiaction/error-call-to-attention-129258.mp3",h.load(),h.play()}else{let h=new Audio;h.src="assets/audios/notifiaction/bloop-2-186531.mp3",h.load(),h.play()}let y={message:x.aiGeneratedMessage===""?"try typing other text":x.aiGeneratedMessage,sender:"ai"};this.form.reset(),setTimeout(()=>{this.messagesBoxScroll?.nativeElement.scrollTo(0,this.messagesBoxScroll?.nativeElement.scrollHeight)},100),this.isLoadedAiAnswer=!0,this.aiChatMessages.push(y)})}this.form.reset(),setTimeout(()=>{this.messagesBoxScroll?.nativeElement.scrollTo(0,this.messagesBoxScroll?.nativeElement.scrollHeight)},100)}selectMessage(n){n.style.transition=".3s",n.style.scale=".98"}unselectMessage(n){n.style.transition=".3s",n.style.scale="1"}};l.\u0275fac=function(e){return new(e||l)(V(G))},l.\u0275cmp=F({type:l,selectors:[["app-flash-ai"]],viewQuery:function(e,t){if(e&1&&(T(ne,5),T(ie,5)),e&2){let c;S(c=A())&&(t.messagesBoxScroll=c.first),S(c=A())&&(t.img=c.first)}},standalone:!0,features:[E],decls:31,vars:8,consts:[[1,"main-div"],[1,"lear"],["appResizeHeight","",1,"messages_scroll_box",3,"size"],["messagesScrollBox",""],[4,"ngIf"],["class","ai_loading"],[1,"selected_chat_user"],["title","delete chat","mat-icon-button","",1,"delete_button",3,"click"],["color","warn"],["routerLink","/chats-menu"],[1,"img_box"],[1,"message_sending_panel"],[3,"formGroup","ngSubmit"],["matInput","","formControlName","message","placeholder","Send Your Message to Ai","name","message","type","text",1,"message_input"],[1,"send_button",3,"disabled"],[1,"select_image"],["type","file","multiple","","accept","image/*",3,"change"],["imageInput",""],["style","font-size: 16px;","class","message",3,"class",4,"ngFor","ngForOf"],[1,"message",2,"font-size","16px"],[1,"animated-message",3,"mousedown","mouseup","touchstart","touchend"],["aiMessage",""],[1,"message-tools-box"],[2,"margin-right","10px",3,"click"],["icon",""],[3,"click"],[3,"mousedown","mouseup","touchstart","touchend"],["myMessage",""],[1,"ai_loading"],["src","../../../assets/images/loading.gif"],["img",""]],template:function(e,t){if(e&1){let c=M();s(0,"div",0)(1,"div",1)(2,"div",2,3),b(4,le,2,1,"div",4)(5,_e,4,0,"div",5),a(),s(6,"div",6)(7,"button",7),f("click",function(){return t.deleteChat()}),s(8,"mat-icon",8),d(9,"delete_sweep"),a()(),s(10,"a",9)(11,"mat-icon"),d(12,"arrow_back"),a()(),s(13,"div",10)(14,"mat-icon"),d(15,"auto_awesome"),a(),s(16,"h3"),d(17,"Flash Ai"),a()()(),s(18,"div",11)(19,"form",12),f("ngSubmit",function(){_(c);let x=g(30);return m(t.send(x))}),b(20,me,5,0,"div",4),O(21,"input",13),s(22,"button",14)(23,"mat-icon"),d(24,"auto_awesome"),a()()(),s(25,"label")(26,"span",15)(27,"mat-icon"),d(28,"photo_library"),a()(),s(29,"input",16,17),f("change",function(x){_(c);let y=g(30);return m(t.setImage(t.img,y,x))}),a()()()()()}e&2&&(p(2),C("size",170),p(2),C("ngIf",t.aiChatMessages!=null),p(1),w(5,t.isLoadedAiAnswer?-1:5),p(14),C("formGroup",t.form),p(1),C("ngIf",t.isSelectedImg),p(2),C("disabled",t.form.invalid),p(1),k(t.form.valid?"send_button_icon-anim":""))},dependencies:[X,J,N,Q,$,D,R,te,ee,I,z,Z,Y,K,j,B,H,q],styles:[".main-div[_ngcontent-%COMP%]{background-repeat:no-repeat;background-color:#1e1e1e;background-size:cover;height:100vh;box-shadow:inset #00000059 0 5px 15px}.lear[_ngcontent-%COMP%]{height:100%;display:flex;align-items:center;flex-direction:column;padding:90px 20px 0;position:relative;backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background-color:#0000001f}.message[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:#0e0e0e;border-radius:30px;position:relative;display:flex;align-items:center;padding:10px 15px 13px;border:1px solid #ffffff26}.message[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > pre[_ngcontent-%COMP%]{background:linear-gradient(to left,#003aff,#ff00fb);-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-user-select:auto;user-select:auto;table-layout:fixed;display:table;color:#fff;font-weight:400;font-size:20px;font-family:Rubik Glitch,system-ui;align-items:center;position:relative;margin-left:10px;white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word}.message[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{padding:10px 20px;border-radius:30px;background-image:linear-gradient(to left,#003399,#7100ff);color:#fff;font-weight:400;font-size:20px;font-family:Rubik Glitch,system-ui;display:flex;align-items:center;position:relative;margin-left:40px}.message[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{color:#fff;margin-bottom:10px;margin-left:5px}.message_box[_ngcontent-%COMP%]{overflow-x:scroll;width:100%;display:flex;align-items:center;justify-content:end;margin-top:20px;-ms-overflow-style:none;scrollbar-width:none}.message_box[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.message_box_reverce[_ngcontent-%COMP%]{width:100%;overflow-x:scroll;position:relative;display:flex;align-items:flex-start;justify-content:start;flex-direction:column;margin-top:13px}.message_sending_panel[_ngcontent-%COMP%]{position:fixed;display:flex;bottom:20px;width:70%;align-items:center}.message_sending_panel[_ngcontent-%COMP%] > form[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:row-reverse;position:relative;width:100%}.message_sending_panel[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:-60px;right:0}.message_sending_panel[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{color:#fff;position:absolute;top:-10px;right:-10px;background-color:#b54949;border-radius:50%}.message_sending_panel[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:55px;height:55px;border-radius:10px;border:5px solid #2a2a2a;object-fit:cover}.select_image[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:50px;width:50px;background-color:#2a2a2a;margin-left:10px;border-radius:50%}.select_image[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{color:#c5c5c5}.message_sending_panel[_ngcontent-%COMP%] > label[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{display:none}.message_input[_ngcontent-%COMP%]{box-shadow:#00000059 0 5px 15px;background-color:#2a2a2a;display:block;border:none;outline:none;width:100%;height:30px;font-size:20px;border-radius:30px;padding:25px 60px 25px 30px;font-family:Rubik Glitch,system-ui;font-weight:bolder;color:#fff}.message_input[_ngcontent-%COMP%]::placeholder{color:#fff9}.controllers_box[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;padding:0 25px}.send_button[_ngcontent-%COMP%]{width:40px;height:40px;border:none;position:absolute;right:6px;top:5px;border-radius:50%;background-color:#fff}.send_button[_ngcontent-%COMP%]:disabled{opacity:.3}.send_button[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{background:linear-gradient(to left,#003aff,#ff00fb);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.send_button_icon-anim[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_send_anim alternate-reverse .4s ease-in-out infinite}@keyframes _ngcontent-%COMP%_send_anim{0%{scale:.9}to{scale:1}}.messages_scroll_box[_ngcontent-%COMP%]{width:100%;overflow-y:scroll;padding-bottom:10px}.selected_chat_user[_ngcontent-%COMP%]{padding:15px 25px;background-color:#0a0a0a;position:absolute;left:0;top:0;width:100%;display:flex;align-items:center;justify-content:center;border-bottom:1px solid rgba(117,117,117,.42)}.delete_button[_ngcontent-%COMP%]{position:absolute;right:5px;display:flex;align-items:center;justify-content:center;filter:drop-shadow(0 0 12px #f44336);-webkit-filter:drop-shadow(0 0 12px #f44336)}.delete_button[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{font-size:30px;width:30px;height:30px}.selected_chat_user[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{margin-right:20px;display:none;width:25px}.selected_chat_user[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{color:#fff;display:block;font-size:25px}.selected_chat_user[_ngcontent-%COMP%] > .img_box[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center}.selected_chat_user[_ngcontent-%COMP%] > .img_box[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{background:linear-gradient(to left,#003aff,#ff00fb);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-size:25px;margin-left:20px}.selected_chat_user[_ngcontent-%COMP%] > .img_box[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{background:linear-gradient(to left,#003aff,#ff00fb);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-size:30px;width:30px;height:30px}.in-chat-user-avatar[_ngcontent-%COMP%]{width:30px;height:30px;object-fit:cover;border-radius:50%;display:block;position:absolute;left:-40px}.first_message_block[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{font-size:35px;color:#fff;margin-bottom:30px}.first_message_block[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative}.first_message_block[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:focus{outline:5px solid #5c13a4}.first_message_block[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > button[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{font-size:35px;width:33px;height:31px;color:#fff;display:flex;align-items:center;justify-content:center}@media screen and (max-width: 940px){.messages_scroll_box[_ngcontent-%COMP%]{width:100%}.selected_chat_user[_ngcontent-%COMP%]{padding:10px}.selected_chat_user[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{display:block;position:absolute;left:16px}.message_sending_panel[_ngcontent-%COMP%]{width:92%}}@media screen and (max-width: 594px){.first_message_block[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{width:100%}.first_message_block[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:90%}.message_box[_ngcontent-%COMP%]{margin-top:5px}.message[_ngcontent-%COMP%] > pre[_ngcontent-%COMP%], .message[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:16px}.lear[_ngcontent-%COMP%]{padding:90px 16px 0}}@media screen and (max-width: 574px){.first_message_block[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{font-size:30px;text-align:center;max-width:90%}}.ai_loading[_ngcontent-%COMP%]{display:flex;align-items:center;margin-left:5px}.ai_loading[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{color:#fff}.ai_loading[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:130px;border-radius:20px}.animated-message[_ngcontent-%COMP%]{position:relative;animation:.2s _ngcontent-%COMP%_animatedmessage alternate ease-in-out}@keyframes _ngcontent-%COMP%_animatedmessage{0%{transform:translate(-700px)}to{transform:translate(0)}}.message-tools-box[_ngcontent-%COMP%]{position:absolute;right:20px;top:-30px}.message-tools-box[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{color:#898989}"]});let o=l;return o})();export{ye as FlashAiComponent};