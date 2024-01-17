import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { RequestService } from "./request.service";

@Injectable({
  providedIn: 'root'
})
export class SetChatService {
  test: string = 'dffd';

  constructor(private reqService: RequestService) {}

  setUserChat(userId: string) {

  }
}
