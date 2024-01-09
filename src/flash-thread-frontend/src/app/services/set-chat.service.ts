import { ElementRef, Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { RequestService } from "./request.service";
import { environment } from "../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class SetChatService {
  selectedUser!: User;
  token: string | null = localStorage.getItem('token');
  testuserName: string = '';
  test: string = 'dffd';

  constructor(private reqService: RequestService) {}

  setUserChat(userId: string) {
    this.test = userId;
    console.log(this.test);
    const obj:any = {
      id: userId,
      token: this.token
    }

    if (userId) {
      this.reqService.post<User>(environment.getUserById, obj).subscribe((data: User) => {
        this.selectedUser = data;
        this.testuserName = data.name;
        console.log(this.selectedUser);
      })
    }
  }
}
