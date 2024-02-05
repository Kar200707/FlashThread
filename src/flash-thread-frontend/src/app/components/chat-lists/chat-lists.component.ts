import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ResizeHeightDirective } from "../../directives/resize-height.directive";
import { User } from "../../models/user.model";
import { NgForOf, NgIf } from "@angular/common";
import { RequestService } from "../../services/request.service";
import { environment } from "../../../environment/environment";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { ChatInterface } from '../../models/chat.model';
import { MatIconModule } from '@angular/material/icon';
import { AiChatInterface } from '../../../../../app/models/ai-chat.model';

@Component({
  selector: 'app-chat-lists',
  standalone: true,
  imports: [
    ResizeHeightDirective,
    NgForOf,
    NgIf,
    RouterLink,
    UserDetailsComponent,
    MatAutocompleteModule,
    MatInputModule,
    RouterLinkActive,
    MatIconModule,
  ],
  providers: [
    RequestService,
  ],
  templateUrl: './chat-lists.component.html',
  styleUrl: './chat-lists.component.css'
})
export class ChatListsComponent implements OnInit {
  @Input('chat') chat!:HTMLDivElement;
  @ViewChild('search') input?: ElementRef<HTMLInputElement>;

  isOpenedSearchBlock:boolean = false;
  tokenUser!: User;
  chatsData: ChatInterface[] = [];
  aiLastMessage: string = 'loading...';
  token: string | null = localStorage.getItem('token');
  isOpenedUserDetails:boolean = false;
  userData: User = {
    avatar: './assets/images/load/load.jpg',
    name: 'loading name...',
    email: 'loading email...',
    bio: 'loading biography...',
    l_name: 'loading last name...'
  }
  searchData: User[] = [];
  chatUsersData: User[] = [];

  constructor(private reqService: RequestService) {  }

  ngOnInit() {
    const obj:any = {
      token: this.token
    }

    this.reqService.post<AiChatInterface>(environment.aiGetChat, { token: this.token })
      .subscribe(data => {
        if (data.messages[data.messages.length - 1].message.length > 25) {
          this.aiLastMessage = data.messages[data.messages.length - 1].message.slice(0, 24) + '...'
        } else {
          this.aiLastMessage = data.messages[data.messages.length - 1].message
        }

      })

    this.chat.addEventListener('click', () => {
      this.isOpenedSearchBlock = false;
    })

    this.reqService.post<User>(environment.getUserByToken, obj)
      .subscribe((data: User) => {
        this.tokenUser = data;
        this.userData = data;
      })

    this.reqService.post<ChatInterface[]>(environment.getActiveChats, obj)
      .subscribe((data: ChatInterface[]) => {
        this.chatsData = data;
        console.log(data);

        data.forEach((item: ChatInterface, i: number) => {
          if (item) {
            item.usersId.forEach((id: string) => {
              if (this.userData.id != id) {
                const userTokenObj:any = {
                  id: id,
                  token: this.token
                }

                this.reqService.post<User>(environment.getUserById, userTokenObj)
                  .subscribe((usersData: User) => {
                    this.chatUsersData.push(usersData);
                  })

              }
            })
          }
        })
      })
  }

  searchValue() {
    const obj: any = { name: this.input?.nativeElement.value.split('').filter(e => e.trim().length).join('') };

    this.reqService.post<User[]>(environment.search, obj).subscribe((data:User[]) => {
      this.searchData = data
    })
  }
}
