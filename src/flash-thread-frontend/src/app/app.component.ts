import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { LayoutComponent } from "./layout/layout.component";
import { MessagingService } from './services/messaging.service';
import { AngularFireMessaging, AngularFireMessagingModule } from '@angular/fire/compat/messaging';
import { MessagingModule } from '@angular/fire/messaging';
import { RequestService } from './services/request.service';
import { environment } from '../environment/environment';
import { HttpClientModule } from '@angular/common/http';

@Component({
  imports: [
    CommonModule,
    RouterOutlet,
    MainComponent,
    LayoutComponent,
    AngularFireMessagingModule,
    MessagingModule,
    HttpClientModule
  ],
  providers: [
    MessagingService,
    AngularFireMessaging,
    RequestService,
  ],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  message: any;
  token: string | null = localStorage.getItem('token');

  constructor(
    private reqService: RequestService,
    private messagingService: MessagingService) {  }

  ngOnInit() {
    this.messagingService.callRequestPermission.subscribe((token) => {
      if (token) {
        this.reqService.put(environment.userEdit, { device: token, token: this.token }).subscribe(() => {
          console.log('put socssefuly');
        })
      }
    })
    // this.messagingService.receiveMessage();
    // this.message = this.messagingService.currentMessage
  }
}
