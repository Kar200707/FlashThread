import { ElementRef, Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { RequestService } from "./request.service";
import { environment } from "../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class SetChatService {
  selectedUser!: User;
  testuserName: string = '';
  test: string = 'dffd';

  constructor(private reqService: RequestService) {}

  setUserChat(userId: string) {

  }
}
