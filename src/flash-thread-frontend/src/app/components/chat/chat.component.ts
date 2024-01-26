import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ResizeHeightDirective } from "../../directives/resize-height.directive";
import { MatIconModule } from "@angular/material/icon";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { WebSocketService } from "../../web-socket.service";
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
  userInfo!: User;
  chatInfo!: ChatInterface;
  thisUser!: User;
  idParam!: string;
  isChackChatValid: boolean = true;
  token: string | null = localStorage.getItem('token');

  form: FormGroup = new FormGroup({
    message: new FormControl('', Validators.required)
  })
  firstMessageForm: FormGroup = new FormGroup({
    message: new FormControl('Hi!')
  })

  constructor(
    private activatedRoute: ActivatedRoute,
    public reqService: RequestService,
    private webSocket: WebSocketService) {
    this.webSocket.listen('message').subscribe((data: any) => {
      this.chatMessaging = data;

      if (this.thisUser.id != data.messages[data.messages.length - 1].userId) {
        const audio = new Audio();
        audio.src = './assets/audios/notifiaction/tones.mp3'
        audio.load();
        audio.play();
      }

      setTimeout(() => {
        this.messagesBoxScroll?.nativeElement.scrollTo(0, this.messagesBoxScroll?.nativeElement.scrollHeight)
      }, 100)
    })
  }

  ngOnInit() {
    this.webSocket.listen('connect').subscribe((data) => {
      this.webSocket.emit('join', { id: this.thisUser.id });
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
          this.webSocket.emit('join', { id: userData.id });

          this.thisUser = userData;

          this.reqService.post<any>(environment.checkChat, { id1: userId, id2: userData.id})
            .subscribe((data: any) =>{
              this.chatMessaging = data;
              this.chatInfo = data;

              this.isChackChatValid = data.status !== 400;
            })
        })
    })
  }

  send() {
    if (this.form.value.message) {
      const date:Date = new Date();

      const newMesage = {
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

      this.chatMessaging.messages.push(newMesage);

      const obj = {
        message: this.form.value.message,
        chatId: this.chatInfo.id,
        token: this.token
      }

      this.webSocket.emit('message', obj);
    }
    this.form.reset();
    this.messagesBoxScroll?.nativeElement.scrollTo(0, this.messagesBoxScroll?.nativeElement.scrollHeight)
  }

  addNewChat() {
    const userId:string = this.idParam;
    const date:Date = new Date();
    const chatObj = {
      clientToken: this.token,
      usersId: [
        userId,
        this.thisUser.id
      ],
      messages: [
        {
          userId: this.thisUser.id,
          message: this.firstMessageForm.get('message')?.value,
          date: {
            day: date.getDay(),
            month: date.getMonth(),
            year: date.getFullYear(),
            hours: date.getHours(),
            minutes: date.getMinutes(),
            date: date.getDate()
          }
        }]
    }

    this.reqService.post<any>(environment.chat, chatObj).subscribe(chatData => {
      this.chatMessaging = chatData;
    })
    this.firstMessageForm.reset();

    this.isChackChatValid = true;
  }

  getChatUsers(id: string) {
    const obj: any = {
      token: this.token,
      id: id
    }

    let userChatInfo!: User;

    this.reqService.post<User>(environment.getUserById, obj)
      .subscribe((data: User) =>{
        userChatInfo = data;
      })

    return userChatInfo
  }

  protected readonly innerWidth = innerWidth;
}
