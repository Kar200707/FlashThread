import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ResizeHeightDirective } from "../../directives/resize-height.directive";
import { MatIconModule } from "@angular/material/icon";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { WebSocketService } from "../../web-socket.service";
import { NgForOf, NgIf } from '@angular/common';
import { MatInputModule } from "@angular/material/input";
import { SetChatService } from "../../services/set-chat.service";
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from "@angular/router";
import { RequestService } from "../../services/request.service";
import { User } from "../../models/user.model";
import { environment } from "../../../environment/environment";
import { HttpErrorResponse } from '@angular/common/http';
import { response } from 'express';
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
  providers: [
    SetChatService
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {

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

      setTimeout(() => {
        this.messagesBoxScroll?.nativeElement.scrollTo(0, this.messagesBoxScroll?.nativeElement.scrollHeight)
      }, 100)
    })
  }

  ngOnInit() {
    setTimeout(() => {
      this.messagesBoxScroll?.nativeElement.scrollTo(0, this.messagesBoxScroll?.nativeElement.scrollHeight)
    }, 800)
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

  send() {
    if (this.form.value.message) {
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
}
