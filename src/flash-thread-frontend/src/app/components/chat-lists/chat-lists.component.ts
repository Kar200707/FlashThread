import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ResizeHeightDirective } from "../../directives/resize-height.directive";
import { User } from "../../models/user.model";
import { NgForOf, NgIf } from "@angular/common";
import { RequestService } from "../../services/request.service";
import { environment } from "../../../environment/environment";
import { SetChatService } from "../../services/set-chat.service";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-chat-lists',
  standalone: true,
  imports: [
    ResizeHeightDirective,
    NgForOf,
    NgIf,
    RouterLink
  ],
  providers: [
    RequestService,
    SetChatService
  ],
  templateUrl: './chat-lists.component.html',
  styleUrl: './chat-lists.component.css'
})
export class ChatListsComponent implements OnInit {
  @ViewChild('search') input?: ElementRef<HTMLInputElement>
  tokenUser!: User;
  token: string | null = localStorage.getItem('token');

  searchData: User[] = [];

  constructor(
    private router: Router,
    private setChatService: SetChatService,
    private reqService: RequestService) {}

  ngOnInit() {
    const obj:any = {
      token: this.token
    }

    this.reqService.post<User>(environment.getUserByToken, obj)
      .subscribe((data: User) => {
        this.tokenUser = data;
      })
  }

  searchValue() {
    const obj: any = { name: this.input?.nativeElement.value.split('').filter(e => e.trim().length).join('') };

    this.reqService.post<User[]>(environment.search, obj).subscribe((data:User[]) => {
      this.searchData = data
    })
  }

  setChat(userId:any) {
    this.setChatService.setUserChat(userId);
  }
}
