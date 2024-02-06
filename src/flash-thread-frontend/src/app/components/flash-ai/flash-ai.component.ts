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
import { AiChatInterface } from '../../../../../app/models/ai-chat.model';
import { MatButtonModule } from '@angular/material/button';

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
    MatButtonModule,
  ],
  templateUrl: './flash-ai.component.html',
  styleUrl: './flash-ai.component.css'
})
export class FlashAiComponent implements OnInit {
  @ViewChild('messagesScrollBox') messagesBoxScroll?: ElementRef<HTMLDivElement>;
  @ViewChild('img') img?: ElementRef<any>;

  isLoadedAiAnswer: boolean = true;
  aiChatMessages: any = [];
  isCopied: boolean = false;
  isSpeak:boolean = false;
  thisUser!: User;
  token: any = localStorage.getItem('token');
  isSelectedImg: boolean = false;
  chatHistory: any[] = [];

  form: FormGroup = new FormGroup({
    message: new FormControl('', Validators.required)
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
    this.reqService.post<AiChatInterface>(environment.aiGetChat, { token: this.token })
      .subscribe(data => {
        this.aiChatMessages = data.messages;
        setTimeout(() => {
          if (this.messagesBoxScroll) {
            this.messagesBoxScroll.nativeElement.scrollTop = this.messagesBoxScroll.nativeElement.scrollHeight;
          }
        }, 100);
      })

    const obj2: any = {
      token: this.token
    }

    this.reqService.post<User>(environment.getUserByToken,  obj2)
      .subscribe((userData: User) =>{
        this.thisUser = userData;
      })
  }

  textToSpeech(text: string) {
    this.isSpeak = !this.isSpeak;
    if (this.isSpeak) {
      const textToSpeech = new SpeechSynthesisUtterance();
      textToSpeech.text = text

      textToSpeech.lang = 'en-US'

      speechSynthesis.speak(textToSpeech);
    } else {
      speechSynthesis.cancel();
    }
  }

  copyText(text: string, icon:any) {
    icon.innerText = 'done'
    this.isCopied = true;
    navigator.clipboard.writeText(text);
  }

  setImage(img: any, file: HTMLInputElement, e: any) {
    try {
      this.isSelectedImg = true;
      let fr = new FileReader();
      if (file.files) {
        fr.readAsDataURL(file.files[0]);
        fr.onload = () => {
          if (this.img) {
            this.img.nativeElement.src = fr.result;
          }
        }
      }
    } catch (e) {
      this.isSelectedImg = false;
    }
  }

  deleteChat() {
    if (confirm('delete this ai chat?')) {
      this.reqService.delete(environment.aiDeleteChat, { token: this.token })
        .subscribe(() => {
          this.aiChatMessages = [];
        })
    }
  }

  send(e?: any) {
    this.isCopied = false;
    this.isSpeak = false;
    this.isLoadedAiAnswer = false;
    if (this.form.value.message) {
      const date:Date = new Date();

      const newMesage = {
        message: this.form.value.message,
        sender: 'user',
      }
      const newMessage = this.form.value.message;

      this.aiChatMessages.push(newMesage);
      setTimeout(() => {
        this.messagesBoxScroll?.nativeElement.scrollTo(0, this.messagesBoxScroll?.nativeElement.scrollHeight)
      }, 100)

      const formData = new FormData()
      if (this.isSelectedImg) {
        formData.set('image', e.files[0]);
      }
      formData.set('message', this.form.value.message);
      formData.set('userToken', this.token);
      formData.set('history', JSON.stringify(this.chatHistory));

      this.reqService.post(environment.ai, formData).subscribe((data: any) => {
        this.chatHistory.push({
          role: 'user',
          parts: newMessage,
        })
        this.chatHistory.push({
          role: 'model',
          parts: data.aiGeneratedMessage,
        })

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
          message: data.aiGeneratedMessage === '' ? 'try typing other text' : data.aiGeneratedMessage,
          sender: 'ai',
        }

        this.form.reset();

        this.isLoadedAiAnswer = true;
        this.aiChatMessages.push(newMessageAi);

        setTimeout(() => {
          this.messagesBoxScroll?.nativeElement.scrollTo(0, this.messagesBoxScroll?.nativeElement.scrollHeight)
        }, 100)
      })
    }
    this.form.reset();
  }

  selectMessage(messageElement: HTMLElement) {
    messageElement.style.transition = '.3s'
    messageElement.style.scale = '.98'
  }

  unselectMessage(messageElement: HTMLElement) {
    messageElement.style.transition = '.3s'
    messageElement.style.scale = '1'
  }

  protected readonly innerWidth = innerWidth;
}
