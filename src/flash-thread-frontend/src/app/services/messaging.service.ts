import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { AngularFireMessaging } from '@angular/fire/compat/messaging';

@Injectable()
export class MessagingService {
  currentMessage = new BehaviorSubject(null);
  callRequestPermission = this.angularFireMessaging.requestToken

  constructor(private angularFireMessaging: AngularFireMessaging) {
    this.angularFireMessaging.messages.subscribe(
      (_messaging: any) => {
        _messaging.onMessage = _messaging.onMessage.bind(_messaging);
        _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
      }
    )
  }

  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(
      (payload: any) => {
        console.log("new message received. ", payload);
        this.currentMessage.next(payload);
      })
  }
}
