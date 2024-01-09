import { Component, ElementRef, ViewChild } from "@angular/core";
import { ResizeHeightDirective } from "../../directives/resize-height.directive";
import { SearchInfoService } from "../../services/search-info.service";
import { User } from "../../models/user.model";
import { NgForOf, NgIf } from "@angular/common";
import { RequestService } from "../../services/request.service";
import { environment } from "../../../environment/environment";
import { SetChatService } from "../../services/set-chat.service";

@Component({
  selector: 'app-chat-lists',
  standalone: true,
  imports: [
    ResizeHeightDirective,
    NgForOf,
    NgIf
  ],
  providers: [
    RequestService,
    SetChatService
  ],
  templateUrl: './chat-lists.component.html',
  styleUrl: './chat-lists.component.css'
})
export class ChatListsComponent {
  @ViewChild('search') input?: ElementRef<HTMLInputElement>

  searchData: User[] = [];

  constructor(
    private setChatService: SetChatService,
    private reqService: RequestService) {}

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
