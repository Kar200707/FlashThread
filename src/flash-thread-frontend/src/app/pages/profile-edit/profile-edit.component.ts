import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { User } from '../../models/user.model';
import { environment } from '../../../environment/environment';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MainLoaderComponent } from '../../components/main-loader/main-loader.component';

@Component({
  selector: 'app-profile-edit',
  standalone: true,
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    FormsModule,
    MainLoaderComponent,
  ],
  providers: [
    RequestService
  ],
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.css'
})
export class ProfileEditComponent implements OnInit {
  token:any = localStorage.getItem('token');
  isVerifyCodeHasArrived:boolean = false;
  isProfileEdited: boolean = false;
  loaderMailVerify:boolean = false;
  mainLoader: boolean = false;
  noCorrectVerifyCode: boolean = false;
  isClickedToSendVerifyEmailLink: boolean = false;
  form: FormGroup = new FormGroup({
    avatar: new FormControl('',  Validators.required),
    f_name: new FormControl('', Validators.required),
    l_name: new FormControl(''),
    bio: new FormControl('')
  })
  profileData!: User;

  constructor(private reqService: RequestService) {  }

  ngOnInit() {
    this.reqService.post<User>(environment.getUserByToken, { token: this.token })
      .subscribe(data => {
        this.profileData = data;
      })
  }

  send (e: any) {
    this.mainLoader = true;

    let formData:FormData = new FormData();

    formData.set('file', e.files[0]);
    formData.set('name', this.form.value.f_name);
    formData.set('l_name', this.form.value.l_name);
    formData.set('bio', this.form.value.bio);
    formData.set('token', this.token);

    this.reqService.put<User>(environment.userEdit, formData)
      .subscribe(() => {
        this.mainLoader = false;
        this.isProfileEdited = true;

        setTimeout(() => {
          this.isProfileEdited = false;
        }, 3000)
      })
  }

  setImage(img: any, file: HTMLInputElement) {
    if (file.files) {
      let fr:FileReader = new FileReader();
      fr.readAsDataURL(file.files[0]);
      fr.onload = function () {
        img.src = fr.result;
      }
    }
  }

  sendVerifyCode() {
    this.isClickedToSendVerifyEmailLink = true;
    this.loaderMailVerify = true;
    this.reqService.post(environment.emailSendVerifyCode, { token: this.token })
      .subscribe(() => {
        this.loaderMailVerify = false;
        this.isVerifyCodeHasArrived = true;
      })
  }

  checkVerifyCode(input: HTMLInputElement) {
    this.loaderMailVerify = true;
    this.reqService.post<any>(
      environment.emailCheckVerifyCode,
      {
        token: this.token,
        code: input.value
      }
    )
      .subscribe(data => {
        if (data.status === 400) {
          this.noCorrectVerifyCode = true;
        } else {
          this.reqService.post<User>(environment.getUserByToken, { token: this.token })
            .subscribe(data => {
              this.loaderMailVerify = false;
              this.isVerifyCodeHasArrived = false;
              this.isClickedToSendVerifyEmailLink = false;
              this.profileData = data;
            })
        }

        this.isVerifyCodeHasArrived = true;
      })
    input.value = '';
  }
}
