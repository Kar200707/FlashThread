import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ResizeHeightDirective } from "../../directives/resize-height.directive";
import { MatIconModule } from "@angular/material/icon";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { WebSocketService } from "../../services/web-socket.service";
import { NgForOf, NgIf } from '@angular/common';
import { MatInputModule } from "@angular/material/input";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RequestService } from "../../services/request.service";
import { User } from "../../models/user.model";
import { environment } from "../../../environment/environment";;
import { ChatInterface } from '../../models/chat.model';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    ResizeHeightDirective,
    MatIconModule,
    ReactiveFormsModule,
    NgForOf,
    MatInputModule,
    FormsModule,
    NgIf,
    RouterLink,
  ],
  providers: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {

  @ViewChild('messagesScrollBox') messagesBoxScroll?: ElementRef<HTMLDivElement>;

  chatMessaging!: ChatInterface;
  isPrint: boolean = false;
  userInfo!: User;
  isOpenedMessageOptions: boolean = false;
  chatInfo!: ChatInterface;
  thisUser!: User;
  idParam!: string;
  private touchTime = 0;
  isChackChatValid: boolean = true;
  token: string | null = localStorage.getItem('token');
  messageSelectTimeOut: any;

  form: FormGroup = new FormGroup({
    message: new FormControl('', Validators.required)
  })

  constructor(
    private activatedRoute: ActivatedRoute,
    public reqService: RequestService,
    private webSocket: WebSocketService) {

    this.webSocket.listen('message').subscribe((data: any) => {
      this.chatMessaging.messages.push(data);
      setTimeout(() => {
        if (this.messagesBoxScroll) {
          this.messagesBoxScroll.nativeElement.scrollTop = this.messagesBoxScroll.nativeElement.scrollHeight;
        }}, 100)
      if (this.thisUser.id != data.userId) {
        const audio = new Audio();
        audio.src = './assets/audios/notifiaction/tones.mp3'
        audio.load();
        audio.play();
      }
    })
  }

  scrollDown() {
    setTimeout(() => {
      if (this.messagesBoxScroll) {
        this.messagesBoxScroll.nativeElement.scrollTop = this.messagesBoxScroll.nativeElement.scrollHeight;
      }
    }, 100)
  }

  ngOnInit() {
    this.webSocket.listen('emoji').subscribe((data: any) => {
      this.reqService.post<ChatInterface>(environment.getChat,
        {
          clientToken: this.token,
          chatId: this.chatInfo.id
        })
        .subscribe(data => {
          this.chatMessaging = data;
        })
    })

    this.activatedRoute.params.subscribe((params: any) => {
      this.idParam = params.id;
      const userId: string = params.id;

      const obj: any = {
        token: this.token,
        id: userId
      }

      this.reqService.post<User>(environment.getUserById, obj)
        .subscribe((data: User) =>{
          this.userInfo = data;
        })

      const obj2: any = {
        token: this.token
      }

      this.reqService.post<User>(environment.getUserByToken,  obj2)
        .subscribe((userData: User) =>{
          this.thisUser = userData;

          this.reqService.post<any>(environment.checkChat, { id1: userId, id2: userData.id})
            .subscribe((data: any) =>{
              this.chatMessaging = data;
              this.chatInfo = data;
              setTimeout(() => {
                if (this.messagesBoxScroll) {
                  this.messagesBoxScroll.nativeElement.scrollTop = this.messagesBoxScroll.nativeElement.scrollHeight;
                }
              }, 100)

              this.isChackChatValid = data.status !== 400;
            })
        })
    })
  }

  send() {
    if (this.form.value.message) {
      if (!this.isChackChatValid) {
        const demoChat: ChatInterface = {
          id: 0,
          usersId: [],
          messages: []
        }
        this.chatMessaging = demoChat;

        this.addNewChat().subscribe(chatData => {
          this.chatMessaging = chatData;
          this.chatInfo = chatData;
          this.isChackChatValid = true;
        });
      }

      const date:Date = new Date();
      const newMessage = {
        message: this.form.value.message,
        userId: this.thisUser.id ? this.thisUser.id : '',
        date: {
          day: date.getDay(),
          month: date.getMonth(),
          year: date.getFullYear(),
          hours: date.getHours(),
          minutes: date.getMinutes(),
          date: date.getDate()
        }
      }

      this.chatMessaging.messages.push(newMessage);
      const obj = {
        message: this.form.value.message,
        chatId: this.chatInfo.id,
        token: this.token
      }

      this.webSocket.emit('message', obj);
    }

    this.form.reset();
    setTimeout(() => {
      this.messagesBoxScroll?.nativeElement.scrollTo(0, this.messagesBoxScroll?.nativeElement.scrollHeight)
    }, 100)
  }

  printing() {
    // this.isPrint = true
    // let timeOut = setTimeout(() => {
    //   clearTimeout(timeOut);
    //   this.isPrint = false
    //   console.log(this.isPrint);
    // }, 1000);
    // console.log(this.isPrint);
  }

  addNewChat() {
    const userId:string = this.idParam;

    return this.reqService.post<any>(environment.chat,
      {
        clientToken: this.token,
        message: this.form.value.message,
        userId: userId
      }
    )
  }

  deleteMessage(id: string | undefined) {
    if (confirm('delete this message?')) {
      this.reqService.delete<any>(environment.chatMessagesDelete, {
        token: this.token,
        chatId: this.chatMessaging.id,
        messageId: id
      }).subscribe((data) => {
        this.isOpenedMessageOptions = false;
        this.chatMessaging.messages = data;
      })
    }
  }

  selectMessage(messageElement: HTMLElement) {
    messageElement.style.transition = '.3s'
    messageElement.style.scale = '.96'
    this.messageSelectTimeOut = setTimeout(() => {
      this.isOpenedMessageOptions = true;
    }, 800)
  }

  unselectMessage(messageElement: HTMLElement) {
    messageElement.style.transition = '.3s'
    messageElement.style.scale = '1'
    clearTimeout(this.messageSelectTimeOut);
  }

  emoji(isCalled: boolean, isEmojiSended: boolean | undefined, messageId: string | undefined) {
    if (this.touchTime == 0) {
      this.touchTime = new Date().getTime();
    } else {
      if (((new Date().getTime()) - this.touchTime) < 800) {
        if (isCalled) {
          this.webSocket.emit('emoji',
            {
              token: this.token,
              chatId: this.chatMessaging.id
            })

          if (!isEmojiSended) {
            this.reqService.post<any>(environment.setEmoji, {
              token: this.token,
              chatId: this.chatMessaging.id,
              messageId: messageId
            }).subscribe((data) => {
              this.isOpenedMessageOptions = false;
              this.chatMessaging.messages = data;
            })
          } else {
            this.reqService.post<any>(environment.removeEmoji, {
              token: this.token,
              chatId: this.chatMessaging.id,
              messageId: messageId
            }).subscribe((data) => {
              this.isOpenedMessageOptions = false;
              this.chatMessaging.messages = data;
            })
          }
        }

      } else {
        this.touchTime = new Date().getTime();
      }
    }
  }

  protected readonly innerWidth = innerWidth;
  protected readonly setTimeout = setTimeout;
}
