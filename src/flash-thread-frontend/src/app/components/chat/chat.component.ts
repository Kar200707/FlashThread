import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ResizeHeightDirective } from "../../directives/resize-height.directive";
import { MatIconModule } from "@angular/material/icon";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { WebSocketService } from "../../web-socket.service";
import { NgForOf } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { SetChatService } from "../../services/set-chat.service";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    ResizeHeightDirective,
    MatIconModule,
    ReactiveFormsModule,
    NgForOf,
    MatInputModule,
    FormsModule
  ],
  providers: [
    SetChatService
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  @ViewChild('messagesScrollBox') messagesBoxScroll?: ElementRef<HTMLDivElement>;

  messages: string[] = [];

  form: FormGroup = new FormGroup({
    message: new FormControl('', Validators.required)
  })

  constructor(
    public setChatService: SetChatService,
    private webSocket: WebSocketService) {
    this.webSocket.listen('message').subscribe((data: any) => {
      this.messages = data;
      setTimeout(() => {
        this.messagesBoxScroll?.nativeElement.scrollTo(0, this.messagesBoxScroll?.nativeElement.scrollHeight)
      }, 100)
    })
  }

  send() {
    if (this.form.value.message) {
      this.webSocket.emit('message', this.form.value.message);
    }
    this.form.reset();
    this.messagesBoxScroll?.nativeElement.scrollTo(0, this.messagesBoxScroll?.nativeElement.scrollHeight)
  }
}
