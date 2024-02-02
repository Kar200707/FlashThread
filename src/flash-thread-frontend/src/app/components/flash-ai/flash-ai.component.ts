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
import { AssemblyAI } from 'assemblyai'

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
  aiChatMessages: any = [];
  isCopied: boolean = false;
  isSpeark:boolean = false;
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
    // const client = new AssemblyAI({
    //   apiKey: "47eb73e0530246aa9a0740a45b3a3519"
    // })
    //
    // const audioUrl =
    //   'https://www.russianforfree.com/resources/audio_podcasts/01-podcast-puteshestviye-avtostopom.mp3'
    //
    // const config = {
    //   audio_url: audioUrl
    // }
    //
    // const run = async () => {
    //   const transcript = await client.transcripts.create(config)
    //   console.log(transcript.text)
    // }
    //
    // run()
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

  textToSpeech(text: string) {
    this.isSpeark = !this.isSpeark;
    if (this.isSpeark) {
      const textToSpeech = new SpeechSynthesisUtterance();
      textToSpeech.text = text

      textToSpeech.lang = 'en-US'

      speechSynthesis.speak(textToSpeech);
    } else {
      speechSynthesis.pause();
    }
  }

  copyText(text: string) {
    this.isCopied = true;
    navigator.clipboard.writeText(text);
  }

  send() {
    this.isCopied = false;
    this.isSpeark = false;
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
        if (data.aiGeneratedMessage === '') {
          const audio:HTMLAudioElement = new Audio();
          audio.src = 'assets/audios/notifiaction/error-call-to-attention-129258.mp3'
          audio.load();
          audio.play();
        } else {
          const audio:HTMLAudioElement = new Audio();
          audio.src = 'assets/audios/notifiaction/bloop-2-186531.mp3'
          audio.load();
          audio.play();
        }

        const newMessageAi = {
          message: data.aiGeneratedMessage == '' ? 'try typing other text' : data.aiGeneratedMessage,
          sender: 'ai',
        }

        this.form.reset();
        setTimeout(() => {
          this.messagesBoxScroll?.nativeElement.scrollTo(0, this.messagesBoxScroll?.nativeElement.scrollHeight)
        }, 100)

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
