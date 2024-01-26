import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ResizeHeightDirective } from "../../directives/resize-height.directive";
import { MatIconModule } from "@angular/material/icon";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { WebSocketService } from "../../web-socket.service";
import { NgForOf, NgIf } from '@angular/common';
import { MatInputModule } from "@angular/material/input";
import { ActivatedRoute } from "@angular/router";
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
  ],
  providers: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit, AfterViewInit {

  @ViewChild('messagesScrollBox') messagesBoxScroll?: ElementRef<HTMLDivElement>;

  chatMessaging!: ChatInterface;
  userInfo!: User;
  chatInfo!: ChatInterface;
  thisUser!: User;
  token: string | null = localStorage.getItem('token');

  form: FormGroup = new FormGroup({
    message: new FormControl('', Validators.required)
  })

  constructor(
    private activatedRoute: ActivatedRoute,
    public reqService: RequestService,
    private webSocket: WebSocketService) {
    this.webSocket.listen('message').subscribe((data: any) => {
      this.chatMessaging = data;
      console.log(data);

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

              if (data.status === 400) {
                const chatObj = {
                  clientToken: this.token,
                  usersId: [
                    userId,
                    userData.id
                  ],
                  messages: []
                }

                this.reqService.post<any>(environment.chat, chatObj).subscribe(chatData => {
                  console.log(chatData);
                })
              }
            })
        })
    })
  }

  ngAfterViewInit() {

    this.messagesBoxScroll?.nativeElement.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }

  send() {
    if (this.form.value.message) {
      const date:Date =new Date();

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
}
