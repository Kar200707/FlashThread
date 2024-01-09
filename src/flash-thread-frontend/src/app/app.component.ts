import { Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { LayoutComponent } from "./layout/layout.component";
import { WebSocketService } from "./web-socket.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainComponent, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent{
  title = 'flash-thread-frontend';

  constructor(private webSocket: WebSocketService) {  }

}
