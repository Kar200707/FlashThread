import { Component, OnInit } from "@angular/core";
import { ChatListsComponent } from "../components/chat-lists/chat-lists.component";
import { ResizeHeightDirective } from "../directives/resize-height.directive";
import { ChatComponent } from "../components/chat/chat.component";
import { RequestService } from "../services/request.service";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { environment } from "../../environment/environment";
import { User } from "../models/user.model";
import { UserDetailsComponent } from "../components/user-details/user-details.component";
import { WebSocketService } from "../web-socket.service";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ChatListsComponent,
    ResizeHeightDirective,
    ChatComponent,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    UserDetailsComponent,
    RouterOutlet
  ],
  providers: [RequestService],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements  OnInit {
  isOpenedUserDetails:boolean = false;

  token: string | null = localStorage.getItem('token');
  userData: User = {
    avatar: './assets/images/load/load.jpg',
    name: 'loading name...',
    email: 'loading email...',
    bio: 'loading biography...',
    l_name: 'loading last name...'
  }

  constructor(
    private webSocket: WebSocketService,
    private reqService: RequestService) {
    this.webSocket.socket = this.webSocket.io(this.webSocket.uri, {
      auth: {
        token: this.webSocket.token
      }
    });
  }

  ngOnInit() {
    const obj:any = { token: this.token }

    this.reqService.post<User>(environment.getUser,  obj)
      .subscribe((user:User) => {
        this.userData = user;
      })
  }

  // send(e:any) {
  //   let formData = new FormData();
  //   formData.set("file", e.files[0])
  //
  //   this.reqService.post<any>('http://localhost:3000/api/reg', formData).subscribe(data => {})
  // }
}
