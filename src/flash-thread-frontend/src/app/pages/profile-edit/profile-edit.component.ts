import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { User } from '../../models/user.model';
import { environment } from '../../../environment/environment';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  standalone: true,
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
  ],
  providers: [
    RequestService
  ],
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.css'
})
export class ProfileEditComponent implements OnInit {
  token:any = localStorage.getItem('token');
  form: FormGroup = new FormGroup({
    avatar: new FormControl('',  Validators.required),
    f_name: new FormControl('', Validators.required),
    l_name: new FormControl(''),
    bio: new FormControl('')
  })
  profileData!:User;

  constructor(private reqService: RequestService) {  }

  ngOnInit() {
    this.reqService.post<User>(environment.getUserByToken, { token: this.token })
      .subscribe(data => {
        this.profileData = data;
      })
  }

  send (e: any) {
    let formData:FormData = new FormData();

    formData.set('file', e.files[0]);
    formData.set('name', this.form.value.f_name);
    formData.set('l_name', this.form.value.l_name);
    formData.set('bio', this.form.value.bio);
    formData.set('token', this.token);

    this.reqService.put<User>(environment.userEdit, formData)
      .subscribe((data) => {})
  }

  setImage(img: any, file: HTMLInputElement) {
    if (file.files) {
      var fr = new FileReader();
      fr.readAsDataURL(file.files[0]);
      fr.onload = function () {
        img.src = fr.result;
      }
    }
  }
}
