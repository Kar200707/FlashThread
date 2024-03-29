import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/user.model';
import { ChatInterface } from '../../models/chat.model';
import { RequestService } from '../../services/request.service';
import { environment } from '../../../environment/environment';
import { ResizeHeightDirective } from '../../directives/resize-height.directive';
import { NgForOf, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserDetailsComponent } from '../../components/user-details/user-details.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { AiChatInterface } from '../../../../../app/models/ai-chat.model';
import { WebSocketService } from '../../services/web-socket.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-chats-menu',
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
    MatButtonModule,
  ],
  providers: [
    RequestService,
  ],
  templateUrl: './chats-menu.component.html',
  styleUrl: './chats-menu.component.css'
})
export class ChatsMenuComponent implements OnInit {
  @ViewChild('search') input?: ElementRef<HTMLInputElement>;

  isOpenedSearchBlock:boolean = false;
  tokenUser!: User;
  panelWidth: string = '380px';
  isPanelResizeSelected: boolean = false;
  aiLastMessage: string = '';
  chatsData: ChatInterface[] = [];
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

  constructor(
    private webSocket: WebSocketService,
    private reqService: RequestService) {
    // this.webSocket.listen('message').subscribe(() => {
    //   this.getActiveChats();
    // })
  }

  ngOnInit() {
    window.addEventListener('mouseup', () => this.isPanelResizeSelected = false);
    window.addEventListener('mousemove', (e) => {
      if (this.isPanelResizeSelected) {
        if (e.clientX < 800) {
          if (e.clientX > 300) {
            this.panelWidth = e.clientX + 'px';
          } else {
            this.panelWidth = '300px';
          }
        } else {
          this.panelWidth = '800px';
        }
      }
    });

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

    this.reqService.post<User>(environment.getUserByToken, obj)
      .subscribe((data: User) => {
        this.tokenUser = data;
        this.userData = data;
      })

    this.getActiveChats();
  }

  getActiveChats() {
    this.chatsData = [];
    this.chatUsersData = [];

    const obj:any = {
      token: this.token
    }

    this.reqService.post<ChatInterface[]>(environment.getActiveChats, obj)
      .subscribe((data: ChatInterface[]) => {
        this.chatsData = data;

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

  selected() {
    this.isPanelResizeSelected = true;
  }
  unselected() {
    this.isPanelResizeSelected = false;
  }

  deleteChat(chatId:any) {
    if (chatId) {
      if (confirm('Delete this chat?')) {
        this.reqService.delete(environment.delChat, {
          token: this.token,
          chatId: chatId,
        }).subscribe(() => {
          this.getActiveChats();
        });
      }
    }
  }

  searchValue() {
    const obj: any = { name: this.input?.nativeElement.value.split('').filter(e => e.trim().length).join('') };

    this.reqService.post<User[]>(environment.search, obj).subscribe((data:User[]) => {
      this.searchData = data
    })
  }

  protected readonly innerWidth = innerWidth;
}
