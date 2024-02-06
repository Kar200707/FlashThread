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
import { SetThemesService } from './services/set-themes.service';
import { Capacitor } from '@capacitor/core';

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
    private setMobileThemes: SetThemesService,
    private reqService: RequestService,
    private messagingService: MessagingService) {
    if (Capacitor.isNative) {
      this.setMobileThemes.setStatusBarStyle('#000000').then().catch();
    }
  }

  ngOnInit() {
    this.messagingService.callRequestPermission.subscribe((token) => {
      if (token) {
        this.reqService.put(environment.userEdit, { device: token, token: this.token }).subscribe(() => {})
      }
    })
    // this.messagingService.receiveMessage();
    // this.message = this.messagingService.currentMessage
  }
}
