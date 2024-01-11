import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ResizeHeightDirective } from "../../directives/resize-height.directive";
import { MatIconModule } from "@angular/material/icon";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { WebSocketService } from "../../web-socket.service";
import { NgForOf } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { SetChatService } from "../../services/set-chat.service";
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from "@angular/router";
import { RequestService } from "../../services/request.service";
import { User } from "../../models/user.model";
import { environment } from "../../../environment/environment";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    ResizeHeightDirective,
    MatIconModule,
    ReactiveFormsModule,
    NgForOf,
    MatInputModule,
    FormsModule
  ],
  providers: [
    SetChatService
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {
  @ViewChild('messagesScrollBox') messagesBoxScroll?: ElementRef<HTMLDivElement>;

  messages: string[] = [];
  userInfo!: User;
  token: string | null = localStorage.getItem('token');

  form: FormGroup = new FormGroup({
    message: new FormControl('', Validators.required)
  })

  constructor(
    private activatedRoute: ActivatedRoute,
    public reqService: RequestService,
    private webSocket: WebSocketService) {

    this.webSocket.listen('message').subscribe((data: any) => {
      this.messages = data;
      setTimeout(() => {
        this.messagesBoxScroll?.nativeElement.scrollTo(0, this.messagesBoxScroll?.nativeElement.scrollHeight)
      }, 100)
    })
  }

  ngOnInit() {
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
    })
  }

  send() {
    if (this.form.value.message) {
      this.webSocket.emit('message', this.form.value.message);
    }
    this.form.reset();
    this.messagesBoxScroll?.nativeElement.scrollTo(0, this.messagesBoxScroll?.nativeElement.scrollHeight)
  }
}
