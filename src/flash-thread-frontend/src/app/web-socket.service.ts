import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable } from "rxjs";
import { wsHost } from '../environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  socket: any;
  readonly uri: string = wsHost;
  token: string | null = localStorage.getItem('token');
  io = io;

  listen(eventName: string) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data: any) => {
        subscriber.next(data);
      })
    })
  }

  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }
}
