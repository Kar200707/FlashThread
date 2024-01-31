import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgForOf, NgIf } from '@angular/common';
import { ResizeHeightDirective } from '../../directives/resize-height.directive';
import { RouterLink } from '@angular/router';
import { User } from '../../models/user.model';
import { RequestService } from '../../services/request.service';
import { environment } from '../../../environment/environment';

@Component({
  selector: 'app-flash-ai',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    MatInputModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    ResizeHeightDirective,
    RouterLink,
  ],
  templateUrl: './flash-ai.component.html',
  styleUrl: './flash-ai.component.css'
})
export class FlashAiComponent implements OnInit{
  @ViewChild('messagesScrollBox') messagesBoxScroll?: ElementRef<HTMLDivElement>;

  isLoadedAiAnswer: boolean = true;
  aiChatMessages: any = []
  thisUser!: User;
  token: string | null = localStorage.getItem('token');

  form: FormGroup = new FormGroup({
    message: new FormControl('', Validators.required)
  })
  firstMessageForm: FormGroup = new FormGroup({
    message: new FormControl('Hi!')
  })

  constructor(
    public reqService: RequestService) {
  }

  ngOnInit() {
    const obj2: any = {
      token: this.token
    }

    this.reqService.post<User>(environment.getUserByToken,  obj2)
      .subscribe((userData: User) =>{
        this.thisUser = userData;
      })

    setTimeout(() => {
      if (this.messagesBoxScroll) {
        this.messagesBoxScroll.nativeElement.scrollTop = this.messagesBoxScroll.nativeElement.scrollHeight;
      }
    }, 1000)
  }

  send() {
    this.isLoadedAiAnswer = false;
    if (this.form.value.message) {
      const date:Date = new Date();

      const newMesage = {
        message: this.form.value.message,
        sender: (this.thisUser.id as string),
      }

      this.aiChatMessages.push(newMesage);

      const obj = {
        message: this.form.value.message,
        userToken: this.token
      }

      this.reqService.post(environment.ai, obj).subscribe((data: any) => {
        const newMessageAi = {
          message: data.aiGeneratedmessage,
          sender: 'ai',
        }

        this.isLoadedAiAnswer = true;
        this.aiChatMessages.push(newMessageAi);
      })
    }
    this.form.reset();
    setTimeout(() => {
      this.messagesBoxScroll?.nativeElement.scrollTo(0, this.messagesBoxScroll?.nativeElement.scrollHeight)
    }, 100)
  }

  protected readonly innerWidth = innerWidth;
}
